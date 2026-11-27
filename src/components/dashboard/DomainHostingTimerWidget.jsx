import React, { useState, useEffect } from 'react';
import { Globe, Server, Clock, Edit3, Save, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { toBnNumber } from '../../utils/helpers';

function computeRemaining(expiryDate, nowMs) {
  if (!expiryDate) {
    return { configured: false, expired: false, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };
  }
  const targetMs = new Date(expiryDate).getTime();
  if (Number.isNaN(targetMs)) {
    return { configured: false, expired: false, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };
  }
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { configured: true, expired: true, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const totalDays = Math.ceil(diff / 86400000);
  return { configured: true, expired: false, days, hours, minutes, seconds, totalDays };
}

function pad2(num) {
  return String(num).padStart(2, '0');
}

export default function DomainHostingTimerWidget() {
  const { user } = useAuthStore();
  const isSuperAdmin =
    user?.userType === 'super_admin' ||
    user?.userType === 'co_super_admin' ||
    user?.adminRole === 'co_super_admin';

  const [expiries, setExpiries] = useState({ domain: null, hosting: null });
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [loading, setLoading] = useState(true);

  const [editingService, setEditingService] = useState(null); // 'domain' | 'hosting' | null
  const [formState, setFormState] = useState({ label: '', provider: '', expiryDate: '' });
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchExpiries = async () => {
    if (!isSuperAdmin) {
      setLoading(false);
      return;
    }
    try {
      const res = await api.get('/infrastructure-expiry');
      if (res.data?.success) {
        setExpiries(res.data.data || { domain: null, hosting: null });
      }
    } catch {
      // Ignore quietly if non-super-admin or network hiccup
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpiries();
  }, [isSuperAdmin]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const openEditModal = (serviceType) => {
    const current = expiries[serviceType];
    const dateValue = current?.expiryDate
      ? new Date(current.expiryDate).toISOString().slice(0, 10)
      : '';
    setFormState({
      label: current?.label || (serviceType === 'domain' ? 'annurislamicacademy.edu.bd' : 'cPanel Hosting'),
      provider: current?.provider || '',
      expiryDate: dateValue,
    });
    setErrorMsg('');
    setEditingService(serviceType);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formState.expiryDate) {
      setErrorMsg('মেয়াদ শেষ হওয়ার তারিখ নির্বাচন করুন');
      return;
    }
    setSaving(true);
    setErrorMsg('');
    try {
      const res = await api.put('/infrastructure-expiry', {
        serviceType: editingService,
        label: formState.label,
        provider: formState.provider,
        expiryDate: formState.expiryDate,
      });
      if (res.data?.success) {
        setExpiries((prev) => ({
          ...prev,
          [editingService]: res.data.data,
        }));
        setEditingService(null);
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে');
    } finally {
      setSaving(false);
    }
  };

  const renderTimerBox = (serviceType, title, Icon) => {
    const record = expiries[serviceType];
    const rem = computeRemaining(record?.expiryDate, nowMs);

    let accentColor = '#059669';
    let badgeBg = 'rgba(5, 150, 105, 0.12)';
    let statusText = 'সচল আছে';

    if (!rem.configured) {
      accentColor = '#64748b';
      badgeBg = 'rgba(100, 116, 139, 0.12)';
      statusText = 'তারিখ সেট করা হয়নি';
    } else if (rem.expired) {
      accentColor = '#dc2626';
      badgeBg = 'rgba(220, 38, 38, 0.14)';
      statusText = 'মেয়াদ শেষ';
    } else if (rem.totalDays <= 7) {
      accentColor = '#dc2626';
      badgeBg = 'rgba(220, 38, 38, 0.12)';
      statusText = `জরুরি: ${toBnNumber(rem.totalDays)} দিন বাকি`;
    } else if (rem.totalDays <= 30) {
      accentColor = '#d97706';
      badgeBg = 'rgba(217, 119, 6, 0.14)';
      statusText = `সতর্কতা: ${toBnNumber(rem.totalDays)} দিন বাকি`;
    }

    const formattedExpiry = record?.expiryDate
      ? new Date(record.expiryDate).toLocaleDateString('bn-BD', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '—';

    const units = [
      { value: pad2(rem.days), label: 'দিন', shortLabel: 'দিন' },
      { value: pad2(rem.hours), label: 'ঘণ্টা', shortLabel: 'ঘঃ' },
      { value: pad2(rem.minutes), label: 'মিনিট', shortLabel: 'মিঃ' },
      { value: pad2(rem.seconds), label: 'সেকেন্ড', shortLabel: 'সেঃ' },
    ];

    return (
      <div
        key={serviceType}
        className="card dht-card"
        style={{
          borderLeft: `4px solid ${accentColor}`,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
        }}
      >
        <div className="dht-card-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
            <div
              className="dht-icon-box"
              style={{
                borderRadius: '8px',
                background: badgeBg,
                color: accentColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={16} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="dht-title-row">
                <span className="dht-title">{title}</span>
                <span
                  className="dht-badge"
                  style={{
                    fontWeight: 700,
                    borderRadius: '999px',
                    background: badgeBg,
                    color: accentColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {rem.expired || (rem.configured && rem.totalDays <= 30) ? <AlertTriangle size={10} /> : <CheckCircle2 size={10} />}
                  {statusText}
                </span>
              </div>
              <div className="dht-meta" style={{ color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {record?.label || 'নাম সেট করা নেই'}
                {record?.provider ? ` • ${record.provider}` : ''}
                {rem.configured ? ` • মেয়াদ: ${formattedExpiry}` : ''}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-secondary dht-edit-btn"
            onClick={() => openEditModal(serviceType)}
            title="মেয়াদ সেট বা পরিবর্তন করুন"
          >
            <Edit3 size={12} />
            <span className="dht-edit-text">{rem.configured ? 'এডিট' : 'সেট করুন'}</span>
          </button>
        </div>

        {/* ডিজিটাল ঘড়ির মতো কাউন্টডাউন বক্স */}
        <div className="dht-clock-grid">
          {units.map((u) => (
            <div
              key={u.label}
              className="dht-unit-box"
              style={{
                background: 'var(--bg-secondary, rgba(15, 23, 42, 0.04))',
                border: `1px solid ${rem.expired ? 'rgba(220, 38, 38, 0.25)' : 'var(--border-color)'}`,
                textAlign: 'center',
              }}
            >
              <div
                className="dht-digit"
                style={{
                  fontFamily: 'Inter, monospace',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: accentColor,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {toBnNumber(u.value)}
              </div>
              <div className="dht-unit-label dht-unit-desktop" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                {u.label}
              </div>
              <div className="dht-unit-label dht-unit-mobile" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                {u.shortLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!isSuperAdmin || loading) return null;

  return (
    <div style={{ marginBottom: '14px' }}>
      <style>{`
        .dht-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .dht-card { padding: 10px 14px; gap: 7px; }
        .dht-card-head { display: flex; justify-content: space-between; align-items: center; gap: 6px; }
        .dht-icon-box { width: 30px; height: 30px; }
        .dht-title-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .dht-title { font-weight: 700; font-size: 0.88rem; }
        .dht-badge { font-size: 0.68rem; padding: 1px 7px; }
        .dht-meta { font-size: 0.72rem; margin-top: 1px; }
        .dht-edit-btn { padding: 4px 9px; font-size: 0.74rem; flex-shrink: 0; }
        .dht-clock-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
        .dht-unit-box { border-radius: 7px; padding: 5px 2px; }
        .dht-digit { font-size: 1.05rem; }
        .dht-unit-label { font-size: 0.66rem; margin-top: 2px; }
        .dht-unit-mobile { display: none; }
        @media (max-width: 640px) {
          .dht-grid { gap: 8px; }
          .dht-card { padding: 8px 9px; gap: 6px; }
          .dht-icon-box { display: none !important; }
          .dht-title { font-size: 0.76rem; }
          .dht-badge { font-size: 0.6rem; padding: 1px 5px; }
          .dht-meta { font-size: 0.64rem; }
          .dht-edit-btn { padding: 3px 6px; font-size: 0.68rem; }
          .dht-edit-text { display: none; }
          .dht-clock-grid { gap: 4px; }
          .dht-unit-box { border-radius: 6px; padding: 4px 1px; }
          .dht-digit { font-size: 0.86rem; }
          .dht-unit-label { font-size: 0.58rem; margin-top: 1px; }
          .dht-unit-desktop { display: none; }
          .dht-unit-mobile { display: block; }
        }
      `}</style>
      <div className="dht-grid">
        {renderTimerBox('domain', 'ডোমেইন মেয়াদ', Globe)}
        {renderTimerBox('hosting', 'হোস্টিং মেয়াদ', Server)}
      </div>

      {/* এডিট / রিনিউ মডাল */}
      {editingService && (
        <div
          onClick={() => setEditingService(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            zIndex: 1050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <form
            className="card"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSave}
            style={{ width: '100%', maxWidth: '440px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={18} style={{ color: '#059669' }} />
                <span>{editingService === 'domain' ? 'ডোমেইন মেয়াদ সেট / নবায়ন' : 'হোস্টিং মেয়াদ সেট / নবায়ন'}</span>
              </h3>
              <button type="button" className="btn btn-secondary" style={{ padding: '5px' }} onClick={() => setEditingService(null)}>
                <X size={16} />
              </button>
            </div>

            {errorMsg && (
              <div style={{ padding: '8px 12px', borderRadius: '8px', background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', fontSize: '0.84rem', fontWeight: 600 }}>
                {errorMsg}
              </div>
            )}

            <div>
              <label className="form-label">নাম / ডোমেইন / প্যাকেজ</label>
              <input
                type="text"
                className="form-input"
                placeholder={editingService === 'domain' ? 'যেমন: annurislamicacademy.edu.bd' : 'যেমন: cPanel Pro Hosting'}
                value={formState.label}
                onChange={(e) => setFormState((p) => ({ ...p, label: e.target.value }))}
              />
            </div>

            <div>
              <label className="form-label">প্রোভাইডার (ঐচ্ছিক)</label>
              <input
                type="text"
                className="form-input"
                placeholder="যেমন: Namecheap / Hostinger / BTCL"
                value={formState.provider}
                onChange={(e) => setFormState((p) => ({ ...p, provider: e.target.value }))}
              />
            </div>

            <div>
              <label className="form-label">মেয়াদ শেষ হওয়ার তারিখ *</label>
              <input
                type="date"
                className="form-input"
                required
                value={formState.expiryDate}
                onChange={(e) => setFormState((p) => ({ ...p, expiryDate: e.target.value }))}
              />
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                মেয়াদ শেষ হওয়ার ৩০ দিন, ৭ দিন ও ১ দিন আগে আপনার সুপার অ্যাডমিন আইডিতে অটোমেটিক নোটিশ ও পুশ নোটিফিকেশন যাবে।
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '4px' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setEditingService(null)}>
                বাতিল
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={saving}
                style={{ background: '#059669', borderColor: '#059669' }}
              >
                <Save size={15} />
                <span>{saving ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
