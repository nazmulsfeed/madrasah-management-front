import{k as Re,a as We,r as d,j as e,U as ee,R as te,i as Te,I as $e,X as Ee,l as De,d as xe}from"./index-BzQhDNJA.js";import{g as _e}from"./helpers-CljGnr5z.js";import{S as Oe}from"./constants-C6HvYUtm.js";import{g as Me,a as He}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as Fe}from"./PrintSignatureRoleSelector-Bgz--adW.js";import{C as Ue}from"./circle-alert---5N7Giz.js";import{C as me}from"./circle-check-o_Z5MwTO.js";import{P as ne}from"./printer-Dfb8kMJR.js";import{S as qe}from"./save-B8iLNHo2.js";import{C as Ge}from"./circle-x-CbuvNJ1g.js";import{S as Qe}from"./sparkles-Ck_Q7o5p.js";import{U as Ye}from"./user-x-CxwWTX6w.js";import{R as Je}from"./rotate-ccw-Nn5uI1_j.js";import{M as Xe}from"./maximize-2-CKeZOcIp.js";import{S as Ve}from"./sliders-vertical-BMbTVpxP.js";import"./plus-BkJXNh3M.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=Re("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),k=u=>{if(u==null)return null;const S=String(u).trim();if(!S)return null;const I={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},T=S.replace(/[০-৯]/g,z=>I[z]),f=parseFloat(T.replace(/[^0-9.-]/g,""));return isNaN(f)?null:f};function C(u){if(!u)return 999999;const S={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},I=String(u).trim().toUpperCase().replace(/[০-৯]/g,$=>S[$]),f=I.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(f)return parseInt(f[1],10);const z=I.replace(/\D/g,"");return z?parseInt(z,10):999999}const Ze=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],he=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"];function yt(){const{user:u}=We(),{madrasahName:S,branchName:I}=_e(u),T=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[f,z]=d.useState(T()),[$,ge]=d.useState([]),[se,ue]=d.useState([]),[w,fe]=d.useState("all"),[A,be]=d.useState("all"),[q,ye]=d.useState(""),[L,we]=d.useState("all"),[y,ae]=d.useState("roll"),[P,G]=d.useState("asc"),B=t=>{y===t?G(n=>n==="asc"?"desc":"asc"):(ae(t),G("asc"))},R=({col:t})=>y!==t?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:P==="asc"?"▲":"▼"}),[v,E]=d.useState([]),[ve,re]=d.useState(!0),[ie,oe]=d.useState(!1),[D,le]=d.useState(null),[je,W]=d.useState(!1),[x,de]=d.useState("landscape"),[N,ke]=d.useState("id_custom"),[Q,Y]=d.useState(he),ce=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[_,Se]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__assembly_attendance");if(t){const n=JSON.parse(t);if(Array.isArray(n))return n}return ce}catch{return ce}}),[Ne,et]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_custom_roles");return t?JSON.parse(t):[]}catch{return[]}}),[tt,nt]=d.useState(""),J=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(u==null?void 0:u.userType)||["co_super_admin","admin"].includes(u==null?void 0:u.adminRole),O=(t,n="success")=>{le({message:t,type:n}),setTimeout(()=>le(null),4e3)};d.useEffect(()=>{(async()=>{try{const{fetchClasses:n,fetchSections:i}=De.getState(),[o,r]=await Promise.all([n(),i()]);o&&ge(o),r&&ue(r)}catch(n){console.error("Error fetching classes/sections:",n)}})()},[]);const Ce=d.useMemo(()=>{const t=[{value:"all",label:"সকল সেকশন"}];return Oe.forEach(n=>{t.push({value:n,label:`শাখা/সেকশন ${n}`})}),se.forEach(n=>{const i=(n.name||"").trim();i&&!t.some(o=>o.value===n._id||o.value===i)&&t.push({value:n._id,label:i})}),t},[se]),X=async()=>{var t,n,i;try{re(!0);const o={date:f};w!=="all"&&(o.classLevel=w),A!=="all"&&(o.section=A);const r=await xe.get("/attendance/assembly",{params:o});(t=r.data)!=null&&t.success&&E(r.data.data.records||[])}catch(o){O(((i=(n=o.response)==null?void 0:n.data)==null?void 0:i.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{re(!1)}};d.useEffect(()=>{X()},[f,w,A]);const M=d.useMemo(()=>{const t=v.length;let n=0,i=0,o=0;v.forEach(a=>{a.status==="present"?n++:a.status==="absent"?i++:o++});const r=t>0?Math.round(n/t*100):0;return{total:t,present:n,absent:i,resetCount:o,presentRate:r}},[v]),pe=d.useMemo(()=>{let t=[...v];L!=="all"&&(L==="reset"?t=t.filter(r=>!r.status||r.status==="reset"):t=t.filter(r=>r.status===L));const n=q.trim(),i=k(n),o=i!==null&&/^[0-9০-৯\s]+$/.test(n);if(n){const r=n.toLowerCase(),a={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},l={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},m=r.replace(/[০-৯]/g,c=>a[c]),s=r.replace(/[0-9]/g,c=>l[c]),g=[...new Set([r,m,s])];t=t.filter(c=>{const p=String(c.rollNumber||"").trim(),b=k(c.rollNumber),H=C(c.studentCode),j=(c.studentCode||"").toLowerCase();if(o)return!!(b!==null&&b===i||H!==null&&H===i||p.startsWith(m)||p.startsWith(s)||j===m||j===s||j===r);const Z=(c.studentName||"").toLowerCase(),F=(c.fatherName||"").toLowerCase(),U=p.replace(/[০-৯]/g,h=>a[h]),Le=p.replace(/[0-9]/g,h=>l[h]),Pe=j.replace(/[০-৯]/g,h=>a[h]),Be=j.replace(/[0-9]/g,h=>l[h]);return g.some(h=>Z.includes(h)||F.includes(h)||p.includes(h)||U.includes(h)||Le.includes(h)||j.includes(h)||Pe.includes(h)||Be.includes(h))})}return(y||n)&&t.sort((r,a)=>{if(n&&o){const m=k(r.rollNumber),s=k(a.rollNumber),g=C(r.studentCode),c=C(a.studentCode);let p=99,b=99;if(m===i?p=0:g===i?p=1:p=2,s===i?b=0:c===i?b=1:b=2,p!==b)return p-b}let l=0;if(y==="roll"){const m=k(r.rollNumber),s=k(a.rollNumber);m!==null&&s!==null?l=m-s:m!==null?l=-1:s!==null?l=1:l=String(r.rollNumber||"").localeCompare(String(a.rollNumber||""),"bn")}else if(y==="studentId"){const m=C(r.studentCode),s=C(a.studentCode);m!==s?l=m-s:l=String(r.studentCode||"").localeCompare(String(a.studentCode||""))}else if(y==="name")l=(r.studentName||"").localeCompare(a.studentName||"","bn",{sensitivity:"base"});else if(y==="fatherName")l=(r.fatherName||"").localeCompare(a.fatherName||"","bn",{sensitivity:"base"});else if(y==="status"){const m={present:1,absent:2,reset:3,"":3},s=m[r.status]||3,g=m[a.status]||3;l=s-g}return P==="asc"?l:-l}),t},[v,L,q,y,P]),V=(t,n)=>{E(i=>i.map(o=>o.studentId===t?{...o,status:n}:o))},K=t=>{E(i=>i.map(o=>({...o,status:t}))),O(`সকল শিক্ষার্থীকে "${t==="present"?"উপস্থিত":t==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Ie=(t,n,i)=>{E(o=>o.map(r=>r.studentId===t?{...r,[n]:i}:r))},ze=async()=>{var t,n,i;if(J)try{oe(!0);const o={date:f,classLevel:w!=="all"?w:"",section:A!=="all"?A:"",attendances:v.map(a=>({studentId:a.studentId,classLevelId:a.classLevelId,sectionId:a.sectionId,branch:a.branch,status:a.status,inTime:a.inTime,remarks:a.remarks}))},r=await xe.post("/attendance/assembly",o);(t=r.data)!=null&&t.success&&(O(r.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),X())}catch(o){O(((i=(n=o.response)==null?void 0:n.data)==null?void 0:i.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{oe(!1)}},Ae=()=>{const t=window.open("","_blank");if(!t){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let n=[...v];N==="id_custom"?n.sort((s,g)=>{const c=C(s.studentCode),p=C(g.studentCode);return c!==p?c-p:(s.studentCode||"").localeCompare(g.studentCode||"")}):N==="roll"?n.sort((s,g)=>{const c=k(s.rollNumber),p=k(g.rollNumber);return c!==null&&p!==null?c-p:c!==null?-1:p!==null?1:String(s.rollNumber||"").localeCompare(String(g.rollNumber||""),"bn")}):N==="name"&&n.sort((s,g)=>(s.studentName||"").localeCompare(g.studentName||"","bn"));const i=new Date(f).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),o=$.find(s=>s._id===w),r=w==="all"?"সকল শ্রেণি":(o==null?void 0:o.name)||w;let a="";Q.forEach(s=>{switch(s){case"serial":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":a+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"status":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":a+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":a+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let l="";n.forEach((s,g)=>{const c=s.status==="present",p=s.status==="absent",b=c?"#15803d":p?"#b91c1c":"#64748b",H=c?"#dcfce7":p?"#fee2e2":"#f1f5f9",j=c?"উপস্থিত":p?"অনুপস্থিত":"—";l+='<tr style="height: 33px;">',Q.forEach(Z=>{switch(Z){case"serial":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${g+1}</td>`;break;case"roll":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.rollNumber||"—"}</td>`;break;case"id":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.studentCode||"—"}</td>`;break;case"photo":{const F=s.photo&&String(s.photo).trim()!==""?String(s.photo).trim():null,U='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';F?l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${F}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${U}
                    </div>
                  </div>
                </td>
              `:l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${U}
                  </div>
                </td>
              `;break}case"name":l+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${s.studentName}</td>`;break;case"fatherName":l+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${s.fatherName||"—"}</td>`;break;case"phone":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${s.guardianPhone||s.phone||"—"}</td>`;break;case"classSection":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.className||"—"}${s.sectionName&&s.sectionName!=="—"?` (${s.sectionName})`:""}</td>`;break;case"status":l+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${b}; background: ${H}; border: 1px solid ${b};">
                  ${j}
                </span>
              </td>
            `;break;case"signBox":l+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":l+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${s.remarks||""}</td>`;break}}),l+="</tr>"});const m=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${S}</title>
      ${Me(x)}
      <style id="dynamic-page-orientation">
        @page {
          size: A4 ${x};
          margin: ${x==="landscape"?"6mm 8mm":"8mm 10mm"} !important;
        }
      </style>
      <style>
        * { box-sizing: border-box; }
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          color: #0f172a;
          font-family: 'Noto Sans Bengali', sans-serif;
        }
        #raw-content {
          position: absolute;
          visibility: hidden;
          left: -9999px;
          top: -9999px;
          width: ${x==="landscape"?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: 100%;
          height: calc(${x==="landscape"?"210mm":"297mm"} - ${x==="landscape"?"12mm":"16mm"});
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
          width: ${x==="landscape"?"360px":"420px"};
          height: ${x==="landscape"?"360px":"420px"};
          max-width: 80%;
          max-height: 80%;
          pointer-events: none;
          user-select: none;
          z-index: 0;
          opacity: 0.085;
          object-fit: contain;
        }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 11px; }
        th { background: #0f766e; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 6px; text-align: center; }
        td { border-bottom: 1px solid #cbd5e1; font-size: 11px; }
        .header-double-divider { display: none !important; margin: 0 !important; padding: 0 !important; }
        @media print {
          .no-print { display: none !important; }
          body { padding: 0 !important; margin: 0 !important; }
        }
      </style>
    </head>
    <body>
      <!-- Sticky No-Print Control Bar -->
      <div class="no-print" style="position: sticky; top: 0; z-index: 9999; background: #0f172a; color: #fff; padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        <div style="font-weight: 700; font-size: 12.5px; display: flex; align-items: center; gap: 8px;">
          <span>📋 সমাবেশ রিপোর্ট প্রিন্ট প্রিভিউ</span>
          <span style="font-size: 11px; opacity: 0.75;">(পৃষ্ঠা বিন্যাস পরিবর্তন করতে নিচের বাটনে চাপুন)</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="btn-land" onclick="setOrientation('landscape')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${x==="landscape"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📑 ল্যান্ডস্কেপ</button>
          <button id="btn-port" onclick="setOrientation('portrait')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${x==="portrait"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📄 পোর্ট্রেট</button>
          <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
          <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #64748b; color: #fff; cursor: pointer; font-size: 11.5px;">✕ বন্ধ</button>
        </div>
      </div>

      <!-- Container where partitioned pages will be placed -->
      <div id="pages-container"></div>

      <!-- Hidden source content used for accurate DOM measurement -->
      <div id="raw-content">
        <div class="header-wrap">
          ${He({orientation:x,showWatermark:!1})}

          <!-- Single aligned line: Left: তারিখ, Center: দৈনিক সমাবেশ..., Right: শ্রেণি -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 6px; border-bottom: 2px solid #0f172a; margin-top: 2px; margin-bottom: 6px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: left;">
              <strong>তারিখ:</strong> ${i}
            </div>
            <div style="text-align: center; flex: 1;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 800; color: #0f172a; padding: 3px 14px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px;">
                📋 দৈনিক সমাবেশ ও শৃঙ্খলা উপস্থিতি বিবরণী
              </span>
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: right;">
              <strong>শ্রেণি:</strong> ${r}
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr style="background: #0f766e; color: #fff;">
              ${a}
            </tr>
          </thead>
          <tbody>
            ${l}
          </tbody>
        </table>

        <!-- Footer Signatures (Guaranteed distinct, centered signature lines docked to bottom of last page) -->
        <div class="footer-wrap" style="width: 100%; padding-top: 16px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: ${_.length===1?"flex-end":"space-between"}; align-items: flex-end; gap: 16px; width: 100%;">
            ${_.map(s=>`
              <div style="${_.length===1?"flex: 0 0 calc((100% - 32px) / 3);":"flex: 1;"} text-align: center; min-width: 0; padding: 0 10px;">
                <div style="border-top: 1.5px solid #0f172a; width: 175px; max-width: 90%; margin: 0 auto; padding-top: 5px; font-weight: 700; font-size: 11.5px; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${s}
                </div>
                <div style="font-size: 11px; color: #64748b; font-weight: 500; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${S}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <script>
        let currentOrientation = '${x}';

        function paginateAndPrint(targetOrientation) {
          try {
            if (targetOrientation) {
              currentOrientation = targetOrientation;
            }
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

            const isLandscape = (currentOrientation === 'landscape');
            rawWrap.style.width = isLandscape ? '281mm' : '194mm';

            const pageTotalMm = isLandscape ? 210 : 297;
            const marginTotalMm = isLandscape ? 12 : 16;
            const pageUsablePx = (pageTotalMm - marginTotalMm) * pxPerMm;

            const headerHeight = rawHeader ? rawHeader.getBoundingClientRect().height : 0;
            const theadHeight = rawThead ? rawThead.getBoundingClientRect().height : 35;
            const footerHeight = rawFooter ? rawFooter.getBoundingClientRect().height : 0;

            const rowHeights = rawRows.map(r => r.getBoundingClientRect().height || 33);

            // Partition rows into pages
            const pageRowIndices = [];
            let currentPageIndices = [];
            let currentHeight = headerHeight + theadHeight;

            for (let i = 0; i < rawRows.length; i++) {
              const h = rowHeights[i];
              const isLast = (i === rawRows.length - 1);
              const neededFooter = (isLast && rawFooter) ? (footerHeight + 20) : 0;

              // Check if row fits on current page (with 15px safe buffer)
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
              pageDiv.style.height = 'calc(' + (isLandscape ? '210mm' : '297mm') + ' - ' + (isLandscape ? '12mm' : '16mm') + ')';

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

              // On the final page, signatures are docked strictly to the bottom margin
              if (isLast && rawFooter) {
                const bottomDiv = document.createElement('div');
                bottomDiv.className = 'page-bottom';
                bottomDiv.appendChild(rawFooter.cloneNode(true));
                pageDiv.appendChild(bottomDiv);
              }

              container.appendChild(pageDiv);
            });

            rawWrap.style.display = 'none';
          } catch (err) {
            console.error('Pagination error:', err);
            const rawWrap = document.getElementById('raw-content');
            if (rawWrap) {
              rawWrap.style.position = 'static';
              rawWrap.style.visibility = 'visible';
            }
          }
        }

        function setOrientation(mode) {
          currentOrientation = mode;
          var styleTag = document.getElementById('dynamic-page-orientation');
          var btnPort = document.getElementById('btn-port');
          var btnLand = document.getElementById('btn-land');
          if (mode === 'landscape') {
            styleTag.innerHTML = '@page { size: A4 landscape; margin: 6mm 8mm !important; }';
            if (btnLand) btnLand.style.background = '#0f766e';
            if (btnPort) btnPort.style.background = '#334155';
          } else {
            styleTag.innerHTML = '@page { size: A4 portrait; margin: 8mm 10mm !important; }';
            if (btnPort) btnPort.style.background = '#0f766e';
            if (btnLand) btnLand.style.background = '#334155';
          }
          const rawWrap = document.getElementById('raw-content');
          if (rawWrap) rawWrap.style.display = 'block';
          paginateAndPrint(mode);
        }

        window.addEventListener('DOMContentLoaded', () => {
          if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
              paginateAndPrint(currentOrientation);
              setTimeout(() => { window.print(); }, 250);
            });
          } else {
            paginateAndPrint(currentOrientation);
            setTimeout(() => { window.print(); }, 400);
          }
        });
      <\/script>
    </body>
    </html>`;t.document.open(),t.document.write(m),t.document.close(),W(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[D&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:D.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[D.type==="error"?e.jsx(Ue,{size:18}):e.jsx(me,{size:18}),D.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(ee,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",I," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:X,title:"রিফ্রেশ",children:e.jsx(te,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>W(!0),disabled:v.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(ne,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),J&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:ze,disabled:ie||v.length===0,children:[ie?e.jsx(te,{size:15,className:"spin"}):e.jsx(qe,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:M.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:ee},{label:"সমাবেশে উপস্থিত",value:M.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:me},{label:"অনুপস্থিত",value:M.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:Ge},{label:"উপস্থিতির হার",value:`${M.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:Qe}].map(({label:t,value:n,unit:i,color:o,bg:r,Icon:a})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:t}),e.jsxs("div",{className:"assembly-stat-value",style:{color:o},children:[n,i&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:i})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:r},children:e.jsx(a,{size:18,color:o})})]})},t))}),e.jsx("div",{className:"card assembly-filter-card",children:e.jsxs("div",{className:"assembly-filter-container",children:[e.jsx("div",{className:"assembly-filter-item-date",children:e.jsx("input",{type:"date",value:f,onChange:t=>z(t.target.value),className:"form-input"})}),e.jsx("div",{className:"assembly-filter-item-class",children:e.jsxs("select",{value:w,onChange:t=>fe(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),$.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{className:"assembly-filter-item-section",children:e.jsx("select",{value:A,onChange:t=>be(t.target.value),className:"form-input",children:Ce.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{className:"assembly-filter-item-status",children:e.jsxs("select",{value:L,onChange:t=>we(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{className:"assembly-filter-item-search",children:[e.jsx(Te,{size:14,className:"assembly-search-icon"}),e.jsx("input",{type:"text",placeholder:"নাম, পিতা বা রোল...",value:q,onChange:t=>ye(t.target.value),className:"form-input"})]}),e.jsxs("div",{className:"assembly-filter-item-sort",children:[e.jsxs("select",{value:y,onChange:t=>ae(t.target.value),className:"form-input assembly-sort-select",title:"সর্ট কলাম নির্বাচন করুন",children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm assembly-sort-btn",onClick:()=>G(t=>t==="asc"?"desc":"asc"),title:P==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",children:e.jsx("span",{style:{fontWeight:700},children:P==="asc"?"▲ আরোহী":"▼ অবরোহী"})})]}),J&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>K("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx($e,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>K("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(Ye,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>K(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(Je,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),ve?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(te,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>B("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(R,{col:"roll"})]})}),e.jsx("th",{onClick:()=>B("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(R,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>B("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(R,{col:"name"})]})}),e.jsx("th",{onClick:()=>B("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(R,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"130px",minWidth:"120px",textAlign:"center"},children:"শ্রেণি ও সেকশন"}),e.jsx("th",{onClick:()=>B("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(R,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:pe.length>0?pe.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:t.rollNumber?t.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:t.studentCode||"—"}),e.jsx("td",{children:e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:t.studentName})}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:t.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[t.className,t.sectionName&&t.sectionName!=="—"&&e.jsxs("span",{className:"text-muted",style:{fontSize:"0.78rem",marginLeft:"4px"},children:["(",t.sectionName,")"]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>V(t.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:t.status==="present"?"var(--success)":"transparent",color:t.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>V(t.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:t.status==="absent"?"var(--danger)":"transparent",color:t.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>V(t.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!t.status||t.status==="reset"?"var(--bg-tertiary)":"transparent",color:!t.status||t.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:t.remarks||"",onChange:n=>Ie(t.studentId,"remarks",n.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},t.studentId)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(ee,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),je&&e.jsx("div",{onClick:t=>{t.target===t.currentTarget&&W(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ne,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>W(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(Ee,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Xe,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>de("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="landscape"?700:500,background:x==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>de("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="portrait"?700:500,background:x==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ke,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"}].map(t=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:N===t.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:N===t.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:N===t.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:N===t.id,onChange:()=>ke(t.id)}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ve,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>Y(he),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:Ze.map(t=>{const n=Q.indexOf(t.key),i=n!==-1,o=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],r=a=>String(a).replace(/\d/g,l=>o[l]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:i?"rgba(16,185,129,0.08)":"transparent",border:i?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:i,onChange:a=>{a.target.checked?Y(l=>[...l,t.key]):Y(l=>l.filter(m=>m!==t.key))}}),e.jsx("span",{children:t.label})]}),i&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${n+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",r(n+1)]})]},t.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(Fe,{selectedRoles:_,onChange:t=>{Se(t);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(t))}catch{}},additionalRoles:Ne,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>W(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:Ae,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(ne,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{yt as default};
