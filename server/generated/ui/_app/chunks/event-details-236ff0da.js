import{S as H,i as K,s as L,e as p,t as x,k as A,c as d,a as m,g as j,d as u,n as N,b as k,f as E,K as _,h as C,r as O,u as $,w as R,x as y,l as U,I as T,R as b,j as V,m as z,o as F,v as G}from"./vendor-c7e306c1.js";import{f as q}from"./format-camel-case-8b7e013d.js";import{C as J}from"./code-block-5fd0afdf.js";function B(c,e,a){const l=c.slice();return l[1]=e[a][0],l[2]=e[a][1],l}function M(c){let e,a;return{c(){e=p("p"),a=x("Undefined"),this.h()},l(l){e=d(l,"P",{class:!0});var t=m(e);a=j(t,"Undefined"),t.forEach(u),this.h()},h(){k(e,"class","text-gray-500")},m(l,t){E(l,e,t),_(e,a)},p:b,i:b,o:b,d(l){l&&u(e)}}}function Q(c){let e,a,l=c[2]+"",t;return{c(){e=p("p"),a=p("span"),t=x(l),this.h()},l(s){e=d(s,"P",{});var r=m(e);a=d(r,"SPAN",{class:!0});var n=m(a);t=j(n,l),n.forEach(u),r.forEach(u),this.h()},h(){k(a,"class","bg-gray-300 text-gray-700 px-2")},m(s,r){E(s,e,r),_(e,a),_(a,t)},p(s,r){r&1&&l!==(l=s[2]+"")&&C(t,l)},i:b,o:b,d(s){s&&u(e)}}}function W(c){let e,a;return e=new J({props:{content:c[2]}}),{c(){V(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,t){F(e,l,t),a=!0},p(l,t){const s={};t&1&&(s.content=l[2]),e.$set(s)},i(l){a||(y(e.$$.fragment,l),a=!0)},o(l){$(e.$$.fragment,l),a=!1},d(l){G(e,l)}}}function X(c){let e,a=c[2]+"",l;return{c(){e=p("p"),l=x(a),this.h()},l(t){e=d(t,"P",{class:!0});var s=m(e);l=j(s,a),s.forEach(u),this.h()},h(){k(e,"class","font-mono whitespace-nowrap flex-grow")},m(t,s){E(t,e,s),_(e,l)},p(t,s){s&1&&a!==(a=t[2]+"")&&C(l,a)},i:b,o:b,d(t){t&&u(e)}}}function D(c){let e,a,l=q(c[1])+"",t,s,r,n,o,g,w;const P=[X,W,Q,M],h=[];function I(i,f){return i[2]===null?0:typeof i[2]=="object"?1:i[2]?2:3}return n=I(c),o=h[n]=P[n](c),{c(){e=p("article"),a=p("h4"),t=x(l),s=A(),r=p("div"),o.c(),g=A(),this.h()},l(i){e=d(i,"ARTICLE",{class:!0});var f=m(e);a=d(f,"H4",{class:!0});var v=m(a);t=j(v,l),v.forEach(u),s=N(f),r=d(f,"DIV",{class:!0});var S=m(r);o.l(S),S.forEach(u),g=N(f),f.forEach(u),this.h()},h(){k(a,"class","w-96 flex-grow"),k(r,"class","flex-grow w-full"),k(e,"class","flex items-center content-start w-full border-b-2 last:border-b-0 border-gray-200 py-1")},m(i,f){E(i,e,f),_(e,a),_(a,t),_(e,s),_(e,r),h[n].m(r,null),_(e,g),w=!0},p(i,f){(!w||f&1)&&l!==(l=q(i[1])+"")&&C(t,l);let v=n;n=I(i),n===v?h[n].p(i,f):(O(),$(h[v],1,1,()=>{h[v]=null}),R(),o=h[n],o?o.p(i,f):(o=h[n]=P[n](i),o.c()),y(o,1),o.m(r,null))},i(i){w||(y(o),w=!0)},o(i){$(o),w=!1},d(i){i&&u(e),h[n].d()}}}function Y(c){let e,a,l=Object.entries(c[0]),t=[];for(let r=0;r<l.length;r+=1)t[r]=D(B(c,l,r));const s=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},l(r){for(let n=0;n<t.length;n+=1)t[n].l(r);e=U()},m(r,n){for(let o=0;o<t.length;o+=1)t[o].m(r,n);E(r,e,n),a=!0},p(r,[n]){if(n&1){l=Object.entries(r[0]);let o;for(o=0;o<l.length;o+=1){const g=B(r,l,o);t[o]?(t[o].p(g,n),y(t[o],1)):(t[o]=D(g),t[o].c(),y(t[o],1),t[o].m(e.parentNode,e))}for(O(),o=l.length;o<t.length;o+=1)s(o);R()}},i(r){if(!a){for(let n=0;n<l.length;n+=1)y(t[n]);a=!0}},o(r){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)$(t[n]);a=!1},d(r){T(t,r),r&&u(e)}}}function Z(c,e,a){let{attributes:l}=e;return c.$$set=t=>{"attributes"in t&&a(0,l=t.attributes)},[l]}class re extends H{constructor(e){super();K(this,e,Z,Y,L,{attributes:0})}}export{re as E};