import React, { useState, useEffect } from 'react';
import {
  Sparkles, Plus, Trash2, Volume2, Upload, Eye, EyeOff,
  Calendar, AlertTriangle, CheckCircle2, Bell, Users,
  GraduationCap, UserCheck, Shield, Play, Square, X, Search
} from 'lucide-react';
import api from '../../api/axios';
import { toBnNumber } from '../../utils/helpers';
import { matchesSearchQuery } from '../../utils/searchUtils';
import WholeWordToggle from '../common/WholeWordToggle';

const AUDIENCE_CHOICES = [
  { value: 'all', label: 'সকলের জন্য (সবাই)', icon: Users },
  { value: 'student_guardian', label: 'ছাত্র ও অভিভাবক উভয়', icon: Shield },
  { value: 'student', label: 'শুধু ছাত্র/ছাত্রী', icon: GraduationCap },
  { value: 'guardian', label: 'শুধু অভিভাবক', icon: UserCheck },
  { value: 'teacher', label: 'শুধু শিক্ষক ও স্টাফ', icon: Users },
];

function getAudienceLabel(rawAudience) {
  const arr = Array.isArray(rawAudience) ? rawAudience : ['all'];
  if (arr.includes('all')) return 'সকলের জন্য';
  if (arr.includes('student') && arr.includes('guardian')) return 'ছাত্র ও অভিভাবক';
  if (arr.includes('student')) return 'ছাত্র/ছাত্রী';
  if (arr.includes('guardian')) return 'অভিভাবক';
  if (arr.includes('teacher')) return 'শিক্ষক ও স্টাফ';
  return arr.join(', ');
}

