_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"2Gn+":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/button",function(){return r("vqB2")}])},"41ye":function(e,n,r){"use strict";var t=r("q1tI"),a=r.n(t),i=r("17x9"),l=r.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=Object(t.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,u=c(e,["color","size"]);return a.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("polyline",{points:"21 8 21 21 3 21 3 8"}),a.a.createElement("rect",{x:"1",y:"3",width:"22",height:"5"}),a.a.createElement("line",{x1:"10",y1:"12",x2:"14",y2:"12"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Archive",n.a=u},YFqc:function(e,n,r){e.exports=r("cTJO")},cTJO:function(e,n,r){"use strict";var t=r("J4zp"),a=r("284h");n.__esModule=!0,n.default=void 0;var i,l=a(r("q1tI")),o=r("elyg"),c=r("nOHt"),u=new Map,s=window.IntersectionObserver,d={};var p=function(e,n){var r=i||(s?i=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),u.set(e,n),function(){try{r.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function f(e,n,r,t){(0,o.isLocalURL)(n)&&(e.prefetch(n,r,t).catch((function(e){0})),d[n+"%"+r]=!0)}var v=function(e){var n=!1!==e.prefetch,r=l.default.useState(),a=t(r,2),i=a[0],u=a[1],v=(0,c.useRouter)(),y=v&&v.pathname||"/",b=l.default.useMemo((function(){var n=(0,o.resolveHref)(y,e.href);return{href:n,as:e.as?(0,o.resolveHref)(y,e.as):n}}),[y,e.href,e.as]),h=b.href,g=b.as;l.default.useEffect((function(){if(n&&s&&i&&i.tagName&&(0,o.isLocalURL)(h)&&!d[h+"%"+g])return p(i,(function(){f(v,h,g)}))}),[n,i,h,g,v]);var m=e.children,w=e.replace,P=e.shallow,O=e.scroll;"string"===typeof m&&(m=l.default.createElement("a",null,m));var k=l.Children.only(m),x={ref:function(e){e&&u(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=t.indexOf("#")<0),n[a?"replace":"push"](r,t,{shallow:i}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,h,g,w,P,O)}};return n&&(x.onMouseEnter=function(e){(0,o.isLocalURL)(h)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),f(v,h,g,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(x.href=(0,o.addBasePath)(g)),l.default.cloneElement(k,x)};n.default=v},d0P0:function(e,n,r){"use strict";var t=r("q1tI"),a=r.n(t),i=r("17x9"),l=r.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=Object(t.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,u=c(e,["color","size"]);return a.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("circle",{cx:"12",cy:"5",r:"3"}),a.a.createElement("line",{x1:"12",y1:"22",x2:"12",y2:"8"}),a.a.createElement("path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Anchor",n.a=u},g437:function(e,n,r){"use strict";var t=r("q1tI"),a=r.n(t),i=r("17x9"),l=r.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=Object(t.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,u=c(e,["color","size"]);return a.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a.a.createElement("circle",{cx:"12",cy:"12",r:"3"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Eye",n.a=u},"mV+O":function(e,n,r){"use strict";var t=r("q1tI"),a=r.n(t),i=r("17x9"),l=r.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=Object(t.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,u=c(e,["color","size"]);return a.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),a.a.createElement("circle",{cx:"12",cy:"13",r:"4"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Camera",n.a=u},vqB2:function(e,n,r){"use strict";r.r(n);var t=r("rePB"),a=r("1OyB"),i=r("vuIU"),l=r("Ji7U"),o=r("md7G"),c=r("foSv"),u=r("q1tI"),s=r.n(u),d=r("jwaz"),p=r("IP2g"),f=r("0ci1"),v=r("ANjH"),y=r("/MKj"),b=r("wHSu"),h=r("d0P0"),g=r("41ye"),m=r("mV+O"),w=r("g437"),P=r("tCCL"),O=r("qGWM"),k=r("8Kt/"),x=r.n(k),j=r("YFqc"),B=r.n(j),T=s.a.createElement;function E(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=Object(c.a)(e);if(n){var a=Object(c.a)(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return Object(o.a)(this,r)}}var S=function(e){Object(l.a)(r,e);var n=E(r);function r(){return Object(a.a)(this,r),n.apply(this,arguments)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Button"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Button",link:"/elements/base/button"}])}},{key:"render",value:function(){return T(s.a.Fragment,null,T(x.a,null,T("title",null,"Button | Panely")),T(d.u,{fluid:!0},T(d.S,null,T(d.s,{xs:"12"},T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Variants")),T(d.P.Body,null,T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Solid")),T(d.P.Body,null,T("p",null,"These is a standard button variant, you can use it by setting"," ",T("code",null,"variant")," property with contextual color"),T(d.w,null,T(d.i,{variant:"primary"},"Primary")," ",T(d.i,{variant:"secondary"},"Secondary")," ",T(d.i,{variant:"success"},"Success")," ",T(d.i,{variant:"warning"},"Warning")," ",T(d.i,{variant:"danger"},"Danger")," ",T(d.i,{variant:"info"},"Info")," ",T(d.i,{variant:"dark"},"Dark")," ",T(d.i,{variant:"light"},"Light")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Outline")),T(d.P.Body,null,T("p",null,"Replace the default ",T("code",null,"variant")," property value with"," ",T("code",null,"outline-(color)")," to apply these variants"),T(d.w,null,T(d.i,{variant:"outline-primary"},"Primary")," ",T(d.i,{variant:"outline-secondary"},"Secondary")," ",T(d.i,{variant:"outline-success"},"Success")," ",T(d.i,{variant:"outline-warning"},"Warning")," ",T(d.i,{variant:"outline-danger"},"Danger")," ",T(d.i,{variant:"outline-info"},"Info")," ",T(d.i,{variant:"outline-dark"},"Dark")," ",T(d.i,{variant:"outline-light"},"Light")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Flat")),T(d.P.Body,null,T("p",null,"Replace the default ",T("code",null,"variant")," property value with"," ",T("code",null,"flat-(color)")," to apply these variants"),T(d.w,null,T(d.i,{variant:"flat-primary"},"Primary")," ",T(d.i,{variant:"flat-secondary"},"Secondary")," ",T(d.i,{variant:"flat-success"},"Success")," ",T(d.i,{variant:"flat-warning"},"Warning")," ",T(d.i,{variant:"flat-danger"},"Danger")," ",T(d.i,{variant:"flat-info"},"Info")," ",T(d.i,{variant:"flat-dark"},"Dark")," ",T(d.i,{variant:"flat-light"},"Light")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Label")),T(d.P.Body,null,T("p",null,"Replace the default ",T("code",null,"variant")," property value with"," ",T("code",null,"label-(color)")," to apply these variants"),T(d.w,null,T(d.i,{variant:"label-primary"},"Primary")," ",T(d.i,{variant:"label-secondary"},"Secondary")," ",T(d.i,{variant:"label-success"},"Success")," ",T(d.i,{variant:"label-warning"},"Warning")," ",T(d.i,{variant:"label-danger"},"Danger")," ",T(d.i,{variant:"label-info"},"Info")," ",T(d.i,{variant:"label-dark"},"Dark")," ",T(d.i,{variant:"label-light"},"Light")))),T(d.P,{className:"mb-0"},T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Text")),T(d.P.Body,null,T("p",null,"Replace the default ",T("code",null,"variant")," property value with"," ",T("code",null,"text-(color)")," to apply these variants"),T(d.w,null,T(d.i,{variant:"text-primary"},"Primary")," ",T(d.i,{variant:"text-secondary"},"Secondary")," ",T(d.i,{variant:"text-success"},"Success")," ",T(d.i,{variant:"text-warning"},"Warning")," ",T(d.i,{variant:"text-danger"},"Danger")," ",T(d.i,{variant:"text-info"},"Info")," ",T(d.i,{variant:"text-dark"},"Dark")," ",T(d.i,{variant:"text-light"},"Light")))))))),T(d.S,null,T(d.s,{md:"7"},T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Pill buttons")),T(d.P.Body,null,T("p",null,"Extend button element with ",T("code",null,"pill")," property to make the button more rounded."),T(d.w,null,T(d.i,{pill:!0,variant:"label-primary"},"Primary")," ",T(d.i,{pill:!0,variant:"label-secondary"},"Secondary")," ",T(d.i,{pill:!0,variant:"outline-success"},"Success")," ",T(d.i,{pill:!0,variant:"outline-warning"},"Warning")," ",T(d.i,{pill:!0,variant:"flat-danger"},"Danger")," ",T(d.i,{pill:!0,variant:"flat-info"},"Info")," ",T(d.i,{pill:!0,variant:"dark"},"Dark")," ",T(d.i,{pill:!0,variant:"light"},"Light")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Sizing")),T(d.P.Body,null,T("p",null,"Make your button larger or smaller by setting ",T("code",null,"size")," property with"," ",T("code",null,"sm|lg")," to button."),T(d.w,null,T(d.i,{variant:"primary",size:"sm"},"Smaller")," ",T(d.i,{variant:"secondary"},"Default")," ",T(d.i,{variant:"success",size:"lg"},"Larger")," ",T(d.i,{icon:!0,variant:"warning",size:"sm"},T(p.a,{icon:b.Ib}))," ",T(d.i,{icon:!0,variant:"danger"},T(p.a,{icon:b.O}))," ",T(d.i,{icon:!0,variant:"info",size:"lg"},T(p.a,{icon:b.ac}))," ",T(d.i,{icon:!0,circle:!0,variant:"warning",size:"sm"},T(p.a,{icon:b.Ib}))," ",T(d.i,{icon:!0,circle:!0,variant:"danger"},T(p.a,{icon:b.O}))," ",T(d.i,{icon:!0,circle:!0,variant:"info",size:"lg"},T(p.a,{icon:b.ac}))," ",T(d.i,{pill:!0,variant:"dark",size:"sm"},"Smaller")," ",T(d.i,{pill:!0,variant:"success"},"Default")," ",T(d.i,{pill:!0,variant:"info",size:"lg"},"Larger")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Taller, wider and block")),T(d.P.Body,null,T("p",null,"You can't use the properties below together with ",T("code",null,"icon")," property"),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Wide")),T(d.P.Body,null,T("p",null,"Fill ",T("code",null,"width")," property with ",T("code",null,"wide|wider|widest")," to make your button wider"),T(d.w,null,T(d.i,{variant:"primary",width:"wide"},"Wide")," ",T(d.i,{variant:"primary",width:"wider"},"Wider")," ",T(d.i,{variant:"primary",width:"widest"},"Widest")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Tall")),T(d.P.Body,null,T("p",null,"Fill ",T("code",null,"height")," property with ",T("code",null,"tall|taller|tallest")," to make your button taller"),T(d.w,null,T(d.i,{variant:"primary",height:"tall"},"Tall")," ",T(d.i,{variant:"primary",height:"taller"},"Taller")," ",T(d.i,{variant:"primary",height:"tallest"},"Tallest")))),T(d.P,{className:"mb-0"},T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Block")),T(d.P.Body,null,T("p",null,"Add ",T("code",null,"block")," property for full width button style."),T(d.i,{block:!0,variant:"primary"},"Block")," ",T(d.i,{block:!0,variant:"label-primary"},"Block")))))),T(d.s,{md:"5"},T(d.P,null,T(d.P.Header,null,T(d.P.Title,null,"Button icon")),T(d.P.Body,null,T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Square buttons")),T(d.P.Body,null,T("p",null,"If you need square button with an icon inside, you can use ",T("code",null,"icon")," ","property."),T(d.w,null,T(d.i,{icon:!0,variant:"secondary"},T(h.a,null))," ",T(d.i,{icon:!0,variant:"outline-success"},T(g.a,null))," ",T(d.i,{icon:!0,variant:"outline-warning"},T(m.a,null))," ",T(d.i,{icon:!0,variant:"outline-info"},T(w.a,null))," ",T(d.i,{icon:!0,variant:"primary"},T(p.a,{icon:b.Ob}))," ",T(d.i,{icon:!0,variant:"label-danger"},T(p.a,{icon:b.ac}))," ",T(d.i,{icon:!0,variant:"label-info"},T(p.a,{icon:b.O}))," ",T(d.i,{icon:!0,variant:"flat-primary"},T(p.a,{icon:b.q}))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Circle buttons")),T(d.P.Body,null,T("p",null,"Make your icon buttons circular by extending button element with"," ",T("code",null,"circle")," property."),T(d.w,null,T(d.i,{icon:!0,circle:!0,variant:"secondary"},T(h.a,null))," ",T(d.i,{icon:!0,circle:!0,variant:"outline-success"},T(g.a,null))," ",T(d.i,{icon:!0,circle:!0,variant:"outline-warning"},T(m.a,null))," ",T(d.i,{icon:!0,circle:!0,variant:"outline-info"},T(w.a,null))," ",T(d.i,{icon:!0,circle:!0,variant:"primary"},T(p.a,{icon:b.Ob}))," ",T(d.i,{icon:!0,circle:!0,variant:"label-danger"},T(p.a,{icon:b.ac}))," ",T(d.i,{icon:!0,circle:!0,variant:"label-info"},T(p.a,{icon:b.O}))," ",T(d.i,{icon:!0,circle:!0,variant:"flat-primary"},T(p.a,{icon:b.q}))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Icon with text")),T(d.P.Body,null,T("p",null,"If you want to use icon with text, you don't need to apply ",T("code",null,"icon")," ","property"),T(d.w,null,T(d.i,{variant:"primary"},T(w.a,{className:"mr-2"})," Button")," ",T(d.i,{variant:"label-info"},"Button ",T(m.a,{className:"ml-2"}))," ",T(d.i,{variant:"outline-danger"},T(p.a,{icon:b.O,className:"mr-2"})," Button")," ",T(d.i,{variant:"flat-success"},"Button ",T(p.a,{icon:b.H,className:"ml-2"}))))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"States")),T(d.P.Body,null,T("p",null,"Add ",T("code",null,"active")," or ",T("code",null,"disabled")," properties for the active or inactive button appearance."),T(d.i,{variant:"primary",active:!0},"Active")," ",T(d.i,{variant:"primary",disabled:!0},"Disabled"))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Addon")),T(d.P.Body,null,T("p",null,"You can add a counter or marker to button by adding ",T("code",null,"Button.Marker")," ","and ",T("code",null,"Button.Counter")," element and combine with"," ",T(B.a,{href:"/elements/base/badge"},"badge")," or"," ",T(B.a,{href:"/elements/base/marker"},"marker")," component."),T(d.w,null,T(d.i,{variant:"primary"},"Button",T(d.i.Marker,null,T(d.i.Counter,{variant:"secondary"},"12")))," ",T(d.i,{variant:"primary"},"Button",T(d.i.Marker,null,T(d.i.Counter,{pill:!0,variant:"secondary"},"12")))," ",T(d.i,{variant:"primary"},"Button",T(d.i.Marker,null,T(d.J,Object(t.a)({variant:"dot"},"variant","success"))))," ",T(d.i,{icon:!0,variant:"primary"},T(p.a,{icon:b.O}),T(d.i.Marker,null,T(d.i.Counter,{variant:"secondary"},"12")))," ",T(d.i,{icon:!0,variant:"primary"},T(p.a,{icon:b.Ib}),T(d.i.Marker,null,T(d.i.Counter,{pill:!0,variant:"secondary"},"12")))," ",T(d.i,{icon:!0,variant:"primary"},T(p.a,{icon:b.ac}),T(d.i.Marker,null,T(d.J,Object(t.a)({variant:"dot"},"variant","success")))))))))))}}]),r}(s.a.Component);n.default=Object(y.b)(null,(function(e){return Object(v.bindActionCreators)({pageChangeHeaderTitle:f.e,breadcrumbChange:f.c},e)}))(Object(O.a)(Object(P.a)(S)))}},[["2Gn+",0,1,4,2,3,5,6]]]);