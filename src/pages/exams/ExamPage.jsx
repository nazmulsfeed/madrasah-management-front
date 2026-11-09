import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, CheckCircle, AlertCircle, ArrowLeft, Save, Search, ChevronDown, Check, Edit, Trash2, Printer, Trophy, Award, RefreshCw, GraduationCap, User, BookOpen, CheckSquare, Square, X } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { SECTION_OPTIONS } from '../../utils/constants';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';


const EXAM_CATEGORIES = [
  { value: 'term_exam', label: 'সাময়িক পরীক্ষা (Term Exam 1-3)' },
  { value: 'monthly_test', label: 'মাসিক ক্লাস টেস্ট (Monthly Test 1-12)' },
  { value: 'model_test', label: 'মডেল টেস্ট (Model Test 1-3)' },
  { value: 'weekly_sabina', label: 'সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)' },
  { value: 'tanzim_board', label: 'তানজিমুল মাদারিস বোর্ড পরীক্ষা' },
  { value: 'huffaz_board', label: 'হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা' },
  { value: 'general', label: 'সাধারণ পরীক্ষা (General Exam)' },
];

const MONTH_OPTIONS = [
  { value: 'january', label: 'জানুয়ারি (১ম মাস)' },
  { value: 'february', label: 'ফেব্রুয়ারি (২য় মাস)' },
  { value: 'march', label: 'মার্চ (৩য় মাস)' },
  { value: 'april', label: 'এপ্রিল (৪র্থ মাস)' },
  { value: 'may', label: 'মে (৫ম মাস)' },
  { value: 'june', label: 'জুন (৬ষ্ঠ মাস)' },
  { value: 'july', label: 'জুলাই (৭ম মাস)' },
  { value: 'august', label: 'আগস্ট (৮ম মাস)' },
  { value: 'september', label: 'সেপ্টেম্বর (৯ম মাস)' },
  { value: 'october', label: 'অক্টোবর (১০ম মাস)' },
  { value: 'november', label: 'নভেম্বর (১১তম মাস)' },
  { value: 'december', label: 'ডিসেম্বর (১২তম মাস)' },
];

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
    name: '১ম সাময়িক পরীক্ষা',
    examCategory: 'term_exam',
    termNumber: 1,
    month: 'january',
    selectedSubjects: [],
    classLevel: '',
    startDate: '',
    endDate: '',
    status: 'upcoming'
  });
  const [modalClassSubjects, setModalClassSubjects] = useState([]);

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
  const [examViewMode, setExamViewMode] = useState('marks'); // 'marks' | 'student_result' | 'subject_result' | 'merit'
  const [meritLoading, setMeritLoading] = useState(false);
  const [meritSection, setMeritSection] = useState('all');
  const [meritList, setMeritList] = useState([]);
  const [meritSubjectsList, setMeritSubjectsList] = useState([]);

  // Single Student Result State (Tab 2)
  const [studentSearchId, setStudentSearchId] = useState('');
  const [singleStudentFilterSec, setSingleStudentFilterSec] = useState('all');
  const [selectedStudentResult, setSelectedStudentResult] = useState(null);
  const [loadingSingleStudent, setLoadingSingleStudent] = useState(false);
  const [classStudentsList, setClassStudentsList] = useState([]);

  // Single Subject Result State (Tab 3)
  const [subjectViewSubId, setSubjectViewSubId] = useState('');
  const [subjectViewSection, setSubjectViewSection] = useState('all');
  const [subjectViewSearch, setSubjectViewSearch] = useState('');
  const [subjectViewMarks, setSubjectViewMarks] = useState([]);
  const [loadingSubjectView, setLoadingSubjectView] = useState(false);
  const [selectedStudentCheckboxes, setSelectedStudentCheckboxes] = useState(new Set());

  // Annual Combined Merit State
  const [annualSelectedClass, setAnnualSelectedClass] = useState('');
  const [annualSelectedSection, setAnnualSelectedSection] = useState('all');
  const [annualLoading, setAnnualLoading] = useState(false);
  const [annualData, setAnnualData] = useState(null);

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


  const loadSubjectsForModal = async (classLevelId) => {
    if (!classLevelId) {
      setModalClassSubjects([]);
      return;
    }
    try {
      const res = await api.get(`/students/subjects?classLevel=${classLevelId}`);
      if (res.data.success) {
        setModalClassSubjects(res.data.data.subjects || []);
      }
    } catch (err) {
      console.warn('Failed to fetch subjects for modal', err);
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

  useEffect(() => {
    if (examViewMode === 'student_result' && selectedExam && classStudentsList.length === 0) {
      loadClassStudents(selectedExam);
    }
    if (examViewMode === 'subject_result' && subjects.length > 0 && !subjectViewSubId) {
      setSubjectViewSubId(subjects[0]._id);
      loadSubjectResultData(subjects[0]._id, subjectViewSection);
    }
  }, [examViewMode, selectedExam, subjects, classStudentsList.length]);

  // Handle Exam Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Edit Exam Action
  const handleEditExam = async (exam) => {
    setEditExamId(exam._id);
    const cat = exam.examCategory || 'general';
    const selSubs = Array.isArray(exam.selectedSubjects) ? exam.selectedSubjects.map(s => typeof s === 'object' ? s._id : s) : [];
    const classId = exam.classLevel?._id || '';
    setFormData({
      name: exam.name,
      examCategory: cat,
      termNumber: exam.termNumber || 1,
      month: exam.month || 'january',
      selectedSubjects: selSubs,
      classLevel: classId,
      startDate: exam.startDate ? exam.startDate.split('T')[0] : '',
      endDate: exam.endDate ? exam.endDate.split('T')[0] : '',
      status: exam.status
    });
    if (classId) {
      loadSubjectsForModal(classId);
    }
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
    if (formData.examCategory === 'monthly_test' && formData.selectedSubjects?.length !== 4) {
      setToast({ type: 'error', message: `মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${formData.selectedSubjects?.length || 0} টি)` });
      return;
    }
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
    setSelectedStudentResult(null);
    setStudentSearchId('');
    setSingleStudentFilterSec('all');
    setSubjectViewSubId('');
    setSubjectViewSection('all');
    setSubjectViewSearch('');
    setSubjectViewMarks([]);
    setSelectedStudentCheckboxes(new Set());
    
    if (isStudentOrGuardian) {
      setLoadingStudents(true);
      try {
        const res = await api.get('/exams/student-results', {
          params: { examId: exam._id }
        });
        if (res.data?.success && res.data.data) {
          setSelectedStudentResult(res.data.data);
          const firstExam = res.data.data.results?.[0];
          setStudentResults(firstExam?.subjects || []);
        } else {
          const marksRes = await api.get('/exams/marks', {
            params: { exam: exam._id }
          });
          setStudentResults(marksRes.data?.data?.marks || []);
        }
      } catch (error) {
        console.error('Failed to load student detailed results', error);
        try {
          const marksRes = await api.get('/exams/marks', {
            params: { exam: exam._id }
          });
          setStudentResults(marksRes.data?.data?.marks || []);
        } catch (_) {}
      } finally {
        setLoadingStudents(false);
      }
      return;
    }

    const classLevelId = exam.classLevel?._id || (typeof exam.classLevel === 'string' ? exam.classLevel : null);
    if (!classLevelId) return;
    
    try {
      // 1. Fetch subjects for the classLevel
      const subjectsRes = await api.get(`/students/subjects?classLevel=${classLevelId}`);
      if (subjectsRes.data.success) {
        let subs = subjectsRes.data.data.subjects || [];
        if (exam.examCategory === 'monthly_test' && Array.isArray(exam.selectedSubjects) && exam.selectedSubjects.length > 0) {
          const allowed = exam.selectedSubjects.map(s => typeof s === 'object' ? String(s._id) : String(s));
          subs = subs.filter(s => allowed.includes(String(s._id)));
        }
        setSubjects(subs);
      }
      
      // 2. Fetch sections for the classLevel
      const sectionsRes = await api.get(`/students/sections?classLevel=${classLevelId}`);
      if (sectionsRes.data.success) {
        setSections(sectionsRes.data.data.sections || []);
      }

      // 3. Fetch students of this classLevel for single student selection
      const studRes = await api.get('/students', {
        params: { classLevel: classLevelId, limit: 300 }
      });
      if (studRes.data.success) {
        const raw = studRes.data.data;
        let list = Array.isArray(raw) ? raw : (raw?.students || []);
        if (list.length === 0) {
          const allRes = await api.get('/students', { params: { limit: 500 } });
          const allRaw = allRes.data?.data;
          list = Array.isArray(allRaw) ? allRaw : (allRaw?.students || []);
        }
        setClassStudentsList(list);
      }
    } catch (error) {
      console.error('Failed to fetch subjects/sections for mark entry', error);
    }
  };

  const loadClassStudents = async (examObj) => {
    const target = examObj || selectedExam;
    if (!target) return;
    const classId = target.classLevel?._id || (typeof target.classLevel === 'string' ? target.classLevel : null);
    try {
      const params = { limit: 300 };
      if (classId) params.classLevel = classId;
      const res = await api.get('/students', { params });
      if (res.data?.success) {
        const raw = res.data.data;
        let list = Array.isArray(raw) ? raw : (raw?.students || []);
        if (list.length === 0 && classId) {
          const allRes = await api.get('/students', { params: { limit: 500 } });
          const allRaw = allRes.data?.data;
          list = Array.isArray(allRaw) ? allRaw : (allRaw?.students || []);
        }
        setClassStudentsList(list);
      }
    } catch (e) {
      console.warn('Failed to load class students:', e);
    }
  };

  // Fetch single student results across all subjects
  const fetchSingleStudentResult = async (targetId) => {
    const idToSearch = targetId || studentSearchId;
    if (!idToSearch || !String(idToSearch).trim()) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন' });
      return;
    }
    setLoadingSingleStudent(true);
    setSelectedStudentResult(null);
    try {
      const res = await api.get(`/exams/student-results/${encodeURIComponent(String(idToSearch).trim())}`, {
        params: { examId: selectedExam?._id }
      });
      if (res.data.success) {
        setSelectedStudentResult(res.data.data);
      }
    } catch (err) {
      console.error('Failed to load student result', err);
      const errMsg = err.response?.data?.message || 'শিক্ষার্থীর ফলাফল পাওয়া যায়নি';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setLoadingSingleStudent(false);
    }
  };

  // Load single subject result data for all students
  const loadSubjectResultData = async (subId, sec) => {
    const subjectId = subId !== undefined ? subId : subjectViewSubId;
    const section = sec !== undefined ? sec : subjectViewSection;
    if (!subjectId) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে বিষয় নির্বাচন করুন' });
      return;
    }
    setLoadingSubjectView(true);
    try {
      const params = { exam: selectedExam?._id, subject: subjectId };
      const res = await api.get('/exams/marks', { params });
      if (res.data.success) {
        let marks = res.data.data.marks || [];
        if (section && section !== 'all') {
          marks = marks.filter(m => {
            const enroll = m.student?.currentEnrollment;
            const secVal = typeof enroll?.section === 'object' ? (enroll?.section?.name || enroll?.section?._id) : (enroll?.section || m.student?.section);
            return String(secVal || '') === String(section);
          });
        }
        setSubjectViewMarks(marks);
        const allIds = new Set(marks.map(m => String(m.student?._id || m._id)));
        setSelectedStudentCheckboxes(allIds);

        // Fallback: derive subjects from marks if subjects array is empty
        if (subjects.length === 0 && marks.length > 0) {
          const subMap = {};
          marks.forEach(m => {
            if (m.subject && typeof m.subject === 'object' && m.subject._id) {
              subMap[m.subject._id] = m.subject;
            }
          });
          const extracted = Object.values(subMap);
          if (extracted.length > 0) setSubjects(extracted);
        }
      }
    } catch (err) {
      console.error('Failed to load subject marks', err);
      setToast({ type: 'error', message: 'বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingSubjectView(false);
    }
  };

  // Toggle selection for tickmark print preview
  const handleToggleSelectAll = (filteredList) => {
    const allFilteredIds = filteredList.map(m => String(m.student?._id || m._id));
    const allSelected = allFilteredIds.length > 0 && allFilteredIds.every(id => selectedStudentCheckboxes.has(id));
    const updated = new Set(selectedStudentCheckboxes);
    if (allSelected) {
      allFilteredIds.forEach(id => updated.delete(id));
    } else {
      allFilteredIds.forEach(id => updated.add(id));
    }
    setSelectedStudentCheckboxes(updated);
  };

  const handleToggleStudent = (studentId) => {
    const updated = new Set(selectedStudentCheckboxes);
    const sId = String(studentId);
    if (updated.has(sId)) {
      updated.delete(sId);
    } else {
      updated.add(sId);
    }
    setSelectedStudentCheckboxes(updated);
  };

  // Print Single Student Marksheet
  const handlePrintSingleStudentMarksheet = () => {
    if (!selectedStudentResult || !selectedStudentResult.results || selectedStudentResult.results.length === 0) {
      setToast({ type: 'error', message: 'প্রিন্ট করার মতো কোনো ফলাফল নেই' });
      return;
    }
    const student = selectedStudentResult.student || {};
    const examRes = selectedStudentResult.results[0] || {};
    const dateStr = new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

    // Sanitize branch & department to avoid showing raw database UUIDs
    const cleanBranch = (student.branch && !/^[0-9a-fA-F-]{20,40}$/.test(student.branch)) ? student.branch : '';
    const deptText = student.department || '';
    let branchDeptLabel = '—';
    if (cleanBranch && deptText) {
      branchDeptLabel = `${cleanBranch} (${deptText})`;
    } else if (cleanBranch) {
      branchDeptLabel = cleanBranch;
    } else if (deptText) {
      branchDeptLabel = deptText;
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${student.name || ''}</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .student-badge-card { display: flex; gap: 12px; margin: 8px 0; align-items: stretch; }
    .student-info-grid { flex: 1; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; font-size: 11px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px 12px; }
    .grading-legend-box { width: 220px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px 6px; font-size: 9px; }
    .grading-legend-title { font-weight: 700; text-align: center; color: #0f766e; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px; margin-bottom: 2px; }
    .grading-legend-table { width: 100%; border-collapse: collapse; margin: 0; font-size: 8.5px; }
    .grading-legend-table th, .grading-legend-table td { padding: 1px 3px; border: 1px solid #e2e8f0; text-align: center; }
    .grading-legend-table th { background: #f1f5f9; font-weight: 700; }
    table.marks-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 11px; }
    table.marks-table th, table.marks-table td { border: 1px solid #cbd5e1; padding: 4px 6px; text-align: left; }
    table.marks-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .summary-box { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; margin-top: 8px; padding: 6px 10px; background: #f8fafc; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 11px; text-align: center; }
    .summary-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px; }
    .summary-item-label { font-size: 9.5px; color: #64748b; margin-bottom: 2px; }
    .summary-item-val { font-weight: 700; font-size: 12px; color: #0f766e; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)',
        orientation: 'portrait',
        metaLeft: '<strong>পরীক্ষা:</strong> ' + (examRes.examName || selectedExam?.name || ''),
        metaRight: '<strong>তারিখ:</strong> ' + dateStr
      })}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${student.name || '—'}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${student.studentId || '—'}</div>
          <div><strong>শ্রেণি:</strong> ${student.className || selectedExam?.classLevel?.name || '—'}</div>
          <div><strong>রোল নম্বর:</strong> ${student.rollNumber || '—'}</div>
          <div><strong>শাখা / বিভাগ:</strong> ${branchDeptLabel}</div>
          <div><strong>সেকশন:</strong> ${student.section || '—'}</div>
        </div>

        <div class="grading-legend-box">
          <div class="grading-legend-title">গ্রেডিং স্কেল নির্দেশিকা</div>
          <table class="grading-legend-table">
            <thead>
              <tr>
                <th>নম্বর সীমা</th>
                <th>গ্রেড</th>
                <th>পয়েন্ট</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>৮০-১০০%</td><td style="font-weight:bold; color:#059669;">A+</td><td>৫.০</td></tr>
              <tr><td>৭০-৭৯%</td><td style="font-weight:bold; color:#059669;">A</td><td>৪.০</td></tr>
              <tr><td>৬০-৬৯%</td><td style="font-weight:bold; color:#0284c7;">A-</td><td>৩.৫</td></tr>
              <tr><td>৫০-৫৯%</td><td style="font-weight:bold; color:#d97706;">B</td><td>৩.০</td></tr>
              <tr><td>৪০-৪৯%</td><td style="font-weight:bold; color:#ea580c;">C</td><td>২.০</td></tr>
              <tr><td>৩৩-৩৯%</td><td style="font-weight:bold; color:#d97706;">D</td><td>১.০</td></tr>
              <tr><td>০০-৩২%</td><td style="font-weight:bold; color:#dc2626;">F</td><td>০.০</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <table class="marks-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th>বিষয়ের নাম</th>
            <th style="width: 65px;">কোড</th>
            <th style="width: 65px;">পূর্ণমান</th>
            <th style="width: 80px;">প্রাপ্ত নম্বর</th>
            <th style="width: 60px;">শতকরা</th>
            <th style="width: 55px;">গ্রেড</th>
            <th style="width: 55px;">জিপিএ</th>
            <th style="width: 65px;">ফলাফল</th>
          </tr>
        </thead>
        <tbody>
          ${(examRes.subjects || []).map((s, idx) => `
            <tr>
              <td class="text-center">${idx + 1}</td>
              <td class="font-bold">${s.subjectName}</td>
              <td class="text-center">${s.subjectCode || '—'}</td>
              <td class="text-center">${s.totalMarks}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${s.marksObtained}</td>
              <td class="text-center">${s.percentage}%</td>
              <td class="text-center font-bold">${s.grade}</td>
              <td class="text-center">${(s.gradePoint ?? 0).toFixed(1)}</td>
              <td class="text-center font-bold" style="color: ${s.isPassed ? '#059669' : '#dc2626'};">${s.isPassed ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="summary-box">
        <div class="summary-item">
          <div class="summary-item-label">মোট পূর্ণমান</div>
          <div class="summary-item-val">${examRes.totalMaxMarks}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">প্রাপ্ত নম্বর</div>
          <div class="summary-item-val">${examRes.totalObtained}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">শতকরা (%)</div>
          <div class="summary-item-val">${examRes.overallPercentage}%</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">চূড়ান্ত গ্রেড</div>
          <div class="summary-item-val" style="color: ${examRes.overallGrade === 'F' ? '#dc2626' : '#059669'};">${examRes.overallGrade}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">জিপিএ (GPA)</div>
          <div class="summary-item-val">${(examRes.gpa ?? 0).toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">মেধা স্থান</div>
          <div class="summary-item-val">${examRes.position ? examRes.position + ' তম' : '—'}</div>
        </div>
      </div>

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  </script>
</body>
</html>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
    }
  };

  // Reusable Detailed Student Result View Component
  const renderStudentDetailedResultCard = (resData) => {
    if (!resData || !resData.results || resData.results.length === 0) {
      return (
        <div className="card empty-state">
          <AlertCircle size={48} style={{ opacity: 0.3, color: 'var(--warning)' }} />
          <div className="empty-state-title mt-16">এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি</div>
          <p className="text-muted text-sm mt-8">এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।</p>
        </div>
      );
    }

    const st = resData.student || {};
    const examRes = resData.results[0] || {};
    const cumulative = resData.annualCumulative;

    return (
      <div className="animate-slide-up">
        {/* Student Header Card */}
        <div className="card mb-20" style={{
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)',
          border: '1px solid rgba(15, 118, 110, 0.25)',
          borderRadius: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'var(--primary, #0f766e)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', fontWeight: 700, overflow: 'hidden'
              }}>
                {st.avatar ? (
                  <img src={st.avatar} alt={st.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  st.name ? st.name.charAt(0) : 'S'
                )}
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {st.name}
                </h2>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '6px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  <span><strong>আইডি:</strong> {st.studentId || '—'}</span>
                  <span>•</span>
                  <span><strong>শ্রেণি:</strong> {st.className || selectedExam?.classLevel?.name || '—'}</span>
                  <span>•</span>
                  <span><strong>রোল:</strong> {st.rollNumber || '—'}</span>
                  {st.section && <span>• <strong>সেকশন:</strong> {st.section}</span>}
                  {st.branch && !/^[0-9a-fA-F-]{20,40}$/.test(st.branch) && <span>• <strong>শাখা:</strong> {st.branch}</span>}
                  {st.department && <span>• <strong>বিভাগ:</strong> {st.department}</span>}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary no-print"
                onClick={handlePrintSingleStudentMarksheet}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Printer size={16} />
                <span>মার্কশিট প্রিন্ট / ডাউনলোড</span>
              </button>
              <div style={{
                padding: '8px 14px', borderRadius: '10px',
                background: examRes.isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                color: examRes.isPassed ? '#059669' : '#dc2626',
                fontWeight: 700, fontSize: '0.95rem', textAlign: 'center'
              }}>
                {examRes.isPassed ? '✓ উত্তীর্ণ (PASSED)' : '✗ অনুত্তীর্ণ (FAILED)'}
              </div>
              {examRes.position && (
                <div style={{
                  padding: '8px 14px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  color: '#b45309', fontWeight: 800, fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(245, 158, 11, 0.2)'
                }}>
                  🥇 {examRes.position} তম স্থান
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-4 mb-20" style={{ gap: '12px' }}>
          <div className="card text-center" style={{ padding: '14px' }}>
            <div className="text-muted text-xs">মোট প্রাপ্ত নম্বর</div>
            <div className="font-bold text-lg" style={{ color: 'var(--primary, #0f766e)' }}>
              {examRes.totalObtained} / {examRes.totalMaxMarks}
            </div>
          </div>
          <div className="card text-center" style={{ padding: '14px' }}>
            <div className="text-muted text-xs">সার্বিক শতকরা হার</div>
            <div className="font-bold text-lg" style={{ color: '#0284c7' }}>
              {examRes.overallPercentage}%
            </div>
          </div>
          <div className="card text-center" style={{ padding: '14px' }}>
            <div className="text-muted text-xs">চূড়ান্ত গ্রেড</div>
            <div className="font-bold text-lg" style={{ color: examRes.overallGrade === 'F' ? '#dc2626' : '#059669' }}>
              {examRes.overallGrade}
            </div>
          </div>
          <div className="card text-center" style={{ padding: '14px' }}>
            <div className="text-muted text-xs">জিপিএ (GPA)</div>
            <div className="font-bold text-lg" style={{ color: '#7c3aed' }}>
              {(examRes.gpa ?? 0).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Subject Marksheet Table */}
        <div className="card table-container" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: 'center' }}>ক্রমিক</th>
                <th>বিষয়ের নাম</th>
                <th style={{ width: '90px', textAlign: 'center' }}>কোড</th>
                <th style={{ width: '100px', textAlign: 'center' }}>পূর্ণমান</th>
                <th style={{ width: '120px', textAlign: 'center' }}>প্রাপ্ত নম্বর</th>
                <th style={{ width: '90px', textAlign: 'center' }}>শতকরা</th>
                <th style={{ width: '90px', textAlign: 'center' }}>গ্রেড</th>
                <th style={{ width: '90px', textAlign: 'center' }}>জিপিএ</th>
                <th style={{ width: '110px', textAlign: 'center' }}>ফলাফল</th>
              </tr>
            </thead>
            <tbody>
              {examRes.subjects.map((sub, idx) => (
                <tr key={sub.markId || idx}>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter' }}>{idx + 1}</td>
                  <td className="font-semibold">{sub.subjectName}</td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.85rem' }}>{sub.subjectCode || '—'}</td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter' }}>{sub.totalMarks}</td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, color: 'var(--primary, #0f766e)', fontSize: '1rem' }}>
                    {sub.marksObtained}
                  </td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>{sub.percentage}%</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${getGradeBadgeClass(sub.grade)}`} style={{ minWidth: '40px', justifyContent: 'center' }}>
                      {sub.grade}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>
                    {(sub.gradePoint ?? 0).toFixed(1)}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${sub.isPassed ? 'badge-active' : 'badge-danger'}`}>
                      {sub.isPassed ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Annual Cumulative Card if available */}
        {cumulative && (
          <div className="card mt-20" style={{ padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
              🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)
            </h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
              <div><strong>১ম সাময়িক:</strong> {cumulative.term1?.obtained || 0} / {cumulative.term1?.max || 0}</div>
              <div><strong>২য় সাময়িক:</strong> {cumulative.term2?.obtained || 0} / {cumulative.term2?.max || 0}</div>
              <div><strong>৩য় সাময়িক:</strong> {cumulative.term3?.obtained || 0} / {cumulative.term3?.max || 0}</div>
              <div><strong>সর্বমোট:</strong> {cumulative.grandTotalObtained} / {cumulative.grandTotalMaxMarks} ({cumulative.overallPercentage}%)</div>
              <div><strong>বার্ষিক মেধা স্থান:</strong> <span style={{ color: '#b45309', fontWeight: 700 }}>{cumulative.rankText}</span></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Print Subject Result Sheet with Tickmarks
  const handlePrintSubjectResult = (filteredMarks) => {
    const listToPrint = (filteredMarks || subjectViewMarks).filter(m => selectedStudentCheckboxes.has(String(m.student?._id || m._id)));
    if (listToPrint.length === 0) {
      setToast({ type: 'error', message: 'প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন' });
      return;
    }
    const currentSub = subjects.find(s => s._id === subjectViewSubId);
    const subName = currentSub?.name || 'বিষয়';
    const subMax = Number(currentSub?.totalMarks) || 100;
    const dateStr = new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

    const appearedCount = listToPrint.length;
    const passedCount = listToPrint.filter(m => {
      const marks = Number(m.marksObtained) || 0;
      const pct = subMax > 0 ? (marks / subMax) * 100 : marks;
      return pct >= 33;
    }).length;
    const passRate = appearedCount > 0 ? Math.round((passedCount / appearedCount) * 100) : 0;

    const htmlContent = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${subName}</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .stats-strip { display: flex; justify-content: space-between; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; margin: 8px 0; font-size: 11px; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'বিষয়ভিত্তিক ফলাফল বিবরণী — ' + subName,
        orientation: 'portrait',
        metaLeft: '<strong>শ্রেণি:</strong> ' + (selectedExam?.classLevel?.name || '') + ' | <strong>পূর্ণমান:</strong> ' + subMax + ' | <strong>পরীক্ষা:</strong> ' + (selectedExam?.name || ''),
        metaRight: '<strong>তারিখ:</strong> ' + dateStr
      })}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${appearedCount} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${passedCount} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${appearedCount - passedCount} জন</div>
        <div><strong>পাসের হার:</strong> ${passRate}%</div>
      </div>

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th style="width: 50px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 80px;">আইডি</th>
            <th style="width: 60px;">সেকশন</th>
            <th style="width: 85px;">প্রাপ্ত নম্বর</th>
            <th style="width: 55px;">শতকরা</th>
            <th style="width: 50px;">গ্রেড</th>
            <th style="width: 65px;">ফলাফল</th>
          </tr>
        </thead>
        <tbody>
          ${listToPrint.map((m, idx) => {
            const marks = Number(m.marksObtained) || 0;
            const pct = subMax > 0 ? Math.round((marks / subMax) * 100) : marks;
            const grade = calculateGrade(marks, subMax);
            const isPass = pct >= 33;
            const stName = m.student?.fullName || m.student?.user?.fullName || `${m.student?.user?.firstName || ''} ${m.student?.user?.lastName || ''}`.trim() || '—';
            const roll = m.student?.currentEnrollment?.rollNumber || m.student?.roll || '—';
            const sId = m.student?.studentId || '—';
            const sec = typeof m.student?.currentEnrollment?.section === 'object' ? (m.student?.currentEnrollment?.section?.name || m.student?.currentEnrollment?.section?._id) : (m.student?.currentEnrollment?.section || '—');
            return `
              <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-center font-bold">${roll}</td>
                <td class="font-bold">${stName}</td>
                <td class="text-center">${sId}</td>
                <td class="text-center">${sec}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${marks} / ${subMax}</td>
                <td class="text-center font-bold">${pct}%</td>
                <td class="text-center font-bold">${grade}</td>
                <td class="text-center font-bold" style="color: ${isPass ? '#059669' : '#dc2626'};">${isPass ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  </script>
</body>
</html>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
    }
  };

  // Print Mark Entry Sheet (When viewing/entering marks in Mark Entry tab)
  const handlePrintMarkEntrySheet = () => {
    if (!students || students.length === 0) {
      setToast({ type: 'error', message: 'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।' });
      return;
    }

    const currentSub = subjects.find(s => s._id === selectedSubject);
    const isAllSubjects = selectedSubject === 'all';
    const subName = isAllSubjects ? 'সকল বিষয়' : (currentSub?.name || 'বিষয়');
    const subMax = isAllSubjects ? 100 : (Number(currentSub?.totalMarks) || 100);
    const dateStr = new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });
    const secLabel = selectedSection === 'all' ? 'সকল সেকশন' : `সেকশন ${selectedSection}`;

    const appearedCount = students.filter(s => {
      const val = marksData[s._id];
      return val !== undefined && val !== '' && !isNaN(val);
    }).length;

    const passedCount = students.filter(s => {
      const val = marksData[s._id];
      if (val === undefined || val === '' || isNaN(val)) return false;
      const pct = subMax > 0 ? (Number(val) / subMax) * 100 : Number(val);
      return pct >= 33;
    }).length;

    const passRate = appearedCount > 0 ? Math.round((passedCount / appearedCount) * 100) : 0;

    const htmlContent = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${subName} (${selectedExam?.name || ''})</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .stats-strip { display: flex; justify-content: space-between; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; margin: 8px 0; font-size: 11px; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'নম্বর বিবরণী শিট (Mark Sheet) — ' + subName,
        orientation: 'portrait',
        metaLeft: '<strong>পরীক্ষা:</strong> ' + (selectedExam?.name || '') + ' | <strong>শ্রেণি:</strong> ' + (selectedExam?.classLevel?.name || '') + ' | <strong>' + (!isAllSubjects ? 'পূর্ণমান: ' + subMax + ' | ' : '') + 'সেকশন:</strong> ' + secLabel,
        metaRight: '<strong>তারিখ:</strong> ' + dateStr
      })}

      ${!isAllSubjects ? `
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${students.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${appearedCount} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${passedCount} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${students.length - passedCount} জন</div>
          <div><strong>পাসের হার:</strong> ${passRate}%</div>
        </div>
      ` : ''}

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th style="width: 50px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 80px;">আইডি</th>
            <th style="width: 60px;">সেকশন</th>
            ${isAllSubjects ? `
              <th>বিষয়ভিত্তিক নম্বর ও গ্রেড</th>
            ` : `
              <th style="width: 85px;">প্রাপ্ত নম্বর</th>
              <th style="width: 55px;">শতকরা</th>
              <th style="width: 50px;">গ্রেড</th>
              <th style="width: 65px;">ফলাফল</th>
            `}
          </tr>
        </thead>
        <tbody>
          ${students.map((student, idx) => {
            const studentId = student._id;
            const roll = student.currentEnrollment?.rollNumber || student.roll || '—';
            const studentName = student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || '—';
            const sId = student.studentId || '—';
            const sec = typeof student.currentEnrollment?.section === 'object' ? (student.currentEnrollment?.section?.name || student.currentEnrollment?.section?._id) : (student.currentEnrollment?.section || student.section || selectedSection);

            if (isAllSubjects) {
              const studentMarksList = Array.isArray(marksData[studentId]) ? marksData[studentId] : [];
              const marksStr = studentMarksList.length > 0 
                ? studentMarksList.map(m => m.subjectName + ': ' + m.marksObtained + ' (' + m.grade + ')').join(' | ') 
                : 'কোনো নম্বর পাওয়া যায়নি';
              return `
                <tr>
                  <td class="text-center">${idx + 1}</td>
                  <td class="text-center font-bold">${roll}</td>
                  <td class="font-bold">${studentName}</td>
                  <td class="text-center">${sId}</td>
                  <td class="text-center">${sec}</td>
                  <td style="font-size: 10px;">${marksStr}</td>
                </tr>
              `;
            }

            const rawMarks = marksData[studentId];
            const hasMarks = rawMarks !== undefined && rawMarks !== '' && !isNaN(rawMarks);
            const marks = hasMarks ? Number(rawMarks) : null;
            const pct = hasMarks ? (subMax > 0 ? Math.round((marks / subMax) * 100) : marks) : null;
            const grade = hasMarks ? calculateGrade(marks, subMax) : '—';
            const isPass = hasMarks ? pct >= 33 : false;

            return `
              <tr>
                <td class="text-center">${idx + 1}</td>
                <td class="text-center font-bold">${roll}</td>
                <td class="font-bold">${studentName}</td>
                <td class="text-center">${sId}</td>
                <td class="text-center">${sec}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${hasMarks ? marks + ' / ' + subMax : '—'}</td>
                <td class="text-center font-bold">${hasMarks ? pct + '%' : '—'}</td>
                <td class="text-center font-bold">${grade}</td>
                <td class="text-center font-bold" style="color: ${!hasMarks ? '#64748b' : isPass ? '#059669' : '#dc2626'};">
                  ${!hasMarks ? 'অনুপস্থিত' : isPass ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  </script>
</body>
</html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
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

      // 2. Fetch assigned subjects for this class
      let assignedSubs = [];
      if (classLevelId) {
        try {
          const subRes = await api.get(`/students/subjects?classLevel=${classLevelId}`);
          assignedSubs = subRes.data?.data?.subjects || [];
        } catch (subErr) {
          console.warn('Subject fetch warning:', subErr);
        }
      }
      if (activeExam.examCategory === 'monthly_test' && Array.isArray(activeExam.selectedSubjects) && activeExam.selectedSubjects.length > 0) {
        const allowed = activeExam.selectedSubjects.map(s => typeof s === 'object' ? String(s._id) : String(s));
        assignedSubs = assignedSubs.filter(s => allowed.includes(String(s._id)));
      }

      // Filter to subjects that have actual marks entered in this exam (Dynamic Subject Columns)
      let finalSubjects = assignedSubs.filter(sub => {
        return marks.some(m => {
          const sSubId = typeof m.subject === 'object' ? (m.subject?._id || m.subject?.id) : m.subject;
          return String(sSubId) === String(sub._id) && m.marksObtained !== null && m.marksObtained !== undefined && m.marksObtained !== '';
        });
      });

      // Fallback 1: If assignedSubs filtering yielded none, derive from mark entry subject records directly
      if (finalSubjects.length === 0 && marks.length > 0) {
        const subMap = {};
        marks.forEach(m => {
          const sId = typeof m.subject === 'object' ? (m.subject?._id || m.subject?.id) : m.subject;
          if (sId && m.marksObtained !== null && m.marksObtained !== undefined && m.marksObtained !== '') {
            const subName = typeof m.subject === 'object' ? (m.subject.name || m.subject.code) : 'বিষয়';
            const subCode = typeof m.subject === 'object' ? m.subject.code : '';
            const subTotal = typeof m.subject === 'object' ? (m.subject.totalMarks || m.totalMarks || 100) : (m.totalMarks || 100);
            subMap[String(sId)] = {
              _id: String(sId),
              name: subName,
              code: subCode,
              totalMarks: Number(subTotal) || 100
            };
          }
        });
        finalSubjects = Object.values(subMap);
      }

      // Fallback 2: If no marks entered yet, show assignedSubs so the columns always exist
      if (finalSubjects.length === 0 && assignedSubs.length > 0) {
        finalSubjects = assignedSubs;
      }

      setMeritSubjectsList(finalSubjects);

      // Total max marks of evaluated subjects
      const totalFullMarks = finalSubjects.reduce((sum, s) => sum + (Number(s.totalMarks) || 100), 0);

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
        const sId = typeof m.student === 'object' ? (m.student?._id || m.student?.id) : m.student;
        const subId = typeof m.subject === 'object' ? (m.subject?._id || m.subject?.id) : m.subject;
        if (!sId || !subId) return;
        const strSId = String(sId);
        const strSubId = String(subId);
        if (!marksByStudent[strSId]) marksByStudent[strSId] = {};
        marksByStudent[strSId][strSubId] = {
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

        finalSubjects.forEach(sub => {
          const record = studentMarksObj[sub._id];
          if (record && record.marksObtained !== null && record.marksObtained !== undefined && record.marksObtained !== '') {
            const num = Number(record.marksObtained);
            totalObtained += num;
            subjectsCountWithMarks += 1;
            const subFullMarks = Number(sub.totalMarks) || 100;
            if (num < subFullMarks * 0.33) {
              failedCount += 1;
            }
          }
        });

        const percentage = totalFullMarks > 0 ? Number(((totalObtained / totalFullMarks) * 100).toFixed(1)) : 0;
        const isIncomplete = finalSubjects.length > 0 && subjectsCountWithMarks > 0 && subjectsCountWithMarks < finalSubjects.length;
        const isPassed = subjectsCountWithMarks > 0 && failedCount === 0 && !isIncomplete;
        const overallGrade = isPassed 
          ? calculateGrade(percentage) 
          : (failedCount > 0 ? 'F' : (isIncomplete ? calculateGrade(percentage) : (subjectsCountWithMarks > 0 ? 'F' : '—')));

        return {
          student: st,
          studentMarksObj,
          totalObtained,
          totalFullMarks,
          subjectsCountWithMarks,
          failedCount,
          isIncomplete,
          percentage,
          isPassed,
          overallGrade,
          roll: parseInt(st.currentEnrollment?.rollNumber) || 9999
        };
      });

      // Sort: Students with marks first (by totalObtained desc, then roll)
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

      // Assign Shared Bangla Ordinal Merit Rank (🥇 ১ম, 🥈 ২য়, 🥉 ৩য়, ৪র্থ...)
      let currentRank = 1;
      let prevScore = null;
      let studentsCountWithMarks = 0;

      const ranked = calculated.map((item) => {
        if (item.subjectsCountWithMarks === 0) {
          return { ...item, rankText: 'অনুপস্থিত / পরীক্ষা দেয়নি', rankNum: null };
        }
        studentsCountWithMarks += 1;
        if (prevScore !== null && item.totalObtained === prevScore) {
          // Keep same rankNum for tied score (Shared Rank)
        } else {
          currentRank = studentsCountWithMarks;
          prevScore = item.totalObtained;
        }
        const rankNum = currentRank;
        const isTie = calculated.filter(c => c.subjectsCountWithMarks > 0 && c.totalObtained === item.totalObtained).length > 1;

        let rankText = '';
        if (rankNum === 1) rankText = isTie ? '🥇 ১ম স্থান (যৌথ)' : '🥇 ১ম স্থান';
        else if (rankNum === 2) rankText = isTie ? '🥈 ২য় স্থান (যৌথ)' : '🥈 ২য় স্থান';
        else if (rankNum === 3) rankText = isTie ? '🥉 ৩য় স্থান (যৌথ)' : '🥉 ৩য় স্থান';
        else if (rankNum === 4) rankText = isTie ? '৪র্থ (যৌথ)' : '৪র্থ';
        else if (rankNum === 5) rankText = isTie ? '৫ম (যৌথ)' : '৫ম';
        else if (rankNum === 6) rankText = isTie ? '৬ষ্ঠ (যৌথ)' : '৬ষ্ঠ';
        else if (rankNum === 7) rankText = isTie ? '৭ম (যৌথ)' : '৭ম';
        else if (rankNum === 8) rankText = isTie ? '৮ম (যৌথ)' : '৮ম';
        else if (rankNum === 9) rankText = isTie ? '৯ম (যৌথ)' : '৯ম';
        else if (rankNum === 10) rankText = isTie ? '১০ম (যৌথ)' : '১০ম';
        else rankText = isTie ? `${rankNum}তম (যৌথ)` : `${rankNum}তম`;

        if (item.failedCount > 0) {
          rankText += ' (অনুত্তীর্ণ)';
        } else if (item.isIncomplete) {
          rankText += ' (অসম্পূর্ণ)';
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

  const loadAnnualCombinedRankings = async (classId, sec = 'all') => {
    if (!classId) return;
    setAnnualLoading(true);
    try {
      const params = { classLevel: classId };
      if (sec && sec !== 'all') params.section = sec;
      const res = await api.get('/exams/annual-rankings', { params });
      if (res.data.success) {
        setAnnualData(res.data.data);
      }
    } catch (err) {
      console.error('Failed to load annual rankings', err);
      setToast({ type: 'error', message: err.response?.data?.message || 'বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setAnnualLoading(false);
    }
  };

  const handlePrintAnnualMeritList = () => {
    if (!annualData || !annualData.rankings || annualData.rankings.length === 0) {
      setToast({ type: 'error', message: 'প্রিন্ট করার মতো কোনো মেধা তালিকা নেই' });
      return;
    }

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।');
      return;
    }

    const dateStr = new Date().toLocaleDateString('bn-BD', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${annualData.classLevel?.name || ''}</title>
  ${getMadrasahPrintStyles('landscape')}
  <style>
    @page { size: A4 landscape; margin: 8mm 10mm !important; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 10px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: `চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${annualData.classLevel?.name || ''}`,
        orientation: 'landscape',
        metaLeft: `<strong>শ্রেণি:</strong> ${annualData.classLevel?.name || ''} | <strong>মোট পরীক্ষার্থী:</strong> ${annualData.rankings.length} জন`,
        metaRight: `<strong>তারিখ:</strong> ${dateStr}`
      })}

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 85px;">বার্ষিক মেধা স্থান</th>
            <th style="width: 45px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 75px;">আইডি</th>
            <th style="width: 80px;">১ম সাময়িক</th>
            <th style="width: 80px;">২য় সাময়িক</th>
            <th style="width: 80px;">৩য় সাময়িক</th>
            <th style="width: 95px;">সর্বমোট নম্বর</th>
            <th style="width: 55px;">শতকরা</th>
            <th style="width: 50px;">গ্রেড</th>
          </tr>
        </thead>
        <tbody>
          ${annualData.rankings.map((st, idx) => `
            <tr>
              <td class="text-center font-bold" style="color: ${idx === 0 ? '#b45309' : idx === 1 ? '#0369a1' : idx === 2 ? '#b45309' : '#0f172a'};">${st.rankText}</td>
              <td class="text-center font-bold">${st.rollNumber || '—'}</td>
              <td class="font-bold">${st.name}</td>
              <td class="text-center">${st.studentCode}</td>
              <td class="text-center">${st.term1Obtained} / ${st.term1Max}</td>
              <td class="text-center">${st.term2Obtained} / ${st.term2Max}</td>
              <td class="text-center">${st.term3Obtained} / ${st.term3Max}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${st.grandTotalObtained} / ${st.grandTotalMaxMarks}</td>
              <td class="text-center font-bold">${st.overallPercentage}%</td>
              <td class="text-center font-bold">${st.overallGrade}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  </script>
</body>
</html>
    `;

    printWin.document.open();
    printWin.document.write(htmlContent);
    printWin.document.close();
  };

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
      const roll = student.currentEnrollment?.rollNumber || student.roll || '—';
      const name = student.user?.fullName || `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() || student.studentId || '—';
      const studentId = student.studentId || '—';
      const sectionStr = typeof student.currentEnrollment?.section === 'object' ? (student.currentEnrollment?.section?.name || student.currentEnrollment?.section?._id) : (student.currentEnrollment?.section || student.section || '—');

      const isTop3 = item.rankNum && item.rankNum <= 3;
      const rankBg = item.rankNum === 1 ? '#fef3c7' : item.rankNum === 2 ? '#f1f5f9' : item.rankNum === 3 ? '#ffedd5' : 'transparent';
      const rankBadge = item.rankNum === 1 ? '🥇 ' : item.rankNum === 2 ? '🥈 ' : item.rankNum === 3 ? '🥉 ' : '';

      const subjectCellsHtml = meritSubjectsList.map(s => {
        const score = item.studentMarksObj?.[String(s._id)]?.marksObtained;
        const hasScore = score !== null && score !== undefined && score !== '';
        const subFullMarks = Number(s.totalMarks) || 100;
        const isSubFail = hasScore && Number(score) < subFullMarks * 0.33;
        return `<td style="text-align: center; font-weight: 600; font-size: 10px; ${isSubFail ? 'color: #dc2626; background: rgba(239, 68, 68, 0.05);' : ''}">${hasScore ? score : '—'}</td>`;
      }).join('');

      rowsHtml += `
        <tr style="background-color: ${rankBg};">
          <td style="text-align: center; font-weight: bold; font-size: 10px;">${index + 1}</td>
          <td>
            <div style="font-weight: 700; font-size: 10.5px;">${name}</div>
            <div style="font-size: 8.5px; color: #475569;">আইডি: ${studentId} • সেকশন: ${sectionStr}</div>
          </td>
          <td style="text-align: center; font-weight: bold; font-size: 10.5px;">${roll}</td>
          ${subjectCellsHtml}
          <td style="text-align: center; font-weight: bold; font-size: 10px; color: #0f766e;">
            ${item.subjectsCountWithMarks === 0 ? '—' : `${item.totalObtained} / ${item.totalFullMarks || 100}`}
          </td>
          <td style="text-align: center; font-weight: bold; font-size: 10px;">${rankBadge}${item.rankText || '—'}</td>
          <td style="text-align: center; font-weight: bold; font-size: 10px; color: ${item.overallGrade === 'F' ? '#dc2626' : '#059669'};">
            ${item.overallGrade}
          </td>
          <td style="text-align: center; font-size: 10px; font-weight: 600;">${item.subjectsCountWithMarks === 0 ? '—' : `${item.percentage}%`}</td>
          <td style="text-align: center; font-size: 9.5px; font-weight: 600; color: ${item.subjectsCountWithMarks === 0 ? '#64748b' : (item.isIncomplete ? '#b45309' : (item.isPassed ? '#059669' : '#dc2626'))};">
            ${item.subjectsCountWithMarks === 0 ? 'অনুপস্থিত' : (item.isIncomplete ? 'অসম্পূর্ণ' : (item.isPassed ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'))}
          </td>
        </tr>
      `;
    });

    const subjectHeadersHtml = meritSubjectsList.map(s => `
      <th style="text-align: center; font-size: 9.5px; min-width: 50px; white-space: nowrap;">
        <div>${s.name}</div>
        <div style="font-size: 8.5px; font-weight: normal; opacity: 0.9;">(${s.totalMarks || 100})</div>
      </th>
    `).join('');

    const html = `<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${examTitle} - মেধা তালিকা ও ফলাফল</title>
      ${getMadrasahPrintStyles('landscape')}
      <style>
        @page { size: A4 landscape; margin: 6mm 8mm !important; }
        table.compact-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10px; }
        table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 4px; text-align: left; }
        table.compact-table th { background: #0f766e; color: #fff; font-size: 10px; font-weight: 700; text-align: center; }
        .print-footer-signatures { padding-top: 10px !important; margin-top: auto !important; }
        .sig-line { font-size: 10.5px !important; padding-top: 3px !important; }
        .sig-sub { font-size: 9px !important; }
      </style>
    </head>
    <body>
      <div class="print-sheet-container">
        <div class="print-content-layer">
          ${getMadrasahHeaderHtml({
            title: `🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${examTitle}`,
            orientation: 'landscape',
            metaLeft: `<strong>শ্রেণি:</strong> ${classNameStr} | <strong>সেকশন:</strong> ${sectionNameStr}`,
            metaRight: `<strong>মোট পরীক্ষার্থী:</strong> ${meritList.length} জন | <strong>তারিখ:</strong> ${reportDate}`
          })}

        <table class="compact-table">
          <thead>
            <tr>
              <th style="width: 35px; text-align: center;">ক্রম</th>
              <th style="min-width: 150px; text-align: left;">শিক্ষার্থীর নাম ও আইডি</th>
              <th style="width: 45px; text-align: center;">রোল</th>
              ${subjectHeadersHtml}
              <th style="width: 80px; text-align: center;">সর্বমোট মার্ক</th>
              <th style="width: 80px; text-align: center;">স্থান</th>
              <th style="width: 45px; text-align: center;">গ্রেড</th>
              <th style="width: 60px; text-align: center;">শতকরা হার</th>
              <th style="width: 65px; text-align: center;">স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
        </div>
      </div>

      <script>
        window.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => { window.print(); }, 400);
        });
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

  const calculateGrade = (val, max = 100) => {
    const marks = parseFloat(val);
    if (isNaN(marks)) return '—';
    const total = Number(max) || 100;
    const pct = total > 0 ? (marks / total) * 100 : marks;
    if (pct >= 80) return 'A+';
    if (pct >= 70) return 'A';
    if (pct >= 60) return 'A-';
    if (pct >= 50) return 'B';
    if (pct >= 40) return 'C';
    if (pct >= 33) return 'D';
    return 'F';
  };

  const getGradeBadgeClass = (grade) => {
    if (grade === 'A+' || grade === 'A' || grade === 'A-') return 'badge-active';
    if (grade === 'F') return 'badge-danger';
    if (grade === '—') return 'badge-muted';
    return 'badge-warning';
  };

  const saveMarks = async () => {
    const currentSub = subjects.find(s => s._id === selectedSubject);
    const maxMarks = Number(currentSub?.totalMarks) || 100;

    const studentMarksPayload = Object.keys(marksData)
      .map(studentId => ({
        studentId,
        marksObtained: marksData[studentId] === '' ? null : parseFloat(marksData[studentId])
      }));

    if (studentMarksPayload.length === 0) {
      setToast({ type: 'error', message: 'সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি' });
      return;
    }

    const invalidScore = studentMarksPayload.find(m => m.marksObtained !== null && m.marksObtained > maxMarks);
    if (invalidScore) {
      setToast({ type: 'error', message: `কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${maxMarks}) চেয়ে বেশি হতে পারে না` });
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
      name: '১ম সাময়িক পরীক্ষা',
      examCategory: 'term_exam',
      termNumber: 1,
      month: 'january',
      selectedSubjects: [],
      classLevel: '',
      startDate: '',
      endDate: '',
      status: 'upcoming'
    });
    setModalClassSubjects([]);
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
              className="btn btn-primary" 
              onClick={() => {
                if (isStudentOrGuardian || examViewMode === 'student_result') {
                  handlePrintSingleStudentMarksheet();
                } else if (examViewMode === 'subject_result') {
                  handlePrintSubjectResult();
                } else if (examViewMode === 'merit' || examViewMode === 'merit_list') {
                  handlePrintMeritList();
                } else if (examViewMode === 'marks') {
                  handlePrintMarkEntrySheet();
                } else {
                  handlePrintMarkEntrySheet();
                }
              }}
              title="অফিশিয়াল প্রিন্ট প্রিভিউ"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Printer size={16} /> {isStudentOrGuardian ? 'মার্কশিট প্রিন্ট / ডাউনলোড' : 'প্রিন্ট ফলাফল'}
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

          {/* View Mode Toggle: নম্বর এন্ট্রি vs ছাত্রভিত্তিক ফলাফল vs বিষয়ভিত্তিক ফলাফল vs মেধা তালিকা ও র‍্যাঙ্কিং */}
          {!isStudentOrGuardian && (
            <div className="flex gap-10 mb-20 no-print" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn ${examViewMode === 'marks' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setExamViewMode('marks')}
                style={{ borderRadius: '8px', padding: '8px 16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Edit size={16} /> নম্বর এন্ট্রি (Mark Entry)
              </button>
              <button
                type="button"
                className={`btn ${examViewMode === 'student_result' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setExamViewMode('student_result')}
                style={{ borderRadius: '8px', padding: '8px 16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <User size={16} /> 👤 ছাত্রভিত্তিক ফলাফল (Student Result)
              </button>
              <button
                type="button"
                className={`btn ${examViewMode === 'subject_result' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => {
                  setExamViewMode('subject_result');
                  if (!subjectViewSubId && subjects.length > 0) {
                    setSubjectViewSubId(subjects[0]._id);
                    loadSubjectResultData(subjects[0]._id, subjectViewSection);
                  }
                }}
                style={{ borderRadius: '8px', padding: '8px 16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <BookOpen size={16} /> 📚 বিষয়ভিত্তিক ফলাফল (Subject Result)
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
                style={{ borderRadius: '8px', padding: '8px 16px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Trophy size={16} /> 🏆 মেধা তালিকা ও র‍্যাঙ্কিং (Merit List)
              </button>
            </div>
          )}

          {examViewMode === 'marks' && (
            <>
          {!isStudentOrGuardian && (
            <div className="card mb-24">
              <div className="flex gap-16" style={{ alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ marginBottom: 0, minWidth: '220px' }}>
                  <label className="form-label">বিষয় (Subject) *</label>
                  <select 
                    className="form-input form-select"
                    value={selectedSubject}
                    onChange={(e) => { setSelectedSubject(e.target.value); setStudents([]); }}
                  >
                    <option value="">-- বিষয় নির্বাচন করুন --</option>
                    {subjects.map(s => (
                      <option key={s._id} value={s._id}>{s.name} ({s.totalMarks || 100})</option>
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
                  disabled={loadingStudents || !selectedSubject || !selectedSection || subjects.length === 0}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Search size={16} /> লোড করুন
                </button>
              </div>
              {subjects.length === 0 && (
                <div style={{ marginTop: '14px', padding: '10px 14px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#dc2626', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={16} />
                  <span>এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।</span>
                </div>
              )}
            </div>
          )}

          {loadingStudents ? (
            <div className="card flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : isStudentOrGuardian ? (
            selectedStudentResult && selectedStudentResult.results?.length > 0 ? (
              renderStudentDetailedResultCard(selectedStudentResult)
            ) : studentResults.length === 0 ? (
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

                      const currentSub = subjects.find(s => s._id === selectedSubject);
                      const subMaxMarks = Number(currentSub?.totalMarks) || 100;
                      const currentMarks = marksData[studentId] ?? '';
                      const grade = calculateGrade(currentMarks, subMaxMarks);

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
                              style={{
                                width: '120px', margin: '0 auto', textAlign: 'center', marginBottom: 0,
                                borderColor: currentMarks !== '' && Number(currentMarks) > subMaxMarks ? 'var(--danger, #ef4444)' : undefined
                              }}
                              placeholder={`০ - ${subMaxMarks}`}
                              min="0"
                              max={subMaxMarks}
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
                  <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: 'var(--bg-secondary)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                    <button 
                      type="button" 
                      className="btn btn-secondary no-print" 
                      onClick={handlePrintMarkEntrySheet}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Printer size={16} /> শিট প্রিন্ট করুন
                    </button>
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
          )}

          {/* TAB 2: SINGLE STUDENT RESULT VIEW */}
          {examViewMode === 'student_result' && (
            <div className="animate-slide-up">
              {/* Search & Selection Card */}
              <div className="card mb-20 no-print" style={{ padding: '16px 20px' }}>
                <div className="flex gap-16" style={{ alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="flex gap-12" style={{ alignItems: 'flex-end', flexWrap: 'wrap', flex: 1 }}>
                    {/* Section Filter */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '150px' }}>
                      <label className="form-label text-xs">সেকশন ফিল্টার</label>
                      <select
                        className="form-input form-select"
                        value={singleStudentFilterSec}
                        onChange={(e) => setSingleStudentFilterSec(e.target.value)}
                      >
                        <option value="all">সকল সেকশন</option>
                        {SECTION_OPTIONS.map((sec, idx) => (
                          <option key={idx} value={sec}>সেকশন {sec}</option>
                        ))}
                      </select>
                    </div>

                    {/* Student Select Dropdown */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '220px', flex: 1 }}>
                      <label className="form-label text-xs">ছাত্র নির্বাচন করুন (তালিকা থেকে)</label>
                      <select
                        className="form-input form-select"
                        value={selectedStudentResult?.student?._id || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val) {
                            setStudentSearchId(val);
                            fetchSingleStudentResult(val);
                          }
                        }}
                      >
                        <option value="">-- শিক্ষার্থী নির্বাচন করুন --</option>
                        {classStudentsList
                          .filter(st => {
                            if (singleStudentFilterSec === 'all') return true;
                            const secVal = typeof st.currentEnrollment?.section === 'object'
                              ? (st.currentEnrollment?.section?.name || st.currentEnrollment?.section?._id)
                              : (st.currentEnrollment?.section || st.section);
                            return String(secVal || '') === String(singleStudentFilterSec);
                          })
                          .map(st => {
                            const name = st.user?.fullName || `${st.user?.firstName || ''} ${st.user?.lastName || ''}`.trim() || st.studentId || 'শিক্ষার্থী';
                            const rollNum = st.currentEnrollment?.rollNumber || st.roll || '';
                            const roll = rollNum ? `[রোল: ${rollNum}] ` : '';
                            return (
                              <option key={st._id} value={st._id}>
                                {roll}{name} ({st.studentId || st._id.slice(0, 8)})
                              </option>
                            );
                          })}
                      </select>
                    </div>

                    {/* Direct Student ID Search */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '200px' }}>
                      <label className="form-label text-xs">অথবা ছাত্র আইডি (Student ID)</label>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <input
                          type="text"
                          className="form-input"
                          style={{ marginBottom: 0 }}
                          placeholder="যেমন: 2026001 বা ANA-01"
                          value={studentSearchId}
                          onChange={(e) => setStudentSearchId(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') fetchSingleStudentResult();
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => fetchSingleStudentResult()}
                          disabled={loadingSingleStudent || !studentSearchId.trim()}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <Search size={15} />
                          <span>খুঁজুন</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {selectedStudentResult && selectedStudentResult.results?.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handlePrintSingleStudentMarksheet}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Printer size={16} />
                      <span>মার্কশিট প্রিন্ট করুন</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Result Body */}
              {loadingSingleStudent ? (
                <div className="card flex-center" style={{ padding: '60px' }}>
                  <div className="spinner"></div>
                </div>
              ) : !selectedStudentResult ? (
                <div className="card empty-state">
                  <User size={48} style={{ opacity: 0.3 }} />
                  <div className="empty-state-title mt-16">শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন</div>
                  <p className="text-muted text-sm mt-8">উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।</p>
                </div>
              ) : selectedStudentResult.results?.length === 0 ? (
                <div className="card empty-state">
                  <AlertCircle size={48} style={{ opacity: 0.3, color: 'var(--warning)' }} />
                  <div className="empty-state-title mt-16">এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি</div>
                  <p className="text-muted text-sm mt-8">নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।</p>
                </div>
              ) : (
                renderStudentDetailedResultCard(selectedStudentResult)
              )}
            </div>
          )}

          {/* TAB 3: SINGLE SUBJECT RESULT VIEW WITH TICKMARK PRINT PREVIEW */}
          {examViewMode === 'subject_result' && (
            <div className="animate-slide-up">
              {/* Filter Bar */}
              <div className="card mb-20 no-print" style={{ padding: '16px 20px' }}>
                <div className="flex gap-16" style={{ alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="flex gap-12" style={{ alignItems: 'flex-end', flexWrap: 'wrap', flex: 1 }}>
                    {/* Subject Selector */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '220px' }}>
                      <label className="form-label text-xs">বিষয় নির্বাচন করুন *</label>
                      <select
                        className="form-input form-select"
                        value={subjectViewSubId}
                        onChange={(e) => {
                          const sId = e.target.value;
                          setSubjectViewSubId(sId);
                          if (sId) loadSubjectResultData(sId, subjectViewSection);
                        }}
                      >
                        <option value="">-- বিষয় নির্বাচন করুন --</option>
                        {subjects.map(s => (
                          <option key={s._id} value={s._id}>
                            {s.name} ({s.code || 'কোড নেই'}) • পূর্ণমান: {s.totalMarks || 100}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Section Filter */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '160px' }}>
                      <label className="form-label text-xs">সেকশন ফিল্টার</label>
                      <select
                        className="form-input form-select"
                        value={subjectViewSection}
                        onChange={(e) => {
                          const sec = e.target.value;
                          setSubjectViewSection(sec);
                          if (subjectViewSubId) loadSubjectResultData(subjectViewSubId, sec);
                        }}
                      >
                        <option value="all">সকল সেকশন</option>
                        {SECTION_OPTIONS.map((sec, idx) => (
                          <option key={idx} value={sec}>সেকশন {sec}</option>
                        ))}
                      </select>
                    </div>

                    {/* Live Search */}
                    <div className="form-group" style={{ marginBottom: 0, minWidth: '180px' }}>
                      <label className="form-label text-xs">নাম বা রোল দিয়ে খুঁজুন</label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ marginBottom: 0 }}
                        placeholder="নাম / রোল ফিল্টার..."
                        value={subjectViewSearch}
                        onChange={(e) => setSubjectViewSearch(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Actions: Print Selected */}
                  <div className="flex gap-8" style={{ alignItems: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        const filtered = subjectViewMarks.filter(m => {
                          if (!subjectViewSearch.trim()) return true;
                          const q = subjectViewSearch.toLowerCase();
                          const name = (m.student?.fullName || m.student?.user?.fullName || `${m.student?.user?.firstName || ''} ${m.student?.user?.lastName || ''}`).toLowerCase();
                          const roll = String(m.student?.currentEnrollment?.rollNumber || '').toLowerCase();
                          const sId = String(m.student?.studentId || '').toLowerCase();
                          return name.includes(q) || roll.includes(q) || sId.includes(q);
                        });
                        handlePrintSubjectResult(filtered);
                      }}
                      disabled={loadingSubjectView || subjectViewMarks.length === 0}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Printer size={16} />
                      <span>টিকমার্ককৃতদের প্রিন্ট প্রিভিউ</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Subject Result Body */}
              {loadingSubjectView ? (
                <div className="card flex-center" style={{ padding: '60px' }}>
                  <div className="spinner"></div>
                </div>
              ) : !subjectViewSubId ? (
                <div className="card empty-state">
                  <BookOpen size={48} style={{ opacity: 0.3 }} />
                  <div className="empty-state-title mt-16">বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন</div>
                  <p className="text-muted text-sm mt-8">উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।</p>
                </div>
              ) : (
                (() => {
                  const currentSub = subjects.find(s => s._id === subjectViewSubId);
                  const subMax = Number(currentSub?.totalMarks) || 100;

                  const filtered = subjectViewMarks.filter(m => {
                    if (!subjectViewSearch.trim()) return true;
                    const q = subjectViewSearch.toLowerCase();
                    const name = (m.student?.fullName || m.student?.user?.fullName || `${m.student?.user?.firstName || ''} ${m.student?.user?.lastName || ''}`).toLowerCase();
                    const roll = String(m.student?.currentEnrollment?.rollNumber || '').toLowerCase();
                    const sId = String(m.student?.studentId || '').toLowerCase();
                    return name.includes(q) || roll.includes(q) || sId.includes(q);
                  });

                  // Stats calculation
                  const appearedCount = filtered.length;
                  const marksList = filtered.map(m => Number(m.marksObtained) || 0);
                  const highestMark = marksList.length > 0 ? Math.max(...marksList) : 0;
                  const avgMark = marksList.length > 0 ? (marksList.reduce((a, b) => a + b, 0) / marksList.length).toFixed(1) : 0;
                  const passedCount = filtered.filter(m => {
                    const marks = Number(m.marksObtained) || 0;
                    const pct = subMax > 0 ? (marks / subMax) * 100 : marks;
                    return pct >= 33;
                  }).length;
                  const passRate = appearedCount > 0 ? Math.round((passedCount / appearedCount) * 100) : 0;

                  const allFilteredIds = filtered.map(m => String(m.student?._id || m._id));
                  const isAllSelected = allFilteredIds.length > 0 && allFilteredIds.every(id => selectedStudentCheckboxes.has(id));

                  return (
                    <div className="animate-slide-up">
                      {/* Summary Metrics */}
                      <div className="grid grid-5 mb-20" style={{ gap: '12px' }}>
                        <div className="card text-center" style={{ padding: '14px', borderLeft: '4px solid var(--primary)' }}>
                          <div className="text-muted text-xs">মোট পরীক্ষার্থী</div>
                          <div className="font-bold text-xl">{appearedCount} জন</div>
                        </div>
                        <div className="card text-center" style={{ padding: '14px', borderLeft: '4px solid #10b981' }}>
                          <div className="text-muted text-xs">সর্বোচ্চ নম্বর</div>
                          <div className="font-bold text-xl" style={{ color: '#059669' }}>
                            {highestMark} / {subMax}
                          </div>
                        </div>
                        <div className="card text-center" style={{ padding: '14px', borderLeft: '4px solid #0284c7' }}>
                          <div className="text-muted text-xs">গড় প্রাপ্ত নম্বর</div>
                          <div className="font-bold text-xl" style={{ color: '#0284c7' }}>
                            {avgMark}
                          </div>
                        </div>
                        <div className="card text-center" style={{ padding: '14px', borderLeft: '4px solid #8b5cf6' }}>
                          <div className="text-muted text-xs">পাস করেছে</div>
                          <div className="font-bold text-xl" style={{ color: '#7c3aed' }}>
                            {passedCount} জন
                          </div>
                        </div>
                        <div className="card text-center" style={{ padding: '14px', borderLeft: '4px solid #f59e0b' }}>
                          <div className="text-muted text-xs">পাসের হার</div>
                          <div className="font-bold text-xl" style={{ color: '#d97706' }}>
                            {passRate}%
                          </div>
                        </div>
                      </div>

                      {/* Selection Toolbar */}
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        marginBottom: '10px', padding: '8px 12px', background: 'var(--bg-secondary)',
                        borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.85rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 600 }}>
                            <input
                              type="checkbox"
                              checked={isAllSelected}
                              onChange={() => handleToggleSelectAll(filtered)}
                              style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                            />
                            <span>সবাইকে নির্বাচন করুন</span>
                          </label>
                          <span className="text-muted">({selectedStudentCheckboxes.size}/{appearedCount} জন টিকমার্ককৃত)</span>
                        </div>
                        <div className="text-muted text-xs">
                          * প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।
                        </div>
                      </div>

                      {/* Table */}
                      {filtered.length === 0 ? (
                        <div className="card empty-state">
                          <AlertCircle size={40} style={{ opacity: 0.3 }} />
                          <div className="empty-state-title mt-12">কোনো ফলাফল পাওয়া যায়নি</div>
                          <p className="text-muted text-sm mt-4">এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।</p>
                        </div>
                      ) : (
                        <div className="card table-container" style={{ padding: 0 }}>
                          <table className="table">
                            <thead>
                              <tr>
                                <th style={{ width: '45px', textAlign: 'center' }}>
                                  <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    onChange={() => handleToggleSelectAll(filtered)}
                                    title="সবাইকে নির্বাচন"
                                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                                  />
                                </th>
                                <th style={{ width: '60px', textAlign: 'center' }}>রোল</th>
                                <th>শিক্ষার্থীর নাম</th>
                                <th style={{ width: '100px', textAlign: 'center' }}>শিক্ষার্থী আইডি</th>
                                <th style={{ width: '130px', textAlign: 'center' }}>প্রাপ্ত নম্বর (পূর্ণমান {subMax})</th>
                                <th style={{ width: '90px', textAlign: 'center' }}>শতকরা</th>
                                <th style={{ width: '90px', textAlign: 'center' }}>গ্রেড</th>
                                <th style={{ width: '110px', textAlign: 'center' }}>ফলাফল</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filtered.map(m => {
                                const stId = String(m.student?._id || m._id);
                                const isChecked = selectedStudentCheckboxes.has(stId);
                                const marks = Number(m.marksObtained) || 0;
                                const pct = subMax > 0 ? Math.round((marks / subMax) * 100) : marks;
                                const grade = calculateGrade(marks, subMax);
                                const isPass = pct >= 33;
                                const stName = m.student?.fullName || m.student?.user?.fullName || `${m.student?.user?.firstName || ''} ${m.student?.user?.lastName || ''}`.trim() || '—';
                                const roll = m.student?.currentEnrollment?.rollNumber || '—';
                                const sId = m.student?.studentId || '—';

                                return (
                                  <tr key={stId} style={{ background: isChecked ? 'rgba(15, 118, 110, 0.03)' : undefined }}>
                                    <td style={{ textAlign: 'center' }}>
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => handleToggleStudent(stId)}
                                        style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                                      />
                                    </td>
                                    <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>{roll}</td>
                                    <td>
                                      <div className="font-semibold">{stName}</div>
                                      {m.student?.currentEnrollment?.section && (
                                        <div className="text-xs text-muted">সেকশন: {m.student.currentEnrollment.section}</div>
                                      )}
                                    </td>
                                    <td style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.85rem' }}>{sId}</td>
                                    <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>
                                      {marks} <span className="text-muted text-xs" style={{ fontWeight: 400 }}>/ {subMax}</span>
                                    </td>
                                    <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>{pct}%</td>
                                    <td style={{ textAlign: 'center' }}>
                                      <span className={`badge ${getGradeBadgeClass(grade)}`} style={{ minWidth: '40px', justifyContent: 'center' }}>
                                        {grade}
                                      </span>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                      <span className={`badge ${isPass ? 'badge-active' : 'badge-danger'}`}>
                                        {isPass ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  );
                })()
              )}
            </div>
          )}

          {/* TAB 4: MERIT LIST VIEW */}
          {examViewMode === 'merit' && (
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
                <div className="card table-container" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <table className="table" style={{ width: '100%', minWidth: `${680 + (meritSubjectsList.length * 105)}px` }}>
                    <thead>
                      <tr>
                        <th style={{ width: '50px', textAlign: 'center' }}>ক্রম</th>
                        <th style={{ minWidth: '180px' }}>শিক্ষার্থীর নাম ও আইডি</th>
                        <th style={{ width: '70px', textAlign: 'center' }}>রোল</th>
                        {meritSubjectsList.map(sub => (
                          <th key={sub._id} style={{ textAlign: 'center', minWidth: '100px', whiteSpace: 'nowrap' }}>
                            <div>{sub.name}</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.85 }}>({sub.totalMarks || 100})</div>
                          </th>
                        ))}
                        <th style={{ textAlign: 'center', minWidth: '120px' }}>সর্বমোট মার্ক</th>
                        <th style={{ minWidth: '130px', textAlign: 'center' }}>স্থান</th>
                        <th style={{ textAlign: 'center', width: '75px' }}>গ্রেড</th>
                        <th style={{ textAlign: 'center', width: '85px' }}>শতকরা হার</th>
                        <th style={{ textAlign: 'center', minWidth: '110px' }}>স্ট্যাটাস</th>
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
                            <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--text-muted)' }}>
                              {idx + 1}
                            </td>
                            <td>
                              <div className="font-semibold" style={{ fontSize: '0.92rem' }}>
                                {studentName}
                              </div>
                              <div className="text-xs text-muted">
                                আইডি: {student.studentId} • সেকশন: {student.currentEnrollment?.section?.name || (typeof student.currentEnrollment?.section === 'string' ? student.currentEnrollment.section : '—')}
                              </div>
                            </td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem' }}>
                              {roll}
                            </td>
                            {meritSubjectsList.map(sub => {
                              const rec = item.studentMarksObj?.[sub._id];
                              const score = rec?.marksObtained;
                              const hasScore = score !== null && score !== undefined && score !== '';
                              const subFullMarks = Number(sub.totalMarks) || 100;
                              const isSubFail = hasScore && Number(score) < subFullMarks * 0.33;

                              return (
                                <td 
                                  key={sub._id} 
                                  style={{ 
                                    textAlign: 'center', 
                                    fontFamily: 'Inter', 
                                    fontWeight: 700, 
                                    fontSize: '0.95rem',
                                    color: isSubFail ? '#dc2626' : (hasScore ? '#0f172a' : 'var(--text-muted)'),
                                    background: isSubFail ? 'rgba(239, 68, 68, 0.06)' : 'transparent'
                                  }}
                                >
                                  {hasScore ? score : '—'}
                                </td>
                              );
                            })}
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 800, fontSize: '0.95rem', color: '#0f766e' }}>
                              {item.subjectsCountWithMarks === 0 ? '—' : `${item.totalObtained} / ${item.totalFullMarks || 100}`}
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span 
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 800,
                                  fontSize: isTop1 || isTop2 || isTop3 ? '0.92rem' : '0.85rem',
                                  color: isTop1 ? '#b45309' : isTop2 ? '#475569' : isTop3 ? '#c2410c' : 'inherit',
                                  padding: '4px 8px',
                                  borderRadius: '6px',
                                  background: isTop1 ? '#fef3c7' : isTop2 ? '#f1f5f9' : isTop3 ? '#ffedd5' : 'transparent',
                                  border: isTop1 ? '1px solid #fde68a' : isTop2 ? '1px solid #cbd5e1' : isTop3 ? '1px solid #fed7aa' : 'none'
                                }}
                              >
                                {item.rankText}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className={`badge ${getGradeBadgeClass(item.overallGrade)}`} style={{ fontSize: '0.85rem', width: '45px', justifyContent: 'center' }}>
                                {item.overallGrade}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700 }}>
                              {item.subjectsCountWithMarks === 0 ? '—' : `${item.percentage}%`}
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              {item.subjectsCountWithMarks === 0 ? (
                                <span className="badge badge-muted">অনুপস্থিত</span>
                              ) : item.isIncomplete ? (
                                <span className="badge badge-warning" style={{ background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' }}>অসম্পূর্ণ</span>
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
      ) : examViewMode === 'annual_combined' ? (
        // ANNUAL COMBINED MERIT LIST WORKSPACE
        <div className="animate-fade-in">
          <div className="page-header no-print">
            <div className="flex gap-16" style={{ alignItems: 'center' }}>
              <button className="btn btn-secondary btn-icon" onClick={() => setExamViewMode('marks')}>
                <ArrowLeft size={18} />
              </button>
              <div>
                <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={22} style={{ color: '#d97706' }} />
                  <span>বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)</span>
                </h1>
                <p className="page-subtitle">১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান</p>
              </div>
            </div>

            <div className="flex gap-8">
              <button
                className="btn btn-secondary"
                onClick={handlePrintAnnualMeritList}
                disabled={annualLoading || !annualData || annualData.rankings?.length === 0}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Printer size={16} />
                <span>প্রিন্ট করুন</span>
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="card mb-20 no-print" style={{ padding: '16px', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
                <label className="form-label" style={{ margin: 0, fontWeight: 600 }}>শ্রেণি নির্বাচন:</label>
                <select
                  className="form-input form-select"
                  style={{ marginBottom: 0 }}
                  value={annualSelectedClass}
                  onChange={e => {
                    const cid = e.target.value;
                    setAnnualSelectedClass(cid);
                    loadAnnualCombinedRankings(cid, annualSelectedSection);
                  }}
                >
                  {classes.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '180px' }}>
                <label className="form-label" style={{ margin: 0, fontWeight: 600 }}>সেকশন:</label>
                <select
                  className="form-input form-select"
                  style={{ marginBottom: 0 }}
                  value={annualSelectedSection}
                  onChange={e => {
                    const sec = e.target.value;
                    setAnnualSelectedSection(sec);
                    loadAnnualCombinedRankings(annualSelectedClass, sec);
                  }}
                >
                  <option value="all">সকল সেকশন</option>
                  {SECTION_OPTIONS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                className="btn btn-primary btn-sm"
                onClick={() => loadAnnualCombinedRankings(annualSelectedClass, annualSelectedSection)}
                disabled={annualLoading}
                style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={14} className={annualLoading ? 'spinner' : ''} />
                <span>রিফ্রেশ</span>
              </button>
            </div>
          </div>

          {/* Metrics Summary Cards */}
          {annualData && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '20px' }} className="no-print">
              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #0284c7' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>মোট পরীক্ষার্থী</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0284c7', marginTop: '4px' }}>
                  {annualData.rankings?.length || 0} জন
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #10b981' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>১ম স্থান অধিকারী (Annual Top)</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#10b981', marginTop: '4px' }}>
                  {annualData.rankings?.find(r => r.rank === 1)?.name || '—'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  প্রাপ্ত নম্বর: {annualData.rankings?.find(r => r.rank === 1)?.grandTotalObtained || 0}
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderLeft: '4px solid #f59e0b' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>টার্ম পরীক্ষা উপস্থিতি</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginTop: '6px', lineHeight: 1.4 }}>
                  <div>১ম সাময়িক: <strong>{annualData.termExams?.term1?.name || 'অনুপলব্ধ'}</strong></div>
                  <div>২য় সাময়িক: <strong>{annualData.termExams?.term2?.name || 'অনুপলব্ধ'}</strong></div>
                  <div>৩য় সাময়িক: <strong>{annualData.termExams?.term3?.name || 'অনুপলব্ধ'}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Combined Table */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {annualLoading ? (
              <div style={{ padding: '60px', textAlign: 'center' }}>
                <div className="spinner" style={{ margin: '0 auto 12px' }}></div>
                <div className="text-muted">বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে...</div>
              </div>
            ) : !annualData || annualData.rankings?.length === 0 ? (
              <div className="card empty-state text-center" style={{ padding: '40px' }}>
                <Trophy size={42} style={{ opacity: 0.3, margin: '0 auto 12px' }} />
                <h4>কোনো মেধা তালিকা পাওয়া যায়নি</h4>
                <p className="text-muted text-sm">এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '12px 14px', width: '140px', textAlign: 'center' }}>বার্ষিক মেধা স্থান</th>
                      <th style={{ padding: '12px 14px', width: '60px', textAlign: 'center' }}>রোল</th>
                      <th style={{ padding: '12px 14px' }}>শিক্ষার্থীর নাম ও আইডি</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center' }}>১ম সাময়িক</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center' }}>২য় সাময়িক</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center' }}>৩য় সাময়িক</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center', background: 'rgba(245, 158, 11, 0.08)' }}>সর্বমোট নম্বর (Grand Total)</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center' }}>শতকরা (%)</th>
                      <th style={{ padding: '12px 14px', textAlign: 'center' }}>গ্রেড</th>
                    </tr>
                  </thead>
                  <tbody>
                    {annualData.rankings.map((st) => (
                      <tr key={st.studentId} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ textAlign: 'center', padding: '10px 14px' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '3px 8px',
                            borderRadius: '16px',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            background: st.rank === 1 ? '#fef3c7' : st.rank === 2 ? '#f1f5f9' : st.rank === 3 ? '#ffedd5' : 'transparent',
                            color: st.rank === 1 ? '#b45309' : st.rank === 2 ? '#475569' : st.rank === 3 ? '#c2410c' : 'var(--text-secondary)'
                          }}>
                            {st.rankText}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center', fontFamily: 'monospace', fontWeight: 600 }}>
                          {st.rollNumber || '—'}
                        </td>
                        <td style={{ padding: '10px 14px' }}>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{st.name}</div>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>আইডি: {st.studentCode}</div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {st.term1Obtained} <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>/ {st.term1Max}</span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {st.term2Obtained} <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>/ {st.term2Max}</span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {st.term3Obtained} <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>/ {st.term3Max}</span>
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: 800, color: '#d97706', fontSize: '0.98rem', background: 'rgba(245, 158, 11, 0.05)' }}>
                          {st.grandTotalObtained} <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/ {st.grandTotalMaxMarks}</span>
                        </td>
                        <td style={{ textAlign: 'center', fontWeight: 600 }}>
                          {st.overallPercentage}%
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className={`badge ${getGradeBadgeClass(st.overallGrade)}`} style={{ fontSize: '0.8rem' }}>
                            {st.overallGrade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
            <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', borderColor: '#f59e0b', color: '#b45309', background: 'rgba(245, 158, 11, 0.08)' }}
                onClick={() => {
                  setExamViewMode('annual_combined');
                  if (classes.length > 0) {
                    const cid = annualSelectedClass || classes[0]._id;
                    setAnnualSelectedClass(cid);
                    loadAnnualCombinedRankings(cid, annualSelectedSection);
                  }
                }}
              >
                <Trophy size={16} style={{ color: '#d97706' }} />
                <span>🏆 বার্ষিক সমন্বিত মেধা তালিকা</span>
              </button>
              {['super_admin', 'admin', 'principal', 'teacher'].includes(user?.userType) && (
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  <Plus size={16} /> নতুন পরীক্ষা তৈরি
                </button>
              )}
            </div>
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
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span>{exam.name}</span>
                        {exam.examCategory === 'term_exam' && (
                          <span className="badge badge-info" style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                            টার্ম {exam.termNumber || 1}
                          </span>
                        )}
                        {exam.examCategory === 'monthly_test' && (
                          <span className="badge badge-success" style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                            মাসিক টেস্ট ({MONTH_OPTIONS.find(m => m.value === exam.month)?.label.split(' ')[0] || exam.month})
                          </span>
                        )}
                        {exam.examCategory === 'model_test' && (
                          <span className="badge badge-warning" style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                            মডেল টেস্ট {exam.termNumber || 1}
                          </span>
                        )}
                        {exam.examCategory === 'weekly_sabina' && (
                          <span className="badge" style={{ fontSize: '0.68rem', padding: '2px 7px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            সাপ্তাহিক সবিনা পরীক্ষা
                          </span>
                        )}
                        {exam.examCategory === 'tanzim_board' && (
                          <span className="badge" style={{ fontSize: '0.68rem', padding: '2px 7px', background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                            তানজিমুল মাদারিস বোর্ড
                          </span>
                        )}
                        {exam.examCategory === 'huffaz_board' && (
                          <span className="badge" style={{ fontSize: '0.68rem', padding: '2px 7px', background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                            হুফফাজুল কুরআন বোর্ড
                          </span>
                        )}
                      </h3>
                      <div className="text-sm text-muted">
                        শ্রেণি: {exam.classLevel?.name || 'সকল শ্রেণি'}
                        {exam.examCategory === 'monthly_test' && (
                          <span style={{ marginLeft: '8px', color: 'var(--primary)' }}>
                            • ৪টি নির্ধারিত বিষয়
                          </span>
                        )}
                      </div>
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
                    <label className="form-label" style={{ fontWeight: 700, color: '#0f766e' }}>পরীক্ষার ক্যাটাগরি *</label>
                    <select
                      name="examCategory"
                      className="form-input form-select"
                      required
                      value={formData.examCategory}
                      onChange={e => {
                        const cat = e.target.value;
                        let newName = '';
                        if (cat === 'term_exam') newName = '১ম সাময়িক পরীক্ষা';
                        else if (cat === 'model_test') newName = '১ম মডেল টেস্ট';
                        else if (cat === 'monthly_test') newName = 'জানুয়ারি মাসের মাসিক ক্লাস টেস্ট';
                        else if (cat === 'weekly_sabina') newName = 'সাপ্তাহিক সবিনা পরীক্ষা';
                        else if (cat === 'tanzim_board') newName = 'তানজিমুল মাদারিস বোর্ড পরীক্ষা';
                        else if (cat === 'huffaz_board') newName = 'হুফফাজুল কুরআন বোর্ড পরীক্ষা';
                        else newName = 'সাধারণ পরীক্ষা';

                        setFormData(prev => ({
                          ...prev,
                          examCategory: cat,
                          name: newName,
                          termNumber: 1,
                          month: 'january',
                          selectedSubjects: []
                        }));
                        if (formData.classLevel) {
                          loadSubjectsForModal(formData.classLevel);
                        }
                      }}
                    >
                      {EXAM_CATEGORIES.map(c => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  {formData.examCategory === 'term_exam' && (
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 600 }}>টার্ম নির্বাচন করুন *</label>
                      <select
                        name="termNumber"
                        className="form-input form-select"
                        value={formData.termNumber}
                        onChange={e => {
                          const tNum = parseInt(e.target.value) || 1;
                          const tNames = { 1: '১ম সাময়িক পরীক্ষা', 2: '২য় সাময়িক পরীক্ষা', 3: '৩য় সাময়িক পরীক্ষা (বার্ষিক)' };
                          setFormData(prev => ({
                            ...prev,
                            termNumber: tNum,
                            name: tNames[tNum] || `${tNum}ম সাময়িক পরীক্ষা`
                          }));
                        }}
                      >
                        <option value="1">১ম সাময়িক পরীক্ষা</option>
                        <option value="2">২য় সাময়িক পরীক্ষা</option>
                        <option value="3">৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)</option>
                      </select>
                    </div>
                  )}

                  {formData.examCategory === 'model_test' && (
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 600 }}>মডেল টেস্ট নম্বর *</label>
                      <select
                        name="termNumber"
                        className="form-input form-select"
                        value={formData.termNumber}
                        onChange={e => {
                          const mNum = parseInt(e.target.value) || 1;
                          const mNames = { 1: '১ম মডেল টেস্ট', 2: '২য় মডেল টেস্ট', 3: '৩য় মডেল টেস্ট' };
                          setFormData(prev => ({
                            ...prev,
                            termNumber: mNum,
                            name: mNames[mNum] || `${mNum}ম মডেল টেস্ট`
                          }));
                        }}
                      >
                        <option value="1">১ম মডেল টেস্ট</option>
                        <option value="2">২য় মডেল টেস্ট</option>
                        <option value="3">৩য় মডেল টেস্ট</option>
                      </select>
                    </div>
                  )}

                  {formData.examCategory === 'monthly_test' && (
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 600 }}>মাসিক পরীক্ষার মাস *</label>
                      <select
                        name="month"
                        className="form-input form-select"
                        value={formData.month}
                        onChange={e => {
                          const m = e.target.value;
                          const mObj = MONTH_OPTIONS.find(o => o.value === m);
                          const mLabel = mObj ? mObj.label.split(' ')[0] : m;
                          setFormData(prev => ({
                            ...prev,
                            month: m,
                            name: `${mLabel} মাসের মাসিক ক্লাস টেস্ট`
                          }));
                        }}
                      >
                        {MONTH_OPTIONS.map(m => (
                          <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">পরীক্ষার নাম *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-input" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="যেমন: ১ম সাময়িক পরীক্ষা ২০২৪" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">শ্রেণি *</label>
                    <select 
                      name="classLevel" 
                      className="form-input form-select" 
                      required
                      value={formData.classLevel} 
                      onChange={e => {
                        const val = e.target.value;
                        setFormData(prev => ({ ...prev, classLevel: val, selectedSubjects: [] }));
                        loadSubjectsForModal(val);
                      }}
                    >
                      <option value="">সকল শ্রেণি / শ্রেণি নির্বাচন করুন</option>
                      {classes.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {formData.examCategory === 'monthly_test' && (
                    <div className="form-group" style={{
                      background: 'rgba(16, 185, 129, 0.05)',
                      padding: '14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      marginBottom: '16px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <label className="form-label" style={{ margin: 0, fontWeight: 700, color: '#065f46' }}>
                          সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *
                        </label>
                        <span style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: formData.selectedSubjects.length === 4 ? '#10b981' : '#f59e0b',
                          color: '#fff'
                        }}>
                          নির্বাচিত: {formData.selectedSubjects.length}/৪ টি
                        </span>
                      </div>
                      
                      {!formData.classLevel ? (
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।
                        </div>
                      ) : modalClassSubjects.length === 0 ? (
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।
                        </div>
                      ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '8px', maxHeight: '160px', overflowY: 'auto' }}>
                          {modalClassSubjects.map(sub => {
                            const isChecked = formData.selectedSubjects.includes(sub._id);
                            return (
                              <label
                                key={sub._id}
                                style={{
                                  display: 'flex', alignItems: 'center', gap: '8px',
                                  padding: '6px 10px', borderRadius: '6px',
                                  background: isChecked ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
                                  border: isChecked ? '1px solid #10b981' : '1px solid var(--border-color)',
                                  cursor: 'pointer', fontSize: '0.84rem'
                                }}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {
                                    const current = formData.selectedSubjects;
                                    if (isChecked) {
                                      setFormData(prev => ({ ...prev, selectedSubjects: current.filter(id => id !== sub._id) }));
                                    } else {
                                      if (current.length >= 4) {
                                        setToast({ type: 'error', message: 'মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন' });
                                        return;
                                      }
                                      setFormData(prev => ({ ...prev, selectedSubjects: [...current, sub._id] }));
                                    }
                                  }}
                                />
                                <span>{sub.name}</span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

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
