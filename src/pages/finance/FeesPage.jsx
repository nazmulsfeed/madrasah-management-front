import { useState, useEffect, useMemo } from 'react';
import { 
  Plus, CreditCard, Receipt, Search, X, CheckCircle, AlertCircle, 
  Loader, Eye, DollarSign, Calendar, FileText, Printer, Check, Trash2, Settings, Bell, Edit, RotateCcw
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

const MONTHS = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

export default function FeesPage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const [invoices, setInvoices] = useState([]);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingLoading, setPendingLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sendingReminders, setSendingReminders] = useState(false);
  const [toast, setToast] = useState(null);

  // Tabs: 'invoices' or 'pending' (pending tab is admin/staff only)
  const [activeTab, setActiveTab] = useState('invoices');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal States
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSlipModalOpen, setIsSlipModalOpen] = useState(false);
  const [isClassFeeModalOpen, setIsClassFeeModalOpen] = useState(false);
  const [isGeneratorModalOpen, setIsGeneratorModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [selectedPendingPayment, setSelectedPendingPayment] = useState(null);
  const [verifyForm, setVerifyForm] = useState({ fundAccount: '', revenueAccount: '' });
  const [seedingAccounts, setSeedingAccounts] = useState(false);

  // ── Pre-defined Signature Roles Facility for Receipts ──
  const MAX_SIGNATURE_ROLES = 5;
  const DEFAULT_RECEIPT_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, বালক শাখা'
  ];
  const PRESET_RECEIPT_ROLES = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান',
    'প্রধান শিক্ষক, নূরানী বিভাগ',
    'প্রধান শিক্ষক, বালক শাখা',
    'প্রধান শিক্ষিকা, বালিকা শাখা',
    'শ্রেণী শিক্ষকের স্বাক্ষর'
  ];

  const [selectedReceiptRoles, setSelectedReceiptRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__receipt');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return DEFAULT_RECEIPT_ROLES;
    } catch {
      return DEFAULT_RECEIPT_ROLES;
    }
  });

  const [customReceiptRoles, setCustomReceiptRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_custom_roles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newCustomReceiptRole, setNewCustomReceiptRole] = useState('');

  const handleToggleReceiptRole = (role) => {
    let next;
    if (selectedReceiptRoles.includes(role)) {
      if (selectedReceiptRoles.length <= 1) {
        setToast({ type: 'error', message: 'কমপক্ষে ১টি স্বাক্ষর রোল নির্বাচন থাকতে হবে' });
        return;
      }
      next = selectedReceiptRoles.filter(r => r !== role);
    } else {
      if (selectedReceiptRoles.length >= MAX_SIGNATURE_ROLES) {
        setToast({ type: 'error', message: `সর্বোচ্চ ${MAX_SIGNATURE_ROLES}টি স্বাক্ষর রোল নির্বাচন করা যাবে` });
        return;
      }
      next = [...selectedReceiptRoles, role];
    }
    setSelectedReceiptRoles(next);
    try {
      localStorage.setItem('annur_footer_roles__receipt', JSON.stringify(next));
    } catch (_) {}
  };

  const handleAddCustomReceiptRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newCustomReceiptRole.trim();
    if (!trimmed) return;
    if (PRESET_RECEIPT_ROLES.includes(trimmed) || customReceiptRoles.includes(trimmed)) {
      setToast({ type: 'error', message: 'এই পদবিটি তালিকায় আগেই আছে' });
      return;
    }
    const nextCustom = [...customReceiptRoles, trimmed];
    setCustomReceiptRoles(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedReceiptRoles.length < MAX_SIGNATURE_ROLES) {
      const nextSelected = [...selectedReceiptRoles, trimmed];
      setSelectedReceiptRoles(nextSelected);
      try {
        localStorage.setItem('annur_footer_roles__receipt', JSON.stringify(nextSelected));
      } catch (_) {}
    }
    setNewCustomReceiptRole('');
    setToast({ type: 'success', message: `"${trimmed}" পদবি সফলভাবে যুক্ত হয়েছে` });
  };

  const handleDeleteCustomReceiptRole = (role, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextCustom = customReceiptRoles.filter(r => r !== role);
    setCustomReceiptRoles(nextCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(nextCustom));
    } catch (_) {}

    if (selectedReceiptRoles.includes(role)) {
      const nextSelected = selectedReceiptRoles.filter(r => r !== role);
      const fallback = nextSelected.length > 0 ? nextSelected : DEFAULT_RECEIPT_ROLES;
      setSelectedReceiptRoles(fallback);
      try {
        localStorage.setItem('annur_footer_roles__receipt', JSON.stringify(fallback));
      } catch (_) {}
    }
  };

  // Super Admin Edit Invoice State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    feeCategory: '',
    dueDate: '',
    subtotal: 0,
    discountTotal: 0,
    discountType: 'বিশেষ ছাড়',
    fineTotal: 0,
  });

  // Class fees editing temp state (object of objects: { [classId]: { monthlyFee, admissionFee, sessionFee, examFee } })
  const [classFeeInputs, setClassFeeInputs] = useState({});

  // Unified Invoice & Payment Form State
  const [unifiedForm, setUnifiedForm] = useState({
    student: '',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString().split('T')[0],
    includeMonthlyFee: true,
    monthlyFeeRate: '',
    selectedMonths: [MONTHS[new Date().getMonth()]],
    includeAdmissionFee: false,
    admissionFeeAmount: 0,
    includeExamFee: false,
    examFeeAmount: 0,
    includeSessionFee: false,
    sessionFeeAmount: 0,
    includeOtherFee: false,
    otherFeeTitle: '',
    otherFeeAmount: 0,
    discountTotal: 0,
    discountType: 'বিশেষ ছাড়',
    fineTotal: 0,
    payNow: true,
    paymentAmount: 0,
    method: 'cash',
    transactionReference: '',
    fundAccount: '',
    revenueAccount: '',
  });

  // Payment Form State (For paying an EXISTING invoice from the list)
  const [paymentForm, setPaymentForm] = useState({
    amount: 0,
    method: 'bkash',
    transactionReference: '',
    feeMonth: MONTHS[new Date().getMonth()],
    fundAccount: '',
    revenueAccount: '',
  });

  // Invoice Generator Form State
  const [generatorForm, setGeneratorForm] = useState({
    category: 'monthlyFee',
    month: MONTHS[new Date().getMonth()],
    year: String(new Date().getFullYear()),
  });

  // Permissions helpers
  const canManage = [
    'super_admin', 'co_super_admin', 'admin', 'principal', 'accountant'
  ].includes(user?.userType) || [
    'co_super_admin', 'admin'
  ].includes(user?.adminRole);

  const isSuperAdmin = user?.userType === 'super_admin' || 
                       user?.userType === 'co_super_admin' || 
                       user?.userType === 'admin' ||
                       user?.adminRole === 'co_super_admin' ||
                       user?.adminRole === 'admin';

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const res = await api.get('/finance/invoices');
      if (res.data.success) {
        setInvoices(res.data.data.invoices || []);
      }
    } catch (error) {
      console.error('Error fetching invoices:', error);
      setToast({ type: 'error', message: 'ইনভয়েস তালিকা লোড করতে ব্যর্থ হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await api.get('/students', { params: { limit: 1000 } });
      if (res.data.success) {
        setStudents(res.data.data || []);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const res = await api.get('/students/classes');
      if (res.data.success) {
        setClasses(res.data.data.classes || []);
        const fees = {};
        res.data.data.classes.forEach(c => {
          fees[c._id] = {
            monthlyFee: c.monthlyFee || 0,
            admissionFee: c.admissionFee || 0,
            sessionFee: c.sessionFee || 0,
            examFee: c.examFee || 0
          };
        });
        setClassFeeInputs(fees);
      }
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const fetchPendingPayments = async () => {
    if (!canManage) return;
    try {
      setPendingLoading(true);
      const res = await api.get('/finance/payments/pending');
      if (res.data.success) {
        setPendingPayments(res.data.data.payments || []);
      }
    } catch (error) {
      console.error('Error fetching pending payments:', error);
    } finally {
      setPendingLoading(false);
    }
  };

  const fetchIncomeCategories = async () => {
    try {
      const res = await api.get('/finance/income-categories', { params: { type: 'student_fee' } });
      if (res.data.success) {
        setIncomeCategories(res.data.data.categories || []);
      }
    } catch (error) {
      console.error('Error fetching income categories:', error);
    }
  };

  const fetchAccounts = async () => {
    try {
      const res = await api.get('/accounting/accounts');
      if (res.data.success) {
        setAccounts(res.data.data.accounts || []);
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    fetchInvoices();
    fetchStudents();
    fetchClasses();
    fetchIncomeCategories();
    fetchAccounts();
    if (canManage) {
      fetchPendingPayments();
    }
  }, [user]);

  // Set default student if user is a student or guardian
  useEffect(() => {
    if (students.length > 0) {
      if (user?.userType === 'student') {
        const studentDoc = students.find(s => s._id === user.profileId || s.user?._id === user._id);
        if (studentDoc) {
          setUnifiedForm(prev => ({ ...prev, student: studentDoc._id }));
        }
      } else if (user?.userType === 'guardian') {
        setUnifiedForm(prev => ({ ...prev, student: students[0]?._id || '' }));
      }
    }
  }, [students, user]);

  // Invoice calculations
  const totalInvoiced = invoices.length;
  const totalPaid = invoices.reduce((sum, inv) => sum + (inv.paidTotal || 0), 0);
  const totalDue = invoices.reduce((sum, inv) => sum + (inv.balance || 0), 0);

  // Filter invoices
  const filteredInvoices = invoices.filter((inv) => {
    const studentName = inv.student?.user ? `${inv.student.user.firstName || ''} ${inv.student.user.lastName || ''}`.toLowerCase() : '';
    const studentId = (inv.student?.studentId || '').toLowerCase();
    const guardianName = (inv.guardian?.name || '').toLowerCase();
    const invoiceTitle = (inv.title || '').toLowerCase();
    const invoiceNum = (inv.invoiceNumber || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch = 
      studentName.includes(query) || 
      studentId.includes(query) || 
      guardianName.includes(query) || 
      invoiceTitle.includes(query) || 
      invoiceNum.includes(query);

    const matchesStatus = 
      statusFilter === 'all' || 
      (statusFilter === 'paid' && inv.status === 'paid') ||
      (statusFilter === 'partial' && inv.status === 'partial') ||
      (statusFilter === 'unpaid' && inv.status === 'unpaid');

    return matchesSearch && matchesStatus;
  });

  // State for Dues Report filters
  const [duesClassFilter, setDuesClassFilter] = useState('all');
  const [duesSearchQuery, setDuesSearchQuery] = useState('');

  // Group unpaid/partial invoices by student for Consolidated Dues Report
  const studentDuesSummary = useMemo(() => {
    const unpaidInvoices = invoices.filter(inv => (inv.balance || 0) > 0);
    const studentMap = {};

    unpaidInvoices.forEach(inv => {
      const sId = typeof inv.student === 'object' ? inv.student?._id : inv.student;
      if (!sId) return;

      const studentDoc = students.find(s => s._id === sId) || (typeof inv.student === 'object' ? inv.student : null);

      if (!studentMap[sId]) {
        const studentUser = studentDoc?.user || inv.student?.user;
        const studentName = studentUser?.fullName ||
          `${studentUser?.firstName || ''} ${studentUser?.lastName || ''}`.trim() || 'নামবিহীন শিক্ষার্থী';
        const studentCode = studentDoc?.studentId || inv.student?.studentId || '—';
        const roll = studentDoc?.currentEnrollment?.rollNumber || inv.student?.currentEnrollment?.rollNumber || '—';
        const classObj = studentDoc?.currentEnrollment?.classLevel || inv.student?.currentEnrollment?.classLevel;
        const className = typeof classObj === 'object' ? classObj?.name : (classes.find(c => c._id === classObj)?.name || '—');
        const classId = typeof classObj === 'object' ? classObj?._id : classObj;
        const sectionObj = studentDoc?.currentEnrollment?.section || inv.student?.currentEnrollment?.section;
        const sectionName = typeof sectionObj === 'object' ? sectionObj?.name : (sectionObj || '—');

        const guardianName = studentDoc?.guardian?.name || inv.student?.guardian?.name || studentDoc?.fatherName || inv.guardian?.name || '—';
        const guardianPhone = studentDoc?.guardian?.phone || inv.student?.guardian?.phone || studentDoc?.user?.phone || inv.guardian?.phone || '—';

        studentMap[sId] = {
          studentDoc,
          studentId: sId,
          studentCode,
          studentName,
          roll,
          classId,
          className,
          sectionName,
          guardianName,
          guardianPhone,
          invoices: [],
          totalDue: 0,
          dueItems: []
        };
      }

      studentMap[sId].invoices.push(inv);
      studentMap[sId].totalDue += (inv.balance || 0);
      const itemTitle = inv.title || inv.feeCategory || 'বেতন/ফি';
      if (!studentMap[sId].dueItems.includes(itemTitle)) {
        studentMap[sId].dueItems.push(itemTitle);
      }
    });

    let list = Object.values(studentMap);

    // Apply class filter
    if (duesClassFilter !== 'all') {
      list = list.filter(item => String(item.classId) === String(duesClassFilter) || item.className === duesClassFilter);
    }

    // Apply search filter
    if (duesSearchQuery.trim()) {
      const q = duesSearchQuery.toLowerCase();
      list = list.filter(item => 
        item.studentName.toLowerCase().includes(q) ||
        item.studentCode.toLowerCase().includes(q) ||
        String(item.roll).toLowerCase().includes(q) ||
        item.guardianName.toLowerCase().includes(q) ||
        item.guardianPhone.toLowerCase().includes(q)
      );
    }

    // Sort descending by totalDue
    list.sort((a, b) => b.totalDue - a.totalDue);

    return list;
  }, [invoices, students, classes, duesClassFilter, duesSearchQuery]);

  const totalDuesAmount = useMemo(() => {
    return studentDuesSummary.reduce((sum, item) => sum + item.totalDue, 0);
  }, [studentDuesSummary]);

  const totalDuesInvoicesCount = useMemo(() => {
    return studentDuesSummary.reduce((sum, item) => sum + item.invoices.length, 0);
  }, [studentDuesSummary]);

  // Helper: Find which months already have an invoice for a specific student
  const getStudentInvoicedMonths = (studentId, currentInvoices = invoices) => {
    if (!studentId || !currentInvoices || currentInvoices.length === 0) return [];
    const invoicedSet = new Set();
    const studentInvs = currentInvoices.filter(inv => {
      const sId = inv.student?._id || inv.student;
      return String(sId) === String(studentId);
    });

    studentInvs.forEach(inv => {
      const t = inv.title || '';
      const cat = inv.feeCategory || '';
      if (t.includes('মাসিক বেতন') || cat.includes('মাসিক বেতন')) {
        MONTHS.forEach(m => {
          if (t.includes(m)) invoicedSet.add(m);
        });
      }
    });

    return Array.from(invoicedSet);
  };

  const getInitialAvailableMonths = (studentId, currentInvoices = invoices) => {
    const invoicedMonths = getStudentInvoicedMonths(studentId, currentInvoices);
    const currentMonth = MONTHS[new Date().getMonth()];
    if (!invoicedMonths.includes(currentMonth)) {
      return [currentMonth];
    }
    const firstFree = MONTHS.find(m => !invoicedMonths.includes(m));
    return firstFree ? [firstFree] : [];
  };

  // Open Unified Modal
  const handleOpenUnifiedModal = () => {
    const isStaff = canManage;
    const defaultStudent = user?.userType === 'student' ? (students.find(s => s._id === user.profileId)?._id || '') : (students[0]?._id || '');
    const sDoc = students.find(s => s._id === defaultStudent);
    const cLevel = sDoc?.currentEnrollment?.classLevel;
    const matchedClass = classes.find(c => c._id === (cLevel?._id || cLevel));
    const mFee = (cLevel && typeof cLevel === 'object' && cLevel.monthlyFee > 0)
      ? cLevel.monthlyFee
      : (matchedClass?.monthlyFee || 0);
    
    setUnifiedForm({
      student: defaultStudent,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString().split('T')[0],
      includeMonthlyFee: true,
      monthlyFeeRate: mFee > 0 ? mFee : '',
      selectedMonths: getInitialAvailableMonths(defaultStudent, invoices),
      includeAdmissionFee: false,
      admissionFeeAmount: (cLevel?.admissionFee || matchedClass?.admissionFee || 0),
      includeExamFee: false,
      examFeeAmount: (cLevel?.examFee || matchedClass?.examFee || 0),
      includeSessionFee: false,
      sessionFeeAmount: (cLevel?.sessionFee || matchedClass?.sessionFee || 0),
      includeOtherFee: false,
      otherFeeTitle: '',
      otherFeeAmount: 0,
      discountTotal: 0,
      discountType: 'বিশেষ ছাড়',
      fineTotal: 0,
      payNow: true,
      paymentAmount: 0,
      method: isStaff ? 'cash' : 'bkash',
      transactionReference: '',
      fundAccount: accounts.find(a => a.type === 'Asset')?._id || '',
      revenueAccount: accounts.find(a => a.type === 'Revenue')?._id || '',
    });
    setIsInvoiceModalOpen(true);
  };

  const handleOpenPaymentModal = (invoice) => {
    setSelectedInvoice(invoice);
    setPaymentForm({
      amount: invoice.balance,
      method: canManage ? 'cash' : 'bkash',
      transactionReference: '',
      feeMonth: MONTHS[new Date().getMonth()],
    });
    setIsPaymentModalOpen(true);
  };

  const handleOpenSlipModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsSlipModalOpen(true);
  };

  // Super Admin Edit & Delete Invoice Handlers
  const handleOpenEditInvoiceModal = (invoice) => {
    setEditingInvoice(invoice);
    setEditForm({
      title: invoice.title || '',
      feeCategory: invoice.feeCategory || 'মাসিক বেতন',
      dueDate: invoice.dueDate ? new Date(invoice.dueDate).toISOString().split('T')[0] : '',
      subtotal: Number(invoice.subtotal) || 0,
      discountTotal: Number(invoice.discountTotal) || 0,
      discountType: invoice.discountType || 'বিশেষ ছাড়',
      fineTotal: Number(invoice.fineTotal) || 0,
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateInvoice = async (e) => {
    e.preventDefault();
    if (!editingInvoice) return;
    setSubmitting(true);
    try {
      const res = await api.put(`/finance/invoices/${editingInvoice._id}`, editForm);
      if (res.data.success) {
        setToast({ type: 'success', message: 'ইনভয়েস সফলভাবে আপডেট করা হয়েছে।' });
        setIsEditModalOpen(false);
        fetchInvoices();
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: err.response?.data?.message || 'ইনভয়েস আপডেট করতে ব্যর্থ হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteInvoice = async (invoice) => {
    if (!window.confirm(`আপনি কি নিশ্চিত যে ইনভয়েস (${invoice.invoiceNumber}) স্থায়ীভাবে ডিলিট করতে চান? এর সাথে যুক্ত সকল পেমেন্ট হিস্ট্রিও মুছে যাবে।`)) return;
    try {
      const res = await api.delete(`/finance/invoices/${invoice._id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'ইনভয়েস সফলভাবে ডিলিট করা হয়েছে।' });
        fetchInvoices();
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: err.response?.data?.message || 'ইনভয়েস ডিলিট করতে ব্যর্থ হয়েছে।' });
    }
  };

  const handleRevertPayment = async (payment) => {
    const payNum = payment.paymentNumber || 'এই পেমেন্টটি';
    const payAmt = payment.amount ? `৳${payment.amount}` : '';
    const confirmMsg = `আপনি কি নিশ্চিত যে পেমেন্ট (${payNum} ${payAmt ? '- ' + payAmt : ''}) বাতিল/রিভার্ট করতে চান?\n\nইনভয়েসে টাকাটি আবার বকেয়া হয়ে যাবে এবং ক্যাশ সমন্বয় হবে।`;
    if (!window.confirm(confirmMsg)) return;

    try {
      setSubmitting(true);
      const res = await api.delete(`/finance/payments/${payment._id}`);
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'পেমেন্ট সফলভাবে বাতিল/রিভার্ট করা হয়েছে।' });
        
        // Update selectedInvoice locally if currently viewed in modal
        if (selectedInvoice) {
          const updatedPayments = (selectedInvoice.payments || []).filter(p => p._id !== payment._id);
          const revertedAmt = Number(payment.amount) || 0;
          const newPaidTotal = Math.max(0, (Number(selectedInvoice.paidTotal) || 0) - revertedAmt);
          const payableTotal = Number(selectedInvoice.payableTotal) || 0;
          const newBalance = Math.max(0, payableTotal - newPaidTotal);
          let newStatus = 'unpaid';
          if (newBalance === 0 && newPaidTotal > 0) newStatus = 'paid';
          else if (newPaidTotal > 0 && newBalance > 0) newStatus = 'partial';

          setSelectedInvoice(prev => ({
            ...prev,
            paidTotal: newPaidTotal,
            balance: newBalance,
            status: newStatus,
            payments: updatedPayments
          }));
        }

        // Refresh full invoice list
        fetchInvoices();
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: err.response?.data?.message || 'পেমেন্ট রিভার্ট করতে ব্যর্থ হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenClassFeeModal = () => {
    fetchClasses();
    setIsClassFeeModalOpen(true);
  };

  const handleOpenGeneratorModal = () => {
    setGeneratorForm({
      category: 'monthlyFee',
      month: MONTHS[new Date().getMonth()],
      year: String(new Date().getFullYear()),
    });
    setIsGeneratorModalOpen(true);
  };

  // Batch update all class fees at once
  const handleSaveAllClassFees = async () => {
    setSubmitting(true);
    try {
      const promises = Object.keys(classFeeInputs).map(classId => {
        const fees = classFeeInputs[classId];
        return api.patch(`/students/classes/${classId}`, {
          monthlyFee: Number(fees.monthlyFee) || 0,
          admissionFee: Number(fees.admissionFee) || 0,
          sessionFee: Number(fees.sessionFee) || 0,
          examFee: Number(fees.examFee) || 0
        });
      });

      await Promise.all(promises);
      setToast({ type: 'success', message: 'সকল শ্রেণির ফি সফলভাবে সংরক্ষণ করা হয়েছে' });
      setIsClassFeeModalOpen(false);
      fetchClasses();
      fetchStudents();
    } catch (error) {
      console.error('Error saving all class fees:', error);
      setToast({ type: 'error', message: 'ফি সংরক্ষণ করতে সমস্যা হয়েছে' });
    } finally {
      setSubmitting(false);
    }
  };

  // Batch generate monthly tuition invoices
  const handleGenerateMonthlyInvoices = async () => {
    setSubmitting(true);
    try {
      const res = await api.post('/finance/invoices/generate-monthly', {
        month: generatorForm.month,
        year: generatorForm.year
      });
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message });
        setIsGeneratorModalOpen(false);
        fetchInvoices();
      }
    } catch (error) {
      console.error(error);
      setToast({ type: 'error', message: 'মাসিক বেতনের ইনভয়েস জেনারেট করতে সমস্যা হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  // Batch generate exam/session/admission/monthly invoices
  const handleGenerateCategoryInvoices = async () => {
    setSubmitting(true);
    try {
      if (generatorForm.category === 'monthlyFee') {
        const res = await api.post('/finance/invoices/generate-monthly', {
          month: generatorForm.month,
          year: generatorForm.year
        });
        if (res.data.success) {
          setToast({ type: 'success', message: res.data.message });
          setIsGeneratorModalOpen(false);
          fetchInvoices();
        }
      } else {
        const res = await api.post('/finance/invoices/generate-category', {
          category: generatorForm.category,
          month: generatorForm.month,
          year: generatorForm.year
        });
        if (res.data.success) {
          setToast({ type: 'success', message: res.data.message });
          setIsGeneratorModalOpen(false);
          fetchInvoices();
        }
      }
    } catch (error) {
      console.error(error);
      setToast({ type: 'error', message: error.response?.data?.message || 'ইনভয়েস জেনারেট করতে সমস্যা হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  // Send due payment push reminders (manual trigger)
  const handleSendDueReminders = async () => {
    if (!window.confirm('সকল বকেয়াধারী শিক্ষার্থীর অভিভাবকদের কাছে ৩ দিনের বকেয়া তাগিদ নোটিফিকেশন পাঠাতে চান?')) return;
    try {
      setSendingReminders(true);
      const res = await api.post('/finance/invoices/send-due-reminders', { forceAllDue: true });
      if (res.data.success) {
        setToast({ 
          type: 'success', 
          message: res.data.message || `${res.data.data?.remindersSent || 0} জন অভিভাবকের কাছে তাগিদ নোটিফিকেশন সফলভাবে পাঠানো হয়েছে।` 
        });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: err.response?.data?.message || 'নোটিফিকেশন পাঠাতে সমস্যা হয়েছে।' });
    } finally {
      setSendingReminders(false);
    }
  };

  // Submit Unified Form (Creates Invoice and optionally creates Payment Request)
  const handleSubmitUnified = async (e) => {
    e.preventDefault();
    if (!unifiedForm.student) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে ছাত্র নির্বাচন করুন' });
      return;
    }

    const items = [];
    const categoryLabels = [];

    if (unifiedForm.includeMonthlyFee && unifiedForm.selectedMonths.length > 0) {
      items.push(`মাসিক বেতন (${unifiedForm.selectedMonths.join(', ')})`);
      categoryLabels.push('মাসিক বেতন');
    }
    if (unifiedForm.includeAdmissionFee && admissionSubtotal > 0) {
      items.push(`ভর্তি ফি (৳${admissionSubtotal})`);
      categoryLabels.push('ভর্তি ফি');
    }
    if (unifiedForm.includeExamFee && examSubtotal > 0) {
      items.push(`পরীক্ষা ফি (৳${examSubtotal})`);
      categoryLabels.push('পরীক্ষা ফি');
    }
    if (unifiedForm.includeSessionFee && sessionSubtotal > 0) {
      items.push(`সেশন ফি (৳${sessionSubtotal})`);
      categoryLabels.push('সেশন ফি');
    }
    if (unifiedForm.includeOtherFee && otherSubtotal > 0) {
      items.push(`${unifiedForm.otherFeeTitle || 'অন্যান্য ফি'} (৳${otherSubtotal})`);
      categoryLabels.push(unifiedForm.otherFeeTitle || 'অন্যান্য ফি');
    }

    if (items.length === 0) {
      setToast({ type: 'error', message: 'অনুগ্রহ করে কমপক্ষে এক বা একাধিক ফি আইটেম নির্বাচন করুন' });
      return;
    }

    if (unifiedForm.includeMonthlyFee) {
      const alreadyInvoiced = getStudentInvoicedMonths(unifiedForm.student);
      const duplicateMonths = unifiedForm.selectedMonths.filter(m => alreadyInvoiced.includes(m));
      if (duplicateMonths.length > 0) {
        setToast({
          type: 'error',
          message: `এই শিক্ষার্থীর জন্য "${duplicateMonths.join(', ')}" মাসের মাসিক বেতনের ইনভয়েস ইতিমধ্যে বিদ্যমান রয়েছে। একই মাসের ইনভয়েস পুনরায় তৈরি করা যাবে না।`
        });
        return;
      }
    }

    if (computedUnifiedSubtotal <= 0) {
      setToast({ type: 'error', message: 'নির্বাচিত ফি আইটেমের টাকার পরিমাণ অবশ্যই ০ এর বেশি হতে হবে (বেতনের পরিমাণ উল্লেখ করুন)' });
      return;
    }

    const invoiceTitle = items.join(' + ');
    const feeCategory = categoryLabels.length === 1 ? categoryLabels[0] : 'সম্মিলিত ফি (বেতন ও অন্যান্য)';

    if (unifiedForm.payNow && unifiedForm.paymentAmount <= 0) {
      setToast({ type: 'error', message: 'পরিশোধের পরিমাণ অবশ্যই ০ এর বেশি হতে হবে' });
      return;
    }

    const isMobileBanking = ['bkash', 'rocket', 'nagad'].includes(unifiedForm.method);
    if (unifiedForm.payNow && isMobileBanking && !unifiedForm.transactionReference.trim()) {
      setToast({ type: 'error', message: 'মোবাইল ব্যাংকিং পেমেন্টের জন্য ট্রানজেকশন আইডি আবশ্যক' });
      return;
    }

    setSubmitting(true);
    try {
      // 1. Create Invoice
      const invoicePayload = {
        student: unifiedForm.student,
        title: invoiceTitle,
        feeCategory: feeCategory,
        dueDate: unifiedForm.dueDate,
        subtotal: computedUnifiedSubtotal,
        discountTotal: Number(unifiedForm.discountTotal || 0),
        discountType: unifiedForm.discountTotal > 0 ? unifiedForm.discountType : null,
        fineTotal: Number(unifiedForm.fineTotal || 0),
      };

      const invoiceRes = await api.post('/finance/invoices', invoicePayload);
      if (invoiceRes.data.success) {
        const createdInvoice = invoiceRes.data.data.invoice;

        // 2. If payNow is true, record immediate payment
        if (unifiedForm.payNow) {
          const paymentPayload = {
            invoiceId: createdInvoice._id,
            amount: Number(unifiedForm.paymentAmount),
            method: unifiedForm.method,
            transactionReference: unifiedForm.transactionReference,
            feeMonth: unifiedForm.selectedMonths[0] || MONTHS[new Date().getMonth()],
            fundAccount: unifiedForm.fundAccount || undefined,
            revenueAccount: unifiedForm.revenueAccount || undefined,
          };

          const payRes = await api.post('/finance/payments', paymentPayload);
          if (payRes.data.success) {
            setToast({ type: 'success', message: 'ইনভয়েস তৈরি এবং পেমেন্ট সফলভাবে সম্পন্ন হয়েছে।' });
          }
        } else {
          setToast({ type: 'success', message: 'নতুন ইনভয়েস সফলভাবে তৈরি করা হয়েছে।' });
        }

        setIsInvoiceModalOpen(false);
        fetchInvoices();
        if (canManage) fetchPendingPayments();
      }
    } catch (error) {
      console.error('Error submitting unified invoice/payment:', error);
      setToast({ type: 'error', message: error.response?.data?.message || 'ইনভয়েস বা পেমেন্ট সম্পন্ন করতে সমস্যা হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReceivePaymentOnExisting = async (e) => {
    e.preventDefault();
    if (paymentForm.amount <= 0) {
      setToast({ type: 'error', message: 'পেমেন্ট পরিমাণ অবশ্যই ০ এর বেশি হতে হবে' });
      return;
    }

    const isMobileBanking = ['bkash', 'rocket', 'nagad'].includes(paymentForm.method);
    if (isMobileBanking && !paymentForm.transactionReference.trim()) {
      setToast({ type: 'error', message: 'মোবাইল ব্যাংকিং পেমেন্টের জন্য ট্রানজেকশন আইডি আবশ্যক' });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        invoiceId: selectedInvoice._id,
        amount: Number(paymentForm.amount),
        method: paymentForm.method,
        transactionReference: isMobileBanking ? paymentForm.transactionReference : '',
        feeMonth: paymentForm.feeMonth,
      };

      const res = await api.post('/finance/payments', payload);
      if (res.data.success) {
        setToast({ 
          type: 'success', 
          message: res.data.message || 'পেমেন্ট সফলভাবে সম্পন্ন হয়েছে' 
        });
        setIsPaymentModalOpen(false);
        fetchInvoices();
        if (canManage) fetchPendingPayments();
      }
    } catch (error) {
      console.error('Error receiving payment:', error);
      const msg = error.response?.data?.message || 'পেমেন্ট গ্রহণে সমস্যা হয়েছে';
      setToast({ type: 'error', message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyPending = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await api.post(`/finance/payments/${selectedPendingPayment._id}/verify`, {
        fundAccount: verifyForm.fundAccount,
        revenueAccount: verifyForm.revenueAccount
      });
      if (res.data.success) {
        setToast({ type: 'success', message: 'পেমেন্ট রিকোয়েস্টটি সফলভাবে ভেরিফাই করা হয়েছে।' });
        setIsVerifyModalOpen(false);
        fetchPendingPayments();
        fetchInvoices();
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      setToast({ type: 'error', message: 'ভেরিফাই করতে সমস্যা হয়েছে।' });
    } finally {
      setSubmitting(false);
    }
  };

  const openVerifyModal = (payment) => {
    setSelectedPendingPayment(payment);
    setVerifyForm({ fundAccount: '', revenueAccount: '' });
    setIsVerifyModalOpen(true);
  };

  const handleRejectPending = async (paymentId) => {
    if (!window.confirm('আপনি কি নিশ্চিত যে এই পেমেন্ট রিকোয়েস্টটি বাতিল (Reject) করতে চান?')) return;
    try {
      const res = await api.post(`/finance/payments/${paymentId}/reject`);
      if (res.data.success) {
        setToast({ type: 'warning', message: 'পেমেন্ট রিকোয়েস্টটি বাতিল করা হয়েছে।' });
        fetchPendingPayments();
        fetchInvoices();
      }
    } catch (error) {
      console.error('Error rejecting payment:', error);
      setToast({ type: 'error', message: 'বাতিল করতে সমস্যা হয়েছে।' });
    }
  };

  const handleSeedDefaultAccounts = async () => {
    try {
      setSeedingAccounts(true);
      const res = await api.post('/accounting/accounts/seed-defaults');
      if (res.data.success) {
        setToast({ type: 'success', message: res.data.message || 'ডিফল্ট আয়ের খাতসমূহ সফলভাবে তৈরি হয়েছে।' });
        await fetchAccounts();
      }
    } catch (err) {
      console.error('Error seeding default accounts:', err);
      setToast({ type: 'error', message: 'ডিফল্ট খাত তৈরি করতে ব্যর্থ হয়েছে' });
    } finally {
      setSeedingAccounts(false);
    }
  };

  const handlePrintReceipt = (invoice = selectedInvoice) => {
    if (!invoice) return;


    const studentFullName = invoice.student?.user ? `${invoice.student.user.firstName || ''} ${invoice.student.user.lastName || ''}`.trim() : (invoice.student?.name || 'অজানা');
    const matchedStForPrint = students.find(s => 
      (invoice.student?._id && s._id === invoice.student._id) || 
      (invoice.student?.studentId && s.studentId === invoice.student.studentId) ||
      (typeof invoice.student === 'string' && (s._id === invoice.student || s.studentId === invoice.student))
    );
    const studentId = invoice.student?.studentId || matchedStForPrint?.studentId || '—';
    const enrForPrint = invoice.student?.currentEnrollment || matchedStForPrint?.currentEnrollment;
    const className = enrForPrint?.classLevel?.name || '—';
    const rawSection = enrForPrint?.section;
    const sectionName = (typeof rawSection === 'object' && rawSection?.name)
      ? rawSection.name
      : (typeof rawSection === 'string' && rawSection !== '—' && rawSection !== 'none' && rawSection !== 'কোন সেকশন নাই' ? rawSection : '');
    const guardianInfo = invoice.guardian ? `${invoice.guardian.name || ''} (${invoice.guardian.relationship || 'অভিভাবক'})` : '—';
    const guardianPhone = invoice.guardian?.phone || invoice.student?.user?.phone || '—';

    const paymentsRows = (invoice.payments && invoice.payments.length > 0)
      ? invoice.payments.map((p, idx) => `
        <tr style="border-bottom: 1px dotted #e5e7eb;">
          <td style="padding: 6px 8px; text-align: center;">${idx + 1}</td>
          <td style="padding: 6px 8px;">${formatDateDDMMYYYY(p.paymentDate)}</td>
          <td style="padding: 6px 8px;">${p.feeMonth || '—'}</td>
          <td style="padding: 6px 8px;">${getMethodLabel(p.method)}</td>
          <td style="padding: 6px 8px; font-family: monospace;">${p.transactionReference || '—'}</td>
          <td style="padding: 6px 8px; text-align: right; font-weight: bold;">৳${(p.amount || 0).toFixed(2)}</td>
          <td style="padding: 6px 8px; text-align: center; color: ${p.status === 'success' ? '#16a34a' : '#d97706'}; font-weight: 600;">
            ${p.status === 'success' ? 'সফল' : p.status === 'pending' ? 'পেন্ডিং' : 'বাতিল'}
          </td>
        </tr>
      `).join('')
      : `<tr><td colspan="7" style="padding: 10px; text-align: center; color: #6b7280; font-style: italic;">এখনও কোনো পেমেন্ট রেকর্ড নেই</td></tr>`;

    let printWin = null;
    try {
      printWin = window.open('', '_blank', 'width=850,height=920');
    } catch (_) {
      printWin = null;
    }
    if (!printWin) {
      window.print();
      return;
    }

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="utf-8">
  <title>মানি রসিদ - ${invoice.invoiceNumber}</title>
  ${getMadrasahPrintStyles('portrait')}
  <style>
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 12px 16px;
      margin-bottom: 18px;
      font-size: 12.5px;
    }
    .info-grid div { margin-bottom: 3px; }
    .label { font-weight: 700; color: #475569; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
    }
    th {
      background: #0f766e;
      color: #ffffff;
      font-weight: 700;
      padding: 7px 10px;
      font-size: 12.5px;
      text-align: left;
    }
    td {
      padding: 7px 10px;
      border-bottom: 1px solid #e2e8f0;
      font-size: 12.5px;
    }
    .totals-area {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    .totals-table {
      width: 310px;
      border-collapse: collapse;
    }
    .totals-table td {
      padding: 5px 10px;
      font-size: 13px;
    }
    .badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 11.5px;
      font-weight: 700;
    }
    .badge-paid { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }
    .badge-partial { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }
    .badge-unpaid { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; background: #fff; }
    }
  </style>
</head>
<body>
  <!-- Print Controls Toolbar -->
  <div class="no-print" style="background:#0f172a; padding:10px 18px; margin-bottom:16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
    <span style="font-weight:700; font-size:13px;">🖨️ রসিদ প্রিন্ট প্রিভিউ — ইনভয়েস: ${invoice.invoiceNumber}</span>
    <div style="display:flex; gap:10px;">
      <button onclick="window.print()" style="padding:6px 18px; background:#10b981; color:#fff; border:none; border-radius:6px; font-weight:700; cursor:pointer;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding:6px 14px; background:#475569; color:#fff; border:none; border-radius:6px; cursor:pointer;">❌ বন্ধ করুন</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'মাদরাসা ফিস ও বেতন রসিদ (Money Receipt)',
        orientation: 'portrait',
        metaLeft: `ইনভয়েস নং: <strong>${invoice.invoiceNumber}</strong>`,
        metaRight: `তারিখ: <strong>${formatDateDDMMYYYY(invoice.issueDate)}</strong>`
      })}

    <div class="info-grid">
      <div>
        <div><span class="label">ইনভয়েস নং:</span> <strong style="font-family: monospace; color: #0f766e;">${invoice.invoiceNumber}</strong></div>
        <div><span class="label">তারিখ:</span> ${formatDateDDMMYYYY(invoice.issueDate)}</div>
        <div><span class="label">পরিশোধের শেষ তারিখ:</span> ${formatDateDDMMYYYY(invoice.dueDate)}</div>
        <div><span class="label">স্ট্যাটাস:</span> 
          <span class="badge ${invoice.status === 'paid' ? 'badge-paid' : invoice.status === 'partial' ? 'badge-partial' : 'badge-unpaid'}">
            ${invoice.status === 'paid' ? 'সম্পূর্ণ পরিশোধিত' : invoice.status === 'partial' ? 'আংশিক পরিশোধিত' : 'পরিশোধহীন / বকেয়া'}
          </span>
        </div>
      </div>
      <div style="text-align: right;">
        <div><span class="label">শিক্ষার্থীর নাম:</span> <strong>${studentFullName}</strong></div>
        <div><span class="label">শিক্ষার্থী আইডি:</span> <span style="font-family: monospace;">${studentId}</span></div>
        <div><span class="label">শ্রেণি ও সেকশন:</span> ${className}${sectionName && sectionName !== '—' ? ` (${sectionName})` : ''}</div>
        <div><span class="label">অভিভাবক:</span> ${guardianInfo} ${guardianPhone !== '—' ? `| ${guardianPhone}` : ''}</div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 45px; text-align: center;">ক্র.নং</th>
          <th>ফি এর বিবরণ / খাত</th>
          <th style="text-align: right; width: 130px;">পরিমাণ (৳)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center;">১</td>
          <td><strong>${invoice.title}</strong> (${invoice.feeCategory || 'নিয়মিত ফি'})</td>
          <td style="text-align: right; font-family: monospace; font-weight: 600;">৳${(invoice.subtotal || 0).toFixed(2)}</td>
        </tr>
        ${invoice.fineTotal > 0 ? `
        <tr>
          <td style="text-align: center;">২</td>
          <td style="color: #b91c1c;">বিলম্ব জরিমানা (+)</td>
          <td style="text-align: right; color: #b91c1c; font-family: monospace;">৳${invoice.fineTotal.toFixed(2)}</td>
        </tr>` : ''}
        ${invoice.discountTotal > 0 ? `
        <tr>
          <td style="text-align: center;">${invoice.fineTotal > 0 ? '৩' : '২'}</td>
          <td style="color: #15803d;">ছাড় (-) [${invoice.discountType || 'বিশেষ ছাড়'}]</td>
          <td style="text-align: right; color: #15803d; font-family: monospace;">-৳${invoice.discountTotal.toFixed(2)}</td>
        </tr>` : ''}
      </tbody>
    </table>

    <div class="totals-area">
      <table class="totals-table">
        <tr style="border-top: 1px solid #e2e8f0;">
          <td style="font-weight: 700;">সর্বমোট প্রদেয়:</td>
          <td style="text-align: right; font-weight: 800; color: #0f766e; font-family: monospace;">৳${(invoice.payableTotal || 0).toFixed(2)}</td>
        </tr>
        <tr style="border-top: 1px solid #e2e8f0;">
          <td style="font-weight: 700; color: #15803d;">পরিশোধিত পরিমাণ:</td>
          <td style="text-align: right; font-weight: 800; color: #15803d; font-family: monospace;">৳${(invoice.paidTotal || 0).toFixed(2)}</td>
        </tr>
        <tr style="border-top: 2px solid #0f766e; background: #fef2f2;">
          <td style="font-weight: 800; color: #b91c1c;">বর্তমান বকেয়া:</td>
          <td style="text-align: right; font-weight: 800; color: #b91c1c; font-family: monospace;">৳${(invoice.balance || 0).toFixed(2)}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 18px;">
      <div style="font-weight: 700; font-size: 12.5px; margin-bottom: 6px; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
        পরিশোধের ইতিহাস (Payment Ledger)
      </div>
      <table>
        <thead>
          <tr>
            <th style="width: 35px; text-align: center;">#</th>
            <th>তারিখ</th>
            <th>মাস</th>
            <th>মাধ্যম</th>
            <th>TxnID / রেফারেন্স</th>
            <th style="text-align: right;">পরিমাণ</th>
            <th style="text-align: center;">স্ট্যাটাস</th>
          </tr>
        </thead>
        <tbody>
          ${paymentsRows}
        </tbody>
      </table>
    </div>

      ${getMadrasahFooterSignaturesHtml(selectedReceiptRoles)}
    </div>
  </div>

  <script>
    function triggerPrint() {
      try {
        window.focus();
        window.print();
      } catch (e) {
        console.error('Print trigger error', e);
      }
    }
    if (document.readyState === 'complete') {
      setTimeout(triggerPrint, 250);
    } else {
      window.addEventListener('load', function() {
        setTimeout(triggerPrint, 250);
      });
    }
  </script>
</body>
</html>`;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  const handlePrint = () => {
    handlePrintReceipt(selectedInvoice);
  };

  // Dedicated Print Report for Consolidated Dues (কার কত বকেয়া আছে এবং টোটাল কত)
  const handlePrintDuesReport = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।');
      return;
    }

    const reportDate = new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });
    const selectedClassDoc = classes.find(c => c._id === duesClassFilter);
    const filterClassStr = duesClassFilter === 'all' ? 'সকল শ্রেণি' : (selectedClassDoc?.name || duesClassFilter);

    let rowsHtml = '';
    studentDuesSummary.forEach((item, index) => {
      rowsHtml += `
        <tr>
          <td style="text-align: center; font-family: monospace; font-size: 12px;">${index + 1}</td>
          <td style="text-align: center; font-family: monospace; font-weight: bold; font-size: 13px;">${item.roll}</td>
          <td>
            <div style="font-weight: 700; font-size: 13px;">${item.studentName}</div>
            <div style="font-size: 11px; color: #64748b;">আইডি: ${item.studentCode}</div>
          </td>
          <td>${item.className}${item.sectionName && item.sectionName !== '—' ? ` (${item.sectionName})` : ''}</td>
          <td>
            <div>${item.guardianName}</div>
            <div style="font-family: monospace; font-size: 11.5px; color: #0284c7;">${item.guardianPhone}</div>
          </td>
          <td style="font-size: 11.5px;">${item.dueItems.join(', ')}</td>
          <td style="text-align: center; font-family: monospace; font-size: 12px;">${item.invoices.length}টি</td>
          <td style="text-align: right; font-weight: bold; font-family: monospace; font-size: 13.5px; color: #b91c1c;">
            ৳ ${item.totalDue.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
          </td>
        </tr>
      `;
    });

    const grandTotalFormatted = `৳ ${totalDuesAmount.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}`;

    const html = `<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>বকেয়া ফি ও বেতন বিবরণী রিপোর্ট - ${madrasahName}</title>
      ${getMadrasahPrintStyles('landscape')}
      <style>
        .meta-strip { font-size: 12px; color: #475569; display: flex; justify-content: space-between; margin-bottom: 12px; background: #fef2f2; padding: 8px 14px; border-radius: 6px; border: 1px solid #fecaca; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th { background: #b91c1c; color: #fff; font-size: 12px; font-weight: 700; padding: 7px 8px; text-align: left; }
        td { padding: 6px 8px; border-bottom: 1px solid #e2e8f0; font-size: 11.5px; }
        .footer-total { background: #fee2e2; font-weight: 800; }
        @media print {
          .no-print { display: none !important; }
          body { padding: 0; background: #fff; }
        }
      </style>
    </head>
    <body>
      <!-- Print Controls Toolbar -->
      <div class="no-print" style="background:#0f172a; padding:10px 18px; margin-bottom:16px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
        <span style="font-weight:700; font-size:13px;">🖨️ বকেয়া বিবরণী রিপোর্ট — ${filterClassStr}</span>
        <div style="display:flex; gap:10px;">
          <button onclick="window.print()" style="padding:6px 18px; background:#10b981; color:#fff; border:none; border-radius:6px; font-weight:700; cursor:pointer;">🖨️ প্রিন্ট করুন</button>
          <button onclick="window.close()" style="padding:6px 14px; background:#475569; color:#fff; border:none; border-radius:6px; cursor:pointer;">❌ বন্ধ করুন</button>
        </div>
      </div>

      <div class="print-sheet-container">
        <div class="print-content-layer">
          ${getMadrasahHeaderHtml({
            title: '🚨 শিক্ষার্থীদের বকেয়া ফি ও বেতন বিবরণী (Student Dues Statement)',
            orientation: 'landscape',
            metaLeft: `<strong>শ্রেণি:</strong> ${filterClassStr} | <strong>তারিখ:</strong> ${reportDate}`,
            metaRight: `<strong>বকেয়াধারী শিক্ষার্থী:</strong> ${studentDuesSummary.length} জন | <strong>মোট বকেয়া:</strong> <span style="color:#b91c1c; font-weight:bold;">${grandTotalFormatted}</span>`
          })}

          <div class="meta-strip">
            <span><strong>শ্রেণি:</strong> ${filterClassStr}</span>
            <span><strong>মোট বকেয়াধারী শিক্ষার্থী:</strong> ${studentDuesSummary.length} জন</span>
            <span><strong>মোট অপরিশোধিত ইনভয়েস:</strong> ${totalDuesInvoicesCount} টি</span>
            <span><strong>সর্বমোট বকেয়ার পরিমাণ:</strong> <strong style="color: #b91c1c; font-size: 13px;">${grandTotalFormatted}</strong></span>
            <span><strong>তারিখ:</strong> ${reportDate}</span>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 35px; text-align: center;">ক্র.</th>
                <th style="width: 50px; text-align: center;">রোল</th>
                <th>শিক্ষার্থীর নাম ও আইডি</th>
                <th style="width: 120px;">শ্রেণি ও সেকশন</th>
                <th style="width: 150px;">অভিভাবক ও ফোন</th>
                <th>বকেয়া খাত / বিবরণ</th>
                <th style="width: 60px; text-align: center;">ইনভয়েস</th>
                <th style="width: 110px; text-align: right;">মোট বকেয়া (৳)</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
              <tr class="footer-total">
                <td colspan="7" style="text-align: right; padding: 9px; font-size: 12.5px;">সর্বমোট বকেয়া (Grand Total Outstanding):</td>
                <td style="text-align: right; font-size: 13.5px; color: #991b1b; padding: 9px;">${grandTotalFormatted}</td>
              </tr>
            </tbody>
          </table>

          ${getMadrasahFooterSignaturesHtml(selectedReceiptRoles)}
        </div>
      </div>

      <script>
        function triggerPrint() {
          window.focus();
          setTimeout(function() { window.print(); }, 250);
        }
        if (document.readyState === 'complete') {
          triggerPrint();
        } else {
          window.addEventListener('load', triggerPrint);
        }
      </script>
    </body>
    </html>`;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  const getMethodLabel = (m) => {
    const labels = {
      cash: 'নগদ (Cash)',
      bank: 'ব্যাংক ট্রান্সফার',
      online: 'অনলাইন পেমেন্ট',
      bkash: 'bKash (বিকাশ)',
      nagad: 'Nagad (নগদ)',
      rocket: 'Rocket (রকেট)',
      mobile_banking: 'মোবাইল ব্যাংকিং'
    };
    return labels[m] || m;
  };

  // Unified Form Live Calculations
  const activeStudentDoc = students.find(s => s._id === unifiedForm.student);
  const activeClassLevelRaw = activeStudentDoc?.currentEnrollment?.classLevel;
  const activeMatchedClass = classes.find(c => c._id === (activeClassLevelRaw?._id || activeClassLevelRaw));
  const activeClassFeeConfig = (activeClassLevelRaw && typeof activeClassLevelRaw === 'object') ? activeClassLevelRaw : activeMatchedClass;
  const unifiedMonthsCount = unifiedForm.selectedMonths.length;

  const defaultMonthlyRate = Number(activeClassFeeConfig?.monthlyFee) || Number(activeMatchedClass?.monthlyFee) || 0;
  const monthlyRate = (unifiedForm.monthlyFeeRate !== undefined && unifiedForm.monthlyFeeRate !== '')
    ? (Number(unifiedForm.monthlyFeeRate) || 0)
    : defaultMonthlyRate;

  const monthlySubtotal = (unifiedForm.includeMonthlyFee && unifiedMonthsCount > 0) ? (monthlyRate * unifiedMonthsCount) : 0;
  const admissionSubtotal = (unifiedForm.includeAdmissionFee && Number(unifiedForm.admissionFeeAmount) > 0) ? Number(unifiedForm.admissionFeeAmount) : 0;
  const examSubtotal = (unifiedForm.includeExamFee && Number(unifiedForm.examFeeAmount) > 0) ? Number(unifiedForm.examFeeAmount) : 0;
  const sessionSubtotal = (unifiedForm.includeSessionFee && Number(unifiedForm.sessionFeeAmount) > 0) ? Number(unifiedForm.sessionFeeAmount) : 0;
  const otherSubtotal = (unifiedForm.includeOtherFee && Number(unifiedForm.otherFeeAmount) > 0) ? Number(unifiedForm.otherFeeAmount) : 0;

  const computedUnifiedSubtotal = monthlySubtotal + admissionSubtotal + examSubtotal + sessionSubtotal + otherSubtotal;
  const computedUnifiedPayable = Math.max(0, (computedUnifiedSubtotal + Number(unifiedForm.fineTotal || 0)) - Number(unifiedForm.discountTotal || 0));

  const directPayAmount = Number(unifiedForm.paymentAmount) || 0;
  const directGatewayCharge = ['bkash', 'rocket', 'nagad'].includes(unifiedForm.method) ? directPayAmount * 0.02 : 0;
  const directTotalWithCharge = directPayAmount + directGatewayCharge;

  const directRemainingDue = Math.max(0, computedUnifiedPayable - directPayAmount);
  const directAdvancePayment = Math.max(0, directPayAmount - computedUnifiedPayable);

  // Auto calculate total to pay on changes
  useEffect(() => {
    setUnifiedForm(prev => ({
      ...prev,
      paymentAmount: computedUnifiedPayable
    }));
  }, [computedUnifiedPayable]);

  // Existing Invoice Payment Calculations
  const activeMethod = paymentForm.method;
  const enteredAmount = Number(paymentForm.amount) || 0;
  const gatewayCharge = ['bkash', 'rocket', 'nagad'].includes(activeMethod) ? enteredAmount * 0.02 : 0;
  const totalAmountToPay = enteredAmount + gatewayCharge;

  const currentBalance = selectedInvoice ? selectedInvoice.balance : 0;
  const remainingBalance = Math.max(0, currentBalance - enteredAmount);
  const advancePayment = Math.max(0, enteredAmount - currentBalance);

  const toggleMonth = (m) => {
    setUnifiedForm(prev => {
      const idx = prev.selectedMonths.indexOf(m);
      let list = [...prev.selectedMonths];
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(m);
      }
      list.sort((a, b) => MONTHS.indexOf(a) - MONTHS.indexOf(b));
      return {
        ...prev,
        selectedMonths: list
      };
    });
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      {/* Toast Alert */}
      {toast && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 9999,
          padding: '14px 22px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : toast.type === 'warning' ? 'rgba(245, 158, 11, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">ফি ও বেতন ব্যবস্থাপনা</h1>
          <p className="page-subtitle">প্রতি মাসের ৫ তারিখে স্বয়ংক্রিয় বেতন ইনভয়েস ও ৩ দিন পূর্বে বকেয়া তাগিদ নোটিফিকেশন সক্রিয়</p>
        </div>
        <div className="flex gap-16">
          {isSuperAdmin && (
            <button className="btn btn-secondary flex-center gap-4" onClick={handleOpenClassFeeModal}>
              <Settings size={16} /> শ্রেণি ফি নির্ধারণ
            </button>
          )}
          {canManage && (
            <>
              <button 
                className="btn btn-secondary flex-center gap-4" 
                onClick={handleSendDueReminders}
                disabled={sendingReminders}
                title="বকেয়া শিক্ষার্থীদের অভিভাবকদের কাছে তাগিদ পুশ নোটিফিকেশন পাঠান"
              >
                <Bell size={16} /> {sendingReminders ? 'পাঠানো হচ্ছে...' : 'বকেয়া তাগিদ পাঠান'}
              </button>
              <button className="btn btn-secondary flex-center gap-4" onClick={handleOpenGeneratorModal}>
                <Receipt size={16} /> ইনভয়েস জেনারেটর
              </button>
            </>
          )}
          <button className="btn btn-primary flex-center gap-4" onClick={handleOpenUnifiedModal}>
            <Plus size={16} /> নতুন ইনভয়েস ও পেমেন্ট
          </button>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-3 mb-24">
        <div className="card text-center hover-lift" style={{ borderLeft: '5px solid var(--success)', padding: '20px' }}>
          <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>সর্বমোট আদায়</h3>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)' }}>
            ৳{totalPaid.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="card text-center hover-lift" style={{ borderLeft: '5px solid var(--danger)', padding: '20px' }}>
          <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>সর্বমোট বকেয়া</h3>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--danger)' }}>
            ৳{totalDue.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="card text-center hover-lift" style={{ borderLeft: '5px solid var(--primary)', padding: '20px' }}>
          <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>সর্বমোট ইনভয়েস</h3>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
            {totalInvoiced}
          </div>
        </div>
      </div>

      {/* Tab Switcher for Admins/Staff */}
      {canManage && (
        <div className="flex gap-16 mb-16 border-b" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
          <button 
            className={`btn ${activeTab === 'invoices' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('invoices')}
            style={{ borderRadius: '8px 8px 0 0', padding: '10px 20px' }}
          >
            ইনভয়েস তালিকা
          </button>
          <button 
            className={`btn ${activeTab === 'pending' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => {
              setActiveTab('pending');
              fetchPendingPayments();
            }}
            style={{ borderRadius: '8px 8px 0 0', padding: '10px 20px', position: 'relative' }}
          >
            অপেক্ষাধীন পেমেন্ট ভেরিফিকেশন
            {pendingPayments.length > 0 && (
              <span style={{
                position: 'absolute', top: '-4px', right: '-4px',
                background: 'var(--danger)', color: '#fff', fontSize: '0.75rem',
                borderRadius: '50%', padding: '2px 6px', fontWeight: 'bold'
              }}>
                {pendingPayments.length}
              </span>
            )}
          </button>
          <button 
            className={`btn ${activeTab === 'duesReport' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('duesReport')}
            style={{ borderRadius: '8px 8px 0 0', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>🚨</span> বকেয়া ও ডিফল্টার রিপোর্ট
            {studentDuesSummary.length > 0 && (
              <span style={{
                background: 'var(--danger)', color: '#fff', fontSize: '0.75rem',
                borderRadius: '9999px', padding: '2px 8px', fontWeight: 'bold'
              }}>
                {studentDuesSummary.length}
              </span>
            )}
          </button>
        </div>
      )}

      {activeTab === 'invoices' ? (
        <>
          {/* Search and Filters */}
          <div className="card mb-24" style={{ padding: '18px 24px' }}>
            <div className="flex gap-16" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="ছাত্রের নাম, অভিভাবকের নাম, আইডি অথবা ইনভয়েস নং..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ paddingLeft: '44px', borderRadius: '10px' }}
                />
              </div>
              <select 
                className="form-input form-select" 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ width: 'auto', minWidth: '180px', borderRadius: '10px' }}
              >
                <option value="all">সকল ইনভয়েস</option>
                <option value="paid">পরিশোধিত</option>
                <option value="partial">আংশিক বকেয়া</option>
                <option value="unpaid">সম্পূর্ণ বকেয়া</option>
              </select>
            </div>
          </div>

          {/* Invoices List */}
          {loading ? (
            <div className="flex-center" style={{ padding: '60px', flexDirection: 'column', gap: '12px' }}>
              <div className="spinner"></div>
              <span className="text-muted text-sm">ইনভয়েস লোড হচ্ছে...</span>
            </div>
          ) : filteredInvoices.length === 0 ? (
            <div className="card empty-state">
              <CreditCard size={48} style={{ opacity: 0.3, color: 'var(--primary)' }} />
              <div className="empty-state-title mt-16" style={{ fontSize: '1.1rem', fontWeight: 600 }}>কোনো ইনভয়েস খুঁজে পাওয়া যায়নি</div>
            </div>
          ) : (
            <div className="card table-container" style={{ padding: 0 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>ইনভয়েস নং</th>
                    <th>ছাত্রের নাম (আইডি / অভিভাবক)</th>
                    <th>শ্রেণি ও সেকশন</th>
                    <th>বিবরণ</th>
                    <th>ইস্যু ডেট</th>
                    <th>টোটাল (৳)</th>
                    <th>বকেয়া (৳)</th>
                    <th>স্ট্যাটাস</th>
                    <th style={{ width: '180px', textAlign: 'center' }}>অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.map((inv) => {
                    const sName = inv.student?.user ? `${inv.student.user.firstName || ''} ${inv.student.user.lastName || ''}`.trim() : 'অজানা';
                    const matchedSt = students.find(s => 
                      (inv.student?._id && s._id === inv.student._id) || 
                      (inv.student?.studentId && s.studentId === inv.student.studentId) ||
                      (typeof inv.student === 'string' && (s._id === inv.student || s.studentId === inv.student))
                    );
                    const enrollment = inv.student?.currentEnrollment || matchedSt?.currentEnrollment;
                    const classNameVal = enrollment?.classLevel?.name || '—';
                    const rawSection = enrollment?.section;
                    const sectionNameVal = (typeof rawSection === 'object' && rawSection?.name) 
                      ? rawSection.name 
                      : (typeof rawSection === 'string' && rawSection !== '—' && rawSection !== 'none' && rawSection !== 'কোন সেকশন নাই' ? rawSection : '');

                    return (
                      <tr key={inv._id}>
                        <td className="font-semibold" style={{ fontFamily: 'Inter' }}>{inv.invoiceNumber}</td>
                        <td>
                          <div className="font-bold text-primary" style={{ fontSize: '0.95rem' }}>{sName}</div>
                          <div className="text-xs text-secondary" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                            আইডি: {inv.student?.studentId || '—'}
                          </div>
                          {inv.guardian && (
                            <div className="text-xs text-muted font-medium" style={{ marginTop: '2px' }}>
                              অভিভাবক: {inv.guardian.name} ({inv.guardian.relationship})
                            </div>
                          )}
                        </td>
                        <td>
                          <span className="text-sm font-medium">
                            {classNameVal}
                            {sectionNameVal && sectionNameVal !== '—' && (
                              <span className="text-muted" style={{ marginLeft: '4px' }}>({sectionNameVal})</span>
                            )}
                          </span>
                        </td>
                        <td>{inv.title}</td>
                        <td>{formatDateDDMMYYYY(inv.issueDate)}</td>
                        <td className="font-semibold" style={{ fontFamily: 'Inter' }}>{inv.payableTotal}</td>
                        <td className="font-semibold" style={{ color: inv.balance > 0 ? 'var(--danger)' : 'var(--success)', fontFamily: 'Inter' }}>
                          {inv.balance}
                        </td>
                        <td>
                          <span className={`badge ${inv.status === 'paid' ? 'badge-active' : inv.status === 'partial' ? 'badge-warning' : 'badge-danger'}`}>
                            {inv.status === 'paid' ? 'পরিশোধিত' : inv.status === 'partial' ? 'আংশিক' : 'বকেয়া'}
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-8 justify-center">
                            <button 
                              className="btn btn-ghost btn-sm" 
                              onClick={() => handleOpenSlipModal(inv)} 
                              title="রসিদ দেখুন"
                            >
                              <Eye size={14} /> রসিদ
                            </button>
                            {inv.status !== 'paid' && (
                              <button 
                                className="btn btn-primary btn-sm" 
                                onClick={() => handleOpenPaymentModal(inv)}
                                style={{ padding: '4px 8px', fontSize: '0.8rem' }}
                              >
                                <DollarSign size={12} /> পেমেন্ট
                              </button>
                            )}
                            {isSuperAdmin && (
                              <>
                                {(inv.paidTotal > 0 || (inv.payments && inv.payments.length > 0)) && (
                                  <button 
                                    className="btn btn-ghost btn-sm" 
                                    onClick={() => {
                                      if (inv.payments && inv.payments.length === 1) {
                                        handleRevertPayment(inv.payments[0]);
                                      } else {
                                        handleOpenSlipModal(inv);
                                      }
                                    }} 
                                    title="পেমেন্ট বাতিল / রিভার্ট করুন (Super Admin / Admin)"
                                    style={{ color: '#d97706' }}
                                  >
                                    <RotateCcw size={14} />
                                  </button>
                                )}
                                <button 
                                  className="btn btn-ghost btn-sm text-primary" 
                                  onClick={() => handleOpenEditInvoiceModal(inv)} 
                                  title="ইনভয়েস এডিট করুন (Super Admin)"
                                >
                                  <Edit size={14} />
                                </button>
                                <button 
                                  className="btn btn-ghost btn-sm text-danger" 
                                  onClick={() => handleDeleteInvoice(inv)} 
                                  title="ইনভয়েস ডিলিট করুন (Super Admin)"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : activeTab === 'pending' ? (
        /* Pending Verification Tab */
        <>
          {pendingLoading ? (
            <div className="flex-center" style={{ padding: '60px' }}>
              <div className="spinner"></div>
            </div>
          ) : pendingPayments.length === 0 ? (
            <div className="card empty-state">
              <CheckCircle size={48} style={{ opacity: 0.3, color: 'var(--success)' }} />
              <div className="empty-state-title mt-16" style={{ fontSize: '1.1rem', fontWeight: 600 }}>কোনো অপেক্ষাধীন পেমেন্ট নেই</div>
              <p className="text-muted text-sm mt-8">সব পেমেন্ট ভেরিফাই করা হয়েছে।</p>
            </div>
          ) : (
            <div className="card table-container" style={{ padding: 0 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>ছাত্র আইডি / নাম (অভিভাবক)</th>
                    <th>ইনভয়েস নং (বকেয়া)</th>
                    <th>টাকা পরিশোধের মাস / বিবরণ</th>
                    <th>পেমেন্ট মাধ্যম</th>
                    <th>ট্রানজেকশন আইডি</th>
                    <th>পেমেন্ট পরিমাণ (৳)</th>
                    <th>চার্জ (৳)</th>
                    <th>সর্বমোট (৳)</th>
                    <th style={{ width: '220px', textAlign: 'center' }}>অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingPayments.map((pay) => {
                    const sName = pay.student?.user ? `${pay.student.user.firstName || ''} ${pay.student.user.lastName || ''}`.trim() : 'অজানা';
                    return (
                      <tr key={pay._id}>
                        <td>
                          <div className="font-bold">{sName}</div>
                          <div className="text-xs text-muted" style={{ fontFamily: 'Inter' }}>আইডি: {pay.student?.studentId}</div>
                          {pay.guardian && (
                            <div className="text-xs text-muted">অভিভাবক: {pay.guardian.name}</div>
                          )}
                        </td>
                        <td>
                          <div>{pay.invoice?.invoiceNumber}</div>
                          <div className="text-xs text-muted">বকেয়া: ৳{pay.invoice?.balance}</div>
                        </td>
                        <td>
                          <div className="font-medium text-primary">{pay.feeMonth}</div>
                          <div className="text-xs text-muted">{pay.invoice?.title}</div>
                        </td>
                        <td><span className="font-semibold text-primary">{getMethodLabel(pay.method)}</span></td>
                        <td className="font-semibold" style={{ fontFamily: 'Inter' }}>{pay.transactionReference || '—'}</td>
                        <td className="font-semibold" style={{ fontFamily: 'Inter' }}>{pay.amount}</td>
                        <td className="text-muted" style={{ fontFamily: 'Inter' }}>{pay.gatewayCharge}</td>
                        <td className="font-bold" style={{ color: 'var(--primary)', fontFamily: 'Inter' }}>{pay.amount + (pay.gatewayCharge || 0)}</td>
                        <td>
                          <div className="flex gap-8 justify-center">
                            <button 
                              className="btn btn-success btn-sm flex-center gap-4" 
                              onClick={() => openVerifyModal(pay)}
                              style={{ padding: '4px 8px' }}
                              title="ভেরিফাই করুন"
                            >
                              <CheckCircle size={14} /> 
                            </button>
                            <button 
                              className="btn btn-danger btn-sm flex-center gap-4" 
                              onClick={() => handleRejectPending(pay._id)}
                              style={{ padding: '6px 10px' }}
                            >
                              <X size={14} /> বাতিল
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
        </>
      ) : (
        /* Dues & Defaulter Report Tab (কার কত টাকা বকেয়া আছে এবং টোটাল কত) */
        <div className="animate-slide-up">
          {/* Search, Filter & Action Bar */}
          <div className="card mb-24" style={{ padding: '18px 24px' }}>
            <div className="flex gap-16" style={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div className="flex gap-16" style={{ alignItems: 'center', flex: 1, minWidth: '280px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="শিক্ষার্থীর নাম, আইডি, রোল বা অভিভাবকের ফোন..."
                    value={duesSearchQuery}
                    onChange={(e) => setDuesSearchQuery(e.target.value)}
                    style={{ paddingLeft: '44px', borderRadius: '10px' }}
                  />
                </div>
                <select
                  className="form-input form-select"
                  value={duesClassFilter}
                  onChange={(e) => setDuesClassFilter(e.target.value)}
                  style={{ width: 'auto', minWidth: '180px', borderRadius: '10px' }}
                >
                  <option value="all">সকল শ্রেণি (All Classes)</option>
                  {classes.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-12" style={{ alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSendDueReminders}
                  disabled={sendingReminders}
                  title="বকেয়া তাগিদ নোটিফিকেশন পাঠান"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Bell size={16} /> বকেয়া তাগিদ পাঠান
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePrintDuesReport}
                  disabled={studentDuesSummary.length === 0}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontWeight: 700 }}
                >
                  <Printer size={16} /> 🖨️ বকেয়া রিপোর্ট প্রিন্ট করুন
                </button>
              </div>
            </div>
          </div>

          {/* Dues KPI Summary Cards */}
          <div className="grid grid-3 mb-24">
            <div className="card text-center hover-lift" style={{ borderLeft: '5px solid #ef4444', padding: '20px' }}>
              <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>মোট বকেয়াধারী শিক্ষার্থী</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ef4444' }}>
                {studentDuesSummary.length} জন
              </div>
            </div>
            <div className="card text-center hover-lift" style={{ borderLeft: '5px solid #f59e0b', padding: '20px' }}>
              <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>মোট অপরিশোধিত ইনভয়েস</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>
                {totalDuesInvoicesCount} টি
              </div>
            </div>
            <div className="card text-center hover-lift" style={{ borderLeft: '5px solid #b91c1c', padding: '20px', background: 'rgba(239, 68, 68, 0.04)' }}>
              <h3 className="text-muted text-sm mb-8" style={{ fontWeight: 600 }}>সর্বমোট বকেয়ার পরিমাণ (Grand Total Due)</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#b91c1c' }}>
                ৳{totalDuesAmount.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Dues Table */}
          {studentDuesSummary.length === 0 ? (
            <div className="card empty-state">
              <CheckCircle size={48} style={{ opacity: 0.3, color: 'var(--success)' }} />
              <div className="empty-state-title mt-16" style={{ fontSize: '1.1rem', fontWeight: 600 }}>কোনো বকেয়া পাওয়া যায়নি!</div>
              <p className="text-muted text-sm mt-8">মাশাআল্লাহ, নির্বাচিত ফিল্টারে কোনো শিক্ষার্থীর ফি বকেয়া নেই।</p>
            </div>
          ) : (
            <div className="card table-container" style={{ padding: 0 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: '45px', textAlign: 'center' }}>ক্র.</th>
                    <th style={{ width: '70px', textAlign: 'center' }}>রোল</th>
                    <th>শিক্ষার্থীর নাম ও আইডি</th>
                    <th>শ্রেণি ও সেকশন</th>
                    <th>অভিভাবক ও মোবাইল নম্বর</th>
                    <th>বকেয়ার খাত ও মাসসমূহ</th>
                    <th style={{ width: '80px', textAlign: 'center' }}>ইনভয়েস</th>
                    <th style={{ textAlign: 'right', width: '130px' }}>মোট বকেয়া (৳)</th>
                    <th style={{ width: '130px', textAlign: 'center' }}>অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {studentDuesSummary.map((item, index) => (
                    <tr key={item.studentId}>
                      <td style={{ textAlign: 'center', fontFamily: 'Inter', color: 'var(--text-muted)' }}>{index + 1}</td>
                      <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700 }}>{item.roll}</td>
                      <td>
                        <div className="font-bold">{item.studentName}</div>
                        <div className="text-xs text-muted" style={{ fontFamily: 'Inter' }}>আইডি: {item.studentCode}</div>
                      </td>
                      <td>
                        <div>{item.className}</div>
                        {item.sectionName && item.sectionName !== '—' && (
                          <div className="text-xs text-muted">সেকশন: {item.sectionName}</div>
                        )}
                      </td>
                      <td>
                        <div>{item.guardianName}</div>
                        <div className="text-xs" style={{ fontFamily: 'Inter', color: 'var(--primary-600, #0284c7)' }}>{item.guardianPhone}</div>
                      </td>
                      <td>
                        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                          {item.dueItems.map((dItem, i) => (
                            <span key={i} className="badge badge-warning" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                              {dItem}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600 }}>
                        {item.invoices.length}টি
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 800, color: '#b91c1c', fontFamily: 'Inter', fontSize: '1rem' }}>
                        ৳{item.totalDue.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
                      </td>
                      <td>
                        <div className="flex gap-4 justify-center">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              setSearchQuery(item.studentCode || item.studentName);
                              setActiveTab('invoices');
                            }}
                            title="ইনভয়েস দেখুন"
                            style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                          >
                            <Eye size={13} /> দেখুন
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              setUnifiedForm(prev => ({
                                ...prev,
                                student: item.studentId,
                                includeMonthlyFee: false,
                                payNow: true,
                                paymentAmount: item.totalDue
                              }));
                              setIsInvoiceModalOpen(true);
                            }}
                            title="বকেয়া আদায় করুন"
                            style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                          >
                            আদায়
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ background: 'var(--bg-secondary)', fontWeight: 800 }}>
                    <td colSpan={7} style={{ textAlign: 'right', padding: '14px 20px', fontSize: '0.95rem' }}>
                      সর্বমোট বকেয়ার পরিমাণ (Grand Total Outstanding):
                    </td>
                    <td style={{ textAlign: 'right', padding: '14px 20px', fontSize: '1.15rem', color: '#b91c1c' }}>
                      ৳{totalDuesAmount.toLocaleString('bn-BD', { minimumFractionDigits: 2 })}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Set Class Fees Modal (Superadmin Only) */}
      {isClassFeeModalOpen && isSuperAdmin && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '780px', maxHeight: '90vh', overflowY: 'auto',
            padding: '30px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsClassFeeModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Settings size={22} style={{ color: 'var(--primary)' }} />
              শ্রেণি ভিত্তিক সকল ফি নির্ধারণ
            </h2>

            <div className="flex-column gap-16">
              {classes.map(c => (
                <div key={c._id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                  <div className="font-bold text-primary mb-8" style={{ fontSize: '1rem' }}>{c.name} ({c.code})</div>
                  <div className="grid grid-4" style={{ gap: '12px' }}>
                    <div>
                      <label className="form-label text-xs">মাসিক বেতন (৳)</label>
                      <input 
                        type="number"
                        className="form-input text-sm"
                        value={classFeeInputs[c._id]?.monthlyFee || 0}
                        onChange={(e) => setClassFeeInputs({
                          ...classFeeInputs,
                          [c._id]: { ...classFeeInputs[c._id], monthlyFee: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <label className="form-label text-xs">ভর্তি ফি (৳)</label>
                      <input 
                        type="number"
                        className="form-input text-sm"
                        value={classFeeInputs[c._id]?.admissionFee || 0}
                        onChange={(e) => setClassFeeInputs({
                          ...classFeeInputs,
                          [c._id]: { ...classFeeInputs[c._id], admissionFee: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <label className="form-label text-xs">সেশন ফি (৳)</label>
                      <input 
                        type="number"
                        className="form-input text-sm"
                        value={classFeeInputs[c._id]?.sessionFee || 0}
                        onChange={(e) => setClassFeeInputs({
                          ...classFeeInputs,
                          [c._id]: { ...classFeeInputs[c._id], sessionFee: e.target.value }
                        })}
                      />
                    </div>
                    <div>
                      <label className="form-label text-xs">পরীক্ষা ফি (৳)</label>
                      <input 
                        type="number"
                        className="form-input text-sm"
                        value={classFeeInputs[c._id]?.examFee || 0}
                        onChange={(e) => setClassFeeInputs({
                          ...classFeeInputs,
                          [c._id]: { ...classFeeInputs[c._id], examFee: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', marginTop: '24px', gap: '12px', justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary" onClick={() => setIsClassFeeModalOpen(false)}>বাতিল</button>
              <button className="btn btn-primary" onClick={handleSaveAllClassFees} disabled={submitting}>
                {submitting ? 'সংরক্ষণ হচ্ছে...' : 'সব ফি একসাথে সংরক্ষণ করুন'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Generator Modal (Staff Only) */}
      {isGeneratorModalOpen && canManage && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '520px', padding: '30px', borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsGeneratorModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Receipt size={22} style={{ color: 'var(--primary)' }} />
              ইনভয়েস জেনারেটর (ব্যাচ প্রসেস)
            </h2>

            <div className="flex-column gap-16">
              {/* Option B: Category Fee (Admission/Session/Exam Fee) Generation */}
              <div>
                <p className="text-xs text-muted mb-12">মাসিক বেতন, ভর্তি, সেশন বা পরীক্ষা ফি নির্ধারণ করা থাকলে সকল সক্রিয় শিক্ষার্থীর জন্য ইনভয়েস তৈরি করুন।</p>
                
                <div className="grid grid-3 mb-12" style={{ gap: '8px' }}>
                  <div>
                    <label className="form-label text-xs">ফি ক্যাটাগরি</label>
                    <select 
                      className="form-select form-input"
                      value={generatorForm.category}
                      onChange={(e) => setGeneratorForm({ ...generatorForm, category: e.target.value })}
                    >
                      <option value="monthlyFee">মাসিক বেতন</option>
                      <option value="examFee">পরীক্ষা ফি</option>
                      <option value="sessionFee">সেশন ফি</option>
                      <option value="admissionFee">ভর্তি ফি</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label text-xs">মাস</label>
                    <select 
                      className="form-select form-input"
                      value={generatorForm.month}
                      onChange={(e) => setGeneratorForm({ ...generatorForm, month: e.target.value })}
                    >
                      {MONTHS.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label text-xs">বছর</label>
                    <input 
                      type="text"
                      className="form-input"
                      value={generatorForm.year}
                      onChange={(e) => setGeneratorForm({ ...generatorForm, year: e.target.value })}
                    />
                  </div>
                </div>
                <button 
                  className="btn btn-success w-full"
                  onClick={handleGenerateCategoryInvoices}
                  disabled={submitting}
                  style={{ width: '100%' }}
                >
                  {submitting ? 'জেনারেট হচ্ছে...' : 'ইনভয়েস তৈরি করুন'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unified New Invoice & Payment Modal */}
      {isInvoiceModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '580px', maxHeight: '90vh', overflowY: 'auto',
            padding: '30px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)', position: 'relative'
          }}>
            <button 
              onClick={() => setIsInvoiceModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={22} style={{ color: 'var(--primary)' }} />
              নতুন ইনভয়েস ও ফি পরিশোধ
            </h2>

            <form onSubmit={handleSubmitUnified} className="flex-column gap-16">
              
              {/* Student Selector */}
              {user?.userType !== 'student' ? (
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>শিক্ষার্থী নির্বাচন করুন *</label>
                  <select
                    className="form-select form-input"
                    value={unifiedForm.student}
                    onChange={(e) => {
                      const selectedId = e.target.value;
                      const sDoc = students.find(s => s._id === selectedId);
                      const cLevel = sDoc?.currentEnrollment?.classLevel;
                      const matchedClass = classes.find(c => c._id === (cLevel?._id || cLevel));
                      const mFee = (cLevel && typeof cLevel === 'object' && cLevel.monthlyFee > 0)
                        ? cLevel.monthlyFee
                        : (matchedClass?.monthlyFee || 0);

                      setUnifiedForm(prev => ({
                        ...prev,
                        student: selectedId,
                        monthlyFeeRate: mFee > 0 ? mFee : (prev.monthlyFeeRate || ''),
                        selectedMonths: getInitialAvailableMonths(selectedId, invoices),
                        admissionFeeAmount: cLevel?.admissionFee || matchedClass?.admissionFee || 0,
                        examFeeAmount: cLevel?.examFee || matchedClass?.examFee || 0,
                        sessionFeeAmount: cLevel?.sessionFee || matchedClass?.sessionFee || 0,
                      }));
                    }}
                    required
                  >
                    <option value="">-- শিক্ষার্থী বাছুন --</option>
                    {students.map(s => {
                      const sName = s.user ? `${s.user.firstName || ''} ${s.user.lastName || ''}`.trim() : 'অজানা';
                      const cName = s.currentEnrollment?.classLevel?.name || '—';
                      return (
                        <option key={s._id} value={s._id}>{sName} ({s.studentId}) - {cName}</option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                <div className="card font-medium" style={{ background: 'var(--body-bg)', padding: '12px 16px' }}>
                  <strong>শিক্ষার্থী:</strong> {activeStudentDoc?.user ? `${activeStudentDoc.user.firstName || ''} ${activeStudentDoc.user.lastName || ''}`.trim() : ''} ({activeStudentDoc?.studentId})
                  <br /><strong>শ্রেণি:</strong> {activeStudentDoc?.currentEnrollment?.classLevel?.name || '—'}
                </div>
              )}

              {/* Due Date & General Info */}
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>পরিশোধের শেষ তারিখ *</label>
                  <input
                    type="date"
                    className="form-input"
                    value={unifiedForm.dueDate}
                    onChange={(e) => setUnifiedForm({ ...unifiedForm, dueDate: e.target.value })}
                    required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="text-xs text-muted">
                    💡 এক বা একাধিক ফি (বেতন, ভর্তি ফি, পরীক্ষা ফি, সেশন ফি) একসাথে যুক্ত করতে নিচে টিক দিন।
                  </span>
                </div>
              </div>

              {/* Multi-Fee Selection Panel */}
              <div className="card" style={{ background: 'var(--body-bg)', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '10px' }}>
                <label className="form-label font-bold" style={{ fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '12px', display: 'block' }}>
                  ফি খাতসমূহ নির্বাচন করুন (একত্রে একাধিক ফি দেওয়ার সুবিধা):
                </label>

                <div className="flex-column gap-12">
                  {/* 1. Monthly Tuition Fee Item */}
                  <div style={{ background: 'var(--card-bg)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div className="flex justify-between" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <label className="flex gap-8" style={{ alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={unifiedForm.includeMonthlyFee}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, includeMonthlyFee: e.target.checked })}
                        />
                        <span>মাসিক বেতন</span>
                      </label>
                      {unifiedForm.includeMonthlyFee ? (
                        <div className="flex gap-4" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted">প্রতি মাসের ফি: ৳</span>
                          <input
                            type="number"
                            min="0"
                            className="form-input"
                            style={{ width: '120px', padding: '4px 8px', fontSize: '0.85rem' }}
                            placeholder="বেতনের পরিমাণ"
                            value={unifiedForm.monthlyFeeRate !== undefined && unifiedForm.monthlyFeeRate !== '' ? unifiedForm.monthlyFeeRate : (monthlyRate > 0 ? monthlyRate : '')}
                            onChange={(e) => {
                              const val = e.target.value;
                              setUnifiedForm(prev => ({
                                ...prev,
                                monthlyFeeRate: val === '' ? '' : (parseFloat(val) || 0)
                              }));
                            }}
                            disabled={!canManage}
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-muted">৳{monthlyRate || 0}/মাস</span>
                      )}
                    </div>

                    {unifiedForm.includeMonthlyFee && (
                      <div className="mt-12 animate-fade-in" style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '10px' }}>
                        <div className="flex justify-between mb-8" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted font-medium">বেতনের মাস সিলেক্ট করুন ({unifiedMonthsCount} মাস নির্বাচিত):</span>
                          <button
                            type="button"
                            className="btn btn-ghost btn-xs text-xs"
                            onClick={() => {
                              const currM = MONTHS[new Date().getMonth()];
                              const already = getStudentInvoicedMonths(unifiedForm.student);
                              if (already.includes(currM)) {
                                setToast({ type: 'warning', message: `চলতি মাস (${currM})-এর ইনভয়েস ইতিমধ্যে তৈরি করা রয়েছে!` });
                              } else {
                                setUnifiedForm(prev => ({ ...prev, selectedMonths: [currM] }));
                              }
                            }}
                          >
                            চলতি মাস
                          </button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                          {MONTHS.map(m => {
                            const isChecked = unifiedForm.selectedMonths.includes(m);
                            const alreadyInvoiced = getStudentInvoicedMonths(unifiedForm.student);
                            const isAlreadyInvoiced = alreadyInvoiced.includes(m);

                            return (
                              <button
                                type="button"
                                key={m}
                                disabled={isAlreadyInvoiced}
                                onClick={() => !isAlreadyInvoiced && toggleMonth(m)}
                                title={isAlreadyInvoiced ? `${m} মাসের ইনভয়েস ইতিমধ্যে তৈরি হয়েছে` : m}
                                style={{
                                  padding: '5px 4px', fontSize: '0.75rem', borderRadius: '6px',
                                  cursor: isAlreadyInvoiced ? 'not-allowed' : 'pointer',
                                  border: isAlreadyInvoiced 
                                    ? '1px dashed var(--border-color)' 
                                    : isChecked 
                                      ? '1px solid var(--primary)' 
                                      : '1px solid var(--border-color)',
                                  background: isAlreadyInvoiced 
                                    ? 'rgba(0, 0, 0, 0.04)' 
                                    : isChecked 
                                      ? 'rgba(20, 184, 166, 0.15)' 
                                      : 'var(--card-bg)',
                                  color: isAlreadyInvoiced 
                                    ? 'var(--text-muted)' 
                                    : isChecked 
                                      ? 'var(--primary)' 
                                      : 'var(--text-secondary)',
                                  fontWeight: isChecked ? 'bold' : 'normal',
                                  opacity: isAlreadyInvoiced ? 0.65 : 1,
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <div>{m}</div>
                                {isAlreadyInvoiced && (
                                  <div style={{ fontSize: '0.62rem', color: 'var(--danger, #ef4444)', marginTop: '2px', fontWeight: 600 }}>
                                    (ইনভয়েস আছে)
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <div className="flex justify-between mt-12" style={{ alignItems: 'center', fontSize: '0.85rem' }}>
                          <span className="text-muted">মাসিক উপমোট ({unifiedMonthsCount} মাস × ৳{monthlyRate}):</span>
                          <span className="font-semibold text-primary" style={{ fontFamily: 'Inter', fontSize: '1rem' }}>
                            ৳{monthlySubtotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Admission Fee Item */}
                  <div style={{ background: 'var(--card-bg)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div className="flex justify-between" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <label className="flex gap-8" style={{ alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={unifiedForm.includeAdmissionFee}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setUnifiedForm({
                              ...unifiedForm,
                              includeAdmissionFee: checked,
                              admissionFeeAmount: checked ? (unifiedForm.admissionFeeAmount || activeClassFeeConfig?.admissionFee || 0) : 0
                            });
                          }}
                        />
                        <span>ভর্তি ফি</span>
                      </label>
                      {unifiedForm.includeAdmissionFee ? (
                        <div className="flex gap-4" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted">পরিমাণ: ৳</span>
                          <input
                            type="number"
                            min="0"
                            className="form-input"
                            style={{ width: '120px', padding: '4px 8px', fontSize: '0.85rem' }}
                            value={unifiedForm.admissionFeeAmount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, admissionFeeAmount: parseFloat(e.target.value) || 0 })}
                            disabled={!canManage}
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-muted">৳{activeClassFeeConfig?.admissionFee || 0}</span>
                      )}
                    </div>
                  </div>

                  {/* 3. Exam Fee Item */}
                  <div style={{ background: 'var(--card-bg)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div className="flex justify-between" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <label className="flex gap-8" style={{ alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={unifiedForm.includeExamFee}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setUnifiedForm({
                              ...unifiedForm,
                              includeExamFee: checked,
                              examFeeAmount: checked ? (unifiedForm.examFeeAmount || activeClassFeeConfig?.examFee || 0) : 0
                            });
                          }}
                        />
                        <span>পরীক্ষা ফি</span>
                      </label>
                      {unifiedForm.includeExamFee ? (
                        <div className="flex gap-4" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted">পরিমাণ: ৳</span>
                          <input
                            type="number"
                            min="0"
                            className="form-input"
                            style={{ width: '120px', padding: '4px 8px', fontSize: '0.85rem' }}
                            value={unifiedForm.examFeeAmount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, examFeeAmount: parseFloat(e.target.value) || 0 })}
                            disabled={!canManage}
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-muted">৳{activeClassFeeConfig?.examFee || 0}</span>
                      )}
                    </div>
                  </div>

                  {/* 4. Session Fee Item */}
                  <div style={{ background: 'var(--card-bg)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div className="flex justify-between" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <label className="flex gap-8" style={{ alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={unifiedForm.includeSessionFee}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setUnifiedForm({
                              ...unifiedForm,
                              includeSessionFee: checked,
                              sessionFeeAmount: checked ? (unifiedForm.sessionFeeAmount || activeClassFeeConfig?.sessionFee || 0) : 0
                            });
                          }}
                        />
                        <span>সেশন ফি</span>
                      </label>
                      {unifiedForm.includeSessionFee ? (
                        <div className="flex gap-4" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted">পরিমাণ: ৳</span>
                          <input
                            type="number"
                            min="0"
                            className="form-input"
                            style={{ width: '120px', padding: '4px 8px', fontSize: '0.85rem' }}
                            value={unifiedForm.sessionFeeAmount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, sessionFeeAmount: parseFloat(e.target.value) || 0 })}
                            disabled={!canManage}
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-muted">৳{activeClassFeeConfig?.sessionFee || 0}</span>
                      )}
                    </div>
                  </div>

                  {/* 5. Other / Custom Fee Item */}
                  <div style={{ background: 'var(--card-bg)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div className="flex justify-between" style={{ alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <label className="flex gap-8" style={{ alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={unifiedForm.includeOtherFee}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, includeOtherFee: e.target.checked })}
                        />
                        <span>অন্যান্য / বিশেষ ফি</span>
                      </label>
                    </div>
                    {unifiedForm.includeOtherFee && (
                      <div className="grid grid-2 mt-8 animate-fade-in" style={{ gap: '12px' }}>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="ফি-র বিবরণ (যেমন: বই-খাতা / ইউনিফর্ম ফি)"
                          value={unifiedForm.otherFeeTitle}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, otherFeeTitle: e.target.value })}
                        />
                        <div className="flex gap-4" style={{ alignItems: 'center' }}>
                          <span className="text-xs text-muted">টাকা: ৳</span>
                          <input
                            type="number"
                            min="0"
                            className="form-input"
                            placeholder="টাকার পরিমাণ"
                            value={unifiedForm.otherFeeAmount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, otherFeeAmount: parseFloat(e.target.value) || 0 })}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtotal Summary */}
                <div className="flex justify-between mt-16 pt-12 border-t" style={{ borderTop: '1px solid var(--border-color)', fontWeight: 'bold' }}>
                  <span>সর্বমোট ফি সাবটোটাল:</span>
                  <span style={{ color: 'var(--primary)', fontFamily: 'Inter', fontSize: '1.05rem' }}>
                    ৳{computedUnifiedSubtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Fine and Discount (Staff Only) */}
              {canManage && (
                <div className="grid grid-2" style={{ gap: '16px' }}>
                  <div>
                    <label className="form-label" style={{ fontWeight: 600 }}>ডিসকাউন্ট / ছাড় (৳)</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="number"
                        min="0"
                        className="form-input"
                        style={{ flex: 1 }}
                        value={unifiedForm.discountTotal}
                        onChange={(e) => setUnifiedForm({ ...unifiedForm, discountTotal: parseFloat(e.target.value) || 0 })}
                      />
                      <select 
                        className="form-select form-input" 
                        style={{ flex: 1 }}
                        value={unifiedForm.discountType}
                        onChange={(e) => setUnifiedForm({ ...unifiedForm, discountType: e.target.value })}
                        disabled={unifiedForm.discountTotal <= 0}
                      >
                        <option value="সম্পূর্ণ ফ্রি">সম্পূর্ণ ফ্রি</option>
                        <option value="শতকরা ছাড়">শতকরা ছাড়</option>
                        <option value="এতিম">এতিম</option>
                        <option value="হাফেজ">হাফেজ</option>
                        <option value="শিক্ষক সন্তান">শিক্ষক সন্তান</option>
                        <option value="বিশেষ ছাড়">বিশেষ ছাড়</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-label" style={{ fontWeight: 600 }}>জরিমানা / অতিরিক্ত (৳)</label>
                    <input
                      type="number"
                      min="0"
                      className="form-input"
                      value={unifiedForm.fineTotal}
                      onChange={(e) => setUnifiedForm({ ...unifiedForm, fineTotal: parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              )}

              {/* Pay Now Section */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                {canManage ? (
                  <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
                    <input 
                      type="checkbox" 
                      id="payNowCheck"
                      checked={unifiedForm.payNow} 
                      onChange={(e) => setUnifiedForm({ ...unifiedForm, payNow: e.target.checked })} 
                    />
                    <label htmlFor="payNowCheck" className="font-semibold" style={{ cursor: 'pointer' }}>ইনভয়েস তৈরির সাথে সাথে এখনই পেমেন্ট গ্রহণ করতে চান?</label>
                  </div>
                ) : (
                  <div className="mb-8 font-semibold text-muted text-sm">পেমেন্ট রিকোয়েস্ট তৈরি করা হচ্ছে:</div>
                )}

                {unifiedForm.payNow && (
                  <div className="flex-column gap-16 animate-fade-in">
                    <div className="grid grid-2" style={{ gap: '16px' }}>
                      <div>
                        <label className="form-label" style={{ fontWeight: 600 }}>পরিশোধের পরিমাণ (৳) *</label>
                        <input
                          type="number"
                          min="1"
                          className="form-input"
                          value={unifiedForm.paymentAmount}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, paymentAmount: parseFloat(e.target.value) || 0 })}
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label" style={{ fontWeight: 600 }}>পেমেন্ট মাধ্যম *</label>
                        <select
                          className="form-select form-input"
                          value={unifiedForm.method}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, method: e.target.value })}
                          required
                        >
                          {canManage && <option value="cash">নগদ (Cash)</option>}
                          {canManage && <option value="bank">ব্যাংক ট্রান্সফার</option>}
                          {canManage && <option value="cheque">চেক (Cheque)</option>}
                          <option value="bkash">bKash (বিকাশ)</option>
                          <option value="nagad">Nagad (নগদ)</option>
                          <option value="rocket">Rocket (রকেট)</option>
                          <option value="online">অনলাইন পেমেন্ট</option>
                        </select>
                      </div>
                    </div>

                    {canManage && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                        <div>
                          <label className="form-label" style={{ fontWeight: 600 }}>জমা ফান্ড (Debit Account)</label>
                          <select
                            className="form-input"
                            value={unifiedForm.fundAccount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, fundAccount: e.target.value })}
                          >
                            <option value="">-- ফান্ড নির্বাচন করুন --</option>
                            {accounts.filter(a => a.type === 'Asset').map(a => (
                              <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <label className="form-label" style={{ fontWeight: 600, margin: 0 }}>
                              আয়ের খাত (Credit Account) <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                            </label>
                            <a href="/chart-of-accounts" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'underline' }}>
                              + চার্ট অব একাউন্টস
                            </a>
                          </div>
                          <select
                            className="form-input"
                            value={unifiedForm.revenueAccount}
                            onChange={(e) => setUnifiedForm({ ...unifiedForm, revenueAccount: e.target.value })}
                          >
                            <option value="">-- আয়ের খাত নির্বাচন করুন (ঐচ্ছিক) --</option>
                            {accounts.filter(a => a.type === 'Revenue').map(a => (
                              <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                            ))}
                          </select>
                          {accounts.filter(a => a.type === 'Revenue').length === 0 && (
                            <div style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span>কোনো আয়ের খাত তৈরি নেই</span>
                              <button
                                type="button"
                                onClick={handleSeedDefaultAccounts}
                                disabled={seedingAccounts}
                                style={{
                                  background: 'none', border: '1px solid var(--primary)', color: 'var(--primary)',
                                  borderRadius: '4px', padding: '1px 6px', cursor: 'pointer', fontSize: '0.72rem'
                                }}
                              >
                                {seedingAccounts ? 'যুক্ত হচ্ছে...' : '⚡ ডিফল্ট খাত যুক্ত করুন'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Transaction Reference for mobile banking */}
                    {['bkash', 'rocket', 'nagad'].includes(unifiedForm.method) && (
                      <div>
                        <label className="form-label" style={{ fontWeight: 600 }}>ট্রানজেকশন আইডি (TxnID) *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="যেমন: K28D83JS8"
                          value={unifiedForm.transactionReference}
                          onChange={(e) => setUnifiedForm({ ...unifiedForm, transactionReference: e.target.value })}
                          required
                        />
                      </div>
                    )}

                    {/* Unified calculations display */}
                    <div className="card" style={{ background: 'var(--body-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                      <div className="flex justify-between">
                        <span>মোট প্রদেয় ফি (Payable):</span>
                        <span style={{ fontFamily: 'Inter', fontWeight: 600 }}>৳{computedUnifiedPayable.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>পেমেন্ট পরিমাণ:</span>
                        <span style={{ fontFamily: 'Inter' }}>৳{directPayAmount.toFixed(2)}</span>
                      </div>
                      {directGatewayCharge > 0 && (
                        <div className="flex justify-between" style={{ color: 'var(--danger)' }}>
                          <span>গেটওয়ে চার্জ (২%):</span>
                          <span style={{ fontFamily: 'Inter' }}>৳{directGatewayCharge.toFixed(2)}</span>
                        </div>
                      )}
                      {directRemainingDue > 0 && (
                        <div className="flex justify-between text-muted">
                          <span>পেমেন্ট পরবর্তীতে বকেয়া থাকবে:</span>
                          <span style={{ fontFamily: 'Inter' }}>৳{directRemainingDue.toFixed(2)}</span>
                        </div>
                      )}
                      {directAdvancePayment > 0 && (
                        <div className="flex justify-between" style={{ color: 'var(--success)', fontWeight: 600 }}>
                          <span>অগ্রিম হিসেবে জমা থাকবে:</span>
                          <span style={{ fontFamily: 'Inter' }}>৳{directAdvancePayment.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold border-t pt-8" style={{ fontSize: '0.95rem', borderTop: '1px solid var(--border-color)' }}>
                        <span>সর্বমোট পরিশোধ পরিমাণ (চার্জ সহ):</span>
                        <span style={{ color: 'var(--primary)', fontFamily: 'Inter' }}>৳{directTotalWithCharge.toFixed(2)}</span>
                      </div>
                    </div>

                    {['bkash', 'rocket', 'nagad'].includes(unifiedForm.method) && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontSize: '0.8rem' }}>
                        <AlertCircle size={16} />
                        <span>মোবাইল ব্যাংকিং পেমেন্ট এডমিন ভেরিফাই না করা পর্যন্ত পেন্ডিং থাকবে।</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsInvoiceModalOpen(false)}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? <Loader className="animate-spin" size={16} /> : 'সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pay Existing Invoice Modal */}
      {isPaymentModalOpen && selectedInvoice && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '480px', padding: '30px', borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsPaymentModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DollarSign size={22} style={{ color: 'var(--success)' }} />
              পেমেন্ট গ্রহণ করুন
            </h2>

            <div className="mb-16" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div><strong>ইনভয়েস নম্বর:</strong> {selectedInvoice.invoiceNumber}</div>
              <div><strong>শিক্ষার্থী:</strong> {selectedInvoice.student?.user ? `${selectedInvoice.student.user.firstName || ''} ${selectedInvoice.student.user.lastName || ''}`.trim() : 'অজানা'}</div>
              <div><strong>বিবরণ:</strong> {selectedInvoice.title}</div>
              {selectedInvoice.guardian && <div><strong>অভিভাবক:</strong> {selectedInvoice.guardian.name}</div>}
              <div className="mt-8" style={{ color: 'var(--danger)', fontWeight: 700 }}>
                <strong>মোট বকেয়া:</strong> ৳{selectedInvoice.balance}
              </div>
            </div>

            <form onSubmit={handleReceivePaymentOnExisting} className="flex-column gap-16">
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>পরিশোধের মাস *</label>
                  <select
                    className="form-select form-input"
                    value={paymentForm.feeMonth}
                    onChange={(e) => setPaymentForm({ ...paymentForm, feeMonth: e.target.value })}
                    required
                  >
                    {MONTHS.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>পেমেন্ট মাধ্যম *</label>
                  <select
                    className="form-select form-input"
                    value={paymentForm.method}
                    onChange={(e) => setPaymentForm({ ...paymentForm, method: e.target.value })}
                    required
                  >
                    {canManage && <option value="cash">নগদ (Cash)</option>}
                    {canManage && <option value="bank">ব্যাংক ট্রান্সফার</option>}
                    {canManage && <option value="cheque">চেক (Cheque)</option>}
                    <option value="bkash">bKash (বিকাশ)</option>
                    <option value="nagad">Nagad (নগদ)</option>
                    <option value="rocket">Rocket (রকেট)</option>
                    <option value="online">অনলাইন পেমেন্ট</option>
                  </select>
                </div>
              </div>

              {canManage && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label className="form-label" style={{ fontWeight: 600 }}>জমা ফান্ড (Debit Account)</label>
                    <select
                      className="form-input"
                      value={paymentForm.fundAccount}
                      onChange={(e) => setPaymentForm({ ...paymentForm, fundAccount: e.target.value })}
                    >
                      <option value="">-- ফান্ড নির্বাচন করুন --</option>
                      {accounts.filter(a => a.type === 'Asset').map(a => (
                        <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <label className="form-label" style={{ fontWeight: 600, margin: 0 }}>
                        আয়ের খাত (Credit Account) <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                      </label>
                      <a href="/chart-of-accounts" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'underline' }}>
                        + চার্ট অব একাউন্টস
                      </a>
                    </div>
                    <select
                      className="form-input"
                      value={paymentForm.revenueAccount}
                      onChange={(e) => setPaymentForm({ ...paymentForm, revenueAccount: e.target.value })}
                    >
                      <option value="">-- আয়ের খাত নির্বাচন করুন (ঐচ্ছিক) --</option>
                      {accounts.filter(a => a.type === 'Revenue').map(a => (
                        <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                      ))}
                    </select>
                    {accounts.filter(a => a.type === 'Revenue').length === 0 && (
                      <div style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>কোনো আয়ের খাত তৈরি নেই</span>
                        <button
                          type="button"
                          onClick={handleSeedDefaultAccounts}
                          disabled={seedingAccounts}
                          style={{
                            background: 'none', border: '1px solid var(--primary)', color: 'var(--primary)',
                            borderRadius: '4px', padding: '1px 6px', cursor: 'pointer', fontSize: '0.72rem'
                          }}
                        >
                          {seedingAccounts ? 'যুক্ত হচ্ছে...' : '⚡ ডিফল্ট খাত যুক্ত করুন'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="form-label" style={{ fontWeight: 600 }}>পেমেন্ট পরিমাণ (৳) *</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm({ ...paymentForm, amount: parseFloat(e.target.value) || 0 })}
                  required
                />
              </div>

              {['bkash', 'rocket', 'nagad'].includes(activeMethod) && (
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>ট্রানজেকশন আইডি (TxnID) *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="যেমন: K28D83JS8"
                    value={paymentForm.transactionReference}
                    onChange={(e) => setPaymentForm({ ...paymentForm, transactionReference: e.target.value })}
                    required
                  />
                </div>
              )}

              <div className="card" style={{ background: 'var(--body-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div className="flex justify-between">
                  <span>পরিশোধের পরিমাণ:</span>
                  <span style={{ fontFamily: 'Inter' }}>৳{enteredAmount.toFixed(2)}</span>
                </div>
                {gatewayCharge > 0 && (
                  <div className="flex justify-between" style={{ color: 'var(--danger)' }}>
                    <span>গেটওয়ে চার্জ (২%):</span>
                    <span style={{ fontFamily: 'Inter' }}>৳{gatewayCharge.toFixed(2)}</span>
                  </div>
                )}
                {remainingBalance > 0 && (
                  <div className="flex justify-between text-muted">
                    <span>পেমেন্ট পরবর্তীতে বকেয়া থাকবে:</span>
                    <span style={{ fontFamily: 'Inter' }}>৳{remainingBalance.toFixed(2)}</span>
                  </div>
                )}
                {advancePayment > 0 && (
                  <div className="flex justify-between" style={{ color: 'var(--success)', fontWeight: 600 }}>
                    <span>অগ্রিম হিসেবে জমা হবে:</span>
                    <span style={{ fontFamily: 'Inter' }}>৳{advancePayment.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold border-t pt-8" style={{ fontSize: '0.95rem', borderTop: '1px solid var(--border-color)' }}>
                  <span>সর্বমোট প্রদেয় (চার্জ সহ):</span>
                  <span style={{ color: 'var(--primary)', fontFamily: 'Inter' }}>৳{totalAmountToPay.toFixed(2)}</span>
                </div>
              </div>

              {['bkash', 'rocket', 'nagad'].includes(activeMethod) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontSize: '0.8rem' }}>
                  <AlertCircle size={16} />
                  <span>মোবাইল ব্যাংকিং পেমেন্ট এডমিন ভেরিফাই না করা পর্যন্ত পেন্ডিং থাকবে।</span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsPaymentModalOpen(false)}>বাতিল</button>
                <button type="submit" className="btn btn-success" disabled={submitting}>
                  {submitting ? <Loader className="animate-spin" size={16} /> : 'পেমেন্ট জমা দিন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Slip / Receipt View Modal */}
      {isSlipModalOpen && selectedInvoice && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }} className="print-modal-overlay">
          <div className="card print-receipt-card" style={{
            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
            padding: '40px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)', position: 'relative'
          }}>
            <button 
              onClick={() => setIsSlipModalOpen(false)}
              className="no-print"
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            {/* Signature Roles Selector (no-print) */}
            <PrintSignatureRoleSelector
              selectedRoles={selectedReceiptRoles}
              onChange={(roles) => {
                setSelectedReceiptRoles(roles);
                try {
                  localStorage.setItem('annur_footer_roles__receipt', JSON.stringify(roles));
                } catch (_) {}
              }}
              additionalRoles={customReceiptRoles}
              style={{ marginBottom: '16px' }}
            />


            <div className="print-area" style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src="/images/madrasah_logo.png" 
                alt="Watermark" 
                className="print-watermark"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '240px',
                  height: '240px',
                  objectFit: 'contain',
                  opacity: 0.06,
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
              <MadrasahLetterhead
                documentTitle="মাদরাসা ফিস ও বেতন রসিদ (Money Receipt)"
                compact={true}
              />

              {/* Receipt Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ marginBottom: '4px' }}><strong>ইনভয়েস নং:</strong> <span style={{ fontFamily: 'Inter' }}>{selectedInvoice.invoiceNumber}</span></div>
                  <div style={{ marginBottom: '4px' }}><strong>তারিখ:</strong> {formatDateDDMMYYYY(selectedInvoice.issueDate)}</div>
                  <div><strong>শেষ তারিখ:</strong> {formatDateDDMMYYYY(selectedInvoice.dueDate)}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <strong>ছাত্রের নাম:</strong> {selectedInvoice.student?.user ? `${selectedInvoice.student.user.firstName || ''} ${selectedInvoice.student.user.lastName || ''}`.trim() : 'অজানা'}
                  </div>
                  <div style={{ marginBottom: '4px' }}><strong>ছাত্র আইডি:</strong> <span style={{ fontFamily: 'Inter' }}>{selectedInvoice.student?.studentId || '—'}</span></div>
                  <div style={{ marginBottom: '4px' }}>
                    <strong>শ্রেণি ও সেকশন:</strong> {(() => {
                      const matchedStModal = students.find(s => 
                        (selectedInvoice.student?._id && s._id === selectedInvoice.student._id) || 
                        (selectedInvoice.student?.studentId && s.studentId === selectedInvoice.student.studentId) ||
                        (typeof selectedInvoice.student === 'string' && (s._id === selectedInvoice.student || s.studentId === selectedInvoice.student))
                      );
                      const curEnr = selectedInvoice.student?.currentEnrollment || matchedStModal?.currentEnrollment;
                      const cName = curEnr?.classLevel?.name || '—';
                      const rawSec = curEnr?.section;
                      const secName = (typeof rawSec === 'object' && rawSec?.name) ? rawSec.name : (typeof rawSec === 'string' && rawSec !== '—' && rawSec !== 'none' && rawSec !== 'কোন সেকশন নাই' ? rawSec : '');
                      return (
                        <span>
                          {cName}
                          {secName && (
                            <span style={{ marginLeft: '4px' }}>({secName})</span>
                          )}
                        </span>
                      );
                    })()}
                  </div>
                  {selectedInvoice.guardian && (
                    <div><strong>অভিভাবকের নাম:</strong> {selectedInvoice.guardian.name} ({selectedInvoice.guardian.relationship})</div>
                  )}
                </div>
              </div>

              {/* Items Table */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                    <th style={{ padding: '8px 0' }}>বিবরণ / ক্যাটাগরি</th>
                    <th style={{ padding: '8px 0', textAlign: 'right' }}>পরিমাণ (৳)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px 0' }}>{selectedInvoice.title}</td>
                    <td style={{ padding: '12px 0', textAlign: 'right', fontFamily: 'Inter' }}>{selectedInvoice.subtotal.toFixed(2)}</td>
                  </tr>
                  {selectedInvoice.fineTotal > 0 && (
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '8px 0', color: 'var(--danger)' }}>জরিমানা (+)</td>
                      <td style={{ padding: '8px 0', textAlign: 'right', color: 'var(--danger)', fontFamily: 'Inter' }}>{selectedInvoice.fineTotal.toFixed(2)}</td>
                    </tr>
                  )}
                  {selectedInvoice.discountTotal > 0 && (
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '8px 0', color: 'var(--success)' }}>
                        ছাড় (-) {selectedInvoice.discountType && <span style={{ fontSize: '0.8rem', background: 'rgba(34,197,94,0.1)', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>{selectedInvoice.discountType}</span>}
                      </td>
                      <td style={{ padding: '8px 0', textAlign: 'right', color: 'var(--success)', fontFamily: 'Inter' }}>{selectedInvoice.discountTotal.toFixed(2)}</td>
                    </tr>
                  )}
                  <tr style={{ fontWeight: 'bold', fontSize: '1.05rem', borderBottom: '2px solid var(--border-color)' }}>
                    <td style={{ padding: '12px 0' }}>সর্বমোট প্রদেয়</td>
                    <td style={{ padding: '12px 0', textAlign: 'right', color: 'var(--primary)', fontFamily: 'Inter' }}>{selectedInvoice.payableTotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 0', color: 'var(--success)', fontWeight: 'bold' }}>সর্বমোট পরিশোধিত (Paid Total)</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', color: 'var(--success)', fontFamily: 'Inter', fontWeight: 'bold' }}>{selectedInvoice.paidTotal.toFixed(2)}</td>
                  </tr>
                  <tr style={{ fontWeight: 'bold' }}>
                    <td style={{ padding: '8px 0', color: 'var(--danger)' }}>বকেয়া (Balance Due)</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', color: 'var(--danger)', fontFamily: 'Inter' }}>{selectedInvoice.balance.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              {/* Payments History Ledger */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>পরিশোধের ইতিহাস (Payment Logs)</h4>
                {selectedInvoice.payments && selectedInvoice.payments.length > 0 ? (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '6px 0', textAlign: 'left' }}>তারিখ</th>
                        <th style={{ padding: '6px 0', textAlign: 'left' }}>মাস</th>
                        <th style={{ padding: '6px 0', textAlign: 'left' }}>পেমেন্ট মাধ্যম</th>
                        <th style={{ padding: '6px 0', textAlign: 'left' }}>রেফারেন্স / TxnID</th>
                        <th style={{ padding: '6px 0', textAlign: 'right' }}>পরিমাণ (৳)</th>
                        <th style={{ padding: '6px 0', textAlign: 'center' }}>স্ট্যাটাস</th>
                        <th style={{ padding: '6px 0', textAlign: 'right' }}>ভেরিফায়র / স্টাফ</th>
                        {isSuperAdmin && (
                          <th className="no-print" style={{ padding: '6px 0', textAlign: 'center', width: '85px' }}>অ্যাকশন</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice.payments.map((p) => {
                        const verifiedStaff = p.receivedBy ? `${p.receivedBy.firstName || ''} ${p.receivedBy.lastName || ''}`.trim() : '—';
                        return (
                          <tr key={p._id} style={{ borderBottom: '1px dotted var(--border-color)' }}>
                            <td style={{ padding: '8px 0', fontFamily: 'Inter' }}>{formatDateDDMMYYYY(p.paymentDate)}</td>
                            <td style={{ padding: '8px 0' }}>{p.feeMonth}</td>
                            <td style={{ padding: '8px 0' }}>{getMethodLabel(p.method)}</td>
                            <td style={{ padding: '8px 0', fontFamily: 'Inter' }}>{p.transactionReference || '—'}</td>
                            <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: 'Inter' }}>{p.amount.toFixed(2)}</td>
                            <td style={{ padding: '8px 0', textAlign: 'center' }}>
                              <span style={{
                                fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px',
                                background: p.status === 'success' ? 'rgba(34, 197, 94, 0.12)' : p.status === 'pending' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                                color: p.status === 'success' ? '#16a34a' : p.status === 'pending' ? '#d97706' : '#dc2626'
                              }}>
                                {p.status === 'success' ? 'সফল' : p.status === 'pending' ? 'পেন্ডিং' : 'বাতিল'}
                              </span>
                            </td>
                            <td style={{ padding: '8px 0', textAlign: 'right', color: 'var(--primary)' }}>{verifiedStaff}</td>
                            {isSuperAdmin && (
                              <td className="no-print" style={{ padding: '8px 0', textAlign: 'center' }}>
                                <button
                                  type="button"
                                  className="btn btn-ghost btn-xs text-danger"
                                  onClick={() => handleRevertPayment(p)}
                                  disabled={submitting}
                                  title="পেমেন্ট বাতিল / রিভার্ট করুন"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                    padding: '2px 6px',
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    borderRadius: '4px',
                                    border: '1px solid rgba(239, 68, 68, 0.35)',
                                    background: 'rgba(239, 68, 68, 0.06)',
                                    cursor: submitting ? 'not-allowed' : 'pointer'
                                  }}
                                >
                                  <RotateCcw size={11} /> রিভার্ট
                                </button>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted text-xs" style={{ fontStyle: 'italic' }}>এখনও কোনো পেমেন্ট রেকর্ড নেই।</p>
                )}
              </div>

              {/* Status footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                <span className={`badge ${selectedInvoice.status === 'paid' ? 'badge-active' : selectedInvoice.status === 'partial' ? 'badge-warning' : 'badge-danger'}`} style={{ padding: '6px 14px', fontSize: '0.9rem' }}>
                  {selectedInvoice.status === 'paid' ? 'সম্পূর্ণ পরিশোধিত' : selectedInvoice.status === 'partial' ? 'আংশিক পরিশোধিত' : 'পরিশোধহীন'}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>রসিদ প্রিন্ট করার জন্য পাশে ক্লিক করুন।</span>
              </div>

              {/* Dynamic Signature footer */}
              <PrintFooterSignatures roles={selectedReceiptRoles} style={{ marginTop: '36px' }} />
            </div>

            {/* Actions */}
            <div className="no-print" style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setIsSlipModalOpen(false)}>
                বন্ধ করুন
              </button>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => handlePrintReceipt(selectedInvoice)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Printer size={16} /> প্রিন্ট রসিদ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verify Payment Modal */}
      {isVerifyModalOpen && selectedPendingPayment && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h2>পেমেন্ট ভেরিফাই করুন</h2>
              <button className="btn-icon btn-ghost" onClick={() => setIsVerifyModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form className="modal-body" onSubmit={handleVerifyPending}>
              <div style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
                <strong>শিক্ষার্থী:</strong> {selectedPendingPayment.student?.user?.firstName} {selectedPendingPayment.student?.user?.lastName} <br />
                <strong>পরিমাণ:</strong> ৳ {selectedPendingPayment.amount?.toLocaleString('en-IN')} <br />
                <strong>মাধ্যম:</strong> <span style={{ textTransform: 'capitalize' }}>{selectedPendingPayment.method}</span> <br />
                <strong>TxnID:</strong> {selectedPendingPayment.transactionReference}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>জমা ফান্ড (Debit Account) *</label>
                  <select
                    className="form-input"
                    value={verifyForm.fundAccount}
                    onChange={(e) => setVerifyForm({ ...verifyForm, fundAccount: e.target.value })}
                    required
                  >
                    <option value="">-- ফান্ড নির্বাচন করুন --</option>
                    {accounts.filter(a => a.type === 'Asset').map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <label className="form-label" style={{ fontWeight: 600, margin: 0 }}>
                      আয়ের খাত (Credit Account) <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>(ঐচ্ছিক)</span>
                    </label>
                    <a href="/chart-of-accounts" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'underline' }}>
                      + চার্ট অব একাউন্টস
                    </a>
                  </div>
                  <select
                    className="form-input"
                    value={verifyForm.revenueAccount}
                    onChange={(e) => setVerifyForm({ ...verifyForm, revenueAccount: e.target.value })}
                  >
                    <option value="">-- আয়ের খাত নির্বাচন করুন (ঐচ্ছিক) --</option>
                    {accounts.filter(a => a.type === 'Revenue').map(a => (
                      <option key={a._id} value={a._id}>{a.name} ({a.code})</option>
                    ))}
                  </select>
                  {accounts.filter(a => a.type === 'Revenue').length === 0 && (
                    <div style={{ marginTop: '4px', fontSize: '0.75rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>কোনো আয়ের খাত তৈরি নেই</span>
                      <button
                        type="button"
                        onClick={handleSeedDefaultAccounts}
                        disabled={seedingAccounts}
                        style={{
                          background: 'none', border: '1px solid var(--primary)', color: 'var(--primary)',
                          borderRadius: '4px', padding: '1px 6px', cursor: 'pointer', fontSize: '0.72rem'
                        }}
                      >
                        {seedingAccounts ? 'যুক্ত হচ্ছে...' : '⚡ ডিফল্ট খাত যুক্ত করুন'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsVerifyModalOpen(false)}>বাতিল</button>
                <button type="submit" className="btn btn-success" disabled={submitting}>
                  {submitting ? <Loader className="animate-spin" size={16} /> : 'ভেরিফাই করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Super Admin Edit Invoice Modal */}
      {isEditModalOpen && editingInvoice && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="card" style={{
            width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto',
            padding: '28px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-color)', position: 'relative'
          }}>
            <button 
              onClick={() => setIsEditModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Edit size={20} style={{ color: 'var(--primary)' }} />
              ইনভয়েস সংশোধন (Super Admin)
            </h2>

            <div className="card mb-16" style={{ background: 'var(--body-bg)', padding: '12px 16px', fontSize: '0.9rem' }}>
              <div><strong>ইনভয়েস নং:</strong> <span style={{ fontFamily: 'Inter' }}>{editingInvoice.invoiceNumber}</span></div>
              <div><strong>শিক্ষার্থী:</strong> {editingInvoice.student?.user ? `${editingInvoice.student.user.firstName || ''} ${editingInvoice.student.user.lastName || ''}`.trim() : (editingInvoice.student?.studentId || '—')}</div>
              <div><strong>শ্রেণি:</strong> {editingInvoice.student?.currentEnrollment?.classLevel?.name || '—'}</div>
              <div><strong>ইতিমধ্যে পরিশোধিত:</strong> <span style={{ color: 'var(--success)', fontWeight: 600 }}>৳{Number(editingInvoice.paidTotal || 0).toFixed(2)}</span></div>
            </div>

            <form onSubmit={handleUpdateInvoice} className="flex-column gap-16">
              <div>
                <label className="form-label" style={{ fontWeight: 600 }}>ইনভয়েস শিরোনাম / বিবরণ *</label>
                <input
                  type="text"
                  className="form-input"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>ফি ক্যাটাগরি *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editForm.feeCategory}
                    onChange={(e) => setEditForm({ ...editForm, feeCategory: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>পরিশোধের শেষ তারিখ *</label>
                  <input
                    type="date"
                    className="form-input"
                    value={editForm.dueDate}
                    onChange={(e) => setEditForm({ ...editForm, dueDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="form-label" style={{ fontWeight: 600 }}>সাবটোটাল পরিমাণ (৳) *</label>
                <input
                  type="number"
                  min="0"
                  className="form-input"
                  value={editForm.subtotal}
                  onChange={(e) => setEditForm({ ...editForm, subtotal: parseFloat(e.target.value) || 0 })}
                  required
                />
              </div>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>ডিসকাউন্ট / ছাড় (৳)</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="number"
                      min="0"
                      className="form-input"
                      style={{ flex: 1 }}
                      value={editForm.discountTotal}
                      onChange={(e) => setEditForm({ ...editForm, discountTotal: parseFloat(e.target.value) || 0 })}
                    />
                    <select 
                      className="form-select form-input" 
                      style={{ flex: 1 }}
                      value={editForm.discountType}
                      onChange={(e) => setEditForm({ ...editForm, discountType: e.target.value })}
                    >
                      <option value="বিশেষ ছাড়">বিশেষ ছাড়</option>
                      <option value="সম্পূর্ণ ফ্রি">সম্পূর্ণ ফ্রি</option>
                      <option value="শতকরা ছাড়">শতকরা ছাড়</option>
                      <option value="এতিম">এতিম</option>
                      <option value="হাফেজ">হাফেজ</option>
                      <option value="শিক্ষক সন্তান">শিক্ষক সন্তান</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label" style={{ fontWeight: 600 }}>জরিমানা / বিলম্ব ফি (৳)</label>
                  <input
                    type="number"
                    min="0"
                    className="form-input"
                    value={editForm.fineTotal}
                    onChange={(e) => setEditForm({ ...editForm, fineTotal: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>

              {/* Calculation Preview */}
              {(() => {
                const sub = Number(editForm.subtotal) || 0;
                const fine = Number(editForm.fineTotal) || 0;
                const disc = Number(editForm.discountTotal) || 0;
                const newPay = Math.max(0, (sub + fine) - disc);
                const paid = Number(editingInvoice.paidTotal) || 0;
                const newBal = Math.max(0, newPay - paid);
                return (
                  <div className="card" style={{ background: 'var(--body-bg)', padding: '14px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div className="flex justify-between">
                      <span>সংশোধিত প্রদেয় মোট (Payable):</span>
                      <strong style={{ fontFamily: 'Inter', color: 'var(--primary)' }}>৳{newPay.toFixed(2)}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>ইতিমধ্যে পরিশোধিত:</span>
                      <span style={{ fontFamily: 'Inter', color: 'var(--success)' }}>৳{paid.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-6" style={{ borderTop: '1px solid var(--border-color)', fontWeight: 'bold' }}>
                      <span>নতুন অবশিষ্ট বকেয়া:</span>
                      <span style={{ fontFamily: 'Inter', color: newBal > 0 ? 'var(--danger)' : 'var(--success)' }}>৳{newBal.toFixed(2)}</span>
                    </div>
                  </div>
                );
              })()}

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>বাতিল</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? <Loader className="animate-spin" size={16} /> : 'আপডেট সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Scoped CSS styling */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.12) !important;
        }
        .print-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 240px;
          height: 240px;
          object-fit: contain;
          opacity: 0.06;
          pointer-events: none;
          z-index: 0;
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm 6mm;
          }
          .no-print,
          .topbar,
          .sidebar,
          nav,
          header,
          .page-header,
          .dashboard-layout > aside,
          .dashboard-layout > header,
          .card:not(.print-receipt-card) {
            display: none !important;
          }
          body, html, #root, .dashboard-layout, .main-content, .page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            overflow: visible !important;
            height: auto !important;
          }
          .print-modal-overlay {
            position: static !important;
            background: none !important;
            backdrop-filter: none !important;
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
          .print-receipt-card {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            position: static !important;
            overflow: visible !important;
            background: #ffffff !important;
          }
          .print-area {
            position: relative !important;
            overflow: visible !important;
            width: 100% !important;
          }
          .print-watermark {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 320px !important;
            height: 320px !important;
            opacity: 0.07 !important;
            pointer-events: none !important;
            z-index: 0 !important;
            display: block !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
