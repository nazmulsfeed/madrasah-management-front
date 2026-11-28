import{r as d,j as e,l as J,X as P,E as Q}from"./index-DAbD6heQ.js";import{P as V}from"./printer-CSaLK87O.js";import{S as Z}from"./save-Dz90KVGD.js";import{C as M}from"./circle-alert-BvSIZynn.js";import{P as D}from"./plus-BhxVvvgr.js";import{T as ee}from"./trash-2-DcDIfV-B.js";function i(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function te(t,r="আন্-নুর ইসলামিক একাডেমি"){if(!t||!Array.isArray(t.columns)||!Array.isArray(t.rows))return;const c=t.title||"সম্মিলিত ক্লাস রুটিন",x=t.startTime||"ক্লাস শুরু : সকাল ৮:৩০ টা।",b=t.footerNote||"",f=t.signatureRole||"প্রধান শিক্ষক,",y=t.signatureName||"",w=t.signatureOrg||r,S=t.columns.map(o=>{const m=o.label||"পিরিয়ড",u=o.subLabel||"";return`<th><div>${i(m)}</div>${u?`<div style="font-weight:600;margin-top:2px;">${i(u)}</div>`:""}</th>`}).join(""),z=t.rows.map((o,m)=>{const u=t.columns.map(N=>{const C=(o.cells&&o.cells[N.id]?String(o.cells[N.id]).trim():"")||"-";return`<td>${i(C).replace(/\n/g,"<br/>")}</td>`}).join("");return`<tr class="${m%2===1?"zebra":""}">
        <td class="class-col">${i(o.className)}</td>
        ${u}
      </tr>`}).join(""),p=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${i(c)}</title>
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
      font-size: 13.5px;
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
    <h1 class="title">${i(c)}</h1>
    ${`<div class="sub-time">${i(x)}</div>`}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">শ্রেণি / সময়</th>
          ${S}
        </tr>
      </thead>
      <tbody>
        ${z}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${b?`<div class="note-box">${i(b).replace(/\n/g,"<br/>")}</div>`:"<div></div>"}
      <div class="sig-box">
        ${`<div>${i(f)}</div>`}
        ${y?`<div>${i(y)}</div>`:""}
        ${w?`<div>${i(w)}</div>`:""}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,g=window.open("","_blank","width=1100,height=750");g&&(g.document.open(),g.document.write(p),g.document.close())}function ae({matrix:t}){return!t||!Array.isArray(t.columns)||!Array.isArray(t.rows)?null:e.jsxs("div",{children:[t.startTime&&e.jsx("div",{style:{fontSize:"0.88rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:t.startTime}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",margin:0,fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"10px 8px",textAlign:"center",fontWeight:800,minWidth:"95px"},children:"শ্রেণি / সময়"}),t.columns.map(r=>e.jsxs("th",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:700,minWidth:"115px"},children:[e.jsx("div",{children:r.label}),r.subLabel&&e.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,marginTop:"2px"},children:r.subLabel})]},r.id))]})}),e.jsx("tbody",{children:t.rows.map((r,c)=>e.jsxs("tr",{style:{background:c%2===1?"#e2e8f0":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:700,color:"#0f172a"},children:r.className}),t.columns.map(x=>{const b=(r.cells&&r.cells[x.id]?String(r.cells[x.id]).trim():"")||"-";return e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",color:"#0f172a",whiteSpace:"pre-line"},children:b},x.id)})]},r.id||c))})]})}),(t.footerNote||t.signatureName||t.signatureOrg)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"16px",flexWrap:"wrap",marginTop:"12px"},children:[t.footerNote?e.jsx("div",{style:{border:"1px solid #94a3b8",padding:"8px 12px",borderRadius:"6px",fontSize:"0.83rem",maxWidth:"640px",background:"#f8fafc",color:"#1e293b"},children:t.footerNote}):e.jsx("div",{}),e.jsxs("div",{style:{textAlign:"center",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",marginLeft:"auto"},children:[t.signatureRole&&e.jsx("div",{children:t.signatureRole}),t.signatureName&&e.jsx("div",{children:t.signatureName}),t.signatureOrg&&e.jsx("div",{children:t.signatureOrg})]})]})]})}function ie({initialMatrix:t=null,classes:r=[],madrasahName:c="আন্-নুর ইসলামিক একাডেমি",onSave:x,onClose:b}){const f=d.useMemo(()=>[...r].sort((s,l)=>(Number(s.order)||999)-(Number(l.order)||999)),[r]),[y,w]=d.useState((t==null?void 0:t.title)||"সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং"),[S,z]=d.useState((t==null?void 0:t.startTime)||"ক্লাস শুরু : সকাল ৮:৩০ টা।"),[p,g]=d.useState(()=>{var s;return(s=t==null?void 0:t.columns)!=null&&s.length?t.columns:[{id:"c_1",label:"১ম ঘণ্টা",subLabel:"৮:৩০ - ৯:১০"},{id:"c_2",label:"২য় ঘণ্টা",subLabel:"৯:১০ - ৯:৫০"},{id:"c_3",label:"৩য় ঘণ্টা",subLabel:"৯:৫০ - ১০:৩০"},{id:"c_4",label:"বিরতি",subLabel:"১০:৩০ - ১০:৫০"},{id:"c_5",label:"৪র্থ ঘণ্টা",subLabel:"১০:৫০ - ১১:৩০"},{id:"c_6",label:"৫ম ঘণ্টা",subLabel:"১১:৩০ - ১২:১০"}]}),[o,m]=d.useState(()=>{var s;return(s=t==null?void 0:t.rows)!=null&&s.length?t.rows:f.length>0?f.map((l,n)=>({id:`r_${l._id||n}`,classId:l._id||"",className:l.name,cells:{}})):[{id:"r_1",classId:"",className:"প্লে",cells:{}},{id:"r_2",classId:"",className:"নার্সারি",cells:{}},{id:"r_3",classId:"",className:"প্রথম",cells:{}},{id:"r_4",classId:"",className:"দ্বিতীয়",cells:{}},{id:"r_5",classId:"",className:"তৃতীয়",cells:{}}]}),[u,N]=d.useState((t==null?void 0:t.footerNote)??"বিঃদ্রঃ সকল শিক্ষার্থীকে নির্ধারিত সময়ের ১০ মিনিট পূর্বে শ্রেণিকক্ষে উপস্থিত থাকতে হবে এবং রুটিন অনুযায়ী বই ও খাতা সাথে আনতে হবে।"),[C,E]=d.useState((t==null?void 0:t.signatureRole)??"প্রধান শিক্ষক,"),[A,F]=d.useState((t==null?void 0:t.signatureName)??"হাফেজ মাও. মোঃ আরিফুর রহমান"),[W,H]=d.useState((t==null?void 0:t.signatureOrg)??c),[X,$]=d.useState(!1),[k,R]=d.useState(""),[_,I]=d.useState(!1),[v,j]=d.useState(null),T=d.useMemo(()=>{const s=new Set(o.map(l=>String(l.className||"").trim().toLowerCase()));return f.filter(l=>!s.has(String(l.name||"").trim().toLowerCase()))},[f,o]),q=()=>{const s=`c_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;g(l=>[...l,{id:s,label:`${l.length+1}ম ঘণ্টা`,subLabel:"সময় লিখুন"}])},K=s=>{p.length<=1||g(l=>l.filter(n=>n.id!==s))},L=(s,l,n)=>{g(h=>h.map(a=>a.id===s?{...a,[l]:n}:a))},U=s=>{m(l=>l.filter(n=>n.id!==s))},B=s=>{const l=`r_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;m(n=>[...n,{id:l,classId:s._id||"",className:s.name,cells:{}}]),$(!1),R("")},Y=(s,l,n)=>{m(h=>h.map(a=>a.id===s?{...a,cells:{...a.cells||{},[l]:n}}:a))},O=()=>({id:(t==null?void 0:t.id)||`cm_${Date.now()}`,title:y.trim()||"সম্মিলিত ক্লাস রুটিন",startTime:S,columns:p,rows:o,footerNote:u,signatureRole:C,signatureName:A,signatureOrg:W,updatedAt:new Date().toISOString()}),G=async()=>{if(!y.trim()){j({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}if(o.length===0){j({type:"error",message:"অন্তত একটি শ্রেণির রো যোগ করুন"});return}I(!0),j(null);try{await x(O()),j({type:"success",message:"সম্মিলিত ক্লাস রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(s){j({type:"error",message:(s==null?void 0:s.message)||"সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{I(!1)}};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(J,{size:20,style:{color:"var(--primary)"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700},children:t?"সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন সম্পাদনা":"নতুন সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>te(O(),c),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(V,{size:15})," প্রিন্ট প্রিভিউ"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:G,disabled:_,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(Z,{size:15})," ",_?"সংরক্ষণ হচ্ছে...":"রুটিন সেভ করুন"]}),b&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:b,children:[e.jsx(P,{size:16})," বন্ধ করুন"]})]})]}),v&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:v.type==="success"?"#dcfce7":"#fee2e2",color:v.type==="success"?"#166534":"#991b1b",fontSize:"0.88rem",fontWeight:600},children:[v.type==="success"?e.jsx(Q,{size:16}):e.jsx(M,{size:16}),e.jsx("span",{children:v.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",value:y,onChange:s=>w(s.target.value),placeholder:"যেমন: সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"ক্লাস শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",value:S,onChange:s=>z(s.target.value),placeholder:"ক্লাস শুরু : সকাল ৮:৩০ টা।"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",position:"relative"},children:[e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>$(s=>!s),style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(D,{size:15})," শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)"]}),X&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"6px",zIndex:30,background:"var(--bg-card, #fff)",border:"1px solid var(--border-color)",borderRadius:"10px",padding:"12px",boxShadow:"0 10px 25px rgba(15,23,42,0.18)",minWidth:"280px"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"তালিকা থেকে শ্রেণি নির্বাচন করুন:"}),T.length>0?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"10px"},children:T.map(s=>e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>B(s),style:{fontSize:"0.8rem",padding:"4px 10px"},children:["+ ",s.name]},s._id))}):e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px"},children:"সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।"}),e.jsxs("div",{style:{display:"flex",gap:"6px",borderTop:"1px solid var(--border-color)",paddingTop:"8px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)",value:k,onChange:s=>R(s.target.value),style:{fontSize:"0.82rem",padding:"5px 8px",height:"32px"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>{k.trim()&&B({_id:"",name:k.trim()})},children:"যোগ"})]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:q,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(D,{size:15})," পিরিয়ড/সময় কলাম যোগ করুন"]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto",marginBottom:"16px"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",margin:0,minWidth:"720px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:800,width:"130px",verticalAlign:"middle",whiteSpace:"normal"},children:"শ্রেণি / সময়"}),p.map(s=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",minWidth:"140px",verticalAlign:"top",whiteSpace:"normal"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:p.length>1&&e.jsx("button",{type:"button",onClick:()=>K(s.id),title:"এই কলামটি মুছুন",style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"2px",lineHeight:1},children:e.jsx(P,{size:14})})}),e.jsx("input",{type:"text",value:s.label||"",onChange:l=>L(s.id,"label",l.target.value),placeholder:"১ম ঘণ্টা",style:{display:"block",width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.82rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}}),e.jsx("input",{type:"text",value:s.subLabel||"",onChange:l=>L(s.id,"subLabel",l.target.value),placeholder:"৮:৩০ - ৯:১০",style:{display:"block",width:"100%",textAlign:"center",fontWeight:600,fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}})]})},s.id)),e.jsx("th",{style:{border:"1px solid #94a3b8",width:"56px",textAlign:"center",padding:"8px"},children:"মুছুন"})]})}),e.jsx("tbody",{children:o.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:p.length+2,style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:["কোনো শ্রেণির রো নেই। উপরে ",e.jsx("strong",{children:'"+ শ্রেণি যোগ করুন"'})," বাটনে ক্লিক করুন।"]})}):o.map((s,l)=>e.jsxs("tr",{style:{background:l%2===1?"#f1f5f9":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"6px",verticalAlign:"middle"},children:e.jsx("input",{type:"text",value:s.className,onChange:n=>m(h=>h.map(a=>a.id===s.id?{...a,className:n.target.value}:a)),style:{width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.86rem",padding:"5px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"transparent"}})}),p.map(n=>e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"5px",verticalAlign:"middle"},children:e.jsx("textarea",{rows:2,value:s.cells&&s.cells[n.id]||"",onChange:h=>Y(s.id,n.id,h.target.value),placeholder:"-",style:{width:"100%",textAlign:"center",fontSize:"0.83rem",padding:"4px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",resize:"vertical",background:"#ffffff"}})},n.id)),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",verticalAlign:"middle"},children:e.jsx("button",{type:"button",onClick:()=>U(s.id),title:`${s.className} শ্রেণির রো মুছে ফেলুন`,style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"6px"},children:e.jsx(ee,{size:16})})})]},s.id))})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিঃদ্রঃ (নোট বক্স)"}),e.jsx("textarea",{rows:3,className:"form-input",value:u,onChange:s=>N(s.target.value),style:{width:"100%",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600,marginBottom:0},children:"স্বাক্ষর ব্লক (ডান পাশ)"}),e.jsx("input",{type:"text",className:"form-input",value:C,onChange:s=>E(s.target.value),placeholder:"প্রধান শিক্ষক,",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:A,onChange:s=>F(s.target.value),placeholder:"প্রধান শিক্ষকের নাম",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:W,onChange:s=>H(s.target.value),placeholder:"প্রতিষ্ঠানের নাম",style:{fontSize:"0.84rem"}})]})]})]})}export{ie as M,ae as a,te as p};
