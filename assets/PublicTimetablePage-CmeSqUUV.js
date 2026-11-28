import{a as J,r as d,d as z,j as t,L,A as H,l as q,C as V,m as Y}from"./index-DAbD6heQ.js";import{g as _}from"./helpers-CljGnr5z.js";import{M as K}from"./MadrasahLetterhead-DTzdZ8Hg.js";import{P as Q}from"./PrintFooterSignatures-qbOJdvLL.js";import{D as X,P as Z}from"./PrintSignatureRoleSelector-DYjXfIgr.js";import{g as tt}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as et,p as P,a as it}from"./MatrixClassRoutineBuilder-DBSfhSch.js";import{P as $}from"./printer-CSaLK87O.js";import{L as E}from"./layout-grid-C83_mpQw.js";import{P as D}from"./plus-BhxVvvgr.js";import{S as at}from"./square-pen-Bc28z7vk.js";import{T as nt}from"./trash-2-DcDIfV-B.js";import"./save-Dz90KVGD.js";import"./circle-alert-BvSIZynn.js";const rt=[{period:"পিরিয়ড ১",time:"০৮:০০ - ০৮:৪৫"},{period:"পিরিয়ড ২",time:"০৮:৪৫ - ০৯:৩০"},{period:"পিরিয়ড ৩",time:"০৯:৩০ - ১০:১৫"},{period:"পিরিয়ড ৪",time:"১০:৪৫ - ১১:৩০"},{period:"পিরিয়ড ৫",time:"১১:৩০ - ১২:১৫"}];function jt(){const{user:r}=J(),[B,R]=d.useState(!0),[w,C]=d.useState([]),[x,k]=d.useState(""),[m,S]=d.useState({}),[c,u]=d.useState("class"),[W,h]=d.useState(!1),[y,b]=d.useState(null),[a,N]=d.useState("landscape"),[I,O]=d.useState(X);d.useEffect(()=>{F()},[]);const F=async()=>{var e,o;try{R(!0);const s=await z.get("/academics/public/timetable");if((e=s.data)!=null&&e.success){const i=s.data.data.classes||[];C(i);let n=s.data.data.timetable||{};if(!n||Object.keys(n).length===0)try{const p=localStorage.getItem("timetable_data");p&&(n=JSON.parse(p))}catch{}if(S(n),Array.isArray(n.__matrixRoutines)&&n.__matrixRoutines.length>0&&u("matrix"),i.length>0){const p=i.find(f=>{const g=n[f._id]||n[String(f._id)]||n[f.name];return Array.isArray(g)&&g.length>0});k(p?p._id:i[0]._id)}}}catch(s){console.error("Error loading public timetable:",s);let i={};try{const n=localStorage.getItem("timetable_data");n&&(i=JSON.parse(n))}catch{}S(i);try{const n=await z.get("/students/classes");if((o=n.data)!=null&&o.success){const p=n.data.data.classes||[];if(C(p),p.length>0){const f=p.find(g=>{const A=i[g._id]||i[String(g._id)]||i[g.name];return Array.isArray(A)&&A.length>0});k(f?f._id:p[0]._id)}}}catch{}}finally{R(!1)}},j=w.find(e=>String(e._id)===String(x)),U=j?j.name:"সকল শ্রেণি",T=x&&(m[x]||m[String(x)]||(j?m[j.name]:null))||[],v=["super_admin","co_super_admin","admin","principal","teacher"].includes(r==null?void 0:r.userType)||["co_super_admin","admin"].includes(r==null?void 0:r.adminRole),l=Array.isArray(m.__matrixRoutines)?m.__matrixRoutines:[],M=async e=>{const o={...m,__matrixRoutines:e};S(o),localStorage.setItem("timetable_data",JSON.stringify(o)),await z.put("/academics/timetable",{timetable:o})},G=()=>{if(c==="matrix"&&l.length>0){P(l[0],_(r).madrasahName);return}window.print()};return t.jsxs("div",{className:"public-routine-page-root",style:{minHeight:"100vh",background:"#f8fafc",color:"#0f172a",paddingBottom:"40px"},children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:tt(a,{wrap:!1})}}),t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"no-print public-top-nav",style:{background:"#065f46",color:"#fff",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",flexWrap:"wrap",gap:"10px"},children:[t.jsxs("div",{className:"public-top-nav-left",style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs(L,{to:r?"/dashboard":"/",style:{color:"#fff",display:"flex",alignItems:"center",gap:"6px",textDecoration:"none",fontSize:"14px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",whiteSpace:"nowrap"},children:[t.jsx(H,{size:16})," ",r?"ড্যাশবোর্ড":"হোমপেজ"]}),t.jsxs("span",{className:"public-top-nav-title",style:{fontSize:"18px",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap"},children:[t.jsx(q,{size:20})," উন্মুক্ত ক্লাস রুটিন"]})]}),t.jsxs("div",{className:"public-top-nav-right",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.25)",padding:"3px",borderRadius:"6px",gap:"3px"},children:[t.jsx("button",{type:"button",onClick:()=>N("portrait"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="portrait"?"#fff":"transparent",color:a==="portrait"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"📄 পোর্ট্রেট"}),t.jsx("button",{type:"button",onClick:()=>N("landscape"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:a==="landscape"?"#fff":"transparent",color:a==="landscape"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"🖼️ ল্যান্ডস্কেপ"})]}),t.jsxs(L,{to:"/calendar",style:{color:"#fff",textDecoration:"none",fontSize:"13px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},children:[t.jsx(V,{size:15})," একাডেমিক ক্যালেন্ডার"]}),t.jsxs("button",{onClick:G,style:{display:"flex",alignItems:"center",gap:"6px",background:"#f59e0b",color:"#0f172a",border:"none",padding:"7px 16px",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"},children:[t.jsx($,{size:16})," প্রিন্ট / PDF"]})]})]}),t.jsxs("div",{className:"no-print",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"20px auto 0",padding:"0 16px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[t.jsx("label",{style:{fontWeight:600,fontSize:"14px",color:"#334155"},children:"রুটিন / শ্রেণি নির্বাচন:"}),t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsxs("button",{type:"button",onClick:()=>u("matrix"),style:{padding:"6px 14px",borderRadius:"6px",fontSize:"13px",fontWeight:700,border:"1.5px solid",borderColor:c==="matrix"?"#059669":"#cbd5e1",background:c==="matrix"?"#059669":"#fff",color:c==="matrix"?"#fff":"#065f46",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(E,{size:14})," সম্মিলিত রুটিন (Matrix) ",l.length>0?`(${l.length})`:""]}),w.map(e=>t.jsx("button",{onClick:()=>{u("class"),k(e._id)},style:{padding:"6px 14px",borderRadius:"6px",fontSize:"13px",fontWeight:600,border:"1.5px solid",borderColor:c==="class"&&x===e._id?"#059669":"#cbd5e1",background:c==="class"&&x===e._id?"#059669":"#fff",color:c==="class"&&x===e._id?"#fff":"#334155",cursor:"pointer",transition:"all 0.15s ease"},children:e.name},e._id))]})]}),v&&t.jsxs("button",{type:"button",onClick:()=>{u("matrix"),b(null),h(e=>!e)},style:{padding:"7px 14px",borderRadius:"6px",fontSize:"13px",fontWeight:700,border:"none",background:"#059669",color:"#fff",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(D,{size:15})," সম্মিলিত রুটিন তৈরি"]})]}),c==="matrix"&&t.jsxs("div",{className:"no-print",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"16px auto",padding:"0 16px",display:"flex",flexDirection:"column",gap:"16px"},children:[v&&W&&t.jsx(et,{initialMatrix:y,classes:w,madrasahName:_(r).madrasahName,onSave:async e=>{const s=l.some(i=>i.id===e.id)?l.map(i=>i.id===e.id?e:i):[e,...l];await M(s),h(!1),b(null)},onClose:()=>{h(!1),b(null)}},(y==null?void 0:y.id)||"public-new-matrix"),l.length===0?!W&&t.jsxs("div",{style:{background:"#fff",padding:"40px 20px",borderRadius:"12px",border:"1px solid #e2e8f0",textAlign:"center",color:"#64748b"},children:[t.jsx(E,{size:40,style:{margin:"0 auto 10px",opacity:.4}}),t.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#334155",marginBottom:"6px"},children:"এখনো কোনো সম্মিলিত ক্লাস রুটিন (Matrix) তৈরি করা হয়নি"}),v&&t.jsxs("button",{type:"button",onClick:()=>{b(null),h(!0)},style:{marginTop:"10px",padding:"8px 16px",borderRadius:"8px",border:"none",background:"#059669",color:"#fff",fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(D,{size:16})," নতুন সম্মিলিত ক্লাস রুটিন তৈরি করুন"]})]}):l.map(e=>t.jsxs("div",{style:{background:"#fff",padding:"20px",borderRadius:"12px",border:"1px solid #e2e8f0",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px",paddingBottom:"10px",borderBottom:"1px solid #e2e8f0"},children:[t.jsx("h3",{style:{margin:0,fontSize:"1.15rem",fontWeight:800,color:"#0f172a"},children:e.title}),t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsxs("button",{type:"button",onClick:()=>P(e,_(r).madrasahName),style:{padding:"6px 12px",borderRadius:"6px",border:"1px solid #cbd5e1",background:"#f8fafc",color:"#0f172a",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"13px"},children:[t.jsx($,{size:14})," প্রিন্ট"]}),v&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",onClick:()=>{b(e),h(!0)},style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#eff6ff",color:"#2563eb",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"13px"},children:[t.jsx(at,{size:14})," সম্পাদনা"]}),t.jsxs("button",{type:"button",onClick:()=>M(l.filter(o=>o.id!==e.id)),style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#fef2f2",color:"#dc2626",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"13px"},children:[t.jsx(nt,{size:14})," মুছুন"]})]})]})]}),t.jsx(it,{matrix:e})]},e.id))]}),c==="class"&&t.jsxs(t.Fragment,{children:[!((r==null?void 0:r.userType)==="student"||(r==null?void 0:r.userType)==="guardian")&&t.jsx("div",{className:"no-print",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"12px auto 0",padding:"0 16px"},children:t.jsx(Z,{selectedRoles:I,onChange:O})}),t.jsxs("div",{className:"sheet-scroll-outer",children:[t.jsx("div",{style:{textAlign:"center"},children:t.jsx("div",{className:"mobile-scroll-hint no-print",children:"👈 সম্পূর্ণ পৃষ্ঠা দেখতে ডানে-বামে স্ক্রোল করুন 👉"})}),t.jsxs("div",{className:"print-container",style:{maxWidth:a==="portrait"?"860px":"1100px",margin:"16px auto",background:"#fff",padding:a==="landscape"?"18px 22px":"24px",borderRadius:"12px",boxShadow:"0 4px 6px -1px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative",overflow:"visible"},children:[t.jsx("img",{src:"/images/madrasah_logo.png",className:"print-watermark",alt:"ওয়াটারমার্ক",onError:e=>{e.currentTarget.src="/madrasah_logo.png"}}),t.jsxs("div",{className:"print-top-section",children:[t.jsx(K,{documentTitle:"দৈনিক ক্লাস রুটিন ও সময়সূচী",compact:a==="landscape",metaLeft:t.jsxs("span",{children:[t.jsx("strong",{children:"শ্রেণি:"})," ",U]}),metaRight:t.jsxs("span",{children:[t.jsx("strong",{children:"শিক্ষাবর্ষ:"})," ২০২৬ ইং"]})}),B?t.jsxs("div",{style:{padding:"60px 0",textAlign:"center",color:"#64748b"},children:[t.jsx(Y,{className:"animate-spin",size:32,style:{margin:"0 auto 12px",color:"#059669"}}),t.jsx("p",{children:"ক্লাস রুটিন লোড হচ্ছে..."})]}):t.jsx("div",{className:"timetable-scroll-wrapper",children:t.jsxs("table",{className:"timetable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:"130px"},children:"সময় ও পিরিয়ড"}),t.jsx("th",{children:"শনিবার"}),t.jsx("th",{children:"রবিবার"}),t.jsx("th",{children:"সোমবার"}),t.jsx("th",{children:"মঙ্গলবার"}),t.jsx("th",{children:"বুধবার"}),t.jsx("th",{children:"বৃহস্পতিবার"})]})}),t.jsx("tbody",{children:T.length===0?rt.map((e,o)=>t.jsxs("tr",{children:[t.jsxs("td",{style:{fontWeight:700,color:"#047857"},children:[t.jsx("div",{children:e.period}),t.jsx("div",{style:{fontSize:"11px",color:"#64748b",fontWeight:500},children:e.time})]}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"}),t.jsx("td",{style:{color:"#94a3b8"},children:"-"})]},o)):T.map((e,o)=>{if(e.isBreak)return t.jsxs("tr",{className:"break-row",children:[t.jsx("td",{style:{fontWeight:700},children:e.time}),t.jsxs("td",{colSpan:6,style:{textAlign:"center",padding:"6px",fontSize:"13px"},children:["☕ ",e.label||"বিরতি ও নাস্তা"]})]},o);const s=i=>{if(!i)return t.jsx("span",{style:{color:"#94a3b8"},children:"-"});if(typeof i=="string"){const n=i.trim();return n&&n!=="-"?n:t.jsx("span",{style:{color:"#94a3b8"},children:"-"})}return!i.subject||!i.subject.trim()||i.subject.trim()==="-"?t.jsx("span",{style:{color:"#94a3b8"},children:"-"}):t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:i.subject}),i.teacher&&i.teacher.trim()&&i.teacher.trim()!=="-"&&t.jsxs("div",{style:{fontSize:"11px",color:"#64748b",marginTop:"2px"},children:["(",i.teacher,")"]})]})};return t.jsxs("tr",{children:[t.jsxs("td",{style:{fontWeight:700,color:"#047857"},children:[t.jsxs("div",{children:["পিরিয়ড ",o+1]}),t.jsx("div",{style:{fontSize:"11px",color:"#64748b",fontWeight:500},children:e.time})]}),t.jsx("td",{children:s(e.sat)}),t.jsx("td",{children:s(e.sun)}),t.jsx("td",{children:s(e.mon)}),t.jsx("td",{children:s(e.tue)}),t.jsx("td",{children:s(e.wed)}),t.jsx("td",{children:s(e.thu)})]},o)})})]})})]}),t.jsx("div",{className:"print-footer-wrapper",style:{marginTop:"auto",paddingTop:a==="landscape"?"14px":"20px"},children:t.jsx(Q,{roles:I,style:{paddingTop:"10px"}})})]})]})]})]})}export{jt as default};
