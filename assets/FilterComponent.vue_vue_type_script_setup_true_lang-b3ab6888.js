import{d,c as n,r as u,w as m,o as _,a as h,e as r,t as f,u as l,x,y as v}from"./index-3191bb56.js";const q=(t,e)=>{const s=new RegExp(e,"ig"),a=`<b>${e}</b>`;return t.replace(s,a)},B=(t,e)=>t.toLowerCase().includes(e.toLowerCase()),w={class:""},y={class:"mb-2"},b={class:"mb-3"},g=["placeholder"],E=d({__name:"FilterComponent",props:{title:{default:"Filter items"},placeholder:{default:"Input some text"}},emits:["filter"],setup(t,{emit:e}){const s=t,a=n(()=>s.title),i=n(()=>s.placeholder),o=u("");return m(o,()=>e("filter",l(o))),(C,c)=>(_(),h("div",w,[r("h4",y,f(l(a)),1),r("div",b,[x(r("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>o.value=p),placeholder:l(i),type:"text",class:"form-control"},null,8,g),[[v,o.value,void 0,{trim:!0}]])])]))}});export{E as _,B as q,q as s};