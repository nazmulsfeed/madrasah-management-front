import{k as Oa,r as o,j as e,I as $s,i as As,d as F,a as Ba,F as Lt,U as Wa,C as Mt,J as hn,u as gn,v as un,x as fn,A as us,K as ns,b as Cs,R as Es,G as bn,X as yn,l as Ra}from"./index-D8DtWKXi.js";import{g as Os,b as He,p as Xt,f as Kt,t as Ve}from"./helpers-CljGnr5z.js";import{L as Ot}from"./layout-grid-BNxGllc1.js";import{R as Is}from"./rotate-cw-CA-LJO10.js";import{P as st}from"./printer-CvxB6nLN.js";import{S as Ga}from"./sliders-vertical-DsWZ2HKC.js";import{S as Ha,a as Ya}from"./square-D6AtqK3C.js";import{C as jn}from"./circle-check-LjFJ8lyy.js";import{S as vn}from"./sparkles-BH3dH2ji.js";import{E as Nn}from"./eye-CYacgcek.js";import{Z as wn}from"./zoom-out-hw2hHyqJ.js";import{Z as kn}from"./zoom-in-ww08f16j.js";import{S as fs}from"./constants-C6HvYUtm.js";import{g as ls,a as rs,b as is}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as Sn,P as Cn}from"./PrintFooterSignatures-rNvpK8g0.js";import{P as zn}from"./PrintSignatureRoleSelector-ClbRDHuZ.js";import{C as bs}from"./circle-alert-Bfm2zURw.js";import{T as Jt}from"./trophy-C-rkO2SJ.js";import{S as Fs}from"./square-pen-CxI1sDRp.js";import{S as $n}from"./save-DVjzAb2g.js";import{P as os}from"./plus-BslNg2u-.js";import{T as zs}from"./trash-2-Co1fpJOV.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=Oa("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=Oa("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Ea='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Fa='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Da({selectedExam:C=null,classes:pe=[],user:ae=null}){var Ut;const M=o.useMemo(()=>Os(ae),[ae]),Wt=o.useMemo(()=>Array.isArray(pe)?pe:pe&&Array.isArray(pe.classes)?pe.classes:[],[pe]),[Ce,Ne]=o.useState([]),[ot,q]=o.useState((C==null?void 0:C._id)||""),[Ze,ze]=o.useState(((Ut=C==null?void 0:C.classLevel)==null?void 0:Ut._id)||(C==null?void 0:C.classLevel)||""),[bt,Me]=o.useState([]),[W,Le]=o.useState("all"),[Qe,yt]=o.useState("all"),[Je,jt]=o.useState((C==null?void 0:C.academicYear)||"2026"),[Bt,Ye]=o.useState((C==null?void 0:C.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[dt,E]=o.useState(!1),[V,H]=o.useState([]),[Fe,g]=o.useState(new Set),[Rt,Z]=o.useState({}),[vt,ct]=o.useState(""),[Tt,he]=o.useState(!0),[Nt,z]=o.useState(!0),[wt,at]=o.useState(!0),[nt,qe]=o.useState(!0),[pt,R]=o.useState(!0),[kt,Gt]=o.useState(!0),[Ht,Yt]=o.useState(!0),[St,$e]=o.useState(!0),[De,_]=o.useState(!0),[L,Et]=o.useState(!0),[qt,Pe]=o.useState(!0),[Oe,be]=o.useState(12),[c,w]=o.useState(!1),[k,ie]=o.useState("12"),[Q,P]=o.useState("theme-classic"),[Y,ge]=o.useState(!1),[We,Be]=o.useState("১০১"),[ne,B]=o.useState(`1-20: 101
21-40: 102
41-60: 103`),[we,Ae]=o.useState(!1);o.useEffect(()=>{(async()=>{var $,N,J,oe,X;try{const K=await F.get("/exams",{params:{limit:100}}),me=((N=($=K.data)==null?void 0:$.data)==null?void 0:N.exams)||((J=K.data)==null?void 0:J.exams)||((oe=K.data)==null?void 0:oe.data)||[],ke=Array.isArray(me)?me:[];if(Ne(ke),!ot&&ke.length>0&&(q(ke[0]._id),Ye(ke[0].name),ke[0].academicYear&&jt(ke[0].academicYear),ke[0].classLevel)){const Ie=((X=ke[0].classLevel)==null?void 0:X._id)||ke[0].classLevel;ze(Ie)}}catch(K){console.error("Failed to fetch exams for seat plan:",K),Ne([])}})()},[]),o.useEffect(()=>{var p;if(ot&&Array.isArray(Ce)&&Ce.length>0){const $=Ce.find(N=>N._id===ot);if($&&(Ye($.name||"বার্ষিক পরীক্ষা - ২০২৬"),$.academicYear&&jt($.academicYear),$.classLevel)){const N=((p=$.classLevel)==null?void 0:p._id)||$.classLevel;ze(N)}}},[ot,Ce]),o.useEffect(()=>{if(!Ze){Me([]);return}(async()=>{var $,N,J,oe;try{const X=await F.get(`/students/sections?classLevel=${Ze}`),K=((N=($=X.data)==null?void 0:$.data)==null?void 0:N.sections)||((J=X.data)==null?void 0:J.sections)||((oe=X.data)==null?void 0:oe.data)||[];Me(Array.isArray(K)?K:[])}catch(X){console.warn("Failed to load sections:",X),Me([])}})()},[Ze]);const Re=async()=>{var p,$,N,J;E(!0);try{const oe={limit:500};Ze&&(oe.classLevel=Ze),W&&W!=="all"&&(oe.section=W);const X=await F.get("/students",{params:oe}),K=(($=(p=X.data)==null?void 0:p.data)==null?void 0:$.students)||((N=X.data)==null?void 0:N.students)||((J=X.data)==null?void 0:J.data)||[];let me=Array.isArray(K)?K:[];Qe&&Qe!=="all"&&(me=me.filter(_e=>{var Ke;return(_e.department||((Ke=_e.currentEnrollment)==null?void 0:Ke.department)||"").toLowerCase().includes(Qe.toLowerCase())})),me.sort((_e,G)=>{var zt,$t;const Ke=He(((zt=_e.currentEnrollment)==null?void 0:zt.rollNumber)||_e.rollNumber||_e.roll),ht=He((($t=G.currentEnrollment)==null?void 0:$t.rollNumber)||G.rollNumber||G.roll);return Ke-ht}),H(me);const ke=new Set(me.map(_e=>_e._id));g(ke);const Ie={};me.forEach(_e=>{Ie[_e._id]=We||"১০১"}),Z(Ie)}catch(oe){console.error("Failed to load students for seat plan:",oe),H([]),g(new Set)}finally{E(!1)}};o.useEffect(()=>{Ze&&Re()},[Ze,W,Qe]);const Te=()=>{Fe.size===V.length?g(new Set):g(new Set(V.map(p=>p._id)))},Xe=()=>{const p=We.trim();p&&Z($=>{const N={...$};return Fe.forEach(J=>{N[J]=p}),N})},ye=()=>{const p=ne.split(`
`),$={...Rt};p.forEach(N=>{const J=N.split(":");if(J.length===2){const oe=J[0].trim(),X=J[1].trim(),K=oe.match(/(\d+)\s*[-–—]\s*(\d+)/);if(K&&X){const me=parseInt(K[1],10),ke=parseInt(K[2],10);V.forEach(Ie=>{var Ke;const _e=Xt(((Ke=Ie.currentEnrollment)==null?void 0:Ke.rollNumber)||Ie.rollNumber||Ie.roll||"0"),G=parseInt(_e,10);!isNaN(G)&&G>=me&&G<=ke&&($[Ie._id]=X)})}}}),Z($),Ae(!1)},mt=o.useMemo(()=>V.filter(p=>{var X,K;if(!Fe.has(p._id))return!1;if(!vt)return!0;const $=vt.toLowerCase(),N=(p.fullName||((X=p.user)==null?void 0:X.fullName)||p.name||"").toLowerCase(),J=String(((K=p.currentEnrollment)==null?void 0:K.rollNumber)||p.rollNumber||p.roll||"").toLowerCase(),oe=String(p.studentId||p.admissionNumber||"").toLowerCase();return N.includes($)||J.includes($)||oe.includes($)}),[V,Fe,vt]),Ct=p=>{be(p),w(!1),ie(String(p))},ys=p=>{ie(p);const $=parseInt(p,10);!isNaN($)&&$>0&&$<=30&&(be($),w(!0))},xt=o.useMemo(()=>{const p=Oe;let $=3,N=4;return p<=4||p<=6||p<=8?($=2,N=Math.ceil(p/2)):p<=10?($=2,N=5):p<=12?($=3,N=4):p<=15?($=3,N=5):p<=16?($=4,N=4):($=4,N=Math.ceil(p/4)),{cols:$,rows:N,count:p}},[Oe]),es=o.useMemo(()=>{const p=[],$=Oe;for(let N=0;N<mt.length;N+=$)p.push(mt.slice(N,N+$));return p},[mt,Oe]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card mb-20 no-print",style:{border:"1px solid #cbd5e1",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[e.jsxs("div",{className:"flex justify-between items-center pb-14 border-b border-slate-200 flex-wrap gap-12",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-emerald-800 flex items-center gap-8 m-0",children:[e.jsx(Ot,{size:22,className:"text-emerald-600"}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{className:"text-xs text-slate-500 mt-2 m-0",children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{className:"flex gap-8 flex-wrap",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:()=>ge(!Y),children:["🌐 ",Y?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-6",onClick:Re,disabled:dt,children:[e.jsx(Is,{size:14,className:dt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary text-xs font-bold flex items-center gap-6",style:{background:"#059669",borderColor:"#059669",padding:"8px 18px"},onClick:()=>window.print(),children:[e.jsx(st,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 pt-14 pb-14 border-b border-slate-200",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input text-xs",value:ot,onChange:p=>q(p.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(Ce)?Ce:[]).map(p=>e.jsxs("option",{value:p._id,children:[p.name," (",p.academicYear||"২০২৬",")"]},p._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input text-xs",value:Ze,onChange:p=>ze(p.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(Wt)?Wt:[]).map(p=>e.jsx("option",{value:p._id,children:p.name},p._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input text-xs",value:W,onChange:p=>Le(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(bt)?bt:[]).map(p=>e.jsx("option",{value:p._id||p.name,children:p.name},p._id||p.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label text-xs font-semibold text-slate-700",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input text-xs",value:Qe,onChange:p=>yt(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"py-12 border-b border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-6 mb-8 text-xs font-bold text-slate-700 uppercase tracking-wide",children:[e.jsx(Ga,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন তথ্য প্রদর্শন করতে চান? (ফিল্ড নির্বাচন করুন):"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-xs",children:[e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Tt,onChange:p=>he(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Nt,onChange:p=>z(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"পরীক্ষার নাম"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:wt,onChange:p=>at(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:nt,onChange:p=>qe(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শিক্ষার্থীর ছবি"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:pt,onChange:p=>R(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"আইডি নম্বর"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:kt,onChange:p=>Gt(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শ্রেণি (Class)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:Ht,onChange:p=>Yt(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:St,onChange:p=>$e(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"সেশন / শিক্ষাবর্ষ"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:De,onChange:p=>_(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"বড় রোল বক্স"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:L,onChange:p=>Et(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"কাটিং দাগ (✂)"})]}),e.jsxs("label",{className:"flex items-center gap-6 cursor-pointer bg-slate-50 hover:bg-slate-100 p-6 rounded border border-slate-200",children:[e.jsx("input",{type:"checkbox",checked:qt,onChange:p=>Pe(p.target.checked),className:"accent-emerald-600"}),e.jsx("span",{children:"লোগো ওয়াটারমার্ক"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12",children:[e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center justify-between",children:[e.jsxs("span",{className:"flex items-center gap-6",children:[e.jsx($s,{size:16,className:"text-emerald-600"}),"কক্ষ নম্বর নির্ধারণ (Room Assignment)"]}),e.jsx("button",{type:"button",className:"text-emerald-700 underline font-semibold hover:text-emerald-800",onClick:()=>Ae(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx("input",{type:"text",className:"form-input text-xs w-36",value:We,onChange:p=>Be(p.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:Xe,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-6 m-0",children:"টিপস: নিচে শিক্ষার্থীর নামের পাশের ঘরে সরাসরি হাত দিয়েও আলাদা আলাদা রুম পরিবর্তন করতে পারবেন।"})]}),e.jsxs("div",{className:"p-10 bg-slate-50 rounded-lg border border-slate-200 text-xs",children:[e.jsxs("div",{className:"font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Ot,{size:16,className:"text-emerald-600"}),"A4 পেজে কার্ড সংখ্যা ও ডিজাইন থিম:"]}),e.jsxs("div",{className:"flex items-center gap-8 flex-wrap mb-8",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"প্রিসেট:"}),e.jsx("button",{type:"button",className:`btn text-xs ${Oe===12&&!c?"btn-primary":"btn-secondary"}`,style:Oe===12&&!c?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>Ct(12),children:"১২টি / পেজ (৩×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Oe===8&&!c?"btn-primary":"btn-secondary"}`,style:Oe===8&&!c?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>Ct(8),children:"৮টি / পেজ (২×৪)"}),e.jsx("button",{type:"button",className:`btn text-xs ${Oe===6&&!c?"btn-primary":"btn-secondary"}`,style:Oe===6&&!c?{background:"#059669",borderColor:"#059669"}:{},onClick:()=>Ct(6),children:"৬টি / পেজ (২×৩)"}),e.jsxs("div",{className:"flex items-center gap-4 ml-auto",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কাস্টম সংখ্যা:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:k,onChange:p=>ys(p.target.value),className:"form-input text-xs w-16 text-center font-bold"})]})]}),e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsx("span",{className:"text-slate-600 font-semibold",children:"কালার থিম:"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-classic",onChange:()=>P("theme-classic")}),e.jsx("span",{children:"ক্লাসিক ব্ল্যাক"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-emerald",onChange:()=>P("theme-emerald")}),e.jsx("span",{className:"text-emerald-700 font-semibold",children:"রয়্যাল গ্রিন"})]}),e.jsxs("label",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-navy",onChange:()=>P("theme-navy")}),e.jsx("span",{className:"text-blue-800 font-semibold",children:"নেভি ব্লু"})]})]})]})]})]}),e.jsxs("div",{className:"mt-14 pt-12 border-t border-slate-200 flex justify-between items-center flex-wrap gap-8 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-12",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary text-xs flex items-center gap-4",onClick:Te,children:[Fe.size===V.length?e.jsx(Ha,{size:14}):e.jsx(Ya,{size:14}),e.jsx("span",{children:Fe.size===V.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"font-semibold text-slate-700",children:["মোট শিক্ষার্থী: ",e.jsx("strong",{className:"text-emerald-700",children:V.length})," জন | নির্বাচিত: ",e.jsx("strong",{className:"text-emerald-700",children:Fe.size})," জন",mt.length>0&&e.jsxs("span",{className:"ml-4 text-slate-500",children:["(মোট ",e.jsx("strong",{children:es.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:vt,onChange:p=>ct(p.target.value),className:"form-input text-xs pl-24 pr-8 py-4"}),e.jsx(As,{size:14,className:"absolute left-8 top-1/2 -translate-y-1/2 text-slate-400"})]})})]})]}),we&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx($s,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:ne,onChange:p=>B(p.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>Ae(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:ye,children:"রুম ভাগ করুন"})]})]})}),dt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Is,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):mt.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${Q}`,children:(Array.isArray(es)?es:[]).map((p,$)=>e.jsx("div",{className:`seat-plan-a4-sheet ${L?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${xt.cols}, 1fr)`,gridTemplateRows:`repeat(${xt.rows}, 1fr)`,gap:Oe<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(p)?p:[]).map(N=>{var G,Ke,ht,zt,$t,Vt,lt,Zt,Ft,ds,Dt,js,vs,Qt,ts;const J=N.fullName||((G=N.user)==null?void 0:G.fullName)||`${((Ke=N.user)==null?void 0:Ke.firstName)||""} ${((ht=N.user)==null?void 0:ht.lastName)||""}`.trim()||N.name||"—",oe=((zt=N.currentEnrollment)==null?void 0:zt.rollNumber)||N.rollNumber||N.roll||"—",X=N.studentId||N.admissionNumber||(($t=N._id)==null?void 0:$t.substring(0,6))||"—",K=((lt=(Vt=N.currentEnrollment)==null?void 0:Vt.classLevel)==null?void 0:lt.name)||((Zt=N.classLevel)==null?void 0:Zt.name)||N.class||"—",me=((ds=(Ft=N.currentEnrollment)==null?void 0:Ft.section)==null?void 0:ds.name)||((Dt=N.currentEnrollment)==null?void 0:Dt.section)||((js=N.section)==null?void 0:js.name)||N.section||"—",ke=N.department||((vs=N.currentEnrollment)==null?void 0:vs.department)||"সাধারণ",Ie=Rt[N._id]||We||"১০১",_e=nt&&(N.photo||(Qt=N.user)!=null&&Qt.photo)?N.photo||((ts=N.user)==null?void 0:ts.photo):Ea;return e.jsxs("div",{className:"seat-plan-card",children:[qt&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:gt=>{gt.currentTarget.src=Fa},className:"card-watermark",alt:"watermark"}),e.jsxs("div",{className:"sp-card-header",children:[nt&&e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:_e,onError:gt=>{gt.currentTarget.src=Ea},alt:"Photo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:Y?"AN-NUR ISLAMIC ACADEMY":M.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:Y?"Shahibag, Chapainawabganj":M.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:"Exam Seat Plan"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:gt=>{gt.currentTarget.src=Fa},alt:"Logo"})})]}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:J,children:J})]}),pt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:X})]}),kt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:K})]}),Ht&&me&&me!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:me})]}),wt&&ke&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:ke})]}),Tt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:Y?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:Ie,onChange:gt=>{const cs=gt.target.value;Z(Ns=>({...Ns,[N._id]:cs}))}})}),e.jsx("span",{className:"print-only",children:Ie})]})]})]})}),De&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:Y?"Roll":"রোল / Roll"}),e.jsx("div",{className:"sp-roll-num",children:oe})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[Nt&&e.jsx("span",{className:"font-semibold",children:Bt}),St&&e.jsxs("span",{children:[Y?"Session:":"সেশন:"," ",Je&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(Je))?new Date().getFullYear():Je||new Date().getFullYear()]})]})]},N._id)})},`page-${$}`))}),e.jsx("style",{children:`
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
      `})]})}const Ds='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',O=(C,pe="—")=>C==null?pe:typeof C=="object"?C.name||C.title||C.banglaName||C.code||C._id||pe:String(C).trim()||pe;function Pa({exams:C=[],classes:pe=[]}){const{user:ae}=Ba(),M=o.useMemo(()=>Os(ae),[ae]),Wt=o.useMemo(()=>Array.isArray(pe)?pe:pe&&Array.isArray(pe.classes)?pe.classes:[],[pe]),Ce=o.useMemo(()=>Array.isArray(C)?C:C&&Array.isArray(C.exams)?C.exams:[],[C]),[Ne,ot]=o.useState(""),[q,Ze]=o.useState(""),[ze,bt]=o.useState("all"),[Me,W]=o.useState("all"),[Le,Qe]=o.useState([]),[yt,Je]=o.useState([]),[jt,Bt]=o.useState(!1),[Ye,dt]=o.useState(""),[E,V]=o.useState(new Set),[H,Fe]=o.useState({}),[g,Rt]=o.useState("১০২"),[Z,vt]=o.useState(()=>new Date().toISOString().split("T")[0]),[ct,Tt]=o.useState("preview"),[he,Nt]=o.useState(100),[z,wt]=o.useState("en"),[at,nt]=o.useState(2),[qe,pt]=o.useState("2"),[R,kt]=o.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});o.useEffect(()=>{Ce.length>0&&!Ne&&ot(Ce[0]._id||Ce[0].id||"")},[Ce,Ne]),o.useEffect(()=>{if(!q){Qe([]),bt("all");return}(async()=>{var w,k,ie,Q;try{const P=await F.get(`/students/sections?classLevel=${q}`),Y=((k=(w=P.data)==null?void 0:w.data)==null?void 0:k.sections)||((ie=P.data)==null?void 0:ie.sections)||((Q=P.data)==null?void 0:Q.data)||[],ge=Array.isArray(Y)?Y:[];Qe(ge),bt("all")}catch{Qe([])}})()},[q]);const Gt=async()=>{var c,w,k,ie;if(!q){Je([]),V(new Set);return}Bt(!0);try{const Q={classLevel:q,limit:500,status:"active"};ze&&ze!=="all"&&(Q.section=ze);const P=await F.get("/students",{params:Q}),Y=((w=(c=P.data)==null?void 0:c.data)==null?void 0:w.students)||((k=P.data)==null?void 0:k.students)||((ie=P.data)==null?void 0:ie.data)||[];let ge=Array.isArray(Y)?Y:Y.students||[];Me&&Me!=="all"&&(ge=ge.filter(ne=>{var we;return(ne.department||((we=ne.currentEnrollment)==null?void 0:we.department)||"").toLowerCase().includes(Me.toLowerCase())})),ge.sort((ne,B)=>{var Re,Te;const we=He(((Re=ne.currentEnrollment)==null?void 0:Re.rollNumber)||ne.rollNumber||ne.roll),Ae=He(((Te=B.currentEnrollment)==null?void 0:Te.rollNumber)||B.rollNumber||B.roll);return we-Ae}),Je(ge);const We=new Set(ge.map(ne=>ne._id||ne.id));V(We);const Be={};ge.forEach(ne=>{const B=ne._id||ne.id;Be[B]=g}),Fe(Be)}catch(Q){console.error("Failed to load students for admit card:",Q),Je([]),V(new Set)}finally{Bt(!1)}};o.useEffect(()=>{q&&Gt()},[q,ze,Me]);const Ht=()=>{const c=g.trim();c&&Fe(w=>{const k={...w};return E.forEach(ie=>{k[ie]=c}),k})},Yt=()=>{E.size===$e.length&&$e.length>0?V(new Set):V(new Set($e.map(c=>c._id||c.id)))},St=c=>{const w=new Set(E);w.has(c)?w.delete(c):w.add(c),V(w)},$e=o.useMemo(()=>{if(!Ye.trim())return yt;const c=Ye.toLowerCase();return yt.filter(w=>{var P,Y;const k=O(((P=w.user)==null?void 0:P.name)||w.name,"").toLowerCase(),ie=O(((Y=w.currentEnrollment)==null?void 0:Y.rollNumber)||w.rollNumber||w.roll,"").toLowerCase(),Q=O(w.studentId||w.admissionNumber,"").toLowerCase();return k.includes(c)||ie.includes(c)||Q.includes(c)})},[yt,Ye]),De=o.useMemo(()=>yt.filter(c=>E.has(c._id||c.id)),[yt,E]),_=o.useMemo(()=>Ce.find(c=>(c._id||c.id)===Ne)||null,[Ce,Ne]),L=o.useMemo(()=>Wt.find(c=>(c._id||c.id)===q)||null,[Wt,q]),Et=c=>{nt(c),pt(String(c))},qt=c=>{pt(c);const w=parseInt(c,10);!isNaN(w)&&w>0&&w<=8&&nt(w)},Pe=o.useMemo(()=>{const c=[],w=parseInt(at,10)||2;for(let k=0;k<De.length;k+=w)c.push(De.slice(k,k+w));return c},[De,at]),Oe=c=>{kt(w=>({...w,[c]:!w[c]}))},be=()=>{if(De.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}window.print()};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Lt,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:O(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>wt("en"),className:`admit-lang-btn ${z==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>wt("bn"),className:`admit-lang-btn ${z==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>wt("bi"),className:`admit-lang-btn ${z==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:Gt,disabled:jt||!q,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Is,{size:15,className:jt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:be,disabled:De.length===0,className:"admit-btn-print",children:[e.jsx(st,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",De.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Wa,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:$e.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(jn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:De.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Ot,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[at,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Lt,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[Pe.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Mt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:Ne,onChange:c=>ot(c.target.value),className:"admit-select",children:Ce.map(c=>{const w=c._id||c.id||"",k=O(c.name||c.title,"Exam");return e.jsx("option",{value:w,children:k},w)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx($s,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:q,onChange:c=>Ze(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),Wt.map(c=>{const w=c._id||c.id||"",k=O(c.name||c.banglaName||c.code,"Class");return e.jsx("option",{value:w,children:k},w)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ot,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:ze,onChange:c=>bt(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),Le.map((c,w)=>{const k=O(c,"");return e.jsx("option",{value:k,children:k},w)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(vn,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:Me,onChange:c=>W(c.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ot,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(c=>e.jsx("button",{type:"button",onClick:()=>Et(c.count),className:`admit-pill-btn ${at===c.count?"active":""}`,children:c.label},c.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:qe,onChange:c=>qt(c.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx($s,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:g,onChange:c=>Rt(c.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Ht,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Mt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:Z,onChange:c=>vt(c.target.value),className:"admit-date-input"})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>Tt("preview"),className:`admit-tab-btn ${ct==="preview"?"active":""}`,children:[e.jsx(Nn,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[Pe.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>Tt("students"),className:`admit-tab-btn ${ct==="students"?"active":""}`,children:[e.jsx(Wa,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[De.length,"/",$e.length]})]}),e.jsxs("button",{type:"button",onClick:()=>Tt("settings"),className:`admit-tab-btn ${ct==="settings"?"active":""}`,children:[e.jsx(An,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ct==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>Nt(Math.max(50,he-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(wn,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[he,"%"]}),e.jsx("button",{type:"button",onClick:()=>Nt(Math.min(130,he+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(kn,{size:14})}),e.jsx("button",{type:"button",onClick:()=>Nt(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ct==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:jt?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Is,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):q?De.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${he/100})`,transformOrigin:"top center"},children:Pe.map((c,w)=>e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",w+1," / ",Pe.length]}),e.jsxs("span",{children:["(এই পেজে ",c.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${at}`,children:c.map(k=>{var Ae,Re,Te,Xe;const ie=k._id||k.id,Q=O(((Ae=k.user)==null?void 0:Ae.name)||k.name,"MD. STUDENT"),P=O(((Re=k.currentEnrollment)==null?void 0:Re.rollNumber)||k.rollNumber||k.roll,"—"),Y=O(k.studentId||k.admissionNumber,"—"),ge=O(((Te=k.currentEnrollment)==null?void 0:Te.section)||k.section||(ze!=="all"?ze:"—"),"—"),We=O(k.department||((Xe=k.currentEnrollment)==null?void 0:Xe.department)||k.stream,"All"),Be=O(H[ie]||g,"১০২"),ne=k.photo||Ds,B=O((_==null?void 0:_.name)||(_==null?void 0:_.title),"Annual Examination 2026"),we=O((L==null?void 0:L.name)||(L==null?void 0:L.banglaName)||(L==null?void 0:L.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[R.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:ye=>{ye.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:ye=>{ye.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:z==="bn"?O(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:z==="bn"?O(M.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:z==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),R.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:z==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Kt(Z)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:Q})]}),R.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:We})]}),R.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Y})]}),R.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Be})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:P})]}),R.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),R.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),R.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:we})]}),R.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ge})]})]}),R.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:ne,alt:"Photo"})})]}),R.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:z==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:B})]}),e.jsxs("div",{className:"signatures-row",children:[R.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:z==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),R.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:z==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},ie)})})]},w))})}):e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Lt,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র লাইভ তৈরি হয়ে প্রদর্শিত হবে।"})]})}),ct==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:Yt,className:"admit-btn-select-all",children:E.size===$e.length&&$e.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Ha,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ya,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",$e.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:E.size})," / ",$e.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(As,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Ye,onChange:c=>dt(c.target.value),className:"admit-search-input"}),Ye&&e.jsx("button",{type:"button",onClick:()=>dt(""),className:"admit-search-clear",children:"✕"})]})]}),$e.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:E.size===$e.length&&$e.length>0,onChange:Yt,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:$e.map(c=>{var ne,B,we,Ae;const w=c._id||c.id,k=E.has(w),ie=O(((ne=c.currentEnrollment)==null?void 0:ne.rollNumber)||c.rollNumber||c.roll,"—"),Q=O(((B=c.user)==null?void 0:B.name)||c.name,"—"),P=O(c.studentId||c.admissionNumber,"—"),Y=O(((we=c.currentEnrollment)==null?void 0:we.section)||c.section||(ze!=="all"?ze:"—"),"—"),ge=O(c.department||((Ae=c.currentEnrollment)==null?void 0:Ae.department)||c.stream,"সাধারণ"),We=O(H[w]||g,"১০২"),Be=c.photo||Ds;return e.jsxs("tr",{className:k?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:k,onChange:()=>St(w),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:ie})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:Be,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:P}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:Q}),e.jsx("td",{style:{color:"#475569"},children:ge}),e.jsx("td",{style:{color:"#475569"},children:Y}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:We,onChange:Re=>{const Te=Re.target.value;Fe(Xe=>({...Xe,[w]:Te}))},className:"admit-table-room-input"})})]},w)})})]})})]}),ct==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Ga,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(c=>{const w=R[c.key];return e.jsxs("button",{type:"button",onClick:()=>Oe(c.key),className:`admit-toggle-card ${w?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${w?"active":""}`,children:w&&e.jsx(hn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:c.label}),e.jsx("div",{className:"admit-toggle-desc",children:c.desc})]})]},c.key)})})]}),e.jsx("div",{className:"admit-print-only-container",children:De.length>0&&Pe.map((c,w)=>e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${at}`,children:c.map(k=>{var Ae,Re,Te,Xe;const ie=k._id||k.id,Q=O(((Ae=k.user)==null?void 0:Ae.name)||k.name,"MD. STUDENT"),P=O(((Re=k.currentEnrollment)==null?void 0:Re.rollNumber)||k.rollNumber||k.roll,"—"),Y=O(k.studentId||k.admissionNumber,"—"),ge=O(((Te=k.currentEnrollment)==null?void 0:Te.section)||k.section||(ze!=="all"?ze:"—"),"—"),We=O(k.department||((Xe=k.currentEnrollment)==null?void 0:Xe.department)||k.stream,"All"),Be=O(H[ie]||g,"১০২"),ne=k.photo||Ds,B=O((_==null?void 0:_.name)||(_==null?void 0:_.title),"Annual Examination 2026"),we=O((L==null?void 0:L.name)||(L==null?void 0:L.banglaName)||(L==null?void 0:L.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[R.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:ye=>{ye.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:ye=>{ye.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:z==="bn"?O(M.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:z==="bn"?O(M.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:z==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),R.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:z==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:Kt(Z)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:Q})]}),R.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:We})]}),R.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:Y})]}),R.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:Be})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:P})]}),R.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),R.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),R.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:we})]}),R.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:z==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ge})]})]}),R.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:ne,alt:"Photo"})})]}),R.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:z==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:B})]}),e.jsxs("div",{className:"signatures-row",children:[R.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:z==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),R.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:z==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},`print-${ie}`)})},`print-page-${w}`))}),e.jsx("style",{children:`
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
      `})]})}const In=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],Ps=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function _n(C,pe=!1){if(!C)return"—";const ae=pe?" (যৌথ)":"";return C===1?`🥇 ১ম স্থান${ae}`:C===2?`🥈 ২য় স্থান${ae}`:C===3?`🥉 ৩য় স্থান${ae}`:C===4?`৪র্থ${ae}`:C===5?`৫ম${ae}`:C===6?`৬ষ্ঠ${ae}`:C===7?`৭ম${ae}`:C===8?`৮ম${ae}`:C===9?`৯ম${ae}`:C===10?`১০ম${ae}`:`${C}তম${ae}`}function tl({initialViewMode:C}){var Zs,Qs,Js,Xs,Ks,ea,ta,sa,aa,na,la,ra,ia,oa,da,ca,pa,ma,xa,ha,ga,ua,fa,ba,ya,ja,va,Na,wa,ka,Sa,Ca,za,$a,Aa;const pe=gn(),ae=un(),{user:M}=Ba(),{madrasahName:Wt,branchName:Ce}=Os(M),[Ne,ot]=o.useState([]),[q,Ze]=o.useState([]),[ze,bt]=o.useState(!0),[Me,W]=o.useState(null),[Le,Qe]=o.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[yt,Je]=o.useState(!1),[jt,Bt]=o.useState(!1),[Ye,dt]=o.useState(null),[E,V]=o.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[H,Fe]=o.useState([]),[g,Rt]=o.useState(null),[Z,vt]=o.useState([]),[ct,Tt]=o.useState([]),[he,Nt]=o.useState(""),[z,wt]=o.useState(""),[at,nt]=o.useState(!1),[qe,pt]=o.useState([]),[R,kt]=o.useState({}),[Gt,Ht]=o.useState(!1),[Yt,St]=o.useState([]),$e=C==="routine"||(ae==null?void 0:ae.pathname)==="/exam-routine",De=C==="admit_card"||(ae==null?void 0:ae.pathname)==="/admit-card",[_,L]=o.useState($e?"routine":De?"admit_card":"marks"),[Et,qt]=o.useState(!1),[Pe,Oe]=o.useState("all"),[be,c]=o.useState([]),[w,k]=o.useState([]),[ie,Q]=o.useState(!1),[P,Y]=o.useState("landscape"),[ge,We]=o.useState(""),[Be,ne]=o.useState("all"),[B,we]=o.useState(null),[Ae,Re]=o.useState(!1),[Te,Xe]=o.useState([]),[ye,mt]=o.useState(""),[Ct,ys]=o.useState("all"),[xt,es]=o.useState(""),[Ut,p]=o.useState([]),[$,N]=o.useState(!1),[J,oe]=o.useState(new Set),[X,K]=o.useState(""),[me,ke]=o.useState("all"),[Ie,_e]=o.useState(!1),[G,Ke]=o.useState(null),[ht,zt]=o.useState([]),[$t,Vt]=o.useState(!1),[lt,Zt]=o.useState("all"),[Ft,ds]=o.useState("all"),[Dt,js]=o.useState("all"),[vs,Qt]=o.useState(!1),[ts,gt]=o.useState(!1),[cs,Ns]=o.useState(null),[Mn,qa]=o.useState(null),[Ue,et]=o.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),rt=(M==null?void 0:M.userType)==="guardian",ws=(M==null?void 0:M.userType)==="student",re=ws||rt,[tt,Ua]=o.useState([]),[At,Bs]=o.useState(""),[It,_s]=o.useState(null);o.useEffect(()=>{if(Me){const t=setTimeout(()=>W(null),4e3);return()=>clearTimeout(t)}},[Me]);const Pt=async(t=null)=>{bt(!0);try{const s={},a=t||At;rt&&a&&(s.studentId=a);const n=await F.get("/exams",{params:s});n.data.success&&ot(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),W({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{bt(!1)}},Va=t=>{var a,n;Bs(t);const s=tt.find(l=>l._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const l=s.currentEnrollment.classLevel,i=typeof l=="object"?l:{_id:l,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};_s(i),K(i._id)}Pt(t),re&&gs(!1,t)},ps=async t=>{if(!t){Fe([]);return}try{const s=await F.get(`/students/subjects?classLevel=${t}`);s.data.success&&Fe(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},Za=async()=>{try{const t=await F.get("/students/classes");t.data.success&&Ze(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};o.useEffect(()=>{(async()=>{var s,a,n,l,i,d;if(rt)try{const r=await F.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const y=r.data.data;Ua(y),Bs(y[0]._id);const m=(a=y[0].currentEnrollment)==null?void 0:a.classLevel;if(m){const f=typeof m=="object"?m:{_id:m,name:((n=y[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};_s(f),K(f._id)}Pt(y[0]._id)}else Pt()}catch(r){console.error("Error loading guardian children",r),Pt()}else if(ws){try{const r=await F.get("/students",{params:{limit:1}});if(r.data.success&&((l=r.data.data)==null?void 0:l.length)>0){const y=r.data.data[0],m=(i=y.currentEnrollment)==null?void 0:i.classLevel;if(m){const f=typeof m=="object"?m:{_id:m,name:((d=y.currentEnrollment)==null?void 0:d.className)||"শ্রেণি"};_s(f),K(f._id)}}}catch(r){console.error("Error loading student profile for class",r)}Pt()}else Pt();Za(),hs()})(),re&&gs()},[]),o.useEffect(()=>{_==="student_result"&&g&&Te.length===0&&Ka(g),_==="subject_result"&&Z.length>0&&!ye&&(mt(Z[0]._id),Ss(Z[0]._id,Ct))},[_,g,Z,Te.length]);const ks=t=>{V({...E,[t.target.name]:t.target.value})},Qa=async t=>{var l;dt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(i=>typeof i=="object"?i._id:i):[],n=((l=t.classLevel)==null?void 0:l._id)||"";V({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&ps(n),Je(!0)},Ja=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await F.delete(`/exams/${t}`)).data.success&&(W({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Pt())}catch(n){console.error("Failed to delete exam",n);const l=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";W({type:"error",message:l})}},Xa=async t=>{var s,a,n,l;if(t.preventDefault(),E.examCategory==="monthly_test"&&((s=E.selectedSubjects)==null?void 0:s.length)!==4){W({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=E.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}Bt(!0);try{let i;Ye?i=await F.patch(`/exams/${Ye}`,E):i=await F.post("/exams",E),i.data.success&&(Je(!1),dt(null),V({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),W({type:"success",message:Ye?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Pt())}catch(i){console.error("Failed to submit exam",i);const d=((l=(n=i.response)==null?void 0:n.data)==null?void 0:l.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";W({type:"error",message:d})}finally{Bt(!1)}},Gs=async t=>{var a,n,l,i,d,r,y,m;if(Rt(t),Nt(""),wt(""),pt([]),kt({}),St([]),we(null),We(""),ne("all"),mt(""),ys("all"),es(""),p([]),oe(new Set),re){nt(!0);try{const f={examId:t._id};rt&&At&&(f.studentId=At);const h=await F.get("/exams/student-results",{params:f});if((a=h.data)!=null&&a.success&&h.data.data){we(h.data.data);const x=(n=h.data.data.results)==null?void 0:n[0];St((x==null?void 0:x.subjects)||[])}else{const x=await F.get("/exams/marks",{params:{exam:t._id,...rt&&At?{student:At}:{}}});St(((i=(l=x.data)==null?void 0:l.data)==null?void 0:i.marks)||[])}}catch(f){console.error("Failed to load student detailed results",f);try{const h=await F.get("/exams/marks",{params:{exam:t._id,...rt&&At?{student:At}:{}}});St(((r=(d=h.data)==null?void 0:d.data)==null?void 0:r.marks)||[])}catch{}}finally{nt(!1)}return}const s=((y=t.classLevel)==null?void 0:y._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const f=await F.get(`/students/subjects?classLevel=${s}`);if(f.data.success){let b=f.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const v=t.selectedSubjects.map(I=>String(typeof I=="object"?I._id:I));b=b.filter(I=>v.includes(String(I._id)))}vt(b)}const h=await F.get(`/students/sections?classLevel=${s}`);h.data.success&&Tt(h.data.data.sections||[]);const x=await F.get("/students",{params:{classLevel:s,limit:300}});if(x.data.success){const b=x.data.data;let v=Array.isArray(b)?b:(b==null?void 0:b.students)||[];if(v.length===0){const D=(m=(await F.get("/students",{params:{limit:500}})).data)==null?void 0:m.data;v=Array.isArray(D)?D:(D==null?void 0:D.students)||[]}v.sort((I,D)=>{var te,le;return He(((te=I.currentEnrollment)==null?void 0:te.rollNumber)||I.roll)-He(((le=D.currentEnrollment)==null?void 0:le.rollNumber)||D.roll)}),Xe(v)}}catch(f){console.error("Failed to fetch subjects/sections for mark entry",f)}},Ka=async t=>{var n,l,i;const s=t||g;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const d={limit:300};a&&(d.classLevel=a);const r=await F.get("/students",{params:d});if((l=r.data)!=null&&l.success){const y=r.data.data;let m=Array.isArray(y)?y:(y==null?void 0:y.students)||[];if(m.length===0&&a){const h=(i=(await F.get("/students",{params:{limit:500}})).data)==null?void 0:i.data;m=Array.isArray(h)?h:(h==null?void 0:h.students)||[]}m.sort((f,h)=>{var x,b;return He(((x=f.currentEnrollment)==null?void 0:x.rollNumber)||f.roll)-He(((b=h.currentEnrollment)==null?void 0:b.rollNumber)||h.roll)}),Xe(m)}}catch(d){console.warn("Failed to load class students:",d)}},Ms=async t=>{var n,l;const a=Xt(t||ge);if(!a||!String(a).trim()){W({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Re(!0),we(null);try{const i=await F.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:g==null?void 0:g._id}});i.data.success&&we(i.data.data)}catch(i){console.error("Failed to load student result",i);const d=((l=(n=i.response)==null?void 0:n.data)==null?void 0:l.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";W({type:"error",message:d})}finally{Re(!1)}},Ss=async(t,s)=>{const a=t!==void 0?t:ye,n=s!==void 0?s:Ct;if(!a){W({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}N(!0);try{const l={exam:g==null?void 0:g._id,subject:a},i=await F.get("/exams/marks",{params:l});if(i.data.success){let d=i.data.data.marks||[];n&&n!=="all"&&(d=d.filter(y=>{var h,x,b,v;const m=(h=y.student)==null?void 0:h.currentEnrollment,f=typeof(m==null?void 0:m.section)=="object"?((x=m==null?void 0:m.section)==null?void 0:x.name)||((b=m==null?void 0:m.section)==null?void 0:b._id):(m==null?void 0:m.section)||((v=y.student)==null?void 0:v.section);return String(f||"")===String(n)})),p(d);const r=new Set(d.map(y=>{var m;return String(((m=y.student)==null?void 0:m._id)||y._id)}));if(oe(r),Z.length===0&&d.length>0){const y={};d.forEach(f=>{f.subject&&typeof f.subject=="object"&&f.subject._id&&(y[f.subject._id]=f.subject)});const m=Object.values(y);m.length>0&&vt(m)}}}catch(l){console.error("Failed to load subject marks",l),W({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{N(!1)}},Hs=t=>{const s=t.map(l=>{var i;return String(((i=l.student)==null?void 0:i._id)||l._id)}),a=s.length>0&&s.every(l=>J.has(l)),n=new Set(J);a?s.forEach(l=>n.delete(l)):s.forEach(l=>n.add(l)),oe(n)},en=t=>{const s=new Set(J),a=String(t);s.has(a)?s.delete(a):s.add(a),oe(s)},Ls=()=>{var y;if(!B||!B.results||B.results.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=B.student||{},s=B.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",l=t.department||"";let i="—";n&&l?i=`${n} (${l})`:n?i=n:l&&(i=l);const d=`
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
      ${rs({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(g==null?void 0:g.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((y=g==null?void 0:g.classLevel)==null?void 0:y.name)||"—"}</div>
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
          ${(s.subjects||[]).map((m,f)=>`
            <tr>
              <td class="text-center">${f+1}</td>
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

      ${is(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(d),r.document.close())},Ys=t=>{var l,i,d,r,y,m,f;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(bs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((l=g==null?void 0:g.classLevel)==null?void 0:l.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ls,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((h,x)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:x+1}),e.jsx("td",{className:"font-semibold",children:h.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:h.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:h.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:h.marksObtained!==null&&typeof h.marksObtained=="object"?h.marksObtained.marksObtained:h.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[h.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(h.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:h.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(h.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${h.isPassed?"badge-active":"badge-danger"}`,children:h.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},h.markId||x))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((i=n.term1)==null?void 0:i.obtained)||0," / ",((d=n.term1)==null?void 0:d.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((y=n.term2)==null?void 0:y.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((m=n.term3)==null?void 0:m.obtained)||0," / ",((f=n.term3)==null?void 0:f.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},qs=t=>{var h;const s=(t||Ut).filter(x=>{var b;return J.has(String(((b=x.student)==null?void 0:b._id)||x._id))});if(s.length===0){W({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=Z.find(x=>x._id===ye),n=(a==null?void 0:a.name)||"বিষয়",l=Number(a==null?void 0:a.totalMarks)||100,i=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),d=s.length,r=s.filter(x=>{const b=Number(x.marksObtained)||0;return(l>0?b/l*100:b)>=33}).length,y=d>0?Math.round(r/d*100):0,m=`
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
      ${rs({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((h=g==null?void 0:g.classLevel)==null?void 0:h.name)||"")+" | <strong>পূর্ণমান:</strong> "+l+" | <strong>পরীক্ষা:</strong> "+((g==null?void 0:g.name)||""),metaRight:"<strong>তারিখ:</strong> "+i})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${d} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${d-r} জন</div>
        <div><strong>পাসের হার:</strong> ${y}%</div>
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
          ${s.map((x,b)=>{var de,Ee,j,u,T,A,U,S,xe,ce,ue,fe,ut,it,ve,Ge,ft,Ia,_a,Ma,La;const v=Number(x.marksObtained)||0,I=l>0?Math.round(v/l*100):v,D=_t(v,l),te=I>=33,le=((de=x.student)==null?void 0:de.fullName)||((j=(Ee=x.student)==null?void 0:Ee.user)==null?void 0:j.fullName)||`${((T=(u=x.student)==null?void 0:u.user)==null?void 0:T.firstName)||""} ${((U=(A=x.student)==null?void 0:A.user)==null?void 0:U.lastName)||""}`.trim()||"—",je=((xe=(S=x.student)==null?void 0:S.currentEnrollment)==null?void 0:xe.rollNumber)||((ce=x.student)==null?void 0:ce.roll)||"—",Se=((ue=x.student)==null?void 0:ue.studentId)||"—",se=typeof((ut=(fe=x.student)==null?void 0:fe.currentEnrollment)==null?void 0:ut.section)=="object"?((Ge=(ve=(it=x.student)==null?void 0:it.currentEnrollment)==null?void 0:ve.section)==null?void 0:Ge.name)||((_a=(Ia=(ft=x.student)==null?void 0:ft.currentEnrollment)==null?void 0:Ia.section)==null?void 0:_a._id):((La=(Ma=x.student)==null?void 0:Ma.currentEnrollment)==null?void 0:La.section)||"—";return`
              <tr>
                <td class="text-center">${b+1}</td>
                <td class="text-center font-bold">${je}</td>
                <td class="font-bold">${le}</td>
                <td class="text-center">${Se}</td>
                <td class="text-center">${se}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${v} / ${l}</td>
                <td class="text-center font-bold">${I}%</td>
                <td class="text-center font-bold">${D}</td>
                <td class="text-center font-bold" style="color: ${te?"#059669":"#dc2626"};">${te?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${is(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,f=window.open("","_blank");f&&(f.document.write(m),f.document.close())},Ws=()=>{var x;if(!qe||qe.length===0){W({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=Z.find(b=>b._id===he),s=he==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,l=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),i=z==="all"?"সকল সেকশন":`সেকশন ${z}`,d=qe.filter(b=>{const v=R[b._id];return v!==void 0&&v!==""&&!isNaN(v)}).length,r=qe.filter(b=>{const v=R[b._id];return v===void 0||v===""||isNaN(v)?!1:(n>0?Number(v)/n*100:Number(v))>=33}).length,y=d>0?Math.round(r/d*100):0,m=[...qe].sort((b,v)=>{var I,D;return He(((I=b.currentEnrollment)==null?void 0:I.rollNumber)||b.roll)-He(((D=v.currentEnrollment)==null?void 0:D.rollNumber)||v.roll)}),f=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(g==null?void 0:g.name)||""})</title>
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
      ${rs({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((g==null?void 0:g.name)||"")+" | <strong>শ্রেণি:</strong> "+(((x=g==null?void 0:g.classLevel)==null?void 0:x.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+i,metaRight:"<strong>তারিখ:</strong> "+l})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${qe.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${d} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${qe.length-r} জন</div>
          <div><strong>পাসের হার:</strong> ${y}%</div>
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
          ${m.map((b,v)=>{var T,A,U,S,xe,ce,ue,fe,ut,it;const I=b._id,D=((T=b.currentEnrollment)==null?void 0:T.rollNumber)||b.roll||"—",te=((A=b.user)==null?void 0:A.fullName)||`${((U=b.user)==null?void 0:U.firstName)||""} ${((S=b.user)==null?void 0:S.lastName)||""}`.trim()||"—",le=b.studentId||"—",je=typeof((xe=b.currentEnrollment)==null?void 0:xe.section)=="object"?((ue=(ce=b.currentEnrollment)==null?void 0:ce.section)==null?void 0:ue.name)||((ut=(fe=b.currentEnrollment)==null?void 0:fe.section)==null?void 0:ut._id):((it=b.currentEnrollment)==null?void 0:it.section)||b.section||z;if(s){const ve=Array.isArray(R[I])?R[I]:[],Ge=ve.length>0?ve.map(ft=>ft.subjectName+": "+ft.marksObtained+" ("+ft.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${v+1}</td>
                  <td class="text-center font-bold">${D}</td>
                  <td class="font-bold">${te}</td>
                  <td class="text-center">${le}</td>
                  <td class="text-center">${je}</td>
                  <td style="font-size: 10px;">${Ge}</td>
                </tr>
              `}const Se=R[I],se=Se!==void 0&&Se!==""&&!isNaN(Se),de=se?Number(Se):null,Ee=se?n>0?Math.round(de/n*100):de:null,j=se?_t(de,n):"—",u=se?Ee>=33:!1;return`
              <tr>
                <td class="text-center">${v+1}</td>
                <td class="text-center font-bold">${D}</td>
                <td class="font-bold">${te}</td>
                <td class="text-center">${le}</td>
                <td class="text-center">${je}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${se?de+" / "+n:"—"}</td>
                <td class="text-center font-bold">${se?Ee+"%":"—"}</td>
                <td class="text-center font-bold">${j}</td>
                <td class="text-center font-bold" style="color: ${se?u?"#059669":"#dc2626":"#64748b"};">
                  ${se?u?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${is(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,h=window.open("","_blank");h&&(h.document.write(f),h.document.close())},tn=async()=>{if(!he||!z){W({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}nt(!0);try{const t={classLevel:g.classLevel._id,limit:100};z!=="all"&&(t.section=z);const a=(await F.get("/students",{params:t})).data.data||[];a.sort((d,r)=>{var f,h;const y=He(((f=d.currentEnrollment)==null?void 0:f.rollNumber)||d.roll),m=He(((h=r.currentEnrollment)==null?void 0:h.rollNumber)||r.roll);return y-m}),pt(a);const n={exam:g._id};he!=="all"&&(n.subject=he);const i=(await F.get("/exams/marks",{params:n})).data.data.marks||[];if(he==="all"){const d={};a.forEach(r=>{d[r._id]=[]}),i.forEach(r=>{var m,f;const y=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;y&&d[y]&&d[y].push({subjectName:((f=r.subject)==null?void 0:f.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),kt(d)}else{const d={};a.forEach(r=>{d[r._id]=""}),i.forEach(r=>{var m;const y=typeof r.student=="object"?(m=r.student)==null?void 0:m._id:r.student;y&&(d[y]=r.marksObtained??"")}),kt(d)}}catch(t){console.error("Failed to load students for marks entry",t),W({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{nt(!1)}},ms=async(t=Pe,s=g)=>{var l,i,d,r,y,m,f,h;const a=s||g;if(!a)return;const n=((l=a.classLevel)==null?void 0:l._id)||(typeof a.classLevel=="string"?a.classLevel:null);qt(!0);try{if(re){const j=await F.get(`/exams/${a._id}/rankings`);if(j.data.success&&j.data.data){const{rankings:u=[],evaluatedSubjects:T=[]}=j.data.data;k(T);const U=(t&&t!=="all"?u.filter(S=>String(S.section||"")===String(t)):u).map((S,xe)=>{const ce={_id:S.studentId,studentId:S.studentCode||S.studentId,user:{fullName:S.name,firstName:S.name},currentEnrollment:{rollNumber:S.rollNumber,section:S.section}},ue={};S.subjectMarks&&Object.keys(S.subjectMarks).forEach(it=>{const ve=S.subjectMarks[it],Ge=ve!==null&&typeof ve=="object"?ve.marksObtained:ve,ft=ve!==null&&typeof ve=="object"&&ve.grade||_t(Ge);ue[it]={marksObtained:Ge!=null&&typeof Ge!="object"?Ge:"",grade:ft||""}});const fe=S.isPassed!==void 0?S.isPassed:S.grade!=="F"&&!S.isIncomplete,ut=S.gpa||(fe&&S.percentage>=33?S.percentage>=80?"5.00":S.percentage>=70?"4.00":S.percentage>=60?"3.50":S.percentage>=50?"3.00":S.percentage>=40?"2.00":"1.00":"0.00");return{student:ce,studentMarksObj:ue,totalObtained:S.totalObtained,totalFullMarks:S.totalMaxMarks,percentage:S.percentage,overallGrade:S.grade,gpa:ut,isPassed:fe,subjectsCountWithMarks:Object.keys(ue).length,rankNum:S.rank||xe+1,rankText:_n(S.rank||xe+1),roll:He(S.rollNumber)}});c(U);return}}const b=((d=(i=(await F.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:i.data)==null?void 0:d.marks)||[];let v=[];if(n)try{v=((y=(r=(await F.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:y.subjects)||[]}catch(j){console.warn("Subject fetch warning:",j)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const j=a.selectedSubjects.map(u=>String(typeof u=="object"?u._id:u));v=v.filter(u=>j.includes(String(u._id)))}let I=v.filter(j=>b.some(u=>{var A,U;const T=typeof u.subject=="object"?((A=u.subject)==null?void 0:A._id)||((U=u.subject)==null?void 0:U.id):u.subject;return String(T)===String(j._id)&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""}));if(I.length===0&&b.length>0){const j={};b.forEach(u=>{var A,U;const T=typeof u.subject=="object"?((A=u.subject)==null?void 0:A._id)||((U=u.subject)==null?void 0:U.id):u.subject;if(T&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""){const S=typeof u.subject=="object"?u.subject.name||u.subject.code:"বিষয়",xe=typeof u.subject=="object"?u.subject.code:"",ce=typeof u.subject=="object"?u.subject.totalMarks||u.totalMarks||100:u.totalMarks||100;j[String(T)]={_id:String(T),name:S,code:xe,totalMarks:Number(ce)||100}}}),I=Object.values(j)}I.length===0&&v.length>0&&(I=v),k(I);const D=I.reduce((j,u)=>j+(Number(u.totalMarks)||100),0);let te=[];if(n)try{const j={classLevel:n,limit:300};t&&t!=="all"&&(j.section=t),te=((m=(await F.get("/students",{params:j})).data)==null?void 0:m.data)||[]}catch(j){console.warn("Students fetch warning:",j)}if(te.length===0){const j={};b.forEach(u=>{u.student&&typeof u.student=="object"&&u.student._id&&(j[u.student._id]=u.student)}),te=Object.values(j)}const le={};b.forEach(j=>{var S,xe,ce,ue;const u=typeof j.student=="object"?((S=j.student)==null?void 0:S._id)||((xe=j.student)==null?void 0:xe.id):j.student,T=typeof j.subject=="object"?((ce=j.subject)==null?void 0:ce._id)||((ue=j.subject)==null?void 0:ue.id):j.subject;if(!u||!T)return;const A=String(u),U=String(T);le[A]||(le[A]={}),le[A][U]={marksObtained:j.marksObtained,grade:j.grade}});const je=te.map(j=>{var ut;const u=le[j._id]||{};let T=0,A=0,U=0;I.forEach(it=>{const ve=u[it._id];if(ve&&ve.marksObtained!==null&&ve.marksObtained!==void 0&&ve.marksObtained!==""){const Ge=Number(ve.marksObtained);T+=Ge,A+=1;const ft=Number(it.totalMarks)||100;Ge<ft*.33&&(U+=1)}});const S=D>0?Number((T/D*100).toFixed(1)):0,xe=I.length>0&&A>0&&A<I.length,ce=A>0&&U===0&&!xe,ue=ce?_t(S):U>0?"F":xe?_t(S):A>0?"F":"—";let fe="—";return A>0&&(!ce||S<33?fe="0.00":S>=80?fe="5.00":S>=70?fe="4.00":S>=60?fe="3.50":S>=50?fe="3.00":S>=40?fe="2.00":fe="1.00"),{student:j,studentMarksObj:u,totalObtained:T,totalFullMarks:D,subjectsCountWithMarks:A,failedCount:U,isIncomplete:xe,percentage:S,isPassed:ce,overallGrade:ue,gpa:fe,roll:He(((ut=j.currentEnrollment)==null?void 0:ut.rollNumber)||j.roll)}});je.sort((j,u)=>j.subjectsCountWithMarks===0&&u.subjectsCountWithMarks===0?j.roll-u.roll:j.subjectsCountWithMarks===0?1:u.subjectsCountWithMarks===0||j.failedCount===0&&u.failedCount>0?-1:j.failedCount>0&&u.failedCount===0?1:u.totalObtained!==j.totalObtained?u.totalObtained-j.totalObtained:j.roll-u.roll);let Se=1,se=null,de=0;const Ee=je.map(j=>{if(j.subjectsCountWithMarks===0)return{...j,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};de+=1,se!==null&&j.totalObtained===se||(Se=de,se=j.totalObtained);const u=Se,T=je.filter(U=>U.subjectsCountWithMarks>0&&U.totalObtained===j.totalObtained).length>1;let A="";return u===1?A=T?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":u===2?A=T?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":u===3?A=T?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":u===4?A=T?"৪র্থ (যৌথ)":"৪র্থ":u===5?A=T?"৫ম (যৌথ)":"৫ম":u===6?A=T?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":u===7?A=T?"৭ম (যৌথ)":"৭ম":u===8?A=T?"৮ম (যৌথ)":"৮ম":u===9?A=T?"৯ম (যৌথ)":"৯ম":u===10?A=T?"১০ম (যৌথ)":"১০ম":A=T?`${u}তম (যৌথ)`:`${u}তম`,j.failedCount>0?A+=" (অনুত্তীর্ণ)":j.isIncomplete&&(A+=" (অসম্পূর্ণ)"),{...j,rankNum:u,rankText:A}});c(Ee)}catch(x){console.error("Error loading merit list:",x);const b=((h=(f=x.response)==null?void 0:f.data)==null?void 0:h.message)||x.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";W({type:"error",message:b})}finally{qt(!1)}},xs=async(t,s="all")=>{var a,n;if(t){_e(!0);try{const l={classLevel:t};s&&s!=="all"&&(l.section=s);const i=await F.get("/exams/annual-rankings",{params:l});i.data.success&&Ke(i.data.data)}catch(l){console.error("Failed to load annual rankings",l),W({type:"error",message:((n=(a=l.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{_e(!1)}}},sn=()=>{var n,l,i;if(!G||!G.rankings||G.rankings.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=G.classLevel)==null?void 0:n.name)||""}</title>
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
      ${rs({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((l=G.classLevel)==null?void 0:l.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((i=G.classLevel)==null?void 0:i.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${G.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${G.rankings.map((d,r)=>`
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

      ${is(Le)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ss=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},hs=async(t=lt,s=Ft,a=Dt,n=!1)=>{var l,i;Vt(!0);try{const d={};t&&t!=="all"&&(d.stream=t),s&&s!=="all"&&(d.exam=s),a&&a!=="all"&&(d.classLevel=a);const r=await F.get("/exams/routines",{params:d});r.data.success&&zt(r.data.data.routines||[])}catch(d){console.error("Failed to load routines",d),n&&W({type:"error",message:((i=(l=d.response)==null?void 0:l.data)==null?void 0:i.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{Vt(!1)}},gs=async(t=!1,s=null)=>{Vt(!0);try{const a={},n=s||At;rt&&n&&(a.studentId=n);const l=await F.get("/exams/student-routine",{params:a});l.data.success&&(qa(l.data.data),zt(l.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{Vt(!1)}},Rs=(t=null)=>{var a,n,l,i,d,r;const s=(t==null?void 0:t.classLevel)||((a=g==null?void 0:g.classLevel)==null?void 0:a._id)||((n=q[0])==null?void 0:n._id)||"";s&&ps(s),t?(Ns(t._id),et({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(Ns(null),et({title:g?`${g.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(g==null?void 0:g._id)||((l=Ne[0])==null?void 0:l._id)||"",examName:(g==null?void 0:g.name)||((i=Ne[0])==null?void 0:i.name)||"",classLevel:s,className:((d=g==null?void 0:g.classLevel)==null?void 0:d.name)||((r=q[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),Qt(!0)},an=()=>{if(!H||H.length===0){W({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=H.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));et(s=>({...s,schedule:t})),W({type:"success",message:`${H.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},nn=async t=>{var s,a;if(t&&t.preventDefault(),!Ue.title.trim()){W({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}gt(!0);try{const n={...Ue,_id:cs},l=await F.post("/exams/routines",n);l.data.success&&(W({type:"success",message:l.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),Qt(!1),hs())}catch(n){console.error("Failed to save routine",n),W({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{gt(!1)}},ln=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await F.delete(`/exams/routines/${t}`)).data.success&&(W({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),zt(l=>l.filter(i=>i._id!==t)))}catch(n){console.error("Failed to delete routine",n),W({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},rn=()=>{et(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},Us=t=>{et(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},ee=(t,s,a)=>{et(n=>{const l=[...n.schedule],i={...l[t],[s]:a};if(s==="date"&&(i.day=ss(a)),s==="subject"){const d=H&&H.find(r=>r._id===a)||Z.find(r=>r._id===a);d?(i.subject=d._id,i.subjectName=d.name,i.totalMarks=Number(d.totalMarks)||100):(i.subject=a,i.subjectName=a)}return l[t]=i,{...n,schedule:l}})},on=t=>{if(!t||!t.schedule||t.schedule.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),l=`
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
              <td class="text-center font-bold" style="color: #0f766e;">${Ve(d+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${Kt(i.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${i.day||ss(i.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${i.subjectName||i.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${Ve(i.totalMarks||100)}</td>
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
    `;s.document.open(),s.document.write(l),s.document.close()},dn=(t=P,s=Le)=>{var h;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(g==null?void 0:g.name)||"পরীক্ষা",l=((h=g==null?void 0:g.classLevel)==null?void 0:h.name)||"সকল শ্রেণি",i=Pe==="all"?"সকল সেকশন":`সেকশন ${Pe}`,d=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let y="";be.forEach((x,b)=>{var se,de,Ee,j;const v=x.student,I=((se=v.currentEnrollment)==null?void 0:se.rollNumber)||v.roll||"—",D=((de=v.user)==null?void 0:de.fullName)||`${((Ee=v.user)==null?void 0:Ee.firstName)||""} ${((j=v.user)==null?void 0:j.lastName)||""}`.trim()||v.studentId||"—",te=v.studentId||"—",le=x.rankNum===1?"#fef3c7":x.rankNum===2?"#f1f5f9":x.rankNum===3?"#ffedd5":"transparent",je=x.rankNum===1?"🥇 ":x.rankNum===2?"🥈 ":x.rankNum===3?"🥉 ":"",Se=w.map(u=>{var ce,ue;const T=(ue=(ce=x.studentMarksObj)==null?void 0:ce[String(u._id)])==null?void 0:ue.marksObtained,A=T!==null&&typeof T=="object"?T.marksObtained??"":T??"",U=A!=null&&A!=="",S=Number(u.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${U&&Number(A)<S*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${U?A:"—"}</td>`}).join("");y+=`
        <tr style="background-color: ${le};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${Ve(b+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${D}</div>
            <div class="student-meta-text">আইডি: ${te}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${I}</td>
          ${Se}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${x.subjectsCountWithMarks===0?"—":`${x.totalObtained} / ${x.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${je}${x.rankText||"—"}</td>
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
      `});const m=w.map(x=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${x.name}</div>
        <div class="sub-mark-box">(${x.totalMarks||100})</div>
      </th>
    `).join(""),f=`<!DOCTYPE html>
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
          ${rs({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${l} | <strong>সেকশন:</strong> ${i}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${be.length} জন | <strong>তারিখ:</strong> ${d}`})}
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
            ${y}
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
    </html>`;a.document.open(),a.document.write(f),a.document.close()},cn=(t,s)=>{kt(a=>({...a,[t]:s}))},_t=(t,s=100)=>{const a=Xt(t),n=parseFloat(a);if(isNaN(n))return"—";const l=Number(s)||100,i=l>0?n/l*100:n;return i>=80?"A+":i>=70?"A":i>=60?"A-":i>=50?"B":i>=40?"C":i>=33?"D":"F"},as=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",pn=async()=>{const t=Z.find(l=>l._id===he),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(R).map(l=>{const i=R[l],d=Xt(i);return{studentId:l,marksObtained:d===""?null:parseFloat(d)}});if(a.length===0){W({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(l=>l.marksObtained!==null&&l.marksObtained>s)){W({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}Ht(!0);try{const l={exam:g._id,subject:he,marks:a};(await F.post("/exams/marks",l)).data.success&&W({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(l){console.error("Failed to save marks",l),W({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Ht(!1)}},mn=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},xn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Ts=()=>{Je(!1),dt(null),V({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),Fe([])},Vs=(t=!1)=>{var n,l,i,d;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(M==null?void 0:M.userType)||((l=(n=M==null?void 0:M.permissions)==null?void 0:n.includes)==null?void 0:l.call(n,"academic.manage"))||((d=(i=M==null?void 0:M.permissions)==null?void 0:i.includes)==null?void 0:d.call(i,"exam.manage")),a=ht.filter(r=>{if(t&&g){if(r.exam&&r.exam!==g._id)return!1}else if(Ft!=="all"&&r.exam!==Ft)return!1;return!(lt!=="all"&&r.stream!==lt||Dt!=="all"&&r.classLevel!==Dt)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{L("marks"),Rt(null)},title:"ফিরে যান",children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Mt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&g?`পরীক্ষার রুটিন — ${g.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:re?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{re?gs(!0):hs(lt,Ft,Dt,!0)},disabled:$t,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Es,{size:14,className:$t?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Rs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(os,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি"})]})]})]}),!re&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${lt==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Zt("all"),children:["সকল বিভাগ (",ht.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${lt==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Zt("noorani"),children:["📖 নূরানী বিভাগ (",ht.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${lt==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Zt("hifz"),children:["🕌 হিফজ বিভাগ (",ht.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${lt==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Zt("kitab"),children:["📚 কিতাব বিভাগ (",ht.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:Ft,onChange:r=>ds(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),Ne.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Dt,onChange:r=>js(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),q.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),$t?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Mt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:re?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Rs(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(os,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{const y=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:y.bg,color:y.color,border:`1px solid ${y.border}`},children:y.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>on(r),style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(st,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Rs(r),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Fs,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>ln(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(zs,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,f)=>e.jsxs("tr",{style:{background:f%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:Ve(f+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Mt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:Kt(m.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:m.day||ss(m.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Cs,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:m.subjectName||m.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[Ve(m.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ra,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ta,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})})]},f)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((m,f)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:Ve(f+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:Kt(m.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",m.day||ss(m.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Ta,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Cs,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:m.subjectName||m.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[Ve(m.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ra,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})]},f)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[Me&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:Me.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[Me.type==="success"?e.jsx(fn,{size:18}):e.jsx(bs,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:Me.message})]}),g?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:Wt}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",g.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((Zs=g.classLevel)==null?void 0:Zs.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Rt(null),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:re?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",Ce," • ",g.name," • ",((Qs=g.classLevel)==null?void 0:Qs.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{re||_==="student_result"?Ls():_==="subject_result"?qs():_==="merit"||_==="merit_list"?Q(!0):Ws()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16})," ",re?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(zn,{selectedRoles:Le,onChange:t=>{Qe(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(Sn,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${g.name}`,metaLeft:`শ্রেণি: ${((Js=g.classLevel)==null?void 0:Js.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),re&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>L("student_result"),children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{L("merit"),ms(Pe)},children:[e.jsx(Jt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{L("routine"),gs()},children:[e.jsx(Mt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!re&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>L("marks"),children:[e.jsx(Fs,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>L("student_result"),children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{L("subject_result"),!ye&&Z.length>0&&(mt(Z[0]._id),Ss(Z[0]._id,Ct))},children:[e.jsx(Cs,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{L("merit"),be.length===0&&ms(Pe)},children:[e.jsx(Jt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{L("routine"),ds((g==null?void 0:g._id)||"all"),hs("all",(g==null?void 0:g._id)||"all","all")},children:[e.jsx(Mt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>L("seat_plan"),children:[e.jsx(Ot,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>L("admit_card"),children:[e.jsx(Lt,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),_==="marks"&&e.jsxs(e.Fragment,{children:[!re&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:he,onChange:t=>{Nt(t.target.value),pt([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),Z.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:z,onChange:t=>{wt(t.target.value),pt([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),fs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:tn,disabled:at||!he||!z||Z.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(As,{size:16})," লোড করুন"]})]}),Z.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(bs,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),at?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):re?B&&((Xs=B.results)==null?void 0:Xs.length)>0?Ys(B):Yt.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(M==null?void 0:M.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Yt.map(t=>{var l,i,d;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=_t(a);return e.jsxs("tr",{children:[(M==null?void 0:M.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(l=t.student)==null?void 0:l.firstName," ",(i=t.student)==null?void 0:i.lastName]})}),e.jsx("td",{className:"font-semibold",children:(d=t.subject)==null?void 0:d.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):qe.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:qe.map((t,s)=>{var m,f,h,x;const a=t._id,n=((m=t.currentEnrollment)==null?void 0:m.rollNumber)||"—",l=((f=t.user)==null?void 0:f.fullName)||`${((h=t.user)==null?void 0:h.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim();if(he==="all"){const b=Array.isArray(R[a])?R[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ve(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:b.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:b.map((v,I)=>{var D;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[v.subjectName,": ",typeof v.marksObtained=="object"?(D=v.marksObtained)==null?void 0:D.marksObtained:v.marksObtained," (",v.grade,")"]},I)})})})]},a)}const i=Z.find(b=>b._id===he),d=Number(i==null?void 0:i.totalMarks)||100,r=R[a]??"",y=_t(r,d);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ve(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:l}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(Xt(r))>d?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${d}`,value:r,onChange:b=>{const v=b.target.value;/^[0-9০-৯.]*$/.test(v)&&cn(a,v)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(y)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:y})})]},a)})})]}),he!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ws,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:pn,disabled:Gt,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx($n,{size:16})," ",Gt?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),_==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!re&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Be,onChange:t=>ne(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),fs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((Ks=B==null?void 0:B.student)==null?void 0:Ks._id)||"",onChange:t=>{const s=t.target.value;s&&(We(s),Ms(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),Te.filter(t=>{var a,n,l,i,d,r;if(Be==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((l=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:l.name)||((d=(i=t.currentEnrollment)==null?void 0:i.section)==null?void 0:d._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(Be)}).map(t=>{var l,i,d,r;const s=((l=t.user)==null?void 0:l.fullName)||`${((i=t.user)==null?void 0:i.firstName)||""} ${((d=t.user)==null?void 0:d.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:ge,onChange:t=>We(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Ms()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ms(),disabled:Ae||!ge.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(As,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),B&&((ea=B.results)==null?void 0:ea.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Ls,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Ae?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):B?((ta=B.results)==null?void 0:ta.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(bs,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):Ys(B):e.jsxs("div",{className:"card empty-state",children:[e.jsx(ns,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),_==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:ye,onChange:t=>{const s=t.target.value;mt(s),s&&Ss(s,Ct)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),Z.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Ct,onChange:t=>{const s=t.target.value;ys(s),ye&&Ss(ye,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),fs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:xt,onChange:t=>es(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=Ut.filter(s=>{var d,r,y,m,f,h,x,b,v,I;if(!xt.trim())return!0;const a=Xt(xt.trim().toLowerCase()),n=(((d=s.student)==null?void 0:d.fullName)||((y=(r=s.student)==null?void 0:r.user)==null?void 0:y.fullName)||`${((f=(m=s.student)==null?void 0:m.user)==null?void 0:f.firstName)||""} ${((x=(h=s.student)==null?void 0:h.user)==null?void 0:x.lastName)||""}`).toLowerCase(),l=String(((v=(b=s.student)==null?void 0:b.currentEnrollment)==null?void 0:v.rollNumber)||"").toLowerCase(),i=String(((I=s.student)==null?void 0:I.studentId)||"").toLowerCase();return n.includes(xt.toLowerCase())||l.includes(a)||i.includes(a)});qs(t)},disabled:$||Ut.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),$?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ye?(()=>{const t=Z.find(h=>h._id===ye),s=Number(t==null?void 0:t.totalMarks)||100,a=Ut.filter(h=>{var D,te,le,je,Se,se,de,Ee,j,u;if(!xt.trim())return!0;const x=Xt(xt.trim().toLowerCase()),b=(((D=h.student)==null?void 0:D.fullName)||((le=(te=h.student)==null?void 0:te.user)==null?void 0:le.fullName)||`${((Se=(je=h.student)==null?void 0:je.user)==null?void 0:Se.firstName)||""} ${((de=(se=h.student)==null?void 0:se.user)==null?void 0:de.lastName)||""}`).toLowerCase(),v=String(((j=(Ee=h.student)==null?void 0:Ee.currentEnrollment)==null?void 0:j.rollNumber)||"").toLowerCase(),I=String(((u=h.student)==null?void 0:u.studentId)||"").toLowerCase();return b.includes(xt.toLowerCase())||v.includes(x)||I.includes(x)}),n=a.length,l=a.map(h=>Number(h.marksObtained)||0),i=l.length>0?Math.max(...l):0,d=l.length>0?(l.reduce((h,x)=>h+x,0)/l.length).toFixed(1):0,r=a.filter(h=>{const x=Number(h.marksObtained)||0;return(s>0?x/s*100:x)>=33}).length,y=n>0?Math.round(r/n*100):0,m=a.map(h=>{var x;return String(((x=h.student)==null?void 0:x._id)||h._id)}),f=m.length>0&&m.every(h=>J.has(h));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[i," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:d})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[y,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:f,onChange:()=>Hs(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",J.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(bs,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:f,onChange:()=>Hs(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(h=>{var se,de,Ee,j,u,T,A,U,S,xe,ce,ue,fe;const x=String(((se=h.student)==null?void 0:se._id)||h._id),b=J.has(x),v=Number(h.marksObtained)||0,I=s>0?Math.round(v/s*100):v,D=_t(v,s),te=I>=33,le=((de=h.student)==null?void 0:de.fullName)||((j=(Ee=h.student)==null?void 0:Ee.user)==null?void 0:j.fullName)||`${((T=(u=h.student)==null?void 0:u.user)==null?void 0:T.firstName)||""} ${((U=(A=h.student)==null?void 0:A.user)==null?void 0:U.lastName)||""}`.trim()||"—",je=((xe=(S=h.student)==null?void 0:S.currentEnrollment)==null?void 0:xe.rollNumber)||"—",Se=((ce=h.student)==null?void 0:ce.studentId)||"—";return e.jsxs("tr",{style:{background:b?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:b,onChange:()=>en(x),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:je}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:le}),((fe=(ue=h.student)==null?void 0:ue.currentEnrollment)==null?void 0:fe.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",h.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:Se}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[v," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[I,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(D)}`,style:{minWidth:"40px",justifyContent:"center"},children:D})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${te?"badge-active":"badge-danger"}`,children:te?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},x)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(Cs,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),_==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Pe,onChange:t=>{const s=t.target.value;Oe(s),ms(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),fs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>ms(Pe),disabled:Et,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Es,{size:14,className:Et?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!re&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>pe("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(bn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Q(!0),disabled:Et||be.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(st,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[be.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[be.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[be.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((na=(aa=(sa=be.find(t=>t.rankNum===1))==null?void 0:sa.student)==null?void 0:aa.user)==null?void 0:na.fullName)||((ia=(ra=(la=be.find(t=>t.rankNum===1))==null?void 0:la.student)==null?void 0:ra.user)==null?void 0:ia.firstName)||"—"}),be.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(oa=be.find(t=>t.rankNum===1))==null?void 0:oa.totalObtained," (",(da=be.find(t=>t.rankNum===1))==null?void 0:da.percentage,"%)"]})]})]}),Et?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):be.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Jt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+w.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),w.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:be.map((t,s)=>{var y,m,f,h,x,b,v;const a=t.student,n=((y=a.currentEnrollment)==null?void 0:y.rollNumber)||"—",l=((m=a.user)==null?void 0:m.fullName)||`${((f=a.user)==null?void 0:f.firstName)||""} ${((h=a.user)==null?void 0:h.lastName)||""}`.trim(),i=t.rankNum===1,d=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:i?"rgba(245, 158, 11, 0.08)":d?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ve(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:l}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((b=(x=a.currentEnrollment)==null?void 0:x.section)==null?void 0:b.name)||(typeof((v=a.currentEnrollment)==null?void 0:v.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),w.map(I=>{var de;const D=(de=t.studentMarksObj)==null?void 0:de[I._id],te=D==null?void 0:D.marksObtained,le=te!==null&&typeof te=="object"?te.marksObtained??"":te??"",je=le!=null&&le!=="",Se=Number(I.totalMarks)||100,se=je&&Number(le)<Se*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:se?"#dc2626":je?"#0f172a":"var(--text-muted)",background:se?"rgba(239, 68, 68, 0.06)":"transparent"},children:je?le:"—"},I._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:i||d||r?"0.92rem":"0.85rem",color:i?"#b45309":d?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:i?"#fef3c7":d?"#f1f5f9":r?"#ffedd5":"transparent",border:i?"1px solid #fde68a":d?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),_==="routine"&&Vs(!0),_==="seat_plan"&&e.jsx(Da,{selectedExam:g,classes:q,user:M}),_==="admit_card"&&e.jsx(Pa,{exams:Ne,classes:q}),e.jsx("div",{className:"print-only",children:e.jsx(Cn,{roles:Le,style:{marginTop:"40px"}})})]}):_==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>L("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Jt,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:sn,disabled:Ie||!G||((ca=G.rankings)==null?void 0:ca.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(st,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[re?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),rt&&tt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:X,onChange:t=>{const s=t.target.value;K(s),xs(s,me)},children:tt.map(t=>{var l,i,d,r,y,m,f;const s=((i=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:i._id)||((d=t.currentEnrollment)==null?void 0:d.classLevel),a=((y=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:y.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"শ্রেণি",n=((f=t.user)==null?void 0:f.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((pa=q.find(t=>String(t._id)===String(X)))==null?void 0:pa.name)||(It==null?void 0:It.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:X,onChange:t=>{const s=t.target.value;K(s),xs(s,me)},children:q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:me,onChange:t=>{const s=t.target.value;ke(s),xs(X,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),fs.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>xs(X,me),disabled:Ie,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Es,{size:14,className:Ie?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),G&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((ma=G.rankings)==null?void 0:ma.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((ha=(xa=G.rankings)==null?void 0:xa.find(t=>t.rank===1))==null?void 0:ha.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((ua=(ga=G.rankings)==null?void 0:ga.find(t=>t.rank===1))==null?void 0:ua.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((ba=(fa=G.termExams)==null?void 0:fa.term1)==null?void 0:ba.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((ja=(ya=G.termExams)==null?void 0:ya.term2)==null?void 0:ja.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((Na=(va=G.termExams)==null?void 0:va.term3)==null?void 0:Na.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:Ie?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!G||((wa=G.rankings)==null?void 0:wa.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(Jt,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:G.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${as(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):_==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>L("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ot,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Da,{selectedExam:null,classes:q,user:M})]}):_==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>L("marks"),children:e.jsx(us,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Lt,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Pa,{exams:Ne,classes:q})]}):_==="routine"?Vs(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",children:ws?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":rt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${Ce} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{L("routine"),re?gs():hs()},children:[e.jsx(Mt,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"📅 পরীক্ষার রুটিন"})]}),!re&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>L("seat_plan"),children:[e.jsx(Ot,{size:16,style:{color:"#059669"}}),e.jsx("span",{children:"🪑 সিট প্ল্যান"})]}),!re&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>L("admit_card"),children:[e.jsx(Lt,{size:16,style:{color:"#0284c7"}}),e.jsx("span",{children:"🎫 প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{L("annual_combined");let t=X;t||(re&&(It!=null&&It._id)?t=It._id:q.length>0&&(t=q[0]._id)),t&&(K(t),xs(t,me))},children:[e.jsx(Jt,{size:16,style:{color:"#d97706"}}),e.jsx("span",{children:"🏆 বার্ষিক সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(M==null?void 0:M.userType)&&e.jsxs("button",{className:"btn btn-primary",onClick:()=>Je(!0),children:[e.jsx(os,{size:16})," নতুন পরীক্ষা তৈরি"]})]})]}),rt&&tt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ns,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:At,onChange:t=>Va(t.target.value),children:tt.map(t=>{var l,i,d,r,y,m,f;const s=((l=t.user)==null?void 0:l.fullName)||`${((i=t.user)==null?void 0:i.firstName)||""} ${((d=t.user)==null?void 0:d.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((y=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:y.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"",n=(f=t.currentEnrollment)!=null&&f.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),rt&&tt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ns,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((ka=tt[0].user)==null?void 0:ka.fullName)||`${((Sa=tt[0].user)==null?void 0:Sa.firstName)||""} ${((Ca=tt[0].user)==null?void 0:Ca.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[(($a=(za=tt[0].currentEnrollment)==null?void 0:za.classLevel)==null?void 0:$a.name)||"শ্রেণি",(Aa=tt[0].currentEnrollment)!=null&&Aa.rollNumber?` • রোল: ${tt[0].currentEnrollment.rollNumber}`:""]})]}),ws&&It&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ns,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:It.name||"শ্রেণি"})]}),ze?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Ne.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Lt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:Ne.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=Ps.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${xn(t.status)}`,children:mn(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?Kt(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",Kt(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px"},onClick:()=>{L("marks"),Gs(t)},children:re?"ফলাফল দেখুন":"📝 নম্বর এন্ট্রি"}),!re&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"4px"},onClick:()=>{L("merit"),Gs(t),ms("all",t)},children:[e.jsx(Jt,{size:14,style:{color:"#d97706"}})," 🏆 মেধা তালিকা"]}),["super_admin","admin","principal","teacher"].includes(M==null?void 0:M.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Qa(t),title:"সম্পাদনা",children:e.jsx(Fs,{size:16})}),["super_admin","admin","principal"].includes(M==null?void 0:M.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>Ja(t._id),title:"মুছে ফেলুন",children:e.jsx(zs,{size:16})})]})]},t._id)})}),yt&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Ts()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Ye?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Ts,type:"button",children:e.jsx(os,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:Xa,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:E.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",V(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),E.classLevel&&ps(E.classLevel)},children:In.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),E.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:E.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};V(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),E.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:E.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};V(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),E.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:E.month,onChange:t=>{const s=t.target.value,a=Ps.find(l=>l.value===s),n=a?a.label.split(" ")[0]:s;V(l=>({...l,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:Ps.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:E.name,onChange:ks,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:E.classLevel,onChange:t=>{const s=t.target.value;V(a=>({...a,classLevel:s,selectedSubjects:[]})),ps(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),E.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:E.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",E.selectedSubjects.length,"/৪ টি"]})]}),E.classLevel?H.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:H.map(t=>{const s=E.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=E.selectedSubjects;if(s)V(n=>({...n,selectedSubjects:a.filter(l=>l!==t._id)}));else{if(a.length>=4){W({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}V(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:E.startDate,onChange:ks})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:E.endDate,onChange:ks})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:E.status,onChange:ks,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Ts,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:jt,children:jt?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),vs&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Mt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:cs?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>Qt(!1),title:"বন্ধ করুন",children:e.jsx(yn,{size:20})})]}),e.jsxs("form",{onSubmit:nn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:Ue.title,onChange:t=>et(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ue.stream,onChange:t=>et(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ue.exam,onChange:t=>{const s=Ne.find(a=>a._id===t.target.value);et(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),Ne.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ue.classLevel,onChange:t=>{const s=t.target.value,a=q.find(n=>n._id===s);et(n=>({...n,classLevel:s,className:a?a.name:""})),s&&ps(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),q.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ue.status,onChange:t=>et(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:Ue.instructions,onChange:t=>et(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[Ve(Ue.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[H&&H.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:an,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:rn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(os,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),Ue.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Ve(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ee(s,"date",l),l&&ee(s,"day",ss(l))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:H&&H.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ee(s,"subject","custom");else{const i=H.find(d=>d._id===l);i&&(ee(s,"subject",i._id),ee(s,"subjectName",i.name),ee(s,"totalMarks",Number(i.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),H.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>ee(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ee(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>ee(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>ee(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>Us(s),disabled:Ue.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(zs,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:Ue.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Ve(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const l=n.target.value;ee(s,"date",l),l&&ee(s,"day",ss(l))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>Us(s),disabled:Ue.schedule.length<=1,title:"মুছুন",children:e.jsx(zs,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:H&&H.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const l=n.target.value;if(l==="custom")ee(s,"subject","custom");else{const i=H.find(d=>d._id===l);i&&(ee(s,"subject",i._id),ee(s,"subjectName",i.name),ee(s,"totalMarks",Number(i.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),H.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0})}),H&&H.length>0&&(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{ee(s,"subjectName",n.target.value),ee(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>ee(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ee(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>ee(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Qt(!1),disabled:ts,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:ts,children:ts?"সংরক্ষণ হচ্ছে...":cs?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),ie&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Q(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(st,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>Q(!1),type:"button",children:e.jsx(os,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Y("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:P==="landscape"?700:500,background:P==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:P==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:P==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:P==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Y("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:P==="portrait"?700:500,background:P==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:P==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:P==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:P==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=Le.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(Le.length<=1)return;a=Le.filter(n=>n!==t)}else a=[...Le,t];Qe(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Q(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Q(!1),dn(P,Le)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(st,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{tl as default};
