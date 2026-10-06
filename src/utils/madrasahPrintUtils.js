/**
 * Universal Official Madrasah Header & Watermark Generator for Popup Print Windows (window.open)
 * Provides standardized HTML, styles, watermark, and footer signatures across all reports/exports.
 */

export const DEFAULT_PRESET_SIGNATURE_ROLES = [
  'পরিচালক',
  'প্রতিষ্ঠান প্রধান'
];

export function getMadrasahPrintStyles(orientation = 'portrait', { wrap = true } = {}) {
  const origin = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';
  const css = `
    @font-face {
      font-family: 'DecoTypeThuluthII';
      src: url('${origin}/fonts/DecoTypeThuluthII.ttf') format('truetype'),
           url('/fonts/DecoTypeThuluthII.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @page {
      size: A4 ${orientation};
      margin: 6mm 10mm !important;
    }
    * { box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Bengali', 'Hind Siliguri', 'Inter', -apple-system, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      height: 100%;
      min-height: 100%;
    }
    .print-sheet-container {
      position: relative;
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      overflow: hidden;
    }
    @media screen {
      .print-sheet-container {
        min-width: ${orientation === 'landscape' ? '860px' : '640px'};
      }
    }
    @media print {
      html, body {
        height: 100% !important;
        min-height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        background: #ffffff !important;
      }
      .print-sheet-container {
        position: relative !important;
        width: 100% !important;
        min-width: 100% !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: visible !important;
        page-break-inside: auto !important;
        break-inside: auto !important;
        min-height: 100% !important;
        height: auto !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        background: #ffffff !important;
      }
      .print-content-layer {
        position: relative !important;
        z-index: 1 !important;
        display: flex !important;
        flex-direction: column !important;
        flex: 1 1 auto !important;
        height: auto !important;
        min-height: 100% !important;
        width: 100% !important;
        justify-content: space-between !important;
      }
      .print-footer-signatures {
        position: relative !important;
        z-index: 2 !important;
        margin-top: auto !important;
        padding-top: 16px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      thead {
        display: table-header-group !important;
      }
      tfoot {
        display: table-footer-group !important;
      }
      tr {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
    }
    .print-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${orientation === 'landscape' ? '360px' : '420px'};
      height: ${orientation === 'landscape' ? '360px' : '420px'};
      max-width: 80%;
      max-height: 80%;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      opacity: 0.085;
      object-fit: contain;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .print-content-layer {
      position: relative;
      z-index: 10;
    }
    .official-header {
      width: 100%;
      margin-bottom: 8px;
    }
    /* Top Row: Arabic Calligraphy (Center) & 2-Line Highlighted Slogan (Upper-Right) in Same Line */
    .header-top-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      width: 100%;
      margin-bottom: 12px;
    }
    .header-top-left {
      /* Left empty dummy column to maintain dead-center optical balance above the circular logo */
    }
    .header-top-center {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
    }
    .header-top-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .header-arabic-img {
      height: ${orientation === 'landscape' ? '54px' : '68px'};
      max-width: ${orientation === 'landscape' ? '350px' : '440px'};
      width: auto;
      object-fit: contain;
      display: block;
    }
    .slogan-highlight-box {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%);
      border: 1px solid #86efac;
      border-right: 3.5px solid #059669;
      border-radius: 6px;
      padding: 2.5px 9px;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.05);
      line-height: 1.3;
    }
    .slogan-text-line {
      font-family: 'Noto Serif Bengali', serif;
      font-size: ${orientation === 'landscape' ? '9px' : '10px'};
      font-weight: 700;
      color: #065f46;
      white-space: nowrap;
    }

    /* Main Grid: Left Bengali, Center Full-Height Logo, Right English */
    .header-columns {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: start;
      gap: 14px;
      width: 100%;
    }

    /* Left Column: Bengali Info + Director Mobile at bottom */
    .col-left {
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .col-left .inst-title {
      font-family: 'Noto Serif Bengali', serif;
      font-size: ${orientation === 'landscape' ? '15.5px' : '17.5px'};
      font-weight: 800;
      color: #020617;
      margin: 0;
      padding: 0;
      height: 24px;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: -0.2px;
    }
    .col-left .inst-sub,
    .col-left .inst-city {
      font-size: ${orientation === 'landscape' ? '10.5px' : '11.5px'};
      color: #1e293b;
      font-weight: 600;
      margin: 0;
      padding: 0;
      height: 17px;
      line-height: 17px;
      white-space: nowrap;
    }

    /* Center Column: Full-Height Centered Logo (~118px) */
    .col-center {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      height: 100%;
    }
    .col-center .header-logo-center {
      width: ${orientation === 'landscape' ? '88px' : '118px'};
      height: ${orientation === 'landscape' ? '88px' : '118px'};
      object-fit: contain;
      margin: 0 auto;
      display: block;
      border: none !important;
      outline: none !important;
      background: transparent !important;
    }

    /* Single Phone Badges */
    .phone-badge-single {
      background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 45%, #e2e8f0 100%);
      border: 1.5px solid #475569;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      padding: 2.5px 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      font-size: ${orientation === 'landscape' ? '9.5px' : '10.5px'};
      font-weight: 700;
      color: #0f172a;
      line-height: 1.35;
      margin-top: 2px;
    }

    /* Right Column: English Info (Line-for-line synchronized with Left Column) */
    .col-right {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .col-right .inst-title-en {
      font-family: 'Times New Roman', serif;
      font-size: ${orientation === 'landscape' ? '14.5px' : '16.5px'};
      font-weight: 800;
      color: #020617;
      margin: 0;
      padding: 0;
      height: 24px;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: 0.2px;
    }
    .col-right .inst-sub-en,
    .col-right .inst-city-en {
      font-size: ${orientation === 'landscape' ? '10.5px' : '11.5px'};
      color: #1e293b;
      font-weight: 600;
      margin: 0;
      padding: 0;
      height: 17px;
      line-height: 17px;
      white-space: nowrap;
    }

    /* Shared Gap & Board Lines for Identical Baseline Alignment */
    .inst-line-spacer {
      height: 6px;
      width: 100%;
    }
    .inst-board-line {
      font-size: ${orientation === 'landscape' ? '9.5px' : '10.5px'};
      color: #334155;
      font-weight: 500;
      margin: 0;
      padding: 0;
      height: 16px;
      line-height: 16px;
      white-space: nowrap;
    }

    .header-double-divider {
      border-bottom: 2px solid #0f172a;
      margin-top: 4px;
      margin-bottom: 10px;
    }
    .doc-badge-wrap {
      text-align: center;
      margin: 8px 0 6px 0;
    }
    .doc-badge {
      display: inline-block;
      padding: 3px 16px;
      background: #f8fafc;
      color: #0f172a;
      font-weight: 700;
      font-size: 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
    }

    /* Footer Signatures */
    .print-footer-signatures {
      margin-top: auto;
      padding-top: 36px;
      width: 100%;
      page-break-inside: avoid;
    }
    .sig-grid {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;
      width: 100%;
    }
    .sig-col {
      flex: 1;
      text-align: center;
      min-width: 0;
    }
    .sig-line {
      border-top: 1.5px solid #334155;
      padding-top: 4px;
      font-weight: 700;
      font-size: 11.5px;
      color: #0f172a;
      max-width: 220px;
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* Requirement 3: Same font size as the role, preserved color */
    .sig-sub {
      font-size: 11.5px;
      color: #64748b;
      font-weight: 500;
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  return wrap ? `<style id="madrasah-print-styles">\n${css}\n</style>` : css;
}

/**
 * Returns raw HTML string of the official header with Arabic text, 3 columns & watermark
 */
export function getMadrasahHeaderHtml({
  title = '',
  subtitle = '',
  orientation = 'portrait',
  metaLeft = '',
  metaRight = '',
  showWatermark = true
} = {}) {
  return `
    ${showWatermark ? `
      <img src="/images/madrasah_logo.png" class="print-watermark" alt="Watermark" onerror="this.src='/madrasah_logo.png'" />
    ` : ''}
    <header class="official-header">
      <!-- Top Row: Balanced Empty Left, Center Arabic Image (68px), Right Slogan -->
      <div class="header-top-row">
        <div class="header-top-left"></div>
        <div class="header-top-center">
          <img src="/images/arabic_title.png" alt="النُّورُ إِسْلَامِكْ أَكَادِيمِي" class="header-arabic-img" onerror="this.src='/arabic_title.png'" />
        </div>
        <div class="header-top-right">
          <div class="slogan-highlight-box">
            <div class="slogan-text-line">❝ ইলম শিখো, আমল করো,</div>
            <div class="slogan-text-line">মানুষের সেবায় নিজেকে গড়ো। ❞</div>
          </div>
        </div>
      </div>

      <!-- Main Columns: Left Bengali, Center Full-Height Logo, Right English -->
      <div class="header-columns">
        
        <!-- Left: Bengali Info + Director Mobile at bottom -->
        <div class="col-left">
          <div class="inst-title">আন্-নূর ইসলামিক একাডেমি</div>
          <div class="inst-sub">শাহীবাগ জামে মসজিদ সংলগ্ন,</div>
          <div class="inst-city">চাঁপাইনবাবগঞ্জ।</div>
          <div class="inst-line-spacer"></div>
          <div class="inst-board-line">হুফফাজুল কুরআন ফাউন্ডেশন</div>
          <div class="inst-board-line">বাংলাদেশ হিফজ শিক্ষা বোর্ড (নিবন্ধন: ৫০০৮২৫)</div>
          <div class="inst-line-spacer"></div>
          <div class="phone-badge-single">
            ০১৭৬৭৬১৫৭৪৬ (পরিচালক)
          </div>
        </div>

        <!-- Center: Full-Height Centered Logo (~118px) -->
        <div class="col-center">
          <img src="/images/madrasah_logo.png" alt="লোগো" class="header-logo-center" onerror="this.src='/madrasah_logo.png'" />
        </div>

        <!-- Right: English Info + Head Teacher Mobile at bottom -->
        <div class="col-right">
          <div class="inst-title-en">AN-NUR ISLAMIC ACADEMY</div>
          <div class="inst-sub-en">Adjacent to Shahibag Jame Mosque</div>
          <div class="inst-city-en">Chapainawabganj.</div>
          <div class="inst-line-spacer"></div>
          <div class="inst-board-line">তানযীম বোর্ড-নিবন্ধন নং: ৪২০৭</div>
          <div class="inst-board-line">নূরানী ইকরা বোর্ড- নিবন্ধন নং: ৬০২৫৪২</div>
          <div class="inst-line-spacer"></div>
          <div class="phone-badge-single">
            ০১৭২২০৯৫০২৬ (প্রধান শিক্ষক-নূরানী বিভাগ)
          </div>
        </div>

      </div>

      ${title ? `
        <div class="doc-badge-wrap">
          <span class="doc-badge">${title}</span>
        </div>
      ` : ''}

      ${(metaLeft || metaRight) ? `
        <div style="display:flex; justify-content:space-between; font-size:10pt; color:#1e293b; margin-top:6px; padding:2px 0; border-bottom:1px solid #e2e8f0;">
          <div>${metaLeft}</div>
          <div>${metaRight}</div>
        </div>
      ` : ''}

      <!-- Bottom Double Line Divider -->
      <div class="header-double-divider"></div>
    </header>
  `;
}


/**
 * Returns raw HTML string of the customizable footer signatures
 */
export function getMadrasahFooterSignaturesHtml(roles = DEFAULT_PRESET_SIGNATURE_ROLES) {
  if (!roles || roles.length === 0) return '';
  const isSingle = roles.length === 1;
  return `
    <div class="print-footer-signatures">
      <div class="sig-grid" style="${isSingle ? 'display:flex; justify-content:flex-end; width:100%;' : ''}">
        ${roles.map(role => `
          <div class="sig-col" style="${isSingle ? 'flex:0 0 200px; max-width:220px; margin-left:auto;' : ''}">
            <div class="sig-line">${role}</div>
            <div class="sig-sub">আন্-নূর ইসলামিক একাডেমি</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

