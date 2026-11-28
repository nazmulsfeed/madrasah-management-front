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
import { getMadrasahInfo, toBnNumber, parseBnToEnNumber, getNumericRoll } from '../../utils/helpers';
import { matchesSearchQuery } from '../../utils/searchUtils';
import WholeWordToggle from '../common/WholeWordToggle';

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

  const safeClasses = useMemo(() => {
    if (Array.isArray(classes)) return classes;
    if (classes && Array.isArray(classes.classes)) return classes.classes;
    return [];
  }, [classes]);

  // Exams and classes states
  const [examsList, setExamsList] = useState([]);
  const [activeExamId, setActiveExamId] = useState(selectedExam?._id || '');
  const [selectedClassId, setSelectedClassId] = useState(selectedExam?.classLevel?._id || selectedExam?.classLevel || '');
  const [sectionsList, setSectionsList] = useState([]);
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [academicYear, setAcademicYear] = useState(selectedExam?.academicYear || '2026');
  const [customExamTitle, setCustomExamTitle] = useState(selectedExam?.name || 'বার্ষিক পরীক্ষা - ২০২৬');

  // Students loaded from database
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState(new Set());
  const [studentRooms, setStudentRooms] = useState({}); // { [studentId]: '101' }
  const [searchQuery, setSearchQuery] = useState('');
  const [wholeWords, setWholeWords] = useState(true);

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
  const [cardsPerPage, setCardsPerPage] = useState(10); // default custom 10 (2x5)
  const [isCustomCards, setIsCustomCards] = useState(true);
  const [customCardsInput, setCustomCardsInput] = useState('10');
  const [selectedTheme, setSelectedTheme] = useState('theme-classic'); // 'theme-classic' | 'theme-emerald' | 'theme-navy'
  const [headerSwap, setHeaderSwap] = useState('logo-left'); // 'logo-left' | 'photo-left'
  const [isEnglish, setIsEnglish] = useState(false);
  const [cardFontScale, setCardFontScale] = useState(() => {
    try {
      const saved = parseInt(localStorage.getItem('seat_plan_font_scale'), 10);
      if (!isNaN(saved) && saved >= 80 && saved <= 140) return saved;
    } catch (_) {}
    return 100;
  });

  useEffect(() => {
    try {
      localStorage.setItem('seat_plan_font_scale', String(cardFontScale));
    } catch (_) {}
  }, [cardFontScale]);

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

  // Fetch sections when class changes
  useEffect(() => {
    if (!selectedClassId) {
      setSectionsList([]);
      return;
    }
    const fetchSections = async () => {
      try {
        const res = await api.get(`/students/sections?classLevel=${selectedClassId}`);
        const raw = res.data?.data?.sections || res.data?.sections || res.data?.data || [];
        setSectionsList(Array.isArray(raw) ? raw : []);
      } catch (e) {
        console.warn('Failed to load sections:', e);
        setSectionsList([]);
      }
    };
    fetchSections();
  }, [selectedClassId]);

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
      const name = st.fullName || st.user?.fullName || `${st.user?.firstName || ''} ${st.user?.lastName || ''}`.trim() || st.name || '';
      const roll = String(st.currentEnrollment?.rollNumber || st.rollNumber || st.roll || '');
      const id = String(st.studentId || st.admissionNumber || '');
      return matchesSearchQuery([name, roll, id], searchQuery, wholeWords);
    });
  }, [allStudents, selectedStudentIds, searchQuery, wholeWords]);

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
      <div className="card no-print sp-toolbar-card">
        {/* Header Bar */}
        <div className="sp-header-row">
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <LayoutGrid size={20} style={{ color: '#059669' }} />
              <span>পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)</span>
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '2px 0 0 0' }}>
              ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button 
              type="button" 
              className="btn btn-secondary"
              style={{ fontSize: '0.78rem', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              onClick={() => setIsEnglish(!isEnglish)}
            >
              🌐 {isEnglish ? 'বাংলা সংস্করণ' : 'English Mode'}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              style={{ fontSize: '0.78rem', padding: '6px 12px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              onClick={fetchStudents}
              disabled={loadingStudents}
            >
              <RotateCw size={14} className={loadingStudents ? 'animate-spin' : ''} />
              <span>রিফ্রেশ</span>
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              style={{ background: '#059669', borderColor: '#059669', fontSize: '0.8rem', fontWeight: 700, padding: '7px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              onClick={() => window.print()}
            >
              <Printer size={15} />
              <span>প্রিন্ট করুন (Print A4)</span>
            </button>
          </div>
        </div>

        {/* Filters Section (Exam, Class, Section, Department) */}
        <div className="sp-filters-grid">
          <div>
            <label className="sp-filter-lbl">পরীক্ষা নির্বাচন (Exam):</label>
            <select 
              className="form-input"
              style={{ fontSize: '0.8rem', padding: '6px 10px' }}
              value={activeExamId}
              onChange={(e) => setActiveExamId(e.target.value)}
            >
              <option value="">-- পরীক্ষা নির্বাচন করুন --</option>
              {(Array.isArray(examsList) ? examsList : []).map(ex => {
                const yr = ex.academicYear && !/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(ex.academicYear))
                  ? ex.academicYear
                  : new Date().getFullYear();
                return (
                  <option key={ex._id} value={ex._id}>
                    {ex.name} ({yr})
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="sp-filter-lbl">শ্রেণি (Class Level):</label>
            <select 
              className="form-input"
              style={{ fontSize: '0.8rem', padding: '6px 10px' }}
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
            <label className="sp-filter-lbl">শাখা (Section):</label>
            <select 
              className="form-input"
              style={{ fontSize: '0.8rem', padding: '6px 10px' }}
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
            <label className="sp-filter-lbl">বিভাগ / গ্রুপ (Department):</label>
            <select 
              className="form-input"
              style={{ fontSize: '0.8rem', padding: '6px 10px' }}
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

        {/* Custom Field Toggles (Compact Pills) */}
        <div className="sp-toggles-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px', fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>
            <Sliders size={13} style={{ color: '#059669' }} />
            <span>কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):</span>
          </div>

          <div className="sp-toggles-wrap">
            {[
              { checked: showRoom, onChange: setShowRoom, label: 'কক্ষ নম্বর' },
              { checked: showExamName, onChange: setShowExamName, label: 'পরীক্ষার নাম' },
              { checked: showDepartment, onChange: setShowDepartment, label: 'বিভাগ / গ্রুপ' },
              { checked: showPhoto, onChange: setShowPhoto, label: 'শিক্ষার্থীর ছবি' },
              { checked: showStudentId, onChange: setShowStudentId, label: 'আইডি নম্বর' },
              { checked: showClass, onChange: setShowClass, label: 'শ্রেণি' },
              { checked: showSection, onChange: setShowSection, label: 'শাখা' },
              { checked: showSession, onChange: setShowSession, label: 'সেশন' },
              { checked: showRollBox, onChange: setShowRollBox, label: 'বড় রোল বক্স' },
              { checked: showCutLines, onChange: setShowCutLines, label: 'কাটিং দাগ (✂)' },
              { checked: showWatermark, onChange: setShowWatermark, label: 'লোগো ওয়াটারমার্ক' }
            ].map((item, idx) => (
              <label key={idx} className={`sp-toggle-pill ${item.checked ? 'active' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={e => item.onChange(e.target.checked)}
                  style={{ accentColor: '#059669', margin: 0 }}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Room Assignment & Layout Engine */}
        <div className="sp-controls-grid">
          {/* Left: Room Assignment */}
          <div className="sp-sub-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#1e293b', fontSize: '0.8rem' }}>
                <Building2 size={15} style={{ color: '#059669' }} />
                কক্ষ নম্বর নির্ধারণ (Room)
              </span>
              <button 
                type="button" 
                style={{ background: 'none', border: 'none', color: '#047857', textDecoration: 'underline', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer', padding: 0 }}
                onClick={() => setShowRangeRoomModal(true)}
              >
                রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input 
                type="text" 
                className="form-input"
                style={{ width: '90px', fontSize: '0.8rem', padding: '5px 8px', textAlign: 'center', fontWeight: 700 }}
                value={commonRoomInput} 
                onChange={e => setCommonRoomInput(e.target.value)}
                placeholder="যেমন: ১০১" 
              />
              <button 
                type="button" 
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                onClick={applyCommonRoom}
              >
                সবার জন্য এই রুম সেট করুন
              </button>
            </div>
            <p style={{ fontSize: '0.72rem', color: '#64748b', margin: '6px 0 0 0' }}>
              টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।
            </p>
          </div>

          {/* Right: Cards per page, Font Size & Theme */}
          <div className="sp-sub-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#1e293b', fontSize: '0.8rem' }}>
                <LayoutGrid size={15} style={{ color: '#059669' }} />
                A4 পেজে কার্ড ও ফন্ট সাইজ:
              </span>

              {/* Font Size Controls */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '2px 6px' }}>
                <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.74rem', marginRight: '2px' }}>ফন্ট:</span>
                <button
                  type="button"
                  onClick={() => setCardFontScale(s => Math.max(80, s - 5))}
                  style={{ padding: '2px 7px', borderRadius: '4px', border: 'none', background: '#f1f5f9', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', color: '#334155' }}
                  title="ফন্ট ছোট করুন"
                >
                  A-
                </button>
                <span style={{ fontWeight: 700, color: '#047857', minWidth: '36px', textAlign: 'center', fontSize: '0.75rem' }}>{cardFontScale}%</span>
                <button
                  type="button"
                  onClick={() => setCardFontScale(s => Math.min(140, s + 5))}
                  style={{ padding: '2px 7px', borderRadius: '4px', border: 'none', background: '#f1f5f9', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', color: '#334155' }}
                  title="ফন্ট বড় করুন"
                >
                  A+
                </button>
                {cardFontScale !== 100 && (
                  <button
                    type="button"
                    onClick={() => setCardFontScale(100)}
                    style={{ padding: '2px 7px', borderRadius: '4px', border: 'none', background: '#ecfdf5', fontWeight: 600, fontSize: '0.72rem', cursor: 'pointer', color: '#047857' }}
                    title="ডিফল্ট ফন্ট সাইজ"
                  >
                    রিসেট
                  </button>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.75rem' }}>প্রিসেট:</span>
              {[
                { val: 10, label: '১০টি (২×৫)' },
                { val: 12, label: '১২টি (৩×৪)' },
                { val: 8, label: '৮টি (২×৪)' },
                { val: 6, label: '৬টি (২×৩)' }
              ].map(p => {
                const active = cardsPerPage === p.val && !isCustomCards;
                return (
                  <button
                    key={p.val}
                    type="button"
                    className={`btn ${active ? 'btn-primary' : 'btn-secondary'}`}
                    style={{
                      fontSize: '0.74rem',
                      padding: '4px 9px',
                      ...(active ? { background: '#059669', borderColor: '#059669' } : {})
                    }}
                    onClick={() => handleCardsPreset(p.val)}
                  >
                    {p.label}
                  </button>
                );
              })}

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
                <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.75rem' }}>কাস্টম:</span>
                <input 
                  type="number" 
                  min="1" 
                  max="24"
                  value={customCardsInput}
                  onChange={e => handleCustomCardsChange(e.target.value)}
                  className="form-input"
                  style={{ width: '54px', fontSize: '0.78rem', padding: '4px 6px', textAlign: 'center', fontWeight: 700 }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', paddingTop: '6px', borderTop: '1px solid #e2e8f0', fontSize: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: '#475569', fontWeight: 600 }}>থিম:</span>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-classic'} onChange={() => setSelectedTheme('theme-classic')} />
                  <span>ক্লাসিক</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#047857', fontWeight: 600 }}>
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-emerald'} onChange={() => setSelectedTheme('theme-emerald')} />
                  <span>গ্রিন</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#1e40af', fontWeight: 600 }}>
                  <input type="radio" name="sp_theme" checked={selectedTheme === 'theme-navy'} onChange={() => setSelectedTheme('theme-navy')} />
                  <span>নেভি</span>
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: '#475569', fontWeight: 600 }}>বিন্যাস:</span>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <input type="radio" name="sp_header_swap" checked={headerSwap === 'logo-left'} onChange={() => setHeaderSwap('logo-left')} />
                  <span style={{ color: '#047857', fontWeight: 600 }}>বামে লোগো</span>
                </label>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <input type="radio" name="sp_header_swap" checked={headerSwap === 'photo-left'} onChange={() => setHeaderSwap('photo-left')} />
                  <span>বামে ছবি</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Student Checklist Summary */}
        <div className="sp-summary-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-secondary"
              style={{ fontSize: '0.78rem', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              onClick={handleSelectAll}
            >
              {selectedStudentIds.size === allStudents.length ? <CheckSquare size={14} /> : <Square size={14} />}
              <span>{selectedStudentIds.size === allStudents.length ? 'সকল নির্বাচন বাতিল' : 'সবাইকে নির্বাচন করুন'}</span>
            </button>
            <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.8rem' }}>
              মোট শিক্ষার্থী: <strong style={{ color: '#047857' }}>{allStudents.length}</strong> জন | 
              নির্বাচিত: <strong style={{ color: '#047857' }}>{selectedStudentIds.size}</strong> জন
              {filteredStudents.length > 0 && (
                <span style={{ marginLeft: '6px', color: '#64748b' }}>
                  (মোট <strong>{printPages.length}</strong> টি A4 পাতা প্রিন্ট হবে)
                </span>
              )}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', minWidth: '200px' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input 
                type="text" 
                placeholder="রোল বা নাম খুঁজুন..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.8rem', padding: '5px 10px 5px 30px', width: '100%' }}
              />
            </div>
            <WholeWordToggle checked={wholeWords} onChange={setWholeWords} />
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
                              {isEnglish ? 'Exam Seat Plan' : 'পরীক্ষার আসন বিন্যাস'}
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
                              {isEnglish ? 'Exam Seat Plan' : 'পরীক্ষার আসন বিন্যাস'}
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
                              {isEnglish ? 'Roll' : 'রোল'}
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
        .seat-plan-workspace {
          --sp-font-scale: ${cardFontScale / 100};
        }

        .sp-toolbar-card {
          border: 1px solid #cbd5e1;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 16px 20px;
          margin-bottom: 18px;
          border-radius: 12px;
        }
        .sp-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-filter-lbl {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 4px;
        }
        .sp-toggles-section {
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-toggles-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .sp-toggle-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          color: #334155;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }
        .sp-toggle-pill.active {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
          font-weight: 600;
        }
        .sp-controls-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 12px;
          padding: 12px 0;
        }
        .sp-sub-box {
          padding: 10px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        .sp-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
        }

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
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1.5px solid #0f172a;
          border-radius: 6px;
          padding: 6px 9px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          min-height: 0;
          font-family: 'Noto Sans Bengali', sans-serif !important;
        }
        .seat-plan-card * {
          font-family: 'Noto Sans Bengali', sans-serif !important;
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
          width: 44px;
          height: 50px;
          border: 1.2px solid #64748b;
          border-radius: 4px;
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
          padding: 0 3px;
        }

        .sp-madrasah-title {
          font-size: calc(14.5px * var(--sp-font-scale, 1));
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          white-space: nowrap;
          letter-spacing: -0.2px;
        }

        .sp-madrasah-sub {
          font-size: calc(10px * var(--sp-font-scale, 1));
          color: #475569;
          line-height: 1.15;
          margin-top: 1px;
          white-space: nowrap;
        }

        .sp-badge {
          display: inline-block;
          font-size: calc(10.5px * var(--sp-font-scale, 1));
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid #0f172a;
          border-radius: 9999px;
          padding: 1px 10px;
          margin-top: 2px;
          line-height: 1.25;
          letter-spacing: 0.2px;
        }

        .sp-logo-wrapper {
          width: 40px;
          height: 40px;
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
          gap: 8px;
          flex-grow: 1;
        }

        .sp-info-table {
          flex-grow: 1;
          border-collapse: collapse;
          font-size: calc(12.8px * var(--sp-font-scale, 1));
          line-height: 1.3;
        }
        .sp-info-table td {
          padding: 0.5px 0;
          vertical-align: middle;
        }

        .sp-lbl {
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
          width: 48px;
        }

        .sp-colon {
          width: 8px;
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
          max-width: 145px;
        }

        /* Roll Box (Right) */
        .sp-roll-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-roll-box {
          border: 1.5px solid #0f172a;
          border-radius: 5px;
          width: 62px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .sp-roll-hdr {
          background: #f1f5f9;
          font-size: calc(10.5px * var(--sp-font-scale, 1));
          font-weight: 800;
          color: #0f172a;
          padding: 2px 0;
          border-bottom: 1px solid #0f172a;
          letter-spacing: 0.3px;
        }

        .sp-roll-num {
          font-size: calc(21.5px * var(--sp-font-scale, 1));
          font-weight: 900;
          color: #0f172a;
          line-height: 1.18;
          padding: 3px 0 2px 0;
        }

        /* Card Footer */
        .sp-card-footer {
          position: relative;
          z-index: 2;
          margin-top: 2px;
          padding-top: 2px;
          border-top: 1px dotted #cbd5e1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: calc(10px * var(--sp-font-scale, 1));
          color: #475569;
          overflow: hidden;
          white-space: nowrap;
          max-height: 18px;
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
