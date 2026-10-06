import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart2, TrendingUp, TrendingDown, CreditCard, DollarSign, Loader,
  Printer, Calendar, CheckCircle2, XCircle, Search, Filter, RefreshCw,
  Wallet, Users, FileSpreadsheet, ArrowUpRight, ArrowDownRight,
  AlertCircle, Building2, Check, ArrowRight, ShieldCheck, ChevronRight,
  Edit2, Save, X
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, formatDateDDMMYYYY } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function FinanceReportsPage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { madrasahName, branchName, address, phone } = getMadrasahInfo(user);

  // Current Month default YYYY-MM
  const now = new Date();
  const defaultMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'salary_sheet'
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__finance_reports');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  const [report, setReport] = useState(null);
  const [salarySheetData, setSalarySheetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Salary Sheet Filters
  const [salarySearch, setSalarySearch] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('all'); // 'all' | 'paid' | 'unpaid'

  // In-place Salary setting state
  const [isSalaryModalOpen, setIsSalaryModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [salaryInput, setSalaryInput] = useState('');
  const [savingSalary, setSavingSalary] = useState(false);
  const [salaryToast, setSalaryToast] = useState(null);

  const handleOpenSalaryModal = (staff) => {
    setEditingStaff(staff);
    setSalaryInput(staff.baseSalary ? String(staff.baseSalary) : '');
    setIsSalaryModalOpen(true);
  };

  const handleSaveSalary = async (e) => {
    e.preventDefault();
    if (!editingStaff) return;
    try {
      setSavingSalary(true);
      const res = await api.post('/reports/update-staff-salary', {
        staffId: editingStaff._id,
        teacherId: editingStaff.teacherId,
        salary: Number(salaryInput) || 0
      });

      if (res.data?.success) {
        const updatedAmt = Number(salaryInput) || 0;
        setSalarySheetData(prev => {
          if (!prev) return prev;
          const updated = (prev.salarySheet || []).map(s => {
            if (s._id === editingStaff._id || (editingStaff.teacherId && s.teacherId === editingStaff.teacherId)) {
              return { ...s, baseSalary: updatedAmt };
            }
            return s;
          });
          return { ...prev, salarySheet: updated };
        });

        setIsSalaryModalOpen(false);
        setSalaryToast({ type: 'success', message: `${editingStaff.name}-এর বেতন ৳${updatedAmt.toLocaleString('en-IN')} সংরক্ষণ করা হয়েছে` });
        setTimeout(() => setSalaryToast(null), 4000);
      }
    } catch (err) {
      console.error('Error updating salary:', err);
      alert('বেতন সংরক্ষণ করতে সমস্যা হয়েছে');
    } finally {
      setSavingSalary(false);
    }
  };

  // Fetch report & salary sheet together
  const fetchAllData = async (monthToFetch = selectedMonth) => {
    try {
      setLoading(true);
      setError('');

      const [financeRes, salaryRes] = await Promise.all([
        api.get('/reports/finance', { params: { month: monthToFetch } }),
        api.get('/reports/teacher-salary-sheet', { params: { month: monthToFetch } }).catch(err => {
          console.warn('Salary sheet fetch error:', err);
          return { data: { success: false, data: null } };
        })
      ]);

      if (financeRes.data?.success) {
        setReport(financeRes.data.data);
      } else {
        setError('আর্থিক রিপোর্ট তথ্য পাওয়া যায়নি।');
      }

      if (salaryRes.data?.success) {
        setSalarySheetData(salaryRes.data.data);
      }
    } catch (err) {
      console.error('Error fetching finance reports:', err);
      setError(err.response?.data?.message || 'রিপোর্ট লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData(selectedMonth);
  }, [selectedMonth]);

  const handlePrint = () => {
    window.print();
  };

  // Quick Month Handlers
  const handleSetThisMonth = () => {
    const cur = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    setSelectedMonth(cur);
  };

  const handleSetLastMonth = () => {
    const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const mStr = `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`;
    setSelectedMonth(mStr);
  };

  // Month Format display (e.g. "সেপ্টেম্বর ২০২৬")
  const formattedMonthName = useMemo(() => {
    if (!selectedMonth) return '';
    const [y, m] = selectedMonth.split('-').map(Number);
    const date = new Date(y, m - 1, 1);
    try {
      return date.toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' });
    } catch (e) {
      return selectedMonth;
    }
  }, [selectedMonth]);

  // Filtered Salary Sheet
  const filteredSalarySheet = useMemo(() => {
    if (!salarySheetData?.salarySheet) return [];
    return salarySheetData.salarySheet.filter(item => {
      const matchSearch =
        (item.name || '').toLowerCase().includes(salarySearch.toLowerCase()) ||
        (item.designation || '').toLowerCase().includes(salarySearch.toLowerCase()) ||
        (item.phone || '').includes(salarySearch);

      if (!matchSearch) return false;
      if (salaryFilter === 'paid') return item.status === 'paid';
      if (salaryFilter === 'unpaid') return item.status === 'unpaid';
      return true;
    });
  }, [salarySheetData, salarySearch, salaryFilter]);

  // Category Expense total for progress bars
  const totalCategoryExpense = useMemo(() => {
    if (!report?.categoryExpense) return 0;
    return report.categoryExpense.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  }, [report]);

  // Navigate to Voucher Creation with prefilled Teacher info
  const handlePaySalary = (staff) => {
    navigate('/expense-vouchers', {
      state: {
        openModal: true,
        payeeName: staff.name,
        amount: staff.baseSalary > 0 ? staff.baseSalary : '',
        description: `${staff.name} - ${formattedMonthName} মাসের বেতন বাবদ`,
        date: new Date().toISOString().split('T')[0]
      }
    });
  };

  if (loading && !report) {
    return (
      <div className="page-container flex-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '16px' }}>
        <Loader className="spin text-primary" size={44} />
        <p className="text-muted font-medium">আর্থিক রিপোর্ট ও বেতন বিবরণী প্রস্তুত করা হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* ──────────────────────────────────────────────────────────────
          DEDICATED PRINT STYLES (Strict A4 Paper Optimization)
         ────────────────────────────────────────────────────────────── */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm 10mm;
          }
          .screen-only {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin-top: 10px !important;
            font-size: 10.5pt !important;
          }
          .print-table th, .print-table td {
            border: 1px solid #1e293b !important;
            padding: 6px 8px !important;
            color: #000000 !important;
          }
          .print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            text-align: center !important;
          }
          .print-sign-row {
            margin-top: 55px !important;
            display: flex !important;
            justify-content: space-between !important;
            page-break-inside: avoid !important;
          }
          .print-sign-box {
            width: 175px !important;
            text-align: center !important;
            border-top: 1.5px solid #000000 !important;
            padding-top: 5px !important;
            font-size: 9.5pt !important;
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
          PRINT-ONLY: Official Letterhead
         ────────────────────────────────────────────────────────────── */}
      <div className="print-only" style={{ marginBottom: '16px' }}>
        <MadrasahLetterhead
          documentTitle="আর্থিক রিপোর্ট ও বেতন বিবরণী"
          metaLeft={`মাস: ${formattedMonthName}`}
          metaRight={`মুদ্রণের তারিখ: ${new Date().toLocaleDateString('bn-BD')}`}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SCREEN-ONLY INTERACTIVE UI (Header, Controls, Tabs, Cards)
         ══════════════════════════════════════════════════════════════ */}
      <div className="screen-only">
        
        {/* Header Section */}
        <div className="page-header" style={{ flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <div>
            <div className="flex-center gap-8 mb-4" style={{ justifyContent: 'flex-start' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                boxShadow: '0 4px 12px rgba(15, 118, 110, 0.25)'
              }}>
                <BarChart2 size={22} />
              </div>
              <div>
                <h1 className="page-title" style={{ margin: 0, fontSize: '1.45rem', fontWeight: 800 }}>
                  আর্থিক রিপোর্ট ও বেতন বিবরণী
                </h1>
                <p className="page-subtitle" style={{ margin: 0 }}>
                  {formattedMonthName}
                </p>
              </div>
            </div>
          </div>

          {/* Top Controls: Month Selector, Quick Filters, Print */}
          <div className="flex-center gap-10" style={{ flexWrap: 'wrap' }}>
            {/* Month Picker */}
            <div className="flex-center gap-6" style={{ background: '#f8fafc', padding: '4px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <Calendar size={16} className="text-muted" />
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{
                  border: 'none', background: 'transparent',
                  fontWeight: 600, fontSize: '0.9rem', color: '#1e293b', outline: 'none', cursor: 'pointer'
                }}
                title="মাস পরিবর্তন করুন"
              />
            </div>

            <button
              onClick={handleSetThisMonth}
              className={`btn btn-sm ${selectedMonth === defaultMonth ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.82rem', padding: '6px 12px' }}
            >
              চলতি মাস
            </button>

            <button
              onClick={handleSetLastMonth}
              className="btn btn-sm btn-outline"
              style={{ fontSize: '0.82rem', padding: '6px 12px' }}
            >
              গত মাস
            </button>

            <button
              onClick={() => fetchAllData(selectedMonth)}
              className="btn btn-sm btn-outline flex-center gap-4"
              title="রিফ্রেশ করুন"
              disabled={loading}
            >
              <RefreshCw size={14} className={loading ? 'spin' : ''} /> রিফ্রেশ
            </button>

            <button
              className="btn btn-sm btn-primary flex-center gap-6"
              onClick={handlePrint}
              style={{ padding: '6px 16px', background: '#0f766e', borderColor: '#0f766e' }}
            >
              <Printer size={15} /> প্রিন্ট
            </button>
          </div>
        </div>

        {/* Signature Role Selector for Printing */}
        <PrintSignatureRoleSelector
          selectedRoles={selectedSignatureRoles}
          onChange={(roles) => {
            setSelectedSignatureRoles(roles);
            try {
              localStorage.setItem('annur_footer_roles__finance_reports', JSON.stringify(roles));
            } catch (_) {}
          }}
          style={{ marginBottom: '16px' }}
        />

        {/* Tab Switcher */}
        <div className="mb-20" style={{
          display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0', paddingBottom: '2px'
        }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '8px 8px 0 0',
              fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
              border: 'none', background: activeTab === 'overview' ? '#0f766e' : 'transparent',
              color: activeTab === 'overview' ? '#ffffff' : '#64748b',
              boxShadow: activeTab === 'overview' ? '0 2px 8px rgba(15, 118, 110, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <BarChart2 size={18} />
            সার্বিক আর্থিক বিবরণী (Overview)
          </button>

          <button
            onClick={() => setActiveTab('salary_sheet')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '8px 8px 0 0',
              fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
              border: 'none', background: activeTab === 'salary_sheet' ? '#0f766e' : 'transparent',
              color: activeTab === 'salary_sheet' ? '#ffffff' : '#64748b',
              boxShadow: activeTab === 'salary_sheet' ? '0 2px 8px rgba(15, 118, 110, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <FileSpreadsheet size={18} />
            মাসিক শিক্ষক ও স্টাফ বেতন শিট (Payroll)
            {salarySheetData?.stats?.unpaidCount > 0 && (
              <span style={{
                background: '#ef4444', color: '#fff', fontSize: '0.72rem',
                padding: '1px 7px', borderRadius: '12px', fontWeight: 800
              }}>
                {salarySheetData.stats.unpaidCount} বকেয়া
              </span>
            )}
          </button>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="card mb-20" style={{
            backgroundColor: '#fef2f2', borderColor: '#fca5a5', padding: '16px',
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <AlertCircle className="text-danger" size={24} />
            <div>
              <h4 style={{ margin: 0, color: '#991b1b', fontWeight: 700 }}>সমস্যা হয়েছে</h4>
              <p style={{ margin: '4px 0 0', color: '#b91c1c', fontSize: '0.9rem' }}>{error}</p>
            </div>
            <button
              onClick={() => fetchAllData(selectedMonth)}
              className="btn btn-sm btn-outline ml-auto"
              style={{ borderColor: '#f87171', color: '#b91c1c' }}
            >
              আবার চেষ্টা করুন
            </button>
          </div>
        )}

        {/* Tab 1 (Screen View): Overview */}
        {activeTab === 'overview' && report && (
          <div className="animate-fade-in">
            {/* Top 6 KPI Stat Cards */}
            <div className="grid grid-3 mb-24" style={{ gap: '16px' }}>
              {/* Card 1: Monthly Income */}
              <div className="card" style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
                borderLeft: '5px solid #16a34a', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15803d', textTransform: 'uppercase' }}>
                    {formattedMonthName} - মোট আয়
                  </span>
                  <div style={{ padding: '6px', background: '#dcfce7', borderRadius: '8px', color: '#16a34a' }}>
                    <TrendingUp size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#14532d', fontFamily: 'monospace' }}>
                  ৳{(report.monthly?.income || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  শিক্ষার্থী ফী ও অন্যান্য অনুমোদিত আয়
                </div>
              </div>

              {/* Card 2: Monthly Expense */}
              <div className="card" style={{
                background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)',
                borderLeft: '5px solid #dc2626', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#b91c1c', textTransform: 'uppercase' }}>
                    {formattedMonthName} - মোট ব্যয়
                  </span>
                  <div style={{ padding: '6px', background: '#fee2e2', borderRadius: '8px', color: '#dc2626' }}>
                    <TrendingDown size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#7f1d1d', fontFamily: 'monospace' }}>
                  ৳{(report.monthly?.expense || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  অনুমোদিত ভাউচার ও স্টাফ বেতন
                </div>
              </div>

              {/* Card 3: Monthly Net Surplus */}
              <div className="card" style={{
                background: (report.monthly?.surplus >= 0)
                  ? 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)'
                  : 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)',
                borderLeft: `5px solid ${report.monthly?.surplus >= 0 ? '#2563eb' : '#ea580c'}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{
                    fontSize: '0.85rem', fontWeight: 700,
                    color: report.monthly?.surplus >= 0 ? '#1d4ed8' : '#c2410c',
                    textTransform: 'uppercase'
                  }}>
                    {formattedMonthName} - নিট {report.monthly?.surplus >= 0 ? 'উদ্বৃত্ত (Surplus)' : 'ঘাটতি (Deficit)'}
                  </span>
                  <div style={{
                    padding: '6px',
                    background: report.monthly?.surplus >= 0 ? '#dbeafe' : '#ffedd5',
                    borderRadius: '8px',
                    color: report.monthly?.surplus >= 0 ? '#2563eb' : '#ea580c'
                  }}>
                    <Wallet size={20} />
                  </div>
                </div>
                <div style={{
                  fontSize: '1.75rem', fontWeight: 800,
                  color: report.monthly?.surplus >= 0 ? '#1e3a8a' : '#9a3412',
                  fontFamily: 'monospace'
                }}>
                  ৳{(report.monthly?.surplus || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  (মাসিক আয় - মাসিক মোট ব্যয়)
                </div>
              </div>

              {/* Card 4: Total Dues */}
              <div className="card" style={{
                borderLeft: '5px solid #d97706', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase' }}>
                    শিক্ষার্থীদের মোট বকেয়া (Dues)
                  </span>
                  <div style={{ padding: '6px', background: '#fef3c7', borderRadius: '8px', color: '#d97706' }}>
                    <AlertCircle size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#92400e', fontFamily: 'monospace' }}>
                  ৳{(report.totalDues || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  বকেয়া ও আংশিক পরিশোধিত ইনভয়েস
                </div>
              </div>

              {/* Card 5: Total Donations */}
              <div className="card" style={{
                borderLeft: '5px solid #7c3aed', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase' }}>
                    মোট দান ও অনুদান (Donation)
                  </span>
                  <div style={{ padding: '6px', background: '#ede9fe', borderRadius: '8px', color: '#7c3aed' }}>
                    <DollarSign size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#5b21b6', fontFamily: 'monospace' }}>
                  ৳{(report.totalDonation || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  লিল্লাহ ফান্ড ও সাধারণ অনুদান
                </div>
              </div>

              {/* Card 6: Lifetime Balance */}
              <div className="card" style={{
                borderLeft: '5px solid #0891b2', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div className="flex-between mb-8">
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0e7490', textTransform: 'uppercase' }}>
                    সর্বমোট আজীবন নিট ব্যালেন্স
                  </span>
                  <div style={{ padding: '6px', background: '#cffafe', borderRadius: '8px', color: '#0891b2' }}>
                    <Building2 size={20} />
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#155e75', fontFamily: 'monospace' }}>
                  ৳{(report.lifetime?.surplus || 0).toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>
                  প্রতিষ্ঠান শুরুর পর থেকে মোট উদ্বৃত্ত
                </div>
              </div>
            </div>

            {/* Comparative Summary (Daily vs Monthly vs Yearly) */}
            <div className="card mb-24" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }} className="flex-center gap-8">
                <Calendar size={18} className="text-primary" />
                পর্যায়ক্রমিক তুলনামূলক সারসংক্ষেপ (Daily, Monthly & Yearly Summary)
              </h3>
              
              <div className="grid grid-3" style={{ gap: '16px' }}>
                {/* Daily */}
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px', color: '#334155' }}>
                    📅 আজকের দিন (Today)
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-success flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingUp size={14}/> আয়:</span>
                    <strong className="font-mono">৳{(report.daily?.income || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-danger flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingDown size={14}/> ব্যয়:</span>
                    <strong className="font-mono">৳{(report.daily?.expense || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between border-top pt-8 mt-8">
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>উদ্বৃত্ত:</span>
                    <strong className={`font-mono ${(report.daily?.surplus || 0) >= 0 ? 'text-success' : 'text-danger'}`}>
                      ৳{(report.daily?.surplus || 0).toLocaleString('en-IN')}
                    </strong>
                  </div>
                </div>

                {/* Monthly */}
                <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px', color: '#166534' }}>
                    🗓️ {formattedMonthName}
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-success flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingUp size={14}/> আয়:</span>
                    <strong className="font-mono">৳{(report.monthly?.income || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-danger flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingDown size={14}/> ব্যয়:</span>
                    <strong className="font-mono">৳{(report.monthly?.expense || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between border-top pt-8 mt-8">
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>উদ্বৃত্ত:</span>
                    <strong className={`font-mono ${(report.monthly?.surplus || 0) >= 0 ? 'text-success' : 'text-danger'}`}>
                      ৳{(report.monthly?.surplus || 0).toLocaleString('en-IN')}
                    </strong>
                  </div>
                </div>

                {/* Yearly */}
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px', color: '#334155' }}>
                    📆 চলতি বছর ({selectedMonth.split('-')[0]})
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-success flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingUp size={14}/> আয়:</span>
                    <strong className="font-mono">৳{(report.yearly?.income || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between mb-6">
                    <span className="text-danger flex-center gap-4" style={{ fontSize: '0.88rem' }}><TrendingDown size={14}/> ব্যয়:</span>
                    <strong className="font-mono">৳{(report.yearly?.expense || 0).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex-between border-top pt-8 mt-8">
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>উদ্বৃত্ত:</span>
                    <strong className={`font-mono ${(report.yearly?.surplus || 0) >= 0 ? 'text-success' : 'text-danger'}`}>
                      ৳{(report.yearly?.surplus || 0).toLocaleString('en-IN')}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Category-wise Expense & Top Students */}
            <div className="grid grid-2 mb-24" style={{ gap: '20px' }}>
              {/* Category-wise Expense Breakdown */}
              <div className="card">
                <div className="flex-between border-bottom pb-10 mb-16">
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }} className="flex-center gap-8">
                    <DollarSign size={18} className="text-primary"/> 
                    খাতভিত্তিক ব্যয়ের বিবরণী (Category-wise Expense)
                  </h3>
                  <span className="badge badge-primary font-mono">
                    মোট: ৳{totalCategoryExpense.toLocaleString('en-IN')}
                  </span>
                </div>

                {report.categoryExpense?.length === 0 ? (
                  <div className="text-center text-muted" style={{ padding: '30px' }}>
                    কোনো ব্যয়ের রেকর্ড পাওয়া যায়নি
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {report.categoryExpense?.map((item, idx) => {
                      const percentage = totalCategoryExpense > 0
                        ? Math.round((Number(item.amount) / totalCategoryExpense) * 100)
                        : 0;

                      return (
                        <div key={idx}>
                          <div className="flex-between mb-4" style={{ fontSize: '0.9rem' }}>
                            <span style={{ fontWeight: 600, color: '#1e293b' }}>{item.category}</span>
                            <span className="font-mono" style={{ fontWeight: 700, color: '#0f172a' }}>
                              ৳{Number(item.amount).toLocaleString('en-IN')}
                              <span style={{ fontSize: '0.78rem', color: '#64748b', marginLeft: '6px' }}>
                                ({percentage}%)
                              </span>
                            </span>
                          </div>
                          <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{
                              width: `${Math.min(percentage, 100)}%`,
                              height: '100%',
                              background: idx % 3 === 0 ? '#0f766e' : (idx % 3 === 1 ? '#0284c7' : '#8b5cf6'),
                              borderRadius: '4px',
                              transition: 'width 0.4s ease'
                            }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Top Paying Students */}
              <div className="card">
                <div className="flex-between border-bottom pb-10 mb-16">
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }} className="flex-center gap-8">
                    <CreditCard size={18} className="text-primary"/> 
                    শীর্ষ শিক্ষার্থী ফী প্রদানকারী (Top Student Payments)
                  </h3>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}>#</th>
                        <th>শিক্ষার্থীর নাম</th>
                        <th style={{ textAlign: 'right' }}>জমা পরিমাণ (৳)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.studentWise?.map((item, idx) => (
                        <tr key={idx}>
                          <td className="text-muted" style={{ fontWeight: 600 }}>{idx + 1}</td>
                          <td style={{ fontWeight: 600, color: '#1e293b' }}>{item.student}</td>
                          <td style={{ textAlign: 'right' }} className="font-mono text-success font-bold">
                            ৳{item.totalPaid.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                      {(!report.studentWise || report.studentWise.length === 0) && (
                        <tr>
                          <td colSpan="3" className="text-center text-muted" style={{ padding: '24px' }}>
                            কোনো ডেটা নেই
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Teacher Salary Summary Section on Overview */}
            <div className="card">
              <div className="flex-between border-bottom pb-10 mb-16">
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }} className="flex-center gap-8">
                  <Users size={18} className="text-primary" />
                  শিক্ষক ও কর্মচারীদের বেতন সারসংক্ষেপ (Teacher Salary Overview)
                </h3>
                <button
                  onClick={() => setActiveTab('salary_sheet')}
                  className="btn btn-sm btn-outline flex-center gap-4"
                  style={{ fontSize: '0.82rem' }}
                >
                  পূর্ণাঙ্গ বেতন শিট দেখুন <ChevronRight size={14} />
                </button>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>শিক্ষক / কর্মচারী</th>
                      <th style={{ textAlign: 'center' }}>ভাউচার সংখ্যা</th>
                      <th style={{ textAlign: 'right' }}>এই মাসে প্রাপ্ত বেতন</th>
                      <th style={{ textAlign: 'right' }}>সর্বমোট প্রদানকৃত</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.teacherSalary?.map((item, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{item.teacher}</td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="badge badge-secondary">{item.voucherCount || 1} টি</span>
                        </td>
                        <td style={{ textAlign: 'right' }} className="font-mono font-bold text-primary">
                          ৳{(item.monthPaid || 0).toLocaleString('en-IN')}
                        </td>
                        <td style={{ textAlign: 'right' }} className="font-mono font-bold text-danger">
                          ৳{(item.totalPaid || 0).toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                    {(!report.teacherSalary || report.teacherSalary.length === 0) && (
                      <tr>
                        <td colSpan="4" className="text-center text-muted" style={{ padding: '24px' }}>
                          কোনো বেতন প্রদানের রেকর্ড পাওয়া যায়নি
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 (Screen View): Salary Sheet */}
        {activeTab === 'salary_sheet' && (
          <div className="animate-fade-in">
            {/* Direct Link to Dedicated Payroll Page */}
            <div className="card mb-16" style={{ padding: '12px 18px', background: 'linear-gradient(to right, #f0fdfa, #e6fffa)', border: '1px solid #99f6e4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#0d9488', color: '#fff', padding: '6px', borderRadius: '8px' }}>
                  <CreditCard size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#134e4a' }}>উন্নত বেতন ব্যবস্থাপনা ও পে-রোল (Payroll)</div>
                  <div style={{ fontSize: '0.78rem', color: '#0f766e' }}>ভাতা, অনুপস্থিতি ও অগ্রিম সমন্বয়, বাল্ক পেমেন্ট এবং অফিশিয়াল পে-স্লিপ প্রিন্ট করার জন্য মূল পেজে যান</div>
                </div>
              </div>
              <button
                onClick={() => navigate('/salary-management')}
                className="btn btn-sm"
                style={{ background: '#0d9488', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                <span>পে-রোল সিস্টেমে যান</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Salary Sheet Header Stats */}
            <div className="grid grid-4 mb-20" style={{ gap: '14px' }}>
              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #3b82f6' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>মোট শিক্ষক ও স্টাফ</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b', marginTop: '4px' }}>
                  {salarySheetData?.stats?.totalStaff || 0} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>জন</span>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #16a34a' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#15803d' }}>বেতন পরিশোধিত</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#14532d', marginTop: '4px' }}>
                  {salarySheetData?.stats?.paidCount || 0} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>জন</span>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #dc2626' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#b91c1c' }}>বেতন বকেয়া রয়েছে</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7f1d1d', marginTop: '4px' }}>
                  {salarySheetData?.stats?.unpaidCount || 0} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>জন</span>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #0f766e' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f766e' }}>এই মাসে মোট পরিশোধিত</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#115e59', marginTop: '4px', fontFamily: 'monospace' }}>
                  ৳{(salarySheetData?.stats?.totalSalaryPaid || 0).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="card mb-16" style={{ padding: '14px 18px' }}>
              <div className="flex-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <div className="flex-center gap-10" style={{ flex: 1, minWidth: '240px' }}>
                  <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input
                      type="text"
                      placeholder="শিক্ষকের নাম বা পদবি দিয়ে খুঁজুন..."
                      value={salarySearch}
                      onChange={(e) => setSalarySearch(e.target.value)}
                      className="form-control"
                      style={{ paddingLeft: '36px', height: '38px', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>

                {/* Status Filter Buttons */}
                <div className="flex-center gap-6">
                  <button
                    onClick={() => setSalaryFilter('all')}
                    className={`btn btn-sm ${salaryFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ fontSize: '0.82rem' }}
                  >
                    সবাই ({salarySheetData?.salarySheet?.length || 0})
                  </button>
                  <button
                    onClick={() => setSalaryFilter('paid')}
                    className={`btn btn-sm ${salaryFilter === 'paid' ? 'btn-success' : 'btn-outline'}`}
                    style={{ fontSize: '0.82rem', color: salaryFilter === 'paid' ? '#fff' : '#15803d', borderColor: '#86efac' }}
                  >
                    ✓ পরিশোধিত ({salarySheetData?.stats?.paidCount || 0})
                  </button>
                  <button
                    onClick={() => setSalaryFilter('unpaid')}
                    className={`btn btn-sm ${salaryFilter === 'unpaid' ? 'btn-danger' : 'btn-outline'}`}
                    style={{ fontSize: '0.82rem', color: salaryFilter === 'unpaid' ? '#fff' : '#b91c1c', borderColor: '#fca5a5' }}
                  >
                    ✗ বকেয়া ({salarySheetData?.stats?.unpaidCount || 0})
                  </button>
                </div>
              </div>
            </div>

            {/* Salary Sheet Table (Interactive on Screen) */}
            <div className="card" style={{ padding: '0px', overflow: 'hidden' }}>
              <div className="table-responsive">
                <table className="table" style={{ margin: 0 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ width: '45px', textAlign: 'center' }}>#</th>
                      <th>শিক্ষক / কর্মচারীর নাম</th>
                      <th>পদবি</th>
                      <th>মোবাইল নম্বর</th>
                      <th style={{ textAlign: 'right' }}>মূল বেতন (৳)</th>
                      <th style={{ textAlign: 'right' }}>পরিশোধিত বেতন (৳)</th>
                      <th style={{ textAlign: 'center' }}>স্ট্যাটাস</th>
                      <th style={{ textAlign: 'center' }}>ভাউচার ও তারিখ</th>
                      <th style={{ textAlign: 'center', width: '130px' }}>অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSalarySheet.map((staff, idx) => (
                      <tr key={staff._id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                          {idx + 1}
                        </td>
                        <td>
                          <div style={{ fontWeight: 700, color: '#0f172a' }}>{staff.name}</div>
                          {staff.userType && (
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                              {staff.userType}
                            </div>
                          )}
                        </td>
                        <td style={{ color: '#334155', fontWeight: 500 }}>
                          {staff.designation || '—'}
                        </td>
                        <td className="font-mono" style={{ fontSize: '0.85rem', color: '#475569' }}>
                          {staff.phone || '—'}
                        </td>
                        <td style={{ textAlign: 'right' }} className="font-mono">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}>
                            {staff.baseSalary > 0 ? (
                              <span style={{ fontWeight: 700, color: '#0f172a' }}>৳{staff.baseSalary.toLocaleString('en-IN')}</span>
                            ) : (
                              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>নির্ধারণ নেই</span>
                            )}
                            <button
                              onClick={() => handleOpenSalaryModal(staff)}
                              title="বেতন পরিবর্তন বা নির্ধারণ করুন"
                              style={{
                                border: '1px solid #cbd5e1', background: '#f8fafc', borderRadius: '4px',
                                cursor: 'pointer', color: '#0f766e', padding: '3px 6px', display: 'inline-flex', alignItems: 'center'
                              }}
                            >
                              <Edit2 size={12} />
                            </button>
                          </div>
                        </td>
                        <td style={{ textAlign: 'right' }} className="font-mono font-bold">
                          {staff.paidAmount > 0 ? (
                            <span style={{ color: '#16a34a' }}>৳{staff.paidAmount.toLocaleString('en-IN')}</span>
                          ) : (
                            <span style={{ color: '#94a3b8' }}>৳০</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {staff.status === 'paid' ? (
                            <span style={{
                              background: '#dcfce7', color: '#15803d', border: '1px solid #86efac',
                              padding: '3px 10px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 700,
                              display: 'inline-flex', alignItems: 'center', gap: '4px'
                            }}>
                              <Check size={12} /> পেইড
                            </span>
                          ) : (
                            <span style={{
                              background: '#fee2e2', color: '#b91c1c', border: '1px solid #fca5a5',
                              padding: '3px 10px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 700,
                              display: 'inline-flex', alignItems: 'center', gap: '4px'
                            }}>
                              <XCircle size={12} /> বকেয়া
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: 'center', fontSize: '0.82rem' }}>
                          {staff.voucherNumber ? (
                            <div>
                              <span className="font-mono font-bold" style={{ color: '#0f766e' }}>
                                #{staff.voucherNumber}
                              </span>
                              {staff.paymentDate && (
                                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>
                                  {formatDateDDMMYYYY(staff.paymentDate)}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span style={{ color: '#cbd5e1' }}>—</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {staff.status === 'unpaid' ? (
                            <button
                              onClick={() => handlePaySalary(staff)}
                              className="btn btn-sm btn-primary flex-center gap-4"
                              style={{
                                fontSize: '0.78rem', padding: '4px 10px', margin: '0 auto',
                                background: '#0f766e', borderColor: '#0f766e'
                              }}
                              title="বেতন ভাউচার তৈরি করুন"
                            >
                              <DollarSign size={13} /> বেতন দিন
                            </button>
                          ) : (
                            <button
                              onClick={() => navigate('/expense-vouchers')}
                              className="btn btn-sm btn-outline flex-center gap-4"
                              style={{ fontSize: '0.78rem', padding: '4px 10px', margin: '0 auto' }}
                            >
                              <ShieldCheck size={13} className="text-success" /> ভাউচার
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}

                    {filteredSalarySheet.length === 0 && (
                      <tr>
                        <td colSpan="9" className="text-center text-muted" style={{ padding: '36px' }}>
                          কোনো শিক্ষক বা কর্মচারীর তথ্য পাওয়া যায়নি
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredSalarySheet.length > 0 && (
                <div style={{
                  background: '#f8fafc', padding: '14px 20px', borderTop: '2px solid #e2e8f0',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <span style={{ fontWeight: 700, color: '#334155' }}>
                    মোট শিক্ষক/স্টাফ: {filteredSalarySheet.length} জন
                  </span>
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f766e' }}>
                    এই মাসে মোট পরিশোধিত বেতন: ৳{(salarySheetData?.stats?.totalSalaryPaid || 0).toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PRINT-ONLY DOCUMENT VIEW (Rendered strictly during window.print)
         ══════════════════════════════════════════════════════════════ */}
      <div className="print-only" style={{ position: 'relative' }}>
        <img src="/images/madrasah_logo.png" alt="Watermark" className="print-watermark" />
        <MadrasahLetterhead
          documentTitle={
            activeTab === 'salary_sheet'
              ? `মাসিক শিক্ষক ও কর্মচারী বেতন বিবরণী ও মাস্টাররোল (${formattedMonthName})`
              : `সার্বিক আর্থিক সমন্বিত বিবরণী ও অডিট রিপোর্ট (${formattedMonthName})`
          }
          metaLeft={<>মাস/সময়কাল: <strong>{formattedMonthName}</strong> | শাখা: <strong>{branchName}</strong></>}
          metaRight={<>মুদ্রণের তারিখ: <strong>{new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></>}
        />

        {/* PRINT VERSION 1: MONTHLY SALARY SHEET */}
        {activeTab === 'salary_sheet' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
              <span>মোট শিক্ষক ও কর্মচারী: {filteredSalarySheet.length} জন</span>
              <span>পরিশোধিত: {salarySheetData?.stats?.paidCount || 0} জন | বকেয়া: {salarySheetData?.stats?.unpaidCount || 0} জন</span>
              <span>মোট পরিশোধিত বেতন: ৳{(salarySheetData?.stats?.totalSalaryPaid || 0).toLocaleString('en-IN')}</span>
            </div>

            <table className="print-table">
              <thead>
                <tr>
                  <th style={{ width: '32px' }}>ক্র.</th>
                  <th>শিক্ষক/কর্মচারীর নাম</th>
                  <th>পদবি</th>
                  <th>মোবাইল</th>
                  <th style={{ textAlign: 'right' }}>মূল বেতন (৳)</th>
                  <th style={{ textAlign: 'right' }}>পরিশোধিত (৳)</th>
                  <th style={{ textAlign: 'center' }}>স্ট্যাটাস</th>
                  <th style={{ textAlign: 'center' }}>ভাউচার ও তারিখ</th>
                  <th style={{ textAlign: 'center', width: '95px' }}>স্বাক্ষর / টিপসই</th>
                </tr>
              </thead>
              <tbody>
                {filteredSalarySheet.map((staff, idx) => (
                  <tr key={staff._id || idx}>
                    <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                    <td style={{ fontWeight: 700 }}>{staff.name}</td>
                    <td>{staff.designation || '—'}</td>
                    <td style={{ fontFamily: 'monospace' }}>{staff.phone || '—'}</td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>
                      {staff.baseSalary > 0 ? `৳${staff.baseSalary.toLocaleString('en-IN')}` : '—'}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 700 }}>
                      ৳{(staff.paidAmount || 0).toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 700, fontSize: '9pt' }}>
                      {staff.status === 'paid' ? 'পরিশোধিত' : 'বকেয়া'}
                    </td>
                    <td style={{ textAlign: 'center', fontSize: '8.5pt' }}>
                      {staff.voucherNumber ? `#${staff.voucherNumber} (${formatDateDDMMYYYY(staff.paymentDate)})` : '—'}
                    </td>
                    <td style={{ height: '32px', textAlign: 'center' }}></td>
                  </tr>
                ))}
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td colSpan="5" style={{ textAlign: 'right' }}>সর্বমোট পরিশোধিত বেতন:</td>
                  <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>
                    ৳{(salarySheetData?.stats?.totalSalaryPaid || 0).toLocaleString('en-IN')}
                  </td>
                  <td colSpan="3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* PRINT VERSION 2: FINANCIAL OVERVIEW REPORT */}
        {activeTab === 'overview' && report && (
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '14px 0 6px 0', borderBottom: '1px solid #334155', paddingBottom: '3px' }}>
              ১. আয় ও ব্যয়ের সারসংক্ষেপ ({formattedMonthName})
            </h3>
            <table className="print-table">
              <thead>
                <tr>
                  <th>বিবরণ</th>
                  <th style={{ textAlign: 'right' }}>দৈনিক (আজ)</th>
                  <th style={{ textAlign: 'right' }}>মাসিক ({formattedMonthName})</th>
                  <th style={{ textAlign: 'right' }}>বার্ষিক (চলতি বছর)</th>
                  <th style={{ textAlign: 'right' }}>আজীবন (Lifetime)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 700 }}>মোট আয় (Total Income)</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.daily?.income || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>৳{(report.monthly?.income || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.yearly?.income || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.lifetime?.income || 0).toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>মোট ব্যয় (Total Expense)</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.daily?.expense || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right', fontWeight: 700 }}>৳{(report.monthly?.expense || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.yearly?.expense || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.lifetime?.expense || 0).toLocaleString('en-IN')}</td>
                </tr>
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td>নিট উদ্বৃত্ত / ঘাটতি (Surplus)</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.daily?.surplus || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.monthly?.surplus || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.yearly?.surplus || 0).toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'right' }}>৳{(report.lifetime?.surplus || 0).toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ fontWeight: 700 }}>শিক্ষার্থীদের মোট বকেয়া (Student Dues): ৳{(report.totalDues || 0).toLocaleString('en-IN')}</td>
                  <td colSpan="3" style={{ fontWeight: 700 }}>মোট দান ও অনুদান (Donations): ৳{(report.totalDonation || 0).toLocaleString('en-IN')}</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '18px 0 6px 0', borderBottom: '1px solid #334155', paddingBottom: '3px' }}>
              ২. খাতভিত্তিক ব্যয়ের বিবরণী (Category-wise Expenses)
            </h3>
            <table className="print-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>ক্র.</th>
                  <th>ব্যয়ের খাত (Expense Account)</th>
                  <th style={{ textAlign: 'right', width: '150px' }}>পরিমাণ (৳)</th>
                  <th style={{ textAlign: 'center', width: '90px' }}>শতকরা হার (%)</th>
                </tr>
              </thead>
              <tbody>
                {report.categoryExpense?.map((item, idx) => {
                  const pct = totalCategoryExpense > 0
                    ? Math.round((Number(item.amount) / totalCategoryExpense) * 100)
                    : 0;
                  return (
                    <tr key={idx}>
                      <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                      <td>{item.category}</td>
                      <td style={{ textAlign: 'right', fontWeight: 700 }}>৳{Number(item.amount).toLocaleString('en-IN')}</td>
                      <td style={{ textAlign: 'center' }}>{pct}%</td>
                    </tr>
                  );
                })}
                {(!report.categoryExpense || report.categoryExpense.length === 0) && (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '12px' }}>কোনো ব্যয় রেকর্ড পাওয়া যায়নি</td>
                  </tr>
                )}
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td colSpan="2" style={{ textAlign: 'right' }}>মোট ব্যয়:</td>
                  <td style={{ textAlign: 'right' }}>৳{totalCategoryExpense.toLocaleString('en-IN')}</td>
                  <td style={{ textAlign: 'center' }}>100%</td>
                </tr>
              </tbody>
            </table>

            {/* Teacher Salary Summary on Print */}
            {report.teacherSalary && report.teacherSalary.length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '14px 0 6px 0', borderBottom: '1px solid #334155', paddingBottom: '3px' }}>
                  ৩. শিক্ষক ও স্টাফ বেতন সংক্ষিপ্ত হিসাব
                </h3>
                <table className="print-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>ক্র.</th>
                      <th>শিক্ষক/কর্মচারী</th>
                      <th style={{ textAlign: 'center', width: '90px' }}>ভাউচার সংখ্যা</th>
                      <th style={{ textAlign: 'right', width: '140px' }}>এই মাসে প্রাপ্ত বেতন (৳)</th>
                      <th style={{ textAlign: 'right', width: '140px' }}>সর্বমোট প্রদানকৃত (৳)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.teacherSalary.slice(0, 15).map((item, idx) => (
                      <tr key={idx}>
                        <td style={{ textAlign: 'center' }}>{idx + 1}</td>
                        <td style={{ fontWeight: 600 }}>{item.teacher}</td>
                        <td style={{ textAlign: 'center' }}>{item.voucherCount || 1} টি</td>
                        <td style={{ textAlign: 'right', fontWeight: 700 }}>৳{(item.monthPaid || 0).toLocaleString('en-IN')}</td>
                        <td style={{ textAlign: 'right', fontWeight: 700 }}>৳{(item.totalPaid || 0).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Formal Institutional 3-Tier Signature Section */}
        <div className="print-sign-row">
          <div className="print-sign-box">
            প্রস্তুতকারক
            <div style={{ fontSize: '9.5pt', fontWeight: 500, color: '#64748b', marginTop: '2px' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
          <div className="print-sign-box">
            প্রতিষ্ঠান প্রধান
            <div style={{ fontSize: '9.5pt', fontWeight: 500, color: '#64748b', marginTop: '2px' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
          <div className="print-sign-box">
            পরিচালক
            <div style={{ fontSize: '9.5pt', fontWeight: 500, color: '#64748b', marginTop: '2px' }}>আন্-নূর ইসলামিক একাডেমি</div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          TOAST NOTIFICATION (Screen Only)
         ────────────────────────────────────────────────────────────── */}
      {salaryToast && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 10000,
          background: '#0f766e', color: '#ffffff', padding: '12px 20px',
          borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '0.9rem'
        }}>
          <CheckCircle2 size={18} />
          {salaryToast.message}
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────────
          MODAL: শিক্ষক/স্টাফের বেতন নির্ধারণ (Set/Edit Base Salary)
         ────────────────────────────────────────────────────────────── */}
      {isSalaryModalOpen && editingStaff && (
        <div className="screen-only" style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
          <div className="card animate-scale-up" style={{
            width: '100%', maxWidth: '440px', padding: '24px', borderRadius: '14px',
            boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.25)', background: '#ffffff'
          }}>
            <div className="flex-between mb-16 border-bottom pb-10">
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }} className="flex-center gap-8">
                <DollarSign size={20} className="text-primary" />
                মাসিক মূল বেতন নির্ধারণ
              </h3>
              <button
                type="button"
                onClick={() => setIsSalaryModalOpen(false)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>{editingStaff.name}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>পদবি: {editingStaff.designation || 'শিক্ষক/স্টাফ'} • মোবাইল: {editingStaff.phone || '—'}</div>
            </div>

            <form onSubmit={handleSaveSalary}>
              <div className="form-group mb-16">
                <label className="form-label" style={{ fontWeight: 700, color: '#0f766e', fontSize: '0.9rem' }}>
                  নির্ধারিত মাসিক মূল বেতন (৳) *
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: '#64748b' }}>৳</span>
                  <input
                    type="number"
                    required
                    min="0"
                    step="100"
                    placeholder="যেমন: ১৫০০০"
                    value={salaryInput}
                    onChange={(e) => setSalaryInput(e.target.value)}
                    className="form-control font-mono"
                    style={{ paddingLeft: '32px', fontSize: '1.1rem', fontWeight: 700 }}
                    autoFocus
                  />
                </div>
              </div>

              {/* Quick Amount Presets */}
              <div className="mb-20">
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '6px' }}>কুইক প্রিসেট:</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {[5000, 8000, 10000, 12000, 15000, 20000, 25000].map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSalaryInput(String(amt))}
                      className="btn btn-sm btn-outline font-mono"
                      style={{ padding: '3px 8px', fontSize: '0.78rem' }}
                    >
                      ৳{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-between gap-10">
                <button
                  type="button"
                  onClick={() => setIsSalaryModalOpen(false)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                  disabled={savingSalary}
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-center gap-6"
                  style={{ flex: 1, background: '#0f766e', borderColor: '#0f766e' }}
                  disabled={savingSalary}
                >
                  {savingSalary ? <Loader size={16} className="spin" /> : <Save size={16} />}
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* ──────────────────────────────────────────────────────────────
          PRINT SIGNATURE FOOTER (Visible ONLY on print)
         ────────────────────────────────────────────────────────────── */}
      <div className="print-only">
        <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '55px' }} />
      </div>

    </div>
  );
}
