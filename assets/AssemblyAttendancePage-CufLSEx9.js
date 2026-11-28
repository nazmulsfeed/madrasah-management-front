import{k as qe,a as Qe,r as c,j as e,U as de,R as ce,x as Xe,i as Je,N as Ke,K as Ve,X as Ze,d as Y}from"./index-DR3x7h0E.js";import{g as et}from"./helpers-CljGnr5z.js";import{i as _,M as Se,S as tt}from"./constants-DPNkasLI.js";import{g as nt,a as at}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as st}from"./PrintSignatureRoleSelector-PCqcub8O.js";import{C as rt}from"./circle-alert-A6dPTkIT.js";import{C as Ne}from"./circle-check-DalfFjDf.js";import{P as pe}from"./printer-xbiMxkut.js";import{S as it}from"./save-DXC5ReTu.js";import{C as ot}from"./circle-x--DHvXiip.js";import{U as lt}from"./user-x-BLTf2NLS.js";import{M as dt}from"./maximize-2-DkFSZF4X.js";import{S as ct}from"./sliders-vertical-DJd4HF7c.js";import"./plus-xGKuCb4-.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=qe("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),w=y=>{if(y==null)return null;const C=String(y).trim();if(!C)return null;const B={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},q=C.replace(/[০-৯]/g,R=>B[R]),j=parseFloat(q.replace(/[^0-9.-]/g,""));return isNaN(j)?null:j};function I(y){if(!y)return 999999;const C={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},B=String(y).trim().toUpperCase().replace(/[০-৯]/g,k=>C[k]),j=B.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(j)return parseInt(j[1],10);const R=B.replace(/\D/g,"");return R?parseInt(R,10):999999}const me=y=>{if(!y)return 99;const C=String(y).trim();return{প্লে:1,Play:1,নার্সারী:2,Nursery:2,প্রথম:3,"১ম":3,"Class 1":3,দ্বিতীয়:4,"২য়":4,"Class 2":4,তৃতীয়:5,"৩য়":5,"Class 3":5,চতুর্থ:6,"৪র্থ":6,"Class 4":6,পঞ্চম:7,"৫ম":7,"Class 5":7,ষষ্ঠ:8,"৬ষ্ঠ":8,"Class 6":8,সপ্তম:9,"৭ম":9,"Class 7":9,অষ্টম:10,"৮ম":10,"Class 8":10,নবম:11,"৯ম":11,"Class 9":11,দশম:12,"১০ম":12,"নুরানী বিভাগ":13,"মক্তব বিভাগ":14,"নাজেরা বিভাগ":15,"হিফজ বিভাগ":16,"উর্দু জামাত":17,"তাইসীর জামাত":18,"মিযান মুনশায়িব জামাত":19}[C]??99},mt=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"department",label:"বিভাগ"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],Ce=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"],xt=[{value:"all",label:"সকল বিভাগ"},{value:"নুরানী বিভাগ",label:"নুরানী বিভাগ"},{value:"মক্তব বিভাগ",label:"মক্তব বিভাগ"},{value:"নাজেরা বিভাগ",label:"নাজেরা বিভাগ"},{value:"হিফজ বিভাগ",label:"হিফজ বিভাগ"},{value:"উর্দু জামাত",label:"উর্দু জামাত"},{value:"তাইসীর জামাত",label:"তাইসীর জামাত"},{value:"মিযান মুনশায়িব জামাত",label:"মিযান মুনশায়িব জামাত"}];function Rt(){const{user:y}=Qe(),{madrasahName:C,branchName:B}=et(y),q=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[j,R]=c.useState(q()),[k,ze]=c.useState([]),[xe,Ie]=c.useState([]),[ue,Be]=c.useState([]),[Q,Ae]=c.useState("all"),[A,Re]=c.useState("all"),[b,We]=c.useState("all"),[W,te]=c.useState("all"),[ne,Pe]=c.useState(""),[E,$e]=c.useState("all"),[S,he]=c.useState("roll"),[L,ae]=c.useState("asc"),Te=c.useMemo(()=>{const t=["মক্তব বিভাগ","নাজেরা বিভাগ","হিফজ বিভাগ","উর্দু জামাত","তাইসীর জামাত","মিযান মুনশায়িব জামাত"];return k.filter(a=>{var n;return!t.includes((n=a.name)==null?void 0:n.trim())})},[k]),_e=c.useMemo(()=>ue.filter(t=>{var a;return((a=t.name)==null?void 0:a.trim())!=="হিফজ শাখা"}),[ue]),M=t=>{S===t?ae(a=>a==="asc"?"desc":"asc"):(he(t),ae("asc"))},D=({col:t})=>S!==t?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:L==="asc"?"▲":"▼"}),[z,O]=c.useState([]),[Ee,ge]=c.useState(!0),[fe,be]=c.useState(!1),[X,ye]=c.useState(null),[Le,H]=c.useState(!1),[h,ve]=c.useState("landscape"),[N,Me]=c.useState("id_custom"),[J,se]=c.useState(Ce),we=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[K,De]=c.useState(()=>{try{const t=localStorage.getItem("annur_footer_roles__assembly_attendance");if(t){const a=JSON.parse(t);if(Array.isArray(a))return a}return we}catch{return we}}),[Oe,ut]=c.useState(()=>{try{const t=localStorage.getItem("annur_footer_custom_roles");return t?JSON.parse(t):[]}catch{return[]}}),[ht,gt]=c.useState(""),re=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(y==null?void 0:y.userType)||["co_super_admin","admin"].includes(y==null?void 0:y.adminRole),F=(t,a="success")=>{ye({message:t,type:a}),setTimeout(()=>ye(null),4e3)};c.useEffect(()=>{(async()=>{var a,n,s,i,o,l,x,g,r;try{const[d,p,m]=await Promise.all([Y.get("/students/classes"),Y.get("/students/sections"),Y.get("/students/branches")]);((a=d.data)==null?void 0:a.success)!==!1&&ze(((s=(n=d.data)==null?void 0:n.data)==null?void 0:s.classes)||[]),((i=p.data)==null?void 0:i.success)!==!1&&Ie(((l=(o=p.data)==null?void 0:o.data)==null?void 0:l.sections)||[]),((x=m.data)==null?void 0:x.success)!==!1&&Be(((r=(g=m.data)==null?void 0:g.data)==null?void 0:r.branches)||[])}catch(d){console.error("Failed to fetch assembly metadata:",d)}})()},[]);const U=c.useMemo(()=>{const t=k.find(a=>String(a._id)===String(b));return _(A)||_(t==null?void 0:t.name)},[A,b,k]),He=c.useMemo(()=>{if(U)return[{value:"all",label:"সকল উপ-শাখা"},...Se.map(a=>({value:a,label:a}))];const t=[{value:"all",label:"সকল সেকশন"}];return tt.forEach(a=>{t.push({value:a,label:`শাখা/সেকশন ${a}`})}),xe.forEach(a=>{const n=(a.name||"").trim();n&&!Se.includes(n)&&!t.some(s=>s.value===a._id||s.value===n)&&t.push({value:a._id,label:n})}),t},[U,xe]),ie=async()=>{var t,a,n;try{ge(!0);const s={date:j};Q!=="all"&&(s.branch=Q),A!=="all"&&(s.department=A),b!=="all"&&(s.classLevel=b),W!=="all"&&(s.section=W);const i=await Y.get("/attendance/assembly",{params:s});(t=i.data)!=null&&t.success&&O(i.data.data.records||[])}catch(s){F(((n=(a=s.response)==null?void 0:a.data)==null?void 0:n.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{ge(!1)}};c.useEffect(()=>{ie()},[j,Q,A,b,W]);const V=c.useMemo(()=>{const t=z.length;let a=0,n=0,s=0;z.forEach(o=>{o.status==="present"?a++:o.status==="absent"?n++:s++});const i=t>0?Math.round(a/t*100):0;return{total:t,present:a,absent:n,resetCount:s,presentRate:i}},[z]),Z=c.useMemo(()=>{let t=[...z];E!=="all"&&(E==="reset"?t=t.filter(i=>!i.status||i.status==="reset"):t=t.filter(i=>i.status===E));const a=ne.trim(),n=w(a),s=n!==null&&/^[0-9০-৯\s]+$/.test(a);if(a){const i=a.toLowerCase(),o={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},l={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},x=i.replace(/[০-৯]/g,d=>o[d]),g=i.replace(/[0-9]/g,d=>l[d]),r=[...new Set([i,x,g])];t=t.filter(d=>{const p=String(d.rollNumber||"").trim(),m=w(d.rollNumber),f=I(d.studentCode),u=(d.studentCode||"").toLowerCase();if(s)return!!(m!==null&&m===n||f!==null&&f===n||p.startsWith(x)||p.startsWith(g)||u===x||u===g||u===i);const P=(d.studentName||"").toLowerCase(),$=(d.fatherName||"").toLowerCase(),G=p.replace(/[০-৯]/g,v=>o[v]),T=p.replace(/[0-9]/g,v=>l[v]),ee=u.replace(/[০-৯]/g,v=>o[v]),Ye=u.replace(/[0-9]/g,v=>l[v]);return r.some(v=>P.includes(v)||$.includes(v)||p.includes(v)||G.includes(v)||T.includes(v)||u.includes(v)||ee.includes(v)||Ye.includes(v))})}return(S||a)&&t.sort((i,o)=>{if(a&&s){const x=w(i.rollNumber),g=w(o.rollNumber),r=I(i.studentCode),d=I(o.studentCode);let p=99,m=99;if(x===n?p=0:r===n?p=1:p=2,g===n?m=0:d===n?m=1:m=2,p!==m)return p-m}let l=0;if(S==="roll"){const x=w(i.rollNumber),g=w(o.rollNumber);x!==null&&g!==null?l=x-g:x!==null?l=-1:g!==null?l=1:l=String(i.rollNumber||"").localeCompare(String(o.rollNumber||""),"bn")}else if(S==="studentId"){const x=I(i.studentCode),g=I(o.studentCode);x!==g?l=x-g:l=String(i.studentCode||"").localeCompare(String(o.studentCode||""))}else if(S==="name")l=(i.studentName||"").localeCompare(o.studentName||"","bn",{sensitivity:"base"});else if(S==="fatherName")l=(i.fatherName||"").localeCompare(o.fatherName||"","bn",{sensitivity:"base"});else if(S==="department")l=(i.department||"").localeCompare(o.department||"","bn",{sensitivity:"base"});else if(S==="status"){const x={present:1,absent:2,reset:3,"":3},g=x[i.status]||3,r=x[o.status]||3;l=g-r}return L==="asc"?l:-l}),t},[z,E,ne,S,L]),je=c.useMemo(()=>{if(b!=="all"){const n=k.find(i=>String(i._id)===String(b));return[{className:(n==null?void 0:n.name)||"নির্বাচিত শ্রেণি",classOrder:0,records:Z}]}const t=new Map;Z.forEach(n=>{const s=(n.className||"অন্যান্য").trim();t.has(s)||t.set(s,{className:s,classOrder:me(s),records:[]}),t.get(s).records.push(n)});const a=Array.from(t.values());return a.sort((n,s)=>n.classOrder-s.classOrder||n.className.localeCompare(s.className,"bn")),a},[b,k,Z]),oe=(t,a)=>{O(n=>n.map(s=>s.studentId===t?{...s,status:a}:s))},ke=(t,a)=>{O(s=>s.map(i=>(i.className||"অন্যান্য")===t?{...i,status:a}:i)),F(`"${t}" এর সকল শিক্ষার্থীকে "${a==="present"?"উপস্থিত":a==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},le=t=>{O(n=>n.map(s=>({...s,status:t}))),F(`সকল শিক্ষার্থীকে "${t==="present"?"উপস্থিত":t==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},Fe=(t,a,n)=>{O(s=>s.map(i=>i.studentId===t?{...i,[a]:n}:i))},Ue=async()=>{var t,a,n;if(re)try{be(!0);const s={date:j,classLevel:b!=="all"?b:"",section:W!=="all"?W:"",attendances:z.map(o=>({studentId:o.studentId,classLevelId:o.classLevelId,sectionId:o.sectionId,branch:o.branch,status:o.status,inTime:o.inTime,remarks:o.remarks}))},i=await Y.post("/attendance/assembly",s);(t=i.data)!=null&&t.success&&(F(i.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),ie())}catch(s){F(((n=(a=s.response)==null?void 0:a.data)==null?void 0:n.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{be(!1)}},Ge=()=>{const t=window.open("","_blank");if(!t){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let a=[...z];b==="all"?a.sort((r,d)=>{const p=me(r.className),m=me(d.className);if(p!==m)return p-m;if(N==="roll"){const f=w(r.rollNumber),u=w(d.rollNumber);return f!==null&&u!==null?f-u:f!==null?-1:u!==null?1:String(r.rollNumber||"").localeCompare(String(d.rollNumber||""),"bn")}else if(N==="department"){const f=(r.department||"").trim(),u=(d.department||"").trim();if(f!==u)return f.localeCompare(u,"bn");const P=w(r.rollNumber),$=w(d.rollNumber);return P!==null&&$!==null?P-$:(r.studentName||"").localeCompare(d.studentName||"","bn")}else{if(N==="name")return(r.studentName||"").localeCompare(d.studentName||"","bn");{const f=I(r.studentCode),u=I(d.studentCode);return f!==u?f-u:(r.studentCode||"").localeCompare(d.studentCode||"")}}}):N==="id_custom"?a.sort((r,d)=>{const p=I(r.studentCode),m=I(d.studentCode);return p!==m?p-m:(r.studentCode||"").localeCompare(d.studentCode||"")}):N==="roll"?a.sort((r,d)=>{const p=w(r.rollNumber),m=w(d.rollNumber);return p!==null&&m!==null?p-m:p!==null?-1:m!==null?1:String(r.rollNumber||"").localeCompare(String(d.rollNumber||""),"bn")}):N==="department"?a.sort((r,d)=>{const p=(r.department||"").trim(),m=(d.department||"").trim();if(p!==m)return p.localeCompare(m,"bn");const f=w(r.rollNumber),u=w(d.rollNumber);return f!==null&&u!==null?f-u:(r.studentName||"").localeCompare(d.studentName||"","bn")}):N==="name"&&a.sort((r,d)=>(r.studentName||"").localeCompare(d.studentName||"","bn"));const n=new Date(j).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),s=k.find(r=>r._id===b),i=b==="all"?"সকল শ্রেণি":(s==null?void 0:s.name)||b;let o="";J.forEach(r=>{switch(r){case"serial":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":o+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"department":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">বিভাগ</th>';break;case"status":o+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":o+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":o+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let l="",x=null;a.forEach((r,d)=>{const p=(r.className||"").trim();if(b==="all"&&p&&p!==x){x=p;const G=a.filter(T=>(T.className||"").trim()===x).length;l+=`
          <tr style="background: #e0f2fe; height: 26px;">
            <td colspan="${J.length}" style="padding: 4px 10px; font-weight: bold; font-size: 11px; color: #0369a1; border: 1px solid #cbd5e1; text-align: left;">
              📂 শ্রেণি / বিভাগ: ${x} (মোট ${G} জন)
            </td>
          </tr>
        `}const m=r.status==="present",f=r.status==="absent",u=m?"#15803d":f?"#b91c1c":"#64748b",P=m?"#dcfce7":f?"#fee2e2":"#f1f5f9",$=m?"উপস্থিত":f?"অনুপস্থিত":"—";l+='<tr style="height: 33px;">',J.forEach(G=>{switch(G){case"serial":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${d+1}</td>`;break;case"roll":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${r.rollNumber||"—"}</td>`;break;case"id":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${r.studentCode||"—"}</td>`;break;case"photo":{const T=r.photo&&String(r.photo).trim()!==""?String(r.photo).trim():null,ee='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';T?l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${T}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${ee}
                    </div>
                  </div>
                </td>
              `:l+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${ee}
                  </div>
                </td>
              `;break}case"name":l+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${r.studentName}</td>`;break;case"fatherName":l+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${r.fatherName||"—"}</td>`;break;case"phone":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${r.guardianPhone||r.phone||"—"}</td>`;break;case"classSection":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${r.className||"—"}${r.sectionName&&r.sectionName!=="—"?` (${r.sectionName})`:""}</td>`;break;case"department":l+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${r.department||"—"}</td>`;break;case"status":l+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${u}; background: ${P}; border: 1px solid ${u};">
                  ${$}
                </span>
              </td>
            `;break;case"signBox":l+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":l+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${r.remarks||""}</td>`;break}}),l+="</tr>"});const g=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${C}</title>
      ${nt(h)}
      <style id="dynamic-page-orientation">
        @page {
          size: A4 ${h};
          margin: ${h==="landscape"?"6mm 8mm":"8mm 10mm"} !important;
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
          width: ${h==="landscape"?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: 100%;
          height: calc(${h==="landscape"?"210mm":"297mm"} - ${h==="landscape"?"12mm":"16mm"});
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
          width: ${h==="landscape"?"360px":"420px"};
          height: ${h==="landscape"?"360px":"420px"};
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
          <button id="btn-land" onclick="setOrientation('landscape')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${h==="landscape"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📑 ল্যান্ডস্কেপ</button>
          <button id="btn-port" onclick="setOrientation('portrait')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${h==="portrait"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📄 পোর্ট্রেট</button>
          <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
          <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #64748b; color: #fff; cursor: pointer; font-size: 11.5px;">✕ বন্ধ</button>
        </div>
      </div>

      <!-- Container where partitioned pages will be placed -->
      <div id="pages-container"></div>

      <!-- Hidden source content used for accurate DOM measurement -->
      <div id="raw-content">
        <div class="header-wrap">
          ${at({orientation:h,showWatermark:!1})}

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
              <strong>শ্রেণি:</strong> ${i}
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr style="background: #0f766e; color: #fff;">
              ${o}
            </tr>
          </thead>
          <tbody>
            ${l}
          </tbody>
        </table>

        <!-- Footer Signatures (Guaranteed distinct, centered signature lines docked to bottom of last page) -->
        <div class="footer-wrap" style="width: 100%; padding-top: 16px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: ${K.length===1?"flex-end":"space-between"}; align-items: flex-end; gap: 16px; width: 100%;">
            ${K.map(r=>`
              <div style="${K.length===1?"flex: 0 0 calc((100% - 32px) / 3);":"flex: 1;"} text-align: center; min-width: 0; padding: 0 10px;">
                <div style="border-top: 1.5px solid #0f172a; width: 175px; max-width: 90%; margin: 0 auto; padding-top: 5px; font-weight: 700; font-size: 11.5px; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${r}
                </div>
                <div style="font-size: 11px; color: #64748b; font-weight: 500; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${C}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <script>
        let currentOrientation = '${h}';

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
    </html>`;t.document.open(),t.document.write(g),t.document.close(),H(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[X&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:X.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[X.type==="error"?e.jsx(rt,{size:18}):e.jsx(Ne,{size:18}),X.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(de,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",B," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:ie,title:"রিফ্রেশ",children:e.jsx(ce,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>H(!0),disabled:z.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(pe,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),re&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:Ue,disabled:fe||z.length===0,children:[fe?e.jsx(ce,{size:15,className:"spin"}):e.jsx(it,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:V.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:de},{label:"সমাবেশে উপস্থিত",value:V.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:Ne},{label:"অনুপস্থিত",value:V.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:ot},{label:"উপস্থিতির হার",value:`${V.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:Xe}].map(({label:t,value:a,unit:n,color:s,bg:i,Icon:o})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:t}),e.jsxs("div",{className:"assembly-stat-value",style:{color:s},children:[a,n&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:n})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:i},children:e.jsx(o,{size:18,color:s})})]})},t))}),e.jsx("div",{className:"card assembly-filter-card",style:{padding:"8px 12px",marginBottom:"14px",overflowX:"auto",background:"var(--bg-secondary, #f8fafc)",border:"1px solid var(--border-color, #e2e8f0)",borderRadius:"8px"},children:e.jsxs("div",{className:"assembly-filter-container",style:{display:"flex",alignItems:"center",flexWrap:"nowrap",gap:"8px",minWidth:"max-content"},children:[e.jsx("div",{style:{flexShrink:0,width:"135px"},title:"হাজিরার তারিখ",children:e.jsx("input",{type:"date",value:j,onChange:t=>R(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0}})}),e.jsx("div",{style:{flexShrink:0,width:"125px"},title:"শাখা ফিল্টার",children:e.jsxs("select",{value:Q,onChange:t=>Ae(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল শাখা"}),_e.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{style:{flexShrink:0,width:"130px"},title:"বিভাগ ফিল্টার",children:e.jsx("select",{value:A,onChange:t=>{const a=t.target.value,n=k.find(i=>String(i._id)===String(b)),s=_(a)||_(n==null?void 0:n.name);Re(a),s!==U&&te("all")},className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:xt.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{style:{flexShrink:0,width:"120px"},title:"শ্রেণি ফিল্টার (একাডেমিক)",children:e.jsxs("select",{value:b,onChange:t=>{const a=t.target.value,n=k.find(i=>String(i._id)===String(a)),s=_(A)||_(n==null?void 0:n.name);We(a),s!==U&&te("all")},className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),Te.map(t=>e.jsx("option",{value:t._id,children:t.name},t._id))]})}),e.jsx("div",{style:{flexShrink:0,width:"125px"},title:U?"মক্তব উপ-শাখা ফিল্টার":"সেকশন ফিল্টার",children:e.jsx("select",{value:W,onChange:t=>te(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:He.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})}),e.jsx("div",{style:{flexShrink:0,width:"115px"},title:"উপস্থিতি স্ট্যাটাস",children:e.jsxs("select",{value:E,onChange:t=>$e(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px",marginBottom:0,fontWeight:500},children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{style:{flexShrink:0,width:"170px",position:"relative"},title:"নাম, পিতা বা রোল নম্বর দিয়ে খুঁজুন",children:[e.jsx(Je,{size:13,style:{position:"absolute",left:"9px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted, #94a3b8)",pointerEvents:"none"}}),e.jsx("input",{type:"text",placeholder:"নাম বা রোল...",value:ne,onChange:t=>Pe(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 8px 0 28px",marginBottom:0}})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",flexShrink:0},title:"সর্ট কলাম",children:[e.jsxs("select",{value:S,onChange:t=>he(t.target.value),className:"form-input",style:{height:"34px",fontSize:"0.82rem",padding:"0 6px",width:"120px",marginBottom:0},children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম"}),e.jsx("option",{value:"department",children:"বিভাগ অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>ae(t=>t==="asc"?"desc":"asc"),title:L==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",style:{height:"34px",padding:"0 8px",fontSize:"0.78rem",whiteSpace:"nowrap"},children:e.jsx("span",{style:{fontWeight:700},children:L==="asc"?"▲":"▼"})})]}),re&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>le("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx(Ke,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>le("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(lt,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>le(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(Ve,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),Ee?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(ce,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>M("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(D,{col:"roll"})]})}),e.jsx("th",{onClick:()=>M("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(D,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>M("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(D,{col:"name"})]})}),e.jsx("th",{onClick:()=>M("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(D,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"160px",minWidth:"140px",textAlign:"center"},children:"শ্রেণি, সেকশন ও শাখা"}),e.jsx("th",{onClick:()=>M("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(D,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:Z.length>0?je.map(t=>{const a=b==="all"&&je.length>1;return e.jsxs(c.Fragment,{children:[a&&e.jsx("tr",{style:{background:"var(--bg-secondary, #f8fafc)",borderTop:"2px solid var(--border-color, #e2e8f0)",borderBottom:"1px solid var(--border-color, #e2e8f0)"},children:e.jsx("td",{colSpan:"7",style:{padding:"8px 14px",fontWeight:700,fontSize:"0.88rem",color:"var(--primary)"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"1rem"},children:"📂"}),e.jsxs("span",{children:["শ্রেণি / বিভাগ: ",e.jsx("strong",{style:{color:"var(--text-primary)"},children:t.className})]}),e.jsxs("span",{className:"badge badge-primary",style:{fontSize:"0.74rem",padding:"2px 8px",borderRadius:"10px"},children:["মোট ",t.records.length," জন"]}),e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",fontWeight:500},children:["(উপস্থিত: ",t.records.filter(n=>n.status==="present").length,", অনুপস্থিত: ",t.records.filter(n=>n.status==="absent").length,")"]})]}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("button",{type:"button",onClick:()=>ke(t.className,"present"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(22, 163, 74, 0.1)",color:"#16a34a",border:"1px solid rgba(22, 163, 74, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে উপস্থিত করুন`,children:"সবাই উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>ke(t.className,"absent"),className:"btn btn-xs",style:{fontSize:"0.72rem",padding:"3px 8px",background:"rgba(220, 38, 38, 0.1)",color:"#dc2626",border:"1px solid rgba(220, 38, 38, 0.3)",borderRadius:"4px",cursor:"pointer",fontWeight:600},title:`${t.className} এর সবাইকে অনুপস্থিত করুন`,children:"সবাই অনুপস্থিত"})]})]})})}),t.records.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:n.rollNumber?n.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:n.studentCode||"—"}),e.jsxs("td",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:n.studentName}),n.department&&e.jsx("span",{style:{display:"inline-block",fontSize:"0.72rem",padding:"1px 6px",borderRadius:"4px",background:"rgba(99, 102, 241, 0.08)",color:"var(--primary)",marginTop:"2px",fontWeight:500},children:n.department})]}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:n.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[e.jsx("div",{style:{fontWeight:600},children:n.className}),e.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"2px"},children:[n.sectionName&&n.sectionName!=="—"?`সেকশন ${n.sectionName}`:"",n.branchName&&n.branchName!=="—"?` · ${n.branchName}`:""]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>oe(n.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:n.status==="present"?"var(--success)":"transparent",color:n.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>oe(n.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:n.status==="absent"?"var(--danger)":"transparent",color:n.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>oe(n.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!n.status||n.status==="reset"?"var(--bg-tertiary)":"transparent",color:!n.status||n.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:n.remarks||"",onChange:s=>Fe(n.studentId,"remarks",s.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},n.studentId))]},`group-block-${t.className}`)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(de,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),Le&&e.jsx("div",{onClick:t=>{t.target===t.currentTarget&&H(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(pe,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>H(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(Ze,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(dt,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>ve("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:h==="landscape"?700:500,background:h==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:h==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:h==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>ve("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:h==="portrait"?700:500,background:h==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:h==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:h==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(pt,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"},{id:"department",label:"বিভাগ অনুযায়ী (নুরানী, মক্তব, নাজেরা, হিফজ...)"}].map(t=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:N===t.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:N===t.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:N===t.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:N===t.id,onChange:()=>Me(t.id)}),e.jsx("span",{children:t.label})]},t.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(ct,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>se(Ce),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:mt.map(t=>{const a=J.indexOf(t.key),n=a!==-1,s=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],i=o=>String(o).replace(/\d/g,l=>s[l]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:n?"rgba(16,185,129,0.08)":"transparent",border:n?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:n,onChange:o=>{o.target.checked?se(l=>[...l,t.key]):se(l=>l.filter(x=>x!==t.key))}}),e.jsx("span",{children:t.label})]}),n&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${a+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",i(a+1)]})]},t.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(st,{selectedRoles:K,onChange:t=>{De(t);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(t))}catch{}},additionalRoles:Oe,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>H(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:Ge,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(pe,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{Rt as default};
