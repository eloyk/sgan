_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(s.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},s=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,s=e.hasQuery,i=void 0!==s&&s;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),o=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var s=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?s=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var o=0,u=d.length;o<u;o++){var c=d[o];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?s=!1:n.add(c);else{var l=r.props[c],p=a[c]||new Set;p.has(l)?s=!1:(p.add(l),a[c]=p)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(o.HeadManagerContext);return r.default.createElement(s.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),s=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||s(e)||i()}},RXG5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/tab",function(){return n("jIrs")}])},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),s=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),o=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){i(n,e);var t=c(n);function n(e){var s;return r(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(a(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},jIrs:function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("JX7q"),s=n("rePB"),i=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),c=n("md7G"),l=n("foSv"),p=n("q1tI"),d=n.n(p),m=n("jwaz"),f=n("0ci1"),h=n("ANjH"),b=n("/MKj"),y=n("tCCL"),v=n("8Kt/"),g=n.n(v),I=d.a.createElement;function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var k=function(e){Object(u.a)(n,e);var t=P(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Tab"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Tab",link:"/elements/base/tab"}])}},{key:"render",value:function(){return I(d.a.Fragment,null,I(g.a,null,I("title",null,"Tab | Panely")),I(m.u,{fluid:!0},I(m.S,null,I(m.s,{xs:"12"},I(m.P,null,I(m.P.Header,{bordered:!0},I(m.P.Title,null,"Basic")),I(m.P.Body,null,I(m.S,null,I(m.s,{md:"4"},I(m.P,{className:"mb-md-0"},I(m.P.Body,null,I(w,{lines:!0})))),I(m.s,{md:"4"},I(m.P,{className:"mb-md-0"},I(m.P.Body,null,I(w,{pills:!0})))),I(m.s,{md:"4"},I(m.P,{className:"mb-0"},I(m.P.Body,null,I(w,{tabs:!0}))))))),I(m.P,null,I(m.P.Header,{bordered:!0},I(m.P.Title,null,"List group tab")),I(m.P.Body,null,I(m.S,null,I(m.s,{md:"6"},I(m.P,null,I(m.P.Body,null,I(O,{bordered:!0}))),I(m.P,{className:"mb-md-0"},I(m.P.Body,null,I(O,{bordered:!0})))),I(m.s,{md:"6"},I(m.P,null,I(m.P.Body,null,I(O,{flush:!0}))),I(m.P,{className:"mb-0"},I(m.P.Body,null,I(O,{bordered:!0,deck:!0}))))))),I(m.P,null,I(m.P.Header,{bordered:!0},I(m.P.Title,null,"Portlet tab")),I(m.P.Body,null,I(m.S,null,I(m.s,{md:"4"},I(j,{portletProps:{className:"mb-md-0"},navProps:{lines:!0,portlet:!0}})),I(m.s,{md:"4"},I(j,{portletProps:{className:"mb-md-0"},navProps:{pills:!0,portlet:!0}})),I(m.s,{md:"4"},I(j,{portletProps:{className:"mb-0"},navProps:{tabs:!0,portlet:!0}}))))),I(m.P,null,I(m.P.Header,{bordered:!0},I(m.P.Title,null,"Card tab")),I(m.P.Body,null,I(m.S,null,I(m.s,{md:"4",className:"mb-3 mb-md-0"},I(M,{lines:!0,card:!0})),I(m.s,{md:"4",className:"mb-3 mb-md-0"},I(M,{pills:!0,card:!0})),I(m.s,{md:"4"},I(M,{tabs:!0,card:!0})))))))))}}]),n}(d.a.Component),w=function(e){Object(u.a)(n,e);var t=P(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object(s.a)(Object(r.a)(e),"state",{activeTab:1}),Object(s.a)(Object(r.a)(e),"toggle",(function(t){e.state.activeTab!==t&&e.setState({activeTab:t})})),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return I(d.a.Fragment,null,I("div",{className:"mb-3"},I(m.M,this.props,I(m.M.Item,{active:1===this.state.activeTab,onClick:function(){return e.toggle(1)}},"Home"),I(m.M.Item,{active:2===this.state.activeTab,onClick:function(){return e.toggle(2)}},"Profile"),I(m.M.Item,{active:3===this.state.activeTab,onClick:function(){return e.toggle(3)}},"Contact"))),I(m.W,{activeTab:this.state.activeTab},I(m.W.Pane,{tabId:1},I("p",{className:"mb-0"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),I(m.W.Pane,{tabId:2},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")),I(m.W.Pane,{tabId:3},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))}}]),n}(d.a.Component),O=function(e){Object(u.a)(n,e);var t=P(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object(s.a)(Object(r.a)(e),"state",{activeTab:1}),Object(s.a)(Object(r.a)(e),"toggle",(function(t){e.state.activeTab!==t&&e.setState({activeTab:t})})),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return I(m.S,null,I(m.s,{xs:"4"},I(m.I,Object(a.a)({action:!0},this.props),I(m.I.Item,{active:1===this.state.activeTab,onClick:function(){return e.toggle(1)}},"Home"),I(m.I.Item,{active:2===this.state.activeTab,onClick:function(){return e.toggle(2)}},"Profile"),I(m.I.Item,{active:3===this.state.activeTab,onClick:function(){return e.toggle(3)}},"Contact"))),I(m.s,{xs:"8"},I(m.W,{activeTab:this.state.activeTab},I(m.W.Pane,{tabId:1},I("p",{className:"mb-0"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),I(m.W.Pane,{tabId:2},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")),I(m.W.Pane,{tabId:3},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))}}]),n}(d.a.Component),j=function(e){Object(u.a)(n,e);var t=P(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object(s.a)(Object(r.a)(e),"state",{activeTab:1}),Object(s.a)(Object(r.a)(e),"toggle",(function(t){e.state.activeTab!==t&&e.setState({activeTab:t})})),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return I(m.P,this.props.portletProps,I(m.P.Header,{bordered:!0},I(m.P.Title,null,"Portlet"),I(m.P.Addon,null,I(m.M,this.props.navProps,I(m.M.Item,{active:1===this.state.activeTab,onClick:function(){return e.toggle(1)}},"Home"),I(m.M.Item,{active:2===this.state.activeTab,onClick:function(){return e.toggle(2)}},"Profile"),I(m.M.Item,{active:3===this.state.activeTab,onClick:function(){return e.toggle(3)}},"Contact")))),I(m.P.Body,null,I(m.W,{activeTab:this.state.activeTab},I(m.W.Pane,{tabId:1},I("p",{className:"mb-0"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),I(m.W.Pane,{tabId:2},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")),I(m.W.Pane,{tabId:3},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))}}]),n}(d.a.Component),M=function(e){Object(u.a)(n,e);var t=P(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object(s.a)(Object(r.a)(e),"state",{activeTab:1}),Object(s.a)(Object(r.a)(e),"toggle",(function(t){e.state.activeTab!==t&&e.setState({activeTab:t})})),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return I(m.l,null,I(m.l.Header,null,I(m.M,this.props,I(m.M.Item,{active:1===this.state.activeTab,onClick:function(){return e.toggle(1)}},"Home"),I(m.M.Item,{active:2===this.state.activeTab,onClick:function(){return e.toggle(2)}},"Profile"),I(m.M.Item,{active:3===this.state.activeTab,onClick:function(){return e.toggle(3)}},"Contact"))),I(m.l.Body,null,I(m.W,{activeTab:this.state.activeTab},I(m.W.Pane,{tabId:1},I("p",{className:"mb-0"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),I(m.W.Pane,{tabId:2},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")),I(m.W.Pane,{tabId:3},I("p",{className:"mb-0"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))}}]),n}(d.a.Component);t.default=Object(b.b)(null,(function(e){return Object(h.bindActionCreators)({pageChangeHeaderTitle:f.e,breadcrumbChange:f.c},e)}))(Object(y.a)(k))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},tCCL:function(e,t,n){"use strict";var a=n("o0o1"),r=n.n(a),s=n("rePB"),i=n("HaE+"),o=n("1OyB"),u=n("vuIU"),c=n("Ji7U"),l=n("md7G"),p=n("foSv"),d=n("q1tI"),m=n.n(d),f=m.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=function(n){Object(c.a)(s,n);var a=y(s);function s(){return Object(o.a)(this,s),a.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return f(e,this.props)}}],[{key:"getInitialProps",value:function(){var n=Object(i.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s={},!e.getInitialProps){n.next=5;break}return n.next=4,e.getInitialProps(a);case 4:s=n.sent;case 5:return n.abrupt("return",b(b({},s),{},{layout:t}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),s}(m.a.Component);return n}}},[["RXG5",1,2,4,0,3,5,6]]]);