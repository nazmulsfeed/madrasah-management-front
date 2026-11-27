import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, RemoveFormatting, Printer, Save, Plus, Trash2, Edit,
  Calendar, FileText, CheckCircle2, Type
} from 'lucide-react';
import api from '../../api/axios';
import { toBnNumber, parseBnToEnNumber } from '../../utils/helpers';
import MadrasahLetterhead from '../common/MadrasahLetterhead';
import PrintFooterSignatures from '../common/PrintFooterSignatures';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../common/PrintSignatureRoleSelector';
import {
  getMadrasahPrintStyles,
  getMadrasahHeaderHtml,
  getMadrasahFooterSignaturesHtml
} from '../../utils/madrasahPrintUtils';

function getCurrentLocalDateTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 16);
}

function formatBnDateOnly(dtStr) {
  if (!dtStr) return '';
  const d = new Date(dtStr);
  if (isNaN(d.getTime())) return dtStr;
  return d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatBnDateTime(dtStr) {
  if (!dtStr) return '';
  const d = new Date(dtStr);
  if (isNaN(d.getTime())) return dtStr;
  const datePart = d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
  const timePart = d.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit', hour12: true });
  return `${datePart} • ${timePart}`;
}

function parseNoticeMeta(item) {
  let aud = item?.audience;
  if (typeof aud === 'string') {
    try { aud = JSON.parse(aud); } catch { aud = null; }
  }
  if (aud && typeof aud === 'object' && !Array.isArray(aud) && aud.meta) {
    return aud.meta;
  }
  const raw = item?.attachments;
  if (!raw) return {};
  if (typeof raw === 'string') {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  return typeof raw === 'object' ? raw : {};
}

function generateNextMemoNo(existingList = []) {
  const yearEn = new Date().getFullYear();
  const yearBn = toBnNumber(yearEn);
  let maxSerial = 0;

  for (const item of existingList) {
    const att = parseNoticeMeta(item);
    const memo = att.memoNo || '';
    const match = memo.match(/([০-৯0-9]+)\s*$/);
    if (match) {
      const num = parseInt(parseBnToEnNumber(match[1]), 10);
      if (!isNaN(num) && num > maxSerial) maxSerial = num;
    }
  }

  const nextNum = Math.max(maxSerial, existingList.length) + 1;
  const padded = String(nextNum).padStart(2, '0');
  return `আন্-নূর/নোটিশ/${yearBn}/${toBnNumber(padded)}`;
}

export default function PhysicalNoticePad({ physicalNotices = [], onRefresh }) {
  const editorRef = useRef(null);

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [memoNo, setMemoNo] = useState(() => generateNextMemoNo(physicalNotices));
  const [noticeDateTime, setNoticeDateTime] = useState(getCurrentLocalDateTime);
  const [htmlContent, setHtmlContent] = useState('<p>এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে যে,</p><p><br></p>');
  const [fontSizePx, setFontSizePx] = useState(16);
  const [showTimeOnPad, setShowTimeOnPad] = useState(false);
  const [showSignatures, setShowSignatures] = useState(false);
  const [signatureRoles, setSignatureRoles] = useState(DEFAULT_SIGNATURE_ROLES);
  const [orientation, setOrientation] = useState('portrait');
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Auto-update memoNo for new notices when physicalNotices loads
  useEffect(() => {
    if (!editingId) {
      setMemoNo(generateNextMemoNo(physicalNotices));
    }
  }, [physicalNotices, editingId]);

  // Sync editor DOM when switching notices
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== htmlContent) {
      editorRef.current.innerHTML = htmlContent;
    }
  }, [editingId]);

  const execCmd = (cmd, value = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
    if (editorRef.current) {
      setHtmlContent(editorRef.current.innerHTML);
    }
  };

  const handleResetNew = () => {
    setEditingId(null);
    setTitle('');
    setMemoNo(generateNextMemoNo(physicalNotices));
    setNoticeDateTime(getCurrentLocalDateTime());
    const initialHtml = '<p>এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে যে,</p><p><br></p>';
    setHtmlContent(initialHtml);
    if (editorRef.current) editorRef.current.innerHTML = initialHtml;
    setFontSizePx(16);
    setShowTimeOnPad(false);
    setShowSignatures(false);
    setStatusMsg('');
  };

  const handleLoadNotice = (item, fallbackIdx = 0) => {
    setEditingId(item._id);
    const att = parseNoticeMeta(item);
    setTitle(att.hasCustomTitle === false ? '' : (item.title || ''));
    const fallbackMemo = `আন্-নূর/নোটিশ/${toBnNumber(new Date().getFullYear())}/${toBnNumber(String(fallbackIdx + 1).padStart(2, '0'))}`;
    setMemoNo(att.memoNo || fallbackMemo);
    setNoticeDateTime(att.noticeDateTime || getCurrentLocalDateTime());
    const content = item.content || '<p></p>';
    setHtmlContent(content);
    if (editorRef.current) editorRef.current.innerHTML = content;
    setFontSizePx(Number(att.fontSizePx) || 16);
    setShowTimeOnPad(Boolean(att.showTimeOnPad));
    setShowSignatures(Boolean(att.showSignatures));
    if (Array.isArray(att.signatureRoles) && att.signatureRoles.length > 0) {
      setSignatureRoles(att.signatureRoles);
    }
    setStatusMsg('');
  };

  const handleSave = async () => {
    const currentHtml = editorRef.current ? editorRef.current.innerHTML : htmlContent;
    const plainText = currentHtml.replace(/<[^>]*>/g, '').trim();
    if (!plainText) {
      alert('নোটিশের মূল লেখা অবশ্যই দিতে হবে।');
      return;
    }

    setSaving(true);
    setStatusMsg('');
    try {
      const hasCustomTitle = Boolean(title.trim());
      const metaObj = {
        type: 'physical_board',
        hasCustomTitle,
        memoNo: memoNo.trim(),
        noticeDateTime,
        fontSizePx,
        showTimeOnPad,
        showSignatures,
        signatureRoles
      };
      const payload = {
        title: title.trim() || memoNo.trim() || 'অফিসিয়াল নোটিশ',
        content: currentHtml,
        audience: { roles: ['physical_board'], meta: metaObj },
        priority: 'normal',
        isPublished: true,
        publishedAt: noticeDateTime ? new Date(noticeDateTime).toISOString() : new Date().toISOString(),
        attachments: metaObj
      };

      const res = editingId
        ? await api.put(`/notices/${editingId}`, payload)
        : await api.post('/notices', payload);

      if (res.data?.success) {
        const savedNotice = res.data.data?.notice;
        if (!editingId && savedNotice?._id) {
          setEditingId(savedNotice._id);
        }
        setStatusMsg(editingId ? 'ফিজিক্যাল নোটিশ আপডেট হয়েছে!' : 'ফিজিক্যাল নোটিশ সফলভাবে সংরক্ষিত হয়েছে!');
        onRefresh?.();
      }
    } catch (err) {
      console.error('Save physical notice error:', err);
      alert(err.response?.data?.message || 'নোটিশ সংরক্ষণ করতে ব্যর্থ হয়েছে');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm('আপনি কি নিশ্চিতভাবে এই ফিজিক্যাল নোটিশটি মুছে ফেলতে চান?')) return;
    try {
      await api.delete(`/notices/${id}`);
      if (editingId === id) {
        handleResetNew();
      }
      onRefresh?.();
    } catch (err) {
      console.error('Delete physical notice error:', err);
      alert('মুছে ফেলতে সমস্যা হয়েছে');
    }
  };

  const handlePrintMadrasahPad = (overrideItem = null, fallbackIdx = 0) => {
    const pAtt = overrideItem
      ? parseNoticeMeta(overrideItem)
      : { hasCustomTitle: Boolean(title.trim()), memoNo, noticeDateTime, fontSizePx, showTimeOnPad, showSignatures, signatureRoles };
    const pTitle = overrideItem ? (pAtt.hasCustomTitle === false ? '' : (overrideItem.title || '')) : title.trim();
    const pContent = overrideItem ? overrideItem.content : (editorRef.current ? editorRef.current.innerHTML : htmlContent);
    const fallbackMemo = `আন্-নূর/নোটিশ/${toBnNumber(new Date().getFullYear())}/${toBnNumber(String(fallbackIdx + 1).padStart(2, '0'))}`;
    const pMemo = pAtt.memoNo || (overrideItem ? fallbackMemo : memoNo);
    const pFontSize = Number(pAtt.fontSizePx) || fontSizePx || 16;
    const pShowTime = Boolean(pAtt.showTimeOnPad);
    const pDateLabel = pShowTime ? 'তারিখ ও সময়' : 'তারিখ';
    const pDateStr = pShowTime
      ? formatBnDateTime(pAtt.noticeDateTime || noticeDateTime)
      : formatBnDateOnly(pAtt.noticeDateTime || noticeDateTime);
    const pShowSig = Boolean(pAtt.showSignatures);
    const pRoles = Array.isArray(pAtt.signatureRoles) && pAtt.signatureRoles.length > 0 ? pAtt.signatureRoles : signatureRoles;

    const printWin = window.open('', '_blank', 'width=960,height=780');
    if (!printWin) {
      alert('পপ-আপ ব্লক করা হয়েছে! অনুগ্রহ করে ব্রাউজারের পপ-আপ অনুমতি দিন।');
      return;
    }

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${pTitle || 'অফিসিয়াল নোটিশ'}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Noto+Serif+Bengali:wght@600;700;800&display=swap" rel="stylesheet" />
  ${getMadrasahPrintStyles(orientation)}
  <style>
    .physical-notice-meta-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
      margin: 10px 0 18px 0;
      padding-bottom: 6px;
      border-bottom: 1px dashed #cbd5e1;
    }
    .physical-notice-title-box {
      text-align: center;
      margin: 6px 0 18px 0;
    }
    .physical-notice-title-pill {
      display: inline-block;
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
      border-bottom: 2px solid #0f172a;
      padding: 2px 16px 4px 16px;
    }
    .physical-notice-body {
      font-family: 'Noto Sans Bengali', sans-serif;
      font-size: ${pFontSize}px;
      line-height: 1.8;
      color: #0f172a;
      flex: 1;
      padding: 4px 4px 20px 4px;
    }
    .physical-notice-body p { margin: 0 0 8px 0; }
    .physical-notice-body ul, .physical-notice-body ol { margin: 6px 0 10px 24px; padding: 0; }
    .physical-notice-body li { margin-bottom: 4px; }
    .physical-notice-body font[size="2"] { font-size: 13px; }
    .physical-notice-body font[size="3"] { font-size: 15px; }
    .physical-notice-body font[size="4"] { font-size: 18px; }
    .physical-notice-body font[size="5"] { font-size: 22px; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <img src="${window.location.origin}/images/madrasah_logo.png" onerror="this.style.display='none'" alt="" style="position:fixed;top:54%;left:50%;transform:translate(-50%,-50%);width:260px;opacity:0.06;pointer-events:none;z-index:0;" />
    <div class="print-content-layer">
      <div>
        ${getMadrasahHeaderHtml({
          documentTitle: 'অফিসিয়াল নোটিশ',
          orientation
        })}
        <div class="physical-notice-meta-bar">
          <span>স্মারক নং: <strong>${pMemo || '—'}</strong></span>
          <span>${pDateLabel}: <strong>${pDateStr || '—'}</strong></span>
        </div>
        ${pTitle ? `
          <div class="physical-notice-title-box">
            <span class="physical-notice-title-pill">${pTitle}</span>
          </div>
        ` : ''}
        <div class="physical-notice-body">
          ${pContent || ''}
        </div>
      </div>
      ${pShowSig ? getMadrasahFooterSignaturesHtml(pRoles) : '<div style="height: 12px;"></div>'}
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 350);
    };
  </script>
