_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"/0+H":function(t,l,e){"use strict";l.__esModule=!0,l.isInAmpMode=u,l.useAmp=function(){return u(a.default.useContext(r.AmpStateContext))};var n,a=(n=e("q1tI"))&&n.__esModule?n:{default:n},r=e("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=t.ampFirst,e=void 0!==l&&l,n=t.hybrid,a=void 0!==n&&n,r=t.hasQuery,u=void 0!==r&&r;return e||a&&u}},"6VO+":function(t,l,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/table",function(){return e("AFUI")}])},"8Kt/":function(t,l,e){"use strict";e("lSNA");l.__esModule=!0,l.defaultHead=i,l.default=void 0;var n,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var l=c();if(l&&l.has(t))return l.get(t);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=n?Object.getOwnPropertyDescriptor(t,a):null;r&&(r.get||r.set)?Object.defineProperty(e,a,r):e[a]=t[a]}e.default=t,l&&l.set(t,e);return e}(e("q1tI")),r=(n=e("Xuae"))&&n.__esModule?n:{default:n},u=e("lwAK"),o=e("FYa8"),d=e("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function i(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],l=[a.default.createElement("meta",{charSet:"utf-8"})];return t||l.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),l}function s(t,l){return"string"===typeof l||"number"===typeof l?t:l.type===a.default.Fragment?t.concat(a.default.Children.toArray(l.props.children).reduce((function(t,l){return"string"===typeof l||"number"===typeof l?t:t.concat(l)}),[])):t.concat(l)}var h=["name","httpEquiv","charSet","itemProp"];function p(t,l){return t.reduce((function(t,l){var e=a.default.Children.toArray(l.props.children);return t.concat(e)}),[]).reduce(s,[]).reverse().concat(i(l.inAmpMode)).filter(function(){var t=new Set,l=new Set,e=new Set,n={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);t.has(u)?r=!1:t.add(u)}switch(a.type){case"title":case"base":l.has(a.type)?r=!1:l.add(a.type);break;case"meta":for(var o=0,d=h.length;o<d;o++){var c=h[o];if(a.props.hasOwnProperty(c))if("charSet"===c)e.has(c)?r=!1:e.add(c);else{var i=a.props[c],s=n[c]||new Set;s.has(i)?r=!1:(s.add(i),n[c]=s)}}}return r}}()).reverse().map((function(t,l){var e=t.key||l;return a.default.cloneElement(t,{key:e})}))}function f(t){var l=t.children,e=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,d.isInAmpMode)(e)},l)}f.rewind=function(){};var b=f;l.default=b},AFUI:function(t,l,e){"use strict";e.r(l);var n=e("1OyB"),a=e("vuIU"),r=e("Ji7U"),u=e("md7G"),o=e("foSv"),d=e("q1tI"),c=e.n(d),i=e("jwaz"),s=e("0ci1"),h=e("ANjH"),p=e("/MKj"),f=e("tCCL"),b=e("8Kt/"),y=e.n(b),D=c.a.createElement;function v(t){var l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(o.a)(t);if(l){var a=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(u.a)(this,e)}}var m=function(t){Object(r.a)(e,t);var l=v(e);function e(){return Object(n.a)(this,e),l.apply(this,arguments)}return Object(a.a)(e,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Table"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Table",link:"/elements/base/table"}])}},{key:"render",value:function(){return D(c.a.Fragment,null,D(y.a,null,D("title",null,"Table | Panely")),D(i.u,{fluid:!0},D(i.S,null,D(i.s,{md:"6"},D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Basic table")),D(i.P.Body,null,D("p",null,"Using the most basic table markup, here\u2019s how ",D("code",null,"Table"),"-based tables look."),D(i.X,{className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))))),D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Contextual colors")),D(i.P.Body,null,D("p",null,"Use ",D("code",null,"variant")," property to apply contextual colors"),D(i.X,{variant:"primary"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"secondary"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"success"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"info"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"danger"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"warning"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"dark"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{variant:"light",className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))))),D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Hoverable")),D(i.P.Body,null,D("p",null,"Add ",D("code",null,"hover")," property to enable hover effect on table rows within a"," ",D("code",null,"<tbody>"),"."),D(i.X,{hover:!0,className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"))))))),D(i.s,{md:"6"},D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Border variants")),D(i.P.Body,null,D("p",null,"Change the table border style by applying ",D("code",null,"bordered|borderless")," ","properties."),D(i.X,{bordered:!0},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))),D(i.X,{borderless:!0,className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))))),D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Striped")),D(i.P.Body,null,D("p",null,"Use ",D("code",null,"striped")," property to add zebra-striping to any table row within the ",D("code",null,"<tbody>"),"."),D(i.X,{striped:!0,className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))))),D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Responsive table")),D(i.P.Body,null,D("p",null,"Make your tables always responsive, use ",D("code",null,"responsive")," property for horizontally scrolling tables."),D("p",null,"Fill ",D("code",null,"responsive")," with ",D("code",null,"sm|md|lg|xl")," as needed to create responsive tables up to a particular breakpoint."),D(i.X,{striped:!0,hover:!0,responsive:!0,className:"mb-0"},D("thead",null,D("tr",null,D("th",null,"#"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"),D("th",null,"Head"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")),D("tr",null,D("th",{scope:"row"},"3"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data"),D("td",null,"Data")))))),D(i.P,null,D(i.P.Header,{bordered:!0},D(i.P.Title,null,"Small table")),D(i.P.Body,null,D("p",null,"Add ",D("code",null,"small")," property to make tables more compact by cutting cell padding in half."),D(i.X,{small:!0,className:"mb-0"},D("thead",null,D("tr",null,D("th",{scope:"col"},"#"),D("th",{scope:"col"},"First"),D("th",{scope:"col"},"Last"),D("th",{scope:"col"},"Handle"))),D("tbody",null,D("tr",null,D("th",{scope:"row"},"1"),D("td",null,"Mark"),D("td",null,"Otto"),D("td",null,"@mdo")),D("tr",null,D("th",{scope:"row"},"2"),D("td",null,"Jacob"),D("td",null,"Thornton"),D("td",null,"@fat")),D("tr",null,D("th",{scope:"row"},"3"),D("td",{colspan:"2"},"Larry the Bird"),D("td",null,"@twitter"))))))))))}}]),e}(c.a.Component);l.default=Object(p.b)(null,(function(t){return Object(h.bindActionCreators)({pageChangeHeaderTitle:s.e,breadcrumbChange:s.c},t)}))(Object(f.a)(m))},Bnag:function(t,l){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,l){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,l,e){var n=e("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,l,e){var n=e("Ijbi"),a=e("EbDI"),r=e("ZhPi"),u=e("Bnag");t.exports=function(t){return n(t)||a(t)||r(t)||u()}},Xuae:function(t,l,e){"use strict";var n=e("RIqP"),a=e("lwsE"),r=e("W8MJ"),u=(e("PJYZ"),e("7W2i")),o=e("a1gu"),d=e("Nsbk");function c(t){var l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=d(t);if(l){var a=d(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return o(this,e)}}l.__esModule=!0,l.default=void 0;var i=e("q1tI"),s=function(t){u(e,t);var l=c(e);function e(t){var r;return a(this,e),(r=l.call(this,t))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(e,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),e}(i.Component);l.default=s},lSNA:function(t,l){t.exports=function(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}},lwAK:function(t,l,e){"use strict";var n;l.__esModule=!0,l.AmpStateContext=void 0;var a=((n=e("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});l.AmpStateContext=a},tCCL:function(t,l,e){"use strict";var n=e("o0o1"),a=e.n(n),r=e("rePB"),u=e("HaE+"),o=e("1OyB"),d=e("vuIU"),c=e("Ji7U"),i=e("md7G"),s=e("foSv"),h=e("q1tI"),p=e.n(h),f=p.a.createElement;function b(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?b(Object(e),!0).forEach((function(l){Object(r.a)(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function D(t){var l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(s.a)(t);if(l){var a=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(i.a)(this,e)}}l.a=function(t){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",e=function(e){Object(c.a)(r,e);var n=D(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return f(t,this.props)}}],[{key:"getInitialProps",value:function(){var e=Object(u.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t.getInitialProps){e.next=5;break}return e.next=4,t.getInitialProps(n);case 4:r=e.sent;case 5:return e.abrupt("return",y(y({},r),{},{layout:l}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(p.a.Component);return e}}},[["6VO+",1,2,4,0,3,5,6]]]);