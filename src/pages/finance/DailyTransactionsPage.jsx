import { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, DollarSign, ArrowUpRight, ArrowDownRight, FileText, 
  Printer, Loader, Download, Search, Filter, RefreshCw, 
  Wallet, Landmark, Smartphone, CreditCard, ChevronRight,
  TrendingUp, TrendingDown, Layers, Building2, CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import * as XLSX from 'xlsx';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function DailyTransactionsPage() {
  const { user } = useAuthStore();
  const { madrasahName } = getMadrasahInfo(user);
  
  const [transactions, setTransactions] = useState([]);
  const [openingBalance, setOpeningBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [methodFilter, setMethodFilter] = useState('all');
  const [branchFilter, setBranchFilter] = useState('all');
  const [branchesList, setBranchesList] = useState([]);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__daily_transactions');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });
  
  const [orientation, setOrientation] = useState('portrait');
  
  // Date filters
  const todayStr = new Date().toISOString().split('T')[0];
  const [filters, setFilters] = useState({
    startDate: todayStr,
    endDate: todayStr,
    type: 'all' // all, income, expense
  });

  // Pre-load all registered branches from settings/students API
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await api.get('/students/branches');
        if (res.data?.success && res.data.data?.branches) {
          const names = res.data.data.branches.map(b => b.name).filter(Boolean);
          setBranchesList(prev => Array.from(new Set([...prev, ...names])));
        }
      } catch (err) {
        console.error('Failed to load branches:', err);
      }
    };
    fetchBranches();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await api.get('/accounting/transactions', {
        params: {
          startDate: filters.startDate,
          endDate: filters.endDate
        }
      });
      if (res.data.success) {
        const payload = res.data.data || res.data;
        setTransactions(payload.transactions || []);
        setOpeningBalance(Number(payload.openingBalance) || 0);
        if (payload.branches && Array.isArray(payload.branches)) {
          setBranchesList(prev => Array.from(new Set([...prev, ...payload.branches])));
        }
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line
  }, [filters.startDate, filters.endDate]);

  // Quick Date Range Presets
  const handleQuickPreset = (preset) => {
    const now = new Date();
    let start = new Date();
    let end = new Date();

    if (preset === 'today') {
      // today
    } else if (preset === 'yesterday') {
      start.setDate(now.getDate() - 1);
      end.setDate(now.getDate() - 1);
    } else if (preset === 'last7') {
      start.setDate(now.getDate() - 6);
    } else if (preset === 'thisMonth') {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    } else if (preset === 'lastMonth') {
      start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      end = new Date(now.getFullYear(), now.getMonth(), 0);
    } else if (preset === 'thisYear') {
      start = new Date(now.getFullYear(), 0, 1);
      end = new Date(now.getFullYear(), 11, 31);
    }

    setFilters(prev => ({
      ...prev,
      startDate: start.toISOString().split('T')[0],
      endDate: end.toISOString().split('T')[0]
    }));
  };

  // Filtered transactions (Type, Method, Branch, Search)
  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      // Type Filter
      if (filters.type !== 'all' && t.type !== filters.type) return false;

      // Method Filter
      if (methodFilter !== 'all' && t.method !== methodFilter) return false;

      // Branch Filter
      if (branchFilter !== 'all' && (t.branch || 'প্রধান শাখা') !== branchFilter) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const cat = (t.category || '').toLowerCase();
        const desc = (t.description || '').toLowerCase();
        const ref = (t.reference || '').toLowerCase();
        const method = (t.method || '').toLowerCase();
        const branch = (t.branch || '').toLowerCase();
        return cat.includes(q) || desc.includes(q) || ref.includes(q) || method.includes(q) || branch.includes(q);
      }

      return true;
    });
  }, [transactions, filters.type, methodFilter, branchFilter, searchQuery]);

  // Financial Computations
  const totalIncome = useMemo(() => {
    return filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  }, [filteredTransactions]);

  const totalExpense = useMemo(() => {
    return filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
  }, [filteredTransactions]);

  const netBalance = totalIncome - totalExpense;
  const closingBalance = openingBalance + netBalance;

  // Breakdown by Payment Method
  const methodBreakdown = useMemo(() => {
    const map = {};
    filteredTransactions.forEach(t => {
      const m = t.method || 'cash';
      if (!map[m]) map[m] = { income: 0, expense: 0, total: 0 };
      const amt = Number(t.amount) || 0;
      if (t.type === 'income') {
        map[m].income += amt;
        map[m].total += amt;
      } else {
        map[m].expense += amt;
        map[m].total -= amt;
      }
    });
    return map;
  }, [filteredTransactions]);

  // Breakdown by Branch
  const branchBreakdown = useMemo(() => {
    const map = {};
    filteredTransactions.forEach(t => {
      const b = t.branch || 'প্রধান শাখা';
      if (!map[b]) map[b] = { income: 0, expense: 0, total: 0, count: 0 };
      const amt = Number(t.amount) || 0;
      map[b].count++;
      if (t.type === 'income') {
        map[b].income += amt;
        map[b].total += amt;
      } else {
        map[b].expense += amt;
        map[b].total -= amt;
      }
    });
    return map;
  }, [filteredTransactions]);

  const availableBranches = useMemo(() => {
    const defaultBranches = [
      'বালক শাখা',
      'বালিকা শাখা',
      'নুরানী শাখা',
      'বালক শাখা + নুরানী',
      'বালিকা শাখা + নুরানী',
      'প্রধান শাখা'
    ];
    const set = new Set([...defaultBranches, ...branchesList]);
    transactions.forEach(t => { if (t.branch) set.add(t.branch); });
    return Array.from(set);
  }, [transactions, branchesList]);

  const getBranchBadgeStyle = (branchName) => {
    const b = branchName || 'প্রধান শাখা';
    if (b.includes('বালিকা')) {
      return { background: '#fdf2f8', color: '#be185d', border: '1px solid #fbcfe8' };
    }
    if (b.includes('বালক')) {
      return { background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' };
    }
    if (b.includes('নুরানী')) {
      return { background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' };
    }
    return { background: '#f8fafc', color: '#334155', border: '1px solid #e2e8f0' };
  };

  const methodMap = {
    cash: { label: 'নগদ (Cash)', color: '#15803d', bg: '#dcfce7' },
    bank: { label: 'সোনালী ব্যাংক', color: '#1d4ed8', bg: '#dbeafe' },
    bkash: { label: 'বিকাশ (bKash)', color: '#be185d', bg: '#fce7f3' },
    nagad: { label: 'নগদ (Nagad)', color: '#c2410c', bg: '#ffedd5' },
    rocket: { label: 'রকেট (Rocket)', color: '#6d28d9', bg: '#ede9fe' },
    cheque: { label: 'চেক (Cheque)', color: '#475569', bg: '#f1f5f9' },
    online: { label: 'অনলাইন (Online)', color: '#0f766e', bg: '#ccfbf1' },
    mobile_banking: { label: 'মোবাইল ব্যাংকিং', color: '#7c3aed', bg: '#ede9fe' }
  };

  const formatMoney = (amount) => {
    return '৳ ' + Number(amount || 0).toLocaleString('en-IN');
  };

  const handlePrint = () => {
    window.print();
  };

  // Export Cash Book to Excel
  const handleExportExcel = () => {
    const headers = [
      ['মাদ্রাসার নাম:', madrasahName],
      ['রিপোর্ট:', 'দৈনিক ক্যাশবুক ও নগদ লেনদেন বিবরণী'],
      ['তারিখ রেঞ্জ:', `${formatDateDDMMYYYY(filters.startDate)} হতে ${formatDateDDMMYYYY(filters.endDate)}`],
      ['প্রারম্ভিক নগদ:', openingBalance],
      ['মোট আয়:', totalIncome],
      ['মোট ব্যয়:', totalExpense],
      ['সমাপনী নগদ:', closingBalance],
      [],
      ['তারিখ', 'রেফারেন্স / ভাউচার নং', 'ধরন', 'খাত (Account Head)', 'বিবরণ (Description)', 'পেমেন্ট মাধ্যম', 'আয় (+ ৳)', 'ব্যয় (- ৳)']
    ];

    const rows = filteredTransactions.map(t => [
      formatDateDDMMYYYY(t.date),
      t.branch || 'প্রধান শাখা',
      t.reference || '—',
      t.type === 'income' ? 'আয় (Income)' : 'ব্যয় (Expense)',
      t.category || '—',
      t.description || '—',
      methodMap[t.method]?.label || t.method,
      t.type === 'income' ? t.amount : '',
      t.type === 'expense' ? t.amount : ''
    ]);

    // Summary row
    rows.push([]);
    rows.push(['', '', '', '', 'সর্বমোট (Total):', '', totalIncome, totalExpense]);
    rows.push(['', '', '', '', 'নিট ক্যাশ ব্যালেন্স (Closing Balance):', '', closingBalance, '']);

    const ws = XLSX.utils.aoa_to_sheet([...headers, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Daily_CashBook');
    XLSX.writeFile(wb, `CashBook_${filters.startDate}_to_${filters.endDate}.xlsx`);
  };

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* ──────────────────────────────────────────────────────────────
          PRINT-ONLY: Official Letterhead
         ────────────────────────────────────────────────────────────── */}
      <div className="print-only" style={{ marginBottom: '16px' }}>
        <MadrasahLetterhead
          documentTitle="দৈনিক ক্যাশবুক ও নগদ লেনদেন বিবরণী"
          metaLeft={`তারিখ: ${formatDateDDMMYYYY(filters.startDate)} হতে ${formatDateDDMMYYYY(filters.endDate)}`}
          metaRight={`মোট লেনদেন: ${filteredTransactions.length} টি | মোট আয়: ৳${totalIncome.toLocaleString('en-IN')} | মোট ব্যয়: ৳${totalExpense.toLocaleString('en-IN')}`}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────
          SCREEN-ONLY: Header & Action Bar
         ────────────────────────────────────────────────────────────── */}
      <div className="no-print">
        <div className="page-header" style={{ flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div className="flex items-center gap-8 mb-4">
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                boxShadow: '0 4px 14px rgba(15, 118, 110, 0.25)'
              }}>
                <Wallet size={22} />
              </div>
              <div>
                <h1 className="page-title" style={{ margin: 0, fontSize: '1.45rem', fontWeight: 800 }}>
                  দৈনিক ক্যাশবুক ও নগদ লেনদেন
                </h1>
                <p className="page-subtitle" style={{ margin: 0, fontSize: '0.88rem' }}>
                  তারিখ: {formatDateDDMMYYYY(filters.startDate)} হতে {formatDateDDMMYYYY(filters.endDate)} • মোট {filteredTransactions.length} টি লেনদেন
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-8" style={{ flexWrap: 'wrap' }}>
            <button
              onClick={fetchTransactions}
              className="btn btn-outline btn-sm flex items-center gap-4"
              title="তথ্য রিফ্রেশ করুন"
              disabled={loading}
              style={{ fontSize: '0.82rem', padding: '6px 12px' }}
            >
              <RefreshCw size={14} className={loading ? 'spin' : ''} /> রিফ্রেশ
            </button>

            <button
              onClick={handleExportExcel}
              className="btn btn-outline btn-sm flex items-center gap-6"
              style={{ fontSize: '0.82rem', padding: '6px 14px', borderColor: '#10b981', color: '#047857' }}
              title="এক্সেল শীট ডাউনলোড করুন"
            >
              <Download size={14} /> এক্সেল ডাউনলোড
            </button>

            {/* Orientation Toggle Buttons */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--bg-tertiary, #f1f5f9)',
              padding: '2px',
              borderRadius: '8px',
              border: '1px solid var(--border-color, #e2e8f0)',
              gap: '2px'
            }}>
              <button
                type="button"
                onClick={() => setOrientation('portrait')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  background: orientation === 'portrait' ? '#0f766e' : 'transparent',
                  color: orientation === 'portrait' ? '#ffffff' : 'var(--text-secondary, #475569)',
                  transition: 'all 0.15s ease'
                }}
                title="A4 Portrait মোডে প্রিন্ট করুন"
              >
                <span>📄</span> পোর্ট্রেট (A4)
              </button>
              <button
                type="button"
                onClick={() => setOrientation('landscape')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  background: orientation === 'landscape' ? '#0f766e' : 'transparent',
                  color: orientation === 'landscape' ? '#ffffff' : 'var(--text-secondary, #475569)',
                  transition: 'all 0.15s ease'
                }}
                title="A4 Landscape মোডে প্রিন্ট করুন"
              >
                <span>🖼️</span> ল্যান্ডস্কেপ (A4)
              </button>
            </div>

            <button
              className="btn btn-primary btn-sm flex items-center gap-6"
              onClick={handlePrint}
              style={{ padding: '6px 16px', background: '#0f766e', borderColor: '#0f766e' }}
            >
              <Printer size={15} /> প্রিন্ট ক্যাশবুক
            </button>
          </div>
        </div>

        {/* Signature Role Selector for Printing */}
        <PrintSignatureRoleSelector
          selectedRoles={selectedSignatureRoles}
          onChange={(roles) => {
            setSelectedSignatureRoles(roles);
            try {
              localStorage.setItem('annur_footer_roles__daily_transactions', JSON.stringify(roles));
            } catch (_) {}
          }}
          style={{ marginBottom: '16px' }}
        />

        {/* ──────────────────────────────────────────────────────────────
            FILTERS & SEARCH BAR
           ────────────────────────────────────────────────────────────── */}
        <div className="card mb-20" style={{ padding: '16px 20px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
          {/* Quick Date Presets Row */}
          <div className="flex items-center gap-6 mb-16" style={{ flexWrap: 'wrap' }}>
            <span className="text-xs font-semibold flex items-center gap-4" style={{ color: 'var(--text-secondary)', marginRight: '4px' }}>
              <Calendar size={14} /> দ্রুত সময় নির্বাচন:
            </span>
            {[
              { label: 'আজ', key: 'today' },
              { label: 'গতকাল', key: 'yesterday' },
              { label: 'বিগত ৭ দিন', key: 'last7' },
              { label: 'চলতি মাস', key: 'thisMonth' },
              { label: 'গত মাস', key: 'lastMonth' },
              { label: 'চলতি বছর', key: 'thisYear' },
            ].map(p => (
              <button
                key={p.key}
                type="button"
                onClick={() => handleQuickPreset(p.key)}
                className="btn btn-ghost btn-xs"
                style={{
                  fontSize: '0.78rem', padding: '4px 10px', borderRadius: '6px',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)', fontWeight: 600
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Form Inputs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', alignItems: 'end' }}>
            {/* Start Date */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                শুরুর তারিখ
              </label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                className="form-input font-mono"
                style={{ height: '38px', fontSize: '0.88rem' }}
              />
            </div>

            {/* End Date */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                শেষের তারিখ
              </label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                className="form-input font-mono"
                style={{ height: '38px', fontSize: '0.88rem' }}
              />
            </div>

            {/* Transaction Type */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                লেনদেনের ধরন
              </label>
              <select
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                className="form-select form-input"
                style={{ height: '38px', fontSize: '0.88rem' }}
              >
                <option value="all">সকল লেনদেন (আয় ও ব্যয়)</option>
                <option value="income">শুধুমাত্র আয় (Income)</option>
                <option value="expense">শুধুমাত্র ব্যয় (Expense)</option>
              </select>
            </div>

            {/* Payment Method Filter */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                পেমেন্ট মাধ্যম
              </label>
              <select
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
                className="form-select form-input"
                style={{ height: '38px', fontSize: '0.88rem' }}
              >
                <option value="all">সকল মাধ্যম (Cash/Bank/MFS)</option>
                <option value="cash">নগদ (Cash)</option>
                <option value="bkash">বিকাশ (bKash)</option>
                <option value="nagad">নগদ (Nagad)</option>
                <option value="rocket">রকেট (Rocket)</option>
                <option value="bank">ব্যাংক (Bank)</option>
              </select>
            </div>

            {/* Branch Filter */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                শাখা নির্বাচন (Branch)
              </label>
              <select
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
                className="form-select form-input"
                style={{ height: '38px', fontSize: '0.88rem' }}
              >
                <option value="all">সকল শাখা (All Branches)</option>
                {availableBranches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div style={{ gridColumn: 'span 2' }}>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                অনুসন্ধান (খাত, বিবরণ, দাতা/প্রাপক বা ভাউচার নং)
              </label>
              <div style={{ position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="যেমন: বিদ্যুৎ বিল, ছাত্র বেতন, দান, ভাউচার নং..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input"
                  style={{ height: '38px', paddingLeft: '34px', fontSize: '0.88rem' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────
            KPI SUMMARY STAT CARDS (4 Cards with Gradients)
           ────────────────────────────────────────────────────────────── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px', marginBottom: '20px'
        }}>
          {/* Opening Balance Card */}
          <div className="card" style={{
            padding: '18px 20px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(217, 119, 6, 0.04))',
            border: '1px solid rgba(245, 158, 11, 0.25)', position: 'relative'
          }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-warning" style={{ letterSpacing: '0.4px' }}>
                প্রারম্ভিক নগদ (OPENING)
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                <Wallet size={16} />
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#b45309' }}>
              {formatMoney(openingBalance)}
            </div>
            <div className="text-xs text-muted mt-4">
              শুরুর তারিখের পূর্ববর্তী জের
            </div>
          </div>

          {/* Total Income Card */}
          <div className="card" style={{
            padding: '18px 20px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))',
            border: '1px solid rgba(16, 185, 129, 0.25)', position: 'relative'
          }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold text-success" style={{ letterSpacing: '0.4px' }}>
                মোট নগদ আয় (INFLOW)
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                <ArrowUpRight size={18} />
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#047857' }}>
              + {formatMoney(totalIncome)}
            </div>
            <div className="text-xs text-muted mt-4">
              নির্বাচিত তারিখ সীমার মোট জমা
            </div>
          </div>

          {/* Total Expense Card */}
          <div className="card" style={{
            padding: '18px 20px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(220, 38, 38, 0.04))',
            border: '1px solid rgba(239, 68, 68, 0.25)', position: 'relative'
          }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold" style={{ color: '#ef4444', letterSpacing: '0.4px' }}>
                মোট নগদ ব্যয় (OUTFLOW)
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
                <ArrowDownRight size={18} />
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#b91c1c' }}>
              - {formatMoney(totalExpense)}
            </div>
            <div className="text-xs text-muted mt-4">
              নির্বাচিত তারিখ সীমার মোট খরচ
            </div>
          </div>

          {/* Closing Balance Card */}
          <div className="card" style={{
            padding: '18px 20px', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(13, 148, 136, 0.04))',
            border: '1px solid rgba(15, 118, 110, 0.25)', position: 'relative'
          }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold" style={{ color: '#0f766e', letterSpacing: '0.4px' }}>
                সমাপনী নগদ ব্যালেন্স (CLOSING)
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(15, 118, 110, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f766e' }}>
                <Landmark size={16} />
              </div>
            </div>
            <div className="font-mono" style={{
              fontSize: '1.45rem', fontWeight: 800,
              color: closingBalance >= 0 ? '#0f766e' : '#b91c1c'
            }}>
              {formatMoney(closingBalance)}
            </div>
            <div className="text-xs text-muted mt-4">
              (প্রারম্ভিক + আয়) - ব্যয় = জের
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────
            BRANCH INCOME & EXPENSE QUICK BREAKDOWN PILLS
           ────────────────────────────────────────────────────────────── */}
        {Object.keys(branchBreakdown).length > 0 && (
          <div className="card mb-20" style={{ padding: '14px 18px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: '16px' }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold flex items-center gap-6" style={{ color: '#166534' }}>
                <Building2 size={16} color="#15803d" /> শাখাভিত্তিক আয়ের হিসাব (Branch-wise Income Breakdown):
              </span>
              <span className="text-xs text-muted">নির্বাচিত সময়ের শাখা অনুযায়ী নগদ আয় ও মোট আদায়</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {Object.keys(branchBreakdown).map(bKey => {
                const bData = branchBreakdown[bKey];
                return (
                  <div
                    key={bKey}
                    style={{
                      background: '#ffffff', border: '1px solid #86efac',
                      borderRadius: '8px', padding: '8px 14px', display: 'flex',
                      alignItems: 'center', gap: '10px', fontSize: '0.85rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: '#14532d' }}>🏫 {bKey}:</span>
                    <span className="font-mono font-bold" style={{ color: '#15803d' }}>
                      আয়: +{formatMoney(bData.income)}
                    </span>
                    {bData.expense > 0 && (
                      <span className="font-mono" style={{ color: '#b91c1c', fontSize: '0.78rem' }}>
                        (ব্যয়: -{formatMoney(bData.expense)})
                      </span>
                    )}
                    <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#166534', padding: '2px 7px', borderRadius: '4px', fontWeight: 600 }}>
                      {bData.count} টি লেনদেন
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {Object.keys(methodBreakdown).length > 0 && (
          <div className="card mb-20" style={{ padding: '12px 16px', borderRadius: '12px', background: 'var(--bg-tertiary)' }}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold flex items-center gap-6" style={{ color: 'var(--text-secondary)' }}>
                <Layers size={14} className="text-primary" /> পেমেন্ট মাধ্যম অনুযায়ী আয় ও ব্যয়ের সারাংশ (Payment Method Breakdown):
              </span>
              <span className="text-xs text-muted">নির্বাচিত সময়ের প্রতিটি পেমেন্ট মাধ্যমের মোট আয়, ব্যয় ও নিট প্রবাহ</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {Object.keys(methodBreakdown).map(mKey => {
                const mData = methodBreakdown[mKey];
                const meta = methodMap[mKey] || { label: mKey, color: '#475569', bg: '#f1f5f9' };
                return (
                  <div
                    key={mKey}
                    style={{
                      background: '#ffffff', border: `1px solid ${meta.color}50`,
                      borderRadius: '8px', padding: '8px 14px', display: 'flex',
                      alignItems: 'center', gap: '10px', fontSize: '0.85rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: meta.color }}>💳 {meta.label}:</span>
                    <span className="font-mono font-bold" style={{ color: '#15803d' }}>
                      আয়: +{formatMoney(mData.income)}
                    </span>
                    {mData.expense > 0 && (
                      <span className="font-mono" style={{ color: '#b91c1c', fontSize: '0.78rem' }}>
                        (ব্যয়: -{formatMoney(mData.expense)})
                      </span>
                    )}
                    <span className="font-mono font-bold" style={{
                      fontSize: '0.78rem', background: meta.bg, color: meta.color,
                      padding: '2px 8px', borderRadius: '4px'
                    }}>
                      নিট: {mData.total >= 0 ? '+' : ''}{formatMoney(mData.total)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────────────────────
          DEDICATED PRINT STYLES (Strict A4 Paper Optimization)
         ────────────────────────────────────────────────────────────── */}
      <style>{`
        @media print {
          @page {
            size: A4 ${orientation};
            margin: ${orientation === 'landscape' ? '6mm 8mm' : '8mm 8mm 10mm 8mm'};
          }
          html, body {
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            overflow: visible !important;
          }
          #root, .dashboard-layout, .main-content, .page-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            display: block !important;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-clean-card {
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            overflow: visible !important;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
          }
          .table-responsive, .print-table-container {
            overflow: visible !important;
            width: 100% !important;
            max-width: 100% !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-table {
            width: 100% !important;
            max-width: 100% !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            font-size: 8pt !important;
            margin: 0 !important;
          }
          .print-table th, .print-table td {
            border: 1px solid #1e293b !important;
            padding: 4px 5px !important;
            color: #000000 !important;
            font-size: 8pt !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            vertical-align: middle !important;
          }
          .print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            text-align: center !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .col-date { width: 14% !important; }
          .col-branch { width: 13% !important; }
          .col-type { width: 7% !important; }
          .col-head { width: 18% !important; }
          .col-desc { width: 24% !important; }
          .col-method { width: 11% !important; }
          .col-amount { width: 13% !important; }

          .print-table span {
            font-size: 7.5pt !important;
            padding: 1px 4px !important;
            border-radius: 3px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-sign-row {
            margin-top: 40px !important;
            display: flex !important;
            justify-content: space-between !important;
            page-break-inside: avoid !important;
          }
          .print-sign-box {
            width: 180px !important;
            text-align: center !important;
            border-top: 1.5px solid #000000 !important;
            padding-top: 5px !important;
            font-size: 9pt !important;
            font-weight: 700 !important;
            color: #000000 !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>

      {/* ──────────────────────────────────────────────────────────────
          PRINT HEADER (Visible ONLY on print)
         ────────────────────────────────────────────────────────────── */}
      <div className="print-only" style={{ marginBottom: '16px', position: 'relative' }}>
        <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
        <MadrasahLetterhead
          documentTitle="দৈনিক ক্যাশবুক ও নগদ লেনদেন বিবরণী (Daily Cash Book)"
          metaLeft={<>সময়সীমা: <strong>{formatDateDDMMYYYY(filters.startDate)} হতে {formatDateDDMMYYYY(filters.endDate)}</strong></>}
          metaRight={<>মোট লেনদেন: <strong>{filteredTransactions.length} টি</strong></>}
        />

        {/* Print Financial Summary KPI Box */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1.5px solid #000', borderRadius: '4px', padding: '6px 10px',
          marginBottom: '12px', fontSize: '9.5pt', fontWeight: 700
        }}>
          <div>প্রারম্ভিক নগদ: {formatMoney(openingBalance)}</div>
          <div style={{ color: '#047857' }}>মোট আয়: {formatMoney(totalIncome)}</div>
          <div style={{ color: '#b91c1c' }}>মোট ব্যয়: {formatMoney(totalExpense)}</div>
          <div>সমাপনী নগদ: {formatMoney(closingBalance)}</div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          TRANSACTIONS TABLE (Screen & Print unified view)
         ────────────────────────────────────────────────────────────── */}
      <div className="card print-clean-card" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
        <div className="no-print" style={{
          padding: '16px 20px', borderBottom: '1px solid var(--border-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'var(--bg-secondary)'
        }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} className="text-primary" /> লেনদেনের বিস্তারিত খতিয়ান তালিকা
          </h2>
          <span className="text-xs text-muted font-mono font-semibold">
            {filteredTransactions.length} টি রেকর্ড পাওয়া গেছে
          </span>
        </div>

        {loading ? (
          <div className="flex-center" style={{ padding: '60px', flexDirection: 'column', gap: '12px' }}>
            <Loader className="spin text-primary" size={32} />
            <span className="text-muted font-medium" style={{ fontSize: '0.9rem' }}>ক্যাশবুকে লেনদেন লোড হচ্ছে...</span>
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="empty-state" style={{ padding: '60px 20px', textAlign: 'center' }}>
            <FileText size={44} style={{ color: 'var(--text-muted)', margin: '0 auto 12px' }} />
            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', margin: '0 0 4px' }}>
              নির্বাচিত সময়ে কোনো লেনদেন পাওয়া যায়নি
            </p>
            <p className="text-xs text-muted" style={{ margin: 0 }}>
              তারিখের পরিসীমা পরিবর্তন করে আবার চেষ্টা করুন
            </p>
          </div>
        ) : (
          <div className="table-responsive print-table-container">
            <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th className="col-date" style={{ padding: '12px 14px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, width: '14%' }}>তারিখ ও রেফারেন্স</th>
                  <th className="col-branch" style={{ padding: '12px 14px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, width: '13%' }}> শাখা</th>
                  <th className="col-type" style={{ padding: '12px 14px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, width: '7%' }}>ধরন</th>
                  <th className="col-head" style={{ padding: '12px 14px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, width: '18%' }}>খাত (Account Head)</th>
                  <th className="col-desc" style={{ padding: '12px 14px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, width: '24%' }}>বিবরণ ও বিবরণী</th>
                  <th className="col-method" style={{ padding: '12px 14px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, width: '11%' }}>পেমেন্ট মাধ্যম</th>
                  <th className="col-amount" style={{ padding: '12px 14px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, width: '13%' }}>টাকা (৳)</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((t, idx) => {
                  const isInc = t.type === 'income';
                  const methodObj = methodMap[t.method] || { label: t.method, color: '#475569', bg: '#f1f5f9' };

                  return (
                    <tr
                      key={t.id || idx}
                      style={{
                        borderBottom: '1px solid var(--border-color)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)'
                      }}
                    >
                      {/* Date & Ref */}
                      <td className="col-date" style={{ padding: '10px 14px', verticalAlign: 'middle' }}>
                        <div className="font-mono font-bold" style={{ fontSize: '0.88rem' }}>
                          {formatDateDDMMYYYY(t.date)}
                        </div>
                        {t.reference && t.reference !== '-' && (
                          <div className="text-xs font-mono text-muted" style={{ marginTop: '2px', wordBreak: 'break-all' }}>
                            #{t.reference}
                          </div>
                        )}
                      </td>

                      {/* Branch Badge */}
                      <td className="col-branch" style={{ padding: '10px 14px', textAlign: 'center', verticalAlign: 'middle' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          ...getBranchBadgeStyle(t.branch)
                        }}>
                          {t.branch || 'প্রধান শাখা'}
                        </span>
                      </td>

                      {/* Type Badge */}
                      <td className="col-type" style={{ padding: '10px 14px', textAlign: 'center', verticalAlign: 'middle' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700,
                            background: isInc ? '#dcfce7' : '#fee2e2',
                            color: isInc ? '#15803d' : '#b91c1c'
                          }}
                        >
                          {isInc ? 'আয়' : 'ব্যয়'}
                        </span>
                      </td>

                      {/* Category */}
                      <td className="col-head" style={{ padding: '10px 14px', verticalAlign: 'middle', fontWeight: 600, fontSize: '0.88rem' }}>
                        {t.category || 'সাধারণ হিসাব'}
                      </td>

                      {/* Description */}
                      <td className="col-desc" style={{ padding: '10px 14px', verticalAlign: 'middle', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                        {t.description || '—'}
                      </td>

                      {/* Method */}
                      <td className="col-method" style={{ padding: '10px 14px', textAlign: 'center', verticalAlign: 'middle' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                            background: methodObj.bg, color: methodObj.color, border: `1px solid ${methodObj.color}30`
                          }}
                        >
                          {methodObj.label}
                        </span>
                      </td>

                      {/* Amount */}
                      <td className="col-amount" style={{
                        padding: '10px 14px', textAlign: 'right', verticalAlign: 'middle',
                        fontFamily: 'monospace', fontWeight: 800, fontSize: '0.95rem',
                        color: isInc ? '#059669' : '#dc2626'
                      }}>
                        {isInc ? '+' : '-'} {Number(t.amount || 0).toLocaleString('en-IN')}
                      </td>
                    </tr>
                  );
                })}

                {/* Table Footer Totals */}
                <tr style={{ background: '#f8fafc', borderTop: '2px solid #cbd5e1', fontWeight: 800 }}>
                  <td colSpan="5" style={{ padding: '12px 14px', textAlign: 'right', fontSize: '0.9rem' }}>
                    মোট নগদ প্রবাহ (Total Flow):
                  </td>
                  <td className="col-method" style={{ padding: '12px 14px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {filteredTransactions.length} টি লেনদেন
                  </td>
                  <td className="col-amount" style={{ padding: '12px 14px', textAlign: 'right', fontFamily: 'monospace', fontSize: '1rem', color: netBalance >= 0 ? '#059669' : '#dc2626' }}>
                    {netBalance >= 0 ? '+' : ''}{Number(netBalance).toLocaleString('en-IN')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ──────────────────────────────────────────────────────────────
          PRINT SIGNATURE FOOTER (Visible ONLY on print)
         ────────────────────────────────────────────────────────────── */}
      <div className="print-only">
        <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '55px' }} />
      </div>
    </div>
  );
}