</body>
</html>`;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  const formattedPadDate = useMemo(
    () => (showTimeOnPad ? formatBnDateTime(noticeDateTime) : formatBnDateOnly(noticeDateTime)),
    [noticeDateTime, showTimeOnPad]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top 2-Column Workspace: Editor (Left) + Live Madrasah Pad Preview (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px', alignItems: 'start' }}>
        {/* LEFT: WordPad Editor & Controls */}
        <div className="card" style={{ padding: '20px' }}>
          <div className="flex-between mb-16" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} style={{ color: 'var(--primary)' }} />
                <span>{editingId ? 'ফিজিক্যাল নোটিশ এডিট' : 'নতুন ফিজিক্যাল নোটিশ লিখুন'}</span>
              </h2>
              <p className="text-muted text-xs" style={{ margin: '2px 0 0 0' }}>
                নোটিশ বোর্ডে টানানোর জন্য WordPad-এ লিখে সরাসরি মাদরাসা প্যাডে প্রিন্ট করুন
              </p>
            </div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleResetNew}>
              <Plus size={14} /> নতুন
            </button>
          </div>

          {statusMsg && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.12)', color: '#047857', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>
              <CheckCircle2 size={16} />
              <span>{statusMsg}</span>
            </div>
          )}

          {/* Memo No + Date & Time */}
          <div className="grid grid-2 mb-12" style={{ gap: '12px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700 }}>স্মারক নং (অটো জেনারেটেড)</label>
              <input
                type="text"
                className="form-input"
                value={memoNo}
                readOnly
                style={{ background: 'var(--bg-tertiary, #f1f5f9)', cursor: 'not-allowed', fontWeight: 700 }}
                title="স্মারক নং স্বয়ংক্রিয়ভাবে নির্ধারিত হয় (এডিটযোগ্য নয়)"
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700 }}>তারিখ ও সময়</label>
              <input
                type="datetime-local"
                className="form-input"
                value={noticeDateTime}
                onChange={(e) => setNoticeDateTime(e.target.value)}
              />
            </div>
          </div>

          {/* Title (Optional) */}
          <div className="form-group mb-12">
            <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700 }}>নোটিশের শিরোনাম (ঐচ্ছিক)</label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="যেমন: জরুরি বিজ্ঞপ্তি / পবিত্র রমজান মাসের ছুটি সংক্রান্ত"
            />
          </div>

          {/* WordPad Toolbar */}
          <div style={{ marginBottom: '6px' }}>
            <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px', display: 'block' }}>
              নোটিশের মূল বিবরণ (WordPad) *
            </label>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 8px',
                border: '1px solid var(--border-color)',
                borderBottom: 'none',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                background: 'var(--bg-tertiary, #f8fafc)'
              }}
            >
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('bold')} title="Bold (Ctrl+B)" style={{ padding: '4px 7px' }}><Bold size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('italic')} title="Italic (Ctrl+I)" style={{ padding: '4px 7px' }}><Italic size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('underline')} title="Underline (Ctrl+U)" style={{ padding: '4px 7px' }}><Underline size={15} /></button>

              <span style={{ width: '1px', height: '18px', background: 'var(--border-color)', margin: '0 4px' }} />

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Type size={14} className="text-muted" />
                <select
                  className="form-input form-select"
                  defaultValue="3"
                  onChange={(e) => execCmd('fontSize', e.target.value)}
                  style={{ fontSize: '0.78rem', padding: '3px 24px 3px 8px', height: '28px', width: 'auto' }}
                  title="ফন্ট সাইজ"
                >
                  <option value="2">ছোট</option>
                  <option value="3">স্বাভাবিক</option>
                  <option value="4">বড়</option>
                  <option value="5">অতিরিক্ত বড়</option>
                </select>
              </div>

              <span style={{ width: '1px', height: '18px', background: 'var(--border-color)', margin: '0 4px' }} />

              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('justifyLeft')} title="বামে" style={{ padding: '4px 7px' }}><AlignLeft size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('justifyCenter')} title="মাঝে" style={{ padding: '4px 7px' }}><AlignCenter size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('justifyRight')} title="ডানে" style={{ padding: '4px 7px' }}><AlignRight size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('justifyFull')} title="সমান (Justify)" style={{ padding: '4px 7px' }}><AlignJustify size={15} /></button>

              <span style={{ width: '1px', height: '18px', background: 'var(--border-color)', margin: '0 4px' }} />

              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('insertUnorderedList')} title="বুলেট তালিকা" style={{ padding: '4px 7px' }}><List size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('insertOrderedList')} title="নাম্বার তালিকা" style={{ padding: '4px 7px' }}><ListOrdered size={15} /></button>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => execCmd('removeFormat')} title="ফরম্যাট পরিষ্কার করুন" style={{ padding: '4px 7px' }}><RemoveFormatting size={15} /></button>
            </div>

            {/* Editable Rich Text Area */}
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => setHtmlContent(e.currentTarget.innerHTML)}
              style={{
                minHeight: '220px',
                maxHeight: '360px',
                overflowY: 'auto',
                padding: '12px 14px',
                border: '1px solid var(--border-color)',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                background: 'var(--bg-card, #ffffff)',
                fontFamily: "'Noto Sans Bengali', sans-serif",
                fontSize: '0.95rem',
                lineHeight: 1.75,
                outline: 'none'
              }}
            />
          </div>

          {/* Optional Time, Signature Toggle & Orientation */}
          <div style={{ marginTop: '14px', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary, #f8fafc)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={showTimeOnPad}
                    onChange={(e) => setShowTimeOnPad(e.target.checked)}
                    style={{ accentColor: '#059669' }}
                  />
                  <span>প্যাডে সময়ও দেখান</span>
                </label>

                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={showSignatures}
                    onChange={(e) => setShowSignatures(e.target.checked)}
                    style={{ accentColor: '#059669' }}
                  />
                  <span>প্রিন্টে স্বাক্ষর লাইন যুক্ত করুন</span>
                </label>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '1px 6px' }}>
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600 }}>প্যাড ফন্ট:</span>
                <button
                  type="button"
                  onClick={() => setFontSizePx(s => Math.max(12, s - 1))}
                  style={{ border: 'none', background: 'transparent', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', padding: '2px 5px' }}
                  title="প্যাড ফন্ট ছোট করুন"
                >
                  A-
                </button>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, minWidth: '32px', textAlign: 'center' }}>{toBnNumber(fontSizePx)}px</span>
                <button
                  type="button"
                  onClick={() => setFontSizePx(s => Math.min(60, s + 1))}
                  style={{ border: 'none', background: 'transparent', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', padding: '2px 5px' }}
                  title="প্যাড ফন্ট বড় করুন"
                >
                  A+
                </button>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}>
                <span className="text-muted">পেজ:</span>
                <select
                  className="form-input form-select"
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  style={{ fontSize: '0.78rem', padding: '3px 24px 3px 8px', height: '28px', width: 'auto' }}
                >
                  <option value="portrait">A4 Portrait</option>
                  <option value="landscape">A4 Landscape</option>
                </select>
              </div>
            </div>

            {showSignatures && (
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                <PrintSignatureRoleSelector
                  selectedRoles={signatureRoles}
                  onChange={setSignatureRoles}
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={handleSave} disabled={saving}>
              <Save size={16} />
              <span>{saving ? 'সংরক্ষণ হচ্ছে...' : (editingId ? 'আপডেট করুন' : 'সংরক্ষণ করুন')}</span>
            </button>
            <button type="button" className="btn btn-primary" onClick={() => handlePrintMadrasahPad(null)}>
              <Printer size={16} />
              <span>মাদরাসা প্যাডে প্রিন্ট করুন</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Live Madrasah Pad Preview */}
        <div className="card" style={{ padding: '16px', background: '#f1f5f9' }}>
          <div className="flex-between mb-10">
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
              লাইভ মাদরাসা প্যাড প্রিভিউ ({orientation === 'landscape' ? 'A4 Landscape' : 'A4 Portrait'})
            </span>
          </div>

          <div
            style={{
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '22px 24px',
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
            }}
          >
            {/* Subtle Watermark */}
            <img
              src="/images/madrasah_logo.png"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              alt=""
              style={{
                position: 'absolute',
                top: '54%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '220px',
                opacity: 0.06,
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <MadrasahLetterhead documentTitle="অফিসিয়াল নোটিশ" compact />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#334155',
                  margin: '8px 0 14px 0',
                  paddingBottom: '6px',
                  borderBottom: '1px dashed #cbd5e1'
                }}
              >
                <span>স্মারক নং: <strong>{memoNo || '—'}</strong></span>
                <span>{showTimeOnPad ? 'তারিখ ও সময়' : 'তারিখ'}: <strong>{formattedPadDate || '—'}</strong></span>
              </div>

              {title && (
                <div style={{ textAlign: 'center', margin: '4px 0 14px 0' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, borderBottom: '2px solid #0f172a', padding: '2px 12px' }}>
                    {title}
                  </span>
                </div>
              )}

              <div
                style={{
                  fontFamily: "'Noto Sans Bengali', sans-serif",
                  fontSize: `${fontSizePx}px`,
                  lineHeight: 1.75,
                  color: '#0f172a'
                }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {showSignatures && (
              <div style={{ position: 'relative', zIndex: 1, marginTop: '28px' }}>
                <PrintFooterSignatures roles={signatureRoles} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Saved Physical Notices History List */}
      <div className="card" style={{ padding: '18px 20px' }}>
        <div className="flex-between mb-14">
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={17} style={{ color: 'var(--primary)' }} />
            <span>সংরক্ষিত ফিজিক্যাল নোটিশসমূহ ({toBnNumber(physicalNotices.length)}টি)</span>
          </h3>
        </div>

        {physicalNotices.length === 0 ? (
          <div className="text-muted text-sm" style={{ padding: '20px 0', textAlign: 'center' }}>
            এখনো কোনো ফিজিক্যাল নোটিশ সংরক্ষণ করা হয়নি। উপরের WordPad থেকে লিখে সংরক্ষণ করুন।
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {physicalNotices.map((item, idx) => {
              const att = parseNoticeMeta(item);
              const displayMemo = att.memoNo || `আন্-নূর/নোটিশ/${toBnNumber(new Date(item.createdAt || Date.now()).getFullYear())}/${toBnNumber(String(physicalNotices.length - idx).padStart(2, '0'))}`;
              const isSelected = editingId === item._id;
              return (
                <div
                  key={item._id}
                  onClick={() => handleLoadNotice(item, physicalNotices.length - idx - 1)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: isSelected ? 'rgba(5, 150, 105, 0.06)' : 'var(--bg-tertiary, #f8fafc)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div className="flex-between" style={{ gap: '8px' }}>
                    <span className="badge badge-active" style={{ fontSize: '0.72rem' }}>
                      {displayMemo}
                    </span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        type="button"
                        className="btn btn-ghost btn-icon btn-sm"
                        title="সরাসরি প্রিন্ট"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrintMadrasahPad(item, physicalNotices.length - idx - 1);
                        }}
                      >
                        <Printer size={14} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-icon btn-sm text-primary"
                        title="এডিট"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLoadNotice(item, physicalNotices.length - idx - 1);
                        }}
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-icon btn-sm text-danger"
                        title="মুছুন"
                        onClick={(e) => handleDelete(item._id, e)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</div>
                  <div className="text-xs text-muted">
                    {formatBnDateTime(att.noticeDateTime || item.publishedAt || item.createdAt)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
