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

    /* Main Grid: Left Bengali, Center (Arabic + Logo + Slogan), Right English — All starting from Row 1 */
    .madrasah-main-grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: start;
      gap: 12px;
      width: 100%;
    }
    .madrasah-arabic-img {
      height: 44px;
      max-width: 320px;
      width: auto;
      object-fit: contain;
      display: block;
      margin: 0 auto 2px auto;
    }
    .madrasah-slogan-box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%);
      border: 1px solid #86efac;
      border-bottom: 2.5px solid #059669;
      border-radius: 5px;
      padding: 1.5px 8px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      line-height: 1.25;
      white-space: nowrap;
    }
    .madrasah-slogan-line {
      font-family: 'Noto Serif Bengali', 'SolaimanLipi', serif;
      font-size: 9.5px;
      font-weight: 700;
      color: #065f46;
      white-space: nowrap;
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
      justify-content: flex-start;
      padding: 0 4px;
    }
    .madrasah-title-bn {
      font-family: 'Noto Serif Bengali', 'SolaimanLipi', serif;
      font-size: 17px;
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
      font-size: 16px;
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
      width: 78px;
      height: 78px;
      object-fit: contain;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      filter: none !important;
      -webkit-filter: none !important;
      background: transparent !important;
      margin: 0 auto 4px auto;
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
      <!-- Unified 3 Columns: Left Bengali, Center (Arabic + Logo + Slogan), Right English — All starting from Row 1 -->
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

        <!-- Center Column: Arabic Calligraphy at top, Logo immediately below, Slogan quote below Logo -->
        <div class="madrasah-col-center">
          <img src="/images/arabic_title.png" alt="النُّورُ إِسْلَامِكْ أَكَادِيمِي" class="madrasah-arabic-img" onerror="this.src='/arabic_title.png'" />
          <img src="/images/madrasah_logo.png" alt="লোগো" class="madrasah-logo-img" onerror="this.src='/madrasah_logo.png'" />
          <div class="madrasah-slogan-box">
            <span class="madrasah-slogan-line">❝ ইলম শিখো, আমল করো, মানুষের সেবায় নিজেকে গড়ো। ❞</span>
          </div>
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
