(this["webpackJsonprandom-words"]=this["webpackJsonprandom-words"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/apple.96037b82.svg"},function(e,a,t){e.exports=t.p+"static/media/apples-green.112cdfbd.svg"},function(e,a,t){e.exports=t.p+"static/media/banana.5c9ab865.svg"},function(e,a,t){e.exports=t.p+"static/media/broccoli.883a77cf.svg"},function(e,a,t){e.exports=t.p+"static/media/carrot.0307abbf.svg"},function(e,a,t){e.exports=t.p+"static/media/cucumber.0356db94.svg"},function(e,a,t){e.exports=t.p+"static/media/grape.4d75b320.svg"},function(e,a,t){e.exports=t.p+"static/media/lime.6725c410.svg"},function(e,a,t){e.exports=t.p+"static/media/mango.312189c4.svg"},function(e,a,t){e.exports=t.p+"static/media/orange.c1d183b3.svg"},function(e,a,t){e.exports=t.p+"static/media/pineapple.c9276cc2.svg"},function(e,a,t){e.exports=t.p+"static/media/pumpkin.26393850.svg"},function(e,a,t){e.exports=t.p+"static/media/strawberry.b7931bae.svg"},function(e,a,t){e.exports=t.p+"static/media/watermelon.b9fa4331.svg"},function(e,a,t){e.exports=t.p+"static/media/antelope.41276699.svg"},function(e,a,t){e.exports=t.p+"static/media/cub.02eb549a.svg"},function(e,a,t){e.exports=t.p+"static/media/deer.8b2c1062.svg"},function(e,a,t){e.exports=t.p+"static/media/dolphin.d0e6c51d.svg"},function(e,a,t){e.exports=t.p+"static/media/elephant.8a559cee.svg"},function(e,a,t){e.exports=t.p+"static/media/giraffe.b49c81bc.svg"},function(e,a,t){e.exports=t.p+"static/media/hippo.d53072cd.svg"},function(e,a,t){e.exports=t.p+"static/media/kangaroo.a890f693.svg"},function(e,a,t){e.exports=t.p+"static/media/lion.e9e51616.svg"},function(e,a,t){e.exports=t.p+"static/media/monkey.5616bd28.svg"},function(e,a,t){e.exports=t.p+"static/media/moose.34fa1160.svg"},function(e,a,t){e.exports=t.p+"static/media/polar.13a4afb4.svg"},function(e,a,t){e.exports=t.p+"static/media/squirrel.f9fef2da.svg"},function(e,a,t){e.exports=t.p+"static/media/tiger.7a33c02e.svg"},function(e,a,t){e.exports=t.p+"static/media/zebra.4fcf7ac3.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/united-kingdom.386cc387.svg"},function(e,a,t){e.exports=t.p+"static/media/finland.69ca2609.svg"},function(e,a,t){e.exports=t.p+"static/media/somalia.2838fdf4.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/logo.769ec273.svg"},,function(e,a,t){e.exports=t(66)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(46),m=t.n(r),o=t(8),l=(t(60),t(2)),c=function(e){var a=Object(n.useState)(e),t=Object(l.a)(a,2),i=t[0],r=t[1];return[i,function(e){e.stopPropagation(),r(e.target.textContent.toUpperCase())}]},s=t(47),g=t.n(s),u=t(48),d=t.n(u),p=t(49),f=t.n(p),h=[{name:"english",image:g.a,code:"en"},{name:"finnish",image:d.a,code:"fi"},{name:"somali",image:f.a,code:"so"}],v={EN:{fruits:"fruits",wildanimals:"wild animals"},FI:{fruits:"hedelm\xe4t",wildanimals:"villiel\xe4imet"},SO:{fruits:"khudaar",wildanimals:"duur joogto"}},b={EN:{text:"Baro is an application that displays images and it's the corresponding names in different languages.",heading:"instructions",instructions:["Click on the desired category for example fruits or wild animals.","Press the spacebar to change the images and see different images and words.","To change a language select the desired language from the language option menu and the image name will also change automatically to that specific language, that has been selected."]},FI:{text:"Baro on sovellus, joka n\xe4ytt\xe4\xe4 kuvat ja niiden vastaavat nimet eri kielell\xe4.",heading:"k\xe4ytt\xf6ohjeet",instructions:["Klikkaa haluttua ryhm\xe4 esimerkiksi hedelm\xe4t tai villiel\xe4imet","Paina v\xe4lily\xf6nti\xe4 vaihtamaan kuvia ja niiden vastaavat nimet.","Voi vaihtaa kielt\xe4, valitse haluamasi kieli kielivalintavalikosta, sitten kuvan nimi vaihtuu automaattisesti kyseiseen kieleen."]},SO:{text:"Baro waa barnaamaj kugu tusaayo luqada kala duwan sawiro iyo magacyadooda.",heading:"sida lo isticmaalo",instructions:["Klik ku sii qeebta aad rabtid sida khudaarta mise duur jogtada.","Spees ka taabo si sawirada iyo magacyadooda isu badalaan","Luqada waad badali kartaa. Kabadal meesha luqata la ga badalo kadibna erayga sawirkana toos ayuu isugu badalayaa luqadii aad dooratay."]}},E=Object(n.createContext)();function x(e){var a=e.children,t=c("EN"),n=Object(l.a)(t,2),r=n[0],m=n[1],o=function(e){switch(e){case"EN":return h[0];case"FI":return h[1];case"SO":return h[2];default:return h[0]}}(r);return i.a.createElement(E.Provider,{value:{setLan:m,currentOption:o,lan:r}},a)}var w=t(13),k=t.n(w),C=t(14),y=t.n(C),j=t(15),O=t.n(j),N=t(16),S=t.n(N),I=t(17),T=t.n(I),z=t(18),L=t.n(z),P=t(19),F=t.n(P),B=t(20),R=t.n(B),q=t(21),M=t.n(q),D=t(22),H=t.n(D),A=t(23),W=t.n(A),G=t(24),K=t.n(G),X=t(25),J=t.n(X),U=t(26),Y=t.n(U),V=function(){return{SO:[{name:"tufaax",image:k.a},{name:"tufaax",image:y.a},{name:"canab",image:F.a},{name:"cambe",image:M.a},{name:"moos",image:O.a},{name:"broccolli",image:S.a},{name:"karoto",image:T.a},{name:"qajaar",image:L.a},{name:"liin dhanaan",image:R.a},{name:"liin macaan",image:H.a},{name:"cananas",image:W.a},{name:"bocor",image:K.a},{name:"faroole",image:J.a},{name:"qare",image:Y.a}],FI:[{name:"omena",image:k.a},{name:"omena",image:y.a},{name:"viiniryp\xe4le",image:F.a},{name:"mango",image:M.a},{name:"banaani",image:O.a},{name:"parsakaali",image:S.a},{name:"porkkana",image:T.a},{name:"kurkku",image:L.a},{name:"lime",image:R.a},{name:"appelsiini",image:H.a},{name:"ananas",image:W.a},{name:"kurpitsa",image:K.a},{name:"mansikka",image:J.a},{name:"vesimeloni",image:Y.a}],EN:[{name:"apple",image:k.a},{name:"apple",image:y.a},{name:"grapes",image:F.a},{name:"mango",image:M.a},{name:"banana",image:O.a},{name:"broccolli",image:S.a},{name:"carrot",image:T.a},{name:"cucumber",image:L.a},{name:"lime",image:R.a},{name:"orange",image:H.a},{name:"pineapple",image:W.a},{name:"pumpkin",image:K.a},{name:"strawberry",image:J.a},{name:"watermelon",image:Y.a}]}},$=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),i=t[0],r=t[1],m=Object(n.useState)(Math.floor(Math.random()*e)),o=Object(l.a)(m,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){var a=e;window.addEventListener("keypress",(function(e){32===e.keyCode&&(s(Math.floor(Math.random()*a)),setTimeout((function(){r(!1)}),500)),r(!0)}))}),[e]),[i,c]},Q=t(73),Z=Object(Q.a)({Heading:{textTransform:"uppercase",letterSpacing:".2rem",fontSize:"2.5rem",margin:"3rem 0"}}),_=function(e){var a=e.title,t=Z().Heading;return i.a.createElement("h1",{className:t},a)},ee=Object(Q.a)({ParentComponent:{height:"100%",width:"100%",color:"#0f3846",display:"flex",justifyContent:"center"},ParentItem:{marginTop:"3rem",width:"30rem",height:"30rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}});function ae(e){var a=e.children,t=e.title,n=ee(),r=n.ParentComponent,m=n.ParentItem;return i.a.createElement("div",{className:r},i.a.createElement("div",{className:m},i.a.createElement(_,{title:t}),a))}var te=function(){return i.a.createElement("div",{className:"lds-ripple"},i.a.createElement("div",null),i.a.createElement("div",null))},ne=Object(Q.a)({ImgContainer:{width:"25rem",height:"25rem"},Img:{width:"100%",height:"100%",objectFit:"contain",padding:"1rem"},Para:{height:"10rem",marginTop:"3rem",fontSize:"2.5rem",fontWeight:"500"}});function ie(e){var a=e.image,t=e.name,n=ne(),r=n.ImgContainer,m=n.Img,o=n.Para;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r},i.a.createElement("img",{className:m,src:a,alt:t})),i.a.createElement("div",{className:o},i.a.createElement("p",null,t)))}function re(){var e=Object(n.useContext)(E).lan,a=V()[e],t=a.length,r=$(t),m=Object(l.a)(r,2),o=m[0],c=a[m[1]],s=c.name,g=c.image;return i.a.createElement(ae,{title:"fruits"},o?i.a.createElement(te,null):i.a.createElement(ie,{name:s,image:g}))}var me=t(27),oe=t.n(me),le=t(28),ce=t.n(le),se=t(29),ge=t.n(se),ue=t(30),de=t.n(ue),pe=t(31),fe=t.n(pe),he=t(32),ve=t.n(he),be=t(33),Ee=t.n(be),xe=t(34),we=t.n(xe),ke=t(35),Ce=t.n(ke),ye=t(36),je=t.n(ye),Oe=t(37),Ne=t.n(Oe),Se=t(38),Ie=t.n(Se),Te=t(39),ze=t.n(Te),Le=t(40),Pe=t.n(Le),Fe=t(41),Be=t.n(Fe),Re=function(){return{SO:[{name:"dayr",image:oe.a},{name:"cunuga libaxa",image:ce.a},{name:"cowl",image:ge.a},{name:"dolfiin",image:de.a},{name:"maroodi",image:fe.a},{name:"gari",image:ve.a},{name:"weel",image:Ee.a},{name:"kangaruu",image:we.a},{name:"libaax",image:Ce.a},{name:"danyeer",image:je.a},{name:"dibi",image:Ne.a},{name:"danwaco",image:Ie.a},{name:"dabangaale",image:ze.a},{name:"shabeel",image:Pe.a},{name:"dameer farow",image:Be.a}],FI:[{name:"antilooppi",image:oe.a},{name:"pentu",image:ce.a},{name:"peura",image:ge.a},{name:"delfiini",image:de.a},{name:"norsu",image:fe.a},{name:"kirahvi",image:ve.a},{name:"virtahepo",image:Ee.a},{name:"kenguru",image:we.a},{name:"leijona",image:Ce.a},{name:"apina",image:je.a},{name:"hirvi",image:Ne.a},{name:"j\xe4\xe4 karhu",image:Ie.a},{name:"orava",image:ze.a},{name:"tiikeri",image:Pe.a},{name:"seepra",image:Be.a}],EN:[{name:"antelope",image:oe.a},{name:"cub",image:ce.a},{name:"deer",image:ge.a},{name:"dolphin",image:de.a},{name:"elephant",image:fe.a},{name:"giraffe",image:ve.a},{name:"hippopotamus",image:Ee.a},{name:"kangaroo",image:we.a},{name:"lion",image:Ce.a},{name:"monkey",image:je.a},{name:"moose",image:Ne.a},{name:"polar bear",image:Ie.a},{name:"squirrel",image:ze.a},{name:"tiger",image:Pe.a},{name:"zebra",image:Be.a}]}};function qe(e){var a=Object(n.useContext)(E).lan,t=Re()[a],r=t.length,m=$(r),o=Object(l.a)(m,2),c=o[0],s=t[o[1]],g=s.name,u=s.image;return i.a.createElement(ae,{title:"wild animals"},c?i.a.createElement(te,null):i.a.createElement(ie,{name:g,image:u}))}var Me=function(e){for(var a=[];a.length<12;){var t=Math.floor(Math.random()*e.length);a.includes(e[t])||a.push(e[t])}return a},De=Object(Q.a)({Card:{backgroundColor:"#eaf8fd",padding:"1rem",margin:"2rem",height:"25rem",borderRadius:".5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#1a5e75",fontSize:"1.6rem",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",color:"#2484a4"}},Content:{height:"90%",width:"100%",padding:"1rem",display:"grid",gridTemplateRows:"repeat(3, 1fr)",gridTemplateColumns:"repeat(4, 1fr)",gridGap:".5rem","& img":{width:"100%",height:"8vh",paddingTop:".5rem",transition:"all .4s ease-out","&:hover":{transform:"scale(1.2)"}}},Name:{textAlign:"center",fontSize:"1.6rem",justifySelf:"flex-start",textTransform:"uppercase"}});function He(e){var a=e.name,t=e.data,n=De(),r=n.Card,m=n.Content,o=n.Name;return i.a.createElement("div",{className:r},i.a.createElement("div",{className:m},Me(t).map((function(e,a){return i.a.createElement("img",{key:a,src:e.image,alt:e.name})}))),i.a.createElement("h1",{className:o},a))}function Ae(e){var a=e.to,t=e.name,n=e.data;return i.a.createElement(o.c,{style:{textDecoration:"none"},to:a},i.a.createElement(He,{name:t,data:n}))}var We=Object(Q.a)({LinkContainer:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"content-box",paddingRight:"2.5rem",overflowX:"hidden",overflowY:"auto"},LinkContent:{height:"100%",width:"100%",display:"grid",gridTemplateRows:"min-content",gridTemplateColumns:"repeat(auto-fit, minmax(30rem, 1fr))",rowGap:"2rem",columnGap:"2rem"}});function Ge(e){var a=We(),t=a.LinkContainer,r=a.LinkContent,m=Object(n.useContext)(E).lan,o=v[m],l=o.fruits,c=o.wildanimals;return i.a.createElement("div",{className:t},i.a.createElement("div",{className:r},i.a.createElement(Ae,{to:"fruits",name:l,data:V().EN}),i.a.createElement(Ae,{to:"wildanimals",name:c,data:Re().EN})))}var Ke=Object(Q.a)({Paragraph:{fontSize:"1.6rem",letterSpacing:".2rem",lineHeight:"1.6"},Heading:{marginTop:"2rem",marginBottom:"2rem",fontSize:"2.5rem",textTransform:"capitalize"},Counter:{fontWeight:"600"}});var Xe=function(){var e=Ke(),a=e.Paragraph,t=e.Heading,r=e.Counter,m=Object(n.useContext)(E).lan,o=b[m],l=o.text,c=o.heading,s=o.instructions;return i.a.createElement("div",{className:a},i.a.createElement("p",null,l),i.a.createElement("h1",{className:t},c),s.map((function(e,a){return i.a.createElement("p",{key:a},i.a.createElement("span",{className:r},a+1,". "),i.a.createElement("span",null,e))})))};function Je(e){var a=e.match.params.name;return i.a.createElement(i.a.Fragment,null,function(e){switch(e.toLowerCase()){case"about":return i.a.createElement(Xe,null);case"wildanimals":return i.a.createElement(qe,null);case"fruits":return i.a.createElement(re,null);default:return i.a.createElement(Ge,null)}}(a))}var Ue=t(10),Ye=Object(Q.a)({Container:{gridRow:"2 / span 1",gridColumn:"2 / 10",height:"calc(100vh - 12rem)",overflow:"hidden",overflowX:"hidden"}});function Ve(e){var a=Ye().Container;return i.a.createElement("div",{className:a},e.children)}var $e=t(53),Qe=t.n($e),Ze=Object(Q.a)({Sidebar:{height:"calc(100% - 8rem)",position:"fixed",top:"8rem",left:"0",marginBottom:"4rem",backgroundColor:"#48c3ed",overflowX:"hidden",transition:"all .5s ease-out"},isShown:{width:"30rem",zIndex:"1"},NotShown:{width:"0rem"},List:{fontSize:"1.8rem",letterSpacing:".1rem",textTransform:"uppercase",listStyleType:"none",color:"white","& li":{marginBottom:"1rem","& a":{textDecoration:"none",color:"#777","&:hover":{color:"#f7f7f7"}}}}});function _e(e){var a=e.show,t=e.toggle,n=Ze(),r=n.Sidebar,m=n.isShown,l=n.NotShown,c=n.List,s=a?"".concat(r," ").concat(m):"".concat(r," ").concat(l);return i.a.createElement("div",{className:s},i.a.createElement("ul",{className:c},i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/"},"Home")),i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/about"},"About")),i.a.createElement("li",{onClick:t},i.a.createElement(o.c,{to:"/"},"Categories"))))}var ea=function(e){var a=Object(n.useState)(e),t=Object(l.a)(a,2),i=t[0],r=t[1];return[i,function(){r(!i)}]},aa=t(12),ta=Object(Q.a)({Menu:{height:"4rem",width:"4rem",marginLeft:"2rem",marginRight:"auto",fontSize:"3.5rem",color:"#777",display:"flex",alignItems:"center",justifyContent:"center",position:"relative","& span":{cursor:"pointer","&:hover":{color:"#f7f7f7"}}}});function na(){var e=ea(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],r=ta().Menu;return i.a.createElement("div",{className:r},i.a.createElement("span",{onClick:n},t?i.a.createElement(aa.a,null):i.a.createElement(aa.b,null)),i.a.createElement(_e,{show:t,toggle:n}))}var ia=Object(Q.a)({Selection:{position:"absolute",width:"100%",top:"5.5rem",left:"0",backgroundColor:"#48c3ed",textTransform:"uppercase","& div":{backgroundColor:"#2b758e",padding:".5rem",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .4s ease-out","&:not(:last-child)":{marginBottom:".5rem"},"&:hover":{backgroundColor:"#3288a5"}}}});var ra=function(e){var a=e.disStyle,t=e.toggle,r=ia().Selection,m=Object(n.useContext)(E).setLan,o=function(e){m(e),t()};return i.a.createElement("div",{className:r,style:a},h.map((function(e,a){return i.a.createElement("div",{onClick:o,key:a},e.code,i.a.createElement("img",{src:e.image,alt:e.name}))})))},ma=Object(Q.a)({LanContainer:{position:"relative",height:"4rem",width:"12rem",backgroundColor:"#3288a5",margin:"0 2rem",padding:".5rem",cursor:"pointer",fontSize:"2.2rem",color:"white",borderRadius:".3rem",transition:"all .4s ease-out",display:"flex",alignItems:"center",justifyContent:"space-between","& p":{textAlign:"center"},"& img":{width:"3rem",height:"3rem"}},Chevron:{display:"flex",alignItems:"center",justifyContent:"center"}});var oa=function(){var e=ma(),a=e.LanContainer,t=e.Chevron,r=ea(!1),m=Object(l.a)(r,2),o=m[0],c=m[1],s=Object(n.useContext)(E).currentOption,g=s.name,u=s.image,d=s.code,p=o?{display:"block",height:"100%"}:{display:"none",height:"0"};return i.a.createElement("div",{className:a,onClick:c},i.a.createElement("p",null,d.toUpperCase()),i.a.createElement("img",{src:u,alt:g}),i.a.createElement("div",{className:t},o?i.a.createElement(aa.c,null):i.a.createElement(aa.d,null)),i.a.createElement(ra,{disStyle:p,toggle:c}))},la=Object(Q.a)({Nav:{gridRow:"1 / span 1",gridColumn:"1 / -1",height:"8rem",backgroundColor:"#48c3ed",display:"flex",alignItems:"center",justifyContent:"center"}});function ca(){var e=la().Nav;return i.a.createElement("nav",{className:e},i.a.createElement(na,null),i.a.createElement("div",null,i.a.createElement("img",{src:Qe.a,alt:"logo"})),i.a.createElement(oa,null))}var sa=Object(Q.a)({Footer:{gridRow:"3 / span 1",gridColumn:"1 / -1",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center","& p":{margin:"0",padding:"0",color:"#0f3846",textAlign:"center",fontSize:"1.6rem"}}});function ga(){var e=sa().Footer;return i.a.createElement("footer",{className:e},i.a.createElement("p",null,"Baro ",(new Date).getFullYear()))}var ua=Object(Q.a)({root:{height:"100vh",width:"100vw",display:"grid",gridTemplateRows:"min-content min-content min-content",gridTemplateColumns:"1fr repeat(8, minmax(min-content, 14rem)) 1fr",backgroundColor:"#f7f7f7"}});var da=function(){var e=ua();return i.a.createElement("div",{className:e.root},i.a.createElement(o.b,{basename:"/"},i.a.createElement(x,null,i.a.createElement(ca,null),i.a.createElement(Ve,null,i.a.createElement(Ue.c,null,i.a.createElement(Ue.a,{exact:!0,path:"/:name",render:function(e){return i.a.createElement(Je,e)}}),i.a.createElement(Ue.a,{exact:!0,path:"/",render:function(){return i.a.createElement(Ge,null)}}))),i.a.createElement(ga,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(o.a,null,i.a.createElement(da,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[55,1,2]]]);
//# sourceMappingURL=main.10350d45.chunk.js.map