"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[552],{552:function(e,n,t){t.r(n);var r,s,o,a,c,i=t(439),u=t(168),l=t(390),d=t(400),p=t(285),h=t(67),x=t(559),m=h.ZP.div(r||(r=(0,u.Z)(["\n  padding: 20px;\n"]))),f=h.ZP.li(s||(s=(0,u.Z)(["\n  margin-bottom: 10px;\n"]))),j=(0,h.ZP)(d.rU)(o||(o=(0,u.Z)(["\n  color: #000;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),Z=h.ZP.input(a||(a=(0,u.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n"]))),v=h.ZP.select(c||(c=(0,u.Z)(["\n  padding: 5px;\n  margin-bottom: 10px;\n"])));n.default=function(){var e=(0,l.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],s=(0,l.useState)(""),o=(0,i.Z)(s,2),a=o[0],c=o[1],u=(0,l.useState)("asc"),h=(0,i.Z)(u,2),g=h[0],b=h[1];(0,l.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var C=t.filter((function(e){return e.username.toLowerCase().includes(a.toLowerCase())})).sort((function(e,n){return"asc"===g?e.username.localeCompare(n.username):n.username.localeCompare(e.username)})),S="User List";return(0,x.jsxs)(m,{children:[(0,x.jsxs)(p.q,{children:[(0,x.jsx)("title",{children:S}),(0,x.jsx)("meta",{name:"description",content:"Browse the list of users"})]}),(0,x.jsx)("h1",{children:S}),(0,x.jsx)(Z,{type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"Search by username"}),(0,x.jsxs)(v,{value:g,onChange:function(e){b(e.target.value)},children:[(0,x.jsx)("option",{value:"asc",children:"Sort A-Z"}),(0,x.jsx)("option",{value:"desc",children:"Sort Z-A"})]}),(0,x.jsx)("ul",{children:C.map((function(e){return(0,x.jsxs)(f,{children:[(0,x.jsx)(j,{to:"/posts/".concat(e.id),children:e.username})," |"," ",(0,x.jsx)(d.rU,{to:"/albums/".concat(e.id),children:"Albums"})]},e.id)}))})]})}}}]);
//# sourceMappingURL=552.057e52fb.chunk.js.map