(this.webpackJsonpsearchccs=this.webpackJsonpsearchccs||[]).push([[0],{88:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);a(83);var n=a(0),s=a.n(n),c=a(11),i=a.n(c),r=(a(88),a(89),a(59)),o=a(60),l=a(74),d=a(73),m=a(61),j=a.n(m),u=a(3),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"signup",value:function(e){var t={Name:e.name,email:e.email,token:e.accessToken,Image:e.picture.data.url,ProviderId:"Facebook"};sessionStorage.setItem("userData",JSON.stringify(t)),this.props.history.push("/Dashboard")}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{style:{paddingTop:"20px"},className:"col-sm-12",children:[Object(u.jsx)("div",{className:"col-sm-4"}),Object(u.jsx)("div",{className:"col-sm-4",children:Object(u.jsx)(j.a,{buttonStyle:{padding:"6px"},appId:"194888908816770",autoLoad:!0,version:"10.0",fields:"name,picture",callback:function(t){console.log(t),e.signup(t)}})}),Object(u.jsx)("div",{className:"col-sm-4"})]})})})}}]),a}(n.Component),p=a(41),f=a(62),b=a(127),h=a(130),x=a(132),O=a(140),v=a(98),w=a(137),y=a(134),k=a(135),S=a(141),C=a(142),I=a(138),N=a(136),_=a(71),F=a.n(_),B=a(70),M=a.n(B),T=a(67),E=a.n(T),L=a(69),P=a.n(L);var D=function(){var e=Object(n.useState)((function(){return JSON.parse(sessionStorage.getItem("userData"))})),t=Object(p.a)(e,2),a=t[0],c=(t[1],s.a.useState({data:[],hasMore:!0,nextPage:"first",first:!0})),i=Object(p.a)(c,2),r=i[0],o=i[1],l=s.a.useState(""),d=Object(p.a)(l,2),m=d[0],j=d[1],g=Object(n.useRef)(0),_=s.a.useState(null),B=Object(p.a)(_,2),T=B[0],L=B[1],D=function(){L(null)},J=Boolean(T),z=J?"simple-popover":void 0;Object(n.useEffect)((function(){if(g.current++,console.log("in useEffect ".concat(g.current)),r.first){window.FB.api("/115073638555897","GET",{fields:"feed.limit(30){from,id,message,updated_time,comments.limit(10).filter(stream){created_time,from,message,id,like_count,comment_count},reactions,full_picture}"},(function(e){A(e.feed)}))}}));var R=Object(b.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",background:"linear-gradient(45deg, #fafafa 30%, #e3f2fd 90%)"},paper:{maxWidth:500,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(1)},textField:{marginLeft:e.spacing(1)},typography:{padding:e.spacing(2)},form:{padding:e.spacing(0,3)},cftd:{backgroundColor:"#FF4500",height:"20px",width:"35px",color:"#FFFFFF"},iconButton:{padding:10},outerColumn:{borderRight:"1px solid grey",borderBottom:"1px solid grey",borderLeft:"1px solid grey"},centerColumn:{marginLeft:e.spacing(1)}}})),A=function(e){if(console.log(e),e.data){if(0===e.data.length){var t=Object.assign({},r);return t.hasMore=!1,void o(t)}var a=new RegExp(/#CFTD/i),n=new RegExp(m,"i"),s=0,c=Object.assign({},r);e.data.forEach((function(e,t,i){var r=a.test(e.message),o={from:e.from?e.from:{name:"Unknown",id:"9999999999999999"},id:e.id,message:e.message,updated_time:e.updated_time,comments:e.comments?e.comments.data.length:0,reactions:e.reactions?e.reactions.data.length:0,link:"https://www.facebook.com/groups/cryptics/posts/"+e.id.substr(16)+"/",full_picture:e.full_picture?e.full_picture:"",cftd:r,feed:!0,solve:localStorage.getItem(e.id)?JSON.parse(localStorage.getItem(e.id)):{ans:"",anno:"",solved:!1}};if(""===m)console.log("Selected ".concat(s++)),c.data.push(o),r&&o.comments>0&&e.comments.data.forEach((function(t,a,n){var i={from:t.from?t.from:{name:"Unknown",id:"9999999999999999"},id:t.id,message:t.message,updated_time:t.created_time,comments:t.comment_count,reactions:t.like_count,link:"https://www.facebook.com/groups/cryptics/posts/"+e.id.substr(16)+"/",cftd:!0,feed:!1,solve:localStorage.getItem(t.id)?JSON.parse(localStorage.getItem(t.id)):{ans:"",anno:"",solved:!1}};console.log("Selected ".concat(s++)),c.data.push(i)}));else{var l=n.test(o.message)||n.test(o.from.name),d=a.test(e.message);l?(console.log("Selected ".concat(s++)),c.data.push(o)):o.comments>0&&e.comments.data.every((function(t,a,i){if(n.test(t.message)||n.test(t.from.name)){var r={from:t.from?t.from:{name:"Unknown",id:"9999999999999999"},id:t.id,message:t.message,updated_time:t.created_time,comments:t.comment_count,reactions:t.like_count,link:"https://www.facebook.com/groups/cryptics/posts/"+e.id.substr(16)+"/",cftd:d,feed:!1,solve:localStorage.getItem(t.id)?JSON.parse(localStorage.getItem(t.id)):{ans:"",anno:"",solved:!1}};return console.log("Selected ".concat(s++)),c.data.push(o),c.data.push(r),!1}}))}})),c.first=!1,c.hasMore=0!==e.data.length,c.nextPage=e.paging?e.paging.next.substr(33):"",o(c)}else document.getElementById("mess").innerHTML+=e.error.message+"<br></br>"},U=function(){console.log("in fetchMoreData"),r.hasMore&&window.FB.api(r.nextPage,A)},W=R();return Object(u.jsxs)("div",{className:W.root,children:[Object(u.jsx)(h.a,{className:W.paper,children:Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:1,children:[Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(O.a,{src:a.Image})}),Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(v.a,{align:"left",variant:"subtitle2",children:["Welcome ",a.Name]})}),Object(u.jsxs)(x.a,{item:!0,children:[Object(u.jsx)(w.a,{label:"Search group",id:"outlined-size-small",defaultValue:"Search group",variant:"outlined",size:"small",value:m,onChange:function(e){j(e.target.value),console.log(m)}}),Object(u.jsx)(y.a,{onClick:function(e){o({data:[],hasMore:!0,nextPage:"first",first:!0})},children:Object(u.jsx)(E.a,{style:{color:"CornflowerBlue"}})})]})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{dataLength:r.data.length,next:U,hasMore:r.hasMore,loader:Object(u.jsx)("h4",{children:"Loading..."}),endMessage:Object(u.jsx)("p",{style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"You have reached the end"})}),children:r.data.map((function(e,t){return Object(u.jsxs)(h.a,{className:W.paper,children:[Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(u.jsx)(x.a,{item:!0,children:Object(u.jsx)(O.a,{children:e.from.name.split(" ").map((function(e,t,a){return 0===t||t+1===a.length?e[0]:null})).join("")})}),Object(u.jsxs)(x.a,{item:!0,xs:12,children:[Object(u.jsx)(v.a,{align:"left",children:e.from.name}),Object(u.jsx)(v.a,{align:"left",children:Object(u.jsx)(k.a,{href:e.link,target:"_blank",rel:"noopener noreferrer",variant:"body2",children:e.updated_time})})]}),Object(u.jsxs)(x.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",justify:"flex-start",children:[e.cftd&&e.feed&&Object(u.jsx)(S.a,{size:"small",label:"CFTD",style:{background:"CornflowerBlue",color:"White"}}),!e.feed&&Object(u.jsx)(C.a,{title:"Comment",children:Object(u.jsx)(P.a,{color:"primary"})})]})]}),Object(u.jsx)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsx)(v.a,{align:"left",children:e.message})})}),e.full_picture&&Object(u.jsx)("grid",{item:!0,children:Object(u.jsx)("img",{width:"400",height:"300",alt:"pic",src:e.full_picture})}),Object(u.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(v.a,{align:"left",variant:"body2",children:["likes ",e.reactions]})}),Object(u.jsx)(x.a,{item:!0,xs:!0,children:Object(u.jsxs)(v.a,{align:"right",variant:"body2",gutterBottom:"true",children:["Comments ",e.comments]})})]}),Object(u.jsxs)(x.a,{container:!0,spacing:1,style:{borderTop:"1px solid grey"},children:[Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:1,children:Object(u.jsx)(x.a,{item:!0,xs:!0,style:{display:"flex",alignItems:"center"},children:Object(u.jsx)(O.a,{className:W.img,src:a.Image})})}),Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:9,alignItems:"flex-start",justifyContents:"flex-start",children:Object(u.jsx)(x.a,{item:!0,justify:"left",children:Object(u.jsx)("form",{className:W.form,noValidate:!0,autoComplete:"off",children:Object(u.jsx)(w.a,{fullWidth:!0,style:{disableUnderline:!0,background:"linear-gradient(45deg, #eeeeee 30%, #e0e0e0 90%)",borderRadius:"30px 30px 30px 30px",padding:"0 30px"},InputProps:{disableUnderline:!0},className:W.textField,label:"Answer",fullwidth:!0,multiline:!0,maxRows:4,value:r.data[t].solve.ans,onChange:function(e){return function(e,t,a){if(!r.data[e].solve.solved){var n=Object.assign({},r);n.data[e].solve[t]=a;var s=JSON.stringify(n.data[e].solve);localStorage.setItem(n.data[e].id,s),o(n)}}(t,"ans",e.target.value)}})})})}),Object(u.jsx)(x.a,{container:!0,direction:"column",item:!0,xs:1,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsxs)(x.a,{item:!0,children:[e.solve.solved?Object(u.jsx)(y.a,{children:Object(u.jsx)(M.a,{style:{color:"CornflowerBlue"}})}):Object(u.jsx)(y.a,{onClick:function(e){return a=t,n=e,void(r.data[a].solve.ans&&L(n.currentTarget));var a,n},children:Object(u.jsx)(F.a,{style:{color:"CornflowerBlue"}})}),Object(u.jsx)(I.a,{id:z,open:J,anchorEl:T,onClose:D,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(u.jsxs)(v.a,{className:W.typography,children:["Facebook API doesn't allow posting comments.",Object(u.jsx)("br",{}),"The comment is saved in browser's local storage for reference"]})})]})})]})]})}))})}),Object(u.jsx)("div",{id:"mess"}),r.hasMore&&Object(u.jsx)("div",{children:Object(u.jsx)(N.a,{variant:"outlined",size:"medium",color:"primary",onClick:U,children:"More"})})]})},J=a(72),z=a(12);var R=function(){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(J.a,{basename:"/searchccs",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(z.c,{children:[Object(u.jsx)(z.a,{exact:!0,path:"/",component:g}),Object(u.jsx)(z.a,{path:"/Dashboard",component:D})]})})})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,143)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),A()}},[[97,1,2]]]);
//# sourceMappingURL=main.01e38101.chunk.js.map