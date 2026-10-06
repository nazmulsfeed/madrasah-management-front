import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Download,
  FileSpreadsheet,
  FileText,
  ArrowUp,
  ArrowDown,
  Trash2,
  Printer,
  Loader2,
  CheckSquare,
  Square,
  Plus,
  ChevronDown,
  Filter,
  Check,
  ListFilter,
  SlidersHorizontal,
  MoveUp,
  MoveDown
} from 'lucide-react';
import api from '../../api/axios';
import { getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../common/PrintSignatureRoleSelector';

// ভর্তির সময়কার সকল সম্ভাব্য কলামের তালিকা
const ALL_STUDENT_COLUMNS = [
  { id: 'roll', label: 'রোল নম্বর', category: 'একাডেমিক', defaultChecked: true },
  { id: 'photo', label: 'ছবি', category: 'ব্যক্তিগত', defaultChecked: true },
  { id: 'name', label: 'শিক্ষার্থীর নাম (বাংলা)', category: 'সাধারণ', defaultChecked: true },
  { id: 'nameEn', label: 'শিক্ষার্থীর নাম (ইংরেজি)', category: 'সাধারণ', defaultChecked: false },
  { id: 'studentId', label: 'ছাত্র আইডি', category: 'সাধারণ', defaultChecked: true },
  { id: 'className', label: 'শ্রেণি', category: 'একাডেমিক', defaultChecked: true },
  { id: 'sectionName', label: 'শাখা / সেকশন', category: 'একাডেমিক', defaultChecked: true },
  { id: 'branchName', label: 'শাখা (Branch)', category: 'একাডেমিক', defaultChecked: true },
  { id: 'fatherName', label: 'পিতার নাম', category: 'অভিভাবক', defaultChecked: true },
  { id: 'motherName', label: 'মাতার নাম', category: 'অভিভাবক', defaultChecked: false },
  { id: 'phone', label: 'অভিভাবকের ফোন নম্বর', category: 'অভিভাবক', defaultChecked: true },
  { id: 'guardianName', label: 'অভিভাবকের নাম', category: 'অভিভাবক', defaultChecked: false },
  { id: 'dateOfBirth', label: 'জন্ম তারিখ', category: 'ব্যক্তিগত', defaultChecked: false },
  { id: 'nid', label: 'জন্ম নিবন্ধন / এনআইডি', category: 'ব্যক্তিগত', defaultChecked: false },
  { id: 'gender', label: 'লিঙ্গ', category: 'ব্যক্তিগত', defaultChecked: false },
  { id: 'bloodGroup', label: 'রক্তের গ্রুপ', category: 'ব্যক্তিগত', defaultChecked: false },
  { id: 'village', label: 'ঠিকানা / গ্রাম', category: 'ব্যক্তিগত', defaultChecked: false },
  { id: 'department', label: 'শিক্ষা বিভাগ / স্ট্রিম', category: 'একাডেমিক', defaultChecked: false },
  { id: 'hifzProgramType', label: 'হিফজ প্রোগ্রামের ধরন', category: 'একাডেমিক', defaultChecked: false },
  { id: 'residentialStatus', label: 'আবাসিক অবস্থা', category: 'একাডেমিক', defaultChecked: false },
  { id: 'admissionDate', label: 'ভর্তির তারিখ', category: 'একাডেমিক', defaultChecked: false },
  { id: 'status', label: 'স্ট্যাটাস', category: 'একাডেমিক', defaultChecked: false },
];

// ইউজারের দেওয়া ডিফল্ট কি-ওয়ার্ড ক্রম
const USER_DEFAULT_CLASS_KEYWORDS = [
  'প্লে',
  'নার্সারী',
  'তৃতীয়',
  'প্রথম',
  'কেজি',
  'শিশু',
  'দ্বিতীয়',
  'চতুর্থ',
  'পঞ্চম',
  'ষষ্ঠ',
  'সপ্তম',
  'অষ্টম',
  'নবম',
  'দশম',
  'হিফজ',
];

const statusLabels = {
  active: 'সক্রিয়',
  inactive: 'নিষ্ক্রিয়',
  graduated: 'স্নাতক',
  transferred: 'স্থানান্তরিত',
  suspended: 'স্থগিত',
};

// বাংলা সংখ্যাকে গাণিতিক মানে রূপান্তর (সঠিক সর্টিংয়ের জন্য)
const parseNumberVal = (val) => {
  if (val === null || val === undefined || val === '') return 999999;
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  let str = String(val).trim();
  bnDigits.forEach((d, i) => {
    str = str.replaceAll(d, String(i));
  });
  const num = parseInt(str.replace(/[^0-9]/g, ''), 10);
  return isNaN(num) ? 999999 : num;
};

// Helper: Extract numeric suffix from student IDs like ANG2001, ANB2023005, etc.
const parseCustomId = (idStr) => {
  if (!idStr) return 999999;
  const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
  const s = String(idStr).trim().toUpperCase().replace(/[০-৯]/g, d => bnToEn[d]);
  const stripped = s.replace(/^(?:ANG20|ANB20|ANG|ANB)/i, '');
  const match = stripped.match(/(\d+)/);
  if (match) return parseInt(match[1], 10);
  const digits = s.replace(/\D/g, '');
  return digits ? parseInt(digits, 10) : 999999;
};

export default function StudentExportModal({
  isOpen,
  onClose,
  currentStudents = [],
  totalCount = 0,
  activeFilters = {},
  selectedIds = [],
  classes = [],
  branches = [],
  sections = [],
  institutionName,
  branchName,
}) {
  const madrasahInfo = getMadrasahInfo();
  const effectiveInstName = institutionName || madrasahInfo.madrasahName;
  const effectiveBranchName = branchName || madrasahInfo.branchName;
  // ১. ফিল্টার স্টেট (ছবির মতো ৩টি ড্রপডাউন)
  const [filterClass, setFilterClass] = useState(activeFilters.classLevel || '');
  const [filterSection, setFilterSection] = useState(activeFilters.section || '');
  const [filterBranch, setFilterBranch] = useState(activeFilters.branch || '');

  // ডাটার পরিধি: 'all' | 'page' | 'selected'
  const [dataScope, setDataScope] = useState('all');

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__student_export');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  // ২. কলাম নির্বাচন স্টেট (টিক লিস্ট)
  const [selectedColumns, setSelectedColumns] = useState(() => {
    const init = {};
    ALL_STUDENT_COLUMNS.forEach(c => {
      init[c.id] = c.defaultChecked;
    });
    return init;
  });

  // নির্বাচিত কলামগুলোর তালিকা
  const checkedColumnsList = useMemo(() => {
    return ALL_STUDENT_COLUMNS.filter(c => selectedColumns[c.id]);
  }, [selectedColumns]);

  // ৩. সর্ট কলাম স্টেট (শুধু টিক দেওয়া কলামগুলোর মধ্য থেকে)
  const [sortColumn, setSortColumn] = useState('className');
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'
  const [secondarySort, setSecondarySort] = useState('roll');

  // কি-ওয়ার্ড অগ্রাধিকার তালিকা
  const [keywords, setKeywords] = useState(USER_DEFAULT_CLASS_KEYWORDS);
  const [newKeywordInput, setNewKeywordInput] = useState('');
  const [showKeywordEditor, setShowKeywordEditor] = useState(false);
  const [keywordTextarea, setKeywordTextarea] = useState(USER_DEFAULT_CLASS_KEYWORDS.join('\n'));

  // ৪. এক্সপোর্ট ফরম্যাট: 'pdf' | 'csv'
  const [exportFormat, setExportFormat] = useState('pdf');
  const [pdfOrientation, setPdfOrientation] = useState('portrait'); // 'portrait' | 'landscape'

  // লোডিং ও প্রসেসিং স্টেট
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [filteredCount, setFilteredCount] = useState(totalCount || currentStudents.length);

  // সিঙ্ক: যদি বর্তমান sortColumn আনচেক হয়ে যায়, তবে প্রথম টিক দেওয়া কলামটি বাছাই করা
  useEffect(() => {
    if (checkedColumnsList.length > 0) {
      const exists = checkedColumnsList.some(c => c.id === sortColumn);
      if (!exists) {
        setSortColumn(checkedColumnsList[0].id);
      }
    }
  }, [checkedColumnsList, sortColumn]);

  // সিঙ্ক: কি-ওয়ার্ড টেক্সটরিয়া
  useEffect(() => {
    setKeywordTextarea(keywords.join('\n'));
  }, [keywords]);

  // ফিল্টার পরিবর্তনের সাথে সাথে লাইভ সংখ্যা প্রিভিউ ফেচ করা
  useEffect(() => {
    let isCancelled = false;
    const updatePreviewCount = async () => {
      try {
        const params = { limit: 1, page: 1 };
        if (filterClass) params.classLevel = filterClass;
        if (filterBranch) params.branch = filterBranch;
        if (filterSection) {
          if (filterSection.includes(',')) params.sections = filterSection;
          else params.section = filterSection;
        }
        const res = await api.get('/students', { params });
        if (!isCancelled && res.data?.pagination?.total !== undefined) {
          setFilteredCount(res.data.pagination.total);
        }
      } catch (_) {}
    };
    if (isOpen) {
      updatePreviewCount();
    }
    return () => { isCancelled = true; };
  }, [filterClass, filterSection, filterBranch, isOpen]);

  if (!isOpen) return null;

  // কলাম টগল ফাংশন
  const toggleColumn = (id) => {
    setSelectedColumns(prev => {
      const next = { ...prev, [id]: !prev[id] };
      // কমপক্ষে একটি কলাম টিক থাকা বাধ্যতামূলক
      const hasAny = Object.values(next).some(Boolean);
      return hasAny ? next : prev;
    });
  };

  const selectAllColumns = (val) => {
    const next = {};
    ALL_STUDENT_COLUMNS.forEach(c => {
      next[c.id] = val;
    });
    // যদি সব বাতিল করতে চায়, অন্তত প্রথমটি সিলেক্ট রাখবে
    if (!val && ALL_STUDENT_COLUMNS.length > 0) {
      next[ALL_STUDENT_COLUMNS[0].id] = true;
    }
    setSelectedColumns(next);
  };

  // কি-ওয়ার্ড নড়াচড়া
  const moveKeyword = (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= keywords.length) return;
    const next = [...keywords];
    const temp = next[index];
    next[index] = next[target];
    next[target] = temp;
    setKeywords(next);
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const addKeyword = () => {
    const trimmed = newKeywordInput.trim();
    if (!trimmed) return;
    if (!keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
    }
    setNewKeywordInput('');
  };

  const applyTextareaKeywords = () => {
    const lines = keywordTextarea
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);
    const unique = [...new Set(lines)];
    setKeywords(unique);
    setShowKeywordEditor(false);
  };

  // সম্পূর্ণ ফিল্টারকৃত ডাটা লোড করা
  const fetchExportData = async () => {
    const params = { limit: 10000, page: 1 };
    if (filterClass) params.classLevel = filterClass;
    if (filterBranch) params.branch = filterBranch;
    if (filterSection) {
      if (filterSection.includes(',')) params.sections = filterSection;
      else params.section = filterSection;
    }
    const res = await api.get('/students', { params });
    return res.data?.data || [];
  };

  // প্রতিটি শিক্ষার্থীর তথ্য অবজেক্ট ম্যাপ করা
  const mapStudentRow = (s) => {
    const name = s.user?.fullName || `${s.user?.firstName || ''} ${s.user?.lastName || ''}`.trim() || '—';
    const nameEn = `${s.user?.firstNameEn || ''} ${s.user?.lastNameEn || ''}`.trim() || '—';
    const roll = s.currentEnrollment?.rollNumber || s.rollNumber || '—';
    const studentId = s.studentId || s.admissionNumber || '—';
    const className = s.currentEnrollment?.classLevel?.name || (typeof s.currentEnrollment?.classLevel === 'string' ? s.currentEnrollment.classLevel : '—');
    const sectionName = s.currentEnrollment?.section?.name || (typeof s.currentEnrollment?.section === 'string' ? s.currentEnrollment.section : '—');
    const branchName = s.branch?.name || (typeof s.branch === 'string' ? s.branch : '—');
    const fatherName = s.fatherName || '—';
    const motherName = s.motherName || '—';
    const phone = s.guardian?.phone || s.user?.phone || '—';
    const guardianName = s.guardian?.name || (typeof s.guardian?.user === 'object' ? s.guardian.user.fullName : '') || '—';
    
    let dateOfBirth = '—';
    if (s.dateOfBirth) {
      try {
        dateOfBirth = new Date(s.dateOfBirth).toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch (_) {}
    }

    const nid = s.nationalIdOrBirthCertNo || '—';
    const gender = s.gender === 'male' ? 'ছাত্র' : s.gender === 'female' ? 'ছাত্রী' : s.gender || '—';
    const bloodGroup = s.bloodGroup || '—';
    const village = s.village || '—';
    const department = s.department || '—';
    const hifzProgramType = s.hifzProgramType || '—';
    const residentialStatus = s.residentialStatus === 'residential' ? 'আবাসিক' : s.residentialStatus === 'day-care' ? 'ডে কেয়ার' : 'অনাবাসিক';

    let admissionDate = '—';
    if (s.admissionDate) {
      try {
        admissionDate = new Date(s.admissionDate).toLocaleDateString('bn-BD', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch (_) {}
    }

    const status = statusLabels[s.status] || s.status || 'সক্রিয়';
    const photo = s.photo || s.user?.photo || '';

    return {
      raw: s,
      photo,
      roll,
      name,
      nameEn,
      studentId,
      className,
      sectionName,
      branchName,
      fatherName,
      motherName,
      phone,
      guardianName,
      dateOfBirth,
      nid,
      gender,
      bloodGroup,
      village,
      department,
      hifzProgramType,
      residentialStatus,
      admissionDate,
      status,
    };
  };

  // সর্টিং লজিক (১ম কলাম এবং একই মান হলে ২য় কলামে উপ-সর্টিং)
  const sortStudentRecords = (mappedList) => {
    const list = [...mappedList];
    const keywordList = keywords.map(k => k.trim().toLowerCase()).filter(Boolean);

    list.sort((a, b) => {
      let primaryDiff = 0;

      // ১. যদি ১ম কলামের জন্য কি-ওয়ার্ড অগ্রাধিকার সক্রিয় থাকে
      if (keywordList.length > 0 && ['className', 'branchName', 'sectionName', 'department', 'residentialStatus', 'status'].includes(sortColumn)) {
        const valA = String(a[sortColumn] || '').toLowerCase();
        const valB = String(b[sortColumn] || '').toLowerCase();

        const indexA = keywordList.findIndex(k => valA.includes(k));
        const indexB = keywordList.findIndex(k => valB.includes(k));

        const rankA = indexA !== -1 ? indexA : 999999;
        const rankB = indexB !== -1 ? indexB : 999999;

        if (rankA !== rankB) {
          primaryDiff = sortDirection === 'asc' ? rankA - rankB : rankB - rankA;
        }
      }

      // ২. সংখ্যা বা টেক্সটভিত্তিক সাধারণ তুলনা
      if (primaryDiff === 0) {
        if (sortColumn === 'studentId') {
          const numA = parseCustomId(a.studentId);
          const numB = parseCustomId(b.studentId);
          if (numA !== numB) {
            primaryDiff = sortDirection === 'asc' ? numA - numB : numB - numA;
          }
        } else if (sortColumn === 'roll') {
          const numA = parseNumberVal(a.roll);
          const numB = parseNumberVal(b.roll);
          if (numA !== numB) {
            primaryDiff = sortDirection === 'asc' ? numA - numB : numB - numA;
          }
        } else {
          const strA = String(a[sortColumn] || '');
          const strB = String(b[sortColumn] || '');
          const cmp = strA.localeCompare(strB, 'bn');
          if (cmp !== 0) {
            primaryDiff = sortDirection === 'asc' ? cmp : -cmp;
          }
        }
      }

      // যদি ১ম কলামের ভিত্তিতে স্থান নির্ধারিত হয়ে যায়
      if (primaryDiff !== 0) {
        return primaryDiff;
      }

      // ৩. ১ম কলামে মান একই হলে (যেমন দুজনই 'প্লে' শ্রেণির), তখন ২য় সর্টিং কার্যকর হবে
      if (secondarySort && secondarySort !== 'none' && secondarySort !== sortColumn) {
        if (secondarySort === 'studentId') {
          const numA = parseCustomId(a.studentId);
          const numB = parseCustomId(b.studentId);
          if (numA !== numB) {
            return numA - numB;
          }
        } else if (secondarySort === 'roll') {
          const numA = parseNumberVal(a.roll);
          const numB = parseNumberVal(b.roll);
          if (numA !== numB) {
            return numA - numB;
          }
        } else {
          const sA = String(a[secondarySort] || '');
          const sB = String(b[secondarySort] || '');
          return sA.localeCompare(sB, 'bn');
        }
      }

      return 0;
    });

    return list;
  };

  // এক্সপোর্ট ট্রিগার
  const handleStartExport = async () => {
    setIsProcessing(true);
    setStatusMessage('ডাটা সংগ্রহ ও ফিল্টার করা হচ্ছে...');

    try {
      let rawList = [];

      if (dataScope === 'selected' && selectedIds.length > 0) {
        rawList = currentStudents.filter(s => selectedIds.includes(s._id));
      } else if (dataScope === 'page') {
        rawList = [...currentStudents];
      } else {
        // 'all'
        rawList = await fetchExportData();
      }

      if (rawList.length === 0) {
        alert('রপ্তানি করার মতো কোনো ছাত্র/ছাত্রীর তথ্য পাওয়া যায়নি। ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।');
        setIsProcessing(false);
        return;
      }

      setStatusMessage(`${rawList.length} জন শিক্ষার্থীর তথ্য সাজানো হচ্ছে...`);
      const mapped = rawList.map(mapStudentRow);
      const sorted = sortStudentRecords(mapped);

      if (exportFormat === 'csv') {
        setStatusMessage('CSV ফাইল তৈরি করা হচ্ছে...');
        generateCsvExport(sorted, checkedColumnsList);
      } else {
        setStatusMessage('PDF ডকুমেন্ট তৈরি করা হচ্ছে...');
        generatePdfPrintExport(sorted, checkedColumnsList);
      }

      setTimeout(() => {
        setIsProcessing(false);
        setStatusMessage('');
        onClose();
      }, 600);
    } catch (err) {
      console.error('Export failed:', err);
      alert('রপ্তানি করার সময় সমস্যা হয়েছে: ' + (err.message || 'ত্রুটি'));
      setIsProcessing(false);
      setStatusMessage('');
    }
  };

  // CSV ফাইল জেনারেট (UTF-8 BOM সহ)
  const generateCsvExport = (sortedRows, cols) => {
    const headers = ['নং', ...cols.map(c => `"${c.label.replace(/"/g, '""')}"`)].join(',');
    const rows = sortedRows.map((row, idx) => {
      const cells = [
        idx + 1,
        ...cols.map(c => {
          const raw = row[c.id] || '';
          return `"${String(raw).replace(/"/g, '""')}"`;
        }),
      ];
      return cells.join(',');
    });

    const csvContent = '\uFEFF' + [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // স্পষ্ট ও ঝকঝকে PDF প্রিন্ট উইন্ডো জেনারেট
  const generatePdfPrintExport = (sortedRows, cols) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('পপআপ উইন্ডো ব্লক করা হয়েছে। অনুগ্রহ করে ব্রাউজারের পপআপ পারমিশন এলাউ করুন।');
      return;
    }

    const dateStr = new Date().toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let classLabel = 'সকল';
    if (filterClass) {
      const clObj = classes.find(c => String(c._id) === String(filterClass));
      classLabel = clObj?.name || filterClass;
    }
    if (filterSection) {
      classLabel += ` (${filterSection})`;
    }
    if (filterBranch) {
      const brObj = branches.find(b => String(b._id) === String(filterBranch));
      if (brObj?.name) {
        classLabel += ` — ${brObj.name}`;
      }
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${effectiveInstName} — ছাত্র/ছাত্রী তালিকা (${effectiveBranchName})</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${getMadrasahPrintStyles(pdfOrientation, { wrap: false })}
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 9pt;
    }
    th {
      background-color: #0f766e;
      color: #ffffff;
      font-weight: 700;
      text-align: left;
      padding: 6px 8px;
      border: 1px solid #0f766e;
      font-size: 9pt;
    }
    td {
      padding: 5px 8px;
      border: 1px solid #cbd5e1;
      font-size: 8.8pt;
      vertical-align: middle;
      color: #1e293b;
    }
    tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .sl-cell {
      text-align: center;
      width: 38px;
      font-weight: 600;
      color: #475569;
    }
    .status-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 7.8pt;
      font-weight: 600;
      background: #e2e8f0;
      color: #334155;
    }
    @media print {
      body { padding: 0 !important; }
    }
    @page {
      size: A4 ${pdfOrientation};
      margin: 6mm 10mm !important;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      color: #0f172a;
    }
    #raw-content {
      position: absolute;
      visibility: hidden;
      left: -9999px;
      top: -9999px;
      width: ${pdfOrientation === 'landscape' ? '277mm' : '190mm'};
    }
    .print-page {
      position: relative;
      width: 100%;
      height: calc(${pdfOrientation === 'landscape' ? '210mm' : '297mm'} - 12mm);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
      break-after: page;
      overflow: hidden;
      background: #ffffff;
    }
    .print-page.last-page,
    .print-page:last-child {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }
    .page-top {
      width: 100%;
      position: relative;
      z-index: 10;
    }
    .page-bottom {
      width: 100%;
      margin-top: auto;
      padding-top: 14px;
      position: relative;
      z-index: 10;
    }
    .print-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${pdfOrientation === 'landscape' ? '360px' : '420px'};
      height: ${pdfOrientation === 'landscape' ? '360px' : '420px'};
      max-width: 80%;
      max-height: 80%;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      opacity: 0.085;
      object-fit: contain;
    }
  </style>
</head>
<body>
  <!-- Container where partitioned pages will be placed -->
  <div id="pages-container"></div>

  <!-- Hidden source content used for accurate DOM measurement -->
  <div id="raw-content">
    <div class="header-wrap">
      ${getMadrasahHeaderHtml({
        title: 'ছাত্র/ছাত্রী পূর্ণাঙ্গ বিবরণী ও তালিকা',
        orientation: pdfOrientation,
        metaLeft: `<span style="white-space:nowrap;"><strong>শ্রেণি:</strong> ${classLabel}</span>`,
        metaRight: `<span style="white-space:nowrap;"><strong>তারিখ:</strong> ${dateStr}</span>`,
        showWatermark: false
      })}
    </div>

    <table>
      <thead>
        <tr>
          <th class="sl-cell">নং</th>
          ${cols.map(c => `<th${c.id === 'photo' ? ' style="text-align:center; width:44px;"' : ''}>${c.label}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${sortedRows.map((row, idx) => `
          <tr>
            <td class="sl-cell">${idx + 1}</td>
            ${cols.map(c => {
              if (c.id === 'photo') {
                const photoUrl = row.photo;
                return `<td style="text-align:center; padding:2px; width:44px;">
                  ${photoUrl ? `<img src="${photoUrl}" alt="ছবি" style="width:28px; height:32px; object-fit:cover; border-radius:3px; border:1px solid #cbd5e1; display:inline-block; vertical-align:middle;" onerror="this.parentElement.innerHTML='—'" />` : '<span style="color:#94a3b8; font-size:11px;">—</span>'}
                </td>`;
              }
              const val = row[c.id] || '—';
              if (c.id === 'status') {
                return `<td><span class="status-badge">${val}</span></td>`;
              }
              return `<td>${val}</td>`;
            }).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>

    ${(selectedSignatureRoles && selectedSignatureRoles.length > 0) ? `
    <div class="footer-wrap">
      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
    ` : ''}
  </div>

  <script>
    function paginateAndPrint() {
      try {
        const rawWrap = document.getElementById('raw-content');
        const rawHeader = rawWrap.querySelector('.header-wrap');
        const rawTable = rawWrap.querySelector('table');
        const rawThead = rawTable.querySelector('thead');
        const rawRows = Array.from(rawTable.querySelectorAll('tbody tr'));
        const rawFooter = rawWrap.querySelector('.footer-wrap');
        const container = document.getElementById('pages-container');

        if (!rawRows.length || !container) {
          rawWrap.style.position = 'static';
          rawWrap.style.visibility = 'visible';
          window.print();
          return;
        }

        // Measure sub-pixel precision ratio (px per mm)
        const probe = document.createElement('div');
        probe.style.width = '100mm';
        probe.style.height = '100mm';
        probe.style.position = 'absolute';
        probe.style.visibility = 'hidden';
        document.body.appendChild(probe);
        const pxPerMm = probe.getBoundingClientRect().height / 100;
        document.body.removeChild(probe);

        const isLandscape = ${pdfOrientation === 'landscape'};
        const pageTotalMm = isLandscape ? 210 : 297;
        const pageUsablePx = (pageTotalMm - 12) * pxPerMm;

        const headerHeight = rawHeader ? rawHeader.getBoundingClientRect().height : 0;
        const theadHeight = rawThead ? rawThead.getBoundingClientRect().height : 35;
        const footerHeight = rawFooter ? rawFooter.getBoundingClientRect().height : 0;

        const rowHeights = rawRows.map(r => r.getBoundingClientRect().height || 36);

        // Partition rows into pages
        const pageRowIndices = [];
        let currentPageIndices = [];
        let currentHeight = headerHeight + theadHeight;

        for (let i = 0; i < rawRows.length; i++) {
          const h = rowHeights[i];
          const isLast = (i === rawRows.length - 1);
          const neededFooter = (isLast && rawFooter) ? (footerHeight + 20) : 0;

          // Check if row fits on current page (with 15px safe margin)
          if ((currentHeight + h + neededFooter) > (pageUsablePx - 15) && currentPageIndices.length > 0) {
            pageRowIndices.push(currentPageIndices);
            currentPageIndices = [i];
            currentHeight = theadHeight + h;
          } else {
            currentPageIndices.push(i);
            currentHeight += h;
          }
        }
        if (currentPageIndices.length > 0) {
          pageRowIndices.push(currentPageIndices);
        }

        container.innerHTML = '';
        const totalPages = pageRowIndices.length;

        pageRowIndices.forEach((indices, pageIdx) => {
          const isFirst = (pageIdx === 0);
          const isLast = (pageIdx === totalPages - 1);

          const pageDiv = document.createElement('div');
          pageDiv.className = 'print-page' + (isLast ? ' last-page' : '');

          const watermark = document.createElement('img');
          watermark.src = '/images/madrasah_logo.png';
          watermark.className = 'print-watermark';
          watermark.alt = 'Watermark';
          watermark.onerror = function() { this.src = '/madrasah_logo.png'; };
          pageDiv.appendChild(watermark);

          const topDiv = document.createElement('div');
          topDiv.className = 'page-top';

          if (isFirst && rawHeader) {
            topDiv.appendChild(rawHeader.cloneNode(true));
          }

          const tableClone = document.createElement('table');
          tableClone.appendChild(rawThead.cloneNode(true));
          const tbodyClone = document.createElement('tbody');
          indices.forEach(idx => {
            tbodyClone.appendChild(rawRows[idx].cloneNode(true));
          });
          tableClone.appendChild(tbodyClone);
          topDiv.appendChild(tableClone);
          pageDiv.appendChild(topDiv);

          if (isLast && rawFooter) {
            const bottomDiv = document.createElement('div');
            bottomDiv.className = 'page-bottom';
            bottomDiv.appendChild(rawFooter.cloneNode(true));
            pageDiv.appendChild(bottomDiv);
          }

          container.appendChild(pageDiv);
        });

        rawWrap.style.display = 'none';

        setTimeout(() => {
          window.print();
        }, 150);
      } catch (err) {
        console.error('Pagination error:', err);
        const rawWrap = document.getElementById('raw-content');
        if (rawWrap) {
          rawWrap.style.position = 'static';
          rawWrap.style.visibility = 'visible';
        }
        window.print();
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(paginateAndPrint, 250));
      } else {
        setTimeout(paginateAndPrint, 400);
      }
    });
  </script>
</body>
</html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-scale-in"
        style={{
          background: 'var(--bg-card, #ffffff)',
          color: 'var(--text-primary, #1e293b)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '740px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--border-color, #e2e8f0)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid var(--border-color, #e2e8f0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-primary, #f8fafc)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(20, 184, 166, 0.12)',
                color: 'var(--primary-600, #0d9488)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Download size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                ছাত্র/ছাত্রী ডাটা রপ্তানি (Export)
              </h2>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary, #64748b)', margin: 0 }}>
                ফিল্টার, কলাম টিক লিস্ট, কি-ওয়ার্ড অগ্রাধিকার ও ফরম্যাট নির্বাচন করুন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary, #64748b)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
            }}
            title="বন্ধ করুন"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* ══════════════════════════════════════════════════════════
              ধাপ ১: ফিল্টার অপশন (প্রদত্ত ছবির হুবহু ড্রপডাউন স্টাইল)
              ══════════════════════════════════════════════════════════ */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} style={{ color: 'var(--primary-500)' }} /> ১. ফিল্টার নির্বাচন (কাদের ডাটা রপ্তানি করতে চান?)
              </label>
              <span className="badge badge-primary" style={{ fontSize: '0.78rem' }}>
                প্রস্তুত: {filteredCount} জন
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* শ্রেণি ড্রপডাউন কার্ড */}
              <div className="export-filter-card">
                <select
                  className="export-filter-select"
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                >
                  <option value="">সকল শ্রেণি</option>
                  {classes && classes.length > 0 ? (
                    classes.map(c => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))
                  ) : (
                    USER_DEFAULT_CLASS_KEYWORDS.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))
                  )}
                </select>
                <ChevronDown size={20} className="export-filter-arrow" />
              </div>

              {/* সেকশন ড্রপডাউন কার্ড */}
              <div className="export-filter-card">
                <select
                  className="export-filter-select"
                  value={filterSection}
                  onChange={(e) => setFilterSection(e.target.value)}
                >
                  <option value="">সকল সেকশন</option>
                  {sections && sections.length > 0 ? (
                    sections.map(s => (
                      <option key={s._id} value={s.name}>{s.name}</option>
                    ))
                  ) : (
                    ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'কোন সেকশন নাই'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))
                  )}
                </select>
                <ChevronDown size={20} className="export-filter-arrow" />
              </div>

              {/* শাখা ড্রপডাউন কার্ড */}
              <div className="export-filter-card">
                <select
                  className="export-filter-select"
                  value={filterBranch}
                  onChange={(e) => setFilterBranch(e.target.value)}
                >
                  <option value="">সকল শাখা</option>
                  {branches && branches.length > 0 ? (
                    branches.map(b => (
                      <option key={b._id} value={b._id}>{b.name}</option>
                    ))
                  ) : (
                    ['বালক শাখা', 'বালিকা শাখা', 'বালক শাখা + নুরানী', 'বালিকা শাখা + নুরানী', 'নুরানী শাখা'].map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))
                  )}
                </select>
                <ChevronDown size={20} className="export-filter-arrow" />
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              ধাপ ২: কলাম নির্বাচনের টিক লিস্ট (Checkbox List)
              ══════════════════════════════════════════════════════════ */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ListFilter size={18} style={{ color: 'var(--primary-500)' }} /> ২. কোন কোন কলাম যোগ করতে চান? (টিক লিস্ট)
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => selectAllColumns(true)}
                  style={{
                    background: 'none',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: 'var(--primary-600)',
                  }}
                >
                  সবগুলো নির্বাচন
                </button>
                <button
                  type="button"
                  onClick={() => selectAllColumns(false)}
                  style={{
                    background: 'none',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                  }}
                >
                  সব বাতিল
                </button>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '8px',
                background: 'var(--bg-primary)',
                padding: '14px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}
            >
              {ALL_STUDENT_COLUMNS.map((col) => {
                const isChecked = Boolean(selectedColumns[col.id]);
                return (
                  <div
                    key={col.id}
                    className={`column-checkbox-card ${isChecked ? 'checked' : ''}`}
                    onClick={() => toggleColumn(col.id)}
                  >
                    {isChecked ? (
                      <CheckSquare size={18} style={{ color: 'var(--primary-500)', flexShrink: 0 }} />
                    ) : (
                      <Square size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                    )}
                    <span style={{ flex: 1 }}>{col.label}</span>
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              নির্বাচিত কলাম: <strong>{checkedColumnsList.length} টি</strong> (যেগুলোতে টিক থাকবে, কেবল সেগুলোই এক্সপোর্টে যুক্ত হবে)
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════
              ধাপ ৩: কলাম সর্টিং ও কি-ওয়ার্ড অগ্রাধিকার
              ══════════════════════════════════════════════════════════ */}
          <div>
            <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <SlidersHorizontal size={18} style={{ color: 'var(--primary-500)' }} /> ৩. কোন কলাম ধরে আগে সাজাতে (Sort) চান?
            </label>

            <div
              style={{
                background: 'var(--bg-primary)',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {/* ১ম সর্টিং (প্রধান ক্রম) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    ১ম সর্টিং কলাম (প্রধান):
                  </span>
                  <select
                    className="form-input"
                    value={sortColumn}
                    onChange={(e) => setSortColumn(e.target.value)}
                    style={{ fontWeight: 600, height: '42px' }}
                  >
                    {checkedColumnsList.map(col => (
                      <option key={col.id} value={col.id}>
                        {col.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    সর্টিং ক্রম / দিক:
                  </span>
                  <div style={{ display: 'flex', gap: '8px', height: '42px' }}>
                    <button
                      type="button"
                      className={`btn btn-sm ${sortDirection === 'asc' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1, whiteSpace: 'nowrap', padding: '6px 12px', fontSize: '0.84rem' }}
                      onClick={() => setSortDirection('asc')}
                    >
                      <ArrowUp size={15} /> ছোট থেকে বড়
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${sortDirection === 'desc' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1, whiteSpace: 'nowrap', padding: '6px 12px', fontSize: '0.84rem' }}
                      onClick={() => setSortDirection('desc')}
                    >
                      <ArrowDown size={15} /> বড় থেকে ছোট
                    </button>
                  </div>
                </div>
              </div>

              {/* ২য় সর্টিং (ঐচ্ছিক উপ-ক্রম) */}
              <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--text-primary)' }}>
                      ২য় সর্টিং কলাম (উপ-সর্টিং):
                    </span>
                    <select
                      className="form-input"
                      value={secondarySort}
                      onChange={(e) => setSecondarySort(e.target.value)}
                      style={{ height: '42px' }}
                    >
                      <option value="none">কোনটি নয় (শুধুমাত্র ১ম কলাম অনুযায়ী)</option>
                      {checkedColumnsList
                        .filter(c => c.id !== sortColumn)
                        .map(col => (
                          <option key={col.id} value={col.id}>
                            {col.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.45',
                    background: 'var(--bg-card)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                  }}>
                    💡 <strong>২য় সর্টিং কীভাবে কাজ করে?</strong><br />
                    ১ম কলামে যাদের মান একই (যেমন একই শ্রেণির সব শিক্ষার্থী), তাদেরকে ভেতরের ক্রমানুসারে সাজাতে ২য় কলামটি কাজ করে (যেমন: শ্রেণির ভেতরে রোল ১, ২, ৩... সাজানো)।
                  </div>
                </div>
              </div>

              {/* কি-ওয়ার্ড অগ্রাধিকার ব্যবস্থাপনা (যেমন শ্রেণির ক্ষেত্রে: প্লে, নার্সারী, তৃতীয়, প্রথম...) */}
              {['className', 'branchName', 'sectionName', 'department'].includes(sortColumn) && (
                <div
                  style={{
                    background: 'var(--bg-card)',
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    marginTop: '6px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      "{checkedColumnsList.find(c => c.id === sortColumn)?.label || sortColumn}" কলামের কি-ওয়ার্ড ক্রম:
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowKeywordEditor(!showKeywordEditor)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary-600)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {showKeywordEditor ? 'চিপস ভিউ দেখুন' : 'টেক্সট আকারে এডিট করুন'}
                    </button>
                  </div>

                  {showKeywordEditor ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
                        প্রতি লাইনে একটি করে কি-ওয়ার্ড লিখুন (যে কি-ওয়ার্ড আগে থাকবে, সেই অনুযায়ী ডাটা আগে সর্ট হবে):
                      </p>
                      <textarea
                        rows={6}
                        className="form-input"
                        value={keywordTextarea}
                        onChange={(e) => setKeywordTextarea(e.target.value)}
                        placeholder="প্লে&#10;নার্সারী&#10;তৃতীয়&#10;প্রথম"
                        style={{ fontFamily: 'inherit', fontSize: '0.9rem', lineHeight: '1.6' }}
                      />
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        style={{ alignSelf: 'flex-start' }}
                        onClick={applyTextareaKeywords}
                      >
                        ক্রম সংরক্ষণ করুন
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                        {keywords.map((kw, idx) => (
                          <div key={kw} className="keyword-chip">
                            <span className="keyword-rank">{idx + 1}</span>
                            <span>{kw}</span>
                            <div style={{ display: 'flex', gap: '2px', marginLeft: '4px' }}>
                              {idx > 0 && (
                                <button
                                  type="button"
                                  onClick={() => moveKeyword(idx, -1)}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'var(--text-secondary)' }}
                                  title="আগে নিন"
                                >
                                  <MoveUp size={12} />
                                </button>
                              )}
                              {idx < keywords.length - 1 && (
                                <button
                                  type="button"
                                  onClick={() => moveKeyword(idx, 1)}
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'var(--text-secondary)' }}
                                  title="পরে নিন"
                                >
                                  <MoveDown size={12} />
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => removeKeyword(idx)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'var(--danger)' }}
                                title="মুছুন"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* নতুন কি-ওয়ার্ড যুক্ত করার ইনপুট */}
                      <div style={{ display: 'flex', gap: '8px', maxWidth: '320px' }}>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="নতুন কি-ওয়ার্ড লিখুন..."
                          value={newKeywordInput}
                          onChange={(e) => setNewKeywordInput(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addKeyword(); } }}
                          style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                        />
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={addKeyword}
                        >
                          <Plus size={14} /> যোগ
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              ধাপ ৪: ফাইল ফরম্যাট ও ডকুমেন্ট জেনারেট (PDF & CSV)
              ══════════════════════════════════════════════════════════ */}
          <div>
            <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Download size={18} style={{ color: 'var(--primary-500)' }} /> ৪. ফাইল ফরম্যাট নির্বাচন ও এক্সপোর্ট
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {/* PDF অপশন কার্ড */}
              <div
                className={`format-choice-card ${exportFormat === 'pdf' ? 'selected' : ''}`}
                onClick={() => setExportFormat('pdf')}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: exportFormat === 'pdf' ? 'var(--primary-500)' : 'var(--bg-tertiary)',
                    color: exportFormat === 'pdf' ? '#fff' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileText size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>PDF ডকুমেন্ট</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    প্রিন্ট ও সংরক্ষণের জন্য ঝকঝকে টেবিল
                  </div>
                </div>
                {exportFormat === 'pdf' && <Check size={18} style={{ color: 'var(--primary-500)' }} />}
              </div>

              {/* CSV অপশন কার্ড */}
              <div
                className={`format-choice-card ${exportFormat === 'csv' ? 'selected' : ''}`}
                onClick={() => setExportFormat('csv')}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: exportFormat === 'csv' ? 'var(--primary-500)' : 'var(--bg-tertiary)',
                    color: exportFormat === 'csv' ? '#fff' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileSpreadsheet size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>CSV ফাইল (Excel)</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    স্প্রেডশিট ও সফটওয়্যারে ব্যবহারের জন্য
                  </div>
                </div>
                {exportFormat === 'csv' && <Check size={18} style={{ color: 'var(--primary-500)' }} />}
              </div>
            </div>

            {/* PDF সিলেক্ট থাকলে ওরিয়েন্টেশন অপশন */}
            {exportFormat === 'pdf' && (
              <>
                <div
                  style={{
                    marginTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'var(--bg-primary)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    পেজ ওরিয়েন্টেশন:
                  </span>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="pdfOrientation"
                      checked={pdfOrientation === 'portrait'}
                      onChange={() => setPdfOrientation('portrait')}
                    />
                    পোর্ট্রেট (লম্বালম্বি)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="pdfOrientation"
                      checked={pdfOrientation === 'landscape'}
                      onChange={() => setPdfOrientation('landscape')}
                    />
                    ল্যান্ডস্কেপ (আড়াআড়ি) {checkedColumnsList.length > 7 && <span className="badge badge-warning" style={{ fontSize: '0.68rem' }}>সুপারিশকৃত</span>}
                  </label>
                </div>

                {/* Signature Role Selector for PDF/Print */}
                <div style={{ marginTop: '12px' }}>
                  <PrintSignatureRoleSelector
                    selectedRoles={selectedSignatureRoles}
                    onChange={(roles) => {
                      setSelectedSignatureRoles(roles);
                      try {
                        localStorage.setItem('annur_footer_roles__student_export', JSON.stringify(roles));
                      } catch (_) {}
                    }}
                    additionalRoles={['প্রস্তুতকারী', 'যাচাইকারী']}
                    style={{ marginBottom: 0 }}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid var(--border-color, #e2e8f0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-primary, #f8fafc)',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              মোট তৈরি হবে: <strong>{filteredCount} জন</strong> | কলাম: <strong>{checkedColumnsList.length} টি</strong>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isProcessing}
            >
              বাতিল
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleStartExport}
              disabled={isProcessing || checkedColumnsList.length === 0}
              style={{ minWidth: '150px' }}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={16} className="spinner" />
                  <span>{statusMessage || 'তৈরি হচ্ছে...'}</span>
                </>
              ) : exportFormat === 'pdf' ? (
                <>
                  <Printer size={16} />
                  <span>PDF তৈরি করুন</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>CSV ডাউনলোড</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