export default function NasihotPopupManager({ onPopupListChange }) {
  const [popups, setPopups] = useState([]);
  const [autoDueEnabled, setAutoDueEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [togglingDue, setTogglingDue] = useState(false);
  const [toast, setToast] = useState(null);
  const [previewSpeaking, setPreviewSpeaking] = useState(false);
  const [listFilter, setListFilter] = useState('all'); // 'all' | 'nasihot' | 'notice_push' | 'active'
  const [listSearch, setListSearch] = useState('');
  const [wholeWords, setWholeWords] = useState(true);

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
    setTimeout(() => setToast(null), 5000);
  };

  const formatApiError = (err, fallback) => {
    if (err?.response?.status === 404) {
      return 'সার্ভারের পপ-আপ এপিআই পাওয়া যায়নি (৪০৪) — ব্যাকএন্ড সার্ভার একবার রিস্টার্ট/ডেপ্লয় করুন';
    }
    return err?.response?.data?.message || err?.message || fallback;
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
    } catch (err) {
      showToast(formatApiError(err, 'নসিহত তালিকা লোড করতে সমস্যা হয়েছে'), 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManageData();
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
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

  const handleVoicePreview = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast('এই ব্রাউজারে লাইভ ভয়েস প্রিভিউ সাপোর্ট নেই', 'error');
      return;
    }
    if (previewSpeaking) {
      window.speechSynthesis.cancel();
      setPreviewSpeaking(false);
      return;
    }
    const text = `${formData.title || ''}। ${formData.content || ''}`.trim();
    if (!text || text === '।') {
      showToast('শোনার জন্য শিরোনাম বা মূল বক্তব্য লিখুন', 'error');
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'bn-BD';
    const voices = window.speechSynthesis.getVoices() || [];
    const bnVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('bn'));
    if (bnVoice) utter.voice = bnVoice;
    utter.onend = () => setPreviewSpeaking(false);
    utter.onerror = () => setPreviewSpeaking(false);
    setPreviewSpeaking(true);
    window.speechSynthesis.speak(utter);
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
      showToast(formatApiError(err, 'নসিহত সংরক্ষণ করতে সমস্যা হয়েছে'), 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (item) => {
    try {
      await api.patch(`/popups/${item.id}`, { isActive: !item.isActive });
      showToast(item.isActive ? 'পপ-আপ থেকে বন্ধ করা হয়েছে' : 'পপ-আপে চালু করা হয়েছে');
      fetchManageData();
    } catch (err) {
      showToast(formatApiError(err, 'স্ট্যাটাস পরিবর্তন করা যায়নি'), 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি এই পপ-আপ / নসিহতটি তালিকা থেকে মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/popups/${id}`);
      showToast('সফলভাবে মুছে ফেলা হয়েছে');
      fetchManageData();
    } catch (err) {
      showToast(formatApiError(err, 'মুছে ফেলতে সমস্যা হয়েছে'), 'error');
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
    } catch (err) {
      showToast(formatApiError(err, 'সেটিং পরিবর্তন করতে সমস্যা হয়েছে'), 'error');
    } finally {
      setTogglingDue(false);
    }
  };

  const filteredPopups = popups.filter((item) => {
    if (listFilter === 'nasihot' && item.type !== 'nasihot') return false;
    if (listFilter === 'notice_push' && item.type !== 'notice_push') return false;
    if (listFilter === 'active' && !item.isActive) return false;
    if (listSearch.trim()) {
      if (!matchesSearchQuery([item.title, item.author, item.content], listSearch, wholeWords)) return false;
    }
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {toast && (
        <div
          className="card"
          style={{
            padding: '12px 16px',
            borderLeft: `4px solid ${toast.type === 'error' ? '#dc2626' : '#059669'}`,
            background: toast.type === 'error' ? 'rgba(220,38,38,0.09)' : 'rgba(5,150,105,0.09)',
            color: toast.type === 'error' ? '#b91c1c' : '#047857',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <span>{toast.msg}</span>
          <button type="button" onClick={() => setToast(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
            <X size={16} />
          </button>
        </div>
      )}

      {/* ৪–১০ তারিখ অটো বকেয়া বেতন পপ-আপ সেটিংস কার্ড */}
      <div
        className="card"
        style={{
          padding: '18px 20px',
          borderLeft: `4px solid ${autoDueEnabled ? '#059669' : '#64748b'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1, minWidth: '250px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: autoDueEnabled ? 'rgba(5, 150, 105, 0.14)' : 'rgba(100, 116, 139, 0.12)',
              color: autoDueEnabled ? '#059669' : '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <AlertTriangle size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 700 }}>
                মাসের ৪–১০ তারিখ অটো বকেয়া বেতন পপ-আপ নোটিফিকেশন
              </h3>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 9px',
                  borderRadius: '999px',
                  background: autoDueEnabled ? 'rgba(5, 150, 105, 0.14)' : 'rgba(100, 116, 139, 0.14)',
                  color: autoDueEnabled ? '#047857' : '#475569',
                }}
              >
                {autoDueEnabled ? 'সক্রিয়' : 'বন্ধ'}
              </span>
            </div>
            <p className="text-muted" style={{ margin: '5px 0 0', fontSize: '0.84rem', lineHeight: 1.5 }}>
              চালু থাকলে প্রতি মাসের ৪ থেকে ১০ তারিখ পর্যন্ত যাদের বেতন বাকি আছে, সেই ছাত্র ও অভিভাবকের আইডিতে প্রতিদিন পপ-আপ দেখাবে। বেতন পরিশোধ হলেই অটো বন্ধ হবে।
            </p>
          </div>
        </div>

        {/* স্লাইডার টগল সুইচ + বাটন */}
        <button
          type="button"
          onClick={handleToggleAutoDue}
          disabled={togglingDue}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 14px',
            borderRadius: '12px',
            border: `1.5px solid ${autoDueEnabled ? '#059669' : 'var(--border-color)'}`,
            background: autoDueEnabled ? 'rgba(5, 150, 105, 0.1)' : 'var(--bg-secondary, rgba(148,163,184,0.08))',
            color: autoDueEnabled ? '#047857' : 'var(--text-primary)',
            fontWeight: 700,
            fontSize: '0.86rem',
            cursor: togglingDue ? 'wait' : 'pointer',
          }}
        >
          <span
            style={{
              width: '40px',
              height: '22px',
              borderRadius: '999px',
              background: autoDueEnabled ? '#059669' : '#94a3b8',
              position: 'relative',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
          >
            <span
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#ffffff',
                position: 'absolute',
                top: '3px',
                left: autoDueEnabled ? '21px' : '3px',
                transition: 'left 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
              }}
            />
          </span>
          <span>{togglingDue ? 'পরিবর্তন হচ্ছে...' : autoDueEnabled ? 'চালু আছে' : 'বন্ধ আছে'}</span>
        </button>
      </div>

      {/* নতুন নসিহত পপ-আপ তৈরি ফর্ম */}
      <div className="card" style={{ padding: '22px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            paddingBottom: '14px',
            marginBottom: '18px',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(13, 148, 136, 0.14)',
                color: '#0d9488',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={19} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.08rem', fontWeight: 700 }}>নতুন নসিহত পপ-আপ তৈরি করুন</h3>
              <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                বাংলা লেখা পোস্ট করলে পপ-আপে Play বাটনের মাধ্যমে বাংলায় পড়ে শোনাবে; চাইলে নিজস্ব অডিওও যুক্ত করতে পারেন।
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleVoicePreview}
            title="প্রকাশের আগে বাংলা ভয়েসে শুনে দেখুন"
          >
            {previewSpeaking ? <Square size={14} /> : <Play size={14} />}
            <span>{previewSpeaking ? 'প্রিভিউ বন্ধ করুন' : 'ভয়েস প্রিভিউ শুনুন'}</span>
          </button>
        </div>

        <form onSubmit={handleCreateNasihot} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <div>
              <label className="form-label" style={{ fontWeight: 600 }}>নসিহতের শিরোনাম *</label>
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
              <label className="form-label" style={{ fontWeight: 600 }}>বক্তা / উৎস (ঐচ্ছিক)</label>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label className="form-label" style={{ margin: 0, fontWeight: 600 }}>
                নসিহতের মূল বক্তব্য *
              </label>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                অক্ষর সংখ্যা: {toBnNumber(formData.content.length)}
              </span>
            </div>
            <textarea
              className="form-input"
              rows={5}
              required
              style={{
                width: '100%',
                minHeight: '130px',
                resize: 'vertical',
                lineHeight: 1.65,
                fontFamily: 'inherit',
              }}
              placeholder="এখানে নসিহতের সম্পূর্ণ বক্তব্য পরিষ্কার বাংলায় লিখুন..."
              value={formData.content}
              onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))}
            />
          </div>

          {/* আধুনিক ক্লিকযোগ্য লক্ষ্যবস্তু (Audience Pill Selector) */}
          <div>
            <label className="form-label" style={{ fontWeight: 600, marginBottom: '8px' }}>
              কারা পপ-আপটি দেখবেন (লক্ষ্যবস্তু নির্বাচন করুন)
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {AUDIENCE_CHOICES.map((opt) => {
                const Icon = opt.icon;
                const selected = formData.audience === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, audience: opt.value }))}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '9px 14px',
                      borderRadius: '10px',
                      border: `1.5px solid ${selected ? '#0d9488' : 'var(--border-color)'}`,
                      background: selected ? 'rgba(13, 148, 136, 0.14)' : 'var(--bg-input)',
                      color: selected ? '#0d9488' : 'var(--text-primary)',
                      fontWeight: selected ? 700 : 500,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <Icon size={15} />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* নিজস্ব অডিও আপলোড ড্রপ-বক্স */}
          <div>
            <label className="form-label" style={{ fontWeight: 600, marginBottom: '8px' }}>
              নিজস্ব অডিও ফাইল আপলোড (ঐচ্ছিক — না দিলে লেখা বাংলায় পড়ে শোনাবে, সর্বোচ্চ ৫MB)
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <label
                style={{
                  flex: 1,
                  minWidth: '240px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: `1.5px dashed ${formData.audioFileName ? '#059669' : 'var(--border-color)'}`,
                  background: formData.audioFileName ? 'rgba(5, 150, 105, 0.08)' : 'var(--bg-input)',
                  color: formData.audioFileName ? '#059669' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                }}
              >
                <Upload size={18} />
                <span>{formData.audioFileName || 'অডিও ফাইল নির্বাচন করতে এখানে ক্লিক করুন (MP3 / WAV / M4A)'}</span>
                <input
                  type="file"
                  accept="audio/*"
                  style={{ display: 'none' }}
                  onChange={handleAudioUpload}
                />
              </label>

              {formData.audioFileName && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setFormData((p) => ({ ...p, audioData: '', audioFileName: '' }))}
                  style={{ color: '#dc2626' }}
                >
                  <X size={15} /> অডিও সরান
                </button>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '6px' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
              style={{
                background: '#0d9488',
                borderColor: '#0d9488',
                padding: '11px 22px',
                fontSize: '0.94rem',
                fontWeight: 700,
              }}
            >
              <Plus size={17} />
              <span>{submitting ? 'প্রকাশ হচ্ছে...' : 'নসিহত সেভ ও পপ-আপে প্রকাশ করুন'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* সংরক্ষিত নসিহত ও পুশ করা নোটিশের সেভ লিস্ট */}
      <div className="card" style={{ padding: '22px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.08rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} style={{ color: '#0d9488' }} />
            <span>সংরক্ষিত নসিহত ও পপ-আপ তালিকা ({toBnNumber(popups.length)}টি)</span>
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'সবগুলো' },
              { id: 'nasihot', label: 'নসিহত' },
              { id: 'notice_push', label: 'নোটিশ পুশ' },
              { id: 'active', label: 'শুধু সক্রিয়' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                className={`btn btn-sm ${listFilter === f.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setListFilter(f.id)}
                style={listFilter === f.id ? { background: '#0d9488', borderColor: '#0d9488' } : undefined}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '40px' }}
              placeholder="শিরোনাম, বক্তা বা বক্তব্য দিয়ে খুঁজুন..."
              value={listSearch}
              onChange={(e) => setListSearch(e.target.value)}
            />
          </div>
          <WholeWordToggle checked={wholeWords} onChange={setWholeWords} />
        </div>

        {loading ? (
          <div style={{ padding: '36px', textAlign: 'center', color: 'var(--text-secondary)' }}>তালিকা লোড হচ্ছে...</div>
        ) : filteredPopups.length === 0 ? (
          <div style={{ padding: '36px', textAlign: 'center', color: 'var(--text-secondary)', borderRadius: '10px', border: '1px dashed var(--border-color)' }}>
            {popups.length === 0
              ? 'এখনো কোনো নসিহত বা পপ-আপ সংরক্ষণ করা হয়নি।'
              : 'নির্বাচিত ফিল্টার অনুযায়ী কোনো নসিহত বা পপ-আপ পাওয়া যায়নি।'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredPopups.map((item) => {
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
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${item.isActive ? 'rgba(13, 148, 136, 0.45)' : 'var(--border-color)'}`,
                    background: item.isActive ? 'rgba(13, 148, 136, 0.05)' : 'var(--bg-input)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.72rem',
                          background: isNoticePush ? 'rgba(37,99,235,0.14)' : 'rgba(13,148,136,0.16)',
                          color: isNoticePush ? '#2563eb' : '#0d9488',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {isNoticePush ? <Bell size={11} /> : <Sparkles size={11} />}
                        {isNoticePush ? 'নোটিশ থেকে পুশ' : 'নসিহত'}
                      </span>
                      <span
                        className="badge"
                        style={{
                          fontSize: '0.72rem',
                          background: 'rgba(100,116,139,0.12)',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        {getAudienceLabel(item.audience)}
                      </span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                        পোস্ট: {postDate}
                      </span>
                      {item.hasAudio && (
                        <span style={{ fontSize: '0.73rem', color: '#059669', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <Volume2 size={13} /> অডিও যুক্ত
                        </span>
                      )}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                      {item.title} {item.author ? `— ${item.author}` : ''}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '5px', lineHeight: 1.55 }}>
                      {item.content?.length > 180 ? `${item.content.slice(0, 180)}...` : item.content}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
