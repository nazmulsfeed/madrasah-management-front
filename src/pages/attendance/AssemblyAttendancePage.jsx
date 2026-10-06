import { useState, useEffect, useMemo } from 'react';
import {
  Users, CheckCircle2, XCircle, Clock, Save, RefreshCw,
  Search, Printer, AlertCircle, Check, Sparkles, Filter,
  Calendar, ChevronDown, CheckCheck, UserX, FileText, User,
  RotateCcw, Sliders, X, ArrowUpDown
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo } from '../../utils/helpers';
import { SECTION_OPTIONS } from '../../utils/constants';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';

// Helper: Convert English/Bengali numerals to standard number for accurate sorting
const parseBnEnNumber = (val) => {
  if (val === null || val === undefined) return null;
  const str = String(val).trim();
  if (!str) return null;
  const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
  const normalized = str.replace(/[০-৯]/g, d => bnToEn[d]);
  const num = parseFloat(normalized.replace(/[^0-9.-]/g, ''));
  return isNaN(num) ? null : num;
};

// Helper: Extract numeric suffix from student IDs like ANG2001, ANB2023005, etc.
function parseCustomId(idStr) {
  if (!idStr) return 999999;
  const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
  const s = String(idStr).trim().toUpperCase().replace(/[০-৯]/g, d => bnToEn[d]);
  // Strip ANG20, ANB20, or other known prefix
  const stripped = s.replace(/^(?:ANG20|ANB20|ANG|ANB)/i, '');
  const match = stripped.match(/(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  const digits = s.replace(/\D/g, '');
  return digits ? parseInt(digits, 10) : 999999;
}

export default function AssemblyAttendancePage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);

  // Helper: Today in BD Timezone
  const getBDTodayStr = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });

  // Filters & State
  const [date, setDate] = useState(getBDTodayStr());
  const [classes, setClasses] = useState([]);
  const [dbSections, setDbSections] = useState([]);
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('roll');
  const [sortOrder, setSortOrder] = useState('asc');

  // Sorting Handler & Header Icon (like StudentListPage)
  const handleSort = (col) => {
    if (sortBy === col) {
      setSortOrder(o => o === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(col);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ col }) => {
    if (sortBy !== col) return <span style={{ opacity: 0.35, fontSize: '0.7rem', marginLeft: '4px' }}>⇅</span>;
    return <span style={{ fontSize: '0.75rem', marginLeft: '4px', color: 'var(--primary)', fontWeight: 800 }}>{sortOrder === 'asc' ? '▲' : '▼'}</span>;
  };

  // Attendance Data
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  // Print Preview & Customization Modal State
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [printSortBy, setPrintSortBy] = useState('id_custom'); // 'roll' | 'id_custom' | 'name'
  const [printColumns, setPrintColumns] = useState({
    serial: true,
    roll: true,
    id: true,
    name: true,
    fatherName: true,
    classSection: true,
    status: true,
    signBox: true,
  });

  const MAX_SIGNATURE_ROLES = 5;
  const DEFAULT_SIGNATURE_ROLES = [
    'শ্রেণী শিক্ষকের স্বাক্ষর',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রতিষ্ঠান প্রধান'
  ];
  const PRESET_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__assembly_attendance');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  const [customRolesList, setCustomRolesList] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_custom_roles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newCustomRole, setNewCustomRole] = useState('');

  const handleToggleSignatureRole = (role) => {
    let next;
    if (selectedSignatureRoles.includes(role)) {
      if (selectedSignatureRoles.length <= 1) {
        showToast('কমপক্ষে ১টি স্বাক্ষর রোল নির্বাচন থাকতে হবে', 'error');
        return;
      }
      next = selectedSignatureRoles.filter(r => r !== role);
    } else {
      if (selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES) {
        showToast(`সর্বোচ্চ ${MAX_SIGNATURE_ROLES}টি স্বাক্ষর রোল নির্বাচন করা যাবে`, 'error');
        return;
      }
      next = [...selectedSignatureRoles, role];
    }
    setSelectedSignatureRoles(next);
    try {
      localStorage.setItem('annur_footer_roles__assembly_attendance', JSON.stringify(next));
    } catch (_) {}
  };

  const handleAddCustomRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newCustomRole.trim();
    if (!trimmed) return;
    if (PRESET_SIGNATURE_ROLES.includes(trimmed) || customRolesList.includes(trimmed)) {
      showToast('এই পদবিটি তালিকায় আগেই আছে', 'error');
      return;
    }
    const nextCustom = [...customRolesList, trimmed];
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.length < MAX_SIGNATURE_ROLES) {
      const nextSelected = [...selectedSignatureRoles, trimmed];
      setSelectedSignatureRoles(nextSelected);
      try {
        localStorage.setItem('annur_footer_roles__assembly_attendance', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomRole('');
  };

  const handleRemoveCustomRole = (role, e) => {
    if (e) e.stopPropagation();
    const nextCustom = customRolesList.filter(r => r !== role);
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}
    if (selectedSignatureRoles.includes(role)) {
      const nextSelected = selectedSignatureRoles.filter(r => r !== role);
      setSelectedSignatureRoles(nextSelected.length > 0 ? nextSelected : DEFAULT_SIGNATURE_ROLES);
    }
  };

  const canManage = ['super_admin', 'co_super_admin', 'admin', 'principal', 'vice_principal', 'teacher', 'hifz_teacher'].includes(user?.userType) ||
    ['co_super_admin', 'admin'].includes(user?.adminRole);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // 1. Fetch Classes & Sections
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const [clsRes, secRes] = await Promise.all([
          api.get('/students/classes').catch(() => ({ data: { data: { classes: [] } } })),
          api.get('/students/sections').catch(() => ({ data: { data: { sections: [] } } })),
        ]);
        if (clsRes.data?.data?.classes) setClasses(clsRes.data.data.classes);
        if (secRes.data?.data?.sections) setDbSections(secRes.data.data.sections);
      } catch (err) {
        console.error('Error fetching classes/sections:', err);
      }
    };
    fetchMetadata();
  }, []);

  // Combine standard SECTION_OPTIONS with database sections for reliable section filtering
  const availableSectionOptions = useMemo(() => {
    const options = [{ value: 'all', label: 'সকল সেকশন' }];
    SECTION_OPTIONS.forEach(sec => {
      options.push({ value: sec, label: `শাখা/সেকশন ${sec}` });
    });
    dbSections.forEach(s => {
      const sName = (s.name || '').trim();
      if (sName && !options.some(o => o.value === s._id || o.value === sName)) {
        options.push({ value: s._id, label: sName });
      }
    });
    return options;
  }, [dbSections]);

  // 2. Fetch Assembly Attendance Records
  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const params = { date };
      if (selectedClass !== 'all') params.classLevel = selectedClass;
      if (selectedSection !== 'all') params.section = selectedSection;

      const res = await api.get('/attendance/assembly', { params });
      if (res.data?.success) {
        setRecords(res.data.data.records || []);
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [date, selectedClass, selectedSection]);

  // Recalculate stats: Present, Absent, Reset/Unmarked
  const currentStats = useMemo(() => {
    const total = records.length;
    let present = 0;
    let absent = 0;
    let resetCount = 0;
    records.forEach(r => {
      if (r.status === 'present') present++;
      else if (r.status === 'absent') absent++;
      else resetCount++;
    });
    const presentRate = total > 0 ? Math.round((present / total) * 100) : 0;
    return { total, present, absent, resetCount, presentRate };
  }, [records]);

  // Filtered Records for Display with Sorting
  const filteredRecords = useMemo(() => {
    let list = [...records];
    if (statusFilter !== 'all') {
      if (statusFilter === 'reset') {
        list = list.filter(r => !r.status || r.status === 'reset');
      } else {
        list = list.filter(r => r.status === statusFilter);
      }
    }
    const cleanSearch = searchQuery.trim();
    const cleanNum = parseBnEnNumber(cleanSearch);
    const isPureNumeric = cleanNum !== null && /^[0-9০-৯\s]+$/.test(cleanSearch);

    if (cleanSearch) {
      const raw = cleanSearch.toLowerCase();
      const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
      const enToBn = { '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯' };
      const enQ = raw.replace(/[০-৯]/g, d => bnToEn[d]);
      const bnQ = raw.replace(/[0-9]/g, d => enToBn[d]);
      const variants = [...new Set([raw, enQ, bnQ])];

      list = list.filter(r => {
        const rollStr = String(r.rollNumber || '').trim();
        const rollNum = parseBnEnNumber(r.rollNumber);
        const codeSuffix = parseCustomId(r.studentCode);
        const codeStr = (r.studentCode || '').toLowerCase();

        if (isPureNumeric) {
          // 1. Exact roll number match
          if (rollNum !== null && rollNum === cleanNum) return true;
          // 2. Exact student ID numeric suffix match (e.g. ANG2034 -> 34)
          if (codeSuffix !== null && codeSuffix === cleanNum) return true;
          // 3. Roll starts with the searched digits (e.g. searching 3 matches 3, 30, 31)
          if (rollStr.startsWith(enQ) || rollStr.startsWith(bnQ)) return true;
          // 4. Exact full ID match
          if (codeStr === enQ || codeStr === bnQ || codeStr === raw) return true;
          return false;
        }

        const name = (r.studentName || '').toLowerCase();
        const fName = (r.fatherName || '').toLowerCase();
        const rollEn = rollStr.replace(/[০-৯]/g, d => bnToEn[d]);
        const rollBn = rollStr.replace(/[0-9]/g, d => enToBn[d]);
        const codeEn = codeStr.replace(/[০-৯]/g, d => bnToEn[d]);
        const codeBn = codeStr.replace(/[0-9]/g, d => enToBn[d]);

        return variants.some(v =>
          name.includes(v) ||
          fName.includes(v) ||
          rollStr.includes(v) ||
          rollEn.includes(v) ||
          rollBn.includes(v) ||
          codeStr.includes(v) ||
          codeEn.includes(v) ||
          codeBn.includes(v)
        );
      });
    }

    if (sortBy || cleanSearch) {
      list.sort((a, b) => {
        // Priority 1: If searching a number (e.g. 34, 29), exact roll match ALWAYS comes FIRST!
        if (cleanSearch && isPureNumeric) {
          const rNumA = parseBnEnNumber(a.rollNumber);
          const rNumB = parseBnEnNumber(b.rollNumber);
          const idSuffA = parseCustomId(a.studentCode);
          const idSuffB = parseCustomId(b.studentCode);

          let rankA = 99;
          let rankB = 99;

          if (rNumA === cleanNum) rankA = 0; // Exact roll match -> #1
          else if (idSuffA === cleanNum) rankA = 1; // Exact student ID suffix match -> #2
          else rankA = 2; // Other (e.g. prefix)

          if (rNumB === cleanNum) rankB = 0;
          else if (idSuffB === cleanNum) rankB = 1;
          else rankB = 2;

          if (rankA !== rankB) return rankA - rankB;
        }

        let cmp = 0;
        if (sortBy === 'roll') {
          const rA = parseBnEnNumber(a.rollNumber);
          const rB = parseBnEnNumber(b.rollNumber);
          if (rA !== null && rB !== null) cmp = rA - rB;
          else if (rA !== null) cmp = -1;
          else if (rB !== null) cmp = 1;
          else cmp = String(a.rollNumber || '').localeCompare(String(b.rollNumber || ''), 'bn');
        } else if (sortBy === 'studentId') {
          const numA = parseCustomId(a.studentCode);
          const numB = parseCustomId(b.studentCode);
          if (numA !== numB) cmp = numA - numB;
          else cmp = String(a.studentCode || '').localeCompare(String(b.studentCode || ''));
        } else if (sortBy === 'name') {
          cmp = (a.studentName || '').localeCompare(b.studentName || '', 'bn', { sensitivity: 'base' });
        } else if (sortBy === 'fatherName') {
          cmp = (a.fatherName || '').localeCompare(b.fatherName || '', 'bn', { sensitivity: 'base' });
        } else if (sortBy === 'status') {
          const priority = { present: 1, absent: 2, reset: 3, '': 3 };
          const pA = priority[a.status] || 3;
          const pB = priority[b.status] || 3;
          cmp = pA - pB;
        }
        return sortOrder === 'asc' ? cmp : -cmp;
      });
    }

    return list;
  }, [records, statusFilter, searchQuery, sortBy, sortOrder]);

  // Individual Status Change (Present, Absent, Reset)
  const handleStatusChange = (studentId, newStatus) => {
    setRecords(prev => prev.map(item => {
      if (item.studentId === studentId) {
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  // Bulk Status Change
  const handleMarkAll = (targetStatus) => {
    setRecords(prev => prev.map(item => ({ ...item, status: targetStatus })));
    const label = targetStatus === 'present' ? 'উপস্থিত' : targetStatus === 'absent' ? 'অনুপস্থিত' : 'রিসেট';
    showToast(`সকল শিক্ষার্থীকে "${label}" করা হয়েছে`);
  };

  // Remarks / InTime Change
  const handleFieldChange = (studentId, field, value) => {
    setRecords(prev => prev.map(item => {
      if (item.studentId === studentId) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  // Save Assembly Attendance
  const handleSave = async () => {
    if (!canManage) return;
    try {
      setSaving(true);
      const payload = {
        date,
        classLevel: selectedClass !== 'all' ? selectedClass : '',
        section: selectedSection !== 'all' ? selectedSection : '',
        attendances: records.map(r => ({
          studentId: r.studentId,
          classLevelId: r.classLevelId,
          sectionId: r.sectionId,
          branch: r.branch,
          status: r.status,
          inTime: r.inTime,
          remarks: r.remarks,
        })),
      };

      const res = await api.post('/attendance/assembly', payload);
      if (res.data?.success) {
        showToast(res.data.message || 'সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে');
        fetchAttendance();
      }
    } catch (err) {
      showToast(err.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSaving(false);
    }
  };

  // ────────────────────────────────────────────────────────────
  // প্রিন্ট ও PDF উইন্ডো তৈরি (With Custom Columns & Sorter)
  // ────────────────────────────────────────────────────────────
  const executePrint = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।');
      return;
    }

    // Sort records based on user choice
    let sortedList = [...records];
    if (printSortBy === 'id_custom') {
      // Sort by ID suffix (ANG20* / ANB20* parsed numeric suffix)
      sortedList.sort((a, b) => {
        const numA = parseCustomId(a.studentCode);
        const numB = parseCustomId(b.studentCode);
        if (numA !== numB) return numA - numB;
        return (a.studentCode || '').localeCompare(b.studentCode || '');
      });
    } else if (printSortBy === 'roll') {
      // Sort by roll number
      sortedList.sort((a, b) => {
        const rA = parseBnEnNumber(a.rollNumber);
        const rB = parseBnEnNumber(b.rollNumber);
        if (rA !== null && rB !== null) return rA - rB;
        if (rA !== null) return -1;
        if (rB !== null) return 1;
        return String(a.rollNumber || '').localeCompare(String(b.rollNumber || ''), 'bn');
      });
    } else if (printSortBy === 'name') {
      // Sort alphabetically by name
      sortedList.sort((a, b) => (a.studentName || '').localeCompare(b.studentName || '', 'bn'));
    }

    const formattedDate = new Date(date).toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    const selectedClassDoc = classes.find(c => c._id === selectedClass);
    const classNameStr = selectedClass === 'all' ? 'সকল শ্রেণি' : (selectedClassDoc?.name || selectedClass);

    const selectedSecDoc = availableSectionOptions.find(s => s.value === selectedSection);
    const sectionNameStr = selectedSecDoc?.label || 'সকল সেকশন';

    // Build Table Headers dynamically based on checked columns
    let thHtml = '';
    if (printColumns.serial) thHtml += `<th style="width: 32px; text-align: center;">#</th>`;
    if (printColumns.roll) thHtml += `<th style="width: 45px; text-align: center;">রোল</th>`;
    if (printColumns.id) thHtml += `<th style="width: 80px; text-align: center;">আইডি</th>`;
    if (printColumns.name) thHtml += `<th style="min-width: 140px;">শিক্ষার্থীর নাম</th>`;
    if (printColumns.fatherName) thHtml += `<th style="min-width: 130px;">পিতার নাম</th>`;
    if (printColumns.classSection) thHtml += `<th style="width: 90px; text-align: center;">শ্রেণি (সেকশন)</th>`;
    if (printColumns.status) thHtml += `<th style="width: 75px; text-align: center;">সমাবেশ স্ট্যাটাস</th>`;
    if (printColumns.signBox) thHtml += `<th style="width: 110px; text-align: center;">স্বাক্ষর বক্স</th>`;
    if (printColumns.remarks) thHtml += `<th style="width: 90px;">মন্তব্য</th>`;

    // Build Table Rows dynamically based on checked columns
    let rowsHtml = '';
    sortedList.forEach((r, idx) => {
      const isPresent = r.status === 'present';
      const isAbsent = r.status === 'absent';
      const statusColor = isPresent ? '#15803d' : isAbsent ? '#b91c1c' : '#64748b';
      const statusBg = isPresent ? '#dcfce7' : isAbsent ? '#fee2e2' : '#f1f5f9';
      const statusText = isPresent ? 'উপস্থিত' : isAbsent ? 'অনুপস্থিত' : '—';

      rowsHtml += `<tr>`;
      if (printColumns.serial) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px;">${idx + 1}</td>`;
      if (printColumns.roll) rowsHtml += `<td style="text-align: center; font-family: monospace; font-weight: bold; font-size: 12px;">${r.rollNumber || '—'}</td>`;
      if (printColumns.id) rowsHtml += `<td style="text-align: center; font-family: monospace; font-size: 11px; color: #475569;">${r.studentCode || '—'}</td>`;
      if (printColumns.name) rowsHtml += `<td style="font-weight: 700; font-size: 12px; color: #0f172a;">${r.studentName}</td>`;
      if (printColumns.fatherName) rowsHtml += `<td style="font-size: 11.5px; color: #1e293b; font-weight: 500;">${r.fatherName || '—'}</td>`;
      if (printColumns.classSection) rowsHtml += `<td style="text-align: center; font-size: 11px;">${r.className || '—'}${r.sectionName && r.sectionName !== '—' ? ` (${r.sectionName})` : ''}</td>`;
      if (printColumns.status) {
        rowsHtml += `
          <td style="text-align: center;">
            <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10.5px; font-weight: bold; color: ${statusColor}; background: ${statusBg}; border: 1px solid ${statusColor};">
              ${statusText}
            </span>
          </td>
        `;
      }
      if (printColumns.signBox) {
        rowsHtml += `
          <td style="width: 110px; height: 30px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle;">
            <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
          </td>
        `;
      }
      if (printColumns.remarks) rowsHtml += `<td style="font-size: 10.5px; color: #475569;">${r.remarks || ''}</td>`;
      rowsHtml += `</tr>`;
    });

    const sortLabelStr = printSortBy === 'id_custom' ? 'আইডি ক্রমানুসারে (ANG20*/ANB20*)' : printSortBy === 'roll' ? 'রোল ক্রমানুসারে' : 'নামের ক্রমানুসারে';

    const html = `<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${madrasahName}</title>
      ${getMadrasahPrintStyles('landscape')}
      <style>
        .print-box { max-width: 100%; margin: 0 auto; }
        .stat-badges { display: flex; justify-content: center; gap: 12px; margin-top: 8px; font-size: 11px; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin-top: 14px; }
        th { background: #0f766e; color: #fff; font-size: 11.5px; font-weight: 700; padding: 7px 6px; text-align: left; }
        td { padding: 6px; border-bottom: 1px solid #e2e8f0; font-size: 11.5px; }
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
            title: '📋 দৈনিক সমাবেশ ও শৃঙ্খলা উপস্থিতি বিবরণী (Assembly Attendance Sheet)',
            orientation: 'landscape',
            metaLeft: `<strong>তারিখ:</strong> ${formattedDate} | <strong>শ্রেণি:</strong> ${classNameStr} | <strong>সেকশন:</strong> ${sectionNameStr}`,
            metaRight: `<strong>মোট শিক্ষার্থী:</strong> ${currentStats.total} জন (উপস্থিত: ${currentStats.present}, হার: ${currentStats.presentRate}%)`
          })}

          <div class="stat-badges">
            <span style="color: #15803d; background: #dcfce7; padding: 2px 10px; border-radius: 4px;">উপস্থিত: ${currentStats.present} জন</span>
            <span style="color: #b91c1c; background: #fee2e2; padding: 2px 10px; border-radius: 4px;">অনুপস্থিত: ${currentStats.absent} জন</span>
            <span style="color: #475569; background: #f1f5f9; padding: 2px 10px; border-radius: 4px;">অনির্ধারিত/রিসেট: ${currentStats.resetCount} জন</span>
            <span style="color: #0f766e; background: #ccfbf1; padding: 2px 10px; border-radius: 4px;">উপস্থিতির হার: ${currentStats.presentRate}%</span>
          </div>

        <table>
          <thead>
            <tr>${thHtml}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
        </div>
      </div>
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 250);
        };
      </script>
    </body>
    </html>`;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    setIsPrintModalOpen(false);
  };

  return (
    <div className="page-container animate-fade-in">
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999,
          background: toast.type === 'error' ? 'var(--danger)' : 'var(--success)',
          color: '#fff', padding: '12px 20px', borderRadius: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)', fontSize: '0.9rem',
          display: 'flex', alignItems: 'center', gap: '8px', animation: 'fadeIn 0.3s ease',
          maxWidth: '380px',
        }}>
          {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title flex-center gap-8">
            <Users className="text-primary" size={26} />
            সমাবেশ উপস্থিতি (Assembly Attendance)
          </h1>
          <p className="page-subtitle">শাখা: {branchName} · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button className="btn btn-outline btn-sm flex-center gap-6" onClick={fetchAttendance} title="রিফ্রেশ">
            <RefreshCw size={15} />
          </button>
          <button
            className="btn btn-secondary btn-sm flex-center gap-6"
            onClick={() => setIsPrintModalOpen(true)}
            disabled={records.length === 0}
            title="সমাবেশ রিপোর্ট PDF"
            style={{ background: '#f8fafc', borderColor: 'var(--border-color)', color: '#0f766e', fontWeight: 600 }}
          >
            <Printer size={16} /> সমাবেশ রিপোর্ট PDF
          </button>
          {canManage && (
            <button
              className="btn btn-primary btn-sm flex-center gap-6"
              onClick={handleSave}
              disabled={saving || records.length === 0}
            >
              {saving ? <RefreshCw size={15} className="spin" /> : <Save size={15} />}
              হাজিরা সংরক্ষণ করুন
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4" style={{ gap: '14px', marginBottom: '16px' }}>
        {[
          { label: 'মোট শিক্ষার্থী', value: currentStats.total, unit: 'জন', color: 'var(--primary)', bg: 'rgba(99,102,241,0.1)', Icon: Users },
          { label: 'সমাবেশে উপস্থিত', value: currentStats.present, unit: 'জন', color: 'var(--success)', bg: 'rgba(16,185,129,0.1)', Icon: CheckCircle2 },
          { label: 'অনুপস্থিত', value: currentStats.absent, unit: 'জন', color: 'var(--danger)', bg: 'rgba(239,68,68,0.1)', Icon: XCircle },
          { label: 'উপস্থিতির হার', value: `${currentStats.presentRate}%`, color: '#0284c7', bg: 'rgba(2,132,199,0.1)', Icon: Sparkles },
        ].map(({ label, value, unit, color, bg, Icon }) => (
          <div key={label} className="card" style={{ padding: '12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div className="text-xs text-muted mb-4">{label}</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color, fontFamily: 'monospace' }}>
                  {value}{unit && <span style={{ fontSize: '0.82rem', marginLeft: '2px' }}>{unit}</span>}
                </div>
              </div>
              <div style={{ background: bg, borderRadius: '10px', padding: '9px' }}>
                <Icon size={20} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── COMPACT Filter Bar (One Row Sleek Toolbar) ── */}
      <div className="card" style={{ padding: '8px 12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* 1. Date Picker */}
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="form-input"
            style={{ width: '135px', height: '34px', fontSize: '0.82rem', padding: '4px 8px' }}
          />

          {/* 2. Class Filter */}
          <select
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
            className="form-input"
            style={{ width: '140px', height: '34px', fontSize: '0.82rem', padding: '4px 8px' }}
          >
            <option value="all">সকল শ্রেণি</option>
            {classes.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>

          {/* 3. Section Filter (Properly combined with standard A, B, ক, খ) */}
          <select
            value={selectedSection}
            onChange={e => setSelectedSection(e.target.value)}
            className="form-input"
            style={{ width: '130px', height: '34px', fontSize: '0.82rem', padding: '4px 8px' }}
          >
            {availableSectionOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          {/* 4. Search Bar (Compact) */}
          <div style={{ position: 'relative', width: '160px', flexShrink: 0 }}>
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="নাম, পিতা বা রোল..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '30px', height: '34px', fontSize: '0.82rem', width: '100%' }}
            />
          </div>

          {/* 5. Status Quick Filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="form-input"
            style={{ width: '115px', height: '34px', fontSize: '0.82rem', padding: '4px 8px' }}
          >
            <option value="all">সকল স্ট্যাটাস</option>
            <option value="present">উপস্থিত</option>
            <option value="absent">অনুপস্থিত</option>
            <option value="reset">রিসেট/খালি</option>
          </select>

          {/* 6. Sorting Controls (Like StudentListPage) */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="form-input"
              style={{ width: '125px', height: '34px', fontSize: '0.82rem', padding: '4px 8px' }}
              title="সর্ট কলাম নির্বাচন করুন"
            >
              <option value="roll">রোল অনুযায়ী</option>
              <option value="studentId">আইডি অনুযায়ী</option>
              <option value="name">নাম অনুযায়ী</option>
              <option value="fatherName">পিতার নাম অনুযায়ী</option>
              <option value="status">স্ট্যাটাস অনুযায়ী</option>
            </select>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              style={{ height: '34px', padding: '0 8px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
              onClick={() => setSortOrder(o => o === 'asc' ? 'desc' : 'asc')}
              title={sortOrder === 'asc' ? 'আরোহী (Ascending) — ক্লিক করে অবরোহী করুন' : 'অবরোহী (Descending) — ক্লিক করে আরোহী করুন'}
            >
              <span style={{ fontWeight: 700 }}>{sortOrder === 'asc' ? '▲ আরোহী' : '▼ অবরোহী'}</span>
            </button>
          </div>

          {/* Quick Mark All Buttons */}
          {canManage && (
            <div style={{ display: 'flex', gap: '5px', marginLeft: 'auto' }}>
              <button
                type="button"
                onClick={() => handleMarkAll('present')}
                className="btn btn-outline btn-xs flex-center gap-4"
                style={{ color: 'var(--success)', borderColor: 'rgba(16,185,129,0.3)', padding: '5px 8px', fontSize: '0.75rem' }}
                title="সবাই উপস্থিত"
              >
                <CheckCheck size={12} /> সবাই উপস্থিত
              </button>
              <button
                type="button"
                onClick={() => handleMarkAll('absent')}
                className="btn btn-outline btn-xs flex-center gap-4"
                style={{ color: 'var(--danger)', borderColor: 'rgba(239,68,68,0.3)', padding: '5px 8px', fontSize: '0.75rem' }}
                title="সবাই অনুপস্থিত"
              >
                <UserX size={12} /> সবাই অনুপস্থিত
              </button>
              <button
                type="button"
                onClick={() => handleMarkAll('')}
                className="btn btn-ghost btn-xs flex-center gap-4"
                style={{ padding: '5px 8px', fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
                title="সবাই রিসেট"
              >
                <RotateCcw size={12} /> রিসেট
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex-center" style={{ height: '35vh' }}>
          <RefreshCw className="spin text-primary" size={32} />
        </div>
      ) : (
        <div className="card table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th
                  onClick={() => handleSort('roll')}
                  style={{ width: '65px', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}
                  title="রোল অনুযায়ী সাজাতে ক্লিক করুন"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    রোল <SortIcon col="roll" />
                  </span>
                </th>
                <th
                  onClick={() => handleSort('studentId')}
                  style={{ width: '105px', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}
                  title="আইডি অনুযায়ী সাজাতে ক্লিক করুন"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    আইডি <SortIcon col="studentId" />
                  </span>
                </th>
                <th
                  onClick={() => handleSort('name')}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                  title="শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    শিক্ষার্থীর নাম <SortIcon col="name" />
                  </span>
                </th>
                <th
                  onClick={() => handleSort('fatherName')}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                  title="পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    পিতার নাম (Father's Name) <SortIcon col="fatherName" />
                  </span>
                </th>
                <th style={{ textAlign: 'center' }}>শ্রেণি ও সেকশন</th>
                <th
                  onClick={() => handleSort('status')}
                  style={{ width: '220px', textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}
                  title="সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন"
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    সমাবেশ স্ট্যাটাস <SortIcon col="status" />
                  </span>
                </th>
                <th style={{ width: '150px' }}>মন্তব্য</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length > 0 ? (
                filteredRecords.map((r) => {
                  return (
                    <tr key={r.studentId}>
                      <td style={{ textAlign: 'center', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.95rem', color: 'var(--primary)' }}>
                        {r.rollNumber ? r.rollNumber : '—'}
                      </td>
                      <td style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {r.studentCode || '—'}
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{r.studentName}</div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {r.fatherName || '—'}
                        </div>
                      </td>
                      <td style={{ textAlign: 'center', fontSize: '0.85rem' }}>
                        {r.className}
                        {r.sectionName && r.sectionName !== '—' && (
                          <span className="text-muted" style={{ fontSize: '0.78rem', marginLeft: '4px' }}>
                            ({r.sectionName})
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                          {/* Present Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.studentId, 'present')}
                            style={{
                              padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer',
                              background: r.status === 'present' ? 'var(--success)' : 'transparent',
                              color: r.status === 'present' ? '#fff' : 'var(--text-secondary)',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            উপস্থিত
                          </button>
                          {/* Absent Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.studentId, 'absent')}
                            style={{
                              padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer',
                              borderLeft: '1px solid var(--border-color)',
                              borderRight: '1px solid var(--border-color)',
                              background: r.status === 'absent' ? 'var(--danger)' : 'transparent',
                              color: r.status === 'absent' ? '#fff' : 'var(--text-secondary)',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            অনুপস্থিত
                          </button>
                          {/* Reset Button */}
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.studentId, '')}
                            style={{
                              padding: '5px 12px', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer',
                              background: (!r.status || r.status === 'reset') ? 'var(--bg-tertiary)' : 'transparent',
                              color: (!r.status || r.status === 'reset') ? 'var(--text-primary)' : 'var(--text-muted)',
                              transition: 'all 0.15s ease',
                            }}
                            title="রিসেট করুন"
                          >
                            রিসেট
                          </button>
                        </div>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={r.remarks || ''}
                          onChange={e => handleFieldChange(r.studentId, 'remarks', e.target.value)}
                          placeholder="মন্তব্য..."
                          className="form-input"
                          style={{ height: '32px', fontSize: '0.8rem', padding: '4px 8px' }}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '36px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <Users size={36} color="var(--border-color)" />
                      <span>এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* ── MODAL: প্রিন্ট ও PDF কাস্টমাইজেশন মডাল ── */}
      {isPrintModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px', animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '520px', padding: '22px', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setIsPrintModalOpen(false)}
              style={{ position: 'absolute', top: '14px', right: '14px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 4px', color: '#0f766e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={20} />
                সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন
              </p>
            </div>

            {/* Sorter Selection */}
            <div style={{ marginBottom: '16px' }}>
              <label className="text-xs font-semibold mb-6" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                <ArrowUpDown size={14} color="var(--primary)" />
                সর্টিং পদ্ধতি (Sort Order):
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                {[
                  { id: 'id_custom', label: 'স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)' },
                  { id: 'roll', label: 'রোল নম্বর ক্রমানুসারে (১, ২, ৩...)' },
                  { id: 'name', label: 'শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)' },
                ].map(opt => (
                  <label
                    key={opt.id}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                      borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem',
                      background: printSortBy === opt.id ? 'rgba(99,102,241,0.08)' : 'var(--bg-tertiary)',
                      border: printSortBy === opt.id ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                      fontWeight: printSortBy === opt.id ? 600 : 400,
                    }}
                  >
                    <input
                      type="radio"
                      name="printSort"
                      checked={printSortBy === opt.id}
                      onChange={() => setPrintSortBy(opt.id)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Column Selection */}
            <div style={{ marginBottom: '18px' }}>
              <label className="text-xs font-semibold mb-6" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                <Sliders size={14} color="#0f766e" />
                প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {[
                  { key: 'serial', label: 'ক্রমিক নং (#)' },
                  { key: 'roll', label: 'রোল নম্বর' },
                  { key: 'id', label: 'স্টুডেন্ট আইডি' },
                  { key: 'name', label: 'শিক্ষার্থীর নাম' },
                  { key: 'fatherName', label: 'পিতার নাম' },
                  { key: 'classSection', label: 'শ্রেণি ও সেকশন' },
                  { key: 'status', label: 'সমাবেশ স্ট্যাটাস' },
                  { key: 'signBox', label: 'স্বাক্ষর বক্স (Sign)' },
                  { key: 'remarks', label: 'মন্তব্য' },
                ].map(col => (
                  <label
                    key={col.key}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem',
                      padding: '6px 10px', borderRadius: '6px', cursor: 'pointer',
                      background: printColumns[col.key] ? 'rgba(16,185,129,0.08)' : 'transparent',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={printColumns[col.key]}
                      onChange={e => setPrintColumns({ ...printColumns, [col.key]: e.target.checked })}
                    />
                    <span>{col.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Footer Signature Roles Selection */}
            <PrintSignatureRoleSelector
              selectedRoles={selectedSignatureRoles}
              onChange={(roles) => {
                setSelectedSignatureRoles(roles);
                try {
                  localStorage.setItem('annur_footer_roles__assembly_attendance', JSON.stringify(roles));
                } catch (_) {}
              }}
              additionalRoles={customRolesList}
              style={{ marginBottom: '18px' }}
            />


            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '6px' }}>
              <button
                type="button"
                onClick={() => setIsPrintModalOpen(false)}
                className="btn btn-outline btn-sm"
              >
                বাতিল
              </button>
              <button
                type="button"
                onClick={executePrint}
                className="btn btn-primary btn-sm flex-center gap-6"
                style={{ background: '#0f766e', borderColor: '#0f766e' }}
              >
                <Printer size={15} /> প্রিন্ট / PDF ডাউনলোড
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
