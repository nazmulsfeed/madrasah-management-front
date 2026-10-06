import React, { useState } from 'react';
import { Download, FileText, Printer, CheckSquare, Square, FileSpreadsheet, Eye } from 'lucide-react';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../common/PrintSignatureRoleSelector';
import { getMadrasahPrintStyles, getMadrasahHeaderHtml, getMadrasahFooterSignaturesHtml } from '../../utils/madrasahPrintUtils';
import { downloadMadrasahLetterheadDocx } from '../../utils/madrasahDocxGenerator';

/**
 * Official Letterhead Blank Pad Generator Component
 * Provides:
 * 1. Multi-role signature selection
 * 2. Instant printable blank PDF generation (window.open with A4 print layout)
 * 3. Genuine .docx Microsoft Word file download with identical layout
 */
export default function MadrasahBlankLetterheadModal({ isOpen, onClose }) {
  const [selectedRoles, setSelectedRoles] = useState(DEFAULT_SIGNATURE_ROLES);
  const [isGeneratingDocx, setIsGeneratingDocx] = useState(false);

  if (!isOpen) return null;

  // Print Blank PDF with exact selected roles
  const handlePrintBlankPdf = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('পপআপ উইন্ডো ব্লক করা হয়েছে! অনুগ্রহ করে ব্রাউজার থেকে পপআপ পারমিশন দিন।');
      return;
    }

    const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>আন্-নূর ইসলামিক একাডেমি - অফিশিয়াল প্যাড</title>
  ${getMadrasahPrintStyles('portrait', { wrap: true })}
  <style>
    .blank-pad-body {
      flex: 1 1 auto;
      min-height: 160mm;
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${getMadrasahHeaderHtml({
        orientation: 'portrait',
        showWatermark: true
      })}
      
      <!-- Blank Body Area -->
      <div class="blank-pad-body"></div>

      <!-- Dynamic Footer Signatures based on user selected roles -->
      ${getMadrasahFooterSignaturesHtml(selectedRoles)}
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
  };

  // Download Genuine .docx file directly from official template
  const handleDownloadDocx = async () => {
    try {
      setIsGeneratingDocx(true);
      const res = await fetch('/templates/madrasah_letterhead_blank.docx');
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'annur_letterhead_blank.docx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback to generator if fetch fails
        await downloadMadrasahLetterheadDocx(selectedRoles);
      }
    } catch (err) {
      console.error('Failed to download docx, falling back to generator:', err);
      try {
        await downloadMadrasahLetterheadDocx(selectedRoles);
      } catch (fallbackErr) {
        alert('Word ফাইল ডাউনলোডে সমস্যা হয়েছে।');
      }
    } finally {
      setIsGeneratingDocx(false);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div 
        style={{
          background: 'var(--bg-primary, #ffffff)',
          color: 'var(--text-primary, #0f172a)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '560px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid var(--border-color, #e2e8f0)',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid var(--border-color, #e2e8f0)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--bg-secondary, #f8fafc)'
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
              📜 অফিশিয়াল প্যাড / লেটারহেড ডাউনলোড
            </h3>
            <p style={{ margin: '3px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted, #64748b)' }}>
              নোটিশ, প্রত্যয়ন বা চিঠিপত্র লেখার জন্য ফাঁকা A4 প্যাড (PDF ও Word)
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="btn btn-secondary btn-icon"
            style={{ borderRadius: '50%', width: '32px', height: '32px' }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '20px 24px' }}>
          {/* 1. Dynamic Role Selector */}
          <div style={{ marginBottom: '18px' }}>
            <PrintSignatureRoleSelector
              selectedRoles={selectedRoles}
              onChange={(roles) => setSelectedRoles(roles)}
              maxRoles={6}
            />
          </div>

          {/* Info Banner */}
          <div 
            style={{
              padding: '12px 14px',
              borderRadius: '8px',
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              color: '#166534',
              fontSize: '0.82rem',
              lineHeight: 1.5,
              marginBottom: '20px'
            }}
          >
            ✅ <strong>অফিশিয়াল প্যাড:</strong> নিচের <strong>PDF</strong> বাটনে ক্লিক করলে নির্বাচিত স্বাক্ষর রোল অনুযায়ী প্রিন্ট/PDF ওপেন হবে, এবং <strong>Word (.docx)</strong> বাটনে ক্লিক করলে মূল অফিশিয়াল প্যাডের ফাইলটি সরাসরি ডাউনলোড হবে।
          </div>

          {/* 2. Download Action Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {/* PDF Button */}
            <button
              type="button"
              onClick={handlePrintBlankPdf}
              className="btn btn-primary"
              style={{
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '0.92rem',
                background: '#dc2626',
                borderColor: '#dc2626'
              }}
            >
              <FileText size={18} />
              <span>প্রিন্ট / PDF ডাউনলোড</span>
            </button>

            {/* Word Button */}
            <button
              type="button"
              onClick={handleDownloadDocx}
              disabled={isGeneratingDocx}
              className="btn btn-primary"
              style={{
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '0.92rem',
                background: '#2563eb',
                borderColor: '#2563eb'
              }}
            >
              <Download size={18} />
              <span>{isGeneratingDocx ? 'তৈরি হচ্ছে...' : 'Word (.docx) ডাউনলোড'}</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div 
          style={{
            padding: '12px 24px',
            borderTop: '1px solid var(--border-color, #e2e8f0)',
            display: 'flex',
            justifyContent: 'flex-end',
            background: 'var(--bg-secondary, #f8fafc)'
          }}
        >
          <button 
            type="button" 
            onClick={onClose}
            className="btn btn-secondary"
            style={{ fontWeight: 600 }}
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
