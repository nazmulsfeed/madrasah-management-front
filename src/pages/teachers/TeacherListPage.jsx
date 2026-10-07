import { useState, useEffect } from 'react';
import { Plus, Users, User, Phone, Mail, X, CheckCircle, AlertCircle, Trash2, Edit, ChevronLeft, ChevronRight, Camera, Shield, Printer, Maximize2, Download } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import ImageCropModal from '../../components/common/ImageCropModal';
import { getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';

export default function TeacherListPage() {
  const { user } = useAuthStore();
  const [myPermissions, setMyPermissions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('userPermissions') || '{}'); } catch { return {}; }
  });

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
    fetchPerms();
  }, [user]);

  const isSuperOrAdmin = ['super_admin', 'co_super_admin', 'admin'].includes(user?.userType) || 
                         ['co_super_admin', 'admin'].includes(user?.adminRole);

  const canViewTeachers = isSuperOrAdmin || 
                          Boolean(myPermissions?.['teacher.view'] || myPermissions?.['user.view'] || myPermissions?.can_view_users);

  const canCreateTeacher = isSuperOrAdmin || Boolean(myPermissions?.['teacher.create']);
  const canEditTeacher = isSuperOrAdmin || Boolean(myPermissions?.['teacher.update']);
  const canDeleteTeacher = isSuperOrAdmin || Boolean(myPermissions?.['teacher.delete']);

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__teacher_list');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  
  // Filter states
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');

  const designations = Array.from(new Set(teachers.map(t => t.designation).filter(Boolean)));

  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = `${teacher.user?.firstName || ''} ${teacher.user?.lastName || ''}`.toLowerCase();
    const email = (teacher.user?.email || '').toLowerCase();
    const phone = (teacher.user?.phone || '').toLowerCase();
    const designation = (teacher.designation || '').toLowerCase();
    const searchLower = search.toLowerCase();

    const matchesSearch = 
      !search ||
      fullName.includes(searchLower) ||
      email.includes(searchLower) ||
      phone.includes(searchLower) ||
      designation.includes(searchLower);

    let matchesType = true;
    if (typeFilter === 'hifz_boys') {
      matchesType = teacher.teacherType === 'hifz' && ((teacher.branch || teacher.user?.branch || '').includes('বালক'));
    } else if (typeFilter === 'hifz_girls') {
      matchesType = teacher.teacherType === 'hifz' && ((teacher.branch || teacher.user?.branch || '').includes('বালিকা'));
    } else if (typeFilter) {
      matchesType = teacher.teacherType === typeFilter;
    }

    const matchesDesignation = !designationFilter || teacher.designation === designationFilter;
    const matchesRole = !roleFilter || teacher.user?.userType === roleFilter || teacher.user?.adminRole === roleFilter;

    return matchesSearch && matchesType && matchesDesignation && matchesRole;
  });

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTeachers = filteredTeachers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredTeachers.length / limit);

  useEffect(() => {
    setPage(1);
  }, [search, typeFilter, roleFilter, designationFilter]);

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }
  const [previewTeacher, setPreviewTeacher] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    teacherId: '',
    teacherType: 'regular',
    branch: '',
    userType: 'teacher',
    customUserType: '',
    designation: '',
    baseSalary: '',
    password: '',
    photo: ''
  });

  // Photo Crop Modal state
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [rawImageSrc, setRawImageSrc] = useState(null);

  const userTypeLabels = {
    co_super_admin: 'কো-সুপার অ্যাডমিন',
    admin: 'অ্যাডমিন',
    principal: 'প্রিন্সিপাল',
    vice_principal: 'ভাইস প্রিন্সিপাল',
    teacher: 'শিক্ষক',
    hifz_teacher: 'হিফজ শিক্ষক',
    accountant: 'হিসাবরক্ষক',
    cashier: 'ক্যাশিয়ার',
    admission_officer: 'ভর্তি কর্মকর্তা',
    hostel_manager: 'হোস্টেল ম্যানেজার',
    library_manager: 'লাইব্রেরি ম্যানেজার',
  };

  const getCombinedRoleBadge = (targetUser) => {
    if (!targetUser) return 'শিক্ষক';
    const pType = targetUser.userType;
    const aRole = targetUser.adminRole;
    const pLabel = userTypeLabels[pType] || pType || 'স্টাফ';

    if (pType === 'super_admin') return 'সুপার অ্যাডমিন';
    if (aRole && aRole !== pType) {
      const aLabel = userTypeLabels[aRole] || aRole;
      return `${pLabel} + ${aLabel}`;
    }
    return pLabel;
  };

  const teacherTypeLabels = {
    regular: 'জেনারেল',
    hifz: 'হিফজ',
    guest: 'গেস্ট',
    staff: 'স্টাফ',
  };

  const fetchTeachers = async () => {
    if (!canViewTeachers) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      setSelectedIds([]);
      const res = await api.get('/teachers', { params: { limit: 1000 } });
      // paginated response: { success, data: [...], pagination }
      if (res.data.success) {
        setTeachers(res.data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch teachers', err);
      if (err.response?.status === 403) {
        setTeachers([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, [canViewTeachers]);

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Close preview modal on Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && previewTeacher) {
        setPreviewTeacher(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewTeacher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'teacherType') {
      if (value === 'hifz') {
        setFormData(prev => ({
          ...prev,
          teacherType: 'hifz',
          userType: 'hifz_teacher'
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          teacherType: value,
          branch: '',
          userType: prev.userType === 'hifz_teacher' ? 'teacher' : prev.userType
        }));
      }
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '', lastName: '', email: '', phone: '',
      username: '', teacherId: '', teacherType: 'regular', branch: '', userType: 'teacher', customUserType: '', designation: '', baseSalary: '', password: '', photo: ''
    });
  };

  const handleEditClick = (teacher) => {
    if (!canEditTeacher) {
      setToast({ type: 'error', message: 'স্টাফ/শিক্ষক সম্পাদনা করার অনুমতি আপনার নেই' });
      return;
    }
    const knownTypes = ['co_super_admin','admin','principal','vice_principal','teacher','hifz_teacher','accountant','cashier','admission_officer','hostel_manager','library_manager','office_assistant','cook','security_guard','cleaner','driver'];
    const existingType = teacher.user?.userType || 'teacher';
    const isKnown = knownTypes.includes(existingType);
    setFormData({
      firstName: teacher.user?.firstName || '',
      lastName: teacher.user?.lastName || '',
      username: teacher.user?.username || '',
      email: teacher.user?.email || '',
      phone: teacher.user?.phone || '',
      teacherId: teacher.employeeId || '',
      teacherType: teacher.teacherType || 'regular',
      branch: teacher.branch || teacher.user?.branch || '',
      userType: isKnown ? existingType : 'other',
      customUserType: isKnown ? '' : existingType,
      designation: teacher.designation || '',
      baseSalary: teacher.baseSalary || teacher.user?.baseSalary || '',
      password: '',
      photo: teacher.user?.photo || ''
    });
    setEditingId(teacher._id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEditing && !canEditTeacher) {
      setToast({ type: 'error', message: 'স্টাফ/শিক্ষক সম্পাদনা করার অনুমতি আপনার নেই' });
      return;
    }
    if (!isEditing && !canCreateTeacher) {
      setToast({ type: 'error', message: 'নতুন স্টাফ/শিক্ষক তৈরি করার অনুমতি আপনার নেই' });
      return;
    }

    if (formData.teacherType === 'hifz' && !formData.branch?.trim()) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে হিফজ শাখা (বালক শাখা / বালিকা শাখা) নির্বাচন করুন' });
      return;
    }

    setSubmitting(true);
    try {
      // custom role: 'other' হলে customUserType ব্যবহার করুন
      const submitData = { ...formData };
      if (submitData.userType === 'other') {
        if (!submitData.customUserType?.trim()) {
          setToast({ type: 'error', message: 'অনুগ্রহ করে কাস্টম রোলের নাম লিখুন' });
          setSubmitting(false);
          return;
        }
        submitData.userType = submitData.customUserType.trim();
      }
      if (isEditing) {
        const res = await api.patch(`/teachers/${editingId}`, submitData);
        if (res.data.success) {
          setIsModalOpen(false);
          resetForm();
          setIsEditing(false);
          setEditingId(null);
          setToast({ type: 'success', message: 'স্টাফ/শিক্ষকের তথ্য সফলভাবে আপডেট করা হয়েছে!' });
          fetchTeachers();
        }
      } else {
        const res = await api.post('/teachers', submitData);
        if (res.data.success) {
          setIsModalOpen(false);
          resetForm();
          setToast({ type: 'success', message: 'স্টাফ/শিক্ষক সফলভাবে যোগ করা হয়েছে!' });
          fetchTeachers();
        }
      }
    } catch (err) {
      console.error('Failed to create teacher', err);
      const errMsg = err.response?.data?.message || 
                     err.response?.data?.errors?.join(', ') ||
                     'স্টাফ/শিক্ষক সংরক্ষণ করতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    } finally {
      setSubmitting(false);
    }
  };

  const [selectedIds, setSelectedIds] = useState([]);

  const handleDelete = async (id) => {
    if (!canDeleteTeacher) {
      setToast({ type: 'error', message: 'স্টাফ/শিক্ষক মুছে ফেলার অনুমতি আপনার নেই' });
      return;
    }
    if (!window.confirm('আপনি কি নিশ্চিতভাবে এই স্টাফ/শিক্ষককে মুছে ফেলতে চান?')) return;
    try {
      const res = await api.delete(`/teachers/${id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: 'স্টাফ/শিক্ষক সফলভাবে মুছে ফেলা হয়েছে!' });
        setSelectedIds(prev => prev.filter(item => item !== id));
        fetchTeachers();
      }
    } catch (err) {
      console.error('Failed to delete teacher', err);
      const errMsg = err.response?.data?.message || 'স্টাফ/শিক্ষক মুছে ফেলতে সমস্যা হয়েছে';
      setToast({ type: 'error', message: errMsg });
    }
  };

  const handleBulkDelete = async () => {
    if (!canDeleteTeacher) {
      setToast({ type: 'error', message: 'স্টাফ/শিক্ষক মুছে ফেলার অনুমতি আপনার নেই' });
      return;
    }
    if (!window.confirm(`আপনি কি নিশ্চিত যে বাছাইকৃত ${selectedIds.length} জন স্টাফ/শিক্ষককে মুছে ফেলতে চান?`)) return;
    try {
      setLoading(true);
      await Promise.all(selectedIds.map(id => api.delete(`/teachers/${id}`)));
      setSelectedIds([]);
      setToast({ type: 'success', message: 'বাছাইকৃত স্টাফ/শিক্ষক সফলভাবে মুছে ফেলা হয়েছে!' });
      fetchTeachers();
    } catch (err) {
      console.error('Failed bulk delete teachers', err);
      setToast({ type: 'error', message: 'কিছু স্টাফ/শিক্ষক মুছে ফেলা যায়নি' });
      fetchTeachers();
    }
  };

  const { madrasahName, branchName } = getMadrasahInfo(user);

  const handlePrintPdf = () => {
    if (!filteredTeachers.length) {
      alert('প্রিন্ট করার মতো কোনো শিক্ষক বা স্টাফ পাওয়া যায়নি');
      return;
    }
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('পপআপ ব্লক করা হয়েছে। অনুগ্রহ করে ব্রাউজারের পপআপ পারমিশন এলাউ করুন।');
      return;
    }

    const isStaffList = typeFilter === 'staff' || roleFilter === 'staff';
    const isTeacherList = typeFilter === 'regular' || typeFilter === 'hifz';
    const reportTitle = isStaffList 
      ? 'কর্মকর্তা ও কর্মচারী (স্টাফ) তালিকা'
      : isTeacherList 
        ? 'শিক্ষকমণ্ডলী তালিকা'
        : 'শিক্ষকমণ্ডলী ও স্টাফ পূর্ণাঙ্গ বিবরণী';

    const dateStr = new Date().toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${madrasahName} — ${reportTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${getMadrasahPrintStyles('landscape', { wrap: false })}
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 9pt; }
    th { background: #0f766e; color: #fff; text-align: left; padding: 7px 8px; font-size: 9pt; border: 1px solid #0f766e; }
    td { padding: 6px 8px; border: 1px solid #cbd5e1; font-size: 8.8pt; vertical-align: middle; }
    tr:nth-child(even) { background: #f8fafc; }
    @media print {
      body { padding: 0; }
      thead { display: table-header-group; }
      tr { page-break-inside: avoid; }
      .print-footer-signatures {
        margin-top: auto !important;
        padding-top: 24px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: reportTitle,
        orientation: 'landscape',
        metaLeft: `<strong>মোট জনবল:</strong> ${filteredTeachers.length} জন`,
        metaRight: `<strong>তারিখ:</strong> ${dateStr}`
      })}
  <table>
    <thead>
      <tr>
        <th style="width: 35px; text-align: center;">নং</th>
        <th>আইডি</th>
        <th>নাম</th>
        <th>পদবি</th>
        <th>বিভাগ</th>
        <th>দায়িত্ব / পদ</th>
        <th>ফোন নম্বর</th>
        <th>ইমেইল</th>
        <th>স্ট্যাটাস</th>
      </tr>
    </thead>
    <tbody>
      ${filteredTeachers.map((t, idx) => `
        <tr>
          <td style="text-align: center;">${idx + 1}</td>
          <td>${t.employeeId || '—'}</td>
          <td><strong>${t.user?.firstName || ''} ${t.user?.lastName || ''}</strong></td>
          <td>${t.designation || '—'}</td>
          <td>${t.teacherType === 'regular' ? 'জেনারেল' : t.teacherType === 'hifz' ? `হিফজ (${(t.branch || t.user?.branch || '').includes('বালিকা') ? 'বালিকা শাখা' : 'বালক শাখা'})` : t.teacherType === 'guest' ? 'গেস্ট' : 'স্টাফ'}</td>
          <td>${userTypeLabels[t.user?.userType] || t.user?.userType || '—'}</td>
          <td>${t.user?.phone || '—'}</td>
          <td>${t.user?.email || '—'}</td>
          <td>${t.status === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'}</td>
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
</html>`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
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

      <div className="page-header">
        <div>
          <h1 className="page-title">শিক্ষকমণ্ডলী ও স্টাফ</h1>
          <p className="page-subtitle">শাখা: {branchName} • মোট {filteredTeachers.length} জন কর্মরত</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            className="btn btn-secondary" 
            onClick={handlePrintPdf}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            title="শিক্ষক ও স্টাফ তালিকা প্রিন্ট বা PDF হিসেবে ডাউনলোড করুন"
          >
            <Printer size={16} /> প্রিন্ট / PDF রিপোর্ট
          </button>
          {canCreateTeacher && (
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={16} /> নতুন স্টাফ/শিক্ষক
            </button>
          )}
        </div>
      </div>

      {/* Signature Role Selector for Printing */}
      <PrintSignatureRoleSelector
        selectedRoles={selectedSignatureRoles}
        onChange={(roles) => {
          setSelectedSignatureRoles(roles);
          try {
            localStorage.setItem('annur_footer_roles__teacher_list', JSON.stringify(roles));
          } catch (_) {}
        }}
        additionalRoles={['প্রস্তুতকারী', 'যাচাইকারী']}
        style={{ marginBottom: '16px' }}
      />

      {/* ফিল্টার বার */}
      {canViewTeachers && (
        <div className="card mb-24 filter-card" style={{ padding: '14px 18px' }}>
          <div className="filter-card-content">
            <div className="filter-search-form">
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="নাম, পদবি বা ফোন দিয়ে খুঁজুন..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="filter-dropdowns-wrap">
              <select
                className="form-input form-select"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">সকল বিভাগ</option>
                <option value="regular">জেনারেল</option>
                <option value="hifz">হিফজ (সকল শাখা)</option>
                <option value="hifz_boys">হিফজ (বালক শাখা)</option>
                <option value="hifz_girls">হিফজ (বালিকা শাখা)</option>
                <option value="guest">গেস্ট</option>
                <option value="staff">স্টাফ</option>
              </select>

              <select
                className="form-input form-select"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="">সকল রোল</option>
                {Object.entries(userTypeLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>

              <select
                className="form-input form-select"
                value={designationFilter}
                onChange={(e) => setDesignationFilter(e.target.value)}
              >
                <option value="">সকল পদবি</option>
                {designations.map(des => (
                  <option key={des} value={des}>{des}</option>
                ))}
              </select>

              {(typeFilter || roleFilter || designationFilter) && (
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setTypeFilter('');
                    setRoleFilter('');
                    setDesignationFilter('');
                  }}
                  style={{
                    height: '38px',
                    padding: '0 10px',
                    fontSize: '0.82rem',
                    color: 'var(--danger)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: 'var(--border-radius-sm)',
                    border: '1px dashed var(--danger)'
                  }}
                  title="ফিল্টার রিসেট করুন"
                >
                  <X size={14} /> রিসেট
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {canDeleteTeacher && filteredTeachers.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', background: 'var(--bg-card)', padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', marginBottom: 0 }}>
            <input 
              type="checkbox" 
              checked={filteredTeachers.length > 0 && selectedIds.length === filteredTeachers.length}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedIds(filteredTeachers.map(t => t._id));
                } else {
                  setSelectedIds([]);
                }
              }}
              style={{ cursor: 'pointer', width: '16px', height: '16px' }}
            />
            <span>সব সিলেক্ট করুন ({filteredTeachers.length} জনের মধ্যে)</span>
          </label>
          {selectedIds.length > 0 && (
            <button className="btn btn-danger btn-sm" onClick={handleBulkDelete} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Trash2 size={14} /> বাছাইকৃতগুলো মুছুন ({selectedIds.length})
            </button>
          )}
        </div>
      )}

      {!canViewTeachers ? (
        <div className="card empty-state" style={{ padding: '40px 20px', textAlign: 'center' }}>
          <Shield size={48} style={{ opacity: 0.3, color: 'var(--danger, #ef4444)', margin: '0 auto 16px' }} />
          <div className="empty-state-title">শিক্ষক তালিকা দেখার অনুমতি নেই</div>
          <p className="text-muted text-sm mt-8">আপনার অ্যাকাউন্টে এই তথ্য দেখার অনুমতি প্রত্যাহার করা হয়েছে বা দেয়া হয়নি। সুপার অ্যাডমিনের সাথে যোগাযোগ করুন।</p>
        </div>
      ) : loading ? (
        <div className="flex-center" style={{ padding: '60px' }}>
          <div className="spinner"></div>
        </div>
      ) : filteredTeachers.length === 0 ? (
        <div className="card empty-state">
          <Users size={48} style={{ opacity: 0.3 }} />
          <div className="empty-state-title mt-16">কোনো স্টাফ বা শিক্ষক পাওয়া যায়নি</div>
          <p className="text-muted text-sm mt-8">"নতুন স্টাফ/শিক্ষক" বাটনে ক্লিক করে যোগ করুন অথবা অনুসন্ধান পরিবর্তন করুন</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {paginatedTeachers.map((teacher) => (
            <div key={teacher._id} className="card animate-slide-up" style={{ textAlign: 'center', position: 'relative' }}>
              {canDeleteTeacher && (
                <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 10 }}>
                  <input 
                    type="checkbox" 
                    checked={selectedIds.includes(teacher._id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedIds(prev => [...prev, teacher._id]);
                      } else {
                        setSelectedIds(prev => prev.filter(id => id !== teacher._id));
                      }
                    }}
                    style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                  />
                </div>
              )}
              {(canEditTeacher || canDeleteTeacher) && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '4px' }}>
                  {canEditTeacher && (
                    <button
                      onClick={() => handleEditClick(teacher)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(20, 184, 166, 0.8)',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#14b8a6'; e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(20, 184, 166, 0.8)'; e.currentTarget.style.background = 'transparent'; }}
                      title="সম্পাদনা করুন"
                    >
                      <Edit size={16} />
                    </button>
                  )}
                  {canDeleteTeacher && (
                    <button
                      onClick={() => handleDelete(teacher._id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(239, 68, 68, 0.8)',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(239, 68, 68, 0.8)'; e.currentTarget.style.background = 'transparent'; }}
                      title="ডিলিট করুন"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              )}
              <div 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  margin: '0 auto 16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  overflow: 'hidden', 
                  border: teacher.user?.photo ? '2px solid var(--primary-500, #10b981)' : '2px solid var(--border-color)',
                  cursor: teacher.user?.photo ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  boxShadow: teacher.user?.photo ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                }}
                onClick={() => {
                  if (teacher.user?.photo) {
                    setPreviewTeacher({
                      photo: teacher.user.photo,
                      name: `${teacher.user?.firstName || ''} ${teacher.user?.lastName || ''}`.trim() || 'শিক্ষক',
                      designation: teacher.designation || userTypeLabels[teacher.user?.userType] || 'স্টাফ',
                      employeeId: teacher.employeeId,
                      phone: teacher.user?.phone,
                      email: teacher.user?.email,
                      teacherType: teacher.teacherType === 'hifz'
                        ? `হিফজ (${(teacher.branch || teacher.user?.branch || '').includes('বালিকা') ? 'বালিকা শাখা' : 'বালক শাখা'})`
                        : (teacherTypeLabels[teacher.teacherType] || 'জেনারেল')
                    });
                  }
                }}
                onMouseEnter={(e) => {
                  if (teacher.user?.photo) {
                    e.currentTarget.style.transform = 'scale(1.06)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (teacher.user?.photo) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                  }
                }}
                title={teacher.user?.photo ? 'ছবি বড় করে দেখতে ক্লিক করুন' : `${teacher.user?.firstName || ''} ${teacher.user?.lastName || ''}`}
              >
                {teacher.user?.photo ? (
                  <img src={teacher.user.photo} alt={teacher.user.firstName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <User size={32} style={{ color: 'var(--text-muted)' }} />
                )}
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{teacher.user?.firstName} {teacher.user?.lastName}</h3>
              <p className="text-sm text-primary mb-4">{teacher.designation || userTypeLabels[teacher.user?.userType] || 'স্টাফ'}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <span className="badge badge-info" style={{ fontSize: '0.688rem', padding: '2px 8px' }}>
                  রোল: {getCombinedRoleBadge(teacher.user)}
                </span>
                <span className="badge badge-muted" style={{ fontSize: '0.688rem', padding: '2px 8px' }}>
                  বিভাগ: {teacher.teacherType === 'hifz'
                    ? `হিফজ (${(teacher.branch || teacher.user?.branch || '').includes('বালিকা') ? 'বালিকা শাখা' : 'বালক শাখা'})`
                    : (teacherTypeLabels[teacher.teacherType] || 'জেনারেল')}
                </span>
              </div>
              
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <div className="flex gap-8 text-sm text-muted">
                  <Phone size={14} /> <span>{teacher.user?.phone || 'N/A'}</span>
                </div>
                {teacher.user?.email && (
                  <div className="flex gap-8 text-sm text-muted">
                    <Mail size={14} /> <span>{teacher.user?.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredTeachers.length > 0 && (
        <div className="card mt-24" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            {totalPages > 1 && (
              <div className="pagination" style={{ margin: 0, justifyContent: 'flex-start' }}>
                <button
                  className="pagination-btn"
                  disabled={page <= 1}
                  onClick={() => setPage(page - 1)}
                >
                  <ChevronRight size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      className={`pagination-btn ${p === page ? 'active' : ''}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  );
                })}
                <button
                  className="pagination-btn"
                  disabled={page >= totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <span>প্রতি পেজে প্রদর্শন:</span>
            <select 
              className="form-input form-select" 
              value={limit} 
              onChange={(e) => handleLimitChange(Number(e.target.value))} 
              style={{ width: '80px', padding: '6px 24px 6px 12px', fontSize: '0.875rem' }}
            >
              <option value={15}>১৫</option>
              <option value={25}>২৫</option>
              <option value={50}>৫০</option>
              <option value={100}>১০০</option>
            </select>
          </div>
        </div>
      )}

      {/* Modal */}
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
              <h2 style={{ fontSize: '1.25rem' }}>{isEditing ? 'স্টাফ/শিক্ষকের তথ্য সংশোধন করুন' : 'নতুন স্টাফ/শিক্ষক যোগ করুন'}</h2>
              <button className="btn-icon" onClick={() => { setIsModalOpen(false); resetForm(); setIsEditing(false); }} type="button">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Optional Photo Upload */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px dashed var(--border-color)'
              }}>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--primary-500)',
                  flexShrink: 0
                }}>
                  {formData.photo ? (
                    <img src={formData.photo} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <User size={30} style={{ opacity: 0.35 }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '2px' }}>
                    স্টাফ/শিক্ষকের ছবি <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                    <label className="btn btn-secondary btn-sm" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', padding: '4px 10px' }}>
                      <Camera size={14} />
                      <span>{formData.photo ? 'ছবি পরিবর্তন করুন' : 'ছবি আপলোড করুন'}</span>
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
                              setIsCropModalOpen(true);
                            };
                            reader.readAsDataURL(file);
                            e.target.value = '';
                          }
                        }} 
                      />
                    </label>
                    {formData.photo && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', padding: '4px 10px' }}
                        onClick={() => setFormData({ ...formData, photo: '' })}
                      >
                        <Trash2 size={13} />
                        <span>মুছে ফেলুন</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">নামের প্রথমাংশ *</label>
                  <input type="text" name="firstName" className="form-input" required value={formData.firstName} onChange={handleChange} placeholder="যেমন: মোহাম্মদ" />
                </div>
                <div className="form-group">
                  <label className="form-label">নামের শেষাংশ *</label>
                  <input type="text" name="lastName" className="form-input" required value={formData.lastName} onChange={handleChange} placeholder="যেমন: আহমদ" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">স্টাফ/টিচার আইডি (ঐচ্ছিক)</label>
                  <input type="text" name="teacherId" className="form-input" value={formData.teacherId} onChange={handleChange} placeholder="যেমন: STF-1001" />
                </div>
                <div className="form-group">
                  <label className="form-label">পদবি</label>
                  <input type="text" name="designation" className="form-input" placeholder="যেমন: লাইব্রেরিয়ান / হিসাবরক্ষক" value={formData.designation} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontWeight: 700, color: '#0f766e' }}>মাসিক নির্ধারিত মূল বেতন (৳)</label>
                  <input type="number" name="baseSalary" className="form-input font-mono" placeholder="যেমন: ১৫০০০" value={formData.baseSalary} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label className="form-label">বিভাগ / ধরন *</label>
                  <select name="teacherType" className="form-input" required value={formData.teacherType} onChange={handleChange}>
                    <option value="regular">জেনারেল (General)</option>
                    <option value="hifz">হিফজ (Hifz)</option>
                    <option value="guest">গেস্ট (Guest)</option>
                    <option value="staff">স্টাফ (Staff)</option>
                  </select>
                </div>

                {formData.teacherType === 'hifz' && (
                  <div className="form-group" style={{ animation: 'fadeIn 0.2s ease-in' }}>
                    <label className="form-label" style={{ fontWeight: 700, color: '#0f766e', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>হিফজ শাখা *</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#f59e0b' }}>(বাধ্যতামূলক)</span>
                    </label>
                    <select
                      name="branch"
                      className="form-input"
                      required
                      value={formData.branch}
                      onChange={handleChange}
                      style={{
                        borderColor: !formData.branch ? '#f59e0b' : '#0f766e',
                        fontWeight: 600,
                        backgroundColor: '#f0fdf4'
                      }}
                    >
                      <option value="">-- শাখা নির্বাচন করুন --</option>
                      <option value="বালক শাখা">👦 বালক শাখা (Boys Branch)</option>
                      <option value="বালিকা শাখা">👧 বালিকা শাখা (Girls Branch)</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">সিস্টেম রোল (Role) *</label>
                  <select name="userType" className="form-input" required value={formData.userType} onChange={handleChange}>
                    {(user?.userType === 'super_admin' || user?.userType === 'co_super_admin' || user?.adminRole === 'co_super_admin') && (
                      <option value="co_super_admin">কো-সুপার অ্যাডমিন (Co-Super Admin)</option>
                    )}
                    <option value="admin">অ্যাডমিন (Admin)</option>
                    <option value="principal">প্রিন্সিপাল (Principal)</option>
                    <option value="vice_principal">ভাইস প্রিন্সিপাল (Vice Principal)</option>
                    <option value="teacher">শিক্ষক (Teacher)</option>
                    <option value="hifz_teacher">হিফজ শিক্ষক (Hifz Teacher)</option>
                    <option value="accountant">হিসাবরক্ষক (Accountant)</option>
                    <option value="cashier">ক্যাশিয়ার (Cashier)</option>
                    <option value="admission_officer">ভর্তি কর্মকর্তা (Admission Officer)</option>
                    <option value="hostel_manager">হোস্টেল ম্যানেজার (Hostel Manager)</option>
                    <option value="library_manager">লাইব্রেরি ম্যানেজার (Library Manager)</option>
                    <optgroup label="── সহায়ক কর্মচারী ──">
                      <option value="office_assistant">অফিস সহকারী / কম্পিউটার অপারেটর</option>
                      <option value="cook">বাবুর্চি / রান্নাঘর কর্মী</option>
                      <option value="security_guard">দারোয়ান / সিকিউরিটি গার্ড / গেটম্যান</option>
                      <option value="cleaner">আয়া / পরিচ্ছন্নতাকর্মী / খাদেম</option>
                      <option value="driver">ড্রাইভার / পরিবহন কর্মী</option>
                    </optgroup>
                    <option value="other">✏️ অন্যান্য (নিজে লিখুন...)</option>
                  </select>
                  {formData.userType === 'other' && (
                    <div style={{ marginTop: '8px' }}>
                      <input
                        type="text"
                        name="customUserType"
                        className="form-input"
                        placeholder="যেমন: নিরাপত্তা কর্মকর্তা, পিয়ন, কোষাধ্যক্ষ..."
                        value={formData.customUserType}
                        onChange={handleChange}
                        required
                        style={{ borderColor: '#0f766e' }}
                      />
                      <span className="text-xs text-muted" style={{ display: 'block', marginTop: '4px' }}>
                        এই রোলটি সংরক্ষিত হবে এবং বেতন শিটে এই নামে দেখা যাবে
                      </span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">ফোন নম্বর *</label>
                  <input type="text" name="phone" className="form-input" required value={formData.phone} onChange={handleChange} placeholder="যেমন: 01711223344" />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">ইউজারনেম (Username)</label>
                  <input type="text" name="username" className="form-input" value={formData.username} onChange={handleChange} placeholder="যেমন: library_manager1" />
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">ইমেইল (ঐচ্ছিক)</label>
                  <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="যেমন: library@madrasah.com" />
                </div>
                
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">পাসওয়ার্ড</label>
                  <input type="text" name="password" className="form-input" placeholder="ফাঁকা রাখলে 'teacher123' হবে" value={formData.password} onChange={handleChange} />
                </div>
              </div>

              <div className="flex gap-16 mt-24" style={{ justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => { setIsModalOpen(false); resetForm(); }}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Photo Crop Modal for Teacher/Staff */}
      <ImageCropModal 
        isOpen={isCropModalOpen}
        imageSrc={rawImageSrc}
        onClose={() => { setIsCropModalOpen(false); setRawImageSrc(null); }}
        onCropComplete={(croppedPhoto) => setFormData(prev => ({ ...prev, photo: croppedPhoto }))}
        title="স্টাফ/শিক্ষকের ছবি রিসাইজ ও ক্রপ করুন"
      />

      {/* Teacher Profile Picture Preview Modal */}
      {previewTeacher && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            backdropFilter: 'blur(6px)',
            padding: '16px',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={() => setPreviewTeacher(null)}
        >
          <div
            style={{
              background: 'var(--bg-card, #1e293b)',
              border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              animation: 'scaleUp 0.25s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* হেডার */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
              background: 'rgba(0, 0, 0, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--primary-500, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Maximize2 size={16} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {previewTeacher.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {previewTeacher.designation ? `পদবি: ${previewTeacher.designation}` : ''}
                    {previewTeacher.employeeId ? ` • আইডি: ${previewTeacher.employeeId}` : ''}
                    {previewTeacher.teacherType ? ` • বিভাগ: ${previewTeacher.teacherType}` : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPreviewTeacher(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                  e.currentTarget.style.color = 'var(--danger, #ef4444)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                title="বন্ধ করুন (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* ছবি ডিসপ্লে */}
            <div style={{
              padding: '16px',
              background: '#0a0f1d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '320px',
              maxHeight: '65vh',
              overflow: 'hidden',
            }}>
              <img
                src={previewTeacher.photo}
                alt={previewTeacher.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                }}
              />
            </div>

            {/* ফুটার */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
              borderTop: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
              background: 'rgba(0, 0, 0, 0.15)',
            }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = previewTeacher.photo;
                  a.download = `${previewTeacher.name || 'teacher'}_photo.jpg`;
                  a.click();
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={14} /> ছবি ডাউনলোড
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setPreviewTeacher(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                বন্ধ করুন
              </button>
            </div>
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
