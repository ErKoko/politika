import{_ as E,Q as k}from"./plugin-vue_export-helper.92eb5536.js";import{u as w,a as $,T as C,i as F,b as A,c as Q,d as z,E as B}from"./use-quasar.9e1e5cf7.js";import{d as G,Q as H,r as N,_ as V,$ as W,a0 as q,f as L,a2 as P}from"./index.d6d7852f.js";import{i as O}from"./install.34fe476c.js";import"./render.9101989b.js";const T=G({name:"IndexPage",__name:"SpainPage2",setup(j){const y=w();$([F,O,A,Q,z]),H(C,y.dark.isActive?"dark":"light");const i=[{value:145,name:"Partido Popular",color:"#2b4b8f"},{value:9,name:"IPLI",color:"#f7b335"},{value:7,name:"Grupo Plural",color:"#49bfc2"},{value:6,name:"Grupo Vasco",color:"#228000"},{value:89,name:"Partido Socialista Obrero Espa\xF1ol",color:"#f3110f"},{value:6,name:"Izq. Confederal",color:"#e995b6"},{value:4,name:"Grupo Mixto",color:"#000000"}],h=["30%","90%"],M=function(){let v=i.reduce(function(a,t){return a+t.value},0),l=[],_=-Math.PI,g=_;i.forEach(function(a){l.push(g),g+=a.value/v*Math.PI}),l.push(_+Math.PI);function b(a,t,r,o,d,n){let f=Math.ceil((d-o)/n),c=[],e=o;for(let u=0;u<f;u++){let p=Math.round(r*e/n),s=r*e/p;for(let m=Math.floor(a*e/s)*s;m<Math.floor(t*e/s)*s-1e-6;m+=s){let x=m/e,I=Math.cos(x)*e,S=Math.sin(x)*e;c.push([I,S])}e+=n}return c}return N({title:{text:"Senado de Espa\xF1a",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c} %"},legend:{data:["Servant of the People","For the future","Ad Networks","Video Ads","Search Engines"]},series:{type:"custom",id:"distribution",data:i,coordinateSystem:void 0,renderItem:(a,t)=>{var r=a.dataIndex,o=Math.min(t.getWidth(),t.getHeight()*2),d=parseFloat(h[0])/100*o/2,n=parseFloat(h[1])/100*o/2,f=t.getWidth()*.5,c=t.getHeight()-20,e=o/50,u=b(l[r],l[r+1],Math.PI,d,n,e+3);return{type:"group",children:u.map(p=>({type:"circle",autoBatch:!0,shape:{cx:f+p[0],cy:c+p[1],r:e/2},style:{fill:i[r].color,lineWidth:2}}))}}}})}();return(v,l)=>(V(),W(k,{class:"row items-center justify-evenly"},{default:q(()=>[L(P(B),{option:P(M),class:"chart",autoresize:""},null,8,["option"])]),_:1}))}});var U=E(T,[["__scopeId","data-v-526cb67c"]]);export{U as default};
