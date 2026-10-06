import { useState, useEffect, useMemo } from 'react';
import {
  Plus, Edit, Trash2, Loader, BookOpen, Search, X, Check,
  AlertCircle, CheckCircle, RefreshCw, Sparkles, Building2,
  Wallet, CreditCard, Landmark, TrendingUp, TrendingDown, Layers
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

export default function ChartOfAccountsPage() {
  const { user } = useAuthStore();
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [toast, setToast] = useState(null);

  // Filters & Search
  const [activeTab, setActiveTab] = useState('all'); // all, Asset, Liability, Equity, Revenue, Expense
  const [searchQuery, setSearchQuery] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    type: 'Expense',
    balance: 0,
    isActive: true,
  });

  const canManage = [
    'super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'
  ].includes(user?.userType) || [
    'super_admin', 'co_super_admin', 'admin'
  ].includes(user?.adminRole);

  const accountTypes = [
    {
      id: 'Asset',
      label: 'সম্পদ (Asset)',
      series: '১০০০ সিরিজ',
      prefix: 1000,
      icon: Wallet,
      color: '#10b981',
      bg: 'rgba(16, 185, 129, 0.1)',
      desc: 'নগদ ক্যাশ, ব্যাংক ব্যালেন্স, মোবাইল ওয়ালেট ও স্থায়ী সম্পদ',
      presets: ['ইসলামী ব্যাংক একাউন্ট', 'ডাচ-বাংলা ব্যাংক', 'পেটি ক্যাশ (খুচরা তহবিল)', 'ফার্নিচার ও সরঞ্জাম']
    },
    {
      id: 'Liability',
      label: 'দায় (Liability)',
      series: '২০০০ সিরিজ',
      prefix: 2000,
      icon: CreditCard,
      color: '#ef4444',
      bg: 'rgba(239, 68, 68, 0.1)',
      desc: 'করজে হাসানা, প্রদেয় বিল, শিক্ষক/স্টাফ বকেয়া বেতন',
      presets: ['করজে হাসানা (কমিটি ঋণ)', 'বকেয়া ইউটিলিটি বিল', 'অগ্রিম আদায়যোগ্য ফি']
    },
    {
      id: 'Equity',
      label: 'মূলধন ও তহবিল (Equity)',
      series: '৩০০০ সিরিজ',
      prefix: 3000,
      icon: Landmark,
      color: '#8b5cf6',
      bg: 'rgba(139, 92, 246, 0.1)',
      desc: 'সাধারণ তহবিল, মসজিদ ও মাদ্রাসা ভবন তহবিল, ওয়াকফ সম্পত্তি',
      presets: ['মাদ্রাসা সাধারণ তহবিল', 'নতুন ভবন নির্মাণ তহবিল', 'স্থায়ী ওয়াকফ তহবিল']
    },
    {
      id: 'Revenue',
      label: 'আয় (Revenue)',
      series: '৪০০০ সিরিজ',
      prefix: 4000,
      icon: TrendingUp,
      color: '#0284c7',
      bg: 'rgba(2, 132, 199, 0.1)',
      desc: 'শিক্ষার্থী মাসিক বেতন, ভর্তি ফি, যাকাত, অনুদান ও বিবিধ আয়',
      presets: ['যাকাত ও সদকা অনুদান', 'বই-খাতা বিক্রয় আয়', 'দোকান ও সম্পদ ভাড়া', 'ফরম বিক্রয় আয়']
    },
    {
      id: 'Expense',
      label: 'ব্যয় (Expense)',
      series: '৫০০০ সিরিজ',
      prefix: 5000,
      icon: TrendingDown,
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.1)',
      desc: 'শিক্ষক-স্টাফ বেতন, বই-খাতা ক্রয়, মুদ্রণ, বিদ্যুৎ বিল, খাদ্য খরচ',
      presets: ['বই ও খাতা ক্রয় খরচ', 'বিদ্যুৎ ও গ্যাস বিল', 'মুদ্রণ ও স্টেশনারি', 'লিল্লাহ বোর্ডিং খাবার খরচ', 'মেরামত ও রক্ষণাবেক্ষণ']
    },
  ];

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/accounting/accounts');
      if (res.data.success) {
        setAccounts(res.data.data.accounts || []);
      }
    } catch (error) {
      setToast({ type: 'error', message: 'একাউন্ট তালিকা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Helper to suggest next available code in a type series
  const getNextAvailableCode = (type, currentAccounts = accounts) => {
    const typeMeta = accountTypes.find(t => t.id === type) || accountTypes[0];
    const prefix = typeMeta.prefix;
    const sameTypeCodes = currentAccounts
      .filter(a => a.type === type)
      .map(a => parseInt(a.code, 10))
      .filter(code => !isNaN(code) && code >= prefix && code < prefix + 1000);

    if (sameTypeCodes.length === 0) {
      return String(prefix + 1);
    }
    const maxCode = Math.max(...sameTypeCodes);
    return String(maxCode + 1);
  };

  const handleOpenModal = (account = null, defaultType = 'Expense') => {
    if (account) {
      setEditingAccount(account);
      setFormData({
        name: account.name,
        code: account.code,
        type: account.type,
        balance: account.balance,
        isActive: account.isActive,
      });
    } else {
      setEditingAccount(null);
      const selectedType = defaultType || 'Expense';
      const autoCode = getNextAvailableCode(selectedType);
      setFormData({
        name: '',
        code: autoCode,
        type: selectedType,
        balance: 0,
        isActive: true
      });
    }
    setIsModalOpen(true);
  };

  const handleTypeChange = (newType) => {
    if (editingAccount) return;
    const autoCode = getNextAvailableCode(newType);
    setFormData(prev => ({
      ...prev,
      type: newType,
      code: autoCode,
    }));
  };

  const handlePresetSelect = (presetName) => {
    setFormData(prev => ({
      ...prev,
      name: presetName,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে একাউন্টের নাম প্রদান করুন' });
      return;
    }
    if (!formData.code.trim()) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে হিসাব কোড প্রদান করুন' });
      return;
    }

    try {
      setSubmitting(true);
      if (editingAccount) {
        const res = await api.put(`/accounting/accounts/${editingAccount._id}`, formData);
        if (res.data.success) {
          setToast({ type: 'success', message: 'একাউন্ট সফলভাবে আপডেট করা হয়েছে' });
          setIsModalOpen(false);
          fetchAccounts();
        }
      } else {
        const res = await api.post('/accounting/accounts', formData);
        if (res.data.success) {
          setToast({ type: 'success', message: 'নতুন একাউন্ট সফলভাবে তৈরি হয়েছে' });
          setIsModalOpen(false);
          fetchAccounts();
        }
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'কোনো সমস্যা হয়েছে' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (account) => {
    if (Math.abs(Number(account.balance) || 0) > 0.01) {
      alert(`এই একাউন্টে ৳ ${Number(account.balance).toLocaleString('en-IN')} ব্যালেন্স রয়েছে! ব্যালেন্সযুক্ত একাউন্ট মুছে ফেলা যাবে না। প্রয়োজনে এডিট করে 'নিষ্ক্রিয়' করুন।`);
      return;
    }
    if (!window.confirm(`আপনি কি নিশ্চিত যে '${account.name} (${account.code})' একাউন্টটি মুছে ফেলতে চান?`)) {
      return;
    }
    try {
      const res = await api.delete(`/accounting/accounts/${account._id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'একাউন্ট সফলভাবে মুছে ফেলা হয়েছে' });
        fetchAccounts();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'মুছে ফেলতে সমস্যা হয়েছে' });
    }
  };

  const handleSeedDefaults = async () => {
    if (!window.confirm('আপনি কি মাদ্রাসার জন্য সকল আদর্শ খতিয়ান হিসাব (Assets, Revenues, Expenses) লোড করতে চান?')) return;
    try {
      setSeeding(true);
      const res = await api.post('/accounting/accounts/seed-defaults');
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'ডিফল্ট একাউন্টসমূহ সফলভাবে লোড করা হয়েছে' });
        fetchAccounts();
      }
    } catch (error) {
      setToast({ type: 'error', message: 'ডিফল্ট একাউন্ট লোড করতে সমস্যা হয়েছে' });
    } finally {
      setSeeding(false);
    }
  };

  // Filtered Accounts
  const filteredAccounts = useMemo(() => {
    return accounts.filter(acc => {
      if (activeTab !== 'all' && acc.type !== activeTab) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const name = (acc.name || '').toLowerCase();
        const code = (acc.code || '').toLowerCase();
        if (!name.includes(q) && !code.includes(q)) return false;
      }
      return true;
    });
  }, [accounts, activeTab, searchQuery]);

  // Aggregate Stats
  const stats = useMemo(() => {
    const counts = { Asset: 0, Liability: 0, Equity: 0, Revenue: 0, Expense: 0 };
    const balances = { Asset: 0, Liability: 0, Equity: 0, Revenue: 0, Expense: 0 };

    accounts.forEach(acc => {
      const amt = Number(acc.balance) || 0;
      if (counts[acc.type] !== undefined) {
        counts[acc.type]++;
        balances[acc.type] += amt;
      }
    });

    return { counts, balances, totalCount: accounts.length };
  }, [accounts]);

  const getTypeMeta = (type) => {
    return accountTypes.find(t => t.id === type) || accountTypes[0];
  };

  const activeTypeObj = accountTypes.find(t => t.id === formData.type) || accountTypes[4];

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
          <h1 className="page-title flex-center gap-8" style={{ fontSize: '1.65rem', fontWeight: 800 }}>
            <Layers className="text-primary" size={28} /> চার্ট অব একাউন্টস (Chart of Accounts)
          </h1>
          <p className="page-subtitle">প্রতিষ্ঠানের সকল সম্পদ, দায়, মূলধন, আয় ও ব্যয়ের হিসাব লেজার হেড পরিচালনা করুন</p>
        </div>
        {canManage && (
          <div className="flex gap-12">
            <button
              className="btn btn-secondary flex-center gap-8"
              onClick={handleSeedDefaults}
              disabled={seeding}
              title="আদর্শ মাদ্রাসার হিসাব খাতা লোড করুন"
            >
              {seeding ? <Loader size={16} className="spin" /> : <RefreshCw size={16} />}
              আদর্শ খাতা লোড
            </button>
            <button className="btn btn-primary flex-center gap-8" onClick={() => handleOpenModal(null, 'Expense')}>
              <Plus size={18} />
              নতুন একাউন্ট তৈরি
            </button>
          </div>
        )}
      </div>

      {/* 5 KPI Stat Cards */}
      <div className="grid grid-5 mb-24" style={{ gap: '14px' }}>
        {accountTypes.map((typeObj) => {
          const Icon = typeObj.icon;
          const count = stats.counts[typeObj.id] || 0;
          const bal = stats.balances[typeObj.id] || 0;
          return (
            <div
              key={typeObj.id}
              className="card cursor-pointer"
              onClick={() => setActiveTab(activeTab === typeObj.id ? 'all' : typeObj.id)}
              style={{
                padding: '16px 18px',
                borderLeft: `4px solid ${typeObj.color}`,
                background: activeTab === typeObj.id ? typeObj.bg : 'var(--bg-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted font-semibold">{typeObj.label.split(' ')[0]}</span>
                <Icon size={16} style={{ color: typeObj.color }} />
              </div>
              <div className="text-xl font-bold font-mono" style={{ color: typeObj.color }}>
                ৳ {bal.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-muted mt-4">
                {count.toLocaleString('bn-BD')} টি খাতা • {typeObj.series}
              </div>
            </div>
          );
        })}
      </div>

      {/* Search & Filter Bar */}
      <div className="card mb-20" style={{ padding: '16px 20px' }}>
        <div className="flex flex-wrap gap-16 justify-between items-center">
          {/* Tabs */}
          <div className="flex flex-wrap gap-8">
            <button
              className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setActiveTab('all')}
              style={{ borderRadius: '8px' }}
            >
              সকল খাতা ({stats.totalCount})
            </button>
            {accountTypes.map(t => (
              <button
                key={t.id}
                className={`btn btn-sm ${activeTab === t.id ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setActiveTab(t.id)}
                style={{ borderRadius: '8px' }}
              >
                {t.label.split(' ')[0]} ({stats.counts[t.id] || 0})
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="খাতার নাম বা কোড খুঁজুন..."
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
        </div>
      </div>

      {/* Table Card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <Loader className="spin text-primary" size={36} />
            <p className="text-muted text-sm">হিসাব খাতা তালিকা লোড হচ্ছে...</p>
          </div>
        ) : filteredAccounts.length === 0 ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(13, 148, 136, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
            }}>
              <BookOpen size={32} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>কোনো হিসাব খাতা পাওয়া যায়নি</h3>
            <p className="text-muted text-sm" style={{ margin: 0, textAlign: 'center', maxWidth: '420px' }}>
              {searchQuery ? 'আপনার সার্চের সাথে কোনো একাউন্ট মেলেনি।' : 'প্রতিষ্ঠানের নতুন হিসাব লেজার তৈরি করতে উপরের বাটনটিতে ক্লিক করুন।'}
            </p>
            {canManage && (
              <div className="flex gap-10 mt-8">
                <button className="btn btn-secondary btn-sm flex-center gap-4" onClick={handleSeedDefaults}>
                  <RefreshCw size={14} /> আদর্শ খাতা লোড
                </button>
                <button className="btn btn-primary btn-sm flex-center gap-4" onClick={() => handleOpenModal(null, 'Expense')}>
                  <Plus size={14} /> নতুন একাউন্ট যোগ করুন
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>হিসাব কোড</th>
                  <th>একাউন্টের নাম</th>
                  <th style={{ width: '180px' }}>ধরণ (Type)</th>
                  <th style={{ width: '120px', textAlign: 'center' }}>স্ট্যাটাস</th>
                  <th style={{ textAlign: 'right', width: '170px' }}>বর্তমান জের (Balance)</th>
                  {canManage && <th style={{ textAlign: 'center', width: '120px' }}>অ্যাকশন</th>}
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account) => {
                  const meta = getTypeMeta(account.type);
                  const Icon = meta.icon;
                  return (
                    <tr key={account._id} style={{ opacity: account.isActive ? 1 : 0.55 }}>
                      <td>
                        <span className="font-mono font-bold" style={{
                          padding: '3px 8px', borderRadius: '6px', background: 'var(--bg-tertiary)',
                          fontSize: '0.9rem', color: 'var(--text-primary)'
                        }}>
                          {account.code}
                        </span>
                      </td>

                      <td>
                        <div>
                          <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                            {account.name}
                          </strong>
                          {!account.isActive && (
                            <span className="badge badge-danger" style={{ marginLeft: '8px', fontSize: '0.7rem' }}>
                              নিষ্ক্রিয়
                            </span>
                          )}
                        </div>
                      </td>

                      <td>
                        <span className="badge flex-center gap-4" style={{
                          background: meta.bg, color: meta.color, border: `1px solid ${meta.color}40`,
                          fontSize: '0.78rem', padding: '3px 8px', width: 'fit-content'
                        }}>
                          <Icon size={12} /> {meta.label}
                        </span>
                      </td>

                      <td style={{ textAlign: 'center' }}>
                        {account.isActive ? (
                          <span className="badge badge-active" style={{ fontSize: '0.72rem', padding: '2px 6px' }}>সক্রিয়</span>
                        ) : (
                          <span className="badge badge-secondary" style={{ fontSize: '0.72rem', padding: '2px 6px' }}>বন্ধ</span>
                        )}
                      </td>

                      <td style={{ textAlign: 'right' }}>
                        <span className="font-mono font-bold" style={{ fontSize: '0.98rem', color: meta.color }}>
                          ৳ {Number(account.balance || 0).toLocaleString('en-IN')}
                        </span>
                      </td>

                      {canManage && (
                        <td style={{ textAlign: 'center' }}>
                          <div className="flex-center gap-6" style={{ justifyContent: 'center' }}>
                            <button
                              className="btn-icon btn-ghost text-primary"
                              title="এডিট করুন"
                              onClick={() => handleOpenModal(account)}
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              className="btn-icon btn-ghost text-danger"
                              title="মুছে ফেলুন"
                              onClick={() => handleDelete(account)}
                              style={{ opacity: 0.75 }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Redesigned Modal: Create & Edit Account */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '92vh', overflowY: 'auto',
            padding: '28px', borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            position: 'relative', margin: 'auto', boxSizing: 'border-box'
          }}>
            <button
              className="btn-icon btn-ghost"
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '18px', right: '18px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }} className="flex items-center gap-8">
                <BookOpen size={22} />
                {editingAccount ? 'একাউন্ট লেজার হেড এডিট করুন' : 'নতুন একাউন্ট লেজার হেড তৈরি করুন'}
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                সঠিক হিসাব গ্রুপ ও কোড নির্বাচন করে চার্ট অব অ্যাকাউন্টসে সংরক্ষণ করুন
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Step 1: Type Selection Cards */}
              <div>
                <label className="form-label font-semibold mb-8" style={{ display: 'block', fontSize: '0.88rem' }}>
                  হিসাবের ধরণ / গ্রুপ নির্বাচন করুন <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <div className="grid grid-5" style={{ gap: '8px' }}>
                  {accountTypes.map(t => {
                    const isSelected = formData.type === t.id;
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleTypeChange(t.id)}
                        disabled={!!editingAccount}
                        style={{
                          padding: '10px 8px',
                          borderRadius: '10px',
                          border: isSelected ? `2px solid ${t.color}` : '1px solid var(--border-color)',
                          background: isSelected ? t.bg : 'var(--bg-tertiary)',
                          color: isSelected ? t.color : 'var(--text-secondary)',
                          cursor: editingAccount ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '6px',
                          textAlign: 'center',
                          transition: 'all 0.15s ease',
                          opacity: editingAccount && !isSelected ? 0.4 : 1
                        }}
                      >
                        <Icon size={18} style={{ color: t.color }} />
                        <span style={{ fontSize: '0.78rem', fontWeight: 700 }}>{t.label.split(' ')[0]}</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{t.series.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Description of current selected type */}
                <div style={{ marginTop: '8px', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: activeTypeObj.color }}></span>
                  {activeTypeObj.desc}
                </div>
              </div>

              {/* Step 2: Name & Code */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    হিসাব কোড (Account Code) <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder={`যেমন: ${activeTypeObj.prefix + 1}`}
                    className="form-input font-mono font-bold"
                    style={{ height: '42px', fontSize: '0.98rem' }}
                  />
                  <div className="text-muted" style={{ fontSize: '0.72rem', marginTop: '4px' }}>
                    {activeTypeObj.series} এর ইউনিক কোড
                  </div>
                </div>

                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    একাউন্টের নাম <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="যেমন: বই-খাতা ক্রয় বা বিদ্যুৎ বিল"
                    className="form-input"
                    style={{ height: '42px', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              {/* Step 3: Quick Preset Suggestions */}
              {!editingAccount && (
                <div style={{ background: 'var(--bg-tertiary)', padding: '12px 14px', borderRadius: '10px' }}>
                  <div className="text-xs font-semibold mb-6 flex items-center gap-6" style={{ color: 'var(--text-secondary)' }}>
                    <Sparkles size={14} className="text-warning" /> এই গ্রুপের জনপ্রিয় খাতের রেডিমেড নাম (ক্লিক করুন):
                  </div>
                  <div className="flex flex-wrap gap-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeTypeObj.presets.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="btn btn-outline btn-xs"
                        onClick={() => handlePresetSelect(preset)}
                        style={{ fontSize: '0.78rem', padding: '4px 8px', borderRadius: '6px', whiteSpace: 'normal', textAlign: 'left' }}
                      >
                        + {preset}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Opening Balance (Only for new accounts) */}
              {!editingAccount && (
                <div>
                  <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                    প্রারম্ভিক জের (Opening Balance ৳) <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                  </label>
                  <input
                    type="number"
                    value={formData.balance}
                    onChange={(e) => setFormData({ ...formData, balance: parseFloat(e.target.value) || 0 })}
                    placeholder="0"
                    className="form-input font-mono"
                    style={{ height: '42px', fontSize: '0.95rem' }}
                  />
                  <div className="text-muted" style={{ fontSize: '0.72rem', marginTop: '4px' }}>
                    নতুন আর্থিক বছরের শুরুতে কোনো প্রারম্ভিক উদ্বৃত্ত থাকলে দিন, অন্যথায় ০ রাখুন
                  </div>
                </div>
              )}

              {/* Step 5: Active Status (For editing) */}
              {editingAccount && (
                <div className="flex items-center gap-10" style={{ background: 'var(--bg-tertiary)', padding: '12px 16px', borderRadius: '10px' }}>
                  <input
                    type="checkbox"
                    id="isActiveCheck"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <div>
                    <label htmlFor="isActiveCheck" className="text-sm font-semibold cursor-pointer" style={{ margin: 0, display: 'block' }}>
                      একাউন্টটি সক্রিয় (Active) রাখুন
                    </label>
                    <span className="text-xs text-muted">
                      নিষ্ক্রিয় করলে কোনো নতুন ভাউচার বা আয়ে এই খাতটি ড্রপডাউনে শো করবে না
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex justify-end gap-12 mt-12" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
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
                  {editingAccount ? 'আপডেট সংরক্ষণ করুন' : 'একাউন্ট তৈরি করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
