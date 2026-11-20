import{k as $e,a as Be,r as d,j as e,U as se,R as ne,i as Le,H as Te,X as Ee,d as ge}from"./index-68xN7ulr.js";import{a as De,c as _e}from"./useMetadataQueries-CH0Ve3Uc.js";import{g as Oe}from"./helpers-CljGnr5z.js";import{S as Me}from"./constants-C6HvYUtm.js";import{g as He,a as Fe}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as Ue}from"./PrintSignatureRoleSelector-cnyh66pj.js";import{C as Ge}from"./circle-alert-Dk1HUEIY.js";import{C as ue}from"./circle-check-BPpJa133.js";import{P as ae}from"./printer-DXDNgIC6.js";import{S as qe}from"./save-DuVWusAM.js";import{C as Qe}from"./circle-x-CTxVweh-.js";import{S as Ye}from"./sparkles-D06NFtxS.js";import{U as Je}from"./user-x-Dy-_Wtj0.js";import{R as Xe}from"./rotate-ccw-BHF7hUah.js";import{M as Ve}from"./maximize-2-huPML5r0.js";import{S as Ke}from"./sliders-vertical--ZfycWq1.js";import"./plus-DsAdFFqC.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=$e("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),k=b=>{if(b==null)return null;const N=String(b).trim();if(!N)return null;const z={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},_=N.replace(/[০-৯]/g,I=>z[I]),y=parseFloat(_.replace(/[^0-9.-]/g,""));return isNaN(y)?null:y};function C(b){if(!b)return 999999;const N={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},z=String(b).trim().toUpperCase().replace(/[০-৯]/g,A=>N[A]),y=z.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(y)return parseInt(y[1],10);const I=z.replace(/\D/g,"");return I?parseInt(I,10):999999}const et=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],be=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"];function wt(){const{user:b}=Be(),{madrasahName:N,branchName:z}=Oe(b),_=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[y,I]=d.useState(_()),{data:A=[]}=De(),{data:re=[]}=_e(),[f,fe]=d.useState("all"),[R,ye]=d.useState("all"),[Q,ve]=d.useState(""),[P,we]=d.useState("all"),[v,ie]=d.useState("roll"),[W,Y]=d.useState("asc"),$=t=>{v===t?Y(n=>n==="asc"?"desc":"asc"):(ie(t),Y("asc"))},B=({col:t})=>v!==t?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:W==="asc"?"▲":"▼"}),[w,L]=d.useState([]),[je,oe]=d.useState(!0),[le,de]=d.useState(!1),[O,ce]=d.useState(null),[ke,T]=d.useState(!1),[x,pe]=d.useState("landscape"),[S,Ne]=d.useState("id_custom"),[M,J]=d.useState(be),xe=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[H,Se]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__assembly_attendance");if(t){const n=JSON.parse(t);if(Array.isArray(n))return n}return xe}catch{return xe}}),[Ce,tt]=d.useState(()=>{try{const t=localStorage.getItem("annur_footer_custom_roles");return t?JSON.parse(t):[]}catch{return[]}}),[st,nt]=d.useState(""),X=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(b==null?void 0:b.userType)||["co_super_admin","admin"].includes(b==null?void 0:b.adminRole),E=(t,n="success")=>{ce({message:t,type:n}),setTimeout(()=>ce(null),4e3)},ze=d.useMemo(()=>{const t=[{value:"all",label:"সকল সেকশন"}];return Me.forEach(n=>{t.push({value:n,label:`শাখা/সেকশন ${n}`})}),re.forEach(n=>{const s=(n.name||"").trim();s&&!t.some(a=>a.value===n._id||a.value===s)&&t.push({value:n._id,label:s})}),t},[re]),V=async()=>{var t,n,s;try{oe(!0);const a={date:y};f!=="all"&&(a.classLevel=f),R!=="all"&&(a.section=R);const r=await ge.get("/attendance/assembly",{params:a});(t=r.data)!=null&&t.success&&L(r.data.data.records||[])}catch(a){E(((s=(n=a.response)==null?void 0:n.data)==null?void 0:s.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{oe(!1)}};d.useEffect(()=>{V()},[y,f,R]);const F=d.useMemo(()=>{const t=w.length;let n=0,s=0,a=0;w.forEach(i=>{i.status==="present"?n++:i.status==="absent"?s++:a++});const r=t>0?Math.round(n/t*100):0;return{total:t,present:n,absent:s,resetCount:a,presentRate:r}},[w]),U=d.useMemo(()=>{let t=[...w];P!=="all"&&(P==="reset"?t=t.filter(r=>!r.status||r.status==="reset"):t=t.filter(r=>r.status===P));const n=Q.trim(),s=k(n),a=s!==null&&/^[0-9০-৯\s]+$/.test(n);if(n){const r=n.toLowerCase(),i={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},l={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},m=r.replace(/[০-৯]/g,c=>i[c]),g=r.replace(/[0-9]/g,c=>l[c]),o=[...new Set([r,m,g])];t=t.filter(c=>{const p=String(c.rollNumber||"").trim(),h=k(c.rollNumber),D=C(c.studentCode),j=(c.studentCode||"").toLowerCase();if(a)return!!(h!==null&&h===s||D!==null&&D===s||p.startsWith(m)||p.startsWith(g)||j===m||j===g||j===r);const ee=(c.studentName||"").toLowerCase(),te=(c.fatherName||"").toLowerCase(),G=p.replace(/[০-৯]/g,u=>i[u]),q=p.replace(/[0-9]/g,u=>l[u]),Pe=j.replace(/[০-৯]/g,u=>i[u]),We=j.replace(/[0-9]/g,u=>l[u]);return o.some(u=>ee.includes(u)||te.includes(u)||p.includes(u)||G.includes(u)||q.includes(u)||j.includes(u)||Pe.includes(u)||We.includes(u))})}return(v||n)&&t.sort((r,i)=>{if(n&&a){const m=k(r.rollNumber),g=k(i.rollNumber),o=C(r.studentCode),c=C(i.studentCode);let p=99,h=99;if(m===s?p=0:o===s?p=1:p=2,g===s?h=0:c===s?h=1:h=2,p!==h)return p-h}let l=0;if(v==="roll"){const m=k(r.rollNumber),g=k(i.rollNumber);m!==null&&g!==null?l=m-g:m!==null?l=-1:g!==null?l=1:l=String(r.rollNumber||"").localeCompare(String(i.rollNumber||""),"bn")}else if(v==="studentId"){const m=C(r.studentCode),g=C(i.studentCode);m!==g?l=m-g:l=String(r.studentCode||"").localeCompare(String(i.studentCode||""))}else if(v==="name")l=(r.studentName||"").localeCompare(i.studentName||"","bn",{sensitivity:"base"});else if(v==="fatherName")l=(r.fatherName||"").localeCompare(i.fatherName||"","bn",{sensitivity:"base"});else if(v==="status"){const m={present:1,absent:2,reset:3,"":3},g=m[r.status]||3,o=m[i.status]||3;l=g-o}return W==="asc"?l:-l}),t},[w,P,Q,v,W]),me=d.useMemo(()=>{if(f!=="all"){const s=A.find(r=>String(r._id)===String(f));return[{className:(s==null?void 0:s.name)||"নির্বাচিত শ্রেণি",classOrder:0,records:U}]}const t=new Map;U.forEach(s=>{const a=s.className||"অন্যান্য";t.has(a)||t.set(a,{className:a,classOrder:s.classOrder??99,records:[]}),t.get(a).records.push(s)});const n=Array.from(t.values());return n.sort((s,a)=>(s.classOrder??99)-(a.classOrder??99)||s.className.localeCompare(a.className,"bn")),n},[f,A,U]),K=(t,n)=>{L(s=>s.map(a=>a.studentId===t?{...a,status:n}:a))},he=(t,n)=>{L(a=>a.map(r=>(r.className||"অন্যান্য")===t?{...r,status:n}:r)),E(`"${t}" এর সকল শিক্ষার্থীকে "${n==="present"?"উপস্থিত":n==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Z=t=>{L(s=>s.map(a=>({...a,status:t}))),E(`সকল শিক্ষার্থীকে "${t==="present"?"উপস্থিত":t==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Ie=(t,n,s)=>{L(a=>a.map(r=>r.studentId===t?{...r,[n]:s}:r))},Ae=async()=>{var t,n,s;if(X)try{de(!0);const a={date:y,classLevel:f!=="all"?f:"",section:R!=="all"?R:"",attendances:w.map(i=>({studentId:i.studentId,classLevelId:i.classLevelId,sectionId:i.sectionId,branch:i.branch,status:i.status,inTime:i.inTime,remarks:i.remarks}))},r=await ge.post("/attendance/assembly",a);(t=r.data)!=null&&t.success&&(E(r.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),V())}catch(a){E(((s=(n=a.response)==null?void 0:n.data)==null?void 0:s.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{de(!1)}},Re=()=>{const t=window.open("","_blank");if(!t){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let n=[...w];S==="id_custom"?n.sort((o,c)=>{const p=C(o.studentCode),h=C(c.studentCode);return p!==h?p-h:(o.studentCode||"").localeCompare(c.studentCode||"")}):S==="roll"?n.sort((o,c)=>{const p=k(o.rollNumber),h=k(c.rollNumber);return p!==null&&h!==null?p-h:p!==null?-1:h!==null?1:String(o.rollNumber||"").localeCompare(String(c.rollNumber||""),"bn")}):S==="name"&&n.sort((o,c)=>(o.studentName||"").localeCompare(c.studentName||"","bn"));const s=new Date(y).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),a=A.find(o=>o._id===f),r=f==="all"?"সকল শ্রেণি":(a==null?void 0:a.name)||f;let i="";M.forEach(o=>{switch(o){case"serial":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":i+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"status":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":i+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":i+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let l="",m=null;n.forEach((o,c)=>{f==="all"&&o.className&&o.className!==m&&(m=o.className,l+=`
          <tr style="background: #e0f2fe; height: 28px;">
            <td colspan="${M.length}" style="padding: 5px 10px; font-weight: bold; font-size: 11px; color: #0369a1; border: 1px solid #cbd5e1; text-align: left;">
              📂 শ্রেণি / বিভাগ: ${o.className}
            </td>
          </tr>
        `);const p=o.status==="present",h=o.status==="absent",D=p?"#15803d":h?"#b91c1c":"#64748b",j=p?"#dcfce7":h?"#fee2e2":"#f1f5f9",ee=p?"উপস্থিত":h?"অনুপস্থিত":"—";l+='<tr style="height: 33px;">',M.forEach(te=>{switch(te){case"serial":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${c+1}</td>`;break;case"roll":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${o.rollNumber||"—"}</td>`;break;case"id":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${o.studentCode||"—"}</td>`;break;case"photo":{const G=o.photo&&String(o.photo).trim()!==""?String(o.photo).trim():null,q='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';G?l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${G}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${q}
                    </div>
                  </div>
                </td>
              `:l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${q}
                  </div>
                </td>
              `;break}case"name":l+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${o.studentName}</td>`;break;case"fatherName":l+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${o.fatherName||"—"}</td>`;break;case"phone":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${o.guardianPhone||o.phone||"—"}</td>`;break;case"classSection":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${o.className||"—"}${o.sectionName&&o.sectionName!=="—"?` (${o.sectionName})`:""}</td>`;break;case"status":l+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${D}; background: ${j}; border: 1px solid ${D};">
                  ${ee}
                </span>
              </td>
            `;break;case"signBox":l+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":l+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${o.remarks||""}</td>`;break}}),l+="</tr>"});const g=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${N}</title>
      ${He(x)}
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
          ${Fe({orientation:x,showWatermark:!1})}

          <!-- Single aligned line: Left: তারিখ, Center: দৈনিক সমাবেশ..., Right: শ্রেণি -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 6px; border-bottom: 2px solid #0f172a; margin-top: 2px; margin-bottom: 6px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: left;">
              <strong>তারিখ:</strong> ${s}
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
              ${i}
            </tr>
          </thead>
          <tbody>
            ${l}
          </tbody>
        </table>

        <!-- Footer Signatures (Guaranteed distinct, centered signature lines docked to bottom of last page) -->
        <div class="footer-wrap" style="width: 100%; padding-top: 16px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: ${H.length===1?"flex-end":"space-between"}; align-items: flex-end; gap: 16px; width: 100%;">
            ${H.map(o=>`
              <div style="${H.length===1?"flex: 0 0 calc((100% - 32px) / 3);":"flex: 1;"} text-align: center; min-width: 0; padding: 0 10px;">
                <div style="border-top: 1.5px solid #0f172a; width: 175px; max-width: 90%; margin: 0 auto; padding-top: 5px; font-weight: 700; font-size: 11.5px; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${o}
                </div>
                <div style="font-size: 11px; color: #64748b; font-weight: 500; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${N}
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
    </html>`;t.document.open(),t.document.write(g),t.document.close(),T(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[O&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:O.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[O.type==="error"?e.jsx(Ge,{size:18}):e.jsx(ue,{size:18}),O.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(se,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",z," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:V,title:"রিফ্রেশ",children:e.jsx(ne,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>T(!0),disabled:w.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(ae,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),X&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:Ae,disabled:le||w.length===0,children:[le?e.jsx(ne,{size:15,className:"spin"}):e.jsx(qe,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:F.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:se},{label:"সমাবেশে উপস্থিত",value:F.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:ue},{label:"অনুপস্থিত",value:F.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:Qe},{label:"উপস্থিতির হার",value:`${F.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:Ye}].map(({label:t,value:n,unit:s,color:a,bg:r,Icon:i})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:t}),e.jsxs("div",{className:"assembly-stat-value",style:{color:a},children:[n,s&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:s})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:r},children:e.jsx(i,{size:18,color:a})})]})},t))}),e.jsx("div",{className:"card assembly-filter-card",children:e.jsxs("div",{className:"assembly-filter-container",children:[e.jsx("div",{className:"assembly-filter-item-date",children:e.jsx("input",{type:"date",value:y,onChange:t=>I(t.target.value),className:"form-input"})}),e.jsx("div",{className:"assembly-filter-item-class",children:e.jsxs("select",{value:f,onChange:t=>fe(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),A.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{className:"assembly-filter-item-section",children:e.jsx("select",{value:R,onChange:t=>ye(t.target.value),className:"form-input",children:ze.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{className:"assembly-filter-item-status",children:e.jsxs("select",{value:P,onChange:t=>we(t.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{className:"assembly-filter-item-search",children:[e.jsx(Le,{size:14,className:"assembly-search-icon"}),e.jsx("input",{type:"text",placeholder:"নাম, পিতা বা রোল...",value:Q,onChange:t=>ve(t.target.value),className:"form-input"})]}),e.jsxs("div",{className:"assembly-filter-item-sort",children:[e.jsxs("select",{value:v,onChange:t=>ie(t.target.value),className:"form-input assembly-sort-select",title:"সর্ট কলাম নির্বাচন করুন",children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm assembly-sort-btn",onClick:()=>Y(t=>t==="asc"?"desc":"asc"),title:W==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",children:e.jsx("span",{style:{fontWeight:700},children:W==="asc"?"▲ আরোহী":"▼ অবরোহী"})})]}),X&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>Z("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx(Te,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>Z("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(Je,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>Z(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(Xe,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),je?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(ne,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>$("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(B,{col:"roll"})]})}),e.jsx("th",{onClick:()=>$("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(B,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>$("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(B,{col:"name"})]})}),e.jsx("th",{onClick:()=>$("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(B,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"130px",minWidth:"120px",textAlign:"center"},children:"শ্রেণি ও সেকশন"}),e.jsx("th",{onClick:()=>$("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(B,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:U.length>0?me.map(t=>{const n=f==="all"&&me.length>1;return e.jsxs(d.Fragment,{children:[n&&e.jsx("tr",{style:{background:"var(--bg-secondary, #f8fafc)",borderTop:"2px solid var(--border-color, #e2e8f0)",borderBottom:"1px solid var(--border-color, #e2e8f0)"},children:e.jsx("td",{colSpan:"7",style:{padding:"8px 14px",fontWeight:700,fontSize:"0.88rem",color:"var(--primary)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"1rem"},children:"📂"}),e.jsxs("span",{children:["শ্রেণি / বিভাগ: ",e.jsx("strong",{style:{color:"var(--text-primary)"},children:t.className})]}),e.jsxs("span",{className:"badge badge-primary",style:{fontSize:"0.74rem",padding:"2px 8px",borderRadius:"10px"},children:["মোট ",t.records.length," জন"]}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",fontWeight:500},children:["(উপস্থিত: ",t.records.filter(s=>s.status==="present").length,", অনুপস্থিত: ",t.records.filter(s=>s.status==="absent").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("button",{type:"button",onClick:()=>he(t.className,"present"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(22, 163, 74, 0.1)",color:"#16a34a",border:"1px solid rgba(22, 163, 74, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে উপস্থিত করুন`,children:"সবাই উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>he(t.className,"absent"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(220, 38, 38, 0.1)",color:"#dc2626",border:"1px solid rgba(220, 38, 38, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে অনুপস্থিত করুন`,children:"সবাই অনুপস্থিত"})]})]})})}),t.records.map(s=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:s.rollNumber?s.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:s.studentCode||"—"}),e.jsx("td",{children:e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:s.studentName})}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[s.className,s.sectionName&&s.sectionName!=="—"&&e.jsxs("span",{className:"text-muted",style:{fontSize:"0.78rem",marginLeft:"4px"},children:["(",s.sectionName,")"]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>K(s.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:s.status==="present"?"var(--success)":"transparent",color:s.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>K(s.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:s.status==="absent"?"var(--danger)":"transparent",color:s.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>K(s.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!s.status||s.status==="reset"?"var(--bg-tertiary)":"transparent",color:!s.status||s.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:s.remarks||"",onChange:a=>Ie(s.studentId,"remarks",a.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},s.studentId))]},`group-block-${t.className}`)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(se,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),ke&&e.jsx("div",{onClick:t=>{t.target===t.currentTarget&&T(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ae,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>T(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(Ee,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ve,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>pe("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="landscape"?700:500,background:x==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>pe("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:x==="portrait"?700:500,background:x==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:x==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:x==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ze,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"}].map(t=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:S===t.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:S===t.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:S===t.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:S===t.id,onChange:()=>Ne(t.id)}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Ke,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>J(be),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:et.map(t=>{const n=M.indexOf(t.key),s=n!==-1,a=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],r=i=>String(i).replace(/\d/g,l=>a[l]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:s?"rgba(16,185,129,0.08)":"transparent",border:s?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:s,onChange:i=>{i.target.checked?J(l=>[...l,t.key]):J(l=>l.filter(m=>m!==t.key))}}),e.jsx("span",{children:t.label})]}),s&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${n+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",r(n+1)]})]},t.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(Ue,{selectedRoles:H,onChange:t=>{Se(t);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(t))}catch{}},additionalRoles:Ce,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>T(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:Re,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(ae,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{wt as default};
