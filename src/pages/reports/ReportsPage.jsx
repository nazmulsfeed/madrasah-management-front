import { useState, useEffect, useRef } from 'react';
import {
  BarChart2, Users, GraduationCap, ClipboardCheck, FileText, CreditCard,
  Download, RefreshCw, CheckCircle, AlertCircle, TrendingUp, TrendingDown, Award,
  Search, ChevronLeft, ChevronRight, BookOpen, Printer
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { formatDateDDMMYYYY, getMadrasahInfo } from '../../utils/helpers';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

// Helper: format number as BDT
const formatTaka = (amount) => {
  if (!amount) return '৳০';
  return '৳' + Number(amount).toLocaleString('en-IN');
};

const MONTHS_BN = ['', 'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
const STATUS_LABELS = { present: 'উপস্থিত', absent: 'অনুপস্থিত', late: 'বিলম্বিত', half_day: 'অর্ধদিন', on_leave: 'ছুটি' };
const STATUS_COLORS = { present: '#22c55e', absent: '#ef4444', late: '#f59e0b', half_day: '#3b82f6', on_leave: '#8b5cf6' };

// Stat Card Component
function StatCard({ icon: Icon, title, value, sub, color = 'teal' }) {
  const colors = {
    teal: { bg: 'rgba(20, 184, 166, 0.15)', color: '#14b8a6' },
    blue: { bg: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' },
    amber: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
    green: { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
    red: { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' },
    purple: { bg: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' },
  };
  const c = colors[color] || colors.teal;
  return (
    <div className="stats-card">
      <div className="stats-card-icon" style={{ background: c.bg, color: c.color }}>
        <Icon size={22} />
      </div>
      <div className="stats-card-value">{value}</div>
      <div className="stats-card-label">{title}</div>
      {sub && <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>{sub}</div>}
    </div>
  );
}

// Progress Bar
function ProgressBar({ value, max, color = '#14b8a6', label }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
        <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ color, fontWeight: 600 }}>{value} ({pct}%)</span>
      </div>
      <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '100px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct}%`, background: color,
          borderRadius: '100px', transition: 'width 0.6s ease'
        }} />
      </div>
    </div>
  );
}

// Donut chart using SVG
function DonutChart({ segments, size = 100 }) {
  const radius = 38;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let offset = 0;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="var(--border-color)" strokeWidth="16" />
      {segments.map((seg, i) => {
        if (total === 0) return null;
        const dashLen = (seg.value / total) * circumference;
        const dashOffset = circumference - offset;
        offset += dashLen;
        return (
          <circle
            key={i}
            cx={cx} cy={cy} r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="16"
            strokeDasharray={`${dashLen} ${circumference - dashLen}`}
            strokeDashoffset={dashOffset}
          />
        );
      })}
    </svg>
  );
}

