import{S as Z,i as x,s as $,e as y,k as j,c as w,a as N,d,n as D,b as p,f as J,J as h,U as ee,t as V,g as q,h as B,r as F,u as O,w as M,x as b,l as C,A as te,N as Q,av as le,j as R,m as z,o as G,Q as K,v as L,aw as ne,ax as ae,ay as oe}from"./vendor-b93e428e.js";function W(a){let t,l,e,n,r,u,g,S,_,o,f,k,T,H,c=a[1]&&X(a);function Y(i,s){return i[4]?re:ie}let E=Y(a)(a);const A=[ce,se],m=[];function I(i,s){return i[0]?0:1}return o=I(a),f=m[o]=A[o](a),{c(){t=y("div"),l=y("div"),e=j(),c&&c.c(),n=j(),r=y("pre"),u=y("code"),E.c(),S=j(),_=y("button"),f.c(),this.h()},l(i){t=w(i,"DIV",{class:!0});var s=N(t);l=w(s,"DIV",{id:!0}),N(l).forEach(d),e=D(s),c&&c.l(s),n=D(s),r=w(s,"PRE",{class:!0});var v=N(r);u=w(v,"CODE",{class:!0});var P=N(u);E.l(P),P.forEach(d),v.forEach(d),S=D(s),_=w(s,"BUTTON",{class:!0});var U=N(_);f.l(U),U.forEach(d),s.forEach(d),this.h()},h(){p(l,"id","clipboard"),p(u,"class",g="language-"+a[3]),p(r,"class","p-4"),p(_,"class","absolute top-4 right-4 block"),p(t,"class","relative w-full")},m(i,s){J(i,t,s),h(t,l),h(t,e),c&&c.m(t,null),h(t,n),h(t,r),h(r,u),E.m(u,null),h(t,S),h(t,_),m[o].m(_,null),k=!0,T||(H=ee(_,"click",a[5]),T=!0)},p(i,s){i[1]?c?c.p(i,s):(c=X(i),c.c(),c.m(t,n)):c&&(c.d(1),c=null),E.p(i,s),(!k||s&8&&g!==(g="language-"+i[3]))&&p(u,"class",g);let v=o;o=I(i),o===v?m[o].p(i,s):(F(),O(m[v],1,1,()=>{m[v]=null}),M(),f=m[o],f?f.p(i,s):(f=m[o]=A[o](i),f.c()),b(f,1),f.m(_,null))},i(i){k||(b(f),k=!0)},o(i){O(f),k=!1},d(i){i&&d(t),c&&c.d(),E.d(),m[o].d(),T=!1,H()}}}function X(a){let t,l;return{c(){t=y("h3"),l=V(a[1]),this.h()},l(e){t=w(e,"H3",{class:!0});var n=N(t);l=q(n,a[1]),n.forEach(d),this.h()},h(){p(t,"class","text-lg mb-2 w-full")},m(e,n){J(e,t,n),h(t,l)},p(e,n){n&2&&B(l,e[1])},d(e){e&&d(t)}}}function ie(a){let t,l;return{c(){t=new ae,l=C(),this.h()},l(e){t=oe(e),l=C(),this.h()},h(){t.a=l},m(e,n){t.m(a[2],e,n),J(e,l,n)},p(e,n){n&4&&t.p(e[2])},d(e){e&&d(l),e&&t.d()}}}function re(a){let t=a[6](JSON.stringify(a[2]))+"",l;return{c(){l=V(t)},l(e){l=q(e,t)},m(e,n){J(e,l,n)},p(e,n){n&4&&t!==(t=e[6](JSON.stringify(e[2]))+"")&&B(l,t)},d(e){e&&d(l)}}}function se(a){let t,l;return t=new Q({props:{icon:le,color:"white"}}),{c(){R(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){G(t,e,n),l=!0},p:K,i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function ce(a){let t,l;return t=new Q({props:{icon:ne,color:"white"}}),{c(){R(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,n){G(t,e,n),l=!0},p:K,i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function fe(a){let t,l,e=(a[2]||a[2]===null)&&W(a);return{c(){e&&e.c(),t=C()},l(n){e&&e.l(n),t=C()},m(n,r){e&&e.m(n,r),J(n,t,r),l=!0},p(n,[r]){n[2]||n[2]===null?e?(e.p(n,r),r&4&&b(e,1)):(e=W(n),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(F(),O(e,1,1,()=>{e=null}),M())},i(n){l||(b(e),l=!0)},o(n){O(e),l=!1},d(n){e&&e.d(n),n&&d(t)}}}function ue(a,t,l){let{heading:e=""}=t,{content:n}=t,{copied:r=!1}=t,{language:u="json"}=t;const g=u==="json",S=()=>navigator.clipboard.writeText(g?_(JSON.stringify(n)):n).then(()=>{l(0,r=!r),setTimeout(()=>l(0,r=!1),2e3)}).catch(o=>console.error(o)),_=o=>{const f=JSON.parse(o);return JSON.stringify(f,void 0,2)};return te(()=>{window.Prism.highlightAll()}),a.$$set=o=>{"heading"in o&&l(1,e=o.heading),"content"in o&&l(2,n=o.content),"copied"in o&&l(0,r=o.copied),"language"in o&&l(3,u=o.language)},[r,e,n,u,g,S,_]}class me extends Z{constructor(t){super();x(this,t,ue,fe,$,{heading:1,content:2,copied:0,language:3})}}export{me as C};