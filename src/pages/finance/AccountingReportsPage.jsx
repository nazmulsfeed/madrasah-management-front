import { useState, useEffect, useMemo } from 'react';
import { 
  PieChart, Download, FileText, Search, Loader, Filter, 
  Table as TableIcon, BookOpen, Printer, AlertCircle, RefreshCw,
  TrendingUp, TrendingDown, CheckCircle, Scale, DollarSign,
  Calendar, Layers, CheckCircle2, XCircle, X
} from 'lucide-react';
import * as XLSX from 'xlsx';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, formatDateDDMMYYYY } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function AccountingReportsPage() {
  const { user } = useAuthStore();
  const madrasahInfo = getMadrasahInfo(user);
  const { madrasahName } = madrasahInfo;
  
  const [activeTab, setActiveTab] = useState('trialBalance'); // trialBalance, balanceSheet, incomeStatement
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tableSearch, setTableSearch] = useState('');

  // Signature Roles State & Print Preview
  const DEFAULT_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, বালক শাখা'
  ];
  const PRESET_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];
  const MAX_SIGNATURE_ROLES = 5;

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [previewZoom, setPreviewZoom] = useState('scroll'); // 'scroll' | 'fit'
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseSheetWidth = 840;
  const mobileFitScale = useMemo(() => {
    const availableWidth = windowWidth - (windowWidth < 640 ? 24 : 48);
    return Math.min(1, Math.max(0.35, availableWidth / baseSheetWidth));
  }, [windowWidth]);

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__accounting_reports');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  const [customRolesList, setCustomRolesList] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_custom_roles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newCustomRole, setNewCustomRole] = useState('');

  const handleToggleSignatureRole = (role) => {
    let next;
    if (selectedSignatureRoles.includes(role)) {
      if (selectedSignatureRoles.length <= 1) {
        return;
      }
      next = selectedSignatureRoles.filter(r => r !== role);
    } else {
      if (selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES) {
        return;
      }
      next = [...selectedSignatureRoles, role];
    }
    setSelectedSignatureRoles(next);
    try {
      localStorage.setItem('annur_footer_roles__accounting_reports', JSON.stringify(next));
    } catch (_) {}
  };

  const handleAddCustomRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newCustomRole.trim();
    if (!trimmed) return;
    if (PRESET_SIGNATURE_ROLES.includes(trimmed) || customRolesList.includes(trimmed)) return;
    const nextCustom = [...customRolesList, trimmed];
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.length < MAX_SIGNATURE_ROLES) {
      const nextSelected = [...selectedSignatureRoles, trimmed];
      setSelectedSignatureRoles(nextSelected);
      try {
        localStorage.setItem('annur_footer_roles__accounting_reports', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomRole('');
  };

  const handleDeleteCustomRole = (role, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextCustom = customRolesList.filter(r => r !== role);
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.includes(role)) {
      const nextSelected = selectedSignatureRoles.filter(r => r !== role);
      const fallback = nextSelected.length > 0 ? nextSelected : DEFAULT_SIGNATURE_ROLES;
      setSelectedSignatureRoles(fallback);
      try {
        localStorage.setItem('annur_footer_roles__accounting_reports', JSON.stringify(fallback));
      } catch (_) {}
    }
  };
  
  const [trialBalanceData, setTrialBalanceData] = useState(null);
  const [balanceSheetData, setBalanceSheetData] = useState(null);
  const [incomeStatementData, setIncomeStatementData] = useState(null);

  // Date filters
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 1);
    return d.toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const fetchData = async (tab, customStart, customEnd) => {
    setLoading(true);
    setError('');
    const sDate = customStart || startDate;
    const eDate = customEnd || endDate;
    
    try {
      const params = { startDate: sDate, endDate: eDate };
      if (tab === 'trialBalance') {
        const res = await api.get('/accounting/trial-balance', { params });
        if (res.data.success) setTrialBalanceData(res.data.data);
      } else if (tab === 'balanceSheet') {
        const res = await api.get('/accounting/balance-sheet', { params });
        if (res.data.success) setBalanceSheetData(res.data.data);
      } else if (tab === 'incomeStatement') {
        const res = await api.get('/accounting/income-statement', { params });
        if (res.data.success) setIncomeStatementData(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'ডেটা লোড করতে সমস্যা হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  // Quick Date Range Presets
  const handleQuickPreset = (preset) => {
    const now = new Date();
    let start = new Date();
    let end = new Date();

    if (preset === 'thisMonth') {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    } else if (preset === 'lastMonth') {
      start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      end = new Date(now.getFullYear(), now.getMonth(), 0);
    } else if (preset === 'thisYear') {
      start = new Date(now.getFullYear(), 0, 1);
      end = new Date(now.getFullYear(), 11, 31);
    } else if (preset === 'allTime') {
      start = new Date(2020, 0, 1);
      end = now;
    }

    const sStr = start.toISOString().split('T')[0];
    const eStr = end.toISOString().split('T')[0];
    setStartDate(sStr);
    setEndDate(eStr);
    fetchData(activeTab, sStr, eStr);
  };

  const formatMoney = (amount) => {
    return '৳ ' + Number(amount || 0).toLocaleString('en-IN');
  };

  // Printable Report Generation (A4 Landscape / Portrait)
  const renderPrintableReport = () => {
    let docTitle = 'আর্থিক হিসাব বিবরণী';
    let subMeta = '';
    if (activeTab === 'trialBalance') {
      docTitle = 'রেওয়ামিল বিবরণী (Trial Balance)';
      subMeta = `সময়কাল: ${formatDateDDMMYYYY(startDate)} হতে ${formatDateDDMMYYYY(endDate)}`;
    } else if (activeTab === 'balanceSheet') {
      docTitle = 'উদ্বৃত্তপত্র বিবরণী (Balance Sheet)';
      subMeta = `তারিখ: ${formatDateDDMMYYYY(endDate)} অনুযায়ী`;
    } else if (activeTab === 'incomeStatement') {
      docTitle = 'আয়-ব্যয় ও লাভ-ক্ষতি বিবরণী (Income Statement)';
      subMeta = `সময়কাল: ${formatDateDDMMYYYY(startDate)} হতে ${formatDateDDMMYYYY(endDate)}`;
    }

    return (
      <div style={{ position: 'relative', width: '100%', minHeight: '100%', background: '#ffffff', color: '#0f172a', padding: '10px' }}>
        {/* Watermark Logo */}
        <img
          src="/images/madrasah_logo.png"
          alt="Watermark"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            opacity: 0.05,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <MadrasahLetterhead
            documentTitle={docTitle}
            metaLeft={<>{subMeta} | শাখা: <strong>{madrasahInfo.branchName || 'মূল শাখা'}</strong></>}
            metaRight={<>মুদ্রণের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
          />

          {/* Tab 1: Trial Balance */}
          {activeTab === 'trialBalance' && trialBalanceData && (
            <div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 14px', margin: '8px 0 12px 0', background: '#f8fafc',
                border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', fontWeight: 600
              }}>
                <div>মোট ডেবিট: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#047857' }}>{formatMoney(trialBalanceData.totals.debit)}</span></div>
                <div>মোট ক্রেডিট: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#1d4ed8' }}>{formatMoney(trialBalanceData.totals.credit)}</span></div>
                <div>রেওয়ামিল স্থিতি: <span style={{ fontWeight: 700, color: trialBalanceData.totals.debit === trialBalanceData.totals.credit ? '#047857' : '#b91c1c' }}>
                  {trialBalanceData.totals.debit === trialBalanceData.totals.credit ? '✓ উভয় পাশ সমান' : `অমিল: ${formatMoney(Math.abs(trialBalanceData.totals.debit - trialBalanceData.totals.credit))}`}
                </span></div>
              </div>

              <table className="accounting-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9pt' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9' }}>
                    <th style={{ width: '80px', textAlign: 'left', padding: '6px 8px' }}>কোড</th>
                    <th style={{ textAlign: 'left', padding: '6px 8px' }}>হিসাবের নাম (Account Name)</th>
                    <th style={{ width: '100px', textAlign: 'center', padding: '6px 8px' }}>গ্রুপ</th>
                    <th style={{ width: '130px', textAlign: 'right', padding: '6px 8px' }}>ডেবিট (৳)</th>
                    <th style={{ width: '130px', textAlign: 'right', padding: '6px 8px' }}>ক্রেডিট (৳)</th>
                  </tr>
                </thead>
                <tbody>
                  {trialBalanceData.trialBalance.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ fontFamily: 'monospace', padding: '5px 8px', fontSize: '8.5pt' }}>{item.code}</td>
                      <td style={{ fontWeight: 600, padding: '5px 8px', fontSize: '9pt' }}>{item.name}</td>
                      <td style={{ textAlign: 'center', padding: '5px 8px', fontSize: '8pt', color: '#64748b' }}>{item.type}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '5px 8px', fontWeight: 600, color: item.debit > 0 ? '#047857' : '#64748b' }}>
                        {item.debit > 0 ? formatMoney(item.debit) : '—'}
                      </td>
                      <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '5px 8px', fontWeight: 600, color: item.credit > 0 ? '#1d4ed8' : '#64748b' }}>
                        {item.credit > 0 ? formatMoney(item.credit) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ background: '#f8fafc', fontWeight: 800, borderTop: '2px solid #334155' }}>
                    <td colSpan={3} style={{ textAlign: 'right', padding: '7px 8px', fontSize: '9.5pt' }}>মোট যোগফল (Total Balance):</td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '7px 8px', fontSize: '10pt', color: '#047857' }}>
                      {formatMoney(trialBalanceData.totals.debit)}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '7px 8px', fontSize: '10pt', color: '#1d4ed8' }}>
                      {formatMoney(trialBalanceData.totals.credit)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}

          {/* Tab 2: Balance Sheet */}
          {activeTab === 'balanceSheet' && balanceSheetData && (
            <div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 14px', margin: '8px 0 12px 0', background: '#f8fafc',
                border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', fontWeight: 600
              }}>
                <div>মোট সম্পদ: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#047857' }}>{formatMoney(balanceSheetData.totalAssets)}</span></div>
                <div>মোট দায় ও ইকুইটি: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#b91c1c' }}>{formatMoney(balanceSheetData.totalLiabilitiesAndEquity)}</span></div>
                <div>নিট আয় / সারপ্লাস: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#0f766e' }}>{formatMoney(balanceSheetData.netIncome)}</span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
                {/* Left: Assets */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontWeight: 700, fontSize: '10pt', color: '#047857', borderBottom: '2px solid #10b981', paddingBottom: '4px', marginBottom: '8px' }}>
                    সম্পদসমূহ (Assets)
                  </div>
                  <table className="accounting-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5pt' }}>
                    <tbody>
                      {balanceSheetData.assets.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '4px 6px' }}>{item.name}</td>
                          <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#047857', padding: '4px 6px' }}>
                            {formatMoney(item.balance)}
                          </td>
                        </tr>
                      ))}
                      <tr style={{ background: '#f1f5f9', fontWeight: 800, borderTop: '1.5px solid #047857' }}>
                        <td style={{ padding: '6px 8px' }}>মোট সম্পদ (Total Assets):</td>
                        <td style={{ textAlign: 'right', fontFamily: 'monospace', color: '#047857', padding: '6px 8px' }}>
                          {formatMoney(balanceSheetData.totalAssets)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Right: Liabilities & Equity */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontWeight: 700, fontSize: '10pt', color: '#b91c1c', borderBottom: '2px solid #ef4444', paddingBottom: '4px', marginBottom: '8px' }}>
                    দায় ও মূলধন (Liabilities & Equity)
                  </div>
                  <table className="accounting-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5pt' }}>
                    <thead>
                      <tr>
                        <th colSpan="2" style={{ textAlign: 'left', background: '#f8fafc', padding: '3px 6px', fontSize: '8pt', color: '#64748b' }}>১. দায়সমূহ (Liabilities)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {balanceSheetData.liabilities.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '4px 6px' }}>{item.name}</td>
                          <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, padding: '4px 6px' }}>
                            {formatMoney(item.balance)}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <th colSpan="2" style={{ textAlign: 'left', background: '#f8fafc', padding: '3px 6px', fontSize: '8pt', color: '#64748b', borderTop: '1px solid #cbd5e1' }}>২. ইকুইটি ও তহবিল (Equity)</th>
                      </tr>
                      {balanceSheetData.equities.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '4px 6px' }}>{item.name}</td>
                          <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, padding: '4px 6px' }}>
                            {formatMoney(item.balance)}
                          </td>
                        </tr>
                      ))}
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '4px 6px' }}>নিট উদ্বৃত্ত / উদ্বৃত্ত আয়:</td>
                        <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#047857', padding: '4px 6px' }}>
                          {formatMoney(balanceSheetData.netIncome)}
                        </td>
                      </tr>
                      <tr style={{ background: '#f1f5f9', fontWeight: 800, borderTop: '1.5px solid #b91c1c' }}>
                        <td style={{ padding: '6px 8px' }}>মোট দায় ও ইকুইটি:</td>
                        <td style={{ textAlign: 'right', fontFamily: 'monospace', color: '#b91c1c', padding: '6px 8px' }}>
                          {formatMoney(balanceSheetData.totalLiabilitiesAndEquity)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Income Statement */}
          {activeTab === 'incomeStatement' && incomeStatementData && (
            <div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '7px 14px', margin: '8px 0 12px 0', background: '#f8fafc',
                border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', fontWeight: 600
              }}>
                <div>মোট রাজস্ব/আয়: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#047857' }}>{formatMoney(incomeStatementData.totalRevenue)}</span></div>
                <div>মোট পরিচালন ব্যয়: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#b91c1c' }}>{formatMoney(incomeStatementData.totalExpense)}</span></div>
                <div>নিট মুনাফা / উদ্বৃত্ত: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: incomeStatementData.netIncome >= 0 ? '#047857' : '#b91c1c' }}>
                  {formatMoney(incomeStatementData.netIncome)}
                </span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
                {/* Revenue Table */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontWeight: 700, fontSize: '10pt', color: '#047857', borderBottom: '2px solid #10b981', paddingBottom: '4px', marginBottom: '8px' }}>
                    ১. মোট রাজস্ব / আয়সমূহ (Revenues)
                  </div>
                  <table className="accounting-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5pt' }}>
                    <tbody>
                      {incomeStatementData.revenues.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '4px 6px' }}>{item.name}</td>
                          <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#047857', padding: '4px 6px' }}>
                            {formatMoney(item.balance)}
                          </td>
                        </tr>
                      ))}
                      <tr style={{ background: '#f1f5f9', fontWeight: 800, borderTop: '1.5px solid #047857' }}>
                        <td style={{ padding: '6px 8px' }}>সর্বমোট আয় (Total Revenue):</td>
                        <td style={{ textAlign: 'right', fontFamily: 'monospace', color: '#047857', padding: '6px 8px' }}>
                          {formatMoney(incomeStatementData.totalRevenue)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Expense Table */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '6px', padding: '10px' }}>
                  <div style={{ fontWeight: 700, fontSize: '10pt', color: '#b91c1c', borderBottom: '2px solid #ef4444', paddingBottom: '4px', marginBottom: '8px' }}>
                    ২. পরিচালন ও অন্যান্য ব্যয়সমূহ (Expenses)
                  </div>
                  <table className="accounting-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5pt' }}>
                    <tbody>
                      {incomeStatementData.expenses.map((item, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '4px 6px' }}>{item.name}</td>
                          <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#b91c1c', padding: '4px 6px' }}>
                            {formatMoney(item.balance)}
                          </td>
                        </tr>
                      ))}
                      <tr style={{ background: '#f1f5f9', fontWeight: 800, borderTop: '1.5px solid #b91c1c' }}>
                        <td style={{ padding: '6px 8px' }}>সর্বমোট ব্যয় (Total Expense):</td>
                        <td style={{ textAlign: 'right', fontFamily: 'monospace', color: '#b91c1c', padding: '6px 8px' }}>
                          {formatMoney(incomeStatementData.totalExpense)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Footer Signatures */}
          <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: 'auto', paddingTop: '28px' }} />
        </div>
      </div>
    );
  };

  // Export to Excel
  const exportToExcel = () => {
    let wsData = [
      ['মাদ্রাসার নাম:', madrasahName],
      ['রিপোর্টের শিরোনাম:', activeTab === 'trialBalance' ? 'রেওয়ামিল (Trial Balance)' : (activeTab === 'balanceSheet' ? 'উদ্বৃত্তপত্র (Balance Sheet)' : 'আয়-ব্যয় বিবরণী (Income Statement)')],
      ['তারিখ রেঞ্জ:', `${formatDateDDMMYYYY(startDate)} হতে ${formatDateDDMMYYYY(endDate)}`],
      []
    ];
    
    if (activeTab === 'trialBalance' && trialBalanceData) {
      wsData.push(['হিসাব কোড (Code)', 'হিসাবের নাম (Account Name)', 'ধরন (Type)', 'ডেবিট (Debit ৳)', 'ক্রেডিট (Credit ৳)']);
      trialBalanceData.trialBalance.forEach(item => {
        wsData.push([item.code, item.name, item.type, item.debit || 0, item.credit || 0]);
      });
      wsData.push([]);
      wsData.push(['', 'মোট যোগফল (Total):', '', trialBalanceData.totals.debit, trialBalanceData.totals.credit]);
    } else if (activeTab === 'incomeStatement' && incomeStatementData) {
      wsData.push(['আয়ের খাত (Revenues)', 'টাকা (৳)']);
      incomeStatementData.revenues.forEach(r => wsData.push([r.name, r.balance]));
      wsData.push(['মোট আয় (Total Revenue):', incomeStatementData.totalRevenue]);
      wsData.push([]);
      wsData.push(['ব্যয়ের খাত (Expenses)', 'টাকা (৳)']);
      incomeStatementData.expenses.forEach(e => wsData.push([e.name, e.balance]));
      wsData.push(['মোট ব্যয় (Total Expense):', incomeStatementData.totalExpense]);
      wsData.push([]);
      wsData.push(['নিট উদ্বৃত্ত / মুনাফা (Net Income):', incomeStatementData.netIncome]);
    } else if (activeTab === 'balanceSheet' && balanceSheetData) {
      wsData.push(['সম্পদ (Assets)', 'টাকা (৳)']);
      balanceSheetData.assets.forEach(a => wsData.push([a.name, a.balance]));
      wsData.push(['মোট সম্পদ:', balanceSheetData.totalAssets]);
      wsData.push([]);
      wsData.push(['দায় (Liabilities)', 'টাকা (৳)']);
      balanceSheetData.liabilities.forEach(l => wsData.push([l.name, l.balance]));
      wsData.push(['মূলধন ও অন্যান্য (Equities)', 'টাকা (৳)']);
      balanceSheetData.equities.forEach(eq => wsData.push([eq.name, eq.balance]));
      wsData.push(['নিট আয় (Net Income):', balanceSheetData.netIncome]);
      wsData.push(['মোট দায় ও মূলধন:', balanceSheetData.totalLiabilitiesAndEquity]);
    }

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Accounting_Report');
    XLSX.writeFile(wb, `Report_${activeTab}_${startDate}_to_${endDate}.xlsx`);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchData(activeTab);
  };

  // ──────────────────────────────────────────────────────────────
  // RENDER: রেওয়ামিল (Trial Balance)
  // ──────────────────────────────────────────────────────────────
  const renderTrialBalance = () => {
    if (!trialBalanceData) return null;

    const isBalanced = trialBalanceData.totals.debit === trialBalanceData.totals.credit;
    const diff = Math.abs(trialBalanceData.totals.debit - trialBalanceData.totals.credit);

    const filteredRows = trialBalanceData.trialBalance.filter(item => {
      if (!tableSearch.trim()) return true;
      const q = tableSearch.toLowerCase().trim();
      return (item.name || '').toLowerCase().includes(q) || (item.code || '').includes(q) || (item.type || '').toLowerCase().includes(q);
    });

    return (
      <div>
        {/* KPI Cards for Trial Balance */}
        <div className="grid grid-3 mb-20 no-print" style={{ gap: '16px' }}>
          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <div className="text-xs font-bold text-success mb-6">মোট ডেবিট (TOTAL DEBIT)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#047857' }}>
              {formatMoney(trialBalanceData.totals.debit)}
            </div>
            <div className="text-xs text-muted mt-4">সম্পদ ও ব্যয় হিসাবের জের</div>
          </div>

          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.04))', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
            <div className="text-xs font-bold text-primary mb-6">মোট ক্রেডিট (TOTAL CREDIT)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1d4ed8' }}>
              {formatMoney(trialBalanceData.totals.credit)}
            </div>
            <div className="text-xs text-muted mt-4">দায়, মূলধন ও আয় হিসাবের জের</div>
          </div>

          <div className="card" style={{
            padding: '16px 20px', borderRadius: '12px',
            background: isBalanced ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.04))' : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.04))',
            border: `1px solid ${isBalanced ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)'}`
          }}>
            <div className="text-xs font-bold mb-6 flex items-center gap-6" style={{ color: isBalanced ? '#047857' : '#b91c1c' }}>
              <Scale size={15} /> রেওয়ামিল স্থিতি (BALANCE STATUS)
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: isBalanced ? '#047857' : '#b91c1c', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isBalanced ? (
                <>
                  <CheckCircle2 size={20} className="text-success" /> রেওয়ামিল উভয় পাশ সমান
                </>
              ) : (
                <>
                  <XCircle size={20} className="text-danger" /> অমিল: {formatMoney(diff)}
                </>
              )}
            </div>
            <div className="text-xs text-muted mt-4">
              {isBalanced ? 'ডেবিট ও ক্রেডিট সঠিক রয়েছে' : 'ভাউচার বা জার্নাল এন্ট্রি যাচাই করুন'}
            </div>
          </div>
        </div>

        {/* Trial Balance Table Card */}
        <div className="card print-area" style={{ padding: '0', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          {/* Print Header */}
          <div className="print-only" style={{ padding: '0 0 16px 0', position: 'relative' }}>
            <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
            <MadrasahLetterhead
              documentTitle="রেওয়ামিল বিবরণী (Trial Balance)"
              metaLeft={<>সময়কাল: <strong>{formatDateDDMMYYYY(startDate)} হতে {formatDateDDMMYYYY(endDate)}</strong></>}
              metaRight={<>মুদ্রণের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
            />
          </div>

          <div className="table-responsive">
            <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, width: '110px' }}>কোড (Code)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700 }}>হিসাবের নাম (Account Name)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, width: '120px' }}>গ্রুপ (Type)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, width: '160px' }}>ডেবিট (Debit ৳)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 700, width: '160px' }}>ক্রেডিট (Credit ৳)</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-color)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)'
                    }}
                  >
                    <td className="font-mono font-bold" style={{ padding: '10px 16px', fontSize: '0.88rem' }}>{item.code}</td>
                    <td style={{ padding: '10px 16px', fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center', fontSize: '0.78rem' }}>
                      <span className="badge badge-muted" style={{ padding: '2px 8px' }}>
                        {item.type}
                      </span>
                    </td>
                    <td className="font-mono text-right" style={{ padding: '10px 16px', fontWeight: 700, color: item.debit > 0 ? '#059669' : 'var(--text-muted)' }}>
                      {item.debit > 0 ? formatMoney(item.debit) : '—'}
                    </td>
                    <td className="font-mono text-right" style={{ padding: '10px 16px', fontWeight: 700, color: item.credit > 0 ? '#1d4ed8' : 'var(--text-muted)' }}>
                      {item.credit > 0 ? formatMoney(item.credit) : '—'}
                    </td>
                  </tr>
                ))}

                {filteredRows.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted" style={{ padding: '30px' }}>
                      কোনো হিসাব পাওয়া যায়নি
                    </td>
                  </tr>
                )}

                {/* Totals Row */}
                <tr style={{ background: '#f8fafc', borderTop: '2px solid #cbd5e1', fontWeight: 800 }}>
                  <td colSpan="3" style={{ padding: '14px 16px', textAlign: 'right', fontSize: '0.95rem' }}>
                    মোট যোগফল (Total Balance):
                  </td>
                  <td className="font-mono text-right text-success" style={{ padding: '14px 16px', fontSize: '1.05rem', color: '#047857' }}>
                    {formatMoney(trialBalanceData.totals.debit)}
                  </td>
                  <td className="font-mono text-right text-primary" style={{ padding: '14px 16px', fontSize: '1.05rem', color: '#1d4ed8' }}>
                    {formatMoney(trialBalanceData.totals.credit)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Print Signatures */}
          <div className="print-only" style={{ marginTop: 'auto', paddingTop: '28px' }}>
            <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '0', paddingTop: '0' }} />
          </div>
        </div>
      </div>
    );
  };

  // ──────────────────────────────────────────────────────────────
  // RENDER: উদ্বৃত্তপত্র (Balance Sheet)
  // ──────────────────────────────────────────────────────────────
  const renderBalanceSheet = () => {
    if (!balanceSheetData) return null;

    return (
      <div>
        {/* KPI Summary Cards for Balance Sheet */}
        <div className="grid grid-3 mb-20 no-print" style={{ gap: '16px' }}>
          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <div className="text-xs font-bold text-success mb-6">মোট সম্পদ (TOTAL ASSETS)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#047857' }}>
              {formatMoney(balanceSheetData.totalAssets)}
            </div>
            <div className="text-xs text-muted mt-4">নগদ, ব্যাংক ও মাদ্রাসার স্থায়ী সম্পদ</div>
          </div>

          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(220, 38, 38, 0.04))', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
            <div className="text-xs font-bold text-danger mb-6">মোট দায় (TOTAL LIABILITIES)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#b91c1c' }}>
              {formatMoney(balanceSheetData.liabilities.reduce((s, i) => s + (Number(i.balance) || 0), 0))}
            </div>
            <div className="text-xs text-muted mt-4">বকেয়া ঋণ বা প্রদেয় হিসাব</div>
          </div>

          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(13, 148, 136, 0.04))', border: '1px solid rgba(15, 118, 110, 0.25)' }}>
            <div className="text-xs font-bold text-primary mb-6">নিট আয় ও মূলধন (NET INCOME & EQUITY)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f766e' }}>
              {formatMoney(balanceSheetData.netIncome)}
            </div>
            <div className="text-xs text-muted mt-4">চলতি মেয়াদের অর্জিত নিট উদ্বৃত্ত</div>
          </div>
        </div>

        {/* Balance Sheet Dual Card Container */}
        <div className="card print-area" style={{ padding: '24px', borderRadius: '14px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          {/* Print Header */}
          <div className="print-only" style={{ padding: '0 0 16px 0', position: 'relative' }}>
            <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
            <MadrasahLetterhead
              documentTitle="উদ্বৃত্তপত্র বিবরণী (Balance Sheet)"
              metaLeft={<>তারিখ: <strong>{formatDateDDMMYYYY(endDate)} অনুযায়ী</strong></>}
              metaRight={<>মুদ্রণের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
            />
          </div>

          <div className="grid grid-2" style={{ gap: '28px', alignItems: 'start' }}>
            {/* Left Column: Assets */}
            <div style={{ background: '#fcfdfd', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '2px solid #10b981', marginBottom: '14px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#047857' }}>
                  সম্পদসমূহ (Assets)
                </h3>
                <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>ডেবিট ব্যালেন্স</span>
              </div>

              <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {balanceSheetData.assets.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '8px 10px', fontSize: '0.88rem', fontWeight: 500 }}>{item.name}</td>
                      <td className="font-mono text-right" style={{ padding: '8px 10px', fontWeight: 700, color: '#047857' }}>
                        {formatMoney(item.balance)}
                      </td>
                    </tr>
                  ))}
                  {balanceSheetData.assets.length === 0 && (
                    <tr><td colSpan="2" className="text-center text-muted" style={{ padding: '16px' }}>কোনো সম্পদ হিসাব নেই</td></tr>
                  )}
                  <tr style={{ background: '#f1f5f9', fontWeight: 800 }}>
                    <td style={{ padding: '10px', fontSize: '0.95rem' }}>মোট সম্পদ (Total Assets):</td>
                    <td className="font-mono text-right" style={{ padding: '10px', fontSize: '1.05rem', color: '#047857' }}>
                      {formatMoney(balanceSheetData.totalAssets)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Column: Liabilities & Equity */}
            <div style={{ background: '#fcfdfd', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '2px solid #ef4444', marginBottom: '14px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#b91c1c' }}>
                  দায় ও মূলধন (Liabilities & Equity)
                </h3>
                <span className="badge badge-danger" style={{ fontSize: '0.75rem' }}>ক্রেডিট ব্যালেন্স</span>
              </div>

              <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th colSpan="2" style={{ padding: '6px 10px', textAlign: 'left', fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                      ১. দায়সমূহ (Liabilities)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {balanceSheetData.liabilities.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '8px 10px', fontSize: '0.88rem', fontWeight: 500 }}>{item.name}</td>
                      <td className="font-mono text-right" style={{ padding: '8px 10px', fontWeight: 700 }}>
                        {formatMoney(item.balance)}
                      </td>
                    </tr>
                  ))}
                  {balanceSheetData.liabilities.length === 0 && (
                    <tr><td colSpan="2" className="text-center text-muted" style={{ padding: '10px', fontSize: '0.8rem' }}>কোনো দায় নেই</td></tr>
                  )}
                </tbody>

                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th colSpan="2" style={{ padding: '6px 10px', textAlign: 'left', fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                      ২. মূলধন ও ইকুইটি (Equity)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {balanceSheetData.equities.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '8px 10px', fontSize: '0.88rem', fontWeight: 500 }}>{item.name}</td>
                      <td className="font-mono text-right" style={{ padding: '8px 10px', fontWeight: 700 }}>
                        {formatMoney(item.balance)}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ borderBottom: '1px solid #f1f5f9', background: 'rgba(16, 185, 129, 0.05)' }}>
                    <td style={{ padding: '8px 10px', fontSize: '0.88rem', fontWeight: 700 }}>নিট উদ্বৃত্ত / আয় (Net Income):</td>
                    <td className="font-mono text-right" style={{ padding: '8px 10px', fontWeight: 800, color: balanceSheetData.netIncome >= 0 ? '#047857' : '#b91c1c' }}>
                      {formatMoney(balanceSheetData.netIncome)}
                    </td>
                  </tr>
                  <tr style={{ background: '#f1f5f9', fontWeight: 800 }}>
                    <td style={{ padding: '10px', fontSize: '0.95rem' }}>মোট দায় ও মূলধন:</td>
                    <td className="font-mono text-right" style={{ padding: '10px', fontSize: '1.05rem', color: '#1e293b' }}>
                      {formatMoney(balanceSheetData.totalLiabilitiesAndEquity)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Print Signatures */}
          <div className="print-only" style={{ marginTop: 'auto', paddingTop: '28px' }}>
            <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '0', paddingTop: '0' }} />
          </div>
        </div>
      </div>
    );
  };

  // ──────────────────────────────────────────────────────────────
  // RENDER: আয়-ব্যয় বিবরণী (Income Statement)
  // ──────────────────────────────────────────────────────────────
  const renderIncomeStatement = () => {
    if (!incomeStatementData) return null;

    const isSurplus = incomeStatementData.netIncome >= 0;

    return (
      <div>
        {/* KPI Cards for Income Statement */}
        <div className="grid grid-3 mb-20 no-print" style={{ gap: '16px' }}>
          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <div className="text-xs font-bold text-success mb-6">মোট আয় / রাজস্ব (TOTAL REVENUE)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#047857' }}>
              + {formatMoney(incomeStatementData.totalRevenue)}
            </div>
            <div className="text-xs text-muted mt-4">ছাত্র বেতন, অনুদান ও অন্যান্য আয়</div>
          </div>

          <div className="card" style={{ padding: '16px 20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(220, 38, 38, 0.04))', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
            <div className="text-xs font-bold text-danger mb-6">মোট ব্যয় (TOTAL EXPENSE)</div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#b91c1c' }}>
              - {formatMoney(incomeStatementData.totalExpense)}
            </div>
            <div className="text-xs text-muted mt-4">বেতন, মেস, বিল ও পরিচালন ব্যয়</div>
          </div>

          <div className="card" style={{
            padding: '16px 20px', borderRadius: '12px',
            background: isSurplus ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.04))' : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.04))',
            border: `1px solid ${isSurplus ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)'}`
          }}>
            <div className="text-xs font-bold mb-6 flex items-center gap-6" style={{ color: isSurplus ? '#047857' : '#b91c1c' }}>
              {isSurplus ? <TrendingUp size={16} /> : <TrendingDown size={16} />} নিট উদ্বৃত্ত / মুনাফা (NET SURPLUS)
            </div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: isSurplus ? '#047857' : '#b91c1c' }}>
              {isSurplus ? '+' : ''}{formatMoney(incomeStatementData.netIncome)}
            </div>
            <div className="text-xs text-muted mt-4">
              {isSurplus ? 'আয় ব্যয়ের চেয়ে বেশি রয়েছে' : 'ঘাটতি / ব্যয় বেশি হয়েছে'}
            </div>
          </div>
        </div>

        {/* Statement Table Card */}
        <div className="card print-area" style={{ maxWidth: '900px', margin: '0 auto', padding: '24px', borderRadius: '14px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          {/* Print Header */}
          <div className="print-only" style={{ padding: '0 0 16px 0', position: 'relative' }}>
            <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
            <MadrasahLetterhead
              documentTitle="আয়-ব্যয় বিবরণী (Income Statement)"
              metaLeft={<>সময়কাল: <strong>{formatDateDDMMYYYY(startDate)} হতে {formatDateDDMMYYYY(endDate)}</strong></>}
              metaRight={<>মুদ্রণের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
            />
          </div>

          {/* Revenues Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ padding: '8px 12px', background: '#ecfdf5', borderLeft: '4px solid #10b981', borderRadius: '4px', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#065f46' }}>
                আয়ের খাতসমূহ (Revenues & Inflows)
              </h3>
            </div>
            <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {incomeStatementData.revenues.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '8px 12px', fontSize: '0.9rem', fontWeight: 500 }}>{item.name}</td>
                    <td className="font-mono text-right" style={{ padding: '8px 12px', fontWeight: 700, color: '#047857' }}>
                      {formatMoney(item.balance)}
                    </td>
                  </tr>
                ))}
                {incomeStatementData.revenues.length === 0 && (
                  <tr><td colSpan="2" className="text-center text-muted" style={{ padding: '12px' }}>কোনো আয়ের এন্ট্রি পাওয়া যায়নি</td></tr>
                )}
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td style={{ padding: '10px 12px', fontSize: '0.95rem' }}>মোট আয় (Total Revenues):</td>
                  <td className="font-mono text-right" style={{ padding: '10px 12px', fontSize: '1.05rem', color: '#047857' }}>
                    {formatMoney(incomeStatementData.totalRevenue)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Expenses Section */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ padding: '8px 12px', background: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#991b1b' }}>
                ব্যয়ের খাতসমূহ (Expenses & Outflows)
              </h3>
            </div>
            <table className="table print-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {incomeStatementData.expenses.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '8px 12px', fontSize: '0.9rem', fontWeight: 500 }}>{item.name}</td>
                    <td className="font-mono text-right" style={{ padding: '8px 12px', fontWeight: 700, color: '#b91c1c' }}>
                      {formatMoney(item.balance)}
                    </td>
                  </tr>
                ))}
                {incomeStatementData.expenses.length === 0 && (
                  <tr><td colSpan="2" className="text-center text-muted" style={{ padding: '12px' }}>কোনো ব্যয়ের এন্ট্রি পাওয়া যায়নি</td></tr>
                )}
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td style={{ padding: '10px 12px', fontSize: '0.95rem' }}>মোট ব্যয় (Total Expenses):</td>
                  <td className="font-mono text-right" style={{ padding: '10px 12px', fontSize: '1.05rem', color: '#b91c1c' }}>
                    {formatMoney(incomeStatementData.totalExpense)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Net Income Summary Block */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 20px', borderRadius: '10px',
            background: isSurplus ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
            border: `1.5px solid ${isSurplus ? '#10b981' : '#ef4444'}`
          }}>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: isSurplus ? '#065f46' : '#991b1b' }}>
                {isSurplus ? 'নিট উদ্বৃত্ত / লাভ (Net Surplus):' : 'নিট ঘাটতি (Net Deficit):'}
              </div>
              <div className="text-xs text-muted">মোট আয় বিয়োগ মোট ব্যয়</div>
            </div>
            <div className="font-mono" style={{ fontSize: '1.45rem', fontWeight: 900, color: isSurplus ? '#047857' : '#b91c1c' }}>
              {isSurplus ? '+' : ''}{formatMoney(incomeStatementData.netIncome)}
            </div>
          </div>

          {/* Print Signatures */}
          <div className="print-only" style={{ marginTop: 'auto', paddingTop: '28px' }}>
            <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '0', paddingTop: '0' }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* ──────────────────────────────────────────────────────────────
          SCREEN-ONLY: Page Header & Action Bar
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
                <PieChart size={22} />
              </div>
              <div>
                <h1 className="page-title" style={{ margin: 0, fontSize: '1.45rem', fontWeight: 800 }}>
                  অ্যাকাউন্টিং ফাইনান্সিয়াল রিপোর্টস
                </h1>
                <p className="page-subtitle" style={{ margin: 0, fontSize: '0.88rem' }}>
                  রেওয়ামিল (Trial Balance), উদ্বৃত্তপত্র (Balance Sheet) এবং আয়-ব্যয় বিবরণী
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-8" style={{ flexWrap: 'wrap' }}>
            <button
              onClick={() => fetchData(activeTab)}
              className="btn btn-outline btn-sm flex items-center gap-4"
              disabled={loading}
              style={{ fontSize: '0.82rem', padding: '6px 12px' }}
            >
              <RefreshCw size={14} className={loading ? 'spin' : ''} /> রিফ্রেশ
            </button>

            <button
              onClick={exportToExcel}
              className="btn btn-outline btn-sm flex items-center gap-6"
              style={{ fontSize: '0.82rem', padding: '6px 12px', borderColor: '#10b981', color: '#047857' }}
            >
              <TableIcon size={14} /> এক্সেল
            </button>

            <button
              onClick={() => setShowPrintModal(true)}
              className="btn btn-primary btn-sm flex items-center gap-6"
              style={{ padding: '6px 16px', background: '#0f766e', borderColor: '#0f766e' }}
              title="রিপোর্ট প্রিন্ট করুন অথবা পিডিএফ হিসেবে সংরক্ষণ করুন"
            >
              <Printer size={15} /> প্রিন্ট / সেভ পিডিএফ
            </button>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────
            PILL TAB SWITCHER
           ────────────────────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0',
          paddingBottom: '2px', marginBottom: '20px', flexWrap: 'wrap'
        }}>
          {[
            { key: 'trialBalance', label: 'রেওয়ামিল (Trial Balance)', icon: BookOpen },
            { key: 'balanceSheet', label: 'উদ্বৃত্তপত্র (Balance Sheet)', icon: FileText },
            { key: 'incomeStatement', label: 'আয়-ব্যয় বিবরণী (Income Statement)', icon: PieChart },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '8px 8px 0 0',
                  fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer',
                  border: 'none', background: isActive ? '#0f766e' : 'transparent',
                  color: isActive ? '#ffffff' : '#64748b',
                  boxShadow: isActive ? '0 2px 8px rgba(15, 118, 110, 0.2)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ──────────────────────────────────────────────────────────────
            FILTERS & SEARCH CARD
           ────────────────────────────────────────────────────────────── */}
        <div className="card mb-20" style={{ padding: '16px 20px', borderRadius: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
          {/* Quick Date Presets Row */}
          <div className="flex items-center gap-6 mb-16" style={{ flexWrap: 'wrap' }}>
            <span className="text-xs font-semibold flex items-center gap-4" style={{ color: 'var(--text-secondary)', marginRight: '4px' }}>
              <Calendar size={14} /> দ্রুত সময়কাল:
            </span>
            {[
              { label: 'চলতি মাস', key: 'thisMonth' },
              { label: 'গত মাস', key: 'lastMonth' },
              { label: 'চলতি অর্থবছর', key: 'thisYear' },
              { label: 'সর্বমোট / লাইফটাইম', key: 'allTime' },
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

          <form onSubmit={handleFilterSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', alignItems: 'end' }}>
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                শুরুর তারিখ
              </label>
              <input
                type="date"
                className="form-input font-mono"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                style={{ height: '38px', fontSize: '0.88rem' }}
              />
            </div>

            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                শেষের তারিখ
              </label>
              <input
                type="date"
                className="form-input font-mono"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                style={{ height: '38px', fontSize: '0.88rem' }}
              />
            </div>

            {/* In-table Search */}
            <div>
              <label className="text-xs font-semibold mb-4 block" style={{ color: 'var(--text-secondary)' }}>
                খাত বা কোড অনুসন্ধান
              </label>
              <div style={{ position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: '10px', top: '12px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="যেমন: 5001, ব্যাংক, বেতন..."
                  value={tableSearch}
                  onChange={e => setTableSearch(e.target.value)}
                  className="form-input"
                  style={{ height: '38px', paddingLeft: '32px', fontSize: '0.88rem' }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                style={{ height: '38px', background: '#0f766e', borderColor: '#0f766e', fontWeight: 600 }}
              >
                রিপোর্ট দেখুন
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Error alert */}
      {error && (
        <div className="alert alert-danger mb-20 no-print flex items-center gap-8">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Loading indicator */}
      {loading ? (
        <div className="flex-center" style={{ minHeight: '350px', flexDirection: 'column', gap: '12px' }}>
          <Loader className="spin text-primary" size={36} />
          <p className="text-muted font-medium">অ্যাকাউন্টিং লেজার ও খতিয়ান প্রস্তুত হচ্ছে...</p>
        </div>
      ) : (
        <div>
          {activeTab === 'trialBalance' && renderTrialBalance()}
          {activeTab === 'balanceSheet' && renderBalanceSheet()}
          {activeTab === 'incomeStatement' && renderIncomeStatement()}
        </div>
      )}

      {/* ── ডেডিকেটেড A4 হিসাব বিবরণী শিট (ব্রাউজার প্রিন্ট রেন্ডার) ── */}
      <div className="accounting-print-sheet">
        {renderPrintableReport()}
      </div>

      {/* ── হিসাব বিবরণী প্রিন্ট প্রিভিউ ও সেটিংস মোডাল (Print Preview Modal) ── */}
      {showPrintModal && (
        <div className="print-modal-overlay no-print" style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: windowWidth < 640 ? '6px' : '16px', backdropFilter: 'blur(6px)'
        }}>
          <div className="card print-modal-card animate-scale-up" style={{
            width: '100%', maxWidth: '960px', maxHeight: '96vh',
            display: 'flex', flexDirection: 'column', borderRadius: '16px',
            background: 'var(--bg-card)', padding: 0, overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)', border: '1px solid var(--border-color)'
          }}>
            {/* Modal Header */}
            <div className="print-preview-modal-header" style={{
              padding: '12px 18px', borderBottom: '1px solid var(--border-color)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'var(--bg-tertiary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={18} className="text-primary" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  আর্থিক হিসাব বিবরণী প্রিন্ট ও পিডিএফ প্রিভিউ ({activeTab === 'trialBalance' ? 'রেওয়ামিল' : activeTab === 'balanceSheet' ? 'উদ্বৃত্তপত্র' : 'আয়-ব্যয়'})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                title="বন্ধ করুন"
              >
                <X size={20} />
              </button>
            </div>

            {/* Controls Bar: Roles & Actions (no-print) */}
            <div className="print-preview-controls no-print" style={{
              padding: '10px 18px', borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>✍️ ফুটার স্বাক্ষরকারী রোল নির্বাচন:</span>
                  <span style={{ fontSize: '0.72rem', color: selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES ? '#f59e0b' : 'var(--text-muted)' }}>
                    (সর্বোচ্চ ৫টি, নির্বাচিত: {selectedSignatureRoles.length}টি)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => window.print()}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 16px', fontWeight: 700, fontSize: '0.82rem' }}
                  >
                    <Printer size={15} /> প্রিন্ট / সেভ পিডিএফ (A4)
                  </button>
                </div>
              </div>

              {/* Universal Signature Role Selector */}
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__accounting_reports', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={customRolesList}
                style={{ marginBottom: '0', background: 'transparent', border: 'none', padding: '0' }}
              />
            </div>


            {/* View Mode Toolbar (no-print) */}
            <div className="print-preview-view-mode-bar no-print" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 14px', background: '#1e293b', borderBottom: '1px solid #334155',
              flexWrap: 'wrap', gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#94a3b8' }}>ভিউ মোড:</span>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('scroll')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'scroll' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>↔️ ১০০% ফুল সাইজ (সাইড স্ক্রল)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('fit')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'fit' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>📱 স্ক্রিনে ফিট ({Math.round(mobileFitScale * 100)}%)</span>
                </button>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 600 }}>
                {previewZoom === 'scroll' ? '👉 ডানে-বামে আঙুল দিয়ে স্ক্রল করে পুরো শিট দেখুন' : '✓ পুরো শিট স্ক্রিনে দেখা যাচ্ছে'}
              </div>
            </div>

            {/* Scrollable Viewport Container (Horizontal & Vertical Touch Scrolling) */}
            <div
              className="print-preview-viewport"
              style={{
                flex: 1,
                overflowX: 'auto',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: windowWidth < 640 ? '8px' : '20px',
                background: '#0f172a',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: previewZoom === 'fit' ? '100%' : 'max-content',
                  minWidth: previewZoom === 'fit' ? '100%' : `${baseSheetWidth}px`,
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: previewZoom === 'fit' ? 'hidden' : 'visible'
                }}
              >
                <div
                  className="print-paper-sheet"
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '20px 24px',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
                    width: `${baseSheetWidth}px`,
                    minWidth: `${baseSheetWidth}px`,
                    position: 'relative',
                    transform: previewZoom === 'fit' ? `scale(${mobileFitScale})` : 'none',
                    transformOrigin: 'top center'
                  }}
                >
                  {renderPrintableReport()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .accounting-print-sheet {
          display: none !important;
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm 10mm;
          }
          .no-print,
          .sidebar,
          .topbar,
          .mobile-sidebar-overlay,
          .modal-backdrop,
          .print-modal-overlay,
          .page-header,
          .card,
          .btn,
          nav,
          header:not(#madrasah-official-header):not(.madrasah-letterhead-root) {
            display: none !important;
          }
          body, html, #root, .dashboard-layout, .main-content, .page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            overflow: visible !important;
            min-height: auto !important;
          }
          .accounting-print-sheet {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100% !important;
            width: 100% !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-sizing: border-box !important;
          }
          .accounting-print-sheet #madrasah-official-header,
          .accounting-print-sheet .madrasah-letterhead-root {
            display: block !important;
            width: 100% !important;
          }
          .accounting-print-table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin-top: 8px !important;
            font-size: 8.5pt !important;
          }
          .accounting-print-table th,
          .accounting-print-table td {
            border: 1px solid #333333 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
            line-height: 1.25 !important;
          }
          .accounting-print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .accounting-print-table thead {
            display: table-header-group !important;
          }
          .accounting-print-table tbody tr {
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}
