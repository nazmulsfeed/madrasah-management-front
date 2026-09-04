import { useState, useEffect, useMemo } from 'react';
import { 
  ClipboardCheck, CheckCircle, AlertCircle, Save, Search, 
  ChevronLeft, ChevronRight, Check, Calendar, 
  Filter, Users, UserCheck, UserX, Clock, Coffee, RotateCcw, 
  Printer, Sparkles, Layers, CalendarRange
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { SECTION_OPTIONS } from '../../utils/constants';

export default function AttendancePage() {
  const { user, permissions } = useAuthStore();
  const canMarkAttendance = user?.userType === 'super_admin' || permissions?.can_mark_attendance;

  // Date selection mode: 'single' | 'range'
  const [dateMode, setDateMode] = useState('single');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Date range state
  const todayStr = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 6);
    return d.toISOString().split('T')[0];
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

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Fetch initial metadata (classes, branches, sections)
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
  }, [canMarkAttendance]);

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

  // Date Navigation Helpers for single date mode
  const handleDateShift = (days) => {
    const curr = new Date(date);
    curr.setDate(curr.getDate() + days);
    setDate(curr.toISOString().split('T')[0]);
  };

  const setDateToday = () => {
    setDate(new Date().toISOString().split('T')[0]);
  };

  const setDateYesterday = () => {
    const yest = new Date();
    yest.setDate(yest.getDate() - 1);
    setDate(yest.toISOString().split('T')[0]);
  };

  // Quick presets for Date Range mode
  const setRangeLastDays = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - (days - 1));
    setStartDate(start.toISOString().split('T')[0]);
    setEndDate(end.toISOString().split('T')[0]);
  };

  const setRangeThisMonth = () => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    setStartDate(firstDay.toISOString().split('T')[0]);
    setEndDate(now.toISOString().split('T')[0]);
  };

  // Main Load Attendance Data function
  const loadAttendanceData = async () => {
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

        const attendanceRes = await api.get('/attendance', { params: attendanceParams });
        const records = attendanceRes.data.data?.records || [];

        const initialAttendance = {};
        studentsData.forEach(student => {
          initialAttendance[student._id] = { status: 'not_assigned', remarks: '' };
        });

        records.forEach(rec => {
          const sId = typeof rec.student === 'object' ? rec.student?._id : rec.student;
          if (sId && initialAttendance[sId]) {
            initialAttendance[sId] = {
              status: rec.status || 'not_assigned',
              remarks: rec.remarks || ''
            };
          }
        });

        setAttendance(initialAttendance);
      } else {
        // Multi-Date Range Attendance Fetch
        const attendanceParams = { startDate, endDate };
        if (selectedClass && selectedClass !== 'all') attendanceParams.classLevel = selectedClass;
        if (selectedSection && selectedSection !== 'all') attendanceParams.section = selectedSection;

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

  useEffect(() => {
    if (!canMarkAttendance) {
      loadReadOnlyAttendanceData();
    }
  }, [canMarkAttendance]);

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
      // 1. Search filter
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase().trim();
        const fullName = (student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`).toLowerCase();
        const studentId = (student.studentId || '').toLowerCase();
        const adm = (student.admissionNumber || '').toLowerCase();
        const roll = String(student.currentEnrollment?.rollNumber || '');
        const className = (student.currentEnrollment?.classLevel?.name || '').toLowerCase();
        const matchesSearch = fullName.includes(term) || studentId.includes(term) || adm.includes(term) || roll.includes(term) || className.includes(term);
        if (!matchesSearch) return false;
      }

      // 2. Status tab filter (only applies in single date mode)
      if (dateMode === 'single' && statusFilter !== 'all') {
        const currStatus = attendance[student._id]?.status || 'not_assigned';
        if (currStatus !== statusFilter) return false;
      }

      return true;
    });
  }, [students, searchTerm, statusFilter, attendance, dateMode]);

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

      {/* Header */}
      <div className="page-header no-print">
        <div>
          <h1 className="page-title flex gap-8" style={{ alignItems: 'center' }}>
            <ClipboardCheck size={28} className="text-primary" /> উপস্থিতি খাতা (Attendance)
          </h1>
          <p className="page-subtitle">
            {canMarkAttendance 
              ? 'মাদ্রাসার শিক্ষার্থীদের একক ও একাধিক দিনের উপস্থিতি গ্রহণ, সংশোধন ও অ্যাডভান্সড ফিল্টারিং' 
              : 'আপনার শিক্ষার্থীর উপস্থিতি বিবরণী'}
          </p>
        </div>
        {canMarkAttendance && students.length > 0 && (
          <div className="flex gap-8">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => window.print()}
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
        <div className="card mb-20 no-print" style={{ padding: '20px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
          {metaLoading ? (
            <div className="flex-center" style={{ padding: '20px' }}>
              <div className="spinner" style={{ width: '28px', height: '28px' }}></div>
              <span className="ml-12 text-muted text-sm">মেটাডাটা লোড হচ্ছে...</span>
            </div>
          ) : (
            <div>
              {/* উপরের বার: তারিখের মোড সুইচ (একক দিন বনাম একাধিক দিন) */}
              <div className="flex-between mb-16" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="flex gap-8" style={{ alignItems: 'center' }}>
                  <span className="text-xs font-semibold text-muted">তারিখের ধরন:</span>
                  <div style={{ display: 'inline-flex', background: 'var(--bg-tertiary)', padding: '3px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <button
                      type="button"
                      onClick={() => setDateMode('single')}
                      style={{
                        padding: '5px 14px',
                        borderRadius: '8px',
                        border: 'none',
                        background: dateMode === 'single' ? 'var(--primary)' : 'transparent',
                        color: dateMode === 'single' ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Calendar size={14} /> একক দিন (Single Date)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDateMode('range')}
                      style={{
                        padding: '5px 14px',
                        borderRadius: '8px',
                        border: 'none',
                        background: dateMode === 'range' ? 'var(--primary)' : 'transparent',
                        color: dateMode === 'range' ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <CalendarRange size={14} /> একাধিক দিন / রেঞ্জ (Date Range)
                    </button>
                  </div>
                </div>

                {/* কুইক ডেট প্রি-সেট শর্টকাট */}
                {dateMode === 'single' ? (
                  <div className="flex gap-8" style={{ alignItems: 'center' }}>
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm" 
                      onClick={setDateYesterday}
                      style={{ fontSize: '0.8rem', padding: '4px 10px' }}
                    >
                      গতকাল
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-ghost btn-sm text-primary" 
                      onClick={setDateToday}
                      style={{ fontSize: '0.8rem', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)' }}
                    >
                      আজ
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-6" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="text-xs text-muted">দ্রুত রেঞ্জ:</span>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(3)} style={{ fontSize: '0.78rem', padding: '3px 8px' }}>গত ৩ দিন</button>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(7)} style={{ fontSize: '0.78rem', padding: '3px 8px' }}>গত ৭ দিন</button>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRangeLastDays(15)} style={{ fontSize: '0.78rem', padding: '3px 8px' }}>গত ১৫ দিন</button>
                    <button type="button" className="btn btn-ghost btn-sm text-primary" onClick={setRangeThisMonth} style={{ fontSize: '0.78rem', padding: '3px 8px' }}>চলতি মাস</button>
                  </div>
                )}
              </div>

              {/* ফিল্টার ইনপুট গ্রিড */}
              <div className="grid grid-4" style={{ gap: '16px', alignItems: 'flex-end' }}>
                {/* ১. তারিখ নির্বাচন (একক বা রেঞ্জ) */}
                {dateMode === 'single' ? (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.85rem' }}>তারিখ (Date) *</label>
                    <div className="flex gap-4" style={{ alignItems: 'center' }}>
                      <button 
                        type="button" 
                        className="btn btn-secondary btn-icon btn-sm" 
                        onClick={() => handleDateShift(-1)}
                        title="আগের দিন"
                        style={{ height: '38px', width: '36px' }}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        style={{ height: '38px', fontSize: '0.88rem' }}
                      />
                      <button 
                        type="button" 
                        className="btn btn-secondary btn-icon btn-sm" 
                        onClick={() => handleDateShift(1)}
                        title="পরের দিন"
                        style={{ height: '38px', width: '36px' }}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.85rem' }}>তারিখের সময়সীমা ({dateRangeList.length} দিন)</label>
                    <div className="flex gap-6" style={{ alignItems: 'center' }}>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        style={{ height: '38px', fontSize: '0.82rem', padding: '6px 8px' }}
                        title="শুরুর তারিখ"
                      />
                      <span className="text-muted text-xs">থেকে</span>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        style={{ height: '38px', fontSize: '0.82rem', padding: '6px 8px' }}
                        title="শেষের তারিখ"
                      />
                    </div>
                  </div>
                )}

                {/* ২. শাখা ফিল্টার */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>শাখা (Branch)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedBranch} 
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  >
                    <option value="">সকল শাখা (All Branches)</option>
                    {branches.map(b => (
                      <option key={b._id} value={b._id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                {/* ৩. শ্রেণি নির্বাচন (সকল শ্রেণি অপশন সহ) */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>শ্রেণি (Class)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedClass} 
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{ height: '38px', fontSize: '0.88rem', fontWeight: 600 }}
                  >
                    <option value="all">সকল শ্রেণি (All Classes)</option>
                    {classes.map(c => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* ৪. সেকশন ফিল্টার */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>সেকশন (Section)</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedSection} 
                    onChange={(e) => setSelectedSection(e.target.value)}
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  >
                    {availableSectionOptions.map((sec, idx) => (
                      <option key={idx} value={sec.value}>{sec.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* লোড বাটন বার */}
              <div className="flex-between mt-16" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div className="text-xs text-muted">
                  {dateMode === 'range' 
                    ? `* শুরু ${startDate} থেকে শেষ ${endDate} পর্যন্ত মোট ${dateRangeList.length} দিনের উপস্থিতি শীট লোড হবে`
                    : `* নির্বাচিত তারিখ: ${new Date(date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}`}
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={loadAttendanceData}
                  disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '150px', justifyContent: 'center' }}
                >
                  {loading ? (
                    <>
                      <div className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div>
                      লোড হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Search size={16} /> শিক্ষার্থী লোড করুন
                    </>
                  )}
                </button>
              </div>
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
            <div className="grid grid-5 mb-16 no-print" style={{ gap: '12px' }}>
              <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted">মোট শিক্ষার্থী</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter' }}>{singleDayStats.total}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <UserCheck size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted">উপস্থিত ({singleDayStats.presentRate}%)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--success)' }}>{singleDayStats.present}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <UserX size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted">অনুপস্থিত ({singleDayStats.absentRate}%)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--danger)' }}>{singleDayStats.absent}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted">বিলম্ব / ছুটি</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--warning)' }}>{singleDayStats.late + singleDayStats.leave}</div>
                </div>
              </div>

              <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(100, 116, 139, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                  <RotateCcw size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted">অনির্ধারিত (Pending)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter' }}>{singleDayStats.notAssigned}</div>
                </div>
              </div>
            </div>
          )}

          {/* ইন-শীট সার্চ ও বাল্ক অ্যাকশন বার */}
          <div className="card mb-16 no-print" style={{ padding: '14px 20px', borderRadius: '14px' }}>
            <div className="flex-between" style={{ flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              {/* সার্চ বার */}
              <div style={{ position: 'relative', flex: 1, minWidth: '220px', maxWidth: '380px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="নাম, রোল, শ্রেণি বা আইডি দিয়ে খুঁজুন..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '38px', height: '36px', fontSize: '0.85rem', marginBottom: 0 }}
                />
              </div>

              {/* বাল্ক একশন: সিঙ্গেল ডে মোডে */}
              {dateMode === 'single' ? (
                <div className="flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm text-success" 
                    onClick={() => markAllStatus('present')}
                    style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                  >
                    ✓ সবাই উপস্থিত
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm text-danger" 
                    onClick={() => markAllStatus('absent')}
                    style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                  >
                    ✕ সবাই অনুপস্থিত
                  </button>
                  {singleDayStats.notAssigned > 0 && (
                    <button 
                      type="button" 
                      className="btn btn-secondary btn-sm text-primary" 
                      onClick={markUnassignedAsPresent}
                      style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                    >
                      <Sparkles size={14} className="mr-4" /> বাকিদের উপস্থিত
                    </button>
                  )}
                  <button 
                    type="button" 
                    className="btn btn-ghost btn-sm text-muted" 
                    onClick={() => markAllStatus('not_assigned')}
                    style={{ fontSize: '0.82rem', padding: '6px 10px' }}
                  >
                    রিসেট
                  </button>
                </div>
              ) : (
                /* বাল্ক একশন: মাল্টি-ডে রেঞ্জ মোডে */
                <div className="flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm text-success" 
                    onClick={markAllRangePresent}
                    style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                    title="রেঞ্জের সব দিনে শিক্ষার্থীদের উপস্থিত করুন"
                  >
                    ✓ সকল দিনে সবাই উপস্থিত
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm text-info" 
                    onClick={markFridaysAsLeave}
                    style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                    title="রেঞ্জের শুক্রবারগুলো ছুটি চিহ্নিত করুন"
                  >
                    <Coffee size={14} className="mr-4" /> শুক্রবার ছুটি চিহ্নিত
                  </button>
                </div>
              )}
            </div>

            {/* ফিল্টার ট্যাব (Status Filter Tabs - শুধুমাত্র একক দিন মোডে) */}
            {dateMode === 'single' && (
              <div className="flex gap-6 mt-12" style={{ overflowX: 'auto', paddingBottom: '2px' }}>
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
                      padding: '4px 12px',
                      borderRadius: '20px',
                      border: '1px solid',
                      borderColor: statusFilter === tab.id ? 'var(--primary)' : 'var(--border-color)',
                      background: statusFilter === tab.id ? 'var(--primary)' : 'transparent',
                      color: statusFilter === tab.id ? '#fff' : 'var(--text-secondary)',
                      fontSize: '0.8rem',
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

          {/* প্রিন্ট হেডার (শুধু প্রিন্ট ভিউতে দৃশ্যমান) */}
          <div className="print-only" style={{ display: 'none', marginBottom: '16px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>মাদ্রাসা শিক্ষার্থী উপস্থিতি বিবরণী</h2>
            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
              {dateMode === 'single' 
                ? `তারিখ: ${new Date(date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}` 
                : `তারিখের ব্যাপ্তি: ${startDate} হতে ${endDate} (${dateRangeList.length} দিন)`}
            </p>
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
                <div className="table-wrapper">
                  <table className="table" style={{ margin: 0 }}>
                    <thead>
                      <tr>
                        <th style={{ width: '70px', textAlign: 'center' }}>রোল</th>
                        <th style={{ minWidth: '220px' }}>শিক্ষার্থীর নাম ও আইডি</th>
                        <th style={{ width: '130px', textAlign: 'center' }}>শ্রেণি</th>
                        <th style={{ width: '90px', textAlign: 'center' }}>সেকশন</th>
                        <th style={{ width: '110px', textAlign: 'center' }}>স্ট্যাটাস</th>
                        <th style={{ textAlign: 'center', minWidth: '340px' }}>উপস্থিতি নির্বাচন করুন</th>
                        <th style={{ minWidth: '200px' }}>মন্তব্য (ঐচ্ছিক)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student, idx) => {
                        const studentId = student._id;
                        const roll = student.currentEnrollment?.rollNumber || (idx + 1);
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
                                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                                    {studentName}
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
              )}

              {/* ফুটার সেভ বার */}
              <div 
                className="no-print"
                style={{ 
                  padding: '16px 24px', borderTop: '1px solid var(--border-color)', 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'var(--bg-secondary)', flexWrap: 'wrap', gap: '12px' 
                }}
              >
                <div className="text-xs text-muted">
                  সর্বমোট {students.length} জনের মধ্যে {singleDayStats.present} জন উপস্থিত, {singleDayStats.absent} জন অনুপস্থিত
                </div>
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
                      <th style={{ width: '60px', textAlign: 'center', position: 'sticky', left: 0, zIndex: 5, background: 'var(--bg-card)' }}>রোল</th>
                      <th style={{ minWidth: '180px', position: 'sticky', left: '60px', zIndex: 5, background: 'var(--bg-card)' }}>শিক্ষার্থী</th>
                      <th style={{ width: '100px', textAlign: 'center' }}>শ্রেণি</th>
                      <th style={{ width: '80px', textAlign: 'center' }}>সেকশন</th>
                      
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
                              minWidth: '55px', textAlign: 'center', padding: '6px 4px', 
                              background: isFriday ? 'rgba(239, 68, 68, 0.08)' : 'transparent',
                              color: isFriday ? 'var(--danger)' : 'inherit'
                            }}
                          >
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'Inter' }}>{dayNum}</div>
                            <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{monthName}</div>
                            <div style={{ fontSize: '0.68rem', fontWeight: isFriday ? 700 : 400 }}>{weekdayName}</div>
                          </th>
                        );
                      })}

                      <th style={{ width: '80px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.05)', color: 'var(--success)' }}>উপস্থিত</th>
                      <th style={{ width: '80px', textAlign: 'center', background: 'rgba(239, 68, 68, 0.05)', color: 'var(--danger)' }}>অনুপস্থিত</th>
                      <th style={{ width: '80px', textAlign: 'center', background: 'var(--bg-tertiary)' }}>হার (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student, idx) => {
                      const studentId = student._id;
                      const roll = student.currentEnrollment?.rollNumber || (idx + 1);
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
                            <div className="font-semibold text-xs" style={{ whiteSpace: 'nowrap' }}>{studentName}</div>
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

              {/* ফুটার সেভ বার */}
              <div 
                className="no-print"
                style={{ 
                  padding: '16px 24px', borderTop: '1px solid var(--border-color)', 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'var(--bg-secondary)', flexWrap: 'wrap', gap: '12px' 
                }}
              >
                <div className="text-xs text-muted">
                  মোট {students.length} জন শিক্ষার্থীর {dateRangeList.length} দিনের উপস্থিতি শীট
                </div>
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
          )}
        </div>
      )}

      {/* কাস্টম প্রিন্ট ও অ্যানিমেশন সিএসএস */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media print {
          .no-print, .sidebar, .topbar {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .attendance-page-container {
            padding: 0 !important;
          }
          .card {
            border: none !important;
            box-shadow: none !important;
          }
          .table th, .table td {
            border: 1px solid #ddd !important;
            color: #000 !important;
            font-size: 10pt !important;
          }
        }
      `}</style>
    </div>
  );
}
