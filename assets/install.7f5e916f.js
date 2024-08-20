import{_ as bt,e as Xt,S as Kt,m as J,f as M,g as Q,h as s,j as R,k as z,r as $t,l as k,n as Dt,o as U,D as Rt,P as Bt,p as Y,q as qt,s as Jt,t as j,v as Qt,w as jt,x as Ot,y as Nt,C as It,z as V,A as vt,B as te,F as gt,G as dt,H as ee,I as re,J as ne,K as ae,L as ie,M as oe,Z as le,N as fe,O as se,Q as ue,R as ve,U as ge,V as de,W as ce}from"./use-quasar.2480c469.js";var ct={color:"fill",borderColor:"stroke"},he={symbol:1,symbolSize:1,symbolKeepAspect:1,legendIcon:1,visualMeta:1,liftZ:1,decal:1},P=J(),ye=function(e){bt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.optionUpdated=function(){this.currentZLevel=this.get("zlevel",!0),this.currentZ=this.get("z",!0)},t.prototype.getInitialData=function(n,r){return Xt(null,this)},t.prototype.getDataParams=function(n,r,i){var o=e.prototype.getDataParams.call(this,n,r);return i&&(o.info=P(i).info),o},t.type="series.custom",t.dependencies=["grid","polar","geo","singleAxis","calendar"],t.defaultOption={coordinateSystem:"cartesian2d",z:2,legendHoverLink:!0,clip:!1},t}(Kt),pe=ye;function xe(e,t){return t=t||[0,0],Q(["x","y"],function(n,r){var i=this.getAxis(n),o=t[r],a=e[r]/2;return i.type==="category"?i.getBandWidth():Math.abs(i.dataToCoord(o-a)-i.dataToCoord(o+a))},this)}function Se(e){var t=e.master.getRect();return{coordSys:{type:"cartesian2d",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:function(n){return e.dataToPoint(n)},size:M(xe,e)}}}function Ce(e,t){return t=t||[0,0],Q([0,1],function(n){var r=t[n],i=e[n]/2,o=[],a=[];return o[n]=r-i,a[n]=r+i,o[1-n]=a[1-n]=t[1-n],Math.abs(this.dataToPoint(o)[n]-this.dataToPoint(a)[n])},this)}function we(e){var t=e.getBoundingRect();return{coordSys:{type:"geo",x:t.x,y:t.y,width:t.width,height:t.height,zoom:e.getZoom()},api:{coord:function(n){return e.dataToPoint(n)},size:M(Ce,e)}}}function Ae(e,t){var n=this.getAxis(),r=t instanceof Array?t[0]:t,i=(e instanceof Array?e[0]:e)/2;return n.type==="category"?n.getBandWidth():Math.abs(n.dataToCoord(r-i)-n.dataToCoord(r+i))}function Te(e){var t=e.getRect();return{coordSys:{type:"singleAxis",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:function(n){return e.dataToPoint(n)},size:M(Ae,e)}}}function Pe(e,t){return t=t||[0,0],Q(["Radius","Angle"],function(n,r){var i="get"+n+"Axis",o=this[i](),a=t[r],l=e[r]/2,v=o.type==="category"?o.getBandWidth():Math.abs(o.dataToCoord(a-l)-o.dataToCoord(a+l));return n==="Angle"&&(v=v*Math.PI/180),v},this)}function be(e){var t=e.getRadiusAxis(),n=e.getAngleAxis(),r=t.getExtent();return r[0]>r[1]&&r.reverse(),{coordSys:{type:"polar",cx:e.cx,cy:e.cy,r:r[1],r0:r[0]},api:{coord:function(i){var o=t.dataToRadius(i[0]),a=n.dataToAngle(i[1]),l=e.coordToPoint([o,a]);return l.push(o,a*Math.PI/180),l},size:M(Pe,e)}}}function De(e){var t=e.getRect(),n=e.getRangeInfo();return{coordSys:{type:"calendar",x:t.x,y:t.y,width:t.width,height:t.height,cellWidth:e.getCellWidth(),cellHeight:e.getCellHeight(),rangeInfo:{start:n.start,end:n.end,weeks:n.weeks,dayCount:n.allDay}},api:{coord:function(r,i){return e.dataToPoint(r,i)}}}}function Re(e,t,n,r){return e&&(e.legacy||e.legacy!==!1&&!n&&!r&&t!=="tspan"&&(t==="text"||s(e,"text")))}function Be(e,t,n){var r=e,i,o,a;if(t==="text")a=r;else{a={},s(r,"text")&&(a.text=r.text),s(r,"rich")&&(a.rich=r.rich),s(r,"textFill")&&(a.fill=r.textFill),s(r,"textStroke")&&(a.stroke=r.textStroke),s(r,"fontFamily")&&(a.fontFamily=r.fontFamily),s(r,"fontSize")&&(a.fontSize=r.fontSize),s(r,"fontStyle")&&(a.fontStyle=r.fontStyle),s(r,"fontWeight")&&(a.fontWeight=r.fontWeight),o={type:"text",style:a,silent:!0},i={};var l=s(r,"textPosition");n?i.position=l?r.textPosition:"inside":l&&(i.position=r.textPosition),s(r,"textPosition")&&(i.position=r.textPosition),s(r,"textOffset")&&(i.offset=r.textOffset),s(r,"textRotation")&&(i.rotation=r.textRotation),s(r,"textDistance")&&(i.distance=r.textDistance)}return ht(a,e),R(a.rich,function(v){ht(v,v)}),{textConfig:i,textContent:o}}function ht(e,t){!t||(t.font=t.textFont||t.font,s(t,"textStrokeWidth")&&(e.lineWidth=t.textStrokeWidth),s(t,"textAlign")&&(e.align=t.textAlign),s(t,"textVerticalAlign")&&(e.verticalAlign=t.textVerticalAlign),s(t,"textLineHeight")&&(e.lineHeight=t.textLineHeight),s(t,"textWidth")&&(e.width=t.textWidth),s(t,"textHeight")&&(e.height=t.textHeight),s(t,"textBackgroundColor")&&(e.backgroundColor=t.textBackgroundColor),s(t,"textPadding")&&(e.padding=t.textPadding),s(t,"textBorderColor")&&(e.borderColor=t.textBorderColor),s(t,"textBorderWidth")&&(e.borderWidth=t.textBorderWidth),s(t,"textBorderRadius")&&(e.borderRadius=t.textBorderRadius),s(t,"textBoxShadowColor")&&(e.shadowColor=t.textBoxShadowColor),s(t,"textBoxShadowBlur")&&(e.shadowBlur=t.textBoxShadowBlur),s(t,"textBoxShadowOffsetX")&&(e.shadowOffsetX=t.textBoxShadowOffsetX),s(t,"textBoxShadowOffsetY")&&(e.shadowOffsetY=t.textBoxShadowOffsetY))}function yt(e,t,n){var r=e;r.textPosition=r.textPosition||n.position||"inside",n.offset!=null&&(r.textOffset=n.offset),n.rotation!=null&&(r.textRotation=n.rotation),n.distance!=null&&(r.textDistance=n.distance);var i=r.textPosition.indexOf("inside")>=0,o=e.fill||"#000";pt(r,t);var a=r.textFill==null;return i?a&&(r.textFill=n.insideFill||"#fff",!r.textStroke&&n.insideStroke&&(r.textStroke=n.insideStroke),!r.textStroke&&(r.textStroke=o),r.textStrokeWidth==null&&(r.textStrokeWidth=2)):(a&&(r.textFill=e.fill||n.outsideFill||"#000"),!r.textStroke&&n.outsideStroke&&(r.textStroke=n.outsideStroke)),r.text=t.text,r.rich=t.rich,R(t.rich,function(l){pt(l,l)}),r}function pt(e,t){!t||(s(t,"fill")&&(e.textFill=t.fill),s(t,"stroke")&&(e.textStroke=t.fill),s(t,"lineWidth")&&(e.textStrokeWidth=t.lineWidth),s(t,"font")&&(e.font=t.font),s(t,"fontStyle")&&(e.fontStyle=t.fontStyle),s(t,"fontWeight")&&(e.fontWeight=t.fontWeight),s(t,"fontSize")&&(e.fontSize=t.fontSize),s(t,"fontFamily")&&(e.fontFamily=t.fontFamily),s(t,"align")&&(e.textAlign=t.align),s(t,"verticalAlign")&&(e.textVerticalAlign=t.verticalAlign),s(t,"lineHeight")&&(e.textLineHeight=t.lineHeight),s(t,"width")&&(e.textWidth=t.width),s(t,"height")&&(e.textHeight=t.height),s(t,"backgroundColor")&&(e.textBackgroundColor=t.backgroundColor),s(t,"padding")&&(e.textPadding=t.padding),s(t,"borderColor")&&(e.textBorderColor=t.borderColor),s(t,"borderWidth")&&(e.textBorderWidth=t.borderWidth),s(t,"borderRadius")&&(e.textBorderRadius=t.borderRadius),s(t,"shadowColor")&&(e.textBoxShadowColor=t.shadowColor),s(t,"shadowBlur")&&(e.textBoxShadowBlur=t.shadowBlur),s(t,"shadowOffsetX")&&(e.textBoxShadowOffsetX=t.shadowOffsetX),s(t,"shadowOffsetY")&&(e.textBoxShadowOffsetY=t.shadowOffsetY),s(t,"textShadowColor")&&(e.textShadowColor=t.textShadowColor),s(t,"textShadowBlur")&&(e.textShadowBlur=t.textShadowBlur),s(t,"textShadowOffsetX")&&(e.textShadowOffsetX=t.textShadowOffsetX),s(t,"textShadowOffsetY")&&(e.textShadowOffsetY=t.textShadowOffsetY))}var Lt={position:["x","y"],scale:["scaleX","scaleY"],origin:["originX","originY"]},xt=z(Lt);$t(k,function(e,t){return e[t]=1,e},{});k.join(", ");var m=["","style","shape","extra"],E=J();function O(e,t,n,r,i){var o=e+"Animation",a=Dt(e,r,i)||{},l=E(t).userDuring;return a.duration>0&&(a.during=l?M(We,{el:t,userDuring:l}):null,a.setToFinal=!0,a.scope=e),U(a,n[o]),a}function Le(e,t,n,r){r=r||{};var i=r.dataIndex,o=r.isInit,a=r.clearStyle,l=n.isAnimationEnabled(),v=E(e),f=t.style;v.userDuring=t.during;var u={},g={};if(me(e,t,g),Ct("shape",t,g),Ct("extra",t,g),!o&&l&&(_e(e,t,u),St("shape",e,t,u),St("extra",e,t,u),He(e,t,f,u)),g.style=f,Ee(e,g,a),Me(e,t),l)if(o){var h={};R(m,function(x){var C=x?t[x]:t;C&&C.enterFrom&&(x&&(h[x]=h[x]||{}),U(x?h[x]:h,C.enterFrom))});var y=O("enter",e,t,n,i);y.duration>0&&e.animateFrom(h,y)}else ke(e,t,i||0,n,u);Fe(e,t),f?e.dirty():e.markRedraw()}function Fe(e,t){for(var n=E(e).leaveToProps,r=0;r<m.length;r++){var i=m[r],o=i?t[i]:t;o&&o.leaveTo&&(n||(n=E(e).leaveToProps={}),i&&(n[i]=n[i]||{}),U(i?n[i]:n,o.leaveTo))}}function N(e,t,n,r){if(e){var i=e.parent,o=E(e).leaveToProps;if(o){var a=O("update",e,t,n,0);a.done=function(){i.remove(e),r&&r()},e.animateTo(o,a)}else i.remove(e),r&&r()}}function F(e){return e==="all"}function Ee(e,t,n){var r=t.style;if(!e.isGroup&&r){if(n){e.useStyle({});for(var i=e.animators,o=0;o<i.length;o++){var a=i[o];a.targetName==="style"&&a.changeTarget(e.style)}}e.setStyle(r)}t&&(t.style=null,t&&e.attr(t),t.style=r)}function ke(e,t,n,r,i){if(i){var o=O("update",e,t,r,n);o.duration>0&&e.animateFrom(i,o)}}function Me(e,t){s(t,"silent")&&(e.silent=t.silent),s(t,"ignore")&&(e.ignore=t.ignore),e instanceof Rt&&s(t,"invisible")&&(e.invisible=t.invisible),e instanceof Bt&&s(t,"autoBatch")&&(e.autoBatch=t.autoBatch)}var T={},ze={setTransform:function(e,t){return T.el[e]=t,this},getTransform:function(e){return T.el[e]},setShape:function(e,t){var n=T.el,r=n.shape||(n.shape={});return r[e]=t,n.dirtyShape&&n.dirtyShape(),this},getShape:function(e){var t=T.el.shape;if(t)return t[e]},setStyle:function(e,t){var n=T.el,r=n.style;return r&&(r[e]=t,n.dirtyStyle&&n.dirtyStyle()),this},getStyle:function(e){var t=T.el.style;if(t)return t[e]},setExtra:function(e,t){var n=T.el.extra||(T.el.extra={});return n[e]=t,this},getExtra:function(e){var t=T.el.extra;if(t)return t[e]}};function We(){var e=this,t=e.el;if(!!t){var n=E(t).userDuring,r=e.userDuring;if(n!==r){e.el=e.userDuring=null;return}T.el=t,r(ze)}}function St(e,t,n,r){var i=n[e];if(!!i){var o=t[e],a;if(o){var l=n.transition,v=i.transition;if(v)if(!a&&(a=r[e]={}),F(v))U(a,o);else for(var f=j(v),u=0;u<f.length;u++){var g=f[u],h=o[g];a[g]=h}else if(F(l)||Y(l,e)>=0){!a&&(a=r[e]={});for(var y=z(o),u=0;u<y.length;u++){var g=y[u],h=o[g];Ue(i[g],h)&&(a[g]=h)}}}}}function Ct(e,t,n){var r=t[e];if(!!r)for(var i=n[e]={},o=z(r),a=0;a<o.length;a++){var l=o[a];i[l]=qt(r[l])}}function _e(e,t,n){for(var r=t.transition,i=F(r)?k:j(r||[]),o=0;o<i.length;o++){var a=i[o];if(!(a==="style"||a==="shape"||a==="extra")){var l=e[a];n[a]=l}}}function me(e,t,n){for(var r=0;r<xt.length;r++){var i=xt[r],o=Lt[i],a=t[i];a&&(n[o[0]]=a[0],n[o[1]]=a[1])}for(var r=0;r<k.length;r++){var l=k[r];t[l]!=null&&(n[l]=t[l])}}function He(e,t,n,r){if(!!n){var i=e.style,o;if(i){var a=n.transition,l=t.transition;if(a&&!F(a)){var v=j(a);!o&&(o=r.style={});for(var f=0;f<v.length;f++){var u=v[f],g=i[u];o[u]=g}}else if(e.getAnimationStyleProps&&(F(l)||F(a)||Y(l,"style")>=0)){var h=e.getAnimationStyleProps(),y=h?h.style:null;if(y){!o&&(o=r.style={});for(var x=z(n),f=0;f<x.length;f++){var u=x[f];if(y[u]){var g=i[u];o[u]=g}}}}}}}function Ue(e,t){return Jt(e)?e!==t:e!=null&&isFinite(e)}var Ft=J(),Ye=["percent","easing","shape","style","extra"];function Ge(e){e.stopAnimation("keyframe"),e.attr(Ft(e))}function Et(e,t,n){if(!(!n.isAnimationEnabled()||!t)){if(Qt(t)){R(t,function(l){Et(e,l,n)});return}var r=t.keyframes,i=t.duration;if(n&&i==null){var o=Dt("enter",n,0);i=o&&o.duration}if(!(!r||!i)){var a=Ft(e);R(m,function(l){if(!(l&&!e[l])){var v;r.sort(function(f,u){return f.percent-u.percent}),R(r,function(f){var u=e.animators,g=l?f[l]:f;if(!!g){var h=z(g);if(l||(h=jt(h,function(C){return Y(Ye,C)<0})),!!h.length){v||(v=e.animate(l,t.loop,!0),v.scope="keyframe");for(var y=0;y<u.length;y++)u[y]!==v&&u[y].targetName===v.targetName&&u[y].stopTracks(h);l&&(a[l]=a[l]||{});var x=l?a[l]:a;R(h,function(C){x[C]=((l?e[l]:e)||{})[C]}),v.whenWithKeys(i*f.percent,g,h,f.easing)}}}),v&&v.delay(t.delay||0).duration(i).start(t.easing)}})}}}var b="emphasis",B="normal",I="blur",tt="select",L=[B,b,I,tt],Z={normal:["itemStyle"],emphasis:[b,"itemStyle"],blur:[I,"itemStyle"],select:[tt,"itemStyle"]},X={normal:["label"],emphasis:[b,"label"],blur:[I,"label"],select:[tt,"label"]},Ve=["x","y"],Ze="e\0\0",w={normal:{},emphasis:{},blur:{},select:{}},Xe={cartesian2d:Se,geo:we,single:Te,polar:be,calendar:De};function $(e){return e instanceof Bt}function q(e){return e instanceof Rt}function Ke(e,t){t.copyTransform(e),q(t)&&q(e)&&(t.setStyle(e.style),t.z=e.z,t.z2=e.z2,t.zlevel=e.zlevel,t.invisible=e.invisible,t.ignore=e.ignore,$(t)&&$(e)&&t.setShape(e.shape))}var $e=function(e){bt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.type=t.type,n}return t.prototype.render=function(n,r,i,o){this._progressiveEls=null;var a=this._data,l=n.getData(),v=this.group,f=wt(n,l,r,i);a||v.removeAll(),l.diff(a).add(function(g){K(i,null,g,f(g,o),n,v,l)}).remove(function(g){var h=a.getItemGraphicEl(g);h&&N(h,P(h).option,n)}).update(function(g,h){var y=a.getItemGraphicEl(h);K(i,y,g,f(g,o),n,v,l)}).execute();var u=n.get("clip",!0)?Ot(n.coordinateSystem,!1,n):null;u?v.setClipPath(u):v.removeClipPath(),this._data=l},t.prototype.incrementalPrepareRender=function(n,r,i){this.group.removeAll(),this._data=null},t.prototype.incrementalRender=function(n,r,i,o,a){var l=r.getData(),v=wt(r,l,i,o),f=this._progressiveEls=[];function u(y){y.isGroup||(y.incremental=!0,y.ensureState("emphasis").hoverLayer=!0)}for(var g=n.start;g<n.end;g++){var h=K(null,null,g,v(g,a),r,this.group,l);h&&(h.traverse(u),f.push(h))}},t.prototype.eachRendered=function(n){Nt(this._progressiveEls||this.group,n)},t.prototype.filterForExposedEvent=function(n,r,i,o){var a=r.element;if(a==null||i.name===a)return!0;for(;(i=i.__hostTarget||i.parent)&&i!==this.group;)if(i.name===a)return!0;return!1},t.type="custom",t}(It),qe=$e;function et(e){var t=e.type,n;if(t==="path"){var r=e.shape,i=r.width!=null&&r.height!=null?{x:r.x||0,y:r.y||0,width:r.width,height:r.height}:null,o=zt(r);n=oe(o,null,i,r.layout||"center"),P(n).customPathData=o}else if(t==="image")n=new le({}),P(n).customImagePath=e.style.image;else if(t==="text")n=new fe({});else if(t==="group")n=new se;else{if(t==="compoundPath")throw new Error('"compoundPath" is not supported yet.');var a=ue(t);if(!a){var l="";ve(l)}n=new a}return P(n).customGraphicType=t,n.name=e.name,n.z2EmphasisLift=1,n.z2SelectLift=1,n}function rt(e,t,n,r,i,o,a){Ge(t);var l=i&&i.normal.cfg;l&&t.setTextConfig(l),r&&r.transition==null&&(r.transition=Ve);var v=r&&r.style;if(v){if(t.type==="text"){var f=v;s(f,"textFill")&&(f.fill=f.textFill),s(f,"textStroke")&&(f.stroke=f.textStroke)}var u=void 0,g=$(t)?v.decal:null;e&&g&&(g.dirty=!0,u=ge(g,e)),v.__decalPattern=u}if(q(t)&&v){var u=v.__decalPattern;u&&(v.decal=u)}Le(t,r,o,{dataIndex:n,isInit:a,clearStyle:!0}),Et(t,r.keyframeAnimation,o)}function kt(e,t,n,r,i){var o=t.isGroup?null:t,a=i&&i[e].cfg;if(o){var l=o.ensureState(e);if(r===!1){var v=o.getState(e);v&&(v.style=null)}else l.style=r||null;a&&(l.textConfig=a),de(o)}}function Je(e,t,n){if(!e.isGroup){var r=e,i=n.currentZ,o=n.currentZLevel;r.z=i,r.zlevel=o;var a=t.z2;a!=null&&(r.z2=a||0);for(var l=0;l<L.length;l++)Qe(r,t,L[l])}}function Qe(e,t,n){var r=n===B,i=r?t:H(t,n),o=i?i.z2:null,a;o!=null&&(a=r?e:e.ensureState(n),a.z2=o||0)}function wt(e,t,n,r){var i=e.get("renderItem"),o=e.coordinateSystem,a={};o&&(a=o.prepareCustoms?o.prepareCustoms(o):Xe[o.type](o));for(var l=V({getWidth:r.getWidth,getHeight:r.getHeight,getZr:r.getZr,getDevicePixelRatio:r.getDevicePixelRatio,value:Wt,style:mt,ordinalRawValue:_t,styleEmphasis:Ht,visual:Ut,barLayout:Yt,currentSeriesIndices:Gt,font:Vt},a.api||{}),v={context:{},seriesId:e.id,seriesName:e.name,seriesIndex:e.seriesIndex,coordSys:a.coordSys,dataInsideLength:t.count(),encode:je(e.getData())},f,u,g={},h={},y={},x={},C=0;C<L.length;C++){var W=L[C];y[W]=e.getModel(Z[W]),x[W]=e.getModel(X[W])}function _(c){return c===f?u||(u=t.getItemModel(c)):t.getItemModel(c)}function it(c,d){return t.hasItemOption?c===f?g[d]||(g[d]=_(c).getModel(Z[d])):_(c).getModel(Z[d]):y[d]}function ot(c,d){return t.hasItemOption?c===f?h[d]||(h[d]=_(c).getModel(X[d])):_(c).getModel(X[d]):x[d]}return function(c,d){return f=c,u=null,g={},h={},i&&i(V({dataIndexInside:c,dataIndex:t.getRawIndex(c),actionType:d?d.type:null},v),l)};function Wt(c,d){return d==null&&(d=f),t.getStore().get(t.getDimensionIndex(c||0),d)}function _t(c,d){d==null&&(d=f),c=c||0;var p=t.getDimensionInfo(c);if(!p){var A=t.getDimensionIndex(c);return A>=0?t.getStore().get(A,d):void 0}var D=t.get(p.name,d),S=p&&p.ordinalMeta;return S?S.categories[D]:D}function mt(c,d){d==null&&(d=f);var p=t.getItemVisual(d,"style"),A=p&&p.fill,D=p&&p.opacity,S=it(d,B).getItemStyle();A!=null&&(S.fill=A),D!=null&&(S.opacity=D);var st={inheritColor:ce(A)?A:"#000"},G=ot(d,B),ut=vt(G,null,st,!1,!0);ut.text=G.getShallow("show")?te(e.getFormattedLabel(d,B),gt(t,d)):null;var Zt=dt(G,st,!1);return ft(c,S),S=yt(S,ut,Zt),c&&lt(S,c),S.legacy=!0,S}function Ht(c,d){d==null&&(d=f);var p=it(d,b).getItemStyle(),A=ot(d,b),D=vt(A,null,null,!0,!0);D.text=A.getShallow("show")?ee(e.getFormattedLabel(d,b),e.getFormattedLabel(d,B),gt(t,d)):null;var S=dt(A,null,!0);return ft(c,p),p=yt(p,D,S),c&&lt(p,c),p.legacy=!0,p}function lt(c,d){for(var p in d)s(d,p)&&(c[p]=d[p])}function ft(c,d){c&&(c.textFill&&(d.textFill=c.textFill),c.textPosition&&(d.textPosition=c.textPosition))}function Ut(c,d){if(d==null&&(d=f),s(ct,c)){var p=t.getItemVisual(d,"style");return p?p[ct[c]]:null}if(s(he,c))return t.getItemVisual(d,c)}function Yt(c){if(o.type==="cartesian2d"){var d=o.getBaseAxis();return re(V({axis:d},c))}}function Gt(){return n.getCurrentSeriesIndices()}function Vt(c){return ne(c,n)}}function je(e){var t={};return R(e.dimensions,function(n){var r=e.getDimensionInfo(n);if(!r.isExtraCoord){var i=r.coordDim,o=t[i]=t[i]||[];o[r.coordDimIndex]=e.getDimensionIndex(n)}}),t}function K(e,t,n,r,i,o,a){if(!r){o.remove(t);return}var l=nt(e,t,n,r,i,o);return l&&a.setItemGraphicEl(n,l),l&&ae(l,r.focus,r.blurScope,r.emphasisDisabled),l}function nt(e,t,n,r,i,o){var a=-1,l=t;t&&Mt(t,r,i)&&(a=Y(o.childrenRef(),t),t=null);var v=!t,f=t;f?f.clearStates():(f=et(r),l&&Ke(l,f)),r.morph===!1?f.disableMorphing=!0:f.disableMorphing&&(f.disableMorphing=!1),w.normal.cfg=w.normal.conOpt=w.emphasis.cfg=w.emphasis.conOpt=w.blur.cfg=w.blur.conOpt=w.select.cfg=w.select.conOpt=null,w.isLegacy=!1,Ne(f,n,r,i,v,w),Oe(f,n,r,i,v),rt(e,f,n,r,w,i,v),s(r,"info")&&(P(f).info=r.info);for(var u=0;u<L.length;u++){var g=L[u];if(g!==B){var h=H(r,g),y=at(r,h,g);kt(g,f,h,y,w)}}return Je(f,r,i),r.type==="group"&&Ie(e,f,n,r,i),a>=0?o.replaceAt(f,a):o.add(f),f}function Mt(e,t,n){var r=P(e),i=t.type,o=t.shape,a=t.style;return n.isUniversalTransitionEnabled()||i!=null&&i!==r.customGraphicType||i==="path"&&nr(o)&&zt(o)!==r.customPathData||i==="image"&&s(a,"image")&&a.image!==r.customImagePath}function Oe(e,t,n,r,i){var o=n.clipPath;if(o===!1)e&&e.getClipPath()&&e.removeClipPath();else if(o){var a=e.getClipPath();a&&Mt(a,o,r)&&(a=null),a||(a=et(o),e.setClipPath(a)),rt(null,a,t,o,null,r,i)}}function Ne(e,t,n,r,i,o){if(!e.isGroup){At(n,null,o),At(n,b,o);var a=o.normal.conOpt,l=o.emphasis.conOpt,v=o.blur.conOpt,f=o.select.conOpt;if(a!=null||l!=null||f!=null||v!=null){var u=e.getTextContent();if(a===!1)u&&e.removeTextContent();else{a=o.normal.conOpt=a||{type:"text"},u?u.clearStates():(u=et(a),e.setTextContent(u)),rt(null,u,t,a,null,r,i);for(var g=a&&a.style,h=0;h<L.length;h++){var y=L[h];if(y!==B){var x=o[y].conOpt;kt(y,u,x,at(a,x,y),null)}}g?u.dirty():u.markRedraw()}}}}function At(e,t,n){var r=t?H(e,t):e,i=t?at(e,r,b):e.style,o=e.type,a=r?r.textConfig:null,l=e.textContent,v=l?t?H(l,t):l:null;if(i&&(n.isLegacy||Re(i,o,!!a,!!v))){n.isLegacy=!0;var f=Be(i,o,!t);!a&&f.textConfig&&(a=f.textConfig),!v&&f.textContent&&(v=f.textContent)}if(!t&&v){var u=v;!u.type&&(u.type="text")}var g=t?n[t]:n.normal;g.cfg=a,g.conOpt=v}function H(e,t){return t?e?e[t]:null:e}function at(e,t,n){var r=t&&t.style;return r==null&&n===b&&e&&(r=e.styleEmphasis),r}function Ie(e,t,n,r,i){var o=r.children,a=o?o.length:0,l=r.$mergeChildren,v=l==="byName"||r.diffChildrenByName,f=l===!1;if(!(!a&&!v&&!f)){if(v){er({api:e,oldChildren:t.children()||[],newChildren:o||[],dataIndex:n,seriesModel:i,group:t});return}f&&t.removeAll();for(var u=0;u<a;u++){var g=o[u],h=t.childAt(u);g?(g.ignore==null&&(g.ignore=!1),nt(e,h,n,g,i,t)):h.ignore=!0}for(var y=t.childCount()-1;y>=u;y--){var x=t.childAt(y);tr(t,x,i)}}}function tr(e,t,n){t&&N(t,P(e).option,n)}function er(e){new ie(e.oldChildren,e.newChildren,Tt,Tt,e).add(Pt).update(Pt).remove(rr).execute()}function Tt(e,t){var n=e&&e.name;return n!=null?n:Ze+t}function Pt(e,t){var n=this.context,r=e!=null?n.newChildren[e]:null,i=t!=null?n.oldChildren[t]:null;nt(n.api,i,n.dataIndex,r,n.seriesModel,n.group)}function rr(e){var t=this.context,n=t.oldChildren[e];n&&N(n,P(n).option,t.seriesModel)}function zt(e){return e&&(e.pathData||e.d)}function nr(e){return e&&(s(e,"pathData")||s(e,"d"))}function ir(e){e.registerChartView(qe),e.registerSeriesModel(pe)}export{ir as i};
