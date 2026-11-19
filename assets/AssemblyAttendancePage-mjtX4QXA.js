var qe=t=>{throw TypeError(t)};var Te=(t,n,a)=>n.has(t)||qe("Cannot "+a);var i=(t,n,a)=>(Te(t,n,"read from private field"),a?a.call(t):n.get(t)),O=(t,n,a)=>n.has(t)?qe("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,a),k=(t,n,a,r)=>(Te(t,n,"write to private field"),r?r.call(t,a):n.set(t,a),a),N=(t,n,a)=>(Te(t,n,"access private method"),a);import{r as b,I as kt,J as z,K as Oe,N as rt,O as Ct,P as Nt,Q as It,T as we,V as Rt,W as zt,Y as et,Z as ot,_ as lt,$ as Et,k as Tt,a as _e,d as Se,a0 as dt,j as e,U as Pe,R as Ae,i as Ot,a1 as Pt,X as At}from"./index-Bml3z7BZ.js";import{g as Lt}from"./helpers-CljGnr5z.js";import{S as _t}from"./constants-C6HvYUtm.js";import{g as Bt,a as Mt}from"./madrasahPrintUtils-Jjq-64Kz.js";import{P as Dt}from"./PrintSignatureRoleSelector-Dv9xtId0.js";import{C as Wt}from"./circle-alert-C-wls1At.js";import{C as tt}from"./circle-check-stN0mdxN.js";import{P as Le}from"./printer-CBGx7M8V.js";import{S as Ft}from"./save-Df7Z1C2J.js";import{C as $t}from"./circle-x-Ce8o3Dm3.js";import{S as Ut}from"./sparkles-ydWh_c9S.js";import{U as Ht}from"./user-x-C5obkx5m.js";import{R as Qt}from"./rotate-ccw-D7nW9vLr.js";import{M as Vt}from"./maximize-2-0_kWpdks.js";import{S as Gt}from"./sliders-vertical-BBH-5KKK.js";import"./plus-608FFsOX.js";const ct=b.createContext(!1),Kt=()=>b.useContext(ct);ct.Provider;function Yt(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const Jt=b.createContext(Yt()),Xt=()=>b.useContext(Jt);var L,g,pe,_,te,ie,U,he,re,oe,se,ne,J,le,y,ce,Be,Me,De,We,Fe,$e,Ue,He,it,Zt=(it=class extends kt{constructor(n,a){super();O(this,y);O(this,L);O(this,g);O(this,pe);O(this,_);O(this,te);O(this,ie);O(this,U);O(this,he);O(this,re);O(this,oe);O(this,se);O(this,ne);O(this,J);O(this,le,new Set);this.options=a,k(this,L,n),k(this,U,null),this.bindMethods(),this.setOptions(a)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,g).addObserver(this),st(i(this,g),this.options)?N(this,y,ce).call(this):this.updateResult(),N(this,y,Fe).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Qe(i(this,g),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Qe(i(this,g),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,N(this,y,$e).call(this),N(this,y,Ue).call(this),i(this,g).removeObserver(this)}setOptions(n){const a=this.options,r=i(this,g);if(this.options=i(this,L).defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof z(this.options.enabled,i(this,g))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");N(this,y,He).call(this),i(this,g).setOptions(this.options),a._defaulted&&!Oe(this.options,a)&&i(this,L).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,g),observer:this});const l=this.hasListeners();l&&nt(i(this,g),r,this.options,a)&&N(this,y,ce).call(this),this.updateResult(),l&&(i(this,g)!==r||z(this.options.enabled,i(this,g))!==z(a.enabled,i(this,g))||z(this.options.staleTime,i(this,g))!==z(a.staleTime,i(this,g)))&&N(this,y,Me).call(this);const d=N(this,y,De).call(this);l&&(i(this,g)!==r||z(this.options.enabled,i(this,g))!==z(a.enabled,i(this,g))||d!==i(this,J))&&N(this,y,We).call(this,d)}getOptimisticResult(n){const a=i(this,L).getQueryCache().build(i(this,L),n),r=this.createResult(a,n);return Oe(this.getCurrentResult(),r)||(k(this,_,r),k(this,ie,this.options),k(this,te,i(this,g).state)),r}getCurrentResult(){return i(this,_)}trackResult(n,a){return new Proxy(n,{get:(r,l)=>(this.trackProp(l),a==null||a(l),Reflect.get(r,l))})}trackProp(n){i(this,le).add(n)}getCurrentQuery(){return i(this,g)}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const a=i(this,L).defaultQueryOptions(n),r=i(this,L).getQueryCache().build(i(this,L),a);let l=()=>{},d;const h=new Promise(w=>{d=w,l=i(this,L).getQueryCache().subscribe(E=>{E.type==="updated"&&E.query.queryHash===r.queryHash&&r.state.data!==void 0&&(l(),w(this.createResult(r,a)))})});return Promise.race([r.fetch(a).then(()=>{const w=this.createResult(r,a);return d==null||d(w),w}).finally(()=>{l()}),h])}fetch(n){return N(this,y,ce).call(this,{...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,_)))}createResult(n,a){var D;const r=i(this,g),l=this.options,d=i(this,_),h=i(this,te),w=i(this,ie),E=n!==r?n.state:i(this,pe),{state:P}=n;let v={...P},H=!1,C;if(a._optimisticResults){const B=this.hasListeners(),je=!B&&st(n,a),ue=B&&nt(n,r,a,l);(je||ue)&&(v={...v,...zt(P.data,n.options)}),a._optimisticResults==="isRestoring"&&(v.fetchStatus="idle")}let{error:X,errorUpdatedAt:Q,status:F}=v;C=v.data;let M=!1;if(a.placeholderData!==void 0&&C===void 0&&F==="pending"){let B;d!=null&&d.isPlaceholderData&&a.placeholderData===(w==null?void 0:w.placeholderData)?(B=d.data,M=!0):B=typeof a.placeholderData=="function"?a.placeholderData((D=i(this,oe))==null?void 0:D.state.data,i(this,oe)):a.placeholderData,B!==void 0&&(F="success",C=et(d==null?void 0:d.data,B,a),H=!0)}if(a.select&&C!==void 0&&!M)if(d&&C===(h==null?void 0:h.data)&&a.select===i(this,he))C=i(this,re);else try{k(this,he,a.select),C=a.select(C),C=et(d==null?void 0:d.data,C,a),k(this,re,C),k(this,U,null)}catch(B){k(this,U,B)}else C===void 0&&k(this,U,null);i(this,U)&&(X=i(this,U),C=i(this,re),Q=(d==null?void 0:d.error)===X?d.errorUpdatedAt:Date.now(),F="error",H=!1);const ae=v.fetchStatus==="fetching",$=F==="pending",Z=F==="error",V=$&&ae,G=C!==void 0;return{status:F,fetchStatus:v.fetchStatus,isPending:$,isSuccess:F==="success",isError:Z,isInitialLoading:V,isLoading:V,data:C,dataUpdatedAt:v.dataUpdatedAt,error:X,errorUpdatedAt:Q,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:n.isFetched(),isFetchedAfterMount:v.dataUpdateCount>E.dataUpdateCount||v.errorUpdateCount>E.errorUpdateCount,isFetching:ae,isRefetching:ae&&!$,isLoadingError:Z&&!G,isPaused:v.fetchStatus==="paused",isPlaceholderData:H,isRefetchError:Z&&G,isStale:Ve(n,a),refetch:this.refetch,isEnabled:z(a.enabled,n)!==!1}}updateResult(){const n=i(this,_),a=this.createResult(i(this,g),this.options);if(k(this,te,i(this,g).state),k(this,ie,this.options),i(this,te).data!==void 0&&k(this,oe,i(this,g)),Oe(a,n))return;k(this,_,a);const l=(()=>{if(!n)return!0;const{notifyOnChangeProps:d}=this.options,h=typeof d=="function"?d():d;if(h==="all"||!h&&!i(this,le).size||this.options.throwOnError&&i(this,_).error!==n.error)return!0;for(const w of h??i(this,le))if(i(this,_)[w]!==n[w])return!0;return!1})();ot.batch(()=>{l&&this.listeners.forEach(d=>{d(i(this,_))}),i(this,L).getQueryCache().notify({query:i(this,g),type:"observerResultsUpdated"})})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&N(this,y,Fe).call(this)}},L=new WeakMap,g=new WeakMap,pe=new WeakMap,_=new WeakMap,te=new WeakMap,ie=new WeakMap,U=new WeakMap,he=new WeakMap,re=new WeakMap,oe=new WeakMap,se=new WeakMap,ne=new WeakMap,J=new WeakMap,le=new WeakMap,y=new WeakSet,ce=function(n){N(this,y,He).call(this);let a=i(this,g).fetch(this.options,n);return n!=null&&n.throwOnError||(a=a.catch(rt)),a},Be=function(n){return!Ct()&&z(this.options.enabled,i(this,g))!==!1&&Nt(n)},Me=function(){N(this,y,$e).call(this);const n=z(this.options.staleTime,i(this,g));if(i(this,_).isStale||!N(this,y,Be).call(this,n))return;const a=It(i(this,_).dataUpdatedAt,n)+1;k(this,se,we.setTimeout(()=>{i(this,_).isStale||this.updateResult()},a))},De=function(){return z(this.options.refetchInterval,i(this,g))??!1},We=function(n){N(this,y,Ue).call(this),k(this,J,n),!(i(this,J)===0||!N(this,y,Be).call(this,i(this,J)))&&k(this,ne,we.setInterval(()=>{(this.options.refetchIntervalInBackground||Rt.isFocused())&&N(this,y,ce).call(this)},i(this,J)))},Fe=function(){N(this,y,Me).call(this),N(this,y,We).call(this,N(this,y,De).call(this))},$e=function(){i(this,se)!==void 0&&(we.clearTimeout(i(this,se)),k(this,se,void 0))},Ue=function(){i(this,ne)!==void 0&&(we.clearInterval(i(this,ne)),k(this,ne,void 0))},He=function(){const n=i(this,L).getQueryCache().build(i(this,L),this.options);if(n===i(this,g))return;const a=i(this,g);k(this,g,n),k(this,pe,n.state),this.hasListeners()&&(a==null||a.removeObserver(this),n.addObserver(this))},it);function qt(t,n){return z(n.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&z(n.retryOnMount,t)===!1)}function st(t,n){return qt(t,n)||t.state.data!==void 0&&Qe(t,n,n.refetchOnMount)}function Qe(t,n,a){if(z(n.enabled,t)!==!1&&z(n.staleTime,t)!=="static"){const r=z(a,t);return r==="always"||r!==!1&&Ve(t,n)}return!1}function nt(t,n,a,r){return(t!==n||z(r.enabled,t)===!1)&&(!a.suspense||t.state.status!=="error")&&Ve(t,a)}function Ve(t,n){return z(n.enabled,t)!==!1&&t.isStaleByTime(z(n.staleTime,t))}const es=(t,n,a)=>{const r=(a==null?void 0:a.state.status)==="error"&&typeof t.throwOnError=="function"?lt(t.throwOnError,[a.state.error,a]):t.throwOnError;(t.suspense||r)&&(n.isReset()||(t.retryOnMount=!1))},ts=t=>{b.useEffect(()=>{t.clearReset()},[t])},ss=({result:t,errorResetBoundary:n,throwOnError:a,query:r,suspense:l})=>t.isError&&!n.isReset()&&!t.isFetching&&r&&(l&&t.data===void 0||lt(a,[t.error,r])),ns=t=>{if(t.suspense){const a=l=>l==="static"?l:Math.max(l??1e3,1e3),r=t.staleTime;t.staleTime=typeof r=="function"?(...l)=>a(r(...l)):a(r),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3))}},as=(t,n)=>(t==null?void 0:t.suspense)&&n.isPending,is=(t,n,a)=>n.fetchOptimistic(t).catch(()=>{a.clearReset()});function rs(t,n,a){const r=Kt(),l=Xt(),d=Et(),h=d.defaultQueryOptions(t),w=d.getQueryCache().get(h.queryHash),E=t.subscribed!==!1;h._optimisticResults=r?"isRestoring":E?"optimistic":void 0,ns(h),es(h,l,w),ts(l);const[P]=b.useState(()=>new n(d,h)),v=P.getOptimisticResult(h);b.useEffect(()=>{P.setOptions(h)},[h,P]);const H=!r&&E;if(b.useSyncExternalStore(b.useCallback(C=>{const X=H?P.subscribe(ot.batchCalls(C)):rt;return P.updateResult(),X},[P,H]),()=>P.getCurrentResult(),()=>P.getCurrentResult()),as(h,v))throw is(h,P,l);if(ss({result:v,errorResetBoundary:l,throwOnError:h.throwOnError,query:w,suspense:h.suspense}))throw v.error;return h.notifyOnChangeProps?v:P.trackResult(v)}function pt(t,n){return rs(t,Zt)}/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=Tt("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]),ht=()=>{var d;const t=_e(h=>h.user),n=_e(h=>h.token),a=(t==null?void 0:t.institutionId)||((d=t==null?void 0:t.institution)==null?void 0:d._id)||(t==null?void 0:t.institution)||"unassigned",r=(t==null?void 0:t._id)||(t==null?void 0:t.id)||"unassigned",l=!!(n&&t&&(t._id||t.id));return{institutionId:String(a),userId:String(r),isAuthenticated:l,user:t}},ls=(t={})=>{const{institutionId:n,userId:a,isAuthenticated:r}=ht();return pt({queryKey:dt.metadata.classes(n,a),queryFn:async({signal:l})=>{var h,w;return((w=(h=(await Se.get("/students/classes",{signal:l})).data)==null?void 0:h.data)==null?void 0:w.classes)||[]},enabled:r&&(t.enabled??!0),staleTime:t.staleTime??5*60*1e3,gcTime:t.gcTime??30*60*1e3,...t})},ds=(t={})=>{const{institutionId:n,userId:a,isAuthenticated:r}=ht();return pt({queryKey:dt.metadata.sections(n,a),queryFn:async({signal:l})=>{var h,w;return((w=(h=(await Se.get("/students/sections",{signal:l})).data)==null?void 0:h.data)==null?void 0:w.sections)||[]},enabled:r&&(t.enabled??!0),staleTime:t.staleTime??5*60*1e3,gcTime:t.gcTime??30*60*1e3,...t})},Y=t=>{if(t==null)return null;const n=String(t).trim();if(!n)return null;const a={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},r=n.replace(/[০-৯]/g,d=>a[d]),l=parseFloat(r.replace(/[^0-9.-]/g,""));return isNaN(l)?null:l};function ee(t){if(!t)return 999999;const n={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},a=String(t).trim().toUpperCase().replace(/[০-৯]/g,h=>n[h]),l=a.replace(/^(?:ANG20|ANB20|ANG|ANB)/i,"").match(/(\d+)/);if(l)return parseInt(l[1],10);const d=a.replace(/\D/g,"");return d?parseInt(d,10):999999}const cs=[{key:"serial",label:"ক্রমিক নং (#)"},{key:"roll",label:"রোল নম্বর"},{key:"id",label:"স্টুডেন্ট আইডি"},{key:"photo",label:"প্রোফাইল ছবি"},{key:"name",label:"শিক্ষার্থীর নাম"},{key:"fatherName",label:"পিতার নাম"},{key:"phone",label:"অভিভাবকের মোবাইল"},{key:"classSection",label:"শ্রেণি ও সেকশন"},{key:"status",label:"সমাবেশ স্ট্যাটাস"},{key:"signBox",label:"স্বাক্ষর বক্স (Sign)"},{key:"remarks",label:"মন্তব্য"}],at=["serial","roll","id","photo","name","fatherName","phone","classSection","status","signBox","remarks"];function Ts(){const{user:t}=_e(),{madrasahName:n,branchName:a}=Lt(t),r=()=>new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Dhaka"}),[l,d]=b.useState(r()),{data:h=[]}=ls(),{data:w=[]}=ds(),[E,P]=b.useState("all"),[v,H]=b.useState("all"),[C,X]=b.useState(""),[Q,F]=b.useState("all"),[M,ae]=b.useState("roll"),[$,Z]=b.useState("asc"),V=s=>{M===s?Z(o=>o==="asc"?"desc":"asc"):(ae(s),Z("asc"))},G=({col:s})=>M!==s?e.jsx("span",{style:{opacity:.35,fontSize:"0.7rem",marginLeft:"4px"},children:"⇅"}):e.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"4px",color:"var(--primary)",fontWeight:800},children:$==="asc"?"▲":"▼"}),[D,B]=b.useState([]),[je,ue]=b.useState(!0),[Ge,Ke]=b.useState(!1),[me,Ye]=b.useState(null),[ut,de]=b.useState(!1),[I,Je]=b.useState("landscape"),[q,mt]=b.useState("id_custom"),[ke,Ce]=b.useState(at),Xe=["শ্রেণী শিক্ষকের স্বাক্ষর","প্রধান শিক্ষক, বালক শাখা","প্রতিষ্ঠান প্রধান"],[xe,xt]=b.useState(()=>{try{const s=localStorage.getItem("annur_footer_roles__assembly_attendance");if(s){const o=JSON.parse(s);if(Array.isArray(o))return o}return Xe}catch{return Xe}}),[ft,ps]=b.useState(()=>{try{const s=localStorage.getItem("annur_footer_custom_roles");return s?JSON.parse(s):[]}catch{return[]}}),[hs,us]=b.useState(""),Ne=["super_admin","co_super_admin","admin","principal","vice_principal","teacher","hifz_teacher"].includes(t==null?void 0:t.userType)||["co_super_admin","admin"].includes(t==null?void 0:t.adminRole),fe=(s,o="success")=>{Ye({message:s,type:o}),setTimeout(()=>Ye(null),4e3)},gt=b.useMemo(()=>{const s=[{value:"all",label:"সকল সেকশন"}];return _t.forEach(o=>{s.push({value:o,label:`শাখা/সেকশন ${o}`})}),w.forEach(o=>{const x=(o.name||"").trim();x&&!s.some(f=>f.value===o._id||f.value===x)&&s.push({value:o._id,label:x})}),s},[w]),Ie=async()=>{var s,o,x;try{ue(!0);const f={date:l};E!=="all"&&(f.classLevel=E),v!=="all"&&(f.section=v);const u=await Se.get("/attendance/assembly",{params:f});(s=u.data)!=null&&s.success&&B(u.data.data.records||[])}catch(f){fe(((x=(o=f.response)==null?void 0:o.data)==null?void 0:x.message)||"সমাবেশ উপস্থিতি লোড করতে সমস্যা হয়েছে","error")}finally{ue(!1)}};b.useEffect(()=>{Ie()},[l,E,v]);const ge=b.useMemo(()=>{const s=D.length;let o=0,x=0,f=0;D.forEach(p=>{p.status==="present"?o++:p.status==="absent"?x++:f++});const u=s>0?Math.round(o/s*100):0;return{total:s,present:o,absent:x,resetCount:f,presentRate:u}},[D]),Ze=b.useMemo(()=>{let s=[...D];Q!=="all"&&(Q==="reset"?s=s.filter(u=>!u.status||u.status==="reset"):s=s.filter(u=>u.status===Q));const o=C.trim(),x=Y(o),f=x!==null&&/^[0-9০-৯\s]+$/.test(o);if(o){const u=o.toLowerCase(),p={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},m={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"},R=u.replace(/[০-৯]/g,S=>p[S]),c=u.replace(/[0-9]/g,S=>m[S]),A=[...new Set([u,R,c])];s=s.filter(S=>{const j=String(S.rollNumber||"").trim(),W=Y(S.rollNumber),be=ee(S.studentCode),K=(S.studentCode||"").toLowerCase();if(f)return!!(W!==null&&W===x||be!==null&&be===x||j.startsWith(R)||j.startsWith(c)||K===R||K===c||K===u);const Ee=(S.studentName||"").toLowerCase(),ye=(S.fatherName||"").toLowerCase(),ve=j.replace(/[০-৯]/g,T=>p[T]),wt=j.replace(/[0-9]/g,T=>m[T]),St=K.replace(/[০-৯]/g,T=>p[T]),jt=K.replace(/[0-9]/g,T=>m[T]);return A.some(T=>Ee.includes(T)||ye.includes(T)||j.includes(T)||ve.includes(T)||wt.includes(T)||K.includes(T)||St.includes(T)||jt.includes(T))})}return(M||o)&&s.sort((u,p)=>{if(o&&f){const R=Y(u.rollNumber),c=Y(p.rollNumber),A=ee(u.studentCode),S=ee(p.studentCode);let j=99,W=99;if(R===x?j=0:A===x?j=1:j=2,c===x?W=0:S===x?W=1:W=2,j!==W)return j-W}let m=0;if(M==="roll"){const R=Y(u.rollNumber),c=Y(p.rollNumber);R!==null&&c!==null?m=R-c:R!==null?m=-1:c!==null?m=1:m=String(u.rollNumber||"").localeCompare(String(p.rollNumber||""),"bn")}else if(M==="studentId"){const R=ee(u.studentCode),c=ee(p.studentCode);R!==c?m=R-c:m=String(u.studentCode||"").localeCompare(String(p.studentCode||""))}else if(M==="name")m=(u.studentName||"").localeCompare(p.studentName||"","bn",{sensitivity:"base"});else if(M==="fatherName")m=(u.fatherName||"").localeCompare(p.fatherName||"","bn",{sensitivity:"base"});else if(M==="status"){const R={present:1,absent:2,reset:3,"":3},c=R[u.status]||3,A=R[p.status]||3;m=c-A}return $==="asc"?m:-m}),s},[D,Q,C,M,$]),Re=(s,o)=>{B(x=>x.map(f=>f.studentId===s?{...f,status:o}:f))},ze=s=>{B(x=>x.map(f=>({...f,status:s}))),fe(`সকল শিক্ষার্থীকে "${s==="present"?"উপস্থিত":s==="absent"?"অনুপস্থিত":"রিসেট"}" করা হয়েছে`)},bt=(s,o,x)=>{B(f=>f.map(u=>u.studentId===s?{...u,[o]:x}:u))},yt=async()=>{var s,o,x;if(Ne)try{Ke(!0);const f={date:l,classLevel:E!=="all"?E:"",section:v!=="all"?v:"",attendances:D.map(p=>({studentId:p.studentId,classLevelId:p.classLevelId,sectionId:p.sectionId,branch:p.branch,status:p.status,inTime:p.inTime,remarks:p.remarks}))},u=await Se.post("/attendance/assembly",f);(s=u.data)!=null&&s.success&&(fe(u.data.message||"সমাবেশ উপস্থিতি সফলভাবে সংরক্ষিত হয়েছে"),Ie())}catch(f){fe(((x=(o=f.response)==null?void 0:o.data)==null?void 0:x.message)||"সংরক্ষণ করতে সমস্যা হয়েছে","error")}finally{Ke(!1)}},vt=()=>{const s=window.open("","_blank");if(!s){alert("পপআপ উইন্ডো ব্লক করা রয়েছে! অনুগ্রহ করে ব্রাউজারে পপআপ অনুমোদন করুন।");return}let o=[...D];q==="id_custom"?o.sort((c,A)=>{const S=ee(c.studentCode),j=ee(A.studentCode);return S!==j?S-j:(c.studentCode||"").localeCompare(A.studentCode||"")}):q==="roll"?o.sort((c,A)=>{const S=Y(c.rollNumber),j=Y(A.rollNumber);return S!==null&&j!==null?S-j:S!==null?-1:j!==null?1:String(c.rollNumber||"").localeCompare(String(A.rollNumber||""),"bn")}):q==="name"&&o.sort((c,A)=>(c.studentName||"").localeCompare(A.studentName||"","bn"));const x=new Date(l).toLocaleDateString("bn-BD",{year:"numeric",month:"long",day:"numeric",weekday:"long"}),f=h.find(c=>c._id===E),u=E==="all"?"সকল শ্রেণি":(f==null?void 0:f.name)||E;let p="";ke.forEach(c=>{switch(c){case"serial":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">#</th>';break;case"roll":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">রোল</th>';break;case"id":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">আইডি</th>';break;case"photo":p+='<th style="width: 32px; white-space: nowrap; text-align: center; padding: 6px 4px; border: 1px solid #0d9488;">ছবি</th>';break;case"name":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">শিক্ষার্থীর নাম</th>';break;case"fatherName":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 12px; border: 1px solid #0d9488;">পিতার নাম</th>';break;case"phone":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মোবাইল নং</th>';break;case"classSection":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">শ্রেণি ও সেকশন</th>';break;case"status":p+='<th style="width: 1%; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">সমাবেশ স্ট্যাটাস</th>';break;case"signBox":p+='<th style="width: 85px; white-space: nowrap; text-align: center; padding: 6px 8px; border: 1px solid #0d9488;">স্বাক্ষর বক্স</th>';break;case"remarks":p+='<th style="text-align: center; padding: 6px 10px; border: 1px solid #0d9488;">মন্তব্য</th>';break}});let m="";o.forEach((c,A)=>{const S=c.status==="present",j=c.status==="absent",W=S?"#15803d":j?"#b91c1c":"#64748b",be=S?"#dcfce7":j?"#fee2e2":"#f1f5f9",K=S?"উপস্থিত":j?"অনুপস্থিত":"—";m+='<tr style="height: 33px;">',ke.forEach(Ee=>{switch(Ee){case"serial":m+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${A+1}</td>`;break;case"roll":m+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-weight: bold; font-size: 11.5px; padding: 4px 6px; border: 1px solid #cbd5e1;">${c.rollNumber||"—"}</td>`;break;case"id":m+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #334155; padding: 4px 6px; border: 1px solid #cbd5e1;">${c.studentCode||"—"}</td>`;break;case"photo":{const ye=c.photo&&String(c.photo).trim()!==""?String(c.photo).trim():null,ve='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:auto;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';ye?m+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc; position: relative;">
                    <img src="${ye}" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center;">
                      ${ve}
                    </div>
                  </div>
                </td>
              `:m+=`
                <td style="width: 32px; height: 33px; text-align: center; vertical-align: middle; padding: 2px 4px; border: 1px solid #cbd5e1;">
                  <div style="width: 24px; height: 26px; margin: 0 auto; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px; border: 1px solid #cbd5e1; background: #f8fafc;">
                    ${ve}
                  </div>
                </td>
              `;break}case"name":m+=`<td style="width: 1%; white-space: nowrap; font-weight: 700; font-size: 11.5px; color: #0f172a; padding: 4px 10px; border: 1px solid #cbd5e1;">${c.studentName}</td>`;break;case"fatherName":m+=`<td style="width: 1%; white-space: nowrap; font-size: 11px; color: #334155; font-weight: 500; padding: 4px 10px; border: 1px solid #cbd5e1;">${c.fatherName||"—"}</td>`;break;case"phone":m+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-family: monospace; font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1;">${c.guardianPhone||c.phone||"—"}</td>`;break;case"classSection":m+=`<td style="width: 1%; white-space: nowrap; text-align: center; font-size: 11px; padding: 4px 6px; border: 1px solid #cbd5e1;">${c.className||"—"}${c.sectionName&&c.sectionName!=="—"?` (${c.sectionName})`:""}</td>`;break;case"status":m+=`
              <td style="width: 1%; white-space: nowrap; text-align: center; padding: 4px 6px; border: 1px solid #cbd5e1;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; color: ${W}; background: ${be}; border: 1px solid ${W};">
                  ${K}
                </span>
              </td>
            `;break;case"signBox":m+=`
              <td style="width: 85px; height: 33px; border: 1px dashed #94a3b8; background: #fafafa; text-align: center; vertical-align: middle; padding: 2px 4px;">
                <div style="color: #cbd5e1; font-size: 9px;">স্বাক্ষর</div>
              </td>
            `;break;case"remarks":m+=`<td style="font-size: 11px; color: #1e293b; padding: 4px 8px; border: 1px solid #cbd5e1; vertical-align: middle;">${c.remarks||""}</td>`;break}}),m+="</tr>"});const R=`<!DOCTYPE html>
    <html lang="bn">
    <head>
      <meta charset="UTF-8">
      <title>সমাবেশ উপস্থিতি বিবরণী রিপোর্ট - ${n}</title>
      ${Bt(I)}
      <style id="dynamic-page-orientation">
        @page {
          size: A4 ${I};
          margin: ${I==="landscape"?"6mm 8mm":"8mm 10mm"} !important;
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
          width: ${I==="landscape"?"281mm":"194mm"};
        }
        .print-page {
          position: relative;
          width: 100%;
          height: calc(${I==="landscape"?"210mm":"297mm"} - ${I==="landscape"?"12mm":"16mm"});
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
          width: ${I==="landscape"?"360px":"420px"};
          height: ${I==="landscape"?"360px":"420px"};
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
          <button id="btn-land" onclick="setOrientation('landscape')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${I==="landscape"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📑 ল্যান্ডস্কেপ</button>
          <button id="btn-port" onclick="setOrientation('portrait')" style="padding: 5px 12px; border-radius: 6px; border: none; background: ${I==="portrait"?"#0f766e":"#334155"}; color: #fff; cursor: pointer; font-weight: 700; font-size: 11.5px;">📄 পোর্ট্রেট</button>
          <button onclick="window.print()" style="padding: 5px 16px; border-radius: 6px; border: none; background: #10b981; color: #fff; cursor: pointer; font-weight: 700; font-size: 12px;">🖨️ প্রিন্ট / PDF ডাউনলোড</button>
          <button onclick="window.close()" style="padding: 5px 12px; border-radius: 6px; border: none; background: #64748b; color: #fff; cursor: pointer; font-size: 11.5px;">✕ বন্ধ</button>
        </div>
      </div>

      <!-- Container where partitioned pages will be placed -->
      <div id="pages-container"></div>

      <!-- Hidden source content used for accurate DOM measurement -->
      <div id="raw-content">
        <div class="header-wrap">
          ${Mt({orientation:I,showWatermark:!1})}

          <!-- Single aligned line: Left: তারিখ, Center: দৈনিক সমাবেশ..., Right: শ্রেণি -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 6px; border-bottom: 2px solid #0f172a; margin-top: 2px; margin-bottom: 6px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: left;">
              <strong>তারিখ:</strong> ${x}
            </div>
            <div style="text-align: center; flex: 1;">
              <span style="display: inline-block; font-size: 12.5px; font-weight: 800; color: #0f172a; padding: 3px 14px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px;">
                📋 দৈনিক সমাবেশ ও শৃঙ্খলা উপস্থিতি বিবরণী
              </span>
            </div>
            <div style="font-size: 11.5px; font-weight: 700; color: #1e293b; min-width: 160px; text-align: right;">
              <strong>শ্রেণি:</strong> ${u}
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr style="background: #0f766e; color: #fff;">
              ${p}
            </tr>
          </thead>
          <tbody>
            ${m}
          </tbody>
        </table>

        <!-- Footer Signatures (Guaranteed distinct, centered signature lines docked to bottom of last page) -->
        <div class="footer-wrap" style="width: 100%; padding-top: 16px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: ${xe.length===1?"flex-end":"space-between"}; align-items: flex-end; gap: 16px; width: 100%;">
            ${xe.map(c=>`
              <div style="${xe.length===1?"flex: 0 0 calc((100% - 32px) / 3);":"flex: 1;"} text-align: center; min-width: 0; padding: 0 10px;">
                <div style="border-top: 1.5px solid #0f172a; width: 175px; max-width: 90%; margin: 0 auto; padding-top: 5px; font-weight: 700; font-size: 11.5px; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${c}
                </div>
                <div style="font-size: 11px; color: #64748b; font-weight: 500; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${n}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <script>
        let currentOrientation = '${I}';

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
    </html>`;s.document.open(),s.document.write(R),s.document.close(),de(!1)};return e.jsxs("div",{className:"page-container animate-fade-in",children:[me&&e.jsxs("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:99999,background:me.type==="error"?"var(--danger)":"var(--success)",color:"#fff",padding:"12px 20px",borderRadius:"10px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"8px",animation:"fadeIn 0.3s ease",maxWidth:"380px"},children:[me.type==="error"?e.jsx(Wt,{size:18}):e.jsx(tt,{size:18}),me.message]}),e.jsxs("div",{className:"page-header assembly-page-header",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"page-title flex-center gap-8",children:[e.jsx(Pe,{className:"text-primary",size:26}),"সমাবেশ উপস্থিতি (Assembly Attendance)"]}),e.jsxs("p",{className:"page-subtitle",children:["শাখা: ",a," · সকালের অ্যাসেম্বলি/সমাবেশ উপস্থিতি গ্রহণ ও রিপোর্ট"]})]}),e.jsxs("div",{className:"assembly-header-actions",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn btn-outline btn-sm flex-center gap-6 btn-refresh",onClick:Ie,title:"রিফ্রেশ",children:e.jsx(Ae,{size:15})}),e.jsxs("button",{className:"btn btn-secondary btn-sm flex-center gap-6 btn-print",onClick:()=>de(!0),disabled:D.length===0,title:"সমাবেশ রিপোর্ট PDF",style:{background:"#f8fafc",borderColor:"var(--border-color)",color:"#0f766e",fontWeight:600},children:[e.jsx(Le,{size:16})," ",e.jsx("span",{children:"সমাবেশ রিপোর্ট PDF"})]}),Ne&&e.jsxs("button",{className:"btn btn-primary btn-sm flex-center gap-6 btn-save",onClick:yt,disabled:Ge||D.length===0,children:[Ge?e.jsx(Ae,{size:15,className:"spin"}):e.jsx(Ft,{size:15}),e.jsx("span",{children:"হাজিরা সংরক্ষণ করুন"})]})]})]}),e.jsx("div",{className:"assembly-stats-grid",children:[{label:"মোট শিক্ষার্থী",value:ge.total,unit:"জন",color:"var(--primary)",bg:"rgba(99,102,241,0.1)",Icon:Pe},{label:"সমাবেশে উপস্থিত",value:ge.present,unit:"জন",color:"var(--success)",bg:"rgba(16,185,129,0.1)",Icon:tt},{label:"অনুপস্থিত",value:ge.absent,unit:"জন",color:"var(--danger)",bg:"rgba(239,68,68,0.1)",Icon:$t},{label:"উপস্থিতির হার",value:`${ge.presentRate}%`,color:"#0284c7",bg:"rgba(2,132,199,0.1)",Icon:Ut}].map(({label:s,value:o,unit:x,color:f,bg:u,Icon:p})=>e.jsx("div",{className:"card assembly-stat-card",children:e.jsxs("div",{className:"assembly-stat-content",children:[e.jsxs("div",{children:[e.jsx("div",{className:"assembly-stat-label",children:s}),e.jsxs("div",{className:"assembly-stat-value",style:{color:f},children:[o,x&&e.jsx("span",{style:{fontSize:"0.82rem",marginLeft:"2px"},children:x})]})]}),e.jsx("div",{className:"assembly-stat-icon-wrap",style:{background:u},children:e.jsx(p,{size:18,color:f})})]})},s))}),e.jsx("div",{className:"card assembly-filter-card",children:e.jsxs("div",{className:"assembly-filter-container",children:[e.jsx("div",{className:"assembly-filter-item-date",children:e.jsx("input",{type:"date",value:l,onChange:s=>d(s.target.value),className:"form-input"})}),e.jsx("div",{className:"assembly-filter-item-class",children:e.jsxs("select",{value:E,onChange:s=>P(s.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল শ্রেণি"}),h.map(s=>e.jsx("option",{value:s._id,children:s.name},s._id))]})}),e.jsx("div",{className:"assembly-filter-item-section",children:e.jsx("select",{value:v,onChange:s=>H(s.target.value),className:"form-input",children:gt.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))})}),e.jsx("div",{className:"assembly-filter-item-status",children:e.jsxs("select",{value:Q,onChange:s=>F(s.target.value),className:"form-input",children:[e.jsx("option",{value:"all",children:"সকল স্ট্যাটাস"}),e.jsx("option",{value:"present",children:"উপস্থিত"}),e.jsx("option",{value:"absent",children:"অনুপস্থিত"}),e.jsx("option",{value:"reset",children:"রিসেট/খালি"})]})}),e.jsxs("div",{className:"assembly-filter-item-search",children:[e.jsx(Ot,{size:14,className:"assembly-search-icon"}),e.jsx("input",{type:"text",placeholder:"নাম, পিতা বা রোল...",value:C,onChange:s=>X(s.target.value),className:"form-input"})]}),e.jsxs("div",{className:"assembly-filter-item-sort",children:[e.jsxs("select",{value:M,onChange:s=>ae(s.target.value),className:"form-input assembly-sort-select",title:"সর্ট কলাম নির্বাচন করুন",children:[e.jsx("option",{value:"roll",children:"রোল অনুযায়ী"}),e.jsx("option",{value:"studentId",children:"আইডি অনুযায়ী"}),e.jsx("option",{value:"name",children:"নাম অনুযায়ী"}),e.jsx("option",{value:"fatherName",children:"পিতার নাম অনুযায়ী"}),e.jsx("option",{value:"status",children:"স্ট্যাটাস অনুযায়ী"})]}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm assembly-sort-btn",onClick:()=>Z(s=>s==="asc"?"desc":"asc"),title:$==="asc"?"আরোহী (Ascending) — ক্লিক করে অবরোহী করুন":"অবরোহী (Descending) — ক্লিক করে আরোহী করুন",children:e.jsx("span",{style:{fontWeight:700},children:$==="asc"?"▲ আরোহী":"▼ অবরোহী"})})]}),Ne&&e.jsxs("div",{className:"assembly-filter-actions",children:[e.jsxs("button",{type:"button",onClick:()=>ze("present"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--success)",borderColor:"rgba(16,185,129,0.3)"},title:"সবাই উপস্থিত",children:[e.jsx(Pt,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই উপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"উপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>ze("absent"),className:"btn btn-outline btn-xs flex-center gap-4",style:{color:"var(--danger)",borderColor:"rgba(239,68,68,0.3)"},title:"সবাই অনুপস্থিত",children:[e.jsx(Ht,{size:12}),e.jsx("span",{className:"assembly-mark-text-full",children:"সবাই অনুপস্থিত"}),e.jsx("span",{className:"assembly-mark-text-short",children:"অনুপস্থিত"})]}),e.jsxs("button",{type:"button",onClick:()=>ze(""),className:"btn btn-ghost btn-xs flex-center gap-4",style:{color:"var(--text-muted)",border:"1px solid var(--border-color)"},title:"সবাই রিসেট",children:[e.jsx(Qt,{size:12}),e.jsx("span",{children:"রিসেট"})]})]})]})}),je?e.jsx("div",{className:"flex-center",style:{height:"35vh"},children:e.jsx(Ae,{className:"spin text-primary",size:32})}):e.jsx("div",{className:"card table-responsive",style:{padding:0},children:e.jsxs("table",{className:"table",style:{minWidth:"960px",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>V("roll"),style:{width:"70px",minWidth:"70px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"রোল অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["রোল ",e.jsx(G,{col:"roll"})]})}),e.jsx("th",{onClick:()=>V("studentId"),style:{width:"115px",minWidth:"105px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"আইডি অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["আইডি ",e.jsx(G,{col:"studentId"})]})}),e.jsx("th",{onClick:()=>V("name"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"শিক্ষার্থীর নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["শিক্ষার্থীর নাম ",e.jsx(G,{col:"name"})]})}),e.jsx("th",{onClick:()=>V("fatherName"),style:{minWidth:"170px",cursor:"pointer",userSelect:"none"},title:"পিতার নাম অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center"},children:["পিতার নাম (Father's Name) ",e.jsx(G,{col:"fatherName"})]})}),e.jsx("th",{style:{width:"130px",minWidth:"120px",textAlign:"center"},children:"শ্রেণি ও সেকশন"}),e.jsx("th",{onClick:()=>V("status"),style:{width:"235px",minWidth:"225px",textAlign:"center",cursor:"pointer",userSelect:"none"},title:"সমাবেশ স্ট্যাটাস অনুযায়ী সাজাতে ক্লিক করুন",children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["সমাবেশ স্ট্যাটাস ",e.jsx(G,{col:"status"})]})}),e.jsx("th",{style:{width:"220px",minWidth:"180px",textAlign:"left"},children:"মন্তব্য"})]})}),e.jsx("tbody",{children:Ze.length>0?Ze.map(s=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"center",fontWeight:700,fontFamily:"monospace",fontSize:"0.95rem",color:"var(--primary)"},children:s.rollNumber?s.rollNumber:"—"}),e.jsx("td",{style:{textAlign:"center",fontFamily:"monospace",fontSize:"0.82rem",color:"var(--text-muted)"},children:s.studentCode||"—"}),e.jsx("td",{children:e.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem"},children:s.studentName})}),e.jsx("td",{children:e.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.fatherName||"—"})}),e.jsxs("td",{style:{textAlign:"center",fontSize:"0.85rem",whiteSpace:"nowrap"},children:[s.className,s.sectionName&&s.sectionName!=="—"&&e.jsxs("span",{className:"text-muted",style:{fontSize:"0.78rem",marginLeft:"4px"},children:["(",s.sectionName,")"]})]}),e.jsx("td",{style:{textAlign:"center",whiteSpace:"nowrap"},children:e.jsxs("div",{style:{display:"inline-flex",borderRadius:"6px",overflow:"hidden",border:"1px solid var(--border-color)"},children:[e.jsx("button",{type:"button",onClick:()=>Re(s.studentId,"present"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:s.status==="present"?"var(--success)":"transparent",color:s.status==="present"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"উপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>Re(s.studentId,"absent"),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",borderLeft:"1px solid var(--border-color)",borderRight:"1px solid var(--border-color)",background:s.status==="absent"?"var(--danger)":"transparent",color:s.status==="absent"?"#fff":"var(--text-secondary)",transition:"all 0.15s ease"},children:"অনুপস্থিত"}),e.jsx("button",{type:"button",onClick:()=>Re(s.studentId,""),style:{padding:"5px 12px",fontSize:"0.78rem",fontWeight:600,border:"none",cursor:"pointer",background:!s.status||s.status==="reset"?"var(--bg-tertiary)":"transparent",color:!s.status||s.status==="reset"?"var(--text-primary)":"var(--text-muted)",transition:"all 0.15s ease"},title:"রিসেট করুন",children:"রিসেট"})]})}),e.jsx("td",{style:{minWidth:"180px"},children:e.jsx("input",{type:"text",value:s.remarks||"",onChange:o=>bt(s.studentId,"remarks",o.target.value),placeholder:"মন্তব্য লিখুন...",className:"form-input",style:{width:"100%",minWidth:"160px",height:"34px",fontSize:"0.82rem",padding:"4px 10px",marginBottom:0}})})]},s.studentId)):e.jsx("tr",{children:e.jsx("td",{colSpan:"7",style:{textAlign:"center",padding:"36px",color:"var(--text-muted)"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(Pe,{size:36,color:"var(--border-color)"}),e.jsx("span",{children:"এই শ্রেণি বা সেকশনে কোনো শিক্ষার্থী পাওয়া যায়নি"})]})})})})]})}),ut&&e.jsx("div",{onClick:s=>{s.target===s.currentTarget&&de(!1)},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"12px",animation:"fadeIn 0.2s ease-out",overflowY:"auto"},children:e.jsxs("div",{className:"card",style:{width:"100%",maxWidth:"520px",maxHeight:"min(92vh, 720px)",display:"flex",flexDirection:"column",padding:0,position:"relative",boxShadow:"var(--shadow-lg)",borderRadius:"16px",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexShrink:0,background:"var(--bg-card)"},children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{fontSize:"1.15rem",fontWeight:800,margin:"0 0 4px",color:"#0f766e",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Le,{size:20}),"সমাবেশ রিপোর্ট প্রিন্ট ও সর্টিং অপশন"]}),e.jsx("p",{className:"text-muted text-xs",style:{margin:0},children:"কোন কোন কলাম প্রিন্ট করবেন এবং কোন ক্রমে সর্ট করবেন তা বেছে নিন"})]}),e.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>de(!1),style:{color:"var(--text-muted)",flexShrink:0,padding:"4px"},title:"বন্ধ করুন",children:e.jsx(At,{size:20})})]}),e.jsxs("div",{style:{padding:"16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch",flex:1},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Vt,{size:14,color:"#0f766e"}),"পৃষ্ঠা বিন্যাস (Page Orientation):"]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[e.jsxs("button",{type:"button",onClick:()=>Je("landscape"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:I==="landscape"?700:500,background:I==="landscape"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:I==="landscape"?"2px solid #0f766e":"1px solid var(--border-color)",color:I==="landscape"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📑"}),e.jsx("span",{children:"ল্যান্ডস্কেপ (Landscape)"})]}),e.jsxs("button",{type:"button",onClick:()=>Je("portrait"),style:{padding:"8px 12px",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"0.85rem",fontWeight:I==="portrait"?700:500,background:I==="portrait"?"rgba(15, 118, 110, 0.1)":"var(--bg-tertiary)",border:I==="portrait"?"2px solid #0f766e":"1px solid var(--border-color)",color:I==="portrait"?"#0f766e":"var(--text-primary)",transition:"all 0.15s ease"},children:[e.jsx("span",{style:{fontSize:"1.1rem"},children:"📄"}),e.jsx("span",{children:"পোর্ট্রেট (Portrait)"})]})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("label",{className:"text-xs font-semibold mb-6",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(os,{size:14,color:"var(--primary)"}),"সর্টিং পদ্ধতি (Sort Order):"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"8px"},children:[{id:"id_custom",label:"স্টুডেন্ট আইডি ক্রমানুসারে (ANG20* / ANB20* এর পর থেকে)"},{id:"roll",label:"রোল নম্বর ক্রমানুসারে (১, ২, ৩...)"},{id:"name",label:"শিক্ষার্থীর নামের বর্ণানুক্রমিক (ক, খ, গ...)"}].map(s=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"0.85rem",background:q===s.id?"rgba(99,102,241,0.08)":"var(--bg-tertiary)",border:q===s.id?"1px solid var(--primary)":"1px solid var(--border-color)",fontWeight:q===s.id?600:400},children:[e.jsx("input",{type:"radio",name:"printSort",checked:q===s.id,onChange:()=>mt(s.id)}),e.jsx("span",{children:s.label})]},s.id))})]}),e.jsxs("div",{style:{marginBottom:"18px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsxs("label",{className:"text-xs font-semibold",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--text-secondary)"},children:[e.jsx(Gt,{size:14,color:"#0f766e"}),"প্রিন্ট শিটে কোন কোন কলাম অন্তর্ভুক্ত করবেন:"]}),e.jsx("button",{type:"button",onClick:()=>Ce(at),className:"btn btn-ghost btn-xs",style:{fontSize:"11px",color:"#0f766e",padding:"2px 8px",height:"auto",textDecoration:"underline",cursor:"pointer"},title:"ডিফল্ট সিরিয়ালে ফিরিয়ে নিন",children:"ডিফল্ট ক্রম রিসেট"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"8px"},children:cs.map(s=>{const o=ke.indexOf(s.key),x=o!==-1,f=["০","১","২","৩","৪","৫","৬","৭","৮","৯"],u=p=>String(p).replace(/\d/g,m=>f[m]);return e.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px",fontSize:"0.82rem",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",background:x?"rgba(16,185,129,0.08)":"transparent",border:x?"1px solid rgba(16,185,129,0.3)":"1px solid var(--border-color)",transition:"all 0.15s ease"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("input",{type:"checkbox",checked:x,onChange:p=>{p.target.checked?Ce(m=>[...m,s.key]):Ce(m=>m.filter(R=>R!==s.key))}}),e.jsx("span",{children:s.label})]}),x&&e.jsxs("span",{title:`প্রিন্ট শিটে সিরিয়াল: ${o+1}`,style:{fontSize:"10px",fontWeight:700,background:"#0f766e",color:"#ffffff",padding:"1px 6px",borderRadius:"10px",lineHeight:"1.2",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:["#",u(o+1)]})]},s.key)})}),e.jsx("div",{style:{marginTop:"6px",fontSize:"11px",color:"#64748b",fontStyle:"italic"},children:"* কোনো কলাম আনটিক করে পুনরায় টিক দিলে, টিক দেওয়ার ক্রমানুযায়ী প্রিন্ট শিটে কলামের সিরিয়াল সাজানো হবে।"})]}),e.jsx(Dt,{selectedRoles:xe,onChange:s=>{xt(s);try{localStorage.setItem("annur_footer_roles__assembly_attendance",JSON.stringify(s))}catch{}},additionalRoles:ft,style:{marginBottom:"6px"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",padding:"14px 20px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)",flexShrink:0},children:[e.jsx("button",{type:"button",onClick:()=>de(!1),className:"btn btn-outline btn-sm",children:"বাতিল"}),e.jsxs("button",{type:"button",onClick:vt,className:"btn btn-primary btn-sm flex-center gap-6",style:{background:"#0f766e",borderColor:"#0f766e"},children:[e.jsx(Le,{size:15})," প্রিন্ট / PDF ডাউনলোড"]})]})]})})]})}export{Ts as default};
