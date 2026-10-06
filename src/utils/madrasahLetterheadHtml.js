/**
 * Madrasah Letterhead HTML Generator Utility
 * পপ-আপ প্রিন্ট উইন্ডো (window.open) বা র' HTML ডকুমেন্টের জন্য
 */

export function getMadrasahHeaderCss() {
  return `
    @font-face {
      font-family: 'DecoTypeThuluthII';
      src: url('/fonts/DecoTypeThuluthII.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    .madrasah-letterhead-container {
      width: 100%;
      margin-bottom: 12px;
      color: #0f172a;
      box-sizing: border-box;
    }

    /* Top Row: Arabic Calligraphy (Center) & 2-Line Highlighted Slogan (Upper-Right) in Same Line */
    .madrasah-top-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      width: 100%;
      margin-bottom: 12px;
    }
    .madrasah-top-left {
      /* Empty balanced space so center remains perfectly centered over logo */
    }
    .madrasah-top-center {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
    }
    .madrasah-top-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .madrasah-arabic-img {
      height: 68px;
      max-width: 440px;
      width: auto;
      object-fit: contain;
      display: block;
    }
    .madrasah-slogan-box {
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
    .madrasah-slogan-line {
      font-family: 'Noto Serif Bengali', 'SolaimanLipi', serif;
      font-size: 10px;
      font-weight: 700;
      color: #065f46;
      white-space: nowrap;
    }

    /* Main Grid: Left Bengali, Center Full-Height Logo, Right English */
    .madrasah-main-grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: start;
      gap: 14px;
      width: 100%;
    }
    .madrasah-col-left {
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .madrasah-col-right {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .madrasah-col-center {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      height: 100%;
    }
    .madrasah-title-bn {
      font-family: 'Noto Serif Bengali', 'SolaimanLipi', serif;
      font-size: 17.5px;
      font-weight: 800;
      color: #020617;
      margin: 0;
      padding: 0;
      height: 24px;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: -0.2px;
    }
    .madrasah-title-en {
      font-family: 'Times New Roman', Times, serif;
      font-size: 16.5px;
      font-weight: 800;
      color: #020617;
      margin: 0;
      padding: 0;
      height: 24px;
      line-height: 24px;
      white-space: nowrap;
      letter-spacing: 0.2px;
    }
    .madrasah-sub-text {
      font-size: 11.5px;
      color: #1e293b;
      font-weight: 600;
      margin: 0;
      padding: 0;
      height: 17px;
      line-height: 17px;
      white-space: nowrap;
    }
    .madrasah-line-gap {
      height: 6px;
      width: 100%;
    }
    .madrasah-reg-text {
      font-size: 10.5px;
      color: #334155;
      font-weight: 500;
      margin: 0;
      padding: 0;
      height: 16px;
      line-height: 16px;
      white-space: nowrap;
    }
    .madrasah-logo-img {
      width: 118px;
      height: 118px;
      object-fit: contain;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      filter: none !important;
      -webkit-filter: none !important;
      background: transparent !important;
      margin: 0 auto;
      display: block;
    }
    .madrasah-phone-single {
      background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 45%, #e2e8f0 100%);
      border: 1.5px solid #475569;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      padding: 2.5px 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      font-size: 10.5px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.35;
      margin-top: 2px;
    }
    .madrasah-header-divider {
      border-bottom: 2.5px solid #0f172a;
      margin: 4px 0 12px 0;
      width: 100%;
    }
    .madrasah-doc-title-box {
      text-align: center;
      margin: 8px 0 10px 0;
    }
    .madrasah-doc-title {
      display: inline-block;
      padding: 3px 16px;
      background: #f8fafc;
      color: #0f172a;
      font-weight: 700;
      font-size: 12.5px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
    }
    @media print {
      .madrasah-logo-img {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        filter: none !important;
        -webkit-filter: none !important;
        background: transparent !important;
      }
    }
  `;
}

