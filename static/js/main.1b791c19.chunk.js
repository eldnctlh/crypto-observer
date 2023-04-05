(this["webpackJsonpcrypto-observer"]=this["webpackJsonpcrypto-observer"]||[]).push([[0],{328:function(e,t,n){},329:function(e,t,n){},344:function(e,t){},347:function(e,t){},350:function(e,t){},354:function(e,t){},381:function(e,t){},383:function(e,t){},392:function(e,t){},394:function(e,t){},404:function(e,t){},406:function(e,t){},522:function(e,t){},524:function(e,t){},531:function(e,t){},532:function(e,t){},696:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(50),i=n.n(s),o=(n(328),n(329),n(63)),u=n(134),d=n.n(u),l=n(67),j=n(29),b=n.n(j),h=n(101),p=n(55),x=n(707),f=n(704),O=n(318),g={1:{rpc:"https://rpc.ankr.com/eth",tokens:[{id:"0xD533a949740bb3306d119CC777fa900bA034cd52",slug:"curve-dao-token",title:"Curve",boughtAtPrice:1.13,decimals:18}],title:"Ethereum"},10:{rpc:"https://mainnet.optimism.io",tokens:[{id:"0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",slug:"velodrome-finance",title:"Velo",boughtAtPrice:.18,decimals:18}],title:"Optimism"},250:{rpc:"https://rpc.ftm.tools/",tokens:[{id:"0x841fad6eae12c286d1fd18d1d525dffa75c7effe",slug:"spookyswap",title:"BOO",boughtAtPrice:1.58,decimals:18}],title:"Fantom"},56:{rpc:"https://bsc-dataseed.binance.org/",tokens:[{id:"0xc748673057861a797275cd8a068abb95a902e8de",slug:"baby-doge-coin",title:"Baby Doge Coin",boughtAtPrice:.002506,decimals:12,bdc:!0},{id:"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",slug:"pancakeswap",title:"Pancake",boughtAtPrice:3.78,decimals:18}],title:"Binance Smart Chain"}},m=new O.a({supportedChainIds:Object.keys(g).map((function(e){return+e}))}),v=n(706),w=n(705),k=n(703),y=n(708),T=n(709),_=n(710),C=n(135),A=n(186),F=n(114),P=n(187),E=n.n(P),I=function(){var e=Object(o.b)(),t=e.account,n=e.active,a=e.chainId,s=e.deactivate,i=e.activate,u=r.a.useState({}),j=Object(F.a)(u,2),h=j[0],p=j[1],x=r.a.useState(null),f=Object(F.a)(x,2),O=f[0],v=f[1],w=r.a.useState(null),k=Object(F.a)(w,2),y=k[0],T=k[1],_=r.a.useState(!1),P=Object(F.a)(_,2),I=P[0],B=P[1];r.a.useEffect((function(){return window.ethereum&&(window.ethereum.on("chainChanged",(function(){N()})),window.ethereum.on("accountsChanged",(function(){N()}))),function(){return clearInterval(c)}}),[]),r.a.useEffect((function(){clearInterval(c),c=setInterval((function(){O&&T(O.fromNow())}),1e4)}),[O]);var N=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return e.next=4,i(m);case 4:S();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){S()}),[n]);var S=function(){var e=Object(l.a)(b.a.mark((function e(){var c,r,s,i,o,u,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=24;break}return B(!0),c=g[a],r=c.rpc,s=new d.a(r),i=[],c.tokens.forEach((function(e){var n=e.id,c=t,a=new s.eth.Contract([{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"}],n),r=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.methods.balanceOf(c).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.push(r())})),o=function(){var e=Object(l.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"29ac4fe7-af9f-420d-9bad-ca55ea30daaf",t={method:"GET",headers:{"X-CMC_PRO_API_KEY":"29ac4fe7-af9f-420d-9bad-ca55ea30daaf"},muteHttpExceptions:!0},n="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=".concat(c.tokens.reduce((function(e,t,n){return e+(n?",":"")+t.slug}),"")),e.next=5,fetch(n,t);case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=10,Promise.all(i).catch((function(e){return console.log(e)}));case 10:return u=e.sent,e.prev=11,e.next=14,o();case 14:j=e.sent,p(u.reduce((function(e,t,n){var a=Object.keys(j.data).find((function(e){return j.data[e].slug===c.tokens[n].slug})),r=j.data[a];return Object(A.a)(Object(A.a)({},e),{},Object(C.a)({},c.tokens[n].id,{balance:t,price:r.quote.USD}))}),{})),v(E()()),T(E()().fromNow()),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(11),console.log(e.t0);case 23:B(!1);case 24:case"end":return e.stop()}}),e,null,[[11,20]])})));return function(){return e.apply(this,arguments)}}();return{balances:h,updatedAt:y,updateBalances:S,isLoading:I}},B=function(e,t){return(e*t).toFixed(2)},N=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,S=function(e){var t=e.match(N);return t?"".concat(t[1],"\u2026").concat(t[2]):e},L=n(7),M=function(){var e=Object(o.b)(),t=e.active,n=e.chainId,c=I(),a=c.balances,r=c.updatedAt,s=c.updateBalances,i=c.isLoading;if(!t)return null;var u=function(e){return e>0?Object(L.jsx)(y.a,{style:{marginRight:".2rem",color:"#77C66E"}}):Object(L.jsx)(T.a,{style:{marginRight:".2rem",color:"#ea3c53"}})};return Object(L.jsxs)(L.Fragment,{children:[r?Object(L.jsxs)("div",{className:"flex-aligned",style:{marginTop:"2rem"},children:[Object(L.jsxs)(f.a.Title,{style:{color:"white",marginRight:"1rem"},level:5,children:["Last update: ",r]}),Object(L.jsxs)(x.a,{className:"antd-btn-restyled",onClick:s,disabled:i,children:[Object(L.jsx)(_.a,{style:{color:"#fff"}}),"Update"]})]}):null,Object(L.jsxs)(w.a,{className:"card-antd-restyled",style:{marginTop:"2rem"},children:[Object(L.jsxs)(h.a,{gutter:[16,16],children:[Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Title"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Balance"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Bought at"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Token price"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Profit %"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"Total price"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"24 h"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"7 d"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"30 d"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"60 d"})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:"90 d"})})]}),Object(L.jsx)(k.a,{}),g[n].tokens.map((function(e){var t,n,c,r,s=a[e.id];if(s){var i=(c=s.balance,r=e.decimals,(c/Math.pow(10,r)).toFixed(2)),o=s.price,d=e.bdc?1e6*s.price.price:s.price.price;return Object(L.jsxs)(h.a,{gutter:[16,16],style:{marginTop:"1rem"},children:[Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{strong:!0,children:[e.title,":"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:i})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:e.boughtAtPrice?"".concat(e.boughtAtPrice,"$"):""})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{strong:!0,children:[d.toFixed(4),"$"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsx)(f.a.Text,{strong:!0,children:e.boughtAtPrice?(t=e.boughtAtPrice,n=d,"".concat((100*Math.abs((t-n)/((t+n)/2))).toFixed(2),"%")):null})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{strong:!0,children:[B(i,d),"$"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{children:[u(o.percent_change_24h),o.percent_change_24h.toFixed(2),"%"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{children:[u(o.percent_change_7d),o.percent_change_7d.toFixed(2),"%"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{children:[u(o.percent_change_30d),o.percent_change_30d.toFixed(2),"%"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{children:[u(o.percent_change_60d),o.percent_change_60d.toFixed(2),"%"]})}),Object(L.jsx)(p.a,{span:2,children:Object(L.jsxs)(f.a.Text,{children:[u(o.percent_change_90d),o.percent_change_90d.toFixed(2),"%"]})})]},e.id)}return Object(L.jsx)(v.a,{title:!1},e.id)}))]})]})},D=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=9;break}return e.prev=1,e.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat((+t).toString(16))}]});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.b)().chainId;return Object(L.jsx)("div",{children:Object.keys(g).map((function(t){return Object(L.jsxs)(x.a,{className:"antd-btn-restyled",onClick:function(){return D(t)},style:{marginLeft:"1rem"},disabled:e===+t,children:["Change to ",g[t].title]},t)}))})},$=function(){var e=Object(o.b)(),t=e.account,n=e.active,c=e.activate,a=e.chainId,r=e.deactivate,s=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}r(),e.next=12;break;case 4:return e.prev=4,e.next=7,c(m);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"container",children:[Object(L.jsxs)(h.a,{gutter:[16,16],children:[Object(L.jsxs)(p.a,{span:8,children:[Object(L.jsx)(x.a,{className:"antd-btn-restyled",onClick:s,children:n?"Deactivate":"Connect to MetaMask"}),Object(L.jsx)(f.a.Text,{style:{color:"white",marginLeft:"1rem"},children:n?Object(L.jsxs)(L.Fragment,{children:["Connected with ",Object(L.jsx)("b",{children:S(t)})]}):Object(L.jsx)(L.Fragment,{children:"Not connected"})})]}),a?Object(L.jsx)(p.a,{span:16,children:Object(L.jsx)(R,{})}):null]}),Object(L.jsx)(M,{})]})},q=function(e){return new d.a(e)},z=function(){return Object(L.jsx)(o.a,{getLibrary:q,children:Object(L.jsx)($,{})})};i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(z,{})}),document.getElementById("root"))}},[[696,1,2]]]);
//# sourceMappingURL=main.1b791c19.chunk.js.map