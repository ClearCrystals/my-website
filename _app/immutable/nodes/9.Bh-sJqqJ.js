import{s as z,n as m,r as _,b as L}from"../chunks/scheduler.DzV7pw1l.js";import{S as y,i as M,e as g,s as P,c as p,f as D,g as x,a as C,d as b,l as u,b as k,j as h,n as d}from"../chunks/index.B1Zq2k1l.js";function E(l){let a,t,r='<h1 class="font-dream-avenue text-[4em] lg:text-[6em] tracking-wide mb-4 svelte-1nn906z">Projects</h1> <p class="text-lg lg:text-2xl max-w-3xl mx-auto">Explore some of my recent work and projects!</p>',c,e,s='<a href="/games" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105 svelte-1nn906z" draggable="false"><img src="/image1.jpg" alt="Project 1" draggable="false" class="w-[300px] h-[500px] object-cover"/> <div class="overlay svelte-1nn906z">Games</div></a> <a href="/graphics" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105 svelte-1nn906z" draggable="false"><img src="/image2.png" alt="Project 2" draggable="false" class="w-[300px] h-[500px] object-cover"/> <div class="overlay svelte-1nn906z">Graphics</div></a> <a href="/printing" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105 svelte-1nn906z" draggable="false"><img src="/image3.jpg" alt="Project 3" draggable="false" class="w-[300px] h-[500px] object-cover"/> <div class="overlay svelte-1nn906z">3D Printing</div></a> <a href="/activities" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105 svelte-1nn906z" draggable="false"><img src="/image4.jpg" alt="Project 4" draggable="false" class="w-[300px] h-[500px] object-cover"/> <div class="overlay svelte-1nn906z">Extracurricular Activities</div></a> <a href="http://www.codecsclub.com.s3-website.us-east-2.amazonaws.com/index.html" class="flex-none relative transform transition-transform duration-[300ms] ease-linear hover:scale-105 svelte-1nn906z" draggable="false"><img src="/image5.png" alt="Project 5" draggable="false" class="w-[300px] h-[500px] object-cover"/> <div class="overlay svelte-1nn906z">CODECS Website</div></a>',f,v;return{c(){a=g("div"),t=g("section"),t.innerHTML=r,c=P(),e=g("div"),e.innerHTML=s,this.h()},l(o){a=p(o,"DIV",{class:!0});var n=D(a);t=p(n,"SECTION",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1ynifat"&&(t.innerHTML=r),c=C(n),e=p(n,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-utzgdi"&&(e.innerHTML=s),n.forEach(b),this.h()},h(){u(t,"class","w-full max-w-5xl text-center py-12"),u(e,"class","slider flex space-x-8 py-6 cursor-grab overflow-hidden svelte-1nn906z"),u(a,"class","flex flex-col min-h-screen items-center bg-black text-white p-8")},m(o,n){k(o,a,n),h(a,t),h(a,c),h(a,e),l[5](e),f||(v=[d(e,"mousedown",l[1]),d(e,"mouseleave",l[2]),d(e,"mouseup",l[3]),d(e,"mousemove",l[4])],f=!0)},p:m,i:m,o:m,d(o){o&&b(a),l[5](null),f=!1,_(v)}}}function T(l,a,t){let r=!1,c,e,s;const f=i=>{r=!0,s.classList.add("active"),c=i.pageX-s.offsetLeft,e=s.scrollLeft},v=()=>{r=!1,s.classList.remove("active")},o=()=>{r=!1,s.classList.remove("active")},n=i=>{if(!r)return;i.preventDefault();const j=(i.pageX-s.offsetLeft-c)*.9;t(0,s.scrollLeft=e-j,s)};function w(i){L[i?"unshift":"push"](()=>{s=i,t(0,s)})}return[s,f,v,o,n,w]}class X extends y{constructor(a){super(),M(this,a,T,E,z,{})}}export{X as component};