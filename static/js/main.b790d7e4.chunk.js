(this["webpackJsonprandom-words"]=this["webpackJsonprandom-words"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/apple.96037b82.svg"},function(e,a,t){e.exports=t.p+"static/media/apples-green.112cdfbd.svg"},function(e,a,t){e.exports=t.p+"static/media/banana.5c9ab865.svg"},function(e,a,t){e.exports=t.p+"static/media/broccoli.883a77cf.svg"},function(e,a,t){e.exports=t.p+"static/media/carrot.0307abbf.svg"},function(e,a,t){e.exports=t.p+"static/media/cucumber.0356db94.svg"},function(e,a,t){e.exports=t.p+"static/media/grape.5756ad0b.svg"},function(e,a,t){e.exports=t.p+"static/media/lime.6725c410.svg"},function(e,a,t){e.exports=t.p+"static/media/mango.36dd1ce8.svg"},function(e,a,t){e.exports=t.p+"static/media/orange.95977462.svg"},function(e,a,t){e.exports=t.p+"static/media/pineapple.c9276cc2.svg"},function(e,a,t){e.exports=t.p+"static/media/pumpkin.26393850.svg"},function(e,a,t){e.exports=t.p+"static/media/strawberry.b7931bae.svg"},function(e,a,t){e.exports=t.p+"static/media/watermelon.b9fa4331.svg"},function(e,a,t){e.exports=t.p+"static/media/antelope.ffd01bf8.svg"},function(e,a,t){e.exports=t.p+"static/media/cub.d015fdb2.svg"},function(e,a,t){e.exports=t.p+"static/media/deer.859dd995.svg"},function(e,a,t){e.exports=t.p+"static/media/dolphin.7c02e1ca.svg"},function(e,a,t){e.exports=t.p+"static/media/elephant.8a559cee.svg"},function(e,a,t){e.exports=t.p+"static/media/giraffe.b49c81bc.svg"},function(e,a,t){e.exports=t.p+"static/media/hippo.c362d840.svg"},function(e,a,t){e.exports=t.p+"static/media/kangaroo.975cfa44.svg"},function(e,a,t){e.exports=t.p+"static/media/lion.44fb81f0.svg"},function(e,a,t){e.exports=t.p+"static/media/monkey.03003b73.svg"},function(e,a,t){e.exports=t.p+"static/media/moose.f04c9abb.svg"},function(e,a,t){e.exports=t.p+"static/media/polar.dc5d49c0.svg"},function(e,a,t){e.exports=t.p+"static/media/squirrel.7652899c.svg"},function(e,a,t){e.exports=t.p+"static/media/tiger.13c95c8c.svg"},function(e,a,t){e.exports=t.p+"static/media/zebra.4fcf7ac3.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/united-kingdom.386cc387.svg"},function(e,a,t){e.exports=t.p+"static/media/finland.69ca2609.svg"},function(e,a,t){e.exports=t.p+"static/media/somalia.2838fdf4.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/logo.1e84f333.svg"},,function(e,a,t){e.exports=t(66)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(46),m=t.n(r),o=t(8),c=(t(60),t(2)),l=function(e){var a=Object(n.useState)(e),t=Object(c.a)(a,2),i=t[0],r=t[1];return[i,function(e){e.stopPropagation(),r(e.target.textContent.toUpperCase())}]},s=t(47),u=t.n(s),g=t(48),d=t.n(g),p=t(49),f=t.n(p),h=[{name:"english",image:u.a,code:"en"},{name:"finnish",image:d.a,code:"fi"},{name:"somali",image:f.a,code:"so"}],v={EN:{fruits:"fruits",wildanimals:"wild animals"},FI:{fruits:"hedelm\xe4t",wildanimals:"villiel\xe4imet"},SO:{fruits:"khudaar",wildanimals:"duur joogto"}},b={EN:{text:"Baro is an application that displays images and it's the corresponding names in different languages.",heading:"instructions",instructions:["Click on the desired category for example fruits or wild animals.","Press the spacebar to change the images and see different images and words.","To change a language select the desired language from the language option menu and the image name will also change automatically to that specific language, that has been selected."]},FI:{text:"Baro on sovellus, joka n\xe4ytt\xe4\xe4 kuvat ja niiden vastaavat nimet eri kielell\xe4.",heading:"k\xe4ytt\xf6ohjeet",instructions:["Klikkaa haluttua ryhm\xe4 esimerkiksi hedelm\xe4t tai villiel\xe4imet","Paina v\xe4lily\xf6nti\xe4 vaihtamaan kuvia ja niiden vastaavat nimet.","Voi vaihtaa kielt\xe4, valitse haluamasi kieli kielivalintavalikosta, sitten kuvan nimi vaihtuu automaattisesti kyseiseen kieleen."]},SO:{text:"Baro waa barnaamaj kugu tusaayo luqada kala duwan sawiro iyo magacyadooda.",heading:"sida lo isticmaalo",instructions:["Klik ku sii qeebta aad rabtid sida khudaarta mise duur jogtada.","Spees ka taabo si sawirada iyo magacyadooda isu badalaan","Luqada waad badali kartaa. Kabadal meesha luqata la ga badalo kadibna erayga sawirkana toos ayuu isugu badalayaa luqadii aad dooratay."]}},E=Object(n.createContext)();function x(e){var a=e.children,t=l("EN"),n=Object(c.a)(t,2),r=n[0],m=n[1],o=function(e){switch(e){case"EN":return h[0];case"FI":return h[1];case"SO":return h[2];default:return h[0]}}(r);return i.a.createElement(E.Provider,{value:{setLan:m,currentOption:o,lan:r}},a)}var w=t(13),k=t.n(w),y=t(14),C=t.n(y),j=t(15),O=t.n(j),N=t(16),S=t.n(N),I=t(17),T=t.n(I),z=t(18),M=t.n(z),L=t(19),P=t.n(L),F=t(20),B=t.n(F),R=t(21),q=t.n(R),D=t(22),H=t.n(D),A=t(23),W=t.n(A),G=t(24),K=t.n(G),X=t(25),J=t.n(X),U=t(26),Y=t.n(U),V=function(){return{SO:[{name:"tufaax",image:k.a},{name:"tufaax",image:C.a},{name:"canab",image:P.a},{name:"cambe",image:q.a},{name:"moos",image:O.a},{name:"broccolli",image:S.a},{name:"karoto",image:T.a},{name:"qajaar",image:M.a},{name:"liin dhanaan",image:B.a},{name:"liin macaan",image:H.a},{name:"cananas",image:W.a},{name:"bocor",image:K.a},{name:"faroole",image:J.a},{name:"qare",image:Y.a}],FI:[{name:"omena",image:k.a},{name:"omena",image:C.a},{name:"viiniryp\xe4le",image:P.a},{name:"mango",image:q.a},{name:"banaani",image:O.a},{name:"parsakaali",image:S.a},{name:"porkkana",image:T.a},{name:"kurkku",image:M.a},{name:"lime",image:B.a},{name:"appelsiini",image:H.a},{name:"ananas",image:W.a},{name:"kurpitsa",image:K.a},{name:"mansikka",image:J.a},{name:"vesimeloni",image:Y.a}],EN:[{name:"apple",image:k.a},{name:"apple",image:C.a},{name:"grapes",image:P.a},{name:"mango",image:q.a},{name:"banana",image:O.a},{name:"broccolli",image:S.a},{name:"carrot",image:T.a},{name:"cucumber",image:M.a},{name:"lime",image:B.a},{name:"orange",image:H.a},{name:"pineapple",image:W.a},{name:"pumpkin",image:K.a},{name:"strawberry",image:J.a},{name:"watermelon",image:Y.a}]}},$=function(e){var a=Object(n.useState)(e),t=Object(c.a)(a,2),i=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){32===e.keyCode&&(setTimeout((function(){r(!1)}),500),r(!0))};return window.addEventListener("keypress",e),function(){window.removeEventListener("keypress",e)}}),[r]),[i]},Q=t(73),Z=Object(Q.a)({Heading:{textTransform:"uppercase",letterSpacing:".2rem",fontSize:"2.5rem",margin:"3rem 0"}}),_=function(e){var a=e.title,t=Z().Heading;return i.a.createElement("h1",{className:t},a)},ee=Object(Q.a)({ParentComponent:{height:"100%",width:"100%",color:"#0f3846",display:"flex",justifyContent:"center"},ParentItem:{marginTop:"3rem",width:"30rem",height:"30rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}});function ae(e){var a=e.children,t=e.title,n=ee(),r=n.ParentComponent,m=n.ParentItem;return i.a.createElement("div",{className:r},i.a.createElement("div",{className:m},i.a.createElement(_,{title:t}),a))}var te=function(){return i.a.createElement("div",{className:"lds-ripple"},i.a.createElement("div",null),i.a.createElement("div",null))},ne=Object(Q.a)({ImgContainer:{width:"25rem",height:"25rem"},Img:{width:"100%",height:"100%",objectFit:"contain",padding:"1rem"},Para:{height:"10rem",marginTop:"3rem",fontSize:"2.5rem",fontWeight:"500"}});function ie(e){var a=e.image,t=e.name,n=ne(),r=n.ImgContainer,m=n.Img,o=n.Para;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r},i.a.createElement("img",{className:m,src:a,alt:t})),i.a.createElement("div",{className:o},i.a.createElement("p",null,t)))}function re(){var e=Object(n.useContext)(E).lan,a=V()[e],t=a.length,r=$(!1),m=Object(c.a)(r,1)[0],o=Object(n.useState)((function(){return Math.floor(Math.random()*t)})),l=Object(c.a)(o,2),s=l[0],u=l[1];Object(n.useEffect)((function(){m&&u((function(e){for(var a=Math.floor(Math.random()*t);e===a;)a=Math.floor(Math.random()*t);return a}))}),[m,t]);var g=a[s],d=g.name,p=g.image;return i.a.createElement(ae,{title:"fruits"},m?i.a.createElement(te,null):i.a.createElement(ie,{name:d,image:p}))}var me=t(27),oe=t.n(me),ce=t(28),le=t.n(ce),se=t(29),ue=t.n(se),ge=t(30),de=t.n(ge),pe=t(31),fe=t.n(pe),he=t(32),ve=t.n(he),be=t(33),Ee=t.n(be),xe=t(34),we=t.n(xe),ke=t(35),ye=t.n(ke),Ce=t(36),je=t.n(Ce),Oe=t(37),Ne=t.n(Oe),Se=t(38),Ie=t.n(Se),Te=t(39),ze=t.n(Te),Me=t(40),Le=t.n(Me),Pe=t(41),Fe=t.n(Pe),Be=function(){return{SO:[{name:"dayr",image:oe.a},{name:"cunuga libaxa",image:le.a},{name:"cowl",image:ue.a},{name:"dolfiin",image:de.a},{name:"maroodi",image:fe.a},{name:"gari",image:ve.a},{name:"weel",image:Ee.a},{name:"kangaruu",image:we.a},{name:"libaax",image:ye.a},{name:"danyeer",image:je.a},{name:"dibi",image:Ne.a},{name:"danwaco",image:Ie.a},{name:"dabangaale",image:ze.a},{name:"shabeel",image:Le.a},{name:"dameer farow",image:Fe.a}],FI:[{name:"antilooppi",image:oe.a},{name:"pentu",image:le.a},{name:"peura",image:ue.a},{name:"delfiini",image:de.a},{name:"norsu",image:fe.a},{name:"kirahvi",image:ve.a},{name:"virtahepo",image:Ee.a},{name:"kenguru",image:we.a},{name:"leijona",image:ye.a},{name:"apina",image:je.a},{name:"hirvi",image:Ne.a},{name:"j\xe4\xe4 karhu",image:Ie.a},{name:"orava",image:ze.a},{name:"tiikeri",image:Le.a},{name:"seepra",image:Fe.a}],EN:[{name:"antelope",image:oe.a},{name:"cub",image:le.a},{name:"deer",image:ue.a},{name:"dolphin",image:de.a},{name:"elephant",image:fe.a},{name:"giraffe",image:ve.a},{name:"hippopotamus",image:Ee.a},{name:"kangaroo",image:we.a},{name:"lion",image:ye.a},{name:"monkey",image:je.a},{name:"moose",image:Ne.a},{name:"polar bear",image:Ie.a},{name:"squirrel",image:ze.a},{name:"tiger",image:Le.a},{name:"zebra",image:Fe.a}]}};function Re(e){var a=Object(n.useContext)(E).lan,t=Be()[a],r=t.length,m=$(!1),o=Object(c.a)(m,1)[0],l=Object(n.useState)((function(){return Math.floor(Math.random()*r)})),s=Object(c.a)(l,2),u=s[0],g=s[1];Object(n.useEffect)((function(){o&&g((function(e){for(var a=Math.floor(Math.random()*r);e===a;)a=Math.floor(Math.random()*r);return a}))}),[o,r]);var d=t[u],p=d.name,f=d.image;return i.a.createElement(ae,{title:"wild animals"},o?i.a.createElement(te,null):i.a.createElement(ie,{name:p,image:f}))}var qe=function(e){for(var a=[];a.length<12;){var t=Math.floor(Math.random()*e.length);a.includes(e[t])||a.push(e[t])}return a},De=Object(Q.a)({Card:{backgroundColor:"#eaf8fd",padding:"1rem",margin:"2rem",height:"25rem",borderRadius:".5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#1a5e75",fontSize:"1.6rem",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",color:"#2484a4"}},Content:{height:"90%",width:"100%",padding:"1rem",display:"grid",gridTemplateRows:"repeat(3, 1fr)",gridTemplateColumns:"repeat(4, 1fr)",gridGap:".5rem","& img":{width:"100%",height:"8vh",paddingTop:".5rem",transition:"all .4s ease-out","&:hover":{transform:"scale(1.2)"}}},Name:{textAlign:"center",fontSize:"1.6rem",justifySelf:"flex-start",textTransform:"uppercase"}});function He(e){var a=e.name,t=e.data,n=De(),r=n.Card,m=n.Content,o=n.Name;return i.a.createElement("div",{className:r},i.a.createElement("div",{className:m},qe(t).map((function(e,a){return i.a.createElement("img",{key:a,src:e.image,alt:e.name})}))),i.a.createElement("h1",{className:o},a))}function Ae(e){var a=e.to,t=e.name,n=e.data;return i.a.createElement(o.c,{style:{textDecoration:"none"},to:a},i.a.createElement(He,{name:t,data:n}))}var We=Object(Q.a)({LinkContainer:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"content-box",paddingRight:"2.5rem",overflowX:"hidden",overflowY:"auto"},LinkContent:{height:"100%",width:"100%",display:"grid",gridTemplateRows:"min-content",gridTemplateColumns:"repeat(auto-fit, minmax(30rem, 1fr))",rowGap:"2rem",columnGap:"2rem"}});function Ge(e){var a=We(),t=a.LinkContainer,r=a.LinkContent,m=Object(n.useContext)(E).lan,o=v[m],c=o.fruits,l=o.wildanimals;return i.a.createElement("div",{className:t},i.a.createElement("div",{className:r},i.a.createElement(Ae,{to:"fruits",name:c,data:V().EN}),i.a.createElement(Ae,{to:"wildanimals",name:l,data:Be().EN})))}var Ke=Object(Q.a)({Paragraph:{fontSize:"1.6rem",letterSpacing:".2rem",lineHeight:"1.6"},Heading:{marginTop:"2rem",marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"},Counter:{fontWeight:"600"}});var Xe=function(){var e=Ke(),a=e.Paragraph,t=e.Heading,r=e.Counter,m=Object(n.useContext)(E).lan,o=b[m],c=o.text,l=o.heading,s=o.instructions;return i.a.createElement("div",{className:a},i.a.createElement("p",null,c),i.a.createElement("h1",{className:t},l),s.map((function(e,a){return i.a.createElement("p",{key:a},i.a.createElement("span",{className:r},a+1,". "),i.a.createElement("span",null,e))})))};function Je(e){var a=e.match.params.name;return i.a.createElement(i.a.Fragment,null,function(e){switch(e.toLowerCase()){case"about":return i.a.createElement(Xe,null);case"wildanimals":return i.a.createElement(Re,null);case"fruits":return i.a.createElement(re,null);default:return i.a.createElement(Ge,null)}}(a))}var Ue=t(10),Ye=Object(Q.a)({Container:{gridRow:"2 / span 1",gridColumn:"2 / 10",height:"calc(100vh - 12rem)",overflow:"hidden",overflowX:"hidden"}});function Ve(e){var a=Ye().Container;return i.a.createElement("div",{className:a},e.children)}var $e=t(53),Qe=t.n($e),Ze=Object(Q.a)({Sidebar:{height:"calc(100% - 8rem)",position:"fixed",top:"8rem",left:"0",marginBottom:"4rem",backgroundColor:"#48c3ed",overflowX:"hidden",transition:"all .5s ease-out"},isShown:{width:"30rem",zIndex:"1"},NotShown:{width:"0rem"},List:{fontSize:"1.8rem",letterSpacing:".1rem",textTransform:"uppercase",listStyleType:"none",color:"white","& li":{marginBottom:"1rem","& a":{textDecoration:"none",color:"#777","&:hover":{color:"#f7f7f7"}}}}});function _e(e){var a=e.show,t=e.toggle,n=Ze(),r=n.Sidebar,m=n.isShown,c=n.NotShown,l=n.List,s=a?"".concat(r," ").concat(m):"".concat(r," ").concat(c);return i.a.createElement("div",{className:s},i.a.createElement("ul",{className:l},i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/"},"Home")),i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/about"},"About")),i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/"},"Categories"))))}var ea=function(e){var a=Object(n.useState)(e),t=Object(c.a)(a,2),i=t[0],r=t[1];return[i,function(){r(!i)}]},aa=t(12),ta=Object(Q.a)({Menu:{height:"4rem",width:"4rem",marginLeft:"2rem",marginRight:"auto",fontSize:"3.5rem",color:"#777",display:"flex",alignItems:"center",justifyContent:"center",position:"relative","& span":{cursor:"pointer","&:hover":{color:"#f7f7f7"}}}});function na(){var e=ea(!1),a=Object(c.a)(e,2),t=a[0],n=a[1],r=ta().Menu;return i.a.createElement("div",{className:r},i.a.createElement("span",{onClick:n},t?i.a.createElement(aa.a,null):i.a.createElement(aa.b,null)),i.a.createElement(_e,{show:t,toggle:n}))}var ia=Object(Q.a)({Selection:{position:"absolute",width:"100%",top:"5.5rem",left:"0",backgroundColor:"#48c3ed",textTransform:"uppercase","& div":{backgroundColor:"#2b758e",padding:".5rem",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .4s ease-out","&:not(:last-child)":{marginBottom:".5rem"},"&:hover":{backgroundColor:"#3288a5"}}}});var ra=function(e){var a=e.disStyle,t=e.toggle,r=ia().Selection,m=Object(n.useContext)(E).setLan,o=function(e){m(e),t()};return i.a.createElement("div",{className:r,style:a},h.map((function(e,a){return i.a.createElement("div",{onClick:o,key:a},e.code,i.a.createElement("img",{src:e.image,alt:e.name}))})))},ma=Object(Q.a)({LanContainer:{position:"relative",height:"4rem",width:"12rem",backgroundColor:"#3288a5",margin:"0 2rem",padding:".5rem",cursor:"pointer",fontSize:"2.2rem",color:"white",borderRadius:".3rem",transition:"all .4s ease-out",display:"flex",alignItems:"center",justifyContent:"space-between","& p":{textAlign:"center"},"& img":{width:"3rem",height:"3rem"}},Chevron:{display:"flex",alignItems:"center",justifyContent:"center"}});var oa=function(){var e=ma(),a=e.LanContainer,t=e.Chevron,r=ea(!1),m=Object(c.a)(r,2),o=m[0],l=m[1],s=Object(n.useContext)(E).currentOption,u=s.name,g=s.image,d=s.code,p=o?{display:"block",height:"100%"}:{display:"none",height:"0"};return i.a.createElement("div",{className:a,onClick:l},i.a.createElement("p",null,d.toUpperCase()),i.a.createElement("img",{src:g,alt:u}),i.a.createElement("div",{className:t},o?i.a.createElement(aa.c,null):i.a.createElement(aa.d,null)),i.a.createElement(ra,{disStyle:p,toggle:l}))},ca=Object(Q.a)({Nav:{gridRow:"1 / span 1",gridColumn:"1 / -1",height:"8rem",backgroundColor:"#48c3ed",display:"flex",alignItems:"center",justifyContent:"center"}});function la(){var e=ca().Nav;return i.a.createElement("nav",{className:e},i.a.createElement(na,null),i.a.createElement("div",null,i.a.createElement("img",{src:Qe.a,alt:"logo"})),i.a.createElement(oa,null))}var sa=Object(Q.a)({Footer:{gridRow:"3 / span 1",gridColumn:"1 / -1",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center","& p":{margin:"0",padding:"0",color:"#0f3846",textAlign:"center",fontSize:"1.6rem"}}});function ua(){var e=sa().Footer;return i.a.createElement("footer",{className:e},i.a.createElement("p",null,"Baro ",(new Date).getFullYear()))}var ga=Object(Q.a)({root:{height:"100vh",width:"100vw",display:"grid",gridTemplateRows:"min-content min-content min-content",gridTemplateColumns:"1fr repeat(8, minmax(min-content, 14rem)) 1fr",backgroundColor:"#f7f7f7"}});var da=function(){var e=ga();return i.a.createElement("div",{className:e.root},i.a.createElement(o.b,{basename:"/"},i.a.createElement(x,null,i.a.createElement(la,null),i.a.createElement(Ve,null,i.a.createElement(Ue.c,null,i.a.createElement(Ue.a,{exact:!0,path:"/:name",render:function(e){return i.a.createElement(Je,e)}}),i.a.createElement(Ue.a,{exact:!0,path:"/",render:function(){return i.a.createElement(Ge,null)}}))),i.a.createElement(ua,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(o.a,null,i.a.createElement(da,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[55,1,2]]]);
//# sourceMappingURL=main.b790d7e4.chunk.js.map