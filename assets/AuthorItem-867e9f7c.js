import{d as m,c as a,o as n,a as r,b as p,u as t,A as f,e,t as s,B,F as v,C as I,_ as k}from"./index-3191bb56.js";import{u as N,d as y}from"./router-11febec2.js";import{B as A,N as F}from"./NotFoundItem-c709d318.js";const x={key:1,class:"author"},C={class:"author__info info"},b={class:"info__item"},g={class:"info__item"},P={class:"info__item"},V=m({__name:"AuthorItem",props:{authorId:null},setup(u){const c=u,_=I(),{authorById:i}=N(),o=a(()=>i(c.authorId)),d=a(()=>!o.value),l=a(()=>`Author #${c.authorId} not found`),h=()=>_.push(y());return(E,S)=>(n(),r(v,null,[p(A,{title:"authors list",onClick:h}),t(d)?(n(),f(F,{key:0,title:t(l)},null,8,["title"])):t(o)?(n(),r("div",x,[e("h4",null,s(t(o).name),1),e("div",C,[e("div",b," Email: "+s(t(o).email),1),e("div",g," Phone: "+s(t(o).phone),1),e("div",P," Website: "+s(t(o).website),1)])])):B("",!0)],64))}});const T=k(V,[["__scopeId","data-v-8618c006"]]);export{T as default};