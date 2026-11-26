import React from 'react';

export const DEFAULT_BACKSIDE_CONFIG = {
  title: 'পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য',
  rules: [
    'নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।',
    'প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।',
    'প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।',
    'উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।',
    'পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।'
  ],
  noteLabel: 'বি: দ্র:',
  noteText: 'উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।',
  footerLeftBadge: '',
  authorityLine1: 'আদেশক্রমে',
  authorityLine2: 'মাদরাসা কর্তৃপক্ষ'
};

/**
 * Islamic Corner Arabesque Ornament SVG
 */
function CornerOrnament({ position }) {
  const transforms = {
    'top-left': 'rotate(0)',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)'
  };
  const posStyles = {
    'top-left': { top: '2px', left: '2px' },
    'top-right': { top: '2px', right: '2px' },
    'bottom-left': { bottom: '2px', left: '2px' },
    'bottom-right': { bottom: '2px', right: '2px' }
  };

  return (
    <svg
      viewBox="0 0 64 64"
      style={{
        position: 'absolute',
        width: '36px',
        height: '36px',
        pointerEvents: 'none',
        zIndex: 3,
        ...posStyles[position]
      }}
    >
      <g transform={`translate(${position.includes('right') ? 64 : 0}, ${position.includes('bottom') ? 64 : 0}) ${transforms[position]}`}>
        <path d="M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z" fill="#0d3b66" opacity="0.92" />
        <path d="M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z" fill="none" stroke="#d4a437" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.5" fill="#d4a437" />
        <circle cx="12" cy="12" r="2.2" fill="#0d3b66" />
        <path d="M22,6 Q28,12 22,18 Q16,12 22,6 Z" fill="#d4a437" />
        <path d="M6,22 Q12,28 18,22 Q12,16 6,22 Z" fill="#d4a437" />
      </g>
    </svg>
  );
}

/**
 * Mosque Silhouette SVG (Top Left)
 */
function MosqueSilhouette() {
  return (
    <svg
      viewBox="0 0 90 52"
      style={{
        position: 'absolute',
        top: '6px',
        left: '28px',
        width: '54px',
        height: '32px',
        pointerEvents: 'none',
        zIndex: 2
      }}
    >
      <g fill="#0d3b66" opacity="0.88">
        {/* Left Minaret */}
        <rect x="6" y="14" width="4" height="36" />
        <polygon points="8,6 5,14 11,14" />
        <circle cx="8" cy="5" r="1.5" fill="#c89b3c" />
        {/* Small Left Dome */}
        <path d="M14,32 C14,22 26,22 26,32 Z" />
        <rect x="14" y="32" width="12" height="18" />
        {/* Center Main Dome */}
        <path d="M28,28 C28,10 56,10 56,28 Z" />
        <rect x="41.2" y="5" width="1.6" height="6" />
        <circle cx="42" cy="4" r="2" fill="#c89b3c" />
        <rect x="27" y="28" width="30" height="22" />
        {/* Center Arch */}
        <path d="M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z" fill="#ffffff" opacity="0.85" />
        {/* Right Minaret */}
        <rect x="62" y="10" width="4.5" height="40" />
        <polygon points="64.25,2 61,10 67.5,10" />
        <circle cx="64.25" cy="1.5" r="1.5" fill="#c89b3c" />
        {/* Base line */}
        <rect x="2" y="48" width="76" height="2.5" rx="1" />
      </g>
    </svg>
  );
}

/**
 * Hanging Islamic Lantern (Fanus) SVG (Top Right)
 */
