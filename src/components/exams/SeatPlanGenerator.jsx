import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Printer, 
  RotateCw, 
  CheckSquare, 
  Square, 
  LayoutGrid, 
  Sliders, 
  Building2, 
  UserCheck, 
  Filter, 
  Search,
  Check,
  Scissors,
  Image as ImageIcon,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import api from '../../api/axios';
import { useClasses, useSectionsByClass } from '../../hooks/useMetadataQueries';
import { getMadrasahInfo, toBnNumber, parseBnToEnNumber, getNumericRoll } from '../../utils/helpers';

/**
 * Islamic Boy with Topi SVG Avatar Fallback
 */
const boyAvatarSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>`;

/**
 * Madrasah Logo fallback
 */
const logoFallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>`;

export default function SeatPlanGenerator({ selectedExam = null, classes = [], user = null }) {
  const madrasahInfo = useMemo(() => getMadrasahInfo(user), [user]);

  // Safe Props & Query fallback for classes
  const { data: queryClasses = [] } = useClasses({ enabled: !classes || classes.length === 0 });
  const resolvedClasses = (classes && classes.length > 0) ? classes : queryClasses;

  const safeClasses = useMemo(() => {
    if (Array.isArray(resolvedClasses)) return resolvedClasses;
    if (resolvedClasses && Array.isArray(resolvedClasses.classes)) return resolvedClasses.classes;
    return [];
  }, [resolvedClasses]);

  // Exams and classes states
  const [examsList, setExamsList] = useState([]);
  const [activeExamId, setActiveExamId] = useState(selectedExam?._id || '');
  const [selectedClassId, setSelectedClassId] = useState(selectedExam?.classLevel?._id || selectedExam?.classLevel || '');
  const [selectedSection, setSelectedSection] = useState('all');

  // Dependent sections via TanStack Query (in-memory filtered from cached sections)
  const { data: classSections = [] } = useSectionsByClass(selectedClassId, { enabled: Boolean(selectedClassId) });
  const sectionsList = useMemo(() => (!selectedClassId ? [] : classSections), [selectedClassId, classSections]);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [academicYear, setAcademicYear] = useState(selectedExam?.academicYear || '2026');
  const [customExamTitle, setCustomExamTitle] = useState(selectedExam?.name || 'বার্ষিক পরীক্ষা - ২০২৬');

  // Students loaded from database
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState(new Set());
  const [studentRooms, setStudentRooms] = useState({}); // { [studentId]: '101' }
  const [searchQuery, setSearchQuery] = useState('');

  // Field toggles (Checkboxes)
  const [showRoom, setShowRoom] = useState(true);
  const [showExamName, setShowExamName] = useState(true);
  const [showDepartment, setShowDepartment] = useState(true);
  const [showPhoto, setShowPhoto] = useState(true);
  const [showStudentId, setShowStudentId] = useState(true);
  const [showClass, setShowClass] = useState(true);
  const [showSection, setShowSection] = useState(true);
  const [showSession, setShowSession] = useState(true);
  const [showRollBox, setShowRollBox] = useState(true);
  const [showCutLines, setShowCutLines] = useState(true);
  const [showWatermark, setShowWatermark] = useState(true);

  // Cards per page and print layout
  const [cardsPerPage, setCardsPerPage] = useState(12); // default 12 (3x4)
  const [isCustomCards, setIsCustomCards] = useState(false);
  const [customCardsInput, setCustomCardsInput] = useState('12');
  const [selectedTheme, setSelectedTheme] = useState('theme-classic'); // 'theme-classic' | 'theme-emerald' | 'theme-navy'
  const [headerSwap, setHeaderSwap] = useState('logo-left'); // 'logo-left' | 'photo-left'
  const [isEnglish, setIsEnglish] = useState(false);

  // Batch room inputs
  const [commonRoomInput, setCommonRoomInput] = useState('১০১');
  const [rangeRoomText, setRangeRoomText] = useState('1-20: 101\n21-40: 102\n41-60: 103');
  const [showRangeRoomModal, setShowRangeRoomModal] = useState(false);

  // 1. Fetch exams list if not populated
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await api.get('/exams', { params: { limit: 100 } });
        const raw = res.data?.data?.exams || res.data?.exams || res.data?.data || [];
        const list = Array.isArray(raw) ? raw : [];
        setExamsList(list);
        if (!activeExamId && list.length > 0) {
          setActiveExamId(list[0]._id);
          setCustomExamTitle(list[0].name);
          if (list[0].academicYear) setAcademicYear(list[0].academicYear);
          if (list[0].classLevel) {
            const cid = list[0].classLevel?._id || list[0].classLevel;
            setSelectedClassId(cid);
          }
        }
      } catch (err) {
        console.error('Failed to fetch exams for seat plan:', err);
        setExamsList([]);
      }
    };
    fetchExams();
  }, []);

  // Update exam details when activeExamId changes
  useEffect(() => {
    if (activeExamId && Array.isArray(examsList) && examsList.length > 0) {
      const found = examsList.find(e => e._id === activeExamId);
      if (found) {
        setCustomExamTitle(found.name || 'বার্ষিক পরীক্ষা - ২০২৬');
        if (found.academicYear) setAcademicYear(found.academicYear);
        if (found.classLevel) {
          const cid = found.classLevel?._id || found.classLevel;
          setSelectedClassId(cid);
        }
      }
    }
  }, [activeExamId, examsList]);

  // Reset selected section if it is no longer valid for the selected class
  useEffect(() => {
    if (!selectedClassId) {
      if (selectedSection !== 'all') setSelectedSection('all');
      return;
    }
    if (selectedSection && selectedSection !== 'all') {
      const isValid = sectionsList.some(s => (s._id || s.id) === selectedSection || s.name === selectedSection);
      if (!isValid) {
        setSelectedSection('all');
      }
    }
  }, [selectedClassId, sectionsList, selectedSection]);

  // Load students for the selected class/section
  const fetchStudents = async () => {
    setLoadingStudents(true);
    try {
      const params = { limit: 500 };
      if (selectedClassId) params.classLevel = selectedClassId;
      if (selectedSection && selectedSection !== 'all') params.section = selectedSection;

      const res = await api.get('/students', { params });
      const raw = res.data?.data?.students || res.data?.students || res.data?.data || [];
      let list = Array.isArray(raw) ? raw : [];
      
      // Filter by department if chosen
      if (selectedDepartment && selectedDepartment !== 'all') {
        list = list.filter(st => {
          const dept = st.department || st.currentEnrollment?.department || '';
          return dept.toLowerCase().includes(selectedDepartment.toLowerCase());
        });
      }

      // Sort by Roll
      list.sort((a, b) => {
        const rA = getNumericRoll(a.currentEnrollment?.rollNumber || a.rollNumber || a.roll);
        const rB = getNumericRoll(b.currentEnrollment?.rollNumber || b.rollNumber || b.roll);
        return rA - rB;
      });

      setAllStudents(list);

      // Pre-select all students
      const allIds = new Set(list.map(s => s._id));
      setSelectedStudentIds(allIds);

      // Initialize default rooms
      const initRooms = {};
      list.forEach((st) => {
        initRooms[st._id] = commonRoomInput || '১০১';
      });
      setStudentRooms(initRooms);
    } catch (err) {
      console.error('Failed to load students for seat plan:', err);
      setAllStudents([]);
      setSelectedStudentIds(new Set());
    } finally {
      setLoadingStudents(false);
    }
  };

  // Auto-fetch students when class changes
  useEffect(() => {
    if (selectedClassId) {
      fetchStudents();
    }
  }, [selectedClassId, selectedSection, selectedDepartment]);

  // Toggle selection
  const handleToggleStudent = (id) => {
    setSelectedStudentIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedStudentIds.size === allStudents.length) {
      setSelectedStudentIds(new Set());
    } else {
      setSelectedStudentIds(new Set(allStudents.map(s => s._id)));
    }
  };

  // Apply Common Room to all selected
  const applyCommonRoom = () => {
    const val = commonRoomInput.trim();
    if (!val) return;
    setStudentRooms(prev => {
      const next = { ...prev };
      selectedStudentIds.forEach(id => {
        next[id] = val;
      });
      return next;
    });
  };

  // Apply Range-based Room distribution
  const applyRangeRooms = () => {
    const lines = rangeRoomText.split('\n');
    const newRooms = { ...studentRooms };

    lines.forEach(line => {
      const parts = line.split(':');
      if (parts.length === 2) {
        const rangePart = parts[0].trim();
        const roomVal = parts[1].trim();
        const rangeMatch = rangePart.match(/(\d+)\s*[-–—]\s*(\d+)/);
        if (rangeMatch && roomVal) {
          const startRoll = parseInt(rangeMatch[1], 10);
          const endRoll = parseInt(rangeMatch[2], 10);

          allStudents.forEach(st => {
            const rawRoll = parseBnToEnNumber(st.currentEnrollment?.rollNumber || st.rollNumber || st.roll || '0');
            const numericRoll = parseInt(rawRoll, 10);
            if (!isNaN(numericRoll) && numericRoll >= startRoll && numericRoll <= endRoll) {
              newRooms[st._id] = roomVal;
            }
          });
        }
      }
    });

    setStudentRooms(newRooms);
    setShowRangeRoomModal(false);
  };

  // Filtered students for display/print
  const filteredStudents = useMemo(() => {
    return allStudents.filter(st => {
      if (!selectedStudentIds.has(st._id)) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const name = (st.fullName || st.user?.fullName || st.name || '').toLowerCase();
      const roll = String(st.currentEnrollment?.rollNumber || st.rollNumber || st.roll || '').toLowerCase();
      const id = String(st.studentId || st.admissionNumber || '').toLowerCase();
      return name.includes(q) || roll.includes(q) || id.includes(q);
    });
  }, [allStudents, selectedStudentIds, searchQuery]);

  // Handle Cards per Page selection
  const handleCardsPreset = (num) => {
    setCardsPerPage(num);
    setIsCustomCards(false);
    setCustomCardsInput(String(num));
  };

  const handleCustomCardsChange = (val) => {
    setCustomCardsInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 30) {
      setCardsPerPage(parsed);
      setIsCustomCards(true);
    }
  };

  // Calculate grid layout (cols and rows) based on cardsPerPage
  const gridConfig = useMemo(() => {
    const count = cardsPerPage;
    let cols = 3;
    let rows = 4;

    if (count <= 4) {
      cols = 2;
      rows = Math.ceil(count / 2);
    } else if (count <= 6) {
      cols = 2;
      rows = Math.ceil(count / 2); // 3 rows
    } else if (count <= 8) {
      cols = 2;
      rows = Math.ceil(count / 2); // 4 rows
    } else if (count <= 10) {
      cols = 2;
      rows = 5;
    } else if (count <= 12) {
      cols = 3;
      rows = 4;
    } else if (count <= 15) {
      cols = 3;
      rows = 5;
    } else if (count <= 16) {
      cols = 4;
      rows = 4;
    } else {
      cols = 4;
      rows = Math.ceil(count / 4);
    }

    return { cols, rows, count };
  }, [cardsPerPage]);

  // Chunk students into pages
  const printPages = useMemo(() => {
    const pages = [];
    const size = cardsPerPage;
    for (let i = 0; i < filteredStudents.length; i += size) {
      pages.push(filteredStudents.slice(i, i + size));
    }
    return pages;
  }, [filteredStudents, cardsPerPage]);

  return (
    <div className="seat-plan-workspace animate-fade-in">
      {/* ==============================================================
          1. CONTROL PANEL & TOOLBAR (HIDDEN ON PRINT)
          ============================================================== */}
      <div className="card mb-20 no-print" style={{ border: '1px solid #cbd5e1', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
        {/* Header Bar */}
        <div className="flex justify-between items-center pb-14 border-b border-slate-200 flex-wrap gap-12">
          <div>
            <h2 className="text-lg font-bold text-emerald-800 flex items-center gap-8 m-0">
              <LayoutGrid size={22} className="text-emerald-600" />
              <span>পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-2 m-0">
              ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন
            </p>
          </div>

          <div className="flex gap-8 flex-wrap">
            <button 
              type="button" 
              className="btn btn-secondary text-xs flex items-center gap-6"
              onClick={() => setIsEnglish(!isEnglish)}
            >
              🌐 {isEnglish ? 'বাংলা সংস্করণ' : 'English Mode'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary text-xs flex items-center gap-6"
              onClick={fetchStudents}
              disabled={loadingStudents}
            >
              <RotateCw size={14} className={loadingStudents ? 'animate-spin' : ''} />
              <span>রিফ্রেশ</span>
            </button>
            <button 
              type="button" 
              className="btn btn-primary text-xs font-bold flex items-center gap-6"
              style={{ background: '#059669', borderColor: '#059669', padding: '8px 18px' }}
              onClick={() => window.print()}
            >
              <Printer size={16} />
              <span>প্রিন্ট করুন (Print A4)</span>
            </button>
          </div>
        </div>

        {/* Filters Section (Exam, Class, Section, Department) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-14 pb-14 border-b border-slate-200">
          <div>
            <label className="form-label text-xs font-semibold text-slate-700">পরীক্ষা নির্বাচন (Exam):</label>
            <select 
              className="form-input text-xs" 
              value={activeExamId}
              onChange={(e) => setActiveExamId(e.target.value)}
            >
              <option value="">-- পরীক্ষা নির্বাচন করুন --</option>
              {(Array.isArray(examsList) ? examsList : []).map(ex => (
                <option key={ex._id} value={ex._id}>
                  {ex.name} ({ex.academicYear || '২০২৬'})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label text-xs font-semibold text-slate-700">শ্রেণি (Class Level):</label>
            <select 
              className="form-input text-xs" 
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
            >
              <option value="">-- সকল শ্রেণি --</option>
              {(Array.isArray(safeClasses) ? safeClasses : []).map(cl => (
                <option key={cl._id} value={cl._id}>{cl.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label text-xs font-semibold text-slate-700">শাখা (Section):</label>
            <select 
              className="form-input text-xs" 
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="all">সকল শাখা</option>
              {(Array.isArray(sectionsList) ? sectionsList : []).map(sec => (
                <option key={sec._id || sec.name} value={sec._id || sec.name}>
                  {sec.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label text-xs font-semibold text-slate-700">বিভাগ / গ্রুপ (Department):</label>
            <select 
              className="form-input text-xs" 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)</option>
              <option value="নাজেরা">নাজেরা বিভাগ</option>
              <option value="হিফজ">হিফজুল কুরআন</option>
              <option value="কিতাব">কিতাব বিভাগ</option>
              <option value="নূরানী">নূরানী বিভাগ</option>
            </select>
          </div>
        </div>

        {/* Custom Field Toggles (Tick-boxes) */}
        <div className="py-12 border-b border-slate-200">
          <div className="flex items-center gap-6 mb-8 text-xs font-bold text-slate-700 uppercase tracking-wide">
            <Sliders size={14} className="text-emerald-600" />
            <span>কার্ডে কোন কোন তথ্য প্রদর্শন করতে চান? (ফিল্ড নির্বাচন করুন):</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-xs">
            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showRoom} onChange={e => setShowRoom(e.target.checked)} className="accent-emerald-600" />
              <span>কক্ষ নম্বর (Room)</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showExamName} onChange={e => setShowExamName(e.target.checked)} className="accent-emerald-600" />
              <span>পরীক্ষার নাম</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showDepartment} onChange={e => setShowDepartment(e.target.checked)} className="accent-emerald-600" />
              <span>বিভাগ / গ্রুপ</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showPhoto} onChange={e => setShowPhoto(e.target.checked)} className="accent-emerald-600" />
              <span>শিক্ষার্থীর ছবি</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showStudentId} onChange={e => setShowStudentId(e.target.checked)} className="accent-emerald-600" />
              <span>আইডি নম্বর</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showClass} onChange={e => setShowClass(e.target.checked)} className="accent-emerald-600" />
              <span>শ্রেণি (Class)</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showSection} onChange={e => setShowSection(e.target.checked)} className="accent-emerald-600" />
              <span>শাখা (Section)</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showSession} onChange={e => setShowSession(e.target.checked)} className="accent-emerald-600" />
              <span>সেশন / শিক্ষাবর্ষ</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showRollBox} onChange={e => setShowRollBox(e.target.checked)} className="accent-emerald-600" />
              <span>বড় রোল বক্স</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showCutLines} onChange={e => setShowCutLines(e.target.checked)} className="accent-emerald-600" />
              <span>কাটিং দাগ (✂)</span>
            </label>

            <label className="flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200">
              <input type="checkbox" checked={showWatermark} onChange={e => setShowWatermark(e.target.checked)} className="accent-emerald-600" />
              <span>লোগো ওয়াটারমার্ক</span>
            </label>
          </div>
        </div>

        {/* Room Assignment & Layout Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
          {/* Left: Room Assignment */}
          <div className="p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div className="font-bold text-slate-800 mb-8 flex items-center justify-between">
              <span className="flex items-center gap-6">
                <Building2 size={16} className="text-emerald-600" />
                কক্ষ নম্বর নির্ধারণ (Room Assignment)
              </span>
              <button 
                type="button" 
                className="text-emerald-700 underline font-semibold hover:text-emerald-800"
                onClick={() => setShowRangeRoomModal(true)}
              >
                রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔
              </button>
            </div>

            <div className="flex gap-8 items-center">
              <input 
                type="text" 
                className="form-input text-xs w-36" 
                value={commonRoomInput} 
                onChange={e => setCommonRoomInput(e.target.value)}
                placeholder="যেমন: ১০১" 
              />
              <button 
                type="button" 
                className="btn btn-secondary text-xs"
                onClick={applyCommonRoom}
              >
                সবার জন্য এই রুম সেট করুন
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-6 m-0">
              টিপস: নিচে শিক্ষার্থীর নামের পাশের ঘরে সরাসরি হাত দিয়েও আলাদা আলাদা রুম পরিবর্তন করতে পারবেন।
            </p>
          </div>

          {/* Right: Cards per page & Theme */}
          <div className="p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div className="font-bold text-slate-800 mb-8 flex items-center gap-6">
              <LayoutGrid size={16} className="text-emerald-600" />
              A4 পেজে কার্ড সংখ্যা ও ডিজাইন থিম:
            </div>

            <div className="flex items-center gap-8 flex-wrap mb-8">
              <span className="text-slate-600 font-semibold">প্রিসেট:</span>
              <button 
                type="button" 
                className={`btn text-xs ${cardsPerPage === 12 && !isCustomCards ? 'btn-primary' : 'btn-secondary'}`}
                style={cardsPerPage === 12 && !isCustomCards ? { background: '#059669', borderColor: '#059669' } : {}}
                onClick={() => handleCardsPreset(12)}
              >
                ১২টি / পেজ (৩×৪)
              </button>
              <button 
                type="button" 
                className={`btn text-xs ${cardsPerPage === 8 && !isCustomCards ? 'btn-primary' : 'btn-secondary'}`}
                style={cardsPerPage === 8 && !isCustomCards ? { background: '#059669', borderColor: '#059669' } : {}}
                onClick={() => handleCardsPreset(8)}
              >
                ৮টি / পেজ (২×৪)
              </button>
              <button 
                type="button" 
                className={`btn text-xs ${cardsPerPage === 6 && !isCustomCards ? 'btn-primary' : 'btn-secondary'}`}
                style={cardsPerPage === 6 && !isCustomCards ? { background: '#059669', borderColor: '#059669' } : {}}
                onClick={() => handleCardsPreset(6)}
              >
                ৬টি / পেজ (২×৩)
              </button>

              <div className="flex items-center gap-4 ml-auto">
                <span className="text-slate-600 font-semibold">কাস্টম সংখ্যা:</span>
                <input 
                  type="number" 
                  min="1" 
                  max="24"
                  value={customCardsInput}
                  onChange={e => handleCustomCardsChange(e.target.value)}
                  className="form-input text-xs w-16 text-center font-bold"
                />
              </div>
            </div>

            <div className="flex items-center gap-12">
              <span className="text-slate-600 font-semibold">কালার থিম:</span>
              <div className="flex gap-8">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-classic'} onChange={() => setSelectedTheme('theme-classic')} />
                  <span>ক্লাসিক ব্ল্যাক</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-emerald'} onChange={() => setSelectedTheme('theme-emerald')} />
                  <span className="text-emerald-700 font-semibold">রয়্যাল গ্রিন</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-navy'} onChange={() => setSelectedTheme('theme-navy')} />
                  <span className="text-blue-800 font-semibold">নেভি ব্লু</span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-12 mt-8 pt-8 border-t border-slate-200">
              <span className="text-slate-600 font-semibold">হেডার বিন্যাস:</span>
              <div className="flex gap-8">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    name="sp_header_swap"
                    checked={headerSwap === 'logo-left'}
                    onChange={() => setHeaderSwap('logo-left')}
                  />
                  <span className="font-bold text-emerald-700">বামে লোগো, ডানে ছবি (ডিফল্ট)</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    name="sp_header_swap"
                    checked={headerSwap === 'photo-left'}
                    onChange={() => setHeaderSwap('photo-left')}
                  />
                  <span>বামে ছবি, ডানে লোগো</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Student Checklist Summary */}
        <div className="mt-14 pt-12 border-t border-slate-200 flex justify-between items-center flex-wrap gap-8 text-xs">
          <div className="flex items-center gap-12">
            <button 
              type="button" 
              className="btn btn-secondary text-xs flex items-center gap-4"
              onClick={handleSelectAll}
            >
              {selectedStudentIds.size === allStudents.length ? <CheckSquare size={14} /> : <Square size={14} />}
              <span>{selectedStudentIds.size === allStudents.length ? 'সকল নির্বাচন বাতিল' : 'সবাইকে নির্বাচন করুন'}</span>
            </button>
            <span className="font-semibold text-slate-700">
              মোট শিক্ষার্থী: <strong className="text-emerald-700">{allStudents.length}</strong> জন | 
              নির্বাচিত: <strong className="text-emerald-700">{selectedStudentIds.size}</strong> জন
              {filteredStudents.length > 0 && (
                <span className="ml-4 text-slate-500">
                  (মোট <strong>{printPages.length}</strong> টি A4 পাতা প্রিন্ট হবে)
                </span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="রোল বা নাম খুঁজুন..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="form-input text-xs pl-24 pr-8 py-4"
              />
              <Search size={14} className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          2. ROLL RANGE MODAL DIALOG (RANGE ROOM SPLITTER)
          ============================================================== */}
      {showRangeRoomModal && (
        <div className="modal-overlay no-print" style={{ zIndex: 9999 }}>
          <div className="modal-content" style={{ maxWidth: '440px', padding: '20px' }}>
            <h3 className="text-sm font-bold text-slate-800 mb-8 flex items-center gap-6">
              <Building2 size={18} className="text-emerald-600" />
              রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন
            </h3>
            <p className="text-xs text-slate-600 mb-10 leading-relaxed">
              প্রতি লাইনে <strong>রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর</strong> আকারে লিখুন:
            </p>
            <textarea 
              rows={5}
              className="form-input text-xs font-mono w-full p-8"
              value={rangeRoomText}
              onChange={e => setRangeRoomText(e.target.value)}
            />
            <div className="flex justify-end gap-8 mt-14">
              <button 
                type="button" 
                className="btn btn-secondary text-xs"
                onClick={() => setShowRangeRoomModal(false)}
              >
                বাতিল
              </button>
              <button 
                type="button" 
                className="btn btn-primary text-xs"
                style={{ background: '#059669', borderColor: '#059669' }}
                onClick={applyRangeRooms}
              >
                রুম ভাগ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================================
          3. PRINTABLE SHEETS (A4 PAGES)
          ============================================================== */}
      {loadingStudents ? (
        <div className="card text-center py-40 no-print">
          <RotateCw size={32} className="animate-spin text-emerald-600 mx-auto mb-8" />
          <p className="text-slate-600 text-sm">শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে...</p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="card text-center py-40 no-print">
          <p className="text-slate-500 text-sm">কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।</p>
        </div>
      ) : (
        <div className={`seat-plan-print-container ${selectedTheme}`}>
          {(Array.isArray(printPages) ? printPages : []).map((pageStudents, pageIndex) => (
            <div 
              key={`page-${pageIndex}`} 
              className={`seat-plan-a4-sheet ${showCutLines ? 'has-cutlines' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
                gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
                gap: cardsPerPage <= 8 ? '4.5mm' : '3.2mm',
                height: '284mm'
              }}
            >
              {(Array.isArray(pageStudents) ? pageStudents : []).map((st) => {
                const stName = st.fullName || st.user?.fullName || `${st.user?.firstName || ''} ${st.user?.lastName || ''}`.trim() || st.name || '—';
                const roll = st.currentEnrollment?.rollNumber || st.rollNumber || st.roll || '—';
                const id = st.studentId || st.admissionNumber || st._id?.substring(0, 6) || '—';
                const clsName = st.currentEnrollment?.classLevel?.name || st.classLevel?.name || st.class || '—';
                const secName = st.currentEnrollment?.section?.name || st.currentEnrollment?.section || st.section?.name || st.section || '—';
                const deptName = st.department || st.currentEnrollment?.department || 'সাধারণ';
                const roomNo = studentRooms[st._id] || commonRoomInput || '১০১';
                const photoSrc = (showPhoto && (st.photo || st.user?.photo)) ? (st.photo || st.user?.photo) : boyAvatarSvg;

                return (
                  <div key={st._id} className="seat-plan-card">
                    {/* Watermark Logo */}
                    {showWatermark && (
                      <img 
                        src="/images/madrasah_logo.png" 
                        onError={(e) => { e.currentTarget.src = logoFallbackSvg; }}
                        className="card-watermark" 
                        alt="watermark" 
                      />
                    )}

                    {/* Card Header */}
                    <div className="sp-card-header">
                      {headerSwap === 'logo-left' ? (
                        <>
                          {/* Madrasah Logo (Left) */}
                          <div className="sp-logo-wrapper">
                            <img
                              src="/images/madrasah_logo.png"
                              onError={(e) => { e.currentTarget.src = logoFallbackSvg; }}
                              alt="Logo"
                            />
                          </div>

                          {/* Institution Center */}
                          <div className="sp-center-info">
                            <div className="sp-madrasah-title">
                              {isEnglish ? 'AN-NUR ISLAMIC ACADEMY' : (madrasahInfo.madrasahName || 'আন্-নূর ইসলামিক একাডেমি')}
                            </div>
                            <div className="sp-madrasah-sub">
                              {isEnglish ? 'Shahibag, Chapainawabganj' : (madrasahInfo.address || 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ')}
                            </div>
                            <div className="sp-badge">
                              Exam Seat Plan
                            </div>
                          </div>

                          {/* Student Photo (Right) */}
                          {showPhoto ? (
                            <div className="sp-photo-wrapper">
                              <img
                                src={photoSrc}
                                onError={(e) => { e.currentTarget.src = boyAvatarSvg; }}
                                alt="Photo"
                              />
                            </div>
                          ) : (
                            <div style={{ width: '38px', height: '38px' }} />
                          )}
                        </>
                      ) : (
                        <>
                          {/* Student Photo (Left) */}
                          {showPhoto ? (
                            <div className="sp-photo-wrapper">
                              <img
                                src={photoSrc}
                                onError={(e) => { e.currentTarget.src = boyAvatarSvg; }}
                                alt="Photo"
                              />
                            </div>
                          ) : (
                            <div style={{ width: '38px', height: '38px' }} />
                          )}

                          {/* Institution Center */}
                          <div className="sp-center-info">
                            <div className="sp-madrasah-title">
                              {isEnglish ? 'AN-NUR ISLAMIC ACADEMY' : (madrasahInfo.madrasahName || 'আন্-নূর ইসলামিক একাডেমি')}
                            </div>
                            <div className="sp-madrasah-sub">
                              {isEnglish ? 'Shahibag, Chapainawabganj' : (madrasahInfo.address || 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ')}
                            </div>
                            <div className="sp-badge">
                              Exam Seat Plan
                            </div>
                          </div>

                          {/* Madrasah Logo (Right) */}
                          <div className="sp-logo-wrapper">
                            <img
                              src="/images/madrasah_logo.png"
                              onError={(e) => { e.currentTarget.src = logoFallbackSvg; }}
                              alt="Logo"
                            />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="sp-card-body">
                      <table className="sp-info-table">
                        <tbody>
                          <tr>
                            <td className="sp-lbl">{isEnglish ? 'Name' : 'নাম'}</td>
                            <td className="sp-colon">:</td>
                            <td className="sp-val" title={stName}>{stName}</td>
                          </tr>

                          {showStudentId && (
                            <tr>
                              <td className="sp-lbl">{isEnglish ? 'ID' : 'আইডি'}</td>
                              <td className="sp-colon">:</td>
                              <td className="sp-val">{id}</td>
                            </tr>
                          )}

                          {showClass && (
                            <tr>
                              <td className="sp-lbl">{isEnglish ? 'Class' : 'শ্রেণি'}</td>
                              <td className="sp-colon">:</td>
                              <td className="sp-val">{clsName}</td>
                            </tr>
                          )}

                          {showSection && secName && secName !== '—' && (
                            <tr>
                              <td className="sp-lbl">{isEnglish ? 'Section' : 'শাখা'}</td>
                              <td className="sp-colon">:</td>
                              <td className="sp-val">{secName}</td>
                            </tr>
                          )}

                          {showDepartment && deptName && (
                            <tr>
                              <td className="sp-lbl">{isEnglish ? 'Group' : 'বিভাগ'}</td>
                              <td className="sp-colon">:</td>
                              <td className="sp-val">{deptName}</td>
                            </tr>
                          )}

                          {showRoom && (
                            <tr>
                              <td className="sp-lbl">{isEnglish ? 'Room' : 'কক্ষ'}</td>
                              <td className="sp-colon">:</td>
                              <td className="sp-val font-bold text-slate-900">
                                <span className="no-print">
                                  <input 
                                    type="text" 
                                    className="border border-slate-300 rounded px-1 text-[11px] w-12"
                                    value={roomNo}
                                    onChange={(e) => {
                                      const v = e.target.value;
                                      setStudentRooms(r => ({ ...r, [st._id]: v }));
                                    }}
                                  />
                                </span>
                                <span className="print-only">{roomNo}</span>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>

                      {/* Large Roll Box (Right side matching reference image) */}
                      {showRollBox && (
                        <div className="sp-roll-wrapper">
                          <div className="sp-roll-box">
                            <div className="sp-roll-hdr">
                              {isEnglish ? 'Roll' : 'রোল / Roll'}
                            </div>
                            <div className="sp-roll-num">
                              {roll}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="sp-card-footer">
                      {showExamName && (
                        <span className="font-semibold">{customExamTitle}</span>
                      )}
                      {showSession && (
                        <span>
                          {isEnglish ? 'Session:' : 'সেশন:'}{' '}
                          {academicYear && /^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(academicYear))
                            ? new Date().getFullYear()
                            : (academicYear || new Date().getFullYear())}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* ==============================================================
          4. SCOPED CSS STYLES FOR SCREEN & EXACT PRINT A4 FIT
          ============================================================== */}
      <style>{`
        /* --- Screen Styles --- */
        .seat-plan-print-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .seat-plan-a4-sheet {
          width: 210mm;
          height: 284mm;
          max-height: 284mm;
          background: #ffffff;
          padding: 6mm;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          page-break-after: always;
        }

        .seat-plan-card {
          position: relative;
          background: #ffffff;
          border: 1.2px solid #0f172a;
          border-radius: 4px;
          padding: 5px 7px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          min-height: 0;
        }

        .has-cutlines .seat-plan-card {
          outline: 1px dashed #cbd5e1;
          outline-offset: 1.5mm;
        }

        /* Themes */
        .theme-classic .seat-plan-card {
          border-color: #0f172a;
        }

        .theme-emerald .seat-plan-card {
          border-color: #047857;
        }
        .theme-emerald .sp-madrasah-title {
          color: #047857 !important;
        }
        .theme-emerald .sp-badge {
          background: #047857 !important;
          color: #ffffff !important;
          border-color: #047857 !important;
        }
        .theme-emerald .sp-roll-hdr {
          background: #047857 !important;
          color: #ffffff !important;
        }
        .theme-emerald .sp-roll-box {
          border-color: #047857 !important;
        }

        .theme-navy .seat-plan-card {
          border-color: #1e3a8a;
        }
        .theme-navy .sp-madrasah-title {
          color: #1e3a8a !important;
        }
        .theme-navy .sp-badge {
          background: #1e3a8a !important;
          color: #ffffff !important;
          border-color: #1e3a8a !important;
        }
        .theme-navy .sp-roll-hdr {
          background: #1e3a8a !important;
          color: #ffffff !important;
        }
        .theme-navy .sp-roll-box {
          border-color: #1e3a8a !important;
        }

        /* Watermark */
        .card-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          opacity: 0.055;
          pointer-events: none;
          z-index: 1;
        }

        /* Card Header */
        .sp-card-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          border-bottom: 1px dashed #cbd5e1;
          padding-bottom: 3.5px;
          margin-bottom: 3.5px;
        }

        .sp-photo-wrapper {
          width: 42px;
          height: 48px;
          border: 1px solid #64748b;
          border-radius: 3px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .sp-photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sp-center-info {
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2px;
        }

        .sp-madrasah-title {
          font-family: 'Noto Serif Bengali', serif;
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          white-space: nowrap;
          letter-spacing: -0.2px;
        }

        .sp-madrasah-sub {
          font-size: 7.5px;
          color: #475569;
          line-height: 1.1;
          margin-top: 1px;
          white-space: nowrap;
        }

        .sp-badge {
          display: inline-block;
          font-size: 8px;
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid #0f172a;
          border-radius: 9999px;
          padding: 0.5px 7px;
          margin-top: 2px;
          line-height: 1.25;
          letter-spacing: 0.2px;
        }

        .sp-logo-wrapper {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sp-logo-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Card Body */
        .sp-card-body {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 6px;
          flex-grow: 1;
        }

        .sp-info-table {
          flex-grow: 1;
          border-collapse: collapse;
          font-size: 9.5px;
          line-height: 1.35;
        }
        .sp-info-table td {
          padding: 0.5px 0;
          vertical-align: middle;
        }

        .sp-lbl {
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
          width: 38px;
        }

        .sp-colon {
          width: 6px;
          text-align: center;
          color: #64748b;
          font-weight: 600;
        }

        .sp-val {
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 90px;
        }

        /* Roll Box (Right) */
        .sp-roll-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-roll-box {
          border: 1.2px solid #0f172a;
          border-radius: 4px;
          width: 48px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .sp-roll-hdr {
          background: #f1f5f9;
          font-size: 8px;
          font-weight: 700;
          color: #0f172a;
          padding: 1px 0;
          border-bottom: 1px solid #0f172a;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .sp-roll-num {
          font-size: 16px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.2;
          padding: 2px 0 1px 0;
          font-family: monospace, sans-serif;
        }

        /* Card Footer */
        .sp-card-footer {
          position: relative;
          z-index: 2;
          margin-top: 2.5px;
          padding-top: 2px;
          border-top: 1px dotted #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 7.5px;
          color: #64748b;
          overflow: hidden;
          white-space: nowrap;
          max-height: 16px;
          flex-shrink: 0;
        }

        .sp-card-footer span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 50%;
        }

        .print-only {
          display: none;
        }

        /* ==============================================================
           EXACT @media print RULES
           ============================================================== */
        @media print {
          @page {
            size: A4 portrait;
            margin: 5mm;
          }

          body {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide entire website UI, sidebars, headers, banners */
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

          .print-only {
            display: inline !important;
          }

          .seat-plan-print-container {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            gap: 0 !important;
          }

          .seat-plan-a4-sheet {
            width: 100% !important;
            min-height: 100vh !important;
            height: 284mm !important;
            box-shadow: none !important;
            border: none !important;
            padding: 2mm !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .seat-plan-card {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
