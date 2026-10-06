import { useState, useEffect, useMemo, useRef } from 'react';
import {
  HandCoins, Plus, Search, Filter, Trash2, Edit3, X, Check,
  AlertCircle, Loader, RefreshCw, CheckCircle, AlertTriangle,
  User, Users, Banknote, TrendingDown, ChevronDown, CheckCheck,
  ArrowRight, ShieldCheck, DollarSign
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo } from '../../utils/helpers';

const TODAY = new Date().toISOString().slice(0, 10);

const PERSON_TYPE_LABELS = {
  staff: 'শিক্ষক / স্টাফ',
  other: 'অন্যান্য',
};

const STATUS_LABELS = {
  pending: { label: 'পেন্ডিং', cls: 'badge-danger' },
  partially_adjusted: { label: 'আংশিক সমন্বয়', cls: 'badge-warning' },
  adjusted: { label: 'সম্পূর্ণ সমন্বয়', cls: 'badge-success' },
};

const EMPTY_FORM = {
  personType: 'staff',
  personName: '',
  amount: '',
  date: TODAY,
  reason: '',
};

// ── Staff Name Autocomplete Component ─────────────────────────
function StaffAutocomplete({ value, onChange, staffList, disabled }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value || '');
  const wrapperRef = useRef(null);

  useEffect(() => { setQuery(value || ''); }, [value]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return staffList.slice(0, 12);
    const q = query.toLowerCase();
    return staffList.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.designation || '').toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query, staffList]);

  const handleSelect = (name) => {
    setQuery(name);
    onChange(name);
    setOpen(false);
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
    onChange(e.target.value);
    setOpen(true);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <User size={15} style={{
          position: 'absolute', left: '11px', top: '50%',
          transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none'
        }} />
        <input
          type="text"
          value={query}
          onChange={handleInput}
          onFocus={() => setOpen(true)}
          className="form-input"
          style={{ paddingLeft: '34px', paddingRight: '32px', height: '40px' }}
          placeholder="নাম টাইপ করুন বা তালিকা থেকে বেছে নিন..."
          disabled={disabled}
          autoComplete="off"
          required
        />
        <ChevronDown size={14} style={{
          position: 'absolute', right: '11px', top: '50%',
          transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none'
        }} />
      </div>

      {open && filtered.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 9999,
          background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
          borderRadius: '8px', boxShadow: 'var(--shadow-lg)',
          maxHeight: '220px', overflowY: 'auto', marginTop: '4px',
        }}>
          {filtered.map((s, i) => (
            <div
              key={i}
              onMouseDown={() => handleSelect(s.name)}
              style={{
                padding: '9px 14px', cursor: 'pointer', display: 'flex',
                alignItems: 'center', gap: '10px', fontSize: '0.88rem',
                borderBottom: i < filtered.length - 1 ? '1px solid var(--border-color)' : 'none',
              }}
              className="hover-bg"
            >
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(99,102,241,0.12)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <User size={13} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{s.name}</div>
                {s.designation && (
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{s.designation}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────
export default function AdvanceManagementPage() {
  const { user } = useAuthStore();
  const { branchName } = getMadrasahInfo(user);

  const [advances, setAdvances] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal: Add / Edit Advance
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAdvance, setEditingAdvance] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Modal: Adjust Advance (সমন্বয় মডাল)
  const [adjustModalOpen, setAdjustModalOpen] = useState(false);
  const [adjustingAdvance, setAdjustingAdvance] = useState(null);
  const [adjustAmountInput, setAdjustAmountInput] = useState('');
  const [adjustNote, setAdjustNote] = useState('');

  // Modal: Delete Confirm
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const canManage = ['super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'].includes(user?.userType)
    || ['super_admin', 'co_super_admin', 'admin'].includes(user?.adminRole);

  const showToast = (text, type = 'success') => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ── Fetch Staff List ───────────────────────────────────────
  const fetchStaffList = async () => {
    try {
      const [teacherRes, userRes] = await Promise.allSettled([
        api.get('/teachers', { params: { limit: 500, status: 'active' } }),
        api.get('/users', { params: { limit: 500 } }),
      ]);

      const combined = new Map();

      if (teacherRes.status === 'fulfilled' && teacherRes.value.data?.data) {
        const teachers = teacherRes.value.data.data.teachers || teacherRes.value.data.data || [];
        teachers.forEach(t => {
          const name = t.name || t.fullName || `${t.firstName || ''} ${t.lastName || ''}`.trim();
          if (name) combined.set(name, { name, designation: t.designation || 'শিক্ষক' });
        });
      }

      if (userRes.status === 'fulfilled' && userRes.value.data?.data) {
        const users = userRes.value.data.data.users || userRes.value.data.data || [];
        users.forEach(u => {
          if (['student', 'guardian', 'parent'].includes(u.userType)) return;
          const name = `${u.firstName || ''} ${u.lastName || ''}`.trim() || u.username || '';
          if (name && !combined.has(name)) {
            const desig = u.userType === 'principal' ? 'প্রিন্সিপাল'
              : u.userType === 'accountant' ? 'হিসাবরক্ষক'
              : u.userType === 'teacher' ? 'শিক্ষক'
              : u.userType === 'hifz_teacher' ? 'হিফজ শিক্ষক'
              : u.designation || 'স্টাফ';
            combined.set(name, { name, designation: desig });
          }
        });
      }

      setStaffList([...combined.values()].sort((a, b) => a.name.localeCompare(b.name, 'bn')));
    } catch {
      // ignore
    }
  };

  // ── Fetch Advances ─────────────────────────────────────────
  const fetchAdvances = async () => {
    try {
      setLoading(true);
      const res = await api.get('/finance/advances');
      if (res.data?.success) setAdvances(res.data.data?.advances || []);
    } catch (err) {
      showToast(err?.response?.data?.message || 'ডেটা লোড করতে সমস্যা হয়েছে', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvances();
    fetchStaffList();
  }, []);

  // ── Stats ──────────────────────────────────────────────────
  const stats = useMemo(() => {
    const totalAmount = advances.reduce((s, a) => s + Number(a.amount || 0), 0);
    const totalAdjusted = advances.reduce((s, a) => s + Number(a.adjustedAmount || 0), 0);
    return {
      total: advances.length,
      totalAmount,
      totalAdjusted,
      totalDue: totalAmount - totalAdjusted,
      pending: advances.filter(a => a.status === 'pending').length,
      partial: advances.filter(a => a.status === 'partially_adjusted').length,
      adjusted: advances.filter(a => a.status === 'adjusted').length,
    };
  }, [advances]);

  // ── Filter ─────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...advances];
    if (typeFilter !== 'all') list = list.filter(a => a.personType === typeFilter);
    if (statusFilter !== 'all') list = list.filter(a => a.status === statusFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(a =>
        a.personName?.toLowerCase().includes(q) ||
        a.reason?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [advances, typeFilter, statusFilter, searchQuery]);

  // ── Helpers ────────────────────────────────────────────────
  const pendingDue = (adv) => Math.max(0, Number(adv?.amount || 0) - Number(adv?.adjustedAmount || 0));

  // ── Add/Edit Modal Handlers ────────────────────────────────
  const openAdd = () => {
    setEditingAdvance(null);
    setFormData(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEdit = (adv) => {
    setEditingAdvance(adv);
    setFormData({
      personType: adv.personType === 'student' ? 'staff' : adv.personType,
      personName: adv.personName,
      amount: String(adv.amount),
      date: adv.date ? new Date(adv.date).toISOString().slice(0, 10) : TODAY,
      reason: adv.reason || '',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingAdvance(null);
    setFormData(EMPTY_FORM);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.personName.trim() || !formData.amount || Number(formData.amount) <= 0) {
      showToast('নাম ও পরিমাণ সঠিকভাবে দিন', 'error');
      return;
    }
    try {
      setSubmitting(true);
      if (editingAdvance) {
        await api.put(`/finance/advances/${editingAdvance._id}`, { ...formData, amount: Number(formData.amount) });
        showToast('অগ্রিম তথ্য আপডেট হয়েছে');
      } else {
        await api.post('/finance/advances', { ...formData, amount: Number(formData.amount) });
        showToast('নতুন অগ্রিম সফলভাবে যোগ করা হয়েছে');
      }
      closeModal();
      fetchAdvances();
    } catch (err) {
      showToast(err?.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // ── Adjustment Modal Handlers (সমন্বয় সুবিধা) ──────────────
  const openAdjust = (adv) => {
    setAdjustingAdvance(adv);
    const due = pendingDue(adv);
    setAdjustAmountInput(String(due));
    setAdjustNote('');
    setAdjustModalOpen(true);
  };

  const closeAdjust = () => {
    setAdjustModalOpen(false);
    setAdjustingAdvance(null);
    setAdjustAmountInput('');
    setAdjustNote('');
  };

  const handleSaveAdjustment = async (e) => {
    e.preventDefault();
    if (!adjustingAdvance) return;

    const addAmount = Number(adjustAmountInput);
    if (isNaN(addAmount) || addAmount <= 0) {
      showToast('সঠিক সমন্বয়ের পরিমাণ দিন', 'error');
      return;
    }

    const currentAdjusted = Number(adjustingAdvance.adjustedAmount || 0);
    const totalAmount = Number(adjustingAdvance.amount || 0);
    const maxAdjustable = totalAmount - currentAdjusted;

    if (addAmount > maxAdjustable) {
      showToast(`সমন্বয় বকেয়ার চেয়ে বেশি হতে পারে না (সর্বোচ্চ: ৳${maxAdjustable.toLocaleString('en-IN')})`, 'error');
      return;
    }

    const newAdjustedTotal = currentAdjusted + addAmount;

    try {
      setSubmitting(true);
      const noteAppend = adjustNote.trim() ? ` [সমন্বয়: ৳${addAmount} - ${adjustNote.trim()}]` : '';
      const updatedReason = `${adjustingAdvance.reason || ''}${noteAppend}`.trim();

      await api.put(`/finance/advances/${adjustingAdvance._id}`, {
        adjustedAmount: newAdjustedTotal,
        reason: updatedReason,
      });

      showToast(`৳${addAmount.toLocaleString('en-IN')} সফলভাবে সমন্বয় করা হয়েছে`, 'success');
      closeAdjust();
      fetchAdvances();
    } catch (err) {
      showToast(err?.response?.data?.message || 'সমন্বয় সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // ── Delete ─────────────────────────────────────────────────
  const handleDelete = async (id) => {
    try {
      await api.delete(`/finance/advances/${id}`);
      showToast('অগ্রিম মুছে ফেলা হয়েছে');
      setDeleteConfirm(null);
      fetchAdvances();
    } catch (err) {
      showToast(err?.response?.data?.message || 'মুছতে সমস্যা হয়েছে', 'error');
      setDeleteConfirm(null);
    }
  };

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="page-container animate-fade-in">

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999,
          background: toast.type === 'error' ? 'var(--danger)' : 'var(--success)',
          color: '#fff', padding: '12px 20px', borderRadius: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)', fontSize: '0.9rem',
          display: 'flex', alignItems: 'center', gap: '8px', animation: 'fadeIn 0.3s ease',
          maxWidth: '380px',
        }}>
          {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
          {toast.text}
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title flex-center gap-8">
            <HandCoins className="text-primary" size={26} />
            অগ্রিম ও সমন্বয় (Advance & Adjustment)
          </h1>
          <p className="page-subtitle">শাখা: {branchName} · স্টাফদের অগ্রিম প্রদান ও সরাসরি সমন্বয় ব্যবস্থা</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-outline btn-sm" onClick={fetchAdvances} title="রিফ্রেশ">
            <RefreshCw size={15} />
          </button>
          {canManage && (
            <button className="btn btn-primary flex-center gap-6" onClick={openAdd}>
              <Plus size={16} /> নতুন অগ্রিম এন্ট্রি
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4" style={{ gap: '14px', marginBottom: '20px' }}>
        {[
          { label: 'মোট অগ্রিম এন্ট্রি', value: stats.total, unit: 'টি', color: 'var(--primary)', bg: 'rgba(99,102,241,0.1)', Icon: Users },
          { label: 'মোট অগ্রিম দেওয়া', value: `৳${stats.totalAmount.toLocaleString('en-IN')}`, color: '#0284c7', bg: 'rgba(2,132,199,0.1)', Icon: Banknote },
          { label: 'সমন্বয় সম্পন্ন', value: `৳${stats.totalAdjusted.toLocaleString('en-IN')}`, color: 'var(--success)', bg: 'rgba(16,185,129,0.1)', Icon: CheckCircle },
          { label: 'অবশিষ্ট বকেয়া', value: `৳${stats.totalDue.toLocaleString('en-IN')}`, color: 'var(--danger)', bg: 'rgba(239,68,68,0.1)', Icon: TrendingDown },
        ].map(({ label, value, unit, color, bg, Icon }) => (
          <div key={label} className="card" style={{ padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div className="text-xs text-muted mb-4">{label}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color, fontFamily: 'monospace' }}>
                  {value}{unit && <span style={{ fontSize: '0.85rem', marginLeft: '2px' }}>{unit}</span>}
                </div>
              </div>
              <div style={{ background: bg, borderRadius: '10px', padding: '10px' }}>
                <Icon size={22} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
        {[
          { key: 'all', label: `সব (${advances.length})` },
          { key: 'pending', label: `পেন্ডিং (${stats.pending})` },
          { key: 'partially_adjusted', label: `আংশিক সমন্বয় (${stats.partial})` },
          { key: 'adjusted', label: `সম্পূর্ণ সমন্বিত (${stats.adjusted})` },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setStatusFilter(tab.key)}
            className={`btn btn-sm ${statusFilter === tab.key ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.8rem' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="card" style={{ padding: '14px 16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
            <Search size={15} style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="নাম বা কারণ অনুসন্ধান..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '34px', height: '38px', fontSize: '0.88rem' }}
            />
          </div>
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="form-input"
            style={{ height: '38px', fontSize: '0.88rem', minWidth: '150px' }}
          >
            <option value="all">সকল ধরন</option>
            <option value="staff">শিক্ষক / স্টাফ</option>
            <option value="other">অন্যান্য</option>
          </select>
          {(searchQuery || typeFilter !== 'all' || statusFilter !== 'all') && (
            <button className="btn btn-ghost btn-sm flex-center gap-4"
              onClick={() => { setSearchQuery(''); setTypeFilter('all'); setStatusFilter('all'); }}>
              <X size={13} /> সাফ
            </button>
          )}
          <span className="text-xs text-muted" style={{ marginLeft: 'auto' }}>{filtered.length} টি রেকর্ড</span>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex-center" style={{ height: '40vh' }}>
          <Loader className="spin text-primary" size={36} />
        </div>
      ) : (
        <div className="card table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '36px' }}>#</th>
                <th>নাম ও ধরন</th>
                <th>তারিখ</th>
                <th>বিবরণ / কারণ</th>
                <th className="text-right">অগ্রিম (৳)</th>
                <th className="text-right">সমন্বয় (৳)</th>
                <th className="text-right">বকেয়া (৳)</th>
                <th className="text-center">স্ট্যাটাস</th>
                {canManage && <th className="text-center" style={{ width: '180px' }}>অ্যাকশন</th>}
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map((adv, idx) => {
                const due = pendingDue(adv);
                const statusInfo = STATUS_LABELS[adv.status] || { label: adv.status, cls: 'badge-primary' };
                const isFullyAdjusted = adv.status === 'adjusted' || due === 0;

                return (
                  <tr key={adv._id}>
                    <td className="text-muted text-xs">{idx + 1}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '50%',
                          background: 'rgba(99,102,241,0.12)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                          <User size={14} color="var(--primary)" />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{adv.personName}</div>
                          <span className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>
                            {adv.personType === 'staff' ? 'শিক্ষক/স্টাফ' : 'অন্যান্য'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-xs text-muted">
                      {adv.date ? new Date(adv.date).toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                    </td>
                    <td className="text-xs" style={{ maxWidth: '170px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={adv.reason || ''}>
                      {adv.reason || <span className="text-muted">—</span>}
                    </td>
                    <td className="text-right font-mono font-bold">{Number(adv.amount || 0).toLocaleString('en-IN')}</td>
                    <td className="text-right font-mono" style={{ color: 'var(--success)', fontWeight: 600 }}>
                      {Number(adv.adjustedAmount || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="text-right font-mono font-bold" style={{ color: due > 0 ? 'var(--danger)' : 'var(--text-muted)' }}>
                      {due.toLocaleString('en-IN')}
                    </td>
                    <td className="text-center">
                      <span className={`badge ${statusInfo.cls}`} style={{ fontSize: '0.72rem' }}>
                        {statusInfo.label}
                      </span>
                    </td>
                    {canManage && (
                      <td className="text-center">
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                          {/* সমন্বয় বাটন */}
                          <button
                            onClick={() => openAdjust(adv)}
                            disabled={isFullyAdjusted}
                            className="btn btn-xs flex-center gap-4"
                            style={{
                              padding: '4px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600,
                              background: isFullyAdjusted ? 'var(--bg-tertiary)' : 'rgba(16,185,129,0.12)',
                              color: isFullyAdjusted ? 'var(--text-muted)' : '#059669',
                              border: isFullyAdjusted ? '1px solid var(--border-color)' : '1px solid rgba(16,185,129,0.3)',
                              cursor: isFullyAdjusted ? 'not-allowed' : 'pointer',
                            }}
                            title={isFullyAdjusted ? 'সম্পূর্ণ সমন্বয় সম্পন্ন' : 'সরাসরি সমন্বয় করুন'}
                          >
                            <CheckCheck size={13} />
                            সমন্বয়
                          </button>

                          {/* এডিট বাটন */}
                          <button
                            onClick={() => openEdit(adv)}
                            disabled={isFullyAdjusted}
                            className="btn btn-outline btn-xs flex-center gap-4"
                            style={{ padding: '4px 7px', borderRadius: '6px' }}
                            title="মূল তথ্য এডিট"
                          >
                            <Edit3 size={13} />
                          </button>

                          {/* ডিলিট বাটন */}
                          <button
                            onClick={() => setDeleteConfirm(adv._id)}
                            disabled={isFullyAdjusted}
                            className="btn btn-xs flex-center"
                            style={{
                              padding: '4px 7px', borderRadius: '6px',
                              color: isFullyAdjusted ? 'var(--text-muted)' : 'var(--danger)',
                              border: '1px solid rgba(239,68,68,0.25)',
                              background: isFullyAdjusted ? 'transparent' : 'rgba(239,68,68,0.06)'
                            }}
                            title="মুছে ফেলুন"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              }) : (
                <tr>
                  <td colSpan="9" className="text-center text-muted">
                    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <HandCoins size={40} color="var(--border-color)" />
                      <span>কোনো অগ্রিমের তথ্য নেই</span>
                      {canManage && (
                        <button className="btn btn-primary btn-sm" onClick={openAdd}>
                          <Plus size={14} /> নতুন অগ্রিম যোগ করুন
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
            {filtered.length > 0 && (
              <tfoot>
                <tr style={{ background: 'var(--bg-tertiary)', fontWeight: 700 }}>
                  <td colSpan="4" style={{ padding: '10px 12px', fontSize: '0.85rem' }}>
                    মোট ({filtered.length} টি)
                  </td>
                  <td className="text-right font-mono" style={{ padding: '10px 12px' }}>
                    ৳{filtered.reduce((s, a) => s + Number(a.amount || 0), 0).toLocaleString('en-IN')}
                  </td>
                  <td className="text-right font-mono" style={{ padding: '10px 12px', color: 'var(--success)' }}>
                    ৳{filtered.reduce((s, a) => s + Number(a.adjustedAmount || 0), 0).toLocaleString('en-IN')}
                  </td>
                  <td className="text-right font-mono" style={{ padding: '10px 12px', color: 'var(--danger)' }}>
                    ৳{filtered.reduce((s, a) => s + pendingDue(a), 0).toLocaleString('en-IN')}
                  </td>
                  <td colSpan={canManage ? 1 : 0}></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )}

      {/* ── MODAL 1: সরাসরি সমন্বয় মডাল (Adjustment Modal) ─────── */}
      {adjustModalOpen && adjustingAdvance && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px', animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '480px', padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
            <button className="btn btn-ghost btn-xs" onClick={closeAdjust}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>

            <div style={{ marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px', color: '#059669', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCheck size={22} />
                অগ্রিম সমন্বয় (Adjustment)
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                {adjustingAdvance.personName} এর অগ্রিম থেকে কর্তন বা নগদ সমন্বয়
              </p>
            </div>

            {/* Current Summary Card */}
            <div style={{
              background: 'var(--bg-tertiary)', borderRadius: '10px', padding: '14px',
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px',
              textAlign: 'center', marginBottom: '16px', border: '1px solid var(--border-color)'
            }}>
              <div>
                <div className="text-xs text-muted">মূল অগ্রিম</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                  ৳{Number(adjustingAdvance.amount || 0).toLocaleString('en-IN')}
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                <div className="text-xs text-muted">পূর্বে সমন্বিত</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--success)', fontFamily: 'monospace' }}>
                  ৳{Number(adjustingAdvance.adjustedAmount || 0).toLocaleString('en-IN')}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted">বর্তমান বকেয়া</div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--danger)', fontFamily: 'monospace' }}>
                  ৳{pendingDue(adjustingAdvance).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <form onSubmit={handleSaveAdjustment} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Adjustment Amount Input */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    কত টাকা সমন্বয় করতে চান? <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setAdjustAmountInput(String(pendingDue(adjustingAdvance)))}
                    style={{
                      background: 'none', border: 'none', color: 'var(--primary)',
                      fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline'
                    }}
                  >
                    পুরো বকেয়া সমন্বয় (৳{pendingDue(adjustingAdvance)})
                  </button>
                </div>

                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: 'var(--text-muted)' }}>৳</span>
                  <input
                    type="number"
                    value={adjustAmountInput}
                    onChange={e => setAdjustAmountInput(e.target.value)}
                    className="form-input font-mono font-bold"
                    style={{ paddingLeft: '28px', height: '42px', fontSize: '1.15rem', color: '#059669' }}
                    max={pendingDue(adjustingAdvance)}
                    min="1"
                    placeholder="টাকার পরিমাণ লিখুন"
                    required
                    autoFocus
                  />
                </div>
              </div>

              {/* Real-time Calculation Preview */}
              {Number(adjustAmountInput) > 0 && (
                <div style={{
                  background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)',
                  borderRadius: '8px', padding: '10px 14px', fontSize: '0.82rem',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div>
                    <span className="text-muted">সমন্বয়ের পর অবশিষ্ট থাকবে: </span>
                    <strong style={{ color: 'var(--danger)', fontFamily: 'monospace' }}>
                      ৳{Math.max(0, pendingDue(adjustingAdvance) - Number(adjustAmountInput || 0)).toLocaleString('en-IN')}
                    </strong>
                  </div>
                  <span className={`badge ${Number(adjustAmountInput) >= pendingDue(adjustingAdvance) ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: '0.72rem' }}>
                    {Number(adjustAmountInput) >= pendingDue(adjustingAdvance) ? 'সম্পূর্ণ পরিশোধ হবে' : 'আংশিক বকেয়া থাকবে'}
                  </span>
                </div>
              )}

              {/* Note / Method */}
              <div>
                <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  সমন্বয়ের বিবরণ / মাধ্যম (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={adjustNote}
                  onChange={e => setAdjustNote(e.target.value)}
                  className="form-input"
                  style={{ height: '38px', fontSize: '0.88rem' }}
                  placeholder="যেমন: নগদে ফেরত দিয়েছেন / বেতনে বিশেষ সমন্বয়"
                />
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '6px' }}>
                <button type="button" onClick={closeAdjust} className="btn btn-outline btn-sm">
                  বাতিল
                </button>
                <button
                  type="submit"
                  disabled={submitting || !Number(adjustAmountInput)}
                  className="btn btn-primary btn-sm flex-center gap-6"
                  style={{ background: '#059669', borderColor: '#059669' }}
                >
                  {submitting ? <Loader size={14} className="spin" /> : <Check size={14} />}
                  সমন্বয় নিশ্চিত করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 2: Add / Edit Advance Modal ─────────────────── */}
      {modalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px', animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
            <button className="btn btn-ghost btn-xs" onClick={closeModal}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>

            <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HandCoins size={20} />
                {editingAdvance ? 'অগ্রিম সম্পাদনা' : 'নতুন অগ্রিম এন্ট্রি'}
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                {editingAdvance ? `সম্পাদনা: ${editingAdvance.personName}` : 'নতুন অগ্রিম পরিশোধের তথ্য লিখুন'}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Person Type */}
              <div>
                <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  ব্যক্তির ধরন <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {Object.entries(PERSON_TYPE_LABELS).map(([val, lbl]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setFormData({ ...formData, personType: val, personName: '' })}
                      className={`btn btn-sm flex-center gap-6 ${formData.personType === val ? 'btn-primary' : 'btn-outline'}`}
                      style={{ flex: 1, fontSize: '0.82rem' }}
                    >
                      {val === 'staff' ? <User size={13} /> : <Users size={13} />}
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  {formData.personType === 'staff' ? 'শিক্ষক / স্টাফের নাম' : 'ব্যক্তির নাম'}
                  <span style={{ color: 'var(--danger)' }}> *</span>
                  {formData.personType === 'staff' && staffList.length > 0 && (
                    <span className="text-muted" style={{ fontWeight: 400, marginLeft: '6px' }}>
                      ({staffList.length} জন তালিকায়)
                    </span>
                  )}
                </label>
                {formData.personType === 'staff' ? (
                  <StaffAutocomplete
                    value={formData.personName}
                    onChange={(name) => setFormData({ ...formData, personName: name })}
                    staffList={staffList}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData.personName}
                    onChange={e => setFormData({ ...formData, personName: e.target.value })}
                    className="form-input"
                    style={{ height: '40px' }}
                    placeholder="ব্যক্তির নাম লিখুন"
                    required
                  />
                )}
              </div>

              {/* Amount & Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                    পরিমাণ (৳) <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: 'var(--text-muted)' }}>৳</span>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={e => setFormData({ ...formData, amount: e.target.value })}
                      className="form-input font-mono font-bold"
                      style={{ paddingLeft: '26px', height: '40px', fontSize: '1.05rem', color: 'var(--primary)' }}
                      min="1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                    তারিখ <span style={{ color: 'var(--danger)' }}>*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                    style={{ height: '40px' }}
                    required
                  />
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="text-xs font-semibold mb-6" style={{ display: 'block', color: 'var(--text-secondary)' }}>কারণ / বিবরণ</label>
                <input
                  type="text"
                  value={formData.reason}
                  onChange={e => setFormData({ ...formData, reason: e.target.value })}
                  className="form-input"
                  style={{ height: '40px' }}
                  placeholder="যেমন: জরুরি প্রয়োজন, ঈদ অগ্রিম ইত্যাদি"
                />
              </div>

              {/* Info */}
              {!editingAdvance && (
                <div style={{
                  background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px', padding: '10px 12px', fontSize: '0.78rem', color: 'var(--text-secondary)',
                  display: 'flex', gap: '8px', alignItems: 'flex-start'
                }}>
                  <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '1px', color: 'var(--primary)' }} />
                  <span>অগ্রিম সংরক্ষণের পর এখানে সরাসরি সমন্বয় করতে পারবেন অথবা বেতন শিটে গিয়ে মাসিক বেতন থেকে সমন্বয় করতে পারবেন।</span>
                </div>
              )}

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '4px' }}>
                <button type="button" onClick={closeModal} className="btn btn-outline btn-sm">বাতিল</button>
                <button type="submit" disabled={submitting} className="btn btn-primary btn-sm flex-center gap-6">
                  {submitting ? <Loader size={14} className="spin" /> : <Check size={14} />}
                  {editingAdvance ? 'আপডেট করুন' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL 3: Delete Confirm Modal ────────────────────── */}
      {deleteConfirm && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
          <div className="card" style={{ maxWidth: '360px', width: '100%', padding: '24px', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
              <AlertTriangle size={26} color="var(--danger)" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 8px' }}>নিশ্চিত করুন</h3>
            <p className="text-muted text-sm" style={{ margin: '0 0 20px' }}>এই অগ্রিমটি স্থায়ীভাবে মুছে ফেলা হবে।</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button className="btn btn-outline btn-sm" onClick={() => setDeleteConfirm(null)}>বাতিল</button>
              <button
                className="btn btn-sm flex-center gap-6"
                style={{ background: 'var(--danger)', color: '#fff', border: 'none' }}
                onClick={() => handleDelete(deleteConfirm)}
              >
                <Trash2 size={14} /> হ্যাঁ, মুছুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
