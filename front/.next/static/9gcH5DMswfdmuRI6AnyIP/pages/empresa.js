(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0Yf3":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/empresa",function(){return n("t2OH")}])},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,a,u){try{var i=t[a](u),s=i.value}catch(c){return void n(c)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var u=t.apply(e,n);function i(t){r(u,o,a,i,s,"next",t)}function s(t){r(u,o,a,i,s,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),i=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var c=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=c(n("nOHt")),m=n("elyg");function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var b=new Map,w=window.IntersectionObserver,g={};function E(){return f||(w?f=new w((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){a(n,t);var e=s(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var u=t(o,a);return e=o,n=a,r=u,u}}((function(t,e){return{href:(0,m.addBasePath)(y(t)),as:e?(0,m.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),u=a.href,i=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var s=window.location.pathname;u=(0,h.resolve)(s,u),i=i?(0,h.resolve)(s,i):u,t.preventDefault();var c=o.props.scroll;null==c&&(c=i.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](u,i,{shallow:o.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=E();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),u={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||r),p.default.cloneElement(a,u)}}]),n}(p.Component);e.default=k},t2OH:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),u=n("q1tI"),i=n.n(u),s=n("YFqc"),c=n.n(s),l=n("nOHt"),f=n.n(l),p=i.a.createElement,h=function(t){var e=t.usuarioActual,n=t.empresas;if(null===e)return function(){return f.a.push("/")};var r=n.map((function(t){return p("tr",{key:t.id},p("td",null,t.nombreEmpresa),p("td",null,t.clasifEmpresa),p("td",null,t.tipoEmpresa),p("td",null,t.fundador),p("td",null,t.telefono),p("td",null,t.emailEmpresa),p("td",null,t.RNC),p("td",null,t.emailUsuarioAlta),p("td",null,p(c.a,{href:"/empresa/[empresaId]",as:"/empresa/".concat(t.id)},p("a",null,"ver"))))}));return p("div",null,p("h2",null,"Empresas"),p("button",{onClick:function(){return f.a.push("/empresa/crear")},className:"btn btn-primary"},"crear"),p("table",{className:"table"},p("thead",null,p("tr",null,p("th",null,"Nombre de la empresa"),p("th",null,"Clasificacion"),p("th",null,"Tipo de empresa"),p("th",null,"Fundador"),p("th",null,"Telefono"),p("th",null,"Email de la empresa"),p("th",null,"RNC"),p("th",null,"Usuario que dio de alta la empresa"))),p("tbody",null,r)))};h.getInitialProps=function(){var t=Object(a.a)(o.a.mark((function t(e,n,r){var a,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.get("/api/empresa");case 4:return a=t.sent,u=a.data,t.abrupt("return",{empresas:u});case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),e.default=h}},[["0Yf3",0,2,1,3]]]);