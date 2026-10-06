import { useState, useEffect, useMemo } from 'react';
import { 
  Plus, Edit, Trash2, Loader, List, Search, Heart, 
  GraduationCap, Tag, CheckCircle, AlertCircle, X, Sparkles, FolderPlus
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

const DEFAULT_SUGGESTED_CATEGORIES = [
  { name: 'পাবলিক অনুদান / Public Donation', type: 'donation', description: 'সাধারণ শুভাকাঙ্ক্ষী, মসজিদ বা দানবাক্স থেকে প্রাপ্ত দান' },
  { name: 'ব্যক্তিগত অনুদান / Private Donation', type: 'donation', description: 'নির্দিষ্ট ব্যক্তি বা শুভাকাঙ্ক্ষী কর্তৃক প্রদত্ত দান' },
  { name: 'লিল্লাহ ফান্ড / যাকাত ফান্ড', type: 'donation', description: 'লিল্লাহ বোর্ডিং ও দরিদ্র শিক্ষার্থীদের খাবারের অনুদান' },
  { name: 'ভবন নির্মাণ ও উন্নয়ন ফান্ড', type: 'donation', description: 'মাদ্রাসার নতুন ভবন বা অবকাঠামো উন্নয়নের অনুদান' },
  { name: 'দোকান বা সম্পত্তি ভাড়া', type: 'other', description: 'মাদ্রাসার মালিকানাধীন দোকান বা জমি থেকে প্রাপ্ত ভাড়া' },
];

export default function IncomeCategoriesPage() {
  const { user } = useAuthStore();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    type: 'donation',
    description: '',
  });

  const canManage = [
    'super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'
  ].includes(user?.userType) || [
    'co_super_admin', 'admin'
  ].includes(user?.adminRole);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      let res;
      try {
        res = await api.get('/finance/income-categories');
      } catch (err) {
        res = await api.get('/finance/incomes/income-categories');
      }
      if (res?.data?.success) {
        setCategories(res.data.data?.categories || res.data.categories || []);
      }
    } catch (error) {
      console.error('Fetch categories error:', error);
      setToast({ type: 'error', message: error.response?.data?.message || 'খাত তালিকা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        type: category.type,
        description: category.description || '',
      });
    } else {
      setEditingCategory(null);
      setFormData({ name: '', type: 'donation', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleApplyPreset = (preset) => {
    setFormData({
      name: preset.name,
      type: preset.type,
      description: preset.description,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setToast({ type: 'error', message: 'খাতের নাম লিখুন' });
      return;
    }
    try {
      setSubmitting(true);
      if (editingCategory) {
        let res;
        try {
          res = await api.put(`/finance/income-categories/${editingCategory._id}`, formData);
        } catch (_) {
          res = await api.put(`/finance/incomes/income-categories/${editingCategory._id}`, formData);
        }
        if (res?.data?.success) {
          setToast({ type: 'success', message: 'খাত সফলভাবে আপডেট করা হয়েছে' });
        }
      } else {
        let res;
        try {
          res = await api.post('/finance/income-categories', formData);
        } catch (_) {
          res = await api.post('/finance/incomes/income-categories', formData);
        }
        if (res?.data?.success) {
          setToast({ type: 'success', message: 'নতুন আয়ের খাত সফলভাবে তৈরি করা হয়েছে' });
        }
      }
      setIsModalOpen(false);
      fetchCategories();
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'কোনো সমস্যা হয়েছে' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই খাতটি মুছে ফেলতে চান?')) return;
    try {
      let res;
      try {
        res = await api.delete(`/finance/income-categories/${id}`);
      } catch (_) {
        res = await api.delete(`/finance/incomes/income-categories/${id}`);
      }
      if (res?.data?.success) {
        setToast({ type: 'success', message: 'খাত সফলভাবে মুছে ফেলা হয়েছে' });
        fetchCategories();
      }
    } catch (error) {
      setToast({ type: 'error', message: error.response?.data?.message || 'মুছে ফেলতে সমস্যা হয়েছে' });
    }
  };

  const filteredCategories = useMemo(() => {
    return categories.filter(c => {
      const matchesSearch = !searchQuery || 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = typeFilter === 'all' || c.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [categories, searchQuery, typeFilter]);

  const stats = useMemo(() => {
    const total = categories.length;
    const donation = categories.filter(c => c.type === 'donation').length;
    const studentFee = categories.filter(c => c.type === 'student_fee').length;
    const other = categories.filter(c => c.type === 'other').length;
    return { total, donation, studentFee, other };
  }, [categories]);

  const getTypeBadge = (type) => {
    switch (type) {
      case 'donation':
        return (
          <span className="badge badge-active flex-center gap-4" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#059669', border: '1px solid #a7f3d0' }}>
            <Heart size={13} /> দান ও অনুদান
          </span>
        );
      case 'student_fee':
        return (
          <span className="badge flex-center gap-4" style={{ background: 'rgba(2, 132, 199, 0.12)', color: '#0284c7', border: '1px solid #bae6fd' }}>
            <GraduationCap size={13} /> শিক্ষার্থী ফিস
          </span>
        );
      default:
        return (
          <span className="badge badge-warning flex-center gap-4">
            <Tag size={13} /> অন্যান্য
          </span>
        );
    }
  };

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
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <div>
          <h1 className="page-title flex-center gap-8" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
            <List className="text-primary" size={28} /> আয়ের খাত (Income Categories)
          </h1>
          <p className="page-subtitle">প্রতিষ্ঠানের সকল দান, অনুদান, ফি ও বিবিধ আয়ের খাতসমূহ পরিচালনা করুন</p>
        </div>
        {canManage && (
          <div className="flex gap-12">
            <button className="btn btn-primary flex-center gap-8" onClick={() => handleOpenModal()}>
              <Plus size={18} />
              নতুন খাত যোগ করুন
            </button>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4 mb-24" style={{ gap: '16px' }}>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid var(--primary)' }}>
          <div className="text-xs text-muted font-medium mb-4">মোট আয়ের খাত</div>
          <div className="text-2xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>{stats.total}</div>
        </div>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #10b981' }}>
          <div className="text-xs text-muted font-medium mb-4">দান ও অনুদান খাত</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#059669' }}>{stats.donation}</div>
        </div>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #0284c7' }}>
          <div className="text-xs text-muted font-medium mb-4">শিক্ষার্থী ফি খাত</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#0284c7' }}>{stats.studentFee}</div>
        </div>
        <div className="card" style={{ padding: '18px', borderLeft: '4px solid #f59e0b' }}>
          <div className="text-xs text-muted font-medium mb-4">অন্যান্য আয়ের খাত</div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#d97706' }}>{stats.other}</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card mb-20" style={{ padding: '16px' }}>
        <div className="flex flex-wrap gap-16 justify-between items-center">
          <div className="flex gap-12 flex-1" style={{ minWidth: '260px', maxWidth: '500px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '38px', height: '42px', fontSize: '0.9rem' }}
                placeholder="খাতের নাম বা বিবরণ দিয়ে খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex gap-8 flex-wrap">
            <button 
              className={`btn btn-sm ${typeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTypeFilter('all')}
            >
              সকল ({stats.total})
            </button>
            <button 
              className={`btn btn-sm ${typeFilter === 'donation' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTypeFilter('donation')}
            >
              দান ও অনুদান ({stats.donation})
            </button>
            <button 
              className={`btn btn-sm ${typeFilter === 'student_fee' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTypeFilter('student_fee')}
            >
              শিক্ষার্থী ফিস ({stats.studentFee})
            </button>
            <button 
              className={`btn btn-sm ${typeFilter === 'other' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setTypeFilter('other')}
            >
              অন্যান্য ({stats.other})
            </button>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="card table-container" style={{ padding: 0 }}>
        {loading ? (
          <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '12px' }}>
            <Loader className="animate-spin text-primary" size={36} />
            <p className="text-muted text-sm font-medium">আয়ের খাত লোড হচ্ছে...</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '14px', padding: '40px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <FolderPlus size={32} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>কোনো আয়ের খাত পাওয়া যায়নি</h3>
            <p className="text-muted text-sm" style={{ margin: 0, textAlign: 'center', maxWidth: '400px' }}>
              {searchQuery ? 'আপনার সার্চের সাথে কোনো খাত মিলেনি।' : 'মাদ্রাসার আয় ও অনুদান এন্ট্রি করার জন্য প্রথমে এখানে আয়ের খাত যোগ করুন।'}
            </p>
            {canManage && (
              <button className="btn btn-primary btn-sm flex-center gap-4" onClick={() => handleOpenModal()}>
                <Plus size={16} /> নতুন খাত তৈরি করুন
              </button>
            )}
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>#</th>
                <th>খাতের নাম</th>
                <th style={{ width: '180px' }}>ধরণ (Category Type)</th>
                <th>বিবরণ ও উদ্দেশ্য</th>
                {canManage && <th style={{ width: '120px', textAlign: 'center' }}>অ্যাকশন</th>}
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category, idx) => (
                <tr key={category._id}>
                  <td style={{ textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'Inter' }}>
                    {idx + 1}
                  </td>
                  <td>
                    <div className="font-bold text-primary" style={{ fontSize: '0.98rem' }}>
                      {category.name}
                    </div>
                  </td>
                  <td>
                    {getTypeBadge(category.type)}
                  </td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {category.description || <span className="text-muted" style={{ fontStyle: 'italic' }}>কোনো বিবরণ নেই</span>}
                  </td>
                  {canManage && (
                    <td style={{ textAlign: 'center' }}>
                      <div className="flex gap-8 justify-center">
                        <button 
                          className="btn-icon btn-ghost" 
                          title="এডিট করুন"
                          onClick={() => handleOpenModal(category)}
                          style={{ color: 'var(--primary)' }}
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="btn-icon btn-ghost" 
                          title="মুছে ফেলুন"
                          style={{ color: 'var(--danger)' }}
                          onClick={() => handleDelete(category._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '540px', padding: '28px',
            borderRadius: '16px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }}>
                {editingCategory ? 'আয়ের খাত সংশোধন করুন' : 'নতুন আয়ের খাত যোগ করুন'}
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                সঠিক নাম ও ক্যাটাগরি ধরণ নির্বাচন করে সংরক্ষণ করুন
              </p>
            </div>

            {/* Quick Suggestions for new categories */}
            {!editingCategory && (
              <div style={{ marginBottom: '18px', background: 'var(--bg-tertiary)', padding: '12px 14px', borderRadius: '10px' }}>
                <div className="flex items-center gap-6 text-xs font-bold text-primary mb-8">
                  <Sparkles size={14} /> প্রয়োজনীয় খাতের রেডিমেড সাজেশন (ক্লিক করুন):
                </div>
                <div className="flex flex-wrap gap-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {DEFAULT_SUGGESTED_CATEGORIES.map((preset, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', whiteSpace: 'normal', textAlign: 'left' }}
                    >
                      + {preset.name.split('/')[0]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  খাতের নাম <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="যেমন: পাবলিক অনুদান, ব্যক্তিগত দান, দোকান ভাড়া"
                  className="form-input"
                  style={{ height: '42px', fontSize: '0.95rem' }}
                />
              </div>
              
              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  খাতের ধরণ <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="form-select form-input"
                  style={{ height: '42px', fontSize: '0.95rem' }}
                >
                  <option value="donation">দান ও অনুদান (Donation)</option>
                  <option value="other">অন্যান্য আয় (Other Incomes)</option>
                  <option value="student_fee">শিক্ষার্থী ফিস (Student Fee)</option>
                </select>
                <span className="text-xs text-muted" style={{ display: 'block', marginTop: '4px' }}>
                  * পাবলিক বা ব্যক্তিগত যেকোনো অনুদানের জন্য &apos;দান ও অনুদান&apos; নির্বাচন করুন।
                </span>
              </div>

              <div>
                <label className="form-label font-semibold mb-6" style={{ display: 'block', fontSize: '0.88rem' }}>
                  বিবরণ ও উদ্দেশ্য <span className="text-muted" style={{ fontWeight: 400 }}>(ঐচ্ছিক)</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="এই খাতের টাকা কোন উদ্দেশ্যে ব্যবহৃত হয় বা কোথা থেকে আসে..."
                  className="form-input"
                  rows="3"
                  style={{ fontSize: '0.9rem', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader className="animate-spin" size={16} /> সংরক্ষণ হচ্ছে...
                    </>
                  ) : (
                    'সংরক্ষণ করুন'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
