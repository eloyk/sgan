_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"4T/C":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/login/login-1",function(){return r("yA2Y")}])},YFqc:function(e,n,r){e.exports=r("cTJO")},cTJO:function(e,n,r){"use strict";var t=r("J4zp"),a=r("284h");n.__esModule=!0,n.default=void 0;var o,l=a(r("q1tI")),s=r("elyg"),i=r("nOHt"),c=new Map,u=window.IntersectionObserver,f={};var d=function(e,n){var r=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),c.set(e,n),function(){try{r.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function p(e,n,r,t){(0,s.isLocalURL)(n)&&(e.prefetch(n,r,t).catch((function(e){0})),f[n+"%"+r]=!0)}var m=function(e){var n=!1!==e.prefetch,r=l.default.useState(),a=t(r,2),o=a[0],c=a[1],m=(0,i.useRouter)(),h=m&&m.pathname||"/",g=l.default.useMemo((function(){var n=(0,s.resolveHref)(h,e.href);return{href:n,as:e.as?(0,s.resolveHref)(h,e.as):n}}),[h,e.href,e.as]),v=g.href,w=g.as;l.default.useEffect((function(){if(n&&u&&o&&o.tagName&&(0,s.isLocalURL)(v)&&!f[v+"%"+w])return d(o,(function(){p(m,v,w)}))}),[n,o,v,w,m]);var b=e.children,y=e.replace,E=e.shallow,N=e.scroll;"string"===typeof b&&(b=l.default.createElement("a",null,b));var _=l.Children.only(b),P={ref:function(e){e&&c(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=t.indexOf("#")<0),n[a?"replace":"push"](r,t,{shallow:o}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,v,w,y,E,N)}};return n&&(P.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(m,v,w,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(P.href=(0,s.addBasePath)(w)),l.default.cloneElement(_,P)};n.default=m},yA2Y:function(e,n,r){"use strict";r.r(n);var t=r("q1tI"),a=r.n(t),o=r("jwaz"),l=r("IP2g"),s=r("NKCw"),i=r("NWhz"),c=r("wHSu"),u=r("UGp+"),f=r("tCCL"),d=r("qGWM"),p=r("YFqc"),m=r.n(p),h=r("8Kt/"),g=r.n(h),v=a.a.createElement;function w(){var e=u.b().shape({email:u.d().email("Your email is not valid").required("Please enter your email"),password:u.d().min(6,"Please enter at least 6 characters").required("Please provide your password"),remember:u.a()}),n=Object(s.d)({resolver:Object(i.a)(e),defaultValues:{email:"",password:"",remember:!1}}),r=n.control,t=n.handleSubmit,a=n.errors;return v(o.B,{onSubmit:t((function(e){console.log(e)}))},v(o.B.Group,null,v(o.z,{size:"lg"},v(s.a,{as:o.E,type:"email",id:"email",name:"email",size:"lg",control:r,invalid:Boolean(a.email),placeholder:"Please insert your email"}),v(o.G,{for:"email"},"Email"),a.email&&v(o.B.Feedback,{children:a.email.message}))),v(o.B.Group,null,v(o.z,{size:"lg"},v(s.a,{as:o.E,type:"password",id:"password",name:"password",size:"lg",control:r,invalid:Boolean(a.password),placeholder:"Please insert your password"}),v(o.G,{for:"password"},"Password"),a.password&&v(o.B.Feedback,{children:a.password.message}))),v("div",{className:"d-flex align-items-center justify-content-between mb-3"},v(o.B.Group,{className:"mb-0"},v(s.a,{control:r,name:"remember",render:function(e){var n=e.onChange,r=e.onBlur,t=e.value,a=(e.name,e.ref);return v(o.v,{type:"switch",size:"lg",id:"remember",label:"Remember me",onBlur:r,onChange:function(e){return n(e.target.checked)},checked:t,innerRef:a})}})),v(m.a,{href:"#"},"Forgot password?")),v("div",{className:"d-flex align-items-center justify-content-between"},v("span",null,"Don't have an account ? ",v(m.a,{href:"/pages/register/register-1"},"Sign Up")),v(o.i,{type:"submit",variant:"label-primary",size:"lg",width:"widest"},"Login")))}n.default=Object(d.a)(Object(f.a)((function(){return v(a.a.Fragment,null,v(g.a,null,v("title",null,"Login 1 | Panely")),v(o.u,{fluid:!0},v(o.S,{noGutters:!0,className:"align-items-center justify-content-center h-100"},v(o.s,{sm:"8",md:"6",lg:"4"},v(o.P,null,v(o.P.Body,null,v("div",{className:"text-center mt-2 mb-4"},v(o.db,{display:!0,circle:!0,variant:"label-primary",className:"mb-4"},v(l.a,{icon:c.Tb}))),v(w,null)))))))}),"blank"))}},[["4T/C",0,1,4,2,3,5,6,8]]]);