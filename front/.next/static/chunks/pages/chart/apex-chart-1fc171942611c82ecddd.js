_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"/tby":function(e,t,n){"use strict";var a=n("a6RD"),r=n.n(a)()((function(){return Promise.all([n.e(19),n.e(72)]).then(n.bind(null,"BPh3"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["BPh3"]},modules:["./react-apexcharts"]}});t.a=r},"0vpt":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chart/apex-chart",function(){return n("bYHQ")}])},"2qu3":function(e,t,n){"use strict";var a=n("lSNA"),r=n("lwsE"),o=n("W8MJ");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.__esModule=!0,t.default=void 0;var c,p=(c=n("q1tI"))&&c.__esModule?c:{default:c},h=n("8L3h"),d=n("jwwS");var f=[],y=[],m=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function v(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(a){var r=b(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function w(e,t){return p.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function x(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},t),a=null;function r(){if(!a){var t=new O(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!m&&"function"===typeof n.webpack){var o=n.webpack();y.push((function(e){var t,n=l(o);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(-1!==e.indexOf(a))return r()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){r();var o=p.default.useContext(d.LoadableContext),i=(0,h.useSubscription)(a);return p.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),p.default.useMemo((function(){return i.loading||i.error?p.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return r()},i.displayName="LoadableComponent",p.default.forwardRef(i)}var O=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function D(e){return x(b,e)}function g(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}D.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(v,e)},D.preloadAll=function(){return new Promise((function(e,t){g(f).then(e,t)}))},D.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};g(y,e).then(n,n)}))},window.__NEXT_PRELOADREADY=D.preloadReady;var j=D;t.default=j},a6RD:function(e,t,n){"use strict";var a=n("lSNA");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var n=i.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=o(o({},a),e));if(a=o(o({},a),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var r={},s=e.modules();Object.keys(s).forEach((function(e){var t=s[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),a.loader=r}a.loadableGenerated&&delete(a=o(o({},a),a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,l(n,a);delete a.ssr}return n(a)};s(n("q1tI"));var i=s(n("2qu3"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},bYHQ:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),r=n("rePB"),o=n("1OyB"),i=n("vuIU"),s=n("Ji7U"),l=n("md7G"),u=n("foSv"),c=n("q1tI"),p=n.n(c),h=n("jwaz"),d=n("0ci1"),f=n("ANjH"),y=n("/MKj"),m=n("tCCL"),b=n("qGWM"),v=n("/tby"),w=n("8Kt/"),x=n.n(w),O=p.a.createElement;function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var g=function(e){Object(s.a)(n,e);var t=D(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.pageChangeHeaderTitle("Feather"),this.props.breadcrumbChange([{text:"Dashboard",link:"/"},{text:"Chart"},{text:"Apex chart",link:"/chart/apex-chart"}])}},{key:"render",value:function(){return O(p.a.Fragment,null,O(x.a,null,O("title",null,"Apex Chart | Panely")),O(h.u,{fluid:!0},O(h.S,null,O(h.s,{md:"6"},O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Line chart")),O(h.P.Body,null,O(j,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Column chart")),O(h.P.Body,null,O(_,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Mix chart")),O(h.P.Body,null,O(T,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Candlestick chart")),O(h.P.Body,null,O(C,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Bubble chart")),O(h.P.Body,null,O(M,{theme:this.props.theme})))),O(h.s,{md:"6"},O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Area chart")),O(h.P.Body,null,O(P,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Bar chart")),O(h.P.Body,null,O(k,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Timeline chart")),O(h.P.Body,null,O(S,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Candlestick chart")),O(h.P.Body,null,O(A,{theme:this.props.theme}))),O(h.P,null,O(h.P.Header,{bordered:!0},O(h.P.Title,null,"Radar chart")),O(h.P.Body,null,O(E,{theme:this.props.theme})))))))}}]),n}(p.a.Component),j=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},chart:{zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"line",options:t,series:n,height:350})}}]),n}(p.a.Component),P=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},fill:{type:"gradient"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"area",options:t,series:n,height:350})}}]),n}(p.a.Component),_=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}}},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"bar",options:t,series:n,height:350})}}]),n}(p.a.Component),k=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"bar",options:t,series:n,height:350})}}]),n}(p.a.Component),T=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},stroke:{width:[0,4]},title:{text:"Traffic Sources"},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"Website Blog"}},{opposite:!0,title:{text:"Social Media"}}]},series:[{name:"Website Blog",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Social Media",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"line",options:t,series:n,height:350})}}]),n}(p.a.Component),S=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},plotOptions:{bar:{horizontal:!0}},xaxis:{type:"datetime"}},series:[{data:[{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-04").getTime()]},{x:"Test",y:[new Date("2019-03-04").getTime(),new Date("2019-03-08").getTime()]},{x:"Validation",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()]},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-18").getTime()]}]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"rangeBar",options:t,series:n,height:350})}}]),n}(p.a.Component),C=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"candlestick",options:t,series:n,height:350})}}]),n}(p.a.Component),A=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},labels:["Team A","Team B","Team C","Team D","Team E"],tooltip:{fillSeriesColor:!1},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series:[44,55,13,43,22]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"pie",options:t,series:n,height:350})}}]),n}(p.a.Component),M=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},chart:{zoom:{enabled:!0,type:"xy"}},xaxis:{tickAmount:10,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"scatter",options:t,series:n,height:350})}}]),n}(p.a.Component),E=function(e){Object(s.a)(n,e);var t=D(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s)),Object(r.a)(Object(a.a)(e),"state",{options:{theme:{mode:e.props.theme,palette:"palette1"},title:{text:"Basic Radar Chart"},xaxis:{categories:["January","February","March","April","May","June"]}},series:[{name:"Series 1",data:[80,50,30,40,100,20]}]}),e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){if(e.theme!==this.props.theme){var t=this.state;t.options.theme={mode:this.props.theme,palette:"palette1"},this.setState(t)}}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.series;return O(v.a,{type:"radar",options:t,series:n,height:350})}}]),n}(p.a.Component);t.default=Object(y.b)((function(e){return{theme:e.page.theme}}),(function(e){return Object(f.bindActionCreators)({pageChangeHeaderTitle:d.e,breadcrumbChange:d.c},e)}))(Object(b.a)(Object(m.a)(g)))},jwwS:function(e,t,n){"use strict";var a;t.__esModule=!0,t.LoadableContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext(null);t.LoadableContext=r}},[["0vpt",1,2,4,0,3,5,6]]]);