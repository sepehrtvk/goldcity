(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2070:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(658)}])},8391:function(e,s,r){"use strict";r.d(s,{Q7:function(){return l},ZF:function(){return i},gL:function(){return o},lX:function(){return t}});let t=(e,s,r)=>e||0===e?(e=Math.ceil(e),new Intl.NumberFormat("fa-IR",{style:"decimal",minimumFractionDigits:0}).format(e)+(s?r?" تومان":" ریال":"")):"---",o=(e,s)=>(s||(s=!1),e||0===e)?new Intl.NumberFormat("fa-IR",{style:"decimal",minimumFractionDigits:0,useGrouping:s}).format(e):"---";var n=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g];let a=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],i=function(e){if("string"==typeof e)for(var s=0;s<10;s++)e=e.replace(n[s],s).replace(a[s],s);return e},l=e=>Number(e)===e&&e%1!=0},658:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return R}});var t=r(5893),o=r(7294),n=r(8391),a=r(8279),i=r.n(a),l=r(9127),c=r(2074),u=r(2006),d=r(8682);let p={api:{server:{port:null,url:"https://shahrehaftom.ir"}}};var m=r(7334),h=r.n(m);class g{getBaseUrl(){return p.api.server.port?"".concat(p.api.server.url+":"+p.api.server.port+"/"):"".concat(p.api.server.url+"/")}createUrl(e,s,r){let t=this.getBaseUrl()+e.toString();return null!=s&&(t=t.param(s)),null!=r&&(t=t.query(r)),t.toString()}generateHeaders(){let e=localStorage.getItem("access_token"),s={};return e&&(s.authorization="Bearer ".concat(e)),{...s,"Content-Type":"json"==this.bodyType?"application/json":"application/x-www-form-urlencoded",Accept:"*/*"}}appendHeaders(e){let s=this.generateHeaders();if(s)return e?{...e,...s}:s}processRequest(e){return e.pipe((0,l.U)(e=>({response:e.response,request:e.request,headers:e.xhr.getAllResponseHeaders()})),(0,c.K)(e=>{if(401==e.status&&(localStorage.removeItem("isAuth"),localStorage.removeItem("access_token"),window.location.reload()),500==e.status||422==e.status||403==e.status)throw Error("خطای پیش بینی نشده از سمت سرور.");if(0==e.status)throw Error("لطفا مجددا تلاش کنید.");throw e}))}post(e,s,r){let t=this.appendHeaders(s.headers),o=h().stringify(s.body);return this.processRequest((0,d.h)({method:"POST",url:this.createUrl(e),body:"json"==this.bodyType?s.body:o,headers:t})).pipe((0,u.b)(e=>{if(s&&void 0!=s.request)for(var t in e.request)s.request[t]=e.request[t];if(void 0!=r){let s=e.headers.split("\n");for(var t in s){let e=s[t].split(": ");2==e.length&&r.push({key:e[0].trim(),value:e[1].trim()})}}}),(0,l.U)(e=>e.response),(0,c.K)(e=>{var s;if(e.status,e.response){let s=e.response.detail;throw Error(s)}if(null==e?void 0:null===(s=e.response)||void 0===s?void 0:s.message)throw Error(e.response.message);if(null==e?void 0:e.message)throw Error(e.message);throw Error("Unhandled Error!")}))}get(e,s,r){let t=this.appendHeaders(null==s?void 0:s.headers);return this.processRequest((0,d.h)({method:"GET",url:this.createUrl(e,null==s?void 0:s.params,null==s?void 0:s.query),headers:t,responseType:"json"})).pipe((0,l.U)(e=>this.parseResponseToJSON?JSON.parse(e.response):e.response),(0,c.K)(e=>{var s,r;if(null==e?void 0:null===(s=e.response)||void 0===s?void 0:s.errors){let s=e.response.errors.map(e=>e.errorMessage).join("\n");throw Error(s)}if(null==e?void 0:null===(r=e.response)||void 0===r?void 0:r.message)throw Error(e.response.message);if(null==e?void 0:e.message)throw Error(e.message);throw Error("Unhandled Error!")}))}constructor(e){this.bodyType="url-encoded",this.parseResponseToJSON=!1,e&&e.bodyType&&(this.bodyType=e.bodyType),e&&e.parseResponseToJSON&&(this.parseResponseToJSON=e.parseResponseToJSON)}}let f=e=>(e=(0,n.ZF)(e),new g().get(".api/v1/getotp/"+e)),b=e=>(e.phone=(0,n.ZF)(e.phone),e.otp=(0,n.ZF)(e.otp),new g({bodyType:"json"}).post("otplogin",{body:e})),x=()=>new g().get(".api/v1/user/me");var v=r(3286),j=()=>(0,t.jsx)("div",{className:"spinner-border spinner-border-sm text-light mx-3 align-self-center",role:"status"}),y=r(1163),N=r(7326),w=r(4392),_=e=>{let{setMessage:s}=e,[r,a]=(0,o.useState)(""),[l,c]=(0,o.useState)(""),[u,d]=(0,o.useState)(!1),[p,m]=(0,o.useState)("mobile"),h=(0,y.useRouter)(),g=(0,w.T)(),_=e=>{f(e).pipe((0,v.x)(()=>d(!1))).subscribe({next:r=>{"1"==r.status?(s({message:"کد به شماره "+e+" ارسال شد.",success:!0}),m("code")):s({message:"شماره موبایل یافت نشد.",success:!1})},error:e=>{s({message:e.message,success:!1})}})},S=(e,r)=>{b({mobile:e,otp:r}).pipe((0,v.x)(()=>d(!1))).subscribe({next:r=>{r.access_token?(localStorage.setItem("access_token",r.access_token),d(!0),x().pipe((0,v.x)(()=>d(!1))).subscribe({next:r=>{g((0,N.zB)({phone:e,fullname:r.full_name,firstName:r.first_name,lastName:r.last_name,managerUid:r.mobile})),"1"==r.status&&(s("شما با موفقیت وارد شدید."),h.replace("/home"))},error:e=>{s(e.message)}})):r.message&&s(r.message)},error:e=>{s(e.message)}})},E=e=>{if(e.preventDefault(),e.stopPropagation(),"mobile"==p){11==r.length&&(d(!0),_(r));return}d(!0),S(r,l)};return"mobile"==p?(0,t.jsx)("form",{onSubmit:E,children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"mobile",className:"form-label",children:"موبایل"}),(0,t.jsx)("input",{value:r,type:"text",className:"form-control text-start",id:"mobile",maxLength:11,onChange:e=>{let s=(0,n.ZF)(e.target.value);(""===s||/^[0-9\b]+$/.test(s))&&a(s)}})]}),(0,t.jsxs)("button",{type:"submit",disabled:u,className:"btn btn-primary w-100",children:[(0,t.jsx)("span",{children:"ارسال رمز یکبار مصرف"}),u&&(0,t.jsx)(j,{})]})]})})}):(0,t.jsx)("form",{onSubmit:E,children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"inputCode",className:"form-label",children:"رمز یکبار مصرف"}),(0,t.jsx)(i(),{autoFocus:!0,value:l,inputMode:"numeric",name:"inputCode",type:"text",fields:6,inputStyle:{width:48,height:48,textAlign:"center",margin:16,borderColor:"#006063",borderRadius:"0.375rem",backgroundColor:"#f5f5f5"},className:"d-flex flex-row-reverse justify-content-center",onChange:e=>{let s=(0,n.ZF)(e);(""===s||/^[0-9\b]+$/.test(s))&&c(s)}})]}),(0,t.jsxs)("button",{type:"submit",className:"btn btn-primary w-100",disabled:u,children:[(0,t.jsx)("span",{children:"ورود"}),u&&(0,t.jsx)(j,{})]})]})})})},S=r(1953),E=r.n(S),T=r(6501),F=e=>{let{message:s,success:r}=e;return(0,o.useEffect)(()=>{s&&(r?T.ZP.success(s):T.ZP.error(s))},[s]),(0,t.jsx)(T.x7,{})},R=()=>{let[e,s]=(0,o.useState)(null);return(0,o.useEffect)(()=>{e&&setTimeout(()=>{s(null)},1500)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:E()["box-form"],children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center mt-5",children:(0,t.jsxs)("div",{className:"col-12 col-md-5 ",children:[(0,t.jsx)("h2",{className:"mb-5 text-center",children:"گلدسیتی "}),(0,t.jsx)("p",{className:"text-end",children:"به گلدسیتی خوش آمدید"}),(0,t.jsx)(_,{setMessage:s})]})})})}),(0,t.jsx)(F,{message:e&&e.message,success:e&&e.success})]})}},1953:function(e){e.exports={"box-form":"login_box-form__VHwx0"}}},function(e){e.O(0,[869,774,888,179],function(){return e(e.s=2070)}),_N_E=e.O()}]);