import{u as I,q as N,r as k,W as S,j as a,a as m,y as p}from"./app-DUD9FxAe.js";import{I as V}from"./InputError-Di-9Svck.js";import{I as F}from"./InputLabel-Doo0KOeK.js";import{P as L}from"./PrimaryButton-DDpmqCs-.js";import{a as w,L as E}from"./lang-Rf8_tUbV.js";import{l as T}from"./translation-C_oq1VrL.js";import{I as i}from"./InputText-8GBDd7K4.js";import{I as g}from"./InputSelect-BKKZVYkM.js";import{z}from"./transition-Dk6MwGSW.js";import"./reselect-NCCDNIWx.js";import"./translation-hRiGdJJJ.js";function O({clinicData:h,filialData:t,storeData:f,employeesData:x,className:j=""}){const v=I(w),s=new E({messages:T,locale:v}),{errors:b}=N().props,[e,d]=k.useState({name:t.name,address:t.address,uraddress:t.uraddress,inn:t.inn,edrpou:t.edrpou,phone:t.phone,clinic_id:h.id,store_id:t.store_id,file:null,ceo_id:null}),{processing:y,recentlySuccessful:C}=S(),n=r=>{const l=r.target.id,o=r.target.value;d(u=>({...u,[l]:o}))},c=r=>{const l=r.target.id,o=r.target.value;d(u=>({...u,[l]:o}))},q=r=>{const l=r.target.id;d(o=>({...o,[l]:r.target.files[0]}))},_=r=>{r.preventDefault(),t.id?p.post(`/filial/update?id=${t.id}`,e):p.post("/filial/update",e)};return a.jsxs("section",{className:j,children:[a.jsx("header",{children:a.jsxs("h2",{children:[a.jsx(m,{className:"icon-back",href:"/filials",children:" "}),t.id?s.get("filial.title.edit"):s.get("filial.title.create")]})}),a.jsxs("form",{onSubmit:_,className:"mt-0 space-y-4",encType:"multipart/form-data",children:[a.jsx(g,{name:"ceo_id",values:e,value:e.ceo_id,options:x,onChange:c,required:!0,label:s.get("filial.ceo")}),a.jsx(i,{name:"name",values:e,dataValue:e.name,value:e.name,onChange:n,required:!0,label:s.get("filial.name")}),a.jsx(g,{name:"store_id",values:e,value:e.store_id,options:f,onChange:c,required:!0,label:s.get("filial.store")}),a.jsx(i,{name:"address",values:e,dataValue:e.address,value:e.address,onChange:n,required:!0,label:s.get("filial.address")}),a.jsx(i,{name:"uraddress",values:e,dataValue:e.uraddress,value:e.uraddress,onChange:n,required:!0,label:s.get("filial.uraddress")}),a.jsx(i,{name:"inn",values:e,dataValue:e.inn,value:e.inn,onChange:n,required:!0,label:s.get("filial.inn")}),a.jsx(i,{name:"edrpou",values:e,dataValue:e.edrpou,value:e.edrpou,onChange:n,required:!0,label:s.get("filial.edrpou")}),a.jsx(i,{name:"phone",values:e,dataValue:e.phone,value:e.phone,onChange:n,required:!0,label:s.get("filial.phone")}),a.jsx(F,{htmlFor:"name",value:s.get("filial.stamp")}),a.jsxs("div",{className:"input_container",children:[a.jsx("input",{type:"file",id:"file",className:"w-full px-4 py-0",name:"file",onChange:q}),a.jsx(V,{className:"mt-2",message:b.file})]}),a.jsx("div",{children:a.jsx("img",{src:t.stamp,width:100})}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(m,{className:"btn-back",title:s.get("filial.back"),href:"/filials",children:s.get("filial.back")}),a.jsx(L,{disabled:y,children:s.get("filial.save")}),a.jsx(z,{show:C,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:a.jsx("p",{className:"text-sm text-gray-600",children:s.get("filial.saved")})})]})]})]})}export{O as default};
