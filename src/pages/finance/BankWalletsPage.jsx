import { useState, useEffect } from 'react';
import { Wallet, Landmark, CreditCard, Plus, ArrowRight, Loader, Smartphone, RefreshCw, Edit, CheckCircle, AlertCircle, X } from 'lucide-react';
import api from '../../api/axios';
import { Link } from 'react-router-dom';

export default function BankWalletsPage() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [toast, setToast] = useState(null);

  // Balance Adjust Modal
  const [adjustModalOpen, setAdjustModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [newBalance, setNewBalance] = useState('');
  const [adjusting, setAdjusting] = useState(false);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/accounting/accounts');
      if (res.data.success) {
        // Filter only Asset accounts (Banks, Wallets, Cash)
        const accountsData = res.data.data?.accounts || res.data.accounts || [];
        const assetAccounts = accountsData.filter(a => a.type === 'Asset');
        setAccounts(assetAccounts);
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSyncBalances = async () => {
    if (!window.confirm('আপনি কি সকল খাতের ব্যালেন্স লাইভ লেনদেন (পেমেন্ট, আয় ও ব্যয়) অনুযায়ী পুনরায় হিসাব ও সিঙ্ক করতে চান?')) return;
    try {
      setSyncing(true);
      const res = await api.post('/accounting/accounts/recalculate-balances');
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'সকল খাতের ব্যালেন্স লেনদেন অনুযায়ী সফলভাবে হালনাগাদ করা হয়েছে' });
        fetchAccounts();
      }
    } catch (err) {
      setToast({ type: 'error', message: 'ব্যালেন্স সিঙ্ক করতে সমস্যা হয়েছে' });
    } finally {
      setSyncing(false);
    }
  };

  const handleOpenAdjust = (account) => {
    setSelectedAccount(account);
    setNewBalance(String(account.balance || 0));
    setAdjustModalOpen(true);
  };

  const handleSaveAdjust = async (e) => {
    e.preventDefault();
    if (!selectedAccount) return;
    const val = Number(newBalance);
    if (isNaN(val)) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে সঠিক ব্যালেন্স নম্বর দিন' });
      return;
    }

    try {
      setAdjusting(true);
      const res = await api.put(`/accounting/accounts/${selectedAccount._id}`, {
        balance: val
      });
      if (res.data.success) {
        setToast({ type: 'success', message: `${selectedAccount.name} এর ব্যালেন্স সফলভাবে ৳ ${val.toLocaleString('en-IN')} করা হয়েছে` });
        setAdjustModalOpen(false);
        fetchAccounts();
      }
    } catch (err) {
      setToast({ type: 'error', message: err.response?.data?.message || 'ব্যালেন্স পরিবর্তন করতে সমস্যা হয়েছে' });
    } finally {
      setAdjusting(false);
    }
  };

  const getIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('bank') || lowerName.includes('ব্যাংক')) return <Landmark size={24} />;
    if (lowerName.includes('bkash') || lowerName.includes('nagad') || lowerName.includes('rocket') || lowerName.includes('বিকাশ') || lowerName.includes('নগদ') || lowerName.includes('রকেট')) return <Smartphone size={24} />;
    if (lowerName.includes('cash') || lowerName.includes('ক্যাশ')) return <Wallet size={24} />;
    return <CreditCard size={24} />;
  };

  const getColor = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('bkash') || lowerName.includes('বিকাশ')) return '#e2136e';
    if (lowerName.includes('nagad') || lowerName.includes('নগদ')) return '#f37021';
    if (lowerName.includes('rocket') || lowerName.includes('রকেট')) return '#8c1561';
    if (lowerName.includes('bank') || lowerName.includes('ব্যাংক')) return '#3b82f6';
    if (lowerName.includes('cash') || lowerName.includes('ক্যাশ')) return '#22c55e';
    return 'var(--primary)';
  };

  return (
    <div className="page-container">
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">ব্যাংক ও ডিজিটাল ওয়ালেট</h1>
          <p className="page-subtitle">প্রতিষ্ঠানের সকল ব্যাংক একাউন্ট এবং মোবাইল ওয়ালেটের বর্তমান ব্যালেন্স</p>
        </div>
        <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="btn btn-secondary flex-center gap-6"
            onClick={handleSyncBalances}
            disabled={syncing}
            title="বাস্তব আয় ও ব্যয়ের ভিত্তিতে সকল খাতের ব্যালেন্স স্বয়ংক্রিয়ভাবে রিক্যালকুলেট করুন"
          >
            <RefreshCw size={16} className={syncing ? 'animate-spin' : ''} /> লেনদেন অনুযায়ী ব্যালেন্স সিঙ্ক
          </button>
          <Link to="/finance/chart-of-accounts" className="btn btn-primary flex-center gap-4">
            <Plus size={18} /> নতুন ফান্ড / একাউন্ট যুক্ত করুন
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex-center" style={{ minHeight: '300px' }}>
          <Loader className="spinner" size={32} />
        </div>
      ) : accounts.length === 0 ? (
        <div className="empty-state">
          <Wallet size={48} />
          <p>কোনো ব্যাংক বা ওয়ালেট একাউন্ট পাওয়া যায়নি</p>
          <Link to="/finance/chart-of-accounts" className="btn btn-primary mt-16">
            একাউন্ট তৈরি করুন
          </Link>
        </div>
      ) : (
        <div className="dashboard-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {accounts.map(account => (
            <div key={account._id} className="card" style={{ padding: '24px', borderTop: `4px solid ${getColor(account.name)}`, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    background: `${getColor(account.name)}20`, 
                    color: getColor(account.name),
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getIcon(account.name)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{account.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'Inter' }}>কোড: {account.code}</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>বর্তমান ব্যালেন্স</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Inter', color: account.balance < 0 ? 'var(--danger)' : 'inherit' }}>
                  ৳ {Number(account.balance || 0).toLocaleString('en-IN')}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '4px' }}>
                <Link 
                  to={`/finance/journal-ledger?account=${account._id}`} 
                  style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', 
                    color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 
                  }}
                >
                  লেজার <ArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleOpenAdjust(account)}
                  style={{ fontSize: '0.8rem', padding: '4px 10px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <Edit size={13} /> ব্যালেন্স পরিবর্তন
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Adjust Balance Modal */}
      {adjustModalOpen && selectedAccount && (
        <div className="modal-backdrop" onClick={() => setAdjustModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '440px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Edit size={18} style={{ color: 'var(--primary)' }} />
                  ব্যালেন্স সংশোধন / সমন্বয়
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {selectedAccount.name} ({selectedAccount.code})
                </p>
              </div>
              <button className="btn btn-secondary btn-icon" onClick={() => setAdjustModalOpen(false)} style={{ padding: '6px' }}>
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveAdjust}>
              <div style={{ background: 'var(--bg-tertiary, #f8fafc)', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block' }}>ডাটাবেজে বর্তমান ব্যালেন্স:</span>
                <strong style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                  ৳ {Number(selectedAccount.balance || 0).toLocaleString('en-IN')}
                </strong>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label className="form-label" style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                  নতুন সঠিক ব্যালেন্স (টাকা) *
                </label>
                <input 
                  type="number"
                  step="any"
                  className="form-input"
                  required
                  value={newBalance}
                  onChange={e => setNewBalance(e.target.value)}
                  placeholder="যেমন: 0 বা 5000"
                  style={{ height: '42px', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'Inter' }}
                />
              </div>

              {/* Quick preset buttons */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setNewBalance('0')}
                  style={{ flex: 1, fontSize: '0.82rem', background: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca' }}
                >
                  🔄 ০ টাকা (শূন্য) করুন
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setNewBalance(String(selectedAccount.balance || 0))}
                  style={{ fontSize: '0.82rem' }}
                >
                  রিসেট
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setAdjustModalOpen(false)}>
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary" disabled={adjusting}>
                  {adjusting ? <Loader className="spinner" size={16} /> : 'ব্যালেন্স সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
