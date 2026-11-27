import{k as Ua,r as d,j as e,I as Ls,i as Ws,d as B,a as Va,F as Ct,U as Da,C as Et,J as Oa,K as yn,u as jn,v as vn,x as Nn,A as js,N as ls,b as Is,R as Os,G as wn,X as kn,l as Ha}from"./index-B6qGmRsS.js";import{g as Vs,b as Ve,p as Kt,f as es,t as Ke}from"./helpers-CljGnr5z.js";import{L as Gt}from"./layout-grid-BZfkUJ82.js";import{R as Ms}from"./rotate-cw-DOnzcwlp.js";import{P as et}from"./printer-CXmTZTpD.js";import{S as Za}from"./sliders-vertical-Bj9zh8z2.js";import{S as Qa,a as Ja}from"./square-CqiRJHGR.js";import{C as Sn}from"./circle-check-CYXehMRu.js";import{S as Cn}from"./sparkles-D1aBAVKQ.js";import{L as zn}from"./layers-CJLV1C1q.js";import{E as In}from"./eye-Ds_qv7Oq.js";import{Z as An}from"./zoom-out-CRpTOsa3.js";import{Z as $n}from"./zoom-in-B32oWtF_.js";import{S as vs}from"./constants-C6HvYUtm.js";import{g as rs,a as os,b as ds}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as _n}from"./MadrasahLetterhead-KXt3FFh0.js";import{P as Ln}from"./PrintSignatureRoleSelector-Cox_NRYk.js";import{P as Wn}from"./PrintFooterSignatures-D6K0cSWb.js";import{C as Ns}from"./circle-alert-BTs9GoO7.js";import{T as Xt}from"./trophy-30NxjYOw.js";import{S as Hs}from"./square-pen-CGqiN_uD.js";import{S as Mn}from"./save-CFiFskIc.js";import{P as cs}from"./plus-Qcy3OmfM.js";import{T as As}from"./trash-2-YNOGQgqq.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=Ua("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=Ua("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Gs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Ys='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Ya({selectedExam:z=null,classes:F=[],user:J=null}){var ee;const I=d.useMemo(()=>Vs(J),[J]),xt=d.useMemo(()=>Array.isArray(F)?F:F&&Array.isArray(F.classes)?F.classes:[],[F]),[Le,ze]=d.useState([]),[ht,Z]=d.useState((z==null?void 0:z._id)||""),[tt,We]=d.useState(((ee=z==null?void 0:z.classLevel)==null?void 0:ee._id)||(z==null?void 0:z.classLevel)||""),[zt,Te]=d.useState([]),[W,Ee]=d.useState("all"),[st,It]=d.useState("all"),[at,At]=d.useState((z==null?void 0:z.academicYear)||"2026"),[Yt,Ze]=d.useState((z==null?void 0:z.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[gt,R]=d.useState(!1),[te,U]=d.useState([]),[Fe,f]=d.useState(new Set),[Bt,se]=d.useState({}),[$t,ft]=d.useState(""),[Ft,ue]=d.useState(!0),[_t,A]=d.useState(!0),[Lt,ot]=d.useState(!0),[Ye,Qe]=d.useState(!0),[nt,ye]=d.useState(!0),[ut,Me]=d.useState(!0),[bt,qt]=d.useState(!0),[yt,jt]=d.useState(!0),[Pt,_]=d.useState(!0),[Y,O]=d.useState(!0),[Ut,it]=d.useState(!0),[vt,je]=d.useState(10),[ts,xe]=d.useState(!0),[Pe,Re]=d.useState("10"),[Q,Ie]=d.useState("theme-classic"),[Dt,Wt]=d.useState("logo-left"),[he,dt]=d.useState(!1),[Nt,pe]=d.useState(()=>{try{const p=parseInt(localStorage.getItem("seat_plan_font_scale"),10);if(!isNaN(p)&&p>=80&&p<=140)return p}catch{}return 100});d.useEffect(()=>{try{localStorage.setItem("seat_plan_font_scale",String(Nt))}catch{}},[Nt]);const[lt,Vt]=d.useState("১০১"),[Zt,Qt]=d.useState(`1-20: 101
21-40: 102
41-60: 103`),[r,g]=d.useState(!1);d.useEffect(()=>{(async()=>{var k,b,T,ae,H;try{const me=await B.get("/exams",{params:{limit:100}}),E=((b=(k=me.data)==null?void 0:k.data)==null?void 0:b.exams)||((T=me.data)==null?void 0:T.exams)||((ae=me.data)==null?void 0:ae.data)||[],Ae=Array.isArray(E)?E:[];if(ze(Ae),!ht&&Ae.length>0&&(Z(Ae[0]._id),Ze(Ae[0].name),Ae[0].academicYear&&At(Ae[0].academicYear),Ae[0].classLevel)){const $e=((H=Ae[0].classLevel)==null?void 0:H._id)||Ae[0].classLevel;We($e)}}catch(me){console.error("Failed to fetch exams for seat plan:",me),ze([])}})()},[]),d.useEffect(()=>{var p;if(ht&&Array.isArray(Le)&&Le.length>0){const k=Le.find(b=>b._id===ht);if(k&&(Ze(k.name||"বার্ষিক পরীক্ষা - ২০২৬"),k.academicYear&&At(k.academicYear),k.classLevel)){const b=((p=k.classLevel)==null?void 0:p._id)||k.classLevel;We(b)}}},[ht,Le]),d.useEffect(()=>{if(!tt){Te([]);return}(async()=>{var k,b,T,ae;try{const H=await B.get(`/students/sections?classLevel=${tt}`),me=((b=(k=H.data)==null?void 0:k.data)==null?void 0:b.sections)||((T=H.data)==null?void 0:T.sections)||((ae=H.data)==null?void 0:ae.data)||[];Te(Array.isArray(me)?me:[])}catch(H){console.warn("Failed to load sections:",H),Te([])}})()},[tt]);const y=async()=>{var p,k,b,T;R(!0);try{const ae={limit:500};tt&&(ae.classLevel=tt),W&&W!=="all"&&(ae.section=W);const H=await B.get("/students",{params:ae}),me=((k=(p=H.data)==null?void 0:p.data)==null?void 0:k.students)||((b=H.data)==null?void 0:b.students)||((T=H.data)==null?void 0:T.data)||[];let E=Array.isArray(me)?me:[];st&&st!=="all"&&(E=E.filter(ke=>{var He;return(ke.department||((He=ke.currentEnrollment)==null?void 0:He.department)||"").toLowerCase().includes(st.toLowerCase())})),E.sort((ke,Oe)=>{var wt,ct;const He=Ve(((wt=ke.currentEnrollment)==null?void 0:wt.rollNumber)||ke.rollNumber||ke.roll),Je=Ve(((ct=Oe.currentEnrollment)==null?void 0:ct.rollNumber)||Oe.rollNumber||Oe.roll);return He-Je}),U(E);const Ae=new Set(E.map(ke=>ke._id));f(Ae);const $e={};E.forEach(ke=>{$e[ke._id]=lt||"১০১"}),se($e)}catch(ae){console.error("Failed to load students for seat plan:",ae),U([]),f(new Set)}finally{R(!1)}};d.useEffect(()=>{tt&&y()},[tt,W,st]);const V=()=>{Fe.size===te.length?f(new Set):f(new Set(te.map(p=>p._id)))},P=()=>{const p=lt.trim();p&&se(k=>{const b={...k};return Fe.forEach(T=>{b[T]=p}),b})},q=()=>{const p=Zt.split(`
`),k={...Bt};p.forEach(b=>{const T=b.split(":");if(T.length===2){const ae=T[0].trim(),H=T[1].trim(),me=ae.match(/(\d+)\s*[-–—]\s*(\d+)/);if(me&&H){const E=parseInt(me[1],10),Ae=parseInt(me[2],10);te.forEach($e=>{var He;const ke=Kt(((He=$e.currentEnrollment)==null?void 0:He.rollNumber)||$e.rollNumber||$e.roll||"0"),Oe=parseInt(ke,10);!isNaN(Oe)&&Oe>=E&&Oe<=Ae&&(k[$e._id]=H)})}}}),se(k),g(!1)},ie=d.useMemo(()=>te.filter(p=>{var H,me;if(!Fe.has(p._id))return!1;if(!$t)return!0;const k=$t.toLowerCase(),b=(p.fullName||((H=p.user)==null?void 0:H.fullName)||p.name||"").toLowerCase(),T=String(((me=p.currentEnrollment)==null?void 0:me.rollNumber)||p.rollNumber||p.roll||"").toLowerCase(),ae=String(p.studentId||p.admissionNumber||"").toLowerCase();return b.includes(k)||T.includes(k)||ae.includes(k)}),[te,Fe,$t]),de=p=>{je(p),xe(!1),Re(String(p))},De=p=>{Re(p);const k=parseInt(p,10);!isNaN(k)&&k>0&&k<=30&&(je(k),xe(!0))},we=d.useMemo(()=>{const p=vt;let k=3,b=4;return p<=4||p<=6||p<=8?(k=2,b=Math.ceil(p/2)):p<=10?(k=2,b=5):p<=12?(k=3,b=4):p<=15?(k=3,b=5):p<=16?(k=4,b=4):(k=4,b=Math.ceil(p/4)),{cols:k,rows:b,count:p}},[vt]),X=d.useMemo(()=>{const p=[],k=vt;for(let b=0;b<ie.length;b+=k)p.push(ie.slice(b,b+k));return p},[ie,vt]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card no-print sp-toolbar-card",children:[e.jsxs("div",{className:"sp-header-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,color:"#065f46",display:"flex",alignItems:"center",gap:"8px",margin:0},children:[e.jsx(Gt,{size:20,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",margin:"2px 0 0 0"},children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:()=>dt(!he),children:["🌐 ",he?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:y,disabled:gt,children:[e.jsx(Ms,{size:14,className:gt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",style:{background:"#059669",borderColor:"#059669",fontSize:"0.8rem",fontWeight:700,padding:"7px 16px",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:()=>window.print(),children:[e.jsx(et,{size:15}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"sp-filters-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:ht,onChange:p=>Z(p.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(Le)?Le:[]).map(p=>{const k=p.academicYear&&!/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(p.academicYear))?p.academicYear:new Date().getFullYear();return e.jsxs("option",{value:p._id,children:[p.name," (",k,")"]},p._id)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:tt,onChange:p=>We(p.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(xt)?xt:[]).map(p=>e.jsx("option",{value:p._id,children:p.name},p._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:W,onChange:p=>Ee(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(zt)?zt:[]).map(p=>e.jsx("option",{value:p._id||p.name,children:p.name},p._id||p.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:st,onChange:p=>It(p.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"sp-toggles-section",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"7px",fontSize:"0.75rem",fontWeight:700,color:"#334155"},children:[e.jsx(Za,{size:13,style:{color:"#059669"}}),e.jsx("span",{children:"কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):"})]}),e.jsx("div",{className:"sp-toggles-wrap",children:[{checked:Ft,onChange:ue,label:"কক্ষ নম্বর"},{checked:_t,onChange:A,label:"পরীক্ষার নাম"},{checked:Lt,onChange:ot,label:"বিভাগ / গ্রুপ"},{checked:Ye,onChange:Qe,label:"শিক্ষার্থীর ছবি"},{checked:nt,onChange:ye,label:"আইডি নম্বর"},{checked:ut,onChange:Me,label:"শ্রেণি"},{checked:bt,onChange:qt,label:"শাখা"},{checked:yt,onChange:jt,label:"সেশন"},{checked:Pt,onChange:_,label:"বড় রোল বক্স"},{checked:Y,onChange:O,label:"কাটিং দাগ (✂)"},{checked:Ut,onChange:it,label:"লোগো ওয়াটারমার্ক"}].map((p,k)=>e.jsxs("label",{className:`sp-toggle-pill ${p.checked?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:p.checked,onChange:b=>p.onChange(b.target.checked),style:{accentColor:"#059669",margin:0}}),e.jsx("span",{children:p.label})]},k))})]}),e.jsxs("div",{className:"sp-controls-grid",children:[e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",flexWrap:"wrap",gap:"6px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Ls,{size:15,style:{color:"#059669"}}),"কক্ষ নম্বর নির্ধারণ (Room)"]}),e.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#047857",textDecoration:"underline",fontWeight:600,fontSize:"0.75rem",cursor:"pointer",padding:0},onClick:()=>g(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"90px",fontSize:"0.8rem",padding:"5px 8px",textAlign:"center",fontWeight:700},value:lt,onChange:p=>Vt(p.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px"},onClick:P,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",margin:"6px 0 0 0"},children:"টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।"})]}),e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Gt,{size:15,style:{color:"#059669"}}),"A4 পেজে কার্ড ও ফন্ট সাইজ:"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"6px",padding:"2px 6px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.74rem",marginRight:"2px"},children:"ফন্ট:"}),e.jsx("button",{type:"button",onClick:()=>pe(p=>Math.max(80,p-5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{fontWeight:700,color:"#047857",minWidth:"36px",textAlign:"center",fontSize:"0.75rem"},children:[Nt,"%"]}),e.jsx("button",{type:"button",onClick:()=>pe(p=>Math.min(140,p+5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট বড় করুন",children:"A+"}),Nt!==100&&e.jsx("button",{type:"button",onClick:()=>pe(100),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#ecfdf5",fontWeight:600,fontSize:"0.72rem",cursor:"pointer",color:"#047857"},title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"প্রিসেট:"}),[{val:10,label:"১০টি (২×৫)"},{val:12,label:"১২টি (৩×৪)"},{val:8,label:"৮টি (২×৪)"},{val:6,label:"৬টি (২×৩)"}].map(p=>{const k=vt===p.val&&!ts;return e.jsx("button",{type:"button",className:`btn ${k?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.74rem",padding:"4px 9px",...k?{background:"#059669",borderColor:"#059669"}:{}},onClick:()=>de(p.val),children:p.label},p.val)}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"কাস্টম:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:Pe,onChange:p=>De(p.target.value),className:"form-input",style:{width:"54px",fontSize:"0.78rem",padding:"4px 6px",textAlign:"center",fontWeight:700}})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",paddingTop:"6px",borderTop:"1px solid #e2e8f0",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"থিম:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-classic",onChange:()=>Ie("theme-classic")}),e.jsx("span",{children:"ক্লাসিক"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#047857",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-emerald",onChange:()=>Ie("theme-emerald")}),e.jsx("span",{children:"গ্রিন"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#1e40af",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Q==="theme-navy",onChange:()=>Ie("theme-navy")}),e.jsx("span",{children:"নেভি"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"বিন্যাস:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Dt==="logo-left",onChange:()=>Wt("logo-left")}),e.jsx("span",{style:{color:"#047857",fontWeight:600},children:"বামে লোগো"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Dt==="photo-left",onChange:()=>Wt("photo-left")}),e.jsx("span",{children:"বামে ছবি"})]})]})]})]})]}),e.jsxs("div",{className:"sp-summary-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:V,children:[Fe.size===te.length?e.jsx(Qa,{size:14}):e.jsx(Ja,{size:14}),e.jsx("span",{children:Fe.size===te.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{style:{fontWeight:600,color:"#334155",fontSize:"0.8rem"},children:["মোট শিক্ষার্থী: ",e.jsx("strong",{style:{color:"#047857"},children:te.length})," জন | নির্বাচিত: ",e.jsx("strong",{style:{color:"#047857"},children:Fe.size})," জন",ie.length>0&&e.jsxs("span",{style:{marginLeft:"6px",color:"#64748b"},children:["(মোট ",e.jsx("strong",{children:X.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsxs("div",{style:{position:"relative",minWidth:"210px"},children:[e.jsx(Ws,{size:14,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:$t,onChange:p=>ft(p.target.value),className:"form-input",style:{fontSize:"0.8rem",padding:"5px 10px 5px 30px",width:"100%"}})]})]})]}),r&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Ls,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:Zt,onChange:p=>Qt(p.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>g(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:q,children:"রুম ভাগ করুন"})]})]})}),gt?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):ie.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${Q}`,children:(Array.isArray(X)?X:[]).map((p,k)=>e.jsx("div",{className:`seat-plan-a4-sheet ${Y?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${we.cols}, 1fr)`,gridTemplateRows:`repeat(${we.rows}, 1fr)`,gap:vt<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(p)?p:[]).map(b=>{var Oe,He,Je,wt,ct,ms,Ot,ws,ks,Jt,ss,xs,as,hs,Rs;const T=b.fullName||((Oe=b.user)==null?void 0:Oe.fullName)||`${((He=b.user)==null?void 0:He.firstName)||""} ${((Je=b.user)==null?void 0:Je.lastName)||""}`.trim()||b.name||"—",ae=((wt=b.currentEnrollment)==null?void 0:wt.rollNumber)||b.rollNumber||b.roll||"—",H=b.studentId||b.admissionNumber||((ct=b._id)==null?void 0:ct.substring(0,6))||"—",me=((Ot=(ms=b.currentEnrollment)==null?void 0:ms.classLevel)==null?void 0:Ot.name)||((ws=b.classLevel)==null?void 0:ws.name)||b.class||"—",E=((Jt=(ks=b.currentEnrollment)==null?void 0:ks.section)==null?void 0:Jt.name)||((ss=b.currentEnrollment)==null?void 0:ss.section)||((xs=b.section)==null?void 0:xs.name)||b.section||"—",Ae=b.department||((as=b.currentEnrollment)==null?void 0:as.department)||"সাধারণ",$e=Bt[b._id]||lt||"১০১",ke=Ye&&(b.photo||(hs=b.user)!=null&&hs.photo)?b.photo||((Rs=b.user)==null?void 0:Rs.photo):Gs;return e.jsxs("div",{className:"seat-plan-card",children:[Ut&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:Xe=>{Xe.currentTarget.src=Ys},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:Dt==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Xe=>{Xe.currentTarget.src=Ys},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:he?"AN-NUR ISLAMIC ACADEMY":I.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:he?"Shahibag, Chapainawabganj":I.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:he?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),Ye?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:ke,onError:Xe=>{Xe.currentTarget.src=Gs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[Ye?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:ke,onError:Xe=>{Xe.currentTarget.src=Gs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:he?"AN-NUR ISLAMIC ACADEMY":I.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:he?"Shahibag, Chapainawabganj":I.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:he?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:Xe=>{Xe.currentTarget.src=Ys},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:T,children:T})]}),nt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:H})]}),ut&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:me})]}),bt&&E&&E!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:E})]}),Lt&&Ae&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:Ae})]}),Ft&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:he?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:$e,onChange:Xe=>{const Ge=Xe.target.value;se(qe=>({...qe,[b._id]:Ge}))}})}),e.jsx("span",{className:"print-only",children:$e})]})]})]})}),Pt&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:he?"Roll":"রোল"}),e.jsx("div",{className:"sp-roll-num",children:ae})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[_t&&e.jsx("span",{className:"font-semibold",children:Yt}),yt&&e.jsxs("span",{children:[he?"Session:":"সেশন:"," ",at&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(at))?new Date().getFullYear():at||new Date().getFullYear()]})]})]},b._id)})},`page-${k}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
        .seat-plan-workspace {
          --sp-font-scale: ${Nt/100};
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
      `})]})}const ps={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function $s({position:z}){const F={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},J={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...J[z]},children:e.jsxs("g",{transform:`translate(${z.includes("right")?64:0}, ${z.includes("bottom")?64:0}) ${F[z]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function Tn(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function En(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function Bn(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function _s({config:z=ps}){const F={...ps,...z},J=Array.isArray(F.rules)&&F.rules.length>0?F.rules:ps.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx($s,{position:"top-left"}),e.jsx($s,{position:"top-right"}),e.jsx($s,{position:"bottom-left"}),e.jsx($s,{position:"bottom-right"}),e.jsx(Tn,{}),e.jsx(En,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:F.title})})}),e.jsx("ul",{className:"backside-rules-list",children:J.filter(I=>I&&I.trim()).map((I,xt)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(Bn,{}),e.jsx("span",{children:I})]},xt))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:F.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:F.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:F.footerLeftBadge&&F.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:F.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:F.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:F.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const qs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',G=(z,F="—")=>z==null?F:typeof z=="object"?z.name||z.title||z.banglaName||z.code||z._id||F:String(z).trim()||F;function qa({exams:z=[],classes:F=[]}){const{user:J}=Va(),I=d.useMemo(()=>Vs(J),[J]),xt=d.useMemo(()=>Array.isArray(F)?F:F&&Array.isArray(F.classes)?F.classes:[],[F]),Le=d.useMemo(()=>Array.isArray(z)?z:z&&Array.isArray(z.exams)?z.exams:[],[z]),[ze,ht]=d.useState(""),[Z,tt]=d.useState(""),[We,zt]=d.useState("all"),[Te,W]=d.useState("all"),[Ee,st]=d.useState([]),[It,at]=d.useState([]),[At,Yt]=d.useState(!1),[Ze,gt]=d.useState(""),[R,te]=d.useState(new Set),[U,Fe]=d.useState({}),[f,Bt]=d.useState("১০২"),[se,$t]=d.useState(()=>new Date().toISOString().split("T")[0]),[ft,Ft]=d.useState("preview"),[ue,_t]=d.useState(85),[A,Lt]=d.useState("en"),[ot,Ye]=d.useState(4),[Qe,nt]=d.useState("4"),[ye,ut]=d.useState("landscape"),[Me,bt]=d.useState(!0),[qt,yt]=d.useState("admit"),[jt,Pt]=d.useState(()=>{try{const r=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(r)&&r>=80&&r<=135)return r}catch{}return 100});d.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(jt))}catch{}},[jt]);const[_,Y]=d.useState(()=>{try{const r=localStorage.getItem("admit_backside_config");if(r)return{...ps,...JSON.parse(r)}}catch{}return ps});d.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(_))}catch{}},[_]);const[O,Ut]=d.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});d.useEffect(()=>{Le.length>0&&!ze&&ht(Le[0]._id||Le[0].id||"")},[Le,ze]),d.useEffect(()=>{if(!Z){st([]),zt("all");return}(async()=>{var g,y,V,P;try{const q=await B.get(`/students/sections?classLevel=${Z}`),ie=((y=(g=q.data)==null?void 0:g.data)==null?void 0:y.sections)||((V=q.data)==null?void 0:V.sections)||((P=q.data)==null?void 0:P.data)||[],de=Array.isArray(ie)?ie:[];st(de),zt("all")}catch{st([])}})()},[Z]);const it=async()=>{var r,g,y,V;if(!Z){at([]),te(new Set);return}Yt(!0);try{const P={classLevel:Z,limit:500,status:"active"};We&&We!=="all"&&(P.section=We);const q=await B.get("/students",{params:P}),ie=((g=(r=q.data)==null?void 0:r.data)==null?void 0:g.students)||((y=q.data)==null?void 0:y.students)||((V=q.data)==null?void 0:V.data)||[];let de=Array.isArray(ie)?ie:ie.students||[];Te&&Te!=="all"&&(de=de.filter(X=>{var p;return(X.department||((p=X.currentEnrollment)==null?void 0:p.department)||"").toLowerCase().includes(Te.toLowerCase())})),de.sort((X,ee)=>{var b,T;const p=Ve(((b=X.currentEnrollment)==null?void 0:b.rollNumber)||X.rollNumber||X.roll),k=Ve(((T=ee.currentEnrollment)==null?void 0:T.rollNumber)||ee.rollNumber||ee.roll);return p-k}),at(de);const De=new Set(de.map(X=>X._id||X.id));te(De);const we={};de.forEach(X=>{const ee=X._id||X.id;we[ee]=f}),Fe(we)}catch(P){console.error("Failed to load students for admit card:",P),at([]),te(new Set)}finally{Yt(!1)}};d.useEffect(()=>{Z&&it()},[Z,We,Te]);const vt=()=>{const r=f.trim();r&&Fe(g=>{const y={...g};return R.forEach(V=>{y[V]=r}),y})},je=()=>{R.size===xe.length&&xe.length>0?te(new Set):te(new Set(xe.map(r=>r._id||r.id)))},ts=r=>{const g=new Set(R);g.has(r)?g.delete(r):g.add(r),te(g)},xe=d.useMemo(()=>{if(!Ze.trim())return It;const r=Ze.toLowerCase();return It.filter(g=>{var q,ie;const y=G(((q=g.user)==null?void 0:q.name)||g.name,"").toLowerCase(),V=G(((ie=g.currentEnrollment)==null?void 0:ie.rollNumber)||g.rollNumber||g.roll,"").toLowerCase(),P=G(g.studentId||g.admissionNumber,"").toLowerCase();return y.includes(r)||V.includes(r)||P.includes(r)})},[It,Ze]),Pe=d.useMemo(()=>It.filter(r=>R.has(r._id||r.id)),[It,R]),Re=d.useMemo(()=>Le.find(r=>(r._id||r.id)===ze)||null,[Le,ze]),Q=d.useMemo(()=>xt.find(r=>(r._id||r.id)===Z)||null,[xt,Z]),Ie=r=>{Ye(r),nt(String(r)),r!==4&&Me&&bt(!1)},Dt=r=>{nt(r);const g=parseInt(r,10);!isNaN(g)&&g>0&&g<=8&&(Ye(g),g!==4&&Me&&bt(!1))},Wt=r=>{ut(r),r==="landscape"?(Ye(4),nt("4")):Me&&bt(!1)},he=()=>{const r=!Me;bt(r),r&&(ut("landscape"),Ye(4),nt("4"))},dt=d.useMemo(()=>{const r=[],g=parseInt(ot,10)||2;for(let y=0;y<Pe.length;y+=g)r.push(Pe.slice(y,y+g));return r},[Pe,ot]),Nt=r=>{Ut(g=>({...g,[r]:!g[r]}))},pe=d.useRef(null),lt=d.useRef(null),Vt=r=>{const g=pe.current,y=lt.current;if(!g||!y){window.print();return}const V=document.getElementById("admit-print-iframe");V&&V.remove();const P=document.createElement("iframe");P.id="admit-print-iframe",P.style.position="fixed",P.style.right="0",P.style.bottom="0",P.style.width="0",P.style.height="0",P.style.border="0",P.style.visibility="hidden",document.body.appendChild(P);const q=P.contentWindow.document,ie=window.location.origin;q.open(),q.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${ie}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${jt/100};
    }
    @page {
      size: A4 ${r};
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
      height: ${r==="landscape"?"201mm":"288mm"} !important;
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
  <div class="admit-print-only-container">${g.innerHTML}</div>
</body>
</html>`),q.close();const de=()=>{try{P.contentWindow.focus(),P.contentWindow.print()}catch(we){console.error("Iframe print error:",we),window.print()}},De=Array.from(q.images||[]);if(De.length===0)setTimeout(de,120);else{let we=!1;const X=()=>{we||(we=!0,setTimeout(de,100))};Promise.all(De.map(ee=>ee.complete?Promise.resolve():new Promise(p=>{ee.onload=p,ee.onerror=p}))).then(X),setTimeout(X,1200)}},Zt=()=>{if(Pe.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}yt("admit");const r=ye==="landscape"?"landscape":"portrait";setTimeout(()=>Vt(r),80)},Qt=()=>{yt("backside_only"),setTimeout(()=>Vt("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Ct,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:G(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>Lt("en"),className:`admit-lang-btn ${A==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>Lt("bn"),className:`admit-lang-btn ${A==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>Lt("bi"),className:`admit-lang-btn ${A==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:it,disabled:At||!Z,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Ms,{size:15,className:At?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:Qt,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(et,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:Zt,disabled:Pe.length===0,className:"admit-btn-print",children:[e.jsx(et,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",Pe.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Da,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:xe.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(Sn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:Pe.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Gt,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[ot,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Ct,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[dt.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Et,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:ze,onChange:r=>ht(r.target.value),className:"admit-select",children:Le.map(r=>{const g=r._id||r.id||"",y=G(r.name||r.title,"Exam");return e.jsx("option",{value:g,children:y},g)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ls,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:Z,onChange:r=>tt(r.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),xt.map(r=>{const g=r._id||r.id||"",y=G(r.name||r.banglaName||r.code,"Class");return e.jsx("option",{value:g,children:y},g)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Gt,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:We,onChange:r=>zt(r.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),Ee.map((r,g)=>{const y=G(r,"");return e.jsx("option",{value:y,children:y},g)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Cn,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:Te,onChange:r=>W(r.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Gt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(r=>e.jsx("button",{type:"button",onClick:()=>Ie(r.count),className:`admit-pill-btn ${ot===r.count?"active":""}`,children:r.label},r.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Qe,onChange:r=>Dt(r.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(zn,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Wt("portrait"),className:`admit-pill-btn ${ye==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>Wt("landscape"),className:`admit-pill-btn ${ye==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:he,className:`admit-pill-btn ${Me?"active":""}`,style:{border:Me?"1px solid #0d3b66":"1px solid #cbd5e1",background:Me?"#0d3b66":"#ffffff",color:Me?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:Me?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Pt(r=>Math.max(80,r-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[jt,"%"]}),e.jsx("button",{type:"button",onClick:()=>Pt(r=>Math.min(135,r+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),jt!==100&&e.jsx("button",{type:"button",onClick:()=>Pt(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ls,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:f,onChange:r=>Bt(r.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:vt,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Et,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:se,onChange:r=>$t(r.target.value),className:"admit-date-input"})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>Ft("preview"),className:`admit-tab-btn ${ft==="preview"?"active":""}`,children:[e.jsx(In,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[dt.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>Ft("students"),className:`admit-tab-btn ${ft==="students"?"active":""}`,children:[e.jsx(Da,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[Pe.length,"/",xe.length]})]}),e.jsxs("button",{type:"button",onClick:()=>Ft("settings"),className:`admit-tab-btn ${ft==="settings"?"active":""}`,children:[e.jsx(Rn,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),ft==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>_t(Math.max(50,ue-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(An,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[ue,"%"]}),e.jsx("button",{type:"button",onClick:()=>_t(Math.min(130,ue+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx($n,{size:14})}),e.jsx("button",{type:"button",onClick:()=>_t(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),ft==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:At?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Ms,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):Z?Pe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${ue/100})`,transformOrigin:"top center"},children:dt.map((r,g)=>e.jsxs(Oa.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",g+1," / ",dt.length," ",ye==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",r.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${ot} ${ye==="landscape"?"a4-landscape":""}`,children:r.map(y=>{var k,b,T,ae;const V=y._id||y.id,P=G(((k=y.user)==null?void 0:k.name)||y.name,"MD. STUDENT"),q=G(((b=y.currentEnrollment)==null?void 0:b.rollNumber)||y.rollNumber||y.roll,"—"),ie=G(y.studentId||y.admissionNumber,"—"),de=G(((T=y.currentEnrollment)==null?void 0:T.section)||y.section||(We!=="all"?We:"—"),"—"),De=G(y.department||((ae=y.currentEnrollment)==null?void 0:ae.department)||y.stream,"All"),we=G(U[V]||f,"১০২"),X=y.photo||qs,ee=G((Re==null?void 0:Re.name)||(Re==null?void 0:Re.title),"Annual Examination 2026"),p=G((Q==null?void 0:Q.name)||(Q==null?void 0:Q.banglaName)||(Q==null?void 0:Q.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[O.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:H=>{H.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:H=>{H.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:A==="bn"?G(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:A==="bn"?G(I.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:A==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),O.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:A==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:es(se)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:P})]}),O.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:De})]}),O.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ie})]}),O.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:we})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:q})]}),O.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),O.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),O.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:p})]}),O.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:de})]})]}),O.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:X,alt:"Photo"})})]}),O.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:A==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:ee})]}),e.jsxs("div",{className:"signatures-row",children:[O.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),O.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},V)})})]}),Me&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",g+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(y=>e.jsx(_s,{config:_},`preview-back-${g}-${y}`))})]})]},`preview-group-${g}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Ct,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),Me&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${ue/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(r=>e.jsx(_s,{config:_},`empty-back-${r}`))})]})})})]})}),ft==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:je,className:"admit-btn-select-all",children:R.size===xe.length&&xe.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Qa,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ja,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",xe.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:R.size})," / ",xe.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Ws,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Ze,onChange:r=>gt(r.target.value),className:"admit-search-input"}),Ze&&e.jsx("button",{type:"button",onClick:()=>gt(""),className:"admit-search-clear",children:"✕"})]})]}),xe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:R.size===xe.length&&xe.length>0,onChange:je,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:xe.map(r=>{var X,ee,p,k;const g=r._id||r.id,y=R.has(g),V=G(((X=r.currentEnrollment)==null?void 0:X.rollNumber)||r.rollNumber||r.roll,"—"),P=G(((ee=r.user)==null?void 0:ee.name)||r.name,"—"),q=G(r.studentId||r.admissionNumber,"—"),ie=G(((p=r.currentEnrollment)==null?void 0:p.section)||r.section||(We!=="all"?We:"—"),"—"),de=G(r.department||((k=r.currentEnrollment)==null?void 0:k.department)||r.stream,"সাধারণ"),De=G(U[g]||f,"১০২"),we=r.photo||qs;return e.jsxs("tr",{className:y?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:y,onChange:()=>ts(g),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:V})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:we,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:q}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:P}),e.jsx("td",{style:{color:"#475569"},children:de}),e.jsx("td",{style:{color:"#475569"},children:ie}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:De,onChange:b=>{const T=b.target.value;Fe(ae=>({...ae,[g]:T}))},className:"admit-table-room-input"})})]},g)})})]})})]}),ft==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Za,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(r=>{const g=O[r.key];return e.jsxs("button",{type:"button",onClick:()=>Nt(r.key),className:`admit-toggle-card ${g?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${g?"active":""}`,children:g&&e.jsx(yn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:r.label}),e.jsx("div",{className:"admit-toggle-desc",children:r.desc})]})]},r.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Ct,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>Y(ps),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.title,onChange:r=>Y(g=>({...g,title:r.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.noteLabel,onChange:r=>Y(g=>({...g,noteLabel:r.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.noteText,onChange:r=>Y(g=>({...g,noteText:r.target.value}))})]}),(_.rules||[]).map((r,g)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",g+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:r,onChange:y=>{const V=[..._.rules||[]];V[g]=y.target.value,Y(P=>({...P,rules:V}))}})]},`rule-edit-${g}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.authorityLine1,onChange:r=>Y(g=>({...g,authorityLine1:r.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:_.authorityLine2,onChange:r=>Y(g=>({...g,authorityLine2:r.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:_.footerLeftBadge||"",onChange:r=>Y(g=>({...g,footerLeftBadge:r.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:pe,children:qt==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(r=>e.jsx(_s,{config:_},`print-back-only-${r}`))}):Pe.length>0&&dt.map((r,g)=>e.jsxs(Oa.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${ot} ${ye==="landscape"?"a4-landscape":""}`,children:r.map(y=>{var k,b,T,ae;const V=y._id||y.id,P=G(((k=y.user)==null?void 0:k.name)||y.name,"MD. STUDENT"),q=G(((b=y.currentEnrollment)==null?void 0:b.rollNumber)||y.rollNumber||y.roll,"—"),ie=G(y.studentId||y.admissionNumber,"—"),de=G(((T=y.currentEnrollment)==null?void 0:T.section)||y.section||(We!=="all"?We:"—"),"—"),De=G(y.department||((ae=y.currentEnrollment)==null?void 0:ae.department)||y.stream,"All"),we=G(U[V]||f,"১০২"),X=y.photo||qs,ee=G((Re==null?void 0:Re.name)||(Re==null?void 0:Re.title),"Annual Examination 2026"),p=G((Q==null?void 0:Q.name)||(Q==null?void 0:Q.banglaName)||(Q==null?void 0:Q.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[O.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:H=>{H.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:H=>{H.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:A==="bn"?G(I.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:A==="bn"?G(I.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:A==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),O.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:A==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:es(se)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:P})]}),O.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:De})]}),O.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:ie})]}),O.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:we})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:q})]}),O.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),O.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),O.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:p})]}),O.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:A==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:de})]})]}),O.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:X,alt:"Photo"})})]}),O.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:A==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:ee})]}),e.jsxs("div",{className:"signatures-row",children:[O.teacherSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 160 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 42C25 15 32 8 38 10C44 12 40 38 48 42C56 46 72 20 85 22C98 24 105 40 120 38C132 36 142 22 152 28",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 28C45 26 80 20 110 32",stroke:"#111827",strokeWidth:"1.8",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),O.principalSig?e.jsxs("div",{className:"signature-block",children:[e.jsxs("svg",{className:"signature-svg",viewBox:"0 0 180 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M20 38C28 18 36 12 42 16C48 20 44 42 58 36C70 30 82 14 96 20C110 26 120 44 135 34C145 28 155 18 165 24",stroke:"#111827",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M60 48C85 45 125 42 150 46",stroke:"#111827",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-name",children:"MD. RAFIQUL ISLAM"}),e.jsx("div",{className:"sig-title",children:A==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher (In-charge)"})]}):e.jsx("div",{})]})]})]})},`print-${V}`)})}),Me&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(y=>e.jsx(_s,{config:_},`print-back-${g}-${y}`))})]},`print-group-${g}`))}),e.jsx("style",{ref:lt,children:`
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
        .a4-page-sheet.a4-landscape.a4-sheet-layout-4 .signature-svg {
          width: 24mm;
          height: 6mm;
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
          size: A4 ${qt==="backside_only"||ye==="landscape"?"landscape":"portrait"};
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
      `})]})}const Fn=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],Us=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function Pn(z,F=!1){if(!z)return"—";const J=F?" (যৌথ)":"";return z===1?`🥇 ১ম স্থান${J}`:z===2?`🥈 ২য় স্থান${J}`:z===3?`🥉 ৩য় স্থান${J}`:z===4?`৪র্থ${J}`:z===5?`৫ম${J}`:z===6?`৬ষ্ঠ${J}`:z===7?`৭ম${J}`:z===8?`৮ম${J}`:z===9?`৯ম${J}`:z===10?`১০ম${J}`:`${z}তম${J}`}function pi({initialViewMode:z}){var sa,aa,na,ia,la,ra,oa,da,ca,pa,ma,xa,ha,ga,fa,ua,ba,ya,ja,va,Na,wa,ka,Sa,Ca,za,Ia,Aa,$a,_a,La,Wa,Ma,Ra,Ta;const F=jn(),J=vn(),{user:I}=Va(),{madrasahName:xt,branchName:Le}=Vs(I),[ze,ht]=d.useState([]),[Z,tt]=d.useState([]),[We,zt]=d.useState(!0),[Te,W]=d.useState(null),[Ee,st]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[It,at]=d.useState(!1),[At,Yt]=d.useState(!1),[Ze,gt]=d.useState(null),[R,te]=d.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[U,Fe]=d.useState([]),[f,Bt]=d.useState(null),[se,$t]=d.useState([]),[ft,Ft]=d.useState([]),[ue,_t]=d.useState(""),[A,Lt]=d.useState(""),[ot,Ye]=d.useState(!1),[Qe,nt]=d.useState([]),[ye,ut]=d.useState({}),[Me,bt]=d.useState(!1),[qt,yt]=d.useState([]),jt=z==="routine"||(J==null?void 0:J.pathname)==="/exam-routine",Pt=z==="admit_card"||(J==null?void 0:J.pathname)==="/admit-card",[_,Y]=d.useState(jt?"routine":Pt?"admit_card":"marks"),[O,Ut]=d.useState(!1),[it,vt]=d.useState("all"),[je,ts]=d.useState([]),[xe,Pe]=d.useState([]),[Re,Q]=d.useState(!1),[Ie,Dt]=d.useState("landscape"),[Wt,he]=d.useState(""),[dt,Nt]=d.useState("all"),[pe,lt]=d.useState(null),[Vt,Zt]=d.useState(!1),[Qt,r]=d.useState([]),[g,y]=d.useState(""),[V,P]=d.useState("all"),[q,ie]=d.useState(""),[de,De]=d.useState([]),[we,X]=d.useState(!1),[ee,p]=d.useState(new Set),[k,b]=d.useState(""),[T,ae]=d.useState("all"),[H,me]=d.useState(!1),[E,Ae]=d.useState(null),[$e,ke]=d.useState([]),[Oe,He]=d.useState(!1),[Je,wt]=d.useState("all"),[ct,ms]=d.useState("all"),[Ot,ws]=d.useState("all"),[ks,Jt]=d.useState(!1),[ss,xs]=d.useState(!1),[as,hs]=d.useState(null),[Rs,Xe]=d.useState(null),[Ge,qe]=d.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),pt=(I==null?void 0:I.userType)==="guardian",Ss=(I==null?void 0:I.userType)==="student",ce=Ss||pt,[rt,Xa]=d.useState([]),[Mt,Zs]=d.useState(""),[Rt,Ts]=d.useState(null);d.useEffect(()=>{if(Te){const t=setTimeout(()=>W(null),4e3);return()=>clearTimeout(t)}},[Te]);const Ht=async(t=null)=>{zt(!0);try{const s={},a=t||Mt;pt&&a&&(s.studentId=a);const n=await B.get("/exams",{params:s});n.data.success&&ht(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),W({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{zt(!1)}},Ka=t=>{var a,n;Zs(t);const s=rt.find(i=>i._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const i=s.currentEnrollment.classLevel,o=typeof i=="object"?i:{_id:i,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Ts(o),b(o._id)}Ht(t),ce&&ys(!1,t)},gs=async t=>{if(!t){Fe([]);return}try{const s=await B.get(`/students/subjects?classLevel=${t}`);s.data.success&&Fe(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},en=async()=>{try{const t=await B.get("/students/classes");t.data.success&&tt(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};d.useEffect(()=>{(async()=>{var s,a,n,i,o,c;if(pt)try{const l=await B.get("/students",{params:{limit:100}});if(l.data.success&&((s=l.data.data)==null?void 0:s.length)>0){const N=l.data.data;Xa(N),Zs(N[0]._id);const m=(a=N[0].currentEnrollment)==null?void 0:a.classLevel;if(m){const j=typeof m=="object"?m:{_id:m,name:((n=N[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Ts(j),b(j._id)}Ht(N[0]._id)}else Ht()}catch(l){console.error("Error loading guardian children",l),Ht()}else if(Ss){try{const l=await B.get("/students",{params:{limit:1}});if(l.data.success&&((i=l.data.data)==null?void 0:i.length)>0){const N=l.data.data[0],m=(o=N.currentEnrollment)==null?void 0:o.classLevel;if(m){const j=typeof m=="object"?m:{_id:m,name:((c=N.currentEnrollment)==null?void 0:c.className)||"শ্রেণি"};Ts(j),b(j._id)}}}catch(l){console.error("Error loading student profile for class",l)}Ht()}else Ht();en(),bs()})(),ce&&ys()},[]),d.useEffect(()=>{_==="student_result"&&f&&Qt.length===0&&nn(f),_==="subject_result"&&se.length>0&&!g&&(y(se[0]._id),zs(se[0]._id,V))},[_,f,se,Qt.length]);const Cs=t=>{te({...R,[t.target.name]:t.target.value})},tn=async t=>{var i;gt(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(o=>typeof o=="object"?o._id:o):[],n=((i=t.classLevel)==null?void 0:i._id)||"";te({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&gs(n),at(!0)},sn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await B.delete(`/exams/${t}`)).data.success&&(W({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Ht())}catch(n){console.error("Failed to delete exam",n);const i=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";W({type:"error",message:i})}},an=async t=>{var s,a,n,i;if(t.preventDefault(),R.examCategory==="monthly_test"&&((s=R.selectedSubjects)==null?void 0:s.length)!==4){W({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=R.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}Yt(!0);try{let o;Ze?o=await B.patch(`/exams/${Ze}`,R):o=await B.post("/exams",R),o.data.success&&(at(!1),gt(null),te({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),W({type:"success",message:Ze?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Ht())}catch(o){console.error("Failed to submit exam",o);const c=((i=(n=o.response)==null?void 0:n.data)==null?void 0:i.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";W({type:"error",message:c})}finally{Yt(!1)}},Qs=async t=>{var a,n,i,o,c,l,N,m;if(Bt(t),_t(""),Lt(""),nt([]),ut({}),yt([]),lt(null),he(""),Nt("all"),y(""),P("all"),ie(""),De([]),p(new Set),ce){Ye(!0);try{const j={examId:t._id};pt&&Mt&&(j.studentId=Mt);const h=await B.get("/exams/student-results",{params:j});if((a=h.data)!=null&&a.success&&h.data.data){lt(h.data.data);const x=(n=h.data.data.results)==null?void 0:n[0];yt((x==null?void 0:x.subjects)||[])}else{const x=await B.get("/exams/marks",{params:{exam:t._id,...pt&&Mt?{student:Mt}:{}}});yt(((o=(i=x.data)==null?void 0:i.data)==null?void 0:o.marks)||[])}}catch(j){console.error("Failed to load student detailed results",j);try{const h=await B.get("/exams/marks",{params:{exam:t._id,...pt&&Mt?{student:Mt}:{}}});yt(((l=(c=h.data)==null?void 0:c.data)==null?void 0:l.marks)||[])}catch{}}finally{Ye(!1)}return}const s=((N=t.classLevel)==null?void 0:N._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const j=await B.get(`/students/subjects?classLevel=${s}`);if(j.data.success){let v=j.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const S=t.selectedSubjects.map(L=>String(typeof L=="object"?L._id:L));v=v.filter(L=>S.includes(String(L._id)))}$t(v)}const h=await B.get(`/students/sections?classLevel=${s}`);h.data.success&&Ft(h.data.data.sections||[]);const x=await B.get("/students",{params:{classLevel:s,limit:300}});if(x.data.success){const v=x.data.data;let S=Array.isArray(v)?v:(v==null?void 0:v.students)||[];if(S.length===0){const D=(m=(await B.get("/students",{params:{limit:500}})).data)==null?void 0:m.data;S=Array.isArray(D)?D:(D==null?void 0:D.students)||[]}S.sort((L,D)=>{var le,oe;return Ve(((le=L.currentEnrollment)==null?void 0:le.rollNumber)||L.roll)-Ve(((oe=D.currentEnrollment)==null?void 0:oe.rollNumber)||D.roll)}),r(S)}}catch(j){console.error("Failed to fetch subjects/sections for mark entry",j)}},nn=async t=>{var n,i,o;const s=t||f;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const c={limit:300};a&&(c.classLevel=a);const l=await B.get("/students",{params:c});if((i=l.data)!=null&&i.success){const N=l.data.data;let m=Array.isArray(N)?N:(N==null?void 0:N.students)||[];if(m.length===0&&a){const h=(o=(await B.get("/students",{params:{limit:500}})).data)==null?void 0:o.data;m=Array.isArray(h)?h:(h==null?void 0:h.students)||[]}m.sort((j,h)=>{var x,v;return Ve(((x=j.currentEnrollment)==null?void 0:x.rollNumber)||j.roll)-Ve(((v=h.currentEnrollment)==null?void 0:v.rollNumber)||h.roll)}),r(m)}}catch(c){console.warn("Failed to load class students:",c)}},Es=async t=>{var n,i;const a=Kt(t||Wt);if(!a||!String(a).trim()){W({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Zt(!0),lt(null);try{const o=await B.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:f==null?void 0:f._id}});o.data.success&&lt(o.data.data)}catch(o){console.error("Failed to load student result",o);const c=((i=(n=o.response)==null?void 0:n.data)==null?void 0:i.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";W({type:"error",message:c})}finally{Zt(!1)}},zs=async(t,s)=>{const a=t!==void 0?t:g,n=s!==void 0?s:V;if(!a){W({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}X(!0);try{const i={exam:f==null?void 0:f._id,subject:a},o=await B.get("/exams/marks",{params:i});if(o.data.success){let c=o.data.data.marks||[];n&&n!=="all"&&(c=c.filter(N=>{var h,x,v,S;const m=(h=N.student)==null?void 0:h.currentEnrollment,j=typeof(m==null?void 0:m.section)=="object"?((x=m==null?void 0:m.section)==null?void 0:x.name)||((v=m==null?void 0:m.section)==null?void 0:v._id):(m==null?void 0:m.section)||((S=N.student)==null?void 0:S.section);return String(j||"")===String(n)})),De(c);const l=new Set(c.map(N=>{var m;return String(((m=N.student)==null?void 0:m._id)||N._id)}));if(p(l),se.length===0&&c.length>0){const N={};c.forEach(j=>{j.subject&&typeof j.subject=="object"&&j.subject._id&&(N[j.subject._id]=j.subject)});const m=Object.values(N);m.length>0&&$t(m)}}}catch(i){console.error("Failed to load subject marks",i),W({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{X(!1)}},Js=t=>{const s=t.map(i=>{var o;return String(((o=i.student)==null?void 0:o._id)||i._id)}),a=s.length>0&&s.every(i=>ee.has(i)),n=new Set(ee);a?s.forEach(i=>n.delete(i)):s.forEach(i=>n.add(i)),p(n)},ln=t=>{const s=new Set(ee),a=String(t);s.has(a)?s.delete(a):s.add(a),p(s)},Bs=()=>{var N;if(!pe||!pe.results||pe.results.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=pe.student||{},s=pe.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",i=t.department||"";let o="—";n&&i?o=`${n} (${i})`:n?o=n:i&&(o=i);const c=`
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
          <div><strong>শ্রেণি:</strong> ${t.className||((N=f==null?void 0:f.classLevel)==null?void 0:N.name)||"—"}</div>
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
    `,l=window.open("","_blank");l&&(l.document.write(c),l.document.close())},Xs=t=>{var i,o,c,l,N,m,j;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((i=f==null?void 0:f.classLevel)==null?void 0:i.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Bs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((h,x)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:x+1}),e.jsx("td",{className:"font-semibold",children:h.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:h.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:h.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:h.marksObtained!==null&&typeof h.marksObtained=="object"?h.marksObtained.marksObtained:h.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[h.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(h.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:h.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(h.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${h.isPassed?"badge-active":"badge-danger"}`,children:h.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},h.markId||x))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((o=n.term1)==null?void 0:o.obtained)||0," / ",((c=n.term1)==null?void 0:c.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((l=n.term2)==null?void 0:l.obtained)||0," / ",((N=n.term2)==null?void 0:N.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((m=n.term3)==null?void 0:m.obtained)||0," / ",((j=n.term3)==null?void 0:j.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},Ks=t=>{var h;const s=(t||de).filter(x=>{var v;return ee.has(String(((v=x.student)==null?void 0:v._id)||x._id))});if(s.length===0){W({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=se.find(x=>x._id===g),n=(a==null?void 0:a.name)||"বিষয়",i=Number(a==null?void 0:a.totalMarks)||100,o=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),c=s.length,l=s.filter(x=>{const v=Number(x.marksObtained)||0;return(i>0?v/i*100:v)>=33}).length,N=c>0?Math.round(l/c*100):0,m=`
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
      ${os({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((h=f==null?void 0:f.classLevel)==null?void 0:h.name)||"")+" | <strong>পূর্ণমান:</strong> "+i+" | <strong>পরীক্ষা:</strong> "+((f==null?void 0:f.name)||""),metaRight:"<strong>তারিখ:</strong> "+o})}

      <div class="stats-strip">
        <div><strong>মোট পরীক্ষার্থী:</strong> ${c} জন</div>
        <div><strong>উত্তীর্ণ:</strong> ${l} জন</div>
        <div><strong>অনুত্তীর্ণ:</strong> ${c-l} জন</div>
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
          ${s.map((x,v)=>{var ge,Be,w,u,M,$,K,C,be,fe,ve,Ne,kt,mt,Ce,Ue,St,Ea,Ba,Fa,Pa;const S=Number(x.marksObtained)||0,L=i>0?Math.round(S/i*100):S,D=Tt(S,i),le=L>=33,oe=((ge=x.student)==null?void 0:ge.fullName)||((w=(Be=x.student)==null?void 0:Be.user)==null?void 0:w.fullName)||`${((M=(u=x.student)==null?void 0:u.user)==null?void 0:M.firstName)||""} ${((K=($=x.student)==null?void 0:$.user)==null?void 0:K.lastName)||""}`.trim()||"—",Se=((be=(C=x.student)==null?void 0:C.currentEnrollment)==null?void 0:be.rollNumber)||((fe=x.student)==null?void 0:fe.roll)||"—",_e=((ve=x.student)==null?void 0:ve.studentId)||"—",re=typeof((kt=(Ne=x.student)==null?void 0:Ne.currentEnrollment)==null?void 0:kt.section)=="object"?((Ue=(Ce=(mt=x.student)==null?void 0:mt.currentEnrollment)==null?void 0:Ce.section)==null?void 0:Ue.name)||((Ba=(Ea=(St=x.student)==null?void 0:St.currentEnrollment)==null?void 0:Ea.section)==null?void 0:Ba._id):((Pa=(Fa=x.student)==null?void 0:Fa.currentEnrollment)==null?void 0:Pa.section)||"—";return`
              <tr>
                <td class="text-center">${v+1}</td>
                <td class="text-center font-bold">${Se}</td>
                <td class="font-bold">${oe}</td>
                <td class="text-center">${_e}</td>
                <td class="text-center">${re}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${S} / ${i}</td>
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
    `,j=window.open("","_blank");j&&(j.document.write(m),j.document.close())},Fs=()=>{var x;if(!Qe||Qe.length===0){W({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=se.find(v=>v._id===ue),s=ue==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,i=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),o=A==="all"?"সকল সেকশন":`সেকশন ${A}`,c=Qe.filter(v=>{const S=ye[v._id];return S!==void 0&&S!==""&&!isNaN(S)}).length,l=Qe.filter(v=>{const S=ye[v._id];return S===void 0||S===""||isNaN(S)?!1:(n>0?Number(S)/n*100:Number(S))>=33}).length,N=c>0?Math.round(l/c*100):0,m=[...Qe].sort((v,S)=>{var L,D;return Ve(((L=v.currentEnrollment)==null?void 0:L.rollNumber)||v.roll)-Ve(((D=S.currentEnrollment)==null?void 0:D.rollNumber)||S.roll)}),j=`
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
      ${os({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((f==null?void 0:f.name)||"")+" | <strong>শ্রেণি:</strong> "+(((x=f==null?void 0:f.classLevel)==null?void 0:x.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+o,metaRight:"<strong>তারিখ:</strong> "+i})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Qe.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${c} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${l} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Qe.length-l} জন</div>
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
          ${m.map((v,S)=>{var M,$,K,C,be,fe,ve,Ne,kt,mt;const L=v._id,D=((M=v.currentEnrollment)==null?void 0:M.rollNumber)||v.roll||"—",le=(($=v.user)==null?void 0:$.fullName)||`${((K=v.user)==null?void 0:K.firstName)||""} ${((C=v.user)==null?void 0:C.lastName)||""}`.trim()||"—",oe=v.studentId||"—",Se=typeof((be=v.currentEnrollment)==null?void 0:be.section)=="object"?((ve=(fe=v.currentEnrollment)==null?void 0:fe.section)==null?void 0:ve.name)||((kt=(Ne=v.currentEnrollment)==null?void 0:Ne.section)==null?void 0:kt._id):((mt=v.currentEnrollment)==null?void 0:mt.section)||v.section||A;if(s){const Ce=Array.isArray(ye[L])?ye[L]:[],Ue=Ce.length>0?Ce.map(St=>St.subjectName+": "+St.marksObtained+" ("+St.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${S+1}</td>
                  <td class="text-center font-bold">${D}</td>
                  <td class="font-bold">${le}</td>
                  <td class="text-center">${oe}</td>
                  <td class="text-center">${Se}</td>
                  <td style="font-size: 10px;">${Ue}</td>
                </tr>
              `}const _e=ye[L],re=_e!==void 0&&_e!==""&&!isNaN(_e),ge=re?Number(_e):null,Be=re?n>0?Math.round(ge/n*100):ge:null,w=re?Tt(ge,n):"—",u=re?Be>=33:!1;return`
              <tr>
                <td class="text-center">${S+1}</td>
                <td class="text-center font-bold">${D}</td>
                <td class="font-bold">${le}</td>
                <td class="text-center">${oe}</td>
                <td class="text-center">${Se}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${re?ge+" / "+n:"—"}</td>
                <td class="text-center font-bold">${re?Be+"%":"—"}</td>
                <td class="text-center font-bold">${w}</td>
                <td class="text-center font-bold" style="color: ${re?u?"#059669":"#dc2626":"#64748b"};">
                  ${re?u?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
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
    `,h=window.open("","_blank");h&&(h.document.write(j),h.document.close())},rn=async()=>{if(!ue||!A){W({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}Ye(!0);try{const t={classLevel:f.classLevel._id,limit:100};A!=="all"&&(t.section=A);const a=(await B.get("/students",{params:t})).data.data||[];a.sort((c,l)=>{var j,h;const N=Ve(((j=c.currentEnrollment)==null?void 0:j.rollNumber)||c.roll),m=Ve(((h=l.currentEnrollment)==null?void 0:h.rollNumber)||l.roll);return N-m}),nt(a);const n={exam:f._id};ue!=="all"&&(n.subject=ue);const o=(await B.get("/exams/marks",{params:n})).data.data.marks||[];if(ue==="all"){const c={};a.forEach(l=>{c[l._id]=[]}),o.forEach(l=>{var m,j;const N=typeof l.student=="object"?(m=l.student)==null?void 0:m._id:l.student;N&&c[N]&&c[N].push({subjectName:((j=l.subject)==null?void 0:j.name)||"অজানা বিষয়",marksObtained:l.marksObtained,grade:l.grade})}),ut(c)}else{const c={};a.forEach(l=>{c[l._id]=""}),o.forEach(l=>{var m;const N=typeof l.student=="object"?(m=l.student)==null?void 0:m._id:l.student;N&&(c[N]=l.marksObtained??"")}),ut(c)}}catch(t){console.error("Failed to load students for marks entry",t),W({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{Ye(!1)}},fs=async(t=it,s=f)=>{var i,o,c,l,N,m,j,h;const a=s||f;if(!a)return;const n=((i=a.classLevel)==null?void 0:i._id)||(typeof a.classLevel=="string"?a.classLevel:null);Ut(!0);try{if(ce){const w=await B.get(`/exams/${a._id}/rankings`);if(w.data.success&&w.data.data){const{rankings:u=[],evaluatedSubjects:M=[]}=w.data.data;Pe(M);const K=(t&&t!=="all"?u.filter(C=>String(C.section||"")===String(t)):u).map((C,be)=>{const fe={_id:C.studentId,studentId:C.studentCode||C.studentId,user:{fullName:C.name,firstName:C.name},currentEnrollment:{rollNumber:C.rollNumber,section:C.section}},ve={};C.subjectMarks&&Object.keys(C.subjectMarks).forEach(mt=>{const Ce=C.subjectMarks[mt],Ue=Ce!==null&&typeof Ce=="object"?Ce.marksObtained:Ce,St=Ce!==null&&typeof Ce=="object"&&Ce.grade||Tt(Ue);ve[mt]={marksObtained:Ue!=null&&typeof Ue!="object"?Ue:"",grade:St||""}});const Ne=C.isPassed!==void 0?C.isPassed:C.grade!=="F"&&!C.isIncomplete,kt=C.gpa||(Ne&&C.percentage>=33?C.percentage>=80?"5.00":C.percentage>=70?"4.00":C.percentage>=60?"3.50":C.percentage>=50?"3.00":C.percentage>=40?"2.00":"1.00":"0.00");return{student:fe,studentMarksObj:ve,totalObtained:C.totalObtained,totalFullMarks:C.totalMaxMarks,percentage:C.percentage,overallGrade:C.grade,gpa:kt,isPassed:Ne,subjectsCountWithMarks:Object.keys(ve).length,rankNum:C.rank||be+1,rankText:Pn(C.rank||be+1),roll:Ve(C.rollNumber)}});ts(K);return}}const v=((c=(o=(await B.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:o.data)==null?void 0:c.marks)||[];let S=[];if(n)try{S=((N=(l=(await B.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:l.data)==null?void 0:N.subjects)||[]}catch(w){console.warn("Subject fetch warning:",w)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const w=a.selectedSubjects.map(u=>String(typeof u=="object"?u._id:u));S=S.filter(u=>w.includes(String(u._id)))}let L=S.filter(w=>v.some(u=>{var $,K;const M=typeof u.subject=="object"?(($=u.subject)==null?void 0:$._id)||((K=u.subject)==null?void 0:K.id):u.subject;return String(M)===String(w._id)&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""}));if(L.length===0&&v.length>0){const w={};v.forEach(u=>{var $,K;const M=typeof u.subject=="object"?(($=u.subject)==null?void 0:$._id)||((K=u.subject)==null?void 0:K.id):u.subject;if(M&&u.marksObtained!==null&&u.marksObtained!==void 0&&u.marksObtained!==""){const C=typeof u.subject=="object"?u.subject.name||u.subject.code:"বিষয়",be=typeof u.subject=="object"?u.subject.code:"",fe=typeof u.subject=="object"?u.subject.totalMarks||u.totalMarks||100:u.totalMarks||100;w[String(M)]={_id:String(M),name:C,code:be,totalMarks:Number(fe)||100}}}),L=Object.values(w)}L.length===0&&S.length>0&&(L=S),Pe(L);const D=L.reduce((w,u)=>w+(Number(u.totalMarks)||100),0);let le=[];if(n)try{const w={classLevel:n,limit:300};t&&t!=="all"&&(w.section=t),le=((m=(await B.get("/students",{params:w})).data)==null?void 0:m.data)||[]}catch(w){console.warn("Students fetch warning:",w)}if(le.length===0){const w={};v.forEach(u=>{u.student&&typeof u.student=="object"&&u.student._id&&(w[u.student._id]=u.student)}),le=Object.values(w)}const oe={};v.forEach(w=>{var C,be,fe,ve;const u=typeof w.student=="object"?((C=w.student)==null?void 0:C._id)||((be=w.student)==null?void 0:be.id):w.student,M=typeof w.subject=="object"?((fe=w.subject)==null?void 0:fe._id)||((ve=w.subject)==null?void 0:ve.id):w.subject;if(!u||!M)return;const $=String(u),K=String(M);oe[$]||(oe[$]={}),oe[$][K]={marksObtained:w.marksObtained,grade:w.grade}});const Se=le.map(w=>{var kt;const u=oe[w._id]||{};let M=0,$=0,K=0;L.forEach(mt=>{const Ce=u[mt._id];if(Ce&&Ce.marksObtained!==null&&Ce.marksObtained!==void 0&&Ce.marksObtained!==""){const Ue=Number(Ce.marksObtained);M+=Ue,$+=1;const St=Number(mt.totalMarks)||100;Ue<St*.33&&(K+=1)}});const C=D>0?Number((M/D*100).toFixed(1)):0,be=L.length>0&&$>0&&$<L.length,fe=$>0&&K===0&&!be,ve=fe?Tt(C):K>0?"F":be?Tt(C):$>0?"F":"—";let Ne="—";return $>0&&(!fe||C<33?Ne="0.00":C>=80?Ne="5.00":C>=70?Ne="4.00":C>=60?Ne="3.50":C>=50?Ne="3.00":C>=40?Ne="2.00":Ne="1.00"),{student:w,studentMarksObj:u,totalObtained:M,totalFullMarks:D,subjectsCountWithMarks:$,failedCount:K,isIncomplete:be,percentage:C,isPassed:fe,overallGrade:ve,gpa:Ne,roll:Ve(((kt=w.currentEnrollment)==null?void 0:kt.rollNumber)||w.roll)}});Se.sort((w,u)=>w.subjectsCountWithMarks===0&&u.subjectsCountWithMarks===0?w.roll-u.roll:w.subjectsCountWithMarks===0?1:u.subjectsCountWithMarks===0||w.failedCount===0&&u.failedCount>0?-1:w.failedCount>0&&u.failedCount===0?1:u.totalObtained!==w.totalObtained?u.totalObtained-w.totalObtained:w.roll-u.roll);let _e=1,re=null,ge=0;const Be=Se.map(w=>{if(w.subjectsCountWithMarks===0)return{...w,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};ge+=1,re!==null&&w.totalObtained===re||(_e=ge,re=w.totalObtained);const u=_e,M=Se.filter(K=>K.subjectsCountWithMarks>0&&K.totalObtained===w.totalObtained).length>1;let $="";return u===1?$=M?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":u===2?$=M?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":u===3?$=M?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":u===4?$=M?"৪র্থ (যৌথ)":"৪র্থ":u===5?$=M?"৫ম (যৌথ)":"৫ম":u===6?$=M?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":u===7?$=M?"৭ম (যৌথ)":"৭ম":u===8?$=M?"৮ম (যৌথ)":"৮ম":u===9?$=M?"৯ম (যৌথ)":"৯ম":u===10?$=M?"১০ম (যৌথ)":"১০ম":$=M?`${u}তম (যৌথ)`:`${u}তম`,w.failedCount>0?$+=" (অনুত্তীর্ণ)":w.isIncomplete&&($+=" (অসম্পূর্ণ)"),{...w,rankNum:u,rankText:$}});ts(Be)}catch(x){console.error("Error loading merit list:",x);const v=((h=(j=x.response)==null?void 0:j.data)==null?void 0:h.message)||x.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";W({type:"error",message:v})}finally{Ut(!1)}},us=async(t,s="all")=>{var a,n;if(t){me(!0);try{const i={classLevel:t};s&&s!=="all"&&(i.section=s);const o=await B.get("/exams/annual-rankings",{params:i});o.data.success&&Ae(o.data.data)}catch(i){console.error("Failed to load annual rankings",i),W({type:"error",message:((n=(a=i.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{me(!1)}}},on=()=>{var n,i,o;if(!E||!E.rankings||E.rankings.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=E.classLevel)==null?void 0:n.name)||""}</title>
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
      ${os({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((i=E.classLevel)==null?void 0:i.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((o=E.classLevel)==null?void 0:o.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${E.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${E.rankings.map((c,l)=>`
            <tr>
              <td class="text-center font-bold" style="color: ${l===0?"#b45309":l===1?"#0369a1":l===2?"#b45309":"#0f172a"};">${c.rankText}</td>
              <td class="text-center font-bold">${c.rollNumber||"—"}</td>
              <td class="font-bold">${c.name}</td>
              <td class="text-center">${c.studentCode}</td>
              <td class="text-center">${c.term1Obtained} / ${c.term1Max}</td>
              <td class="text-center">${c.term2Obtained} / ${c.term2Max}</td>
              <td class="text-center">${c.term3Obtained} / ${c.term3Max}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${c.grandTotalObtained} / ${c.grandTotalMaxMarks}</td>
              <td class="text-center font-bold">${c.overallPercentage}%</td>
              <td class="text-center font-bold">${c.overallGrade}</td>
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
    `;t.document.open(),t.document.write(a),t.document.close()},ns=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},bs=async(t=Je,s=ct,a=Ot,n=!1)=>{var i,o;He(!0);try{const c={};t&&t!=="all"&&(c.stream=t),s&&s!=="all"&&(c.exam=s),a&&a!=="all"&&(c.classLevel=a);const l=await B.get("/exams/routines",{params:c});l.data.success&&ke(l.data.data.routines||[])}catch(c){console.error("Failed to load routines",c),n&&W({type:"error",message:((o=(i=c.response)==null?void 0:i.data)==null?void 0:o.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{He(!1)}},ys=async(t=!1,s=null)=>{He(!0);try{const a={},n=s||Mt;pt&&n&&(a.studentId=n);const i=await B.get("/exams/student-routine",{params:a});i.data.success&&(Xe(i.data.data),ke(i.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{He(!1)}},Ps=(t=null)=>{var a,n,i,o,c,l;const s=(t==null?void 0:t.classLevel)||((a=f==null?void 0:f.classLevel)==null?void 0:a._id)||((n=Z[0])==null?void 0:n._id)||"";s&&gs(s),t?(hs(t._id),qe({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(hs(null),qe({title:f?`${f.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(f==null?void 0:f._id)||((i=ze[0])==null?void 0:i._id)||"",examName:(f==null?void 0:f.name)||((o=ze[0])==null?void 0:o.name)||"",classLevel:s,className:((c=f==null?void 0:f.classLevel)==null?void 0:c.name)||((l=Z[0])==null?void 0:l.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),Jt(!0)},dn=()=>{if(!U||U.length===0){W({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=U.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));qe(s=>({...s,schedule:t})),W({type:"success",message:`${U.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},cn=async t=>{var s,a;if(t&&t.preventDefault(),!Ge.title.trim()){W({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}xs(!0);try{const n={...Ge,_id:as},i=await B.post("/exams/routines",n);i.data.success&&(W({type:"success",message:i.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),Jt(!1),bs())}catch(n){console.error("Failed to save routine",n),W({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{xs(!1)}},pn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await B.delete(`/exams/routines/${t}`)).data.success&&(W({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),ke(i=>i.filter(o=>o._id!==t)))}catch(n){console.error("Failed to delete routine",n),W({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},mn=()=>{qe(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},ea=t=>{qe(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},ne=(t,s,a)=>{qe(n=>{const i=[...n.schedule],o={...i[t],[s]:a};if(s==="date"&&(o.day=ns(a)),s==="subject"){const c=U&&U.find(l=>l._id===a)||se.find(l=>l._id===a);c?(o.subject=c._id,o.subjectName=c.name,o.totalMarks=Number(c.totalMarks)||100):(o.subject=a,o.subjectName=a)}return i[t]=o,{...n,schedule:i}})},xn=t=>{if(!t||!t.schedule||t.schedule.length===0){W({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),i=`
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
          ${t.schedule.map((o,c)=>`
            <tr>
              <td class="text-center font-bold" style="color: #0f766e;">${Ke(c+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${es(o.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${o.day||ns(o.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${o.subjectName||o.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${Ke(o.totalMarks||100)}</td>
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
    `;s.document.open(),s.document.write(i),s.document.close()},hn=(t=Ie,s=Ee)=>{var h;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(f==null?void 0:f.name)||"পরীক্ষা",i=((h=f==null?void 0:f.classLevel)==null?void 0:h.name)||"সকল শ্রেণি",o=it==="all"?"সকল সেকশন":`সেকশন ${it}`,c=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),l=t==="landscape";let N="";je.forEach((x,v)=>{var re,ge,Be,w;const S=x.student,L=((re=S.currentEnrollment)==null?void 0:re.rollNumber)||S.roll||"—",D=((ge=S.user)==null?void 0:ge.fullName)||`${((Be=S.user)==null?void 0:Be.firstName)||""} ${((w=S.user)==null?void 0:w.lastName)||""}`.trim()||S.studentId||"—",le=S.studentId||"—",oe=x.rankNum===1?"#fef3c7":x.rankNum===2?"#f1f5f9":x.rankNum===3?"#ffedd5":"transparent",Se=x.rankNum===1?"🥇 ":x.rankNum===2?"🥈 ":x.rankNum===3?"🥉 ":"",_e=xe.map(u=>{var fe,ve;const M=(ve=(fe=x.studentMarksObj)==null?void 0:fe[String(u._id)])==null?void 0:ve.marksObtained,$=M!==null&&typeof M=="object"?M.marksObtained??"":M??"",K=$!=null&&$!=="",C=Number(u.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${K&&Number($)<C*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${K?$:"—"}</td>`}).join("");N+=`
        <tr style="background-color: ${oe};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${Ke(v+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${D}</div>
            <div class="student-meta-text">আইডি: ${le}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${L}</td>
          ${_e}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${x.subjectsCountWithMarks===0?"—":`${x.totalObtained} / ${x.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${Se}${x.rankText||"—"}</td>
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
      `});const m=xe.map(x=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${x.name}</div>
        <div class="sub-mark-box">(${x.totalMarks||100})</div>
      </th>
    `).join(""),j=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${rs(t)}
      <style id="dynamic-page-style">
        @page { 
          size: A4 ${t}; 
          margin: ${l?"6mm 8mm":"8mm 10mm"} !important; 
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
          width: ${l?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: ${l?"281mm":"194mm"};
          max-width: 100%;
          height: calc(${l?"210mm":"297mm"} - ${l?"12mm":"16mm"});
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
          ${os({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${i} | <strong>সেকশন:</strong> ${o}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${je.length} জন | <strong>তারিখ:</strong> ${c}`})}
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
    </html>`;a.document.open(),a.document.write(j),a.document.close()},gn=(t,s)=>{ut(a=>({...a,[t]:s}))},Tt=(t,s=100)=>{const a=Kt(t),n=parseFloat(a);if(isNaN(n))return"—";const i=Number(s)||100,o=i>0?n/i*100:n;return o>=80?"A+":o>=70?"A":o>=60?"A-":o>=50?"B":o>=40?"C":o>=33?"D":"F"},is=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",fn=async()=>{const t=se.find(i=>i._id===ue),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(ye).map(i=>{const o=ye[i],c=Kt(o);return{studentId:i,marksObtained:c===""?null:parseFloat(c)}});if(a.length===0){W({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(i=>i.marksObtained!==null&&i.marksObtained>s)){W({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}bt(!0);try{const i={exam:f._id,subject:ue,marks:a};(await B.post("/exams/marks",i)).data.success&&W({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(i){console.error("Failed to save marks",i),W({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{bt(!1)}},un=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},bn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},Ds=()=>{at(!1),gt(null),te({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),Fe([])},ta=(t=!1)=>{var n,i,o,c;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(I==null?void 0:I.userType)||((i=(n=I==null?void 0:I.permissions)==null?void 0:n.includes)==null?void 0:i.call(n,"academic.manage"))||((c=(o=I==null?void 0:I.permissions)==null?void 0:o.includes)==null?void 0:c.call(o,"exam.manage")),a=$e.filter(l=>{if(t&&f){if(l.exam&&l.exam!==f._id)return!1}else if(ct!=="all"&&l.exam!==ct)return!1;return!(Je!=="all"&&l.stream!==Je||Ot!=="all"&&l.classLevel!==Ot)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{Y("marks"),Bt(null)},title:"ফিরে যান",children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Et,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&f?`পরীক্ষার রুটিন — ${f.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:ce?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{ce?ys(!0):bs(Je,ct,Ot,!0)},disabled:Oe,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Os,{size:14,className:Oe?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ps(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি"})]})]})]}),!ce&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${Je==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("all"),children:["সকল বিভাগ (",$e.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Je==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("noorani"),children:["📖 নূরানী বিভাগ (",$e.filter(l=>l.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Je==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("hifz"),children:["🕌 হিফজ বিভাগ (",$e.filter(l=>l.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${Je==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>wt("kitab"),children:["📚 কিতাব বিভাগ (",$e.filter(l=>l.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:ct,onChange:l=>ms(l.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),ze.map(l=>e.jsx("option",{value:l._id,children:l.name},l._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:Ot,onChange:l=>ws(l.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),Z.map(l=>e.jsx("option",{value:l._id,children:l.name},l._id))]})]})]})]})}),Oe?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Et,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:ce?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Ps(),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cs,{size:16})," ",e.jsx("span",{children:"নতুন রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(l=>{const N=l.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:l.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:N.bg,color:N.color,border:`1px solid ${N.border}`},children:N.label}),l.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",l.className]}),l.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:l.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:l.status==="published"?"#dcfce7":"#f1f5f9",color:l.status==="published"?"#166534":"#64748b"},children:l.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:l.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>xn(l),style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(et,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Ps(l),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Hs,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>pn(l._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(As,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),l.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",l.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(l.schedule)&&l.schedule.length>0?l.schedule.map((m,j)=>e.jsxs("tr",{style:{background:j%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:Ke(j+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Et,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:es(m.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:m.day||ns(m.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:m.subjectName||m.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[Ke(m.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ha,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ga,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})})]},j)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(l.schedule)&&l.schedule.length>0?l.schedule.map((m,j)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:Ke(j+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:es(m.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",m.day||ns(m.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Ga,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:m.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Is,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:m.subjectName||m.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[Ke(m.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ha,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",m.startTime||"সকাল ০৯:৩০"," — ",m.endTime||"দুপুর ১২:৩০"]})]})]},j)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]},l._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[Te&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:Te.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[Te.type==="success"?e.jsx(Nn,{size:18}):e.jsx(Ns,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:Te.message})]}),f?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:xt}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",f.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((sa=f.classLevel)==null?void 0:sa.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Bt(null),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:ce?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",Le," • ",f.name," • ",((aa=f.classLevel)==null?void 0:aa.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{ce||_==="student_result"?Bs():_==="subject_result"?Ks():_==="merit"||_==="merit_list"?Q(!0):Fs()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16})," ",ce?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Ln,{selectedRoles:Ee,onChange:t=>{st(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(_n,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${f.name}`,metaLeft:`শ্রেণি: ${((na=f.classLevel)==null?void 0:na.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),ce&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>Y("student_result"),children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{Y("merit"),fs(it)},children:[e.jsx(Xt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{Y("routine"),ys()},children:[e.jsx(Et,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!ce&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>Y("marks"),children:[e.jsx(Hs,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>Y("student_result"),children:[e.jsx(ls,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{Y("subject_result"),!g&&se.length>0&&(y(se[0]._id),zs(se[0]._id,V))},children:[e.jsx(Is,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{Y("merit"),je.length===0&&fs(it)},children:[e.jsx(Xt,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{Y("routine"),ms((f==null?void 0:f._id)||"all"),bs("all",(f==null?void 0:f._id)||"all","all")},children:[e.jsx(Et,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>Y("seat_plan"),children:[e.jsx(Gt,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${_==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>Y("admit_card"),children:[e.jsx(Ct,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),_==="marks"&&e.jsxs(e.Fragment,{children:[!ce&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:ue,onChange:t=>{_t(t.target.value),nt([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),se.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:A,onChange:t=>{Lt(t.target.value),nt([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:rn,disabled:ot||!ue||!A||se.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ws,{size:16})," লোড করুন"]})]}),se.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ns,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),ot?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ce?pe&&((ia=pe.results)==null?void 0:ia.length)>0?Xs(pe):qt.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(I==null?void 0:I.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:qt.map(t=>{var i,o,c;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=Tt(a);return e.jsxs("tr",{children:[(I==null?void 0:I.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(i=t.student)==null?void 0:i.firstName," ",(o=t.student)==null?void 0:o.lastName]})}),e.jsx("td",{className:"font-semibold",children:(c=t.subject)==null?void 0:c.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Qe.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Qe.map((t,s)=>{var m,j,h,x;const a=t._id,n=((m=t.currentEnrollment)==null?void 0:m.rollNumber)||"—",i=((j=t.user)==null?void 0:j.fullName)||`${((h=t.user)==null?void 0:h.firstName)||""} ${((x=t.user)==null?void 0:x.lastName)||""}`.trim();if(ue==="all"){const v=Array.isArray(ye[a])?ye[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ke(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:i}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:v.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:v.map((S,L)=>{var D;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[S.subjectName,": ",typeof S.marksObtained=="object"?(D=S.marksObtained)==null?void 0:D.marksObtained:S.marksObtained," (",S.grade,")"]},L)})})})]},a)}const o=se.find(v=>v._id===ue),c=Number(o==null?void 0:o.totalMarks)||100,l=ye[a]??"",N=Tt(l,c);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ke(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:i}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:l!==""&&Number(Kt(l))>c?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${c}`,value:l,onChange:v=>{const S=v.target.value;/^[0-9০-৯.]*$/.test(S)&&gn(a,S)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(N)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:N})})]},a)})})]}),ue!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Fs,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:fn,disabled:Me,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Mn,{size:16})," ",Me?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),_==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!ce&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:dt,onChange:t=>Nt(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((la=pe==null?void 0:pe.student)==null?void 0:la._id)||"",onChange:t=>{const s=t.target.value;s&&(he(s),Es(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),Qt.filter(t=>{var a,n,i,o,c,l;if(dt==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((i=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:i.name)||((c=(o=t.currentEnrollment)==null?void 0:o.section)==null?void 0:c._id):((l=t.currentEnrollment)==null?void 0:l.section)||t.section;return String(s||"")===String(dt)}).map(t=>{var i,o,c,l;const s=((i=t.user)==null?void 0:i.fullName)||`${((o=t.user)==null?void 0:o.firstName)||""} ${((c=t.user)==null?void 0:c.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((l=t.currentEnrollment)==null?void 0:l.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:Wt,onChange:t=>he(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Es()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Es(),disabled:Vt||!Wt.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Ws,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),pe&&((ra=pe.results)==null?void 0:ra.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Bs,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Vt?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):pe?((oa=pe.results)==null?void 0:oa.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):Xs(pe):e.jsxs("div",{className:"card empty-state",children:[e.jsx(ls,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),_==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:g,onChange:t=>{const s=t.target.value;y(s),s&&zs(s,V)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),se.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:V,onChange:t=>{const s=t.target.value;P(s),g&&zs(g,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:q,onChange:t=>ie(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=de.filter(s=>{var c,l,N,m,j,h,x,v,S,L;if(!q.trim())return!0;const a=Kt(q.trim().toLowerCase()),n=(((c=s.student)==null?void 0:c.fullName)||((N=(l=s.student)==null?void 0:l.user)==null?void 0:N.fullName)||`${((j=(m=s.student)==null?void 0:m.user)==null?void 0:j.firstName)||""} ${((x=(h=s.student)==null?void 0:h.user)==null?void 0:x.lastName)||""}`).toLowerCase(),i=String(((S=(v=s.student)==null?void 0:v.currentEnrollment)==null?void 0:S.rollNumber)||"").toLowerCase(),o=String(((L=s.student)==null?void 0:L.studentId)||"").toLowerCase();return n.includes(q.toLowerCase())||i.includes(a)||o.includes(a)});Ks(t)},disabled:we||de.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),we?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):g?(()=>{const t=se.find(h=>h._id===g),s=Number(t==null?void 0:t.totalMarks)||100,a=de.filter(h=>{var D,le,oe,Se,_e,re,ge,Be,w,u;if(!q.trim())return!0;const x=Kt(q.trim().toLowerCase()),v=(((D=h.student)==null?void 0:D.fullName)||((oe=(le=h.student)==null?void 0:le.user)==null?void 0:oe.fullName)||`${((_e=(Se=h.student)==null?void 0:Se.user)==null?void 0:_e.firstName)||""} ${((ge=(re=h.student)==null?void 0:re.user)==null?void 0:ge.lastName)||""}`).toLowerCase(),S=String(((w=(Be=h.student)==null?void 0:Be.currentEnrollment)==null?void 0:w.rollNumber)||"").toLowerCase(),L=String(((u=h.student)==null?void 0:u.studentId)||"").toLowerCase();return v.includes(q.toLowerCase())||S.includes(x)||L.includes(x)}),n=a.length,i=a.map(h=>Number(h.marksObtained)||0),o=i.length>0?Math.max(...i):0,c=i.length>0?(i.reduce((h,x)=>h+x,0)/i.length).toFixed(1):0,l=a.filter(h=>{const x=Number(h.marksObtained)||0;return(s>0?x/s*100:x)>=33}).length,N=n>0?Math.round(l/n*100):0,m=a.map(h=>{var x;return String(((x=h.student)==null?void 0:x._id)||h._id)}),j=m.length>0&&m.every(h=>ee.has(h));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[o," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:c})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[l," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[N,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:j,onChange:()=>Js(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",ee.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ns,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:j,onChange:()=>Js(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(h=>{var re,ge,Be,w,u,M,$,K,C,be,fe,ve,Ne;const x=String(((re=h.student)==null?void 0:re._id)||h._id),v=ee.has(x),S=Number(h.marksObtained)||0,L=s>0?Math.round(S/s*100):S,D=Tt(S,s),le=L>=33,oe=((ge=h.student)==null?void 0:ge.fullName)||((w=(Be=h.student)==null?void 0:Be.user)==null?void 0:w.fullName)||`${((M=(u=h.student)==null?void 0:u.user)==null?void 0:M.firstName)||""} ${((K=($=h.student)==null?void 0:$.user)==null?void 0:K.lastName)||""}`.trim()||"—",Se=((be=(C=h.student)==null?void 0:C.currentEnrollment)==null?void 0:be.rollNumber)||"—",_e=((fe=h.student)==null?void 0:fe.studentId)||"—";return e.jsxs("tr",{style:{background:v?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:v,onChange:()=>ln(x),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:Se}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:oe}),((Ne=(ve=h.student)==null?void 0:ve.currentEnrollment)==null?void 0:Ne.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",h.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:_e}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[S," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[L,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(D)}`,style:{minWidth:"40px",justifyContent:"center"},children:D})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${le?"badge-active":"badge-danger"}`,children:le?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},x)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(Is,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),_==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:it,onChange:t=>{const s=t.target.value;vt(s),fs(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),vs.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>fs(it),disabled:O,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:O?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!ce&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>F("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(wn,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Q(!0),disabled:O||je.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(et,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[je.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[je.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[je.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((pa=(ca=(da=je.find(t=>t.rankNum===1))==null?void 0:da.student)==null?void 0:ca.user)==null?void 0:pa.fullName)||((ha=(xa=(ma=je.find(t=>t.rankNum===1))==null?void 0:ma.student)==null?void 0:xa.user)==null?void 0:ha.firstName)||"—"}),je.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(ga=je.find(t=>t.rankNum===1))==null?void 0:ga.totalObtained," (",(fa=je.find(t=>t.rankNum===1))==null?void 0:fa.percentage,"%)"]})]})]}),O?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):je.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Xt,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+xe.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),xe.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:je.map((t,s)=>{var N,m,j,h,x,v,S;const a=t.student,n=((N=a.currentEnrollment)==null?void 0:N.rollNumber)||"—",i=((m=a.user)==null?void 0:m.fullName)||`${((j=a.user)==null?void 0:j.firstName)||""} ${((h=a.user)==null?void 0:h.lastName)||""}`.trim(),o=t.rankNum===1,c=t.rankNum===2,l=t.rankNum===3;return e.jsxs("tr",{style:{background:o?"rgba(245, 158, 11, 0.08)":c?"rgba(100, 116, 139, 0.05)":l?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:Ke(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:i}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((v=(x=a.currentEnrollment)==null?void 0:x.section)==null?void 0:v.name)||(typeof((S=a.currentEnrollment)==null?void 0:S.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),xe.map(L=>{var ge;const D=(ge=t.studentMarksObj)==null?void 0:ge[L._id],le=D==null?void 0:D.marksObtained,oe=le!==null&&typeof le=="object"?le.marksObtained??"":le??"",Se=oe!=null&&oe!=="",_e=Number(L.totalMarks)||100,re=Se&&Number(oe)<_e*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:re?"#dc2626":Se?"#0f172a":"var(--text-muted)",background:re?"rgba(239, 68, 68, 0.06)":"transparent"},children:Se?oe:"—"},L._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:o||c||l?"0.92rem":"0.85rem",color:o?"#b45309":c?"#475569":l?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:o?"#fef3c7":c?"#f1f5f9":l?"#ffedd5":"transparent",border:o?"1px solid #fde68a":c?"1px solid #cbd5e1":l?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),_==="routine"&&ta(!0),_==="seat_plan"&&e.jsx(Ya,{selectedExam:f,classes:Z,user:I}),_==="admit_card"&&e.jsx(qa,{exams:ze,classes:Z}),e.jsx("div",{className:"print-only",children:e.jsx(Wn,{roles:Ee,style:{marginTop:"40px"}})})]}):_==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Y("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Xt,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:on,disabled:H||!E||((ua=E.rankings)==null?void 0:ua.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(et,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[ce?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),pt&&rt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:k,onChange:t=>{const s=t.target.value;b(s),us(s,T)},children:rt.map(t=>{var i,o,c,l,N,m,j;const s=((o=(i=t.currentEnrollment)==null?void 0:i.classLevel)==null?void 0:o._id)||((c=t.currentEnrollment)==null?void 0:c.classLevel),a=((N=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:N.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"শ্রেণি",n=((j=t.user)==null?void 0:j.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((ba=Z.find(t=>String(t._id)===String(k)))==null?void 0:ba.name)||(Rt==null?void 0:Rt.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:k,onChange:t=>{const s=t.target.value;b(s),us(s,T)},children:Z.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:T,onChange:t=>{const s=t.target.value;ae(s),us(k,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),vs.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>us(k,T),disabled:H,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Os,{size:14,className:H?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),E&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((ya=E.rankings)==null?void 0:ya.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((va=(ja=E.rankings)==null?void 0:ja.find(t=>t.rank===1))==null?void 0:va.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((wa=(Na=E.rankings)==null?void 0:Na.find(t=>t.rank===1))==null?void 0:wa.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((Sa=(ka=E.termExams)==null?void 0:ka.term1)==null?void 0:Sa.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((za=(Ca=E.termExams)==null?void 0:Ca.term2)==null?void 0:za.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((Aa=(Ia=E.termExams)==null?void 0:Ia.term3)==null?void 0:Aa.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:H?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!E||(($a=E.rankings)==null?void 0:$a.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(Xt,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:E.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${is(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):_==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Y("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Gt,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ya,{selectedExam:null,classes:Z,user:I})]}):_==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>Y("marks"),children:e.jsx(js,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ct,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(qa,{exams:ze,classes:Z})]}):_==="routine"?ta(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",children:Ss?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":pt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${Le} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{Y("routine"),ce?ys():bs()},children:[e.jsx(Et,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"📅 পরীক্ষার রুটিন"})]}),!ce&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>Y("seat_plan"),children:[e.jsx(Gt,{size:16,style:{color:"#059669"}}),e.jsx("span",{children:"🪑 সিট প্ল্যান"})]}),!ce&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>Y("admit_card"),children:[e.jsx(Ct,{size:16,style:{color:"#0284c7"}}),e.jsx("span",{children:"🎫 প্রবেশপত্র (Admit Card)"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{Y("annual_combined");let t=k;t||(ce&&(Rt!=null&&Rt._id)?t=Rt._id:Z.length>0&&(t=Z[0]._id)),t&&(b(t),us(t,T))},children:[e.jsx(Xt,{size:16,style:{color:"#d97706"}}),e.jsx("span",{children:"🏆 বার্ষিক সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(I==null?void 0:I.userType)&&e.jsxs("button",{className:"btn btn-primary",onClick:()=>at(!0),children:[e.jsx(cs,{size:16})," নতুন পরীক্ষা তৈরি"]})]})]}),pt&&rt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ls,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Mt,onChange:t=>Ka(t.target.value),children:rt.map(t=>{var i,o,c,l,N,m,j;const s=((i=t.user)==null?void 0:i.fullName)||`${((o=t.user)==null?void 0:o.firstName)||""} ${((c=t.user)==null?void 0:c.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((N=(l=t.currentEnrollment)==null?void 0:l.classLevel)==null?void 0:N.name)||((m=t.currentEnrollment)==null?void 0:m.className)||"",n=(j=t.currentEnrollment)!=null&&j.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),pt&&rt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ls,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((_a=rt[0].user)==null?void 0:_a.fullName)||`${((La=rt[0].user)==null?void 0:La.firstName)||""} ${((Wa=rt[0].user)==null?void 0:Wa.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Ra=(Ma=rt[0].currentEnrollment)==null?void 0:Ma.classLevel)==null?void 0:Ra.name)||"শ্রেণি",(Ta=rt[0].currentEnrollment)!=null&&Ta.rollNumber?` • রোল: ${rt[0].currentEnrollment.rollNumber}`:""]})]}),Ss&&Rt&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(ls,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Rt.name||"শ্রেণি"})]}),We?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ze.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:ze.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=Us.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${bn(t.status)}`,children:un(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?es(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",es(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px"},onClick:()=>{Y("marks"),Qs(t)},children:ce?"ফলাফল দেখুন":"📝 নম্বর এন্ট্রি"}),!ce&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"4px"},onClick:()=>{Y("merit"),Qs(t),fs("all",t)},children:[e.jsx(Xt,{size:14,style:{color:"#d97706"}})," 🏆 মেধা তালিকা"]}),["super_admin","admin","principal","teacher"].includes(I==null?void 0:I.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>tn(t),title:"সম্পাদনা",children:e.jsx(Hs,{size:16})}),["super_admin","admin","principal"].includes(I==null?void 0:I.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>sn(t._id),title:"মুছে ফেলুন",children:e.jsx(As,{size:16})})]})]},t._id)})}),It&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Ds()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Ze?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:Ds,type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:an,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:R.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",te(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),R.classLevel&&gs(R.classLevel)},children:Fn.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),R.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:R.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};te(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),R.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:R.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};te(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),R.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:R.month,onChange:t=>{const s=t.target.value,a=Us.find(i=>i.value===s),n=a?a.label.split(" ")[0]:s;te(i=>({...i,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:Us.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:R.name,onChange:Cs,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:R.classLevel,onChange:t=>{const s=t.target.value;te(a=>({...a,classLevel:s,selectedSubjects:[]})),gs(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),Z.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),R.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:R.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",R.selectedSubjects.length,"/৪ টি"]})]}),R.classLevel?U.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:U.map(t=>{const s=R.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=R.selectedSubjects;if(s)te(n=>({...n,selectedSubjects:a.filter(i=>i!==t._id)}));else{if(a.length>=4){W({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}te(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:R.startDate,onChange:Cs})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:R.endDate,onChange:Cs})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:R.status,onChange:Cs,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Ds,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:At,children:At?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),ks&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Et,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:as?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>Jt(!1),title:"বন্ধ করুন",children:e.jsx(kn,{size:20})})]}),e.jsxs("form",{onSubmit:cn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:Ge.title,onChange:t=>qe(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ge.stream,onChange:t=>qe(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ge.exam,onChange:t=>{const s=ze.find(a=>a._id===t.target.value);qe(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),ze.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ge.classLevel,onChange:t=>{const s=t.target.value,a=Z.find(n=>n._id===s);qe(n=>({...n,classLevel:s,className:a?a.name:""})),s&&gs(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),Z.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:Ge.status,onChange:t=>qe(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:Ge.instructions,onChange:t=>qe(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[Ke(Ge.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[U&&U.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:dn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:mn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(cs,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),Ge.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Ke(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const i=n.target.value;ne(s,"date",i),i&&ne(s,"day",ns(i))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:U&&U.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=U.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const i=n.target.value;if(i==="custom")ne(s,"subject","custom");else{const o=U.find(c=>c._id===i);o&&(ne(s,"subject",o._id),ne(s,"subjectName",o.name),ne(s,"totalMarks",Number(o.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),U.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!U.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>ne(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ne(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>ne(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>ne(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>ea(s),disabled:Ge.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(As,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:Ge.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Ke(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const i=n.target.value;ne(s,"date",i),i&&ne(s,"day",ns(i))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>ea(s),disabled:Ge.schedule.length<=1,title:"মুছুন",children:e.jsx(As,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:U&&U.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=U.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const i=n.target.value;if(i==="custom")ne(s,"subject","custom");else{const o=U.find(c=>c._id===i);o&&(ne(s,"subject",o._id),ne(s,"subjectName",o.name),ne(s,"totalMarks",Number(o.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),U.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0})}),U&&U.length>0&&(t.subject==="custom"||!U.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{ne(s,"subjectName",n.target.value),ne(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>ne(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ne(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>ne(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Jt(!1),disabled:ss,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:ss,children:ss?"সংরক্ষণ হচ্ছে...":as?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),Re&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&Q(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(et,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>Q(!1),type:"button",children:e.jsx(cs,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Dt("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:Ie==="landscape"?700:500,background:Ie==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:Ie==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:Ie==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:Ie==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Dt("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:Ie==="portrait"?700:500,background:Ie==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:Ie==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:Ie==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:Ie==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=Ee.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(Ee.length<=1)return;a=Ee.filter(n=>n!==t)}else a=[...Ee,t];st(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>Q(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Q(!1),hn(Ie,Ee)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(et,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
