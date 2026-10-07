import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Plus, CheckCircle, XCircle, Loader, FileText, Check, X, Calendar,
  DollarSign, Search, Filter, Trash2, Printer, Paperclip, AlertCircle,
  Building2, ArrowDownRight, Sparkles, CheckCheck, RefreshCw, Eye
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function ExpenseVouchersPage() {
  const { user } = useAuthStore();
  const location = useLocation();
  const { madrasahName, branchName, address, phone } = getMadrasahInfo(user);

  const [vouchers, setVouchers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Filters & State
  const [activeTab, setActiveTab] = useState('all'); // all, pending, level_1_approved, approved, rejected
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMethod, setFilterMethod] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__expense_vouchers');
      return saved ? JSON.parse(saved) : ['প্রস্তুতকারী', 'যাচাইকারী', 'অনুমোদনকারী', 'পরিচালক'];
    } catch {
      return ['প্রস্তুতকারী', 'যাচাইকারী', 'অনুমোদনকারী', 'পরিচালক'];
    }
  });

  // Quick Account Creation & Seeding
  const [seeding, setSeeding] = useState(false);
  const [isQuickAccountModalOpen, setIsQuickAccountModalOpen] = useState(false);
  const [quickAccountData, setQuickAccountData] = useState({ name: '', code: '' });
  const [creatingAccount, setCreatingAccount] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    payeeName: '',
    expenseAccount: '',
    fundAccount: '',
    amount: '',
    paymentMethod: 'cash',
    description: '',
    attachment: null,
    autoApprove: true,
  });

  const canManage = [
    'super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'
  ].includes(user?.userType) || [
    'super_admin', 'co_super_admin', 'admin'
  ].includes(user?.adminRole);

  const canVerify = ['super_admin', 'co_super_admin', 'admin', 'principal'].includes(user?.userType) ||
    ['super_admin', 'co_super_admin', 'admin'].includes(user?.adminRole);

  const canApprove = ['super_admin', 'co_super_admin', 'admin', 'principal'].includes(user?.userType) ||
    ['super_admin', 'co_super_admin', 'admin'].includes(user?.adminRole);

  const methodMap = {
    cash: 'নগদ (Cash)',
    bank: 'ব্যাংক (Bank)',
    bkash: 'বিকাশ (bKash)',
    nagad: 'নগদ (Nagad)',
    rocket: 'রকেট (Rocket)',
    cheque: 'চেক (Cheque)',
    online: 'অনলাইন (Online)',
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const params = {};
      if (activeTab !== 'all') params.status = activeTab;

      const [vouchersRes, accountsRes] = await Promise.all([
        api.get('/vouchers', { params }),
        api.get('/accounting/accounts').catch(() => ({ data: { success: false, data: { accounts: [] } } })),
      ]);

      if (vouchersRes.data.success) {
        setVouchers(vouchersRes.data.data.vouchers || []);
      }
      if (accountsRes.data.success) {
        setAccounts(accountsRes.data.data.accounts || []);
      }

      // Fetch Teachers with Fallback
      let teacherList = [];
      try {
        const teachersRes = await api.get('/teachers', { params: { limit: 1000 } });
        const raw = teachersRes.data?.data?.teachers || teachersRes.data?.data || [];
        if (Array.isArray(raw) && raw.length > 0) {
          teacherList = raw;
        }
      } catch (e) {
        console.warn('Teacher fetch failed, trying fallback:', e);
      }

      if (teacherList.length === 0) {
        try {
          const usersRes = await api.get('/users', { params: { userType: 'staff', limit: 1000 } });
          const rawUsers = usersRes.data?.data?.users || usersRes.data?.data || [];
          if (Array.isArray(rawUsers) && rawUsers.length > 0) {
            teacherList = rawUsers.map(u => ({
              _id: u._id,
              user: u,
              designation: u.userType === 'principal' ? 'প্রিন্সিপাল' : (u.userType === 'teacher' ? 'শিক্ষক' : (u.adminRole || 'স্টাফ'))
            }));
          }
        } catch (e) {}
      }

      const parsedTeachers = teacherList.map(t => {
        const u = t.user || (typeof t === 'object' ? t : {});
        const fullName = `${u.firstName || ''} ${u.lastName || ''}`.trim();
        const name = fullName || u.name || u.username || t.name || t.fullName || '';
        const designation = t.designation || u.designation || (u.userType === 'principal' ? 'প্রিন্সিপাল' : 'শিক্ষক');
        return {
          _id: t._id || u._id || Math.random().toString(),
          name,
          designation,
        };
      }).filter(t => t.name && t.name.length > 0);

      setTeachers(parsedTeachers);
    } catch (error) {
      setToast({ type: 'error', message: 'ভাউচার ডাটা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  useEffect(() => {
    if (location.state?.openModal && accounts.length > 0) {
      const salaryAcc = accounts.find(a => a.type === 'Expense' && (a.code === '5001' || a.name.includes('বেতন') || a.name.toLowerCase().includes('salary'))) || accounts.find(a => a.type === 'Expense');
      const defaultFund = accounts.find(a => a.type === 'Asset' && a.code === '1001') || accounts.find(a => a.type === 'Asset');

      setFormData(prev => ({
        ...prev,
        date: location.state.date || new Date().toISOString().split('T')[0],
        payeeName: location.state.payeeName || '',
        expenseAccount: salaryAcc ? salaryAcc._id : '',
        fundAccount: defaultFund ? defaultFund._id : '',
        amount: location.state.amount ? String(location.state.amount) : '',
        paymentMethod: 'cash',
        description: location.state.description || `${location.state.payeeName || ''} - বেতন বাবদ`,
        autoApprove: canApprove,
      }));
      setIsModalOpen(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, accounts, canApprove]);


  const expenseAccounts = useMemo(() => {
    return accounts.filter(a => a.type === 'Expense');
  }, [accounts]);

  const fundAccounts = useMemo(() => {
    return accounts.filter(a => a.type === 'Asset');
  }, [accounts]);

  // Set default accounts when modal opens
  const handleOpenAddModal = () => {
    const defaultFund = fundAccounts.find(a => a.code === '1001') || fundAccounts[0];
    const defaultExp = expenseAccounts[0];

    setFormData({
      date: new Date().toISOString().split('T')[0],
      payeeName: '',
      expenseAccount: defaultExp ? defaultExp._id : '',
      fundAccount: defaultFund ? defaultFund._id : '',
      amount: '',
      paymentMethod: 'cash',
      description: '',
      attachment: null,
      autoApprove: canApprove,
    });
    setIsModalOpen(true);
  };

  // Quick preset autofill
  const handlePresetSelect = (preset) => {
    let expAccId = preset.accId;
    if (preset.code) {
      const match = expenseAccounts.find(a => a.code === preset.code);
      if (match) expAccId = match._id;
    }
    if (!expAccId && preset.keywords && preset.keywords.length > 0) {
      const match = expenseAccounts.find(a => preset.keywords.some(k => a.name.toLowerCase().includes(k.toLowerCase())));
      if (match) expAccId = match._id;
    }
    if (!expAccId && preset.isSalary) {
      const salaryAcc = expenseAccounts.find(a => a.code === '5001' || a.name.includes('বেতন') || a.name.toLowerCase().includes('salary'));
      if (salaryAcc) expAccId = salaryAcc._id;
    }
    setFormData(prev => ({
      ...prev,
      payeeName: preset.payee,
      description: preset.description,
      expenseAccount: expAccId || prev.expenseAccount || (expenseAccounts[0]?._id || ''),
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setToast({ type: 'error', message: 'ফাইলের আকার ২MB এর বেশি হতে পারবে না' });
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, attachment: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.payeeName.trim()) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে প্রাপকের নাম প্রদান করুন' });
      return;
    }
    if (!formData.expenseAccount) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে ব্যয়ের খাত নির্বাচন করুন' });
      return;
    }
    if (!formData.fundAccount) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে তহবিল খাত নির্বাচন করুন' });
      return;
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      setToast({ type: 'error', message: 'সঠিক টাকার পরিমাণ প্রদান করুন' });
      return;
    }

    try {
      setSubmitting(true);
      const res = await api.post('/vouchers', {
        ...formData,
        amount: Number(formData.amount)
      });
      if (res.data.success) {
        setToast({
          type: 'success',
          message: res.data.message || 'ভাউচার সফলভাবে তৈরি করা হয়েছে'
        });
        setIsModalOpen(false);
        fetchData();

        // If newly created and approved, offer quick print
        if (res.data.data?.voucher) {
          const createdV = res.data.data.voucher;
          const expDetails = expenseAccounts.find(a => a._id === createdV.expenseAccount);
          const fundDetails = fundAccounts.find(a => a._id === createdV.fundAccount);
          setSelectedVoucher({
            ...createdV,
            expenseAccountDetails: expDetails || { name: 'ব্যয়ের খাত' },
            fundAccountDetails: fundDetails || { name: 'তহবিল খাত' },
            preparedByName: user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'বর্তমান ইউজার',
            approvedByName: createdV.status === 'approved' ? (user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'অ্যাডমিন') : null,
          });
          setIsPrintModalOpen(true);
        }
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'ভাউচার তৈরি করতে সমস্যা হয়েছে' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSeedDefaults = async () => {
    try {
      setSeeding(true);
      const res = await api.post('/accounting/accounts/seed-defaults');
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'ডিফল্ট ব্যয়ের খাতসমূহ সফলভাবে লোড হয়েছে' });
        await fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: 'ডিফল্ট ব্যয়ের খাত লোড করতে সমস্যা হয়েছে' });
    } finally {
      setSeeding(false);
    }
  };

  const handleQuickCreateAccount = async (e) => {
    e.preventDefault();
    if (!quickAccountData.name.trim()) return;
    try {
      setCreatingAccount(true);
      let code = quickAccountData.code.trim();
      if (!code) {
        const nextCode = 5000 + (expenseAccounts.length + 1);
        code = String(nextCode);
      }
      const res = await api.post('/accounting/accounts', {
        name: quickAccountData.name.trim(),
        code,
        type: 'Expense',
        balance: 0,
        isActive: true,
      });
      if (res.data.success) {
        setToast({ type: 'success', message: 'নতুন ব্যয়ের খাত সফলভাবে তৈরি হয়েছে' });
        setIsQuickAccountModalOpen(false);
        setQuickAccountData({ name: '', code: '' });
        await fetchData();
        const createdId = res.data.data?.account?._id;
        if (createdId) {
          setFormData(prev => ({ ...prev, expenseAccount: createdId }));
        }
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'ব্যয়ের খাত তৈরি করতে সমস্যা হয়েছে' });
    } finally {
      setCreatingAccount(false);
    }
  };

  const handleVerify = async (id) => {
    if (!window.confirm('আপনি কি এই ভাউচারটি যাচাই (Verify / Level-1) করতে চান?')) return;
    try {
      const res = await api.post(`/vouchers/${id}/verify`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'ভাউচার সফলভাবে যাচাই করা হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'যাচাই করতে সমস্যা হয়েছে' });
    }
  };

  const handleApprove = async (id) => {
    if (!window.confirm('আপনি কি এই ভাউচারটি চূড়ান্ত অনুমোদন (Approve) করতে চান? এটি লেজারে ডেবিট-ক্রেডিট যুক্ত করবে।')) return;
    try {
      const res = await api.post(`/vouchers/${id}/approve`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'ভাউচার চূড়ান্ত অনুমোদিত হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'অনুমোদন করতে সমস্যা হয়েছে' });
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm('আপনি কি এই ভাউচারটি বাতিল (Reject) করতে চান?')) return;
    try {
      const res = await api.post(`/vouchers/${id}/reject`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'ভাউচার বাতিল করা হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'বাতিল করতে সমস্যা হয়েছে' });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই ভাউচারটি মুছে ফেলতে চান?')) return;
    try {
      const res = await api.delete(`/vouchers/${id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'ভাউচার সফলভাবে মুছে ফেলা হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'মুছে ফেলতে সমস্যা হয়েছে' });
    }
  };

  const openPrintModal = (voucher) => {
    setSelectedVoucher(voucher);
    setIsPrintModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  // Client-side filtering & search
  const filteredVouchers = useMemo(() => {
    return vouchers.filter(v => {
      // Payment method filter
      if (filterMethod !== 'all' && v.paymentMethod !== filterMethod) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const vNum = (v.voucherNumber || '').toLowerCase();
        const payee = (v.payeeName || '').toLowerCase();
        const desc = (v.description || '').toLowerCase();
        const expName = (v.expenseAccountDetails?.name || '').toLowerCase();
        if (!vNum.includes(q) && !payee.includes(q) && !desc.includes(q) && !expName.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [vouchers, searchQuery, filterMethod]);

  // Dynamic Statistics
  const stats = useMemo(() => {
    let total = 0;
    let approved = 0;
    let pending = 0;
    let count = vouchers.length;

    vouchers.forEach(v => {
      const amt = Number(v.amount) || 0;
      total += amt;
      if (v.status === 'approved') approved += amt;
      if (v.status === 'pending' || v.status === 'level_1_approved') pending += amt;
    });

    return { total, approved, pending, count };
  }, [vouchers]);

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header" style={{ marginBottom: '22px' }}>
        <div>
          <div className="flex items-center gap-8 mb-4">
            <h1 className="page-title flex-center gap-8" style={{ fontSize: '1.65rem', fontWeight: 800 }}>
              <FileText className="text-danger" size={28} /> ব্যয় ও ভাউচার (Expense Vouchers)
            </h1>
          </div>
          <p className="page-subtitle">প্রতিষ্ঠানের সকল খরচের ডেবিট ভাউচার তৈরি, দ্বৈত অনুমোদন ও হিসাব সংরক্ষণ করুন</p>
        </div>
        {canManage && (
          <div className="flex gap-12">
            <button className="btn btn-primary flex-center gap-8" onClick={handleOpenAddModal}>
              <Plus size={18} />
              নতুন ডেবিট ভাউচার
            </button>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4 mb-24" style={{ gap: '16px' }}>
        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #ef4444' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>মোট খরচ / ব্যয়</span>
            <ArrowDownRight size={16} className="text-danger" />
          </div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#ef4444' }}>
            ৳ {stats.total.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #10b981' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>অনুমোদিত ব্যয় (Approved)</span>
            <CheckCheck size={16} className="text-success" />
          </div>
          <div className="text-2xl font-bold font-mono text-success">
            ৳ {stats.approved.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #f59e0b' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>অপেক্ষাধীন ভাউচার (Pending)</span>
            <RefreshCw size={16} className="text-warning" />
          </div>
          <div className="text-2xl font-bold font-mono text-warning">
            ৳ {stats.pending.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid var(--primary)' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>মোট ভাউচার সংখ্যা</span>
            <FileText size={16} className="text-primary" />
          </div>
          <div className="text-2xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
            {stats.count.toLocaleString('bn-BD')} টি
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card mb-20" style={{ padding: '16px 20px' }}>
        <div className="flex flex-wrap gap-16 justify-between items-center">
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-8">
            <button
              className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('all')}
              style={{ borderRadius: '8px' }}
            >
              সকল ভাউচার
            </button>
            <button
              className={`btn btn-sm ${activeTab === 'pending' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('pending')}
              style={{ borderRadius: '8px' }}
            >
              অপেক্ষাধীন (Pending)
            </button>
            <button
              className={`btn btn-sm ${activeTab === 'level_1_approved' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('level_1_approved')}
              style={{ borderRadius: '8px' }}
            >
              যাচাইকৃত (Verified)
            </button>
            <button
              className={`btn btn-sm ${activeTab === 'approved' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('approved')}
              style={{ borderRadius: '8px' }}
            >
              অনুমোদিত (Approved)
            </button>
            <button
              className={`btn btn-sm ${activeTab === 'rejected' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('rejected')}
              style={{ borderRadius: '8px' }}
            >
              বাতিলকৃত (Rejected)
            </button>
          </div>

          {/* Search & Method */}
          <div className="flex flex-wrap gap-12 items-center flex-1 justify-end" style={{ minWidth: '320px' }}>
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="প্রাপক, ভাউচার নং বা খাত খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '36px', height: '38px', fontSize: '0.88rem' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <select
              value={filterMethod}
              onChange={(e) => setFilterMethod(e.target.value)}
              className="form-select form-input"
              style={{ width: '150px', height: '38px', fontSize: '0.85rem' }}
            >
              <option value="all">সকল পেমেন্ট মাধ্যম</option>
              <option value="cash">নগদ (Cash)</option>
              <option value="bank">ব্যাংক (Bank)</option>
              <option value="bkash">বিকাশ (bKash)</option>
              <option value="nagad">নগদ (Nagad)</option>
              <option value="cheque">চেক (Cheque)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <Loader className="spin text-primary" size={36} />
            <p className="text-muted text-sm">ভাউচার তথ্য লোড হচ্ছে...</p>
          </div>
        ) : filteredVouchers.length === 0 ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444'
            }}>
              <FileText size={32} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>কোনো ভাউচার পাওয়া যায়নি</h3>
            <p className="text-muted text-sm" style={{ margin: 0, textAlign: 'center', maxWidth: '420px' }}>
              {searchQuery ? 'আপনার সার্চ বা ফিল্টারে কোনো ভাউচার মেলেনি।' : 'প্রতিষ্ঠানের নতুন খরচের ভাউচার তৈরি করতে উপরের বাটনটিতে ক্লিক করুন।'}
            </p>
            {canManage && (
              <button className="btn btn-primary btn-sm flex-center gap-4" onClick={handleOpenAddModal}>
                <Plus size={16} /> নতুন ভাউচার তৈরি করুন
              </button>
            )}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>তারিখ / নং</th>
                  <th>প্রাপক ও বিবরণ</th>
                  <th>ব্যয়ের খাত (Debit)</th>
                  <th>তহবিল খাত (Credit)</th>
                  <th style={{ width: '110px' }}>পেমেন্ট</th>
                  <th style={{ textAlign: 'right', width: '130px' }}>পরিমাণ (৳)</th>
                  <th style={{ textAlign: 'center', width: '130px' }}>স্ট্যাটাস</th>
                  <th style={{ textAlign: 'center', width: '150px' }}>অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {filteredVouchers.map((v) => (
                  <tr key={v._id}>
                    <td>
                      <div>
                        <div className="flex items-center gap-4 font-mono text-sm" style={{ fontWeight: 600 }}>
                          <Calendar size={13} style={{ color: 'var(--text-muted)' }} />
                          {formatDateDDMMYYYY(v.date)}
                        </div>
                        <div className="text-xs text-muted font-mono" style={{ marginTop: '2px' }}>
                          {v.voucherNumber}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {v.payeeName}
                        </strong>
                        {v.description && (
                          <div className="text-xs text-muted" style={{ marginTop: '3px', maxWidth: '280px', lineHeight: 1.3 }}>
                            {v.description}
                          </div>
                        )}
                        {v.preparedByName && (
                          <div className="text-xs text-muted font-mono" style={{ marginTop: '2px', fontSize: '0.72rem' }}>
                            এন্ট্রি: {v.preparedByName}
                          </div>
                        )}
                      </div>
                    </td>

                    <td>
                      <span className="badge badge-warning" style={{ fontSize: '0.8rem', padding: '3px 8px' }}>
                        {v.expenseAccountDetails?.name || 'ব্যয় খাত'}
                      </span>
                    </td>

                    <td>
                      <span className="badge badge-success" style={{ fontSize: '0.8rem', padding: '3px 8px' }}>
                        {v.fundAccountDetails?.name || 'ফান্ড খাত'}
                      </span>
                    </td>

                    <td>
                      <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {methodMap[v.paymentMethod] || v.paymentMethod}
                      </span>
                    </td>

                    <td style={{ textAlign: 'right' }}>
                      <span className="font-mono font-bold" style={{ fontSize: '1rem', color: '#ef4444' }}>
                        ৳ {v.amount?.toLocaleString('en-IN')}
                      </span>
                    </td>

                    <td style={{ textAlign: 'center' }}>
                      {v.status === 'approved' && (
                        <div>
                          <span className="badge badge-active flex-center gap-4" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                            <CheckCircle size={12} /> অনুমোদিত
                          </span>
                          {v.approvedByName && (
                            <div className="text-xs text-muted" style={{ fontSize: '0.7rem', marginTop: '3px' }} title={`অনুমোদন করেছেন: ${v.approvedByName}`}>
                              অনুমোদন: <strong className="text-primary">{v.approvedByName}</strong>
                            </div>
                          )}
                        </div>
                      )}
                      {v.status === 'level_1_approved' && (
                        <div>
                          <span className="badge badge-primary flex-center gap-4" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                            <Check size={12} /> যাচাইকৃত (L1)
                          </span>
                          {v.verifiedByName && (
                            <div className="text-xs text-muted" style={{ fontSize: '0.7rem', marginTop: '3px' }}>
                              যাচাই: <strong>{v.verifiedByName}</strong>
                            </div>
                          )}
                        </div>
                      )}
                      {v.status === 'pending' && (
                        <span className="badge badge-warning flex-center gap-4" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                          <RefreshCw size={12} /> অপেক্ষাধীন
                        </span>
                      )}
                      {v.status === 'rejected' && (
                        <span className="badge badge-danger flex-center gap-4" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>
                          <XCircle size={12} /> বাতিল
                        </span>
                      )}
                    </td>

                    <td style={{ textAlign: 'center' }}>
                      <div className="flex-center gap-6" style={{ justifyContent: 'center' }}>
                        {/* Print Button */}
                        <button
                          className="btn-icon btn-ghost"
                          title="ভাউচার প্রিন্ট / প্রিভিউ"
                          onClick={() => openPrintModal(v)}
                          style={{ color: 'var(--primary)' }}
                        >
                          <Printer size={16} />
                        </button>

                        {/* Verify Button (for pending only) */}
                        {canVerify && v.status === 'pending' && (
                          <button
                            className="btn-icon btn-ghost text-primary"
                            title="ভাউচার যাচাই করুন (Level-1)"
                            onClick={() => handleVerify(v._id)}
                          >
                            <Check size={16} />
                          </button>
                        )}

                        {/* Approve Button */}
                        {canApprove && (v.status === 'pending' || v.status === 'level_1_approved') && (
                          <button
                            className="btn-icon btn-ghost text-success"
                            title="চূড়ান্ত অনুমোদন করুন (Approve)"
                            onClick={() => handleApprove(v._id)}
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}

                        {/* Reject Button */}
                        {canApprove && (v.status === 'pending' || v.status === 'level_1_approved') && (
                          <button
                            className="btn-icon btn-ghost text-danger"
                            title="বাতিল করুন (Reject)"
                            onClick={() => handleReject(v._id)}
                          >
                            <XCircle size={16} />
                          </button>
                        )}

                        {/* Delete Button */}
                        {canManage && (
                          <button
                            className="btn-icon btn-ghost text-danger"
                            title="মুছে ফেলুন"
                            onClick={() => handleDelete(v._id)}
                            style={{ opacity: 0.75 }}
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add New Voucher Modal */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto',
            padding: '28px', borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            <button
              className="btn-icon btn-ghost"
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 4px 0', color: '#ef4444' }} className="flex items-center gap-8">
                <FileText size={22} /> নতুন খরচের ডেবিট ভাউচার
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                খরচের বিবরণ পূরণ করে ভাউচার তৈরি করুন। তাৎক্ষণিকভাবে প্রিন্ট কপি তৈরি হবে।
              </p>
            </div>

            {/* Quick Presets */}
            <div style={{ marginBottom: '16px', background: 'var(--bg-tertiary)', padding: '12px 14px', borderRadius: '10px' }}>
              <div className="text-xs font-semibold mb-6 flex items-center gap-6" style={{ color: 'var(--text-secondary)' }}>
                <Sparkles size={14} className="text-warning" /> কুইক খরচ সাজেশন (এক ক্লিকে পূরণ করতে চাপুন):
              </div>
              <div className="flex flex-wrap gap-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { label: '💡 কারেন্ট বিল', payee: 'পল্লী বিদ্যুৎ সমিতি / ডেসকো', description: 'চলতি মাসের বিদ্যুৎ বিল পরিশোধ', code: '5004', keywords: ['বিদ্যুৎ', 'কারেন্ট', 'utility'] },
                  { label: '🧹 আয়া / গেটম্যান / বাবুর্চি বিল', payee: 'আয়া / গেটম্যান / বাবুর্চি', description: 'আয়া, গেটম্যান ও বাবুর্চির বিল/মজুরি পরিশোধ', code: '5001', keywords: ['বেতন', 'স্টাফ', 'salary'] },
                  { label: '🛒 বাজারের খরচ', payee: 'কাঁচাবাজার / মুদি দোকান', description: 'লিল্লাহ বোর্ডিং ও মেসের কাঁচাবাজার ও খাদ্যসামগ্রী ক্রয়', code: '5005', keywords: ['খাদ্য', 'মেস', 'বাজার', 'food'] },
                  { label: '🚗 যাতায়াত খরচ', payee: 'গাড়ি ভাড়া / পরিবহন', description: 'অফিসিয়াল ও মাদ্রাসার কাজে যাতায়াত খরচ ও ভাড়া', code: '5008', keywords: ['যাতায়াত', 'পরিবহন', 'travel'] },
                  { label: '☕ শিক্ষক Daily নাস্তা', payee: 'হোটেল / নাস্তার দোকান', description: 'শিক্ষক ও স্টাফদের দৈনিক নাস্তা ও আপ্যায়ন খরচ', code: '5009', keywords: ['নাস্তা', 'আপ্যায়ন', 'প্রশাসনিক', 'office'] },
                  { label: '👨‍🏫 শিক্ষক বেতন', payee: 'শিক্ষক', description: 'চলতি মাসের শিক্ষক বেতন-ভাতা', code: '5001', isSalary: true },
                  { label: '✏️ স্টেশনারি ও কাগজ', payee: 'স্টেশনারি দোকান', description: 'অফিস খাতা, কলম, মার্কার ও কাগজ ক্রয়', code: '5003', keywords: ['স্টেশনারি', 'মুদ্রণ'] },
                  { label: '🏢 সংস্কার ও মেরামত', payee: 'মিস্ত্রি / হার্ডওয়্যার', description: 'মাদ্রাসার সংস্কার ও মেরামত খরচ', code: '5006', keywords: ['সংস্কার', 'মেরামত'] },
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-outline btn-xs"
                    onClick={() => handlePresetSelect(preset)}
                    style={{ fontSize: '0.78rem', padding: '4px 8px', borderRadius: '6px', whiteSpace: 'normal', textAlign: 'left' }}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Row 1: Date & Amount */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    ভাউচারের তারিখ <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input font-mono"
                    style={{ height: '42px', fontSize: '0.92rem' }}
                  />
                </div>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    খরচের পরিমাণ (টাকা ৳) <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="যেমন: ১৫০০"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="form-input font-mono font-bold"
                    style={{ height: '42px', fontSize: '1.05rem', color: '#ef4444' }}
                  />
                </div>
              </div>

              {/* Row 2: Payee Name & Payment Method */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="form-label font-semibold" style={{ fontSize: '0.88rem', margin: 0 }}>
                      প্রাপকের নাম (Payee Name) <span style={{ color: 'var(--danger)' }}>*</span>
                    </label>
                    {teachers.length > 0 && (
                      <select
                        onChange={(e) => {
                          const tName = e.target.value;
                          if (!tName) return;
                          const salaryAcc = expenseAccounts.find(a => a.code === '5001' || a.name.includes('বেতন') || a.name.toLowerCase().includes('salary'));
                          setFormData(prev => ({
                            ...prev,
                            payeeName: tName,
                            expenseAccount: salaryAcc ? salaryAcc._id : prev.expenseAccount,
                            description: `${tName} এর মাসিক বেতন পরিশোধ`,
                          }));
                          e.target.value = '';
                        }}
                        style={{
                          fontSize: '0.72rem', padding: '2px 6px', borderRadius: '4px',
                          border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)',
                          color: 'var(--primary)', cursor: 'pointer', maxWidth: '170px'
                        }}
                      >
                        <option value="">👨‍🏫 শিক্ষক তালিকা থেকে নিন</option>
                        {teachers.map(t => (
                          <option key={t._id} value={t.name}>
                            {t.name} {t.designation ? `(${t.designation})` : ''}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <input
                    type="text"
                    required
                    list="teachers-staff-datalist"
                    placeholder="যেমন: মাওলানা আব্দুর রহমান (শিক্ষক)..."
                    value={formData.payeeName}
                    onChange={(e) => setFormData({ ...formData, payeeName: e.target.value })}
                    className="form-input"
                    style={{ height: '42px', fontSize: '0.92rem' }}
                  />
                  <datalist id="teachers-staff-datalist">
                    {teachers.map(t => (
                      <option key={t._id} value={t.name}>
                        {t.designation ? `${t.name} (${t.designation})` : t.name}
                      </option>
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    পেমেন্ট মাধ্যম <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.92rem' }}
                  >
                    <option value="cash">নগদ (Cash)</option>
                    <option value="bank">ব্যাংক (Bank Transfer)</option>
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                    <option value="cheque">চেক (Cheque)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Expense Account (Debit) & Fund Account (Credit) */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="form-label font-semibold" style={{ fontSize: '0.88rem', margin: 0 }}>
                      ব্যয়ের খাত (Expense Account) <span style={{ color: 'var(--danger)' }}>*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsQuickAccountModalOpen(true)}
                      className="text-xs text-primary font-semibold flex items-center gap-2 hover:underline"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      <Plus size={13} /> নতুন ব্যয়ের খাত
                    </button>
                  </div>
                  <select
                    required
                    value={formData.expenseAccount}
                    onChange={(e) => setFormData({ ...formData, expenseAccount: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.9rem' }}
                  >
                    <option value="">-- ব্যয়ের খাত নির্বাচন করুন --</option>
                    {expenseAccounts.map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>

                  {expenseAccounts.length === 0 && (
                    <div style={{
                      marginTop: '8px', padding: '10px 12px', background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '8px', fontSize: '0.82rem'
                    }}>
                      <div className="font-semibold text-warning mb-4 flex items-center gap-4">
                        <AlertCircle size={14} /> কোনো ব্যয়ের খাত পাওয়া যায়নি
                      </div>
                      <button
                        type="button"
                        className="btn btn-warning btn-xs flex-center gap-4"
                        onClick={handleSeedDefaults}
                        disabled={seeding}
                        style={{ fontSize: '0.78rem', width: '100%', justifyContent: 'center' }}
                      >
                        {seeding ? <Loader size={12} className="spin" /> : '⚡'} ৮টি আদর্শ ব্যয়ের খাত লোড করুন
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    তহবিল খাত (Fund / Asset - Credit) <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.fundAccount}
                    onChange={(e) => setFormData({ ...formData, fundAccount: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.9rem' }}
                  >
                    <option value="">-- ফান্ড নির্বাচন করুন --</option>
                    {fundAccounts.map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Description */}
              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  খরচের বিবরণ / নোট (ঐচ্ছিক)
                </label>
                <textarea
                  rows="2"
                  placeholder="খরচের উদ্দেশ্য বা বিস্তারিত বিবরণ..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-input"
                  style={{ fontSize: '0.9rem', resize: 'vertical' }}
                />
              </div>

              {/* Row 5: Attachment & Auto-Approve */}
              <div className="flex flex-wrap gap-16 justify-between items-center" style={{ background: 'var(--bg-tertiary)', padding: '12px 16px', borderRadius: '10px' }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <label className="text-xs font-semibold mb-4 flex items-center gap-4" style={{ color: 'var(--text-secondary)' }}>
                    <Paperclip size={13} /> বিল/ক্যাশমেমো সংযুক্তি (ঐচ্ছিক)
                  </label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    style={{ fontSize: '0.8rem' }}
                  />
                  {formData.attachment && (
                    <span className="text-xs text-success flex items-center gap-4 mt-2">
                      <Check size={12} /> ফাইল সংযুক্ত হয়েছে
                    </span>
                  )}
                </div>

                {canApprove && (
                  <div className="flex items-center gap-8">
                    <input
                      type="checkbox"
                      id="autoApproveCheck"
                      checked={formData.autoApprove}
                      onChange={(e) => setFormData({ ...formData, autoApprove: e.target.checked })}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    <label htmlFor="autoApproveCheck" className="text-sm font-semibold cursor-pointer" style={{ margin: 0 }}>
                      তাৎক্ষণিক চূড়ান্ত অনুমোদন করুন (Auto Approve)
                    </label>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-12 mt-8">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-center gap-8"
                  disabled={submitting}
                >
                  {submitting ? <Loader className="spin" size={16} /> : <Check size={16} />}
                  ভাউচার সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Add Expense Account Modal */}
      {isQuickAccountModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10000, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '440px', padding: '24px', borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)', position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            <button
              className="btn-icon btn-ghost"
              onClick={() => setIsQuickAccountModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }}>
                নতুন ব্যয়ের খাত যোগ করুন
              </h3>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                চার্ট অব অ্যাকাউন্টসে সরাসরি নতুন ব্যয়ের হেড যুক্ত হবে।
              </p>
            </div>

            <form onSubmit={handleQuickCreateAccount} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  খাতের নাম <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: বই-খাতা ক্রয় বা মুদ্রণ খরচ"
                  value={quickAccountData.name}
                  onChange={(e) => setQuickAccountData({ ...quickAccountData, name: e.target.value })}
                  className="form-input"
                  style={{ height: '40px', fontSize: '0.92rem' }}
                />
              </div>

              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  হিসাব কোড (Account Code) <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                </label>
                <input
                  type="text"
                  placeholder="যেমন: 5009 (খালি রাখলে অটো নিবে)"
                  value={quickAccountData.code}
                  onChange={(e) => setQuickAccountData({ ...quickAccountData, code: e.target.value })}
                  className="form-input font-mono"
                  style={{ height: '40px', fontSize: '0.92rem' }}
                />
              </div>

              <div className="flex justify-end gap-10 mt-8">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsQuickAccountModalOpen(false)}
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm flex-center gap-6"
                  disabled={creatingAccount}
                >
                  {creatingAccount ? <Loader className="spin" size={14} /> : <Check size={14} />}
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Printable Debit Voucher Modal */}
      {isPrintModalOpen && selectedVoucher && (
        <div className="modal-overlay print-modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card print-receipt-card" style={{
            maxWidth: '680px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
            backgroundColor: '#ffffff', color: '#1e293b', padding: 0,
            borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            border: 'none', position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            {/* Modal Header (Hidden on print) */}
            <div className="no-print flex items-center justify-between" style={{
              padding: '16px 24px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc'
            }}>
              <div className="flex items-center gap-8">
                <Printer size={18} className="text-primary" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>ডেবিট ভাউচার প্রিভিউ ও প্রিন্ট</h3>
              </div>
              <button
                className="btn-icon btn-ghost"
                onClick={() => setIsPrintModalOpen(false)}
                style={{ color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Role selector for print preview */}
            <div className="no-print" style={{ padding: '14px 24px 0 24px' }}>
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__expense_vouchers', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={['প্রস্তুতকারী', 'যাচাইকারী', 'অনুমোদনকারী']}
              />
            </div>

            {/* Printable Voucher Paper */}
            <div className="print-area" style={{ padding: '24px 32px', background: '#fff' }}>
              {/* Official Letterhead */}
              <MadrasahLetterhead documentTitle="খরচের ডেবিট ভাউচার (DEBIT VOUCHER)" />

              {/* Meta Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontSize: '13px', color: '#334155' }}>
                <div>
                  <div style={{ marginBottom: '4px' }}>
                    <strong>ভাউচার নং:</strong> <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>{selectedVoucher.voucherNumber}</span>
                  </div>
                  <div>
                    <strong>তারিখ:</strong> {formatDateDDMMYYYY(selectedVoucher.date)}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <strong>পেমেন্ট মাধ্যম:</strong> {methodMap[selectedVoucher.paymentMethod] || selectedVoucher.paymentMethod}
                  </div>
                  <div>
                    <strong>স্ট্যাটাস:</strong>{' '}
                    <span style={{
                      fontWeight: 700,
                      color: selectedVoucher.status === 'approved' ? '#059669' : '#d97706'
                    }}>
                      {selectedVoucher.status === 'approved' ? 'অনুমোদিত (Approved)' : 'অপেক্ষাধীন (Pending)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Voucher Table */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '13px' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1', fontWeight: 700, width: '32%', background: '#f8fafc' }}>
                      প্রাপকের নাম (Payee)
                    </td>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1', fontWeight: 700, fontSize: '14px', color: '#0f172a' }}>
                      {selectedVoucher.payeeName}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1', fontWeight: 700, background: '#f8fafc' }}>
                      ব্যয়ের খাত (Debit Head)
                    </td>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1' }}>
                      {selectedVoucher.expenseAccountDetails?.name || 'ব্যয়ের খাত'}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1', fontWeight: 700, background: '#f8fafc' }}>
                      তহবিল খাত (Credit Head)
                    </td>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1' }}>
                      {selectedVoucher.fundAccountDetails?.name || 'তহবিল খাত'}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1', fontWeight: 700, background: '#f8fafc' }}>
                      খরচের বিবরণ
                    </td>
                    <td style={{ padding: '10px 14px', border: '1px solid #cbd5e1' }}>
                      {selectedVoucher.description || '—'}
                    </td>
                  </tr>
                  <tr style={{ background: '#fef2f2' }}>
                    <td style={{ padding: '12px 14px', border: '1px solid #cbd5e1', fontWeight: 800, fontSize: '15px', color: '#991b1b' }}>
                      মোট প্রদেয় পরিমাণ
                    </td>
                    <td style={{ padding: '12px 14px', border: '1px solid #cbd5e1', fontSize: '18px', fontWeight: 800, color: '#b91c1c', fontFamily: 'monospace' }}>
                      ৳ {selectedVoucher.amount?.toLocaleString('en-IN')}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Official Footer Signatures */}
              <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '48px', paddingTop: '24px' }} />
            </div>

            {/* Modal Bottom Actions (Hidden on print) */}
            <div className="no-print flex justify-end gap-12" style={{
              padding: '16px 24px', borderTop: '1px solid #e2e8f0', background: '#f8fafc'
            }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsPrintModalOpen(false)}
              >
                বন্ধ করুন
              </button>
              <button
                type="button"
                className="btn btn-primary flex-center gap-8"
                onClick={handlePrint}
              >
                <Printer size={16} /> প্রিন্ট করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print CSS Rules */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-modal-overlay {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: none !important;
            backdrop-filter: none !important;
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-receipt-card {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            position: static !important;
            border-radius: 0 !important;
          }
          .print-area, .print-area * {
            visibility: visible !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
