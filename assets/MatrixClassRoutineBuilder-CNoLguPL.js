import{r as d,d as te,j as e,l as se,X,E as le}from"./index-Drhg0Aph.js";import{P as ne}from"./printer-CJJDUWzX.js";import{S as re}from"./save-Bd29gxQY.js";import{C as de}from"./circle-alert-BRQrS9gh.js";import{P as q}from"./plus-BIcpntp3.js";import{T as oe}from"./trash-2-CKxDF6e3.js";function p(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ae(s,o="আন্-নূর ইসলামিক একাডেমি"){if(!s||!Array.isArray(s.columns)||!Array.isArray(s.rows))return;const i=s.title||"সম্মিলিত ক্লাস রুটিন",m=s.startTime||"ক্লাস শুরু : সকাল ৮:৩০ টা।",x=s.footerNote||"",C=s.signatureRole||"প্রধান শিক্ষক,",y=s.signatureName||"",N=s.signatureOrg||o,k=s.columns.map(g=>{const j=g.label||"পিরিয়ড",c=g.subLabel||"";return`<th><div>${p(j)}</div>${c?`<div style="font-weight:600;margin-top:2px;">${p(c)}</div>`:""}</th>`}).join(""),b=s.rows.map((g,j)=>{const c=s.columns.map(f=>{const u=(g.cells&&g.cells[f.id]?String(g.cells[f.id]).trim():"")||"-";return`<td>${p(u).replace(/\n/g,"<br/>")}</td>`}).join("");return`<tr class="${j%2===1?"zebra":""}">
        <td class="class-col">${p(g.className)}</td>
        ${c}
      </tr>`}).join(""),v=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <title>${p(i)}</title>
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
    <h1 class="title">${p(i)}</h1>
    ${`<div class="sub-time">${p(m)}</div>`}
    <table>
      <thead>
        <tr>
          <th style="width:95px;">শ্রেণি / সময়</th>
          ${k}
        </tr>
      </thead>
      <tbody>
        ${b}
      </tbody>
    </table>
    <div class="footer-wrap">
      ${x?`<div class="note-box">${p(x).replace(/\n/g,"<br/>")}</div>`:"<div></div>"}
      <div class="sig-box">
        ${`<div>${p(C)}</div>`}
        ${y?`<div>${p(y)}</div>`:""}
        ${N?`<div>${p(N)}</div>`:""}
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 250);
    };
  <\/script>
