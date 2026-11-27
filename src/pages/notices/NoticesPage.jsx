import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Plus, Bell, X, Trash2, Edit, FileText, Sparkles, Megaphone } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import AuditBadge from '../../components/common/AuditBadge';
import PhysicalNoticePad from '../../components/notices/PhysicalNoticePad';
import NasihotPopupManager from '../../components/notices/NasihotPopupManager';
import { getMadrasahInfo } from '../../utils/helpers';
import { SECTION_OPTIONS } from '../../utils/constants';

const DEFAULT_FILTERS = {
  classLevel: '',
  section: '',
  branch: '',
  department: '',
  residentialStatus: ''
};

const DEPARTMENT_OPTIONS = [
  'মক্তব বিভাগ',
  'নাজেরা বিভাগ',
  'হিফজ বিভাগ',
  'নুরানী বিভাগ',
  'উর্দু জামাত',
  'তাইসীর জামাত',
  'মিযান মুনশায়িব জামাত'
];

const RESIDENTIAL_LABELS = {
  residential: 'আবাসিক',
  'non-residential': 'অনাবাসিক',
  day_care: 'ডে-কেয়ার'
};

function parseAudienceData(rawAudience) {
  let parsed = rawAudience;
  if (typeof parsed === 'string') {
    try { parsed = JSON.parse(parsed); } catch { parsed = [parsed]; }
  }
  if (Array.isArray(parsed)) {
    return { roles: parsed.length ? parsed : ['all'], filters: { ...DEFAULT_FILTERS } };
  }
  if (parsed && typeof parsed === 'object') {
    const roles = Array.isArray(parsed.roles) ? parsed.roles : ['student'];
    const filters = { ...DEFAULT_FILTERS, ...(parsed.filters || {}) };
    return { roles, filters };
  }
  return { roles: ['all'], filters: { ...DEFAULT_FILTERS } };
}

function formatAudienceBadge(rawAudience) {
  const { roles, filters } = parseAudienceData(rawAudience);
  let roleLabel = 'সকলের জন্য';
  if (roles.includes('all')) roleLabel = 'সকলের জন্য';
  else if (roles.includes('student') && roles.includes('guardian')) roleLabel = 'ছাত্র ও অভিভাবক';
  else if (roles.includes('student')) roleLabel = 'শুধু ছাত্র/ছাত্রী';
  else if (roles.includes('guardian')) roleLabel = 'শুধু অভিভাবক';
  else if (roles.includes('teacher')) roleLabel = 'শুধু শিক্ষক';
  else roleLabel = roles.join(', ');

  const parts = [roleLabel];
  if (filters.className) parts.push(filters.className);
  if (filters.section) parts.push(`সেকশন: ${filters.section}`);
  if (filters.branchName) parts.push(filters.branchName);
  if (filters.department) parts.push(filters.department);
  if (filters.residentialStatus) parts.push(RESIDENTIAL_LABELS[filters.residentialStatus] || filters.residentialStatus);
  return parts.join(' • ');
}

