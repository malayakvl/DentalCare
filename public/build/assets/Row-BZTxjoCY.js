import{r as n,c as F,u as x,p as w,j as a,o as C,A,v as I,B as E}from"./app-DUD9FxAe.js";import{a as R}from"./selectors-3ONsMayW.js";import{a as k}from"./selectors-DcLeQ0hp.js";import"./reselect-NCCDNIWx.js";function M({formRowData:y=null,lastRow:j=null}){const[e,u]=n.useState(y),c=F(),[B,m]=n.useState(!1),d=x(k),[N,f]=n.useState(0),o=x(R),[b,g]=n.useState(0),S=()=>{u([...e,{product_id:"",product:"",quantity:0,price:0,tax:0,total:0}])},r=(s,t,l="")=>{c(C(!1));let{name:p,value:i}=s.target,h=[...e];h[t][p]=i,f(t),p==="product"?i.length>3?c(A(i)):(c(I()),m(!1)):p==="plusBtn"?(e[t].quantity=e[t].quantity+1,e[t].total=(parseFloat(String(e[t].quantity))*parseFloat(String(e[t].price))).toFixed(2)):p==="minusBtn"?(e[t].quantity=e[t].quantity>1?e[t].quantity-1:1,e[t].total=(parseFloat(String(e[t].quantity))*parseFloat(String(e[t].price))).toFixed(2)):(e[t].quantity=s.target.value,e[t].total=(parseFloat(String(e[t].quantity))*parseFloat(String(e[t].price))).toFixed(2)),u(h)};n.useEffect(()=>{const s=o.split("_");e.map(t=>{t.tax_amount=s[1]?t.price*s[1]/100:0}),g(parseInt(s[1]))},[o]),n.useEffect(()=>{},[b]);const q=s=>{const t=[...e];t.splice(s,1),u(t)};n.useEffect(()=>{c(w(e))},[e]);const v=s=>d.length>0?a.jsx("div",{className:"absolute autocomplete",style:{top:s*50+75+"px",width:"500px"},children:a.jsx("ul",{children:d.map(t=>a.jsx("li",{className:"cursor-pointer py-1",onClick:()=>{m(!0),c(E());const l=o.split("_");e[s].product=t.name,e[s].product_id=t.id,e[s].price=t.retail_price,e[s].tax_amount=o?t.retail_price*l[1]/100:0,e[s].quantity=1,e[s].total=parseFloat(String(e[s].price))},children:t.name}))})}):a.jsx(a.Fragment,{});return a.jsxs(a.Fragment,{children:[e.map((s,t)=>a.jsxs("tr",{children:[a.jsx("td",{className:"w-product  pb-2",children:a.jsx("div",{className:"relative",children:a.jsx("input",{name:"product",className:"input-text",type:"text",value:s.product,onChange:l=>r(l,t)})})}),a.jsx("td",{className:"w-qty pb-2 mx-auto",children:a.jsxs("div",{className:"row flex ml-[40px]",children:[a.jsx("button",{name:"minusBtn",onClick:l=>{r(l,t,"minus")},className:"btn-qty-minus",type:"button",children:"-"}),a.jsx("input",{className:"qty text-center",name:"qty",type:"text",value:s.quantity,onChange:l=>r(l,t)}),a.jsx("button",{name:"plusBtn",onClick:l=>{r(l,t,"plus")},className:"btn-qty-plus",type:"button",children:"+"})]})}),a.jsx("td",{className:"w-price text-center pb-2",children:a.jsx("input",{className:"input-text price text-center",name:"price",type:"text",value:s.price,onChange:l=>r(l,t)})}),a.jsx("td",{className:"w-price text-center pb-2",children:a.jsx("input",{className:"input-text price text-center",name:"total",type:"text",value:s.tax_amount})}),a.jsx("td",{className:"w-price text-center pb-2",children:a.jsx("input",{className:"input-text price text-center",name:"total",type:"text",value:s.total})}),a.jsx("td",{className:"w-btn pb-2",children:e.length>1&&a.jsx("button",{onClick:()=>q(t),className:"btn-delete"})}),a.jsx("td",{className:"w-btn pb-2",children:t===e.length-1&&!j&&a.jsx("button",{onClick:()=>S(),className:"btn-plus"})})]},t)),a.jsx("tr",{children:a.jsxs("td",{colSpan:6,children:[a.jsxs("div",{className:"body hidden",children:[" ",JSON.stringify(e)," "]}),a.jsx("div",{className:"text-left",children:v(N)})]})})]})}export{M as default};
