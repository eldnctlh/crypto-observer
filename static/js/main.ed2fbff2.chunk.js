(this["webpackJsonpcrypto-observer"]=this["webpackJsonpcrypto-observer"]||[]).push([[0],{327:function(e,t,n){},328:function(e,t,n){},343:function(e,t){},346:function(e,t){},349:function(e,t){},353:function(e,t){},380:function(e,t){},382:function(e,t){},391:function(e,t){},393:function(e,t){},403:function(e,t){},405:function(e,t){},521:function(e,t){},523:function(e,t){},530:function(e,t){},531:function(e,t){},695:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(49),s=n.n(r),i=(n(327),n(328),n(70)),l=n(133),o=n.n(l),d=n(83),u=n(31),j=n.n(u),b=n(706),h=n(703),p=n(316),f={250:{rpc:"https://rpc.ftm.tools/",tokens:[{id:"0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",slug:"usd-coin",title:"usdc",decimals:6},{id:"0x911da02c1232a3c3e1418b834a311921143b04d7",slug:"vedao",title:"veDAO",decimals:18}],title:"Fantom"},43114:{rpc:"https://api.avax.network/ext/bc/C/rpc",tokens:[{id:"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",title:"USDC",slug:"usd-coin",decimals:6},{id:"0x6b8fb769d1957f2c29abc9d1beb95851cce775d8",slug:"fortressdao",title:"sFORT",decimals:9},{id:"0xf6d46849db378ae01d93732585bec2c4480d1fd5",slug:"fortressdao",title:"FORT",decimals:9}],title:"Avalanche"},56:{rpc:"https://bsc-dataseed.binance.org/",tokens:[{id:"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",title:"USDC",slug:"usd-coin",decimals:18},{id:"0x2170ed0880ac9a755fd29b2688956bd959f933f8",slug:"ethereum",title:"ETH",decimals:18},{id:"0x41f831c60c7051cffa756ab5f9fee81a670ecde0",slug:"baby-lambo-inu",title:"BLINU",decimals:18}],title:"Binance Smart Chain"}},x=new p.a({supportedChainIds:Object.keys(f).map((function(e){return+e}))}),O=n(101),g=n(54),v=n(705),m=n(704),y=n(702),T=n(707),w=n(708),_=n(134),k=n(185),C=n(312),E=function(){var e=Object(i.b)(),t=e.account,n=e.active,c=e.chainId,r=e.deactivate,s=e.activate,l=a.a.useState({}),u=Object(C.a)(l,2),b=u[0],h=u[1];a.a.useEffect((function(){window.ethereum&&(window.ethereum.on("chainChanged",(function(){p()})),window.ethereum.on("accountsChanged",(function(){p()})))}),[]);var p=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return e.next=4,s(x);case 4:O();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.a.useEffect((function(){O()}),[n]);var O=function(){var e=Object(d.a)(j.a.mark((function e(){var a,r,s,i,l,u,b;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}return a=f[c],r=a.rpc,s=new o.a(r),i=[],a.tokens.forEach((function(e){var n=e.id,c=t,a=new s.eth.Contract([{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"}],n),r=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.methods.balanceOf(c).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.push(r())})),l=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"29ac4fe7-af9f-420d-9bad-ca55ea30daaf",t={method:"GET",headers:{"X-CMC_PRO_API_KEY":"29ac4fe7-af9f-420d-9bad-ca55ea30daaf"},muteHttpExceptions:!0},n="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=".concat(a.tokens.reduce((function(e,t,n){return e+(n?",":"")+t.slug}),"")),e.next=5,fetch(n,t);case 5:return c=e.sent,e.next=8,c.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=9,Promise.all(i);case 9:return u=e.sent,e.next=12,l();case 12:b=e.sent,h(u.reduce((function(e,t,n){var c=Object.keys(b.data).find((function(e){return b.data[e].slug===a.tokens[n].slug})),r=b.data[c];return Object(k.a)(Object(k.a)({},e),{},Object(_.a)({},a.tokens[n].id,{balance:t,price:r.quote.USD}))}),{}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{balances:b}},F=function(e,t){return(e*t).toFixed(2)},D=n(9),I=function(){var e=Object(i.b)(),t=e.active,n=e.chainId,c=E().balances;if(!t)return null;var a=function(e){return e>0?Object(D.jsx)(T.a,{color:"red",style:{marginRight:".5rem",color:"#77C66E"}}):Object(D.jsx)(w.a,{style:{marginRight:".5rem",color:"#ea3c53"}})};return Object(D.jsxs)(m.a,{className:"card-antd-restyled",style:{marginTop:"2rem"},children:[Object(D.jsxs)(O.a,{gutter:[16,16],children:[Object(D.jsx)(g.a,{span:3,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"Title"})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"Balance"})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"Token price"})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"Total price"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"1 hour"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"24 hours"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"7 days"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"30 days"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"60 days"})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:"90 days"})})]}),Object(D.jsx)(y.a,{}),f[n].tokens.map((function(e){var t,n,r=c[e.id];if(r){var s=(t=r.balance,n=e.decimals,(t/Math.pow(10,n)).toFixed(2)),i=r.price;return Object(D.jsxs)(O.a,{gutter:[16,16],style:{marginTop:"1rem"},children:[Object(D.jsx)(g.a,{span:3,children:Object(D.jsxs)(h.a.Title,{level:4,strong:!0,children:[e.title,":"]})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsx)(h.a.Title,{level:4,strong:!0,children:s})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsxs)(h.a.Title,{level:4,strong:!0,children:[i.price.toFixed(2),"$"]})}),Object(D.jsx)(g.a,{span:3,children:Object(D.jsxs)(h.a.Title,{level:4,strong:!0,children:[F(s,i.price),"$"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_1h),i.percent_change_1h,"%"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_24h),i.percent_change_24h,"%"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_7d),i.percent_change_7d,"%"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_30d),i.percent_change_30d,"%"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_60d),i.percent_change_60d,"%"]})}),Object(D.jsx)(g.a,{span:2,children:Object(D.jsxs)(h.a.Text,{children:[a(i.percent_change_90d),i.percent_change_90d,"%"]})})]},e.id)}return Object(D.jsx)(v.a,{},e.id)}))]})},A=function(){var e=Object(i.b)(),t=e.account,n=e.active,c=e.activate,a=e.chainId,r=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(x);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsx)(b.a,{className:"antd-btn-restyled",onClick:r,children:"Connect to MetaMask"}),Object(D.jsx)(h.a.Text,{style:{color:"white",marginLeft:"1rem"},children:n?Object(D.jsxs)(D.Fragment,{children:["Connected with ",Object(D.jsx)("b",{children:t})]}):Object(D.jsx)(D.Fragment,{children:"Not connected"})}),a?Object(D.jsxs)(h.a.Title,{style:{color:"white"},level:4,children:["Chain Id: ",a]}):null,Object(D.jsx)(I,{})]})},B=function(e){return new o.a(e)},S=function(){return Object(D.jsx)(i.a,{getLibrary:B,children:Object(D.jsx)(A,{})})};s.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(S,{})}),document.getElementById("root"))}},[[695,1,2]]]);
//# sourceMappingURL=main.ed2fbff2.chunk.js.map