import{k as Ua,r as o,j as e,I as As,i as _s,d as O,a as Va,F as Lt,U as Oa,C as Mt,J as jn,u as vn,v as Nn,x as wn,A as ys,K as ns,b as Is,R as Ds,G as kn,X as Sn,l as Ba}from"./index-CmyFOlf7.js";import{a as qs,d as Za,c as Cn,f as Ga}from"./useMetadataQueries-aY4O98x7.js";import{g as Us,b as Ze,p as Qt,f as Jt,t as et}from"./helpers-CljGnr5z.js";import{L as Ot}from"./layout-grid-B_zjkldO.js";import{R as Ms}from"./rotate-cw-SPBp6kUW.js";import{P as rt}from"./printer-BfK0Wwog.js";import{S as Qa}from"./sliders-vertical-0gWwkZYA.js";import{S as Ja,a as Xa}from"./square-CWb0br4p.js";import{C as zn}from"./circle-check-owfNeAar.js";import{S as In}from"./sparkles-Ce0-y56T.js";import{E as $n}from"./eye-BGoOoXvg.js";import{Z as An}from"./zoom-out-B9rmBJpL.js";import{Z as _n}from"./zoom-in-CjhSvoHy.js";import{S as js}from"./constants-C6HvYUtm.js";import{g as ls,a as rs,b as is}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as Mn,P as Ln}from"./PrintFooterSignatures-Cp7l2xHQ.js";import{P as Rn}from"./PrintSignatureRoleSelector-DHIpU-6l.js";import{C as vs}from"./circle-alert-CdVVbXoB.js";import{T as Zt}from"./trophy-Bvxh4fp_.js";import{S as Os}from"./square-pen-Dfu5de-4.js";import{S as Wn}from"./save-D2LSgUJD.js";import{P as os}from"./plus-Ds6gwi5a.js";import{T as $s}from"./trash-2-riOmplCg.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=Ua("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=Ua("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Bs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Gs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Ya({selectedExam:I=null,classes:je=[],user:se=null}){var ps;const M=o.useMemo(()=>Us(se),[se]),{data:ds=[]}=qs({enabled:!je||je.length===0}),Re=je&&je.length>0?je:ds,le=o.useMemo(()=>Array.isArray(Re)?Re:Re&&Array.isArray(Re.classes)?Re.classes:[],[Re]),[We,xt]=o.useState([]),[ht,Y]=o.useState((I==null?void 0:I._id)||""),[Oe,re]=o.useState(((ps=I==null?void 0:I.classLevel)==null?void 0:ps._id)||(I==null?void 0:I.classLevel)||""),[ve,Te]=o.useState("all"),{data:F=[]}=Za(Oe,{enabled:!!Oe}),he=o.useMemo(()=>Oe?F:[],[Oe,F]),[tt,wt]=o.useState("all"),[st,kt]=o.useState((I==null?void 0:I.academicYear)||"2026"),[Bt,Qe]=o.useState((I==null?void 0:I.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[gt,E]=o.useState(!1),[X,q]=o.useState([]),[Be,h]=o.useState(new Set),[Rt,K]=o.useState({}),[St,ut]=o.useState(""),[ft,ge]=o.useState(!0),[Ct,$]=o.useState(!0),[zt,it]=o.useState(!0),[at,Je]=o.useState(!0),[bt,R]=o.useState(!0),[It,Gt]=o.useState(!0),[Wt,Xt]=o.useState(!0),[yt,cs]=o.useState(!0),[Ae,L]=o.useState(!0),[D,ae]=o.useState(!0),[Ht,ot]=o.useState(!0),[Ne,we]=o.useState(12),[dt,c]=o.useState(!1),[w,k]=o.useState("12"),[te,V]=o.useState("theme-classic"),[ke,Se]=o.useState("logo-left"),[U,Xe]=o.useState(!1),[Ee,P]=o.useState("১০১"),[ce,Fe]=o.useState(`1-20: 101
21-40: 102
41-60: 103`),[Ge,_e]=o.useState(!1);o.useEffect(()=>{(async()=>{var C,N,ie,pe,ue;try{const ze=await O.get("/exams",{params:{limit:100}}),fe=((N=(C=ze.data)==null?void 0:C.data)==null?void 0:N.exams)||((ie=ze.data)==null?void 0:ie.exams)||((pe=ze.data)==null?void 0:pe.data)||[],Ie=Array.isArray(fe)?fe:[];if(xt(Ie),!ht&&Ie.length>0&&(Y(Ie[0]._id),Qe(Ie[0].name),Ie[0].academicYear&&kt(Ie[0].academicYear),Ie[0].classLevel)){const B=((ue=Ie[0].classLevel)==null?void 0:ue._id)||Ie[0].classLevel;re(B)}}catch(ze){console.error("Failed to fetch exams for seat plan:",ze),xt([])}})()},[]),o.useEffect(()=>{var p;if(ht&&Array.isArray(We)&&We.length>0){const C=We.find(N=>N._id===ht);if(C&&(Qe(C.name||"বার্ষিক পরীক্ষা - ২০২৬"),C.academicYear&&kt(C.academicYear),C.classLevel)){const N=((p=C.classLevel)==null?void 0:p._id)||C.classLevel;re(N)}}},[ht,We]),o.useEffect(()=>{if(!Oe){ve!=="all"&&Te("all");return}ve&&ve!=="all"&&(he.some(C=>(C._id||C.id)===ve||C.name===ve)||Te("all"))},[Oe,he,ve]);const Pe=async()=>{var p,C,N,ie;E(!0);try{const pe={limit:500};Oe&&(pe.classLevel=Oe),ve&&ve!=="all"&&(pe.section=ve);const ue=await O.get("/students",{params:pe}),ze=((C=(p=ue.data)==null?void 0:p.data)==null?void 0:C.students)||((N=ue.data)==null?void 0:N.students)||((ie=ue.data)==null?void 0:ie.data)||[];let fe=Array.isArray(ze)?ze:[];tt&&tt!=="all"&&(fe=fe.filter(Me=>{var Ye;return(Me.department||((Ye=Me.currentEnrollment)==null?void 0:Ye.department)||"").toLowerCase().includes(tt.toLowerCase())})),fe.sort((Me,Le)=>{var jt,qe;const Ye=Ze(((jt=Me.currentEnrollment)==null?void 0:jt.rollNumber)||Me.rollNumber||Me.roll),Et=Ze(((qe=Le.currentEnrollment)==null?void 0:qe.rollNumber)||Le.rollNumber||Le.roll);return Ye-Et}),q(fe);const Ie=new Set(fe.map(Me=>Me._id));h(Ie);const B={};fe.forEach(Me=>{B[Me._id]=Ee||"১০১"}),K(B)}catch(pe){console.error("Failed to load students for seat plan:",pe),q([]),h(new Set)}finally{E(!1)}};o.useEffect(()=>{Oe&&Pe()},[Oe,ve,tt]);const Ce=()=>{Be.size===X.length?h(new Set):h(new Set(X.map(p=>p._id)))},He=()=>{const p=Ee.trim();p&&K(C=>{const N={...C};return Be.forEach(ie=>{N[ie]=p}),N})},Yt=()=>{const p=ce.split(`
`),C={...Rt};p.forEach(N=>{const ie=N.split(":");if(ie.length===2){const pe=ie[0].trim(),ue=ie[1].trim(),ze=pe.match(/(\d+)\s*[-–—]\s*(\d+)/);if(ze&&ue){const fe=parseInt(ze[1],10),Ie=parseInt(ze[2],10);X.forEach(B=>{var Ye;const Me=Qt(((Ye=B.currentEnrollment)==null?void 0:Ye.rollNumber)||B.rollNumber||B.roll||"0"),Le=parseInt(Me,10);!isNaN(Le)&&Le>=fe&&Le<=Ie&&(C[B._id]=ue)})}}}),K(C),_e(!1)},Tt=o.useMemo(()=>X.filter(p=>{var ue,ze;if(!Be.has(p._id))return!1;if(!St)return!0;const C=St.toLowerCase(),N=(p.fullName||((ue=p.user)==null?void 0:ue.fullName)||p.name||"").toLowerCase(),ie=String(((ze=p.currentEnrollment)==null?void 0:ze.rollNumber)||p.rollNumber||p.roll||"").toLowerCase(),pe=String(p.studentId||p.admissionNumber||"").toLowerCase();return N.includes(C)||ie.includes(C)||pe.includes(C)}),[X,Be,St]),ct=p=>{we(p),c(!1),k(String(p))},Ns=p=>{k(p);const C=parseInt(p,10);!isNaN(C)&&C>0&&C<=30&&(we(C),c(!0))},qt=o.useMemo(()=>{const p=Ne;let C=3,N=4;return p<=4||p<=6||p<=8?(C=2,N=Math.ceil(p/2)):p<=10?(C=2,N=5):p<=12?(C=3,N=4):p<=15?(C=3,N=5):p<=16?(C=4,N=4):(C=4,N=Math.ceil(p/4)),{cols:C,rows:N,count:p}},[Ne]),Kt=o.useMemo(()=>{const p=[],C=Ne;for(let N=0;N<Tt.length;N+=C)p.push(Tt.slice(N,N+C));return p},[Tt,Ne]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card mb-20 no-print",style:{border:"1px solid #cbd5e1",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[e.jsxs("div",{className:"flex justify-between items-center pb-14 border-b border-slate-200 flex-wrap gap-12",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-emerald-800 flex items-center gap-8 m-0",children:[e.jsx(Ot,{size:22,className:"text-emerald-600"}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{className:"text-xs text-slate-500 mt-2 m-0",children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{className:"flex gap-8 flex-wrap",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:()=>Xe(!U),children:["🌐 ",U?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:Pe,disabled:gt,children:[e.jsx(Ms,{size:14,className:gt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary text-xs font-bold flex items-center gap-6",style:{background:"#059669",borderColor:"#059669",padding:"8px 18px"},onClick:()=>window.print(),children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 pt-14 pb-14 border-b border-slate-200",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input text-xs",value:ht,onChange:p=>Y(p.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(We)?We:[]).map(p=>e.jsxs("option",{value:p._id,children:[p.name," (",p.academicYear||"২০২৬",")"]},p._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input text-xs",value:Oe,onChange:p=>re(p.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(le)?le:[]).map(p=>e.jsx("option",{value:p._id,children:p.name},p._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input text-xs",value:ve,onChange:p=>Te(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(he)?he:[]).map(p=>e.jsx("option",{value:p._id||p.name,children:p.name},p._id||p.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input text-xs",value:tt,onChange:p=>wt(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"py-12 border-b border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-6 mb-8 text-xs font-bold text-slate-700 uppercase tracking-wide",children:[e.jsx(Qa,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন তথ্য প্রদর্শন করতে চান? (ফিল্ড নির্বাচন করুন):"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-xs",children:[e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:ft,onChange:p=>ge(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Ct,onChange:p=>$(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"পরীক্ষার নাম"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:zt,onChange:p=>it(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:at,onChange:p=>Je(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শিক্ষার্থীর ছবি"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:bt,onChange:p=>R(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"আইডি নম্বর"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:It,onChange:p=>Gt(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শ্রেণি (Class)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Wt,onChange:p=>Xt(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:yt,onChange:p=>cs(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"সেশন / শিক্ষাবর্ষ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Ae,onChange:p=>L(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বড় রোল বক্স"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:D,onChange:p=>ae(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কাটিং দাগ (✂)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Ht,onChange:p=>ot(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"লোগো ওয়াটারমার্ক"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12",children:[e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center justify-between",children:[e.jsxs("span",{className:"flex items-center gap-6",children:[e.jsx(As,{size:16,className:"text-emerald-600"}),"কক্ষ নম্বর নির্ধারণ (Room Assignment)"]}),e.jsx("button",{type:"button",className:"text-emerald-700 underline font-semibold hover:text-emerald-800",onClick:()=>_e(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx("input",{type:"text",className:"form-input text-xs w-36",value:Ee,onChange:p=>P(p.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:He,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-6 m-0",children:"টিপস: নিচে শিক্ষার্থীর নামের পাশের ঘরে সরাসরি হাত দিয়েও আলাদা আলাদা রুম পরিবর্তন করতে পারবেন।"})]}),e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Ot,{size:16,className:"text-emerald-600"}),"A4 পেজে কার্ড সংখ্যা ও ডিজাইন থিম:"]}),e.jsxs("div",{className:"flex items-center gap-8 flex-wrap mb-8",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"প্রিসেট:"}),e.jsx("button",{type:"button",className:`btn text-xs ${Ne===12&&!dt?"btn-primary":"btn-secondary"}`,style:Ne===12&&!dt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>ct(12),children:"১২টি / পেজ (৩×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Ne===8&&!dt?"btn-primary":"btn-secondary"}`,style:Ne===8&&!dt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>ct(8),children:"৮টি / পেজ (২×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Ne===6&&!dt?"btn-primary":"btn-secondary"}`,style:Ne===6&&!dt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>ct(6),children:"৬টি / পেজ (২×৩)"}),e.jsxs("div",{className:"flex items-center gap-4 ml-auto",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কাস্টম সংখ্যা:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:w,onChange:p=>Ns(p.target.value),className:"form-input text-xs w-16 text-center font-bold"})]})]}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কালার থিম:"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:te==="theme-classic",onChange:()=>V("theme-classic")}),e.jsx("span",{children:"ক্লাসিক ব্ল্যাক"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:te==="theme-emerald",onChange:()=>V("theme-emerald")}),e.jsx("span",{className:"text-emerald-700 font-semibold",children:"রয়্যাল গ্রিন"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:te==="theme-navy",onChange:()=>V("theme-navy")}),e.jsx("span",{className:"text-blue-800 font-semibold",children:"নেভি ব্লু"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-12 mt-8 pt-8 border-t border-slate-200",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"হেডার বিন্যাস:"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:ke==="logo-left",onChange:()=>Se("logo-left")}),e.jsx("span",{className:"font-bold text-emerald-700",children:"বামে লোগো, ডানে ছবি (ডিফল্ট)"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:ke==="photo-left",onChange:()=>Se("photo-left")}),e.jsx("span",{children:"বামে ছবি, ডানে লোগো"})]})]})]})]})]}),e.jsxs("div",{className:"mt-14 pt-12 border-t border-slate-200 flex justify-between items-center flex-wrap gap-8 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-4",onClick:Ce,children:[Be.size===X.length?e.jsx(Ja,{size:14}):e.jsx(Xa,{size:14}),e.jsx("span",{children:Be.size===X.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"font-semibold text-slate-700",children:["মোট শিক্ষার্থী: ",e.jsx("strong",{className:"text-emerald-700",children:X.length})," জন | নির্বাচিত: ",e.jsx("strong",{className:"text-emerald-700",children:Be.size})," জন",Tt.length>0&&e.jsxs("span",{className:"ml-4 text-slate-500",children:["(মোট ",e.jsx("strong",{children:Kt.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:St,onChange:p=>ut(p.target.value),className:"form-input text-xs pl-24 pr-8 py-4"}),e.jsx(_s,{size:14,className:"absolute left-8 top-1/2 -translate-y-1/2 text-slate-400"})]})})]})]}),Ge&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(As,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:ce,onChange:p=>Fe(p.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>_e(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:Yt,children:"রুম ভাগ করুন"})]})]})}),gt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):Tt.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${te}`,children:(Array.isArray(Kt)?Kt:[]).map((p,C)=>e.jsx("div",{className:`seat-plan-a4-sheet ${D?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${qt.cols}, 1fr)`,gridTemplateRows:`repeat(${qt.rows}, 1fr)`,gap:Ne<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(p)?p:[]).map(N=>{var Le,Ye,Et,jt,qe,Ut,Ft,ms,Pt,ws,ks,Vt,es,xs,ts;const ie=N.fullName||((Le=N.user)==null?void 0:Le.fullName)||`${((Ye=N.user)==null?void 0:Ye.firstName)||""} ${((Et=N.user)==null?void 0:Et.lastName)||""}`.trim()||N.name||"—",pe=((jt=N.currentEnrollment)==null?void 0:jt.rollNumber)||N.rollNumber||N.roll||"—",ue=N.studentId||N.admissionNumber||((qe=N._id)==null?void 0:qe.substring(0,6))||"—",ze=((Ft=(Ut=N.currentEnrollment)==null?void 0:Ut.classLevel)==null?void 0:Ft.name)||((ms=N.classLevel)==null?void 0:ms.name)||N.class||"—",fe=((ws=(Pt=N.currentEnrollment)==null?void 0:Pt.section)==null?void 0:ws.name)||((ks=N.currentEnrollment)==null?void 0:ks.section)||((Vt=N.section)==null?void 0:Vt.name)||N.section||"—",Ie=N.department||((es=N.currentEnrollment)==null?void 0:es.department)||"সাধারণ",B=Rt[N._id]||Ee||"১০১",Me=at&&(N.photo||(xs=N.user)!=null&&xs.photo)?N.photo||((ts=N.user)==null?void 0:ts.photo):Bs;return e.jsxs("div",{className:"seat-plan-card",children:[Ht&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ue=>{Ue.currentTarget.src=Gs},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:ke==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ue=>{Ue.currentTarget.src=Gs},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:U?"AN-NUR ISLAMIC ACADEMY":M.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:U?"Shahibag, Chapainawabganj":M.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:"Exam Seat Plan"})]}),at?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Me,onError:Ue=>{Ue.currentTarget.src=Bs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[at?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Me,onError:Ue=>{Ue.currentTarget.src=Bs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:U?"AN-NUR ISLAMIC ACADEMY":M.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:U?"Shahibag, Chapainawabganj":M.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:"Exam Seat Plan"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ue=>{Ue.currentTarget.src=Gs},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:ie,children:ie})]}),bt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:ue})]}),It&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:ze})]}),Wt&&fe&&fe!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:fe})]}),zt&&Ie&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:Ie})]}),ft&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:U?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:B,onChange:Ue=>{const Vs=Ue.target.value;K(Ls=>({...Ls,[N._id]:Vs}))}})}),e.jsx("span",{className:"print-only",children:B})]})]})]})}),Ae&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:U?"Roll":"রোল / Roll"}),e.jsx("div",{className:"sp-roll-num",children:pe})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[Ct&&e.jsx("span",{className:"font-semibold",children:Bt}),yt&&e.jsxs("span",{children:[U?"Session:":"সেশন:"," ",st&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(st))?new Date().getFullYear():st||new Date().getFullYear()]})]})]},N._id)})},`page-${C}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
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
          background: #ffffff;
          border: 1.2px solid #0f172a;
          border-radius: 4px;
          padding: 5px 7px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          min-height: 0;
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
          width: 42px;
          height: 48px;
          border: 1px solid #64748b;
          border-radius: 3px;
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
          padding: 0 2px;
        }

        .sp-madrasah-title {
          font-family: 'Noto Serif Bengali', serif;
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          white-space: nowrap;
          letter-spacing: -0.2px;
        }

        .sp-madrasah-sub {
          font-size: 7.5px;
          color: #475569;
          line-height: 1.1;
          margin-top: 1px;
          white-space: nowrap;
        }

        .sp-badge {
          display: inline-block;
          font-size: 8px;
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid #0f172a;
          border-radius: 9999px;
          padding: 0.5px 7px;
          margin-top: 2px;
          line-height: 1.25;
          letter-spacing: 0.2px;
        }

        .sp-logo-wrapper {
          width: 38px;
          height: 38px;
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
          gap: 6px;
          flex-grow: 1;
        }

        .sp-info-table {
          flex-grow: 1;
          border-collapse: collapse;
          font-size: 9.5px;
          line-height: 1.35;
        }
        .sp-info-table td {
          padding: 0.5px 0;
          vertical-align: middle;
        }

        .sp-lbl {
          font-weight: 600;
          color: #334155;
          white-space: nowrap;
          width: 38px;
        }

        .sp-colon {
          width: 6px;
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
          max-width: 90px;
        }

        /* Roll Box (Right) */
        .sp-roll-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-roll-box {
          border: 1.2px solid #0f172a;
          border-radius: 4px;
          width: 48px;
          text-align: center;
          overflow: hidden;
          background: #ffffff;
        }

        .sp-roll-hdr {
          background: #f1f5f9;
          font-size: 8px;
          font-weight: 700;
          color: #0f172a;
          padding: 1px 0;
          border-bottom: 1px solid #0f172a;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .sp-roll-num {
          font-size: 16px;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.2;
          padding: 2px 0 1px 0;
          font-family: monospace, sans-serif;
        }

        /* Card Footer */
        .sp-card-footer {
          position: relative;
          z-index: 2;
          margin-top: 2.5px;
          padding-top: 2px;
          border-top: 1px dotted #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 7.5px;
          color: #64748b;
          overflow: hidden;
          white-space: nowrap;
          max-height: 16px;
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
      `})]})}const Hs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',G=(I,je="—")=>I==null?je:typeof I=="object"?I.name||I.title||I.banglaName||I.code||I._id||je:String(I).trim()||je;function qa({exams:I=[],classes:je=[]}){const{user:se}=Va(),M=o.useMemo(()=>Us(se),[se]),{data:ds=[]}=qs({enabled:!je||je.length===0}),Re=je&&je.length>0?je:ds,le=o.useMemo(()=>Array.isArray(Re)?Re:Re&&Array.isArray(Re.classes)?Re.classes:[],[Re]),We=o.useMemo(()=>Array.isArray(I)?I:I&&Array.isArray(I.exams)?I.exams:[],[I]),[xt,ht]=o.useState(""),[Y,Oe]=o.useState(""),[re,ve]=o.useState("all"),[Te,F]=o.useState("all"),{data:he=[]}=Za(Y,{enabled:!!Y}),tt=o.useMemo(()=>Y?he:[],[Y,he]),[wt,st]=o.useState([]),[kt,Bt]=o.useState(!1),[Qe,gt]=o.useState(""),[E,X]=o.useState(new Set),[q,Be]=o.useState({}),[h,Rt]=o.useState("১০২"),[K,St]=o.useState(()=>new Date().toISOString().split("T")[0]),[ut,ft]=o.useState("preview"),[ge,Ct]=o.useState(100),[$,zt]=o.useState("en"),[it,at]=o.useState(2),[Je,bt]=o.useState("2"),[R,It]=o.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});o.useEffect(()=>{We.length>0&&!xt&&ht(We[0]._id||We[0].id||"")},[We,xt]);const Gt=o.useRef(Y);o.useEffect(()=>{if(Gt.current!==Y){Gt.current=Y,ve("all");return}if(!Y){re!=="all"&&ve("all");return}re&&re!=="all"&&(tt.some(w=>(w._id||w.id)===re||w.name===re)||ve("all"))},[Y,tt,re]);const Wt=async()=>{var c,w,k,te;if(!Y){st([]),X(new Set);return}Bt(!0);try{const V={classLevel:Y,limit:500,status:"active"};re&&re!=="all"&&(V.section=re);const ke=await O.get("/students",{params:V}),Se=((w=(c=ke.data)==null?void 0:c.data)==null?void 0:w.students)||((k=ke.data)==null?void 0:k.students)||((te=ke.data)==null?void 0:te.data)||[];let U=Array.isArray(Se)?Se:Se.students||[];Te&&Te!=="all"&&(U=U.filter(P=>{var Fe;return(P.department||((Fe=P.currentEnrollment)==null?void 0:Fe.department)||"").toLowerCase().includes(Te.toLowerCase())})),U.sort((P,ce)=>{var _e,Pe;const Fe=Ze(((_e=P.currentEnrollment)==null?void 0:_e.rollNumber)||P.rollNumber||P.roll),Ge=Ze(((Pe=ce.currentEnrollment)==null?void 0:Pe.rollNumber)||ce.rollNumber||ce.roll);return Fe-Ge}),st(U);const Xe=new Set(U.map(P=>P._id||P.id));X(Xe);const Ee={};U.forEach(P=>{const ce=P._id||P.id;Ee[ce]=h}),Be(Ee)}catch(V){console.error("Failed to load students for admit card:",V),st([]),X(new Set)}finally{Bt(!1)}};o.useEffect(()=>{Y&&Wt()},[Y,re,Te]);const Xt=()=>{const c=h.trim();c&&Be(w=>{const k={...w};return E.forEach(te=>{k[te]=c}),k})},yt=()=>{E.size===Ae.length&&Ae.length>0?X(new Set):X(new Set(Ae.map(c=>c._id||c.id)))},cs=c=>{const w=new Set(E);w.has(c)?w.delete(c):w.add(c),X(w)},Ae=o.useMemo(()=>{if(!Qe.trim())return wt;const c=Qe.toLowerCase();return wt.filter(w=>{var ke,Se;const k=G(((ke=w.user)==null?void 0:ke.name)||w.name,"").toLowerCase(),te=G(((Se=w.currentEnrollment)==null?void 0:Se.rollNumber)||w.rollNumber||w.roll,"").toLowerCase(),V=G(w.studentId||w.admissionNumber,"").toLowerCase();return k.includes(c)||te.includes(c)||V.includes(c)})},[wt,Qe]),L=o.useMemo(()=>wt.filter(c=>E.has(c._id||c.id)),[wt,E]),D=o.useMemo(()=>We.find(c=>(c._id||c.id)===xt)||null,[We,xt]),ae=o.useMemo(()=>le.find(c=>(c._id||c.id)===Y)||null,[le,Y]),Ht=c=>{at(c),bt(String(c))},ot=c=>{bt(c);const w=parseInt(c,10);!isNaN(w)&&w>0&&w<=8&&at(w)},Ne=o.useMemo(()=>{const c=[],w=parseInt(it,10)||2;for(let k=0;k<L.length;k+=w)c.push(L.slice(k,k+w));return c},[L,it]),we=c=>{It(w=>({...w,[c]:!w[c]}))},dt=()=>{if(L.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}window.print()};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Lt,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:G(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>zt("en"),className:`admit-lang-btn ${$==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>zt("bn"),className:`admit-lang-btn ${$==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>zt("bi"),className:`admit-lang-btn ${$==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:Wt,disabled:kt||!Y,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Ms,{size:15,className:kt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:dt,disabled:L.length===0,className:"admit-btn-print",children:[e.jsx(rt,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",L.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Oa,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:Ae.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(zn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:L.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Ot,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[it,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Lt,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[Ne.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Mt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:xt,onChange:c=>ht(c.target.value),className:"admit-select",children:We.map(c=>{const w=c._id||c.id||"",k=G(c.name||c.title,"Exam");return e.jsx("option",{value:w,children:k},w)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(As,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:Y,onChange:c=>Oe(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),le.map(c=>{const w=c._id||c.id||"",k=G(c.name||c.banglaName||c.code,"Class");return e.jsx("option",{value:w,children:k},w)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ot,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:re,onChange:c=>ve(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),tt.map((c,w)=>{const k=G(c,"");return e.jsx("option",{value:k,children:k},w)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(In,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:Te,onChange:c=>F(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ot,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(c=>e.jsx("button",{type:"button",onClick:()=>Ht(c.count),className:`admit-pill-btn ${it===c.count?"active":""}`,children:c.label},c.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Je,onChange:c=>ot(c.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(As,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:h,onChange:c=>Rt(c.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Xt,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Mt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:K,onChange:c=>St(c.target.value),className:"admit-date-input"})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>ft("preview"),className:`admit-tab-btn ${ut==="preview"?"active":""}`,children:[e.jsx($n,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[Ne.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>ft("students"),className:`admit-tab-btn ${ut==="students"?"active":""}`,children:[e.jsx(Oa,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[L.length,"/",Ae.length]})]}),e.jsxs("button",{type:"button",onClick:()=>ft("settings"),className:`admit-tab-btn ${ut==="settings"?"active":""}`,children:[e.jsx(Tn,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ut==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>Ct(Math.max(50,ge-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(An,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[ge,"%"]}),e.jsx("button",{type:"button",onClick:()=>Ct(Math.min(130,ge+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(_n,{size:14})}),e.jsx("button",{type:"button",onClick:()=>Ct(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ut==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:kt?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):Y?L.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${ge/100})`,transformOrigin:"top center"},children:Ne.map((c,w)=>e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",w+1," / ",Ne.length]}),e.jsxs("span",{children:["(এই পেজে ",c.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${it}`,children:c.map(k=>{var Ge,_e,Pe,Ce;const te=k._id||k.id,V=G(((Ge=k.user)==null?void 0:Ge.name)||k.name,"MD. STUDENT"),ke=G(((_e=k.currentEnrollment)==null?void 0:_e.rollNumber)||k.rollNumber||k.roll,"—"),Se=G(k.studentId||k.admissionNumber,"—"),U=G(((Pe=k.currentEnrollment)==null?void 0:Pe.section)||k.section||(re!=="all"?re:"—"),"—"),Xe=G(k.department||((Ce=k.currentEnrollment)==null?void 0:Ce.department)||k.stream,"All"),Ee=G(q[te]||h,"১০২"),P=k.photo||Hs,ce=G((D==null?void 0:D.name)||(D==null?void 0:D.title),"Annual Examination 2026"),Fe=G((ae==null?void 0:ae.name)||(ae==null?void 0:ae.banglaName)||(ae==null?void 0:ae.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[R.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:He=>{He.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:He=>{He.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:$==="bn"?G(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:$==="bn"?G(M.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:$==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),R.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:$==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Jt(K)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:V})]}),R.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Xe})]}),R.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Se})]}),R.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Ee})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ke})]}),R.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),R.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),R.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Fe})]}),R.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:U})]})]}),R.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:P,alt:"Photo"})})]}),R.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:$==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:ce})]}),e.jsxs("div",{className:"signatures-row",children:[R.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:$==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),R.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:$==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},te)})})]},w))})}):e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Lt,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র লাইভ তৈরি হয়ে প্রদর্শিত হবে।"})]})}),ut==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:yt,className:"admit-btn-select-all",children:E.size===Ae.length&&Ae.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Ja,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Xa,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",Ae.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:E.size})," / ",Ae.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(_s,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Qe,onChange:c=>gt(c.target.value),className:"admit-search-input"}),Qe&&e.jsx("button",{type:"button",onClick:()=>gt(""),className:"admit-search-clear",children:"✕"})]})]}),Ae.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:E.size===Ae.length&&Ae.length>0,onChange:yt,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:Ae.map(c=>{var P,ce,Fe,Ge;const w=c._id||c.id,k=E.has(w),te=G(((P=c.currentEnrollment)==null?void 0:P.rollNumber)||c.rollNumber||c.roll,"—"),V=G(((ce=c.user)==null?void 0:ce.name)||c.name,"—"),ke=G(c.studentId||c.admissionNumber,"—"),Se=G(((Fe=c.currentEnrollment)==null?void 0:Fe.section)||c.section||(re!=="all"?re:"—"),"—"),U=G(c.department||((Ge=c.currentEnrollment)==null?void 0:Ge.department)||c.stream,"সাধারণ"),Xe=G(q[w]||h,"১০২"),Ee=c.photo||Hs;return e.jsxs("tr",{className:k?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:k,onChange:()=>cs(w),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:te})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:Ee,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:ke}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:V}),e.jsx("td",{style:{color:"#475569"},children:U}),e.jsx("td",{style:{color:"#475569"},children:Se}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:Xe,onChange:_e=>{const Pe=_e.target.value;Be(Ce=>({...Ce,[w]:Pe}))},className:"admit-table-room-input"})})]},w)})})]})})]}),ut==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Qa,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(c=>{const w=R[c.key];return e.jsxs("button",{type:"button",onClick:()=>we(c.key),className:`admit-toggle-card ${w?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${w?"active":""}`,children:w&&e.jsx(jn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:c.label}),e.jsx("div",{className:"admit-toggle-desc",children:c.desc})]})]},c.key)})})]}),e.jsx("div",{className:"admit-print-only-container",children:L.length>0&&Ne.map((c,w)=>e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${it}`,children:c.map(k=>{var Ge,_e,Pe,Ce;const te=k._id||k.id,V=G(((Ge=k.user)==null?void 0:Ge.name)||k.name,"MD. STUDENT"),ke=G(((_e=k.currentEnrollment)==null?void 0:_e.rollNumber)||k.rollNumber||k.roll,"—"),Se=G(k.studentId||k.admissionNumber,"—"),U=G(((Pe=k.currentEnrollment)==null?void 0:Pe.section)||k.section||(re!=="all"?re:"—"),"—"),Xe=G(k.department||((Ce=k.currentEnrollment)==null?void 0:Ce.department)||k.stream,"All"),Ee=G(q[te]||h,"১০২"),P=k.photo||Hs,ce=G((D==null?void 0:D.name)||(D==null?void 0:D.title),"Annual Examination 2026"),Fe=G((ae==null?void 0:ae.name)||(ae==null?void 0:ae.banglaName)||(ae==null?void 0:ae.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[R.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:He=>{He.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:He=>{He.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:$==="bn"?G(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:$==="bn"?G(M.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:$==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),R.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:$==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Jt(K)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:V})]}),R.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Xe})]}),R.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Se})]}),R.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Ee})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ke})]}),R.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),R.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),R.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Fe})]}),R.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:$==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:U})]})]}),R.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:P,alt:"Photo"})})]}),R.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:$==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:ce})]}),e.jsxs("div",{className:"signatures-row",children:[R.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:$==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),R.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:$==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},`print-${te}`)})},`print-page-${w}`))}),e.jsx("style",{children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: #0f172a;
          font-family: inherit;
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
           EXACT @media print RULES (ZERO WEBSITE UI, ONLY CARDS ON A4)
           ============================================================== */
        @media print {
          @page {
            size: A4 portrait;
            margin: 4mm;
          }

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
            width: 100% !important;
            height: 288mm !important;
            min-height: unset !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .admit-card {
            box-shadow: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .admit-pill {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .room-badge {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `})]})}const En=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],Ys=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function Fn(I,je=!1){if(!I)return"—";const se=je?" (যৌথ)":"";return I===1?`🥇 ১ম স্থান${se}`:I===2?`🥈 ২য় স্থান${se}`:I===3?`🥉 ৩য় স্থান${se}`:I===4?`৪র্থ${se}`:I===5?`৫ম${se}`:I===6?`৬ষ্ঠ${se}`:I===7?`৭ম${se}`:I===8?`৮ম${se}`:I===9?`৯ম${se}`:I===10?`১০ম${se}`:`${I}তম${se}`}function ol({initialViewMode:I}){var sa,aa,na,la,ra,ia,oa,da,ca,pa,ma,xa,ha,ga,ua,fa,ba,ya,ja,va,Na,wa,ka,Sa,Ca,za,Ia,$a,Aa,_a,Ma,La,Ra,Wa,Ta;const je=vn(),se=Nn(),{user:M}=Va(),{madrasahName:ds,branchName:Re}=Us(M),{data:le=[],refetch:We}=qs(),{data:xt=[],refetch:ht}=Cn(),[Y,Oe]=o.useState([]),[re,ve]=o.useState(!0),[Te,F]=o.useState(null),[he,tt]=o.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[wt,st]=o.useState(!1),[kt,Bt]=o.useState(!1),[Qe,gt]=o.useState(null),[E,X]=o.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[q,Be]=o.useState([]),[h,Rt]=o.useState(null),[K,St]=o.useState([]),[ut,ft]=o.useState([]),[ge,Ct]=o.useState(""),[$,zt]=o.useState(""),[it,at]=o.useState(!1),[Je,bt]=o.useState([]),[R,It]=o.useState({}),[Gt,Wt]=o.useState(!1),[Xt,yt]=o.useState([]),cs=I==="routine"||(se==null?void 0:se.pathname)==="/exam-routine",Ae=I==="admit_card"||(se==null?void 0:se.pathname)==="/admit-card",[L,D]=o.useState(cs?"routine":Ae?"admit_card":"marks"),[ae,Ht]=o.useState(!1),[ot,Ne]=o.useState("all"),[we,dt]=o.useState([]),[c,w]=o.useState([]),[k,te]=o.useState(!1),[V,ke]=o.useState("landscape"),[Se,U]=o.useState(""),[Xe,Ee]=o.useState("all"),[P,ce]=o.useState(null),[Fe,Ge]=o.useState(!1),[_e,Pe]=o.useState([]),[Ce,He]=o.useState(""),[Yt,Tt]=o.useState("all"),[ct,Ns]=o.useState(""),[qt,Kt]=o.useState([]),[ps,p]=o.useState(!1),[C,N]=o.useState(new Set),[ie,pe]=o.useState(""),[ue,ze]=o.useState("all"),[fe,Ie]=o.useState(!1),[B,Me]=o.useState(null),[Le,Ye]=o.useState([]),[Et,jt]=o.useState(!1),[qe,Ut]=o.useState("all"),[Ft,ms]=o.useState("all"),[Pt,ws]=o.useState("all"),[ks,Vt]=o.useState(!1),[es,xs]=o.useState(!1),[ts,Ue]=o.useState(null),[Vs,Ls]=o.useState(null),[Ke,nt]=o.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),pt=(M==null?void 0:M.userType)==="guardian",Ss=(M==null?void 0:M.userType)==="student",ne=Ss||pt,[lt,Ka]=o.useState([]),[$t,Zs]=o.useState(""),[At,Rs]=o.useState(null);o.useEffect(()=>{if(Te){const t=setTimeout(()=>F(null),4e3);return()=>clearTimeout(t)}},[Te]);const Dt=async(t=null)=>{ve(!0);try{const s={},a=t||$t;pt&&a&&(s.studentId=a);const n=await O.get("/exams",{params:s});n.data.success&&Oe(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),F({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{ve(!1)}},en=t=>{var a,n;Zs(t);const s=lt.find(l=>l._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const l=s.currentEnrollment.classLevel,i=typeof l=="object"?l:{_id:l,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Rs(i),pe(i._id)}Dt(t),ne&&bs(!1,t)},hs=async t=>{if(!t){Be([]);return}try{const s=await O.get(`/students/subjects?classLevel=${t}`);s.data.success&&Be(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},tn=async()=>{try{return(await We()).data||le}catch(t){return console.error("Error fetching classes:",t),le}};o.useEffect(()=>{(async()=>{var s,a,n,l,i,d;if(pt)try{const r=await O.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const f=r.data.data;Ka(f),Zs(f[0]._id);const m=(a=f[0].currentEnrollment)==null?void 0:a.classLevel;if(m){const j=typeof m=="object"?m:{_id:m,name:((n=f[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Rs(j),pe(j._id)}Dt(f[0]._id)}else Dt()}catch(r){console.error("Error loading guardian children",r),Dt()}else if(Ss){try{const r=await O.get("/students",{params:{limit:1}});if(r.data.success&&((l=r.data.data)==null?void 0:l.length)>0){const f=r.data.data[0],m=(i=f.currentEnrollment)==null?void 0:i.classLevel;if(m){const j=typeof m=="object"?m:{_id:m,name:((d=f.currentEnrollment)==null?void 0:d.className)||"শ্রেণি"};Rs(j),pe(j._id)}}}catch(r){console.error("Error loading student profile for class",r)}Dt()}else Dt();tn(),fs()})(),ne&&bs()},[]),o.useEffect(()=>{L==="student_result"&&h&&_e.length===0&&ln(h),L==="subject_result"&&K.length>0&&!Ce&&(He(K[0]._id),zs(K[0]._id,Yt))},[L,h,K,_e.length]);const Cs=t=>{X({...E,[t.target.name]:t.target.value})},sn=async t=>{var l;gt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(i=>typeof i=="object"?i._id:i):[],n=((l=t.classLevel)==null?void 0:l._id)||"";X({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&hs(n),st(!0)},an=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await O.delete(`/exams/${t}`)).data.success&&(F({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Dt())}catch(n){console.error("Failed to delete exam",n);const l=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";F({type:"error",message:l})}},nn=async t=>{var s,a,n,l;if(t.preventDefault(),E.examCategory==="monthly_test"&&((s=E.selectedSubjects)==null?void 0:s.length)!==4){F({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=E.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}Bt(!0);try{let i;Qe?i=await O.patch(`/exams/${Qe}`,E):i=await O.post("/exams",E),i.data.success&&(st(!1),gt(null),X({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),F({type:"success",message:Qe?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Dt())}catch(i){console.error("Failed to submit exam",i);const d=((l=(n=i.response)==null?void 0:n.data)==null?void 0:l.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";F({type:"error",message:d})}finally{Bt(!1)}},Qs=async t=>{var a,n,l,i,d,r,f,m,j,g,x,v;if(Rt(t),Ct(""),zt(""),bt([]),It({}),yt([]),ce(null),U(""),Ee("all"),He(""),Tt("all"),Ns(""),Kt([]),N(new Set),ne){at(!0);try{const b={examId:t._id};pt&&$t&&(b.studentId=$t);const _=await O.get("/exams/student-results",{params:b});if((a=_.data)!=null&&a.success&&_.data.data){ce(_.data.data);const z=(n=_.data.data.results)==null?void 0:n[0];yt((z==null?void 0:z.subjects)||[])}else{const z=await O.get("/exams/marks",{params:{exam:t._id,...pt&&$t?{student:$t}:{}}});yt(((i=(l=z.data)==null?void 0:l.data)==null?void 0:i.marks)||[])}}catch(b){console.error("Failed to load student detailed results",b);try{const _=await O.get("/exams/marks",{params:{exam:t._id,...pt&&$t?{student:$t}:{}}});yt(((r=(d=_.data)==null?void 0:d.data)==null?void 0:r.marks)||[])}catch{}}finally{at(!1)}return}const s=((f=t.classLevel)==null?void 0:f._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const b=await O.get(`/students/subjects?classLevel=${s}`);if(b.data.success){let z=b.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const W=t.selectedSubjects.map(H=>String(typeof H=="object"?H._id:H));z=z.filter(H=>W.includes(String(H._id)))}St(z)}try{let z=Ga(xt,s);if(!z||z.length===0){const W=await ht();z=Ga(W.data||[],s)}if(!z||z.length===0){const W=await O.get(`/students/sections?classLevel=${s}`);(m=W.data)!=null&&m.success&&(z=((j=W.data.data)==null?void 0:j.sections)||[])}ft(z||[])}catch{try{const W=await O.get(`/students/sections?classLevel=${s}`);(g=W.data)!=null&&g.success&&ft(((x=W.data.data)==null?void 0:x.sections)||[])}catch(W){console.warn("Failed to fetch sections for mark entry fallback:",W),ft([])}}const _=await O.get("/students",{params:{classLevel:s,limit:300}});if(_.data.success){const z=_.data.data;let W=Array.isArray(z)?z:(z==null?void 0:z.students)||[];if(W.length===0){const J=(v=(await O.get("/students",{params:{limit:500}})).data)==null?void 0:v.data;W=Array.isArray(J)?J:(J==null?void 0:J.students)||[]}W.sort((H,J)=>{var me,Z;return Ze(((me=H.currentEnrollment)==null?void 0:me.rollNumber)||H.roll)-Ze(((Z=J.currentEnrollment)==null?void 0:Z.rollNumber)||J.roll)}),Pe(W)}}catch(b){console.error("Failed to fetch subjects/sections for mark entry",b)}},ln=async t=>{var n,l,i;const s=t||h;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const d={limit:300};a&&(d.classLevel=a);const r=await O.get("/students",{params:d});if((l=r.data)!=null&&l.success){const f=r.data.data;let m=Array.isArray(f)?f:(f==null?void 0:f.students)||[];if(m.length===0&&a){const g=(i=(await O.get("/students",{params:{limit:500}})).data)==null?void 0:i.data;m=Array.isArray(g)?g:(g==null?void 0:g.students)||[]}m.sort((j,g)=>{var x,v;return Ze(((x=j.currentEnrollment)==null?void 0:x.rollNumber)||j.roll)-Ze(((v=g.currentEnrollment)==null?void 0:v.rollNumber)||g.roll)}),Pe(m)}}catch(d){console.warn("Failed to load class students:",d)}},Ws=async t=>{var n,l;const a=Qt(t||Se);if(!a||!String(a).trim()){F({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Ge(!0),ce(null);try{const i=await O.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:h==null?void 0:h._id}});i.data.success&&ce(i.data.data)}catch(i){console.error("Failed to load student result",i);const d=((l=(n=i.response)==null?void 0:n.data)==null?void 0:l.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";F({type:"error",message:d})}finally{Ge(!1)}},zs=async(t,s)=>{const a=t!==void 0?t:Ce,n=s!==void 0?s:Yt;if(!a){F({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}p(!0);try{const l={exam:h==null?void 0:h._id,subject:a},i=await O.get("/exams/marks",{params:l});if(i.data.success){let d=i.data.data.marks||[];n&&n!=="all"&&(d=d.filter(f=>{var g,x,v,b;const m=(g=f.student)==null?void 0:g.currentEnrollment,j=typeof(m==null?void 0:m.section)=="object"?((x=m==null?void 0:m.section)==null?void 0:x.name)||((v=m==null?void 0:m.section)==null?void 0:v._id):(m==null?void 0:m.section)||((b=f.student)==null?void 0:b.section);return String(j||"")===String(n)})),Kt(d);const r=new Set(d.map(f=>{var m;return String(((m=f.student)==null?void 0:m._id)||f._id)}));if(N(r),K.length===0&&d.length>0){const f={};d.forEach(j=>{j.subject&&typeof j.subject=="object"&&j.subject._id&&(f[j.subject._id]=j.subject)});const m=Object.values(f);m.length>0&&St(m)}}}catch(l){console.error("Failed to load subject marks",l),F({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{p(!1)}},Js=t=>{const s=t.map(l=>{var i;return String(((i=l.student)==null?void 0:i._id)||l._id)}),a=s.length>0&&s.every(l=>C.has(l)),n=new Set(C);a?s.forEach(l=>n.delete(l)):s.forEach(l=>n.add(l)),N(n)},rn=t=>{const s=new Set(C),a=String(t);s.has(a)?s.delete(a):s.add(a),N(s)},Ts=()=>{var f;if(!P||!P.results||P.results.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=P.student||{},s=P.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",l=t.department||"";let i="—";n&&l?i=`${n} (${l})`:n?i=n:l&&(i=l);const d=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${t.name||""}</title>
  ${ls("portrait")}
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
      ${rs({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(h==null?void 0:h.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((f=h==null?void 0:h.classLevel)==null?void 0:f.name)||"—"}</div>
          <div><strong>রোল নম্বর:</strong> ${t.rollNumber||"—"}</div>
          <div><strong>শাখা / বিভাগ:</strong> ${i}</div>
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
          ${(s.subjects||[]).map((m,j)=>`
            <tr>
              <td class="text-center">${j+1}</td>
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

      ${is(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(d),r.document.close())},Xs=t=>{var l,i,d,r,f,m,j;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((l=h==null?void 0:h.classLevel)==null?void 0:l.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ts,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((g,x)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:x+1}),e.jsx("td",{className:"font-semibold",children:g.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:g.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:g.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:g.marksObtained!==null&&typeof g.marksObtained=="object"?g.marksObtained.marksObtained:g.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[g.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(g.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:g.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(g.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${g.isPassed?"badge-active":"badge-danger"}`,children:g.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},g.markId||x))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((i=n.term1)==null?void 0:i.obtained)||0," / ",((d=n.term1)==null?void 0:d.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((f=n.term2)==null?void 0:f.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((m=n.term3)==null?void 0:m.obtained)||0," / ",((j=n.term3)==null?void 0:j.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},Ks=t=>{var g;const s=(t||qt).filter(x=>{var v;return C.has(String(((v=x.student)==null?void 0:v._id)||x._id))});if(s.length===0){F({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=K.find(x=>x._id===Ce),n=(a==null?void 0:a.name)||"বিষয়",l=Number(a==null?void 0:a.totalMarks)||100,i=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),d=s.length,r=s.filter(x=>{const v=Number(x.marksObtained)||0;return(l>0?v/l*100:v)>=33}).length,f=d>0?Math.round(r/d*100):0,m=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${n}</title>
  ${ls("portrait")}
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
      ${rs({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((g=h==null?void 0:h.classLevel)==null?void 0:g.name)||"")+" | <strong>পূর্ণমান:</strong> "+l+" | <strong>পরীক্ষা:</strong> "+((h==null?void 0:h.name)||""),metaRight:"<strong>তারিখ:</strong> "+i})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${d} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${d-r} জন</div>
        <div><strong>পাসের হার:</strong> ${f}%</div>
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
          ${s.map((x,v)=>{var oe,De,y,u,T,A,Q,S,xe,de,be,ye,vt,mt,$e,Ve,Nt,Ea,Fa,Pa,Da;const b=Number(x.marksObtained)||0,_=l>0?Math.round(b/l*100):b,z=_t(b,l),W=_>=33,H=((oe=x.student)==null?void 0:oe.fullName)||((y=(De=x.student)==null?void 0:De.user)==null?void 0:y.fullName)||`${((T=(u=x.student)==null?void 0:u.user)==null?void 0:T.firstName)||""} ${((Q=(A=x.student)==null?void 0:A.user)==null?void 0:Q.lastName)||""}`.trim()||"—",J=((xe=(S=x.student)==null?void 0:S.currentEnrollment)==null?void 0:xe.rollNumber)||((de=x.student)==null?void 0:de.roll)||"—",me=((be=x.student)==null?void 0:be.studentId)||"—",Z=typeof((vt=(ye=x.student)==null?void 0:ye.currentEnrollment)==null?void 0:vt.section)=="object"?((Ve=($e=(mt=x.student)==null?void 0:mt.currentEnrollment)==null?void 0:$e.section)==null?void 0:Ve.name)||((Fa=(Ea=(Nt=x.student)==null?void 0:Nt.currentEnrollment)==null?void 0:Ea.section)==null?void 0:Fa._id):((Da=(Pa=x.student)==null?void 0:Pa.currentEnrollment)==null?void 0:Da.section)||"—";return`
              <tr>
                <td class="text-center">${v+1}</td>
                <td class="text-center font-bold">${J}</td>
                <td class="font-bold">${H}</td>
                <td class="text-center">${me}</td>
                <td class="text-center">${Z}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${b} / ${l}</td>
                <td class="text-center font-bold">${_}%</td>
                <td class="text-center font-bold">${z}</td>
                <td class="text-center font-bold" style="color: ${W?"#059669":"#dc2626"};">${W?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${is(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,j=window.open("","_blank");j&&(j.document.write(m),j.document.close())},Es=()=>{var x;if(!Je||Je.length===0){F({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=K.find(v=>v._id===ge),s=ge==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,l=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),i=$==="all"?"সকল সেকশন":`সেকশন ${$}`,d=Je.filter(v=>{const b=R[v._id];return b!==void 0&&b!==""&&!isNaN(b)}).length,r=Je.filter(v=>{const b=R[v._id];return b===void 0||b===""||isNaN(b)?!1:(n>0?Number(b)/n*100:Number(b))>=33}).length,f=d>0?Math.round(r/d*100):0,m=[...Je].sort((v,b)=>{var _,z;return Ze(((_=v.currentEnrollment)==null?void 0:_.rollNumber)||v.roll)-Ze(((z=b.currentEnrollment)==null?void 0:z.rollNumber)||b.roll)}),j=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(h==null?void 0:h.name)||""})</title>
  ${ls("portrait")}
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
      ${rs({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((h==null?void 0:h.name)||"")+" | <strong>শ্রেণি:</strong> "+(((x=h==null?void 0:h.classLevel)==null?void 0:x.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+i,metaRight:"<strong>তারিখ:</strong> "+l})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Je.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${d} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Je.length-r} জন</div>
          <div><strong>পাসের হার:</strong> ${f}%</div>
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
          ${m.map((v,b)=>{var T,A,Q,S,xe,de,be,ye,vt,mt;const _=v._id,z=((T=v.currentEnrollment)==null?void 0:T.rollNumber)||v.roll||"—",W=((A=v.user)==null?void 0:A.fullName)||`${((Q=v.user)==null?void 0:Q.firstName)||""} ${((S=v.user)==null?void 0:S.lastName)||""}`.trim()||"—",H=v.studentId||"—",J=typeof((xe=v.currentEnrollment)==null?void 0:xe.section)=="object"?((be=(de=v.currentEnrollment)==null?void 0:de.section)==null?void 0:be.name)||((vt=(ye=v.currentEnrollment)==null?void 0:ye.section)==null?void 0:vt._id):((mt=v.currentEnrollment)==null?void 0:mt.section)||v.section||$;if(s){const $e=Array.isArray(R[_])?R[_]:[],Ve=$e.length>0?$e.map(Nt=>Nt.subjectName+": "+Nt.marksObtained+" ("+Nt.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${b+1}</td>
                  <td class="text-center font-bold">${z}</td>
                  <td class="font-bold">${W}</td>
                  <td class="text-center">${H}</td>
                  <td class="text-center">${J}</td>
                  <td style="font-size: 10px;">${Ve}</td>
                </tr>
              `}const me=R[_],Z=me!==void 0&&me!==""&&!isNaN(me),oe=Z?Number(me):null,De=Z?n>0?Math.round(oe/n*100):oe:null,y=Z?_t(oe,n):"—",u=Z?De>=33:!1;return`
              <tr>
                <td class="text-center">${b+1}</td>
                <td class="text-center font-bold">${z}</td>
                <td class="font-bold">${W}</td>
                <td class="text-center">${H}</td>
                <td class="text-center">${J}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${Z?oe+" / "+n:"—"}</td>
                <td class="text-center font-bold">${Z?De+"%":"—"}</td>
                <td class="text-center font-bold">${y}</td>
                <td class="text-center font-bold" style="color: ${Z?u?"#059669":"#dc2626":"#64748b"};">
                  ${Z?u?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${is(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,g=window.open("","_blank");g&&(g.document.write(j),g.document.close())},on=async()=>{if(!ge||!$){F({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}at(!0);try{const t={classLevel:h.classLevel._id,limit:100};$!=="all"&&(t.section=$);const a=(await O.get("/students",{params:t})).data.data||[];a.sort((d,r)=>{var j,g;const f=Ze(((j=d.currentEnrollment)==null?void 0:j.rollNumber)||d.roll),m=Ze(((g=r.currentEnrollment)==null?void 0:g.rollNumber)||r.roll);return f-m}),bt(a);const n={exam:h._id};ge!=="all"&&(n.subject=ge);const i=(await O.get("/exams/marks",{params:n})).data.data.marks||[];if(ge==="all"){const d={};a.forEach(r=>{d[r._id]=[]}),i.forEach(r=>{var m,j;const f=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;f&&d[f]&&d[f].push({subjectName:((j=r.subject)==null?void 0:j.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),It(d)}else{const d={};a.forEach(r=>{d[r._id]=""}),i.forEach(r=>{var m;const f=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;f&&(d[f]=r.marksObtained??"")}),It(d)}}catch(t){console.error("Failed to load students for marks entry",t),F({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{at(!1)}},gs=async(t=ot,s=h)=>{var l,i,d,r,f,m,j,g;const a=s||h;if(!a)return;const n=((l=a.classLevel)==null?void 0:l._id)||(typeof a.classLevel=="string"?a.classLevel:null);Ht(!0);try{if(ne){const y=await O.get(`/exams/${a._id}/rankings`);if(y.data.success&&y.data.data){const{rankings:u=[],evaluatedSubjects:T=[]}=y.data.data;w(T);const Q=(t&&t!=="all"?u.filter(S=>String(S.section||"")===String(t)):u).map((S,xe)=>{const de={_id:S.studentId,studentId:S.studentCode||S.studentId,user:{fullName:S.name,firstName:S.name},currentEnrollment:{rollNumber:S.rollNumber,section:S.section}},be={};S.subjectMarks&&Object.keys(S.subjectMarks).forEach(mt=>{const $e=S.subjectMarks[mt],Ve=$e!==null&&typeof $e=="object"?$e.marksObtained:$e,Nt=$e!==null&&typeof $e=="object"&&$e.grade||_t(Ve);be[mt]={marksObtained:Ve!=null&&typeof Ve!="object"?Ve:"",grade:Nt||""}});const ye=S.isPassed!==void 0?S.isPassed:S.grade!=="F"&&!S.isIncomplete,vt=S.gpa||(ye&&S.percentage>=33?S.percentage>=80?"5.00":S.percentage>=70?"4.00":S.percentage>=60?"3.50":S.percentage>=50?"3.00":S.percentage>=40?"2.00":"1.00":"0.00");return{student:de,studentMarksObj:be,totalObtained:S.totalObtained,totalFullMarks:S.totalMaxMarks,percentage:S.percentage,overallGrade:S.grade,gpa:vt,isPassed:ye,subjectsCountWithMarks:Object.keys(be).length,rankNum:S.rank||xe+1,rankText:Fn(S.rank||xe+1),roll:Ze(S.rollNumber)}});dt(Q);return}}const v=((d=(i=(await O.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:i.data)==null?void 0:d.marks)||[];let b=[];if(n)try{b=((f=(r=(await O.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:f.subjects)||[]}catch(y){console.warn("Subject fetch warning:",y)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const y=a.selectedSubjects.map(u=>String(typeof u=="object"?u._id:u));b=b.filter(u=>y.includes(String(u._id)))}let _=b.filter(y=>v.some(u=>{var A,Q;const T=typeof u.subject=="object"?((A=u.subject)==null?void 0:A._id)||((Q=u.subject)==null?void 0:Q.id):u.subject;return String(T)===String(y._id)&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""}));if(_.length===0&&v.length>0){const y={};v.forEach(u=>{var A,Q;const T=typeof u.subject=="object"?((A=u.subject)==null?void 0:A._id)||((Q=u.subject)==null?void 0:Q.id):u.subject;if(T&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""){const S=typeof u.subject=="object"?u.subject.name||u.subject.code:"বিষয়",xe=typeof u.subject=="object"?u.subject.code:"",de=typeof u.subject=="object"?u.subject.totalMarks||u.totalMarks||100:u.totalMarks||100;y[String(T)]={_id:String(T),name:S,code:xe,totalMarks:Number(de)||100}}}),_=Object.values(y)}_.length===0&&b.length>0&&(_=b),w(_);const z=_.reduce((y,u)=>y+(Number(u.totalMarks)||100),0);let W=[];if(n)try{const y={classLevel:n,limit:300};t&&t!=="all"&&(y.section=t),W=((m=(await O.get("/students",{params:y})).data)==null?void 0:m.data)||[]}catch(y){console.warn("Students fetch warning:",y)}if(W.length===0){const y={};v.forEach(u=>{u.student&&typeof u.student=="object"&&u.student._id&&(y[u.student._id]=u.student)}),W=Object.values(y)}const H={};v.forEach(y=>{var S,xe,de,be;const u=typeof y.student=="object"?((S=y.student)==null?void 0:S._id)||((xe=y.student)==null?void 0:xe.id):y.student,T=typeof y.subject=="object"?((de=y.subject)==null?void 0:de._id)||((be=y.subject)==null?void 0:be.id):y.subject;if(!u||!T)return;const A=String(u),Q=String(T);H[A]||(H[A]={}),H[A][Q]={marksObtained:y.marksObtained,grade:y.grade}});const J=W.map(y=>{var vt;const u=H[y._id]||{};let T=0,A=0,Q=0;_.forEach(mt=>{const $e=u[mt._id];if($e&&$e.marksObtained!==null&&$e.marksObtained!==void 0&&$e.marksObtained!==""){const Ve=Number($e.marksObtained);T+=Ve,A+=1;const Nt=Number(mt.totalMarks)||100;Ve<Nt*.33&&(Q+=1)}});const S=z>0?Number((T/z*100).toFixed(1)):0,xe=_.length>0&&A>0&&A<_.length,de=A>0&&Q===0&&!xe,be=de?_t(S):Q>0?"F":xe?_t(S):A>0?"F":"—";let ye="—";return A>0&&(!de||S<33?ye="0.00":S>=80?ye="5.00":S>=70?ye="4.00":S>=60?ye="3.50":S>=50?ye="3.00":S>=40?ye="2.00":ye="1.00"),{student:y,studentMarksObj:u,totalObtained:T,totalFullMarks:z,subjectsCountWithMarks:A,failedCount:Q,isIncomplete:xe,percentage:S,isPassed:de,overallGrade:be,gpa:ye,roll:Ze(((vt=y.currentEnrollment)==null?void 0:vt.rollNumber)||y.roll)}});J.sort((y,u)=>y.subjectsCountWithMarks===0&&u.subjectsCountWithMarks===0?y.roll-u.roll:y.subjectsCountWithMarks===0?1:u.subjectsCountWithMarks===0||y.failedCount===0&&u.failedCount>0?-1:y.failedCount>0&&u.failedCount===0?1:u.totalObtained!==y.totalObtained?u.totalObtained-y.totalObtained:y.roll-u.roll);let me=1,Z=null,oe=0;const De=J.map(y=>{if(y.subjectsCountWithMarks===0)return{...y,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};oe+=1,Z!==null&&y.totalObtained===Z||(me=oe,Z=y.totalObtained);const u=me,T=J.filter(Q=>Q.subjectsCountWithMarks>0&&Q.totalObtained===y.totalObtained).length>1;let A="";return u===1?A=T?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":u===2?A=T?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":u===3?A=T?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":u===4?A=T?"৪র্থ (যৌথ)":"৪র্থ":u===5?A=T?"৫ম (যৌথ)":"৫ম":u===6?A=T?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":u===7?A=T?"৭ম (যৌথ)":"৭ম":u===8?A=T?"৮ম (যৌথ)":"৮ম":u===9?A=T?"৯ম (যৌথ)":"৯ম":u===10?A=T?"১০ম (যৌথ)":"১০ম":A=T?`${u}তম (যৌথ)`:`${u}তম`,y.failedCount>0?A+=" (অনুত্তীর্ণ)":y.isIncomplete&&(A+=" (অসম্পূর্ণ)"),{...y,rankNum:u,rankText:A}});dt(De)}catch(x){console.error("Error loading merit list:",x);const v=((g=(j=x.response)==null?void 0:j.data)==null?void 0:g.message)||x.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";F({type:"error",message:v})}finally{Ht(!1)}},us=async(t,s="all")=>{var a,n;if(t){Ie(!0);try{const l={classLevel:t};s&&s!=="all"&&(l.section=s);const i=await O.get("/exams/annual-rankings",{params:l});i.data.success&&Me(i.data.data)}catch(l){console.error("Failed to load annual rankings",l),F({type:"error",message:((n=(a=l.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{Ie(!1)}}},dn=()=>{var n,l,i;if(!B||!B.rankings||B.rankings.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=B.classLevel)==null?void 0:n.name)||""}</title>
  ${ls("landscape")}
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
      ${rs({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((l=B.classLevel)==null?void 0:l.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((i=B.classLevel)==null?void 0:i.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${B.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${B.rankings.map((d,r)=>`
            <tr>
              <td class="text-center font-bold" style="color: ${r===0?"#b45309":r===1?"#0369a1":r===2?"#b45309":"#0f172a"};">${d.rankText}</td>
              <td class="text-center font-bold">${d.rollNumber||"—"}</td>
              <td class="font-bold">${d.name}</td>
              <td class="text-center">${d.studentCode}</td>
              <td class="text-center">${d.term1Obtained} / ${d.term1Max}</td>
              <td class="text-center">${d.term2Obtained} / ${d.term2Max}</td>
              <td class="text-center">${d.term3Obtained} / ${d.term3Max}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${d.grandTotalObtained} / ${d.grandTotalMaxMarks}</td>
              <td class="text-center font-bold">${d.overallPercentage}%</td>
              <td class="text-center font-bold">${d.overallGrade}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      ${is(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ss=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},fs=async(t=qe,s=Ft,a=Pt,n=!1)=>{var l,i;jt(!0);try{const d={};t&&t!=="all"&&(d.stream=t),s&&s!=="all"&&(d.exam=s),a&&a!=="all"&&(d.classLevel=a);const r=await O.get("/exams/routines",{params:d});r.data.success&&Ye(r.data.data.routines||[])}catch(d){console.error("Failed to load routines",d),n&&F({type:"error",message:((i=(l=d.response)==null?void 0:l.data)==null?void 0:i.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{jt(!1)}},bs=async(t=!1,s=null)=>{jt(!0);try{const a={},n=s||$t;pt&&n&&(a.studentId=n);const l=await O.get("/exams/student-routine",{params:a});l.data.success&&(Ls(l.data.data),Ye(l.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{jt(!1)}},Fs=(t=null)=>{var a,n,l,i,d,r;const s=(t==null?void 0:t.classLevel)||((a=h==null?void 0:h.classLevel)==null?void 0:a._id)||((n=le[0])==null?void 0:n._id)||"";s&&hs(s),t?(Ue(t._id),nt({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(Ue(null),nt({title:h?`${h.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(h==null?void 0:h._id)||((l=Y[0])==null?void 0:l._id)||"",examName:(h==null?void 0:h.name)||((i=Y[0])==null?void 0:i.name)||"",classLevel:s,className:((d=h==null?void 0:h.classLevel)==null?void 0:d.name)||((r=le[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),Vt(!0)},cn=()=>{if(!q||q.length===0){F({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=q.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));nt(s=>({...s,schedule:t})),F({type:"success",message:`${q.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},pn=async t=>{var s,a;if(t&&t.preventDefault(),!Ke.title.trim()){F({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}xs(!0);try{const n={...Ke,_id:ts},l=await O.post("/exams/routines",n);l.data.success&&(F({type:"success",message:l.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),Vt(!1),fs())}catch(n){console.error("Failed to save routine",n),F({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{xs(!1)}},mn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await O.delete(`/exams/routines/${t}`)).data.success&&(F({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),Ye(l=>l.filter(i=>i._id!==t)))}catch(n){console.error("Failed to delete routine",n),F({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},xn=()=>{nt(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},ea=t=>{nt(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},ee=(t,s,a)=>{nt(n=>{const l=[...n.schedule],i={...l[t],[s]:a};if(s==="date"&&(i.day=ss(a)),s==="subject"){const d=q&&q.find(r=>r._id===a)||K.find(r=>r._id===a);d?(i.subject=d._id,i.subjectName=d.name,i.totalMarks=Number(d.totalMarks)||100):(i.subject=a,i.subjectName=a)}return l[t]=i,{...n,schedule:l}})},hn=t=>{if(!t||!t.schedule||t.schedule.length===0){F({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),l=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${t.title||"পরীক্ষার রুটিন"} - ${t.className||""}</title>
  ${ls("portrait")}
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
      ${rs({title:"",orientation:"portrait",metaLeft:`<strong>বিভাগ:</strong> ${a} ${t.className?`| <strong>শ্রেণি:</strong> ${t.className}`:""}`,metaRight:`<strong>তারিখ:</strong> ${n}`})}

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
          ${t.schedule.map((i,d)=>`
            <tr>
              <td class="text-center font-bold" style="color: #0f766e;">${et(d+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${Jt(i.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${i.day||ss(i.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${i.subjectName||i.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${et(i.totalMarks||100)}</td>
              <td class="text-center" style="font-weight: 700; font-size: 10.5px; color: #1e293b;">
                ${i.startTime||"—"} থেকে ${i.endTime||"—"}
              </td>
              <td class="text-center">
                <span style="font-weight: 700; background: #e2e8f0; padding: 2.5px 8px; border-radius: 4px; font-size: 10px;">${i.roomNo||"১০১"}</span>
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

      ${is(["শ্রেণি শিক্ষক / হল সুপার","পরীক্ষা নিয়ন্ত্রক","প্রতিষ্ঠান প্রধান / পরিচালক"])}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;s.document.open(),s.document.write(l),s.document.close()},gn=(t=V,s=he)=>{var g;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(h==null?void 0:h.name)||"পরীক্ষা",l=((g=h==null?void 0:h.classLevel)==null?void 0:g.name)||"সকল শ্রেণি",i=ot==="all"?"সকল সেকশন":`সেকশন ${ot}`,d=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let f="";we.forEach((x,v)=>{var Z,oe,De,y;const b=x.student,_=((Z=b.currentEnrollment)==null?void 0:Z.rollNumber)||b.roll||"—",z=((oe=b.user)==null?void 0:oe.fullName)||`${((De=b.user)==null?void 0:De.firstName)||""} ${((y=b.user)==null?void 0:y.lastName)||""}`.trim()||b.studentId||"—",W=b.studentId||"—",H=x.rankNum===1?"#fef3c7":x.rankNum===2?"#f1f5f9":x.rankNum===3?"#ffedd5":"transparent",J=x.rankNum===1?"🥇 ":x.rankNum===2?"🥈 ":x.rankNum===3?"🥉 ":"",me=c.map(u=>{var de,be;const T=(be=(de=x.studentMarksObj)==null?void 0:de[String(u._id)])==null?void 0:be.marksObtained,A=T!==null&&typeof T=="object"?T.marksObtained??"":T??"",Q=A!=null&&A!=="",S=Number(u.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${Q&&Number(A)<S*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${Q?A:"—"}</td>`}).join("");f+=`
        <tr style="background-color: ${H};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${et(v+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${z}</div>
            <div class="student-meta-text">আইডি: ${W}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${_}</td>
          ${me}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${x.subjectsCountWithMarks===0?"—":`${x.totalObtained} / ${x.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${J}${x.rankText||"—"}</td>
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
      `});const m=c.map(x=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${x.name}</div>
        <div class="sub-mark-box">(${x.totalMarks||100})</div>
      </th>
    `).join(""),j=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${ls(t)}
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
          ${rs({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${l} | <strong>সেকশন:</strong> ${i}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${we.length} জন | <strong>তারিখ:</strong> ${d}`})}
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
            ${f}
          </tbody>
        </table>

        <!-- Footer Signatures -->
        <div class="footer-wrap" style="width: 100%; padding-top: 14px; page-break-inside: avoid; break-inside: avoid;">
          ${is(s)}
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
    </html>`;a.document.open(),a.document.write(j),a.document.close()},un=(t,s)=>{It(a=>({...a,[t]:s}))},_t=(t,s=100)=>{const a=Qt(t),n=parseFloat(a);if(isNaN(n))return"—";const l=Number(s)||100,i=l>0?n/l*100:n;return i>=80?"A+":i>=70?"A":i>=60?"A-":i>=50?"B":i>=40?"C":i>=33?"D":"F"},as=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",fn=async()=>{const t=K.find(l=>l._id===ge),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(R).map(l=>{const i=R[l],d=Qt(i);return{studentId:l,marksObtained:d===""?null:parseFloat(d)}});if(a.length===0){F({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(l=>l.marksObtained!==null&&l.marksObtained>s)){F({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}Wt(!0);try{const l={exam:h._id,subject:ge,marks:a};(await O.post("/exams/marks",l)).data.success&&F({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(l){console.error("Failed to save marks",l),F({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Wt(!1)}},bn=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},yn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Ps=()=>{st(!1),gt(null),X({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),Be([])},ta=(t=!1)=>{var n,l,i,d;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(M==null?void 0:M.userType)||((l=(n=M==null?void 0:M.permissions)==null?void 0:n.includes)==null?void 0:l.call(n,"academic.manage"))||((d=(i=M==null?void 0:M.permissions)==null?void 0:i.includes)==null?void 0:d.call(i,"exam.manage")),a=Le.filter(r=>{if(t&&h){if(r.exam&&r.exam!==h._id)return!1}else if(Ft!=="all"&&r.exam!==Ft)return!1;return!(qe!=="all"&&r.stream!==qe||Pt!=="all"&&r.classLevel!==Pt)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{D("marks"),Rt(null)},title:"ফিরে যান",children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Mt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&h?`পরীক্ষার রুটিন — ${h.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:ne?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{ne?bs(!0):fs(qe,Ft,Pt,!0)},disabled:Et,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Ds,{size:14,className:Et?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Fs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(os,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি"})]})]})]}),!ne&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${qe==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ut("all"),children:["সকল বিভাগ (",Le.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${qe==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ut("noorani"),children:["📖 নূরানী বিভাগ (",Le.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${qe==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ut("hifz"),children:["🕌 হিফজ বিভাগ (",Le.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${qe==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ut("kitab"),children:["📚 কিতাব বিভাগ (",Le.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:Ft,onChange:r=>ms(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),Y.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Pt,onChange:r=>ws(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),le.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),Et?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Mt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:ne?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Fs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(os,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{const f=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:f.bg,color:f.color,border:`1px solid ${f.border}`},children:f.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>hn(r),style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(rt,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Fs(r),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Os,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>mn(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx($s,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,j)=>e.jsxs("tr",{style:{background:j%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:et(j+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Mt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:Jt(m.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:m.day||ss(m.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:m.subjectName||m.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[et(m.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ba,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ha,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})})]},j)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,j)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:et(j+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:Jt(m.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",m.day||ss(m.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Ha,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:m.subjectName||m.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[et(m.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ba,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})]},j)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[Te&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:Te.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[Te.type==="success"?e.jsx(wn,{size:18}):e.jsx(vs,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:Te.message})]}),h?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:ds}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",h.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((sa=h.classLevel)==null?void 0:sa.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Rt(null),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:ne?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",Re," • ",h.name," • ",((aa=h.classLevel)==null?void 0:aa.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{ne||L==="student_result"?Ts():L==="subject_result"?Ks():L==="merit"||L==="merit_list"?te(!0):Es()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," ",ne?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Rn,{selectedRoles:he,onChange:t=>{tt(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(Mn,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${h.name}`,metaLeft:`শ্রেণি: ${((na=h.classLevel)==null?void 0:na.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),ne&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>D("student_result"),children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{D("merit"),gs(ot)},children:[e.jsx(Zt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{D("routine"),bs()},children:[e.jsx(Mt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!ne&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>D("marks"),children:[e.jsx(Os,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>D("student_result"),children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{D("subject_result"),!Ce&&K.length>0&&(He(K[0]._id),zs(K[0]._id,Yt))},children:[e.jsx(Is,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{D("merit"),we.length===0&&gs(ot)},children:[e.jsx(Zt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{D("routine"),ms((h==null?void 0:h._id)||"all"),fs("all",(h==null?void 0:h._id)||"all","all")},children:[e.jsx(Mt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>D("seat_plan"),children:[e.jsx(Ot,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${L==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>D("admit_card"),children:[e.jsx(Lt,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),L==="marks"&&e.jsxs(e.Fragment,{children:[!ne&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:ge,onChange:t=>{Ct(t.target.value),bt([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),K.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:$,onChange:t=>{zt(t.target.value),bt([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:on,disabled:it||!ge||!$||K.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(_s,{size:16})," লোড করুন"]})]}),K.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(vs,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),it?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ne?P&&((la=P.results)==null?void 0:la.length)>0?Xs(P):Xt.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(M==null?void 0:M.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Xt.map(t=>{var l,i,d;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=_t(a);return e.jsxs("tr",{children:[(M==null?void 0:M.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(l=t.student)==null?void 0:l.firstName," ",(i=t.student)==null?void 0:i.lastName]})}),e.jsx("td",{className:"font-semibold",children:(d=t.subject)==null?void 0:d.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Je.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Je.map((t,s)=>{var m,j,g,x;const a=t._id,n=((m=t.currentEnrollment)==null?void 0:m.rollNumber)||"—",l=((j=t.user)==null?void 0:j.fullName)||`${((g=t.user)==null?void 0:g.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim();if(ge==="all"){const v=Array.isArray(R[a])?R[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:et(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:v.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:v.map((b,_)=>{var z;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[b.subjectName,": ",typeof b.marksObtained=="object"?(z=b.marksObtained)==null?void 0:z.marksObtained:b.marksObtained," (",b.grade,")"]},_)})})})]},a)}const i=K.find(v=>v._id===ge),d=Number(i==null?void 0:i.totalMarks)||100,r=R[a]??"",f=_t(r,d);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:et(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(Qt(r))>d?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${d}`,value:r,onChange:v=>{const b=v.target.value;/^[0-9০-৯.]*$/.test(b)&&un(a,b)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(f)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:f})})]},a)})})]}),ge!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Es,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:fn,disabled:Gt,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Wn,{size:16})," ",Gt?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),L==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!ne&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Xe,onChange:t=>Ee(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((ra=P==null?void 0:P.student)==null?void 0:ra._id)||"",onChange:t=>{const s=t.target.value;s&&(U(s),Ws(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),_e.filter(t=>{var a,n,l,i,d,r;if(Xe==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((l=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:l.name)||((d=(i=t.currentEnrollment)==null?void 0:i.section)==null?void 0:d._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(Xe)}).map(t=>{var l,i,d,r;const s=((l=t.user)==null?void 0:l.fullName)||`${((i=t.user)==null?void 0:i.firstName)||""} ${((d=t.user)==null?void 0:d.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:Se,onChange:t=>U(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Ws()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ws(),disabled:Fe||!Se.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(_s,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),P&&((ia=P.results)==null?void 0:ia.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Ts,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Fe?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):P?((oa=P.results)==null?void 0:oa.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):Xs(P):e.jsxs("div",{className:"card empty-state",children:[e.jsx(ns,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),L==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:Ce,onChange:t=>{const s=t.target.value;He(s),s&&zs(s,Yt)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),K.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Yt,onChange:t=>{const s=t.target.value;Tt(s),Ce&&zs(Ce,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:ct,onChange:t=>Ns(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=qt.filter(s=>{var d,r,f,m,j,g,x,v,b,_;if(!ct.trim())return!0;const a=Qt(ct.trim().toLowerCase()),n=(((d=s.student)==null?void 0:d.fullName)||((f=(r=s.student)==null?void 0:r.user)==null?void 0:f.fullName)||`${((j=(m=s.student)==null?void 0:m.user)==null?void 0:j.firstName)||""} ${((x=(g=s.student)==null?void 0:g.user)==null?void 0:x.lastName)||""}`).toLowerCase(),l=String(((b=(v=s.student)==null?void 0:v.currentEnrollment)==null?void 0:b.rollNumber)||"").toLowerCase(),i=String(((_=s.student)==null?void 0:_.studentId)||"").toLowerCase();return n.includes(ct.toLowerCase())||l.includes(a)||i.includes(a)});Ks(t)},disabled:ps||qt.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),ps?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Ce?(()=>{const t=K.find(g=>g._id===Ce),s=Number(t==null?void 0:t.totalMarks)||100,a=qt.filter(g=>{var z,W,H,J,me,Z,oe,De,y,u;if(!ct.trim())return!0;const x=Qt(ct.trim().toLowerCase()),v=(((z=g.student)==null?void 0:z.fullName)||((H=(W=g.student)==null?void 0:W.user)==null?void 0:H.fullName)||`${((me=(J=g.student)==null?void 0:J.user)==null?void 0:me.firstName)||""} ${((oe=(Z=g.student)==null?void 0:Z.user)==null?void 0:oe.lastName)||""}`).toLowerCase(),b=String(((y=(De=g.student)==null?void 0:De.currentEnrollment)==null?void 0:y.rollNumber)||"").toLowerCase(),_=String(((u=g.student)==null?void 0:u.studentId)||"").toLowerCase();return v.includes(ct.toLowerCase())||b.includes(x)||_.includes(x)}),n=a.length,l=a.map(g=>Number(g.marksObtained)||0),i=l.length>0?Math.max(...l):0,d=l.length>0?(l.reduce((g,x)=>g+x,0)/l.length).toFixed(1):0,r=a.filter(g=>{const x=Number(g.marksObtained)||0;return(s>0?x/s*100:x)>=33}).length,f=n>0?Math.round(r/n*100):0,m=a.map(g=>{var x;return String(((x=g.student)==null?void 0:x._id)||g._id)}),j=m.length>0&&m.every(g=>C.has(g));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[i," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:d})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[f,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:j,onChange:()=>Js(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",C.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:j,onChange:()=>Js(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(g=>{var Z,oe,De,y,u,T,A,Q,S,xe,de,be,ye;const x=String(((Z=g.student)==null?void 0:Z._id)||g._id),v=C.has(x),b=Number(g.marksObtained)||0,_=s>0?Math.round(b/s*100):b,z=_t(b,s),W=_>=33,H=((oe=g.student)==null?void 0:oe.fullName)||((y=(De=g.student)==null?void 0:De.user)==null?void 0:y.fullName)||`${((T=(u=g.student)==null?void 0:u.user)==null?void 0:T.firstName)||""} ${((Q=(A=g.student)==null?void 0:A.user)==null?void 0:Q.lastName)||""}`.trim()||"—",J=((xe=(S=g.student)==null?void 0:S.currentEnrollment)==null?void 0:xe.rollNumber)||"—",me=((de=g.student)==null?void 0:de.studentId)||"—";return e.jsxs("tr",{style:{background:v?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:v,onChange:()=>rn(x),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:J}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:H}),((ye=(be=g.student)==null?void 0:be.currentEnrollment)==null?void 0:ye.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",g.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:me}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[b," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[_,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(z)}`,style:{minWidth:"40px",justifyContent:"center"},children:z})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${W?"badge-active":"badge-danger"}`,children:W?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},x)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(Is,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),L==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:ot,onChange:t=>{const s=t.target.value;Ne(s),gs(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>gs(ot),disabled:ae,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ds,{size:14,className:ae?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!ne&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>je("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(kn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>te(!0),disabled:ae||we.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(rt,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[we.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[we.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[we.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((pa=(ca=(da=we.find(t=>t.rankNum===1))==null?void 0:da.student)==null?void 0:ca.user)==null?void 0:pa.fullName)||((ha=(xa=(ma=we.find(t=>t.rankNum===1))==null?void 0:ma.student)==null?void 0:xa.user)==null?void 0:ha.firstName)||"—"}),we.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(ga=we.find(t=>t.rankNum===1))==null?void 0:ga.totalObtained," (",(ua=we.find(t=>t.rankNum===1))==null?void 0:ua.percentage,"%)"]})]})]}),ae?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):we.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Zt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+c.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),c.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:we.map((t,s)=>{var f,m,j,g,x,v,b;const a=t.student,n=((f=a.currentEnrollment)==null?void 0:f.rollNumber)||"—",l=((m=a.user)==null?void 0:m.fullName)||`${((j=a.user)==null?void 0:j.firstName)||""} ${((g=a.user)==null?void 0:g.lastName)||""}`.trim(),i=t.rankNum===1,d=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:i?"rgba(245, 158, 11, 0.08)":d?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:et(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:l}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((v=(x=a.currentEnrollment)==null?void 0:x.section)==null?void 0:v.name)||(typeof((b=a.currentEnrollment)==null?void 0:b.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),c.map(_=>{var oe;const z=(oe=t.studentMarksObj)==null?void 0:oe[_._id],W=z==null?void 0:z.marksObtained,H=W!==null&&typeof W=="object"?W.marksObtained??"":W??"",J=H!=null&&H!=="",me=Number(_.totalMarks)||100,Z=J&&Number(H)<me*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:Z?"#dc2626":J?"#0f172a":"var(--text-muted)",background:Z?"rgba(239, 68, 68, 0.06)":"transparent"},children:J?H:"—"},_._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:i||d||r?"0.92rem":"0.85rem",color:i?"#b45309":d?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:i?"#fef3c7":d?"#f1f5f9":r?"#ffedd5":"transparent",border:i?"1px solid #fde68a":d?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),L==="routine"&&ta(!0),L==="seat_plan"&&e.jsx(Ya,{selectedExam:h,classes:le,user:M}),L==="admit_card"&&e.jsx(qa,{exams:Y,classes:le}),e.jsx("div",{className:"print-only",children:e.jsx(Ln,{roles:he,style:{marginTop:"40px"}})})]}):L==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>D("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Zt,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:dn,disabled:fe||!B||((fa=B.rankings)==null?void 0:fa.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[ne?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),pt&&lt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:ie,onChange:t=>{const s=t.target.value;pe(s),us(s,ue)},children:lt.map(t=>{var l,i,d,r,f,m,j;const s=((i=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:i._id)||((d=t.currentEnrollment)==null?void 0:d.classLevel),a=((f=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:f.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"শ্রেণি",n=((j=t.user)==null?void 0:j.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((ba=le.find(t=>String(t._id)===String(ie)))==null?void 0:ba.name)||(At==null?void 0:At.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:ie,onChange:t=>{const s=t.target.value;pe(s),us(s,ue)},children:le.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:ue,onChange:t=>{const s=t.target.value;ze(s),us(ie,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>us(ie,ue),disabled:fe,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ds,{size:14,className:fe?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),B&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((ya=B.rankings)==null?void 0:ya.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((va=(ja=B.rankings)==null?void 0:ja.find(t=>t.rank===1))==null?void 0:va.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((wa=(Na=B.rankings)==null?void 0:Na.find(t=>t.rank===1))==null?void 0:wa.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((Sa=(ka=B.termExams)==null?void 0:ka.term1)==null?void 0:Sa.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((za=(Ca=B.termExams)==null?void 0:Ca.term2)==null?void 0:za.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:(($a=(Ia=B.termExams)==null?void 0:Ia.term3)==null?void 0:$a.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:fe?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!B||((Aa=B.rankings)==null?void 0:Aa.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(Zt,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:B.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):L==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>D("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ot,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ya,{selectedExam:null,classes:le,user:M})]}):L==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>D("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Lt,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(qa,{exams:Y,classes:le})]}):L==="routine"?ta(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",children:Ss?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":pt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${Re} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{D("routine"),ne?bs():fs()},children:[e.jsx(Mt,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"📅 পরীক্ষার রুটিন"})]}),!ne&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>D("seat_plan"),children:[e.jsx(Ot,{size:16,style:{color:"#059669"}}),e.jsx("span",{children:"🪑 সিট প্ল্যান"})]}),!ne&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>D("admit_card"),children:[e.jsx(Lt,{size:16,style:{color:"#0284c7"}}),e.jsx("span",{children:"🎫 প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{D("annual_combined");let t=ie;t||(ne&&(At!=null&&At._id)?t=At._id:le.length>0&&(t=le[0]._id)),t&&(pe(t),us(t,ue))},children:[e.jsx(Zt,{size:16,style:{color:"#d97706"}}),e.jsx("span",{children:"🏆 বার্ষিক সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(M==null?void 0:M.userType)&&e.jsxs("button",{className:"btn btn-primary",onClick:()=>st(!0),children:[e.jsx(os,{size:16})," নতুন পরীক্ষা তৈরি"]})]})]}),pt&&lt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ns,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:$t,onChange:t=>en(t.target.value),children:lt.map(t=>{var l,i,d,r,f,m,j;const s=((l=t.user)==null?void 0:l.fullName)||`${((i=t.user)==null?void 0:i.firstName)||""} ${((d=t.user)==null?void 0:d.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((f=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:f.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"",n=(j=t.currentEnrollment)!=null&&j.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),pt&&lt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ns,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((_a=lt[0].user)==null?void 0:_a.fullName)||`${((Ma=lt[0].user)==null?void 0:Ma.firstName)||""} ${((La=lt[0].user)==null?void 0:La.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Wa=(Ra=lt[0].currentEnrollment)==null?void 0:Ra.classLevel)==null?void 0:Wa.name)||"শ্রেণি",(Ta=lt[0].currentEnrollment)!=null&&Ta.rollNumber?` • রোল: ${lt[0].currentEnrollment.rollNumber}`:""]})]}),Ss&&At&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ns,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:At.name||"শ্রেণি"})]}),re?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Y.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:Y.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=Ys.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${yn(t.status)}`,children:bn(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?Jt(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",Jt(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px"},onClick:()=>{D("marks"),Qs(t)},children:ne?"ফলাফল দেখুন":"📝 নম্বর এন্ট্রি"}),!ne&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"4px"},onClick:()=>{D("merit"),Qs(t),gs("all",t)},children:[e.jsx(Zt,{size:14,style:{color:"#d97706"}})," 🏆 মেধা তালিকা"]}),["super_admin","admin","principal","teacher"].includes(M==null?void 0:M.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>sn(t),title:"সম্পাদনা",children:e.jsx(Os,{size:16})}),["super_admin","admin","principal"].includes(M==null?void 0:M.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>an(t._id),title:"মুছে ফেলুন",children:e.jsx($s,{size:16})})]})]},t._id)})}),wt&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Ps()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Qe?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Ps,type:"button",children:e.jsx(os,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:nn,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:E.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",X(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),E.classLevel&&hs(E.classLevel)},children:En.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),E.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:E.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};X(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),E.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:E.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};X(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),E.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:E.month,onChange:t=>{const s=t.target.value,a=Ys.find(l=>l.value===s),n=a?a.label.split(" ")[0]:s;X(l=>({...l,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:Ys.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:E.name,onChange:Cs,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:E.classLevel,onChange:t=>{const s=t.target.value;X(a=>({...a,classLevel:s,selectedSubjects:[]})),hs(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),le.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),E.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:E.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",E.selectedSubjects.length,"/৪ টি"]})]}),E.classLevel?q.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:q.map(t=>{const s=E.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=E.selectedSubjects;if(s)X(n=>({...n,selectedSubjects:a.filter(l=>l!==t._id)}));else{if(a.length>=4){F({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}X(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:E.startDate,onChange:Cs})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:E.endDate,onChange:Cs})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:E.status,onChange:Cs,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Ps,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:kt,children:kt?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),ks&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Mt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:ts?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>Vt(!1),title:"বন্ধ করুন",children:e.jsx(Sn,{size:20})})]}),e.jsxs("form",{onSubmit:pn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:Ke.title,onChange:t=>nt(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ke.stream,onChange:t=>nt(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ke.exam,onChange:t=>{const s=Y.find(a=>a._id===t.target.value);nt(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),Y.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ke.classLevel,onChange:t=>{const s=t.target.value,a=le.find(n=>n._id===s);nt(n=>({...n,classLevel:s,className:a?a.name:""})),s&&hs(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),le.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ke.status,onChange:t=>nt(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:Ke.instructions,onChange:t=>nt(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[et(Ke.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[q&&q.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:cn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:xn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(os,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),Ke.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:et(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ee(s,"date",l),l&&ee(s,"day",ss(l))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:q&&q.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=q.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ee(s,"subject","custom");else{const i=q.find(d=>d._id===l);i&&(ee(s,"subject",i._id),ee(s,"subjectName",i.name),ee(s,"totalMarks",Number(i.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),q.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!q.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>ee(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ee(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>ee(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>ee(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>ea(s),disabled:Ke.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx($s,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:Ke.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:et(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ee(s,"date",l),l&&ee(s,"day",ss(l))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>ea(s),disabled:Ke.schedule.length<=1,title:"মুছুন",children:e.jsx($s,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:q&&q.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=q.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ee(s,"subject","custom");else{const i=q.find(d=>d._id===l);i&&(ee(s,"subject",i._id),ee(s,"subjectName",i.name),ee(s,"totalMarks",Number(i.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),q.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})}),q&&q.length>0&&(t.subject==="custom"||!q.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>ee(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ee(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>ee(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Vt(!1),disabled:es,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:es,children:es?"সংরক্ষণ হচ্ছে...":ts?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),k&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&te(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(rt,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>te(!1),type:"button",children:e.jsx(os,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>ke("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:V==="landscape"?700:500,background:V==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:V==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:V==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:V==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>ke("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:V==="portrait"?700:500,background:V==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:V==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:V==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:V==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=he.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(he.length<=1)return;a=he.filter(n=>n!==t)}else a=[...he,t];tt(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>te(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{te(!1),gn(V,he)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{ol as default};
