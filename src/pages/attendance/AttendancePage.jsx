import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  ClipboardCheck, CheckCircle, AlertCircle, Save, Search, 
  ChevronLeft, ChevronRight, Check, Calendar, 
  Filter, Users, UserCheck, UserX, Clock, Coffee, RotateCcw, 
  Printer, Sparkles, Layers, CalendarRange, Bell, RefreshCw,
  ChevronDown, SlidersHorizontal, X
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { SECTION_OPTIONS } from '../../utils/constants';
import { getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function AttendancePage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const userPerms = user?.permissions || (() => {
    try { return JSON.parse(localStorage.getItem('userPermissions') || '{}'); } catch { return {}; }
  })();
  const isSuperOrAdmin = ['super_admin', 'co_super_admin', 'admin', 'principal', 'vice_principal'].includes(user?.userType) || 
    ['co_super_admin', 'admin'].includes(user?.adminRole);
  const isTeacherRole = ['teacher', 'hifz_teacher'].includes(user?.userType);
  const canMarkAttendance = isSuperOrAdmin || isTeacherRole || userPerms?.can_mark_attendance || userPerms?.can_view_attendance || userPerms?.can_view_all_attendance;

  // Helper: Get today's date in Bangladesh timezone (YYYY-MM-DD)
  const getBDTodayStr = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });

  // Date selection mode: 'single' | 'range'
  const [dateMode, setDateMode] = useState('single');
  const [date, setDate] = useState(getBDTodayStr());

  // Date range state
  const todayStr = getBDTodayStr();
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 6);
    return d.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });
  });
  const [endDate, setEndDate] = useState(todayStr);

  // Filters
  const [classes, setClasses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [dbSections, setDbSections] = useState([]);

  const [selectedClass, setSelectedClass] = useState('all'); // 'all' or class ID
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSection, setSelectedSection] = useState('all'); // 'all' or section name/id

  // In-sheet local filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'present' | 'absent' | 'late' | 'on_leave' | 'not_assigned'

  // Data states
  const [students, setStudents] = useState([]);
  // Single-day attendance: { [studentId]: { status, remarks } }
  const [attendance, setAttendance] = useState({});
  // Multi-day attendance matrix: { [studentId]: { [dateStr]: { status, remarks } } }
  const [matrixAttendance, setMatrixAttendance] = useState({});

  const [loading, setLoading] = useState(false);
  const [metaLoading, setMetaLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }
  const [historyRecords, setHistoryRecords] = useState([]);

  // Pagination
  const PAGE_SIZE = 30;
  const [currentPage, setCurrentPage] = useState(1);

  // Sorting state for students table
  const [sortCol, setSortCol] = useState('roll');
  const [sortDir, setSortDir] = useState('asc'); // 'asc' | 'desc'

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) {
      return <span style={{ opacity: 0.35, fontSize: '0.72rem', marginLeft: '4px', verticalAlign: 'middle' }}>⇅</span>;
    }
    return (
      <span style={{ fontSize: '0.78rem', marginLeft: '4px', color: 'var(--primary-600, #10b981)', fontWeight: 800, verticalAlign: 'middle' }}>
        {sortDir === 'asc' ? '▲' : '▼'}
      </span>
    );
  };

  // Track if initial data load has happened
  const [dataLoaded, setDataLoaded] = useState(false);
  const autoRefreshRef = useRef(null);

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Cut-off Time and Auto-Absent State
  const [cutoffTime, setCutoffTime] = useState('09:30');
  const [autoAbsentEnabled, setAutoAbsentEnabled] = useState(false);
  const [outTimePushEnabled, setOutTimePushEnabled] = useState(false);
  const [loadingBioSettings, setLoadingBioSettings] = useState(false);
  const [savingBioSettings, setSavingBioSettings] = useState(false);
  const [runningAbsentCheck, setRunningAbsentCheck] = useState(false);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true);
  const [showCutoffBox, setShowCutoffBox] = useState(false);
  const [showActionTools, setShowActionTools] = useState(false);

  // Responsive mobile detector (matches 768px breakpoint used across the app)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || (window.matchMedia && window.matchMedia('(max-width: 768px)').matches);
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || (window.matchMedia && window.matchMedia('(max-width: 768px)').matches));
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ── Pre-defined Signature Roles Facility for Student Attendance ──
  const MAX_SIGNATURE_ROLES = 5;
  const DEFAULT_SIGNATURE_ROLES = [
    'শ্রেণী শিক্ষকের স্বাক্ষর',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রতিষ্ঠান প্রধান'
  ];
  const PRESET_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [previewZoom, setPreviewZoom] = useState('scroll'); // 'scroll' | 'fit'
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseSheetWidth = dateMode === 'range' ? 920 : 760;
  const mobileFitScale = useMemo(() => {
    const availableWidth = windowWidth - (windowWidth < 640 ? 24 : 48);
    return Math.min(1, Math.max(0.35, availableWidth / baseSheetWidth));
  }, [windowWidth, baseSheetWidth, dateMode]);

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__student_attendance');
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
        setToast({ type: 'error', message: 'কমপক্ষে ১টি স্বাক্ষর রোল নির্বাচন থাকতে হবে' });
        return;
      }
      next = selectedSignatureRoles.filter(r => r !== role);
    } else {
      if (selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES) {
        setToast({ type: 'error', message: `সর্বোচ্চ ${MAX_SIGNATURE_ROLES}টি স্বাক্ষর রোল নির্বাচন করা যাবে` });
        return;
      }
      next = [...selectedSignatureRoles, role];
    }
    setSelectedSignatureRoles(next);
    try {
      localStorage.setItem('annur_footer_roles__student_attendance', JSON.stringify(next));
    } catch (_) {}
  };

  const handleAddCustomRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newCustomRole.trim();
    if (!trimmed) return;
    if (PRESET_SIGNATURE_ROLES.includes(trimmed) || customRolesList.includes(trimmed)) {
      setToast({ type: 'error', message: 'এই পদবিটি তালিকায় আগেই আছে' });
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
        localStorage.setItem('annur_footer_roles__student_attendance', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomRole('');
    setToast({ type: 'success', message: `"${trimmed}" পদবি সফলভাবে যুক্ত হয়েছে` });
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
      const fallback = nextSelected.length > 0 ? nextSelected : DEFAULT_SIGNATURE_ROLES;
      setSelectedSignatureRoles(fallback);
      try {
        localStorage.setItem('annur_footer_roles__student_attendance', JSON.stringify(fallback));
      } catch (_) {}
    }
  };

  // Fetch initial metadata (classes, branches, sections) & biometric settings
  useEffect(() => {
    if (!canMarkAttendance) {
      setMetaLoading(false);
      return;
    }
    const fetchMetadata = async () => {
      try {
        const [resClasses, resBranches, resSections] = await Promise.all([
          api.get('/students/classes'),
          api.get('/students/branches'),
          api.get('/students/sections')
        ]);

        if (resClasses.data.success) {
          const classList = resClasses.data.data.classes || [];
          setClasses(classList);
        }

        if (resBranches.data.success) {
          setBranches(resBranches.data.data.branches || []);
        }

        if (resSections.data.success) {
          setDbSections(resSections.data.data.sections || []);
        }
      } catch (err) {
        console.error('Failed to fetch metadata', err);
        setToast({ type: 'error', message: 'মেটাডাটা লোড করতে সমস্যা হয়েছে' });
      } finally {
        setMetaLoading(false);
      }
    };
    fetchMetadata();

    // Fetch biometric cutoff settings
    const fetchBioSettings = async () => {
      try {
        setLoadingBioSettings(true);
        const res = await api.get('/attendance/biometric-settings');
        if (res.data?.success && res.data.data) {
          if (res.data.data.attendanceCutoffTime) setCutoffTime(res.data.data.attendanceCutoffTime);
          setAutoAbsentEnabled(Boolean(res.data.data.autoAbsentEnabled));
          setOutTimePushEnabled(Boolean(res.data.data.outTimePushEnabled));
        }
      } catch (err) {
        console.error('Failed to fetch biometric settings in attendance page', err);
      } finally {
        setLoadingBioSettings(false);
      }
    };
    if (isSuperOrAdmin) {
      fetchBioSettings();
    }
  }, [canMarkAttendance, isSuperOrAdmin]);

  // সেভ কাট-অফ ও অটো-অ্যাবসেন্ট সেটিংস
  const handleSaveCutoffSettings = async (e) => {
    if (e) e.preventDefault();
    try {
      setSavingBioSettings(true);
      const res = await api.patch('/attendance/biometric-settings', {
        attendanceCutoffTime: cutoffTime,
        autoAbsentEnabled,
        outTimePushEnabled,
      });
      if (res.data?.success) {
        setToast({ type: 'success', message: 'উপস্থিতির কাট-অফ ও ছুটির নোটিফিকেশন সেটিংস সফলভাবে সংরক্ষিত হয়েছে!' });
      }
    } catch (err) {
      setToast({ type: 'error', message: err.response?.data?.message || 'সেটিংস সেভ করতে সমস্যা হয়েছে' });
    } finally {
      setSavingBioSettings(false);
    }
  };

  // এখনই অনুপস্থিত চেক চালান
  const handleRunAbsentCheck = async () => {
    const confirmRun = window.confirm(
      'সতর্কবার্তা: নির্ধারিত সময় পার হওয়া অনুপস্থিত ছাত্রদের চিহ্নিত করা হবে। আপনি কি নিশ্চিত?'
    );
    if (!confirmRun) return;

    try {
      setRunningAbsentCheck(true);
      const res = await api.post('/attendance/auto-absent-check');
      if (res.data?.success) {
        setToast({ type: 'success', message: res.data.message || 'অনুপস্থিত চেক সফলভাবে সম্পন্ন হয়েছে!' });
        // আজকের উপস্থিতি রিলোড করা
        if (students.length > 0) {
          loadAttendanceData();
        }
      }
    } catch (err) {
      setToast({ type: 'error', message: err.response?.data?.message || 'অনুপস্থিত চেক চালাতে সমস্যা হয়েছে।' });
    } finally {
      setRunningAbsentCheck(false);
    }
  };

  // Combined Section Options
  const availableSectionOptions = useMemo(() => {
    const options = [
      { value: 'all', label: 'সকল সেকশন (All Sections)' }
    ];

    SECTION_OPTIONS.forEach(sec => {
      options.push({ value: sec, label: `সেকশন ${sec}` });
    });

    dbSections.forEach(s => {
      const sName = (s.name || '').trim();
      if (sName && !SECTION_OPTIONS.includes(sName) && !options.some(o => o.value === s._id || o.label === sName)) {
        options.push({ value: s._id, label: sName });
      }
    });

    return options;
  }, [dbSections]);

  // Helper: Get array of date strings between startDate and endDate
  const dateRangeList = useMemo(() => {
    if (dateMode !== 'range' || !startDate || !endDate) return [];
    const dates = [];
    let curr = new Date(startDate);
    const stop = new Date(endDate);
    
    // Safety cap: max 31 days to avoid UI overload
    let count = 0;
    while (curr <= stop && count < 31) {
      dates.push(curr.toISOString().split('T')[0]);
      curr.setDate(curr.getDate() + 1);
      count++;
    }
    return dates;
  }, [dateMode, startDate, endDate]);

  // Display Name Helpers for Titles & Print
  const selectedClassObj = useMemo(() => classes.find(c => String(c._id) === String(selectedClass)), [classes, selectedClass]);
  const classDisplayName = selectedClass === 'all' ? 'সকল শ্রেণি' : (selectedClassObj?.name || 'শ্রেণি');
  const selectedBranchObj = useMemo(() => branches.find(b => String(b._id) === String(selectedBranch)), [branches, selectedBranch]);
  const branchDisplayName = selectedBranchObj ? selectedBranchObj.name : '';
  const selectedSectionObj = useMemo(() => availableSectionOptions.find(s => s.value === selectedSection), [availableSectionOptions, selectedSection]);
  const sectionDisplayName = (selectedSection && selectedSection !== 'all') ? (selectedSectionObj?.label || 'সেকশন') : '';
  const dateDisplayStr = dateMode === 'single'
    ? new Date(date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })
    : `${startDate} হতে ${endDate} (${dateRangeList.length} দিন)`;

  // Date Navigation Helpers for single date mode
  const handleDateShift = (days) => {
    // Parse date as BD local date to avoid off-by-one at midnight
    const curr = new Date(date + 'T12:00:00+06:00');
    curr.setDate(curr.getDate() + days);
    setDate(curr.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
  };

  const setDateToday = () => {
    setDate(getBDTodayStr());
  };

  const setDateYesterday = () => {
    const yest = new Date();
    yest.setDate(yest.getDate() - 1);
    setDate(yest.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
  };

  // Quick presets for Date Range mode
  const setRangeLastDays = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - (days - 1));
    setStartDate(start.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
    setEndDate(end.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
  };

  const setRangeThisMonth = () => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    setStartDate(firstDay.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
    setEndDate(now.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }));
  };

  // Main Load Attendance Data function
  const loadAttendanceData = async () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsFilterCollapsed(true);
    }
    setLoading(true);
    try {
      // 1. Prepare query parameters for students
      const studentParams = { limit: 500 };
      if (selectedClass && selectedClass !== 'all') {
        studentParams.classLevel = selectedClass;
      }
      if (selectedBranch) studentParams.branch = selectedBranch;
      if (selectedSection && selectedSection !== 'all') {
        studentParams.section = selectedSection;
      }

      // 2. Fetch students
      const studentsRes = await api.get('/students', { params: studentParams });
      const studentsData = studentsRes.data.data || [];

      // Sort students by class order, then section, then roll
      studentsData.sort((a, b) => {
        const clsA = a.currentEnrollment?.classLevel?.name || '';
        const clsB = b.currentEnrollment?.classLevel?.name || '';
        if (clsA !== clsB) return clsA.localeCompare(clsB, 'bn');

        const secA = a.currentEnrollment?.section?.name || (typeof a.currentEnrollment?.section === 'string' ? a.currentEnrollment?.section : '') || '';
        const secB = b.currentEnrollment?.section?.name || (typeof b.currentEnrollment?.section === 'string' ? b.currentEnrollment?.section : '') || '';
        if (secA !== secB) return secA.localeCompare(secB, 'bn');

        const rollA = parseInt(a.currentEnrollment?.rollNumber, 10) || 0;
        const rollB = parseInt(b.currentEnrollment?.rollNumber, 10) || 0;
        return rollA - rollB;
      });

      setStudents(studentsData);

      // 3. Fetch attendance records
      if (dateMode === 'single') {
        const attendanceParams = { date };
        if (selectedClass && selectedClass !== 'all') attendanceParams.classLevel = selectedClass;
        if (selectedSection && selectedSection !== 'all') attendanceParams.section = selectedSection;
        if (selectedBranch) attendanceParams.branch = selectedBranch;

        const attendanceRes = await api.get('/attendance', { params: attendanceParams });
        const records = attendanceRes.data.data?.records || [];

        const initialAttendance = {};
        studentsData.forEach(student => {
          initialAttendance[student._id] = { status: 'not_assigned', remarks: '' };
        });

        records.forEach(rec => {
          const sId = typeof rec.student === 'object' ? rec.student?._id : rec.student;
          if (sId && initialAttendance[sId]) {
            let parsedPunchTimes = [];
            try {
              parsedPunchTimes = typeof rec.punchTimes === 'string' ? JSON.parse(rec.punchTimes) : (Array.isArray(rec.punchTimes) ? rec.punchTimes : []);
            } catch {
              parsedPunchTimes = [];
            }

            initialAttendance[sId] = {
              status: rec.status || 'not_assigned',
              remarks: rec.remarks || '',
              inTime: rec.inTime || '',
              outTime: rec.outTime || '',
              punchCount: rec.punchCount || (rec.inTime ? 1 : 0),
              punchTimes: parsedPunchTimes,
            };
          }
        });

        setAttendance(initialAttendance);
      } else {
        // Multi-Date Range Attendance Fetch
        const attendanceParams = { startDate, endDate };
        if (selectedClass && selectedClass !== 'all') attendanceParams.classLevel = selectedClass;
        if (selectedSection && selectedSection !== 'all') attendanceParams.section = selectedSection;
        if (selectedBranch) attendanceParams.branch = selectedBranch;

        const attendanceRes = await api.get('/attendance', { params: attendanceParams });
        const records = attendanceRes.data.data?.records || [];

        const initialMatrix = {};
        studentsData.forEach(student => {
          initialMatrix[student._id] = {};
          dateRangeList.forEach(dStr => {
            initialMatrix[student._id][dStr] = { status: 'not_assigned', remarks: '' };
          });
        });

        records.forEach(rec => {
          const sId = typeof rec.student === 'object' ? rec.student?._id : rec.student;
          const recDateStr = rec.date ? rec.date.split('T')[0] : '';
          if (sId && initialMatrix[sId] && recDateStr && initialMatrix[sId][recDateStr]) {
            initialMatrix[sId][recDateStr] = {
              status: rec.status || 'not_assigned',
              remarks: rec.remarks || ''
            };
          }
        });

        setMatrixAttendance(initialMatrix);
      }

      if (studentsData.length === 0) {
        setToast({ type: 'error', message: 'নির্বাচিত ফিল্টারে কোনো শিক্ষার্থী পাওয়া যায়নি' });
      } else {
        setToast({ type: 'success', message: `${studentsData.length} জন শিক্ষার্থীর তথ্য লোড হয়েছে` });
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
          setIsFilterCollapsed(true);
        }
      }
    } catch (err) {
      console.error('Failed to load attendance details', err);
      setToast({ type: 'error', message: 'ডাটা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  // Read-only attendance for students/guardians
  const loadReadOnlyAttendanceData = async () => {
    setLoading(true);
    try {
      const attendanceRes = await api.get('/attendance', {
        params: { history: 'true' }
      });
      const records = attendanceRes.data.data?.records || [];
      setHistoryRecords(records);
    } catch (err) {
      console.error('Failed to load read-only attendance', err);
      setToast({ type: 'error', message: 'উপস্থিতি লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  // Fetch ONLY attendance (no student reload) — used for real-time refresh
  const fetchAttendanceOnly = useCallback(async (currentStudents) => {
    if (!currentStudents || currentStudents.length === 0) return;
    if (dateMode !== 'single') return;
    try {
      const params = { date };
      if (selectedClass && selectedClass !== 'all') params.classLevel = selectedClass;
      if (selectedSection && selectedSection !== 'all') params.section = selectedSection;
      if (selectedBranch) params.branch = selectedBranch;
      const res = await api.get('/attendance', { params });
      const records = res.data.data?.records || [];
      setAttendance(prev => {
        const updated = { ...prev };
        // Reset all to not_assigned first, preserve any just-changed values
        currentStudents.forEach(s => {
          if (!updated[s._id]) updated[s._id] = { status: 'not_assigned', remarks: '' };
        });
        records.forEach(rec => {
          const sId = typeof rec.student === 'object' ? rec.student?._id : rec.student;
          if (sId && updated[sId] !== undefined) {
            let parsedPunchTimes = [];
            try {
              parsedPunchTimes = typeof rec.punchTimes === 'string' ? JSON.parse(rec.punchTimes) : (Array.isArray(rec.punchTimes) ? rec.punchTimes : []);
            } catch { parsedPunchTimes = []; }
            updated[sId] = {
              status: rec.status || 'not_assigned',
              remarks: rec.remarks || '',
              inTime: rec.inTime || '',
              outTime: rec.outTime || '',
              punchCount: rec.punchCount || (rec.inTime ? 1 : 0),
              punchTimes: parsedPunchTimes,
            };
          }
        });
        return updated;
      });
    } catch (err) {
      // Silently ignore real-time refresh errors
    }
  }, [date, dateMode, selectedClass, selectedSection, selectedBranch]);

  useEffect(() => {
    if (!canMarkAttendance) {
      loadReadOnlyAttendanceData();
    }
  }, [canMarkAttendance]);

  // Auto-load data when metadata is ready AND page first opens
  useEffect(() => {
    if (!metaLoading && canMarkAttendance && !dataLoaded) {
      loadAttendanceData();
      setDataLoaded(true);
    }
  }, [metaLoading, canMarkAttendance]);

  // Reload when date or filters change (after initial load)
  useEffect(() => {
    if (dataLoaded && canMarkAttendance) {
      setCurrentPage(1);
      loadAttendanceData();
    }
  }, [date, selectedClass, selectedBranch, selectedSection, dateMode]);

  // Real-time attendance polling every 30 seconds (single day only)
  useEffect(() => {
    if (!dataLoaded || !canMarkAttendance || dateMode !== 'single') return;
    const studentsRef = students;
    autoRefreshRef.current = setInterval(() => {
      fetchAttendanceOnly(studentsRef);
    }, 30000);
    return () => {
      if (autoRefreshRef.current) clearInterval(autoRefreshRef.current);
    };
  }, [dataLoaded, dateMode, students, fetchAttendanceOnly]);

  // Single-day status changes
  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        status
      }
    }));
  };

  const handleRemarksChange = (studentId, remarks) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        remarks
      }
    }));
  };

  // Multi-day status cell toggle: not_assigned -> present -> absent -> late -> on_leave -> not_assigned
  const cycleMatrixStatus = (studentId, dStr) => {
    setMatrixAttendance(prev => {
      const current = prev[studentId]?.[dStr]?.status || 'not_assigned';
      let nextStatus = 'present';
      if (current === 'present') nextStatus = 'absent';
      else if (current === 'absent') nextStatus = 'late';
      else if (current === 'late') nextStatus = 'on_leave';
      else if (current === 'on_leave') nextStatus = 'not_assigned';
      else nextStatus = 'present';

      return {
        ...prev,
        [studentId]: {
          ...prev[studentId],
          [dStr]: {
            ...prev[studentId]?.[dStr],
            status: nextStatus
          }
        }
      };
    });
  };

  // Bulk status update for Single Day
  const markAllStatus = (status) => {
    const updated = { ...attendance };
    students.forEach(student => {
      updated[student._id] = {
        ...updated[student._id],
        status
      };
    });
    setAttendance(updated);
  };

  const markUnassignedAsPresent = () => {
    const updated = { ...attendance };
    let count = 0;
    students.forEach(student => {
      if (!updated[student._id] || updated[student._id].status === 'not_assigned') {
        updated[student._id] = {
          ...updated[student._id],
          status: 'present'
        };
        count++;
      }
    });
    setAttendance(updated);
    setToast({ type: 'success', message: `${count} জন বাকি শিক্ষার্থীকে উপস্থিত করা হয়েছে` });
  };

  // Bulk status update for Multi-Day Range
  const markAllRangePresent = () => {
    const updated = { ...matrixAttendance };
    students.forEach(s => {
      if (!updated[s._id]) updated[s._id] = {};
      dateRangeList.forEach(dStr => {
        updated[s._id][dStr] = {
          ...updated[s._id][dStr],
          status: 'present'
        };
      });
    });
    setMatrixAttendance(updated);
    setToast({ type: 'success', message: 'নির্বাচিত সকল দিনে সবাইকে উপস্থিত করা হয়েছে' });
  };

  // Mark all Fridays as Leave/Holiday in range
  const markFridaysAsLeave = () => {
    const updated = { ...matrixAttendance };
    let fridayCount = 0;
    dateRangeList.forEach(dStr => {
      const dayOfWeek = new Date(dStr).getDay();
      if (dayOfWeek === 5) { // Friday in JS is 5
        fridayCount++;
        students.forEach(s => {
          if (!updated[s._id]) updated[s._id] = {};
          updated[s._id][dStr] = {
            ...updated[s._id][dStr],
            status: 'on_leave',
            remarks: 'জুমাবার (সাপ্তাহিক ছুটি)'
          };
        });
      }
    });
    setMatrixAttendance(updated);
    if (fridayCount > 0) {
      setToast({ type: 'success', message: `${fridayCount}টি শুক্রবার ছুটি হিসেবে চিহ্নিত করা হয়েছে` });
    } else {
      setToast({ type: 'error', message: 'নির্বাচিত সময়সীমার মধ্যে কোনো শুক্রবার নেই' });
    }
  };

  // Save Attendance to Backend
  const saveAttendance = async () => {
    if (students.length === 0) {
      setToast({ type: 'error', message: 'সংরক্ষণ করার জন্য কোনো ছাত্র তালিকা নেই' });
      return;
    }
    setSubmitting(true);
    try {
      if (dateMode === 'single') {
        const studentsPayload = Object.keys(attendance).map(studentId => {
          const studentObj = students.find(s => s._id === studentId);
          const sec = studentObj?.currentEnrollment?.section?.name || 
                      (typeof studentObj?.currentEnrollment?.section === 'string' ? studentObj?.currentEnrollment?.section : '') || 
                      '';
          const cls = studentObj?.currentEnrollment?.classLevel?._id || 
                      (typeof studentObj?.currentEnrollment?.classLevel === 'string' ? studentObj?.currentEnrollment?.classLevel : '') || 
                      '';

          return {
            studentId,
            classLevel: cls,
            section: sec,
            status: attendance[studentId]?.status || 'not_assigned',
            remarks: attendance[studentId]?.remarks || ''
          };
        });

        const payload = {
          date,
          classLevel: selectedClass,
          section: selectedSection,
          branch: selectedBranch,
          students: studentsPayload
        };

        const res = await api.post('/attendance', payload);
        if (res.data.success) {
          setToast({ type: 'success', message: `${studentsPayload.length} জন শিক্ষার্থীর উপস্থিতি সফলভাবে সংরক্ষণ হয়েছে!` });
        }
      } else {
        // Multiple Dates Range Save
        const studentsPayload = students.map(student => {
          const sId = student._id;
          const sec = student?.currentEnrollment?.section?.name || 
                      (typeof student?.currentEnrollment?.section === 'string' ? student?.currentEnrollment?.section : '') || '';
          const cls = student?.currentEnrollment?.classLevel?._id || 
                      (typeof student?.currentEnrollment?.classLevel === 'string' ? student?.currentEnrollment?.classLevel : '') || '';

          const statuses = {};
          const remarksMap = {};
          dateRangeList.forEach(dStr => {
            statuses[dStr] = matrixAttendance[sId]?.[dStr]?.status || 'not_assigned';
            remarksMap[dStr] = matrixAttendance[sId]?.[dStr]?.remarks || '';
          });

          return {
            studentId: sId,
            classLevel: cls,
            section: sec,
            statuses,
            remarksMap
          };
        });

        const payload = {
          dates: dateRangeList,
          classLevel: selectedClass,
          section: selectedSection,
          branch: selectedBranch,
          students: studentsPayload
        };

        const res = await api.post('/attendance', payload);
        if (res.data.success) {
          setToast({ type: 'success', message: `${dateRangeList.length} দিনের উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে!` });
        }
      }
    } catch (err) {
      console.error('Failed to save attendance', err);
      const errMsg = err.response?.data?.message || 'উপস্থিতি সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  // Filtered Students in Table based on search and status tabs
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      // 1. Search filter with mixed Bengali-English digit support
      if (searchTerm.trim()) {
        const raw = searchTerm.toLowerCase().trim();
        const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
        const enToBn = { '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯' };
        const enQ = raw.replace(/[০-৯]/g, d => bnToEn[d]);
        const bnQ = raw.replace(/[0-9]/g, d => enToBn[d]);
        const cleanNum = parseBnEnNumber(raw);
        const isPureNumeric = cleanNum !== null && /^[0-9০-৯\s]+$/.test(raw);

        const rollStr = String(student.currentEnrollment?.rollNumber || '').trim();
        const rollNum = parseBnEnNumber(student.currentEnrollment?.rollNumber);
        const codeSuffix = parseCustomId(student.studentId || student.admissionNumber);
        const studentId = (student.studentId || '').toLowerCase();
        const adm = (student.admissionNumber || '').toLowerCase();

        if (isPureNumeric) {
          const matchRoll = (rollNum !== null && rollNum === cleanNum) || rollStr.startsWith(enQ) || rollStr.startsWith(bnQ);
          const matchId = (codeSuffix !== null && codeSuffix === cleanNum) || studentId === enQ || studentId === bnQ || studentId === raw || adm === enQ || adm === bnQ;
          if (!matchRoll && !matchId) return false;
        } else {
          const fullName = (student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`).toLowerCase();
          const variants = [...new Set([raw, enQ, bnQ])];
          const className = (student.currentEnrollment?.classLevel?.name || '').toLowerCase();
          const matchesSearch = variants.some(v =>
            fullName.includes(v) ||
            studentId.includes(v) ||
            adm.includes(v) ||
            rollStr.includes(v) ||
            className.includes(v)
          );
          if (!matchesSearch) return false;
        }
      }

      // 2. Status tab filter (only applies in single date mode)
      if (dateMode === 'single' && statusFilter !== 'all') {
        const currStatus = attendance[student._id]?.status || 'not_assigned';
        if (currStatus !== statusFilter) return false;
      }

      return true;
    });
  }, [students, searchTerm, statusFilter, attendance, dateMode]);

  // Reset to page 1 when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  // Real-time Attendance Statistics Summary (for Single Date)
  const singleDayStats = useMemo(() => {
    let present = 0;
    let absent = 0;
    let late = 0;
    let leave = 0;
    let notAssigned = 0;

    students.forEach(s => {
      const st = attendance[s._id]?.status || 'not_assigned';
      if (st === 'present') present++;
      else if (st === 'absent') absent++;
      else if (st === 'late') late++;
      else if (st === 'on_leave') leave++;
      else notAssigned++;
    });

    const total = students.length;
    const presentRate = total > 0 ? Math.round((present / total) * 100) : 0;
    const absentRate = total > 0 ? Math.round((absent / total) * 100) : 0;

    return { total, present, absent, late, leave, notAssigned, presentRate, absentRate };
  }, [students, attendance]);

  // Multi-day student summary calculation
  const getStudentRangeSummary = (studentId) => {
    let present = 0;
    let absent = 0;
    let other = 0;
    const studentDates = matrixAttendance[studentId] || {};

    dateRangeList.forEach(dStr => {
      const st = studentDates[dStr]?.status || 'not_assigned';
      if (st === 'present') present++;
      else if (st === 'absent') absent++;
      else if (st !== 'not_assigned') other++;
    });

    const activeDays = dateRangeList.length;
    const rate = activeDays > 0 ? Math.round((present / activeDays) * 100) : 0;
    return { present, absent, other, activeDays, rate };
  };

  // Sorted slice of filteredStudents (all columns support asc/desc)
  const parseBnEnNumber = (val) => {
    if (val === null || val === undefined) return null;
    const str = String(val).trim();
    if (!str) return null;
    const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
    const normalized = str.replace(/[০-৯]/g, d => bnToEn[d]);
    const num = parseFloat(normalized.replace(/[^0-9.-]/g, ''));
    return isNaN(num) ? null : num;
  };

  // Helper: Extract numeric suffix from student IDs like ANG2001, ANB2023005, etc.
  const parseCustomId = (idStr) => {
    if (!idStr) return 999999;
    const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
    const s = String(idStr).trim().toUpperCase().replace(/[০-৯]/g, d => bnToEn[d]);
    const stripped = s.replace(/^(?:ANG20|ANB20|ANG|ANB)/i, '');
    const match = stripped.match(/(\d+)/);
    if (match) return parseInt(match[1], 10);
    const digits = s.replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : 999999;
  };

  const sortedStudents = useMemo(() => {
    const list = [...filteredStudents];
    const cleanSearch = searchTerm.trim();
    const cleanNum = parseBnEnNumber(cleanSearch);
    const isPureNumeric = cleanNum !== null && /^[0-9০-৯\s]+$/.test(cleanSearch);

    if (!sortCol && !isPureNumeric) return list;

    list.sort((a, b) => {
      // Priority 1: If searching a number (e.g. 34, 29), exact roll match ALWAYS comes FIRST!
      if (cleanSearch && isPureNumeric) {
        const rNumA = parseBnEnNumber(a.currentEnrollment?.rollNumber);
        const rNumB = parseBnEnNumber(b.currentEnrollment?.rollNumber);
        const idSuffA = parseCustomId(a.studentId || a.admissionNumber);
        const idSuffB = parseCustomId(b.studentId || b.admissionNumber);

        let rankA = 99;
        let rankB = 99;
        if (rNumA === cleanNum) rankA = 0; // Exact roll match -> #1
        else if (idSuffA === cleanNum) rankA = 1; // Exact student ID suffix match -> #2
        else rankA = 2;

        if (rNumB === cleanNum) rankB = 0;
        else if (idSuffB === cleanNum) rankB = 1;
        else rankB = 2;

        if (rankA !== rankB) return rankA - rankB;
      }
      if (sortCol === 'roll') {
        const rollA = parseBnEnNumber(a.currentEnrollment?.rollNumber);
        const rollB = parseBnEnNumber(b.currentEnrollment?.rollNumber);
        if (rollA !== null && rollB !== null) {
          return sortDir === 'asc' ? rollA - rollB : rollB - rollA;
        }
        if (rollA !== null) return sortDir === 'asc' ? -1 : 1;
        if (rollB !== null) return sortDir === 'asc' ? 1 : -1;
        const valA = String(a.currentEnrollment?.rollNumber || '');
        const valB = String(b.currentEnrollment?.rollNumber || '');
        return sortDir === 'asc' ? valA.localeCompare(valB, 'bn') : valB.localeCompare(valA, 'bn');
      }

      if (sortCol === 'name') {
        const nameA = a.user?.fullName || `${a.user?.firstName || ''} ${a.user?.lastName || ''}`.trim();
        const nameB = b.user?.fullName || `${b.user?.firstName || ''} ${b.user?.lastName || ''}`.trim();
        return sortDir === 'asc' ? nameA.localeCompare(nameB, 'bn', { sensitivity: 'base' }) : nameB.localeCompare(nameA, 'bn', { sensitivity: 'base' });
      }

      if (sortCol === 'studentId') {
        const idA = parseBnEnNumber(a.studentId || a.admissionNumber);
        const idB = parseBnEnNumber(b.studentId || b.admissionNumber);
        if (idA !== null && idB !== null) {
          return sortDir === 'asc' ? idA - idB : idB - idA;
        }
        if (idA !== null) return sortDir === 'asc' ? -1 : 1;
        if (idB !== null) return sortDir === 'asc' ? 1 : -1;
        const valA = String(a.studentId || a.admissionNumber || '');
        const valB = String(b.studentId || b.admissionNumber || '');
        return sortDir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      if (sortCol === 'class') {
        const valA = a.currentEnrollment?.classLevel?.name || '';
        const valB = b.currentEnrollment?.classLevel?.name || '';
        return sortDir === 'asc' ? valA.localeCompare(valB, 'bn') : valB.localeCompare(valA, 'bn');
      }

      if (sortCol === 'section') {
        const valA = a.currentEnrollment?.section?.name || (typeof a.currentEnrollment?.section === 'string' ? a.currentEnrollment.section : '') || '';
        const valB = b.currentEnrollment?.section?.name || (typeof b.currentEnrollment?.section === 'string' ? b.currentEnrollment.section : '') || '';
        return sortDir === 'asc' ? valA.localeCompare(valB, 'bn') : valB.localeCompare(valA, 'bn');
      }

      if (sortCol === 'status') {
        const statusPriority = { present: 1, late: 2, on_leave: 3, not_assigned: 4, absent: 5 };
        const stA = statusPriority[attendance[a._id]?.status] || 99;
        const stB = statusPriority[attendance[b._id]?.status] || 99;
        return sortDir === 'asc' ? stA - stB : stB - stA;
      }

      if (sortCol === 'remarks') {
        const valA = attendance[a._id]?.remarks || '';
        const valB = attendance[b._id]?.remarks || '';
        return sortDir === 'asc' ? valA.localeCompare(valB, 'bn') : valB.localeCompare(valA, 'bn');
      }

      // Multi-day Range summary columns
      if (sortCol === 'present') {
        const pA = getStudentRangeSummary(a._id).present;
        const pB = getStudentRangeSummary(b._id).present;
        return sortDir === 'asc' ? pA - pB : pB - pA;
      }

      if (sortCol === 'absent') {
        const aA = getStudentRangeSummary(a._id).absent;
        const aB = getStudentRangeSummary(b._id).absent;
        return sortDir === 'asc' ? aA - aB : aB - aA;
      }

      if (sortCol === 'rate') {
        const rA = getStudentRangeSummary(a._id).rate;
        const rB = getStudentRangeSummary(b._id).rate;
        return sortDir === 'asc' ? rA - rB : rB - rA;
      }

      // Date column in range mode
      if (sortCol.startsWith('date_')) {
        const dStr = sortCol.replace('date_', '');
        const statusPriority = { present: 1, late: 2, on_leave: 3, not_assigned: 4, absent: 5 };
        const stA = statusPriority[matrixAttendance[a._id]?.[dStr]?.status] || 99;
        const stB = statusPriority[matrixAttendance[b._id]?.[dStr]?.status] || 99;
        return sortDir === 'asc' ? stA - stB : stB - stA;
      }

      return 0;
    });

    return list;
  }, [filteredStudents, sortCol, sortDir, attendance, matrixAttendance, dateRangeList]);

  // Paginated slice of sortedStudents
  const totalPages = Math.ceil(sortedStudents.length / PAGE_SIZE);
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return sortedStudents.slice(start, start + PAGE_SIZE);
  }, [sortedStudents, currentPage]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'present': return 'badge-active';
      case 'absent': return 'badge-danger';
      case 'late': return 'badge-warning';
      case 'on_leave': return 'badge-info';
      case 'not_assigned': return 'badge-inactive';
      default: return 'badge-inactive';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'present': return 'উপস্থিত';
      case 'absent': return 'অনুপস্থিত';
      case 'late': return 'বিলম্ব';
      case 'on_leave': return 'ছুটি';
      case 'not_assigned': return 'নির্ধারিত নয়';
      default: return 'অজানা';
    }
  };

  const getMatrixCellBadge = (status) => {
    switch (status) {
      case 'present':
        return { text: 'উপ', bg: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '#10b981', label: 'উপস্থিত' };
      case 'absent':
        return { text: 'অনুপ', bg: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '#ef4444', label: 'অনুপস্থিত' };
      case 'late':
        return { text: 'বিলম্ব', bg: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', border: '#f59e0b', label: 'বিলম্ব' };
      case 'on_leave':
        return { text: 'ছুটি', bg: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6', border: '#3b82f6', label: 'ছুটি' };
      default:
        return { text: '—', bg: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: 'var(--border-color)', label: 'অনির্ধারিত' };
    }
  };

  const getAvatarGradient = (name = 'A') => {
    const gradients = [
      'linear-gradient(135deg, #10b981, #059669)',
      'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      'linear-gradient(135deg, #f59e0b, #d97706)',
      'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      'linear-gradient(135deg, #ec4899, #be185d)'
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  // কুইক অ্যাকশন ও স্ট্যাটাস ফিল্টার ব্লক (ডেস্কটপে উপরে এবং মোবাইলে তালিকার শেষে প্রদর্শনের জন্য)
  const renderQuickActionsBlock = () => (
    <>
      {/* দ্রুত অ্যাকশন ও স্ট্যাটাস ফিল্টার অ্যাকর্ডিয়ন হেডার */}
      <div
        className="attendance-tools-toggle-bar"
        onClick={() => setShowActionTools(prev => !prev)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          marginTop: '10px',
          background: 'var(--bg-tertiary, #f8fafc)',
          border: '1px solid var(--border-color)',
          borderRadius: '10px',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 600, flexWrap: 'wrap' }}>
          <Sparkles size={14} className="text-primary" />
          <span style={{ color: 'var(--text-primary)' }}>দ্রুত অ্যাকশন ও স্ট্যাটাস ফিল্টার</span>
          {dateMode === 'single' && (
            <span className="badge badge-secondary" style={{ fontSize: '0.72rem', padding: '1px 6px' }}>
              {statusFilter === 'all' ? `সকল (${singleDayStats.total})` : 
               statusFilter === 'present' ? `উপস্থিত (${singleDayStats.present})` : 
               statusFilter === 'absent' ? `অনুপস্থিত (${singleDayStats.absent})` : 
               statusFilter === 'late' ? `বিলম্ব (${singleDayStats.late})` : 
               statusFilter === 'on_leave' ? `ছুটি (${singleDayStats.leave})` : 
               `অনির্ধারিত (${singleDayStats.notAssigned})`}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
          <span>{showActionTools ? 'লুকান' : 'অ্যাকশন ও ফিল্টার খুলুন'}</span>
          <ChevronDown size={14} style={{ transform: showActionTools ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </div>
      </div>

      {/* অ্যাকর্ডিয়ন বডি: বাল্ক অ্যাকশন এবং স্ট্যাটাস ফিল্টার বাটনসমূহ */}
      {showActionTools && (
        <div className="attendance-tools-body animate-slide-down" style={{ marginTop: '10px' }}>
          {/* বাল্ক একশন: সিঙ্গেল ডে মোডে */}
          {dateMode === 'single' ? (
            <div className="attendance-bulk-actions-wrap flex gap-6" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm text-success" 
                onClick={() => markAllStatus('present')}
                style={{ fontSize: '0.8rem', padding: '5px 10px', fontWeight: 600, height: '34px' }}
              >
                ✓ সবাই উপস্থিত
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm text-danger" 
                onClick={() => markAllStatus('absent')}
                style={{ fontSize: '0.8rem', padding: '5px 10px', fontWeight: 600, height: '34px' }}
              >
                ✕ সবাই অনুপস্থিত
              </button>
              {singleDayStats.notAssigned > 0 && (
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm text-primary" 
                  onClick={markUnassignedAsPresent}
                  style={{ fontSize: '0.8rem', padding: '5px 10px', fontWeight: 600, height: '34px' }}
                >
                  <Sparkles size={13} className="mr-4" /> বাকিদের উপস্থিত
                </button>
              )}
              <button 
                type="button" 
                className="btn btn-ghost btn-sm text-muted" 
                onClick={() => markAllStatus('not_assigned')}
                style={{ fontSize: '0.8rem', padding: '5px 8px', height: '34px' }}
              >
                রিসেট
              </button>
            </div>
          ) : (
            /* বাল্ক একশন: মাল্টি-ডে রেঞ্জ মোডে */
            <div className="attendance-bulk-actions-wrap flex gap-6" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm text-success" 
                onClick={markAllRangePresent}
                style={{ fontSize: '0.8rem', padding: '5px 10px', fontWeight: 600, height: '34px' }}
                title="রেঞ্জের সব দিনে শিক্ষার্থীদের উপস্থিত করুন"
              >
                ✓ সকল দিনে সবাই উপস্থিত
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm text-info" 
                onClick={markFridaysAsLeave}
                style={{ fontSize: '0.8rem', padding: '5px 10px', fontWeight: 600, height: '34px' }}
                title="রেঞ্জের শুক্রবারগুলো ছুটি চিহ্নিত করুন"
              >
                <Coffee size={13} className="mr-4" /> শুক্রবার ছুটি
              </button>
            </div>
          )}

          {/* ফিল্টার ট্যাব (Status Filter Tabs - শুধুমাত্র একক দিন মোডে) */}
          {dateMode === 'single' && (
            <div className="attendance-status-tabs flex gap-6 mt-10">
              {[
                { id: 'all', label: `সকল (${singleDayStats.total})` },
                { id: 'present', label: `উপস্থিত (${singleDayStats.present})`, color: 'text-success' },
                { id: 'absent', label: `অনুপস্থিত (${singleDayStats.absent})`, color: 'text-danger' },
                { id: 'late', label: `বিলম্ব (${singleDayStats.late})`, color: 'text-warning' },
                { id: 'on_leave', label: `ছুটি (${singleDayStats.leave})`, color: 'text-info' },
                { id: 'not_assigned', label: `অনির্ধারিত (${singleDayStats.notAssigned})` },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  style={{
                    padding: '3px 10px',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: statusFilter === tab.id ? 'var(--primary)' : 'var(--border-color)',
                    background: statusFilter === tab.id ? 'var(--primary)' : 'transparent',
                    color: statusFilter === tab.id ? '#fff' : 'var(--text-secondary)',
                    fontSize: '0.78rem',
                    fontWeight: statusFilter === tab.id ? 600 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );

  // ── রেন্ডার প্রিন্টেবল কনটেন্ট (প্রিন্ট প্রিভিউ ও সরাসরি প্রিন্ট শিটের জন্য) ──
  const renderPrintableContent = () => (
    <>
      {/* অফিসিয়াল A4 প্যাড হেডার */}
      <div style={{ marginBottom: '14px' }}>
        <MadrasahLetterhead 
          documentTitle={dateMode === 'single' ? 'দৈনিক শিক্ষার্থী উপস্থিতি শিট' : 'শিক্ষার্থী উপস্থিতি বিবরণী (রেঞ্জ শিট)'}
          metaLeft={
            <div style={{ fontSize: '9pt', color: '#1e293b', lineHeight: 1.6 }}>
              <div><strong>তারিখ:</strong> {dateDisplayStr}</div>
              <div>
                <strong>শ্রেণি:</strong> {classDisplayName}
                {sectionDisplayName ? ` | সেকশন: ${sectionDisplayName}` : ''}
                {branchDisplayName ? ` | শাখা: ${branchDisplayName}` : ''}
              </div>
            </div>
          }
          metaRight={
            <div style={{ fontSize: '9pt', color: '#1e293b', textAlign: 'right', lineHeight: 1.6 }}>
              <div><strong>মোট শিক্ষার্থী:</strong> {sortedStudents.length} জন</div>
              {dateMode === 'single' && (
                <div style={{ fontSize: '8.5pt', fontWeight: 600, marginTop: '2px' }}>
                  <span style={{ color: '#166534' }}>উপস্থিত: {singleDayStats.present} ({singleDayStats.presentRate}%)</span>
                  {' • '}
                  <span style={{ color: '#991b1b' }}>অনুপস্থিত: {singleDayStats.absent} ({singleDayStats.absentRate}%)</span>
                </div>
              )}
            </div>
          }
        />
      </div>

      {/* প্রিন্ট টেবিল: একক দিন মোড */}
      {dateMode === 'single' ? (
        <table className="attendance-print-table">
          <thead>
            <tr>
              <th style={{ width: '42px', textAlign: 'center' }}>রোল</th>
              <th style={{ width: '70px', textAlign: 'center' }}>আইডি</th>
              <th style={{ textAlign: 'left', minWidth: '150px' }}>শিক্ষার্থীর নাম</th>
              <th style={{ width: '95px', textAlign: 'center' }}>শ্রেণি</th>
              <th style={{ width: '65px', textAlign: 'center' }}>সেকশন</th>
              <th style={{ width: '85px', textAlign: 'center' }}>স্ট্যাটাস</th>
              <th style={{ width: '95px', textAlign: 'center' }}>ইন / আউট সময়</th>
              <th style={{ width: '120px', textAlign: 'left' }}>মন্তব্য / স্বাক্ষর</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, idx) => {
              const studentId = student._id;
              const roll = student.currentEnrollment?.rollNumber || (idx + 1);
              const studentName = student.user?.fullName ||
                `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || 'নামহীন শিক্ষার্থী';
              const className = student.currentEnrollment?.classLevel?.name || '—';
              const sectionName = student.currentEnrollment?.section?.name ||
                (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment?.section : '') || '—';
              const currentStatus = attendance[studentId]?.status || 'not_assigned';
              const currentRemarks = attendance[studentId]?.remarks || '';
              const inTime = attendance[studentId]?.inTime || '';
              const outTime = attendance[studentId]?.outTime || '';

              const statusLabelMap = {
                present: { text: 'উপস্থিত', color: '#166534', bg: '#dcfce7', border: '#166534' },
                absent: { text: 'অনুপস্থিত', color: '#991b1b', bg: '#fee2e2', border: '#991b1b' },
                late: { text: 'বিলম্ব', color: '#9a3412', bg: '#fef3c7', border: '#9a3412' },
                on_leave: { text: 'ছুটি', color: '#1e40af', bg: '#dbeafe', border: '#1e40af' },
                not_assigned: { text: 'অনির্ধারিত', color: '#475569', bg: '#f1f5f9', border: '#94a3b8' },
              };
              const st = statusLabelMap[currentStatus] || statusLabelMap.not_assigned;

              return (
                <tr key={studentId}>
                  <td style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'Inter' }}>{roll}</td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '8.5pt' }}>{student.studentId || '—'}</td>
                  <td style={{ fontWeight: 600 }}>{studentName}</td>
                  <td style={{ textAlign: 'center', fontSize: '8.5pt' }}>{className}</td>
                  <td style={{ textAlign: 'center', fontSize: '8.5pt' }}>{sectionName}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>
                    <span className="print-status-badge" style={{ color: st.color, background: st.bg, borderColor: st.border }}>
                      {st.text}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center', fontSize: '8pt', fontFamily: 'Inter' }}>
                    {inTime ? `${inTime}${outTime ? ` - ${outTime}` : ''}` : '—'}
                  </td>
                  <td style={{ fontSize: '8.5pt' }}>{currentRemarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        /* প্রিন্ট টেবিল: একাধিক দিন মোড */
        <table className="attendance-print-table" style={{ fontSize: '7.5pt' }}>
          <thead>
            <tr>
              <th style={{ width: '35px', textAlign: 'center' }}>রোল</th>
              <th style={{ textAlign: 'left', minWidth: '110px' }}>নাম</th>
              <th style={{ width: '65px', textAlign: 'center' }}>শ্রেণি</th>
              {dateRangeList.map(d => (
                <th key={d} style={{ width: '22px', textAlign: 'center', padding: '2px 0' }}>
                  {d.split('-')[2]}
                </th>
              ))}
              <th style={{ width: '32px', textAlign: 'center' }}>উপ</th>
              <th style={{ width: '32px', textAlign: 'center' }}>অনুপ</th>
              <th style={{ width: '38px', textAlign: 'center' }}>হার %</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student, idx) => {
              const studentId = student._id;
              const roll = student.currentEnrollment?.rollNumber || (idx + 1);
              const studentName = student.user?.fullName ||
                `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || 'নামহীন শিক্ষার্থী';
              const className = student.currentEnrollment?.classLevel?.name || '—';
              const summary = getStudentRangeSummary(studentId);

              return (
                <tr key={studentId}>
                  <td style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'Inter' }}>{roll}</td>
                  <td style={{ fontWeight: 600 }}>{studentName}</td>
                  <td style={{ textAlign: 'center' }}>{className}</td>
                  {dateRangeList.map(d => {
                    const cellStatus = matrixAttendance[studentId]?.[d]?.status || 'not_assigned';
                    const badge = getMatrixCellBadge(cellStatus);
                    return (
                      <td key={d} style={{ textAlign: 'center', padding: '2px 0', fontWeight: 700, fontSize: '7pt' }}>
                        {badge.text}
                      </td>
                    );
                  })}
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#166534' }}>{summary.present}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#991b1b' }}>{summary.absent}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>{summary.rate}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* প্রিন্ট ফুটার / স্বাক্ষর (ডায়নামিক Pre-defined Signature Roles) */}
      <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: 'auto', paddingTop: '28px' }} />
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '7.5pt', color: '#666', borderTop: '1px dashed #ccc', paddingTop: '6px' }}>
        প্রিন্টের তারিখ ও সময়: {new Date().toLocaleString('bn-BD')} • সফটওয়্যার: আন-নূর মাদরাসা ম্যানেজমেন্ট সিস্টেম
      </div>
    </>
  );

  return (
    <div className="animate-fade-in attendance-page-container" style={{ position: 'relative', paddingBottom: '40px' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          animation: 'slideDown 0.3s ease-out',
          maxWidth: '420px',
        }}>
          {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="page-header attendance-page-header no-print">
        <div>
          <h1 className="page-title flex gap-8" style={{ alignItems: 'center' }}>
            <ClipboardCheck size={28} className="text-primary" /> উপস্থিতি খাতা (Attendance)
            {dataLoaded && dateMode === 'single' && (
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px',
                borderRadius: '20px', background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981', border: '1px solid rgba(16,185,129,0.3)',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                animation: 'pulse 2s infinite'
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                লাইভ
              </span>
            )}
          </h1>
          <p className="page-subtitle">
            শাখা: {branchName} • {canMarkAttendance 
              ? 'মাদ্রাসার শিক্ষার্থীদের একক ও একাধিক দিনের উপস্থিতি গ্রহণ, সংশোধন ও অ্যাডভান্সড ফিল্টারিং' 
              : 'আপনার শিক্ষার্থীর উপস্থিতি বিবরণী'}
          </p>
        </div>
        {canMarkAttendance && students.length > 0 && (
          <div className="flex gap-8 attendance-header-actions">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => setShowPrintModal(true)}
              title="প্রিন্ট করুন"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Printer size={16} /> প্রিন্ট শিট
            </button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={saveAttendance}
              disabled={submitting}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Save size={16} /> {submitting ? 'সংরক্ষণ হচ্ছে...' : (dateMode === 'range' ? 'সকল দিনের উপস্থিতি সংরক্ষণ' : 'উপস্থিতি সংরক্ষণ করুন')}
            </button>
          </div>
        )}
      </div>

      {/* অ্যাডভান্সড ফিল্টার কার্ড */}
      {canMarkAttendance && (
        <div className="card mb-20 no-print attendance-filter-card" style={{ padding: '14px 18px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
          {metaLoading ? (
            <div className="flex-center" style={{ padding: '20px' }}>
              <div className="spinner" style={{ width: '28px', height: '28px' }}></div>
              <span className="ml-12 text-muted text-sm">মেটাডাটা লোড হচ্ছে...</span>
            </div>
          ) : (
            <div>
              {/* অ্যাকর্ডিয়ন টগল হেডার বার (কাট-অফ বক্সের মতো এক লাইনে কমপ্যাক্ট টগল) */}
              <div
                className="attendance-filter-accordion-header"
                onClick={() => setIsFilterCollapsed(prev => !prev)}
                style={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  paddingBottom: isFilterCollapsed ? '0' : '10px',
                  borderBottom: isFilterCollapsed ? 'none' : '1px solid var(--border-color)',
                  marginBottom: isFilterCollapsed ? '0' : '12px'
                }}
              >
                {/* শীর্ষ রো: শিরোনাম বাঁয়ে, ফিল্টার খুলুন / লুকান ডানে */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} className="text-primary" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      তারিখ ও শ্রেণি ফিল্টার
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, flexShrink: 0 }}>
                    <span>{isFilterCollapsed ? 'ফিল্টার খুলুন' : 'লুকান'}</span>
                    <ChevronDown size={15} style={{ transform: isFilterCollapsed ? 'none' : 'rotate(180deg)', transition: 'transform 0.2s' }} />
                  </div>
                </div>

                {/* দ্বিতীয় রো: সক্রিয় ফিল্টার ব্যাজসমূহ */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <span className="badge badge-secondary" style={{ fontSize: '0.74rem', padding: '2px 7px', fontWeight: 600 }}>
                    {dateMode === 'single' ? date : `${startDate} হতে ${endDate}`}
                  </span>
                  <span className="badge badge-secondary" style={{ fontSize: '0.74rem', padding: '2px 7px' }}>
                    {selectedClass === 'all' ? 'সকল শ্রেণি' : (classes.find(c => c._id === selectedClass)?.name || 'শ্রেণি')}
                  </span>
                  {selectedBranch && (
                    <span className="badge badge-secondary" style={{ fontSize: '0.74rem', padding: '2px 7px' }}>
                      {branches.find(b => b._id === selectedBranch)?.name || 'শাখা'}
                    </span>
                  )}
                  {selectedSection && selectedSection !== 'all' && (
                    <span className="badge badge-secondary" style={{ fontSize: '0.74rem', padding: '2px 7px' }}>
                      {availableSectionOptions.find(s => s.value === selectedSection)?.label || 'সেকশন'}
                    </span>
                  )}
                  {students.length > 0 && (
                    <span className="badge badge-primary" style={{ fontSize: '0.74rem', padding: '2px 7px', fontWeight: 700 }}>
                      {students.length} জন
                    </span>
                  )}
                </div>
              </div>

              {/* বিস্তারিত ফিল্টার বডি (যখন খোলা থাকবে) */}
              {!isFilterCollapsed && (
                <div className="attendance-filter-body animate-slide-down">
              {/* উপরের বার: তারিখের মোড সুইচ (একক দিন বনাম একাধিক দিন) */}
              <div className="flex-between mb-16 attendance-filter-topbar" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div className="flex gap-8" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="text-xs font-semibold text-muted">তারিখের ধরন:</span>
                  <div style={{ display: 'inline-flex', background: 'var(--bg-tertiary)', padding: '2px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <button
                      type="button"
                      onClick={() => setDateMode('single')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        background: dateMode === 'single' ? 'var(--primary)' : 'transparent',
                        color: dateMode === 'single' ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Calendar size={13} /> একক দিন (Single Date)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDateMode('range')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        background: dateMode === 'range' ? 'var(--primary)' : 'transparent',
                        color: dateMode === 'range' ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <CalendarRange size={13} /> একাধিক দিন / রেঞ্জ (Date Range)
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {/* কুইক ডেট প্রি-সেট শর্টকাট */}
                  {dateMode === 'single' ? (
                    <div className="flex gap-6" style={{ alignItems: 'center' }}>
                      <button 
                        type="button" 
                        className="btn btn-ghost btn-sm" 
                        onClick={setDateYesterday}
                        style={{ fontSize: '0.78rem', padding: '3px 8px' }}
                      >
                        গতকাল
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-ghost btn-sm text-primary" 
                        onClick={setDateToday}
                        style={{ fontSize: '0.78rem', padding: '3px 8px', background: 'rgba(16, 185, 129, 0.1)' }}
                      >
                        আজ
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-4" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="text-xs text-muted">দ্রুত:</span>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(3)} style={{ fontSize: '0.74rem', padding: '2px 6px' }}>৩ দিন</button>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(7)} style={{ fontSize: '0.74rem', padding: '2px 6px' }}>৭ দিন</button>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(15)} style={{ fontSize: '0.74rem', padding: '2px 6px' }}>১৫ দিন</button>
                      <button type="button" className="btn btn-ghost btn-sm text-primary" onClick={setRangeThisMonth} style={{ fontSize: '0.74rem', padding: '2px 6px' }}>চলতি মাস</button>
                    </div>
                  )}

                  {/* শিক্ষার্থী লোড থাকলে লুকানোর অপশন */}
                  {students.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm text-muted"
                      onClick={() => setIsFilterCollapsed(true)}
                      style={{ fontSize: '0.78rem', padding: '3px 8px' }}
                      title="ফিল্টার সংক্ষেপ করুন"
                    >
                      লুকান ▲
                    </button>
                  )}
                </div>
              </div>

              {/* ফিল্টার ইনপুট গ্রিড */}
              <div className="grid grid-5 attendance-filter-grid" style={{ gap: '12px', alignItems: 'flex-end' }}>
                {/* ১. তারিখ নির্বাচন (একক বা রেঞ্জ) */}
                {dateMode === 'single' ? (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.82rem' }}>তারিখ (Date) *</label>
                    <div className="flex gap-4" style={{ alignItems: 'center' }}>
                      <button 
                        type="button" 
                        className="btn btn-secondary btn-icon btn-sm" 
                        onClick={() => handleDateShift(-1)}
                        title="আগের দিন"
                        style={{ height: '36px', width: '30px', padding: 0, flexShrink: 0 }}
                      >
                        <ChevronLeft size={15} />
                      </button>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        style={{ height: '36px', fontSize: '0.82rem', padding: '4px 6px', minWidth: 0 }}
                      />
                      <button 
                        type="button" 
                        className="btn btn-secondary btn-icon btn-sm" 
                        onClick={() => handleDateShift(1)}
                        title="পরের দিন"
                        style={{ height: '36px', width: '30px', padding: 0, flexShrink: 0 }}
                      >
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.82rem' }}>তারিখের সময়সীমা ({dateRangeList.length} দিন)</label>
                    <div className="flex gap-4" style={{ alignItems: 'center' }}>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        style={{ height: '36px', fontSize: '0.78rem', padding: '4px 6px' }}
                        title="শুরুর তারিখ"
                      />
                      <span className="text-muted text-xs">হতে</span>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        style={{ height: '36px', fontSize: '0.78rem', padding: '4px 6px' }}
                        title="শেষের তারিখ"
                      />
                    </div>
                  </div>
                )}

                {/* ২. শাখা ফিল্টার */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>শাখা (Branch)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedBranch} 
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    style={{ height: '36px', fontSize: '0.84rem' }}
                  >
                    <option value="">সকল শাখা (All Branches)</option>
                    {branches.map(b => (
                      <option key={b._id} value={b._id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                {/* ৩. শ্রেণি নির্বাচন (সকল শ্রেণি অপশন সহ) */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>শ্রেণি (Class)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedClass} 
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{ height: '36px', fontSize: '0.84rem', fontWeight: 600 }}
                  >
                    <option value="all">সকল শ্রেণি (All Classes)</option>
                    {classes.map(c => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* ৪. সেকশন ফিল্টার */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>সেকশন (Section)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedSection} 
                    onChange={(e) => setSelectedSection(e.target.value)}
                    style={{ height: '36px', fontSize: '0.84rem' }}
                  >
                    {availableSectionOptions.map((sec, idx) => (
                      <option key={idx} value={sec.value}>{sec.label}</option>
                    ))}
                  </select>
                </div>

                {/* ৫. সর্টিং কন্ট্রোল (তারিখ এবং শ্রেণি ফিল্টারের ভেতরে) */}
                <div className="form-group attendance-sort-filter-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.82rem' }}>সর্টিং (Sort By)</label>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <select
                      className="form-input form-select"
                      value={sortCol}
                      onChange={(e) => setSortCol(e.target.value)}
                      style={{ height: '36px', fontSize: '0.84rem', flex: 1, padding: '0 20px 0 8px' }}
                      title="সর্ট কলাম নির্বাচন করুন"
                    >
                      <option value="roll">রোল অনুযায়ী</option>
                      <option value="name">নাম অনুযায়ী</option>
                      <option value="studentId">আইডি অনুযায়ী</option>
                      <option value="class">শ্রেণি অনুযায়ী</option>
                      <option value="section">সেকশন অনুযায়ী</option>
                      {dateMode === 'single' ? (
                        <>
                          <option value="status">স্ট্যাটাস অনুযায়ী</option>
                          <option value="remarks">মন্তব্য অনুযায়ী</option>
                        </>
                      ) : (
                        <>
                          <option value="present">উপস্থিতির সংখ্যা</option>
                          <option value="absent">অনুপস্থিতির সংখ্যা</option>
                          <option value="rate">উপস্থিতির হার (%)</option>
                        </>
                      )}
                    </select>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
                      style={{ height: '36px', width: '38px', minWidth: '38px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      title={sortDir === 'asc' ? 'আরোহী (Ascending)' : 'অবরোহী (Descending)'}
                    >
                      <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{sortDir === 'asc' ? '▲' : '▼'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* লোড বাটন বার */}
              <div className="flex-between mt-12 attendance-load-bar" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div className="text-xs text-muted" style={{ fontSize: '0.78rem' }}>
                  {dateMode === 'range' 
                    ? `* শুরু ${startDate} থেকে শেষ ${endDate} (${dateRangeList.length} দিন)`
                    : `* নির্বাচিত তারিখ: ${new Date(date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' })}`}
                </div>

                <button
                  type="button"
                  className="btn btn-primary attendance-load-btn"
                  onClick={loadAttendanceData}
                  disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '140px', height: '38px', justifyContent: 'center' }}
                >
                  {loading ? (
                    <>
                      <div className="spinner" style={{ width: '15px', height: '15px', borderWidth: '2px' }}></div>
                      লোড হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Search size={15} /> শিক্ষার্থী লোড করুন
                    </>
                  )}
                </button>
              </div>

              {/* উপস্থিতির শেষ সময় (Cut-off Time) ও অটোমেটিক অনুপস্থিত কন্ট্রোল বক্স (Collapsible) */}
              {isSuperOrAdmin && (
                <div style={{
                  marginTop: '12px',
                  padding: showCutoffBox ? '12px 14px' : '8px 12px',
                  borderRadius: '10px',
                  background: 'var(--bg-tertiary, #f8fafc)',
                  border: '1px solid var(--border-color, #e2e8f0)',
                  transition: 'all 0.2s ease'
                }}>
                  <div 
                    onClick={() => setShowCutoffBox(!showCutoffBox)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <Clock size={15} className="text-primary" />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        কাট-অফ সময় ও অটো-অনুপস্থিত সেটিংস
                      </span>
                      <span style={{
                        fontSize: '0.72rem',
                        padding: '1px 7px',
                        borderRadius: '6px',
                        background: autoAbsentEnabled ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
                        color: autoAbsentEnabled ? 'var(--success)' : 'var(--text-muted)',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)'
                      }}>
                        {cutoffTime || '09:30'} • {autoAbsentEnabled ? 'অটো-অনুপস্থিত চালু' : 'বন্ধ'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
                      <span>{showCutoffBox ? 'লুকান' : 'সেটিংস খুলুন'}</span>
                      <ChevronDown size={14} style={{ transform: showCutoffBox ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </div>
                  </div>

                  {showCutoffBox && (
                    <div style={{
                      marginTop: '12px',
                      paddingTop: '10px',
                      borderTop: '1px dashed var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '3px', color: 'var(--text-secondary)' }}>
                            উপস্থিতির শেষ সময় (Cut-off Time):
                          </label>
                          <input
                            type="time"
                            value={cutoffTime}
                            onChange={(e) => setCutoffTime(e.target.value)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              border: '1px solid var(--border-color, #cbd5e1)',
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              background: 'var(--bg-card, #ffffff)',
                              color: 'var(--text-primary)',
                              outline: 'none'
                            }}
                          />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
                          <input
                            type="checkbox"
                            id="attPageAutoAbsent"
                            checked={autoAbsentEnabled}
                            onChange={(e) => setAutoAbsentEnabled(e.target.checked)}
                            style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#10b981' }}
                          />
                          <label htmlFor="attPageAutoAbsent" style={{ fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', color: 'var(--text-primary)' }}>
                            কাট-অফ সময় পার হলে অটোমেটিক অনুপস্থিত মার্ক করা সক্রিয় রাখুন
                          </label>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
                          <input
                            type="checkbox"
                            id="attPageOutTimePush"
                            checked={outTimePushEnabled}
                            onChange={(e) => setOutTimePushEnabled(e.target.checked)}
                            style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#10b981' }}
                          />
                          <label htmlFor="attPageOutTimePush" style={{ fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', color: 'var(--text-primary)' }}>
                            ছুটির সময় প্রস্থান / আউট-টাইম পুশ নোটিফিকেশন পাঠান
                          </label>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          onClick={handleSaveCutoffSettings}
                          disabled={savingBioSettings || loadingBioSettings}
                          style={{
                            background: '#10b981',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}
                        >
                          {savingBioSettings ? <RefreshCw size={13} className="animate-spin" /> : <CheckCircle size={13} />}
                          <span>সেটিংস সেভ করুন</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleRunAbsentCheck}
                          disabled={runningAbsentCheck}
                          style={{
                            background: 'var(--bg-card, #ffffff)',
                            color: 'var(--text-secondary, #475569)',
                            border: '1px solid var(--border-color, #cbd5e1)',
                            borderRadius: '6px',
                            padding: '6px 10px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                          }}
                        >
                          {runningAbsentCheck ? <RefreshCw size={13} className="animate-spin" /> : <Bell size={13} />}
                          <span>অনুপস্থিত চেক চালান (টেস্ট)</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* লোডিং অবস্থা */}
      {loading ? (
        <div className="card flex-center" style={{ padding: '60px' }}>
          <div className="spinner"></div>
          <span className="ml-12 text-muted">শিক্ষার্থীদের তথ্য ও উপস্থিতি লোড হচ্ছে...</span>
        </div>
      ) : !canMarkAttendance ? (
        /* রিড-অনলি ভিউ (ছাত্র/অভিভাবকদের জন্য) */
        historyRecords.length === 0 ? (
          <div className="card empty-state">
            <ClipboardCheck size={48} style={{ opacity: 0.3 }} />
            <div className="empty-state-title mt-16">কোনো উপস্থিতির তথ্য পাওয়া যায়নি</div>
          </div>
        ) : (
          <div className="animate-slide-up">
            <div className="card table-container" style={{ padding: 0 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '150px' }}>তারিখ</th>
                    <th>শিক্ষার্থীর নাম ও আইডি</th>
                    <th style={{ width: '150px', textAlign: 'center' }}>স্ট্যাটাস</th>
                    <th>মন্তব্য</th>
                  </tr>
                </thead>
                <tbody>
                  {historyRecords.map(rec => {
                    const studentName = rec.student?.user?.fullName || 
                      `${rec.student?.user?.firstName || ''} ${rec.student?.user?.lastName || ''}`.trim();
                    const formattedDate = new Date(rec.date).toLocaleDateString('bn-BD', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    });
                    return (
                      <tr key={rec._id}>
                        <td style={{ fontFamily: 'Inter', fontWeight: 600 }}>{formattedDate}</td>
                        <td>
                          <div className="font-semibold">{studentName}</div>
                          <div className="text-xs text-muted">{rec.student?.studentId}</div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className={`badge ${getStatusBadgeClass(rec.status)}`}>
                            {getStatusLabel(rec.status)}
                          </span>
                        </td>
                        <td className="text-muted text-sm">{rec.remarks || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : students.length === 0 ? (
        /* এম্পটি স্টেট */
        <div className="card empty-state">
          <div style={{ 
            width: '64px', height: '64px', borderRadius: '50%', 
            background: 'rgba(16, 185, 129, 0.1)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', margin: '0 auto' 
          }}>
            <ClipboardCheck size={32} className="text-primary" />
          </div>
          <div className="empty-state-title mt-16" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            উপস্থিতি দেখার জন্য "শিক্ষার্থী লোড করুন" বাটনে চাপুন
          </div>
          <p className="text-muted text-sm mt-8" style={{ maxWidth: '500px', margin: '8px auto 0' }}>
            সকল শ্রেণি বা নির্দিষ্ট শ্রেণির সকল শিক্ষার্থীকে একসাথে একক দিন অথবা একাধিক দিনের তারিখের রেঞ্জে লোড করা যাবে।
          </p>
        </div>
      ) : (
        /* উপস্থিতি মূল শীট */
        <div className="animate-slide-up">
          {/* একক দিন মোডের রিয়েলটাইম পরিসংখ্যান ওভারভিউ কার্ডস */}
          {dateMode === 'single' && (
            <div className="attendance-stats-grid mb-14 no-print">
              <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="stat-icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}>
                  <Users size={18} />
                </div>
                <div>
                  <div className="stat-label text-xs text-muted">মোট শিক্ষার্থী</div>
                  <div className="stat-value" style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Inter', lineHeight: 1.2 }}>{singleDayStats.total}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="stat-icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', flexShrink: 0 }}>
                  <UserCheck size={18} />
                </div>
                <div>
                  <div className="stat-label text-xs text-muted">উপস্থিত ({singleDayStats.presentRate}%)</div>
                  <div className="stat-value" style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--success)', lineHeight: 1.2 }}>{singleDayStats.present}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="stat-icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', flexShrink: 0 }}>
                  <UserX size={18} />
                </div>
                <div>
                  <div className="stat-label text-xs text-muted">অনুপস্থিত ({singleDayStats.absentRate}%)</div>
                  <div className="stat-value" style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--danger)', lineHeight: 1.2 }}>{singleDayStats.absent}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="stat-icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div className="stat-label text-xs text-muted">বিলম্ব / ছুটি</div>
                  <div className="stat-value" style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--warning)', lineHeight: 1.2 }}>{singleDayStats.late + singleDayStats.leave}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="stat-icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(100, 116, 139, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', flexShrink: 0 }}>
                  <RotateCcw size={18} />
                </div>
                <div>
                  <div className="stat-label text-xs text-muted">অনির্ধারিত (Pending)</div>
                  <div className="stat-value" style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Inter', lineHeight: 1.2 }}>{singleDayStats.notAssigned}</div>
                </div>
              </div>
            </div>
          )}

          {/* ইন-শীট সার্চ ও বাল্ক অ্যাকশন বার */}
          <div className="card mb-16 no-print attendance-toolbar-card" style={{ padding: '12px 16px', borderRadius: '14px' }}>
            <div className="flex-between attendance-toolbar-inner" style={{ flexWrap: 'nowrap', gap: '6px', alignItems: 'center' }}>
              {/* সার্চ বার */}
              <div className="attendance-search-wrap" style={{ position: 'relative', flex: 1, minWidth: 0 }}>
                <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="নাম, রোল বা আইডি..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '30px', height: '36px', fontSize: '0.82rem', marginBottom: 0, width: '100%' }}
                />
              </div>

              {/* ফিল্টার লুকানো থাকলেই কেবল সার্চ বারের পাশে শ্রেণি শো করবে */}
              {isFilterCollapsed && (
                <div className="attendance-toolbar-class-filter" style={{ flexShrink: 0 }}>
                  <select
                    className="form-input form-select"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{ height: '36px', fontSize: '0.82rem', padding: '0 20px 0 8px', width: 'auto', minWidth: '105px', maxWidth: '160px', marginBottom: 0, fontWeight: 600 }}
                    title="শ্রেণি ফিল্টার"
                  >
                    <option value="all">সকল শ্রেণি</option>
                    {classes.map(c => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* পিসি/ডেস্কটপ ভিউ: দ্রুত অ্যাকশন ও স্ট্যাটাস ফিল্টার (উপরে প্রদর্শিত) */}
            {!isMobile && (
              <div className="attendance-quick-actions-top">
                {renderQuickActionsBlock()}
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* ৩.১ একক দিন মোডের টেবিল (Single Day Attendance Table)       */}
          {/* ======================================================== */}
          {dateMode === 'single' ? (
            <div className="card table-container" style={{ padding: 0, borderRadius: '16px', overflow: 'hidden' }}>
              {filteredStudents.length === 0 ? (
                <div className="empty-state" style={{ padding: '40px 20px' }}>
                  <Search size={32} style={{ opacity: 0.3, margin: '0 auto' }} />
                  <div className="empty-state-title mt-8" style={{ fontSize: '1rem' }}>কোনো শিক্ষার্থী পাওয়া যায়নি</div>
                </div>
              ) : (
                <>
                  {/* ── Mobile Card View (< 768px) ── */}
                  <div className="attendance-mobile-cards">
                    {paginatedStudents.map((student, idx) => {
                      const studentId = student._id;
                      const globalIdx = (currentPage - 1) * PAGE_SIZE + idx;
                      const roll = student.currentEnrollment?.rollNumber || (globalIdx + 1);
                      const studentName = student.user?.fullName ||
                        `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || 'নামহীন শিক্ষার্থী';
                      const className = student.currentEnrollment?.classLevel?.name || '—';
                      const sectionName = student.currentEnrollment?.section?.name ||
                        (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment?.section : '') || '—';
                      const currentStatus = attendance[studentId]?.status || 'not_assigned';
                      const currentRemarks = attendance[studentId]?.remarks || '';

                      const statusColorMap = {
                        present: { bg: 'rgba(16,185,129,0.15)', color: '#10b981', border: '#10b981' },
                        absent: { bg: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '#ef4444' },
                        late: { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '#f59e0b' },
                        on_leave: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6', border: '#3b82f6' },
                        not_assigned: { bg: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: 'var(--border-color)' },
                      };
                      const sc = statusColorMap[currentStatus] || statusColorMap.not_assigned;

                      return (
                        <div key={studentId} style={{
                          background: 'var(--bg-card)', border: `1.5px solid ${sc.border}`,
                          borderRadius: '14px', padding: '14px', marginBottom: '10px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <div style={{
                              width: '42px', height: '42px', borderRadius: '50%',
                              background: getAvatarGradient(studentName), color: '#fff',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontWeight: 700, fontSize: '1rem', flexShrink: 0
                            }}>
                              {studentName.charAt(0)}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                {studentName}
                              </div>
                              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                <span>রোল: <strong style={{ color: 'var(--primary-600)', fontFamily: 'Inter' }}>{roll}</strong></span>
                                <span>• {className}</span>
                                <span>• {sectionName}</span>
                              </div>
                              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1px' }}>
                                ID: {student.studentId || 'N/A'}
                              </div>
                            </div>
                            <span style={{
                              padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700,
                              background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`, flexShrink: 0
                            }}>
                              {getStatusLabel(currentStatus)}
                            </span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px', marginBottom: '10px' }}>
                            {[
                              { status: 'present', label: '✓ উপস্থিত', ac: '#10b981' },
                              { status: 'absent', label: '✕ অনুপস্থিত', ac: '#ef4444' },
                              { status: 'late', label: '⏰ বিলম্ব', ac: '#f59e0b' },
                              { status: 'on_leave', label: '📋 ছুটি', ac: '#3b82f6' },
                            ].map(({ status, label, ac }) => (
                              <button key={status} type="button"
                                onClick={() => handleStatusChange(studentId, status)}
                                style={{
                                  padding: '10px 4px', borderRadius: '10px', fontSize: '0.72rem', lineHeight: 1.3,
                                  border: currentStatus === status ? `2px solid ${ac}` : '1.5px solid var(--border-color)',
                                  background: currentStatus === status ? `${ac}22` : 'var(--bg-secondary)',
                                  color: currentStatus === status ? ac : 'var(--text-secondary)',
                                  fontWeight: currentStatus === status ? 700 : 500,
                                  cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s ease',
                                }}>
                                {label}
                              </button>
                            ))}
                          </div>
                          <input type="text" className="form-input"
                            placeholder="মন্তব্য লিখুন (ঐচ্ছিক)..."
                            value={currentRemarks}
                            onChange={(e) => handleRemarksChange(studentId, e.target.value)}
                            style={{ height: '36px', fontSize: '0.82rem', marginBottom: 0 }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* ── Desktop Table View (>= 768px) ── */}
                  <div className="attendance-desktop-table">
                    <div className="table-wrapper">
                  <table className="table" style={{ margin: 0 }}>
                    <thead>
                      <tr>
                        <th style={{ width: '80px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('roll')}>
                          রোল <SortIcon col="roll" />
                        </th>
                        <th style={{ minWidth: '220px', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('name')}>
                          শিক্ষার্থীর নাম ও আইডি <SortIcon col="name" />
                        </th>
                        <th style={{ width: '130px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('class')}>
                          শ্রেণি <SortIcon col="class" />
                        </th>
                        <th style={{ width: '100px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('section')}>
                          সেকশন <SortIcon col="section" />
                        </th>
                        <th style={{ width: '120px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('status')}>
                          স্ট্যাটাস <SortIcon col="status" />
                        </th>
                        <th style={{ textAlign: 'center', minWidth: '340px' }}>উপস্থিতি নির্বাচন করুন</th>
                        <th style={{ minWidth: '200px', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('remarks')}>
                          মন্তব্য (ঐচ্ছিক) <SortIcon col="remarks" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedStudents.map((student, idx) => {
                        const studentId = student._id;
                        const globalIdx = (currentPage - 1) * PAGE_SIZE + idx;
                        const roll = student.currentEnrollment?.rollNumber || (globalIdx + 1);
                        const studentName = student.user?.fullName || 
                          `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || 'নামহীন শিক্ষার্থী';
                        const className = student.currentEnrollment?.classLevel?.name || '—';
                        const sectionName = student.currentEnrollment?.section?.name || 
                          (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment?.section : '') || 
                          '—';
                        
                        const currentStatus = attendance[studentId]?.status || 'not_assigned';
                        const currentRemarks = attendance[studentId]?.remarks || '';

                        return (
                          <tr key={studentId} style={{ transition: 'background 0.15s ease' }}>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem' }}>
                              {roll}
                            </td>
                            <td>
                              <div className="flex gap-10" style={{ alignItems: 'center' }}>
                                <div 
                                  style={{ 
                                    width: '34px', height: '34px', borderRadius: '50%', 
                                    background: getAvatarGradient(studentName), 
                                    color: '#fff', display: 'flex', alignItems: 'center', 
                                    justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' 
                                  }}
                                >
                                  {studentName.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                    <span>{studentName}</span>
                                    {student.branch?.name && (
                                      <span 
                                        className="badge" 
                                        style={{ 
                                          fontSize: '0.68rem', 
                                          padding: '1px 6px',
                                          fontWeight: 600,
                                          background: student.branch.name.includes('+') ? 'rgba(168, 85, 247, 0.15)' : 'rgba(59, 130, 246, 0.1)',
                                          color: student.branch.name.includes('+') ? '#a855f7' : 'var(--primary-600)',
                                          border: student.branch.name.includes('+') ? '1px solid rgba(168, 85, 247, 0.3)' : 'none'
                                        }}
                                        title={`শাখা: ${student.branch.name}`}
                                      >
                                        {student.branch.name}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-muted flex gap-8">
                                    <span>ID: {student.studentId || 'N/A'}</span>
                                    {student.admissionNumber && <span>• ভর্তি: {student.admissionNumber}</span>}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 600 }}>
                              <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                                {className}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center', fontSize: '0.85rem' }}>
                              <span className="badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                                {sectionName}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className={`badge ${getStatusBadgeClass(currentStatus)}`} style={{ fontSize: '0.8rem', padding: '3px 10px' }}>
                                {getStatusLabel(currentStatus)}
                              </span>
                              {attendance[studentId]?.punchCount > 0 && (
                                <div 
                                  style={{
                                    marginTop: '4px',
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    color: '#0284c7',
                                    background: 'rgba(2, 132, 199, 0.08)',
                                    borderRadius: '6px',
                                    padding: '2px 6px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                    cursor: 'help'
                                  }}
                                  title={
                                    attendance[studentId]?.punchTimes && attendance[studentId]?.punchTimes.length > 0
                                      ? `সকল পাঞ্চ লগ (${attendance[studentId]?.punchCount} বার):\n${attendance[studentId]?.punchTimes.map((t, i) => `${i + 1}. ${t}`).join('\n')}`
                                      : `পাঞ্চ সংখ্যা: ${attendance[studentId]?.punchCount}`
                                  }
                                >
                                  <span>⏰ {attendance[studentId]?.inTime || 'ইন'}{attendance[studentId]?.outTime ? ` - ${attendance[studentId]?.outTime}` : ''}</span>
                                  <span style={{ 
                                    background: '#0284c7', 
                                    color: '#fff', 
                                    borderRadius: '10px', 
                                    padding: '0 4px', 
                                    fontSize: '0.66rem',
                                    marginLeft: '2px' 
                                  }}>
                                    {attendance[studentId]?.punchCount} বার
                                  </span>
                                </div>
                              )}
                            </td>
                            <td>
                              <div className="flex-center gap-4">
                                <button
                                  type="button"
                                  className="btn btn-sm"
                                  onClick={() => handleStatusChange(studentId, 'present')}
                                  style={{
                                    padding: '5px 11px',
                                    fontSize: '0.8rem',
                                    fontWeight: currentStatus === 'present' ? 700 : 500,
                                    borderRadius: '8px',
                                    border: currentStatus === 'present' ? '1px solid #10b981' : '1px solid var(--border-color)',
                                    background: currentStatus === 'present' ? 'rgba(16, 185, 129, 0.18)' : 'transparent',
                                    color: currentStatus === 'present' ? '#10b981' : 'var(--text-secondary)'
                                  }}
                                >
                                  উপস্থিত
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm"
                                  onClick={() => handleStatusChange(studentId, 'absent')}
                                  style={{
                                    padding: '5px 11px',
                                    fontSize: '0.8rem',
                                    fontWeight: currentStatus === 'absent' ? 700 : 500,
                                    borderRadius: '8px',
                                    border: currentStatus === 'absent' ? '1px solid #ef4444' : '1px solid var(--border-color)',
                                    background: currentStatus === 'absent' ? 'rgba(239, 68, 68, 0.18)' : 'transparent',
                                    color: currentStatus === 'absent' ? '#ef4444' : 'var(--text-secondary)'
                                  }}
                                >
                                  অনুপস্থিত
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm"
                                  onClick={() => handleStatusChange(studentId, 'late')}
                                  style={{
                                    padding: '5px 11px',
                                    fontSize: '0.8rem',
                                    fontWeight: currentStatus === 'late' ? 700 : 500,
                                    borderRadius: '8px',
                                    border: currentStatus === 'late' ? '1px solid #f59e0b' : '1px solid var(--border-color)',
                                    background: currentStatus === 'late' ? 'rgba(245, 158, 11, 0.18)' : 'transparent',
                                    color: currentStatus === 'late' ? '#f59e0b' : 'var(--text-secondary)'
                                  }}
                                >
                                  বিলম্ব
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm"
                                  onClick={() => handleStatusChange(studentId, 'on_leave')}
                                  style={{
                                    padding: '5px 11px',
                                    fontSize: '0.8rem',
                                    fontWeight: currentStatus === 'on_leave' ? 700 : 500,
                                    borderRadius: '8px',
                                    border: currentStatus === 'on_leave' ? '1px solid #3b82f6' : '1px solid var(--border-color)',
                                    background: currentStatus === 'on_leave' ? 'rgba(59, 130, 246, 0.18)' : 'transparent',
                                    color: currentStatus === 'on_leave' ? '#3b82f6' : 'var(--text-secondary)'
                                  }}
                                >
                                  ছুটি
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm"
                                  onClick={() => handleStatusChange(studentId, 'not_assigned')}
                                  title="রিসেট"
                                  style={{
                                    padding: '5px 9px',
                                    fontSize: '0.78rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)',
                                    background: currentStatus === 'not_assigned' ? 'var(--bg-tertiary)' : 'transparent',
                                    color: currentStatus === 'not_assigned' ? 'var(--text-primary)' : 'var(--text-muted)'
                                  }}
                                >
                                  —
                                </button>
                              </div>
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-input"
                                style={{ padding: '6px 12px', fontSize: '0.82rem', marginBottom: 0, height: '34px' }}
                                placeholder="মন্তব্য লিখুন..."
                                value={currentRemarks}
                                onChange={(e) => handleRemarksChange(studentId, e.target.value)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  </div>
                  </div>
                </>
              )}

              {/* পেজিনেশন */}
              {totalPages > 1 && (
                <div className="no-print" style={{ padding: '12px 20px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    style={{ padding: '5px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: currentPage === 1 ? 'var(--bg-tertiary)' : 'var(--bg-card)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-primary)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <ChevronLeft size={14} /> আগে
                  </button>
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let page;
                    if (totalPages <= 7) {
                      page = i + 1;
                    } else if (currentPage <= 4) {
                      page = i + 1 <= 5 ? i + 1 : (i === 5 ? '...' : totalPages);
                    } else if (currentPage >= totalPages - 3) {
                      page = i === 0 ? 1 : (i === 1 ? '...' : totalPages - (6 - i));
                    } else {
                      const map = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                      page = map[i];
                    }
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={page === '...'}
                        onClick={() => page !== '...' && setCurrentPage(page)}
                        style={{
                          minWidth: '34px', height: '34px', borderRadius: '8px',
                          border: '1px solid',
                          borderColor: page === currentPage ? 'var(--primary)' : 'var(--border-color)',
                          background: page === currentPage ? 'var(--primary)' : 'var(--bg-card)',
                          color: page === currentPage ? '#fff' : page === '...' ? 'var(--text-muted)' : 'var(--text-primary)',
                          cursor: page === '...' ? 'default' : 'pointer',
                          fontSize: '0.82rem', fontWeight: page === currentPage ? 700 : 400,
                          fontFamily: 'Inter'
                        }}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                    style={{ padding: '5px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: currentPage === totalPages ? 'var(--bg-tertiary)' : 'var(--bg-card)', color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    পরে <ChevronRight size={14} />
                  </button>
                  <span className="text-xs text-muted" style={{ fontFamily: 'Inter' }}>
                    {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filteredStudents.length)} / {filteredStudents.length} জন
                  </span>
                </div>
              )}

              {/* মোবাইল ভিউ: দ্রুত অ্যাকশন ও স্ট্যাটাস ফিল্টার (তালিকার শেষে) */}
              {isMobile && (
                <div className="attendance-quick-actions-bottom no-print" style={{ padding: '6px 12px 12px 12px' }}>
                  {renderQuickActionsBlock()}
                </div>
              )}

              {/* ফুটার সেভ বার */}
              <div 
                className="no-print attendance-footer-bar"
                style={{ 
                  padding: '16px 24px', borderTop: '1px solid var(--border-color)', 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'var(--bg-secondary)', flexWrap: 'wrap', gap: '12px' 
                }}
              >
                <div className="text-xs text-muted">
                  সর্বমোট {students.length} জনের মধ্যে {singleDayStats.present} জন উপস্থিত, {singleDayStats.absent} জন অনুপস্থিত
                </div>
                <div className="attendance-footer-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowPrintModal(true)}
                    title="প্রিন্ট করুন"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px' }}
                  >
                    <Printer size={16} /> প্রিন্ট শিট
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={saveAttendance}
                    disabled={submitting}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px' }}
                  >
                    <Save size={18} /> {submitting ? 'সংরক্ষণ হচ্ছে...' : 'উপস্থিতি সংরক্ষণ করুন'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ======================================================== */
            /* ৩.২ একাধিক দিন মোডের ম্যাট্রিক্স শিট (Date Range Matrix)  */
            /* ======================================================== */
            <div className="card table-container" style={{ padding: 0, borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '12px 20px', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div className="text-xs font-semibold text-muted flex gap-6" style={{ alignItems: 'center' }}>
                  <span>ব্যাপ্তি: {startDate} হতে {endDate} ({dateRangeList.length} দিন)</span>
                  <span>• সেলে ক্লিক করে স্ট্যাটাস পরিবর্তন করুন (উপ ➔ অনুপ ➔ বিলম্ব ➔ ছুটি)</span>
                </div>
                <div className="flex gap-10 text-xs">
                  <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }}></span> উপস্থিত</span>
                  <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }}></span> অনুপস্থিত</span>
                  <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }}></span> বিলম্ব</span>
                  <span className="flex gap-4" style={{ alignItems: 'center' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' }}></span> ছুটি</span>
                </div>
              </div>

              <div className="table-wrapper" style={{ maxHeight: '600px', overflowX: 'auto' }}>
                <table className="table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th style={{ width: '70px', textAlign: 'center', position: 'sticky', left: 0, zIndex: 5, background: 'var(--bg-card)', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('roll')}>
                        রোল <SortIcon col="roll" />
                      </th>
                      <th style={{ minWidth: '180px', position: 'sticky', left: '70px', zIndex: 5, background: 'var(--bg-card)', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('name')}>
                        শিক্ষার্থী <SortIcon col="name" />
                      </th>
                      <th style={{ width: '100px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('class')}>
                        শ্রেণি <SortIcon col="class" />
                      </th>
                      <th style={{ width: '80px', textAlign: 'center', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('section')}>
                        সেকশন <SortIcon col="section" />
                      </th>
                      
                      {/* তারিখের কলামসমূহ */}
                      {dateRangeList.map(dStr => {
                        const dateObj = new Date(dStr);
                        const dayNum = dateObj.getDate();
                        const monthName = dateObj.toLocaleDateString('bn-BD', { month: 'short' });
                        const weekdayName = dateObj.toLocaleDateString('bn-BD', { weekday: 'short' });
                        const isFriday = dateObj.getDay() === 5;

                        return (
                          <th 
                            key={dStr} 
                            style={{ 
                              minWidth: '58px', textAlign: 'center', padding: '6px 4px', 
                              background: isFriday ? 'rgba(239, 68, 68, 0.08)' : 'transparent',
                              color: isFriday ? 'var(--danger)' : 'inherit',
                              cursor: 'pointer', userSelect: 'none'
                            }}
                            onClick={() => handleSort(`date_${dStr}`)}
                            title={`${dStr} তারিখের উপস্থিতি অনুযায়ী সাজাতে ক্লিক করুন`}
                          >
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'Inter' }}>{dayNum}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{monthName}</div>
                            <div style={{ fontSize: '0.68rem', fontWeight: isFriday ? 700 : 400 }}>{weekdayName} <SortIcon col={`date_${dStr}`} /></div>
                          </th>
                        );
                      })}

                      <th style={{ width: '85px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.05)', color: 'var(--success)', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('present')}>
                        উপস্থিত <SortIcon col="present" />
                      </th>
                      <th style={{ width: '85px', textAlign: 'center', background: 'rgba(239, 68, 68, 0.05)', color: 'var(--danger)', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('absent')}>
                        অনুপস্থিত <SortIcon col="absent" />
                      </th>
                      <th style={{ width: '85px', textAlign: 'center', background: 'var(--bg-tertiary)', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('rate')}>
                        হার (%) <SortIcon col="rate" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedStudents.map((student, idx) => {
                      const studentId = student._id;
                      const globalIdx = (currentPage - 1) * PAGE_SIZE + idx;
                      const roll = student.currentEnrollment?.rollNumber || (globalIdx + 1);
                      const studentName = student.user?.fullName || 
                        `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || 'নামহীন শিক্ষার্থী';
                      const className = student.currentEnrollment?.classLevel?.name || '—';
                      const sectionName = student.currentEnrollment?.section?.name || 
                        (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment?.section : '') || '—';
                      
                      const summary = getStudentRangeSummary(studentId);

                      return (
                        <tr key={studentId}>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, position: 'sticky', left: 0, zIndex: 4, background: 'var(--bg-card)' }}>
                            {roll}
                          </td>
                          <td style={{ position: 'sticky', left: '60px', zIndex: 4, background: 'var(--bg-card)' }}>
                            <div className="font-semibold text-xs flex gap-6" style={{ whiteSpace: 'nowrap', alignItems: 'center' }}>
                              <span>{studentName}</span>
                              {student.branch?.name && (
                                <span 
                                  className="badge" 
                                  style={{ 
                                    fontSize: '0.62rem', 
                                    padding: '1px 5px',
                                    fontWeight: 600,
                                    background: student.branch.name.includes('+') ? 'rgba(168, 85, 247, 0.15)' : 'rgba(59, 130, 246, 0.1)',
                                    color: student.branch.name.includes('+') ? '#a855f7' : 'var(--primary-600)',
                                  }}
                                  title={`শাখা: ${student.branch.name}`}
                                >
                                  {student.branch.name}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-muted" style={{ fontSize: '0.72rem' }}>{student.studentId}</div>
                          </td>
                          <td style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                            <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '2px 6px' }}>
                              {className}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                            <span className="badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', padding: '2px 6px' }}>
                              {sectionName}
                            </span>
                          </td>

                          {/* তারিখ অনুযায়ী ইন্টারেক্টিভ সেল */}
                          {dateRangeList.map(dStr => {
                            const cellStatus = matrixAttendance[studentId]?.[dStr]?.status || 'not_assigned';
                            const badge = getMatrixCellBadge(cellStatus);
                            const isFriday = new Date(dStr).getDay() === 5;

                            return (
                              <td 
                                key={dStr} 
                                style={{ 
                                  textAlign: 'center', padding: '4px', 
                                  background: isFriday ? 'rgba(239, 68, 68, 0.03)' : 'transparent' 
                                }}
                              >
                                <button
                                  type="button"
                                  onClick={() => cycleMatrixStatus(studentId, dStr)}
                                  title={`${studentName} (${dStr}): ${badge.label} — ক্লিক করে পরিবর্তন করুন`}
                                  style={{
                                    width: '32px',
                                    height: '28px',
                                    borderRadius: '6px',
                                    border: `1px solid ${badge.border}`,
                                    background: badge.bg,
                                    color: badge.color,
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    padding: 0,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.1s'
                                  }}
                                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
                                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                  {badge.text}
                                </button>
                              </td>
                            );
                          })}

                          {/* সামারি কলামসমূহ */}
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, color: 'var(--success)' }}>
                            {summary.present}
                          </td>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, color: 'var(--danger)' }}>
                            {summary.absent}
                          </td>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700 }}>
                            <span className={`badge ${summary.rate >= 75 ? 'badge-active' : summary.rate >= 50 ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.75rem', padding: '2px 6px' }}>
                              {summary.rate}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* মোবাইল ভিউ: দ্রুত অ্যাকশন ও স্ট্যাটাস ফিল্টার (মাল্টি-ডে তালিকার শেষে) */}
              {isMobile && (
                <div className="attendance-quick-actions-bottom no-print" style={{ padding: '8px 12px 12px 12px' }}>
                  {renderQuickActionsBlock()}
                </div>
              )}

              {/* ফুটার সেভ বার */}
              <div 
                className="no-print attendance-footer-bar"
                style={{ 
                  padding: '16px 24px', borderTop: '1px solid var(--border-color)', 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'var(--bg-secondary)', flexWrap: 'wrap', gap: '12px' 
                }}
              >
                <div className="text-xs text-muted">
                  মোট {students.length} জন শিক্ষার্থীর {dateRangeList.length} দিনের উপস্থিতি শীট
                </div>
                <div className="attendance-footer-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowPrintModal(true)}
                    title="প্রিন্ট করুন"
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px' }}
                  >
                    <Printer size={16} /> প্রিন্ট শিট
                  </button>
                  <button 
                    type="button"
                    className="btn btn-primary" 
                    onClick={saveAttendance}
                    disabled={submitting}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px' }}
                  >
                    <Save size={18} /> {submitting ? 'সংরক্ষণ হচ্ছে...' : `সকল দিনের উপস্থিতি সংরক্ষণ করুন (${dateRangeList.length} দিন)`}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── ডেডিকেটেড A4 প্রিন্ট শিট (ব্রাউজার প্রিন্ট রেন্ডার) ── */}
      <div className="attendance-print-sheet">
        {renderPrintableContent()}
      </div>

      {/* ── প্রিন্ট প্রিভিউ ও স্বাক্ষর পদবি নির্বাচন মোডাল (Print Preview Dialog) ── */}
      {showPrintModal && (
        <div className="print-modal-overlay no-print" style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: windowWidth < 640 ? '6px' : '16px', backdropFilter: 'blur(6px)'
        }}>
          <div className="card print-modal-card animate-scale-up" style={{
            width: '100%', maxWidth: dateMode === 'range' ? '1060px' : '920px', maxHeight: '96vh',
            display: 'flex', flexDirection: 'column', borderRadius: '16px',
            background: 'var(--bg-card)', padding: 0, overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)', border: '1px solid var(--border-color)'
          }}>
            {/* Modal Header */}
            <div className="print-preview-modal-header" style={{
              padding: '12px 18px', borderBottom: '1px solid var(--border-color)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'var(--bg-tertiary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={18} className="text-primary" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  উপস্থিতি শিট প্রিন্ট প্রিভিউ ও সেটিংস ({dateMode === 'single' ? 'একক দিন' : 'তারিখ ব্যাপ্তি'})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                title="বন্ধ করুন"
              >
                <X size={20} />
              </button>
            </div>

            {/* Controls Bar: Roles & Actions (no-print) */}
            <div className="print-preview-controls no-print" style={{
              padding: '10px 18px', borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  প্রিন্ট প্রিভিউ ও স্বাক্ষর নিয়ন্ত্রণ
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => window.print()}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 16px', fontWeight: 700, fontSize: '0.82rem' }}
                  >
                    <Printer size={15} /> প্রিন্ট করুন ({dateMode === 'range' ? 'A4 Landscape' : 'A4 Portrait'})
                  </button>
                </div>
              </div>

              {/* Universal Signature Role Selector */}
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__student_attendance', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={customRolesList}
                style={{ marginBottom: '0', background: 'transparent', border: 'none', padding: '0' }}
              />
            </div>


            {/* View Mode Toolbar (no-print) */}
            <div className="print-preview-view-mode-bar no-print" style={{
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
                  minWidth: previewZoom === 'fit' ? '100%' : `${baseSheetWidth}px`,
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: previewZoom === 'fit' ? 'hidden' : 'visible'
                }}
              >
                <div
                  className="print-paper-sheet"
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '24px 28px',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
                    width: `${baseSheetWidth}px`,
                    minWidth: `${baseSheetWidth}px`,
                    position: 'relative',
                    transform: previewZoom === 'fit' ? `scale(${mobileFitScale})` : 'none',
                    transformOrigin: 'top center'
                  }}
                >
                  {renderPrintableContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* কাস্টম প্রিন্ট ও অ্যানিমেশন সিএসএস */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .attendance-print-sheet {
          display: none !important;
        }
        @media print {
          @page {
            size: ${dateMode === 'range' ? 'A4 landscape' : 'A4 portrait'};
            margin: 6mm 10mm;
          }
          /* স্ক্রিনের সাধারণ UI সম্পূর্ণ হাইড */
          .no-print,
          .sidebar,
          .topbar,
          .mobile-sidebar-overlay,
          .attendance-page-header,
          .attendance-header-actions,
          .attendance-filter-card,
          .attendance-stats-grid,
          .attendance-toolbar-card,
          .attendance-mobile-cards,
          .attendance-desktop-table,
          .attendance-footer-bar,
          .table-container,
          .card,
          .btn,
          nav,
          header:not(#madrasah-official-header):not(.madrasah-letterhead-root) {
            display: none !important;
          }
          body, html, #root, .dashboard-layout, .main-content, .page-container, .attendance-page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            overflow: visible !important;
            min-height: auto !important;
          }
          /* ডেডিকেটেড A4 প্রিন্ট শিট দৃশ্যমান */
          .attendance-print-sheet {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100% !important;
            width: 100% !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-sizing: border-box !important;
          }
          .attendance-print-sheet #madrasah-official-header,
          .attendance-print-sheet .madrasah-letterhead-root {
            display: block !important;
            width: 100% !important;
          }
          .attendance-print-table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin-top: 8px !important;
            font-size: 9pt !important;
          }
          .attendance-print-table th,
          .attendance-print-table td {
            border: 1px solid #333333 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
            line-height: 1.25 !important;
          }
          .attendance-print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .attendance-print-table thead {
            display: table-header-group !important;
          }
          .attendance-print-table tbody tr {
            page-break-inside: avoid !important;
          }
          .print-status-badge {
            padding: 1px 6px !important;
            border-radius: 4px !important;
            font-size: 8pt !important;
            display: inline-block !important;
            border: 1px solid #cbd5e1 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
