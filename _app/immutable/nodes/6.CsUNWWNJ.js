import{s as P,n as v,a as N}from"../chunks/scheduler.DzV7pw1l.js";import{S as C,i as I,e as u,s as x,c as p,f as _,g as T,a as k,d,l as i,b as G,j as f,m as j,t as A,h as M}from"../chunks/index.B1Zq2k1l.js";import{e as S}from"../chunks/each.D6YF6ztN.js";function y(m,e,a){const h=m.slice();return h[1]=e[a].name,h[2]=e[a].image,h[3]=e[a].link,h}function E(m){let e,a,h,g,r,o,s=m[1]+"",l,n;return{c(){e=u("a"),a=u("img"),g=x(),r=u("div"),o=u("span"),l=A(s),n=x(),this.h()},l(t){e=p(t,"A",{href:!0,target:!0,rel:!0,class:!0});var c=_(e);a=p(c,"IMG",{src:!0,alt:!0,class:!0,draggable:!0}),g=k(c),r=p(c,"DIV",{class:!0});var b=_(r);o=p(b,"SPAN",{class:!0});var w=_(o);l=M(w,s),w.forEach(d),b.forEach(d),n=k(c),c.forEach(d),this.h()},h(){N(a.src,h=m[2])||i(a,"src",h),i(a,"alt",m[1]),i(a,"class","w-full h-[300px] object-cover"),i(a,"draggable","false"),i(o,"class","text-xl lg:text-2xl font-semibold"),i(r,"class","absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100"),i(e,"href",m[3]),i(e,"target","_blank"),i(e,"rel","noopener noreferrer"),i(e,"class","relative overflow-hidden svelte-o89lob")},m(t,c){G(t,e,c),f(e,a),f(e,g),f(e,r),f(r,o),f(o,l),f(e,n)},p:v,d(t){t&&d(e)}}}function O(m){let e,a,h='<h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4 svelte-o89lob">Games</h1> <p class="text-lg lg:text-2xl max-w-3xl mx-auto">A collection of my game development projects.</p>',g,r,o=S(m[0]),s=[];for(let l=0;l<o.length;l+=1)s[l]=E(y(m,o,l));return{c(){e=u("div"),a=u("section"),a.innerHTML=h,g=x(),r=u("section");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var n=_(e);a=p(n,"SECTION",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-1anhmrh"&&(a.innerHTML=h),g=k(n),r=p(n,"SECTION",{class:!0});var t=_(r);for(let c=0;c<s.length;c+=1)s[c].l(t);t.forEach(d),n.forEach(d),this.h()},h(){i(a,"class","w-full max-w-5xl text-center py-12"),i(r,"class","grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"),i(e,"class","flex flex-col items-center min-h-screen bg-black text-white p-8")},m(l,n){G(l,e,n),f(e,a),f(e,g),f(e,r);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(r,null)},p(l,[n]){if(n&1){o=S(l[0]);let t;for(t=0;t<o.length;t+=1){const c=y(l,o,t);s[t]?s[t].p(c,n):(s[t]=E(c),s[t].c(),s[t].m(r,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=o.length}},i:v,o:v,d(l){l&&d(e),j(s,l)}}}function R(m){return[[{name:"Space Rocket",image:"/SpaceRocket.PNG",link:"/games/spacerocket/SpaceRocket.html"},{name:"Space Glitch",image:"/SpaceGlitch.PNG",link:"/games/spaceglitch/SpaceGlitch.html"},{name:"Enigma of Willow Park",image:"/EnigmaOfWillowPark.PNG",link:"/games/enigmaofwillowpark/TheEnigmaofWillowPark.html"},{name:"Click Shooter",image:"/ClickShooter.PNG",link:"/games/clickshooter/clickshooter.html"}]]}class H extends C{constructor(e){super(),I(this,e,R,O,P,{})}}export{H as component};