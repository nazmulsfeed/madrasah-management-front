/**
 * ============================================================================
 * স্বতন্ত্র পেজ: ম্যানুয়াল বেতন চেকলিস্ট (ManualFeeChecklistPage.jsx)
 * ============================================================================
 * উদ্দেশ্য (Purpose — Why this page exists):
 * - এই পেজটি মাদরাসার পরিচালকের বিশেষ অনুরোধে সম্পূর্ণ আলাদাভাবে তৈরি করা হয়েছে।
 * - মূল সিস্টেমে ইতিমধ্যেই পূর্ণাঙ্গ ফি / ইনভয়েস ও অ্যাকাউন্টিং মডিউল (/fees) থাকা
 *   সত্ত্বেও, পরিচালক মহোদয় চান ডাটাবেজ থেকে ফিল্টারের মাধ্যমে ছাত্র তালিকা বের করে
 *   প্রতি মাসে কে বেতন দিয়েছে আর কে দেয়নি তা শুধু ম্যানুয়ালি টিকমার্ক দিয়ে সংরক্ষণ
 *   করে রাখতে।
 * - সতর্কতা / আইসোলেশন (Isolation Guarantee):
 *   এই পেজ এবং এর ব্যাকএন্ড এপিআই (/api/v1/manual-fee-checklist) মূল সিস্টেমের
 *   কোনো ইনভয়েস (FeeInvoice), পেমেন্ট (Payment), ক্যাশবুক, জার্নাল বা অ্যাকাউন্টিং
 *   ব্যালেন্সের সাথে যুক্ত নয় এবং সেগুলোর সাথে কোনো সংঘর্ষ করে না।
 * - অ্যাক্সেস কন্ট্রোল:
 *   শুধুমাত্র 'super_admin' এবং রোল ম্যানেজমেন্ট থেকে 'finance.manual_fee_checklist'
 *   পারমিশনপ্রাপ্ত শিক্ষক/ব্যবহারকারীই এই পেজটি দেখতে ও ব্যবহার করতে পারবেন।
 * ============================================================================
 */
import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckSquare, Square, Save, Search, Printer, CheckCircle2,
  XCircle, Users, Filter, RefreshCw, ShieldAlert, UserCheck, X
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { SECTION_OPTIONS } from '../../utils/constants';
import { toBnNumber, getNumericRoll } from '../../utils/helpers';
import {
  getMadrasahPrintStyles,
  getMadrasahHeaderHtml,
  getMadrasahFooterSignaturesHtml
} from '../../utils/madrasahPrintUtils';

const BN_MONTHS = [
  { value: 1, label: 'জানুয়ারি' },
  { value: 2, label: 'ফেব্রুয়ারি' },
  { value: 3, label: 'মার্চ' },
  { value: 4, label: 'এপ্রিল' },
  { value: 5, label: 'মে' },
  { value: 6, label: 'জুন' },
  { value: 7, label: 'জুলাই' },
  { value: 8, label: 'আগস্ট' },
  { value: 9, label: 'সেপ্টেম্বর' },
  { value: 10, label: 'অক্টোবর' },
  { value: 11, label: 'নভেম্বর' },
  { value: 12, label: 'ডিসেম্বর' }
];

const DEPARTMENT_OPTIONS = [
  'মক্তব বিভাগ',
  'নাজেরা বিভাগ',
  'হিফজ বিভাগ',
  'নুরানী বিভাগ',
  'উর্দু জামাত',
  'তাইসীর জামাত',
  'মিযান মুনশায়িব জামাত'
];

