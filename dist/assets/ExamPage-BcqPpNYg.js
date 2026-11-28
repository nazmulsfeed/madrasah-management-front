import{k as tn,r as i,w as sn,j as e,O as Bs,Q as Ds,Y as an,i as Fs,W as nn,d as Z,a as ln,F as Ct,U as Va,C as Lt,x as Ln,Z as Qa,_ as Mn,X as ea,E as rn,u as Rn,y as Tn,A as ks,$ as xs,b as Ms,R as Zs,G as En,l as Ja}from"./index-D0N1_HuY.js";import{g as ta,b as it,p as ns,f as ls,t as lt}from"./helpers-CljGnr5z.js";import{L as Kt}from"./layout-grid-BxRRBakz.js";import{P as rt}from"./printer-5HfsqlIS.js";import{S as on}from"./sliders-vertical-SGJg_Ea0.js";import{S as dn}from"./square-G-YjjP8J.js";import{C as Bn}from"./circle-check-eVdZo33H.js";import{L as Dn}from"./layers-D8pQLxmh.js";import{E as Fn}from"./eye-CnCa_pAb.js";import{Z as On}from"./zoom-out-BTC5HjxE.js";import{Z as Pn}from"./zoom-in-BWAgjYpW.js";import{S as cn}from"./save-Rs42J8WH.js";import{C as us}from"./circle-alert-CzZoHwbC.js";import{P as Xt}from"./plus-DBi-WIJS.js";import{T as zs}from"./trash-2-Bu_0F_ko.js";import{S as Ss}from"./constants-C6HvYUtm.js";import{g as hs,a as gs,b as fs}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as Hn}from"./MadrasahLetterhead-vYUJn2BK.js";import{P as Gn}from"./PrintSignatureRoleSelector-CocYI5-y.js";import{P as Yn}from"./PrintFooterSignatures-sQkKzpG7.js";import{T as as}from"./trophy-BYNkq6kZ.js";import{S as Vs}from"./square-pen-CyjXBKVR.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=tn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=tn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),Qs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',Js='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="%23047857" stroke="%23f59e0b" stroke-width="4"/><path d="M50,22 L65,70 L35,70 Z" fill="%23ffffff"/><circle cx="50" cy="46" r="10" fill="%23f59e0b"/><text x="50" y="86" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">AN-NUR</text></svg>';function Ka({selectedExam:m=null,classes:$=[],user:T=null}){var te;const z=i.useMemo(()=>ta(T),[T]),xe=i.useMemo(()=>Array.isArray($)?$:$&&Array.isArray($.classes)?$.classes:[],[$]),[ie,ce]=i.useState([]),[Te,L]=i.useState((m==null?void 0:m._id)||""),[Ue,Ce]=i.useState(((te=m==null?void 0:m.classLevel)==null?void 0:te._id)||(m==null?void 0:m.classLevel)||""),[ot,be]=i.useState([]),[E,he]=i.useState("all"),[$e,Qe]=i.useState("all"),[Oe,dt]=i.useState((m==null?void 0:m.academicYear)||"2026"),[It,Je]=i.useState((m==null?void 0:m.name)||"বার্ষিক পরীক্ষা - ২০২৬"),[ct,J]=i.useState(!1),[ae,H]=i.useState([]),[ve,u]=i.useState(new Set),[tt,ee]=i.useState({}),[xt,Ft]=i.useState(""),[_t,Ne]=i.useState(!0),[ht,Pe]=i.useState(!0),[jt,F]=i.useState(!0),[Xe,Ie]=i.useState(!0),[qe,Ze]=i.useState(!0),[He,Ge]=i.useState(!0),[vt,Ee]=i.useState(!0),[st,Ot]=i.useState(!0),[$t,U]=i.useState(!0),[re,Be]=i.useState(!0),[Nt,Ae]=i.useState(!0),[At,x]=i.useState(!0),[A,I]=i.useState(10),[G,M]=i.useState(!0),[at,We]=i.useState("10"),[Mt,Wt]=i.useState("theme-classic"),[Rt,Le]=i.useState("logo-left"),[oe,ne]=i.useState(!1),[pe,Pt]=i.useState(()=>{try{const c=parseInt(localStorage.getItem("seat_plan_font_scale"),10);if(!isNaN(c)&&c>=80&&c<=140)return c}catch{}return 100});i.useEffect(()=>{try{localStorage.setItem("seat_plan_font_scale",String(pe))}catch{}},[pe]);const[Tt,Ht]=i.useState("১০১"),[es,Ve]=i.useState(`1-20: 101
21-40: 102
41-60: 103`),[Gt,gt]=i.useState(!1);i.useEffect(()=>{(async()=>{var k,N,q,P,W;try{const V=await Z.get("/exams",{params:{limit:100}}),X=((N=(k=V.data)==null?void 0:k.data)==null?void 0:N.exams)||((q=V.data)==null?void 0:q.exams)||((P=V.data)==null?void 0:P.data)||[],le=Array.isArray(X)?X:[];if(ce(le),!Te&&le.length>0&&(L(le[0]._id),Je(le[0].name),le[0].academicYear&&dt(le[0].academicYear),le[0].classLevel)){const fe=((W=le[0].classLevel)==null?void 0:W._id)||le[0].classLevel;Ce(fe)}}catch(V){console.error("Failed to fetch exams for seat plan:",V),ce([])}})()},[]),i.useEffect(()=>{var c;if(Te&&Array.isArray(ie)&&ie.length>0){const k=ie.find(N=>N._id===Te);if(k&&(Je(k.name||"বার্ষিক পরীক্ষা - ২০২৬"),k.academicYear&&dt(k.academicYear),k.classLevel)){const N=((c=k.classLevel)==null?void 0:c._id)||k.classLevel;Ce(N)}}},[Te,ie]),i.useEffect(()=>{if(!Ue){be([]);return}(async()=>{var k,N,q,P;try{const W=await Z.get(`/students/sections?classLevel=${Ue}`),V=((N=(k=W.data)==null?void 0:k.data)==null?void 0:N.sections)||((q=W.data)==null?void 0:q.sections)||((P=W.data)==null?void 0:P.data)||[];be(Array.isArray(V)?V:[])}catch(W){console.warn("Failed to load sections:",W),be([])}})()},[Ue]);const Yt=async()=>{var c,k,N,q;J(!0);try{const P={limit:500};Ue&&(P.classLevel=Ue),E&&E!=="all"&&(P.section=E);const W=await Z.get("/students",{params:P}),V=((k=(c=W.data)==null?void 0:c.data)==null?void 0:k.students)||((N=W.data)==null?void 0:N.students)||((q=W.data)==null?void 0:q.data)||[];let X=Array.isArray(V)?V:[];$e&&$e!=="all"&&(X=X.filter(ge=>{var Ke;return(ge.department||((Ke=ge.currentEnrollment)==null?void 0:Ke.department)||"").toLowerCase().includes($e.toLowerCase())})),X.sort((ge,me)=>{var qt,ut;const Ke=it(((qt=ge.currentEnrollment)==null?void 0:qt.rollNumber)||ge.rollNumber||ge.roll),wt=it(((ut=me.currentEnrollment)==null?void 0:ut.rollNumber)||me.rollNumber||me.roll);return Ke-wt}),H(X);const le=new Set(X.map(ge=>ge._id));u(le);const fe={};X.forEach(ge=>{fe[ge._id]=Tt||"১০১"}),ee(fe)}catch(P){console.error("Failed to load students for seat plan:",P),H([]),u(new Set)}finally{J(!1)}};i.useEffect(()=>{Ue&&Yt()},[Ue,E,$e]);const ft=()=>{ve.size===ae.length?u(new Set):u(new Set(ae.map(c=>c._id)))},is=()=>{const c=Tt.trim();c&&ee(k=>{const N={...k};return ve.forEach(q=>{N[q]=c}),N})},Ut=()=>{const c=es.split(`
`),k={...tt};c.forEach(N=>{const q=N.split(":");if(q.length===2){const P=q[0].trim(),W=q[1].trim(),V=P.match(/(\d+)\s*[-–—]\s*(\d+)/);if(V&&W){const X=parseInt(V[1],10),le=parseInt(V[2],10);ae.forEach(fe=>{var Ke;const ge=ns(((Ke=fe.currentEnrollment)==null?void 0:Ke.rollNumber)||fe.rollNumber||fe.roll||"0"),me=parseInt(ge,10);!isNaN(me)&&me>=X&&me<=le&&(k[fe._id]=W)})}}}),ee(k),gt(!1)},l=i.useMemo(()=>ae.filter(c=>{var P,W,V,X;if(!ve.has(c._id))return!1;if(!xt)return!0;const k=c.fullName||((P=c.user)==null?void 0:P.fullName)||`${((W=c.user)==null?void 0:W.firstName)||""} ${((V=c.user)==null?void 0:V.lastName)||""}`.trim()||c.name||"",N=String(((X=c.currentEnrollment)==null?void 0:X.rollNumber)||c.rollNumber||c.roll||""),q=String(c.studentId||c.admissionNumber||"");return sn([k,N,q],xt,_t)}),[ae,ve,xt,_t]),b=c=>{I(c),M(!1),We(String(c))},v=c=>{We(c);const k=parseInt(c,10);!isNaN(k)&&k>0&&k<=30&&(I(k),M(!0))},Q=i.useMemo(()=>{const c=A;let k=3,N=4;return c<=4||c<=6||c<=8?(k=2,N=Math.ceil(c/2)):c<=10?(k=2,N=5):c<=12?(k=3,N=4):c<=15?(k=3,N=5):c<=16?(k=4,N=4):(k=4,N=Math.ceil(c/4)),{cols:k,rows:N,count:c}},[A]),O=i.useMemo(()=>{const c=[],k=A;for(let N=0;N<l.length;N+=k)c.push(l.slice(N,N+k));return c},[l,A]);return e.jsxs("div",{className:"seat-plan-workspace animate-fade-in",children:[e.jsxs("div",{className:"card no-print sp-toolbar-card",children:[e.jsxs("div",{className:"sp-header-row",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,color:"#065f46",display:"flex",alignItems:"center",gap:"8px",margin:0},children:[e.jsx(Kt,{size:20,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড জেনারেটর (Exam Seat Plan Generator)"})]}),e.jsx("p",{style:{fontSize:"0.78rem",color:"#64748b",margin:"2px 0 0 0"},children:"ডাটাবেজের শিক্ষার্থী নির্বাচন করে এ৪ পেজে ব্যাচ সিট প্ল্যান তৈরি ও নিখুঁত প্রিন্ট করুন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:()=>ne(!oe),children:["🌐 ",oe?"বাংলা সংস্করণ":"English Mode"]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:Yt,disabled:ct,children:[e.jsx(Bs,{size:14,className:ct?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",style:{background:"#059669",borderColor:"#059669",fontSize:"0.8rem",fontWeight:700,padding:"7px 16px",display:"inline-flex",alignItems:"center",gap:"6px"},onClick:()=>window.print(),children:[e.jsx(rt,{size:15}),e.jsx("span",{children:"প্রিন্ট করুন (Print A4)"})]})]})]}),e.jsxs("div",{className:"sp-filters-grid",children:[e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"পরীক্ষা নির্বাচন (Exam):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Te,onChange:c=>L(c.target.value),children:[e.jsx("option",{value:"",children:"-- পরীক্ষা নির্বাচন করুন --"}),(Array.isArray(ie)?ie:[]).map(c=>{const k=c.academicYear&&!/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(c.academicYear))?c.academicYear:new Date().getFullYear();return e.jsxs("option",{value:c._id,children:[c.name," (",k,")"]},c._id)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শ্রেণি (Class Level):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:Ue,onChange:c=>Ce(c.target.value),children:[e.jsx("option",{value:"",children:"-- সকল শ্রেণি --"}),(Array.isArray(xe)?xe:[]).map(c=>e.jsx("option",{value:c._id,children:c.name},c._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"শাখা (Section):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:E,onChange:c=>he(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),(Array.isArray(ot)?ot:[]).map(c=>e.jsx("option",{value:c._id||c.name,children:c.name},c._id||c.name))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"sp-filter-lbl",children:"বিভাগ / গ্রুপ (Department):"}),e.jsxs("select",{className:"form-input",style:{fontSize:"0.8rem",padding:"6px 10px"},value:$e,onChange:c=>Qe(c.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"})]})]})]}),e.jsxs("div",{className:"sp-toggles-section",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"7px",fontSize:"0.75rem",fontWeight:700,color:"#334155"},children:[e.jsx(on,{size:13,style:{color:"#059669"}}),e.jsx("span",{children:"কার্ডে প্রদর্শিত তথ্য (ফিল্ড নির্বাচন):"})]}),e.jsx("div",{className:"sp-toggles-wrap",children:[{checked:ht,onChange:Pe,label:"কক্ষ নম্বর"},{checked:jt,onChange:F,label:"পরীক্ষার নাম"},{checked:Xe,onChange:Ie,label:"বিভাগ / গ্রুপ"},{checked:qe,onChange:Ze,label:"শিক্ষার্থীর ছবি"},{checked:He,onChange:Ge,label:"আইডি নম্বর"},{checked:vt,onChange:Ee,label:"শ্রেণি"},{checked:st,onChange:Ot,label:"শাখা"},{checked:$t,onChange:U,label:"সেশন"},{checked:re,onChange:Be,label:"বড় রোল বক্স"},{checked:Nt,onChange:Ae,label:"কাটিং দাগ (✂)"},{checked:At,onChange:x,label:"লোগো ওয়াটারমার্ক"}].map((c,k)=>e.jsxs("label",{className:`sp-toggle-pill ${c.checked?"active":""}`,children:[e.jsx("input",{type:"checkbox",checked:c.checked,onChange:N=>c.onChange(N.target.checked),style:{accentColor:"#059669",margin:0}}),e.jsx("span",{children:c.label})]},k))})]}),e.jsxs("div",{className:"sp-controls-grid",children:[e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",flexWrap:"wrap",gap:"6px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Ds,{size:15,style:{color:"#059669"}}),"কক্ষ নম্বর নির্ধারণ (Room)"]}),e.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#047857",textDecoration:"underline",fontWeight:600,fontSize:"0.75rem",cursor:"pointer",padding:0},onClick:()=>gt(!0),children:"রোল রেঞ্জ অনুযায়ী ভাগ করুন ➔"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"90px",fontSize:"0.8rem",padding:"5px 8px",textAlign:"center",fontWeight:700},value:Tt,onChange:c=>Ht(c.target.value),placeholder:"যেমন: ১০১"}),e.jsx("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"6px 12px"},onClick:is,children:"সবার জন্য এই রুম সেট করুন"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"#64748b",margin:"6px 0 0 0"},children:"টিপস: প্রতিটি কার্ডের কক্ষ নম্বরে সরাসরি লিখেও আলাদা রুম পরিবর্তন করা যাবে।"})]}),e.jsxs("div",{className:"sp-sub-box",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",marginBottom:"8px"},children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:700,color:"#1e293b",fontSize:"0.8rem"},children:[e.jsx(Kt,{size:15,style:{color:"#059669"}}),"A4 পেজে কার্ড ও ফন্ট সাইজ:"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"6px",padding:"2px 6px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.74rem",marginRight:"2px"},children:"ফন্ট:"}),e.jsx("button",{type:"button",onClick:()=>Pt(c=>Math.max(80,c-5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{fontWeight:700,color:"#047857",minWidth:"36px",textAlign:"center",fontSize:"0.75rem"},children:[pe,"%"]}),e.jsx("button",{type:"button",onClick:()=>Pt(c=>Math.min(140,c+5)),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#f1f5f9",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",color:"#334155"},title:"ফন্ট বড় করুন",children:"A+"}),pe!==100&&e.jsx("button",{type:"button",onClick:()=>Pt(100),style:{padding:"2px 7px",borderRadius:"4px",border:"none",background:"#ecfdf5",fontWeight:600,fontSize:"0.72rem",cursor:"pointer",color:"#047857"},title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"প্রিসেট:"}),[{val:10,label:"১০টি (২×৫)"},{val:12,label:"১২টি (৩×৪)"},{val:8,label:"৮টি (২×৪)"},{val:6,label:"৬টি (২×৩)"}].map(c=>{const k=A===c.val&&!G;return e.jsx("button",{type:"button",className:`btn ${k?"btn-primary":"btn-secondary"}`,style:{fontSize:"0.74rem",padding:"4px 9px",...k?{background:"#059669",borderColor:"#059669"}:{}},onClick:()=>b(c.val),children:c.label},c.val)}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",marginLeft:"auto"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600,fontSize:"0.75rem"},children:"কাস্টম:"}),e.jsx("input",{type:"number",min:"1",max:"24",value:at,onChange:c=>v(c.target.value),className:"form-input",style:{width:"54px",fontSize:"0.78rem",padding:"4px 6px",textAlign:"center",fontWeight:700}})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px",paddingTop:"6px",borderTop:"1px solid #e2e8f0",fontSize:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"থিম:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Mt==="theme-classic",onChange:()=>Wt("theme-classic")}),e.jsx("span",{children:"ক্লাসিক"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#047857",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Mt==="theme-emerald",onChange:()=>Wt("theme-emerald")}),e.jsx("span",{children:"গ্রিন"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer",color:"#1e40af",fontWeight:600},children:[e.jsx("input",{type:"radio",name:"sp_theme",checked:Mt==="theme-navy",onChange:()=>Wt("theme-navy")}),e.jsx("span",{children:"নেভি"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{style:{color:"#475569",fontWeight:600},children:"বিন্যাস:"}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Rt==="logo-left",onChange:()=>Le("logo-left")}),e.jsx("span",{style:{color:"#047857",fontWeight:600},children:"বামে লোগো"})]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"sp_header_swap",checked:Rt==="photo-left",onChange:()=>Le("photo-left")}),e.jsx("span",{children:"বামে ছবি"})]})]})]})]})]}),e.jsxs("div",{className:"sp-summary-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"5px"},onClick:ft,children:[ve.size===ae.length?e.jsx(an,{size:14}):e.jsx(dn,{size:14}),e.jsx("span",{children:ve.size===ae.length?"সকল নির্বাচন বাতিল":"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{style:{fontWeight:600,color:"#334155",fontSize:"0.8rem"},children:["মোট শিক্ষার্থী: ",e.jsx("strong",{style:{color:"#047857"},children:ae.length})," জন | নির্বাচিত: ",e.jsx("strong",{style:{color:"#047857"},children:ve.size})," জন",l.length>0&&e.jsxs("span",{style:{marginLeft:"6px",color:"#64748b"},children:["(মোট ",e.jsx("strong",{children:O.length})," টি A4 পাতা প্রিন্ট হবে)"]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{position:"relative",minWidth:"200px"},children:[e.jsx(Fs,{size:14,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"রোল বা নাম খুঁজুন...",value:xt,onChange:c=>Ft(c.target.value),className:"form-input",style:{fontSize:"0.8rem",padding:"5px 10px 5px 30px",width:"100%"}})]}),e.jsx(nn,{checked:_t,onChange:Ne})]})]})]}),Gt&&e.jsx("div",{className:"modal-overlay no-print",style:{zIndex:9999},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"440px",padding:"20px"},children:[e.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-8 flex items-center gap-6",children:[e.jsx(Ds,{size:18,className:"text-emerald-600"}),"রোল রেঞ্জ অনুযায়ী কক্ষ নম্বর বণ্টন"]}),e.jsxs("p",{className:"text-xs text-slate-600 mb-10 leading-relaxed",children:["প্রতি লাইনে ",e.jsx("strong",{children:"রোল_শুরু-রোল_শেষ : কক্ষ_নম্বর"})," আকারে লিখুন:"]}),e.jsx("textarea",{rows:5,className:"form-input text-xs font-mono w-full p-8",value:es,onChange:c=>Ve(c.target.value)}),e.jsxs("div",{className:"flex justify-end gap-8 mt-14",children:[e.jsx("button",{type:"button",className:"btn btn-secondary text-xs",onClick:()=>gt(!1),children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary text-xs",style:{background:"#059669",borderColor:"#059669"},onClick:Ut,children:"রুম ভাগ করুন"})]})]})}),ct?e.jsxs("div",{className:"card text-center py-40 no-print",children:[e.jsx(Bs,{size:32,className:"animate-spin text-emerald-600 mx-auto mb-8"}),e.jsx("p",{className:"text-slate-600 text-sm",children:"শিক্ষার্থীদের ডাটাবেজ থেকে লোড করা হচ্ছে..."})]}):l.length===0?e.jsx("div",{className:"card text-center py-40 no-print",children:e.jsx("p",{className:"text-slate-500 text-sm",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত হয়নি। দয়া করে শ্রেণি/শাখা নির্বাচন করুন।"})}):e.jsx("div",{className:`seat-plan-print-container ${Mt}`,children:(Array.isArray(O)?O:[]).map((c,k)=>e.jsx("div",{className:`seat-plan-a4-sheet ${Nt?"has-cutlines":""}`,style:{display:"grid",gridTemplateColumns:`repeat(${Q.cols}, 1fr)`,gridTemplateRows:`repeat(${Q.rows}, 1fr)`,gap:A<=8?"4.5mm":"3.2mm",height:"284mm"},children:(Array.isArray(c)?c:[]).map(N=>{var me,Ke,wt,qt,ut,Is,_s,ts,$s,Zt,ss,Vt,rs,ys,os;const q=N.fullName||((me=N.user)==null?void 0:me.fullName)||`${((Ke=N.user)==null?void 0:Ke.firstName)||""} ${((wt=N.user)==null?void 0:wt.lastName)||""}`.trim()||N.name||"—",P=((qt=N.currentEnrollment)==null?void 0:qt.rollNumber)||N.rollNumber||N.roll||"—",W=N.studentId||N.admissionNumber||((ut=N._id)==null?void 0:ut.substring(0,6))||"—",V=((_s=(Is=N.currentEnrollment)==null?void 0:Is.classLevel)==null?void 0:_s.name)||((ts=N.classLevel)==null?void 0:ts.name)||N.class||"—",X=((Zt=($s=N.currentEnrollment)==null?void 0:$s.section)==null?void 0:Zt.name)||((ss=N.currentEnrollment)==null?void 0:ss.section)||((Vt=N.section)==null?void 0:Vt.name)||N.section||"—",le=N.department||((rs=N.currentEnrollment)==null?void 0:rs.department)||"সাধারণ",fe=tt[N._id]||Tt||"১০১",ge=qe&&(N.photo||(ys=N.user)!=null&&ys.photo)?N.photo||((os=N.user)==null?void 0:os.photo):Qs;return e.jsxs("div",{className:"seat-plan-card",children:[At&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:nt=>{nt.currentTarget.src=Js},className:"card-watermark",alt:"watermark"}),e.jsx("div",{className:"sp-card-header",children:Rt==="logo-left"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:nt=>{nt.currentTarget.src=Js},alt:"Logo"})}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:oe?"AN-NUR ISLAMIC ACADEMY":z.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:oe?"Shahibag, Chapainawabganj":z.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:oe?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),qe?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:ge,onError:nt=>{nt.currentTarget.src=Qs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}})]}):e.jsxs(e.Fragment,{children:[qe?e.jsx("div",{className:"sp-photo-wrapper",children:e.jsx("img",{src:ge,onError:nt=>{nt.currentTarget.src=Qs},alt:"Photo"})}):e.jsx("div",{style:{width:"38px",height:"38px"}}),e.jsxs("div",{className:"sp-center-info",children:[e.jsx("div",{className:"sp-madrasah-title",children:oe?"AN-NUR ISLAMIC ACADEMY":z.madrasahName||"আন্-নূর ইসলামিক একাডেমি"}),e.jsx("div",{className:"sp-madrasah-sub",children:oe?"Shahibag, Chapainawabganj":z.address||"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ"}),e.jsx("div",{className:"sp-badge",children:oe?"Exam Seat Plan":"পরীক্ষার আসন বিন্যাস"})]}),e.jsx("div",{className:"sp-logo-wrapper",children:e.jsx("img",{src:"/images/madrasah_logo.png",onError:nt=>{nt.currentTarget.src=Js},alt:"Logo"})})]})}),e.jsxs("div",{className:"sp-card-body",children:[e.jsx("table",{className:"sp-info-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"Name":"নাম"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",title:q,children:q})]}),He&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"ID":"আইডি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:W})]}),vt&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"Class":"শ্রেণি"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:V})]}),st&&X&&X!=="—"&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"Section":"শাখা"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:X})]}),Xe&&le&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"Group":"বিভাগ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsx("td",{className:"sp-val",children:le})]}),ht&&e.jsxs("tr",{children:[e.jsx("td",{className:"sp-lbl",children:oe?"Room":"কক্ষ"}),e.jsx("td",{className:"sp-colon",children:":"}),e.jsxs("td",{className:"sp-val font-bold text-slate-900",children:[e.jsx("span",{className:"no-print",children:e.jsx("input",{type:"text",className:"border border-slate-300 rounded px-1 text-[11px] w-12",value:fe,onChange:nt=>{const sa=nt.target.value;ee(Ps=>({...Ps,[N._id]:sa}))}})}),e.jsx("span",{className:"print-only",children:fe})]})]})]})}),re&&e.jsx("div",{className:"sp-roll-wrapper",children:e.jsxs("div",{className:"sp-roll-box",children:[e.jsx("div",{className:"sp-roll-hdr",children:oe?"Roll":"রোল"}),e.jsx("div",{className:"sp-roll-num",children:P})]})})]}),e.jsxs("div",{className:"sp-card-footer",children:[jt&&e.jsx("span",{className:"font-semibold",children:It}),$t&&e.jsxs("span",{children:[oe?"Session:":"সেশন:"," ",Oe&&/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(String(Oe))?new Date().getFullYear():Oe||new Date().getFullYear()]})]})]},N._id)})},`page-${k}`))}),e.jsx("style",{children:`
        /* --- Screen Styles --- */
        .seat-plan-workspace {
          --sp-font-scale: ${pe/100};
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
      `})]})}const bs={title:"পরীক্ষার্থীদের জন্য বিশেষ জ্ঞাতব্য",rules:["নির্দিষ্ট সময়ের ১৫ মিনিট পূর্বে হল রুমে প্রবেশ করতে হবে।","প্রত্যেক পরীক্ষার্থীকে অবশ্যই প্রবেশপত্র, পরীক্ষার সরঞ্জাম (বোর্ড, কলম, কলম/পেন্সিল, রাবার ইত্যাদি) সঙ্গে নিয়ে আসতে হবে।","প্রবেশপত্র এবং পরীক্ষার সরঞ্জামাদি ব্যতীত অন্য কোন কাগজ নিয়ে পরীক্ষার হলে প্রবেশ নিষেধ।","উত্তরপত্রে কালো কালি ব্যবহার করতে পারবেন।","পরীক্ষার সময় কোন অভিভাবক মাদরাসার ভিতর প্রবেশ সম্পূর্ণরূপে নিষেধ।"],noteLabel:"বি: দ্র:",noteText:"উক্ত নিয়মাবলীর বহির্ভূত কোন কাজ করলে তার পরীক্ষা বাতিল বলে গণ্য হবে।",footerLeftBadge:"",authorityLine1:"আদেশক্রমে",authorityLine2:"মাদরাসা কর্তৃপক্ষ"};function Rs({position:m}){const $={"top-left":"rotate(0)","top-right":"scale(-1, 1)","bottom-left":"scale(1, -1)","bottom-right":"scale(-1, -1)"},T={"top-left":{top:"2px",left:"2px"},"top-right":{top:"2px",right:"2px"},"bottom-left":{bottom:"2px",left:"2px"},"bottom-right":{bottom:"2px",right:"2px"}};return e.jsx("svg",{viewBox:"0 0 64 64",style:{position:"absolute",width:"36px",height:"36px",pointerEvents:"none",zIndex:3,...T[m]},children:e.jsxs("g",{transform:`translate(${m.includes("right")?64:0}, ${m.includes("bottom")?64:0}) ${$[m]}`,children:[e.jsx("path",{d:"M2,2 L48,2 C36,6 26,14 20,22 C14,28 6,38 2,50 Z",fill:"#0d3b66",opacity:"0.92"}),e.jsx("path",{d:"M2,2 L42,2 C32,7 24,13 18,20 C12,26 7,34 2,44 Z",fill:"none",stroke:"#d4a437",strokeWidth:"1.8"}),e.jsx("circle",{cx:"12",cy:"12",r:"4.5",fill:"#d4a437"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#0d3b66"}),e.jsx("path",{d:"M22,6 Q28,12 22,18 Q16,12 22,6 Z",fill:"#d4a437"}),e.jsx("path",{d:"M6,22 Q12,28 18,22 Q12,16 6,22 Z",fill:"#d4a437"})]})})}function qn(){return e.jsx("svg",{viewBox:"0 0 90 52",style:{position:"absolute",top:"6px",left:"28px",width:"54px",height:"32px",pointerEvents:"none",zIndex:2},children:e.jsxs("g",{fill:"#0d3b66",opacity:"0.88",children:[e.jsx("rect",{x:"6",y:"14",width:"4",height:"36"}),e.jsx("polygon",{points:"8,6 5,14 11,14"}),e.jsx("circle",{cx:"8",cy:"5",r:"1.5",fill:"#c89b3c"}),e.jsx("path",{d:"M14,32 C14,22 26,22 26,32 Z"}),e.jsx("rect",{x:"14",y:"32",width:"12",height:"18"}),e.jsx("path",{d:"M28,28 C28,10 56,10 56,28 Z"}),e.jsx("rect",{x:"41.2",y:"5",width:"1.6",height:"6"}),e.jsx("circle",{cx:"42",cy:"4",r:"2",fill:"#c89b3c"}),e.jsx("rect",{x:"27",y:"28",width:"30",height:"22"}),e.jsx("path",{d:"M37,50 L37,37 C37,33 47,33 47,37 L47,50 Z",fill:"#ffffff",opacity:"0.85"}),e.jsx("rect",{x:"62",y:"10",width:"4.5",height:"40"}),e.jsx("polygon",{points:"64.25,2 61,10 67.5,10"}),e.jsx("circle",{cx:"64.25",cy:"1.5",r:"1.5",fill:"#c89b3c"}),e.jsx("rect",{x:"2",y:"48",width:"76",height:"2.5",rx:"1"})]})})}function Zn(){return e.jsxs("svg",{viewBox:"0 0 44 86",style:{position:"absolute",top:"2px",right:"24px",width:"28px",height:"56px",pointerEvents:"none",zIndex:2},children:[e.jsx("line",{x1:"22",y1:"0",x2:"22",y2:"20",stroke:"#9a721c",strokeWidth:"1.6",strokeDasharray:"2.5 1.5"}),e.jsx("circle",{cx:"22",cy:"21",r:"2.2",fill:"#c89b3c"}),e.jsx("path",{d:"M14,29 Q22,20 30,29 Z",fill:"#b48322"}),e.jsx("rect",{x:"12",y:"29",width:"20",height:"3",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"14,32 30,32 33,48 27,64 17,64 11,48",fill:"#fef3c7",stroke:"#b48322",strokeWidth:"1.6"}),e.jsx("ellipse",{cx:"22",cy:"48",rx:"6",ry:"11",fill:"#f59e0b",opacity:"0.45"}),e.jsx("line",{x1:"22",y1:"32",x2:"22",y2:"64",stroke:"#b48322",strokeWidth:"1.2"}),e.jsx("line",{x1:"12",y1:"48",x2:"32",y2:"48",stroke:"#b48322",strokeWidth:"1"}),e.jsx("rect",{x:"16",y:"64",width:"12",height:"2.5",rx:"1",fill:"#0d3b66"}),e.jsx("polygon",{points:"19,66.5 25,66.5 22,76",fill:"#b48322"}),e.jsx("circle",{cx:"22",cy:"78",r:"2",fill:"#d4a437"})]})}function Vn(){return e.jsx("svg",{viewBox:"0 0 20 20",style:{width:"12px",height:"12px",flexShrink:0,marginTop:"2px"},children:e.jsxs("g",{transform:"translate(10,10)",children:[e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66"}),e.jsx("rect",{x:"-5.5",y:"-5.5",width:"11",height:"11",fill:"#0d3b66",transform:"rotate(45)"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.2",fill:"#f3c65f"})]})})}function Ts({config:m=bs}){const $={...bs,...m},T=Array.isArray($.rules)&&$.rules.length>0?$.rules:bs.rules;return e.jsx("div",{className:"backside-card",children:e.jsx("div",{className:"backside-outer-border",children:e.jsxs("div",{className:"backside-inner-border",children:[e.jsx(Rs,{position:"top-left"}),e.jsx(Rs,{position:"top-right"}),e.jsx(Rs,{position:"bottom-left"}),e.jsx(Rs,{position:"bottom-right"}),e.jsx(qn,{}),e.jsx(Zn,{}),e.jsx("div",{className:"backside-header-wrap",children:e.jsx("div",{className:"backside-header-pill",children:e.jsx("span",{children:$.title})})}),e.jsx("ul",{className:"backside-rules-list",children:T.filter(z=>z&&z.trim()).map((z,xe)=>e.jsxs("li",{className:"backside-rule-item",children:[e.jsx(Vn,{}),e.jsx("span",{children:z})]},xe))}),e.jsxs("div",{className:"backside-note-section",children:[e.jsxs("div",{className:"backside-divider-row",children:[e.jsx("span",{className:"backside-note-pill",children:$.noteLabel||"বি: দ্র:"}),e.jsx("div",{className:"backside-gold-line",children:e.jsx("span",{className:"backside-gold-diamond"})})]}),e.jsx("p",{className:"backside-note-text",children:$.noteText})]}),e.jsxs("div",{className:"backside-footer-row",children:[e.jsx("div",{children:$.footerLeftBadge&&$.footerLeftBadge.trim()!==""&&e.jsx("span",{className:"backside-left-badge",children:$.footerLeftBadge})}),e.jsxs("div",{className:"backside-authority-box",children:[e.jsx("div",{className:"backside-auth-line1",children:$.authorityLine1||"আদেশক্রমে"}),e.jsx("div",{className:"backside-auth-line2",children:$.authorityLine2||"মাদরাসা কর্তৃপক্ষ"})]})]})]})})})}const Xs='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect width="100" height="120" fill="%23f1f5f9"/><circle cx="50" cy="50" r="24" fill="%23fed7aa"/><path d="M26,50 C26,28 74,28 74,50 Z" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/><ellipse cx="50" cy="30" rx="20" ry="7" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="1.5"/><circle cx="42" cy="52" r="2.5" fill="%23334155"/><circle cx="58" cy="52" r="2.5" fill="%23334155"/><path d="M47,60 Q50,64 53,60" fill="none" stroke="%23e11d48" stroke-width="1.5" stroke-linecap="round"/><path d="M15,115 C15,85 85,85 85,115 Z" fill="%23059669"/></svg>',de=(m,$="—")=>m==null?$:typeof m=="object"?m.name||m.title||m.banglaName||m.code||m._id||$:String(m).trim()||$,Es=(m,$="—")=>{var xe,ie,ce,Te;if(!m)return $;const T=`${((xe=m.user)==null?void 0:xe.firstName)||""} ${((ie=m.user)==null?void 0:ie.lastName)||""}`.trim(),z=`${m.firstName||""} ${m.lastName||""}`.trim();return de(((ce=m.user)==null?void 0:ce.fullName)||T||((Te=m.user)==null?void 0:Te.name)||m.fullName||z||m.name||m.banglaName,$)};function en({exams:m=[],classes:$=[]}){const{user:T}=ln(),z=i.useMemo(()=>ta(T),[T]),xe=i.useMemo(()=>Array.isArray($)?$:$&&Array.isArray($.classes)?$.classes:[],[$]),ie=i.useMemo(()=>Array.isArray(m)?m:m&&Array.isArray(m.exams)?m.exams:[],[m]),[ce,Te]=i.useState(""),[L,Ue]=i.useState(""),[Ce,ot]=i.useState("all"),[be,E]=i.useState("all"),[he,$e]=i.useState([]),[Qe,Oe]=i.useState([]),[dt,It]=i.useState(!1),[Je,ct]=i.useState(""),[J,ae]=i.useState(!0),[H,ve]=i.useState(new Set),[u,tt]=i.useState({}),[ee,xt]=i.useState("১০২"),[Ft,_t]=i.useState(()=>new Date().toISOString().split("T")[0]),[Ne,ht]=i.useState("preview"),[Pe,jt]=i.useState(85),[F,Xe]=i.useState("en"),[Ie,qe]=i.useState(4),[Ze,He]=i.useState("4"),[Ge,vt]=i.useState("landscape"),[Ee,st]=i.useState(!0),[Ot,$t]=i.useState("admit"),[U,re]=i.useState(()=>{try{const l=parseInt(localStorage.getItem("admit_card_font_scale"),10);if(!isNaN(l)&&l>=80&&l<=135)return l}catch{}return 100}),[Be,Nt]=i.useState(()=>{try{return localStorage.getItem("admit_teacher_sig")||""}catch{return""}}),[Ae,At]=i.useState(()=>{try{return localStorage.getItem("admit_head_sig")||""}catch{return""}}),x=(l,b)=>{if(!b)return;const v=new FileReader;v.onload=Q=>{var te;const O=((te=Q.target)==null?void 0:te.result)||"";if(l==="teacher"){Nt(O);try{localStorage.setItem("admit_teacher_sig",O)}catch{}}else{At(O);try{localStorage.setItem("admit_head_sig",O)}catch{}}},v.readAsDataURL(b)},A=l=>{if(l==="teacher"){Nt("");try{localStorage.removeItem("admit_teacher_sig")}catch{}}else{At("");try{localStorage.removeItem("admit_head_sig")}catch{}}};i.useEffect(()=>{try{localStorage.setItem("admit_card_font_scale",String(U))}catch{}},[U]);const[I,G]=i.useState(()=>{try{const l=localStorage.getItem("admit_backside_config");if(l)return{...bs,...JSON.parse(l)}}catch{}return bs});i.useEffect(()=>{try{localStorage.setItem("admit_backside_config",JSON.stringify(I))}catch{}},[I]);const[M,at]=i.useState({room:!0,exam:!0,group:!0,section:!0,version:!0,shift:!0,session:!0,studentId:!0,photo:!0,teacherSig:!0,principalSig:!0,issueDate:!0,watermark:!0});i.useEffect(()=>{ie.length>0&&!ce&&Te(ie[0]._id||ie[0].id||"")},[ie,ce]),i.useEffect(()=>{if(!L){$e([]),ot("all");return}(async()=>{var b,v,Q,O;try{const te=await Z.get(`/students/sections?classLevel=${L}`),c=((v=(b=te.data)==null?void 0:b.data)==null?void 0:v.sections)||((Q=te.data)==null?void 0:Q.sections)||((O=te.data)==null?void 0:O.data)||[],k=Array.isArray(c)?c:[];$e(k),ot("all")}catch{$e([])}})()},[L]);const We=async()=>{var l,b,v,Q;if(!L){Oe([]),ve(new Set);return}It(!0);try{const O={classLevel:L,limit:500,status:"active"};Ce&&Ce!=="all"&&(O.section=Ce);const te=await Z.get("/students",{params:O}),c=((b=(l=te.data)==null?void 0:l.data)==null?void 0:b.students)||((v=te.data)==null?void 0:v.students)||((Q=te.data)==null?void 0:Q.data)||[];let k=Array.isArray(c)?c:c.students||[];be&&be!=="all"&&(k=k.filter(P=>{var V;return(P.department||((V=P.currentEnrollment)==null?void 0:V.department)||"").toLowerCase().includes(be.toLowerCase())})),k.sort((P,W)=>{var le,fe;const V=it(((le=P.currentEnrollment)==null?void 0:le.rollNumber)||P.rollNumber||P.roll),X=it(((fe=W.currentEnrollment)==null?void 0:fe.rollNumber)||W.rollNumber||W.roll);return V-X}),Oe(k);const N=new Set(k.map(P=>P._id||P.id));ve(N);const q={};k.forEach(P=>{const W=P._id||P.id;q[W]=ee}),tt(q)}catch(O){console.error("Failed to load students for admit card:",O),Oe([]),ve(new Set)}finally{It(!1)}};i.useEffect(()=>{L&&We()},[L,Ce,be]);const Mt=()=>{const l=ee.trim();l&&tt(b=>{const v={...b};return H.forEach(Q=>{v[Q]=l}),v})},Wt=()=>{H.size===Le.length&&Le.length>0?ve(new Set):ve(new Set(Le.map(l=>l._id||l.id)))},Rt=l=>{const b=new Set(H);b.has(l)?b.delete(l):b.add(l),ve(b)},Le=i.useMemo(()=>Je.trim()?Qe.filter(l=>{var O;const b=Es(l,""),v=de(((O=l.currentEnrollment)==null?void 0:O.rollNumber)||l.rollNumber||l.roll,""),Q=de(l.studentId||l.admissionNumber,"");return sn([b,v,Q],Je,J)}):Qe,[Qe,Je,J]),oe=i.useMemo(()=>Qe.filter(l=>H.has(l._id||l.id)),[Qe,H]),ne=i.useMemo(()=>ie.find(l=>(l._id||l.id)===ce)||null,[ie,ce]),pe=i.useMemo(()=>xe.find(l=>(l._id||l.id)===L)||null,[xe,L]),Pt=l=>{qe(l),He(String(l)),l!==4&&Ee&&st(!1)},Tt=l=>{He(l);const b=parseInt(l,10);!isNaN(b)&&b>0&&b<=8&&(qe(b),b!==4&&Ee&&st(!1))},Ht=l=>{vt(l),l==="landscape"?(qe(4),He("4")):Ee&&st(!1)},es=()=>{const l=!Ee;st(l),l&&(vt("landscape"),qe(4),He("4"))},Ve=i.useMemo(()=>{const l=[],b=parseInt(Ie,10)||2;for(let v=0;v<oe.length;v+=b)l.push(oe.slice(v,v+b));return l},[oe,Ie]),Gt=l=>{at(b=>({...b,[l]:!b[l]}))},gt=i.useRef(null),Yt=i.useRef(null),ft=l=>{const b=gt.current,v=Yt.current;if(!b||!v){window.print();return}const Q=document.getElementById("admit-print-iframe");Q&&Q.remove();const O=document.createElement("iframe");O.id="admit-print-iframe",O.style.position="fixed",O.style.right="0",O.style.bottom="0",O.style.width="0",O.style.height="0",O.style.border="0",O.style.visibility="hidden",document.body.appendChild(O);const te=O.contentWindow.document,c=window.location.origin;te.open(),te.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <base href="${c}/" />
  <title>Admit Card Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --admit-font-scale: ${U/100};
    }
    @page {
      size: A4 ${l};
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
      height: ${l==="landscape"?"201mm":"288mm"} !important;
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
  <div class="admit-print-only-container">${b.innerHTML}</div>
</body>
</html>`),te.close();const k=()=>{try{O.contentWindow.focus(),O.contentWindow.print()}catch(q){console.error("Iframe print error:",q),window.print()}},N=Array.from(te.images||[]);if(N.length===0)setTimeout(k,120);else{let q=!1;const P=()=>{q||(q=!0,setTimeout(k,100))};Promise.all(N.map(W=>W.complete?Promise.resolve():new Promise(V=>{W.onload=V,W.onerror=V}))).then(P),setTimeout(P,1200)}},is=()=>{if(oe.length===0){alert("অনুগ্রহ করে অন্তত একজন শিক্ষার্থী নির্বাচন করুন।");return}$t("admit");const l=Ge==="landscape"?"landscape":"portrait";setTimeout(()=>ft(l),80)},Ut=()=>{$t("backside_only"),setTimeout(()=>ft("landscape"),80)};return e.jsxs("div",{className:"admit-generator-wrapper animate-fade-in",children:[e.jsxs("div",{className:"admit-hdr-card no-print",children:[e.jsxs("div",{className:"admit-hdr-main",children:[e.jsxs("div",{className:"admit-hdr-title-group",children:[e.jsx("div",{className:"admit-hdr-icon-box",children:e.jsx(Ct,{size:26,color:"#ffffff"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"admit-hdr-heading-row",children:[e.jsx("h1",{className:"admit-hdr-title",children:"প্রবেশপত্র জেনারেটর (Admit Card Generator)"}),e.jsx("span",{className:"admit-hdr-badge",children:"Batch Pro"})]}),e.jsxs("p",{className:"admit-hdr-subtitle",children:[e.jsx("span",{children:de(z.madrasahName,"আন্-নূর ইসলামিক একাডেমি")}),e.jsx("span",{className:"dot-sep",children:"•"}),e.jsx("span",{children:"স্বয়ংক্রিয় এ৪ ব্যাচ প্রবেশপত্র তৈরি ও লেআউট স্কেলিং"})]})]})]}),e.jsxs("div",{className:"admit-hdr-actions",children:[e.jsxs("div",{className:"admit-lang-group",children:[e.jsx("button",{type:"button",onClick:()=>Xe("en"),className:`admit-lang-btn ${F==="en"?"active":""}`,children:"English"}),e.jsx("button",{type:"button",onClick:()=>Xe("bn"),className:`admit-lang-btn ${F==="bn"?"active":""}`,children:"বাংলা"}),e.jsx("button",{type:"button",onClick:()=>Xe("bi"),className:`admit-lang-btn ${F==="bi"?"active":""}`,children:"দ্বিভাষিক"})]}),e.jsxs("button",{type:"button",onClick:We,disabled:dt||!L,className:"admit-btn-ghost",title:"শিক্ষার্থী তালিকা রিফ্রেশ করুন",children:[e.jsx(Bs,{size:15,className:dt?"animate-spin":""}),e.jsx("span",{children:"রিফ্রেশ"})]}),e.jsxs("button",{type:"button",onClick:Ut,className:"admit-btn-ghost",title:"শুধুমাত্র A4 Landscape-এ ৪টি বিশেষ জ্ঞাতব্য কার্ড প্রিন্ট করুন",children:[e.jsx(rt,{size:15}),e.jsx("span",{children:"জ্ঞাতব্য পেজ প্রিন্ট"})]}),e.jsxs("button",{type:"button",onClick:is,disabled:oe.length===0,className:"admit-btn-print",children:[e.jsx(rt,{size:16}),e.jsxs("span",{children:["প্রিন্ট করুন (",oe.length," জন)"]})]})]})]}),e.jsxs("div",{className:"admit-hdr-chips-row",children:[e.jsxs("div",{className:"admit-chip",children:[e.jsx(Va,{size:14,className:"text-sky-300"}),e.jsxs("span",{children:["মোট শিক্ষার্থী: ",e.jsx("b",{children:Le.length})]})]}),e.jsxs("div",{className:"admit-chip highlight-emerald",children:[e.jsx(Bn,{size:14,className:"text-emerald-300"}),e.jsxs("span",{children:["নির্বাচিত: ",e.jsx("b",{children:oe.length})," জন"]})]}),e.jsxs("div",{className:"admit-chip highlight-indigo",children:[e.jsx(Kt,{size:14,className:"text-indigo-300"}),e.jsxs("span",{children:["গ্রিড লেআউট: ",e.jsxs("b",{children:[Ie,"টি/পেজ"]})]})]}),e.jsxs("div",{className:"admit-chip highlight-amber",children:[e.jsx(Ct,{size:14,className:"text-amber-300"}),e.jsxs("span",{children:["প্রিন্ট শিট: ",e.jsxs("b",{children:[Ve.length,"টি A4 পেজ"]})]})]})]})]}),e.jsxs("div",{className:"admit-ctrl-card no-print",children:[e.jsxs("div",{className:"admit-filters-grid",children:[e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Lt,{size:14,className:"admit-label-icon text-sky-600"}),e.jsx("span",{children:"পরীক্ষা নির্বাচন করুন *"})]}),e.jsx("select",{value:ce,onChange:l=>Te(l.target.value),className:"admit-select",children:ie.map(l=>{const b=l._id||l.id||"",v=de(l.name||l.title,"Exam");return e.jsx("option",{value:b,children:v},b)})})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ds,{size:14,className:"admit-label-icon text-emerald-600"}),e.jsx("span",{children:"শ্রেণি / জামাত *"})]}),e.jsxs("select",{value:L,onChange:l=>Ue(l.target.value),className:"admit-select",children:[e.jsx("option",{value:"",children:"-- শ্রেণি নির্বাচন করুন --"}),xe.map(l=>{const b=l._id||l.id||"",v=de(l.name||l.banglaName||l.code,"Class");return e.jsx("option",{value:b,children:v},b)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Kt,{size:14,className:"admit-label-icon text-indigo-600"}),e.jsx("span",{children:"শাখা (Section)"})]}),e.jsxs("select",{value:Ce,onChange:l=>ot(l.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল শাখা (All Sections)"}),he.map((l,b)=>{const v=de(l,"");return e.jsx("option",{value:v,children:v},b)})]})]}),e.jsxs("div",{className:"admit-form-col",children:[e.jsxs("label",{className:"admit-label",children:[e.jsx(Ln,{size:14,className:"admit-label-icon text-amber-600"}),e.jsx("span",{children:"বিভাগ / গ্রুপ (Department)"})]}),e.jsxs("select",{value:be,onChange:l=>E(l.target.value),className:"admit-select",children:[e.jsx("option",{value:"all",children:"সকল বিভাগ (সাধারণ/হিফজ/নাজেরা)"}),e.jsx("option",{value:"নাজেরা",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ",children:"হিফজুল কুরআন"}),e.jsx("option",{value:"কিতাব",children:"কিতাব বিভাগ"}),e.jsx("option",{value:"নূরানী",children:"নূরানী বিভাগ"}),e.jsx("option",{value:"সাধারণ",children:"সাধারণ / স্কুল"})]})]})]}),e.jsxs("div",{className:"admit-secondary-controls",children:[e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Kt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"প্রতি A4 পেজে:"})]}),e.jsx("div",{className:"admit-pill-buttons",children:[{count:1,label:"১টি"},{count:2,label:"২টি"},{count:4,label:"৪টি (2x2)"},{count:6,label:"৬টি (2x3)"}].map(l=>e.jsx("button",{type:"button",onClick:()=>Pt(l.count),className:`admit-pill-btn ${Ie===l.count?"active":""}`,children:l.label},l.count))}),e.jsxs("div",{className:"admit-custom-cards-box",children:[e.jsx("input",{type:"number",min:"1",max:"8",value:Ze,onChange:l=>Tt(l.target.value),className:"admit-custom-input",placeholder:"কাস্টম"}),e.jsx("span",{className:"admit-custom-unit",children:"টি/পেজ"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Dn,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"পেজ ও উল্টো পিঠ:"})]}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>Ht("portrait"),className:`admit-pill-btn ${Ge==="portrait"?"active":""}`,children:"Portrait"}),e.jsx("button",{type:"button",onClick:()=>Ht("landscape"),className:`admit-pill-btn ${Ge==="landscape"?"active":""}`,children:"Landscape (২×২)"})]}),e.jsx("button",{type:"button",onClick:es,className:`admit-pill-btn ${Ee?"active":""}`,style:{border:Ee?"1px solid #0d3b66":"1px solid #cbd5e1",background:Ee?"#0d3b66":"#ffffff",color:Ee?"#ffffff":"#334155",borderRadius:"8px",padding:"5px 10px"},title:"সামনের ৪টি প্রবেশপত্রের পর পরের পেজে উল্টো পিঠের ৪টি বিশেষ জ্ঞাতব্য যুক্ত করুন",children:Ee?"✓ উল্টো পিঠ (জ্ঞাতব্য) সহ":"+ উল্টো পিঠ (জ্ঞাতব্য) সহ"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"ফন্ট সাইজ:"})}),e.jsxs("div",{className:"admit-pill-buttons",children:[e.jsx("button",{type:"button",onClick:()=>re(l=>Math.max(80,l-5)),className:"admit-pill-btn",title:"ফন্ট ছোট করুন",children:"A-"}),e.jsxs("span",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:700,color:"#0f172a"},children:[U,"%"]}),e.jsx("button",{type:"button",onClick:()=>re(l=>Math.min(135,l+5)),className:"admit-pill-btn",title:"ফন্ট বড় করুন",children:"A+"}),U!==100&&e.jsx("button",{type:"button",onClick:()=>re(100),className:"admit-pill-btn",title:"ডিফল্ট ফন্ট সাইজ",children:"রিসেট"})]})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Ds,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"কক্ষ নম্বর (Room No):"})]}),e.jsx("input",{type:"text",value:ee,onChange:l=>xt(l.target.value),placeholder:"যেমন: ১০২",className:"admit-room-input"}),e.jsx("button",{type:"button",onClick:Mt,className:"admit-btn-room-apply",title:"নির্বাচিত সকল ছাত্রের কার্ডে এই কক্ষ নম্বরটি বসান",children:"সবাইকে দিন"})]}),e.jsxs("div",{className:"admit-sec-group",children:[e.jsxs("span",{className:"admit-sec-label",children:[e.jsx(Lt,{size:14,className:"text-emerald-600"}),e.jsx("span",{children:"ইস্যু তারিখ:"})]}),e.jsx("input",{type:"date",value:Ft,onChange:l=>_t(l.target.value),className:"admit-date-input"})]}),e.jsxs("div",{className:"admit-sec-group",style:{flexWrap:"wrap"},children:[e.jsx("span",{className:"admit-sec-label",children:e.jsx("span",{children:"স্বাক্ষর আপলোড:"})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:Be?"#ecfdf5":"#ffffff",color:Be?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:l=>{var v;const b=(v=l.target.files)==null?void 0:v[0];b&&x("teacher",b),l.target.value=""}}),e.jsx("span",{children:Be?"✓ Class Teacher":"+ Class Teacher"})]}),Be&&e.jsx("button",{type:"button",onClick:()=>A("teacher"),title:"Class Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 9px",borderRadius:"6px",border:"1px solid #cbd5e1",background:Ae?"#ecfdf5":"#ffffff",color:Ae?"#047857":"#334155",fontSize:"11.5px",fontWeight:600,cursor:"pointer"},children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:l=>{var v;const b=(v=l.target.files)==null?void 0:v[0];b&&x("head",b),l.target.value=""}}),e.jsx("span",{children:Ae?"✓ Head Teacher":"+ Head Teacher"})]}),Ae&&e.jsx("button",{type:"button",onClick:()=>A("head"),title:"Head Teacher স্বাক্ষর মুছুন",style:{border:"none",background:"#fee2e2",color:"#dc2626",borderRadius:"4px",padding:"2px 6px",fontSize:"11px",fontWeight:700,cursor:"pointer"},children:"×"})]})]})]})]}),e.jsxs("div",{className:"admit-tabs-bar no-print",children:[e.jsxs("div",{className:"admit-tabs-left",children:[e.jsxs("button",{type:"button",onClick:()=>ht("preview"),className:`admit-tab-btn ${Ne==="preview"?"active":""}`,children:[e.jsx(Fn,{size:15}),e.jsx("span",{children:"লাইভ কার্ড প্রিভিউ (Live Preview)"}),e.jsxs("span",{className:"admit-tab-badge",children:[Ve.length," পেজ"]})]}),e.jsxs("button",{type:"button",onClick:()=>ht("students"),className:`admit-tab-btn ${Ne==="students"?"active":""}`,children:[e.jsx(Va,{size:15}),e.jsx("span",{children:"শিক্ষার্থী তালিকা"}),e.jsxs("span",{className:"admit-tab-badge",children:[oe.length,"/",Le.length]})]}),e.jsxs("button",{type:"button",onClick:()=>ht("settings"),className:`admit-tab-btn ${Ne==="settings"?"active":""}`,children:[e.jsx(Un,{size:15}),e.jsx("span",{children:"কার্ড উপাদান কনফিগারেশন"})]})]}),Ne==="preview"&&e.jsxs("div",{className:"admit-zoom-controls",children:[e.jsx("span",{className:"admit-zoom-label",children:"জুম:"}),e.jsx("button",{type:"button",onClick:()=>jt(Math.max(50,Pe-15)),className:"admit-zoom-btn",title:"জুম আউট",children:e.jsx(On,{size:14})}),e.jsxs("span",{className:"admit-zoom-value",children:[Pe,"%"]}),e.jsx("button",{type:"button",onClick:()=>jt(Math.min(130,Pe+15)),className:"admit-zoom-btn",title:"জুম ইন",children:e.jsx(Pn,{size:14})}),e.jsx("button",{type:"button",onClick:()=>jt(100),className:"admit-zoom-reset",children:"রিসেট"})]})]}),Ne==="preview"&&e.jsx("div",{className:"admit-preview-area no-print",children:dt?e.jsxs("div",{className:"admit-state-box",children:[e.jsx(Bs,{size:32,className:"animate-spin text-emerald-600 mb-2"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:"শিক্ষার্থীদের প্রবেশপত্র তৈরি হচ্ছে..."})]}):L?oe.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-sm font-semibold text-slate-600",children:"কোনো শিক্ষার্থী পাওয়া যায়নি বা নির্বাচিত করা হয়নি। অনুগ্রহ করে শ্রেণি পরিবর্তন করুন অথবা শিক্ষার্থী তালিকায় গিয়ে শিক্ষার্থী নির্বাচন করুন।"})}):e.jsx("div",{className:"admit-preview-viewport",children:e.jsx("div",{className:"admit-preview-scaler",style:{transform:`scale(${Pe/100})`,transformOrigin:"top center"},children:Ve.map((l,b)=>e.jsxs(Qa.Fragment,{children:[e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",children:["পেজ ",b+1," / ",Ve.length," ",Ge==="landscape"?"(Landscape)":""]}),e.jsxs("span",{children:["(এই পেজে ",l.length,"টি কার্ড)"]})]}),e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Ie} ${Ge==="landscape"?"a4-landscape":""}`,children:l.map(v=>{var X,le,fe,ge;const Q=v._id||v.id,O=Es(v,"MD. STUDENT"),te=de(((X=v.currentEnrollment)==null?void 0:X.rollNumber)||v.rollNumber||v.roll,"—"),c=de(v.studentId||v.admissionNumber,"—"),k=de(((le=v.currentEnrollment)==null?void 0:le.section)||v.section||(Ce!=="all"?Ce:"—"),"—"),N=de(v.department||((fe=v.currentEnrollment)==null?void 0:fe.department)||v.stream,"All"),q=de(u[Q]||ee,"১০২"),P=v.photo||((ge=v.user)==null?void 0:ge.photo)||Xs,W=de((ne==null?void 0:ne.name)||(ne==null?void 0:ne.title),"Annual Examination 2026"),V=de((pe==null?void 0:pe.name)||(pe==null?void 0:pe.banglaName)||(pe==null?void 0:pe.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[M.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:me=>{me.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:me=>{me.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:F==="bn"?de(z.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:F==="bn"?de(z.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:F==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),M.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:F==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:ls(Ft)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:O})]}),M.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:N})]}),M.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),M.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:q})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:te})]}),M.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),M.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),M.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:V})]}),M.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:k})]})]}),M.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:P,alt:"Photo"})})]}),M.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:F==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:W})]}),e.jsxs("div",{className:"signatures-row",children:[M.teacherSig?e.jsxs("div",{className:"signature-block",children:[Be?e.jsx("img",{src:Be,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),M.principalSig?e.jsxs("div",{className:"signature-block",children:[Ae?e.jsx("img",{src:Ae,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},Q)})})]}),Ee&&e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsxs("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:["পেজ ",b+1," (উল্টো পিঠ — বিশেষ জ্ঞাতব্য)"]}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(v=>e.jsx(Ts,{config:I},`preview-back-${b}-${v}`))})]})]},`preview-group-${b}`))})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"admit-state-box border-dashed",children:[e.jsx(Ct,{size:40,className:"text-slate-400 mb-2"}),e.jsx("h3",{className:"text-base font-bold text-slate-700",children:"কোনো শ্রেণি নির্বাচন করা হয়নি"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1 max-w-md mx-auto",children:"অনুগ্রহ করে উপরের ড্রপডাউন থেকে একটি শ্রেণি / জামাত সিলেক্ট করুন। সিলেক্ট করার সাথে সাথে ডেটাবেজ থেকে শিক্ষার্থীদের প্রবেশপত্র (A4 Landscape ২×২) তৈরি হয়ে প্রদর্শিত হবে।"})]}),Ee&&e.jsx("div",{className:"admit-preview-viewport",style:{marginTop:"16px"},children:e.jsx("div",{className:"admit-preview-scale-wrapper",style:{transform:`scale(${Pe/100})`,transformOrigin:"top center"},children:e.jsxs("div",{className:"admit-page-wrapper",children:[e.jsxs("div",{className:"admit-page-tag",children:[e.jsx("span",{className:"admit-page-tag-pill",style:{background:"#0d3b66"},children:"উল্টো পিঠ প্রিভিউ — বিশেষ জ্ঞাতব্য"}),e.jsx("span",{children:"(A4 Landscape • ২×২ = ৪টি কার্ড)"})]}),e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(l=>e.jsx(Ts,{config:I},`empty-back-${l}`))})]})})})]})}),Ne==="students"&&e.jsxs("div",{className:"admit-table-card no-print",children:[e.jsxs("div",{className:"admit-table-hdr-row",children:[e.jsxs("div",{className:"admit-table-actions-left",children:[e.jsx("button",{type:"button",onClick:Wt,className:"admit-btn-select-all",children:H.size===Le.length&&Le.length>0?e.jsxs(e.Fragment,{children:[e.jsx(an,{size:16,className:"text-emerald-700"}),e.jsx("span",{children:"সকলের সিলেকশন বাতিল করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(dn,{size:16,className:"text-slate-500"}),e.jsxs("span",{children:["সকলকে সিলেক্ট করুন (",Le.length," জন)"]})]})}),e.jsxs("span",{className:"admit-table-selected-badge",children:["নির্বাচিত: ",e.jsx("b",{children:H.size})," / ",Le.length," জন"]})]}),e.jsxs("div",{className:"admit-search-box",children:[e.jsx(Fs,{size:15,className:"admit-search-icon"}),e.jsx("input",{type:"text",placeholder:"রোল, নাম বা আইডি দিয়ে খুঁজুন...",value:Je,onChange:l=>ct(l.target.value),className:"admit-search-input"}),Je&&e.jsx("button",{type:"button",onClick:()=>ct(""),className:"admit-search-clear",children:"✕"})]}),e.jsx(nn,{checked:J,onChange:ae})]}),Le.length===0?e.jsx("div",{className:"admit-state-box",children:e.jsx("p",{className:"text-xs text-slate-500",children:"কোনো শিক্ষার্থী পাওয়া যায়নি।"})}):e.jsx("div",{className:"admit-table-scroll",children:e.jsxs("table",{className:"admit-data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:H.size===Le.length&&Le.length>0,onChange:Wt,className:"cursor-pointer"})}),e.jsx("th",{style:{width:"65px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"ছবি"}),e.jsx("th",{style:{width:"100px"},children:"আইডি"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px"},children:"বিভাগ"}),e.jsx("th",{style:{width:"90px"},children:"শাখা"}),e.jsx("th",{style:{width:"130px",textAlign:"center"},children:"কক্ষ নম্বর (Room)"})]})}),e.jsx("tbody",{children:Le.map(l=>{var P,W,V,X;const b=l._id||l.id,v=H.has(b),Q=de(((P=l.currentEnrollment)==null?void 0:P.rollNumber)||l.rollNumber||l.roll,"—"),O=Es(l,"—"),te=de(l.studentId||l.admissionNumber,"—"),c=de(((W=l.currentEnrollment)==null?void 0:W.section)||l.section||(Ce!=="all"?Ce:"—"),"—"),k=de(l.department||((V=l.currentEnrollment)==null?void 0:V.department)||l.stream,"সাধারণ"),N=de(u[b]||ee,"১০২"),q=l.photo||((X=l.user)==null?void 0:X.photo)||Xs;return e.jsxs("tr",{className:v?"row-selected":"",children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:v,onChange:()=>Rt(b),className:"cursor-pointer"})}),e.jsx("td",{style:{textAlign:"center",fontWeight:"bold"},children:e.jsx("span",{className:"admit-roll-pill",children:Q})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("div",{className:"admit-table-avatar",children:e.jsx("img",{src:q,alt:""})})}),e.jsx("td",{style:{fontFamily:"monospace",color:"#64748b"},children:te}),e.jsx("td",{style:{fontWeight:"600",color:"#0f172a"},children:O}),e.jsx("td",{style:{color:"#475569"},children:k}),e.jsx("td",{style:{color:"#475569"},children:c}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",value:N,onChange:le=>{const fe=le.target.value;tt(ge=>({...ge,[b]:fe}))},className:"admit-table-room-input"})})]},b)})})]})})]}),Ne==="settings"&&e.jsxs("div",{className:"admit-settings-card no-print",children:[e.jsxs("div",{className:"admit-settings-hdr",children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(on,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"কার্ডে কোন কোন উপাদান প্রদর্শন করতে চান? (ক্লিক করে অন / অফ করুন)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"যে যে তথ্য প্রবেশপত্রে রাখতে চান সেগুলোতে ক্লিক করে টিকচিহ্ন রাখুন। পরিবর্তনগুলো সাথে সাথে লাইভ প্রিভিউতে দৃশ্যমান হবে।"})]}),e.jsx("div",{className:"admit-toggles-grid",children:[{key:"room",label:"কক্ষ নম্বর (Room No)",desc:"পরীক্ষার হল/রুম নং প্রদর্শন"},{key:"exam",label:"পরীক্ষার নাম (Exam Name)",desc:"অনুমতি বাক্যসহ পরীক্ষার নাম"},{key:"group",label:"বিভাগ / গ্রুপ (Group)",desc:"হিফজ/নাজেরা/জেনারেল বিভাগ"},{key:"section",label:"শাখা (Section)",desc:"শ্রেণির শাখা বা সেকশন"},{key:"version",label:"ভার্সন (Version)",desc:"বাংলা / ইংলিশ ভার্সন লেবেল"},{key:"shift",label:"শিফট (Shift)",desc:"প্রভাতী / দিবা শিফট"},{key:"session",label:"সেশন / শিক্ষাবর্ষ",desc:"বর্তমান শিক্ষাবর্ষ ২০২৬"},{key:"studentId",label:"ছাত্র আইডি (Student ID)",desc:"ইউনিক স্টুডেন্ট আইডি নম্বর"},{key:"photo",label:"শিক্ষার্থীর ছবি (Photo)",desc:"পাসপোর্ট সাইজ ছবি ফ্রেম"},{key:"teacherSig",label:"শ্রেণি শিক্ষক স্বাক্ষর",desc:"বাম পাশের ডিজিটাল স্বাক্ষর ও দাগ"},{key:"principalSig",label:"অধ্যক্ষ / প্রধান শিক্ষক স্বাক্ষর",desc:"ডান পাশের ডিজিটাল স্বাক্ষর ও নাম"},{key:"issueDate",label:"ইস্যুর তারিখ (Issue Date)",desc:"কার্ড ইস্যু করার তারিখ"},{key:"watermark",label:"মাদরাসা লোগো জলছাপ",desc:"কার্ডের ব্যাকগ্রাউন্ডে জলছাপ"}].map(l=>{const b=M[l.key];return e.jsxs("button",{type:"button",onClick:()=>Gt(l.key),className:`admit-toggle-card ${b?"active":""}`,children:[e.jsx("div",{className:`admit-toggle-checkbox ${b?"active":""}`,children:b&&e.jsx(Mn,{size:12,strokeWidth:3})}),e.jsxs("div",{children:[e.jsx("div",{className:"admit-toggle-label",children:l.label}),e.jsx("div",{className:"admit-toggle-desc",children:l.desc})]})]},l.key)})}),e.jsx("div",{className:"admit-settings-hdr",style:{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"admit-settings-title",children:[e.jsx(Ct,{size:18,className:"text-emerald-600"}),e.jsx("span",{children:"উল্টো পিঠের বিশেষ জ্ঞাতব্য কাস্টমাইজেশন (Landscape Backside)"})]}),e.jsx("p",{className:"admit-settings-sub",children:"এখান থেকে প্রবেশপত্রের উল্টো পিঠে প্রিন্ট হওয়া নিয়মাবলী ও তথ্য পরিবর্তন করতে পারবেন।"})]}),e.jsx("button",{type:"button",className:"admit-pill-btn",style:{border:"1px solid #cbd5e1",borderRadius:"8px",padding:"6px 12px"},onClick:()=>G(bs),children:"ডিফল্ট রিসেট"})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"শিরোনাম"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.title,onChange:l=>G(b=>({...b,title:l.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য লেবেল"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.noteLabel,onChange:l=>G(b=>({...b,noteLabel:l.target.value}))})]}),e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বিশেষ দ্রষ্টব্য (বি: দ্র:) লেখা"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.noteText,onChange:l=>G(b=>({...b,noteText:l.target.value}))})]}),(I.rules||[]).map((l,b)=>e.jsxs("div",{style:{gridColumn:"1 / -1"},children:[e.jsxs("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:["নিয়ম ",b+1]}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:l,onChange:v=>{const Q=[...I.rules||[]];Q[b]=v.target.value,G(O=>({...O,rules:Q}))}})]},`rule-edit-${b}`)),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"আদেশক্রমে (লাইন ১)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.authorityLine1,onChange:l=>G(b=>({...b,authorityLine1:l.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"মাদরাসা কর্তৃপক্ষ (লাইন ২)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},value:I.authorityLine2,onChange:l=>G(b=>({...b,authorityLine2:l.target.value}))})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,marginBottom:"4px",color:"#334155"},children:"বাম নিচের ব্যাজ (ঐচ্ছিক, যেমন: বি: ১৪)"}),e.jsx("input",{type:"text",className:"admit-room-input",style:{width:"100%"},placeholder:"খালি রাখলে দেখাবে না",value:I.footerLeftBadge||"",onChange:l=>G(b=>({...b,footerLeftBadge:l.target.value}))})]})]})]}),e.jsx("div",{className:"admit-print-only-container",ref:gt,children:Ot==="backside_only"?e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(l=>e.jsx(Ts,{config:I},`print-back-only-${l}`))}):oe.length>0&&Ve.map((l,b)=>e.jsxs(Qa.Fragment,{children:[e.jsx("div",{className:`a4-page-sheet a4-sheet-layout-${Ie} ${Ge==="landscape"?"a4-landscape":""}`,children:l.map(v=>{var X,le,fe,ge;const Q=v._id||v.id,O=Es(v,"MD. STUDENT"),te=de(((X=v.currentEnrollment)==null?void 0:X.rollNumber)||v.rollNumber||v.roll,"—"),c=de(v.studentId||v.admissionNumber,"—"),k=de(((le=v.currentEnrollment)==null?void 0:le.section)||v.section||(Ce!=="all"?Ce:"—"),"—"),N=de(v.department||((fe=v.currentEnrollment)==null?void 0:fe.department)||v.stream,"All"),q=de(u[Q]||ee,"১০২"),P=v.photo||((ge=v.user)==null?void 0:ge.photo)||Xs,W=de((ne==null?void 0:ne.name)||(ne==null?void 0:ne.title),"Annual Examination 2026"),V=de((pe==null?void 0:pe.name)||(pe==null?void 0:pe.banglaName)||(pe==null?void 0:pe.code),"");return e.jsx("div",{className:"admit-card",children:e.jsxs("div",{className:"admit-card-inner-frame",children:[M.watermark&&e.jsx("img",{src:"/images/madrasah_logo.png",onError:me=>{me.target.src="./images/madrasah_logo.png"},className:"card-watermark",alt:"Watermark"}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("img",{src:"/images/madrasah_logo.png",onError:me=>{me.target.src="./images/madrasah_logo.png"},className:"card-logo",alt:"Logo"}),e.jsxs("div",{className:"card-titles",children:[e.jsx("div",{className:"inst-name",children:F==="bn"?de(z.madrasahName,"আন্-নূর ইসলামিক একাডেমি"):"AN-NUR ISLAMIC ACADEMY"}),e.jsx("div",{className:"inst-sub",children:F==="bn"?de(z.address,"শাহীবাগ জামে মসজিদ সংলগ্ন, চাঁপাইনবাবগঞ্জ সদর"):"Adjacent to Shahibag Jame Mosque, Sadar, Chapainawabganj"})]})]}),e.jsxs("div",{className:"badge-date-row",children:[e.jsx("div",{className:"admit-pill",children:F==="bn"?"প্রবেশপত্র (Admit Card)":"Admit Card"}),M.issueDate&&e.jsxs("div",{className:"issue-date-label",children:[e.jsx("span",{children:F==="bn"?"ইস্যুর তারিখ:":"Issue Date:"})," ",e.jsx("span",{children:ls(Ft)})]})]}),e.jsxs("div",{className:"student-details-wrapper",children:[e.jsxs("div",{className:"info-columns-container",children:[e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"নাম":"Name"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val uppercase",children:O})]}),M.group&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"গ্রুপ/বিভাগ":"Group"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:N})]}),M.studentId&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ছাত্র আইডি":"Student ID"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:c})]}),M.room&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"কক্ষ নম্বর":"Room No"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val room-badge",children:q})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"রোল নং":"Roll"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:te})]}),M.shift&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শিফট":"Shift"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Morning"})]}),M.version&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"ভার্সন":"Version"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:"Bangla"})]}),M.session&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"সেশন":"Session"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:new Date().getFullYear()})]}),e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শ্রেণি":"Class"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:V})]}),M.section&&e.jsxs("div",{className:"detail-row",children:[e.jsx("span",{className:"detail-label",children:F==="bn"?"শাখা":"Section"}),e.jsx("span",{className:"detail-colon",children:":"}),e.jsx("span",{className:"detail-val",children:k})]})]}),M.photo&&e.jsx("div",{className:"student-photo-box",children:e.jsx("img",{src:P,alt:"Photo"})})]}),M.exam&&e.jsxs("div",{className:"permission-statement",children:[e.jsx("span",{children:F==="bn"?"কে নিম্নোক্ত পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করা হলো:":"has been permitted to sit for the"}),e.jsx("span",{className:"exam-name",children:W})]}),e.jsxs("div",{className:"signatures-row",children:[M.teacherSig?e.jsxs("div",{className:"signature-block",children:[Be?e.jsx("img",{src:Be,alt:"Class Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"শ্রেণি শিক্ষক":"Class Teacher"})]}):e.jsx("div",{}),M.principalSig?e.jsxs("div",{className:"signature-block",children:[Ae?e.jsx("img",{src:Ae,alt:"Head Teacher Signature",className:"signature-img"}):e.jsx("div",{className:"signature-spacer"}),e.jsx("div",{className:"sig-line"}),e.jsx("div",{className:"sig-title",children:F==="bn"?"মুহতামিম / প্রতিষ্ঠান প্রধান":"Head Teacher"})]}):e.jsx("div",{})]})]})]})},`print-${Q}`)})}),Ee&&e.jsx("div",{className:"a4-page-sheet a4-sheet-layout-4 a4-landscape a4-backside-sheet",children:[0,1,2,3].map(v=>e.jsx(Ts,{config:I},`print-back-${b}-${v}`))})]},`print-group-${b}`))}),e.jsx("style",{ref:Yt,children:`
        /* --- Print-Only Container: hidden on screen, visible on print --- */
        .admit-print-only-container {
          display: none;
        }

        /* --- Container Workspace --- */
        .admit-generator-wrapper {
          --admit-font-scale: ${U/100};
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
          size: A4 ${Ot==="backside_only"||Ge==="landscape"?"landscape":"portrait"};
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
      `})]})}const Qn=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];function Cs(m){if(!m)return"";const $=new Date(`${m}T00:00:00`);return Number.isNaN($.getTime())?"":Qn[$.getDay()]}function Os(m){if(!m)return"";const $=String(m).split("-");if($.length!==3)return m;const[T,z,xe]=$;return lt(`${xe}/${z}/${T.slice(-2)}`)}function zt(m){return String(m||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pn(m,$="আন্-নূর ইসলামিক একাডেমি"){var E;const T=((E=m==null?void 0:m.schedule)==null?void 0:E.kind)==="matrix"?m.schedule:m;if(!T||!Array.isArray(T.dates)||!Array.isArray(T.rows))return;const z=m.title||T.title||"পরীক্ষার রুটিন",xe=T.startTime||"পরীক্ষা শুরু : সকাল ৯ টা।",ie=T.footerNote||"",ce=T.signatureRole||"প্রধান শিক্ষক,",Te=T.signatureName||"",L=T.signatureOrg||$,Ue=T.dates.map(he=>{const $e=he.dateLabel||Os(he.date)||"তারিখ",Qe=he.dayLabel||Cs(he.date)||"";return`<th><div>${zt($e)}</div>${Qe?`<div style="font-weight:600;margin-top:2px;">${zt(Qe)}</div>`:""}</th>`}).join(""),Ce=T.rows.map((he,$e)=>{const Qe=T.dates.map(Oe=>{const dt=(he.cells&&he.cells[Oe.id]?String(he.cells[Oe.id]).trim():"")||"-";return`<td>${zt(dt).replace(/\n/g,"<br/>")}</td>`}).join("");return`<tr class="${$e%2===1?"zebra":""}">
        <td class="class-col">${zt(he.className)}</td>
        ${Qe}
      </tr>`}).join(""),ot=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${zt(z)}</title>
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
    <h1 class="title">${zt(z)}</h1>
    ${`<div class="sub-time">${zt(xe)}</div>`}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">তারিখ</th>
          ${Ue}
        </tr>
      </thead>
      <tbody>
        ${Ce}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${ie?`<div class="note-box">${zt(ie).replace(/\n/g,"<br/>")}</div>`:"<div></div>"}
      <div class="sig-box">
        ${`<div>${zt(ce)}</div>`}
        ${Te?`<div>${zt(Te)}</div>`:""}
        ${L?`<div>${zt(L)}</div>`:""}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,be=window.open("","_blank","width=1100,height=750");be&&(be.document.open(),be.document.write(ot),be.document.close())}function Jn({routine:m}){var T;const $=((T=m==null?void 0:m.schedule)==null?void 0:T.kind)==="matrix"?m.schedule:null;return $?e.jsxs("div",{children:[$.startTime&&e.jsx("div",{style:{fontSize:"0.88rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:$.startTime}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,minWidth:"90px"},children:"তারিখ"}),($.dates||[]).map(z=>e.jsxs("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,minWidth:"110px"},children:[e.jsx("div",{children:z.dateLabel||Os(z.date)}),(z.dayLabel||Cs(z.date))&&e.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600},children:z.dayLabel||Cs(z.date)})]},z.id))]})}),e.jsx("tbody",{children:($.rows||[]).map((z,xe)=>e.jsxs("tr",{style:{background:xe%2===1?"#e2e8f0":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:700,color:"#0f172a"},children:z.className}),($.dates||[]).map(ie=>{const ce=(z.cells&&z.cells[ie.id]?String(z.cells[ie.id]).trim():"")||"-";return e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",color:"#0f172a",whiteSpace:"pre-line"},children:ce},ie.id)})]},z.id||xe))})]})}),($.footerNote||$.signatureName||$.signatureOrg)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"16px",flexWrap:"wrap",marginTop:"12px"},children:[$.footerNote?e.jsx("div",{style:{border:"1px solid #94a3b8",padding:"8px 12px",borderRadius:"6px",fontSize:"0.83rem",maxWidth:"640px",background:"#f8fafc",color:"#1e293b"},children:$.footerNote}):e.jsx("div",{}),e.jsxs("div",{style:{textAlign:"center",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",marginLeft:"auto"},children:[$.signatureRole&&e.jsx("div",{children:$.signatureRole}),$.signatureName&&e.jsx("div",{children:$.signatureName}),$.signatureOrg&&e.jsx("div",{children:$.signatureOrg})]})]})]}):null}function Xn({initialRoutine:m=null,classes:$=[],subjects:T=[],exams:z=[],selectedExam:xe=null,madrasahName:ie="আন্-নূর ইসলামিক একাডেমি",onSaved:ce,onClose:Te}){var At;const L=((At=m==null?void 0:m.schedule)==null?void 0:At.kind)==="matrix"?m.schedule:null,[Ue,Ce]=i.useState([]);i.useEffect(()=>{T.length>0||Z.get("/students/subjects").then(x=>{var A,I;(A=x.data)!=null&&A.success&&Ce(((I=x.data.data)==null?void 0:I.subjects)||[])}).catch(()=>{})},[T.length]);const ot=i.useMemo(()=>{const A=(T.length>0?T:Ue).map(I=>typeof I=="string"?I:I==null?void 0:I.name).map(I=>String(I||"").trim()).filter(I=>I&&I!=="-");return[...new Set(A)]},[T,Ue]),be=i.useMemo(()=>[...$].sort((x,A)=>(Number(x.order)||999)-(Number(A.order)||999)),[$]),[E,he]=i.useState((m==null?void 0:m.title)||(xe?`${xe.name} / ২০২৬ ইং`:"মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং")),[$e,Qe]=i.useState((m==null?void 0:m.exam)||(xe==null?void 0:xe._id)||""),[Oe,dt]=i.useState((m==null?void 0:m.stream)||"all"),[It,Je]=i.useState((m==null?void 0:m.status)||"published"),[ct,J]=i.useState((L==null?void 0:L.startTime)||"পরীক্ষা শুরু : সকাল ৯ টা।"),[ae,H]=i.useState(()=>{var x;return(x=L==null?void 0:L.dates)!=null&&x.length?L.dates:[{id:"d_1",date:"",dateLabel:"০৭/১১/২৬",dayLabel:"শনিবার"},{id:"d_2",date:"",dateLabel:"০৮/১১/২৬",dayLabel:"রবিবার"},{id:"d_3",date:"",dateLabel:"০৯/১১/২৬",dayLabel:"সোমবার"},{id:"d_4",date:"",dateLabel:"১০/১১/২৬",dayLabel:"মঙ্গলবার"},{id:"d_5",date:"",dateLabel:"১১/১১/২৬",dayLabel:"বুধবার"},{id:"d_6",date:"",dateLabel:"১২/১১/২৬",dayLabel:"বৃহস্পতিবার"}]}),[ve,u]=i.useState(()=>{var x;return(x=L==null?void 0:L.rows)!=null&&x.length?L.rows:be.length>0?be.map((A,I)=>({id:`r_${A._id||I}`,classId:A._id||"",className:A.name,cells:{}})):[{id:"r_1",classId:"",className:"প্লে",cells:{}},{id:"r_2",classId:"",className:"নার্সারি",cells:{}},{id:"r_3",classId:"",className:"প্রথম",cells:{}},{id:"r_4",classId:"",className:"দ্বিতীয়",cells:{}},{id:"r_5",classId:"",className:"তৃতীয়",cells:{}}]}),[tt,ee]=i.useState((L==null?void 0:L.footerNote)??"বিঃদ্রঃ মডেল টেস্ট পরীক্ষার ফি, নভেম্বর / ২০২৬ ইং মাসের বেতনসহ যাবতীয় পাওনা পরিশোধ করে শ্রেণি শিক্ষকের নিকট থেকে মডেল টেস্ট পরীক্ষার প্রবেশ পত্র সংগ্রহ করুন।"),[xt,Ft]=i.useState((L==null?void 0:L.signatureRole)??"প্রধান শিক্ষক,"),[_t,Ne]=i.useState((L==null?void 0:L.signatureName)??"হাফেজ মাও. মোঃ আরিফুর রহমান"),[ht,Pe]=i.useState((L==null?void 0:L.signatureOrg)??ie),[jt,F]=i.useState(!1),[Xe,Ie]=i.useState(""),[qe,Ze]=i.useState(!1),[He,Ge]=i.useState(null),vt=i.useMemo(()=>{const x=new Set(ve.map(A=>String(A.className||"").trim().toLowerCase()));return be.filter(A=>!x.has(String(A.name||"").trim().toLowerCase()))},[be,ve]),Ee=()=>{var G;const x=`d_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,A=(G=ae[ae.length-1])==null?void 0:G.date;let I="";if(A){const M=new Date(`${A}T00:00:00`);Number.isNaN(M.getTime())||(M.setDate(M.getDate()+1),I=M.toISOString().slice(0,10))}H(M=>[...M,{id:x,date:I,dateLabel:I?Os(I):"নতুন তারিখ",dayLabel:I?Cs(I):"বার"}])},st=x=>{ae.length<=1||H(A=>A.filter(I=>I.id!==x))},Ot=(x,A)=>{H(I=>I.map(G=>G.id===x?{...G,date:A,dateLabel:A?Os(A):G.dateLabel,dayLabel:A?Cs(A):G.dayLabel}:G))},$t=(x,A,I)=>{H(G=>G.map(M=>M.id===x?{...M,[A]:I}:M))},U=x=>{u(A=>A.filter(I=>I.id!==x))},re=x=>{const A=`r_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;u(I=>[...I,{id:A,classId:x._id||"",className:x.name,cells:{}}]),F(!1),Ie("")},Be=(x,A,I)=>{u(G=>G.map(M=>M.id===x?{...M,cells:{...M.cells||{},[A]:I}}:M))},Nt=()=>{const x=z.find(A=>A._id===$e);return{_id:(m==null?void 0:m._id)||void 0,title:E.trim()||"সম্মিলিত পরীক্ষার রুটিন",exam:$e||null,examName:(x==null?void 0:x.name)||(m==null?void 0:m.examName)||"",classLevel:null,className:"সম্মিলিত",stream:Oe,status:It,instructions:tt,schedule:{kind:"matrix",startTime:ct,dates:ae,rows:ve,footerNote:tt,signatureRole:xt,signatureName:_t,signatureOrg:ht}}},Ae=async()=>{var x,A,I;if(!E.trim()){Ge({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}if(ve.length===0){Ge({type:"error",message:"অন্তত একটি শ্রেণির রো যোগ করুন"});return}Ze(!0),Ge(null);try{const G=await Z.post("/exams/routines",Nt());(x=G.data)!=null&&x.success&&(Ge({type:"success",message:"সম্মিলিত রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!"}),ce&&ce(G.data.data.routine))}catch(G){Ge({type:"error",message:((I=(A=G.response)==null?void 0:A.data)==null?void 0:I.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{Ze(!1)}};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Lt,{size:20,style:{color:"var(--primary)"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700},children:m?"সম্মিলিত ম্যাট্রিক্স রুটিন সম্পাদনা":"নতুন সম্মিলিত ম্যাট্রিক্স রুটিন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>pn(Nt(),ie),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:15})," প্রিন্ট প্রিভিউ"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:Ae,disabled:qe,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(cn,{size:15})," ",qe?"সংরক্ষণ হচ্ছে...":"রুটিন সেভ করুন"]}),Te&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:Te,children:[e.jsx(ea,{size:16})," বন্ধ করুন"]})]})]}),He&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:He.type==="success"?"#dcfce7":"#fee2e2",color:He.type==="success"?"#166534":"#991b1b",fontSize:"0.88rem",fontWeight:600},children:[He.type==="success"?e.jsx(rn,{size:16}):e.jsx(us,{size:16}),e.jsx("span",{children:He.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",value:E,onChange:x=>he(x.target.value),placeholder:"যেমন: মডেল টেস্ট পরীক্ষার রুটিন / ২০২৬ ইং"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"পরীক্ষা শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",value:ct,onChange:x=>J(x.target.value),placeholder:"পরীক্ষা শুরু : সকাল ৯ টা।"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"সংযুক্ত পরীক্ষা (ঐচ্ছিক)"}),e.jsxs("select",{className:"form-input form-select",value:$e,onChange:x=>Qe(x.target.value),children:[e.jsx("option",{value:"",children:"সাধারণ / সকল পরীক্ষা"}),z.map(x=>e.jsx("option",{value:x._id,children:x.name},x._id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিভাগ ও স্ট্যাটাস"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("select",{className:"form-input form-select",value:Oe,onChange:x=>dt(x.target.value),children:[e.jsx("option",{value:"all",children:"সকল বিভাগ"}),e.jsx("option",{value:"noorani",children:"নূরানী"}),e.jsx("option",{value:"hifz",children:"হিফজ"}),e.jsx("option",{value:"kitab",children:"কিতাব"})]}),e.jsxs("select",{className:"form-input form-select",value:It,onChange:x=>Je(x.target.value),children:[e.jsx("option",{value:"published",children:"প্রকাশিত"}),e.jsx("option",{value:"draft",children:"খসড়া"})]})]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",position:"relative"},children:[e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>F(x=>!x),style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(Xt,{size:15})," শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)"]}),jt&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"6px",zIndex:30,background:"var(--bg-card, #fff)",border:"1px solid var(--border-color)",borderRadius:"10px",padding:"12px",boxShadow:"0 10px 25px rgba(15,23,42,0.18)",minWidth:"280px"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"তালিকা থেকে শ্রেণি নির্বাচন করুন:"}),vt.length>0?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"10px"},children:vt.map(x=>e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>re(x),style:{fontSize:"0.8rem",padding:"4px 10px"},children:["+ ",x.name]},x._id))}):e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px"},children:"সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।"}),e.jsxs("div",{style:{display:"flex",gap:"6px",borderTop:"1px solid var(--border-color)",paddingTop:"8px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)",value:Xe,onChange:x=>Ie(x.target.value),style:{fontSize:"0.82rem",padding:"5px 8px",height:"32px"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>{Xe.trim()&&re({_id:"",name:Xe.trim()})},children:"যোগ"})]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Ee,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(Xt,{size:15})," তারিখ কলাম যোগ করুন"]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto",marginBottom:"16px"},children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",margin:0,minWidth:"720px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",textAlign:"center",fontWeight:800,width:"130px",verticalAlign:"middle"},children:"তারিখ / শ্রেণি"}),ae.map(x=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",minWidth:"145px",verticalAlign:"top",whiteSpace:"normal"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"4px"},children:[e.jsx("input",{type:"date",value:x.date||"",onChange:A=>Ot(x.id,A.target.value),style:{fontSize:"0.72rem",padding:"2px 4px",borderRadius:"4px",border:"1px solid #94a3b8",width:"112px"},title:"তারিখ নির্বাচন করুন (বাংলা বার অটোমেটিক আসবে)"}),ae.length>1&&e.jsx("button",{type:"button",onClick:()=>st(x.id),title:"এই তারিখ কলামটি মুছুন",style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"2px",lineHeight:1},children:e.jsx(ea,{size:14})})]}),e.jsx("input",{type:"text",value:x.dateLabel||"",onChange:A=>$t(x.id,"dateLabel",A.target.value),placeholder:"০৭/১১/২৬",style:{display:"block",width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.82rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}}),e.jsx("input",{type:"text",value:x.dayLabel||"",onChange:A=>$t(x.id,"dayLabel",A.target.value),placeholder:"শনিবার",style:{display:"block",width:"100%",textAlign:"center",fontWeight:600,fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}})]})},x.id)),e.jsx("th",{style:{border:"1px solid #94a3b8",width:"56px",textAlign:"center"},children:"মুছুন"})]})}),e.jsx("tbody",{children:ve.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:ae.length+2,style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:["কোনো শ্রেণির রো নেই। উপরে ",e.jsx("strong",{children:'"+ শ্রেণি যোগ করুন"'})," বাটনে ক্লিক করুন।"]})}):ve.map((x,A)=>e.jsxs("tr",{style:{background:A%2===1?"#f1f5f9":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"6px",verticalAlign:"middle"},children:e.jsx("input",{type:"text",value:x.className,onChange:I=>u(G=>G.map(M=>M.id===x.id?{...M,className:I.target.value}:M)),style:{width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.86rem",padding:"5px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"transparent"}})}),ae.map(I=>e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"5px",verticalAlign:"middle"},children:[e.jsxs("select",{value:"",onChange:G=>{const M=G.target.value;if(!M)return;if(M==="__CLEAR__"){Be(x.id,I.id,"");return}const at=String(x.cells&&x.cells[I.id]||"").trim(),We=!at||at==="-"?M:`${at} + ${M}`;Be(x.id,I.id,We)},style:{width:"100%",fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #94a3b8",marginBottom:"4px",background:"#f8fafc",color:"#0f172a"},children:[e.jsx("option",{value:"",children:"+ বিষয় বাছুন..."}),e.jsx("option",{value:"__CLEAR__",children:"— খালি করুন (-)"}),ot.map(G=>e.jsx("option",{value:G,children:G},G))]}),e.jsx("textarea",{rows:2,value:x.cells&&x.cells[I.id]||"",onChange:G=>Be(x.id,I.id,G.target.value),placeholder:"-",style:{width:"100%",textAlign:"center",fontSize:"0.83rem",padding:"4px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",resize:"vertical",background:"#ffffff"}})]},I.id)),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",verticalAlign:"middle"},children:e.jsx("button",{type:"button",onClick:()=>U(x.id),title:`${x.className} শ্রেণির রো মুছে ফেলুন`,style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"6px"},children:e.jsx(zs,{size:16})})})]},x.id))})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিঃদ্রঃ (নোট বক্স)"}),e.jsx("textarea",{rows:3,className:"form-input",value:tt,onChange:x=>ee(x.target.value),style:{width:"100%",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600,marginBottom:0},children:"স্বাক্ষর ব্লক (ডান পাশ)"}),e.jsx("input",{type:"text",className:"form-input",value:xt,onChange:x=>Ft(x.target.value),placeholder:"প্রধান শিক্ষক,",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:_t,onChange:x=>Ne(x.target.value),placeholder:"প্রধান শিক্ষকের নাম",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:ht,onChange:x=>Pe(x.target.value),placeholder:"প্রতিষ্ঠানের নাম",style:{fontSize:"0.84rem"}})]})]})]})}const Kn=[{value:"term_exam",label:"সাময়িক পরীক্ষা (Term Exam 1-3)"},{value:"monthly_test",label:"মাসিক ক্লাস টেস্ট (Monthly Test 1-12)"},{value:"model_test",label:"মডেল টেস্ট (Model Test 1-3)"},{value:"weekly_sabina",label:"সাপ্তাহিক সবিনা পরীক্ষা (Weekly Sabina)"},{value:"tanzim_board",label:"তানজিমুল মাদারিস বোর্ড পরীক্ষা"},{value:"huffaz_board",label:"হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা"},{value:"general",label:"সাধারণ পরীক্ষা (General Exam)"}],Ks=[{value:"january",label:"জানুয়ারি (১ম মাস)"},{value:"february",label:"ফেব্রুয়ারি (২য় মাস)"},{value:"march",label:"মার্চ (৩য় মাস)"},{value:"april",label:"এপ্রিল (৪র্থ মাস)"},{value:"may",label:"মে (৫ম মাস)"},{value:"june",label:"জুন (৬ষ্ঠ মাস)"},{value:"july",label:"জুলাই (৭ম মাস)"},{value:"august",label:"আগস্ট (৮ম মাস)"},{value:"september",label:"সেপ্টেম্বর (৯ম মাস)"},{value:"october",label:"অক্টোবর (১০ম মাস)"},{value:"november",label:"নভেম্বর (১১তম মাস)"},{value:"december",label:"ডিসেম্বর (১২তম মাস)"}];function el(m,$=!1){if(!m)return"—";const T=$?" (যৌথ)":"";return m===1?`🥇 ১ম স্থান${T}`:m===2?`🥈 ২য় স্থান${T}`:m===3?`🥉 ৩য় স্থান${T}`:m===4?`৪র্থ${T}`:m===5?`৫ম${T}`:m===6?`৬ষ্ঠ${T}`:m===7?`৭ম${T}`:m===8?`৮ম${T}`:m===9?`৯ম${T}`:m===10?`১০ম${T}`:`${m}তম${T}`}function wl({initialViewMode:m}){var ca,pa,ma,xa,ha,ga,fa,ua,ba,ya,ja,va,Na,wa,ka,Sa,za,Ca,Ia,_a,$a,Aa,Wa,La,Ma,Ra,Ta,Ea,Ba,Da,Fa,Oa,Pa,Ha,Ga;const $=Rn(),T=Tn(),{user:z}=ln(),{madrasahName:xe,branchName:ie}=ta(z),[ce,Te]=i.useState([]),[L,Ue]=i.useState([]),[Ce,ot]=i.useState(!0),[be,E]=i.useState(null),[he,$e]=i.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__exams");return t?JSON.parse(t):["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}catch{return["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক"]}}),[Qe,Oe]=i.useState(!1),[dt,It]=i.useState(!1),[Je,ct]=i.useState(null),[J,ae]=i.useState({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),[H,ve]=i.useState([]),[u,tt]=i.useState(null),[ee,xt]=i.useState([]),[Ft,_t]=i.useState([]),[Ne,ht]=i.useState(""),[Pe,jt]=i.useState(""),[F,Xe]=i.useState(!1),[Ie,qe]=i.useState([]),[Ze,He]=i.useState({}),[Ge,vt]=i.useState(!1),[Ee,st]=i.useState([]),Ot=m==="routine"||(T==null?void 0:T.pathname)==="/exam-routine",$t=m==="admit_card"||(T==null?void 0:T.pathname)==="/admit-card",[U,re]=i.useState(Ot?"routine":$t?"admit_card":"marks"),[Be,Nt]=i.useState(!1),[Ae,At]=i.useState("all"),[x,A]=i.useState([]),[I,G]=i.useState([]),[M,at]=i.useState(!1),[We,Mt]=i.useState("landscape"),[Wt,Rt]=i.useState(""),[Le,oe]=i.useState("all"),[ne,pe]=i.useState(null),[Pt,Tt]=i.useState(!1),[Ht,es]=i.useState([]),[Ve,Gt]=i.useState(""),[gt,Yt]=i.useState("all"),[ft,is]=i.useState(""),[Ut,l]=i.useState([]),[b,v]=i.useState(!1),[Q,O]=i.useState(new Set),[te,c]=i.useState(""),[k,N]=i.useState("all"),[q,P]=i.useState(!1),[W,V]=i.useState(null),[X,le]=i.useState([]),[fe,ge]=i.useState(!1),[me,Ke]=i.useState("all"),[wt,qt]=i.useState("all"),[ut,Is]=i.useState("all"),[_s,ts]=i.useState(!1),[$s,Zt]=i.useState(!1),[ss,Vt]=i.useState(null),[rs,ys]=i.useState(!1),[os,nt]=i.useState(null),[sa,Ps]=i.useState(null),[pt,bt]=i.useState({title:"",exam:"",examName:"",classLevel:"",className:"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[]}),kt=(z==null?void 0:z.userType)==="guardian",As=(z==null?void 0:z.userType)==="student",ke=As||kt,[yt,mn]=i.useState([]),[Et,aa]=i.useState(""),[Bt,Hs]=i.useState(null);i.useEffect(()=>{if(be){const t=setTimeout(()=>E(null),4e3);return()=>clearTimeout(t)}},[be]);const Qt=async(t=null)=>{ot(!0);try{const s={},a=t||Et;kt&&a&&(s.studentId=a);const n=await Z.get("/exams",{params:s});n.data.success&&Te(n.data.data.exams||[])}catch(s){console.error("Error fetching exams:",s),E({type:"error",message:"পরীক্ষার তালিকা লোড করতে সমস্যা হয়েছে"})}finally{ot(!1)}},xn=t=>{var a,n;aa(t);const s=yt.find(o=>o._id===t);if((a=s==null?void 0:s.currentEnrollment)!=null&&a.classLevel){const o=s.currentEnrollment.classLevel,d=typeof o=="object"?o:{_id:o,name:((n=s.currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Hs(d),c(d._id)}Qt(t),ke&&ws(!1,t)},js=async t=>{if(!t){ve([]);return}try{const s=await Z.get(`/students/subjects?classLevel=${t}`);s.data.success&&ve(s.data.data.subjects||[])}catch(s){console.warn("Failed to fetch subjects for modal",s)}},hn=async()=>{try{const t=await Z.get("/students/classes");t.data.success&&Ue(t.data.data.classes||[])}catch(t){console.error("Error fetching classes:",t)}};i.useEffect(()=>{(async()=>{var s,a,n,o,d,p;if(kt)try{const r=await Z.get("/students",{params:{limit:100}});if(r.data.success&&((s=r.data.data)==null?void 0:s.length)>0){const w=r.data.data;mn(w),aa(w[0]._id);const y=(a=w[0].currentEnrollment)==null?void 0:a.classLevel;if(y){const f=typeof y=="object"?y:{_id:y,name:((n=w[0].currentEnrollment)==null?void 0:n.className)||"শ্রেণি"};Hs(f),c(f._id)}Qt(w[0]._id)}else Qt()}catch(r){console.error("Error loading guardian children",r),Qt()}else if(As){try{const r=await Z.get("/students",{params:{limit:1}});if(r.data.success&&((o=r.data.data)==null?void 0:o.length)>0){const w=r.data.data[0],y=(d=w.currentEnrollment)==null?void 0:d.classLevel;if(y){const f=typeof y=="object"?y:{_id:y,name:((p=w.currentEnrollment)==null?void 0:p.className)||"শ্রেণি"};Hs(f),c(f._id)}}}catch(r){console.error("Error loading student profile for class",r)}Qt()}else Qt();hn(),cs()})(),ke&&ws()},[]),i.useEffect(()=>{U==="student_result"&&u&&Ht.length===0&&bn(u),U==="subject_result"&&ee.length>0&&!Ve&&(Gt(ee[0]._id),Ls(ee[0]._id,gt))},[U,u,ee,Ht.length]);const Ws=t=>{ae({...J,[t.target.name]:t.target.value})},gn=async t=>{var o;ct(t._id);const s=t.examCategory||"general",a=Array.isArray(t.selectedSubjects)?t.selectedSubjects.map(d=>typeof d=="object"?d._id:d):[],n=((o=t.classLevel)==null?void 0:o._id)||"";ae({name:t.name,examCategory:s,termNumber:t.termNumber||1,month:t.month||"january",selectedSubjects:a,classLevel:n,startDate:t.startDate?t.startDate.split("T")[0]:"",endDate:t.endDate?t.endDate.split("T")[0]:"",status:t.status}),n&&js(n),Oe(!0)},fn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিত যে এই পরীক্ষাটি মুছে ফেলতে চান? এর সাথে যুক্ত সমস্ত নম্বর এন্ট্রিও মুছে যাবে।"))try{(await Z.delete(`/exams/${t}`)).data.success&&(E({type:"success",message:"পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!"}),Qt())}catch(n){console.error("Failed to delete exam",n);const o=((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"পরীক্ষা মুছতে সমস্যা হয়েছে";E({type:"error",message:o})}},un=async t=>{var s,a,n,o;if(t.preventDefault(),J.examCategory==="monthly_test"&&((s=J.selectedSubjects)==null?void 0:s.length)!==4){E({type:"error",message:`মাসিক পরীক্ষার জন্য অবশ্যই ৪টি বিষয় নির্বাচন করতে হবে (বর্তমানে নির্বাচিত: ${((a=J.selectedSubjects)==null?void 0:a.length)||0} টি)`});return}It(!0);try{let d;Je?d=await Z.patch(`/exams/${Je}`,J):d=await Z.post("/exams",J),d.data.success&&(Oe(!1),ct(null),ae({name:"",classLevel:"",startDate:"",endDate:"",status:"upcoming"}),E({type:"success",message:Je?"পরীক্ষা সফলভাবে আপডেট করা হয়েছে!":"পরীক্ষা সফলভাবে তৈরি করা হয়েছে!"}),Qt())}catch(d){console.error("Failed to submit exam",d);const p=((o=(n=d.response)==null?void 0:n.data)==null?void 0:o.message)||"পরীক্ষা সংরক্ষণ করতে সমস্যা হয়েছে";E({type:"error",message:p})}finally{It(!1)}},na=async t=>{var a,n,o,d,p,r,w,y;if(tt(t),ht(""),jt(""),qe([]),He({}),st([]),pe(null),Rt(""),oe("all"),Gt(""),Yt("all"),is(""),l([]),O(new Set),ke){Xe(!0);try{const f={examId:t._id};kt&&Et&&(f.studentId=Et);const h=await Z.get("/exams/student-results",{params:f});if((a=h.data)!=null&&a.success&&h.data.data){pe(h.data.data);const g=(n=h.data.data.results)==null?void 0:n[0];st((g==null?void 0:g.subjects)||[])}else{const g=await Z.get("/exams/marks",{params:{exam:t._id,...kt&&Et?{student:Et}:{}}});st(((d=(o=g.data)==null?void 0:o.data)==null?void 0:d.marks)||[])}}catch(f){console.error("Failed to load student detailed results",f);try{const h=await Z.get("/exams/marks",{params:{exam:t._id,...kt&&Et?{student:Et}:{}}});st(((r=(p=h.data)==null?void 0:p.data)==null?void 0:r.marks)||[])}catch{}}finally{Xe(!1)}return}const s=((w=t.classLevel)==null?void 0:w._id)||(typeof t.classLevel=="string"?t.classLevel:null);if(s)try{const f=await Z.get(`/students/subjects?classLevel=${s}`);if(f.data.success){let S=f.data.data.subjects||[];if(t.examCategory==="monthly_test"&&Array.isArray(t.selectedSubjects)&&t.selectedSubjects.length>0){const _=t.selectedSubjects.map(D=>String(typeof D=="object"?D._id:D));S=S.filter(D=>_.includes(String(D._id)))}xt(S)}const h=await Z.get(`/students/sections?classLevel=${s}`);h.data.success&&_t(h.data.data.sections||[]);const g=await Z.get("/students",{params:{classLevel:s,limit:300}});if(g.data.success){const S=g.data.data;let _=Array.isArray(S)?S:(S==null?void 0:S.students)||[];if(_.length===0){const K=(y=(await Z.get("/students",{params:{limit:500}})).data)==null?void 0:y.data;_=Array.isArray(K)?K:(K==null?void 0:K.students)||[]}_.sort((D,K)=>{var ye,we;return it(((ye=D.currentEnrollment)==null?void 0:ye.rollNumber)||D.roll)-it(((we=K.currentEnrollment)==null?void 0:we.rollNumber)||K.roll)}),es(_)}}catch(f){console.error("Failed to fetch subjects/sections for mark entry",f)}},bn=async t=>{var n,o,d;const s=t||u;if(!s)return;const a=((n=s.classLevel)==null?void 0:n._id)||(typeof s.classLevel=="string"?s.classLevel:null);try{const p={limit:300};a&&(p.classLevel=a);const r=await Z.get("/students",{params:p});if((o=r.data)!=null&&o.success){const w=r.data.data;let y=Array.isArray(w)?w:(w==null?void 0:w.students)||[];if(y.length===0&&a){const h=(d=(await Z.get("/students",{params:{limit:500}})).data)==null?void 0:d.data;y=Array.isArray(h)?h:(h==null?void 0:h.students)||[]}y.sort((f,h)=>{var g,S;return it(((g=f.currentEnrollment)==null?void 0:g.rollNumber)||f.roll)-it(((S=h.currentEnrollment)==null?void 0:S.rollNumber)||h.roll)}),es(y)}}catch(p){console.warn("Failed to load class students:",p)}},Gs=async t=>{var n,o;const a=ns(t||Wt);if(!a||!String(a).trim()){E({type:"error",message:"অনুগ্রহ করে শিক্ষার্থীর আইডি লিখুন বা নির্বাচন করুন"});return}Tt(!0),pe(null);try{const d=await Z.get(`/exams/student-results/${encodeURIComponent(String(a).trim())}`,{params:{examId:u==null?void 0:u._id}});d.data.success&&pe(d.data.data)}catch(d){console.error("Failed to load student result",d);const p=((o=(n=d.response)==null?void 0:n.data)==null?void 0:o.message)||"শিক্ষার্থীর ফলাফল পাওয়া যায়নি";E({type:"error",message:p})}finally{Tt(!1)}},Ls=async(t,s)=>{const a=t!==void 0?t:Ve,n=s!==void 0?s:gt;if(!a){E({type:"error",message:"অনুগ্রহ করে বিষয় নির্বাচন করুন"});return}v(!0);try{const o={exam:u==null?void 0:u._id,subject:a},d=await Z.get("/exams/marks",{params:o});if(d.data.success){let p=d.data.data.marks||[];n&&n!=="all"&&(p=p.filter(w=>{var h,g,S,_;const y=(h=w.student)==null?void 0:h.currentEnrollment,f=typeof(y==null?void 0:y.section)=="object"?((g=y==null?void 0:y.section)==null?void 0:g.name)||((S=y==null?void 0:y.section)==null?void 0:S._id):(y==null?void 0:y.section)||((_=w.student)==null?void 0:_.section);return String(f||"")===String(n)})),l(p);const r=new Set(p.map(w=>{var y;return String(((y=w.student)==null?void 0:y._id)||w._id)}));if(O(r),ee.length===0&&p.length>0){const w={};p.forEach(f=>{f.subject&&typeof f.subject=="object"&&f.subject._id&&(w[f.subject._id]=f.subject)});const y=Object.values(w);y.length>0&&xt(y)}}}catch(o){console.error("Failed to load subject marks",o),E({type:"error",message:"বিষয়ের ফলাফল লোড করতে সমস্যা হয়েছে"})}finally{v(!1)}},la=t=>{const s=t.map(o=>{var d;return String(((d=o.student)==null?void 0:d._id)||o._id)}),a=s.length>0&&s.every(o=>Q.has(o)),n=new Set(Q);a?s.forEach(o=>n.delete(o)):s.forEach(o=>n.add(o)),O(n)},yn=t=>{const s=new Set(Q),a=String(t);s.has(a)?s.delete(a):s.add(a),O(s)},Ys=()=>{var w;if(!ne||!ne.results||ne.results.length===0){E({type:"error",message:"প্রিন্ট করার মতো কোনো ফলাফল নেই"});return}const t=ne.student||{},s=ne.results[0]||{},a=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),n=t.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(t.branch)?t.branch:"",o=t.department||"";let d="—";n&&o?d=`${n} (${o})`:n?d=n:o&&(d=o);const p=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>একাডেমিক ফলাফল ও নম্বরপত্র — ${t.name||""}</title>
  ${hs("portrait")}
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
      ${gs({title:"একাডেমিক ফলাফল ও নম্বরপত্র (Student Marksheet)",orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+(s.examName||(u==null?void 0:u.name)||""),metaRight:"<strong>তারিখ:</strong> "+a})}

      <div class="student-badge-card">
        <div class="student-info-grid">
          <div><strong>শিক্ষার্থীর নাম:</strong> ${t.name||"—"}</div>
          <div><strong>শিক্ষার্থী আইডি:</strong> ${t.studentId||"—"}</div>
          <div><strong>শ্রেণি:</strong> ${t.className||((w=u==null?void 0:u.classLevel)==null?void 0:w.name)||"—"}</div>
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
          ${(s.subjects||[]).map((y,f)=>`
            <tr>
              <td class="text-center">${f+1}</td>
              <td class="font-bold">${y.subjectName}</td>
              <td class="text-center">${y.subjectCode||"—"}</td>
              <td class="text-center">${y.totalMarks}</td>
              <td class="text-center font-bold" style="color: #0f766e;">${y.marksObtained}</td>
              <td class="text-center">${y.percentage}%</td>
              <td class="text-center font-bold">${y.grade}</td>
              <td class="text-center">${(y.gradePoint??0).toFixed(1)}</td>
              <td class="text-center font-bold" style="color: ${y.isPassed?"#059669":"#dc2626"};">${y.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
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

      ${fs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,r=window.open("","_blank");r&&(r.document.write(p),r.document.close())},ia=t=>{var o,d,p,r,w,y,f;if(!t||!t.results||t.results.length===0)return e.jsxs("div",{className:"card empty-state",children:[e.jsx(us,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো বিষয়ের নম্বর এন্ট্রি বা প্রকাশ করা হয়নি।"})]});const s=t.student||{},a=t.results[0]||{},n=t.annualCumulative;return e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20",style:{padding:"20px",background:"linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)",border:"1px solid rgba(15, 118, 110, 0.25)",borderRadius:"14px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"var(--primary, #0f766e)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:700,overflow:"hidden"},children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):s.name?s.name.charAt(0):"S"}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontSize:"1.35rem",fontWeight:700,color:"var(--text-primary)"},children:s.name}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"6px",fontSize:"0.86rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:[e.jsx("strong",{children:"আইডি:"})," ",s.studentId||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"শ্রেণি:"})," ",s.className||((o=u==null?void 0:u.classLevel)==null?void 0:o.name)||"—"]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"রোল:"})," ",s.rollNumber||"—"]}),s.section&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"সেকশন:"})," ",s.section]}),s.branch&&!/^[0-9a-fA-F-]{20,40}$/.test(s.branch)&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"শাখা:"})," ",s.branch]}),s.department&&e.jsxs("span",{children:["• ",e.jsx("strong",{children:"বিভাগ:"})," ",s.department]})]})]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Ys,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট / ডাউনলোড"})]}),e.jsx("div",{style:{padding:"8px 14px",borderRadius:"10px",background:a.isPassed?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",color:a.isPassed?"#059669":"#dc2626",fontWeight:700,fontSize:"0.95rem",textAlign:"center"},children:a.isPassed?"✓ উত্তীর্ণ (PASSED)":"✗ অনুত্তীর্ণ (FAILED)"}),a.position&&e.jsxs("div",{style:{padding:"8px 14px",borderRadius:"10px",background:"linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",color:"#b45309",fontWeight:800,fontSize:"1rem",boxShadow:"0 2px 8px rgba(245, 158, 11, 0.2)"},children:["🥇 ",a.position," তম স্থান"]})]})]})}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট প্রাপ্ত নম্বর"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"var(--primary, #0f766e)"},children:[a.totalObtained," / ",a.totalMaxMarks]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সার্বিক শতকরা হার"}),e.jsxs("div",{className:"font-bold text-lg",style:{color:"#0284c7"},children:[a.overallPercentage,"%"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"চূড়ান্ত গ্রেড"}),e.jsx("div",{className:"font-bold text-lg",style:{color:a.overallGrade==="F"?"#dc2626":"#059669"},children:a.overallGrade})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px"},children:[e.jsx("div",{className:"text-muted text-xs",children:"জিপিএ (GPA)"}),e.jsx("div",{className:"font-bold text-lg",style:{color:"#7c3aed"},children:(a.gpa??0).toFixed(2)})]})]}),e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রমিক"}),e.jsx("th",{children:"বিষয়ের নাম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"কোড"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"জিপিএ"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.subjects.map((h,g)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:g+1}),e.jsx("td",{className:"font-semibold",children:h.subjectName}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:h.subjectCode||"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:h.totalMarks}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary, #0f766e)",fontSize:"1rem"},children:h.marksObtained!==null&&typeof h.marksObtained=="object"?h.marksObtained.marksObtained:h.marksObtained}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[h.percentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(h.grade)}`,style:{minWidth:"40px",justifyContent:"center"},children:h.grade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:(h.gradePoint??0).toFixed(1)}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${h.isPassed?"badge-active":"badge-danger"}`,children:h.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},h.markId||g))})]})}),n&&e.jsxs("div",{className:"card mt-20",style:{padding:"16px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{fontSize:"1rem",fontWeight:700,marginBottom:"10px",color:"var(--text-primary)"},children:"🏆 বার্ষিক সমন্বিত সারসংক্ষেপ (Cumulative Summary)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontSize:"0.85rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"১ম সাময়িক:"})," ",((d=n.term1)==null?void 0:d.obtained)||0," / ",((p=n.term1)==null?void 0:p.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"২য় সাময়িক:"})," ",((r=n.term2)==null?void 0:r.obtained)||0," / ",((w=n.term2)==null?void 0:w.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"৩য় সাময়িক:"})," ",((y=n.term3)==null?void 0:y.obtained)||0," / ",((f=n.term3)==null?void 0:f.max)||0]}),e.jsxs("div",{children:[e.jsx("strong",{children:"সর্বমোট:"})," ",n.grandTotalObtained," / ",n.grandTotalMaxMarks," (",n.overallPercentage,"%)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"বার্ষিক মেধা স্থান:"})," ",e.jsx("span",{style:{color:"#b45309",fontWeight:700},children:n.rankText})]})]})]})]})},ra=t=>{var h;const s=(t||Ut).filter(g=>{var S;return Q.has(String(((S=g.student)==null?void 0:S._id)||g._id))});if(s.length===0){E({type:"error",message:"প্রিন্ট করার জন্য অন্তত একজন শিক্ষার্থী নির্বাচন (টিকমার্ক) করুন"});return}const a=ee.find(g=>g._id===Ve),n=(a==null?void 0:a.name)||"বিষয়",o=Number(a==null?void 0:a.totalMarks)||100,d=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),p=s.length,r=s.filter(g=>{const S=Number(g.marksObtained)||0;return(o>0?S/o*100:S)>=33}).length,w=p>0?Math.round(r/p*100):0,y=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বিষয়ভিত্তিক ফলাফল — ${n}</title>
  ${hs("portrait")}
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
      ${gs({title:"বিষয়ভিত্তিক ফলাফল বিবরণী — "+n,orientation:"portrait",metaLeft:"<strong>শ্রেণি:</strong> "+(((h=u==null?void 0:u.classLevel)==null?void 0:h.name)||"")+" | <strong>পূর্ণমান:</strong> "+o+" | <strong>পরীক্ষা:</strong> "+((u==null?void 0:u.name)||""),metaRight:"<strong>তারিখ:</strong> "+d})}

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
          ${s.map((g,S)=>{var _e,C,j,Y,B,se,R,ze,Me,Re,Se,mt,St,Fe,et,Jt,ms,Ya,Ua,qa,Za;const _=Number(g.marksObtained)||0,D=o>0?Math.round(_/o*100):_,K=Dt(_,o),ye=D>=33,we=((_e=g.student)==null?void 0:_e.fullName)||((j=(C=g.student)==null?void 0:C.user)==null?void 0:j.fullName)||`${((B=(Y=g.student)==null?void 0:Y.user)==null?void 0:B.firstName)||""} ${((R=(se=g.student)==null?void 0:se.user)==null?void 0:R.lastName)||""}`.trim()||"—",De=((Me=(ze=g.student)==null?void 0:ze.currentEnrollment)==null?void 0:Me.rollNumber)||((Re=g.student)==null?void 0:Re.roll)||"—",Ye=((Se=g.student)==null?void 0:Se.studentId)||"—",je=typeof((St=(mt=g.student)==null?void 0:mt.currentEnrollment)==null?void 0:St.section)=="object"?((Jt=(et=(Fe=g.student)==null?void 0:Fe.currentEnrollment)==null?void 0:et.section)==null?void 0:Jt.name)||((Ua=(Ya=(ms=g.student)==null?void 0:ms.currentEnrollment)==null?void 0:Ya.section)==null?void 0:Ua._id):((Za=(qa=g.student)==null?void 0:qa.currentEnrollment)==null?void 0:Za.section)||"—";return`
              <tr>
                <td class="text-center">${S+1}</td>
                <td class="text-center font-bold">${De}</td>
                <td class="font-bold">${we}</td>
                <td class="text-center">${Ye}</td>
                <td class="text-center">${je}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${_} / ${o}</td>
                <td class="text-center font-bold">${D}%</td>
                <td class="text-center font-bold">${K}</td>
                <td class="text-center font-bold" style="color: ${ye?"#059669":"#dc2626"};">${ye?"উত্তীর্ণ":"অনুত্তীর্ণ"}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${fs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,f=window.open("","_blank");f&&(f.document.write(y),f.document.close())},Us=()=>{var g;if(!Ie||Ie.length===0){E({type:"error",message:'প্রিন্ট করার জন্য অনুগ্রহ করে বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন।'});return}const t=ee.find(S=>S._id===Ne),s=Ne==="all",a=s?"সকল বিষয়":(t==null?void 0:t.name)||"বিষয়",n=s?100:Number(t==null?void 0:t.totalMarks)||100,o=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),d=Pe==="all"?"সকল সেকশন":`সেকশন ${Pe}`,p=Ie.filter(S=>{const _=Ze[S._id];return _!==void 0&&_!==""&&!isNaN(_)}).length,r=Ie.filter(S=>{const _=Ze[S._id];return _===void 0||_===""||isNaN(_)?!1:(n>0?Number(_)/n*100:Number(_))>=33}).length,w=p>0?Math.round(r/p*100):0,y=[...Ie].sort((S,_)=>{var D,K;return it(((D=S.currentEnrollment)==null?void 0:D.rollNumber)||S.roll)-it(((K=_.currentEnrollment)==null?void 0:K.rollNumber)||_.roll)}),f=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>নম্বর বিবরণী শিট — ${a} (${(u==null?void 0:u.name)||""})</title>
  ${hs("portrait")}
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
      ${gs({title:"নম্বর বিবরণী শিট (Mark Sheet) — "+a,orientation:"portrait",metaLeft:"<strong>পরীক্ষা:</strong> "+((u==null?void 0:u.name)||"")+" | <strong>শ্রেণি:</strong> "+(((g=u==null?void 0:u.classLevel)==null?void 0:g.name)||"")+" | <strong>"+(s?"":"পূর্ণমান: "+n+" | ")+"সেকশন:</strong> "+d,metaRight:"<strong>তারিখ:</strong> "+o})}

      ${s?"":`
        <div class="stats-strip">
          <div><strong>মোট শিক্ষার্থী:</strong> ${Ie.length} জন</div>
          <div><strong>পরীক্ষার্থী (উপস্থিত):</strong> ${p} জন</div>
          <div><strong>উত্তীর্ণ:</strong> ${r} জন</div>
          <div><strong>অনুত্তীর্ণ / অনুপস্থিত:</strong> ${Ie.length-r} জন</div>
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
          ${y.map((S,_)=>{var B,se,R,ze,Me,Re,Se,mt,St,Fe;const D=S._id,K=((B=S.currentEnrollment)==null?void 0:B.rollNumber)||S.roll||"—",ye=((se=S.user)==null?void 0:se.fullName)||`${((R=S.user)==null?void 0:R.firstName)||""} ${((ze=S.user)==null?void 0:ze.lastName)||""}`.trim()||"—",we=S.studentId||"—",De=typeof((Me=S.currentEnrollment)==null?void 0:Me.section)=="object"?((Se=(Re=S.currentEnrollment)==null?void 0:Re.section)==null?void 0:Se.name)||((St=(mt=S.currentEnrollment)==null?void 0:mt.section)==null?void 0:St._id):((Fe=S.currentEnrollment)==null?void 0:Fe.section)||S.section||Pe;if(s){const et=Array.isArray(Ze[D])?Ze[D]:[],Jt=et.length>0?et.map(ms=>ms.subjectName+": "+ms.marksObtained+" ("+ms.grade+")").join(" | "):"কোনো নম্বর পাওয়া যায়নি";return`
                <tr>
                  <td class="text-center">${_+1}</td>
                  <td class="text-center font-bold">${K}</td>
                  <td class="font-bold">${ye}</td>
                  <td class="text-center">${we}</td>
                  <td class="text-center">${De}</td>
                  <td style="font-size: 10px;">${Jt}</td>
                </tr>
              `}const Ye=Ze[D],je=Ye!==void 0&&Ye!==""&&!isNaN(Ye),_e=je?Number(Ye):null,C=je?n>0?Math.round(_e/n*100):_e:null,j=je?Dt(_e,n):"—",Y=je?C>=33:!1;return`
              <tr>
                <td class="text-center">${_+1}</td>
                <td class="text-center font-bold">${K}</td>
                <td class="font-bold">${ye}</td>
                <td class="text-center">${we}</td>
                <td class="text-center">${De}</td>
                <td class="text-center font-bold" style="color: #0f766e;">${je?_e+" / "+n:"—"}</td>
                <td class="text-center font-bold">${je?C+"%":"—"}</td>
                <td class="text-center font-bold">${j}</td>
                <td class="text-center font-bold" style="color: ${je?Y?"#059669":"#dc2626":"#64748b"};">
                  ${je?Y?"উত্তীর্ণ":"অনুত্তীর্ণ":"অনুপস্থিত"}
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>

      ${fs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `,h=window.open("","_blank");h&&(h.document.write(f),h.document.close())},jn=async()=>{if(!Ne||!Pe){E({type:"error",message:"অনুগ্রহ করে বিষয় এবং সেকশন নির্বাচন করুন"});return}Xe(!0);try{const t={classLevel:u.classLevel._id,limit:100};Pe!=="all"&&(t.section=Pe);const a=(await Z.get("/students",{params:t})).data.data||[];a.sort((p,r)=>{var f,h;const w=it(((f=p.currentEnrollment)==null?void 0:f.rollNumber)||p.roll),y=it(((h=r.currentEnrollment)==null?void 0:h.rollNumber)||r.roll);return w-y}),qe(a);const n={exam:u._id};Ne!=="all"&&(n.subject=Ne);const d=(await Z.get("/exams/marks",{params:n})).data.data.marks||[];if(Ne==="all"){const p={};a.forEach(r=>{p[r._id]=[]}),d.forEach(r=>{var y,f;const w=typeof r.student=="object"?(y=r.student)==null?void 0:y._id:r.student;w&&p[w]&&p[w].push({subjectName:((f=r.subject)==null?void 0:f.name)||"অজানা বিষয়",marksObtained:r.marksObtained,grade:r.grade})}),He(p)}else{const p={};a.forEach(r=>{p[r._id]=""}),d.forEach(r=>{var y;const w=typeof r.student=="object"?(y=r.student)==null?void 0:y._id:r.student;w&&(p[w]=r.marksObtained??"")}),He(p)}}catch(t){console.error("Failed to load students for marks entry",t),E({type:"error",message:"শিক্ষার্থী তালিকা লোড করতে সমস্যা হয়েছে"})}finally{Xe(!1)}},vs=async(t=Ae,s=u)=>{var o,d,p,r,w,y,f,h;const a=s||u;if(!a)return;const n=((o=a.classLevel)==null?void 0:o._id)||(typeof a.classLevel=="string"?a.classLevel:null);Nt(!0);try{if(ke){const C=await Z.get(`/exams/${a._id}/rankings`);if(C.data.success&&C.data.data){const{rankings:j=[],evaluatedSubjects:Y=[]}=C.data.data;G(Y);const se=(t&&t!=="all"?j.filter(R=>String(R.section||"")===String(t)):j).map((R,ze)=>{const Me={_id:R.studentId,studentId:R.studentCode||R.studentId,user:{fullName:R.name,firstName:R.name},currentEnrollment:{rollNumber:R.rollNumber,section:R.section}},Re={};R.subjectMarks&&Object.keys(R.subjectMarks).forEach(St=>{const Fe=R.subjectMarks[St],et=Fe!==null&&typeof Fe=="object"?Fe.marksObtained:Fe,Jt=Fe!==null&&typeof Fe=="object"&&Fe.grade||Dt(et);Re[St]={marksObtained:et!=null&&typeof et!="object"?et:"",grade:Jt||""}});const Se=R.isPassed!==void 0?R.isPassed:R.grade!=="F"&&!R.isIncomplete,mt=R.gpa||(Se&&R.percentage>=33?R.percentage>=80?"5.00":R.percentage>=70?"4.00":R.percentage>=60?"3.50":R.percentage>=50?"3.00":R.percentage>=40?"2.00":"1.00":"0.00");return{student:Me,studentMarksObj:Re,totalObtained:R.totalObtained,totalFullMarks:R.totalMaxMarks,percentage:R.percentage,overallGrade:R.grade,gpa:mt,isPassed:Se,subjectsCountWithMarks:Object.keys(Re).length,rankNum:R.rank||ze+1,rankText:el(R.rank||ze+1),roll:it(R.rollNumber)}});A(se);return}}const S=((p=(d=(await Z.get("/exams/marks",{params:{exam:a._id}})).data)==null?void 0:d.data)==null?void 0:p.marks)||[];let _=[];if(n)try{_=((w=(r=(await Z.get(`/students/subjects?classLevel=${n}`)).data)==null?void 0:r.data)==null?void 0:w.subjects)||[]}catch(C){console.warn("Subject fetch warning:",C)}if(a.examCategory==="monthly_test"&&Array.isArray(a.selectedSubjects)&&a.selectedSubjects.length>0){const C=a.selectedSubjects.map(j=>String(typeof j=="object"?j._id:j));_=_.filter(j=>C.includes(String(j._id)))}let D=_.filter(C=>S.some(j=>{var B,se;const Y=typeof j.subject=="object"?((B=j.subject)==null?void 0:B._id)||((se=j.subject)==null?void 0:se.id):j.subject;return String(Y)===String(C._id)&&j.marksObtained!==null&&j.marksObtained!==void 0&&j.marksObtained!==""}));if(D.length===0&&S.length>0){const C={};S.forEach(j=>{var B,se;const Y=typeof j.subject=="object"?((B=j.subject)==null?void 0:B._id)||((se=j.subject)==null?void 0:se.id):j.subject;if(Y&&j.marksObtained!==null&&j.marksObtained!==void 0&&j.marksObtained!==""){const R=typeof j.subject=="object"?j.subject.name||j.subject.code:"বিষয়",ze=typeof j.subject=="object"?j.subject.code:"",Me=typeof j.subject=="object"?j.subject.totalMarks||j.totalMarks||100:j.totalMarks||100;C[String(Y)]={_id:String(Y),name:R,code:ze,totalMarks:Number(Me)||100}}}),D=Object.values(C)}D.length===0&&_.length>0&&(D=_),G(D);const K=D.reduce((C,j)=>C+(Number(j.totalMarks)||100),0);let ye=[];if(n)try{const C={classLevel:n,limit:300};t&&t!=="all"&&(C.section=t),ye=((y=(await Z.get("/students",{params:C})).data)==null?void 0:y.data)||[]}catch(C){console.warn("Students fetch warning:",C)}if(ye.length===0){const C={};S.forEach(j=>{j.student&&typeof j.student=="object"&&j.student._id&&(C[j.student._id]=j.student)}),ye=Object.values(C)}const we={};S.forEach(C=>{var R,ze,Me,Re;const j=typeof C.student=="object"?((R=C.student)==null?void 0:R._id)||((ze=C.student)==null?void 0:ze.id):C.student,Y=typeof C.subject=="object"?((Me=C.subject)==null?void 0:Me._id)||((Re=C.subject)==null?void 0:Re.id):C.subject;if(!j||!Y)return;const B=String(j),se=String(Y);we[B]||(we[B]={}),we[B][se]={marksObtained:C.marksObtained,grade:C.grade}});const De=ye.map(C=>{var mt;const j=we[C._id]||{};let Y=0,B=0,se=0;D.forEach(St=>{const Fe=j[St._id];if(Fe&&Fe.marksObtained!==null&&Fe.marksObtained!==void 0&&Fe.marksObtained!==""){const et=Number(Fe.marksObtained);Y+=et,B+=1;const Jt=Number(St.totalMarks)||100;et<Jt*.33&&(se+=1)}});const R=K>0?Number((Y/K*100).toFixed(1)):0,ze=D.length>0&&B>0&&B<D.length,Me=B>0&&se===0&&!ze,Re=Me?Dt(R):se>0?"F":ze?Dt(R):B>0?"F":"—";let Se="—";return B>0&&(!Me||R<33?Se="0.00":R>=80?Se="5.00":R>=70?Se="4.00":R>=60?Se="3.50":R>=50?Se="3.00":R>=40?Se="2.00":Se="1.00"),{student:C,studentMarksObj:j,totalObtained:Y,totalFullMarks:K,subjectsCountWithMarks:B,failedCount:se,isIncomplete:ze,percentage:R,isPassed:Me,overallGrade:Re,gpa:Se,roll:it(((mt=C.currentEnrollment)==null?void 0:mt.rollNumber)||C.roll)}});De.sort((C,j)=>C.subjectsCountWithMarks===0&&j.subjectsCountWithMarks===0?C.roll-j.roll:C.subjectsCountWithMarks===0?1:j.subjectsCountWithMarks===0||C.failedCount===0&&j.failedCount>0?-1:C.failedCount>0&&j.failedCount===0?1:j.totalObtained!==C.totalObtained?j.totalObtained-C.totalObtained:C.roll-j.roll);let Ye=0,je=null;const _e=De.map(C=>{if(C.subjectsCountWithMarks===0)return{...C,rankText:"অনুপস্থিত / পরীক্ষা দেয়নি",rankNum:null};je!==null&&C.totalObtained===je||(Ye+=1,je=C.totalObtained);const j=Ye,Y=De.filter(se=>se.subjectsCountWithMarks>0&&se.totalObtained===C.totalObtained).length>1;let B="";return j===1?B=Y?"🥇 ১ম স্থান (যৌথ)":"🥇 ১ম স্থান":j===2?B=Y?"🥈 ২য় স্থান (যৌথ)":"🥈 ২য় স্থান":j===3?B=Y?"🥉 ৩য় স্থান (যৌথ)":"🥉 ৩য় স্থান":j===4?B=Y?"৪র্থ (যৌথ)":"৪র্থ":j===5?B=Y?"৫ম (যৌথ)":"৫ম":j===6?B=Y?"৬ষ্ঠ (যৌথ)":"৬ষ্ঠ":j===7?B=Y?"৭ম (যৌথ)":"৭ম":j===8?B=Y?"৮ম (যৌথ)":"৮ম":j===9?B=Y?"৯ম (যৌথ)":"৯ম":j===10?B=Y?"১০ম (যৌথ)":"১০ম":B=Y?`${j}তম (যৌথ)`:`${j}তম`,C.failedCount>0?B+=" (অনুত্তীর্ণ)":C.isIncomplete&&(B+=" (অসম্পূর্ণ)"),{...C,rankNum:j,rankText:B}});A(_e)}catch(g){console.error("Error loading merit list:",g);const S=((h=(f=g.response)==null?void 0:f.data)==null?void 0:h.message)||g.message||"মেধা তালিকা লোড করতে সমস্যা হয়েছে";E({type:"error",message:S})}finally{Nt(!1)}},Ns=async(t,s="all")=>{var a,n;if(t){P(!0);try{const o={classLevel:t};s&&s!=="all"&&(o.section=s);const d=await Z.get("/exams/annual-rankings",{params:o});d.data.success&&V(d.data.data)}catch(o){console.error("Failed to load annual rankings",o),E({type:"error",message:((n=(a=o.response)==null?void 0:a.data)==null?void 0:n.message)||"বার্ষিক মেধা তালিকা লোড করতে সমস্যা হয়েছে"})}finally{P(!1)}}},vn=()=>{var n,o,d;if(!W||!W.rankings||W.rankings.length===0){E({type:"error",message:"প্রিন্ট করার মতো কোনো মেধা তালিকা নেই"});return}const t=window.open("","_blank");if(!t){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const s=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),a=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>বার্ষিক সমন্বিত মেধা তালিকা - ${((n=W.classLevel)==null?void 0:n.name)||""}</title>
  ${hs("landscape")}
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
      ${gs({title:`চূড়ান্ত বার্ষিক সমন্বিত মেধা তালিকা — ${((o=W.classLevel)==null?void 0:o.name)||""}`,orientation:"landscape",metaLeft:`<strong>শ্রেণি:</strong> ${((d=W.classLevel)==null?void 0:d.name)||""} | <strong>মোট পরীক্ষার্থী:</strong> ${W.rankings.length} জন`,metaRight:`<strong>তারিখ:</strong> ${s}`})}

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
          ${W.rankings.map((p,r)=>`
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

      ${fs(he)}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;t.document.open(),t.document.write(a),t.document.close()},ds=t=>{if(!t)return"";const s=new Date(t);return isNaN(s.getTime())?"":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"][s.getDay()]},cs=async(t=me,s=wt,a=ut,n=!1)=>{var o,d;ge(!0);try{const p={};t&&t!=="all"&&(p.stream=t),s&&s!=="all"&&(p.exam=s),a&&a!=="all"&&(p.classLevel=a);const r=await Z.get("/exams/routines",{params:p});r.data.success&&le(r.data.data.routines||[])}catch(p){console.error("Failed to load routines",p),n&&E({type:"error",message:((d=(o=p.response)==null?void 0:o.data)==null?void 0:d.message)||"পরীক্ষার রুটিন লোড করতে সমস্যা হয়েছে"})}finally{ge(!1)}},ws=async(t=!1,s=null)=>{ge(!0);try{const a={},n=s||Et;kt&&n&&(a.studentId=n);const o=await Z.get("/exams/student-routine",{params:a});o.data.success&&(Ps(o.data.data),le(o.data.data.routines||[]))}catch(a){console.error("Failed to load student routine",a)}finally{ge(!1)}},Nn=(t=null)=>{var a,n,o,d,p,r;const s=(t==null?void 0:t.classLevel)||((a=u==null?void 0:u.classLevel)==null?void 0:a._id)||((n=L[0])==null?void 0:n._id)||"";s&&js(s),t?(nt(t._id),bt({title:t.title||"",exam:t.exam||"",examName:t.examName||"",classLevel:t.classLevel||"",className:t.className||"",stream:t.stream||"noorani",status:t.status||"published",instructions:t.instructions||"",schedule:Array.isArray(t.schedule)&&t.schedule.length>0?t.schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})):(nt(null),bt({title:u?`${u.name} — পরীক্ষার রুটিন`:"পরীক্ষার রুটিন",exam:(u==null?void 0:u._id)||((o=ce[0])==null?void 0:o._id)||"",examName:(u==null?void 0:u.name)||((d=ce[0])==null?void 0:d.name)||"",classLevel:s,className:((p=u==null?void 0:u.classLevel)==null?void 0:p.name)||((r=L[0])==null?void 0:r.name)||"",stream:"noorani",status:"published",instructions:"পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে। প্রবেশপত্র ও প্রয়োজনীয় শিক্ষা উপকরণ সাথে রাখতে হবে।",schedule:[{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]})),ts(!0)},wn=()=>{if(!H||H.length===0){E({type:"error",message:"নির্বাচিত শ্রেণির কোনো নির্ধারিত বিষয় পাওয়া যায়নি"});return}const t=H.map(s=>({date:"",day:"",subject:s._id,subjectName:s.name,startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:Number(s.totalMarks)||100}));bt(s=>({...s,schedule:t})),E({type:"success",message:`${H.length}টি বিষয় সফলভাবে সময়সূচিতে যোগ করা হয়েছে!`})},kn=async t=>{var s,a;if(t&&t.preventDefault(),!pt.title.trim()){E({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}ys(!0);try{const n={...pt,_id:os},o=await Z.post("/exams/routines",n);o.data.success&&(E({type:"success",message:o.data.message||"রুটিন সফলভাবে সংরক্ষিত হয়েছে"}),ts(!1),cs())}catch(n){console.error("Failed to save routine",n),E({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{ys(!1)}},Sn=async t=>{var s,a;if(window.confirm("আপনি কি নিশ্চিতভাবে এই পরীক্ষার রুটিনটি মুছে ফেলতে চান?"))try{(await Z.delete(`/exams/routines/${t}`)).data.success&&(E({type:"success",message:"রুটিন মুছে ফেলা হয়েছে"}),le(o=>o.filter(d=>d._id!==t)))}catch(n){console.error("Failed to delete routine",n),E({type:"error",message:((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)||"রুটিন মুছতে ব্যর্থ হয়েছে"})}},zn=()=>{bt(t=>({...t,schedule:[...t.schedule,{date:"",day:"",subject:"",subjectName:"",startTime:"সকাল ০৯:৩০",endTime:"দুপুর ১২:৩০",roomNo:"১০১",totalMarks:100}]}))},oa=t=>{bt(s=>({...s,schedule:s.schedule.filter((a,n)=>n!==t)}))},ue=(t,s,a)=>{bt(n=>{const o=[...n.schedule],d={...o[t],[s]:a};if(s==="date"&&(d.day=ds(a)),s==="subject"){const p=H&&H.find(r=>r._id===a)||ee.find(r=>r._id===a);p?(d.subject=p._id,d.subjectName=p.name,d.totalMarks=Number(p.totalMarks)||100):(d.subject=a,d.subjectName=a)}return o[t]=d,{...n,schedule:o}})},Cn=t=>{if(!t||!t.schedule||t.schedule.length===0){E({type:"error",message:"প্রিন্ট করার মতো কোনো সময়সূচি নেই"});return}const s=window.open("","_blank");if(!s){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const a=t.stream==="hifz"?"হিফজ বিভাগ":t.stream==="noorani"?"নূরানী বিভাগ":t.stream==="kitab"?"কিতাব বিভাগ":"সাধারণ বিভাগ",n=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),o=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${t.title||"পরীক্ষার রুটিন"} - ${t.className||""}</title>
  ${hs("portrait")}
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
      ${gs({title:"",orientation:"portrait",metaLeft:`<strong>বিভাগ:</strong> ${a} ${t.className?`| <strong>শ্রেণি:</strong> ${t.className}`:""}`,metaRight:`<strong>তারিখ:</strong> ${n}`})}

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
              <td class="text-center font-bold" style="color: #0f766e;">${lt(p+1)}</td>
              <td class="text-center">
                <div style="font-weight: 700; color: #0f172a; font-size: 11.5px;">${ls(d.date)}</div>
                <div style="font-size: 9.5px; color: #64748b; font-weight: 600;">${d.day||ds(d.date)}</div>
              </td>
              <td style="font-weight: 700; font-size: 11.5px; color: #042f2e; padding-left: 14px;">
                ${d.subjectName||d.subject||"—"}
              </td>
              <td class="text-center font-bold" style="color: #0f766e;">${lt(d.totalMarks||100)}</td>
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

      ${fs(["শ্রেণি শিক্ষক / হল সুপার","পরীক্ষা নিয়ন্ত্রক","প্রতিষ্ঠান প্রধান / পরিচালক"])}
    </div>
  </div>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { window.print(); }, 400);
    });
  <\/script>
</body>
</html>
    `;s.document.open(),s.document.write(o),s.document.close()},In=(t=We,s=he)=>{var h;const a=window.open("","_blank");if(!a){alert("পপআপ ব্লক করা আছে! প্রিন্ট উইন্ডো ওপেন করতে ব্রাউজার পারমিশন দিন।");return}const n=(u==null?void 0:u.name)||"পরীক্ষা",o=((h=u==null?void 0:u.classLevel)==null?void 0:h.name)||"সকল শ্রেণি",d=Ae==="all"?"সকল সেকশন":`সেকশন ${Ae}`,p=new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"}),r=t==="landscape";let w="";x.forEach((g,S)=>{var je,_e,C,j;const _=g.student,D=((je=_.currentEnrollment)==null?void 0:je.rollNumber)||_.roll||"—",K=((_e=_.user)==null?void 0:_e.fullName)||`${((C=_.user)==null?void 0:C.firstName)||""} ${((j=_.user)==null?void 0:j.lastName)||""}`.trim()||_.studentId||"—",ye=_.studentId||"—",we=g.rankNum===1?"#fef3c7":g.rankNum===2?"#f1f5f9":g.rankNum===3?"#ffedd5":"transparent",De=g.rankNum===1?"🥇 ":g.rankNum===2?"🥈 ":g.rankNum===3?"🥉 ":"",Ye=I.map(Y=>{var Re,Se;const B=(Se=(Re=g.studentMarksObj)==null?void 0:Re[String(Y._id)])==null?void 0:Se.marksObtained,se=B!==null&&typeof B=="object"?B.marksObtained??"":B??"",R=se!=null&&se!=="",ze=Number(Y.totalMarks)||100;return`<td class="col-subject" style="text-align: center; font-weight: 600; ${R&&Number(se)<ze*.33?"color: #dc2626; background: rgba(239, 68, 68, 0.05);":""}">${R?se:"—"}</td>`}).join("");w+=`
        <tr style="background-color: ${we};">
          <td class="col-serial" style="text-align: center; font-weight: bold;">${lt(S+1)}</td>
          <td class="col-student">
            <div class="student-name-text">${K}</div>
            <div class="student-meta-text">আইডি: ${ye}</div>
          </td>
          <td class="col-roll" style="text-align: center; font-weight: bold;">${D}</td>
          ${Ye}
          <td class="col-total" style="text-align: center; font-weight: bold; color: #0f766e;">
            ${g.subjectsCountWithMarks===0?"—":`${g.totalObtained} / ${g.totalFullMarks||100}`}
          </td>
          <td class="col-rank" style="text-align: center; font-weight: bold;">${De}${g.rankText||"—"}</td>
          <td class="col-grade" style="text-align: center; font-weight: bold; color: ${g.overallGrade==="F"?"#dc2626":"#059669"};">
            ${g.overallGrade}
          </td>
          <td class="col-gpa" style="text-align: center; font-weight: bold; color: ${g.overallGrade==="F"?"#dc2626":"#0f766e"};">
            ${g.subjectsCountWithMarks===0?"—":g.gpa||"0.00"}
          </td>
          <td class="col-percent" style="text-align: center; font-weight: 600;">${g.subjectsCountWithMarks===0?"—":`${g.percentage}%`}</td>
          <td class="col-status" style="text-align: center; font-weight: 600; color: ${g.subjectsCountWithMarks===0?"#64748b":g.isIncomplete?"#b45309":g.isPassed?"#059669":"#dc2626"};">
            ${g.subjectsCountWithMarks===0?"অনুপস্থিত":g.isIncomplete?"অসম্পূর্ণ":g.isPassed?"উত্তীর্ণ":"অনুত্তীর্ণ"}
          </td>
        </tr>
      `});const y=I.map(g=>`
      <th class="col-subject" style="text-align: center; line-height: 1.15;">
        <div class="sub-name-box">${g.name}</div>
        <div class="sub-mark-box">(${g.totalMarks||100})</div>
      </th>
    `).join(""),f=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>${n} - মেধা তালিকা ও ফলাফল</title>
      ${hs(t)}
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
          ${gs({title:`🏆 পরীক্ষার মেধা তালিকা ও বিষয়ভিত্তিক ফলাফল (Merit List) — ${n}`,orientation:t,metaLeft:`<strong>শ্রেণি:</strong> ${o} | <strong>সেকশন:</strong> ${d}`,metaRight:`<strong>মোট পরীক্ষার্থী:</strong> ${x.length} জন | <strong>তারিখ:</strong> ${p}`})}
        </div>

        <table class="compact-table">
          <thead>
            <tr>
              <th class="col-serial">ক্রম</th>
              <th class="col-student">শিক্ষার্থীর নাম ও আইডি</th>
              <th class="col-roll">রোল</th>
              ${y}
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
          ${fs(s)}
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
    </html>`;a.document.open(),a.document.write(f),a.document.close()},_n=(t,s)=>{He(a=>({...a,[t]:s}))},Dt=(t,s=100)=>{const a=ns(t),n=parseFloat(a);if(isNaN(n))return"—";const o=Number(s)||100,d=o>0?n/o*100:n;return d>=80?"A+":d>=70?"A":d>=60?"A-":d>=50?"B":d>=40?"C":d>=33?"D":"F"},ps=t=>t==="A+"||t==="A"||t==="A-"?"badge-active":t==="F"?"badge-danger":t==="—"?"badge-muted":"badge-warning",$n=async()=>{const t=ee.find(o=>o._id===Ne),s=Number(t==null?void 0:t.totalMarks)||100,a=Object.keys(Ze).map(o=>{const d=Ze[o],p=ns(d);return{studentId:o,marksObtained:p===""?null:parseFloat(p)}});if(a.length===0){E({type:"error",message:"সংরক্ষণ করার মতো কোনো নম্বর দেওয়া হয়নি"});return}if(a.find(o=>o.marksObtained!==null&&o.marksObtained>s)){E({type:"error",message:`কোনো শিক্ষার্থীর প্রাপ্ত নম্বর পূর্ণমানের (${s}) চেয়ে বেশি হতে পারে না`});return}vt(!0);try{const o={exam:u._id,subject:Ne,marks:a};(await Z.post("/exams/marks",o)).data.success&&E({type:"success",message:"নম্বরসমূহ সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(o){console.error("Failed to save marks",o),E({type:"error",message:"নম্বর সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{vt(!1)}},An=t=>{switch(t){case"upcoming":return"আসন্ন";case"ongoing":return"চলমান";case"completed":return"সমাপ্ত";case"published":return"ফলাফল প্রকাশিত";default:return"অজানা"}},Wn=t=>{switch(t){case"published":return"badge-active";case"completed":return"badge-info";case"ongoing":return"badge-warning";default:return"badge-muted"}},qs=()=>{Oe(!1),ct(null),ae({name:"১ম সাময়িক পরীক্ষা",examCategory:"term_exam",termNumber:1,month:"january",selectedSubjects:[],classLevel:"",startDate:"",endDate:"",status:"upcoming"}),ve([])},da=(t=!1)=>{var n,o,d,p;const s=["super_admin","admin","principal","teacher","hifz_teacher"].includes(z==null?void 0:z.userType)||((o=(n=z==null?void 0:z.permissions)==null?void 0:n.includes)==null?void 0:o.call(n,"academic.manage"))||((p=(d=z==null?void 0:z.permissions)==null?void 0:d.includes)==null?void 0:p.call(d,"exam.manage")),a=X.filter(r=>{var w;if(((w=r.schedule)==null?void 0:w.kind)!=="matrix")return!1;if(t&&u){if(r.exam&&r.exam!==u._id)return!1}else if(wt!=="all"&&r.exam!==wt)return!1;return!(me!=="all"&&r.stream!==me||ut!=="all"&&r.classLevel!==ut)});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[!t&&e.jsx("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:()=>{re("marks"),tt(null)},title:"ফিরে যান",children:e.jsx(ks,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Lt,{size:22,style:{color:"#2563eb"}}),e.jsx("span",{children:t&&u?`পরীক্ষার রুটিন — ${u.name}`:"পরীক্ষার রুটিন ও সময়সূচি (Exam Routine)"})]}),e.jsx("p",{className:"page-subtitle",children:ke?"আপনার শ্রেণির পরীক্ষার সময়সূচি, তারিখ ও আসন বিবরণী":"নূরানী ও হিফজ বিভাগের শিক্ষার্থীদের পরীক্ষার সময়সূচি পরিচালনা, ফিল্টারিং ও প্রিন্ট"})]})]}),e.jsxs("div",{className:"flex gap-8",style:{flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{ke?ws(!0):cs(me,wt,ut,!0)},disabled:fe,style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"রুটিন তালিকা রিফ্রেশ করুন",children:[e.jsx(Zs,{size:14,className:fe?"animate-spin":""})," ",e.jsx("span",{children:"রিফ্রেশ"})]}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Vt(null),Zt(r=>!r)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Xt,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন (Matrix)"})]})]})]}),!ke&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px",background:"var(--card-bg, #fff)"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:`btn ${me==="all"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ke("all"),children:["সকল বিভাগ (",X.length,")"]}),e.jsxs("button",{type:"button",className:`btn ${me==="noorani"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ke("noorani"),children:["📖 নূরানী বিভাগ (",X.filter(r=>r.stream==="noorani").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${me==="hifz"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ke("hifz"),children:["🕌 হিফজ বিভাগ (",X.filter(r=>r.stream==="hifz").length,")"]}),e.jsxs("button",{type:"button",className:`btn ${me==="kitab"?"btn-primary":"btn-ghost"}`,style:{padding:"6px 14px",fontSize:"0.85rem",borderRadius:"8px"},onClick:()=>Ke("kitab"),children:["📚 কিতাব বিভাগ (",X.filter(r=>r.stream==="kitab").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[!t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"পরীক্ষা:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"160px",height:"36px"},value:wt,onChange:r=>qt(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল পরীক্ষা"}),ce.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-secondary)"},children:"শ্রেণি:"}),e.jsxs("select",{className:"form-control",style:{padding:"6px 12px",fontSize:"0.85rem",minWidth:"140px",height:"36px"},value:ut,onChange:r=>Is(r.target.value),children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),L.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})]})]})]})}),s&&$s&&e.jsx("div",{className:"mb-20 no-print",children:e.jsx(Xn,{initialRoutine:ss,classes:L,subjects:ee,exams:ce,selectedExam:u,madrasahName:xe,onSaved:()=>{cs(me,wt,ut,!1),Zt(!1),Vt(null)},onClose:()=>{Zt(!1),Vt(null)}},(ss==null?void 0:ss._id)||"new-matrix")}),fe?e.jsxs("div",{className:"card text-center",style:{padding:"40px"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("p",{children:"পরীক্ষার রুটিন লোড হচ্ছে..."})]}):a.length===0?e.jsxs("div",{className:"card text-center",style:{padding:"50px 20px",color:"var(--text-secondary)"},children:[e.jsx(Lt,{size:44,style:{margin:"0 auto 12px",color:"#94a3b8",opacity:.6}}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"},children:"কোনো পরীক্ষার রুটিন পাওয়া যায়নি"}),e.jsx("p",{style:{fontSize:"0.9rem",maxWidth:"450px",margin:"0 auto 16px"},children:ke?"আপনার শ্রেণির জন্য এখনো কোনো পরীক্ষার রুটিন প্রকাশ করা হয়নি।":"বর্তমান ফিল্টারের আওতায় কোনো রুটিন তৈরি করা হয়নি। নতুন রুটিন তৈরি করতে নিচের বাটনে ক্লিক করুন।"}),s&&e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{Vt(null),Zt(!0)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Xt,{size:16})," ",e.jsx("span",{children:"নতুন পরীক্ষার রুটিন তৈরি করুন"})]})]}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:a.map(r=>{var y;const w=r.stream==="hifz"?{label:"হিফজ বিভাগ",bg:"#ecfdf5",color:"#065f46",border:"#a7f3d0"}:r.stream==="kitab"?{label:"কিতাব বিভাগ",bg:"#f5f3ff",color:"#5b21b6",border:"#ddd6fe"}:{label:"নূরানী বিভাগ",bg:"#eff6ff",color:"#1e40af",border:"#bfdbfe"};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px",borderBottom:"1px solid var(--border-color)",paddingBottom:"12px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",marginBottom:"6px"},children:[e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,background:w.bg,color:w.color,border:`1px solid ${w.border}`},children:w.label}),r.className&&e.jsxs("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#f1f5f9",color:"#334155"},children:["শ্রেণি: ",r.className]}),r.examName&&e.jsx("span",{style:{padding:"2px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:600,background:"#fef3c7",color:"#92400e"},children:r.examName}),e.jsx("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:r.status==="published"?"#dcfce7":"#f1f5f9",color:r.status==="published"?"#166534":"#64748b"},children:r.status==="published"?"প্রকাশিত":"খসড়া"})]}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,color:"var(--text-primary)",margin:0},children:r.title})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{var f;((f=r.schedule)==null?void 0:f.kind)==="matrix"?pn(r,xe):Cn(r)},style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",padding:"6px 12px"},title:"রুটিন প্রিন্ট বা ডাউনলোড করুন",children:[e.jsx(rt,{size:15})," ",e.jsx("span",{children:"প্রিন্ট"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>{var f;((f=r.schedule)==null?void 0:f.kind)==="matrix"?(Vt(r),Zt(!0)):Nn(r)},style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#2563eb"},title:"রুটিন সম্পাদনা করুন",children:[e.jsx(Vs,{size:15})," ",e.jsx("span",{children:"সম্পাদনা"})]}),e.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:()=>Sn(r._id),style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"0.85rem",padding:"6px 10px",color:"#dc2626"},title:"রুটিন মুছে ফেলুন",children:[e.jsx(zs,{size:15})," ",e.jsx("span",{children:"মুছুন"})]})]})]})]}),((y=r.schedule)==null?void 0:y.kind)==="matrix"?e.jsx(Jn,{routine:r}):e.jsxs(e.Fragment,{children:[r.instructions&&e.jsxs("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.05)",borderLeft:"4px solid #3b82f6",marginBottom:"14px",fontSize:"0.85rem",color:"#1e40af"},children:[e.jsx("strong",{children:"বিশেষ নির্দেশনাবলী:"})," ",r.instructions]}),e.jsx("div",{className:"table-responsive routine-desktop-table",style:{border:"1px solid var(--border-color)",borderRadius:"10px",overflow:"hidden"},children:e.jsxs("table",{className:"table",style:{width:"100%",fontSize:"0.9rem",borderCollapse:"collapse",margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#0f766e",color:"#ffffff"},children:[e.jsx("th",{style:{width:"50px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"ক্রম"}),e.jsx("th",{style:{width:"190px",color:"#ffffff",fontWeight:700},children:"তারিখ ও বার"}),e.jsx("th",{style:{color:"#ffffff",fontWeight:700,paddingLeft:"16px"},children:"পরীক্ষার বিষয়"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"পূর্ণমান"}),e.jsx("th",{style:{width:"210px",color:"#ffffff",fontWeight:700},children:"সময়সূচি"}),e.jsx("th",{style:{width:"110px",textAlign:"center",color:"#ffffff",fontWeight:700},children:"কক্ষ নম্বর"})]})}),e.jsx("tbody",{children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((f,h)=>e.jsxs("tr",{style:{background:h%2===1?"rgba(248, 250, 252, 0.7)":"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"#0f766e",verticalAlign:"middle"},children:lt(h+1)}),e.jsxs("td",{style:{verticalAlign:"middle"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Lt,{size:15,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.92rem"},children:ls(f.date)})]}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600,paddingLeft:"21px",marginTop:"1px"},children:f.day||ds(f.date)})]}),e.jsx("td",{style:{verticalAlign:"middle",paddingLeft:"16px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ms,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,color:"#0f172a",fontSize:"0.95rem"},children:f.subjectName||f.subject||"—"})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("span",{style:{padding:"3px 12px",borderRadius:"16px",fontSize:"0.82rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",display:"inline-block"},children:[lt(f.totalMarks||100)," নম্বর"]})}),e.jsx("td",{style:{verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Ja,{size:14,style:{color:"#2563eb",flexShrink:0}}),e.jsxs("span",{children:[f.startTime||"সকাল ০৯:৩০"," — ",f.endTime||"দুপুর ১২:৩০"]})]})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",background:"#f8fafc",color:"#334155",padding:"3px 8px",borderRadius:"6px",border:"1px solid #cbd5e1",fontSize:"0.83rem",fontWeight:600},children:[e.jsx(Xa,{size:13,style:{color:"#64748b"}}),e.jsx("span",{children:f.roomNo||"১০১"})]})})]},h)):e.jsx("tr",{children:e.jsx("td",{colSpan:"6",style:{textAlign:"center",padding:"24px",color:"var(--text-secondary)"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})})]})}),e.jsx("div",{className:"routine-mobile-cards",style:{display:"none",flexDirection:"column",gap:"10px"},children:Array.isArray(r.schedule)&&r.schedule.length>0?r.schedule.map((f,h)=>e.jsxs("div",{style:{padding:"12px 14px",borderRadius:"10px",border:"1px solid var(--border-color)",background:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.03)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:lt(h+1)}),e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:ls(f.date)}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",fontWeight:600},children:["(",f.day||ds(f.date),")"]})]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"#f8fafc",color:"#334155",padding:"2px 8px",borderRadius:"4px",border:"1px solid #cbd5e1",fontSize:"0.75rem",fontWeight:600},children:[e.jsx(Xa,{size:11,style:{color:"#64748b"}}),e.jsx("span",{children:f.roomNo||"১০১"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ms,{size:16,style:{color:"#0f766e",flexShrink:0}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem",color:"#0f172a"},children:f.subjectName||f.subject||"—"})]}),e.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0"},children:[lt(f.totalMarks||100)," নম্বর"]})]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#eff6ff",color:"#1e40af",padding:"4px 10px",borderRadius:"6px",border:"1px solid #bfdbfe",fontSize:"0.8rem",fontWeight:600,width:"100%"},children:[e.jsx(Ja,{size:13,style:{color:"#2563eb"}}),e.jsxs("span",{children:["সময়: ",f.startTime||"সকাল ০৯:৩০"," — ",f.endTime||"দুপুর ১২:৩০"]})]})]},h)):e.jsx("div",{style:{textAlign:"center",padding:"16px",color:"var(--text-secondary)",fontSize:"0.85rem"},children:"কোনো সময়সূচি এন্ট্রি করা হয়নি"})})]})]},r._id)})})]})};return e.jsxs("div",{className:"animate-fade-in",style:{position:"relative"},children:[be&&e.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:be.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",animation:"slideDown 0.3s ease-out",maxWidth:"400px"},children:[be.type==="success"?e.jsx(rn,{size:18}):e.jsx(us,{size:18}),e.jsx("span",{style:{fontSize:"0.9rem"},children:be.message})]}),u?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"print-only",style:{display:"none",textAlign:"center",marginBottom:"16px"},children:[e.jsx("h1",{style:{margin:"0 0 4px 0",fontSize:"20px",fontWeight:"bold"},children:xe}),e.jsxs("h2",{style:{margin:"0 0 4px 0",fontSize:"15px"},children:["পরীক্ষার ফলাফল ও মার্কশিট — ",u.name]}),e.jsxs("p",{style:{margin:"0",fontSize:"12px"},children:["শ্রেণি: ",((ca=u.classLevel)==null?void 0:ca.name)||"সকল শ্রেণি"]})]}),e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>tt(null),children:e.jsx(ks,{size:18})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:ke?"ফলাফল":"নম্বর এন্ট্রি"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",ie," • ",u.name," • ",((pa=u.classLevel)==null?void 0:pa.name)||"অজানা শ্রেণি"]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{ke||U==="student_result"?Ys():U==="subject_result"?ra():U==="merit"||U==="merit_list"?at(!0):Us()},title:"অফিশিয়াল প্রিন্ট প্রিভিউ",style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," ",ke?"মার্কশিট প্রিন্ট / ডাউনলোড":"প্রিন্ট ফলাফল"]})]}),e.jsx(Gn,{selectedRoles:he,onChange:t=>{$e(t);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsx("div",{className:"print-only",style:{marginBottom:"16px"},children:e.jsx(Hn,{documentTitle:`পরীক্ষার ফলাফল ও নম্বর বিবরণী — ${u.name}`,metaLeft:`শ্রেণি: ${((ma=u.classLevel)==null?void 0:ma.name)||""}`,metaRight:`মুদ্রণের তারিখ: ${new Date().toLocaleDateString("bn-BD")}`})}),ke&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>re("student_result"),children:[e.jsx(xs,{size:15})," ",e.jsx("span",{children:"পরীক্ষার ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{re("merit"),vs(Ae)},children:[e.jsx(as,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{re("routine"),ws()},children:[e.jsx(Lt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]})]}),!ke&&e.jsxs("div",{className:"exam-tabs-strip mb-20 no-print",children:[e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="marks"?"btn-primary":"btn-ghost"}`,onClick:()=>re("marks"),children:[e.jsx(Vs,{size:15})," ",e.jsx("span",{children:"নম্বর এন্ট্রি"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="student_result"?"btn-primary":"btn-ghost"}`,onClick:()=>re("student_result"),children:[e.jsx(xs,{size:15})," ",e.jsx("span",{children:"ছাত্রভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="subject_result"?"btn-primary":"btn-ghost"}`,onClick:()=>{re("subject_result"),!Ve&&ee.length>0&&(Gt(ee[0]._id),Ls(ee[0]._id,gt))},children:[e.jsx(Ms,{size:15})," ",e.jsx("span",{children:"বিষয়ভিত্তিক ফলাফল"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="merit"?"btn-primary":"btn-ghost"}`,onClick:()=>{re("merit"),x.length===0&&vs(Ae)},children:[e.jsx(as,{size:15})," ",e.jsx("span",{children:"মেধা তালিকা"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="routine"?"btn-primary":"btn-ghost"}`,onClick:()=>{re("routine"),qt((u==null?void 0:u._id)||"all"),cs("all",(u==null?void 0:u._id)||"all","all")},children:[e.jsx(Lt,{size:15})," ",e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="seat_plan"?"btn-primary":"btn-ghost"}`,onClick:()=>re("seat_plan"),children:[e.jsx(Kt,{size:15})," ",e.jsx("span",{children:"সিট প্ল্যান"})]}),e.jsxs("button",{type:"button",className:`btn exam-tab-btn ${U==="admit_card"?"btn-primary":"btn-ghost"}`,onClick:()=>re("admit_card"),children:[e.jsx(Ct,{size:15})," ",e.jsx("span",{children:"প্রবেশপত্র (Admit Card)"})]})]}),U==="marks"&&e.jsxs(e.Fragment,{children:[!ke&&e.jsxs("div",{className:"card mb-24",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label",children:"বিষয় (Subject) *"}),e.jsxs("select",{className:"form-input form-select",value:Ne,onChange:t=>{ht(t.target.value),qe([])},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ee.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.totalMarks||100,")"]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label",children:"সেকশন (Section)"}),e.jsxs("select",{className:"form-input form-select",value:Pe,onChange:t=>{jt(t.target.value),qe([])},children:[e.jsx("option",{value:"",children:"সেকশন নির্বাচন করুন"}),e.jsx("option",{value:"all",children:"সকল সেকশন"}),Ss.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{className:"btn btn-primary",onClick:jn,disabled:F||!Ne||!Pe||ee.length===0,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Fs,{size:16})," লোড করুন"]})]}),ee.length===0&&e.jsxs("div",{style:{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#dc2626",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(us,{size:16}),e.jsx("span",{children:"এই শ্রেণির জন্য কোনো বিষয় নির্ধারিত (Assign) করা হয়নি। অনুগ্রহ করে বিষয় ব্যবস্থাপনা থেকে বিষয় যুক্ত করুন।"})]})]}),F?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ke?ne&&((xa=ne.results)==null?void 0:xa.length)>0?ia(ne):Ee.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"এখনও এই পরীক্ষার কোনো ফলাফল প্রকাশ হয়নি।"})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[(z==null?void 0:z.userType)==="guardian"&&e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{children:"বিষয়"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"প্রাপ্ত নম্বর"}),e.jsx("th",{style:{width:"150px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:Ee.map(t=>{var o,d,p;const s=t.marksObtained,a=s!==null&&typeof s=="object"?s.marksObtained??"":s??"",n=Dt(a);return e.jsxs("tr",{children:[(z==null?void 0:z.userType)==="guardian"&&e.jsx("td",{children:e.jsxs("div",{className:"font-semibold",children:[(o=t.student)==null?void 0:o.firstName," ",(d=t.student)==null?void 0:d.lastName]})}),e.jsx("td",{className:"font-semibold",children:(p=t.subject)==null?void 0:p.name}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter"},children:a}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(n)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:n})})]},t._id)})})]})})}):Ie.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'বিষয় ও সেকশন নির্বাচন করে "লোড করুন" বাটনে ক্লিক করুন'})]}):e.jsx("div",{className:"animate-slide-up",children:e.jsxs("div",{className:"card table-container",style:{padding:0},children:[e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"রোল নম্বর"}),e.jsx("th",{children:"• শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"200px",textAlign:"center"},children:"প্রাপ্ত নম্বর (Marks)"}),e.jsx("th",{style:{width:"120px",textAlign:"center"},children:"গ্রেড (Grade)"})]})}),e.jsx("tbody",{children:Ie.map((t,s)=>{var y,f,h,g;const a=t._id,n=((y=t.currentEnrollment)==null?void 0:y.rollNumber)||"—",o=((f=t.user)==null?void 0:f.fullName)||`${((h=t.user)==null?void 0:h.firstName)||""} ${((g=t.user)==null?void 0:g.lastName)||""}`.trim();if(Ne==="all"){const S=Array.isArray(Ze[a])?Ze[a]:[];return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:lt(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:o}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{colSpan:2,children:S.length===0?e.jsx("span",{className:"text-muted text-xs",children:"কোনো নম্বর পাওয়া যায়নি"}):e.jsx("div",{className:"flex gap-8",style:{flexWrap:"wrap",gap:"8px"},children:S.map((_,D)=>{var K;return e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.8rem",padding:"4px 8px"},children:[_.subjectName,": ",typeof _.marksObtained=="object"?(K=_.marksObtained)==null?void 0:K.marksObtained:_.marksObtained," (",_.grade,")"]},D)})})})]},a)}const d=ee.find(S=>S._id===Ne),p=Number(d==null?void 0:d.totalMarks)||100,r=Ze[a]??"",w=Dt(r,p);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:lt(s+1)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:n}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:o}),e.jsx("div",{className:"text-xs text-muted",children:t.studentId})]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"120px",margin:"0 auto",textAlign:"center",marginBottom:0,borderColor:r!==""&&Number(ns(r))>p?"var(--danger, #ef4444)":void 0},placeholder:`০ - ${p}`,value:r,onChange:S=>{const _=S.target.value;/^[0-9০-৯.]*$/.test(_)&&_n(a,_)}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(w)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:w})})]},a)})})]}),Ne!=="all"&&e.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--border-color)",display:"flex",justifyContent:"flex-end",gap:"12px",background:"var(--bg-secondary)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary no-print",onClick:Us,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," শিট প্রিন্ট করুন"]}),e.jsxs("button",{className:"btn btn-primary",onClick:$n,disabled:Ge,style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(cn,{size:16})," ",Ge?"সংরক্ষণ হচ্ছে...":"নম্বর সংরক্ষণ করুন"]})]})]})})]}),U==="student_result"&&e.jsxs("div",{className:"animate-slide-up",children:[!ke&&e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"150px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Le,onChange:t=>oe(t.target.value),children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Ss.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px",flex:1},children:[e.jsx("label",{className:"form-label text-xs",children:"ছাত্র নির্বাচন করুন (তালিকা থেকে)"}),e.jsxs("select",{className:"form-input form-select",value:((ha=ne==null?void 0:ne.student)==null?void 0:ha._id)||"",onChange:t=>{const s=t.target.value;s&&(Rt(s),Gs(s))},children:[e.jsx("option",{value:"",children:"-- শিক্ষার্থী নির্বাচন করুন --"}),Ht.filter(t=>{var a,n,o,d,p,r;if(Le==="all")return!0;const s=typeof((a=t.currentEnrollment)==null?void 0:a.section)=="object"?((o=(n=t.currentEnrollment)==null?void 0:n.section)==null?void 0:o.name)||((p=(d=t.currentEnrollment)==null?void 0:d.section)==null?void 0:p._id):((r=t.currentEnrollment)==null?void 0:r.section)||t.section;return String(s||"")===String(Le)}).map(t=>{var o,d,p,r;const s=((o=t.user)==null?void 0:o.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.studentId||"শিক্ষার্থী",a=((r=t.currentEnrollment)==null?void 0:r.rollNumber)||t.roll||"",n=a?`[রোল: ${a}] `:"";return e.jsxs("option",{value:t._id,children:[n,s," (",t.studentId||t._id.slice(0,8),")"]},t._id)})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"200px"},children:[e.jsx("label",{className:"form-label text-xs",children:"অথবা ছাত্র আইডি (Student ID)"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"যেমন: 2026001 বা ANA-01",value:Wt,onChange:t=>Rt(t.target.value),onKeyDown:t=>{t.key==="Enter"&&Gs()}}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>Gs(),disabled:Pt||!Wt.trim(),style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Fs,{size:15}),e.jsx("span",{children:"খুঁজুন"})]})]})]})]}),ne&&((ga=ne.results)==null?void 0:ga.length)>0&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:Ys,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"মার্কশিট প্রিন্ট করুন"})]})]})}),Pt?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ne?((fa=ne.results)==null?void 0:fa.length)===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(us,{size:48,style:{opacity:.3,color:"var(--warning)"}}),e.jsx("div",{className:"empty-state-title mt-16",children:"এই পরীক্ষার জন্য কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"নির্বাচিত শিক্ষার্থীর জন্য এখনও এই পরীক্ষায় কোনো বিষয়ের নম্বর এন্ট্রি করা হয়নি।"})]}):ia(ne):e.jsxs("div",{className:"card empty-state",children:[e.jsx(xs,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"শিক্ষার্থীর ফলাফল দেখতে আইডি লিখুন বা নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:'উপরের ড্রপডাউন থেকে শিক্ষার্থী সিলেক্ট করুন অথবা সরাসরি স্টুডেন্ট আইডি লিখে "খুঁজুন" বাটনে ক্লিক করুন।'})]})]}),U==="subject_result"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap",flex:1},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"220px"},children:[e.jsx("label",{className:"form-label text-xs",children:"বিষয় নির্বাচন করুন *"}),e.jsxs("select",{className:"form-input form-select",value:Ve,onChange:t=>{const s=t.target.value;Gt(s),s&&Ls(s,gt)},children:[e.jsx("option",{value:"",children:"-- বিষয় নির্বাচন করুন --"}),ee.map(t=>e.jsxs("option",{value:t._id,children:[t.name," (",t.code||"কোড নেই",") • পূর্ণমান: ",t.totalMarks||100]},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"160px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:gt,onChange:t=>{const s=t.target.value;Yt(s),Ve&&Ls(Ve,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Ss.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"নাম বা রোল দিয়ে খুঁজুন"}),e.jsx("input",{type:"text",className:"form-input",style:{marginBottom:0},placeholder:"নাম / রোল ফিল্টার...",value:ft,onChange:t=>is(t.target.value)})]})]}),e.jsx("div",{className:"flex gap-8",style:{alignItems:"center"},children:e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{const t=Ut.filter(s=>{var p,r,w,y,f,h,g,S,_,D;if(!ft.trim())return!0;const a=ns(ft.trim().toLowerCase()),n=(((p=s.student)==null?void 0:p.fullName)||((w=(r=s.student)==null?void 0:r.user)==null?void 0:w.fullName)||`${((f=(y=s.student)==null?void 0:y.user)==null?void 0:f.firstName)||""} ${((g=(h=s.student)==null?void 0:h.user)==null?void 0:g.lastName)||""}`).toLowerCase(),o=String(((_=(S=s.student)==null?void 0:S.currentEnrollment)==null?void 0:_.rollNumber)||"").toLowerCase(),d=String(((D=s.student)==null?void 0:D.studentId)||"").toLowerCase();return n.includes(ft.toLowerCase())||o.includes(a)||d.includes(a)});ra(t)},disabled:b||Ut.length===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"টিকমার্ককৃতদের প্রিন্ট প্রিভিউ"})]})})]})}),b?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):Ve?(()=>{const t=ee.find(h=>h._id===Ve),s=Number(t==null?void 0:t.totalMarks)||100,a=Ut.filter(h=>{var K,ye,we,De,Ye,je,_e,C,j,Y;if(!ft.trim())return!0;const g=ns(ft.trim().toLowerCase()),S=(((K=h.student)==null?void 0:K.fullName)||((we=(ye=h.student)==null?void 0:ye.user)==null?void 0:we.fullName)||`${((Ye=(De=h.student)==null?void 0:De.user)==null?void 0:Ye.firstName)||""} ${((_e=(je=h.student)==null?void 0:je.user)==null?void 0:_e.lastName)||""}`).toLowerCase(),_=String(((j=(C=h.student)==null?void 0:C.currentEnrollment)==null?void 0:j.rollNumber)||"").toLowerCase(),D=String(((Y=h.student)==null?void 0:Y.studentId)||"").toLowerCase();return S.includes(ft.toLowerCase())||_.includes(g)||D.includes(g)}),n=a.length,o=a.map(h=>Number(h.marksObtained)||0),d=o.length>0?Math.max(...o):0,p=o.length>0?(o.reduce((h,g)=>h+g,0)/o.length).toFixed(1):0,r=a.filter(h=>{const g=Number(h.marksObtained)||0;return(s>0?g/s*100:g)>=33}).length,w=n>0?Math.round(r/n*100):0,y=a.map(h=>{var g;return String(((g=h.student)==null?void 0:g._id)||h._id)}),f=y.length>0&&y.every(h=>Q.has(h));return e.jsxs("div",{className:"animate-slide-up",children:[e.jsxs("div",{className:"grid grid-5 mb-20",style:{gap:"12px"},children:[e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-muted text-xs",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{className:"font-bold text-xl",children:[n," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-muted text-xs",children:"সর্বোচ্চ নম্বর"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#059669"},children:[d," / ",s]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{className:"text-muted text-xs",children:"গড় প্রাপ্ত নম্বর"}),e.jsx("div",{className:"font-bold text-xl",style:{color:"#0284c7"},children:p})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #8b5cf6"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাস করেছে"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#7c3aed"},children:[r," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"14px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{className:"text-muted text-xs",children:"পাসের হার"}),e.jsxs("div",{className:"font-bold text-xl",style:{color:"#d97706"},children:[w,"%"]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",padding:"8px 12px",background:"var(--bg-secondary)",borderRadius:"8px",border:"1px solid var(--border-color)",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",fontWeight:600},children:[e.jsx("input",{type:"checkbox",checked:f,onChange:()=>la(a),style:{width:"16px",height:"16px",cursor:"pointer"}}),e.jsx("span",{children:"সবাইকে নির্বাচন করুন"})]}),e.jsxs("span",{className:"text-muted",children:["(",Q.size,"/",n," জন টিকমার্ককৃত)"]})]}),e.jsx("div",{className:"text-muted text-xs",children:"* প্রিন্ট করার সময় শুধুমাত্র টিকমার্ক দেওয়া শিক্ষার্থীদের তালিকা প্রিন্ট হবে।"})]}),a.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(us,{size:40,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-12",children:"কোনো ফলাফল পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:"এই বিষয়ের জন্য এখনও কোনো নম্বর এন্ট্রি করা হয়নি।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:f,onChange:()=>la(a),title:"সবাইকে নির্বাচন",style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("th",{style:{width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{width:"100px",textAlign:"center"},children:"শিক্ষার্থী আইডি"}),e.jsxs("th",{style:{width:"130px",textAlign:"center"},children:["প্রাপ্ত নম্বর (পূর্ণমান ",s,")"]}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"শতকরা"}),e.jsx("th",{style:{width:"90px",textAlign:"center"},children:"গ্রেড"}),e.jsx("th",{style:{width:"110px",textAlign:"center"},children:"ফলাফল"})]})}),e.jsx("tbody",{children:a.map(h=>{var je,_e,C,j,Y,B,se,R,ze,Me,Re,Se,mt;const g=String(((je=h.student)==null?void 0:je._id)||h._id),S=Q.has(g),_=Number(h.marksObtained)||0,D=s>0?Math.round(_/s*100):_,K=Dt(_,s),ye=D>=33,we=((_e=h.student)==null?void 0:_e.fullName)||((j=(C=h.student)==null?void 0:C.user)==null?void 0:j.fullName)||`${((B=(Y=h.student)==null?void 0:Y.user)==null?void 0:B.firstName)||""} ${((R=(se=h.student)==null?void 0:se.user)==null?void 0:R.lastName)||""}`.trim()||"—",De=((Me=(ze=h.student)==null?void 0:ze.currentEnrollment)==null?void 0:Me.rollNumber)||"—",Ye=((Re=h.student)==null?void 0:Re.studentId)||"—";return e.jsxs("tr",{style:{background:S?"rgba(15, 118, 110, 0.03)":void 0},children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:S,onChange:()=>yn(g),style:{width:"16px",height:"16px",cursor:"pointer"}})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:De}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",children:we}),((mt=(Se=h.student)==null?void 0:Se.currentEnrollment)==null?void 0:mt.section)&&e.jsxs("div",{className:"text-xs text-muted",children:["সেকশন: ",h.student.currentEnrollment.section]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontSize:"0.85rem"},children:Ye}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,color:"var(--primary)",fontSize:"1rem"},children:[_," ",e.jsxs("span",{className:"text-muted text-xs",style:{fontWeight:400},children:["/ ",s]})]}),e.jsxs("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600},children:[D,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(K)}`,style:{minWidth:"40px",justifyContent:"center"},children:K})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ye?"badge-active":"badge-danger"}`,children:ye?"উত্তীর্ণ":"অনুত্তীর্ণ"})})]},g)})})]})})]})})():e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ms,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"বিষয়ভিত্তিক ফলাফল দেখতে একটি বিষয় নির্বাচন করুন"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"উপরের ড্রপডাউন থেকে নির্দিষ্ট বিষয় নির্বাচন করলে উক্ত বিষয়ের সকল শিক্ষার্থীর ফলাফল ও পরিসংখ্যান দেখা যাবে।"})]})]}),U==="merit"&&e.jsxs("div",{className:"animate-slide-up",children:[e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px 20px"},children:e.jsx("div",{className:"flex gap-16",style:{alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap"},children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,minWidth:"180px"},children:[e.jsx("label",{className:"form-label text-xs",children:"সেকশন ফিল্টার"}),e.jsxs("select",{className:"form-input form-select",value:Ae,onChange:t=>{const s=t.target.value;At(s),vs(s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন (সম্পূর্ণ শ্রেণি)"}),Ss.map((t,s)=>e.jsxs("option",{value:t,children:["সেকশন ",t]},s))]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>vs(Ae),disabled:Be,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Zs,{size:14,className:Be?"animate-spin":""})," রিফ্রেশ তালিকা"]}),!ke&&e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>$("/students/promote"),style:{display:"inline-flex",alignItems:"center",gap:"6px"},title:"এই মেধা তালিকার ভিত্তিতে শিক্ষার্থীদের পরবর্তী ক্লাসে প্রমোশন ও নতুন রোল নম্বর নির্ধারণ করুন",children:[e.jsx(En,{size:16,style:{color:"var(--primary)"}})," 🎓 মেধা অনুযায়ী নতুন ক্লাসে রোল দিন"]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>at(!0),disabled:Be||x.length===0,style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx(rt,{size:16})," 🖨️ মেধা তালিকা প্রিন্ট করুন"]})]})})}),e.jsxs("div",{className:"grid grid-4 mb-20",children:[e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid var(--primary)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"var(--primary)"},children:[x.length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"কৃতকার্য (পাস)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#10b981"},children:[x.filter(t=>t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #ef4444"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"অকৃতকার্য (ফেল)"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#ef4444"},children:[x.filter(t=>t.subjectsCountWithMarks>0&&!t.isPassed).length," জন"]})]}),e.jsxs("div",{className:"card text-center",style:{padding:"16px",borderLeft:"4px solid #f59e0b",background:"rgba(245, 158, 11, 0.04)"},children:[e.jsx("div",{className:"text-xs text-muted font-semibold",children:"🥇 ১ম স্থান অর্জনকারী"}),e.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:"#d97706",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((ya=(ba=(ua=x.find(t=>t.rankNum===1))==null?void 0:ua.student)==null?void 0:ba.user)==null?void 0:ya.fullName)||((Na=(va=(ja=x.find(t=>t.rankNum===1))==null?void 0:ja.student)==null?void 0:va.user)==null?void 0:Na.firstName)||"—"}),x.find(t=>t.rankNum===1)&&e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["প্রাপ্ত নম্বর: ",(wa=x.find(t=>t.rankNum===1))==null?void 0:wa.totalObtained," (",(ka=x.find(t=>t.rankNum===1))==null?void 0:ka.percentage,"%)"]})]})]}),Be?e.jsx("div",{className:"card flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):x.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(as,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"মেধা তালিকা লোড হয়নি"}),e.jsx("p",{className:"text-muted text-sm mt-8",children:"রিফ্রেশ বাটনে ক্লিক করে ফলাফল লোড করুন।"})]}):e.jsx("div",{className:"card table-container",style:{padding:0,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.jsxs("table",{className:"table",style:{width:"100%",minWidth:`${680+I.length*105}px`},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"50px",textAlign:"center"},children:"ক্রম"}),e.jsx("th",{style:{minWidth:"180px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{width:"70px",textAlign:"center"},children:"রোল"}),I.map(t=>e.jsxs("th",{style:{textAlign:"center",minWidth:"100px",whiteSpace:"nowrap"},children:[e.jsx("div",{children:t.name}),e.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:600,opacity:.85},children:["(",t.totalMarks||100,")"]})]},t._id)),e.jsx("th",{style:{textAlign:"center",minWidth:"120px"},children:"সর্বমোট মার্ক"}),e.jsx("th",{style:{minWidth:"130px",textAlign:"center"},children:"স্থান"}),e.jsx("th",{style:{textAlign:"center",width:"75px"},children:"গ্রেড"}),e.jsx("th",{style:{textAlign:"center",width:"80px"},children:"জিপিএ"}),e.jsx("th",{style:{textAlign:"center",width:"85px"},children:"শতকরা হার"}),e.jsx("th",{style:{textAlign:"center",minWidth:"110px"},children:"স্ট্যাটাস"})]})}),e.jsx("tbody",{children:x.map((t,s)=>{var w,y,f,h,g,S,_;const a=t.student,n=((w=a.currentEnrollment)==null?void 0:w.rollNumber)||"—",o=((y=a.user)==null?void 0:y.fullName)||`${((f=a.user)==null?void 0:f.firstName)||""} ${((h=a.user)==null?void 0:h.lastName)||""}`.trim(),d=t.rankNum===1,p=t.rankNum===2,r=t.rankNum===3;return e.jsxs("tr",{style:{background:d?"rgba(245, 158, 11, 0.08)":p?"rgba(100, 116, 139, 0.05)":r?"rgba(217, 119, 6, 0.05)":"transparent"},children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,color:"var(--text-muted)"},children:lt(s+1)}),e.jsxs("td",{children:[e.jsx("div",{className:"font-semibold",style:{fontSize:"0.92rem"},children:o}),e.jsxs("div",{className:"text-xs text-muted",children:["আইডি: ",a.studentId," • সেকশন: ",((S=(g=a.currentEnrollment)==null?void 0:g.section)==null?void 0:S.name)||(typeof((_=a.currentEnrollment)==null?void 0:_.section)=="string"?a.currentEnrollment.section:"—")]})]}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem"},children:n}),I.map(D=>{var _e;const K=(_e=t.studentMarksObj)==null?void 0:_e[D._id],ye=K==null?void 0:K.marksObtained,we=ye!==null&&typeof ye=="object"?ye.marksObtained??"":ye??"",De=we!=null&&we!=="",Ye=Number(D.totalMarks)||100,je=De&&Number(we)<Ye*.33;return e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700,fontSize:"0.95rem",color:je?"#dc2626":De?"#0f172a":"var(--text-muted)",background:je?"rgba(239, 68, 68, 0.06)":"transparent"},children:De?we:"—"},D._id)}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.95rem",color:"#0f766e"},children:t.subjectsCountWithMarks===0?"—":`${t.totalObtained} / ${t.totalFullMarks||100}`}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d||p||r?"0.92rem":"0.85rem",color:d?"#b45309":p?"#475569":r?"#c2410c":"inherit",padding:"4px 8px",borderRadius:"6px",background:d?"#fef3c7":p?"#f1f5f9":r?"#ffedd5":"transparent",border:d?"1px solid #fde68a":p?"1px solid #cbd5e1":r?"1px solid #fed7aa":"none"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(t.overallGrade)}`,style:{fontSize:"0.85rem",width:"45px",justifyContent:"center"},children:t.overallGrade})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:800,fontSize:"0.92rem",color:t.overallGrade==="F"?"#dc2626":t.gpa==="5.00"?"#0f766e":"#1e293b"},children:t.subjectsCountWithMarks===0?"—":t.gpa||"0.00"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:t.subjectsCountWithMarks===0?"—":`${t.percentage}%`}),e.jsx("td",{style:{textAlign:"center"},children:t.subjectsCountWithMarks===0?e.jsx("span",{className:"badge badge-muted",children:"অনুপস্থিত"}):t.isIncomplete?e.jsx("span",{className:"badge badge-warning",style:{background:"#fef3c7",color:"#b45309",border:"1px solid #fde68a"},children:"অসম্পূর্ণ"}):t.isPassed?e.jsx("span",{className:"badge badge-active",children:"উত্তীর্ণ (Pass)"}):e.jsx("span",{className:"badge badge-danger",children:"অনুত্তীর্ণ (Fail)"})})]},a._id||s)})})]})})]}),U==="routine"&&da(!0),U==="seat_plan"&&e.jsx(Ka,{selectedExam:u,classes:L,user:z}),U==="admit_card"&&e.jsx(en,{exams:ce,classes:L}),e.jsx("div",{className:"print-only",children:e.jsx(Yn,{roles:he,style:{marginTop:"40px"}})})]}):U==="annual_combined"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header no-print",children:[e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>re("marks"),children:e.jsx(ks,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(as,{size:22,style:{color:"#d97706"}}),e.jsx("span",{children:"বার্ষিক সমন্বিত মেধা তালিকা (Annual Combined Merit List)"})]}),e.jsx("p",{className:"page-subtitle",children:"১ম + ২য় + ৩য় সাময়িক পরীক্ষার মোট প্রাপ্ত নম্বরের ভিত্তিতে চূড়ান্ত সম্মিলিত মেধা স্থান"})]})]}),e.jsx("div",{className:"flex gap-8",children:e.jsxs("button",{className:"btn btn-secondary",onClick:vn,disabled:q||!W||((Sa=W.rankings)==null?void 0:Sa.length)===0,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(rt,{size:16}),e.jsx("span",{children:"প্রিন্ট করুন"})]})})]}),e.jsx("div",{className:"card mb-20 no-print",style:{padding:"16px",background:"var(--bg-card)"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[ke?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px",flexWrap:"wrap"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি:"}),kt&&yt.length>1?e.jsx("select",{className:"form-input form-select",style:{marginBottom:0,minWidth:"200px"},value:te,onChange:t=>{const s=t.target.value;c(s),Ns(s,k)},children:yt.map(t=>{var o,d,p,r,w,y,f;const s=((d=(o=t.currentEnrollment)==null?void 0:o.classLevel)==null?void 0:d._id)||((p=t.currentEnrollment)==null?void 0:p.classLevel),a=((w=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:w.name)||((y=t.currentEnrollment)==null?void 0:y.className)||"শ্রেণি",n=((f=t.user)==null?void 0:f.fullName)||t.name;return e.jsxs("option",{value:s,children:[a," (",n,")"]},t._id)})}):e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.9rem",padding:"6px 14px"},children:((za=L.find(t=>String(t._id)===String(te)))==null?void 0:za.name)||(Bt==null?void 0:Bt.name)||"আপনার শ্রেণি"})]}):e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"220px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"শ্রেণি নির্বাচন:"}),e.jsx("select",{className:"form-input form-select",style:{marginBottom:0},value:te,onChange:t=>{const s=t.target.value;c(s),Ns(s,k)},children:L.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"180px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:600},children:"সেকশন:"}),e.jsxs("select",{className:"form-input form-select",style:{marginBottom:0},value:k,onChange:t=>{const s=t.target.value;N(s),Ns(te,s)},children:[e.jsx("option",{value:"all",children:"সকল সেকশন"}),Ss.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Ns(te,k),disabled:q,style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Zs,{size:14,className:q?"spinner":""}),e.jsx("span",{children:"রিফ্রেশ"})]})]})}),W&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",marginBottom:"20px"},className:"no-print",children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0284c7"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"মোট পরীক্ষার্থী"}),e.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:700,color:"#0284c7",marginTop:"4px"},children:[((Ca=W.rankings)==null?void 0:Ca.length)||0," জন"]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #10b981"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"১ম স্থান অধিকারী (Annual Top)"}),e.jsx("div",{style:{fontSize:"1.15rem",fontWeight:700,color:"#10b981",marginTop:"4px"},children:((_a=(Ia=W.rankings)==null?void 0:Ia.find(t=>t.rank===1))==null?void 0:_a.name)||"—"}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:["প্রাপ্ত নম্বর: ",((Aa=($a=W.rankings)==null?void 0:$a.find(t=>t.rank===1))==null?void 0:Aa.grandTotalObtained)||0]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #f59e0b"},children:[e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"টার্ম পরীক্ষা উপস্থিতি"}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)",marginTop:"6px",lineHeight:1.4},children:[e.jsxs("div",{children:["১ম সাময়িক: ",e.jsx("strong",{children:((La=(Wa=W.termExams)==null?void 0:Wa.term1)==null?void 0:La.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["২য় সাময়িক: ",e.jsx("strong",{children:((Ra=(Ma=W.termExams)==null?void 0:Ma.term2)==null?void 0:Ra.name)||"অনুপলব্ধ"})]}),e.jsxs("div",{children:["৩য় সাময়িক: ",e.jsx("strong",{children:((Ea=(Ta=W.termExams)==null?void 0:Ta.term3)==null?void 0:Ea.name)||"অনুপলব্ধ"})]})]})]})]}),e.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:q?e.jsxs("div",{style:{padding:"60px",textAlign:"center"},children:[e.jsx("div",{className:"spinner",style:{margin:"0 auto 12px"}}),e.jsx("div",{className:"text-muted",children:"বার্ষিক সমন্বিত মেধা তালিকা তৈরি হচ্ছে..."})]}):!W||((Ba=W.rankings)==null?void 0:Ba.length)===0?e.jsxs("div",{className:"card empty-state text-center",style:{padding:"40px"},children:[e.jsx(as,{size:42,style:{opacity:.3,margin:"0 auto 12px"}}),e.jsx("h4",{children:"কোনো মেধা তালিকা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm",children:"এই শ্রেণির কোনো সাময়িক পরীক্ষার নম্বর এন্ট্রি পাওয়া যায়নি।"})]}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)"},children:[e.jsx("th",{style:{padding:"12px 14px",width:"140px",textAlign:"center"},children:"বার্ষিক মেধা স্থান"}),e.jsx("th",{style:{padding:"12px 14px",width:"60px",textAlign:"center"},children:"রোল"}),e.jsx("th",{style:{padding:"12px 14px"},children:"শিক্ষার্থীর নাম ও আইডি"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"১ম সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"২য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"৩য় সাময়িক"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center",background:"rgba(245, 158, 11, 0.08)"},children:"সর্বমোট নম্বর (Grand Total)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"শতকরা (%)"}),e.jsx("th",{style:{padding:"12px 14px",textAlign:"center"},children:"গ্রেড"})]})}),e.jsx("tbody",{children:W.rankings.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[e.jsx("td",{style:{textAlign:"center",padding:"10px 14px"},children:e.jsx("span",{style:{display:"inline-block",padding:"3px 8px",borderRadius:"16px",fontWeight:700,fontSize:"0.82rem",background:t.rank===1?"#fef3c7":t.rank===2?"#f1f5f9":t.rank===3?"#ffedd5":"transparent",color:t.rank===1?"#b45309":t.rank===2?"#475569":t.rank===3?"#c2410c":"var(--text-secondary)"},children:t.rankText})}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontWeight:600},children:t.rollNumber||"—"}),e.jsxs("td",{style:{padding:"10px 14px"},children:[e.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:t.name}),e.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["আইডি: ",t.studentCode]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term1Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term1Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term2Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term2Max]})]}),e.jsxs("td",{style:{textAlign:"center"},children:[t.term3Obtained," ",e.jsxs("span",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:["/ ",t.term3Max]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:800,color:"#d97706",fontSize:"0.98rem",background:"rgba(245, 158, 11, 0.05)"},children:[t.grandTotalObtained," ",e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["/ ",t.grandTotalMaxMarks]})]}),e.jsxs("td",{style:{textAlign:"center",fontWeight:600},children:[t.overallPercentage,"%"]}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("span",{className:`badge ${ps(t.overallGrade)}`,style:{fontSize:"0.8rem"},children:t.overallGrade})})]},t.studentId))})]})})})]}):U==="seat_plan"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>re("marks"),children:e.jsx(ks,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Kt,{size:22,style:{color:"#059669"}}),e.jsx("span",{children:"পরীক্ষার সিট প্ল্যান কার্ড (Exam Seat Plan)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শিক্ষার্থী নির্বাচন করে একসাথে ব্যাচ সিট প্ল্যান তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(Ka,{selectedExam:null,classes:L,user:z})]}):U==="admit_card"?e.jsxs("div",{className:"animate-fade-in",children:[e.jsx("div",{className:"page-header no-print",children:e.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>re("marks"),children:e.jsx(ks,{size:18})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ct,{size:22,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র জেনারেটর (Batch Admit Card)"})]}),e.jsx("p",{className:"page-subtitle",children:"ডাটাবেজ থেকে শ্রেণি ও শিক্ষার্থী নির্বাচন করে ব্যাচ প্রবেশপত্র তৈরি ও প্রিন্ট করুন"})]})]})}),e.jsx(en,{exams:ce,classes:L})]}):U==="routine"?da(!1):e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px",marginBottom:"20px"},children:[e.jsxs("div",{style:{minWidth:"220px"},children:[e.jsx("h1",{className:"page-title",style:{marginBottom:"4px"},children:"পরীক্ষা ও ফলাফল"}),e.jsx("p",{className:"page-subtitle",style:{margin:0},children:As?"আপনার শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":kt?"আপনার সন্তানের শ্রেণির সমস্ত পরীক্ষা এবং ফলাফল বিবরণী":`শাখা: ${ie} • মাদ্রাসার সমস্ত পরীক্ষা এবং পরীক্ষার ফলাফল পরিচালনা`})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#2563eb",color:"#1d4ed8",background:"rgba(37, 99, 235, 0.08)"},onClick:()=>{re("routine"),ke?ws():cs()},children:[e.jsx(Lt,{size:15,style:{color:"#2563eb"}}),e.jsx("span",{children:"পরীক্ষার রুটিন"})]}),!ke&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#059669",color:"#047857",background:"rgba(5, 150, 105, 0.08)"},onClick:()=>re("seat_plan"),children:[e.jsx(Kt,{size:15,style:{color:"#059669"}}),e.jsx("span",{children:"সিট প্ল্যান"})]}),!ke&&e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#0284c7",color:"#0369a1",background:"rgba(2, 132, 199, 0.08)"},onClick:()=>re("admit_card"),children:[e.jsx(Ct,{size:15,style:{color:"#0284c7"}}),e.jsx("span",{children:"প্রবেশপত্র"})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 12px",fontSize:"0.82rem",whiteSpace:"nowrap",borderColor:"#f59e0b",color:"#b45309",background:"rgba(245, 158, 11, 0.08)"},onClick:()=>{re("annual_combined");let t=te;t||(ke&&(Bt!=null&&Bt._id)?t=Bt._id:L.length>0&&(t=L[0]._id)),t&&(c(t),Ns(t,k))},children:[e.jsx(as,{size:15,style:{color:"#d97706"}}),e.jsx("span",{children:"সমন্বিত মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(z==null?void 0:z.userType)&&e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",fontSize:"0.82rem",whiteSpace:"nowrap"},onClick:()=>Oe(!0),children:[e.jsx(Xt,{size:15}),e.jsx("span",{children:"নতুন পরীক্ষা"})]})]})]}),kt&&yt.length>1&&e.jsxs("div",{className:"card mb-20 no-print",style:{padding:"12px 18px",background:"var(--card-bg, #fff)",border:"1px solid #3b82f6",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(xs,{size:18,style:{color:"#2563eb"}}),e.jsx("span",{style:{fontWeight:700,fontSize:"0.92rem",color:"var(--text-primary)"},children:"সন্তান নির্বাচন করুন:"})]}),e.jsx("select",{className:"form-input form-select",style:{minWidth:"220px",maxWidth:"340px",marginBottom:0,fontWeight:600},value:Et,onChange:t=>xn(t.target.value),children:yt.map(t=>{var o,d,p,r,w,y,f;const s=((o=t.user)==null?void 0:o.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((p=t.user)==null?void 0:p.lastName)||""}`.trim()||t.name||"শিক্ষার্থী",a=((w=(r=t.currentEnrollment)==null?void 0:r.classLevel)==null?void 0:w.name)||((y=t.currentEnrollment)==null?void 0:y.className)||"",n=(f=t.currentEnrollment)!=null&&f.rollNumber?` (রোল: ${t.currentEnrollment.rollNumber})`:"";return e.jsxs("option",{value:t._id,children:[s," — ",a,n]},t._id)})})]}),kt&&yt.length===1&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(xs,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"শিক্ষার্থী:"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((Da=yt[0].user)==null?void 0:Da.fullName)||`${((Fa=yt[0].user)==null?void 0:Fa.firstName)||""} ${((Oa=yt[0].user)==null?void 0:Oa.lastName)||""}`.trim()}),e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.78rem",marginLeft:"4px"},children:[((Ha=(Pa=yt[0].currentEnrollment)==null?void 0:Pa.classLevel)==null?void 0:Ha.name)||"শ্রেণি",(Ga=yt[0].currentEnrollment)!=null&&Ga.rollNumber?` • রোল: ${yt[0].currentEnrollment.rollNumber}`:""]})]}),As&&Bt&&e.jsxs("div",{className:"card mb-16 no-print",style:{padding:"10px 16px",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",color:"var(--text-muted)"},children:[e.jsx(xs,{size:16,style:{color:"#2563eb"}}),e.jsx("span",{children:"আপনার শ্রেণি:"}),e.jsx("span",{className:"badge badge-info",style:{fontSize:"0.82rem",marginLeft:"4px"},children:Bt.name||"শ্রেণি"})]}),Ce?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):ce.length===0?e.jsxs("div",{className:"card empty-state",children:[e.jsx(Ct,{size:48,style:{opacity:.3}}),e.jsx("div",{className:"empty-state-title mt-16",children:"কোনো পরীক্ষা পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted mt-8",children:"এখনও কোনো পরীক্ষা শিডিউল করা হয়নি।"})]}):e.jsx("div",{className:"grid grid-2",children:ce.map(t=>{var s,a;return e.jsxs("div",{className:"card animate-slide-up",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.25rem",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[e.jsx("span",{children:t.name}),t.examCategory==="term_exam"&&e.jsxs("span",{className:"badge badge-info",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["টার্ম ",t.termNumber||1]}),t.examCategory==="monthly_test"&&e.jsxs("span",{className:"badge badge-success",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মাসিক টেস্ট (",((s=Ks.find(n=>n.value===t.month))==null?void 0:s.label.split(" ")[0])||t.month,")"]}),t.examCategory==="model_test"&&e.jsxs("span",{className:"badge badge-warning",style:{fontSize:"0.68rem",padding:"2px 7px"},children:["মডেল টেস্ট ",t.termNumber||1]}),t.examCategory==="weekly_sabina"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(16, 185, 129, 0.15)",color:"#10b981",border:"1px solid rgba(16, 185, 129, 0.3)"},children:"সাপ্তাহিক সবিনা পরীক্ষা"}),t.examCategory==="tanzim_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(139, 92, 246, 0.15)",color:"#8b5cf6",border:"1px solid rgba(139, 92, 246, 0.3)"},children:"তানজিমুল মাদারিস বোর্ড"}),t.examCategory==="huffaz_board"&&e.jsx("span",{className:"badge",style:{fontSize:"0.68rem",padding:"2px 7px",background:"rgba(236, 72, 153, 0.15)",color:"#ec4899",border:"1px solid rgba(236, 72, 153, 0.3)"},children:"হুফফাজুল কুরআন বোর্ড"})]}),e.jsxs("div",{className:"text-sm text-muted",children:["শ্রেণি: ",((a=t.classLevel)==null?void 0:a.name)||"সকল শ্রেণি",t.examCategory==="monthly_test"&&e.jsx("span",{style:{marginLeft:"8px",color:"var(--primary)"},children:"• ৪টি নির্ধারিত বিষয়"})]})]}),e.jsx("span",{className:`badge ${Wn(t.status)}`,children:An(t.status)})]}),e.jsxs("div",{className:"flex gap-16 text-sm text-muted",children:[e.jsxs("span",{children:["শুরু: ",t.startDate?ls(t.startDate):"অজানা"]}),t.endDate&&e.jsxs("span",{children:["শেষ: ",ls(t.endDate)]})]}),e.jsxs("div",{className:"flex gap-8",style:{borderTop:"1px solid var(--border-color)",paddingTop:"16px",marginTop:"auto",flexWrap:"wrap"},children:[e.jsxs("button",{className:"btn btn-primary",style:{flex:1,minWidth:"100px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{re("marks"),na(t)},children:[e.jsx(Ct,{size:14}),e.jsx("span",{children:ke?"ফলাফল দেখুন":"নম্বর এন্ট্রি"})]}),!ke&&e.jsxs("button",{className:"btn btn-secondary",style:{flex:1,minWidth:"110px",fontSize:"0.85rem",padding:"8px 10px",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px"},onClick:()=>{re("merit"),na(t),vs("all",t)},children:[e.jsx(as,{size:14,style:{color:"#d97706"}}),e.jsx("span",{children:"মেধা তালিকা"})]}),["super_admin","admin","principal","teacher"].includes(z==null?void 0:z.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon",onClick:()=>gn(t),title:"সম্পাদনা",children:e.jsx(Vs,{size:16})}),["super_admin","admin","principal"].includes(z==null?void 0:z.userType)&&e.jsx("button",{className:"btn btn-secondary btn-icon text-danger",onClick:()=>fn(t._id),title:"মুছে ফেলুন",children:e.jsx(zs,{size:16})})]})]},t._id)})}),Qe&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&qs()},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"520px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-24",children:[e.jsx("h2",{style:{fontSize:"1.25rem"},children:Je?"পরীক্ষার তথ্য সম্পাদন":"নতুন পরীক্ষা শিডিউল করুন"}),e.jsx("button",{className:"btn-icon",onClick:qs,type:"button",children:e.jsx(Xt,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("form",{onSubmit:un,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e"},children:"পরীক্ষার ক্যাটাগরি *"}),e.jsx("select",{name:"examCategory",className:"form-input form-select",required:!0,value:J.examCategory,onChange:t=>{const s=t.target.value;let a="";s==="term_exam"?a="১ম সাময়িক পরীক্ষা":s==="model_test"?a="১ম মডেল টেস্ট":s==="monthly_test"?a="জানুয়ারি মাসের মাসিক ক্লাস টেস্ট":s==="weekly_sabina"?a="সাপ্তাহিক সবিনা পরীক্ষা":s==="tanzim_board"?a="তানজিমুল মাদারিস বোর্ড পরীক্ষা":s==="huffaz_board"?a="হুফফাজুল কুরআন বোর্ড পরীক্ষা":a="সাধারণ পরীক্ষা",ae(n=>({...n,examCategory:s,name:a,termNumber:1,month:"january",selectedSubjects:[]})),J.classLevel&&js(J.classLevel)},children:Kn.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),J.examCategory==="term_exam"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"টার্ম নির্বাচন করুন *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:J.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম সাময়িক পরীক্ষা",2:"২য় সাময়িক পরীক্ষা",3:"৩য় সাময়িক পরীক্ষা (বার্ষিক)"};ae(n=>({...n,termNumber:s,name:a[s]||`${s}ম সাময়িক পরীক্ষা`}))},children:[e.jsx("option",{value:"1",children:"১ম সাময়িক পরীক্ষা"}),e.jsx("option",{value:"2",children:"২য় সাময়িক পরীক্ষা"}),e.jsx("option",{value:"3",children:"৩য় সাময়িক পরীক্ষা (বার্ষিক পরীক্ষা)"})]})]}),J.examCategory==="model_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মডেল টেস্ট নম্বর *"}),e.jsxs("select",{name:"termNumber",className:"form-input form-select",value:J.termNumber,onChange:t=>{const s=parseInt(t.target.value)||1,a={1:"১ম মডেল টেস্ট",2:"২য় মডেল টেস্ট",3:"৩য় মডেল টেস্ট"};ae(n=>({...n,termNumber:s,name:a[s]||`${s}ম মডেল টেস্ট`}))},children:[e.jsx("option",{value:"1",children:"১ম মডেল টেস্ট"}),e.jsx("option",{value:"2",children:"২য় মডেল টেস্ট"}),e.jsx("option",{value:"3",children:"৩য় মডেল টেস্ট"})]})]}),J.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",style:{fontWeight:600},children:"মাসিক পরীক্ষার মাস *"}),e.jsx("select",{name:"month",className:"form-input form-select",value:J.month,onChange:t=>{const s=t.target.value,a=Ks.find(o=>o.value===s),n=a?a.label.split(" ")[0]:s;ae(o=>({...o,month:s,name:`${n} মাসের মাসিক ক্লাস টেস্ট`}))},children:Ks.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"পরীক্ষার নাম *"}),e.jsx("input",{type:"text",name:"name",className:"form-input",required:!0,value:J.name,onChange:Ws,placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৪"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শ্রেণি *"}),e.jsxs("select",{name:"classLevel",className:"form-input form-select",required:!0,value:J.classLevel,onChange:t=>{const s=t.target.value;ae(a=>({...a,classLevel:s,selectedSubjects:[]})),js(s)},children:[e.jsx("option",{value:"",children:"সকল শ্রেণি / শ্রেণি নির্বাচন করুন"}),L.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),J.examCategory==="monthly_test"&&e.jsxs("div",{className:"form-group",style:{background:"rgba(16, 185, 129, 0.05)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16, 185, 129, 0.25)",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[e.jsx("label",{className:"form-label",style:{margin:0,fontWeight:700,color:"#065f46"},children:"সিলেবাস অনুযায়ী ৪টি বিষয় নির্বাচন করুন *"}),e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,padding:"2px 8px",borderRadius:"12px",background:J.selectedSubjects.length===4?"#10b981":"#f59e0b",color:"#fff"},children:["নির্বাচিত: ",J.selectedSubjects.length,"/৪ টি"]})]}),J.classLevel?H.length===0?e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"এই শ্রেণির জন্য কোনো বিষয় পাওয়া যায়নি।"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"8px",maxHeight:"160px",overflowY:"auto"},children:H.map(t=>{const s=J.selectedSubjects.includes(t._id);return e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",borderRadius:"6px",background:s?"rgba(16, 185, 129, 0.15)":"var(--bg-card)",border:s?"1px solid #10b981":"1px solid var(--border-color)",cursor:"pointer",fontSize:"0.84rem"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>{const a=J.selectedSubjects;if(s)ae(n=>({...n,selectedSubjects:a.filter(o=>o!==t._id)}));else{if(a.length>=4){E({type:"error",message:"মাসিক পরীক্ষার জন্য সর্বোচ্চ ৪টি বিষয় নির্বাচন করতে পারবেন"});return}ae(n=>({...n,selectedSubjects:[...a,t._id]}))}}}),e.jsx("span",{children:t.name})]},t._id)})}):e.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"প্রথমে উপরের ড্রপডাউন থেকে একটি শ্রেণি নির্বাচন করুন।"})]}),e.jsxs("div",{className:"grid grid-2",style:{gap:"16px"},children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শুরুর তারিখ"}),e.jsx("input",{type:"date",name:"startDate",className:"form-input",value:J.startDate,onChange:Ws})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"শেষের তারিখ"}),e.jsx("input",{type:"date",name:"endDate",className:"form-input",value:J.endDate,onChange:Ws})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"অবস্থা (Status)"}),e.jsxs("select",{name:"status",className:"form-input form-select",value:J.status,onChange:Ws,children:[e.jsx("option",{value:"upcoming",children:"আসন্ন (Upcoming)"}),e.jsx("option",{value:"ongoing",children:"চলমান (Ongoing)"}),e.jsx("option",{value:"completed",children:"সমাপ্ত (Completed)"}),e.jsx("option",{value:"published",children:"ফলাফল প্রকাশিত (Published)"})]})]}),e.jsxs("div",{className:"flex gap-16 mt-24",style:{justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:qs,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:dt,children:dt?"সংরক্ষণ হচ্ছে...":"সংরক্ষণ করুন"})]})]})]})})]}),_s&&e.jsx("div",{className:"modal-overlay",style:{zIndex:1200},children:e.jsxs("div",{className:"modal-content",style:{maxWidth:"920px",width:"96%",maxHeight:"92vh",overflowY:"auto",borderRadius:"16px"},children:[e.jsxs("div",{className:"modal-header",style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",padding:"16px 24px"},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"modal-title",style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"1.2rem",color:"#0f766e",margin:0},children:[e.jsx(Lt,{size:22,style:{color:"#0f766e"}}),e.jsx("span",{children:os?"পরীক্ষার রুটিন সম্পাদনা":"নতুন পরীক্ষার রুটিন তৈরি"})]}),e.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"0.8rem",color:"var(--text-secondary)"},children:"শ্রেণি ও বিভাগ নির্বাচন করে বিষয়ভিত্তিক পরীক্ষার সময়সূচি সহজে তৈরি ও প্রকাশ করুন"})]}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",onClick:()=>ts(!1),title:"বন্ধ করুন",children:e.jsx(ea,{size:20})})]}),e.jsxs("form",{onSubmit:kn,children:[e.jsxs("div",{className:"modal-body",style:{display:"flex",flexDirection:"column",gap:"18px",padding:"20px 24px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,fontSize:"0.85rem",marginBottom:"4px",color:"#0f172a"},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",height:"36px",fontSize:"0.9rem",padding:"6px 12px",borderRadius:"8px"},placeholder:"যেমন: ১ম সাময়িক পরীক্ষা ২০২৬ — পরীক্ষার রুটিন",value:pt.title,onChange:t=>bt(s=>({...s,title:t.target.value})),required:!0})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"10px"},children:[e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"বিভাগ (Stream) *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:pt.stream,onChange:t=>bt(s=>({...s,stream:t.target.value})),required:!0,children:[e.jsx("option",{value:"noorani",children:"📖 নূরানী বিভাগ (Noorani)"}),e.jsx("option",{value:"hifz",children:"🕌 হিফজ বিভাগ (Hifz)"}),e.jsx("option",{value:"kitab",children:"📚 কিতাব বিভাগ (Kitab)"})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"সংশ্লিষ্ট পরীক্ষা *"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:pt.exam,onChange:t=>{const s=ce.find(a=>a._id===t.target.value);bt(a=>({...a,exam:t.target.value,examName:s?s.name:""}))},required:!0,children:[e.jsx("option",{value:"",children:"পরীক্ষা নির্বাচন করুন"}),ce.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"শ্রেণি (Class Level)"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:pt.classLevel,onChange:t=>{const s=t.target.value,a=L.find(n=>n._id===s);bt(n=>({...n,classLevel:s,className:a?a.name:""})),s&&js(s)},children:[e.jsx("option",{value:"",children:"সাধারণ / সকল শ্রেণি"}),L.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"স্ট্যাটাস"}),e.jsxs("select",{className:"form-input form-select",style:{width:"100%",height:"36px",fontSize:"0.85rem",padding:"6px 10px",borderRadius:"8px"},value:pt.status,onChange:t=>bt(s=>({...s,status:t.target.value})),children:[e.jsx("option",{value:"published",children:"🟢 প্রকাশিত (Published)"}),e.jsx("option",{value:"draft",children:"⚪ খসড়া (Draft)"})]})]})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:0,width:"100%"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:600,fontSize:"0.8rem",marginBottom:"4px"},children:"পরীক্ষার্থীদের জন্য বিশেষ নির্দেশনাবলী"}),e.jsx("textarea",{className:"form-input",rows:"2",style:{width:"100%",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"8px",resize:"vertical"},placeholder:"যেমন: পরীক্ষা শুরুর ১৫ মিনিট পূর্বে নিজ নিজ আসনে উপস্থিত থাকতে হবে...",value:pt.instructions,onChange:t=>bt(s=>({...s,instructions:t.target.value}))})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("h3",{style:{margin:0,fontWeight:700,fontSize:"0.92rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"6px"},children:e.jsx("span",{children:"📋 সময়সূচি ও বিষয়ের তালিকা"})}),e.jsxs("span",{style:{fontSize:"0.75rem",background:"#e0f2fe",color:"#0369a1",padding:"2px 8px",borderRadius:"12px",fontWeight:700},children:[lt(pt.schedule.length),"টি বিষয়"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[H&&H.length>0&&e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:wn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px",borderColor:"#0f766e",color:"#0f766e",background:"rgba(15, 118, 110, 0.06)"},title:"নির্বাচিত শ্রেণির সকল নির্ধারিত বিষয় এক ক্লিকে সময়সূচিতে যোগ করুন",children:e.jsx("span",{children:"⚡ শ্রেণির সকল বিষয় যোগ করুন"})}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:zn,style:{fontSize:"0.8rem",padding:"5px 10px",display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Xt,{size:14})," ",e.jsx("span",{children:"সারি যোগ করুন"})]})]})]}),e.jsxs("div",{className:"routine-form-desktop-rows",style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 10px",background:"#0f766e",color:"#ffffff",borderRadius:"8px",fontSize:"0.78rem",fontWeight:700},children:[e.jsx("span",{style:{width:"28px",textAlign:"center",flexShrink:0},children:"#"}),e.jsx("span",{style:{width:"135px",flexShrink:0},children:"তারিখ"}),e.jsx("span",{style:{width:"62px",textAlign:"center",flexShrink:0},children:"বার"}),e.jsx("span",{style:{flex:1,minWidth:"150px"},children:"পরীক্ষার বিষয়"}),e.jsx("span",{style:{width:"60px",textAlign:"center",flexShrink:0},children:"পূর্ণমান"}),e.jsx("span",{style:{width:"168px",textAlign:"center",flexShrink:0},children:"সময়সূচি (শুরু — শেষ)"}),e.jsx("span",{style:{width:"55px",textAlign:"center",flexShrink:0},children:"কক্ষ"}),e.jsx("span",{style:{width:"28px",flexShrink:0}})]}),pt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"4px 10px",background:s%2===1?"#f8fafc":"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.02)",transition:"border-color 0.15s"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:lt(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{width:"135px",padding:"4px 6px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},value:t.date||"",onChange:n=>{const o=n.target.value;ue(s,"date",o),o&&ue(s,"day",ds(o))},required:!0}),e.jsx("span",{style:{width:"62px",textAlign:"center",background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"4px 0",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:t.day||"তারিখ দিলে স্বয়ংক্রিয় আসবে",children:t.day||"স্বয়ংক্রিয়"}),e.jsx("div",{style:{flex:1,minWidth:"150px",display:"flex",gap:"4px",alignItems:"center"},children:H&&H.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const o=n.target.value;if(o==="custom")ue(s,"subject","custom");else{const d=H.find(p=>p._id===o);d&&(ue(s,"subject",d._id),ue(s,"subjectName",d.name),ue(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয় বেছে নিন"}),H.map(n=>e.jsxs("option",{value:n._id,children:[n.name," (",n.totalMarks||100," নম্বর)"]},n._id)),e.jsx("option",{value:"custom",children:"✏️ অন্যান্য বিষয় (কাস্টম টাইপ)"})]}),(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"130px",padding:"4px 6px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"বিষয়ের নাম...",value:t.subjectName||"",onChange:n=>{ue(s,"subjectName",n.target.value),ue(s,"subject",n.target.value)},required:!0})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"4px 8px",fontSize:"0.82rem",height:"32px",borderRadius:"6px"},placeholder:"যেমন: বাংলা / আল-কুরআন",value:t.subjectName||"",onChange:n=>{ue(s,"subjectName",n.target.value),ue(s,"subject",n.target.value)},required:!0})}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"60px",textAlign:"center",padding:"4px 2px",fontSize:"0.82rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০০",value:t.totalMarks||"",onChange:n=>ue(s,"totalMarks",n.target.value)}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"3px",width:"168px",flexShrink:0},children:[e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ue(s,"startTime",n.target.value)}),e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.75rem",userSelect:"none"},children:"—"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"80px",textAlign:"center",padding:"4px 2px",fontSize:"0.78rem",height:"32px",borderRadius:"6px"},placeholder:"১২:৩০",value:t.endTime||"",onChange:n=>ue(s,"endTime",n.target.value)})]}),e.jsx("input",{type:"text",className:"form-input",style:{width:"55px",textAlign:"center",padding:"4px 2px",fontSize:"0.8rem",height:"32px",flexShrink:0,borderRadius:"6px"},placeholder:"১০১",value:t.roomNo||"",onChange:n=>ue(s,"roomNo",n.target.value)}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"4px",width:"28px",height:"28px",flexShrink:0},onClick:()=>oa(s),disabled:pt.schedule.length<=1,title:"এই বিষয়টি মুছুন",children:e.jsx(zs,{size:15})})]},s)})]}),e.jsx("div",{className:"routine-form-mobile-cards",style:{display:"none",flexDirection:"column",gap:"8px"},children:pt.schedule.map((t,s)=>{var a;return e.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"10px",padding:"8px 10px",boxShadow:"0 1px 3px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",width:"100%"},children:[e.jsx("span",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"#0f766e",color:"#fff",fontSize:"0.72rem",fontWeight:700,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:lt(s+1)}),e.jsx("input",{type:"date",className:"form-input",style:{flex:1,padding:"4px 6px",fontSize:"0.8rem",height:"30px",borderRadius:"6px"},value:t.date||"",onChange:n=>{const o=n.target.value;ue(s,"date",o),o&&ue(s,"day",ds(o))},required:!0}),e.jsx("span",{style:{background:t.day?"#ecfdf5":"#f8fafc",color:t.day?"#065f46":"#94a3b8",border:`1px solid ${t.day?"#a7f3d0":"#e2e8f0"}`,padding:"2px 8px",borderRadius:"6px",fontSize:"0.72rem",fontWeight:700,flexShrink:0},children:t.day||"বার"}),e.jsx("button",{type:"button",className:"btn btn-ghost btn-icon",style:{color:"#ef4444",padding:"3px",width:"26px",height:"26px",flexShrink:0},onClick:()=>oa(s),disabled:pt.schedule.length<=1,title:"মুছুন",children:e.jsx(zs,{size:14})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",width:"100%"},children:[e.jsx("div",{style:{flex:1,minWidth:"95px"},children:H&&H.length>0?e.jsxs("select",{className:"form-input form-select",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},value:t.subject||((a=H.find(n=>n.name===t.subjectName))==null?void 0:a._id)||"custom",onChange:n=>{const o=n.target.value;if(o==="custom")ue(s,"subject","custom");else{const d=H.find(p=>p._id===o);d&&(ue(s,"subject",d._id),ue(s,"subjectName",d.name),ue(s,"totalMarks",Number(d.totalMarks)||100))}},required:!0,children:[e.jsx("option",{value:"",children:"বিষয়..."}),H.map(n=>e.jsx("option",{value:n._id,children:n.name},n._id)),e.jsx("option",{value:"custom",children:"✏️ কাস্টম"})]}):e.jsx("input",{type:"text",className:"form-input",style:{width:"100%",padding:"3px 6px",fontSize:"0.78rem",height:"30px",borderRadius:"6px"},placeholder:"বিষয়...",value:t.subjectName||"",onChange:n=>{ue(s,"subjectName",n.target.value),ue(s,"subject",n.target.value)},required:!0})}),H&&H.length>0&&(t.subject==="custom"||!H.some(n=>n._id===t.subject)&&t.subjectName)&&e.jsx("input",{type:"text",className:"form-input",style:{width:"70px",padding:"3px 4px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"নাম...",value:t.subjectName||"",onChange:n=>{ue(s,"subjectName",n.target.value),ue(s,"subject",n.target.value)},required:!0}),e.jsx("input",{type:"text",inputMode:"decimal",className:"form-input",style:{width:"45px",textAlign:"center",padding:"2px",fontSize:"0.78rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"পূর্ণমান",value:t.totalMarks||"",onChange:n=>ue(s,"totalMarks",n.target.value),title:"পূর্ণমান"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"65px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"০৯:৩০",value:t.startTime||"",onChange:n=>ue(s,"startTime",n.target.value),title:"শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",style:{width:"40px",textAlign:"center",padding:"2px",fontSize:"0.75rem",height:"30px",flexShrink:0,borderRadius:"6px"},placeholder:"কক্ষ",value:t.roomNo||"",onChange:n=>ue(s,"roomNo",n.target.value),title:"কক্ষ নম্বর"})]})]},s)})})]})]}),e.jsxs("div",{className:"modal-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f8fafc",padding:"16px 24px",borderTop:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"* সকল তথ্য যাচাই করে সংরক্ষণ করুন"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>ts(!1),disabled:rs,children:"বাতিল"}),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:rs,children:rs?"সংরক্ষণ হচ্ছে...":os?"রুটিন আপডেট করুন":"রুটিন প্রকাশ করুন"})]})]})]})]})}),M&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1050,backdropFilter:"blur(4px)"},onClick:t=>{t.target===t.currentTarget&&at(!1)},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"480px",margin:"20px"},children:[e.jsxs("div",{className:"flex-between mb-20",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[e.jsxs("h2",{style:{fontSize:"1.2rem",display:"flex",alignItems:"center",gap:"8px",margin:0,fontWeight:700},children:[e.jsx(rt,{size:20,style:{color:"var(--primary)"}})," মেধা তালিকা প্রিন্ট ও পৃষ্ঠা বিন্যাস"]}),e.jsx("button",{className:"btn-icon",onClick:()=>at(!1),type:"button",children:e.jsx(Xt,{size:20,style:{transform:"rotate(45deg)"}})})]}),e.jsxs("div",{className:"form-group mb-20",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"পৃষ্ঠা বিন্যাস (Page Orientation) নির্বাচন করুন:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:[e.jsxs("button",{type:"button",onClick:()=>Mt("landscape"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:We==="landscape"?700:500,background:We==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:We==="landscape"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:We==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📑"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"ল্যান্ডস্কেপ (Landscape)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:We==="landscape"?"#0f766e":"#64748b"},children:"(সুপারিশকৃত - বহু বিষয়ের জন্য)"})]}),e.jsxs("button",{type:"button",onClick:()=>Mt("portrait"),style:{padding:"12px 14px",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontWeight:We==="portrait"?700:500,background:We==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary, #f8fafc)",border:We==="portrait"?"2px solid #0f766e":"1px solid var(--border-color, #e2e8f0)",color:We==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.2s"},children:[e.jsx("span",{style:{fontSize:"1.6rem"},children:"📄"}),e.jsx("span",{style:{fontSize:"0.95rem"},children:"পোর্ট্রেট (Portrait)"}),e.jsx("span",{style:{fontSize:"0.74rem",opacity:.85,color:We==="portrait"?"#0f766e":"#64748b"},children:"(উল্লম্ব সাধারণ প্রিন্ট)"})]})]})]}),e.jsxs("div",{className:"form-group mb-24",style:{marginBottom:"24px"},children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,marginBottom:"8px",display:"block",fontSize:"0.9rem"},children:"প্রিন্ট কপিতে স্বাক্ষরকারী পদবিসমূহ:"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["শ্রেণী শিক্ষক","প্রতিষ্ঠান প্রধান","পরিচালক","প্রধান শিক্ষক, নূরানী বিভাগ","প্রধান শিক্ষিকা, বালিকা শাখা"].map(t=>{const s=he.includes(t);return e.jsxs("button",{type:"button",onClick:()=>{let a;if(s){if(he.length<=1)return;a=he.filter(n=>n!==t)}else a=[...he,t];$e(a);try{localStorage.setItem("annur_footer_roles__exams",JSON.stringify(a))}catch{}},className:`btn btn-sm ${s?"btn-primary":"btn-ghost"}`,style:{fontSize:"0.82rem",padding:"4px 10px"},children:[s?"✓ ":"+ "," ",t]},t)})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>at(!1),style:{flex:1},children:"বাতিল"}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>{at(!1),In(We,he)},style:{flex:2,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[e.jsx(rt,{size:16})," প্রিন্ট প্রিভিউ শুরু করুন"]})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{wl as default};
