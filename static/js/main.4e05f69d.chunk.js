(this["webpackJsonprandom-words"]=this["webpackJsonprandom-words"]||[]).push([[0],Array(18).concat([function(e,a,t){e.exports=t.p+"static/media/apple.e148eb42.png"},function(e,a,t){e.exports=t.p+"static/media/bananas.90fda5eb.png"},function(e,a,t){e.exports=t.p+"static/media/brocoli.eb7d9ade.png"},function(e,a,t){e.exports=t.p+"static/media/Carrot.4c44d6fe.png"},function(e,a,t){e.exports=t.p+"static/media/cucumber.bb207dc4.png"},function(e,a,t){e.exports=t.p+"static/media/lime.2f4425df.png"},function(e,a,t){e.exports=t.p+"static/media/orange.101a4987.png"},function(e,a,t){e.exports=t.p+"static/media/Strawberry.2b26f2d1.png"},function(e,a,t){e.exports=t.p+"static/media/Tomatoes.f0ff3176.png"},function(e,a,t){e.exports=t.p+"static/media/watermelon.45e198ac.png"},,function(e,a,t){e.exports=t.p+"static/media/elephant.8a559cee.svg"},function(e,a,t){e.exports=t.p+"static/media/giraffe.b49c81bc.svg"},function(e,a,t){e.exports=t.p+"static/media/zebra.4fcf7ac3.svg"},,,,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),o=t.n(i),c=t(8),m=(t(40),t(6));function l(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(Math.floor(Math.random()*e)),c=Object(m.a)(o,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){var a=e;window.addEventListener("keypress",(function(e){if(32===e.keyCode){setTimeout((function(){i(!1)}),500),i(!0);var t=function(e){for(var t=Math.floor(Math.random()*a);e===t;)t=Math.floor(Math.random()*a);return t}(Math.floor(Math.random()*a));s(t),console.log("new random ",t)}}))}),[]),[r,l]}var s=t(18),d=t.n(s),u=t(19),g=t.n(u),f=t(20),p=t.n(f),h=t(21),b=t.n(h),v=t(22),x=t.n(v),E=t(23),w=t.n(E),C=t(24),S=t.n(C),y=t(25),j=t.n(y),N=t(26),O=t.n(N),k=t(27),I=t.n(k);function T(){return[{name:"Tufaax",image:d.a},{name:"Moos",image:g.a},{name:"Brocoli",image:p.a},{name:"Karoot",image:b.a},{name:"Qajaar",image:x.a},{name:"Liin Dhanaan",image:w.a},{name:"Liin Macaan",image:S.a},{name:"Faroole",image:j.a},{name:"Yaanyo",image:O.a},{name:"Qare",image:I.a}]}var z=t(54),L=(t(41),Object(z.a)({fruitContainer:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 3rem",overflow:"hidden"},header:{fontSize:"3.4rem",fontWeight:"normal",textTransform:"uppercase",letterSpacing:"1px"},imgContainer:{height:"300px",width:"350px",border:"4px solid rgba(247, 247, 247, 0.5)",borderStyle:"outset",borderRadius:"10px",boxShadow:"2px 5px 20px rgba(0, 0, 0, 0.3)",textAlign:"center",padding:"1rem","&:hover":{boxShadow:"1px 3px 15px rgba(0, 0, 0, 0.3)"}},img:{height:"100%",width:"100%"},name:{fontSize:"3rem",marginTop:"3rem",textTransform:"uppercase",letterSpacing:"1px"}}));function M(e){var a=e.random,t=e.iskeyPressed,n=T()[a].name,i=T()[a].image,o=L();return r.a.createElement("div",{className:o.fruitContainer},r.a.createElement("h1",{className:o.header},"Fruits and vegetables"),r.a.createElement("div",{className:o.imgContainer},t?r.a.createElement("div",{class:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null)):r.a.createElement("img",{className:o.img,src:i,alt:""})),r.a.createElement("p",{className:o.name},!t&&n))}function F(){var e=l(10),a=Object(m.a)(e,2),t=a[0],n=a[1];return r.a.createElement(M,{random:n,iskeyPressed:t})}var R=t(29),D=t.n(R),P=t(30),B=t.n(P),A=t(31),W=t.n(A),G=function(){return[{name:"Elephant",image:D.a},{name:"Giraffe",image:B.a},{name:"Zebra",image:W.a}]},H=Object(z.a)({Heading:{textTransform:"uppercase",letterSpacing:".2rem",fontSize:"2.5rem",margin:"3rem 0"}}),V=function(e){var a=e.title,t=H().Heading;return r.a.createElement("h1",{className:t},a)},X=Object(z.a)({ParentComponent:{height:"100%",width:"100%",display:"flex",justifyContent:"center"},ParentItem:{marginTop:"3rem",width:"30rem",height:"30rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},ImgContainer:{width:"25rem",height:"25rem"},Img:{width:"25rem",height:"25rem",margin:"auto"},Para:{height:"5rem",marginTop:"3rem",fontSize:"1.6rem"}});function Y(e){var a=e.src,t=e.name,n=e.title,i=X(),o=i.ParentComponent,c=i.ParentItem,m=(i.ImgContainer,i.Img),l=i.Para;return r.a.createElement("div",{className:o},r.a.createElement("div",{className:c},r.a.createElement(V,{title:n}),r.a.createElement("img",{className:m,src:a,alt:t}),r.a.createElement("p",{className:l},t)))}function J(e){var a=l(G().length),t=Object(m.a)(a,2),n=t[0],i=t[1],o=G()[i].name,c=G()[i].image;return r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement(Y,{title:"wild animals",src:c,name:o}))}function Q(e){var a=e.match.params.name;return r.a.createElement(r.a.Fragment,null,function(e){switch(e.toLowerCase()){case"wildanimals":return r.a.createElement(J,null);case"fruitsandvegetables":return r.a.createElement(F,null)}}(a))}var K=t(10),Z=Object(z.a)({Card:{padding:"1rem",margin:"2rem",height:"20rem",borderRadius:".5rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#191919",fontSize:"1.6rem",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",color:"#4c4c4c"}},Content:{height:"90%",width:"100%"},Name:{textAlign:"center",fontSize:"1.6rem",justifySelf:"flex-start",textTransform:"uppercase",marginBottom:0}});function $(e){var a=e.name,t=Z(),n=t.Card,i=t.Content,o=t.Name;return r.a.createElement("div",{className:n},r.a.createElement("div",{className:i},"Container place"),r.a.createElement("h1",{className:o},a))}var q=Object(z.a)({LinkStyle:{textDecoration:"none",color:"red",fontSize:"1.6rem"}});function U(e){var a=e.to,t=e.name,n=q().LinkStyle;return r.a.createElement(c.c,{classesName:n,to:a},r.a.createElement($,{name:t}))}var _=Object(z.a)({LinkContainer:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"content-box",paddingRight:"2.5rem",overflowX:"hidden",overflowY:"auto"},LinkContent:{height:"100%",width:"100%",display:"grid",gridTemplateRows:"auto-fit",gridTemplateColumns:"repeat(auto-fit, minmax(30rem, 1fr))",rowGap:"2rem",columnGap:"2rem"}});function ee(e){var a=_(),t=a.LinkContainer,n=a.LinkContent;return r.a.createElement("div",{className:t},r.a.createElement("div",{className:n},r.a.createElement(U,{to:"wildanimals",name:"Wild Animals"}),r.a.createElement(U,{to:"fruitsandvegetables",name:"Fruits and Vegetable"}),r.a.createElement(U,{to:"fruitsandvegetables",name:"Fruits and Vegetable"}),r.a.createElement(U,{to:"fruitsandvegetables",name:"Fruits and Vegetable"})))}var ae=Object(z.a)({Container:{gridRow:"2 / span 1",gridColumn:"2 / 10",height:"calc(100vh - 12rem)",overflow:"hidden",overflowX:"hidden"}});function te(e){var a=ae().Container;return r.a.createElement("div",{className:a},e.children)}var ne=Object(z.a)({Sidebar:{height:"calc(100% - 12rem)",position:"fixed",top:"8rem",left:"0",marginBottom:"4rem",backgroundColor:"black",overflowX:"hidden",transition:"all .5s ease-out"},isShown:{width:"30rem",zIndex:"1"},NotShown:{width:"0rem"},List:{fontSize:"1.8rem",letterSpacing:".1rem",textTransform:"uppercase",listStyleType:"none",color:"white","& li":{marginBottom:"1rem","& a":{textDecoration:"none",color:"#777","&:hover":{color:"#f7f7f7"}}}}});function re(e){var a=e.show,t=ne(),n=t.Sidebar,i=t.isShown,o=t.NotShown,m=t.List,l=a?"".concat(n," ").concat(i):"".concat(n," ").concat(o);return r.a.createElement("div",{className:l},r.a.createElement("ul",{className:m},r.a.createElement("li",null,r.a.createElement(c.c,null,"Home")),r.a.createElement("li",null,r.a.createElement(c.c,null,"About")),r.a.createElement("li",null,r.a.createElement(c.c,null,"Catergories"))))}var ie=function(e){var a=Object(n.useState)(e),t=Object(m.a)(a,2),r=t[0],i=t[1];return[r,function(){i(!r),console.log("is toggling")}]},oe=t(12),ce=Object(z.a)({Menu:{height:"4rem",width:"4rem",marginLeft:"2rem",marginRight:"auto",fontSize:"3.5rem",color:"black",display:"flex",alignItems:"center",justifyContent:"center",position:"relative","& span":{cursor:"pointer"}}});function me(){var e=ie(!1),a=Object(m.a)(e,2),t=a[0],n=a[1],i=ce().Menu;return r.a.createElement("div",{className:i},r.a.createElement("span",{onClick:n},t?r.a.createElement(oe.a,null):r.a.createElement(oe.b,null)),r.a.createElement(re,{show:t}))}var le=Object(z.a)({Nav:{gridRow:"1 / span 1",gridColumn:"1 / -1",height:"8rem",backgroundColor:"yellow",display:"flex",alignItems:"center",justifyContent:"center"}});function se(){var e=le().Nav;return r.a.createElement("nav",{className:e},r.a.createElement(me,null))}var de=Object(z.a)({Footer:{gridRow:"3 / span 1",gridColumn:"1 / -1",height:"4rem",zIndex:"2",display:"flex",alignItems:"center",justifyContent:"center","& p":{margin:"0",padding:"0",color:"black",textAlign:"center",fontSize:"1.6rem"}}});function ue(){var e=de().Footer;return r.a.createElement("footer",{className:e},r.a.createElement("p",null,"Baro ",(new Date).getFullYear()))}var ge=Object(z.a)({root:{height:"100vh",width:"100vw",display:"grid",gridTemplateRows:"min-content min-content min-content",gridTemplateColumns:"1fr repeat(8, minmax(min-content, 14rem)) 1fr",backgroundColor:"#f7f7f7"}});var fe=function(){var e=ge();return r.a.createElement("div",{className:e.root},r.a.createElement(c.b,{basename:"/"},r.a.createElement(se,null),r.a.createElement(te,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/:name",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(K.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ee,null)}}))),r.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[35,1,2]]]);
//# sourceMappingURL=main.4e05f69d.chunk.js.map