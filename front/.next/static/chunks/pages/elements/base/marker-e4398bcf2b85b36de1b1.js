_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return r||a&&o}},"0ODw":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/marker",function(){return r("BA92")}])},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},o=r("lwAK"),c=r("FYa8"),u=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var s=a.props[l],p=n[l]||new Set;p.has(s)?i=!1:(p.add(s),n[l]=p)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function y(e){var t=e.children,r=(0,a.useContext)(o.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}y.rewind=function(){};var v=y;t.default=v},BA92:function(e,t,r){"use strict";r.r(t);var n=r("1OyB"),a=r("vuIU"),i=r("Ji7U"),o=r("md7G"),c=r("foSv"),u=r("q1tI"),l=r.n(u),s=r("jwaz"),p=r("IP2g"),d=r("0ci1"),f=r("ANjH"),y=r("/MKj"),v=r("wHSu"),h=r("tCCL"),m=r("8Kt/"),b=r.n(m),g=l.a.createElement;function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var w=function(e){Object(i.a)(r,e);var t=P(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Marker"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Marker",link:"/elements/base/marker"}])}},{key:"render",value:function(){return g(l.a.Fragment,null,g(b.a,null,g("title",null,"Marker | Panely")),g(s.u,{fluid:!0},g(s.S,null,g(s.s,{xs:"12"},g(s.P,null,g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Basic")),g(s.P.Body,null,g("p",null,g("strong",null,"Marker")," is component that you can use for marking something with shape and color, you can combine it with many components. Marker by default has 3 different shapes, like the example below. Change marker color by applying"," ",g("code",null,"variant")," property"),g(s.S,null,g(s.s,{md:"4"},g(s.P,{className:"mb-md-0"},g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Dot")),g(s.P.Body,null,g("p",null,"Apply ",g("code",null,'type="dot"')," property for this shape"),g(s.w,null,g(s.J,{type:"dot",variant:"primary"})," ",g(s.J,{type:"dot",variant:"secondary"})," ",g(s.J,{type:"dot",variant:"info"})," ",g(s.J,{type:"dot",variant:"success"})," ",g(s.J,{type:"dot",variant:"warning"})," ",g(s.J,{type:"dot",variant:"danger"})," ",g(s.J,{type:"dot",variant:"dark"})," ",g(s.J,{type:"dot",variant:"light"}))))),g(s.s,{md:"4"},g(s.P,{className:"mb-md-0"},g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Circle")),g(s.P.Body,null,g("p",null,"Apply ",g("code",null,'type="circle"')," property for this shape"),g(s.w,null,g(s.J,{type:"circle",variant:"primary"})," ",g(s.J,{type:"circle",variant:"secondary"})," ",g(s.J,{type:"circle",variant:"info"})," ",g(s.J,{type:"circle",variant:"success"})," ",g(s.J,{type:"circle",variant:"warning"})," ",g(s.J,{type:"circle",variant:"danger"})," ",g(s.J,{type:"circle",variant:"dark"})," ",g(s.J,{type:"circle",variant:"light"}))))),g(s.s,{md:"4"},g(s.P,{className:"mb-0"},g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Pill")),g(s.P.Body,null,g("p",null,"Apply ",g("code",null,'type="pill"')," property for this shape"),g(s.w,null,g(s.J,{type:"pill",variant:"primary"})," ",g(s.J,{type:"pill",variant:"secondary"})," ",g(s.J,{type:"pill",variant:"info"})," ",g(s.J,{type:"pill",variant:"success"})," ",g(s.J,{type:"pill",variant:"warning"})," ",g(s.J,{type:"pill",variant:"danger"})," ",g(s.J,{type:"pill",variant:"dark"})," ",g(s.J,{type:"pill",variant:"light"})))))))))),g(s.S,null,g(s.s,{md:"6"},g(s.P,{className:"mb-md-0"},g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Sizing")),g(s.P.Body,null,g("p",null,"Change marker size to smaller or larger by setting ",g("code",null,"size")," property with ",g("code",null,"sm|lg")),g(s.w,null,g(s.J,{type:"dot",variant:"primary",size:"sm"})," ",g(s.J,{type:"dot",variant:"success"})," ",g(s.J,{type:"dot",variant:"danger",size:"lg"})," ",g(s.J,{type:"circle",variant:"primary",size:"sm"})," ",g(s.J,{type:"circle",variant:"success"})," ",g(s.J,{type:"circle",variant:"danger",size:"lg"})," ",g(s.J,{type:"pill",variant:"primary",size:"sm"})," ",g(s.J,{type:"pill",variant:"success"})," ",g(s.J,{type:"pill",variant:"danger",size:"lg"}))))),g(s.s,{md:"6"},g(s.P,{className:"mb-md-0"},g(s.P.Header,{bordered:!0},g(s.P.Title,null,"Usage")),g(s.P.Body,null,g("p",null,"You can use marker element together with several elements."),g(s.i,{variant:"primary"},"Button",g(s.i.Marker,null,g(s.J,{type:"dot",variant:"success"})))," ",g(s.i,{icon:!0,variant:"primary"},g(p.a,{icon:v.Jb}),g(s.i.Marker,null,g(s.J,{type:"dot",variant:"success"})))))))))}}]),r}(l.a.Component);t.default=Object(y.b)(null,(function(e){return Object(f.bindActionCreators)({pageChangeHeaderTitle:d.e,breadcrumbChange:d.c},e)}))(Object(h.a)(w))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),i=r("ZhPi"),o=r("Bnag");e.exports=function(e){return n(e)||a(e)||i(e)||o()}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),i=r("W8MJ"),o=(r("PJYZ"),r("7W2i")),c=r("a1gu"),u=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("q1tI"),p=function(e){o(r,e);var t=l(r);function r(e){var i;return a(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=p},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},tCCL:function(e,t,r){"use strict";var n=r("o0o1"),a=r.n(n),i=r("rePB"),o=r("HaE+"),c=r("1OyB"),u=r("vuIU"),l=r("Ji7U"),s=r("md7G"),p=r("foSv"),d=r("q1tI"),f=r.n(d),y=f.a.createElement;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=function(r){Object(l.a)(i,r);var n=m(i);function i(){return Object(c.a)(this,i),n.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){return y(e,this.props)}}],[{key:"getInitialProps",value:function(){var r=Object(o.a)(a.a.mark((function r(n){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i={},!e.getInitialProps){r.next=5;break}return r.next=4,e.getInitialProps(n);case 4:i=r.sent;case 5:return r.abrupt("return",h(h({},i),{},{layout:t}));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}]),i}(f.a.Component);return r}}},[["0ODw",1,2,4,0,3,5,6]]]);