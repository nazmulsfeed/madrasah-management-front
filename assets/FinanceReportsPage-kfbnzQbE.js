import{k as At,a as $t,u as Ct,r as l,j as e,a1 as at,C as dt,R as Tt,$ as Rt,I as Pt,q as ct,U as Mt,z as pt,i as Et,K as Bt,X as Ft,d as F}from"./index-cvf-DNHv.js";import{g as _t,f as _}from"./helpers-CljGnr5z.js";import{g as Dt,a as Yt,b as Ot}from"./madrasahPrintUtils-Jjq-64Kz.js";import{M as Ht}from"./MadrasahLetterhead-DzD22Iyc.js";import{D as xt,P as Ut}from"./PrintSignatureRoleSelector-CVgJSRsj.js";import{P as qt}from"./PrintFooterSignatures-JANSyq3B.js";import{L as ht}from"./loader-8jopHjhN.js";import{P as Gt}from"./printer-zm00tV0W.js";import{F as Jt}from"./file-spreadsheet-DkfyVwxK.js";import{C as gt}from"./circle-alert-DWHJNMGH.js";import{T as z}from"./trending-up-CWH_d7vm.js";import{T as I}from"./trending-down-DoOjaeFx.js";import{D as L}from"./dollar-sign-DagIYkz_.js";import{C as Xt}from"./circle-x-DfACvIVa.js";import{S as Zt}from"./shield-check-D6VOw01y.js";import{C as Kt}from"./circle-check-CpynBSI-.js";import{S as Qt}from"./save-z_-cOGBv.js";import"./plus-Drii2xH-.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=At("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);function Sn(){var Z,K,Q,V,ee,te,ne,se,re,ie,le,oe,ae,de,ce,pe,xe,he,ge,me,fe,ye,be,ue,je,Se,Ne,ve,we,ze,Ie,Le,ke,We,Ae,$e,Ce,Te,Re,Pe,Me,Ee,Be,Fe,_e,De,Ye,Oe,He,Ue,qe,Ge,Je;const{user:mt}=$t(),k=Ct(),{madrasahName:ft,branchName:D,address:en,phone:tn}=_t(mt),j=new Date,Y=`${j.getFullYear()}-${String(j.getMonth()+1).padStart(2,"0")}`,[d,W]=l.useState("overview"),[c,A]=l.useState(Y),[y,O]=l.useState("portrait"),[$,yt]=l.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__finance_reports");return t?JSON.parse(t):xt}catch{return xt}}),[n,bt]=l.useState(null),[s,H]=l.useState(null),[C,U]=l.useState(!0),[q,T]=l.useState(""),[S,ut]=l.useState(""),[b,R]=l.useState("all"),[jt,v]=l.useState(!1),[p,St]=l.useState(null),[P,M]=l.useState(""),[E,G]=l.useState(!1),[J,X]=l.useState(null),Nt=t=>{St(t),M(t.baseSalary?String(t.baseSalary):""),v(!0)},vt=async t=>{var r;if(t.preventDefault(),!!p)try{if(G(!0),(r=(await F.post("/reports/update-staff-salary",{staffId:p._id,teacherId:p.teacherId,salary:Number(P)||0})).data)!=null&&r.success){const x=Number(P)||0;H(f=>{if(!f)return f;const h=(f.salarySheet||[]).map(g=>g._id===p._id||p.teacherId&&g.teacherId===p.teacherId?{...g,baseSalary:x}:g);return{...f,salarySheet:h}}),v(!1),X({type:"success",message:`${p.name}-এর বেতন ৳${x.toLocaleString("en-IN")} সংরক্ষণ করা হয়েছে`}),setTimeout(()=>X(null),4e3)}}catch(o){console.error("Error updating salary:",o),alert("বেতন সংরক্ষণ করতে সমস্যা হয়েছে")}finally{G(!1)}},B=async(t=c)=>{var r,o,x,f;try{U(!0),T("");const[h,g]=await Promise.all([F.get("/reports/finance",{params:{month:t}}),F.get("/reports/teacher-salary-sheet",{params:{month:t}}).catch(w=>(console.warn("Salary sheet fetch error:",w),{data:{success:!1,data:null}}))]);(r=h.data)!=null&&r.success?bt(h.data.data):T("আর্থিক রিপোর্ট তথ্য পাওয়া যায়নি।"),(o=g.data)!=null&&o.success&&H(g.data.data)}catch(h){console.error("Error fetching finance reports:",h),T(((f=(x=h.response)==null?void 0:x.data)==null?void 0:f.message)||"রিপোর্ট লোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।")}finally{U(!1)}};l.useEffect(()=>{B(c)},[c]);const wt=(t=y)=>{var h,g,w,Xe,Ze,Ke,Qe,Ve,et,tt,nt,st,rt,it,lt,ot;const r=window.open("","_blank","width=1000,height=850");if(!r){window.print();return}const o=d==="salary_sheet"?"মাসিক শিক্ষক ও কর্মচারী বেতন বিবরণী ও মাস্টাররোল":"সার্বিক আর্থিক সমন্বিত বিবরণী ও অডিট রিপোর্ট";let x="";d==="salary_sheet"?x=`
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 8.5pt; font-weight: 600;">
          <span>মোট শিক্ষক ও কর্মচারী: ${u.length} জন</span>
          <span>পরিশোধিত: ${((h=s==null?void 0:s.stats)==null?void 0:h.paidCount)||0} জন | বকেয়া: ${((g=s==null?void 0:s.stats)==null?void 0:g.unpaidCount)||0} জন</span>
          <span>মোট পরিশোধিত বেতন: ৳${(((w=s==null?void 0:s.stats)==null?void 0:w.totalSalaryPaid)||0).toLocaleString("en-IN")}</span>
        </div>
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 30px;">ক্র.</th>
              <th>শিক্ষক/কর্মচারীর নাম</th>
              <th>পদবি</th>
              <th>মোবাইল</th>
              <th style="text-align: right;">মূল বেতন (৳)</th>
              <th style="text-align: right;">পরিশোধিত (৳)</th>
              <th style="text-align: center;">স্ট্যাটাস</th>
              <th style="text-align: center;">ভাউচার ও তারিখ</th>
              <th style="text-align: center; width: 95px;">স্বাক্ষর / টিপসই</th>
            </tr>
          </thead>
          <tbody>
            ${u.map((i,N)=>`
              <tr>
                <td style="text-align: center;">${N+1}</td>
                <td style="font-weight: 700;">${i.name}</td>
                <td>${i.designation||"—"}</td>
                <td style="font-family: monospace;">${i.phone||"—"}</td>
                <td style="text-align: right; font-family: monospace;">
                  ${i.baseSalary>0?"৳"+i.baseSalary.toLocaleString("en-IN"):"—"}
                </td>
                <td style="text-align: right; font-family: monospace; font-weight: 700;">
                  ৳${(i.paidAmount||0).toLocaleString("en-IN")}
                </td>
                <td style="text-align: center; font-weight: 700; font-size: 8.5pt;">
                  ${i.status==="paid"?'<span style="color:#059669;">পরিশোধিত</span>':'<span style="color:#dc2626;">বকেয়া</span>'}
                </td>
                <td style="text-align: center; font-size: 8pt;">
                  ${i.voucherNumber?`#${i.voucherNumber} (${_(i.paymentDate)})`:"—"}
                </td>
                <td style="height: 32px; text-align: center;"></td>
              </tr>
            `).join("")}
            <tr style="background: #f8fafc; font-weight: 800;">
              <td colspan="5" style="text-align: right;">সর্বমোট পরিশোধিত বেতন:</td>
              <td style="text-align: right; font-family: monospace;">
                ৳${(((Xe=s==null?void 0:s.stats)==null?void 0:Xe.totalSalaryPaid)||0).toLocaleString("en-IN")}
              </td>
              <td colspan="3"></td>
            </tr>
          </tbody>
        </table>
      `:n&&(x=`
        <h3 style="font-size: 10.5pt; font-weight: 700; margin: 12px 0 5px 0; border-bottom: 1px solid #334155; padding-bottom: 3px;">
          ১. আয় ও ব্যয়ের সারসংক্ষেপ (${a})
        </h3>
        <table class="print-table">
          <thead>
            <tr>
              <th>বিবরণ</th>
              <th style="text-align: right;">দৈনিক (আজ)</th>
              <th style="text-align: right;">মাসিক (${a})</th>
              <th style="text-align: right;">বার্ষিক (চলতি বছর)</th>
              <th style="text-align: right;">আজীবন (Lifetime)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700;">মোট আয় (Total Income)</td>
              <td style="text-align: right;">৳${(((Ze=n.daily)==null?void 0:Ze.income)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right; font-weight: 700;">৳${(((Ke=n.monthly)==null?void 0:Ke.income)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((Qe=n.yearly)==null?void 0:Qe.income)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((Ve=n.lifetime)==null?void 0:Ve.income)||0).toLocaleString("en-IN")}</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">মোট ব্যয় (Total Expense)</td>
              <td style="text-align: right;">৳${(((et=n.daily)==null?void 0:et.expense)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right; font-weight: 700;">৳${(((tt=n.monthly)==null?void 0:tt.expense)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((nt=n.yearly)==null?void 0:nt.expense)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((st=n.lifetime)==null?void 0:st.expense)||0).toLocaleString("en-IN")}</td>
            </tr>
            <tr style="background: #f8fafc; font-weight: 800;">
              <td>নিট উদ্বৃত্ত / ঘাটতি (Surplus)</td>
              <td style="text-align: right;">৳${(((rt=n.daily)==null?void 0:rt.surplus)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((it=n.monthly)==null?void 0:it.surplus)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((lt=n.yearly)==null?void 0:lt.surplus)||0).toLocaleString("en-IN")}</td>
              <td style="text-align: right;">৳${(((ot=n.lifetime)==null?void 0:ot.surplus)||0).toLocaleString("en-IN")}</td>
            </tr>
            <tr>
              <td colspan="2" style="font-weight: 700;">শিক্ষার্থীদের মোট বকেয়া (Student Dues): ৳${(n.totalDues||0).toLocaleString("en-IN")}</td>
              <td colspan="3" style="font-weight: 700;">মোট দান ও অনুদান (Donations): ৳${(n.totalDonation||0).toLocaleString("en-IN")}</td>
            </tr>
          </tbody>
        </table>

        <h3 style="font-size: 10.5pt; font-weight: 700; margin: 14px 0 5px 0; border-bottom: 1px solid #334155; padding-bottom: 3px;">
          ২. খাতভিত্তিক ব্যয়ের বিবরণী (Category-wise Expenses)
        </h3>
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 35px;">ক্র.</th>
              <th>ব্যয়ের খাত (Expense Account)</th>
              <th style="text-align: right; width: 140px;">পরিমাণ (৳)</th>
              <th style="text-align: center; width: 85px;">শতকরা হার (%)</th>
            </tr>
          </thead>
          <tbody>
            ${(n.categoryExpense||[]).map((i,N)=>{const Wt=m>0?Math.round(Number(i.amount)/m*100):0;return`
                <tr>
                  <td style="text-align: center;">${N+1}</td>
                  <td>${i.category}</td>
                  <td style="text-align: right; font-weight: 700;">৳${Number(i.amount).toLocaleString("en-IN")}</td>
                  <td style="text-align: center;">${Wt}%</td>
                </tr>
              `}).join("")}
            ${!n.categoryExpense||n.categoryExpense.length===0?'<tr><td colspan="4" style="text-align:center; padding:10px;">কোনো ব্যয় রেকর্ড পাওয়া যায়নি</td></tr>':""}
            <tr style="background: #f8fafc; font-weight: 800;">
              <td colspan="2" style="text-align: right;">মোট ব্যয়:</td>
              <td style="text-align: right;">৳${m.toLocaleString("en-IN")}</td>
              <td style="text-align: center;">100%</td>
            </tr>
          </tbody>
        </table>

        ${n.teacherSalary&&n.teacherSalary.length>0?`
          <div style="margin-top: 14px;">
            <h3 style="font-size: 10.5pt; font-weight: 700; margin: 12px 0 5px 0; border-bottom: 1px solid #334155; padding-bottom: 3px;">
              ৩. শিক্ষক ও স্টাফ বেতন সংক্ষিপ্ত হিসাব
            </h3>
            <table class="print-table">
              <thead>
                <tr>
                  <th style="width: 35px;">ক্র.</th>
                  <th>শিক্ষক/কর্মচারী</th>
                  <th style="text-align: center; width: 85px;">ভাউচার সংখ্যা</th>
                  <th style="text-align: right; width: 130px;">এই মাসে প্রাপ্ত (৳)</th>
                  <th style="text-align: right; width: 130px;">সর্বমোট প্রদানকৃত (৳)</th>
                </tr>
              </thead>
              <tbody>
                ${n.teacherSalary.slice(0,15).map((i,N)=>`
                  <tr>
                    <td style="text-align: center;">${N+1}</td>
                    <td style="font-weight: 600;">${i.teacher}</td>
                    <td style="text-align: center;">${i.voucherCount||1} টি</td>
                    <td style="text-align: right; font-weight: 700;">৳${(i.monthPaid||0).toLocaleString("en-IN")}</td>
                    <td style="text-align: right; font-weight: 700;">৳${(i.totalPaid||0).toLocaleString("en-IN")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `:""}
      `);const f=`<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>${ft} — ${o} (${a})</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style id="page-orientation-style">
    ${Dt(t,{wrap:!1})}
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
    .print-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 8.8pt;
    }
    .print-table th, .print-table td {
      border: 1px solid #cbd5e1;
      padding: 4px 6px;
      color: #0f172a;
    }
    .print-table th {
      background-color: #f1f5f9;
      font-weight: 700;
      text-align: center;
      font-size: 8.8pt;
    }
    .print-table tr:nth-child(even) { background: #f8fafc; }
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
        padding-top: 20px !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
    }
  </style>
</head>
<body>
  <div class="no-print no-print-bar">
    <div style="font-weight: 700;">🖨️ ${o} — প্রিন্ট প্রিভিউ</div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button onclick="changeOrientation('portrait')" id="btn-portrait" style="padding: 5px 12px; border-radius: 6px; border: 1px solid #475569; background: ${t==="portrait"?"#0f766e":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px;">📄 পোর্ট্রেট</button>
      <button onclick="changeOrientation('landscape')" id="btn-landscape" style="padding: 5px 12px; border-radius: 6px; border: 1px solid #475569; background: ${t==="landscape"?"#0f766e":"#1e293b"}; color: #fff; cursor: pointer; font-size: 12px;">🖼️ ল্যান্ডস্কেপ</button>
      <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট করুন</button>
      <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #475569; color: #fff; cursor: pointer; font-size: 12px;">✕ বন্ধ</button>
    </div>
  </div>

  <div class="print-sheet-container">
    <div class="print-content-layer">
      <div>
        ${Yt({title:o,orientation:t,metaLeft:`<strong>মাস/সময়কাল:</strong> ${a} | <strong>শাখা:</strong> ${D}`,metaRight:`<strong>তারিখ:</strong> ${new Date().toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric"})}`})}

        ${x}
      </div>

      <!-- Footer Signatures (Guaranteed anchored to the bottom of the page) -->
      <div style="margin-top: auto; padding-top: 18px;">
        ${Ot($)}
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
</html>`;r.document.open(),r.document.write(f),r.document.close()},zt=()=>{wt(y)},It=()=>{const t=`${j.getFullYear()}-${String(j.getMonth()+1).padStart(2,"0")}`;A(t)},Lt=()=>{const t=new Date(j.getFullYear(),j.getMonth()-1,1),r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;A(r)},a=l.useMemo(()=>{if(!c)return"";const[t,r]=c.split("-").map(Number),o=new Date(t,r-1,1);try{return o.toLocaleDateString("bn-BD",{month:"long",year:"numeric"})}catch{return c}},[c]),u=l.useMemo(()=>s!=null&&s.salarySheet?s.salarySheet.filter(t=>(t.name||"").toLowerCase().includes(S.toLowerCase())||(t.designation||"").toLowerCase().includes(S.toLowerCase())||(t.phone||"").includes(S)?b==="paid"?t.status==="paid":b==="unpaid"?t.status==="unpaid":!0:!1):[],[s,S,b]),m=l.useMemo(()=>n!=null&&n.categoryExpense?n.categoryExpense.reduce((t,r)=>t+(Number(r.amount)||0),0):0,[n]),kt=t=>{k("/expense-vouchers",{state:{openModal:!0,payeeName:t.name,amount:t.baseSalary>0?t.baseSalary:"",description:`${t.name} - ${a} মাসের বেতন বাবদ`,date:new Date().toISOString().split("T")[0]}})};return C&&!n?e.jsxs("div",{className:"page-container flex-center",style:{minHeight:"60vh",flexDirection:"column",gap:"16px"},children:[e.jsx(ht,{className:"spin text-primary",size:44}),e.jsx("p",{className:"text-muted font-medium",children:"আর্থিক রিপোর্ট ও বেতন বিবরণী প্রস্তুত করা হচ্ছে..."})]}):e.jsxs("div",{className:"page-container animate-fade-in",style:{paddingBottom:"60px"},children:[e.jsx("style",{children:`
        @media print {
          @page {
            size: A4 ${y};
            margin: ${y==="landscape"?"6mm 8mm":"6mm 10mm"};
          }
          html, body, #root, .page-container {
            height: 100% !important;
            min-height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }
          .screen-only {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-sheet-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100% !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
          }
          .print-content-layer {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100% !important;
            flex: 1 1 auto !important;
            justify-content: space-between !important;
          }
          .print-footer-signatures-wrap {
            margin-top: auto !important;
            padding-top: 24px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .print-table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin-top: 8px !important;
            font-size: 9.5pt !important;
          }
          .print-table th, .print-table td {
            border: 1px solid #94a3b8 !important;
            padding: 4px 6px !important;
            color: #000000 !important;
          }
          .print-table th {
            background-color: #f1f5f9 !important;
            font-weight: 700 !important;
            text-align: center !important;
          }
          thead {
            display: table-header-group !important;
          }
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}),e.jsxs("div",{className:"screen-only",children:[e.jsxs("div",{className:"page-header",style:{flexWrap:"wrap",gap:"16px",alignItems:"center"},children:[e.jsx("div",{children:e.jsxs("div",{className:"flex-center gap-8 mb-4",style:{justifyContent:"flex-start"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"linear-gradient(135deg, #0f766e, #0d9488)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 12px rgba(15, 118, 110, 0.25)"},children:e.jsx(at,{size:22})}),e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",style:{margin:0,fontSize:"1.45rem",fontWeight:800},children:"আর্থিক রিপোর্ট ও বেতন বিবরণী"}),e.jsx("p",{className:"page-subtitle",style:{margin:0},children:a})]})]})}),e.jsxs("div",{className:"flex-center gap-10",style:{flexWrap:"wrap"},children:[e.jsxs("div",{className:"flex-center gap-6",style:{background:"#f8fafc",padding:"4px 10px",borderRadius:"8px",border:"1px solid #e2e8f0"},children:[e.jsx(dt,{size:16,className:"text-muted"}),e.jsx("input",{type:"month",value:c,onChange:t=>A(t.target.value),style:{border:"none",background:"transparent",fontWeight:600,fontSize:"0.9rem",color:"#1e293b",outline:"none",cursor:"pointer"},title:"মাস পরিবর্তন করুন"})]}),e.jsx("button",{onClick:It,className:`btn btn-sm ${c===Y?"btn-primary":"btn-outline"}`,style:{fontSize:"0.82rem",padding:"6px 12px"},children:"চলতি মাস"}),e.jsx("button",{onClick:Lt,className:"btn btn-sm btn-outline",style:{fontSize:"0.82rem",padding:"6px 12px"},children:"গত মাস"}),e.jsxs("button",{onClick:()=>B(c),className:"btn btn-sm btn-outline flex-center gap-4",title:"রিফ্রেশ করুন",disabled:C,children:[e.jsx(Tt,{size:14,className:C?"spin":""})," রিফ্রেশ"]}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",background:"var(--bg-tertiary, #f1f5f9)",padding:"2px",borderRadius:"8px",border:"1px solid var(--border-color, #e2e8f0)",gap:"2px"},children:[e.jsxs("button",{type:"button",onClick:()=>O("portrait"),style:{display:"flex",alignItems:"center",gap:"4px",padding:"5px 10px",fontSize:"0.78rem",fontWeight:600,borderRadius:"6px",border:"none",cursor:"pointer",background:y==="portrait"?"#0f766e":"transparent",color:y==="portrait"?"#ffffff":"var(--text-secondary, #475569)",transition:"all 0.15s ease"},title:"A4 Portrait মোডে প্রিন্ট করুন",children:[e.jsx("span",{children:"📄"})," পোর্ট্রেট (A4)"]}),e.jsxs("button",{type:"button",onClick:()=>O("landscape"),style:{display:"flex",alignItems:"center",gap:"4px",padding:"5px 10px",fontSize:"0.78rem",fontWeight:600,borderRadius:"6px",border:"none",cursor:"pointer",background:y==="landscape"?"#0f766e":"transparent",color:y==="landscape"?"#ffffff":"var(--text-secondary, #475569)",transition:"all 0.15s ease"},title:"A4 Landscape মোডে প্রিন্ট করুন",children:[e.jsx("span",{children:"🖼️"})," ল্যান্ডস্কেপ (A4)"]})]}),e.jsxs("button",{className:"btn btn-sm btn-primary flex-center gap-6",onClick:zt,style:{padding:"6px 16px",background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(Gt,{size:15})," প্রিন্ট"]})]})]}),e.jsx(Ut,{selectedRoles:$,onChange:t=>{yt(t);try{localStorage.setItem("annur_footer_roles__finance_reports",JSON.stringify(t))}catch{}},style:{marginBottom:"16px"}}),e.jsxs("div",{className:"mb-20",style:{display:"flex",gap:"8px",borderBottom:"2px solid #e2e8f0",paddingBottom:"2px"},children:[e.jsxs("button",{onClick:()=>W("overview"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 20px",borderRadius:"8px 8px 0 0",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",border:"none",background:d==="overview"?"#0f766e":"transparent",color:d==="overview"?"#ffffff":"#64748b",boxShadow:d==="overview"?"0 2px 8px rgba(15, 118, 110, 0.2)":"none",transition:"all 0.2s ease"},children:[e.jsx(at,{size:18}),"সার্বিক আর্থিক বিবরণী (Overview)"]}),e.jsxs("button",{onClick:()=>W("salary_sheet"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 20px",borderRadius:"8px 8px 0 0",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",border:"none",background:d==="salary_sheet"?"#0f766e":"transparent",color:d==="salary_sheet"?"#ffffff":"#64748b",boxShadow:d==="salary_sheet"?"0 2px 8px rgba(15, 118, 110, 0.2)":"none",transition:"all 0.2s ease"},children:[e.jsx(Jt,{size:18}),"মাসিক শিক্ষক ও স্টাফ বেতন শিট (Payroll)",((Z=s==null?void 0:s.stats)==null?void 0:Z.unpaidCount)>0&&e.jsxs("span",{style:{background:"#ef4444",color:"#fff",fontSize:"0.72rem",padding:"1px 7px",borderRadius:"12px",fontWeight:800},children:[s.stats.unpaidCount," বকেয়া"]})]})]}),q&&e.jsxs("div",{className:"card mb-20",style:{backgroundColor:"#fef2f2",borderColor:"#fca5a5",padding:"16px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(gt,{className:"text-danger",size:24}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,color:"#991b1b",fontWeight:700},children:"সমস্যা হয়েছে"}),e.jsx("p",{style:{margin:"4px 0 0",color:"#b91c1c",fontSize:"0.9rem"},children:q})]}),e.jsx("button",{onClick:()=>B(c),className:"btn btn-sm btn-outline ml-auto",style:{borderColor:"#f87171",color:"#b91c1c"},children:"আবার চেষ্টা করুন"})]}),d==="overview"&&n&&e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"grid grid-3 mb-24",style:{gap:"16px"},children:[e.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",borderLeft:"5px solid #16a34a",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#15803d",textTransform:"uppercase"},children:[a," - মোট আয়"]}),e.jsx("div",{style:{padding:"6px",background:"#dcfce7",borderRadius:"8px",color:"#16a34a"},children:e.jsx(z,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#14532d",fontFamily:"monospace"},children:["৳",(((K=n.monthly)==null?void 0:K.income)||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"শিক্ষার্থী ফী ও অন্যান্য অনুমোদিত আয়"})]}),e.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)",borderLeft:"5px solid #dc2626",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#b91c1c",textTransform:"uppercase"},children:[a," - মোট ব্যয়"]}),e.jsx("div",{style:{padding:"6px",background:"#fee2e2",borderRadius:"8px",color:"#dc2626"},children:e.jsx(I,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#7f1d1d",fontFamily:"monospace"},children:["৳",(((Q=n.monthly)==null?void 0:Q.expense)||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"অনুমোদিত ভাউচার ও স্টাফ বেতন"})]}),e.jsxs("div",{className:"card",style:{background:((V=n.monthly)==null?void 0:V.surplus)>=0?"linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)":"linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)",borderLeft:`5px solid ${((ee=n.monthly)==null?void 0:ee.surplus)>=0?"#2563eb":"#ea580c"}`,boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:700,color:((te=n.monthly)==null?void 0:te.surplus)>=0?"#1d4ed8":"#c2410c",textTransform:"uppercase"},children:[a," - নিট ",((ne=n.monthly)==null?void 0:ne.surplus)>=0?"উদ্বৃত্ত (Surplus)":"ঘাটতি (Deficit)"]}),e.jsx("div",{style:{padding:"6px",background:((se=n.monthly)==null?void 0:se.surplus)>=0?"#dbeafe":"#ffedd5",borderRadius:"8px",color:((re=n.monthly)==null?void 0:re.surplus)>=0?"#2563eb":"#ea580c"},children:e.jsx(Rt,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:((ie=n.monthly)==null?void 0:ie.surplus)>=0?"#1e3a8a":"#9a3412",fontFamily:"monospace"},children:["৳",(((le=n.monthly)==null?void 0:le.surplus)||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"(মাসিক আয় - মাসিক মোট ব্যয়)"})]}),e.jsxs("div",{className:"card",style:{borderLeft:"5px solid #d97706",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#b45309",textTransform:"uppercase"},children:"শিক্ষার্থীদের মোট বকেয়া (Dues)"}),e.jsx("div",{style:{padding:"6px",background:"#fef3c7",borderRadius:"8px",color:"#d97706"},children:e.jsx(gt,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#92400e",fontFamily:"monospace"},children:["৳",(n.totalDues||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"বকেয়া ও আংশিক পরিশোধিত ইনভয়েস"})]}),e.jsxs("div",{className:"card",style:{borderLeft:"5px solid #7c3aed",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#6d28d9",textTransform:"uppercase"},children:"মোট দান ও অনুদান (Donation)"}),e.jsx("div",{style:{padding:"6px",background:"#ede9fe",borderRadius:"8px",color:"#7c3aed"},children:e.jsx(L,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#5b21b6",fontFamily:"monospace"},children:["৳",(n.totalDonation||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"লিল্লাহ ফান্ড ও সাধারণ অনুদান"})]}),e.jsxs("div",{className:"card",style:{borderLeft:"5px solid #0891b2",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[e.jsxs("div",{className:"flex-between mb-8",children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#0e7490",textTransform:"uppercase"},children:"সর্বমোট আজীবন নিট ব্যালেন্স"}),e.jsx("div",{style:{padding:"6px",background:"#cffafe",borderRadius:"8px",color:"#0891b2"},children:e.jsx(Pt,{size:20})})]}),e.jsxs("div",{style:{fontSize:"1.75rem",fontWeight:800,color:"#155e75",fontFamily:"monospace"},children:["৳",(((oe=n.lifetime)==null?void 0:oe.surplus)||0).toLocaleString("en-IN")]}),e.jsx("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"6px"},children:"প্রতিষ্ঠান শুরুর পর থেকে মোট উদ্বৃত্ত"})]})]}),e.jsxs("div",{className:"card mb-24",style:{padding:"20px"},children:[e.jsxs("h3",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"16px",color:"#0f172a"},className:"flex-center gap-8",children:[e.jsx(dt,{size:18,className:"text-primary"}),"পর্যায়ক্রমিক তুলনামূলক সারসংক্ষেপ (Daily, Monthly & Yearly Summary)"]}),e.jsxs("div",{className:"grid grid-3",style:{gap:"16px"},children:[e.jsxs("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"10px",border:"1px solid #e2e8f0"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"12px",color:"#334155"},children:"📅 আজকের দিন (Today)"}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-success flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(z,{size:14})," আয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((ae=n.daily)==null?void 0:ae.income)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-danger flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(I,{size:14})," ব্যয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((de=n.daily)==null?void 0:de.expense)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between border-top pt-8 mt-8",children:[e.jsx("span",{style:{fontWeight:600,fontSize:"0.88rem"},children:"উদ্বৃত্ত:"}),e.jsxs("strong",{className:`font-mono ${(((ce=n.daily)==null?void 0:ce.surplus)||0)>=0?"text-success":"text-danger"}`,children:["৳",(((pe=n.daily)==null?void 0:pe.surplus)||0).toLocaleString("en-IN")]})]})]}),e.jsxs("div",{style:{background:"#f0fdf4",padding:"16px",borderRadius:"10px",border:"1px solid #bbf7d0"},children:[e.jsxs("div",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"12px",color:"#166534"},children:["🗓️ ",a]}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-success flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(z,{size:14})," আয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((xe=n.monthly)==null?void 0:xe.income)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-danger flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(I,{size:14})," ব্যয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((he=n.monthly)==null?void 0:he.expense)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between border-top pt-8 mt-8",children:[e.jsx("span",{style:{fontWeight:600,fontSize:"0.88rem"},children:"উদ্বৃত্ত:"}),e.jsxs("strong",{className:`font-mono ${(((ge=n.monthly)==null?void 0:ge.surplus)||0)>=0?"text-success":"text-danger"}`,children:["৳",(((me=n.monthly)==null?void 0:me.surplus)||0).toLocaleString("en-IN")]})]})]}),e.jsxs("div",{style:{background:"#f8fafc",padding:"16px",borderRadius:"10px",border:"1px solid #e2e8f0"},children:[e.jsxs("div",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"12px",color:"#334155"},children:["📆 চলতি বছর (",c.split("-")[0],")"]}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-success flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(z,{size:14})," আয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((fe=n.yearly)==null?void 0:fe.income)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between mb-6",children:[e.jsxs("span",{className:"text-danger flex-center gap-4",style:{fontSize:"0.88rem"},children:[e.jsx(I,{size:14})," ব্যয়:"]}),e.jsxs("strong",{className:"font-mono",children:["৳",(((ye=n.yearly)==null?void 0:ye.expense)||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex-between border-top pt-8 mt-8",children:[e.jsx("span",{style:{fontWeight:600,fontSize:"0.88rem"},children:"উদ্বৃত্ত:"}),e.jsxs("strong",{className:`font-mono ${(((be=n.yearly)==null?void 0:be.surplus)||0)>=0?"text-success":"text-danger"}`,children:["৳",(((ue=n.yearly)==null?void 0:ue.surplus)||0).toLocaleString("en-IN")]})]})]})]})]}),e.jsxs("div",{className:"grid grid-2 mb-24",style:{gap:"20px"},children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"flex-between border-bottom pb-10 mb-16",children:[e.jsxs("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},className:"flex-center gap-8",children:[e.jsx(L,{size:18,className:"text-primary"}),"খাতভিত্তিক ব্যয়ের বিবরণী (Category-wise Expense)"]}),e.jsxs("span",{className:"badge badge-primary font-mono",children:["মোট: ৳",m.toLocaleString("en-IN")]})]}),((je=n.categoryExpense)==null?void 0:je.length)===0?e.jsx("div",{className:"text-center text-muted",style:{padding:"30px"},children:"কোনো ব্যয়ের রেকর্ড পাওয়া যায়নি"}):e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:(Se=n.categoryExpense)==null?void 0:Se.map((t,r)=>{const o=m>0?Math.round(Number(t.amount)/m*100):0;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex-between mb-4",style:{fontSize:"0.9rem"},children:[e.jsx("span",{style:{fontWeight:600,color:"#1e293b"},children:t.category}),e.jsxs("span",{className:"font-mono",style:{fontWeight:700,color:"#0f172a"},children:["৳",Number(t.amount).toLocaleString("en-IN"),e.jsxs("span",{style:{fontSize:"0.78rem",color:"#64748b",marginLeft:"6px"},children:["(",o,"%)"]})]})]}),e.jsx("div",{style:{width:"100%",height:"8px",background:"#f1f5f9",borderRadius:"4px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${Math.min(o,100)}%`,height:"100%",background:r%3===0?"#0f766e":r%3===1?"#0284c7":"#8b5cf6",borderRadius:"4px",transition:"width 0.4s ease"}})})]},r)})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"flex-between border-bottom pb-10 mb-16",children:e.jsxs("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},className:"flex-center gap-8",children:[e.jsx(ct,{size:18,className:"text-primary"}),"শীর্ষ শিক্ষার্থী ফী প্রদানকারী (Top Student Payments)"]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px"},children:"#"}),e.jsx("th",{children:"শিক্ষার্থীর নাম"}),e.jsx("th",{style:{textAlign:"right"},children:"জমা পরিমাণ (৳)"})]})}),e.jsxs("tbody",{children:[(Ne=n.studentWise)==null?void 0:Ne.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-muted",style:{fontWeight:600},children:r+1}),e.jsx("td",{style:{fontWeight:600,color:"#1e293b"},children:t.student}),e.jsxs("td",{style:{textAlign:"right"},className:"font-mono text-success font-bold",children:["৳",t.totalPaid.toLocaleString("en-IN")]})]},r)),(!n.studentWise||n.studentWise.length===0)&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",className:"text-center text-muted",style:{padding:"24px"},children:"কোনো ডেটা নেই"})})]})]})})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"flex-between border-bottom pb-10 mb-16",children:[e.jsxs("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:0},className:"flex-center gap-8",children:[e.jsx(Mt,{size:18,className:"text-primary"}),"শিক্ষক ও কর্মচারীদের বেতন সারসংক্ষেপ (Teacher Salary Overview)"]}),e.jsxs("button",{onClick:()=>W("salary_sheet"),className:"btn btn-sm btn-outline flex-center gap-4",style:{fontSize:"0.82rem"},children:["পূর্ণাঙ্গ বেতন শিট দেখুন ",e.jsx(pt,{size:14})]})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"শিক্ষক / কর্মচারী"}),e.jsx("th",{style:{textAlign:"center"},children:"ভাউচার সংখ্যা"}),e.jsx("th",{style:{textAlign:"right"},children:"এই মাসে প্রাপ্ত বেতন"}),e.jsx("th",{style:{textAlign:"right"},children:"সর্বমোট প্রদানকৃত"})]})}),e.jsxs("tbody",{children:[(ve=n.teacherSalary)==null?void 0:ve.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:600,color:"#0f172a"},children:t.teacher}),e.jsx("td",{style:{textAlign:"center"},children:e.jsxs("span",{className:"badge badge-secondary",children:[t.voucherCount||1," টি"]})}),e.jsxs("td",{style:{textAlign:"right"},className:"font-mono font-bold text-primary",children:["৳",(t.monthPaid||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},className:"font-mono font-bold text-danger",children:["৳",(t.totalPaid||0).toLocaleString("en-IN")]})]},r)),(!n.teacherSalary||n.teacherSalary.length===0)&&e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:"text-center text-muted",style:{padding:"24px"},children:"কোনো বেতন প্রদানের রেকর্ড পাওয়া যায়নি"})})]})]})})]})]}),d==="salary_sheet"&&e.jsxs("div",{className:"animate-fade-in",children:[e.jsxs("div",{className:"card mb-16",style:{padding:"12px 18px",background:"linear-gradient(to right, #f0fdfa, #e6fffa)",border:"1px solid #99f6e4",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{background:"#0d9488",color:"#fff",padding:"6px",borderRadius:"8px"},children:e.jsx(ct,{size:18})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"#134e4a"},children:"উন্নত বেতন ব্যবস্থাপনা ও পে-রোল (Payroll)"}),e.jsx("div",{style:{fontSize:"0.78rem",color:"#0f766e"},children:"ভাতা, অনুপস্থিতি ও অগ্রিম সমন্বয়, বাল্ক পেমেন্ট এবং অফিশিয়াল পে-স্লিপ প্রিন্ট করার জন্য মূল পেজে যান"})]})]}),e.jsxs("button",{onClick:()=>k("/salary-management"),className:"btn btn-sm",style:{background:"#0d9488",color:"#fff",border:"none",display:"flex",alignItems:"center",gap:"6px",fontSize:"0.85rem",cursor:"pointer"},children:[e.jsx("span",{children:"পে-রোল সিস্টেমে যান"}),e.jsx(pt,{size:16})]})]}),e.jsxs("div",{className:"grid grid-4 mb-20",style:{gap:"14px"},children:[e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #3b82f6"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"#64748b"},children:"মোট শিক্ষক ও স্টাফ"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#1e293b",marginTop:"4px"},children:[((we=s==null?void 0:s.stats)==null?void 0:we.totalStaff)||0," ",e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:500},children:"জন"})]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #16a34a"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"#15803d"},children:"বেতন পরিশোধিত"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#14532d",marginTop:"4px"},children:[((ze=s==null?void 0:s.stats)==null?void 0:ze.paidCount)||0," ",e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:500},children:"জন"})]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #dc2626"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"#b91c1c"},children:"বেতন বকেয়া রয়েছে"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#7f1d1d",marginTop:"4px"},children:[((Ie=s==null?void 0:s.stats)==null?void 0:Ie.unpaidCount)||0," ",e.jsx("span",{style:{fontSize:"0.9rem",fontWeight:500},children:"জন"})]})]}),e.jsxs("div",{className:"card",style:{padding:"16px",borderLeft:"4px solid #0f766e"},children:[e.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"#0f766e"},children:"এই মাসে মোট পরিশোধিত"}),e.jsxs("div",{style:{fontSize:"1.6rem",fontWeight:800,color:"#115e59",marginTop:"4px",fontFamily:"monospace"},children:["৳",(((Le=s==null?void 0:s.stats)==null?void 0:Le.totalSalaryPaid)||0).toLocaleString("en-IN")]})]})]}),e.jsx("div",{className:"card mb-16",style:{padding:"14px 18px"},children:e.jsxs("div",{className:"flex-between",style:{flexWrap:"wrap",gap:"12px"},children:[e.jsx("div",{className:"flex-center gap-10",style:{flex:1,minWidth:"240px"},children:e.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"320px"},children:[e.jsx(Et,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),e.jsx("input",{type:"text",placeholder:"শিক্ষকের নাম বা পদবি দিয়ে খুঁজুন...",value:S,onChange:t=>ut(t.target.value),className:"form-control",style:{paddingLeft:"36px",height:"38px",fontSize:"0.88rem"}})]})}),e.jsxs("div",{className:"flex-center gap-6",children:[e.jsxs("button",{onClick:()=>R("all"),className:`btn btn-sm ${b==="all"?"btn-primary":"btn-outline"}`,style:{fontSize:"0.82rem"},children:["সবাই (",((ke=s==null?void 0:s.salarySheet)==null?void 0:ke.length)||0,")"]}),e.jsxs("button",{onClick:()=>R("paid"),className:`btn btn-sm ${b==="paid"?"btn-success":"btn-outline"}`,style:{fontSize:"0.82rem",color:b==="paid"?"#fff":"#15803d",borderColor:"#86efac"},children:["✓ পরিশোধিত (",((We=s==null?void 0:s.stats)==null?void 0:We.paidCount)||0,")"]}),e.jsxs("button",{onClick:()=>R("unpaid"),className:`btn btn-sm ${b==="unpaid"?"btn-danger":"btn-outline"}`,style:{fontSize:"0.82rem",color:b==="unpaid"?"#fff":"#b91c1c",borderColor:"#fca5a5"},children:["✗ বকেয়া (",((Ae=s==null?void 0:s.stats)==null?void 0:Ae.unpaidCount)||0,")"]})]})]})}),e.jsxs("div",{className:"card",style:{padding:"0px",overflow:"hidden"},children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",style:{margin:0},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f8fafc",borderBottom:"2px solid #e2e8f0"},children:[e.jsx("th",{style:{width:"45px",textAlign:"center"},children:"#"}),e.jsx("th",{children:"শিক্ষক / কর্মচারীর নাম"}),e.jsx("th",{children:"পদবি"}),e.jsx("th",{children:"মোবাইল নম্বর"}),e.jsx("th",{style:{textAlign:"right"},children:"মূল বেতন (৳)"}),e.jsx("th",{style:{textAlign:"right"},children:"পরিশোধিত বেতন (৳)"}),e.jsx("th",{style:{textAlign:"center"},children:"স্ট্যাটাস"}),e.jsx("th",{style:{textAlign:"center"},children:"ভাউচার ও তারিখ"}),e.jsx("th",{style:{textAlign:"center",width:"130px"},children:"অ্যাকশন"})]})}),e.jsxs("tbody",{children:[u.map((t,r)=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{textAlign:"center",color:"#64748b",fontWeight:600},children:r+1}),e.jsxs("td",{children:[e.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:t.name}),t.userType&&e.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:t.userType})]}),e.jsx("td",{style:{color:"#334155",fontWeight:500},children:t.designation||"—"}),e.jsx("td",{className:"font-mono",style:{fontSize:"0.85rem",color:"#475569"},children:t.phone||"—"}),e.jsx("td",{style:{textAlign:"right"},className:"font-mono",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"6px"},children:[t.baseSalary>0?e.jsxs("span",{style:{fontWeight:700,color:"#0f172a"},children:["৳",t.baseSalary.toLocaleString("en-IN")]}):e.jsx("span",{style:{color:"#94a3b8",fontSize:"0.8rem"},children:"নির্ধারণ নেই"}),e.jsx("button",{onClick:()=>Nt(t),title:"বেতন পরিবর্তন বা নির্ধারণ করুন",style:{border:"1px solid #cbd5e1",background:"#f8fafc",borderRadius:"4px",cursor:"pointer",color:"#0f766e",padding:"3px 6px",display:"inline-flex",alignItems:"center"},children:e.jsx(Vt,{size:12})})]})}),e.jsx("td",{style:{textAlign:"right"},className:"font-mono font-bold",children:t.paidAmount>0?e.jsxs("span",{style:{color:"#16a34a"},children:["৳",t.paidAmount.toLocaleString("en-IN")]}):e.jsx("span",{style:{color:"#94a3b8"},children:"৳০"})}),e.jsx("td",{style:{textAlign:"center"},children:t.status==="paid"?e.jsxs("span",{style:{background:"#dcfce7",color:"#15803d",border:"1px solid #86efac",padding:"3px 10px",borderRadius:"12px",fontSize:"0.78rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Bt,{size:12})," পেইড"]}):e.jsxs("span",{style:{background:"#fee2e2",color:"#b91c1c",border:"1px solid #fca5a5",padding:"3px 10px",borderRadius:"12px",fontSize:"0.78rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx(Xt,{size:12})," বকেয়া"]})}),e.jsx("td",{style:{textAlign:"center",fontSize:"0.82rem"},children:t.voucherNumber?e.jsxs("div",{children:[e.jsxs("span",{className:"font-mono font-bold",style:{color:"#0f766e"},children:["#",t.voucherNumber]}),t.paymentDate&&e.jsx("div",{style:{color:"#64748b",fontSize:"0.75rem"},children:_(t.paymentDate)})]}):e.jsx("span",{style:{color:"#cbd5e1"},children:"—"})}),e.jsx("td",{style:{textAlign:"center"},children:t.status==="unpaid"?e.jsxs("button",{onClick:()=>kt(t),className:"btn btn-sm btn-primary flex-center gap-4",style:{fontSize:"0.78rem",padding:"4px 10px",margin:"0 auto",background:"#0f766e",borderColor:"#0f766e"},title:"বেতন ভাউচার তৈরি করুন",children:[e.jsx(L,{size:13})," বেতন দিন"]}):e.jsxs("button",{onClick:()=>k("/expense-vouchers"),className:"btn btn-sm btn-outline flex-center gap-4",style:{fontSize:"0.78rem",padding:"4px 10px",margin:"0 auto"},children:[e.jsx(Zt,{size:13,className:"text-success"})," ভাউচার"]})})]},t._id||r)),u.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"9",className:"text-center text-muted",style:{padding:"36px"},children:"কোনো শিক্ষক বা কর্মচারীর তথ্য পাওয়া যায়নি"})})]})]})}),u.length>0&&e.jsxs("div",{style:{background:"#f8fafc",padding:"14px 20px",borderTop:"2px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("span",{style:{fontWeight:700,color:"#334155"},children:["মোট শিক্ষক/স্টাফ: ",u.length," জন"]}),e.jsxs("span",{style:{fontWeight:800,fontSize:"1.05rem",color:"#0f766e"},children:["এই মাসে মোট পরিশোধিত বেতন: ৳",((($e=s==null?void 0:s.stats)==null?void 0:$e.totalSalaryPaid)||0).toLocaleString("en-IN")]})]})]})]})]}),e.jsx("div",{className:"print-only print-sheet-container",children:e.jsxs("div",{className:"print-content-layer",children:[e.jsx(Ht,{documentTitle:d==="salary_sheet"?`মাসিক শিক্ষক ও কর্মচারী বেতন বিবরণী ও মাস্টাররোল (${a})`:`সার্বিক আর্থিক সমন্বিত বিবরণী ও অডিট রিপোর্ট (${a})`,metaLeft:e.jsxs(e.Fragment,{children:["মাস/সময়কাল: ",e.jsx("strong",{children:a})," | শাখা: ",e.jsx("strong",{children:D})]}),metaRight:e.jsxs(e.Fragment,{children:["মুদ্রণের তারিখ: ",e.jsx("strong",{children:new Date().toLocaleDateString("bn-BD",{day:"numeric",month:"long",year:"numeric"})})]})}),d==="salary_sheet"&&e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"0.9rem",fontWeight:600},children:[e.jsxs("span",{children:["মোট শিক্ষক ও কর্মচারী: ",u.length," জন"]}),e.jsxs("span",{children:["পরিশোধিত: ",((Ce=s==null?void 0:s.stats)==null?void 0:Ce.paidCount)||0," জন | বকেয়া: ",((Te=s==null?void 0:s.stats)==null?void 0:Te.unpaidCount)||0," জন"]}),e.jsxs("span",{children:["মোট পরিশোধিত বেতন: ৳",(((Re=s==null?void 0:s.stats)==null?void 0:Re.totalSalaryPaid)||0).toLocaleString("en-IN")]})]}),e.jsxs("table",{className:"print-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"32px"},children:"ক্র."}),e.jsx("th",{children:"শিক্ষক/কর্মচারীর নাম"}),e.jsx("th",{children:"পদবি"}),e.jsx("th",{children:"মোবাইল"}),e.jsx("th",{style:{textAlign:"right"},children:"মূল বেতন (৳)"}),e.jsx("th",{style:{textAlign:"right"},children:"পরিশোধিত (৳)"}),e.jsx("th",{style:{textAlign:"center"},children:"স্ট্যাটাস"}),e.jsx("th",{style:{textAlign:"center"},children:"ভাউচার ও তারিখ"}),e.jsx("th",{style:{textAlign:"center",width:"95px"},children:"স্বাক্ষর / টিপসই"})]})}),e.jsxs("tbody",{children:[u.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center"},children:r+1}),e.jsx("td",{style:{fontWeight:700},children:t.name}),e.jsx("td",{children:t.designation||"—"}),e.jsx("td",{style:{fontFamily:"monospace"},children:t.phone||"—"}),e.jsx("td",{style:{textAlign:"right",fontFamily:"monospace"},children:t.baseSalary>0?`৳${t.baseSalary.toLocaleString("en-IN")}`:"—"}),e.jsxs("td",{style:{textAlign:"right",fontFamily:"monospace",fontWeight:700},children:["৳",(t.paidAmount||0).toLocaleString("en-IN")]}),e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontSize:"9pt"},children:t.status==="paid"?"পরিশোধিত":"বকেয়া"}),e.jsx("td",{style:{textAlign:"center",fontSize:"8.5pt"},children:t.voucherNumber?`#${t.voucherNumber} (${_(t.paymentDate)})`:"—"}),e.jsx("td",{style:{height:"32px",textAlign:"center"}})]},t._id||r)),e.jsxs("tr",{style:{background:"#f8fafc",fontWeight:800},children:[e.jsx("td",{colSpan:"5",style:{textAlign:"right"},children:"সর্বমোট পরিশোধিত বেতন:"}),e.jsxs("td",{style:{textAlign:"right",fontFamily:"monospace"},children:["৳",(((Pe=s==null?void 0:s.stats)==null?void 0:Pe.totalSalaryPaid)||0).toLocaleString("en-IN")]}),e.jsx("td",{colSpan:"3"})]})]})]})]}),d==="overview"&&n&&e.jsxs("div",{children:[e.jsxs("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:"14px 0 6px 0",borderBottom:"1px solid #334155",paddingBottom:"3px"},children:["১. আয় ও ব্যয়ের সারসংক্ষেপ (",a,")"]}),e.jsxs("table",{className:"print-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"বিবরণ"}),e.jsx("th",{style:{textAlign:"right"},children:"দৈনিক (আজ)"}),e.jsxs("th",{style:{textAlign:"right"},children:["মাসিক (",a,")"]}),e.jsx("th",{style:{textAlign:"right"},children:"বার্ষিক (চলতি বছর)"}),e.jsx("th",{style:{textAlign:"right"},children:"আজীবন (Lifetime)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:700},children:"মোট আয় (Total Income)"}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Me=n.daily)==null?void 0:Me.income)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["৳",(((Ee=n.monthly)==null?void 0:Ee.income)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Be=n.yearly)==null?void 0:Be.income)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Fe=n.lifetime)==null?void 0:Fe.income)||0).toLocaleString("en-IN")]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:700},children:"মোট ব্যয় (Total Expense)"}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((_e=n.daily)==null?void 0:_e.expense)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["৳",(((De=n.monthly)==null?void 0:De.expense)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Ye=n.yearly)==null?void 0:Ye.expense)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Oe=n.lifetime)==null?void 0:Oe.expense)||0).toLocaleString("en-IN")]})]}),e.jsxs("tr",{style:{background:"#f8fafc",fontWeight:800},children:[e.jsx("td",{children:"নিট উদ্বৃত্ত / ঘাটতি (Surplus)"}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((He=n.daily)==null?void 0:He.surplus)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Ue=n.monthly)==null?void 0:Ue.surplus)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((qe=n.yearly)==null?void 0:qe.surplus)||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",(((Ge=n.lifetime)==null?void 0:Ge.surplus)||0).toLocaleString("en-IN")]})]}),e.jsxs("tr",{children:[e.jsxs("td",{colSpan:"2",style:{fontWeight:700},children:["শিক্ষার্থীদের মোট বকেয়া (Student Dues): ৳",(n.totalDues||0).toLocaleString("en-IN")]}),e.jsxs("td",{colSpan:"3",style:{fontWeight:700},children:["মোট দান ও অনুদান (Donations): ৳",(n.totalDonation||0).toLocaleString("en-IN")]})]})]})]}),e.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:"18px 0 6px 0",borderBottom:"1px solid #334155",paddingBottom:"3px"},children:"২. খাতভিত্তিক ব্যয়ের বিবরণী (Category-wise Expenses)"}),e.jsxs("table",{className:"print-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px"},children:"ক্র."}),e.jsx("th",{children:"ব্যয়ের খাত (Expense Account)"}),e.jsx("th",{style:{textAlign:"right",width:"150px"},children:"পরিমাণ (৳)"}),e.jsx("th",{style:{textAlign:"center",width:"90px"},children:"শতকরা হার (%)"})]})}),e.jsxs("tbody",{children:[(Je=n.categoryExpense)==null?void 0:Je.map((t,r)=>{const o=m>0?Math.round(Number(t.amount)/m*100):0;return e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center"},children:r+1}),e.jsx("td",{children:t.category}),e.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["৳",Number(t.amount).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"center"},children:[o,"%"]})]},r)}),(!n.categoryExpense||n.categoryExpense.length===0)&&e.jsx("tr",{children:e.jsx("td",{colSpan:"4",style:{textAlign:"center",padding:"12px"},children:"কোনো ব্যয় রেকর্ড পাওয়া যায়নি"})}),e.jsxs("tr",{style:{background:"#f8fafc",fontWeight:800},children:[e.jsx("td",{colSpan:"2",style:{textAlign:"right"},children:"মোট ব্যয়:"}),e.jsxs("td",{style:{textAlign:"right"},children:["৳",m.toLocaleString("en-IN")]}),e.jsx("td",{style:{textAlign:"center"},children:"100%"})]})]})]}),n.teacherSalary&&n.teacherSalary.length>0&&e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:700,margin:"14px 0 6px 0",borderBottom:"1px solid #334155",paddingBottom:"3px"},children:"৩. শিক্ষক ও স্টাফ বেতন সংক্ষিপ্ত হিসাব"}),e.jsxs("table",{className:"print-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"40px"},children:"ক্র."}),e.jsx("th",{children:"শিক্ষক/কর্মচারী"}),e.jsx("th",{style:{textAlign:"center",width:"90px"},children:"ভাউচার সংখ্যা"}),e.jsx("th",{style:{textAlign:"right",width:"140px"},children:"এই মাসে প্রাপ্ত বেতন (৳)"}),e.jsx("th",{style:{textAlign:"right",width:"140px"},children:"সর্বমোট প্রদানকৃত (৳)"})]})}),e.jsx("tbody",{children:n.teacherSalary.slice(0,15).map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center"},children:r+1}),e.jsx("td",{style:{fontWeight:600},children:t.teacher}),e.jsxs("td",{style:{textAlign:"center"},children:[t.voucherCount||1," টি"]}),e.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["৳",(t.monthPaid||0).toLocaleString("en-IN")]}),e.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["৳",(t.totalPaid||0).toLocaleString("en-IN")]})]},r))})]})]})]}),e.jsxs("div",{className:"print-footer-signatures-wrap",style:{marginTop:"auto",paddingTop:"24px",pageBreakInside:"avoid"},children:[e.jsx(qt,{roles:$}),e.jsxs("div",{style:{marginTop:"10px",fontSize:"9px",color:"#64748b",display:"flex",justifyContent:"space-between",borderTop:"1px solid #cbd5e1",paddingTop:"4px"},children:[e.jsxs("span",{children:["মুদ্রণের তারিখ ও সময়: ",new Date().toLocaleString("bn-BD",{timeZone:"Asia/Dhaka"})]}),e.jsx("span",{children:"আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম"})]})]})]})}),J&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:1e4,background:"#0f766e",color:"#ffffff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",display:"flex",alignItems:"center",gap:"10px",fontWeight:600,fontSize:"0.9rem"},children:[e.jsx(Kt,{size:18}),J.message]}),jt&&p&&e.jsx("div",{className:"screen-only",style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(15, 23, 42, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},children:e.jsxs("div",{className:"card animate-scale-up",style:{width:"100%",maxWidth:"440px",padding:"24px",borderRadius:"14px",boxShadow:"0 20px 40px -8px rgba(0, 0, 0, 0.25)",background:"#ffffff"},children:[e.jsxs("div",{className:"flex-between mb-16 border-bottom pb-10",children:[e.jsxs("h3",{style:{margin:0,fontSize:"1.15rem",fontWeight:800,color:"#0f172a"},className:"flex-center gap-8",children:[e.jsx(L,{size:20,className:"text-primary"}),"মাসিক মূল বেতন নির্ধারণ"]}),e.jsx("button",{type:"button",onClick:()=>v(!1),style:{border:"none",background:"transparent",cursor:"pointer",color:"#64748b"},children:e.jsx(Ft,{size:20})})]}),e.jsxs("div",{style:{background:"#f8fafc",padding:"12px 14px",borderRadius:"8px",marginBottom:"16px",border:"1px solid #e2e8f0"},children:[e.jsx("div",{style:{fontWeight:700,color:"#0f172a",fontSize:"1rem"},children:p.name}),e.jsxs("div",{style:{color:"#64748b",fontSize:"0.85rem"},children:["পদবি: ",p.designation||"শিক্ষক/স্টাফ"," • মোবাইল: ",p.phone||"—"]})]}),e.jsxs("form",{onSubmit:vt,children:[e.jsxs("div",{className:"form-group mb-16",children:[e.jsx("label",{className:"form-label",style:{fontWeight:700,color:"#0f766e",fontSize:"0.9rem"},children:"নির্ধারিত মাসিক মূল বেতন (৳) *"}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("span",{style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",fontWeight:700,color:"#64748b"},children:"৳"}),e.jsx("input",{type:"number",required:!0,min:"0",step:"100",placeholder:"যেমন: ১৫০০০",value:P,onChange:t=>M(t.target.value),className:"form-control font-mono",style:{paddingLeft:"32px",fontSize:"1.1rem",fontWeight:700},autoFocus:!0})]})]}),e.jsxs("div",{className:"mb-20",children:[e.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b",marginBottom:"6px"},children:"কুইক প্রিসেট:"}),e.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[5e3,8e3,1e4,12e3,15e3,2e4,25e3].map(t=>e.jsxs("button",{type:"button",onClick:()=>M(String(t)),className:"btn btn-sm btn-outline font-mono",style:{padding:"3px 8px",fontSize:"0.78rem"},children:["৳",t.toLocaleString("en-IN")]},t))})]}),e.jsxs("div",{className:"flex-between gap-10",children:[e.jsx("button",{type:"button",onClick:()=>v(!1),className:"btn btn-outline",style:{flex:1},disabled:E,children:"বাতিল"}),e.jsxs("button",{type:"submit",className:"btn btn-primary flex-center gap-6",style:{flex:1,background:"#0f766e",borderColor:"#0f766e"},disabled:E,children:[E?e.jsx(ht,{size:16,className:"spin"}):e.jsx(Qt,{size:16}),"সংরক্ষণ করুন"]})]})]})]})})]})}export{Sn as default};
