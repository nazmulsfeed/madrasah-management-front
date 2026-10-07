import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Mail, Phone, Calendar, BookOpen, CreditCard,
  ClipboardCheck, GraduationCap, Edit, User, X, Loader, Save, CheckCircle, AlertCircle,
  Eye, EyeOff, Key, Camera, Trash2, Clock
} from 'lucide-react';
import api from '../../api/axios';
import { SECTION_OPTIONS } from '../../utils/constants';
import useAuthStore from '../../store/authStore';
import ImageCropModal from '../../components/common/ImageCropModal';
import AuditBadge from '../../components/common/AuditBadge';
import { formatDateDDMMYYYY } from '../../utils/helpers';

export default function StudentDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('info');
  const [toast, setToast] = useState(null);
  const [branches, setBranches] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [classLevels, setClassLevels] = useState([]);
  const { user: currentUser } = useAuthStore();
  const [myPermissions, setMyPermissions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('userPermissions') || '{}'); } catch { return {}; }
  });
  const [feesInvoices, setFeesInvoices] = useState([]);
  const [loadingFees, setLoadingFees] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loadingAttendance, setLoadingAttendance] = useState(false);

  useEffect(() => {
    if (activeTab === 'attendance' && student?._id) {
      const fetchStudentAttendance = async () => {
        try {
          setLoadingAttendance(true);
          const res = await api.get('/attendance', {
            params: {
              student: student._id,
              limit: 100
            }
          });
          if (res.data.success) {
            setAttendanceRecords(res.data.data.records || []);
          }
        } catch (err) {
          console.error('Error fetching student attendance:', err);
        } finally {
          setLoadingAttendance(false);
        }
      };
      fetchStudentAttendance();
    }
  }, [activeTab, student?._id]);

  useEffect(() => {
    if (activeTab === 'fees' && student?._id) {
      const fetchStudentFees = async () => {
        try {
          setLoadingFees(true);
          const res = await api.get('/finance/invoices', { params: { student: student._id } });
          if (res.data.success) {
            setFeesInvoices(res.data.data.invoices || []);
          }
        } catch (err) {
          console.error('Error fetching student fees:', err);
        } finally {
          setLoadingFees(false);
        }
      };
      fetchStudentFees();
    }
  }, [activeTab, student?._id]);

  useEffect(() => {
    const fetchPerms = async () => {
      try {
        const res = await api.get('/permissions/me');
        if (res.data.success) {
          const perms = res.data.data;
          localStorage.setItem('userPermissions', JSON.stringify(perms));
          setMyPermissions(perms);
        }
      } catch (e) {}
    };
    if (currentUser) fetchPerms();
  }, [currentUser]);

  const isSuperOrCoSuper = ['super_admin', 'co_super_admin'].includes(currentUser?.userType) || 
                           ['co_super_admin'].includes(currentUser?.adminRole);

  const canUpdateStudent = isSuperOrCoSuper || Boolean(myPermissions?.['student.update']);
  const canUpdatePhoto = canUpdateStudent || Boolean(myPermissions?.['student.photo_update']);
  const isAdminOrHigher = ['super_admin', 'co_super_admin', 'admin'].includes(currentUser?.userType) || ['co_super_admin', 'admin'].includes(currentUser?.adminRole);
  const canModifyIdAndAdmission = isSuperOrCoSuper || 
                                  ['admin'].includes(currentUser?.userType) || 
                                  ['admin'].includes(currentUser?.adminRole) || 
                                  Boolean(myPermissions?.['student.update']);

  // Password show state
  const [showPasswordVisible, setShowPasswordVisible] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState('');
  const [loadingPassword, setLoadingPassword] = useState(false);

  // Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [editFormData, setEditFormData] = useState({
    admissionNumber: '',
    studentId: '',
    firstName: '',
    lastName: '',
    firstNameEn: '',
    lastNameEn: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    dateOfBirth: '',
    gender: 'male',
    bloodGroup: '',
    status: 'active',
    branchId: '',
    residentialStatus: 'non-residential',
    academicYearId: '',
    classLevelId: '',
    sectionId: '',
    rollNumber: '',
    fatherName: '',
    motherName: '',
    village: '',
    nationalIdOrBirthCertNo: '',
    customMonthlyFee: '',
    feeDiscountNote: '',
    photo: ''
  });

  // Photo Crop Modal State
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [rawImageSrc, setRawImageSrc] = useState(null);
  const [cropTarget, setCropTarget] = useState('edit_form'); // 'edit_form' or 'direct'
  const [uploadingDirectPhoto, setUploadingDirectPhoto] = useState(false);

  // Quick Custom Fee Modal State
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [feeModalCustomFee, setFeeModalCustomFee] = useState('');
  const [feeModalDiscountNote, setFeeModalDiscountNote] = useState('');
  const [savingFeeModal, setSavingFeeModal] = useState(false);

  const handleOpenFeeModal = () => {
    setFeeModalCustomFee(
      student?.customMonthlyFee !== null && student?.customMonthlyFee !== undefined
        ? String(student.customMonthlyFee)
        : ''
    );
    setFeeModalDiscountNote(student?.feeDiscountNote || '');
    setIsFeeModalOpen(true);
  };

  const handleSaveFeeModal = async (e) => {
    e?.preventDefault();
    setSavingFeeModal(true);
    try {
      const payload = {
        customMonthlyFee: feeModalCustomFee === '' ? null : Number(feeModalCustomFee),
        feeDiscountNote: feeModalDiscountNote.trim()
      };
      const res = await api.patch(`/students/${student._id}`, payload);
      if (res.data.success) {
        setToast({ type: 'success', message: 'বিশেষ ফি ও ছাড়ের তথ্য সফলভাবে আপডেট হয়েছে!' });
        setIsFeeModalOpen(false);
        fetchStudent();
      }
    } catch (err) {
      console.error('Update custom fee failed:', err);
      setToast({ type: 'error', message: err.response?.data?.message || 'ফি আপডেট করতে সমস্যা হয়েছে' });
    } finally {
      setSavingFeeModal(false);
    }
  };

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const targetId = id || currentUser?.studentId || (currentUser?.guardianStudents?.[0]?._id);

  const fetchStudent = async () => {
    if (!targetId) {
      setLoading(false);
      return;
    }
    try {
      const res = await api.get(`/students/${targetId}`);
      if (res.data.success) {
        setStudent(res.data.data.student);
      }
    } catch (err) {
      console.error('Fetch student error', err);
      const errMsg = err.response?.data?.message || 'ছাত্র/ছাত্রীর তথ্য পাওয়া যায়নি';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setLoading(false);
    }
  };

  const fetchBranches = async () => {
    try {
      const res = await api.get('/students/branches');
      if (res.data.success) {
        setBranches(res.data.data.branches || []);
      }
    } catch (err) {
      console.error('Failed to load branches', err);
    }
  };

  useEffect(() => {
    fetchStudent();
    fetchBranches();
    api.get('/students/academic-years').then(res => {
      if (res.data.success) setAcademicYears(res.data.data.academicYears || []);
    }).catch(err => console.error('Failed to load academic years', err));
    api.get('/students/classes').then(res => {
      if (res.data.success) setClassLevels(res.data.data.classes || []);
    }).catch(err => console.error('Failed to load classes', err));
  }, [targetId]);

  useEffect(() => {
    if (student && location.state?.edit && canUpdateStudent) {
      handleOpenEdit();
      // Clear the state so it doesn't open again on subsequent updates/reloads
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [student, location.state, canUpdateStudent]);

  const handleOpenEdit = () => {
    if (!student) return;
    const curEnr = student.currentEnrollment;
    setEditFormData({
      admissionNumber: student.admissionNumber || '',
      studentId: student.studentId || '',
      firstName: student.user?.firstName || '',
      lastName: student.user?.lastName || '',
      firstNameEn: student.user?.firstNameEn || '',
      lastNameEn: student.user?.lastNameEn || '',
      email: student.user?.email || '',
      phone: student.user?.phone || '',
      username: student.user?.username || '',
      password: '',
      dateOfBirth: student.dateOfBirth ? student.dateOfBirth.split('T')[0] : '',
      gender: (student.gender === 'female' || student.gender === 'মহিলা') ? 'female' : 'male',
      bloodGroup: student.bloodGroup || '',
      status: student.status || 'active',
      branchId: student.branch?._id || student.branch || '',
      residentialStatus: student.residentialStatus || 'non-residential',
      academicYearId: curEnr?.academicYear?._id || curEnr?.academicYear || '',
      classLevelId: curEnr?.classLevel?._id || curEnr?.classLevel || '',
      sectionId: curEnr?.section?.name || (typeof curEnr?.section === 'string' ? curEnr.section : '') || '',
      rollNumber: curEnr?.rollNumber || '',
      fatherName: student.fatherName || '',
      motherName: student.motherName || '',
      village: student.village || '',
      nationalIdOrBirthCertNo: student.nationalIdOrBirthCertNo || '',
      deviceUserId: student.deviceUserId || '',
      customMonthlyFee: student.customMonthlyFee !== null && student.customMonthlyFee !== undefined ? student.customMonthlyFee : '',
      feeDiscountNote: student.feeDiscountNote || '',
      photo: student.photo || student.user?.photo || ''
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const payload = { ...editFormData };
      if (!payload.dateOfBirth || payload.dateOfBirth.trim() === '') {
        payload.dateOfBirth = null;
      }
      const res = await api.patch(`/students/${id}`, payload);
      if (res.data.success) {
        setToast({ type: 'success', message: 'শিক্ষার্থীর তথ্য সফলভাবে আপডেট হয়েছে!' });
        setIsEditModalOpen(false);
        fetchStudent();
      }
    } catch (err) {
      console.error('Update student failed:', err);
      const backendMsg = err.response?.data?.message;
      const validationMsgs = Array.isArray(err.response?.data?.errors)
        ? err.response.data.errors.join(', ')
        : (typeof err.response?.data?.errors === 'string' ? err.response.data.errors : null);
      const errMsg = backendMsg || validationMsgs || (typeof err.response?.data === 'string' && err.response.data.length < 200 ? err.response.data : null) || err.message || 'তথ্য আপডেট করতে ব্যর্থ হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setUpdating(false);
    }
  };

  const handleDirectPhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setRawImageSrc(event.target.result);
        setCropTarget('direct');
        setIsCropModalOpen(true);
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    }
  };

  const handleSaveDirectPhoto = async (photoValue) => {
    if (!student?._id) return;
    try {
      setUploadingDirectPhoto(true);
      const res = await api.patch(`/students/${student._id}/photo`, { photo: photoValue });
      if (res.data.success) {
        setStudent(prev => ({
          ...prev,
          photo: photoValue,
          user: {
            ...(prev.user || {}),
            photo: photoValue
          }
        }));
        setToast({
          type: 'success',
          message: photoValue ? 'শিক্ষার্থীর প্রোফাইল ছবি সফলভাবে পরিবর্তন হয়েছে!' : 'শিক্ষার্থীর প্রোফাইল ছবি মুছে ফেলা হয়েছে'
        });
      }
    } catch (err) {
      console.error('Update photo failed:', err);
      const msg = err.response?.data?.message || 'প্রোফাইল ছবি পরিবর্তন করতে ব্যর্থ হয়েছে';
      setToast({ type: 'error', message: msg });
    } finally {
      setUploadingDirectPhoto(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-center" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  const isStudentOrGuardian = ['student', 'guardian'].includes(currentUser?.userType);

  if (!student) {
    return (
      <div className="empty-state">
        <div className="empty-state-title">ছাত্র/ছাত্রী পাওয়া যায়নি</div>
        <button 
          className="btn btn-primary mt-16" 
          onClick={() => navigate(isStudentOrGuardian ? '/dashboard' : '/students')}
        >
          <ArrowRight size={16} /> {isStudentOrGuardian ? 'ড্যাশবোর্ডে ফিরে যান' : 'তালিকায় ফিরে যান'}
        </button>
      </div>
    );
  }

  const name = student.user?.fullName ||
    `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim();
  const enrollment = student.currentEnrollment;

  const tabs = [
    { id: 'info', label: 'ব্যক্তিগত তথ্য', icon: User },
    { id: 'academic', label: 'একাডেমিক', icon: BookOpen },
    { id: 'attendance', label: 'উপস্থিতি', icon: ClipboardCheck },
    { id: 'fees', label: 'ফি', icon: CreditCard },
  ];

  const statusMap = {
    active: { label: 'সক্রিয়', class: 'badge-active' },
    inactive: { label: 'নিষ্ক্রিয়', class: 'badge-inactive' },
    graduated: { label: 'স্নাতক', class: 'badge-info' },
  };
  const st = statusMap[student.status] || statusMap.active;

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      {/* Toast Alert */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* ব্যাক + হেডার */}
      <div className="page-header">
        <div className="flex gap-16" style={{ alignItems: 'center' }}>
          <button 
            className="btn btn-secondary btn-icon" 
            onClick={() => navigate(isStudentOrGuardian ? '/dashboard' : '/students')} 
            style={{ padding: '8px' }}
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="page-title">{isStudentOrGuardian ? 'আমার বিস্তারিত প্রোফাইল' : 'শিক্ষার্থীর প্রোফাইল'}</h1>
            <p className="page-subtitle">বিস্তারিত একাডেমিক ও ব্যক্তিগত বিবরণী</p>
          </div>
        </div>
        {canUpdateStudent && (
          <button className="btn btn-primary" onClick={handleOpenEdit} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Edit size={16} /> তথ্য সম্পাদনা
          </button>
        )}
      </div>

      {/* প্রোফাইল কার্ড */}
      <div className="card mb-24">
        <div className="flex gap-24" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* অ্যাভাটার */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div
              className="avatar xl"
              style={{
                background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))',
                fontSize: '1.8rem',
                flexShrink: 0,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid var(--border-color, #e2e8f0)',
              }}
            >
              {(student.photo || student.user?.photo) ? (
                <img 
                  src={student.photo || student.user?.photo} 
                  alt={name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                name.charAt(0)
              )}
              {uploadingDirectPhoto && (
                <div style={{
                  position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 2
                }}>
                  <Loader className="animate-spin" size={24} />
                </div>
              )}
            </div>

            {canUpdatePhoto && (
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <label 
                  className="btn btn-secondary btn-sm" 
                  style={{
                    cursor: uploadingDirectPhoto ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.78rem',
                    padding: '3px 10px',
                    borderRadius: '20px'
                  }}
                  title="প্রোফাইল ছবি পরিবর্তন করুন"
                >
                  <Camera size={13} />
                  <span>{student.photo || student.user?.photo ? 'ছবি পরিবর্তন' : 'ছবি যোগ করুন'}</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    disabled={uploadingDirectPhoto}
                    style={{ display: 'none' }} 
                    onChange={handleDirectPhotoSelect}
                  />
                </label>
                {(student.photo || student.user?.photo) && (
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    style={{
                      padding: '3px 8px',
                      color: 'var(--danger, #ef4444)',
                      borderRadius: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem'
                    }}
                    title="ছবি মুছে ফেলুন"
                    disabled={uploadingDirectPhoto}
                    onClick={() => {
                      if (window.confirm('আপনি কি নিশ্চিত যে শিক্ষার্থীর ছবি মুছে ফেলতে চান?')) {
                        handleSaveDirectPhoto('');
                      }
                    }}
                  >
                    <Trash2 size={12} />
                    <span>মুছুন</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* তথ্য */}
          <div style={{ flex: 1 }}>
            <div className="flex-between" style={{ marginBottom: '8px' }}>
              <div>
                <h2 style={{ marginBottom: '4px' }}>{name}</h2>
                <div className="flex gap-12 text-sm text-muted">
                  <span>আইডি: {student.studentId}</span>
                  <span>•</span>
                  <span>ভর্তি: {student.admissionNumber}</span>
                </div>
              </div>
              <span className={`badge ${st.class}`}>{st.label}</span>
            </div>

            <div
              className="grid grid-4 mt-16"
              style={{ gap: '16px' }}
            >
              <div className="flex gap-8" style={{ alignItems: 'center' }}>
                <Mail size={14} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm">{student.user?.email || '—'}</span>
              </div>
              <div className="flex gap-8" style={{ alignItems: 'center' }}>
                <Phone size={14} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm">{student.user?.phone || '—'}</span>
              </div>
              <div className="flex gap-8" style={{ alignItems: 'center' }}>
                <GraduationCap size={14} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm">
                  {enrollment?.classLevel?.name || '—'} ({enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : '—')})
                </span>
              </div>
              <div className="flex gap-8" style={{ alignItems: 'center' }}>
                <Calendar size={14} style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm">
                  ভর্তি: {formatDateDDMMYYYY(student.admissionDate)}
                </span>
              </div>
            </div>

            {/* বিশেষ মাসিক বেতন ও ছাড় স্ট্যাটাস কার্ড */}
            <div style={{
              marginTop: '16px',
              padding: '12px 18px',
              borderRadius: '12px',
              background: student.customMonthlyFee !== null && student.customMonthlyFee !== undefined && Number(student.customMonthlyFee) >= 0
                ? 'rgba(16, 185, 129, 0.08)'
                : 'rgba(99, 102, 241, 0.06)',
              border: student.customMonthlyFee !== null && student.customMonthlyFee !== undefined && Number(student.customMonthlyFee) >= 0
                ? '1px solid rgba(16, 185, 129, 0.3)'
                : '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: student.customMonthlyFee !== null && student.customMonthlyFee !== undefined && Number(student.customMonthlyFee) >= 0 ? '#10b981' : 'var(--primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  ৳
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    মাসিক বেতন কাঠামো (Monthly Tuition Fee):
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {student.customMonthlyFee !== null && student.customMonthlyFee !== undefined && Number(student.customMonthlyFee) >= 0 ? (
                      <>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669' }}>
                          ৳ {student.customMonthlyFee}
                        </span>
                        <span className="badge badge-active" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                          বিশেষ ছাড় / নির্ধারিত ফি
                        </span>
                        {student.feeDiscountNote && (
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            ({student.feeDiscountNote})
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          ৳ {enrollment?.classLevel?.monthlyFee || 0}
                        </span>
                        <span className="badge badge-muted" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                          শ্রেণির সাধারণ নিয়মিত ফি
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {canUpdateStudent && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleOpenFeeModal}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, padding: '7px 14px' }}
                >
                  <Edit size={14} /> বিশেষ মাসিক বেতন (Custom Monthly Fee) পরিবর্তন
                </button>
              )}
            </div>

            {/* অডিট ও ট্র্যাকিং তথ্য (ভর্তি ও আপডেট ট্রেইল) */}
            {(student.createdByUser || student.updatedByUser || student.createdAt) && (
              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px dashed var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                fontSize: '0.8rem'
              }}>
                <div className="flex gap-12" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                  <AuditBadge 
                    user={student.createdByUser} 
                    date={student.createdAt} 
                    label="ভর্তি করিয়েছেন" 
                    variant="badge" 
                  />
                  {student.updatedByUser && (
                    <AuditBadge 
                      user={student.updatedByUser} 
                      date={student.updatedAt} 
                      label="সর্বশেষ আপডেট" 
                      variant="badge" 
                    />
                  )}
                </div>
                {student.deviceUserId && (
                  <span className="text-muted font-mono" style={{ fontSize: '0.75rem' }}>
                    বায়োমেট্রিক আইডি: <strong>{student.deviceUserId}</strong>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ট্যাব */}
      <div 
        className="flex gap-8 mb-24" 
        style={{ 
          borderBottom: '1px solid var(--border-color)', 
          paddingBottom: '0',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="btn btn-ghost"
            onClick={() => setActiveTab(tab.id)}
            style={{
              borderBottom: activeTab === tab.id ? '2px solid var(--primary-500)' : '2px solid transparent',
              borderRadius: 0,
              color: activeTab === tab.id ? 'var(--primary-400)' : 'var(--text-secondary)',
              paddingBottom: '12px',
              paddingLeft: '14px',
              paddingRight: '14px',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ট্যাব কন্টেন্ট */}
      <div className="card animate-slide-up">
        {activeTab === 'info' && (
          <div>
            <h4 className="mb-16">ব্যক্তিগত তথ্য</h4>
            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div>
                <div className="text-sm text-muted mb-4">পুরো নাম (বাংলায়)</div>
                <div className="font-semibold">{name}</div>
              </div>
              {(student.user?.firstNameEn || student.user?.lastNameEn) && (
                <div>
                  <div className="text-sm text-muted mb-4">পুরো নাম (ইংরেজিতে)</div>
                  <div className="font-semibold" style={{ fontFamily: 'Inter' }}>
                    {`${student.user?.firstNameEn || ''} ${student.user?.lastNameEn || ''}`.trim()}
                  </div>
                </div>
              )}
              <div>
                <div className="text-sm text-muted mb-4">ব্যবহারকারীর নাম (Username)</div>
                <div className="font-semibold" style={{ fontFamily: 'Inter' }}>{student.user?.username || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">জন্ম তারিখ</div>
                <div className="font-semibold">
                  {formatDateDDMMYYYY(student.dateOfBirth)}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">লিঙ্গ</div>
                <div className="font-semibold">{(student.gender === 'female' || student.gender === 'মহিলা') ? 'ছাত্রী (Female)' : (student.gender === 'male' || student.gender === 'পুরুষ') ? 'ছাত্র (Male)' : '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">রক্তের গ্রুপ</div>
                <div className="font-semibold">{student.bloodGroup || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">ইমেইল</div>
                <div className="font-semibold">{student.user?.email || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">ফোন</div>
                <div className="font-semibold">{student.user?.phone || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">আবাসিক অবস্থা (Residential Status)</div>
                <div className="font-semibold">
                  {student.residentialStatus === 'residential' ? 'আবাসিক (Residential)' : student.residentialStatus === 'non-residential' ? 'অনাবাসিক (Non-Residential)' : student.residentialStatus === 'day-care' ? 'ডে-কেয়ার (Day-Care)' : '—'}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">পিতার নাম</div>
                <div className="font-semibold">{student.fatherName || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">মায়ের নাম</div>
                <div className="font-semibold">{student.motherName || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">গ্রাম</div>
                <div className="font-semibold">{student.village || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">আইডি/জন্ম নিবন্ধন নাম্বার</div>
                <div className="font-semibold">{student.nationalIdOrBirthCertNo || '—'}</div>
              </div>
            </div>

            {/* Password Show (Admin Only) */}
            {isAdminOrHigher && student.user && (
              <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(20,184,166,0.04)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div className="flex gap-12" style={{ alignItems: 'center' }}>
                  <Key size={16} style={{ color: 'var(--primary)' }} />
                  <span className="text-sm font-semibold">পাসওয়ার্ড (শুধুমাত্র অ্যাডমিন)</span>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ marginLeft: 'auto', fontSize: '0.8rem', padding: '6px 14px' }}
                    disabled={loadingPassword}
                    onClick={async () => {
                      if (showPasswordVisible) {
                        setShowPasswordVisible(false);
                        setVisiblePassword('');
                      } else {
                        setLoadingPassword(true);
                        try {
                          const res = await api.get(`/students/${id}/show-password`);
                          if (res.data.success) {
                            setVisiblePassword(res.data.data.plainPassword || '(সেট হয়নি)');
                            setShowPasswordVisible(true);
                          }
                        } catch (err) {
                          console.error('Show password error:', err);
                          setToast({ type: 'error', message: err.response?.data?.message || 'পাসওয়ার্ড দেখতে ব্যর্থ হয়েছে' });
                        } finally {
                          setLoadingPassword(false);
                        }
                      }
                    }}
                  >
                    {loadingPassword ? <Loader className="animate-spin" size={14} /> : showPasswordVisible ? <><EyeOff size={14} /> লুকান</> : <><Eye size={14} /> দেখুন</>}
                  </button>
                </div>
                {showPasswordVisible && (
                  <div style={{ marginTop: '10px', padding: '10px 14px', background: 'var(--bg-secondary)', borderRadius: '8px', fontFamily: 'Inter, monospace', fontSize: '1rem', letterSpacing: '1px', fontWeight: 600 }}>
                    {visiblePassword}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'academic' && (
          <div>
            <h4 className="mb-16">একাডেমিক তথ্য</h4>
            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div>
                <div className="text-sm text-muted mb-4">শিক্ষাবর্ষ</div>
                <div className="font-semibold">{enrollment?.academicYear?.name || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">শ্রেণি</div>
                <div className="font-semibold">{enrollment?.classLevel?.name || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">শ্রেণির সেকশন (Section)</div>
                <div className="font-semibold">{enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : '—')}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">শাখা (Branch)</div>
                <div className="font-semibold">{student.branch?.name || '—'}</div>
              </div>
              {student.department && (
                <div>
                  <div className="text-sm text-muted mb-4">বিভাগ (Department)</div>
                  <div className="font-semibold">{student.department}</div>
                </div>
              )}
              {student.hifzProgramType && (
                <div>
                  <div className="text-sm text-muted mb-4">হিফজ প্রোগ্রাম</div>
                  <div className="font-semibold">{student.hifzProgramType === 'only_hifz' ? 'শুধু হিফজ' : 'হিফজ + আলিয়া'}</div>
                </div>
              )}
              <div>
                <div className="text-sm text-muted mb-4">রোল নম্বর</div>
                <div className="font-semibold" style={{ fontFamily: 'Inter' }}>{enrollment?.rollNumber || '—'}</div>
              </div>
              <div>
                <div className="text-sm text-muted mb-4">মাসিক বেতন ও ফি কাঠামো</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <div className="font-semibold" style={{ color: 'var(--primary-600, #059669)' }}>
                    {student.customMonthlyFee !== null && student.customMonthlyFee !== undefined && Number(student.customMonthlyFee) >= 0 ? (
                      <span>
                        ৳ {student.customMonthlyFee} (বিশেষ ছাড়)
                        {student.feeDiscountNote && <span className="text-xs text-muted block font-normal" style={{ marginTop: '2px' }}>কারণ: {student.feeDiscountNote}</span>}
                      </span>
                    ) : (
                      <span>৳ {enrollment?.classLevel?.monthlyFee || 0} (শ্রেণির নিয়মিত ফি)</span>
                    )}
                  </div>
                  {canUpdateStudent && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={handleOpenFeeModal}
                      style={{ fontSize: '0.75rem', padding: '3px 8px', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Edit size={12} /> পরিবর্তন
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ClipboardCheck size={20} style={{ color: 'var(--primary)' }} />
                  উপস্থিতি বিবরণী ও রেকর্ড (Attendance Record)
                </h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  শিক্ষার্থীর দৈনিক উপস্থিতি, বিলম্ব ও ছুটির সার্বিক পরিসংখ্যান
                </p>
              </div>
            </div>

            {loadingAttendance ? (
              <div className="flex-center py-40">
                <div className="spinner"></div>
              </div>
            ) : attendanceRecords.length === 0 ? (
              <div className="empty-state py-40">
                <ClipboardCheck size={48} style={{ opacity: 0.3 }} />
                <div className="empty-state-title mt-16">এখনো কোনো উপস্থিতির তথ্য পাওয়া যায়নি</div>
                <p className="text-muted text-sm mt-4">
                  ডিভাইস পাঞ্চ বা শিক্ষক কর্তৃক উপস্থিতি রেকর্ড করা হলে তা এখানে স্বয়ংক্রিয়ভাবে প্রদর্শিত হবে।
                </p>
              </div>
            ) : (
              <div>
                {/* Statistics Cards */}
                {(() => {
                  const total = attendanceRecords.length;
                  const present = attendanceRecords.filter(r => r.status === 'present').length;
                  const late = attendanceRecords.filter(r => r.status === 'late').length;
                  const absent = attendanceRecords.filter(r => r.status === 'absent').length;
                  const leave = attendanceRecords.filter(r => ['leave', 'holiday', 'half_day'].includes(r.status)).length;
                  const rate = total > 0 ? Math.round(((present + late) / total) * 100) : 0;

                  return (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                      gap: '12px',
                      marginBottom: '24px'
                    }}>
                      <div style={{
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        borderRadius: '12px',
                        padding: '14px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, marginBottom: '4px' }}>মোট উপস্থিত</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>{present} দিন</div>
                      </div>

                      <div style={{
                        background: 'rgba(239, 68, 68, 0.08)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        borderRadius: '12px',
                        padding: '14px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600, marginBottom: '4px' }}>অনুপস্থিত</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ef4444' }}>{absent} দিন</div>
                      </div>

                      <div style={{
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        borderRadius: '12px',
                        padding: '14px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginBottom: '4px' }}>বিলম্ব (Late)</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f59e0b' }}>{late} দিন</div>
                      </div>

                      <div style={{
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        borderRadius: '12px',
                        padding: '14px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: 600, marginBottom: '4px' }}>ছুটি / অন্যান্য</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6' }}>{leave} দিন</div>
                      </div>

                      <div style={{
                        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
                        borderRadius: '12px',
                        padding: '14px',
                        textAlign: 'center',
                        color: '#fff'
                      }}>
                        <div style={{ fontSize: '0.8rem', opacity: 0.9, fontWeight: 600, marginBottom: '4px' }}>উপস্থিতির হার</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{rate}%</div>
                      </div>
                    </div>
                  );
                })()}

                {/* Table */}
                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <table className="table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                        <th style={{ padding: '12px 14px', fontSize: '0.82rem', fontWeight: 700 }}>তারিখ</th>
                        <th style={{ padding: '12px 14px', fontSize: '0.82rem', fontWeight: 700 }}>স্ট্যাটাস</th>
                        <th style={{ padding: '12px 14px', fontSize: '0.82rem', fontWeight: 700 }}>প্রবেশ (In Time)</th>
                        <th style={{ padding: '12px 14px', fontSize: '0.82rem', fontWeight: 700 }}>প্রস্থান (Out Time)</th>
                        <th style={{ padding: '12px 14px', fontSize: '0.82rem', fontWeight: 700 }}>মন্তব্য / বিবরণ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceRecords.map((r, idx) => {
                        const statusConfig = {
                          present: { label: 'উপস্থিত', bg: 'rgba(16, 185, 129, 0.12)', color: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
                          absent: { label: 'অনুপস্থিত', bg: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.3)' },
                          late: { label: 'বিলম্ব', bg: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' },
                          leave: { label: 'ছুটি', bg: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
                          half_day: { label: 'হাফ ডে', bg: 'rgba(234, 179, 8, 0.12)', color: '#eab308', border: 'rgba(234, 179, 8, 0.3)' },
                          holiday: { label: 'ছুটির দিন', bg: 'rgba(107, 114, 128, 0.12)', color: '#9ca3af', border: 'rgba(107, 114, 128, 0.3)' }
                        };
                        const cfg = statusConfig[r.status] || { label: r.status, bg: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: 'var(--border-color)' };

                        return (
                          <tr key={r._id || idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <td style={{ padding: '12px 14px', fontSize: '0.88rem', fontWeight: 600 }}>
                              {formatDateDDMMYYYY(r.date)}
                            </td>
                            <td style={{ padding: '12px 14px' }}>
                              <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '3px 10px',
                                borderRadius: '14px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                background: cfg.bg,
                                color: cfg.color,
                                border: `1px solid ${cfg.border}`
                              }}>
                                {cfg.label}
                              </span>
                            </td>
                            <td style={{ padding: '12px 14px', fontSize: '0.85rem' }}>
                              {r.inTime ? (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                  <Clock size={13} style={{ color: 'var(--primary-400)' }} />
                                  {r.inTime}
                                </span>
                              ) : '—'}
                            </td>
                            <td style={{ padding: '12px 14px', fontSize: '0.85rem' }}>
                              {r.outTime ? (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                  <Clock size={13} style={{ color: 'var(--text-muted)' }} />
                                  {r.outTime}
                                </span>
                              ) : '—'}
                            </td>
                            <td style={{ padding: '12px 14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                              {r.remarks || (r.markedBy ? `রেকর্ডকারী: ${r.markedBy.fullName || r.markedBy.firstName || ''}` : '—')}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'fees' && (
          <div className="card" style={{ padding: '24px', borderRadius: '16px', background: 'var(--card-bg, #ffffff)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={20} style={{ color: 'var(--primary)' }} />
                  শিক্ষার্থী ফি ও পেমেন্ট লেজার (Student Fee Ledger)
                </h3>
                <p className="text-muted text-sm mt-4">
                  এই শিক্ষার্থীর সকল ধার্যকৃত ইনভয়েস, পরিশোধিত ফি ও বর্তমান বকেয়া বিবরণী।
                </p>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => navigate('/fees')}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                ফি ও বেতন পেজে যান
              </button>
            </div>

            {/* Metrics cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div className="card" style={{ padding: '16px', background: 'var(--body-bg, #f8fafc)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <span className="text-muted text-xs font-semibold">মোট ইনভয়েস</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '4px', fontFamily: 'Inter' }}>
                  {feesInvoices.length}
                </div>
              </div>
              <div className="card" style={{ padding: '16px', background: 'var(--body-bg, #f8fafc)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <span className="text-muted text-xs font-semibold">মোট প্রদেয় ফি</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '4px', color: 'var(--primary)', fontFamily: 'Inter' }}>
                  ৳{feesInvoices.reduce((sum, inv) => sum + (inv.payableTotal || 0), 0).toFixed(2)}
                </div>
              </div>
              <div className="card" style={{ padding: '16px', background: 'var(--body-bg, #f8fafc)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <span className="text-muted text-xs font-semibold">মোট পরিশোধিত</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '4px', color: 'var(--success, #16a34a)', fontFamily: 'Inter' }}>
                  ৳{feesInvoices.reduce((sum, inv) => sum + (inv.paidTotal || 0), 0).toFixed(2)}
                </div>
              </div>
              <div className="card" style={{ padding: '16px', background: 'var(--body-bg, #f8fafc)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <span className="text-muted text-xs font-semibold">বর্তমান বকেয়া (Due)</span>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '4px', color: 'var(--danger, #dc2626)', fontFamily: 'Inter' }}>
                  ৳{feesInvoices.reduce((sum, inv) => sum + (inv.balance || 0), 0).toFixed(2)}
                </div>
              </div>
            </div>

            {loadingFees ? (
              <div className="flex-center" style={{ padding: '40px' }}>
                <div className="spinner"></div>
              </div>
            ) : feesInvoices.length === 0 ? (
              <div className="empty-state" style={{ padding: '40px 0' }}>
                <CreditCard size={40} style={{ opacity: 0.3 }} />
                <div className="empty-state-title mt-12">কোনো ফি ইনভয়েস নেই</div>
                <p className="text-muted text-sm mt-4">এই শিক্ষার্থীর জন্য এখনও কোনো ফি ধার্য করা হয়নি।</p>
              </div>
            ) : (
              <div className="table-container" style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
                <table className="table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--table-header-bg, #f1f5f9)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '12px 16px' }}>ইনভয়েস নং</th>
                      <th style={{ padding: '12px 16px' }}>ফি বিবরণী / খাত</th>
                      <th style={{ padding: '12px 16px' }}>ইস্যু তারিখ</th>
                      <th style={{ padding: '12px 16px', textAlign: 'right' }}>প্রদেয় (৳)</th>
                      <th style={{ padding: '12px 16px', textAlign: 'right' }}>পরিশোধিত (৳)</th>
                      <th style={{ padding: '12px 16px', textAlign: 'right' }}>বকেয়া (৳)</th>
                      <th style={{ padding: '12px 16px', textAlign: 'center' }}>স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feesInvoices.map((inv) => (
                      <tr key={inv._id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '12px 16px', fontFamily: 'Inter', fontWeight: 600 }}>{inv.invoiceNumber}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <strong>{inv.title}</strong>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{inv.feeCategory}</div>
                        </td>
                        <td style={{ padding: '12px 16px' }}>{formatDateDDMMYYYY(inv.issueDate)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', fontFamily: 'Inter', fontWeight: 600 }}>{inv.payableTotal?.toFixed(2)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', fontFamily: 'Inter', color: 'var(--success, #16a34a)', fontWeight: 600 }}>{inv.paidTotal?.toFixed(2)}</td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', fontFamily: 'Inter', color: inv.balance > 0 ? 'var(--danger, #dc2626)' : 'var(--text-muted)', fontWeight: 700 }}>
                          {inv.balance?.toFixed(2)}
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                          <span className={`badge ${inv.status === 'paid' ? 'badge-active' : inv.status === 'partial' ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.75rem' }}>
                            {inv.status === 'paid' ? 'পরিশোধিত' : inv.status === 'partial' ? 'আংশিক' : 'বকেয়া'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit Student Profile Modal */}
      {isEditModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
            padding: '32px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)', animation: 'scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsEditModalOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Edit size={22} style={{ color: 'var(--primary)' }} />
              ছাত্র/ছাত্রীর তথ্য ও অ্যাকাউন্ট সম্পাদনা
            </h2>

            <form onSubmit={handleUpdateSubmit} className="flex-column gap-20">
              
              {/* Profile Details Block */}
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-400)' }}>ব্যক্তিগত বিবরণী</h3>
                
                {/* Photo upload in edit modal */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '16px',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px dashed var(--border-color)'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--primary-500)',
                    flexShrink: 0
                  }}>
                    {editFormData.photo ? (
                      <img src={editFormData.photo} alt="Student" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <User size={28} style={{ opacity: 0.35 }} />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '2px' }}>
                      শিক্ষার্থীর ছবি <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                      <label className="btn btn-secondary btn-sm" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', padding: '4px 10px' }}>
                        <Camera size={14} />
                        <span>{editFormData.photo ? 'ছবি পরিবর্তন করুন' : 'ছবি আপলোড করুন'}</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          style={{ display: 'none' }} 
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setRawImageSrc(event.target.result);
                                setCropTarget('edit_form');
                                setIsCropModalOpen(true);
                              };
                              reader.readAsDataURL(file);
                              e.target.value = '';
                            }
                          }} 
                        />
                      </label>
                      {editFormData.photo && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', padding: '4px 10px' }}
                          onClick={() => setEditFormData({ ...editFormData, photo: '' })}
                        >
                          <Trash2 size={13} />
                          <span>মুছে ফেলুন</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                  <div>
                    <label className="form-label">নামের প্রথম অংশ — বাংলায় *</label>
                    <input 
                      type="text" className="form-input" required
                      placeholder="যেমন: মুহাম্মদ"
                      value={editFormData.firstName} 
                      onChange={e => setEditFormData({ ...editFormData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">নামের শেষ অংশ — বাংলায় *</label>
                    <input 
                      type="text" className="form-input" required
                      placeholder="যেমন: হাসান"
                      value={editFormData.lastName} 
                      onChange={e => setEditFormData({ ...editFormData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                {/* ইংরেজি নাম ফিল্ড */}
                <div style={{ padding: '12px 14px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', marginTop: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--success)', marginBottom: '8px' }}>
                    🔤 ইংরেজিতে নাম লিখুন (English Name) <span style={{ fontSize: '0.72rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                  </div>
                  <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                    <div>
                      <label className="form-label">First Name — in English</label>
                      <input 
                        type="text" className="form-input" placeholder="e.g. Muhammad"
                        value={editFormData.firstNameEn || ''} 
                        onChange={e => setEditFormData({ ...editFormData, firstNameEn: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Last Name — in English</label>
                      <input 
                        type="text" className="form-input" placeholder="e.g. Hasan"
                        value={editFormData.lastNameEn || ''} 
                        onChange={e => setEditFormData({ ...editFormData, lastNameEn: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* প্রাতিষ্ঠানিক আইডি ও ভর্তি বিবরণী (Super Admin, Co-Super Admin, Admin with permission) */}
                <div style={{ 
                  gridColumn: '1 / -1', 
                  padding: '12px 14px', 
                  borderRadius: '8px', 
                  background: 'rgba(99, 102, 241, 0.05)', 
                  border: '1px solid rgba(99, 102, 241, 0.15)' 
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-400)', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>🆔 শিক্ষার্থী আইডি ও ভর্তি বিবরণী (Student ID & Admission No.)</span>
                    {!canModifyIdAndAdmission && (
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>🔒 শুধুমাত্র সুপার অ্যাডমিন / অ্যাডমিন পরিবর্তন করতে পারবেন</span>
                    )}
                  </div>
                  <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                    <div>
                      <label className="form-label">ভর্তি নম্বর (Admission Number)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="যেমন: ADM-2026-10001"
                        value={editFormData.admissionNumber || ''} 
                        onChange={e => setEditFormData({ ...editFormData, admissionNumber: e.target.value })}
                        disabled={!canModifyIdAndAdmission}
                        style={!canModifyIdAndAdmission ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
                      />
                    </div>
                    <div>
                      <label className="form-label">ছাত্র/ছাত্রী আইডি (Student ID)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder={`যেমন: ANB${new Date().getFullYear()}1 / ANG${new Date().getFullYear()}1`}
                        value={editFormData.studentId || ''} 
                        onChange={e => setEditFormData({ ...editFormData, studentId: e.target.value })}
                        disabled={!canModifyIdAndAdmission}
                        style={!canModifyIdAndAdmission ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <label className="form-label" style={{ fontSize: '0.8rem' }}>
                      📟 ZKTeco বায়োমেট্রিক আইডি (Device User ID) <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>(মেশিনে নিবন্ধিত রোল বা আইডি — খালি রাখলে ছাত্র আইডি দিয়ে কাজ করবে)</span>
                    </label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="যেমন: 1, 2, 101 বা রোল নম্বর"
                      value={editFormData.deviceUserId || ''} 
                      onChange={e => setEditFormData({ ...editFormData, deviceUserId: e.target.value })}
                      disabled={!canModifyIdAndAdmission}
                      style={!canModifyIdAndAdmission ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
                    />
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                  <div>
                    <label className="form-label">জন্ম তারিখ <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(দিন-মাস-বছর / DD-MM-YYYY)</span></label>
                    <input 
                      type="date" className="form-input" 
                      value={editFormData.dateOfBirth} 
                      onChange={e => setEditFormData({ ...editFormData, dateOfBirth: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">রক্তের গ্রুপ</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.bloodGroup} 
                      onChange={e => setEditFormData({ ...editFormData, bloodGroup: e.target.value })}
                    >
                      <option value="">-- রক্তের গ্রুপ বাছুন --</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">লিঙ্গ</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.gender} 
                      onChange={e => setEditFormData({ ...editFormData, gender: e.target.value })}
                    >
                      <option value="male">ছাত্র (Male)</option>
                      <option value="female">ছাত্রী (Female)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">স্ট্যাটাস</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.status} 
                      onChange={e => setEditFormData({ ...editFormData, status: e.target.value })}
                    >
                      <option value="active">সক্রিয় (Active)</option>
                      <option value="inactive">নিষ্ক্রিয় (Inactive)</option>
                      <option value="graduated">স্নাতক (Graduated)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">শাখা (Branch)</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.branchId} 
                      onChange={e => setEditFormData({ ...editFormData, branchId: e.target.value })}
                    >
                      <option value="">-- শাখা নির্বাচন করুন --</option>
                      {branches.filter(b => b.name !== 'হিফজ শাখা').map(b => (
                        <option key={b._id} value={b._id}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">আবাসিক অবস্থা (Residential Status)</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.residentialStatus} 
                      onChange={e => setEditFormData({ ...editFormData, residentialStatus: e.target.value })}
                    >
                      <option value="non-residential">অনাবাসিক (Non-Residential)</option>
                      <option value="residential">আবাসিক (Residential)</option>
                      <option value="day-care">ডে-কেয়ার (Day-Care)</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">পিতার নাম (ঐচ্ছিক)</label>
                    <input 
                      type="text" className="form-input" placeholder="পিতার নাম"
                      value={editFormData.fatherName} 
                      onChange={e => setEditFormData({ ...editFormData, fatherName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">মায়ের নাম (ঐচ্ছিক)</label>
                    <input 
                      type="text" className="form-input" placeholder="মায়ের নাম"
                      value={editFormData.motherName} 
                      onChange={e => setEditFormData({ ...editFormData, motherName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">গ্রাম (ঐচ্ছিক)</label>
                    <input 
                      type="text" className="form-input" placeholder="গ্রাম"
                      value={editFormData.village} 
                      onChange={e => setEditFormData({ ...editFormData, village: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">আইডি/জন্ম নিবন্ধন নাম্বার (ঐচ্ছিক)</label>
                    <input 
                      type="text" className="form-input" placeholder="আইডি/জন্ম নিবন্ধন নাম্বার"
                      value={editFormData.nationalIdOrBirthCertNo} 
                      onChange={e => setEditFormData({ ...editFormData, nationalIdOrBirthCertNo: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Academic Enrollment Block */}
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-400)' }}>একাডেমিক বিবরণী (Academic Enrollment)</h3>
                <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                  <div>
                    <label className="form-label">শিক্ষাবর্ষ</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.academicYearId} 
                      onChange={e => setEditFormData({ ...editFormData, academicYearId: e.target.value })}
                    >
                      <option value="">-- শিক্ষাবর্ষ নির্বাচন করুন --</option>
                      {academicYears.map(y => (
                        <option key={y._id} value={y._id}>{y.name} {y.isCurrent ? '(চলতি)' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">শ্রেণি</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.classLevelId} 
                      onChange={e => setEditFormData({ ...editFormData, classLevelId: e.target.value })}
                    >
                      <option value="">-- শ্রেণি নির্বাচন করুন --</option>
                      {classLevels.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">সেকশন</label>
                    <select 
                      className="form-select form-input" 
                      value={editFormData.sectionId} 
                      onChange={e => setEditFormData({ ...editFormData, sectionId: e.target.value })}
                    >
                      <option value="">-- সেকশন নির্বাচন করুন --</option>
                      {SECTION_OPTIONS.map((sec, idx) => (
                        <option key={idx} value={sec}>{sec}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">রোল নম্বর</label>
                    <input 
                      type="text" className="form-input" placeholder="যেমন: 1"
                      value={editFormData.rollNumber} 
                      onChange={e => setEditFormData({ ...editFormData, rollNumber: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Custom Fee & Discount Block */}
              <div style={{ padding: '14px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '10px', border: '1px solid var(--border-color, #e2e8f0)' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-600, #059669)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  💰 বিশেষ ফি ও ছাড় (Custom Monthly Fee / Discount)
                </h3>
                <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                  <div>
                    <label className="form-label text-xs">বিশেষ মাসিক বেতন (টাকা)</label>
                    <input 
                      type="number" 
                      min="0"
                      className="form-input" 
                      placeholder="খালি রাখলে শ্রেণির নিয়মিত ফি প্রযোজ্য হবে"
                      value={editFormData.customMonthlyFee} 
                      onChange={e => setEditFormData({ ...editFormData, customMonthlyFee: e.target.value })}
                    />
                    <span className="text-xs text-muted" style={{ display: 'block', marginTop: '4px' }}>
                      যেমন: নিয়মিত ফি ৫০০ হলেও কারও ৩৫০ বা ৪০০ হলে এখানে লিখুন
                    </span>
                  </div>
                  <div>
                    <label className="form-label text-xs">ছাড়ের বিবরণ / কারণ</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="যেমন: দরিদ্র তহবিল, এতিম কোটা, ইত্যাদি"
                      value={editFormData.feeDiscountNote} 
                      onChange={e => setEditFormData({ ...editFormData, feeDiscountNote: e.target.value })}
                    />
                    <span className="text-xs text-muted" style={{ display: 'block', marginTop: '4px' }}>
                      ইনভয়েস ও রশিদে এই ছাড়ের কারণ উল্লেখ থাকবে
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Credentials Block */}
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-400)' }}>পোর্টাল লগইন বিবরণী</h3>
                <div className="grid grid-2" style={{ gap: '12px 16px' }}>
                  <div>
                    <label className="form-label">ইমেইল ঠিকানা</label>
                    <input 
                      type="email" className="form-input" 
                      value={editFormData.email} 
                      onChange={e => setEditFormData({ ...editFormData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">ফোন নম্বর</label>
                    <input 
                      type="text" className="form-input" 
                      value={editFormData.phone} 
                      onChange={e => setEditFormData({ ...editFormData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">ব্যবহারকারীর নাম (Username)</label>
                    <input 
                      type="text" className="form-input" 
                      value={editFormData.username} 
                      onChange={e => setEditFormData({ ...editFormData, username: e.target.value.toLowerCase().replace(/\s+/g, '') })}
                    />
                  </div>
                  <div>
                    <label className="form-label">নতুন পাসওয়ার্ড (পরিবর্তন করতে চাইলে)</label>
                    <input 
                      type="password" className="form-input" placeholder="খালি রাখলে আগের পাসওয়ার্ড থাকবে"
                      value={editFormData.password} 
                      onChange={e => setEditFormData({ ...editFormData, password: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary" disabled={updating}>
                  {updating ? <Loader className="animate-spin" size={16} /> : <><Save size={16} /> আপডেট করুন</>}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Quick Custom Monthly Fee & Discount Modal */}
      {isFeeModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '16px'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '520px', borderRadius: '16px',
            padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            animation: 'scaleUp 0.2s ease-out'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💰</span> বিশেষ মাসিক বেতন ও ফি ছাড়
                </h3>
                <p style={{ margin: '3px 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  শিক্ষার্থী: {name} (রোল: {enrollment?.rollNumber || '—'}, শ্রেণি: {enrollment?.classLevel?.name || '—'})
                </p>
              </div>
              <button 
                type="button"
                className="btn btn-ghost btn-icon" 
                onClick={() => setIsFeeModalOpen(false)}
                style={{ borderRadius: '50%' }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveFeeModal}>
              {/* Presets */}
              <div style={{ marginBottom: '16px' }}>
                <label className="form-label" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  ⚡ দ্রুত বাটন (১-ক্লিকে সেট করুন):
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.78rem', padding: '6px 10px', background: '#ecfdf5', borderColor: '#a7f3d0', color: '#065f46' }}
                    onClick={() => {
                      setFeeModalCustomFee('0');
                      setFeeModalDiscountNote('শিক্ষক সন্তান (১০০% মাফ)');
                    }}
                  >
                    👨‍🏫 শিক্ষক সন্তান (৳ 0)
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.78rem', padding: '6px 10px', background: '#eff6ff', borderColor: '#bfdbfe', color: '#1e40af' }}
                    onClick={() => {
                      const regularFee = Number(enrollment?.classLevel?.monthlyFee) || 0;
                      setFeeModalCustomFee(String(Math.round(regularFee * 0.5)));
                      setFeeModalDiscountNote('৫০% বিশেষ ছাড়');
                    }}
                  >
                    🏷️ ৫০% ছাড়
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.78rem', padding: '6px 10px', background: '#fef3c7', borderColor: '#fde68a', color: '#92400e' }}
                    onClick={() => {
                      setFeeModalDiscountNote('দরিদ্র তহবিল / এতিম কোটা');
                    }}
                  >
                    🤝 দরিদ্র তহবিল
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    style={{ fontSize: '0.78rem', padding: '6px 10px', border: '1px dashed var(--border-color)' }}
                    onClick={() => {
                      setFeeModalCustomFee('');
                      setFeeModalDiscountNote('');
                    }}
                  >
                    🔄 নিয়মিত ফি (রিসেট)
                  </button>
                </div>
              </div>

              {/* Custom Fee Amount */}
              <div className="form-group mb-16">
                <label className="form-label">
                  বিশেষ মাসিক বেতন (টাকা ৳)
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '6px' }}>
                    (শ্রেণির নিয়মিত ফি: ৳{enrollment?.classLevel?.monthlyFee || 0})
                  </span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="number"
                    min="0"
                    className="form-input"
                    placeholder="খালি রাখলে শ্রেণির নিয়মিত ফি প্রযোজ্য হবে (যেমন: 0, 300, 500)"
                    value={feeModalCustomFee}
                    onChange={(e) => setFeeModalCustomFee(e.target.value)}
                    style={{ fontSize: '1.05rem', fontWeight: 700 }}
                  />
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold', color: 'var(--text-muted)' }}>
                    BDT
                  </span>
                </div>
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  * শিক্ষক সন্তানের জন্য 0 টাকা দিন। খালি রাখলে সাধারণ ছাত্রের মত রেগুলার ফি প্রযোজ্য হবে।
                </p>
              </div>

              {/* Discount Note */}
              <div className="form-group mb-20">
                <label className="form-label">ছাড়ের বিবরণ / কারণ (Discount Note)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="যেমন: শিক্ষক সন্তান, দরিদ্র কোটা, হাফ-ফি ইত্যাদি"
                  value={feeModalDiscountNote}
                  onChange={(e) => setFeeModalDiscountNote(e.target.value)}
                />
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  ইনভয়েস ও ফি রশিদে এই কারণটি ডিসপ্লে হবে।
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsFeeModalOpen(false)}
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={savingFeeModal}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {savingFeeModal ? <Loader className="animate-spin" size={16} /> : <><Save size={16} /> সংরক্ষণ করুন</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Photo Crop Modal for Student Edit / Direct Change */}
      <ImageCropModal 
        isOpen={isCropModalOpen}
        imageSrc={rawImageSrc}
        onClose={() => { setIsCropModalOpen(false); setRawImageSrc(null); }}
        onCropComplete={async (croppedPhoto) => {
          if (cropTarget === 'direct') {
            await handleSaveDirectPhoto(croppedPhoto);
          } else {
            setEditFormData(prev => ({ ...prev, photo: croppedPhoto }));
          }
        }}
        title="শিক্ষার্থীর ছবি রিসাইজ ও ক্রপ করুন"
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
