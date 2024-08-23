import{_ as S,Q as b}from"./plugin-vue_export-helper.2be99cd0.js";import{u as w,a as U,T as $,i as A,b as B,c as C,d as F,E as H}from"./use-quasar.59f68f50.js";import{i as L}from"./install.ec800e0c.js";import{d as N,L as Q,r as V,Y as W,Z as z,_ as R,f as T,a0 as P}from"./index.0294f88b.js";import"./render.4b8f3c2d.js";const Y=N({name:"IndexPage",__name:"UkrainePage",setup(j){const x=w();U([A,L,B,C,F]),Q($,x.dark.isActive?"dark":"light");const i=[{value:235,name:"Servant of the People",color:"#38b34a"},{value:17,name:"For the future",color:"#5c068c"},{value:19,name:"Dovira",color:"#1a9daa"},{value:27,name:"European Solidarity",color:"#1b3892"},{value:24,name:"Batkivshchyna",color:"#ed1c24"},{value:20,name:"Holos",color:"#fa4616"},{value:22,name:"Platform for Live and Peace",color:"#21409a"},{value:17,name:"Restoration of Ukraine",color:"#ffdd00"},{value:24,name:"Independent",color:"#dcdcdc"},{value:46,name:"Vacant",color:"#2c2c2c"}],p=["30%","90%"],M=function(){let v=i.reduce(function(t,a){return t+a.value},0),n=[],_=-Math.PI,g=_;i.forEach(function(t){n.push(g),g+=t.value/v*Math.PI}),n.push(_+Math.PI);function k(t,a,r,o,m,l){let f=Math.ceil((m-o)/l),c=[],e=o;for(let u=0;u<f;u++){let d=Math.round(r*e/l),s=r*e/d;for(let h=Math.floor(t*e/s)*s;h<Math.floor(a*e/s)*s-1e-6;h+=s){let y=h/e,I=Math.cos(y)*e,E=Math.sin(y)*e;c.push([I,E])}e+=l}return c}return V({title:{text:"Parlamento de Ucrania",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c} %"},legend:{data:["Servant of the People","For the future","Ad Networks","Video Ads","Search Engines"]},series:{type:"custom",id:"distribution",data:i,coordinateSystem:void 0,renderItem:(t,a)=>{var r=t.dataIndex,o=Math.min(a.getWidth(),a.getHeight()*2),m=parseFloat(p[0])/100*o/2,l=parseFloat(p[1])/100*o/2,f=a.getWidth()*.5,c=a.getHeight()-20,e=o/50,u=k(n[r],n[r+1],Math.PI,m,l,e+3);return{type:"group",children:u.map(d=>({type:"circle",autoBatch:!0,shape:{cx:f+d[0],cy:c+d[1],r:e/2},style:{fill:i[r].color,lineWidth:2}}))}}}})}();return(v,n)=>(W(),z(b,{class:"row items-center justify-evenly"},{default:R(()=>[T(P(H),{option:P(M),class:"chart",autoresize:""},null,8,["option"])]),_:1}))}});var G=S(Y,[["__scopeId","data-v-079da688"]]);export{G as default};
