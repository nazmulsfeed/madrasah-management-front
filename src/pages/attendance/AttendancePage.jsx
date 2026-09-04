import { useState, useEffect, useMemo } from 'react';
import { 
  ClipboardCheck, CheckCircle, AlertCircle, Save, Search, 
  ChevronLeft, ChevronRight, Check, Calendar, 
  Filter, Users, UserCheck, UserX, Clock, Coffee, RotateCcw, 
  Printer, Sparkles
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { SECTION_OPTIONS } from '../../utils/constants';

export default function AttendancePage() {
  const { user, permissions } = useAuthStore();
  const canMarkAttendance = user?.userType === 'super_admin' || permissions?.can_mark_attendance;

  // Primary filter state
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [classes, setClasses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [dbSections, setDbSections] = useState([]);

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('');
  const [selectedSection, setSelectedSection] = useState('all'); // 'all' or section name/id

  // In-sheet local filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'present' | 'absent' | 'late' | 'on_leave' | 'not_assigned'

  // Data states
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({}); // { [studentId]: { status: 'present'|'absent'|'late'|'on_leave'|'not_assigned', remarks: '' } }
  
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

  // Fetch initial metadata (classes, branches, academic years, sections)
  useEffect(() => {
    if (!canMarkAttendance) {
      setMetaLoading(false);
      return;
    }
    const fetchMetadata = async () => {
      try {
        const [resClasses, resBranches, resYears, resSections] = await Promise.all([
          api.get('/students/classes'),
          api.get('/students/branches'),
          api.get('/students/academic-years'),
          api.get('/students/sections')
        ]);

        if (resClasses.data.success) {
          const classList = resClasses.data.data.classes || [];
          setClasses(classList);
          if (classList.length > 0) {
            setSelectedClass(classList[0]._id);
          }
        }

        if (resBranches.data.success) {
          setBranches(resBranches.data.data.branches || []);
        }

        if (resYears.data.success) {
          const yearsList = resYears.data.data.academicYears || [];
          setAcademicYears(yearsList);
          const currentYr = yearsList.find(y => y.isCurrent);
          if (currentYr) setSelectedAcademicYear(currentYr._id);
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

  // Combined Section Options: standard options + any distinct sections from database
  const availableSectionOptions = useMemo(() => {
    const options = [
      { value: 'all', label: 'সকল সেকশন (All Sections)' }
    ];

    // Standard pre-defined options
    SECTION_OPTIONS.forEach(sec => {
      options.push({ value: sec, label: `সেকশন ${sec}` });
    });

    // Add unique custom sections from DB if not already present
    dbSections.forEach(s => {
      const sName = (s.name || '').trim();
      if (sName && !SECTION_OPTIONS.includes(sName) && !options.some(o => o.value === s._id || o.label === sName)) {
        options.push({ value: s._id, label: sName });
      }
    });

    return options;
  }, [dbSections]);

  // Date Navigation Helpers
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

  // Main Load Attendance Data function
  const loadAttendanceData = async () => {
    if (!selectedClass) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে অন্তত একটি শ্রেণি নির্বাচন করুন' });
      return;
    }
    setLoading(true);
    try {
      // 1. Prepare query parameters for fetching students
      const studentParams = { 
        classLevel: selectedClass, 
        limit: 300 
      };
      if (selectedBranch) studentParams.branch = selectedBranch;
      if (selectedAcademicYear) studentParams.academicYear = selectedAcademicYear;
      if (selectedSection && selectedSection !== 'all') {
        studentParams.section = selectedSection;
      }

      // 2. Fetch students in selected class/branch/section
      const studentsRes = await api.get('/students', { params: studentParams });
      const studentsData = studentsRes.data.data || [];

      // Sort students by section name then roll number
      studentsData.sort((a, b) => {
        const secA = a.currentEnrollment?.section?.name || (typeof a.currentEnrollment?.section === 'string' ? a.currentEnrollment?.section : '') || '';
        const secB = b.currentEnrollment?.section?.name || (typeof b.currentEnrollment?.section === 'string' ? b.currentEnrollment?.section : '') || '';
        if (secA !== secB) return secA.localeCompare(secB, 'bn');
        const rollA = parseInt(a.currentEnrollment?.rollNumber, 10) || 0;
        const rollB = parseInt(b.currentEnrollment?.rollNumber, 10) || 0;
        return rollA - rollB;
      });

      setStudents(studentsData);

      // 3. Fetch existing attendance records for the date and class
      const attendanceParams = { 
        date, 
        classLevel: selectedClass 
      };
      if (selectedSection && selectedSection !== 'all') {
        attendanceParams.section = selectedSection;
      }

      const attendanceRes = await api.get('/attendance', { params: attendanceParams });
      const records = attendanceRes.data.data?.records || [];

      // 4. Map records to attendance state
      const initialAttendance = {};

      // Default all fetched students to not_assigned
      studentsData.forEach(student => {
        initialAttendance[student._id] = { status: 'not_assigned', remarks: '' };
      });

      // Override with database records if they exist
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
      if (studentsData.length === 0) {
        setToast({ type: 'error', message: 'নির্বাচিত ফিল্টারে কোনো শিক্ষার্থী পাওয়া যায়নি' });
      } else {
        setToast({ type: 'success', message: `${studentsData.length} জন শিক্ষার্থীর ডাটা লোড হয়েছে` });
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

  // Quick action: status change
  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        status
      }
    }));
  };

  // Quick action: remarks change
  const handleRemarksChange = (studentId, remarks) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        remarks
      }
    }));
  };

  // Bulk status update
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

  // Bulk mark only unassigned as present
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

  // Save Attendance to Backend
  const saveAttendance = async () => {
    if (students.length === 0) {
      setToast({ type: 'error', message: 'সংরক্ষণ করার জন্য কোনো ছাত্র তালিকা নেই' });
      return;
    }
    setSubmitting(true);
    try {
      const studentsPayload = Object.keys(attendance).map(studentId => {
        const studentObj = students.find(s => s._id === studentId);
        const sec = studentObj?.currentEnrollment?.section?.name || 
                    (typeof studentObj?.currentEnrollment?.section === 'string' ? studentObj?.currentEnrollment?.section : '') || 
                    (selectedSection !== 'all' ? selectedSection : '');

        return {
          studentId,
          section: sec,
          status: attendance[studentId]?.status || 'not_assigned',
          remarks: attendance[studentId]?.remarks || ''
        };
      });

      const payload = {
        date,
        classLevel: selectedClass,
        section: selectedSection !== 'all' ? selectedSection : '',
        students: studentsPayload
      };

      const res = await api.post('/attendance', payload);
      if (res.data.success) {
        setToast({ type: 'success', message: `${studentsPayload.length} জন শিক্ষার্থীর উপস্থিতি সফলভাবে সংরক্ষণ হয়েছে!` });
      }
    } catch (err) {
      console.error('Failed to save attendance', err);
      const errMsg = err.response?.data?.message || 'উপস্থিতি সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  // Print Sheet
  const handlePrint = () => {
    window.print();
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
        const matchesSearch = fullName.includes(term) || studentId.includes(term) || adm.includes(term) || roll.includes(term);
        if (!matchesSearch) return false;
      }

      // 2. Status tab filter
      if (statusFilter !== 'all') {
        const currStatus = attendance[student._id]?.status || 'not_assigned';
        if (currStatus !== statusFilter) return false;
      }

      return true;
    });
  }, [students, searchTerm, statusFilter, attendance]);

  // Real-time Attendance Statistics Summary
  const stats = useMemo(() => {
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
              ? 'মাদ্রাসার শিক্ষার্থীদের দৈনিক উপস্থিতি গ্রহণ, সংশোধন ও অ্যাডভান্সড ফিল্টারিং' 
              : 'আপনার শিক্ষার্থীর উপস্থিতি বিবরণী'}
          </p>
        </div>
        {canMarkAttendance && students.length > 0 && (
          <div className="flex gap-8">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={handlePrint}
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
              <Save size={16} /> {submitting ? 'সংরক্ষণ হচ্ছে...' : 'উপস্থিতি সংরক্ষণ করুন'}
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
              <div className="flex-between mb-16" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                <span className="font-semibold text-sm flex gap-6" style={{ alignItems: 'center', color: 'var(--primary)' }}>
                  <Filter size={16} /> ফিল্টারিং বিবরণী (Attendance Filters)
                </span>
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
              </div>

              <div className="grid grid-4" style={{ gap: '16px', alignItems: 'flex-end' }}>
                {/* 1. তারিখ নির্বাচন */}
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

                {/* 2. শাখা ফিল্টার */}
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

                {/* 3. শ্রেণি নির্বাচন */}
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.85rem' }}>শ্রেণি (Class) *</label>
                  <select 
                    className="form-input form-select" 
                    value={selectedClass} 
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{ height: '38px', fontSize: '0.88rem', fontWeight: 600 }}
                  >
                    <option value="">-- শ্রেণি নির্বাচন করুন --</option>
                    {classes.map(c => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                {/* 4. সেকশন ফিল্টার */}
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

              {/* অ্যাকশন ও লোড রো */}
              <div className="flex-between mt-16" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div className="flex gap-8" style={{ alignItems: 'center' }}>
                  {academicYears.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="text-xs text-muted">শিক্ষাবর্ষ:</span>
                      <select 
                        className="form-input form-select"
                        value={selectedAcademicYear}
                        onChange={(e) => setSelectedAcademicYear(e.target.value)}
                        style={{ height: '32px', padding: '2px 24px 2px 8px', fontSize: '0.8rem', width: 'auto' }}
                      >
                        <option value="">সকল শিক্ষাবর্ষ</option>
                        {academicYears.map(y => (
                          <option key={y._id} value={y._id}>{y.name} {y.isCurrent ? '(চলতি)' : ''}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={loadAttendanceData}
                  disabled={loading || !selectedClass}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '140px', justifyContent: 'center' }}
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
        /* এম্পটি স্টেট যখন এখনও কোনো ছাত্র লোড হয়নি বা পাওয়া যায়নি */
        <div className="card empty-state">
          <div style={{ 
            width: '64px', height: '64px', borderRadius: '50%', 
            background: 'rgba(16, 185, 129, 0.1)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', margin: '0 auto' 
          }}>
            <ClipboardCheck size={32} className="text-primary" />
          </div>
          <div className="empty-state-title mt-16" style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            উপস্থিতি গ্রহণের জন্য শ্রেণি নির্বাচন করে "শিক্ষার্থী লোড করুন" বাটনে চাপুন
          </div>
          <p className="text-muted text-sm mt-8" style={{ maxWidth: '460px', margin: '8px auto 0' }}>
            নির্দিষ্ট শ্রেণি এবং সেকশনের (অথবা সকল সেকশন) শিক্ষার্থীদের তালিকা ও পূর্ববর্তী উপস্থিতির তথ্য এক ক্লিকেই লোড হবে।
          </p>
        </div>
      ) : (
        /* উপস্থিতি মূল শীট */
        <div className="animate-slide-up">
          {/* ১. রিয়েলটাইম পরিসংখ্যান কার্ডস */}
          <div className="grid grid-5 mb-16 no-print" style={{ gap: '12px' }}>
            <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-muted">মোট শিক্ষার্থী</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter' }}>{stats.total}</div>
              </div>
            </div>

            <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <UserCheck size={20} />
              </div>
              <div>
                <div className="text-xs text-muted">উপস্থিত ({stats.presentRate}%)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--success)' }}>{stats.present}</div>
              </div>
            </div>

            <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                <UserX size={20} />
              </div>
              <div>
                <div className="text-xs text-muted">অনুপস্থিত ({stats.absentRate}%)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--danger)' }}>{stats.absent}</div>
              </div>
            </div>

            <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs text-muted">বিলম্ব / ছুটি</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter', color: 'var(--warning)' }}>{stats.late + stats.leave}</div>
              </div>
            </div>

            <div className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(100, 116, 139, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                <RotateCcw size={20} />
              </div>
              <div>
                <div className="text-xs text-muted">অনির্ধারিত (Pending)</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter' }}>{stats.notAssigned}</div>
              </div>
            </div>
          </div>

          {/* ২. ইন-শীট কন্ট্রোল ও কুইক বাল্ক একশন */}
          <div className="card mb-16 no-print" style={{ padding: '14px 20px', borderRadius: '14px' }}>
            <div className="flex-between" style={{ flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              {/* রিয়েলটাইম সার্চ বার */}
              <div style={{ position: 'relative', flex: 1, minWidth: '220px', maxWidth: '380px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="নাম, রোল বা আইডি দিয়ে তাৎক্ষণিক খুঁজুন..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: '38px', height: '36px', fontSize: '0.85rem', marginBottom: 0 }}
                />
              </div>

              {/* বাল্ক অ্যাকশন বাটনসমূহ */}
              <div className="flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm text-success" 
                  onClick={() => markAllStatus('present')}
                  style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                  title="সকল শিক্ষার্থীকে এক ক্লিকে উপস্থিত করুন"
                >
                  ✓ সবাই উপস্থিত
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm text-danger" 
                  onClick={() => markAllStatus('absent')}
                  style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                  title="সকল শিক্ষার্থীকে এক ক্লিকে অনুপস্থিত করুন"
                >
                  ✕ সবাই অনুপস্থিত
                </button>
                {stats.notAssigned > 0 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm text-primary" 
                    onClick={markUnassignedAsPresent}
                    style={{ fontSize: '0.82rem', padding: '6px 12px', fontWeight: 600 }}
                    title="যারা এখনও অনির্ধারিত শুধু তাদের উপস্থিত করুন"
                  >
                    <Sparkles size={14} className="mr-4" /> বাকিদের উপস্থিত
                  </button>
                )}
                <button 
                  type="button" 
                  className="btn btn-ghost btn-sm text-muted" 
                  onClick={() => markAllStatus('not_assigned')}
                  style={{ fontSize: '0.82rem', padding: '6px 10px' }}
                  title="সব উপস্থিতি রিসেট করুন"
                >
                  রিসেট
                </button>
              </div>
            </div>

            {/* ফিল্টার ট্যাব (Status Filter Tabs) */}
            <div className="flex gap-6 mt-12" style={{ overflowX: 'auto', paddingBottom: '2px' }}>
              {[
                { id: 'all', label: `সকল (${stats.total})` },
                { id: 'present', label: `উপস্থিত (${stats.present})`, color: 'text-success' },
                { id: 'absent', label: `অনুপস্থিত (${stats.absent})`, color: 'text-danger' },
                { id: 'late', label: `বিলম্ব (${stats.late})`, color: 'text-warning' },
                { id: 'on_leave', label: `ছুটি (${stats.leave})`, color: 'text-info' },
                { id: 'not_assigned', label: `অনির্ধারিত (${stats.notAssigned})` },
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
          </div>

          {/* প্রিন্ট টাইটেল (শুধু প্রিন্ট ভিউতে প্রদর্শিত হবে) */}
          <div className="print-only" style={{ display: 'none', marginBottom: '20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>মাদ্রাসা শিক্ষার্থী উপস্থিতি খাতা</h2>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>
              তারিখ: {new Date(date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
            </p>
          </div>

          {/* ৩. উপস্থিতির মূল টেবিল */}
          <div className="card table-container" style={{ padding: 0, borderRadius: '16px', overflow: 'hidden' }}>
            {filteredStudents.length === 0 ? (
              <div className="empty-state" style={{ padding: '40px 20px' }}>
                <Search size={32} style={{ opacity: 0.3, margin: '0 auto' }} />
                <div className="empty-state-title mt-8" style={{ fontSize: '1rem' }}>কোনো শিক্ষার্থী পাওয়া যায়নি</div>
                <p className="text-muted text-xs mt-4">সার্চ কিওয়ার্ড অথবা স্ট্যাটাস ফিল্টার পরিবর্তন করে দেখুন।</p>
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th style={{ width: '70px', textAlign: 'center' }}>রোল</th>
                      <th style={{ minWidth: '220px' }}>শিক্ষার্থীর নাম ও আইডি</th>
                      <th style={{ width: '100px', textAlign: 'center' }}>সেকশন</th>
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

            {/* নিচের সেভ বাটন বার */}
            {canMarkAttendance && (
              <div 
                className="no-print"
                style={{ 
                  padding: '16px 24px', borderTop: '1px solid var(--border-color)', 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  background: 'var(--bg-secondary)', flexWrap: 'wrap', gap: '12px' 
                }}
              >
                <div className="text-xs text-muted">
                  সর্বমোট {students.length} জনের মধ্যে {stats.present} জন উপস্থিত, {stats.absent} জন অনুপস্থিত
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
            )}
          </div>
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
            font-size: 11pt !important;
          }
        }
      `}</style>
    </div>
  );
}
