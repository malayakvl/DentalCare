import{W as p,r as x,u as f,j as e,Y as b,a as j,b as y}from"./app-DUD9FxAe.js";import{C as v}from"./Checkbox-fxRrBKYk.js";import{P as w}from"./PrimaryButton-DDpmqCs-.js";import{G as L}from"./GuestLayout-_oh4o1R8.js";import{I as m}from"./InputText-8GBDd7K4.js";import{a as N,L as C}from"./lang-Rf8_tUbV.js";import"./InputLabel-Doo0KOeK.js";import"./reselect-NCCDNIWx.js";const k={"en.auth":{"auth.email":"Email",password:"Password",login:"Log in",forgot:"Forgot your password?",remember:"Remember me"},"uk.auth":{email:"Email",password:"Пароль",login:"Увійти",forgot:"Забули пароль?",remember:"Запам`ятати мене"}};function B({status:n,canResetPassword:i}){const{processing:l}=p({}),[r,c]=x.useState({name:"",password:"",remember:""}),d=f(N),s=new C({messages:k,locale:d}),o=a=>{const t=a.target.id,g=a.target.value;c(h=>({...h,[t]:g}))},u=a=>{a.preventDefault(),y.post("/login",r).then(t=>{t.data.dashboardSelect?location.href="/dashboard-select":location.href="/dashboard"}).catch(t=>{console.log("ERROR:: ",t.response.data)})};return e.jsxs(L,{children:[e.jsx(b,{title:s.get("auth.login")}),n&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:n}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(m,{name:"email",type:"email",values:r,onChange:o,label:s.get("auth.email"),required:!0}),e.jsx(m,{name:"password",type:"password",values:r,onChange:o,required:!0,label:s.get("auth.password")})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(v,{name:"remember",checked:r.remember,onChange:a=>o(a)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:s.get("auth.remember")})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[i&&e.jsx(j,{href:"/reset",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:s.get("auth.forgot")}),e.jsx(w,{className:"ms-4",disabled:l,children:s.get("auth.login")})]})]})]})}export{B as default};
