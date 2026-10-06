import { useState, useEffect, useMemo, useRef } from 'react';
import {
  GraduationCap, CheckCircle2, XCircle, Clock, Coffee, Save,
  RefreshCw, Search, Printer, AlertCircle, Check, CreditCard,
  SlidersHorizontal, CheckCheck, UserX, User, Sparkles, Filter, Phone,
  Calendar, CalendarRange, ChevronDown, ChevronLeft, ChevronRight, Eye,
  Fingerprint, Laptop, Radio, X, RotateCcw, Bell
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';

export default function TeacherAttendancePage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);

  const getBDTodayStr = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });

  // ────────────────────────────────────────────────────────────
  // Modes & Dates State
  // ────────────────────────────────────────────────────────────
  const [dateMode, setDateMode] = useState('single'); // 'single' | 'range'
  const [date, setDate] = useState(getBDTodayStr());

  // Date Range state (Default last 7 days)
  const todayStr = getBDTodayStr();
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 6);
    return d.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });
  });
  const [endDate, setEndDate] = useState(todayStr);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'present' | 'absent' | 'late' | 'on_leave' | 'not_assigned'

  // Late Cut-off & Auto Absent State
  const [cutoffTime, setCutoffTime] = useState('08:45');
  const [savingCutoff, setSavingCutoff] = useState(false);
  const [teacherAutoAbsentEnabled, setTeacherAutoAbsentEnabled] = useState(false);
  const [runningAbsentCheck, setRunningAbsentCheck] = useState(false);

  // Data Records
  const [records, setRecords] = useState([]);
  const [matrixAttendance, setMatrixAttendance] = useState({});
  const [dateRangeList, setDateRangeList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  // Silent Background Auto-Refresh (every 30s, like student attendance)
  const pollingRef = useRef(null);

  // Card Scanner State
  const [scannedCardId, setScannedCardId] = useState('');
  const [scanningCard, setScanningCard] = useState(false);
  const cardInputRef = useRef(null);

  // Multi-punch Popover State
  const [activePunchLog, setActivePunchLog] = useState(null);

  // Print Preview Modal State
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [previewZoom, setPreviewZoom] = useState('scroll'); // 'scroll' | 'fit'
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileFitScale = Math.min(1, Math.max(0.30, ((windowWidth < 640 ? windowWidth - 24 : windowWidth - 80) / 880)));

  const [printSortBy, setPrintSortBy] = useState('name');
  const [printColumns, setPrintColumns] = useState({
    serial: true,
    id: true,
    name: true,
    designation: true,
    phone: true,
    status: true,
    inTime: true,
    outTime: true,
    punchCount: true,
    signBox: true,
    remarks: false,
  });

  // ────────────────────────────────────────────────────────────
  // Signature Roles State & Handlers (Pre-defined & Custom)
  // ────────────────────────────────────────────────────────────
  const FOOTER_ROLES_KEY = 'annur_footer_roles__teacher_attendance';
  const CUSTOM_ROLES_KEY = 'annur_footer_custom_roles';
  const MAX_SIGNATURE_ROLES = 5;

  const DEFAULT_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, বালক শাখা'
  ];

  const PRESET_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__teacher_attendance');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  const [customRolesList, setCustomRolesList] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_custom_roles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newCustomRole, setNewCustomRole] = useState('');

  const handleToggleSignatureRole = (role) => {
    let next;
    if (selectedSignatureRoles.includes(role)) {
      if (selectedSignatureRoles.length <= 1) {
        showToast('কমপক্ষে ১টি স্বাক্ষর রোল নির্বাচন থাকতে হবে', 'error');
        return;
      }
      next = selectedSignatureRoles.filter(r => r !== role);
    } else {
      if (selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES) {
        showToast(`সর্বোচ্চ ${MAX_SIGNATURE_ROLES}টি স্বাক্ষর রোল নির্বাচন করা যাবে`, 'error');
        return;
      }
      next = [...selectedSignatureRoles, role];
    }
    setSelectedSignatureRoles(next);
    try {
      localStorage.setItem('annur_footer_roles__teacher_attendance', JSON.stringify(next));
    } catch (_) {}
  };

  const handleAddCustomRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newCustomRole.trim();
    if (!trimmed) return;
    if (PRESET_SIGNATURE_ROLES.includes(trimmed) || customRolesList.includes(trimmed)) {
      showToast('এই রোলটি তালিকায় আগেই বিদ্যমান আছে', 'error');
      return;
    }
    const nextCustom = [...customRolesList, trimmed];
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.length < MAX_SIGNATURE_ROLES) {
      const nextSelected = [...selectedSignatureRoles, trimmed];
      setSelectedSignatureRoles(nextSelected);
      try {
        localStorage.setItem('annur_footer_roles__teacher_attendance', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomRole('');
    showToast(`"${trimmed}" পদবি সফলভাবে যুক্ত হয়েছে`);
  };

  const handleDeleteCustomRole = (role, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextCustom = customRolesList.filter(r => r !== role);
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.includes(role)) {
      const nextSelected = selectedSignatureRoles.filter(r => r !== role);
      const fallbackSelected = nextSelected.length > 0 ? nextSelected : DEFAULT_SIGNATURE_ROLES;
      setSelectedSignatureRoles(fallbackSelected);
      try {
        localStorage.setItem('annur_footer_roles__teacher_attendance', JSON.stringify(fallbackSelected));
      } catch (_) {}
    }
    showToast(`"${role}" পদবি তালিকা থেকে সরানো হয়েছে`);
  };

  const canManage = ['super_admin', 'co_super_admin', 'admin', 'principal', 'vice_principal'].includes(user?.userType) ||
    ['co_super_admin', 'admin'].includes(user?.adminRole);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // ────────────────────────────────────────────────────────────
  // 1. Fetch Attendance (Single Date or Date Range)
  // ────────────────────────────────────────────────────────────
  const fetchAttendance = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const params = dateMode === 'single'
        ? { date }
        : { startDate, endDate };

      const res = await api.get('/attendance/teachers', { params });
      if (res.data?.success) {
        if (dateMode === 'single') {
          setRecords(res.data.data.records || []);
        } else {
          setRecords(res.data.data.records || []);
          setMatrixAttendance(res.data.data.matrix || {});
          setDateRangeList(res.data.data.dateRangeList || []);
        }
        if (res.data.data.teacherCutoffTime) {
          setCutoffTime(res.data.data.teacherCutoffTime);
        }
        if (res.data.data.teacherAutoAbsentEnabled !== undefined) {
          setTeacherAutoAbsentEnabled(Boolean(res.data.data.teacherAutoAbsentEnabled));
        }
      }
    } catch (err) {
      if (!silent) {
        showToast(err.response?.data?.message || 'শিক্ষক হাজিরা লোড করতে সমস্যা হয়েছে', 'error');
      }
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [dateMode, date, startDate, endDate]);

  // Real-time teacher attendance polling every 30 seconds (single day only, silent auto-refresh like students)
  useEffect(() => {
    if (dateMode !== 'single') return;
    pollingRef.current = setInterval(() => {
      fetchAttendance(true);
    }, 30000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [dateMode, date]);

  // ────────────────────────────────────────────────────────────
  // Cut-off Time & Auto Absent Handlers
  // ────────────────────────────────────────────────────────────
  const handleSaveCutoff = async () => {
    if (!cutoffTime) return;
    try {
      setSavingCutoff(true);
      const res = await api.post('/attendance/teachers/cutoff', {
        cutoffTime,
        teacherAutoAbsentEnabled,
      });
      if (res.data?.success) {
        showToast(res.data.message || `কাট-অফ টাইম (${cutoffTime}) সংরক্ষিত হয়েছে!`);
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'কাট-অফ টাইম সেভ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSavingCutoff(false);
    }
  };

  const handleToggleAutoAbsent = async (enabled) => {
    setTeacherAutoAbsentEnabled(enabled);
    try {
      await api.post('/attendance/teachers/cutoff', {
        cutoffTime,
        teacherAutoAbsentEnabled: enabled,
      });
      showToast(enabled ? 'কাট-অফ পার হলে অটো-অনুপস্থিত সক্রিয় করা হয়েছে' : 'অটো-অনুপস্থিত নিষ্ক্রিয় করা হয়েছে');
    } catch (err) {
      showToast('সেটিংস সেভ করতে সমস্যা হয়েছে', 'error');
    }
  };

  const handleRunTeacherAbsentCheck = async () => {
    const confirmRun = window.confirm('কাট-অফ সময় পার হওয়া শিক্ষকদের এখনই স্বয়ংক্রিয়ভাবে অনুপস্থিত মার্ক করতে চান?');
    if (!confirmRun) return;
    try {
      setRunningAbsentCheck(true);
      const res = await api.post('/attendance/teachers/auto-absent-check');
      if (res.data?.success) {
        showToast(res.data.message);
        fetchAttendance(true);
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'অনুপস্থিত চেক চালাতে সমস্যা হয়েছে', 'error');
    } finally {
      setRunningAbsentCheck(false);
    }
  };

  // ────────────────────────────────────────────────────────────
  // Stats Calculation
  // ────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = records.length;
    let present = 0;
    let absent = 0;
    let late = 0;
    let leave = 0;
    let notAssigned = 0;

    records.forEach(r => {
      if (r.status === 'present') present++;
      else if (r.status === 'absent') absent++;
      else if (r.status === 'late') late++;
      else if (r.status === 'on_leave') leave++;
      else notAssigned++;
    });

    const presentRate = total > 0 ? Math.round(((present + late) / total) * 100) : 0;
    return { total, present, absent, late, leave, notAssigned, presentRate };
  }, [records]);

  // ────────────────────────────────────────────────────────────
  // Filtered Records (Search & Status Filter)
  // ────────────────────────────────────────────────────────────
  const filteredRecords = useMemo(() => {
    let list = [...records];
    if (statusFilter !== 'all') {
      if (statusFilter === 'not_assigned') {
        list = list.filter(r => !r.status || r.status === 'not_assigned');
      } else {
        list = list.filter(r => r.status === statusFilter);
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
      const enQ = q.replace(/[০-৯]/g, d => bnToEn[d]);

      list = list.filter(r => {
        const name = (r.name || '').toLowerCase();
        const des = (r.designation || '').toLowerCase();
        const phone = (r.phone || '');
        const id = (r.teacherId || '').toLowerCase();
        const devId = (r.deviceUserId || '').toLowerCase();

        return name.includes(q) ||
               des.includes(q) ||
               phone.includes(q) || phone.includes(enQ) ||
               id.includes(q) || id.includes(enQ) ||
               devId.includes(q) || devId.includes(enQ);
      });
    }

    return list;
  }, [records, statusFilter, searchQuery]);

  // ────────────────────────────────────────────────────────────
  // Handlers for Single Day Editing
  // ────────────────────────────────────────────────────────────
  const handleStatusChange = (teacherId, newStatus) => {
    setRecords(prev => prev.map(t => (t.teacherId === teacherId ? { ...t, status: newStatus } : t)));
  };

  const handleFieldChange = (teacherId, field, value) => {
    setRecords(prev => prev.map(t => (t.teacherId === teacherId ? { ...t, [field]: value } : t)));
  };

  // ────────────────────────────────────────────────────────────
  // Quick Actions (উপস্থিতি নির্বাচন করুন)
  // ────────────────────────────────────────────────────────────
  const markAllStatus = (targetStatus) => {
    setRecords(prev => prev.map(t => ({ ...t, status: targetStatus })));
    const label = targetStatus === 'present' ? 'উপস্থিত' : targetStatus === 'absent' ? 'অনুপস্থিত' : 'রিসেট';
    showToast(`সকল শিক্ষককে "${label}" করা হয়েছে`);
  };

  const markUnassignedAsPresent = () => {
    setRecords(prev => prev.map(t => {
      if (!t.status || t.status === 'not_assigned') {
        return { ...t, status: 'present' };
      }
      return t;
    }));
    showToast('বাকি সকল শিক্ষককে উপস্থিত করা হয়েছে');
  };

  // ────────────────────────────────────────────────────────────
  // Handlers for Matrix Mode Editing
  // ────────────────────────────────────────────────────────────
  const cycleMatrixStatus = (teacherId, dStr) => {
    const statusCycle = ['present', 'absent', 'late', 'on_leave'];
    setMatrixAttendance(prev => {
      const current = prev[teacherId]?.[dStr]?.status || 'present';
      const curIdx = statusCycle.indexOf(current);
      const nextStatus = statusCycle[(curIdx + 1) % statusCycle.length];

      return {
        ...prev,
        [teacherId]: {
          ...(prev[teacherId] || {}),
          [dStr]: {
            ...(prev[teacherId]?.[dStr] || {}),
            status: nextStatus,
          },
        },
      };
    });
  };

  const markAllRangePresent = () => {
    setMatrixAttendance(prev => {
      const next = { ...prev };
      records.forEach(r => {
        const tId = r.teacherId;
        next[tId] = { ...(next[tId] || {}) };
        dateRangeList.forEach(dStr => {
          next[tId][dStr] = {
            ...(next[tId][dStr] || {}),
            status: 'present',
          };
        });
      });
      return next;
    });
    showToast('সকল দিনের জন্য সকল শিক্ষককে উপস্থিত করা হয়েছে');
  };

  const markFridaysAsLeave = () => {
    setMatrixAttendance(prev => {
      const next = { ...prev };
      dateRangeList.forEach(dStr => {
        const dayOfWeek = new Date(dStr + 'T00:00:00.000Z').getUTCDay();
        if (dayOfWeek === 5) { // Friday
          records.forEach(r => {
            const tId = r.teacherId;
            next[tId] = { ...(next[tId] || {}) };
            next[tId][dStr] = {
              ...(next[tId][dStr] || {}),
              status: 'on_leave',
              remarks: 'শুক্রবার সাপ্তাহিক ছুটি',
            };
          });
        }
      });
      return next;
    });
    showToast('সকল শুক্রবার ছুটি হিসেবে চিহ্নিত করা হয়েছে');
  };

  // ────────────────────────────────────────────────────────────
  // Save Attendance (Single Date or Matrix Range)
  // ────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!canManage) return;
    try {
      setSaving(true);
      if (dateMode === 'single') {
        const payload = {
          date,
          attendances: records.map(r => ({
            teacherId: r.teacherId,
            status: r.status,
            inTime: r.inTime,
            outTime: r.outTime,
            source: r.source,
            remarks: r.remarks,
          })),
        };
        const res = await api.post('/attendance/teachers', payload);
        if (res.data?.success) {
          showToast(res.data.message || 'শিক্ষকদের হাজিরা সফলভাবে সংরক্ষিত হয়েছে');
          fetchAttendance();
        }
      } else {
        const attendances = records.map(r => {
          const tId = r.teacherId;
          const statuses = {};
          const remarksMap = {};
          dateRangeList.forEach(dStr => {
            statuses[dStr] = matrixAttendance[tId]?.[dStr]?.status || 'present';
            remarksMap[dStr] = matrixAttendance[tId]?.[dStr]?.remarks || '';
          });
          return {
            teacherId: tId,
            statuses,
            remarksMap,
          };
        });

        const payload = {
          dates: dateRangeList,
          attendances,
        };
        const res = await api.post('/attendance/teachers', payload);
        if (res.data?.success) {
          showToast(res.data.message || 'সকল দিনের হাজিরা সফলভাবে সংরক্ষিত হয়েছে');
          fetchAttendance();
        }
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSaving(false);
    }
  };

  // ────────────────────────────────────────────────────────────
  // USB RFID Card Scan Submission
  // ────────────────────────────────────────────────────────────
  const handleCardScanSubmit = async (e) => {
    e.preventDefault();
    if (!scannedCardId.trim()) return;

    try {
      setScanningCard(true);
      const res = await api.post('/attendance/teachers/card-punch', { cardId: scannedCardId.trim() });
      if (res.data?.success) {
        showToast(res.data.message || 'কার্ড পাঞ্চ সফল হয়েছে');
        setScannedCardId('');
        fetchAttendance(true);
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'কার্ড স্ক্যান ব্যর্থ হয়েছে', 'error');
    } finally {
      setScanningCard(false);
      if (cardInputRef.current) {
        cardInputRef.current.focus();
      }
    }
  };


  // ────────────────────────────────────────────────────────────
  // Print Sheet Generation with Selected Columns & Sorting
  // ────────────────────────────────────────────────────────────
  const generatePrintableContentHtml = () => {
    let sortedList = [...records];
    if (printSortBy === 'name') {
      sortedList.sort((a, b) => a.name.localeCompare(b.name, 'bn'));
    } else if (printSortBy === 'id') {
      sortedList.sort((a, b) => {
        const idA = (a.deviceUserId || a.teacherId || '').replace(/\D/g, '');
        const idB = (b.deviceUserId || b.teacherId || '').replace(/\D/g, '');
        return (parseInt(idA, 10) || 0) - (parseInt(idB, 10) || 0);
      });
    } else if (printSortBy === 'designation') {
      sortedList.sort((a, b) => (a.designation || '').localeCompare(b.designation || '', 'bn'));
    } else if (printSortBy === 'status') {
      const order = { present: 1, late: 2, on_leave: 3, absent: 4 };
      sortedList.sort((a, b) => (order[a.status] || 5) - (order[b.status] || 5));
    }

    const formattedDate = new Date(date).toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    let thHtml = '';
    if (printColumns.serial) thHtml += `<th style="width: 32px; text-align: center;">#</th>`;
    if (printColumns.id) thHtml += `<th style="width: 85px; text-align: center;">শিক্ষক আইডি</th>`;
    if (printColumns.name) thHtml += `<th style="min-width: 140px;">শিক্ষকের নাম</th>`;
    if (printColumns.designation) thHtml += `<th style="width: 100px;">পদবি</th>`;
    if (printColumns.phone) thHtml += `<th style="width: 95px; text-align: center;">মোবাইল</th>`;
    if (printColumns.status) thHtml += `<th style="width: 80px; text-align: center;">স্ট্যাটাস</th>`;
    if (printColumns.inTime) thHtml += `<th style="width: 75px; text-align: center;">ইন-টাইম</th>`;
    if (printColumns.outTime) thHtml += `<th style="width: 75px; text-align: center;">আউট-টাইম</th>`;
    if (printColumns.punchCount) thHtml += `<th style="width: 60px; text-align: center;">পাঞ্চ</th>`;
    if (printColumns.signBox) thHtml += `<th style="width: 100px; text-align: center;">স্বাক্ষর বক্স</th>`;
    if (printColumns.remarks) thHtml += `<th style="width: 90px;">মন্তব্য</th>`;

    let rowsHtml = '';
    sortedList.forEach((r, idx) => {
      const isPresent = r.status === 'present';
      const isAbsent = r.status === 'absent';
      const isLate = r.status === 'late';
      const statusColor = isPresent ? '#15803d' : isAbsent ? '#b91c1c' : isLate ? '#b45309' : '#1d4ed8';
      const statusBg = isPresent ? '#dcfce7' : isAbsent ? '#fee2e2' : isLate ? '#fef3c7' : '#dbeafe';
      const statusText = isPresent ? 'উপস্থিত' : isAbsent ? 'অনুপস্থিত' : isLate ? 'বিলম্ব' : 'ছুটি';

      rowsHtml += `<tr>`;
      if (printColumns.serial) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px;">${idx + 1}</td>`;
      if (printColumns.id) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px; color: #475569;">${r.deviceUserId || r.teacherId?.slice(-6) || '—'}</td>`;
      if (printColumns.name) rowsHtml += `<td style="font-weight: 700; font-size: 12px; color: #0f172a;">${r.name}</td>`;
      if (printColumns.designation) rowsHtml += `<td style="font-size: 11px; color: #334155;">${r.designation || 'শিক্ষক'}</td>`;
      if (printColumns.phone) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px; color: #475569;">${r.phone || '—'}</td>`;
      if (printColumns.status) {
        rowsHtml += `
          <td style="text-align: center;">
            <span style="display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${statusColor}; background: ${statusBg}; border: 1px solid ${statusColor};">
              ${statusText}
            </span>
          </td>
        `;
      }
      if (printColumns.inTime) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px;">${r.inTime || '—'}</td>`;
      if (printColumns.outTime) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px;">${r.outTime || '—'}</td>`;
      if (printColumns.punchCount) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px; font-weight: bold;">${r.punchCount || 0}</td>`;
      if (printColumns.signBox) {
        rowsHtml += `
          <td style="width: 100px; height: 28px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle;">
            <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
          </td>
        `;
      }
      if (printColumns.remarks) rowsHtml += `<td style="font-size: 10.5px; color: #475569;">${r.remarks || ''}</td>`;
      rowsHtml += `</tr>`;
    });

    return `
      <div class="print-sheet-container" style="position: relative; width: 100%; min-height: 100%; padding: 0; overflow: hidden; background: #ffffff;">
        <div class="print-content-layer" style="position: relative; z-index: 10;">
          ${getMadrasahHeaderHtml({
            title: '📋 শিক্ষক ও কর্মকর্তা দৈনিক হাজিরা বিবরণী',
            orientation: 'landscape',
            metaLeft: `<strong>তারিখ:</strong> ${formattedDate} | <strong>শাখা:</strong> ${branchName}`,
            metaRight: `<strong>মোট স্টাফ:</strong> ${stats.total} জন (উপস্থিত: ${stats.present}, হাজিরার হার: ${stats.presentRate}%)`
          })}

          <div class="stats-bar" style="display: flex; justify-content: center; gap: 14px; margin: 8px 0 12px 0; font-size: 11px; font-weight: bold;">
            <span style="color: #15803d; background: #dcfce7; padding: 3px 12px; border-radius: 4px; border: 1px solid #86efac;">উপস্থিত: ${stats.present} জন</span>
            <span style="color: #b91c1c; background: #fee2e2; padding: 3px 12px; border-radius: 4px; border: 1px solid #fca5a5;">অনুপস্থিত: ${stats.absent} জন</span>
            <span style="color: #b45309; background: #fef3c7; padding: 3px 12px; border-radius: 4px; border: 1px solid #fde68a;">বিলম্ব: ${stats.late} জন</span>
            <span style="color: #1d4ed8; background: #dbeafe; padding: 3px 12px; border-radius: 4px; border: 1px solid #93c5fd;">ছুটি: ${stats.leave} জন</span>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead><tr>${thHtml}</tr></thead>
            <tbody>${rowsHtml}</tbody>
          </table>

          ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
        </div>
      </div>
    `;
  };

  const generatePrintableHtml = () => {
    return `
      <!DOCTYPE html>
      <html lang="bn">
      <head>
        <meta charset="UTF-8">
        <title>শিক্ষক ও স্টাফ দৈনিক হাজিরা বিবরণী - ${madrasahName}</title>
        ${getMadrasahPrintStyles('landscape')}
        <style>
          .print-card { max-width: 100%; margin: 0 auto; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #0f766e; color: #fff; font-size: 11.5px; font-weight: 700; padding: 6px 6px; text-align: left; }
          td { padding: 5px 6px; border-bottom: 1px solid #e2e8f0; font-size: 11px; }
          @media print {
            body { padding: 0; }
            .print-card { border: none; padding: 0; }
          }
        </style>
      </head>
      <body>
        ${generatePrintableContentHtml()}
        <script>
          window.onload = function() { setTimeout(function() { window.print(); }, 250); };
        </script>
      </body>
      </html>
    `;
  };

  const handleExecutePrint = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।');
      return;
    }
    printWin.document.write(generatePrintableHtml());
    printWin.document.close();
  };

  return (
    <div className="animate-fade-in teacher-attendance-container" style={{ position: 'relative', paddingBottom: '30px' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          animation: 'slideDown 0.3s ease-out', maxWidth: '420px',
        }}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{toast.message}</span>
        </div>
      )}

      {/* Page Header (Compact) */}
      <div className="page-header attendance-page-header no-print" style={{ marginBottom: '12px' }}>
        <div className="flex justify-between items-center flex-wrap gap-10">
          <div>
            <h1 className="page-title flex items-center gap-6" style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>
              <GraduationCap size={24} className="text-primary" /> শিক্ষক ও স্টাফ দৈনিক হাজিরা
            </h1>
            <p className="page-subtitle" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
              ইন-আউট টাইম, মাল্টি-পাঞ্চ হিস্ট্রি, লেট কাট-অফ ও বায়োমেট্রিক হাজিরা
            </p>
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowPrintModal(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '32px', fontSize: '0.78rem' }}
            >
              <Printer size={14} /> প্রিন্ট প্রিভিউ
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleSave}
              disabled={saving}
              style={{ display: 'flex', alignItems: 'center', gap: '5px', height: '32px', fontSize: '0.8rem', fontWeight: 700 }}
            >
              <Save size={14} /> {saving ? '...' : 'হাজিরা সংরক্ষণ'}
            </button>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. ULTRA-COMPACT SINGLE ROW TOOLBAR (All Filters in 1 Row)   */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="card mb-12 no-print" style={{ padding: '8px 12px', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          
          {/* Left Block: Date, Search, Status Dropdown, Late Cutoff */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 auto', flexWrap: 'wrap' }}>
            
            {/* Date Input */}
            {dateMode === 'single' ? (
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="form-input"
                style={{ height: '32px', fontSize: '0.8rem', width: '130px', padding: '2px 6px' }}
                title="হাজিরার তারিখ"
              />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="form-input"
                  style={{ height: '32px', fontSize: '0.78rem', width: '115px', padding: '2px 4px' }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>হতে</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="form-input"
                  style={{ height: '32px', fontSize: '0.78rem', width: '115px', padding: '2px 4px' }}
                />
              </div>
            )}

            {/* Mode Switcher Small Toggle */}
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setDateMode(m => m === 'single' ? 'range' : 'single')}
              title={dateMode === 'single' ? 'তারিখ ব্যাপ্তি (Matrix) মোড' : 'একক দিন মোড'}
              style={{ height: '32px', padding: '0 8px', fontSize: '0.76rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}
            >
              {dateMode === 'single' ? <CalendarRange size={13} className="mr-4" /> : <Calendar size={13} className="mr-4" />}
              {dateMode === 'single' ? 'ব্যাপ্তি' : 'একক দিন'}
            </button>

            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 180px', maxWidth: '280px', minWidth: '150px' }}>
              <Search size={14} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="শিক্ষকের নাম/আইডি/ফোন..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '28px', height: '32px', fontSize: '0.8rem', width: '100%' }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Status Filter Dropdown */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="form-input"
              style={{ height: '32px', fontSize: '0.8rem', minWidth: '115px', padding: '2px 6px' }}
            >
              <option value="all">সকল স্ট্যাটাস ({stats.total})</option>
              <option value="present">উপস্থিত ({stats.present})</option>
              <option value="absent">অনুপস্থিত ({stats.absent})</option>
              <option value="late">বিলম্ব ({stats.late})</option>
              <option value="on_leave">ছুটি ({stats.leave})</option>
              <option value="not_assigned">অনির্ধারিত ({stats.notAssigned})</option>
            </select>

            {/* Late Cut-Off Time Setter & Auto-Absent (একই লাইনে) */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--bg-tertiary)',
                padding: '2px 6px', borderRadius: '6px', border: '1px solid var(--border-color)', height: '32px'
              }}
              title="এই সময়ের পর প্রথম ফিঙ্গারপ্রিন্ট দিলে স্বয়ংক্রিয়ভাবে 'বিলম্ব' হিসেবে চিহ্নিত হবে"
            >
              <Clock size={13} style={{ color: '#f59e0b' }} />
              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-secondary)' }}>কাট-অফ:</span>
              <input
                type="time"
                value={cutoffTime}
                onChange={e => setCutoffTime(e.target.value)}
                style={{
                  height: '24px', fontSize: '0.78rem', border: '1px solid var(--border-color)',
                  borderRadius: '4px', background: 'var(--bg-card)', padding: '0 4px', width: '78px',
                  fontFamily: 'monospace', fontWeight: 700
                }}
              />
              <button
                type="button"
                onClick={handleSaveCutoff}
                disabled={savingCutoff}
                className="btn btn-ghost btn-sm"
                style={{ height: '24px', padding: '0 5px', fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 700 }}
                title="কাট-অফ টাইম সেভ করুন"
              >
                {savingCutoff ? '...' : 'সেট'}
              </button>
            </div>

            {/* Auto Absent Switch like students */}
            <label
              style={{
                display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer',
                fontSize: '0.73rem', fontWeight: 600, background: 'var(--bg-tertiary)',
                padding: '2px 6px', borderRadius: '6px', border: '1px solid var(--border-color)',
                height: '32px', userSelect: 'none'
              }}
              title="কাট-অফ সময় পার হলে অটোমেটিক অনুপস্থিত মার্ক করা সক্রিয় রাখুন"
            >
              <input
                type="checkbox"
                checked={teacherAutoAbsentEnabled}
                onChange={e => handleToggleAutoAbsent(e.target.checked)}
                style={{ cursor: 'pointer', accentColor: 'var(--primary)', width: '13px', height: '13px' }}
              />
              <span style={{ color: teacherAutoAbsentEnabled ? 'var(--primary)' : 'var(--text-secondary)' }}>
                অটো অনুপস্থিত
              </span>
            </label>
            <button
              type="button"
              onClick={handleRunTeacherAbsentCheck}
              disabled={runningAbsentCheck}
              className="btn btn-ghost btn-sm"
              style={{ height: '32px', padding: '0 6px', fontSize: '0.72rem', border: '1px solid var(--border-color)' }}
              title="কাট-অফ সময় পার হওয়া শিক্ষকদের এখনই অটোমেটিক অনুপস্থিত মার্ক করতে ক্লিক করুন"
            >
              {runningAbsentCheck ? <RefreshCw size={12} className="animate-spin" /> : <Bell size={12} />}
            </button>
          </div>

          {/* Right Block: Action Buttons (একই লাইনে) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {dateMode === 'single' ? (
              <>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm text-success"
                  onClick={() => markAllStatus('present')}
                  style={{ fontSize: '0.78rem', padding: '4px 10px', height: '32px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <CheckCircle2 size={13} /> সবাই উপস্থিত
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm text-danger"
                  onClick={() => markAllStatus('absent')}
                  style={{ fontSize: '0.78rem', padding: '4px 10px', height: '32px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <XCircle size={13} /> সবাই অনুপস্থিত
                </button>
                {stats.notAssigned > 0 && (
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm text-primary"
                    onClick={markUnassignedAsPresent}
                    style={{ fontSize: '0.78rem', padding: '4px 8px', height: '32px', fontWeight: 600 }}
                    title="বাকিদের উপস্থিত করুন"
                  >
                    বাকিদের উপ.
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => markAllStatus('not_assigned')}
                  style={{ fontSize: '0.75rem', padding: '4px 8px', height: '32px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)', fontWeight: 600 }}
                  title="সকল শিক্ষকের আজকের হাজিরা রিসেট (খালি) করুন"
                >
                  <RotateCcw size={12} /> রিসেট
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm text-success"
                  onClick={markAllRangePresent}
                  style={{ fontSize: '0.78rem', padding: '4px 10px', height: '32px', fontWeight: 600 }}
                >
                  ✓ সবাই উপস্থিত
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm text-info"
                  onClick={markFridaysAsLeave}
                  style={{ fontSize: '0.78rem', padding: '4px 10px', height: '32px', fontWeight: 600 }}
                >
                  শুক্রবার ছুটি
                </button>
              </>
            )}

            {/* RFID Card Scan Compact Input */}
            <form onSubmit={handleCardScanSubmit} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <input
                ref={cardInputRef}
                type="text"
                placeholder="কার্ড সোয়াইপ..."
                value={scannedCardId}
                onChange={e => setScannedCardId(e.target.value)}
                disabled={scanningCard}
                className="form-input"
                style={{ width: '110px', height: '32px', fontSize: '0.76rem', padding: '2px 6px' }}
                title="ইউএসবি আরএফআইডি কার্ড রিডার দিয়ে সোয়াইপ করুন"
              />
              <button
                type="submit"
                disabled={scanningCard || !scannedCardId.trim()}
                className="btn btn-secondary btn-sm"
                style={{ height: '32px', padding: '0 8px', fontSize: '0.76rem' }}
                title="কার্ড পাঞ্চ করুন"
              >
                {scanningCard ? <RefreshCw size={12} className="animate-spin" /> : <CreditCard size={13} />}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. SINGLE DAY VIEW: Table with In-Time, Out-Time & Punch Logs */}
      {/* ──────────────────────────────────────────────────────────── */}
      {dateMode === 'single' ? (
        <div className="card table-container" style={{ padding: 0, borderRadius: '14px', overflow: 'hidden' }}>
          {/* Compact Stats Sub-bar */}
          <div style={{ padding: '8px 16px', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '0.78rem' }}>
            <div className="text-muted flex gap-6" style={{ alignItems: 'center' }}>
              <span>মোট স্টাফ: <strong>{stats.total}</strong> জন</span>
              <span>• হাজিরার হার: <strong>{stats.presentRate}%</strong></span>
            </div>
            <div className="flex gap-10 font-semibold">
              <span style={{ color: 'var(--success)' }}>✓ উপস্থিত: {stats.present}</span>
              <span style={{ color: 'var(--danger)' }}>✕ অনুপস্থিত: {stats.absent}</span>
              <span style={{ color: '#f59e0b' }}>⏰ বিলম্ব: {stats.late}</span>
              <span style={{ color: '#3b82f6' }}>☕ ছুটি: {stats.leave}</span>
              {stats.notAssigned > 0 && (
                <span style={{ color: 'var(--text-muted)' }}>⏳ অপেক্ষমান/রিসেট: {stats.notAssigned}</span>
              )}
            </div>
          </div>

          <div className="table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ width: '35px', textAlign: 'center', padding: '8px 4px' }}>#</th>
                  <th style={{ minWidth: '170px', padding: '8px 8px' }}>শিক্ষক ও পদবি</th>
                  <th style={{ width: '105px', padding: '8px 6px' }}>মোবাইল</th>
                  <th style={{ width: '220px', textAlign: 'center', padding: '8px 6px' }}>হাজিরা স্ট্যাটাস</th>
                  <th style={{ width: '90px', textAlign: 'center', padding: '8px 4px' }}>ইন-টাইম</th>
                  <th style={{ width: '90px', textAlign: 'center', padding: '8px 4px' }}>আউট-টাইম</th>
                  <th style={{ width: '90px', textAlign: 'center', padding: '8px 4px' }}>পাঞ্চ লগ</th>
                  <th style={{ width: '85px', textAlign: 'center', padding: '8px 4px' }} title="হাজিরার মাধ্যম: ডিভাইস (বায়োমেট্রিক), কার্ড (RFID), ম্যানুয়াল (সফটওয়্যার ক্লিক)">মাধ্যম</th>
                  <th style={{ minWidth: '130px', padding: '8px 8px' }}>মন্তব্য</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((t, idx) => {
                    const isPresent = t.status === 'present';
                    const isAbsent = t.status === 'absent';
                    const isLate = t.status === 'late';
                    const isLeave = t.status === 'on_leave';
                    const hasStatus = isPresent || isAbsent || isLate || isLeave;

                    return (
                      <tr key={t.teacherId} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'monospace', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '6px 4px' }}>
                          {idx + 1}
                        </td>
                        <td style={{ padding: '6px 8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                              width: '32px', height: '32px', borderRadius: '50%',
                              background: 'rgba(16,185,129,0.12)', display: 'flex',
                              alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                              <User size={16} color="var(--primary)" />
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{t.name}</div>
                              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                                {t.designation || 'শিক্ষক'} {t.deviceUserId ? `[${t.deviceUserId}]` : ''}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '6px 6px' }}>
                          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {t.phone || '—'}
                          </div>
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px 4px' }}>
                          <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                            <button
                              type="button"
                              onClick={() => handleStatusChange(t.teacherId, isPresent ? 'not_assigned' : 'present')}
                              style={{
                                padding: '4px 8px', fontSize: '0.74rem', fontWeight: isPresent ? 700 : 500, border: 'none', cursor: 'pointer',
                                background: isPresent ? 'var(--success)' : 'transparent',
                                color: isPresent ? '#fff' : 'var(--text-secondary)',
                              }}
                              title={isPresent ? 'আন-সিলেক্ট করতে আবার ক্লিক করুন' : 'উপস্থিত'}
                            >
                              উপস্থিত
                            </button>
                            <button
                              type="button"
                              onClick={() => handleStatusChange(t.teacherId, isAbsent ? 'not_assigned' : 'absent')}
                              style={{
                                padding: '4px 8px', fontSize: '0.74rem', fontWeight: isAbsent ? 700 : 500, border: 'none', cursor: 'pointer',
                                borderLeft: '1px solid var(--border-color)',
                                borderRight: '1px solid var(--border-color)',
                                background: isAbsent ? 'var(--danger)' : 'transparent',
                                color: isAbsent ? '#fff' : 'var(--text-secondary)',
                              }}
                              title={isAbsent ? 'আন-সিলেক্ট করতে আবার ক্লিক করুন' : 'অনুপস্থিত'}
                            >
                              অনুপস্থিত
                            </button>
                            <button
                              type="button"
                              onClick={() => handleStatusChange(t.teacherId, isLate ? 'not_assigned' : 'late')}
                              style={{
                                padding: '4px 8px', fontSize: '0.74rem', fontWeight: isLate ? 700 : 500, border: 'none', cursor: 'pointer',
                                borderRight: '1px solid var(--border-color)',
                                background: isLate ? '#f59e0b' : 'transparent',
                                color: isLate ? '#fff' : 'var(--text-secondary)',
                              }}
                              title={isLate ? 'আন-সিলেক্ট করতে আবার ক্লিক করুন' : 'বিলম্ব'}
                            >
                              বিলম্ব
                            </button>
                            <button
                              type="button"
                              onClick={() => handleStatusChange(t.teacherId, isLeave ? 'not_assigned' : 'on_leave')}
                              style={{
                                padding: '4px 8px', fontSize: '0.74rem', fontWeight: isLeave ? 700 : 500, border: 'none', cursor: 'pointer',
                                background: isLeave ? '#3b82f6' : 'transparent',
                                color: isLeave ? '#fff' : 'var(--text-secondary)',
                              }}
                              title={isLeave ? 'আন-সিলেক্ট করতে আবার ক্লিক করুন' : 'ছুটি'}
                            >
                              ছুটি
                            </button>
                            {hasStatus && (
                              <button
                                type="button"
                                onClick={() => handleStatusChange(t.teacherId, 'not_assigned')}
                                style={{
                                  padding: '4px 6px', fontSize: '0.70rem', border: 'none', cursor: 'pointer',
                                  borderLeft: '1px solid var(--border-color)',
                                  background: 'transparent',
                                  color: 'var(--text-muted)',
                                }}
                                title="এই শিক্ষকের স্ট্যাটাস রিসেট (খালি) করুন"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px 4px' }}>
                          <input
                            type="text"
                            value={t.inTime || ''}
                            onChange={e => handleFieldChange(t.teacherId, 'inTime', e.target.value)}
                            placeholder="08:00 AM"
                            className="form-input text-center font-mono"
                            style={{ height: '28px', fontSize: '0.78rem', padding: '2px 4px', maxWidth: '85px' }}
                          />
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px 4px' }}>
                          <input
                            type="text"
                            value={t.outTime || ''}
                            onChange={e => handleFieldChange(t.teacherId, 'outTime', e.target.value)}
                            placeholder="04:00 PM"
                            className="form-input text-center font-mono"
                            style={{ height: '28px', fontSize: '0.78rem', padding: '2px 4px', maxWidth: '85px' }}
                          />
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px 4px' }}>
                          {t.punchCount > 0 ? (
                            <button
                              type="button"
                              onClick={() => setActivePunchLog({
                                teacherName: t.name,
                                punchCount: t.punchCount,
                                punchTimes: t.punchTimes || [],
                              })}
                              className="badge badge-primary"
                              style={{
                                cursor: 'pointer', fontSize: '0.72rem', padding: '2px 6px',
                                display: 'inline-flex', alignItems: 'center', gap: '3px', border: 'none'
                              }}
                              title="সব পাঞ্চের সময় তালিকা দেখুন"
                            >
                              <Clock size={11} /> {t.punchCount} পাঞ্চ
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>—</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px 4px' }}>
                          {t.source === 'zkteco_device' ? (
                            <span className="badge badge-primary" style={{ fontSize: '0.68rem', padding: '2px 6px' }} title="বায়োমেট্রিক মেশিন (ফিঙ্গারপ্রিন্ট)">
                              ডিভাইস
                            </span>
                          ) : t.source === 'rfid_card' ? (
                            <span className="badge badge-success" style={{ fontSize: '0.68rem', padding: '2px 6px' }} title="ইউএসবি RFID কার্ড">
                              কার্ড
                            </span>
                          ) : t.source === 'auto_cron' ? (
                            <span className="badge badge-warning" style={{ fontSize: '0.68rem', padding: '2px 6px', color: '#b45309', background: '#fef3c7' }} title="কাট-অফ সময় পার হওয়ায় স্বয়ংক্রিয় অনুপস্থিত">
                              অটো-অনুপস্থিত
                            </span>
                          ) : hasStatus ? (
                            <span className="badge badge-ghost text-muted" style={{ fontSize: '0.68rem', padding: '2px 6px', opacity: 0.7 }} title="সফটওয়্যার থেকে ম্যানুয়াল হাজিরা">
                              ম্যানুয়াল
                            </span>
                          ) : (
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>—</span>
                          )}
                        </td>
                        <td style={{ padding: '6px 6px' }}>
                          <input
                            type="text"
                            value={t.remarks || ''}
                            onChange={e => handleFieldChange(t.teacherId, 'remarks', e.target.value)}
                            placeholder="মন্তব্য..."
                            className="form-input"
                            style={{ height: '28px', fontSize: '0.78rem', padding: '2px 6px' }}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <GraduationCap size={32} color="var(--border-color)" />
                        <span style={{ fontSize: '0.85rem' }}>কোনো শিক্ষকের তথ্য পাওয়া যায়নি</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ──────────────────────────────────────────────────────────── */
        /* 3. DATE RANGE VIEW: Interactive Matrix Sheet                */
        /* ──────────────────────────────────────────────────────────── */
        <div className="card table-container" style={{ padding: 0, borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ padding: '8px 16px', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '0.76rem' }}>
            <div className="text-muted flex gap-6" style={{ alignItems: 'center' }}>
              <span>ব্যাপ্তি: {startDate} হতে {endDate} ({dateRangeList.length} দিন)</span>
              <span>• সেলে ক্লিক করে স্ট্যাটাস পরিবর্তন করুন</span>
            </div>
            <div className="flex gap-8">
              <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></span> উপস্থিত</span>
              <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></span> অনুপস্থিত</span>
              <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }}></span> বিলম্ব</span>
              <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }}></span> ছুটি</span>
            </div>
          </div>

          <div className="table-wrapper" style={{ maxHeight: '650px', overflowX: 'auto' }}>
            <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ width: '35px', textAlign: 'center', position: 'sticky', left: 0, background: 'var(--bg-tertiary)', zIndex: 3, padding: '6px 4px' }}>#</th>
                  <th style={{ minWidth: '160px', position: 'sticky', left: '35px', background: 'var(--bg-tertiary)', zIndex: 3, padding: '6px 8px' }}>শিক্ষক ও পদবি</th>
                  {dateRangeList.map(dStr => {
                    const d = new Date(dStr + 'T00:00:00.000Z');
                    const dayOfWeek = d.getUTCDay();
                    const isFriday = dayOfWeek === 5;
                    const dateNum = d.getUTCDate();
                    const dayName = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'][dayOfWeek];

                    return (
                      <th
                        key={dStr}
                        style={{
                          textAlign: 'center', minWidth: '55px', padding: '4px 2px',
                          background: isFriday ? 'rgba(245, 158, 11, 0.12)' : 'inherit',
                          borderLeft: '1px solid var(--border-color)',
                        }}
                      >
                        <div style={{ fontSize: '0.76rem', fontWeight: 700, color: isFriday ? '#b45309' : 'inherit' }}>{dateNum}</div>
                        <div style={{ fontSize: '0.65rem', color: isFriday ? '#b45309' : 'var(--text-muted)' }}>{dayName}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((t, idx) => {
                    return (
                      <tr key={t.teacherId} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'monospace', color: 'var(--text-muted)', position: 'sticky', left: 0, background: 'var(--bg-card)', zIndex: 2, fontSize: '0.78rem' }}>
                          {idx + 1}
                        </td>
                        <td style={{ position: 'sticky', left: '35px', background: 'var(--bg-card)', zIndex: 2, padding: '4px 8px' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{t.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>{t.designation || 'শিক্ষক'}</div>
                        </td>
                        {dateRangeList.map(dStr => {
                          const status = matrixAttendance[t.teacherId]?.[dStr]?.status || 'present';
                          const isPresent = status === 'present';
                          const isAbsent = status === 'absent';
                          const isLate = status === 'late';
                          const isLeave = status === 'on_leave';

                          const bg = isPresent ? '#dcfce7' : isAbsent ? '#fee2e2' : isLate ? '#fef3c7' : '#dbeafe';
                          const color = isPresent ? '#15803d' : isAbsent ? '#b91c1c' : isLate ? '#b45309' : '#1d4ed8';
                          const text = isPresent ? 'উপ' : isAbsent ? 'অনুপ' : isLate ? 'বিলম্ব' : 'ছুটি';

                          return (
                            <td
                              key={dStr}
                              onClick={() => cycleMatrixStatus(t.teacherId, dStr)}
                              style={{
                                textAlign: 'center', cursor: 'pointer', padding: '4px 2px',
                                borderLeft: '1px solid var(--border-color)', userSelect: 'none'
                              }}
                              title={`${t.name} - ${dStr}: ক্লিক করে পরিবর্তন করুন`}
                            >
                              <span style={{
                                display: 'inline-block', width: '34px', padding: '2px 0',
                                borderRadius: '4px', fontSize: '0.68rem', fontWeight: 700,
                                background: bg, color: color, border: `1px solid ${color}`
                              }}>
                                {text}
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={dateRangeList.length + 2} style={{ textAlign: 'center', padding: '28px', color: 'var(--text-muted)' }}>
                      কোনো শিক্ষকের তথ্য পাওয়া যায়নি
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────── */}
      {/* Popover Modal for Multi-Punch Logs                           */}
      {/* ──────────────────────────────────────────────────────────── */}
      {activePunchLog && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
          <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '360px', borderRadius: '16px', padding: '18px', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{activePunchLog.teacherName}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>দৈনিক পাঞ্চ বিবরণী ({activePunchLog.punchCount} বার)</div>
              </div>
              <button
                type="button"
                onClick={() => setActivePunchLog(null)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={18} />
              </button>
            </div>

            {activePunchLog.punchTimes && activePunchLog.punchTimes.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activePunchLog.punchTimes.map((timeStr, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'var(--bg-tertiary)', borderRadius: '6px', fontSize: '0.8rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {i === 0 ? '১ম পাঞ্চ (ইন-টাইম)' : i === activePunchLog.punchTimes.length - 1 ? 'শেষ পাঞ্চ (আউট-টাইম)' : `${i + 1}তম পাঞ্চ`}
                    </span>
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                      {timeStr}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '14px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                পাঞ্চ টাইমের বিস্তারিত রেকর্ড পাওয়া যায়নি।
              </div>
            )}

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setActivePunchLog(null)}
              style={{ width: '100%', marginTop: '14px', justifyContent: 'center' }}
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}


      {/* ──────────────────────────────────────────────────────────── */}
      {/* Interactive Print Preview Modal                              */}
      {/* ──────────────────────────────────────────────────────────── */}
      {showPrintModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: windowWidth < 640 ? '6px' : '16px'
        }}>
          <div className="card animate-scale-up" style={{
            width: '100%', maxWidth: '980px', maxHeight: '96vh',
            display: 'flex', flexDirection: 'column', borderRadius: '16px',
            background: 'var(--bg-card)', padding: 0, overflow: 'hidden'
          }}>
            <div style={{ padding: '12px 18px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-tertiary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Printer size={18} className="text-primary" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>প্রিন্ট প্রিভিউ ও সেটিংস</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '10px 18px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600 }}>সর্টিং:</label>
                  <select
                    value={printSortBy}
                    onChange={e => setPrintSortBy(e.target.value)}
                    className="form-input"
                    style={{ height: '30px', fontSize: '0.78rem', minWidth: '140px', padding: '2px 4px' }}
                  >
                    <option value="name">নামের ক্রমানুসারে</option>
                    <option value="id">আইডি ক্রমানুসারে</option>
                    <option value="designation">পদবি অনুযায়ী</option>
                    <option value="status">স্ট্যাটাস অনুযায়ী</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleExecutePrint}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 14px', fontWeight: 700, height: '30px', fontSize: '0.78rem' }}
                >
                  <Printer size={14} /> প্রিন্ট করুন (A4)
                </button>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px' }}>কলাম নির্বাচন:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    { key: 'serial', label: 'ক্রমিক #' },
                    { key: 'id', label: 'শিক্ষক আইডি' },
                    { key: 'name', label: 'নাম' },
                    { key: 'designation', label: 'পদবি' },
                    { key: 'phone', label: 'মোবাইল' },
                    { key: 'status', label: 'স্ট্যাটাস' },
                    { key: 'inTime', label: 'ইন-টাইম' },
                    { key: 'outTime', label: 'আউট-টাইম' },
                    { key: 'punchCount', label: 'পাঞ্চ' },
                    { key: 'signBox', label: 'স্বাক্ষর বক্স' },
                    { key: 'remarks', label: 'মন্তব্য' },
                  ].map(col => (
                    <label
                      key={col.key}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.74rem',
                        cursor: 'pointer', padding: '2px 6px', borderRadius: '4px',
                        background: printColumns[col.key] ? 'rgba(16,185,129,0.1)' : 'var(--bg-tertiary)',
                        border: '1px solid', borderColor: printColumns[col.key] ? 'var(--primary)' : 'var(--border-color)',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={printColumns[col.key]}
                        onChange={e => setPrintColumns({ ...printColumns, [col.key]: e.target.checked })}
                      />
                      <span>{col.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Signature Roles Section */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '6px' }}>
                <PrintSignatureRoleSelector
                  selectedRoles={selectedSignatureRoles}
                  onChange={(roles) => {
                    setSelectedSignatureRoles(roles);
                    try {
                      localStorage.setItem('annur_footer_roles__teacher_attendance', JSON.stringify(roles));
                    } catch (_) {}
                  }}
                  additionalRoles={customRolesList}
                  style={{ marginBottom: '0', background: 'transparent', border: 'none', padding: '0' }}
                />
              </div>
            </div>


            {/* View Mode Toolbar for Mobile & Desktop */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 14px', background: '#1e293b', borderBottom: '1px solid #334155',
              flexWrap: 'wrap', gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#94a3b8' }}>ভিউ মোড:</span>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('scroll')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'scroll' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>↔️ ১০০% ফুল সাইজ (সাইড স্ক্রল)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('fit')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'fit' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>📱 স্ক্রিনে ফিট ({Math.round(mobileFitScale * 100)}%)</span>
                </button>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 600 }}>
                {previewZoom === 'scroll' ? '👉 ডানে-বামে আঙুল দিয়ে স্ক্রল করে পুরো শীট দেখুন' : '✓ পুরো শীট স্ক্রিনে দেখা যাচ্ছে'}
              </div>
            </div>

            {/* Scrollable Viewport Container (Horizontal & Vertical Touch Scrolling) */}
            <div
              className="print-preview-viewport"
              style={{
                flex: 1,
                overflowX: 'auto',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: windowWidth < 640 ? '8px' : '20px',
                background: '#0f172a',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: previewZoom === 'fit' ? '100%' : 'max-content',
                  minWidth: previewZoom === 'fit' ? '100%' : '880px',
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: previewZoom === 'fit' ? 'hidden' : 'visible',
                  height: previewZoom === 'fit' ? `calc(620px * ${mobileFitScale})` : 'auto'
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '24px 28px',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
                    width: '880px',
                    minWidth: '880px',
                    position: 'relative',
                    transform: previewZoom === 'fit' ? `scale(${mobileFitScale})` : 'none',
                    transformOrigin: 'top center'
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getMadrasahPrintStyles('landscape') + generatePrintableContentHtml()
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
