(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{4357:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sellGoldToUs",function(){return s(1073)}])},8391:function(e,t,s){"use strict";s.d(t,{Q7:function(){return c},ZF:function(){return i},gL:function(){return l},lX:function(){return n}});let n=(e,t,s)=>e||0===e?(e=Math.ceil(e),new Intl.NumberFormat("fa-IR",{style:"decimal",minimumFractionDigits:0}).format(e)+(t?s?" تومان":" ریال":"")):"---",l=(e,t)=>(t||(t=!1),e||0===e)?new Intl.NumberFormat("fa-IR",{style:"decimal",minimumFractionDigits:0,useGrouping:t}).format(e):"---";var r=[/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g];let a=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],i=function(e){if("string"==typeof e)for(var t=0;t<10;t++)e=e.replace(r[t],t).replace(a[t],t);return e},c=e=>Number(e)===e&&e%1!=0},1665:function(e,t,s){"use strict";var n=s(5893),l=s(7294),r=s(8391);t.Z=e=>{let{goldPrice:t,getValues:s}=e,[a,i]=(0,l.useState)(""),[c,m]=(0,l.useState)("");return(0,l.useEffect)(()=>{s({price:a,amount:c})},[a,c]),(0,n.jsxs)("div",{className:"my-4",children:[(0,n.jsxs)("div",{className:"mb-3 d-flex align-items-center justify-content-center",children:[(0,n.jsx)("label",{htmlFor:"amount",className:"form-label mb-0 ms-3 fw-bold",children:"مبلغ"}),(0,n.jsx)("input",{value:a&&(0,r.lX)(a),type:"text",className:"form-control text-center",id:"amount",style:{width:200},onChange:e=>{let s=e.target.value.replaceAll("٬",""),n=(0,r.ZF)(s);if(""===n||/^[0-9\b]+$/.test(n)){i(n);let e=+n/t;(0,r.Q7)(e)?m(e.toFixed(8).toString()):m(e.toString())}}}),(0,n.jsx)("span",{className:"me-2",children:"ریال"})]}),(0,n.jsxs)("div",{className:"mb-3 d-flex align-items-center justify-content-center",children:[(0,n.jsx)("label",{htmlFor:"amount",className:"form-label mb-0 ms-2 fw-bold",children:"مقدار"}),(0,n.jsx)("input",{value:c,onChange:e=>{let s=e.target.value;(""===s||/^[0-9\b]+$/.test(s))&&(m(s),i((+s*t).toString()))},type:"text",className:"form-control text-center",style:{width:200},id:"amount"}),(0,n.jsx)("span",{className:"me-2",children:"گرم"})]})]})}},1073:function(e,t,s){"use strict";s.r(t);var n=s(5893),l=s(7294),r=s(8391),a=s(1665),i=s(1163);t.default=()=>{let[e,t]=(0,l.useState)(null),s=(0,i.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"row justify-content-center my-4",children:(0,n.jsx)("div",{className:"col-12 col-md-4 text-start",children:(0,n.jsxs)("div",{className:"btn btn-outline-primary text-sm",onClick:()=>{s.replace("/home")},children:[(0,n.jsx)("span",{className:"mx-2",children:"بازگشت"}),(0,n.jsx)("i",{className:"bi bi-arrow-left-square "})]})})}),(0,n.jsx)("div",{className:"row justify-content-center mb-5",children:(0,n.jsxs)("div",{className:"col-12 col-md-4",children:[(0,n.jsx)("div",{className:"border border-primary rounded-2 p-3 bg-light",children:(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"text-primary fw-bold",children:"فروش طلا به ما"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"text-gold ms-2",children:(0,r.lX)("23334412")}),(0,n.jsx)("span",{className:"text-primary",children:"ریال"})]})]})}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,n.jsx)("span",{className:"btn btn-primary",children:"فروش تمام طلا"}),(0,n.jsx)("span",{className:"btn btn-primary",children:"فروش ۱/۲ طلا"}),(0,n.jsx)("span",{className:"btn btn-primary",children:"فروش ۱/۴ طلا"})]})}),(0,n.jsx)("div",{className:"border border-primary rounded-2 p-3 bg-light mt-4",children:(0,n.jsxs)("div",{className:"d-flex flex-column justify-content-between ",children:[(0,n.jsx)(a.Z,{goldPrice:23334412,getValues:e=>{t(e)}}),(0,n.jsx)("p",{className:"mt-2",children:"شما مقدار ".concat(e&&e.amount?e.amount:"0"," گرم از ذخیره طلای خود خواهید فروخت.")}),(0,n.jsx)("p",{children:"موجودی کیف پول شما 0 ریال است."}),(0,n.jsx)("p",{style:{textAlign:"justify",lineHeight:"1.75rem"},children:"به دلیل نوسانات قیمت، پس از تایید اولیه و قبل از خرید نهایی، میزان دقیق قابل خرید نمایش داده خواهد شد."})]})}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)("span",{className:"btn btn-primary w-100",children:"مشاهده پیش فاکتور"})})]})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4357)}),_N_E=e.O()}]);