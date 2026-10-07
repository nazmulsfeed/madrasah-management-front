import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  X,
  ZoomIn,
  Maximize2,
  ExternalLink,
} from 'lucide-react';
import api from '../../api/axios';
import { SECTION_OPTIONS } from '../../utils/constants';
import useAuthStore from '../../store/authStore';
import StudentExportModal from '../../components/students/StudentExportModal';
import { getMadrasahInfo } from '../../utils/helpers';
import AuditBadge from '../../components/common/AuditBadge';

const statusLabels = {
  active: { label: 'সক্রিয়', class: 'badge-active' },
  inactive: { label: 'নিষ্ক্রিয়', class: 'badge-inactive' },
  graduated: { label: 'স্নাতক', class: 'badge-info' },
  transferred: { label: 'স্থানান্তরিত', class: 'badge-warning' },
  suspended: { label: 'স্থগিত', class: 'badge-danger' },
};

export default function StudentListPage() {
  const navigate = useNavigate();
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
    if (user) fetchPerms();
  }, [user]);

  const isSuperOrCoSuper = ['super_admin', 'co_super_admin'].includes(user?.userType) || 
                           ['co_super_admin'].includes(user?.adminRole);

  const canCreateStudent = isSuperOrCoSuper || Boolean(myPermissions?.['student.create']);
  const canUpdateStudent = isSuperOrCoSuper || Boolean(myPermissions?.['student.update']);
  const canDeleteStudent = isSuperOrCoSuper || Boolean(myPermissions?.['student.delete']);

  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Metadata state for dropdowns
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [branches, setBranches] = useState([]);
  
  // Active filters
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [selectedSectionName, setSelectedSectionName] = useState('');
  const [previewStudent, setPreviewStudent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewStudent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // URL search param sync
  useEffect(() => {
    const urlQuery = searchParams.get('search') || '';
    if (urlQuery !== search) {
      setSearch(urlQuery);
      setDebouncedSearch(urlQuery);
    }
  }, [searchParams]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 350);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchStudents = async (customSearch = null) => {
    setLoading(true);
    try {
      setSelectedIds([]);
      const params = { page, limit };
      const activeSearch = customSearch !== null ? customSearch : debouncedSearch;
      if (activeSearch) params.search = activeSearch.trim();
      if (statusFilter) params.status = statusFilter;
      if (classFilter) params.classLevel = classFilter;
      if (branchFilter) params.branch = branchFilter;
      params.sortBy = sortBy;
      params.sortOrder = sortOrder;

      if (sectionFilter) {
        if (sectionFilter.includes(',')) {
          params.sections = sectionFilter;
        } else {
          params.section = sectionFilter;
        }
      }

      const res = await api.get('/students', { params });
      if (res.data.success !== false) {
        setStudents(res.data.data || []);
        setPagination(res.data.pagination || { total: 0, pages: 1 });
      }
    } catch (err) {
      console.error('Fetch students error', err);
      setStudents([]);
      setPagination({ total: 0, pages: 1 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const [resClasses, resSections, resBranches] = await Promise.all([
          api.get('/students/classes'),
          api.get('/students/sections'),
          api.get('/students/branches'),
        ]);
        if (resClasses.data.success) setClasses(resClasses.data.data.classes || []);
        if (resSections.data.success) setSections(resSections.data.data.sections || []);
        if (resBranches.data.success) setBranches(resBranches.data.data.branches || []);
      } catch (err) {
        console.error('Failed to fetch filter metadata', err);
      }
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    if (!selectedSectionName) {
      setSectionFilter('');
      return;
    }

    const matchedSections = sections.filter(s => {
      const sName = s.name.trim();
      const sClassId = s.classLevel?._id || s.classLevel;
      const sBranchId = s.branch?._id || s.branch;

      const isClassMatch = !classFilter || (sClassId && sClassId.toString() === classFilter.toString());
      const isBranchMatch = !branchFilter || (sBranchId && sBranchId.toString() === branchFilter.toString());

      if (!isClassMatch || !isBranchMatch) return false;

      if (selectedSectionName === 'কোন সেকশন নাই') {
        return sName.includes('কোন সেকশন নাই') || sName.includes('কোন শাখা নাই') || sName.includes('নাই') || sName === 'no_section' || sName.includes('No Section');
      }
      return sName.startsWith(selectedSectionName) || sName === selectedSectionName;
    });

    const ids = matchedSections.map(s => s._id);
    if (ids.length > 0) {
      setSectionFilter(ids.join(','));
    } else {
      setSectionFilter('none_matched');
    }
  }, [selectedSectionName, classFilter, branchFilter, sections]);

  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [page, limit, statusFilter, classFilter, sectionFilter, branchFilter, debouncedSearch, sortBy, sortOrder]);

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setDebouncedSearch(search);
    setPage(1);
    fetchStudents(search);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই ছাত্র/ছাত্রীকে মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/students/${id}`);
      setSelectedIds(prev => prev.filter(item => item !== id));
      fetchStudents();
    } catch (err) {
      const errMsg = err.response?.data?.message || 'মুছে ফেলা ব্যর্থ হয়েছে';
      alert(errMsg);
    }
  };

  const handleBulkDelete = async () => {
    if (!window.confirm(`আপনি কি নিশ্চিত যে বাছাইকৃত ${selectedIds.length} জন ছাত্র/ছাত্রীকে মুছে ফেলতে চান?`)) return;
    try {
      setLoading(true);
      await Promise.all(selectedIds.map(id => api.delete(`/students/${id}`)));
      setSelectedIds([]);
      fetchStudents();
    } catch (err) {
      const errMsg = err.response?.data?.message || 'কিছু ছাত্র/ছাত্রী মুছে ফেলা যায়নি';
      alert(errMsg);
      fetchStudents();
    }
  };

  const [showExportModal, setShowExportModal] = useState(false);

  const handleExport = () => {
    setShowExportModal(true);
  };

  const getAvatarColor = (name) => {
    const colors = [
      'linear-gradient(135deg, #14b8a6, #0f766e)',
      'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      'linear-gradient(135deg, #f59e0b, #d97706)',
      'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      'linear-gradient(135deg, #ec4899, #be185d)',
      'linear-gradient(135deg, #22c55e, #15803d)',
    ];
    const index = (name || '').charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleSort = (col) => {
    if (sortBy === col) {
      setSortOrder(o => o === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(col);
      setSortOrder('asc');
    }
    setPage(1);
  };

  const parseBnEnNumber = (val) => {
    if (val === null || val === undefined) return null;
    const str = String(val).trim();
    if (!str) return null;
    const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
    const normalized = str.replace(/[০-৯]/g, d => bnToEn[d]);
    const num = parseFloat(normalized.replace(/[^0-9.-]/g, ''));
    return isNaN(num) ? null : num;
  };

  // Helper: Extract serial number from student IDs like ANB20264, ANG20265, ANB20271, etc.
  // Format: ANB/ANG + 4-digit-year (2026/2027/2028...) + serial number
  // Returns only the trailing serial number after the year for correct natural sorting.
  const parseCustomId = (idStr) => {
    if (!idStr) return 999999;
    const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
    const s = String(idStr).trim().toUpperCase().replace(/[০-৯]/g, d => bnToEn[d]);
    // Match ANB/ANG + exactly 4 digit year + remaining serial digits
    // e.g. ANB20264 -> year=2026, serial=4
    // e.g. ANB202642 -> year=2026, serial=42
    const fullMatch = s.match(/^AN[BG](\d{4})(\d+)$/);
    if (fullMatch) {
      return parseInt(fullMatch[2], 10); // Return only serial after year
    }
    // Fallback: strip ANB/ANG prefix and return remaining digits
    const stripped = s.replace(/^AN[BG]/i, '');
    const match = stripped.match(/(\d+)/);
    if (match) {
      return parseInt(match[1], 10);
    }
    const digits = s.replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : 999999;
  };

  const sortedStudents = useMemo(() => {
    let list = [...students];

    // Defensive client-side filtering
    if (classFilter) {
      list = list.filter(student => {
        const clId = student.currentEnrollment?.classLevel?._id || student.currentEnrollment?.classLevel;
        const clName = student.currentEnrollment?.classLevel?.name;
        return String(clId) === String(classFilter) || String(clName) === String(classFilter);
      });
    }

    if (statusFilter) {
      list = list.filter(student => student.status === statusFilter);
    }

    if (branchFilter) {
      list = list.filter(student => {
        const bId = student.branch?._id || student.branch;
        return String(bId) === String(branchFilter);
      });
    }

    const cleanSearch = (debouncedSearch || '').trim();
    const cleanNum = parseBnEnNumber(cleanSearch);
    const isPureNumeric = cleanNum !== null && /^[0-9০-৯\s]+$/.test(cleanSearch);

    if (!sortBy && !isPureNumeric) return list;

    list.sort((a, b) => {
      // Priority 1: If searching a number (e.g. 34, 29), exact roll match ALWAYS comes FIRST!
      if (cleanSearch && isPureNumeric) {
        const rNumA = parseBnEnNumber(a.currentEnrollment?.rollNumber);
        const rNumB = parseBnEnNumber(b.currentEnrollment?.rollNumber);
        const idSuffA = parseCustomId(a.studentId || a.admissionNumber);
        const idSuffB = parseCustomId(b.studentId || b.admissionNumber);

        let rankA = 99;
        let rankB = 99;
        if (rNumA === cleanNum) rankA = 0; // Exact roll match -> #1
        else if (idSuffA === cleanNum) rankA = 1; // Exact student ID suffix match -> #2
        else if (String(a.currentEnrollment?.rollNumber || '').startsWith(String(cleanNum))) rankA = 2;
        else rankA = 3;

        if (rNumB === cleanNum) rankB = 0;
        else if (idSuffB === cleanNum) rankB = 1;
        else if (String(b.currentEnrollment?.rollNumber || '').startsWith(String(cleanNum))) rankB = 2;
        else rankB = 3;

        if (rankA !== rankB) return rankA - rankB;
      }

      let cmp = 0;
      if (sortBy === 'roll') {
        const rollA = parseBnEnNumber(a.currentEnrollment?.rollNumber);
        const rollB = parseBnEnNumber(b.currentEnrollment?.rollNumber);
        if (rollA !== null && rollB !== null) cmp = rollA - rollB;
        else if (rollA !== null) cmp = -1;
        else if (rollB !== null) cmp = 1;
        else cmp = String(a.currentEnrollment?.rollNumber || '').localeCompare(String(b.currentEnrollment?.rollNumber || ''), 'bn');
      } else if (sortBy === 'name') {
        const nameA = a.user?.fullName || `${a.user?.firstName || ''} ${a.user?.lastName || ''}`.trim();
        const nameB = b.user?.fullName || `${b.user?.firstName || ''} ${b.user?.lastName || ''}`.trim();
        cmp = nameA.localeCompare(nameB, 'bn', { sensitivity: 'base' });
      } else if (sortBy === 'studentId') {
        const idCodeA = a.studentId || a.admissionNumber || '';
        const idCodeB = b.studentId || b.admissionNumber || '';
        const numA = parseCustomId(idCodeA);
        const numB = parseCustomId(idCodeB);
        if (numA !== numB) cmp = numA - numB;
        else cmp = String(idCodeA).localeCompare(String(idCodeB));
      } else if (sortBy === 'class') {
        const orderA = a.currentEnrollment?.classLevel?.order;
        const orderB = b.currentEnrollment?.classLevel?.order;
        if (orderA !== undefined && orderB !== undefined && orderA !== null && orderB !== null) {
          cmp = orderA - orderB;
        } else {
          const nameA = a.currentEnrollment?.classLevel?.name || '';
          const nameB = b.currentEnrollment?.classLevel?.name || '';
          cmp = nameA.localeCompare(nameB, 'bn');
        }
      } else if (sortBy === 'section') {
        const secA = a.currentEnrollment?.section?.name || (typeof a.currentEnrollment?.section === 'string' ? a.currentEnrollment.section : '') || '';
        const secB = b.currentEnrollment?.section?.name || (typeof b.currentEnrollment?.section === 'string' ? b.currentEnrollment.section : '') || '';
        cmp = secA.localeCompare(secB, 'bn');
      } else if (sortBy === 'username') {
        const uA = a.user?.username || '';
        const uB = b.user?.username || '';
        cmp = uA.localeCompare(uB);
      } else if (sortBy === 'status') {
        const sA = a.status || '';
        const sB = b.status || '';
        cmp = sA.localeCompare(sB);
      } else if (sortBy === 'createdAt') {
        cmp = new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      }

      return sortOrder === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [students, sortBy, sortOrder, classFilter, statusFilter, branchFilter, debouncedSearch]);

  const SortIcon = ({ col }) => {
    if (sortBy !== col) return <span style={{ opacity: 0.3, fontSize: '0.7rem', marginLeft: '4px' }}>⇅</span>;
    return <span style={{ fontSize: '0.75rem', marginLeft: '4px', color: 'var(--primary)' }}>{sortOrder === 'asc' ? '▲' : '▼'}</span>;
  };

  return (
    <div className="animate-fade-in">
      {/* পেজ হেডার */}
      <div className="page-header">
        <div>
          <h1 className="page-title">ছাত্র/ছাত্রী তালিকা</h1>
          <p className="page-subtitle">
            শাখা: {getMadrasahInfo(user).branchName} • মোট {pagination.total} জন ছাত্র/ছাত্রী নিবন্ধিত
          </p>
        </div>
        <div className="page-header-actions">
          {canDeleteStudent && selectedIds.length > 0 && (
            <button className="btn btn-danger" onClick={handleBulkDelete} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Trash2 size={16} /> বাছাইকৃত ({selectedIds.length}) মুছুন
            </button>
          )}
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleExport}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Download size={14} /> রপ্তানি
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/students/promote')}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <GraduationCap size={16} /> শ্রেণি উত্তীর্ণ (Promotion)
          </button>
          {canCreateStudent && (
            <button
              className="btn btn-primary"
              onClick={() => navigate('/students/new')}
            >
              <Plus size={16} /> নতুন ছাত্র/ছাত্রী
            </button>
          )}
        </div>
      </div>

      {/* ফিল্টার বার */}
      <div className="card mb-24 filter-card" style={{ padding: '14px 18px' }}>
        <div className="filter-card-content">
          <form onSubmit={handleSearch} className="filter-search-form">
            <div style={{ position: 'relative', flex: 1 }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              />
              <input
                type="text"
                className="form-input"
                placeholder="যেকোনো তথ্য (নাম, রোল, আইডি, মোবাইল, পিতার নাম) দিয়ে খুঁজুন..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: '38px', paddingRight: search ? '36px' : '12px' }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setDebouncedSearch('');
                    setPage(1);
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                  }}
                  title="ক্লিয়ার করুন"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-secondary btn-sm">
              <Search size={14} /> অনুসন্ধান
            </button>
          </form>

          <div className="filter-dropdowns-wrap">
            <select
              className="form-input form-select"
              value={classFilter}
              onChange={(e) => {
                setClassFilter(e.target.value);
                setPage(1);
              }}
              title="শ্রেণি ফিল্টার"
            >
              <option value="">সকল শ্রেণি</option>
              {classes.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>

            <select
              className="form-input form-select"
              value={selectedSectionName}
              onChange={(e) => {
                setSelectedSectionName(e.target.value);
                setPage(1);
              }}
              title="সেকশন ফিল্টার"
            >
              <option value="">সকল সেকশন</option>
              {SECTION_OPTIONS.map((sec, idx) => (
                <option key={idx} value={sec}>{sec}</option>
              ))}
            </select>

            <select
              className="form-input form-select"
              value={branchFilter}
              onChange={(e) => {
                setBranchFilter(e.target.value);
                setPage(1);
              }}
              title="শাখা ফিল্টার"
            >
              <option value="">সকল শাখা</option>
              {branches.filter(b => b.name !== 'হিফজ শাখা').map(b => (
                <option key={b._id} value={b._id}>{b.name}</option>
              ))}
            </select>

            <select
              className="form-input form-select"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              title="স্ট্যাটাস ফিল্টার"
            >
              <option value="">সকল স্ট্যাটাস</option>
              <option value="active">সক্রিয়</option>
              <option value="inactive">নিষ্ক্রিয়</option>
              <option value="graduated">স্নাতক</option>
              <option value="transferred">স্থানান্তরিত</option>
            </select>

            {/* সর্টিং কন্ট্রোল */}
            <div className="sort-controls-wrap">
              <select
                className="form-input form-select"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
                title="সর্ট কলাম নির্বাচন করুন"
              >
                <option value="createdAt">সর্বশেষ ভর্তি (ডিফল্ট)</option>
                <option value="name">নাম অনুযায়ী</option>
                <option value="roll">রোল অনুযায়ী</option>
                <option value="studentId">আইডি অনুযায়ী</option>
                <option value="class">শ্রেণি অনুযায়ী</option>
                <option value="section">সেকশন অনুযায়ী</option>
                <option value="username">ইউজারনেম অনুযায়ী</option>
                <option value="status">স্ট্যাটাস অনুযায়ী</option>
              </select>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSortOrder(o => o === 'asc' ? 'desc' : 'asc');
                  setPage(1);
                }}
                title={sortOrder === 'asc' ? 'আরোহী (Ascending) — ক্লিক করে অবরোহী করুন' : 'অবরোহী (Descending) — ক্লিক করে আরোহী করুন'}
              >
                <span style={{ fontWeight: 700 }}>{sortOrder === 'asc' ? '▲ আরোহী' : '▼ অবরোহী'}</span>
              </button>
            </div>

            {/* সক্রিয় ফিল্টার রিসেট বাটন */}
            {(classFilter || selectedSectionName || branchFilter || statusFilter) && (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setClassFilter('');
                  setSelectedSectionName('');
                  setBranchFilter('');
                  setStatusFilter('');
                  setPage(1);
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

      {/* টেবিল */}
      <div className="card" style={{ padding: 0 }}>
        {loading ? (
          <div className="flex-center" style={{ padding: '60px' }}>
            <div className="spinner"></div>
          </div>
        ) : students.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <GraduationCap size={48} />
            </div>
            <div className="empty-state-title">কোনো ছাত্র/ছাত্রী পাওয়া যায়নি</div>
            <p className="text-muted text-sm mt-4">
              নতুন ছাত্র/ছাত্রী যোগ করতে "নতুন ছাত্র/ছাত্রী" বোতামে ক্লিক করুন
            </p>
          </div>
        ) : (
          <>
            {/* মোবাইল কার্ড ভিউ (< 768px) */}
            <div className="student-mobile-cards">
              {sortedStudents.map((student) => {
                const name = student.user?.fullName ||
                  `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() ||
                  'N/A';
                const enrollment = student.currentEnrollment;
                const st = statusLabels[student.status] || statusLabels.active;
                const studentPhoto = student.photo || student.user?.photo;
                const isSelected = selectedIds.includes(student._id);

                return (
                  <div 
                    key={student._id} 
                    className="student-card-item"
                    style={{
                      background: 'var(--bg-card)',
                      border: isSelected ? '1.5px solid var(--primary-500)' : '1px solid var(--border-color)',
                      borderRadius: '16px',
                      padding: '14px',
                      marginBottom: '12px',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      position: 'relative',
                    }}
                  >
                    {/* টপ সেকশন: চেকবক্স, ছবি, নাম, স্ট্যাটাস */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds(prev => [...prev, student._id]);
                          } else {
                            setSelectedIds(prev => prev.filter(id => id !== student._id));
                          }
                        }}
                        style={{ width: '18px', height: '18px', marginTop: '10px', cursor: 'pointer', flexShrink: 0 }}
                      />

                      {/* ছাত্রের ছবি (ক্লিক করলে বড় হবে) */}
                      <div
                        onClick={() => {
                          if (studentPhoto) {
                            setPreviewStudent({
                              _id: student._id,
                              photo: studentPhoto,
                              name,
                              studentId: student.studentId || student.admissionNumber,
                              rollNumber: enrollment?.rollNumber,
                              className: enrollment?.classLevel?.name,
                              sectionName: enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : ''),
                              status: student.status
                            });
                          }
                        }}
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          flexShrink: 0,
                          cursor: studentPhoto ? 'pointer' : 'default',
                          position: 'relative',
                          background: studentPhoto ? '#1e293b' : getAvatarColor(name),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '1rem',
                          border: studentPhoto ? '2px solid rgba(16, 185, 129, 0.5)' : 'none',
                        }}
                        title={studentPhoto ? 'ছবি বড় করে দেখতে ক্লিক করুন' : name}
                      >
                        {studentPhoto ? (
                          <>
                            <img 
                              src={studentPhoto} 
                              alt={name} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                  e.currentTarget.parentElement.style.background = getAvatarColor(name);
                                  e.currentTarget.parentElement.innerText = name.charAt(0);
                                }
                              }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '2px' }}>
                              <ZoomIn size={10} color="#fff" />
                            </div>
                          </>
                        ) : (
                          name.charAt(0)
                        )}
                      </div>

                      {/* নাম ও আইডি */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px' }}>
                          <h4 
                            style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}
                            onClick={() => navigate(`/students/${student._id}`)}
                          >
                            {name}
                          </h4>
                          <span className={`badge ${st.class}`} style={{ fontSize: '0.7rem', padding: '2px 8px' }}>{st.label}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          <span>আইডি: <strong style={{ color: 'var(--primary-600)' }}>{student.studentId || student.admissionNumber || '—'}</strong></span>
                          {student.user?.username && <span>• @{student.user.username.toLowerCase().replace(/\s+/g, '')}</span>}
                        </div>
                      </div>
                    </div>

                    {/* মিডল সেকশন: শ্রেণি, সেকশন, রোল গ্রিড */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                      background: 'var(--bg-tertiary, #f8fafc)',
                      padding: '8px 10px',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      textAlign: 'center',
                    }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>শ্রেণি</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{enrollment?.classLevel?.name || '—'}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>সেকশন</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : '—')}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>রোল নম্বর</span>
                        <strong style={{ color: 'var(--primary-600)', fontFamily: 'Inter' }}>{enrollment?.rollNumber || '—'}</strong>
                      </div>
                    </div>

                    {/* ভর্তি অডিট ইনফো */}
                    {student.createdByUser && (
                      <div style={{ marginTop: '-2px', marginBottom: '2px' }}>
                        <AuditBadge
                          user={student.createdByUser}
                          date={student.createdAt}
                          variant="compact"
                          label="ভর্তি করিয়েছেন"
                        />
                      </div>
                    )}

                    {/* বটম সেকশন: বড় টাচ-ফ্রেন্ডলি অ্যাকশন বাটনসমূহ */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate(`/students/${student._id}`)}
                        style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px' }}
                      >
                        <Eye size={14} /> বিস্তারিত
                      </button>
                      {canUpdateStudent && (
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => navigate(`/students/${student._id}`, { state: { edit: true } })}
                          style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px' }}
                        >
                          <Edit size={14} /> সম্পাদনা
                        </button>
                      )}
                      {canDeleteStudent && (
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => handleDelete(student._id)}
                          style={{ color: 'var(--danger)', padding: '8px', borderRadius: '8px' }}
                          title="মুছুন"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ডেস্কটপ টেবিল ভিউ (>= 768px) */}
            <div className="desktop-table-view table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '40px', textAlign: 'center' }}>
                      <input 
                        type="checkbox" 
                        checked={sortedStudents.length > 0 && selectedIds.length === sortedStudents.length} 
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedIds(sortedStudents.map(s => s._id));
                          } else {
                            setSelectedIds([]);
                          }
                        }}
                        style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                      />
                    </th>
                    <th style={{ textAlign: 'left', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('name')}>
                      ছাত্র/ছাত্রী <SortIcon col="name" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('studentId')}>
                      আইডি নম্বর <SortIcon col="studentId" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('username')}>
                      ইউজারনেম <SortIcon col="username" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('class')}>
                      শ্রেণি <SortIcon col="class" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('section')}>
                      সেকশন <SortIcon col="section" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('roll')}>
                      রোল <SortIcon col="roll" />
                    </th>
                    <th style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort('status')}>
                      স্ট্যাটাস <SortIcon col="status" />
                    </th>
                    <th style={{ textAlign: 'center' }}>কার্যক্রম</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((student) => {
                    const name = student.user?.fullName ||
                      `${student.user?.firstName || ''} ${student.user?.lastName || ''}`.trim() ||
                      'N/A';
                    const enrollment = student.currentEnrollment;
                    const st = statusLabels[student.status] || statusLabels.active;
                    const studentPhoto = student.photo || student.user?.photo;

                    return (
                      <tr key={student._id}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={selectedIds.includes(student._id)} 
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedIds(prev => [...prev, student._id]);
                              } else {
                                setSelectedIds(prev => prev.filter(id => id !== student._id));
                              }
                            }}
                            style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                          />
                        </td>
                        <td>
                          <div className="flex gap-12" style={{ alignItems: 'center' }}>
                            <div
                              className="student-avatar-wrap"
                              style={{ 
                                background: studentPhoto ? 'transparent' : getAvatarColor(name),
                                cursor: studentPhoto ? 'pointer' : 'default',
                                position: 'relative',
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                border: studentPhoto ? '2px solid rgba(16, 185, 129, 0.45)' : 'none',
                                boxShadow: studentPhoto ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
                                transition: 'all 0.2s ease',
                              }}
                              onClick={() => {
                                if (studentPhoto) {
                                  setPreviewStudent({
                                    _id: student._id,
                                    photo: studentPhoto,
                                    name,
                                    studentId: student.studentId || student.admissionNumber,
                                    rollNumber: enrollment?.rollNumber,
                                    className: enrollment?.classLevel?.name,
                                    sectionName: enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : ''),
                                    status: student.status
                                  });
                                }
                              }}
                              onMouseEnter={(e) => {
                                if (studentPhoto) {
                                  e.currentTarget.style.transform = 'scale(1.1)';
                                  e.currentTarget.style.borderColor = 'var(--primary-500)';
                                  const overlay = e.currentTarget.querySelector('.avatar-zoom-overlay');
                                  if (overlay) overlay.style.opacity = '1';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (studentPhoto) {
                                  e.currentTarget.style.transform = 'scale(1)';
                                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.45)';
                                  const overlay = e.currentTarget.querySelector('.avatar-zoom-overlay');
                                  if (overlay) overlay.style.opacity = '0';
                                }
                              }}
                              title={studentPhoto ? 'ছবি বড় করে দেখতে ক্লিক করুন' : name}
                            >
                              {studentPhoto ? (
                                <>
                                  <img 
                                    src={studentPhoto} 
                                    alt={name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      if (e.currentTarget.parentElement) {
                                        e.currentTarget.parentElement.style.background = getAvatarColor(name);
                                        e.currentTarget.parentElement.innerText = name.charAt(0);
                                      }
                                    }}
                                  />
                                  <div
                                    className="avatar-zoom-overlay"
                                    style={{
                                      position: 'absolute',
                                      inset: 0,
                                      background: 'rgba(0, 0, 0, 0.45)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      opacity: 0,
                                      transition: 'opacity 0.2s ease',
                                      color: '#fff',
                                    }}
                                  >
                                    <ZoomIn size={16} />
                                  </div>
                                </>
                              ) : (
                                name.charAt(0)
                              )}
                            </div>
                            <div>
                              <div 
                                className="font-semibold"
                                style={{ cursor: 'pointer', transition: 'color 0.15s' }}
                                onClick={() => navigate(`/students/${student._id}`)}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-600)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                              >
                                {name}
                              </div>
                              <div className="text-sm text-muted">
                                {student.user?.phone || student.user?.email || ''}
                              </div>
                              {student.createdByUser && (
                                <div style={{ marginTop: '3px' }}>
                                  <AuditBadge
                                    user={student.createdByUser}
                                    variant="compact"
                                    label="ভর্তি"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{ fontFamily: 'Inter', fontWeight: 600, color: 'var(--primary-600)' }}>
                            {student.studentId || student.admissionNumber || '—'}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontFamily: 'Inter', fontWeight: 500, color: 'var(--text-secondary)' }}>
                            {student.user?.username ? student.user.username.toLowerCase().replace(/\s+/g, '') : '—'}
                          </span>
                        </td>
                        <td>{enrollment?.classLevel?.name || '—'}</td>
                        <td>{enrollment?.section?.name || (typeof enrollment?.section === 'string' ? enrollment.section : '—')}</td>
                        <td>
                          <span style={{ fontFamily: 'Inter' }}>
                            {enrollment?.rollNumber || '—'}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${st.class}`}>{st.label}</span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <div className="flex-center gap-8">
                            <button
                              className="btn btn-ghost btn-icon btn-sm"
                              title="বিস্তারিত"
                              onClick={() => navigate(`/students/${student._id}`)}
                              style={{ width: 32, height: 32 }}
                            >
                              <Eye size={15} />
                            </button>
                            {canUpdateStudent && (
                              <button
                                className="btn btn-ghost btn-icon btn-sm"
                                title="সম্পাদনা"
                                onClick={() => navigate(`/students/${student._id}`, { state: { edit: true } })}
                                style={{ width: 32, height: 32 }}
                              >
                                <Edit size={15} />
                              </button>
                            )}
                            {canDeleteStudent && (
                              <button
                                className="btn btn-ghost btn-icon btn-sm"
                                title="মুছুন"
                                onClick={() => handleDelete(student._id)}
                                style={{ width: 32, height: 32, color: 'var(--danger)' }}
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="pagination-container">
              <div>
                {pagination.pages > 1 && (
                  <div className="pagination" style={{ margin: 0, justifyContent: 'flex-start' }}>
                    <button
                      className="pagination-btn"
                      disabled={page <= 1}
                      onClick={() => setPage(page - 1)}
                    >
                      <ChevronRight size={16} />
                    </button>
                    {Array.from({ length: Math.min(pagination.pages, 7) }, (_, i) => {
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
                      disabled={page >= pagination.pages}
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
          </>
        )}
      </div>
      {/* ছবি বড় করে দেখার লাইটবক্স মডাল (Centered Image Modal) */}
      {previewStudent && (
        <div 
          className="modal-overlay" 
          onClick={() => setPreviewStudent(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-secondary, #1e293b)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.2)',
              maxWidth: '460px',
              width: '100%',
              overflow: 'hidden',
              animation: 'zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* হেডার */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              borderBottom: '1px solid var(--border-color, rgba(255, 255, 255, 0.08))',
              background: 'rgba(0, 0, 0, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--success, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Maximize2 size={16} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {previewStudent.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {previewStudent.studentId ? `আইডি: ${previewStudent.studentId}` : ''} 
                    {previewStudent.className ? ` • শ্রেণি: ${previewStudent.className}` : ''}
                    {previewStudent.sectionName ? ` (${previewStudent.sectionName})` : ''}
                    {previewStudent.rollNumber ? ` • রোল: ${previewStudent.rollNumber}` : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPreviewStudent(null)}
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
                src={previewStudent.photo}
                alt={previewStudent.name}
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
                  a.href = previewStudent.photo;
                  a.download = `${previewStudent.name || 'student'}_photo.jpg`;
                  a.click();
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={14} /> ছবি ডাউনলোড
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  navigate(`/students/${previewStudent._id}`);
                  setPreviewStudent(null);
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <ExternalLink size={14} /> সম্পূর্ণ প্রোফাইল দেখুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* রপ্তানি ফিল্টার ও সর্টিং মোডাল */}
      <StudentExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        currentStudents={students}
        totalCount={pagination.total}
        activeFilters={{
          search,
          status: statusFilter,
          classLevel: classFilter,
          branch: branchFilter,
          section: sectionFilter,
        }}
        selectedIds={selectedIds}
        classes={classes}
        branches={branches}
        sections={sections}
        institutionName={getMadrasahInfo(user).madrasahName}
        branchName={getMadrasahInfo(user).branchName}
      />
    </div>
  );
}
