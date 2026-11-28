import { useState, useEffect, useMemo } from 'react';
import { Printer, Save, RefreshCw, CheckCircle, AlertCircle, UserPlus, BookOpenCheck, Trophy, ClipboardList } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { toBnNumber, getMadrasahInfo } from '../../utils/helpers';

const BRANCH_OPTIONS = [
  { key: 'balok', label: 'বালক শাখা' },
  { key: 'balika', label: 'বালিকা শাখা' },
];

const DEPARTMENT_OPTIONS = [
  { key: 'hifz', label: 'হিফজ বিভাগ' },
  { key: 'najera', label: 'নাজেরা বিভাগ' },
  { key: 'maktab', label: 'মক্তব বিভাগ' },
];

const SUB_BRANCH_MAP = {
  hifz: [
    { key: 'ক', label: 'ক শাখা' },
    { key: 'খ', label: 'খ শাখা' },
    { key: 'গ', label: 'গ শাখা' },
    { key: 'ঘ', label: 'ঘ শাখা' },
  ],
  najera: [
    { key: 'ক', label: 'ক শাখা' },
    { key: 'খ', label: 'খ শাখা' },
    { key: 'গ', label: 'গ শাখা' },
    { key: 'ঘ', label: 'ঘ শাখা' },
  ],
  maktab: [
    { key: 'আমপারা', label: 'আমপারা' },
    { key: 'কায়দা', label: 'কায়দা' },
  ],
};

const REGULAR_EXAMS = [
  { key: 'model_test', label: 'মডেল টেস্ট পরীক্ষা' },
  { key: 'term_1', label: '১ম সাময়িক পরীক্ষা' },
  { key: 'term_2', label: '২য় সাময়িক পরীক্ষা' },
  { key: 'monthly', label: 'মাসিক পরীক্ষা' },
  { key: 'weekly', label: 'সাপ্তাহিক পরীক্ষা' },
];

const FINAL_EXAM_OPTION = { key: 'final', label: 'বার্ষিক / ফাইনাল পরীক্ষা' };

