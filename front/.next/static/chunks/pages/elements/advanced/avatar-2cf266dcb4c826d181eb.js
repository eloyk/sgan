_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),l=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var u=p[l];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var s=r.props[u],d=a[u]||new Set;d.has(s)?o=!1:(d.add(s),a[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(l.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}y.rewind=function(){};var v=y;t.default=v},B5hA:function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),i=n("md7G"),l=n("foSv"),c=n("q1tI"),u=n.n(c),s=n("jwaz"),d=n("IP2g"),p=n("0ci1"),f=n("ANjH"),y=n("/MKj"),v=n("wHSu"),b=n("tCCL"),h=n("8Kt/"),m=n.n(h),g=n("YFqc"),P=n.n(g),w=u.a.createElement;function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var O=function(e){Object(o.a)(n,e);var t=T(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Avatar"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Advanced"},{text:"Avatar",link:"/elements/advanced/avatar"}])}},{key:"render",value:function(){return w(u.a.Fragment,null,w(m.a,null,w("title",null,"Avatar | Panely")),w(s.u,{fluid:!0},w(s.S,null,w(s.s,{md:"6"},w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Basic")),w(s.P.Body,null,w("p",null,w("strong",null,"Avatar")," can be used for displaying image, icon, or character on square or circle shaped elements. Put image, icon, or character into"," ",w("code",null,"Avatar.Display")," or add ",w("code",null,"display")," property to"," ",w("code",null,"Avatar")," component. Look the example below."),w(s.w,null,w(s.d,{display:!0},w(d.a,{icon:v.Tb})),w(s.d,{display:!0},w("img",{src:"/images/avatar/blank.webp",alt:"Avatar Image"})),w(s.d,{display:!0},"C")))),w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Circle version")),w(s.P.Body,null,w("p",null,"Extend default avatar element with ",w("code",null,"circle")," property to change its shape to be circular."),w(s.w,null,w(s.d,{display:!0,circle:!0},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0},w("img",{src:"/images/avatar/blank.webp",alt:"Avatar Image"})),w(s.d,{display:!0,circle:!0},"C")))),w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Sizing")),w(s.P.Body,null,w("p",null,"If you want to change avatar size, you can use ",w("code",null,"size")," property with"," ",w("code",null,"sm|lg")," values."),w(s.w,null,w(s.d,{display:!0,variant:"primary",size:"sm"},"A"),w(s.d,{display:!0,variant:"primary"},"B"),w(s.d,{display:!0,variant:"primary",size:"lg"},"C"),w(s.d,{display:!0,circle:!0,variant:"primary",size:"sm"},"A"),w(s.d,{display:!0,circle:!0,variant:"primary"},"B"),w(s.d,{display:!0,circle:!0,variant:"primary",size:"lg"},"C")))),w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Group")),w(s.P.Body,null,w("p",null,"Wrap a series of avatar elements into ",w("code",null,"AvatarGroup")," to group the elements. Instead of applying avatar sizing classes to every avatar in a group, just set ",w("code",null,"size")," property to each ",w("code",null,"AvatarGroup")),w(s.w,null,w(s.e,{size:"sm"},w(s.d,{display:!0,circle:!0,variant:"primary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"secondary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"success"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"danger"},w(d.a,{icon:v.Tb}))),w(s.e,null,w(s.d,{display:!0,circle:!0,variant:"primary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"secondary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"success"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"danger"},w(d.a,{icon:v.Tb}))),w(s.e,{size:"lg"},w(s.d,{display:!0,circle:!0,variant:"primary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"secondary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"success"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,circle:!0,variant:"danger"},w(d.a,{icon:v.Tb}))))))),w(s.s,{md:"6"},w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Contextual colors")),w(s.P.Body,null,w("p",null,"Change avatar color for functionality, check examples below."),w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Solid")),w(s.P.Body,null,w("p",null,"You can use those by setting ",w("code",null,"variant")," property to avatar element"),w(s.w,null,w(s.d,{display:!0,variant:"primary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"secondary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"info"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"success"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"warning"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"danger"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"light"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"dark"},w(d.a,{icon:v.Tb}))))),w(s.P,{className:"mb-0"},w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Label")),w(s.P.Body,null,w("p",null,"For these variant, you can use ",w("code",null,"label-(color)")," in"," ",w("code",null,"variant")," property"),w(s.w,null,w(s.d,{display:!0,variant:"label-primary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-secondary"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-info"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-success"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-warning"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-danger"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-light"},w(d.a,{icon:v.Tb})),w(s.d,{display:!0,variant:"label-dark"},w(d.a,{icon:v.Tb}))))))),w(s.P,null,w(s.P.Header,{bordered:!0},w(s.P.Title,null,"Addon")),w(s.P.Body,null,w("p",null,"Addon can be replaced to ",w("strong",null,"top-left")," or"," ",w("strong",null,"bottom-right")," of avatar element. Use ",w("code",null,"Avatar.Addon")," ","and you must set ",w("code",null,"position")," property to set placement. You can put"," ",w(P.a,{href:"/elements/base/badge"},"badge")," or"," ",w(P.a,{href:"/elements/base/marker"},"marker")," into avatar addon."),w(s.w,null,w(s.d,{variant:"primary"},w(s.d.Addon,{position:"top"},w(s.J,{type:"dot",variant:"success"})),w(s.d.Display,null,w(d.a,{icon:v.Tb}))),w(s.d,{variant:"primary"},w(s.d.Display,null,w(d.a,{icon:v.Tb})),w(s.d.Addon,{position:"bottom"},w(s.J,{type:"dot",variant:"success"}))),w(s.d,{circle:!0,variant:"primary"},w(s.d.Addon,{position:"top"},w(s.d.Icon,{variant:"danger"},w(d.a,{icon:v.I}))),w(s.d.Display,null,w(d.a,{icon:v.Tb}))),w(s.d,{variant:"primary"},w(s.d.Display,null,w(d.a,{icon:v.Tb})),w(s.d.Addon,{position:"bottom"},w(s.d.Icon,{variant:"success"},w(d.a,{icon:v.Jb})))),w(s.d,{variant:"primary"},w(s.d.Addon,{position:"top"},w(s.d.Badge,{pill:!0,variant:"danger"},"9+")),w(s.d.Display,null,w(d.a,{icon:v.Tb}))),w(s.d,{variant:"primary"},w(s.d.Display,null,w(d.a,{icon:v.Tb})),w(s.d.Addon,{position:"bottom"},w(s.d.Badge,{pill:!0,variant:"success"},"9+"))))))))))}}]),n}(u.a.Component);t.default=Object(y.b)(null,(function(e){return Object(f.bindActionCreators)({pageChangeHeaderTitle:p.e,breadcrumbChange:p.c},e)}))(Object(b.a)(O))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),l=n("elyg"),c=n("nOHt"),u=new Map,s=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(s?o=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function f(e,t,n,a){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var y=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],u=r[1],y=(0,c.useRouter)(),v=y&&y.pathname||"/",b=i.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href);return{href:t,as:e.as?(0,l.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),h=b.href,m=b.as;i.default.useEffect((function(){if(t&&s&&o&&o.tagName&&(0,l.isLocalURL)(h)&&!d[h+"%"+m])return p(o,(function(){f(y,h,m)}))}),[t,o,h,m,y]);var g=e.children,P=e.replace,w=e.shallow,T=e.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var O=i.Children.only(g),A={ref:function(e){e&&u(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,y,h,m,P,w,T)}};return t&&(A.onMouseEnter=function(e){(0,l.isLocalURL)(h)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(y,h,m,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(A.href=(0,l.addBasePath)(m)),i.default.cloneElement(O,A)};t.default=y},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},tCCL:function(e,t,n){"use strict";var a=n("o0o1"),r=n.n(a),o=n("rePB"),i=n("HaE+"),l=n("1OyB"),c=n("vuIU"),u=n("Ji7U"),s=n("md7G"),d=n("foSv"),p=n("q1tI"),f=n.n(p),y=f.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=function(n){Object(u.a)(o,n);var a=h(o);function o(){return Object(l.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return y(e,this.props)}}],[{key:"getInitialProps",value:function(){var n=Object(i.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o={},!e.getInitialProps){n.next=5;break}return n.next=4,e.getInitialProps(a);case 4:o=n.sent;case 5:return n.abrupt("return",b(b({},o),{},{layout:t}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),o}(f.a.Component);return n}},uW7X:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/advanced/avatar",function(){return n("B5hA")}])}},[["uW7X",1,2,4,0,3,5,6,7]]]);