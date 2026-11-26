import{a as Ze,r as i,j as t,a1 as Ge,x as tt,R as ne,G as ae,U as V,E as ut,F as re,q as ie,y as le,z as oe,i as yt,b as Je,D as de,d as M}from"./index-BhR9QSXd.js";import{g as Xe,f as et}from"./helpers-CljGnr5z.js";import{g as At,a as Wt,b as It}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as qe}from"./MadrasahLetterhead-CUJ0NaG_.js";import{D as ce,P as Ke}from"./PrintSignatureRoleSelector-DQ83jAW4.js";import{P as Qe}from"./PrintFooterSignatures-DUMsx4u7.js";import{C as pe}from"./circle-alert-BKZ1ALS0.js";import{P as st}from"./printer-NAMsWHq4.js";import{T as ts}from"./trending-up-cJMLqqNm.js";import{A as es}from"./award-DsTPYDFO.js";import"./plus-DZLvztao.js";const D=v=>v?"৳"+Number(v).toLocaleString("en-IN"):"৳০",vt=["","জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"],jt={present:"উপস্থিত",absent:"অনুপস্থিত",late:"বিলম্বিত",half_day:"অর্ধদিন",on_leave:"ছুটি"},U={present:"#22c55e",absent:"#ef4444",late:"#f59e0b",half_day:"#3b82f6",on_leave:"#8b5cf6"};function u({icon:v,title:f,value:S,sub:g,color:C="teal"}){const T={teal:{bg:"rgba(20, 184, 166, 0.15)",color:"#14b8a6"},blue:{bg:"rgba(59, 130, 246, 0.15)",color:"#3b82f6"},amber:{bg:"rgba(245, 158, 11, 0.15)",color:"#f59e0b"},green:{bg:"rgba(34, 197, 94, 0.15)",color:"#22c55e"},red:{bg:"rgba(239, 68, 68, 0.15)",color:"#ef4444"},purple:{bg:"rgba(168, 85, 247, 0.15)",color:"#a855f7"}},A=T[C]||T.teal;return t.jsxs("div",{className:"stats-card",children:[t.jsx("div",{className:"stats-card-icon",style:{background:A.bg,color:A.color},children:t.jsx(v,{size:22})}),t.jsx("div",{className:"stats-card-value",children:S}),t.jsx("div",{className:"stats-card-label",children:f}),g&&t.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginTop:"4px"},children:g})]})}function y({value:v,max:f,color:S="#14b8a6",label:g}){const C=f>0?Math.round(v/f*100):0;return t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.82rem",marginBottom:"4px"},children:[t.jsx("span",{style:{color:"var(--text-secondary)"},children:g}),t.jsxs("span",{style:{color:S,fontWeight:600},children:[v," (",C,"%)"]})]}),t.jsx("div",{style:{height:"8px",background:"var(--border-color)",borderRadius:"100px",overflow:"hidden"},children:t.jsx("div",{style:{height:"100%",width:`${C}%`,background:S,borderRadius:"100px",transition:"width 0.6s ease"}})})]})}function xe({segments:v,size:f=100}){const g=f/2,C=f/2,T=2*Math.PI*38,A=v.reduce((o,b)=>o+b.value,0);let k=0;return t.jsxs("svg",{width:f,height:f,style:{transform:"rotate(-90deg)"},children:[t.jsx("circle",{cx:g,cy:C,r:38,fill:"none",stroke:"var(--border-color)",strokeWidth:"16"}),v.map((o,b)=>{if(A===0)return null;const j=o.value/A*T,Z=T-k;return k+=j,t.jsx("circle",{cx:g,cy:C,r:38,fill:"none",stroke:o.color,strokeWidth:"16",strokeDasharray:`${j} ${T-j}`,strokeDashoffset:Z},b)})]})}function ge({records:v,month:f,year:S}){const g=new Date(S,f,0).getDate(),C=new Date(S,f-1,1).getDay(),T=["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],A={};v.forEach(o=>{const b=new Date(o.date);A[b.getUTCDate()]=o.status});const k=[];for(let o=0;o<C;o++)k.push(t.jsx("div",{style:{width:"36px",height:"36px"}},`e${o}`));for(let o=1;o<=g;o++){const b=A[o],j=b?U[b]:"var(--card-bg)",Z=b?"none":"1px solid var(--border-color)";k.push(t.jsx("div",{title:b?`${o} — ${jt[b]}`:`${o}`,style:{width:"36px",height:"36px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.78rem",fontWeight:600,background:j,border:Z,color:b?"#fff":"var(--text-secondary)",cursor:"default",transition:"transform 0.15s",position:"relative"},children:o},o))}return t.jsxs("div",{children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 36px)",gap:"6px",marginBottom:"6px"},children:T.map(o=>t.jsx("div",{style:{width:"36px",textAlign:"center",fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:600},children:o},o))}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 36px)",gap:"6px"},children:k}),t.jsx("div",{style:{display:"flex",gap:"12px",marginTop:"12px",flexWrap:"wrap"},children:Object.entries(jt).map(([o,b])=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.75rem"},children:[t.jsx("div",{style:{width:"10px",height:"10px",borderRadius:"3px",background:U[o]}}),t.jsx("span",{style:{color:"var(--text-muted)"},children:b})]},o))})]})}function ms(){var Jt,Xt,qt,Kt,Qt,te,ee,se;const{user:v}=Ze(),{madrasahName:f,branchName:S}=Xe(v),[g,C]=i.useState(null),[T,A]=i.useState(!0),[k,o]=i.useState(null),b=i.useRef(null),[j,Z]=i.useState("portrait"),[X,me]=i.useState(()=>{try{const e=localStorage.getItem("annur_footer_roles__reports");return e?JSON.parse(e):ce}catch{return ce}}),[wt,he]=i.useState([]),[fe,be]=i.useState([]),[ue,ye]=i.useState([]),[nt,ve]=i.useState(""),[at,Rt]=i.useState(new Date().getMonth()+1),[rt,Tt]=i.useState(new Date().getFullYear()),[z,je]=i.useState(null),[Bt,Lt]=i.useState(!1),[it,we]=i.useState(""),[lt,Dt]=i.useState(new Date().getMonth()+1),[ot,_t]=i.useState(new Date().getFullYear()),[$,Se]=i.useState(null),[Pt,Mt]=i.useState(!1),[dt,ke]=i.useState(""),[St,ze]=i.useState(""),[_,$e]=i.useState(null),[Et,Ft]=i.useState(!1),kt=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[ct,Ne]=i.useState(kt()),[pt,Ce]=i.useState(kt()),[xt,Ae]=i.useState(kt()),[E,Ot]=i.useState("single"),[q,We]=i.useState("all"),[zt,Ie]=i.useState(""),[p,Re]=i.useState(null),[Te,gt]=i.useState(!1),[Y,Ut]=i.useState("landscape"),[B,mt]=i.useState("full"),[c,Be]=i.useState(null),[Yt,Ht]=i.useState(!1),[Vt,ss]=i.useState([]);i.useEffect(()=>{if(k){const e=setTimeout(()=>o(null),4e3);return()=>clearTimeout(e)}},[k]);const $t=async()=>{A(!0);try{const e=await M.get("/reports/summary");e.data.success&&C(e.data.data)}catch(e){console.error("Failed to fetch report",e),o({type:"error",message:"রিপোর্ট লোড করতে সমস্যা হয়েছে"})}finally{A(!1)}};i.useEffect(()=>{$t(),(async()=>{try{const[a,l,r]=await Promise.all([M.get("/students"),M.get("/teachers"),M.get("/exams")]);a.data.success&&he(a.data.data||[]),l.data.success&&be(l.data.data||[]),r.data.success&&ye(r.data.data.exams||r.data.data||[])}catch{}})()},[]);const Le=async()=>{if(nt){Lt(!0);try{const e=await M.get(`/reports/student-attendance?studentId=${nt}&month=${at}&year=${rt}`);e.data.success&&je(e.data.data)}catch{o({type:"error",message:"উপস্থিতি ডেটা লোড করতে সমস্যা হয়েছে"})}finally{Lt(!1)}}},De=async()=>{if(it){Mt(!0);try{const e=await M.get(`/reports/teacher-attendance?teacherId=${it}&month=${lt}&year=${ot}`);e.data.success&&Se(e.data.data)}catch{o({type:"error",message:"শিক্ষক উপস্থিতি ডেটা লোড করতে সমস্যা হয়েছে"})}finally{Mt(!1)}}},_e=async()=>{if(dt){Ft(!0);try{const e=`studentId=${dt}${St?`&examId=${St}`:""}`,a=await M.get(`/reports/student-marks?${e}`);a.data.success&&$e(a.data.data)}catch{o({type:"error",message:"নম্বর ডেটা লোড করতে সমস্যা হয়েছে"})}finally{Ft(!1)}}},Pe=async()=>{Ht(!0);try{const e=new URLSearchParams;E==="single"?e.set("date",ct):(e.set("startDate",pt),e.set("endDate",xt)),q&&q!=="all"&&e.set("classLevel",q),zt&&e.set("studentId",zt);const[a,l]=await Promise.all([M.get("/attendance/punch-report?"+e.toString()),M.get("/attendance/summary-report?"+e.toString())]);a.data.success&&Re(a.data.data),l.data.success&&Be(l.data.data)}catch{o({type:"error",message:"পাঞ্চ রিপোর্ট লোড করতে সমস্যা হয়েছে"})}finally{Ht(!1)}},Me=(e="landscape",a="full")=>{var N,K,G,Q,J,bt;if(!((N=p==null?void 0:p.records)!=null&&N.length)&&!((K=c==null?void 0:c.summary)!=null&&K.length))return;const l=window.open("","_blank","width=1050,height=800");if(!l){window.print();return}const r=E==="single"?et(ct):`${et(pt)} হতে ${et(xt)}`,h=Vt.find(s=>s._id===q),d=h?h.name:"সকল শ্রেণি",n=(c==null?void 0:c.totals)||{total:0,present:0,absent:0,late:0,on_leave:0},x=(a==="full"||a==="summary_only")&&((G=c==null?void 0:c.summary)==null?void 0:G.length)>0,P=(a==="full"||a==="punch_only")&&((Q=p==null?void 0:p.records)==null?void 0:Q.length)>0,w=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${f} — বায়োমেট্রিক পাঞ্চ রিপোর্ট (${S}) - ${r}</title>
  <style id="page-orientation-style">
    ${At(e,{wrap:!1})}
  </style>
  <style>
    * { box-sizing: border-box; }
    .meta-bar { 
      display: flex; 
      justify-content: space-between; 
      font-size: 11px; 
      background: #f8fafc; 
      border: 1px solid #e2e8f0; 
      border-radius: 6px; 
      padding: 6px 12px; 
      margin-bottom: 12px; 
    }
    .meta-bar span { font-weight: 700; color: #0f172a; }
    
    .stats-row { 
      display: flex; 
      gap: 10px; 
      margin-bottom: 14px; 
    }
    .stat-box { 
      flex: 1; 
      padding: 6px 10px; 
      border-radius: 6px; 
      border: 1px solid #e2e8f0; 
      text-align: center; 
    }
    .stat-val { font-size: 16px; font-weight: 800; font-family: 'Inter', sans-serif; }
    .stat-lbl { font-size: 10px; color: #64748b; font-weight: 600; }

    .section-title { 
      font-size: 13px; 
      font-weight: 700; 
      color: #0f172a; 
      margin: 14px 0 6px 0; 
      border-bottom: 1px solid #cbd5e1; 
      padding-bottom: 4px; 
    }

    table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px; }
    th, td { border: 1px solid #cbd5e1; padding: 5px 7px; vertical-align: middle; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 700; text-align: left; }
    .text-center { text-align: center; }
    .badge { display: inline-block; padding: 2px 6px; border-radius: 8px; font-size: 9.5px; font-weight: 700; }
    .badge-present { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }
    .badge-absent { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
    .badge-late { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }
    .badge-on_leave { background: #dbeafe; color: #1d4ed8; border: 1px solid #93c5fd; }
    .badge-not_assigned { background: #f1f5f9; color: #64748b; border: 1px solid #cbd5e1; }
    .punch-pill { display: inline-block; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; border-radius: 4px; padding: 1px 4px; font-size: 9.5px; margin: 1px; white-space: nowrap; }
    .footer { margin-top: 14px; font-size: 10px; color: #94a3b8; display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 6px; }

    @media print {
      .no-print { display: none !important; }
      body { padding: 0 !important; }
      table { page-break-inside: auto; }
      tr { page-break-inside: avoid; page-break-after: auto; }
      thead { display: table-header-group; }
    }
  </style>
</head>
<body>
  <!-- Interactive Print Toolbar -->
  <div class="no-print" style="background: #0f172a; color: #fff; padding: 10px 16px; margin-bottom: 16px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="font-weight: 700; font-size: 13px; display: flex; align-items: center; gap: 8px;">
      <span>🖨️ প্রিন্ট প্রিভিউ</span>
      <span style="font-size: 11px; font-weight: normal; color: #94a3b8;">(প্রয়োজনে ওরিয়েন্টেশন পরিবর্তন করতে পারেন)</span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button onclick="changeOrientation('portrait')" id="btn-portrait" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: ${e==="portrait"?"#0284c7":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px; font-weight: 600;">📄 পোর্ট্রেট (লম্বালম্বি)</button>
      <button onclick="changeOrientation('landscape')" id="btn-landscape" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: ${e==="landscape"?"#0284c7":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px; font-weight: 600;">📑 ল্যান্ডস্কেপ (আড়াআড়ি)</button>
      <button onclick="window.print()" style="padding: 6px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-size: 13px; font-weight: 700; margin-left: 8px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${Wt({title:`বায়োমেট্রিক উপস্থিতি ও পাঞ্চ রিপোর্ট ${a==="full"?"(সম্পূর্ণ রিপোর্ট)":a==="punch_only"?"(ব্যক্তিগত পাঞ্চ লগ)":"(শ্রেণি সারসংক্ষেপ)"}`,orientation:e,metaLeft:`তারিখ/সময়কাল: <strong>${r}</strong> | শ্রেণি: <strong>${d}</strong>`,metaRight:`মোট উপস্থিতি রেকর্ড: <strong>${n.total||((J=p==null?void 0:p.records)==null?void 0:J.length)||0} টি</strong>`})}

  <div class="meta-bar">
    <div>তারিখ/সময়কাল: <span>${r}</span></div>
    <div>শ্রেণি: <span>${d}</span></div>
    <div>মোট উপস্থিতি রেকর্ড: <span>${n.total||((bt=p==null?void 0:p.records)==null?void 0:bt.length)||0} টি</span></div>
  </div>

  ${a==="full"||a==="summary_only"?`
    <div class="stats-row">
      <div class="stat-box" style="background: #f8fafc;">
        <div class="stat-val" style="color: #0284c7;">${n.total||0}</div>
        <div class="stat-lbl">মোট রেকর্ড</div>
      </div>
      <div class="stat-box" style="background: #f0fdf4;">
        <div class="stat-val" style="color: #16a34a;">${n.present||0}</div>
        <div class="stat-lbl">উপস্থিত</div>
      </div>
      <div class="stat-box" style="background: #fef2f2;">
        <div class="stat-val" style="color: #dc2626;">${n.absent||0}</div>
        <div class="stat-lbl">অনুপস্থিত</div>
      </div>
      <div class="stat-box" style="background: #fffbeb;">
        <div class="stat-val" style="color: #d97706;">${n.late||0}</div>
        <div class="stat-lbl">বিলম্ব</div>
      </div>
      <div class="stat-box" style="background: #eff6ff;">
        <div class="stat-val" style="color: #2563eb;">${n.on_leave||0}</div>
        <div class="stat-lbl">ছুটি</div>
      </div>
    </div>
  `:""}

  ${x?`
    <div class="section-title">📊 শ্রেণি-ভিত্তিক উপস্থিতির সারসংক্ষেপ</div>
    <table>
      <thead>
        <tr>
          <th style="width: 85px;">তারিখ</th>
          <th>শ্রেণি</th>
          <th class="text-center" style="width: 60px;">মোট</th>
          <th class="text-center" style="width: 60px; color: #16a34a;">উপস্থিত</th>
          <th class="text-center" style="width: 60px; color: #dc2626;">অনুপস্থিত</th>
          <th class="text-center" style="width: 60px; color: #d97706;">বিলম্ব</th>
          <th class="text-center" style="width: 60px; color: #2563eb;">ছুটি</th>
          <th class="text-center" style="width: 75px;">উপস্থিতি হার</th>
        </tr>
      </thead>
      <tbody>
        ${c.summary.map(s=>{const L=s.total>0?Math.round(s.present/s.total*100):0;return`
            <tr>
              <td>${s.date}</td>
              <td><strong>${s.classLevel}</strong></td>
              <td class="text-center" style="font-weight: 700;">${s.total}</td>
              <td class="text-center" style="color: #16a34a; font-weight: 700;">${s.present}</td>
              <td class="text-center" style="color: #dc2626; font-weight: 700;">${s.absent}</td>
              <td class="text-center" style="color: #d97706; font-weight: 700;">${s.late}</td>
              <td class="text-center" style="color: #2563eb; font-weight: 700;">${s.on_leave}</td>
              <td class="text-center" style="font-weight: 700;">${L}%</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:""}

  ${P?`
    <div class="section-title">📋 শিক্ষার্থীদের ব্যক্তিগত পাঞ্চ লগ (${p.records.length} টি রেকর্ড)</div>
    <table>
      <thead>
        <tr>
          <th class="text-center" style="width: 30px;">#</th>
          <th style="width: 80px;">তারিখ</th>
          <th>শিক্ষার্থীর নাম</th>
          <th style="width: 75px;">আইডি</th>
          <th class="text-center" style="width: 85px;">শ্রেণি</th>
          <th class="text-center" style="width: 65px;">স্ট্যাটাস</th>
          <th class="text-center" style="width: 70px;">ইন-টাইম</th>
          <th class="text-center" style="width: 70px;">আউট-টাইম</th>
          <th class="text-center" style="width: 50px;">পাঞ্চ</th>
          <th>পাঞ্চ সময়সূচি</th>
        </tr>
      </thead>
      <tbody>
        ${p.records.map((s,L)=>`
          <tr>
            <td class="text-center">${L+1}</td>
            <td style="white-space: nowrap;">${s.date}</td>
            <td><strong>${s.student.name||"—"}</strong></td>
            <td>${s.student.studentId||"—"}</td>
            <td class="text-center">${s.student.className||"—"}</td>
            <td class="text-center">
              <span class="badge badge-${s.status}">${Zt(s.status)}</span>
            </td>
            <td class="text-center" style="font-weight: 700; color: #059669;">${s.inTime||"—"}</td>
            <td class="text-center" style="font-weight: 700; color: #4f46e5;">${s.outTime||"—"}</td>
            <td class="text-center" style="font-weight: 700;">${s.punchCount} বার</td>
            <td>
              ${s.punchTimes&&s.punchTimes.length>0?s.punchTimes.map((H,Ve)=>'<span class="punch-pill">'+(Ve+1)+". "+H+"</span>").join(""):"—"}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `:""}

  ${It(X)}

  <div class="footer">
    <div>প্রিন্ট তারিখ ও সময়: ${new Date().toLocaleString("bn-BD",{timeZone:"Asia/Dhaka"})}</div>
    <div>আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম</div>
  </div>
    </div>
  </div>

  <script>
    function changeOrientation(mode) {
      var styleTag = document.getElementById('page-orientation-style');
      var btnPort = document.getElementById('btn-portrait');
      var btnLand = document.getElementById('btn-landscape');
      if (mode === 'landscape') {
        styleTag.innerHTML = '@page { size: A4 landscape; margin: 8mm 10mm; }';
        btnLand.style.background = '#0284c7';
        btnPort.style.background = '#1e293b';
      } else {
        styleTag.innerHTML = '@page { size: A4 portrait; margin: 10mm 12mm; }';
        btnPort.style.background = '#0284c7';
        btnLand.style.background = '#1e293b';
      }
    }
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  <\/script>
</body>
</html>`;l.document.open(),l.document.write(w),l.document.close()},Ee=()=>{var d;if(!((d=c==null?void 0:c.summary)!=null&&d.length))return;const e=[["তারিখ","শ্রেণি","মোট শিক্ষার্থী","উপস্থিত","অনুপস্থিত","বিলম্ব","ছুটি","উপস্থিতি হার (%)"]];c.summary.forEach(n=>{const x=n.total>0?Math.round(n.present/n.total*100):0;e.push([n.date,n.classLevel,n.total,n.present,n.absent,n.late,n.on_leave,`${x}%`])});const a=e.map(n=>n.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(",")).join(`
`),l=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(l),h=document.createElement("a");h.href=r,h.download=`attendance-summary-${E==="single"?ct:pt+"-to-"+xt}.csv`,h.click(),URL.revokeObjectURL(r)},Fe=()=>{var d;if(!((d=p==null?void 0:p.records)!=null&&d.length))return;const e=[["তারিখ","নাম","ID","শ্রেণি","সেকশন","স্ট্যাটাস","ইন-টাইম","আউট-টাইম","পাঞ্চ সংখ্যা","সকল পাঞ্চ লগ"]];p.records.forEach(n=>{e.push([n.date,n.student.name,n.student.studentId,n.student.className,n.student.section,n.status,n.inTime||"-",n.outTime||"-",n.punchCount,(n.punchTimes||[]).join(" | ")])});const a=e.map(n=>n.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(",")).join(`
`),l=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(l),h=document.createElement("a");h.href=r,h.download="punch-report.csv",h.click(),URL.revokeObjectURL(r)},Zt=e=>({present:"উপস্থিত",absent:"অনুপস্থিত",late:"বিলম্ব",on_leave:"ছুটি",not_assigned:"নির্ধারিত নয়"})[e]||e,Nt=e=>({present:"#10b981",absent:"#ef4444",late:"#f59e0b",on_leave:"#3b82f6",not_assigned:"#94a3b8"})[e]||"#94a3b8",Oe=(e=j)=>{if(!g)return;const a=window.open("","_blank","width=1000,height=850");if(!a){window.print();return}const l=g.students||{total:0,active:0,male:0,female:0,byClass:[]},r=g.teachers||{total:0,active:0,regular:0,hifz:0},h=g.attendance||{today:{},byClass:[]},d=g.exams||{total:0,upcoming:0,ongoing:0,completed:0,grades:{},recent:[]},n=g.finance||{invoiced:0,paid:0,outstanding:0,collectionRate:0},x=d.grades||{avgMarks:0,passCount:0,failCount:0},P=h.today||{present:0,absent:0,late:0,rate:0},w={};(l.byClass||[]).forEach(s=>{w[s.className]={name:s.className,total:s.count,present:"—",rate:"—"}}),(h.byClass||[]).forEach(s=>{w[s.className]?(w[s.className].present=s.present,w[s.className].rate=s.rate?`${s.rate}%`:"—"):w[s.className]={name:s.className,total:s.total||0,present:s.present,rate:s.rate?`${s.rate}%`:"—"}});const N=Object.values(w),K=N.length>6,G=Math.ceil(N.length/2),Q=K?N.slice(0,G):N,J=K?N.slice(G):[],bt=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${f} — সার্বিক সমন্বিত প্রতিবেদন ও পরিসংখ্যান</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style id="page-orientation-style">
    ${At(e,{wrap:!1})}
  </style>
  <style>
    * { box-sizing: border-box; }
    .no-print-bar {
      background: #0f172a;
      color: #fff;
      padding: 8px 16px;
      margin-bottom: 12px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }
    .metrics-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 8px;
    }
    .metric-card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 6px 8px;
      background: #f8fafc;
      text-align: center;
    }
    .metric-title {
      font-size: 10px;
      font-weight: 700;
      color: #475569;
    }
    .metric-num {
      font-size: 15px;
      font-weight: 800;
      color: #0f766e;
      line-height: 1.2;
      font-family: 'Inter', sans-serif;
    }
    .metric-sub {
      font-size: 8.5px;
      color: #64748b;
      margin-top: 1px;
    }
    .sec-header {
      font-size: 10.5px;
      font-weight: 800;
      color: #0f172a;
      background: #f1f5f9;
      border-left: 3px solid #0f766e;
      padding: 2.5px 8px;
      margin: 6px 0 4px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    table.compact-tbl {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.5pt;
      margin-bottom: 6px;
    }
    table.compact-tbl th {
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 700;
      padding: 3px 5px;
      border: 1px solid #cbd5e1;
      text-align: center;
      font-size: 8.5pt;
    }
    table.compact-tbl td {
      padding: 2.5px 5px;
      border: 1px solid #cbd5e1;
      font-size: 8.2pt;
      vertical-align: middle;
    }
    table.compact-tbl tr:nth-child(even) { background: #f8fafc; }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .badge-status {
      display: inline-block;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 7.5pt;
      font-weight: 700;
    }
    .badge-published { background: #dcfce7; color: #15803d; }
    .badge-completed { background: #e0f2fe; color: #0369a1; }
    .badge-ongoing { background: #fef3c7; color: #b45309; }
    .badge-upcoming { background: #f1f5f9; color: #475569; }
    
    @media print {
      .no-print { display: none !important; }
      body { padding: 0 !important; }
      .print-sheet-container {
        display: flex !important;
        flex-direction: column !important;
        min-height: 100% !important;
        justify-content: space-between !important;
      }
      .print-content-layer {
        display: flex !important;
        flex-direction: column !important;
        min-height: 100% !important;
        justify-content: space-between !important;
      }
      .print-footer-signatures {
        margin-top: auto !important;
        padding-top: 16px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
    }
  </style>
</head>
<body>
  <div class="no-print no-print-bar">
    <div style="font-weight: 700;">🖨️ সার্বিক সমন্বিত প্রাতিষ্ঠানিক প্রতিবেদন — প্রিন্ট প্রিভিউ</div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button onclick="changeOrientation('portrait')" id="btn-portrait" style="padding: 5px 12px; border-radius: 6px; border: 1px solid #475569; background: ${e==="portrait"?"#0f766e":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px;">📄 পোর্ট্রেট</button>
      <button onclick="changeOrientation('landscape')" id="btn-landscape" style="padding: 5px 12px; border-radius: 6px; border: 1px solid #475569; background: ${e==="landscape"?"#0f766e":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px;">🖼️ ল্যান্ডস্কেপ</button>
      <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #475569; color: #fff; cursor: pointer; font-size: 12px;">✕ বন্ধ</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      <div>
        ${Wt({title:"সার্বিক সমন্বিত প্রাতিষ্ঠানিক প্রতিবেদন ও পরিসংখ্যান",orientation:e,metaLeft:`<strong>শাখা:</strong> ${S} | <strong>প্রতিবেদন:</strong> প্রাতিষ্ঠানিক সমন্বিত সারসংক্ষেপ`,metaRight:`<strong>তারিখ:</strong> ${new Date().toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric"})}`})}

        <!-- ১. প্রধান ৪টি মেট্রিক্স বার -->
        <div class="metrics-bar">
          <div class="metric-card">
            <div class="metric-title">শিক্ষার্থী পরিসংখ্যান</div>
            <div class="metric-num">${l.total} জন</div>
            <div class="metric-sub">সক্রিয়: ${l.active} | ছাত্র: ${l.male} | ছাত্রী: ${l.female}</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">শিক্ষক ও স্টাফ</div>
            <div class="metric-num">${r.total} জন</div>
            <div class="metric-sub">সক্রিয়: ${r.active} | জেনারেল: ${r.regular} | হিফজ: ${r.hifz}</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">দৈনিক উপস্থিতি হার</div>
            <div class="metric-num" style="color: #16a34a;">${P.rate}%</div>
            <div class="metric-sub">উপস্থিত: ${P.present} | অনুপস্থিত: ${P.absent} | বিলম্ব: ${P.late}</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">ফি আদায় হার</div>
            <div class="metric-num" style="color: #0284c7;">${n.collectionRate}%</div>
            <div class="metric-sub">আদায়: ${D(n.paid)} | বকেয়া: ${D(n.outstanding)}</div>
          </div>
        </div>

        <!-- ২. শ্রেণিভিত্তিক শিক্ষার্থী ও উপস্থিতি টেবিল (পাশাপাশি ২টি কলামে সাজানো যাতে উল্লম্বভাবে অর্ধেক জায়গা নেয়) -->
        <div class="sec-header">
          <span>📊 শ্রেণি-ভিত্তিক শিক্ষার্থী সংখ্যা ও উপস্থিতি বিবরণী</span>
          <span style="font-size: 9px; font-weight: normal; color: #64748b;">মোট শ্রেণি: ${N.length} টি</span>
        </div>
        <table class="compact-tbl">
          <thead>
            <tr>
              <th style="width: 25px;">#</th>
              <th style="text-align: left;">শ্রেণি</th>
              <th style="width: 55px;">শিক্ষার্থী</th>
              <th style="width: 55px;">উপস্থিত</th>
              <th style="width: 50px;">হার</th>
              ${J.length>0?`
                <th style="width: 25px; border-left: 2px solid #94a3b8;">#</th>
                <th style="text-align: left;">শ্রেণি</th>
                <th style="width: 55px;">শিক্ষার্থী</th>
                <th style="width: 55px;">উপস্থিত</th>
                <th style="width: 50px;">হার</th>
              `:""}
            </tr>
          </thead>
          <tbody>
            ${Q.length===0?`
              <tr><td colspan="5" style="text-align:center; color:#64748b; padding:8px;">কোনো শ্রেণির তথ্য পাওয়া যায়নি</td></tr>
            `:Q.map((s,L)=>{const H=J[L];return`
                <tr>
                  <td style="text-align: center; color: #64748b;">${L+1}</td>
                  <td style="font-weight: 600;">${s.name}</td>
                  <td style="text-align: center; font-weight: 700;">${s.total}</td>
                  <td style="text-align: center; color: #16a34a; font-weight: 700;">${s.present}</td>
                  <td style="text-align: center; font-weight: 700;">${s.rate}</td>
                  ${H?`
                    <td style="text-align: center; color: #64748b; border-left: 2px solid #94a3b8;">${G+L+1}</td>
                    <td style="font-weight: 600;">${H.name}</td>
                    <td style="text-align: center; font-weight: 700;">${H.total}</td>
                    <td style="text-align: center; color: #16a34a; font-weight: 700;">${H.present}</td>
                    <td style="text-align: center; font-weight: 700;">${H.rate}</td>
                  `:J.length>0?`
                    <td colspan="5" style="border-left: 2px solid #94a3b8; background: #f8fafc;"></td>
                  `:""}
                </tr>
              `}).join("")}
          </tbody>
        </table>

        <!-- ৩. পরীক্ষা ও আর্থিক সারসংক্ষেপ (২ কলামে পাশাপাশি) -->
        <div class="grid-2">
          <!-- বাম কলাম: পরীক্ষা ও ফলাফল -->
          <div>
            <div class="sec-header">
              <span>📝 পরীক্ষা ও ফলাফল সারসংক্ষেপ</span>
              <span style="font-size: 9px; font-weight: normal; color: #64748b;">মোট পরীক্ষা: ${d.total} টি</span>
            </div>
            <table class="compact-tbl">
              <tbody>
                <tr>
                  <td style="font-weight: 600; width: 38%;">পরীক্ষা পরিসংখ্যান</td>
                  <td colspan="2">চলমান: <strong>${d.ongoing}</strong> | সমাপ্ত: <strong>${d.completed}</strong> | আসন্ন: <strong>${d.upcoming}</strong></td>
                </tr>
                <tr>
                  <td style="font-weight: 600;">ফলাফল সারসংক্ষেপ</td>
                  <td colspan="2">উত্তীর্ণ: <strong style="color: #16a34a;">${x.passCount}</strong> | অনুত্তীর্ণ: <strong style="color: #dc2626;">${x.failCount}</strong> | গড়: <strong>${x.avgMarks}</strong></td>
                </tr>
                <tr>
                  <td style="font-weight: 600;">গ্রেড বণ্টন</td>
                  <td colspan="2" style="font-size: 7.8pt;">
                    A+: <strong>${x.aPlus||0}</strong> | A: <strong>${x.a||0}</strong> | A-: <strong>${x.aMinus||0}</strong> | B: <strong>${x.b||0}</strong> | C: <strong>${x.c||0}</strong> | F: <strong style="color: #dc2626;">${x.failCount||0}</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            ${d.recent&&d.recent.length>0?`
              <div style="font-size: 9px; font-weight: 700; margin-bottom: 2px; color: #475569;">সাম্প্রতিক পরীক্ষাসমূহ:</div>
              <table class="compact-tbl">
                <thead>
                  <tr>
                    <th style="text-align: left;">পরীক্ষার নাম</th>
                    <th>শ্রেণি</th>
                    <th>তারিখ</th>
                    <th>অবস্থা</th>
                  </tr>
                </thead>
                <tbody>
                  ${d.recent.slice(0,3).map(s=>{var L;return`
                    <tr>
                      <td style="font-weight: 600;">${s.name}</td>
                      <td style="text-align: center;">${((L=s.classLevel)==null?void 0:L.name)||"সকল শ্রেণি"}</td>
                      <td style="text-align: center; white-space: nowrap;">${s.startDate?et(s.startDate):"—"}</td>
                      <td style="text-align: center;">
                        <span class="badge-status badge-${s.status}">
                          ${s.status==="upcoming"?"আসন্ন":s.status==="ongoing"?"চলমান":s.status==="completed"?"সমাপ্ত":"প্রকাশিত"}
                        </span>
                      </td>
                    </tr>
                  `}).join("")}
                </tbody>
              </table>
            `:""}
          </div>

          <!-- ডান কলাম: আর্থিক সারসংক্ষেপ -->
          <div>
            <div class="sec-header">
              <span>💳 আর্থিক সংক্ষেপ ও ফি আদায়ের অগ্রগতি</span>
              <span style="font-size: 9px; font-weight: normal; color: #16a34a;">হার: ${n.collectionRate}%</span>
            </div>
            <table class="compact-tbl">
              <tbody>
                <tr>
                  <td style="font-weight: 600; width: 48%;">মোট ধার্যকৃত বিল (Invoiced)</td>
                  <td style="text-align: right; font-weight: 700;">${D(n.invoiced)}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #16a34a;">আদায়কৃত ফি (Paid)</td>
                  <td style="text-align: right; font-weight: 700; color: #16a34a;">${D(n.paid)}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #dc2626;">বকেয়া পরিমাণ (Outstanding)</td>
                  <td style="text-align: right; font-weight: 700; color: #dc2626;">${D(n.outstanding)}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600;">আদায়ের অগ্রগতি (Collection Rate)</td>
                  <td style="text-align: right; font-weight: 800; color: #0284c7;">${n.collectionRate}%</td>
                </tr>
              </tbody>
            </table>

            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 8px; margin-top: 4px;">
              <div style="display: flex; justify-content: space-between; font-size: 9px; font-weight: 700; margin-bottom: 3px;">
                <span>আদায় অগ্রগতি (${n.collectionRate}%)</span>
                <span>বকেয়া (${100-(n.collectionRate||0)}%)</span>
              </div>
              <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden; display: flex;">
                <div style="background: #10b981; width: ${n.collectionRate||0}%; height: 100%;"></div>
                <div style="background: #ef4444; width: ${100-(n.collectionRate||0)}%; height: 100%;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 8px; color: #64748b; margin-top: 3px;">
                <span>🟢 আদায়: ${D(n.paid)}</span>
                <span>🔴 বকেয়া: ${D(n.outstanding)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ৪. অফিসিয়াল ফুটার সিগনেচার (সরাসরি পেজের নিচে স্থিতিশীল থাকবে স্টুডেন্ট লিস্ট পেজের মতো) -->
      <div style="margin-top: auto; padding-top: 14px;">
        ${It(X)}
        <div style="margin-top: 8px; font-size: 8pt; color: #64748b; display: flex; justify-content: space-between; border-top: 1px solid #cbd5e1; padding-top: 4px;">
          <span>মুদ্রণের তারিখ ও সময়: ${new Date().toLocaleString("bn-BD",{timeZone:"Asia/Dhaka"})}</span>
          <span>আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    function changeOrientation(mode) {
      var styleTag = document.getElementById('page-orientation-style');
      var btnPort = document.getElementById('btn-portrait');
      var btnLand = document.getElementById('btn-landscape');
      if (mode === 'landscape') {
        styleTag.innerHTML = '@page { size: A4 landscape; margin: 6mm 8mm; }';
        btnLand.style.background = '#0f766e';
        btnPort.style.background = '#1e293b';
      } else {
        styleTag.innerHTML = '@page { size: A4 portrait; margin: 6mm 10mm; }';
        btnPort.style.background = '#0f766e';
        btnLand.style.background = '#1e293b';
      }
    }
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  <\/script>
</body>
</html>`;a.document.open(),a.document.write(bt),a.document.close()},Ue=()=>{Oe(j)},Ye=()=>{var d,n;if(!_)return;const e=window.open("","_blank","width=950,height=800");if(!e){window.print();return}const a=((d=_.student)==null?void 0:d.name)||"—",l=((n=_.student)==null?void 0:n.studentId)||"—",r=_.examResults||[],h=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${f} — শিক্ষার্থীর পরীক্ষার নম্বর (${a})</title>
  <style id="page-orientation-style">
    ${At("portrait",{wrap:!1})}
  </style>
  <style>
    * { box-sizing: border-box; }
    .student-badge-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 14px;
      margin-bottom: 12px;
      font-size: 11.5px;
    }
    .student-badge-box strong { color: #0f172a; }
    .exam-block {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      margin-bottom: 14px;
      padding: 10px 12px;
      page-break-inside: avoid;
    }
    .exam-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      padding-bottom: 4px;
      border-bottom: 1px dashed #cbd5e1;
    }
    .exam-title { font-size: 13px; font-weight: 700; color: #0f172a; }
    .exam-meta { font-size: 11px; font-weight: 700; color: #0369a1; }
    table { width: 100%; border-collapse: collapse; font-size: 10.5px; margin: 0; }
    th, td { border: 1px solid #cbd5e1; padding: 4px 6px; vertical-align: middle; }
    th { background: #f1f5f9; color: #0f172a; font-weight: 700; text-align: center; }
    .text-center { text-align: center; }
    .grade-pill { display: inline-block; padding: 1px 6px; border-radius: 4px; font-size: 9.5px; font-weight: 700; background: #f1f5f9; color: #334155; }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0 !important; }
      .exam-block { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #0f172a; color: #fff; padding: 10px 16px; margin-bottom: 14px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="font-weight: 700; font-size: 13px;">🖨️ শিক্ষার্থীর পরীক্ষার নম্বর — প্রিন্ট প্রিভিউ</div>
    <div style="display: flex; gap: 8px;">
      <button onclick="window.print()" style="padding: 6px 18px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-size: 13px; font-weight: 700;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding: 6px 14px; border-radius: 6px; border: none; background: #475569; color: #fff; cursor: pointer; font-size: 13px;">✕ বন্ধ করুন</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      ${Wt({title:"শিক্ষার্থীর পরীক্ষার নম্বর ও ফলাফল বিবরণী",orientation:"portrait",metaLeft:`শিক্ষার্থীর নাম: <strong>${a}</strong> (আইডি: <strong>${l}</strong>)`,metaRight:`মোট পরীক্ষা: <strong>${r.length} টি</strong>`})}

      <div class="student-badge-box">
        <div>শিক্ষার্থী: <strong>${a}</strong> | আইডি: <strong>${l}</strong></div>
        <div>প্রিন্ট তারিখ: <strong>${new Date().toLocaleDateString("bn-BD")}</strong></div>
      </div>

      ${r.length===0?'<p style="text-align: center; color: #64748b; padding: 20px;">কোনো পরীক্ষার নম্বর পাওয়া যায়নি</p>':r.map(x=>{var P;return`
        <div class="exam-block">
          <div class="exam-header">
            <span class="exam-title">📖 ${((P=x.exam)==null?void 0:P.name)||"পরীক্ষা"}</span>
            <span class="exam-meta">মোট প্রাপ্ত: ${x.totalObtained}/${x.totalMarks} (শতকরা: ${x.overallPercentage}%)</span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="text-align: left; width: 40%;">বিষয়</th>
                <th>প্রাপ্ত নম্বর</th>
                <th>মোট নম্বর</th>
                <th>শতাংশ</th>
                <th>গ্রেড</th>
              </tr>
            </thead>
            <tbody>
              ${(x.subjects||[]).map(w=>{var N;return`
                <tr>
                  <td style="font-weight: 600;">${((N=w.subject)==null?void 0:N.name)||"—"}</td>
                  <td class="text-center" style="font-weight: 700; color: #047857;">${w.marksObtained}</td>
                  <td class="text-center">${w.totalMarks}</td>
                  <td class="text-center">${w.percentage}%</td>
                  <td class="text-center"><span class="grade-pill">${w.grade||"—"}</span></td>
                </tr>
              `}).join("")}
            </tbody>
          </table>
        </div>
      `}).join("")}

      ${It(X)}
    </div>
  </div>
</body>
</html>`;e.document.open(),e.document.write(h),e.document.close()},ht=(e,a,l,r,h)=>{let d=l+h,n=r;d>12&&(d=1,n++),d<1&&(d=12,n--),e(d),a(n)};if(T)return t.jsxs("div",{className:"flex-center",style:{minHeight:"60vh",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{className:"spinner"}),t.jsx("p",{className:"text-muted",children:"রিপোর্ট তৈরি হচ্ছে..."})]});if(!g)return t.jsxs("div",{className:"card empty-state",children:[t.jsx(Ge,{size:48,style:{opacity:.3}}),t.jsx("div",{className:"empty-state-title mt-16",children:"রিপোর্ট লোড করা সম্ভব হয়নি"}),t.jsx("button",{className:"btn btn-primary mt-16",onClick:$t,children:"পুনরায় চেষ্টা করুন"})]});const{students:W,teachers:ft,attendance:Gt,exams:F,finance:O}=g,I=Gt.today,R=Gt.thisMonth,m=F.gradeDistribution,Ct=e=>`${e.user?`${e.user.firstName||""} ${e.user.lastName||""}`.trim():""} (${e.studentId||e.admissionNumber||""})`,He=e=>`${e.user?`${e.user.firstName||""} ${e.user.lastName||""}`.trim():""} (${e.employeeId||""})`;return t.jsxs("div",{className:"animate-fade-in",ref:b,children:[k&&t.jsxs("div",{style:{position:"fixed",top:"20px",right:"20px",zIndex:2e3,padding:"14px 20px",borderRadius:"12px",display:"flex",alignItems:"center",gap:"10px",background:k.type==="success"?"rgba(16, 185, 129, 0.95)":"rgba(239, 68, 68, 0.95)",color:"#fff",boxShadow:"0 8px 30px rgba(0,0,0,0.3)",maxWidth:"400px",animation:"slideDown 0.3s ease-out"},children:[k.type==="success"?t.jsx(tt,{size:18}):t.jsx(pe,{size:18}),t.jsx("span",{style:{fontSize:"0.9rem"},children:k.message})]}),t.jsxs("div",{className:"page-header no-print",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"page-title",children:"রিপোর্ট ও বিশ্লেষণ"}),t.jsxs("p",{className:"page-subtitle",children:["শাখা: ",S," • সকল বিভাগের একত্রিত পরিসংখ্যান • সর্বশেষ আপডেট: ",new Date(g.generatedAt).toLocaleString("bn-BD")]})]}),t.jsxs("div",{className:"flex gap-12",style:{alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("button",{className:"btn btn-secondary",onClick:$t,children:[t.jsx(ne,{size:16})," রিফ্রেশ"]}),t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",background:"var(--bg-tertiary, #f1f5f9)",padding:"2px",borderRadius:"8px",border:"1px solid var(--border-color, #e2e8f0)",gap:"2px"},children:[t.jsxs("button",{type:"button",onClick:()=>Z("portrait"),style:{display:"flex",alignItems:"center",gap:"4px",padding:"6px 11px",fontSize:"0.8rem",fontWeight:600,borderRadius:"6px",border:"none",cursor:"pointer",background:j==="portrait"?"#0f766e":"transparent",color:j==="portrait"?"#ffffff":"var(--text-secondary, #475569)",transition:"all 0.15s ease"},title:"A4 Portrait মোডে প্রিন্ট করুন",children:[t.jsx("span",{children:"📄"})," পোর্ট্রেট (A4)"]}),t.jsxs("button",{type:"button",onClick:()=>Z("landscape"),style:{display:"flex",alignItems:"center",gap:"4px",padding:"6px 11px",fontSize:"0.8rem",fontWeight:600,borderRadius:"6px",border:"none",cursor:"pointer",background:j==="landscape"?"#0f766e":"transparent",color:j==="landscape"?"#ffffff":"var(--text-secondary, #475569)",transition:"all 0.15s ease"},title:"A4 Landscape মোডে প্রিন্ট করুন",children:[t.jsx("span",{children:"🖼️"})," ল্যান্ডস্কেপ (A4)"]})]}),t.jsxs("button",{className:"btn btn-primary",onClick:Ue,style:{background:"#0f766e",borderColor:"#0f766e"},children:[t.jsx(st,{size:16})," প্রিন্ট ও PDF"]})]})]}),t.jsx(Ke,{selectedRoles:X,onChange:e=>{me(e);try{localStorage.setItem("annur_footer_roles__reports",JSON.stringify(e))}catch{}},additionalRoles:["প্রস্তুতকারী","যাচাইকারী"],style:{marginBottom:"16px"}}),t.jsxs("div",{className:"print-only",style:{position:"relative",marginBottom:"20px"},children:[t.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"380px",height:"380px",opacity:.05,zIndex:0,pointerEvents:"none",backgroundImage:"url(/favicon.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}),t.jsx(qe,{documentTitle:"সার্বিক সমন্বিত প্রতিবেদন ও পরিসংখ্যান (Consolidated Report)",subTitle:`শাখা: ${S} | তৈরির তারিখ: ${new Date(g.generatedAt).toLocaleString("bn-BD")}`})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(ae,{size:20,style:{color:"var(--primary-500)"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"ছাত্র/ছাত্রী পরিসংখ্যান"})]}),t.jsxs("div",{className:"grid grid-4",children:[t.jsx(u,{icon:ae,title:"মোট শিক্ষার্থী",value:W.total,color:"teal"}),t.jsx(u,{icon:tt,title:"সক্রিয়",value:W.active,color:"green",sub:`মোটের ${W.total>0?Math.round(W.active/W.total*100):0}%`}),t.jsx(u,{icon:V,title:"ছাত্র (ছেলে)",value:W.male,color:"blue"}),t.jsx(u,{icon:V,title:"ছাত্রী (মেয়ে)",value:W.female,color:"purple"})]}),W.byClass&&W.byClass.length>0&&t.jsxs("div",{className:"card mt-16",children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"16px"},children:"শ্রেণি অনুযায়ী শিক্ষার্থী সংখ্যা"}),W.byClass.map(e=>t.jsx(y,{label:e.className,value:e.count,max:W.total,color:"#14b8a6"},e.className))]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(V,{size:20,style:{color:"var(--primary-500)"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"শিক্ষকমণ্ডলী পরিসংখ্যান"})]}),t.jsxs("div",{className:"grid grid-4",children:[t.jsx(u,{icon:V,title:"মোট শিক্ষক",value:ft.total,color:"teal"}),t.jsx(u,{icon:tt,title:"সক্রিয় শিক্ষক",value:ft.active,color:"green"}),t.jsx(u,{icon:V,title:"জেনারেল বিভাগ",value:ft.regular,color:"blue"}),t.jsx(u,{icon:V,title:"হিফজ বিভাগ",value:ft.hifz,color:"amber"})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(ut,{size:20,style:{color:"var(--primary-500)"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"সার্বিক উপস্থিতি"})]}),t.jsxs("div",{className:"grid grid-2",children:[t.jsxs("div",{className:"card",children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"16px",color:"var(--primary-400)"},children:"আজকের উপস্থিতি"}),I.total===0?t.jsx("p",{className:"text-muted text-sm",children:"আজকের কোনো উপস্থিতি ডেটা পাওয়া যায়নি"}):t.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[t.jsxs("div",{children:[t.jsx(xe,{segments:[{value:I.present,color:"#22c55e"},{value:I.absent,color:"#ef4444"},{value:I.late,color:"#f59e0b"}],size:110}),t.jsxs("div",{style:{textAlign:"center",fontSize:"1.2rem",fontWeight:800,marginTop:"8px"},children:[I.rate,"%"]})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx(y,{label:"উপস্থিত",value:I.present,max:I.total,color:"#22c55e"}),t.jsx(y,{label:"অনুপস্থিত",value:I.absent,max:I.total,color:"#ef4444"}),t.jsx(y,{label:"বিলম্বিত",value:I.late,max:I.total,color:"#f59e0b"})]})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"16px",color:"var(--primary-400)"},children:"এই মাসের উপস্থিতি"}),R.total===0?t.jsx("p",{className:"text-muted text-sm",children:"এই মাসের কোনো উপস্থিতি ডেটা পাওয়া যায়নি"}):t.jsxs("div",{className:"flex gap-16",style:{alignItems:"center"},children:[t.jsxs("div",{children:[t.jsx(xe,{segments:[{value:R.present,color:"#22c55e"},{value:R.absent,color:"#ef4444"},{value:R.late,color:"#f59e0b"}],size:110}),t.jsxs("div",{style:{textAlign:"center",fontSize:"1.2rem",fontWeight:800,marginTop:"8px"},children:[R.rate,"%"]})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx(y,{label:"উপস্থিত",value:R.present,max:R.total,color:"#22c55e"}),t.jsx(y,{label:"অনুপস্থিত",value:R.absent,max:R.total,color:"#ef4444"}),t.jsx(y,{label:"বিলম্বিত",value:R.late,max:R.total,color:"#f59e0b"})]})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(re,{size:20,style:{color:"var(--primary-500)"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"পরীক্ষা ও ফলাফল"})]}),t.jsxs("div",{className:"grid grid-4",style:{marginBottom:"16px"},children:[t.jsx(u,{icon:re,title:"মোট পরীক্ষা",value:F.total,color:"teal"}),t.jsx(u,{icon:ts,title:"আসন্ন",value:F.upcoming,color:"blue"}),t.jsx(u,{icon:ne,title:"চলমান",value:F.ongoing,color:"amber"}),t.jsx(u,{icon:tt,title:"সমাপ্ত",value:F.completed,color:"green"})]}),m.totalEntries>0&&t.jsxs("div",{className:"grid grid-2",children:[t.jsxs("div",{className:"card",children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"16px"},children:"গ্রেড বিভাজন"}),t.jsx(y,{label:"A+ (৮০-১০০)",value:m.aPlus,max:m.totalEntries,color:"#14b8a6"}),t.jsx(y,{label:"A (৭০-৭৯)",value:m.a,max:m.totalEntries,color:"#3b82f6"}),t.jsx(y,{label:"A- (৬০-৬৯)",value:m.aMinus,max:m.totalEntries,color:"#8b5cf6"}),t.jsx(y,{label:"B (৫০-৫৯)",value:m.b,max:m.totalEntries,color:"#f59e0b"}),t.jsx(y,{label:"C (৪০-৪৯)",value:m.c,max:m.totalEntries,color:"#f97316"}),t.jsx(y,{label:"D (৩৩-৩৯)",value:m.d,max:m.totalEntries,color:"#64748b"}),t.jsx(y,{label:"F (০-৩২)",value:m.failCount,max:m.totalEntries,color:"#ef4444"})]}),t.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600},children:"সার্বিক ফলাফল সারসংক্ষেপ"}),t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsxs("div",{style:{flex:1,background:"var(--success-bg)",borderRadius:"12px",padding:"20px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.8rem",fontWeight:800,color:"var(--success)"},children:m.passCount}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--success)"},children:"উত্তীর্ণ"})]}),t.jsxs("div",{style:{flex:1,background:"var(--danger-bg)",borderRadius:"12px",padding:"20px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.8rem",fontWeight:800,color:"var(--danger)"},children:m.failCount}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--danger)"},children:"অনুত্তীর্ণ"})]})]}),t.jsxs("div",{style:{background:"var(--info-bg)",borderRadius:"12px",padding:"20px",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--info)"},children:m.avgMarks}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--info)"},children:"গড় নম্বর (Avg Marks)"})]}),t.jsxs("div",{style:{fontSize:"0.83rem",color:"var(--text-muted)",textAlign:"center"},children:["মোট ",m.totalEntries," টি নম্বর এন্ট্রির উপর ভিত্তি করে"]})]})]}),F.recent&&F.recent.length>0&&t.jsxs("div",{className:"card table-container mt-16",style:{padding:0},children:[t.jsx("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)"},children:t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600},children:"সাম্প্রতিক পরীক্ষাসমূহ"})}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"পরীক্ষার নাম"}),t.jsx("th",{children:"শ্রেণি"}),t.jsx("th",{children:"শুরুর তারিখ"}),t.jsx("th",{children:"অবস্থা"})]})}),t.jsx("tbody",{children:F.recent.map(e=>{var a;return t.jsxs("tr",{children:[t.jsx("td",{className:"font-semibold",children:e.name}),t.jsx("td",{children:((a=e.classLevel)==null?void 0:a.name)||"সকল শ্রেণি"}),t.jsx("td",{children:e.startDate?et(e.startDate):"—"}),t.jsx("td",{children:t.jsx("span",{className:`badge ${e.status==="published"?"badge-active":e.status==="completed"?"badge-info":e.status==="ongoing"?"badge-warning":"badge-muted"}`,children:e.status==="upcoming"?"আসন্ন":e.status==="ongoing"?"চলমান":e.status==="completed"?"সমাপ্ত":"ফলাফল প্রকাশিত"})})]},e._id)})})]})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(ie,{size:20,style:{color:"var(--primary-500)"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"আর্থিক সারসংক্ষেপ"})]}),t.jsxs("div",{className:"grid grid-4",children:[t.jsx(u,{icon:ie,title:"মোট বিল",value:D(O.invoiced),color:"teal"}),t.jsx(u,{icon:tt,title:"সংগৃহীত",value:D(O.paid),color:"green"}),t.jsx(u,{icon:pe,title:"বকেয়া",value:D(O.outstanding),color:"red"}),t.jsx(u,{icon:es,title:"সংগ্রহ হার",value:`${O.collectionRate}%`,color:"blue"})]}),t.jsxs("div",{className:"card mt-16",children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:600,marginBottom:"16px"},children:"আর্থিক সংগ্রহ অগ্রগতি"}),t.jsx(y,{label:"সংগৃহীত পরিমাণ",value:O.paid,max:O.invoiced,color:"#22c55e"}),t.jsx(y,{label:"বকেয়া পরিমাণ",value:O.outstanding,max:O.invoiced,color:"#ef4444"})]})]}),t.jsxs("div",{className:"print-only print-footer-signatures-wrap",style:{marginTop:"auto",paddingTop:"20px",pageBreakInside:"avoid"},children:[t.jsx(Qe,{roles:X,style:{marginTop:"16px"}}),t.jsxs("div",{style:{marginTop:"14px",fontSize:"10px",color:"#94a3b8",display:"flex",justifyContent:"space-between",borderTop:"1px solid #e2e8f0",paddingTop:"6px"},children:[t.jsxs("span",{children:["মুদ্রণের তারিখ: ",new Date().toLocaleString("bn-BD",{timeZone:"Asia/Dhaka"})]}),t.jsx("span",{children:"আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম"})]})]}),t.jsxs("div",{className:"no-print",children:[t.jsxs("div",{style:{borderTop:"2px solid var(--primary-500)",marginBottom:"32px",paddingTop:"8px"},children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:800,color:"var(--primary-400)"},children:"📋 ব্যক্তিগত রিপোর্ট"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"নির্দিষ্ট শিক্ষার্থী/শিক্ষকের উপস্থিতি ও নম্বর দেখুন"})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(ut,{size:20,style:{color:"#22c55e"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"শিক্ষার্থীর ব্যক্তিগত উপস্থিতি"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"flex-end",marginBottom:"20px"},children:[t.jsxs("div",{style:{flex:"1 1 250px"},children:[t.jsx("label",{className:"form-label",children:"শিক্ষার্থী নির্বাচন করুন"}),t.jsxs("select",{className:"form-select",value:nt,onChange:e=>ve(e.target.value),children:[t.jsx("option",{value:"",children:"-- শিক্ষার্থী বাছুন --"}),wt.map(e=>t.jsx("option",{value:e._id,children:Ct(e)},e._id))]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{className:"btn btn-secondary",style:{padding:"8px"},onClick:()=>ht(Rt,Tt,at,rt,-1),children:t.jsx(le,{size:16})}),t.jsxs("span",{style:{minWidth:"140px",textAlign:"center",fontWeight:600,fontSize:"0.9rem"},children:[vt[at]," ",rt]}),t.jsx("button",{className:"btn btn-secondary",style:{padding:"8px"},onClick:()=>ht(Rt,Tt,at,rt,1),children:t.jsx(oe,{size:16})})]}),t.jsxs("button",{className:"btn btn-primary",onClick:Le,disabled:!nt||Bt,children:[t.jsx(yt,{size:16})," ",Bt?"অনুসন্ধান...":"দেখুন"]})]}),z&&t.jsxs("div",{style:{animation:"slideDown 0.3s ease-out"},children:[t.jsxs("div",{style:{padding:"12px 16px",background:"var(--primary-50)",borderRadius:"10px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{fontWeight:700,fontSize:"1rem"},children:(Jt=z.student)==null?void 0:Jt.name}),t.jsxs("span",{style:{marginLeft:"8px",color:"var(--text-muted)",fontSize:"0.85rem"},children:["(",(Xt=z.student)==null?void 0:Xt.studentId,")"]})]}),t.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:[vt[z.month]," ",z.year]})]}),t.jsxs("div",{className:"grid grid-2",style:{gap:"20px"},children:[t.jsx(ge,{records:z.records,month:z.month,year:z.year}),t.jsxs("div",{children:[t.jsx("div",{className:"grid grid-2",style:{gap:"10px",marginBottom:"16px"},children:Object.entries(jt).map(([e,a])=>t.jsxs("div",{style:{padding:"12px",borderRadius:"10px",background:`${U[e]}15`,textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:U[e]},children:z.summary[e]||0}),t.jsx("div",{style:{fontSize:"0.8rem",color:U[e]},children:a})]},e))}),z.summary.total>0&&t.jsxs("div",{style:{textAlign:"center",padding:"16px",background:"var(--success-bg)",borderRadius:"10px"},children:[t.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--success)"},children:[Math.round(z.summary.present/z.summary.total*100),"%"]}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--success)"},children:"উপস্থিতি হার"})]}),z.summary.total===0&&t.jsx("p",{className:"text-muted text-sm",style:{textAlign:"center"},children:"এই মাসে কোনো উপস্থিতি ডেটা নেই"})]})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(V,{size:20,style:{color:"#3b82f6"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"শিক্ষকের ব্যক্তিগত উপস্থিতি"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"flex-end",marginBottom:"20px"},children:[t.jsxs("div",{style:{flex:"1 1 250px"},children:[t.jsx("label",{className:"form-label",children:"শিক্ষক নির্বাচন করুন"}),t.jsxs("select",{className:"form-select",value:it,onChange:e=>we(e.target.value),children:[t.jsx("option",{value:"",children:"-- শিক্ষক বাছুন --"}),fe.map(e=>t.jsx("option",{value:e._id,children:He(e)},e._id))]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{className:"btn btn-secondary",style:{padding:"8px"},onClick:()=>ht(Dt,_t,lt,ot,-1),children:t.jsx(le,{size:16})}),t.jsxs("span",{style:{minWidth:"140px",textAlign:"center",fontWeight:600,fontSize:"0.9rem"},children:[vt[lt]," ",ot]}),t.jsx("button",{className:"btn btn-secondary",style:{padding:"8px"},onClick:()=>ht(Dt,_t,lt,ot,1),children:t.jsx(oe,{size:16})})]}),t.jsxs("button",{className:"btn btn-primary",onClick:De,disabled:!it||Pt,children:[t.jsx(yt,{size:16})," ",Pt?"অনুসন্ধান...":"দেখুন"]})]}),$&&t.jsxs("div",{style:{animation:"slideDown 0.3s ease-out"},children:[t.jsxs("div",{style:{padding:"12px 16px",background:"rgba(59,130,246,0.1)",borderRadius:"10px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{fontWeight:700,fontSize:"1rem"},children:(qt=$.teacher)==null?void 0:qt.name}),t.jsxs("span",{style:{marginLeft:"8px",color:"var(--text-muted)",fontSize:"0.85rem"},children:["(",(Kt=$.teacher)==null?void 0:Kt.employeeId,")"]})]}),t.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:[vt[$.month]," ",$.year]})]}),t.jsxs("div",{className:"grid grid-2",style:{gap:"20px"},children:[t.jsx(ge,{records:$.records,month:$.month,year:$.year}),t.jsxs("div",{children:[t.jsx("div",{className:"grid grid-2",style:{gap:"10px",marginBottom:"16px"},children:Object.entries(jt).map(([e,a])=>t.jsxs("div",{style:{padding:"12px",borderRadius:"10px",background:`${U[e]}15`,textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:U[e]},children:$.summary[e]||0}),t.jsx("div",{style:{fontSize:"0.8rem",color:U[e]},children:a})]},e))}),$.summary.total>0&&t.jsxs("div",{style:{textAlign:"center",padding:"16px",background:"rgba(59,130,246,0.1)",borderRadius:"10px"},children:[t.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"#3b82f6"},children:[Math.round($.summary.present/$.summary.total*100),"%"]}),t.jsx("div",{style:{fontSize:"0.85rem",color:"#3b82f6"},children:"উপস্থিতি হার"})]}),$.summary.total===0&&t.jsx("p",{className:"text-muted text-sm",style:{textAlign:"center"},children:"এই মাসে কোনো উপস্থিতি ডেটা নেই"})]})]})]})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(Je,{size:20,style:{color:"#a855f7"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"শিক্ষার্থীর পরীক্ষার নম্বর"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"flex-end",marginBottom:"20px"},children:[t.jsxs("div",{style:{flex:"1 1 250px"},children:[t.jsx("label",{className:"form-label",children:"শিক্ষার্থী নির্বাচন করুন"}),t.jsxs("select",{className:"form-select",value:dt,onChange:e=>ke(e.target.value),children:[t.jsx("option",{value:"",children:"-- শিক্ষার্থী বাছুন --"}),wt.map(e=>t.jsx("option",{value:e._id,children:Ct(e)},e._id))]})]}),t.jsxs("div",{style:{flex:"1 1 200px"},children:[t.jsx("label",{className:"form-label",children:"পরীক্ষা (ঐচ্ছিক)"}),t.jsxs("select",{className:"form-select",value:St,onChange:e=>ze(e.target.value),children:[t.jsx("option",{value:"",children:"সকল পরীক্ষা"}),ue.map(e=>t.jsx("option",{value:e._id,children:e.name},e._id))]})]}),t.jsxs("button",{className:"btn btn-primary",onClick:_e,disabled:!dt||Et,children:[t.jsx(yt,{size:16})," ",Et?"অনুসন্ধান...":"দেখুন"]})]}),_&&t.jsxs("div",{style:{animation:"slideDown 0.3s ease-out"},children:[t.jsxs("div",{style:{padding:"12px 16px",background:"rgba(168,85,247,0.1)",borderRadius:"10px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{fontWeight:700,fontSize:"1rem"},children:(Qt=_.student)==null?void 0:Qt.name}),t.jsxs("span",{style:{marginLeft:"8px",color:"var(--text-muted)",fontSize:"0.85rem"},children:["(",(te=_.student)==null?void 0:te.studentId,")"]})]}),t.jsxs("button",{type:"button",className:"btn btn-sm btn-outline",onClick:Ye,style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#fff",borderColor:"#a855f7",color:"#7e22ce",fontWeight:600,padding:"5px 12px"},children:[t.jsx(st,{size:15})," নম্বর বিবরণী প্রিন্ট করুন"]})]}),_.examResults.length===0?t.jsx("p",{className:"text-muted text-sm",style:{textAlign:"center",padding:"20px"},children:"কোনো নম্বর এন্ট্রি পাওয়া যায়নি"}):_.examResults.map((e,a)=>{var l;return t.jsxs("div",{className:"card",style:{marginBottom:"16px",border:"1px solid var(--border-color)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",flexWrap:"wrap",gap:"8px"},children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:700},children:((l=e.exam)==null?void 0:l.name)||"অজানা পরীক্ষা"}),t.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[t.jsxs("span",{className:`badge ${e.overallPercentage>=80?"badge-active":e.overallPercentage>=60?"badge-info":e.overallPercentage>=33?"badge-warning":"badge-danger"}`,children:["সার্বিক: ",e.overallPercentage,"%"]}),t.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:[e.totalObtained,"/",e.totalMarks]})]})]}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{textAlign:"center"},children:"বিষয়"}),t.jsx("th",{style:{textAlign:"center"},children:"প্রাপ্ত নম্বর"}),t.jsx("th",{style:{textAlign:"center"},children:"মোট নম্বর"}),t.jsx("th",{style:{textAlign:"center"},children:"শতাংশ"}),t.jsx("th",{style:{textAlign:"center"},children:"গ্রেড"})]})}),t.jsx("tbody",{children:e.subjects.map((r,h)=>{var d;return t.jsxs("tr",{children:[t.jsx("td",{style:{textAlign:"center",fontWeight:600},children:((d=r.subject)==null?void 0:d.name)||"—"}),t.jsx("td",{style:{textAlign:"center"},children:t.jsx("span",{style:{fontWeight:700,color:r.percentage>=80?"#22c55e":r.percentage>=60?"#3b82f6":r.percentage>=33?"#f59e0b":"#ef4444"},children:r.marksObtained})}),t.jsx("td",{style:{textAlign:"center"},children:r.totalMarks}),t.jsx("td",{style:{textAlign:"center"},children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx("div",{style:{width:"50px",height:"6px",background:"var(--border-color)",borderRadius:"100px",overflow:"hidden"},children:t.jsx("div",{style:{height:"100%",width:`${r.percentage}%`,borderRadius:"100px",background:r.percentage>=80?"#22c55e":r.percentage>=60?"#3b82f6":r.percentage>=33?"#f59e0b":"#ef4444"}})}),t.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:600},children:[r.percentage,"%"]})]})}),t.jsx("td",{style:{textAlign:"center"},children:t.jsx("span",{className:"badge badge-muted",children:r.grade||"—"})})]},h)})})]})]},a)})]})]})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsxs("div",{className:"flex gap-8 mb-16",style:{alignItems:"center"},children:[t.jsx(ut,{size:20,style:{color:"#10b981"}}),t.jsx("h2",{style:{fontSize:"1.15rem",fontWeight:700},children:"বায়োমেট্রিক পাঞ্চ রিপোর্ট (Fingerprint Report)"})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"flex-end",marginBottom:"20px",padding:"16px",background:"var(--bg-tertiary)",borderRadius:"12px"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"তারিখের ধরন"}),t.jsxs("div",{style:{display:"inline-flex",background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"8px",padding:"2px"},children:[t.jsx("button",{type:"button",onClick:()=>Ot("single"),style:{padding:"5px 14px",borderRadius:"6px",border:"none",background:E==="single"?"var(--primary)":"transparent",color:E==="single"?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"একক দিন"}),t.jsx("button",{type:"button",onClick:()=>Ot("range"),style:{padding:"5px 14px",borderRadius:"6px",border:"none",background:E==="range"?"var(--primary)":"transparent",color:E==="range"?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:600,cursor:"pointer"},children:"তারিখ রেঞ্জ"})]})]}),E==="single"?t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"তারিখ"}),t.jsx("input",{type:"date",className:"form-input",value:ct,onChange:e=>Ne(e.target.value),style:{height:"38px"}})]}):t.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"শুরু"}),t.jsx("input",{type:"date",className:"form-input",value:pt,onChange:e=>Ce(e.target.value),style:{height:"38px"}})]}),t.jsx("span",{className:"text-muted",style:{marginTop:"20px"},children:"—"}),t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"শেষ"}),t.jsx("input",{type:"date",className:"form-input",value:xt,onChange:e=>Ae(e.target.value),style:{height:"38px"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"form-label",children:"শ্রেণি"}),t.jsxs("select",{className:"form-select",value:q,onChange:e=>We(e.target.value),style:{height:"38px"},children:[t.jsx("option",{value:"all",children:"সকল শ্রেণি"}),Vt.map(e=>t.jsx("option",{value:e._id,children:e.name},e._id))]})]}),t.jsxs("div",{style:{flex:"1 1 200px",minWidth:"200px"},children:[t.jsx("label",{className:"form-label",children:"শিক্ষার্থী (ঐচ্ছিক)"}),t.jsxs("select",{className:"form-select",value:zt,onChange:e=>Ie(e.target.value),style:{height:"38px"},children:[t.jsx("option",{value:"",children:"সকল শিক্ষার্থী"}),wt.map(e=>t.jsx("option",{value:e._id,children:Ct(e)},e._id))]})]}),t.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"auto"},children:t.jsxs("button",{className:"btn btn-primary",onClick:Pe,disabled:Yt,style:{height:"38px",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(yt,{size:15})," ",Yt?"লোড হচ্ছে...":"রিপোর্ট দেখুন"]})})]}),c&&t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{className:"grid grid-5",style:{gap:"10px",marginBottom:"16px"},children:[{label:"মোট রেকর্ড",value:c.totals.total,color:"#64748b"},{label:"উপস্থিত",value:c.totals.present,color:"#10b981"},{label:"অনুপস্থিত",value:c.totals.absent,color:"#ef4444"},{label:"বিলম্ব",value:c.totals.late,color:"#f59e0b"},{label:"ছুটি",value:c.totals.on_leave,color:"#3b82f6"}].map(e=>t.jsxs("div",{style:{padding:"12px",borderRadius:"10px",background:e.color+"12",textAlign:"center",border:"1px solid "+e.color+"30"},children:[t.jsx("div",{style:{fontSize:"1.6rem",fontWeight:800,color:e.color,fontFamily:"Inter"},children:e.value}),t.jsx("div",{style:{fontSize:"0.78rem",color:e.color,fontWeight:600},children:e.label})]},e.label))}),((ee=c.summary)==null?void 0:ee.length)>0&&t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",flexWrap:"wrap",gap:"8px"},children:[t.jsx("h4",{style:{fontSize:"0.95rem",fontWeight:700,margin:0,color:"var(--text-primary)"},children:"📊 শ্রেণি-ভিত্তিক উপস্থিতির সারসংক্ষেপ"}),t.jsxs("button",{className:"btn btn-outline",onClick:Ee,style:{fontSize:"0.8rem",padding:"4px 10px",display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(de,{size:13})," সারসংক্ষেপ CSV"]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"table",style:{margin:0},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"তারিখ"}),t.jsx("th",{children:"শ্রেণি"}),t.jsx("th",{style:{textAlign:"center"},children:"মোট"}),t.jsx("th",{style:{textAlign:"center",color:"#10b981"},children:"উপস্থিত"}),t.jsx("th",{style:{textAlign:"center",color:"#ef4444"},children:"অনুপস্থিত"}),t.jsx("th",{style:{textAlign:"center",color:"#f59e0b"},children:"বিলম্ব"}),t.jsx("th",{style:{textAlign:"center",color:"#3b82f6"},children:"ছুটি"}),t.jsx("th",{style:{textAlign:"center"},children:"উপস্থিতি হার"})]})}),t.jsx("tbody",{children:c.summary.map((e,a)=>{const l=e.total>0?Math.round(e.present/e.total*100):0;return t.jsxs("tr",{children:[t.jsx("td",{style:{fontFamily:"Inter",fontWeight:600},children:e.date}),t.jsx("td",{style:{fontWeight:600},children:e.classLevel}),t.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:700},children:e.total}),t.jsx("td",{style:{textAlign:"center",color:"#10b981",fontWeight:700},children:e.present}),t.jsx("td",{style:{textAlign:"center",color:"#ef4444",fontWeight:700},children:e.absent}),t.jsx("td",{style:{textAlign:"center",color:"#f59e0b",fontWeight:700},children:e.late}),t.jsx("td",{style:{textAlign:"center",color:"#3b82f6",fontWeight:700},children:e.on_leave}),t.jsx("td",{style:{textAlign:"center"},children:t.jsxs("span",{style:{padding:"2px 8px",borderRadius:"12px",fontSize:"0.8rem",fontWeight:700,fontFamily:"Inter",background:l>=75?"rgba(16,185,129,0.15)":l>=50?"rgba(245,158,11,0.15)":"rgba(239,68,68,0.15)",color:l>=75?"#10b981":l>=50?"#f59e0b":"#ef4444"},children:[l,"%"]})})]},a)})})]})})]})]}),p&&t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[t.jsxs("h3",{style:{fontSize:"1rem",fontWeight:700,margin:0},children:["ব্যক্তিগত পাঞ্চ লগ",t.jsxs("span",{style:{marginLeft:"8px",fontSize:"0.82rem",fontWeight:500,color:"var(--text-muted)"},children:["(",p.total," টি রেকর্ড)"]})]}),p.records.length>0&&t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"btn btn-outline",onClick:Fe,style:{fontSize:"0.82rem",padding:"5px 12px",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(de,{size:14})," পাঞ্চ লগ CSV"]}),t.jsxs("button",{className:"btn btn-primary",onClick:()=>{mt("punch_only"),gt(!0)},style:{fontSize:"0.82rem",padding:"5px 14px",display:"flex",alignItems:"center",gap:"6px",background:"#0284c7",borderColor:"#0284c7"},children:[t.jsx(st,{size:14})," PDF / প্রিন্ট করুন"]})]})]}),p.records.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)"},children:[t.jsx(ut,{size:40,style:{opacity:.3,marginBottom:"8px"}}),t.jsx("p",{children:"নির্বাচিত তারিখে কোনো পাঞ্চ রেকর্ড পাওয়া যায়নি"})]}):t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"table",style:{margin:0},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"তারিখ"}),t.jsx("th",{children:"নাম"}),t.jsx("th",{style:{textAlign:"center"},children:"শ্রেণি"}),t.jsx("th",{style:{textAlign:"center"},children:"স্ট্যাটাস"}),t.jsx("th",{style:{textAlign:"center"},children:"ইন-টাইম"}),t.jsx("th",{style:{textAlign:"center"},children:"আউট-টাইম"}),t.jsx("th",{style:{textAlign:"center"},children:"পাঞ্চ সংখ্যা"}),t.jsx("th",{style:{minWidth:"200px"},children:"সকল পাঞ্চ লগ"})]})}),t.jsx("tbody",{children:p.records.map((e,a)=>t.jsxs("tr",{children:[t.jsx("td",{style:{fontFamily:"Inter",fontWeight:600,whiteSpace:"nowrap"},children:e.date}),t.jsxs("td",{children:[t.jsx("div",{style:{fontWeight:600},children:e.student.name}),t.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["ID: ",e.student.studentId]})]}),t.jsx("td",{style:{textAlign:"center"},children:t.jsx("span",{style:{padding:"2px 8px",borderRadius:"10px",fontSize:"0.78rem",fontWeight:600,background:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:e.student.className||"—"})}),t.jsx("td",{style:{textAlign:"center"},children:t.jsx("span",{style:{padding:"3px 10px",borderRadius:"12px",fontSize:"0.8rem",fontWeight:700,background:Nt(e.status)+"20",color:Nt(e.status),border:"1px solid "+Nt(e.status)+"40"},children:Zt(e.status)})}),t.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600,color:"#10b981"},children:e.inTime||"—"}),t.jsx("td",{style:{textAlign:"center",fontFamily:"Inter",fontWeight:600,color:"#6366f1"},children:e.outTime||"—"}),t.jsx("td",{style:{textAlign:"center"},children:t.jsxs("span",{style:{padding:"2px 10px",borderRadius:"12px",fontFamily:"Inter",fontWeight:700,fontSize:"0.85rem",background:e.punchCount>0?"rgba(14,165,233,0.12)":"var(--bg-tertiary)",color:e.punchCount>0?"#0ea5e9":"var(--text-muted)"},children:[e.punchCount," বার"]})}),t.jsx("td",{children:e.punchTimes&&e.punchTimes.length>0?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.punchTimes.map((l,r)=>t.jsxs("span",{style:{padding:"2px 7px",borderRadius:"8px",background:"rgba(16,185,129,0.1)",color:"#059669",fontSize:"0.75rem",fontFamily:"Inter",fontWeight:600,whiteSpace:"nowrap"},children:[r+1,". ",l]},r))}):t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:"—"})})]},a))})]})})]})]}),Te&&t.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},children:t.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"480px",padding:"24px",borderRadius:"12px",background:"var(--bg-primary, #ffffff)",boxShadow:"0 20px 25px -5px rgba(0,0,0,0.3)",border:"1px solid var(--border-color)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px",borderBottom:"1px solid var(--border-color, #e2e8f0)",paddingBottom:"12px"},children:[t.jsxs("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"8px",color:"var(--text-primary)"},children:[t.jsx(st,{size:20,color:"#0284c7"})," প্রিন্ট ও PDF ওরিয়েন্টেশন"]}),t.jsx("button",{onClick:()=>gt(!1),style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",color:"var(--text-muted)"},children:"✕"})]}),t.jsxs("div",{style:{marginBottom:"18px"},children:[t.jsx("label",{style:{fontSize:"0.88rem",fontWeight:600,display:"block",marginBottom:"8px",color:"var(--text-primary)"},children:"কোন অংশটি প্রিন্ট করতে চান?"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid "+(B==="full"?"#0284c7":"var(--border-color, #e2e8f0)"),borderRadius:"8px",cursor:"pointer",background:B==="full"?"rgba(2,132,199,0.08)":"transparent"},children:[t.jsx("input",{type:"radio",name:"printScope",checked:B==="full",onChange:()=>mt("full")}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"var(--text-primary)"},children:"📑 সম্পূর্ণ রিপোর্ট"}),t.jsx("div",{style:{fontSize:"0.76rem",color:"var(--text-muted)"},children:"সারসংক্ষেপ কার্ড, শ্রেণি টেবিল ও ব্যক্তিগত পাঞ্চ লগ সব একসাথে"})]})]}),t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid "+(B==="punch_only"?"#0284c7":"var(--border-color, #e2e8f0)"),borderRadius:"8px",cursor:"pointer",background:B==="punch_only"?"rgba(2,132,199,0.08)":"transparent"},children:[t.jsx("input",{type:"radio",name:"printScope",checked:B==="punch_only",onChange:()=>mt("punch_only")}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"var(--text-primary)"},children:"📋 শুধু ব্যক্তিগত পাঞ্চ লগ"}),t.jsx("div",{style:{fontSize:"0.76rem",color:"var(--text-muted)"},children:"শিক্ষার্থীদের ইন-টাইম, আউট-টাইম ও বিস্তারিত পাঞ্চের তালিকা"})]})]}),((se=c==null?void 0:c.summary)==null?void 0:se.length)>0&&t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid "+(B==="summary_only"?"#0284c7":"var(--border-color, #e2e8f0)"),borderRadius:"8px",cursor:"pointer",background:B==="summary_only"?"rgba(2,132,199,0.08)":"transparent"},children:[t.jsx("input",{type:"radio",name:"printScope",checked:B==="summary_only",onChange:()=>mt("summary_only")}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",color:"var(--text-primary)"},children:"📊 শুধু শ্রেণি-ভিত্তিক সারসংক্ষেপ"}),t.jsx("div",{style:{fontSize:"0.76rem",color:"var(--text-muted)"},children:"ক্লাস অনুযায়ী উপস্থিতির হার ও মোট পরিসংখ্যান"})]})]})]})]}),t.jsxs("div",{style:{marginBottom:"22px"},children:[t.jsx("label",{style:{fontSize:"0.88rem",fontWeight:600,display:"block",marginBottom:"8px",color:"var(--text-primary)"},children:"প্রিন্ট ওরিয়েন্টেশন (Orientation)"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsxs("button",{type:"button",onClick:()=>Ut("landscape"),style:{padding:"12px 10px",borderRadius:"8px",border:"2px solid "+(Y==="landscape"?"#0284c7":"var(--border-color, #e2e8f0)"),background:Y==="landscape"?"rgba(2,132,199,0.1)":"transparent",cursor:"pointer",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"4px"},children:"📑"}),t.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem",color:Y==="landscape"?"#0284c7":"var(--text-primary)"},children:"ল্যান্ডস্কেপ (Landscape)"}),t.jsx("div",{style:{fontSize:"0.72rem",color:"#10b981",fontWeight:700,marginTop:"2px"},children:"আড়াআড়ি (প্রস্তাবিত)"})]}),t.jsxs("button",{type:"button",onClick:()=>Ut("portrait"),style:{padding:"12px 10px",borderRadius:"8px",border:"2px solid "+(Y==="portrait"?"#0284c7":"var(--border-color, #e2e8f0)"),background:Y==="portrait"?"rgba(2,132,199,0.1)":"transparent",cursor:"pointer",textAlign:"center"},children:[t.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"4px"},children:"📄"}),t.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem",color:Y==="portrait"?"#0284c7":"var(--text-primary)"},children:"পোর্ট্রেট (Portrait)"}),t.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginTop:"2px"},children:"লম্বালম্বি"})]})]})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx("button",{className:"btn btn-secondary",onClick:()=>gt(!1),children:"বাতিল"}),t.jsxs("button",{className:"btn btn-primary",style:{background:"#0284c7",borderColor:"#0284c7",display:"flex",alignItems:"center",gap:"6px"},onClick:()=>{gt(!1),Me(Y,B)},children:[t.jsx(st,{size:16})," প্রিন্ট ও PDF তৈরি করুন"]})]})]})})]})]}),t.jsx("style",{children:`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media print {
          @page {
            size: A4 ${j};
            margin: ${j==="landscape"?"6mm 8mm 6mm 8mm":"8mm 10mm 8mm 10mm"};
          }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body, html, #root, .main-content, .page-container {
            background: #ffffff !important;
            color: #000000 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .sidebar, .topbar { display: none !important; }
          section {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 12px !important;
          }
          .card {
            background: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            page-break-inside: avoid;
            box-shadow: none !important;
            margin-bottom: 10px !important;
            padding: 10px 14px !important;
            border-radius: 6px !important;
          }
          .stats-card {
            background: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            page-break-inside: avoid;
            padding: 8px 10px !important;
            border-radius: 6px !important;
          }
          .stats-card-value {
            -webkit-text-fill-color: #000000 !important;
            color: #000000 !important;
            font-size: 1.3rem !important;
          }
          .stats-card-label {
            font-size: 0.76rem !important;
          }
          .stats-card-icon {
            display: none !important;
          }
          .grid {
            gap: 8px !important;
          }
          .grid-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          h2 {
            font-size: 1rem !important;
            margin-bottom: 6px !important;
          }
          h3 {
            font-size: 0.88rem !important;
            margin-bottom: 6px !important;
          }
          table {
            font-size: 8.5pt !important;
            width: 100% !important;
            border-collapse: collapse !important;
          }
          th, td {
            padding: 3px 6px !important;
            border: 1px solid #94a3b8 !important;
          }
          .badge {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            padding: 1px 5px !important;
            font-size: 7.5pt !important;
          }
          .page-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
            justify-content: space-between !important;
          }
          .print-footer-signatures-wrap {
            margin-top: auto !important;
            padding-top: 18px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
        .print-only { display: none; }
      `})]})}export{ms as default};
