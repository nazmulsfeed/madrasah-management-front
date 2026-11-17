import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Printer, 
  RotateCw, 
  CheckSquare, 
  Square, 
  LayoutGrid, 
  Sliders, 
  Search, 
  Check, 
  FileText, 
  Eye, 
  Users, 
  Calendar, 
  Building2, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Settings2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  GraduationCap,
  Clock
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, toBnNumber, parseBnToEnNumber, getNumericRoll, formatDateDDMMYYYY } from '../../utils/helpers';

/**
 * Islamic Boy with Topi SVG Avatar Fallback
 */
const boyAvatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>`;

/**
 * Safe String Extraction Helper: Guarantees that no object is ever rendered as a React child
 */
const getSafeStr = (val, fallback = '—') => {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'object') {
    return val.name || val.title || val.banglaName || val.code || val._id || fallback;
  }
  const str = String(val).trim();
  return str || fallback;
};

export default function AdmitCardGenerator({ exams = [], classes = [] }) {
  const { user } = useAuthStore();
  const madrasah = useMemo(() => getMadrasahInfo(user), [user]);

  // Safe Props
  const safeClasses = useMemo(() => {
    if (Array.isArray(classes)) return classes;
    if (classes && Array.isArray(classes.classes)) return classes.classes;
    return [];
  }, [classes]);

  const safeExams = useMemo(() => {
    if (Array.isArray(exams)) return exams;
    if (exams && Array.isArray(exams.exams)) return exams.exams;
    return [];
  }, [exams]);

  // Primary Filters
  const [selectedExamId, setSelectedExamId] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [sections, setSections] = useState([]);
  
  // Data States
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState(new Set());
  const [studentRooms, setStudentRooms] = useState({});
  const [commonRoomNo, setCommonRoomNo] = useState('১০২');
  const [issueDate, setIssueDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  // Active View Tab: 'preview' (Live Cards on A4) | 'students' (Data Table) | 'settings' (Field Controls)
  const [activeTab, setActiveTab] = useState('preview');

  // Preview Zoom & Language & Layout
  const [previewZoom, setPreviewZoom] = useState(100);
  const [langMode, setLangMode] = useState('en'); // 'en' | 'bn' | 'bi'
  const [cardsPerPage, setCardsPerPage] = useState(2); // 1, 2, 4, 6
  const [customCardsInput, setCustomCardsInput] = useState('2');

  // Field Visibility Toggles
  const [fieldToggles, setFieldToggles] = useState({
    room: true,
    exam: true,
    group: true,
    section: true,
    version: true,
    shift: true,
    session: true,
    studentId: true,
    photo: true,
    teacherSig: true,
    principalSig: true,
    issueDate: true,
    watermark: true
  });

  // Default Exam selection
  useEffect(() => {
    if (safeExams.length > 0 && !selectedExamId) {
      setSelectedExamId(safeExams[0]._id || safeExams[0].id || '');
    }
  }, [safeExams, selectedExamId]);

  // Fetch sections when class changes
  useEffect(() => {
    if (!selectedClassId) {
      setSections([]);
      setSelectedSection('all');
      return;
    }
    const fetchSections = async () => {
      try {
        const res = await api.get(`/students/sections?classLevel=${selectedClassId}`);
        const raw = res.data?.data?.sections || res.data?.sections || res.data?.data || [];
        const data = Array.isArray(raw) ? raw : [];
        setSections(data);
        setSelectedSection('all');
      } catch (err) {
        setSections([]);
      }
    };
    fetchSections();
  }, [selectedClassId]);

  // Fetch students from backend with bulletproof fallback
  const fetchStudents = async () => {
    if (!selectedClassId) {
      setStudents([]);
      setSelectedStudentIds(new Set());
      return;
    }
    setLoadingStudents(true);
    try {
      const params = {
        classLevel: selectedClassId,
        limit: 500,
        status: 'active'
      };
      if (selectedSection && selectedSection !== 'all') {
        params.section = selectedSection;
      }

      const res = await api.get('/students', { params });
      const raw = res.data?.data?.students || res.data?.students || res.data?.data || [];
      let list = Array.isArray(raw) ? raw : (raw.students || []);

      // Filter by department if chosen
      if (selectedDepartment && selectedDepartment !== 'all') {
        list = list.filter(st => {
          const dept = st.department || st.currentEnrollment?.department || '';
          return dept.toLowerCase().includes(selectedDepartment.toLowerCase());
        });
      }

      // Sort by roll ascending
      list.sort((a, b) => {
        const rollA = getNumericRoll(a.currentEnrollment?.rollNumber || a.rollNumber || a.roll);
        const rollB = getNumericRoll(b.currentEnrollment?.rollNumber || b.rollNumber || b.roll);
        return rollA - rollB;
      });

      setStudents(list);
      
      // Auto-select all students
      const allIds = new Set(list.map(s => s._id || s.id));
      setSelectedStudentIds(allIds);

      // Auto-populate rooms
      const initialRooms = {};
      list.forEach(s => {
        const sid = s._id || s.id;
        initialRooms[sid] = commonRoomNo;
      });
      setStudentRooms(initialRooms);
    } catch (err) {
      console.error('Failed to load students for admit card:', err);
      setStudents([]);
      setSelectedStudentIds(new Set());
    } finally {
      setLoadingStudents(false);
    }
  };

  useEffect(() => {
    if (selectedClassId) {
      fetchStudents();
    }
  }, [selectedClassId, selectedSection, selectedDepartment]);

  // Apply common room to all selected students
  const applyCommonRoomToAll = () => {
    const val = commonRoomNo.trim();
    if (!val) return;
    setStudentRooms(prev => {
      const next = { ...prev };
      selectedStudentIds.forEach(id => {
        next[id] = val;
      });
      return next;
    });
  };

  // Toggle selection
  const handleToggleSelectAll = () => {
    if (selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0) {
      setSelectedStudentIds(new Set());
    } else {
      setSelectedStudentIds(new Set(filteredStudents.map(s => s._id || s.id)));
    }
  };

  const handleToggleStudent = (id) => {
    const updated = new Set(selectedStudentIds);
    if (updated.has(id)) updated.delete(id);
    else updated.add(id);
    setSelectedStudentIds(updated);
  };

  // Filter students based on search query
  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) return students;
    const q = searchQuery.toLowerCase();
    return students.filter(s => {
      const name = getSafeStr(s.user?.name || s.name, '').toLowerCase();
      const roll = getSafeStr(s.currentEnrollment?.rollNumber || s.rollNumber || s.roll, '').toLowerCase();
      const sid = getSafeStr(s.studentId || s.admissionNumber, '').toLowerCase();
      return name.includes(q) || roll.includes(q) || sid.includes(q);
    });
  }, [students, searchQuery]);

  // Selected student objects
  const selectedStudentsList = useMemo(() => {
    return students.filter(s => selectedStudentIds.has(s._id || s.id));
  }, [students, selectedStudentIds]);

  // Active exam object
  const currentExam = useMemo(() => {
    return safeExams.find(e => (e._id || e.id) === selectedExamId) || null;
  }, [safeExams, selectedExamId]);

  // Active class object
  const currentClass = useMemo(() => {
    return safeClasses.find(c => (c._id || c.id) === selectedClassId) || null;
  }, [safeClasses, selectedClassId]);

  // Handle Cards per Page selection
  const handleCardsPreset = (num) => {
    setCardsPerPage(num);
    setCustomCardsInput(String(num));
  };

  const handleCustomCardsChange = (val) => {
    setCustomCardsInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 8) {
      setCardsPerPage(parsed);
    }
  };

  // Chunk students into A4 pages
  const studentPages = useMemo(() => {
    const pages = [];
    const count = parseInt(cardsPerPage, 10) || 2;
    for (let i = 0; i < selectedStudentsList.length; i += count) {
      pages.push(selectedStudentsList.slice(i, i + count));
    }
    return pages;
  }, [selectedStudentsList, cardsPerPage]);

  // Toggle single field visibility
  const toggleField = (key) => {
    setFieldToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Execute Direct Print
  const handlePrint = () => {
    if (selectedStudentsList.length === 0) {
      alert('অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।');
      return;
    }
    window.print();
  };

  return (
    <div className="admit-generator-wrapper animate-fade-in">
      
      {/* ==============================================================
          1. HEADER CARD WITH EMERALD GRADIENT & QUICK CONTROLS
          ============================================================== */}
      <div className="admit-hdr-card no-print">
        <div className="admit-hdr-main">
          
          <div className="admit-hdr-title-group">
            <div className="admit-hdr-icon-box">
              <FileText size={26} color="#ffffff" />
            </div>
            <div>
              <div className="admit-hdr-heading-row">
                <h1 className="admit-hdr-title">
                  প্রবেশপত্র জেনারেটর (Admit Card Generator)
                </h1>
                <span className="admit-hdr-badge">Batch Pro</span>
              </div>
              <p className="admit-hdr-subtitle">
                <span>{getSafeStr(madrasah.madrasahName, 'আন্-নূর ইসলামিক একাডেমি')}</span>
                <span className="dot-sep">•</span>
                <span>স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং</span>
              </p>
            </div>
          </div>

          {/* Quick Actions (Language, Refresh, Print) */}
          <div className="admit-hdr-actions">
            
            {/* Language Switcher */}
            <div className="admit-lang-group">
              <button
                type="button"
                onClick={() => setLangMode('en')}
                className={`admit-lang-btn ${langMode === 'en' ? 'active' : ''}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLangMode('bn')}
                className={`admit-lang-btn ${langMode === 'bn' ? 'active' : ''}`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLangMode('bi')}
                className={`admit-lang-btn ${langMode === 'bi' ? 'active' : ''}`}
              >
                দ্বিভাষিক
              </button>
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={fetchStudents}
              disabled={loadingStudents || !selectedClassId}
              className="admit-btn-ghost"
              title="শিক্ষার্থী তালিকা রিফ্রেশ করুন"
            >
              <RotateCw size={15} className={loadingStudents ? 'animate-spin' : ''} />
              <span>রিফ্রেশ</span>
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              disabled={selectedStudentsList.length === 0}
              className="admit-btn-print"
            >
              <Printer size={16} />
              <span>প্রিন্ট করুন ({selectedStudentsList.length} জন)</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Chips */}
        <div className="admit-hdr-chips-row">
          <div className="admit-chip">
            <Users size={14} className="text-sky-300" />
            <span>মোট শিক্ষার্থী: <b>{filteredStudents.length}</b></span>
          </div>

          <div className="admit-chip highlight-emerald">
            <CheckCircle2 size={14} className="text-emerald-300" />
            <span>নির্বাচিত: <b>{selectedStudentsList.length}</b> জন</span>
          </div>

          <div className="admit-chip highlight-indigo">
            <LayoutGrid size={14} className="text-indigo-300" />
            <span>গ্রিড লেআউট: <b>{cardsPerPage}টি/পেজ</b></span>
          </div>

          <div className="admit-chip highlight-amber">
            <FileText size={14} className="text-amber-300" />
            <span>প্রিন্ট শিট: <b>{studentPages.length}টি A4 পেজ</b></span>
          </div>
        </div>
      </div>

      {/* ==============================================================
          2. FILTERS & SMART CONFIGURATION PANEL (4-COLUMNS GRID)
          ============================================================== */}
      <div className="admit-ctrl-card no-print">
        
        {/* Dropdowns Row */}
        <div className="admit-filters-grid">
          
          <div className="admit-form-col">
            <label className="admit-label">
              <Calendar size={14} className="admit-label-icon text-sky-600" />
              <span>পরীক্ষা নির্বাচন করুন *</span>
            </label>
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="admit-select"
            >
              {safeExams.map(e => {
                const eid = e._id || e.id || '';
                const ename = getSafeStr(e.name || e.title, 'Exam');
                return (
                  <option key={eid} value={eid}>
                    {ename}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="admit-form-col">
            <label className="admit-label">
              <Building2 size={14} className="admit-label-icon text-emerald-600" />
              <span>শ্রেণি / জামাত *</span>
            </label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="admit-select"
            >
              <option value="">-- শ্রেণি নির্বাচন করুন --</option>
              {safeClasses.map(c => {
                const cid = c._id || c.id || '';
                const cname = getSafeStr(c.name || c.banglaName || c.code, 'Class');
                return (
                  <option key={cid} value={cid}>
                    {cname}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="admit-form-col">
            <label className="admit-label">
              <LayoutGrid size={14} className="admit-label-icon text-indigo-600" />
              <span>শাখা (Section)</span>
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="admit-select"
            >
              <option value="all">সকল শাখা (All Sections)</option>
              {sections.map((s, idx) => {
                const val = getSafeStr(s, '');
                return (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="admit-form-col">
            <label className="admit-label">
              <Sparkles size={14} className="admit-label-icon text-amber-600" />
              <span>বিভাগ / গ্রুপ (Department)</span>
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="admit-select"
            >
              <option value="all">সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)</option>
              <option value="নাজেরা">নাজেরা বিভাগ</option>
              <option value="হিফজ">হিফজুল কুরআন</option>
              <option value="কিতাব">কিতাব বিভাগ</option>
              <option value="নূরানী">নূরানী বিভাগ</option>
              <option value="সাধারণ">সাধারণ / স্কুল</option>
            </select>
          </div>

        </div>

        {/* Secondary Controls: Layout, Room, Issue Date */}
        <div className="admit-secondary-controls">
          
          {/* Card Layout Selector Buttons */}
          <div className="admit-sec-group">
            <span className="admit-sec-label">
              <LayoutGrid size={14} className="text-emerald-600" />
              <span>প্রতি A4 পেজে:</span>
            </span>
            <div className="admit-pill-buttons">
              {[
                { count: 1, label: '১টি' },
                { count: 2, label: '২টি' },
                { count: 4, label: '৪টি (2x2)' },
                { count: 6, label: '৬টি (2x3)' }
              ].map(item => (
                <button
                  key={item.count}
                  type="button"
                  onClick={() => handleCardsPreset(item.count)}
                  className={`admit-pill-btn ${cardsPerPage === item.count ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Custom Cards Input */}
            <div className="admit-custom-cards-box">
              <input
                type="number"
                min="1"
                max="8"
                value={customCardsInput}
                onChange={(e) => handleCustomCardsChange(e.target.value)}
                className="admit-custom-input"
                placeholder="কাস্টম"
              />
              <span className="admit-custom-unit">টি/পেজ</span>
            </div>
          </div>

          {/* Common Room No Bar */}
          <div className="admit-sec-group">
            <span className="admit-sec-label">
              <Building2 size={14} className="text-emerald-600" />
              <span>কক্ষ নম্বর (Room No):</span>
            </span>
            <input
              type="text"
              value={commonRoomNo}
              onChange={(e) => setCommonRoomNo(e.target.value)}
              placeholder="যেমন: ১০২"
              className="admit-room-input"
            />
            <button
              type="button"
              onClick={applyCommonRoomToAll}
              className="admit-btn-room-apply"
              title="নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান"
            >
              সবাইকে দিন
            </button>
          </div>

          {/* Issue Date */}
          <div className="admit-sec-group">
            <span className="admit-sec-label">
              <Calendar size={14} className="text-emerald-600" />
              <span>ইস্যু তারিখ:</span>
            </span>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="admit-date-input"
            />
          </div>

        </div>

      </div>

      {/* ==============================================================
          3. MAIN WORKSPACE TABS (PREVIEW vs TABLE vs SETTINGS)
          ============================================================== */}
      <div className="admit-tabs-bar no-print">
        
        <div className="admit-tabs-left">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`admit-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
          >
            <Eye size={15} />
            <span>লাইভ কার্ড প্রিভিউ (Live Preview)</span>
            <span className="admit-tab-badge">{studentPages.length} পেজ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('students')}
            className={`admit-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
          >
            <Users size={15} />
            <span>শিক্ষার্থী তালিকা</span>
            <span className="admit-tab-badge">{selectedStudentsList.length}/{filteredStudents.length}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`admit-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          >
            <Settings2 size={15} />
            <span>কার্ড উপাদান কনফিগারেশন</span>
          </button>
        </div>

        {/* Live Preview Zoom Controls */}
        {activeTab === 'preview' && (
          <div className="admit-zoom-controls">
            <span className="admit-zoom-label">জুম:</span>
            <button
              type="button"
              onClick={() => setPreviewZoom(Math.max(50, previewZoom - 15))}
              className="admit-zoom-btn"
              title="জুম আউট"
            >
              <ZoomOut size={14} />
            </button>
            <span className="admit-zoom-value">{previewZoom}%</span>
            <button
              type="button"
              onClick={() => setPreviewZoom(Math.min(130, previewZoom + 15))}
              className="admit-zoom-btn"
              title="জুম ইন"
            >
              <ZoomIn size={14} />
            </button>
            <button
              type="button"
              onClick={() => setPreviewZoom(100)}
              className="admit-zoom-reset"
            >
              রিসেট
            </button>
          </div>
        )}

      </div>

      {/* ==============================================================
          TAB 1: LIVE A4 ADMIT CARD PREVIEW (ON-SCREEN REALISTIC A4)
          ============================================================== */}
      {activeTab === 'preview' && (
        <div className="admit-preview-area no-print">
          
          {loadingStudents ? (
            <div className="admit-state-box">
              <RotateCw size={32} className="animate-spin text-emerald-600 mb-2" />
              <p className="font-semibold text-sm text-slate-700">শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে...</p>
            </div>
          ) : !selectedClassId ? (
            <div className="admit-state-box border-dashed">
              <FileText size={40} className="text-slate-400 mb-2" />
              <h3 className="text-base font-bold text-slate-700">কোনো শ্রেণি নির্বাচন করা হয়নি</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র লাইভ তৈরি হয়ে প্রদর্শিত হবে।
              </p>
            </div>
          ) : selectedStudentsList.length === 0 ? (
            <div className="admit-state-box">
              <p className="text-sm font-semibold text-slate-600">
                কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।
              </p>
            </div>
          ) : (
            <div className="admit-preview-viewport">
              <div 
                className="admit-preview-scaler"
                style={{ transform: `scale(${previewZoom / 100})`, transformOrigin: 'top center' }}
              >
                {studentPages.map((pageStudents, pageIdx) => (
                  <div key={pageIdx} className="admit-page-wrapper">
                    
                    {/* Page Header Indicator */}
                    <div className="admit-page-tag">
                      <span className="admit-page-tag-pill">
                        পেজ {pageIdx + 1} / {studentPages.length}
                      </span>
                      <span>(এই পেজে {pageStudents.length}টি কার্ড)</span>
                    </div>

                    {/* A4 Sheet Container */}
                    <div className={`a4-page-sheet a4-sheet-layout-${cardsPerPage}`}>
                      {pageStudents.map((student) => {
                        const sid = student._id || student.id;
                        const sName = getSafeStr(student.user?.name || student.name, 'MD. STUDENT');
                        const sRoll = getSafeStr(student.currentEnrollment?.rollNumber || student.rollNumber || student.roll, '—');
                        const sId = getSafeStr(student.studentId || student.admissionNumber, '—');
                        const sSection = getSafeStr(student.currentEnrollment?.section || student.section || (selectedSection !== 'all' ? selectedSection : '—'), '—');
                        const sGroup = getSafeStr(student.department || student.currentEnrollment?.department || student.stream, 'All');
                        const sRoom = getSafeStr(studentRooms[sid] || commonRoomNo, '১০২');
                        const sPhoto = student.photo || boyAvatarSvg;
                        const examTitle = getSafeStr(currentExam?.name || currentExam?.title, 'Annual Examination 2026');
                        const className = getSafeStr(currentClass?.name || currentClass?.banglaName || currentClass?.code, '');

                        return (
                          <div key={sid} className="admit-card">
                            <div className="admit-card-inner-frame">
                              
                              {/* Watermark Logo */}
                              {fieldToggles.watermark && (
                                <img src="/images/madrasah_logo.png" onError={(e)=>{e.target.src='./images/madrasah_logo.png';}} className="card-watermark" alt="Watermark" />
                              )}
                              
                              <div className="card-content">
                                
                                {/* 1. Header with Logo & Institution Name */}
                                <div className="card-header">
                                  <img src="/images/madrasah_logo.png" onError={(e)=>{e.target.src='./images/madrasah_logo.png';}} className="card-logo" alt="Logo" />
                                  <div className="card-titles">
                                    <div className="inst-name">
                                      {langMode === 'bn' ? getSafeStr(madrasah.madrasahName, 'আন্-নূর ইসলামিক একাডেমি') : 'AN-NUR ISLAMIC ACADEMY'}
                                    </div>
                                    <div className="inst-sub">
                                      {langMode === 'bn' ? getSafeStr(madrasah.address, 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর') : 'Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj'}
                                    </div>
                                  </div>
                                </div>

                                {/* 2. Admit Card Pill & Date Row */}
                                <div className="badge-date-row">
                                  <div className="admit-pill">
                                    {langMode === 'bn' ? 'প্রবেশপত্র (Admit Card)' : 'Admit Card'}
                                  </div>
                                  {fieldToggles.issueDate && (
                                    <div className="issue-date-label">
                                      <span>{langMode === 'bn' ? 'ইস্যুর তারিখ:' : 'Issue Date:'}</span> <span>{formatDateDDMMYYYY(issueDate)}</span>
                                    </div>
                                  )}
                                </div>

                                {/* 3. Student Details + Photo Box */}
                                <div className="student-details-wrapper">
                                  <div className="info-columns-container">
                                    <div className="detail-row">
                                      <span className="detail-label">{langMode === 'bn' ? 'নাম' : 'Name'}</span>
                                      <span className="detail-colon">:</span>
                                      <span className="detail-val uppercase">{sName}</span>
                                    </div>

                                    {fieldToggles.group && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'গ্রুপ/বিভাগ' : 'Group'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">{sGroup}</span>
                                      </div>
                                    )}

                                    {fieldToggles.studentId && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'ছাত্র আইডি' : 'Student ID'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">{sId}</span>
                                      </div>
                                    )}

                                    {fieldToggles.room && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'কক্ষ নম্বর' : 'Room No'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val room-badge">{sRoom}</span>
                                      </div>
                                    )}

                                    <div className="detail-row">
                                      <span className="detail-label">{langMode === 'bn' ? 'রোল নং' : 'Roll'}</span>
                                      <span className="detail-colon">:</span>
                                      <span className="detail-val">{sRoll}</span>
                                    </div>

                                    {fieldToggles.shift && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'শিফট' : 'Shift'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">Morning</span>
                                      </div>
                                    )}

                                    {fieldToggles.version && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'ভার্সন' : 'Version'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">Bangla</span>
                                      </div>
                                    )}

                                    {fieldToggles.session && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'সেশন' : 'Session'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">{new Date().getFullYear()}</span>
                                      </div>
                                    )}

                                    <div className="detail-row">
                                      <span className="detail-label">{langMode === 'bn' ? 'শ্রেণি' : 'Class'}</span>
                                      <span className="detail-colon">:</span>
                                      <span className="detail-val">{className}</span>
                                    </div>

                                    {fieldToggles.section && (
                                      <div className="detail-row">
                                        <span className="detail-label">{langMode === 'bn' ? 'শাখা' : 'Section'}</span>
                                        <span className="detail-colon">:</span>
                                        <span className="detail-val">{sSection}</span>
                                      </div>
                                    )}
                                  </div>

                                  {fieldToggles.photo && (
                                    <div className="student-photo-box">
                                      <img src={sPhoto} alt="Photo" />
                                    </div>
                                  )}
                                </div>

                                {/* 4. Permission Statement */}
                                {fieldToggles.exam && (
                                  <div className="permission-statement">
                                    <span>{langMode === 'bn' ? 'কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:' : 'has been permitted to sit for the'}</span>
                                    <span className="exam-name">{examTitle}</span>
                                  </div>
                                )}

                                {/* 5. Signatures (Ample Bottom Spacing - NEVER Cut Off) */}
                                <div className="signatures-row">
                                  {fieldToggles.teacherSig ? (
                                    <div className="signature-block">
                                      <svg className="signature-svg" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M28 28C45 26 80 20 110 32" stroke="#111827" strokeWidth="1.8" strokeLinecap="round"/>
                                      </svg>
                                      <div className="sig-line"></div>
                                      <div className="sig-title">{langMode === 'bn' ? 'শ্রেণি শিক্ষক' : 'Class Teacher'}</div>
                                    </div>
                                  ) : <div></div>}

                                  {fieldToggles.principalSig ? (
                                    <div className="signature-block">
                                      <svg className="signature-svg" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M60 48C85 45 125 42 150 46" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/>
                                      </svg>
                                      <div className="sig-line"></div>
                                      <div className="sig-name">MD. RAFIQUL ISLAM</div>
                                      <div className="sig-title">{langMode === 'bn' ? 'মুহতামিম / প্রতিষ্ঠান প্রধান' : 'Head Teacher (In-charge)'}</div>
                                    </div>
                                  ) : <div></div>}
                                </div>

                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ==============================================================
          TAB 2: STUDENTS SELECTION & ROOM NUMBER ASSIGNMENT TABLE
          ============================================================== */}
      {activeTab === 'students' && (
        <div className="admit-table-card no-print">
          
          <div className="admit-table-hdr-row">
            <div className="admit-table-actions-left">
              <button
                type="button"
                onClick={handleToggleSelectAll}
                className="admit-btn-select-all"
              >
                {selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0 ? (
                  <>
                    <CheckSquare size={16} className="text-emerald-700" />
                    <span>সকলের সিলেকশন বাতিল করুন</span>
                  </>
                ) : (
                  <>
                    <Square size={16} className="text-slate-500" />
                    <span>সকলকে সিলেক্ট করুন ({filteredStudents.length} জন)</span>
                  </>
                )}
              </button>

              <span className="admit-table-selected-badge">
                নির্বাচিত: <b>{selectedStudentIds.size}</b> / {filteredStudents.length} জন
              </span>
            </div>

            {/* Student Search Box */}
            <div className="admit-search-box">
              <Search size={15} className="admit-search-icon" />
              <input
                type="text"
                placeholder="রোল, নাম বা আইডি দিয়ে খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admit-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="admit-search-clear"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Table Container */}
          {filteredStudents.length === 0 ? (
            <div className="admit-state-box">
              <p className="text-xs text-slate-500">কোনো শিক্ষার্থী পাওয়া যায়নি।</p>
            </div>
          ) : (
            <div className="admit-table-scroll">
              <table className="admit-data-table">
                <thead>
                  <tr>
                    <th style={{ width: '45px', textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0}
                        onChange={handleToggleSelectAll}
                        className="cursor-pointer"
                      />
                    </th>
                    <th style={{ width: '65px', textAlign: 'center' }}>রোল</th>
                    <th style={{ width: '70px', textAlign: 'center' }}>ছবি</th>
                    <th style={{ width: '100px' }}>আইডি</th>
                    <th>শিক্ষার্থীর নাম</th>
                    <th style={{ width: '100px' }}>বিভাগ</th>
                    <th style={{ width: '90px' }}>শাখা</th>
                    <th style={{ width: '130px', textAlign: 'center' }}>কক্ষ নম্বর (Room)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s) => {
                    const sid = s._id || s.id;
                    const isChecked = selectedStudentIds.has(sid);
                    const roll = getSafeStr(s.currentEnrollment?.rollNumber || s.rollNumber || s.roll, '—');
                    const name = getSafeStr(s.user?.name || s.name, '—');
                    const stId = getSafeStr(s.studentId || s.admissionNumber, '—');
                    const section = getSafeStr(s.currentEnrollment?.section || s.section || (selectedSection !== 'all' ? selectedSection : '—'), '—');
                    const stream = getSafeStr(s.department || s.currentEnrollment?.department || s.stream, 'সাধারণ');
                    const room = getSafeStr(studentRooms[sid] || commonRoomNo, '১০২');
                    const photo = s.photo || boyAvatarSvg;

                    return (
                      <tr 
                        key={sid} 
                        className={isChecked ? 'row-selected' : ''}
                      >
                        <td style={{ textAlign: 'center' }}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleStudent(sid)}
                            className="cursor-pointer"
                          />
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                          <span className="admit-roll-pill">
                            {roll}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <div className="admit-table-avatar">
                            <img src={photo} alt="" />
                          </div>
                        </td>
                        <td style={{ fontFamily: 'monospace', color: '#64748b' }}>
                          {stId}
                        </td>
                        <td style={{ fontWeight: '600', color: '#0f172a' }}>
                          {name}
                        </td>
                        <td style={{ color: '#475569' }}>
                          {stream}
                        </td>
                        <td style={{ color: '#475569' }}>
                          {section}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <input
                            type="text"
                            value={room}
                            onChange={(e) => {
                              const val = e.target.value;
                              setStudentRooms(prev => ({ ...prev, [sid]: val }));
                            }}
                            className="admit-table-room-input"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>
      )}

      {/* ==============================================================
          TAB 3: CARD FIELDS & ELEMENTS CONFIGURATION (PILL CHIPS)
          ============================================================== */}
      {activeTab === 'settings' && (
        <div className="admit-settings-card no-print">
          
          <div className="admit-settings-hdr">
            <h3 className="admit-settings-title">
              <Sliders size={18} className="text-emerald-600" />
              <span>কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)</span>
            </h3>
            <p className="admit-settings-sub">
              যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।
            </p>
          </div>

          <div className="admit-toggles-grid">
            {[
              { key: 'room', label: 'কক্ষ নম্বর (Room No)', desc: 'পরীক্ষার হল/রুম নং প্রদর্শন' },
              { key: 'exam', label: 'পরীক্ষার নাম (Exam Name)', desc: 'অনুমতি বাক্যসহ পরীক্ষার নাম' },
              { key: 'group', label: 'বিভাগ / গ্রুপ (Group)', desc: 'হিফজ/নাজেরা/জেনারেল বিভাগ' },
              { key: 'section', label: 'শাখা (Section)', desc: 'শ্রেণির শাখা বা সেকশন' },
              { key: 'version', label: 'ভার্সন (Version)', desc: 'বাংলা / ইংলিশ ভার্সন লেবেল' },
              { key: 'shift', label: 'শিফট (Shift)', desc: 'প্রভাতী / দিবা শিফট' },
              { key: 'session', label: 'সেশন / শিক্ষাবর্ষ', desc: 'বর্তমান শিক্ষাবর্ষ ২০২৬' },
              { key: 'studentId', label: 'ছাত্র আইডি (Student ID)', desc: 'ইউনিক স্টুডেন্ট আইডি নম্বর' },
              { key: 'photo', label: 'শিক্ষার্থীর ছবি (Photo)', desc: 'পাসপোর্ট সাইজ ছবি ফ্রেম' },
              { key: 'teacherSig', label: 'শ্রেণি শিক্ষক স্বাক্ষর', desc: 'বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ' },
              { key: 'principalSig', label: 'অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর', desc: 'ডান পাশের ডিজিটাল স্বাক্ষর ও নাম' },
              { key: 'issueDate', label: 'ইস্যুর তারিখ (Issue Date)', desc: 'কার্ড ইস্যু করার তারিখ' },
              { key: 'watermark', label: 'মাদরাসা লোগো জলছাপ', desc: 'কার্ডের ব্যাকগ্রাউন্ডে জলছাপ' }
            ].map(item => {
              const active = fieldToggles[item.key];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggleField(item.key)}
                  className={`admit-toggle-card ${active ? 'active' : ''}`}
                >
                  <div className={`admit-toggle-checkbox ${active ? 'active' : ''}`}>
                    {active && <Check size={12} strokeWidth={3} />}
                  </div>
                  <div>
                    <div className="admit-toggle-label">{item.label}</div>
                    <div className="admit-toggle-desc">{item.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* ==============================================================
          PRINT-ONLY CONTAINER: Always rendered but hidden on screen.
          This is what actually prints — the preview area above has
          class "no-print" so it is hidden during print. This div
          does NOT have no-print, so it shows only when printing.
          ============================================================== */}
      <div className="admit-print-only-container">
        {selectedStudentsList.length > 0 && studentPages.map((pageStudents, pageIdx) => (
          <div key={`print-page-${pageIdx}`} className={`a4-page-sheet a4-sheet-layout-${cardsPerPage}`}>
            {pageStudents.map((student) => {
              const sid = student._id || student.id;
              const sName = getSafeStr(student.user?.name || student.name, 'MD. STUDENT');
              const sRoll = getSafeStr(student.currentEnrollment?.rollNumber || student.rollNumber || student.roll, '—');
              const sId = getSafeStr(student.studentId || student.admissionNumber, '—');
              const sSection = getSafeStr(student.currentEnrollment?.section || student.section || (selectedSection !== 'all' ? selectedSection : '—'), '—');
              const sGroup = getSafeStr(student.department || student.currentEnrollment?.department || student.stream, 'All');
              const sRoom = getSafeStr(studentRooms[sid] || commonRoomNo, '১০২');
              const sPhoto = student.photo || boyAvatarSvg;
              const examTitle = getSafeStr(currentExam?.name || currentExam?.title, 'Annual Examination 2026');
              const className = getSafeStr(currentClass?.name || currentClass?.banglaName || currentClass?.code, '');

              return (
                <div key={`print-${sid}`} className="admit-card">
                  <div className="admit-card-inner-frame">
                    {fieldToggles.watermark && (
                      <img src="/images/madrasah_logo.png" onError={(e)=>{e.target.src='./images/madrasah_logo.png';}} className="card-watermark" alt="Watermark" />
                    )}
                    <div className="card-content">
                      <div className="card-header">
                        <img src="/images/madrasah_logo.png" onError={(e)=>{e.target.src='./images/madrasah_logo.png';}} className="card-logo" alt="Logo" />
                        <div className="card-titles">
                          <div className="inst-name">
                            {langMode === 'bn' ? getSafeStr(madrasah.madrasahName, 'আন্-নূর ইসলামিক একাডেমি') : 'AN-NUR ISLAMIC ACADEMY'}
                          </div>
                          <div className="inst-sub">
                            {langMode === 'bn' ? getSafeStr(madrasah.address, 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর') : 'Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj'}
                          </div>
                        </div>
                      </div>
                      <div className="badge-date-row">
                        <div className="admit-pill">
                          {langMode === 'bn' ? 'প্রবেশপত্র (Admit Card)' : 'Admit Card'}
                        </div>
                        {fieldToggles.issueDate && (
                          <div className="issue-date-label">
                            <span>{langMode === 'bn' ? 'ইস্যুর তারিখ:' : 'Issue Date:'}</span> <span>{formatDateDDMMYYYY(issueDate)}</span>
                          </div>
                        )}
                      </div>
                      <div className="student-details-wrapper">
                        <div className="info-columns-container">
                          <div className="detail-row">
                            <span className="detail-label">{langMode === 'bn' ? 'নাম' : 'Name'}</span>
                            <span className="detail-colon">:</span>
                            <span className="detail-val uppercase">{sName}</span>
                          </div>
                          {fieldToggles.group && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'গ্রুপ/বিভাগ' : 'Group'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">{sGroup}</span>
                            </div>
                          )}
                          {fieldToggles.studentId && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'ছাত্র আইডি' : 'Student ID'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">{sId}</span>
                            </div>
                          )}
                          {fieldToggles.room && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'কক্ষ নম্বর' : 'Room No'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val room-badge">{sRoom}</span>
                            </div>
                          )}
                          <div className="detail-row">
                            <span className="detail-label">{langMode === 'bn' ? 'রোল নং' : 'Roll'}</span>
                            <span className="detail-colon">:</span>
                            <span className="detail-val">{sRoll}</span>
                          </div>
                          {fieldToggles.shift && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'শিফট' : 'Shift'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">Morning</span>
                            </div>
                          )}
                          {fieldToggles.version && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'ভার্সন' : 'Version'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">Bangla</span>
                            </div>
                          )}
                          {fieldToggles.session && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'সেশন' : 'Session'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">{new Date().getFullYear()}</span>
                            </div>
                          )}
                          <div className="detail-row">
                            <span className="detail-label">{langMode === 'bn' ? 'শ্রেণি' : 'Class'}</span>
                            <span className="detail-colon">:</span>
                            <span className="detail-val">{className}</span>
                          </div>
                          {fieldToggles.section && (
                            <div className="detail-row">
                              <span className="detail-label">{langMode === 'bn' ? 'শাখা' : 'Section'}</span>
                              <span className="detail-colon">:</span>
                              <span className="detail-val">{sSection}</span>
                            </div>
                          )}
                        </div>
                        {fieldToggles.photo && (
                          <div className="student-photo-box">
                            <img src={sPhoto} alt="Photo" />
                          </div>
                        )}
                      </div>
                      {fieldToggles.exam && (
                        <div className="permission-statement">
                          <span>{langMode === 'bn' ? 'কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:' : 'has been permitted to sit for the'}</span>
                          <span className="exam-name">{examTitle}</span>
                        </div>
                      )}
                      <div className="signatures-row">
                        {fieldToggles.teacherSig ? (
                          <div className="signature-block">
                            <svg className="signature-svg" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M28 28C45 26 80 20 110 32" stroke="#111827" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                            <div className="sig-line"></div>
                            <div className="sig-title">{langMode === 'bn' ? 'শ্রেণি শিক্ষক' : 'Class Teacher'}</div>
                          </div>
                        ) : <div></div>}
                        {fieldToggles.principalSig ? (
                          <div className="signature-block">
                            <svg className="signature-svg" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M60 48C85 45 125 42 150 46" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <div className="sig-line"></div>
                            <div className="sig-name">MD. RAFIQUL ISLAM</div>
                            <div className="sig-title">{langMode === 'bn' ? 'মুহতামিম / প্রতিষ্ঠান প্রধান' : 'Head Teacher (In-charge)'}</div>
                          </div>
                        ) : <div></div>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* ==============================================================
          4. SCOPED PURE CSS STYLES FOR SCREEN & PRINT (ZERO TAILWIND DEPENDENCY)
          ============================================================== */}
      <style>{`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: #0f172a;
          font-family: inherit;
        }

        /* --- 1. Header Card --- */
        .admit-hdr-card {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
          border-radius: 12px;
          border: 1px solid #047857;
          box-shadow: 0 4px 18px rgba(4, 120, 87, 0.2);
          color: #ffffff;
          padding: 20px 24px;
        }

        .admit-hdr-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .admit-hdr-title-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .admit-hdr-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }

        .admit-hdr-heading-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-hdr-title {
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .admit-hdr-badge {
          font-size: 11px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .admit-hdr-subtitle {
          font-size: 12px;
          color: #d1fae5;
          margin: 4px 0 0 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot-sep {
          opacity: 0.6;
        }

        .admit-hdr-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .admit-lang-group {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 3px;
        }

        .admit-lang-btn {
          background: transparent;
          border: none;
          color: #a7f3d0;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admit-lang-btn.active {
          background: #ffffff;
          color: #064e3b;
          font-weight: 700;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .admit-btn-ghost {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.22);
        }
        .admit-btn-ghost:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .admit-btn-print {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #065f46;
          border: 1px solid #ffffff;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s;
        }
        .admit-btn-print:hover:not(:disabled) {
          background: #ecfdf5;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        .admit-btn-print:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Metrics Chips */
        .admit-hdr-chips-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .admit-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: #d1fae5;
        }
        .admit-chip b {
          color: #ffffff;
          margin-left: 2px;
        }
        .admit-chip.highlight-emerald {
          background: rgba(16, 185, 129, 0.25);
          border-color: rgba(16, 185, 129, 0.4);
        }
        .admit-chip.highlight-indigo {
          background: rgba(99, 102, 241, 0.25);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .admit-chip.highlight-amber {
          background: rgba(245, 158, 11, 0.25);
          border-color: rgba(245, 158, 11, 0.4);
        }

        /* --- 2. Filter & Controls Card --- */
        .admit-ctrl-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 18px 20px;
        }

        .admit-filters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        @media (max-width: 900px) {
          .admit-filters-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .admit-filters-grid {
            grid-template-columns: 1fr;
          }
        }

        .admit-form-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .admit-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
        }

        .admit-select {
          width: 100%;
          padding: 8px 12px;
          font-size: 12.5px;
          font-weight: 600;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .admit-select:focus {
          border-color: #059669;
          box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
          background: #ffffff;
        }

        /* Secondary Controls Row */
        .admit-secondary-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          padding-top: 14px;
        }

        .admit-sec-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-sec-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
        }

        .admit-pill-buttons {
          display: inline-flex;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 2.5px;
        }

        .admit-pill-btn {
          background: transparent;
          border: none;
          color: #475569;
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admit-pill-btn.active {
          background: #059669;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 1px 4px rgba(5, 150, 105, 0.25);
        }

        .admit-custom-cards-box {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .admit-custom-input {
          width: 55px;
          padding: 4px 6px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        .admit-custom-unit {
          font-size: 11px;
          color: #64748b;
        }

        .admit-room-input {
          width: 75px;
          padding: 5px 8px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        .admit-btn-room-apply {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-room-apply:hover {
          background: #dcfce7;
        }

        .admit-date-input {
          padding: 5px 8px;
          font-size: 12px;
          font-weight: 600;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        /* --- 3. Workspace Tabs Navigation --- */
        .admit-tabs-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 8px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .admit-tabs-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 12.5px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admit-tab-btn.active {
          background: #059669;
          color: #ffffff;
          border-color: #059669;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25);
        }

        .admit-tab-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.08);
        }
        .admit-tab-btn.active .admit-tab-badge {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        /* Zoom controls */
        .admit-zoom-controls {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
        }

        .admit-zoom-label {
          color: #64748b;
          font-weight: 600;
        }

        .admit-zoom-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .admit-zoom-btn:hover {
          background: #e2e8f0;
        }

        .admit-zoom-value {
          width: 45px;
          text-align: center;
          font-weight: 700;
          color: #0f172a;
        }

        .admit-zoom-reset {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        /* --- State Boxes (Empty / Loading) --- */
        .admit-state-box {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .admit-state-box.border-dashed {
          border: 2px dashed #cbd5e1;
          background: #f8fafc;
        }

        /* --- Tab 1: Live A4 Preview --- */
        .admit-preview-area {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .admit-preview-viewport {
          background: #1e293b;
          border-radius: 12px;
          padding: 24px;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
          overflow: auto;
          max-height: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .admit-preview-scaler {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          transition: transform 0.2s ease;
        }

        .admit-page-wrapper {
          position: relative;
        }

        .admit-page-tag {
          position: absolute;
          top: -24px;
          left: 4px;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .admit-page-tag-pill {
          background: #0f172a;
          color: #38bdf8;
          border: 1px solid #334155;
          padding: 1px 8px;
          border-radius: 4px;
        }

        /* --- Exact A4 Sheet Containers --- */
        .a4-page-sheet {
          background: #ffffff;
          width: 210mm;
          min-height: 297mm;
          box-sizing: border-box;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          display: grid;
          position: relative;
        }

        .a4-sheet-layout-1 {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-content: center;
          justify-items: center;
          padding: 10mm;
        }
        .a4-sheet-layout-1 .admit-card {
          width: 184mm;
          min-height: 126mm;
          padding: 6mm;
        }

        .a4-sheet-layout-2 {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
          row-gap: 6mm;
          padding: 6mm 8mm;
        }
        .a4-sheet-layout-2 .admit-card {
          width: 186mm;
          min-height: 126mm;
          padding: 4.5mm;
        }

        .a4-sheet-layout-4 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 4mm 5mm;
          padding: 5mm 6mm;
        }
        .a4-sheet-layout-4 .admit-card {
          width: 100%;
          min-height: 132mm;
          padding: 3.5mm;
        }

        .a4-sheet-layout-6 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 3mm 4mm;
          padding: 4mm 5mm;
        }
        .a4-sheet-layout-6 .admit-card {
          width: 100%;
          min-height: 89mm;
          padding: 2.5mm;
        }

        /* --- Professional Admit Card Styling --- */
        .admit-card {
          background: #ffffff;
          box-sizing: border-box;
          color: #000000;
          border: 2px solid #000000;
          display: flex;
          flex-direction: column;
          position: relative;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .admit-card-inner-frame {
          border: 1px solid #000000;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 3.5mm 5mm 5mm 5mm;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50mm;
          height: 50mm;
          object-fit: contain;
          opacity: 0.06;
          pointer-events: none;
          z-index: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        /* 1. Header */
        .card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          margin-bottom: 1.5mm;
        }

        .card-logo {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 14mm;
          height: 14mm;
          object-fit: contain;
        }

        .card-titles {
          text-align: center;
          padding: 0 16mm;
        }

        .inst-name {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 15pt;
          font-weight: 800;
          letter-spacing: -0.3px;
          line-height: 1.15;
          color: #000000;
        }

        .inst-sub {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 8pt;
          color: #333333;
          margin-top: 1px;
          line-height: 1.2;
        }

        /* 2. Admit Pill & Date */
        .badge-date-row {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 2mm;
        }

        .admit-pill {
          background: #2563eb;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9.5pt;
          font-weight: 800;
          padding: 1.5px 14px;
          border-radius: 4px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .issue-date-label {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7.5pt;
          font-weight: 700;
          color: #000000;
        }

        /* 3. Details & Photo Grid */
        .student-details-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3mm;
          flex-grow: 1;
        }

        .info-columns-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4mm;
          row-gap: 1.2mm;
          flex-grow: 1;
        }

        .detail-row {
          display: flex;
          align-items: baseline;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 8.5pt;
          line-height: 1.25;
        }

        .detail-label {
          font-weight: 700;
          color: #000000;
          width: 22mm;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .detail-colon {
          width: 3.5mm;
          text-align: center;
          font-weight: 700;
          color: #000000;
          flex-shrink: 0;
        }

        .detail-val {
          font-weight: 700;
          color: #000000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .detail-val.uppercase {
          text-transform: uppercase;
        }

        .room-badge {
          background: #000000;
          color: #ffffff !important;
          padding: 0.5px 6px;
          border-radius: 3px;
          display: inline-block;
          font-weight: 800;
        }

        .student-photo-box {
          width: 24mm;
          height: 29mm;
          border: 1px solid #000000;
          padding: 1px;
          box-sizing: border-box;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }
        .student-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 4. Permission Statement */
        .permission-statement {
          font-family: 'Times New Roman', Georgia, serif;
          font-style: italic;
          font-size: 9.5pt;
          text-align: center;
          margin: 2mm 0;
          line-height: 1.25;
          color: #000000;
        }

        .permission-statement .exam-name {
          font-weight: 800;
          font-style: normal;
          margin-left: 4px;
        }

        /* 5. Signatures (NEVER CUT OFF) */
        .signatures-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 1.5mm;
          padding-bottom: 2mm;
          margin-top: 2mm;
        }

        .signature-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 44mm;
          text-align: center;
        }

        .signature-svg {
          width: 34mm;
          height: 10mm;
          margin-bottom: -1mm;
        }

        .sig-line {
          width: 100%;
          height: 1px;
          background: #000000;
          margin-bottom: 1.5px;
        }

        .sig-name {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 6.5pt;
          font-weight: 800;
          line-height: 1.1;
          color: #000000;
          margin-bottom: 1px;
        }

        .sig-title {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7pt;
          font-weight: 700;
          color: #000000;
          line-height: 1.1;
        }

        /* Scaled Adjustments for 4-Card and 6-Card Layouts */
        .a4-sheet-layout-4 .inst-name { font-size: 11pt; }
        .a4-sheet-layout-4 .inst-sub { font-size: 6.5pt; }
        .a4-sheet-layout-4 .admit-pill { font-size: 8pt; padding: 1px 10px; }
        .a4-sheet-layout-4 .issue-date-label { font-size: 6.5pt; }
        .a4-sheet-layout-4 .detail-row { font-size: 7.5pt; }
        .a4-sheet-layout-4 .detail-label { width: 17mm; }
        .a4-sheet-layout-4 .student-photo-box { width: 20mm; height: 24mm; }
        .a4-sheet-layout-4 .permission-statement { font-size: 8pt; margin: 1mm 0; }
        .a4-sheet-layout-4 .signature-svg { width: 28mm; height: 8mm; }
        .a4-sheet-layout-4 .signature-block { width: 36mm; }

        .a4-sheet-layout-6 .inst-name { font-size: 9.5pt; }
        .a4-sheet-layout-6 .inst-sub { font-size: 5.5pt; }
        .a4-sheet-layout-6 .admit-pill { font-size: 7pt; padding: 1px 8px; }
        .a4-sheet-layout-6 .issue-date-label { font-size: 6pt; }
        .a4-sheet-layout-6 .detail-row { font-size: 6.5pt; line-height: 1.15; }
        .a4-sheet-layout-6 .detail-label { width: 14mm; }
        .a4-sheet-layout-6 .student-photo-box { width: 16mm; height: 19mm; }
        .a4-sheet-layout-6 .permission-statement { font-size: 6.5pt; margin: 0.5mm 0; }
        .a4-sheet-layout-6 .signature-svg { width: 22mm; height: 6mm; }
        .a4-sheet-layout-6 .signature-block { width: 28mm; }
        .a4-sheet-layout-6 .sig-name { font-size: 5.5pt; }
        .a4-sheet-layout-6 .sig-title { font-size: 5.5pt; }

        /* --- Tab 2: Students Selection Table --- */
        .admit-table-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 18px 20px;
        }

        .admit-table-hdr-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
        }

        .admit-table-actions-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .admit-btn-select-all {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-select-all:hover {
          background: #dcfce7;
        }

        .admit-table-selected-badge {
          font-size: 12px;
          color: #475569;
        }

        .admit-search-box {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 5px 10px;
          width: 260px;
        }

        .admit-search-icon {
          color: #94a3b8;
          margin-right: 6px;
        }

        .admit-search-input {
          border: none;
          background: transparent;
          font-size: 12px;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .admit-search-clear {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 12px;
        }

        .admit-table-scroll {
          overflow-x: auto;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .admit-data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12.5px;
          text-align: left;
        }

        .admit-data-table thead tr {
          background: #f1f5f9;
          border-bottom: 1px solid #cbd5e1;
          color: #334155;
          font-weight: 700;
        }

        .admit-data-table th,
        .admit-data-table td {
          padding: 9px 12px;
        }

        .admit-data-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.15s;
        }

        .admit-data-table tbody tr:hover {
          background: #f8fafc;
        }

        .admit-data-table tbody tr.row-selected {
          background: #f0fdf4;
        }

        .admit-roll-pill {
          background: #f1f5f9;
          color: #0f172a;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          display: inline-block;
        }

        .admit-table-avatar {
          width: 28px;
          height: 32px;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
          overflow: hidden;
          background: #f8fafc;
          margin: 0 auto;
        }
        .admit-table-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .admit-table-room-input {
          width: 80px;
          padding: 4px 6px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }
        .admit-table-room-input:focus {
          border-color: #059669;
        }

        /* --- Tab 3: Settings Toggles --- */
        .admit-settings-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }

        .admit-settings-hdr {
          margin-bottom: 16px;
        }

        .admit-settings-title {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .admit-settings-sub {
          font-size: 11.5px;
          color: #64748b;
          margin: 4px 0 0 0;
        }

        .admit-toggles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 950px) {
          .admit-toggles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .admit-toggles-grid {
            grid-template-columns: 1fr;
          }
        }

        .admit-toggle-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 12px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .admit-toggle-card.active {
          background: #f0fdf4;
          border-color: #86efac;
          box-shadow: 0 1px 4px rgba(5, 150, 105, 0.1);
        }

        .admit-toggle-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1.5px solid #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          flex-shrink: 0;
          transition: all 0.15s;
        }

        .admit-toggle-checkbox.active {
          background: #059669;
          border-color: #059669;
          color: #ffffff;
        }

        .admit-toggle-label {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }

        .admit-toggle-desc {
          font-size: 10.5px;
          color: #64748b;
          margin-top: 2px;
          line-height: 1.2;
        }

        /* ==============================================================
           EXACT @media print RULES (ZERO WEBSITE UI, ONLY CARDS ON A4)
           ============================================================== */
        @media print {
          @page {
            size: A4 portrait;
            margin: 4mm;
          }

          body {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide entire website UI, navbar, topbar, sidebars, controls */
          .no-print,
          .navbar,
          .sidebar,
          .page-header,
          .app-header,
          .main-sidebar,
          header,
          nav,
          footer {
            display: none !important;
          }

          .admit-generator-wrapper {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Show the print-only container on print */
          .admit-print-only-container {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .a4-page-sheet {
            width: 100% !important;
            height: 288mm !important;
            min-height: unset !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .admit-card {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admit-pill {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .room-badge {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