const PARA_GROUPS = [
  { key: '05', label: '০৫ পারা গ্রুপ (১৫০)' },
  { key: '10_15', label: '১০ ও ১৫ পারা গ্রুপ (১৫০)' },
  { key: '20', label: '২০ পারা গ্রুপ (১৭০)' },
  { key: '30', label: '৩০ পারা গ্রুপ (২০০)' },
];

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default function HifzResultsWorkspace({ embedded = false }) {
  const { user } = useAuthStore();
  const { madrasahName, address } = getMadrasahInfo(user);

  const [branchType, setBranchType] = useState('balok');
  const [department, setDepartment] = useState('hifz');
  const [subBranch, setSubBranch] = useState('ক');
  const [examCategory, setExamCategory] = useState('model_test');
  const [paraGroup, setParaGroup] = useState('05');
  const [academicYear, setAcademicYear] = useState('2026');

  const [schema, setSchema] = useState({ columns: [], totalMax: 200 });
  const [rows, setRows] = useState([]);
  const [otherStudents, setOtherStudents] = useState([]);
  const [assignStudentId, setAssignStudentId] = useState('');
  const [viewMode, setViewMode] = useState('entry'); // 'entry' | 'merit'
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Switch subBranch cleanly when department changes
  useEffect(() => {
    const allowedSubs = SUB_BRANCH_MAP[department] || SUB_BRANCH_MAP.hifz;
    if (!allowedSubs.some((s) => s.key === subBranch)) {
      setSubBranch(allowedSubs[0].key);
    }
    if (department === 'maktab' && examCategory === 'final') {
      setExamCategory('model_test');
    }
  }, [department, subBranch, examCategory]);

  const examOptions = useMemo(() => {
    if (department === 'hifz' || department === 'najera') {
      return [...REGULAR_EXAMS, FINAL_EXAM_OPTION];
    }
    return REGULAR_EXAMS;
  }, [department]);

  const fetchSheet = async () => {
    setLoading(true);
    setFeedback(null);
    try {
      const res = await api.get('/hifz-results/sheet', {
        params: {
          branchType,
          department,
          subBranch,
          examCategory,
          paraGroup: examCategory === 'final' ? paraGroup : '',
          academicYear,
        },
      });
      if (res.data?.success) {
        setSchema(res.data.data.schema || { columns: [], totalMax: 0 });
        setRows(res.data.data.rows || []);
        setOtherStudents(res.data.data.otherStudents || []);
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'ফলাফল শিট লোড করতে সমস্যা হয়েছে',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branchType, department, subBranch, examCategory, paraGroup, academicYear]);

  // Compute live total & dense rank (তারতীব) on client while typing
  const computedRows = useMemo(() => {
    const withTotals = rows.map((r) => {
      let sum = 0;
      let hasAny = false;
      for (const col of schema.columns) {
        const val = r.marks?.[col.key];
        if (val !== '' && val !== null && val !== undefined && !isNaN(Number(val))) {
          sum += Number(val);
          hasAny = true;
        }
      }
      return {
        ...r,
        liveTotal: sum,
        hasAnyMark: hasAny,
      };
    });

    const sortedScored = [...withTotals]
      .filter((item) => item.hasAnyMark)
      .sort((a, b) => b.liveTotal - a.liveTotal);

    const rankMap = new Map();
    let currRank = 0;
    let prevScore = null;
    for (const item of sortedScored) {
      if (prevScore !== null && item.liveTotal === prevScore) {
        // tied
      } else {
        currRank += 1;
        prevScore = item.liveTotal;
      }
      rankMap.set(item.studentId, currRank);
    }

    return withTotals.map((r) => ({
      ...r,
      liveRank: rankMap.get(r.studentId) || null,
    }));
  }, [rows, schema.columns]);

  const formatRankLabel = (rank, showMedal = true) => {
    if (!rank) return '—';
    const bRank = toBnNumber(rank);
    if (rank === 1) return `${showMedal ? '🥇 ' : ''}${bRank}ম স্থান`;
    if (rank === 2) return `${showMedal ? '🥈 ' : ''}${bRank}য় স্থান`;
    if (rank === 3) return `${showMedal ? '🥉 ' : ''}${bRank}য় স্থান`;
    if (rank === 4) return `${bRank}র্থ স্থান`;
    if (rank === 5) return `${bRank}ম স্থান`;
    if (rank >= 6 && rank <= 10) {
      const suffixes = { 6: 'ষ্ঠ', 7: 'ম', 8: 'ম', 9: 'ম', 10: 'ম' };
      return `${bRank}${suffixes[rank]} স্থান`;
    }
    return `${bRank}তম স্থান`;
  };

  const meritSortedRows = useMemo(() => {
    return [...computedRows].sort((a, b) => {
      if (a.hasAnyMark && !b.hasAnyMark) return -1;
      if (!a.hasAnyMark && b.hasAnyMark) return 1;
      if (a.hasAnyMark && b.hasAnyMark && b.liveTotal !== a.liveTotal) {
        return b.liveTotal - a.liveTotal;
      }
      return String(a.name).localeCompare(String(b.name), 'bn');
    });
  }, [computedRows]);

  const handleReadingAmountChange = (studentId, val) => {
    setRows((prev) =>
      prev.map((r) => (r.studentId === studentId ? { ...r, readingAmount: val } : r))
    );
  };

  const handleMarkChange = (studentId, colKey, colMax, rawVal) => {
    if (rawVal === '') {
      setRows((prev) =>
        prev.map((r) =>
          r.studentId === studentId
            ? { ...r, marks: { ...(r.marks || {}), [colKey]: '' } }
            : r
        )
      );
      return;
    }
    const num = Number(rawVal);
    if (isNaN(num)) return;
    const clamped = Math.max(0, Math.min(colMax, num));
    setRows((prev) =>
      prev.map((r) =>
        r.studentId === studentId
          ? { ...r, marks: { ...(r.marks || {}), [colKey]: clamped } }
          : r
      )
    );
  };

  const handleAssignStudent = async () => {
    if (!assignStudentId) return;
    try {
      await api.patch('/hifz-results/assign-subbranch', {
        studentId: assignStudentId,
        subBranch,
        department,
      });
      setAssignStudentId('');
      await fetchSheet();
      setFeedback({ type: 'success', message: `শিক্ষার্থীকে "${subBranch}" শাখায় যুক্ত করা হয়েছে` });
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'শিক্ষার্থী যুক্ত করতে সমস্যা হয়েছে',
      });
    }
  };

  const handleSaveAll = async () => {
    if (rows.length === 0) return;
    setSaving(true);
    setFeedback(null);
    try {
      const entries = rows.map((r) => ({
        studentId: r.studentId,
        readingAmount: r.readingAmount || '',
        marks: r.marks || {},
      }));
      const res = await api.post('/hifz-results/bulk-save', {
        branchType,
        department,
        subBranch,
        examCategory,
        paraGroup: examCategory === 'final' ? paraGroup : '',
        academicYear,
        entries,
      });
      if (res.data?.success) {
        setFeedback({ type: 'success', message: res.data.message || 'ফলাফল সফলভাবে সংরক্ষিত হয়েছে!' });
        await fetchSheet();
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'ফলাফল সংরক্ষণ করতে সমস্যা হয়েছে',
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePrintSheet = (mode = 'entry') => {
    const isMeritPrint = mode === 'merit';
    const targetList = isMeritPrint ? meritSortedRows : computedRows;
    const branchLabel = BRANCH_OPTIONS.find((b) => b.key === branchType)?.label || 'বালক শাখা';
    const deptShort = department === 'hifz' ? 'হেফজ' : department === 'najera' ? 'নাজেরা' : 'মক্তব';
    const subLabel = department === 'maktab' ? subBranch : `${subBranch} গ্রুপ`;
    const paraLabel =
      examCategory === 'final' && (department === 'hifz' || department === 'najera')
        ? ` — ${PARA_GROUPS.find((p) => p.key === paraGroup)?.label?.split(' (')[0] || ''}`
        : '';
    const rightBoxText = `বিষয়ঃ ${deptShort} (${subLabel})${paraLabel}`;
    const examTitle = `${examOptions.find((e) => e.key === examCategory)?.label || 'পরীক্ষা'}-${toBnNumber(academicYear)}${isMeritPrint ? ' — মেধা তালিকা (Merit List)' : ''}`;

    const colHeadersTop = schema.columns
      .map((c) => `<th>${escapeHtml(c.label)}</th>`)
      .join('');
    const colHeadersMax = schema.columns
      .map((c) => `<th>${escapeHtml(toBnNumber(c.max))}</th>`)
      .join('');

    const minRows = isMeritPrint ? targetList.length : Math.max(14, targetList.length);
    const bodyRowsHtml = Array.from({ length: minRows })
      .map((_, idx) => {
        const r = targetList[idx];
        if (!r) {
          const emptyCols = schema.columns.map(() => '<td></td>').join('');
          return `<tr>
            <td class="c-center">${toBnNumber(idx + 1)}</td>
            <td></td>
            <td></td>
            ${emptyCols}
            <td></td>
            <td class="tartib-col"></td>
          </tr>`;
        }
        const markCells = schema.columns
          .map((c) => {
            const v = r.marks?.[c.key];
            const disp = v !== '' && v !== null && v !== undefined ? toBnNumber(v) : '';
            return `<td class="c-center">${escapeHtml(disp)}</td>`;
          })
          .join('');
        const rankDisplay = isMeritPrint
          ? (r.liveRank ? formatRankLabel(r.liveRank, false) : '—')
          : (r.liveRank ? toBnNumber(r.liveRank) : '');
        return `<tr>
          <td class="c-center">${toBnNumber(idx + 1)}</td>
          <td class="name-col">${escapeHtml(r.name)}${isMeritPrint && r.rollNumber ? ` <small>(রোল: ${toBnNumber(r.rollNumber)})</small>` : ''}</td>
          <td class="c-center">${escapeHtml(r.readingAmount || '')}</td>
          ${markCells}
          <td class="c-center" style="font-weight:700;">${r.hasAnyMark ? toBnNumber(r.liveTotal) : ''}</td>
          <td class="c-center tartib-col">${escapeHtml(rankDisplay)}</td>
        </tr>`;
      })
      .join('');

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(examTitle)} - ${escapeHtml(rightBoxText)}</title>
  <style>
    @page { size: A4 landscape; margin: 10mm 12mm; }
    * { box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', Arial, sans-serif;
      color: #111827;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 6px;
    }
    .header-side-box {
      border: 1.4px solid #1f2937;
      padding: 4px 12px;
      font-size: 13px;
      font-weight: 700;
      min-width: 170px;
      text-align: center;
      background: #ffffff;
    }
    .header-center {
      text-align: center;
      flex: 1;
    }
    .inst-bn {
      font-size: 20px;
      font-weight: 800;
      margin: 0;
    }
    .inst-en {
      font-size: 14px;
      font-weight: 700;
      margin: 1px 0;
      letter-spacing: 0.4px;
    }
    .inst-addr {
      font-size: 11.5px;
      margin: 0;
      color: #374151;
    }
    .exam-title {
      text-align: center;
      font-size: 15px;
      font-weight: 800;
      margin: 4px 0 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 18px;
    }
    th, td {
      border: 1.2px solid #1f2937;
      padding: 4px 5px;
      font-size: 12.5px;
      height: 25px;
      vertical-align: middle;
    }
    thead tr:first-child th {
      background: #e5e7eb;
      font-weight: 700;
      text-align: center;
    }
    thead tr:nth-child(2) th {
      background: #e5e7eb;
      font-weight: 700;
      text-align: center;
      font-size: 12px;
    }
    .c-center { text-align: center; }
    .name-col { text-align: left; padding-left: 7px; font-weight: 600; min-width: 145px; }
    .tartib-col { background: #d1d5db; font-weight: 700; text-align: center; min-width: 60px; }
    .footer-sig {
      text-align: right;
      margin-top: 22px;
      font-size: 13.5px;
      font-weight: 700;
      padding-right: 24px;
    }
  </style>
</head>
<body>
  <div class="header-grid">
    <div class="header-side-box">${escapeHtml(branchLabel)}</div>
    <div class="header-center">
      <div class="inst-bn">${escapeHtml(madrasahName)}</div>
      <div class="inst-en">AN-NUR ISLAMIC ACADEMY</div>
      <div class="inst-addr">${escapeHtml(address || 'শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ।')}</div>
    </div>
    <div class="header-side-box">${escapeHtml(rightBoxText)}</div>
  </div>
  <div class="exam-title">${escapeHtml(examTitle)}</div>
  <table>
    <thead>
      <tr>
        <th rowspan="2" style="width:42px;">ক্রমিক</th>
        <th rowspan="2" style="min-width:145px;">নাম</th>
        <th rowspan="2" style="width:95px;">পড়ার পরিমান</th>
        ${colHeadersTop}
        <th style="width:52px;">মোট</th>
        <th rowspan="2" class="tartib-col">তারতীব</th>
      </tr>
      <tr>
        ${colHeadersMax}
        <th>${toBnNumber(schema.totalMax)}</th>
      </tr>
    </thead>
    <tbody>
      ${bodyRowsHtml}
    </tbody>
  </table>
  <div class="footer-sig">পরীক্ষকের স্বাক্ষর</div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  </script>
</body>
</html>`;

    const w = window.open('', '_blank', 'width=1120,height=780');
    if (!w) return;
    w.document.open();
    w.document.write(html);
    w.document.close();
  };

  return (
    <div className="animate-fade-in">
      {!embedded && (
        <div className="page-header no-print">
          <div>
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpenCheck size={22} style={{ color: '#059669' }} />
              <span>হিফজ, নাজেরা ও মক্তব ফলাফল</span>
            </h1>
            <p className="page-subtitle">বালক ও বালিকা শাখা ➔ বিভাগ ➔ উপ-শাখা ও পরীক্ষা অনুযায়ী নম্বর এন্ট্রি ও প্রিন্ট</p>
          </div>
        </div>
      )}

      {/* Hierarchy Selector Card */}
      <div className="card mb-20 no-print" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '12px', alignItems: 'end' }}>
          <div>
            <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>১. প্রধান শাখা</label>
            <select className="form-input form-select" value={branchType} onChange={(e) => setBranchType(e.target.value)}>
              {BRANCH_OPTIONS.map((b) => (
                <option key={b.key} value={b.key}>{b.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>২. বিভাগ</label>
            <select className="form-input form-select" value={department} onChange={(e) => setDepartment(e.target.value)}>
              {DEPARTMENT_OPTIONS.map((d) => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>
              ৩. {department === 'maktab' ? 'উপ-বিভাগ (আমপারা/কায়দা)' : 'উপ-শাখা (ক/খ/গ/ঘ)'}
            </label>
            <select className="form-input form-select" value={subBranch} onChange={(e) => setSubBranch(e.target.value)}>
              {(SUB_BRANCH_MAP[department] || SUB_BRANCH_MAP.hifz).map((sb) => (
                <option key={sb.key} value={sb.key}>{sb.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>৪. পরীক্ষার ক্যাটাগরি</label>
            <select className="form-input form-select" value={examCategory} onChange={(e) => setExamCategory(e.target.value)}>
              {examOptions.map((ex) => (
                <option key={ex.key} value={ex.key}>{ex.label}</option>
              ))}
            </select>
          </div>

          {examCategory === 'final' && (department === 'hifz' || department === 'najera') && (
            <div>
              <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>৫. ফাইনাল পারা গ্রুপ</label>
              <select className="form-input form-select" value={paraGroup} onChange={(e) => setParaGroup(e.target.value)}>
                {PARA_GROUPS.map((pg) => (
                  <option key={pg.key} value={pg.key}>{pg.label}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 700 }}>শিক্ষাবর্ষ</label>
            <input
              type="text"
              className="form-input"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              placeholder="2026"
            />
          </div>
        </div>

        {/* Action Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {otherStudents.length > 0 && (
              <>
                <select
                  className="form-input form-select"
                  value={assignStudentId}
                  onChange={(e) => setAssignStudentId(e.target.value)}
                  style={{ width: 'auto', minWidth: '230px', marginBottom: 0, height: '36px', fontSize: '0.84rem' }}
                >
                  <option value="">+ বিভাগের অন্য শিক্ষার্থী ({toBnNumber(otherStudents.length)} জন)...</option>
                  {otherStudents.map((st) => (
                    <option key={st.studentId} value={st.studentId}>
                      {st.name} ({st.subBranchDisplay || st.section || 'উপ-শাখা নেই'})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleAssignStudent}
                  disabled={!assignStudentId}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                >
                  <UserPlus size={14} /> এই শাখায় আনুন
                </button>
              </>
            )}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', background: 'var(--bg-secondary, #f1f5f9)', padding: '3px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === 'entry' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewMode('entry')}
                style={{ padding: '4px 10px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <ClipboardList size={14} /> নম্বর এন্ট্রি
              </button>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === 'merit' ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setViewMode('merit')}
                style={{ padding: '4px 10px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <Trophy size={14} /> মেধা তালিকা (১ম, ২য়, ৩য়...)
              </button>
            </div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={fetchSheet} disabled={loading}>
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> রিফ্রেশ
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => handlePrintSheet(viewMode)}>
              <Printer size={14} /> {viewMode === 'merit' ? 'প্রিন্ট মেধা তালিকা' : 'প্রিন্ট মার্কশিট'}
            </button>
            {viewMode === 'entry' && (
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveAll} disabled={saving || rows.length === 0}>
                <Save size={14} /> {saving ? 'সংরক্ষণ হচ্ছে...' : 'ফলাফল সংরক্ষণ করুন'}
              </button>
            )}
          </div>
        </div>
      </div>

      {feedback && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '8px',
            marginBottom: '14px',
            background: feedback.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: feedback.type === 'success' ? '#166534' : '#991b1b',
            fontWeight: 600,
            fontSize: '0.88rem',
          }}
        >
          {feedback.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Marks Entry OR Merit List Table */}
      <div className="card" style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
            {viewMode === 'merit' ? '🏆 মেধা তালিকা — ' : ''}
            {BRANCH_OPTIONS.find((b) => b.key === branchType)?.label} •{' '}
            {DEPARTMENT_OPTIONS.find((d) => d.key === department)?.label} ({subBranch}) •{' '}
            {examOptions.find((e) => e.key === examCategory)?.label}
            {examCategory === 'final' ? ` (${PARA_GROUPS.find((p) => p.key === paraGroup)?.label})` : ''}
          </div>
          <span className="badge badge-info">
            মোট শিক্ষার্থী: {toBnNumber(computedRows.length)} জন • পূর্ণমান: {toBnNumber(schema.totalMax)}
          </span>
        </div>

        {viewMode === 'merit' ? (
          <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '820px' }}>
              <thead>
                <tr style={{ background: '#e2e8f0', color: '#0f172a' }}>
                  <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '8px 6px', textAlign: 'center', width: '52px' }}>ক্রমিক</th>
                  <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '8px 10px', textAlign: 'center', minWidth: '125px', background: '#cbd5e1' }}>মেধা স্থান (তারতীব)</th>
                  <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '8px 10px', textAlign: 'left', minWidth: '175px' }}>শিক্ষার্থীর নাম ও আইডি</th>
                  <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '8px 6px', textAlign: 'center', width: '110px' }}>পড়ার পরিমান</th>
                  {schema.columns.map((c) => (
                    <th key={c.key} style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', minWidth: '82px' }}>
                      {c.label}
                    </th>
                  ))}
                  <th style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', width: '95px' }}>সর্বমোট</th>
                </tr>
                <tr style={{ background: '#f1f5f9', color: '#0f172a' }}>
                  {schema.columns.map((c) => (
                    <th key={`${c.key}-m-max`} style={{ border: '1px solid #94a3b8', padding: '4px', textAlign: 'center', fontSize: '0.78rem' }}>
                      ({toBnNumber(c.max)})
                    </th>
                  ))}
                  <th style={{ border: '1px solid #94a3b8', padding: '4px', textAlign: 'center', fontSize: '0.78rem' }}>
                    ({toBnNumber(schema.totalMax)})
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={schema.columns.length + 5} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      মেধা তালিকা লোড হচ্ছে...
                    </td>
                  </tr>
                ) : meritSortedRows.length === 0 ? (
                  <tr>
                    <td colSpan={schema.columns.length + 5} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      এই শাখা ও উপ-শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি।
                    </td>
                  </tr>
                ) : (
                  meritSortedRows.map((row, idx) => {
                    const isTop1 = row.liveRank === 1;
                    const isTop2 = row.liveRank === 2;
                    const isTop3 = row.liveRank === 3;
                    const rowBg = isTop1
                      ? 'rgba(245, 158, 11, 0.10)'
                      : isTop2
                      ? 'rgba(148, 163, 184, 0.10)'
                      : isTop3
                      ? 'rgba(217, 119, 6, 0.08)'
                      : idx % 2 === 1
                      ? '#f8fafc'
                      : '#ffffff';
                    return (
                      <tr key={row.studentId} style={{ background: rowBg }}>
                        <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 700, padding: '8px 6px' }}>
                          {toBnNumber(idx + 1)}
                        </td>
                        <td style={{ border: '1px solid #94a3b8', textAlign: 'center', padding: '8px 6px' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '3px 9px',
                              borderRadius: '6px',
                              fontWeight: 800,
                              fontSize: isTop1 || isTop2 || isTop3 ? '0.88rem' : '0.83rem',
                              background: isTop1 ? '#fef3c7' : isTop2 ? '#f1f5f9' : isTop3 ? '#ffedd5' : 'transparent',
                              color: isTop1 ? '#b45309' : isTop2 ? '#334155' : isTop3 ? '#c2410c' : '#0f172a',
                              border: isTop1 ? '1px solid #fde68a' : isTop2 ? '1px solid #cbd5e1' : isTop3 ? '1px solid #fed7aa' : 'none',
                            }}
                          >
                            {row.liveRank ? formatRankLabel(row.liveRank, true) : '—'}
                          </span>
                        </td>
                        <td style={{ border: '1px solid #94a3b8', padding: '7px 10px' }}>
                          <div style={{ fontWeight: 700, color: '#0f172a' }}>{row.name}</div>
                          <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                            আইডি: {row.studentCode}{row.rollNumber ? ` • রোল: ${toBnNumber(row.rollNumber)}` : ''}
                          </div>
                        </td>
                        <td style={{ border: '1px solid #94a3b8', textAlign: 'center', padding: '7px 6px' }}>
                          {row.readingAmount || '—'}
                        </td>
                        {schema.columns.map((c) => {
                          const v = row.marks?.[c.key];
                          const disp = v !== '' && v !== null && v !== undefined ? toBnNumber(v) : '—';
                          return (
                            <td key={c.key} style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 600, padding: '7px 6px' }}>
                              {disp}
                            </td>
                          );
                        })}
                        <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 800, color: '#065f46', padding: '7px 6px' }}>
                          {row.hasAnyMark ? `${toBnNumber(row.liveTotal)} / ${toBnNumber(schema.totalMax)}` : '—'}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        ) : (
        <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', minWidth: '820px' }}>
            <thead>
              <tr style={{ background: '#e2e8f0', color: '#0f172a' }}>
                <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', width: '48px' }}>ক্রমিক</th>
                <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '6px 10px', textAlign: 'left', minWidth: '170px' }}>নাম</th>
                <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', width: '115px' }}>পড়ার পরিমান</th>
                {schema.columns.map((c) => (
                  <th key={c.key} style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', minWidth: '86px' }}>
                    {c.label}
                  </th>
                ))}
                <th style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', width: '72px' }}>মোট</th>
                <th rowSpan={2} style={{ border: '1px solid #94a3b8', padding: '6px', textAlign: 'center', width: '68px', background: '#cbd5e1' }}>তারতীব</th>
              </tr>
              <tr style={{ background: '#f1f5f9', color: '#0f172a' }}>
                {schema.columns.map((c) => (
                  <th key={`${c.key}-max`} style={{ border: '1px solid #94a3b8', padding: '4px', textAlign: 'center', fontSize: '0.8rem' }}>
                    {toBnNumber(c.max)}
                  </th>
                ))}
                <th style={{ border: '1px solid #94a3b8', padding: '4px', textAlign: 'center', fontSize: '0.8rem' }}>
                  {toBnNumber(schema.totalMax)}
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={schema.columns.length + 5} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                    তালিকা লোড হচ্ছে...
                  </td>
                </tr>
              ) : computedRows.length === 0 ? (
                <tr>
                  <td colSpan={schema.columns.length + 5} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                    এই শাখা ও উপ-শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি। নতুন ভর্তিতে সংশ্লিষ্ট বিভাগ ও উপ-শাখা নির্বাচন করুন অথবা উপরের ড্রপডাউন থেকে শিক্ষার্থী যুক্ত করুন।
                  </td>
                </tr>
              ) : (
                computedRows.map((row, idx) => (
                  <tr key={row.studentId} style={{ background: idx % 2 === 1 ? '#f8fafc' : '#ffffff' }}>
                    <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 700 }}>
                      {toBnNumber(idx + 1)}
                    </td>
                    <td style={{ border: '1px solid #94a3b8', padding: '6px 10px' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{row.name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                        আইডি: {row.studentCode}{row.rollNumber ? ` • রোল: ${toBnNumber(row.rollNumber)}` : ''}
                      </div>
                    </td>
                    <td style={{ border: '1px solid #94a3b8', padding: '4px' }}>
                      <input
                        type="text"
                        value={row.readingAmount || ''}
                        onChange={(e) => handleReadingAmountChange(row.studentId, e.target.value)}
                        placeholder="যেমন: ১-৩০"
                        style={{ width: '100%', textAlign: 'center', padding: '5px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.83rem' }}
                      />
                    </td>
                    {schema.columns.map((c) => (
                      <td key={c.key} style={{ border: '1px solid #94a3b8', padding: '4px' }}>
                        <input
                          type="number"
                          min={0}
                          max={c.max}
                          value={row.marks?.[c.key] ?? ''}
                          onChange={(e) => handleMarkChange(row.studentId, c.key, c.max, e.target.value)}
                          style={{ width: '100%', textAlign: 'center', padding: '5px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 600 }}
                        />
                      </td>
                    ))}
                    <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 800, color: '#065f46' }}>
                      {row.hasAnyMark ? toBnNumber(row.liveTotal) : '—'}
                    </td>
                    <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 800, background: '#e2e8f0', color: '#0f172a' }}>
                      {row.liveRank ? toBnNumber(row.liveRank) : '—'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
  );
}
