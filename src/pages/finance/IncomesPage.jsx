import { useState, useEffect, useMemo } from 'react';
import { 
  Plus, Trash2, Loader, Wallet, Search, Calendar, FileText, Check, X, 
  Printer, Heart, CheckCircle, AlertCircle, Phone, User, DollarSign,
  TrendingUp, Clock, Filter, Eye, ArrowUpRight, Sparkles, Building2
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';
import AuditBadge from '../../components/common/AuditBadge';

const DONOR_PRESETS = [
  'সাধারণ কালেকশন / পাবলিক অনুদান',
  'জুমার নামাজ কালেকশন',
  'দানবাক্স কালেকশন',
  'নাম প্রকাশে অনিচ্ছুক শুভাকাঙ্ক্ষী'
];

export default function IncomesPage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const [incomes, setIncomes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__incomes');
      return saved ? JSON.parse(saved) : ['দাতার স্বাক্ষর', 'গ্রহণকারীর স্বাক্ষর', 'পরিচালক'];
    } catch {
      return ['দাতার স্বাক্ষর', 'গ্রহণকারীর স্বাক্ষর', 'পরিচালক'];
    }
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    donorName: '',
    donorPhone: '',
    paymentMethod: 'cash',
    transactionReference: '',
    notes: '',
    fundAccount: '',
    revenueAccount: '',
    autoApprove: true
  });

  const canManage = [
    'super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'
  ].includes(user?.userType) || [
    'co_super_admin', 'admin'
  ].includes(user?.adminRole);

  const canApprove = ['super_admin', 'co_super_admin', 'admin', 'principal'].includes(user?.userType);

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
      if (filterCategory) params.category = filterCategory;
      if (activeTab !== 'all') params.status = activeTab;

      const [incomesRes, categoriesRes, accountsRes] = await Promise.all([
        api.get('/finance/incomes', { params }).catch(() => api.get('/finance/incomes/incomes', { params })),
        api.get('/finance/income-categories').catch(() => api.get('/finance/incomes/income-categories')),
        api.get('/accounting/accounts').catch(() => ({ data: { success: false } }))
      ]);
      
      if (incomesRes.data.success) {
        setIncomes(incomesRes.data.data.incomes || []);
      }
      if (categoriesRes.data.success) {
        const cats = categoriesRes.data.data.categories || [];
        setCategories(cats);
        if (cats.length > 0 && !formData.category) {
          setFormData(prev => ({ ...prev, category: cats[0]._id }));
        }
      }
      if (accountsRes.data?.success) {
        setAccounts(accountsRes.data.data?.accounts || accountsRes.data.accounts || []);
      }
    } catch (error) {
      setToast({ type: 'error', message: 'ডাটা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterCategory, activeTab]);

  const handleOpenAddModal = () => {
    setFormData({
      category: categories.length > 0 ? categories[0]._id : '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      donorName: '',
      donorPhone: '',
      paymentMethod: 'cash',
      transactionReference: '',
      notes: '',
      fundAccount: '',
      revenueAccount: '',
      autoApprove: true
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) {
      setToast({ type: 'error', message: 'আয়ের খাত নির্বাচন করুন' });
      return;
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      setToast({ type: 'error', message: 'সঠিক টাকার পরিমাণ প্রদান করুন' });
      return;
    }
    try {
      setSubmitting(true);
      const res = await api.post('/finance/incomes', {
        ...formData,
        amount: Number(formData.amount)
      });
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'আয় সফলভাবে রেকর্ড করা হয়েছে' });
        setIsModalOpen(false);
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'কোনো সমস্যা হয়েছে' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই আয়ের রেকর্ডটি মুছে ফেলতে চান?')) return;
    try {
      const res = await api.delete(`/finance/incomes/${id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'রেকর্ড সফলভাবে মুছে ফেলা হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'মুছে ফেলতে সমস্যা হয়েছে' });
    }
  };

  const handleApprove = async (id) => {
    if (!window.confirm('আপনি কি এই আয়টি অনুমোদন করতে নিশ্চিত? অনুমোদন করলে টাকা ক্যাশ/লেজারে যুক্ত হবে।')) return;
    try {
      const res = await api.post(`/finance/incomes/${id}/approve`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'আয় অনুমোদিত হয়েছে এবং লেজারে যুক্ত হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'অনুমোদনে সমস্যা হয়েছে' });
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm('আপনি কি এই আয়টি বাতিল করতে নিশ্চিত?')) return;
    try {
      const res = await api.post(`/finance/incomes/${id}/reject`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'আয় বাতিল করা হয়েছে' });
        fetchData();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'বাতিল করতে সমস্যা হয়েছে' });
    }
  };

  const openPrintModal = (income) => {
    setSelectedIncome(income);
    setIsPrintModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  // Filtered incomes
  const filteredIncomes = useMemo(() => {
    return incomes.filter(inc => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      const catName = inc.category?.name?.toLowerCase() || '';
      const donor = inc.donorName?.toLowerCase() || '';
      const phone = inc.donorPhone?.toLowerCase() || '';
      const ref = inc.transactionReference?.toLowerCase() || '';
      const notes = inc.notes?.toLowerCase() || '';
      return catName.includes(q) || donor.includes(q) || phone.includes(q) || ref.includes(q) || notes.includes(q);
    });
  }, [incomes, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const totalAmount = incomes.filter(i => i.status === 'approved').reduce((sum, i) => sum + (i.amount || 0), 0);
    const donationAmount = incomes
      .filter(i => i.status === 'approved' && (i.category?.type === 'donation' || i.category?.name?.includes('দান') || i.category?.name?.includes('Donation')))
      .reduce((sum, i) => sum + (i.amount || 0), 0);
    const pendingCount = incomes.filter(i => i.status === 'pending').length;
    const pendingAmount = incomes.filter(i => i.status === 'pending').reduce((sum, i) => sum + (i.amount || 0), 0);
    const otherAmount = Math.max(0, totalAmount - donationAmount);

    return { totalAmount, donationAmount, otherAmount, pendingCount, pendingAmount };
  }, [incomes]);

  const getMethodBadge = (m) => {
    switch (m) {
      case 'bkash': return <span className="badge" style={{ background: '#fce7f3', color: '#be185d' }}>বিকাশ (bKash)</span>;
      case 'nagad': return <span className="badge" style={{ background: '#ffedd5', color: '#c2410c' }}>নগদ (Nagad)</span>;
      case 'rocket': return <span className="badge" style={{ background: '#ede9fe', color: '#6d28d9' }}>রকেট (Rocket)</span>;
      case 'bank': return <span className="badge" style={{ background: '#dbeafe', color: '#1d4ed8' }}>ব্যাংক (Bank)</span>;
      default: return <span className="badge" style={{ background: '#dcfce7', color: '#15803d' }}>ক্যাশ (নগদ)</span>;
    }
  };

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Toast Alert */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <div>
          <h1 className="page-title flex-center gap-8" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            <Wallet className="text-primary" size={28} /> অন্যান্য আয় ও অনুদান (Incomes & Donations)
          </h1>
          <p className="page-subtitle">
            শাখা: {branchName} • সকল পাবলিক ও ব্যক্তিগত দান, অনুদান, ভাড়া ও বিবিধ আয়ের হিসাব ও রসিদ
          </p>
        </div>
        {canManage && (
          <button className="btn btn-primary flex-center gap-8" onClick={handleOpenAddModal}>
            <Plus size={18} />
            নতুন আয় এন্ট্রি
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4 mb-24" style={{ gap: '16px' }}>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid var(--primary)' }}>
          <div className="text-xs text-muted font-medium mb-4">মোট অর্জিত আয় (অনুমোদিত)</div>
          <div className="text-2xl font-bold font-mono" style={{ color: 'var(--primary)' }}>
            ৳ {stats.totalAmount.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-muted mt-4">লেজারে সংরক্ষিত মোট আয়</div>
        </div>

        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #10b981' }}>
          <div className="text-xs text-muted font-medium mb-4">মোট দান ও অনুদান (Donations)</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#059669' }}>
            ৳ {stats.donationAmount.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-muted mt-4 flex items-center gap-4">
            <Heart size={12} style={{ color: '#10b981' }} /> পাবলিক ও ব্যক্তিগত অনুদান
          </div>
        </div>

        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #0284c7' }}>
          <div className="text-xs text-muted font-medium mb-4">অন্যান্য আয়ের পরিমাণ</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#0284c7' }}>
            ৳ {stats.otherAmount.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-muted mt-4">ভাড়া ও বিবিধ বাবদ আয়</div>
        </div>

        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #f59e0b' }}>
          <div className="text-xs text-muted font-medium mb-4">অপেক্ষাধীন এন্ট্রি (Pending)</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#d97706' }}>
            ৳ {stats.pendingAmount.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-muted mt-4">
            {stats.pendingCount} টি অপেক্ষাধীন রেকর্ড
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card mb-20" style={{ padding: '16px' }}>
        <div className="flex flex-wrap gap-16 justify-between items-center">
          <div className="flex gap-12 flex-1" style={{ minWidth: '260px', maxWidth: '450px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '38px', height: '42px', fontSize: '0.9rem' }}
                placeholder="দাতার নাম, মোবাইল, TrxID বা বিবরণ দিয়ে খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-12 flex-wrap items-center">
            {/* Category Dropdown Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="form-select form-input"
              style={{ height: '42px', minWidth: '180px', fontSize: '0.9rem' }}
            >
              <option value="">সকল আয়ের খাত</option>
              {categories.map(c => (
                <option key={c._id} value={c._id}>
                  {c.name} {c.type === 'donation' ? '(দান)' : ''}
                </option>
              ))}
            </select>

            {/* Status Tabs */}
            <div className="flex gap-6">
              <button 
                className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('all')}
              >
                সব
              </button>
              <button 
                className={`btn btn-sm ${activeTab === 'approved' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('approved')}
              >
                অনুমোদিত
              </button>
              <button 
                className={`btn btn-sm ${activeTab === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('pending')}
              >
                অপেক্ষাধীন {stats.pendingCount > 0 && `(${stats.pendingCount})`}
              </button>
              <button 
                className={`btn btn-sm ${activeTab === 'rejected' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('rejected')}
              >
                বাতিল
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="card table-container" style={{ padding: 0 }}>
        {loading ? (
          <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '12px' }}>
            <Loader className="animate-spin text-primary" size={36} />
            <p className="text-muted text-sm font-medium">আয়ের রেকর্ডসমূহ লোড হচ্ছে...</p>
          </div>
        ) : filteredIncomes.length === 0 ? (
          <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '14px', padding: '40px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Wallet size={32} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>কোনো আয়ের রেকর্ড পাওয়া যায়নি</h3>
            <p className="text-muted text-sm" style={{ margin: 0, textAlign: 'center', maxWidth: '420px' }}>
              {searchQuery ? 'আপনার সার্চের ফিল্টারে কোনো তথ্য খুঁজে পাওয়া যায়নি।' : 'মাদ্রাসার অনুদান বা আয় লিপিবদ্ধ করার জন্য উপরে ডানদিকের বাটন থেকে এন্ট্রি করুন।'}
            </p>
            {canManage && (
              <button className="btn btn-primary btn-sm flex-center gap-4" onClick={handleOpenAddModal}>
                <Plus size={16} /> নতুন আয় এন্ট্রি করুন
              </button>
            )}
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>তারিখ</th>
                <th>খাত (Category)</th>
                <th>দাতার নাম ও বিবরণ</th>
                <th>পেমেন্ট মাধ্যম</th>
                <th style={{ textAlign: 'right', width: '130px' }}>পরিমাণ (৳)</th>
                <th>আদায়কারী</th>
                <th style={{ textAlign: 'center', width: '110px' }}>স্ট্যাটাস</th>
                {canManage && <th style={{ textAlign: 'center', width: '150px' }}>অ্যাকশন</th>}
              </tr>
            </thead>
            <tbody>
              {filteredIncomes.map((income) => {
                const catObj = income.category;
                const catName = typeof catObj === 'object' && catObj?.name ? catObj.name : (income.category || 'সাধারণ আয়');
                const isDonation = typeof catObj === 'object' && catObj?.type === 'donation';

                return (
                  <tr key={income._id}>
                    <td>
                      <div className="flex items-center gap-4 font-mono text-sm">
                        <Calendar size={13} style={{ color: 'var(--text-muted)' }} />
                        {formatDateDDMMYYYY(income.date)}
                      </div>
                    </td>
                    <td>
                      <div>
                        <strong className="text-primary" style={{ fontSize: '0.94rem' }}>{catName}</strong>
                        {isDonation && (
                          <div style={{ marginTop: '2px' }}>
                            <span className="badge badge-active" style={{ fontSize: '0.7rem', padding: '1px 6px' }}>অনুদান</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div>
                        {income.donorName ? (
                          <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                            {income.donorName}
                          </div>
                        ) : (
                          <div className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>
                            পাবলিক / সাধারণ
                          </div>
                        )}
                        {income.donorPhone && (
                          <div className="text-xs text-muted flex items-center gap-4" style={{ marginTop: '2px', fontFamily: 'Inter' }}>
                            <Phone size={11} /> {income.donorPhone}
                          </div>
                        )}
                        {income.notes && (
                          <div className="text-xs text-muted" style={{ marginTop: '3px' }}>
                            নোট: {income.notes}
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div>
                        {getMethodBadge(income.paymentMethod)}
                        {income.transactionReference && (
                          <div className="text-xs text-muted font-mono" style={{ marginTop: '3px' }}>
                            Ref: {income.transactionReference}
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <span className="font-bold font-mono" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
                        ৳ {income.amount?.toLocaleString('en-IN')}
                      </span>
                    </td>
                    <td>
                      {income.receivedBy ? (
                        <AuditBadge 
                          user={{
                            name: `${income.receivedBy.firstName || ''} ${income.receivedBy.lastName || ''}`.trim() || 'স্টাফ',
                            roleLabel: 'আদায়কারী'
                          }} 
                          variant="compact" 
                        />
                      ) : (
                        <span className="text-muted text-xs">—</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${income.status === 'approved' ? 'badge-active' : income.status === 'rejected' ? 'badge-danger' : 'badge-warning'}`}>
                        {income.status === 'approved' ? 'অনুমোদিত' : income.status === 'rejected' ? 'বাতিল' : 'অপেক্ষাধীন'}
                      </span>
                    </td>
                    {canManage && (
                      <td style={{ textAlign: 'center' }}>
                        <div className="flex gap-6 justify-center">
                          {canApprove && income.status === 'pending' && (
                            <>
                              <button 
                                className="btn btn-success btn-sm"
                                onClick={() => handleApprove(income._id)}
                                title="অনুমোদন করুন"
                                style={{ padding: '5px 8px' }}
                              >
                                <Check size={14} />
                              </button>
                              <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => handleReject(income._id)}
                                title="বাতিল করুন"
                                style={{ padding: '5px 8px' }}
                              >
                                <X size={14} />
                              </button>
                            </>
                          )}
                          <button 
                            className="btn btn-ghost btn-sm"
                            onClick={() => openPrintModal(income)}
                            title="মানি রসিদ দেখুন ও প্রিন্ট করুন"
                            style={{ color: 'var(--primary)' }}
                          >
                            <Printer size={15} /> রসিদ
                          </button>
                          <button 
                            className="btn-icon btn-ghost" 
                            title="মুছে ফেলুন"
                            style={{ color: 'var(--danger)' }}
                            onClick={() => handleDelete(income._id)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Add New Income Modal */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
            padding: '30px', borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            <button 
              className="btn-icon btn-ghost" 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }}>
                নতুন আয় / ডোনেশন এন্ট্রি
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                অনুদান বা আয়ের তথ্য পূরণ করে সংরক্ষণ করুন। তাৎক্ষণিকভাবে রসিদ তৈরি হবে।
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Category & Amount */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    আয়ের খাত <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.95rem' }}
                  >
                    {categories.length === 0 && <option value="">কোনো খাত তৈরি নেই</option>}
                    {categories.map(c => (
                      <option key={c._id} value={c._id}>
                        {c.name} {c.type === 'donation' ? '(দান/অনুদান)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    পরিমাণ (টাকা ৳) <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="যেমন: ৫০০০"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="form-input font-mono font-bold"
                    style={{ height: '42px', fontSize: '1.05rem', color: 'var(--primary)' }}
                  />
                </div>
              </div>

              {/* Date & Payment Method */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    তারিখ <span style={{ color: 'var(--danger)' }}>*</span>
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
                    পেমেন্ট মাধ্যম <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.95rem' }}
                  >
                    <option value="cash">নগদ (Cash)</option>
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                    <option value="bank">ব্যাংক (Bank)</option>
                  </select>
                </div>
              </div>

              {formData.paymentMethod !== 'cash' && (
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    ট্রানজেকশন / চেক নম্বর / ব্যাংক রেফারেন্স
                  </label>
                  <input
                    type="text"
                    placeholder="যেমন: TrxID: 9X7A4BC2 বা চেক নং 12345"
                    value={formData.transactionReference}
                    onChange={(e) => setFormData({ ...formData, transactionReference: e.target.value })}
                    className="form-input font-mono"
                    style={{ height: '42px', fontSize: '0.9rem' }}
                  />
                </div>
              )}

              {/* Fund and Revenue Account (Double Entry) */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    জমা ফান্ড (Debit Account) <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                  </label>
                  <select
                    value={formData.fundAccount}
                    onChange={(e) => setFormData({ ...formData, fundAccount: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.9rem' }}
                  >
                    <option value="">-- ফান্ড নির্বাচন করুন --</option>
                    {accounts.filter(a => a.type === 'Asset').map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    আয়ের খাত (Credit Account) <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                  </label>
                  <select
                    value={formData.revenueAccount}
                    onChange={(e) => setFormData({ ...formData, revenueAccount: e.target.value })}
                    className="form-select form-input"
                    style={{ height: '42px', fontSize: '0.9rem' }}
                  >
                    <option value="">-- আয়ের খাত নির্বাচন করুন --</option>
                    {accounts.filter(a => a.type === 'Revenue').map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Donor Information */}
              <div style={{ marginTop: '6px', background: 'var(--bg-tertiary)', padding: '16px', borderRadius: '12px' }}>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-sm text-primary flex items-center gap-6">
                    <User size={15} /> দাতার তথ্য (Donor Details)
                  </span>
                  <span className="text-xs text-muted">পাবলিক বা ব্যক্তিগত দান</span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-6 mb-10" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {DONOR_PRESETS.map((pText, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, donorName: pText }))}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.72rem', padding: '4px 8px', borderRadius: '6px', whiteSpace: 'normal', textAlign: 'left' }}
                    >
                      + {pText.split('/')[0]}
                    </button>
                  ))}
                </div>

                <div className="grid grid-2" style={{ gap: '12px' }}>
                  <div>
                    <label className="form-label text-xs font-semibold mb-4" style={{ display: 'block' }}>দাতার নাম</label>
                    <input
                      type="text"
                      placeholder="যেমন: হাজী আব্দুল্লাহ বা সাধারণ কালেকশন"
                      value={formData.donorName}
                      onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                      className="form-input"
                      style={{ height: '40px', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label className="form-label text-xs font-semibold mb-4" style={{ display: 'block' }}>দাতার মোবাইল নম্বর</label>
                    <input
                      type="text"
                      placeholder="017xxxxxxxx"
                      value={formData.donorPhone}
                      onChange={(e) => setFormData({ ...formData, donorPhone: e.target.value })}
                      className="form-input font-mono"
                      style={{ height: '40px', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  বিবরণ / নোট <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="দানের উদ্দেশ্য (যেমন: লিল্লাহ ফান্ড, খাবার বাবদ, বা মসজিদ ফান্ড)..."
                  className="form-input"
                  rows="2"
                  style={{ fontSize: '0.9rem', resize: 'vertical' }}
                ></textarea>
              </div>

              {/* Auto Approve Checkbox */}
              {canApprove && (
                <label className="flex items-center gap-8 cursor-pointer" style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={formData.autoApprove}
                    onChange={(e) => setFormData({ ...formData, autoApprove: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                  />
                  <span>সরাসরি অনুমোদন ও লেজারে পোস্টিং করুন (Approved)</span>
                </label>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader className="animate-spin" size={16} /> সংরক্ষণ হচ্ছে...
                    </>
                  ) : (
                    'আয় সংরক্ষণ করুন'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Money Receipt Modal (Screen & Print) */}
      {isPrintModalOpen && selectedIncome && (
        <div className="modal-overlay print-modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card print-receipt-card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '92vh', overflowY: 'auto',
            padding: '36px', borderRadius: '16px', background: '#ffffff', color: '#111827',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)', position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            {/* Close Button */}
            <button 
              className="btn-icon btn-ghost no-print" 
              onClick={() => setIsPrintModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: '#6b7280' }}
            >
              <X size={20} />
            </button>

            {/* Role selector for print preview */}
            <div className="no-print" style={{ marginBottom: '16px' }}>
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__incomes', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={['দাতার স্বাক্ষর', 'গ্রহণকারীর স্বাক্ষর']}
              />
            </div>

            {/* Print Area */}
            <div className="print-area">
              {/* Official Letterhead */}
              <MadrasahLetterhead documentTitle="দান ও অনুদান রসিদ (Donation Money Receipt)" />

              {/* Receipt Info Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px' }}>
                <div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, color: '#475569' }}>রসিদ নং:</span>{' '}
                    <strong style={{ fontFamily: 'monospace', color: '#0f766e' }}>
                      REC-{selectedIncome._id.substring(selectedIncome._id.length - 8).toUpperCase()}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, color: '#475569' }}>তারিখ:</span>{' '}
                    <span>{formatDateDDMMYYYY(selectedIncome.date)}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700, color: '#475569' }}>পেমেন্ট মাধ্যম:</span>{' '}
                    <strong style={{ textTransform: 'capitalize' }}>{selectedIncome.paymentMethod}</strong>
                  </div>
                  {selectedIncome.transactionReference && (
                    <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748b' }}>
                      Ref: {selectedIncome.transactionReference}
                    </div>
                  )}
                </div>
              </div>

              {/* Details Table */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '13px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#475569', width: '35%', background: '#f8fafc' }}>
                      আয়ের খাত / বিবরণ:
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#0f766e' }}>
                      {typeof selectedIncome.category === 'object' ? selectedIncome.category?.name : (selectedIncome.category || 'সাধারণ আয়')}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#475569', background: '#f8fafc' }}>
                      দাতার নাম (Donor):
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>
                      {selectedIncome.donorName || 'পাবলিক / সাধারণ অনুদান'}
                    </td>
                  </tr>
                  {selectedIncome.donorPhone && (
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#475569', background: '#f8fafc' }}>
                        মোবাইল নম্বর:
                      </td>
                      <td style={{ padding: '10px 12px', fontFamily: 'monospace' }}>
                        {selectedIncome.donorPhone}
                      </td>
                    </tr>
                  )}
                  {selectedIncome.notes && (
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#475569', background: '#f8fafc' }}>
                        উদ্দেশ্য / নোট:
                      </td>
                      <td style={{ padding: '10px 12px' }}>
                        {selectedIncome.notes}
                      </td>
                    </tr>
                  )}
                  <tr style={{ borderBottom: '2px solid #0f766e', background: '#f0fdfa' }}>
                    <td style={{ padding: '14px 12px', fontWeight: 800, color: '#0f766e', fontSize: '15px' }}>
                      সর্বমোট প্রাপ্তি (Total):
                    </td>
                    <td style={{ padding: '14px 12px', fontWeight: 800, fontSize: '18px', color: '#0f766e', fontFamily: 'monospace' }}>
                      ৳ {selectedIncome.amount?.toLocaleString('en-IN')}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Status Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 700,
                  background: selectedIncome.status === 'approved' ? '#dcfce7' : '#fef3c7',
                  color: selectedIncome.status === 'approved' ? '#15803d' : '#b45309',
                  border: `1px solid ${selectedIncome.status === 'approved' ? '#86efac' : '#fde68a'}`
                }}>
                  {selectedIncome.status === 'approved' ? '✓ অনুমোদিত ও গৃহীত' : 'অপেক্ষাধীন'}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>
                  আল্লাহ আপনার দান ও খেদমত কবুল করুন। আমীন।
                </span>
              </div>

              {/* Official Footer Signatures */}
              <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '48px' }} />
            </div>

            {/* Actions for Screen */}
            <div className="no-print" style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setIsPrintModalOpen(false)}>
                বন্ধ করুন
              </button>
              <button type="button" className="btn btn-primary flex-center gap-6" onClick={handlePrint}>
                <Printer size={16} /> রসিদ প্রিন্ট করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-modal-overlay {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            background: none !important;
            backdrop-filter: none !important;
            display: block !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .print-receipt-card {
            border: 2px solid #0f766e !important;
            box-shadow: none !important;
            padding: 24px !important;
            width: 100% !important;
            max-width: 100% !important;
            position: static !important;
          }
          .print-area, .print-area * {
            visibility: visible !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            margin: 6mm 10mm;
            size: A4 portrait;
          }
        }
      `}</style>
    </div>
  );
}
