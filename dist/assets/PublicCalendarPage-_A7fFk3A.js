import{a as y,r as p,d as w,j as t,L as m,A as j,C as k,m as S,n as z}from"./index-wOv2388o.js";import{M as N,P as C}from"./PrintFooterSignatures-6t7pgKOq.js";import{P as R}from"./PrintSignatureRoleSelector--BbMT981.js";import{g as T}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P}from"./printer-vxNCLSad.js";import"./plus-k_s31_St.js";const x=["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"];function W(){const{user:r}=y(),[f,d]=p.useState(!0),[g,s]=p.useState([]),[a,l]=p.useState("portrait"),[c,h]=p.useState(["প্রতিষ্ঠান প্রধান","শ্রেণী শিক্ষক"]);p.useEffect(()=>{b()},[]);const b=async()=>{var e,o;try{d(!0);const n=await w.get("/academics/public/calendar");if((e=n.data)!=null&&e.success&&((o=n.data.data)!=null&&o.events)&&n.data.data.events.length>0)s(n.data.data.events);else{const i=localStorage.getItem("calendar_data");s(i?JSON.parse(i):[{month:"জানুয়ারি",events:["০১ - নতুন শিক্ষাবর্ষ শুরু","১৫ - বার্ষিক ভর্তি কার্যক্রম সম্পন্ন"]},{month:"ফেব্রুয়ারি",events:["২১ - আন্তর্জাতিক মাতৃভাষা দিবস ছুটি"]},{month:"মার্চ",events:["২৬ - মহান স্বাধীনতা দিবস ছুটি"]},{month:"এপ্রিল",events:["০১ - ১ম সাময়িক পরীক্ষা আরম্ভ","১৪ - বাংলা নববর্ষ ছুটি"]},{month:"মে",events:["০১ - আন্তর্জাতিক মে দিবস ছুটি","২৫ - গ্রীষ্মকালীন ছুটি"]},{month:"জুন",events:["পবিত্র ঈদুল আযহা ও অবকাশ"]},{month:"জুলাই",events:["১০ - ২য় সাময়িক পরীক্ষা আরম্ভ"]},{month:"আগস্ট",events:["১৫ - জাতীয় শোক দিবস"]},{month:"সেপ্টেম্বর",events:["১২ - সীরাতুন্নবী (সা.) প্রতিযোগিতা"]},{month:"অক্টোবর",events:["০৫ - ৩য় সাময়িক পরীক্ষা মূল্যায়ন"]},{month:"নভেম্বর",events:["১৫ - বার্ষিক ক্রীড়া ও সাংস্কৃতিক সপ্তাহ"]},{month:"ডিসেম্বর",events:["০১ - বার্ষিক পরীক্ষা আরম্ভ","১৬ - মহান বিজয় দিবস","৩১ - ফলাফল প্রকাশ"]}])}}catch(n){console.error("Error loading public calendar:",n);try{const i=localStorage.getItem("calendar_data");i&&s(JSON.parse(i))}catch{}}finally{d(!1)}},u=()=>{window.print()},v=[...g].sort((e,o)=>{const n=x.indexOf(e.month),i=x.indexOf(o.month);return(n!==-1?n:99)-(i!==-1?i:99)});return t.jsxs("div",{className:"public-calendar-page-root",style:{minHeight:"100vh",background:"#f8fafc",color:"#0f172a",paddingBottom:"40px"},children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:T(a,{wrap:!1})}}),t.jsx("style",{children:`
        @page {
          size: A4 ${a};
          margin: 6mm 10mm !important;
        }
        @media print {
          .no-print { display: none !important; }
          html, body, #root {
            background: #ffffff !important;
            background-color: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            min-height: 100% !important;
            overflow: visible !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .public-calendar-page-root {
            min-height: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .sheet-scroll-outer {
            overflow: visible !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .print-container {
            position: relative !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            min-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            min-height: ${a==="landscape"?"196.5mm":"283.5mm"} !important;
            height: ${a==="landscape"?"196.5mm":"283.5mm"} !important;
            max-height: ${a==="landscape"?"196.5mm":"283.5mm"} !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .print-watermark {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: ${a==="landscape"?"360px":"420px"} !important;
            height: ${a==="landscape"?"360px":"420px"} !important;
            max-width: 80% !important;
            max-height: 80% !important;
            opacity: 0.085 !important;
            z-index: 0 !important;
            pointer-events: none !important;
            display: block !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-top-section {
            position: relative !important;
            z-index: 1 !important;
            flex: 1 0 auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .calendar-grid {
            grid-template-columns: repeat(${a==="landscape"?4:3}, 1fr) !important;
            gap: 10px !important;
            margin-top: 10px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .calendar-card {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .print-footer-wrapper {
            position: relative !important;
            z-index: 2 !important;
            margin-top: auto !important;
            padding-top: 10px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .print-footer-signatures-wrap {
            padding-top: 10px !important;
            margin-top: 0 !important;
          }
        }
        .print-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 380px;
          max-width: 80%;
          max-height: 80%;
          opacity: 0.065;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          object-fit: contain;
        }
        .print-top-section {
          position: relative;
          z-index: 1;
        }
        .print-footer-wrapper {
          position: relative;
          z-index: 1;
        }
        .calendar-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .calendar-card-header {
          background: #0f766e;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .calendar-card-body {
          padding: 8px 12px;
          min-height: 70px;
        }
        .event-bullet {
          font-size: 12px;
          color: #334155;
          margin-bottom: 4px;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          line-height: 1.4;
        }
        .event-bullet::before {
          content: '•';
          color: #0f766e;
          font-weight: bold;
          font-size: 14px;
        }
        .sheet-scroll-outer {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding: 0 16px 24px;
          box-sizing: border-box;
        }
        .mobile-scroll-hint {
          display: none;
        }
        @media screen and (max-width: 768px) {
          .sheet-scroll-outer {
            padding: 0 8px 20px;
          }
          .mobile-scroll-hint {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: #ccfbf1;
            color: #0f766e;
            border: 1px solid #99f6e4;
            border-radius: 9999px;
            padding: 5px 14px;
            font-size: 12px;
            font-weight: 600;
            margin: 8px auto;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          }
          .print-container {
            min-width: ${a==="landscape"?"880px":"700px"} !important;
            margin: 8px auto !important;
            padding: 16px !important;
            border-radius: 8px !important;
          }
          .calendar-grid {
            grid-template-columns: repeat(${a==="landscape"?4:3}, 1fr) !important;
            gap: 12px !important;
          }
        }
        @media screen and (max-width: 640px) {
          .public-top-nav {
            padding: 10px 12px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 8px !important;
          }
          .public-top-nav-left {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
          }
          .public-top-nav-title {
            font-size: 15px !important;
          }
          .public-top-nav-right {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
            gap: 6px !important;
          }
          .public-top-nav-right button, .public-top-nav-right a {
            font-size: 11.5px !important;
            padding: 5px 8px !important;
          }
        }
      `}),t.jsxs("div",{className:"no-print public-top-nav",style:{background:"#0f766e",color:"#fff",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",flexWrap:"wrap",gap:"10px"},children:[t.jsxs("div",{className:"public-top-nav-left",style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs(m,{to:r?"/dashboard":"/",style:{color:"#fff",display:"flex",alignItems:"center",gap:"6px",textDecoration:"none",fontSize:"14px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",whiteSpace:"nowrap"},children:[t.jsx(j,{size:16})," ",r?"ড্যাশবোর্ড":"হোমপেজ"]}),t.jsxs("span",{className:"public-top-nav-title",style:{fontSize:"18px",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap"},children:[t.jsx(k,{size:20})," একাডেমিক ক্যালেন্ডার"]})]}),t.jsxs("div",{className:"public-top-nav-right",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.25)",padding:"3px",borderRadius:"6px",gap:"3px"},children:[t.jsx("button",{type:"button",onClick:()=>l("portrait"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="portrait"?"#fff":"transparent",color:a==="portrait"?"#0f766e":"#fff",transition:"all 0.15s ease"},children:"📄 পোর্ট্রেট"}),t.jsx("button",{type:"button",onClick:()=>l("landscape"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="landscape"?"#fff":"transparent",color:a==="landscape"?"#0f766e":"#fff",transition:"all 0.15s ease"},children:"🖼️ ল্যান্ডস্কেপ"})]}),t.jsxs(m,{to:"/routine",style:{color:"#fff",textDecoration:"none",fontSize:"13px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},children:[t.jsx(S,{size:15})," ক্লাস রুটিন"]}),t.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"6px",background:"#f59e0b",color:"#0f172a",border:"none",padding:"7px 16px",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"},children:[t.jsx(P,{size:16})," প্রিন্ট / PDF"]})]})]}),!((r==null?void 0:r.userType)==="student"||(r==null?void 0:r.userType)==="guardian")&&t.jsx("div",{className:"no-print",style:{maxWidth:a==="portrait"?"960px":"1100px",margin:"12px auto 0",padding:"0 16px"},children:t.jsx(R,{selectedRoles:c,onChange:h})}),t.jsxs("div",{className:"sheet-scroll-outer",children:[t.jsx("div",{style:{textAlign:"center"},children:t.jsx("div",{className:"mobile-scroll-hint no-print",children:"👈 সম্পূর্ণ পৃষ্ঠা দেখতে ডানে-বামে স্ক্রোল করুন 👉"})}),t.jsxs("div",{className:"print-container",style:{maxWidth:a==="portrait"?"960px":"1100px",margin:"16px auto",background:"#fff",padding:a==="landscape"?"18px 22px":"24px",borderRadius:"12px",boxShadow:"0 4px 6px -1px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",minHeight:a==="landscape"?"700px":"900px",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"hidden"},children:[t.jsx("img",{src:"/images/madrasah_logo.png",className:"print-watermark",alt:"ওয়াটারমার্ক",onError:e=>{e.currentTarget.src="/madrasah_logo.png"}}),t.jsxs("div",{className:"print-top-section",children:[t.jsx(N,{documentTitle:"বাৎসরিক একাডেমিক ক্যালেন্ডার ও কার্যক্রম",compact:a==="landscape",metaLeft:t.jsxs("span",{children:[t.jsx("strong",{children:"শিক্ষাবর্ষ:"})," ২০২৬ ইং"]}),metaRight:t.jsxs("span",{children:[t.jsx("strong",{children:"প্রকাশনা:"})," প্রাতিষ্ঠানিক সমন্বয় পর্ষদ"]})}),f?t.jsxs("div",{style:{padding:"60px 0",textAlign:"center",color:"#64748b"},children:[t.jsx(z,{className:"animate-spin",size:32,style:{margin:"0 auto 12px",color:"#0f766e"}}),t.jsx("p",{children:"একাডেমিক ক্যালেন্ডার লোড হচ্ছে..."})]}):t.jsx("div",{className:"calendar-grid",style:{display:"grid",gridTemplateColumns:a==="landscape"?"repeat(4, 1fr)":"repeat(3, 1fr)",gap:"16px",marginTop:"16px"},children:v.map((e,o)=>t.jsxs("div",{className:"calendar-card",children:[t.jsxs("div",{className:"calendar-card-header",children:[t.jsx("span",{children:e.month}),t.jsx("span",{style:{fontSize:"11px",opacity:.9},children:"২০২৬"})]}),t.jsx("div",{className:"calendar-card-body",children:e.events&&e.events.length>0?e.events.map((n,i)=>t.jsx("div",{className:"event-bullet",children:t.jsx("span",{children:n})},i)):t.jsx("div",{style:{fontSize:"11px",color:"#94a3b8",fontStyle:"italic",padding:"4px 0"},children:"নিয়মিত পাঠদান ও প্রাতিষ্ঠানিক কার্যক্রম"})})]},o))})]}),t.jsx("div",{className:"print-footer-wrapper",style:{marginTop:"auto",paddingTop:a==="landscape"?"14px":"24px"},children:t.jsx(C,{roles:c,style:{paddingTop:"10px"}})})]})]})]})}export{W as default};
