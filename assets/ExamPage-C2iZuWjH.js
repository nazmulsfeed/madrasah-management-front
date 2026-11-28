import{k as ia,r as l,w as xn,j as e,O as Ps,Q as Fs,Y as hn,i as Hs,W as gn,d as X,a as ra,F as Et,U as an,C as Bt,x as On,Z as nn,_ as Pn,X as la,E as oa,s as Fn,R as Os,u as Hn,y as Gn,A as fs,$ as us,b as ns,G as Yn,l as ln}from"./index-Drhg0Aph.js";import{g as Ys,b as vt,p as is,f as rs,t as ve}from"./helpers-CljGnr5z.js";import{L as es}from"./layout-grid-Dk5suAa7.js";import{P as ft}from"./printer-CJJDUWzX.js";import{S as fn}from"./sliders-vertical-CD2Vs8h0.js";import{S as un}from"./square-DSZDvKGQ.js";import{C as Un}from"./circle-check-CU2GEVX1.js";import{L as qn}from"./layers-D5StMDKZ.js";import{E as Zn}from"./eye-hvE9m4wo.js";import{Z as Vn}from"./zoom-out-yJF6Fl6d.js";import{Z as Qn}from"./zoom-in-CoPMwzxh.js";import{S as da}from"./save-Bd29gxQY.js";import{C as os}from"./circle-alert-BRQrS9gh.js";import{P as Kt}from"./plus-BIcpntp3.js";import{T as Is}from"./trash-2-CKxDF6e3.js";import{S as Cs}from"./constants-BTuVPIN_.js";import{g as bs,a as ys,b as js}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as Xn}from"./MadrasahLetterhead-Cd7wI9Dm.js";import{P as Jn}from"./PrintSignatureRoleSelector-leHYA9zC.js";import{P as Kn}from"./PrintFooterSignatures--s7EHvaF.js";import{T as ls}from"./trophy-CBIrFaE2.js";import{S as Js}from"./square-pen-sEMUSvul.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ia("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=ia("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=ia("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),Ks='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',ea='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function on({selectedExam:m=null,classes:_=[],user:T=null}){var ge;const S=l.useMemo(()=>Ys(T),[T]),ne=l.useMemo(()=>Array.isArray(_)?_:_&&Array.isArray(_.classes)?_.classes:[],[_]),[he,D]=l.useState([]),[Fe,$]=l.useState((m==null?void 0:m._id)||""),[Ye,le]=l.useState(((ge=m==null?void 0:m.classLevel)==null?void 0:ge._id)||(m==null?void 0:m.classLevel)||""),[ot,pe]=l.useState([]),[O,oe]=l.useState("all"),[De,ue]=l.useState("all"),[Ue,Ke]=l.useState((m==null?void 0:m.academicYear)||"2026"),[dt,et]=l.useState((m==null?void 0:m.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[ct,J]=l.useState(!1),[de,G]=l.useState([]),[ze,u]=l.useState(new Set),[lt,ee]=l.useState({}),[qe,St]=l.useState(""),[pt,be]=l.useState(!0),[ut,Ze]=l.useState(!0),[Nt,F]=l.useState(!0),[it,Re]=l.useState(!0),[Ve,Qe]=l.useState(!0),[He,h]=l.useState(!0),[ce,q]=l.useState(!0),[K,Ee]=l.useState(!0),[me,B]=l.useState(!0),[P,Te]=l.useState(!0),[mt,Ce]=l.useState(!0),[xt,x]=l.useState(!0),[M,I]=l.useState(10),[Z,W]=l.useState(!0),[at,we]=l.useState("10"),[Wt,bt]=l.useState("theme-classic"),[yt,Oe]=l.useState("logo-left"),[xe,ye]=l.useState(!1),[ke,Ht]=l.useState(()=>{try{const c=parseInt(localStorage.getItem("seat_plan_font_scale"),10);if(!isNaN(c)&&c>=80&&c<=140)return c}catch{}return 100});l.useEffect(()=>{try{localStorage.setItem("seat_plan_font_scale",String(ke))}catch{}},[ke]);const[Dt,Gt]=l.useState("১০১"),[ts,rt]=l.useState(`1-20: 101
21-40: 102
41-60: 103`),[Yt,zt]=l.useState(!1);l.useEffect(()=>{(async()=>{var z,w,te,V,R;try{const se=await X.get("/exams",{params:{limit:100}}),ie=((w=(z=se.data)==null?void 0:z.data)==null?void 0:w.exams)||((te=se.data)==null?void 0:te.exams)||((V=se.data)==null?void 0:V.data)||[],je=Array.isArray(ie)?ie:[];if(D(je),!Fe&&je.length>0&&($(je[0]._id),et(je[0].name),je[0].academicYear&&Ke(je[0].academicYear),je[0].classLevel)){const Ae=((R=je[0].classLevel)==null?void 0:R._id)||je[0].classLevel;le(Ae)}}catch(se){console.error("Failed to fetch exams for seat plan:",se),D([])}})()},[]),l.useEffect(()=>{var c;if(Fe&&Array.isArray(he)&&he.length>0){const z=he.find(w=>w._id===Fe);if(z&&(et(z.name||"বার্ষিক পরীক্ষা - ২০২৬"),z.academicYear&&Ke(z.academicYear),z.classLevel)){const w=((c=z.classLevel)==null?void 0:c._id)||z.classLevel;le(w)}}},[Fe,he]),l.useEffect(()=>{if(!Ye){pe([]);return}(async()=>{var z,w,te,V;try{const R=await X.get(`/students/sections?classLevel=${Ye}`),se=((w=(z=R.data)==null?void 0:z.data)==null?void 0:w.sections)||((te=R.data)==null?void 0:te.sections)||((V=R.data)==null?void 0:V.data)||[];pe(Array.isArray(se)?se:[])}catch(R){console.warn("Failed to load sections:",R),pe([])}})()},[Ye]);const Ut=async()=>{var c,z,w,te;J(!0);try{const V={limit:500};Ye&&(V.classLevel=Ye),O&&O!=="all"&&(V.section=O);const R=await X.get("/students",{params:V}),se=((z=(c=R.data)==null?void 0:c.data)==null?void 0:z.students)||((w=R.data)==null?void 0:w.students)||((te=R.data)==null?void 0:te.data)||[];let ie=Array.isArray(se)?se:[];De&&De!=="all"&&(ie=ie.filter(Ie=>{var ht;return(Ie.department||((ht=Ie.currentEnrollment)==null?void 0:ht.department)||"").toLowerCase().includes(De.toLowerCase())})),ie.sort((Ie,Se)=>{var Zt,It;const ht=vt(((Zt=Ie.currentEnrollment)==null?void 0:Zt.rollNumber)||Ie.rollNumber||Ie.roll),Lt=vt(((It=Se.currentEnrollment)==null?void 0:It.rollNumber)||Se.rollNumber||Se.roll);return ht-Lt}),G(ie);const je=new Set(ie.map(Ie=>Ie._id));u(je);const Ae={};ie.forEach(Ie=>{Ae[Ie._id]=Dt||"১০১"}),ee(Ae)}catch(V){console.error("Failed to load students for seat plan:",V),G([]),u(new Set)}finally{J(!1)}};l.useEffect(()=>{Ye&&Ut()},[Ye,O,De]);const Ct=()=>{ze.size===de.length?u(new Set):u(new Set(de.map(c=>c._id)))},ds=()=>{const c=Dt.trim();c&&ee(z=>{const w={...z};return ze.forEach(te=>{w[te]=c}),w})},qt=()=>{const c=ts.split(`
`),z={...lt};c.forEach(w=>{const te=w.split(":");if(te.length===2){const V=te[0].trim(),R=te[1].trim(),se=V.match(/(\d+)\s*[-–—]\s*(\d+)/);if(se&&R){const ie=parseInt(se[1],10),je=parseInt(se[2],10);de.forEach(Ae=>{var ht;const Ie=is(((ht=Ae.currentEnrollment)==null?void 0:ht.rollNumber)||Ae.rollNumber||Ae.roll||"0"),Se=parseInt(Ie,10);!isNaN(Se)&&Se>=ie&&Se<=je&&(z[Ae._id]=R)})}}}),ee(z),zt(!1)},i=l.useMemo(()=>de.filter(c=>{var V,R,se,ie;if(!ze.has(c._id))return!1;if(!qe)return!0;const z=c.fullName||((V=c.user)==null?void 0:V.fullName)||`${((R=c.user)==null?void 0:R.firstName)||""} ${((se=c.user)==null?void 0:se.lastName)||""}`.trim()||c.name||"",w=String(((ie=c.currentEnrollment)==null?void 0:ie.rollNumber)||c.rollNumber||c.roll||""),te=String(c.studentId||c.admissionNumber||"");return xn([z,w,te],qe,pt)}),[de,ze,qe,pt]),y=c=>{I(c),W(!1),we(String(c))},N=c=>{we(c);const z=parseInt(c,10);!isNaN(z)&&z>0&&z<=30&&(I(z),W(!0))},ae=l.useMemo(()=>{const c=M;let z=3,w=4;return c<=4||c<=6||c<=8?(z=2,w=Math.ceil(c/2)):c<=10?(z=2,w=5):c<=12?(z=3,w=4):c<=15?(z=3,w=5):c<=16?(z=4,w=4):(z=4,w=Math.ceil(c/4)),{cols:z,rows:w,count:c}},[M]),U=l.useMemo(()=>{const c=[],z=M;for(let w=0;w<i.length;w+=z)c.push(i.slice(w,w+z));return c},[i,M]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card no-print sp-toolbar-card",children:[e.jsxs("div",{className:"sp-header-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,color:"#065f46",display:"flex",alignItems:"center",gap:"8px",margin:0},children:[e.jsx(es,{size:20,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",margin:"2px 0 0 0"},children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:()=>ye(!xe),children:["🌐 ",xe?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Ut,disabled:ct,children:[e.jsx(Ps,{size:14,className:ct?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",style:{background:"#059669",borderColor:"#059669",fontSize:"0.8rem",fontWeight:700,padding:"7px 16px",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:()=>window.print(),children:[e.jsx(ft,{size:15}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"sp-filters-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Fe,onChange:c=>$(c.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(he)?he:[]).map(c=>{const z=c.academicYear&&!/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(c.academicYear))?c.academicYear:new Date().getFullYear();return e.jsxs("option",{value:c._id,children:[c.name," (",z,")"]},c._id)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Ye,onChange:c=>le(c.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(ne)?ne:[]).map(c=>e.jsx("option",{value:c._id,children:c.name},c._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:O,onChange:c=>oe(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(ot)?ot:[]).map(c=>e.jsx("option",{value:c._id||c.name,children:c.name},c._id||c.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:De,onChange:c=>ue(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"sp-toggles-section",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"7px",fontSize:"0.75rem",fontWeight:700,color:"#334155"},children:[e.jsx(fn,{size:13,style:{color:"#059669"}}),e.jsx("span",{children:"কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):"})]}),e.jsx("div",{className:"sp-toggles-wrap",children:[{checked:ut,onChange:Ze,label:"কক্ষ নম্বর"},{checked:Nt,onChange:F,label:"পরীক্ষার নাম"},{checked:it,onChange:Re,label:"বিভাগ / গ্রুপ"},{checked:Ve,onChange:Qe,label:"শিক্ষার্থীর ছবি"},{checked:He,onChange:h,label:"আইডি নম্বর"},{checked:ce,onChange:q,label:"শ্রেণি"},{checked:K,onChange:Ee,label:"শাখা"},{checked:me,onChange:B,label:"সেশন"},{checked:P,onChange:Te,label:"বড় রোল বক্স"},{checked:mt,onChange:Ce,label:"কাটিং দাগ (✂)"},{checked:xt,onChange:x,label:"লোগো ওয়াটারমার্ক"}].map((c,z)=>e.jsxs("label",{className:`sp-toggle-pill ${c.checked?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.checked,onChange:w=>c.onChange(w.target.checked),style:{accentColor:"#059669",margin:0}}),e.jsx("span",{children:c.label})]},z))})]}),e.jsxs("div",{className:"sp-controls-grid",children:[e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",flexWrap:"wrap",gap:"6px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Fs,{size:15,style:{color:"#059669"}}),"কক্ষ নম্বর নির্ধারণ (Room)"]}),e.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#047857",textDecoration:"underline",fontWeight:600,fontSize:"0.75rem",cursor:"pointer",padding:0},onClick:()=>zt(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"90px",fontSize:"0.8rem",padding:"5px 8px",textAlign:"center",fontWeight:700},value:Dt,onChange:c=>Gt(c.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px"},onClick:ds,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",margin:"6px 0 0 0"},children:"টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।"})]}),e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(es,{size:15,style:{color:"#059669"}}),"A4 পেজে কার্ড ও ফন্ট সাইজ:"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"6px",padding:"2px 6px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.74rem",marginRight:"2px"},children:"ফন্ট:"}),e.jsx("button",{type:"button",onClick:()=>Ht(c=>Math.max(80,c-5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{fontWeight:700,color:"#047857",minWidth:"36px",textAlign:"center",fontSize:"0.75rem"},children:[ke,"%"]}),e.jsx("button",{type:"button",onClick:()=>Ht(c=>Math.min(140,c+5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট বড় করুন",children:"A+"}),ke!==100&&e.jsx("button",{type:"button",onClick:()=>Ht(100),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#ecfdf5",fontWeight:600,fontSize:"0.72rem",cursor:"pointer",color:"#047857"},title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"প্রিসেট:"}),[{val:10,label:"১০টি (২×৫)"},{val:12,label:"১২টি (৩×৪)"},{val:8,label:"৮টি (২×৪)"},{val:6,label:"৬টি (২×৩)"}].map(c=>{const z=M===c.val&&!Z;return e.jsx("button",{type:"button",className:`btn ${z?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.74rem",padding:"4px 9px",...z?{background:"#059669",borderColor:"#059669"}:{}},onClick:()=>y(c.val),children:c.label},c.val)}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"কাস্টম:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:at,onChange:c=>N(c.target.value),className:"form-input",style:{width:"54px",fontSize:"0.78rem",padding:"4px 6px",textAlign:"center",fontWeight:700}})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",paddingTop:"6px",borderTop:"1px solid #e2e8f0",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"থিম:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Wt==="theme-classic",onChange:()=>bt("theme-classic")}),e.jsx("span",{children:"ক্লাসিক"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#047857",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Wt==="theme-emerald",onChange:()=>bt("theme-emerald")}),e.jsx("span",{children:"গ্রিন"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#1e40af",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Wt==="theme-navy",onChange:()=>bt("theme-navy")}),e.jsx("span",{children:"নেভি"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"বিন্যাস:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:yt==="logo-left",onChange:()=>Oe("logo-left")}),e.jsx("span",{style:{color:"#047857",fontWeight:600},children:"বামে লোগো"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:yt==="photo-left",onChange:()=>Oe("photo-left")}),e.jsx("span",{children:"বামে ছবি"})]})]})]})]})]}),e.jsxs("div",{className:"sp-summary-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Ct,children:[ze.size===de.length?e.jsx(hn,{size:14}):e.jsx(un,{size:14}),e.jsx("span",{children:ze.size===de.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{style:{fontWeight:600,color:"#334155",fontSize:"0.8rem"},children:["মোট শিক্ষার্থী: ",e.jsx("strong",{style:{color:"#047857"},children:de.length})," জন | নির্বাচিত: ",e.jsx("strong",{style:{color:"#047857"},children:ze.size})," জন",i.length>0&&e.jsxs("span",{style:{marginLeft:"6px",color:"#64748b"},children:["(মোট ",e.jsx("strong",{children:U.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{position:"relative",minWidth:"200px"},children:[e.jsx(Hs,{size:14,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:qe,onChange:c=>St(c.target.value),className:"form-input",style:{fontSize:"0.8rem",padding:"5px 10px 5px 30px",width:"100%"}})]}),e.jsx(gn,{checked:pt,onChange:be})]})]})]}),Yt&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Fs,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:ts,onChange:c=>rt(c.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>zt(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:qt,children:"রুম ভাগ করুন"})]})]})}),ct?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Ps,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):i.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${Wt}`,children:(Array.isArray(U)?U:[]).map((c,z)=>e.jsx("div",{className:`seat-plan-a4-sheet ${mt?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${ae.cols}, 1fr)`,gridTemplateRows:`repeat(${ae.rows}, 1fr)`,gap:M<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(c)?c:[]).map(w=>{var Se,ht,Lt,Zt,It,$s,_s,ss,Ws,Vt,as,Qt,cs,Ns,ps;const te=w.fullName||((Se=w.user)==null?void 0:Se.fullName)||`${((ht=w.user)==null?void 0:ht.firstName)||""} ${((Lt=w.user)==null?void 0:Lt.lastName)||""}`.trim()||w.name||"—",V=((Zt=w.currentEnrollment)==null?void 0:Zt.rollNumber)||w.rollNumber||w.roll||"—",R=w.studentId||w.admissionNumber||((It=w._id)==null?void 0:It.substring(0,6))||"—",se=((_s=($s=w.currentEnrollment)==null?void 0:$s.classLevel)==null?void 0:_s.name)||((ss=w.classLevel)==null?void 0:ss.name)||w.class||"—",ie=((Vt=(Ws=w.currentEnrollment)==null?void 0:Ws.section)==null?void 0:Vt.name)||((as=w.currentEnrollment)==null?void 0:as.section)||((Qt=w.section)==null?void 0:Qt.name)||w.section||"—",je=w.department||((cs=w.currentEnrollment)==null?void 0:cs.department)||"সাধারণ",Ae=lt[w._id]||Dt||"১০১",Ie=Ve&&(w.photo||(Ns=w.user)!=null&&Ns.photo)?w.photo||((ps=w.user)==null?void 0:ps.photo):Ks;return e.jsxs("div",{className:"seat-plan-card",children:[xt&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:jt=>{jt.currentTarget.src=ea},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:yt==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:jt=>{jt.currentTarget.src=ea},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:xe?"AN-NUR ISLAMIC ACADEMY":S.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:xe?"Shahibag, Chapainawabganj":S.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:xe?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),Ve?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Ie,onError:jt=>{jt.currentTarget.src=Ks},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[Ve?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:Ie,onError:jt=>{jt.currentTarget.src=Ks},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:xe?"AN-NUR ISLAMIC ACADEMY":S.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:xe?"Shahibag, Chapainawabganj":S.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:xe?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:jt=>{jt.currentTarget.src=ea},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:te,children:te})]}),He&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:R})]}),ce&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:se})]}),K&&ie&&ie!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:ie})]}),it&&je&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:je})]}),ut&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:xe?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:Ae,onChange:jt=>{const ca=jt.target.value;ee(Us=>({...Us,[w._id]:ca}))}})}),e.jsx("span",{className:"print-only",children:Ae})]})]})]})}),P&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:xe?"Roll":"রোল"}),e.jsx("div",{className:"sp-roll-num",children:V})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[Nt&&e.jsx("span",{className:"font-semibold",children:dt}),me&&e.jsxs("span",{children:[xe?"Session:":"সেশন:"," ",Ue&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(Ue))?new Date().getFullYear():Ue||new Date().getFullYear()]})]})]},w._id)})},`page-${z}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
        .seat-plan-workspace {
          --sp-font-scale: ${ke/100};
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
      `})]})}const vs={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function Ts({position:m}){const _={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},T={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...T[m]},children:e.jsxs("g",{transform:`translate(${m.includes("right")?64:0}, ${m.includes("bottom")?64:0}) ${_[m]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function sl(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function al(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function nl(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function Es({config:m=vs}){const _={...vs,...m},T=Array.isArray(_.rules)&&_.rules.length>0?_.rules:vs.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx(Ts,{position:"top-left"}),e.jsx(Ts,{position:"top-right"}),e.jsx(Ts,{position:"bottom-left"}),e.jsx(Ts,{position:"bottom-right"}),e.jsx(sl,{}),e.jsx(al,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:_.title})})}),e.jsx("ul",{className:"backside-rules-list",children:T.filter(S=>S&&S.trim()).map((S,ne)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(nl,{}),e.jsx("span",{children:S})]},ne))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:_.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:_.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:_.footerLeftBadge&&_.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:_.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:_.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:_.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const ta='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Ne=(m,_="—")=>m==null?_:typeof m=="object"?m.name||m.title||m.banglaName||m.code||m._id||_:String(m).trim()||_,Bs=(m,_="—")=>{var ne,he,D,Fe;if(!m)return _;const T=`${((ne=m.user)==null?void 0:ne.firstName)||""} ${((he=m.user)==null?void 0:he.lastName)||""}`.trim(),S=`${m.firstName||""} ${m.lastName||""}`.trim();return Ne(((D=m.user)==null?void 0:D.fullName)||T||((Fe=m.user)==null?void 0:Fe.name)||m.fullName||S||m.name||m.banglaName,_)};function dn({exams:m=[],classes:_=[]}){const{user:T}=ra(),S=l.useMemo(()=>Ys(T),[T]),ne=l.useMemo(()=>Array.isArray(_)?_:_&&Array.isArray(_.classes)?_.classes:[],[_]),he=l.useMemo(()=>Array.isArray(m)?m:m&&Array.isArray(m.exams)?m.exams:[],[m]),[D,Fe]=l.useState(""),[$,Ye]=l.useState(""),[le,ot]=l.useState("all"),[pe,O]=l.useState("all"),[oe,De]=l.useState([]),[ue,Ue]=l.useState([]),[Ke,dt]=l.useState(!1),[et,ct]=l.useState(""),[J,de]=l.useState(!0),[G,ze]=l.useState(new Set),[u,lt]=l.useState({}),[ee,qe]=l.useState("১০২"),[St,pt]=l.useState(()=>new Date().toISOString().split("T")[0]),[be,ut]=l.useState("preview"),[Ze,Nt]=l.useState(85),[F,it]=l.useState("en"),[Re,Ve]=l.useState(4),[Qe,He]=l.useState("4"),[h,ce]=l.useState("landscape"),[q,K]=l.useState(!0),[Ee,me]=l.useState("admit"),[B,P]=l.useState(()=>{try{const i=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(i)&&i>=80&&i<=135)return i}catch{}return 100}),[Te,mt]=l.useState(()=>{try{return localStorage.getItem("admit_teacher_sig")||""}catch{return""}}),[Ce,xt]=l.useState(()=>{try{return localStorage.getItem("admit_head_sig")||""}catch{return""}}),x=(i,y)=>{if(!y)return;const N=new FileReader;N.onload=ae=>{var ge;const U=((ge=ae.target)==null?void 0:ge.result)||"";if(i==="teacher"){mt(U);try{localStorage.setItem("admit_teacher_sig",U)}catch{}}else{xt(U);try{localStorage.setItem("admit_head_sig",U)}catch{}}},N.readAsDataURL(y)},M=i=>{if(i==="teacher"){mt("");try{localStorage.removeItem("admit_teacher_sig")}catch{}}else{xt("");try{localStorage.removeItem("admit_head_sig")}catch{}}};l.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(B))}catch{}},[B]);const[I,Z]=l.useState(()=>{try{const i=localStorage.getItem("admit_backside_config");if(i)return{...vs,...JSON.parse(i)}}catch{}return vs});l.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(I))}catch{}},[I]);const[W,at]=l.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});l.useEffect(()=>{he.length>0&&!D&&Fe(he[0]._id||he[0].id||"")},[he,D]),l.useEffect(()=>{if(!$){De([]),ot("all");return}(async()=>{var y,N,ae,U;try{const ge=await X.get(`/students/sections?classLevel=${$}`),c=((N=(y=ge.data)==null?void 0:y.data)==null?void 0:N.sections)||((ae=ge.data)==null?void 0:ae.sections)||((U=ge.data)==null?void 0:U.data)||[],z=Array.isArray(c)?c:[];De(z),ot("all")}catch{De([])}})()},[$]);const we=async()=>{var i,y,N,ae;if(!$){Ue([]),ze(new Set);return}dt(!0);try{const U={classLevel:$,limit:500,status:"active"};le&&le!=="all"&&(U.section=le);const ge=await X.get("/students",{params:U}),c=((y=(i=ge.data)==null?void 0:i.data)==null?void 0:y.students)||((N=ge.data)==null?void 0:N.students)||((ae=ge.data)==null?void 0:ae.data)||[];let z=Array.isArray(c)?c:c.students||[];pe&&pe!=="all"&&(z=z.filter(V=>{var se;return(V.department||((se=V.currentEnrollment)==null?void 0:se.department)||"").toLowerCase().includes(pe.toLowerCase())})),z.sort((V,R)=>{var je,Ae;const se=vt(((je=V.currentEnrollment)==null?void 0:je.rollNumber)||V.rollNumber||V.roll),ie=vt(((Ae=R.currentEnrollment)==null?void 0:Ae.rollNumber)||R.rollNumber||R.roll);return se-ie}),Ue(z);const w=new Set(z.map(V=>V._id||V.id));ze(w);const te={};z.forEach(V=>{const R=V._id||V.id;te[R]=ee}),lt(te)}catch(U){console.error("Failed to load students for admit card:",U),Ue([]),ze(new Set)}finally{dt(!1)}};l.useEffect(()=>{$&&we()},[$,le,pe]);const Wt=()=>{const i=ee.trim();i&&lt(y=>{const N={...y};return G.forEach(ae=>{N[ae]=i}),N})},bt=()=>{G.size===Oe.length&&Oe.length>0?ze(new Set):ze(new Set(Oe.map(i=>i._id||i.id)))},yt=i=>{const y=new Set(G);y.has(i)?y.delete(i):y.add(i),ze(y)},Oe=l.useMemo(()=>et.trim()?ue.filter(i=>{var U;const y=Bs(i,""),N=Ne(((U=i.currentEnrollment)==null?void 0:U.rollNumber)||i.rollNumber||i.roll,""),ae=Ne(i.studentId||i.admissionNumber,"");return xn([y,N,ae],et,J)}):ue,[ue,et,J]),xe=l.useMemo(()=>ue.filter(i=>G.has(i._id||i.id)),[ue,G]),ye=l.useMemo(()=>he.find(i=>(i._id||i.id)===D)||null,[he,D]),ke=l.useMemo(()=>ne.find(i=>(i._id||i.id)===$)||null,[ne,$]),Ht=i=>{Ve(i),He(String(i)),i!==4&&q&&K(!1)},Dt=i=>{He(i);const y=parseInt(i,10);!isNaN(y)&&y>0&&y<=8&&(Ve(y),y!==4&&q&&K(!1))},Gt=i=>{ce(i),i==="landscape"?(Ve(4),He("4")):q&&K(!1)},ts=()=>{const i=!q;K(i),i&&(ce("landscape"),Ve(4),He("4"))},rt=l.useMemo(()=>{const i=[],y=parseInt(Re,10)||2;for(let N=0;N<xe.length;N+=y)i.push(xe.slice(N,N+y));return i},[xe,Re]),Yt=i=>{at(y=>({...y,[i]:!y[i]}))},zt=l.useRef(null),Ut=l.useRef(null),Ct=i=>{const y=zt.current,N=Ut.current;if(!y||!N){window.print();return}const ae=document.getElementById("admit-print-iframe");ae&&ae.remove();const U=document.createElement("iframe");U.id="admit-print-iframe",U.style.position="fixed",U.style.right="0",U.style.bottom="0",U.style.width="0",U.style.height="0",U.style.border="0",U.style.visibility="hidden",document.body.appendChild(U);const ge=U.contentWindow.document,c=window.location.origin;ge.open(),ge.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${c}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${B/100};
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
    ${N.textContent}
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
</html>`),ge.close();const z=()=>{try{U.contentWindow.focus(),U.contentWindow.print()}catch(te){console.error("Iframe print error:",te),window.print()}},w=Array.from(ge.images||[]);if(w.length===0)setTimeout(z,120);else{let te=!1;const V=()=>{te||(te=!0,setTimeout(z,100))};Promise.all(w.map(R=>R.complete?Promise.resolve():new Promise(se=>{R.onload=se,R.onerror=se}))).then(V),setTimeout(V,1200)}},ds=()=>{if(xe.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}me("admit");const i=h==="landscape"?"landscape":"portrait";setTimeout(()=>Ct(i),80)},qt=()=>{me("backside_only"),setTimeout(()=>Ct("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Et,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:Ne(S.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>it("en"),className:`admit-lang-btn ${F==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>it("bn"),className:`admit-lang-btn ${F==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>it("bi"),className:`admit-lang-btn ${F==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:we,disabled:Ke||!$,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Ps,{size:15,className:Ke?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:qt,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(ft,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:ds,disabled:xe.length===0,className:"admit-btn-print",children:[e.jsx(ft,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",xe.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(an,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:Oe.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(Un,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:xe.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(es,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[Re,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Et,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[rt.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Bt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:D,onChange:i=>Fe(i.target.value),className:"admit-select",children:he.map(i=>{const y=i._id||i.id||"",N=Ne(i.name||i.title,"Exam");return e.jsx("option",{value:y,children:N},y)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Fs,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:$,onChange:i=>Ye(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),ne.map(i=>{const y=i._id||i.id||"",N=Ne(i.name||i.banglaName||i.code,"Class");return e.jsx("option",{value:y,children:N},y)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(es,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:le,onChange:i=>ot(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),oe.map((i,y)=>{const N=Ne(i,"");return e.jsx("option",{value:N,children:N},y)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(On,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:pe,onChange:i=>O(i.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(es,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(i=>e.jsx("button",{type:"button",onClick:()=>Ht(i.count),className:`admit-pill-btn ${Re===i.count?"active":""}`,children:i.label},i.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Qe,onChange:i=>Dt(i.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(qn,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Gt("portrait"),className:`admit-pill-btn ${h==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>Gt("landscape"),className:`admit-pill-btn ${h==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:ts,className:`admit-pill-btn ${q?"active":""}`,style:{border:q?"1px solid #0d3b66":"1px solid #cbd5e1",background:q?"#0d3b66":"#ffffff",color:q?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:q?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>P(i=>Math.max(80,i-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[B,"%"]}),e.jsx("button",{type:"button",onClick:()=>P(i=>Math.min(135,i+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),B!==100&&e.jsx("button",{type:"button",onClick:()=>P(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Fs,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:ee,onChange:i=>qe(i.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Wt,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Bt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:St,onChange:i=>pt(i.target.value),className:"admit-date-input"})]}),e.jsxs("div",{className:"admit-sec-group",style:{flexWrap:"wrap"},children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"স্বাক্ষর আপলোড:"})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:Te?"#ecfdf5":"#ffffff",color:Te?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var N;const y=(N=i.target.files)==null?void 0:N[0];y&&x("teacher",y),i.target.value=""}}),e.jsx("span",{children:Te?"✓ Class Teacher":"+ Class Teacher"})]}),Te&&e.jsx("button",{type:"button",onClick:()=>M("teacher"),title:"Class Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:Ce?"#ecfdf5":"#ffffff",color:Ce?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:i=>{var N;const y=(N=i.target.files)==null?void 0:N[0];y&&x("head",y),i.target.value=""}}),e.jsx("span",{children:Ce?"✓ Head Teacher":"+ Head Teacher"})]}),Ce&&e.jsx("button",{type:"button",onClick:()=>M("head"),title:"Head Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>ut("preview"),className:`admit-tab-btn ${be==="preview"?"active":""}`,children:[e.jsx(Zn,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[rt.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>ut("students"),className:`admit-tab-btn ${be==="students"?"active":""}`,children:[e.jsx(an,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[xe.length,"/",Oe.length]})]}),e.jsxs("button",{type:"button",onClick:()=>ut("settings"),className:`admit-tab-btn ${be==="settings"?"active":""}`,children:[e.jsx(el,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),be==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>Nt(Math.max(50,Ze-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(Vn,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[Ze,"%"]}),e.jsx("button",{type:"button",onClick:()=>Nt(Math.min(130,Ze+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(Qn,{size:14})}),e.jsx("button",{type:"button",onClick:()=>Nt(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),be==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:Ke?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Ps,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):$?xe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${Ze/100})`,transformOrigin:"top center"},children:rt.map((i,y)=>e.jsxs(nn.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",y+1," / ",rt.length," ",h==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",i.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Re} ${h==="landscape"?"a4-landscape":""}`,children:i.map(N=>{var ie,je,Ae,Ie;const ae=N._id||N.id,U=Bs(N,"MD. STUDENT"),ge=Ne(((ie=N.currentEnrollment)==null?void 0:ie.rollNumber)||N.rollNumber||N.roll,"—"),c=Ne(N.studentId||N.admissionNumber,"—"),z=Ne(((je=N.currentEnrollment)==null?void 0:je.section)||N.section||(le!=="all"?le:"—"),"—"),w=Ne(N.department||((Ae=N.currentEnrollment)==null?void 0:Ae.department)||N.stream,"All"),te=Ne(u[ae]||ee,"১০২"),V=N.photo||((Ie=N.user)==null?void 0:Ie.photo)||ta,R=Ne((ye==null?void 0:ye.name)||(ye==null?void 0:ye.title),"Annual Examination 2026"),se=Ne((ke==null?void 0:ke.name)||(ke==null?void 0:ke.banglaName)||(ke==null?void 0:ke.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[W.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:F==="bn"?Ne(S.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:F==="bn"?Ne(S.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:F==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),W.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:F==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:rs(St)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:U})]}),W.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:w})]}),W.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),W.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:te})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ge})]}),W.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),W.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),W.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:se})]}),W.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:z})]})]}),W.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:V,alt:"Photo"})})]}),W.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:F==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:R})]}),e.jsxs("div",{className:"signatures-row",children:[W.teacherSig?e.jsxs("div",{className:"signature-block",children:[Te?e.jsx("img",{src:Te,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),W.principalSig?e.jsxs("div",{className:"signature-block",children:[Ce?e.jsx("img",{src:Ce,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},ae)})})]}),q&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",y+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(N=>e.jsx(Es,{config:I},`preview-back-${y}-${N}`))})]})]},`preview-group-${y}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Et,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),q&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${Ze/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Es,{config:I},`empty-back-${i}`))})]})})})]})}),be==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:bt,className:"admit-btn-select-all",children:G.size===Oe.length&&Oe.length>0?e.jsxs(e.Fragment,{children:[e.jsx(hn,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(un,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",Oe.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:G.size})," / ",Oe.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Hs,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:et,onChange:i=>ct(i.target.value),className:"admit-search-input"}),et&&e.jsx("button",{type:"button",onClick:()=>ct(""),className:"admit-search-clear",children:"✕"})]}),e.jsx(gn,{checked:J,onChange:de})]}),Oe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:G.size===Oe.length&&Oe.length>0,onChange:bt,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:Oe.map(i=>{var V,R,se,ie;const y=i._id||i.id,N=G.has(y),ae=Ne(((V=i.currentEnrollment)==null?void 0:V.rollNumber)||i.rollNumber||i.roll,"—"),U=Bs(i,"—"),ge=Ne(i.studentId||i.admissionNumber,"—"),c=Ne(((R=i.currentEnrollment)==null?void 0:R.section)||i.section||(le!=="all"?le:"—"),"—"),z=Ne(i.department||((se=i.currentEnrollment)==null?void 0:se.department)||i.stream,"সাধারণ"),w=Ne(u[y]||ee,"১০২"),te=i.photo||((ie=i.user)==null?void 0:ie.photo)||ta;return e.jsxs("tr",{className:N?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:N,onChange:()=>yt(y),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:ae})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:te,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:ge}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:U}),e.jsx("td",{style:{color:"#475569"},children:z}),e.jsx("td",{style:{color:"#475569"},children:c}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:w,onChange:je=>{const Ae=je.target.value;lt(Ie=>({...Ie,[y]:Ae}))},className:"admit-table-room-input"})})]},y)})})]})})]}),be==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(fn,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(i=>{const y=W[i.key];return e.jsxs("button",{type:"button",onClick:()=>Yt(i.key),className:`admit-toggle-card ${y?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${y?"active":""}`,children:y&&e.jsx(Pn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:i.label}),e.jsx("div",{className:"admit-toggle-desc",children:i.desc})]})]},i.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Et,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>Z(vs),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.title,onChange:i=>Z(y=>({...y,title:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.noteLabel,onChange:i=>Z(y=>({...y,noteLabel:i.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.noteText,onChange:i=>Z(y=>({...y,noteText:i.target.value}))})]}),(I.rules||[]).map((i,y)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",y+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:i,onChange:N=>{const ae=[...I.rules||[]];ae[y]=N.target.value,Z(U=>({...U,rules:ae}))}})]},`rule-edit-${y}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.authorityLine1,onChange:i=>Z(y=>({...y,authorityLine1:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.authorityLine2,onChange:i=>Z(y=>({...y,authorityLine2:i.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:I.footerLeftBadge||"",onChange:i=>Z(y=>({...y,footerLeftBadge:i.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:zt,children:Ee==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(i=>e.jsx(Es,{config:I},`print-back-only-${i}`))}):xe.length>0&&rt.map((i,y)=>e.jsxs(nn.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Re} ${h==="landscape"?"a4-landscape":""}`,children:i.map(N=>{var ie,je,Ae,Ie;const ae=N._id||N.id,U=Bs(N,"MD. STUDENT"),ge=Ne(((ie=N.currentEnrollment)==null?void 0:ie.rollNumber)||N.rollNumber||N.roll,"—"),c=Ne(N.studentId||N.admissionNumber,"—"),z=Ne(((je=N.currentEnrollment)==null?void 0:je.section)||N.section||(le!=="all"?le:"—"),"—"),w=Ne(N.department||((Ae=N.currentEnrollment)==null?void 0:Ae.department)||N.stream,"All"),te=Ne(u[ae]||ee,"১০২"),V=N.photo||((Ie=N.user)==null?void 0:Ie.photo)||ta,R=Ne((ye==null?void 0:ye.name)||(ye==null?void 0:ye.title),"Annual Examination 2026"),se=Ne((ke==null?void 0:ke.name)||(ke==null?void 0:ke.banglaName)||(ke==null?void 0:ke.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[W.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:Se=>{Se.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:F==="bn"?Ne(S.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:F==="bn"?Ne(S.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:F==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),W.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:F==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:rs(St)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:U})]}),W.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:w})]}),W.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),W.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:te})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ge})]}),W.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),W.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),W.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:se})]}),W.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:z})]})]}),W.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:V,alt:"Photo"})})]}),W.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:F==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:R})]}),e.jsxs("div",{className:"signatures-row",children:[W.teacherSig?e.jsxs("div",{className:"signature-block",children:[Te?e.jsx("img",{src:Te,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),W.principalSig?e.jsxs("div",{className:"signature-block",children:[Ce?e.jsx("img",{src:Ce,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},`print-${ae}`)})}),q&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(N=>e.jsx(Es,{config:I},`print-back-${y}-${N}`))})]},`print-group-${y}`))}),e.jsx("style",{ref:Ut,children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          --admit-font-scale: ${B/100};
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
          size: A4 ${Ee==="backside_only"||h==="landscape"?"landscape":"portrait"};
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
      `})]})}const ll=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];function As(m){if(!m)return"";const _=new Date(`${m}T00:00:00`);return Number.isNaN(_.getTime())?"":ll[_.getDay()]}function Gs(m){if(!m)return"";const _=String(m).split("-");if(_.length!==3)return m;const[T,S,ne]=_;return ve(`${ne}/${S}/${T.slice(-2)}`)}function Tt(m){return String(m||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function bn(m,_="আন্-নূর ইসলামিক একাডেমি"){var O;const T=((O=m==null?void 0:m.schedule)==null?void 0:O.kind)==="matrix"?m.schedule:m;if(!T||!Array.isArray(T.dates)||!Array.isArray(T.rows))return;const S=m.title||T.title||"পরীক্ষার রুটিন",ne=T.startTime||"পরীক্ষা শুরু : সকাল ৯ টা।",he=T.footerNote||"",D=T.signatureRole||"প্রধান শিক্ষক,",Fe=T.signatureName||"",$=T.signatureOrg||_,Ye=T.dates.map(oe=>{const De=oe.dateLabel||Gs(oe.date)||"তারিখ",ue=oe.dayLabel||As(oe.date)||"";return`<th><div>${Tt(De)}</div>${ue?`<div style="font-weight:600;margin-top:2px;">${Tt(ue)}</div>`:""}</th>`}).join(""),le=T.rows.map((oe,De)=>{const ue=T.dates.map(Ue=>{const Ke=(oe.cells&&oe.cells[Ue.id]?String(oe.cells[Ue.id]).trim():"")||"-";return`<td>${Tt(Ke).replace(/\n/g,"<br/>")}</td>`}).join("");return`<tr class="${De%2===1?"zebra":""}">
        <td class="class-col">${Tt(oe.className)}</td>
        ${ue}
      </tr>`}).join(""),ot=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${Tt(S)}</title>
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
    <h1 class="title">${Tt(S)}</h1>
    ${`<div class="sub-time">${Tt(ne)}</div>`}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">তারিখ</th>
          ${Ye}
        </tr>
      </thead>
      <tbody>
        ${le}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${he?`<div class="note-box">${Tt(he).replace(/\n/g,"<br/>")}</div>`:"<div></div>"}
      <div class="sig-box">
        ${`<div>${Tt(D)}</div>`}
        ${Fe?`<div>${Tt(Fe)}</div>`:""}
        ${$?`<div>${Tt($)}</div>`:""}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,pe=window.open("","_blank","width=1100,height=750");pe&&(pe.document.open(),pe.document.write(ot),pe.document.close())}function il({routine:m}){var T;const _=((T=m==null?void 0:m.schedule)==null?void 0:T.kind)==="matrix"?m.schedule:null;return _?e.jsxs("div",{children:[_.startTime&&e.jsx("div",{style:{fontSize:"0.88rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:_.startTime}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,minWidth:"90px"},children:"তারিখ"}),(_.dates||[]).map(S=>e.jsxs("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,minWidth:"110px"},children:[e.jsx("div",{children:S.dateLabel||Gs(S.date)}),(S.dayLabel||As(S.date))&&e.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600},children:S.dayLabel||As(S.date)})]},S.id))]})}),e.jsx("tbody",{children:(_.rows||[]).map((S,ne)=>e.jsxs("tr",{style:{background:ne%2===1?"#e2e8f0":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,color:"#0f172a"},children:S.className}),(_.dates||[]).map(he=>{const D=(S.cells&&S.cells[he.id]?String(S.cells[he.id]).trim():"")||"-";return e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",color:"#0f172a",whiteSpace:"pre-line"},children:D},he.id)})]},S.id||ne))})]})}),(_.footerNote||_.signatureName||_.signatureOrg)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"16px",flexWrap:"wrap",marginTop:"12px"},children:[_.footerNote?e.jsx("div",{style:{border:"1px solid #94a3b8",padding:"8px 12px",borderRadius:"6px",fontSize:"0.83rem",maxWidth:"640px",background:"#f8fafc",color:"#1e293b"},children:_.footerNote}):e.jsx("div",{}),e.jsxs("div",{style:{textAlign:"center",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",marginLeft:"auto"},children:[_.signatureRole&&e.jsx("div",{children:_.signatureRole}),_.signatureName&&e.jsx("div",{children:_.signatureName}),_.signatureOrg&&e.jsx("div",{children:_.signatureOrg})]})]})]}):null}function rl({initialRoutine:m=null,classes:_=[],subjects:T=[],exams:S=[],selectedExam:ne=null,madrasahName:he="আন্-নূর ইসলামিক একাডেমি",onSaved:D,onClose:Fe}){var xt;const $=((xt=m==null?void 0:m.schedule)==null?void 0:xt.kind)==="matrix"?m.schedule:null,[Ye,le]=l.useState([]);l.useEffect(()=>{T.length>0||X.get("/students/subjects").then(x=>{var M,I;(M=x.data)!=null&&M.success&&le(((I=x.data.data)==null?void 0:I.subjects)||[])}).catch(()=>{})},[T.length]);const ot=l.useMemo(()=>{const M=(T.length>0?T:Ye).map(I=>typeof I=="string"?I:I==null?void 0:I.name).map(I=>String(I||"").trim()).filter(I=>I&&I!=="-");return[...new Set(M)]},[T,Ye]),pe=l.useMemo(()=>[..._].sort((x,M)=>(Number(x.order)||999)-(Number(M.order)||999)),[_]),[O,oe]=l.useState((m==null?void 0:m.title)||(ne?`${ne.name} / ২০২৬ ইং`:"মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং")),[De,ue]=l.useState((m==null?void 0:m.exam)||(ne==null?void 0:ne._id)||""),[Ue,Ke]=l.useState((m==null?void 0:m.stream)||"all"),[dt,et]=l.useState((m==null?void 0:m.status)||"published"),[ct,J]=l.useState(($==null?void 0:$.startTime)||"পরীক্ষা শুরু : সকাল ৯ টা।"),[de,G]=l.useState(()=>{var x;return(x=$==null?void 0:$.dates)!=null&&x.length?$.dates:[{id:"d_1",date:"",dateLabel:"০৭/১১/২৬",dayLabel:"শনিবার"},{id:"d_2",date:"",dateLabel:"০৮/১১/২৬",dayLabel:"রবিবার"},{id:"d_3",date:"",dateLabel:"০৯/১১/২৬",dayLabel:"সোমবার"},{id:"d_4",date:"",dateLabel:"১০/১১/২৬",dayLabel:"মঙ্গলবার"},{id:"d_5",date:"",dateLabel:"১১/১১/২৬",dayLabel:"বুধবার"},{id:"d_6",date:"",dateLabel:"১২/১১/২৬",dayLabel:"বৃহস্পতিবার"}]}),[ze,u]=l.useState(()=>{var x;return(x=$==null?void 0:$.rows)!=null&&x.length?$.rows:pe.length>0?pe.map((M,I)=>({id:`r_${M._id||I}`,classId:M._id||"",className:M.name,cells:{}})):[{id:"r_1",classId:"",className:"প্লে",cells:{}},{id:"r_2",classId:"",className:"নার্সারি",cells:{}},{id:"r_3",classId:"",className:"প্রথম",cells:{}},{id:"r_4",classId:"",className:"দ্বিতীয়",cells:{}},{id:"r_5",classId:"",className:"তৃতীয়",cells:{}}]}),[lt,ee]=l.useState(($==null?void 0:$.footerNote)??"বিঃদ্রঃ মডেল টেস্ট পরীক্ষার ফি, নভেম্বর / ২০২৬ ইং মাসের বেতনসহ যাবতীয় পাওনা পরিশোধ করে শ্রেণি শিক্ষকের নিকট থেকে মডেল টেস্ট পরীক্ষার প্রবেশ পত্র সংগ্রহ করুন।"),[qe,St]=l.useState(($==null?void 0:$.signatureRole)??"প্রধান শিক্ষক,"),[pt,be]=l.useState(($==null?void 0:$.signatureName)??"হাফেজ মাও. মোঃ আরিফুর রহমান"),[ut,Ze]=l.useState(($==null?void 0:$.signatureOrg)??he),[Nt,F]=l.useState(!1),[it,Re]=l.useState(""),[Ve,Qe]=l.useState(!1),[He,h]=l.useState(null),ce=l.useMemo(()=>{const x=new Set(ze.map(M=>String(M.className||"").trim().toLowerCase()));return pe.filter(M=>!x.has(String(M.name||"").trim().toLowerCase()))},[pe,ze]),q=()=>{var Z;const x=`d_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,M=(Z=de[de.length-1])==null?void 0:Z.date;let I="";if(M){const W=new Date(`${M}T00:00:00`);Number.isNaN(W.getTime())||(W.setDate(W.getDate()+1),I=W.toISOString().slice(0,10))}G(W=>[...W,{id:x,date:I,dateLabel:I?Gs(I):"নতুন তারিখ",dayLabel:I?As(I):"বার"}])},K=x=>{de.length<=1||G(M=>M.filter(I=>I.id!==x))},Ee=(x,M)=>{G(I=>I.map(Z=>Z.id===x?{...Z,date:M,dateLabel:M?Gs(M):Z.dateLabel,dayLabel:M?As(M):Z.dayLabel}:Z))},me=(x,M,I)=>{G(Z=>Z.map(W=>W.id===x?{...W,[M]:I}:W))},B=x=>{u(M=>M.filter(I=>I.id!==x))},P=x=>{const M=`r_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;u(I=>[...I,{id:M,classId:x._id||"",className:x.name,cells:{}}]),F(!1),Re("")},Te=(x,M,I)=>{u(Z=>Z.map(W=>W.id===x?{...W,cells:{...W.cells||{},[M]:I}}:W))},mt=()=>{const x=S.find(M=>M._id===De);return{_id:(m==null?void 0:m._id)||void 0,title:O.trim()||"সম্মিলিত পরীক্ষার রুটিন",exam:De||null,examName:(x==null?void 0:x.name)||(m==null?void 0:m.examName)||"",classLevel:null,className:"সম্মিলিত",stream:Ue,status:dt,instructions:lt,schedule:{kind:"matrix",startTime:ct,dates:de,rows:ze,footerNote:lt,signatureRole:qe,signatureName:pt,signatureOrg:ut}}},Ce=async()=>{var x,M,I;if(!O.trim()){h({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}if(ze.length===0){h({type:"error",message:"অন্তত একটি শ্রেণির রো যোগ করুন"});return}Qe(!0),h(null);try{const Z=await X.post("/exams/routines",mt());(x=Z.data)!=null&&x.success&&(h({type:"success",message:"সম্মিলিত রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!"}),D&&D(Z.data.data.routine))}catch(Z){h({type:"error",message:((I=(M=Z.response)==null?void 0:M.data)==null?void 0:I.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Qe(!1)}};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Bt,{size:20,style:{color:"var(--primary)"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700},children:m?"সম্মিলিত ম্যাট্রিক্স রুটিন সম্পাদনা":"নতুন সম্মিলিত ম্যাট্রিক্স রুটিন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>bn(mt(),he),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:15})," প্রিন্ট প্রিভিউ"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:Ce,disabled:Ve,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(da,{size:15})," ",Ve?"সংরক্ষণ হচ্ছে...":"রুটিন সেভ করুন"]}),Fe&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:Fe,children:[e.jsx(la,{size:16})," বন্ধ করুন"]})]})]}),He&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:He.type==="success"?"#dcfce7":"#fee2e2",color:He.type==="success"?"#166534":"#991b1b",fontSize:"0.88rem",fontWeight:600},children:[He.type==="success"?e.jsx(oa,{size:16}):e.jsx(os,{size:16}),e.jsx("span",{children:He.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",value:O,onChange:x=>oe(x.target.value),placeholder:"যেমন: মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"পরীক্ষা শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",value:ct,onChange:x=>J(x.target.value),placeholder:"পরীক্ষা শুরু : সকাল ৯ টা।"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"সংযুক্ত পরীক্ষা (ঐচ্ছিক)"}),e.jsxs("select",{className:"form-input form-select",value:De,onChange:x=>ue(x.target.value),children:[e.jsx("option",{value:"",children:"সাধারণ / সকল পরীক্ষা"}),S.map(x=>e.jsx("option",{value:x._id,children:x.name},x._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিভাগ ও স্ট্যাটাস"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("select",{className:"form-input form-select",value:Ue,onChange:x=>Ke(x.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ"}),e.jsx("option",{value:"noorani",children:"নূরানী"}),e.jsx("option",{value:"hifz",children:"হিফজ"}),e.jsx("option",{value:"kitab",children:"কিতাব"})]}),e.jsxs("select",{className:"form-input form-select",value:dt,onChange:x=>et(x.target.value),children:[e.jsx("option",{value:"published",children:"প্রকাশিত"}),e.jsx("option",{value:"draft",children:"খসড়া"})]})]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",position:"relative"},children:[e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>F(x=>!x),style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(Kt,{size:15})," শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)"]}),Nt&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"6px",zIndex:30,background:"var(--bg-card, #fff)",border:"1px solid var(--border-color)",borderRadius:"10px",padding:"12px",boxShadow:"0 10px 25px rgba(15,23,42,0.18)",minWidth:"280px"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"তালিকা থেকে শ্রেণি নির্বাচন করুন:"}),ce.length>0?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"10px"},children:ce.map(x=>e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>P(x),style:{fontSize:"0.8rem",padding:"4px 10px"},children:["+ ",x.name]},x._id))}):e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px"},children:"সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।"}),e.jsxs("div",{style:{display:"flex",gap:"6px",borderTop:"1px solid var(--border-color)",paddingTop:"8px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)",value:it,onChange:x=>Re(x.target.value),style:{fontSize:"0.82rem",padding:"5px 8px",height:"32px"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>{it.trim()&&P({_id:"",name:it.trim()})},children:"যোগ"})]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:q,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(Kt,{size:15})," তারিখ কলাম যোগ করুন"]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto",marginBottom:"16px"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,minWidth:"720px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,width:"130px",verticalAlign:"middle"},children:"তারিখ / শ্রেণি"}),de.map(x=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",minWidth:"145px",verticalAlign:"top",whiteSpace:"normal"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"4px"},children:[e.jsx("input",{type:"date",value:x.date||"",onChange:M=>Ee(x.id,M.target.value),style:{fontSize:"0.72rem",padding:"2px 4px",borderRadius:"4px",border:"1px solid #94a3b8",width:"112px"},title:"তারিখ নির্বাচন করুন (বাংলা বার অটোমেটিক আসবে)"}),de.length>1&&e.jsx("button",{type:"button",onClick:()=>K(x.id),title:"এই তারিখ কলামটি মুছুন",style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"2px",lineHeight:1},children:e.jsx(la,{size:14})})]}),e.jsx("input",{type:"text",value:x.dateLabel||"",onChange:M=>me(x.id,"dateLabel",M.target.value),placeholder:"০৭/১১/২৬",style:{display:"block",width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.82rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}}),e.jsx("input",{type:"text",value:x.dayLabel||"",onChange:M=>me(x.id,"dayLabel",M.target.value),placeholder:"শনিবার",style:{display:"block",width:"100%",textAlign:"center",fontWeight:600,fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}})]})},x.id)),e.jsx("th",{style:{border:"1px solid #94a3b8",width:"56px",textAlign:"center"},children:"মুছুন"})]})}),e.jsx("tbody",{children:ze.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:de.length+2,style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:["কোনো শ্রেণির রো নেই। উপরে ",e.jsx("strong",{children:'"+ শ্রেণি যোগ করুন"'})," বাটনে ক্লিক করুন।"]})}):ze.map((x,M)=>e.jsxs("tr",{style:{background:M%2===1?"#f1f5f9":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"6px",verticalAlign:"middle"},children:e.jsx("input",{type:"text",value:x.className,onChange:I=>u(Z=>Z.map(W=>W.id===x.id?{...W,className:I.target.value}:W)),style:{width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.86rem",padding:"5px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"transparent"}})}),de.map(I=>e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"5px",verticalAlign:"middle"},children:[e.jsxs("select",{value:"",onChange:Z=>{const W=Z.target.value;if(!W)return;if(W==="__CLEAR__"){Te(x.id,I.id,"");return}const at=String(x.cells&&x.cells[I.id]||"").trim(),we=!at||at==="-"?W:`${at} + ${W}`;Te(x.id,I.id,we)},style:{width:"100%",fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #94a3b8",marginBottom:"4px",background:"#f8fafc",color:"#0f172a"},children:[e.jsx("option",{value:"",children:"+ বিষয় বাছুন..."}),e.jsx("option",{value:"__CLEAR__",children:"— খালি করুন (-)"}),ot.map(Z=>e.jsx("option",{value:Z,children:Z},Z))]}),e.jsx("textarea",{rows:2,value:x.cells&&x.cells[I.id]||"",onChange:Z=>Te(x.id,I.id,Z.target.value),placeholder:"-",style:{width:"100%",textAlign:"center",fontSize:"0.83rem",padding:"4px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",resize:"vertical",background:"#ffffff"}})]},I.id)),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",verticalAlign:"middle"},children:e.jsx("button",{type:"button",onClick:()=>B(x.id),title:`${x.className} শ্রেণির রো মুছে ফেলুন`,style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"6px"},children:e.jsx(Is,{size:16})})})]},x.id))})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিঃদ্রঃ (নোট বক্স)"}),e.jsx("textarea",{rows:3,className:"form-input",value:lt,onChange:x=>ee(x.target.value),style:{width:"100%",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600,marginBottom:0},children:"স্বাক্ষর ব্লক (ডান পাশ)"}),e.jsx("input",{type:"text",className:"form-input",value:qe,onChange:x=>St(x.target.value),placeholder:"প্রধান শিক্ষক,",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:pt,onChange:x=>be(x.target.value),placeholder:"প্রধান শিক্ষকের নাম",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:ut,onChange:x=>Ze(x.target.value),placeholder:"প্রতিষ্ঠানের নাম",style:{fontSize:"0.84rem"}})]})]})]})}const sa=[{key:"balok",label:"বালক শাখা"},{key:"balika",label:"বালিকা শাখা"}],cn=[{key:"hifz",label:"হিফজ বিভাগ"},{key:"najera",label:"নাজেরা বিভাগ"},{key:"maktab",label:"মক্তব বিভাগ"}],Ds={hifz:[{key:"ক",label:"ক শাখা"},{key:"খ",label:"খ শাখা"},{key:"গ",label:"গ শাখা"},{key:"ঘ",label:"ঘ শাখা"}],najera:[{key:"ক",label:"ক শাখা"},{key:"খ",label:"খ শাখা"},{key:"গ",label:"গ শাখা"},{key:"ঘ",label:"ঘ শাখা"}],maktab:[{key:"আমপারা",label:"আমপারা"},{key:"কায়দা",label:"কায়দা"}]},pn=[{key:"model_test",label:"মডেল টেস্ট পরীক্ষা"},{key:"term_1",label:"১ম সাময়িক পরীক্ষা"},{key:"term_2",label:"২য় সাময়িক পরীক্ষা"},{key:"monthly",label:"মাসিক পরীক্ষা"},{key:"weekly",label:"সাপ্তাহিক পরীক্ষা"}],ol={key:"final",label:"বার্ষিক / ফাইনাল পরীক্ষা"},aa=[{key:"05",label:"০৫ পারা গ্রুপ (১৫০)"},{key:"10_15",label:"১০ ও ১৫ পারা গ্রুপ (১৫০)"},{key:"20",label:"২০ পারা গ্রুপ (১৭০)"},{key:"30",label:"৩০ পারা গ্রুপ (২০০)"}];function _t(m){return String(m||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function mn({embedded:m=!1}){var Re,Ve,Qe,He;const{user:_}=ra(),{madrasahName:T,address:S}=Ys(_),[ne,he]=l.useState("balok"),[D,Fe]=l.useState("hifz"),[$,Ye]=l.useState("ক"),[le,ot]=l.useState("model_test"),[pe,O]=l.useState("05"),[oe,De]=l.useState("2026"),[ue,Ue]=l.useState({columns:[],totalMax:200}),[Ke,dt]=l.useState([]),[et,ct]=l.useState([]),[J,de]=l.useState(""),[G,ze]=l.useState(!1),[u,lt]=l.useState(!1),[ee,qe]=l.useState(null);l.useEffect(()=>{const h=Ds[D]||Ds.hifz;h.some(ce=>ce.key===$)||Ye(h[0].key),D==="maktab"&&le==="final"&&ot("model_test")},[D,$,le]);const St=l.useMemo(()=>D==="hifz"||D==="najera"?[...pn,ol]:pn,[D]),pt=async()=>{var h,ce,q;ze(!0),qe(null);try{const K=await X.get("/hifz-results/sheet",{params:{branchType:ne,department:D,subBranch:$,examCategory:le,paraGroup:le==="final"?pe:"",academicYear:oe}});(h=K.data)!=null&&h.success&&(Ue(K.data.data.schema||{columns:[],totalMax:0}),dt(K.data.data.rows||[]),ct(K.data.data.otherStudents||[]))}catch(K){qe({type:"error",message:((q=(ce=K.response)==null?void 0:ce.data)==null?void 0:q.message)||"ফলাফল শিট লোড করতে সমস্যা হয়েছে"})}finally{ze(!1)}};l.useEffect(()=>{pt()},[ne,D,$,le,pe,oe]);const be=l.useMemo(()=>{const h=Ke.map(me=>{var Te;let B=0,P=!1;for(const mt of ue.columns){const Ce=(Te=me.marks)==null?void 0:Te[mt.key];Ce!==""&&Ce!==null&&Ce!==void 0&&!isNaN(Number(Ce))&&(B+=Number(Ce),P=!0)}return{...me,liveTotal:B,hasAnyMark:P}}),ce=[...h].filter(me=>me.hasAnyMark).sort((me,B)=>B.liveTotal-me.liveTotal),q=new Map;let K=0,Ee=null;for(const me of ce)Ee!==null&&me.liveTotal===Ee||(K+=1,Ee=me.liveTotal),q.set(me.studentId,K);return h.map(me=>({...me,liveRank:q.get(me.studentId)||null}))},[Ke,ue.columns]),ut=(h,ce)=>{dt(q=>q.map(K=>K.studentId===h?{...K,readingAmount:ce}:K))},Ze=(h,ce,q,K)=>{if(K===""){dt(B=>B.map(P=>P.studentId===h?{...P,marks:{...P.marks||{},[ce]:""}}:P));return}const Ee=Number(K);if(isNaN(Ee))return;const me=Math.max(0,Math.min(q,Ee));dt(B=>B.map(P=>P.studentId===h?{...P,marks:{...P.marks||{},[ce]:me}}:P))},Nt=async()=>{var h,ce;if(J)try{await X.patch("/hifz-results/assign-subbranch",{studentId:J,subBranch:$}),de(""),await pt(),qe({type:"success",message:`শিক্ষার্থীকে "${$}" শাখায় যুক্ত করা হয়েছে`})}catch(q){qe({type:"error",message:((ce=(h=q.response)==null?void 0:h.data)==null?void 0:ce.message)||"শিক্ষার্থী যুক্ত করতে সমস্যা হয়েছে"})}},F=async()=>{var h,ce,q;if(Ke.length!==0){lt(!0),qe(null);try{const K=Ke.map(me=>({studentId:me.studentId,readingAmount:me.readingAmount||"",marks:me.marks||{}})),Ee=await X.post("/hifz-results/bulk-save",{branchType:ne,department:D,subBranch:$,examCategory:le,paraGroup:le==="final"?pe:"",academicYear:oe,entries:K});(h=Ee.data)!=null&&h.success&&(qe({type:"success",message:Ee.data.message||"ফলাফল সফলভাবে সংরক্ষিত হয়েছে!"}),await pt())}catch(K){qe({type:"error",message:((q=(ce=K.response)==null?void 0:ce.data)==null?void 0:q.message)||"ফলাফল সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{lt(!1)}}},it=()=>{var x,M,I,Z;const h=((x=sa.find(W=>W.key===ne))==null?void 0:x.label)||"বালক শাখা",ce=D==="hifz"?"হেফজ":D==="najera"?"নাজেরা":"মক্তব",q=D==="maktab"?$:`${$} গ্রুপ`,K=le==="final"&&(D==="hifz"||D==="najera")?` — ${((I=(M=aa.find(W=>W.key===pe))==null?void 0:M.label)==null?void 0:I.split(" (")[0])||""}`:"",Ee=`বিষয়ঃ ${ce} (${q})${K}`,me=`${((Z=St.find(W=>W.key===le))==null?void 0:Z.label)||"পরীক্ষা"}-${ve(oe)}`,B=ue.columns.map(W=>`<th>${_t(W.label)}</th>`).join(""),P=ue.columns.map(W=>`<th>${_t(ve(W.max))}</th>`).join(""),Te=Math.max(14,be.length),mt=Array.from({length:Te}).map((W,at)=>{const we=be[at];if(!we){const bt=ue.columns.map(()=>"<td></td>").join("");return`<tr>
            <td class="c-center">${ve(at+1)}</td>
            <td></td>
            <td></td>
            ${bt}
            <td></td>
            <td class="tartib-col"></td>
          </tr>`}const Wt=ue.columns.map(bt=>{var xe;const yt=(xe=we.marks)==null?void 0:xe[bt.key],Oe=yt!==""&&yt!==null&&yt!==void 0?ve(yt):"";return`<td class="c-center">${_t(Oe)}</td>`}).join("");return`<tr>
          <td class="c-center">${ve(at+1)}</td>
          <td class="name-col">${_t(we.name)}</td>
          <td class="c-center">${_t(we.readingAmount||"")}</td>
          ${Wt}
          <td class="c-center" style="font-weight:700;">${we.hasAnyMark?ve(we.liveTotal):""}</td>
          <td class="c-center tartib-col">${we.liveRank?ve(we.liveRank):""}</td>
        </tr>`}).join(""),Ce=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${_t(me)} - ${_t(Ee)}</title>
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
    <div class="header-side-box">${_t(h)}</div>
    <div class="header-center">
      <div class="inst-bn">${_t(T)}</div>
      <div class="inst-en">AN-NUR ISLAMIC ACADEMY</div>
      <div class="inst-addr">${_t(S||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ।")}</div>
    </div>
    <div class="header-side-box">${_t(Ee)}</div>
  </div>
  <div class="exam-title">${_t(me)}</div>
  <table>
    <thead>
      <tr>
        <th rowspan="2" style="width:42px;">ক্রমিক</th>
        <th rowspan="2" style="min-width:145px;">নাম</th>
        <th rowspan="2" style="width:95px;">পড়ার পরিমান</th>
        ${B}
        <th style="width:52px;">মোট</th>
        <th rowspan="2" class="tartib-col">তারতীব</th>
      </tr>
      <tr>
        ${P}
        <th>${ve(ue.totalMax)}</th>
      </tr>
    </thead>
    <tbody>
      ${mt}
    </tbody>
  </table>
  <div class="footer-sig">পরীক্ষকের স্বাক্ষর</div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,xt=window.open("","_blank","width=1120,height=780");xt&&(xt.document.open(),xt.document.write(Ce),xt.document.close())};return e.jsxs("div",{className:"animate-fade-in",children:[!m&&e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Fn,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ, নাজেরা ও মক্তব ফলাফল"})]}),e.jsx("p",{className:"page-subtitle",children:"বালক ও বালিকা শাখা ➔ বিভাগ ➔ উপ-শাখা ও পরীক্ষা অনুযায়ী নম্বর এন্ট্রি ও প্রিন্ট"})]})}),e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(175px, 1fr))",gap:"12px",alignItems:"end"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"১. প্রধান শাখা"}),e.jsx("select",{className:"form-input form-select",value:ne,onChange:h=>he(h.target.value),children:sa.map(h=>e.jsx("option",{value:h.key,children:h.label},h.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"২. বিভাগ"}),e.jsx("select",{className:"form-input form-select",value:D,onChange:h=>Fe(h.target.value),children:cn.map(h=>e.jsx("option",{value:h.key,children:h.label},h.key))})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:["৩. ",D==="maktab"?"উপ-বিভাগ (আমপারা/কায়দা)":"উপ-শাখা (ক/খ/গ/ঘ)"]}),e.jsx("select",{className:"form-input form-select",value:$,onChange:h=>Ye(h.target.value),children:(Ds[D]||Ds.hifz).map(h=>e.jsx("option",{value:h.key,children:h.label},h.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"৪. পরীক্ষার ক্যাটাগরি"}),e.jsx("select",{className:"form-input form-select",value:le,onChange:h=>ot(h.target.value),children:St.map(h=>e.jsx("option",{value:h.key,children:h.label},h.key))})]}),le==="final"&&(D==="hifz"||D==="najera")&&e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"৫. ফাইনাল পারা গ্রুপ"}),e.jsx("select",{className:"form-input form-select",value:pe,onChange:h=>O(h.target.value),children:aa.map(h=>e.jsx("option",{value:h.key,children:h.label},h.key))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:700},children:"শিক্ষাবর্ষ"}),e.jsx("input",{type:"text",className:"form-input",value:oe,onChange:h=>De(h.target.value),placeholder:"2026"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginTop:"14px",paddingTop:"12px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:et.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",value:J,onChange:h=>de(h.target.value),style:{width:"auto",minWidth:"230px",marginBottom:0,height:"36px",fontSize:"0.84rem"},children:[e.jsxs("option",{value:"",children:["+ বিভাগের অন্য শিক্ষার্থী (",ve(et.length)," জন)..."]}),et.map(h=>e.jsxs("option",{value:h.studentId,children:[h.name," (",h.section||"সেকশন নেই",")"]},h.studentId))]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Nt,disabled:!J,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(tl,{size:14})," এই শাখায় আনুন"]})]})}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:pt,disabled:G,children:[e.jsx(Os,{size:14,className:G?"animate-spin":""})," রিফ্রেশ"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:it,children:[e.jsx(ft,{size:14})," প্রিন্ট মার্কশিট"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:F,disabled:u||Ke.length===0,children:[e.jsx(da,{size:14})," ",u?"সংরক্ষণ হচ্ছে...":"ফলাফল সংরক্ষণ করুন"]})]})]})]}),ee&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:ee.type==="success"?"#dcfce7":"#fee2e2",color:ee.type==="success"?"#166534":"#991b1b",fontWeight:600,fontSize:"0.88rem"},children:[ee.type==="success"?e.jsx(oa,{size:16}):e.jsx(os,{size:16}),e.jsx("span",{children:ee.message})]}),e.jsxs("div",{className:"card",style:{padding:"16px 20px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{fontWeight:700,fontSize:"1rem",color:"var(--text-primary)"},children:[(Re=sa.find(h=>h.key===ne))==null?void 0:Re.label," •"," ",(Ve=cn.find(h=>h.key===D))==null?void 0:Ve.label," (",$,") •"," ",(Qe=St.find(h=>h.key===le))==null?void 0:Qe.label,le==="final"?` (${(He=aa.find(h=>h.key===pe))==null?void 0:He.label})`:""]}),e.jsxs("span",{className:"badge badge-info",children:["মোট শিক্ষার্থী: ",ve(be.length)," জন • পূর্ণমান: ",ve(ue.totalMax)]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.86rem",minWidth:"820px"},children:[e.jsxs("thead",{children:[e.jsxs("tr",{style:{background:"#e2e8f0",color:"#0f172a"},children:[e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"48px"},children:"ক্রমিক"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px 10px",textAlign:"left",minWidth:"170px"},children:"নাম"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"115px"},children:"পড়ার পরিমান"}),ue.columns.map(h=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",minWidth:"86px"},children:h.label},h.key)),e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"72px"},children:"মোট"}),e.jsx("th",{rowSpan:2,style:{border:"1px solid #94a3b8",padding:"6px",textAlign:"center",width:"68px",background:"#cbd5e1"},children:"তারতীব"})]}),e.jsxs("tr",{style:{background:"#f1f5f9",color:"#0f172a"},children:[ue.columns.map(h=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.8rem"},children:ve(h.max)},`${h.key}-max`)),e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"4px",textAlign:"center",fontSize:"0.8rem"},children:ve(ue.totalMax)})]})]}),e.jsx("tbody",{children:G?e.jsx("tr",{children:e.jsx("td",{colSpan:ue.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"তালিকা লোড হচ্ছে..."})}):be.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:ue.columns.length+5,style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:"এই শাখা ও উপ-শাখায় কোনো সক্রিয় শিক্ষার্থী পাওয়া যায়নি। নতুন ভর্তিতে সংশ্লিষ্ট বিভাগ ও উপ-শাখা নির্বাচন করুন অথবা উপরের ড্রপডাউন থেকে শিক্ষার্থী যুক্ত করুন।"})}):be.map((h,ce)=>e.jsxs("tr",{style:{background:ce%2===1?"#f8fafc":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700},children:ve(ce+1)}),e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"6px 10px"},children:[e.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:h.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:["আইডি: ",h.studentCode,h.rollNumber?` • রোল: ${ve(h.rollNumber)}`:""]})]}),e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"4px"},children:e.jsx("input",{type:"text",value:h.readingAmount||"",onChange:q=>ut(h.studentId,q.target.value),placeholder:"যেমন: ১-৩০",style:{width:"100%",textAlign:"center",padding:"5px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.83rem"}})}),ue.columns.map(q=>{var K;return e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"4px"},children:e.jsx("input",{type:"number",min:0,max:q.max,value:((K=h.marks)==null?void 0:K[q.key])??"",onChange:Ee=>Ze(h.studentId,q.key,q.max,Ee.target.value),style:{width:"100%",textAlign:"center",padding:"5px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.85rem",fontWeight:600}})},q.key)}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,color:"#065f46"},children:h.hasAnyMark?ve(h.liveTotal):"—"}),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,background:"#e2e8f0",color:"#0f172a"},children:h.liveRank?ve(h.liveRank):"—"})]},h.studentId))})]})})]})]})}const dl=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],na=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function cl(m,_=!1){if(!m)return"—";const T=_?" (যৌথ)":"";return m===1?`🥇 ১ম স্থান${T}`:m===2?`🥈 ২য় স্থান${T}`:m===3?`🥉 ৩য় স্থান${T}`:m===4?`৪র্থ${T}`:m===5?`৫ম${T}`:m===6?`৬ষ্ঠ${T}`:m===7?`৭ম${T}`:m===8?`৮ম${T}`:m===9?`৯ম${T}`:m===10?`১০ম${T}`:`${m}তম${T}`}function Ll({initialViewMode:m}){var ba,ya,ja,va,Na,wa,ka,Sa,za,Ca,Ia,Aa,$a,_a,Wa,La,Ma,Ra,Ta,Ea,Ba,Da,Oa,Pa,Fa,Ha,Ga,Ya,Ua,qa,Za,Va,Qa,Xa,Ja;const _=Hn(),T=Gn(),{user:S}=ra(),{madrasahName:ne,branchName:he}=Ys(S),[D,Fe]=l.useState([]),[$,Ye]=l.useState([]),[le,ot]=l.useState(!0),[pe,O]=l.useState(null),[oe,De]=l.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[ue,Ue]=l.useState(!1),[Ke,dt]=l.useState(!1),[et,ct]=l.useState(null),[J,de]=l.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[G,ze]=l.useState([]),[u,lt]=l.useState(null),[ee,qe]=l.useState([]),[St,pt]=l.useState([]),[be,ut]=l.useState(""),[Ze,Nt]=l.useState(""),[F,it]=l.useState(!1),[Re,Ve]=l.useState([]),[Qe,He]=l.useState({}),[h,ce]=l.useState(!1),[q,K]=l.useState([]),Ee=m==="routine"||(T==null?void 0:T.pathname)==="/exam-routine",me=m==="admit_card"||(T==null?void 0:T.pathname)==="/admit-card",[B,P]=l.useState(Ee?"routine":me?"admit_card":"marks"),[Te,mt]=l.useState(!1),[Ce,xt]=l.useState("all"),[x,M]=l.useState([]),[I,Z]=l.useState([]),[W,at]=l.useState(!1),[we,Wt]=l.useState("landscape"),[bt,yt]=l.useState(""),[Oe,xe]=l.useState("all"),[ye,ke]=l.useState(null),[Ht,Dt]=l.useState(!1),[Gt,ts]=l.useState([]),[rt,Yt]=l.useState(""),[zt,Ut]=l.useState("all"),[Ct,ds]=l.useState(""),[qt,i]=l.useState([]),[y,N]=l.useState(!1),[ae,U]=l.useState(new Set),[ge,c]=l.useState(""),[z,w]=l.useState("all"),[te,V]=l.useState(!1),[R,se]=l.useState(null),[ie,je]=l.useState([]),[Ae,Ie]=l.useState(!1),[Se,ht]=l.useState("all"),[Lt,Zt]=l.useState("all"),[It,$s]=l.useState("all"),[_s,ss]=l.useState(!1),[Ws,Vt]=l.useState(!1),[as,Qt]=l.useState(null),[cs,Ns]=l.useState(!1),[ps,jt]=l.useState(null),[ca,Us]=l.useState(null),[wt,At]=l.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),Mt=(S==null?void 0:S.userType)==="guardian",Ls=(S==null?void 0:S.userType)==="student",Le=Ls||Mt,[$t,yn]=l.useState([]),[Ot,pa]=l.useState(""),[Pt,qs]=l.useState(null);l.useEffect(()=>{if(pe){const t=setTimeout(()=>O(null),4e3);return()=>clearTimeout(t)}},[pe]);const Xt=async(t=null)=>{ot(!0);try{const s={},a=t||Ot;Mt&&a&&(s.studentId=a);const n=await X.get("/exams",{params:s});n.data.success&&Fe(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),O({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{ot(!1)}},jn=t=>{var a,n;pa(t);const s=$t.find(o=>o._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const o=s.currentEnrollment.classLevel,d=typeof o=="object"?o:{_id:o,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};qs(d),c(d._id)}Xt(t),Le&&zs(!1,t)},ws=async t=>{if(!t){ze([]);return}try{const s=await X.get(`/students/subjects?classLevel=${t}`);s.data.success&&ze(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},vn=async()=>{try{const t=await X.get("/students/classes");t.data.success&&Ye(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};l.useEffect(()=>{(async()=>{var s,a,n,o,d,p;if(Mt)try{const r=await X.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const k=r.data.data;yn(k),pa(k[0]._id);const j=(a=k[0].currentEnrollment)==null?void 0:a.classLevel;if(j){const b=typeof j=="object"?j:{_id:j,name:((n=k[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};qs(b),c(b._id)}Xt(k[0]._id)}else Xt()}catch(r){console.error("Error loading guardian children",r),Xt()}else if(Ls){try{const r=await X.get("/students",{params:{limit:1}});if(r.data.success&&((o=r.data.data)==null?void 0:o.length)>0){const k=r.data.data[0],j=(d=k.currentEnrollment)==null?void 0:d.classLevel;if(j){const b=typeof j=="object"?j:{_id:j,name:((p=k.currentEnrollment)==null?void 0:p.className)||"শ্রেণি"};qs(b),c(b._id)}}}catch(r){console.error("Error loading student profile for class",r)}Xt()}else Xt();vn(),xs()})(),Le&&zs()},[]),l.useEffect(()=>{B==="student_result"&&u&&Gt.length===0&&Sn(u),B==="subject_result"&&ee.length>0&&!rt&&(Yt(ee[0]._id),Rs(ee[0]._id,zt))},[B,u,ee,Gt.length]);const Ms=t=>{de({...J,[t.target.name]:t.target.value})},Nn=async t=>{var o;ct(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(d=>typeof d=="object"?d._id:d):[],n=((o=t.classLevel)==null?void 0:o._id)||"";de({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&ws(n),Ue(!0)},wn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await X.delete(`/exams/${t}`)).data.success&&(O({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Xt())}catch(n){console.error("Failed to delete exam",n);const o=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";O({type:"error",message:o})}},kn=async t=>{var s,a,n,o;if(t.preventDefault(),J.examCategory==="monthly_test"&&((s=J.selectedSubjects)==null?void 0:s.length)!==4){O({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=J.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}dt(!0);try{let d;et?d=await X.patch(`/exams/${et}`,J):d=await X.post("/exams",J),d.data.success&&(Ue(!1),ct(null),de({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),O({type:"success",message:et?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Xt())}catch(d){console.error("Failed to submit exam",d);const p=((o=(n=d.response)==null?void 0:n.data)==null?void 0:o.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";O({type:"error",message:p})}finally{dt(!1)}},ma=async t=>{var a,n,o,d,p,r,k,j;if(lt(t),ut(""),Nt(""),Ve([]),He({}),K([]),ke(null),yt(""),xe("all"),Yt(""),Ut("all"),ds(""),i([]),U(new Set),Le){it(!0);try{const b={examId:t._id};Mt&&Ot&&(b.studentId=Ot);const g=await X.get("/exams/student-results",{params:b});if((a=g.data)!=null&&a.success&&g.data.data){ke(g.data.data);const f=(n=g.data.data.results)==null?void 0:n[0];K((f==null?void 0:f.subjects)||[])}else{const f=await X.get("/exams/marks",{params:{exam:t._id,...Mt&&Ot?{student:Ot}:{}}});K(((d=(o=f.data)==null?void 0:o.data)==null?void 0:d.marks)||[])}}catch(b){console.error("Failed to load student detailed results",b);try{const g=await X.get("/exams/marks",{params:{exam:t._id,...Mt&&Ot?{student:Ot}:{}}});K(((r=(p=g.data)==null?void 0:p.data)==null?void 0:r.marks)||[])}catch{}}finally{it(!1)}return}const s=((k=t.classLevel)==null?void 0:k._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const b=await X.get(`/students/subjects?classLevel=${s}`);if(b.data.success){let C=b.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const L=t.selectedSubjects.map(Y=>String(typeof Y=="object"?Y._id:Y));C=C.filter(Y=>L.includes(String(Y._id)))}qe(C)}const g=await X.get(`/students/sections?classLevel=${s}`);g.data.success&&pt(g.data.data.sections||[]);const f=await X.get("/students",{params:{classLevel:s,limit:300}});if(f.data.success){const C=f.data.data;let L=Array.isArray(C)?C:(C==null?void 0:C.students)||[];if(L.length===0){const re=(j=(await X.get("/students",{params:{limit:500}})).data)==null?void 0:j.data;L=Array.isArray(re)?re:(re==null?void 0:re.students)||[]}L.sort((Y,re)=>{var _e,Me;return vt(((_e=Y.currentEnrollment)==null?void 0:_e.rollNumber)||Y.roll)-vt(((Me=re.currentEnrollment)==null?void 0:Me.rollNumber)||re.roll)}),ts(L)}}catch(b){console.error("Failed to fetch subjects/sections for mark entry",b)}},Sn=async t=>{var n,o,d;const s=t||u;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const p={limit:300};a&&(p.classLevel=a);const r=await X.get("/students",{params:p});if((o=r.data)!=null&&o.success){const k=r.data.data;let j=Array.isArray(k)?k:(k==null?void 0:k.students)||[];if(j.length===0&&a){const g=(d=(await X.get("/students",{params:{limit:500}})).data)==null?void 0:d.data;j=Array.isArray(g)?g:(g==null?void 0:g.students)||[]}j.sort((b,g)=>{var f,C;return vt(((f=b.currentEnrollment)==null?void 0:f.rollNumber)||b.roll)-vt(((C=g.currentEnrollment)==null?void 0:C.rollNumber)||g.roll)}),ts(j)}}catch(p){console.warn("Failed to load class students:",p)}},Zs=async t=>{var n,o;const a=is(t||bt);if(!a||!String(a).trim()){O({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Dt(!0),ke(null);try{const d=await X.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:u==null?void 0:u._id}});d.data.success&&ke(d.data.data)}catch(d){console.error("Failed to load student result",d);const p=((o=(n=d.response)==null?void 0:n.data)==null?void 0:o.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";O({type:"error",message:p})}finally{Dt(!1)}},Rs=async(t,s)=>{const a=t!==void 0?t:rt,n=s!==void 0?s:zt;if(!a){O({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}N(!0);try{const o={exam:u==null?void 0:u._id,subject:a},d=await X.get("/exams/marks",{params:o});if(d.data.success){let p=d.data.data.marks||[];n&&n!=="all"&&(p=p.filter(k=>{var g,f,C,L;const j=(g=k.student)==null?void 0:g.currentEnrollment,b=typeof(j==null?void 0:j.section)=="object"?((f=j==null?void 0:j.section)==null?void 0:f.name)||((C=j==null?void 0:j.section)==null?void 0:C._id):(j==null?void 0:j.section)||((L=k.student)==null?void 0:L.section);return String(b||"")===String(n)})),i(p);const r=new Set(p.map(k=>{var j;return String(((j=k.student)==null?void 0:j._id)||k._id)}));if(U(r),ee.length===0&&p.length>0){const k={};p.forEach(b=>{b.subject&&typeof b.subject=="object"&&b.subject._id&&(k[b.subject._id]=b.subject)});const j=Object.values(k);j.length>0&&qe(j)}}}catch(o){console.error("Failed to load subject marks",o),O({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{N(!1)}},xa=t=>{const s=t.map(o=>{var d;return String(((d=o.student)==null?void 0:d._id)||o._id)}),a=s.length>0&&s.every(o=>ae.has(o)),n=new Set(ae);a?s.forEach(o=>n.delete(o)):s.forEach(o=>n.add(o)),U(n)},zn=t=>{const s=new Set(ae),a=String(t);s.has(a)?s.delete(a):s.add(a),U(s)},Vs=()=>{var k;if(!ye||!ye.results||ye.results.length===0){O({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=ye.student||{},s=ye.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",o=t.department||"";let d="—";n&&o?d=`${n} (${o})`:n?d=n:o&&(d=o);const p=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${t.name||""}</title>
  ${bs("portrait")}
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
      ${ys({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(u==null?void 0:u.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((k=u==null?void 0:u.classLevel)==null?void 0:k.name)||"—"}</div>
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

      ${js(oe)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(p),r.document.close())},ha=t=>{var o,d,p,r,k,j,b;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(os,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((o=u==null?void 0:u.classLevel)==null?void 0:o.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Vs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((g,f)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:f+1}),e.jsx("td",{className:"font-semibold",children:g.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:g.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:g.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:g.marksObtained!==null&&typeof g.marksObtained=="object"?g.marksObtained.marksObtained:g.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[g.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(g.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:g.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(g.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${g.isPassed?"badge-active":"badge-danger"}`,children:g.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},g.markId||f))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((d=n.term1)==null?void 0:d.obtained)||0," / ",((p=n.term1)==null?void 0:p.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((k=n.term2)==null?void 0:k.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((j=n.term3)==null?void 0:j.obtained)||0," / ",((b=n.term3)==null?void 0:b.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},ga=t=>{var g;const s=(t||qt).filter(f=>{var C;return ae.has(String(((C=f.student)==null?void 0:C._id)||f._id))});if(s.length===0){O({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=ee.find(f=>f._id===rt),n=(a==null?void 0:a.name)||"বিষয়",o=Number(a==null?void 0:a.totalMarks)||100,d=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),p=s.length,r=s.filter(f=>{const C=Number(f.marksObtained)||0;return(o>0?C/o*100:C)>=33}).length,k=p>0?Math.round(r/p*100):0,j=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${n}</title>
  ${bs("portrait")}
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
      ${ys({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((g=u==null?void 0:u.classLevel)==null?void 0:g.name)||"")+" | <strong>পূর্ণমান:</strong> "+o+" | <strong>পরীক্ষা:</strong> "+((u==null?void 0:u.name)||""),metaRight:"<strong>তারিখ:</strong> "+d})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${p} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${p-r} জন</div>
        <div><strong>পাসের হার:</strong> ${k}%</div>
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
          ${s.map((f,C)=>{var Ge,A,v,Q,H,fe,E,Pe,Xe,Je,Be,kt,Rt,st,gt,Jt,gs,Ka,en,tn,sn;const L=Number(f.marksObtained)||0,Y=o>0?Math.round(L/o*100):L,re=Ft(L,o),_e=Y>=33,Me=((Ge=f.student)==null?void 0:Ge.fullName)||((v=(A=f.student)==null?void 0:A.user)==null?void 0:v.fullName)||`${((H=(Q=f.student)==null?void 0:Q.user)==null?void 0:H.firstName)||""} ${((E=(fe=f.student)==null?void 0:fe.user)==null?void 0:E.lastName)||""}`.trim()||"—",tt=((Xe=(Pe=f.student)==null?void 0:Pe.currentEnrollment)==null?void 0:Xe.rollNumber)||((Je=f.student)==null?void 0:Je.roll)||"—",nt=((Be=f.student)==null?void 0:Be.studentId)||"—",We=typeof((Rt=(kt=f.student)==null?void 0:kt.currentEnrollment)==null?void 0:Rt.section)=="object"?((Jt=(gt=(st=f.student)==null?void 0:st.currentEnrollment)==null?void 0:gt.section)==null?void 0:Jt.name)||((en=(Ka=(gs=f.student)==null?void 0:gs.currentEnrollment)==null?void 0:Ka.section)==null?void 0:en._id):((sn=(tn=f.student)==null?void 0:tn.currentEnrollment)==null?void 0:sn.section)||"—";return`
              <tr>
                <td class="text-center">${C+1}</td>
                <td class="text-center font-bold">${tt}</td>
                <td class="font-bold">${Me}</td>
                <td class="text-center">${nt}</td>
                <td class="text-center">${We}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${L} / ${o}</td>
                <td class="text-center font-bold">${Y}%</td>
                <td class="text-center font-bold">${re}</td>
                <td class="text-center font-bold" style="color: ${_e?"#059669":"#dc2626"};">${_e?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${js(oe)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,b=window.open("","_blank");b&&(b.document.write(j),b.document.close())},Qs=()=>{var f;if(!Re||Re.length===0){O({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=ee.find(C=>C._id===be),s=be==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,o=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),d=Ze==="all"?"সকল সেকশন":`সেকশন ${Ze}`,p=Re.filter(C=>{const L=Qe[C._id];return L!==void 0&&L!==""&&!isNaN(L)}).length,r=Re.filter(C=>{const L=Qe[C._id];return L===void 0||L===""||isNaN(L)?!1:(n>0?Number(L)/n*100:Number(L))>=33}).length,k=p>0?Math.round(r/p*100):0,j=[...Re].sort((C,L)=>{var Y,re;return vt(((Y=C.currentEnrollment)==null?void 0:Y.rollNumber)||C.roll)-vt(((re=L.currentEnrollment)==null?void 0:re.rollNumber)||L.roll)}),b=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(u==null?void 0:u.name)||""})</title>
  ${bs("portrait")}
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
      ${ys({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((u==null?void 0:u.name)||"")+" | <strong>শ্রেণি:</strong> "+(((f=u==null?void 0:u.classLevel)==null?void 0:f.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+d,metaRight:"<strong>তারিখ:</strong> "+o})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Re.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${p} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Re.length-r} জন</div>
          <div><strong>পাসের হার:</strong> ${k}%</div>
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
          ${j.map((C,L)=>{var H,fe,E,Pe,Xe,Je,Be,kt,Rt,st;const Y=C._id,re=((H=C.currentEnrollment)==null?void 0:H.rollNumber)||C.roll||"—",_e=((fe=C.user)==null?void 0:fe.fullName)||`${((E=C.user)==null?void 0:E.firstName)||""} ${((Pe=C.user)==null?void 0:Pe.lastName)||""}`.trim()||"—",Me=C.studentId||"—",tt=typeof((Xe=C.currentEnrollment)==null?void 0:Xe.section)=="object"?((Be=(Je=C.currentEnrollment)==null?void 0:Je.section)==null?void 0:Be.name)||((Rt=(kt=C.currentEnrollment)==null?void 0:kt.section)==null?void 0:Rt._id):((st=C.currentEnrollment)==null?void 0:st.section)||C.section||Ze;if(s){const gt=Array.isArray(Qe[Y])?Qe[Y]:[],Jt=gt.length>0?gt.map(gs=>gs.subjectName+": "+gs.marksObtained+" ("+gs.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${L+1}</td>
                  <td class="text-center font-bold">${re}</td>
                  <td class="font-bold">${_e}</td>
                  <td class="text-center">${Me}</td>
                  <td class="text-center">${tt}</td>
                  <td style="font-size: 10px;">${Jt}</td>
                </tr>
              `}const nt=Qe[Y],We=nt!==void 0&&nt!==""&&!isNaN(nt),Ge=We?Number(nt):null,A=We?n>0?Math.round(Ge/n*100):Ge:null,v=We?Ft(Ge,n):"—",Q=We?A>=33:!1;return`
              <tr>
                <td class="text-center">${L+1}</td>
                <td class="text-center font-bold">${re}</td>
                <td class="font-bold">${_e}</td>
                <td class="text-center">${Me}</td>
                <td class="text-center">${tt}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${We?Ge+" / "+n:"—"}</td>
                <td class="text-center font-bold">${We?A+"%":"—"}</td>
                <td class="text-center font-bold">${v}</td>
                <td class="text-center font-bold" style="color: ${We?Q?"#059669":"#dc2626":"#64748b"};">
                  ${We?Q?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${js(oe)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,g=window.open("","_blank");g&&(g.document.write(b),g.document.close())},Cn=async()=>{if(!be||!Ze){O({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}it(!0);try{const t={classLevel:u.classLevel._id,limit:100};Ze!=="all"&&(t.section=Ze);const a=(await X.get("/students",{params:t})).data.data||[];a.sort((p,r)=>{var b,g;const k=vt(((b=p.currentEnrollment)==null?void 0:b.rollNumber)||p.roll),j=vt(((g=r.currentEnrollment)==null?void 0:g.rollNumber)||r.roll);return k-j}),Ve(a);const n={exam:u._id};be!=="all"&&(n.subject=be);const d=(await X.get("/exams/marks",{params:n})).data.data.marks||[];if(be==="all"){const p={};a.forEach(r=>{p[r._id]=[]}),d.forEach(r=>{var j,b;const k=typeof r.student=="object"?(j=r.student)==null?void 0:j._id:r.student;k&&p[k]&&p[k].push({subjectName:((b=r.subject)==null?void 0:b.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),He(p)}else{const p={};a.forEach(r=>{p[r._id]=""}),d.forEach(r=>{var j;const k=typeof r.student=="object"?(j=r.student)==null?void 0:j._id:r.student;k&&(p[k]=r.marksObtained??"")}),He(p)}}catch(t){console.error("Failed to load students for marks entry",t),O({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{it(!1)}},ks=async(t=Ce,s=u)=>{var o,d,p,r,k,j,b,g;const a=s||u;if(!a)return;const n=((o=a.classLevel)==null?void 0:o._id)||(typeof a.classLevel=="string"?a.classLevel:null);mt(!0);try{if(Le){const A=await X.get(`/exams/${a._id}/rankings`);if(A.data.success&&A.data.data){const{rankings:v=[],evaluatedSubjects:Q=[]}=A.data.data;Z(Q);const fe=(t&&t!=="all"?v.filter(E=>String(E.section||"")===String(t)):v).map((E,Pe)=>{const Xe={_id:E.studentId,studentId:E.studentCode||E.studentId,user:{fullName:E.name,firstName:E.name},currentEnrollment:{rollNumber:E.rollNumber,section:E.section}},Je={};E.subjectMarks&&Object.keys(E.subjectMarks).forEach(Rt=>{const st=E.subjectMarks[Rt],gt=st!==null&&typeof st=="object"?st.marksObtained:st,Jt=st!==null&&typeof st=="object"&&st.grade||Ft(gt);Je[Rt]={marksObtained:gt!=null&&typeof gt!="object"?gt:"",grade:Jt||""}});const Be=E.isPassed!==void 0?E.isPassed:E.grade!=="F"&&!E.isIncomplete,kt=E.gpa||(Be&&E.percentage>=33?E.percentage>=80?"5.00":E.percentage>=70?"4.00":E.percentage>=60?"3.50":E.percentage>=50?"3.00":E.percentage>=40?"2.00":"1.00":"0.00");return{student:Xe,studentMarksObj:Je,totalObtained:E.totalObtained,totalFullMarks:E.totalMaxMarks,percentage:E.percentage,overallGrade:E.grade,gpa:kt,isPassed:Be,subjectsCountWithMarks:Object.keys(Je).length,rankNum:E.rank||Pe+1,rankText:cl(E.rank||Pe+1),roll:vt(E.rollNumber)}});M(fe);return}}const C=((p=(d=(await X.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:d.data)==null?void 0:p.marks)||[];let L=[];if(n)try{L=((k=(r=(await X.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:k.subjects)||[]}catch(A){console.warn("Subject fetch warning:",A)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const A=a.selectedSubjects.map(v=>String(typeof v=="object"?v._id:v));L=L.filter(v=>A.includes(String(v._id)))}let Y=L.filter(A=>C.some(v=>{var H,fe;const Q=typeof v.subject=="object"?((H=v.subject)==null?void 0:H._id)||((fe=v.subject)==null?void 0:fe.id):v.subject;return String(Q)===String(A._id)&&v.marksObtained!==null&&v.marksObtained!==void 0&&v.marksObtained!==""}));if(Y.length===0&&C.length>0){const A={};C.forEach(v=>{var H,fe;const Q=typeof v.subject=="object"?((H=v.subject)==null?void 0:H._id)||((fe=v.subject)==null?void 0:fe.id):v.subject;if(Q&&v.marksObtained!==null&&v.marksObtained!==void 0&&v.marksObtained!==""){const E=typeof v.subject=="object"?v.subject.name||v.subject.code:"বিষয়",Pe=typeof v.subject=="object"?v.subject.code:"",Xe=typeof v.subject=="object"?v.subject.totalMarks||v.totalMarks||100:v.totalMarks||100;A[String(Q)]={_id:String(Q),name:E,code:Pe,totalMarks:Number(Xe)||100}}}),Y=Object.values(A)}Y.length===0&&L.length>0&&(Y=L),Z(Y);const re=Y.reduce((A,v)=>A+(Number(v.totalMarks)||100),0);let _e=[];if(n)try{const A={classLevel:n,limit:300};t&&t!=="all"&&(A.section=t),_e=((j=(await X.get("/students",{params:A})).data)==null?void 0:j.data)||[]}catch(A){console.warn("Students fetch warning:",A)}if(_e.length===0){const A={};C.forEach(v=>{v.student&&typeof v.student=="object"&&v.student._id&&(A[v.student._id]=v.student)}),_e=Object.values(A)}const Me={};C.forEach(A=>{var E,Pe,Xe,Je;const v=typeof A.student=="object"?((E=A.student)==null?void 0:E._id)||((Pe=A.student)==null?void 0:Pe.id):A.student,Q=typeof A.subject=="object"?((Xe=A.subject)==null?void 0:Xe._id)||((Je=A.subject)==null?void 0:Je.id):A.subject;if(!v||!Q)return;const H=String(v),fe=String(Q);Me[H]||(Me[H]={}),Me[H][fe]={marksObtained:A.marksObtained,grade:A.grade}});const tt=_e.map(A=>{var kt;const v=Me[A._id]||{};let Q=0,H=0,fe=0;Y.forEach(Rt=>{const st=v[Rt._id];if(st&&st.marksObtained!==null&&st.marksObtained!==void 0&&st.marksObtained!==""){const gt=Number(st.marksObtained);Q+=gt,H+=1;const Jt=Number(Rt.totalMarks)||100;gt<Jt*.33&&(fe+=1)}});const E=re>0?Number((Q/re*100).toFixed(1)):0,Pe=Y.length>0&&H>0&&H<Y.length,Xe=H>0&&fe===0&&!Pe,Je=Xe?Ft(E):fe>0?"F":Pe?Ft(E):H>0?"F":"—";let Be="—";return H>0&&(!Xe||E<33?Be="0.00":E>=80?Be="5.00":E>=70?Be="4.00":E>=60?Be="3.50":E>=50?Be="3.00":E>=40?Be="2.00":Be="1.00"),{student:A,studentMarksObj:v,totalObtained:Q,totalFullMarks:re,subjectsCountWithMarks:H,failedCount:fe,isIncomplete:Pe,percentage:E,isPassed:Xe,overallGrade:Je,gpa:Be,roll:vt(((kt=A.currentEnrollment)==null?void 0:kt.rollNumber)||A.roll)}});tt.sort((A,v)=>A.subjectsCountWithMarks===0&&v.subjectsCountWithMarks===0?A.roll-v.roll:A.subjectsCountWithMarks===0?1:v.subjectsCountWithMarks===0||A.failedCount===0&&v.failedCount>0?-1:A.failedCount>0&&v.failedCount===0?1:v.totalObtained!==A.totalObtained?v.totalObtained-A.totalObtained:A.roll-v.roll);let nt=0,We=null;const Ge=tt.map(A=>{if(A.subjectsCountWithMarks===0)return{...A,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};We!==null&&A.totalObtained===We||(nt+=1,We=A.totalObtained);const v=nt,Q=tt.filter(fe=>fe.subjectsCountWithMarks>0&&fe.totalObtained===A.totalObtained).length>1;let H="";return v===1?H=Q?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":v===2?H=Q?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":v===3?H=Q?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":v===4?H=Q?"৪র্থ (যৌথ)":"৪র্থ":v===5?H=Q?"৫ম (যৌথ)":"৫ম":v===6?H=Q?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":v===7?H=Q?"৭ম (যৌথ)":"৭ম":v===8?H=Q?"৮ম (যৌথ)":"৮ম":v===9?H=Q?"৯ম (যৌথ)":"৯ম":v===10?H=Q?"১০ম (যৌথ)":"১০ম":H=Q?`${v}তম (যৌথ)`:`${v}তম`,A.failedCount>0?H+=" (অনুত্তীর্ণ)":A.isIncomplete&&(H+=" (অসম্পূর্ণ)"),{...A,rankNum:v,rankText:H}});M(Ge)}catch(f){console.error("Error loading merit list:",f);const C=((g=(b=f.response)==null?void 0:b.data)==null?void 0:g.message)||f.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";O({type:"error",message:C})}finally{mt(!1)}},Ss=async(t,s="all")=>{var a,n;if(t){V(!0);try{const o={classLevel:t};s&&s!=="all"&&(o.section=s);const d=await X.get("/exams/annual-rankings",{params:o});d.data.success&&se(d.data.data)}catch(o){console.error("Failed to load annual rankings",o),O({type:"error",message:((n=(a=o.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{V(!1)}}},In=()=>{var n,o,d;if(!R||!R.rankings||R.rankings.length===0){O({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=R.classLevel)==null?void 0:n.name)||""}</title>
  ${bs("landscape")}
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
      ${ys({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((o=R.classLevel)==null?void 0:o.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((d=R.classLevel)==null?void 0:d.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${R.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${R.rankings.map((p,r)=>`
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

      ${js(oe)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ms=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},xs=async(t=Se,s=Lt,a=It,n=!1)=>{var o,d;Ie(!0);try{const p={};t&&t!=="all"&&(p.stream=t),s&&s!=="all"&&(p.exam=s),a&&a!=="all"&&(p.classLevel=a);const r=await X.get("/exams/routines",{params:p});r.data.success&&je(r.data.data.routines||[])}catch(p){console.error("Failed to load routines",p),n&&O({type:"error",message:((d=(o=p.response)==null?void 0:o.data)==null?void 0:d.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{Ie(!1)}},zs=async(t=!1,s=null)=>{Ie(!0);try{const a={},n=s||Ot;Mt&&n&&(a.studentId=n);const o=await X.get("/exams/student-routine",{params:a});o.data.success&&(Us(o.data.data),je(o.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{Ie(!1)}},An=(t=null)=>{var a,n,o,d,p,r;const s=(t==null?void 0:t.classLevel)||((a=u==null?void 0:u.classLevel)==null?void 0:a._id)||((n=$[0])==null?void 0:n._id)||"";s&&ws(s),t?(jt(t._id),At({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(jt(null),At({title:u?`${u.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(u==null?void 0:u._id)||((o=D[0])==null?void 0:o._id)||"",examName:(u==null?void 0:u.name)||((d=D[0])==null?void 0:d.name)||"",classLevel:s,className:((p=u==null?void 0:u.classLevel)==null?void 0:p.name)||((r=$[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),ss(!0)},$n=()=>{if(!G||G.length===0){O({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=G.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));At(s=>({...s,schedule:t})),O({type:"success",message:`${G.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},_n=async t=>{var s,a;if(t&&t.preventDefault(),!wt.title.trim()){O({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}Ns(!0);try{const n={...wt,_id:ps},o=await X.post("/exams/routines",n);o.data.success&&(O({type:"success",message:o.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),ss(!1),xs())}catch(n){console.error("Failed to save routine",n),O({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Ns(!1)}},Wn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await X.delete(`/exams/routines/${t}`)).data.success&&(O({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),je(o=>o.filter(d=>d._id!==t)))}catch(n){console.error("Failed to delete routine",n),O({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},Ln=()=>{At(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},fa=t=>{At(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},$e=(t,s,a)=>{At(n=>{const o=[...n.schedule],d={...o[t],[s]:a};if(s==="date"&&(d.day=ms(a)),s==="subject"){const p=G&&G.find(r=>r._id===a)||ee.find(r=>r._id===a);p?(d.subject=p._id,d.subjectName=p.name,d.totalMarks=Number(p.totalMarks)||100):(d.subject=a,d.subjectName=a)}return o[t]=d,{...n,schedule:o}})},Mn=t=>{if(!t||!t.schedule||t.schedule.length===0){O({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),o=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${t.title||"পরীক্ষার রুটিন"} - ${t.className||""}</title>
  ${bs("portrait")}
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
      ${ys({title:"",orientation:"portrait",metaLeft:`<strong>বিভাগ:</strong> ${a} ${t.className?`| <strong>শ্রেণি:</strong> ${t.className}`:""}`,metaRight:`<strong>তারিখ:</strong> ${n}`})}

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
              <td class="text-center font-bold" style="color: #0f766e;">${ve(p+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${rs(d.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${d.day||ms(d.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${d.subjectName||d.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${ve(d.totalMarks||100)}</td>
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

      ${js(["শ্রেণি শিক্ষক / হল সুপার","পরীক্ষা নিয়ন্ত্রক","প্রতিষ্ঠান প্রধান / পরিচালক"])}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;s.document.open(),s.document.write(o),s.document.close()},Rn=(t=we,s=oe)=>{var g;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(u==null?void 0:u.name)||"পরীক্ষা",o=((g=u==null?void 0:u.classLevel)==null?void 0:g.name)||"সকল শ্রেণি",d=Ce==="all"?"সকল সেকশন":`সেকশন ${Ce}`,p=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let k="";x.forEach((f,C)=>{var We,Ge,A,v;const L=f.student,Y=((We=L.currentEnrollment)==null?void 0:We.rollNumber)||L.roll||"—",re=((Ge=L.user)==null?void 0:Ge.fullName)||`${((A=L.user)==null?void 0:A.firstName)||""} ${((v=L.user)==null?void 0:v.lastName)||""}`.trim()||L.studentId||"—",_e=L.studentId||"—",Me=f.rankNum===1?"#fef3c7":f.rankNum===2?"#f1f5f9":f.rankNum===3?"#ffedd5":"transparent",tt=f.rankNum===1?"🥇 ":f.rankNum===2?"🥈 ":f.rankNum===3?"🥉 ":"",nt=I.map(Q=>{var Je,Be;const H=(Be=(Je=f.studentMarksObj)==null?void 0:Je[String(Q._id)])==null?void 0:Be.marksObtained,fe=H!==null&&typeof H=="object"?H.marksObtained??"":H??"",E=fe!=null&&fe!=="",Pe=Number(Q.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${E&&Number(fe)<Pe*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${E?fe:"—"}</td>`}).join("");k+=`
        <tr style="background-color: ${Me};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${ve(C+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${re}</div>
            <div class="student-meta-text">আইডি: ${_e}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${Y}</td>
          ${nt}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${f.subjectsCountWithMarks===0?"—":`${f.totalObtained} / ${f.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${tt}${f.rankText||"—"}</td>
          <td class="col-grade" style="text-align: center; font-weight: bold; color: ${f.overallGrade==="F"?"#dc2626":"#059669"};">
            ${f.overallGrade}
          </td>
          <td class="col-gpa" style="text-align: center; font-weight: bold; color: ${f.overallGrade==="F"?"#dc2626":"#0f766e"};">
            ${f.subjectsCountWithMarks===0?"—":f.gpa||"0.00"}
          </td>
          <td class="col-percent" style="text-align: center; font-weight: 600;">${f.subjectsCountWithMarks===0?"—":`${f.percentage}%`}</td>
          <td class="col-status" style="text-align: center; font-weight: 600; color: ${f.subjectsCountWithMarks===0?"#64748b":f.isIncomplete?"#b45309":f.isPassed?"#059669":"#dc2626"};">
            ${f.subjectsCountWithMarks===0?"অনুপস্থিত":f.isIncomplete?"অসম্পূর্ণ":f.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}
          </td>
        </tr>
      `});const j=I.map(f=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${f.name}</div>
        <div class="sub-mark-box">(${f.totalMarks||100})</div>
      </th>
    `).join(""),b=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${bs(t)}
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
          ${ys({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${o} | <strong>সেকশন:</strong> ${d}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${x.length} জন | <strong>তারিখ:</strong> ${p}`})}
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
            ${k}
          </tbody>
        </table>

        <!-- Footer Signatures -->
        <div class="footer-wrap" style="width: 100%; padding-top: 14px; page-break-inside: avoid; break-inside: avoid;">
          ${js(s)}
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
    </html>`;a.document.open(),a.document.write(b),a.document.close()},Tn=(t,s)=>{He(a=>({...a,[t]:s}))},Ft=(t,s=100)=>{const a=is(t),n=parseFloat(a);if(isNaN(n))return"—";const o=Number(s)||100,d=o>0?n/o*100:n;return d>=80?"A+":d>=70?"A":d>=60?"A-":d>=50?"B":d>=40?"C":d>=33?"D":"F"},hs=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",En=async()=>{const t=ee.find(o=>o._id===be),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(Qe).map(o=>{const d=Qe[o],p=is(d);return{studentId:o,marksObtained:p===""?null:parseFloat(p)}});if(a.length===0){O({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(o=>o.marksObtained!==null&&o.marksObtained>s)){O({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}ce(!0);try{const o={exam:u._id,subject:be,marks:a};(await X.post("/exams/marks",o)).data.success&&O({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(o){console.error("Failed to save marks",o),O({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{ce(!1)}},Bn=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},Dn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Xs=()=>{Ue(!1),ct(null),de({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),ze([])},ua=(t=!1)=>{var n,o,d,p;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(S==null?void 0:S.userType)||((o=(n=S==null?void 0:S.permissions)==null?void 0:n.includes)==null?void 0:o.call(n,"academic.manage"))||((p=(d=S==null?void 0:S.permissions)==null?void 0:d.includes)==null?void 0:p.call(d,"exam.manage")),a=ie.filter(r=>{var k;if(((k=r.schedule)==null?void 0:k.kind)!=="matrix")return!1;if(t&&u){if(r.exam&&r.exam!==u._id)return!1}else if(Lt!=="all"&&r.exam!==Lt)return!1;return!(Se!=="all"&&r.stream!==Se||It!=="all"&&r.classLevel!==It)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{P("marks"),lt(null)},title:"ফিরে যান",children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Bt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&u?`পরীক্ষার রুটিন — ${u.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:Le?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{Le?zs(!0):xs(Se,Lt,It,!0)},disabled:Ae,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Os,{size:14,className:Ae?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Qt(null),Vt(r=>!r)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Kt,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন (Matrix)"})]})]})]}),!Le&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${Se==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>ht("all"),children:["সকল বিভাগ (",ie.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>ht("noorani"),children:["📖 নূরানী বিভাগ (",ie.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>ht("hifz"),children:["🕌 হিফজ বিভাগ (",ie.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Se==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>ht("kitab"),children:["📚 কিতাব বিভাগ (",ie.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:Lt,onChange:r=>Zt(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),D.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:It,onChange:r=>$s(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),$.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),s&&Ws&&e.jsx("div",{className:"mb-20 no-print",children:e.jsx(rl,{initialRoutine:as,classes:$,subjects:ee,exams:D,selectedExam:u,madrasahName:ne,onSaved:()=>{xs(Se,Lt,It,!1),Vt(!1),Qt(null)},onClose:()=>{Vt(!1),Qt(null)}},(as==null?void 0:as._id)||"new-matrix")}),Ae?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Bt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:Le?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Qt(null),Vt(!0)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Kt,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{var j;const k=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:k.bg,color:k.color,border:`1px solid ${k.border}`},children:k.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{var b;((b=r.schedule)==null?void 0:b.kind)==="matrix"?bn(r,ne):Mn(r)},style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(ft,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>{var b;((b=r.schedule)==null?void 0:b.kind)==="matrix"?(Qt(r),Vt(!0)):An(r)},style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Js,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Wn(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(Is,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),((j=r.schedule)==null?void 0:j.kind)==="matrix"?e.jsx(il,{routine:r}):e.jsxs(e.Fragment,{children:[r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((b,g)=>e.jsxs("tr",{style:{background:g%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:ve(g+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Bt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:rs(b.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:b.day||ms(b.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ns,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:b.subjectName||b.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[ve(b.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(ln,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[b.startTime||"সকাল ০৯:৩০"," — ",b.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(rn,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:b.roomNo||"১০১"})]})})]},g)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((b,g)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:ve(g+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:rs(b.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",b.day||ms(b.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(rn,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:b.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ns,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:b.subjectName||b.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[ve(b.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(ln,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",b.startTime||"সকাল ০৯:৩০"," — ",b.endTime||"দুপুর ১২:৩০"]})]})]},g)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[pe&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:pe.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[pe.type==="success"?e.jsx(oa,{size:18}):e.jsx(os,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:pe.message})]}),u?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:ne}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",u.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((ba=u.classLevel)==null?void 0:ba.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>lt(null),children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:Le?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",he," • ",u.name," • ",((ya=u.classLevel)==null?void 0:ya.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Le||B==="student_result"?Vs():B==="subject_result"?ga():B==="merit"||B==="merit_list"?at(!0):Qs()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16})," ",Le?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Jn,{selectedRoles:oe,onChange:t=>{De(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(Xn,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${u.name}`,metaLeft:`শ্রেণি: ${((ja=u.classLevel)==null?void 0:ja.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),Le&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>P("student_result"),children:[e.jsx(us,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{P("merit"),ks(Ce)},children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{P("routine"),zs()},children:[e.jsx(Bt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!Le&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>P("marks"),children:[e.jsx(Js,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>P("student_result"),children:[e.jsx(us,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{P("subject_result"),!rt&&ee.length>0&&(Yt(ee[0]._id),Rs(ee[0]._id,zt))},children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{P("merit"),x.length===0&&ks(Ce)},children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{P("routine"),Zt((u==null?void 0:u._id)||"all"),xs("all",(u==null?void 0:u._id)||"all","all")},children:[e.jsx(Bt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>P("seat_plan"),children:[e.jsx(es,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>P("admit_card"),children:[e.jsx(Et,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${B==="hifz_results"?"btn-primary":"btn-ghost"}`,onClick:()=>P("hifz_results"),children:[e.jsx(ns,{size:15})," ",e.jsx("span",{children:"হিফজ ও নাজেরা ফলাফল"})]})]}),B==="marks"&&e.jsxs(e.Fragment,{children:[!Le&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:be,onChange:t=>{ut(t.target.value),Ve([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ee.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:Ze,onChange:t=>{Nt(t.target.value),Ve([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),Cs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:Cn,disabled:F||!be||!Ze||ee.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Hs,{size:16})," লোড করুন"]})]}),ee.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(os,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),F?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Le?ye&&((va=ye.results)==null?void 0:va.length)>0?ha(ye):q.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Et,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(S==null?void 0:S.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:q.map(t=>{var o,d,p;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=Ft(a);return e.jsxs("tr",{children:[(S==null?void 0:S.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(o=t.student)==null?void 0:o.firstName," ",(d=t.student)==null?void 0:d.lastName]})}),e.jsx("td",{className:"font-semibold",children:(p=t.subject)==null?void 0:p.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Re.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Et,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Re.map((t,s)=>{var j,b,g,f;const a=t._id,n=((j=t.currentEnrollment)==null?void 0:j.rollNumber)||"—",o=((b=t.user)==null?void 0:b.fullName)||`${((g=t.user)==null?void 0:g.firstName)||""} ${((f=t.user)==null?void 0:f.lastName)||""}`.trim();if(be==="all"){const C=Array.isArray(Qe[a])?Qe[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:ve(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:o}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:C.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:C.map((L,Y)=>{var re;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[L.subjectName,": ",typeof L.marksObtained=="object"?(re=L.marksObtained)==null?void 0:re.marksObtained:L.marksObtained," (",L.grade,")"]},Y)})})})]},a)}const d=ee.find(C=>C._id===be),p=Number(d==null?void 0:d.totalMarks)||100,r=Qe[a]??"",k=Ft(r,p);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:ve(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:o}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(is(r))>p?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${p}`,value:r,onChange:C=>{const L=C.target.value;/^[0-9০-৯.]*$/.test(L)&&Tn(a,L)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(k)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:k})})]},a)})})]}),be!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Qs,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:En,disabled:h,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(da,{size:16})," ",h?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),B==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!Le&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Oe,onChange:t=>xe(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Cs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((Na=ye==null?void 0:ye.student)==null?void 0:Na._id)||"",onChange:t=>{const s=t.target.value;s&&(yt(s),Zs(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),Gt.filter(t=>{var a,n,o,d,p,r;if(Oe==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((o=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:o.name)||((p=(d=t.currentEnrollment)==null?void 0:d.section)==null?void 0:p._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(Oe)}).map(t=>{var o,d,p,r;const s=((o=t.user)==null?void 0:o.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:bt,onChange:t=>yt(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Zs()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Zs(),disabled:Ht||!bt.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Hs,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),ye&&((wa=ye.results)==null?void 0:wa.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Vs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Ht?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ye?((ka=ye.results)==null?void 0:ka.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(os,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):ha(ye):e.jsxs("div",{className:"card empty-state",children:[e.jsx(us,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),B==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:rt,onChange:t=>{const s=t.target.value;Yt(s),s&&Rs(s,zt)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ee.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:zt,onChange:t=>{const s=t.target.value;Ut(s),rt&&Rs(rt,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Cs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:Ct,onChange:t=>ds(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=qt.filter(s=>{var p,r,k,j,b,g,f,C,L,Y;if(!Ct.trim())return!0;const a=is(Ct.trim().toLowerCase()),n=(((p=s.student)==null?void 0:p.fullName)||((k=(r=s.student)==null?void 0:r.user)==null?void 0:k.fullName)||`${((b=(j=s.student)==null?void 0:j.user)==null?void 0:b.firstName)||""} ${((f=(g=s.student)==null?void 0:g.user)==null?void 0:f.lastName)||""}`).toLowerCase(),o=String(((L=(C=s.student)==null?void 0:C.currentEnrollment)==null?void 0:L.rollNumber)||"").toLowerCase(),d=String(((Y=s.student)==null?void 0:Y.studentId)||"").toLowerCase();return n.includes(Ct.toLowerCase())||o.includes(a)||d.includes(a)});ga(t)},disabled:y||qt.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),y?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):rt?(()=>{const t=ee.find(g=>g._id===rt),s=Number(t==null?void 0:t.totalMarks)||100,a=qt.filter(g=>{var re,_e,Me,tt,nt,We,Ge,A,v,Q;if(!Ct.trim())return!0;const f=is(Ct.trim().toLowerCase()),C=(((re=g.student)==null?void 0:re.fullName)||((Me=(_e=g.student)==null?void 0:_e.user)==null?void 0:Me.fullName)||`${((nt=(tt=g.student)==null?void 0:tt.user)==null?void 0:nt.firstName)||""} ${((Ge=(We=g.student)==null?void 0:We.user)==null?void 0:Ge.lastName)||""}`).toLowerCase(),L=String(((v=(A=g.student)==null?void 0:A.currentEnrollment)==null?void 0:v.rollNumber)||"").toLowerCase(),Y=String(((Q=g.student)==null?void 0:Q.studentId)||"").toLowerCase();return C.includes(Ct.toLowerCase())||L.includes(f)||Y.includes(f)}),n=a.length,o=a.map(g=>Number(g.marksObtained)||0),d=o.length>0?Math.max(...o):0,p=o.length>0?(o.reduce((g,f)=>g+f,0)/o.length).toFixed(1):0,r=a.filter(g=>{const f=Number(g.marksObtained)||0;return(s>0?f/s*100:f)>=33}).length,k=n>0?Math.round(r/n*100):0,j=a.map(g=>{var f;return String(((f=g.student)==null?void 0:f._id)||g._id)}),b=j.length>0&&j.every(g=>ae.has(g));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[d," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:p})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[k,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:b,onChange:()=>xa(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",ae.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(os,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:b,onChange:()=>xa(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(g=>{var We,Ge,A,v,Q,H,fe,E,Pe,Xe,Je,Be,kt;const f=String(((We=g.student)==null?void 0:We._id)||g._id),C=ae.has(f),L=Number(g.marksObtained)||0,Y=s>0?Math.round(L/s*100):L,re=Ft(L,s),_e=Y>=33,Me=((Ge=g.student)==null?void 0:Ge.fullName)||((v=(A=g.student)==null?void 0:A.user)==null?void 0:v.fullName)||`${((H=(Q=g.student)==null?void 0:Q.user)==null?void 0:H.firstName)||""} ${((E=(fe=g.student)==null?void 0:fe.user)==null?void 0:E.lastName)||""}`.trim()||"—",tt=((Xe=(Pe=g.student)==null?void 0:Pe.currentEnrollment)==null?void 0:Xe.rollNumber)||"—",nt=((Je=g.student)==null?void 0:Je.studentId)||"—";return e.jsxs("tr",{style:{background:C?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:C,onChange:()=>zn(f),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:tt}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:Me}),((kt=(Be=g.student)==null?void 0:Be.currentEnrollment)==null?void 0:kt.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",g.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:nt}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[L," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[Y,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(re)}`,style:{minWidth:"40px",justifyContent:"center"},children:re})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${_e?"badge-active":"badge-danger"}`,children:_e?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},f)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(ns,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),B==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Ce,onChange:t=>{const s=t.target.value;xt(s),ks(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),Cs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>ks(Ce),disabled:Te,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:Te?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!Le&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>_("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(Yn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>at(!0),disabled:Te||x.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(ft,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[x.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[x.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[x.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((Ca=(za=(Sa=x.find(t=>t.rankNum===1))==null?void 0:Sa.student)==null?void 0:za.user)==null?void 0:Ca.fullName)||(($a=(Aa=(Ia=x.find(t=>t.rankNum===1))==null?void 0:Ia.student)==null?void 0:Aa.user)==null?void 0:$a.firstName)||"—"}),x.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(_a=x.find(t=>t.rankNum===1))==null?void 0:_a.totalObtained," (",(Wa=x.find(t=>t.rankNum===1))==null?void 0:Wa.percentage,"%)"]})]})]}),Te?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):x.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(ls,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+I.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),I.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:x.map((t,s)=>{var k,j,b,g,f,C,L;const a=t.student,n=((k=a.currentEnrollment)==null?void 0:k.rollNumber)||"—",o=((j=a.user)==null?void 0:j.fullName)||`${((b=a.user)==null?void 0:b.firstName)||""} ${((g=a.user)==null?void 0:g.lastName)||""}`.trim(),d=t.rankNum===1,p=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:d?"rgba(245, 158, 11, 0.08)":p?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:ve(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:o}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((C=(f=a.currentEnrollment)==null?void 0:f.section)==null?void 0:C.name)||(typeof((L=a.currentEnrollment)==null?void 0:L.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),I.map(Y=>{var Ge;const re=(Ge=t.studentMarksObj)==null?void 0:Ge[Y._id],_e=re==null?void 0:re.marksObtained,Me=_e!==null&&typeof _e=="object"?_e.marksObtained??"":_e??"",tt=Me!=null&&Me!=="",nt=Number(Y.totalMarks)||100,We=tt&&Number(Me)<nt*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:We?"#dc2626":tt?"#0f172a":"var(--text-muted)",background:We?"rgba(239, 68, 68, 0.06)":"transparent"},children:tt?Me:"—"},Y._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d||p||r?"0.92rem":"0.85rem",color:d?"#b45309":p?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:d?"#fef3c7":p?"#f1f5f9":r?"#ffedd5":"transparent",border:d?"1px solid #fde68a":p?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),B==="routine"&&ua(!0),B==="seat_plan"&&e.jsx(on,{selectedExam:u,classes:$,user:S}),B==="admit_card"&&e.jsx(dn,{exams:D,classes:$}),B==="hifz_results"&&e.jsx(mn,{embedded:!0}),e.jsx("div",{className:"print-only",children:e.jsx(Kn,{roles:oe,style:{marginTop:"40px"}})})]}):B==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>P("marks"),children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ls,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:In,disabled:te||!R||((La=R.rankings)==null?void 0:La.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[Le?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),Mt&&$t.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:ge,onChange:t=>{const s=t.target.value;c(s),Ss(s,z)},children:$t.map(t=>{var o,d,p,r,k,j,b;const s=((d=(o=t.currentEnrollment)==null?void 0:o.classLevel)==null?void 0:d._id)||((p=t.currentEnrollment)==null?void 0:p.classLevel),a=((k=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:k.name)||((j=t.currentEnrollment)==null?void 0:j.className)||"শ্রেণি",n=((b=t.user)==null?void 0:b.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((Ma=$.find(t=>String(t._id)===String(ge)))==null?void 0:Ma.name)||(Pt==null?void 0:Pt.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:ge,onChange:t=>{const s=t.target.value;c(s),Ss(s,z)},children:$.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:z,onChange:t=>{const s=t.target.value;w(s),Ss(ge,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Cs.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Ss(ge,z),disabled:te,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:te?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),R&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((Ra=R.rankings)==null?void 0:Ra.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((Ea=(Ta=R.rankings)==null?void 0:Ta.find(t=>t.rank===1))==null?void 0:Ea.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((Da=(Ba=R.rankings)==null?void 0:Ba.find(t=>t.rank===1))==null?void 0:Da.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((Pa=(Oa=R.termExams)==null?void 0:Oa.term1)==null?void 0:Pa.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((Ha=(Fa=R.termExams)==null?void 0:Fa.term2)==null?void 0:Ha.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((Ya=(Ga=R.termExams)==null?void 0:Ga.term3)==null?void 0:Ya.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:te?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!R||((Ua=R.rankings)==null?void 0:Ua.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(ls,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:R.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${hs(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):B==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>P("marks"),children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(es,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(on,{selectedExam:null,classes:$,user:S})]}):B==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>P("marks"),children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Et,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(dn,{exams:D,classes:$})]}):B==="routine"?ua(!1):B==="hifz_results"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>P("marks"),children:e.jsx(fs,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ns,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ, নাজেরা ও মক্তব ফলাফল"})]}),e.jsx("p",{className:"page-subtitle",children:"বালক ও বালিকা শাখা ➔ বিভাগ ➔ উপ-শাখা ও পরীক্ষা অনুযায়ী নম্বর এন্ট্রি ও প্রিন্ট"})]})]})}),e.jsx(mn,{embedded:!0})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px",marginBottom:"20px"},children:[e.jsxs("div",{style:{minWidth:"220px"},children:[e.jsx("h1",{className:"page-title",style:{marginBottom:"4px"},children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",style:{margin:0},children:Ls?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":Mt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${he} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{P("routine"),Le?zs():xs()},children:[e.jsx(Bt,{size:15,style:{color:"#2563eb"}}),e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),!Le&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>P("seat_plan"),children:[e.jsx(es,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"সিট প্ল্যান"})]}),!Le&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#10b981",color:"#065f46",background:"rgba(16, 185, 129, 0.12)",fontWeight:700},onClick:()=>P("hifz_results"),children:[e.jsx(ns,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"হিফজ ও নাজেরা ফলাফল"})]}),!Le&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>P("admit_card"),children:[e.jsx(Et,{size:15,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{P("annual_combined");let t=ge;t||(Le&&(Pt!=null&&Pt._id)?t=Pt._id:$.length>0&&(t=$[0]._id)),t&&(c(t),Ss(t,z))},children:[e.jsx(ls,{size:15,style:{color:"#d97706"}}),e.jsx("span",{children:"সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(S==null?void 0:S.userType)&&e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",fontSize:"0.82rem",whiteSpace:"nowrap"},onClick:()=>Ue(!0),children:[e.jsx(Kt,{size:15}),e.jsx("span",{children:"নতুন পরীক্ষা"})]})]})]}),Mt&&$t.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(us,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Ot,onChange:t=>jn(t.target.value),children:$t.map(t=>{var o,d,p,r,k,j,b;const s=((o=t.user)==null?void 0:o.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((k=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:k.name)||((j=t.currentEnrollment)==null?void 0:j.className)||"",n=(b=t.currentEnrollment)!=null&&b.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),Mt&&$t.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(us,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((qa=$t[0].user)==null?void 0:qa.fullName)||`${((Za=$t[0].user)==null?void 0:Za.firstName)||""} ${((Va=$t[0].user)==null?void 0:Va.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Xa=(Qa=$t[0].currentEnrollment)==null?void 0:Qa.classLevel)==null?void 0:Xa.name)||"শ্রেণি",(Ja=$t[0].currentEnrollment)!=null&&Ja.rollNumber?` • রোল: ${$t[0].currentEnrollment.rollNumber}`:""]})]}),Ls&&Pt&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(us,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Pt.name||"শ্রেণি"})]}),le?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):D.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Et,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:D.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=na.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${Dn(t.status)}`,children:Bn(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?rs(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",rs(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsxs("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{P("marks"),ma(t)},children:[e.jsx(Et,{size:14}),e.jsx("span",{children:Le?"ফলাফল দেখুন":"নম্বর এন্ট্রি"})]}),!Le&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{P("merit"),ma(t),ks("all",t)},children:[e.jsx(ls,{size:14,style:{color:"#d97706"}}),e.jsx("span",{children:"মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(S==null?void 0:S.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Nn(t),title:"সম্পাদনা",children:e.jsx(Js,{size:16})}),["super_admin","admin","principal"].includes(S==null?void 0:S.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>wn(t._id),title:"মুছে ফেলুন",children:e.jsx(Is,{size:16})})]})]},t._id)})}),ue&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Xs()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:et?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Xs,type:"button",children:e.jsx(Kt,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:kn,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:J.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",de(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),J.classLevel&&ws(J.classLevel)},children:dl.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),J.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:J.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};de(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),J.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:J.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};de(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),J.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:J.month,onChange:t=>{const s=t.target.value,a=na.find(o=>o.value===s),n=a?a.label.split(" ")[0]:s;de(o=>({...o,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:na.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:J.name,onChange:Ms,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:J.classLevel,onChange:t=>{const s=t.target.value;de(a=>({...a,classLevel:s,selectedSubjects:[]})),ws(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),$.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),J.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:J.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",J.selectedSubjects.length,"/৪ টি"]})]}),J.classLevel?G.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:G.map(t=>{const s=J.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=J.selectedSubjects;if(s)de(n=>({...n,selectedSubjects:a.filter(o=>o!==t._id)}));else{if(a.length>=4){O({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}de(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:J.startDate,onChange:Ms})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:J.endDate,onChange:Ms})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:J.status,onChange:Ms,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Xs,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:Ke,children:Ke?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),_s&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Bt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:ps?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>ss(!1),title:"বন্ধ করুন",children:e.jsx(la,{size:20})})]}),e.jsxs("form",{onSubmit:_n,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:wt.title,onChange:t=>At(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:wt.stream,onChange:t=>At(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:wt.exam,onChange:t=>{const s=D.find(a=>a._id===t.target.value);At(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),D.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:wt.classLevel,onChange:t=>{const s=t.target.value,a=$.find(n=>n._id===s);At(n=>({...n,classLevel:s,className:a?a.name:""})),s&&ws(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),$.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:wt.status,onChange:t=>At(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:wt.instructions,onChange:t=>At(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[ve(wt.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[G&&G.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$n,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:Ln,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Kt,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),wt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:ve(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const o=n.target.value;$e(s,"date",o),o&&$e(s,"day",ms(o))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:G&&G.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=G.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const o=n.target.value;if(o==="custom")$e(s,"subject","custom");else{const d=G.find(p=>p._id===o);d&&($e(s,"subject",d._id),$e(s,"subjectName",d.name),$e(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),G.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!G.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>$e(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>$e(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>$e(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>$e(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>fa(s),disabled:wt.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(Is,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:wt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:ve(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const o=n.target.value;$e(s,"date",o),o&&$e(s,"day",ms(o))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>fa(s),disabled:wt.schedule.length<=1,title:"মুছুন",children:e.jsx(Is,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:G&&G.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=G.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const o=n.target.value;if(o==="custom")$e(s,"subject","custom");else{const d=G.find(p=>p._id===o);d&&($e(s,"subject",d._id),$e(s,"subjectName",d.name),$e(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),G.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0})}),G&&G.length>0&&(t.subject==="custom"||!G.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{$e(s,"subjectName",n.target.value),$e(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>$e(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>$e(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>$e(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>ss(!1),disabled:cs,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:cs,children:cs?"সংরক্ষণ হচ্ছে...":ps?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),W&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&at(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(ft,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>at(!1),type:"button",children:e.jsx(Kt,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Wt("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:we==="landscape"?700:500,background:we==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:we==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:we==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:we==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Wt("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:we==="portrait"?700:500,background:we==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:we==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:we==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:we==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=oe.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(oe.length<=1)return;a=oe.filter(n=>n!==t)}else a=[...oe,t];De(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>at(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{at(!1),Rn(we,oe)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(ft,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{Ll as default};
