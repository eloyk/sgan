_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var s=a.props[l],f=r[l]||new Set;f.has(s)?o=!1:(f.add(s),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},G00F:function(e,t,n){"use strict";n.r(t);var r=n("JX7q"),a=n("rePB"),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),u=n("md7G"),l=n("foSv"),s=n("q1tI"),f=n.n(s),d=n("jwaz"),p=n("IP2g"),h=n("0ci1"),m=n("ANjH"),b=n("/MKj"),v=n("wHSu"),g=n("2BYM"),y=n.n(g),O=n("tCCL"),C=n("8Kt/"),w=n.n(C),j=n("sXnO"),k=f.a.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var A=y()(j.a),B=A.mixin({customClass:{confirmButton:"btn btn-label-success btn-wide mx-1",cancelButton:"btn btn-label-danger btn-wide mx-1"},buttonsStyling:!1}),S=A.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",A.stopTimer),e.addEventListener("mouseleave",A.resumeTimer)}}),M=function(e){Object(c.a)(n,e);var t=x(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Sweet Alert"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Advanced"},{text:"Sweet Alert",link:"/elements/advanced/sweet-alert"}])}},{key:"render",value:function(){return k(f.a.Fragment,null,k(w.a,null,k("title",null,"Sweet Alert | Panely")),k(d.u,{fluid:!0},k(d.S,null,k(d.s,{xs:"12"},k(d.P,null,k(d.P.Header,{bordered:!0},k(d.P.Title,null,"Sweet Alert")),k(d.P.Body,null,k("p",null,k("strong",null,"Sweet alert")," is a beautiful, responsive, customizable, accessible replacement for javascripts's popup boxes with zero dependencies. Check"," ",k("a",{href:"http://sweetalert2.github.io",target:"_blank"},"Sweet Alert's page")," ","for more info."),k("hr",null),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Basic example"),k(d.s,{sm:"8",lg:"9"},k(P,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Title with a text under"),k(d.s,{sm:"8",lg:"9"},k(_,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"More complex modal"),k(d.s,{sm:"8",lg:"9"},k(I,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Custom HTML description"),k(d.s,{sm:"8",lg:"9"},k(G,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Dialog position"),k(d.s,{sm:"8",lg:"9"},k(T,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Confirm dialog"),k(d.s,{sm:"8",lg:"9"},k(E,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Custom image"),k(d.s,{sm:"8",lg:"9"},k(N,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Auto close timer"),k(d.s,{sm:"8",lg:"9"},k(D,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"AJAX request"),k(d.s,{sm:"8",lg:"9"},k(H,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Chaining modals"),k(d.s,{sm:"8",lg:"9"},k(R,null))),k(d.B.Group,{row:!0},k(d.G,{sm:"4",lg:"3",className:"text-muted text-sm-right"},"Toast"),k(d.s,{sm:"8",lg:"9"},k(L,null)))))))))}}]),n}(f.a.Component),P=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire("Any fool can use a computer")})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),_=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire("The Internet?","That thing is still around?","question")})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),I=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:k("a",{href:"#"},"Why do I have this issue?")})})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),G=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({title:k("strong",null,"HTML ",k("u",null,"example")),icon:"info",html:k(f.a.Fragment,null,"You can use ",k("b",null,"bold text"),", ",k("a",{href:"https://sweetalert2.github.io/"},"links")," and other HTML tag"),showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:k(f.a.Fragment,null,k(p.a,{icon:v.Nb})," Great!"),confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:k(p.a,{icon:v.Mb}),cancelButtonAriaLabel:"Thumbs down"})})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),T=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),E=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&B.fire("Deleted!","Your file has been deleted.","success")}))})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),N=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"https://unsplash.it/400/200",imageWidth:400,imageHeight:200,imageAlt:"Custom image"})})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),D=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){var e;B.fire({title:"Auto close alert!",html:k(f.a.Fragment,null,'"I will close in ',k("b",null),' milliseconds."'),timer:2e3,timerProgressBar:!0,onBeforeOpen:function(){B.showLoading(),e=setInterval((function(){var e=B.getContent();if(e){var t=e.querySelector("b");t&&(t.textContent=B.getTimerLeft())}}),100)},onClose:function(){clearInterval(e)}}).then((function(e){e.dismiss===B.DismissReason.timer&&console.log("I was closed by the timer")}))})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),H=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.fire({title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(e){return fetch("https://api.github.com/users/".concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){B.showValidationMessage("Request failed: ".concat(e))}))},allowOutsideClick:function(){return!B.isLoading()}}).then((function(e){e.value&&B.fire({title:"".concat(e.value.login,"'s avatar"),imageUrl:e.value.avatar_url})}))})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),R=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){B.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2","3"]}).queue([{title:"Question 1",text:"Chaining swal2 modals is easy"},"Question 2","Question 3"]).then((function(e){if(e.value){var t=JSON.stringify(e.value);B.fire({title:"All done!",html:k(f.a.Fragment,null,"Your answers: ",k("pre",null,k("code",null,t))),confirmButtonText:"Lovely!"})}}))})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component),L=function(e){Object(c.a)(n,e);var t=x(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=t.call.apply(t,[this].concat(c)),Object(a.a)(Object(r.a)(e),"handleClick",(function(){S.fire({icon:"success",title:"Signed in successfully"})})),e}return Object(i.a)(n,[{key:"render",value:function(){return k(d.i,{onClick:this.handleClick},"Click me")}}]),n}(f.a.Component);t.default=Object(b.b)(null,(function(e){return Object(m.bindActionCreators)({pageChangeHeaderTitle:h.e,breadcrumbChange:h.c},e)}))(Object(O.a)(M))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},OZ4L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/advanced/sweet-alert",function(){return n("G00F")}])},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},tCCL:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),o=n("rePB"),i=n("HaE+"),c=n("1OyB"),u=n("vuIU"),l=n("Ji7U"),s=n("md7G"),f=n("foSv"),d=n("q1tI"),p=n.n(d),h=p.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=function(n){Object(l.a)(o,n);var r=v(o);function o(){return Object(c.a)(this,o),r.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){return h(e,this.props)}}],[{key:"getInitialProps",value:function(){var n=Object(i.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o={},!e.getInitialProps){n.next=5;break}return n.next=4,e.getInitialProps(r);case 4:o=n.sent;case 5:return n.abrupt("return",b(b({},o),{},{layout:t}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),o}(p.a.Component);return n}}},[["OZ4L",1,2,4,0,3,5,6,17]]]);