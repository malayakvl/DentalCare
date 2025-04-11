import{c as j,q as g,u as f,W as v,r as b,j as e,Y as N,a as c,y}from"./app-DUD9FxAe.js";import{A as k}from"./AuthenticatedLayout-BBwQuZdH.js";import{a as C,L as I}from"./lang-Rf8_tUbV.js";import{l as L}from"./translation-CclwJSWy.js";import{I as S}from"./InputText-8GBDd7K4.js";import{I as w}from"./InputLabel-Doo0KOeK.js";import{C as P}from"./Checkbox-fxRrBKYk.js";import{P as $}from"./PrimaryButton-DDpmqCs-.js";import{z as R}from"./transition-Dk6MwGSW.js";import"./ApplicationLogo-fdB6LoQ_.js";import"./portal-B0qkh_OA.js";import"./floating-ui.react-CImirEtS.js";import"./reselect-NCCDNIWx.js";function J({clinicData:T,permissionData:i}){j(),g().props.auth.user;const o=f(C),a=new I({messages:L,locale:o}),{processing:m,recentlySuccessful:d}=v(),[n,l]=b.useState({name:"",permissions:[]}),p=s=>{const t=s.target.id,r=s.target.value;l(u=>({...u,[t]:r}))},x=s=>{const t=n.permissions;if(s.checked)t.push(parseInt(s.id));else{const r=t.indexOf(parseInt(s.id));r>-1&&t.splice(r,1)}l(r=>({...r,permissions:t}))},h=s=>{s.preventDefault(),y.post("/role/store",n)};return e.jsx(k,{header:e.jsx(N,{title:"Roles"}),children:e.jsx("div",{className:"py-0",children:e.jsx("form",{onSubmit:h,className:"mt-0 space-y-4",encType:"multipart/form-data",children:e.jsx("div",{children:e.jsxs("div",{className:"p-4 sm:p-8 mb-8 content-data bg-content",children:[e.jsx("section",{children:e.jsx("header",{children:e.jsx("div",{className:"flex inline-flex",children:e.jsxs("h2",{children:[e.jsx(c,{className:"icon-back",href:"/roles",children:" "}),a.get("role.title.create")]})})})}),e.jsx("div",{children:e.jsxs("div",{className:"p-4 sm:p-8 mb-8 content-data bg-content",children:[e.jsx("div",{className:"row",children:e.jsx(S,{name:"name",values:n,value:n.name,onChange:p,required:!0,label:a.get("role.name")})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-4",children:e.jsxs("div",{className:"form-group",children:[e.jsx(w,{value:a.get("role.permission")}),e.jsx("br",{}),e.jsx("div",{className:"columns-4",children:i&&i.map((s,t)=>e.jsx("div",{className:s.name==="clinic-delete"?"disabled-content":"",children:e.jsxs("div",{children:[e.jsx(P,{id:`${s.id}`,name:`remember[${s.id}]`,onChange:r=>{x(r.target)}}),e.jsx("label",{htmlFor:`${s.id}`,children:e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:a.get(`role.${s.name}`)})})]},s.id)},t))})]})}),e.jsxs("div",{className:"flex items-center mt-5",children:[e.jsx(c,{className:"btn-back",title:a.get("role.back"),href:"/roles",children:a.get("role.back")}),e.jsx($,{disabled:m,children:a.get("role.save")}),e.jsx(R,{show:d,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:a.get("filial.saved")})})]})]})]})})]})})})})})}export{J as default};
