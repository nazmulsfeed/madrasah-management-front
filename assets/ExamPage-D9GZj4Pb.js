import{k as qs,r as l,w as An,j as e,O as Hs,Q as Gs,Y as $n,i as Ys,W as In,d as K,a as da,F as Ft,U as yn,C as Gt,x as tl,Z as jn,_ as sl,X as oa,E as ca,s as al,R as Fs,u as nl,y as ll,A as us,$ as bs,b as is,G as il,l as vn}from"./index-DR3x7h0E.js";import{g as Zs,b as Nt,p as rs,f as os,t as te}from"./helpers-CljGnr5z.js";import{L as as}from"./layout-grid-C-8yaTHw.js";import{P as ut}from"./printer-xbiMxkut.js";import{S as _n}from"./sliders-vertical-DJd4HF7c.js";import{S as Wn}from"./square-Cd5psDha.js";import{C as rl}from"./circle-check-DalfFjDf.js";import{L as ol}from"./layers-DRMd2Avz.js";import{E as dl}from"./eye-BXtIGd0C.js";import{Z as cl}from"./zoom-out-t6lADBtz.js";import{Z as pl}from"./zoom-in-BeVTXdxm.js";import{S as pa}from"./save-DXC5ReTu.js";import{C as ds}from"./circle-alert-A6dPTkIT.js";import{P as ss}from"./plus-xGKuCb4-.js";import{T as Is}from"./trash-2-DalA1W0u.js";import{T as ts}from"./trophy-BpH3VbQV.js";import{i as lt,M as As,S as $s}from"./constants-DPNkasLI.js";import{g as ys,a as js,b as vs}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as ml}from"./MadrasahLetterhead-DHerLxK2.js";import{P as xl}from"./PrintSignatureRoleSelector-PCqcub8O.js";import{P as hl}from"./PrintFooterSignatures-B-TAqGwa.js";import{S as ta}from"./square-pen-DjbB58xc.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=qs("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=qs("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=qs("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=qs("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),sa='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',aa='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function wn({selectedExam:h=null,classes:W=[],user:E=null}){var be;const C=l.useMemo(()=>Zs(E),[E]),oe=l.useMemo(()=>Array.isArray(W)?W:W&&Array.isArray(W.classes)?W.classes:[],[W]),[ye,O]=l.useState([]),[Fe,_]=l.useState((h==null?void 0:h._id)||""),[Ye,de]=l.useState(((be=h==null?void 0:h.classLevel)==null?void 0:be._id)||(h==null?void 0:h.classLevel)||""),[ct,ue]=l.useState([]),[F,he]=l.useState("all"),[De,ae]=l.useState("all"),[Ue,Qe]=l.useState((h==null?void 0:h.academicYear)||"2026"),[mt,Xe]=l.useState((h==null?void 0:h.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[xt,ee]=l.useState(!1),[ge,H]=l.useState([]),[ze,d]=l.useState(new Set),[it,ie]=l.useState({}),[ht,bt]=l.useState(""),[at,ke]=l.useState(!0),[rt,We]=l.useState(!0),[yt,G]=l.useState(!0),[ot,Te]=l.useState(!0),[Je,Ke]=l.useState(!0),[qe,He]=l.useState(!0),[jt,Oe]=l.useState(!0),[dt,p]=l.useState(!0),[P,N]=l.useState(!0),[M,se]=l.useState(!0),[ce,fe]=l.useState(!0),[ve,g]=l.useState(!0),[R,k]=l.useState(10),[V,T]=l.useState(!0),[pt,Le]=l.useState("10"),[Ct,wt]=l.useState("theme-classic"),[At,Be]=l.useState("logo-left"),[X,pe]=l.useState(!1),[Q,Ht]=l.useState(()=>{try{const m=parseInt(localStorage.getItem("seat_plan_font_scale"),10);if(!isNaN(m)&&m>=80&&m<=140)return m}catch{}return 100});l.useEffect(()=>{try{localStorage.setItem("seat_plan_font_scale",String(Q))}catch{}},[Q]);const[Tt,$t]=l.useState("১০১"),[It,et]=l.useState(`1-20: 101
21-40: 102
41-60: 103`),[Bt,_t]=l.useState(!1);l.useEffect(()=>{(async()=>{var A,S,ne,Z,B;try{const le=await K.get("/exams",{params:{limit:100}}),me=((S=(A=le.data)==null?void 0:A.data)==null?void 0:S.exams)||((ne=le.data)==null?void 0:ne.exams)||((Z=le.data)==null?void 0:Z.data)||[],Ne=Array.isArray(me)?me:[];if(O(Ne),!Fe&&Ne.length>0&&(_(Ne[0]._id),Xe(Ne[0].name),Ne[0].academicYear&&Qe(Ne[0].academicYear),Ne[0].classLevel)){const Ae=((B=Ne[0].classLevel)==null?void 0:B._id)||Ne[0].classLevel;de(Ae)}}catch(le){console.error("Failed to fetch exams for seat plan:",le),O([])}})()},[]),l.useEffect(()=>{var m;if(Fe&&Array.isArray(ye)&&ye.length>0){const A=ye.find(S=>S._id===Fe);if(A&&(Xe(A.name||"বার্ষিক পরীক্ষা - ২০২৬"),A.academicYear&&Qe(A.academicYear),A.classLevel)){const S=((m=A.classLevel)==null?void 0:m._id)||A.classLevel;de(S)}}},[Fe,ye]),l.useEffect(()=>{if(!Ye){ue([]);return}(async()=>{var A,S,ne,Z;try{const B=await K.get(`/students/sections?classLevel=${Ye}`),le=((S=(A=B.data)==null?void 0:A.data)==null?void 0:S.sections)||((ne=B.data)==null?void 0:ne.sections)||((Z=B.data)==null?void 0:Z.data)||[];ue(Array.isArray(le)?le:[])}catch(B){console.warn("Failed to load sections:",B),ue([])}})()},[Ye]);const Zt=async()=>{var m,A,S,ne;ee(!0);try{const Z={limit:500};Ye&&(Z.classLevel=Ye),F&&F!=="all"&&(Z.section=F);const B=await K.get("/students",{params:Z}),le=((A=(m=B.data)==null?void 0:m.data)==null?void 0:A.students)||((S=B.data)==null?void 0:S.students)||((ne=B.data)==null?void 0:ne.data)||[];let me=Array.isArray(le)?le:[];De&&De!=="all"&&(me=me.filter(Ce=>{var gt;return(Ce.department||((gt=Ce.currentEnrollment)==null?void 0:gt.department)||"").toLowerCase().includes(De.toLowerCase())})),me.sort((Ce,Se)=>{var Qt,Lt;const gt=Nt(((Qt=Ce.currentEnrollment)==null?void 0:Qt.rollNumber)||Ce.rollNumber||Ce.roll),Et=Nt(((Lt=Se.currentEnrollment)==null?void 0:Lt.rollNumber)||Se.rollNumber||Se.roll);return gt-Et}),H(me);const Ne=new Set(me.map(Ce=>Ce._id));d(Ne);const Ae={};me.forEach(Ce=>{Ae[Ce._id]=Tt||"১০১"}),ie(Ae)}catch(Z){console.error("Failed to load students for seat plan:",Z),H([]),d(new Set)}finally{ee(!1)}};l.useEffect(()=>{Ye&&Zt()},[Ye,F,De]);const Wt=()=>{ze.size===ge.length?d(new Set):d(new Set(ge.map(m=>m._id)))},cs=()=>{const m=Tt.trim();m&&ie(A=>{const S={...A};return ze.forEach(ne=>{S[ne]=m}),S})},Vt=()=>{const m=It.split(`
`),A={...it};m.forEach(S=>{const ne=S.split(":");if(ne.length===2){const Z=ne[0].trim(),B=ne[1].trim(),le=Z.match(/(\d+)\s*[-–—]\s*(\d+)/);if(le&&B){const me=parseInt(le[1],10),Ne=parseInt(le[2],10);ge.forEach(Ae=>{var gt;const Ce=rs(((gt=Ae.currentEnrollment)==null?void 0:gt.rollNumber)||Ae.rollNumber||Ae.roll||"0"),Se=parseInt(Ce,10);!isNaN(Se)&&Se>=me&&Se<=Ne&&(A[Ae._id]=B)})}}}),ie(A),_t(!1)},i=l.useMemo(()=>ge.filter(m=>{var Z,B,le,me;if(!ze.has(m._id))return!1;if(!ht)return!0;const A=m.fullName||((Z=m.user)==null?void 0:Z.fullName)||`${((B=m.user)==null?void 0:B.firstName)||""} ${((le=m.user)==null?void 0:le.lastName)||""}`.trim()||m.name||"",S=String(((me=m.currentEnrollment)==null?void 0:me.rollNumber)||m.rollNumber||m.roll||""),ne=String(m.studentId||m.admissionNumber||"");return An([A,S,ne],ht,at)}),[ge,ze,ht,at]),y=m=>{k(m),T(!1),Le(String(m))},w=m=>{Le(m);const A=parseInt(m,10);!isNaN(A)&&A>0&&A<=30&&(k(A),T(!0))},re=l.useMemo(()=>{const m=R;let A=3,S=4;return m<=4||m<=6||m<=8?(A=2,S=Math.ceil(m/2)):m<=10?(A=2,S=5):m<=12?(A=3,S=4):m<=15?(A=3,S=5):m<=16?(A=4,S=4):(A=4,S=Math.ceil(m/4)),{cols:A,rows:S,count:m}},[R]),q=l.useMemo(()=>{const m=[],A=R;for(let S=0;S<i.length;S+=A)m.push(i.slice(S,S+A));return m},[i,R]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card no-print sp-toolbar-card",children:[e.jsxs("div",{className:"sp-header-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,color:"#065f46",display:"flex",alignItems:"center",gap:"8px",margin:0},children:[e.jsx(as,{size:20,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",margin:"2px 0 0 0"},children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:()=>pe(!X),children:["🌐 ",X?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Zt,disabled:xt,children:[e.jsx(Hs,{size:14,className:xt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",style:{background:"#059669",borderColor:"#059669",fontSize:"0.8rem",fontWeight:700,padding:"7px 16px",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:()=>window.print(),children:[e.jsx(ut,{size:15}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"sp-filters-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Fe,onChange:m=>_(m.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(ye)?ye:[]).map(m=>{const A=m.academicYear&&!/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(m.academicYear))?m.academicYear:new Date().getFullYear();return e.jsxs("option",{value:m._id,children:[m.name," (",A,")"]},m._id)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Ye,onChange:m=>de(m.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(oe)?oe:[]).map(m=>e.jsx("option",{value:m._id,children:m.name},m._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:F,onChange:m=>he(m.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(ct)?ct:[]).map(m=>e.jsx("option",{value:m._id||m.name,children:m.name},m._id||m.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:De,onChange:m=>ae(m.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"sp-toggles-section",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"7px",fontSize:"0.75rem",fontWeight:700,color:"#334155"},children:[e.jsx(_n,{size:13,style:{color:"#059669"}}),e.jsx("span",{children:"কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):"})]}),e.jsx("div",{className:"sp-toggles-wrap",children:[{checked:rt,onChange:We,label:"কক্ষ নম্বর"},{checked:yt,onChange:G,label:"পরীক্ষার নাম"},{checked:ot,onChange:Te,label:"বিভাগ / গ্রুপ"},{checked:Je,onChange:Ke,label:"শিক্ষার্থীর ছবি"},{checked:qe,onChange:He,label:"আইডি নম্বর"},{checked:jt,onChange:Oe,label:"শ্রেণি"},{checked:dt,onChange:p,label:"শাখা"},{checked:P,onChange:N,label:"সেশন"},{checked:M,onChange:se,label:"বড় রোল বক্স"},{checked:ce,onChange:fe,label:"কাটিং দাগ (✂)"},{checked:ve,onChange:g,label:"লোগো ওয়াটারমার্ক"}].map((m,A)=>e.jsxs("label",{className:`sp-toggle-pill ${m.checked?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:m.checked,onChange:S=>m.onChange(S.target.checked),style:{accentColor:"#059669",margin:0}}),e.jsx("span",{children:m.label})]},A))})]}),e.jsxs("div",{className:"sp-controls-grid",children:[e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",flexWrap:"wrap",gap:"6px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Gs,{size:15,style:{color:"#059669"}}),"কক্ষ নম্বর নির্ধারণ (Room)"]}),e.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#047857",textDecoration:"underline",fontWeight:600,fontSize:"0.75rem",cursor:"pointer",padding:0},onClick:()=>_t(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"90px",fontSize:"0.8rem",padding:"5px 8px",textAlign:"center",fontWeight:700},value:Tt,onChange:m=>$t(m.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px"},onClick:cs,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",margin:"6px 0 0 0"},children:"টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।"})]}),e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(as,{size:15,style:{color:"#059669"}}),"A4 পেজে কার্ড ও ফন্ট সাইজ:"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"6px",padding:"2px 6px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.74rem",marginRight:"2px"},children:"ফন্ট:"}),e.jsx("button",{type:"button",onClick:()=>Ht(m=>Math.max(80,m-5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{fontWeight:700,color:"#047857",minWidth:"36px",textAlign:"center",fontSize:"0.75rem"},children:[Q,"%"]}),e.jsx("button",{type:"button",onClick:()=>Ht(m=>Math.min(140,m+5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট বড় করুন",children:"A+"}),Q!==100&&e.jsx("button",{type:"button",onClick:()=>Ht(100),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#ecfdf5",fontWeight:600,fontSize:"0.72rem",cursor:"pointer",color:"#047857"},title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"প্রিসেট:"}),[{val:10,label:"১০টি (২×৫)"},{val:12,label:"১২টি (৩×৪)"},{val:8,label:"৮টি (২×৪)"},{val:6,label:"৬টি (২×৩)"}].map(m=>{const A=R===m.val&&!V;return e.jsx("button",{type:"button",className:`btn ${A?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.74rem",padding:"4px 9px",...A?{background:"#059669",borderColor:"#059669"}:{}},onClick:()=>y(m.val),children:m.label},m.val)}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"কাস্টম:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:pt,onChange:m=>w(m.target.value),className:"form-input",style:{width:"54px",fontSize:"0.78rem",padding:"4px 6px",textAlign:"center",fontWeight:700}})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",paddingTop:"6px",borderTop:"1px solid #e2e8f0",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"থিম:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Ct==="theme-classic",onChange:()=>wt("theme-classic")}),e.jsx("span",{children:"ক্লাসিক"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#047857",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Ct==="theme-emerald",onChange:()=>wt("theme-emerald")}),e.jsx("span",{children:"গ্রিন"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#1e40af",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Ct==="theme-navy",onChange:()=>wt("theme-navy")}),e.jsx("span",{children:"নেভি"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"বিন্যাস:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:At==="logo-left",onChange:()=>Be("logo-left")}),e.jsx("span",{style:{color:"#047857",fontWeight:600},children:"বামে লোগো"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:At==="photo-left",onChange:()=>Be("photo-left")}),e.jsx("span",{children:"বামে ছবি"})]})]})]})]})]}),e.jsxs("div",{className:"sp-summary-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Wt,children:[ze.size===ge.length?e.jsx($n,{size:14}):e.jsx(Wn,{size:14}),e.jsx("span",{children:ze.size===ge.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{style:{fontWeight:600,color:"#334155",fontSize:"0.8rem"},children:["মোট শিক্ষার্থী: ",e.jsx("strong",{style:{color:"#047857"},children:ge.length})," জন | নির্বাচিত: ",e.jsx("strong",{style:{color:"#047857"},children:ze.size})," জন",i.length>0&&e.jsxs("span",{style:{marginLeft:"6px",color:"#64748b"},children:["(মোট ",e.jsx("strong",{children:q.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{position:"relative",minWidth:"200px"},children:[e.jsx(Ys,{size:14,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:ht,onChange:m=>bt(m.target.value),className:"form-input",style:{fontSize:"0.8rem",padding:"5px 10px 5px 30px",width:"100%"}})]}),e.jsx(In,{checked:at,onChange:ke})]})]})]}),Bt&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Gs,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:It,onChange:m=>et(m.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>_t(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:Vt,children:"রুম ভাগ করুন"})]})]})}),xt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Hs,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):i.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${Ct}`,children:(Array.isArray(q)?q:[]).map((m,A)=>e.jsx("div",{className:`seat-plan-a4-sheet ${ce?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${re.cols}, 1fr)`,gridTemplateRows:`repeat(${re.rows}, 1fr)`,gap:R<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(m)?m:[]).map(S=>{var Se,gt,Et,Qt,Lt,Ws,Ls,ns,Ms,Xt,ls,Jt,ps,ws,ms;const ne=S.fullName||((Se=S.user)==null?void 0:Se.fullName)||`${((gt=S.user)==null?void 0:gt.firstName)||""} ${((Et=S.user)==null?void 0:Et.lastName)||""}`.trim()||S.name||"—",Z=((Qt=S.currentEnrollment)==null?void 0:Qt.rollNumber)||S.rollNumber||S.roll||"—",B=S.studentId||S.admissionNumber||((Lt=S._id)==null?void 0:Lt.substring(0,6))||"—",le=((Ls=(Ws=S.currentEnrollment)==null?void 0:Ws.classLevel)==null?void 0:Ls.name)||((ns=S.classLevel)==null?void 0:ns.name)||S.class||"—",me=((Xt=(Ms=S.currentEnrollment)==null?void 0:Ms.section)==null?void 0:Xt.name)||((ls=S.currentEnrollment)==null?void 0:ls.section)||((Jt=S.section)==null?void 0:Jt.name)||S.section||"—",Ne=S.department||((ps=S.currentEnrollment)==null?void 0:ps.department)||"সাধারণ",Ae=it[S._id]||Tt||"১০১",Ce=Je&&(S.photo||(ws=S.user)!=null&&ws.photo)?S.photo||((ms=S.user)==null?void 0:ms.photo):sa;return e.jsxs("div",{className:"seat-plan-card",children:[ve&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:vt=>{vt.currentTarget.src=aa},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:At==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:vt=>{vt.currentTarget.src=aa},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:X?"AN-NUR ISLAMIC ACADEMY":C.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:X?"Shahibag, Chapainawabganj":C.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:X?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),Je?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Ce,onError:vt=>{vt.currentTarget.src=sa},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[Je?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Ce,onError:vt=>{vt.currentTarget.src=sa},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:X?"AN-NUR ISLAMIC ACADEMY":C.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:X?"Shahibag, Chapainawabganj":C.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:X?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:vt=>{vt.currentTarget.src=aa},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:ne,children:ne})]}),qe&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:B})]}),jt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:le})]}),dt&&me&&me!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:me})]}),ot&&Ne&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:Ne})]}),rt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:X?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:Ae,onChange:vt=>{const ma=vt.target.value;ie(Vs=>({...Vs,[S._id]:ma}))}})}),e.jsx("span",{className:"print-only",children:Ae})]})]})]})}),M&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:X?"Roll":"রোল"}),e.jsx("div",{className:"sp-roll-num",children:Z})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[yt&&e.jsx("span",{className:"font-semibold",children:mt}),P&&e.jsxs("span",{children:[X?"Session:":"সেশন:"," ",Ue&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(Ue))?new Date().getFullYear():Ue||new Date().getFullYear()]})]})]},S._id)})},`page-${A}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
        .seat-plan-workspace {
          --sp-font-scale: ${Q/100};
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
      `})]})}const Ns={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function Es({position:h}){const W={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},E={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...E[h]},children:e.jsxs("g",{transform:`translate(${h.includes("right")?64:0}, ${h.includes("bottom")?64:0}) ${W[h]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function bl(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function yl(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function jl(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function Ds({config:h=Ns}){const W={...Ns,...h},E=Array.isArray(W.rules)&&W.rules.length>0?W.rules:Ns.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx(Es,{position:"top-left"}),e.jsx(Es,{position:"top-right"}),e.jsx(Es,{position:"bottom-left"}),e.jsx(Es,{position:"bottom-right"}),e.jsx(bl,{}),e.jsx(yl,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:W.title})})}),e.jsx("ul",{className:"backside-rules-list",children:E.filter(C=>C&&C.trim()).map((C,oe)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(jl,{}),e.jsx("span",{children:C})]},oe))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:W.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:W.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:W.footerLeftBadge&&W.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:W.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:W.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:W.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const na='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',we=(h,W="—")=>h==null?W:typeof h=="object"?h.name||h.title||h.banglaName||h.code||h._id||W:String(h).trim()||W,Os=(h,W="—")=>{var oe,ye,O,Fe;if(!h)return W;const E=`${((oe=h.user)==null?void 0:oe.firstName)||""} ${((ye=h.user)==null?void 0:ye.lastName)||""}`.trim(),C=`${h.firstName||""} ${h.lastName||""}`.trim();return we(((O=h.user)==null?void 0:O.fullName)||E||((Fe=h.user)==null?void 0:Fe.name)||h.fullName||C||h.name||h.banglaName,W)};function kn({exams:h=[],classes:W=[]}){const{user:E}=da(),C=l.useMemo(()=>Zs(E),[E]),oe=l.useMemo(()=>Array.isArray(W)?W:W&&Array.isArray(W.classes)?W.classes:[],[W]),ye=l.useMemo(()=>Array.isArray(h)?h:h&&Array.isArray(h.exams)?h.exams:[],[h]),[O,Fe]=l.useState(""),[_,Ye]=l.useState(""),[de,ct]=l.useState("all"),[ue,F]=l.useState("all"),[he,De]=l.useState([]),[ae,Ue]=l.useState([]),[Qe,mt]=l.useState(!1),[Xe,xt]=l.useState(""),[ee,ge]=l.useState(!0),[H,ze]=l.useState(new Set),[d,it]=l.useState({}),[ie,ht]=l.useState("১০২"),[bt,at]=l.useState(()=>new Date().toISOString().split("T")[0]),[ke,rt]=l.useState("preview"),[We,yt]=l.useState(85),[G,ot]=l.useState("en"),[Te,Je]=l.useState(4),[Ke,qe]=l.useState("4"),[He,jt]=l.useState("landscape"),[Oe,dt]=l.useState(!0),[p,P]=l.useState("admit"),[N,M]=l.useState(()=>{try{const i=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(i)&&i>=80&&i<=135)return i}catch{}return 100}),[se,ce]=l.useState(()=>{try{return localStorage.getItem("admit_teacher_sig")||""}catch{return""}}),[fe,ve]=l.useState(()=>{try{return localStorage.getItem("admit_head_sig")||""}catch{return""}}),g=(i,y)=>{if(!y)return;const w=new FileReader;w.onload=re=>{var be;const q=((be=re.target)==null?void 0:be.result)||"";if(i==="teacher"){ce(q);try{localStorage.setItem("admit_teacher_sig",q)}catch{}}else{ve(q);try{localStorage.setItem("admit_head_sig",q)}catch{}}},w.readAsDataURL(y)},R=i=>{if(i==="teacher"){ce("");try{localStorage.removeItem("admit_teacher_sig")}catch{}}else{ve("");try{localStorage.removeItem("admit_head_sig")}catch{}}};l.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(N))}catch{}},[N]);const[k,V]=l.useState(()=>{try{const i=localStorage.getItem("admit_backside_config");if(i)return{...Ns,...JSON.parse(i)}}catch{}return Ns});l.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(k))}catch{}},[k]);const[T,pt]=l.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});l.useEffect(()=>{ye.length>0&&!O&&Fe(ye[0]._id||ye[0].id||"")},[ye,O]),l.useEffect(()=>{if(!_){De([]),ct("all");return}(async()=>{var y,w,re,q;try{const be=await K.get(`/students/sections?classLevel=${_}`),m=((w=(y=be.data)==null?void 0:y.data)==null?void 0:w.sections)||((re=be.data)==null?void 0:re.sections)||((q=be.data)==null?void 0:q.data)||[],A=Array.isArray(m)?m:[];De(A),ct("all")}catch{De([])}})()},[_]);const Le=async()=>{var i,y,w,re;if(!_){Ue([]),ze(new Set);return}mt(!0);try{const q={classLevel:_,limit:500,status:"active"};de&&de!=="all"&&(q.section=de);const be=await K.get("/students",{params:q}),m=((y=(i=be.data)==null?void 0:i.data)==null?void 0:y.students)||((w=be.data)==null?void 0:w.students)||((re=be.data)==null?void 0:re.data)||[];let A=Array.isArray(m)?m:m.students||[];ue&&ue!=="all"&&(A=A.filter(Z=>{var le;return(Z.department||((le=Z.currentEnrollment)==null?void 0:le.department)||"").toLowerCase().includes(ue.toLowerCase())})),A.sort((Z,B)=>{var Ne,Ae;const le=Nt(((Ne=Z.currentEnrollment)==null?void 0:Ne.rollNumber)||Z.rollNumber||Z.roll),me=Nt(((Ae=B.currentEnrollment)==null?void 0:Ae.rollNumber)||B.rollNumber||B.roll);return le-me}),Ue(A);const S=new Set(A.map(Z=>Z._id||Z.id));ze(S);const ne={};A.forEach(Z=>{const B=Z._id||Z.id;ne[B]=ie}),it(ne)}catch(q){console.error("Failed to load students for admit card:",q),Ue([]),ze(new Set)}finally{mt(!1)}};l.useEffect(()=>{_&&Le()},[_,de,ue]);const Ct=()=>{const i=ie.trim();i&&it(y=>{const w={...y};return H.forEach(re=>{w[re]=i}),w})},wt=()=>{H.size===Be.length&&Be.length>0?ze(new Set):ze(new Set(Be.map(i=>i._id||i.id)))},At=i=>{const y=new Set(H);y.has(i)?y.delete(i):y.add(i),ze(y)},Be=l.useMemo(()=>Xe.trim()?ae.filter(i=>{var q;const y=Os(i,""),w=we(((q=i.currentEnrollment)==null?void 0:q.rollNumber)||i.rollNumber||i.roll,""),re=we(i.studentId||i.admissionNumber,"");return An([y,w,re],Xe,ee)}):ae,[ae,Xe,ee]),X=l.useMemo(()=>ae.filter(i=>H.has(i._id||i.id)),[ae,H]),pe=l.useMemo(()=>ye.find(i=>(i._id||i.id)===O)||null,[ye,O]),Q=l.useMemo(()=>oe.find(i=>(i._id||i.id)===_)||null,[oe,_]),Ht=i=>{Je(i),qe(String(i)),i!==4&&Oe&&dt(!1)},Tt=i=>{qe(i);const y=parseInt(i,10);!isNaN(y)&&y>0&&y<=8&&(Je(y),y!==4&&Oe&&dt(!1))},$t=i=>{jt(i),i==="landscape"?(Je(4),qe("4")):Oe&&dt(!1)},It=()=>{const i=!Oe;dt(i),i&&(jt("landscape"),Je(4),qe("4"))},et=l.useMemo(()=>{const i=[],y=parseInt(Te,10)||2;for(let w=0;w<X.length;w+=y)i.push(X.slice(w,w+y));return i},[X,Te]),Bt=i=>{pt(y=>({...y,[i]:!y[i]}))},_t=l.useRef(null),Zt=l.useRef(null),Wt=i=>{const y=_t.current,w=Zt.current;if(!y||!w){window.print();return}const re=document.getElementById("admit-print-iframe");re&&re.remove();const q=document.createElement("iframe");q.id="admit-print-iframe",q.style.position="fixed",q.style.right="0",q.style.bottom="0",q.style.width="0",q.style.height="0",q.style.border="0",q.style.visibility="hidden",document.body.appendChild(q);const be=q.contentWindow.document,m=window.location.origin;be.open(),be.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${m}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${N/100};
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
    ${w.textContent}
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
  <div class="admit-print-only-container">${y.innerHTML}</div>
</body>
</html>`),be.close();const A=()=>{try{q.contentWindow.focus(),q.contentWindow.print()}catch(ne){console.error("Iframe print error:",ne),window.print()}},S=Array.from(be.images||[]);if(S.length===0)setTimeout(A,120);else{let ne=!1;const Z=()=>{ne||(ne=!0,setTimeout(A,100))};Promise.all(S.map(B=>B.complete?Promise.resolve():new Promise(le=>{B.onload=le,B.onerror=le}))).then(Z),setTimeout(Z,1200)}},cs=()=>{if(X.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}P("admit");const i=He==="landscape"?"landscape":"portrait";setTimeout(()=>Wt(i),80)},Vt=()=>{P("backside_only"),setTimeout(()=>Wt("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Ft,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:we(C.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>ot("en"),className:`admit-lang-btn ${G==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>ot("bn"),className:`admit-lang-btn ${G==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>ot("bi"),className:`admit-lang-btn ${G==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:Le,disabled:Qe||!_,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Hs,{size:15,className:Qe?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:Vt,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(ut,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:cs,disabled:X.length===0,className:"admit-btn-print",children:[e.jsx(ut,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",X.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(yn,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:Be.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(rl,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:X.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(as,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[Te,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Ft,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[et.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Gt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:O,onChange:i=>Fe(i.target.value),className:"admit-select",children:ye.map(i=>{const y=i._id||i.id||"",w=we(i.name||i.title,"Exam");return e.jsx("option",{value:y,children:w},y)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Gs,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:_,onChange:i=>Ye(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),oe.map(i=>{const y=i._id||i.id||"",w=we(i.name||i.banglaName||i.code,"Class");return e.jsx("option",{value:y,children:w},y)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(as,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:de,onChange:i=>ct(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),he.map((i,y)=>{const w=we(i,"");return e.jsx("option",{value:w,children:w},y)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(tl,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:ue,onChange:i=>F(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(as,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(i=>e.jsx("button",{type:"button",onClick:()=>Ht(i.count),className:`admit-pill-btn ${Te===i.count?"active":""}`,children:i.label},i.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Ke,onChange:i=>Tt(i.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(ol,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>$t("portrait"),className:`admit-pill-btn ${He==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>$t("landscape"),className:`admit-pill-btn ${He==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:It,className:`admit-pill-btn ${Oe?"active":""}`,style:{border:Oe?"1px solid #0d3b66":"1px solid #cbd5e1",background:Oe?"#0d3b66":"#ffffff",color:Oe?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:Oe?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>M(i=>Math.max(80,i-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[N,"%"]}),e.jsx("button",{type:"button",onClick:()=>M(i=>Math.min(135,i+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),N!==100&&e.jsx("button",{type:"button",onClick:()=>M(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Gs,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:ie,onChange:i=>ht(i.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Ct,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Gt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:bt,onChange:i=>at(i.target.value),className:"admit-date-input"})]}),e.jsxs("div",{className:"admit-sec-group",style:{flexWrap:"wrap"},children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"স্বাক্ষর আপলোড:"})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:se?"#ecfdf5":"#ffffff",color:se?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var w;const y=(w=i.target.files)==null?void 0:w[0];y&&g("teacher",y),i.target.value=""}}),e.jsx("span",{children:se?"✓ Class Teacher":"+ Class Teacher"})]}),se&&e.jsx("button",{type:"button",onClick:()=>R("teacher"),title:"Class Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:fe?"#ecfdf5":"#ffffff",color:fe?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var w;const y=(w=i.target.files)==null?void 0:w[0];y&&g("head",y),i.target.value=""}}),e.jsx("span",{children:fe?"✓ Head Teacher":"+ Head Teacher"})]}),fe&&e.jsx("button",{type:"button",onClick:()=>R("head"),title:"Head Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>rt("preview"),className:`admit-tab-btn ${ke==="preview"?"active":""}`,children:[e.jsx(dl,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[et.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>rt("students"),className:`admit-tab-btn ${ke==="students"?"active":""}`,children:[e.jsx(yn,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[X.length,"/",Be.length]})]}),e.jsxs("button",{type:"button",onClick:()=>rt("settings"),className:`admit-tab-btn ${ke==="settings"?"active":""}`,children:[e.jsx(fl,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ke==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>yt(Math.max(50,We-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(cl,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[We,"%"]}),e.jsx("button",{type:"button",onClick:()=>yt(Math.min(130,We+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(pl,{size:14})}),e.jsx("button",{type:"button",onClick:()=>yt(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ke==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:Qe?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Hs,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):_?X.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${We/100})`,transformOrigin:"top center"},children:et.map((i,y)=>e.jsxs(jn.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",y+1," / ",et.length," ",He==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",i.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Te} ${He==="landscape"?"a4-landscape":""}`,children:i.map(w=>{var me,Ne,Ae,Ce;const re=w._id||w.id,q=Os(w,"MD. STUDENT"),be=we(((me=w.currentEnrollment)==null?void 0:me.rollNumber)||w.rollNumber||w.roll,"—"),m=we(w.studentId||w.admissionNumber,"—"),A=we(((Ne=w.currentEnrollment)==null?void 0:Ne.section)||w.section||(de!=="all"?de:"—"),"—"),S=we(w.department||((Ae=w.currentEnrollment)==null?void 0:Ae.department)||w.stream,"All"),ne=we(d[re]||ie,"১০২"),Z=w.photo||((Ce=w.user)==null?void 0:Ce.photo)||na,B=we((pe==null?void 0:pe.name)||(pe==null?void 0:pe.title),"Annual Examination 2026"),le=we((Q==null?void 0:Q.name)||(Q==null?void 0:Q.banglaName)||(Q==null?void 0:Q.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[T.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:G==="bn"?we(C.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:G==="bn"?we(C.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:G==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),T.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:G==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:os(bt)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:q})]}),T.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:S})]}),T.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:m})]}),T.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:ne})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:be})]}),T.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),T.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),T.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:le})]}),T.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:A})]})]}),T.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:Z,alt:"Photo"})})]}),T.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:G==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:B})]}),e.jsxs("div",{className:"signatures-row",children:[T.teacherSig?e.jsxs("div",{className:"signature-block",children:[se?e.jsx("img",{src:se,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:G==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),T.principalSig?e.jsxs("div",{className:"signature-block",children:[fe?e.jsx("img",{src:fe,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:G==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},re)})})]}),Oe&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",y+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(w=>e.jsx(Ds,{config:k},`preview-back-${y}-${w}`))})]})]},`preview-group-${y}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Ft,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),Oe&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${We/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Ds,{config:k},`empty-back-${i}`))})]})})})]})}),ke==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:wt,className:"admit-btn-select-all",children:H.size===Be.length&&Be.length>0?e.jsxs(e.Fragment,{children:[e.jsx($n,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Wn,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",Be.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:H.size})," / ",Be.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Ys,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Xe,onChange:i=>xt(i.target.value),className:"admit-search-input"}),Xe&&e.jsx("button",{type:"button",onClick:()=>xt(""),className:"admit-search-clear",children:"✕"})]}),e.jsx(In,{checked:ee,onChange:ge})]}),Be.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:H.size===Be.length&&Be.length>0,onChange:wt,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:Be.map(i=>{var Z,B,le,me;const y=i._id||i.id,w=H.has(y),re=we(((Z=i.currentEnrollment)==null?void 0:Z.rollNumber)||i.rollNumber||i.roll,"—"),q=Os(i,"—"),be=we(i.studentId||i.admissionNumber,"—"),m=we(((B=i.currentEnrollment)==null?void 0:B.section)||i.section||(de!=="all"?de:"—"),"—"),A=we(i.department||((le=i.currentEnrollment)==null?void 0:le.department)||i.stream,"সাধারণ"),S=we(d[y]||ie,"১০২"),ne=i.photo||((me=i.user)==null?void 0:me.photo)||na;return e.jsxs("tr",{className:w?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:w,onChange:()=>At(y),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:re})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:ne,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:be}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:q}),e.jsx("td",{style:{color:"#475569"},children:A}),e.jsx("td",{style:{color:"#475569"},children:m}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:S,onChange:Ne=>{const Ae=Ne.target.value;it(Ce=>({...Ce,[y]:Ae}))},className:"admit-table-room-input"})})]},y)})})]})})]}),ke==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(_n,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(i=>{const y=T[i.key];return e.jsxs("button",{type:"button",onClick:()=>Bt(i.key),className:`admit-toggle-card ${y?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${y?"active":""}`,children:y&&e.jsx(sl,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:i.label}),e.jsx("div",{className:"admit-toggle-desc",children:i.desc})]})]},i.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Ft,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>V(Ns),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:k.title,onChange:i=>V(y=>({...y,title:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:k.noteLabel,onChange:i=>V(y=>({...y,noteLabel:i.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:k.noteText,onChange:i=>V(y=>({...y,noteText:i.target.value}))})]}),(k.rules||[]).map((i,y)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",y+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:i,onChange:w=>{const re=[...k.rules||[]];re[y]=w.target.value,V(q=>({...q,rules:re}))}})]},`rule-edit-${y}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:k.authorityLine1,onChange:i=>V(y=>({...y,authorityLine1:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:k.authorityLine2,onChange:i=>V(y=>({...y,authorityLine2:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:k.footerLeftBadge||"",onChange:i=>V(y=>({...y,footerLeftBadge:i.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:_t,children:p==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Ds,{config:k},`print-back-only-${i}`))}):X.length>0&&et.map((i,y)=>e.jsxs(jn.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Te} ${He==="landscape"?"a4-landscape":""}`,children:i.map(w=>{var me,Ne,Ae,Ce;const re=w._id||w.id,q=Os(w,"MD. STUDENT"),be=we(((me=w.currentEnrollment)==null?void 0:me.rollNumber)||w.rollNumber||w.roll,"—"),m=we(w.studentId||w.admissionNumber,"—"),A=we(((Ne=w.currentEnrollment)==null?void 0:Ne.section)||w.section||(de!=="all"?de:"—"),"—"),S=we(w.department||((Ae=w.currentEnrollment)==null?void 0:Ae.department)||w.stream,"All"),ne=we(d[re]||ie,"১০২"),Z=w.photo||((Ce=w.user)==null?void 0:Ce.photo)||na,B=we((pe==null?void 0:pe.name)||(pe==null?void 0:pe.title),"Annual Examination 2026"),le=we((Q==null?void 0:Q.name)||(Q==null?void 0:Q.banglaName)||(Q==null?void 0:Q.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[T.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:G==="bn"?we(C.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:G==="bn"?we(C.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:G==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),T.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:G==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:os(bt)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:q})]}),T.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:S})]}),T.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:m})]}),T.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:ne})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:be})]}),T.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),T.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),T.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:le})]}),T.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:G==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:A})]})]}),T.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:Z,alt:"Photo"})})]}),T.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:G==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:B})]}),e.jsxs("div",{className:"signatures-row",children:[T.teacherSig?e.jsxs("div",{className:"signature-block",children:[se?e.jsx("img",{src:se,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:G==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),T.principalSig?e.jsxs("div",{className:"signature-block",children:[fe?e.jsx("img",{src:fe,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:G==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},`print-${re}`)})}),Oe&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(w=>e.jsx(Ds,{config:k},`print-back-${y}-${w}`))})]},`print-group-${y}`))}),e.jsx("style",{ref:Zt,children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          --admit-font-scale: ${N/100};
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
          size: A4 ${p==="backside_only"||He==="landscape"?"landscape":"portrait"};
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
      `})]})}const vl=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];function _s(h){if(!h)return"";const W=new Date(`${h}T00:00:00`);return Number.isNaN(W.getTime())?"":vl[W.getDay()]}function Us(h){if(!h)return"";const W=String(h).split("-");if(W.length!==3)return h;const[E,C,oe]=W;return te(`${oe}/${C}/${E.slice(-2)}`)}function Pt(h){return String(h||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ln(h,W="আন্-নূর ইসলামিক একাডেমি"){var F;const E=((F=h==null?void 0:h.schedule)==null?void 0:F.kind)==="matrix"?h.schedule:h;if(!E||!Array.isArray(E.dates)||!Array.isArray(E.rows))return;const C=h.title||E.title||"পরীক্ষার রুটিন",oe=E.startTime||"পরীক্ষা শুরু : সকাল ৯ টা।",ye=E.footerNote||"",O=E.signatureRole||"প্রধান শিক্ষক,",Fe=E.signatureName||"",_=E.signatureOrg||W,Ye=E.dates.map(he=>{const De=he.dateLabel||Us(he.date)||"তারিখ",ae=he.dayLabel||_s(he.date)||"";return`<th><div>${Pt(De)}</div>${ae?`<div style="font-weight:600;margin-top:2px;">${Pt(ae)}</div>`:""}</th>`}).join(""),de=E.rows.map((he,De)=>{const ae=E.dates.map(Ue=>{const Qe=(he.cells&&he.cells[Ue.id]?String(he.cells[Ue.id]).trim():"")||"-";return`<td>${Pt(Qe).replace(/\n/g,"<br/>")}</td>`}).join("");return`<tr class="${De%2===1?"zebra":""}">
        <td class="class-col">${Pt(he.className)}</td>
        ${ae}
      </tr>`}).join(""),ct=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${Pt(C)}</title>
  <style>
    @page { size: A4 landscape; margin: 12mm 14mm; }
    * { box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', Arial, sans-serif;
      color: #111827;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet { width: 100%; }
    .title {
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      margin: 0 0 8px 0;
      letter-spacing: 0.2px;
    }
    .sub-time {
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 6px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      margin-bottom: 14px;
    }
    th, td {
      border: 1.5px solid #1f2937;
      padding: 7px 6px;
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
      line-height: 1.35;
      word-break: break-word;
    }
    thead th {
      background-color: #b8b5b2;
      font-weight: 800;
      font-size: 14px;
    }
    tbody tr.zebra td {
      background-color: #d6d3d1;
    }
    tbody td.class-col {
      font-weight: 700;
      width: 95px;
    }
    .footer-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 24px;
      margin-top: 8px;
    }
    .note-box {
      border: 1.5px solid #1f2937;
      padding: 8px 12px;
      font-size: 13.5px;
      line-height: 1.5;
      max-width: 64%;
      min-width: 340px;
      font-weight: 600;
    }
    .sig-box {
      text-align: center;
      font-size: 14px;
      line-height: 1.45;
      font-weight: 700;
      min-width: 220px;
      margin-left: auto;
    }
  </style>
</head>
<body>
  <div class="sheet">
    <h1 class="title">${Pt(C)}</h1>
    ${`<div class="sub-time">${Pt(oe)}</div>`}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">তারিখ</th>
          ${Ye}
        </tr>
      </thead>
      <tbody>
        ${de}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${ye?`<div class="note-box">${Pt(ye).replace(/\n/g,"<br/>")}</div>`:"<div></div>"}
      <div class="sig-box">
        ${`<div>${Pt(O)}</div>`}
        ${Fe?`<div>${Pt(Fe)}</div>`:""}
        ${_?`<div>${Pt(_)}</div>`:""}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,ue=window.open("","_blank","width=1100,height=750");ue&&(ue.document.open(),ue.document.write(ct),ue.document.close())}function Nl({routine:h}){var E;const W=((E=h==null?void 0:h.schedule)==null?void 0:E.kind)==="matrix"?h.schedule:null;return W?e.jsxs("div",{children:[W.startTime&&e.jsx("div",{style:{fontSize:"0.88rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:W.startTime}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,minWidth:"90px"},children:"তারিখ"}),(W.dates||[]).map(C=>e.jsxs("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,minWidth:"110px"},children:[e.jsx("div",{children:C.dateLabel||Us(C.date)}),(C.dayLabel||_s(C.date))&&e.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600},children:C.dayLabel||_s(C.date)})]},C.id))]})}),e.jsx("tbody",{children:(W.rows||[]).map((C,oe)=>e.jsxs("tr",{style:{background:oe%2===1?"#e2e8f0":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,color:"#0f172a"},children:C.className}),(W.dates||[]).map(ye=>{const O=(C.cells&&C.cells[ye.id]?String(C.cells[ye.id]).trim():"")||"-";return e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",color:"#0f172a",whiteSpace:"pre-line"},children:O},ye.id)})]},C.id||oe))})]})}),(W.footerNote||W.signatureName||W.signatureOrg)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"16px",flexWrap:"wrap",marginTop:"12px"},children:[W.footerNote?e.jsx("div",{style:{border:"1px solid #94a3b8",padding:"8px 12px",borderRadius:"6px",fontSize:"0.83rem",maxWidth:"640px",background:"#f8fafc",color:"#1e293b"},children:W.footerNote}):e.jsx("div",{}),e.jsxs("div",{style:{textAlign:"center",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",marginLeft:"auto"},children:[W.signatureRole&&e.jsx("div",{children:W.signatureRole}),W.signatureName&&e.jsx("div",{children:W.signatureName}),W.signatureOrg&&e.jsx("div",{children:W.signatureOrg})]})]})]}):null}function wl({initialRoutine:h=null,classes:W=[],subjects:E=[],exams:C=[],selectedExam:oe=null,madrasahName:ye="আন্-নূর ইসলামিক একাডেমি",onSaved:O,onClose:Fe}){var ve;const _=((ve=h==null?void 0:h.schedule)==null?void 0:ve.kind)==="matrix"?h.schedule:null,[Ye,de]=l.useState([]);l.useEffect(()=>{E.length>0||K.get("/students/subjects").then(g=>{var R,k;(R=g.data)!=null&&R.success&&de(((k=g.data.data)==null?void 0:k.subjects)||[])}).catch(()=>{})},[E.length]);const ct=l.useMemo(()=>{const R=(E.length>0?E:Ye).map(k=>typeof k=="string"?k:k==null?void 0:k.name).map(k=>String(k||"").trim()).filter(k=>k&&k!=="-");return[...new Set(R)]},[E,Ye]),ue=l.useMemo(()=>[...W].sort((g,R)=>(Number(g.order)||999)-(Number(R.order)||999)),[W]),[F,he]=l.useState((h==null?void 0:h.title)||(oe?`${oe.name} / ২০২৬ ইং`:"মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং")),[De,ae]=l.useState((h==null?void 0:h.exam)||(oe==null?void 0:oe._id)||""),[Ue,Qe]=l.useState((h==null?void 0:h.stream)||"all"),[mt,Xe]=l.useState((h==null?void 0:h.status)||"published"),[xt,ee]=l.useState((_==null?void 0:_.startTime)||"পরীক্ষা শুরু : সকাল ৯ টা।"),[ge,H]=l.useState(()=>{var g;return(g=_==null?void 0:_.dates)!=null&&g.length?_.dates:[{id:"d_1",date:"",dateLabel:"০৭/১১/২৬",dayLabel:"শনিবার"},{id:"d_2",date:"",dateLabel:"০৮/১১/২৬",dayLabel:"রবিবার"},{id:"d_3",date:"",dateLabel:"০৯/১১/২৬",dayLabel:"সোমবার"},{id:"d_4",date:"",dateLabel:"১০/১১/২৬",dayLabel:"মঙ্গলবার"},{id:"d_5",date:"",dateLabel:"১১/১১/২৬",dayLabel:"বুধবার"},{id:"d_6",date:"",dateLabel:"১২/১১/২৬",dayLabel:"বৃহস্পতিবার"}]}),[ze,d]=l.useState(()=>{var g;return(g=_==null?void 0:_.rows)!=null&&g.length?_.rows:ue.length>0?ue.map((R,k)=>({id:`r_${R._id||k}`,classId:R._id||"",className:R.name,cells:{}})):[{id:"r_1",classId:"",className:"প্লে",cells:{}},{id:"r_2",classId:"",className:"নার্সারি",cells:{}},{id:"r_3",classId:"",className:"প্রথম",cells:{}},{id:"r_4",classId:"",className:"দ্বিতীয়",cells:{}},{id:"r_5",classId:"",className:"তৃতীয়",cells:{}}]}),[it,ie]=l.useState((_==null?void 0:_.footerNote)??"বিঃদ্রঃ মডেল টেস্ট পরীক্ষার ফি, নভেম্বর / ২০২৬ ইং মাসের বেতনসহ যাবতীয় পাওনা পরিশোধ করে শ্রেণি শিক্ষকের নিকট থেকে মডেল টেস্ট পরীক্ষার প্রবেশ পত্র সংগ্রহ করুন।"),[ht,bt]=l.useState((_==null?void 0:_.signatureRole)??"প্রধান শিক্ষক,"),[at,ke]=l.useState((_==null?void 0:_.signatureName)??"হাফেজ মাও. মোঃ আরিফুর রহমান"),[rt,We]=l.useState((_==null?void 0:_.signatureOrg)??ye),[yt,G]=l.useState(!1),[ot,Te]=l.useState(""),[Je,Ke]=l.useState(!1),[qe,He]=l.useState(null),jt=l.useMemo(()=>{const g=new Set(ze.map(R=>String(R.className||"").trim().toLowerCase()));return ue.filter(R=>!g.has(String(R.name||"").trim().toLowerCase()))},[ue,ze]),Oe=()=>{var V;const g=`d_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,R=(V=ge[ge.length-1])==null?void 0:V.date;let k="";if(R){const T=new Date(`${R}T00:00:00`);Number.isNaN(T.getTime())||(T.setDate(T.getDate()+1),k=T.toISOString().slice(0,10))}H(T=>[...T,{id:g,date:k,dateLabel:k?Us(k):"নতুন তারিখ",dayLabel:k?_s(k):"বার"}])},dt=g=>{ge.length<=1||H(R=>R.filter(k=>k.id!==g))},p=(g,R)=>{H(k=>k.map(V=>V.id===g?{...V,date:R,dateLabel:R?Us(R):V.dateLabel,dayLabel:R?_s(R):V.dayLabel}:V))},P=(g,R,k)=>{H(V=>V.map(T=>T.id===g?{...T,[R]:k}:T))},N=g=>{d(R=>R.filter(k=>k.id!==g))},M=g=>{const R=`r_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;d(k=>[...k,{id:R,classId:g._id||"",className:g.name,cells:{}}]),G(!1),Te("")},se=(g,R,k)=>{d(V=>V.map(T=>T.id===g?{...T,cells:{...T.cells||{},[R]:k}}:T))},ce=()=>{const g=C.find(R=>R._id===De);return{_id:(h==null?void 0:h._id)||void 0,title:F.trim()||"সম্মিলিত পরীক্ষার রুটিন",exam:De||null,examName:(g==null?void 0:g.name)||(h==null?void 0:h.examName)||"",classLevel:null,className:"সম্মিলিত",stream:Ue,status:mt,instructions:it,schedule:{kind:"matrix",startTime:xt,dates:ge,rows:ze,footerNote:it,signatureRole:ht,signatureName:at,signatureOrg:rt}}},fe=async()=>{var g,R,k;if(!F.trim()){He({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}if(ze.length===0){He({type:"error",message:"অন্তত একটি শ্রেণির রো যোগ করুন"});return}Ke(!0),He(null);try{const V=await K.post("/exams/routines",ce());(g=V.data)!=null&&g.success&&(He({type:"success",message:"সম্মিলিত রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!"}),O&&O(V.data.data.routine))}catch(V){He({type:"error",message:((k=(R=V.response)==null?void 0:R.data)==null?void 0:k.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Ke(!1)}};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Gt,{size:20,style:{color:"var(--primary)"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700},children:h?"সম্মিলিত ম্যাট্রিক্স রুটিন সম্পাদনা":"নতুন সম্মিলিত ম্যাট্রিক্স রুটিন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>Ln(ce(),ye),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:15})," প্রিন্ট প্রিভিউ"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:fe,disabled:Je,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(pa,{size:15})," ",Je?"সংরক্ষণ হচ্ছে...":"রুটিন সেভ করুন"]}),Fe&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:Fe,children:[e.jsx(oa,{size:16})," বন্ধ করুন"]})]})]}),qe&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:qe.type==="success"?"#dcfce7":"#fee2e2",color:qe.type==="success"?"#166534":"#991b1b",fontSize:"0.88rem",fontWeight:600},children:[qe.type==="success"?e.jsx(ca,{size:16}):e.jsx(ds,{size:16}),e.jsx("span",{children:qe.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",value:F,onChange:g=>he(g.target.value),placeholder:"যেমন: মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"পরীক্ষা শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",value:xt,onChange:g=>ee(g.target.value),placeholder:"পরীক্ষা শুরু : সকাল ৯ টা।"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"সংযুক্ত পরীক্ষা (ঐচ্ছিক)"}),e.jsxs("select",{className:"form-input form-select",value:De,onChange:g=>ae(g.target.value),children:[e.jsx("option",{value:"",children:"সাধারণ / সকল পরীক্ষা"}),C.map(g=>e.jsx("option",{value:g._id,children:g.name},g._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিভাগ ও স্ট্যাটাস"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("select",{className:"form-input form-select",value:Ue,onChange:g=>Qe(g.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ"}),e.jsx("option",{value:"noorani",children:"নূরানী"}),e.jsx("option",{value:"hifz",children:"হিফজ"}),e.jsx("option",{value:"kitab",children:"কিতাব"})]}),e.jsxs("select",{className:"form-input form-select",value:mt,onChange:g=>Xe(g.target.value),children:[e.jsx("option",{value:"published",children:"প্রকাশিত"}),e.jsx("option",{value:"draft",children:"খসড়া"})]})]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",position:"relative"},children:[e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>G(g=>!g),style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(ss,{size:15})," শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)"]}),yt&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"6px",zIndex:30,background:"var(--bg-card, #fff)",border:"1px solid var(--border-color)",borderRadius:"10px",padding:"12px",boxShadow:"0 10px 25px rgba(15,23,42,0.18)",minWidth:"280px"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"তালিকা থেকে শ্রেণি নির্বাচন করুন:"}),jt.length>0?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"10px"},children:jt.map(g=>e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>M(g),style:{fontSize:"0.8rem",padding:"4px 10px"},children:["+ ",g.name]},g._id))}):e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px"},children:"সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।"}),e.jsxs("div",{style:{display:"flex",gap:"6px",borderTop:"1px solid var(--border-color)",paddingTop:"8px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)",value:ot,onChange:g=>Te(g.target.value),style:{fontSize:"0.82rem",padding:"5px 8px",height:"32px"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>{ot.trim()&&M({_id:"",name:ot.trim()})},children:"যোগ"})]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Oe,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(ss,{size:15})," তারিখ কলাম যোগ করুন"]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto",marginBottom:"16px"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,minWidth:"720px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,width:"130px",verticalAlign:"middle"},children:"তারিখ / শ্রেণি"}),ge.map(g=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",minWidth:"145px",verticalAlign:"top",whiteSpace:"normal"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"4px"},children:[e.jsx("input",{type:"date",value:g.date||"",onChange:R=>p(g.id,R.target.value),style:{fontSize:"0.72rem",padding:"2px 4px",borderRadius:"4px",border:"1px solid #94a3b8",width:"112px"},title:"তারিখ নির্বাচন করুন (বাংলা বার অটোমেটিক আসবে)"}),ge.length>1&&e.jsx("button",{type:"button",onClick:()=>dt(g.id),title:"এই তারিখ কলামটি মুছুন",style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"2px",lineHeight:1},children:e.jsx(oa,{size:14})})]}),e.jsx("input",{type:"text",value:g.dateLabel||"",onChange:R=>P(g.id,"dateLabel",R.target.value),placeholder:"০৭/১১/২৬",style:{display:"block",width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.82rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}}),e.jsx("input",{type:"text",value:g.dayLabel||"",onChange:R=>P(g.id,"dayLabel",R.target.value),placeholder:"শনিবার",style:{display:"block",width:"100%",textAlign:"center",fontWeight:600,fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}})]})},g.id)),e.jsx("th",{style:{border:"1px solid #94a3b8",width:"56px",textAlign:"center"},children:"মুছুন"})]})}),e.jsx("tbody",{children:ze.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:ge.length+2,style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:["কোনো শ্রেণির রো নেই। উপরে ",e.jsx("strong",{children:'"+ শ্রেণি যোগ করুন"'})," বাটনে ক্লিক করুন।"]})}):ze.map((g,R)=>e.jsxs("tr",{style:{background:R%2===1?"#f1f5f9":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"6px",verticalAlign:"middle"},children:e.jsx("input",{type:"text",value:g.className,onChange:k=>d(V=>V.map(T=>T.id===g.id?{...T,className:k.target.value}:T)),style:{width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.86rem",padding:"5px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"transparent"}})}),ge.map(k=>e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"5px",verticalAlign:"middle"},children:[e.jsxs("select",{value:"",onChange:V=>{const T=V.target.value;if(!T)return;if(T==="__CLEAR__"){se(g.id,k.id,"");return}const pt=String(g.cells&&g.cells[k.id]||"").trim(),Le=!pt||pt==="-"?T:`${pt} + ${T}`;se(g.id,k.id,Le)},style:{width:"100%",fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #94a3b8",marginBottom:"4px",background:"#f8fafc",color:"#0f172a"},children:[e.jsx("option",{value:"",children:"+ বিষয় বাছুন..."}),e.jsx("option",{value:"__CLEAR__",children:"— খালি করুন (-)"}),ct.map(V=>e.jsx("option",{value:V,children:V},V))]}),e.jsx("textarea",{rows:2,value:g.cells&&g.cells[k.id]||"",onChange:V=>se(g.id,k.id,V.target.value),placeholder:"-",style:{width:"100%",textAlign:"center",fontSize:"0.83rem",padding:"4px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",resize:"vertical",background:"#ffffff"}})]},k.id)),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",verticalAlign:"middle"},children:e.jsx("button",{type:"button",onClick:()=>N(g.id),title:`${g.className} শ্রেণির রো মুছে ফেলুন`,style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"6px"},children:e.jsx(Is,{size:16})})})]},g.id))})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিঃদ্রঃ (নোট বক্স)"}),e.jsx("textarea",{rows:3,className:"form-input",value:it,onChange:g=>ie(g.target.value),style:{width:"100%",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600,marginBottom:0},children:"স্বাক্ষর ব্লক (ডান পাশ)"}),e.jsx("input",{type:"text",className:"form-input",value:ht,onChange:g=>bt(g.target.value),placeholder:"প্রধান শিক্ষক,",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:at,onChange:g=>ke(g.target.value),placeholder:"প্রধান শিক্ষকের নাম",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:rt,onChange:g=>We(g.target.value),placeholder:"প্রতিষ্ঠানের নাম",style:{fontSize:"0.84rem"}})]})]})]})}const la=[{key:"balok",label:"বালক শাখা"},{key:"balika",label:"বালিকা শাখা"}],Sn=[{key:"hifz",label:"হিফজ বিভাগ"},{key:"najera",label:"নাজেরা বিভাগ"},{key:"maktab",label:"মক্তব বিভাগ"}],Ps={hifz:[{key:"ক",label:"ক শাখা"},{key:"খ",label:"খ শাখা"},{key:"গ",label:"গ শাখা"},{key:"ঘ",label:"ঘ শাখা"}],najera:[{key:"ক",label:"ক শাখা"},{key:"খ",label:"খ শাখা"},{key:"গ",label:"গ শাখা"},{key:"ঘ",label:"ঘ শাখা"}],maktab:[{key:"আমপারা",label:"আমপারা"},{key:"কায়দা",label:"কায়দা"}]},zn=[{key:"model_test",label:"মডেল টেস্ট পরীক্ষা"},{key:"term_1",label:"১ম সাময়িক পরীক্ষা"},{key:"term_2",label:"২য় সাময়িক পরীক্ষা"},{key:"monthly",label:"মাসিক পরীক্ষা"},{key:"weekly",label:"সাপ্তাহিক পরীক্ষা"}],kl={key:"final",label:"বার্ষিক / ফাইনাল পরীক্ষা"},ia=[{key:"05",label:"০৫ পারা গ্রুপ (১৫০)"},{key:"10_15",label:"১০ ও ১৫ পারা গ্রুপ (১৫০)"},{key:"20",label:"২০ পারা গ্রুপ (১৭০)"},{key:"30",label:"৩০ পারা গ্রুপ (২০০)"}];function zt(h){return String(h||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Cn({embedded:h=!1}){var He,jt,Oe,dt;const{user:W}=da(),{madrasahName:E,address:C}=Zs(W),[oe,ye]=l.useState("balok"),[O,Fe]=l.useState("hifz"),[_,Ye]=l.useState("ক"),[de,ct]=l.useState("model_test"),[ue,F]=l.useState("05"),[he,De]=l.useState("2026"),[ae,Ue]=l.useState({columns:[],totalMax:200}),[Qe,mt]=l.useState([]),[Xe,xt]=l.useState([]),[ee,ge]=l.useState(""),[H,ze]=l.useState("entry"),[d,it]=l.useState(!1),[ie,ht]=l.useState(!1),[bt,at]=l.useState(null);l.useEffect(()=>{const p=Ps[O]||Ps.hifz;p.some(P=>P.key===_)||Ye(p[0].key),O==="maktab"&&de==="final"&&ct("model_test")},[O,_,de]);const ke=l.useMemo(()=>O==="hifz"||O==="najera"?[...zn,kl]:zn,[O]),rt=async()=>{var p,P,N;it(!0),at(null);try{const M=await K.get("/hifz-results/sheet",{params:{branchType:oe,department:O,subBranch:_,examCategory:de,paraGroup:de==="final"?ue:"",academicYear:he}});(p=M.data)!=null&&p.success&&(Ue(M.data.data.schema||{columns:[],totalMax:0}),mt(M.data.data.rows||[]),xt(M.data.data.otherStudents||[]))}catch(M){at({type:"error",message:((N=(P=M.response)==null?void 0:P.data)==null?void 0:N.message)||"ফলাফল শিট লোড করতে সমস্যা হয়েছে"})}finally{it(!1)}};l.useEffect(()=>{rt()},[oe,O,_,de,ue,he]);const We=l.useMemo(()=>{const p=Qe.map(ce=>{var g;let fe=0,ve=!1;for(const R of ae.columns){const k=(g=ce.marks)==null?void 0:g[R.key];k!==""&&k!==null&&k!==void 0&&!isNaN(Number(k))&&(fe+=Number(k),ve=!0)}return{...ce,liveTotal:fe,hasAnyMark:ve}}),P=[...p].filter(ce=>ce.hasAnyMark).sort((ce,fe)=>fe.liveTotal-ce.liveTotal),N=new Map;let M=0,se=null;for(const ce of P)se!==null&&ce.liveTotal===se||(M+=1,se=ce.liveTotal),N.set(ce.studentId,M);return p.map(ce=>({...ce,liveRank:N.get(ce.studentId)||null}))},[Qe,ae.columns]),yt=(p,P=!0)=>{if(!p)return"—";const N=te(p);return p===1?`${P?"🥇 ":""}${N}ম স্থান`:p===2?`${P?"🥈 ":""}${N}য় স্থান`:p===3?`${P?"🥉 ":""}${N}য় স্থান`:p===4?`${N}র্থ স্থান`:p===5?`${N}ম স্থান`:p>=6&&p<=10?`${N}${{6:"ষ্ঠ",7:"ম",8:"ম",9:"ম",10:"ম"}[p]} স্থান`:`${N}তম স্থান`},G=l.useMemo(()=>[...We].sort((p,P)=>p.hasAnyMark&&!P.hasAnyMark?-1:!p.hasAnyMark&&P.hasAnyMark?1:p.hasAnyMark&&P.hasAnyMark&&P.liveTotal!==p.liveTotal?P.liveTotal-p.liveTotal:String(p.name).localeCompare(String(P.name),"bn")),[We]),ot=(p,P)=>{mt(N=>N.map(M=>M.studentId===p?{...M,readingAmount:P}:M))},Te=(p,P,N,M)=>{if(M===""){mt(fe=>fe.map(ve=>ve.studentId===p?{...ve,marks:{...ve.marks||{},[P]:""}}:ve));return}const se=Number(M);if(isNaN(se))return;const ce=Math.max(0,Math.min(N,se));mt(fe=>fe.map(ve=>ve.studentId===p?{...ve,marks:{...ve.marks||{},[P]:ce}}:ve))},Je=async()=>{var p,P;if(ee)try{await K.patch("/hifz-results/assign-subbranch",{studentId:ee,subBranch:_,department:O}),ge(""),await rt(),at({type:"success",message:`শিক্ষার্থীকে "${_}" শাখায় যুক্ত করা হয়েছে`})}catch(N){at({type:"error",message:((P=(p=N.response)==null?void 0:p.data)==null?void 0:P.message)||"শিক্ষার্থী যুক্ত করতে সমস্যা হয়েছে"})}},Ke=async()=>{var p,P,N;if(Qe.length!==0){ht(!0),at(null);try{const M=Qe.map(ce=>({studentId:ce.studentId,readingAmount:ce.readingAmount||"",marks:ce.marks||{}})),se=await K.post("/hifz-results/bulk-save",{branchType:oe,department:O,subBranch:_,examCategory:de,paraGroup:de==="final"?ue:"",academicYear:he,entries:M});(p=se.data)!=null&&p.success&&(at({type:"success",message:se.data.message||"ফলাফল সফলভাবে সংরক্ষিত হয়েছে!"}),await rt())}catch(M){at({type:"error",message:((N=(P=M.response)==null?void 0:P.data)==null?void 0:N.message)||"ফলাফল সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{ht(!1)}}},qe=(p="entry")=>{var Ct,wt,At,Be;const P=p==="merit",N=P?G:We,M=((Ct=la.find(X=>X.key===oe))==null?void 0:Ct.label)||"বালক শাখা",se=O==="hifz"?"হেফজ":O==="najera"?"নাজেরা":"মক্তব",ce=O==="maktab"?_:`${_} গ্রুপ`,fe=de==="final"&&(O==="hifz"||O==="najera")?` — ${((At=(wt=ia.find(X=>X.key===ue))==null?void 0:wt.label)==null?void 0:At.split(" (")[0])||""}`:"",ve=`বিষয়ঃ ${se} (${ce})${fe}`,g=`${((Be=ke.find(X=>X.key===de))==null?void 0:Be.label)||"পরীক্ষা"}-${te(he)}${P?" — মেধা তালিকা (Merit List)":""}`,R=ae.columns.map(X=>`<th>${zt(X.label)}</th>`).join(""),k=ae.columns.map(X=>`<th>${zt(te(X.max))}</th>`).join(""),V=P?N.length:Math.max(14,N.length),T=Array.from({length:V}).map((X,pe)=>{const Q=N[pe];if(!Q){const $t=ae.columns.map(()=>"<td></td>").join("");return`<tr>
            <td class="c-center">${te(pe+1)}</td>
            <td></td>
            <td></td>
            ${$t}
            <td></td>
            <td class="tartib-col"></td>
          </tr>`}const Ht=ae.columns.map($t=>{var Bt;const It=(Bt=Q.marks)==null?void 0:Bt[$t.key],et=It!==""&&It!==null&&It!==void 0?te(It):"";return`<td class="c-center">${zt(et)}</td>`}).join(""),Tt=P?Q.liveRank?yt(Q.liveRank,!1):"—":Q.liveRank?te(Q.liveRank):"";return`<tr>
          <td class="c-center">${te(pe+1)}</td>
          <td class="name-col">${zt(Q.name)}${P&&Q.rollNumber?` <small>(রোল: ${te(Q.rollNumber)})</small>`:""}</td>
          <td class="c-center">${zt(Q.readingAmount||"")}</td>
          ${Ht}
          <td class="c-center" style="font-weight:700;">${Q.hasAnyMark?te(Q.liveTotal):""}</td>
          <td class="c-center tartib-col">${zt(Tt)}</td>
        </tr>`}).join(""),pt=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${zt(g)} - ${zt(ve)}</title>
  <style>
    @page { size: A4 landscape; margin: 10mm 12mm; }
    * { box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', Arial, sans-serif;
      color: #111827;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 6px;
    }
    .header-side-box {
      border: 1.4px solid #1f2937;
      padding: 4px 12px;
      font-size: 13px;
      font-weight: 700;
      min-width: 170px;
      text-align: center;
      background: #ffffff;
    }
    .header-center {
      text-align: center;
      flex: 1;
    }
    .inst-bn {
      font-size: 20px;
      font-weight: 800;
      margin: 0;
    }
    .inst-en {
      font-size: 14px;
      font-weight: 700;
      margin: 1px 0;
      letter-spacing: 0.4px;
    }
    .inst-addr {
      font-size: 11.5px;
      margin: 0;
      color: #374151;
    }
    .exam-title {
      text-align: center;
      font-size: 15px;
      font-weight: 800;
      margin: 4px 0 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 18px;
    }
    th, td {
      border: 1.2px solid #1f2937;
      padding: 4px 5px;
      font-size: 12.5px;
      height: 25px;
      vertical-align: middle;
    }
    thead tr:first-child th {
      background: #e5e7eb;
      font-weight: 700;
      text-align: center;
    }
    thead tr:nth-child(2) th {
      background: #e5e7eb;
      font-weight: 700;
      text-align: center;
      font-size: 12px;
    }
    .c-center { text-align: center; }
    .name-col { text-align: left; padding-left: 7px; font-weight: 600; min-width: 145px; }
    .tartib-col { background: #d1d5db; font-weight: 700; text-align: center; min-width: 60px; }
    .footer-sig {
      text-align: right;
      margin-top: 22px;
      font-size: 13.5px;
      font-weight: 700;
      padding-right: 24px;
    }
  </style>
</head>
<body>
  <div class="header-grid">
    <div class="header-side-box">${zt(M)}</div>
    <div class="header-center">
      <div class="inst-bn">${zt(E)}</div>
      <div class="inst-en">AN-NUR ISLAMIC ACADEMY</div>
      <div class="inst-addr">${zt(C||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ।")}</div>
    </div>
    <div class="header-side-box">${zt(ve)}</div>
  </div>
  <div class="exam-title">${zt(g)}</div>
  <table>
    <thead>
      <tr>
        <th rowspan="2" style="width:42px;">ক্রমিক</th>
        <th rowspan="2" style="min-width:145px;">নাম</th>
        <th rowspan="2" style="width:95px;">পড়ার পরিমান</th>
        ${R}
        <th style="width:52px;">মোট</th>
        <th rowspan="2" class="tartib-col">তারতীব</th>
      </tr>
      <tr>
        ${k}
        <th>${te(ae.totalMax)}</th>
      </tr>
    </thead>
    <tbody>
      ${T}
    </tbody>
  </table>
  <div class="footer-sig">পরীক্ষকের স্বাক্ষর</div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,Le=window.open("","_blank","width=1120,height=780");Le&&(Le.document.open(),Le.document.write(pt),Le.document.close())};return e.jsxs("div",{className:"animate-fade-in",children:[!h&&e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(al,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ, নাজেরা ও মক্তব ফলাফল"})]}),e.jsx("p",{className:"page-subtitle",children:"বালক ও বালিকা শাখা ➔ বিভাগ ➔ উপ-শাখা ও পরীক্ষা অনুযায়ী নম্বর এন্ট্রি ও প্রিন্ট"})]})}),e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(175px, 1fr))",gap:"12px",alignItems:"end"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"১. প্রধান শাখা"}),e.jsx("select",{className:"form-input form-select",value:oe,onChange:p=>ye(p.target.value),children:la.map(p=>e.jsx("option",{value:p.key,children:p.label},p.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"২. বিভাগ"}),e.jsx("select",{className:"form-input form-select",value:O,onChange:p=>Fe(p.target.value),children:Sn.map(p=>e.jsx("option",{value:p.key,children:p.label},p.key))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:["৩. ",O==="maktab"?"উপ-বিভাগ (আমপারা/কায়দা)":"উপ-শাখা (ক/খ/গ/ঘ)"]}),e.jsx("select",{className:"form-input form-select",value:_,onChange:p=>Ye(p.target.value),children:(Ps[O]||Ps.hifz).map(p=>e.jsx("option",{value:p.key,children:p.label},p.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"৪. পরীক্ষার ক্যাটাগরি"}),e.jsx("select",{className:"form-input form-select",value:de,onChange:p=>ct(p.target.value),children:ke.map(p=>e.jsx("option",{value:p.key,children:p.label},p.key))})]}),de==="final"&&(O==="hifz"||O==="najera")&&e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"৫. ফাইনাল পারা গ্রুপ"}),e.jsx("select",{className:"form-input form-select",value:ue,onChange:p=>F(p.target.value),children:ia.map(p=>e.jsx("option",{value:p.key,children:p.label},p.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"শিক্ষাবর্ষ"}),e.jsx("input",{type:"text",className:"form-input",value:he,onChange:p=>De(p.target.value),placeholder:"2026"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginTop:"14px",paddingTop:"12px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:Xe.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",value:ee,onChange:p=>ge(p.target.value),style:{width:"auto",minWidth:"230px",marginBottom:0,height:"36px",fontSize:"0.84rem"},children:[e.jsxs("option",{value:"",children:["+ বিভাগের অন্য শিক্ষার্থী (",te(Xe.length)," জন)..."]}),Xe.map(p=>e.jsxs("option",{value:p.studentId,children:[p.name," (",p.subBranchDisplay||p.section||"উপ-শাখা নেই",")"]},p.studentId))]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Je,disabled:!ee,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(ul,{size:14})," এই শাখায় আনুন"]})]})}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{display:"inline-flex",background:"var(--bg-secondary, #f1f5f9)",padding:"3px",borderRadius:"8px",border:"1px solid var(--border-color)"},children:[e.jsxs("button",{type:"button",className:`btn btn-sm ${H==="entry"?"btn-primary":"btn-ghost"}`,onClick:()=>ze("entry"),style:{padding:"4px 10px",fontSize:"0.82rem",display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(gl,{size:14})," নম্বর এন্ট্রি"]}),e.jsxs("button",{type:"button",className:`btn btn-sm ${H==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>ze("merit"),style:{padding:"4px 10px",fontSize:"0.82rem",display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(ts,{size:14})," মেধা তালিকা (১ম, ২য়, ৩য়...)"]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:rt,disabled:d,children:[e.jsx(Fs,{size:14,className:d?"animate-spin":""})," রিফ্রেশ"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>qe(H),children:[e.jsx(ut,{size:14})," ",H==="merit"?"প্রিন্ট মেধা তালিকা":"প্রিন্ট মার্কশিট"]}),H==="entry"&&e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:Ke,disabled:ie||Qe.length===0,children:[e.jsx(pa,{size:14})," ",ie?"সংরক্ষণ হচ্ছে...":"ফলাফল সংরক্ষণ করুন"]})]})]})]}),bt&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:bt.type==="success"?"#dcfce7":"#fee2e2",color:bt.type==="success"?"#166534":"#991b1b",fontWeight:600,fontSize:"0.88rem"},children:[bt.type==="success"?e.jsx(ca,{size:16}):e.jsx(ds,{size:16}),e.jsx("span",{children:bt.message})]}),e.jsxs("div",{className:"card",style:{padding:"16px 20px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{fontWeight:700,fontSize:"1rem",color:"var(--text-primary)"},children:[H==="merit"?"🏆 মেধা তালিকা — ":"",(He=la.find(p=>p.key===oe))==null?void 0:He.label," •"," ",(jt=Sn.find(p=>p.key===O))==null?void 0:jt.label," (",_,") •"," ",(Oe=ke.find(p=>p.key===de))==null?void 0:Oe.label,de==="final"?` (${(dt=ia.find(p=>p.key===ue))==null?void 0:dt.label})`:""]}),e.jsxs("span",{className:"badge badge-info",children:["মোট শিক্ষার্থী: ",te(We.length)," জন • পূর্ণমান: ",te(ae.totalMax)]})]}),H==="merit"?e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem",minWidth:"820px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{style:{background:"#e2e8f0",color:"#0f172a"},children:[e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"8px 6px",textAlign:"center",width:"52px"},children:"ক্রমিক"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"8px 10px",textAlign:"center",minWidth:"125px",background:"#cbd5e1"},children:"মেধা স্থান (তারতীব)"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"8px 10px",textAlign:"left",minWidth:"175px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"8px 6px",textAlign:"center",width:"110px"},children:"পড়ার পরিমান"}),ae.columns.map(p=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",minWidth:"82px"},children:p.label},p.key)),e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"95px"},children:"সর্বমোট"})]}),e.jsxs("tr",{style:{background:"#f1f5f9",color:"#0f172a"},children:[ae.columns.map(p=>e.jsxs("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.78rem"},children:["(",te(p.max),")"]},`${p.key}-m-max`)),e.jsxs("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.78rem"},children:["(",te(ae.totalMax),")"]})]})]}),e.jsx("tbody",{children:d?e.jsx("tr",{children:e.jsx("td",{colSpan:ae.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"মেধা তালিকা লোড হচ্ছে..."})}):G.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:ae.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"এই শাখা ও উপ-শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি।"})}):G.map((p,P)=>{const N=p.liveRank===1,M=p.liveRank===2,se=p.liveRank===3,ce=N?"rgba(245, 158, 11, 0.10)":M?"rgba(148, 163, 184, 0.10)":se?"rgba(217, 119, 6, 0.08)":P%2===1?"#f8fafc":"#ffffff";return e.jsxs("tr",{style:{background:ce},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,padding:"8px 6px"},children:te(P+1)}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",padding:"8px 6px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 9px",borderRadius:"6px",fontWeight:800,fontSize:N||M||se?"0.88rem":"0.83rem",background:N?"#fef3c7":M?"#f1f5f9":se?"#ffedd5":"transparent",color:N?"#b45309":M?"#334155":se?"#c2410c":"#0f172a",border:N?"1px solid #fde68a":M?"1px solid #cbd5e1":se?"1px solid #fed7aa":"none"},children:p.liveRank?yt(p.liveRank,!0):"—"})}),e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"7px 10px"},children:[e.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:p.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:["আইডি: ",p.studentCode,p.rollNumber?` • রোল: ${te(p.rollNumber)}`:""]})]}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",padding:"7px 6px"},children:p.readingAmount||"—"}),ae.columns.map(fe=>{var R;const ve=(R=p.marks)==null?void 0:R[fe.key],g=ve!==""&&ve!==null&&ve!==void 0?te(ve):"—";return e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:600,padding:"7px 6px"},children:g},fe.key)}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,color:"#065f46",padding:"7px 6px"},children:p.hasAnyMark?`${te(p.liveTotal)} / ${te(ae.totalMax)}`:"—"})]},p.studentId)})})]})}):e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.86rem",minWidth:"820px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{style:{background:"#e2e8f0",color:"#0f172a"},children:[e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"48px"},children:"ক্রমিক"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px 10px",textAlign:"left",minWidth:"170px"},children:"নাম"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"115px"},children:"পড়ার পরিমান"}),ae.columns.map(p=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",minWidth:"86px"},children:p.label},p.key)),e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"72px"},children:"মোট"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"68px",background:"#cbd5e1"},children:"তারতীব"})]}),e.jsxs("tr",{style:{background:"#f1f5f9",color:"#0f172a"},children:[ae.columns.map(p=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.8rem"},children:te(p.max)},`${p.key}-max`)),e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.8rem"},children:te(ae.totalMax)})]})]}),e.jsx("tbody",{children:d?e.jsx("tr",{children:e.jsx("td",{colSpan:ae.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"তালিকা লোড হচ্ছে..."})}):We.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:ae.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"এই শাখা ও উপ-শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি। নতুন ভর্তিতে সংশ্লিষ্ট বিভাগ ও উপ-শাখা নির্বাচন করুন অথবা উপরের ড্রপডাউন থেকে শিক্ষার্থী যুক্ত করুন।"})}):We.map((p,P)=>e.jsxs("tr",{style:{background:P%2===1?"#f8fafc":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700},children:te(P+1)}),e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"6px 10px"},children:[e.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:p.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:["আইডি: ",p.studentCode,p.rollNumber?` • রোল: ${te(p.rollNumber)}`:""]})]}),e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"4px"},children:e.jsx("input",{type:"text",value:p.readingAmount||"",onChange:N=>ot(p.studentId,N.target.value),placeholder:"যেমন: ১-৩০",style:{width:"100%",textAlign:"center",padding:"5px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.83rem"}})}),ae.columns.map(N=>{var M;return e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"4px"},children:e.jsx("input",{type:"number",min:0,max:N.max,value:((M=p.marks)==null?void 0:M[N.key])??"",onChange:se=>Te(p.studentId,N.key,N.max,se.target.value),style:{width:"100%",textAlign:"center",padding:"5px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.85rem",fontWeight:600}})},N.key)}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,color:"#065f46"},children:p.hasAnyMark?te(p.liveTotal):"—"}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,background:"#e2e8f0",color:"#0f172a"},children:p.liveRank?te(p.liveRank):"—"})]},p.studentId))})]})})]})]})}const Sl=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],ra=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function zl(h,W=!1){if(!h)return"—";const E=W?" (যৌথ)":"";return h===1?`🥇 ১ম স্থান${E}`:h===2?`🥈 ২য় স্থান${E}`:h===3?`🥉 ৩য় স্থান${E}`:h===4?`৪র্থ${E}`:h===5?`৫ম${E}`:h===6?`৬ষ্ঠ${E}`:h===7?`৭ম${E}`:h===8?`৮ম${E}`:h===9?`৯ম${E}`:h===10?`১০ম${E}`:`${h}তম${E}`}function Vl({initialViewMode:h}){var ja,va,Na,wa,ka,Sa,za,Ca,Aa,$a,Ia,_a,Wa,La,Ma,Ra,Ta,Ba,Ea,Da,Oa,Pa,Fa,Ha,Ga,Ya,Ua,qa,Za,Va,Qa,Xa,Ja,Ka,en,tn,sn,an,nn,ln,rn,on,dn,cn,pn,mn,xn,hn;const W=nl(),E=ll(),{user:C}=da(),{madrasahName:oe,branchName:ye}=Zs(C),[O,Fe]=l.useState([]),[_,Ye]=l.useState([]),[de,ct]=l.useState(!0),[ue,F]=l.useState(null),[he,De]=l.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[ae,Ue]=l.useState(!1),[Qe,mt]=l.useState(!1),[Xe,xt]=l.useState(null),[ee,ge]=l.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[H,ze]=l.useState([]),[d,it]=l.useState(null),[ie,ht]=l.useState([]),[bt,at]=l.useState([]),[ke,rt]=l.useState(""),[We,yt]=l.useState(""),[G,ot]=l.useState(!1),[Te,Je]=l.useState([]),[Ke,qe]=l.useState({}),[He,jt]=l.useState(!1),[Oe,dt]=l.useState([]),p=h==="routine"||(E==null?void 0:E.pathname)==="/exam-routine",P=h==="admit_card"||(E==null?void 0:E.pathname)==="/admit-card",[N,M]=l.useState(p?"routine":P?"admit_card":"marks"),[se,ce]=l.useState(!1),[fe,ve]=l.useState("all"),[g,R]=l.useState([]),[k,V]=l.useState([]),[T,pt]=l.useState(!1),[Le,Ct]=l.useState("landscape"),[wt,At]=l.useState(""),[Be,X]=l.useState("all"),[pe,Q]=l.useState(null),[Ht,Tt]=l.useState(!1),[$t,It]=l.useState([]),[et,Bt]=l.useState(""),[_t,Zt]=l.useState("all"),[Wt,cs]=l.useState(""),[Vt,i]=l.useState([]),[y,w]=l.useState(!1),[re,q]=l.useState(new Set),[be,m]=l.useState(""),[A,S]=l.useState("all"),[ne,Z]=l.useState(!1),[B,le]=l.useState(null),[me,Ne]=l.useState([]),[Ae,Ce]=l.useState(!1),[Se,gt]=l.useState("all"),[Et,Qt]=l.useState("all"),[Lt,Ws]=l.useState("all"),[Ls,ns]=l.useState(!1),[Ms,Xt]=l.useState(!1),[ls,Jt]=l.useState(null),[ps,ws]=l.useState(!1),[ms,vt]=l.useState(null),[ma,Vs]=l.useState(null),[kt,Mt]=l.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),Dt=(C==null?void 0:C.userType)==="guardian",Rs=(C==null?void 0:C.userType)==="student",Me=Rs||Dt,[Rt,Mn]=l.useState([]),[Yt,xa]=l.useState(""),[Ut,Qs]=l.useState(null);l.useEffect(()=>{if(ue){const t=setTimeout(()=>F(null),4e3);return()=>clearTimeout(t)}},[ue]);const Kt=async(t=null)=>{ct(!0);try{const s={},a=t||Yt;Dt&&a&&(s.studentId=a);const n=await K.get("/exams",{params:s});n.data.success&&Fe(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),F({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{ct(!1)}},Rn=t=>{var a,n;xa(t);const s=Rt.find(r=>r._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const r=s.currentEnrollment.classLevel,c=typeof r=="object"?r:{_id:r,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Qs(c),m(c._id)}Kt(t),Me&&Cs(!1,t)},ks=async t=>{if(!t){ze([]);return}try{const s=await K.get(`/students/subjects?classLevel=${t}`);s.data.success&&ze(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},Tn=async()=>{try{const t=await K.get("/students/classes");t.data.success&&Ye(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};l.useEffect(()=>{(async()=>{var s,a,n,r,c,x;if(Dt)try{const o=await K.get("/students",{params:{limit:100}});if(o.data.success&&((s=o.data.data)==null?void 0:s.length)>0){const z=o.data.data;Mn(z),xa(z[0]._id);const j=(a=z[0].currentEnrollment)==null?void 0:a.classLevel;if(j){const b=typeof j=="object"?j:{_id:j,name:((n=z[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Qs(b),m(b._id)}Kt(z[0]._id)}else Kt()}catch(o){console.error("Error loading guardian children",o),Kt()}else if(Rs){try{const o=await K.get("/students",{params:{limit:1}});if(o.data.success&&((r=o.data.data)==null?void 0:r.length)>0){const z=o.data.data[0],j=(c=z.currentEnrollment)==null?void 0:c.classLevel;if(j){const b=typeof j=="object"?j:{_id:j,name:((x=z.currentEnrollment)==null?void 0:x.className)||"শ্রেণি"};Qs(b),m(b._id)}}}catch(o){console.error("Error loading student profile for class",o)}Kt()}else Kt();Tn(),hs()})(),Me&&Cs()},[]),l.useEffect(()=>{N==="student_result"&&d&&$t.length===0&&On(d),N==="subject_result"&&ie.length>0&&!et&&(Bt(ie[0]._id),Bs(ie[0]._id,_t))},[N,d,ie,$t.length]);const Ts=t=>{ge({...ee,[t.target.name]:t.target.value})},Bn=async t=>{var r;xt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(c=>typeof c=="object"?c._id:c):[],n=((r=t.classLevel)==null?void 0:r._id)||"";ge({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&ks(n),Ue(!0)},En=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await K.delete(`/exams/${t}`)).data.success&&(F({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Kt())}catch(n){console.error("Failed to delete exam",n);const r=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";F({type:"error",message:r})}},Dn=async t=>{var s,a,n,r;if(t.preventDefault(),ee.examCategory==="monthly_test"&&((s=ee.selectedSubjects)==null?void 0:s.length)!==4){F({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=ee.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}mt(!0);try{let c;Xe?c=await K.patch(`/exams/${Xe}`,ee):c=await K.post("/exams",ee),c.data.success&&(Ue(!1),xt(null),ge({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),F({type:"success",message:Xe?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Kt())}catch(c){console.error("Failed to submit exam",c);const x=((r=(n=c.response)==null?void 0:n.data)==null?void 0:r.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";F({type:"error",message:x})}finally{mt(!1)}},ha=async t=>{var a,n,r,c,x,o,z,j;if(it(t),rt(""),yt(""),Je([]),qe({}),dt([]),Q(null),At(""),X("all"),Bt(""),Zt("all"),cs(""),i([]),q(new Set),Me){ot(!0);try{const b={examId:t._id};Dt&&Yt&&(b.studentId=Yt);const f=await K.get("/exams/student-results",{params:b});if((a=f.data)!=null&&a.success&&f.data.data){Q(f.data.data);const u=(n=f.data.data.results)==null?void 0:n[0];dt((u==null?void 0:u.subjects)||[])}else{const u=await K.get("/exams/marks",{params:{exam:t._id,...Dt&&Yt?{student:Yt}:{}}});dt(((c=(r=u.data)==null?void 0:r.data)==null?void 0:c.marks)||[])}}catch(b){console.error("Failed to load student detailed results",b);try{const f=await K.get("/exams/marks",{params:{exam:t._id,...Dt&&Yt?{student:Yt}:{}}});dt(((o=(x=f.data)==null?void 0:x.data)==null?void 0:o.marks)||[])}catch{}}finally{ot(!1)}return}const s=((z=t.classLevel)==null?void 0:z._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const b=await K.get(`/students/subjects?classLevel=${s}`);if(b.data.success){let $=b.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const L=t.selectedSubjects.map(U=>String(typeof U=="object"?U._id:U));$=$.filter(U=>L.includes(String(U._id)))}ht($)}const f=await K.get(`/students/sections?classLevel=${s}`);f.data.success&&at(f.data.data.sections||[]);const u=await K.get("/students",{params:{classLevel:s,limit:300}});if(u.data.success){const $=u.data.data;let L=Array.isArray($)?$:($==null?void 0:$.students)||[];if(L.length===0){const xe=(j=(await K.get("/students",{params:{limit:500}})).data)==null?void 0:j.data;L=Array.isArray(xe)?xe:(xe==null?void 0:xe.students)||[]}L.sort((U,xe)=>{var Ie,Re;return Nt(((Ie=U.currentEnrollment)==null?void 0:Ie.rollNumber)||U.roll)-Nt(((Re=xe.currentEnrollment)==null?void 0:Re.rollNumber)||xe.roll)}),It(L)}}catch(b){console.error("Failed to fetch subjects/sections for mark entry",b)}},On=async t=>{var n,r,c;const s=t||d;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const x={limit:300};a&&(x.classLevel=a);const o=await K.get("/students",{params:x});if((r=o.data)!=null&&r.success){const z=o.data.data;let j=Array.isArray(z)?z:(z==null?void 0:z.students)||[];if(j.length===0&&a){const f=(c=(await K.get("/students",{params:{limit:500}})).data)==null?void 0:c.data;j=Array.isArray(f)?f:(f==null?void 0:f.students)||[]}j.sort((b,f)=>{var u,$;return Nt(((u=b.currentEnrollment)==null?void 0:u.rollNumber)||b.roll)-Nt((($=f.currentEnrollment)==null?void 0:$.rollNumber)||f.roll)}),It(j)}}catch(x){console.warn("Failed to load class students:",x)}},Xs=async t=>{var n,r;const a=rs(t||wt);if(!a||!String(a).trim()){F({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Tt(!0),Q(null);try{const c=await K.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:d==null?void 0:d._id}});c.data.success&&Q(c.data.data)}catch(c){console.error("Failed to load student result",c);const x=((r=(n=c.response)==null?void 0:n.data)==null?void 0:r.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";F({type:"error",message:x})}finally{Tt(!1)}},Bs=async(t,s)=>{const a=t!==void 0?t:et,n=s!==void 0?s:_t;if(!a){F({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}w(!0);try{const r={exam:d==null?void 0:d._id,subject:a},c=await K.get("/exams/marks",{params:r});if(c.data.success){let x=c.data.data.marks||[];n&&n!=="all"&&(x=x.filter(z=>{var f,u,$,L;const j=(f=z.student)==null?void 0:f.currentEnrollment,b=typeof(j==null?void 0:j.section)=="object"?((u=j==null?void 0:j.section)==null?void 0:u.name)||(($=j==null?void 0:j.section)==null?void 0:$._id):(j==null?void 0:j.section)||((L=z.student)==null?void 0:L.section);return String(b||"")===String(n)})),i(x);const o=new Set(x.map(z=>{var j;return String(((j=z.student)==null?void 0:j._id)||z._id)}));if(q(o),ie.length===0&&x.length>0){const z={};x.forEach(b=>{b.subject&&typeof b.subject=="object"&&b.subject._id&&(z[b.subject._id]=b.subject)});const j=Object.values(z);j.length>0&&ht(j)}}}catch(r){console.error("Failed to load subject marks",r),F({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{w(!1)}},ga=t=>{const s=t.map(r=>{var c;return String(((c=r.student)==null?void 0:c._id)||r._id)}),a=s.length>0&&s.every(r=>re.has(r)),n=new Set(re);a?s.forEach(r=>n.delete(r)):s.forEach(r=>n.add(r)),q(n)},Pn=t=>{const s=new Set(re),a=String(t);s.has(a)?s.delete(a):s.add(a),q(s)},Js=()=>{var z;if(!pe||!pe.results||pe.results.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=pe.student||{},s=pe.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",r=t.department||"";let c="—";n&&r?c=`${n} (${r})`:n?c=n:r&&(c=r);const x=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${t.name||""}</title>
  ${ys("portrait")}
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
      ${js({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(d==null?void 0:d.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((z=d==null?void 0:d.classLevel)==null?void 0:z.name)||"—"}</div>
          <div><strong>রোল নম্বর:</strong> ${t.rollNumber||"—"}</div>
          <div><strong>শাখা / বিভাগ:</strong> ${c}</div>
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
          ${(s.subjects||[]).map((j,b)=>`
            <tr>
              <td class="text-center">${b+1}</td>
              <td class="font-bold">${j.subjectName}</td>
              <td class="text-center">${j.subjectCode||"—"}</td>
              <td class="text-center">${j.totalMarks}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${j.marksObtained}</td>
              <td class="text-center">${j.percentage}%</td>
              <td class="text-center font-bold">${j.grade}</td>
              <td class="text-center">${(j.gradePoint??0).toFixed(1)}</td>
              <td class="text-center font-bold" style="color: ${j.isPassed?"#059669":"#dc2626"};">${j.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
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

      ${vs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,o=window.open("","_blank");o&&(o.document.write(x),o.document.close())},fa=t=>{var r,c,x,o,z,j,b;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(ds,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((r=d==null?void 0:d.classLevel)==null?void 0:r.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Js,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((f,u)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:u+1}),e.jsx("td",{className:"font-semibold",children:f.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:f.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:f.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:f.marksObtained!==null&&typeof f.marksObtained=="object"?f.marksObtained.marksObtained:f.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[f.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(f.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:f.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(f.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${f.isPassed?"badge-active":"badge-danger"}`,children:f.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},f.markId||u))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((c=n.term1)==null?void 0:c.obtained)||0," / ",((x=n.term1)==null?void 0:x.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((o=n.term2)==null?void 0:o.obtained)||0," / ",((z=n.term2)==null?void 0:z.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((j=n.term3)==null?void 0:j.obtained)||0," / ",((b=n.term3)==null?void 0:b.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},ua=t=>{var f;const s=(t||Vt).filter(u=>{var $;return re.has(String((($=u.student)==null?void 0:$._id)||u._id))});if(s.length===0){F({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=ie.find(u=>u._id===et),n=(a==null?void 0:a.name)||"বিষয়",r=Number(a==null?void 0:a.totalMarks)||100,c=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),x=s.length,o=s.filter(u=>{const $=Number(u.marksObtained)||0;return(r>0?$/r*100:$)>=33}).length,z=x>0?Math.round(o/x*100):0,j=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${n}</title>
  ${ys("portrait")}
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
      ${js({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((f=d==null?void 0:d.classLevel)==null?void 0:f.name)||"")+" | <strong>পূর্ণমান:</strong> "+r+" | <strong>পরীক্ষা:</strong> "+((d==null?void 0:d.name)||""),metaRight:"<strong>তারিখ:</strong> "+c})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${x} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${o} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${x-o} জন</div>
        <div><strong>পাসের হার:</strong> ${z}%</div>
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
          ${s.map((u,$)=>{var Ge,I,v,J,Y,je,D,Pe,Ze,Ve,Ee,St,Ot,st,ft,es,fs,gn,fn,un,bn;const L=Number(u.marksObtained)||0,U=r>0?Math.round(L/r*100):L,xe=qt(L,r),Ie=U>=33,Re=((Ge=u.student)==null?void 0:Ge.fullName)||((v=(I=u.student)==null?void 0:I.user)==null?void 0:v.fullName)||`${((Y=(J=u.student)==null?void 0:J.user)==null?void 0:Y.firstName)||""} ${((D=(je=u.student)==null?void 0:je.user)==null?void 0:D.lastName)||""}`.trim()||"—",tt=((Ze=(Pe=u.student)==null?void 0:Pe.currentEnrollment)==null?void 0:Ze.rollNumber)||((Ve=u.student)==null?void 0:Ve.roll)||"—",nt=((Ee=u.student)==null?void 0:Ee.studentId)||"—",_e=typeof((Ot=(St=u.student)==null?void 0:St.currentEnrollment)==null?void 0:Ot.section)=="object"?((es=(ft=(st=u.student)==null?void 0:st.currentEnrollment)==null?void 0:ft.section)==null?void 0:es.name)||((fn=(gn=(fs=u.student)==null?void 0:fs.currentEnrollment)==null?void 0:gn.section)==null?void 0:fn._id):((bn=(un=u.student)==null?void 0:un.currentEnrollment)==null?void 0:bn.section)||"—";return`
              <tr>
                <td class="text-center">${$+1}</td>
                <td class="text-center font-bold">${tt}</td>
                <td class="font-bold">${Re}</td>
                <td class="text-center">${nt}</td>
                <td class="text-center">${_e}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${L} / ${r}</td>
                <td class="text-center font-bold">${U}%</td>
                <td class="text-center font-bold">${xe}</td>
                <td class="text-center font-bold" style="color: ${Ie?"#059669":"#dc2626"};">${Ie?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${vs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,b=window.open("","_blank");b&&(b.document.write(j),b.document.close())},Ks=()=>{var u;if(!Te||Te.length===0){F({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=ie.find($=>$._id===ke),s=ke==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,r=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),c=We==="all"?"সকল সেকশন":`সেকশন ${We}`,x=Te.filter($=>{const L=Ke[$._id];return L!==void 0&&L!==""&&!isNaN(L)}).length,o=Te.filter($=>{const L=Ke[$._id];return L===void 0||L===""||isNaN(L)?!1:(n>0?Number(L)/n*100:Number(L))>=33}).length,z=x>0?Math.round(o/x*100):0,j=[...Te].sort(($,L)=>{var U,xe;return Nt(((U=$.currentEnrollment)==null?void 0:U.rollNumber)||$.roll)-Nt(((xe=L.currentEnrollment)==null?void 0:xe.rollNumber)||L.roll)}),b=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(d==null?void 0:d.name)||""})</title>
  ${ys("portrait")}
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
      ${js({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((d==null?void 0:d.name)||"")+" | <strong>শ্রেণি:</strong> "+(((u=d==null?void 0:d.classLevel)==null?void 0:u.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+c,metaRight:"<strong>তারিখ:</strong> "+r})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Te.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${x} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${o} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Te.length-o} জন</div>
          <div><strong>পাসের হার:</strong> ${z}%</div>
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
          ${j.map(($,L)=>{var Y,je,D,Pe,Ze,Ve,Ee,St,Ot,st;const U=$._id,xe=((Y=$.currentEnrollment)==null?void 0:Y.rollNumber)||$.roll||"—",Ie=((je=$.user)==null?void 0:je.fullName)||`${((D=$.user)==null?void 0:D.firstName)||""} ${((Pe=$.user)==null?void 0:Pe.lastName)||""}`.trim()||"—",Re=$.studentId||"—",tt=typeof((Ze=$.currentEnrollment)==null?void 0:Ze.section)=="object"?((Ee=(Ve=$.currentEnrollment)==null?void 0:Ve.section)==null?void 0:Ee.name)||((Ot=(St=$.currentEnrollment)==null?void 0:St.section)==null?void 0:Ot._id):((st=$.currentEnrollment)==null?void 0:st.section)||$.section||We;if(s){const ft=Array.isArray(Ke[U])?Ke[U]:[],es=ft.length>0?ft.map(fs=>fs.subjectName+": "+fs.marksObtained+" ("+fs.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${L+1}</td>
                  <td class="text-center font-bold">${xe}</td>
                  <td class="font-bold">${Ie}</td>
                  <td class="text-center">${Re}</td>
                  <td class="text-center">${tt}</td>
                  <td style="font-size: 10px;">${es}</td>
                </tr>
              `}const nt=Ke[U],_e=nt!==void 0&&nt!==""&&!isNaN(nt),Ge=_e?Number(nt):null,I=_e?n>0?Math.round(Ge/n*100):Ge:null,v=_e?qt(Ge,n):"—",J=_e?I>=33:!1;return`
              <tr>
                <td class="text-center">${L+1}</td>
                <td class="text-center font-bold">${xe}</td>
                <td class="font-bold">${Ie}</td>
                <td class="text-center">${Re}</td>
                <td class="text-center">${tt}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${_e?Ge+" / "+n:"—"}</td>
                <td class="text-center font-bold">${_e?I+"%":"—"}</td>
                <td class="text-center font-bold">${v}</td>
                <td class="text-center font-bold" style="color: ${_e?J?"#059669":"#dc2626":"#64748b"};">
                  ${_e?J?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${vs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,f=window.open("","_blank");f&&(f.document.write(b),f.document.close())},Fn=async()=>{if(!ke||!We){F({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}ot(!0);try{const t={classLevel:d.classLevel._id,limit:100};We!=="all"&&(t.section=We);const a=(await K.get("/students",{params:t})).data.data||[];a.sort((x,o)=>{var b,f;const z=Nt(((b=x.currentEnrollment)==null?void 0:b.rollNumber)||x.roll),j=Nt(((f=o.currentEnrollment)==null?void 0:f.rollNumber)||o.roll);return z-j}),Je(a);const n={exam:d._id};ke!=="all"&&(n.subject=ke);const c=(await K.get("/exams/marks",{params:n})).data.data.marks||[];if(ke==="all"){const x={};a.forEach(o=>{x[o._id]=[]}),c.forEach(o=>{var j,b;const z=typeof o.student=="object"?(j=o.student)==null?void 0:j._id:o.student;z&&x[z]&&x[z].push({subjectName:((b=o.subject)==null?void 0:b.name)||"অজানা বিষয়",marksObtained:o.marksObtained,grade:o.grade})}),qe(x)}else{const x={};a.forEach(o=>{x[o._id]=""}),c.forEach(o=>{var j;const z=typeof o.student=="object"?(j=o.student)==null?void 0:j._id:o.student;z&&(x[z]=o.marksObtained??"")}),qe(x)}}catch(t){console.error("Failed to load students for marks entry",t),F({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{ot(!1)}},Ss=async(t=fe,s=d)=>{var r,c,x,o,z,j,b,f;const a=s||d;if(!a)return;const n=((r=a.classLevel)==null?void 0:r._id)||(typeof a.classLevel=="string"?a.classLevel:null);ce(!0);try{if(Me){const I=await K.get(`/exams/${a._id}/rankings`);if(I.data.success&&I.data.data){const{rankings:v=[],evaluatedSubjects:J=[]}=I.data.data;V(J);const je=(t&&t!=="all"?v.filter(D=>String(D.section||"")===String(t)):v).map((D,Pe)=>{const Ze={_id:D.studentId,studentId:D.studentCode||D.studentId,user:{fullName:D.name,firstName:D.name},currentEnrollment:{rollNumber:D.rollNumber,section:D.section}},Ve={};D.subjectMarks&&Object.keys(D.subjectMarks).forEach(Ot=>{const st=D.subjectMarks[Ot],ft=st!==null&&typeof st=="object"?st.marksObtained:st,es=st!==null&&typeof st=="object"&&st.grade||qt(ft);Ve[Ot]={marksObtained:ft!=null&&typeof ft!="object"?ft:"",grade:es||""}});const Ee=D.isPassed!==void 0?D.isPassed:D.grade!=="F"&&!D.isIncomplete,St=D.gpa||(Ee&&D.percentage>=33?D.percentage>=80?"5.00":D.percentage>=70?"4.00":D.percentage>=60?"3.50":D.percentage>=50?"3.00":D.percentage>=40?"2.00":"1.00":"0.00");return{student:Ze,studentMarksObj:Ve,totalObtained:D.totalObtained,totalFullMarks:D.totalMaxMarks,percentage:D.percentage,overallGrade:D.grade,gpa:St,isPassed:Ee,subjectsCountWithMarks:Object.keys(Ve).length,rankNum:D.rank||Pe+1,rankText:zl(D.rank||Pe+1),roll:Nt(D.rollNumber)}});R(je);return}}const $=((x=(c=(await K.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:c.data)==null?void 0:x.marks)||[];let L=[];if(n)try{L=((z=(o=(await K.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:o.data)==null?void 0:z.subjects)||[]}catch(I){console.warn("Subject fetch warning:",I)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const I=a.selectedSubjects.map(v=>String(typeof v=="object"?v._id:v));L=L.filter(v=>I.includes(String(v._id)))}let U=L.filter(I=>$.some(v=>{var Y,je;const J=typeof v.subject=="object"?((Y=v.subject)==null?void 0:Y._id)||((je=v.subject)==null?void 0:je.id):v.subject;return String(J)===String(I._id)&&v.marksObtained!==null&&v.marksObtained!==void 0&&v.marksObtained!==""}));if(U.length===0&&$.length>0){const I={};$.forEach(v=>{var Y,je;const J=typeof v.subject=="object"?((Y=v.subject)==null?void 0:Y._id)||((je=v.subject)==null?void 0:je.id):v.subject;if(J&&v.marksObtained!==null&&v.marksObtained!==void 0&&v.marksObtained!==""){const D=typeof v.subject=="object"?v.subject.name||v.subject.code:"বিষয়",Pe=typeof v.subject=="object"?v.subject.code:"",Ze=typeof v.subject=="object"?v.subject.totalMarks||v.totalMarks||100:v.totalMarks||100;I[String(J)]={_id:String(J),name:D,code:Pe,totalMarks:Number(Ze)||100}}}),U=Object.values(I)}U.length===0&&L.length>0&&(U=L),V(U);const xe=U.reduce((I,v)=>I+(Number(v.totalMarks)||100),0);let Ie=[];if(n)try{const I={classLevel:n,limit:300};t&&t!=="all"&&(I.section=t),Ie=((j=(await K.get("/students",{params:I})).data)==null?void 0:j.data)||[]}catch(I){console.warn("Students fetch warning:",I)}if(Ie.length===0){const I={};$.forEach(v=>{v.student&&typeof v.student=="object"&&v.student._id&&(I[v.student._id]=v.student)}),Ie=Object.values(I)}const Re={};$.forEach(I=>{var D,Pe,Ze,Ve;const v=typeof I.student=="object"?((D=I.student)==null?void 0:D._id)||((Pe=I.student)==null?void 0:Pe.id):I.student,J=typeof I.subject=="object"?((Ze=I.subject)==null?void 0:Ze._id)||((Ve=I.subject)==null?void 0:Ve.id):I.subject;if(!v||!J)return;const Y=String(v),je=String(J);Re[Y]||(Re[Y]={}),Re[Y][je]={marksObtained:I.marksObtained,grade:I.grade}});const tt=Ie.map(I=>{var St;const v=Re[I._id]||{};let J=0,Y=0,je=0;U.forEach(Ot=>{const st=v[Ot._id];if(st&&st.marksObtained!==null&&st.marksObtained!==void 0&&st.marksObtained!==""){const ft=Number(st.marksObtained);J+=ft,Y+=1;const es=Number(Ot.totalMarks)||100;ft<es*.33&&(je+=1)}});const D=xe>0?Number((J/xe*100).toFixed(1)):0,Pe=U.length>0&&Y>0&&Y<U.length,Ze=Y>0&&je===0&&!Pe,Ve=Ze?qt(D):je>0?"F":Pe?qt(D):Y>0?"F":"—";let Ee="—";return Y>0&&(!Ze||D<33?Ee="0.00":D>=80?Ee="5.00":D>=70?Ee="4.00":D>=60?Ee="3.50":D>=50?Ee="3.00":D>=40?Ee="2.00":Ee="1.00"),{student:I,studentMarksObj:v,totalObtained:J,totalFullMarks:xe,subjectsCountWithMarks:Y,failedCount:je,isIncomplete:Pe,percentage:D,isPassed:Ze,overallGrade:Ve,gpa:Ee,roll:Nt(((St=I.currentEnrollment)==null?void 0:St.rollNumber)||I.roll)}});tt.sort((I,v)=>I.subjectsCountWithMarks===0&&v.subjectsCountWithMarks===0?I.roll-v.roll:I.subjectsCountWithMarks===0?1:v.subjectsCountWithMarks===0||I.failedCount===0&&v.failedCount>0?-1:I.failedCount>0&&v.failedCount===0?1:v.totalObtained!==I.totalObtained?v.totalObtained-I.totalObtained:I.roll-v.roll);let nt=0,_e=null;const Ge=tt.map(I=>{if(I.subjectsCountWithMarks===0)return{...I,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};_e!==null&&I.totalObtained===_e||(nt+=1,_e=I.totalObtained);const v=nt,J=tt.filter(je=>je.subjectsCountWithMarks>0&&je.totalObtained===I.totalObtained).length>1;let Y="";return v===1?Y=J?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":v===2?Y=J?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":v===3?Y=J?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":v===4?Y=J?"৪র্থ (যৌথ)":"৪র্থ":v===5?Y=J?"৫ম (যৌথ)":"৫ম":v===6?Y=J?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":v===7?Y=J?"৭ম (যৌথ)":"৭ম":v===8?Y=J?"৮ম (যৌথ)":"৮ম":v===9?Y=J?"৯ম (যৌথ)":"৯ম":v===10?Y=J?"১০ম (যৌথ)":"১০ম":Y=J?`${v}তম (যৌথ)`:`${v}তম`,I.failedCount>0?Y+=" (অনুত্তীর্ণ)":I.isIncomplete&&(Y+=" (অসম্পূর্ণ)"),{...I,rankNum:v,rankText:Y}});R(Ge)}catch(u){console.error("Error loading merit list:",u);const $=((f=(b=u.response)==null?void 0:b.data)==null?void 0:f.message)||u.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";F({type:"error",message:$})}finally{ce(!1)}},zs=async(t,s="all")=>{var a,n;if(t){Z(!0);try{const r={classLevel:t};s&&s!=="all"&&(r.section=s);const c=await K.get("/exams/annual-rankings",{params:r});c.data.success&&le(c.data.data)}catch(r){console.error("Failed to load annual rankings",r),F({type:"error",message:((n=(a=r.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{Z(!1)}}},Hn=()=>{var n,r,c;if(!B||!B.rankings||B.rankings.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=B.classLevel)==null?void 0:n.name)||""}</title>
  ${ys("landscape")}
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
      ${js({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((r=B.classLevel)==null?void 0:r.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((c=B.classLevel)==null?void 0:c.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${B.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${B.rankings.map((x,o)=>`
            <tr>
              <td class="text-center font-bold" style="color: ${o===0?"#b45309":o===1?"#0369a1":o===2?"#b45309":"#0f172a"};">${x.rankText}</td>
              <td class="text-center font-bold">${x.rollNumber||"—"}</td>
              <td class="font-bold">${x.name}</td>
              <td class="text-center">${x.studentCode}</td>
              <td class="text-center">${x.term1Obtained} / ${x.term1Max}</td>
              <td class="text-center">${x.term2Obtained} / ${x.term2Max}</td>
              <td class="text-center">${x.term3Obtained} / ${x.term3Max}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${x.grandTotalObtained} / ${x.grandTotalMaxMarks}</td>
              <td class="text-center font-bold">${x.overallPercentage}%</td>
              <td class="text-center font-bold">${x.overallGrade}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      ${vs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},xs=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},hs=async(t=Se,s=Et,a=Lt,n=!1)=>{var r,c;Ce(!0);try{const x={};t&&t!=="all"&&(x.stream=t),s&&s!=="all"&&(x.exam=s),a&&a!=="all"&&(x.classLevel=a);const o=await K.get("/exams/routines",{params:x});o.data.success&&Ne(o.data.data.routines||[])}catch(x){console.error("Failed to load routines",x),n&&F({type:"error",message:((c=(r=x.response)==null?void 0:r.data)==null?void 0:c.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{Ce(!1)}},Cs=async(t=!1,s=null)=>{Ce(!0);try{const a={},n=s||Yt;Dt&&n&&(a.studentId=n);const r=await K.get("/exams/student-routine",{params:a});r.data.success&&(Vs(r.data.data),Ne(r.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{Ce(!1)}},Gn=(t=null)=>{var a,n,r,c,x,o;const s=(t==null?void 0:t.classLevel)||((a=d==null?void 0:d.classLevel)==null?void 0:a._id)||((n=_[0])==null?void 0:n._id)||"";s&&ks(s),t?(vt(t._id),Mt({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(vt(null),Mt({title:d?`${d.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(d==null?void 0:d._id)||((r=O[0])==null?void 0:r._id)||"",examName:(d==null?void 0:d.name)||((c=O[0])==null?void 0:c.name)||"",classLevel:s,className:((x=d==null?void 0:d.classLevel)==null?void 0:x.name)||((o=_[0])==null?void 0:o.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),ns(!0)},Yn=()=>{if(!H||H.length===0){F({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=H.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));Mt(s=>({...s,schedule:t})),F({type:"success",message:`${H.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},Un=async t=>{var s,a;if(t&&t.preventDefault(),!kt.title.trim()){F({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}ws(!0);try{const n={...kt,_id:ms},r=await K.post("/exams/routines",n);r.data.success&&(F({type:"success",message:r.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),ns(!1),hs())}catch(n){console.error("Failed to save routine",n),F({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{ws(!1)}},qn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await K.delete(`/exams/routines/${t}`)).data.success&&(F({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),Ne(r=>r.filter(c=>c._id!==t)))}catch(n){console.error("Failed to delete routine",n),F({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},Zn=()=>{Mt(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},ba=t=>{Mt(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},$e=(t,s,a)=>{Mt(n=>{const r=[...n.schedule],c={...r[t],[s]:a};if(s==="date"&&(c.day=xs(a)),s==="subject"){const x=H&&H.find(o=>o._id===a)||ie.find(o=>o._id===a);x?(c.subject=x._id,c.subjectName=x.name,c.totalMarks=Number(x.totalMarks)||100):(c.subject=a,c.subjectName=a)}return r[t]=c,{...n,schedule:r}})},Vn=t=>{if(!t||!t.schedule||t.schedule.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${t.title||"পরীক্ষার রুটিন"} - ${t.className||""}</title>
  ${ys("portrait")}
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
      ${js({title:"",orientation:"portrait",metaLeft:`<strong>বিভাগ:</strong> ${a} ${t.className?`| <strong>শ্রেণি:</strong> ${t.className}`:""}`,metaRight:`<strong>তারিখ:</strong> ${n}`})}

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
          ${t.schedule.map((c,x)=>`
            <tr>
              <td class="text-center font-bold" style="color: #0f766e;">${te(x+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${os(c.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${c.day||xs(c.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${c.subjectName||c.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${te(c.totalMarks||100)}</td>
              <td class="text-center" style="font-weight: 700; font-size: 10.5px; color: #1e293b;">
                ${c.startTime||"—"} থেকে ${c.endTime||"—"}
              </td>
              <td class="text-center">
                <span style="font-weight: 700; background: #e2e8f0; padding: 2.5px 8px; border-radius: 4px; font-size: 10px;">${c.roomNo||"১০১"}</span>
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

      ${vs(["শ্রেণি শিক্ষক / হল সুপার","পরীক্ষা নিয়ন্ত্রক","প্রতিষ্ঠান প্রধান / পরিচালক"])}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;s.document.open(),s.document.write(r),s.document.close()},Qn=(t=Le,s=he)=>{var f;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(d==null?void 0:d.name)||"পরীক্ষা",r=((f=d==null?void 0:d.classLevel)==null?void 0:f.name)||"সকল শ্রেণি",c=fe==="all"?"সকল সেকশন":`সেকশন ${fe}`,x=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),o=t==="landscape";let z="";g.forEach((u,$)=>{var _e,Ge,I,v;const L=u.student,U=((_e=L.currentEnrollment)==null?void 0:_e.rollNumber)||L.roll||"—",xe=((Ge=L.user)==null?void 0:Ge.fullName)||`${((I=L.user)==null?void 0:I.firstName)||""} ${((v=L.user)==null?void 0:v.lastName)||""}`.trim()||L.studentId||"—",Ie=L.studentId||"—",Re=u.rankNum===1?"#fef3c7":u.rankNum===2?"#f1f5f9":u.rankNum===3?"#ffedd5":"transparent",tt=u.rankNum===1?"🥇 ":u.rankNum===2?"🥈 ":u.rankNum===3?"🥉 ":"",nt=k.map(J=>{var Ve,Ee;const Y=(Ee=(Ve=u.studentMarksObj)==null?void 0:Ve[String(J._id)])==null?void 0:Ee.marksObtained,je=Y!==null&&typeof Y=="object"?Y.marksObtained??"":Y??"",D=je!=null&&je!=="",Pe=Number(J.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${D&&Number(je)<Pe*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${D?je:"—"}</td>`}).join("");z+=`
        <tr style="background-color: ${Re};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${te($+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${xe}</div>
            <div class="student-meta-text">আইডি: ${Ie}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${U}</td>
          ${nt}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${u.subjectsCountWithMarks===0?"—":`${u.totalObtained} / ${u.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${tt}${u.rankText||"—"}</td>
          <td class="col-grade" style="text-align: center; font-weight: bold; color: ${u.overallGrade==="F"?"#dc2626":"#059669"};">
            ${u.overallGrade}
          </td>
          <td class="col-gpa" style="text-align: center; font-weight: bold; color: ${u.overallGrade==="F"?"#dc2626":"#0f766e"};">
            ${u.subjectsCountWithMarks===0?"—":u.gpa||"0.00"}
          </td>
          <td class="col-percent" style="text-align: center; font-weight: 600;">${u.subjectsCountWithMarks===0?"—":`${u.percentage}%`}</td>
          <td class="col-status" style="text-align: center; font-weight: 600; color: ${u.subjectsCountWithMarks===0?"#64748b":u.isIncomplete?"#b45309":u.isPassed?"#059669":"#dc2626"};">
            ${u.subjectsCountWithMarks===0?"অনুপস্থিত":u.isIncomplete?"অসম্পূর্ণ":u.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}
          </td>
        </tr>
      `});const j=k.map(u=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${u.name}</div>
        <div class="sub-mark-box">(${u.totalMarks||100})</div>
      </th>
    `).join(""),b=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${ys(t)}
      <style id="dynamic-page-style">
        @page { 
          size: A4 ${t}; 
          margin: ${o?"6mm 8mm":"8mm 10mm"} !important; 
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
          width: ${o?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: ${o?"281mm":"194mm"};
          max-width: 100%;
          height: calc(${o?"210mm":"297mm"} - ${o?"12mm":"16mm"});
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
          ${js({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${r} | <strong>সেকশন:</strong> ${c}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${g.length} জন | <strong>তারিখ:</strong> ${x}`})}
        </div>

        <table class="compact-table">
          <thead>
            <tr>
              <th class="col-serial">ক্রম</th>
              <th class="col-student">শিক্ষার্থীর নাম ও আইডি</th>
              <th class="col-roll">রোল</th>
              ${j}
              <th class="col-total">সর্বমোট মার্ক</th>
              <th class="col-rank">স্থান</th>
              <th class="col-grade">গ্রেড</th>
              <th class="col-gpa">জিপিএ</th>
              <th class="col-percent">শতকরা</th>
              <th class="col-status">স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            ${z}
          </tbody>
        </table>

        <!-- Footer Signatures -->
        <div class="footer-wrap" style="width: 100%; padding-top: 14px; page-break-inside: avoid; break-inside: avoid;">
          ${vs(s)}
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
    </html>`;a.document.open(),a.document.write(b),a.document.close()},Xn=(t,s)=>{qe(a=>({...a,[t]:s}))},qt=(t,s=100)=>{const a=rs(t),n=parseFloat(a);if(isNaN(n))return"—";const r=Number(s)||100,c=r>0?n/r*100:n;return c>=80?"A+":c>=70?"A":c>=60?"A-":c>=50?"B":c>=40?"C":c>=33?"D":"F"},gs=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",Jn=async()=>{const t=ie.find(r=>r._id===ke),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(Ke).map(r=>{const c=Ke[r],x=rs(c);return{studentId:r,marksObtained:x===""?null:parseFloat(x)}});if(a.length===0){F({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(r=>r.marksObtained!==null&&r.marksObtained>s)){F({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}jt(!0);try{const r={exam:d._id,subject:ke,marks:a};(await K.post("/exams/marks",r)).data.success&&F({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(r){console.error("Failed to save marks",r),F({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{jt(!1)}},Kn=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},el=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},ea=()=>{Ue(!1),xt(null),ge({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),ze([])},ya=(t=!1)=>{var n,r,c,x;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(C==null?void 0:C.userType)||((r=(n=C==null?void 0:C.permissions)==null?void 0:n.includes)==null?void 0:r.call(n,"academic.manage"))||((x=(c=C==null?void 0:C.permissions)==null?void 0:c.includes)==null?void 0:x.call(c,"exam.manage")),a=me.filter(o=>{var z;if(((z=o.schedule)==null?void 0:z.kind)!=="matrix")return!1;if(t&&d){if(o.exam&&o.exam!==d._id)return!1}else if(Et!=="all"&&o.exam!==Et)return!1;return!(Se!=="all"&&o.stream!==Se||Lt!=="all"&&o.classLevel!==Lt)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{M("marks"),it(null)},title:"ফিরে যান",children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Gt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&d?`পরীক্ষার রুটিন — ${d.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:Me?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{Me?Cs(!0):hs(Se,Et,Lt,!0)},disabled:Ae,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Fs,{size:14,className:Ae?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Jt(null),Xt(o=>!o)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ss,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন (Matrix)"})]})]})]}),!Me&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${Se==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>gt("all"),children:["সকল বিভাগ (",me.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>gt("noorani"),children:["📖 নূরানী বিভাগ (",me.filter(o=>o.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>gt("hifz"),children:["🕌 হিফজ বিভাগ (",me.filter(o=>o.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>gt("kitab"),children:["📚 কিতাব বিভাগ (",me.filter(o=>o.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:Et,onChange:o=>Qt(o.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),O.map(o=>e.jsx("option",{value:o._id,children:o.name},o._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Lt,onChange:o=>Ws(o.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),_.map(o=>e.jsx("option",{value:o._id,children:o.name},o._id))]})]})]})]})}),s&&Ms&&e.jsx("div",{className:"mb-20 no-print",children:e.jsx(wl,{initialRoutine:ls,classes:_,subjects:ie,exams:O,selectedExam:d,madrasahName:oe,onSaved:()=>{hs(Se,Et,Lt,!1),Xt(!1),Jt(null)},onClose:()=>{Xt(!1),Jt(null)}},(ls==null?void 0:ls._id)||"new-matrix")}),Ae?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Gt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:Me?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Jt(null),Xt(!0)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ss,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(o=>{var j;const z=o.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:o.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:z.bg,color:z.color,border:`1px solid ${z.border}`},children:z.label}),o.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",o.className]}),o.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:o.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:o.status==="published"?"#dcfce7":"#f1f5f9",color:o.status==="published"?"#166534":"#64748b"},children:o.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:o.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{var b;((b=o.schedule)==null?void 0:b.kind)==="matrix"?Ln(o,oe):Vn(o)},style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(ut,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>{var b;((b=o.schedule)==null?void 0:b.kind)==="matrix"?(Jt(o),Xt(!0)):Gn(o)},style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(ta,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>qn(o._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(Is,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),((j=o.schedule)==null?void 0:j.kind)==="matrix"?e.jsx(Nl,{routine:o}):e.jsxs(e.Fragment,{children:[o.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",o.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(o.schedule)&&o.schedule.length>0?o.schedule.map((b,f)=>e.jsxs("tr",{style:{background:f%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:te(f+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Gt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:os(b.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:b.day||xs(b.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:b.subjectName||b.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[te(b.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(vn,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[b.startTime||"সকাল ০৯:৩০"," — ",b.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Nn,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:b.roomNo||"১০১"})]})})]},f)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(o.schedule)&&o.schedule.length>0?o.schedule.map((b,f)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:te(f+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:os(b.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",b.day||xs(b.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Nn,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:b.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:b.subjectName||b.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[te(b.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(vn,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",b.startTime||"সকাল ০৯:৩০"," — ",b.endTime||"দুপুর ১২:৩০"]})]})]},f)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]})]},o._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[ue&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:ue.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[ue.type==="success"?e.jsx(ca,{size:18}):e.jsx(ds,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:ue.message})]}),d?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:oe}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",d.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((ja=d.classLevel)==null?void 0:ja.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>it(null),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:Me?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",ye," • ",d.name," • ",((va=d.classLevel)==null?void 0:va.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Me||N==="student_result"?Js():N==="subject_result"?ua():N==="merit"||N==="merit_list"?pt(!0):Ks()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16})," ",Me?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(xl,{selectedRoles:he,onChange:t=>{De(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(ml,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${d.name}`,metaLeft:`শ্রেণি: ${((Na=d.classLevel)==null?void 0:Na.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),Me&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>M("student_result"),children:[e.jsx(bs,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{M("merit"),Ss(fe)},children:[e.jsx(ts,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{M("routine"),Cs()},children:[e.jsx(Gt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!Me&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>M("marks"),children:[e.jsx(ta,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>M("student_result"),children:[e.jsx(bs,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{M("subject_result"),!et&&ie.length>0&&(Bt(ie[0]._id),Bs(ie[0]._id,_t))},children:[e.jsx(is,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{M("merit"),g.length===0&&Ss(fe)},children:[e.jsx(ts,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{M("routine"),Qt((d==null?void 0:d._id)||"all"),hs("all",(d==null?void 0:d._id)||"all","all")},children:[e.jsx(Gt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>M("seat_plan"),children:[e.jsx(as,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>M("admit_card"),children:[e.jsx(Ft,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${N==="hifz_results"?"btn-primary":"btn-ghost"}`,onClick:()=>M("hifz_results"),children:[e.jsx(is,{size:15})," ",e.jsx("span",{children:"হিফজ ও নাজেরা ফলাফল"})]})]}),N==="marks"&&e.jsxs(e.Fragment,{children:[!Me&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:ke,onChange:t=>{rt(t.target.value),Je([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ie.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:lt((wa=d==null?void 0:d.classLevel)==null?void 0:wa.name)?"মক্তব উপ-শাখা":"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:We,onChange:t=>{yt(t.target.value),Je([])},children:[e.jsx("option",{value:"",children:lt((ka=d==null?void 0:d.classLevel)==null?void 0:ka.name)?"উপ-শাখা নির্বাচন করুন":"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:lt((Sa=d==null?void 0:d.classLevel)==null?void 0:Sa.name)?"সকল উপ-শাখা":"সকল সেকশন"}),(lt((za=d==null?void 0:d.classLevel)==null?void 0:za.name)?As:$s).map((t,s)=>{var a;return e.jsx("option",{value:t,children:lt((a=d==null?void 0:d.classLevel)==null?void 0:a.name)?t:`সেকশন ${t}`},s)})]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:Fn,disabled:G||!ke||!We||ie.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ys,{size:16})," লোড করুন"]})]}),ie.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ds,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),G?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Me?pe&&((Ca=pe.results)==null?void 0:Ca.length)>0?fa(pe):Oe.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ft,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(C==null?void 0:C.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Oe.map(t=>{var r,c,x;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=qt(a);return e.jsxs("tr",{children:[(C==null?void 0:C.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(r=t.student)==null?void 0:r.firstName," ",(c=t.student)==null?void 0:c.lastName]})}),e.jsx("td",{className:"font-semibold",children:(x=t.subject)==null?void 0:x.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Te.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ft,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Te.map((t,s)=>{var j,b,f,u;const a=t._id,n=((j=t.currentEnrollment)==null?void 0:j.rollNumber)||"—",r=((b=t.user)==null?void 0:b.fullName)||`${((f=t.user)==null?void 0:f.firstName)||""} ${((u=t.user)==null?void 0:u.lastName)||""}`.trim();if(ke==="all"){const $=Array.isArray(Ke[a])?Ke[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:te(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:r}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:$.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:$.map((L,U)=>{var xe;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[L.subjectName,": ",typeof L.marksObtained=="object"?(xe=L.marksObtained)==null?void 0:xe.marksObtained:L.marksObtained," (",L.grade,")"]},U)})})})]},a)}const c=ie.find($=>$._id===ke),x=Number(c==null?void 0:c.totalMarks)||100,o=Ke[a]??"",z=qt(o,x);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:te(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:r}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:o!==""&&Number(rs(o))>x?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${x}`,value:o,onChange:$=>{const L=$.target.value;/^[0-9০-৯.]*$/.test(L)&&Xn(a,L)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(z)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:z})})]},a)})})]}),ke!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ks,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:Jn,disabled:He,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(pa,{size:16})," ",He?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),N==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!Me&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:lt((Aa=d==null?void 0:d.classLevel)==null?void 0:Aa.name)?"মক্তব উপ-শাখা":"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Be,onChange:t=>X(t.target.value),children:[e.jsx("option",{value:"all",children:lt(($a=d==null?void 0:d.classLevel)==null?void 0:$a.name)?"সকল উপ-শাখা":"সকল সেকশন"}),(lt((Ia=d==null?void 0:d.classLevel)==null?void 0:Ia.name)?As:$s).map((t,s)=>{var a;return e.jsx("option",{value:t,children:lt((a=d==null?void 0:d.classLevel)==null?void 0:a.name)?t:`সেকশন ${t}`},s)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((_a=pe==null?void 0:pe.student)==null?void 0:_a._id)||"",onChange:t=>{const s=t.target.value;s&&(At(s),Xs(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),$t.filter(t=>{var a,n,r,c,x,o;if(Be==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((r=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:r.name)||((x=(c=t.currentEnrollment)==null?void 0:c.section)==null?void 0:x._id):((o=t.currentEnrollment)==null?void 0:o.section)||t.section;return String(s||"")===String(Be)}).map(t=>{var r,c,x,o;const s=((r=t.user)==null?void 0:r.fullName)||`${((c=t.user)==null?void 0:c.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((o=t.currentEnrollment)==null?void 0:o.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:wt,onChange:t=>At(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Xs()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Xs(),disabled:Ht||!wt.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Ys,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),pe&&((Wa=pe.results)==null?void 0:Wa.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Js,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Ht?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):pe?((La=pe.results)==null?void 0:La.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(ds,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):fa(pe):e.jsxs("div",{className:"card empty-state",children:[e.jsx(bs,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),N==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:et,onChange:t=>{const s=t.target.value;Bt(s),s&&Bs(s,_t)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ie.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:lt((Ma=d==null?void 0:d.classLevel)==null?void 0:Ma.name)?"মক্তব উপ-শাখা":"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:_t,onChange:t=>{const s=t.target.value;Zt(s),et&&Bs(et,s)},children:[e.jsx("option",{value:"all",children:lt((Ra=d==null?void 0:d.classLevel)==null?void 0:Ra.name)?"সকল উপ-শাখা":"সকল সেকশন"}),(lt((Ta=d==null?void 0:d.classLevel)==null?void 0:Ta.name)?As:$s).map((t,s)=>{var a;return e.jsx("option",{value:t,children:lt((a=d==null?void 0:d.classLevel)==null?void 0:a.name)?t:`সেকশন ${t}`},s)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:Wt,onChange:t=>cs(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=Vt.filter(s=>{var x,o,z,j,b,f,u,$,L,U;if(!Wt.trim())return!0;const a=rs(Wt.trim().toLowerCase()),n=(((x=s.student)==null?void 0:x.fullName)||((z=(o=s.student)==null?void 0:o.user)==null?void 0:z.fullName)||`${((b=(j=s.student)==null?void 0:j.user)==null?void 0:b.firstName)||""} ${((u=(f=s.student)==null?void 0:f.user)==null?void 0:u.lastName)||""}`).toLowerCase(),r=String(((L=($=s.student)==null?void 0:$.currentEnrollment)==null?void 0:L.rollNumber)||"").toLowerCase(),c=String(((U=s.student)==null?void 0:U.studentId)||"").toLowerCase();return n.includes(Wt.toLowerCase())||r.includes(a)||c.includes(a)});ua(t)},disabled:y||Vt.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),y?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):et?(()=>{const t=ie.find(f=>f._id===et),s=Number(t==null?void 0:t.totalMarks)||100,a=Vt.filter(f=>{var xe,Ie,Re,tt,nt,_e,Ge,I,v,J;if(!Wt.trim())return!0;const u=rs(Wt.trim().toLowerCase()),$=(((xe=f.student)==null?void 0:xe.fullName)||((Re=(Ie=f.student)==null?void 0:Ie.user)==null?void 0:Re.fullName)||`${((nt=(tt=f.student)==null?void 0:tt.user)==null?void 0:nt.firstName)||""} ${((Ge=(_e=f.student)==null?void 0:_e.user)==null?void 0:Ge.lastName)||""}`).toLowerCase(),L=String(((v=(I=f.student)==null?void 0:I.currentEnrollment)==null?void 0:v.rollNumber)||"").toLowerCase(),U=String(((J=f.student)==null?void 0:J.studentId)||"").toLowerCase();return $.includes(Wt.toLowerCase())||L.includes(u)||U.includes(u)}),n=a.length,r=a.map(f=>Number(f.marksObtained)||0),c=r.length>0?Math.max(...r):0,x=r.length>0?(r.reduce((f,u)=>f+u,0)/r.length).toFixed(1):0,o=a.filter(f=>{const u=Number(f.marksObtained)||0;return(s>0?u/s*100:u)>=33}).length,z=n>0?Math.round(o/n*100):0,j=a.map(f=>{var u;return String(((u=f.student)==null?void 0:u._id)||f._id)}),b=j.length>0&&j.every(f=>re.has(f));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[c," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:x})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[o," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[z,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:b,onChange:()=>ga(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",re.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(ds,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:b,onChange:()=>ga(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(f=>{var _e,Ge,I,v,J,Y,je,D,Pe,Ze,Ve,Ee,St;const u=String(((_e=f.student)==null?void 0:_e._id)||f._id),$=re.has(u),L=Number(f.marksObtained)||0,U=s>0?Math.round(L/s*100):L,xe=qt(L,s),Ie=U>=33,Re=((Ge=f.student)==null?void 0:Ge.fullName)||((v=(I=f.student)==null?void 0:I.user)==null?void 0:v.fullName)||`${((Y=(J=f.student)==null?void 0:J.user)==null?void 0:Y.firstName)||""} ${((D=(je=f.student)==null?void 0:je.user)==null?void 0:D.lastName)||""}`.trim()||"—",tt=((Ze=(Pe=f.student)==null?void 0:Pe.currentEnrollment)==null?void 0:Ze.rollNumber)||"—",nt=((Ve=f.student)==null?void 0:Ve.studentId)||"—";return e.jsxs("tr",{style:{background:$?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:$,onChange:()=>Pn(u),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:tt}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:Re}),((St=(Ee=f.student)==null?void 0:Ee.currentEnrollment)==null?void 0:St.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",f.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:nt}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[L," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[U,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(xe)}`,style:{minWidth:"40px",justifyContent:"center"},children:xe})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${Ie?"badge-active":"badge-danger"}`,children:Ie?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},u)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(is,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),N==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:lt((Ba=d==null?void 0:d.classLevel)==null?void 0:Ba.name)?"মক্তব উপ-শাখা":"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:fe,onChange:t=>{const s=t.target.value;ve(s),Ss(s)},children:[e.jsx("option",{value:"all",children:lt((Ea=d==null?void 0:d.classLevel)==null?void 0:Ea.name)?"সকল উপ-শাখা":"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),(lt((Da=d==null?void 0:d.classLevel)==null?void 0:Da.name)?As:$s).map((t,s)=>{var a;return e.jsx("option",{value:t,children:lt((a=d==null?void 0:d.classLevel)==null?void 0:a.name)?t:`সেকশন ${t}`},s)})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>Ss(fe),disabled:se,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Fs,{size:14,className:se?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!Me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>W("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(il,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>pt(!0),disabled:se||g.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(ut,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[g.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[g.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[g.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((Fa=(Pa=(Oa=g.find(t=>t.rankNum===1))==null?void 0:Oa.student)==null?void 0:Pa.user)==null?void 0:Fa.fullName)||((Ya=(Ga=(Ha=g.find(t=>t.rankNum===1))==null?void 0:Ha.student)==null?void 0:Ga.user)==null?void 0:Ya.firstName)||"—"}),g.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(Ua=g.find(t=>t.rankNum===1))==null?void 0:Ua.totalObtained," (",(qa=g.find(t=>t.rankNum===1))==null?void 0:qa.percentage,"%)"]})]})]}),se?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):g.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(ts,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+k.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),k.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:g.map((t,s)=>{var z,j,b,f,u,$,L;const a=t.student,n=((z=a.currentEnrollment)==null?void 0:z.rollNumber)||"—",r=((j=a.user)==null?void 0:j.fullName)||`${((b=a.user)==null?void 0:b.firstName)||""} ${((f=a.user)==null?void 0:f.lastName)||""}`.trim(),c=t.rankNum===1,x=t.rankNum===2,o=t.rankNum===3;return e.jsxs("tr",{style:{background:c?"rgba(245, 158, 11, 0.08)":x?"rgba(100, 116, 139, 0.05)":o?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:te(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:r}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",(($=(u=a.currentEnrollment)==null?void 0:u.section)==null?void 0:$.name)||(typeof((L=a.currentEnrollment)==null?void 0:L.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),k.map(U=>{var Ge;const xe=(Ge=t.studentMarksObj)==null?void 0:Ge[U._id],Ie=xe==null?void 0:xe.marksObtained,Re=Ie!==null&&typeof Ie=="object"?Ie.marksObtained??"":Ie??"",tt=Re!=null&&Re!=="",nt=Number(U.totalMarks)||100,_e=tt&&Number(Re)<nt*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:_e?"#dc2626":tt?"#0f172a":"var(--text-muted)",background:_e?"rgba(239, 68, 68, 0.06)":"transparent"},children:tt?Re:"—"},U._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:c||x||o?"0.92rem":"0.85rem",color:c?"#b45309":x?"#475569":o?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:c?"#fef3c7":x?"#f1f5f9":o?"#ffedd5":"transparent",border:c?"1px solid #fde68a":x?"1px solid #cbd5e1":o?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),N==="routine"&&ya(!0),N==="seat_plan"&&e.jsx(wn,{selectedExam:d,classes:_,user:C}),N==="admit_card"&&e.jsx(kn,{exams:O,classes:_}),N==="hifz_results"&&e.jsx(Cn,{embedded:!0}),e.jsx("div",{className:"print-only",children:e.jsx(hl,{roles:he,style:{marginTop:"40px"}})})]}):N==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>M("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ts,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:Hn,disabled:ne||!B||((Za=B.rankings)==null?void 0:Za.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ut,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[Me?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),Dt&&Rt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:be,onChange:t=>{const s=t.target.value;m(s),zs(s,A)},children:Rt.map(t=>{var r,c,x,o,z,j,b;const s=((c=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:c._id)||((x=t.currentEnrollment)==null?void 0:x.classLevel),a=((z=(o=t.currentEnrollment)==null?void 0:o.classLevel)==null?void 0:z.name)||((j=t.currentEnrollment)==null?void 0:j.className)||"শ্রেণি",n=((b=t.user)==null?void 0:b.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((Va=_.find(t=>String(t._id)===String(be)))==null?void 0:Va.name)||(Ut==null?void 0:Ut.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:be,onChange:t=>{const s=t.target.value;m(s),zs(s,A)},children:_.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),(()=>{var a;const t=((a=_.find(n=>String(n._id)===String(be)))==null?void 0:a.name)||"",s=lt(t);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:s?"উপ-শাখা:":"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:A,onChange:n=>{const r=n.target.value;S(r),zs(be,r)},children:[e.jsx("option",{value:"all",children:s?"সকল উপ-শাখা":"সকল সেকশন"}),(s?As:$s).map(n=>e.jsx("option",{value:n,children:n},n))]})]})})(),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>zs(be,A),disabled:ne,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Fs,{size:14,className:ne?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),B&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((Qa=B.rankings)==null?void 0:Qa.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((Ja=(Xa=B.rankings)==null?void 0:Xa.find(t=>t.rank===1))==null?void 0:Ja.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((en=(Ka=B.rankings)==null?void 0:Ka.find(t=>t.rank===1))==null?void 0:en.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((sn=(tn=B.termExams)==null?void 0:tn.term1)==null?void 0:sn.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((nn=(an=B.termExams)==null?void 0:an.term2)==null?void 0:nn.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((rn=(ln=B.termExams)==null?void 0:ln.term3)==null?void 0:rn.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:ne?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!B||((on=B.rankings)==null?void 0:on.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(ts,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:B.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${gs(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):N==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>M("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(as,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(wn,{selectedExam:null,classes:_,user:C})]}):N==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>M("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ft,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(kn,{exams:O,classes:_})]}):N==="routine"?ya(!1):N==="hifz_results"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>M("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(is,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ, নাজেরা ও মক্তব ফলাফল"})]}),e.jsx("p",{className:"page-subtitle",children:"বালক ও বালিকা শাখা ➔ বিভাগ ➔ উপ-শাখা ও পরীক্ষা অনুযায়ী নম্বর এন্ট্রি ও প্রিন্ট"})]})]})}),e.jsx(Cn,{embedded:!0})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px",marginBottom:"20px"},children:[e.jsxs("div",{style:{minWidth:"220px"},children:[e.jsx("h1",{className:"page-title",style:{marginBottom:"4px"},children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",style:{margin:0},children:Rs?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":Dt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${ye} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{M("routine"),Me?Cs():hs()},children:[e.jsx(Gt,{size:15,style:{color:"#2563eb"}}),e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),!Me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>M("seat_plan"),children:[e.jsx(as,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"সিট প্ল্যান"})]}),!Me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#10b981",color:"#065f46",background:"rgba(16, 185, 129, 0.12)",fontWeight:700},onClick:()=>M("hifz_results"),children:[e.jsx(is,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ ও নাজেরা ফলাফল"})]}),!Me&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>M("admit_card"),children:[e.jsx(Ft,{size:15,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{M("annual_combined");let t=be;t||(Me&&(Ut!=null&&Ut._id)?t=Ut._id:_.length>0&&(t=_[0]._id)),t&&(m(t),zs(t,A))},children:[e.jsx(ts,{size:15,style:{color:"#d97706"}}),e.jsx("span",{children:"সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(C==null?void 0:C.userType)&&e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",fontSize:"0.82rem",whiteSpace:"nowrap"},onClick:()=>Ue(!0),children:[e.jsx(ss,{size:15}),e.jsx("span",{children:"নতুন পরীক্ষা"})]})]})]}),Dt&&Rt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(bs,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Yt,onChange:t=>Rn(t.target.value),children:Rt.map(t=>{var r,c,x,o,z,j,b;const s=((r=t.user)==null?void 0:r.fullName)||`${((c=t.user)==null?void 0:c.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((z=(o=t.currentEnrollment)==null?void 0:o.classLevel)==null?void 0:z.name)||((j=t.currentEnrollment)==null?void 0:j.className)||"",n=(b=t.currentEnrollment)!=null&&b.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),Dt&&Rt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(bs,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((dn=Rt[0].user)==null?void 0:dn.fullName)||`${((cn=Rt[0].user)==null?void 0:cn.firstName)||""} ${((pn=Rt[0].user)==null?void 0:pn.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((xn=(mn=Rt[0].currentEnrollment)==null?void 0:mn.classLevel)==null?void 0:xn.name)||"শ্রেণি",(hn=Rt[0].currentEnrollment)!=null&&hn.rollNumber?` • রোল: ${Rt[0].currentEnrollment.rollNumber}`:""]})]}),Rs&&Ut&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(bs,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Ut.name||"শ্রেণি"})]}),de?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):O.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ft,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:O.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=ra.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${el(t.status)}`,children:Kn(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?os(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",os(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsxs("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{M("marks"),ha(t)},children:[e.jsx(Ft,{size:14}),e.jsx("span",{children:Me?"ফলাফল দেখুন":"নম্বর এন্ট্রি"})]}),!Me&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{M("merit"),ha(t),Ss("all",t)},children:[e.jsx(ts,{size:14,style:{color:"#d97706"}}),e.jsx("span",{children:"মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(C==null?void 0:C.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Bn(t),title:"সম্পাদনা",children:e.jsx(ta,{size:16})}),["super_admin","admin","principal"].includes(C==null?void 0:C.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>En(t._id),title:"মুছে ফেলুন",children:e.jsx(Is,{size:16})})]})]},t._id)})}),ae&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&ea()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Xe?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:ea,type:"button",children:e.jsx(ss,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:Dn,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:ee.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",ge(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),ee.classLevel&&ks(ee.classLevel)},children:Sl.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),ee.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:ee.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};ge(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),ee.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:ee.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};ge(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),ee.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:ee.month,onChange:t=>{const s=t.target.value,a=ra.find(r=>r.value===s),n=a?a.label.split(" ")[0]:s;ge(r=>({...r,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:ra.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:ee.name,onChange:Ts,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:ee.classLevel,onChange:t=>{const s=t.target.value;ge(a=>({...a,classLevel:s,selectedSubjects:[]})),ks(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),_.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),ee.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:ee.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",ee.selectedSubjects.length,"/৪ টি"]})]}),ee.classLevel?H.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:H.map(t=>{const s=ee.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=ee.selectedSubjects;if(s)ge(n=>({...n,selectedSubjects:a.filter(r=>r!==t._id)}));else{if(a.length>=4){F({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}ge(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:ee.startDate,onChange:Ts})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:ee.endDate,onChange:Ts})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:ee.status,onChange:Ts,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:ea,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:Qe,children:Qe?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),Ls&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Gt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:ms?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>ns(!1),title:"বন্ধ করুন",children:e.jsx(oa,{size:20})})]}),e.jsxs("form",{onSubmit:Un,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:kt.title,onChange:t=>Mt(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:kt.stream,onChange:t=>Mt(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:kt.exam,onChange:t=>{const s=O.find(a=>a._id===t.target.value);Mt(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),O.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:kt.classLevel,onChange:t=>{const s=t.target.value,a=_.find(n=>n._id===s);Mt(n=>({...n,classLevel:s,className:a?a.name:""})),s&&ks(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),_.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:kt.status,onChange:t=>Mt(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:kt.instructions,onChange:t=>Mt(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[te(kt.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[H&&H.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Yn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:Zn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(ss,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),kt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:te(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const r=n.target.value;$e(s,"date",r),r&&$e(s,"day",xs(r))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:H&&H.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const r=n.target.value;if(r==="custom")$e(s,"subject","custom");else{const c=H.find(x=>x._id===r);c&&($e(s,"subject",c._id),$e(s,"subjectName",c.name),$e(s,"totalMarks",Number(c.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),H.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>$e(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>$e(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>$e(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>$e(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>ba(s),disabled:kt.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(Is,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:kt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:te(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const r=n.target.value;$e(s,"date",r),r&&$e(s,"day",xs(r))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>ba(s),disabled:kt.schedule.length<=1,title:"মুছুন",children:e.jsx(Is,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:H&&H.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const r=n.target.value;if(r==="custom")$e(s,"subject","custom");else{const c=H.find(x=>x._id===r);c&&($e(s,"subject",c._id),$e(s,"subjectName",c.name),$e(s,"totalMarks",Number(c.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),H.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})}),H&&H.length>0&&(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>$e(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>$e(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>$e(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>ns(!1),disabled:ps,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:ps,children:ps?"সংরক্ষণ হচ্ছে...":ms?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),T&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&pt(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(ut,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>pt(!1),type:"button",children:e.jsx(ss,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Ct("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:Le==="landscape"?700:500,background:Le==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:Le==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:Le==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:Le==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Ct("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:Le==="portrait"?700:500,background:Le==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:Le==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:Le==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:Le==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=he.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(he.length<=1)return;a=he.filter(n=>n!==t)}else a=[...he,t];De(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>pt(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{pt(!1),Qn(Le,he)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(ut,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{Vl as default};
