import{p as V,m as k,am as D,g as w,ap as E,u as T,c as n,o as C,bZ as q,e as K,aS as Q,h as X,t as Y,k as p,aR as ee,s as _,w as te,y as P,bW as ne,U as ae,A as re,a9 as F,b6 as se,S as ie,G as le,r as oe,aa as ue,a$ as R,a as ce,n as ve}from"./index-C7MlE0T8.js";function de(e){return{aspectStyles:C(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const x=V({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...k(),...D()},"VResponsive"),A=w()({name:"VResponsive",props:x(),setup(e,l){let{slots:r}=l;const{aspectStyles:a}=de(e),{dimensionStyles:c}=E(e);return T(()=>{var m;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(m=r.additional)==null?void 0:m.call(r),r.default&&n("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}});function ge(e,l){if(!q)return;const r=l.modifiers||{},a=l.value,{handler:c,options:m}=typeof a=="object"?a:{handler:a,options:{}},b=new IntersectionObserver(function(){var v;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const s=(v=e._observe)==null?void 0:v[l.instance.$.uid];if(!s)return;const i=g.some(f=>f.isIntersecting);c&&(!r.quiet||s.init)&&(!r.once||i||s.init)&&c(i,g,h),i&&r.once?H(e,l):s.init=!0},m);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:b},b.observe(e)}function H(e,l){var a;const r=(a=e._observe)==null?void 0:a[l.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const me={mounted:ge,unmounted:H},fe=V({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...x(),...k(),...K(),...Q()},"VImg"),_e=w()({name:"VImg",directives:{intersect:me},props:fe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:r,slots:a}=l;const{backgroundColorClasses:c,backgroundColorStyles:m}=X(Y(e,"color")),{roundedClasses:b}=p(e),g=ee("VImg"),h=_(""),s=te(),i=_(e.eager?"loading":"idle"),v=_(),f=_(),u=C(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=C(()=>u.value.aspect||v.value/f.value||0);P(()=>e.src,()=>{z(i.value!=="idle")}),P(S,(t,o)=>{!t&&o&&s.value&&y(s.value)}),ne(()=>z());function z(t){if(!(e.eager&&t)&&!(q&&!t&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,y(o,null)}u.value.src&&ae(()=>{var o;r("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var d;if(!g.isUnmounted)if((d=s.value)!=null&&d.complete){if(s.value.naturalWidth||U(),i.value==="error")return;S.value||y(s.value,null),i.value==="loading"&&B()}else S.value||y(s.value),j()})})}}function B(){var t;g.isUnmounted||(j(),y(s.value),i.value="loaded",r("load",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function U(){var t;g.isUnmounted||(i.value="error",r("error",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function j(){const t=s.value;t&&(h.value=t.currentSrc||t.src)}let I=-1;re(()=>{clearTimeout(I)});function y(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(I),g.isUnmounted)return;const{naturalHeight:O,naturalWidth:$}=t;O||$?(v.value=$,f.value=O):!t.complete&&i.value==="loading"&&o!=null?I=window.setTimeout(d,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,f.value=1)};d()}const N=C(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var d;if(!u.value.src||i.value==="idle")return null;const t=n("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:B,onError:U},null),o=(d=a.sources)==null?void 0:d.call(a);return n(R,{transition:e.transition,appear:!0},{default:()=>[F(o?n("picture",{class:"v-img__picture"},[o,t]):t,[[ue,i.value==="loaded"]])]})},L=()=>n(R,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),G=()=>a.placeholder?n(R,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Z=()=>a.error?n(R,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,J=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=_(!1);{const t=P(S,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),t())})}return T(()=>{const t=A.filterProps(e);return F(n(A,le({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!W.value},c.value,b.value,e.class],style:[{width:oe(e.width==="auto"?v.value:e.width)},m.value,e.style]},t,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ie,null,[n(M,null,null),n(L,null,null),n(J,null,null),n(G,null,null),n(Z,null,null)]),default:a.default}),[[se("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:s,state:i,naturalWidth:v,naturalHeight:f}}}),Se=V({fluid:{type:Boolean,default:!1},...k(),...D(),...ce()},"VContainer"),be=w()({name:"VContainer",props:Se(),setup(e,l){let{slots:r}=l;const{rtlClasses:a}=ve(),{dimensionStyles:c}=E(e);return T(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[c.value,e.style]},r)),{}}});export{me as I,_e as V,be as a};
