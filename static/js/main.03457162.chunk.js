(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{130:function(e,n,t){var o={"./About":[85,0,2],"./About.jsx":[85,0,2],"./Education":[83,6,3],"./Education.jsx":[83,6,3],"./Experience":[84,0,1,4],"./Experience.jsx":[84,0,1,4],"./Home":[32],"./Home.jsx":[32],"./Projects":[82,0,5],"./Projects.jsx":[82,0,5]};function c(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(o)},c.id=130,e.exports=c},131:function(e,n,t){},132:function(e,n,t){},133:function(e,n,t){},134:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(17),a=t.n(r),l=(t(90),t(91),t(92),t(33)),i=t(20),s=t(71),u=c.a.createContext(),j=t(3),d=t(10),b=t(39),f=t(35),h=t(138),p=t(137),m=t(139),O=t(73),x=t.n(O),v=t(1);function g(e){var n=e.onClick;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(u.Consumer,{children:function(e){return Object(v.jsx)("div",{style:{marginBottom:8},children:Object(v.jsx)(x.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}g.defaultProps={onClick:function(){}};var k,C,y=g,w={logo:{height:70,width:90},sections:[{title:"Home",href:"/"},{title:"About",href:"/about"},{title:"Education",href:"/education"},{title:"Experience",href:"/experience"},{title:"Projects",href:"/projects"},{title:"Resume",href:"https://drive.google.com/file/d/1BBkiv_afKMgbv6yUuMsIOnATtNnso--c/view?usp=sharing",type:"link"}]},N=t.p+"static/media/logo-dark.dce14c57.png",S=t.p+"static/media/logo-light.523b610a.png",B={logoStyle:{width:50,height:40}},T=i.d.a(k||(k=Object(f.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),E=Object(i.d)(l.b)(C||(C=Object(f.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),P=Object(d.f)((function(){var e,n,t,c,r,a=Object(o.useContext)(i.a),l=Object(o.useState)(null),s=Object(j.a)(l,2),u=s[0],d=s[1],b=Object(o.useState)(!1),f=Object(j.a)(b,2),O=f[0],x=f[1];return Object(o.useEffect)((function(){d(w)}),[]),Object(v.jsx)(h.a,{fixed:"top",expand:"md",bg:"black"==a.oppositeColor?"light":"dark",className:"navbar-custom",expanded:O,children:Object(v.jsxs)(p.a,{children:[(null===u||void 0===u?void 0:u.logo)&&Object(v.jsx)(h.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:"black"==a.oppositeColor?S:N,className:"d-inline-block align-top",alt:"main logo",style:null!==u&&void 0!==u&&null!==(e=u.logo)&&void 0!==e&&e.height&&null!==u&&void 0!==u&&null!==(n=u.logo)&&void 0!==n&&n.width?{height:null===u||void 0===u||null===(t=u.logo)||void 0===t?void 0:t.height,width:null===u||void 0===u||null===(c=u.logo)||void 0===c?void 0:c.width}:B.logoStyle})}),Object(v.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return x(!O)},style:{border:"".concat(1,"px solid ","black"==a.oppositeColor?"gray":"white"),color:"".concat("black"==a.oppositeColor?"black":"white")},children:" \u2261 "}),Object(v.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(m.a,{className:"me-auto"}),Object(v.jsx)(m.a,{children:u&&(null===(r=u.sections)||void 0===r?void 0:r.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(T,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return x(!1)},className:"navbar__link",style:{color:a.oppositeColor},children:e.title},e.title):Object(v.jsx)(E,{onClick:function(){return x(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,style:{color:a.oppositeColor},children:e.title},e.title)})))}),Object(v.jsx)(y,{onClick:function(){return x(!1)}})]})]})})})),F=t(32),_=[{component:"About",path:"/about",headerTitle:"About"},{component:"Education",path:"/education",headerTitle:"Education"},{component:"Experience",path:"/experience",headerTitle:"Experience"},{component:"Projects",path:"/projects",headerTitle:"Projects"}];var A,I=function(){var e=Object(o.useState)(null),n=Object(j.a)(e,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){a(_)}),[]),Object(v.jsxs)("div",{className:"MainApp",children:[Object(v.jsx)(P,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(d.c,{className:"switch-container",children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)(b.a,{}),children:[Object(v.jsx)(d.a,{exact:!0,path:"/",component:F.default}),Object(v.jsx)(d.a,{exact:!0,path:"/PersonalWebsite",component:F.default}),r&&r.map((function(e){var n=c.a.lazy((function(){return t(130)("./"+e.component)}));return Object(v.jsx)(d.a,{path:e.path,component:function(){return Object(v.jsx)(n,{})}},e.headerTitle)})),Object(v.jsx)(d.a,{path:"*",component:F.default})]})})})]})},M=Object(i.c)(A||(A=Object(f.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),D={background:"#FCFCFC",color:"#464647",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212",oppositeColor:"black"},H={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe",oppositeColor:"white"};t(131),t(132);var L=function(){return Object(v.jsxs)("section",{className:"star-section",children:[Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"}),Object(v.jsx)("span",{className:"span-flow"})]})};t(133);var z=function(){return Object(v.jsx)("section",{class:"background-container",children:Object(v.jsxs)("div",{class:"back",children:[Object(v.jsx)("span",{class:"sun-rays"}),Object(v.jsx)("span",{class:"sun"}),Object(v.jsxs)("div",{class:"cloud one",children:[Object(v.jsx)("span",{class:"cloud-body"}),Object(v.jsx)("span",{class:"cloud-top"}),Object(v.jsx)("span",{class:"cloud-puff"})]}),Object(v.jsxs)("div",{class:"cloud two",children:[Object(v.jsx)("span",{class:"cloud-body"}),Object(v.jsx)("span",{class:"cloud-top"}),Object(v.jsx)("span",{class:"cloud-puff"})]})]})})};var V=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(v.jsx)(u.Provider,{value:{darkMode:e},children:Object(v.jsxs)(i.b,{theme:e.value?H:D,children:[Object(v.jsx)(M,{}),Object(v.jsxs)("div",{className:"App",children:[e.value?Object(v.jsx)(L,{}):Object(v.jsx)(z,{}),Object(v.jsx)(l.a,{children:Object(v.jsx)(I,{})})]})]})})},U=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,173)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),U()},32:function(e,n,t){"use strict";t.r(n);var o=t(3),c=t(0),r=t(78),a=t.n(r),l=t(58),i=t.n(l),s=t(79),u=t(20),j=[{network:"linkedin",href:"https://www.linkedin.com/in/zac-you-7979a7122/"},{network:"github",href:"https://github.com/ZacYoutube"},{network:"email",href:"zacyou151@yahoo.com"}],d=t(1),b={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};var f=function(){var e=Object(c.useContext)(u.a),n=Object(c.useState)(null),t=Object(o.a)(n,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){a(j)}),[]),Object(d.jsx)("div",{className:"social",children:r?r.map((function(n){return Object(d.jsx)(s.SocialIcon,{style:b.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})},h=t(39),p={name:"Zac You",roles:["a Software Engineer","a dog person","a marvel fan"]},m={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(c.useState)(null),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){r(p)}),[]),t?Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{style:m.mainContainer,children:[Object(d.jsx)("h1",{style:m.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(d.jsxs)("div",{style:{flexDirection:"row"},children:[Object(d.jsx)("h2",{style:m.inlineChild,children:"I'm\xa0"}),Object(d.jsx)(a.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(d.jsx)(f,{})]})}):Object(d.jsx)(h.a,{})}},39:function(e,n,t){"use strict";t(0);var o=t(135),c=t(1),r={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.a=function(){return Object(c.jsx)("div",{style:r.spinnerContainerStyle,children:Object(c.jsx)(o.a,{animation:"grow"})})}},90:function(e,n,t){},91:function(e,n,t){}},[[134,8,9]]]);
//# sourceMappingURL=main.03457162.chunk.js.map