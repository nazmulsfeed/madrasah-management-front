import React from 'react';

/**
 * Reusable Official Institutional Header for An-Nur Islamic Academy
 * Displays:
 * 1. Centered Arabic Calligraphy (DecoType Thuluth II)
 * 2. 3-column Institutional details (Bengali info, Logo + Mobile capsule, English info & Board IDs)
 * 3. Bottom double-rule divider
 */
export default function MadrasahLetterhead({
  documentTitle = '',
  metaLeft = null,
  metaRight = null,
  compact = false,
  showDivider = true,
  className = ''
}) {
  return (
    <div 
      className={`w-full text-slate-900 madrasah-letterhead-root ${className}`} 
      id="madrasah-official-header"
      style={{
        display: 'block',
        minWidth: '600px',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}
    >
      {/* Unified Main Grid: Left Bengali, Center (Arabic + Logo + Slogan), Right English — All starting from Row 1 */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'start',
          gap: '12px',
          width: '100%',
          marginBottom: '8px'
        }}
      >
        {/* Left Column: Bengali Info + Director Mobile at bottom */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: compact ? '15px' : '17px', fontWeight: 800, color: '#020617', margin: 0, padding: 0, height: '24px', lineHeight: '24px', whiteSpace: 'nowrap', letterSpacing: '-0.2px' }}>
            আন্-নূর ইসলামিক একাডেমি
          </div>
          <div style={{ fontSize: compact ? '10px' : '11px', color: '#1e293b', fontWeight: 600, margin: 0, padding: 0, height: '17px', lineHeight: '17px', whiteSpace: 'nowrap' }}>
            শাহীবাগ জামে মসজিদ সংলগ্ন,
          </div>
          <div style={{ fontSize: compact ? '10px' : '11px', color: '#1e293b', fontWeight: 600, margin: 0, padding: 0, height: '17px', lineHeight: '17px', whiteSpace: 'nowrap' }}>
            চাঁপাইনবাবগঞ্জ।
          </div>
          <div style={{ height: '5px', width: '100%' }}></div>
          <div style={{ fontSize: compact ? '9px' : '10px', color: '#334155', fontWeight: 500, margin: 0, padding: 0, height: '16px', lineHeight: '16px', whiteSpace: 'nowrap' }}>
            হুফফাজুল কুরআন ফাউন্ডেশন
          </div>
          <div style={{ fontSize: compact ? '9px' : '10px', color: '#334155', fontWeight: 500, margin: 0, padding: 0, height: '16px', lineHeight: '16px', whiteSpace: 'nowrap' }}>
            বাংলাদেশ হিফজ শিক্ষা বোর্ড (নিবন্ধন: ৫০০৮২৫)
          </div>
          <div style={{ height: '5px', width: '100%' }}></div>
          <div 
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 45%, #e2e8f0 100%)',
              border: '1.5px solid #475569',
              boxShadow: '0 1.5px 3px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              padding: '2px 9px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              fontSize: compact ? '9px' : '10px',
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.35,
              marginTop: '2px'
            }}
          >
            ০১৭৬৭৬১৫৭৪৬ (পরিচালক)
          </div>
        </div>

        {/* Center Column: Arabic Calligraphy at top, Logo immediately below, Slogan quote below Logo */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0 4px' }}>
          <img 
            src="/images/arabic_title.png" 
            alt="النُّورُ إِسْلَامِكْ أَكَادِيمِي" 
            style={{
              height: compact ? '36px' : '44px',
              maxWidth: compact ? '260px' : '320px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto 2px auto'
            }}
            onError={(e) => { e.currentTarget.src = '/arabic_title.png'; }}
          />
          <img 
            src="/images/madrasah_logo.png" 
            alt="লোগো" 
            style={{ 
              width: compact ? '68px' : '78px', 
              height: compact ? '68px' : '78px', 
              objectFit: 'contain', 
              margin: '0 auto 4px auto',
              display: 'block',
              border: 'none',
              background: 'transparent'
            }}
            onError={(e) => { e.target.src = '/madrasah_logo.png'; }}
          />
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%)', 
              border: '1px solid #86efac', 
              borderBottom: '2.5px solid #059669', 
              borderRadius: '5px', 
              padding: '1.5px 8px', 
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)', 
              lineHeight: 1.25,
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ fontFamily: "'Noto Serif Bengali', serif", fontSize: compact ? '8.5px' : '9.5px', fontWeight: 700, color: '#065f46' }}>
              ❝ ইলম শিখো, আমল করো, মানুষের সেবায় নিজেকে গড়ো। ❞
            </span>
          </div>
        </div>

        {/* Right Column: English Info + Head Teacher Mobile at bottom */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: "'Times New Roman', serif", fontSize: compact ? '14px' : '16px', fontWeight: 800, color: '#020617', margin: 0, padding: 0, height: '24px', lineHeight: '24px', whiteSpace: 'nowrap', letterSpacing: '0.2px' }}>
            AN-NUR ISLAMIC ACADEMY
          </div>
          <div style={{ fontSize: compact ? '10px' : '11px', color: '#1e293b', fontWeight: 600, margin: 0, padding: 0, height: '17px', lineHeight: '17px', whiteSpace: 'nowrap' }}>
            Adjacent to Shahibag Jame Mosque
          </div>
          <div style={{ fontSize: compact ? '10px' : '11px', color: '#1e293b', fontWeight: 600, margin: 0, padding: 0, height: '17px', lineHeight: '17px', whiteSpace: 'nowrap' }}>
            Chapainawabganj.
          </div>
          <div style={{ height: '5px', width: '100%' }}></div>
          <div style={{ fontSize: compact ? '9px' : '10px', color: '#334155', fontWeight: 500, margin: 0, padding: 0, height: '16px', lineHeight: '16px', whiteSpace: 'nowrap' }}>
            তানযীম বোর্ড-নিবন্ধন নং: ৪২০৭
          </div>
          <div style={{ fontSize: compact ? '9px' : '10px', color: '#334155', fontWeight: 500, margin: 0, padding: 0, height: '16px', lineHeight: '16px', whiteSpace: 'nowrap' }}>
            নূরানী ইকরা বোর্ড- নিবন্ধন নং: ৬০২৫৪২
          </div>
          <div style={{ height: '5px', width: '100%' }}></div>
          <div 
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 45%, #e2e8f0 100%)',
              border: '1.5px solid #475569',
              boxShadow: '0 1.5px 3px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              padding: '2px 9px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              fontSize: compact ? '9px' : '10px',
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.35,
              marginTop: '2px'
            }}
          >
            ০১৭২২০৯৫০২৬ (প্রধান শিক্ষক-নূরানী বিভাগ)
          </div>
        </div>
      </div>

      {/* Optional Document Title Bar */}
      {documentTitle && (
        <div style={{ textAlign: 'center', margin: '8px 0 6px 0' }}>
          <span 
            style={{
              display: 'inline-block',
              padding: '3px 16px',
              background: '#f8fafc',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '12.5px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}
          >
            {documentTitle}
          </span>
        </div>
      )}

      {/* Optional Meta strip */}
      {(metaLeft || metaRight) && (
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '11px', 
            color: '#1e293b', 
            marginTop: '4px',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '3px'
          }}
        >
          <div>{metaLeft}</div>
          <div>{metaRight}</div>
        </div>
      )}

      {/* Bottom Divider Line */}
      {showDivider && (
        <div 
          style={{
            borderBottom: '2.5px solid #0f172a',
            marginTop: '4px',
            marginBottom: '12px'
          }}
        />
      )}
    </div>
  );
}
