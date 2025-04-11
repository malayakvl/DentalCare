import{c as S,u as w,r as o,W as I,j as e,Y as m,y as E,a as F}from"./app-DUD9FxAe.js";import{A as P,N as B}from"./AuthenticatedLayout-BBwQuZdH.js";import{a as M,L as $}from"./lang-Rf8_tUbV.js";import{l as A}from"./translation-FNvhZ9NL.js";import{P as D}from"./PrimaryButton-DDpmqCs-.js";import{I as q}from"./InputLabel-Doo0KOeK.js";import{I as R}from"./InputError-Di-9Svck.js";import{S as d}from"./SecondaryButton-b2dv0hg0.js";import{M as T}from"./Modal-EpUJ5xvo.js";import{I as V}from"./InputText-8GBDd7K4.js";import"./ApplicationLogo-fdB6LoQ_.js";import"./portal-B0qkh_OA.js";import"./transition-Dk6MwGSW.js";import"./floating-ui.react-CImirEtS.js";import"./reselect-NCCDNIWx.js";function ie({clinicData:p,tree:r,services:x,currency:h}){S();const j=w(M),s=new $({messages:A,locale:j}),[g,t]=o.useState(!1),[u,f]=o.useState(""),{data:W,setData:Y,delete:z,processing:N,reset:v,errors:C,clearErrors:y}=I({password:""}),l=()=>{y(),v()},b=()=>{E.post("/price-category/update",{name:u,clinic_id:p.id}),t(!1)},k=(a,i)=>{var n;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`price-container pr-${i}`,children:[e.jsx("b",{className:"mb-4 block",children:a.name}),(n=x[a.id])==null?void 0:n.map((c,L)=>e.jsx(F,{href:`pricing/edit/${c.id}`,children:e.jsxs("div",{className:`mt-0 price-row ${L===0?"first-child":""}`,children:[e.jsx("div",{className:"inline-block",children:e.jsx("span",{className:"px-[5px] py-[4px] ",children:c.name})}),e.jsx("div",{className:"price-value",children:e.jsxs("span",{className:"px-[5px] py-[4px] ",children:[c.total," ",h]})})]})})),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"price-btn",children:e.jsx(B,{href:"/pricing/create",children:s.get("mCategories.add.price")})})})]})})};return e.jsxs(P,{header:e.jsx(m,{}),children:[e.jsx(m,{title:"Services"}),e.jsxs("div",{className:"py-0",children:[e.jsx("div",{children:e.jsxs("div",{className:"p-4 sm:p-8 mb-8 content-data bg-content",children:[e.jsx("section",{children:e.jsx("header",{children:e.jsxs("div",{className:"flex inline-flex",children:[e.jsx("h2",{children:s.get("mCategories.title.list")}),e.jsx("div",{className:"pl-5 mt-2",children:e.jsx(D,{children:e.jsx("a",{onClick:()=>t(!0),href:"#",children:s.get("mCategories.create")})})})]})})}),e.jsx("div",{className:"mt-6",children:r==null?void 0:r.map((a,i)=>e.jsx(e.Fragment,{children:k(a,i)}))})]})}),e.jsx(T,{show:g,onClose:l,children:e.jsxs("form",{className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:s.get("mCategories.create")}),e.jsxs("div",{className:"mt-0",children:[e.jsx(q,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(V,{name:"name",values:"",dataValue:"",value:"",onChange:a=>f(a.target.value),required:!0,label:s.get("mCategories.name")}),e.jsx(R,{message:C.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(d,{onClick:l,onClick:()=>t(!1),children:s.get("mCategories.close")}),e.jsx(d,{className:"ms-3 btn-submit",disabled:N,onClick:()=>b(),children:s.get("mCategories.save")})]})]})})]})]})}export{ie as default};
