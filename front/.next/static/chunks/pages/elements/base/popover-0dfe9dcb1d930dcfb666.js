_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?a=!1:(p.add(l),r[s]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},VvYY:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),o=n("JX7q"),a=n("rePB"),i=n("1OyB"),u=n("vuIU"),c=n("Ji7U"),s=n("md7G"),l=n("foSv"),p=n("q1tI"),f=n.n(p),d=n("jwaz"),m=n("0ci1"),v=n("ANjH"),g=n("/MKj"),h=n("tCCL"),b=n("8Kt/"),y=n.n(b),O=f.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var w=function(e){Object(c.a)(n,e);var t=j(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Popover"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Popover",link:"/elements/base/popover"}])}},{key:"render",value:function(){return O(f.a.Fragment,null,O(y.a,null,O("title",null,"Popover | Panely")),O(d.u,{fluid:!0},O(d.S,null,O(d.s,{xs:"12"},O(d.P,null,O(d.P.Header,{bordered:!0},O(d.P.Title,null,"Popover examples")),O(d.P.Body,null,O(d.B.Group,{row:!0},O(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Basic popover"),O(d.s,{sm:"8",lg:"9"},O(d.w,null,O(P,null),O(d.i,{id:"popover2",className:"ml-2"},"Uncontrolled"),O(d.O.Uncontrolled,{target:"popover2",title:"Popover title"},"And here's some amazing content. It's very engaging. Right?")))),O(d.B.Group,{row:!0},O(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Positions"),O(d.s,{sm:"8",lg:"9"},O(d.w,null,O(d.i,{id:"popover3"},"Top")," ",O(d.i,{id:"popover4"},"Bottom")," ",O(d.i,{id:"popover5"},"Left")," ",O(d.i,{id:"popover6"},"Right"),O(d.O.Uncontrolled,{placement:"top",target:"popover3"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),O(d.O.Uncontrolled,{placement:"bottom",target:"popover4"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),O(d.O.Uncontrolled,{placement:"left",target:"popover5"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus."),O(d.O.Uncontrolled,{placement:"right",target:"popover6"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.")),O("p",{className:"mb-0 mt-2"},"Change popover placement by setting ",O("code",null,"placement")," property with"," ",O("code",null,"top|bottom|right|left")))),O(d.B.Group,{row:!0},O(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Dismiss on next click"),O(d.s,{sm:"8",lg:"9"},O(d.i,{id:"popover7"},"Click me"),O(d.O.Uncontrolled,{trigger:"focus",target:"popover7",title:"Dismissible popover"},"And here's some amazing content. It's very engaging. Right?"),O("p",{className:"mb-0 mt-2"},"Use the ",O("code",null,'trigger="focus"')," property to dismiss popovers on the user\u2019s next click of a different element than the toggle element"))),O(d.B.Group,{row:!0,className:"mb-0"},O(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"HTML content"),O(d.s,{sm:"8",lg:"9"},O(d.i,{id:"popover8"},"Click me"),O(d.O.Uncontrolled,{trigger:"focus",target:"popover8",title:"Popover title"},"And here's some amazing ",O("b",null,"HTML")," content. It's very ",O("code",null,"engaging"),". Right?"),O("p",{className:"mb-0 mt-2"},"You can put popover html content inside popover body")))))))))}}]),n}(f.a.Component),P=function(e){Object(c.a)(n,e);var t=j(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return e=t.call.apply(t,[this].concat(u)),Object(a.a)(Object(o.a)(e),"state",{isOpen:!1}),Object(a.a)(Object(o.a)(e),"toggle",(function(){e.setState({isOpen:!e.state.isOpen})})),e}return Object(u.a)(n,[{key:"render",value:function(){return O(f.a.Fragment,null,O(d.i,{id:"popover1",onClick:this.toggle},"Controlled"),O(d.O,Object(r.a)({target:"popover1",title:"Popover title",isOpen:this.state.isOpen,toggle:this.toggle},this.props),"And here's some amazing content. It's very engaging. Right?"))}}]),n}(f.a.Component);t.default=Object(g.b)(null,(function(e){return Object(v.bindActionCreators)({pageChangeHeaderTitle:m.e,breadcrumbChange:m.c},e)}))(Object(h.a)(w))},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},fmBD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/popover",function(){return n("VvYY")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},tCCL:function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),a=n("rePB"),i=n("HaE+"),u=n("1OyB"),c=n("vuIU"),s=n("Ji7U"),l=n("md7G"),p=n("foSv"),f=n("q1tI"),d=n.n(f),m=d.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=function(n){Object(s.a)(a,n);var r=h(a);function a(){return Object(u.a)(this,a),r.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return m(e,this.props)}}],[{key:"getInitialProps",value:function(){var n=Object(i.a)(o.a.mark((function n(r){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a={},!e.getInitialProps){n.next=5;break}return n.next=4,e.getInitialProps(r);case 4:a=n.sent;case 5:return n.abrupt("return",g(g({},a),{},{layout:t}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),a}(d.a.Component);return n}}},[["fmBD",1,2,4,0,3,5,6]]]);