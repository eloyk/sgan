_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[60],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,l=void 0!==o&&o;return n||a&&l}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},l=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,i=p.length;u<i;u++){var c=p[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var s=a.props[c],d=r[c]||new Set;d.has(s)?o=!1:(d.add(s),r[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),l=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||l()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),l=(n("PJYZ"),n("7W2i")),u=n("a1gu"),i=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){l(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},n6iq:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),l=n("md7G"),u=n("foSv"),i=n("q1tI"),c=n.n(i),s=n("jwaz"),d=n("0ci1"),p=n("ANjH"),f=n("/MKj"),m=n("tCCL"),h=n("8Kt/"),y=n.n(h),b=c.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e){Object(o.a)(n,e);var t=g(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Typoghrapy"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Typoghrapy",link:"/elements/base/type"}])}},{key:"render",value:function(){return b(c.a.Fragment,null,b(y.a,null,b("title",null,"Typhography | Panely")),b(s.u,{fluid:!0},b(s.S,null,b(s.s,{md:"6"},b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Headings")),b(s.P.Body,null,b("p",null,"All HTML headings, ",b("code",null,"<h1>")," through ",b("code",null,"<h6>"),", are available."),b(s.P,null,b(s.P.Header,null,b(s.P.Title,null,"Headings")),b(s.P.Body,null,b("h1",null,"Heading 1"),b("h2",null,"Heading 2"),b("h3",null,"Heading 3"),b("h4",null,"Heading 4"),b("h5",null,"Heading 5"),b("h6",null,"Heading 6"))),b(s.P,{className:"mb-0"},b(s.P.Body,null,b("h3",{className:"mb-0"},"Fancy display heading"," ",b("small",{className:"text-muted"},"With faded secondary text")))))),b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Blockquote")),b(s.P.Body,null,b("p",null,"For quoting blocks of content from another source within your document. Wrap"," ",b("code",null,"Blockquote")," around any HTML as the quote."),b(s.g,null,b("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")),b(s.g,null,b("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),b(s.g.Footer,null,b("cite",{title:"Source Title"},"Source Title"))),b(s.g,{align:"center",className:"mb-0"},b("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),b(s.g.Footer,null,b("cite",{title:"Source Title"},"Source Title"))))),b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Abbreviations")),b(s.P.Body,null,b("p",null,"Stylized abbreviations implementation of HTML\u2019s ",b("code",null,"<abbr>")," element"),b(s.P,{className:"mb-0"},b(s.P.Body,null,b("p",null,b("abbr",{title:"attribute"},"attr")),b("p",{className:"mb-0"},b("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))))))),b(s.s,{md:"6"},b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Display")),b(s.P.Body,null,b("p",null,"When you need a heading to stand out, consider using a"," ",b("strong",null,"display heading"),"\u2014a larger, slightly more opinionated heading style"),b(s.P,{className:"mb-0"},b(s.P.Body,null,b("h1",{className:"display-1"},"Display 1"),b("h1",{className:"display-2"},"Display 2"),b("h1",{className:"display-3"},"Display 3"),b("h1",{className:"display-4"},"Display 4"))))),b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Lead")),b(s.P.Body,null,b("p",null,"Make a paragraph stand out by adding ",b("code",null,".lead"),"."),b(s.P,{className:"mb-0"},b(s.P.Body,null,b("p",{className:"lead mb-0"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus."))))),b(s.P,null,b(s.P.Header,{bordered:!0},b(s.P.Title,null,"Inline text styles")),b(s.P.Body,null,b("p",null,"Styling for common inline HTML5 elements."),b(s.P,{className:"mb-0"},b(s.P.Body,null,b("p",null,"You can use the mark tag to ",b("mark",null,"highlight")," text."),b("p",null,b("del",null,"This line of text is meant to be treated as deleted text.")),b("p",null,b("s",null,"This line of text is meant to be treated as no longer accurate.")),b("p",null,b("ins",null,"This line of text is meant to be treated as an addition to the document.")),b("p",null,b("u",null,"This line of text will render as underlined")),b("p",null,b("small",null,"This line of text is meant to be treated as fine print.")),b("p",null,b("strong",null,"This line rendered as bold text.")),b("p",{className:"mb-0"},b("em",null,"This line rendered as italicized text."))))))))))}}]),n}(c.a.Component);t.default=Object(f.b)(null,(function(e){return Object(p.bindActionCreators)({pageChangeHeaderTitle:d.e,breadcrumbChange:d.c},e)}))(Object(m.a)(v))},tCCL:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),o=n("rePB"),l=n("HaE+"),u=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),s=n("md7G"),d=n("foSv"),p=n("q1tI"),f=n.n(p),m=f.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=function(n){Object(c.a)(o,n);var r=b(o);function o(){return Object(u.a)(this,o),r.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return m(e,this.props)}}],[{key:"getInitialProps",value:function(){var n=Object(l.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o={},!e.getInitialProps){n.next=5;break}return n.next=4,e.getInitialProps(r);case 4:o=n.sent;case 5:return n.abrupt("return",y(y({},o),{},{layout:t}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),o}(f.a.Component);return n}},z4Is:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/type",function(){return n("n6iq")}])}},[["z4Is",1,2,4,0,3,5,6]]]);