_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"/0+H":function(e,t,l){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(r.AmpStateContext))};var n,a=(n=l("q1tI"))&&n.__esModule?n:{default:n},r=l("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,l=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,r=e.hasQuery,o=void 0!==r&&r;return l||a&&o}},"8Kt/":function(e,t,l){"use strict";l("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(l,a,r):l[a]=e[a]}l.default=e,t&&t.set(e,l);return l}(l("q1tI")),r=(n=l("Xuae"))&&n.__esModule?n:{default:n},o=l("lwAK"),i=l("FYa8"),u=l("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var l=a.default.Children.toArray(t.props.children);return e.concat(l)}),[]).reduce(c,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,l=new Set,n={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?r=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var i=0,u=p.length;i<u;i++){var s=p[i];if(a.props.hasOwnProperty(s))if("charSet"===s)l.has(s)?r=!1:l.add(s);else{var d=a.props[s],c=n[s]||new Set;c.has(d)?r=!1:(c.add(d),n[s]=c)}}}return r}}()).reverse().map((function(e,t){var l=e.key||t;return a.default.cloneElement(e,{key:l})}))}function f(e){var t=e.children,l=(0,a.useContext)(o.AmpStateContext),n=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(l)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"Ftj+":function(e,t,l){"use strict";l.r(t);var n=l("1OyB"),a=l("vuIU"),r=l("Ji7U"),o=l("md7G"),i=l("foSv"),u=l("q1tI"),s=l.n(u),d=l("jwaz"),c=l("IP2g"),p=l("0ci1"),m=l("ANjH"),f=l("/MKj"),h=l("wHSu"),g=l("tCCL"),b=l("8Kt/"),y=l.n(b),w=l("YFqc"),x=l.n(w),T=s.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return Object(o.a)(this,l)}}var C=function(e){Object(r.a)(l,e);var t=v(l);function l(){return Object(n.a)(this,l),t.apply(this,arguments)}return Object(a.a)(l,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Card"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Elements"},{text:"Base"},{text:"Card",link:"/elements/base/card"}])}},{key:"render",value:function(){return T(s.a.Fragment,null,T(y.a,null,T("title",null,"Card | Panely")),T(d.u,{fluid:!0},T(d.S,null,T(d.s,{md:"6"},T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Basic")),T(d.P.Body,null,T("p",null,"Below is an example of a basic card with mixed content"),T("p",null,"Card titles are used by using ",T("code",null,"Card.Title")," component. In the same way, links are added and placed next to each other by using"," ",T("code",null,"Card.Link")," component."),T("p",null,"Subtitles are used by using a ",T("code",null,"Card.Subtitle")," component. If the"," ",T("code",null,"Card.Title")," and the ",T("code",null,"Card.Subtitle")," components are placed in a ",T("code",null,"Card.Body")," component, the card title and subtitle are aligned nicely."),T(d.n,{className:"align-items-start"},T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),T(d.i,null,"Go somewhere"))),T(d.l,null,T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Subtitle,null,"Card subtitle"),T(d.l.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),T(d.l.Link,{href:"#"},"Card link"),T(d.l.Link,{href:"#"},"Another link")))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"List group")),T(d.P.Body,null,T("p",null,"Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group\u2014all wrapped in a fixed-width card."),T(d.S,null,T(d.s,{sm:"6"},T(d.l,{className:"mb-3"},T(d.I,{flush:!0},T(d.I.Item,null,"Cras justo odio"),T(d.I.Item,null,"Dapibus ac facilisis in"),T(d.I.Item,null,"Vestibulum at eros"))),T(d.l,{className:"mb-3 mb-sm-0"},T(d.l.Header,null,"Featured"),T(d.I,{flush:!0},T(d.I.Item,null,"Cras justo odio"),T(d.I.Item,null,"Dapibus ac facilisis in"),T(d.I.Item,null,"Vestibulum at eros")))),T(d.s,{sm:"6"},T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),T(d.I,{flush:!0},T(d.I.Item,null,"Cras justo odio"),T(d.I.Item,null,"Dapibus ac facilisis in"),T(d.I.Item,null,"Vestibulum at eros")),T(d.l.Body,null,T(d.l.Link,{href:"#"},"Card link"),T(d.l.Link,{href:"#"},"Another link"))))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Navigation")),T(d.P.Body,null,T("p",null,"Add some navigation to a card\u2019s header (or block) with"," ",T(x.a,{href:"/elements/base/nav"},"nav"),"."),T(d.l,{className:"text-center mb-3"},T(d.l.Header,null,T(d.M,{tabs:!0,card:!0},T(d.M.Item,{href:"#",active:!0},"Active"),T(d.M.Item,{href:"#"},"Link"),T(d.M.Item,{href:"#",disabled:!0},"Disabled"))),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))),T(d.l,{className:"text-center mb-3"},T(d.l.Header,null,T(d.M,{pills:!0,card:!0},T(d.M.Item,{href:"#",active:!0},"Active"),T(d.M.Item,{href:"#"},"Link"),T(d.M.Item,{href:"#",disabled:!0},"Disabled"))),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))),T(d.l,{className:"text-center"},T(d.l.Header,null,T(d.M,{lines:!0,card:!0},T(d.M.Item,{href:"#",active:!0},"Active"),T(d.M.Item,{href:"#"},"Link"),T(d.M.Item,{href:"#",disabled:!0},"Disabled"))),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Horizontal")),T(d.P.Body,null,T("p",null,"Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with ",T("code",null,"noGutters")," property and use ",T("code",null,"Col")," component to make the card horizontal at the ",T("code",null,"md")," breakpoint. Further adjustments may be needed depending on your card content."),T(d.l,null,T(d.S,{noGutters:!0},T(d.s,{md:"4"},T(d.l.Img,{src:"/images/banner/760x480.webp",alt:"Card Image"})),T(d.s,{md:"8"},T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago"))))))))),T(d.s,{md:"6"},T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Image")),T(d.P.Body,null,T("p",null,T("code",null,"Card.Img")," with ",T("code",null,"top")," property places an image to the top of the card. With ",T("code",null,"Card.Text"),", text can be added to the card. Text within ",T("code",null,"Card.Text")," can also be styled with the standard HTML tags."),T("p",null,"Similar to headers and footers, cards can include top and bottom \u201cimage caps\u201d\u2014images at the top or bottom of a card."),T(d.n,{className:"mb-3"},T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))),T(d.l,null,T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago"))),T(d.l.Img,{bottom:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}))),T("p",null,"Turn an image into a card background and overlay your card\u2019s text. Depending on the image, you may or may not need additional styles or utilities."),T(d.l,{inverse:!0},T(d.l.Img,{filter:!0,src:"/images/banner/1120x480.webp",alt:"Card Image"}),T(d.l.ImgOverlay,null,T(d.l.Title,null,"Card Title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Header and footer")),T(d.P.Body,null,T("p",null,"Add an optional header and/or footer within a card. Card header can be contain title, icon, or other elements."),T(d.l,{className:"mb-3"},T(d.l.Header,null,T(d.l.Title,{tag:"h3"},"Card Title")),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))),T(d.l,{className:"mb-3"},T(d.l.Header,null,T(d.l.Icon,null,T(c.a,{icon:h.Jb})),T(d.l.Title,{tag:"h3"},"Card Title")),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere")),T(d.l.Footer,{className:"text-muted"},"2 days ago")),T(d.l,null,T(d.l.Header,null,T(d.l.Icon,null,T(c.a,{icon:h.Jb})),T(d.l.Title,{tag:"h3"},"Card Title"),T(d.l.Addon,null,T(d.f,{variant:"warning"},"9+"))),T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere")),T(d.l.Footer,{className:"text-muted"},"2 days ago")))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Alignment")),T(d.P.Body,null,T("p",null,"You can quickly change the text alignment of any card\u2014in its entirety or specific parts\u2014with our ",T("strong",null,"text align classes"),"."),T(d.l,{className:"mb-3"},T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))),T(d.l,{className:"text-center mb-3"},T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))),T(d.l,{className:"text-right"},T(d.l.Body,null,T(d.l.Title,null,"Special title treatment"),T(d.l.Text,null,"With supporting text below as a natural lead-in to additional content."),T(d.i,null,"Go somewhere"))))))),T(d.S,null,T(d.s,{xs:"12"},T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Card groups")),T(d.P.Body,null,T("p",null,"Use card groups to render cards as a single, attached element with equal width and height columns."),T(d.o,null,T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),T(d.l.Footer,null,T("small",{className:"text-muted"},"Last updated 3 mins ago"))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),T(d.l.Footer,null,T("small",{className:"text-muted"},"Last updated 3 mins ago"))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),T(d.l.Footer,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Card decks")),T(d.P.Body,null,T("p",null,"Need a set of equal width and height cards that aren\u2019t attached to one another? Use card decks."),T(d.n,null,T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This card has supporting text below as a natural lead-in to additional content."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago"))))))),T(d.P,null,T(d.P.Header,{bordered:!0},T(d.P.Title,null,"Collumns")),T(d.P.Body,null,T("p",null,"Cards can be organized into Masonry-like columns with just CSS by wrapping them in ",T("code",null,"CardColumns")," component. Cards are built with CSS"," ",T("code",null,"column")," properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right."),T(d.m,null,T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title that wraps to a new line"),T(d.l.Text,null,"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))),T(d.l,{className:"p-3"},T(d.l.Body,{blockquote:!0,className:"mb-0"},T("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),T(d.g.Footer,null,T("small",{className:"text-muted"},"Someone famous in",T("cite",{title:"Source Title"},"Source Title"))))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"}),T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This card has supporting text below as a natural lead-in to additional content."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))),T(d.l,{className:"bg-primary text-white text-center p-3"},T(d.g,{className:"mb-0"},T("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat."),T(d.g.Footer,{className:"text-white"},T("small",null,"Someone famous in",T("cite",{title:"Source Title"},"Source Title"))))),T(d.l,null,T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This card has a regular title and short paragraphy of text below it."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))),T(d.l,null,T(d.l.Img,{top:!0,src:"/images/banner/760x480.webp",alt:"Card Image"})),T(d.l,{className:"text-right p-3"},T(d.g,{className:"mb-0"},T("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),T(d.g.Footer,null,T("small",null,"Someone famous in",T("cite",{title:"Source Title"},"Source Title"))))),T(d.l,null,T(d.l.Body,null,T(d.l.Title,null,"Card title"),T(d.l.Text,null,"This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall."),T(d.l.Text,null,T("small",{className:"text-muted"},"Last updated 3 mins ago")))))))))))}}]),l}(s.a.Component);t.default=Object(f.b)(null,(function(e){return Object(m.bindActionCreators)({pageChangeHeaderTitle:p.e,breadcrumbChange:p.c},e)}))(Object(g.a)(C))},Ijbi:function(e,t,l){var n=l("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,l){var n=l("Ijbi"),a=l("EbDI"),r=l("ZhPi"),o=l("Bnag");e.exports=function(e){return n(e)||a(e)||r(e)||o()}},Xuae:function(e,t,l){"use strict";var n=l("RIqP"),a=l("lwsE"),r=l("W8MJ"),o=(l("PJYZ"),l("7W2i")),i=l("a1gu"),u=l("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=u(e);if(t){var a=u(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return i(this,l)}}t.__esModule=!0,t.default=void 0;var d=l("q1tI"),c=function(e){o(l,e);var t=s(l);function l(e){var r;return a(this,l),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(l,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),l}(d.Component);t.default=c},YFqc:function(e,t,l){e.exports=l("cTJO")},cTJO:function(e,t,l){"use strict";var n=l("J4zp"),a=l("284h");t.__esModule=!0,t.default=void 0;var r,o=a(l("q1tI")),i=l("elyg"),u=l("nOHt"),s=new Map,d=window.IntersectionObserver,c={};var p=function(e,t){var l=r||(d?r=new d((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return l?(l.observe(e),s.set(e,t),function(){try{l.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function m(e,t,l,n){(0,i.isLocalURL)(t)&&(e.prefetch(t,l,n).catch((function(e){0})),c[t+"%"+l]=!0)}var f=function(e){var t=!1!==e.prefetch,l=o.default.useState(),a=n(l,2),r=a[0],s=a[1],f=(0,u.useRouter)(),h=f&&f.pathname||"/",g=o.default.useMemo((function(){var t=(0,i.resolveHref)(h,e.href);return{href:t,as:e.as?(0,i.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),b=g.href,y=g.as;o.default.useEffect((function(){if(t&&d&&r&&r.tagName&&(0,i.isLocalURL)(b)&&!c[b+"%"+y])return p(r,(function(){m(f,b,y)}))}),[t,r,b,y,f]);var w=e.children,x=e.replace,T=e.shallow,v=e.scroll;"string"===typeof w&&(w=o.default.createElement("a",null,w));var C=o.Children.only(w),I={ref:function(e){e&&s(e),C&&"object"===typeof C&&C.ref&&("function"===typeof C.ref?C.ref(e):"object"===typeof C.ref&&(C.ref.current=e))},onClick:function(e){C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,l,n,a,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(l))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[a?"replace":"push"](l,n,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,b,y,x,T,v)}};return t&&(I.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),m(f,b,y,{priority:!0}))}),(e.passHref||"a"===C.type&&!("href"in C.props))&&(I.href=(0,i.addBasePath)(y)),o.default.cloneElement(C,I)};t.default=f},iCSS:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/base/card",function(){return l("Ftj+")}])},lSNA:function(e,t){e.exports=function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},lwAK:function(e,t,l){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=l("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},tCCL:function(e,t,l){"use strict";var n=l("o0o1"),a=l.n(n),r=l("rePB"),o=l("HaE+"),i=l("1OyB"),u=l("vuIU"),s=l("Ji7U"),d=l("md7G"),c=l("foSv"),p=l("q1tI"),m=l.n(p),f=m.a.createElement;function h(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function g(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?h(Object(l),!0).forEach((function(t){Object(r.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):h(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return Object(d.a)(this,l)}}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",l=function(l){Object(s.a)(r,l);var n=b(r);function r(){return Object(i.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return f(e,this.props)}}],[{key:"getInitialProps",value:function(){var l=Object(o.a)(a.a.mark((function l(n){var r;return a.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(r={},!e.getInitialProps){l.next=5;break}return l.next=4,e.getInitialProps(n);case 4:r=l.sent;case 5:return l.abrupt("return",g(g({},r),{},{layout:t}));case 6:case"end":return l.stop()}}),l)})));return function(e){return l.apply(this,arguments)}}()}]),r}(m.a.Component);return l}}},[["iCSS",1,2,4,0,3,5,6,7]]]);