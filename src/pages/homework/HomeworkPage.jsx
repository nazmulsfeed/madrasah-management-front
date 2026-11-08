import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Plus, Search, Filter, Calendar, BookOpen, BookOpenCheck, FileText, X, 
  CheckCircle, AlertCircle, Trash2, Edit, ChevronLeft, ChevronRight, 
  User, Award, Layers, Hash, BookMarked, Sparkles
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { SECTION_OPTIONS } from '../../utils/constants';
import { getNextWorkingDay, formatDateDDMMYYYY } from '../../utils/helpers';

// 30 Paras for Dropdowns
const PARA_OPTIONS = Array.from({ length: 30 }, (_, i) => ({
  value: (i + 1).toString(),
  label: `পারা ${(i + 1).toLocaleString('bn-BD')}`
}));

const DEFAULT_HIFZ_FORM = {
  student: '',
  date: new Date().toISOString().split('T')[0],
  category: 'hifz',
  // Hifz Fields
  sabaqPara: '',
  sabaqDetails: '',
  sevenSabaqPara: '',
  sevenSabaqDetails: '',
  amuktaPara: '',
  amuktaDetails: '',
  tilawatPara: '',
  tilawatDetails: '',
  namazTilawatPara: '',
  namazTilawatDetails: '',
  weeklySabinaPara: '',
  weeklySabinaDetails: '',
  lokma: '',
  // Nazera Fields
  nazeraPara: '',
  nazeraParaDetails: '',
  nazeraPage: '',
  nazeraSurah: '',
  nazeraAyat: '',
  nazeraQaidaLesson: '',
  // Maktab Fields
  maktabSurah: '',
  maktabLesson: '',
  // General Fields
  quality: 'good',
  mistakesCount: 0,
  remarks: ''
};

