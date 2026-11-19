import{k as Le,a as Be,r as p,j as e,U as ee,R as te,i as Re,I as We,X as Te,d as xe}from"./index-C_3lkKiO.js";import{u as $e,a as De}from"./useMetadataQueries-BQ3hkEq2.js";import{g as Ee}from"./helpers-CljGnr5z.js";import{S as _e}from"./constants-C6HvYUtm.js";import{g as Oe,a as Me}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as He}from"./PrintSignatureRoleSelector-C77YqIVa.js";import{C as Fe}from"./circle-alert-Ctlt3myq.js";import{C as me}from"./circle-check-nOKpRR-I.js";import{P as ne}from"./printer-BTsbVdtY.js";import{S as Ue}from"./save-B78yr-0Z.js";import{C as qe}from"./circle-x-CkgqtVuO.js";import{S as Ge}from"./sparkles-DDWWrZF1.js";import{U as Qe}from"./user-x-CMNxts-U.js";import{R as Ye}from"./rotate-ccw-vMrk8w99.js";import{M as Je}from"./maximize-2-BGysSzLi.js";import{S as Xe}from"./sliders-vertical-CT29t2wB.js";import"./plus-DeMAYp8v.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=Le("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),k=u=>{if(u==null)return null;const S=String(u).trim();if(!S)return null;const I={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},T=S.replace(/[০-৯]/g,z=>I[z]),b=parseFloat(T.replace(/[^0-9.-]/g,""));return isNaN(b)?null:b};function C(u){if(!u)return 999999;const S={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},I=String(u).trim().toUpperCase().replace(/[০-৯]/g,$=>S[$]),b=I.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(b)return parseInt(b[1],10);const z=I.replace(/\D/g,"");return z?parseInt(z,10):999999}const Ke=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],he=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"];function yt(){const{user:u}=Be(),{madrasahName:S,branchName:I}=Ee(u),T=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[b,z]=p.useState(T()),{data:$=[]}=$e(),{data:se=[]}=De(),[w,ge]=p.useState("all"),[A,ue]=p.useState("all"),[q,be]=p.useState(""),[P,fe]=p.useState("all"),[y,ae]=p.useState("roll"),[L,G]=p.useState("asc"),B=t=>{y===t?G(n=>n==="asc"?"desc":"asc"):(ae(t),G("asc"))},R=({col:t})=>y!==t?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:L==="asc"?"▲":"▼"}),[v,D]=p.useState([]),[ye,re]=p.useState(!0),[ie,oe]=p.useState(!1),[E,le]=p.useState(null),[we,W]=p.useState(!1),[x,de]=p.useState("landscape"),[N,ve]=p.useState("id_custom"),[Q,Y]=p.useState(he),ce=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[_,je]=p.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__assembly_attendance");if(t){const n=JSON.parse(t);if(Array.isArray(n))return n}return ce}catch{return ce}}),[ke,Ze]=p.useState(()=>{try{const t=localStorage.getItem("annur_footer_custom_roles");return t?JSON.parse(t):[]}catch{return[]}}),[et,tt]=p.useState(""),J=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(u==null?void 0:u.userType)||["co_super_admin","admin"].includes(u==null?void 0:u.adminRole),O=(t,n="success")=>{le({message:t,type:n}),setTimeout(()=>le(null),4e3)},Se=p.useMemo(()=>{const t=[{value:"all",label:"সকল সেকশন"}];return _e.forEach(n=>{t.push({value:n,label:`শাখা/সেকশন ${n}`})}),se.forEach(n=>{const o=(n.name||"").trim();o&&!t.some(l=>l.value===n._id||l.value===o)&&t.push({value:n._id,label:o})}),t},[se]),X=async()=>{var t,n,o;try{re(!0);const l={date:b};w!=="all"&&(l.classLevel=w),A!=="all"&&(l.section=A);const r=await xe.get("/attendance/assembly",{params:l});(t=r.data)!=null&&t.success&&D(r.data.data.records||[])}catch(l){O(((o=(n=l.response)==null?void 0:n.data)==null?void 0:o.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{re(!1)}};p.useEffect(()=>{X()},[b,w,A]);const M=p.useMemo(()=>{const t=v.length;let n=0,o=0,l=0;v.forEach(a=>{a.status==="present"?n++:a.status==="absent"?o++:l++});const r=t>0?Math.round(n/t*100):0;return{total:t,present:n,absent:o,resetCount:l,presentRate:r}},[v]),pe=p.useMemo(()=>{let t=[...v];P!=="all"&&(P==="reset"?t=t.filter(r=>!r.status||r.status==="reset"):t=t.filter(r=>r.status===P));const n=q.trim(),o=k(n),l=o!==null&&/^[0-9০-৯\s]+$/.test(n);if(n){const r=n.toLowerCase(),a={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},i={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},m=r.replace(/[০-৯]/g,d=>a[d]),s=r.replace(/[0-9]/g,d=>i[d]),g=[...new Set([r,m,s])];t=t.filter(d=>{const c=String(d.rollNumber||"").trim(),f=k(d.rollNumber),H=C(d.studentCode),j=(d.studentCode||"").toLowerCase();if(l)return!!(f!==null&&f===o||H!==null&&H===o||c.startsWith(m)||c.startsWith(s)||j===m||j===s||j===r);const Z=(d.studentName||"").toLowerCase(),F=(d.fatherName||"").toLowerCase(),U=c.replace(/[০-৯]/g,h=>a[h]),ze=c.replace(/[0-9]/g,h=>i[h]),Ae=j.replace(/[০-৯]/g,h=>a[h]),Pe=j.replace(/[0-9]/g,h=>i[h]);return g.some(h=>Z.includes(h)||F.includes(h)||c.includes(h)||U.includes(h)||ze.includes(h)||j.includes(h)||Ae.includes(h)||Pe.includes(h))})}return(y||n)&&t.sort((r,a)=>{if(n&&l){const m=k(r.rollNumber),s=k(a.rollNumber),g=C(r.studentCode),d=C(a.studentCode);let c=99,f=99;if(m===o?c=0:g===o?c=1:c=2,s===o?f=0:d===o?f=1:f=2,c!==f)return c-f}let i=0;if(y==="roll"){const m=k(r.rollNumber),s=k(a.rollNumber);m!==null&&s!==null?i=m-s:m!==null?i=-1:s!==null?i=1:i=String(r.rollNumber||"").localeCompare(String(a.rollNumber||""),"bn")}else if(y==="studentId"){const m=C(r.studentCode),s=C(a.studentCode);m!==s?i=m-s:i=String(r.studentCode||"").localeCompare(String(a.studentCode||""))}else if(y==="name")i=(r.studentName||"").localeCompare(a.studentName||"","bn",{sensitivity:"base"});else if(y==="fatherName")i=(r.fatherName||"").localeCompare(a.fatherName||"","bn",{sensitivity:"base"});else if(y==="status"){const m={present:1,absent:2,reset:3,"":3},s=m[r.status]||3,g=m[a.status]||3;i=s-g}return L==="asc"?i:-i}),t},[v,P,q,y,L]),V=(t,n)=>{D(o=>o.map(l=>l.studentId===t?{...l,status:n}:l))},K=t=>{D(o=>o.map(l=>({...l,status:t}))),O(`সকল শিক্ষার্থীকে "${t==="present"?"উপস্থিত":t==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Ne=(t,n,o)=>{D(l=>l.map(r=>r.studentId===t?{...r,[n]:o}:r))},Ce=async()=>{var t,n,o;if(J)try{oe(!0);const l={date:b,classLevel:w!=="all"?w:"",section:A!=="all"?A:"",attendances:v.map(a=>({studentId:a.studentId,classLevelId:a.classLevelId,sectionId:a.sectionId,branch:a.branch,status:a.status,inTime:a.inTime,remarks:a.remarks}))},r=await xe.post("/attendance/assembly",l);(t=r.data)!=null&&t.success&&(O(r.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),X())}catch(l){O(((o=(n=l.response)==null?void 0:n.data)==null?void 0:o.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{oe(!1)}},Ie=()=>{const t=window.open("","_blank");if(!t){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let n=[...v];N==="id_custom"?n.sort((s,g)=>{const d=C(s.studentCode),c=C(g.studentCode);return d!==c?d-c:(s.studentCode||"").localeCompare(g.studentCode||"")}):N==="roll"?n.sort((s,g)=>{const d=k(s.rollNumber),c=k(g.rollNumber);return d!==null&&c!==null?d-c:d!==null?-1:c!==null?1:String(s.rollNumber||"").localeCompare(String(g.rollNumber||""),"bn")}):N==="name"&&n.sort((s,g)=>(s.studentName||"").localeCompare(g.studentName||"","bn"));const o=new Date(b).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),l=$.find(s=>s._id===w),r=w==="all"?"সকল শ্রেণি":(l==null?void 0:l.name)||w;let a="";Q.forEach(s=>{switch(s){case"serial":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":a+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"status":a+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":a+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":a+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let i="";n.forEach((s,g)=>{const d=s.status==="present",c=s.status==="absent",f=d?"#15803d":c?"#b91c1c":"#64748b",H=d?"#dcfce7":c?"#fee2e2":"#f1f5f9",j=d?"উপস্থিত":c?"অনুপস্থিত":"—";i+='<tr style="height: 33px;">',Q.forEach(Z=>{switch(Z){case"serial":i+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${g+1}</td>`;break;case"roll":i+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.rollNumber||"—"}</td>`;break;case"id":i+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.studentCode||"—"}</td>`;break;case"photo":{const F=s.photo&&String(s.photo).trim()!==""?String(s.photo).trim():null,U='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';F?i+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${F}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${U}
                    </div>
                  </div>
                </td>
              `:i+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${U}
                  </div>
                </td>
              `;break}case"name":i+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${s.studentName}</td>`;break;case"fatherName":i+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${s.fatherName||"—"}</td>`;break;case"phone":i+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${s.guardianPhone||s.phone||"—"}</td>`;break;case"classSection":i+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${s.className||"—"}${s.sectionName&&s.sectionName!=="—"?` (${s.sectionName})`:""}</td>`;break;case"status":i+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${f}; background: ${H}; border: 1px solid ${f};">
                  ${j}
                </span>
              </td>
            `;break;case"signBox":i+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":i+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${s.remarks||""}</td>`;break}}),i+="</tr>"});const m=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${S}</title>
      ${Oe(x)}
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
          ${Me({orientation:x,showWatermark:!1})}

          <!-- Single aligned line: Left: তারিখ, Center: দৈনিক সমাবেশ..., Right: শ্রেণি -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 6px; border-bottom: 2px solid #0f172a; margin-top: 2px; margin-bottom: 6px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: left;">
              <strong>তারিখ:</strong> ${o}
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
            ${i}
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
    </html>`;t.document.open(),t.document.write(m),t.document.close(),W(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[E&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:E.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[E.type==="error"?e.jsx(Fe,{size:18}):e.jsx(me,{size:18}),E.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(ee,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",I," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:X,title:"রিফ্রেশ",children:e.jsx(te,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>W(!0),disabled:v.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(ne,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),J&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:Ce,disabled:ie||v.length===0,children:[ie?e.jsx(te,{size:15,className:"spin"}):e.jsx(Ue,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:M.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:ee},{label:"সমাবেশে উপস্থিত",value:M.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:me},{label:"অনুপস্থিত",value:M.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:qe},{label:"উপস্থিতির হার",value:`${M.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:Ge}].map(({label:t,value:n,unit:o,color:l,bg:r,Icon:a})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:t}),e.jsxs("div",{className:"assembly-stat-value",style:{color:l},children:[n,o&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:o})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:r},children:e.jsx(a,{size:18,color:l})})]})},t))}),e.jsx("div",{className:"card assembly-filter-card",children:e.jsxs("div",{className:"assembly-filter-container",children:[e.jsx("div",{className:"assembly-filter-item-date",children:e.jsx("input",{type:"date",value:b,onChange:t=>z(t.target.value),className:"form-input"})}),e.jsx("div",{className:"assembly-filter-item-class",children:e.jsxs("select",{value:w,onChange:t=>ge(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),$.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{className:"assembly-filter-item-section",children:e.jsx("select",{value:A,onChange:t=>ue(t.target.value),className:"form-input",children:Se.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{className:"assembly-filter-item-status",children:e.jsxs("select",{value:P,onChange:t=>fe(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{className:"assembly-filter-item-search",children:[e.jsx(Re,{size:14,className:"assembly-search-icon"}),e.jsx("input",{type:"text",placeholder:"নাম, পিতা বা রোল...",value:q,onChange:t=>be(t.target.value),className:"form-input"})]}),e.jsxs("div",{className:"assembly-filter-item-sort",children:[e.jsxs("select",{value:y,onChange:t=>ae(t.target.value),className:"form-input assembly-sort-select",title:"সর্ট কলাম নির্বাচন করুন",children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm assembly-sort-btn",onClick:()=>G(t=>t==="asc"?"desc":"asc"),title:L==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",children:e.jsx("span",{style:{fontWeight:700},children:L==="asc"?"▲ আরোহী":"▼ অবরোহী"})})]}),J&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>K("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx(We,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>K("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(Qe,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>K(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(Ye,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),ye?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(te,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>B("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(R,{col:"roll"})]})}),e.jsx("th",{onClick:()=>B("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(R,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>B("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(R,{col:"name"})]})}),e.jsx("th",{onClick:()=>B("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(R,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"130px",minWidth:"120px",textAlign:"center"},children:"শ্রেণি ও সেকশন"}),e.jsx("th",{onClick:()=>B("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(R,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:pe.length>0?pe.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:t.rollNumber?t.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:t.studentCode||"—"}),e.jsx("td",{children:e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:t.studentName})}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:t.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[t.className,t.sectionName&&t.sectionName!=="—"&&e.jsxs("span",{className:"text-muted",style:{fontSize:"0.78rem",marginLeft:"4px"},children:["(",t.sectionName,")"]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>V(t.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:t.status==="present"?"var(--success)":"transparent",color:t.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>V(t.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:t.status==="absent"?"var(--danger)":"transparent",color:t.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>V(t.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!t.status||t.status==="reset"?"var(--bg-tertiary)":"transparent",color:!t.status||t.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:t.remarks||"",onChange:n=>Ne(t.studentId,"remarks",n.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},t.studentId)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(ee,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),we&&e.jsx("div",{onClick:t=>{t.target===t.currentTarget&&W(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ne,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>W(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(Te,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Je,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>de("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="landscape"?700:500,background:x==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>de("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="portrait"?700:500,background:x==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ve,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"}].map(t=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:N===t.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:N===t.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:N===t.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:N===t.id,onChange:()=>ve(t.id)}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Xe,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>Y(he),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:Ke.map(t=>{const n=Q.indexOf(t.key),o=n!==-1,l=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],r=a=>String(a).replace(/\d/g,i=>l[i]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:o?"rgba(16,185,129,0.08)":"transparent",border:o?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:o,onChange:a=>{a.target.checked?Y(i=>[...i,t.key]):Y(i=>i.filter(m=>m!==t.key))}}),e.jsx("span",{children:t.label})]}),o&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${n+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",r(n+1)]})]},t.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(He,{selectedRoles:_,onChange:t=>{je(t);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(t))}catch{}},additionalRoles:ke,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>W(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:Ie,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(ne,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{yt as default};
