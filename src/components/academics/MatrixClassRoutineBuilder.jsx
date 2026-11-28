import { useState, useMemo, useEffect } from 'react';
import { Plus, Trash2, Printer, Save, X, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import api from '../../api/axios';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function printMatrixClassRoutine(matrix, defaultOrgName = 'আন্-নুর ইসলামিক একাডেমি') {
  if (!matrix || !Array.isArray(matrix.columns) || !Array.isArray(matrix.rows)) return;

  const title = matrix.title || 'সম্মিলিত ক্লাস রুটিন';
  const startTime = matrix.startTime || 'ক্লাস শুরু : সকাল ৮:৩০ টা।';
  const footerNote = matrix.footerNote || '';
  const sigRole = matrix.signatureRole || 'প্রধান শিক্ষক,';
  const sigName = matrix.signatureName || '';
  const sigOrg = matrix.signatureOrg || defaultOrgName;

  const headerCols = matrix.columns
    .map((col) => {
      const top = col.label || 'পিরিয়ড';
      const sub = col.subLabel || '';
      return `<th><div>${escapeHtml(top)}</div>${sub ? `<div style="font-weight:600;margin-top:2px;">${escapeHtml(sub)}</div>` : ''}</th>`;
    })
    .join('');

  const bodyRows = matrix.rows
    .map((row, idx) => {
      const cells = matrix.columns
        .map((col) => {
          const val = (row.cells && row.cells[col.id] ? String(row.cells[col.id]).trim() : '') || '-';
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
      font-size: 13.5px;
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
          <th style="width:95px;">শ্রেণি / সময়</th>
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

export function MatrixClassRoutinePreviewTable({ matrix }) {
  if (!matrix || !Array.isArray(matrix.columns) || !Array.isArray(matrix.rows)) return null;

  return (
    <div>
      {matrix.startTime && (
        <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
          {matrix.startTime}
        </div>
      )}
      <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0, fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#cbd5e1', color: '#0f172a' }}>
              <th style={{ border: '1px solid #94a3b8', padding: '10px 8px', textAlign: 'center', fontWeight: 800, minWidth: '95px' }}>
                শ্রেণি / সময়
              </th>
              {matrix.columns.map((col) => (
                <th key={col.id} style={{ border: '1px solid #94a3b8', padding: '8px', textAlign: 'center', fontWeight: 700, minWidth: '115px' }}>
                  <div>{col.label}</div>
                  {col.subLabel && (
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, marginTop: '2px' }}>{col.subLabel}</div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row, idx) => (
              <tr key={row.id || idx} style={{ background: idx % 2 === 1 ? '#e2e8f0' : '#ffffff' }}>
                <td style={{ border: '1px solid #94a3b8', padding: '8px', textAlign: 'center', fontWeight: 700, color: '#0f172a' }}>
                  {row.className}
                </td>
                {matrix.columns.map((col) => {
                  const val = (row.cells && row.cells[col.id] ? String(row.cells[col.id]).trim() : '') || '-';
                  return (
                    <td key={col.id} style={{ border: '1px solid #94a3b8', padding: '8px', textAlign: 'center', color: '#0f172a', whiteSpace: 'pre-line' }}>
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

export default function MatrixClassRoutineBuilder({
  initialMatrix = null,
  classes = [],
  subjects = [],
  madrasahName = 'আন্-নুর ইসলামিক একাডেমি',
  onSave,
  onClose,
}) {
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  useEffect(() => {
    if (subjects.length > 0) return;
    api.get('/students/subjects').then((res) => {
      if (res.data?.success) setFetchedSubjects(res.data.data?.subjects || []);
    }).catch(() => {});
  }, [subjects.length]);

  const subjectNames = useMemo(() => {
    const src = subjects.length > 0 ? subjects : fetchedSubjects;
    const names = src
      .map((s) => (typeof s === 'string' ? s : s?.name))
      .map((n) => String(n || '').trim())
      .filter((n) => n && n !== '-');
    return [...new Set(names)];
  }, [subjects, fetchedSubjects]);

  const sortedClasses = useMemo(() => {
    return [...classes].sort((a, b) => (Number(a.order) || 999) - (Number(b.order) || 999));
  }, [classes]);

  const [title, setTitle] = useState(initialMatrix?.title || 'সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং');
  const [startTime, setStartTime] = useState(initialMatrix?.startTime || 'ক্লাস শুরু : সকাল ৮:৩০ টা।');

  const [columns, setColumns] = useState(() => {
    if (initialMatrix?.columns?.length) return initialMatrix.columns;
    return [
      { id: 'c_1', label: '১ম ঘণ্টা', subLabel: '৮:৩০ - ৯:১০' },
      { id: 'c_2', label: '২য় ঘণ্টা', subLabel: '৯:১০ - ৯:৫০' },
      { id: 'c_3', label: '৩য় ঘণ্টা', subLabel: '৯:৫০ - ১০:৩০' },
      { id: 'c_4', label: 'বিরতি', subLabel: '১০:৩০ - ১০:৫০' },
      { id: 'c_5', label: '৪র্থ ঘণ্টা', subLabel: '১০:৫০ - ১১:৩০' },
      { id: 'c_6', label: '৫ম ঘণ্টা', subLabel: '১১:৩০ - ১২:১০' },
    ];
  });

  const [rows, setRows] = useState(() => {
    if (initialMatrix?.rows?.length) return initialMatrix.rows;
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
    initialMatrix?.footerNote ??
      'বিঃদ্রঃ সকল শিক্ষার্থীকে নির্ধারিত সময়ের ১০ মিনিট পূর্বে শ্রেণিকক্ষে উপস্থিত থাকতে হবে এবং রুটিন অনুযায়ী বই ও খাতা সাথে আনতে হবে।'
  );
  const [signatureRole, setSignatureRole] = useState(initialMatrix?.signatureRole ?? 'প্রধান শিক্ষক,');
  const [signatureName, setSignatureName] = useState(initialMatrix?.signatureName ?? 'হাফেজ মাও. মোঃ আরিফুর রহমান');
  const [signatureOrg, setSignatureOrg] = useState(initialMatrix?.signatureOrg ?? madrasahName);

  const [showAddClassPicker, setShowAddClassPicker] = useState(false);
  const [customClassName, setCustomClassName] = useState('');
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const availableClassesToAdd = useMemo(() => {
    const usedNames = new Set(rows.map((r) => String(r.className || '').trim().toLowerCase()));
    return sortedClasses.filter((c) => !usedNames.has(String(c.name || '').trim().toLowerCase()));
  }, [sortedClasses, rows]);

  const handleAddColumn = () => {
    const newId = `c_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    setColumns((prev) => [
      ...prev,
      { id: newId, label: `${prev.length + 1}ম ঘণ্টা`, subLabel: 'সময় লিখুন' },
    ]);
  };

  const handleRemoveColumn = (colId) => {
    if (columns.length <= 1) return;
    setColumns((prev) => prev.filter((c) => c.id !== colId));
  };

  const handleColumnEdit = (colId, field, val) => {
    setColumns((prev) => prev.map((c) => (c.id === colId ? { ...c, [field]: val } : c)));
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

  const handleCellChange = (rowId, colId, val) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === rowId ? { ...r, cells: { ...(r.cells || {}), [colId]: val } } : r
      )
    );
  };

  const buildPayload = () => ({
    id: initialMatrix?.id || `cm_${Date.now()}`,
    title: title.trim() || 'সম্মিলিত ক্লাস রুটিন',
    startTime,
    columns,
    rows,
    footerNote,
    signatureRole,
    signatureName,
    signatureOrg,
    updatedAt: new Date().toISOString(),
  });

  const handleSaveClick = async () => {
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
      await onSave(buildPayload());
      setFeedback({ type: 'success', message: 'সম্মিলিত ক্লাস রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!' });
    } catch (err) {
      setFeedback({ type: 'error', message: err?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="card" style={{ padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      {/* Top Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={20} style={{ color: 'var(--primary)' }} />
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
            {initialMatrix ? 'সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন সম্পাদনা' : 'নতুন সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন'}
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => printMatrixClassRoutine(buildPayload(), madrasahName)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Printer size={15} /> প্রিন্ট প্রিভিউ
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleSaveClick}
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

      {/* Meta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>রুটিনের শিরোনাম *</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="যেমন: সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং"
          />
        </div>
        <div>
          <label className="form-label" style={{ fontSize: '0.82rem', fontWeight: 600 }}>ক্লাস শুরুর সময়</label>
          <input
            type="text"
            className="form-input"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="ক্লাস শুরু : সকাল ৮:৩০ টা।"
          />
        </div>
      </div>

      {/* Add Class Row & Add Column */}
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
          onClick={handleAddColumn}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
        >
          <Plus size={15} /> পিরিয়ড/সময় কলাম যোগ করুন
        </button>
      </div>

      {/* Editable Matrix Table */}
      <div className="table-responsive" style={{ border: '1px solid #94a3b8', borderRadius: '8px', overflowX: 'auto', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: 0, minWidth: '720px' }}>
          <thead>
            <tr style={{ background: '#cbd5e1', color: '#0f172a' }}>
              <th style={{ border: '1px solid #94a3b8', padding: '8px', textAlign: 'center', fontWeight: 800, width: '130px', verticalAlign: 'middle', whiteSpace: 'normal' }}>
                শ্রেণি / সময়
              </th>
              {columns.map((col) => (
                <th key={col.id} style={{ border: '1px solid #94a3b8', padding: '6px', minWidth: '140px', verticalAlign: 'top', whiteSpace: 'normal' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {columns.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveColumn(col.id)}
                          title="এই কলামটি মুছুন"
                          style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '2px', lineHeight: 1 }}
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={col.label || ''}
                      onChange={(e) => handleColumnEdit(col.id, 'label', e.target.value)}
                      placeholder="১ম ঘণ্টা"
                      style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 700, fontSize: '0.82rem', padding: '3px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#ffffff' }}
                    />
                    <input
                      type="text"
                      value={col.subLabel || ''}
                      onChange={(e) => handleColumnEdit(col.id, 'subLabel', e.target.value)}
                      placeholder="৮:৩০ - ৯:১০"
                      style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 600, fontSize: '0.78rem', padding: '3px 4px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#ffffff' }}
                    />
                  </div>
                </th>
              ))}
              <th style={{ border: '1px solid #94a3b8', width: '56px', textAlign: 'center', padding: '8px' }}>মুছুন</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 2} style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
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
                  {columns.map((col) => (
                    <td key={col.id} style={{ border: '1px solid #94a3b8', padding: '5px', verticalAlign: 'middle' }}>
                      <select
                        value=""
                        onChange={(e) => {
                          const picked = e.target.value;
                          if (!picked) return;
                          if (picked === '__CLEAR__') {
                            handleCellChange(row.id, col.id, '');
                            return;
                          }
                          const curr = String((row.cells && row.cells[col.id]) || '').trim();
                          const next = !curr || curr === '-' ? picked : `${curr} + ${picked}`;
                          handleCellChange(row.id, col.id, next);
                        }}
                        style={{
                          width: '100%',
                          fontSize: '0.78rem',
                          padding: '3px 4px',
                          borderRadius: '4px',
                          border: '1px solid #94a3b8',
                          marginBottom: '4px',
                          background: '#f8fafc',
                          color: '#0f172a',
                        }}
                      >
                        <option value="">+ বিষয় বাছুন...</option>
                        <option value="__CLEAR__">— খালি করুন (-)</option>
                        {subjectNames.map((subName) => (
                          <option key={subName} value={subName}>{subName}</option>
                        ))}
                      </select>
                      <textarea
                        rows={2}
                        value={(row.cells && row.cells[col.id]) || ''}
                        onChange={(e) => handleCellChange(row.id, col.id, e.target.value)}
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