export default function HomeworkPage() {
  const { user } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const isStudent = user?.userType === 'student';
  const isGuardian = user?.userType === 'guardian';
  const isStudentOrGuardian = isStudent || isGuardian;

  // Identify Student's Branch, Department, and Program Type
  const branchName = user?.studentBranchName || user?.branch?.name || (typeof user?.branch === 'string' ? user.branch : '') || '';
  const dept = user?.department || '';
  const hifzProg = user?.hifzProgramType || '';

  // 1. Dual program student: 'বালক শাখা + নুরানী' অথবা 'বালিকা শাখা + নুরানী' অথবা 'hifz_aliya'
  const isDualNooraniHifz = isStudent && (
    branchName.includes('+ নুরানী') || 
    branchName.includes('+নুরানী') || 
    hifzProg === 'hifz_aliya'
  );

  // 2. Pure Noorani student: 'নুরানী শাখা' or non-hifz department without Hifz relation
  const isPureNoorani = isStudent && !isDualNooraniHifz && (
    branchName === 'নুরানী শাখা' ||
    dept === 'নুরানী বিভাগ' ||
    (!dept.includes('হিফজ') && !dept.includes('নাজেরা') && !dept.includes('মক্তব') && branchName !== 'হিফজ শাখা' && hifzProg !== 'only_hifz')
  );

  // 3. Pure Hifz student: 'হিফজ শাখা' or Hifz/Nazera/Maktab department without Noorani relation
  const isPureHifz = isStudent && !isDualNooraniHifz && (
    branchName === 'হিফজ শাখা' ||
    hifzProg === 'only_hifz' ||
    dept.includes('হিফজ') ||
    dept.includes('নাজেরা') ||
    dept.includes('মক্তব')
  );

  // Tab Visibility Rules (as requested by user):
  // - বালক শাখা + নুরানী / বালিকা শাখা + নুরানী: BOTH tabs visible!
  // - শুধু নুরানী: ONLY Noorani tab visible (হিফজ দেখাবেনা)
  // - জাদের নুরানীর সাথে কোন রিলেশন নাই: ONLY Hifz tab visible (নুরানী দেখাবেনা)
  // - শিক্ষক / প্রশাসন: BOTH tabs visible
  const showNooraniTab = !isStudent || isDualNooraniHifz || isPureNoorani;
  const showHifzTab = !isStudent || isDualNooraniHifz || isPureHifz;

  // Default Tab Rules:
  // - Dual program: Hifz default ('কিন্তু হিফজ ডিফল্ট ট্যাব থাকবে')
  // - Pure Hifz: Hifz default
  // - Pure Noorani: Noorani default
  const defaultTab = tabParam 
    ? (tabParam === 'hifz' && showHifzTab ? 'hifz' : (showNooraniTab ? 'noorani' : 'hifz'))
    : (isDualNooraniHifz || isPureHifz ? 'hifz' : 'noorani');

  const [activeTab, setActiveTab] = useState(defaultTab);

  const [myPermissions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('userPermissions') || '{}'); } catch { return {}; }
  });

  const canManageHifz = user?.userType === 'super_admin' || 
    user?.userType === 'co_super_admin' || 
    user?.userType === 'admin' || 
    user?.userType === 'principal' || 
    user?.userType === 'teacher' || 
    user?.userType === 'hifz_teacher' || 
    !!myPermissions?.can_manage_hifz;

  // Sync tab with URL and student branch / department rules
  useEffect(() => {
    if (tabParam === 'hifz' && showHifzTab) {
      if (activeTab !== 'hifz') setActiveTab('hifz');
    } else if (tabParam === 'noorani' && showNooraniTab) {
      if (activeTab !== 'noorani') setActiveTab('noorani');
    } else {
      if (isPureHifz && activeTab !== 'hifz') {
        setActiveTab('hifz');
      } else if (isPureNoorani && activeTab !== 'noorani') {
        setActiveTab('noorani');
      } else if (isDualNooraniHifz && !tabParam && activeTab !== 'hifz') {
        setActiveTab('hifz');
      }
    }
  }, [tabParam, showNooraniTab, showHifzTab, isPureHifz, isPureNoorani, isDualNooraniHifz]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setSearchParams({ tab: newTab });
  };

  // Toast Notification
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // -------------------------------------------------------------
  // NOORANI (CLASS) HOMEWORK STATE
  // -------------------------------------------------------------
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });
  const [isPublic, setIsPublic] = useState(false);

  const [subjectFilter, setSubjectFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filterOptions, setFilterOptions] = useState({ classes: [], sections: [], subjects: [] });
  const [dateFilter, setDateFilter] = useState('today');
  const [customDate, setCustomDate] = useState('');

  const [classes, setClasses] = useState([]);
  const [modalSubjects, setModalSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    classLevel: '',
    section: '',
    dueDate: getNextWorkingDay(),
    status: 'active',
    isKhataHomework: false
  });

  // -------------------------------------------------------------
  // HIFZ / NAZERA / MAKTAB STATE
  // -------------------------------------------------------------
  const [hifzList, setHifzList] = useState([]);
  const [hifzLoading, setHifzLoading] = useState(false);
  const [hifzDateFilter, setHifzDateFilter] = useState('today');
  const [hifzCustomDate, setHifzCustomDate] = useState('');
  const [hifzCategoryFilter, setHifzCategoryFilter] = useState('all');
  const [hifzStudentFilter, setHifzStudentFilter] = useState('');
  const [hifzSearchQuery, setHifzSearchQuery] = useState('');
  
  const [students, setStudents] = useState([]);
  const [hifzModalOpen, setHifzModalOpen] = useState(false);
  const [isHifzEditing, setIsHifzEditing] = useState(false);
  const [editingHifzId, setEditingHifzId] = useState(null);
  const [hifzSubmitting, setHifzSubmitting] = useState(false);
  const [hifzFormData, setHifzFormData] = useState(DEFAULT_HIFZ_FORM);

  // Student picker helper in Hifz modal
  const [hifzModalClassFilter, setHifzModalClassFilter] = useState('');
  const [hifzModalStudentSearch, setHifzModalStudentSearch] = useState('');

  // -------------------------------------------------------------
  // FETCH NOORANI SETTINGS & DATA
  // -------------------------------------------------------------
  useEffect(() => {
    const fetchPublicSettings = async () => {
      try {
        const res = await api.get('/homework/public/settings');
        if (res.data.success) {
          setIsPublic(res.data.data.isHomeworkPublic);
        }
      } catch (err) {
        console.error('Failed to fetch public homework settings', err);
      }
    };
    fetchPublicSettings();
  }, []);

  const handleTogglePublic = async () => {
    try {
      const res = await api.post('/homework/public/toggle', { isHomeworkPublic: !isPublic });
      if (res.data.success) {
        setIsPublic(res.data.data.isHomeworkPublic);
        setToast({
          type: 'success',
          message: res.data.data.isHomeworkPublic
            ? 'হোমওয়ার্ক সফলভাবে সবার জন্য উন্মুক্ত (Public) করা হয়েছে!'
            : 'পাবলিক হোমওয়ার্ক সেটিংস বন্ধ করা হয়েছে।'
        });
      }
    } catch (err) {
      console.error('Failed to toggle public homework', err);
      setToast({ type: 'error', message: 'সেটিংস টগল করতে ব্যর্থ হয়েছে' });
    }
  };

  const fetchHomeworks = async () => {
    setLoading(true);
    try {
      const res = await api.get('/homework', { 
        params: { 
          page, 
          limit: 10, 
          search,
          classLevel: classFilter,
          section: sectionFilter,
          subject: subjectFilter,
          status: statusFilter,
          dateFilter: dateFilter === 'custom' ? customDate : dateFilter
        } 
      });
      if (res.data.success) {
        setHomeworks(res.data.data);
        setPagination(res.data.pagination);
      }
    } catch (err) {
      console.error('Failed to fetch homeworks', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilterOptions = async (classList = classes) => {
    try {
      const res = await api.get('/homework', { params: { limit: 1000 } });
      if (res.data.success && res.data.data) {
        const list = res.data.data;
        const hwClasses = list.map(h => h.classLevel).filter(Boolean);
        const isStu = user?.userType === 'student';
        const apiClasses = (!isStu && classList) ? classList.map(c => c.name).filter(Boolean) : [];
        setFilterOptions({
          classes: Array.from(new Set([...apiClasses, ...hwClasses])),
          sections: Array.from(new Set(list.map(h => h.section).filter(Boolean))),
          subjects: Array.from(new Set(list.map(h => h.subject).filter(Boolean)))
        });
      }
    } catch (err) {
      console.error('Failed to fetch filter options', err);
    }
  };

  useEffect(() => {
    const fetchClassesAndStudents = async () => {
      try {
        const [resClasses, resStudents] = await Promise.all([
          api.get('/students/classes').catch(() => ({ data: {} })),
          api.get('/students', { params: { limit: 500 } }).catch(() => ({ data: {} }))
        ]);
        if (resClasses.data?.success) {
          const loadedClasses = resClasses.data.data.classes || [];
          setClasses(loadedClasses);
          fetchFilterOptions(loadedClasses);
        }
        if (resStudents.data?.success) {
          setStudents(resStudents.data.data || []);
        }
      } catch (err) {
        console.error('Failed to fetch initial metadata:', err);
      }
    };
    fetchClassesAndStudents();
  }, []);

  useEffect(() => {
    const selectedClass = classes.find(c => c.name === formData.classLevel);
    if (!selectedClass) {
      setModalSubjects([]);
      return;
    }
    const fetchSubjectsForClass = async () => {
      try {
        const res = await api.get(`/students/subjects?classLevel=${selectedClass._id}`);
        if (res.data.success) {
          setModalSubjects(res.data.data.subjects || []);
        }
      } catch (err) {
        console.error('Failed to fetch subjects for class:', err);
      }
    };
    fetchSubjectsForClass();
  }, [formData.classLevel, classes]);

  useEffect(() => {
    if (activeTab === 'noorani') {
      fetchHomeworks();
    }
  }, [activeTab, page, classFilter, sectionFilter, subjectFilter, statusFilter, dateFilter, customDate]);

  // -------------------------------------------------------------
  // FETCH HIFZ / NAZERA / MAKTAB HOMEWORK
  // -------------------------------------------------------------
  const fetchHifzProgress = async () => {
    setHifzLoading(true);
    try {
      const params = {};
      if (hifzDateFilter === 'today') {
        params.dateFilter = 'today';
      } else if (hifzDateFilter === 'custom' && hifzCustomDate) {
        params.date = hifzCustomDate;
      }
      if (hifzCategoryFilter && hifzCategoryFilter !== 'all') {
        params.category = hifzCategoryFilter;
      }
      if (hifzStudentFilter) {
        params.student = hifzStudentFilter;
      }
      const res = await api.get('/hifz', { params });
      if (res.data.success) {
        setHifzList(res.data.data.progress || []);
      }
    } catch (err) {
      console.error('Failed to fetch Hifz progress:', err);
      setToast({ type: 'error', message: 'হিফয ও নাজেরা পড়া লোড করতে সমস্যা হয়েছে' });
    } finally {
      setHifzLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'hifz') {
      fetchHifzProgress();
    }
  }, [activeTab, hifzDateFilter, hifzCustomDate, hifzCategoryFilter, hifzStudentFilter]);

  // -------------------------------------------------------------
  // NOORANI ACTIONS
  // -------------------------------------------------------------
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchHomeworks();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      title: '', description: '', subject: '', classLevel: '', section: '', dueDate: getNextWorkingDay(), status: 'active', isKhataHomework: false
    });
  };

  const handleEditClick = (hw) => {
    const dateObj = new Date(hw.dueDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    setFormData({
      title: hw.title || '',
      description: hw.description || '',
      subject: hw.subject || '',
      classLevel: hw.classLevel || '',
      section: hw.section || '',
      dueDate: formattedDate,
      status: hw.status || 'active',
      isKhataHomework: hw.isKhataHomework || false
    });
    setEditingId(hw._id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (isEditing) {
        const res = await api.patch(`/homework/${editingId}`, formData);
        if (res.data.success) {
          setIsModalOpen(false);
          resetForm();
          setIsEditing(false);
          setEditingId(null);
          setToast({ type: 'success', message: 'হোমওয়ার্ক সফলভাবে সংশোধন করা হয়েছে!' });
          fetchHomeworks();
          fetchFilterOptions();
        }
      } else {
        const res = await api.post('/homework', formData);
        if (res.data.success) {
          setIsModalOpen(false);
          resetForm();
          setToast({ type: 'success', message: 'হোমওয়ার্ক সফলভাবে দেওয়া হয়েছে!' });
          fetchHomeworks();
          fetchFilterOptions();
        }
      }
    } catch (err) {
      console.error('Failed to save homework', err);
      const errMsg = err.response?.data?.message || err.response?.data?.errors?.join(', ') || 'হোমওয়ার্ক সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই হোমওয়ার্কটি মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/homework/${id}`);
      setHomeworks(prev => prev.filter(hw => hw._id !== id && hw.id !== id));
      setToast({ type: 'success', message: 'হোমওয়ার্ক সফলভাবে মুছে ফেলা হয়েছে!' });
      fetchFilterOptions();
      fetchHomeworks();
    } catch (err) {
      const errMsg = err.response?.data?.message || 'হোমওয়ার্ক মুছতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    }
  };

  // -------------------------------------------------------------
  // HIFZ / NAZERA / MAKTAB ACTIONS & MODAL
  // -------------------------------------------------------------
  const handleOpenHifzModal = () => {
    setIsHifzEditing(false);
    setEditingHifzId(null);
    setHifzModalClassFilter('');
    setHifzModalStudentSearch('');
    setHifzFormData({
      ...DEFAULT_HIFZ_FORM,
      date: new Date().toISOString().split('T')[0]
    });
    setHifzModalOpen(true);
  };

  const handleEditHifz = (item) => {
    const d = item.hifzData || {};
    const dateObj = new Date(item.date);
    const dateStr = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

    const studentIdVal = typeof item.student === 'object' ? item.student?._id : item.student;

    setHifzFormData({
      student: studentIdVal || '',
      date: dateStr,
      category: item.category || 'hifz',
      // Hifz
      sabaqPara: d.sabaqPara || '',
      sabaqDetails: d.sabaqDetails || '',
      sevenSabaqPara: d.sevenSabaqPara || '',
      sevenSabaqDetails: d.sevenSabaqDetails || '',
      amuktaPara: d.amuktaPara || '',
      amuktaDetails: d.amuktaDetails || '',
      tilawatPara: d.tilawatPara || '',
      tilawatDetails: d.tilawatDetails || '',
      namazTilawatPara: d.namazTilawatPara || '',
      namazTilawatDetails: d.namazTilawatDetails || '',
      weeklySabinaPara: d.weeklySabinaPara || '',
      weeklySabinaDetails: d.weeklySabinaDetails || '',
      lokma: d.lokma || '',
      // Nazera
      nazeraPara: d.nazeraPara || '',
      nazeraParaDetails: d.nazeraParaDetails || '',
      nazeraPage: d.nazeraPage || '',
      nazeraSurah: d.nazeraSurah || '',
      nazeraAyat: d.nazeraAyat || '',
      nazeraQaidaLesson: d.nazeraQaidaLesson || '',
      // Maktab
      maktabSurah: d.maktabSurah || '',
      maktabLesson: d.maktabLesson || '',
      // General
      quality: item.quality || 'good',
      mistakesCount: item.mistakesCount || 0,
      remarks: item.remarks || ''
    });

    setEditingHifzId(item._id);
    setIsHifzEditing(true);
    setHifzModalOpen(true);
  };

  const handleHifzSubmit = async (e) => {
    e.preventDefault();
    if (!hifzFormData.student) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে শিক্ষার্থী নির্বাচন করুন' });
      return;
    }

    setHifzSubmitting(true);
    try {
      const payload = {
        student: hifzFormData.student,
        date: hifzFormData.date,
        category: hifzFormData.category,
        quality: hifzFormData.quality,
        mistakesCount: hifzFormData.mistakesCount,
        remarks: hifzFormData.remarks,
        hifzData: {
          // Hifz
          sabaqPara: hifzFormData.sabaqPara,
          sabaqDetails: hifzFormData.sabaqDetails,
          sevenSabaqPara: hifzFormData.sevenSabaqPara,
          sevenSabaqDetails: hifzFormData.sevenSabaqDetails,
          amuktaPara: hifzFormData.amuktaPara,
          amuktaDetails: hifzFormData.amuktaDetails,
          tilawatPara: hifzFormData.tilawatPara,
          tilawatDetails: hifzFormData.tilawatDetails,
          namazTilawatPara: hifzFormData.namazTilawatPara,
          namazTilawatDetails: hifzFormData.namazTilawatDetails,
          weeklySabinaPara: hifzFormData.weeklySabinaPara,
          weeklySabinaDetails: hifzFormData.weeklySabinaDetails,
          lokma: hifzFormData.lokma,
          // Nazera
          nazeraPara: hifzFormData.nazeraPara,
          nazeraParaDetails: hifzFormData.nazeraParaDetails,
          nazeraPage: hifzFormData.nazeraPage,
          nazeraSurah: hifzFormData.nazeraSurah,
          nazeraAyat: hifzFormData.nazeraAyat,
          nazeraQaidaLesson: hifzFormData.nazeraQaidaLesson,
          // Maktab
          maktabSurah: hifzFormData.maktabSurah,
          maktabLesson: hifzFormData.maktabLesson
        }
      };

      if (isHifzEditing) {
        const res = await api.patch(`/hifz/${editingHifzId}`, payload);
        if (res.data.success) {
          setHifzModalOpen(false);
          setIsHifzEditing(false);
          setEditingHifzId(null);
          setToast({ type: 'success', message: 'পড়া সফলভাবে সংশোধন করা হয়েছে!' });
          fetchHifzProgress();
        }
      } else {
        const res = await api.post('/hifz', payload);
        if (res.data.success) {
          setHifzModalOpen(false);
          setToast({ type: 'success', message: 'পড়া সফলভাবে নির্ধারণ করা হয়েছে!' });
          fetchHifzProgress();
        }
      }
    } catch (err) {
      console.error('Failed to save Hifz progress:', err);
      const errMsg = err.response?.data?.message || 'পড়া সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setHifzSubmitting(false);
    }
  };

  const handleDeleteHifz = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই পড়া ও অগ্রগতি মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/hifz/${id}`);
      setHifzList(prev => prev.filter(item => item._id !== id));
      setToast({ type: 'success', message: 'পড়া সফলভাবে মুছে ফেলা হয়েছে!' });
    } catch (err) {
      const errMsg = err.response?.data?.message || 'মুছে ফেলতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    }
  };

  // Helper to format student label
  const getStudentDisplayName = (stu) => {
    if (!stu) return 'অজানা শিক্ষার্থী';
    const name = stu.user?.fullName || `${stu.user?.firstName || ''} ${stu.user?.lastName || ''}`.trim() || 'শিক্ষার্থী';
    const roll = stu.currentEnrollment?.rollNumber || stu.roll;
    const rollStr = roll ? ` (রোল: ${roll})` : '';
    const idStr = stu.studentId ? ` [${stu.studentId}]` : '';
    return `${name}${rollStr}${idStr}`;
  };

  // -------------------------------------------------------------
  // SMART DYNAMIC DETAILS RENDERER (AUTOMATICALLY HIDES EMPTY ROWS)
  // -------------------------------------------------------------
  const renderHifzTaskDetails = (item) => {
    const d = item.hifzData || {};
    const cat = item.category || 'hifz';
    const rows = [];

    if (cat === 'hifz') {
      // 1. সবক পারা
      if (d.sabaqPara || (d.sabaqDetails && d.sabaqDetails.trim())) {
        rows.push({
          label: 'সবক পারা',
          para: d.sabaqPara ? `পারা ${Number(d.sabaqPara).toLocaleString('bn-BD')}` : null,
          text: d.sabaqDetails,
          color: '#10b981',
          bg: 'rgba(16, 185, 129, 0.1)'
        });
      }
      // 2. সাত সবক
      if (d.sevenSabaqPara || (d.sevenSabaqDetails && d.sevenSabaqDetails.trim())) {
        rows.push({
          label: 'সাত সবক',
          para: d.sevenSabaqPara ? `পারা ${Number(d.sevenSabaqPara).toLocaleString('bn-BD')}` : null,
          text: d.sevenSabaqDetails,
          color: '#06b6d4',
          bg: 'rgba(6, 182, 212, 0.1)'
        });
      }
      // 3. আমুক্তা পারা
      if (d.amuktaPara || (d.amuktaDetails && d.amuktaDetails.trim())) {
        rows.push({
          label: 'আমুক্তা পারা',
          para: d.amuktaPara ? `পারা ${Number(d.amuktaPara).toLocaleString('bn-BD')}` : null,
          text: d.amuktaDetails,
          color: '#8b5cf6',
          bg: 'rgba(139, 92, 246, 0.1)'
        });
      }
      // 4. তেলাওয়াতকৃত পারা নাম্বার
      if (d.tilawatPara || (d.tilawatDetails && d.tilawatDetails.trim())) {
        rows.push({
          label: 'তেলাওয়াতকৃত পারা',
          para: d.tilawatPara ? `পারা ${Number(d.tilawatPara).toLocaleString('bn-BD')}` : null,
          text: d.tilawatDetails,
          color: '#3b82f6',
          bg: 'rgba(59, 130, 246, 0.1)'
        });
      }
      // 5. নামাজে তেলাওয়াতকৃত পারা নাম্বার
      if (d.namazTilawatPara || (d.namazTilawatDetails && d.namazTilawatDetails.trim())) {
        rows.push({
          label: 'নামাজে তেলাওয়াতকৃত পারা',
          para: d.namazTilawatPara ? `পারা ${Number(d.namazTilawatPara).toLocaleString('bn-BD')}` : null,
          text: d.namazTilawatDetails,
          color: '#ec4899',
          bg: 'rgba(236, 72, 153, 0.1)'
        });
      }
      // 6. সাপ্তাহিক সবিনা পারা
      if (d.weeklySabinaPara || (d.weeklySabinaDetails && d.weeklySabinaDetails.trim())) {
        rows.push({
          label: 'সাপ্তাহিক সবিনা পারা',
          para: d.weeklySabinaPara ? `পারা ${Number(d.weeklySabinaPara).toLocaleString('bn-BD')}` : null,
          text: d.weeklySabinaDetails,
          color: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.1)'
        });
      }
      // 7. লোকমা
      if (d.lokma && d.lokma.trim()) {
        rows.push({
          label: 'লোকমা',
          text: d.lokma,
          color: '#ef4444',
          bg: 'rgba(239, 68, 68, 0.1)'
        });
      }
    } else if (cat === 'nazera') {
      // 1. পারা নাম্বার
      if (d.nazeraPara || (d.nazeraParaDetails && d.nazeraParaDetails.trim())) {
        rows.push({
          label: 'পারা নাম্বার',
          para: d.nazeraPara ? `পারা ${Number(d.nazeraPara).toLocaleString('bn-BD')}` : null,
          text: d.nazeraParaDetails,
          color: '#10b981',
          bg: 'rgba(16, 185, 129, 0.1)'
        });
      }
      // 2. পৃষ্ঠা নাম্বার
      if (d.nazeraPage && d.nazeraPage.trim()) {
        rows.push({ label: 'পৃষ্ঠা নাম্বার', text: d.nazeraPage, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' });
      }
      // 3. আমপারা সূরার নাম
      if (d.nazeraSurah && d.nazeraSurah.trim()) {
        rows.push({ label: 'আমপারা সূরার নাম', text: d.nazeraSurah, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' });
      }
      // 4. আয়াত নাম্বার
      if (d.nazeraAyat && d.nazeraAyat.trim()) {
        rows.push({ label: 'আয়াত নাম্বার', text: d.nazeraAyat, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' });
      }
      // 5. কায়দা সবক নাম্বার
      if (d.nazeraQaidaLesson && d.nazeraQaidaLesson.trim()) {
        rows.push({ label: 'কায়দা সবক নাম্বার', text: d.nazeraQaidaLesson, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' });
      }
    } else if (cat === 'maktab') {
      // 1. আমপারা সূরার নাম
      if (d.maktabSurah && d.maktabSurah.trim()) {
        rows.push({ label: 'আমপারা সূরার নাম', text: d.maktabSurah, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' });
      }
      // 2. সবক নম্বর
      if (d.maktabLesson && d.maktabLesson.trim()) {
        rows.push({ label: 'সবক নম্বর', text: d.maktabLesson, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' });
      }
    }

    // Fallback to legacy fields if rows are empty
    if (rows.length === 0) {
      if (item.sabaq && item.sabaq.trim()) rows.push({ label: 'সবক', text: item.sabaq, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' });
      if (item.sabqi && item.sabqi.trim()) rows.push({ label: 'সবকী', text: item.sabqi, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' });
      if (item.manzil && item.manzil.trim()) rows.push({ label: 'মনজিল', text: item.manzil, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' });
    }

    return rows;
  };

  const getQualityBadge = (quality) => {
    const baseStyle = { fontSize: '0.74rem', padding: '3px 8px', fontWeight: 600, whiteSpace: 'nowrap' };
    switch (quality) {
      case 'excellent':
      case 'চমৎকার':
        return <span className="badge" style={{ ...baseStyle, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>গতদিনের পড়ার মূল্যায়ন: চমৎকার</span>;
      case 'very_good':
      case 'খুব ভালো':
        return <span className="badge" style={{ ...baseStyle, background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }}>গতদিনের পড়ার মূল্যায়ন: খুব ভালো</span>;
      case 'good':
      case 'ভালো':
        return <span className="badge" style={{ ...baseStyle, background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.3)' }}>গতদিনের পড়ার মূল্যায়ন: ভালো</span>;
      case 'fair':
      case 'সন্তোষজনক':
        return <span className="badge" style={{ ...baseStyle, background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)' }}>গতদিনের পড়ার মূল্যায়ন: সন্তোষজনক</span>;
      case 'poor':
      case 'দুর্বল':
        return <span className="badge" style={{ ...baseStyle, background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)' }}>গতদিনের পড়ার মূল্যায়ন: দুর্বল</span>;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'hifz': return { label: 'হিফজ বিভাগ', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
      case 'nazera': return { label: 'নাজেরা বিভাগ', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' };
      case 'maktab': return { label: 'মক্তব বিভাগ', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)' };
      default: return { label: 'হিফজ বিভাগ', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
  };

  // Filter students for modal dropdown
  const filteredModalStudents = students.filter(s => {
    if (hifzModalClassFilter) {
      const className = s.currentEnrollment?.classLevel?.name || s.classLevel?.name;
      if (className !== hifzModalClassFilter) return false;
    }
    if (hifzModalStudentSearch) {
      const q = hifzModalStudentSearch.toLowerCase();
      const name = (s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}`).toLowerCase();
      const id = (s.studentId || '').toLowerCase();
      const roll = (s.currentEnrollment?.rollNumber || s.roll || '').toString().toLowerCase();
      return name.includes(q) || id.includes(q) || roll.includes(q);
    }
    return true;
  });

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

      {/* Main Tabs Navigation (Shown for dual students, teachers, and admins) */}
      {(showNooraniTab && showHifzTab) && (
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            marginBottom: '20px', 
            borderBottom: '2px solid var(--border-color)', 
            paddingBottom: '2px',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <button
            type="button"
            onClick={() => handleTabChange('noorani')}
            className={`btn ${activeTab === 'noorani' ? 'btn-primary' : 'btn-ghost'}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px 12px', fontSize: 'clamp(0.82rem, 3.2vw, 0.95rem)', fontWeight: 600,
              borderRadius: '10px 10px 0 0',
              borderBottom: activeTab === 'noorani' ? '3px solid var(--primary-600)' : '3px solid transparent',
              background: activeTab === 'noorani' ? undefined : 'var(--bg-tertiary)',
              whiteSpace: 'nowrap',
              flex: '1 1 0',
              minWidth: 0
            }}
          >
            <BookOpen size={16} style={{ flexShrink: 0 }} /> <span>নূরানী হোমওয়ার্ক</span>
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('hifz')}
            className={`btn ${activeTab === 'hifz' ? 'btn-primary' : 'btn-ghost'}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px 12px', fontSize: 'clamp(0.82rem, 3.2vw, 0.95rem)', fontWeight: 600,
              borderRadius: '10px 10px 0 0',
              borderBottom: activeTab === 'hifz' ? '3px solid var(--primary-600)' : '3px solid transparent',
              background: activeTab === 'hifz' ? undefined : 'var(--bg-tertiary)',
              whiteSpace: 'nowrap',
              flex: '1 1 0',
              minWidth: 0
            }}
          >
            <BookOpenCheck size={16} style={{ flexShrink: 0 }} /> <span>হিফয হোমওয়ার্ক</span>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: NOORANI HOMEWORK (GENERAL ACADEMIC CLASS HOMEWORK) */}
      {/* ========================================================================= */}
      {activeTab === 'noorani' && (
        <>
          <div className="page-header">
            <div>
              <h1 className="page-title">নূরানী হোমওয়ার্ক</h1>
              <p className="page-subtitle">শ্রেণিভিত্তিক সকল নূরানী ও সাধারণ পাঠ্যবইয়ের হোমওয়ার্ক</p>
            </div>
            <div className="flex gap-12" style={{ alignItems: 'center' }}>
              {(user?.userType === 'super_admin' || user?.userType === 'co_super_admin' || myPermissions?.can_toggle_public_homework || myPermissions?.['homework.toggle_public']) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-tertiary)', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span className="text-sm font-semibold">পাবলিক ভিউ:</span>
                  <label style={{ position: 'relative', width: '40px', height: '20px', cursor: 'pointer', display: 'block', marginBottom: 0 }}>
                    <input type="checkbox" checked={isPublic} onChange={handleTogglePublic} style={{ display: 'none' }} />
                    <div style={{ width: '40px', height: '20px', borderRadius: '10px', background: isPublic ? 'var(--primary-500)' : 'var(--border-color)', position: 'relative', transition: 'background 0.3s' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '3px', left: isPublic ? '23px' : '3px', transition: 'all 0.3s' }}></div>
                    </div>
                  </label>
                </div>
              )}
              {myPermissions?.can_create_homework && (
                <button className="btn btn-primary" onClick={() => { resetForm(); setIsEditing(false); setEditingId(null); setIsModalOpen(true); }}>
                  <Plus size={16} /> নতুন হোমওয়ার্ক
                </button>
              )}
            </div>
          </div>

          <div className="card mb-24" style={{ padding: '16px 20px' }}>
            <div className="flex-between" style={{ flexWrap: 'wrap', gap: '16px' }}>
              <form onSubmit={handleSearch} className="flex gap-8" style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input type="text" className="form-input" placeholder="বিষয় বা শিরোনাম দিয়ে খুঁজুন..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ paddingLeft: '40px' }} />
                </div>
                <button type="submit" className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Search size={14} /> অনুসন্ধান
                </button>
              </form>

              <div className="flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <select
                  className="form-input form-select"
                  value={dateFilter}
                  onChange={(e) => { setDateFilter(e.target.value); setPage(1); }}
                  style={{ width: '150px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="today">আজকের হোমওয়ার্ক</option>
                  <option value="all">সকল হোমওয়ার্ক</option>
                  <option value="custom">নির্দিষ্ট তারিখ</option>
                </select>

                {dateFilter === 'custom' && (
                  <input
                    type="date"
                    className="form-input"
                    value={customDate}
                    onChange={(e) => { setCustomDate(e.target.value); setPage(1); }}
                    style={{ width: '150px', padding: '6px 12px' }}
                  />
                )}

                <select
                  className="form-input form-select"
                  value={subjectFilter}
                  onChange={(e) => { setSubjectFilter(e.target.value); setPage(1); }}
                  style={{ width: '130px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="">সকল বিষয়</option>
                  {filterOptions.subjects.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>

                <select
                  className="form-input form-select"
                  value={classFilter}
                  onChange={(e) => { setClassFilter(e.target.value); setPage(1); }}
                  style={{ width: '120px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="">সকল শ্রেণি</option>
                  {filterOptions.classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>

                <select
                  className="form-input form-select"
                  value={sectionFilter}
                  onChange={(e) => { setSectionFilter(e.target.value); setPage(1); }}
                  style={{ width: '110px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="">সকল সেকশন</option>
                  {filterOptions.sections.map(sec => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>

                <select
                  className="form-input form-select"
                  value={statusFilter}
                  onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                  style={{ width: '120px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="">সকল স্ট্যাটাস</option>
                  <option value="active">সক্রিয়</option>
                  <option value="draft">খসড়া</option>
                  <option value="closed">বন্ধ</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : homeworks.length === 0 ? (
            <div className="card empty-state">
              <BookOpen size={48} style={{ opacity: 0.3 }} />
              <div className="empty-state-title mt-16">কোনো নূরানী হোমওয়ার্ক পাওয়া যায়নি</div>
              <p className="text-muted text-sm mt-4">
                নতুন হোমওয়ার্ক তৈরি করতে "নতুন হোমওয়ার্ক" বোতামে ক্লিক করুন।
              </p>
            </div>
          ) : (
            <div className="grid grid-3" style={{ alignItems: 'stretch', gap: '24px' }}>
              {homeworks.map((hw) => (
                <div key={hw._id} className="card animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: '280px' }}>
                  <div className="flex-between mb-16">
                    <div className="flex gap-8" style={{ alignItems: 'center' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--success-bg)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{hw.subject || 'অজানা বিষয়'}</div>
                        <div className="text-muted" style={{ fontSize: '0.688rem' }}>
                          {hw.classLevel} • {hw.section}
                        </div>
                      </div>
                    </div>
                    <div className="flex" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                      {hw.status === 'active' && <span className="badge badge-active">সক্রিয়</span>}
                      {hw.status === 'draft' && <span className="badge badge-warning">খসড়া</span>}
                      {hw.status === 'closed' && <span className="badge badge-inactive">বন্ধ</span>}
                      <div className="text-muted mt-4" style={{ fontSize: '0.75rem' }}>
                        শিক্ষক: {hw.assignedBy?.fullName || 'অজানা'}
                      </div>
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.063rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {hw.title}
                    {hw.isKhataHomework && (
                      <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-300)', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 500 }}>
                        খাতায় লেখার কাজ দেওয়া হয়েছে
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted mb-16" style={{ flex: 1, overflowY: 'auto' }}>{hw.description}</p>
                  
                  <div className="flex-between mt-auto" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    <div className="flex" style={{ flexDirection: 'column', gap: '4px' }}>
                      <div className="flex gap-8 text-xs text-muted" style={{ alignItems: 'center' }}>
                        <Calendar size={12} />
                        <span>পোস্ট: {formatDateDDMMYYYY(hw.assignDate || hw.createdAt)}</span>
                      </div>
                      <div className="flex gap-8 text-sm text-muted" style={{ alignItems: 'center' }}>
                        <Calendar size={14} style={{ color: 'var(--primary-400)' }} />
                        <span className="font-semibold">জমা: {formatDateDDMMYYYY(hw.dueDate)}</span>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      {(myPermissions?.can_edit_homework || 
                        hw.assignedBy?._id?.toString() === user?._id?.toString() ||
                        hw.assignedBy?.toString() === user?._id?.toString()) && (
                        <button className="btn btn-ghost btn-sm" onClick={() => handleEditClick(hw)} style={{ color: 'var(--primary-400)' }} title="সংশোধন করুন">
                          <Edit size={14} /> এডিট
                        </button>
                      )}
                      {(myPermissions?.can_delete_homework || 
                        hw.assignedBy?._id?.toString() === user?._id?.toString() ||
                        hw.assignedBy?.toString() === user?._id?.toString()) && (
                        <button className="btn btn-ghost btn-sm" onClick={() => handleDelete(hw._id)} style={{ color: 'var(--danger)' }} title="মুছে ফেলুন">
                          <Trash2 size={14} /> মুছুন
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Noorani Pagination */}
          {!loading && homeworks.length > 0 && pagination.pages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: '16px' }}>
              <div className="text-sm text-muted">
                মোট <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{pagination.total}</span> টি হোমওয়ার্কের মধ্যে <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{(page - 1) * 10 + 1}-{Math.min(page * 10, pagination.total)}</span> দেখানো হচ্ছে
              </div>
              <div className="pagination" style={{ margin: 0 }}>
                <button className="pagination-btn" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))} title="পূর্ববর্তী পেজ">
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === pagination.pages || Math.abs(p - page) <= 2)
                  .reduce((acc, p, idx, arr) => {
                    if (idx > 0 && p - arr[idx - 1] > 1) acc.push('ellipsis-' + p);
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item) => {
                    if (typeof item === 'string') return <span key={item} style={{ padding: '0 6px', color: 'var(--text-muted)' }}>...</span>;
                    return (
                      <button key={item} className={`pagination-btn ${item === page ? 'active' : ''}`} onClick={() => setPage(item)}>
                        {item}
                      </button>
                    );
                  })}
                <button className="pagination-btn" disabled={page >= pagination.pages} onClick={() => setPage(p => Math.min(pagination.pages, p + 1))} title="পরবর্তী পেজ">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: HIFZ / NAZERA / MAKTAB HOMEWORK (INDIVIDUAL STUDENT STUDY) */}
      {/* ========================================================================= */}
      {activeTab === 'hifz' && (
        <>
          <div className="page-header">
            <div>
              <h1 className="page-title">হিফয হোমওয়ার্ক</h1>
              <p className="page-subtitle">মক্তব, নাজেরা ও হিফজ বিভাগের শিক্ষার্থীদের ব্যক্তিগত পড়া ও অগ্রগতি</p>
            </div>
            {canManageHifz && (
              <button className="btn btn-primary" onClick={handleOpenHifzModal}>
                <Plus size={16} /> পড়া নির্ধারণ করুন
              </button>
            )}
          </div>

          {/* Filters Bar for Hifz */}
          <div className="card mb-24" style={{ padding: '16px 20px' }}>
            <div className="flex-between" style={{ flexWrap: 'wrap', gap: '16px' }}>
              <div className="flex gap-8" style={{ flexWrap: 'wrap', alignItems: 'center', flex: 1 }}>
                {/* Date Filter */}
                <select
                  className="form-input form-select"
                  value={hifzDateFilter}
                  onChange={(e) => setHifzDateFilter(e.target.value)}
                  style={{ width: '160px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="today">আজকের পড়া</option>
                  <option value="all">সকল দিনের পড়া</option>
                  <option value="custom">নির্দিষ্ট তারিখ</option>
                </select>

                {hifzDateFilter === 'custom' && (
                  <input
                    type="date"
                    className="form-input"
                    value={hifzCustomDate}
                    onChange={(e) => setHifzCustomDate(e.target.value)}
                    style={{ width: '150px', padding: '6px 12px' }}
                  />
                )}

                {/* Category Filter */}
                <select
                  className="form-input form-select"
                  value={hifzCategoryFilter}
                  onChange={(e) => setHifzCategoryFilter(e.target.value)}
                  style={{ width: '150px', padding: '8px 32px 8px 12px' }}
                >
                  <option value="all">সকল বিভাগ</option>
                  <option value="hifz">হিফজ বিভাগ</option>
                  <option value="nazera">নাজেরা বিভাগ</option>
                  <option value="maktab">মক্তব বিভাগ</option>
                </select>

                {/* If authority, filter by student */}
                {!isStudentOrGuardian && (
                  <select
                    className="form-input form-select"
                    value={hifzStudentFilter}
                    onChange={(e) => setHifzStudentFilter(e.target.value)}
                    style={{ minWidth: '220px', maxWidth: '320px', padding: '8px 32px 8px 12px' }}
                  >
                    <option value="">সকল শিক্ষার্থী</option>
                    {students.map(s => (
                      <option key={s._id} value={s._id}>
                        {getStudentDisplayName(s)}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {!isStudentOrGuardian && (
                <div style={{ position: 'relative', minWidth: '220px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="শিক্ষার্থীর নাম দিয়ে খুঁজুন..."
                    value={hifzSearchQuery}
                    onChange={(e) => setHifzSearchQuery(e.target.value)}
                    style={{ paddingLeft: '40px' }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Hifz Cards Display */}
          {hifzLoading ? (
            <div className="flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : (() => {
            const displayList = hifzList.filter(item => {
              if (!hifzSearchQuery) return true;
              const q = hifzSearchQuery.toLowerCase();
              const stuName = (item.student?.user?.fullName || `${item.student?.user?.firstName || ''} ${item.student?.user?.lastName || ''}`).toLowerCase();
              const stuId = (item.student?.studentId || '').toLowerCase();
              return stuName.includes(q) || stuId.includes(q);
            });

            if (displayList.length === 0) {
              return (
                <div className="card empty-state" style={{ padding: '48px 24px', textAlign: 'center' }}>
                  <BookOpenCheck size={48} style={{ opacity: 0.3, margin: '0 auto' }} />
                  <div className="empty-state-title mt-16" style={{ fontSize: '1.15rem' }}>
                    {hifzDateFilter === 'today' ? 'আজকের কোনো হিফয/নাজেরা/মক্তব পড়া পাওয়া যায়নি' : 'এই সময়ে কোনো পড়া পাওয়া যায়নি'}
                  </div>
                  <p className="text-muted text-sm mt-4">
                    {isStudent
                      ? 'আজকের জন্য শিক্ষক এখনো কোনো পড়া নির্ধারণ করেননি। পূর্বের পড়া দেখতে ফিল্টার থেকে "সকল দিনের পড়া" নির্বাচন করুন।'
                      : 'শিক্ষার্থীর জন্য পড়া নির্ধারণ করতে "পড়া নির্ধারণ করুন" বাটনে ক্লিক করুন।'}
                  </p>
                </div>
              );
            }

            return (
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: isStudentOrGuardian ? 'column' : 'row',
                  flexWrap: 'wrap',
                  gap: '16px', 
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  width: '100%' 
                }}
              >
                {displayList.map(item => {
                  const studentName = item.student?.user?.fullName || `${item.student?.user?.firstName || ''} ${item.student?.user?.lastName || ''}`.trim() || 'শিক্ষার্থী';
                  const studentRoll = item.student?.roll || item.student?.currentEnrollment?.rollNumber;
                  const studentId = item.student?.studentId;
                  const catInfo = getCategoryLabel(item.category);
                  const validRows = renderHifzTaskDetails(item);

                  return (
                    <div
                      key={item._id}
                      className="card animate-slide-up"
                      style={{
                        padding: '14px 18px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                        width: 'fit-content',
                        minWidth: '280px',
                        maxWidth: '100%',
                        margin: 0
                      }}
                    >
                      {/* Top Header of Card */}
                      <div className="flex-between mb-12" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', gap: '24px' }}>
                        <div className="flex gap-10" style={{ alignItems: 'center' }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: catInfo.bg, color: catInfo.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 700
                          }}>
                            <BookOpenCheck size={18} />
                          </div>
                          <div>
                            <div className="font-bold text-sm" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span>{studentName}</span>
                              <span style={{
                                fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                                background: catInfo.bg, color: catInfo.color, fontWeight: 600
                              }}>
                                {catInfo.label}
                              </span>
                            </div>
                            <div className="text-muted text-xs mt-1" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              {studentRoll && <span>রোল: {studentRoll}</span>}
                              {studentId && <span>আইডি: {studentId}</span>}
                            </div>
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <div className="text-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                            <Calendar size={12} />
                            <span>{formatDateDDMMYYYY(item.date)}</span>
                          </div>
                          <div className="mt-2">
                            {getQualityBadge(item.quality)}
                          </div>
                        </div>
                      </div>

                      {/* TASK ROWS - DYNAMIC AUTO-FIT WITHOUT EMPTY GAPS */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                        {validRows.length === 0 ? (
                          <div className="text-muted text-sm" style={{ fontStyle: 'italic', padding: '10px 0' }}>
                            কোনো বিস্তারিত পড়ার রেকর্ড পাওয়া যায়নি।
                          </div>
                        ) : (
                          validRows.map((r, rIdx) => (
                            <div
                              key={rIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '6px 12px',
                                borderRadius: '8px',
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--border-color)',
                                minHeight: '34px',
                                gap: '10px'
                              }}
                            >
                              <span style={{
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                color: r.color,
                                whiteSpace: 'nowrap'
                              }}>
                                {r.label}:
                              </span>
                              {r.para && (
                                <span style={{
                                  fontSize: '0.75rem',
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  background: r.bg,
                                  color: r.color,
                                  fontWeight: 700,
                                  whiteSpace: 'nowrap'
                                }}>
                                  {r.para}
                                </span>
                              )}
                              {r.text && r.text.trim() && (
                                <span style={{
                                  fontSize: '0.84rem',
                                  fontWeight: 500,
                                  color: 'var(--text-primary)',
                                  wordBreak: 'break-word',
                                  marginLeft: '4px'
                                }}>
                                  {r.text}
                                </span>
                              )}
                            </div>
                          ))
                        )}
                      </div>

                      {/* Remarks & Footer */}
                      {(item.remarks || item.mistakesCount > 0 || item.teacher) && (
                        <div style={{
                          marginTop: '10px',
                          paddingTop: '8px',
                          borderTop: '1px dashed var(--border-color)',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)'
                        }}>
                          {item.mistakesCount > 0 && (
                            <div style={{ marginBottom: '3px' }}>
                              <span style={{ color: 'var(--danger)', fontWeight: 600 }}>ভুল/লোকমা: </span>
                              <span>{item.mistakesCount} টি</span>
                            </div>
                          )}
                          {item.remarks && (
                            <div style={{ marginBottom: '3px' }}>
                              <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>শিক্ষকের মন্তব্য: </span>
                              <span style={{ fontStyle: 'italic' }}>{item.remarks}</span>
                            </div>
                          )}
                          {item.teacher && (
                            <div className="text-xs text-muted" style={{ marginTop: '4px' }}>
                              শিক্ষক: {item.teacher.fullName || `${item.teacher.firstName || ''} ${item.teacher.lastName || ''}`.trim()}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Authority Actions */}
                      {canManageHifz && (
                        <div className="flex gap-8 mt-12" style={{ justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>
                          <button
                            className="btn btn-ghost btn-sm"
                            onClick={() => handleEditHifz(item)}
                            style={{ color: 'var(--primary-400)', padding: '4px 8px', fontSize: '0.78rem' }}
                            title="সংশোধন করুন"
                          >
                            <Edit size={13} /> এডিট
                          </button>
                          <button
                            className="btn btn-ghost btn-sm"
                            onClick={() => handleDeleteHifz(item._id)}
                            style={{ color: 'var(--danger)', padding: '4px 8px', fontSize: '0.78rem' }}
                            title="মুছে ফেলুন"
                          >
                            <Trash2 size={13} /> মুছুন
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: NOORANI HOMEWORK (EXISTING FORM) */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            backdropFilter: 'blur(4px)'
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '600px', margin: '20px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex-between mb-24">
              <h2 style={{ fontSize: '1.25rem' }}>{isEditing ? 'হোমওয়ার্ক সংশোধন করুন' : 'নতুন নূরানী হোমওয়ার্ক দিন'}</h2>
              <button className="btn-icon" onClick={() => { setIsModalOpen(false); resetForm(); setIsEditing(false); setEditingId(null); }} type="button">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">শিরোনাম *</label>
                <input type="text" name="title" className="form-input" required value={formData.title} onChange={handleChange} placeholder="যেমন: বীজগণিত প্রথম অধ্যায়" />
              </div>

              <div className="form-group">
                <label className="form-label">বর্ণনা</label>
                <textarea name="description" className="form-input" value={formData.description} onChange={handleChange} placeholder="হোমওয়ার্কের বিস্তারিত লিখুন" rows="4" />
              </div>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">শ্রেণী *</label>
                  <select name="classLevel" className="form-input form-select" required value={formData.classLevel} onChange={handleChange}>
                    <option value="">শ্রেণি নির্বাচন করুন</option>
                    {classes.map(c => (
                      <option key={c._id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">বিষয় *</label>
                  <select name="subject" className="form-input form-select" required value={formData.subject} onChange={handleChange} disabled={!formData.classLevel}>
                    <option value="">বিষয় নির্বাচন করুন</option>
                    {modalSubjects.map(s => (
                      <option key={s._id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">সেকশন *</label>
                  <select name="section" className="form-input form-select" required value={formData.section} onChange={handleChange}>
                    <option value="">সেকশন নির্বাচন করুন</option>
                    {SECTION_OPTIONS.map((sec, idx) => (
                      <option key={idx} value={sec}>{sec}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">জমা দেওয়ার শেষ তারিখ * <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(দিন-মাস-বছর / DD-MM-YYYY)</span></label>
                  <input type="date" name="dueDate" className="form-input" required value={formData.dueDate} onChange={handleChange} />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">স্ট্যাটাস</label>
                  <select name="status" className="form-input" value={formData.status} onChange={handleChange}>
                    <option value="active">সক্রিয়</option>
                    <option value="draft">খসড়া</option>
                    <option value="closed">বন্ধ</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(30, 41, 59, 0.3)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div>
                    <label className="form-label" style={{ marginBottom: '2px', cursor: 'pointer' }}>খাতায় লেখার হোমওয়ার্ক</label>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>এটি অন করলে হোমওয়ার্কের সাথে "খাতায় লেখার কাজ" নির্দেশক যুক্ত হবে</span>
                  </div>
                  <label style={{ position: 'relative', width: '40px', height: '20px', cursor: 'pointer', display: 'block', marginBottom: 0 }}>
                    <input 
                      type="checkbox" 
                      name="isKhataHomework"
                      checked={formData.isKhataHomework} 
                      onChange={(e) => setFormData({ ...formData, isKhataHomework: e.target.checked })} 
                      style={{ display: 'none' }} 
                    />
                    <div style={{ width: '40px', height: '20px', borderRadius: '10px', background: formData.isKhataHomework ? 'var(--primary-500)' : 'var(--border-color)', position: 'relative', transition: 'background 0.3s' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '3px', left: formData.isKhataHomework ? '23px' : '3px', transition: 'all 0.3s' }}></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-16 mt-24" style={{ justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => { setIsModalOpen(false); resetForm(); setIsEditing(false); setEditingId(null); }}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: HIFZ / NAZERA / MAKTAB ASSIGNMENT MODAL (DYNAMIC FIELDS) */}
      {/* ========================================================================= */}
      {hifzModalOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1050,
            backdropFilter: 'blur(5px)'
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setHifzModalOpen(false); }}
        >
          <div className="card animate-scale-up" style={{ width: '100%', maxWidth: '720px', margin: '20px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex-between mb-20" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {isHifzEditing ? 'হিফয/নাজেরা/মক্তব পড়া সংশোধন করুন' : 'নতুন পড়া ও অগ্রগতি নির্ধারণ করুন'}
                </h2>
                <p className="text-muted text-xs mt-2">
                  প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত সবক ও পাঠ পরিকল্পনা
                </p>
              </div>
              <button className="btn-icon" onClick={() => setHifzModalOpen(false)} type="button">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleHifzSubmit}>
              {/* Category Selector Buttons */}
              <div className="mb-20">
                <label className="form-label" style={{ fontWeight: 600 }}>বিভাগ নির্বাচন করুন *</label>
                <div className="grid grid-3" style={{ gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setHifzFormData({ ...hifzFormData, category: 'hifz' })}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: hifzFormData.category === 'hifz' ? '2px solid #10b981' : '1px solid var(--border-color)',
                      background: hifzFormData.category === 'hifz' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-tertiary)',
                      color: hifzFormData.category === 'hifz' ? '#10b981' : 'var(--text-primary)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <BookOpenCheck size={18} /> হিফজ বিভাগ
                  </button>
                  <button
                    type="button"
                    onClick={() => setHifzFormData({ ...hifzFormData, category: 'nazera' })}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: hifzFormData.category === 'nazera' ? '2px solid #06b6d4' : '1px solid var(--border-color)',
                      background: hifzFormData.category === 'nazera' ? 'rgba(6, 182, 212, 0.15)' : 'var(--bg-tertiary)',
                      color: hifzFormData.category === 'nazera' ? '#06b6d4' : 'var(--text-primary)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <BookOpen size={18} /> নাজেরা বিভাগ
                  </button>
                  <button
                    type="button"
                    onClick={() => setHifzFormData({ ...hifzFormData, category: 'maktab' })}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: hifzFormData.category === 'maktab' ? '2px solid #8b5cf6' : '1px solid var(--border-color)',
                      background: hifzFormData.category === 'maktab' ? 'rgba(139, 92, 246, 0.15)' : 'var(--bg-tertiary)',
                      color: hifzFormData.category === 'maktab' ? '#8b5cf6' : 'var(--text-primary)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <BookMarked size={18} /> মক্তব বিভাগ
                  </button>
                </div>
              </div>

              {/* Student & Date Selection */}
              <div className="grid grid-2 mb-20" style={{ gap: '16px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">তারিখ *</label>
                  <input
                    type="date"
                    className="form-input"
                    required
                    value={hifzFormData.date}
                    onChange={(e) => setHifzFormData({ ...hifzFormData, date: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">শ্রেণি ফিল্টার (ঐচ্ছিক)</label>
                  <select
                    className="form-input form-select"
                    value={hifzModalClassFilter}
                    onChange={(e) => setHifzModalClassFilter(e.target.value)}
                  >
                    <option value="">সকল শ্রেণি থেকে খুঁজুন</option>
                    {classes.map(c => (
                      <option key={c._id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', margin: 0 }}>
                  <label className="form-label">শিক্ষার্থী নির্বাচন করুন *</label>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        className="form-input"
                        placeholder="শিক্ষার্থীর নাম বা রোল দিয়ে ফিল্টার করুন..."
                        value={hifzModalStudentSearch}
                        onChange={(e) => setHifzModalStudentSearch(e.target.value)}
                        style={{ paddingLeft: '32px', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>
                  <select
                    className="form-input form-select"
                    required
                    value={hifzFormData.student}
                    onChange={(e) => setHifzFormData({ ...hifzFormData, student: e.target.value })}
                  >
                    <option value="">-- শিক্ষার্থী নির্বাচন করুন --</option>
                    {filteredModalStudents.map(s => (
                      <option key={s._id} value={s._id}>
                        {getStudentDisplayName(s)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ============================================================== */}
              {/* DYNAMIC FORM FIELDS ACCORDING TO SELECTED CATEGORY */}
              {/* ============================================================== */}

              {/* 1. HIFZ CATEGORY FIELDS */}
              {hifzFormData.category === 'hifz' && (
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpenCheck size={16} /> হিফজের পড়া
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* সবক পারা */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>সবক পারা</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.sabaqPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, sabaqPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="পৃষ্ঠা / রুকু / আয়াত / বিস্তারিত..."
                          value={hifzFormData.sabaqDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, sabaqDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* সাত সবক */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>সাত সবক</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.sevenSabaqPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, sevenSabaqPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত বিবরণ..."
                          value={hifzFormData.sevenSabaqDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, sevenSabaqDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* আমুক্তা পারা */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>আমুক্তা পারা</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.amuktaPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, amuktaPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত বিবরণ..."
                          value={hifzFormData.amuktaDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, amuktaDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* তেলাওয়াতকৃত পারা নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>তেলাওয়াতকৃত পারা নাম্বার</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.tilawatPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, tilawatPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত বিবরণ..."
                          value={hifzFormData.tilawatDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, tilawatDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* নামাজে তেলাওয়াতকৃত পারা নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>নামাজে তেলাওয়াতকৃত পারা নাম্বার</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.namazTilawatPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, namazTilawatPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত বিবরণ..."
                          value={hifzFormData.namazTilawatDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, namazTilawatDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* সাপ্তাহিক সবিনা পারা */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>সাপ্তাহিক সবিনা পারা</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.weeklySabinaPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, weeklySabinaPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত বিবরণ..."
                          value={hifzFormData.weeklySabinaDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, weeklySabinaDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* লোকমা */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>লোকমা</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="লোকমা সংখ্যা বা ভুল..."
                        value={hifzFormData.lokma}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, lokma: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 2. NAZERA CATEGORY FIELDS */}
              {hifzFormData.category === 'nazera' && (
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpen size={16} /> নাজেরা পড়া
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* পারা নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>পারা নাম্বার</label>
                      <div className="grid grid-2" style={{ gap: '10px' }}>
                        <select
                          className="form-input form-select"
                          value={hifzFormData.nazeraPara}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraPara: e.target.value })}
                        >
                          <option value="">পারা নির্বাচন করুন</option>
                          {PARA_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                        </select>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="বিস্তারিত..."
                          value={hifzFormData.nazeraParaDetails}
                          onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraParaDetails: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* পৃষ্ঠা নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>পৃষ্ঠা নাম্বার</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="পৃষ্ঠা নাম্বার..."
                        value={hifzFormData.nazeraPage}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraPage: e.target.value })}
                      />
                    </div>

                    {/* আমপারা সূরার নাম */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>আমপারা সূরার নাম</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="যেমন: সূরা ফাতেহা, সূরা ইখলাস..."
                        value={hifzFormData.nazeraSurah}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraSurah: e.target.value })}
                      />
                    </div>

                    {/* আয়াত নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>আয়াত নাম্বার</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="যেমন: ১-১০ আয়াত..."
                        value={hifzFormData.nazeraAyat}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraAyat: e.target.value })}
                      />
                    </div>

                    {/* কায়দা সবক নাম্বার */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>কায়দা সবক নাম্বার</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="কায়দা সবক নাম্বার..."
                        value={hifzFormData.nazeraQaidaLesson}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, nazeraQaidaLesson: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. MAKTAB CATEGORY FIELDS */}
              {hifzFormData.category === 'maktab' && (
                <div style={{
                  background: 'var(--bg-tertiary)',
                  padding: '16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookMarked size={16} /> মক্তব পড়া
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* আমপারা সূরার নাম */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>আমপারা সূরার নাম</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="যেমন: সূরা নাস, সূরা ফালাক..."
                        value={hifzFormData.maktabSurah}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, maktabSurah: e.target.value })}
                      />
                    </div>

                    {/* সবক নম্বর */}
                    <div>
                      <label className="form-label" style={{ fontSize: '0.85rem', marginBottom: '4px' }}>সবক নম্বর</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="সবক নম্বর..."
                        value={hifzFormData.maktabLesson}
                        onChange={(e) => setHifzFormData({ ...hifzFormData, maktabLesson: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Evaluation & Remarks for all categories */}
              <div className="grid grid-2 mb-24" style={{ gap: '16px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">গতদিনের পড়ার মূল্যায়ন (Quality)</label>
                  <select
                    className="form-input form-select"
                    value={hifzFormData.quality}
                    onChange={(e) => setHifzFormData({ ...hifzFormData, quality: e.target.value })}
                  >
                    <option value="excellent">চমৎকার (Excellent)</option>
                    <option value="very_good">খুব ভালো (Very Good)</option>
                    <option value="good">ভালো (Good)</option>
                    <option value="fair">সন্তোষজনক (Fair)</option>
                    <option value="poor">দুর্বল (Poor)</option>
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">মোট ভুল সংখ্যা</label>
                  <input
                    type="number"
                    min="0"
                    className="form-input"
                    value={hifzFormData.mistakesCount}
                    onChange={(e) => setHifzFormData({ ...hifzFormData, mistakesCount: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', margin: 0 }}>
                  <label className="form-label">শিক্ষকের মন্তব্য (ঐচ্ছিক)</label>
                  <textarea
                    className="form-input"
                    rows="2"
                    placeholder="পড়া সম্পর্কিত দিকনির্দেশনা বা উৎসাহমূলক মন্তব্য লিখুন..."
                    value={hifzFormData.remarks}
                    onChange={(e) => setHifzFormData({ ...hifzFormData, remarks: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-16" style={{ justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setHifzModalOpen(false)}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={hifzSubmitting}>
                  {hifzSubmitting ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
