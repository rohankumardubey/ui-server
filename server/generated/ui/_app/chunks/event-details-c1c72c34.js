import{S as D,i as H,s as J,e as p,t as x,k as A,c as d,a as m,h as j,d as u,m as B,b as v,g as $,L as _,j as C,n as T,o as E,p as U,q as y,l as I,J as R,T as b,w as V,x as z,y as F,B as G}from"./vendor-7b40ad9c.js";import{f as L}from"./format-camel-case-8b7e013d.js";import{C as K}from"./code-block-18c296c3.js";function N(c,e,n){const l=c.slice();return l[1]=e[n][0],l[2]=e[n][1],l}function M(c){let e,n;return{c(){e=p("p"),n=x("Undefined"),this.h()},l(l){e=d(l,"P",{class:!0});var t=m(e);n=j(t,"Undefined"),t.forEach(u),this.h()},h(){v(e,"class","text-gray-500")},m(l,t){$(l,e,t),_(e,n)},p:b,i:b,o:b,d(l){l&&u(e)}}}function Q(c){let e,n,l=c[2]+"",t;return{c(){e=p("p"),n=p("span"),t=x(l),this.h()},l(s){e=d(s,"P",{});var r=m(e);n=d(r,"SPAN",{class:!0});var a=m(n);t=j(a,l),a.forEach(u),r.forEach(u),this.h()},h(){v(n,"class","bg-gray-300 text-gray-700 px-2")},m(s,r){$(s,e,r),_(e,n),_(n,t)},p(s,r){r&1&&l!==(l=s[2]+"")&&C(t,l)},i:b,o:b,d(s){s&&u(e)}}}function W(c){let e,n;return e=new K({props:{content:c[2]}}),{c(){V(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,t){F(e,l,t),n=!0},p(l,t){const s={};t&1&&(s.content=l[2]),e.$set(s)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){G(e,l)}}}function X(c){let e,n=c[2]+"",l;return{c(){e=p("p"),l=x(n),this.h()},l(t){e=d(t,"P",{class:!0});var s=m(e);l=j(s,n),s.forEach(u),this.h()},h(){v(e,"class","font-mono whitespace-nowrap flex-grow")},m(t,s){$(t,e,s),_(e,l)},p(t,s){s&1&&n!==(n=t[2]+"")&&C(l,n)},i:b,o:b,d(t){t&&u(e)}}}function O(c){let e,n,l=L(c[1])+"",t,s,r,a,o,g,w;const P=[X,W,Q,M],h=[];function S(i,f){return i[2]===null?0:typeof i[2]=="object"?1:i[2]?2:3}return a=S(c),o=h[a]=P[a](c),{c(){e=p("article"),n=p("h4"),t=x(l),s=A(),r=p("div"),o.c(),g=A(),this.h()},l(i){e=d(i,"ARTICLE",{class:!0});var f=m(e);n=d(f,"H4",{class:!0});var k=m(n);t=j(k,l),k.forEach(u),s=B(f),r=d(f,"DIV",{class:!0});var q=m(r);o.l(q),q.forEach(u),g=B(f),f.forEach(u),this.h()},h(){v(n,"class","w-96 flex-grow"),v(r,"class","flex-grow w-full"),v(e,"class","flex items-center content-start w-full border-b-2 last:border-b-0 border-gray-200 py-1")},m(i,f){$(i,e,f),_(e,n),_(n,t),_(e,s),_(e,r),h[a].m(r,null),_(e,g),w=!0},p(i,f){(!w||f&1)&&l!==(l=L(i[1])+"")&&C(t,l);let k=a;a=S(i),a===k?h[a].p(i,f):(T(),E(h[k],1,1,()=>{h[k]=null}),U(),o=h[a],o?o.p(i,f):(o=h[a]=P[a](i),o.c()),y(o,1),o.m(r,null))},i(i){w||(y(o),w=!0)},o(i){E(o),w=!1},d(i){i&&u(e),h[a].d()}}}function Y(c){let e,n,l=Object.entries(c[0]),t=[];for(let r=0;r<l.length;r+=1)t[r]=O(N(c,l,r));const s=r=>E(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=I()},m(r,a){for(let o=0;o<t.length;o+=1)t[o].m(r,a);$(r,e,a),n=!0},p(r,[a]){if(a&1){l=Object.entries(r[0]);let o;for(o=0;o<l.length;o+=1){const g=N(r,l,o);t[o]?(t[o].p(g,a),y(t[o],1)):(t[o]=O(g),t[o].c(),y(t[o],1),t[o].m(e.parentNode,e))}for(T(),o=l.length;o<t.length;o+=1)s(o);U()}},i(r){if(!n){for(let a=0;a<l.length;a+=1)y(t[a]);n=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)E(t[a]);n=!1},d(r){R(t,r),r&&u(e)}}}function Z(c,e,n){let{attributes:l}=e;return c.$$set=t=>{"attributes"in t&&n(0,l=t.attributes)},[l]}class re extends D{constructor(e){super();H(this,e,Z,Y,J,{attributes:0})}}export{re as E};