import{k as ye,r as i,j as e,D as Ke,X as Ge,a3 as Et,Y as Bt,F as It,_ as bt,m as Lt,d as ne,u as _t,a as Dt,n as Tt,z as $t,G as vt,i as jt,W as At,$ as it,I as Ft,H as Rt}from"./index-DCHhlWtH.js";import{S as Wt}from"./constants-C6HvYUtm.js";import{g as dt}from"./helpers-CljGnr5z.js";import{g as Mt,a as Pt,b as Ht}from"./madrasahPrintUtils-Jjq-64Kz.js";import{D as wt,P as Ut}from"./PrintSignatureRoleSelector-Oecwln2Z.js";import{C as gt}from"./chevron-down-clgxzpJ3.js";import{S as Ot}from"./square-qx547bLW.js";import{P as zt}from"./plus-BNI-WV7L.js";import{F as qt}from"./file-spreadsheet-GxgAq1ol.js";import{P as Kt}from"./printer-CQW4Oynm.js";import{A as St}from"./AuditBadge-CstpC45W.js";import{T as ft}from"./trash-2-DVdMeBiq.js";import{Z as kt}from"./zoom-in-BCVrleFm.js";import{E as Ct}from"./eye-CRpD9K-R.js";import{S as Nt}from"./square-pen-BN2HdiIx.js";import{M as Gt}from"./maximize-2-Zh0zmqWq.js";import{E as Vt}from"./external-link-CrDEFGnt.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=ye("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=ye("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=ye("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=ye("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=ye("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]),fe=[{id:"roll",label:"রোল নম্বর",category:"একাডেমিক",defaultChecked:!0},{id:"photo",label:"ছবি",category:"ব্যক্তিগত",defaultChecked:!0},{id:"name",label:"শিক্ষার্থীর নাম (বাংলা)",category:"সাধারণ",defaultChecked:!0},{id:"nameEn",label:"শিক্ষার্থীর নাম (ইংরেজি)",category:"সাধারণ",defaultChecked:!1},{id:"studentId",label:"ছাত্র আইডি",category:"সাধারণ",defaultChecked:!0},{id:"className",label:"শ্রেণি",category:"একাডেমিক",defaultChecked:!0},{id:"sectionName",label:"শাখা / সেকশন",category:"একাডেমিক",defaultChecked:!0},{id:"branchName",label:"শাখা (Branch)",category:"একাডেমিক",defaultChecked:!0},{id:"fatherName",label:"পিতার নাম",category:"অভিভাবক",defaultChecked:!0},{id:"motherName",label:"মাতার নাম",category:"অভিভাবক",defaultChecked:!1},{id:"phone",label:"অভিভাবকের ফোন নম্বর",category:"অভিভাবক",defaultChecked:!0},{id:"guardianName",label:"অভিভাবকের নাম",category:"অভিভাবক",defaultChecked:!1},{id:"dateOfBirth",label:"জন্ম তারিখ",category:"ব্যক্তিগত",defaultChecked:!1},{id:"nid",label:"জন্ম নিবন্ধন / এনআইডি",category:"ব্যক্তিগত",defaultChecked:!1},{id:"gender",label:"লিঙ্গ",category:"ব্যক্তিগত",defaultChecked:!1},{id:"bloodGroup",label:"রক্তের গ্রুপ",category:"ব্যক্তিগত",defaultChecked:!1},{id:"village",label:"ঠিকানা / গ্রাম",category:"ব্যক্তিগত",defaultChecked:!1},{id:"department",label:"শিক্ষা বিভাগ / স্ট্রিম",category:"একাডেমিক",defaultChecked:!1},{id:"hifzProgramType",label:"হিফজ প্রোগ্রামের ধরন",category:"একাডেমিক",defaultChecked:!1},{id:"residentialStatus",label:"আবাসিক অবস্থা",category:"একাডেমিক",defaultChecked:!1},{id:"admissionDate",label:"ভর্তির তারিখ",category:"একাডেমিক",defaultChecked:!1},{id:"status",label:"স্ট্যাটাস",category:"একাডেমিক",defaultChecked:!1}],yt=["প্লে","নার্সারী","তৃতীয়","প্রথম","কেজি","শিশু","দ্বিতীয়","চতুর্থ","পঞ্চম","ষষ্ঠ","সপ্তম","অষ্টম","নবম","দশম","হিফজ"],ts={active:"সক্রিয়",inactive:"নিষ্ক্রিয়",graduated:"স্নাতক",transferred:"স্থানান্তরিত",suspended:"স্থগিত"},ot=y=>{if(y==null||y==="")return 999999;const k=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];let j=String(y).trim();k.forEach((q,K)=>{j=j.replaceAll(q,String(K))});const J=parseInt(j.replace(/[^0-9]/g,""),10);return isNaN(J)?999999:J},lt=y=>{if(!y)return 999999;const k={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},j=String(y).trim().toUpperCase().replace(/[০-৯]/g,G=>k[G]),q=j.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(q)return parseInt(q[1],10);const K=j.replace(/\D/g,"");return K?parseInt(K,10):999999};function ss({isOpen:y,onClose:k,currentStudents:j=[],totalCount:J=0,activeFilters:q={},selectedIds:K=[],classes:G=[],branches:te=[],sections:ie=[],institutionName:oe,branchName:Ve}){var rt;const Ye=dt(),be=oe||Ye.madrasahName,H=Ve||Ye.branchName,[W,le]=i.useState(q.classLevel||""),[N,ve]=i.useState(q.section||""),[V,pt]=i.useState(q.branch||""),[je,se]=i.useState("all"),[b,we]=i.useState(()=>{try{const s=localStorage.getItem("annur_footer_roles__student_export");return s?JSON.parse(s):wt}catch{return wt}}),[Se,re]=i.useState(()=>{const s={};return fe.forEach(l=>{s[l.id]=l.defaultChecked}),s}),I=i.useMemo(()=>fe.filter(s=>Se[s.id]),[Se]),[g,ke]=i.useState("className"),[v,Ce]=i.useState("asc"),[z,Ne]=i.useState("roll"),[$,ce]=i.useState(yt),[de,Je]=i.useState(""),[pe,Ze]=i.useState(!1),[Qe,E]=i.useState(yt.join(`
`)),[A,Z]=i.useState("pdf"),[F,D]=i.useState("portrait"),[me,R]=i.useState(!1),[Xe,B]=i.useState(""),[Ie,Q]=i.useState(J||j.length);if(i.useEffect(()=>{I.length>0&&(I.some(l=>l.id===g)||ke(I[0].id))},[I,g]),i.useEffect(()=>{E($.join(`
`))},[$]),i.useEffect(()=>{let s=!1;return y&&(async()=>{var p,u;try{const h={limit:1,page:1};W&&(h.classLevel=W),V&&(h.branch=V),N&&(N.includes(",")?h.sections=N:h.section=N);const t=await ne.get("/students",{params:h});!s&&((u=(p=t.data)==null?void 0:p.pagination)==null?void 0:u.total)!==void 0&&Q(t.data.pagination.total)}catch{}})(),()=>{s=!0}},[W,N,V,y]),!y)return null;const et=s=>{re(l=>{const p={...l,[s]:!l[s]};return Object.values(p).some(Boolean)?p:l})},C=s=>{const l={};fe.forEach(p=>{l[p.id]=s}),!s&&fe.length>0&&(l[fe[0].id]=!0),re(l)},X=(s,l)=>{const p=s+l;if(p<0||p>=$.length)return;const u=[...$],h=u[s];u[s]=u[p],u[p]=h,ce(u)},ae=s=>{ce($.filter((l,p)=>p!==s))},U=()=>{const s=de.trim();s&&($.includes(s)||ce([...$,s]),Je(""))},O=()=>{const s=Qe.split(`
`).map(p=>p.trim()).filter(Boolean),l=[...new Set(s)];ce(l),Ze(!1)},mt=async()=>{var p;const s={limit:1e4,page:1};return W&&(s.classLevel=W),V&&(s.branch=V),N&&(N.includes(",")?s.sections=N:s.section=N),((p=(await ne.get("/students",{params:s})).data)==null?void 0:p.data)||[]},ut=s=>{var ze,Ee,Be,Le,_e,De,Te,$e,Ae,Fe,Re,We,Me,Pe,He,Ue,Oe,qe;const l=((ze=s.user)==null?void 0:ze.fullName)||`${((Ee=s.user)==null?void 0:Ee.firstName)||""} ${((Be=s.user)==null?void 0:Be.lastName)||""}`.trim()||"—",p=`${((Le=s.user)==null?void 0:Le.firstNameEn)||""} ${((_e=s.user)==null?void 0:_e.lastNameEn)||""}`.trim()||"—",u=((De=s.currentEnrollment)==null?void 0:De.rollNumber)||s.rollNumber||"—",h=s.studentId||s.admissionNumber||"—",t=(($e=(Te=s.currentEnrollment)==null?void 0:Te.classLevel)==null?void 0:$e.name)||(typeof((Ae=s.currentEnrollment)==null?void 0:Ae.classLevel)=="string"?s.currentEnrollment.classLevel:"—"),n=((Re=(Fe=s.currentEnrollment)==null?void 0:Fe.section)==null?void 0:Re.name)||(typeof((We=s.currentEnrollment)==null?void 0:We.section)=="string"?s.currentEnrollment.section:"—"),r=((Me=s.branch)==null?void 0:Me.name)||(typeof s.branch=="string"?s.branch:"—"),o=s.fatherName||"—",a=s.motherName||"—",c=((Pe=s.guardian)==null?void 0:Pe.phone)||((He=s.user)==null?void 0:He.phone)||"—",d=((Ue=s.guardian)==null?void 0:Ue.name)||(typeof((Oe=s.guardian)==null?void 0:Oe.user)=="object"?s.guardian.user.fullName:"")||"—";let f="—";if(s.dateOfBirth)try{f=new Date(s.dateOfBirth).toLocaleDateString("bn-BD",{day:"numeric",month:"short",year:"numeric"})}catch{}const L=s.nationalIdOrBirthCertNo||"—",_=s.gender==="male"?"ছাত্র":s.gender==="female"?"ছাত্রী":s.gender||"—",M=s.bloodGroup||"—",P=s.village||"—",Y=s.department||"—",T=s.hifzProgramType||"—",m=s.residentialStatus==="residential"?"আবাসিক":s.residentialStatus==="day-care"?"ডে কেয়ার":"অনাবাসিক";let x="—";if(s.admissionDate)try{x=new Date(s.admissionDate).toLocaleDateString("bn-BD",{day:"numeric",month:"short",year:"numeric"})}catch{}const ee=ts[s.status]||s.status||"সক্রিয়",nt=s.photo||((qe=s.user)==null?void 0:qe.photo)||"";return{raw:s,photo:nt,roll:u,name:l,nameEn:p,studentId:h,className:t,sectionName:n,branchName:r,fatherName:o,motherName:a,phone:c,guardianName:d,dateOfBirth:f,nid:L,gender:_,bloodGroup:M,village:P,department:Y,hifzProgramType:T,residentialStatus:m,admissionDate:x,status:ee}},tt=s=>{const l=[...s],p=$.map(u=>u.trim().toLowerCase()).filter(Boolean);return l.sort((u,h)=>{let t=0;if(p.length>0&&["className","branchName","sectionName","department","residentialStatus","status"].includes(g)){const n=String(u[g]||"").toLowerCase(),r=String(h[g]||"").toLowerCase(),o=p.findIndex(f=>n.includes(f)),a=p.findIndex(f=>r.includes(f)),c=o!==-1?o:999999,d=a!==-1?a:999999;c!==d&&(t=v==="asc"?c-d:d-c)}if(t===0)if(g==="studentId"){const n=lt(u.studentId),r=lt(h.studentId);n!==r&&(t=v==="asc"?n-r:r-n)}else if(g==="roll"){const n=ot(u.roll),r=ot(h.roll);n!==r&&(t=v==="asc"?n-r:r-n)}else{const n=String(u[g]||""),r=String(h[g]||""),o=n.localeCompare(r,"bn");o!==0&&(t=v==="asc"?o:-o)}if(t!==0)return t;if(z&&z!=="none"&&z!==g)if(z==="studentId"){const n=lt(u.studentId),r=lt(h.studentId);if(n!==r)return n-r}else if(z==="roll"){const n=ot(u.roll),r=ot(h.roll);if(n!==r)return n-r}else{const n=String(u[z]||""),r=String(h[z]||"");return n.localeCompare(r,"bn")}return 0}),l},ht=async()=>{R(!0),B("ডাটা সংগ্রহ ও ফিল্টার করা হচ্ছে...");try{let s=[];if(je==="selected"&&K.length>0?s=j.filter(u=>K.includes(u._id)):je==="page"?s=[...j]:s=await mt(),s.length===0){alert("রপ্তানি করার মতো কোনো ছাত্র/ছাত্রীর তথ্য পাওয়া যায়নি। ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।"),R(!1);return}B(`${s.length} জন শিক্ষার্থীর তথ্য সাজানো হচ্ছে...`);const l=s.map(ut),p=tt(l);A==="csv"?(B("CSV ফাইল তৈরি করা হচ্ছে..."),xt(p,I)):(B("PDF ডকুমেন্ট তৈরি করা হচ্ছে..."),st(p,I)),setTimeout(()=>{R(!1),B(""),k()},600)}catch(s){console.error("Export failed:",s),alert("রপ্তানি করার সময় সমস্যা হয়েছে: "+(s.message||"ত্রুটি")),R(!1),B("")}},xt=(s,l)=>{const p=["নং",...l.map(o=>`"${o.label.replace(/"/g,'""')}"`)].join(","),u=s.map((o,a)=>[a+1,...l.map(d=>{const f=o[d.id]||"";return`"${String(f).replace(/"/g,'""')}"`})].join(",")),h="\uFEFF"+[p,...u].join(`
`),t=new Blob([h],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",`students_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},st=(s,l)=>{const p=window.open("","_blank");if(!p){alert("পপআপ উইন্ডো ব্লক করা হয়েছে। অনুগ্রহ করে ব্রাউজারের পপআপ পারমিশন এলাউ করুন।");return}const u=new Date().toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric"});let h="সকল";if(W){const n=G.find(r=>String(r._id)===String(W));h=(n==null?void 0:n.name)||W}if(N&&(h+=` (${N})`),V){const n=te.find(r=>String(r._id)===String(V));n!=null&&n.name&&(h+=` — ${n.name}`)}const t=`
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${be} — ছাত্র/ছাত্রী তালিকা (${H})</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${Mt(F,{wrap:!1})}
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 9pt;
    }
    th {
      background-color: #0f766e;
      color: #ffffff;
      font-weight: 700;
      text-align: left;
      padding: 6px 8px;
      border: 1px solid #0f766e;
      font-size: 9pt;
    }
    td {
      padding: 5px 8px;
      border: 1px solid #cbd5e1;
      font-size: 8.8pt;
      vertical-align: middle;
      color: #1e293b;
    }
    tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .sl-cell {
      text-align: center;
      width: 38px;
      font-weight: 600;
      color: #475569;
    }
    .status-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 7.8pt;
      font-weight: 600;
      background: #e2e8f0;
      color: #334155;
    }
    @media print {
      body { padding: 0 !important; }
    }
    @page {
      size: A4 ${F};
      margin: 6mm 10mm !important;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      color: #0f172a;
    }
    #raw-content {
      position: absolute;
      visibility: hidden;
      left: -9999px;
      top: -9999px;
      width: ${F==="landscape"?"277mm":"190mm"};
    }
    .print-page {
      position: relative;
      width: 100%;
      height: calc(${F==="landscape"?"210mm":"297mm"} - 12mm);
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
    }
    .page-bottom {
      width: 100%;
      margin-top: auto;
      padding-top: 14px;
      position: relative;
      z-index: 10;
    }
    .print-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${F==="landscape"?"360px":"420px"};
      height: ${F==="landscape"?"360px":"420px"};
      max-width: 80%;
      max-height: 80%;
      pointer-events: none;
      user-select: none;
      z-index: 0;
      opacity: 0.085;
      object-fit: contain;
    }
  </style>
</head>
<body>
  <!-- Container where partitioned pages will be placed -->
  <div id="pages-container"></div>

  <!-- Hidden source content used for accurate DOM measurement -->
  <div id="raw-content">
    <div class="header-wrap">
      ${Pt({title:"ছাত্র/ছাত্রী পূর্ণাঙ্গ বিবরণী ও তালিকা",orientation:F,metaLeft:`<span style="white-space:nowrap;"><strong>শ্রেণি:</strong> ${h}</span>`,metaRight:`<span style="white-space:nowrap;"><strong>তারিখ:</strong> ${u}</span>`,showWatermark:!1})}
    </div>

    <table>
      <thead>
        <tr>
          <th class="sl-cell">নং</th>
          ${l.map(n=>`<th${n.id==="photo"?' style="text-align:center; width:44px;"':""}>${n.label}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${s.map((n,r)=>`
          <tr>
            <td class="sl-cell">${r+1}</td>
            ${l.map(o=>{if(o.id==="photo"){const c=n.photo&&String(n.photo).trim()!==""?String(n.photo).trim():null,d='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';return`<td style="text-align:center; padding:2px; width:44px;">
                  <div style="width:24px; height:26px; margin:0 auto; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:2px; border:1px solid #cbd5e1; background:#f8fafc; position:relative;">
                    ${c?`<img src="${c}" alt="" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" /><div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${d}</div>`:`${d}`}
                  </div>
                </td>`}const a=n[o.id]||"—";return o.id==="status"?`<td><span class="status-badge">${a}</span></td>`:`<td>${a}</td>`}).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>

    ${b&&b.length>0?`
    <div class="footer-wrap">
      ${Ht(b)}
    </div>
    `:""}
  </div>

  <script>
    function paginateAndPrint() {
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
          window.print();
          return;
        }

        // Measure sub-pixel precision ratio (px per mm)
        const probe = document.createElement('div');
        probe.style.width = '100mm';
        probe.style.height = '100mm';
        probe.style.position = 'absolute';
        probe.style.visibility = 'hidden';
        document.body.appendChild(probe);
        const pxPerMm = probe.getBoundingClientRect().height / 100;
        document.body.removeChild(probe);

        const isLandscape = ${F==="landscape"};
        const pageTotalMm = isLandscape ? 210 : 297;
        const pageUsablePx = (pageTotalMm - 12) * pxPerMm;

        const headerHeight = rawHeader ? rawHeader.getBoundingClientRect().height : 0;
        const theadHeight = rawThead ? rawThead.getBoundingClientRect().height : 35;
        const footerHeight = rawFooter ? rawFooter.getBoundingClientRect().height : 0;

        const rowHeights = rawRows.map(r => r.getBoundingClientRect().height || 36);

        // Partition rows into pages
        const pageRowIndices = [];
        let currentPageIndices = [];
        let currentHeight = headerHeight + theadHeight;

        for (let i = 0; i < rawRows.length; i++) {
          const h = rowHeights[i];
          const isLast = (i === rawRows.length - 1);
          const neededFooter = (isLast && rawFooter) ? (footerHeight + 20) : 0;

          // Check if row fits on current page (with 15px safe margin)
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

        container.innerHTML = '';
        const totalPages = pageRowIndices.length;

        pageRowIndices.forEach((indices, pageIdx) => {
          const isFirst = (pageIdx === 0);
          const isLast = (pageIdx === totalPages - 1);

          const pageDiv = document.createElement('div');
          pageDiv.className = 'print-page' + (isLast ? ' last-page' : '');

          const watermark = document.createElement('img');
          watermark.src = '/images/madrasah_logo.png';
          watermark.className = 'print-watermark';
          watermark.alt = 'Watermark';
          watermark.onerror = function() { this.src = '/madrasah_logo.png'; };
          pageDiv.appendChild(watermark);

          const topDiv = document.createElement('div');
          topDiv.className = 'page-top';

          if (isFirst && rawHeader) {
            topDiv.appendChild(rawHeader.cloneNode(true));
          }

          const tableClone = document.createElement('table');
          tableClone.appendChild(rawThead.cloneNode(true));
          const tbodyClone = document.createElement('tbody');
          indices.forEach(idx => {
            tbodyClone.appendChild(rawRows[idx].cloneNode(true));
          });
          tableClone.appendChild(tbodyClone);
          topDiv.appendChild(tableClone);
          pageDiv.appendChild(topDiv);

          if (isLast && rawFooter) {
            const bottomDiv = document.createElement('div');
            bottomDiv.className = 'page-bottom';
            bottomDiv.appendChild(rawFooter.cloneNode(true));
            pageDiv.appendChild(bottomDiv);
          }

          container.appendChild(pageDiv);
        });

        rawWrap.style.display = 'none';

        setTimeout(() => {
          window.print();
        }, 150);
      } catch (err) {
        console.error('Pagination error:', err);
        const rawWrap = document.getElementById('raw-content');
        if (rawWrap) {
          rawWrap.style.position = 'static';
          rawWrap.style.visibility = 'visible';
        }
        window.print();
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(paginateAndPrint, 250));
      } else {
        setTimeout(paginateAndPrint, 400);
      }
    });
  <\/script>
</body>
</html>
    `;p.document.open(),p.document.write(t),p.document.close()};return e.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(5px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:k,children:e.jsxs("div",{className:"animate-scale-in",style:{background:"var(--bg-card, #ffffff)",color:"var(--text-primary, #1e293b)",borderRadius:"16px",width:"100%",maxWidth:"740px",maxHeight:"92vh",display:"flex",flexDirection:"column",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.3)",border:"1px solid var(--border-color, #e2e8f0)",overflow:"hidden"},onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{style:{padding:"18px 24px",borderBottom:"1px solid var(--border-color, #e2e8f0)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg-primary, #f8fafc)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(20, 184, 166, 0.12)",color:"var(--primary-600, #0d9488)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Ke,{size:22})}),e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:700,margin:0},children:"ছাত্র/ছাত্রী ডাটা রপ্তানি (Export)"}),e.jsx("p",{style:{fontSize:"0.84rem",color:"var(--text-secondary, #64748b)",margin:0},children:"ফিল্টার, কলাম টিক লিস্ট, কি-ওয়ার্ড অগ্রাধিকার ও ফরম্যাট নির্বাচন করুন"})]})]}),e.jsx("button",{onClick:k,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-secondary, #64748b)",padding:"6px",borderRadius:"8px",display:"flex"},title:"বন্ধ করুন",children:e.jsx(Ge,{size:22})})]}),e.jsxs("div",{style:{padding:"24px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[e.jsxs("label",{style:{fontSize:"0.95rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Et,{size:18,style:{color:"var(--primary-500)"}})," ১. ফিল্টার নির্বাচন (কাদের ডাটা রপ্তানি করতে চান?)"]}),e.jsxs("span",{className:"badge badge-primary",style:{fontSize:"0.78rem"},children:["প্রস্তুত: ",Ie," জন"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{className:"export-filter-card",children:[e.jsxs("select",{className:"export-filter-select",value:W,onChange:s=>le(s.target.value),children:[e.jsx("option",{value:"",children:"সকল শ্রেণি"}),G&&G.length>0?G.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id)):yt.map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsx(gt,{size:20,className:"export-filter-arrow"})]}),e.jsxs("div",{className:"export-filter-card",children:[e.jsxs("select",{className:"export-filter-select",value:N,onChange:s=>ve(s.target.value),children:[e.jsx("option",{value:"",children:"সকল সেকশন"}),ie&&ie.length>0?ie.map(s=>e.jsx("option",{value:s.name,children:s.name},s._id)):["ক","খ","গ","ঘ","ঙ","কোন সেকশন নাই"].map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsx(gt,{size:20,className:"export-filter-arrow"})]}),e.jsxs("div",{className:"export-filter-card",children:[e.jsxs("select",{className:"export-filter-select",value:V,onChange:s=>pt(s.target.value),children:[e.jsx("option",{value:"",children:"সকল শাখা"}),te&&te.length>0?te.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id)):["বালক শাখা","বালিকা শাখা","বালক শাখা + নুরানী","বালিকা শাখা + নুরানী","নুরানী শাখা"].map(s=>e.jsx("option",{value:s,children:s},s))]}),e.jsx(gt,{size:20,className:"export-filter-arrow"})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[e.jsxs("label",{style:{fontSize:"0.95rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Zt,{size:18,style:{color:"var(--primary-500)"}})," ২. কোন কোন কলাম যোগ করতে চান? (টিক লিস্ট)"]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{type:"button",onClick:()=>C(!0),style:{background:"none",border:"1px solid var(--border-color)",borderRadius:"6px",padding:"4px 10px",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",color:"var(--primary-600)"},children:"সবগুলো নির্বাচন"}),e.jsx("button",{type:"button",onClick:()=>C(!1),style:{background:"none",border:"1px solid var(--border-color)",borderRadius:"6px",padding:"4px 10px",fontSize:"0.78rem",cursor:"pointer",color:"var(--text-muted)"},children:"সব বাতিল"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"8px",background:"var(--bg-primary)",padding:"14px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:fe.map(s=>{const l=!!Se[s.id];return e.jsxs("div",{className:`column-checkbox-card ${l?"checked":""}`,onClick:()=>et(s.id),children:[l?e.jsx(Bt,{size:18,style:{color:"var(--primary-500)",flexShrink:0}}):e.jsx(Ot,{size:18,style:{color:"var(--text-muted)",flexShrink:0}}),e.jsx("span",{style:{flex:1},children:s.label})]},s.id)})}),e.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginTop:"6px"},children:["নির্বাচিত কলাম: ",e.jsxs("strong",{children:[I.length," টি"]})," (যেগুলোতে টিক থাকবে, কেবল সেগুলোই এক্সপোর্টে যুক্ত হবে)"]})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{fontSize:"0.95rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[e.jsx(es,{size:18,style:{color:"var(--primary-500)"}})," ৩. কোন কলাম ধরে আগে সাজাতে (Sort) চান?"]}),e.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"12px",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",gap:"14px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"14px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.86rem",fontWeight:700,display:"block",marginBottom:"6px",color:"var(--text-primary)"},children:"১ম সর্টিং কলাম (প্রধান):"}),e.jsx("select",{className:"form-input",value:g,onChange:s=>ke(s.target.value),style:{fontWeight:600,height:"42px"},children:I.map(s=>e.jsx("option",{value:s.id,children:s.label},s.id))})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.86rem",fontWeight:700,display:"block",marginBottom:"6px",color:"var(--text-primary)"},children:"সর্টিং ক্রম / দিক:"}),e.jsxs("div",{style:{display:"flex",gap:"8px",height:"42px"},children:[e.jsxs("button",{type:"button",className:`btn btn-sm ${v==="asc"?"btn-primary":"btn-secondary"}`,style:{flex:1,whiteSpace:"nowrap",padding:"6px 12px",fontSize:"0.84rem"},onClick:()=>Ce("asc"),children:[e.jsx(Jt,{size:15})," ছোট থেকে বড়"]}),e.jsxs("button",{type:"button",className:`btn btn-sm ${v==="desc"?"btn-primary":"btn-secondary"}`,style:{flex:1,whiteSpace:"nowrap",padding:"6px 12px",fontSize:"0.84rem"},onClick:()=>Ce("desc"),children:[e.jsx(Yt,{size:15})," বড় থেকে ছোট"]})]})]})]}),e.jsx("div",{style:{borderTop:"1px dashed var(--border-color)",paddingTop:"12px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"14px",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.86rem",fontWeight:700,display:"block",marginBottom:"6px",color:"var(--text-primary)"},children:"২য় সর্টিং কলাম (উপ-সর্টিং):"}),e.jsxs("select",{className:"form-input",value:z,onChange:s=>Ne(s.target.value),style:{height:"42px"},children:[e.jsx("option",{value:"none",children:"কোনটি নয় (শুধুমাত্র ১ম কলাম অনুযায়ী)"}),I.filter(s=>s.id!==g).map(s=>e.jsx("option",{value:s.id,children:s.label},s.id))]})]}),e.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",lineHeight:"1.45",background:"var(--bg-card)",padding:"8px 12px",borderRadius:"8px",border:"1px solid var(--border-color)"},children:["💡 ",e.jsx("strong",{children:"২য় সর্টিং কীভাবে কাজ করে?"}),e.jsx("br",{}),"১ম কলামে যাদের মান একই (যেমন একই শ্রেণির সব শিক্ষার্থী), তাদেরকে ভেতরের ক্রমানুসারে সাজাতে ২য় কলামটি কাজ করে (যেমন: শ্রেণির ভেতরে রোল ১, ২, ৩... সাজানো)।"]})]})}),["className","branchName","sectionName","department"].includes(g)&&e.jsxs("div",{style:{background:"var(--bg-card)",padding:"14px",borderRadius:"10px",border:"1px solid var(--border-color)",marginTop:"6px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[e.jsxs("span",{style:{fontSize:"0.86rem",fontWeight:700,color:"var(--text-primary)"},children:['"',((rt=I.find(s=>s.id===g))==null?void 0:rt.label)||g,'" কলামের কি-ওয়ার্ড ক্রম:']}),e.jsx("button",{type:"button",onClick:()=>Ze(!pe),style:{background:"none",border:"none",color:"var(--primary-600)",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:pe?"চিপস ভিউ দেখুন":"টেক্সট আকারে এডিট করুন"})]}),pe?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)",margin:0},children:"প্রতি লাইনে একটি করে কি-ওয়ার্ড লিখুন (যে কি-ওয়ার্ড আগে থাকবে, সেই অনুযায়ী ডাটা আগে সর্ট হবে):"}),e.jsx("textarea",{rows:6,className:"form-input",value:Qe,onChange:s=>E(s.target.value),placeholder:`প্লে
নার্সারী
তৃতীয়
প্রথম`,style:{fontFamily:"inherit",fontSize:"0.9rem",lineHeight:"1.6"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",style:{alignSelf:"flex-start"},onClick:O,children:"ক্রম সংরক্ষণ করুন"})]}):e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"10px"},children:$.map((s,l)=>e.jsxs("div",{className:"keyword-chip",children:[e.jsx("span",{className:"keyword-rank",children:l+1}),e.jsx("span",{children:s}),e.jsxs("div",{style:{display:"flex",gap:"2px",marginLeft:"4px"},children:[l>0&&e.jsx("button",{type:"button",onClick:()=>X(l,-1),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",color:"var(--text-secondary)"},title:"আগে নিন",children:e.jsx(Xt,{size:12})}),l<$.length-1&&e.jsx("button",{type:"button",onClick:()=>X(l,1),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",color:"var(--text-secondary)"},title:"পরে নিন",children:e.jsx(Qt,{size:12})}),e.jsx("button",{type:"button",onClick:()=>ae(l),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",color:"var(--danger)"},title:"মুছুন",children:e.jsx(Ge,{size:12})})]})]},s))}),e.jsxs("div",{style:{display:"flex",gap:"8px",maxWidth:"320px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"নতুন কি-ওয়ার্ড লিখুন...",value:de,onChange:s=>Je(s.target.value),onKeyDown:s=>{s.key==="Enter"&&(s.preventDefault(),U())},style:{padding:"6px 10px",fontSize:"0.85rem"}}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:U,children:[e.jsx(zt,{size:14})," যোগ"]})]})]})]})]})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{fontSize:"0.95rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[e.jsx(Ke,{size:18,style:{color:"var(--primary-500)"}})," ৪. ফাইল ফরম্যাট নির্বাচন ও এক্সপোর্ট"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"12px"},children:[e.jsxs("div",{className:`format-choice-card ${A==="pdf"?"selected":""}`,onClick:()=>Z("pdf"),children:[e.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",background:A==="pdf"?"var(--primary-500)":"var(--bg-tertiary)",color:A==="pdf"?"#fff":"var(--text-secondary)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(It,{size:20})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"0.95rem"},children:"PDF ডকুমেন্ট"}),e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:"প্রিন্ট ও সংরক্ষণের জন্য ঝকঝকে টেবিল"})]}),A==="pdf"&&e.jsx(bt,{size:18,style:{color:"var(--primary-500)"}})]}),e.jsxs("div",{className:`format-choice-card ${A==="csv"?"selected":""}`,onClick:()=>Z("csv"),children:[e.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",background:A==="csv"?"var(--primary-500)":"var(--bg-tertiary)",color:A==="csv"?"#fff":"var(--text-secondary)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(qt,{size:20})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"0.95rem"},children:"CSV ফাইল (Excel)"}),e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:"স্প্রেডশিট ও সফটওয়্যারে ব্যবহারের জন্য"})]}),A==="csv"&&e.jsx(bt,{size:18,style:{color:"var(--primary-500)"}})]})]}),A==="pdf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{marginTop:"12px",display:"flex",alignItems:"center",gap:"12px",background:"var(--bg-primary)",padding:"10px 14px",borderRadius:"8px",border:"1px solid var(--border-color)"},children:[e.jsx("span",{style:{fontSize:"0.84rem",fontWeight:600,color:"var(--text-secondary)"},children:"পেজ ওরিয়েন্টেশন:"}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"pdfOrientation",checked:F==="portrait",onChange:()=>D("portrait")}),"পোর্ট্রেট (লম্বালম্বি)"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",cursor:"pointer"},children:[e.jsx("input",{type:"radio",name:"pdfOrientation",checked:F==="landscape",onChange:()=>D("landscape")}),"ল্যান্ডস্কেপ (আড়াআড়ি) ",I.length>7&&e.jsx("span",{className:"badge badge-warning",style:{fontSize:"0.68rem"},children:"সুপারিশকৃত"})]})]}),e.jsx("div",{style:{marginTop:"12px"},children:e.jsx(Ut,{selectedRoles:b,onChange:s=>{we(s);try{localStorage.setItem("annur_footer_roles__student_export",JSON.stringify(s))}catch{}},additionalRoles:["প্রস্তুতকারী","যাচাইকারী"],style:{marginBottom:0}})})]})]})]}),e.jsxs("div",{style:{padding:"16px 24px",borderTop:"1px solid var(--border-color, #e2e8f0)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"var(--bg-primary, #f8fafc)",gap:"12px",flexWrap:"wrap"},children:[e.jsx("div",{children:e.jsxs("span",{style:{fontSize:"0.84rem",color:"var(--text-secondary)"},children:["মোট তৈরি হবে: ",e.jsxs("strong",{children:[Ie," জন"]})," | কলাম: ",e.jsxs("strong",{children:[I.length," টি"]})]})}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:k,disabled:me,children:"বাতিল"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:ht,disabled:me||I.length===0,style:{minWidth:"150px"},children:me?e.jsxs(e.Fragment,{children:[e.jsx(Lt,{size:16,className:"spinner"}),e.jsx("span",{children:Xe||"তৈরি হচ্ছে..."})]}):A==="pdf"?e.jsxs(e.Fragment,{children:[e.jsx(Kt,{size:16}),e.jsx("span",{children:"PDF তৈরি করুন"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ke,{size:16}),e.jsx("span",{children:"CSV ডাউনলোড"})]})})]})]})]})})}const ct={active:{label:"সক্রিয়",class:"badge-active"},inactive:{label:"নিষ্ক্রিয়",class:"badge-inactive"},graduated:{label:"স্নাতক",class:"badge-info"},transferred:{label:"স্থানান্তরিত",class:"badge-warning"},suspended:{label:"স্থগিত",class:"badge-danger"}};function vs(){const y=_t(),{user:k}=Dt(),{myPermissions:j}=Tt(),J=["super_admin","co_super_admin"].includes(k==null?void 0:k.userType)||["co_super_admin"].includes(k==null?void 0:k.adminRole),q=J||!!(j!=null&&j["student.create"]),K=J||!!(j!=null&&j["student.update"]),G=J||!!(j!=null&&j["student.delete"]),[te]=$t(),ie=te.get("search")||"",[oe,Ve]=i.useState([]),[Ye,be]=i.useState(!0),[H,W]=i.useState(ie),[le,N]=i.useState(ie),[ve,V]=i.useState(!0),[pt,je]=i.useState(!1),[se,b]=i.useState(1),[we,Se]=i.useState(15),[re,I]=i.useState({total:0,pages:1}),[g,ke]=i.useState(""),[v,Ce]=i.useState("createdAt"),[z,Ne]=i.useState("desc"),[$,ce]=i.useState([]),[de,Je]=i.useState([]),[pe,Ze]=i.useState([]),Qe=i.useMemo(()=>{const t=["মক্তব বিভাগ","নাজেরা বিভাগ","হিফজ বিভাগ","উর্দু জামাত","তাইসীর জামাত","মিযান মুনশায়িব জামাত","নুরানী বিভাগ","মক্তব","নাজেরা","হিফজ"];return $.filter(n=>{var r;return!t.includes((r=n.name)==null?void 0:r.trim())})},[$]),[E,A]=i.useState(""),[Z,F]=i.useState(""),[D,me]=i.useState(""),[R,Xe]=i.useState(""),[B,Ie]=i.useState(""),[Q,et]=i.useState(""),[C,X]=i.useState(null);i.useEffect(()=>{const t=n=>{n.key==="Escape"&&X(null)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),i.useEffect(()=>{const t=te.get("search")||"";t!==H&&(W(t),N(t))},[te]),i.useEffect(()=>{const t=setTimeout(()=>{N(H)},350);return()=>clearTimeout(t)},[H]);const ae=async(t=null)=>{be(!0);try{O([]);const n={page:se,limit:we},r=t!==null?t:le;r&&(n.search=r.trim()),n.wholeWords=ve?"true":"false",g&&(n.status=g),E&&(n.classLevel=E),D&&(n.branch=D),R&&(n.department=R),B&&(n.residentialStatus=B),n.sortBy=v,n.sortOrder=z,Z&&(Z.includes(",")?n.sections=Z:n.section=Z);const o=await ne.get("/students",{params:n});o.data.success!==!1&&(Ve(o.data.data||[]),I(o.data.pagination||{total:0,pages:1}))}catch(n){console.error("Fetch students error",n),Ve([]),I({total:0,pages:1})}finally{be(!1)}};i.useEffect(()=>{(async()=>{try{const[n,r,o]=await Promise.all([ne.get("/students/classes"),ne.get("/students/sections"),ne.get("/students/branches")]);n.data.success&&ce(n.data.data.classes||[]),r.data.success&&Je(r.data.data.sections||[]),o.data.success&&Ze(o.data.data.branches||[])}catch(n){console.error("Failed to fetch filter metadata",n)}})()},[]),i.useEffect(()=>{if(!Q){F("");return}const n=de.filter(r=>{var L,_;const o=r.name.trim(),a=((L=r.classLevel)==null?void 0:L._id)||r.classLevel,c=((_=r.branch)==null?void 0:_._id)||r.branch,d=!E||a&&a.toString()===E.toString(),f=!D||c&&c.toString()===D.toString();return!d||!f?!1:Q==="কোন সেকশন নাই"?o.includes("কোন সেকশন নাই")||o.includes("কোন শাখা নাই")||o.includes("নাই")||o==="no_section"||o.includes("No Section"):o.startsWith(Q)||o===Q}).map(r=>r._id);n.length>0?F(n.join(",")):F("none_matched")},[Q,E,D,de]);const[U,O]=i.useState([]);i.useEffect(()=>{ae()},[se,we,g,E,Z,D,R,B,le,ve,v,z]);const mt=t=>{Se(t),b(1)},ut=t=>{t&&t.preventDefault(),N(H),b(1),ae(H)},tt=async t=>{var n,r;if(window.confirm("আপনি কি নিশ্চিত যে এই ছাত্র/ছাত্রীকে মুছে ফেলতে চান?"))try{await ne.delete(`/students/${t}`),O(o=>o.filter(a=>a!==t)),ae()}catch(o){const a=((r=(n=o.response)==null?void 0:n.data)==null?void 0:r.message)||"মুছে ফেলা ব্যর্থ হয়েছে";alert(a)}},ht=async()=>{var t,n;if(window.confirm(`আপনি কি নিশ্চিত যে বাছাইকৃত ${U.length} জন ছাত্র/ছাত্রীকে মুছে ফেলতে চান?`))try{be(!0),await Promise.all(U.map(r=>ne.delete(`/students/${r}`))),O([]),ae()}catch(r){const o=((n=(t=r.response)==null?void 0:t.data)==null?void 0:n.message)||"কিছু ছাত্র/ছাত্রী মুছে ফেলা যায়নি";alert(o),ae()}},[xt,st]=i.useState(!1),rt=()=>{st(!0)},s=t=>{v===t?Ne(n=>n==="asc"?"desc":"asc"):(Ce(t),Ne("asc")),b(1)},l=t=>{if(t==null)return null;const n=String(t).trim();if(!n)return null;const r={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},o=n.replace(/[০-৯]/g,c=>r[c]),a=parseFloat(o.replace(/[^0-9.-]/g,""));return isNaN(a)?null:a},p=t=>{if(!t)return 999999;const n={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},r=String(t).trim().toUpperCase().replace(/[০-৯]/g,f=>n[f]),o=r.match(/^AN[BG](\d{4})(\d+)$/);if(o)return parseInt(o[2],10);const c=r.replace(/^AN[BG]/i,"").match(/(\d+)/);if(c)return parseInt(c[1],10);const d=r.replace(/\D/g,"");return d?parseInt(d,10):999999},u=i.useMemo(()=>{let t=[...oe];E&&(t=t.filter(a=>{var f,L,_,M,P;const c=((L=(f=a.currentEnrollment)==null?void 0:f.classLevel)==null?void 0:L._id)||((_=a.currentEnrollment)==null?void 0:_.classLevel),d=(P=(M=a.currentEnrollment)==null?void 0:M.classLevel)==null?void 0:P.name;return String(c)===String(E)||String(d)===String(E)})),g&&(t=t.filter(a=>a.status===g)),D&&(t=t.filter(a=>{var d;const c=((d=a.branch)==null?void 0:d._id)||a.branch;return String(c)===String(D)})),R&&(t=t.filter(a=>a.department===R)),B&&(t=t.filter(a=>a.residentialStatus===B));const n=(le||"").trim(),r=l(n),o=r!==null&&/^[0-9০-৯\s]+$/.test(n);return!v&&!o||t.sort((a,c)=>{var f,L,_,M,P,Y,T,m,x,ee,nt,ze,Ee,Be,Le,_e,De,Te,$e,Ae,Fe,Re,We,Me,Pe,He,Ue,Oe,qe,at;if(n&&o){const w=l((f=a.currentEnrollment)==null?void 0:f.rollNumber),S=l((L=c.currentEnrollment)==null?void 0:L.rollNumber),ue=p(a.studentId||a.admissionNumber),he=p(c.studentId||c.admissionNumber);let xe=99,ge=99;if(w===r?xe=0:ue===r?xe=1:String(((_=a.currentEnrollment)==null?void 0:_.rollNumber)||"").startsWith(String(r))?xe=2:xe=3,S===r?ge=0:he===r?ge=1:String(((M=c.currentEnrollment)==null?void 0:M.rollNumber)||"").startsWith(String(r))?ge=2:ge=3,xe!==ge)return xe-ge}let d=0;if(v==="roll"){const w=l((P=a.currentEnrollment)==null?void 0:P.rollNumber),S=l((Y=c.currentEnrollment)==null?void 0:Y.rollNumber);w!==null&&S!==null?d=w-S:w!==null?d=-1:S!==null?d=1:d=String(((T=a.currentEnrollment)==null?void 0:T.rollNumber)||"").localeCompare(String(((m=c.currentEnrollment)==null?void 0:m.rollNumber)||""),"bn")}else if(v==="name"){const w=((x=a.user)==null?void 0:x.fullName)||`${((ee=a.user)==null?void 0:ee.firstName)||""} ${((nt=a.user)==null?void 0:nt.lastName)||""}`.trim(),S=((ze=c.user)==null?void 0:ze.fullName)||`${((Ee=c.user)==null?void 0:Ee.firstName)||""} ${((Be=c.user)==null?void 0:Be.lastName)||""}`.trim();d=w.localeCompare(S,"bn",{sensitivity:"base"})}else if(v==="studentId"){const w=a.studentId||a.admissionNumber||"",S=c.studentId||c.admissionNumber||"",ue=p(w),he=p(S);ue!==he?d=ue-he:d=String(w).localeCompare(String(S))}else if(v==="class"){const w=(_e=(Le=a.currentEnrollment)==null?void 0:Le.classLevel)==null?void 0:_e.order,S=(Te=(De=c.currentEnrollment)==null?void 0:De.classLevel)==null?void 0:Te.order;if(w!==void 0&&S!==void 0&&w!==null&&S!==null)d=w-S;else{const ue=((Ae=($e=a.currentEnrollment)==null?void 0:$e.classLevel)==null?void 0:Ae.name)||"",he=((Re=(Fe=c.currentEnrollment)==null?void 0:Fe.classLevel)==null?void 0:Re.name)||"";d=ue.localeCompare(he,"bn")}}else if(v==="section"){const w=((Me=(We=a.currentEnrollment)==null?void 0:We.section)==null?void 0:Me.name)||(typeof((Pe=a.currentEnrollment)==null?void 0:Pe.section)=="string"?a.currentEnrollment.section:"")||"",S=((Ue=(He=c.currentEnrollment)==null?void 0:He.section)==null?void 0:Ue.name)||(typeof((Oe=c.currentEnrollment)==null?void 0:Oe.section)=="string"?c.currentEnrollment.section:"")||"";d=w.localeCompare(S,"bn")}else if(v==="username"){const w=((qe=a.user)==null?void 0:qe.username)||"",S=((at=c.user)==null?void 0:at.username)||"";d=w.localeCompare(S)}else if(v==="status"){const w=a.status||"",S=c.status||"";d=w.localeCompare(S)}else v==="createdAt"&&(d=new Date(a.createdAt||0)-new Date(c.createdAt||0));return z==="asc"?d:-d}),t},[oe,v,z,E,g,D,R,B,le]),h=({col:t})=>v!==t?e.jsx("span",{style:{opacity:.3,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)"},children:z==="asc"?"▲":"▼"});return e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"ছাত্র/ছাত্রী তালিকা"}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",dt(k).branchName," • মোট ",re.total," জন ছাত্র/ছাত্রী নিবন্ধিত"]})]}),e.jsxs("div",{className:"page-header-actions",children:[G&&U.length>0&&e.jsxs("button",{className:"btn btn-danger",onClick:ht,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(ft,{size:16})," বাছাইকৃত (",U.length,") মুছুন"]}),e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:rt,style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:14})," রপ্তানি"]}),e.jsxs("button",{className:"btn btn-secondary",onClick:()=>y("/transfer-certificates"),style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(It,{size:16})," ছাড়পত্র"]}),e.jsxs("button",{className:"btn btn-secondary",onClick:()=>y("/students/promote"),style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(vt,{size:16})," শ্রেণি উত্তীর্ণ (Promotion)"]}),q&&e.jsxs("button",{className:"btn btn-primary",onClick:()=>y("/students/new"),children:[e.jsx(zt,{size:16})," নতুন ছাত্র/ছাত্রী"]})]})]}),e.jsx("div",{className:"card mb-24 filter-card",style:{padding:"14px 18px"},children:e.jsxs("div",{className:"filter-card-content",style:{position:"relative"},children:[e.jsx("style",{children:`
            .student-search-slot {
              flex: 1 1 240px;
              max-width: 380px;
              min-width: 200px;
              height: 38px;
              position: relative;
            }
            .student-search-slot .filter-search-form {
              width: 100%;
              max-width: 100%;
              transition: width 0.22s ease, box-shadow 0.22s ease;
            }
            @media (min-width: 769px) {
              .student-search-slot .filter-search-form.student-search-expanded {
                position: absolute;
                left: 0;
                top: 0;
                width: min(680px, calc(100vw - 320px));
                max-width: none;
                z-index: 45;
                background: var(--bg-card, #ffffff);
                padding: 2px;
                border-radius: 10px;
                box-shadow: 0 10px 28px rgba(15, 23, 42, 0.22);
              }
            }
            @media (max-width: 768px) {
              .student-search-slot {
                width: 100%;
                max-width: 100%;
                height: auto;
                flex: none;
              }
            }
          `}),e.jsx("div",{className:"student-search-slot",children:e.jsxs("form",{onSubmit:ut,className:`filter-search-form ${pt?"student-search-expanded":""}`,onBlur:t=>{t.currentTarget.contains(t.relatedTarget)||je(!1)},children:[e.jsxs("div",{style:{position:"relative",flex:1},children:[e.jsx(jt,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)"}}),e.jsx("input",{type:"text",className:"form-input",placeholder:"যেকোনো তথ্য (নাম, রোল, আইডি, মোবাইল, পিতার নাম) দিয়ে খুঁজুন...",value:H,onFocus:()=>je(!0),onChange:t=>W(t.target.value),style:{paddingLeft:"38px",paddingRight:H?"36px":"12px"}}),H&&e.jsx("button",{type:"button",onClick:()=>{W(""),N(""),b(1)},style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",display:"flex",alignItems:"center",padding:"4px"},title:"ক্লিয়ার করুন",children:e.jsx(Ge,{size:15})})]}),e.jsx(At,{checked:ve,onChange:t=>{V(t),b(1)}}),e.jsxs("button",{type:"submit",className:"btn btn-secondary btn-sm",children:[e.jsx(jt,{size:14})," অনুসন্ধান"]})]})}),e.jsxs("div",{className:"filter-dropdowns-wrap",children:[e.jsxs("select",{className:"form-input form-select",value:E,onChange:t=>{A(t.target.value),b(1)},title:"শ্রেণি ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল শ্রেণি"}),Qe.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]}),e.jsxs("select",{className:"form-input form-select",value:Q,onChange:t=>{et(t.target.value),b(1)},title:"সেকশন ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল সেকশন"}),Wt.map((t,n)=>e.jsx("option",{value:t,children:t},n))]}),e.jsxs("select",{className:"form-input form-select",value:D,onChange:t=>{me(t.target.value),b(1)},title:"শাখা ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল শাখা"}),pe.filter(t=>t.name!=="হিফজ শাখা").map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]}),e.jsxs("select",{className:"form-input form-select",value:R,onChange:t=>{Xe(t.target.value),b(1)},title:"বিভাগ ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল বিভাগ"}),e.jsx("option",{value:"মক্তব বিভাগ",children:"মক্তব বিভাগ"}),e.jsx("option",{value:"নাজেরা বিভাগ",children:"নাজেরা বিভাগ"}),e.jsx("option",{value:"হিফজ বিভাগ",children:"হিফজ বিভাগ"}),e.jsx("option",{value:"নুরানী বিভাগ",children:"নুরানী বিভাগ"}),e.jsx("option",{value:"উর্দু জামাত",children:"উর্দু জামাত"}),e.jsx("option",{value:"তাইসীর জামাত",children:"তাইসীর জামাত"}),e.jsx("option",{value:"মিযান মুনশায়িব জামাত",children:"মিযান মুনশায়িব জামাত"})]}),e.jsxs("select",{className:"form-input form-select",value:B,onChange:t=>{Ie(t.target.value),b(1)},title:"আবাসিক অবস্থা ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল আবাসন"}),e.jsx("option",{value:"residential",children:"আবাসিক"}),e.jsx("option",{value:"non-residential",children:"অনাবাসিক"}),e.jsx("option",{value:"day_care",children:"ডে-কেয়ার"})]}),e.jsxs("select",{className:"form-input form-select",value:g,onChange:t=>{ke(t.target.value),b(1)},title:"স্ট্যাটাস ফিল্টার",children:[e.jsx("option",{value:"",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"active",children:"সক্রিয়"}),e.jsx("option",{value:"inactive",children:"নিষ্ক্রিয়"}),e.jsx("option",{value:"graduated",children:"স্নাতক"}),e.jsx("option",{value:"transferred",children:"স্থানান্তরিত"})]}),e.jsxs("div",{className:"sort-controls-wrap",children:[e.jsxs("select",{className:"form-input form-select",value:v,onChange:t=>{Ce(t.target.value),b(1)},title:"সর্ট কলাম নির্বাচন করুন",children:[e.jsx("option",{value:"createdAt",children:"সর্বশেষ ভর্তি (ডিফল্ট)"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"class",children:"শ্রেণি অনুযায়ী"}),e.jsx("option",{value:"section",children:"সেকশন অনুযায়ী"}),e.jsx("option",{value:"username",children:"ইউজারনেম অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>{Ne(t=>t==="asc"?"desc":"asc"),b(1)},title:z==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",children:e.jsx("span",{style:{fontWeight:700},children:z==="asc"?"▲ আরোহী":"▼ অবরোহী"})})]}),(E||Q||D||R||B||g)&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:()=>{A(""),et(""),me(""),Xe(""),Ie(""),ke(""),b(1)},style:{height:"38px",padding:"0 10px",fontSize:"0.82rem",color:"var(--danger)",display:"inline-flex",alignItems:"center",gap:"4px",borderRadius:"var(--border-radius-sm)",border:"1px dashed var(--danger)"},title:"ফিল্টার রিসেট করুন",children:[e.jsx(Ge,{size:14})," রিসেট"]})]})]})}),e.jsx("div",{className:"card",style:{padding:0},children:Ye?e.jsx("div",{className:"flex-center",style:{padding:"60px"},children:e.jsx("div",{className:"spinner"})}):oe.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-state-icon",children:e.jsx(vt,{size:48})}),e.jsx("div",{className:"empty-state-title",children:"কোনো ছাত্র/ছাত্রী পাওয়া যায়নি"}),e.jsx("p",{className:"text-muted text-sm mt-4",children:'নতুন ছাত্র/ছাত্রী যোগ করতে "নতুন ছাত্র/ছাত্রী" বোতামে ক্লিক করুন'})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"student-mobile-cards",children:u.map(t=>{var d,f,L,_,M,P,Y;const n=((d=t.user)==null?void 0:d.fullName)||`${((f=t.user)==null?void 0:f.firstName)||""} ${((L=t.user)==null?void 0:L.lastName)||""}`.trim()||"N/A",r=t.currentEnrollment,o=ct[t.status]||ct.active,a=t.photo||((_=t.user)==null?void 0:_.photo),c=U.includes(t._id);return e.jsxs("div",{className:"student-card-item",style:{background:"var(--bg-card)",border:c?"1.5px solid var(--primary-500)":"1px solid var(--border-color)",borderRadius:"16px",padding:"14px",marginBottom:"12px",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:"12px",position:"relative"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[e.jsx("input",{type:"checkbox",checked:c,onChange:T=>{T.target.checked?O(m=>[...m,t._id]):O(m=>m.filter(x=>x!==t._id))},style:{width:"18px",height:"18px",marginTop:"10px",cursor:"pointer",flexShrink:0}}),e.jsx("div",{onClick:()=>{var T,m;a&&X({_id:t._id,photo:a,name:n,studentId:t.studentId||t.admissionNumber,rollNumber:r==null?void 0:r.rollNumber,className:(T=r==null?void 0:r.classLevel)==null?void 0:T.name,sectionName:((m=r==null?void 0:r.section)==null?void 0:m.name)||(typeof(r==null?void 0:r.section)=="string"?r.section:""),status:t.status})},style:{width:"46px",height:"46px",borderRadius:"50%",overflow:"hidden",flexShrink:0,cursor:a?"pointer":"default",position:"relative",background:a?"#1e293b":"var(--bg-secondary, #f8fafc)",display:"flex",alignItems:"center",justifyContent:"center",border:a?"2px solid rgba(16, 185, 129, 0.5)":"1.5px solid var(--border-color, #cbd5e1)"},title:a?"ছবি বড় করে দেখতে ক্লিক করুন":n,children:a?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:T=>{var x;T.currentTarget.style.display="none";const m=(x=T.currentTarget.parentElement)==null?void 0:x.querySelector(".avatar-fallback");m&&(m.style.display="flex")}}),e.jsx("div",{style:{position:"absolute",bottom:0,right:0,background:"rgba(0,0,0,0.5)",borderRadius:"50%",padding:"2px"},children:e.jsx(kt,{size:10,color:"#fff"})}),e.jsx("div",{className:"avatar-fallback",style:{display:"none",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:e.jsx(it,{size:24,strokeWidth:1.75,style:{color:"#94a3b8"}})})]}):e.jsx(it,{size:24,strokeWidth:1.75,style:{color:"#94a3b8"}})}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"6px"},children:[e.jsx("h4",{style:{margin:0,fontSize:"0.95rem",fontWeight:600,cursor:"pointer"},onClick:()=>y(`/students/${t._id}`),children:n}),e.jsx("span",{className:`badge ${o.class}`,style:{fontSize:"0.7rem",padding:"2px 8px"},children:o.label})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px",fontSize:"0.78rem",color:"var(--text-muted)"},children:[e.jsxs("span",{children:["আইডি: ",e.jsx("strong",{style:{color:"var(--primary-600)"},children:t.studentId||t.admissionNumber||"—"})]}),((M=t.user)==null?void 0:M.username)&&e.jsxs("span",{children:["• @",t.user.username.toLowerCase().replace(/\s+/g,"")]})]})]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px",background:"var(--bg-tertiary, #f8fafc)",padding:"8px 10px",borderRadius:"10px",fontSize:"0.8rem",textAlign:"center"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.72rem",display:"block"},children:"শ্রেণি"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((P=r==null?void 0:r.classLevel)==null?void 0:P.name)||"—"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.72rem",display:"block"},children:"সেকশন"}),e.jsx("strong",{style:{color:"var(--text-primary)"},children:((Y=r==null?void 0:r.section)==null?void 0:Y.name)||(typeof(r==null?void 0:r.section)=="string"?r.section:"—")})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.72rem",display:"block"},children:"রোল নম্বর"}),e.jsx("strong",{style:{color:"var(--primary-600)",fontFamily:"Inter"},children:(r==null?void 0:r.rollNumber)||"—"})]})]}),t.createdByUser&&e.jsx("div",{style:{marginTop:"-2px",marginBottom:"2px"},children:e.jsx(St,{user:t.createdByUser,date:t.createdAt,variant:"compact",label:"ভর্তি করিয়েছেন"})}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"2px"},children:[e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(`/students/${t._id}`),style:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:"0.8rem",padding:"8px"},children:[e.jsx(Ct,{size:14})," বিস্তারিত"]}),K&&e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(`/students/${t._id}`,{state:{edit:!0}}),style:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"6px",fontSize:"0.8rem",padding:"8px"},children:[e.jsx(Nt,{size:14})," সম্পাদনা"]}),G&&e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>tt(t._id),style:{color:"var(--danger)",padding:"8px",borderRadius:"8px"},title:"মুছুন",children:e.jsx(ft,{size:16})})]})]},t._id)})}),e.jsx("div",{className:"desktop-table-view table-wrapper",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:u.length>0&&U.length===u.length,onChange:t=>{t.target.checked?O(u.map(n=>n._id)):O([])},style:{cursor:"pointer",width:"16px",height:"16px"}})}),e.jsxs("th",{style:{textAlign:"left",cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("name"),children:["ছাত্র/ছাত্রী ",e.jsx(h,{col:"name"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("studentId"),children:["আইডি নম্বর ",e.jsx(h,{col:"studentId"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("username"),children:["ইউজারনেম ",e.jsx(h,{col:"username"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("class"),children:["শ্রেণি ",e.jsx(h,{col:"class"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("section"),children:["সেকশন ",e.jsx(h,{col:"section"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("roll"),children:["রোল ",e.jsx(h,{col:"roll"})]}),e.jsxs("th",{style:{cursor:"pointer",userSelect:"none",whiteSpace:"nowrap"},onClick:()=>s("status"),children:["স্ট্যাটাস ",e.jsx(h,{col:"status"})]}),e.jsx("th",{style:{textAlign:"center"},children:"কার্যক্রম"})]})}),e.jsx("tbody",{children:u.map(t=>{var c,d,f,L,_,M,P,Y,T;const n=((c=t.user)==null?void 0:c.fullName)||`${((d=t.user)==null?void 0:d.firstName)||""} ${((f=t.user)==null?void 0:f.lastName)||""}`.trim()||"N/A",r=t.currentEnrollment,o=ct[t.status]||ct.active,a=t.photo||((L=t.user)==null?void 0:L.photo);return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:U.includes(t._id),onChange:m=>{m.target.checked?O(x=>[...x,t._id]):O(x=>x.filter(ee=>ee!==t._id))},style:{cursor:"pointer",width:"16px",height:"16px"}})}),e.jsx("td",{children:e.jsxs("div",{className:"flex gap-12",style:{alignItems:"center"},children:[e.jsx("div",{className:"student-avatar-wrap",style:{background:a?"transparent":"var(--bg-secondary, #f8fafc)",cursor:a?"pointer":"default",position:"relative",width:"42px",height:"42px",borderRadius:"50%",overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",border:a?"2px solid rgba(16, 185, 129, 0.45)":"1.5px solid var(--border-color, #cbd5e1)",boxShadow:a?"0 2px 6px rgba(0,0,0,0.15)":"none",transition:"all 0.2s ease"},onClick:()=>{var m,x;a&&X({_id:t._id,photo:a,name:n,studentId:t.studentId||t.admissionNumber,rollNumber:r==null?void 0:r.rollNumber,className:(m=r==null?void 0:r.classLevel)==null?void 0:m.name,sectionName:((x=r==null?void 0:r.section)==null?void 0:x.name)||(typeof(r==null?void 0:r.section)=="string"?r.section:""),status:t.status})},onMouseEnter:m=>{if(a){m.currentTarget.style.transform="scale(1.1)",m.currentTarget.style.borderColor="var(--primary-500)";const x=m.currentTarget.querySelector(".avatar-zoom-overlay");x&&(x.style.opacity="1")}},onMouseLeave:m=>{if(a){m.currentTarget.style.transform="scale(1)",m.currentTarget.style.borderColor="rgba(16, 185, 129, 0.45)";const x=m.currentTarget.querySelector(".avatar-zoom-overlay");x&&(x.style.opacity="0")}},title:a?"ছবি বড় করে দেখতে ক্লিক করুন":n,children:a?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a,alt:n,style:{width:"100%",height:"100%",objectFit:"cover"},onError:m=>{var ee;m.currentTarget.style.display="none";const x=(ee=m.currentTarget.parentElement)==null?void 0:ee.querySelector(".avatar-fallback");x&&(x.style.display="flex")}}),e.jsx("div",{className:"avatar-zoom-overlay",style:{position:"absolute",inset:0,background:"rgba(0, 0, 0, 0.45)",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,transition:"opacity 0.2s ease",color:"#fff"},children:e.jsx(kt,{size:16})}),e.jsx("div",{className:"avatar-fallback",style:{display:"none",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},children:e.jsx(it,{size:22,strokeWidth:1.75,style:{color:"#94a3b8"}})})]}):e.jsx(it,{size:22,strokeWidth:1.75,style:{color:"#94a3b8"}})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",style:{cursor:"pointer",transition:"color 0.15s"},onClick:()=>y(`/students/${t._id}`),onMouseEnter:m=>m.currentTarget.style.color="var(--primary-600)",onMouseLeave:m=>m.currentTarget.style.color="",children:n}),e.jsx("div",{className:"text-sm text-muted",children:((_=t.user)==null?void 0:_.phone)||((M=t.user)==null?void 0:M.email)||""}),t.createdByUser&&e.jsx("div",{style:{marginTop:"3px"},children:e.jsx(St,{user:t.createdByUser,variant:"compact",label:"ভর্তি"})})]})]})}),e.jsx("td",{children:e.jsx("span",{style:{fontFamily:"Inter",fontWeight:600,color:"var(--primary-600)"},children:t.studentId||t.admissionNumber||"—"})}),e.jsx("td",{children:e.jsx("span",{style:{fontFamily:"Inter",fontWeight:500,color:"var(--text-secondary)"},children:(P=t.user)!=null&&P.username?t.user.username.toLowerCase().replace(/\s+/g,""):"—"})}),e.jsx("td",{children:((Y=r==null?void 0:r.classLevel)==null?void 0:Y.name)||"—"}),e.jsx("td",{children:((T=r==null?void 0:r.section)==null?void 0:T.name)||(typeof(r==null?void 0:r.section)=="string"?r.section:"—")}),e.jsx("td",{children:e.jsx("span",{style:{fontFamily:"Inter"},children:(r==null?void 0:r.rollNumber)||"—"})}),e.jsx("td",{children:e.jsx("span",{className:`badge ${o.class}`,children:o.label})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsxs("div",{className:"flex-center gap-8",children:[e.jsx("button",{className:"btn btn-ghost btn-icon btn-sm",title:"বিস্তারিত",onClick:()=>y(`/students/${t._id}`),style:{width:32,height:32},children:e.jsx(Ct,{size:15})}),K&&e.jsx("button",{className:"btn btn-ghost btn-icon btn-sm",title:"সম্পাদনা",onClick:()=>y(`/students/${t._id}`,{state:{edit:!0}}),style:{width:32,height:32},children:e.jsx(Nt,{size:15})}),G&&e.jsx("button",{className:"btn btn-ghost btn-icon btn-sm",title:"মুছুন",onClick:()=>tt(t._id),style:{width:32,height:32,color:"var(--danger)"},children:e.jsx(ft,{size:15})})]})})]},t._id)})})]})}),e.jsxs("div",{className:"pagination-container",children:[e.jsx("div",{children:re.pages>1&&e.jsxs("div",{className:"pagination",style:{margin:0,justifyContent:"flex-start"},children:[e.jsx("button",{className:"pagination-btn",disabled:se<=1,onClick:()=>b(se-1),children:e.jsx(Ft,{size:16})}),Array.from({length:Math.min(re.pages,7)},(t,n)=>{const r=n+1;return e.jsx("button",{className:`pagination-btn ${r===se?"active":""}`,onClick:()=>b(r),children:r},r)}),e.jsx("button",{className:"pagination-btn",disabled:se>=re.pages,onClick:()=>b(se+1),children:e.jsx(Rt,{size:16})})]})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.875rem",color:"var(--text-secondary)"},children:[e.jsx("span",{children:"প্রতি পেজে প্রদর্শন:"}),e.jsxs("select",{className:"form-input form-select",value:we,onChange:t=>mt(Number(t.target.value)),style:{width:"80px",padding:"6px 24px 6px 12px",fontSize:"0.875rem"},children:[e.jsx("option",{value:15,children:"১৫"}),e.jsx("option",{value:25,children:"২৫"}),e.jsx("option",{value:50,children:"৫০"}),e.jsx("option",{value:100,children:"১০০"})]})]})]})]})}),C&&e.jsx("div",{className:"modal-overlay",onClick:()=>X(null),style:{position:"fixed",inset:0,background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(8px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",animation:"fadeIn 0.2s ease"},children:e.jsxs("div",{onClick:t=>t.stopPropagation(),style:{background:"var(--bg-secondary, #1e293b)",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.12)",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.2)",maxWidth:"460px",width:"100%",overflow:"hidden",animation:"zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid var(--border-color, rgba(255, 255, 255, 0.08))",background:"rgba(0, 0, 0, 0.15)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"rgba(16, 185, 129, 0.15)",color:"var(--success, #10b981)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Gt,{size:16})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:0,fontSize:"1rem",fontWeight:600,color:"var(--text-primary)"},children:C.name}),e.jsxs("p",{style:{margin:0,fontSize:"0.75rem",color:"var(--text-muted)"},children:[C.studentId?`আইডি: ${C.studentId}`:"",C.className?` • শ্রেণি: ${C.className}`:"",C.sectionName?` (${C.sectionName})`:"",C.rollNumber?` • রোল: ${C.rollNumber}`:""]})]})]}),e.jsx("button",{onClick:()=>X(null),style:{background:"rgba(255, 255, 255, 0.08)",border:"none",borderRadius:"50%",width:"34px",height:"34px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--text-secondary)",transition:"background 0.2s, color 0.2s"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(239, 68, 68, 0.2)",t.currentTarget.style.color="var(--danger, #ef4444)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255, 255, 255, 0.08)",t.currentTarget.style.color="var(--text-secondary)"},title:"বন্ধ করুন (Esc)",children:e.jsx(Ge,{size:18})})]}),e.jsx("div",{style:{padding:"16px",background:"#0a0f1d",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"320px",maxHeight:"65vh",overflow:"hidden"},children:e.jsx("img",{src:C.photo,alt:C.name,style:{maxWidth:"100%",maxHeight:"60vh",objectFit:"contain",borderRadius:"12px",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.4)"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderTop:"1px solid var(--border-color, rgba(255, 255, 255, 0.08))",background:"rgba(0, 0, 0, 0.15)"},children:[e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const t=document.createElement("a");t.href=C.photo,t.download=`${C.name||"student"}_photo.jpg`,t.click()},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ke,{size:14})," ছবি ডাউনলোড"]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>{y(`/students/${C._id}`),X(null)},style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Vt,{size:14})," সম্পূর্ণ প্রোফাইল দেখুন"]})]})]})}),e.jsx(ss,{isOpen:xt,onClose:()=>st(!1),currentStudents:oe,totalCount:re.total,activeFilters:{search:H,status:g,classLevel:E,branch:D,section:Z,department:R,residentialStatus:B},selectedIds:U,classes:$,branches:pe,sections:de,institutionName:dt(k).madrasahName,branchName:dt(k).branchName})]})}export{vs as default};