// ─── Attendance Calendar Grid ─────────────────────────────────
function AttendanceCalendar({ records, month, year }) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Sun
  const dayLabels = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'];

  // Build date→status map
  const statusMap = {};
  records.forEach(r => {
    const d = new Date(r.date);
    statusMap[d.getUTCDate()] = r.status;
  });

  const cells = [];
  // empty cells for offset
  for (let i = 0; i < firstDay; i++) cells.push(<div key={`e${i}`} style={{ width: '36px', height: '36px' }} />);
  for (let d = 1; d <= daysInMonth; d++) {
    const st = statusMap[d];
    const bg = st ? STATUS_COLORS[st] : 'var(--card-bg)';
    const border = st ? 'none' : '1px solid var(--border-color)';
    cells.push(
      <div key={d} title={st ? `${d} — ${STATUS_LABELS[st]}` : `${d}`} style={{
        width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.78rem', fontWeight: 600, background: bg, border, color: st ? '#fff' : 'var(--text-secondary)',
        cursor: 'default', transition: 'transform 0.15s', position: 'relative'
      }}>
        {d}
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 36px)', gap: '6px', marginBottom: '6px' }}>
        {dayLabels.map(l => (
          <div key={l} style={{ width: '36px', textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{l}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 36px)', gap: '6px' }}>
        {cells}
      </div>
      <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
        {Object.entries(STATUS_LABELS).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: STATUS_COLORS[k] }} />
            <span style={{ color: 'var(--text-muted)' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function ReportsPage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const printRef = useRef(null);
  const [orientation, setOrientation] = useState('portrait');
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__reports');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });

  // Individual report states
  const [studentsList, setStudentsList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);
  const [examsList, setExamsList] = useState([]);

  // Student Attendance
  const [selStudentAtt, setSelStudentAtt] = useState('');
  const [attMonth, setAttMonth] = useState(new Date().getMonth() + 1);
  const [attYear, setAttYear] = useState(new Date().getFullYear());
  const [studentAttData, setStudentAttData] = useState(null);
  const [loadingStudentAtt, setLoadingStudentAtt] = useState(false);

  // Teacher Attendance
  const [selTeacherAtt, setSelTeacherAtt] = useState('');
  const [teacherAttMonth, setTeacherAttMonth] = useState(new Date().getMonth() + 1);
  const [teacherAttYear, setTeacherAttYear] = useState(new Date().getFullYear());
  const [teacherAttData, setTeacherAttData] = useState(null);
  const [loadingTeacherAtt, setLoadingTeacherAtt] = useState(false);

  // Student Marks
  const [selStudentMarks, setSelStudentMarks] = useState('');
  const [selExam, setSelExam] = useState('');
  const [studentMarksData, setStudentMarksData] = useState(null);
  const [loadingMarks, setLoadingMarks] = useState(false);

  // Biometric Punch Report
  const getBDTodayStr = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });
  const [punchDate, setPunchDate] = useState(getBDTodayStr());
  const [punchStartDate, setPunchStartDate] = useState(getBDTodayStr());
  const [punchEndDate, setPunchEndDate] = useState(getBDTodayStr());
  const [punchReportMode, setPunchReportMode] = useState('single'); // 'single' | 'range'
  const [punchClassFilter, setPunchClassFilter] = useState('all');
  const [punchStudentFilter, setPunchStudentFilter] = useState('');
  const [punchData, setPunchData] = useState(null);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [printOrientation, setPrintOrientation] = useState('landscape');
  const [printScope, setPrintScope] = useState('full');
  const [summaryData, setSummaryData] = useState(null);
  const [loadingPunch, setLoadingPunch] = useState(false);
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const fetchReport = async () => {
    setLoading(true);
    try {
      const res = await api.get('/reports/summary');
      if (res.data.success) setData(res.data.data);
    } catch (err) {
      console.error('Failed to fetch report', err);
      setToast({ type: 'error', message: 'রিপোর্ট লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoading(false);
    }
  };

  // Fetch dropdowns
  useEffect(() => {
    fetchReport();
    const fetchLists = async () => {
      try {
        const [sRes, tRes, eRes] = await Promise.all([
          api.get('/students'),
          api.get('/teachers'),
          api.get('/exams')
        ]);
        if (sRes.data.success) setStudentsList(sRes.data.data || []);
        if (tRes.data.success) setTeachersList(tRes.data.data || []);
        if (eRes.data.success) setExamsList(eRes.data.data.exams || eRes.data.data || []);
      } catch (_) {}
    };
    fetchLists();
  }, []);

  // Fetch student attendance
  const fetchStudentAtt = async () => {
    if (!selStudentAtt) return;
    setLoadingStudentAtt(true);
    try {
      const res = await api.get(`/reports/student-attendance?studentId=${selStudentAtt}&month=${attMonth}&year=${attYear}`);
      if (res.data.success) setStudentAttData(res.data.data);
    } catch (err) {
      setToast({ type: 'error', message: 'উপস্থিতি ডেটা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingStudentAtt(false);
    }
  };

  // Fetch teacher attendance
  const fetchTeacherAtt = async () => {
    if (!selTeacherAtt) return;
    setLoadingTeacherAtt(true);
    try {
      const res = await api.get(`/reports/teacher-attendance?teacherId=${selTeacherAtt}&month=${teacherAttMonth}&year=${teacherAttYear}`);
      if (res.data.success) setTeacherAttData(res.data.data);
    } catch (err) {
      setToast({ type: 'error', message: 'শিক্ষক উপস্থিতি ডেটা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingTeacherAtt(false);
    }
  };

  // Fetch student marks
  const fetchStudentMarks = async () => {
    if (!selStudentMarks) return;
    setLoadingMarks(true);
    try {
      const params = `studentId=${selStudentMarks}${selExam ? `&examId=${selExam}` : ''}`;
      const res = await api.get(`/reports/student-marks?${params}`);
      if (res.data.success) setStudentMarksData(res.data.data);
    } catch (err) {
      setToast({ type: 'error', message: 'নম্বর ডেটা লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingMarks(false);
    }
  };

  const fetchPunchReport = async () => {
    setLoadingPunch(true);
    try {
      const params = new URLSearchParams();
      if (punchReportMode === 'single') {
        params.set('date', punchDate);
      } else {
        params.set('startDate', punchStartDate);
        params.set('endDate', punchEndDate);
      }
      if (punchClassFilter && punchClassFilter !== 'all') params.set('classLevel', punchClassFilter);
      if (punchStudentFilter) params.set('studentId', punchStudentFilter);

      const [punchRes, summaryRes] = await Promise.all([
        api.get('/attendance/punch-report?' + params.toString()),
        api.get('/attendance/summary-report?' + params.toString()),
      ]);
      if (punchRes.data.success) setPunchData(punchRes.data.data);
      if (summaryRes.data.success) setSummaryData(summaryRes.data.data);
    } catch (err) {
      setToast({ type: 'error', message: 'পাঞ্চ রিপোর্ট লোড করতে সমস্যা হয়েছে' });
    } finally {
      setLoadingPunch(false);
    }
  };

  const printPunchReport = (orientation = 'landscape', scope = 'full') => {
    if (!punchData?.records?.length && !summaryData?.summary?.length) return;
    const printWindow = window.open('', '_blank', 'width=1050,height=800');
    if (!printWindow) {
      window.print();
      return;
    }

    const dateRangeText = punchReportMode === 'single'
      ? formatDateDDMMYYYY(punchDate)
      : `${formatDateDDMMYYYY(punchStartDate)} হতে ${formatDateDDMMYYYY(punchEndDate)}`;

    const selectedClass = classesList.find(c => c._id === punchClassFilter);
    const classFilterText = selectedClass ? selectedClass.name : 'সকল শ্রেণি';

    const totals = summaryData?.totals || { total: 0, present: 0, absent: 0, late: 0, on_leave: 0 };

    const showSummary = (scope === 'full' || scope === 'summary_only') && summaryData?.summary?.length > 0;
    const showPunch = (scope === 'full' || scope === 'punch_only') && punchData?.records?.length > 0;

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${madrasahName} — বায়োমেট্রিক পাঞ্চ রিপোর্ট (${branchName}) - ${dateRangeText}</title>
  <style id="page-orientation-style">
    ${getMadrasahPrintStyles(orientation, { wrap: false })}
  </style>
  <style>
    * { box-sizing: border-box; }
    .meta-bar { 
      display: flex; 
      justify-content: space-between; 
      font-size: 11px; 
      background: #f8fafc; 
      border: 1px solid #e2e8f0; 
      border-radius: 6px; 
      padding: 6px 12px; 
      margin-bottom: 12px; 
    }
    .meta-bar span { font-weight: 700; color: #0f172a; }
    
    .stats-row { 
      display: flex; 
      gap: 10px; 
      margin-bottom: 14px; 
    }
    .stat-box { 
      flex: 1; 
      padding: 6px 10px; 
      border-radius: 6px; 
      border: 1px solid #e2e8f0; 
      text-align: center; 
    }
    .stat-val { font-size: 16px; font-weight: 800; font-family: 'Inter', sans-serif; }
    .stat-lbl { font-size: 10px; color: #64748b; font-weight: 600; }

    .section-title { 
      font-size: 13px; 
      font-weight: 700; 
      color: #0f172a; 
      margin: 14px 0 6px 0; 
      border-bottom: 1px solid #cbd5e1; 
      padding-bottom: 4px; 
    }

    table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px; }
    th, td { border: 1px solid #cbd5e1; padding: 5px 7px; vertical-align: middle; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 700; text-align: left; }
    .text-center { text-align: center; }
    .badge { display: inline-block; padding: 2px 6px; border-radius: 8px; font-size: 9.5px; font-weight: 700; }
    .badge-present { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }
    .badge-absent { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
    .badge-late { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }
    .badge-on_leave { background: #dbeafe; color: #1d4ed8; border: 1px solid #93c5fd; }
    .badge-not_assigned { background: #f1f5f9; color: #64748b; border: 1px solid #cbd5e1; }
    .punch-pill { display: inline-block; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; border-radius: 4px; padding: 1px 4px; font-size: 9.5px; margin: 1px; white-space: nowrap; }
    .footer { margin-top: 14px; font-size: 10px; color: #94a3b8; display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 6px; }

    @media print {
      .no-print { display: none !important; }
      body { padding: 0 !important; }
      table { page-break-inside: auto; }
      tr { page-break-inside: avoid; page-break-after: auto; }
      thead { display: table-header-group; }
    }
  </style>
</head>
<body>
  <!-- Interactive Print Toolbar -->
  <div class="no-print" style="background: #0f172a; color: #fff; padding: 10px 16px; margin-bottom: 16px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="font-weight: 700; font-size: 13px; display: flex; align-items: center; gap: 8px;">
      <span>🖨️ প্রিন্ট প্রিভিউ</span>
      <span style="font-size: 11px; font-weight: normal; color: #94a3b8;">(প্রয়োজনে ওরিয়েন্টেশন পরিবর্তন করতে পারেন)</span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button onclick="changeOrientation('portrait')" id="btn-portrait" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: ${orientation === 'portrait' ? '#0284c7' : '#1e293b'}; color: #fff; cursor: pointer; font-size: 12px; font-weight: 600;">📄 পোর্ট্রেট (লম্বালম্বি)</button>
      <button onclick="changeOrientation('landscape')" id="btn-landscape" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: ${orientation === 'landscape' ? '#0284c7' : '#1e293b'}; color: #fff; cursor: pointer; font-size: 12px; font-weight: 600;">📑 ল্যান্ডস্কেপ (আড়াআড়ি)</button>
      <button onclick="window.print()" style="padding: 6px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-size: 13px; font-weight: 700; margin-left: 8px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: `বায়োমেট্রিক উপস্থিতি ও পাঞ্চ রিপোর্ট ${scope === 'full' ? '(সম্পূর্ণ রিপোর্ট)' : scope === 'punch_only' ? '(ব্যক্তিগত পাঞ্চ লগ)' : '(শ্রেণি সারসংক্ষেপ)'}`,
        orientation,
        metaLeft: `তারিখ/সময়কাল: <strong>${dateRangeText}</strong> | শ্রেণি: <strong>${classFilterText}</strong>`,
        metaRight: `মোট উপস্থিতি রেকর্ড: <strong>${totals.total || punchData?.records?.length || 0} টি</strong>`
      })}

  <div class="meta-bar">
    <div>তারিখ/সময়কাল: <span>${dateRangeText}</span></div>
    <div>শ্রেণি: <span>${classFilterText}</span></div>
    <div>মোট উপস্থিতি রেকর্ড: <span>${totals.total || punchData?.records?.length || 0} টি</span></div>
  </div>

  ${(scope === 'full' || scope === 'summary_only') ? `
    <div class="stats-row">
      <div class="stat-box" style="background: #f8fafc;">
        <div class="stat-val" style="color: #0284c7;">${totals.total || 0}</div>
        <div class="stat-lbl">মোট রেকর্ড</div>
      </div>
      <div class="stat-box" style="background: #f0fdf4;">
        <div class="stat-val" style="color: #16a34a;">${totals.present || 0}</div>
        <div class="stat-lbl">উপস্থিত</div>
      </div>
      <div class="stat-box" style="background: #fef2f2;">
        <div class="stat-val" style="color: #dc2626;">${totals.absent || 0}</div>
        <div class="stat-lbl">অনুপস্থিত</div>
      </div>
      <div class="stat-box" style="background: #fffbeb;">
        <div class="stat-val" style="color: #d97706;">${totals.late || 0}</div>
        <div class="stat-lbl">বিলম্ব</div>
      </div>
      <div class="stat-box" style="background: #eff6ff;">
        <div class="stat-val" style="color: #2563eb;">${totals.on_leave || 0}</div>
        <div class="stat-lbl">ছুটি</div>
      </div>
    </div>
  ` : ''}

  ${showSummary ? `
    <div class="section-title">📊 শ্রেণি-ভিত্তিক উপস্থিতির সারসংক্ষেপ</div>
    <table>
      <thead>
        <tr>
          <th style="width: 85px;">তারিখ</th>
          <th>শ্রেণি</th>
          <th class="text-center" style="width: 60px;">মোট</th>
          <th class="text-center" style="width: 60px; color: #16a34a;">উপস্থিত</th>
          <th class="text-center" style="width: 60px; color: #dc2626;">অনুপস্থিত</th>
          <th class="text-center" style="width: 60px; color: #d97706;">বিলম্ব</th>
          <th class="text-center" style="width: 60px; color: #2563eb;">ছুটি</th>
          <th class="text-center" style="width: 75px;">উপস্থিতি হার</th>
        </tr>
      </thead>
      <tbody>
        ${summaryData.summary.map(row => {
          const rate = row.total > 0 ? Math.round((row.present / row.total) * 100) : 0;
          return `
            <tr>
              <td>${row.date}</td>
              <td><strong>${row.classLevel}</strong></td>
              <td class="text-center" style="font-weight: 700;">${row.total}</td>
              <td class="text-center" style="color: #16a34a; font-weight: 700;">${row.present}</td>
              <td class="text-center" style="color: #dc2626; font-weight: 700;">${row.absent}</td>
              <td class="text-center" style="color: #d97706; font-weight: 700;">${row.late}</td>
              <td class="text-center" style="color: #2563eb; font-weight: 700;">${row.on_leave}</td>
              <td class="text-center" style="font-weight: 700;">${rate}%</td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  ` : ''}

  ${showPunch ? `
    <div class="section-title">📋 শিক্ষার্থীদের ব্যক্তিগত পাঞ্চ লগ (${punchData.records.length} টি রেকর্ড)</div>
    <table>
      <thead>
        <tr>
          <th class="text-center" style="width: 30px;">#</th>
          <th style="width: 80px;">তারিখ</th>
          <th>শিক্ষার্থীর নাম</th>
          <th style="width: 75px;">আইডি</th>
          <th class="text-center" style="width: 85px;">শ্রেণি</th>
          <th class="text-center" style="width: 65px;">স্ট্যাটাস</th>
          <th class="text-center" style="width: 70px;">ইন-টাইম</th>
          <th class="text-center" style="width: 70px;">আউট-টাইম</th>
          <th class="text-center" style="width: 50px;">পাঞ্চ</th>
          <th>পাঞ্চ সময়সূচি</th>
        </tr>
      </thead>
      <tbody>
        ${punchData.records.map((r, i) => `
          <tr>
            <td class="text-center">${i + 1}</td>
            <td style="white-space: nowrap;">${r.date}</td>
            <td><strong>${r.student.name || '—'}</strong></td>
            <td>${r.student.studentId || '—'}</td>
            <td class="text-center">${r.student.className || '—'}</td>
            <td class="text-center">
              <span class="badge badge-${r.status}">${getStatusLabel(r.status)}</span>
            </td>
            <td class="text-center" style="font-weight: 700; color: #059669;">${r.inTime || '—'}</td>
            <td class="text-center" style="font-weight: 700; color: #4f46e5;">${r.outTime || '—'}</td>
            <td class="text-center" style="font-weight: 700;">${r.punchCount} বার</td>
            <td>
              ${r.punchTimes && r.punchTimes.length > 0
                ? r.punchTimes.map((t, ti) => '<span class="punch-pill">' + (ti + 1) + '. ' + t + '</span>').join('')
                : '—'}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  ` : ''}

  ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}

  <div class="footer">
    <div>প্রিন্ট তারিখ ও সময়: ${new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' })}</div>
    <div>আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম</div>
  </div>
    </div>
  </div>

  <script>
    function changeOrientation(mode) {
      var styleTag = document.getElementById('page-orientation-style');
      var btnPort = document.getElementById('btn-portrait');
      var btnLand = document.getElementById('btn-landscape');
      if (mode === 'landscape') {
        styleTag.innerHTML = '@page { size: A4 landscape; margin: 8mm 10mm; }';
        btnLand.style.background = '#0284c7';
        btnPort.style.background = '#1e293b';
      } else {
        styleTag.innerHTML = '@page { size: A4 portrait; margin: 10mm 12mm; }';
        btnPort.style.background = '#0284c7';
        btnLand.style.background = '#1e293b';
      }
    }
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  };

  const exportSummaryCSV = () => {
    if (!summaryData?.summary?.length) return;
    const rows = [
      ['তারিখ', 'শ্রেণি', 'মোট শিক্ষার্থী', 'উপস্থিত', 'অনুপস্থিত', 'বিলম্ব', 'ছুটি', 'উপস্থিতি হার (%)']
    ];
    summaryData.summary.forEach(r => {
      const rate = r.total > 0 ? Math.round((r.present / r.total) * 100) : 0;
      rows.push([
        r.date, r.classLevel, r.total, r.present, r.absent, r.late, r.on_leave, `${rate}%`
      ]);
    });
    const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance-summary-${punchReportMode === 'single' ? punchDate : punchStartDate + '-to-' + punchEndDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPunchCSV = () => {
    if (!punchData?.records?.length) return;
    const rows = [
      ['তারিখ', 'নাম', 'ID', 'শ্রেণি', 'সেকশন', 'স্ট্যাটাস', 'ইন-টাইম', 'আউট-টাইম', 'পাঞ্চ সংখ্যা', 'সকল পাঞ্চ লগ']
    ];
    punchData.records.forEach(r => {
      rows.push([
        r.date, r.student.name, r.student.studentId,
        r.student.className, r.student.section,
        r.status, r.inTime || '-', r.outTime || '-',
        r.punchCount, (r.punchTimes || []).join(' | ')
      ]);
    });
    const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'punch-report.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusLabel = (s) => ({ present: 'উপস্থিত', absent: 'অনুপস্থিত', late: 'বিলম্ব', on_leave: 'ছুটি', not_assigned: 'নির্ধারিত নয়' }[s] || s);
  const getStatusColor = (s) => ({ present: '#10b981', absent: '#ef4444', late: '#f59e0b', on_leave: '#3b82f6', not_assigned: '#94a3b8' }[s] || '#94a3b8');

  const handlePrint = () => { window.print(); };

  const printStudentMarksReport = () => {
    if (!studentMarksData) return;
    const printWindow = window.open('', '_blank', 'width=950,height=800');
    if (!printWindow) {
      window.print();
      return;
    }

    const studentName = studentMarksData.student?.name || '—';
    const studentId = studentMarksData.student?.studentId || '—';
    const examResults = studentMarksData.examResults || [];

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${madrasahName} — শিক্ষার্থীর পরীক্ষার নম্বর (${studentName})</title>
  <style id="page-orientation-style">
    ${getMadrasahPrintStyles('portrait', { wrap: false })}
  </style>
  <style>
    * { box-sizing: border-box; }
    .student-badge-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 14px;
      margin-bottom: 12px;
      font-size: 11.5px;
    }
    .student-badge-box strong { color: #0f172a; }
    .exam-block {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      margin-bottom: 14px;
      padding: 10px 12px;
      page-break-inside: avoid;
    }
    .exam-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      padding-bottom: 4px;
      border-bottom: 1px dashed #cbd5e1;
    }
    .exam-title { font-size: 13px; font-weight: 700; color: #0f172a; }
    .exam-meta { font-size: 11px; font-weight: 700; color: #0369a1; }
    table { width: 100%; border-collapse: collapse; font-size: 10.5px; margin: 0; }
    th, td { border: 1px solid #cbd5e1; padding: 4px 6px; vertical-align: middle; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .grade-pill { display: inline-block; padding: 1px 6px; border-radius: 4px; font-size: 9.5px; font-weight: 700; background: #f1f5f9; color: #334155; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0 !important; }
      .exam-block { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #0f172a; color: #fff; padding: 10px 16px; margin-bottom: 14px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="font-weight: 700; font-size: 13px;">🖨️ শিক্ষার্থীর পরীক্ষার নম্বর — প্রিন্ট প্রিভিউ</div>
    <div style="display: flex; gap: 8px;">
      <button onclick="window.print()" style="padding: 6px 18px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-size: 13px; font-weight: 700;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding: 6px 14px; border-radius: 6px; border: none; background: #475569; color: #fff; cursor: pointer; font-size: 13px;">✕ বন্ধ করুন</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        title: 'শিক্ষার্থীর পরীক্ষার নম্বর ও ফলাফল বিবরণী',
        orientation: 'portrait',
        metaLeft: `শিক্ষার্থীর নাম: <strong>${studentName}</strong> (আইডি: <strong>${studentId}</strong>)`,
        metaRight: `মোট পরীক্ষা: <strong>${examResults.length} টি</strong>`
      })}

      <div class="student-badge-box">
        <div>শিক্ষার্থী: <strong>${studentName}</strong> | আইডি: <strong>${studentId}</strong></div>
        <div>প্রিন্ট তারিখ: <strong>${new Date().toLocaleDateString('bn-BD')}</strong></div>
      </div>

      ${examResults.length === 0 ? '<p style="text-align: center; color: #64748b; padding: 20px;">কোনো পরীক্ষার নম্বর পাওয়া যায়নি</p>' : examResults.map(er => `
        <div class="exam-block">
          <div class="exam-header">
            <span class="exam-title">📖 ${er.exam?.name || 'পরীক্ষা'}</span>
            <span class="exam-meta">মোট প্রাপ্ত: ${er.totalObtained}/${er.totalMarks} (শতকরা: ${er.overallPercentage}%)</span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="text-align: left; width: 40%;">বিষয়</th>
                <th>প্রাপ্ত নম্বর</th>
                <th>মোট নম্বর</th>
                <th>শতাংশ</th>
                <th>গ্রেড</th>
              </tr>
            </thead>
            <tbody>
              ${(er.subjects || []).map(sub => `
                <tr>
                  <td style="font-weight: 600;">${sub.subject?.name || '—'}</td>
                  <td class="text-center" style="font-weight: 700; color: #047857;">${sub.marksObtained}</td>
                  <td class="text-center">${sub.totalMarks}</td>
                  <td class="text-center">${sub.percentage}%</td>
                  <td class="text-center"><span class="grade-pill">${sub.grade || '—'}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `).join('')}

      ${getMadrasahFooterSignaturesHtml(selectedSignatureRoles)}
    </div>
  </div>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  };

  const changeMonth = (setter, yearSetter, currentMonth, currentYear, delta) => {
    let m = currentMonth + delta;
    let y = currentYear;
    if (m > 12) { m = 1; y++; }
    if (m < 1) { m = 12; y--; }
    setter(m);
    yearSetter(y);
  };

  if (loading) {
    return (
      <div className="flex-center" style={{ minHeight: '60vh', flexDirection: 'column', gap: '16px' }}>
        <div className="spinner" />
        <p className="text-muted">রিপোর্ট তৈরি হচ্ছে...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="card empty-state">
        <BarChart2 size={48} style={{ opacity: 0.3 }} />
        <div className="empty-state-title mt-16">রিপোর্ট লোড করা সম্ভব হয়নি</div>
        <button className="btn btn-primary mt-16" onClick={fetchReport}>পুনরায় চেষ্টা করুন</button>
      </div>
    );
  }

  const { students, teachers, attendance, exams, finance } = data;
  const todayAtt = attendance.today;
  const monthAtt = attendance.thisMonth;
  const grades = exams.gradeDistribution;

  const getStudentLabel = (s) => {
    const name = s.user ? `${s.user.firstName || ''} ${s.user.lastName || ''}`.trim() : '';
    return `${name} (${s.studentId || s.admissionNumber || ''})`;
  };
  const getTeacherLabel = (t) => {
    const name = t.user ? `${t.user.firstName || ''} ${t.user.lastName || ''}`.trim() : '';
    return `${name} (${t.employeeId || ''})`;
  };

  return (
    <div className="animate-fade-in" ref={printRef}>
      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 2000,
          padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.95)' : 'rgba(239, 68, 68, 0.95)',
          color: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', maxWidth: '400px',
          animation: 'slideDown 0.3s ease-out'
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.9rem' }}>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header no-print">
        <div>
          <h1 className="page-title">রিপোর্ট ও বিশ্লেষণ</h1>
          <p className="page-subtitle">
            শাখা: {branchName} • সকল বিভাগের একত্রিত পরিসংখ্যান • সর্বশেষ আপডেট: {new Date(data.generatedAt).toLocaleString('bn-BD')}
          </p>
        </div>
        <div className="flex gap-12" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary" onClick={fetchReport}>
            <RefreshCw size={16} /> রিফ্রেশ
          </button>

          {/* Orientation Toggle Buttons */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-tertiary, #f1f5f9)',
            padding: '2px',
            borderRadius: '8px',
            border: '1px solid var(--border-color, #e2e8f0)',
            gap: '2px'
          }}>
            <button
              type="button"
              onClick={() => setOrientation('portrait')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 11px',
                fontSize: '0.8rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: orientation === 'portrait' ? '#0f766e' : 'transparent',
                color: orientation === 'portrait' ? '#ffffff' : 'var(--text-secondary, #475569)',
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
                padding: '6px 11px',
                fontSize: '0.8rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: orientation === 'landscape' ? '#0f766e' : 'transparent',
                color: orientation === 'landscape' ? '#ffffff' : 'var(--text-secondary, #475569)',
                transition: 'all 0.15s ease'
              }}
              title="A4 Landscape মোডে প্রিন্ট করুন"
            >
              <span>🖼️</span> ল্যান্ডস্কেপ (A4)
            </button>
          </div>

          <button className="btn btn-primary" onClick={handlePrint} style={{ background: '#0f766e', borderColor: '#0f766e' }}>
            <Printer size={16} /> প্রিন্ট ও PDF
          </button>
        </div>
      </div>

      {/* Signature Role Selector for Printing */}
      <PrintSignatureRoleSelector
        selectedRoles={selectedSignatureRoles}
        onChange={(roles) => {
          setSelectedSignatureRoles(roles);
          try {
            localStorage.setItem('annur_footer_roles__reports', JSON.stringify(roles));
          } catch (_) {}
        }}
        additionalRoles={['প্রস্তুতকারী', 'যাচাইকারী']}
        style={{ marginBottom: '16px' }}
      />

      {/* Official A4 Print Header & Watermark */}
      <div className="print-only" style={{ position: 'relative', marginBottom: '20px' }}>
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: 'url(/favicon.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain'
        }} />
        <MadrasahLetterhead
          documentTitle="সার্বিক সমন্বিত প্রতিবেদন ও পরিসংখ্যান (Consolidated Report)"
          subTitle={`শাখা: ${branchName} | তৈরির তারিখ: ${new Date(data.generatedAt).toLocaleString('bn-BD')}`}
        />
      </div>

      {/* ═══════════ SUMMARY SECTIONS ═══════════ */}

      {/* Section 1: Students */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <GraduationCap size={20} style={{ color: 'var(--primary-500)' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>ছাত্র/ছাত্রী পরিসংখ্যান</h2>
        </div>
        <div className="grid grid-4">
          <StatCard icon={GraduationCap} title="মোট শিক্ষার্থী" value={students.total} color="teal" />
          <StatCard icon={CheckCircle} title="সক্রিয়" value={students.active} color="green" sub={`মোটের ${students.total > 0 ? Math.round(students.active / students.total * 100) : 0}%`} />
          <StatCard icon={Users} title="ছাত্র (ছেলে)" value={students.male} color="blue" />
          <StatCard icon={Users} title="ছাত্রী (মেয়ে)" value={students.female} color="purple" />
        </div>
        {students.byClass && students.byClass.length > 0 && (
          <div className="card mt-16">
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>শ্রেণি অনুযায়ী শিক্ষার্থী সংখ্যা</h3>
            {students.byClass.map(cls => (
              <ProgressBar key={cls.className} label={cls.className} value={cls.count} max={students.total} color="#14b8a6" />
            ))}
          </div>
        )}
      </section>

      {/* Section 2: Teachers */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <Users size={20} style={{ color: 'var(--primary-500)' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>শিক্ষকমণ্ডলী পরিসংখ্যান</h2>
        </div>
        <div className="grid grid-4">
          <StatCard icon={Users} title="মোট শিক্ষক" value={teachers.total} color="teal" />
          <StatCard icon={CheckCircle} title="সক্রিয় শিক্ষক" value={teachers.active} color="green" />
          <StatCard icon={Users} title="জেনারেল বিভাগ" value={teachers.regular} color="blue" />
          <StatCard icon={Users} title="হিফজ বিভাগ" value={teachers.hifz} color="amber" />
        </div>
      </section>

      {/* Section 3: Overall Attendance */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <ClipboardCheck size={20} style={{ color: 'var(--primary-500)' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>সার্বিক উপস্থিতি</h2>
        </div>
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: 'var(--primary-400)' }}>আজকের উপস্থিতি</h3>
            {todayAtt.total === 0 ? (
              <p className="text-muted text-sm">আজকের কোনো উপস্থিতি ডেটা পাওয়া যায়নি</p>
            ) : (
              <div className="flex gap-16" style={{ alignItems: 'center' }}>
                <div>
                  <DonutChart segments={[
                    { value: todayAtt.present, color: '#22c55e' },
                    { value: todayAtt.absent, color: '#ef4444' },
                    { value: todayAtt.late, color: '#f59e0b' },
                  ]} size={110} />
                  <div style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 800, marginTop: '8px' }}>{todayAtt.rate}%</div>
                </div>
                <div style={{ flex: 1 }}>
                  <ProgressBar label="উপস্থিত" value={todayAtt.present} max={todayAtt.total} color="#22c55e" />
                  <ProgressBar label="অনুপস্থিত" value={todayAtt.absent} max={todayAtt.total} color="#ef4444" />
                  <ProgressBar label="বিলম্বিত" value={todayAtt.late} max={todayAtt.total} color="#f59e0b" />
                </div>
              </div>
            )}
          </div>
          <div className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px', color: 'var(--primary-400)' }}>এই মাসের উপস্থিতি</h3>
            {monthAtt.total === 0 ? (
              <p className="text-muted text-sm">এই মাসের কোনো উপস্থিতি ডেটা পাওয়া যায়নি</p>
            ) : (
              <div className="flex gap-16" style={{ alignItems: 'center' }}>
                <div>
                  <DonutChart segments={[
                    { value: monthAtt.present, color: '#22c55e' },
                    { value: monthAtt.absent, color: '#ef4444' },
                    { value: monthAtt.late, color: '#f59e0b' },
                  ]} size={110} />
                  <div style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 800, marginTop: '8px' }}>{monthAtt.rate}%</div>
                </div>
                <div style={{ flex: 1 }}>
                  <ProgressBar label="উপস্থিত" value={monthAtt.present} max={monthAtt.total} color="#22c55e" />
                  <ProgressBar label="অনুপস্থিত" value={monthAtt.absent} max={monthAtt.total} color="#ef4444" />
                  <ProgressBar label="বিলম্বিত" value={monthAtt.late} max={monthAtt.total} color="#f59e0b" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Exams Summary */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <FileText size={20} style={{ color: 'var(--primary-500)' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>পরীক্ষা ও ফলাফল</h2>
        </div>
        <div className="grid grid-4" style={{ marginBottom: '16px' }}>
          <StatCard icon={FileText} title="মোট পরীক্ষা" value={exams.total} color="teal" />
          <StatCard icon={TrendingUp} title="আসন্ন" value={exams.upcoming} color="blue" />
          <StatCard icon={RefreshCw} title="চলমান" value={exams.ongoing} color="amber" />
          <StatCard icon={CheckCircle} title="সমাপ্ত" value={exams.completed} color="green" />
        </div>
        {grades.totalEntries > 0 && (
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>গ্রেড বিভাজন</h3>
              <ProgressBar label="A+ (৮০-১০০)" value={grades.aPlus} max={grades.totalEntries} color="#14b8a6" />
              <ProgressBar label="A (৭০-৭৯)" value={grades.a} max={grades.totalEntries} color="#3b82f6" />
              <ProgressBar label="A- (৬০-৬৯)" value={grades.aMinus} max={grades.totalEntries} color="#8b5cf6" />
              <ProgressBar label="B (৫০-৫৯)" value={grades.b} max={grades.totalEntries} color="#f59e0b" />
              <ProgressBar label="C (৪০-৪৯)" value={grades.c} max={grades.totalEntries} color="#f97316" />
              <ProgressBar label="D (৩৩-৩৯)" value={grades.d} max={grades.totalEntries} color="#64748b" />
              <ProgressBar label="F (০-৩২)" value={grades.failCount} max={grades.totalEntries} color="#ef4444" />
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>সার্বিক ফলাফল সারসংক্ষেপ</h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, background: 'var(--success-bg)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--success)' }}>{grades.passCount}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--success)' }}>উত্তীর্ণ</div>
                </div>
                <div style={{ flex: 1, background: 'var(--danger-bg)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--danger)' }}>{grades.failCount}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--danger)' }}>অনুত্তীর্ণ</div>
                </div>
              </div>
              <div style={{ background: 'var(--info-bg)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--info)' }}>{grades.avgMarks}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--info)' }}>গড় নম্বর (Avg Marks)</div>
              </div>
              <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                মোট {grades.totalEntries} টি নম্বর এন্ট্রির উপর ভিত্তি করে
              </div>
            </div>
          </div>
        )}
        {exams.recent && exams.recent.length > 0 && (
          <div className="card table-container mt-16" style={{ padding: 0 }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>সাম্প্রতিক পরীক্ষাসমূহ</h3>
            </div>
            <table className="table">
              <thead><tr><th>পরীক্ষার নাম</th><th>শ্রেণি</th><th>শুরুর তারিখ</th><th>অবস্থা</th></tr></thead>
              <tbody>
                {exams.recent.map(exam => (
                  <tr key={exam._id}>
                    <td className="font-semibold">{exam.name}</td>
                    <td>{exam.classLevel?.name || 'সকল শ্রেণি'}</td>
                    <td>{exam.startDate ? formatDateDDMMYYYY(exam.startDate) : '—'}</td>
                    <td>
                      <span className={`badge ${exam.status === 'published' ? 'badge-active' : exam.status === 'completed' ? 'badge-info' : exam.status === 'ongoing' ? 'badge-warning' : 'badge-muted'}`}>
                        {exam.status === 'upcoming' ? 'আসন্ন' : exam.status === 'ongoing' ? 'চলমান' : exam.status === 'completed' ? 'সমাপ্ত' : 'ফলাফল প্রকাশিত'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Section 5: Finance */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <CreditCard size={20} style={{ color: 'var(--primary-500)' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>আর্থিক সারসংক্ষেপ</h2>
        </div>
        <div className="grid grid-4">
          <StatCard icon={CreditCard} title="মোট বিল" value={formatTaka(finance.invoiced)} color="teal" />
          <StatCard icon={CheckCircle} title="সংগৃহীত" value={formatTaka(finance.paid)} color="green" />
          <StatCard icon={AlertCircle} title="বকেয়া" value={formatTaka(finance.outstanding)} color="red" />
          <StatCard icon={Award} title="সংগ্রহ হার" value={`${finance.collectionRate}%`} color="blue" />
        </div>
        <div className="card mt-16">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>আর্থিক সংগ্রহ অগ্রগতি</h3>
          <ProgressBar label="সংগৃহীত পরিমাণ" value={finance.paid} max={finance.invoiced} color="#22c55e" />
          <ProgressBar label="বকেয়া পরিমাণ" value={finance.outstanding} max={finance.invoiced} color="#ef4444" />
        </div>
      </section>

      {/* Official A4 Print Footer Signatures (Immediately after Main Report) */}
      <div className="print-only" style={{ marginTop: '28px', pageBreakInside: 'avoid' }}>
        <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '16px' }} />
        <div style={{ marginTop: '14px', fontSize: '10px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '6px' }}>
          <span>মুদ্রণের তারিখ: {new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' })}</span>
          <span>আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম</span>
        </div>
      </div>

      {/* ═══════════ INDIVIDUAL REPORTS (SCREEN-ONLY / INTERACTIVE LOOKUP) ═══════════ */}
      <div className="no-print">
        <div style={{ borderTop: '2px solid var(--primary-500)', marginBottom: '32px', paddingTop: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-400)' }}>📋 ব্যক্তিগত রিপোর্ট</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>নির্দিষ্ট শিক্ষার্থী/শিক্ষকের উপস্থিতি ও নম্বর দেখুন</p>
        </div>

      {/* ── Individual Student Attendance ── */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <ClipboardCheck size={20} style={{ color: '#22c55e' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>শিক্ষার্থীর ব্যক্তিগত উপস্থিতি</h2>
        </div>
        <div className="card">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '20px' }}>
            <div style={{ flex: '1 1 250px' }}>
              <label className="form-label">শিক্ষার্থী নির্বাচন করুন</label>
              <select className="form-select" value={selStudentAtt} onChange={e => setSelStudentAtt(e.target.value)}>
                <option value="">-- শিক্ষার্থী বাছুন --</option>
                {studentsList.map(s => (
                  <option key={s._id} value={s._id}>{getStudentLabel(s)}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => changeMonth(setAttMonth, setAttYear, attMonth, attYear, -1)}>
                <ChevronLeft size={16} />
              </button>
              <span style={{ minWidth: '140px', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                {MONTHS_BN[attMonth]} {attYear}
              </span>
              <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => changeMonth(setAttMonth, setAttYear, attMonth, attYear, 1)}>
                <ChevronRight size={16} />
              </button>
            </div>
            <button className="btn btn-primary" onClick={fetchStudentAtt} disabled={!selStudentAtt || loadingStudentAtt}>
              <Search size={16} /> {loadingStudentAtt ? 'অনুসন্ধান...' : 'দেখুন'}
            </button>
          </div>

          {studentAttData && (
            <div style={{ animation: 'slideDown 0.3s ease-out' }}>
              <div style={{ padding: '12px 16px', background: 'var(--primary-50)', borderRadius: '10px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{studentAttData.student?.name}</span>
                  <span style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>({studentAttData.student?.studentId})</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{MONTHS_BN[studentAttData.month]} {studentAttData.year}</span>
              </div>
              <div className="grid grid-2" style={{ gap: '20px' }}>
                <AttendanceCalendar records={studentAttData.records} month={studentAttData.month} year={studentAttData.year} />
                <div>
                  <div className="grid grid-2" style={{ gap: '10px', marginBottom: '16px' }}>
                    {Object.entries(STATUS_LABELS).map(([k, v]) => (
                      <div key={k} style={{ padding: '12px', borderRadius: '10px', background: `${STATUS_COLORS[k]}15`, textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: STATUS_COLORS[k] }}>{studentAttData.summary[k] || 0}</div>
                        <div style={{ fontSize: '0.8rem', color: STATUS_COLORS[k] }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  {studentAttData.summary.total > 0 && (
                    <div style={{ textAlign: 'center', padding: '16px', background: 'var(--success-bg)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)' }}>
                        {Math.round((studentAttData.summary.present / studentAttData.summary.total) * 100)}%
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--success)' }}>উপস্থিতি হার</div>
                    </div>
                  )}
                  {studentAttData.summary.total === 0 && (
                    <p className="text-muted text-sm" style={{ textAlign: 'center' }}>এই মাসে কোনো উপস্থিতি ডেটা নেই</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Individual Teacher Attendance ── */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <Users size={20} style={{ color: '#3b82f6' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>শিক্ষকের ব্যক্তিগত উপস্থিতি</h2>
        </div>
        <div className="card">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '20px' }}>
            <div style={{ flex: '1 1 250px' }}>
              <label className="form-label">শিক্ষক নির্বাচন করুন</label>
              <select className="form-select" value={selTeacherAtt} onChange={e => setSelTeacherAtt(e.target.value)}>
                <option value="">-- শিক্ষক বাছুন --</option>
                {teachersList.map(t => (
                  <option key={t._id} value={t._id}>{getTeacherLabel(t)}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => changeMonth(setTeacherAttMonth, setTeacherAttYear, teacherAttMonth, teacherAttYear, -1)}>
                <ChevronLeft size={16} />
              </button>
              <span style={{ minWidth: '140px', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                {MONTHS_BN[teacherAttMonth]} {teacherAttYear}
              </span>
              <button className="btn btn-secondary" style={{ padding: '8px' }} onClick={() => changeMonth(setTeacherAttMonth, setTeacherAttYear, teacherAttMonth, teacherAttYear, 1)}>
                <ChevronRight size={16} />
              </button>
            </div>
            <button className="btn btn-primary" onClick={fetchTeacherAtt} disabled={!selTeacherAtt || loadingTeacherAtt}>
              <Search size={16} /> {loadingTeacherAtt ? 'অনুসন্ধান...' : 'দেখুন'}
            </button>
          </div>

          {teacherAttData && (
            <div style={{ animation: 'slideDown 0.3s ease-out' }}>
              <div style={{ padding: '12px 16px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{teacherAttData.teacher?.name}</span>
                  <span style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>({teacherAttData.teacher?.employeeId})</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{MONTHS_BN[teacherAttData.month]} {teacherAttData.year}</span>
              </div>
              <div className="grid grid-2" style={{ gap: '20px' }}>
                <AttendanceCalendar records={teacherAttData.records} month={teacherAttData.month} year={teacherAttData.year} />
                <div>
                  <div className="grid grid-2" style={{ gap: '10px', marginBottom: '16px' }}>
                    {Object.entries(STATUS_LABELS).map(([k, v]) => (
                      <div key={k} style={{ padding: '12px', borderRadius: '10px', background: `${STATUS_COLORS[k]}15`, textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: STATUS_COLORS[k] }}>{teacherAttData.summary[k] || 0}</div>
                        <div style={{ fontSize: '0.8rem', color: STATUS_COLORS[k] }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  {teacherAttData.summary.total > 0 && (
                    <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(59,130,246,0.1)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6' }}>
                        {Math.round((teacherAttData.summary.present / teacherAttData.summary.total) * 100)}%
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#3b82f6' }}>উপস্থিতি হার</div>
                    </div>
                  )}
                  {teacherAttData.summary.total === 0 && (
                    <p className="text-muted text-sm" style={{ textAlign: 'center' }}>এই মাসে কোনো উপস্থিতি ডেটা নেই</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Individual Student Marks ── */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <BookOpen size={20} style={{ color: '#a855f7' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>শিক্ষার্থীর পরীক্ষার নম্বর</h2>
        </div>
        <div className="card">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '20px' }}>
            <div style={{ flex: '1 1 250px' }}>
              <label className="form-label">শিক্ষার্থী নির্বাচন করুন</label>
              <select className="form-select" value={selStudentMarks} onChange={e => setSelStudentMarks(e.target.value)}>
                <option value="">-- শিক্ষার্থী বাছুন --</option>
                {studentsList.map(s => (
                  <option key={s._id} value={s._id}>{getStudentLabel(s)}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: '1 1 200px' }}>
              <label className="form-label">পরীক্ষা (ঐচ্ছিক)</label>
              <select className="form-select" value={selExam} onChange={e => setSelExam(e.target.value)}>
                <option value="">সকল পরীক্ষা</option>
                {examsList.map(e => (
                  <option key={e._id} value={e._id}>{e.name}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary" onClick={fetchStudentMarks} disabled={!selStudentMarks || loadingMarks}>
              <Search size={16} /> {loadingMarks ? 'অনুসন্ধান...' : 'দেখুন'}
            </button>
          </div>

          {studentMarksData && (
            <div style={{ animation: 'slideDown 0.3s ease-out' }}>
              <div style={{ padding: '12px 16px', background: 'rgba(168,85,247,0.1)', borderRadius: '10px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{studentMarksData.student?.name}</span>
                  <span style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>({studentMarksData.student?.studentId})</span>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={printStudentMarksReport}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', borderColor: '#a855f7', color: '#7e22ce', fontWeight: 600, padding: '5px 12px' }}
                >
                  <Printer size={15} /> নম্বর বিবরণী প্রিন্ট করুন
                </button>
              </div>

              {studentMarksData.examResults.length === 0 ? (
                <p className="text-muted text-sm" style={{ textAlign: 'center', padding: '20px' }}>কোনো নম্বর এন্ট্রি পাওয়া যায়নি</p>
              ) : (
                studentMarksData.examResults.map((er, idx) => (
                  <div key={idx} className="card" style={{ marginBottom: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{er.exam?.name || 'অজানা পরীক্ষা'}</h4>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span className={`badge ${er.overallPercentage >= 80 ? 'badge-active' : er.overallPercentage >= 60 ? 'badge-info' : er.overallPercentage >= 33 ? 'badge-warning' : 'badge-danger'}`}>
                          সার্বিক: {er.overallPercentage}%
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {er.totalObtained}/{er.totalMarks}
                        </span>
                      </div>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'center' }}>বিষয়</th>
                          <th style={{ textAlign: 'center' }}>প্রাপ্ত নম্বর</th>
                          <th style={{ textAlign: 'center' }}>মোট নম্বর</th>
                          <th style={{ textAlign: 'center' }}>শতাংশ</th>
                          <th style={{ textAlign: 'center' }}>গ্রেড</th>
                        </tr>
                      </thead>
                      <tbody>
                        {er.subjects.map((sub, si) => (
                          <tr key={si}>
                            <td style={{ textAlign: 'center', fontWeight: 600 }}>{sub.subject?.name || '—'}</td>
                            <td style={{ textAlign: 'center' }}>
                              <span style={{ fontWeight: 700, color: sub.percentage >= 80 ? '#22c55e' : sub.percentage >= 60 ? '#3b82f6' : sub.percentage >= 33 ? '#f59e0b' : '#ef4444' }}>
                                {sub.marksObtained}
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>{sub.totalMarks}</td>
                            <td style={{ textAlign: 'center' }}>
                              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '100px', overflow: 'hidden' }}>
                                  <div style={{
                                    height: '100%', width: `${sub.percentage}%`, borderRadius: '100px',
                                    background: sub.percentage >= 80 ? '#22c55e' : sub.percentage >= 60 ? '#3b82f6' : sub.percentage >= 33 ? '#f59e0b' : '#ef4444'
                                  }} />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{sub.percentage}%</span>
                              </div>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className="badge badge-muted">{sub.grade || '—'}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Biometric / Fingerprint Punch Report ── */}
      <section style={{ marginBottom: '32px' }}>
        <div className="flex gap-8 mb-16" style={{ alignItems: 'center' }}>
          <ClipboardCheck size={20} style={{ color: '#10b981' }} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>বায়োমেট্রিক পাঞ্চ রিপোর্ট (Fingerprint Report)</h2>
        </div>

        <div className="card">
          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: '20px', padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '12px' }}>

            {/* Date Mode Toggle */}
            <div>
              <label className="form-label">তারিখের ধরন</label>
              <div style={{ display: 'inline-flex', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2px' }}>
                <button type="button" onClick={() => setPunchReportMode('single')} style={{ padding: '5px 14px', borderRadius: '6px', border: 'none', background: punchReportMode === 'single' ? 'var(--primary)' : 'transparent', color: punchReportMode === 'single' ? '#fff' : 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}>
                  একক দিন
                </button>
                <button type="button" onClick={() => setPunchReportMode('range')} style={{ padding: '5px 14px', borderRadius: '6px', border: 'none', background: punchReportMode === 'range' ? 'var(--primary)' : 'transparent', color: punchReportMode === 'range' ? '#fff' : 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}>
                  তারিখ রেঞ্জ
                </button>
              </div>
            </div>

            {/* Date Input */}
            {punchReportMode === 'single' ? (
              <div>
                <label className="form-label">তারিখ</label>
                <input type="date" className="form-input" value={punchDate} onChange={e => setPunchDate(e.target.value)} style={{ height: '38px' }} />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div>
                  <label className="form-label">শুরু</label>
                  <input type="date" className="form-input" value={punchStartDate} onChange={e => setPunchStartDate(e.target.value)} style={{ height: '38px' }} />
                </div>
                <span className="text-muted" style={{ marginTop: '20px' }}>—</span>
                <div>
                  <label className="form-label">শেষ</label>
                  <input type="date" className="form-input" value={punchEndDate} onChange={e => setPunchEndDate(e.target.value)} style={{ height: '38px' }} />
                </div>
              </div>
            )}

            {/* Class Filter */}
            <div>
              <label className="form-label">শ্রেণি</label>
              <select className="form-select" value={punchClassFilter} onChange={e => setPunchClassFilter(e.target.value)} style={{ height: '38px' }}>
                <option value="all">সকল শ্রেণি</option>
                {classesList.map(cls => (
                  <option key={cls._id} value={cls._id}>{cls.name}</option>
                ))}
              </select>
            </div>

            {/* Student Filter */}
            <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
              <label className="form-label">শিক্ষার্থী (ঐচ্ছিক)</label>
              <select className="form-select" value={punchStudentFilter} onChange={e => setPunchStudentFilter(e.target.value)} style={{ height: '38px' }}>
                <option value="">সকল শিক্ষার্থী</option>
                {studentsList.map(s => (
                  <option key={s._id} value={s._id}>{getStudentLabel(s)}</option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <button className="btn btn-primary" onClick={fetchPunchReport} disabled={loadingPunch} style={{ height: '38px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Search size={15} /> {loadingPunch ? 'লোড হচ্ছে...' : 'রিপোর্ট দেখুন'}
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          {summaryData && (
            <div style={{ marginBottom: '20px' }}>
              <div className="grid grid-5" style={{ gap: '10px', marginBottom: '16px' }}>
                {[
                  { label: 'মোট রেকর্ড', value: summaryData.totals.total, color: '#64748b' },
                  { label: 'উপস্থিত', value: summaryData.totals.present, color: '#10b981' },
                  { label: 'অনুপস্থিত', value: summaryData.totals.absent, color: '#ef4444' },
                  { label: 'বিলম্ব', value: summaryData.totals.late, color: '#f59e0b' },
                  { label: 'ছুটি', value: summaryData.totals.on_leave, color: '#3b82f6' },
                ].map(item => (
                  <div key={item.label} style={{ padding: '12px', borderRadius: '10px', background: item.color + '12', textAlign: 'center', border: '1px solid ' + item.color + '30' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: item.color, fontFamily: 'Inter' }}>{item.value}</div>
                    <div style={{ fontSize: '0.78rem', color: item.color, fontWeight: 600 }}>{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Class-wise summary table */}
              {summaryData.summary?.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                      📊 শ্রেণি-ভিত্তিক উপস্থিতির সারসংক্ষেপ
                    </h4>
                    <button className="btn btn-outline" onClick={exportSummaryCSV} style={{ fontSize: '0.8rem', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Download size={13} /> সারসংক্ষেপ CSV
                    </button>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                  <table className="table" style={{ margin: 0 }}>
                    <thead>
                      <tr>
                        <th>তারিখ</th>
                        <th>শ্রেণি</th>
                        <th style={{ textAlign: 'center' }}>মোট</th>
                        <th style={{ textAlign: 'center', color: '#10b981' }}>উপস্থিত</th>
                        <th style={{ textAlign: 'center', color: '#ef4444' }}>অনুপস্থিত</th>
                        <th style={{ textAlign: 'center', color: '#f59e0b' }}>বিলম্ব</th>
                        <th style={{ textAlign: 'center', color: '#3b82f6' }}>ছুটি</th>
                        <th style={{ textAlign: 'center' }}>উপস্থিতি হার</th>
                      </tr>
                    </thead>
                    <tbody>
                      {summaryData.summary.map((row, i) => {
                        const rate = row.total > 0 ? Math.round((row.present / row.total) * 100) : 0;
                        return (
                          <tr key={i}>
                            <td style={{ fontFamily: 'Inter', fontWeight: 600 }}>{row.date}</td>
                            <td style={{ fontWeight: 600 }}>{row.classLevel}</td>
                            <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 700 }}>{row.total}</td>
                            <td style={{ textAlign: 'center', color: '#10b981', fontWeight: 700 }}>{row.present}</td>
                            <td style={{ textAlign: 'center', color: '#ef4444', fontWeight: 700 }}>{row.absent}</td>
                            <td style={{ textAlign: 'center', color: '#f59e0b', fontWeight: 700 }}>{row.late}</td>
                            <td style={{ textAlign: 'center', color: '#3b82f6', fontWeight: 700 }}>{row.on_leave}</td>
                            <td style={{ textAlign: 'center' }}>
                              <span style={{ padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'Inter', background: rate >= 75 ? 'rgba(16,185,129,0.15)' : rate >= 50 ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)', color: rate >= 75 ? '#10b981' : rate >= 50 ? '#f59e0b' : '#ef4444' }}>
                                {rate}%
                              </span>
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

          {/* Individual Punch Log Table */}
          {punchData && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                  ব্যক্তিগত পাঞ্চ লগ 
                  <span style={{ marginLeft: '8px', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-muted)' }}>({punchData.total} টি রেকর্ড)</span>
                </h3>
                {punchData.records.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-outline" onClick={exportPunchCSV} style={{ fontSize: '0.82rem', padding: '5px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Download size={14} /> পাঞ্চ লগ CSV
                    </button>
                    <button className="btn btn-primary" onClick={() => { setPrintScope('punch_only'); setShowPrintModal(true); }} style={{ fontSize: '0.82rem', padding: '5px 14px', display: 'flex', alignItems: 'center', gap: '6px', background: '#0284c7', borderColor: '#0284c7' }}>
                      <Printer size={14} /> PDF / প্রিন্ট করুন
                    </button>
                  </div>
                )}
              </div>

              {punchData.records.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                  <ClipboardCheck size={40} style={{ opacity: 0.3, marginBottom: '8px' }} />
                  <p>নির্বাচিত তারিখে কোনো পাঞ্চ রেকর্ড পাওয়া যায়নি</p>
                </div>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table className="table" style={{ margin: 0 }}>
                    <thead>
                      <tr>
                        <th>তারিখ</th>
                        <th>নাম</th>
                        <th style={{ textAlign: 'center' }}>শ্রেণি</th>
                        <th style={{ textAlign: 'center' }}>স্ট্যাটাস</th>
                        <th style={{ textAlign: 'center' }}>ইন-টাইম</th>
                        <th style={{ textAlign: 'center' }}>আউট-টাইম</th>
                        <th style={{ textAlign: 'center' }}>পাঞ্চ সংখ্যা</th>
                        <th style={{ minWidth: '200px' }}>সকল পাঞ্চ লগ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {punchData.records.map((rec, i) => (
                        <tr key={i}>
                          <td style={{ fontFamily: 'Inter', fontWeight: 600, whiteSpace: 'nowrap' }}>{rec.date}</td>
                          <td>
                            <div style={{ fontWeight: 600 }}>{rec.student.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {rec.student.studentId}</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span style={{ padding: '2px 8px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>
                              {rec.student.className || '—'}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, background: getStatusColor(rec.status) + '20', color: getStatusColor(rec.status), border: '1px solid ' + getStatusColor(rec.status) + '40' }}>
                              {getStatusLabel(rec.status)}
                            </span>
                          </td>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600, color: '#10b981' }}>{rec.inTime || '—'}</td>
                          <td style={{ textAlign: 'center', fontFamily: 'Inter', fontWeight: 600, color: '#6366f1' }}>{rec.outTime || '—'}</td>
                          <td style={{ textAlign: 'center' }}>
                            <span style={{ padding: '2px 10px', borderRadius: '12px', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.85rem', background: rec.punchCount > 0 ? 'rgba(14,165,233,0.12)' : 'var(--bg-tertiary)', color: rec.punchCount > 0 ? '#0ea5e9' : 'var(--text-muted)' }}>
                              {rec.punchCount} বার
                            </span>
                          </td>
                          <td>
                            {rec.punchTimes && rec.punchTimes.length > 0 ? (
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {rec.punchTimes.map((t, ti) => (
                                  <span key={ti} style={{ padding: '2px 7px', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: '#059669', fontSize: '0.75rem', fontFamily: 'Inter', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                    {ti + 1}. {t}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>—</span>
                            )}
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
      
          {/* Print Options Modal */}
          {showPrintModal && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
              <div className="card" style={{ width: '100%', maxWidth: '480px', padding: '24px', borderRadius: '12px', background: 'var(--bg-primary, #ffffff)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '12px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                    <Printer size={20} color="#0284c7" /> প্রিন্ট ও PDF ওরিয়েন্টেশন
                  </h3>
                  <button onClick={() => setShowPrintModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--text-muted)' }}>✕</button>
                </div>

                {/* Report Scope Selection */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>কোন অংশটি প্রিন্ট করতে চান?</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', border: '1px solid ' + (printScope === 'full' ? '#0284c7' : 'var(--border-color, #e2e8f0)'), borderRadius: '8px', cursor: 'pointer', background: printScope === 'full' ? 'rgba(2,132,199,0.08)' : 'transparent' }}>
                      <input type="radio" name="printScope" checked={printScope === 'full'} onChange={() => setPrintScope('full')} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>📑 সম্পূর্ণ রিপোর্ট</div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>সারসংক্ষেপ কার্ড, শ্রেণি টেবিল ও ব্যক্তিগত পাঞ্চ লগ সব একসাথে</div>
                      </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', border: '1px solid ' + (printScope === 'punch_only' ? '#0284c7' : 'var(--border-color, #e2e8f0)'), borderRadius: '8px', cursor: 'pointer', background: printScope === 'punch_only' ? 'rgba(2,132,199,0.08)' : 'transparent' }}>
                      <input type="radio" name="printScope" checked={printScope === 'punch_only'} onChange={() => setPrintScope('punch_only')} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>📋 শুধু ব্যক্তিগত পাঞ্চ লগ</div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>শিক্ষার্থীদের ইন-টাইম, আউট-টাইম ও বিস্তারিত পাঞ্চের তালিকা</div>
                      </div>
                    </label>
                    {summaryData?.summary?.length > 0 && (
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', border: '1px solid ' + (printScope === 'summary_only' ? '#0284c7' : 'var(--border-color, #e2e8f0)'), borderRadius: '8px', cursor: 'pointer', background: printScope === 'summary_only' ? 'rgba(2,132,199,0.08)' : 'transparent' }}>
                        <input type="radio" name="printScope" checked={printScope === 'summary_only'} onChange={() => setPrintScope('summary_only')} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>📊 শুধু শ্রেণি-ভিত্তিক সারসংক্ষেপ</div>
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>ক্লাস অনুযায়ী উপস্থিতির হার ও মোট পরিসংখ্যান</div>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                {/* Orientation Selection */}
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>প্রিন্ট ওরিয়েন্টেশন (Orientation)</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setPrintOrientation('landscape')}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '8px',
                        border: '2px solid ' + (printOrientation === 'landscape' ? '#0284c7' : 'var(--border-color, #e2e8f0)'),
                        background: printOrientation === 'landscape' ? 'rgba(2,132,199,0.1)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📑</div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: printOrientation === 'landscape' ? '#0284c7' : 'var(--text-primary)' }}>ল্যান্ডস্কেপ (Landscape)</div>
                      <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700, marginTop: '2px' }}>আড়াআড়ি (প্রস্তাবিত)</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrintOrientation('portrait')}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '8px',
                        border: '2px solid ' + (printOrientation === 'portrait' ? '#0284c7' : 'var(--border-color, #e2e8f0)'),
                        background: printOrientation === 'portrait' ? 'rgba(2,132,199,0.1)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>📄</div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: printOrientation === 'portrait' ? '#0284c7' : 'var(--text-primary)' }}>পোর্ট্রেট (Portrait)</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>লম্বালম্বি</div>
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <button className="btn btn-secondary" onClick={() => setShowPrintModal(false)}>বাতিল</button>
                  <button
                    className="btn btn-primary"
                    style={{ background: '#0284c7', borderColor: '#0284c7', display: 'flex', alignItems: 'center', gap: '6px' }}
                    onClick={() => {
                      setShowPrintModal(false);
                      printPunchReport(printOrientation, printScope);
                    }}
                  >
                    <Printer size={16} /> প্রিন্ট ও PDF তৈরি করুন
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media print {
          @page {
            size: A4 ${orientation};
            margin: ${orientation === 'landscape' ? '6mm 8mm 6mm 8mm' : '8mm 10mm 8mm 10mm'};
          }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body, html, #root, .main-content, .page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .sidebar, .topbar { display: none !important; }
          section {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 12px !important;
          }
          .card {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            page-break-inside: avoid;
            box-shadow: none !important;
            margin-bottom: 10px !important;
            padding: 10px 14px !important;
            border-radius: 6px !important;
          }
          .stats-card {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            page-break-inside: avoid;
            padding: 8px 10px !important;
            border-radius: 6px !important;
          }
          .stats-card-value {
            -webkit-text-fill-color: #000000 !important;
            color: #000000 !important;
            font-size: 1.3rem !important;
          }
          .stats-card-label {
            font-size: 0.76rem !important;
          }
          .stats-card-icon {
            display: none !important;
          }
          .grid {
            gap: 8px !important;
          }
          .grid-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          h2 {
            font-size: 1rem !important;
            margin-bottom: 6px !important;
          }
          h3 {
            font-size: 0.88rem !important;
            margin-bottom: 6px !important;
          }
          table {
            font-size: 8.5pt !important;
            width: 100% !important;
            border-collapse: collapse !important;
          }
          th, td {
            padding: 3px 6px !important;
            border: 1px solid #94a3b8 !important;
          }
          .badge {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            padding: 1px 5px !important;
            font-size: 7.5pt !important;
          }
          .print-footer-signatures-wrap {
            margin-top: 18px !important;
            padding-top: 10px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
}