function HangingLantern() {
  return (
    <svg
      viewBox="0 0 44 86"
      style={{
        position: 'absolute',
        top: '2px',
        right: '24px',
        width: '28px',
        height: '56px',
        pointerEvents: 'none',
        zIndex: 2
      }}
    >
      {/* Chain */}
      <line x1="22" y1="0" x2="22" y2="20" stroke="#9a721c" strokeWidth="1.6" strokeDasharray="2.5 1.5" />
      <circle cx="22" cy="21" r="2.2" fill="#c89b3c" />
      {/* Top Cap */}
      <path d="M14,29 Q22,20 30,29 Z" fill="#b48322" />
      <rect x="12" y="29" width="20" height="3" rx="1" fill="#0d3b66" />
      {/* Lantern Body */}
      <polygon points="14,32 30,32 33,48 27,64 17,64 11,48" fill="#fef3c7" stroke="#b48322" strokeWidth="1.6" />
      {/* Inner Glow */}
      <ellipse cx="22" cy="48" rx="6" ry="11" fill="#f59e0b" opacity="0.45" />
      <line x1="22" y1="32" x2="22" y2="64" stroke="#b48322" strokeWidth="1.2" />
      <line x1="12" y1="48" x2="32" y2="48" stroke="#b48322" strokeWidth="1" />
      {/* Bottom Tip */}
      <rect x="16" y="64" width="12" height="2.5" rx="1" fill="#0d3b66" />
      <polygon points="19,66.5 25,66.5 22,76" fill="#b48322" />
      <circle cx="22" cy="78" r="2" fill="#d4a437" />
    </svg>
  );
}

/**
 * 8-Point Islamic Star Bullet Icon
 */
function StarBullet() {
  return (
    <svg viewBox="0 0 20 20" style={{ width: '12px', height: '12px', flexShrink: 0, marginTop: '2px' }}>
      <g transform="translate(10,10)">
        <rect x="-5.5" y="-5.5" width="11" height="11" fill="#0d3b66" />
        <rect x="-5.5" y="-5.5" width="11" height="11" fill="#0d3b66" transform="rotate(45)" />
        <circle cx="0" cy="0" r="2.2" fill="#f3c65f" />
      </g>
    </svg>
  );
}

/**
 * Single "পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য" Card (1/4 of A4 Landscape)
 */
export default function AdmitCardBacksideCard({ config = DEFAULT_BACKSIDE_CONFIG }) {
  const cfg = { ...DEFAULT_BACKSIDE_CONFIG, ...config };
  const rules = Array.isArray(cfg.rules) && cfg.rules.length > 0 ? cfg.rules : DEFAULT_BACKSIDE_CONFIG.rules;

  return (
    <div className="backside-card">
      <div className="backside-outer-border">
        <div className="backside-inner-border">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          <MosqueSilhouette />
          <HangingLantern />

          {/* Header Pill Banner */}
          <div className="backside-header-wrap">
            <div className="backside-header-pill">
              <span>{cfg.title}</span>
            </div>
          </div>

          {/* Rules List */}
          <ul className="backside-rules-list">
            {rules.filter(r => r && r.trim()).map((rule, idx) => (
              <li key={idx} className="backside-rule-item">
                <StarBullet />
                <span>{rule}</span>
              </li>
            ))}
          </ul>

          {/* Note Section (বি: দ্র:) + Golden Divider */}
          <div className="backside-note-section">
            <div className="backside-divider-row">
              <span className="backside-note-pill">{cfg.noteLabel || 'বি: দ্র:'}</span>
              <div className="backside-gold-line">
                <span className="backside-gold-diamond" />
              </div>
            </div>
            <p className="backside-note-text">{cfg.noteText}</p>
          </div>

          {/* Footer Row */}
          <div className="backside-footer-row">
            <div>
              {cfg.footerLeftBadge && cfg.footerLeftBadge.trim() !== '' && (
                <span className="backside-left-badge">{cfg.footerLeftBadge}</span>
              )}
            </div>
            <div className="backside-authority-box">
              <div className="backside-auth-line1">{cfg.authorityLine1 || 'আদেশক্রমে'}</div>
              <div className="backside-auth-line2">{cfg.authorityLine2 || 'মাদরাসা কর্তৃপক্ষ'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