export default function NoticesPage() {
  const { user } = useAuthStore();
  const location = useLocation();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const permissions = user?.permissions || {};
  const canManageNotice = user?.userType === 'super_admin' || user?.userType === 'co_super_admin' || user?.adminRole === 'co_super_admin' || permissions?.can_manage_notice;
  const isSuperOrCoSuper = user?.userType === 'super_admin' || user?.userType === 'co_super_admin' || user?.adminRole === 'co_super_admin';

  const [activeTab, setActiveTab] = useState('digital'); // 'digital' | 'physical' | 'nasihot'
  const [pushedNoticeIds, setPushedNoticeIds] = useState([]);
  const [pushingNoticeId, setPushingNoticeId] = useState(null);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [classes, setClasses] = useState([]);
  const [branches, setBranches] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    audience: 'all',
    priority: 'normal',
    filters: { ...DEFAULT_FILTERS }
  });

  useEffect(() => {
    if (!canManageNotice) return;
    const fetchFilterOptions = async () => {
      try {
        const [resClasses, resBranches] = await Promise.all([
          api.get('/students/classes').catch(() => ({ data: {} })),
          api.get('/students/branches').catch(() => ({ data: {} }))
        ]);
        if (resClasses.data?.success) {
          setClasses(resClasses.data.data?.classes || resClasses.data.data || []);
        }
        if (resBranches.data?.success) {
          setBranches(resBranches.data.data?.branches || resBranches.data.data || []);
        }
      } catch (err) {
        console.error('Error loading notice filter options:', err);
      }
    };
    fetchFilterOptions();
  }, [canManageNotice]);

  const fetchNotices = async () => {
    try {
      const res = await api.get('/notices', { params: { includePhysical: 'true' } });
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

  useEffect(() => {
    if (!isSuperOrCoSuper) return;
    api.get('/popups/manage')
      .then((res) => {
        setPushedNoticeIds(res.data?.data?.pushedNoticeIds || []);
      })
      .catch(() => {});
  }, [isSuperOrCoSuper]);

  const handleTogglePopupPush = async (notice, e) => {
    e.stopPropagation();
    const id = String(notice._id || notice.id);
    setPushingNoticeId(id);
    try {
      const res = await api.post(`/popups/push-notice/${id}`);
      if (res.data?.success) {
        const isInPopup = Boolean(res.data.data?.isInPopup);
        setPushedNoticeIds((prev) =>
          isInPopup ? [...new Set([...prev, id])] : prev.filter((x) => x !== id)
        );
        alert(res.data.message || (isInPopup ? 'নোটিশটি পপ-আপে যুক্ত হয়েছে' : 'পপ-আপ থেকে সরানো হয়েছে'));
      }
    } catch (err) {
      alert(err.response?.data?.message || 'পপ-আপে পাঠাতে সমস্যা হয়েছে');
    } finally {
      setPushingNoticeId(null);
    }
  };

  // 'বিস্তারিত পড়ুন' চাপলে নোটিশটি দেখা এবং ডাটাবেজে পড়া হয়েছে হিসেবে মার্ক করা
  const handleOpenNotice = (notice) => {
    setSelectedNotice(notice);
    if (!notice.isSeen) {
      const id = String(notice._id || notice.id);
      setNotices(prev => prev.map(n => String(n._id || n.id) === id ? { ...n, isSeen: true } : n));
      api.post(`/notices/${id}/seen`).catch(console.error);
      window.dispatchEvent(new CustomEvent('notice-seen-updated', { detail: { noticeId: id } }));
    }
  };

  // যদি ড্রপডাউন থেকে কোনো নির্দিষ্ট নোটিশে ক্লিক করে আসা হয়, তবে স্বয়ংক্রিয়ভাবে সেটি ওপেন করা
  useEffect(() => {
    if (location.state?.openNoticeId && notices.length > 0) {
      const target = notices.find(n => String(n._id || n.id) === String(location.state.openNoticeId));
      if (target) {
        handleOpenNotice(target);
      }
    }
  }, [location.state?.openNoticeId, notices.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('শিরোনাম ও বিবরণ দেওয়া আবশ্যক');
      return;
    }
    setSubmitting(true);
    try {
      let res;
      const roles = formData.audience === 'student_guardian'
        ? ['student', 'guardian']
        : [formData.audience];

      const isStudentTarget = ['student', 'guardian', 'student_guardian'].includes(formData.audience);
      const rawFilters = formData.filters || {};
      const hasFilters = isStudentTarget && Object.values(rawFilters).some(v => v && String(v).trim() !== '');

      let audiencePayload = roles;
      if (hasFilters) {
        const cleanFilters = {};
        if (rawFilters.classLevel) {
          cleanFilters.classLevel = rawFilters.classLevel;
          const clsObj = classes.find(c => String(c._id) === String(rawFilters.classLevel));
          if (clsObj?.name) cleanFilters.className = clsObj.name;
        }
        if (rawFilters.section) cleanFilters.section = rawFilters.section;
        if (rawFilters.branch) {
          cleanFilters.branch = rawFilters.branch;
          const brObj = branches.find(b => String(b._id) === String(rawFilters.branch));
          if (brObj?.name) cleanFilters.branchName = brObj.name;
        }
        if (rawFilters.department) cleanFilters.department = rawFilters.department;
        if (rawFilters.residentialStatus) cleanFilters.residentialStatus = rawFilters.residentialStatus;
        audiencePayload = { roles, filters: cleanFilters };
      }

      const payload = {
        title: formData.title,
        content: formData.content,
        priority: formData.priority,
        audience: audiencePayload
      };
      
      if (isEditing && editId) {
        res = await api.put(`/notices/${editId}`, payload);
      } else {
        res = await api.post('/notices', payload);
      }
      
      if (res.data.success) {
        setShowModal(false);
        setFormData({ title: '', content: '', audience: 'all', priority: 'normal', filters: { ...DEFAULT_FILTERS } });
        setIsEditing(false);
        setEditId(null);
        fetchNotices();
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      alert(error.response?.data?.message || 'নোটিশ সংরক্ষণ করতে ব্যর্থ হয়েছে');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditClick = (notice, e) => {
    e.stopPropagation();
    const { roles, filters } = parseAudienceData(notice.audience);
    let audienceVal = 'all';
    if (roles.includes('student') && roles.includes('guardian')) audienceVal = 'student_guardian';
    else if (roles[0]) audienceVal = roles[0];

    setFormData({
      title: notice.title,
      content: notice.content,
      audience: audienceVal,
      priority: notice.priority,
      filters: { ...DEFAULT_FILTERS, ...filters }
    });
    setEditId(notice._id);
    setIsEditing(true);
    setShowModal(true);
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

  const digitalNotices = notices.filter(n => !parseAudienceData(n.audience).roles.includes('physical_board'));
  const physicalNotices = notices.filter(n => parseAudienceData(n.audience).roles.includes('physical_board'));

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">নোটিশ বোর্ড</h1>
          <p className="page-subtitle">শাখা: {branchName} • মাদ্রাসার সমস্ত ঘোষণা এবং নোটিশ</p>
        </div>
        {canManageNotice && activeTab === 'digital' && (
          <button className="btn btn-primary" onClick={() => {
            setFormData({ title: '', content: '', audience: 'all', priority: 'normal', filters: { ...DEFAULT_FILTERS } });
            setIsEditing(false);
            setEditId(null);
            setShowModal(true);
          }}>
            <Plus size={16} /> নতুন নোটিশ
          </button>
        )}
      </div>

      {canManageNotice && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`btn ${activeTab === 'digital' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('digital')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Bell size={16} />
            <span>ডিজিটাল নোটিশ বোর্ড ({digitalNotices.length})</span>
          </button>
          <button
            type="button"
            className={`btn ${activeTab === 'physical' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('physical')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <FileText size={16} />
            <span>ফিজিক্যাল নোটিশ প্যাড (প্রিন্ট) ({physicalNotices.length})</span>
          </button>
          {isSuperOrCoSuper && (
            <button
              type="button"
              className={`btn ${activeTab === 'nasihot' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('nasihot')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                ...(activeTab === 'nasihot' ? { background: '#0d9488', borderColor: '#0d9488' } : {}),
              }}
            >
              <Sparkles size={16} />
              <span>নসিহত ও পপ-আপ</span>
            </button>
          )}
        </div>
      )}

      {activeTab === 'nasihot' && isSuperOrCoSuper ? (
        <NasihotPopupManager onPopupListChange={(ids) => setPushedNoticeIds(ids)} />
      ) : activeTab === 'physical' && canManageNotice ? (
        <PhysicalNoticePad physicalNotices={physicalNotices} onRefresh={fetchNotices} />
      ) : loading ? (
        <div className="flex-center" style={{ padding: '60px' }}>
          <div className="spinner"></div>
        </div>
      ) : digitalNotices.length === 0 ? (
        <div className="card empty-state">
          <Bell size={48} style={{ opacity: 0.3 }} />
          <div className="empty-state-title mt-16">কোনো নোটিশ পাওয়া যায়নি</div>
        </div>
      ) : (
        <div className="grid grid-2">
          {digitalNotices.map((notice) => (
            <div key={notice._id} className="card animate-slide-up" style={{ borderLeft: `4px solid ${notice.priority === 'urgent' ? 'var(--danger)' : notice.priority === 'high' ? 'var(--warning)' : 'var(--primary)'}` }}>
              <div className="flex-between mb-16">
                <span className="text-sm text-muted">
                  {new Date(notice.publishedAt || notice.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {!notice.isSeen && (
                    <span 
                      className="badge badge-danger" 
                      style={{ 
                        fontSize: '0.72rem', 
                        padding: '2px 8px',
                        background: 'rgba(239, 68, 68, 0.12)',
                        color: 'var(--danger)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        fontWeight: 700
                      }}
                    >
                      নতুন
                    </span>
                  )}
                  <span className={`badge badge-active`}>
                    {formatAudienceBadge(notice.audience)}
                  </span>
                  {isSuperOrCoSuper && (() => {
                    const nid = String(notice._id || notice.id);
                    const inPopup = pushedNoticeIds.includes(nid);
                    return (
                      <button
                        type="button"
                        className={`btn btn-sm ${inPopup ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={(e) => handleTogglePopupPush(notice, e)}
                        disabled={pushingNoticeId === nid}
                        title={inPopup ? 'পপ-আপে চালু আছে — সরাতে ক্লিক করুন' : 'পপ-আপে পাঠান'}
                        style={{
                          padding: '3px 8px',
                          fontSize: '0.72rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          ...(inPopup ? { background: '#0d9488', borderColor: '#0d9488' } : {}),
                        }}
                      >
                        <Megaphone size={13} />
                        <span>{inPopup ? 'পপ-আপে আছে' : 'পপ-আপে দিন'}</span>
                      </button>
                    );
                  })()}
                  {canManageNotice && (
                    <>
                      <button className="btn btn-ghost btn-icon btn-sm text-primary" onClick={(e) => handleEditClick(notice, e)} title="এডিট করুন">
                        <Edit size={16} />
                      </button>
                      <button className="btn btn-ghost btn-icon btn-sm text-danger" onClick={(e) => handleDelete(notice._id, e)} title="মুছুন">
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{notice.title}</h3>
              <p className="text-muted" style={{ lineHeight: '1.6' }}>
                {notice.content.length > 150 ? notice.content.substring(0, 150) + '...' : notice.content}
              </p>
              
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                {notice.publishedByUser ? (
                  <AuditBadge 
                    user={notice.publishedByUser} 
                    label="প্রকাশক" 
                    variant="compact" 
                  />
                ) : <span />}
                <button className="btn btn-secondary btn-sm" onClick={() => handleOpenNotice(notice)}>বিস্তারিত পড়ুন</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* নতুন নোটিশ তৈরি মোডাল */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content card" style={{ maxWidth: '640px', width: '92%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex-between mb-20">
              <h2>{isEditing ? 'নোটিশ এডিট করুন' : 'নতুন নোটিশ পোস্ট করুন'}</h2>
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
                    <option value="student_guardian">ছাত্র ও অভিভাবক উভয়</option>
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

              {['student', 'guardian', 'student_guardian'].includes(formData.audience) && (
                <div
                  className="mb-16"
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-tertiary, rgba(148, 163, 184, 0.08))'
                  }}
                >
                  <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block', fontSize: '0.85rem' }}>
                    নির্দিষ্ট শিক্ষার্থী ফিল্টার (ঐচ্ছিক — খালি রাখলে সবার জন্য যাবে)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))', gap: '8px' }}>
                    <select
                      className="form-input form-select"
                      style={{ fontSize: '0.82rem', padding: '6px 28px 6px 10px' }}
                      value={formData.filters?.classLevel || ''}
                      onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, classLevel: e.target.value } })}
                    >
                      <option value="">সকল শ্রেণি</option>
                      {classes.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>

                    <select
                      className="form-input form-select"
                      style={{ fontSize: '0.82rem', padding: '6px 28px 6px 10px' }}
                      value={formData.filters?.section || ''}
                      onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, section: e.target.value } })}
                    >
                      <option value="">সকল সেকশন</option>
                      {SECTION_OPTIONS.map((sec, idx) => (
                        <option key={idx} value={sec}>{sec}</option>
                      ))}
                    </select>

                    <select
                      className="form-input form-select"
                      style={{ fontSize: '0.82rem', padding: '6px 28px 6px 10px' }}
                      value={formData.filters?.branch || ''}
                      onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, branch: e.target.value } })}
                    >
                      <option value="">সকল শাখা</option>
                      {branches.filter(b => b.name !== 'হিফজ শাখা').map(b => (
                        <option key={b._id} value={b._id}>{b.name}</option>
                      ))}
                    </select>

                    <select
                      className="form-input form-select"
                      style={{ fontSize: '0.82rem', padding: '6px 28px 6px 10px' }}
                      value={formData.filters?.department || ''}
                      onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, department: e.target.value } })}
                    >
                      <option value="">সকল বিভাগ</option>
                      {DEPARTMENT_OPTIONS.map(dep => (
                        <option key={dep} value={dep}>{dep}</option>
                      ))}
                    </select>

                    <select
                      className="form-input form-select"
                      style={{ fontSize: '0.82rem', padding: '6px 28px 6px 10px' }}
                      value={formData.filters?.residentialStatus || ''}
                      onChange={(e) => setFormData({ ...formData, filters: { ...formData.filters, residentialStatus: e.target.value } })}
                    >
                      <option value="">সকল আবাসন</option>
                      <option value="residential">আবাসিক</option>
                      <option value="non-residential">অনাবাসিক</option>
                      <option value="day_care">ডে-কেয়ার</option>
                    </select>
                  </div>
                </div>
              )}

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
                  {submitting ? 'সংরক্ষণ হচ্ছে...' : (isEditing ? 'আপডেট করুন' : 'পোস্ট করুন')}
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
            <div className="flex-between" style={{ alignItems: 'center', marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '12px' }}>
              {selectedNotice.publishedByUser ? (
                <AuditBadge 
                  user={selectedNotice.publishedByUser} 
                  date={selectedNotice.publishedAt || selectedNotice.createdAt}
                  label="প্রকাশক" 
                  variant="badge" 
                />
              ) : <span />}
              <button className="btn btn-secondary" onClick={() => setSelectedNotice(null)}>বন্ধ করুন</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
