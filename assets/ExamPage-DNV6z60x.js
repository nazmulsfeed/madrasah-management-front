import{k as qa,r as o,j as e,J as Ws,K as Va,i as Ls,d as G,a as Za,F as mt,U as Oa,C as Rt,N as Da,O as yn,u as jn,w as vn,y as Nn,A as js,P as ls,b as Is,R as Ds,G as wn,X as kn,l as Ha}from"./index-SpZNon7l.js";import{g as Vs,b as He,p as Jt,f as Xt,t as Qe}from"./helpers-CljGnr5z.js";import{L as Ht}from"./layout-grid-TT2t18JY.js";import{R as Ms}from"./rotate-cw-DEW7LljL.js";import{P as Je}from"./printer-Cnr6ZXO7.js";import{S as Qa}from"./sliders-vertical-DTn_K_qy.js";import{S as Ja}from"./square-b8-C4MZP.js";import{C as Sn}from"./circle-check-BeCk8S7-.js";import{S as zn}from"./sparkles-BgZ-AP6B.js";import{L as Cn}from"./layers-C6EH7MCw.js";import{E as In}from"./eye-BhRF8-dU.js";import{Z as _n}from"./zoom-out-bbYxCw8m.js";import{Z as $n}from"./zoom-in-p1REQfwO.js";import{S as vs}from"./constants-C6HvYUtm.js";import{g as rs,a as os,b as ds}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as An}from"./MadrasahLetterhead-BVd0Yp8N.js";import{P as Wn}from"./PrintSignatureRoleSelector-qhoF3k8G.js";import{P as Ln}from"./PrintFooterSignatures-DiGd7I4r.js";import{C as Ns}from"./circle-alert-BNuAuzKS.js";import{T as Qt}from"./trophy-Cw8DDdxJ.js";import{S as Hs}from"./square-pen-Cryu9_HD.js";import{S as Mn}from"./save-DSMObNUk.js";import{P as cs}from"./plus-heqH6J6n.js";import{T as _s}from"./trash-2-B-W1awWA.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=qa("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=qa("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Gs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Ys='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Ya({selectedExam:C=null,classes:Y=[],user:K=null}){var H;const I=o.useMemo(()=>Vs(K),[K]),xt=o.useMemo(()=>Array.isArray(Y)?Y:Y&&Array.isArray(Y.classes)?Y.classes:[],[Y]),[_e,ze]=o.useState([]),[ht,X]=o.useState((C==null?void 0:C._id)||""),[Xe,$e]=o.useState(((H=C==null?void 0:C.classLevel)==null?void 0:H._id)||(C==null?void 0:C.classLevel)||""),[zt,We]=o.useState([]),[T,Le]=o.useState("all"),[Ke,Ct]=o.useState("all"),[et,It]=o.useState((C==null?void 0:C.academicYear)||"2026"),[Gt,Ge]=o.useState((C==null?void 0:C.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[gt,P]=o.useState(!1),[ae,Z]=o.useState([]),[Te,f]=o.useState(new Set),[Tt,ne]=o.useState({}),[_t,ft]=o.useState(""),[Et,ue]=o.useState(!0),[$t,_]=o.useState(!0),[At,nt]=o.useState(!0),[Fe,Ye]=o.useState(!0),[tt,ye]=o.useState(!0),[ut,Ae]=o.useState(!0),[bt,Yt]=o.useState(!0),[yt,jt]=o.useState(!0),[Bt,E]=o.useState(!0),[oe,Ee]=o.useState(!0),[Pt,st]=o.useState(!0),[it,V]=o.useState(10),[Ue,D]=o.useState(!0),[Kt,Ut]=o.useState("10"),[qe,we]=o.useState("theme-classic"),[Ft,je]=o.useState("logo-left"),[Q,Ce]=o.useState(!1),[ie,he]=o.useState(()=>{try{const c=parseInt(localStorage.getItem("seat_plan_font_scale"),10);if(!isNaN(c)&&c>=80&&c<=140)return c}catch{}return 100});o.useEffect(()=>{try{localStorage.setItem("seat_plan_font_scale",String(ie))}catch{}},[ie]);const[lt,qt]=o.useState("১০১"),[Vt,rt]=o.useState(`1-20: 101
21-40: 102
41-60: 103`),[es,Me]=o.useState(!1);o.useEffect(()=>{(async()=>{var j,b,F,R,L;try{const O=await G.get("/exams",{params:{limit:100}}),A=((b=(j=O.data)==null?void 0:j.data)==null?void 0:b.exams)||((F=O.data)==null?void 0:F.exams)||((R=O.data)==null?void 0:R.data)||[],ee=Array.isArray(A)?A:[];if(ze(ee),!ht&&ee.length>0&&(X(ee[0]._id),Ge(ee[0].name),ee[0].academicYear&&It(ee[0].academicYear),ee[0].classLevel)){const te=((L=ee[0].classLevel)==null?void 0:L._id)||ee[0].classLevel;$e(te)}}catch(O){console.error("Failed to fetch exams for seat plan:",O),ze([])}})()},[]),o.useEffect(()=>{var c;if(ht&&Array.isArray(_e)&&_e.length>0){const j=_e.find(b=>b._id===ht);if(j&&(Ge(j.name||"বার্ষিক পরীক্ষা - ২০২৬"),j.academicYear&&It(j.academicYear),j.classLevel)){const b=((c=j.classLevel)==null?void 0:c._id)||j.classLevel;$e(b)}}},[ht,_e]),o.useEffect(()=>{if(!Xe){We([]);return}(async()=>{var j,b,F,R;try{const L=await G.get(`/students/sections?classLevel=${Xe}`),O=((b=(j=L.data)==null?void 0:j.data)==null?void 0:b.sections)||((F=L.data)==null?void 0:F.sections)||((R=L.data)==null?void 0:R.data)||[];We(Array.isArray(O)?O:[])}catch(L){console.warn("Failed to load sections:",L),We([])}})()},[Xe]);const vt=async()=>{var c,j,b,F;P(!0);try{const R={limit:500};Xe&&(R.classLevel=Xe),T&&T!=="all"&&(R.section=T);const L=await G.get("/students",{params:R}),O=((j=(c=L.data)==null?void 0:c.data)==null?void 0:j.students)||((b=L.data)==null?void 0:b.students)||((F=L.data)==null?void 0:F.data)||[];let A=Array.isArray(O)?O:[];Ke&&Ke!=="all"&&(A=A.filter(le=>{var Be;return(le.department||((Be=le.currentEnrollment)==null?void 0:Be.department)||"").toLowerCase().includes(Ke.toLowerCase())})),A.sort((le,xe)=>{var wt,dt;const Be=He(((wt=le.currentEnrollment)==null?void 0:wt.rollNumber)||le.rollNumber||le.roll),Ve=He(((dt=xe.currentEnrollment)==null?void 0:dt.rollNumber)||xe.rollNumber||xe.roll);return Be-Ve}),Z(A);const ee=new Set(A.map(le=>le._id));f(ee);const te={};A.forEach(le=>{te[le._id]=lt||"১০১"}),ne(te)}catch(R){console.error("Failed to load students for seat plan:",R),Z([]),f(new Set)}finally{P(!1)}};o.useEffect(()=>{Xe&&vt()},[Xe,T,Ke]);const Nt=()=>{Te.size===ae.length?f(new Set):f(new Set(ae.map(c=>c._id)))},ts=()=>{const c=lt.trim();c&&ne(j=>{const b={...j};return Te.forEach(F=>{b[F]=c}),b})},ot=()=>{const c=Vt.split(`
`),j={...Tt};c.forEach(b=>{const F=b.split(":");if(F.length===2){const R=F[0].trim(),L=F[1].trim(),O=R.match(/(\d+)\s*[-–—]\s*(\d+)/);if(O&&L){const A=parseInt(O[1],10),ee=parseInt(O[2],10);ae.forEach(te=>{var Be;const le=Jt(((Be=te.currentEnrollment)==null?void 0:Be.rollNumber)||te.rollNumber||te.roll||"0"),xe=parseInt(le,10);!isNaN(xe)&&xe>=A&&xe<=ee&&(j[te._id]=L)})}}}),ne(j),Me(!1)},i=o.useMemo(()=>ae.filter(c=>{var L,O;if(!Te.has(c._id))return!1;if(!_t)return!0;const j=_t.toLowerCase(),b=(c.fullName||((L=c.user)==null?void 0:L.fullName)||c.name||"").toLowerCase(),F=String(((O=c.currentEnrollment)==null?void 0:O.rollNumber)||c.rollNumber||c.roll||"").toLowerCase(),R=String(c.studentId||c.admissionNumber||"").toLowerCase();return b.includes(j)||F.includes(j)||R.includes(j)}),[ae,Te,_t]),h=c=>{V(c),D(!1),Ut(String(c))},y=c=>{Ut(c);const j=parseInt(c,10);!isNaN(j)&&j>0&&j<=30&&(V(j),D(!0))},J=o.useMemo(()=>{const c=it;let j=3,b=4;return c<=4||c<=6||c<=8?(j=2,b=Math.ceil(c/2)):c<=10?(j=2,b=5):c<=12?(j=3,b=4):c<=15?(j=3,b=5):c<=16?(j=4,b=4):(j=4,b=Math.ceil(c/4)),{cols:j,rows:b,count:c}},[it]),M=o.useMemo(()=>{const c=[],j=it;for(let b=0;b<i.length;b+=j)c.push(i.slice(b,b+j));return c},[i,it]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card no-print sp-toolbar-card",children:[e.jsxs("div",{className:"sp-header-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,color:"#065f46",display:"flex",alignItems:"center",gap:"8px",margin:0},children:[e.jsx(Ht,{size:20,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",margin:"2px 0 0 0"},children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:()=>Ce(!Q),children:["🌐 ",Q?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:vt,disabled:gt,children:[e.jsx(Ms,{size:14,className:gt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",style:{background:"#059669",borderColor:"#059669",fontSize:"0.8rem",fontWeight:700,padding:"7px 16px",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:()=>window.print(),children:[e.jsx(Je,{size:15}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"sp-filters-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:ht,onChange:c=>X(c.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(_e)?_e:[]).map(c=>{const j=c.academicYear&&!/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(c.academicYear))?c.academicYear:new Date().getFullYear();return e.jsxs("option",{value:c._id,children:[c.name," (",j,")"]},c._id)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Xe,onChange:c=>$e(c.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(xt)?xt:[]).map(c=>e.jsx("option",{value:c._id,children:c.name},c._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:T,onChange:c=>Le(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(zt)?zt:[]).map(c=>e.jsx("option",{value:c._id||c.name,children:c.name},c._id||c.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Ke,onChange:c=>Ct(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"sp-toggles-section",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"7px",fontSize:"0.75rem",fontWeight:700,color:"#334155"},children:[e.jsx(Qa,{size:13,style:{color:"#059669"}}),e.jsx("span",{children:"কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):"})]}),e.jsx("div",{className:"sp-toggles-wrap",children:[{checked:Et,onChange:ue,label:"কক্ষ নম্বর"},{checked:$t,onChange:_,label:"পরীক্ষার নাম"},{checked:At,onChange:nt,label:"বিভাগ / গ্রুপ"},{checked:Fe,onChange:Ye,label:"শিক্ষার্থীর ছবি"},{checked:tt,onChange:ye,label:"আইডি নম্বর"},{checked:ut,onChange:Ae,label:"শ্রেণি"},{checked:bt,onChange:Yt,label:"শাখা"},{checked:yt,onChange:jt,label:"সেশন"},{checked:Bt,onChange:E,label:"বড় রোল বক্স"},{checked:oe,onChange:Ee,label:"কাটিং দাগ (✂)"},{checked:Pt,onChange:st,label:"লোগো ওয়াটারমার্ক"}].map((c,j)=>e.jsxs("label",{className:`sp-toggle-pill ${c.checked?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.checked,onChange:b=>c.onChange(b.target.checked),style:{accentColor:"#059669",margin:0}}),e.jsx("span",{children:c.label})]},j))})]}),e.jsxs("div",{className:"sp-controls-grid",children:[e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",flexWrap:"wrap",gap:"6px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Ws,{size:15,style:{color:"#059669"}}),"কক্ষ নম্বর নির্ধারণ (Room)"]}),e.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#047857",textDecoration:"underline",fontWeight:600,fontSize:"0.75rem",cursor:"pointer",padding:0},onClick:()=>Me(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"90px",fontSize:"0.8rem",padding:"5px 8px",textAlign:"center",fontWeight:700},value:lt,onChange:c=>qt(c.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px"},onClick:ts,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",margin:"6px 0 0 0"},children:"টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।"})]}),e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Ht,{size:15,style:{color:"#059669"}}),"A4 পেজে কার্ড ও ফন্ট সাইজ:"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"6px",padding:"2px 6px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.74rem",marginRight:"2px"},children:"ফন্ট:"}),e.jsx("button",{type:"button",onClick:()=>he(c=>Math.max(80,c-5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{fontWeight:700,color:"#047857",minWidth:"36px",textAlign:"center",fontSize:"0.75rem"},children:[ie,"%"]}),e.jsx("button",{type:"button",onClick:()=>he(c=>Math.min(140,c+5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট বড় করুন",children:"A+"}),ie!==100&&e.jsx("button",{type:"button",onClick:()=>he(100),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#ecfdf5",fontWeight:600,fontSize:"0.72rem",cursor:"pointer",color:"#047857"},title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"প্রিসেট:"}),[{val:10,label:"১০টি (২×৫)"},{val:12,label:"১২টি (৩×৪)"},{val:8,label:"৮টি (২×৪)"},{val:6,label:"৬টি (২×৩)"}].map(c=>{const j=it===c.val&&!Ue;return e.jsx("button",{type:"button",className:`btn ${j?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.74rem",padding:"4px 9px",...j?{background:"#059669",borderColor:"#059669"}:{}},onClick:()=>h(c.val),children:c.label},c.val)}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"কাস্টম:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:Kt,onChange:c=>y(c.target.value),className:"form-input",style:{width:"54px",fontSize:"0.78rem",padding:"4px 6px",textAlign:"center",fontWeight:700}})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",paddingTop:"6px",borderTop:"1px solid #e2e8f0",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"থিম:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:qe==="theme-classic",onChange:()=>we("theme-classic")}),e.jsx("span",{children:"ক্লাসিক"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#047857",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:qe==="theme-emerald",onChange:()=>we("theme-emerald")}),e.jsx("span",{children:"গ্রিন"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#1e40af",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:qe==="theme-navy",onChange:()=>we("theme-navy")}),e.jsx("span",{children:"নেভি"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"বিন্যাস:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Ft==="logo-left",onChange:()=>je("logo-left")}),e.jsx("span",{style:{color:"#047857",fontWeight:600},children:"বামে লোগো"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Ft==="photo-left",onChange:()=>je("photo-left")}),e.jsx("span",{children:"বামে ছবি"})]})]})]})]})]}),e.jsxs("div",{className:"sp-summary-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Nt,children:[Te.size===ae.length?e.jsx(Va,{size:14}):e.jsx(Ja,{size:14}),e.jsx("span",{children:Te.size===ae.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{style:{fontWeight:600,color:"#334155",fontSize:"0.8rem"},children:["মোট শিক্ষার্থী: ",e.jsx("strong",{style:{color:"#047857"},children:ae.length})," জন | নির্বাচিত: ",e.jsx("strong",{style:{color:"#047857"},children:Te.size})," জন",i.length>0&&e.jsxs("span",{style:{marginLeft:"6px",color:"#64748b"},children:["(মোট ",e.jsx("strong",{children:M.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsxs("div",{style:{position:"relative",minWidth:"210px"},children:[e.jsx(Ls,{size:14,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:_t,onChange:c=>ft(c.target.value),className:"form-input",style:{fontSize:"0.8rem",padding:"5px 10px 5px 30px",width:"100%"}})]})]})]}),es&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Ws,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:Vt,onChange:c=>rt(c.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>Me(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:ot,children:"রুম ভাগ করুন"})]})]})}),gt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):i.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${qe}`,children:(Array.isArray(M)?M:[]).map((c,j)=>e.jsx("div",{className:`seat-plan-a4-sheet ${oe?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${J.cols}, 1fr)`,gridTemplateRows:`repeat(${J.rows}, 1fr)`,gap:it<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(c)?c:[]).map(b=>{var xe,Be,Ve,wt,dt,ms,Ot,ws,ks,Zt,ss,xs,as,hs,Rs;const F=b.fullName||((xe=b.user)==null?void 0:xe.fullName)||`${((Be=b.user)==null?void 0:Be.firstName)||""} ${((Ve=b.user)==null?void 0:Ve.lastName)||""}`.trim()||b.name||"—",R=((wt=b.currentEnrollment)==null?void 0:wt.rollNumber)||b.rollNumber||b.roll||"—",L=b.studentId||b.admissionNumber||((dt=b._id)==null?void 0:dt.substring(0,6))||"—",O=((Ot=(ms=b.currentEnrollment)==null?void 0:ms.classLevel)==null?void 0:Ot.name)||((ws=b.classLevel)==null?void 0:ws.name)||b.class||"—",A=((Zt=(ks=b.currentEnrollment)==null?void 0:ks.section)==null?void 0:Zt.name)||((ss=b.currentEnrollment)==null?void 0:ss.section)||((xs=b.section)==null?void 0:xs.name)||b.section||"—",ee=b.department||((as=b.currentEnrollment)==null?void 0:as.department)||"সাধারণ",te=Tt[b._id]||lt||"১০১",le=Fe&&(b.photo||(hs=b.user)!=null&&hs.photo)?b.photo||((Rs=b.user)==null?void 0:Rs.photo):Gs;return e.jsxs("div",{className:"seat-plan-card",children:[Pt&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ze=>{Ze.currentTarget.src=Ys},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:Ft==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ze=>{Ze.currentTarget.src=Ys},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:Q?"AN-NUR ISLAMIC ACADEMY":I.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:Q?"Shahibag, Chapainawabganj":I.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:Q?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),Fe?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:le,onError:Ze=>{Ze.currentTarget.src=Gs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[Fe?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:le,onError:Ze=>{Ze.currentTarget.src=Gs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:Q?"AN-NUR ISLAMIC ACADEMY":I.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:Q?"Shahibag, Chapainawabganj":I.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:Q?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ze=>{Ze.currentTarget.src=Ys},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:F,children:F})]}),tt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:L})]}),ut&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:O})]}),bt&&A&&A!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:A})]}),At&&ee&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:ee})]}),Et&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Q?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:te,onChange:Ze=>{const Pe=Ze.target.value;ne(Oe=>({...Oe,[b._id]:Pe}))}})}),e.jsx("span",{className:"print-only",children:te})]})]})]})}),Bt&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:Q?"Roll":"রোল"}),e.jsx("div",{className:"sp-roll-num",children:R})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[$t&&e.jsx("span",{className:"font-semibold",children:Gt}),yt&&e.jsxs("span",{children:[Q?"Session:":"সেশন:"," ",et&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(et))?new Date().getFullYear():et||new Date().getFullYear()]})]})]},b._id)})},`page-${j}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
        .seat-plan-workspace {
          --sp-font-scale: ${ie/100};
        }

        .sp-toolbar-card {
          border: 1px solid #cbd5e1;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 16px 20px;
          margin-bottom: 18px;
          border-radius: 12px;
        }
        .sp-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-filter-lbl {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 4px;
        }
        .sp-toggles-section {
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .sp-toggles-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .sp-toggle-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          color: #334155;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.15s ease;
          user-select: none;
        }
        .sp-toggle-pill.active {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
          font-weight: 600;
        }
        .sp-controls-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 12px;
          padding: 12px 0;
        }
        .sp-sub-box {
          padding: 10px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        .sp-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
        }

        .seat-plan-print-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .seat-plan-a4-sheet {
          width: 210mm;
          height: 284mm;
          max-height: 284mm;
          background: #ffffff;
          padding: 6mm;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          page-break-after: always;
        }

        .seat-plan-card {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1.5px solid #0f172a;
          border-radius: 6px;
          padding: 6px 9px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          min-height: 0;
          font-family: 'Noto Sans Bengali', sans-serif !important;
        }
        .seat-plan-card * {
          font-family: 'Noto Sans Bengali', sans-serif !important;
        }

        .has-cutlines .seat-plan-card {
          outline: 1px dashed #cbd5e1;
          outline-offset: 1.5mm;
        }

        /* Themes */
        .theme-classic .seat-plan-card {
          border-color: #0f172a;
        }

        .theme-emerald .seat-plan-card {
          border-color: #047857;
        }
        .theme-emerald .sp-madrasah-title {
          color: #047857 !important;
        }
        .theme-emerald .sp-badge {
          background: #047857 !important;
          color: #ffffff !important;
          border-color: #047857 !important;
        }
        .theme-emerald .sp-roll-hdr {
          background: #047857 !important;
          color: #ffffff !important;
        }
        .theme-emerald .sp-roll-box {
          border-color: #047857 !important;
        }

        .theme-navy .seat-plan-card {
          border-color: #1e3a8a;
        }
        .theme-navy .sp-madrasah-title {
          color: #1e3a8a !important;
        }
        .theme-navy .sp-badge {
          background: #1e3a8a !important;
          color: #ffffff !important;
          border-color: #1e3a8a !important;
        }
        .theme-navy .sp-roll-hdr {
          background: #1e3a8a !important;
          color: #ffffff !important;
        }
        .theme-navy .sp-roll-box {
          border-color: #1e3a8a !important;
        }

        /* Watermark */
        .card-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          opacity: 0.055;
          pointer-events: none;
          z-index: 1;
        }

        /* Card Header */
        .sp-card-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          border-bottom: 1px dashed #cbd5e1;
          padding-bottom: 3.5px;
          margin-bottom: 3.5px;
        }

        .sp-photo-wrapper {
          width: 44px;
          height: 50px;
          border: 1.2px solid #64748b;
          border-radius: 4px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .sp-photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .sp-center-info {
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 3px;
        }

        .sp-madrasah-title {
          font-size: calc(14.5px * var(--sp-font-scale, 1));
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          white-space: nowrap;
          letter-spacing: -0.2px;
        }

        .sp-madrasah-sub {
          font-size: calc(10px * var(--sp-font-scale, 1));
          color: #475569;
          line-height: 1.15;
          margin-top: 1px;
          white-space: nowrap;
        }

        .sp-badge {
          display: inline-block;
          font-size: calc(10.5px * var(--sp-font-scale, 1));
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid #0f172a;
          border-radius: 9999px;
          padding: 1px 10px;
          margin-top: 2px;
          line-height: 1.25;
          letter-spacing: 0.2px;
        }

        .sp-logo-wrapper {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sp-logo-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Card Body */
        .sp-card-body {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 8px;
          flex-grow: 1;
        }

        .sp-info-table {
          flex-grow: 1;
          border-collapse: collapse;
          font-size: calc(12.8px * var(--sp-font-scale, 1));
          line-height: 1.3;
        }
        .sp-info-table td {
          padding: 0.5px 0;
          vertical-align: middle;
        }

        .sp-lbl {
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
          width: 48px;
        }

        .sp-colon {
          width: 8px;
          text-align: center;
          color: #64748b;
          font-weight: 600;
        }

        .sp-val {
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 145px;
        }

        /* Roll Box (Right) */
        .sp-roll-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-roll-box {
          border: 1.5px solid #0f172a;
          border-radius: 5px;
          width: 62px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .sp-roll-hdr {
          background: #f1f5f9;
          font-size: calc(10.5px * var(--sp-font-scale, 1));
          font-weight: 800;
          color: #0f172a;
          padding: 2px 0;
          border-bottom: 1px solid #0f172a;
          letter-spacing: 0.3px;
        }

        .sp-roll-num {
          font-size: calc(21.5px * var(--sp-font-scale, 1));
          font-weight: 900;
          color: #0f172a;
          line-height: 1.18;
          padding: 3px 0 2px 0;
        }

        /* Card Footer */
        .sp-card-footer {
          position: relative;
          z-index: 2;
          margin-top: 2px;
          padding-top: 2px;
          border-top: 1px dotted #cbd5e1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: calc(10px * var(--sp-font-scale, 1));
          color: #475569;
          overflow: hidden;
          white-space: nowrap;
          max-height: 18px;
          flex-shrink: 0;
        }

        .sp-card-footer span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 50%;
        }

        .print-only {
          display: none;
        }

        /* ==============================================================
           EXACT @media print RULES
           ============================================================== */
        @media print {
          @page {
            size: A4 portrait;
            margin: 5mm;
          }

          body {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide entire website UI, sidebars, headers, banners */
          .no-print, 
          .navbar, 
          .sidebar, 
          .page-header, 
          .app-header, 
          .main-sidebar, 
          header, 
          nav, 
          footer {
            display: none !important;
          }

          .print-only {
            display: inline !important;
          }

          .seat-plan-print-container {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            gap: 0 !important;
          }

          .seat-plan-a4-sheet {
            width: 100% !important;
            min-height: 100vh !important;
            height: 284mm !important;
            box-shadow: none !important;
            border: none !important;
            padding: 2mm !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .seat-plan-card {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `})]})}const ps={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function $s({position:C}){const Y={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},K={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...K[C]},children:e.jsxs("g",{transform:`translate(${C.includes("right")?64:0}, ${C.includes("bottom")?64:0}) ${Y[C]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function Tn(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function En(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function Bn(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function As({config:C=ps}){const Y={...ps,...C},K=Array.isArray(Y.rules)&&Y.rules.length>0?Y.rules:ps.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx($s,{position:"top-left"}),e.jsx($s,{position:"top-right"}),e.jsx($s,{position:"bottom-left"}),e.jsx($s,{position:"bottom-right"}),e.jsx(Tn,{}),e.jsx(En,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:Y.title})})}),e.jsx("ul",{className:"backside-rules-list",children:K.filter(I=>I&&I.trim()).map((I,xt)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(Bn,{}),e.jsx("span",{children:I})]},xt))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:Y.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:Y.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:Y.footerLeftBadge&&Y.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:Y.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:Y.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:Y.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const Us='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',q=(C,Y="—")=>C==null?Y:typeof C=="object"?C.name||C.title||C.banglaName||C.code||C._id||Y:String(C).trim()||Y;function Ua({exams:C=[],classes:Y=[]}){const{user:K}=Za(),I=o.useMemo(()=>Vs(K),[K]),xt=o.useMemo(()=>Array.isArray(Y)?Y:Y&&Array.isArray(Y.classes)?Y.classes:[],[Y]),_e=o.useMemo(()=>Array.isArray(C)?C:C&&Array.isArray(C.exams)?C.exams:[],[C]),[ze,ht]=o.useState(""),[X,Xe]=o.useState(""),[$e,zt]=o.useState("all"),[We,T]=o.useState("all"),[Le,Ke]=o.useState([]),[Ct,et]=o.useState([]),[It,Gt]=o.useState(!1),[Ge,gt]=o.useState(""),[P,ae]=o.useState(new Set),[Z,Te]=o.useState({}),[f,Tt]=o.useState("১০২"),[ne,_t]=o.useState(()=>new Date().toISOString().split("T")[0]),[ft,Et]=o.useState("preview"),[ue,$t]=o.useState(85),[_,At]=o.useState("en"),[nt,Fe]=o.useState(4),[Ye,tt]=o.useState("4"),[ye,ut]=o.useState("landscape"),[Ae,bt]=o.useState(!0),[Yt,yt]=o.useState("admit"),[jt,Bt]=o.useState(()=>{try{const i=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(i)&&i>=80&&i<=135)return i}catch{}return 100}),[E,oe]=o.useState(()=>{try{return localStorage.getItem("admit_teacher_sig")||""}catch{return""}}),[Ee,Pt]=o.useState(()=>{try{return localStorage.getItem("admit_head_sig")||""}catch{return""}}),st=(i,h)=>{if(!h)return;const y=new FileReader;y.onload=J=>{var H;const M=((H=J.target)==null?void 0:H.result)||"";if(i==="teacher"){oe(M);try{localStorage.setItem("admit_teacher_sig",M)}catch{}}else{Pt(M);try{localStorage.setItem("admit_head_sig",M)}catch{}}},y.readAsDataURL(h)},it=i=>{if(i==="teacher"){oe("");try{localStorage.removeItem("admit_teacher_sig")}catch{}}else{Pt("");try{localStorage.removeItem("admit_head_sig")}catch{}}};o.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(jt))}catch{}},[jt]);const[V,Ue]=o.useState(()=>{try{const i=localStorage.getItem("admit_backside_config");if(i)return{...ps,...JSON.parse(i)}}catch{}return ps});o.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(V))}catch{}},[V]);const[D,Kt]=o.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});o.useEffect(()=>{_e.length>0&&!ze&&ht(_e[0]._id||_e[0].id||"")},[_e,ze]),o.useEffect(()=>{if(!X){Ke([]),zt("all");return}(async()=>{var h,y,J,M;try{const H=await G.get(`/students/sections?classLevel=${X}`),c=((y=(h=H.data)==null?void 0:h.data)==null?void 0:y.sections)||((J=H.data)==null?void 0:J.sections)||((M=H.data)==null?void 0:M.data)||[],j=Array.isArray(c)?c:[];Ke(j),zt("all")}catch{Ke([])}})()},[X]);const Ut=async()=>{var i,h,y,J;if(!X){et([]),ae(new Set);return}Gt(!0);try{const M={classLevel:X,limit:500,status:"active"};$e&&$e!=="all"&&(M.section=$e);const H=await G.get("/students",{params:M}),c=((h=(i=H.data)==null?void 0:i.data)==null?void 0:h.students)||((y=H.data)==null?void 0:y.students)||((J=H.data)==null?void 0:J.data)||[];let j=Array.isArray(c)?c:c.students||[];We&&We!=="all"&&(j=j.filter(R=>{var O;return(R.department||((O=R.currentEnrollment)==null?void 0:O.department)||"").toLowerCase().includes(We.toLowerCase())})),j.sort((R,L)=>{var ee,te;const O=He(((ee=R.currentEnrollment)==null?void 0:ee.rollNumber)||R.rollNumber||R.roll),A=He(((te=L.currentEnrollment)==null?void 0:te.rollNumber)||L.rollNumber||L.roll);return O-A}),et(j);const b=new Set(j.map(R=>R._id||R.id));ae(b);const F={};j.forEach(R=>{const L=R._id||R.id;F[L]=f}),Te(F)}catch(M){console.error("Failed to load students for admit card:",M),et([]),ae(new Set)}finally{Gt(!1)}};o.useEffect(()=>{X&&Ut()},[X,$e,We]);const qe=()=>{const i=f.trim();i&&Te(h=>{const y={...h};return P.forEach(J=>{y[J]=i}),y})},we=()=>{P.size===je.length&&je.length>0?ae(new Set):ae(new Set(je.map(i=>i._id||i.id)))},Ft=i=>{const h=new Set(P);h.has(i)?h.delete(i):h.add(i),ae(h)},je=o.useMemo(()=>{if(!Ge.trim())return Ct;const i=Ge.toLowerCase();return Ct.filter(h=>{var H,c;const y=q(((H=h.user)==null?void 0:H.name)||h.name,"").toLowerCase(),J=q(((c=h.currentEnrollment)==null?void 0:c.rollNumber)||h.rollNumber||h.roll,"").toLowerCase(),M=q(h.studentId||h.admissionNumber,"").toLowerCase();return y.includes(i)||J.includes(i)||M.includes(i)})},[Ct,Ge]),Q=o.useMemo(()=>Ct.filter(i=>P.has(i._id||i.id)),[Ct,P]),Ce=o.useMemo(()=>_e.find(i=>(i._id||i.id)===ze)||null,[_e,ze]),ie=o.useMemo(()=>xt.find(i=>(i._id||i.id)===X)||null,[xt,X]),he=i=>{Fe(i),tt(String(i)),i!==4&&Ae&&bt(!1)},lt=i=>{tt(i);const h=parseInt(i,10);!isNaN(h)&&h>0&&h<=8&&(Fe(h),h!==4&&Ae&&bt(!1))},qt=i=>{ut(i),i==="landscape"?(Fe(4),tt("4")):Ae&&bt(!1)},Vt=()=>{const i=!Ae;bt(i),i&&(ut("landscape"),Fe(4),tt("4"))},rt=o.useMemo(()=>{const i=[],h=parseInt(nt,10)||2;for(let y=0;y<Q.length;y+=h)i.push(Q.slice(y,y+h));return i},[Q,nt]),es=i=>{Kt(h=>({...h,[i]:!h[i]}))},Me=o.useRef(null),vt=o.useRef(null),Nt=i=>{const h=Me.current,y=vt.current;if(!h||!y){window.print();return}const J=document.getElementById("admit-print-iframe");J&&J.remove();const M=document.createElement("iframe");M.id="admit-print-iframe",M.style.position="fixed",M.style.right="0",M.style.bottom="0",M.style.width="0",M.style.height="0",M.style.border="0",M.style.visibility="hidden",document.body.appendChild(M);const H=M.contentWindow.document,c=window.location.origin;H.open(),H.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${c}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${jt/100};
    }
    @page {
      size: A4 ${i};
      margin: 4mm;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      font-family: 'Noto Sans Bengali', sans-serif !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    ${y.textContent}
    .admit-print-only-container {
      display: block !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .a4-page-sheet {
      width: 100% !important;
      height: ${i==="landscape"?"201mm":"288mm"} !important;
      min-height: unset !important;
      box-shadow: none !important;
      border: none !important;
      margin: 0 !important;
      page-break-after: always !important;
      break-after: page !important;
    }
    .a4-page-sheet:last-child {
      page-break-after: auto !important;
      break-after: auto !important;
    }
  </style>
</head>
<body>
  <div class="admit-print-only-container">${h.innerHTML}</div>
</body>
</html>`),H.close();const j=()=>{try{M.contentWindow.focus(),M.contentWindow.print()}catch(F){console.error("Iframe print error:",F),window.print()}},b=Array.from(H.images||[]);if(b.length===0)setTimeout(j,120);else{let F=!1;const R=()=>{F||(F=!0,setTimeout(j,100))};Promise.all(b.map(L=>L.complete?Promise.resolve():new Promise(O=>{L.onload=O,L.onerror=O}))).then(R),setTimeout(R,1200)}},ts=()=>{if(Q.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}yt("admit");const i=ye==="landscape"?"landscape":"portrait";setTimeout(()=>Nt(i),80)},ot=()=>{yt("backside_only"),setTimeout(()=>Nt("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(mt,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:q(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>At("en"),className:`admit-lang-btn ${_==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>At("bn"),className:`admit-lang-btn ${_==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>At("bi"),className:`admit-lang-btn ${_==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:Ut,disabled:It||!X,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Ms,{size:15,className:It?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:ot,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(Je,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:ts,disabled:Q.length===0,className:"admit-btn-print",children:[e.jsx(Je,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",Q.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Oa,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:je.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(Sn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:Q.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Ht,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[nt,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(mt,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[rt.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Rt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:ze,onChange:i=>ht(i.target.value),className:"admit-select",children:_e.map(i=>{const h=i._id||i.id||"",y=q(i.name||i.title,"Exam");return e.jsx("option",{value:h,children:y},h)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ws,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:X,onChange:i=>Xe(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),xt.map(i=>{const h=i._id||i.id||"",y=q(i.name||i.banglaName||i.code,"Class");return e.jsx("option",{value:h,children:y},h)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ht,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:$e,onChange:i=>zt(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),Le.map((i,h)=>{const y=q(i,"");return e.jsx("option",{value:y,children:y},h)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(zn,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:We,onChange:i=>T(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ht,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(i=>e.jsx("button",{type:"button",onClick:()=>he(i.count),className:`admit-pill-btn ${nt===i.count?"active":""}`,children:i.label},i.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Ye,onChange:i=>lt(i.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Cn,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>qt("portrait"),className:`admit-pill-btn ${ye==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>qt("landscape"),className:`admit-pill-btn ${ye==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:Vt,className:`admit-pill-btn ${Ae?"active":""}`,style:{border:Ae?"1px solid #0d3b66":"1px solid #cbd5e1",background:Ae?"#0d3b66":"#ffffff",color:Ae?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:Ae?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Bt(i=>Math.max(80,i-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[jt,"%"]}),e.jsx("button",{type:"button",onClick:()=>Bt(i=>Math.min(135,i+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),jt!==100&&e.jsx("button",{type:"button",onClick:()=>Bt(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ws,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:f,onChange:i=>Tt(i.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:qe,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Rt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:ne,onChange:i=>_t(i.target.value),className:"admit-date-input"})]}),e.jsxs("div",{className:"admit-sec-group",style:{flexWrap:"wrap"},children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"স্বাক্ষর আপলোড:"})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:E?"#ecfdf5":"#ffffff",color:E?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var y;const h=(y=i.target.files)==null?void 0:y[0];h&&st("teacher",h),i.target.value=""}}),e.jsx("span",{children:E?"✓ Class Teacher":"+ Class Teacher"})]}),E&&e.jsx("button",{type:"button",onClick:()=>it("teacher"),title:"Class Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:Ee?"#ecfdf5":"#ffffff",color:Ee?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var y;const h=(y=i.target.files)==null?void 0:y[0];h&&st("head",h),i.target.value=""}}),e.jsx("span",{children:Ee?"✓ Head Teacher":"+ Head Teacher"})]}),Ee&&e.jsx("button",{type:"button",onClick:()=>it("head"),title:"Head Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>Et("preview"),className:`admit-tab-btn ${ft==="preview"?"active":""}`,children:[e.jsx(In,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[rt.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>Et("students"),className:`admit-tab-btn ${ft==="students"?"active":""}`,children:[e.jsx(Oa,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[Q.length,"/",je.length]})]}),e.jsxs("button",{type:"button",onClick:()=>Et("settings"),className:`admit-tab-btn ${ft==="settings"?"active":""}`,children:[e.jsx(Rn,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ft==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>$t(Math.max(50,ue-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(_n,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[ue,"%"]}),e.jsx("button",{type:"button",onClick:()=>$t(Math.min(130,ue+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx($n,{size:14})}),e.jsx("button",{type:"button",onClick:()=>$t(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ft==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:It?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):X?Q.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${ue/100})`,transformOrigin:"top center"},children:rt.map((i,h)=>e.jsxs(Da.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",h+1," / ",rt.length," ",ye==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",i.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${nt} ${ye==="landscape"?"a4-landscape":""}`,children:i.map(y=>{var A,ee,te,le;const J=y._id||y.id,M=q(((A=y.user)==null?void 0:A.name)||y.name,"MD. STUDENT"),H=q(((ee=y.currentEnrollment)==null?void 0:ee.rollNumber)||y.rollNumber||y.roll,"—"),c=q(y.studentId||y.admissionNumber,"—"),j=q(((te=y.currentEnrollment)==null?void 0:te.section)||y.section||($e!=="all"?$e:"—"),"—"),b=q(y.department||((le=y.currentEnrollment)==null?void 0:le.department)||y.stream,"All"),F=q(Z[J]||f,"১০২"),R=y.photo||Us,L=q((Ce==null?void 0:Ce.name)||(Ce==null?void 0:Ce.title),"Annual Examination 2026"),O=q((ie==null?void 0:ie.name)||(ie==null?void 0:ie.banglaName)||(ie==null?void 0:ie.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[D.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:xe=>{xe.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:xe=>{xe.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:_==="bn"?q(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:_==="bn"?q(I.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:_==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),D.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:_==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Xt(ne)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:M})]}),D.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:b})]}),D.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),D.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:F})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:H})]}),D.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),D.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),D.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:O})]}),D.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:j})]})]}),D.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:R,alt:"Photo"})})]}),D.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:_==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:L})]}),e.jsxs("div",{className:"signatures-row",children:[D.teacherSig?e.jsxs("div",{className:"signature-block",children:[E?e.jsx("img",{src:E,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:_==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),D.principalSig?e.jsxs("div",{className:"signature-block",children:[Ee?e.jsx("img",{src:Ee,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:_==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},J)})})]}),Ae&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",h+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(y=>e.jsx(As,{config:V},`preview-back-${h}-${y}`))})]})]},`preview-group-${h}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(mt,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),Ae&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${ue/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(As,{config:V},`empty-back-${i}`))})]})})})]})}),ft==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:we,className:"admit-btn-select-all",children:P.size===je.length&&je.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Va,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ja,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",je.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:P.size})," / ",je.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Ls,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Ge,onChange:i=>gt(i.target.value),className:"admit-search-input"}),Ge&&e.jsx("button",{type:"button",onClick:()=>gt(""),className:"admit-search-clear",children:"✕"})]})]}),je.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:P.size===je.length&&je.length>0,onChange:we,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:je.map(i=>{var R,L,O,A;const h=i._id||i.id,y=P.has(h),J=q(((R=i.currentEnrollment)==null?void 0:R.rollNumber)||i.rollNumber||i.roll,"—"),M=q(((L=i.user)==null?void 0:L.name)||i.name,"—"),H=q(i.studentId||i.admissionNumber,"—"),c=q(((O=i.currentEnrollment)==null?void 0:O.section)||i.section||($e!=="all"?$e:"—"),"—"),j=q(i.department||((A=i.currentEnrollment)==null?void 0:A.department)||i.stream,"সাধারণ"),b=q(Z[h]||f,"১০২"),F=i.photo||Us;return e.jsxs("tr",{className:y?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:y,onChange:()=>Ft(h),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:J})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:F,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:H}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:M}),e.jsx("td",{style:{color:"#475569"},children:j}),e.jsx("td",{style:{color:"#475569"},children:c}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:b,onChange:ee=>{const te=ee.target.value;Te(le=>({...le,[h]:te}))},className:"admit-table-room-input"})})]},h)})})]})})]}),ft==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Qa,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(i=>{const h=D[i.key];return e.jsxs("button",{type:"button",onClick:()=>es(i.key),className:`admit-toggle-card ${h?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${h?"active":""}`,children:h&&e.jsx(yn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:i.label}),e.jsx("div",{className:"admit-toggle-desc",children:i.desc})]})]},i.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(mt,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>Ue(ps),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:V.title,onChange:i=>Ue(h=>({...h,title:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:V.noteLabel,onChange:i=>Ue(h=>({...h,noteLabel:i.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:V.noteText,onChange:i=>Ue(h=>({...h,noteText:i.target.value}))})]}),(V.rules||[]).map((i,h)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",h+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:i,onChange:y=>{const J=[...V.rules||[]];J[h]=y.target.value,Ue(M=>({...M,rules:J}))}})]},`rule-edit-${h}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:V.authorityLine1,onChange:i=>Ue(h=>({...h,authorityLine1:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:V.authorityLine2,onChange:i=>Ue(h=>({...h,authorityLine2:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:V.footerLeftBadge||"",onChange:i=>Ue(h=>({...h,footerLeftBadge:i.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:Me,children:Yt==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(As,{config:V},`print-back-only-${i}`))}):Q.length>0&&rt.map((i,h)=>e.jsxs(Da.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${nt} ${ye==="landscape"?"a4-landscape":""}`,children:i.map(y=>{var A,ee,te,le;const J=y._id||y.id,M=q(((A=y.user)==null?void 0:A.name)||y.name,"MD. STUDENT"),H=q(((ee=y.currentEnrollment)==null?void 0:ee.rollNumber)||y.rollNumber||y.roll,"—"),c=q(y.studentId||y.admissionNumber,"—"),j=q(((te=y.currentEnrollment)==null?void 0:te.section)||y.section||($e!=="all"?$e:"—"),"—"),b=q(y.department||((le=y.currentEnrollment)==null?void 0:le.department)||y.stream,"All"),F=q(Z[J]||f,"১০২"),R=y.photo||Us,L=q((Ce==null?void 0:Ce.name)||(Ce==null?void 0:Ce.title),"Annual Examination 2026"),O=q((ie==null?void 0:ie.name)||(ie==null?void 0:ie.banglaName)||(ie==null?void 0:ie.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[D.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:xe=>{xe.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:xe=>{xe.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:_==="bn"?q(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:_==="bn"?q(I.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:_==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),D.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:_==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Xt(ne)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:M})]}),D.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:b})]}),D.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),D.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:F})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:H})]}),D.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),D.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),D.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:O})]}),D.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:_==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:j})]})]}),D.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:R,alt:"Photo"})})]}),D.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:_==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:L})]}),e.jsxs("div",{className:"signatures-row",children:[D.teacherSig?e.jsxs("div",{className:"signature-block",children:[E?e.jsx("img",{src:E,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:_==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),D.principalSig?e.jsxs("div",{className:"signature-block",children:[Ee?e.jsx("img",{src:Ee,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:_==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},`print-${J}`)})}),Ae&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(y=>e.jsx(As,{config:V},`print-back-${h}-${y}`))})]},`print-group-${h}`))}),e.jsx("style",{ref:vt,children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          --admit-font-scale: ${jt/100};
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: #0f172a;
          font-family: 'Noto Sans Bengali', inherit;
        }
        .admit-card,
        .admit-card * {
          font-family: 'Noto Sans Bengali', sans-serif !important;
        }

        /* --- 1. Header Card --- */
        .admit-hdr-card {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
          border-radius: 12px;
          border: 1px solid #047857;
          box-shadow: 0 4px 18px rgba(4, 120, 87, 0.2);
          color: #ffffff;
          padding: 20px 24px;
        }

        .admit-hdr-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .admit-hdr-title-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .admit-hdr-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }

        .admit-hdr-heading-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-hdr-title {
          font-size: 19px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .admit-hdr-badge {
          font-size: 11px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .admit-hdr-subtitle {
          font-size: 12px;
          color: #d1fae5;
          margin: 4px 0 0 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot-sep {
          opacity: 0.6;
        }

        .admit-hdr-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .admit-lang-group {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 3px;
        }

        .admit-lang-btn {
          background: transparent;
          border: none;
          color: #a7f3d0;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .admit-lang-btn.active {
          background: #ffffff;
          color: #064e3b;
          font-weight: 700;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .admit-btn-ghost {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.22);
        }
        .admit-btn-ghost:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .admit-btn-print {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #065f46;
          border: 1px solid #ffffff;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s;
        }
        .admit-btn-print:hover:not(:disabled) {
          background: #ecfdf5;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        .admit-btn-print:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        /* Metrics Chips */
        .admit-hdr-chips-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .admit-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: #d1fae5;
        }
        .admit-chip b {
          color: #ffffff;
          margin-left: 2px;
        }
        .admit-chip.highlight-emerald {
          background: rgba(16, 185, 129, 0.25);
          border-color: rgba(16, 185, 129, 0.4);
        }
        .admit-chip.highlight-indigo {
          background: rgba(99, 102, 241, 0.25);
          border-color: rgba(99, 102, 241, 0.4);
        }
        .admit-chip.highlight-amber {
          background: rgba(245, 158, 11, 0.25);
          border-color: rgba(245, 158, 11, 0.4);
        }

        /* --- 2. Filter & Controls Card --- */
        .admit-ctrl-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 18px 20px;
        }

        .admit-filters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }

        @media (max-width: 900px) {
          .admit-filters-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .admit-filters-grid {
            grid-template-columns: 1fr;
          }
        }

        .admit-form-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .admit-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
        }

        .admit-select {
          width: 100%;
          padding: 8px 12px;
          font-size: 12.5px;
          font-weight: 600;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .admit-select:focus {
          border-color: #059669;
          box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15);
          background: #ffffff;
        }

        /* Secondary Controls Row */
        .admit-secondary-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          padding-top: 14px;
        }

        .admit-sec-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-sec-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 700;
          color: #334155;
        }

        .admit-pill-buttons {
          display: inline-flex;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 2.5px;
        }

        .admit-pill-btn {
          background: transparent;
          border: none;
          color: #475569;
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admit-pill-btn.active {
          background: #059669;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 1px 4px rgba(5, 150, 105, 0.25);
        }

        .admit-custom-cards-box {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .admit-custom-input {
          width: 55px;
          padding: 4px 6px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        .admit-custom-unit {
          font-size: 11px;
          color: #64748b;
        }

        .admit-room-input {
          width: 75px;
          padding: 5px 8px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        .admit-btn-room-apply {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          font-size: 11.5px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-room-apply:hover {
          background: #dcfce7;
        }

        .admit-date-input {
          padding: 5px 8px;
          font-size: 12px;
          font-weight: 600;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }

        /* --- 3. Workspace Tabs Navigation --- */
        .admit-tabs-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 8px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .admit-tabs-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admit-tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 12.5px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admit-tab-btn.active {
          background: #059669;
          color: #ffffff;
          border-color: #059669;
          box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25);
        }

        .admit-tab-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.08);
        }
        .admit-tab-btn.active .admit-tab-badge {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        /* Zoom controls */
        .admit-zoom-controls {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
        }

        .admit-zoom-label {
          color: #64748b;
          font-weight: 600;
        }

        .admit-zoom-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .admit-zoom-btn:hover {
          background: #e2e8f0;
        }

        .admit-zoom-value {
          width: 45px;
          text-align: center;
          font-weight: 700;
          color: #0f172a;
        }

        .admit-zoom-reset {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #475569;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        /* --- State Boxes (Empty / Loading) --- */
        .admit-state-box {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .admit-state-box.border-dashed {
          border: 2px dashed #cbd5e1;
          background: #f8fafc;
        }

        /* --- Tab 1: Live A4 Preview --- */
        .admit-preview-area {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .admit-preview-viewport {
          background: #1e293b;
          border-radius: 12px;
          padding: 24px;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
          overflow: auto;
          max-height: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .admit-preview-scaler {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          transition: transform 0.2s ease;
        }

        .admit-page-wrapper {
          position: relative;
        }

        .admit-page-tag {
          position: absolute;
          top: -24px;
          left: 4px;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .admit-page-tag-pill {
          background: #0f172a;
          color: #38bdf8;
          border: 1px solid #334155;
          padding: 1px 8px;
          border-radius: 4px;
        }

        /* --- Exact A4 Sheet Containers --- */
        .a4-page-sheet {
          background: #ffffff;
          width: 210mm;
          min-height: 297mm;
          box-sizing: border-box;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          display: grid;
          position: relative;
        }

        .a4-sheet-layout-1 {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-content: center;
          justify-items: center;
          padding: 10mm;
        }
        .a4-sheet-layout-1 .admit-card {
          width: 184mm;
          min-height: 126mm;
          padding: 6mm;
        }

        .a4-sheet-layout-2 {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
          row-gap: 6mm;
          padding: 6mm 8mm;
        }
        .a4-sheet-layout-2 .admit-card {
          width: 186mm;
          min-height: 126mm;
          padding: 4.5mm;
        }

        .a4-sheet-layout-4 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 4mm 5mm;
          padding: 5mm 6mm;
        }
        .a4-sheet-layout-4 .admit-card {
          width: 100%;
          min-height: 132mm;
          padding: 3.5mm;
        }

        .a4-sheet-layout-6 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 3mm 4mm;
          padding: 4mm 5mm;
        }
        .a4-sheet-layout-6 .admit-card {
          width: 100%;
          min-height: 89mm;
          padding: 2.5mm;
        }

        /* --- Professional Admit Card Styling --- */
        .admit-card {
          background: #ffffff;
          box-sizing: border-box;
          color: #000000;
          border: 2px solid #000000;
          display: flex;
          flex-direction: column;
          position: relative;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .admit-card-inner-frame {
          border: 1px solid #000000;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 3.5mm 5mm 5mm 5mm;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50mm;
          height: 50mm;
          object-fit: contain;
          opacity: 0.06;
          pointer-events: none;
          z-index: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        /* 1. Header */
        .card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          margin-bottom: 1.5mm;
        }

        .card-logo {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 14mm;
          height: 14mm;
          object-fit: contain;
        }

        .card-titles {
          text-align: center;
          padding: 0 16mm;
        }

        .inst-name {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 15pt;
          font-weight: 800;
          letter-spacing: -0.3px;
          line-height: 1.15;
          color: #000000;
        }

        .inst-sub {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 8pt;
          color: #333333;
          margin-top: 1px;
          line-height: 1.2;
        }

        /* 2. Admit Pill & Date */
        .badge-date-row {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-bottom: 2mm;
        }

        .admit-pill {
          background: #2563eb;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9.5pt;
          font-weight: 800;
          padding: 1.5px 14px;
          border-radius: 4px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .issue-date-label {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7.5pt;
          font-weight: 700;
          color: #000000;
        }

        /* 3. Details & Photo Grid */
        .student-details-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3mm;
          flex-grow: 1;
        }

        .info-columns-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 4mm;
          row-gap: 1.2mm;
          flex-grow: 1;
        }

        .detail-row {
          display: flex;
          align-items: baseline;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 8.5pt;
          line-height: 1.25;
        }

        .detail-label {
          font-weight: 700;
          color: #000000;
          width: 22mm;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .detail-colon {
          width: 3.5mm;
          text-align: center;
          font-weight: 700;
          color: #000000;
          flex-shrink: 0;
        }

        .detail-val {
          font-weight: 700;
          color: #000000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .detail-val.uppercase {
          text-transform: uppercase;
        }

        .room-badge {
          background: #000000;
          color: #ffffff !important;
          padding: 0.5px 6px;
          border-radius: 3px;
          display: inline-block;
          font-weight: 800;
        }

        .student-photo-box {
          width: 24mm;
          height: 29mm;
          border: 1px solid #000000;
          padding: 1px;
          box-sizing: border-box;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }
        .student-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 4. Permission Statement */
        .permission-statement {
          font-family: 'Times New Roman', Georgia, serif;
          font-style: italic;
          font-size: 9.5pt;
          text-align: center;
          margin: 2mm 0;
          line-height: 1.25;
          color: #000000;
        }

        .permission-statement .exam-name {
          font-weight: 800;
          font-style: normal;
          margin-left: 4px;
        }

        /* 5. Signatures (NEVER CUT OFF) */
        .signatures-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 1.5mm;
          padding-bottom: 2mm;
          margin-top: 2mm;
        }

        .signature-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 44mm;
          text-align: center;
        }

        .signature-svg {
          width: 34mm;
          height: 10mm;
          margin-bottom: -1mm;
        }

        .sig-line {
          width: 100%;
          height: 1px;
          background: #000000;
          margin-bottom: 1.5px;
        }

        .sig-name {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 6.5pt;
          font-weight: 800;
          line-height: 1.1;
          color: #000000;
          margin-bottom: 1px;
        }

        .sig-title {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7pt;
          font-weight: 700;
          color: #000000;
          line-height: 1.1;
        }

        /* Scaled Adjustments for 4-Card and 6-Card Layouts */
        .a4-sheet-layout-4 .inst-name { font-size: 11pt; }
        .a4-sheet-layout-4 .inst-sub { font-size: 6.5pt; }
        .a4-sheet-layout-4 .admit-pill { font-size: 8pt; padding: 1px 10px; }
        .a4-sheet-layout-4 .issue-date-label { font-size: 6.5pt; }
        .a4-sheet-layout-4 .detail-row { font-size: 7.5pt; }
        .a4-sheet-layout-4 .detail-label { width: 17mm; }
        .a4-sheet-layout-4 .student-photo-box { width: 20mm; height: 24mm; }
        .a4-sheet-layout-4 .permission-statement { font-size: 8pt; margin: 1mm 0; }
        .a4-sheet-layout-4 .signature-svg { width: 28mm; height: 8mm; }
        .a4-sheet-layout-4 .signature-block { width: 36mm; }

        .a4-sheet-layout-6 .inst-name { font-size: 9.5pt; }
        .a4-sheet-layout-6 .inst-sub { font-size: 5.5pt; }
        .a4-sheet-layout-6 .admit-pill { font-size: 7pt; padding: 1px 8px; }
        .a4-sheet-layout-6 .issue-date-label { font-size: 6pt; }
        .a4-sheet-layout-6 .detail-row { font-size: 6.5pt; line-height: 1.15; }
        .a4-sheet-layout-6 .detail-label { width: 14mm; }
        .a4-sheet-layout-6 .student-photo-box { width: 16mm; height: 19mm; }
        .a4-sheet-layout-6 .permission-statement { font-size: 6.5pt; margin: 0.5mm 0; }
        .a4-sheet-layout-6 .signature-svg { width: 22mm; height: 6mm; }
        .a4-sheet-layout-6 .signature-block { width: 28mm; }
        .a4-sheet-layout-6 .sig-name { font-size: 5.5pt; }
        .a4-sheet-layout-6 .sig-title { font-size: 5.5pt; }

        /* --- Tab 2: Students Selection Table --- */
        .admit-table-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 18px 20px;
        }

        .admit-table-hdr-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
        }

        .admit-table-actions-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .admit-btn-select-all {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admit-btn-select-all:hover {
          background: #dcfce7;
        }

        .admit-table-selected-badge {
          font-size: 12px;
          color: #475569;
        }

        .admit-search-box {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 5px 10px;
          width: 260px;
        }

        .admit-search-icon {
          color: #94a3b8;
          margin-right: 6px;
        }

        .admit-search-input {
          border: none;
          background: transparent;
          font-size: 12px;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .admit-search-clear {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 12px;
        }

        .admit-table-scroll {
          overflow-x: auto;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .admit-data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12.5px;
          text-align: left;
        }

        .admit-data-table thead tr {
          background: #f1f5f9;
          border-bottom: 1px solid #cbd5e1;
          color: #334155;
          font-weight: 700;
        }

        .admit-data-table th,
        .admit-data-table td {
          padding: 9px 12px;
        }

        .admit-data-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.15s;
        }

        .admit-data-table tbody tr:hover {
          background: #f8fafc;
        }

        .admit-data-table tbody tr.row-selected {
          background: #f0fdf4;
        }

        .admit-roll-pill {
          background: #f1f5f9;
          color: #0f172a;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          display: inline-block;
        }

        .admit-table-avatar {
          width: 28px;
          height: 32px;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
          overflow: hidden;
          background: #f8fafc;
          margin: 0 auto;
        }
        .admit-table-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .admit-table-room-input {
          width: 80px;
          padding: 4px 6px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: none;
        }
        .admit-table-room-input:focus {
          border-color: #059669;
        }

        /* --- Tab 3: Settings Toggles --- */
        .admit-settings-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          padding: 20px;
        }

        .admit-settings-hdr {
          margin-bottom: 16px;
        }

        .admit-settings-title {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .admit-settings-sub {
          font-size: 11.5px;
          color: #64748b;
          margin: 4px 0 0 0;
        }

        .admit-toggles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 950px) {
          .admit-toggles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .admit-toggles-grid {
            grid-template-columns: 1fr;
          }
        }

        .admit-toggle-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 12px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .admit-toggle-card.active {
          background: #f0fdf4;
          border-color: #86efac;
          box-shadow: 0 1px 4px rgba(5, 150, 105, 0.1);
        }

        .admit-toggle-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1.5px solid #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          flex-shrink: 0;
          transition: all 0.15s;
        }

        .admit-toggle-checkbox.active {
          background: #059669;
          border-color: #059669;
          color: #ffffff;
        }

        .admit-toggle-label {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }

        .admit-toggle-desc {
          font-size: 10.5px;
          color: #64748b;
          margin-top: 2px;
          line-height: 1.2;
        }

        /* ==============================================================
           LANDSCAPE A4 SHEET & BACKSIDE INSTRUCTIONS CARD STYLES
           ============================================================== */
        .a4-page-sheet.a4-landscape {
          width: 297mm;
          height: 210mm;
          min-height: 210mm;
          max-height: 210mm;
          position: relative;
          box-sizing: border-box;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 5mm 6mm;
          padding: 4mm 5mm;
          position: relative;
        }
        /* Center Dashed Cut Lines on both Front & Back Landscape Sheets */
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 2mm;
          bottom: 2mm;
          width: 0;
          border-left: 1px dashed #94a3b8;
          transform: translateX(-0.5px);
          pointer-events: none;
          z-index: 10;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 2mm;
          right: 2mm;
          height: 0;
          border-top: 1px dashed #94a3b8;
          transform: translateY(-0.5px);
          pointer-events: none;
          z-index: 10;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-card {
          width: 100%;
          height: 100%;
          min-height: 0 !important;
          max-height: 100%;
          padding: 2mm;
          box-sizing: border-box;
          overflow: hidden;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-card-inner-frame {
          height: 100%;
          box-sizing: border-box;
          padding: 2mm 3.5mm;
          display: flex;
          flex-direction: column;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .card-logo {
          width: 11mm;
          height: 11mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .inst-name {
          font-size: calc(15.5pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .inst-sub {
          font-size: calc(9pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-pill {
          font-size: calc(11pt * var(--admit-font-scale, 1));
          padding: 2px 14px;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .issue-date-label {
          font-size: calc(9.5pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .badge-date-row {
          margin: 1mm 0 2.5mm 0;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .detail-row {
          font-size: calc(10.5pt * var(--admit-font-scale, 1));
          line-height: 1.24;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .detail-label {
          width: 24mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .student-photo-box {
          width: 19mm;
          height: 23mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .permission-statement {
          font-size: calc(10pt * var(--admit-font-scale, 1));
          margin: 0.5mm 0;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-block {
          width: auto;
          min-width: 44mm;
          white-space: nowrap;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .sig-title,
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .sig-name {
          font-size: calc(9.2pt * var(--admit-font-scale, 1));
          white-space: nowrap;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-svg,
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-img,
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-spacer {
          width: 26mm;
          height: 7mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 1px;
        }
        .signature-img {
          max-width: 30mm;
          height: 9mm;
          object-fit: contain;
          display: block;
          margin: 0 auto 1px;
        }
        .signature-spacer {
          height: 9mm;
        }

        /* Backside Card ("পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য") */
        .backside-card {
          width: 100%;
          height: 100%;
          min-height: 0 !important;
          max-height: 100%;
          background: #ffffff;
          box-sizing: border-box;
          display: flex;
          overflow: hidden;
          font-family: 'Noto Sans Bengali', 'Hind Siliguri', sans-serif;
        }
        .backside-outer-border {
          width: 100%;
          height: 100%;
          border: 2.5px solid #0d3b66;
          border-radius: 6px;
          padding: 3px;
          box-sizing: border-box;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fefce8 100%);
        }
        .backside-inner-border {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1.5px solid #c89b3c;
          border-radius: 4px;
          padding: 7px 14px 6px 14px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        .backside-header-wrap {
          display: flex;
          justify-content: center;
          margin-top: 2px;
          position: relative;
          z-index: 4;
        }
        .backside-header-pill {
          background: linear-gradient(90deg, #0a2e52 0%, #0d3b66 50%, #0a2e52 100%);
          color: #ffffff;
          border: 1.8px solid #d4a437;
          border-radius: 999px;
          padding: 3px 18px;
          font-size: calc(14pt * var(--admit-font-scale, 1));
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow: 0 2px 5px rgba(13, 59, 102, 0.25);
        }
        .backside-rules-list {
          list-style: none;
          margin: 4px 0 2px 0;
          padding: 0 4px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
          z-index: 4;
        }
        .backside-rule-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: calc(11pt * var(--admit-font-scale, 1));
          line-height: 1.26;
          color: #111827;
          font-weight: 600;
        }
        .backside-note-section {
          position: relative;
          z-index: 4;
          margin-top: 2px;
        }
        .backside-divider-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .backside-note-pill {
          background: #0d3b66;
          color: #fef08a;
          border: 1.2px solid #d4a437;
          border-radius: 999px;
          padding: 1px 11px;
          font-size: calc(11pt * var(--admit-font-scale, 1));
          font-weight: 800;
          white-space: nowrap;
        }
        .backside-gold-line {
          flex: 1;
          height: 1.8px;
          background: linear-gradient(90deg, #d4a437, #f3c65f, #d4a437);
          position: relative;
        }
        .backside-gold-diamond {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 7px;
          height: 7px;
          background: #d4a437;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        .backside-note-text {
          margin: 2px 0 0 20px;
          font-size: calc(10.8pt * var(--admit-font-scale, 1));
          line-height: 1.24;
          font-weight: 700;
          color: #1e293b;
        }
        .backside-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 2px;
          position: relative;
          z-index: 4;
        }
        .backside-left-badge {
          display: inline-block;
          background: #0f172a;
          color: #ffffff;
          border-radius: 999px;
          padding: 1.5px 10px;
          font-size: calc(9.5pt * var(--admit-font-scale, 1));
          font-weight: 700;
        }
        .backside-authority-box {
          border: 1.5px solid #0d3b66;
          background: linear-gradient(180deg, #e0f2fe 0%, #bae6fd 100%);
          border-radius: 3px;
          padding: 2px 12px;
          text-align: center;
          min-width: 96px;
        }
        .backside-auth-line1 {
          font-size: calc(9.5pt * var(--admit-font-scale, 1));
          font-weight: 700;
          color: #0d3b66;
          line-height: 1.15;
        }
        .backside-auth-line2 {
          font-size: calc(10.5pt * var(--admit-font-scale, 1));
          font-weight: 800;
          color: #0a2e52;
          line-height: 1.2;
        }

        /* ==============================================================
           EXACT @media print RULES (ZERO WEBSITE UI, ONLY CARDS ON A4)
           ============================================================== */
        @page {
          size: A4 ${Yt==="backside_only"||ye==="landscape"?"landscape":"portrait"};
          margin: 4mm;
        }
        @page admit-landscape {
          size: A4 landscape;
          margin: 4mm;
        }
        @page admit-portrait {
          size: A4 portrait;
          margin: 4mm;
        }

        @media print {
          body {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Hide entire website UI, navbar, topbar, sidebars, controls */
          .no-print,
          .navbar,
          .sidebar,
          .page-header,
          .app-header,
          .main-sidebar,
          header,
          nav,
          footer {
            display: none !important;
          }

          .admit-generator-wrapper {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Show the print-only container on print */
          .admit-print-only-container {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .a4-page-sheet {
            page: admit-portrait;
            width: 100% !important;
            height: 288mm !important;
            min-height: unset !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .a4-page-sheet.a4-landscape {
            page: admit-landscape;
            width: 100% !important;
            height: 201mm !important;
            min-height: unset !important;
            max-height: 201mm !important;
          }

          .admit-card,
          .backside-card,
          .backside-outer-border,
          .backside-header-pill,
          .backside-note-pill,
          .backside-authority-box,
          .backside-left-badge,
          .admit-pill,
          .room-badge {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `})]})}const Pn=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],qs=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function Fn(C,Y=!1){if(!C)return"—";const K=Y?" (যৌথ)":"";return C===1?`🥇 ১ম স্থান${K}`:C===2?`🥈 ২য় স্থান${K}`:C===3?`🥉 ৩য় স্থান${K}`:C===4?`৪র্থ${K}`:C===5?`৫ম${K}`:C===6?`৬ষ্ঠ${K}`:C===7?`৭ম${K}`:C===8?`৮ম${K}`:C===9?`৯ম${K}`:C===10?`১০ম${K}`:`${C}তম${K}`}function pi({initialViewMode:C}){var sa,aa,na,ia,la,ra,oa,da,ca,pa,ma,xa,ha,ga,fa,ua,ba,ya,ja,va,Na,wa,ka,Sa,za,Ca,Ia,_a,$a,Aa,Wa,La,Ma,Ra,Ta;const Y=jn(),K=vn(),{user:I}=Za(),{madrasahName:xt,branchName:_e}=Vs(I),[ze,ht]=o.useState([]),[X,Xe]=o.useState([]),[$e,zt]=o.useState(!0),[We,T]=o.useState(null),[Le,Ke]=o.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[Ct,et]=o.useState(!1),[It,Gt]=o.useState(!1),[Ge,gt]=o.useState(null),[P,ae]=o.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[Z,Te]=o.useState([]),[f,Tt]=o.useState(null),[ne,_t]=o.useState([]),[ft,Et]=o.useState([]),[ue,$t]=o.useState(""),[_,At]=o.useState(""),[nt,Fe]=o.useState(!1),[Ye,tt]=o.useState([]),[ye,ut]=o.useState({}),[Ae,bt]=o.useState(!1),[Yt,yt]=o.useState([]),jt=C==="routine"||(K==null?void 0:K.pathname)==="/exam-routine",Bt=C==="admit_card"||(K==null?void 0:K.pathname)==="/admit-card",[E,oe]=o.useState(jt?"routine":Bt?"admit_card":"marks"),[Ee,Pt]=o.useState(!1),[st,it]=o.useState("all"),[V,Ue]=o.useState([]),[D,Kt]=o.useState([]),[Ut,qe]=o.useState(!1),[we,Ft]=o.useState("landscape"),[je,Q]=o.useState(""),[Ce,ie]=o.useState("all"),[he,lt]=o.useState(null),[qt,Vt]=o.useState(!1),[rt,es]=o.useState([]),[Me,vt]=o.useState(""),[Nt,ts]=o.useState("all"),[ot,i]=o.useState(""),[h,y]=o.useState([]),[J,M]=o.useState(!1),[H,c]=o.useState(new Set),[j,b]=o.useState(""),[F,R]=o.useState("all"),[L,O]=o.useState(!1),[A,ee]=o.useState(null),[te,le]=o.useState([]),[xe,Be]=o.useState(!1),[Ve,wt]=o.useState("all"),[dt,ms]=o.useState("all"),[Ot,ws]=o.useState("all"),[ks,Zt]=o.useState(!1),[ss,xs]=o.useState(!1),[as,hs]=o.useState(null),[Rs,Ze]=o.useState(null),[Pe,Oe]=o.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),ct=(I==null?void 0:I.userType)==="guardian",Ss=(I==null?void 0:I.userType)==="student",me=Ss||ct,[at,Xa]=o.useState([]),[Wt,Zs]=o.useState(""),[Lt,Ts]=o.useState(null);o.useEffect(()=>{if(We){const t=setTimeout(()=>T(null),4e3);return()=>clearTimeout(t)}},[We]);const Dt=async(t=null)=>{zt(!0);try{const s={},a=t||Wt;ct&&a&&(s.studentId=a);const n=await G.get("/exams",{params:s});n.data.success&&ht(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),T({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{zt(!1)}},Ka=t=>{var a,n;Zs(t);const s=at.find(l=>l._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const l=s.currentEnrollment.classLevel,d=typeof l=="object"?l:{_id:l,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Ts(d),b(d._id)}Dt(t),me&&ys(!1,t)},gs=async t=>{if(!t){Te([]);return}try{const s=await G.get(`/students/subjects?classLevel=${t}`);s.data.success&&Te(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},en=async()=>{try{const t=await G.get("/students/classes");t.data.success&&Xe(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};o.useEffect(()=>{(async()=>{var s,a,n,l,d,p;if(ct)try{const r=await G.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const w=r.data.data;Xa(w),Zs(w[0]._id);const m=(a=w[0].currentEnrollment)==null?void 0:a.classLevel;if(m){const v=typeof m=="object"?m:{_id:m,name:((n=w[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Ts(v),b(v._id)}Dt(w[0]._id)}else Dt()}catch(r){console.error("Error loading guardian children",r),Dt()}else if(Ss){try{const r=await G.get("/students",{params:{limit:1}});if(r.data.success&&((l=r.data.data)==null?void 0:l.length)>0){const w=r.data.data[0],m=(d=w.currentEnrollment)==null?void 0:d.classLevel;if(m){const v=typeof m=="object"?m:{_id:m,name:((p=w.currentEnrollment)==null?void 0:p.className)||"শ্রেণি"};Ts(v),b(v._id)}}}catch(r){console.error("Error loading student profile for class",r)}Dt()}else Dt();en(),bs()})(),me&&ys()},[]),o.useEffect(()=>{E==="student_result"&&f&&rt.length===0&&nn(f),E==="subject_result"&&ne.length>0&&!Me&&(vt(ne[0]._id),Cs(ne[0]._id,Nt))},[E,f,ne,rt.length]);const zs=t=>{ae({...P,[t.target.name]:t.target.value})},tn=async t=>{var l;gt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(d=>typeof d=="object"?d._id:d):[],n=((l=t.classLevel)==null?void 0:l._id)||"";ae({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&gs(n),et(!0)},sn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await G.delete(`/exams/${t}`)).data.success&&(T({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Dt())}catch(n){console.error("Failed to delete exam",n);const l=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";T({type:"error",message:l})}},an=async t=>{var s,a,n,l;if(t.preventDefault(),P.examCategory==="monthly_test"&&((s=P.selectedSubjects)==null?void 0:s.length)!==4){T({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=P.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}Gt(!0);try{let d;Ge?d=await G.patch(`/exams/${Ge}`,P):d=await G.post("/exams",P),d.data.success&&(et(!1),gt(null),ae({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),T({type:"success",message:Ge?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Dt())}catch(d){console.error("Failed to submit exam",d);const p=((l=(n=d.response)==null?void 0:n.data)==null?void 0:l.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";T({type:"error",message:p})}finally{Gt(!1)}},Qs=async t=>{var a,n,l,d,p,r,w,m;if(Tt(t),$t(""),At(""),tt([]),ut({}),yt([]),lt(null),Q(""),ie("all"),vt(""),ts("all"),i(""),y([]),c(new Set),me){Fe(!0);try{const v={examId:t._id};ct&&Wt&&(v.studentId=Wt);const g=await G.get("/exams/student-results",{params:v});if((a=g.data)!=null&&a.success&&g.data.data){lt(g.data.data);const x=(n=g.data.data.results)==null?void 0:n[0];yt((x==null?void 0:x.subjects)||[])}else{const x=await G.get("/exams/marks",{params:{exam:t._id,...ct&&Wt?{student:Wt}:{}}});yt(((d=(l=x.data)==null?void 0:l.data)==null?void 0:d.marks)||[])}}catch(v){console.error("Failed to load student detailed results",v);try{const g=await G.get("/exams/marks",{params:{exam:t._id,...ct&&Wt?{student:Wt}:{}}});yt(((r=(p=g.data)==null?void 0:p.data)==null?void 0:r.marks)||[])}catch{}}finally{Fe(!1)}return}const s=((w=t.classLevel)==null?void 0:w._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const v=await G.get(`/students/subjects?classLevel=${s}`);if(v.data.success){let N=v.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const S=t.selectedSubjects.map(W=>String(typeof W=="object"?W._id:W));N=N.filter(W=>S.includes(String(W._id)))}_t(N)}const g=await G.get(`/students/sections?classLevel=${s}`);g.data.success&&Et(g.data.data.sections||[]);const x=await G.get("/students",{params:{classLevel:s,limit:300}});if(x.data.success){const N=x.data.data;let S=Array.isArray(N)?N:(N==null?void 0:N.students)||[];if(S.length===0){const U=(m=(await G.get("/students",{params:{limit:500}})).data)==null?void 0:m.data;S=Array.isArray(U)?U:(U==null?void 0:U.students)||[]}S.sort((W,U)=>{var de,pe;return He(((de=W.currentEnrollment)==null?void 0:de.rollNumber)||W.roll)-He(((pe=U.currentEnrollment)==null?void 0:pe.rollNumber)||U.roll)}),es(S)}}catch(v){console.error("Failed to fetch subjects/sections for mark entry",v)}},nn=async t=>{var n,l,d;const s=t||f;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const p={limit:300};a&&(p.classLevel=a);const r=await G.get("/students",{params:p});if((l=r.data)!=null&&l.success){const w=r.data.data;let m=Array.isArray(w)?w:(w==null?void 0:w.students)||[];if(m.length===0&&a){const g=(d=(await G.get("/students",{params:{limit:500}})).data)==null?void 0:d.data;m=Array.isArray(g)?g:(g==null?void 0:g.students)||[]}m.sort((v,g)=>{var x,N;return He(((x=v.currentEnrollment)==null?void 0:x.rollNumber)||v.roll)-He(((N=g.currentEnrollment)==null?void 0:N.rollNumber)||g.roll)}),es(m)}}catch(p){console.warn("Failed to load class students:",p)}},Es=async t=>{var n,l;const a=Jt(t||je);if(!a||!String(a).trim()){T({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Vt(!0),lt(null);try{const d=await G.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:f==null?void 0:f._id}});d.data.success&&lt(d.data.data)}catch(d){console.error("Failed to load student result",d);const p=((l=(n=d.response)==null?void 0:n.data)==null?void 0:l.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";T({type:"error",message:p})}finally{Vt(!1)}},Cs=async(t,s)=>{const a=t!==void 0?t:Me,n=s!==void 0?s:Nt;if(!a){T({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}M(!0);try{const l={exam:f==null?void 0:f._id,subject:a},d=await G.get("/exams/marks",{params:l});if(d.data.success){let p=d.data.data.marks||[];n&&n!=="all"&&(p=p.filter(w=>{var g,x,N,S;const m=(g=w.student)==null?void 0:g.currentEnrollment,v=typeof(m==null?void 0:m.section)=="object"?((x=m==null?void 0:m.section)==null?void 0:x.name)||((N=m==null?void 0:m.section)==null?void 0:N._id):(m==null?void 0:m.section)||((S=w.student)==null?void 0:S.section);return String(v||"")===String(n)})),y(p);const r=new Set(p.map(w=>{var m;return String(((m=w.student)==null?void 0:m._id)||w._id)}));if(c(r),ne.length===0&&p.length>0){const w={};p.forEach(v=>{v.subject&&typeof v.subject=="object"&&v.subject._id&&(w[v.subject._id]=v.subject)});const m=Object.values(w);m.length>0&&_t(m)}}}catch(l){console.error("Failed to load subject marks",l),T({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{M(!1)}},Js=t=>{const s=t.map(l=>{var d;return String(((d=l.student)==null?void 0:d._id)||l._id)}),a=s.length>0&&s.every(l=>H.has(l)),n=new Set(H);a?s.forEach(l=>n.delete(l)):s.forEach(l=>n.add(l)),c(n)},ln=t=>{const s=new Set(H),a=String(t);s.has(a)?s.delete(a):s.add(a),c(s)},Bs=()=>{var w;if(!he||!he.results||he.results.length===0){T({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=he.student||{},s=he.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",l=t.department||"";let d="—";n&&l?d=`${n} (${l})`:n?d=n:l&&(d=l);const p=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${t.name||""}</title>
  ${rs("portrait")}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .student-badge-card { display: flex; gap: 12px; margin: 8px 0; align-items: stretch; }
    .student-info-grid { flex: 1; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; font-size: 11px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px 12px; }
    .grading-legend-box { width: 220px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px 6px; font-size: 9px; }
    .grading-legend-title { font-weight: 700; text-align: center; color: #0f766e; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px; margin-bottom: 2px; }
    .grading-legend-table { width: 100%; border-collapse: collapse; margin: 0; font-size: 8.5px; }
    .grading-legend-table th, .grading-legend-table td { padding: 1px 3px; border: 1px solid #e2e8f0; text-align: center; }
    .grading-legend-table th { background: #f1f5f9; font-weight: 700; }
    table.marks-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 11px; }
    table.marks-table th, table.marks-table td { border: 1px solid #cbd5e1; padding: 4px 6px; text-align: left; }
    table.marks-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .summary-box { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; margin-top: 8px; padding: 6px 10px; background: #f8fafc; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 11px; text-align: center; }
    .summary-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px; }
    .summary-item-label { font-size: 9.5px; color: #64748b; margin-bottom: 2px; }
    .summary-item-val { font-weight: 700; font-size: 12px; color: #0f766e; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${os({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(f==null?void 0:f.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((w=f==null?void 0:f.classLevel)==null?void 0:w.name)||"—"}</div>
          <div><strong>রোল নম্বর:</strong> ${t.rollNumber||"—"}</div>
          <div><strong>শাখা / বিভাগ:</strong> ${d}</div>
          <div><strong>সেকশন:</strong> ${t.section||"—"}</div>
        </div>

        <div class="grading-legend-box">
          <div class="grading-legend-title">গ্রেডিং স্কেল নির্দেশিকা</div>
          <table class="grading-legend-table">
            <thead>
              <tr>
                <th>নম্বর সীমা</th>
                <th>গ্রেড</th>
                <th>পয়েন্ট</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>৮০-১০০%</td><td style="font-weight:bold; color:#059669;">A+</td><td>৫.০</td></tr>
              <tr><td>৭০-৭৯%</td><td style="font-weight:bold; color:#059669;">A</td><td>৪.০</td></tr>
              <tr><td>৬০-৬৯%</td><td style="font-weight:bold; color:#0284c7;">A-</td><td>৩.৫</td></tr>
              <tr><td>৫০-৫৯%</td><td style="font-weight:bold; color:#d97706;">B</td><td>৩.০</td></tr>
              <tr><td>৪০-৪৯%</td><td style="font-weight:bold; color:#ea580c;">C</td><td>২.০</td></tr>
              <tr><td>৩৩-৩৯%</td><td style="font-weight:bold; color:#d97706;">D</td><td>১.০</td></tr>
              <tr><td>০০-৩২%</td><td style="font-weight:bold; color:#dc2626;">F</td><td>০.০</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <table class="marks-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th>বিষয়ের নাম</th>
            <th style="width: 65px;">কোড</th>
            <th style="width: 65px;">পূর্ণমান</th>
            <th style="width: 80px;">প্রাপ্ত নম্বর</th>
            <th style="width: 60px;">শতকরা</th>
            <th style="width: 55px;">গ্রেড</th>
            <th style="width: 55px;">জিপিএ</th>
            <th style="width: 65px;">ফলাফল</th>
          </tr>
        </thead>
        <tbody>
          ${(s.subjects||[]).map((m,v)=>`
            <tr>
              <td class="text-center">${v+1}</td>
              <td class="font-bold">${m.subjectName}</td>
              <td class="text-center">${m.subjectCode||"—"}</td>
              <td class="text-center">${m.totalMarks}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${m.marksObtained}</td>
              <td class="text-center">${m.percentage}%</td>
              <td class="text-center font-bold">${m.grade}</td>
              <td class="text-center">${(m.gradePoint??0).toFixed(1)}</td>
              <td class="text-center font-bold" style="color: ${m.isPassed?"#059669":"#dc2626"};">${m.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div class="summary-box">
        <div class="summary-item">
          <div class="summary-item-label">মোট পূর্ণমান</div>
          <div class="summary-item-val">${s.totalMaxMarks}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">প্রাপ্ত নম্বর</div>
          <div class="summary-item-val">${s.totalObtained}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">শতকরা (%)</div>
          <div class="summary-item-val">${s.overallPercentage}%</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">চূড়ান্ত গ্রেড</div>
          <div class="summary-item-val" style="color: ${s.overallGrade==="F"?"#dc2626":"#059669"};">${s.overallGrade}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">জিপিএ (GPA)</div>
          <div class="summary-item-val">${(s.gpa??0).toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="summary-item-label">মেধা স্থান</div>
          <div class="summary-item-val">${s.position?s.position+" তম":"—"}</div>
        </div>
      </div>

      ${ds(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(p),r.document.close())},Xs=t=>{var l,d,p,r,w,m,v;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((l=f==null?void 0:f.classLevel)==null?void 0:l.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Bs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((g,x)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:x+1}),e.jsx("td",{className:"font-semibold",children:g.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:g.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:g.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:g.marksObtained!==null&&typeof g.marksObtained=="object"?g.marksObtained.marksObtained:g.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[g.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(g.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:g.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(g.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${g.isPassed?"badge-active":"badge-danger"}`,children:g.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},g.markId||x))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((d=n.term1)==null?void 0:d.obtained)||0," / ",((p=n.term1)==null?void 0:p.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((w=n.term2)==null?void 0:w.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((m=n.term3)==null?void 0:m.obtained)||0," / ",((v=n.term3)==null?void 0:v.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},Ks=t=>{var g;const s=(t||h).filter(x=>{var N;return H.has(String(((N=x.student)==null?void 0:N._id)||x._id))});if(s.length===0){T({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=ne.find(x=>x._id===Me),n=(a==null?void 0:a.name)||"বিষয়",l=Number(a==null?void 0:a.totalMarks)||100,d=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),p=s.length,r=s.filter(x=>{const N=Number(x.marksObtained)||0;return(l>0?N/l*100:N)>=33}).length,w=p>0?Math.round(r/p*100):0,m=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${n}</title>
  ${rs("portrait")}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .stats-strip { display: flex; justify-content: space-between; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; margin: 8px 0; font-size: 11px; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${os({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((g=f==null?void 0:f.classLevel)==null?void 0:g.name)||"")+" | <strong>পূর্ণমান:</strong> "+l+" | <strong>পরীক্ষা:</strong> "+((f==null?void 0:f.name)||""),metaRight:"<strong>তারিখ:</strong> "+d})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${p} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${p-r} জন</div>
        <div><strong>পাসের হার:</strong> ${w}%</div>
      </div>

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th style="width: 50px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 80px;">আইডি</th>
            <th style="width: 60px;">সেকশন</th>
            <th style="width: 85px;">প্রাপ্ত নম্বর</th>
            <th style="width: 55px;">শতকরা</th>
            <th style="width: 50px;">গ্রেড</th>
            <th style="width: 65px;">ফলাফল</th>
          </tr>
        </thead>
        <tbody>
          ${s.map((x,N)=>{var ge,Re,k,u,B,$,se,z,be,fe,ve,Ne,kt,pt,Se,De,St,Ea,Ba,Pa,Fa;const S=Number(x.marksObtained)||0,W=l>0?Math.round(S/l*100):S,U=Mt(S,l),de=W>=33,pe=((ge=x.student)==null?void 0:ge.fullName)||((k=(Re=x.student)==null?void 0:Re.user)==null?void 0:k.fullName)||`${((B=(u=x.student)==null?void 0:u.user)==null?void 0:B.firstName)||""} ${((se=($=x.student)==null?void 0:$.user)==null?void 0:se.lastName)||""}`.trim()||"—",ke=((be=(z=x.student)==null?void 0:z.currentEnrollment)==null?void 0:be.rollNumber)||((fe=x.student)==null?void 0:fe.roll)||"—",Ie=((ve=x.student)==null?void 0:ve.studentId)||"—",ce=typeof((kt=(Ne=x.student)==null?void 0:Ne.currentEnrollment)==null?void 0:kt.section)=="object"?((De=(Se=(pt=x.student)==null?void 0:pt.currentEnrollment)==null?void 0:Se.section)==null?void 0:De.name)||((Ba=(Ea=(St=x.student)==null?void 0:St.currentEnrollment)==null?void 0:Ea.section)==null?void 0:Ba._id):((Fa=(Pa=x.student)==null?void 0:Pa.currentEnrollment)==null?void 0:Fa.section)||"—";return`
              <tr>
                <td class="text-center">${N+1}</td>
                <td class="text-center font-bold">${ke}</td>
                <td class="font-bold">${pe}</td>
                <td class="text-center">${Ie}</td>
                <td class="text-center">${ce}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${S} / ${l}</td>
                <td class="text-center font-bold">${W}%</td>
                <td class="text-center font-bold">${U}</td>
                <td class="text-center font-bold" style="color: ${de?"#059669":"#dc2626"};">${de?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${ds(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,v=window.open("","_blank");v&&(v.document.write(m),v.document.close())},Ps=()=>{var x;if(!Ye||Ye.length===0){T({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=ne.find(N=>N._id===ue),s=ue==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,l=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),d=_==="all"?"সকল সেকশন":`সেকশন ${_}`,p=Ye.filter(N=>{const S=ye[N._id];return S!==void 0&&S!==""&&!isNaN(S)}).length,r=Ye.filter(N=>{const S=ye[N._id];return S===void 0||S===""||isNaN(S)?!1:(n>0?Number(S)/n*100:Number(S))>=33}).length,w=p>0?Math.round(r/p*100):0,m=[...Ye].sort((N,S)=>{var W,U;return He(((W=N.currentEnrollment)==null?void 0:W.rollNumber)||N.roll)-He(((U=S.currentEnrollment)==null?void 0:U.rollNumber)||S.roll)}),v=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(f==null?void 0:f.name)||""})</title>
  ${rs("portrait")}
  <style>
    @page { size: A4 portrait; margin: 8mm 10mm !important; }
    .stats-strip { display: flex; justify-content: space-between; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; margin: 8px 0; font-size: 11px; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10.5px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${os({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((f==null?void 0:f.name)||"")+" | <strong>শ্রেণি:</strong> "+(((x=f==null?void 0:f.classLevel)==null?void 0:x.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+d,metaRight:"<strong>তারিখ:</strong> "+l})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Ye.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${p} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Ye.length-r} জন</div>
          <div><strong>পাসের হার:</strong> ${w}%</div>
        </div>
      `}

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 36px;">ক্রমিক</th>
            <th style="width: 50px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 80px;">আইডি</th>
            <th style="width: 60px;">সেকশন</th>
            ${s?`
              <th>বিষয়ভিত্তিক নম্বর ও গ্রেড</th>
            `:`
              <th style="width: 85px;">প্রাপ্ত নম্বর</th>
              <th style="width: 55px;">শতকরা</th>
              <th style="width: 50px;">গ্রেড</th>
              <th style="width: 65px;">ফলাফল</th>
            `}
          </tr>
        </thead>
        <tbody>
          ${m.map((N,S)=>{var B,$,se,z,be,fe,ve,Ne,kt,pt;const W=N._id,U=((B=N.currentEnrollment)==null?void 0:B.rollNumber)||N.roll||"—",de=(($=N.user)==null?void 0:$.fullName)||`${((se=N.user)==null?void 0:se.firstName)||""} ${((z=N.user)==null?void 0:z.lastName)||""}`.trim()||"—",pe=N.studentId||"—",ke=typeof((be=N.currentEnrollment)==null?void 0:be.section)=="object"?((ve=(fe=N.currentEnrollment)==null?void 0:fe.section)==null?void 0:ve.name)||((kt=(Ne=N.currentEnrollment)==null?void 0:Ne.section)==null?void 0:kt._id):((pt=N.currentEnrollment)==null?void 0:pt.section)||N.section||_;if(s){const Se=Array.isArray(ye[W])?ye[W]:[],De=Se.length>0?Se.map(St=>St.subjectName+": "+St.marksObtained+" ("+St.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${S+1}</td>
                  <td class="text-center font-bold">${U}</td>
                  <td class="font-bold">${de}</td>
                  <td class="text-center">${pe}</td>
                  <td class="text-center">${ke}</td>
                  <td style="font-size: 10px;">${De}</td>
                </tr>
              `}const Ie=ye[W],ce=Ie!==void 0&&Ie!==""&&!isNaN(Ie),ge=ce?Number(Ie):null,Re=ce?n>0?Math.round(ge/n*100):ge:null,k=ce?Mt(ge,n):"—",u=ce?Re>=33:!1;return`
              <tr>
                <td class="text-center">${S+1}</td>
                <td class="text-center font-bold">${U}</td>
                <td class="font-bold">${de}</td>
                <td class="text-center">${pe}</td>
                <td class="text-center">${ke}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${ce?ge+" / "+n:"—"}</td>
                <td class="text-center font-bold">${ce?Re+"%":"—"}</td>
                <td class="text-center font-bold">${k}</td>
                <td class="text-center font-bold" style="color: ${ce?u?"#059669":"#dc2626":"#64748b"};">
                  ${ce?u?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${ds(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,g=window.open("","_blank");g&&(g.document.write(v),g.document.close())},rn=async()=>{if(!ue||!_){T({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}Fe(!0);try{const t={classLevel:f.classLevel._id,limit:100};_!=="all"&&(t.section=_);const a=(await G.get("/students",{params:t})).data.data||[];a.sort((p,r)=>{var v,g;const w=He(((v=p.currentEnrollment)==null?void 0:v.rollNumber)||p.roll),m=He(((g=r.currentEnrollment)==null?void 0:g.rollNumber)||r.roll);return w-m}),tt(a);const n={exam:f._id};ue!=="all"&&(n.subject=ue);const d=(await G.get("/exams/marks",{params:n})).data.data.marks||[];if(ue==="all"){const p={};a.forEach(r=>{p[r._id]=[]}),d.forEach(r=>{var m,v;const w=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;w&&p[w]&&p[w].push({subjectName:((v=r.subject)==null?void 0:v.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),ut(p)}else{const p={};a.forEach(r=>{p[r._id]=""}),d.forEach(r=>{var m;const w=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;w&&(p[w]=r.marksObtained??"")}),ut(p)}}catch(t){console.error("Failed to load students for marks entry",t),T({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{Fe(!1)}},fs=async(t=st,s=f)=>{var l,d,p,r,w,m,v,g;const a=s||f;if(!a)return;const n=((l=a.classLevel)==null?void 0:l._id)||(typeof a.classLevel=="string"?a.classLevel:null);Pt(!0);try{if(me){const k=await G.get(`/exams/${a._id}/rankings`);if(k.data.success&&k.data.data){const{rankings:u=[],evaluatedSubjects:B=[]}=k.data.data;Kt(B);const se=(t&&t!=="all"?u.filter(z=>String(z.section||"")===String(t)):u).map((z,be)=>{const fe={_id:z.studentId,studentId:z.studentCode||z.studentId,user:{fullName:z.name,firstName:z.name},currentEnrollment:{rollNumber:z.rollNumber,section:z.section}},ve={};z.subjectMarks&&Object.keys(z.subjectMarks).forEach(pt=>{const Se=z.subjectMarks[pt],De=Se!==null&&typeof Se=="object"?Se.marksObtained:Se,St=Se!==null&&typeof Se=="object"&&Se.grade||Mt(De);ve[pt]={marksObtained:De!=null&&typeof De!="object"?De:"",grade:St||""}});const Ne=z.isPassed!==void 0?z.isPassed:z.grade!=="F"&&!z.isIncomplete,kt=z.gpa||(Ne&&z.percentage>=33?z.percentage>=80?"5.00":z.percentage>=70?"4.00":z.percentage>=60?"3.50":z.percentage>=50?"3.00":z.percentage>=40?"2.00":"1.00":"0.00");return{student:fe,studentMarksObj:ve,totalObtained:z.totalObtained,totalFullMarks:z.totalMaxMarks,percentage:z.percentage,overallGrade:z.grade,gpa:kt,isPassed:Ne,subjectsCountWithMarks:Object.keys(ve).length,rankNum:z.rank||be+1,rankText:Fn(z.rank||be+1),roll:He(z.rollNumber)}});Ue(se);return}}const N=((p=(d=(await G.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:d.data)==null?void 0:p.marks)||[];let S=[];if(n)try{S=((w=(r=(await G.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:w.subjects)||[]}catch(k){console.warn("Subject fetch warning:",k)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const k=a.selectedSubjects.map(u=>String(typeof u=="object"?u._id:u));S=S.filter(u=>k.includes(String(u._id)))}let W=S.filter(k=>N.some(u=>{var $,se;const B=typeof u.subject=="object"?(($=u.subject)==null?void 0:$._id)||((se=u.subject)==null?void 0:se.id):u.subject;return String(B)===String(k._id)&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""}));if(W.length===0&&N.length>0){const k={};N.forEach(u=>{var $,se;const B=typeof u.subject=="object"?(($=u.subject)==null?void 0:$._id)||((se=u.subject)==null?void 0:se.id):u.subject;if(B&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""){const z=typeof u.subject=="object"?u.subject.name||u.subject.code:"বিষয়",be=typeof u.subject=="object"?u.subject.code:"",fe=typeof u.subject=="object"?u.subject.totalMarks||u.totalMarks||100:u.totalMarks||100;k[String(B)]={_id:String(B),name:z,code:be,totalMarks:Number(fe)||100}}}),W=Object.values(k)}W.length===0&&S.length>0&&(W=S),Kt(W);const U=W.reduce((k,u)=>k+(Number(u.totalMarks)||100),0);let de=[];if(n)try{const k={classLevel:n,limit:300};t&&t!=="all"&&(k.section=t),de=((m=(await G.get("/students",{params:k})).data)==null?void 0:m.data)||[]}catch(k){console.warn("Students fetch warning:",k)}if(de.length===0){const k={};N.forEach(u=>{u.student&&typeof u.student=="object"&&u.student._id&&(k[u.student._id]=u.student)}),de=Object.values(k)}const pe={};N.forEach(k=>{var z,be,fe,ve;const u=typeof k.student=="object"?((z=k.student)==null?void 0:z._id)||((be=k.student)==null?void 0:be.id):k.student,B=typeof k.subject=="object"?((fe=k.subject)==null?void 0:fe._id)||((ve=k.subject)==null?void 0:ve.id):k.subject;if(!u||!B)return;const $=String(u),se=String(B);pe[$]||(pe[$]={}),pe[$][se]={marksObtained:k.marksObtained,grade:k.grade}});const ke=de.map(k=>{var kt;const u=pe[k._id]||{};let B=0,$=0,se=0;W.forEach(pt=>{const Se=u[pt._id];if(Se&&Se.marksObtained!==null&&Se.marksObtained!==void 0&&Se.marksObtained!==""){const De=Number(Se.marksObtained);B+=De,$+=1;const St=Number(pt.totalMarks)||100;De<St*.33&&(se+=1)}});const z=U>0?Number((B/U*100).toFixed(1)):0,be=W.length>0&&$>0&&$<W.length,fe=$>0&&se===0&&!be,ve=fe?Mt(z):se>0?"F":be?Mt(z):$>0?"F":"—";let Ne="—";return $>0&&(!fe||z<33?Ne="0.00":z>=80?Ne="5.00":z>=70?Ne="4.00":z>=60?Ne="3.50":z>=50?Ne="3.00":z>=40?Ne="2.00":Ne="1.00"),{student:k,studentMarksObj:u,totalObtained:B,totalFullMarks:U,subjectsCountWithMarks:$,failedCount:se,isIncomplete:be,percentage:z,isPassed:fe,overallGrade:ve,gpa:Ne,roll:He(((kt=k.currentEnrollment)==null?void 0:kt.rollNumber)||k.roll)}});ke.sort((k,u)=>k.subjectsCountWithMarks===0&&u.subjectsCountWithMarks===0?k.roll-u.roll:k.subjectsCountWithMarks===0?1:u.subjectsCountWithMarks===0||k.failedCount===0&&u.failedCount>0?-1:k.failedCount>0&&u.failedCount===0?1:u.totalObtained!==k.totalObtained?u.totalObtained-k.totalObtained:k.roll-u.roll);let Ie=1,ce=null,ge=0;const Re=ke.map(k=>{if(k.subjectsCountWithMarks===0)return{...k,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};ge+=1,ce!==null&&k.totalObtained===ce||(Ie=ge,ce=k.totalObtained);const u=Ie,B=ke.filter(se=>se.subjectsCountWithMarks>0&&se.totalObtained===k.totalObtained).length>1;let $="";return u===1?$=B?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":u===2?$=B?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":u===3?$=B?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":u===4?$=B?"৪র্থ (যৌথ)":"৪র্থ":u===5?$=B?"৫ম (যৌথ)":"৫ম":u===6?$=B?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":u===7?$=B?"৭ম (যৌথ)":"৭ম":u===8?$=B?"৮ম (যৌথ)":"৮ম":u===9?$=B?"৯ম (যৌথ)":"৯ম":u===10?$=B?"১০ম (যৌথ)":"১০ম":$=B?`${u}তম (যৌথ)`:`${u}তম`,k.failedCount>0?$+=" (অনুত্তীর্ণ)":k.isIncomplete&&($+=" (অসম্পূর্ণ)"),{...k,rankNum:u,rankText:$}});Ue(Re)}catch(x){console.error("Error loading merit list:",x);const N=((g=(v=x.response)==null?void 0:v.data)==null?void 0:g.message)||x.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";T({type:"error",message:N})}finally{Pt(!1)}},us=async(t,s="all")=>{var a,n;if(t){O(!0);try{const l={classLevel:t};s&&s!=="all"&&(l.section=s);const d=await G.get("/exams/annual-rankings",{params:l});d.data.success&&ee(d.data.data)}catch(l){console.error("Failed to load annual rankings",l),T({type:"error",message:((n=(a=l.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{O(!1)}}},on=()=>{var n,l,d;if(!A||!A.rankings||A.rankings.length===0){T({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=A.classLevel)==null?void 0:n.name)||""}</title>
  ${rs("landscape")}
  <style>
    @page { size: A4 landscape; margin: 8mm 10mm !important; }
    table.compact-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 10px; }
    table.compact-table th, table.compact-table td { border: 1px solid #cbd5e1; padding: 3px 5px; text-align: left; }
    table.compact-table th { background: #0f766e; color: #fff; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .font-bold { font-weight: 700; }
    .print-footer-signatures { padding-top: 14px !important; margin-top: auto !important; }
    .sig-line { font-size: 11px !important; padding-top: 3px !important; }
    .sig-sub { font-size: 9.5px !important; }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${os({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((l=A.classLevel)==null?void 0:l.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((d=A.classLevel)==null?void 0:d.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${A.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

      <table class="compact-table">
        <thead>
          <tr>
            <th style="width: 85px;">বার্ষিক মেধা স্থান</th>
            <th style="width: 45px;">রোল</th>
            <th>শিক্ষার্থীর নাম</th>
            <th style="width: 75px;">আইডি</th>
            <th style="width: 80px;">১ম সাময়িক</th>
            <th style="width: 80px;">২য় সাময়িক</th>
            <th style="width: 80px;">৩য় সাময়িক</th>
            <th style="width: 95px;">সর্বমোট নম্বর</th>
            <th style="width: 55px;">শতকরা</th>
            <th style="width: 50px;">গ্রেড</th>
          </tr>
        </thead>
        <tbody>
          ${A.rankings.map((p,r)=>`
            <tr>
              <td class="text-center font-bold" style="color: ${r===0?"#b45309":r===1?"#0369a1":r===2?"#b45309":"#0f172a"};">${p.rankText}</td>
              <td class="text-center font-bold">${p.rollNumber||"—"}</td>
              <td class="font-bold">${p.name}</td>
              <td class="text-center">${p.studentCode}</td>
              <td class="text-center">${p.term1Obtained} / ${p.term1Max}</td>
              <td class="text-center">${p.term2Obtained} / ${p.term2Max}</td>
              <td class="text-center">${p.term3Obtained} / ${p.term3Max}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${p.grandTotalObtained} / ${p.grandTotalMaxMarks}</td>
              <td class="text-center font-bold">${p.overallPercentage}%</td>
              <td class="text-center font-bold">${p.overallGrade}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      ${ds(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ns=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},bs=async(t=Ve,s=dt,a=Ot,n=!1)=>{var l,d;Be(!0);try{const p={};t&&t!=="all"&&(p.stream=t),s&&s!=="all"&&(p.exam=s),a&&a!=="all"&&(p.classLevel=a);const r=await G.get("/exams/routines",{params:p});r.data.success&&le(r.data.data.routines||[])}catch(p){console.error("Failed to load routines",p),n&&T({type:"error",message:((d=(l=p.response)==null?void 0:l.data)==null?void 0:d.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{Be(!1)}},ys=async(t=!1,s=null)=>{Be(!0);try{const a={},n=s||Wt;ct&&n&&(a.studentId=n);const l=await G.get("/exams/student-routine",{params:a});l.data.success&&(Ze(l.data.data),le(l.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{Be(!1)}},Fs=(t=null)=>{var a,n,l,d,p,r;const s=(t==null?void 0:t.classLevel)||((a=f==null?void 0:f.classLevel)==null?void 0:a._id)||((n=X[0])==null?void 0:n._id)||"";s&&gs(s),t?(hs(t._id),Oe({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(hs(null),Oe({title:f?`${f.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(f==null?void 0:f._id)||((l=ze[0])==null?void 0:l._id)||"",examName:(f==null?void 0:f.name)||((d=ze[0])==null?void 0:d.name)||"",classLevel:s,className:((p=f==null?void 0:f.classLevel)==null?void 0:p.name)||((r=X[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),Zt(!0)},dn=()=>{if(!Z||Z.length===0){T({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=Z.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));Oe(s=>({...s,schedule:t})),T({type:"success",message:`${Z.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},cn=async t=>{var s,a;if(t&&t.preventDefault(),!Pe.title.trim()){T({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}xs(!0);try{const n={...Pe,_id:as},l=await G.post("/exams/routines",n);l.data.success&&(T({type:"success",message:l.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),Zt(!1),bs())}catch(n){console.error("Failed to save routine",n),T({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{xs(!1)}},pn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await G.delete(`/exams/routines/${t}`)).data.success&&(T({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),le(l=>l.filter(d=>d._id!==t)))}catch(n){console.error("Failed to delete routine",n),T({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},mn=()=>{Oe(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},ea=t=>{Oe(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},re=(t,s,a)=>{Oe(n=>{const l=[...n.schedule],d={...l[t],[s]:a};if(s==="date"&&(d.day=ns(a)),s==="subject"){const p=Z&&Z.find(r=>r._id===a)||ne.find(r=>r._id===a);p?(d.subject=p._id,d.subjectName=p.name,d.totalMarks=Number(p.totalMarks)||100):(d.subject=a,d.subjectName=a)}return l[t]=d,{...n,schedule:l}})},xn=t=>{if(!t||!t.schedule||t.schedule.length===0){T({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),l=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${t.title||"পরীক্ষার রুটিন"} - ${t.className||""}</title>
  ${rs("portrait")}
  <style>
    @page { size: A4 portrait; margin: 8mm 12mm !important; }
    
    .routine-banner {
      margin: 12px 0 14px 0;
      text-align: center;
      position: relative;
    }
    .routine-badge-title {
      display: inline-block;
      background: #0f766e;
      color: #ffffff;
      padding: 6px 24px;
      font-size: 15px;
      font-weight: 800;
      border-radius: 20px;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 4px rgba(15, 118, 110, 0.2);
    }
    .routine-sub-meta {
      margin-top: 8px;
      font-size: 11px;
      color: #1e293b;
      font-weight: 600;
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .routine-sub-meta span {
      background: #f8fafc;
      padding: 2.5px 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
    }

    table.routine-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 11px;
      border: 1.5px solid #0f766e;
    }
    table.routine-table th, table.routine-table td {
      border: 1px solid #cbd5e1;
      padding: 7px 10px;
      vertical-align: middle;
    }
    table.routine-table th {
      background: #0f766e;
      color: #ffffff;
      font-weight: 700;
      font-size: 11px;
      text-align: center;
      letter-spacing: 0.3px;
    }
    table.routine-table tbody tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    
    .instructions-box {
      margin-top: 14px;
      padding: 10px 14px;
      border: 1.5px dashed #0f766e;
      border-radius: 8px;
      font-size: 10px;
      background: rgba(15, 118, 110, 0.03);
      page-break-inside: avoid;
    }
    .instructions-title {
      font-weight: 800;
      color: #0f766e;
      font-size: 11px;
      margin-bottom: 5px;
    }
    .instructions-list {
      margin: 0;
      padding-left: 18px;
      line-height: 1.55;
      color: #1e293b;
    }
    .instructions-list li {
      margin-bottom: 2px;
    }
  </style>
</head>
<body>
  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${os({title:"",orientation:"portrait",metaLeft:`<strong>বিভাগ:</strong> ${a} ${t.className?`| <strong>শ্রেণি:</strong> ${t.className}`:""}`,metaRight:`<strong>তারিখ:</strong> ${n}`})}

      <div class="routine-banner">
        <div class="routine-badge-title">
          ${t.title||"পরীক্ষার রুটিন ও সময়সূচি"}
        </div>
        <div class="routine-sub-meta">
          <span><strong>বিভাগ:</strong> ${a}</span>
          ${t.className?`<span><strong>শ্রেণি:</strong> ${t.className}</span>`:""}
          ${t.examName?`<span><strong>পরীক্ষা:</strong> ${t.examName}</span>`:""}
        </div>
      </div>

      <table class="routine-table">
        <thead>
          <tr>
            <th style="width: 38px;">ক্রম</th>
            <th style="width: 140px;">তারিখ ও বার</th>
            <th style="text-align: left; padding-left: 14px;">পরীক্ষার বিষয়</th>
            <th style="width: 75px;">পূর্ণমান</th>
            <th style="width: 165px;">সময়সূচি</th>
            <th style="width: 80px;">কক্ষ নম্বর</th>
          </tr>
        </thead>
        <tbody>
          ${t.schedule.map((d,p)=>`
            <tr>
              <td class="text-center font-bold" style="color: #0f766e;">${Qe(p+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${Xt(d.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${d.day||ns(d.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${d.subjectName||d.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${Qe(d.totalMarks||100)}</td>
              <td class="text-center" style="font-weight: 700; font-size: 10.5px; color: #1e293b;">
                ${d.startTime||"—"} থেকে ${d.endTime||"—"}
              </td>
              <td class="text-center">
                <span style="font-weight: 700; background: #e2e8f0; padding: 2.5px 8px; border-radius: 4px; font-size: 10px;">${d.roomNo||"১০১"}</span>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div class="instructions-box">
        <div class="instructions-title">
          <span>📋 পরীক্ষার্থীদের জন্য জরুরি নিয়মাবলী ও নির্দেশনাবলী:</span>
        </div>
        <ul class="instructions-list">
          ${t.instructions?`<li><strong>বিশেষ নির্দেশ:</strong> ${t.instructions}</li>`:""}
          <li>পরীক্ষা শুরুর অন্তত ১৫ মিনিট পূর্বে নিজ নিজ নির্ধারিত আসনে উপস্থিত থাকতে হবে।</li>
          <li>প্রবেশপত্র (Admit Card) এবং প্রয়োজনীয় শিক্ষা উপকরণ (কলম, পেন্সিল, স্কেল ইত্যাদি) সাথে রাখতে হবে।</li>
          <li>পরীক্ষার হলে মোবাইল ফোন বা কোনো অননুমোদিত ডিজিটাল ডিভাইস বহন সম্পূর্ণ নিষিদ্ধ।</li>
          <li>পরীক্ষার্থীর রোল ও আইডি উত্তরপত্রে নির্ভুলভাবে লিখতে হবে।</li>
        </ul>
      </div>

      ${ds(["শ্রেণি শিক্ষক / হল সুপার","পরীক্ষা নিয়ন্ত্রক","প্রতিষ্ঠান প্রধান / পরিচালক"])}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;s.document.open(),s.document.write(l),s.document.close()},hn=(t=we,s=Le)=>{var g;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(f==null?void 0:f.name)||"পরীক্ষা",l=((g=f==null?void 0:f.classLevel)==null?void 0:g.name)||"সকল শ্রেণি",d=st==="all"?"সকল সেকশন":`সেকশন ${st}`,p=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let w="";V.forEach((x,N)=>{var ce,ge,Re,k;const S=x.student,W=((ce=S.currentEnrollment)==null?void 0:ce.rollNumber)||S.roll||"—",U=((ge=S.user)==null?void 0:ge.fullName)||`${((Re=S.user)==null?void 0:Re.firstName)||""} ${((k=S.user)==null?void 0:k.lastName)||""}`.trim()||S.studentId||"—",de=S.studentId||"—",pe=x.rankNum===1?"#fef3c7":x.rankNum===2?"#f1f5f9":x.rankNum===3?"#ffedd5":"transparent",ke=x.rankNum===1?"🥇 ":x.rankNum===2?"🥈 ":x.rankNum===3?"🥉 ":"",Ie=D.map(u=>{var fe,ve;const B=(ve=(fe=x.studentMarksObj)==null?void 0:fe[String(u._id)])==null?void 0:ve.marksObtained,$=B!==null&&typeof B=="object"?B.marksObtained??"":B??"",se=$!=null&&$!=="",z=Number(u.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${se&&Number($)<z*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${se?$:"—"}</td>`}).join("");w+=`
        <tr style="background-color: ${pe};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${Qe(N+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${U}</div>
            <div class="student-meta-text">আইডি: ${de}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${W}</td>
          ${Ie}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${x.subjectsCountWithMarks===0?"—":`${x.totalObtained} / ${x.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${ke}${x.rankText||"—"}</td>
          <td class="col-grade" style="text-align: center; font-weight: bold; color: ${x.overallGrade==="F"?"#dc2626":"#059669"};">
            ${x.overallGrade}
          </td>
          <td class="col-gpa" style="text-align: center; font-weight: bold; color: ${x.overallGrade==="F"?"#dc2626":"#0f766e"};">
            ${x.subjectsCountWithMarks===0?"—":x.gpa||"0.00"}
          </td>
          <td class="col-percent" style="text-align: center; font-weight: 600;">${x.subjectsCountWithMarks===0?"—":`${x.percentage}%`}</td>
          <td class="col-status" style="text-align: center; font-weight: 600; color: ${x.subjectsCountWithMarks===0?"#64748b":x.isIncomplete?"#b45309":x.isPassed?"#059669":"#dc2626"};">
            ${x.subjectsCountWithMarks===0?"অনুপস্থিত":x.isIncomplete?"অসম্পূর্ণ":x.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}
          </td>
        </tr>
      `});const m=D.map(x=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${x.name}</div>
        <div class="sub-mark-box">(${x.totalMarks||100})</div>
      </th>
    `).join(""),v=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${rs(t)}
      <style id="dynamic-page-style">
        @page { 
          size: A4 ${t}; 
          margin: ${r?"6mm 8mm":"8mm 10mm"} !important; 
        }
      </style>
      <style>
        @media print {
          .no-print { display: none !important; }
          html, body { 
            margin: 0 !important; 
            padding: 0 !important; 
            background: #fff !important; 
          }
        }
        body {
          font-family: 'Noto Sans Bengali', sans-serif;
          color: #0f172a;
          background: #f8fafc;
        }
        #raw-content {
          position: absolute;
          visibility: hidden;
          left: -9999px;
          top: -9999px;
          width: ${r?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: ${r?"281mm":"194mm"};
          max-width: 100%;
          height: calc(${r?"210mm":"297mm"} - ${r?"12mm":"16mm"});
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          background: #ffffff;
        }
        .print-page.last-page,
        .print-page:last-child {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }
        .page-top {
          width: 100%;
          position: relative;
          z-index: 10;
          box-sizing: border-box;
        }
        .page-bottom {
          width: 100%;
          margin-top: auto;
          padding-top: 14px;
          position: relative;
          z-index: 10;
        }
        table.compact-table { 
          width: 100%; 
          border-collapse: collapse; 
          margin-top: 4px; 
          box-sizing: border-box;
          table-layout: auto;
        }
        table.compact-table th, table.compact-table td { 
          border: 1px solid #cbd5e1; 
          box-sizing: border-box;
        }
        table.compact-table th { 
          background: #0f766e; 
          color: #fff; 
          font-weight: 700; 
          text-align: center; 
        }

        /* Portrait Mode Rules (Auto-Fit & Zero Overflow) */
        body.mode-portrait table.compact-table { font-size: 8px; }
        body.mode-portrait table.compact-table th, 
        body.mode-portrait table.compact-table td { padding: 2px 1.5px; }
        body.mode-portrait .col-serial { width: 22px; text-align: center; font-size: 8px; }
        body.mode-portrait .col-student { width: 92px; max-width: 95px; word-break: break-word; text-align: left; padding: 2px 3px; }
        body.mode-portrait .student-name-text { font-weight: 700; font-size: 8.5px; line-height: 1.15; word-break: break-word; }
        body.mode-portrait .student-meta-text { font-size: 7px; color: #475569; line-height: 1.1; word-break: break-all; }
        body.mode-portrait .col-roll { width: 25px; text-align: center; font-size: 8.5px; }
        body.mode-portrait .col-subject { font-size: 8px; padding: 2px 1px; }
        body.mode-portrait .sub-name-box { max-width: 42px; margin: 0 auto; word-break: break-word; line-height: 1.1; font-size: 7.5px; }
        body.mode-portrait .sub-mark-box { font-size: 7px; font-weight: normal; opacity: 0.9; }
        body.mode-portrait .col-total { width: 48px; text-align: center; font-size: 8px; white-space: nowrap; }
        body.mode-portrait .col-rank { width: 44px; text-align: center; font-size: 8px; white-space: nowrap; }
        body.mode-portrait .col-grade { width: 25px; text-align: center; font-size: 8.5px; }
        body.mode-portrait .col-gpa { width: 27px; text-align: center; font-size: 8.5px; }
        body.mode-portrait .col-percent { width: 33px; text-align: center; font-size: 7.5px; white-space: nowrap; }
        body.mode-portrait .col-status { width: 36px; text-align: center; font-size: 7.5px; white-space: nowrap; }
        body.mode-portrait .header-arabic-img { height: 32px; max-width: 210px; }
        body.mode-portrait .col-center .header-logo-center { width: 50px; height: 50px; }
        body.mode-portrait .phone-badge-single { font-size: 8px; padding: 1.5px 6px; }

        /* Landscape Mode Rules (Spacious layout) */
        body.mode-landscape table.compact-table { font-size: 9.5px; }
        body.mode-landscape table.compact-table th, 
        body.mode-landscape table.compact-table td { padding: 3px 4px; }
        body.mode-landscape .col-serial { width: 32px; text-align: center; font-size: 9px; }
        body.mode-landscape .col-student { width: 140px; max-width: 160px; word-break: break-word; text-align: left; padding: 3px 6px; }
        body.mode-landscape .student-name-text { font-weight: 700; font-size: 10px; line-height: 1.2; word-break: break-word; }
        body.mode-landscape .student-meta-text { font-size: 8px; color: #475569; line-height: 1.15; }
        body.mode-landscape .col-roll { width: 38px; text-align: center; font-size: 9.5px; }
        body.mode-landscape .col-subject { font-size: 9px; padding: 3px 3px; }
        body.mode-landscape .sub-name-box { max-width: 65px; margin: 0 auto; word-break: break-word; line-height: 1.15; font-size: 9px; }
        body.mode-landscape .sub-mark-box { font-size: 8px; font-weight: normal; opacity: 0.9; }
        body.mode-landscape .col-total { width: 70px; text-align: center; font-size: 9.5px; white-space: nowrap; }
        body.mode-landscape .col-rank { width: 65px; text-align: center; font-size: 9.5px; white-space: nowrap; }
        body.mode-landscape .col-grade { width: 36px; text-align: center; font-size: 9.5px; }
        body.mode-landscape .col-gpa { width: 40px; text-align: center; font-size: 9.5px; }
        body.mode-landscape .col-percent { width: 48px; text-align: center; font-size: 9px; white-space: nowrap; }
        body.mode-landscape .col-status { width: 52px; text-align: center; font-size: 8.5px; white-space: nowrap; }
        body.mode-landscape .header-arabic-img { height: 36px; max-width: 260px; }
        body.mode-landscape .col-center .header-logo-center { width: 65px; height: 65px; }
        body.mode-landscape .phone-badge-single { font-size: 9px; padding: 2px 9px; }
      </style>
    </head>
    <body class="mode-${t}">
      <!-- Sticky No-Print Control Bar -->
      <div class="no-print" style="position: sticky; top: 0; z-index: 9999; background: #0f172a; color: #fff; padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        <div style="font-weight: 700; font-size: 12.5px; display: flex; align-items: center; gap: 8px;">
          <span>🏆 মেধা তালিকা প্রিন্ট প্রিভিউ</span>
          <span style="font-size: 11px; opacity: 0.75;">(পৃষ্ঠা বিন্যাস পরিবর্তন করতে নিচের বাটনে চাপুন)</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="btn-land" onclick="setOrientation('landscape')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${t==="landscape"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📑 ল্যান্ডস্কেপ</button>
          <button id="btn-port" onclick="setOrientation('portrait')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${t==="portrait"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📄 পোর্ট্রেট</button>
          <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
          <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #64748b; color: #fff; cursor: pointer; font-size: 11.5px;">✕ বন্ধ</button>
        </div>
      </div>

      <!-- Container where partitioned pages will be placed -->
      <div id="pages-container"></div>

      <!-- Hidden source content used for accurate DOM measurement -->
      <div id="raw-content">
        <div class="header-wrap">
          ${os({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${l} | <strong>সেকশন:</strong> ${d}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${V.length} জন | <strong>তারিখ:</strong> ${p}`})}
        </div>

        <table class="compact-table">
          <thead>
            <tr>
              <th class="col-serial">ক্রম</th>
              <th class="col-student">শিক্ষার্থীর নাম ও আইডি</th>
              <th class="col-roll">রোল</th>
              ${m}
              <th class="col-total">সর্বমোট মার্ক</th>
              <th class="col-rank">স্থান</th>
              <th class="col-grade">গ্রেড</th>
              <th class="col-gpa">জিপিএ</th>
              <th class="col-percent">শতকরা</th>
              <th class="col-status">স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            ${w}
          </tbody>
        </table>

        <!-- Footer Signatures -->
        <div class="footer-wrap" style="width: 100%; padding-top: 14px; page-break-inside: avoid; break-inside: avoid;">
          ${ds(s)}
        </div>
      </div>

      <script>
        let currentOrientation = '${t}';

        function setOrientation(orient) {
          if (currentOrientation === orient) return;
          currentOrientation = orient;
          document.getElementById('btn-land').style.background = (orient === 'landscape') ? '#0f766e' : '#334155';
          document.getElementById('btn-port').style.background = (orient === 'portrait') ? '#0f766e' : '#334155';
          
          let pageStyleTag = document.getElementById('dynamic-page-style');
          if (!pageStyleTag) {
            pageStyleTag = document.createElement('style');
            pageStyleTag.id = 'dynamic-page-style';
            document.head.appendChild(pageStyleTag);
          }
          const isLand = (orient === 'landscape');
          pageStyleTag.textContent = '@page { size: A4 ' + orient + '; margin: ' + (isLand ? '6mm 8mm' : '8mm 10mm') + ' !important; }';
          document.body.className = 'mode-' + orient;
          
          paginateAndRender(orient);
        }

        function paginateAndRender(targetOrient) {
          try {
            const rawWrap = document.getElementById('raw-content');
            const rawHeader = rawWrap.querySelector('.header-wrap');
            const rawTable = rawWrap.querySelector('table');
            const rawThead = rawTable.querySelector('thead');
            const rawRows = Array.from(rawTable.querySelectorAll('tbody tr'));
            const rawFooter = rawWrap.querySelector('.footer-wrap');
            const container = document.getElementById('pages-container');

            if (!rawRows.length || !container) {
              rawWrap.style.position = 'static';
              rawWrap.style.visibility = 'visible';
              return;
            }

            container.innerHTML = '';

            const isLand = (targetOrient === 'landscape');
            rawWrap.style.width = isLand ? '281mm' : '194mm';

            // Measure px per mm
            const probe = document.createElement('div');
            probe.style.width = '100mm';
            probe.style.height = '100mm';
            probe.style.position = 'absolute';
            probe.style.visibility = 'hidden';
            document.body.appendChild(probe);
            const pxPerMm = probe.getBoundingClientRect().height / 100;
            document.body.removeChild(probe);

            const pageTotalMm = isLand ? 210 : 297;
            const marginTotalMm = isLand ? 12 : 16;
            const pageUsablePx = (pageTotalMm - marginTotalMm) * pxPerMm;
            const pagePrintableWidthPx = (isLand ? 281 : 194) * pxPerMm;

            const headerHeight = rawHeader ? rawHeader.getBoundingClientRect().height : 0;
            const theadHeight = rawThead ? rawThead.getBoundingClientRect().height : 32;
            const footerHeight = rawFooter ? rawFooter.getBoundingClientRect().height : 60;

            const rowHeights = rawRows.map(r => r.getBoundingClientRect().height || 28);

            // Partition rows into pages
            const pageRowIndices = [];
            let currentPageIndices = [];
            let currentHeight = headerHeight + theadHeight;

            for (let i = 0; i < rawRows.length; i++) {
              const h = rowHeights[i];
              const isLast = (i === rawRows.length - 1);
              const neededFooter = (isLast && rawFooter) ? (footerHeight + 20) : 0;

              if ((currentHeight + h + neededFooter) > (pageUsablePx - 15) && currentPageIndices.length > 0) {
                pageRowIndices.push(currentPageIndices);
                currentPageIndices = [i];
                currentHeight = theadHeight + h;
              } else {
                currentPageIndices.push(i);
                currentHeight += h;
              }
            }
            if (currentPageIndices.length > 0) {
              pageRowIndices.push(currentPageIndices);
            }

            // Build pages
            pageRowIndices.forEach((rowIndices, pIdx) => {
              const isFirstPage = (pIdx === 0);
              const isLastPage = (pIdx === pageRowIndices.length - 1);

              const pageEl = document.createElement('div');
              pageEl.className = 'print-page' + (isLastPage ? ' last-page' : '');
              pageEl.style.width = isLand ? '281mm' : '194mm';
              pageEl.style.height = 'calc(' + (isLand ? '210mm' : '297mm') + ' - ' + (isLand ? '12mm' : '16mm') + ')';

              const topWrap = document.createElement('div');
              topWrap.className = 'page-top';

              if (isFirstPage && rawHeader) {
                topWrap.appendChild(rawHeader.cloneNode(true));
              }

              const tbl = document.createElement('table');
              tbl.className = 'compact-table';
              tbl.appendChild(rawThead.cloneNode(true));

              const tbody = document.createElement('tbody');
              rowIndices.forEach(idx => {
                tbody.appendChild(rawRows[idx].cloneNode(true));
              });
              tbl.appendChild(tbody);
              topWrap.appendChild(tbl);
              pageEl.appendChild(topWrap);

              if (isLastPage && rawFooter) {
                const bottomWrap = document.createElement('div');
                bottomWrap.className = 'page-bottom';
                bottomWrap.appendChild(rawFooter.cloneNode(true));
                pageEl.appendChild(bottomWrap);
              }

              container.appendChild(pageEl);

              // Mathematical auto-scale safeguard against any overflow
              const actualTableWidth = tbl.scrollWidth || tbl.offsetWidth;
              const usableWidth = pageEl.clientWidth || pagePrintableWidthPx;
              if (actualTableWidth > usableWidth + 1) {
                const scale = (usableWidth / actualTableWidth);
                topWrap.style.transform = 'scale(' + scale.toFixed(4) + ')';
                topWrap.style.transformOrigin = 'top left';
                topWrap.style.width = (100 / scale).toFixed(2) + '%';
              }
            });
          } catch (err) {
            console.error('Pagination error:', err);
            const rawWrap = document.getElementById('raw-content');
            if (rawWrap) {
              rawWrap.style.position = 'static';
              rawWrap.style.visibility = 'visible';
            }
          }
        }

        window.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            paginateAndRender('${t}');
            setTimeout(() => { window.print(); }, 400);
          }, 200);
        });
      <\/script>
    </body>
    </html>`;a.document.open(),a.document.write(v),a.document.close()},gn=(t,s)=>{ut(a=>({...a,[t]:s}))},Mt=(t,s=100)=>{const a=Jt(t),n=parseFloat(a);if(isNaN(n))return"—";const l=Number(s)||100,d=l>0?n/l*100:n;return d>=80?"A+":d>=70?"A":d>=60?"A-":d>=50?"B":d>=40?"C":d>=33?"D":"F"},is=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",fn=async()=>{const t=ne.find(l=>l._id===ue),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(ye).map(l=>{const d=ye[l],p=Jt(d);return{studentId:l,marksObtained:p===""?null:parseFloat(p)}});if(a.length===0){T({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(l=>l.marksObtained!==null&&l.marksObtained>s)){T({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}bt(!0);try{const l={exam:f._id,subject:ue,marks:a};(await G.post("/exams/marks",l)).data.success&&T({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(l){console.error("Failed to save marks",l),T({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{bt(!1)}},un=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},bn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Os=()=>{et(!1),gt(null),ae({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),Te([])},ta=(t=!1)=>{var n,l,d,p;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(I==null?void 0:I.userType)||((l=(n=I==null?void 0:I.permissions)==null?void 0:n.includes)==null?void 0:l.call(n,"academic.manage"))||((p=(d=I==null?void 0:I.permissions)==null?void 0:d.includes)==null?void 0:p.call(d,"exam.manage")),a=te.filter(r=>{if(t&&f){if(r.exam&&r.exam!==f._id)return!1}else if(dt!=="all"&&r.exam!==dt)return!1;return!(Ve!=="all"&&r.stream!==Ve||Ot!=="all"&&r.classLevel!==Ot)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{oe("marks"),Tt(null)},title:"ফিরে যান",children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Rt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&f?`পরীক্ষার রুটিন — ${f.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:me?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{me?ys(!0):bs(Ve,dt,Ot,!0)},disabled:xe,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Ds,{size:14,className:xe?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Fs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি"})]})]})]}),!me&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${Ve==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("all"),children:["সকল বিভাগ (",te.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ve==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("noorani"),children:["📖 নূরানী বিভাগ (",te.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ve==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("hifz"),children:["🕌 হিফজ বিভাগ (",te.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ve==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("kitab"),children:["📚 কিতাব বিভাগ (",te.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:dt,onChange:r=>ms(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),ze.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Ot,onChange:r=>ws(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),X.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),xe?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Rt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:me?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Fs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{const w=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:w.bg,color:w.color,border:`1px solid ${w.border}`},children:w.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>xn(r),style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(Je,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Fs(r),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Hs,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>pn(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(_s,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,v)=>e.jsxs("tr",{style:{background:v%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:Qe(v+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Rt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:Xt(m.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:m.day||ns(m.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:m.subjectName||m.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[Qe(m.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ha,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ga,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})})]},v)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,v)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:Qe(v+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:Xt(m.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",m.day||ns(m.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Ga,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:m.subjectName||m.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[Qe(m.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ha,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})]},v)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[We&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:We.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[We.type==="success"?e.jsx(Nn,{size:18}):e.jsx(Ns,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:We.message})]}),f?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:xt}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",f.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((sa=f.classLevel)==null?void 0:sa.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Tt(null),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:me?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",_e," • ",f.name," • ",((aa=f.classLevel)==null?void 0:aa.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{me||E==="student_result"?Bs():E==="subject_result"?Ks():E==="merit"||E==="merit_list"?qe(!0):Ps()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16})," ",me?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Wn,{selectedRoles:Le,onChange:t=>{Ke(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(An,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${f.name}`,metaLeft:`শ্রেণি: ${((na=f.classLevel)==null?void 0:na.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),me&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>oe("student_result"),children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{oe("merit"),fs(st)},children:[e.jsx(Qt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{oe("routine"),ys()},children:[e.jsx(Rt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!me&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>oe("marks"),children:[e.jsx(Hs,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>oe("student_result"),children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{oe("subject_result"),!Me&&ne.length>0&&(vt(ne[0]._id),Cs(ne[0]._id,Nt))},children:[e.jsx(Is,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{oe("merit"),V.length===0&&fs(st)},children:[e.jsx(Qt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{oe("routine"),ms((f==null?void 0:f._id)||"all"),bs("all",(f==null?void 0:f._id)||"all","all")},children:[e.jsx(Rt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>oe("seat_plan"),children:[e.jsx(Ht,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${E==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>oe("admit_card"),children:[e.jsx(mt,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),E==="marks"&&e.jsxs(e.Fragment,{children:[!me&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:ue,onChange:t=>{$t(t.target.value),tt([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ne.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:_,onChange:t=>{At(t.target.value),tt([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:rn,disabled:nt||!ue||!_||ne.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ls,{size:16})," লোড করুন"]})]}),ne.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ns,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),nt?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):me?he&&((ia=he.results)==null?void 0:ia.length)>0?Xs(he):Yt.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(mt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(I==null?void 0:I.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Yt.map(t=>{var l,d,p;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=Mt(a);return e.jsxs("tr",{children:[(I==null?void 0:I.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(l=t.student)==null?void 0:l.firstName," ",(d=t.student)==null?void 0:d.lastName]})}),e.jsx("td",{className:"font-semibold",children:(p=t.subject)==null?void 0:p.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Ye.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(mt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Ye.map((t,s)=>{var m,v,g,x;const a=t._id,n=((m=t.currentEnrollment)==null?void 0:m.rollNumber)||"—",l=((v=t.user)==null?void 0:v.fullName)||`${((g=t.user)==null?void 0:g.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim();if(ue==="all"){const N=Array.isArray(ye[a])?ye[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Qe(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:N.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:N.map((S,W)=>{var U;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[S.subjectName,": ",typeof S.marksObtained=="object"?(U=S.marksObtained)==null?void 0:U.marksObtained:S.marksObtained," (",S.grade,")"]},W)})})})]},a)}const d=ne.find(N=>N._id===ue),p=Number(d==null?void 0:d.totalMarks)||100,r=ye[a]??"",w=Mt(r,p);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Qe(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(Jt(r))>p?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${p}`,value:r,onChange:N=>{const S=N.target.value;/^[0-9০-৯.]*$/.test(S)&&gn(a,S)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(w)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:w})})]},a)})})]}),ue!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ps,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:fn,disabled:Ae,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Mn,{size:16})," ",Ae?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),E==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!me&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Ce,onChange:t=>ie(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((la=he==null?void 0:he.student)==null?void 0:la._id)||"",onChange:t=>{const s=t.target.value;s&&(Q(s),Es(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),rt.filter(t=>{var a,n,l,d,p,r;if(Ce==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((l=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:l.name)||((p=(d=t.currentEnrollment)==null?void 0:d.section)==null?void 0:p._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(Ce)}).map(t=>{var l,d,p,r;const s=((l=t.user)==null?void 0:l.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:je,onChange:t=>Q(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Es()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Es(),disabled:qt||!je.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Ls,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),he&&((ra=he.results)==null?void 0:ra.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Bs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),qt?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):he?((oa=he.results)==null?void 0:oa.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):Xs(he):e.jsxs("div",{className:"card empty-state",children:[e.jsx(ls,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),E==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:Me,onChange:t=>{const s=t.target.value;vt(s),s&&Cs(s,Nt)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ne.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Nt,onChange:t=>{const s=t.target.value;ts(s),Me&&Cs(Me,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:ot,onChange:t=>i(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=h.filter(s=>{var p,r,w,m,v,g,x,N,S,W;if(!ot.trim())return!0;const a=Jt(ot.trim().toLowerCase()),n=(((p=s.student)==null?void 0:p.fullName)||((w=(r=s.student)==null?void 0:r.user)==null?void 0:w.fullName)||`${((v=(m=s.student)==null?void 0:m.user)==null?void 0:v.firstName)||""} ${((x=(g=s.student)==null?void 0:g.user)==null?void 0:x.lastName)||""}`).toLowerCase(),l=String(((S=(N=s.student)==null?void 0:N.currentEnrollment)==null?void 0:S.rollNumber)||"").toLowerCase(),d=String(((W=s.student)==null?void 0:W.studentId)||"").toLowerCase();return n.includes(ot.toLowerCase())||l.includes(a)||d.includes(a)});Ks(t)},disabled:J||h.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),J?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Me?(()=>{const t=ne.find(g=>g._id===Me),s=Number(t==null?void 0:t.totalMarks)||100,a=h.filter(g=>{var U,de,pe,ke,Ie,ce,ge,Re,k,u;if(!ot.trim())return!0;const x=Jt(ot.trim().toLowerCase()),N=(((U=g.student)==null?void 0:U.fullName)||((pe=(de=g.student)==null?void 0:de.user)==null?void 0:pe.fullName)||`${((Ie=(ke=g.student)==null?void 0:ke.user)==null?void 0:Ie.firstName)||""} ${((ge=(ce=g.student)==null?void 0:ce.user)==null?void 0:ge.lastName)||""}`).toLowerCase(),S=String(((k=(Re=g.student)==null?void 0:Re.currentEnrollment)==null?void 0:k.rollNumber)||"").toLowerCase(),W=String(((u=g.student)==null?void 0:u.studentId)||"").toLowerCase();return N.includes(ot.toLowerCase())||S.includes(x)||W.includes(x)}),n=a.length,l=a.map(g=>Number(g.marksObtained)||0),d=l.length>0?Math.max(...l):0,p=l.length>0?(l.reduce((g,x)=>g+x,0)/l.length).toFixed(1):0,r=a.filter(g=>{const x=Number(g.marksObtained)||0;return(s>0?x/s*100:x)>=33}).length,w=n>0?Math.round(r/n*100):0,m=a.map(g=>{var x;return String(((x=g.student)==null?void 0:x._id)||g._id)}),v=m.length>0&&m.every(g=>H.has(g));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[d," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:p})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[w,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:v,onChange:()=>Js(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",H.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:v,onChange:()=>Js(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(g=>{var ce,ge,Re,k,u,B,$,se,z,be,fe,ve,Ne;const x=String(((ce=g.student)==null?void 0:ce._id)||g._id),N=H.has(x),S=Number(g.marksObtained)||0,W=s>0?Math.round(S/s*100):S,U=Mt(S,s),de=W>=33,pe=((ge=g.student)==null?void 0:ge.fullName)||((k=(Re=g.student)==null?void 0:Re.user)==null?void 0:k.fullName)||`${((B=(u=g.student)==null?void 0:u.user)==null?void 0:B.firstName)||""} ${((se=($=g.student)==null?void 0:$.user)==null?void 0:se.lastName)||""}`.trim()||"—",ke=((be=(z=g.student)==null?void 0:z.currentEnrollment)==null?void 0:be.rollNumber)||"—",Ie=((fe=g.student)==null?void 0:fe.studentId)||"—";return e.jsxs("tr",{style:{background:N?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:N,onChange:()=>ln(x),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:ke}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:pe}),((Ne=(ve=g.student)==null?void 0:ve.currentEnrollment)==null?void 0:Ne.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",g.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:Ie}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[S," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[W,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(U)}`,style:{minWidth:"40px",justifyContent:"center"},children:U})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${de?"badge-active":"badge-danger"}`,children:de?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},x)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(Is,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),E==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:st,onChange:t=>{const s=t.target.value;it(s),fs(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>fs(st),disabled:Ee,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ds,{size:14,className:Ee?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>Y("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(wn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>qe(!0),disabled:Ee||V.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(Je,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[V.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[V.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[V.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((pa=(ca=(da=V.find(t=>t.rankNum===1))==null?void 0:da.student)==null?void 0:ca.user)==null?void 0:pa.fullName)||((ha=(xa=(ma=V.find(t=>t.rankNum===1))==null?void 0:ma.student)==null?void 0:xa.user)==null?void 0:ha.firstName)||"—"}),V.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(ga=V.find(t=>t.rankNum===1))==null?void 0:ga.totalObtained," (",(fa=V.find(t=>t.rankNum===1))==null?void 0:fa.percentage,"%)"]})]})]}),Ee?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):V.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Qt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+D.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),D.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:V.map((t,s)=>{var w,m,v,g,x,N,S;const a=t.student,n=((w=a.currentEnrollment)==null?void 0:w.rollNumber)||"—",l=((m=a.user)==null?void 0:m.fullName)||`${((v=a.user)==null?void 0:v.firstName)||""} ${((g=a.user)==null?void 0:g.lastName)||""}`.trim(),d=t.rankNum===1,p=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:d?"rgba(245, 158, 11, 0.08)":p?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Qe(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:l}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((N=(x=a.currentEnrollment)==null?void 0:x.section)==null?void 0:N.name)||(typeof((S=a.currentEnrollment)==null?void 0:S.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),D.map(W=>{var ge;const U=(ge=t.studentMarksObj)==null?void 0:ge[W._id],de=U==null?void 0:U.marksObtained,pe=de!==null&&typeof de=="object"?de.marksObtained??"":de??"",ke=pe!=null&&pe!=="",Ie=Number(W.totalMarks)||100,ce=ke&&Number(pe)<Ie*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:ce?"#dc2626":ke?"#0f172a":"var(--text-muted)",background:ce?"rgba(239, 68, 68, 0.06)":"transparent"},children:ke?pe:"—"},W._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d||p||r?"0.92rem":"0.85rem",color:d?"#b45309":p?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:d?"#fef3c7":p?"#f1f5f9":r?"#ffedd5":"transparent",border:d?"1px solid #fde68a":p?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),E==="routine"&&ta(!0),E==="seat_plan"&&e.jsx(Ya,{selectedExam:f,classes:X,user:I}),E==="admit_card"&&e.jsx(Ua,{exams:ze,classes:X}),e.jsx("div",{className:"print-only",children:e.jsx(Ln,{roles:Le,style:{marginTop:"40px"}})})]}):E==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>oe("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Qt,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:on,disabled:L||!A||((ua=A.rankings)==null?void 0:ua.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Je,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[me?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),ct&&at.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:j,onChange:t=>{const s=t.target.value;b(s),us(s,F)},children:at.map(t=>{var l,d,p,r,w,m,v;const s=((d=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:d._id)||((p=t.currentEnrollment)==null?void 0:p.classLevel),a=((w=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:w.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"শ্রেণি",n=((v=t.user)==null?void 0:v.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((ba=X.find(t=>String(t._id)===String(j)))==null?void 0:ba.name)||(Lt==null?void 0:Lt.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:j,onChange:t=>{const s=t.target.value;b(s),us(s,F)},children:X.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:F,onChange:t=>{const s=t.target.value;R(s),us(j,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>us(j,F),disabled:L,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ds,{size:14,className:L?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),A&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((ya=A.rankings)==null?void 0:ya.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((va=(ja=A.rankings)==null?void 0:ja.find(t=>t.rank===1))==null?void 0:va.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((wa=(Na=A.rankings)==null?void 0:Na.find(t=>t.rank===1))==null?void 0:wa.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((Sa=(ka=A.termExams)==null?void 0:ka.term1)==null?void 0:Sa.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((Ca=(za=A.termExams)==null?void 0:za.term2)==null?void 0:Ca.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((_a=(Ia=A.termExams)==null?void 0:Ia.term3)==null?void 0:_a.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:L?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!A||(($a=A.rankings)==null?void 0:$a.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(Qt,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:A.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):E==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>oe("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ht,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ya,{selectedExam:null,classes:X,user:I})]}):E==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>oe("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(mt,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ua,{exams:ze,classes:X})]}):E==="routine"?ta(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px",marginBottom:"20px"},children:[e.jsxs("div",{style:{minWidth:"220px"},children:[e.jsx("h1",{className:"page-title",style:{marginBottom:"4px"},children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",style:{margin:0},children:Ss?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":ct?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${_e} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{oe("routine"),me?ys():bs()},children:[e.jsx(Rt,{size:15,style:{color:"#2563eb"}}),e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),!me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>oe("seat_plan"),children:[e.jsx(Ht,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"সিট প্ল্যান"})]}),!me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>oe("admit_card"),children:[e.jsx(mt,{size:15,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{oe("annual_combined");let t=j;t||(me&&(Lt!=null&&Lt._id)?t=Lt._id:X.length>0&&(t=X[0]._id)),t&&(b(t),us(t,F))},children:[e.jsx(Qt,{size:15,style:{color:"#d97706"}}),e.jsx("span",{children:"সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(I==null?void 0:I.userType)&&e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",fontSize:"0.82rem",whiteSpace:"nowrap"},onClick:()=>et(!0),children:[e.jsx(cs,{size:15}),e.jsx("span",{children:"নতুন পরীক্ষা"})]})]})]}),ct&&at.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ls,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Wt,onChange:t=>Ka(t.target.value),children:at.map(t=>{var l,d,p,r,w,m,v;const s=((l=t.user)==null?void 0:l.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((w=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:w.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"",n=(v=t.currentEnrollment)!=null&&v.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),ct&&at.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ls,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((Aa=at[0].user)==null?void 0:Aa.fullName)||`${((Wa=at[0].user)==null?void 0:Wa.firstName)||""} ${((La=at[0].user)==null?void 0:La.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Ra=(Ma=at[0].currentEnrollment)==null?void 0:Ma.classLevel)==null?void 0:Ra.name)||"শ্রেণি",(Ta=at[0].currentEnrollment)!=null&&Ta.rollNumber?` • রোল: ${at[0].currentEnrollment.rollNumber}`:""]})]}),Ss&&Lt&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ls,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Lt.name||"শ্রেণি"})]}),$e?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ze.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(mt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:ze.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=qs.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${bn(t.status)}`,children:un(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?Xt(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",Xt(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsxs("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{oe("marks"),Qs(t)},children:[e.jsx(mt,{size:14}),e.jsx("span",{children:me?"ফলাফল দেখুন":"নম্বর এন্ট্রি"})]}),!me&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{oe("merit"),Qs(t),fs("all",t)},children:[e.jsx(Qt,{size:14,style:{color:"#d97706"}}),e.jsx("span",{children:"মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(I==null?void 0:I.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>tn(t),title:"সম্পাদনা",children:e.jsx(Hs,{size:16})}),["super_admin","admin","principal"].includes(I==null?void 0:I.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>sn(t._id),title:"মুছে ফেলুন",children:e.jsx(_s,{size:16})})]})]},t._id)})}),Ct&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Os()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Ge?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Os,type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:an,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:P.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",ae(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),P.classLevel&&gs(P.classLevel)},children:Pn.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),P.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:P.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};ae(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),P.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:P.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};ae(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),P.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:P.month,onChange:t=>{const s=t.target.value,a=qs.find(l=>l.value===s),n=a?a.label.split(" ")[0]:s;ae(l=>({...l,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:qs.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:P.name,onChange:zs,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:P.classLevel,onChange:t=>{const s=t.target.value;ae(a=>({...a,classLevel:s,selectedSubjects:[]})),gs(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),X.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),P.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:P.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",P.selectedSubjects.length,"/৪ টি"]})]}),P.classLevel?Z.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:Z.map(t=>{const s=P.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=P.selectedSubjects;if(s)ae(n=>({...n,selectedSubjects:a.filter(l=>l!==t._id)}));else{if(a.length>=4){T({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}ae(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:P.startDate,onChange:zs})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:P.endDate,onChange:zs})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:P.status,onChange:zs,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Os,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:It,children:It?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),ks&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Rt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:as?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>Zt(!1),title:"বন্ধ করুন",children:e.jsx(kn,{size:20})})]}),e.jsxs("form",{onSubmit:cn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:Pe.title,onChange:t=>Oe(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Pe.stream,onChange:t=>Oe(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Pe.exam,onChange:t=>{const s=ze.find(a=>a._id===t.target.value);Oe(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),ze.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Pe.classLevel,onChange:t=>{const s=t.target.value,a=X.find(n=>n._id===s);Oe(n=>({...n,classLevel:s,className:a?a.name:""})),s&&gs(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),X.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Pe.status,onChange:t=>Oe(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:Pe.instructions,onChange:t=>Oe(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[Qe(Pe.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[Z&&Z.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:dn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:mn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(cs,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),Pe.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Qe(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;re(s,"date",l),l&&re(s,"day",ns(l))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:Z&&Z.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=Z.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")re(s,"subject","custom");else{const d=Z.find(p=>p._id===l);d&&(re(s,"subject",d._id),re(s,"subjectName",d.name),re(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),Z.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!Z.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{re(s,"subjectName",n.target.value),re(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{re(s,"subjectName",n.target.value),re(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>re(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>re(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>re(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>re(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>ea(s),disabled:Pe.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(_s,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:Pe.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Qe(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;re(s,"date",l),l&&re(s,"day",ns(l))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>ea(s),disabled:Pe.schedule.length<=1,title:"মুছুন",children:e.jsx(_s,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:Z&&Z.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=Z.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")re(s,"subject","custom");else{const d=Z.find(p=>p._id===l);d&&(re(s,"subject",d._id),re(s,"subjectName",d.name),re(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),Z.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{re(s,"subjectName",n.target.value),re(s,"subject",n.target.value)},required:!0})}),Z&&Z.length>0&&(t.subject==="custom"||!Z.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{re(s,"subjectName",n.target.value),re(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>re(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>re(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>re(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Zt(!1),disabled:ss,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:ss,children:ss?"সংরক্ষণ হচ্ছে...":as?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),Ut&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&qe(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(Je,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>qe(!1),type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Ft("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:we==="landscape"?700:500,background:we==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:we==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:we==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:we==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Ft("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:we==="portrait"?700:500,background:we==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:we==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:we==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:we==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=Le.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(Le.length<=1)return;a=Le.filter(n=>n!==t)}else a=[...Le,t];Ke(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>qe(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{qe(!1),hn(we,Le)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(Je,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .exam-tabs-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          padding-bottom: 10px;
          flex-wrap: nowrap !important;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .exam-tabs-strip::-webkit-scrollbar {
          display: none;
        }
        .exam-tab-btn {
          border-radius: 8px;
          padding: 7px 13px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap !important;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        @media (max-width: 768px) {
          .exam-tabs-strip {
            gap: 6px;
            padding-bottom: 8px;
          }
          .exam-tab-btn {
            padding: 6px 10px;
            font-size: 0.78rem;
            gap: 4px;
          }
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          .no-print, .page-header, .sidebar, .topbar {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          body {
            background: #fff !important;
            color: #000 !important;
          }
          .card {
            border: 1px solid #cbd5e1 !important;
            box-shadow: none !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .routine-desktop-table {
            display: none !important;
          }
          .routine-mobile-cards {
            display: flex !important;
          }
          .routine-form-desktop-rows {
            display: none !important;
          }
          .routine-form-mobile-cards {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .routine-desktop-table {
            display: block !important;
          }
          .routine-mobile-cards {
            display: none !important;
          }
          .routine-form-desktop-rows {
            display: flex !important;
          }
          .routine-form-mobile-cards {
            display: none !important;
          }
        }
      `})]})}export{pi as default};
