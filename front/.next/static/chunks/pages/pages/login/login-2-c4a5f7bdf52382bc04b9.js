_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)}))}}r.d(t,"a",(function(){return a}))},OgRC:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/login/login-2",function(){return r("rId/")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o,i=a(r("q1tI")),l=r("elyg"),s=r("nOHt"),c=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var r=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),c.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function p(e,t,r,n){(0,l.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),f[t+"%"+r]=!0)}var m=function(e){var t=!1!==e.prefetch,r=i.default.useState(),a=n(r,2),o=a[0],c=a[1],m=(0,s.useRouter)(),h=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,l.resolveHref)(h,e.href);return{href:t,as:e.as?(0,l.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),g=v.href,b=v.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(g)&&!f[g+"%"+b])return d(o,(function(){p(m,g,b)}))}),[t,o,g,b,m]);var w=e.children,y=e.replace,P=e.shallow,E=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var N=i.Children.only(w),k={ref:function(e){e&&c(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,b,y,P,E)}};return t&&(k.onMouseEnter=function(e){(0,l.isLocalURL)(g)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),p(m,g,b,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(k.href=(0,l.addBasePath)(b)),i.default.cloneElement(N,k)};t.default=m},"rId/":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("jwaz"),i=r("IP2g"),l=r("NKCw"),s=r("NWhz"),c=r("8tEE"),u=r("UGp+"),f=r("tCCL"),d=r("YFqc"),p=r.n(d),m=r("8Kt/"),h=r.n(m),v=a.a.createElement;function g(){var e=u.b().shape({email:u.d().email("Your email is not valid").required("Please enter your email"),password:u.d().min(6,"Please enter at least 6 characters").required("Please provide your password"),remember:u.a()}),t=Object(l.d)({resolver:Object(s.a)(e),defaultValues:{email:"",password:"",remember:!1}}),r=t.control,n=t.handleSubmit,a=t.errors;return v(o.B,{onSubmit:n((function(e){console.log(e)}))},v(o.B.Group,null,v(o.z,{size:"lg"},v(l.a,{as:o.E,type:"email",id:"email",name:"email",size:"lg",control:r,invalid:Boolean(a.email),placeholder:"Please insert your email"}),v(o.G,{for:"email"},"Email"),a.email&&v(o.B.Feedback,{children:a.email.message}))),v(o.B.Group,null,v(o.z,{size:"lg"},v(l.a,{as:o.E,type:"password",id:"password",name:"password",size:"lg",control:r,invalid:Boolean(a.password),placeholder:"Please insert your password"}),v(o.G,{for:"password"},"Password"),a.password&&v(o.B.Feedback,{children:a.password.message}))),v("div",{className:"d-flex align-items-center justify-content-between mb-4"},v(o.B.Group,{className:"mb-0"},v(l.a,{control:r,name:"remember",render:function(e){var t=e.onChange,r=e.onBlur,n=e.value,a=(e.name,e.ref);return v(o.v,{type:"switch",size:"lg",id:"remember",label:"Remember me",onBlur:r,onChange:function(e){return t(e.target.checked)},checked:n,innerRef:a})}})),v(p.a,{href:"#"},"Forgot password?")),v(o.i,{block:!0,type:"submit",variant:"label-primary",size:"lg"},"Login"))}t.default=Object(f.a)((function(){return v(a.a.Fragment,null,v(h.a,null,v("title",null,"Login 2 | Panely")),v(o.u,{fluid:!0},v(o.S,{noGutters:!0,className:"align-items-center justify-content-center h-100"},v(o.s,{lg:"8",xl:"6"},v(o.P,{className:"overflow-hidden"},v(o.S,{noGutters:!0},v(o.s,{md:"6"},v(o.P.Body,{className:"d-flex flex-column justify-content-center align-items-start h-100 bg-primary text-white"},v("h2",null,"Welcome back!"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, temporibus, repudiandae. Voluptate tempore, expedita placeat rem labore iste eveniet ratione."),v(p.a,{href:"/pages/register/register-2"},v(o.i,{pill:!0,variant:"outline-light",size:"lg",width:"widest"},"Register")))),v(o.s,{md:"6"},v(o.P.Body,{className:"h-100"},v("div",{className:"d-flex justify-content-center mb-4"},v(o.i,{pill:!0,variant:"label-primary"},v(i.a,{icon:c.p,className:"mr-2"}),"Facebook"),v(o.i,{pill:!0,variant:"label-info",className:"mx-2"},v(i.a,{icon:c.t,className:"mr-2"}),"Google"),v(o.i,{pill:!0,variant:"label-danger",className:"mx-2"},v(i.a,{icon:c.B,className:"mr-2"}),"Pinterest")),v(g,null)))))))))}),"blank")}},[["OgRC",1,2,4,8,0,3,7,9]]]);