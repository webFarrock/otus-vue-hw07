import{d as I,c,o as a,a as l,e,t as d,u as t,_ as y,F as f,f as D,p as E,h as U,r as V,z,b as A,A as v,B,C as L}from"./index-3191bb56.js";import{u as M,f as R,b as C,c as T}from"./router-11febec2.js";import{B as j,N as q}from"./NotFoundItem-c709d318.js";const G={class:"user mb-2"},H={class:"user__sign"},J=I({__name:"PostUser",props:{user:null},setup(o){const s=o,u=c(()=>{var n;return(n=s.user)==null?void 0:n.name}),m=c(()=>{var n;return(n=s.user)==null?void 0:n.username});return(n,p)=>(a(),l("div",G,[e("div",H,d(t(u))+" ["+d(t(m))+"]",1)]))}});const K=y(J,[["__scopeId","data-v-832b3ec2"]]),O=o=>(E("data-v-7e27e6fd"),o=o(),U(),o),Q={class:"comments"},W=O(()=>e("h5",null,"Comments",-1)),X={class:"comments__item-name"},Y={class:"comments__item-body"},Z={class:"comments__item-email"},ss=I({__name:"PostComments",props:{comments:null},setup(o){const s=o,u=c(()=>s.comments);return(m,n)=>(a(),l("div",Q,[W,(a(!0),l(f,null,D(t(u),({id:p,name:r,body:_,email:i})=>(a(),l("div",{class:"comments__item",key:p},[e("div",X,d(r),1),e("div",Y,d(_),1),e("div",Z,d(i),1)]))),128))]))}});const ts=y(ss,[["__scopeId","data-v-7e27e6fd"]]),es={class:"post"},os=I({__name:"PostItem",props:{postId:null},setup(o){const s=o,u=L(),{postById:m,deletePost:n,authorById:p}=M(),r=V([]),_=c(()=>m(s.postId)),i=c(()=>{var h;return(h=_.value)!=null&&h.userId?p(_.value.userId):null}),g=c(()=>!!i.value),x=c(()=>!!r.value.length),N=c(()=>s.postId&&!_.value),$=c(()=>`Post #${s.postId} not found`),w=()=>u.push(C()),F=()=>u.push(T(s.postId)),S=()=>{confirm("Delete current post ?")&&(n(s.postId),u.push(C()))};return z(async()=>{r.value=await R(s.postId)}),(h,ns)=>{var P,b,k;return a(),l(f,null,[A(j,{title:"posts list",onClick:w}),t(N)?(a(),v(q,{key:0,title:t($)},null,8,["title"])):(a(),l(f,{key:1},[e("div",es,[e("h4",null,"Post #"+d((P=t(_))==null?void 0:P.id)+' "'+d((b=t(_))==null?void 0:b.title)+'"',1),e("p",null,d((k=t(_))==null?void 0:k.body),1)]),t(g)?(a(),v(K,{key:0,user:t(i)},null,8,["user"])):B("",!0),e("div",{class:"post__actions actions"},[e("button",{onClick:F,class:"btn btn-warning actions__item"}," Edit post "),e("button",{onClick:S,class:"btn btn-danger actions__item"}," Delete post ")]),t(x)?(a(),v(ts,{key:1,comments:r.value},null,8,["comments"])):B("",!0)],64))],64)}}});const ds=y(os,[["__scopeId","data-v-dfaad406"]]);export{ds as default};
