import React, { useState, useEffect, useMemo, Fragment } from 'react';
import { 
  Book, Loader, Printer, Download, Search, Filter, Trash2, 
  ArrowUpRight, ArrowDownRight, RefreshCw, CheckCircle2, HelpCircle, 
  FileText, Calendar, Building2, AlertCircle, Sparkles, User,
  Receipt, ExternalLink, X, Check
} from 'lucide-react';
import * as XLSX from 'xlsx';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';

export default function JournalLedgerPage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  
  const [journals, setJournals] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletingId, setDeletingId] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedSlipJournal, setSelectedSlipJournal] = useState(null);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__journal_ledger');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });
  
  const [filter, setFilter] = useState({
    account: '',
    startDate: '',
    endDate: '',
  });

  const isSuperAdmin = ['super_admin', 'co_super_admin'].includes(user?.userType) || 
                       ['super_admin', 'co_super_admin'].includes(user?.adminRole);

  useEffect(() => {
    fetchAccounts();
    fetchJournals();
  }, []);

  const fetchAccounts = async () => {
    try {
      const res = await api.get('/accounting/accounts');
      if (res.data.success) {
        setAccounts(res.data.data?.accounts || res.data.accounts || []);
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const fetchJournals = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filter.account) params.account = filter.account;
      if (filter.startDate) params.startDate = filter.startDate;
      if (filter.endDate) params.endDate = filter.endDate;

      const res = await api.get('/accounting/journals', { params });
      if (res.data.success) {
        const list = res.data.data?.journals || res.data.journals || [];
        setJournals(list);
      }
    } catch (error) {
      console.error('Error fetching journals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    fetchJournals();
  };

  const handleResetFilter = () => {
    setFilter({ account: '', startDate: '', endDate: '' });
    setSearchQuery('');
    setTimeout(() => {
      fetchJournals();
    }, 50);
  };

  const handleDeleteJournal = async (id, ref) => {
    if (!window.confirm(`আপনি কি নিশ্চিত যে রেফারেন্স "${ref || id}"-এর জার্নাল এন্ট্রিটি মুছে ফেলতে চান?`)) {
      return;
    }
    try {
      setDeletingId(id);
      const res = await api.delete(`/accounting/journals/${id}`);
      if (res.data.success) {
        setJournals(prev => prev.filter(j => (j._id || j.id) !== id));
      }
    } catch (error) {
      alert(error.response?.data?.message || 'জার্নাল মুছতে সমস্যা হয়েছে');
    } finally {
      setDeletingId(null);
    }
  };

  // Filter journals based on search query (including party name, studentId, etc.)
  const filteredJournals = useMemo(() => {
    if (!searchQuery.trim()) return journals;
    const q = searchQuery.toLowerCase().trim();
    return journals.filter(j => {
      const ref = (j.reference || '').toLowerCase();
      const desc = (j.description || '').toLowerCase();
      const party = (j.sourceDetails?.partyName || '').toLowerCase();
      const stuId = (j.sourceDetails?.studentId || '').toLowerCase();
      const invNum = (j.sourceDetails?.invoiceNumber || '').toLowerCase();
      const matchEntries = (j.entries || []).some(e => {
        const accName = (e.accountDetails?.name || '').toLowerCase();
        const accCode = (e.accountDetails?.code || '').toLowerCase();
        return accName.includes(q) || accCode.includes(q);
      });
      return ref.includes(q) || desc.includes(q) || party.includes(q) || stuId.includes(q) || invNum.includes(q) || matchEntries;
    });
  }, [journals, searchQuery]);

  // Aggregate stats
  const stats = useMemo(() => {
    let totalDebit = 0;
    let totalCredit = 0;
    filteredJournals.forEach(j => {
      (j.entries || []).forEach(e => {
        totalDebit += Number(e.debit) || 0;
        totalCredit += Number(e.credit) || 0;
      });
    });
    const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;
    return {
      totalCount: filteredJournals.length,
      totalDebit,
      totalCredit,
      isBalanced
    };
  }, [filteredJournals]);

  // Excel Export
  const exportToExcel = () => {
    const data = [];
    filteredJournals.forEach(j => {
      const partyName = j.sourceDetails?.partyName || '-';
      const studentId = j.sourceDetails?.studentId || '-';
      const classSec = j.sourceDetails?.classSection || '-';
      const invoiceNo = j.sourceDetails?.invoiceNumber || '-';

      (j.entries || []).forEach((e) => {
        data.push({
          'তারিখ': formatDateDDMMYYYY(j.date),
          'রেফারেন্স / ভাউচার': j.reference || '-',
          'জমাদানকারী / শিক্ষার্থী': partyName,
          'শিক্ষার্থী আইডি': studentId,
          'শ্রেণি ও শাখা': classSec,
          'ইনভয়েস নম্বর': invoiceNo,
          'বিবরণ': j.description || '-',
          'হিসাব খাত (Account)': `${e.accountDetails?.name || 'অজানা'} ${e.accountDetails?.code ? `(${e.accountDetails.code})` : ''}`,
          'হিসাবের ধরন': e.accountDetails?.type || '-',
          'ডেবিট (৳)': Number(e.debit) || 0,
          'ক্রেডিট (৳)': Number(e.credit) || 0,
        });
      });
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'জার্নাল ও লেজার');
    XLSX.writeFile(wb, `Journal_Ledger_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePrintSlip = () => {
    if (!selectedSlipJournal) return;
    const printWin = window.open('', '_blank', 'width=800,height=900');
    if (!printWin) {
      window.print();
      return;
    }
    const amountVal = Number(selectedSlipJournal.entries?.[0]?.debit || selectedSlipJournal.entries?.[0]?.credit || 0).toFixed(2);
    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="utf-8">
  <title>অর্থ প্রাপ্তি রসিদ - ${selectedSlipJournal.reference || ''}</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; font-size: 12.5px; }
    .box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; font-size: 13px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
    th { background: #f1f5f9; padding: 8px 10px; border-bottom: 2px solid #cbd5e1; text-align: left; }
    td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
    @media print { .no-print { display: none !important; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="no-print" style="background:#0f172a; padding:10px 18px; margin-bottom:16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
    <span style="font-weight:700;">🖨️ অর্থ প্রাপ্তি রসিদ — ${selectedSlipJournal.reference || ''}</span>
    <div style="display:flex; gap:10px;">
      <button onclick="window.print()" style="padding:6px 18px; background:#10b981; color:#fff; border:none; border-radius:6px; font-weight:700; cursor:pointer;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding:6px 14px; background:#475569; color:#fff; border:none; border-radius:6px; cursor:pointer;">❌ বন্ধ করুন</button>
    </div>
  </div>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'অফিসিয়াল অর্থ প্রাপ্তি রসিদ (Money Receipt)',
        orientation: 'portrait',
        metaLeft: `রসিদ নং: <strong>${selectedSlipJournal.reference || '—'}</strong>`,
        metaRight: `তারিখ: <strong>${formatDateDDMMYYYY(selectedSlipJournal.date)}</strong>`
      })}

      <div class="info-grid">
        <div>
          <div><strong>ইনভয়েস নম্বর:</strong> ${selectedSlipJournal.sourceDetails?.invoiceNumber || '—'}</div>
          <div><strong>পেমেন্ট মাধ্যম:</strong> ${(selectedSlipJournal.sourceDetails?.paymentMethod || 'CASH').toUpperCase()}</div>
        </div>
        <div style="text-align: right;">
          <div><strong>তারিখ:</strong> ${formatDateDDMMYYYY(selectedSlipJournal.date)}</div>
          <div><strong>অবস্থা:</strong> <span style="color:#15803d; font-weight:bold;">পরিশোধিত (PAID)</span></div>
        </div>
      </div>

      <div class="box">
        <div style="font-size:11px; color:#64748b; font-weight:bold; text-transform:uppercase; margin-bottom:6px;">জমাদানকারীর বিবরণ:</div>
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:6px;">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${selectedSlipJournal.sourceDetails?.partyName || '—'}</div>
          <div><strong>আইডি নং:</strong> ${selectedSlipJournal.sourceDetails?.studentId || '—'}</div>
          <div><strong>শ্রেণি ও শাখা:</strong> ${selectedSlipJournal.sourceDetails?.classSection || '—'}</div>
          <div><strong>বিবরণ:</strong> ${selectedSlipJournal.sourceDetails?.invoiceTitle || selectedSlipJournal.description}</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>খাত / বিবরণ</th>
            <th style="text-align:right; width:140px;">পরিমাণ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${selectedSlipJournal.sourceDetails?.invoiceTitle || selectedSlipJournal.description || 'শিক্ষার্থী ফি / আদায়'}</td>
            <td style="text-align:right; font-weight:bold;">৳ ${amountVal}</td>
          </tr>
          <tr style="background:#f8fafc; font-weight:bold;">
            <td style="text-align:right;">সর্বমোট আদায়:</td>
            <td style="text-align:right; color:#15803d; font-size:15px;">৳ ${amountVal}</td>
          </tr>
        </tbody>
      </table>

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
  <script>
    function triggerPrint() { window.focus(); setTimeout(function() { window.print(); }, 250); }
    if (document.readyState === 'complete') { triggerPrint(); } else { window.addEventListener('load', triggerPrint); }
  </script>
</body>
</html>`;
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  return (
    <div className="page-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '24px 16px' }}>
      
      {/* Printable Letterhead */}
      <div className="print-only" style={{ marginBottom: '20px', position: 'relative' }}>
        <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
        <MadrasahLetterhead
          documentTitle="সাধারণ জার্নাল ও খতিয়ান বিবরণী (General Journal & Ledger)"
          metaLeft={<>মুদ্রণের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
          metaRight={<>তারিখ রেঞ্জ: <strong>{filter.startDate ? `${filter.startDate} হতে ${filter.endDate || 'বর্তমান'}` : 'সকল তারিখ'}</strong></>}
        />
      </div>

      {/* Screen Page Header */}
      <div className="page-header no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Book size={24} />
            </div>
            <div>
              <h1 className="page-title" style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>জার্নাল ও লেজার (Journal & Ledger)</h1>
              <p className="page-subtitle" style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13px' }}>
                প্রতিষ্ঠানের সকল লেনদেনের বিস্তারিত খতিয়ান, জমাদানকারীর পরিচয় এবং ইনভয়েস লিংক
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            type="button"
            onClick={() => setShowExplanation(!showExplanation)}
            className="btn"
            style={{ 
              display: 'flex', alignItems: 'center', gap: '6px', 
              background: showExplanation ? '#fef3c7' : '#f8fafc', 
              color: showExplanation ? '#92400e' : '#475569',
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', cursor: 'pointer' 
            }}
          >
            <HelpCircle size={16} />
            {showExplanation ? 'গাইড বন্ধ করুন' : 'ডেবিট-ক্রেডিট সহায়িকা'}
          </button>

          <button 
            type="button" 
            onClick={fetchJournals} 
            className="btn" 
            title="রিফ্রেশ"
            style={{ background: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}
          >
            <RefreshCw size={16} className={loading ? 'spin' : ''} />
          </button>

          <button 
            type="button" 
            onClick={exportToExcel}
            className="btn" 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '8px 14px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
          >
            <Download size={16} /> এক্সেল ডাউনলোড
          </button>

          <button 
            type="button" 
            onClick={handlePrint}
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
          >
            <Printer size={16} /> প্রিন্ট লেজার
          </button>
        </div>
      </div>

      {/* Signature Role Selector for Printing */}
      <PrintSignatureRoleSelector
        selectedRoles={selectedSignatureRoles}
        onChange={(roles) => {
          setSelectedSignatureRoles(roles);
          try {
            localStorage.setItem('annur_footer_roles__journal_ledger', JSON.stringify(roles));
          } catch (_) {}
        }}
        additionalRoles={['আদায়কারী স্বাক্ষর']}
        style={{ marginBottom: '16px' }}
      />

      {/* Accounting Explanation Guide (Expandable) */}
      {showExplanation && (
        <div className="no-print" style={{ 
          background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)', 
          border: '1px solid #bbf7d0', 
          borderRadius: '12px', 
          padding: '16px 20px', 
          marginBottom: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={18} color="#059669" />
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#065f46' }}>
              হিসাববিজ্ঞানের চিরন্তন নিয়ম (ডেবিট ও ক্রেডিট কীভাবে কাজ করে?):
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', fontSize: '13px', color: '#334155' }}>
            <div style={{ background: '#ffffffcc', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
              <strong style={{ color: '#0369a1' }}>১. সম্পদ বা ফান্ড (Asset - যেমন নগদ/ব্যাংক):</strong>
              <p style={{ margin: '4px 0 0' }}>
                টাকা মাদ্রাসায় আসলে বা ক্যাশে <strong>জমা হলে = ডেবিট (Debit)</strong>। খরচ হলে বা ক্যাশ থেকে চলে গেলে = <strong>ক্রেডিট (Credit)</strong>।
              </p>
            </div>
            <div style={{ background: '#ffffffcc', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
              <strong style={{ color: '#047857' }}>২. আয় (Revenue - যেমন ছাত্র বেতন, দান/সদকা):</strong>
              <p style={{ margin: '4px 0 0' }}>
                প্রতিষ্ঠানের আয় বা ইনকাম <strong>বৃদ্ধি পেলে = ক্রেডিট (Credit)</strong>। সাধারণ ব্যাংকের এসএমএসের চেয়ে প্রতিষ্ঠানের হিসাববিজ্ঞান সম্পূর্ণ ভিন্ন।
              </p>
            </div>
            <div style={{ background: '#ffffffcc', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
              <strong style={{ color: '#b91c1c' }}>৩. ব্যয় বা খরচ (Expense - যেমন বিদ্যুৎ বিল, নাস্তা):</strong>
              <p style={{ margin: '4px 0 0' }}>
                প্রতিষ্ঠানের যে কোনো খরচ সংঘটিত হলে <strong>ব্যয় হিসাব = ডেবিট (Debit)</strong>, এবং ক্যাশ বা ব্যাংক কমে যাওয়ায় <strong>ক্যাশ = ক্রেডিট</strong>।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
            <FileText size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>মোট জার্নাল এন্ট্রি</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>{stats.totalCount.toLocaleString('bn-BD')} টি</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
            <ArrowUpRight size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>সর্বমোট ডেবিট (Debit)</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#16a34a' }}>৳ {stats.totalDebit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
            <ArrowDownRight size={24} />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>সর্বমোট ক্রেডিট (Credit)</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#dc2626' }}>৳ {stats.totalCredit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: stats.isBalanced ? '#f0fdf4' : '#fff1f2', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: stats.isBalanced ? '#dcfce7' : '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: stats.isBalanced ? '#16a34a' : '#e11d48' }}>
            {stats.isBalanced ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
          </div>
          <div>
            <div style={{ fontSize: '12px', color: stats.isBalanced ? '#166534' : '#9f1239', fontWeight: '600' }}>হিসাবের সমতা (Balance Check)</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: stats.isBalanced ? '#15803d' : '#be123c' }}>
              {stats.isBalanced ? '✓ ডেবিট = ক্রেডিট সমান' : '⚠ ডেবিট ও ক্রেডিটে অমিল'}
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card mb-16 no-print" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', marginBottom: '20px' }}>
        <form onSubmit={handleFilter} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'flex-end' }}>
          <div style={{ flex: '2 1 240px', minWidth: '220px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '4px' }}>
              হিসাব খাত নির্বাচন (Ledger Account)
            </label>
            <select 
              className="form-select form-input"
              value={filter.account}
              onChange={(e) => setFilter({ ...filter, account: e.target.value })}
              style={{ width: '100%', borderRadius: '8px', padding: '8px 12px', border: '1px solid #cbd5e1', fontSize: '13px' }}
            >
              <option value="">সকল খাতের সাধারণ জার্নাল (General Journal)</option>
              {accounts.map(a => (
                <option key={a._id} value={a._id}>
                  {a.name} {a.code ? `(${a.code})` : ''} - {a.type}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: '1 1 140px', minWidth: '130px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '4px' }}>
              শুরুর তারিখ
            </label>
            <input 
              type="date"
              className="form-input"
              value={filter.startDate}
              onChange={(e) => setFilter({ ...filter, startDate: e.target.value })}
              style={{ width: '100%', borderRadius: '8px', padding: '8px 10px', border: '1px solid #cbd5e1', fontSize: '13px' }}
            />
          </div>

          <div style={{ flex: '1 1 140px', minWidth: '130px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '4px' }}>
              শেষের তারিখ
            </label>
            <input 
              type="date"
              className="form-input"
              value={filter.endDate}
              onChange={(e) => setFilter({ ...filter, endDate: e.target.value })}
              style={{ width: '100%', borderRadius: '8px', padding: '8px 10px', border: '1px solid #cbd5e1', fontSize: '13px' }}
            />
          </div>

          <div style={{ flex: '2 1 200px', minWidth: '180px' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#475569', display: 'block', marginBottom: '4px' }}>
              অনুসন্ধান (শিক্ষার্থী / আইডি / ভাউচার / ইনভয়েস)
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text"
                placeholder="যেমন: Nazmul, 999, PAY, INV, বেতন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', borderRadius: '8px', padding: '8px 12px 8px 34px', border: '1px solid #cbd5e1', fontSize: '13px' }}
              />
              <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ borderRadius: '8px', padding: '8px 18px', fontSize: '13px', fontWeight: '600', height: '38px', cursor: 'pointer' }}
            >
              ফিল্টার
            </button>
            <button 
              type="button" 
              onClick={handleResetFilter}
              className="btn"
              style={{ borderRadius: '8px', padding: '8px 14px', fontSize: '13px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', height: '38px', cursor: 'pointer' }}
            >
              রিসেট
            </button>
          </div>
        </form>
      </div>

      {/* Main Journal Table */}
      <div className="card" style={{ padding: '0', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        {loading ? (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
            <Loader className="spin" size={40} style={{ margin: '0 auto 12px' }} />
            <p style={{ margin: 0, fontSize: '14px' }}>জার্নাল ও খতিয়ান রেকর্ড লোড হচ্ছে...</p>
          </div>
        ) : filteredJournals.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
            <Book size={48} style={{ margin: '0 auto 12px', color: '#cbd5e1' }} />
            <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#334155' }}>কোনো লেনদেনের রেকর্ড পাওয়া যায়নি</p>
            <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#94a3b8' }}>ফিল্টারের তারিখ বা হিসাবের নাম পরিবর্তন করে আবার চেষ্টা করুন</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#475569', textAlign: 'left' }}>
                  <th style={{ width: '120px', padding: '12px 16px' }}>তারিখ</th>
                  <th style={{ width: '180px', padding: '12px 16px' }}>রেফারেন্স / ভাউচার</th>
                  <th style={{ padding: '12px 16px' }}>জমাদানকারী, খাত ও লেনদেনের বিবরণ</th>
                  <th style={{ width: '130px', padding: '12px 16px', textAlign: 'right' }}>ডেবিট (Dr ৳)</th>
                  <th style={{ width: '130px', padding: '12px 16px', textAlign: 'right' }}>ক্রেডিট (Cr ৳)</th>
                  {isSuperAdmin && (
                    <th className="no-print" style={{ width: '70px', padding: '12px 16px', textAlign: 'center' }}>অ্যাকশন</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredJournals.map((journal) => {
                  const entries = Array.isArray(journal.entries) ? journal.entries : [];
                  const journalId = journal._id || journal.id;
                  const source = journal.sourceDetails;
                  
                  return (
                    <Fragment key={journalId}>
                      {entries.map((entry, idx) => {
                        const isLastEntry = idx === entries.length - 1;
                        return (
                          <tr 
                            key={`${journalId}-${idx}`} 
                            style={{ 
                              borderBottom: isLastEntry ? '2px solid #cbd5e1' : '1px dashed #e2e8f0',
                              backgroundColor: idx % 2 === 0 ? '#fff' : '#fafafa'
                            }}
                          >
                            {/* Date Column (Rowspan) */}
                            {idx === 0 && (
                              <td 
                                rowSpan={entries.length} 
                                style={{ 
                                  verticalAlign: 'top', 
                                  padding: '14px 16px', 
                                  borderRight: '1px solid #e2e8f0',
                                  background: '#fff'
                                }}
                              >
                                <div style={{ fontWeight: '700', color: '#1e293b' }}>
                                  {formatDateDDMMYYYY(journal.date)}
                                </div>
                                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', fontFamily: 'Inter' }}>
                                  {new Date(journal.date).toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                              </td>
                            )}

                            {/* Reference Column (Rowspan) */}
                            {idx === 0 && (
                              <td 
                                rowSpan={entries.length} 
                                style={{ 
                                  verticalAlign: 'top', 
                                  padding: '14px 16px', 
                                  borderRight: '1px solid #e2e8f0',
                                  background: '#fff'
                                }}
                              >
                                <div style={{ fontFamily: 'Inter', fontWeight: '700', color: '#0369a1', fontSize: '13px' }}>
                                  {journal.reference || '—'}
                                </div>

                                {/* Quick Action Link */}
                                {source && (
                                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }} className="no-print">
                                    <button
                                      type="button"
                                      onClick={() => setSelectedSlipJournal(journal)}
                                      style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        background: '#eff6ff',
                                        color: '#2563eb',
                                        border: '1px solid #bfdbfe',
                                        borderRadius: '6px',
                                        padding: '4px 8px',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        width: 'fit-content'
                                      }}
                                      title="রসিদ স্লিপ দেখুন ও প্রিন্ট করুন"
                                    >
                                      <Receipt size={13} /> রসিদ স্লিপ দেখুন
                                    </button>

                                    {source.linkUrl && (
                                      <a
                                        href={source.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: '4px',
                                          color: '#0284c7',
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          textDecoration: 'none'
                                        }}
                                        title="ফি ম্যানেজমেন্ট পেজে দেখুন"
                                      >
                                        <ExternalLink size={12} /> ফি পেজে দেখুন ↗
                                      </a>
                                    )}
                                  </div>
                                )}
                              </td>
                            )}

                            {/* Account & Party Description */}
                            <td style={{ padding: '12px 16px' }}>
                              {idx === 0 && (
                                <>
                                  {/* Party Details Highlight Box (Whom the money came from) */}
                                  {source && (
                                    <div style={{ 
                                      background: source.type === 'student_fee' ? 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)' : '#f8fafc', 
                                      border: `1px solid ${source.type === 'student_fee' ? '#bbf7d0' : '#e2e8f0'}`,
                                      borderRadius: '8px', 
                                      padding: '10px 14px', 
                                      marginBottom: '10px',
                                      boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                    }}>
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                          <div style={{ 
                                            width: '28px', height: '28px', borderRadius: '50%', 
                                            background: source.type === 'student_fee' ? '#dcfce7' : '#e2e8f0', 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                            color: source.type === 'student_fee' ? '#15803d' : '#475569' 
                                          }}>
                                            <User size={15} />
                                          </div>
                                          
                                          <div>
                                            <span style={{ fontSize: '11px', color: '#15803d', fontWeight: '700', textTransform: 'uppercase' }}>
                                              {source.partyRole}:
                                            </span>{' '}
                                            <strong style={{ fontSize: '14px', color: '#0f172a' }}>
                                              {source.partyName}
                                            </strong>
                                            {source.studentId && (
                                              <span style={{ marginLeft: '8px', background: '#dcfce7', color: '#166534', padding: '2px 7px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', fontFamily: 'Inter' }}>
                                                আইডি: {source.studentId}
                                              </span>
                                            )}
                                            {source.classSection && (
                                              <span style={{ marginLeft: '8px', color: '#475569', fontSize: '12px', fontWeight: '600' }}>
                                                | শ্রেণি: {source.classSection}
                                              </span>
                                            )}
                                          </div>
                                        </div>

                                        {source.invoiceNumber && (
                                          <div style={{ fontSize: '12px', color: '#0369a1', background: '#e0f2fe', padding: '3px 8px', borderRadius: '6px', fontWeight: '600', fontFamily: 'Inter' }}>
                                            ইনভয়েস: {source.invoiceNumber}
                                          </div>
                                        )}
                                      </div>

                                      {source.invoiceTitle && (
                                        <div style={{ marginTop: '6px', fontSize: '12px', color: '#475569', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                                          <span>ফি এর খাত: <strong>{source.invoiceTitle}</strong></span>
                                          {source.paymentMethod && <span>পেমেন্ট মাধ্যম: <strong>{source.paymentMethod.toUpperCase()}</strong></span>}
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* General Description fallback if no sourceDetails */}
                                  {!source && journal.description && (
                                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontStyle: 'italic', background: '#f8fafc', padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>
                                      বিবরণ: {journal.description}
                                    </div>
                                  )}
                                </>
                              )}

                              {/* Account Row */}
                              <div style={{ 
                                paddingLeft: Number(entry.credit) > 0 ? '24px' : '0px',
                                fontWeight: Number(entry.debit) > 0 ? '600' : '500',
                                color: Number(entry.debit) > 0 ? '#0f172a' : '#334155',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                marginTop: idx > 0 ? '4px' : '0'
                              }}>
                                {Number(entry.credit) > 0 && <span style={{ color: '#94a3b8' }}>↳</span>}
                                <span>{entry.accountDetails?.name || 'অজানা হিসাব খাত'}</span>
                                {entry.accountDetails?.code && (
                                  <span style={{ fontSize: '11px', background: '#e2e8f0', color: '#475569', padding: '1px 6px', borderRadius: '4px', fontFamily: 'Inter' }}>
                                    {entry.accountDetails.code}
                                  </span>
                                )}
                                {entry.accountDetails?.type && (
                                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                                    ({entry.accountDetails.type})
                                  </span>
                                )}
                              </div>
                            </td>

                            {/* Debit Amount */}
                            <td style={{ 
                              padding: '12px 16px', 
                              textAlign: 'right', 
                              fontFamily: 'Inter', 
                              fontWeight: Number(entry.debit) > 0 ? '700' : 'normal',
                              color: Number(entry.debit) > 0 ? '#15803d' : '#cbd5e1',
                              fontSize: '14px'
                            }}>
                              {Number(entry.debit) > 0 ? Number(entry.debit).toLocaleString('en-IN', { minimumFractionDigits: 2 }) : '—'}
                            </td>

                            {/* Credit Amount */}
                            <td style={{ 
                              padding: '12px 16px', 
                              textAlign: 'right', 
                              fontFamily: 'Inter', 
                              fontWeight: Number(entry.credit) > 0 ? '700' : 'normal',
                              color: Number(entry.credit) > 0 ? '#b91c1c' : '#cbd5e1',
                              fontSize: '14px'
                            }}>
                              {Number(entry.credit) > 0 ? Number(entry.credit).toLocaleString('en-IN', { minimumFractionDigits: 2 }) : '—'}
                            </td>

                            {/* Action (Delete for Super Admin) */}
                            {isSuperAdmin && idx === 0 && (
                              <td 
                                rowSpan={entries.length}
                                className="no-print"
                                style={{ 
                                  verticalAlign: 'middle', 
                                  padding: '10px 16px', 
                                  textAlign: 'center',
                                  borderLeft: '1px solid #e2e8f0',
                                  background: '#fff'
                                }}
                              >
                                <button
                                  type="button"
                                  onClick={() => handleDeleteJournal(journalId, journal.reference)}
                                  disabled={deletingId === journalId}
                                  title="জার্নাল এন্ট্রি মুছে ফেলুন"
                                  style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#ef4444',
                                    cursor: 'pointer',
                                    padding: '6px',
                                    borderRadius: '6px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.2s'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                  {deletingId === journalId ? <Loader size={16} className="spin" /> : <Trash2 size={16} />}
                                </button>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </tbody>

              {/* Table Footer with Totals */}
              <tfoot>
                <tr style={{ background: '#f8fafc', borderTop: '2px solid #0f172a', fontWeight: 'bold' }}>
                  <td colSpan={3} style={{ padding: '14px 16px', textAlign: 'right', fontSize: '14px', color: '#0f172a' }}>
                    সর্বমোট যোগফল (Total):
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '15px', color: '#16a34a', fontFamily: 'Inter' }}>
                    ৳ {stats.totalDebit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', fontSize: '15px', color: '#dc2626', fontFamily: 'Inter' }}>
                    ৳ {stats.totalCredit.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </td>
                  {isSuperAdmin && <td className="no-print"></td>}
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>

      {/* Print Signature Section for Full Ledger */}
      <div className="print-only" style={{ marginTop: '50px', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', gap: '20px' }}>
          <div style={{ textAlign: 'center', flex: 1, borderTop: '1.5px solid #000', paddingTop: '6px', fontSize: '11px', fontWeight: 'bold' }}>
            আদায়কারী
            <div style={{ fontSize: '11px', fontWeight: 'normal', color: '#64748b' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1, borderTop: '1.5px solid #000', paddingTop: '6px', fontSize: '11px', fontWeight: 'bold' }}>
            প্রতিষ্ঠান প্রধান
            <div style={{ fontSize: '11px', fontWeight: 'normal', color: '#64748b' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
          <div style={{ textAlign: 'center', flex: 1, borderTop: '1.5px solid #000', paddingTop: '6px', fontSize: '11px', fontWeight: 'bold' }}>
            পরিচালক
            <div style={{ fontSize: '11px', fontWeight: 'normal', color: '#64748b' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
        </div>
      </div>

      {/* MONEY RECEIPT SLIP MODAL */}
      {selectedSlipJournal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px'
        }}>
          <div style={{
            background: '#fff', borderRadius: '16px', maxWidth: '580px', width: '100%',
            overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '16px 20px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Receipt size={20} color="#2563eb" />
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>টাকা জমার অফিসিয়াল মানি রসিদ (Payment Slip)</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSlipJournal(null)}
                style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Role selector for money receipt slip */}
            <div style={{ padding: '14px 20px 0 20px' }}>
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__journal_ledger', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={['আদায়কারী স্বাক্ষর']}
              />
            </div>

            {/* Modal Body / Printable Slip */}
            <div id="money-receipt-slip-area" style={{ padding: '24px', background: '#fff' }}>
              {/* Slip Header */}
              <div style={{ textAlign: 'center', borderBottom: '2px solid #0f172a', paddingBottom: '14px', marginBottom: '18px' }}>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>{madrasahName}</h2>
                <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#475569' }}>অফিসিয়াল অর্থ প্রাপ্তি রসিদ</p>
                <div style={{ display: 'inline-block', background: '#dcfce7', color: '#15803d', padding: '3px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                  ✓ পরিশোধিত (PAID)
                </div>
              </div>

              {/* Slip Meta */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px', marginBottom: '18px', background: '#f8fafc', padding: '12px', borderRadius: '8px' }}>
                <div>
                  <span style={{ color: '#64748b' }}>রসিদ / রেফারেন্স:</span>{' '}
                  <strong style={{ fontFamily: 'Inter', color: '#0369a1' }}>{selectedSlipJournal.reference || '—'}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>তারিখ:</span>{' '}
                  <strong>{formatDateDDMMYYYY(selectedSlipJournal.date)}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>ইনভয়েস নম্বর:</span>{' '}
                  <strong style={{ fontFamily: 'Inter' }}>{selectedSlipJournal.sourceDetails?.invoiceNumber || '—'}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>পেমেন্ট মাধ্যম:</span>{' '}
                  <strong style={{ textTransform: 'uppercase' }}>{selectedSlipJournal.sourceDetails?.paymentMethod || 'CASH'}</strong>
                </div>
              </div>

              {/* Student Details */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px', marginBottom: '18px' }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                  জমাদানকারীর তথ্য (Student Information):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8px', fontSize: '13px' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>শিক্ষার্থীর নাম:</span>{' '}
                    <strong style={{ color: '#0f172a' }}>{selectedSlipJournal.sourceDetails?.partyName || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>আইডি নং:</span>{' '}
                    <strong style={{ fontFamily: 'Inter', color: '#0369a1' }}>{selectedSlipJournal.sourceDetails?.studentId || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>শ্রেণি ও শাখা:</span>{' '}
                    <strong>{selectedSlipJournal.sourceDetails?.classSection || '—'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>ফি এর বিবরণ:</span>{' '}
                    <strong>{selectedSlipJournal.sourceDetails?.invoiceTitle || selectedSlipJournal.description}</strong>
                  </div>
                </div>
              </div>

              {/* Amount Breakdown Table */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', borderBottom: '1px solid #cbd5e1' }}>
                    <th style={{ padding: '8px 10px', textAlign: 'left' }}>খাত / বিবরণ</th>
                    <th style={{ padding: '8px 10px', textAlign: 'right' }}>পরিমাণ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>
                      {selectedSlipJournal.sourceDetails?.invoiceTitle || 'শিক্ষার্থী মাসিক বেতন / ফি'}
                    </td>
                    <td style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #e2e8f0', fontFamily: 'Inter', fontWeight: '700', color: '#15803d' }}>
                      ৳ {Number(selectedSlipJournal.entries?.[0]?.debit || selectedSlipJournal.entries?.[0]?.credit || 300).toFixed(2)}
                    </td>
                  </tr>
                  <tr style={{ background: '#f8fafc', fontWeight: 'bold' }}>
                    <td style={{ padding: '10px', textAlign: 'right' }}>সর্বমোট আদায় (Total Paid):</td>
                    <td style={{ padding: '10px', textAlign: 'right', fontFamily: 'Inter', color: '#16a34a', fontSize: '15px' }}>
                      ৳ {Number(selectedSlipJournal.entries?.[0]?.debit || selectedSlipJournal.entries?.[0]?.credit || 300).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Signatures */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '10px' }}>
                <div style={{ textAlign: 'center', width: '130px', borderTop: '1px dashed #64748b', fontSize: '11px', color: '#475569', paddingTop: '4px' }}>
                  আদায়কারী স্বাক্ষর
                </div>
                <div style={{ textAlign: 'center', width: '130px', borderTop: '1px dashed #64748b', fontSize: '11px', color: '#475569', paddingTop: '4px' }}>
                  প্রতিষ্ঠান প্রধান
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ padding: '14px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              {selectedSlipJournal.sourceDetails?.linkUrl && (
                <a
                  href={selectedSlipJournal.sourceDetails.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: '#fff', color: '#0284c7', border: '1px solid #cbd5e1',
                    borderRadius: '8px', padding: '8px 14px', fontSize: '13px', textDecoration: 'none', fontWeight: '600'
                  }}
                >
                  <ExternalLink size={15} /> ফি পেজে ইনভয়েস খুলুন ↗
                </a>
              )}

              <button
                type="button"
                onClick={handlePrintSlip}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  borderRadius: '8px', padding: '8px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'
                }}
              >
                <Printer size={16} /> প্রিন্ট রসিদ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Footer Signatures for Main Journal & Ledger Table Print */}
      <div className="print-only">
        <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '40px' }} />
      </div>

      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0.5in;
          }
          .no-print, .page-header, .sidebar, .topbar {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          body {
            background: #fff !important;
            color: #000 !important;
          }
          .table-responsive {
            overflow: visible !important;
          }
          table {
            width: 100% !important;
            border-collapse: collapse !important;
          }
          table th, table td {
            border: 1px solid #cbd5e1 !important;
            padding: 6px 8px !important;
            font-size: 10px !important;
          }
          table th {
            background: #f1f5f9 !important;
            color: #000 !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
