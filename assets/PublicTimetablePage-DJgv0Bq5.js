import{a as W,r as d,d as C,l as R,j as t,L as w,A as T,m as I,C as A,n as P}from"./index-D_xfobYu.js";import{M as L,P as $}from"./PrintFooterSignatures-qEVI4MTp.js";import{D as E,P as D}from"./PrintSignatureRoleSelector-CEuuZEsB.js";import{g as O}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as M}from"./printer-D4Ivpxs1.js";import"./plus-BOCYsmKt.js";const F=[{period:"পিরিয়ড ১",time:"০৮:০০ - ০৮:৪৫"},{period:"পিরিয়ড ২",time:"০৮:৪৫ - ০৯:৩০"},{period:"পিরিয়ড ৩",time:"০৯:৩০ - ১০:১৫"},{period:"পিরিয়ড ৪",time:"১০:৪৫ - ১১:৩০"},{period:"পিরিয়ড ৫",time:"১১:৩০ - ১২:১৫"}];function q(){const{user:p}=W(),[k,h]=d.useState(!0),[g,b]=d.useState([]),[s,x]=d.useState(""),[f,u]=d.useState({}),[a,j]=d.useState("landscape"),[y,S]=d.useState(E);d.useEffect(()=>{z()},[]);const z=async()=>{var i;try{h(!0);const o=await C.get("/academics/public/timetable");if((i=o.data)!=null&&i.success){const n=o.data.data.classes||[];b(n);let e=o.data.data.timetable||{};if(!e||Object.keys(e).length===0)try{const r=localStorage.getItem("timetable_data");r&&(e=JSON.parse(r))}catch{}if(u(e),n.length>0){const r=n.find(l=>{const c=e[l._id]||e[String(l._id)]||e[l.name];return Array.isArray(c)&&c.length>0});x(r?r._id:n[0]._id)}}}catch(o){console.error("Error loading public timetable:",o);let n={};try{const e=localStorage.getItem("timetable_data");e&&(n=JSON.parse(e))}catch{}u(n);try{const e=await R.getState().fetchClasses();if(e&&e.length>0){b(e);const r=e.find(l=>{const c=n[l._id]||n[String(l._id)]||n[l.name];return Array.isArray(c)&&c.length>0});x(r?r._id:e[0]._id)}}catch{}}finally{h(!1)}},m=g.find(i=>String(i._id)===String(s)),_=m?m.name:"সকল শ্রেণি",v=s&&(f[s]||f[String(s)]||(m?f[m.name]:null))||[],N=()=>{window.print()};return t.jsxs("div",{className:"public-routine-page-root",style:{minHeight:"100vh",background:"#f8fafc",color:"#0f172a",paddingBottom:"40px"},children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:O(a,{wrap:!1})}}),t.jsx("style",{children:`
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
          .public-routine-page-root {
            min-height: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .print-container {
            position: relative !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
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
          .timetable-table {
            width: 100% !important;
            margin-top: ${a==="landscape"?"8px":"12px"} !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            background: transparent !important;
          }
          .timetable-table tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .timetable-table th, .timetable-table td {
            padding: ${a==="landscape"?"4.5px 6px":"6.5px 8px"} !important;
            font-size: ${a==="landscape"?"11px":"12.5px"} !important;
            line-height: 1.25 !important;
          }
          .break-row td {
            padding: ${a==="landscape"?"4px 6px":"6px"} !important;
            font-size: ${a==="landscape"?"11.5px":"12.5px"} !important;
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
        .timetable-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }
        .timetable-table th, .timetable-table td {
          border: 1px solid #cbd5e1;
          padding: 8px 10px;
          font-size: 13px;
          text-align: center;
        }
        .timetable-table th {
          background-color: #047857;
          color: #fff;
          font-weight: 700;
        }
        .timetable-table tr:nth-child(even) {
          background-color: #f8fafc;
        }
        .break-row {
          background-color: #fef3c7 !important;
          color: #92400e;
          font-weight: 700;
          letter-spacing: 0.5px;
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
        .timetable-scroll-wrapper {
          width: 100%;
          overflow-x: visible;
          margin-top: 12px;
          padding-bottom: 6px;
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
            background: #ecfdf5;
            color: #047857;
            border: 1px solid #a7f3d0;
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
            overflow: visible !important;
          }
          .timetable-table {
            min-width: 100%;
          }
          .timetable-scroll-wrapper {
            margin-top: 8px;
            padding-bottom: 0;
            box-shadow: none;
            overflow-x: visible;
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
        @media print {
          .sheet-scroll-outer {
            overflow: visible !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .print-container {
            min-width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .timetable-scroll-wrapper {
            overflow: visible !important;
            margin-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }
      `}),t.jsxs("div",{className:"no-print public-top-nav",style:{background:"#065f46",color:"#fff",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",flexWrap:"wrap",gap:"10px"},children:[t.jsxs("div",{className:"public-top-nav-left",style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs(w,{to:p?"/dashboard":"/",style:{color:"#fff",display:"flex",alignItems:"center",gap:"6px",textDecoration:"none",fontSize:"14px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",whiteSpace:"nowrap"},children:[t.jsx(T,{size:16})," ",p?"ড্যাশবোর্ড":"হোমপেজ"]}),t.jsxs("span",{className:"public-top-nav-title",style:{fontSize:"18px",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap"},children:[t.jsx(I,{size:20})," উন্মুক্ত ক্লাস রুটিন"]})]}),t.jsxs("div",{className:"public-top-nav-right",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.25)",padding:"3px",borderRadius:"6px",gap:"3px"},children:[t.jsx("button",{type:"button",onClick:()=>j("portrait"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="portrait"?"#fff":"transparent",color:a==="portrait"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"📄 পোর্ট্রেট"}),t.jsx("button",{type:"button",onClick:()=>j("landscape"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="landscape"?"#fff":"transparent",color:a==="landscape"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"🖼️ ল্যান্ডস্কেপ"})]}),t.jsxs(w,{to:"/calendar",style:{color:"#fff",textDecoration:"none",fontSize:"13px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},children:[t.jsx(A,{size:15})," একাডেমিক ক্যালেন্ডার"]}),t.jsxs("button",{onClick:N,style:{display:"flex",alignItems:"center",gap:"6px",background:"#f59e0b",color:"#0f172a",border:"none",padding:"7px 16px",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"},children:[t.jsx(M,{size:16})," প্রিন্ট / PDF"]})]})]}),t.jsxs("div",{className:"no-print",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"20px auto 0",padding:"0 16px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[t.jsx("label",{style:{fontWeight:600,fontSize:"14px",color:"#334155"},children:"শ্রেণি নির্বাচন করুন:"}),t.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:g.map(i=>t.jsx("button",{onClick:()=>x(i._id),style:{padding:"6px 14px",borderRadius:"6px",fontSize:"13px",fontWeight:600,border:"1.5px solid",borderColor:s===i._id?"#059669":"#cbd5e1",background:s===i._id?"#059669":"#fff",color:s===i._id?"#fff":"#334155",cursor:"pointer",transition:"all 0.15s ease"},children:i.name},i._id))})]}),!((p==null?void 0:p.userType)==="student"||(p==null?void 0:p.userType)==="guardian")&&t.jsx("div",{className:"no-print",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"12px auto 0",padding:"0 16px"},children:t.jsx(D,{selectedRoles:y,onChange:S})}),t.jsxs("div",{className:"sheet-scroll-outer",children:[t.jsx("div",{style:{textAlign:"center"},children:t.jsx("div",{className:"mobile-scroll-hint no-print",children:"👈 সম্পূর্ণ পৃষ্ঠা দেখতে ডানে-বামে স্ক্রোল করুন 👉"})}),t.jsxs("div",{className:"print-container",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"16px auto",background:"#fff",padding:a==="landscape"?"18px 22px":"24px",borderRadius:"12px",boxShadow:"0 4px 6px -1px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"visible"},children:[t.jsx("img",{src:"/images/madrasah_logo.png",className:"print-watermark",alt:"ওয়াটারমার্ক",onError:i=>{i.currentTarget.src="/madrasah_logo.png"}}),t.jsxs("div",{className:"print-top-section",children:[t.jsx(L,{documentTitle:"দৈনিক ক্লাস রুটিন ও সময়সূচী",compact:a==="landscape",metaLeft:t.jsxs("span",{children:[t.jsx("strong",{children:"শ্রেণি:"})," ",_]}),metaRight:t.jsxs("span",{children:[t.jsx("strong",{children:"শিক্ষাবর্ষ:"})," ২০২৬ ইং"]})}),k?t.jsxs("div",{style:{padding:"60px 0",textAlign:"center",color:"#64748b"},children:[t.jsx(P,{className:"animate-spin",size:32,style:{margin:"0 auto 12px",color:"#059669"}}),t.jsx("p",{children:"ক্লাস রুটিন লোড হচ্ছে..."})]}):t.jsx("div",{className:"timetable-scroll-wrapper",children:t.jsxs("table",{className:"timetable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:"130px"},children:"সময় ও পিরিয়ড"}),t.jsx("th",{children:"শনিবার"}),t.jsx("th",{children:"রবিবার"}),t.jsx("th",{children:"সোমবার"}),t.jsx("th",{children:"মঙ্গলবার"}),t.jsx("th",{children:"বুধবার"}),t.jsx("th",{children:"বৃহস্পতিবার"})]})}),t.jsx("tbody",{children:v.length===0?F.map((i,o)=>t.jsxs("tr",{children:[t.jsxs("td",{style:{fontWeight:700,color:"#047857"},children:[t.jsx("div",{children:i.period}),t.jsx("div",{style:{fontSize:"11px",color:"#64748b",fontWeight:500},children:i.time})]}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"})]},o)):v.map((i,o)=>{if(i.isBreak)return t.jsxs("tr",{className:"break-row",children:[t.jsx("td",{style:{fontWeight:700},children:i.time}),t.jsxs("td",{colSpan:6,style:{textAlign:"center",padding:"6px",fontSize:"13px"},children:["☕ ",i.label||"বিরতি ও নাস্তা"]})]},o);const n=e=>{if(!e)return t.jsx("span",{style:{color:"#94a3b8"},children:"-"});if(typeof e=="string"){const r=e.trim();return r&&r!=="-"?r:t.jsx("span",{style:{color:"#94a3b8"},children:"-"})}return!e.subject||!e.subject.trim()||e.subject.trim()==="-"?t.jsx("span",{style:{color:"#94a3b8"},children:"-"}):t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:e.subject}),e.teacher&&e.teacher.trim()&&e.teacher.trim()!=="-"&&t.jsxs("div",{style:{fontSize:"11px",color:"#64748b",marginTop:"2px"},children:["(",e.teacher,")"]})]})};return t.jsxs("tr",{children:[t.jsxs("td",{style:{fontWeight:700,color:"#047857"},children:[t.jsxs("div",{children:["পিরিয়ড ",o+1]}),t.jsx("div",{style:{fontSize:"11px",color:"#64748b",fontWeight:500},children:i.time})]}),t.jsx("td",{children:n(i.sat)}),t.jsx("td",{children:n(i.sun)}),t.jsx("td",{children:n(i.mon)}),t.jsx("td",{children:n(i.tue)}),t.jsx("td",{children:n(i.wed)}),t.jsx("td",{children:n(i.thu)})]},o)})})]})})]}),t.jsx("div",{className:"print-footer-wrapper",style:{marginTop:"auto",paddingTop:a==="landscape"?"14px":"20px"},children:t.jsx($,{roles:y,style:{paddingTop:"10px"}})})]})]})]})}export{q as default};
