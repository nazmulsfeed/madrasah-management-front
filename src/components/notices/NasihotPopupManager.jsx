import React, { useState, useEffect } from 'react';
import {
  Sparkles, Plus, Trash2, Volume2, Upload, Eye, EyeOff,
  Calendar, AlertTriangle, CheckCircle2, Bell
} from 'lucide-react';
import api from '../../api/axios';
import { toBnNumber } from '../../utils/helpers';

const AUDIENCE_OPTIONS = [
  { value: 'all', label: 'সকলের জন্য (সবাই)' },
  { value: 'student', label: 'ছাত্র/ছাত্রী' },
  { value: 'guardian', label: 'অভিভাবক' },
  { value: 'teacher', label: 'শিক্ষক ও স্টাফ' },
];

export default function NasihotPopupManager({ onPopupListChange }) {
  const [popups, setPopups] = useState([]);
  const [autoDueEnabled, setAutoDueEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [togglingDue, setTogglingDue] = useState(false);
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    audience: 'all',
    audioData: '',
    audioFileName: '',
  });

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const fetchManageData = async () => {
    setLoading(true);
    try {
      const res = await api.get('/popups/manage');
      const data = res.data?.data || {};
      setPopups(data.popups || []);
      setAutoDueEnabled(data.autoDuePopupEnabled !== undefined ? Boolean(data.autoDuePopupEnabled) : true);
      if (onPopupListChange) {
        onPopupListChange(data.pushedNoticeIds || []);
      }
    } catch {
      showToast('নসিহত তালিকা লোড করতে সমস্যা হয়েছে', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManageData();
  }, []);

  const handleAudioUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('অডিও ফাইলের সাইজ সর্বোচ্চ ৫ মেগাবাইট হতে পারবে', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        audioData: reader.result || '',
        audioFileName: file.name,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleCreateNasihot = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      showToast('শিরোনাম ও নসিহতের লেখা দেওয়া আবশ্যক', 'error');
      return;
    }
    setSubmitting(true);
    try {
      const audienceArr = formData.audience === 'student_guardian'
        ? ['student', 'guardian']
        : [formData.audience];

      const res = await api.post('/popups', {
        title: formData.title,
        author: formData.author,
        content: formData.content,
        audioData: formData.audioData,
        audience: audienceArr,
        isActive: true,
      });

      if (res.data?.success) {
        showToast('নসিহত সফলভাবে সেভ ও পপ-আপে প্রকাশ করা হয়েছে');
        setFormData({
          title: '',
          author: '',
          content: '',
          audience: 'all',
          audioData: '',
          audioFileName: '',
        });
        fetchManageData();
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (item) => {
    try {
      await api.patch(`/popups/${item.id}`, { isActive: !item.isActive });
      showToast(item.isActive ? 'পপ-আপ থেকে বন্ধ করা হয়েছে' : 'পপ-আপে চালু করা হয়েছে');
      fetchManageData();
    } catch {
      showToast('স্ট্যাটাস পরিবর্তন করা যায়নি', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি এই পপ-আপ / নসিহতটি তালিকা থেকে মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/popups/${id}`);
      showToast('সফলভাবে মুছে ফেলা হয়েছে');
      fetchManageData();
    } catch {
      showToast('মুছে ফেলতে সমস্যা হয়েছে', 'error');
    }
  };

  const handleToggleAutoDue = async () => {
    setTogglingDue(true);
    try {
      const nextVal = !autoDueEnabled;
      const res = await api.put('/popups/due-setting', { autoDuePopupEnabled: nextVal });
      if (res.data?.success) {
        setAutoDueEnabled(nextVal);
        showToast(res.data.message);
      }
    } catch {
      showToast('সেটিংস পরিবর্তন করতে সমস্যা হয়েছে', 'error');
    } finally {
      setTogglingDue(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {toast && (
        <div
          className="card"
          style={{
            padding: '10px 14px',
            borderLeft: `4px solid ${toast.type === 'error' ? '#dc2626' : '#059669'}`,
            background: toast.type === 'error' ? 'rgba(220,38,38,0.08)' : 'rgba(5,150,105,0.08)',
            fontWeight: 600,
          }}
        >
          {toast.msg}
        </div>
      )}

      {/* ৪–১০ তারিখ অটো বকেয়া বেতন পপ-আপ টগল কার্ড */}
      <div
        className="card"
        style={{
          padding: '16px',
          borderLeft: `4px solid ${autoDueEnabled ? '#059669' : '#64748b'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={18} style={{ color: autoDueEnabled ? '#d97706' : '#64748b' }} />
            <span>মাসের ৪–১০ তারিখ অটো বকেয়া বেতন পপ-আপ নোটিফিকেশন</span>
          </h3>
          <p className="text-muted" style={{ margin: '4px 0 0', fontSize: '0.82rem' }}>
            চালু থাকলে প্রতি মাসের ৪ থেকে ১০ তারিখ পর্যন্ত যাদের বেতন বাকি আছে, সেই ছাত্র ও অভিভাবকের আইডিতে প্রতিদিন পপ-আপ দেখাবে।
          </p>
        </div>

        <button
          type="button"
          className={`btn ${autoDueEnabled ? 'btn-primary' : 'btn-secondary'}`}
          disabled={togglingDue}
          onClick={handleToggleAutoDue}
          style={autoDueEnabled ? { background: '#059669', borderColor: '#059669' } : undefined}
        >
          {autoDueEnabled ? <CheckCircle2 size={16} /> : <EyeOff size={16} />}
          <span>{autoDueEnabled ? 'চালু আছে (অফ করুন)' : 'বন্ধ আছে (অন করুন)'}</span>
        </button>
      </div>

      {/* নতুন নসিহত পোস্ট ফর্ম */}
      <div className="card" style={{ padding: '18px' }}>
        <h3 style={{ margin: '0 0 14px', fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={18} style={{ color: '#0d9488' }} />
          <span>নতুন নসিহত পপ-আপ তৈরি করুন</span>
        </h3>
        <form onSubmit={handleCreateNasihot} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="grid grid-2" style={{ gap: '12px' }}>
            <div>
              <label className="form-label">নসিহতের শিরোনাম *</label>
              <input
                type="text"
                className="form-input"
                required
                placeholder="যেমন: আল্লাহ সবার এমনকি রসূলেরও উপরে"
                value={formData.title}
                onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
              />
            </div>
            <div>
              <label className="form-label">বক্তা / উৎস (ঐচ্ছিক)</label>
              <input
                type="text"
                className="form-input"
                placeholder="যেমন: মুফতী মনসূরুল হক সাহেব"
                value={formData.author}
                onChange={(e) => setFormData((p) => ({ ...p, author: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="form-label">নসিহতের মূল বক্তব্য (বাংলা লেখা — Play বাটনে ক্লিক করলে বাংলায় পড়ে শোনাবে) *</label>
            <textarea
              className="form-textarea"
              rows={4}
              required
              placeholder="এখানে নসিহতের বিস্তারিত লিখুন..."
              value={formData.content}
              onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))}
            />
          </div>

          <div className="grid grid-2" style={{ gap: '12px' }}>
            <div>
              <label className="form-label">কারা দেখবেন (লক্ষ্যবস্তু)</label>
              <select
                className="form-select"
                value={formData.audience}
                onChange={(e) => setFormData((p) => ({ ...p, audience: e.target.value }))}
              >
                {AUDIENCE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
                <option value="student_guardian">ছাত্র ও অভিভাবক উভয়</option>
              </select>
            </div>
            <div>
              <label className="form-label">নিজস্ব অডিও ফাইল আপলোড (ঐচ্ছিক, সর্বোচ্চ ৫MB)</label>
              <label className="btn btn-secondary w-full" style={{ cursor: 'pointer', justifyContent: 'center' }}>
                <Upload size={15} />
                <span>{formData.audioFileName || 'অডিও ফাইল নির্বাচন করুন (MP3/WAV)'}</span>
                <input
                  type="file"
                  accept="audio/*"
                  style={{ display: 'none' }}
                  onChange={handleAudioUpload}
                />
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '4px' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
              style={{ background: '#0d9488', borderColor: '#0d9488' }}
            >
              <Plus size={16} />
              <span>{submitting ? 'প্রকাশ হচ্ছে...' : 'পপ-আপে সেভ ও প্রকাশ করুন'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* সংরক্ষিত নসিহত ও পুশ করা নোটিশের সেভ লিস্ট */}
      <div className="card" style={{ padding: '18px' }}>
        <h3 style={{ margin: '0 0 14px', fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} style={{ color: '#0d9488' }} />
          <span>সংরক্ষিত নসিহত ও পপ-আপ তালিকা ({toBnNumber(popups.length)}টি)</span>
        </h3>

        {loading ? (
          <div style={{ padding: '30px', textAlign: 'center' }}>লোড হচ্ছে...</div>
        ) : popups.length === 0 ? (
          <div style={{ padding: '30px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            এখনো কোনো নসিহত বা পপ-আপ সংরক্ষণ করা হয়নি।
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {popups.map((item) => {
              const postDate = new Date(item.createdAt).toLocaleString('bn-BD', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              const isNoticePush = item.type === 'notice_push';

              return (
                <div
                  key={item.id}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: `1px solid ${item.isActive ? 'rgba(13, 148, 136, 0.4)' : 'var(--border-color)'}`,
                    background: item.isActive ? 'rgba(13, 148, 136, 0.04)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.7rem',
                          background: isNoticePush ? 'rgba(37,99,235,0.12)' : 'rgba(13,148,136,0.14)',
                          color: isNoticePush ? '#2563eb' : '#0d9488',
                          fontWeight: 700,
                        }}
                      >
                        {isNoticePush ? <Bell size={11} /> : <Sparkles size={11} />}
                        {isNoticePush ? 'নোটিশ থেকে পুশ' : 'নসিহত'}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        পোস্টের তারিখ: {postDate}
                      </span>
                      {item.hasAudio && (
                        <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <Volume2 size={12} /> অডিও যুক্ত
                        </span>
                      )}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.96rem' }}>
                      {item.title} {item.author ? `— ${item.author}` : ''}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {item.content?.length > 140 ? `${item.content.slice(0, 140)}...` : item.content}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <button
                      type="button"
                      className={`btn btn-sm ${item.isActive ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => handleToggleActive(item)}
                      style={item.isActive ? { background: '#059669', borderColor: '#059669' } : undefined}
                    >
                      {item.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                      <span>{item.isActive ? 'সক্রিয়' : 'বন্ধ'}</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost btn-icon btn-sm text-danger"
                      onClick={() => handleDelete(item.id)}
                      title="মুছে ফেলুন"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