export default function ManualFeeChecklistPage() {
  const { user } = useAuthStore();
  const isSuperAdmin = user?.userType === 'super_admin';

  const [hasAccess, setHasAccess] = useState(isSuperAdmin);
  const [accessChecking, setAccessChecking] = useState(!isSuperAdmin);

  useEffect(() => {
    if (isSuperAdmin) {
      setHasAccess(true);
      setAccessChecking(false);
      return;
    }
    let mounted = true;
    const verifyAccess = async () => {
      setAccessChecking(true);
      try {
        const res = await api.get('/permissions/me');
        const perms = res.data?.data || {};
        localStorage.setItem('userPermissions', JSON.stringify(perms));
        const allowed = Boolean(perms['finance.manual_fee_checklist'] || perms?.finance?.manual_fee_checklist);
        if (mounted) setHasAccess(allowed);
      } catch {
        try {
          const perms = JSON.parse(localStorage.getItem('userPermissions') || '{}');
          if (mounted) {
            setHasAccess(Boolean(perms['finance.manual_fee_checklist'] || perms?.finance?.manual_fee_checklist));
          }
        } catch {
          if (mounted) setHasAccess(false);
        }
      } finally {
        if (mounted) setAccessChecking(false);
      }
    };
    verifyAccess();
    return () => { mounted = false; };
  }, [isSuperAdmin, user?.id, user?._id]);

  // Specific Teacher Access Modal State (super_admin only)
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [accessUsers, setAccessUsers] = useState([]);
  const [grantedIds, setGrantedIds] = useState([]);
  const [accessLoading, setAccessLoading] = useState(false);
  const [accessSaving, setAccessSaving] = useState(false);
  const [accessSearch, setAccessSearch] = useState('');
  const [accessError, setAccessError] = useState('');

  // Photo preview & mobile inline note state
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [openMobileNoteId, setOpenMobileNoteId] = useState(null);

  const renderStudentAvatar = (photoUrl, name, size = 36) => {
    const initial = (name || 'শ').trim().charAt(0);
    if (photoUrl) {
      return (
        <button
          type="button"
          onClick={() => setPreviewPhoto({ url: photoUrl, name })}
          title="ছবি বড় করে দেখতে ক্লিক করুন"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            overflow: 'hidden',
            padding: 0,
            border: '2px solid rgba(5, 150, 105, 0.45)',
            cursor: 'pointer',
            flexShrink: 0,
            background: '#f1f5f9',
          }}
        >
          <img
            src={photoUrl}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </button>
      );
    }
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: 'rgba(5, 150, 105, 0.12)',
          color: '#059669',
          border: '1.5px solid rgba(5, 150, 105, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: `${Math.round(size * 0.4)}px`,
          flexShrink: 0,
        }}
      >
        {initial}
      </div>
    );
  };

  const openAccessModal = async () => {
    setShowAccessModal(true);
    setAccessLoading(true);
    setAccessError('');
    try {
      const res = await api.get('/manual-fee-checklist/access-users');
      const data = res.data?.data || {};
      setAccessUsers(data.users || []);
      setGrantedIds((data.grantedIds || []).map(String));
    } catch (err) {
      setAccessError(err.response?.data?.message || 'টিচার তালিকা লোড করতে সমস্যা হয়েছে (ব্যাকএন্ড সার্ভার রিস্টার্ট করা আছে কিনা দেখুন)');
    } finally {
      setAccessLoading(false);
    }
  };

  const toggleUserAccess = (uid) => {
    const idStr = String(uid);
    setGrantedIds((prev) =>
      prev.includes(idStr) ? prev.filter((id) => id !== idStr) : [...prev, idStr]
    );
  };

  const handleSaveAccess = async () => {
    setAccessSaving(true);
    try {
      await api.post('/manual-fee-checklist/access-users', { userIds: grantedIds });
      showToast(`${toBnNumber(grantedIds.length)} জন টিচার/স্টাফের অ্যাক্সেস সংরক্ষণ করা হয়েছে`, 'success');
      setShowAccessModal(false);
    } catch (err) {
      showToast(err.response?.data?.message || 'অ্যাক্সেস সংরক্ষণে সমস্যা হয়েছে', 'error');
    } finally {
      setAccessSaving(false);
    }
  };

  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  // Students & filter options
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  // 5 Student Filters + Search + Paid Status Filter
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [residentialFilter, setResidentialFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'paid' | 'unpaid'
  const [searchQuery, setSearchQuery] = useState('');

  // Checklist map: { [studentId]: { isPaid: boolean, note: string } }
  const [checklistMap, setChecklistMap] = useState({});
  const [dirtyStudentIds, setDirtyStudentIds] = useState(new Set());
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  // Load students, classes, branches once
  useEffect(() => {
    if (!hasAccess) return;
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [resStu, resCls, resBr] = await Promise.all([
          api.get('/students', { params: { limit: 1000, status: 'active' } }).catch(() => ({ data: {} })),
          api.get('/students/classes').catch(() => ({ data: {} })),
          api.get('/students/branches').catch(() => ({ data: {} }))
        ]);
        const stuList = resStu.data?.data?.students || resStu.data?.students || resStu.data?.data || [];
        setStudents(Array.isArray(stuList) ? stuList : []);
        setClasses(resCls.data?.data?.classes || resCls.data?.data || []);
        setBranches(resBr.data?.data?.branches || resBr.data?.data || []);
      } catch (err) {
        console.error('Error loading students for manual fee checklist:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [hasAccess]);

  // Load saved checklist for selected month & year
  const fetchChecklist = async () => {
    if (!hasAccess) return;
    try {
      const res = await api.get('/manual-fee-checklist', {
        params: { month: selectedMonth, year: selectedYear }
      });
      if (res.data?.success) {
        const map = {};
        const records = res.data.data?.records || [];
        for (const rec of records) {
          map[String(rec.studentId)] = {
            isPaid: Boolean(rec.isPaid),
            note: rec.note || ''
          };
        }
        setChecklistMap(map);
        setDirtyStudentIds(new Set());
      }
    } catch (err) {
      console.error('Error fetching manual fee checklist:', err);
    }
  };

  useEffect(() => {
    fetchChecklist();
  }, [selectedMonth, selectedYear, hasAccess]);

  // Helper: Match branch (including dual '+ নুরানী' branches)
  const matchesBranch = (stu, targetBranchId) => {
    if (!targetBranchId) return true;
    const stuBrId = typeof stu.branch === 'object' ? (stu.branch?._id || stu.branch?.id) : stu.branch;
    if (!stuBrId) return false;
    if (String(stuBrId) === String(targetBranchId)) return true;

    const selectedBranchObj = branches.find(b => String(b._id) === String(targetBranchId));
    const stuBranchName = (typeof stu.branch === 'object' ? stu.branch?.name : branches.find(b => String(b._id) === String(stuBrId))?.name) || '';
    const selName = (selectedBranchObj?.name || '').trim();
    const stuBrTrim = stuBranchName.trim();

    if (selName === 'বালক শাখা') {
      return stuBrTrim === 'বালক শাখা + নুরানী' || stuBrTrim === 'বালক শাখা+নুরানী';
    }
    if (selName === 'বালিকা শাখা') {
      return stuBrTrim === 'বালিকা শাখা + নুরানী' || stuBrTrim === 'বালিকা শাখা+নুরানী';
    }
    if (selName === 'নুরানী শাখা') {
      return stuBrTrim === 'বালক শাখা + নুরানী' || stuBrTrim === 'বালিকা শাখা + নুরানী';
    }
    return false;
  };

  // Filtered & sorted students list
  const filteredStudents = useMemo(() => {
    const list = students.filter(s => {
      const sid = String(s._id || s.id);
      const clsId = s.currentEnrollment?.classLevel?._id || s.currentEnrollment?.classLevel || s.classLevel?._id || s.classLevel || '';
      const secName = (s.currentEnrollment?.section?.name || s.currentEnrollment?.section || s.section || '').trim();
      const deptName = (s.department || s.currentEnrollment?.department || '').trim();
      const resStatus = (s.residentialStatus || '').trim();

      if (classFilter && String(clsId) !== String(classFilter)) return false;
      if (sectionFilter && secName !== sectionFilter) return false;
      if (branchFilter && !matchesBranch(s, branchFilter)) return false;
      if (departmentFilter && deptName !== departmentFilter && !deptName.includes(departmentFilter.replace(' বিভাগ', ''))) return false;
      if (residentialFilter && resStatus !== residentialFilter) return false;

      const isPaid = Boolean(checklistMap[sid]?.isPaid);
      if (statusFilter === 'paid' && !isPaid) return false;
      if (statusFilter === 'unpaid' && isPaid) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const name = (s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}` || s.name || '').toLowerCase();
        const stuIdStr = (s.studentId || '').toLowerCase();
        const rollStr = String(s.currentEnrollment?.rollNumber || s.roll || '').toLowerCase();
        if (!name.includes(q) && !stuIdStr.includes(q) && !rollStr.includes(q)) return false;
      }

      return true;
    });

    return [...list].sort((a, b) => {
      const rA = getNumericRoll(a.currentEnrollment?.rollNumber || a.roll);
      const rB = getNumericRoll(b.currentEnrollment?.rollNumber || b.roll);
      return rA - rB;
    });
  }, [students, classFilter, sectionFilter, branchFilter, departmentFilter, residentialFilter, statusFilter, searchQuery, checklistMap, branches]);

  const stats = useMemo(() => {
    const total = filteredStudents.length;
    let paid = 0;
    for (const s of filteredStudents) {
      if (checklistMap[String(s._id || s.id)]?.isPaid) paid++;
    }
    return { total, paid, unpaid: total - paid };
  }, [filteredStudents, checklistMap]);

  const toggleStudentPaid = (sid) => {
    setChecklistMap(prev => {
      const cur = prev[sid] || { isPaid: false, note: '' };
      return { ...prev, [sid]: { ...cur, isPaid: !cur.isPaid } };
    });
    setDirtyStudentIds(prev => new Set(prev).add(sid));
  };

  const updateStudentNote = (sid, note) => {
    setChecklistMap(prev => {
      const cur = prev[sid] || { isPaid: false, note: '' };
      return { ...prev, [sid]: { ...cur, note } };
    });
    setDirtyStudentIds(prev => new Set(prev).add(sid));
  };

  const handleBulkToggleFiltered = (markPaid) => {
    const nextDirty = new Set(dirtyStudentIds);
    setChecklistMap(prev => {
      const next = { ...prev };
      for (const s of filteredStudents) {
        const sid = String(s._id || s.id);
        const cur = next[sid] || { isPaid: false, note: '' };
        next[sid] = { ...cur, isPaid: markPaid };
        nextDirty.add(sid);
      }
      return next;
    });
    setDirtyStudentIds(nextDirty);
  };

  const handleSaveChanges = async () => {
    if (dirtyStudentIds.size === 0) {
      setToast({ type: 'info', message: 'কোনো নতুন পরিবর্তন করা হয়নি।' });
      return;
    }

    setSaving(true);
    try {
      const entries = Array.from(dirtyStudentIds).map(sid => ({
        studentId: sid,
        isPaid: Boolean(checklistMap[sid]?.isPaid),
        note: checklistMap[sid]?.note || ''
      }));

      const res = await api.post('/manual-fee-checklist/save', {
        month: selectedMonth,
        year: selectedYear,
        entries
      });

      if (res.data?.success) {
        setDirtyStudentIds(new Set());
        setToast({ type: 'success', message: `${toBnNumber(entries.length)} জন শিক্ষার্থীর তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!` });
      }
    } catch (err) {
      console.error('Save manual fee checklist error:', err);
      setToast({ type: 'error', message: err.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে' });
    } finally {
      setSaving(false);
    }
  };

  const handlePrintList = () => {
    const monthLabel = BN_MONTHS.find(m => m.value === Number(selectedMonth))?.label || selectedMonth;
    const printWin = window.open('', '_blank', 'width=960,height=780');
    if (!printWin) {
      alert('পপ-আপ ব্লক করা হয়েছে! অনুগ্রহ করে ব্রাউজারের পপ-আপ অনুমতি দিন।');
      return;
    }

    const rowsHtml = filteredStudents.map((s, idx) => {
      const sid = String(s._id || s.id);
      const name = s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}`.trim() || s.name || '—';
      const roll = s.currentEnrollment?.rollNumber || s.roll || '—';
      const clsName = s.currentEnrollment?.classLevel?.name || s.classLevel?.name || '—';
      const brName = typeof s.branch === 'object' ? (s.branch?.name || '—') : '—';
      const rec = checklistMap[sid] || { isPaid: false, note: '' };
      return `
        <tr>
          <td style="text-align:center;">${toBnNumber(idx + 1)}</td>
          <td style="text-align:center;">${roll}</td>
          <td>${name} (${s.studentId || '—'})</td>
          <td>${clsName}</td>
          <td>${brName}</td>
          <td style="text-align:center;font-weight:700;color:${rec.isPaid ? '#047857' : '#dc2626'};">
            ${rec.isPaid ? '✔ দিয়েছে' : '✖ বাকি'}
          </td>
          <td>${rec.note || ''}</td>
        </tr>
      `;
    }).join('');

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>ম্যানুয়াল বেতন চেকলিস্ট - ${monthLabel} ${toBnNumber(selectedYear)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700;800&display=swap" rel="stylesheet" />
  ${getMadrasahPrintStyles('portrait')}
  <style>
    table.chk-table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
    table.chk-table th, table.chk-table td { border: 1px solid #cbd5e1; padding: 5px 7px; text-align: left; }
    table.chk-table th { background: #f1f5f9; font-weight: 700; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      <div>
        ${getMadrasahHeaderHtml({
          documentTitle: `ম্যানুয়াল বেতন চেকলিস্ট — ${monthLabel} ${toBnNumber(selectedYear)}`,
          metaLeft: `মোট: ${toBnNumber(stats.total)} জন | দিয়েছে: ${toBnNumber(stats.paid)} জন | বাকি: ${toBnNumber(stats.unpaid)} জন`,
          orientation: 'portrait'
        })}
        <table class="chk-table">
          <thead>
            <tr>
              <th style="width:38px;text-align:center;">ক্রঃ</th>
              <th style="width:55px;text-align:center;">রোল</th>
              <th>শিক্ষার্থীর নাম ও আইডি</th>
              <th>শ্রেণি</th>
              <th>শাখা</th>
              <th style="width:85px;text-align:center;">অবস্থা</th>
              <th>মন্তব্য</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
      ${getMadrasahFooterSignaturesHtml(['পরিচালক', 'প্রতিষ্ঠান প্রধান'])}
    </div>
  </div>
  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 350); };</script>
</body>
</html>`;
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  if (accessChecking) {
    return (
      <div className="card" style={{ padding: '48px 24px', textAlign: 'center', maxWidth: '540px', margin: '40px auto' }}>
        <p className="text-muted">প্রবেশাধিকার যাচাই করা হচ্ছে...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="card" style={{ padding: '48px 24px', textAlign: 'center', maxWidth: '540px', margin: '40px auto' }}>
        <ShieldAlert size={48} style={{ color: '#dc2626', margin: '0 auto 12px' }} />
        <h2 style={{ marginBottom: '8px' }}>প্রবেশাধিকার নেই</h2>
        <p className="text-muted">
          এই পেজটি শুধুমাত্র Super Admin এবং অনুমোদিত শিক্ষকের জন্য সংরক্ষিত।
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ paddingBottom: dirtyStudentIds.size > 0 ? '72px' : undefined }}>
      <style>{`
        .mfc-desktop-table { display: block; overflow-x: auto; }
        .mfc-mobile-cards { display: none; }
        .mfc-mobile-sticky-save { display: none; }
        @media (max-width: 768px) {
          .mfc-desktop-table { display: none; }
          .mfc-mobile-cards { display: flex; flex-direction: column; gap: 10px; padding: 10px; }
          .mfc-mobile-sticky-save {
            display: flex;
            position: fixed;
            left: 12px;
            right: 12px;
            bottom: 12px;
            z-index: 900;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 10px 14px;
            border-radius: 12px;
            background: var(--card-bg, #ffffff);
            border: 1.5px solid #059669;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.22);
          }
        }
      `}</style>
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckSquare size={22} style={{ color: '#059669' }} />
            <span>ম্যানুয়াল বেতন চেকলিস্ট</span>
          </h1>
          <p className="page-subtitle">
            মাস অনুযায়ী শিক্ষার্থীদের বেতন পরিশোধের অবস্থা ম্যানুয়ালি টিকমার্ক দিয়ে সংরক্ষণ করুন (স্বতন্ত্র তালিকা)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {isSuperAdmin && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={openAccessModal}
              title="শুধুমাত্র নির্দিষ্ট টিচারকে অ্যাক্সেস দিন"
            >
              <UserCheck size={15} /> টিচার অ্যাক্সেস
            </button>
          )}
          <button type="button" className="btn btn-secondary" onClick={fetchChecklist} title="রিফ্রেশ">
            <RefreshCw size={15} /> রিফ্রেশ
          </button>
          <button type="button" className="btn btn-secondary" onClick={handlePrintList} disabled={filteredStudents.length === 0}>
            <Printer size={15} /> প্রিন্ট
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveChanges}
            disabled={saving || dirtyStudentIds.size === 0}
            style={{ background: '#059669', borderColor: '#059669' }}
          >
            <Save size={15} />
            <span>{saving ? 'সংরক্ষণ হচ্ছে...' : `সংরক্ষণ করুন${dirtyStudentIds.size > 0 ? ` (${toBnNumber(dirtyStudentIds.size)})` : ''}`}</span>
          </button>
        </div>
      </div>

      {toast && (
        <div
          className="card mb-16"
          style={{
            padding: '10px 16px',
            borderLeft: `4px solid ${toast.type === 'error' ? '#dc2626' : toast.type === 'info' ? '#2563eb' : '#059669'}`,
            background: toast.type === 'error' ? 'rgba(220,38,38,0.08)' : toast.type === 'info' ? 'rgba(37,99,235,0.08)' : 'rgba(5,150,105,0.08)',
            fontWeight: 600
          }}
        >
          {toast.message}
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-3 mb-16" style={{ gap: '12px' }}>
        <div className="card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="text-xs text-muted">ফিল্টারকৃত শিক্ষার্থী</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{toBnNumber(stats.total)} জন</div>
          </div>
          <Users size={24} style={{ color: '#2563eb' }} />
        </div>
        <div className="card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="text-xs text-muted">বেতন দিয়েছে</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#059669' }}>{toBnNumber(stats.paid)} জন</div>
          </div>
          <CheckCircle2 size={24} style={{ color: '#059669' }} />
        </div>
        <div className="card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="text-xs text-muted">বেতন বাকি / দেয়নি</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#dc2626' }}>{toBnNumber(stats.unpaid)} জন</div>
          </div>
          <XCircle size={24} style={{ color: '#dc2626' }} />
        </div>
      </div>

      {/* Filters Card */}
      <div className="card mb-16" style={{ padding: '14px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px', marginBottom: '10px' }}>
          <select className="form-input form-select" value={selectedMonth} onChange={e => setSelectedMonth(Number(e.target.value))}>
            {BN_MONTHS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>

          <select className="form-input form-select" value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
            {[selectedYear - 1, selectedYear, selectedYear + 1].map(y => (
              <option key={y} value={y}>{toBnNumber(y)}</option>
            ))}
          </select>

          <select className="form-input form-select" value={classFilter} onChange={e => setClassFilter(e.target.value)}>
            <option value="">সকল শ্রেণি</option>
            {classes.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
          </select>

          <select className="form-input form-select" value={sectionFilter} onChange={e => setSectionFilter(e.target.value)}>
            <option value="">সকল সেকশন</option>
            {SECTION_OPTIONS.map((sec, i) => <option key={i} value={sec}>{sec}</option>)}
          </select>

          <select className="form-input form-select" value={branchFilter} onChange={e => setBranchFilter(e.target.value)}>
            <option value="">সকল শাখা</option>
            {branches.filter(b => b.name !== 'হিফজ শাখা').map(b => <option key={b._id} value={b._id}>{b.name}</option>)}
          </select>

          <select className="form-input form-select" value={departmentFilter} onChange={e => setDepartmentFilter(e.target.value)}>
            <option value="">সকল বিভাগ</option>
            {DEPARTMENT_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <select className="form-input form-select" value={residentialFilter} onChange={e => setResidentialFilter(e.target.value)}>
            <option value="">সকল আবাসন</option>
            <option value="residential">আবাসিক</option>
            <option value="non-residential">অনাবাসিক</option>
            <option value="day_care">ডে-কেয়ার</option>
          </select>

          <select className="form-input form-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">সকল অবস্থা</option>
            <option value="paid">শুধু দিয়েছে</option>
            <option value="unpaid">শুধু বাকি</option>
          </select>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '8px', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 240px', maxWidth: '360px' }}>
            <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="form-input"
              placeholder="নাম, রোল বা আইডি দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '32px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleBulkToggleFiltered(true)}>
              <CheckSquare size={14} /> ফিল্টারকৃত সবাইকে টিক দিন
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleBulkToggleFiltered(false)}>
              <Square size={14} /> সবার টিক সরান
            </button>
          </div>
        </div>
      </div>

      {/* Checklist Table */}
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        {loading ? (
          <div className="flex-center" style={{ padding: '60px' }}>
            <div className="spinner"></div>
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="empty-state" style={{ padding: '48px 20px', textAlign: 'center' }}>
            <Filter size={40} style={{ opacity: 0.3, margin: '0 auto 10px' }} />
            <div className="empty-state-title">কোনো শিক্ষার্থী পাওয়া যায়নি</div>
          </div>
        ) : (
          <>
            {/* পিসি ভিউ: পূর্ণাঙ্গ টেবিল (অপরিবর্তিত + প্রোফাইল ছবি) */}
            <div className="mfc-desktop-table">
              <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ width: '60px', textAlign: 'center' }}>বেতন</th>
                    <th style={{ width: '70px', textAlign: 'center' }}>রোল</th>
                    <th>শিক্ষার্থীর নাম ও আইডি</th>
                    <th>শ্রেণি ও সেকশন</th>
                    <th>শাখা ও বিভাগ</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>অবস্থা</th>
                    <th style={{ minWidth: '180px' }}>মন্তব্য (ঐচ্ছিক)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s) => {
                    const sid = String(s._id || s.id);
                    const name = s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}`.trim() || s.name || 'শিক্ষার্থী';
                    const studentPhoto = s.photo || s.user?.photo || '';
                    const roll = s.currentEnrollment?.rollNumber || s.roll || '—';
                    const clsName = s.currentEnrollment?.classLevel?.name || s.classLevel?.name || '—';
                    const secName = s.currentEnrollment?.section?.name || s.currentEnrollment?.section || s.section || '';
                    const brName = typeof s.branch === 'object' ? (s.branch?.name || '—') : '—';
                    const deptName = s.department || s.currentEnrollment?.department || '';
                    const rec = checklistMap[sid] || { isPaid: false, note: '' };
                    const isDirty = dirtyStudentIds.has(sid);

                    return (
                      <tr
                        key={sid}
                        style={{
                          background: isDirty ? 'rgba(245, 158, 11, 0.06)' : (rec.isPaid ? 'rgba(16, 185, 129, 0.04)' : undefined)
                        }}
                      >
                        <td style={{ textAlign: 'center' }}>
                          <button
                            type="button"
                            onClick={() => toggleStudentPaid(sid)}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              cursor: 'pointer',
                              color: rec.isPaid ? '#059669' : '#94a3b8',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '4px'
                            }}
                            title={rec.isPaid ? 'বেতন দিয়েছে (ক্লিক করে পরিবর্তন করুন)' : 'বাকি (ক্লিক করে টিক দিন)'}
                          >
                            {rec.isPaid ? <CheckSquare size={22} /> : <Square size={22} />}
                          </button>
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: 700 }}>{roll}</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {renderStudentAvatar(studentPhoto, name, 36)}
                            <div>
                              <div style={{ fontWeight: 700 }}>{name}</div>
                              <div className="text-xs text-muted">{s.studentId || '—'}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>{clsName}</div>
                          {secName && <div className="text-xs text-muted">সেকশন: {secName}</div>}
                        </td>
                        <td>
                          <div>{brName}</div>
                          {deptName && <div className="text-xs text-muted">{deptName}</div>}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span
                            className={`badge ${rec.isPaid ? 'badge-success' : 'badge-danger'}`}
                            style={{
                              cursor: 'pointer',
                              background: rec.isPaid ? 'rgba(16, 185, 129, 0.14)' : 'rgba(239, 68, 68, 0.12)',
                              color: rec.isPaid ? '#047857' : '#dc2626',
                              fontWeight: 700
                            }}
                            onClick={() => toggleStudentPaid(sid)}
                          >
                            {rec.isPaid ? 'বেতন দিয়েছে' : 'বাকি'}
                          </span>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-input"
                            style={{ fontSize: '0.82rem', padding: '4px 8px' }}
                            placeholder="নোট লিখুন..."
                            value={rec.note || ''}
                            onChange={e => updateStudentNote(sid, e.target.value)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* মোবাইল ভিউ: কমপ্যাক্ট কার্ড ভিউ (কোনো সাইড স্ক্রল ছাড়া) */}
            <div className="mfc-mobile-cards">
              {filteredStudents.map((s) => {
                const sid = String(s._id || s.id);
                const name = s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}`.trim() || s.name || 'শিক্ষার্থী';
                const studentPhoto = s.photo || s.user?.photo || '';
                const roll = s.currentEnrollment?.rollNumber || s.roll || '—';
                const clsName = s.currentEnrollment?.classLevel?.name || s.classLevel?.name || '—';
                const secName = s.currentEnrollment?.section?.name || s.currentEnrollment?.section || s.section || '';
                const resType = s.residentialStatus === 'non_residential' ? 'অনাবাসিক' : s.residentialStatus === 'day_care' ? 'ডে-কেয়ার' : 'আবাসিক';
                const rec = checklistMap[sid] || { isPaid: false, note: '' };
                const isDirty = dirtyStudentIds.has(sid);
                const isNoteOpen = openMobileNoteId === sid;

                return (
                  <div
                    key={sid}
                    style={{
                      borderRadius: '12px',
                      padding: '10px 12px',
                      border: `1.5px solid ${isDirty ? '#f59e0b' : rec.isPaid ? 'rgba(5, 150, 105, 0.45)' : 'var(--border-color)'}`,
                      background: isDirty ? 'rgba(245, 158, 11, 0.06)' : rec.isPaid ? 'rgba(16, 185, 129, 0.04)' : 'var(--card-bg, transparent)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
                        {renderStudentAvatar(studentPhoto, name, 42)}
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                padding: '1px 6px',
                                borderRadius: '6px',
                                background: 'rgba(100, 116, 139, 0.14)',
                                flexShrink: 0,
                              }}
                            >
                              {roll}
                            </span>
                            <span style={{ fontWeight: 700, fontSize: '0.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {name}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            আইডি: {s.studentId || '—'} • {clsName}{secName ? ` (${secName})` : ''} • {resType}
                          </div>
                          <button
                            type="button"
                            onClick={() => setOpenMobileNoteId(isNoteOpen ? null : sid)}
                            style={{
                              border: 'none',
                              background: 'transparent',
                              padding: 0,
                              marginTop: '4px',
                              fontSize: '0.75rem',
                              color: '#2563eb',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            {rec.note ? `নোট: ${rec.note}` : '+ নোট লিখুন'}
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleStudentPaid(sid)}
                        style={{
                          flexShrink: 0,
                          width: '74px',
                          height: '46px',
                          borderRadius: '10px',
                          border: `1.5px solid ${rec.isPaid ? '#059669' : '#cbd5e1'}`,
                          background: rec.isPaid ? 'rgba(5, 150, 105, 0.14)' : 'rgba(148, 163, 184, 0.1)',
                          color: rec.isPaid ? '#047857' : '#64748b',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                        }}
                      >
                        {rec.isPaid ? <CheckSquare size={18} /> : <Square size={18} />}
                        <span style={{ marginTop: '2px' }}>{rec.isPaid ? 'দিয়েছে' : 'বাকি'}</span>
                      </button>
                    </div>

                    {isNoteOpen && (
                      <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '6px' }}>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.82rem', padding: '5px 8px', flex: 1 }}
                          placeholder="নোট লিখুন..."
                          value={rec.note || ''}
                          onChange={e => updateStudentNote(sid, e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                          onClick={() => setOpenMobileNoteId(null)}
                        >
                          ঠিক আছে
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* মোবাইল স্টিকি সেভ বার (আনসেভড পরিবর্তন থাকলে দেখাবে) */}
      {dirtyStudentIds.size > 0 && (
        <div className="mfc-mobile-sticky-save">
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669' }}>
            {toBnNumber(dirtyStudentIds.size)}টি পরিবর্তন অসংরক্ষিত
          </span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveChanges}
            disabled={saving}
            style={{ background: '#059669', borderColor: '#059669', padding: '7px 14px', fontSize: '0.85rem' }}
          >
            <Save size={15} />
            <span>{saving ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}</span>
          </button>
        </div>
      )}

      {/* প্রোফাইল ছবি বড় প্রিভিউ মডাল */}
      {previewPhoto && (
        <div
          onClick={() => setPreviewPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.72)',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '360px', width: '100%', padding: '14px', textAlign: 'center' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{previewPhoto.name}</span>
              <button type="button" className="btn btn-secondary" style={{ padding: '4px' }} onClick={() => setPreviewPhoto(null)}>
                <X size={16} />
              </button>
            </div>
            <img
              src={previewPhoto.url}
              alt={previewPhoto.name}
              style={{ width: '100%', maxHeight: '360px', objectFit: 'contain', borderRadius: '10px', background: '#f8fafc' }}
            />
          </div>
        </div>
      )}

      {/* নির্দিষ্ট টিচার অ্যাক্সেস ম্যানেজমেন্ট মডাল (শুধু super_admin) */}
      {isSuperAdmin && showAccessModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserCheck size={18} style={{ color: '#059669' }} />
                  <span>নির্দিষ্ট টিচার অ্যাক্সেস ম্যানেজমেন্ট</span>
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  শুধুমাত্র টিক দেওয়া নির্দিষ্ট টিচার/স্টাফরাই এই পেজটি দেখতে ও ব্যবহার করতে পারবেন।
                </p>
              </div>
              <button type="button" className="btn btn-secondary" style={{ padding: '6px' }} onClick={() => setShowAccessModal(false)}>
                <X size={16} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '32px' }}
                placeholder="টিচারের নাম, ইউজারনেম বা মোবাইল দিয়ে খুঁজুন..."
                value={accessSearch}
                onChange={(e) => setAccessSearch(e.target.value)}
              />
            </div>

            <div style={{ overflowY: 'auto', flex: 1, border: '1px solid var(--border-color)', borderRadius: '8px', padding: '8px' }}>
              {accessLoading ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>লোড হচ্ছে...</div>
              ) : accessError ? (
                <div style={{ padding: '20px', textAlign: 'center', color: '#dc2626', fontSize: '0.88rem', fontWeight: 600 }}>
                  {accessError}
                </div>
              ) : accessUsers.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  কোনো টিচার বা স্টাফ অ্যাকাউন্ট পাওয়া যায়নি।
                </div>
              ) : (
                (() => {
                  const filteredAccessUsers = accessUsers.filter((u) => {
                    if (!accessSearch.trim()) return true;
                    const q = accessSearch.toLowerCase();
                    const full = `${u.firstName || ''} ${u.lastName || ''} ${u.username || ''} ${u.phone || ''}`.toLowerCase();
                    return full.includes(q);
                  });
                  if (filteredAccessUsers.length === 0) {
                    return (
                      <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                        আপনার খোঁজা তথ্য অনুযায়ী কোনো টিচার পাওয়া যায়নি।
                      </div>
                    );
                  }
                  return filteredAccessUsers.map((u) => {
                    const uid = String(u.id ?? u._id);
                    const checked = grantedIds.includes(uid);
                    const fullName = `${u.firstName || ''} ${u.lastName || ''}`.trim() || u.username || 'নাম নেই';
                    return (
                      <label
                        key={uid}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 10px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          background: checked ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
                          marginBottom: '4px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleUserAccess(uid)}
                            style={{ width: '16px', height: '16px', accentColor: '#059669' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{fullName}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                              {u.userType} {u.phone ? `• ${u.phone}` : ''} {u.username ? `• @${u.username}` : ''}
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: checked ? '#059669' : 'var(--text-secondary)' }}>
                          {checked ? 'অনুমোদিত' : 'বন্ধ'}
                        </span>
                      </label>
                    );
                  });
                })()
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#059669' }}>
                নির্বাচিত: {toBnNumber(grantedIds.length)} জন
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAccessModal(false)}>
                  বাতিল
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ background: '#059669', borderColor: '#059669' }}
                  onClick={handleSaveAccess}
                  disabled={accessSaving}
                >
                  <Save size={15} /> {accessSaving ? 'সংরক্ষণ হচ্ছে...' : 'অ্যাক্সেস সংরক্ষণ করুন'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
