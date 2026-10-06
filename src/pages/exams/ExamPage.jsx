import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, CheckCircle, AlertCircle, ArrowLeft, Save, Search, ChevronDown, Check, Edit, Trash2, Printer, Trophy, Award, RefreshCw, GraduationCap } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { SECTION_OPTIONS } from '../../utils/constants';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function ExamPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const [exams, setExams] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__exams');
      return saved ? JSON.parse(saved) : ['শ্রেণী শিক্ষক', 'প্রতিষ্ঠান প্রধান', 'পরিচালক'];
    } catch {
      return ['শ্রেণী শিক্ষক', 'প্রতিষ্ঠান প্রধান', 'পরিচালক'];
    }
  });

  // Exam Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editExamId, setEditExamId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    classLevel: '',
    startDate: '',
    endDate: '',
    status: 'upcoming'
  });

  // Mark Entry Mode State
  const [selectedExam, setSelectedExam] = useState(null); // Exam object
  const [subjects, setSubjects] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [students, setStudents] = useState([]);
  const [marksData, setMarksData] = useState({}); // { [studentId]: marksObtained }
  const [savingMarks, setSavingMarks] = useState(false);
  const [studentResults, setStudentResults] = useState([]); // Array of marks for student/guardian

  // Merit List & Ranking State
  const [examViewMode, setExamViewMode] = useState('marks'); // 'marks' | 'merit'
  const [meritLoading, setMeritLoading] = useState(false);
  const [meritSection, setMeritSection] = useState('all');
  const [meritList, setMeritList] = useState([]);
  const [meritSubjectsList, setMeritSubjectsList] = useState([]);

  const isStudentOrGuardian = user?.userType === 'student' || user?.userType === 'guardian';

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Fetch initial exams and classes
  const fetchExams = async () => {
    try {
      const res = await api.get('/exams');
      if (res.data.success) {
        setExams(res.data.data.exams || []);
      }
    } catch (error) {
      console.error('Error fetching exams:', error);
      setToast({ type: 'error', message: 'পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async () => {
    try {
      const res = await api.get('/students/classes');
      if (res.data.success) {
        setClasses(res.data.data.classes || []);
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  useEffect(() => {
    fetchExams();
    fetchClasses();
  }, []);

  // Handle Exam Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Edit Exam Action
  const handleEditExam = (exam) => {
    setEditExamId(exam._id);
    setFormData({
      name: exam.name,
      classLevel: exam.classLevel?._id || '',
      startDate: exam.startDate ? exam.startDate.split('T')[0] : '',
      endDate: exam.endDate ? exam.endDate.split('T')[0] : '',
      status: exam.status
    });
    setIsModalOpen(true);
  };

  // Handle Delete Exam Action
  const handleDeleteExam = async (examId) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।')) return;
    try {
      const res = await api.delete(`/exams/${examId}`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!' });
        fetchExams();
      }
    } catch (error) {
      console.error('Failed to delete exam', error);
      const errMsg = error.response?.data?.message || 'পরীক্ষা মুছতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    }
  };

  // Handle Exam Create or Edit Submit
  const handleExamSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let res;
      if (editExamId) {
        res = await api.patch(`/exams/${editExamId}`, formData);
      } else {
        res = await api.post('/exams', formData);
      }
      
      if (res.data.success) {
        setIsModalOpen(false);
        setEditExamId(null);
        setFormData({
          name: '',
          classLevel: '',
          startDate: '',
          endDate: '',
          status: 'upcoming'
        });
        setToast({ 
          type: 'success', 
          message: editExamId ? 'পরীক্ষা সফলভাবে আপডেট করা হয়েছে!' : 'পরীক্ষা সফলভাবে তৈরি করা হয়েছে!' 
        });
        fetchExams();
      }
    } catch (error) {
      console.error('Failed to submit exam', error);
      const errMsg = error.response?.data?.message || 'পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  // Mark Entry / Result View: Fetch subjects and sections when exam is selected
  const handleMarkEntryStart = async (exam) => {
    setSelectedExam(exam);
    setSelectedSubject('');
    setSelectedSection('');
    setStudents([]);
    setMarksData({});
    setStudentResults([]);
    
    if (isStudentOrGuardian) {
      setLoadingStudents(true);
      try {
        const marksRes = await api.get('/exams/marks', {
          params: { exam: exam._id }
        });
        setStudentResults(marksRes.data.data.marks || []);
      } catch (error) {
        console.error('Failed to load student marks', error);
        setToast({ type: 'error', message: 'ফলাফল লোড করতে সমস্যা হয়েছে' });
      } finally {
        setLoadingStudents(false);
      }
      return;
    }

    if (!exam.classLevel?._id) return;
    
    try {
      // 1. Fetch subjects for the classLevel
      const subjectsRes = await api.get(`/students/subjects?classLevel=${exam.classLevel._id}`);
      if (subjectsRes.data.success) {
        setSubjects(subjectsRes.data.data.subjects || []);
      }
      
      // 2. Fetch sections for the classLevel
      const sectionsRes = await api.get(`/students/sections?classLevel=${exam.classLevel._id}`);
      if (sectionsRes.data.success) {
        setSections(sectionsRes.data.data.sections || []);
      }
    } catch (error) {
      console.error('Failed to fetch subjects/sections for mark entry', error);
    }
  };

  // Fetch students list for mark entry
  const loadStudentsForMarks = async () => {
    if (!selectedSubject || !selectedSection) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন' });
      return;
    }
    setLoadingStudents(true);
    try {
      // 1. Get students enrolled in selected class & section
      const params = { classLevel: selectedExam.classLevel._id, limit: 100 };
      if (selectedSection !== 'all') {
        params.section = selectedSection;
      }
      const studentsRes = await api.get('/students', { params });
      const studentList = studentsRes.data.data || [];
      
      // Sort students by roll number
      studentList.sort((a, b) => {
        const rollA = parseInt(a.currentEnrollment?.rollNumber) || 0;
        const rollB = parseInt(b.currentEnrollment?.rollNumber) || 0;
        return rollA - rollB;
      });
      
      setStudents(studentList);

      // 2. Load existing marks for this exam
      const marksParams = { exam: selectedExam._id };
      if (selectedSubject !== 'all') {
        marksParams.subject = selectedSubject;
      }
      const marksRes = await api.get('/exams/marks', { params: marksParams });
      const existingMarks = marksRes.data.data.marks || [];

      if (selectedSubject === 'all') {
        // Group existing marks by studentId
        const marksByStudent = {};
        studentList.forEach(s => {
          marksByStudent[s._id] = [];
        });
        existingMarks.forEach(record => {
          const sId = typeof record.student === 'object' ? record.student?._id : record.student;
          if (sId && marksByStudent[sId]) {
            marksByStudent[sId].push({
              subjectName: record.subject?.name || 'অজানা বিষয়',
              marksObtained: record.marksObtained,
              grade: record.grade
            });
          }
        });
        setMarksData(marksByStudent);
      } else {
        // Map existing marks to marksData state
        const initialMarks = {};
        studentList.forEach(s => {
          initialMarks[s._id] = '';
        });
        existingMarks.forEach(record => {
          const sId = typeof record.student === 'object' ? record.student?._id : record.student;
          if (sId) {
            initialMarks[sId] = record.marksObtained ?? '';
          }
        });
        setMarksData(initialMarks);
      }
    } catch (error) {
      console.error('Failed to load students for marks entry', error);
      setToast({ type: 'error', message: 'শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingStudents(false);
    }
  };

  // Load and calculate Merit List & Ranking (কে কততম হয়েছে)
  const loadMeritListData = async (targetSection = meritSection, examToUse = selectedExam) => {
    const activeExam = examToUse || selectedExam;
    if (!activeExam) return;
    const classLevelId = activeExam.classLevel?._id || (typeof activeExam.classLevel === 'string' ? activeExam.classLevel : null);

    setMeritLoading(true);
    try {
      // 1. Fetch all marks recorded for this exam
      const marksRes = await api.get('/exams/marks', { params: { exam: activeExam._id } });
      const marks = marksRes.data?.data?.marks || [];

      // 2. Fetch all subjects for this class (or fallback to marks)
      let subs = [];
      if (classLevelId) {
        try {
          const subRes = await api.get(`/students/subjects?classLevel=${classLevelId}`);
          subs = subRes.data?.data?.subjects || [];
        } catch (subErr) {
          console.warn('Subject fetch warning:', subErr);
        }
      }
      // If subs is empty, derive subjects from existing marks
      if (subs.length === 0) {
        const subMap = {};
        marks.forEach(m => {
          if (m.subject && typeof m.subject === 'object' && m.subject._id) {
            subMap[m.subject._id] = m.subject;
          }
        });
        subs = Object.values(subMap);
      }
      setMeritSubjectsList(subs);

      // 3. Fetch all students in this class (filtered by section if selected)
      let studList = [];
      if (classLevelId) {
        try {
          const studParams = { classLevel: classLevelId, limit: 300 };
          if (targetSection && targetSection !== 'all') {
            studParams.section = targetSection;
          }
          const studRes = await api.get('/students', { params: studParams });
          studList = studRes.data?.data || [];
        } catch (studErr) {
          console.warn('Students fetch warning:', studErr);
        }
      }

      // If studList is still empty, derive students directly from marks
      if (studList.length === 0) {
        const studMap = {};
        marks.forEach(m => {
          if (m.student && typeof m.student === 'object' && m.student._id) {
            studMap[m.student._id] = m.student;
          }
        });
        studList = Object.values(studMap);
      }

      // Index marks by student ID & subject ID
      const marksByStudent = {};
      marks.forEach(m => {
        const sId = typeof m.student === 'object' ? m.student?._id : m.student;
        const subId = typeof m.subject === 'object' ? m.subject?._id : m.subject;
        if (!sId) return;
        if (!marksByStudent[sId]) marksByStudent[sId] = {};
        marksByStudent[sId][subId] = {
          marksObtained: m.marksObtained,
          grade: m.grade
        };
      });

      // Compute merit statistics for each student
      const calculated = studList.map(st => {
        const studentMarksObj = marksByStudent[st._id] || {};
        let totalObtained = 0;
        let subjectsCountWithMarks = 0;
        let failedCount = 0;

        subs.forEach(sub => {
          const record = studentMarksObj[sub._id];
          if (record && record.marksObtained !== null && record.marksObtained !== undefined) {
            const num = Number(record.marksObtained);
            totalObtained += num;
            subjectsCountWithMarks += 1;
            if (num < 33) {
              failedCount += 1;
            }
          }
        });

        const totalSubs = subs.length || 1;
        const percentage = subjectsCountWithMarks > 0 ? (totalObtained / (totalSubs * 100)) * 100 : 0;
        const isPassed = subjectsCountWithMarks > 0 && failedCount === 0;
        const overallGrade = isPassed ? calculateGrade(percentage) : (subjectsCountWithMarks > 0 ? 'F' : '—');

        return {
          student: st,
          studentMarksObj,
          totalObtained,
          subjectsCountWithMarks,
          failedCount,
          percentage: Number(percentage.toFixed(1)),
          isPassed,
          overallGrade,
          roll: parseInt(st.currentEnrollment?.rollNumber) || 9999
        };
      });

      // Sort: Students with marks first (passed students by totalObtained desc, then failed by totalObtained desc, then roll)
      calculated.sort((a, b) => {
        if (a.subjectsCountWithMarks === 0 && b.subjectsCountWithMarks === 0) {
          return a.roll - b.roll;
        }
        if (a.subjectsCountWithMarks === 0) return 1;
        if (b.subjectsCountWithMarks === 0) return -1;

        if (a.failedCount === 0 && b.failedCount > 0) return -1;
        if (a.failedCount > 0 && b.failedCount === 0) return 1;

        if (b.totalObtained !== a.totalObtained) {
          return b.totalObtained - a.totalObtained;
        }
        return a.roll - b.roll;
      });

      // Assign Bangla Ordinal Merit Rank (🥇 ১ম, 🥈 ২য়, 🥉 ৩য়, ৪র্থ...)
      let currentRank = 1;
      const ranked = calculated.map((item) => {
        if (item.subjectsCountWithMarks === 0) {
          return { ...item, rankText: 'অনুপস্থিত / পরীক্ষা দেয়নি', rankNum: null };
        }
        const rankNum = currentRank;
        currentRank += 1;

        let rankText = '';
        if (rankNum === 1) rankText = '🥇 ১ম স্থান';
        else if (rankNum === 2) rankText = '🥈 ২য় স্থান';
        else if (rankNum === 3) rankText = '🥉 ৩য় স্থান';
        else if (rankNum === 4) rankText = '৪র্থ';
        else if (rankNum === 5) rankText = '৫ম';
        else if (rankNum === 6) rankText = '৬ষ্ঠ';
        else if (rankNum === 7) rankText = '৭ম';
        else if (rankNum === 8) rankText = '৮ম';
        else if (rankNum === 9) rankText = '৯ম';
        else if (rankNum === 10) rankText = '১০ম';
        else rankText = `${rankNum}তম`;

        if (!item.isPassed) {
          rankText += ' (অনুত্তীর্ণ)';
        }

        return { ...item, rankNum, rankText };
      });

      setMeritList(ranked);
    } catch (err) {
      console.error('Error loading merit list:', err);
      const errMsg = err.response?.data?.message || err.message || 'মেধা তালিকা লোড করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setMeritLoading(false);
    }
  };

  // Dedicated Print Preview for Exam Merit List
  const handlePrintMeritList = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।');
      return;
    }

    const examTitle = selectedExam.name;
    const classNameStr = selectedExam.classLevel?.name || 'সকল শ্রেণি';
    const sectionNameStr = meritSection === 'all' ? 'সকল সেকশন' : `সেকশন ${meritSection}`;
    const reportDate = new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

    let rowsHtml = '';
    meritList.forEach((item, index) => {
      const student = item.student;
      const roll = student.currentEnrollment?.rollNumber || '—';
      const name = student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim();
      const studentId = student.studentId || '—';
      const sectionStr = student.currentEnrollment?.section?.name || (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment.section : '—');

      const isTop3 = item.rankNum && item.rankNum <= 3;
      const rankBg = item.rankNum === 1 ? '#fef3c7' : item.rankNum === 2 ? '#f1f5f9' : item.rankNum === 3 ? '#ffedd5' : 'transparent';

      rowsHtml += `
        <tr style="background-color: ${rankBg};">
          <td style="text-align: center; font-weight: bold; font-size: 13px;">${item.rankText || '—'}</td>
          <td style="text-align: center; font-family: monospace; font-size: 13px; font-weight: 600;">${roll}</td>
          <td>
            <div style="font-weight: 700; font-size: 13px;">${name}</div>
            <div style="font-size: 11px; color: #64748b;">আইডি: ${studentId} | শাখা/সেকশন: ${sectionStr}</div>
          </td>
          <td style="text-align: center; font-weight: bold; font-family: monospace; font-size: 13px; color: #0f766e;">${item.totalObtained}</td>
          <td style="text-align: center; font-family: monospace; font-size: 12.5px;">${item.percentage}%</td>
          <td style="text-align: center; font-weight: bold; font-size: 12px; color: ${item.overallGrade === 'F' ? '#b91c1c' : '#15803d'};">
            ${item.overallGrade}
          </td>
          <td style="text-align: center; font-size: 12px; font-weight: 600; color: ${item.isPassed ? '#15803d' : '#b91c1c'};">
            ${item.subjectsCountWithMarks === 0 ? 'অনুপস্থিত' : item.isPassed ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}
          </td>
        </tr>
      `;
    });

    const html = `<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${examTitle} - মেধা তালিকা ও র‍্যাঙ্কিং</title>
      <style>
        body { font-family: 'SolaimanLipi', 'Kalpurush', 'Nikosh', 'Segoe UI', Arial, sans-serif; padding: 20px; color: #1e293b; background: #fff; margin: 0; }
        .print-box { max-width: 900px; margin: 0 auto; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 24px; }
        .header { text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 16px; }
        .madrasah-title { font-size: 22px; font-weight: 800; color: #0f766e; margin-bottom: 2px; }
        .branch-badge { display: inline-block; font-size: 12px; font-weight: bold; color: #0f766e; background: #f0fdfa; border: 1px solid #99f6e4; padding: 2px 14px; border-radius: 9999px; margin-bottom: 6px; }
        .report-title { font-size: 17px; font-weight: 700; color: #1e293b; margin-bottom: 4px; }
        .meta-strip { font-size: 12.5px; color: #475569; display: flex; justify-content: space-between; margin-top: 10px; background: #f8fafc; padding: 8px 14px; border-radius: 6px; border: 1px solid #e2e8f0; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th { background: #0f766e; color: #fff; font-size: 12.5px; font-weight: 700; padding: 8px 10px; text-align: left; }
        td { padding: 7px 10px; border-bottom: 1px solid #e2e8f0; font-size: 12px; }
        .signatures { display: flex; justify-content: space-between; margin-top: 50px; padding: 0 20px; }
        .sig-box { text-align: center; width: 180px; border-top: 1.5px dashed #475569; padding-top: 6px; font-size: 12px; font-weight: 600; }
        ${getMadrasahPrintStyles('portrait', { wrap: false })}
        @media print {
          body { padding: 0; }
          .print-box { border: none; padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="print-sheet-container">
        <div class="print-content-layer">
          ${getMadrasahHeaderHtml({
            title: `🏆 পরীক্ষার সমন্বিত মেধা তালিকা ও র‍্যাঙ্কিং (Merit List) — ${examTitle}`,
            orientation: 'portrait',
            metaLeft: `<strong>শ্রেণি:</strong> ${classNameStr} | <strong>সেকশন:</strong> ${sectionNameStr}`,
            metaRight: `<strong>মোট পরীক্ষার্থী:</strong> ${meritList.length} জন | <strong>তারিখ:</strong> ${reportDate}`
          })}

        <table>
          <thead>
            <tr>
              <th style="width: 110px; text-align: center;">মেধা স্থান (Rank)</th>
              <th style="width: 60px; text-align: center;">রোল</th>
              <th>শিক্ষার্থীর নাম ও আইডি</th>
              <th style="width: 100px; text-align: center;">মোট নম্বর</th>
              <th style="width: 75px; text-align: center;">শতকরা (%)</th>
              <th style="width: 65px; text-align: center;">গ্রেড</th>
              <th style="width: 80px; text-align: center;">ফলাফল</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}

        <div style="margin-top: 25px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 6px;">
          আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম • মেধা তালিকা রিপোর্ট
        </div>
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 300);
        };
      </script>
    </body>
    </html>`;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  const handleMarkChange = (studentId, value) => {
    setMarksData(prev => ({
      ...prev,
      [studentId]: value
    }));
  };

  const calculateGrade = (val) => {
    const marks = parseFloat(val);
    if (isNaN(marks)) return '—';
    if (marks >= 80) return 'A+';
    if (marks >= 70) return 'A';
    if (marks >= 60) return 'A-';
    if (marks >= 50) return 'B';
    if (marks >= 40) return 'C';
    if (marks >= 33) return 'D';
    return 'F';
  };

  const getGradeBadgeClass = (grade) => {
    if (grade === 'A+' || grade === 'A' || grade === 'A-') return 'badge-active';
    if (grade === 'F') return 'badge-danger';
    if (grade === '—') return 'badge-muted';
    return 'badge-warning';
  };

  const saveMarks = async () => {
    const studentMarksPayload = Object.keys(marksData)
      .map(studentId => ({
        studentId,
        marksObtained: marksData[studentId] === '' ? null : parseFloat(marksData[studentId])
      }));

    if (studentMarksPayload.length === 0) {
      setToast({ type: 'error', message: 'সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি' });
      return;
    }

    setSavingMarks(true);
    try {
      const payload = {
        exam: selectedExam._id,
        subject: selectedSubject,
        marks: studentMarksPayload
      };
      const res = await api.post('/exams/marks', payload);
      if (res.data.success) {
        setToast({ type: 'success', message: 'নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!' });
      }
    } catch (error) {
      console.error('Failed to save marks', error);
      setToast({ type: 'error', message: 'নম্বর সংরক্ষণ করতে সমস্যা হয়েছে' });
    } finally {
      setSavingMarks(false);
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'upcoming': return 'আসন্ন';
      case 'ongoing': return 'চলমান';
      case 'completed': return 'সমাপ্ত';
      case 'published': return 'ফলাফল প্রকাশিত';
      default: return 'অজানা';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'published': return 'badge-active';
      case 'completed': return 'badge-info';
      case 'ongoing': return 'badge-warning';
      default: return 'badge-muted';
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditExamId(null);
    setFormData({
      name: '',
      classLevel: '',
      startDate: '',
      endDate: '',
      status: 'upcoming'
    });
  };

  return (
    <div className="animate-fade-in" style={{ position: 'relative' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 2000,
          padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          animation: 'slideDown 0.3s ease-out',
          maxWidth: '400px',
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem' }}>{toast.message}</span>
        </div>
      )}

      {selectedExam ? (
        // MARK ENTRY WORKSPACE
        <div className="animate-fade-in">
          {/* প্রিন্ট হেডার */}
          <div className="print-only" style={{ display: 'none', textAlign: 'center', marginBottom: '16px' }}>
            <h1 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: 'bold' }}>{madrasahName}</h1>
            <h2 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>পরীক্ষার ফলাফল ও মার্কশিট — {selectedExam.name}</h2>
            <p style={{ margin: '0', fontSize: '12px' }}>শ্রেণি: {selectedExam.classLevel?.name || 'সকল শ্রেণি'}</p>
          </div>

          <div className="page-header no-print">
            <div className="flex gap-16" style={{ alignItems: 'center' }}>
              <button className="btn btn-secondary btn-icon" onClick={() => setSelectedExam(null)}>
                <ArrowLeft size={18} />
              </button>
              <div>
                <h1 className="page-title">{isStudentOrGuardian ? 'ফলাফল' : 'নম্বর এন্ট্রি'}</h1>
                <p className="page-subtitle">শাখা: {branchName} • {selectedExam.name} • {selectedExam.classLevel?.name || 'অজানা শ্রেণি'}</p>
              </div>
            </div>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => window.print()}
              title="প্রিন্ট ফলাফল"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Printer size={16} /> প্রিন্ট ফলাফল
            </button>
          </div>

          {/* Signature Role Selector for Printing */}
          <PrintSignatureRoleSelector
            selectedRoles={selectedSignatureRoles}
            onChange={(roles) => {
              setSelectedSignatureRoles(roles);
              try {
                localStorage.setItem('annur_footer_roles__exams', JSON.stringify(roles));
              } catch (_) {}
            }}
            style={{ marginBottom: '16px' }}
          />

          {/* Official Print Header */}
          <div className="print-only" style={{ marginBottom: '16px' }}>
            <MadrasahLetterhead
              documentTitle={`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${selectedExam.name}`}
              metaLeft={`শ্রেণি: ${selectedExam.classLevel?.name || ''}`}
              metaRight={`মুদ্রণের তারিখ: ${new Date().toLocaleDateString('bn-BD')}`}
            />
          </div>

          {/* View Mode Toggle: নম্বর এন্ট্রি vs মেধা তালিকা ও র‍্যাঙ্কিং */}
          {!isStudentOrGuardian && (
            <div className="flex gap-12 mb-20 no-print" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <button
                type="button"
                className={`btn ${examViewMode === 'marks' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setExamViewMode('marks')}
                style={{ borderRadius: '8px', padding: '8px 18px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Edit size={16} /> বিষয়ভিত্তিক নম্বর এন্ট্রি (Mark Entry)
              </button>
              <button
                type="button"
                className={`btn ${examViewMode === 'merit' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => {
                  setExamViewMode('merit');
                  if (meritList.length === 0) {
                    loadMeritListData(meritSection);
                  }
                }}
                style={{ borderRadius: '8px', padding: '8px 18px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Trophy size={16} /> 🏆 মেধা তালিকা ও র‍্যাঙ্কিং (Merit List / কে কততম হয়েছে)
              </button>
            </div>
          )}

          {examViewMode === 'marks' ? (
            <>
          {!isStudentOrGuardian && (
            <div className="card mb-24">
              <div className="flex gap-16" style={{ alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ marginBottom: 0, minWidth: '200px' }}>
                  <label className="form-label">বিষয় (Subject)</label>
                  <select 
                    className="form-input form-select"
                    value={selectedSubject}
                    onChange={(e) => { setSelectedSubject(e.target.value); setStudents([]); }}
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="all">সকল বিষয়</option>
                    {subjects.map(s => (
                      <option key={s._id} value={s._id}>{s.name} ({s.code})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0, minWidth: '200px' }}>
                  <label className="form-label">সেকশন (Section)</label>
                  <select 
                    className="form-input form-select"
                    value={selectedSection}
                    onChange={(e) => { setSelectedSection(e.target.value); setStudents([]); }}
                  >
                    <option value="">সেকশন নির্বাচন করুন</option>
                    <option value="all">সকল সেকশন</option>
                    {SECTION_OPTIONS.map((sec, idx) => (
                      <option key={idx} value={sec}>সেকশন {sec}</option>
                    ))}
                  </select>
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={loadStudentsForMarks}
                  disabled={loadingStudents || !selectedSubject || !selectedSection}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Search size={16} /> লোড করুন
                </button>
              </div>
            </div>
          )}

          {loadingStudents ? (
            <div className="card flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : isStudentOrGuardian ? (
            studentResults.length === 0 ? (
              <div className="card empty-state">
                <FileText size={48} style={{ opacity: 0.3 }} />
                <div className="empty-state-title mt-16">ফলাফল পাওয়া যায়নি</div>
                <p className="text-muted text-sm mt-8">এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।</p>
              </div>
            ) : (
              <div className="animate-slide-up">
                <div className="card table-container" style={{ padding: 0 }}>
                  <table className="table">
                    <thead>
                      <tr>
                        {user?.userType === 'guardian' && <th>শিক্ষার্থীর নাম</th>}
                        <th>বিষয়</th>
                        <th style={{ width: '150px', textAlign: 'center' }}>প্রাপ্ত নম্বর</th>
                        <th style={{ width: '150px', textAlign: 'center' }}>গ্রেড</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentResults.map(res => {
                        const marks = res.marksObtained;
                        const grade = calculateGrade(marks);
                        return (
                          <tr key={res._id}>
                            {user?.userType === 'guardian' && (
                              <td>
                                <div className="font-semibold">{res.student?.firstName} {res.student?.lastName}</div>
                              </td>
                            )}
                            <td className="font-semibold">{res.subject?.name}</td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter' }}>{marks}</td>
                            <td style={{ textAlign: 'center' }}>
                              <span className={`badge ${getGradeBadgeClass(grade)}`} style={{ fontSize: '0.85rem', width: '45px', justifyContent: 'center' }}>
                                {grade}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : students.length === 0 ? (
            <div className="card empty-state">
              <FileText size={48} style={{ opacity: 0.3 }} />
              <div className="empty-state-title mt-16">কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি</div>
              <p className="text-muted text-sm mt-8">বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন</p>
            </div>
          ) : (
            <div className="animate-slide-up">
              <div className="card table-container" style={{ padding: 0 }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th style={{ width: '100px', textAlign: 'center' }}>রোল নম্বর</th>
                      <th>• শিক্ষার্থীর নাম ও আইডি</th>
                      <th style={{ width: '200px', textAlign: 'center' }}>প্রাপ্ত নম্বর (Marks)</th>
                      <th style={{ width: '120px', textAlign: 'center' }}>গ্রেড (Grade)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => {
                      const studentId = student._id;
                      const roll = student.currentEnrollment?.rollNumber || '—';
                      const studentName = student.user?.fullName || 
                        `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim();

                      if (selectedSubject === 'all') {
                        const studentMarksList = Array.isArray(marksData[studentId]) ? marksData[studentId] : [];
                        return (
                          <tr key={studentId}>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>{roll}</td>
                            <td>
                              <div className="font-semibold">{studentName}</div>
                              <div className="text-xs text-muted">{student.studentId}</div>
                            </td>
                            <td colSpan={2}>
                              {studentMarksList.length === 0 ? (
                                <span className="text-muted text-xs">কোনো নম্বর পাওয়া যায়নি</span>
                              ) : (
                                <div className="flex gap-8" style={{ flexWrap: 'wrap', gap: '8px' }}>
                                  {studentMarksList.map((m, idx) => (
                                    <span key={idx} className="badge badge-info" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
                                      {m.subjectName}: {m.marksObtained} ({m.grade})
                                    </span>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      }

                      const currentMarks = marksData[studentId] ?? '';
                      const grade = calculateGrade(currentMarks);

                      return (
                        <tr key={studentId}>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>{roll}</td>
                          <td>
                            <div className="font-semibold">{studentName}</div>
                            <div className="text-xs text-muted">{student.studentId}</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <input
                              type="number"
                              className="form-input"
                              style={{ width: '120px', margin: '0 auto', textAlign: 'center', marginBottom: 0 }}
                              placeholder="০ - ১০০"
                              min="0"
                              max="100"
                              value={currentMarks}
                              onChange={(e) => handleMarkChange(studentId, e.target.value)}
                            />
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span className={`badge ${getGradeBadgeClass(grade)}`} style={{ fontSize: '0.85rem', width: '45px', justifyContent: 'center' }}>
                              {grade}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {selectedSubject !== 'all' && (
                  <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', background: 'var(--bg-secondary)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                    <button 
                      className="btn btn-primary" 
                      onClick={saveMarks}
                      disabled={savingMarks}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <Save size={16} /> {savingMarks ? 'সংরক্ষণ হচ্ছে...' : 'নম্বর সংরক্ষণ করুন'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          </>
          ) : (
            /* VIEW 2: সমন্বিত মেধা তালিকা ও র‍্যাঙ্কিং (কে কততম হয়েছে) */
            <div className="animate-slide-up">
              {/* Filter Bar */}
              <div className="card mb-20 no-print" style={{ padding: '16px 20px' }}>
                <div className="flex gap-16" style={{ alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="flex gap-12" style={{ alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '180px' }}>
                      <label className="form-label text-xs">সেকশন ফিল্টার</label>
                      <select
                        className="form-input form-select"
                        value={meritSection}
                        onChange={(e) => {
                          const sec = e.target.value;
                          setMeritSection(sec);
                          loadMeritListData(sec);
                        }}
                      >
                        <option value="all">সকল সেকশন (সম্পূর্ণ শ্রেণি)</option>
                        {SECTION_OPTIONS.map((sec, idx) => (
                          <option key={idx} value={sec}>সেকশন {sec}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => loadMeritListData(meritSection)}
                      disabled={meritLoading}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <RefreshCw size={14} className={meritLoading ? 'animate-spin' : ''} /> রিফ্রেশ তালিকা
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => navigate('/students/promote')}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      title="এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন"
                    >
                      <GraduationCap size={16} style={{ color: 'var(--primary)' }} /> 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handlePrintMeritList}
                      disabled={meritLoading || meritList.length === 0}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <Printer size={16} /> 🖨️ মেধা তালিকা প্রিন্ট করুন
                    </button>
                  </div>
                </div>
              </div>

              {/* KPI Summary Cards */}
              <div className="grid grid-4 mb-20">
                <div className="card text-center" style={{ padding: '16px', borderLeft: '4px solid var(--primary)' }}>
                  <div className="text-xs text-muted font-semibold">মোট পরীক্ষার্থী</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                    {meritList.length} জন
                  </div>
                </div>
                <div className="card text-center" style={{ padding: '16px', borderLeft: '4px solid #10b981' }}>
                  <div className="text-xs text-muted font-semibold">কৃতকার্য (পাস)</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10b981' }}>
                    {meritList.filter(m => m.isPassed).length} জন
                  </div>
                </div>
                <div className="card text-center" style={{ padding: '16px', borderLeft: '4px solid #ef4444' }}>
                  <div className="text-xs text-muted font-semibold">অকৃতকার্য (ফেল)</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444' }}>
                    {meritList.filter(m => m.subjectsCountWithMarks > 0 && !m.isPassed).length} জন
                  </div>
                </div>
                <div className="card text-center" style={{ padding: '16px', borderLeft: '4px solid #f59e0b', background: 'rgba(245, 158, 11, 0.04)' }}>
                  <div className="text-xs text-muted font-semibold">🥇 ১ম স্থান অর্জনকারী</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#d97706', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {meritList.find(m => m.rankNum === 1)?.student?.user?.fullName ||
                     meritList.find(m => m.rankNum === 1)?.student?.user?.firstName || '—'}
                  </div>
                  {meritList.find(m => m.rankNum === 1) && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      প্রাপ্ত নম্বর: {meritList.find(m => m.rankNum === 1)?.totalObtained} ({meritList.find(m => m.rankNum === 1)?.percentage}%)
                    </div>
                  )}
                </div>
              </div>

              {/* Merit Table */}
              {meritLoading ? (
                <div className="card flex-center" style={{ padding: '60px' }}>
                  <div className="spinner"></div>
                </div>
              ) : meritList.length === 0 ? (
                <div className="card empty-state">
                  <Trophy size={48} style={{ opacity: 0.3 }} />
                  <div className="empty-state-title mt-16">মেধা তালিকা লোড হয়নি</div>
                  <p className="text-muted text-sm mt-8">রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।</p>
                </div>
              ) : (
                <div className="card table-container" style={{ padding: 0 }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: '130px', textAlign: 'center' }}>মেধা স্থান (Rank)</th>
                        <th style={{ width: '80px', textAlign: 'center' }}>রোল নম্বর</th>
                        <th>শিক্ষার্থীর নাম ও আইডি</th>
                        <th style={{ textAlign: 'center', width: '110px' }}>মোট প্রাপ্ত নম্বর</th>
                        <th style={{ textAlign: 'center', width: '90px' }}>শতকরা (%)</th>
                        <th style={{ textAlign: 'center', width: '80px' }}>গ্রেড</th>
                        <th style={{ textAlign: 'center', width: '110px' }}>ফলাফল স্ট্যাটাস</th>
                      </tr>
                    </thead>
                    <tbody>
                      {meritList.map((item, idx) => {
                        const student = item.student;
                        const roll = student.currentEnrollment?.rollNumber || '—';
                        const studentName = student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim();
                        const isTop1 = item.rankNum === 1;
                        const isTop2 = item.rankNum === 2;
                        const isTop3 = item.rankNum === 3;

                        return (
                          <tr 
                            key={student._id || idx}
                            style={{
                              background: isTop1 ? 'rgba(245, 158, 11, 0.08)' : isTop2 ? 'rgba(100, 116, 139, 0.05)' : isTop3 ? 'rgba(217, 119, 6, 0.05)' : 'transparent'
                            }}
                          >
                            <td style={{ textAlign: 'center' }}>
                              <span 
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 800,
                                  fontSize: isTop1 || isTop2 || isTop3 ? '0.95rem' : '0.88rem',
                                  color: isTop1 ? '#b45309' : isTop2 ? '#475569' : isTop3 ? '#c2410c' : 'inherit',
                                  padding: '4px 10px',
                                  borderRadius: '6px',
                                  background: isTop1 ? '#fef3c7' : isTop2 ? '#f1f5f9' : isTop3 ? '#ffedd5' : 'transparent',
                                  border: isTop1 ? '1px solid #fde68a' : isTop2 ? '1px solid #cbd5e1' : isTop3 ? '1px solid #fed7aa' : 'none'
                                }}
                              >
                                {item.rankText}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem' }}>
                              {roll}
                            </td>
                            <td>
                              <div className="font-semibold" style={{ fontSize: '0.92rem' }}>
                                {studentName}
                              </div>
                              <div className="text-xs text-muted">
                                আইডি: {student.studentId} • সেকশন: {student.currentEnrollment?.section?.name || (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment.section : '—')}
                              </div>
                            </td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 800, fontSize: '1.05rem', color: '#0f766e' }}>
                              {item.totalObtained}
                            </td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>
                              {item.percentage}%
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className={`badge ${getGradeBadgeClass(item.overallGrade)}`} style={{ fontSize: '0.85rem', width: '45px', justifyContent: 'center' }}>
                                {item.overallGrade}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              {item.subjectsCountWithMarks === 0 ? (
                                <span className="badge badge-muted">অনুপস্থিত</span>
                              ) : item.isPassed ? (
                                <span className="badge badge-active">উত্তীর্ণ (Pass)</span>
                              ) : (
                                <span className="badge badge-danger">অনুত্তীর্ণ (Fail)</span>
                              )}
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

          {/* Official Footer Signatures for Exam Results Print */}
          <div className="print-only">
            <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '40px' }} />
          </div>
        </div>
      ) : (
        // EXAMS LIST
        <div>
          <div className="page-header">
            <div>
              <h1 className="page-title">পরীক্ষা ও ফলাফল</h1>
              <p className="page-subtitle">শাখা: {branchName} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা</p>
            </div>
            {['super_admin', 'admin', 'principal', 'teacher'].includes(user?.userType) && (
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                <Plus size={16} /> নতুন পরীক্ষা তৈরি
              </button>
            )}
          </div>

          {loading ? (
            <div className="flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : exams.length === 0 ? (
            <div className="card empty-state">
              <FileText size={48} style={{ opacity: 0.3 }} />
              <div className="empty-state-title mt-16">কোনো পরীক্ষা পাওয়া যায়নি</div>
              <p className="text-muted mt-8">এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।</p>
            </div>
          ) : (
            <div className="grid grid-2">
              {exams.map((exam) => (
                <div key={exam._id} className="card animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="flex-between">
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{exam.name}</h3>
                      <div className="text-sm text-muted">শ্রেণি: {exam.classLevel?.name || 'সকল শ্রেণি'}</div>
                    </div>
                    <span className={`badge ${getStatusBadgeClass(exam.status)}`}>
                      {getStatusLabel(exam.status)}
                    </span>
                  </div>
                  
                  <div className="flex gap-16 text-sm text-muted">
                    <span>শুরু: {exam.startDate ? formatDateDDMMYYYY(exam.startDate) : 'অজানা'}</span>
                    {exam.endDate && <span>শেষ: {formatDateDDMMYYYY(exam.endDate)}</span>}
                  </div>
                  
                  <div className="flex gap-8" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: 'auto', flexWrap: 'wrap' }}>
                    <button 
                      className="btn btn-primary" 
                      style={{ flex: 1, minWidth: '100px', fontSize: '0.85rem', padding: '8px 10px' }}
                      onClick={() => {
                        setExamViewMode('marks');
                        handleMarkEntryStart(exam);
                      }}
                    >
                      {isStudentOrGuardian ? 'ফলাফল দেখুন' : '📝 নম্বর এন্ট্রি'}
                    </button>
                    {!isStudentOrGuardian && (
                      <button 
                        className="btn btn-secondary" 
                        style={{ flex: 1, minWidth: '110px', fontSize: '0.85rem', padding: '8px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
                        onClick={() => {
                          setExamViewMode('merit');
                          handleMarkEntryStart(exam);
                          loadMeritListData('all', exam);
                        }}
                      >
                        <Trophy size={14} style={{ color: '#d97706' }} /> 🏆 মেধা তালিকা
                      </button>
                    )}
                    {['super_admin', 'admin', 'principal', 'teacher'].includes(user?.userType) && (
                      <button className="btn btn-secondary btn-icon" onClick={() => handleEditExam(exam)} title="সম্পাদনা">
                        <Edit size={16} />
                      </button>
                    )}
                    {['super_admin', 'admin', 'principal'].includes(user?.userType) && (
                      <button className="btn btn-secondary btn-icon text-danger" onClick={() => handleDeleteExam(exam._id)} title="মুছে ফেলুন">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Create or Edit Exam Modal */}
          {isModalOpen && (
            <div
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
                backdropFilter: 'blur(4px)'
              }}
              onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}
            >
              <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '520px', margin: '20px' }}>
                <div className="flex-between mb-24">
                  <h2 style={{ fontSize: '1.25rem' }}>{editExamId ? 'পরীক্ষার তথ্য সম্পাদন' : 'নতুন পরীক্ষা শিডিউল করুন'}</h2>
                  <button className="btn-icon" onClick={handleCloseModal} type="button">
                    <Plus size={20} style={{ transform: 'rotate(45deg)' }} />
                  </button>
                </div>
                
                <form onSubmit={handleExamSubmit}>
                  <div className="form-group">
                    <label className="form-label">পরীক্ষার নাম *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-input" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="যেমন: প্রথম সাময়িক পরীক্ষা ২০২৪" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">শ্রেণি</label>
                    <select 
                      name="classLevel" 
                      className="form-input form-select" 
                      value={formData.classLevel} 
                      onChange={handleChange}
                    >
                      <option value="">সকল শ্রেণি / শ্রেণি নির্বাচন করুন</option>
                      {classes.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-2" style={{ gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">শুরুর তারিখ</label>
                      <input 
                        type="date" 
                        name="startDate" 
                        className="form-input" 
                        value={formData.startDate} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">শেষের তারিখ</label>
                      <input 
                        type="date" 
                        name="endDate" 
                        className="form-input" 
                        value={formData.endDate} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">অবস্থা (Status)</label>
                    <select 
                      name="status" 
                      className="form-input form-select" 
                      value={formData.status} 
                      onChange={handleChange}
                    >
                      <option value="upcoming">আসন্ন (Upcoming)</option>
                      <option value="ongoing">চলমান (Ongoing)</option>
                      <option value="completed">সমাপ্ত (Completed)</option>
                      <option value="published">ফলাফল প্রকাশিত (Published)</option>
                    </select>
                  </div>

                  <div className="flex gap-16 mt-24" style={{ justifyContent: 'flex-end' }}>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>বাতিল</button>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          .no-print, .page-header, .sidebar, .topbar {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          body {
            background: #fff !important;
            color: #000 !important;
          }
          .card {
            border: 1px solid #cbd5e1 !important;
            box-shadow: none !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
