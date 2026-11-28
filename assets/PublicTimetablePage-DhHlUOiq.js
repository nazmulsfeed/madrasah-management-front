import{a as E,r as l,d as v,j as t,L as M,A as P,l as D,C as O}from"./index-CTwZ9NWe.js";import{g as j}from"./helpers-CljGnr5z.js";import{D as F}from"./PrintSignatureRoleSelector-DkrEUUC2.js";import{g as J}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as G,p as N,a as H}from"./MatrixClassRoutineBuilder-I-_wGm0i.js";import{P as T}from"./printer-BjirzX1D.js";import{L as A}from"./layout-grid-B9zyqqsg.js";import{P as L}from"./plus-B5LjGYHD.js";import{S as U}from"./square-pen-DaWmKloC.js";import{T as q}from"./trash-2-DQXveTQh.js";import"./save-B4HHl_gQ.js";import"./circle-alert-BQiOdhK2.js";function lt(){const{user:o}=E(),[K,k]=l.useState(!0),[S,z]=l.useState([]),[b,_]=l.useState(""),[c,w]=l.useState({}),[R,f]=l.useState(!1),[u,g]=l.useState(null),[i,I]=l.useState("landscape"),[Q,V]=l.useState(F);l.useEffect(()=>{$()},[]);const $=async()=>{var e,s;try{k(!0);const d=await v.get("/academics/public/timetable");if((e=d.data)!=null&&e.success){const a=d.data.data.classes||[];z(a);let n=d.data.data.timetable||{};if(!n||Object.keys(n).length===0)try{const r=localStorage.getItem("timetable_data");r&&(n=JSON.parse(r))}catch{}if(w(n),a.length>0){const r=a.find(m=>{const x=n[m._id]||n[String(m._id)]||n[m.name];return Array.isArray(x)&&x.length>0});_(r?r._id:a[0]._id)}}}catch(d){console.error("Error loading public timetable:",d);let a={};try{const n=localStorage.getItem("timetable_data");n&&(a=JSON.parse(n))}catch{}w(a);try{const n=await v.get("/students/classes");if((s=n.data)!=null&&s.success){const r=n.data.data.classes||[];if(z(r),r.length>0){const m=r.find(x=>{const W=a[x._id]||a[String(x._id)]||a[x.name];return Array.isArray(W)&&W.length>0});_(m?m._id:r[0]._id)}}}catch{}}finally{k(!1)}},h=S.find(e=>String(e._id)===String(b));h&&h.name,b&&(c[b]||c[String(b)]||h&&c[h.name]);const y=["super_admin","co_super_admin","admin","principal","teacher"].includes(o==null?void 0:o.userType)||["co_super_admin","admin"].includes(o==null?void 0:o.adminRole),p=Array.isArray(c.__matrixRoutines)?c.__matrixRoutines:[],C=async e=>{const s={...c,__matrixRoutines:e};w(s),localStorage.setItem("timetable_data",JSON.stringify(s)),await v.put("/academics/timetable",{timetable:s})},B=()=>{if(viewMode==="matrix"&&p.length>0){N(p[0],j(o).madrasahName);return}window.print()};return t.jsxs("div",{className:"public-routine-page-root",style:{minHeight:"100vh",background:"#f8fafc",color:"#0f172a",paddingBottom:"40px"},children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:J(i,{wrap:!1})}}),t.jsx("style",{children:`
        @page {
          size: A4 ${i};
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
            min-height: ${i==="landscape"?"196.5mm":"283.5mm"} !important;
            height: ${i==="landscape"?"196.5mm":"283.5mm"} !important;
            max-height: ${i==="landscape"?"196.5mm":"283.5mm"} !important;
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
            width: ${i==="landscape"?"360px":"420px"} !important;
            height: ${i==="landscape"?"360px":"420px"} !important;
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
            margin-top: ${i==="landscape"?"8px":"12px"} !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            background: transparent !important;
          }
          .timetable-table tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .timetable-table th, .timetable-table td {
            padding: ${i==="landscape"?"4.5px 6px":"6.5px 8px"} !important;
            font-size: ${i==="landscape"?"11px":"12.5px"} !important;
            line-height: 1.25 !important;
          }
          .break-row td {
            padding: ${i==="landscape"?"4px 6px":"6px"} !important;
            font-size: ${i==="landscape"?"11.5px":"12.5px"} !important;
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
            min-width: ${i==="landscape"?"880px":"700px"} !important;
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
      `}),t.jsxs("div",{className:"no-print public-top-nav",style:{background:"#065f46",color:"#fff",padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",flexWrap:"wrap",gap:"10px"},children:[t.jsxs("div",{className:"public-top-nav-left",style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs(M,{to:o?"/dashboard":"/",style:{color:"#fff",display:"flex",alignItems:"center",gap:"6px",textDecoration:"none",fontSize:"14px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",whiteSpace:"nowrap"},children:[t.jsx(P,{size:16})," ",o?"ড্যাশবোর্ড":"হোমপেজ"]}),t.jsxs("span",{className:"public-top-nav-title",style:{fontSize:"18px",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap"},children:[t.jsx(D,{size:20})," উন্মুক্ত ক্লাস রুটিন"]})]}),t.jsxs("div",{className:"public-top-nav-right",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"inline-flex",background:"rgba(0,0,0,0.25)",padding:"3px",borderRadius:"6px",gap:"3px"},children:[t.jsx("button",{type:"button",onClick:()=>I("portrait"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:i==="portrait"?"#fff":"transparent",color:i==="portrait"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"📄 পোর্ট্রেট"}),t.jsx("button",{type:"button",onClick:()=>I("landscape"),style:{padding:"4px 10px",borderRadius:"4px",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:i==="landscape"?"#fff":"transparent",color:i==="landscape"?"#065f46":"#fff",transition:"all 0.15s ease"},children:"🖼️ ল্যান্ডস্কেপ"})]}),t.jsxs(M,{to:"/calendar",style:{color:"#fff",textDecoration:"none",fontSize:"13px",background:"rgba(255,255,255,0.15)",padding:"6px 12px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"6px",whiteSpace:"nowrap"},children:[t.jsx(O,{size:15})," একাডেমিক ক্যালেন্ডার"]}),t.jsxs("button",{onClick:B,style:{display:"flex",alignItems:"center",gap:"6px",background:"#f59e0b",color:"#0f172a",border:"none",padding:"7px 16px",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap"},children:[t.jsx(T,{size:16})," প্রিন্ট / PDF"]})]})]}),t.jsxs("div",{className:"no-print",style:{maxWidth:i==="portrait"?"860px":"1100px",margin:"20px auto 0",padding:"0 16px",display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx(A,{size:18,style:{color:"#059669"}}),t.jsxs("span",{style:{fontWeight:700,fontSize:"15px",color:"#0f172a"},children:["সম্মিলিত ক্লাস রুটিন (",p.length,")"]})]}),y&&t.jsxs("button",{type:"button",onClick:()=>{g(null),f(e=>!e)},style:{padding:"7px 14px",borderRadius:"6px",fontSize:"13px",fontWeight:700,border:"none",background:"#059669",color:"#fff",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(L,{size:15})," সম্মিলিত রুটিন তৈরি"]})]}),t.jsxs("div",{className:"no-print",style:{maxWidth:i==="portrait"?"860px":"1100px",margin:"16px auto",padding:"0 16px",display:"flex",flexDirection:"column",gap:"16px"},children:[y&&R&&t.jsx(G,{initialMatrix:u,classes:S,madrasahName:j(o).madrasahName,onSave:async e=>{const d=p.some(a=>a.id===e.id)?p.map(a=>a.id===e.id?e:a):[e,...p];await C(d),f(!1),g(null)},onClose:()=>{f(!1),g(null)}},(u==null?void 0:u.id)||"public-new-matrix"),p.length===0?!R&&t.jsxs("div",{style:{background:"#fff",padding:"40px 20px",borderRadius:"12px",border:"1px solid #e2e8f0",textAlign:"center",color:"#64748b"},children:[t.jsx(A,{size:40,style:{margin:"0 auto 10px",opacity:.4}}),t.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#334155",marginBottom:"6px"},children:"এখনো কোনো সম্মিলিত ক্লাস রুটিন (Matrix) তৈরি করা হয়নি"}),y&&t.jsxs("button",{type:"button",onClick:()=>{g(null),f(!0)},style:{marginTop:"10px",padding:"8px 16px",borderRadius:"8px",border:"none",background:"#059669",color:"#fff",fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(L,{size:16})," নতুন সম্মিলিত ক্লাস রুটিন তৈরি করুন"]})]}):p.map(e=>t.jsxs("div",{style:{background:"#fff",padding:"20px",borderRadius:"12px",border:"1px solid #e2e8f0",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px",paddingBottom:"10px",borderBottom:"1px solid #e2e8f0"},children:[t.jsx("h3",{style:{margin:0,fontSize:"1.15rem",fontWeight:800,color:"#0f172a"},children:e.title}),t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsxs("button",{type:"button",onClick:()=>N(e,j(o).madrasahName),style:{padding:"6px 12px",borderRadius:"6px",border:"1px solid #cbd5e1",background:"#f8fafc",color:"#0f172a",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"13px"},children:[t.jsx(T,{size:14})," প্রিন্ট"]}),y&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",onClick:()=>{g(e),f(!0)},style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#eff6ff",color:"#2563eb",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"13px"},children:[t.jsx(U,{size:14})," সম্পাদনা"]}),t.jsxs("button",{type:"button",onClick:()=>C(p.filter(s=>s.id!==e.id)),style:{padding:"6px 10px",borderRadius:"6px",border:"none",background:"#fef2f2",color:"#dc2626",fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"13px"},children:[t.jsx(q,{size:14})," মুছুন"]})]})]})]}),t.jsx(H,{matrix:e})]},e.id))]})]})}export{lt as default};
