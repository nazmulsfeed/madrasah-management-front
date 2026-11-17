import { useState, useEffect, useMemo } from 'react';
import { 
  Printer, CheckSquare, Square, Search, RefreshCw, Eye, 
  Settings2, User, Layers, Calendar, Check, AlertCircle, FileText
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, formatDateDDMMYYYY, toBnNumber } from '../../utils/helpers';

export default function AdmitCardGenerator({ exams = [], classes = [] }) {
  const { user } = useAuthStore();
  const madrasah = getMadrasahInfo(user);

  // Filter States
  const [selectedExamId, setSelectedExamId] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedStream, setSelectedStream] = useState('all');
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Batch Selection & Custom Data
  const [selectedStudentIds, setSelectedStudentIds] = useState(new Set());
  const [commonRoomNo, setCommonRoomNo] = useState('১০২');
  const [studentRooms, setStudentRooms] = useState({}); // { studentId: '102' }
  const [issueDate, setIssueDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  // Display Configuration
  const [langMode, setLangMode] = useState('en'); // 'en' | 'bn' | 'bi'
  const [cardsPerPage, setCardsPerPage] = useState(2); // 1, 2, 4, 6 or custom
  const [customCardsInput, setCustomCardsInput] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [previewMode, setPreviewMode] = useState(false); // live preview drawer or view

  // Field Visibility Toggles (Checkboxes)
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

  // Set default exam if available
  useEffect(() => {
    if (exams.length > 0 && !selectedExamId) {
      setSelectedExamId(exams[0]._id || exams[0].id || '');
    }
  }, [exams, selectedExamId]);

  // Load sections when class changes
  useEffect(() => {
    if (!selectedClassId) {
      setSections([]);
      setSelectedSection('');
      return;
    }
    const fetchSections = async () => {
      try {
        const res = await api.get(`/students/sections?classLevel=${selectedClassId}`);
        const data = res.data?.sections || res.data || [];
        setSections(data);
        if (data.length > 0) {
          setSelectedSection(data[0].name || data[0] || '');
        } else {
          setSelectedSection('');
        }
      } catch (err) {
        setSections([]);
      }
    };
    fetchSections();
  }, [selectedClassId]);

  // Fetch students
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

      // Sort by roll number ascending
      studentList.sort((a, b) => {
        const rollA = parseInt(a.currentEnrollment?.rollNumber || a.rollNumber || a.roll || '999999', 10);
        const rollB = parseInt(b.currentEnrollment?.rollNumber || b.rollNumber || b.roll || '999999', 10);
        return rollA - rollB;
      });

      setStudents(studentList);
      // Select all by default
      const allIds = new Set(studentList.map(s => s._id || s.id));
      setSelectedStudentIds(allIds);
      
      // Initialize room numbers
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

  // Apply common room number to all selected
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
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setSelectedStudentIds(updated);
  };

  // Filter students based on search query
  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) return students;
    const q = searchQuery.toLowerCase();
    return students.filter(s => {
      const name = (s.user?.name || s.name || '').toLowerCase();
      const roll = (s.currentEnrollment?.rollNumber || s.rollNumber || s.roll || '').toString();
      const sid = (s.studentId || '').toLowerCase();
      return name.includes(q) || roll.includes(q) || sid.includes(q);
    });
  }, [students, searchQuery]);

  // Selected student objects
  const selectedStudentsList = useMemo(() => {
    return students.filter(s => selectedStudentIds.has(s._id || s.id));
  }, [students, selectedStudentIds]);

  // Selected exam object
  const currentExam = useMemo(() => {
    return exams.find(e => (e._id || e.id) === selectedExamId) || null;
  }, [exams, selectedExamId]);

  // Selected class object
  const currentClass = useMemo(() => {
    return classes.find(c => (c._id || c.id) === selectedClassId) || null;
  }, [classes, selectedClassId]);

  // Chunk students for print pages
  const studentPages = useMemo(() => {
    const pages = [];
    const count = parseInt(cardsPerPage, 10) || 2;
    for (let i = 0; i < selectedStudentsList.length; i += count) {
      pages.push(selectedStudentsList.slice(i, i + count));
    }
    return pages;
  }, [selectedStudentsList, cardsPerPage]);

  // Trigger Print Window
  const handlePrint = () => {
    if (selectedStudentsList.length === 0) {
      alert('অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।');
      return;
    }

    const printWin = window.open('', '_blank', 'width=1000,height=800');
    if (!printWin) {
      alert('পপআপ ব্লক করা আছে! অনুগ্রহ করে ব্রাউজার থেকে পপআপ অ্যালাউ করুন।');
      return;
    }

    const examTitle = currentExam ? (currentExam.name || currentExam.title) : 'Annual Examination 2026';
    const className = currentClass ? (currentClass.name || currentClass.banglaName || currentClass.code) : '';
    const origin = window.location.origin;

    const stylesHtml = `
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #ffffff;
          color: #000000;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        @page {
          size: A4 portrait;
          margin: 6mm 6mm 6mm 6mm;
        }
        .a4-page-sheet {
          width: 100%;
          min-height: 285mm;
          page-break-after: always;
          break-after: page;
          box-sizing: border-box;
          display: grid;
          background: #ffffff;
          margin-bottom: 20px;
        }
        @media print {
          .a4-page-sheet { margin-bottom: 0 !important; }
          .no-print { display: none !important; }
        }

        /* Grid Layouts */
        .layout-1 .a4-page-sheet {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-content: center;
          justify-items: center;
          padding: 10mm;
        }
        .layout-1 .admit-card {
          width: 184mm;
          min-height: 124mm;
          padding: 6mm;
        }

        .layout-2 .a4-page-sheet {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
          row-gap: 6mm;
          padding: 6mm 8mm;
        }
        .layout-2 .admit-card {
          width: 186mm;
          min-height: 126mm;
          padding: 4.5mm;
        }

        .layout-4 .a4-page-sheet {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 4mm 5mm;
          padding: 5mm 6mm;
        }
        .layout-4 .admit-card {
          width: 100%;
          min-height: 132mm;
          padding: 3.5mm;
        }

        .layout-6 .a4-page-sheet {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 3mm 4mm;
          padding: 4mm 5mm;
        }
        .layout-6 .admit-card {
          width: 100%;
          min-height: 89mm;
          padding: 2.5mm;
        }

        /* Admit Card Component */
        .admit-card {
          background: #ffffff;
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
          padding: 3mm 4.5mm 3mm 4.5mm;
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

        /* Header */
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

        /* Badge & Date */
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

        /* Details */
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

        /* Signatures (NEVER CUT OFF) */
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

        /* 6 cards scale */
        .layout-6 .inst-name { font-size: 11pt; }
        .layout-6 .inst-sub { font-size: 6.5pt; }
        .layout-6 .card-logo { width: 9.5mm; height: 9.5mm; }
        .layout-6 .card-titles { padding-left: 10mm; padding-right: 10mm; }
        .layout-6 .admit-pill { font-size: 7.8pt; padding: 0.5mm 4.5mm; }
        .layout-6 .detail-row { font-size: 7pt; line-height: 1.15; }
        .layout-6 .detail-label { min-width: 15mm; }
        .layout-6 .student-photo-box { width: 16mm; height: 20mm; }
        .layout-6 .permission-statement { font-size: 7pt; margin: 0.5mm 0; }
        .layout-6 .signature-svg { height: 6.5mm; }
        .layout-6 .sig-title { font-size: 6.5pt; }
        .layout-6 .sig-name { font-size: 6.2pt; }
      </style>
    `;

    // Render cards HTML
    let bodyHtml = `<div class="layout-${cardsPerPage}">`;

    studentPages.forEach((pageStudents) => {
      bodyHtml += `<div class="a4-page-sheet">`;
      pageStudents.forEach((student) => {
        const sid = student._id || student.id;
        const sName = student.user?.name || student.name || 'MD. STUDENT';
        const sRoll = student.currentEnrollment?.rollNumber || student.rollNumber || student.roll || '—';
        const sId = student.studentId || student.admissionNumber || '—';
        const sSection = student.currentEnrollment?.section || student.section || selectedSection || '—';
        const sGroup = student.department || student.stream || 'All';
        const sRoom = studentRooms[sid] || commonRoomNo || '১০২';
        const sPhoto = student.photo || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120' fill='%2394a3b8'><rect width='100' height='120' fill='%23f1f5f9'/><circle cx='50' cy='42' r='22' fill='%23cbd5e1'/><path d='M20 105 C20 75 35 68 50 68 C65 68 80 75 80 105 Z' fill='%2394a3b8'/><rect x='34' y='18' width='32' height='12' rx='6' fill='%23ffffff' stroke='%23cbd5e1'/></svg>";

        bodyHtml += `
          <div class="admit-card">
            <div class="admit-card-inner-frame">
              <img src="${origin}/images/madrasah_logo.png" onerror="this.src='/images/madrasah_logo.png'" class="card-watermark" alt="Watermark" />
              
              <div class="card-content">
                <div class="card-header">
                  <img src="${origin}/images/madrasah_logo.png" onerror="this.src='/images/madrasah_logo.png'" class="card-logo" alt="Logo" />
                  <div class="card-titles">
                    <div class="inst-name">${langMode === 'bn' ? madrasah.madrasahName : 'AN-NUR ISLAMIC ACADEMY'}</div>
                    <div class="inst-sub">${langMode === 'bn' ? (madrasah.address || 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর') : 'Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj'}</div>
                  </div>
                </div>

                <div class="badge-date-row">
                  <div class="admit-pill">${langMode === 'bn' ? 'প্রবেশপত্র (Admit Card)' : 'Admit Card'}</div>
                  ${fieldToggles.issueDate ? `
                    <div class="issue-date-label">
                      <span>${langMode === 'bn' ? 'ইস্যুর তারিখ:' : 'Issue Date:'}</span> <span>${formatDateDDMMYYYY(issueDate)}</span>
                    </div>
                  ` : ''}
                </div>

                <div class="student-details-wrapper">
                  <div class="info-columns-container">
                    <div class="detail-row">
                      <span class="detail-label">${langMode === 'bn' ? 'নাম' : 'Name'}</span>
                      <span class="detail-colon">:</span>
                      <span class="detail-val uppercase">${sName}</span>
                    </div>

                    ${fieldToggles.group ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'গ্রুপ/বিভাগ' : 'Group'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">${sGroup}</span>
                      </div>
                    ` : ''}

                    ${fieldToggles.studentId ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'ছাত্র আইডি' : 'Student ID'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">${sId}</span>
                      </div>
                    ` : ''}

                    ${fieldToggles.room ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'কক্ষ নম্বর' : 'Room No'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val room-badge">${sRoom}</span>
                      </div>
                    ` : ''}

                    <div class="detail-row">
                      <span class="detail-label">${langMode === 'bn' ? 'রোল নং' : 'Roll'}</span>
                      <span class="detail-colon">:</span>
                      <span class="detail-val">${sRoll}</span>
                    </div>

                    ${fieldToggles.shift ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'শিফট' : 'Shift'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">Morning</span>
                      </div>
                    ` : ''}

                    ${fieldToggles.version ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'ভার্সন' : 'Version'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">Bangla</span>
                      </div>
                    ` : ''}

                    ${fieldToggles.session ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'সেশন' : 'Session'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">${new Date().getFullYear()}</span>
                      </div>
                    ` : ''}

                    <div class="detail-row">
                      <span class="detail-label">${langMode === 'bn' ? 'শ্রেণি' : 'Class'}</span>
                      <span class="detail-colon">:</span>
                      <span class="detail-val">${className}</span>
                    </div>

                    ${fieldToggles.section ? `
                      <div class="detail-row">
                        <span class="detail-label">${langMode === 'bn' ? 'শাখা' : 'Section'}</span>
                        <span class="detail-colon">:</span>
                        <span class="detail-val">${sSection}</span>
                      </div>
                    ` : ''}
                  </div>

                  ${fieldToggles.photo ? `
                    <div class="student-photo-box">
                      <img src="${sPhoto}" alt="Photo" />
                    </div>
                  ` : ''}
                </div>

                ${fieldToggles.exam ? `
                  <div class="permission-statement">
                    <span>${langMode === 'bn' ? 'কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:' : 'has been permitted to sit for the'}</span>
                    <span class="exam-name">${examTitle}</span>
                  </div>
                ` : ''}

                <div class="signatures-row">
                  ${fieldToggles.teacherSig ? `
                    <div class="signature-block">
                      <svg class="signature-svg" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28 28C45 26 80 20 110 32" stroke="#111827" stroke-width="1.8" stroke-linecap="round"/>
                      </svg>
                      <div class="sig-line"></div>
                      <div class="sig-title">${langMode === 'bn' ? 'শ্রেণি শিক্ষক' : 'Class Teacher'}</div>
                    </div>
                  ` : '<div></div>'}

                  ${fieldToggles.principalSig ? `
                    <div class="signature-block">
                      <svg class="signature-svg" viewBox="0 0 180 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M60 48C85 45 125 42 150 46" stroke="#111827" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                      <div class="sig-line"></div>
                      <div class="sig-name">MD. RAFIQUL ISLAM</div>
                      <div class="sig-title">${langMode === 'bn' ? 'মুহতামিম / প্রতিষ্ঠান প্রধান' : 'Head Teacher (In-charge)'}</div>
                    </div>
                  ` : '<div></div>'}
                </div>

              </div>
            </div>
          </div>
        `;
      });
      bodyHtml += `</div>`; // end a4-page-sheet
    });
    bodyHtml += `</div>`; // end layout

    printWin.document.open();
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Admit Cards — ${examTitle}</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          ${stylesHtml}
        </head>
        <body>
          ${bodyHtml}
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWin.document.close();
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header Filter Controls */}
      <div className="card p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-600" />
              প্রবেশপত্র জেনারেটর (Batch Admit Card Generator)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              পরীক্ষা ও শ্রেণি নির্বাচন করে এক ক্লিকে পুরো ক্লাসের শিক্ষার্থীদের প্রবেশপত্র তৈরি ও প্রিন্ট করুন।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Language Selector */}
            <div className="inline-flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg text-xs font-semibold">
              <button
                type="button"
                className={`px-3 py-1.5 rounded-md transition-all ${langMode === 'en' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
                onClick={() => setLangMode('en')}
              >
                English
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 rounded-md transition-all ${langMode === 'bn' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
                onClick={() => setLangMode('bn')}
              >
                বাংলা
              </button>
            </div>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              disabled={selectedStudentsList.length === 0}
              className="btn btn-primary flex items-center gap-2 px-5 py-2 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm disabled:opacity-50"
            >
              <Printer className="w-4 h-4" />
              প্রিন্ট করুন ({selectedStudentsList.length} জন)
            </button>
          </div>
        </div>

        {/* Dropdowns Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              পরীক্ষা নির্বাচন করুন *
            </label>
            <select
              value={selectedExamId}
              onChange={(e) => setSelectedExamId(e.target.value)}
              className="w-full text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 p-2"
            >
              {exams.map(e => (
                <option key={e._id || e.id} value={e._id || e.id}>
                  {e.name || e.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              শ্রেণি / জামাত *
            </label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="w-full text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 p-2"
            >
              <option value="">শ্রেণি নির্বাচন করুন</option>
              {classes.map(c => (
                <option key={c._id || c.id} value={c._id || c.id}>
                  {c.name || c.banglaName || c.code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              শাখা (Section)
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 p-2"
            >
              <option value="all">সকল শাখা</option>
              {sections.map(s => (
                <option key={s.name || s} value={s.name || s}>
                  {s.name || s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
              বিভাগ / স্ট্রীম
            </label>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 p-2"
            >
              <option value="all">সকল বিভাগ (All)</option>
              <option value="noorani">নূরানী বিভাগ</option>
              <option value="najera">নাজেরা বিভাগ</option>
              <option value="hifz">হিফজ বিভাগ</option>
              <option value="kitab">কিতাব বিভাগ</option>
              <option value="general">জেনারেল / স্কুল</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Print Configuration & Field Checkboxes Bar */}
      <div className="card p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        
        {/* Layout Selector: 1, 2, 4, 6 or Custom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              প্রতি A4 পেজে কার্ড সংখ্যা:
            </span>
            <div className="inline-flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg text-xs font-semibold">
              {[1, 2, 4, 6].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCardsPerPage(num)}
                  className={`px-3 py-1.5 rounded-md transition-all ${cardsPerPage === num ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  {num}টি কার্ড
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="flex items-center gap-1.5 ml-2">
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
                className="w-16 text-xs p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center"
              />
              <span className="text-xs text-slate-500">টি/পেজ</span>
            </div>
          </div>

          {/* Room Number Global Assign */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
              কক্ষ নম্বর (Room No):
            </span>
            <input
              type="text"
              value={commonRoomNo}
              onChange={(e) => setCommonRoomNo(e.target.value)}
              placeholder="যেমন: ১০২"
              className="w-24 text-xs font-bold p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center"
            />
            <button
              type="button"
              onClick={applyCommonRoomToAll}
              className="btn btn-secondary text-xs px-2.5 py-1.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200"
              title="নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বর বসান"
            >
              সবাইকে দিন
            </button>
          </div>
        </div>

        {/* Field Checkboxes (User requested: কক্ষ নম্বর, পরীক্ষা, বিভাগ ইত্যাদি টিক দিয়ে নেওয়ার অপশন) */}
        <div>
          <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-2 flex items-center gap-1.5">
            <Settings2 className="w-3.5 h-3.5 text-sky-600" />
            কার্ডে প্রদর্শনের উপাদানসমূহ (টিক দিয়ে সিলেক্ট করুন):
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            {[
              { key: 'room', label: 'কক্ষ নম্বর (Room No)' },
              { key: 'exam', label: 'পরীক্ষার নাম (Exam Name)' },
              { key: 'group', label: 'বিভাগ / গ্রুপ (Group)' },
              { key: 'section', label: 'শাখা (Section)' },
              { key: 'version', label: 'ভার্সন (Version)' },
              { key: 'shift', label: 'শিফট (Shift)' },
              { key: 'session', label: 'সেশন / শিক্ষাবর্ষ' },
              { key: 'studentId', label: 'ছাত্র আইডি (Student ID)' },
              { key: 'photo', label: 'শিক্ষার্থীর ছবি (Photo)' },
              { key: 'teacherSig', label: 'শ্রেণি শিক্ষক স্বাক্ষর' },
              { key: 'principalSig', label: 'প্রতিষ্ঠান প্রধান স্বাক্ষর' },
              { key: 'issueDate', label: 'ইস্যুর তারিখ (Issue Date)' }
            ].map(item => (
              <label key={item.key} className="inline-flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={fieldToggles[item.key]}
                  onChange={(e) => setFieldToggles(prev => ({ ...prev, [item.key]: e.target.checked }))}
                  className="rounded text-sky-600 focus:ring-sky-500 w-3.5 h-3.5"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Students Selection Table */}
      <div className="card p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleToggleSelectAll}
              className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-3 py-1.5 rounded-lg border border-sky-200 dark:border-sky-800"
            >
              {selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0 ? (
                <CheckSquare className="w-4 h-4" />
              ) : (
                <Square className="w-4 h-4" />
              )}
              {selectedStudentIds.size === filteredStudents.length && filteredStudents.length > 0 ? 'সবাইকে আনসিলেক্ট করুন' : 'সবাইকে নির্বাচন করুন'}
            </button>

            <span className="text-xs text-slate-500">
              মোট <b>{filteredStudents.length}</b> জনের মধ্যে <b>{selectedStudentIds.size}</b> জন নির্বাচিত
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">
              (মোট {studentPages.length}টি A4 পেজ প্রিন্ট হবে)
            </span>
          </div>

          <div className="w-64 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="নাম, রোল বা আইডি খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Table */}
        {loadingStudents ? (
          <div className="py-12 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-sky-600" />
            শিক্ষার্থীদের তালিকা লোড হচ্ছে...
          </div>
        ) : !selectedClassId ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            প্রবেশপত্র তৈরি করতে উপরে থেকে একটি শ্রেণি / জামাত নির্বাচন করুন।
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            এই শ্রেণি বা শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি।
          </div>
        ) : (
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-lg">
            <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                <tr>
                  <th className="p-3 w-10 text-center">সিলেক্ট</th>
                  <th className="p-3 w-16 text-center">রোল</th>
                  <th className="p-3 w-28">ছাত্র আইডি</th>
                  <th className="p-3">শিক্ষার্থীর নাম</th>
                  <th className="p-3 w-24">বিভাগ</th>
                  <th className="p-3 w-20">শাখা</th>
                  <th className="p-3 w-32 text-center">কক্ষ নম্বর (Room)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {filteredStudents.map((s) => {
                  const sid = s._id || s.id;
                  const isChecked = selectedStudentIds.has(sid);
                  const roll = s.currentEnrollment?.rollNumber || s.rollNumber || s.roll || '—';
                  const name = s.user?.name || s.name || '—';
                  const stId = s.studentId || s.admissionNumber || '—';
                  const section = s.currentEnrollment?.section || s.section || selectedSection || '—';
                  const stream = s.department || s.stream || 'সাধারণ';
                  const room = studentRooms[sid] || commonRoomNo;

                  return (
                    <tr 
                      key={sid} 
                      className={`hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${isChecked ? 'bg-sky-50/50 dark:bg-sky-950/20' : ''}`}
                    >
                      <td className="p-3 text-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleStudent(sid)}
                          className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4 cursor-pointer"
                        />
                      </td>
                      <td className="p-3 font-bold text-center text-slate-900 dark:text-slate-100">
                        {roll}
                      </td>
                      <td className="p-3 font-mono text-slate-600 dark:text-slate-400">
                        {stId}
                      </td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">
                        {name}
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {stream}
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {section}
                      </td>
                      <td className="p-3 text-center">
                        <input
                          type="text"
                          value={room}
                          onChange={(e) => {
                            const val = e.target.value;
                            setStudentRooms(prev => ({ ...prev, [sid]: val }));
                          }}
                          className="w-20 text-xs p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-center font-bold"
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

    </div>
  );
}
