import{c as d,u as o,r as p,j as e,Y as t,P as m,a as x}from"./app-DUD9FxAe.js";import{A as h,N as i}from"./AuthenticatedLayout-BBwQuZdH.js";import{a as j,L as u}from"./lang-Rf8_tUbV.js";import{l as f}from"./translation-766vIZ7q.js";import{P as g}from"./PrimaryButton-DDpmqCs-.js";import{D as N}from"./DataTable-DOKtOU6j.js";import"./ApplicationLogo-fdB6LoQ_.js";import"./portal-B0qkh_OA.js";import"./transition-Dk6MwGSW.js";import"./floating-ui.react-CImirEtS.js";import"./reselect-NCCDNIWx.js";function $({listData:a,permissions:L}){const c=d(),l=o(j),s=new u({messages:f,locale:l}),n=p.useCallback(()=>{},[c]);return e.jsxs(h,{header:e.jsx(t,{}),children:[e.jsx(t,{title:"Producers"}),e.jsx("div",{className:"py-0",children:e.jsx("div",{children:e.jsxs("div",{className:"p-4 sm:p-8 mb-8 content-data bg-content",children:[e.jsx("section",{children:e.jsx("header",{children:e.jsxs("div",{className:"flex inline-flex",children:[e.jsx("h2",{children:s.get("producer.title.list")}),e.jsx("div",{className:"pl-5 mt-2",children:e.jsx(g,{children:e.jsx(i,{href:"/producer/create",children:s.get("producer.create")})})})]})})}),e.jsx(N,{paginationType:m.PRODUCERS,sendRequest:n,children:a==null?void 0:a.map(r=>e.jsxs("tr",{className:"",children:[e.jsx("td",{className:"",children:r.name}),e.jsxs("td",{className:"text-right",children:[e.jsx(x,{className:"btn-edit",title:s.get("filial.filial.edit"),href:`producer/edit/${r.id}`}),e.jsx(i,{className:"btn-delete",title:s.get("filial.filial.delete"),href:`producer/delete/${r.id}`})]})]},r.id))})]})})})]})}export{$ as default};
