import { useState, useMemo } from 'react';
import { Plus, Trash2, Printer, Save, X, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import api from '../../api/axios';
import { toBnNumber } from '../../utils/helpers';

const BN_DAYS = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];

function getBnDayFromIso(isoDate) {
  if (!isoDate) return '';
  const d = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return '';
  return BN_DAYS[d.getDay()];
}

function formatBnShortDate(isoDate) {
  if (!isoDate) return '';
  const parts = String(isoDate).split('-');
  if (parts.length !== 3) return isoDate;
  const [yyyy, mm, dd] = parts;
  return toBnNumber(`${dd}/${mm}/${yyyy.slice(-2)}`);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function printMatrixExamRoutine(routine, defaultOrgName = 'আন্-নুর ইসলামিক একাডেমি') {
  const matrix = routine?.schedule?.kind === 'matrix' ? routine.schedule : routine;
  if (!matrix || !Array.isArray(matrix.dates) || !Array.isArray(matrix.rows)) return;

  const title = routine.title || matrix.title || 'পরীক্ষার রুটিন';
  const startTime = matrix.startTime || 'পরীক্ষা শুরু : সকাল ৯ টা।';
  const footerNote = matrix.footerNote || '';
  const sigRole = matrix.signatureRole || 'প্রধান শিক্ষক,';
  const sigName = matrix.signatureName || '';
  const sigOrg = matrix.signatureOrg || defaultOrgName;

  const headerCols = matrix.dates
    .map((d) => {
      const dateStr = d.dateLabel || formatBnShortDate(d.date) || 'তারিখ';
      const dayStr = d.dayLabel || getBnDayFromIso(d.date) || '';
      return `<th><div>${escapeHtml(dateStr)}</div>${dayStr ? `<div style="font-weight:600;margin-top:2px;">${escapeHtml(dayStr)}</div>` : ''}</th>`;
    })
    .join('');

  const bodyRows = matrix.rows
    .map((row, idx) => {
      const cells = matrix.dates
        .map((d) => {
          const val = (row.cells && row.cells[d.id] ? String(row.cells[d.id]).trim() : '') || '-';
          return `<td>${escapeHtml(val).replace(/\n/g, '<br/>')}</td>`;
        })
        .join('');
      return `<tr class="${idx % 2 === 1 ? 'zebra' : ''}">
        <td class="class-col">${escapeHtml(row.className)}</td>
        ${cells}
      </tr>`;
    })
    .join('');

  const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(title)}</title>
  <style>
    @page { size: A4 landscape; margin: 12mm 14mm; }
    * { box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', Arial, sans-serif;
      color: #111827;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet { width: 100%; }
    .title {
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      margin: 0 0 8px 0;
      letter-spacing: 0.2px;
    }
    .sub-time {
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 6px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      margin-bottom: 14px;
    }
    th, td {
      border: 1.5px solid #1f2937;
      padding: 7px 6px;
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
      line-height: 1.35;
      word-break: break-word;
    }
    thead th {
      background-color: #b8b5b2;
      font-weight: 800;
      font-size: 14px;
    }
    tbody tr.zebra td {
      background-color: #d6d3d1;
    }
    tbody td.class-col {
      font-weight: 700;
      width: 95px;
    }
    .footer-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 24px;
      margin-top: 8px;
    }
    .note-box {
      border: 1.5px solid #1f2937;
      padding: 8px 12px;
      font-size: 13.5px;
      line-height: 1.5;
      max-width: 64%;
      min-width: 340px;
      font-weight: 600;
    }
    .sig-box {
      text-align: center;
      font-size: 14px;
      line-height: 1.45;
      font-weight: 700;
      min-width: 220px;
      margin-left: auto;
    }
  </style>
</head>
<body>
  <div class="sheet">
    <h1 class="title">${escapeHtml(title)}</h1>
    ${startTime ? `<div class="sub-time">${escapeHtml(startTime)}</div>` : ''}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">তারিখ</th>
          ${headerCols}
        </tr>
      </thead>
      <tbody>
        ${bodyRows}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${footerNote ? `<div class="note-box">${escapeHtml(footerNote).replace(/\n/g, '<br/>')}</div>` : '<div></div>'}
      <div class="sig-box">
        ${sigRole ? `<div>${escapeHtml(sigRole)}</div>` : ''}
        ${sigName ? `<div>${escapeHtml(sigName)}</div>` : ''}
        ${sigOrg ? `<div>${escapeHtml(sigOrg)}</div>` : ''}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  </script>
</body>
</html>`;

  const w = window.open('', '_blank', 'width=1100,height=750');
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
}

export function MatrixRoutinePreviewTable({ routine }) {
  const matrix = routine?.schedule?.kind === 'matrix' ? routine.schedule : null;
  if (!matrix) return null;

  return (
    <div>
      {matrix.startTime && (
        <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
          {matrix.startTime}
        </div>
      )}
      <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflow: 'hidden' }}>
        <table className="table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0, fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#cbd5e1', color: '#0f172a' }}>
              <th style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 800, minWidth: '90px' }}>তারিখ</th>
              {(matrix.dates || []).map((d) => (
                <th key={d.id} style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 700, minWidth: '110px' }}>
                  <div>{d.dateLabel || formatBnShortDate(d.date)}</div>
                  {(d.dayLabel || getBnDayFromIso(d.date)) && (
                    <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{d.dayLabel || getBnDayFromIso(d.date)}</div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(matrix.rows || []).map((row, idx) => (
              <tr key={row.id || idx} style={{ background: idx % 2 === 1 ? '#e2e8f0' : '#ffffff' }}>
                <td style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 700, color: '#0f172a' }}>
                  {row.className}
                </td>
                {(matrix.dates || []).map((d) => {
                  const val = (row.cells && row.cells[d.id] ? String(row.cells[d.id]).trim() : '') || '-';
                  return (
                    <td key={d.id} style={{ border: '1px solid #94a3b8', textAlign: 'center', color: '#0f172a', whiteSpace: 'pre-line' }}>
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(matrix.footerNote || matrix.signatureName || matrix.signatureOrg) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
          {matrix.footerNote ? (
            <div style={{ border: '1px solid #94a3b8', padding: '8px 12px', borderRadius: '6px', fontSize: '0.83rem', maxWidth: '640px', background: '#f8fafc', color: '#1e293b' }}>
              {matrix.footerNote}
            </div>
          ) : <div />}
          <div style={{ textAlign: 'center', fontSize: '0.84rem', fontWeight: 700, color: '#1e293b', marginLeft: 'auto' }}>
            {matrix.signatureRole && <div>{matrix.signatureRole}</div>}
            {matrix.signatureName && <div>{matrix.signatureName}</div>}
            {matrix.signatureOrg && <div>{matrix.signatureOrg}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MatrixExamRoutineBuilder({
  initialRoutine = null,
  classes = [],
  exams = [],
  selectedExam = null,
  madrasahName = 'আন্-নুর ইসলামিক একাডেমি',
  onSaved,
  onClose,
}) {
  const existingMatrix = initialRoutine?.schedule?.kind === 'matrix' ? initialRoutine.schedule : null;

  const sortedClasses = useMemo(() => {
    return [...classes].sort((a, b) => (Number(a.order) || 999) - (Number(b.order) || 999));
  }, [classes]);

  const [title, setTitle] = useState(
    initialRoutine?.title ||
      (selectedExam ? `${selectedExam.name} / ২০২৬ ইং` : 'মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং')
  );
  const [examId, setExamId] = useState(initialRoutine?.exam || selectedExam?._id || '');
  const [stream, setStream] = useState(initialRoutine?.stream || 'all');
  const [status, setStatus] = useState(initialRoutine?.status || 'published');
  const [startTime, setStartTime] = useState(existingMatrix?.startTime || 'পরীক্ষা শুরু : সকাল ৯ টা।');

  const [dates, setDates] = useState(() => {
    if (existingMatrix?.dates?.length) return existingMatrix.dates;
    return [
      { id: 'd_1', date: '', dateLabel: '০৭/১১/২৬', dayLabel: 'শনিবার' },
      { id: 'd_2', date: '', dateLabel: '০৮/১১/২৬', dayLabel: 'রবিবার' },
      { id: 'd_3', date: '', dateLabel: '০৯/১১/২৬', dayLabel: 'সোমবার' },
      { id: 'd_4', date: '', dateLabel: '১০/১১/২৬', dayLabel: 'মঙ্গলবার' },
      { id: 'd_5', date: '', dateLabel: '১১/১১/২৬', dayLabel: 'বুধবার' },
      { id: 'd_6', date: '', dateLabel: '১২/১১/২৬', dayLabel: 'বৃহস্পতিবার' },
    ];
  });

  const [rows, setRows] = useState(() => {
    if (existingMatrix?.rows?.length) return existingMatrix.rows;
    if (sortedClasses.length > 0) {
      return sortedClasses.map((c, idx) => ({
        id: `r_${c._id || idx}`,
        classId: c._id || '',
        className: c.name,
        cells: {},
      }));
    }
    return [
      { id: 'r_1', classId: '', className: 'প্লে', cells: {} },
      { id: 'r_2', classId: '', className: 'নার্সারি', cells: {} },
      { id: 'r_3', classId: '', className: 'প্রথম', cells: {} },
      { id: 'r_4', classId: '', className: 'দ্বিতীয়', cells: {} },
      { id: 'r_5', classId: '', className: 'তৃতীয়', cells: {} },
    ];
  });

  const [footerNote, setFooterNote] = useState(
    existingMatrix?.footerNote ??
      'বিঃদ্রঃ মডেল টেস্ট পরীক্ষার ফি, নভেম্বর / ২০২৬ ইং মাসের বেতনসহ যাবতীয় পাওনা পরিশোধ করে শ্রেণি শিক্ষকের নিকট থেকে মডেল টেস্ট পরীক্ষার প্রবেশ পত্র সংগ্রহ করুন।'
  );
  const [signatureRole, setSignatureRole] = useState(existingMatrix?.signatureRole ?? 'প্রধান শিক্ষক,');
  const [signatureName, setSignatureName] = useState(existingMatrix?.signatureName ?? 'হাফেজ মাও. মোঃ আরিফুর রহমান');
  const [signatureOrg, setSignatureOrg] = useState(existingMatrix?.signatureOrg ?? madrasahName);

  // Add-class picker state
  const [showAddClassPicker, setShowAddClassPicker] = useState(false);
  const [customClassName, setCustomClassName] = useState('');

  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const availableClassesToAdd = useMemo(() => {
    const usedNames = new Set(rows.map((r) => String(r.className || '').trim().toLowerCase()));
    return sortedClasses.filter((c) => !usedNames.has(String(c.name || '').trim().toLowerCase()));
  }, [sortedClasses, rows]);

  const handleAddDateCol = () => {
    const newId = `d_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const lastDate = dates[dates.length - 1]?.date;
    let nextIso = '';
    if (lastDate) {
      const dt = new Date(`${lastDate}T00:00:00`);
      if (!Number.isNaN(dt.getTime())) {
        dt.setDate(dt.getDate() + 1);
        nextIso = dt.toISOString().slice(0, 10);
      }
    }
    setDates((prev) => [
      ...prev,
      {
        id: newId,
        date: nextIso,
        dateLabel: nextIso ? formatBnShortDate(nextIso) : 'নতুন তারিখ',
        dayLabel: nextIso ? getBnDayFromIso(nextIso) : 'বার',
      },
    ]);
  };

  const handleRemoveDateCol = (dateId) => {
    if (dates.length <= 1) return;
    setDates((prev) => prev.filter((d) => d.id !== dateId));
  };

  const handleDateChange = (dateId, isoVal) => {
    setDates((prev) =>
      prev.map((d) =>
        d.id === dateId
          ? {
              ...d,
              date: isoVal,
              dateLabel: isoVal ? formatBnShortDate(isoVal) : d.dateLabel,
              dayLabel: isoVal ? getBnDayFromIso(isoVal) : d.dayLabel,
            }
          : d
      )
    );
  };

  const handleDateFieldEdit = (dateId, field, value) => {
    setDates((prev) => prev.map((d) => (d.id === dateId ? { ...d, [field]: value } : d)));
  };

  const handleDeleteRow = (rowId) => {
    setRows((prev) => prev.filter((r) => r.id !== rowId));
  };

  const handleAddClassRow = (cls) => {
    const newId = `r_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    setRows((prev) => [
      ...prev,
      {
        id: newId,
        classId: cls._id || '',
        className: cls.name,
        cells: {},
      },
    ]);
    setShowAddClassPicker(false);
    setCustomClassName('');
  };

  const handleCellChange = (rowId, dateId, val) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === rowId ? { ...r, cells: { ...(r.cells || {}), [dateId]: val } } : r
      )
    );
  };

  const buildPayload = () => {
    const matchedExam = exams.find((ex) => ex._id === examId);
    return {
      _id: initialRoutine?._id || undefined,
      title: title.trim() || 'সম্মিলিত পরীক্ষার রুটিন',
      exam: examId || null,
      examName: matchedExam?.name || initialRoutine?.examName || '',
      classLevel: null,
      className: 'সম্মিলিত',
      stream,
      status,
      instructions: footerNote,
      schedule: {
        kind: 'matrix',
        startTime,
        dates,
        rows,
        footerNote,
        signatureRole,
        signatureName,
        signatureOrg,
      },
    };
  };

  const handleSave = async () => {
    if (!title.trim()) {
      setFeedback({ type: 'error', message: 'রুটিনের শিরোনাম আবশ্যক' });
      return;
    }
    if (rows.length === 0) {
      setFeedback({ type: 'error', message: 'অন্তত একটি শ্রেণির রো যোগ করুন' });
      return;
    }
    setSaving(true);
    setFeedback(null);
    try {
      const res = await api.post('/exams/routines', buildPayload());
      if (res.data?.success) {
        setFeedback({ type: 'success', message: 'সম্মিলিত রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!' });
        if (onSaved) onSaved(res.data.data.routine);
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: err.response?.data?.message || 'রুটিন সংরক্ষণ করতে সমস্যা হয়েছে',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      {/* Top Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={20} style={{ color: 'var(--primary)' }} />
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            {initialRoutine ? 'সম্মিলিত ম্যাট্রিক্স রুটিন সম্পাদনা' : 'নতুন সম্মিলিত ম্যাট্রিক্স রুটিন'}
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => printMatrixExamRoutine(buildPayload(), madrasahName)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Printer size={15} /> প্রিন্ট প্রিভিউ
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleSave}
            disabled={saving}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Save size={15} /> {saving ? 'সংরক্ষণ হচ্ছে...' : 'রুটিন সেভ করুন'}
          </button>
          {onClose && (
            <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}>
              <X size={16} /> বন্ধ করুন
            </button>
          )}
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
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          {feedback.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Meta Settings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>রুটিনের শিরোনাম *</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="যেমন: মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং"
          />
        </div>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>পরীক্ষা শুরুর সময়</label>
          <input
            type="text"
            className="form-input"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="পরীক্ষা শুরু : সকাল ৯ টা।"
          />
        </div>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>সংযুক্ত পরীক্ষা (ঐচ্ছিক)</label>
          <select className="form-input form-select" value={examId} onChange={(e) => setExamId(e.target.value)}>
            <option value="">সাধারণ / সকল পরীক্ষা</option>
            {exams.map((ex) => (
              <option key={ex._id} value={ex._id}>{ex.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>বিভাগ ও স্ট্যাটাস</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-input form-select" value={stream} onChange={(e) => setStream(e.target.value)}>
              <option value="all">সকল বিভাগ</option>
              <option value="noorani">নূরানী</option>
              <option value="hifz">হিফজ</option>
              <option value="kitab">কিতাব</option>
            </select>
            <select className="form-input form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="published">প্রকাশিত</option>
              <option value="draft">খসড়া</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action Strip for Rows & Columns */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', position: 'relative' }}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => setShowAddClassPicker((v) => !v)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <Plus size={15} /> শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)
          </button>

          {showAddClassPicker && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '6px',
                zIndex: 30,
                background: 'var(--bg-card, #fff)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '12px',
                boxShadow: '0 10px 25px rgba(15,23,42,0.18)',
                minWidth: '280px',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                তালিকা থেকে শ্রেণি নির্বাচন করুন:
              </div>
              {availableClassesToAdd.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                  {availableClassesToAdd.map((cls) => (
                    <button
                      key={cls._id}
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleAddClassRow(cls)}
                      style={{ fontSize: '0.8rem', padding: '4px 10px' }}
                    >
                      + {cls.name}
                    </button>
                  ))}
                </div>
              ) : (
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।
                </div>
              )}
              <div style={{ display: 'flex', gap: '6px', borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)"
                  value={customClassName}
                  onChange={(e) => setCustomClassName(e.target.value)}
                  style={{ fontSize: '0.82rem', padding: '5px 8px', height: '32px' }}
                />
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    if (customClassName.trim()) {
                      handleAddClassRow({ _id: '', name: customClassName.trim() });
                    }
                  }}
                >
                  যোগ
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={handleAddDateCol}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
        >
          <Plus size={15} /> তারিখ কলাম যোগ করুন
        </button>
      </div>

      {/* Editable Matrix Table */}
      <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflowX: 'auto', marginBottom: '16px' }}>
        <table className="table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0, minWidth: '720px' }}>
          <thead>
            <tr style={{ background: '#cbd5e1', color: '#0f172a' }}>
              <th style={{ border: '1px solid #94a3b8', textAlign: 'center', fontWeight: 800, width: '130px', verticalAlign: 'middle' }}>
                তারিখ / শ্রেণি
              </th>
              {dates.map((d) => (
                <th key={d.id} style={{ border: '1px solid #94a3b8', padding: '6px', minWidth: '145px', verticalAlign: 'top', whiteSpace: 'normal' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '4px' }}>
                      <input
                        type="date"
                        value={d.date || ''}
                        onChange={(e) => handleDateChange(d.id, e.target.value)}
                        style={{ fontSize: '0.72rem', padding: '2px 4px', borderRadius: '4px', border: '1px solid #94a3b8', width: '112px' }}
                        title="তারিখ নির্বাচন করুন (বাংলা বার অটোমেটিক আসবে)"
                      />
                      {dates.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveDateCol(d.id)}
                          title="এই তারিখ কলামটি মুছুন"
                          style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '2px', lineHeight: 1 }}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={d.dateLabel || ''}
                      onChange={(e) => handleDateFieldEdit(d.id, 'dateLabel', e.target.value)}
                      placeholder="০৭/১১/২৬"
                      style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 700, fontSize: '0.82rem', padding: '3px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#ffffff' }}
                    />
                    <input
                      type="text"
                      value={d.dayLabel || ''}
                      onChange={(e) => handleDateFieldEdit(d.id, 'dayLabel', e.target.value)}
                      placeholder="শনিবার"
                      style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 600, fontSize: '0.78rem', padding: '3px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#ffffff' }}
                    />
                  </div>
                </th>
              ))}
              <th style={{ border: '1px solid #94a3b8', width: '56px', textAlign: 'center' }}>মুছুন</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={dates.length + 2} style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                  কোনো শ্রেণির রো নেই। উপরে <strong>"+ শ্রেণি যোগ করুন"</strong> বাটনে ক্লিক করুন।
                </td>
              </tr>
            ) : (
              rows.map((row, rIdx) => (
                <tr key={row.id} style={{ background: rIdx % 2 === 1 ? '#f1f5f9' : '#ffffff' }}>
                  <td style={{ border: '1px solid #94a3b8', padding: '6px', verticalAlign: 'middle' }}>
                    <input
                      type="text"
                      value={row.className}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((r) => (r.id === row.id ? { ...r, className: e.target.value } : r))
                        )
                      }
                      style={{ width: '100%', textAlign: 'center', fontWeight: 700, fontSize: '0.86rem', padding: '5px 6px', borderRadius: '4px', border: '1px solid #cbd5e1', background: 'transparent' }}
                    />
                  </td>
                  {dates.map((d) => (
                    <td key={d.id} style={{ border: '1px solid #94a3b8', padding: '5px', verticalAlign: 'middle' }}>
                      <textarea
                        rows={2}
                        value={(row.cells && row.cells[d.id]) || ''}
                        onChange={(e) => handleCellChange(row.id, d.id, e.target.value)}
                        placeholder="-"
                        style={{
                          width: '100%',
                          textAlign: 'center',
                          fontSize: '0.83rem',
                          padding: '4px 6px',
                          borderRadius: '4px',
                          border: '1px solid #cbd5e1',
                          resize: 'vertical',
                          background: '#ffffff',
                        }}
                      />
                    </td>
                  ))}
                  <td style={{ border: '1px solid #94a3b8', textAlign: 'center', verticalAlign: 'middle' }}>
                    <button
                      type="button"
                      onClick={() => handleDeleteRow(row.id)}
                      title={`${row.className} শ্রেণির রো মুছে ফেলুন`}
                      style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '6px' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Note & Signature */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', alignItems: 'start' }}>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>বিঃদ্রঃ (নোট বক্স)</label>
          <textarea
            rows={3}
            className="form-input"
            value={footerNote}
            onChange={(e) => setFooterNote(e.target.value)}
            style={{ width: '100%', fontSize: '0.85rem' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 0 }}>স্বাক্ষর ব্লক (ডান পাশ)</label>
          <input
            type="text"
            className="form-input"
            value={signatureRole}
            onChange={(e) => setSignatureRole(e.target.value)}
            placeholder="প্রধান শিক্ষক,"
            style={{ fontSize: '0.84rem' }}
          />
          <input
            type="text"
            className="form-input"
            value={signatureName}
            onChange={(e) => setSignatureName(e.target.value)}
            placeholder="প্রধান শিক্ষকের নাম"
            style={{ fontSize: '0.84rem' }}
          />
          <input
            type="text"
            className="form-input"
            value={signatureOrg}
            onChange={(e) => setSignatureOrg(e.target.value)}
            placeholder="প্রতিষ্ঠানের নাম"
            style={{ fontSize: '0.84rem' }}
          />
        </div>
      </div>
    </div>
  );
}
