import { useState, useEffect, useMemo } from 'react';
import {
  CreditCard, DollarSign, Calendar, Search, Filter, RefreshCw, Printer,
  CheckCircle, XCircle, Clock, AlertCircle, Edit3, ChevronLeft, ChevronRight,
  UserCheck, Download, Plus, Check, ArrowRight, Wallet, FileText, X,
  ArrowDownRight, CheckCheck, Sparkles, Building2
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo, formatDateDDMMYYYY } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function SalaryManagementPage() {
  const { user } = useAuthStore();
  const madrasahInfo = getMadrasahInfo(user);

  // Month State (YYYY-MM)
  const now = new Date();
  const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const [selectedMonth, setSelectedMonth] = useState(currentMonthStr);

  // Data State
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [sheetData, setSheetData] = useState({
    month: currentMonthStr,
    stats: { totalStaff: 0, totalNetPayable: 0, totalPaid: 0, totalDue: 0 },
    records: [],
    salaryAccount: null,
    fundAccounts: [],
  });

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'paid' | 'unpaid' | 'partial'

  // Signature Roles State & Print Preview
  const DEFAULT_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, বালক শাখা'
  ];
  const PRESET_SIGNATURE_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];
  const MAX_SIGNATURE_ROLES = 5;

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [orientation, setOrientation] = useState('landscape');
  const [previewZoom, setPreviewZoom] = useState('scroll'); // 'scroll' | 'fit'
  const [windowWidth, setWindowWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseSheetWidth = orientation === 'landscape' ? 980 : 800;
  const mobileFitScale = useMemo(() => {
    const availableWidth = windowWidth - (windowWidth < 640 ? 24 : 48);
    return Math.min(1, Math.max(0.35, availableWidth / baseSheetWidth));
  }, [windowWidth, baseSheetWidth]);

  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__salary_sheet');
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
      localStorage.setItem('annur_footer_roles__salary_sheet', JSON.stringify(next));
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
        localStorage.setItem('annur_footer_roles__salary_sheet', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomRole('');
    showToast(`"${trimmed}" পদবি সফলভাবে যুক্ত হয়েছে`);
  };

  const handleDeleteCustomRole = (role, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextCustom = customRolesList.filter(r => r !== role);
    setCustomRolesList(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedSignatureRoles.includes(role)) {
      const nextSelected = selectedSignatureRoles.filter(r => r !== role);
      const fallback = nextSelected.length > 0 ? nextSelected : DEFAULT_SIGNATURE_ROLES;
      setSelectedSignatureRoles(fallback);
      try {
        localStorage.setItem('annur_footer_roles__salary_sheet', JSON.stringify(fallback));
      } catch (_) {}
    }
    showToast(`"${role}" পদবি তালিকা থেকে সরানো হয়েছে`);
  };

  // Modals State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [editForm, setEditForm] = useState({
    baseSalary: 0,
    houseRent: 0,
    medicalAllowance: 0,
    transportAllowance: 0,
    festivalBonus: 0,
    specialAllowance: 0,
    absentDays: 0,
    absentDeduction: 0,
    advanceDeduction: 0,
    advanceId: null,
    providentFund: 0,
    otherDeduction: 0,
    notes: '',
  });

  const [payModalOpen, setPayModalOpen] = useState(false);
  const [payingRecord, setPayingRecord] = useState(null);
  const [payForm, setPayForm] = useState({
    amount: 0,
    fundAccountId: '',
    paymentMethod: 'cash',
    paymentDate: new Date().toISOString().slice(0, 10),
    notes: '',
  });

  const [bulkPayModalOpen, setBulkPayModalOpen] = useState(false);
  const [selectedBulkIds, setSelectedBulkIds] = useState([]);
  const [bulkForm, setBulkForm] = useState({
    fundAccountId: '',
    paymentMethod: 'cash',
    paymentDate: new Date().toISOString().slice(0, 10),
  });

  const [payslipModalOpen, setPayslipModalOpen] = useState(false);
  const [payslipData, setPayslipData] = useState(null);
  const [loadingPayslip, setLoadingPayslip] = useState(false);

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (text, type = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Fetch Sheet Data
  const fetchSalarySheet = async (monthToFetch = selectedMonth) => {
    try {
      setLoading(true);
      const res = await api.get(`/salary/sheet?month=${monthToFetch}`);
      if (res.data?.success) {
        setSheetData(res.data.data || {
          month: monthToFetch,
          stats: { totalStaff: 0, totalNetPayable: 0, totalPaid: 0, totalDue: 0 },
          records: [],
          salaryAccount: null,
          fundAccounts: [],
        });
      }
    } catch (err) {
      console.error('fetchSalarySheet error:', err);
      showToast('বেতন শিট লোড করতে সমস্যা হয়েছে', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalarySheet(selectedMonth);
  }, [selectedMonth]);

  // Sync / Generate Sheet
  const handleGenerateSheet = async () => {
    try {
      setSyncing(true);
      const res = await api.post('/salary/generate', {
        month: selectedMonth,
        overwrite: false,
      });
      if (res.data?.success) {
        showToast(res.data.data?.message || 'বেতন শিট সফলভাবে তৈরি/আপডেট হয়েছে', 'success');
        fetchSalarySheet(selectedMonth);
      }
    } catch (err) {
      console.error('handleGenerateSheet error:', err);
      showToast('শিট তৈরি করতে সমস্যা হয়েছে', 'error');
    } finally {
      setSyncing(false);
    }
  };

  // Month Navigation
  const changeMonth = (delta) => {
    const [y, m] = selectedMonth.split('-').map(Number);
    const d = new Date(y, m - 1 + delta, 1);
    const newMonthStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    setSelectedMonth(newMonthStr);
  };

  // Month Display Name in Bengali
  const monthNameBn = useMemo(() => {
    const [y, m] = selectedMonth.split('-').map(Number);
    const date = new Date(y, m - 1, 1);
    return date.toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' });
  }, [selectedMonth]);

  // Filtered Records
  const filteredRecords = useMemo(() => {
    let list = sheetData?.records || [];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r =>
        (r.staffName && r.staffName.toLowerCase().includes(q)) ||
        (r.designation && r.designation.toLowerCase().includes(q)) ||
        (r.phone && r.phone.includes(q))
      );
    }

    if (statusFilter !== 'all') {
      list = list.filter(r => r.status === statusFilter);
    }

    return list;
  }, [sheetData?.records, searchQuery, statusFilter]);

  // Open Edit Modal
  const handleOpenEdit = (rec) => {
    setEditingRecord(rec);
    setEditForm({
      baseSalary: Number(rec.baseSalary) || 0,
      houseRent: Number(rec.houseRent) || 0,
      medicalAllowance: Number(rec.medicalAllowance) || 0,
      transportAllowance: Number(rec.transportAllowance) || 0,
      festivalBonus: Number(rec.festivalBonus) || 0,
      specialAllowance: Number(rec.specialAllowance) || 0,
      absentDays: Number(rec.absentDays) || 0,
      absentDeduction: Number(rec.absentDeduction) || 0,
      advanceDeduction: Number(rec.advanceDeduction) || 0,
      advanceId: rec.advanceId || rec.availableAdvanceId || null,
      providentFund: Number(rec.providentFund) || 0,
      otherDeduction: Number(rec.otherDeduction) || 0,
      notes: rec.notes || '',
    });
    setEditModalOpen(true);
  };

  // Real-time Net preview in edit form
  const editCalculations = useMemo(() => {
    const base = Number(editForm.baseSalary) || 0;
    const totAllow = (Number(editForm.houseRent) || 0) +
      (Number(editForm.medicalAllowance) || 0) +
      (Number(editForm.transportAllowance) || 0) +
      (Number(editForm.festivalBonus) || 0) +
      (Number(editForm.specialAllowance) || 0);

    const totDed = (Number(editForm.absentDeduction) || 0) +
      (Number(editForm.advanceDeduction) || 0) +
      (Number(editForm.providentFund) || 0) +
      (Number(editForm.otherDeduction) || 0);

    const net = Math.max(0, (base + totAllow) - totDed);
    return { totAllow, totDed, net, netSalary: net };
  }, [editForm]);

  // Save Edit
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingRecord) return;
    try {
      const payload = {
        ...editForm,
        month: selectedMonth,
        staffName: editingRecord.staffName,
        designation: editingRecord.designation,
        phone: editingRecord.phone,
        userType: editingRecord.userType,
        teacherId: editingRecord.teacherId,
      };

      const res = await api.put(`/salary/${editingRecord._id}`, payload);
      if (res.data?.success) {
        showToast('ভাতা ও কর্তনের বিবরণ সংরক্ষিত হয়েছে', 'success');
        setEditModalOpen(false);
        fetchSalarySheet(selectedMonth);
      }
    } catch (err) {
      console.error('handleSaveEdit error:', err);
      showToast('সংরক্ষণ করতে সমস্যা হয়েছে', 'error');
    }
  };

  // Open Single Pay Modal
  const handleOpenPay = (rec) => {
    setPayingRecord(rec);
    const due = Number(rec.dueAmount) > 0 ? Number(rec.dueAmount) : Math.max(0, Number(rec.netSalary) - Number(rec.paidAmount || 0));
    const defaultFundId = sheetData?.fundAccounts?.[0]?._id || '';
    setPayForm({
      amount: due > 0 ? due : 0,
      fundAccountId: defaultFundId,
      paymentMethod: 'cash',
      paymentDate: new Date().toISOString().slice(0, 10),
      notes: '',
    });
    setPayModalOpen(true);
  };

  // Submit Single Pay
  const handleSavePay = async (e) => {
    e.preventDefault();
    if (!payingRecord || !payForm.fundAccountId || Number(payForm.amount) <= 0) {
      showToast('সঠিক তহবিল ও টাকার পরিমাণ দিন', 'error');
      return;
    }

    try {
      const payload = {
        salaryId: payingRecord._id,
        amount: Number(payForm.amount),
        paymentMethod: payForm.paymentMethod,
        fundAccountId: payForm.fundAccountId,
        paymentDate: payForm.paymentDate,
        notes: payForm.notes,
        month: selectedMonth,
        staffName: payingRecord.staffName,
        designation: payingRecord.designation,
        phone: payingRecord.phone,
        userType: payingRecord.userType,
        teacherId: payingRecord.teacherId,
        baseSalary: payingRecord.baseSalary,
      };

      const res = await api.post('/salary/pay', payload);
      if (res.data?.success) {
        showToast(res.data.data?.message || 'বেতন পরিশোধ সফল হয়েছে', 'success');
        setPayModalOpen(false);
        fetchSalarySheet(selectedMonth);
      }
    } catch (err) {
      console.error('handleSavePay error:', err);
      showToast(err.response?.data?.message || 'বেতন পরিশোধ করতে সমস্যা হয়েছে', 'error');
    }
  };

  // Open Bulk Pay Modal
  const handleOpenBulkPay = () => {
    const unpaids = (sheetData?.records || []).filter(r => r.status !== 'paid');
    const unpaidIds = unpaids.map(r => r._id);
    setSelectedBulkIds(unpaidIds);
    setBulkForm({
      fundAccountId: sheetData?.fundAccounts?.[0]?._id || '',
      paymentMethod: 'cash',
      paymentDate: new Date().toISOString().slice(0, 10),
    });
    setBulkPayModalOpen(true);
  };

  // Bulk Pay Calculation
  const bulkTotalPayable = useMemo(() => {
    return (sheetData?.records || [])
      .filter(r => selectedBulkIds.includes(r._id))
      .reduce((sum, r) => sum + (Number(r.dueAmount) || (Number(r.netSalary) - Number(r.paidAmount || 0))), 0);
  }, [sheetData?.records, selectedBulkIds]);

  // Submit Bulk Pay
  const handleSaveBulkPay = async (e) => {
    e.preventDefault();
    if (!bulkForm.fundAccountId || selectedBulkIds.length === 0) {
      showToast('কমপক্ষে একজন কর্মী ও তহবিল নির্বাচন করুন', 'error');
      return;
    }

    try {
      const res = await api.post('/salary/bulk-pay', {
        month: selectedMonth,
        salaryIds: selectedBulkIds,
        fundAccountId: bulkForm.fundAccountId,
        paymentMethod: bulkForm.paymentMethod,
        paymentDate: bulkForm.paymentDate,
      });

      if (res.data?.success) {
        showToast(res.data.data?.message || 'সকল বেতন সফলভাবে পরিশোধ হয়েছে', 'success');
        setBulkPayModalOpen(false);
        fetchSalarySheet(selectedMonth);
      }
    } catch (err) {
      console.error('handleSaveBulkPay error:', err);
      showToast(err.response?.data?.message || 'বাল্ক পেমেন্ট সম্পন্ন করতে সমস্যা হয়েছে', 'error');
    }
  };

  // Open Payslip Modal
  const handleOpenPayslip = async (rec) => {
    try {
      setLoadingPayslip(true);
      setPayslipModalOpen(true);
      if (rec.isDraft) {
        setPayslipData({
          institution: {
            name: madrasahInfo.madrasahName,
            address: madrasahInfo.address,
            phone: madrasahInfo.phone,
            logo: madrasahInfo.logo,
          },
          salary: rec,
          netSalaryInWords: `${Number(rec.netSalary).toLocaleString('bn-BD')} টাকা মাত্র`,
          paidAmountInWords: '—',
        });
      } else {
        const res = await api.get(`/salary/payslip/${rec._id}`);
        if (res.data?.success) {
          setPayslipData(res.data.data);
        }
      }
    } catch (err) {
      console.error('handleOpenPayslip error:', err);
      showToast('পে-স্লিপ লোড করতে সমস্যা হয়েছে', 'error');
    } finally {
      setLoadingPayslip(false);
    }
  };

  // Print Action
  const handlePrint = () => {
    setShowPrintModal(true);
  };

  const handleExecutePrint = () => {
    window.print();
  };

  const renderPrintableContent = () => {
    const totalStaff = filteredRecords.length;
    const totalBaseSalary = filteredRecords.reduce((acc, r) => acc + (Number(r.baseSalary) || 0), 0);
    const totalAllowance = filteredRecords.reduce((acc, r) => acc + (Number(r.totalAllowance) || 0), 0);
    const totalDeduction = filteredRecords.reduce((acc, r) => acc + (Number(r.totalDeduction) || 0), 0);
    const totalNetPayable = filteredRecords.reduce((acc, r) => acc + (Number(r.netSalary) || 0), 0);
    const totalPaid = filteredRecords.reduce((acc, r) => acc + (Number(r.paidAmount) || 0), 0);
    const totalDue = Math.max(0, totalNetPayable - totalPaid);

    return (
      <div style={{ position: 'relative', width: '100%', minHeight: '100%', background: '#ffffff', color: '#0f172a', padding: '10px' }}>
        {/* Watermark Logo */}
        <img
          src="/images/madrasah_logo.png"
          alt="Watermark"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            opacity: 0.05,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header with Letterhead */}
          <MadrasahLetterhead
            documentTitle={`মাসিক শিক্ষক ও স্টাফ বেতন বিবরণী শিট — ${monthNameBn}`}
            metaLeft={<>মাস: <strong>{monthNameBn}</strong> | শাখা: <strong>{madrasahInfo.branchName || 'মূল শাখা'}</strong></>}
            metaRight={<>মোট কর্মী: <strong>{totalStaff} জন</strong> | প্রিন্টের তারিখ: <strong>{formatDateDDMMYYYY(new Date())}</strong></>}
          />

          {/* Summary Stats Strip */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 14px',
            margin: '8px 0 12px 0',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 600
          }}>
            <div>মোট কর্মী: <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>{totalStaff}</span> জন</div>
            <div>সর্বমোট নিট বেতন: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#0f766e' }}>৳{totalNetPayable.toLocaleString('en-IN')}</span></div>
            <div>পরিশোধিত: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#15803d' }}>৳{totalPaid.toLocaleString('en-IN')}</span></div>
            <div>অবশিষ্ট বকেয়া: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#b91c1c' }}>৳{totalDue.toLocaleString('en-IN')}</span></div>
          </div>

          {/* Salary Records Table */}
          <table className="salary-print-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9pt' }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ width: '32px', textAlign: 'center' }}>#</th>
                <th style={{ minWidth: '150px', textAlign: 'left' }}>কর্মী নাম ও পদবি</th>
                <th style={{ width: '85px', textAlign: 'center' }}>মোবাইল</th>
                <th style={{ width: '80px', textAlign: 'right' }}>মূল বেতন</th>
                <th style={{ width: '75px', textAlign: 'right' }}>ভাতা (+)</th>
                <th style={{ width: '75px', textAlign: 'right' }}>কর্তন (-)</th>
                <th style={{ width: '85px', textAlign: 'right' }}>নিট প্রদেয়</th>
                <th style={{ width: '80px', textAlign: 'right' }}>পরিশোধিত</th>
                <th style={{ width: '75px', textAlign: 'right' }}>বকেয়া</th>
                <th style={{ width: '75px', textAlign: 'center' }}>স্ট্যাটাস</th>
                <th style={{ width: '90px', textAlign: 'center' }}>গ্রহীতার স্বাক্ষর</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((rec, idx) => {
                const base = Number(rec.baseSalary) || 0;
                const allow = Number(rec.totalAllowance) || 0;
                const ded = Number(rec.totalDeduction) || 0;
                const net = Number(rec.netSalary) || 0;
                const paid = Number(rec.paidAmount) || 0;
                const due = Math.max(0, net - paid);
                const isPaid = rec.status === 'paid';
                const isPartial = rec.status === 'partial';

                return (
                  <tr key={rec._id || idx} style={{ borderBottom: '1px solid #cbd5e1' }}>
                    <td style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '8.5pt' }}>{idx + 1}</td>
                    <td>
                      <div style={{ fontWeight: 700, fontSize: '9pt', color: '#0f172a' }}>{rec.staffName}</div>
                      <div style={{ fontSize: '7.5pt', color: '#64748b' }}>{rec.designation}</div>
                    </td>
                    <td style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '8pt', color: '#475569' }}>
                      {rec.phone || '—'}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontSize: '8.5pt' }}>
                      ৳{base.toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontSize: '8pt', color: '#15803d' }}>
                      {allow > 0 ? `+৳${allow.toLocaleString('en-IN')}` : '—'}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontSize: '8pt', color: '#b91c1c' }}>
                      {ded > 0 ? `-৳${ded.toLocaleString('en-IN')}` : '—'}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 800, fontSize: '9pt', color: '#0f766e' }}>
                      ৳{net.toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, fontSize: '8.5pt' }}>
                      ৳{paid.toLocaleString('en-IN')}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, fontSize: '8.5pt', color: due > 0 ? '#b91c1c' : '#64748b' }}>
                      {due > 0 ? `৳${due.toLocaleString('en-IN')}` : '—'}
                    </td>
                    <td style={{ textAlign: 'center', fontSize: '8pt' }}>
                      {isPaid ? (
                        <span style={{ color: '#15803d', fontWeight: 700 }}>পরিশোধিত</span>
                      ) : isPartial ? (
                        <span style={{ color: '#b45309', fontWeight: 700 }}>আংশিক</span>
                      ) : (
                        <span style={{ color: '#b91c1c', fontWeight: 700 }}>বকেয়া</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center', height: '28px', border: '1px dashed #cbd5e1', background: '#fafafa' }}>
                      &nbsp;
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ background: '#f8fafc', fontWeight: 800, borderTop: '2px solid #334155' }}>
                <td colSpan={3} style={{ textAlign: 'right', padding: '6px 8px', fontSize: '9pt' }}>সর্বমোট:</td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '9pt' }}>
                  ৳{totalBaseSalary.toLocaleString('en-IN')}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '8.5pt', color: '#15803d' }}>
                  +৳{totalAllowance.toLocaleString('en-IN')}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '8.5pt', color: '#b91c1c' }}>
                  -৳{totalDeduction.toLocaleString('en-IN')}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '9.5pt', color: '#0f766e' }}>
                  ৳{totalNetPayable.toLocaleString('en-IN')}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '9pt' }}>
                  ৳{totalPaid.toLocaleString('en-IN')}
                </td>
                <td style={{ textAlign: 'right', fontFamily: 'monospace', padding: '6px 8px', fontSize: '9pt', color: '#b91c1c' }}>
                  ৳{totalDue.toLocaleString('en-IN')}
                </td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          </table>

          {/* Dynamic Footer Signatures */}
          <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: 'auto', paddingTop: '28px' }} />
        </div>
      </div>
    );
  };

  const handlePrintPayslip = (data) => {
    if (!data) return;
    const printWin = window.open('', '_blank', 'width=850,height=950');
    if (!printWin) {
      window.print();
      return;
    }
    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="utf-8">
  <title>কর্মকর্তা পে-স্লিপ - ${data.staff?.name || ''}</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; font-size: 12px; }
    .tables-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; }
    th { padding: 6px 10px; text-align: left; font-weight: 700; border-bottom: 2px solid #cbd5e1; background: #f1f5f9; }
    td { padding: 6px 10px; border-bottom: 1px solid #e2e8f0; }
    .net-banner { background: #f0fdfa; border: 1.5px solid #0f766e; padding: 12px 16px; border-radius: 8px; margin-top: 14px; display: flex; justify-content: space-between; align-items: center; }
    @media print { .no-print { display: none !important; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="no-print" style="background:#0f172a; padding:10px 18px; margin-bottom:16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
    <span style="font-weight:700;">🖨️ পে-স্লিপ প্রিন্ট প্রিভিউ — ${data.staff?.name}</span>
    <div style="display:flex; gap:10px;">
      <button onclick="window.print()" style="padding:6px 18px; background:#10b981; color:#fff; border:none; border-radius:6px; font-weight:700; cursor:pointer;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding:6px 14px; background:#475569; color:#fff; border:none; border-radius:6px; cursor:pointer;">❌ বন্ধ করুন</button>
    </div>
  </div>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'অফিসিয়াল শিক্ষক ও স্টাফ পে-স্লিপ (Staff Payslip)',
        orientation: 'portrait',
        metaLeft: `মাস: <strong>${monthNameBn}</strong> | পদবি: <strong>${data.staff?.designation || ''}</strong>`,
        metaRight: `আইডি: <strong>${data.staff?.staffId || data.staff?.phone || '—'}</strong> | তারিখ: <strong>${formatDateDDMMYYYY(new Date())}</strong>`
      })}

      <div class="info-grid">
        <div>
          <div><strong>কর্মী নাম:</strong> ${data.staff?.name || ''}</div>
          <div><strong>পদবি:</strong> ${data.staff?.designation || ''}</div>
          <div><strong>ফোন:</strong> ${data.staff?.phone || '—'}</div>
        </div>
        <div style="text-align: right;">
          <div><strong>বেতন মাস:</strong> ${monthNameBn}</div>
          <div><strong>মূল বেতন:</strong> ৳${Number(data.salary?.baseSalary || 0).toLocaleString('en-IN')}</div>
          <div><strong>পরিশোধের অবস্থা:</strong> ${data.salary?.status === 'paid' ? 'পরিশোধিত' : 'বকেয়া'}</div>
        </div>
      </div>

      <div class="tables-grid">
        <div>
          <div style="font-weight:bold; margin-bottom:6px; color:#15803d;">ভাতা বিবরণী (+)</div>
          <table>
            <tbody>
              <tr><td>বাড়ি ভাড়া:</td><td style="text-align:right;">৳${data.salary?.allowances?.houseRent || 0}</td></tr>
              <tr><td>চিকিৎসা ভাতা:</td><td style="text-align:right;">৳${data.salary?.allowances?.medical || 0}</td></tr>
              <tr><td>যাতায়াত ভাতা:</td><td style="text-align:right;">৳${data.salary?.allowances?.conveyance || 0}</td></tr>
              <tr><td>বোনাস / অন্যান্য:</td><td style="text-align:right;">৳${data.salary?.allowances?.bonus || 0}</td></tr>
              <tr style="font-weight:bold; background:#f0fdf4;"><td>মোট ভাতা:</td><td style="text-align:right;">৳${data.salary?.totalAllowance || 0}</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <div style="font-weight:bold; margin-bottom:6px; color:#b91c1c;">কর্তন বিবরণী (-)</div>
          <table>
            <tbody>
              <tr><td>অনুপস্থিতি কর্তন:</td><td style="text-align:right;">৳${data.salary?.deductions?.absentDeduction || 0}</td></tr>
              <tr><td>বিলম্ব কর্তন:</td><td style="text-align:right;">৳${data.salary?.deductions?.lateDeduction || 0}</td></tr>
              <tr><td>অগ্রিম কর্তন:</td><td style="text-align:right;">৳${data.salary?.deductions?.advanceDeduction || 0}</td></tr>
              <tr><td>প্রভিডেন্ট ফান্ড / অন্যান্য:</td><td style="text-align:right;">৳${data.salary?.deductions?.other || 0}</td></tr>
              <tr style="font-weight:bold; background:#fef2f2;"><td>মোট কর্তন:</td><td style="text-align:right;">৳${data.salary?.totalDeduction || 0}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="net-banner">
        <div>
          <div style="font-size:12px; color:#0f766e; font-weight:bold;">নিট প্রদেয় বেতন (Net Payable):</div>
          <div style="font-size:20px; font-weight:800; color:#0f766e;">৳ ${Number(data.salary?.netSalary || 0).toLocaleString('en-IN')}</div>
          <div style="font-size:11px; color:#475569;">কথায়: ${data.netSalaryInWords || ''}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px; font-weight:bold; color:${data.salary?.status === 'paid' ? '#15803d' : '#b91c1c'};">
            ${data.salary?.status === 'paid' ? 'সম্পূর্ণ পরিশোধিত' : 'পরিশোধহীন / বকেয়া'}
          </div>
        </div>
      </div>

      ${getMadrasahFooterSignaturesHtml(
        selectedSignatureRoles.includes('প্রাপকের স্বাক্ষর')
          ? selectedSignatureRoles
          : ['প্রাপকের স্বাক্ষর', ...selectedSignatureRoles.filter(r => r !== 'প্রাপকের স্বাক্ষর')]
      )}
    </div>
  </div>
  <script>
    function triggerPrint() { window.focus(); setTimeout(function() { window.print(); }, 250); }
    if (document.readyState === 'complete') { triggerPrint(); } else { window.addEventListener('load', triggerPrint); }
  </script>
</body>
</html>`;
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  return (
    <div className="page-container animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toastMessage.type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 'rgba(16, 185, 129, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {toastMessage.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
          <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{toastMessage.text}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header" style={{ marginBottom: '22px' }}>
        <div>
          <div className="flex items-center gap-8 mb-4">
            <h1 className="page-title flex-center gap-8" style={{ fontSize: '1.65rem', fontWeight: 800 }}>
              <CreditCard className="text-primary" size={28} /> শিক্ষক ও স্টাফ বেতন ব্যবস্থাপনা (Payroll)
            </h1>
          </div>
          <p className="page-subtitle">প্রতিষ্ঠানের শিক্ষক ও স্টাফদের বেতন নির্ধারণ, হাজিরা ও অগ্রিম সমন্বয়, ভাতা এবং অফিশিয়াল পে-স্লিপ</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-12" style={{ flexWrap: 'wrap' }}>
          <button
            className="btn btn-outline btn-sm flex-center gap-6"
            onClick={handleGenerateSheet}
            disabled={syncing}
            title="সকল শিক্ষকের তথ্য ও হাজিরা রিফ্রেশ করুন"
          >
            <RefreshCw size={16} className={`text-primary ${syncing ? 'spin' : ''}`} />
            <span>{syncing ? 'সিঙ্ক হচ্ছে...' : 'শিট রিফ্রেশ'}</span>
          </button>

          <button
            className="btn btn-primary btn-sm flex-center gap-6"
            onClick={handleOpenBulkPay}
          >
            <Wallet size={16} />
            <span>এককালীন পরিশোধ (Bulk Pay)</span>
          </button>

          <button
            className="btn btn-outline btn-sm flex-center gap-6"
            onClick={handlePrint}
          >
            <Printer size={16} />
            <span>শিট প্রিন্ট</span>
          </button>
        </div>
      </div>

      {/* Month Navigator Bar */}
      <div className="card mb-20" style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div className="flex items-center gap-10">
          <button onClick={() => changeMonth(-1)} className="btn btn-outline btn-sm" title="পূর্ববর্তী মাস">
            <ChevronLeft size={18} />
          </button>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 16px',
            background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '10px', color: 'var(--primary)', fontWeight: 700, fontSize: '1.05rem'
          }}>
            <Calendar size={18} className="text-primary" />
            <span>{monthNameBn}</span>
          </div>
          <button onClick={() => changeMonth(1)} className="btn btn-outline btn-sm" title="পরবর্তী মাস">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-10">
          <label className="text-sm text-muted font-medium">মাস নির্বাচন:</label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="form-input font-mono"
            style={{ width: '160px', height: '36px', fontSize: '0.88rem' }}
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-4 mb-24" style={{ gap: '16px' }}>
        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #3b82f6' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>মোট শিক্ষক ও স্টাফ</span>
            <UserCheck size={18} style={{ color: '#3b82f6' }} />
          </div>
          <div className="text-2xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
            {(sheetData?.stats?.totalStaff ?? 0).toLocaleString('bn-BD')} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>জন</span>
          </div>
          <div className="text-xs text-muted" style={{ marginTop: '6px' }}>সক্রিয় কর্মরত জনবল</div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #0d9488' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>সর্বমোট নিট প্রদেয় বেতন</span>
            <DollarSign size={18} style={{ color: '#0d9488' }} />
          </div>
          <div className="text-2xl font-bold font-mono" style={{ color: '#0d9488' }}>
            ৳ {(sheetData?.stats?.totalNetPayable ?? 0).toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-muted" style={{ marginTop: '6px' }}>ভাতা ও কর্তন সমন্বয় শেষে</div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #10b981' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>পরিশোধিত বেতন</span>
            <CheckCheck size={18} className="text-success" />
          </div>
          <div className="text-2xl font-bold font-mono text-success">
            ৳ {(sheetData?.stats?.totalPaid ?? 0).toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-success font-medium" style={{ marginTop: '6px' }}>
            {(sheetData?.stats?.totalNetPayable || 0) > 0
              ? `${Math.round(((sheetData?.stats?.totalPaid || 0) / (sheetData?.stats?.totalNetPayable || 1)) * 100)}% পরিশোধ সম্পন্ন`
              : '০%'}
          </div>
        </div>

        <div className="card" style={{ padding: '20px', borderLeft: '4px solid #ef4444' }}>
          <div className="text-xs text-muted font-medium mb-4 flex items-center justify-between">
            <span>অবশিষ্ট বকেয়া</span>
            <Clock size={18} className="text-danger" />
          </div>
          <div className="text-2xl font-bold font-mono text-danger">
            ৳ {(sheetData?.stats?.totalDue ?? 0).toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-danger font-medium" style={{ marginTop: '6px' }}>পরিশোধযোগ্য বাকি</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card mb-20" style={{ padding: '14px 20px' }}>
        <div className="flex flex-wrap gap-14 justify-between items-center">
          <div style={{ position: 'relative', flex: 1, minWidth: '240px', maxWidth: '360px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="নাম, পদবি বা ফোন নম্বর দিয়ে খুঁজুন..."
              className="form-input"
              style={{ paddingLeft: '38px', height: '38px', fontSize: '0.88rem' }}
            />
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { id: 'all', label: `সকল (${sheetData?.records?.length || 0})` },
              { id: 'unpaid', label: 'বকেয়া' },
              { id: 'partial', label: 'আংশিক' },
              { id: 'paid', label: 'পরিশোধিত' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`btn btn-sm ${statusFilter === tab.id ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '8px', fontSize: '0.84rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <RefreshCw className="spin text-primary" size={36} />
            <p className="text-muted text-sm">বেতন তালিকা লোড হচ্ছে...</p>
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
            }}>
              <CreditCard size={32} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>কোনো কর্মীর বেতন রেকর্ড পাওয়া যায়নি</h3>
            <p className="text-muted text-sm" style={{ margin: 0, textAlign: 'center', maxWidth: '420px' }}>
              {searchQuery ? 'আপনার সার্চ ফিল্টারে কোনো তথ্য মেলেনি।' : 'শিট রিফ্রেশ করতে উপরের "শিট রিফ্রেশ" বাটনে ক্লিক করুন।'}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ minWidth: '180px' }}>কর্মী পরিচিতি</th>
                  <th style={{ textAlign: 'right', minWidth: '100px' }}>মূল বেতন</th>
                  <th style={{ minWidth: '140px' }}>ভাতা (+)</th>
                  <th style={{ minWidth: '140px' }}>কর্তন (-)</th>
                  <th style={{ textAlign: 'right', minWidth: '110px' }}>নিট প্রদেয়</th>
                  <th style={{ textAlign: 'right', minWidth: '110px' }}>পরিশোধিত</th>
                  <th style={{ textAlign: 'center', minWidth: '100px' }}>স্ট্যাটাস</th>
                  <th style={{ textAlign: 'center', width: '170px' }} className="print:hidden">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((rec) => {
                  const base = Number(rec.baseSalary) || 0;
                  const allow = Number(rec.totalAllowance) || 0;
                  const ded = Number(rec.totalDeduction) || 0;
                  const net = Number(rec.netSalary) || 0;
                  const paid = Number(rec.paidAmount) || 0;

                  return (
                    <tr key={rec._id}>
                      {/* কর্মী */}
                      <td>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.94rem' }}>{rec.staffName}</div>
                        <div className="flex items-center gap-6" style={{ marginTop: '3px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          <span className="badge badge-primary" style={{ fontSize: '0.72rem', padding: '2px 6px' }}>
                            {rec.designation}
                          </span>
                          {rec.phone && <span>{rec.phone}</span>}
                          {rec.isDraft && (
                            <span className="badge badge-warning" style={{ fontSize: '0.7rem', padding: '1px 5px' }}>
                              ড্রাফট
                            </span>
                          )}
                        </div>
                      </td>

                      {/* মূল বেতন */}
                      <td style={{ textAlign: 'right', fontWeight: 600, fontFamily: 'monospace' }}>
                        ৳{base.toLocaleString('en-IN')}
                      </td>

                      {/* সর্বমোট ভাতা */}
                      <td>
                        <span style={{ color: 'var(--success)', fontWeight: 600, fontFamily: 'monospace' }}>
                          +৳{allow.toLocaleString('en-IN')}
                        </span>
                        {allow > 0 && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            ভাড়া: ৳{Number(rec.houseRent || 0)} | বোনাস: ৳{Number(rec.festivalBonus || 0)}
                          </div>
                        )}
                      </td>

                      {/* সর্বমোট কর্তন */}
                      <td>
                        <span style={{ color: 'var(--danger)', fontWeight: 600, fontFamily: 'monospace' }}>
                          -৳{ded.toLocaleString('en-IN')}
                        </span>
                        {ded > 0 && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            অনুপস্থিত: {rec.absentDays} দিন (৳{Number(rec.absentDeduction || 0)})
                            {Number(rec.advanceDeduction) > 0 && ` | অগ্রিম: ৳${Number(rec.advanceDeduction)}`}
                          </div>
                        )}
                      </td>

                      {/* নিট প্রদেয় */}
                      <td style={{ textAlign: 'right', fontWeight: 800, color: '#0d9488', fontSize: '1rem', fontFamily: 'monospace' }}>
                        ৳{net.toLocaleString('en-IN')}
                      </td>

                      {/* পরিশোধিত */}
                      <td style={{ textAlign: 'right', fontWeight: 700, fontFamily: 'monospace' }}>
                        <div>৳{paid.toLocaleString('en-IN')}</div>
                        {rec.paymentDate && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {formatDateDDMMYYYY(rec.paymentDate)}
                          </div>
                        )}
                      </td>

                      {/* স্ট্যাটাস */}
                      <td style={{ textAlign: 'center' }}>
                        {rec.status === 'paid' ? (
                          <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                            <Check size={12} /> পরিশোধিত
                          </span>
                        ) : rec.status === 'partial' ? (
                          <span className="badge badge-warning" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                            <Clock size={12} /> আংশিক
                          </span>
                        ) : (
                          <span className="badge badge-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
                            <X size={12} /> বকেয়া
                          </span>
                        )}
                      </td>

                      {/* অ্যাকশন বাটনসমূহ */}
                      <td style={{ textAlign: 'center' }} className="print:hidden">
                        <div className="flex-center gap-6">
                          <button
                            onClick={() => handleOpenEdit(rec)}
                            disabled={rec.status === 'paid'}
                            className="btn btn-outline btn-xs flex-center gap-4"
                            style={{ padding: '4px 8px', borderRadius: '6px' }}
                            title="ভাতা ও কর্তন এডিট"
                          >
                            <Edit3 size={13} />
                            <span>এডিট</span>
                          </button>

                          <button
                            onClick={() => handleOpenPay(rec)}
                            disabled={rec.status === 'paid'}
                            className="btn btn-primary btn-xs"
                            style={{ padding: '4px 10px', borderRadius: '6px' }}
                            title="বেতন পরিশোধ"
                          >
                            পরিশোধ
                          </button>

                          <button
                            onClick={() => handleOpenPayslip(rec)}
                            className="btn btn-outline btn-xs flex-center gap-4"
                            style={{ padding: '4px 8px', borderRadius: '6px', color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)' }}
                            title="বেতন রশিদ দেখুন ও প্রিন্ট করুন"
                          >
                            <FileText size={13} />
                            <span>রশিদ</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MODAL 1: Edit Allowance & Deduction
      ───────────────────────────────────────────────────────────── */}
      {editModalOpen && editingRecord && (
        <div className="modal-backdrop" style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
            padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)'
          }}>
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setEditModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }} className="flex items-center gap-8">
                <Edit3 size={20} /> ভাতা ও কর্তন সমন্বয়
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                {editingRecord.staffName} ({editingRecord.designation}) — {monthNameBn}
              </p>
            </div>

            <form onSubmit={handleSaveEdit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Base Salary */}
              <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: '10px' }}>
                <label className="text-xs font-semibold mb-4" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  মূল বেতন (Base Salary)
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: 'var(--text-muted)' }}>৳</span>
                  <input
                    type="number"
                    value={editForm.baseSalary}
                    onChange={(e) => setEditForm({ ...editForm, baseSalary: Number(e.target.value) || 0 })}
                    className="form-input font-mono font-bold"
                    style={{ paddingLeft: '32px', height: '40px', fontSize: '1rem' }}
                    required
                  />
                </div>
              </div>

              {/* Allowances */}
              <div>
                <div className="flex-between mb-8" style={{ borderBottom: '1px solid rgba(16,185,129,0.2)', paddingBottom: '6px' }}>
                  <span className="text-xs font-bold text-success flex items-center gap-4">
                    <Plus size={14} /> ভাতা ও বোনাস সমূহ (+)
                  </span>
                  <span className="text-xs text-muted">সর্বমোট: ৳{editCalculations.totAllow.toLocaleString('en-IN')}</span>
                </div>
                <div className="grid grid-3" style={{ gap: '10px' }}>
                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>বাড়ি ভাড়া ভাতা</label>
                    <input
                      type="number"
                      value={editForm.houseRent}
                      onChange={(e) => setEditForm({ ...editForm, houseRent: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>চিকিৎসা ভাতা</label>
                    <input
                      type="number"
                      value={editForm.medicalAllowance}
                      onChange={(e) => setEditForm({ ...editForm, medicalAllowance: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>যাতায়াত ভাতা</label>
                    <input
                      type="number"
                      value={editForm.transportAllowance}
                      onChange={(e) => setEditForm({ ...editForm, transportAllowance: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>উৎসব / ঈদ বোনাস</label>
                    <input
                      type="number"
                      value={editForm.festivalBonus}
                      onChange={(e) => setEditForm({ ...editForm, festivalBonus: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>বিশেষ ভাতা</label>
                    <input
                      type="number"
                      value={editForm.specialAllowance}
                      onChange={(e) => setEditForm({ ...editForm, specialAllowance: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>
              </div>

              {/* Deductions */}
              <div>
                <div className="flex-between mb-8" style={{ borderBottom: '1px solid rgba(239,68,68,0.2)', paddingBottom: '6px' }}>
                  <span className="text-xs font-bold text-danger flex items-center gap-4">
                    <X size={14} /> কর্তন সমূহ (-)
                  </span>
                  <span className="text-xs text-muted">সর্বমোট: ৳{editCalculations.totDed.toLocaleString('en-IN')}</span>
                </div>
                <div className="grid grid-2" style={{ gap: '12px' }}>
                  {/* Absent Days & Deduction */}
                  <div style={{ background: 'rgba(239,68,68,0.06)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <div className="flex-between mb-4">
                      <span className="text-xs font-semibold text-danger">অনুপস্থিতি কর্তন</span>
                      <span className="text-xs text-muted">{editForm.absentDays} দিন অনুপস্থিত</span>
                    </div>
                    <div className="grid grid-2" style={{ gap: '8px' }}>
                      <input
                        type="number"
                        placeholder="দিন"
                        value={editForm.absentDays}
                        onChange={(e) => {
                          const days = Number(e.target.value) || 0;
                          const perDay = (Number(editForm.baseSalary) || 0) / 30;
                          setEditForm({
                            ...editForm,
                            absentDays: days,
                            absentDeduction: Math.round(days * perDay),
                          });
                        }}
                        className="form-input"
                        style={{ height: '34px', fontSize: '0.84rem' }}
                      />
                      <input
                        type="number"
                        placeholder="টাকা"
                        value={editForm.absentDeduction}
                        onChange={(e) => setEditForm({ ...editForm, absentDeduction: Number(e.target.value) || 0 })}
                        className="form-input font-mono font-bold text-danger"
                        style={{ height: '34px', fontSize: '0.84rem' }}
                      />
                    </div>
                  </div>

                  {/* Advance Deduction */}
                  <div style={{ background: 'rgba(245,158,11,0.06)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.15)' }}>
                    <div className="flex-between mb-4">
                      <span className="text-xs font-semibold text-warning">অগ্রিম বেতন সমন্বয়</span>
                      {editingRecord.pendingAdvance > 0 && (
                        <button
                          type="button"
                          onClick={() => setEditForm({ ...editForm, advanceDeduction: editingRecord.pendingAdvance })}
                          style={{ fontSize: '0.72rem', color: 'var(--accent-600, #d97706)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                        >
                          বাকি: ৳{editingRecord.pendingAdvance} (সব কর্তন)
                        </button>
                      )}
                    </div>
                    <input
                      type="number"
                      value={editForm.advanceDeduction}
                      onChange={(e) => setEditForm({ ...editForm, advanceDeduction: Number(e.target.value) || 0 })}
                      className="form-input font-mono font-bold text-warning"
                      style={{ height: '34px', fontSize: '0.84rem' }}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>কল্যাণ / প্রভিডেন্ট ফান্ড</label>
                    <input
                      type="number"
                      value={editForm.providentFund}
                      onChange={(e) => setEditForm({ ...editForm, providentFund: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-muted mb-2" style={{ display: 'block' }}>অন্যান্য কর্তন / জরিমানা</label>
                    <input
                      type="number"
                      value={editForm.otherDeduction}
                      onChange={(e) => setEditForm({ ...editForm, otherDeduction: Number(e.target.value) || 0 })}
                      className="form-input font-mono"
                      style={{ height: '36px', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>
              </div>

              {/* Net Banner */}
              <div style={{
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                padding: '14px 18px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div>
                  <div className="text-xs font-bold text-success uppercase">সমন্বিত নিট প্রদেয় বেতন:</div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'monospace' }}>
                    ৳ {editCalculations.netSalary.toLocaleString('en-IN')}
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  মূল: ৳{editForm.baseSalary} + ভাতা: ৳{editCalculations.totAllow} - কর্তন: ৳{editCalculations.totDed}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-10" style={{ paddingTop: '8px' }}>
                <button type="button" onClick={() => setEditModalOpen(false)} className="btn btn-outline btn-sm">
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary btn-sm flex-center gap-6">
                  <Check size={16} /> সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL 2: Single Payment Modal
      ───────────────────────────────────────────────────────────── */}
      {payModalOpen && payingRecord && (
        <div className="modal-backdrop" style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '480px', padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)'
          }}>
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setPayModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }} className="flex items-center gap-8">
                <CreditCard size={20} /> বেতন পরিশোধ
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                {payingRecord.staffName} ({payingRecord.designation}) — {monthNameBn}
              </p>
            </div>

            <form onSubmit={handleSavePay} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  পরিশোধের পরিমাণ (টাকা) <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: 'var(--text-muted)' }}>৳</span>
                  <input
                    type="number"
                    value={payForm.amount}
                    onChange={(e) => setPayForm({ ...payForm, amount: Number(e.target.value) || 0 })}
                    className="form-input font-mono font-bold"
                    style={{ paddingLeft: '32px', height: '42px', fontSize: '1.2rem', color: 'var(--primary)' }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  তহবিল / ফান্ড অ্যাকাউন্ট (Debit) <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <select
                  value={payForm.fundAccountId}
                  onChange={(e) => setPayForm({ ...payForm, fundAccountId: e.target.value })}
                  className="form-input"
                  style={{ height: '40px', fontSize: '0.9rem' }}
                  required
                >
                  <option value="">তহবিল নির্বাচন করুন...</option>
                  {(sheetData?.fundAccounts || []).map(f => (
                    <option key={f._id} value={f._id}>
                      {f.name} (ব্যালেন্স: ৳{Number(f.balance || 0).toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-2" style={{ gap: '12px' }}>
                <div>
                  <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>পরিশোধ মাধ্যম</label>
                  <select
                    value={payForm.paymentMethod}
                    onChange={(e) => setPayForm({ ...payForm, paymentMethod: e.target.value })}
                    className="form-input"
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  >
                    <option value="cash">নগদ (Cash)</option>
                    <option value="bank">ব্যাংক (Bank)</option>
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                    <option value="rocket">রকেট (Rocket)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>তারিখ</label>
                  <input
                    type="date"
                    value={payForm.paymentDate}
                    onChange={(e) => setPayForm({ ...payForm, paymentDate: e.target.value })}
                    className="form-input font-mono"
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>মন্তব্য / রেফারেন্স</label>
                <input
                  type="text"
                  placeholder="যেমন: সরাসরি নগদ প্রদান"
                  value={payForm.notes}
                  onChange={(e) => setPayForm({ ...payForm, notes: e.target.value })}
                  className="form-input"
                  style={{ height: '38px', fontSize: '0.88rem' }}
                />
              </div>

              <div style={{
                background: 'var(--bg-tertiary)', padding: '10px 14px', borderRadius: '8px',
                fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px'
              }}>
                <div className="flex items-center gap-6">
                  <CheckCheck size={14} className="text-success" />
                  <span>অ্যাকাউন্টিং কোড ৫০০১ (বেতন ও ভাতা) এর স্বয়ংক্রিয় খরচের ভাউচার তৈরি হবে</span>
                </div>
                {Number(payingRecord.advanceDeduction) > 0 && (
                  <div className="flex items-center gap-6 text-warning">
                    <CheckCheck size={14} className="text-warning" />
                    <span>৳{payingRecord.advanceDeduction} অগ্রিম হিসাব থেকে সমন্বয় হবে</span>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-10" style={{ paddingTop: '8px' }}>
                <button type="button" onClick={() => setPayModalOpen(false)} className="btn btn-outline btn-sm">
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary btn-sm flex-center gap-6">
                  <Check size={16} /> পরিশোধ নিশ্চিত করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL 3: Bulk Payment Modal
      ───────────────────────────────────────────────────────────── */}
      {bulkPayModalOpen && (
        <div className="modal-backdrop" style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '520px', padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)'
          }}>
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setBulkPayModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--primary)' }} className="flex items-center gap-8">
                <Wallet size={20} /> এককালীন বেতন পরিশোধ (Bulk Pay)
              </h2>
              <p className="text-muted text-xs" style={{ margin: 0 }}>
                {monthNameBn} মাসের সকল বকেয়া বেতন এক ক্লিকে পরিশোধ
              </p>
            </div>

            <form onSubmit={handleSaveBulkPay} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                padding: '14px 18px', borderRadius: '10px'
              }}>
                <div className="flex-between">
                  <span className="text-xs font-semibold text-muted">নির্বাচিত কর্মী সংখ্যা:</span>
                  <span className="text-sm font-bold text-success font-mono">{selectedBulkIds.length} জন</span>
                </div>
                <div className="flex-between" style={{ marginTop: '8px' }}>
                  <span className="text-xs font-semibold text-muted">সর্বমোট প্রদেয় বেতন:</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'monospace' }}>
                    ৳ {bulkTotalPayable.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>
                  তহবিল / ফান্ড অ্যাকাউন্ট (Debit) <span style={{ color: 'var(--danger)' }}>*</span>
                </label>
                <select
                  value={bulkForm.fundAccountId}
                  onChange={(e) => setBulkForm({ ...bulkForm, fundAccountId: e.target.value })}
                  className="form-input"
                  style={{ height: '40px', fontSize: '0.9rem' }}
                  required
                >
                  <option value="">তহবিল নির্বাচন করুন...</option>
                  {(sheetData?.fundAccounts || []).map(f => (
                    <option key={f._id} value={f._id}>
                      {f.name} (ব্যালেন্স: ৳{Number(f.balance || 0).toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-2" style={{ gap: '12px' }}>
                <div>
                  <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>পরিশোধ মাধ্যম</label>
                  <select
                    value={bulkForm.paymentMethod}
                    onChange={(e) => setBulkForm({ ...bulkForm, paymentMethod: e.target.value })}
                    className="form-input"
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  >
                    <option value="cash">নগদ (Cash)</option>
                    <option value="bank">ব্যাংক (Bank)</option>
                    <option value="bkash">বিকাশ (bKash)</option>
                    <option value="nagad">নগদ (Nagad)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold mb-2" style={{ display: 'block', color: 'var(--text-secondary)' }}>তারিখ</label>
                  <input
                    type="date"
                    value={bulkForm.paymentDate}
                    onChange={(e) => setBulkForm({ ...bulkForm, paymentDate: e.target.value })}
                    className="form-input font-mono"
                    style={{ height: '38px', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-10" style={{ paddingTop: '8px' }}>
                <button type="button" onClick={() => setBulkPayModalOpen(false)} className="btn btn-outline btn-sm">
                  বাতিল
                </button>
                <button
                  type="submit"
                  disabled={selectedBulkIds.length === 0}
                  className="btn btn-primary btn-sm flex-center gap-6"
                >
                  <Check size={16} /> এক ক্লিকে পরিশোধ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODAL 4: Official Payslip (বেতন রশিদ)
      ───────────────────────────────────────────────────────────── */}
      {payslipModalOpen && (
        <div className="modal-backdrop" style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '680px', maxHeight: '92vh', overflowY: 'auto',
            padding: '24px', position: 'relative', boxShadow: 'var(--shadow-lg)'
          }}>
            <div className="flex-between mb-16 print:hidden" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <h3 className="font-bold flex items-center gap-8" style={{ fontSize: '1.15rem', color: 'var(--primary)' }}>
                <FileText size={20} /> কর্মীর অফিশিয়াল পে-স্লিপ / বেতন রশিদ
              </h3>
              <div className="flex items-center gap-8">
                <button onClick={() => handlePrintPayslip(payslipData)} className="btn btn-primary btn-sm flex-center gap-6">
                  <Printer size={15} /> প্রিন্ট
                </button>
                <button onClick={() => setPayslipModalOpen(false)} className="btn btn-ghost btn-xs text-muted">
                  <X size={20} />
                </button>
              </div>
            </div>

            {loadingPayslip || !payslipData ? (
              <div className="flex-center flex-column gap-12" style={{ padding: '60px 20px' }}>
                <RefreshCw className="spin text-primary" size={32} />
                <p className="text-muted text-sm">পে-স্লিপ প্রস্তুত হচ্ছে...</p>
              </div>
            ) : (
              <div style={{ background: '#fff', color: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', borderBottom: '2px solid #0d9488', paddingBottom: '14px' }}>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>{payslipData.institution?.name}</h2>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0' }}>
                    {payslipData.institution?.address} | ফোন: {payslipData.institution?.phone}
                  </p>
                  <div style={{
                    display: 'inline-block', marginTop: '6px', padding: '4px 16px',
                    background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '20px',
                    fontSize: '0.78rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase'
                  }}>
                    বেতন রশিদ / PAYSLIP — {monthNameBn}
                  </div>
                </div>

                {/* Staff Info Grid */}
                <div className="grid grid-2" style={{ gap: '10px', background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', margin: '14px 0', fontSize: '0.82rem', border: '1px solid #e2e8f0' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>কর্মীর নাম:</span>{' '}
                    <strong style={{ color: '#0f172a' }}>{payslipData.salary?.staffName}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>পদবি:</span>{' '}
                    <strong style={{ color: '#0f172a' }}>{payslipData.salary?.designation}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>মোবাইল:</span>{' '}
                    <span>{payslipData.salary?.phone || '—'}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>ভাউচার নম্বর:</span>{' '}
                    <strong style={{ color: '#0d9488', fontFamily: 'monospace' }}>{payslipData.salary?.voucherNumber || '—'}</strong>
                  </div>
                </div>

                {/* Earnings vs Deductions Table */}
                <div className="grid grid-2" style={{ gap: '14px' }}>
                  {/* Earnings */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                    <div style={{ background: '#f0fdf4', padding: '8px 12px', fontSize: '0.78rem', fontWeight: 700, color: '#15803d', borderBottom: '1px solid #e2e8f0' }}>
                      আয় ও ভাতা সমূহ (Earnings)
                    </div>
                    <div style={{ padding: '10px 12px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div className="flex-between">
                        <span>মূল বেতন (Basic)</span>
                        <strong>৳{Number(payslipData.salary?.baseSalary || 0).toLocaleString('en-IN')}</strong>
                      </div>
                      <div className="flex-between">
                        <span>বাড়ি ভাড়া ভাতা</span>
                        <span>৳{Number(payslipData.salary?.houseRent || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>চিকিৎসা ভাতা</span>
                        <span>৳{Number(payslipData.salary?.medicalAllowance || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>যাতায়াত ভাতা</span>
                        <span>৳{Number(payslipData.salary?.transportAllowance || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>বোনাস / বিশেষ ভাতা</span>
                        <span>৳{(Number(payslipData.salary?.festivalBonus || 0) + Number(payslipData.salary?.specialAllowance || 0)).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '6px', fontWeight: 700, color: '#15803d' }}>
                        <span>সর্বমোট আয়:</span>
                        <span>৳{(Number(payslipData.salary?.baseSalary || 0) + Number(payslipData.salary?.totalAllowance || 0)).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deductions */}
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                    <div style={{ background: '#fef2f2', padding: '8px 12px', fontSize: '0.78rem', fontWeight: 700, color: '#b91c1c', borderBottom: '1px solid #e2e8f0' }}>
                      কর্তন সমূহ (Deductions)
                    </div>
                    <div style={{ padding: '10px 12px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div className="flex-between">
                        <span>অনুপস্থিতি ({payslipData.salary?.absentDays || 0} দিন)</span>
                        <span>৳{Number(payslipData.salary?.absentDeduction || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>অগ্রিম বেতন সমন্বয়</span>
                        <span>৳{Number(payslipData.salary?.advanceDeduction || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>কল্যাণ / প্রভিডেন্ট ফান্ড</span>
                        <span>৳{Number(payslipData.salary?.providentFund || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between">
                        <span>অন্যান্য কর্তন</span>
                        <span>৳{Number(payslipData.salary?.otherDeduction || 0).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex-between" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '6px', fontWeight: 700, color: '#b91c1c' }}>
                        <span>সর্বমোট কর্তন:</span>
                        <span>৳{Number(payslipData.salary?.totalDeduction || 0).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Net Banner */}
                <div style={{
                  background: '#f0fdfa', border: '1px solid #99f6e4', padding: '12px 16px',
                  borderRadius: '8px', marginTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase' }}>
                      নিট প্রদেয় বেতন (Net Payable):
                    </span>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#134e4a', fontFamily: 'monospace' }}>
                      ৳ {Number(payslipData.salary?.netSalary || 0).toLocaleString('en-IN')}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#0f766e', marginTop: '2px' }}>
                      কথায়: {payslipData.netSalaryInWords}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>অবস্থা:</span>
                    <div style={{ marginTop: '2px' }}>
                      {payslipData.salary?.status === 'paid' ? (
                        <span style={{ padding: '3px 10px', background: '#dcfce7', color: '#15803d', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                          পরিশোধিত
                        </span>
                      ) : (
                        <span style={{ padding: '3px 10px', background: '#fee2e2', color: '#b91c1c', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                          বকেয়া
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Signatures */}
                <div className="grid grid-3" style={{ gap: '20px', textAlign: 'center', fontSize: '0.75rem', marginTop: '38px', color: '#475569' }}>
                  <div style={{ borderTop: '1px solid #94a3b8', paddingTop: '6px' }}>
                    <strong>প্রাপকের স্বাক্ষর</strong>
                  </div>
                  <div style={{ borderTop: '1px solid #94a3b8', paddingTop: '6px' }}>
                    <strong>প্রতিষ্ঠান প্রধান</strong>
                  </div>
                  <div style={{ borderTop: '1px solid #94a3b8', paddingTop: '6px' }}>
                    <strong>পরিচালক</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── ডেডিকেটেড A4 বেতন শিট (ব্রাউজার প্রিন্ট রেন্ডার) ── */}
      <div className="salary-print-sheet">
        {renderPrintableContent()}
      </div>

      {/* ── বেতন শিট প্রিন্ট প্রিভিউ ও সেটিংস মোডাল (Interactive Print Preview Modal) ── */}
      {showPrintModal && (
        <div className="print-modal-overlay no-print" style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: windowWidth < 640 ? '6px' : '16px', backdropFilter: 'blur(6px)'
        }}>
          <div className="card print-modal-card animate-scale-up" style={{
            width: '100%', maxWidth: '1060px', maxHeight: '96vh',
            display: 'flex', flexDirection: 'column', borderRadius: '16px',
            background: 'var(--bg-card)', padding: 0, overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)', border: '1px solid var(--border-color)'
          }}>
            {/* Modal Header */}
            <div className="print-preview-modal-header" style={{
              padding: '12px 18px', borderBottom: '1px solid var(--border-color)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'var(--bg-tertiary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={18} className="text-primary" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  মাসিক শিক্ষক ও স্টাফ বেতন শিট প্রিন্ট প্রিভিউ ও সেটিংস ({monthNameBn})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                title="বন্ধ করুন"
              >
                <X size={20} />
              </button>
            </div>

            {/* Controls Bar: Roles & Actions (no-print) */}
            <div className="print-preview-controls no-print" style={{
              padding: '10px 18px', borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>✍️ ফুটার স্বাক্ষরকারী রোল নির্বাচন:</span>
                  <span style={{ fontSize: '0.72rem', color: selectedSignatureRoles.length >= MAX_SIGNATURE_ROLES ? '#f59e0b' : 'var(--text-muted)' }}>
                    (সর্বোচ্চ ৫টি, নির্বাচিত: {selectedSignatureRoles.length}টি)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* Orientation Toggle Buttons */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f1f5f9',
                    padding: '2px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    gap: '2px'
                  }}>
                    <button
                      type="button"
                      onClick={() => setOrientation('portrait')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        background: orientation === 'portrait' ? '#0f766e' : 'transparent',
                        color: orientation === 'portrait' ? '#ffffff' : '#475569',
                        transition: 'all 0.15s ease'
                      }}
                      title="A4 Portrait মোডে প্রিন্ট করুন"
                    >
                      <span>📄</span> পোর্ট্রেট (A4)
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrientation('landscape')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        background: orientation === 'landscape' ? '#0f766e' : 'transparent',
                        color: orientation === 'landscape' ? '#ffffff' : '#475569',
                        transition: 'all 0.15s ease'
                      }}
                      title="A4 Landscape মোডে প্রিন্ট করুন"
                    >
                      <span>🖼️</span> ল্যান্ডস্কেপ (A4)
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleExecutePrint}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 16px', fontWeight: 700, fontSize: '0.82rem' }}
                  >
                    <Printer size={15} /> প্রিন্ট করুন ({orientation === 'landscape' ? 'A4 Landscape' : 'A4 Portrait'})
                  </button>
                </div>
              </div>

              {/* Universal Signature Role Selector */}
              <PrintSignatureRoleSelector
                selectedRoles={selectedSignatureRoles}
                onChange={(roles) => {
                  setSelectedSignatureRoles(roles);
                  try {
                    localStorage.setItem('annur_footer_roles__salary_sheet', JSON.stringify(roles));
                  } catch (_) {}
                }}
                additionalRoles={customRolesList}
                style={{ marginBottom: '0', background: 'transparent', border: 'none', padding: '0' }}
              />
            </div>


            {/* View Mode Toolbar (no-print) */}
            <div className="print-preview-view-mode-bar no-print" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 14px', background: '#1e293b', borderBottom: '1px solid #334155',
              flexWrap: 'wrap', gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#94a3b8' }}>ভিউ মোড:</span>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('scroll')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'scroll' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>↔️ ১০০% ফুল সাইজ (সাইড স্ক্রল)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewZoom('fit')}
                  style={{
                    padding: '4px 10px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '0.74rem', fontWeight: 700,
                    background: previewZoom === 'fit' ? '#0284c7' : '#334155',
                    color: '#fff', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <span>📱 স্ক্রিনে ফিট ({Math.round(mobileFitScale * 100)}%)</span>
                </button>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 600 }}>
                {previewZoom === 'scroll' ? '👉 ডানে-বামে আঙুল দিয়ে স্ক্রল করে পুরো শিট দেখুন' : '✓ পুরো শিট স্ক্রিনে দেখা যাচ্ছে'}
              </div>
            </div>

            {/* Scrollable Viewport Container (Horizontal & Vertical Touch Scrolling) */}
            <div
              className="print-preview-viewport"
              style={{
                flex: 1,
                overflowX: 'auto',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: windowWidth < 640 ? '8px' : '20px',
                background: '#0f172a',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: previewZoom === 'fit' ? '100%' : 'max-content',
                  minWidth: previewZoom === 'fit' ? '100%' : `${baseSheetWidth}px`,
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: previewZoom === 'fit' ? 'hidden' : 'visible'
                }}
              >
                <div
                  className="print-paper-sheet"
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '20px 24px',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
                    width: `${baseSheetWidth}px`,
                    minWidth: `${baseSheetWidth}px`,
                    position: 'relative',
                    transform: previewZoom === 'fit' ? `scale(${mobileFitScale})` : 'none',
                    transformOrigin: 'top center'
                  }}
                >
                  {renderPrintableContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .salary-print-sheet {
          display: none !important;
        }
        @media print {
          @page {
            size: A4 ${orientation};
            margin: ${orientation === 'landscape' ? '8mm 6mm' : '8mm 8mm'};
          }
          .no-print,
          .sidebar,
          .topbar,
          .mobile-sidebar-overlay,
          .modal-backdrop,
          .print-modal-overlay,
          .page-header,
          .card,
          .btn,
          nav,
          header:not(#madrasah-official-header):not(.madrasah-letterhead-root) {
            display: none !important;
          }
          body, html, #root, .dashboard-layout, .main-content, .page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            overflow: visible !important;
            min-height: auto !important;
          }
          .salary-print-sheet {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100% !important;
            width: 100% !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-sizing: border-box !important;
          }
          .salary-print-sheet #madrasah-official-header,
          .salary-print-sheet .madrasah-letterhead-root {
            display: block !important;
            width: 100% !important;
          }
          .salary-print-table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin-top: 8px !important;
            font-size: 8.5pt !important;
          }
          .salary-print-table th,
          .salary-print-table td {
            border: 1px solid #333333 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
            line-height: 1.25 !important;
          }
          .salary-print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .salary-print-table thead {
            display: table-header-group !important;
          }
          .salary-print-table tbody tr {
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}
