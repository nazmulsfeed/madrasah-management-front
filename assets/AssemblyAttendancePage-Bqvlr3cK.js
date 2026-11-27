import{k as Ue,a as Ge,r as c,j as e,U as ie,R as oe,i as Ye,I as qe,X as Qe,d as F}from"./index-ByhlF3be.js";import{g as Xe}from"./helpers-CljGnr5z.js";import{S as Je}from"./constants-C6HvYUtm.js";import{g as Ve,a as Ke}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as Ze}from"./PrintSignatureRoleSelector-BlNpLcMa.js";import{C as et}from"./circle-alert-CJSLGuCj.js";import{C as we}from"./circle-check-DtaYGi1g.js";import{P as le}from"./printer-DpYmpOOr.js";import{S as tt}from"./save-B-I4cLIS.js";import{C as nt}from"./circle-x-BhePK8q8.js";import{S as st}from"./sparkles-Bqq5bCky.js";import{U as at}from"./user-x-CNDhdGTQ.js";import{R as rt}from"./rotate-ccw-DtEzvVxy.js";import{M as it}from"./maximize-2-CUw6ANCC.js";import{S as ot}from"./sliders-vertical-Bmh-C1Co.js";import"./plus-XIo0vptI.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=Ue("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),w=b=>{if(b==null)return null;const N=String(b).trim();if(!N)return null;const I={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},U=N.replace(/[০-৯]/g,A=>I[A]),j=parseFloat(U.replace(/[^0-9.-]/g,""));return isNaN(j)?null:j};function z(b){if(!b)return 999999;const N={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},I=String(b).trim().toUpperCase().replace(/[০-৯]/g,B=>N[B]),j=I.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(j)return parseInt(j[1],10);const A=I.replace(/\D/g,"");return A?parseInt(A,10):999999}const de=b=>{if(!b)return 99;const N=String(b).trim();return{প্লে:1,Play:1,নার্সারী:2,Nursery:2,প্রথম:3,"১ম":3,"Class 1":3,দ্বিতীয়:4,"২য়":4,"Class 2":4,তৃতীয়:5,"৩য়":5,"Class 3":5,চতুর্থ:6,"৪র্থ":6,"Class 4":6,পঞ্চম:7,"৫ম":7,"Class 5":7,ষষ্ঠ:8,"৬ষ্ঠ":8,"Class 6":8,সপ্তম:9,"৭ম":9,"Class 7":9,অষ্টম:10,"৮ম":10,"Class 8":10,নবম:11,"৯ম":11,"Class 9":11,দশম:12,"১০ম":12,"নুরানী বিভাগ":13,"মক্তব বিভাগ":14,"নাজেরা বিভাগ":15,"হিফজ বিভাগ":16,"উর্দু জামাত":17,"তাইসীর জামাত":18,"মিযান মুনশায়িব জামাত":19}[N]??99},dt=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"department",label:"বিভাগ"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],je=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"],ct=[{value:"all",label:"সকল বিভাগ"},{value:"নুরানী বিভাগ",label:"নুরানী বিভাগ"},{value:"মক্তব বিভাগ",label:"মক্তব বিভাগ"},{value:"নাজেরা বিভাগ",label:"নাজেরা বিভাগ"},{value:"হিফজ বিভাগ",label:"হিফজ বিভাগ"},{value:"উর্দু জামাত",label:"উর্দু জামাত"},{value:"তাইসীর জামাত",label:"তাইসীর জামাত"},{value:"মিযান মুনশায়িব জামাত",label:"মিযান মুনশায়িব জামাত"}];function At(){const{user:b}=Ge(),{madrasahName:N,branchName:I}=Xe(b),U=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[j,A]=c.useState(U()),[B,ke]=c.useState([]),[ce,Se]=c.useState([]),[pe,Ne]=c.useState([]),[G,Ce]=c.useState("all"),[Y,ze]=c.useState("all"),[v,Ie]=c.useState("all"),[R,Be]=c.useState("all"),[Z,Ae]=c.useState(""),[T,Re]=c.useState("all"),[k,me]=c.useState("roll"),[L,ee]=c.useState("asc"),We=c.useMemo(()=>{const t=["মক্তব বিভাগ","নাজেরা বিভাগ","হিফজ বিভাগ","উর্দু জামাত","তাইসীর জামাত","মিযান মুনশায়িব জামাত"];return B.filter(s=>{var n;return!t.includes((n=s.name)==null?void 0:n.trim())})},[B]),Pe=c.useMemo(()=>pe.filter(t=>{var s;return((s=t.name)==null?void 0:s.trim())!=="হিফজ শাখা"}),[pe]),E=t=>{k===t?ee(s=>s==="asc"?"desc":"asc"):(me(t),ee("asc"))},D=({col:t})=>k!==t?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:L==="asc"?"▲":"▼"}),[C,_]=c.useState([]),[$e,xe]=c.useState(!0),[he,ue]=c.useState(!1),[q,ge]=c.useState(null),[Te,O]=c.useState(!1),[u,fe]=c.useState("landscape"),[S,Le]=c.useState("id_custom"),[Q,te]=c.useState(je),be=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[X,Ee]=c.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__assembly_attendance");if(t){const s=JSON.parse(t);if(Array.isArray(s))return s}return be}catch{return be}}),[De,pt]=c.useState(()=>{try{const t=localStorage.getItem("annur_footer_custom_roles");return t?JSON.parse(t):[]}catch{return[]}}),[mt,xt]=c.useState(""),ne=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(b==null?void 0:b.userType)||["co_super_admin","admin"].includes(b==null?void 0:b.adminRole),M=(t,s="success")=>{ge({message:t,type:s}),setTimeout(()=>ge(null),4e3)};c.useEffect(()=>{(async()=>{var s,n,r,o,i,l,x,g,a;try{const[d,p,m]=await Promise.all([F.get("/students/classes"),F.get("/students/sections"),F.get("/students/branches")]);((s=d.data)==null?void 0:s.success)!==!1&&ke(((r=(n=d.data)==null?void 0:n.data)==null?void 0:r.classes)||[]),((o=p.data)==null?void 0:o.success)!==!1&&Se(((l=(i=p.data)==null?void 0:i.data)==null?void 0:l.sections)||[]),((x=m.data)==null?void 0:x.success)!==!1&&Ne(((a=(g=m.data)==null?void 0:g.data)==null?void 0:a.branches)||[])}catch(d){console.error("Failed to fetch assembly metadata:",d)}})()},[]);const _e=c.useMemo(()=>{const t=[{value:"all",label:"সকল সেকশন"}];return Je.forEach(s=>{t.push({value:s,label:`শাখা/সেকশন ${s}`})}),ce.forEach(s=>{const n=(s.name||"").trim();n&&!t.some(r=>r.value===s._id||r.value===n)&&t.push({value:s._id,label:n})}),t},[ce]),se=async()=>{var t,s,n;try{xe(!0);const r={date:j};G!=="all"&&(r.branch=G),Y!=="all"&&(r.department=Y),v!=="all"&&(r.classLevel=v),R!=="all"&&(r.section=R);const o=await F.get("/attendance/assembly",{params:r});(t=o.data)!=null&&t.success&&_(o.data.data.records||[])}catch(r){M(((n=(s=r.response)==null?void 0:s.data)==null?void 0:n.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{xe(!1)}};c.useEffect(()=>{se()},[j,G,Y,v,R]);const J=c.useMemo(()=>{const t=C.length;let s=0,n=0,r=0;C.forEach(i=>{i.status==="present"?s++:i.status==="absent"?n++:r++});const o=t>0?Math.round(s/t*100):0;return{total:t,present:s,absent:n,resetCount:r,presentRate:o}},[C]),V=c.useMemo(()=>{let t=[...C];T!=="all"&&(T==="reset"?t=t.filter(o=>!o.status||o.status==="reset"):t=t.filter(o=>o.status===T));const s=Z.trim(),n=w(s),r=n!==null&&/^[0-9০-৯\s]+$/.test(s);if(s){const o=s.toLowerCase(),i={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},l={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},x=o.replace(/[০-৯]/g,d=>i[d]),g=o.replace(/[0-9]/g,d=>l[d]),a=[...new Set([o,x,g])];t=t.filter(d=>{const p=String(d.rollNumber||"").trim(),m=w(d.rollNumber),f=z(d.studentCode),h=(d.studentCode||"").toLowerCase();if(r)return!!(m!==null&&m===n||f!==null&&f===n||p.startsWith(x)||p.startsWith(g)||h===x||h===g||h===o);const W=(d.studentName||"").toLowerCase(),P=(d.fatherName||"").toLowerCase(),H=p.replace(/[০-৯]/g,y=>i[y]),$=p.replace(/[0-9]/g,y=>l[y]),K=h.replace(/[০-৯]/g,y=>i[y]),Fe=h.replace(/[0-9]/g,y=>l[y]);return a.some(y=>W.includes(y)||P.includes(y)||p.includes(y)||H.includes(y)||$.includes(y)||h.includes(y)||K.includes(y)||Fe.includes(y))})}return(k||s)&&t.sort((o,i)=>{if(s&&r){const x=w(o.rollNumber),g=w(i.rollNumber),a=z(o.studentCode),d=z(i.studentCode);let p=99,m=99;if(x===n?p=0:a===n?p=1:p=2,g===n?m=0:d===n?m=1:m=2,p!==m)return p-m}let l=0;if(k==="roll"){const x=w(o.rollNumber),g=w(i.rollNumber);x!==null&&g!==null?l=x-g:x!==null?l=-1:g!==null?l=1:l=String(o.rollNumber||"").localeCompare(String(i.rollNumber||""),"bn")}else if(k==="studentId"){const x=z(o.studentCode),g=z(i.studentCode);x!==g?l=x-g:l=String(o.studentCode||"").localeCompare(String(i.studentCode||""))}else if(k==="name")l=(o.studentName||"").localeCompare(i.studentName||"","bn",{sensitivity:"base"});else if(k==="fatherName")l=(o.fatherName||"").localeCompare(i.fatherName||"","bn",{sensitivity:"base"});else if(k==="department")l=(o.department||"").localeCompare(i.department||"","bn",{sensitivity:"base"});else if(k==="status"){const x={present:1,absent:2,reset:3,"":3},g=x[o.status]||3,a=x[i.status]||3;l=g-a}return L==="asc"?l:-l}),t},[C,T,Z,k,L]),ye=c.useMemo(()=>{if(v!=="all"){const n=B.find(o=>String(o._id)===String(v));return[{className:(n==null?void 0:n.name)||"নির্বাচিত শ্রেণি",classOrder:0,records:V}]}const t=new Map;V.forEach(n=>{const r=(n.className||"অন্যান্য").trim();t.has(r)||t.set(r,{className:r,classOrder:de(r),records:[]}),t.get(r).records.push(n)});const s=Array.from(t.values());return s.sort((n,r)=>n.classOrder-r.classOrder||n.className.localeCompare(r.className,"bn")),s},[v,B,V]),ae=(t,s)=>{_(n=>n.map(r=>r.studentId===t?{...r,status:s}:r))},ve=(t,s)=>{_(r=>r.map(o=>(o.className||"অন্যান্য")===t?{...o,status:s}:o)),M(`"${t}" এর সকল শিক্ষার্থীকে "${s==="present"?"উপস্থিত":s==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},re=t=>{_(n=>n.map(r=>({...r,status:t}))),M(`সকল শিক্ষার্থীকে "${t==="present"?"উপস্থিত":t==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Oe=(t,s,n)=>{_(r=>r.map(o=>o.studentId===t?{...o,[s]:n}:o))},Me=async()=>{var t,s,n;if(ne)try{ue(!0);const r={date:j,classLevel:v!=="all"?v:"",section:R!=="all"?R:"",attendances:C.map(i=>({studentId:i.studentId,classLevelId:i.classLevelId,sectionId:i.sectionId,branch:i.branch,status:i.status,inTime:i.inTime,remarks:i.remarks}))},o=await F.post("/attendance/assembly",r);(t=o.data)!=null&&t.success&&(M(o.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),se())}catch(r){M(((n=(s=r.response)==null?void 0:s.data)==null?void 0:n.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{ue(!1)}},He=()=>{const t=window.open("","_blank");if(!t){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let s=[...C];v==="all"?s.sort((a,d)=>{const p=de(a.className),m=de(d.className);if(p!==m)return p-m;if(S==="roll"){const f=w(a.rollNumber),h=w(d.rollNumber);return f!==null&&h!==null?f-h:f!==null?-1:h!==null?1:String(a.rollNumber||"").localeCompare(String(d.rollNumber||""),"bn")}else if(S==="department"){const f=(a.department||"").trim(),h=(d.department||"").trim();if(f!==h)return f.localeCompare(h,"bn");const W=w(a.rollNumber),P=w(d.rollNumber);return W!==null&&P!==null?W-P:(a.studentName||"").localeCompare(d.studentName||"","bn")}else{if(S==="name")return(a.studentName||"").localeCompare(d.studentName||"","bn");{const f=z(a.studentCode),h=z(d.studentCode);return f!==h?f-h:(a.studentCode||"").localeCompare(d.studentCode||"")}}}):S==="id_custom"?s.sort((a,d)=>{const p=z(a.studentCode),m=z(d.studentCode);return p!==m?p-m:(a.studentCode||"").localeCompare(d.studentCode||"")}):S==="roll"?s.sort((a,d)=>{const p=w(a.rollNumber),m=w(d.rollNumber);return p!==null&&m!==null?p-m:p!==null?-1:m!==null?1:String(a.rollNumber||"").localeCompare(String(d.rollNumber||""),"bn")}):S==="department"?s.sort((a,d)=>{const p=(a.department||"").trim(),m=(d.department||"").trim();if(p!==m)return p.localeCompare(m,"bn");const f=w(a.rollNumber),h=w(d.rollNumber);return f!==null&&h!==null?f-h:(a.studentName||"").localeCompare(d.studentName||"","bn")}):S==="name"&&s.sort((a,d)=>(a.studentName||"").localeCompare(d.studentName||"","bn"));const n=new Date(j).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),r=B.find(a=>a._id===v),o=v==="all"?"সকল শ্রেণি":(r==null?void 0:r.name)||v;let i="";Q.forEach(a=>{switch(a){case"serial":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":i+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"department":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">বিভাগ</th>';break;case"status":i+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":i+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":i+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let l="",x=null;s.forEach((a,d)=>{const p=(a.className||"").trim();if(v==="all"&&p&&p!==x){x=p;const H=s.filter($=>($.className||"").trim()===x).length;l+=`
          <tr style="background: #e0f2fe; height: 26px;">
            <td colspan="${Q.length}" style="padding: 4px 10px; font-weight: bold; font-size: 11px; color: #0369a1; border: 1px solid #cbd5e1; text-align: left;">
              📂 শ্রেণি / বিভাগ: ${x} (মোট ${H} জন)
            </td>
          </tr>
        `}const m=a.status==="present",f=a.status==="absent",h=m?"#15803d":f?"#b91c1c":"#64748b",W=m?"#dcfce7":f?"#fee2e2":"#f1f5f9",P=m?"উপস্থিত":f?"অনুপস্থিত":"—";l+='<tr style="height: 33px;">',Q.forEach(H=>{switch(H){case"serial":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${d+1}</td>`;break;case"roll":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${a.rollNumber||"—"}</td>`;break;case"id":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${a.studentCode||"—"}</td>`;break;case"photo":{const $=a.photo&&String(a.photo).trim()!==""?String(a.photo).trim():null,K='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';$?l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${$}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${K}
                    </div>
                  </div>
                </td>
              `:l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${K}
                  </div>
                </td>
              `;break}case"name":l+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${a.studentName}</td>`;break;case"fatherName":l+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${a.fatherName||"—"}</td>`;break;case"phone":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${a.guardianPhone||a.phone||"—"}</td>`;break;case"classSection":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${a.className||"—"}${a.sectionName&&a.sectionName!=="—"?` (${a.sectionName})`:""}</td>`;break;case"department":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${a.department||"—"}</td>`;break;case"status":l+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${h}; background: ${W}; border: 1px solid ${h};">
                  ${P}
                </span>
              </td>
            `;break;case"signBox":l+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":l+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${a.remarks||""}</td>`;break}}),l+="</tr>"});const g=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${N}</title>
      ${Ve(u)}
      <style id="dynamic-page-orientation">
        @page {
          size: A4 ${u};
          margin: ${u==="landscape"?"6mm 8mm":"8mm 10mm"} !important;
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
          width: ${u==="landscape"?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: 100%;
          height: calc(${u==="landscape"?"210mm":"297mm"} - ${u==="landscape"?"12mm":"16mm"});
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
          width: ${u==="landscape"?"360px":"420px"};
          height: ${u==="landscape"?"360px":"420px"};
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
          <button id="btn-land" onclick="setOrientation('landscape')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${u==="landscape"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📑 ল্যান্ডস্কেপ</button>
          <button id="btn-port" onclick="setOrientation('portrait')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${u==="portrait"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📄 পোর্ট্রেট</button>
          <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
          <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #64748b; color: #fff; cursor: pointer; font-size: 11.5px;">✕ বন্ধ</button>
        </div>
      </div>

      <!-- Container where partitioned pages will be placed -->
      <div id="pages-container"></div>

      <!-- Hidden source content used for accurate DOM measurement -->
      <div id="raw-content">
        <div class="header-wrap">
          ${Ke({orientation:u,showWatermark:!1})}

          <!-- Single aligned line: Left: তারিখ, Center: দৈনিক সমাবেশ..., Right: শ্রেণি -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 6px; border-bottom: 2px solid #0f172a; margin-top: 2px; margin-bottom: 6px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: left;">
              <strong>তারিখ:</strong> ${n}
            </div>
            <div style="text-align: center; flex: 1;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 800; color: #0f172a; padding: 3px 14px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px;">
                📋 দৈনিক সমাবেশ ও শৃঙ্খলা উপস্থিতি বিবরণী
              </span>
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: right;">
              <strong>শ্রেণি:</strong> ${o}
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
          <div style="display: flex; justify-content: ${X.length===1?"flex-end":"space-between"}; align-items: flex-end; gap: 16px; width: 100%;">
            ${X.map(a=>`
              <div style="${X.length===1?"flex: 0 0 calc((100% - 32px) / 3);":"flex: 1;"} text-align: center; min-width: 0; padding: 0 10px;">
                <div style="border-top: 1.5px solid #0f172a; width: 175px; max-width: 90%; margin: 0 auto; padding-top: 5px; font-weight: 700; font-size: 11.5px; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${a}
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
        let currentOrientation = '${u}';

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
    </html>`;t.document.open(),t.document.write(g),t.document.close(),O(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[q&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:q.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[q.type==="error"?e.jsx(et,{size:18}):e.jsx(we,{size:18}),q.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(ie,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",I," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:se,title:"রিফ্রেশ",children:e.jsx(oe,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>O(!0),disabled:C.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(le,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),ne&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:Me,disabled:he||C.length===0,children:[he?e.jsx(oe,{size:15,className:"spin"}):e.jsx(tt,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:J.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:ie},{label:"সমাবেশে উপস্থিত",value:J.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:we},{label:"অনুপস্থিত",value:J.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:nt},{label:"উপস্থিতির হার",value:`${J.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:st}].map(({label:t,value:s,unit:n,color:r,bg:o,Icon:i})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:t}),e.jsxs("div",{className:"assembly-stat-value",style:{color:r},children:[s,n&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:n})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:o},children:e.jsx(i,{size:18,color:r})})]})},t))}),e.jsx("div",{className:"card assembly-filter-card",style:{padding:"8px 12px",marginBottom:"14px",overflowX:"auto",background:"var(--bg-secondary, #f8fafc)",border:"1px solid var(--border-color, #e2e8f0)",borderRadius:"8px"},children:e.jsxs("div",{className:"assembly-filter-container",style:{display:"flex",alignItems:"center",flexWrap:"nowrap",gap:"8px",minWidth:"max-content"},children:[e.jsx("div",{style:{flexShrink:0,width:"135px"},title:"হাজিরার তারিখ",children:e.jsx("input",{type:"date",value:j,onChange:t=>A(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0}})}),e.jsx("div",{style:{flexShrink:0,width:"125px"},title:"শাখা ফিল্টার",children:e.jsxs("select",{value:G,onChange:t=>Ce(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),Pe.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{style:{flexShrink:0,width:"130px"},title:"বিভাগ ফিল্টার",children:e.jsx("select",{value:Y,onChange:t=>ze(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:ct.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{style:{flexShrink:0,width:"120px"},title:"শ্রেণি ফিল্টার (একাডেমিক)",children:e.jsxs("select",{value:v,onChange:t=>Ie(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),We.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{style:{flexShrink:0,width:"115px"},title:"সেকশন ফিল্টার",children:e.jsx("select",{value:R,onChange:t=>Be(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:_e.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{style:{flexShrink:0,width:"115px"},title:"উপস্থিতি স্ট্যাটাস",children:e.jsxs("select",{value:T,onChange:t=>Re(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{style:{flexShrink:0,width:"170px",position:"relative"},title:"নাম, পিতা বা রোল নম্বর দিয়ে খুঁজুন",children:[e.jsx(Ye,{size:13,style:{position:"absolute",left:"9px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted, #94a3b8)",pointerEvents:"none"}}),e.jsx("input",{type:"text",placeholder:"নাম বা রোল...",value:Z,onChange:t=>Ae(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px 0 28px",marginBottom:0}})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",flexShrink:0},title:"সর্ট কলাম",children:[e.jsxs("select",{value:k,onChange:t=>me(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 6px",width:"120px",marginBottom:0},children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম"}),e.jsx("option",{value:"department",children:"বিভাগ অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>ee(t=>t==="asc"?"desc":"asc"),title:L==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",style:{height:"34px",padding:"0 8px",fontSize:"0.78rem",whiteSpace:"nowrap"},children:e.jsx("span",{style:{fontWeight:700},children:L==="asc"?"▲":"▼"})})]}),ne&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>re("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx(qe,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>re("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(at,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>re(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(rt,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),$e?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(oe,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>E("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(D,{col:"roll"})]})}),e.jsx("th",{onClick:()=>E("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(D,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>E("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(D,{col:"name"})]})}),e.jsx("th",{onClick:()=>E("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(D,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"160px",minWidth:"140px",textAlign:"center"},children:"শ্রেণি, সেকশন ও শাখা"}),e.jsx("th",{onClick:()=>E("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(D,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:V.length>0?ye.map(t=>{const s=v==="all"&&ye.length>1;return e.jsxs(c.Fragment,{children:[s&&e.jsx("tr",{style:{background:"var(--bg-secondary, #f8fafc)",borderTop:"2px solid var(--border-color, #e2e8f0)",borderBottom:"1px solid var(--border-color, #e2e8f0)"},children:e.jsx("td",{colSpan:"7",style:{padding:"8px 14px",fontWeight:700,fontSize:"0.88rem",color:"var(--primary)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"1rem"},children:"📂"}),e.jsxs("span",{children:["শ্রেণি / বিভাগ: ",e.jsx("strong",{style:{color:"var(--text-primary)"},children:t.className})]}),e.jsxs("span",{className:"badge badge-primary",style:{fontSize:"0.74rem",padding:"2px 8px",borderRadius:"10px"},children:["মোট ",t.records.length," জন"]}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",fontWeight:500},children:["(উপস্থিত: ",t.records.filter(n=>n.status==="present").length,", অনুপস্থিত: ",t.records.filter(n=>n.status==="absent").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("button",{type:"button",onClick:()=>ve(t.className,"present"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(22, 163, 74, 0.1)",color:"#16a34a",border:"1px solid rgba(22, 163, 74, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে উপস্থিত করুন`,children:"সবাই উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>ve(t.className,"absent"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(220, 38, 38, 0.1)",color:"#dc2626",border:"1px solid rgba(220, 38, 38, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে অনুপস্থিত করুন`,children:"সবাই অনুপস্থিত"})]})]})})}),t.records.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:n.rollNumber?n.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:n.studentCode||"—"}),e.jsxs("td",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:n.studentName}),n.department&&e.jsx("span",{style:{display:"inline-block",fontSize:"0.72rem",padding:"1px 6px",borderRadius:"4px",background:"rgba(99, 102, 241, 0.08)",color:"var(--primary)",marginTop:"2px",fontWeight:500},children:n.department})]}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:n.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[e.jsx("div",{style:{fontWeight:600},children:n.className}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:[n.sectionName&&n.sectionName!=="—"?`সেকশন ${n.sectionName}`:"",n.branchName&&n.branchName!=="—"?` · ${n.branchName}`:""]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>ae(n.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:n.status==="present"?"var(--success)":"transparent",color:n.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>ae(n.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:n.status==="absent"?"var(--danger)":"transparent",color:n.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>ae(n.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!n.status||n.status==="reset"?"var(--bg-tertiary)":"transparent",color:!n.status||n.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:n.remarks||"",onChange:r=>Oe(n.studentId,"remarks",r.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},n.studentId))]},`group-block-${t.className}`)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(ie,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),Te&&e.jsx("div",{onClick:t=>{t.target===t.currentTarget&&O(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(le,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>O(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(Qe,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(it,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>fe("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:u==="landscape"?700:500,background:u==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:u==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:u==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>fe("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:u==="portrait"?700:500,background:u==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:u==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:u==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(lt,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"},{id:"department",label:"বিভাগ অনুযায়ী (নুরানী, মক্তব, নাজেরা, হিফজ...)"}].map(t=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:S===t.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:S===t.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:S===t.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:S===t.id,onChange:()=>Le(t.id)}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(ot,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>te(je),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:dt.map(t=>{const s=Q.indexOf(t.key),n=s!==-1,r=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],o=i=>String(i).replace(/\d/g,l=>r[l]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:n?"rgba(16,185,129,0.08)":"transparent",border:n?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:n,onChange:i=>{i.target.checked?te(l=>[...l,t.key]):te(l=>l.filter(x=>x!==t.key))}}),e.jsx("span",{children:t.label})]}),n&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${s+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",o(s+1)]})]},t.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(Ze,{selectedRoles:X,onChange:t=>{Ee(t);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(t))}catch{}},additionalRoles:De,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>O(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:He,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(le,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{At as default};