export function getMadrasahHeaderHtml({
  title = '',
  subtitle = '',
  showDivider = true,
  directorPhone = '০১৭৬৭৬১৫৭৪৬',
  headTeacherPhone = '০১৭২২০৯৫০২৬'
} = {}) {
  return `
    <header class="madrasah-letterhead-container" id="madrasah-letterhead">
      <!-- Top Row: Left Slogan, Center Arabic, Right Slogan -->
      <!-- Top Row: Balanced Empty Left, Center Arabic Image (68px), Right Slogan -->
      <div class="madrasah-top-row">
        <div class="madrasah-top-left"></div>
        <div class="madrasah-top-center">
          <img src="/images/arabic_title.png" alt="النُّورُ إِسْلَامِكْ أَكَادِيمِي" class="madrasah-arabic-img" onerror="this.src='/arabic_title.png'" />
        </div>
        <div class="madrasah-top-right">
          <div class="madrasah-slogan-box">
            <div class="madrasah-slogan-line">❝ ইলম শিখো, আমল করো,</div>
            <div class="madrasah-slogan-line">মানুষের সেবায় নিজেকে গড়ো। ❞</div>
          </div>
        </div>
      </div>

      <!-- Main Columns: Left Bengali, Center Full-Height Logo, Right English -->
      <div class="madrasah-main-grid">
        <!-- Left Column: Bengali Info + Director Mobile at bottom -->
        <div class="madrasah-col-left">
          <div class="madrasah-title-bn">আন্-নূর ইসলামিক একাডেমি</div>
          <div class="madrasah-sub-text">শাহীবাগ জামে মসজিদ সংলগ্ন,</div>
          <div class="madrasah-sub-text">চাঁপাইনবাবগঞ্জ।</div>
          <div class="madrasah-line-gap"></div>
          <div class="madrasah-reg-text">হুফফাজুল কুরআন ফাউন্ডেশন</div>
          <div class="madrasah-reg-text">বাংলাদেশ হিফজ শিক্ষা বোর্ড (নিবন্ধন: ৫০০৮২৫)</div>
          <div class="madrasah-line-gap"></div>
          <div class="madrasah-phone-single">
            ${directorPhone} (পরিচালক)
          </div>
        </div>

        <!-- Center Column: Full-Height Centered Logo (~118px) -->
        <div class="madrasah-col-center">
          <img src="/images/madrasah_logo.png" alt="লোগো" class="madrasah-logo-img" onerror="this.src='/madrasah_logo.png'" />
        </div>

        <!-- Right Column: English Info + Head Teacher Mobile at bottom -->
        <div class="madrasah-col-right">
          <div class="madrasah-title-en">AN-NUR ISLAMIC ACADEMY</div>
          <div class="madrasah-sub-text">Adjacent to Shahibag Jame Mosque</div>
          <div class="madrasah-sub-text">Chapainawabganj.</div>
          <div class="madrasah-line-gap"></div>
          <div class="madrasah-reg-text">তানযীম বোর্ড-নিবন্ধন নং: ৪২০৭</div>
          <div class="madrasah-reg-text">নূরানী ইকরা বোর্ড- নিবন্ধন নং: ৬০২৫৪২</div>
          <div class="madrasah-line-gap"></div>
          <div class="madrasah-phone-single">
            ${headTeacherPhone} (প্রধান শিক্ষক-নূরানী বিভাগ)
          </div>
        </div>
      </div>

      <!-- Optional Document Title -->
      ${title ? `
        <div class="madrasah-doc-title-box">
          <span class="madrasah-doc-title">${title}</span>
          ${subtitle ? `<div style="font-size: 11px; color: #64748b; margin-top: 3px;">${subtitle}</div>` : ''}
        </div>
      ` : ''}

      <!-- Bottom Divider Line -->
      ${showDivider ? '<div class="madrasah-header-divider"></div>' : ''}
    </header>
  `;
}
