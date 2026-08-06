import { useState, useEffect } from 'react';
import { Plus, Bell, X, Trash2 } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

export default function NoticesPage() {
  const { user } = useAuthStore();
  const permissions = user?.permissions || {};
  const canManageNotice = user?.userType === 'super_admin' || user?.userType === 'co_super_admin' || user?.adminRole === 'co_super_admin' || permissions?.can_manage_notice;

  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    audience: 'all',
    priority: 'normal'
  });

  const fetchNotices = async () => {
    try {
      const res = await api.get('/notices');
      if (res.data.success) {
        setNotices(res.data.data.notices);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('শিরোনাম ও বিবরণ দেওয়া আবশ্যক');
      return;
    }
    setSubmitting(true);
    try {
      const res = await api.post('/notices', {
        ...formData,
        audience: [formData.audience]
      });
      if (res.data.success) {
        setShowModal(false);
        setFormData({ title: '', content: '', audience: 'all', priority: 'normal' });
        fetchNotices();
      }
    } catch (error) {
      console.error('Error creating notice:', error);
      alert(error.response?.data?.message || 'নোটিশ পোস্ট করতে ব্যর্থ হয়েছে');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm('আপনি কি নিশ্চিত যে এই নোটিশটি মুছতে চান?')) return;
    try {
      await api.delete(`/notices/${id}`);
      if (selectedNotice?._id === id) setSelectedNotice(null);
      fetchNotices();
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert('নোটিশ মুছতে ব্যর্থ হয়েছে');
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">নোটিশ বোর্ড</h1>
          <p className="page-subtitle">মাদ্রাসার সমস্ত ঘোষণা এবং নোটিশ</p>
        </div>
        {canManageNotice && (
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            <Plus size={16} /> নতুন নোটিশ
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex-center" style={{ padding: '60px' }}>
          <div className="spinner"></div>
        </div>
      ) : notices.length === 0 ? (
        <div className="card empty-state">
          <Bell size={48} style={{ opacity: 0.3 }} />
          <div className="empty-state-title mt-16">কোনো নোটিশ পাওয়া যায়নি</div>
        </div>
      ) : (
        <div className="grid grid-2">
          {notices.map((notice) => (
            <div key={notice._id} className="card animate-slide-up" style={{ borderLeft: `4px solid ${notice.priority === 'urgent' ? 'var(--danger)' : notice.priority === 'high' ? 'var(--warning)' : 'var(--primary)'}` }}>
              <div className="flex-between mb-16">
                <span className="text-sm text-muted">
                  {new Date(notice.publishedAt || notice.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className={`badge badge-active`}>
                    {Array.isArray(notice.audience) && notice.audience.includes('all') ? 'সকলের জন্য' : Array.isArray(notice.audience) ? notice.audience.join(', ') : notice.audience}
                  </span>
                  {canManageNotice && (
                    <button className="btn btn-ghost btn-icon btn-sm text-danger" onClick={(e) => handleDelete(notice._id, e)} title="মুছুন">
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{notice.title}</h3>
              <p className="text-muted" style={{ lineHeight: '1.6' }}>
                {notice.content.length > 150 ? notice.content.substring(0, 150) + '...' : notice.content}
              </p>
              
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => setSelectedNotice(notice)}>বিস্তারিত পড়ুন</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* নতুন নোটিশ তৈরি মোডাল */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content card" style={{ maxWidth: '550px', width: '90%' }}>
            <div className="flex-between mb-20">
              <h2>নতুন নোটিশ পোস্ট করুন</h2>
              <button className="btn btn-ghost btn-icon" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-16">
                <label className="form-label">নোটিশের শিরোনাম *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="যেমন: আগামীকালের বিশেষ ছুটি সংক্রান্ত"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-2 mb-16">
                <div className="form-group">
                  <label className="form-label">কার জন্য (Audience)</label>
                  <select
                    className="form-input form-select"
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  >
                    <option value="all">সকলের জন্য</option>
                    <option value="teacher">শুধু শিক্ষক</option>
                    <option value="student">শুধু ছাত্র/ছাত্রী</option>
                    <option value="guardian">শুধু অভিভাবক</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">গুরুত্ব (Priority)</label>
                  <select
                    className="form-input form-select"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  >
                    <option value="normal">সাধারণ (Normal)</option>
                    <option value="high">গুরুত্বপূর্ণ (High)</option>
                    <option value="urgent">জরুরি (Urgent)</option>
                  </select>
                </div>
              </div>

              <div className="form-group mb-24">
                <label className="form-label">নোটিশের বিবরণ *</label>
                <textarea
                  className="form-input"
                  rows="5"
                  placeholder="বিস্তারিত বিবরণ লিখুন..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                ></textarea>
              </div>

              <div className="flex-end gap-12">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'পোস্ট হচ্ছে...' : 'পোস্ট করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* বিস্তারিত দেখার মোডাল */}
      {selectedNotice && (
        <div className="modal-backdrop">
          <div className="modal-content card" style={{ maxWidth: '600px', width: '90%' }}>
            <div className="flex-between mb-16">
              <span className="text-sm text-muted">
                {new Date(selectedNotice.publishedAt || selectedNotice.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <button className="btn btn-ghost btn-icon" onClick={() => setSelectedNotice(null)}>
                <X size={20} />
              </button>
            </div>
            <h2 className="mb-16" style={{ fontSize: '1.4rem' }}>{selectedNotice.title}</h2>
            <div className="mb-20 text-muted" style={{ lineHeight: '1.7', whitespace: 'pre-wrap' }}>
              {selectedNotice.content}
            </div>
            <div className="flex-end">
              <button className="btn btn-secondary" onClick={() => setSelectedNotice(null)}>বন্ধ করুন</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
