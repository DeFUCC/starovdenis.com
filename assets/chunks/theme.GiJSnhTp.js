import{o as w,c as k,r as ne,a as ae,_ as V,g as re,b as ie,u as s,d as a,w as N,e as R,f as ce,h as F,i as e,n as h,F as de,j as ue,t as O,k as W,l as pe,m as fe}from"./framework.BXRFzbn8.js";const ve={class:"flex flex-col bg-gray-200 dark-bg-dark-700 shadow gap-6 text-lg"};function ge(t,l){return w(),k("div",ve,[ne(t.$slots,"default",{class:"z-1"}),l[0]||(l[0]=ae('<a class="flex items-center gap-2 z-6 underline underline-dotted" href="https://www.github.com/davay42" target="_blank"><div class="i-la-github text-3xl"></div><div class="p-0">davay42</div></a><a class="flex items-center gap-2 z-6 underline underline-dotted" href="https://t.me/starov" target="_blank"><div class="i-la-telegram text-3xl"></div><div class="p-0">starov </div></a><a class="flex items-center gap-2 z-6 underline underline-dotted" href="https://instagram.com/starov" target="_blank"><div class="i-la-instagram text-3xl"></div><div class="p-0">starov </div></a><a class="flex items-center gap-2 z-6 underline underline-dotted" href="https://www.facebook.com/d.starov" target="_blank"><div class="i-la-facebook text-3xl"></div><div class="p-0">d.starov </div></a><a class="flex items-center gap-2 z-6 underline underline-dotted" href="mailto:me@starovdenis.com"><div class="i-la-at min-w-5 text-3xl"></div><div class="p-0">me@starovdenis.com</div></a>',5))])}const me={},xe=V(me,[["render",ge]]),be="Denis Starov",he="Multimedia Artist, Full-stack Web-Developer, Sociocultural Designer and Practical Philosopher",we="Building open source web experiences for future",ye="/media/davay.svg",_e="/media/davay.png",ke="https://starovdenis.com",$e="https://stat.defucc.me/script.js",Xe="44ad14bf-57bf-4429-8bc7-a39bbf80e04e",Ye="data-website-id",ze="Denis Starov",Be="#ff8800",Se=["web-design","web-development","open-source","freelancer","vue developer","IT expert"],Ee="starovdenis.com",De="en-EN",I={title:be,description:he,title_template:we,logo:ye,icon:_e,public_url:ke,stat_script:$e,stat_data_id:Xe,stat_data_tag:Ye,author:ze,color:Be,keywords:Se,site:Ee,locale:De};JSON.parse("{}");function Me(t){return re()?(ie(t),!0):!1}function G(t){return typeof t=="function"?t():s(t)}const Oe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const We=Object.prototype.toString,Ae=t=>We.call(t)==="[object Object]",Ce=()=>{},A=Oe?window:void 0;function J(t){var l;const d=G(t);return(l=d==null?void 0:d.$el)!=null?l:d}function M(...t){let l,d,u,v;if(typeof t[0]=="string"||Array.isArray(t[0])?([d,u,v]=t,l=A):[l,d,u,v]=t,!l)return Ce;Array.isArray(d)||(d=[d]),Array.isArray(u)||(u=[u]);const n=[],p=()=>{n.forEach(i=>i()),n.length=0},y=(i,c,g,m)=>(i.addEventListener(c,g,m),()=>i.removeEventListener(c,g,m)),f=N(()=>[J(l),G(v)],([i,c])=>{if(p(),!i)return;const g=Ae(c)?{...c}:c;n.push(...d.flatMap(m=>u.map($=>y(i,m,$,g))))},{immediate:!0,flush:"post"}),x=()=>{f(),p()};return Me(x),x}const He={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function Pe(t={}){const{type:l="page",touch:d=!0,resetOnTouchEnds:u=!1,initialValue:v={x:0,y:0},window:n=A,target:p=n,scroll:y=!0,eventFilter:f}=t;let x=null;const i=a(v.x),c=a(v.y),g=a(null),m=typeof l=="function"?l:He[l],$=o=>{const b=m(o);x=o,b&&([i.value,c.value]=b,g.value="mouse")},X=o=>{if(o.touches.length>0){const b=m(o.touches[0]);b&&([i.value,c.value]=b,g.value="touch")}},Y=()=>{if(!x||!n)return;const o=m(x);x instanceof MouseEvent&&o&&(i.value=o[0]+n.scrollX,c.value=o[1]+n.scrollY)},z=()=>{i.value=v.x,c.value=v.y},E=f?o=>f(()=>$(o),{}):o=>$(o),S=f?o=>f(()=>X(o),{}):o=>X(o),B=f?()=>f(()=>Y(),{}):()=>Y();if(p){const o={passive:!0};M(p,["mousemove","dragover"],E,o),d&&l!=="movement"&&(M(p,["touchstart","touchmove"],S,o),u&&M(p,"touchend",z,o)),y&&l==="page"&&M(n,"scroll",B,{passive:!0})}return{x:i,y:c,sourceType:g}}function _(t,l={}){const{handleOutside:d=!0,window:u=A}=l,v=l.type||"page",{x:n,y:p,sourceType:y}=Pe(l),f=a(t??(u==null?void 0:u.document.body)),x=a(0),i=a(0),c=a(0),g=a(0),m=a(0),$=a(0),X=a(!0);let Y=()=>{};return u&&(Y=N([f,n,p],()=>{const z=J(f);if(!z||!(z instanceof Element))return;const{left:E,top:S,width:B,height:o}=z.getBoundingClientRect();c.value=E+(v==="page"?u.pageXOffset:0),g.value=S+(v==="page"?u.pageYOffset:0),m.value=o,$.value=B;const b=n.value-c.value,D=p.value-g.value;X.value=B===0||o===0||b<0||D<0||b>B||D>o,(d||!X.value)&&(x.value=b,i.value=D)},{immediate:!0}),M(document,"mouseleave",()=>{X.value=!0})),{x:n,y:p,sourceType:y,elementX:x,elementY:i,elementPositionX:c,elementPositionY:g,elementHeight:m,elementWidth:$,isOutside:X,stop:Y}}const Te={class:"site-grid grid dark-text-light-300 flex-1 overflow-hidden"},je=["src"],Le=["r"],Ve={class:"z-20"},Ne={class:"z-4"},Re={__name:"MainPage",setup(t){const{frontmatter:l,page:d,params:u}=R();ce();const v=a(null),{elementX:n,elementY:p}=_(v),y=a(null),{elementX:f,elementY:x}=_(y),i=a(null),{elementX:c,elementY:g}=_(i),m=a(null),{elementX:$,elementY:X}=_(m),Y=a(null),{elementX:z,elementY:E}=_(Y),S=a(null),{elementX:B,elementY:o}=_(S),b=a(null),{elementX:D,elementY:U}=_(b),C=a(null),{elementX:q,elementY:K}=_(C),H=a(null),{elementX:Q,elementY:Z}=_(H),P=a(null),{elementX:ee,elementY:te}=_(P);return(Ze,r)=>{var T,j,L;const se=F("content"),le=xe;return w(),k("main",{class:"w-full site-grid dark-text-light-300 min-h-100vh flex flex-col",ref_key:"body",ref:v,style:h({background:`radial-gradient(circle at ${s(n)}px ${s(p)}px, hsla(40deg,100%,50%,.4) 10%, hsla(40deg,100%,10%,0) 20%`})},[e("div",Te,[e("a",{class:"p-0 bg-yellow-500 shadow row-span-2 min-h-80 relative overflow-clip",href:"/",ref_key:"logo",ref:y},[e("div",{class:"p-40 bg-yellow-300 absolute -top-20 -left-20 rounded-full filter blur-2xl z-0 op-40 transition-none",style:h({transform:`translate(${s(f)}px, ${s(x)}px)`})},null,4),e("img",{class:"logo",src:`${(T=s(I))==null?void 0:T.logo}`},null,8,je)],512),e("div",{class:"text-8xl p-4 flex items-end bg-light-500 dark-bg-dark-400 shadow relative overflow-clip",ref_key:"titleBox",ref:i},[(w(),k("svg",{class:"w-120 absolute -top-60 -left-60 filter z-0 transition-none op-50",style:h({transform:`translate(${s(c)}px, ${s(g)}px)`}),viewBox:"-50 -50 100 100",fill:"none"},[(w(),k(de,null,ue(15,oe=>e("circle",{class:"stroke-dark-300 dark-stroke-light-300",r:oe*3,"stroke-width":".25"},null,8,Le)),64))],4)),e("div",Ve,O((j=s(l))==null?void 0:j.title),1)],512),e("div",{class:"p-4 flex items-end bg-light-500 dark-bg-dark-400 shadow text-2xl relative overflow-clip",ref_key:"descBox",ref:m},[(w(),k("svg",{class:"w-80 absolute -top-40 -left-40 filter z-0 transition-none op-50",style:h({transform:`translate(${s($)}px, ${s(X)}px)`}),viewBox:"-50 -50 100 100",fill:"none"},r[0]||(r[0]=[e("circle",{class:"fill-red-300",r:50},null,-1)]),4)),e("div",Ne,O((L=s(l))==null?void 0:L.description),1)],512),e("a",{class:"p-8 row-span-2 bg-yellow-200 dark-bg-yellow-600 font-bold text-10vw flex items-center relative overflow-clip",href:"/cv/",ref_key:"cv",ref:Y},[(w(),k("svg",{class:"w-120 absolute -top-60 -left-60 filter z-0 transition-none",style:h({transform:`translate(${s(z)}px, ${s(E)}px)`}),viewBox:"-50 -50 100 100",fill:"none"},r[1]||(r[1]=[e("rect",{class:"fill-green-300",width:40,x:-20,y:-20,height:40},null,-1)]),4)),r[2]||(r[2]=e("div",{class:"z-4"},"CV",-1))],512),e("a",{class:"p-8 bg-blue-200 dark-bg-blue-600 font-bold text-2xl flex items-center relative overflow-clip",href:"/web-dev/",ref_key:"web",ref:S},[(w(),k("svg",{class:"w-120 absolute -top-60 -left-60 filter z-0 transition-none",style:h({transform:` translate(${s(B)}px, ${s(o)}px) rotate(45deg)`}),viewBox:"-50 -50 100 100",fill:"none"},r[3]||(r[3]=[e("rect",{class:"fill-purple-400",width:20,x:-10,y:-10,height:20},null,-1)]),4)),r[4]||(r[4]=e("div",{class:"z-4"},"Web Development ",-1))],512),e("a",{class:"p-8 bg-purple-200 dark-bg-purple-600 font-bold text-2xl flex items-center relative overflow-clip",href:"/music/",ref_key:"music",ref:C},[e("div",{class:"i-ic-round-pentagon text-200px text-light-blue-200 dark-text-light-blue-500 absolute transition-none -left-30 -top-30",style:h({transform:`translate(${s(q)}px, ${s(K)}px)`})},null,4),r[5]||(r[5]=e("div",{class:"z-4"},"Music ",-1))],512),e("a",{class:"p-8 bg-green-200 dark-bg-green-600 font-bold text-2xl flex items-center relative overflow-clip",href:"/philosophy/",ref_key:"ph",ref:b},[e("div",{class:"i-uis-triangle text-200px text-yellow-200 dark-text-yellow-500 absolute transition-none -left-30 -top-30",style:h({transform:`translate(${s(D)}px, ${s(U)}px)`})},null,4),r[6]||(r[6]=e("div",{class:"z-4"},"Philosophy",-1))],512),e("div",{class:"p-8 markdown-body md-col-span-2 dark-bg-dark-400 relative overflow-clip bg-light-200 dark-bg-dark-300",ref_key:"cont",ref:H},[(w(),k("svg",{class:"w-100 absolute -top-50 -left-50 filter blur-xl z-0 transition-none op-70",style:h({transform:`translate(${s(Q)}px, ${s(Z)}px)`}),viewBox:"-50 -50 100 100",fill:"none"},r[7]||(r[7]=[e("circle",{class:"fill-orange-300",r:40},null,-1)]),4)),W(se,{class:"markdown-body md-col-span-2"})],512),W(le,{class:"p-8 relative overflow-clip",ref_key:"contacts",ref:P},{default:pe(()=>[(w(),k("svg",{class:"w-80 absolute -top-40 -left-40 filter z-0 transition-none op-50",style:h({transform:`translate(${s(ee)}px, ${s(te)}px)`}),viewBox:"-50 -50 100 100",fill:"none"},r[8]||(r[8]=[e("circle",{class:"fill-orange-300 dark-fill-orange-500",r:30},null,-1)]),4))]),_:1},512)]),e("div",{class:"p-8 bg-dark-200 flex items-center text-light-300",style:h({background:`radial-gradient(circle at ${s(n)}px ${s(p)}px, hsla(270deg,0%,50%,1), hsla(270deg,0%,20%,1)`})},r[9]||(r[9]=[e("a",{class:"text-lg flex-1",href:"/"},"Denis Starov",-1),e("div",{class:"text-sm"},"2024",-1)]),4)],4)}}},Fe=V(Re,[["__scopeId","data-v-5e7a27a4"]]),Ie={key:1,class:"grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 p-4 xl-grid-cols-6 gap-4 dark-bg-dark-300 dark-text-light-400"},Ge={class:"p-0 bg-yellow-500 shadow",href:"/"},Je=["src"],Ue={class:"text-4xl"},qe={class:"description"},Ke={class:"col-span-2 lg-col-span-3"},Qe={__name:"Layout",setup(t){const{frontmatter:l,page:d,params:u}=R();return(v,n)=>{var f;const p=Fe,y=F("content");return((f=s(l))==null?void 0:f.layout)=="home"?(w(),fe(p,{key:0})):(w(),k("div",Ie,[e("a",Ge,[e("img",{class:"logo",src:`${s(I).logo}`},null,8,Je)]),e("div",{class:"p-4 flex flex-col bg-light-500 shadow dark-bg-dark-600",style:h({background:s(l).color||""})},[e("div",Ue,O(s(l).title),1),n[0]||(n[0]=e("div",{class:"flex-1"},null,-1)),e("div",qe,O(s(l).description),1)],4),e("main",Ke,[W(y,{class:"markdown-body"}),n[1]||(n[1]=e("footer",{class:"mt-12 pt-42 px-8 pb-8 bg-dark-600 bg-op-20 flex items-center"},[e("a",{class:"flex-auto text-lg",href:"/"},"Denis Starov"),e("div",{class:"p"},"2024")],-1))])]))}}},tt={Layout:Qe,enhanceApp({app:t}){}};export{tt as R};