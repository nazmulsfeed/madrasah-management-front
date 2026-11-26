import{k as Ua,r as d,j as e,I as _s,i as Ls,d as P,a as Va,F as wt,U as Oa,C as Tt,J as Da,K as yn,u as jn,v as vn,x as Nn,A as ys,N as is,b as zs,R as Os,G as wn,X as kn,l as Ha}from"./index-BJQ2OxF5.js";import{g as Us,b as Ue,p as Xt,f as es,t as Je}from"./helpers-CljGnr5z.js";import{L as Yt}from"./layout-grid-DC1S7InT.js";import{R as Ms}from"./rotate-cw-BlKqgqt8.js";import{P as Ke}from"./printer-C-VbUgiL.js";import{S as Za}from"./sliders-vertical-BQ4XNmkx.js";import{S as Qa,a as Ja}from"./square-CK6-0x2m.js";import{C as Sn}from"./circle-check-BhPJmSAr.js";import{S as Cn}from"./sparkles-_PON1rMU.js";import{L as zn}from"./layers-DhG_npCQ.js";import{E as $n}from"./eye-Do21_oiK.js";import{Z as An}from"./zoom-out-DPpWx9lJ.js";import{Z as In}from"./zoom-in-CAUnn5nG.js";import{S as js}from"./constants-C6HvYUtm.js";import{g as rs,a as os,b as ds}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as _n}from"./MadrasahLetterhead-BLEHEJ-a.js";import{P as Ln}from"./PrintSignatureRoleSelector-B37fDRw9.js";import{P as Mn}from"./PrintFooterSignatures-CD34NW63.js";import{C as vs}from"./circle-alert-D08Wd-0A.js";import{T as Kt}from"./trophy-CBSygcpb.js";import{S as Ds}from"./square-pen--Xw-5rnc.js";import{S as Wn}from"./save-CNFz7w0-.js";import{P as cs}from"./plus-DbKdNqM_.js";import{T as $s}from"./trash-2-ZWdfuvfT.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=Ua("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=Ua("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Hs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Gs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Ya({selectedExam:z=null,classes:F=[],user:X=null}){var Ne;const $=d.useMemo(()=>Us(X),[X]),pt=d.useMemo(()=>Array.isArray(F)?F:F&&Array.isArray(F.classes)?F.classes:[],[F]),[Ae,Ce]=d.useState([]),[mt,Q]=d.useState((z==null?void 0:z._id)||""),[Xe,Ie]=d.useState(((Ne=z==null?void 0:z.classLevel)==null?void 0:Ne._id)||(z==null?void 0:z.classLevel)||""),[kt,Te]=d.useState([]),[M,Ee]=d.useState("all"),[et,St]=d.useState("all"),[tt,Ct]=d.useState((z==null?void 0:z.academicYear)||"2026"),[qt,Ve]=d.useState((z==null?void 0:z.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[xt,R]=d.useState(!1),[se,V]=d.useState([]),[Pe,g]=d.useState(new Set),[Et,ae]=d.useState({}),[zt,ht]=d.useState(""),[Bt,he]=d.useState(!0),[$t,A]=d.useState(!0),[At,it]=d.useState(!0),[De,Ze]=d.useState(!0),[st,ue]=d.useState(!0),[gt,_e]=d.useState(!0),[ft,Ut]=d.useState(!0),[ut,bt]=d.useState(!0),[Pt,_]=d.useState(!0),[U,H]=d.useState(!0),[Vt,at]=d.useState(!0),[Fe,be]=d.useState(12),[rt,ce]=d.useState(!1),[Oe,Le]=d.useState("12"),[J,ze]=d.useState("theme-classic"),[Ft,It]=d.useState("logo-left"),[ye,ot]=d.useState(!1),[_t,ge]=d.useState("১০১"),[yt,Zt]=d.useState(`1-20: 101
21-40: 102
41-60: 103`),[ts,Lt]=d.useState(!1);d.useEffect(()=>{(async()=>{var w,b,E,O,B;try{const K=await P.get("/exams",{params:{limit:100}}),te=((b=(w=K.data)==null?void 0:w.data)==null?void 0:b.exams)||((E=K.data)==null?void 0:E.exams)||((O=K.data)==null?void 0:O.data)||[],we=Array.isArray(te)?te:[];if(Ce(we),!mt&&we.length>0&&(Q(we[0]._id),Ve(we[0].name),we[0].academicYear&&Ct(we[0].academicYear),we[0].classLevel)){const Y=((B=we[0].classLevel)==null?void 0:B._id)||we[0].classLevel;Ie(Y)}}catch(K){console.error("Failed to fetch exams for seat plan:",K),Ce([])}})()},[]),d.useEffect(()=>{var c;if(mt&&Array.isArray(Ae)&&Ae.length>0){const w=Ae.find(b=>b._id===mt);if(w&&(Ve(w.name||"বার্ষিক পরীক্ষা - ২০২৬"),w.academicYear&&Ct(w.academicYear),w.classLevel)){const b=((c=w.classLevel)==null?void 0:c._id)||w.classLevel;Ie(b)}}},[mt,Ae]),d.useEffect(()=>{if(!Xe){Te([]);return}(async()=>{var w,b,E,O;try{const B=await P.get(`/students/sections?classLevel=${Xe}`),K=((b=(w=B.data)==null?void 0:w.data)==null?void 0:b.sections)||((E=B.data)==null?void 0:E.sections)||((O=B.data)==null?void 0:O.data)||[];Te(Array.isArray(K)?K:[])}catch(B){console.warn("Failed to load sections:",B),Te([])}})()},[Xe]);const i=async()=>{var c,w,b,E;R(!0);try{const O={limit:500};Xe&&(O.classLevel=Xe),M&&M!=="all"&&(O.section=M);const B=await P.get("/students",{params:O}),K=((w=(c=B.data)==null?void 0:c.data)==null?void 0:w.students)||((b=B.data)==null?void 0:b.students)||((E=B.data)==null?void 0:E.data)||[];let te=Array.isArray(K)?K:[];et&&et!=="all"&&(te=te.filter(We=>{var He;return(We.department||((He=We.currentEnrollment)==null?void 0:He.department)||"").toLowerCase().includes(et.toLowerCase())})),te.sort((We,Re)=>{var jt,Ge;const He=Ue(((jt=We.currentEnrollment)==null?void 0:jt.rollNumber)||We.rollNumber||We.roll),Ot=Ue(((Ge=Re.currentEnrollment)==null?void 0:Ge.rollNumber)||Re.rollNumber||Re.roll);return He-Ot}),V(te);const we=new Set(te.map(We=>We._id));g(we);const Y={};te.forEach(We=>{Y[We._id]=_t||"১০১"}),ae(Y)}catch(O){console.error("Failed to load students for seat plan:",O),V([]),g(new Set)}finally{R(!1)}};d.useEffect(()=>{Xe&&i()},[Xe,M,et]);const f=()=>{Pe.size===se.length?g(new Set):g(new Set(se.map(c=>c._id)))},v=()=>{const c=_t.trim();c&&ae(w=>{const b={...w};return Pe.forEach(E=>{b[E]=c}),b})},Z=()=>{const c=yt.split(`
`),w={...Et};c.forEach(b=>{const E=b.split(":");if(E.length===2){const O=E[0].trim(),B=E[1].trim(),K=O.match(/(\d+)\s*[-–—]\s*(\d+)/);if(K&&B){const te=parseInt(K[1],10),we=parseInt(K[2],10);se.forEach(Y=>{var He;const We=Xt(((He=Y.currentEnrollment)==null?void 0:He.rollNumber)||Y.rollNumber||Y.roll||"0"),Re=parseInt(We,10);!isNaN(Re)&&Re>=te&&Re<=we&&(w[Y._id]=B)})}}}),ae(w),Lt(!1)},T=d.useMemo(()=>se.filter(c=>{var B,K;if(!Pe.has(c._id))return!1;if(!zt)return!0;const w=zt.toLowerCase(),b=(c.fullName||((B=c.user)==null?void 0:B.fullName)||c.name||"").toLowerCase(),E=String(((K=c.currentEnrollment)==null?void 0:K.rollNumber)||c.rollNumber||c.roll||"").toLowerCase(),O=String(c.studentId||c.admissionNumber||"").toLowerCase();return b.includes(w)||E.includes(w)||O.includes(w)}),[se,Pe,zt]),G=c=>{be(c),ce(!1),Le(String(c))},pe=c=>{Le(c);const w=parseInt(c,10);!isNaN(w)&&w>0&&w<=30&&(be(w),ce(!0))},re=d.useMemo(()=>{const c=Fe;let w=3,b=4;return c<=4||c<=6||c<=8?(w=2,b=Math.ceil(c/2)):c<=10?(w=2,b=5):c<=12?(w=3,b=4):c<=15?(w=3,b=5):c<=16?(w=4,b=4):(w=4,b=Math.ceil(c/4)),{cols:w,rows:b,count:c}},[Fe]),Me=d.useMemo(()=>{const c=[],w=Fe;for(let b=0;b<T.length;b+=w)c.push(T.slice(b,b+w));return c},[T,Fe]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card mb-20 no-print",style:{border:"1px solid #cbd5e1",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[e.jsxs("div",{className:"flex justify-between items-center pb-14 border-b border-slate-200 flex-wrap gap-12",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-emerald-800 flex items-center gap-8 m-0",children:[e.jsx(Yt,{size:22,className:"text-emerald-600"}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{className:"text-xs text-slate-500 mt-2 m-0",children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{className:"flex gap-8 flex-wrap",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:()=>ot(!ye),children:["🌐 ",ye?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:i,disabled:xt,children:[e.jsx(Ms,{size:14,className:xt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary text-xs font-bold flex items-center gap-6",style:{background:"#059669",borderColor:"#059669",padding:"8px 18px"},onClick:()=>window.print(),children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 pt-14 pb-14 border-b border-slate-200",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input text-xs",value:mt,onChange:c=>Q(c.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(Ae)?Ae:[]).map(c=>e.jsxs("option",{value:c._id,children:[c.name," (",c.academicYear||"২০২৬",")"]},c._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input text-xs",value:Xe,onChange:c=>Ie(c.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(pt)?pt:[]).map(c=>e.jsx("option",{value:c._id,children:c.name},c._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input text-xs",value:M,onChange:c=>Ee(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(kt)?kt:[]).map(c=>e.jsx("option",{value:c._id||c.name,children:c.name},c._id||c.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input text-xs",value:et,onChange:c=>St(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"py-12 border-b border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-6 mb-8 text-xs font-bold text-slate-700 uppercase tracking-wide",children:[e.jsx(Za,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন তথ্য প্রদর্শন করতে চান? (ফিল্ড নির্বাচন করুন):"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-xs",children:[e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Bt,onChange:c=>he(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:$t,onChange:c=>A(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"পরীক্ষার নাম"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:At,onChange:c=>it(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:De,onChange:c=>Ze(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শিক্ষার্থীর ছবি"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:st,onChange:c=>ue(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"আইডি নম্বর"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:gt,onChange:c=>_e(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শ্রেণি (Class)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:ft,onChange:c=>Ut(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:ut,onChange:c=>bt(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"সেশন / শিক্ষাবর্ষ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Pt,onChange:c=>_(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বড় রোল বক্স"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:U,onChange:c=>H(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কাটিং দাগ (✂)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Vt,onChange:c=>at(c.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"লোগো ওয়াটারমার্ক"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12",children:[e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center justify-between",children:[e.jsxs("span",{className:"flex items-center gap-6",children:[e.jsx(_s,{size:16,className:"text-emerald-600"}),"কক্ষ নম্বর নির্ধারণ (Room Assignment)"]}),e.jsx("button",{type:"button",className:"text-emerald-700 underline font-semibold hover:text-emerald-800",onClick:()=>Lt(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx("input",{type:"text",className:"form-input text-xs w-36",value:_t,onChange:c=>ge(c.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:v,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-6 m-0",children:"টিপস: নিচে শিক্ষার্থীর নামের পাশের ঘরে সরাসরি হাত দিয়েও আলাদা আলাদা রুম পরিবর্তন করতে পারবেন।"})]}),e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Yt,{size:16,className:"text-emerald-600"}),"A4 পেজে কার্ড সংখ্যা ও ডিজাইন থিম:"]}),e.jsxs("div",{className:"flex items-center gap-8 flex-wrap mb-8",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"প্রিসেট:"}),e.jsx("button",{type:"button",className:`btn text-xs ${Fe===12&&!rt?"btn-primary":"btn-secondary"}`,style:Fe===12&&!rt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>G(12),children:"১২টি / পেজ (৩×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Fe===8&&!rt?"btn-primary":"btn-secondary"}`,style:Fe===8&&!rt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>G(8),children:"৮টি / পেজ (২×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Fe===6&&!rt?"btn-primary":"btn-secondary"}`,style:Fe===6&&!rt?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>G(6),children:"৬টি / পেজ (২×৩)"}),e.jsxs("div",{className:"flex items-center gap-4 ml-auto",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কাস্টম সংখ্যা:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:Oe,onChange:c=>pe(c.target.value),className:"form-input text-xs w-16 text-center font-bold"})]})]}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কালার থিম:"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:J==="theme-classic",onChange:()=>ze("theme-classic")}),e.jsx("span",{children:"ক্লাসিক ব্ল্যাক"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:J==="theme-emerald",onChange:()=>ze("theme-emerald")}),e.jsx("span",{className:"text-emerald-700 font-semibold",children:"রয়্যাল গ্রিন"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:J==="theme-navy",onChange:()=>ze("theme-navy")}),e.jsx("span",{className:"text-blue-800 font-semibold",children:"নেভি ব্লু"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-12 mt-8 pt-8 border-t border-slate-200",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"হেডার বিন্যাস:"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Ft==="logo-left",onChange:()=>It("logo-left")}),e.jsx("span",{className:"font-bold text-emerald-700",children:"বামে লোগো, ডানে ছবি (ডিফল্ট)"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Ft==="photo-left",onChange:()=>It("photo-left")}),e.jsx("span",{children:"বামে ছবি, ডানে লোগো"})]})]})]})]})]}),e.jsxs("div",{className:"mt-14 pt-12 border-t border-slate-200 flex justify-between items-center flex-wrap gap-8 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-4",onClick:f,children:[Pe.size===se.length?e.jsx(Qa,{size:14}):e.jsx(Ja,{size:14}),e.jsx("span",{children:Pe.size===se.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"font-semibold text-slate-700",children:["মোট শিক্ষার্থী: ",e.jsx("strong",{className:"text-emerald-700",children:se.length})," জন | নির্বাচিত: ",e.jsx("strong",{className:"text-emerald-700",children:Pe.size})," জন",T.length>0&&e.jsxs("span",{className:"ml-4 text-slate-500",children:["(মোট ",e.jsx("strong",{children:Me.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:zt,onChange:c=>ht(c.target.value),className:"form-input text-xs pl-24 pr-8 py-4"}),e.jsx(Ls,{size:14,className:"absolute left-8 top-1/2 -translate-y-1/2 text-slate-400"})]})})]})]}),ts&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(_s,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:yt,onChange:c=>Zt(c.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>Lt(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:Z,children:"রুম ভাগ করুন"})]})]})}),xt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):T.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${J}`,children:(Array.isArray(Me)?Me:[]).map((c,w)=>e.jsx("div",{className:`seat-plan-a4-sheet ${U?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${re.cols}, 1fr)`,gridTemplateRows:`repeat(${re.rows}, 1fr)`,gap:Fe<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(c)?c:[]).map(b=>{var Re,He,Ot,jt,Ge,Qt,Dt,ms,Ht,Ns,ws,Jt,ss,xs,as;const E=b.fullName||((Re=b.user)==null?void 0:Re.fullName)||`${((He=b.user)==null?void 0:He.firstName)||""} ${((Ot=b.user)==null?void 0:Ot.lastName)||""}`.trim()||b.name||"—",O=((jt=b.currentEnrollment)==null?void 0:jt.rollNumber)||b.rollNumber||b.roll||"—",B=b.studentId||b.admissionNumber||((Ge=b._id)==null?void 0:Ge.substring(0,6))||"—",K=((Dt=(Qt=b.currentEnrollment)==null?void 0:Qt.classLevel)==null?void 0:Dt.name)||((ms=b.classLevel)==null?void 0:ms.name)||b.class||"—",te=((Ns=(Ht=b.currentEnrollment)==null?void 0:Ht.section)==null?void 0:Ns.name)||((ws=b.currentEnrollment)==null?void 0:ws.section)||((Jt=b.section)==null?void 0:Jt.name)||b.section||"—",we=b.department||((ss=b.currentEnrollment)==null?void 0:ss.department)||"সাধারণ",Y=Et[b._id]||_t||"১০১",We=De&&(b.photo||(xs=b.user)!=null&&xs.photo)?b.photo||((as=b.user)==null?void 0:as.photo):Hs;return e.jsxs("div",{className:"seat-plan-card",children:[Vt&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ye=>{Ye.currentTarget.src=Gs},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:Ft==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ye=>{Ye.currentTarget.src=Gs},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:ye?"AN-NUR ISLAMIC ACADEMY":$.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:ye?"Shahibag, Chapainawabganj":$.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:"Exam Seat Plan"})]}),De?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:We,onError:Ye=>{Ye.currentTarget.src=Hs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[De?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:We,onError:Ye=>{Ye.currentTarget.src=Hs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:ye?"AN-NUR ISLAMIC ACADEMY":$.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:ye?"Shahibag, Chapainawabganj":$.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:"Exam Seat Plan"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Ye=>{Ye.currentTarget.src=Gs},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:E,children:E})]}),st&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:B})]}),gt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:K})]}),ft&&te&&te!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:te})]}),At&&we&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:we})]}),Bt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:ye?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:Y,onChange:Ye=>{const Vs=Ye.target.value;ae(Ws=>({...Ws,[b._id]:Vs}))}})}),e.jsx("span",{className:"print-only",children:Y})]})]})]})}),Pt&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:ye?"Roll":"রোল / Roll"}),e.jsx("div",{className:"sp-roll-num",children:O})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[$t&&e.jsx("span",{className:"font-semibold",children:qt}),ut&&e.jsxs("span",{children:[ye?"Session:":"সেশন:"," ",tt&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(tt))?new Date().getFullYear():tt||new Date().getFullYear()]})]})]},b._id)})},`page-${w}`))}),e.jsx("style",{children:`
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
      `})]})}const ps={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function As({position:z}){const F={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},X={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...X[z]},children:e.jsxs("g",{transform:`translate(${z.includes("right")?64:0}, ${z.includes("bottom")?64:0}) ${F[z]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function Tn(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function En(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function Bn(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function Is({config:z=ps}){const F={...ps,...z},X=Array.isArray(F.rules)&&F.rules.length>0?F.rules:ps.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx(As,{position:"top-left"}),e.jsx(As,{position:"top-right"}),e.jsx(As,{position:"bottom-left"}),e.jsx(As,{position:"bottom-right"}),e.jsx(Tn,{}),e.jsx(En,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:F.title})})}),e.jsx("ul",{className:"backside-rules-list",children:X.filter($=>$&&$.trim()).map(($,pt)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(Bn,{}),e.jsx("span",{children:$})]},pt))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:F.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:F.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:F.footerLeftBadge&&F.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:F.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:F.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:F.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const Ys='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',q=(z,F="—")=>z==null?F:typeof z=="object"?z.name||z.title||z.banglaName||z.code||z._id||F:String(z).trim()||F;function qa({exams:z=[],classes:F=[]}){const{user:X}=Va(),$=d.useMemo(()=>Us(X),[X]),pt=d.useMemo(()=>Array.isArray(F)?F:F&&Array.isArray(F.classes)?F.classes:[],[F]),Ae=d.useMemo(()=>Array.isArray(z)?z:z&&Array.isArray(z.exams)?z.exams:[],[z]),[Ce,mt]=d.useState(""),[Q,Xe]=d.useState(""),[Ie,kt]=d.useState("all"),[Te,M]=d.useState("all"),[Ee,et]=d.useState([]),[St,tt]=d.useState([]),[Ct,qt]=d.useState(!1),[Ve,xt]=d.useState(""),[R,se]=d.useState(new Set),[V,Pe]=d.useState({}),[g,Et]=d.useState("১০২"),[ae,zt]=d.useState(()=>new Date().toISOString().split("T")[0]),[ht,Bt]=d.useState("preview"),[he,$t]=d.useState(85),[A,At]=d.useState("en"),[it,De]=d.useState(4),[Ze,st]=d.useState("4"),[ue,gt]=d.useState("landscape"),[_e,ft]=d.useState(!0),[Ut,ut]=d.useState("admit"),[bt,Pt]=d.useState(()=>{try{const i=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(i)&&i>=80&&i<=135)return i}catch{}return 100});d.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(bt))}catch{}},[bt]);const[_,U]=d.useState(()=>{try{const i=localStorage.getItem("admit_backside_config");if(i)return{...ps,...JSON.parse(i)}}catch{}return ps});d.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(_))}catch{}},[_]);const[H,Vt]=d.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});d.useEffect(()=>{Ae.length>0&&!Ce&&mt(Ae[0]._id||Ae[0].id||"")},[Ae,Ce]),d.useEffect(()=>{if(!Q){et([]),kt("all");return}(async()=>{var f,v,Z,T;try{const G=await P.get(`/students/sections?classLevel=${Q}`),pe=((v=(f=G.data)==null?void 0:f.data)==null?void 0:v.sections)||((Z=G.data)==null?void 0:Z.sections)||((T=G.data)==null?void 0:T.data)||[],re=Array.isArray(pe)?pe:[];et(re),kt("all")}catch{et([])}})()},[Q]);const at=async()=>{var i,f,v,Z;if(!Q){tt([]),se(new Set);return}qt(!0);try{const T={classLevel:Q,limit:500,status:"active"};Ie&&Ie!=="all"&&(T.section=Ie);const G=await P.get("/students",{params:T}),pe=((f=(i=G.data)==null?void 0:i.data)==null?void 0:f.students)||((v=G.data)==null?void 0:v.students)||((Z=G.data)==null?void 0:Z.data)||[];let re=Array.isArray(pe)?pe:pe.students||[];Te&&Te!=="all"&&(re=re.filter(c=>{var b;return(c.department||((b=c.currentEnrollment)==null?void 0:b.department)||"").toLowerCase().includes(Te.toLowerCase())})),re.sort((c,w)=>{var O,B;const b=Ue(((O=c.currentEnrollment)==null?void 0:O.rollNumber)||c.rollNumber||c.roll),E=Ue(((B=w.currentEnrollment)==null?void 0:B.rollNumber)||w.rollNumber||w.roll);return b-E}),tt(re);const Me=new Set(re.map(c=>c._id||c.id));se(Me);const Ne={};re.forEach(c=>{const w=c._id||c.id;Ne[w]=g}),Pe(Ne)}catch(T){console.error("Failed to load students for admit card:",T),tt([]),se(new Set)}finally{qt(!1)}};d.useEffect(()=>{Q&&at()},[Q,Ie,Te]);const Fe=()=>{const i=g.trim();i&&Pe(f=>{const v={...f};return R.forEach(Z=>{v[Z]=i}),v})},be=()=>{R.size===ce.length&&ce.length>0?se(new Set):se(new Set(ce.map(i=>i._id||i.id)))},rt=i=>{const f=new Set(R);f.has(i)?f.delete(i):f.add(i),se(f)},ce=d.useMemo(()=>{if(!Ve.trim())return St;const i=Ve.toLowerCase();return St.filter(f=>{var G,pe;const v=q(((G=f.user)==null?void 0:G.name)||f.name,"").toLowerCase(),Z=q(((pe=f.currentEnrollment)==null?void 0:pe.rollNumber)||f.rollNumber||f.roll,"").toLowerCase(),T=q(f.studentId||f.admissionNumber,"").toLowerCase();return v.includes(i)||Z.includes(i)||T.includes(i)})},[St,Ve]),Oe=d.useMemo(()=>St.filter(i=>R.has(i._id||i.id)),[St,R]),Le=d.useMemo(()=>Ae.find(i=>(i._id||i.id)===Ce)||null,[Ae,Ce]),J=d.useMemo(()=>pt.find(i=>(i._id||i.id)===Q)||null,[pt,Q]),ze=i=>{De(i),st(String(i)),i!==4&&_e&&ft(!1)},Ft=i=>{st(i);const f=parseInt(i,10);!isNaN(f)&&f>0&&f<=8&&(De(f),f!==4&&_e&&ft(!1))},It=i=>{gt(i),i==="landscape"?(De(4),st("4")):_e&&ft(!1)},ye=()=>{const i=!_e;ft(i),i&&(gt("landscape"),De(4),st("4"))},ot=d.useMemo(()=>{const i=[],f=parseInt(it,10)||2;for(let v=0;v<Oe.length;v+=f)i.push(Oe.slice(v,v+f));return i},[Oe,it]),_t=i=>{Vt(f=>({...f,[i]:!f[i]}))},ge=d.useRef(null),yt=d.useRef(null),Zt=i=>{const f=ge.current,v=yt.current;if(!f||!v){window.print();return}const Z=document.getElementById("admit-print-iframe");Z&&Z.remove();const T=document.createElement("iframe");T.id="admit-print-iframe",T.style.position="fixed",T.style.right="0",T.style.bottom="0",T.style.width="0",T.style.height="0",T.style.border="0",T.style.visibility="hidden",document.body.appendChild(T);const G=T.contentWindow.document,pe=window.location.origin;G.open(),G.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${pe}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${bt/100};
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
    ${v.textContent}
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
  <div class="admit-print-only-container">${f.innerHTML}</div>
</body>
</html>`),G.close();const re=()=>{try{T.contentWindow.focus(),T.contentWindow.print()}catch(Ne){console.error("Iframe print error:",Ne),window.print()}},Me=Array.from(G.images||[]);if(Me.length===0)setTimeout(re,120);else{let Ne=!1;const c=()=>{Ne||(Ne=!0,setTimeout(re,100))};Promise.all(Me.map(w=>w.complete?Promise.resolve():new Promise(b=>{w.onload=b,w.onerror=b}))).then(c),setTimeout(c,1200)}},ts=()=>{if(Oe.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}ut("admit");const i=ue==="landscape"?"landscape":"portrait";setTimeout(()=>Zt(i),80)},Lt=()=>{ut("backside_only"),setTimeout(()=>Zt("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(wt,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:q($.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>At("en"),className:`admit-lang-btn ${A==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>At("bn"),className:`admit-lang-btn ${A==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>At("bi"),className:`admit-lang-btn ${A==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:at,disabled:Ct||!Q,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Ms,{size:15,className:Ct?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:Lt,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(Ke,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:ts,disabled:Oe.length===0,className:"admit-btn-print",children:[e.jsx(Ke,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",Oe.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Oa,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:ce.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(Sn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:Oe.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Yt,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[it,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(wt,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[ot.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Tt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:Ce,onChange:i=>mt(i.target.value),className:"admit-select",children:Ae.map(i=>{const f=i._id||i.id||"",v=q(i.name||i.title,"Exam");return e.jsx("option",{value:f,children:v},f)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(_s,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:Q,onChange:i=>Xe(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),pt.map(i=>{const f=i._id||i.id||"",v=q(i.name||i.banglaName||i.code,"Class");return e.jsx("option",{value:f,children:v},f)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Yt,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:Ie,onChange:i=>kt(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),Ee.map((i,f)=>{const v=q(i,"");return e.jsx("option",{value:v,children:v},f)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Cn,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:Te,onChange:i=>M(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Yt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(i=>e.jsx("button",{type:"button",onClick:()=>ze(i.count),className:`admit-pill-btn ${it===i.count?"active":""}`,children:i.label},i.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Ze,onChange:i=>Ft(i.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(zn,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>It("portrait"),className:`admit-pill-btn ${ue==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>It("landscape"),className:`admit-pill-btn ${ue==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:ye,className:`admit-pill-btn ${_e?"active":""}`,style:{border:_e?"1px solid #0d3b66":"1px solid #cbd5e1",background:_e?"#0d3b66":"#ffffff",color:_e?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:_e?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Pt(i=>Math.max(80,i-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[bt,"%"]}),e.jsx("button",{type:"button",onClick:()=>Pt(i=>Math.min(135,i+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),bt!==100&&e.jsx("button",{type:"button",onClick:()=>Pt(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(_s,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:g,onChange:i=>Et(i.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Fe,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Tt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:ae,onChange:i=>zt(i.target.value),className:"admit-date-input"})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>Bt("preview"),className:`admit-tab-btn ${ht==="preview"?"active":""}`,children:[e.jsx($n,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[ot.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>Bt("students"),className:`admit-tab-btn ${ht==="students"?"active":""}`,children:[e.jsx(Oa,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[Oe.length,"/",ce.length]})]}),e.jsxs("button",{type:"button",onClick:()=>Bt("settings"),className:`admit-tab-btn ${ht==="settings"?"active":""}`,children:[e.jsx(Rn,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ht==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>$t(Math.max(50,he-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(An,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[he,"%"]}),e.jsx("button",{type:"button",onClick:()=>$t(Math.min(130,he+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(In,{size:14})}),e.jsx("button",{type:"button",onClick:()=>$t(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ht==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:Ct?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):Q?Oe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${he/100})`,transformOrigin:"top center"},children:ot.map((i,f)=>e.jsxs(Da.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",f+1," / ",ot.length," ",ue==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",i.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${it} ${ue==="landscape"?"a4-landscape":""}`,children:i.map(v=>{var E,O,B,K;const Z=v._id||v.id,T=q(((E=v.user)==null?void 0:E.name)||v.name,"MD. STUDENT"),G=q(((O=v.currentEnrollment)==null?void 0:O.rollNumber)||v.rollNumber||v.roll,"—"),pe=q(v.studentId||v.admissionNumber,"—"),re=q(((B=v.currentEnrollment)==null?void 0:B.section)||v.section||(Ie!=="all"?Ie:"—"),"—"),Me=q(v.department||((K=v.currentEnrollment)==null?void 0:K.department)||v.stream,"All"),Ne=q(V[Z]||g,"১০২"),c=v.photo||Ys,w=q((Le==null?void 0:Le.name)||(Le==null?void 0:Le.title),"Annual Examination 2026"),b=q((J==null?void 0:J.name)||(J==null?void 0:J.banglaName)||(J==null?void 0:J.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[H.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:te=>{te.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:te=>{te.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:A==="bn"?q($.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:A==="bn"?q($.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:A==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),H.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:A==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:es(ae)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:T})]}),H.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Me})]}),H.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:pe})]}),H.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Ne})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:G})]}),H.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),H.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),H.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:b})]}),H.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:re})]})]}),H.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:c,alt:"Photo"})})]}),H.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:A==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:w})]}),e.jsxs("div",{className:"signatures-row",children:[H.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),H.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},Z)})})]}),_e&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",f+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(v=>e.jsx(Is,{config:_},`preview-back-${f}-${v}`))})]})]},`preview-group-${f}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(wt,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),_e&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${he/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Is,{config:_},`empty-back-${i}`))})]})})})]})}),ht==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:be,className:"admit-btn-select-all",children:R.size===ce.length&&ce.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Qa,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ja,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",ce.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:R.size})," / ",ce.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Ls,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Ve,onChange:i=>xt(i.target.value),className:"admit-search-input"}),Ve&&e.jsx("button",{type:"button",onClick:()=>xt(""),className:"admit-search-clear",children:"✕"})]})]}),ce.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:R.size===ce.length&&ce.length>0,onChange:be,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:ce.map(i=>{var c,w,b,E;const f=i._id||i.id,v=R.has(f),Z=q(((c=i.currentEnrollment)==null?void 0:c.rollNumber)||i.rollNumber||i.roll,"—"),T=q(((w=i.user)==null?void 0:w.name)||i.name,"—"),G=q(i.studentId||i.admissionNumber,"—"),pe=q(((b=i.currentEnrollment)==null?void 0:b.section)||i.section||(Ie!=="all"?Ie:"—"),"—"),re=q(i.department||((E=i.currentEnrollment)==null?void 0:E.department)||i.stream,"সাধারণ"),Me=q(V[f]||g,"১০২"),Ne=i.photo||Ys;return e.jsxs("tr",{className:v?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:v,onChange:()=>rt(f),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:Z})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:Ne,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:G}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:T}),e.jsx("td",{style:{color:"#475569"},children:re}),e.jsx("td",{style:{color:"#475569"},children:pe}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:Me,onChange:O=>{const B=O.target.value;Pe(K=>({...K,[f]:B}))},className:"admit-table-room-input"})})]},f)})})]})})]}),ht==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Za,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(i=>{const f=H[i.key];return e.jsxs("button",{type:"button",onClick:()=>_t(i.key),className:`admit-toggle-card ${f?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${f?"active":""}`,children:f&&e.jsx(yn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:i.label}),e.jsx("div",{className:"admit-toggle-desc",children:i.desc})]})]},i.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(wt,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>U(ps),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.title,onChange:i=>U(f=>({...f,title:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.noteLabel,onChange:i=>U(f=>({...f,noteLabel:i.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.noteText,onChange:i=>U(f=>({...f,noteText:i.target.value}))})]}),(_.rules||[]).map((i,f)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",f+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:i,onChange:v=>{const Z=[..._.rules||[]];Z[f]=v.target.value,U(T=>({...T,rules:Z}))}})]},`rule-edit-${f}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.authorityLine1,onChange:i=>U(f=>({...f,authorityLine1:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.authorityLine2,onChange:i=>U(f=>({...f,authorityLine2:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:_.footerLeftBadge||"",onChange:i=>U(f=>({...f,footerLeftBadge:i.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:ge,children:Ut==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Is,{config:_},`print-back-only-${i}`))}):Oe.length>0&&ot.map((i,f)=>e.jsxs(Da.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${it} ${ue==="landscape"?"a4-landscape":""}`,children:i.map(v=>{var E,O,B,K;const Z=v._id||v.id,T=q(((E=v.user)==null?void 0:E.name)||v.name,"MD. STUDENT"),G=q(((O=v.currentEnrollment)==null?void 0:O.rollNumber)||v.rollNumber||v.roll,"—"),pe=q(v.studentId||v.admissionNumber,"—"),re=q(((B=v.currentEnrollment)==null?void 0:B.section)||v.section||(Ie!=="all"?Ie:"—"),"—"),Me=q(v.department||((K=v.currentEnrollment)==null?void 0:K.department)||v.stream,"All"),Ne=q(V[Z]||g,"১০২"),c=v.photo||Ys,w=q((Le==null?void 0:Le.name)||(Le==null?void 0:Le.title),"Annual Examination 2026"),b=q((J==null?void 0:J.name)||(J==null?void 0:J.banglaName)||(J==null?void 0:J.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[H.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:te=>{te.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:te=>{te.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:A==="bn"?q($.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:A==="bn"?q($.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:A==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),H.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:A==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:es(ae)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:T})]}),H.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Me})]}),H.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:pe})]}),H.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Ne})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:G})]}),H.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),H.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),H.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:b})]}),H.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:re})]})]}),H.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:c,alt:"Photo"})})]}),H.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:A==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:w})]}),e.jsxs("div",{className:"signatures-row",children:[H.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),H.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},`print-${Z}`)})}),_e&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(v=>e.jsx(Is,{config:_},`print-back-${f}-${v}`))})]},`print-group-${f}`))}),e.jsx("style",{ref:yt,children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          --admit-font-scale: ${bt/100};
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
          min-height: 210mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 4mm 5mm;
          padding: 4.5mm 5.5mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-card {
          min-height: 96mm;
          padding: 2.5mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-card-inner-frame {
          padding: 2.5mm 3.5mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .card-logo {
          width: 11mm;
          height: 11mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .inst-name {
          font-size: calc(12.5pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .inst-sub {
          font-size: calc(7pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .admit-pill {
          font-size: calc(8.5pt * var(--admit-font-scale, 1));
          padding: 1.5px 12px;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .issue-date-label {
          font-size: calc(7.5pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .badge-date-row {
          margin: 1.2mm 0;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .detail-row {
          font-size: calc(8.4pt * var(--admit-font-scale, 1));
          line-height: 1.3;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .detail-label {
          width: 19mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .student-photo-box {
          width: 19mm;
          height: 23mm;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .permission-statement {
          font-size: calc(8pt * var(--admit-font-scale, 1));
          margin: 1mm 0;
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .sig-title,
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .sig-name {
          font-size: calc(7.5pt * var(--admit-font-scale, 1));
        }
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-svg {
          width: 24mm;
          height: 6.5mm;
        }

        /* Backside Card ("পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য") */
        .backside-card {
          width: 100%;
          height: 100%;
          min-height: 96mm;
          background: #ffffff;
          box-sizing: border-box;
          display: flex;
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
          font-size: 11pt;
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow: 0 2px 5px rgba(13, 59, 102, 0.25);
        }
        .backside-rules-list {
          list-style: none;
          margin: 5px 0 3px 0;
          padding: 0 4px;
          display: flex;
          flex-direction: column;
          gap: 3.5px;
          position: relative;
          z-index: 4;
        }
        .backside-rule-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 8.6pt;
          line-height: 1.32;
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
          font-size: 8.5pt;
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
          margin: 3px 0 0 22px;
          font-size: 8.4pt;
          line-height: 1.28;
          font-weight: 700;
          color: #1e293b;
        }
        .backside-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 3px;
          position: relative;
          z-index: 4;
        }
        .backside-left-badge {
          display: inline-block;
          background: #0f172a;
          color: #ffffff;
          border-radius: 999px;
          padding: 1.5px 10px;
          font-size: 7.5pt;
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
          font-size: 7.5pt;
          font-weight: 700;
          color: #0d3b66;
          line-height: 1.15;
        }
        .backside-auth-line2 {
          font-size: 8pt;
          font-weight: 800;
          color: #0a2e52;
          line-height: 1.2;
        }

        /* ==============================================================
           EXACT @media print RULES (ZERO WEBSITE UI, ONLY CARDS ON A4)
           ============================================================== */
        @page {
          size: A4 ${Ut==="backside_only"||ue==="landscape"?"landscape":"portrait"};
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
      `})]})}const Pn=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],qs=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function Fn(z,F=!1){if(!z)return"—";const X=F?" (যৌথ)":"";return z===1?`🥇 ১ম স্থান${X}`:z===2?`🥈 ২য় স্থান${X}`:z===3?`🥉 ৩য় স্থান${X}`:z===4?`৪র্থ${X}`:z===5?`৫ম${X}`:z===6?`৬ষ্ঠ${X}`:z===7?`৭ম${X}`:z===8?`৮ম${X}`:z===9?`৯ম${X}`:z===10?`১০ম${X}`:`${z}তম${X}`}function pl({initialViewMode:z}){var sa,aa,na,la,ia,ra,oa,da,ca,pa,ma,xa,ha,ga,fa,ua,ba,ya,ja,va,Na,wa,ka,Sa,Ca,za,$a,Aa,Ia,_a,La,Ma,Wa,Ra,Ta;const F=jn(),X=vn(),{user:$}=Va(),{madrasahName:pt,branchName:Ae}=Us($),[Ce,mt]=d.useState([]),[Q,Xe]=d.useState([]),[Ie,kt]=d.useState(!0),[Te,M]=d.useState(null),[Ee,et]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[St,tt]=d.useState(!1),[Ct,qt]=d.useState(!1),[Ve,xt]=d.useState(null),[R,se]=d.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[V,Pe]=d.useState([]),[g,Et]=d.useState(null),[ae,zt]=d.useState([]),[ht,Bt]=d.useState([]),[he,$t]=d.useState(""),[A,At]=d.useState(""),[it,De]=d.useState(!1),[Ze,st]=d.useState([]),[ue,gt]=d.useState({}),[_e,ft]=d.useState(!1),[Ut,ut]=d.useState([]),bt=z==="routine"||(X==null?void 0:X.pathname)==="/exam-routine",Pt=z==="admit_card"||(X==null?void 0:X.pathname)==="/admit-card",[_,U]=d.useState(bt?"routine":Pt?"admit_card":"marks"),[H,Vt]=d.useState(!1),[at,Fe]=d.useState("all"),[be,rt]=d.useState([]),[ce,Oe]=d.useState([]),[Le,J]=d.useState(!1),[ze,Ft]=d.useState("landscape"),[It,ye]=d.useState(""),[ot,_t]=d.useState("all"),[ge,yt]=d.useState(null),[Zt,ts]=d.useState(!1),[Lt,i]=d.useState([]),[f,v]=d.useState(""),[Z,T]=d.useState("all"),[G,pe]=d.useState(""),[re,Me]=d.useState([]),[Ne,c]=d.useState(!1),[w,b]=d.useState(new Set),[E,O]=d.useState(""),[B,K]=d.useState("all"),[te,we]=d.useState(!1),[Y,We]=d.useState(null),[Re,He]=d.useState([]),[Ot,jt]=d.useState(!1),[Ge,Qt]=d.useState("all"),[Dt,ms]=d.useState("all"),[Ht,Ns]=d.useState("all"),[ws,Jt]=d.useState(!1),[ss,xs]=d.useState(!1),[as,Ye]=d.useState(null),[Vs,Ws]=d.useState(null),[Qe,nt]=d.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),dt=($==null?void 0:$.userType)==="guardian",ks=($==null?void 0:$.userType)==="student",de=ks||dt,[lt,Ka]=d.useState([]),[Mt,Zs]=d.useState(""),[Wt,Rs]=d.useState(null);d.useEffect(()=>{if(Te){const t=setTimeout(()=>M(null),4e3);return()=>clearTimeout(t)}},[Te]);const Gt=async(t=null)=>{kt(!0);try{const s={},a=t||Mt;dt&&a&&(s.studentId=a);const n=await P.get("/exams",{params:s});n.data.success&&mt(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),M({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{kt(!1)}},Xa=t=>{var a,n;Zs(t);const s=lt.find(l=>l._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const l=s.currentEnrollment.classLevel,o=typeof l=="object"?l:{_id:l,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Rs(o),O(o._id)}Gt(t),de&&bs(!1,t)},hs=async t=>{if(!t){Pe([]);return}try{const s=await P.get(`/students/subjects?classLevel=${t}`);s.data.success&&Pe(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},en=async()=>{try{const t=await P.get("/students/classes");t.data.success&&Xe(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};d.useEffect(()=>{(async()=>{var s,a,n,l,o,p;if(dt)try{const r=await P.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const N=r.data.data;Ka(N),Zs(N[0]._id);const m=(a=N[0].currentEnrollment)==null?void 0:a.classLevel;if(m){const y=typeof m=="object"?m:{_id:m,name:((n=N[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Rs(y),O(y._id)}Gt(N[0]._id)}else Gt()}catch(r){console.error("Error loading guardian children",r),Gt()}else if(ks){try{const r=await P.get("/students",{params:{limit:1}});if(r.data.success&&((l=r.data.data)==null?void 0:l.length)>0){const N=r.data.data[0],m=(o=N.currentEnrollment)==null?void 0:o.classLevel;if(m){const y=typeof m=="object"?m:{_id:m,name:((p=N.currentEnrollment)==null?void 0:p.className)||"শ্রেণি"};Rs(y),O(y._id)}}}catch(r){console.error("Error loading student profile for class",r)}Gt()}else Gt();en(),us()})(),de&&bs()},[]),d.useEffect(()=>{_==="student_result"&&g&&Lt.length===0&&nn(g),_==="subject_result"&&ae.length>0&&!f&&(v(ae[0]._id),Cs(ae[0]._id,Z))},[_,g,ae,Lt.length]);const Ss=t=>{se({...R,[t.target.name]:t.target.value})},tn=async t=>{var l;xt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(o=>typeof o=="object"?o._id:o):[],n=((l=t.classLevel)==null?void 0:l._id)||"";se({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&hs(n),tt(!0)},sn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await P.delete(`/exams/${t}`)).data.success&&(M({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Gt())}catch(n){console.error("Failed to delete exam",n);const l=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";M({type:"error",message:l})}},an=async t=>{var s,a,n,l;if(t.preventDefault(),R.examCategory==="monthly_test"&&((s=R.selectedSubjects)==null?void 0:s.length)!==4){M({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=R.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}qt(!0);try{let o;Ve?o=await P.patch(`/exams/${Ve}`,R):o=await P.post("/exams",R),o.data.success&&(tt(!1),xt(null),se({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),M({type:"success",message:Ve?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Gt())}catch(o){console.error("Failed to submit exam",o);const p=((l=(n=o.response)==null?void 0:n.data)==null?void 0:l.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";M({type:"error",message:p})}finally{qt(!1)}},Qs=async t=>{var a,n,l,o,p,r,N,m;if(Et(t),$t(""),At(""),st([]),gt({}),ut([]),yt(null),ye(""),_t("all"),v(""),T("all"),pe(""),Me([]),b(new Set),de){De(!0);try{const y={examId:t._id};dt&&Mt&&(y.studentId=Mt);const h=await P.get("/exams/student-results",{params:y});if((a=h.data)!=null&&a.success&&h.data.data){yt(h.data.data);const x=(n=h.data.data.results)==null?void 0:n[0];ut((x==null?void 0:x.subjects)||[])}else{const x=await P.get("/exams/marks",{params:{exam:t._id,...dt&&Mt?{student:Mt}:{}}});ut(((o=(l=x.data)==null?void 0:l.data)==null?void 0:o.marks)||[])}}catch(y){console.error("Failed to load student detailed results",y);try{const h=await P.get("/exams/marks",{params:{exam:t._id,...dt&&Mt?{student:Mt}:{}}});ut(((r=(p=h.data)==null?void 0:p.data)==null?void 0:r.marks)||[])}catch{}}finally{De(!1)}return}const s=((N=t.classLevel)==null?void 0:N._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const y=await P.get(`/students/subjects?classLevel=${s}`);if(y.data.success){let j=y.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const S=t.selectedSubjects.map(L=>String(typeof L=="object"?L._id:L));j=j.filter(L=>S.includes(String(L._id)))}zt(j)}const h=await P.get(`/students/sections?classLevel=${s}`);h.data.success&&Bt(h.data.data.sections||[]);const x=await P.get("/students",{params:{classLevel:s,limit:300}});if(x.data.success){const j=x.data.data;let S=Array.isArray(j)?j:(j==null?void 0:j.students)||[];if(S.length===0){const D=(m=(await P.get("/students",{params:{limit:500}})).data)==null?void 0:m.data;S=Array.isArray(D)?D:(D==null?void 0:D.students)||[]}S.sort((L,D)=>{var le,oe;return Ue(((le=L.currentEnrollment)==null?void 0:le.rollNumber)||L.roll)-Ue(((oe=D.currentEnrollment)==null?void 0:oe.rollNumber)||D.roll)}),i(S)}}catch(y){console.error("Failed to fetch subjects/sections for mark entry",y)}},nn=async t=>{var n,l,o;const s=t||g;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const p={limit:300};a&&(p.classLevel=a);const r=await P.get("/students",{params:p});if((l=r.data)!=null&&l.success){const N=r.data.data;let m=Array.isArray(N)?N:(N==null?void 0:N.students)||[];if(m.length===0&&a){const h=(o=(await P.get("/students",{params:{limit:500}})).data)==null?void 0:o.data;m=Array.isArray(h)?h:(h==null?void 0:h.students)||[]}m.sort((y,h)=>{var x,j;return Ue(((x=y.currentEnrollment)==null?void 0:x.rollNumber)||y.roll)-Ue(((j=h.currentEnrollment)==null?void 0:j.rollNumber)||h.roll)}),i(m)}}catch(p){console.warn("Failed to load class students:",p)}},Ts=async t=>{var n,l;const a=Xt(t||It);if(!a||!String(a).trim()){M({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}ts(!0),yt(null);try{const o=await P.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:g==null?void 0:g._id}});o.data.success&&yt(o.data.data)}catch(o){console.error("Failed to load student result",o);const p=((l=(n=o.response)==null?void 0:n.data)==null?void 0:l.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";M({type:"error",message:p})}finally{ts(!1)}},Cs=async(t,s)=>{const a=t!==void 0?t:f,n=s!==void 0?s:Z;if(!a){M({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}c(!0);try{const l={exam:g==null?void 0:g._id,subject:a},o=await P.get("/exams/marks",{params:l});if(o.data.success){let p=o.data.data.marks||[];n&&n!=="all"&&(p=p.filter(N=>{var h,x,j,S;const m=(h=N.student)==null?void 0:h.currentEnrollment,y=typeof(m==null?void 0:m.section)=="object"?((x=m==null?void 0:m.section)==null?void 0:x.name)||((j=m==null?void 0:m.section)==null?void 0:j._id):(m==null?void 0:m.section)||((S=N.student)==null?void 0:S.section);return String(y||"")===String(n)})),Me(p);const r=new Set(p.map(N=>{var m;return String(((m=N.student)==null?void 0:m._id)||N._id)}));if(b(r),ae.length===0&&p.length>0){const N={};p.forEach(y=>{y.subject&&typeof y.subject=="object"&&y.subject._id&&(N[y.subject._id]=y.subject)});const m=Object.values(N);m.length>0&&zt(m)}}}catch(l){console.error("Failed to load subject marks",l),M({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{c(!1)}},Js=t=>{const s=t.map(l=>{var o;return String(((o=l.student)==null?void 0:o._id)||l._id)}),a=s.length>0&&s.every(l=>w.has(l)),n=new Set(w);a?s.forEach(l=>n.delete(l)):s.forEach(l=>n.add(l)),b(n)},ln=t=>{const s=new Set(w),a=String(t);s.has(a)?s.delete(a):s.add(a),b(s)},Es=()=>{var N;if(!ge||!ge.results||ge.results.length===0){M({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=ge.student||{},s=ge.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",l=t.department||"";let o="—";n&&l?o=`${n} (${l})`:n?o=n:l&&(o=l);const p=`
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
      ${os({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(g==null?void 0:g.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((N=g==null?void 0:g.classLevel)==null?void 0:N.name)||"—"}</div>
          <div><strong>রোল নম্বর:</strong> ${t.rollNumber||"—"}</div>
          <div><strong>শাখা / বিভাগ:</strong> ${o}</div>
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
          ${(s.subjects||[]).map((m,y)=>`
            <tr>
              <td class="text-center">${y+1}</td>
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

      ${ds(Ee)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(p),r.document.close())},Ks=t=>{var l,o,p,r,N,m,y;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((l=g==null?void 0:g.classLevel)==null?void 0:l.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Es,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((h,x)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:x+1}),e.jsx("td",{className:"font-semibold",children:h.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:h.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:h.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:h.marksObtained!==null&&typeof h.marksObtained=="object"?h.marksObtained.marksObtained:h.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[h.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(h.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:h.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(h.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${h.isPassed?"badge-active":"badge-danger"}`,children:h.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},h.markId||x))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((o=n.term1)==null?void 0:o.obtained)||0," / ",((p=n.term1)==null?void 0:p.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((N=n.term2)==null?void 0:N.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((m=n.term3)==null?void 0:m.obtained)||0," / ",((y=n.term3)==null?void 0:y.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},Xs=t=>{var h;const s=(t||re).filter(x=>{var j;return w.has(String(((j=x.student)==null?void 0:j._id)||x._id))});if(s.length===0){M({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=ae.find(x=>x._id===f),n=(a==null?void 0:a.name)||"বিষয়",l=Number(a==null?void 0:a.totalMarks)||100,o=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),p=s.length,r=s.filter(x=>{const j=Number(x.marksObtained)||0;return(l>0?j/l*100:j)>=33}).length,N=p>0?Math.round(r/p*100):0,m=`
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
      ${os({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((h=g==null?void 0:g.classLevel)==null?void 0:h.name)||"")+" | <strong>পূর্ণমান:</strong> "+l+" | <strong>পরীক্ষা:</strong> "+((g==null?void 0:g.name)||""),metaRight:"<strong>তারিখ:</strong> "+o})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${p} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${p-r} জন</div>
        <div><strong>পাসের হার:</strong> ${N}%</div>
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
          ${s.map((x,j)=>{var me,Be,k,u,W,I,ee,C,fe,xe,je,ve,vt,ct,Se,qe,Nt,Ea,Ba,Pa,Fa;const S=Number(x.marksObtained)||0,L=l>0?Math.round(S/l*100):S,D=Rt(S,l),le=L>=33,oe=((me=x.student)==null?void 0:me.fullName)||((k=(Be=x.student)==null?void 0:Be.user)==null?void 0:k.fullName)||`${((W=(u=x.student)==null?void 0:u.user)==null?void 0:W.firstName)||""} ${((ee=(I=x.student)==null?void 0:I.user)==null?void 0:ee.lastName)||""}`.trim()||"—",ke=((fe=(C=x.student)==null?void 0:C.currentEnrollment)==null?void 0:fe.rollNumber)||((xe=x.student)==null?void 0:xe.roll)||"—",$e=((je=x.student)==null?void 0:je.studentId)||"—",ie=typeof((vt=(ve=x.student)==null?void 0:ve.currentEnrollment)==null?void 0:vt.section)=="object"?((qe=(Se=(ct=x.student)==null?void 0:ct.currentEnrollment)==null?void 0:Se.section)==null?void 0:qe.name)||((Ba=(Ea=(Nt=x.student)==null?void 0:Nt.currentEnrollment)==null?void 0:Ea.section)==null?void 0:Ba._id):((Fa=(Pa=x.student)==null?void 0:Pa.currentEnrollment)==null?void 0:Fa.section)||"—";return`
              <tr>
                <td class="text-center">${j+1}</td>
                <td class="text-center font-bold">${ke}</td>
                <td class="font-bold">${oe}</td>
                <td class="text-center">${$e}</td>
                <td class="text-center">${ie}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${S} / ${l}</td>
                <td class="text-center font-bold">${L}%</td>
                <td class="text-center font-bold">${D}</td>
                <td class="text-center font-bold" style="color: ${le?"#059669":"#dc2626"};">${le?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${ds(Ee)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,y=window.open("","_blank");y&&(y.document.write(m),y.document.close())},Bs=()=>{var x;if(!Ze||Ze.length===0){M({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=ae.find(j=>j._id===he),s=he==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,l=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),o=A==="all"?"সকল সেকশন":`সেকশন ${A}`,p=Ze.filter(j=>{const S=ue[j._id];return S!==void 0&&S!==""&&!isNaN(S)}).length,r=Ze.filter(j=>{const S=ue[j._id];return S===void 0||S===""||isNaN(S)?!1:(n>0?Number(S)/n*100:Number(S))>=33}).length,N=p>0?Math.round(r/p*100):0,m=[...Ze].sort((j,S)=>{var L,D;return Ue(((L=j.currentEnrollment)==null?void 0:L.rollNumber)||j.roll)-Ue(((D=S.currentEnrollment)==null?void 0:D.rollNumber)||S.roll)}),y=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(g==null?void 0:g.name)||""})</title>
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
      ${os({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((g==null?void 0:g.name)||"")+" | <strong>শ্রেণি:</strong> "+(((x=g==null?void 0:g.classLevel)==null?void 0:x.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+o,metaRight:"<strong>তারিখ:</strong> "+l})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Ze.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${p} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Ze.length-r} জন</div>
          <div><strong>পাসের হার:</strong> ${N}%</div>
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
          ${m.map((j,S)=>{var W,I,ee,C,fe,xe,je,ve,vt,ct;const L=j._id,D=((W=j.currentEnrollment)==null?void 0:W.rollNumber)||j.roll||"—",le=((I=j.user)==null?void 0:I.fullName)||`${((ee=j.user)==null?void 0:ee.firstName)||""} ${((C=j.user)==null?void 0:C.lastName)||""}`.trim()||"—",oe=j.studentId||"—",ke=typeof((fe=j.currentEnrollment)==null?void 0:fe.section)=="object"?((je=(xe=j.currentEnrollment)==null?void 0:xe.section)==null?void 0:je.name)||((vt=(ve=j.currentEnrollment)==null?void 0:ve.section)==null?void 0:vt._id):((ct=j.currentEnrollment)==null?void 0:ct.section)||j.section||A;if(s){const Se=Array.isArray(ue[L])?ue[L]:[],qe=Se.length>0?Se.map(Nt=>Nt.subjectName+": "+Nt.marksObtained+" ("+Nt.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${S+1}</td>
                  <td class="text-center font-bold">${D}</td>
                  <td class="font-bold">${le}</td>
                  <td class="text-center">${oe}</td>
                  <td class="text-center">${ke}</td>
                  <td style="font-size: 10px;">${qe}</td>
                </tr>
              `}const $e=ue[L],ie=$e!==void 0&&$e!==""&&!isNaN($e),me=ie?Number($e):null,Be=ie?n>0?Math.round(me/n*100):me:null,k=ie?Rt(me,n):"—",u=ie?Be>=33:!1;return`
              <tr>
                <td class="text-center">${S+1}</td>
                <td class="text-center font-bold">${D}</td>
                <td class="font-bold">${le}</td>
                <td class="text-center">${oe}</td>
                <td class="text-center">${ke}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${ie?me+" / "+n:"—"}</td>
                <td class="text-center font-bold">${ie?Be+"%":"—"}</td>
                <td class="text-center font-bold">${k}</td>
                <td class="text-center font-bold" style="color: ${ie?u?"#059669":"#dc2626":"#64748b"};">
                  ${ie?u?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${ds(Ee)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,h=window.open("","_blank");h&&(h.document.write(y),h.document.close())},rn=async()=>{if(!he||!A){M({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}De(!0);try{const t={classLevel:g.classLevel._id,limit:100};A!=="all"&&(t.section=A);const a=(await P.get("/students",{params:t})).data.data||[];a.sort((p,r)=>{var y,h;const N=Ue(((y=p.currentEnrollment)==null?void 0:y.rollNumber)||p.roll),m=Ue(((h=r.currentEnrollment)==null?void 0:h.rollNumber)||r.roll);return N-m}),st(a);const n={exam:g._id};he!=="all"&&(n.subject=he);const o=(await P.get("/exams/marks",{params:n})).data.data.marks||[];if(he==="all"){const p={};a.forEach(r=>{p[r._id]=[]}),o.forEach(r=>{var m,y;const N=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;N&&p[N]&&p[N].push({subjectName:((y=r.subject)==null?void 0:y.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),gt(p)}else{const p={};a.forEach(r=>{p[r._id]=""}),o.forEach(r=>{var m;const N=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;N&&(p[N]=r.marksObtained??"")}),gt(p)}}catch(t){console.error("Failed to load students for marks entry",t),M({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{De(!1)}},gs=async(t=at,s=g)=>{var l,o,p,r,N,m,y,h;const a=s||g;if(!a)return;const n=((l=a.classLevel)==null?void 0:l._id)||(typeof a.classLevel=="string"?a.classLevel:null);Vt(!0);try{if(de){const k=await P.get(`/exams/${a._id}/rankings`);if(k.data.success&&k.data.data){const{rankings:u=[],evaluatedSubjects:W=[]}=k.data.data;Oe(W);const ee=(t&&t!=="all"?u.filter(C=>String(C.section||"")===String(t)):u).map((C,fe)=>{const xe={_id:C.studentId,studentId:C.studentCode||C.studentId,user:{fullName:C.name,firstName:C.name},currentEnrollment:{rollNumber:C.rollNumber,section:C.section}},je={};C.subjectMarks&&Object.keys(C.subjectMarks).forEach(ct=>{const Se=C.subjectMarks[ct],qe=Se!==null&&typeof Se=="object"?Se.marksObtained:Se,Nt=Se!==null&&typeof Se=="object"&&Se.grade||Rt(qe);je[ct]={marksObtained:qe!=null&&typeof qe!="object"?qe:"",grade:Nt||""}});const ve=C.isPassed!==void 0?C.isPassed:C.grade!=="F"&&!C.isIncomplete,vt=C.gpa||(ve&&C.percentage>=33?C.percentage>=80?"5.00":C.percentage>=70?"4.00":C.percentage>=60?"3.50":C.percentage>=50?"3.00":C.percentage>=40?"2.00":"1.00":"0.00");return{student:xe,studentMarksObj:je,totalObtained:C.totalObtained,totalFullMarks:C.totalMaxMarks,percentage:C.percentage,overallGrade:C.grade,gpa:vt,isPassed:ve,subjectsCountWithMarks:Object.keys(je).length,rankNum:C.rank||fe+1,rankText:Fn(C.rank||fe+1),roll:Ue(C.rollNumber)}});rt(ee);return}}const j=((p=(o=(await P.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:o.data)==null?void 0:p.marks)||[];let S=[];if(n)try{S=((N=(r=(await P.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:N.subjects)||[]}catch(k){console.warn("Subject fetch warning:",k)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const k=a.selectedSubjects.map(u=>String(typeof u=="object"?u._id:u));S=S.filter(u=>k.includes(String(u._id)))}let L=S.filter(k=>j.some(u=>{var I,ee;const W=typeof u.subject=="object"?((I=u.subject)==null?void 0:I._id)||((ee=u.subject)==null?void 0:ee.id):u.subject;return String(W)===String(k._id)&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""}));if(L.length===0&&j.length>0){const k={};j.forEach(u=>{var I,ee;const W=typeof u.subject=="object"?((I=u.subject)==null?void 0:I._id)||((ee=u.subject)==null?void 0:ee.id):u.subject;if(W&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""){const C=typeof u.subject=="object"?u.subject.name||u.subject.code:"বিষয়",fe=typeof u.subject=="object"?u.subject.code:"",xe=typeof u.subject=="object"?u.subject.totalMarks||u.totalMarks||100:u.totalMarks||100;k[String(W)]={_id:String(W),name:C,code:fe,totalMarks:Number(xe)||100}}}),L=Object.values(k)}L.length===0&&S.length>0&&(L=S),Oe(L);const D=L.reduce((k,u)=>k+(Number(u.totalMarks)||100),0);let le=[];if(n)try{const k={classLevel:n,limit:300};t&&t!=="all"&&(k.section=t),le=((m=(await P.get("/students",{params:k})).data)==null?void 0:m.data)||[]}catch(k){console.warn("Students fetch warning:",k)}if(le.length===0){const k={};j.forEach(u=>{u.student&&typeof u.student=="object"&&u.student._id&&(k[u.student._id]=u.student)}),le=Object.values(k)}const oe={};j.forEach(k=>{var C,fe,xe,je;const u=typeof k.student=="object"?((C=k.student)==null?void 0:C._id)||((fe=k.student)==null?void 0:fe.id):k.student,W=typeof k.subject=="object"?((xe=k.subject)==null?void 0:xe._id)||((je=k.subject)==null?void 0:je.id):k.subject;if(!u||!W)return;const I=String(u),ee=String(W);oe[I]||(oe[I]={}),oe[I][ee]={marksObtained:k.marksObtained,grade:k.grade}});const ke=le.map(k=>{var vt;const u=oe[k._id]||{};let W=0,I=0,ee=0;L.forEach(ct=>{const Se=u[ct._id];if(Se&&Se.marksObtained!==null&&Se.marksObtained!==void 0&&Se.marksObtained!==""){const qe=Number(Se.marksObtained);W+=qe,I+=1;const Nt=Number(ct.totalMarks)||100;qe<Nt*.33&&(ee+=1)}});const C=D>0?Number((W/D*100).toFixed(1)):0,fe=L.length>0&&I>0&&I<L.length,xe=I>0&&ee===0&&!fe,je=xe?Rt(C):ee>0?"F":fe?Rt(C):I>0?"F":"—";let ve="—";return I>0&&(!xe||C<33?ve="0.00":C>=80?ve="5.00":C>=70?ve="4.00":C>=60?ve="3.50":C>=50?ve="3.00":C>=40?ve="2.00":ve="1.00"),{student:k,studentMarksObj:u,totalObtained:W,totalFullMarks:D,subjectsCountWithMarks:I,failedCount:ee,isIncomplete:fe,percentage:C,isPassed:xe,overallGrade:je,gpa:ve,roll:Ue(((vt=k.currentEnrollment)==null?void 0:vt.rollNumber)||k.roll)}});ke.sort((k,u)=>k.subjectsCountWithMarks===0&&u.subjectsCountWithMarks===0?k.roll-u.roll:k.subjectsCountWithMarks===0?1:u.subjectsCountWithMarks===0||k.failedCount===0&&u.failedCount>0?-1:k.failedCount>0&&u.failedCount===0?1:u.totalObtained!==k.totalObtained?u.totalObtained-k.totalObtained:k.roll-u.roll);let $e=1,ie=null,me=0;const Be=ke.map(k=>{if(k.subjectsCountWithMarks===0)return{...k,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};me+=1,ie!==null&&k.totalObtained===ie||($e=me,ie=k.totalObtained);const u=$e,W=ke.filter(ee=>ee.subjectsCountWithMarks>0&&ee.totalObtained===k.totalObtained).length>1;let I="";return u===1?I=W?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":u===2?I=W?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":u===3?I=W?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":u===4?I=W?"৪র্থ (যৌথ)":"৪র্থ":u===5?I=W?"৫ম (যৌথ)":"৫ম":u===6?I=W?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":u===7?I=W?"৭ম (যৌথ)":"৭ম":u===8?I=W?"৮ম (যৌথ)":"৮ম":u===9?I=W?"৯ম (যৌথ)":"৯ম":u===10?I=W?"১০ম (যৌথ)":"১০ম":I=W?`${u}তম (যৌথ)`:`${u}তম`,k.failedCount>0?I+=" (অনুত্তীর্ণ)":k.isIncomplete&&(I+=" (অসম্পূর্ণ)"),{...k,rankNum:u,rankText:I}});rt(Be)}catch(x){console.error("Error loading merit list:",x);const j=((h=(y=x.response)==null?void 0:y.data)==null?void 0:h.message)||x.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";M({type:"error",message:j})}finally{Vt(!1)}},fs=async(t,s="all")=>{var a,n;if(t){we(!0);try{const l={classLevel:t};s&&s!=="all"&&(l.section=s);const o=await P.get("/exams/annual-rankings",{params:l});o.data.success&&We(o.data.data)}catch(l){console.error("Failed to load annual rankings",l),M({type:"error",message:((n=(a=l.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{we(!1)}}},on=()=>{var n,l,o;if(!Y||!Y.rankings||Y.rankings.length===0){M({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=Y.classLevel)==null?void 0:n.name)||""}</title>
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
      ${os({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((l=Y.classLevel)==null?void 0:l.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((o=Y.classLevel)==null?void 0:o.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${Y.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${Y.rankings.map((p,r)=>`
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

      ${ds(Ee)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ns=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},us=async(t=Ge,s=Dt,a=Ht,n=!1)=>{var l,o;jt(!0);try{const p={};t&&t!=="all"&&(p.stream=t),s&&s!=="all"&&(p.exam=s),a&&a!=="all"&&(p.classLevel=a);const r=await P.get("/exams/routines",{params:p});r.data.success&&He(r.data.data.routines||[])}catch(p){console.error("Failed to load routines",p),n&&M({type:"error",message:((o=(l=p.response)==null?void 0:l.data)==null?void 0:o.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{jt(!1)}},bs=async(t=!1,s=null)=>{jt(!0);try{const a={},n=s||Mt;dt&&n&&(a.studentId=n);const l=await P.get("/exams/student-routine",{params:a});l.data.success&&(Ws(l.data.data),He(l.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{jt(!1)}},Ps=(t=null)=>{var a,n,l,o,p,r;const s=(t==null?void 0:t.classLevel)||((a=g==null?void 0:g.classLevel)==null?void 0:a._id)||((n=Q[0])==null?void 0:n._id)||"";s&&hs(s),t?(Ye(t._id),nt({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(Ye(null),nt({title:g?`${g.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(g==null?void 0:g._id)||((l=Ce[0])==null?void 0:l._id)||"",examName:(g==null?void 0:g.name)||((o=Ce[0])==null?void 0:o.name)||"",classLevel:s,className:((p=g==null?void 0:g.classLevel)==null?void 0:p.name)||((r=Q[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),Jt(!0)},dn=()=>{if(!V||V.length===0){M({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=V.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));nt(s=>({...s,schedule:t})),M({type:"success",message:`${V.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},cn=async t=>{var s,a;if(t&&t.preventDefault(),!Qe.title.trim()){M({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}xs(!0);try{const n={...Qe,_id:as},l=await P.post("/exams/routines",n);l.data.success&&(M({type:"success",message:l.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),Jt(!1),us())}catch(n){console.error("Failed to save routine",n),M({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{xs(!1)}},pn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await P.delete(`/exams/routines/${t}`)).data.success&&(M({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),He(l=>l.filter(o=>o._id!==t)))}catch(n){console.error("Failed to delete routine",n),M({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},mn=()=>{nt(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},ea=t=>{nt(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},ne=(t,s,a)=>{nt(n=>{const l=[...n.schedule],o={...l[t],[s]:a};if(s==="date"&&(o.day=ns(a)),s==="subject"){const p=V&&V.find(r=>r._id===a)||ae.find(r=>r._id===a);p?(o.subject=p._id,o.subjectName=p.name,o.totalMarks=Number(p.totalMarks)||100):(o.subject=a,o.subjectName=a)}return l[t]=o,{...n,schedule:l}})},xn=t=>{if(!t||!t.schedule||t.schedule.length===0){M({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),l=`
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
          ${t.schedule.map((o,p)=>`
            <tr>
              <td class="text-center font-bold" style="color: #0f766e;">${Je(p+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${es(o.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${o.day||ns(o.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${o.subjectName||o.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${Je(o.totalMarks||100)}</td>
              <td class="text-center" style="font-weight: 700; font-size: 10.5px; color: #1e293b;">
                ${o.startTime||"—"} থেকে ${o.endTime||"—"}
              </td>
              <td class="text-center">
                <span style="font-weight: 700; background: #e2e8f0; padding: 2.5px 8px; border-radius: 4px; font-size: 10px;">${o.roomNo||"১০১"}</span>
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
    `;s.document.open(),s.document.write(l),s.document.close()},hn=(t=ze,s=Ee)=>{var h;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(g==null?void 0:g.name)||"পরীক্ষা",l=((h=g==null?void 0:g.classLevel)==null?void 0:h.name)||"সকল শ্রেণি",o=at==="all"?"সকল সেকশন":`সেকশন ${at}`,p=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let N="";be.forEach((x,j)=>{var ie,me,Be,k;const S=x.student,L=((ie=S.currentEnrollment)==null?void 0:ie.rollNumber)||S.roll||"—",D=((me=S.user)==null?void 0:me.fullName)||`${((Be=S.user)==null?void 0:Be.firstName)||""} ${((k=S.user)==null?void 0:k.lastName)||""}`.trim()||S.studentId||"—",le=S.studentId||"—",oe=x.rankNum===1?"#fef3c7":x.rankNum===2?"#f1f5f9":x.rankNum===3?"#ffedd5":"transparent",ke=x.rankNum===1?"🥇 ":x.rankNum===2?"🥈 ":x.rankNum===3?"🥉 ":"",$e=ce.map(u=>{var xe,je;const W=(je=(xe=x.studentMarksObj)==null?void 0:xe[String(u._id)])==null?void 0:je.marksObtained,I=W!==null&&typeof W=="object"?W.marksObtained??"":W??"",ee=I!=null&&I!=="",C=Number(u.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${ee&&Number(I)<C*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${ee?I:"—"}</td>`}).join("");N+=`
        <tr style="background-color: ${oe};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${Je(j+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${D}</div>
            <div class="student-meta-text">আইডি: ${le}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${L}</td>
          ${$e}
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
      `});const m=ce.map(x=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${x.name}</div>
        <div class="sub-mark-box">(${x.totalMarks||100})</div>
      </th>
    `).join(""),y=`<!DOCTYPE html>
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
          ${os({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${l} | <strong>সেকশন:</strong> ${o}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${be.length} জন | <strong>তারিখ:</strong> ${p}`})}
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
            ${N}
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
    </html>`;a.document.open(),a.document.write(y),a.document.close()},gn=(t,s)=>{gt(a=>({...a,[t]:s}))},Rt=(t,s=100)=>{const a=Xt(t),n=parseFloat(a);if(isNaN(n))return"—";const l=Number(s)||100,o=l>0?n/l*100:n;return o>=80?"A+":o>=70?"A":o>=60?"A-":o>=50?"B":o>=40?"C":o>=33?"D":"F"},ls=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",fn=async()=>{const t=ae.find(l=>l._id===he),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(ue).map(l=>{const o=ue[l],p=Xt(o);return{studentId:l,marksObtained:p===""?null:parseFloat(p)}});if(a.length===0){M({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(l=>l.marksObtained!==null&&l.marksObtained>s)){M({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}ft(!0);try{const l={exam:g._id,subject:he,marks:a};(await P.post("/exams/marks",l)).data.success&&M({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(l){console.error("Failed to save marks",l),M({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{ft(!1)}},un=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},bn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Fs=()=>{tt(!1),xt(null),se({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),Pe([])},ta=(t=!1)=>{var n,l,o,p;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes($==null?void 0:$.userType)||((l=(n=$==null?void 0:$.permissions)==null?void 0:n.includes)==null?void 0:l.call(n,"academic.manage"))||((p=(o=$==null?void 0:$.permissions)==null?void 0:o.includes)==null?void 0:p.call(o,"exam.manage")),a=Re.filter(r=>{if(t&&g){if(r.exam&&r.exam!==g._id)return!1}else if(Dt!=="all"&&r.exam!==Dt)return!1;return!(Ge!=="all"&&r.stream!==Ge||Ht!=="all"&&r.classLevel!==Ht)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{U("marks"),Et(null)},title:"ফিরে যান",children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Tt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&g?`পরীক্ষার রুটিন — ${g.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:de?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{de?bs(!0):us(Ge,Dt,Ht,!0)},disabled:Ot,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Os,{size:14,className:Ot?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ps(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি"})]})]})]}),!de&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${Ge==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Qt("all"),children:["সকল বিভাগ (",Re.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ge==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Qt("noorani"),children:["📖 নূরানী বিভাগ (",Re.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ge==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Qt("hifz"),children:["🕌 হিফজ বিভাগ (",Re.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Ge==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Qt("kitab"),children:["📚 কিতাব বিভাগ (",Re.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:Dt,onChange:r=>ms(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),Ce.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Ht,onChange:r=>Ns(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),Q.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),Ot?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Tt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:de?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ps(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{const N=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:N.bg,color:N.color,border:`1px solid ${N.border}`},children:N.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>xn(r),style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(Ke,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Ps(r),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Ds,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>pn(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx($s,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,y)=>e.jsxs("tr",{style:{background:y%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:Je(y+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Tt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:es(m.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:m.day||ns(m.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(zs,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:m.subjectName||m.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[Je(m.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ha,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ga,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})})]},y)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,y)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:Je(y+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:es(m.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",m.day||ns(m.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Ga,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(zs,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:m.subjectName||m.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[Je(m.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ha,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})]},y)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[Te&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:Te.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[Te.type==="success"?e.jsx(Nn,{size:18}):e.jsx(vs,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:Te.message})]}),g?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:pt}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",g.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((sa=g.classLevel)==null?void 0:sa.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Et(null),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:de?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",Ae," • ",g.name," • ",((aa=g.classLevel)==null?void 0:aa.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{de||_==="student_result"?Es():_==="subject_result"?Xs():_==="merit"||_==="merit_list"?J(!0):Bs()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16})," ",de?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Ln,{selectedRoles:Ee,onChange:t=>{et(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(_n,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${g.name}`,metaLeft:`শ্রেণি: ${((na=g.classLevel)==null?void 0:na.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),de&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>U("student_result"),children:[e.jsx(is,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{U("merit"),gs(at)},children:[e.jsx(Kt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{U("routine"),bs()},children:[e.jsx(Tt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!de&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>U("marks"),children:[e.jsx(Ds,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>U("student_result"),children:[e.jsx(is,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{U("subject_result"),!f&&ae.length>0&&(v(ae[0]._id),Cs(ae[0]._id,Z))},children:[e.jsx(zs,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{U("merit"),be.length===0&&gs(at)},children:[e.jsx(Kt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{U("routine"),ms((g==null?void 0:g._id)||"all"),us("all",(g==null?void 0:g._id)||"all","all")},children:[e.jsx(Tt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>U("seat_plan"),children:[e.jsx(Yt,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>U("admit_card"),children:[e.jsx(wt,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),_==="marks"&&e.jsxs(e.Fragment,{children:[!de&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:he,onChange:t=>{$t(t.target.value),st([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ae.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:A,onChange:t=>{At(t.target.value),st([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:rn,disabled:it||!he||!A||ae.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ls,{size:16})," লোড করুন"]})]}),ae.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(vs,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),it?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):de?ge&&((la=ge.results)==null?void 0:la.length)>0?Ks(ge):Ut.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(wt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[($==null?void 0:$.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Ut.map(t=>{var l,o,p;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=Rt(a);return e.jsxs("tr",{children:[($==null?void 0:$.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(l=t.student)==null?void 0:l.firstName," ",(o=t.student)==null?void 0:o.lastName]})}),e.jsx("td",{className:"font-semibold",children:(p=t.subject)==null?void 0:p.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Ze.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(wt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Ze.map((t,s)=>{var m,y,h,x;const a=t._id,n=((m=t.currentEnrollment)==null?void 0:m.rollNumber)||"—",l=((y=t.user)==null?void 0:y.fullName)||`${((h=t.user)==null?void 0:h.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim();if(he==="all"){const j=Array.isArray(ue[a])?ue[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Je(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:j.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:j.map((S,L)=>{var D;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[S.subjectName,": ",typeof S.marksObtained=="object"?(D=S.marksObtained)==null?void 0:D.marksObtained:S.marksObtained," (",S.grade,")"]},L)})})})]},a)}const o=ae.find(j=>j._id===he),p=Number(o==null?void 0:o.totalMarks)||100,r=ue[a]??"",N=Rt(r,p);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Je(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(Xt(r))>p?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${p}`,value:r,onChange:j=>{const S=j.target.value;/^[0-9০-৯.]*$/.test(S)&&gn(a,S)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(N)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:N})})]},a)})})]}),he!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Bs,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:fn,disabled:_e,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Wn,{size:16})," ",_e?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),_==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!de&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:ot,onChange:t=>_t(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((ia=ge==null?void 0:ge.student)==null?void 0:ia._id)||"",onChange:t=>{const s=t.target.value;s&&(ye(s),Ts(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),Lt.filter(t=>{var a,n,l,o,p,r;if(ot==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((l=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:l.name)||((p=(o=t.currentEnrollment)==null?void 0:o.section)==null?void 0:p._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(ot)}).map(t=>{var l,o,p,r;const s=((l=t.user)==null?void 0:l.fullName)||`${((o=t.user)==null?void 0:o.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:It,onChange:t=>ye(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Ts()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ts(),disabled:Zt||!It.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Ls,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),ge&&((ra=ge.results)==null?void 0:ra.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Es,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Zt?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ge?((oa=ge.results)==null?void 0:oa.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):Ks(ge):e.jsxs("div",{className:"card empty-state",children:[e.jsx(is,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),_==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:f,onChange:t=>{const s=t.target.value;v(s),s&&Cs(s,Z)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ae.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Z,onChange:t=>{const s=t.target.value;T(s),f&&Cs(f,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:G,onChange:t=>pe(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=re.filter(s=>{var p,r,N,m,y,h,x,j,S,L;if(!G.trim())return!0;const a=Xt(G.trim().toLowerCase()),n=(((p=s.student)==null?void 0:p.fullName)||((N=(r=s.student)==null?void 0:r.user)==null?void 0:N.fullName)||`${((y=(m=s.student)==null?void 0:m.user)==null?void 0:y.firstName)||""} ${((x=(h=s.student)==null?void 0:h.user)==null?void 0:x.lastName)||""}`).toLowerCase(),l=String(((S=(j=s.student)==null?void 0:j.currentEnrollment)==null?void 0:S.rollNumber)||"").toLowerCase(),o=String(((L=s.student)==null?void 0:L.studentId)||"").toLowerCase();return n.includes(G.toLowerCase())||l.includes(a)||o.includes(a)});Xs(t)},disabled:Ne||re.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),Ne?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):f?(()=>{const t=ae.find(h=>h._id===f),s=Number(t==null?void 0:t.totalMarks)||100,a=re.filter(h=>{var D,le,oe,ke,$e,ie,me,Be,k,u;if(!G.trim())return!0;const x=Xt(G.trim().toLowerCase()),j=(((D=h.student)==null?void 0:D.fullName)||((oe=(le=h.student)==null?void 0:le.user)==null?void 0:oe.fullName)||`${(($e=(ke=h.student)==null?void 0:ke.user)==null?void 0:$e.firstName)||""} ${((me=(ie=h.student)==null?void 0:ie.user)==null?void 0:me.lastName)||""}`).toLowerCase(),S=String(((k=(Be=h.student)==null?void 0:Be.currentEnrollment)==null?void 0:k.rollNumber)||"").toLowerCase(),L=String(((u=h.student)==null?void 0:u.studentId)||"").toLowerCase();return j.includes(G.toLowerCase())||S.includes(x)||L.includes(x)}),n=a.length,l=a.map(h=>Number(h.marksObtained)||0),o=l.length>0?Math.max(...l):0,p=l.length>0?(l.reduce((h,x)=>h+x,0)/l.length).toFixed(1):0,r=a.filter(h=>{const x=Number(h.marksObtained)||0;return(s>0?x/s*100:x)>=33}).length,N=n>0?Math.round(r/n*100):0,m=a.map(h=>{var x;return String(((x=h.student)==null?void 0:x._id)||h._id)}),y=m.length>0&&m.every(h=>w.has(h));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[o," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:p})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[N,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:y,onChange:()=>Js(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",w.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(vs,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:y,onChange:()=>Js(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(h=>{var ie,me,Be,k,u,W,I,ee,C,fe,xe,je,ve;const x=String(((ie=h.student)==null?void 0:ie._id)||h._id),j=w.has(x),S=Number(h.marksObtained)||0,L=s>0?Math.round(S/s*100):S,D=Rt(S,s),le=L>=33,oe=((me=h.student)==null?void 0:me.fullName)||((k=(Be=h.student)==null?void 0:Be.user)==null?void 0:k.fullName)||`${((W=(u=h.student)==null?void 0:u.user)==null?void 0:W.firstName)||""} ${((ee=(I=h.student)==null?void 0:I.user)==null?void 0:ee.lastName)||""}`.trim()||"—",ke=((fe=(C=h.student)==null?void 0:C.currentEnrollment)==null?void 0:fe.rollNumber)||"—",$e=((xe=h.student)==null?void 0:xe.studentId)||"—";return e.jsxs("tr",{style:{background:j?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:j,onChange:()=>ln(x),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:ke}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:oe}),((ve=(je=h.student)==null?void 0:je.currentEnrollment)==null?void 0:ve.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",h.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:$e}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[S," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[L,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(D)}`,style:{minWidth:"40px",justifyContent:"center"},children:D})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${le?"badge-active":"badge-danger"}`,children:le?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},x)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(zs,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),_==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:at,onChange:t=>{const s=t.target.value;Fe(s),gs(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),js.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>gs(at),disabled:H,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:H?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!de&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>F("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(wn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>J(!0),disabled:H||be.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ke,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[be.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[be.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[be.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((pa=(ca=(da=be.find(t=>t.rankNum===1))==null?void 0:da.student)==null?void 0:ca.user)==null?void 0:pa.fullName)||((ha=(xa=(ma=be.find(t=>t.rankNum===1))==null?void 0:ma.student)==null?void 0:xa.user)==null?void 0:ha.firstName)||"—"}),be.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(ga=be.find(t=>t.rankNum===1))==null?void 0:ga.totalObtained," (",(fa=be.find(t=>t.rankNum===1))==null?void 0:fa.percentage,"%)"]})]})]}),H?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):be.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Kt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+ce.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),ce.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:be.map((t,s)=>{var N,m,y,h,x,j,S;const a=t.student,n=((N=a.currentEnrollment)==null?void 0:N.rollNumber)||"—",l=((m=a.user)==null?void 0:m.fullName)||`${((y=a.user)==null?void 0:y.firstName)||""} ${((h=a.user)==null?void 0:h.lastName)||""}`.trim(),o=t.rankNum===1,p=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:o?"rgba(245, 158, 11, 0.08)":p?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Je(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:l}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((j=(x=a.currentEnrollment)==null?void 0:x.section)==null?void 0:j.name)||(typeof((S=a.currentEnrollment)==null?void 0:S.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),ce.map(L=>{var me;const D=(me=t.studentMarksObj)==null?void 0:me[L._id],le=D==null?void 0:D.marksObtained,oe=le!==null&&typeof le=="object"?le.marksObtained??"":le??"",ke=oe!=null&&oe!=="",$e=Number(L.totalMarks)||100,ie=ke&&Number(oe)<$e*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:ie?"#dc2626":ke?"#0f172a":"var(--text-muted)",background:ie?"rgba(239, 68, 68, 0.06)":"transparent"},children:ke?oe:"—"},L._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:o||p||r?"0.92rem":"0.85rem",color:o?"#b45309":p?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:o?"#fef3c7":p?"#f1f5f9":r?"#ffedd5":"transparent",border:o?"1px solid #fde68a":p?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),_==="routine"&&ta(!0),_==="seat_plan"&&e.jsx(Ya,{selectedExam:g,classes:Q,user:$}),_==="admit_card"&&e.jsx(qa,{exams:Ce,classes:Q}),e.jsx("div",{className:"print-only",children:e.jsx(Mn,{roles:Ee,style:{marginTop:"40px"}})})]}):_==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>U("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Kt,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:on,disabled:te||!Y||((ua=Y.rankings)==null?void 0:ua.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[de?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),dt&&lt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:E,onChange:t=>{const s=t.target.value;O(s),fs(s,B)},children:lt.map(t=>{var l,o,p,r,N,m,y;const s=((o=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:o._id)||((p=t.currentEnrollment)==null?void 0:p.classLevel),a=((N=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:N.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"শ্রেণি",n=((y=t.user)==null?void 0:y.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((ba=Q.find(t=>String(t._id)===String(E)))==null?void 0:ba.name)||(Wt==null?void 0:Wt.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:E,onChange:t=>{const s=t.target.value;O(s),fs(s,B)},children:Q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:B,onChange:t=>{const s=t.target.value;K(s),fs(E,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),js.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>fs(E,B),disabled:te,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:te?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),Y&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((ya=Y.rankings)==null?void 0:ya.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((va=(ja=Y.rankings)==null?void 0:ja.find(t=>t.rank===1))==null?void 0:va.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((wa=(Na=Y.rankings)==null?void 0:Na.find(t=>t.rank===1))==null?void 0:wa.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((Sa=(ka=Y.termExams)==null?void 0:ka.term1)==null?void 0:Sa.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((za=(Ca=Y.termExams)==null?void 0:Ca.term2)==null?void 0:za.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((Aa=($a=Y.termExams)==null?void 0:$a.term3)==null?void 0:Aa.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:te?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!Y||((Ia=Y.rankings)==null?void 0:Ia.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(Kt,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Y.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ls(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):_==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>U("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Yt,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ya,{selectedExam:null,classes:Q,user:$})]}):_==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>U("marks"),children:e.jsx(ys,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(wt,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(qa,{exams:Ce,classes:Q})]}):_==="routine"?ta(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",children:ks?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":dt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${Ae} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{U("routine"),de?bs():us()},children:[e.jsx(Tt,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"📅 পরীক্ষার রুটিন"})]}),!de&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>U("seat_plan"),children:[e.jsx(Yt,{size:16,style:{color:"#059669"}}),e.jsx("span",{children:"🪑 সিট প্ল্যান"})]}),!de&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>U("admit_card"),children:[e.jsx(wt,{size:16,style:{color:"#0284c7"}}),e.jsx("span",{children:"🎫 প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{U("annual_combined");let t=E;t||(de&&(Wt!=null&&Wt._id)?t=Wt._id:Q.length>0&&(t=Q[0]._id)),t&&(O(t),fs(t,B))},children:[e.jsx(Kt,{size:16,style:{color:"#d97706"}}),e.jsx("span",{children:"🏆 বার্ষিক সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes($==null?void 0:$.userType)&&e.jsxs("button",{className:"btn btn-primary",onClick:()=>tt(!0),children:[e.jsx(cs,{size:16})," নতুন পরীক্ষা তৈরি"]})]})]}),dt&&lt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(is,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Mt,onChange:t=>Xa(t.target.value),children:lt.map(t=>{var l,o,p,r,N,m,y;const s=((l=t.user)==null?void 0:l.fullName)||`${((o=t.user)==null?void 0:o.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((N=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:N.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"",n=(y=t.currentEnrollment)!=null&&y.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),dt&&lt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(is,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((_a=lt[0].user)==null?void 0:_a.fullName)||`${((La=lt[0].user)==null?void 0:La.firstName)||""} ${((Ma=lt[0].user)==null?void 0:Ma.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Ra=(Wa=lt[0].currentEnrollment)==null?void 0:Wa.classLevel)==null?void 0:Ra.name)||"শ্রেণি",(Ta=lt[0].currentEnrollment)!=null&&Ta.rollNumber?` • রোল: ${lt[0].currentEnrollment.rollNumber}`:""]})]}),ks&&Wt&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(is,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Wt.name||"শ্রেণি"})]}),Ie?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Ce.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(wt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:Ce.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=qs.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${bn(t.status)}`,children:un(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?es(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",es(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px"},onClick:()=>{U("marks"),Qs(t)},children:de?"ফলাফল দেখুন":"📝 নম্বর এন্ট্রি"}),!de&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"4px"},onClick:()=>{U("merit"),Qs(t),gs("all",t)},children:[e.jsx(Kt,{size:14,style:{color:"#d97706"}})," 🏆 মেধা তালিকা"]}),["super_admin","admin","principal","teacher"].includes($==null?void 0:$.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>tn(t),title:"সম্পাদনা",children:e.jsx(Ds,{size:16})}),["super_admin","admin","principal"].includes($==null?void 0:$.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>sn(t._id),title:"মুছে ফেলুন",children:e.jsx($s,{size:16})})]})]},t._id)})}),St&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Fs()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Ve?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Fs,type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:an,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:R.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",se(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),R.classLevel&&hs(R.classLevel)},children:Pn.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),R.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:R.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};se(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),R.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:R.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};se(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),R.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:R.month,onChange:t=>{const s=t.target.value,a=qs.find(l=>l.value===s),n=a?a.label.split(" ")[0]:s;se(l=>({...l,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:qs.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:R.name,onChange:Ss,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:R.classLevel,onChange:t=>{const s=t.target.value;se(a=>({...a,classLevel:s,selectedSubjects:[]})),hs(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),Q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),R.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:R.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",R.selectedSubjects.length,"/৪ টি"]})]}),R.classLevel?V.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:V.map(t=>{const s=R.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=R.selectedSubjects;if(s)se(n=>({...n,selectedSubjects:a.filter(l=>l!==t._id)}));else{if(a.length>=4){M({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}se(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:R.startDate,onChange:Ss})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:R.endDate,onChange:Ss})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:R.status,onChange:Ss,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Fs,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:Ct,children:Ct?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),ws&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Tt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:as?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>Jt(!1),title:"বন্ধ করুন",children:e.jsx(kn,{size:20})})]}),e.jsxs("form",{onSubmit:cn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:Qe.title,onChange:t=>nt(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Qe.stream,onChange:t=>nt(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Qe.exam,onChange:t=>{const s=Ce.find(a=>a._id===t.target.value);nt(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),Ce.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Qe.classLevel,onChange:t=>{const s=t.target.value,a=Q.find(n=>n._id===s);nt(n=>({...n,classLevel:s,className:a?a.name:""})),s&&hs(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),Q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Qe.status,onChange:t=>nt(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:Qe.instructions,onChange:t=>nt(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[Je(Qe.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[V&&V.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:dn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:mn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(cs,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),Qe.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Je(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ne(s,"date",l),l&&ne(s,"day",ns(l))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:V&&V.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=V.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ne(s,"subject","custom");else{const o=V.find(p=>p._id===l);o&&(ne(s,"subject",o._id),ne(s,"subjectName",o.name),ne(s,"totalMarks",Number(o.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),V.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!V.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>ne(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ne(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>ne(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>ne(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>ea(s),disabled:Qe.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx($s,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:Qe.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Je(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ne(s,"date",l),l&&ne(s,"day",ns(l))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>ea(s),disabled:Qe.schedule.length<=1,title:"মুছুন",children:e.jsx($s,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:V&&V.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=V.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ne(s,"subject","custom");else{const o=V.find(p=>p._id===l);o&&(ne(s,"subject",o._id),ne(s,"subjectName",o.name),ne(s,"totalMarks",Number(o.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),V.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})}),V&&V.length>0&&(t.subject==="custom"||!V.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>ne(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ne(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>ne(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Jt(!1),disabled:ss,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:ss,children:ss?"সংরক্ষণ হচ্ছে...":as?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),Le&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&J(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(Ke,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>J(!1),type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Ft("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:ze==="landscape"?700:500,background:ze==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:ze==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:ze==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:ze==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Ft("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:ze==="portrait"?700:500,background:ze==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:ze==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:ze==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:ze==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=Ee.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(Ee.length<=1)return;a=Ee.filter(n=>n!==t)}else a=[...Ee,t];et(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>J(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{J(!1),hn(ze,Ee)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(Ke,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{pl as default};