</body>
</html>`,h=window.open("","_blank","width=1100,height=750");h&&(h.document.open(),h.document.write(v),h.document.close())}function xe({matrix:s}){return!s||!Array.isArray(s.columns)||!Array.isArray(s.rows)?null:e.jsxs("div",{children:[s.startTime&&e.jsx("div",{style:{fontSize:"0.88rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:s.startTime}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",margin:0,fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"10px 8px",textAlign:"center",fontWeight:800,minWidth:"95px"},children:"শ্রেণি / সময়"}),s.columns.map(o=>e.jsxs("th",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:700,minWidth:"115px"},children:[e.jsx("div",{children:o.label}),o.subLabel&&e.jsx("div",{style:{fontSize:"0.78rem",fontWeight:600,marginTop:"2px"},children:o.subLabel})]},o.id))]})}),e.jsx("tbody",{children:s.rows.map((o,i)=>e.jsxs("tr",{style:{background:i%2===1?"#e2e8f0":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:700,color:"#0f172a"},children:o.className}),s.columns.map(m=>{const x=(o.cells&&o.cells[m.id]?String(o.cells[m.id]).trim():"")||"-";return e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",color:"#0f172a",whiteSpace:"pre-line"},children:x},m.id)})]},o.id||i))})]})}),(s.footerNote||s.signatureName||s.signatureOrg)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"16px",flexWrap:"wrap",marginTop:"12px"},children:[s.footerNote?e.jsx("div",{style:{border:"1px solid #94a3b8",padding:"8px 12px",borderRadius:"6px",fontSize:"0.83rem",maxWidth:"640px",background:"#f8fafc",color:"#1e293b"},children:s.footerNote}):e.jsx("div",{}),e.jsxs("div",{style:{textAlign:"center",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",marginLeft:"auto"},children:[s.signatureRole&&e.jsx("div",{children:s.signatureRole}),s.signatureName&&e.jsx("div",{children:s.signatureName}),s.signatureOrg&&e.jsx("div",{children:s.signatureOrg})]})]})]})}function be({initialMatrix:s=null,classes:o=[],subjects:i=[],madrasahName:m="আন্-নূর ইসলামিক একাডেমি",onSave:x,onClose:C}){const[y,N]=d.useState([]);d.useEffect(()=>{i.length>0||te.get("/students/subjects").then(t=>{var n,l;(n=t.data)!=null&&n.success&&N(((l=t.data.data)==null?void 0:l.subjects)||[])}).catch(()=>{})},[i.length]);const k=d.useMemo(()=>{const n=(i.length>0?i:y).map(l=>typeof l=="string"?l:l==null?void 0:l.name).map(l=>String(l||"").trim()).filter(l=>l&&l!=="-");return[...new Set(n)]},[i,y]),b=d.useMemo(()=>[...o].sort((t,n)=>(Number(t.order)||999)-(Number(n.order)||999)),[o]),[v,h]=d.useState((s==null?void 0:s.title)||"সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং"),[g,j]=d.useState((s==null?void 0:s.startTime)||"ক্লাস শুরু : সকাল ৮:৩০ টা।"),[c,f]=d.useState(()=>{var t;return(t=s==null?void 0:s.columns)!=null&&t.length?s.columns:[{id:"c_1",label:"১ম ঘণ্টা",subLabel:"৮:৩০ - ৯:১০"},{id:"c_2",label:"২য় ঘণ্টা",subLabel:"৯:১০ - ৯:৫০"},{id:"c_3",label:"৩য় ঘণ্টা",subLabel:"৯:৫০ - ১০:৩০"},{id:"c_4",label:"বিরতি",subLabel:"১০:৩০ - ১০:৫০"},{id:"c_5",label:"৪র্থ ঘণ্টা",subLabel:"১০:৫০ - ১১:৩০"},{id:"c_6",label:"৫ম ঘণ্টা",subLabel:"১১:৩০ - ১২:১০"}]}),[u,z]=d.useState(()=>{var t;return(t=s==null?void 0:s.rows)!=null&&t.length?s.rows:b.length>0?b.map((n,l)=>({id:`r_${n._id||l}`,classId:n._id||"",className:n.name,cells:{}})):[{id:"r_1",classId:"",className:"প্লে",cells:{}},{id:"r_2",classId:"",className:"নার্সারি",cells:{}},{id:"r_3",classId:"",className:"প্রথম",cells:{}},{id:"r_4",classId:"",className:"দ্বিতীয়",cells:{}},{id:"r_5",classId:"",className:"তৃতীয়",cells:{}}]}),[R,K]=d.useState((s==null?void 0:s.footerNote)??"বিঃদ্রঃ সকল শিক্ষার্থীকে নির্ধারিত সময়ের ১০ মিনিট পূর্বে শ্রেণিকক্ষে উপস্থিত থাকতে হবে এবং রুটিন অনুযায়ী বই ও খাতা সাথে আনতে হবে।"),[W,U]=d.useState((s==null?void 0:s.signatureRole)??"প্রধান শিক্ষক,"),[I,Y]=d.useState((s==null?void 0:s.signatureName)??"হাফেজ মাও. মোঃ আরিফুর রহমান"),[T,G]=d.useState((s==null?void 0:s.signatureOrg)??m),[J,L]=d.useState(!1),[A,B]=d.useState(""),[O,P]=d.useState(!1),[S,w]=d.useState(null),D=d.useMemo(()=>{const t=new Set(u.map(n=>String(n.className||"").trim().toLowerCase()));return b.filter(n=>!t.has(String(n.name||"").trim().toLowerCase()))},[b,u]),Q=()=>{const t=`c_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;f(n=>[...n,{id:t,label:`${n.length+1}ম ঘণ্টা`,subLabel:"সময় লিখুন"}])},V=t=>{c.length<=1||f(n=>n.filter(l=>l.id!==t))},E=(t,n,l)=>{f(a=>a.map(r=>r.id===t?{...r,[n]:l}:r))},Z=t=>{z(n=>n.filter(l=>l.id!==t))},F=t=>{const n=`r_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;z(l=>[...l,{id:n,classId:t._id||"",className:t.name,cells:{}}]),L(!1),B("")},_=(t,n,l)=>{z(a=>a.map(r=>r.id===t?{...r,cells:{...r.cells||{},[n]:l}}:r))},H=()=>({id:(s==null?void 0:s.id)||`cm_${Date.now()}`,title:v.trim()||"সম্মিলিত ক্লাস রুটিন",startTime:g,columns:c,rows:u,footerNote:R,signatureRole:W,signatureName:I,signatureOrg:T,updatedAt:new Date().toISOString()}),M=async()=>{if(!v.trim()){w({type:"error",message:"রুটিনের শিরোনাম আবশ্যক"});return}if(u.length===0){w({type:"error",message:"অন্তত একটি শ্রেণির রো যোগ করুন"});return}P(!0),w(null);try{await x(H()),w({type:"success",message:"সম্মিলিত ক্লাস রুটিন সফলভাবে সংরক্ষণ করা হয়েছে!"})}catch(t){w({type:"error",message:(t==null?void 0:t.message)||"সংরক্ষণ করতে সমস্যা হয়েছে"})}finally{P(!1)}};return e.jsxs("div",{className:"card",style:{padding:"20px",borderRadius:"12px",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(se,{size:20,style:{color:"var(--primary)"}}),e.jsx("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:700},children:s?"সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন সম্পাদনা":"নতুন সম্মিলিত ম্যাট্রিক্স ক্লাস রুটিন"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>ae(H(),m),style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(ne,{size:15})," প্রিন্ট প্রিভিউ"]}),e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:M,disabled:O,style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[e.jsx(re,{size:15})," ",O?"সংরক্ষণ হচ্ছে...":"রুটিন সেভ করুন"]}),C&&e.jsxs("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:C,children:[e.jsx(X,{size:16})," বন্ধ করুন"]})]})]}),S&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"8px",marginBottom:"14px",background:S.type==="success"?"#dcfce7":"#fee2e2",color:S.type==="success"?"#166534":"#991b1b",fontSize:"0.88rem",fontWeight:600},children:[S.type==="success"?e.jsx(le,{size:16}):e.jsx(de,{size:16}),e.jsx("span",{children:S.message})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"রুটিনের শিরোনাম *"}),e.jsx("input",{type:"text",className:"form-input",value:v,onChange:t=>h(t.target.value),placeholder:"যেমন: সম্মিলিত ক্লাস রুটিন / ২০২৬ ইং"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"ক্লাস শুরুর সময়"}),e.jsx("input",{type:"text",className:"form-input",value:g,onChange:t=>j(t.target.value),placeholder:"ক্লাস শুরু : সকাল ৮:৩০ টা।"})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",position:"relative"},children:[e.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>L(t=>!t),style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(q,{size:15})," শ্রেণি যোগ করুন (যেমন ৪র্থ, ৫ম, ৬ষ্ঠ)"]}),J&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"6px",zIndex:30,background:"var(--bg-card, #fff)",border:"1px solid var(--border-color)",borderRadius:"10px",padding:"12px",boxShadow:"0 10px 25px rgba(15,23,42,0.18)",minWidth:"280px"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,marginBottom:"8px",color:"var(--text-primary)"},children:"তালিকা থেকে শ্রেণি নির্বাচন করুন:"}),D.length>0?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"10px"},children:D.map(t=>e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>F(t),style:{fontSize:"0.8rem",padding:"4px 10px"},children:["+ ",t.name]},t._id))}):e.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"8px"},children:"সিস্টেমের সব শ্রেণি ইতিমধ্যে যোগ করা আছে।"}),e.jsxs("div",{style:{display:"flex",gap:"6px",borderTop:"1px solid var(--border-color)",paddingTop:"8px"},children:[e.jsx("input",{type:"text",className:"form-input",placeholder:"অথবা কাস্টম শ্রেণি (যেমন: চতুর্থ)",value:A,onChange:t=>B(t.target.value),style:{fontSize:"0.82rem",padding:"5px 8px",height:"32px"}}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>{A.trim()&&F({_id:"",name:A.trim()})},children:"যোগ"})]})]})]}),e.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:Q,style:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[e.jsx(q,{size:15})," পিরিয়ড/সময় কলাম যোগ করুন"]})]}),e.jsx("div",{className:"table-responsive",style:{border:"1px solid #94a3b8",borderRadius:"8px",overflowX:"auto",marginBottom:"16px"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",margin:0,minWidth:"720px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#cbd5e1",color:"#0f172a"},children:[e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"8px",textAlign:"center",fontWeight:800,width:"130px",verticalAlign:"middle",whiteSpace:"normal"},children:"শ্রেণি / সময়"}),c.map(t=>e.jsx("th",{style:{border:"1px solid #94a3b8",padding:"6px",minWidth:"140px",verticalAlign:"top",whiteSpace:"normal"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:c.length>1&&e.jsx("button",{type:"button",onClick:()=>V(t.id),title:"এই কলামটি মুছুন",style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"2px",lineHeight:1},children:e.jsx(X,{size:14})})}),e.jsx("input",{type:"text",value:t.label||"",onChange:n=>E(t.id,"label",n.target.value),placeholder:"১ম ঘণ্টা",style:{display:"block",width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.82rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}}),e.jsx("input",{type:"text",value:t.subLabel||"",onChange:n=>E(t.id,"subLabel",n.target.value),placeholder:"৮:৩০ - ৯:১০",style:{display:"block",width:"100%",textAlign:"center",fontWeight:600,fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"#ffffff"}})]})},t.id)),e.jsx("th",{style:{border:"1px solid #94a3b8",width:"56px",textAlign:"center",padding:"8px"},children:"মুছুন"})]})}),e.jsx("tbody",{children:u.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:c.length+2,style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:["কোনো শ্রেণির রো নেই। উপরে ",e.jsx("strong",{children:'"+ শ্রেণি যোগ করুন"'})," বাটনে ক্লিক করুন।"]})}):u.map((t,n)=>e.jsxs("tr",{style:{background:n%2===1?"#f1f5f9":"#ffffff"},children:[e.jsx("td",{style:{border:"1px solid #94a3b8",padding:"6px",verticalAlign:"middle"},children:e.jsx("input",{type:"text",value:t.className,onChange:l=>z(a=>a.map(r=>r.id===t.id?{...r,className:l.target.value}:r)),style:{width:"100%",textAlign:"center",fontWeight:700,fontSize:"0.86rem",padding:"5px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",background:"transparent"}})}),c.map(l=>e.jsxs("td",{style:{border:"1px solid #94a3b8",padding:"5px",verticalAlign:"middle"},children:[e.jsxs("select",{value:"",onChange:a=>{const r=a.target.value;if(!r)return;if(r==="__CLEAR__"){_(t.id,l.id,"");return}const $=String(t.cells&&t.cells[l.id]||"").trim(),ee=!$||$==="-"?r:`${$} + ${r}`;_(t.id,l.id,ee)},style:{width:"100%",fontSize:"0.78rem",padding:"3px 4px",borderRadius:"4px",border:"1px solid #94a3b8",marginBottom:"4px",background:"#f8fafc",color:"#0f172a"},children:[e.jsx("option",{value:"",children:"+ বিষয় বাছুন..."}),e.jsx("option",{value:"__CLEAR__",children:"— খালি করুন (-)"}),k.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsx("textarea",{rows:2,value:t.cells&&t.cells[l.id]||"",onChange:a=>_(t.id,l.id,a.target.value),placeholder:"-",style:{width:"100%",textAlign:"center",fontSize:"0.83rem",padding:"4px 6px",borderRadius:"4px",border:"1px solid #cbd5e1",resize:"vertical",background:"#ffffff"}})]},l.id)),e.jsx("td",{style:{border:"1px solid #94a3b8",textAlign:"center",verticalAlign:"middle"},children:e.jsx("button",{type:"button",onClick:()=>Z(t.id),title:`${t.className} শ্রেণির রো মুছে ফেলুন`,style:{background:"none",border:"none",color:"#dc2626",cursor:"pointer",padding:"6px"},children:e.jsx(oe,{size:16})})})]},t.id))})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"16px",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600},children:"বিঃদ্রঃ (নোট বক্স)"}),e.jsx("textarea",{rows:3,className:"form-input",value:R,onChange:t=>K(t.target.value),style:{width:"100%",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{className:"form-label",style:{fontSize:"0.82rem",fontWeight:600,marginBottom:0},children:"স্বাক্ষর ব্লক (ডান পাশ)"}),e.jsx("input",{type:"text",className:"form-input",value:W,onChange:t=>U(t.target.value),placeholder:"প্রধান শিক্ষক,",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:I,onChange:t=>Y(t.target.value),placeholder:"প্রধান শিক্ষকের নাম",style:{fontSize:"0.84rem"}}),e.jsx("input",{type:"text",className:"form-input",value:T,onChange:t=>G(t.target.value),placeholder:"প্রতিষ্ঠানের নাম",style:{fontSize:"0.84rem"}})]})]})]})}export{be as M,xe as a,ae as p};
