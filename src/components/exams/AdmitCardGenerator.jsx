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
  ListFilter, 
  User, 
  Calendar, 
  Building2, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Settings2,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, toBnNumber, parseBnToEnNumber, formatDateDDMMYYYY } from '../../utils/helpers';

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
  const [selectedStream, setSelectedStream] = useState('all');
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

  // Preview Zoom & Theme
  const [previewZoom, setPreviewZoom] = useState(100);
  const [langMode, setLangMode] = useState('en'); // 'en' | 'bn' | 'bi'
  const [cardsPerPage, setCardsPerPage] = useState(2); // 1, 2, 4, 6
  const [customCardsInput, setCustomCardsInput] = useState('');

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
    issueDate: true
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

  // Fetch students from backend
  const fetchStudents = async () => {
    if (!selectedClassId) return;
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
      if (selectedStream && selectedStream !== 'all') {
        params.department = selectedStream;
      }

      const res = await api.get('/students', { params });
      const rawList = res.data?.students || res.data?.data || res.data || [];
      const studentList = Array.isArray(rawList) ? rawList : [];

      // Sort by roll ascending
      studentList.sort((a, b) => {
        const rollA = parseInt(a.currentEnrollment?.rollNumber || a.rollNumber || a.roll || '999999', 10);
        const rollB = parseInt(b.currentEnrollment?.rollNumber || b.rollNumber || b.roll || '999999', 10);
        return rollA - rollB;
      });

      setStudents(studentList);
      
      // Auto select all
      const allIds = new Set(studentList.map(s => s._id || s.id));
      setSelectedStudentIds(allIds);

      // Auto populate rooms
      const initialRooms = {};
      studentList.forEach(s => {
        const sid = s._id || s.id;
        initialRooms[sid] = commonRoomNo;
      });
      setStudentRooms(initialRooms);
    } catch (err) {
      setStudents([]);
    } finally {
      setLoadingStudents(false);
    }
  };

  useEffect(() => {
    if (selectedClassId) {
      fetchStudents();
    }
  }, [selectedClassId, selectedSection, selectedStream]);

  // Apply common room to all
  const applyCommonRoomToAll = () => {
    const updated = { ...studentRooms };
    students.forEach(s => {
      const sid = s._id || s.id;
      if (selectedStudentIds.has(sid)) {
        updated[sid] = commonRoomNo;
      }
    });
    setStudentRooms(updated);
  };

  // Toggle selection
  const handleToggleSelectAll = () => {
    if (selectedStudentIds.size === filteredStudents.length) {
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
    <div className="admit-generator-workspace animate-fade-in space-y-6">
      
      {/* ==============================================================
          1. HERO HEADER WITH STATS CHIPS & QUICK ACTIONS
          ============================================================== */}
      <div className="card p-6 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl border border-slate-700/60 shadow-xl text-white no-print">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25 ring-2 ring-sky-400/30">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-white">
                  প্রবেশপত্র জেনারেটর (Admit Card Generator)
                </h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Batch Pro
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                <span>{getSafeStr(madrasah.madrasahName, 'আন্-নূর ইসলামিক একাডেমি')}</span>
                <span>•</span>
                <span>স্বয়ংক্রিয় এ৪ ব্যাচ প্রিন্ট ও লেআউট স্কেলিং</span>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Language Toggle */}
            <div className="inline-flex bg-slate-800/90 border border-slate-700 p-1 rounded-xl shadow-inner text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLangMode('en')}
                className={`px-3 py-1.5 rounded-lg transition-all ${langMode === 'en' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLangMode('bn')}
                className={`px-3 py-1.5 rounded-lg transition-all ${langMode === 'bn' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLangMode('bi')}
                className={`px-3 py-1.5 rounded-lg transition-all ${langMode === 'bi' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                দ্বিভাষিক
              </button>
            </div>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              disabled={selectedStudentsList.length === 0}
              className="btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400/40 transition-all hover:scale-102 active:scale-98 disabled:opacity-40 disabled:pointer-events-none"
            >
              <Printer className="w-4 h-4" />
              <span>প্রিন্ট করুন ({selectedStudentsList.length} জন)</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mt-5 pt-4 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span>মোট শিক্ষার্থী: <b>{filteredStudents.length}</b></span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>নির্বাচিত: <b>{selectedStudentsList.length}</b> জন</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-semibold">
            <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
            <span>গ্রিড লেআউট: <b>{cardsPerPage}টি/পেজ</b></span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>প্রিন্ট শিট: <b>{studentPages.length}টি A4 পেজ</b></span>
          </div>
        </div>
      </div>

      {/* ==============================================================
          2. FILTERS & SMART CONFIGURATION PANEL
          ============================================================== */}
      <div className="card p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 no-print">
        
        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              পরীক্ষা নির্বাচন করুন *
            </label>
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-100 p-2.5 focus:ring-2 focus:ring-sky-500 transition-all"
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

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              শ্রেণি / জামাত *
            </label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-100 p-2.5 focus:ring-2 focus:ring-emerald-500 transition-all"
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

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <LayoutGrid className="w-3.5 h-3.5 text-indigo-600" />
              শাখা (Section)
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-100 p-2.5 focus:ring-2 focus:ring-indigo-500 transition-all"
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

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              বিভাগ / গ্রুপ (Department)
            </label>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-100 p-2.5 focus:ring-2 focus:ring-amber-500 transition-all"
            >
              <option value="all">সকল বিভাগ (All Streams)</option>
              <option value="noorani">নূরানী বিভাগ</option>
              <option value="najera">নাজেরা বিভাগ</option>
              <option value="hifz">হিফজুল কুরআন</option>
              <option value="kitab">কিতাব বিভাগ</option>
              <option value="general">জেনারেল / স্কুল</option>
            </select>
          </div>
        </div>

        {/* Second Row: Cards per page & Global Room Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/80">
          
          {/* Card Layout Selector Buttons */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
              প্রতি A4 পেজে:
            </span>
            <div className="inline-flex bg-slate-100 dark:bg-slate-750 p-1 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
              {[
                { count: 1, label: '১টি' },
                { count: 2, label: '২টি' },
                { count: 4, label: '৪টি (2x2)' },
                { count: 6, label: '৬টি (2x3)' }
              ].map(item => (
                <button
                  key={item.count}
                  type="button"
                  onClick={() => setCardsPerPage(item.count)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${cardsPerPage === item.count ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Custom Cards Input */}
            <div className="flex items-center gap-1 ml-1">
              <input
                type="number"
                min="1"
                max="8"
                placeholder="কাস্টম"
                value={customCardsInput}
                onChange={(e) => {
                  setCustomCardsInput(e.target.value);
                  const val = parseInt(e.target.value, 10);
                  if (val > 0) setCardsPerPage(val);
                }}
                className="w-16 text-xs p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center font-bold"
              />
              <span className="text-[11px] text-slate-500 font-medium">টি/পেজ</span>
            </div>
          </div>

          {/* Common Room No Bar */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              কক্ষ নম্বর (Room No):
            </span>
            <input
              type="text"
              value={commonRoomNo}
              onChange={(e) => setCommonRoomNo(e.target.value)}
              placeholder="যেমন: ১০২"
              className="w-24 text-xs font-bold p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-center text-slate-900 dark:text-slate-100"
            />
            <button
              type="button"
              onClick={applyCommonRoomToAll}
              className="btn btn-secondary text-xs px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-bold transition-all"
              title="নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান"
            >
              সবাইকে দিন
            </button>
          </div>

          {/* Issue Date */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              ইস্যু তারিখ:
            </span>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="text-xs font-semibold p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

      </div>

      {/* ==============================================================
          3. MAIN WORKSPACE TABS (PREVIEW vs TABLE vs SETTINGS)
          ============================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-2 no-print">
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'preview' ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}`}
          >
            <Eye className="w-4 h-4" />
            <span>লাইভ কার্ড প্রিভিউ (Live Preview)</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === 'preview' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
              {studentPages.length} পেজ
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'students' ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}`}
          >
            <User className="w-4 h-4" />
            <span>শিক্ষার্থী তালিকা ({selectedStudentsList.length}/{filteredStudents.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'settings' ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}`}
          >
            <Settings2 className="w-4 h-4" />
            <span>কার্ড উপাদান কনফিগারেশন</span>
          </button>
        </div>

        {/* Live Preview Zoom Controls */}
        {activeTab === 'preview' && (
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 text-xs font-semibold">জুম:</span>
            <button
              type="button"
              onClick={() => setPreviewZoom(Math.max(50, previewZoom - 15))}
              className="p-1 rounded bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200"
              title="জুম আউট"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center font-bold text-slate-700 dark:text-slate-300">{previewZoom}%</span>
            <button
              type="button"
              onClick={() => setPreviewZoom(Math.min(130, previewZoom + 15))}
              className="p-1 rounded bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200"
              title="জুম ইন"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setPreviewZoom(100)}
              className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-300 ml-1"
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
        <div className="preview-canvas-wrapper no-print">
          
          {loadingStudents ? (
            <div className="card p-12 text-center text-slate-500 bg-white dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center gap-3">
              <RotateCw className="w-8 h-8 animate-spin text-sky-600" />
              <p className="font-semibold text-sm">শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে...</p>
            </div>
          ) : !selectedClassId ? (
            <div className="card p-14 text-center text-slate-400 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
              <FileText className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">কোনো শ্রেণি নির্বাচন করা হয়নি</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                উপরে ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র লাইভ তৈরি হয়ে প্রদর্শিত হবে।
              </p>
            </div>
          ) : selectedStudentsList.length === 0 ? (
            <div className="card p-12 text-center text-slate-400 bg-white dark:bg-slate-800 rounded-2xl">
              <p className="text-sm font-semibold">কোনো শিক্ষার্থী নির্বাচিত করা হয়নি। অনুগ্রহ করে শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।</p>
            </div>
          ) : (
            <div 
              className="preview-viewport overflow-auto p-6 bg-slate-900/90 rounded-2xl shadow-inner flex flex-col items-center gap-8"
              style={{ maxHeight: '820px' }}
            >
              <div 
                className="preview-scaler transition-transform duration-200 flex flex-col items-center gap-8"
                style={{ transform: `scale(${previewZoom / 100})`, transformOrigin: 'top center' }}
              >
                {studentPages.map((pageStudents, pageIdx) => (
                  <div key={pageIdx} className="relative group">
                    
                    {/* Page Header Indicator */}
                    <div className="absolute -top-6 left-2 text-[11px] font-bold text-slate-400 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-850 text-sky-400 border border-slate-700">
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
                        const sGroup = getSafeStr(student.department || student.stream, 'All');
                        const sRoom = getSafeStr(studentRooms[sid] || commonRoomNo, '১০২');
                        const sPhoto = student.photo || boyAvatarSvg;
                        const examTitle = getSafeStr(currentExam?.name || currentExam?.title, 'Annual Examination 2026');
                        const className = getSafeStr(currentClass?.name || currentClass?.banglaName || currentClass?.code, '');

                        return (
                          <div key={sid} className="admit-card">
                            <div className="admit-card-inner-frame">
                              
                              {/* Watermark Logo */}
                              <img src="/images/madrasah_logo.png" onerror="this.src='./images/madrasah_logo.png'" className="card-watermark" alt="Watermark" />
                              
                              <div className="card-content">
                                
                                {/* 1. Header */}
                                <div className="card-header">
                                  <img src="/images/madrasah_logo.png" onerror="this.src='./images/madrasah_logo.png'" className="card-logo" alt="Logo" />
                                  <div className="card-titles">
                                    <div className="inst-name">
                                      {langMode === 'bn' ? getSafeStr(madrasah.madrasahName, 'আন্-নূর ইসলামিক একাডেমি') : 'AN-NUR ISLAMIC ACADEMY'}
                                    </div>
                                    <div className="inst-sub">
                                      {langMode === 'bn' ? getSafeStr(madrasah.address, 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর') : 'Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj'}
                                    </div>
                                  </div>
                                </div>

                                {/* 2. Admit Card Pill & Date */}
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

                                {/* 3. Student Details + Photo */}
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

                                {/* 5. Signatures (PROPORTIONAL & NEVER CUT OFF) */}
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
        <div className="card p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4 no-print">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleToggleSelectAll}
                className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 px-3.5 py-2 rounded-xl border border-sky-200 dark:border-sky-800 hover:bg-sky-100 transition-all"
              >
                {selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0 ? (
                  <CheckSquare className="w-4 h-4 text-sky-600" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400" />
                )}
                <span>
                  {selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0 
                    ? 'সবাইকে আনসিলেক্ট করুন' 
                    : 'সবাইকে নির্বাচন করুন'}
                </span>
              </button>

              <span className="text-xs text-slate-500 font-medium">
                মোট <b>{filteredStudents.length}</b> জনের মধ্যে <b>{selectedStudentIds.size}</b> জন নির্বাচিত
              </span>
            </div>

            {/* Search Box */}
            <div className="w-72 relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="নাম, রোল বা আইডি দিয়ে খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-750 text-slate-800 dark:text-slate-100 font-medium"
              />
            </div>
          </div>

          {/* Table */}
          {loadingStudents ? (
            <div className="py-16 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
              <RotateCw className="w-5 h-5 animate-spin text-sky-600" />
              <span>শিক্ষার্থীদের তালিকা লোড হচ্ছে...</span>
            </div>
          ) : !selectedClassId ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              শিক্ষার্থীদের তালিকা দেখতে উপরে শ্রেণি নির্বাচন করুন।
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              এই শ্রেণি বা শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি।
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700/80 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-850 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5 w-12 text-center">সিলেক্ট</th>
                    <th className="p-3.5 w-16 text-center">রোল</th>
                    <th className="p-3.5 w-24">ছবি</th>
                    <th className="p-3.5 w-28">আইডি</th>
                    <th className="p-3.5">শিক্ষার্থীর নাম</th>
                    <th className="p-3.5 w-24">বিভাগ</th>
                    <th className="p-3.5 w-20">শাখা</th>
                    <th className="p-3.5 w-36 text-center">কক্ষ নম্বর (Room)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                  {filteredStudents.map((s) => {
                    const sid = s._id || s.id;
                    const isChecked = selectedStudentIds.has(sid);
                    const roll = getSafeStr(s.currentEnrollment?.rollNumber || s.rollNumber || s.roll, '—');
                    const name = getSafeStr(s.user?.name || s.name, '—');
                    const stId = getSafeStr(s.studentId || s.admissionNumber, '—');
                    const section = getSafeStr(s.currentEnrollment?.section || s.section || (selectedSection !== 'all' ? selectedSection : '—'), '—');
                    const stream = getSafeStr(s.department || s.stream, 'সাধারণ');
                    const room = getSafeStr(studentRooms[sid] || commonRoomNo, '১০২');
                    const photo = s.photo || boyAvatarSvg;

                    return (
                      <tr 
                        key={sid} 
                        className={`hover:bg-slate-50/80 dark:hover:bg-slate-750/50 transition-colors ${isChecked ? 'bg-sky-50/40 dark:bg-sky-950/20' : ''}`}
                      >
                        <td className="p-3.5 text-center">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleStudent(sid)}
                            className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4 cursor-pointer"
                          />
                        </td>
                        <td className="p-3.5 text-center font-bold text-slate-900 dark:text-slate-100">
                          <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                            {roll}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <div className="w-8 h-9 rounded border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100">
                            <img src={photo} alt="" className="w-full h-full object-cover" />
                          </div>
                        </td>
                        <td className="p-3.5 font-mono text-slate-500 dark:text-slate-400">
                          {stId}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                          {name}
                        </td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-400">
                          {stream}
                        </td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-400">
                          {section}
                        </td>
                        <td className="p-3.5 text-center">
                          <input
                            type="text"
                            value={room}
                            onChange={(e) => {
                              const val = e.target.value;
                              setStudentRooms(prev => ({ ...prev, [sid]: val }));
                            }}
                            className="w-24 text-xs p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center font-bold text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-sky-500"
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
        <div className="card p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-5 no-print">
          
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-sky-600" />
              কার্ডে প্রদর্শনের উপাদানসমূহ (ক্লিক করে অন / অফ করুন)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে অ্যাক্টিভ রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে কার্যকর হবে।
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { key: 'room', label: 'কক্ষ নম্বর (Room No)', desc: 'পরীক্ষার হল/রুম নং' },
              { key: 'exam', label: 'পরীক্ষার নাম (Exam Name)', desc: 'অনুমতি বাক্যসহ পরীক্ষার নাম' },
              { key: 'group', label: 'বিভাগ / গ্রুপ (Group)', desc: 'হিফজ/নাজেরা/জেনারেল' },
              { key: 'section', label: 'শাখা (Section)', desc: 'শ্রেণির শাখা বা সেকশন' },
              { key: 'version', label: 'ভার্সন (Version)', desc: 'বাংলা / ইংলিশ ভার্সন' },
              { key: 'shift', label: 'শিফট (Shift)', desc: 'প্রভাতী / দিবা শিফট' },
              { key: 'session', label: 'সেশন / শিক্ষাবর্ষ', desc: 'বর্তমান শিক্ষাবর্ষ' },
              { key: 'studentId', label: 'ছাত্র আইডি (Student ID)', desc: 'ইউনিক স্টুডেন্ট আইডি' },
              { key: 'photo', label: 'শিক্ষার্থীর ছবি (Photo)', desc: 'পাসপোর্ট সাইজ ছবি ফ্রেম' },
              { key: 'teacherSig', label: 'শ্রেণি শিক্ষক স্বাক্ষর', desc: 'বাম পাশের ডিজিটাল স্বাক্ষর' },
              { key: 'principalSig', label: 'প্রধান শিক্ষক স্বাক্ষর', desc: 'ডান পাশের ডিজিটাল স্বাক্ষর' },
              { key: 'issueDate', label: 'ইস্যুর তারিখ (Issue Date)', desc: 'কার্ড ইস্যু করার তারিখ' }
            ].map(item => {
              const active = fieldToggles[item.key];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggleField(item.key)}
                  className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${active ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700 text-sky-950 dark:text-sky-200 shadow-sm' : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-400 hover:border-slate-300'}`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 ${active ? 'bg-sky-600 text-white' : 'border border-slate-300 dark:border-slate-600'}`}>
                    {active && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">{item.label}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* ==============================================================
          4. PRINT STYLES & PRINT CONTAINER (ACTIVE ONLY ON PRINT)
          ============================================================== */}
      <style>{`
        /* Screen Only Preview Styles */
        @media screen {
          .a4-page-sheet {
            background: #ffffff;
            width: 210mm;
            min-height: 297mm;
            box-sizing: border-box;
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.45);
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
            min-height: 124mm;
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
        }

        /* Shared Admit Card CSS */
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
          padding: 3mm 4.5mm 3.5mm 4.5mm;
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
          width: 48mm;
          height: 48mm;
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
          width: 13.5mm;
          height: 13.5mm;
          object-fit: contain;
        }
        .card-titles {
          text-align: center;
          padding-left: 14mm;
          padding-right: 14mm;
          width: 100%;
        }
        .inst-name {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 14.5pt;
          font-weight: 800;
          color: #000000;
          line-height: 1.1;
        }
        .inst-sub {
          font-size: 7.5pt;
          color: #1e293b;
          margin-top: 0.8mm;
          font-weight: 500;
          line-height: 1.2;
        }
        .badge-date-row {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          margin-top: 1mm;
          margin-bottom: 2mm;
        }
        .admit-pill {
          background: #2a5298;
          color: #ffffff;
          font-size: 9.5pt;
          font-weight: 700;
          padding: 1mm 7mm;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }
        .issue-date-label {
          position: absolute;
          right: 0;
          font-size: 7.5pt;
          font-weight: 600;
          color: #000000;
        }
        .student-details-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2.5mm;
          width: 100%;
          margin: 1mm 0 1.5mm 0;
        }
        .info-columns-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 1.8mm 3mm;
          flex: 1;
        }
        .detail-row {
          display: flex;
          align-items: baseline;
          font-size: 8.5pt;
          line-height: 1.25;
          white-space: nowrap;
        }
        .detail-label {
          font-weight: 700;
          color: #000000;
          min-width: 20mm;
          display: inline-block;
        }
        .detail-colon {
          font-weight: 700;
          padding-right: 1.8mm;
        }
        .detail-val {
          font-weight: 700;
          color: #000000;
        }
        .detail-val.uppercase { text-transform: uppercase; }
        .room-badge {
          display: inline-block;
          padding: 0.4mm 2mm;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 3px;
          font-weight: 800;
        }
        .student-photo-box {
          width: 21mm;
          height: 25mm;
          border: 1px solid #334155;
          background: #f8fafc;
          overflow: hidden;
          flex-shrink: 0;
        }
        .student-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .permission-statement {
          text-align: left;
          font-size: 8.5pt;
          color: #000000;
          line-height: 1.25;
          margin: 1mm 0;
        }
        .permission-statement .exam-name {
          font-weight: 700;
          font-style: italic;
        }
        .signatures-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          margin-top: auto;
          padding-top: 1.5mm;
        }
        .signature-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 32mm;
        }
        .signature-svg {
          height: 8.5mm;
          max-width: 32mm;
          margin-bottom: 0.5mm;
        }
        .sig-line {
          width: 100%;
          min-width: 32mm;
          border-top: 1.2px solid #000000;
          margin-bottom: 0.8mm;
        }
        .sig-title {
          font-size: 7.5pt;
          font-weight: 700;
          color: #000000;
        }
        .sig-name {
          font-size: 7.2pt;
          font-weight: 700;
          color: #000000;
          text-transform: uppercase;
        }

        /* 6 cards layout scale */
        .a4-sheet-layout-6 .inst-name { font-size: 11pt; }
        .a4-sheet-layout-6 .inst-sub { font-size: 6.5pt; }
        .a4-sheet-layout-6 .card-logo { width: 9.5mm; height: 9.5mm; }
        .a4-sheet-layout-6 .card-titles { padding-left: 10mm; padding-right: 10mm; }
        .a4-sheet-layout-6 .admit-pill { font-size: 7.8pt; padding: 0.5mm 4.5mm; }
        .a4-sheet-layout-6 .detail-row { font-size: 7pt; line-height: 1.15; }
        .a4-sheet-layout-6 .detail-label { min-width: 15mm; }
        .a4-sheet-layout-6 .student-photo-box { width: 16mm; height: 20mm; }
        .a4-sheet-layout-6 .permission-statement { font-size: 7pt; margin: 0.5mm 0; }
        .a4-sheet-layout-6 .signature-svg { height: 6.5mm; }
        .a4-sheet-layout-6 .sig-title { font-size: 6.5pt; }
        .a4-sheet-layout-6 .sig-name { font-size: 6.2pt; }

        /* Media Print Rules */
        @media print {
          body {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: A4 portrait;
            margin: 6mm 6mm 6mm 6mm;
          }
          .admit-generator-workspace {
            margin: 0 !important;
            padding: 0 !important;
          }
          .preview-viewport {
            padding: 0 !important;
            background: transparent !important;
            overflow: visible !important;
            max-height: none !important;
          }
          .preview-scaler {
            transform: none !important;
            gap: 0 !important;
          }
          .a4-page-sheet {
            width: 100% !important;
            min-height: 285mm !important;
            page-break-after: always !important;
            break-after: page !important;
            box-shadow: none !important;
            margin-bottom: 0 !important;
          }
        }
      `}</style>

    </div>
  );
}
