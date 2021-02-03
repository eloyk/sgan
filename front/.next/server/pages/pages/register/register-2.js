module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0EM9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TYPES = {
  ASIDE_TOGGLE: "ASIDE_TOGGLE",
  ASIDE_CHANGE: "ASIDE_CHANGE",
  BREADCRUMB_CHANGE: "BREADCRUMB_CHANGE",
  PAGE_CHANGE_HEADER_TITLE: "PAGE_CHANGE_HEADER_TITLE",
  PAGE_CHANGE_THEME: "PAGE_CHANGE_THEME",
  SIDEMENU_TOGGLE: "SIDEMENU_TOGGLE",
  SIDEMENU_CHANGE: "SIDEMENU_CHANGE",
  FIREBASE_CHANGE: "FIREBASE_CHANGE"
};
/* harmony default export */ __webpack_exports__["a"] = (TYPES);

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0ci1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ pageChangeHeaderTitle; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ pageChangeTheme; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ sidemenuToggle; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ asideToggle; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ asideChange; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ firebaseChange; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ breadcrumbChange; });

// UNUSED EXPORTS: sidemenuChange

// EXTERNAL MODULE: ./src/store/types.jsx
var types = __webpack_require__("0EM9");

// CONCATENATED MODULE: ./src/store/actions/pageAction.jsx

function pageChangeHeaderTitle(payload) {
  return {
    type: types["a" /* default */].PAGE_CHANGE_HEADER_TITLE,
    payload: payload
  };
}
function pageChangeTheme(payload) {
  return {
    type: types["a" /* default */].PAGE_CHANGE_THEME,
    payload: payload
  };
}
// CONCATENATED MODULE: ./src/store/actions/sidemenuAction.jsx

function sidemenuToggle(payload) {
  return {
    type: types["a" /* default */].SIDEMENU_TOGGLE,
    payload: payload
  };
}
function sidemenuChange(payload) {
  return {
    type: types["a" /* default */].SIDEMENU_CHANGE,
    payload: {
      name: payload.name,
      value: payload.value
    }
  };
}
// CONCATENATED MODULE: ./src/store/actions/asideAction.jsx

function asideToggle() {
  return {
    type: types["a" /* default */].ASIDE_TOGGLE
  };
}
function asideChange(payload) {
  return {
    type: types["a" /* default */].ASIDE_CHANGE,
    payload: {
      desktopMinimized: payload.desktopMinimized,
      mobileMinimized: payload.mobileMinimized
    }
  };
}
// CONCATENATED MODULE: ./src/store/actions/breadcrumbAction.jsx

function breadcrumbChange(payload) {
  return {
    type: types["a" /* default */].BREADCRUMB_CHANGE,
    payload: payload
  };
}
// CONCATENATED MODULE: ./src/store/actions/firebaseAction.jsx

function firebaseChange(payload) {
  return {
    type: types["a" /* default */].FIREBASE_CHANGE,
    payload: payload
  };
}
// CONCATENATED MODULE: ./src/store/actions/index.jsx




 // Export all actions



/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kh5a");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OFr4":
/***/ (function(module, exports) {

module.exports = require("@hookform/resolvers");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dN/k":
/***/ (function(module, exports) {

module.exports = require("next-absolute-url");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jwaz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ components_Container; });
__webpack_require__.d(__webpack_exports__, "S", function() { return /* reexport */ components_Row; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ components_Col; });
__webpack_require__.d(__webpack_exports__, "M", function() { return /* reexport */ components_Nav; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_Accordion; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ components_Avatar; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_AvatarGroup; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ components_Aside; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ components_Breadcrumb; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ components_Button; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ components_ButtonGroup; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ components_ButtonToolbar; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ components_Blockquote; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ components_CarouselItem; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ components_DemoWrapper; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ components_Dropdown; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ components_FloatLabel; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ components_FloatButton; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ components_Badge; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ components_Chat; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ components_Caret; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ components_Card; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ components_CardGroup; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ components_CardDeck; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ components_CardColumns; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ components_CustomInput; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* reexport */ components_Header; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* reexport */ components_Layout; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ components_Footer; });
__webpack_require__.d(__webpack_exports__, "O", function() { return /* reexport */ components_Popover; });
__webpack_require__.d(__webpack_exports__, "P", function() { return /* reexport */ components_Portlet; });
__webpack_require__.d(__webpack_exports__, "Q", function() { return /* reexport */ components_Progress; });
__webpack_require__.d(__webpack_exports__, "J", function() { return /* reexport */ components_Marker; });
__webpack_require__.d(__webpack_exports__, "L", function() { return /* reexport */ components_Modal; });
__webpack_require__.d(__webpack_exports__, "K", function() { return /* reexport */ components_Menu; });
__webpack_require__.d(__webpack_exports__, "Z", function() { return /* reexport */ components_Tooltip; });
__webpack_require__.d(__webpack_exports__, "X", function() { return /* reexport */ components_Table; });
__webpack_require__.d(__webpack_exports__, "Y", function() { return /* reexport */ components_Timeline; });
__webpack_require__.d(__webpack_exports__, "R", function() { return /* reexport */ components_RichList; });
__webpack_require__.d(__webpack_exports__, "I", function() { return /* reexport */ components_ListGroup; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ components_GridNav; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ components_Form; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* reexport */ components_Input; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* reexport */ components_InputGroup; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* reexport */ components_Label; });
__webpack_require__.d(__webpack_exports__, "N", function() { return /* reexport */ components_Pagination; });
__webpack_require__.d(__webpack_exports__, "W", function() { return /* reexport */ components_Tab; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_Alert; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ components_Collapse; });
__webpack_require__.d(__webpack_exports__, "U", function() { return /* reexport */ components_Sidemenu; });
__webpack_require__.d(__webpack_exports__, "V", function() { return /* reexport */ components_Spinner; });
__webpack_require__.d(__webpack_exports__, "T", function() { return /* reexport */ components_Scrolltop; });
__webpack_require__.d(__webpack_exports__, "ab", function() { return /* reexport */ components_Widget1; });
__webpack_require__.d(__webpack_exports__, "hb", function() { return /* reexport */ components_Widget2; });
__webpack_require__.d(__webpack_exports__, "ib", function() { return /* reexport */ components_Widget3; });
__webpack_require__.d(__webpack_exports__, "jb", function() { return /* reexport */ components_Widget4; });
__webpack_require__.d(__webpack_exports__, "kb", function() { return /* reexport */ components_Widget5; });
__webpack_require__.d(__webpack_exports__, "lb", function() { return /* reexport */ components_Widget6; });
__webpack_require__.d(__webpack_exports__, "mb", function() { return /* reexport */ components_Widget7; });
__webpack_require__.d(__webpack_exports__, "nb", function() { return /* reexport */ components_Widget8; });
__webpack_require__.d(__webpack_exports__, "ob", function() { return /* reexport */ components_Widget9; });
__webpack_require__.d(__webpack_exports__, "bb", function() { return /* reexport */ components_Widget10; });
__webpack_require__.d(__webpack_exports__, "cb", function() { return /* reexport */ components_Widget11; });
__webpack_require__.d(__webpack_exports__, "db", function() { return /* reexport */ components_Widget12; });
__webpack_require__.d(__webpack_exports__, "eb", function() { return /* reexport */ components_Widget13; });
__webpack_require__.d(__webpack_exports__, "fb", function() { return /* reexport */ components_Widget14; });
__webpack_require__.d(__webpack_exports__, "gb", function() { return /* reexport */ components_Widget15; });

// UNUSED EXPORTS: ButtonToggle, Fade

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/modules/components/utils.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function createBasicComponent(tag, defaultClass, displayName = "Component") {
  const propTypes = {
    className: external_prop_types_default.a.string,
    cssModule: external_prop_types_default.a.object,
    tag: tagPropType
  };
  const defaultProps = {
    tag: tag
  };

  const Component = props => {
    const {
      className,
      cssModule,
      tag: Tag
    } = props,
          attributes = _objectWithoutProperties(props, ["className", "cssModule", "tag"]);

    const classes = mapToCssModules(external_classnames_default()(defaultClass, className), cssModule);
    return __jsx(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Component.defaultProps = defaultProps;
  Component.displayName = displayName;
  return Component;
} // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443

function getScrollbarWidth() {
  let scrollDiv = document.createElement("div"); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.width = "50px";
  scrollDiv.style.height = "50px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  const style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue("padding-right") || 0, 10);
}
function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  const fixedContent = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0];
  const bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
let globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className = "", cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className.split(" ").map(c => cssModule[c] || c).join(" ");
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
let warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== "undefined") {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== "undefined") {
      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`);
    }

    return propType(props, propName, componentName, ...rest);
  };
} // Shim Element if needed (e.g. in Node environment)

const Element =  false || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
  }
}
const targetPropType = external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.func, DOMElement, external_prop_types_default.a.shape({
  current: external_prop_types_default.a.any
})]);
const refPropType = external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.func, external_prop_types_default.a.string]);
const tagPropType = external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string, external_prop_types_default.a.shape({
  $$typeof: external_prop_types_default.a.symbol,
  render: external_prop_types_default.a.func
}), external_prop_types_default.a.arrayOf(external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string, external_prop_types_default.a.shape({
  $$typeof: external_prop_types_default.a.symbol,
  render: external_prop_types_default.a.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

const TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

const TransitionPropTypeKeys = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
const TransitionStatuses = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};
const keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
const PopperPlacements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
const canUseDOM = !!( false && false);
function isReactRefObj(target) {
  if (target && typeof target === "object") {
    return "current" in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  const type = typeof value;
  const NAN = 0 / 0;

  if (type === "number") {
    return value;
  }

  if (type === "symbol" || type === "object" && getTag(value) === "[object Symbol]") {
    return NAN;
  }

  if (isObject(value)) {
    const other = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }

  if (type !== "string") {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, "");
  const isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  const tag = getTag(value);
  return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === "string" && canUseDOM) {
    let selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll(`#${target}`);
    }

    if (!selection.length) {
      throw new Error(`The target '${target}' could not be identified in the dom, tip: check spelling`);
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === "number";
}
function getTarget(target, allElements) {
  const els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
const defaultToggleEvents = ["touchstart", "click"];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  let els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  let events = _events;

  if (typeof events === "string") {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== "function" || !Array.isArray(events)) {
    throw new Error(`
      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.
      The second must be a function.
      The third is a string or an array of strings that represents DOM events
    `);
  }

  Array.prototype.forEach.call(events, event => {
    Array.prototype.forEach.call(els, el => {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, event => {
      Array.prototype.forEach.call(els, el => {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
const focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
// CONCATENATED MODULE: ./src/modules/components/Container.jsx
var Container_jsx = external_react_default.a.createElement;

function Container_extends() { Container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Container_extends.apply(this, arguments); }

function Container_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Container_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Container_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Container_defaultProps = {
  tag: "div"
};

const Container = props => {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag
  } = props,
        attributes = Container_objectWithoutProperties(props, ["className", "cssModule", "fluid", "tag"]);

  let containerClass = "container";

  if (fluid === true) {
    containerClass = "container-fluid";
  } else if (fluid) {
    containerClass = `container-${fluid}`;
  }

  const classes = mapToCssModules(external_classnames_default()(className, containerClass), cssModule);
  return Container_jsx(Tag, Container_extends({}, attributes, {
    className: classes
  }));
};

Container.defaultProps = Container_defaultProps;
/* harmony default export */ var components_Container = (Container);
// CONCATENATED MODULE: ./src/modules/components/Row.jsx
var Row_jsx = external_react_default.a.createElement;

function Row_extends() { Row_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Row_extends.apply(this, arguments); }

function Row_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Row_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Row_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const rowColWidths = ["xs", "sm", "md", "lg", "xl"];
const Row_defaultProps = {
  tag: "div",
  widths: rowColWidths
};

const Row = props => {
  const {
    portletFill,
    className,
    cssModule,
    noGutters,
    tag: Tag,
    form,
    widths
  } = props,
        attributes = Row_objectWithoutProperties(props, ["portletFill", "className", "cssModule", "noGutters", "tag", "form", "widths"]);

  const colClasses = [];
  widths.forEach((colWidth, i) => {
    let colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    const isXs = !i;
    colClasses.push(isXs ? `row-cols-${colSize}` : `row-cols-${colWidth}-${colSize}`);
  });
  let portletFillClass = null;

  if (typeof portletFill === "string") {
    portletFillClass = `portlet-row-fill-${portletFill}`;
  } else if (typeof portletFill === "boolean") {
    portletFillClass = "portlet-row-fill";
  }

  const classes = mapToCssModules(external_classnames_default()(colClasses, portletFillClass, {
    "no-gutters": noGutters
  }, form ? "form-row" : "row", className), cssModule);
  return Row_jsx(Tag, Row_extends({}, attributes, {
    className: classes
  }));
};

Row.defaultProps = Row_defaultProps;
/* harmony default export */ var components_Row = (Row);
// CONCATENATED MODULE: ./src/modules/components/Col.jsx
var Col_jsx = external_react_default.a.createElement;

function Col_extends() { Col_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Col_extends.apply(this, arguments); }

function Col_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Col_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Col_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const colWidths = ["xs", "sm", "md", "lg", "xl"];
const Col_defaultProps = {
  tag: "div",
  widths: colWidths
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = props => {
  const {
    className,
    cssModule,
    widths,
    tag: Tag
  } = props,
        attributes = Col_objectWithoutProperties(props, ["className", "cssModule", "widths", "tag"]);

  const colClasses = [];
  widths.forEach((colWidth, i) => {
    let columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== "") {
      return;
    }

    const isXs = !i;

    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(external_classnames_default()({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      }), cssModule));
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push("col");
  }

  const classes = mapToCssModules(external_classnames_default()(className, colClasses), cssModule);
  return Col_jsx(Tag, Col_extends({}, attributes, {
    className: classes
  }));
};

Col.defaultProps = Col_defaultProps;
/* harmony default export */ var components_Col = (Col);
// CONCATENATED MODULE: ./src/modules/components/NavItem.jsx
var NavItem_jsx = external_react_default.a.createElement;

function NavItem_extends() { NavItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NavItem_extends.apply(this, arguments); }

function NavItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NavItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NavItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const NavItem_defaultProps = {
  href: "#",
  tag: "a"
};

class NavItem_NavLink extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === "#") {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let _this$props = this.props,
        {
      className,
      cssModule,
      innerRef,
      disabled,
      active,
      onClick,
      href,
      tag: Tag
    } = _this$props,
        attributes = NavItem_objectWithoutProperties(_this$props, ["className", "cssModule", "innerRef", "disabled", "active", "onClick", "href", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("nav-item", "nav-link", {
      disabled: disabled,
      active: active
    }, className), cssModule);
    return NavItem_jsx(Tag, NavItem_extends({}, attributes, {
      href: href,
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  }

}

NavItem_NavLink.defaultProps = NavItem_defaultProps;
/* harmony default export */ var NavItem = (NavItem_NavLink);
// CONCATENATED MODULE: ./src/modules/components/NavContent.jsx

const NavContent = createBasicComponent("span", "nav-content", "NavContent");
/* harmony default export */ var components_NavContent = (NavContent);
// CONCATENATED MODULE: ./src/modules/components/NavAddon.jsx
var NavAddon_jsx = external_react_default.a.createElement;

function NavAddon_extends() { NavAddon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NavAddon_extends.apply(this, arguments); }

function NavAddon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NavAddon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NavAddon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const NavAddon_defaultProps = {
  addonType: "prepend",
  tag: "div"
};

const NavAddon = props => {
  const {
    className,
    cssModule,
    addonType,
    tag: Tag
  } = props,
        attributes = NavAddon_objectWithoutProperties(props, ["className", "cssModule", "addonType", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(`nav-${addonType}`, className), cssModule);
  return NavAddon_jsx(Tag, NavAddon_extends({}, attributes, {
    className: classes
  }));
};

NavAddon.defaultProps = NavAddon_defaultProps;
/* harmony default export */ var components_NavAddon = (NavAddon);
// CONCATENATED MODULE: ./src/modules/components/NavIcon.jsx

const NavIcon = createBasicComponent("div", "nav-icon", "NavIcon");
/* harmony default export */ var components_NavIcon = (NavIcon);
// CONCATENATED MODULE: ./src/modules/components/Nav.jsx
var Nav_jsx = external_react_default.a.createElement;

function Nav_extends() { Nav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Nav_extends.apply(this, arguments); }

function Nav_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Nav_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Nav_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Nav_defaultProps = {
  vertical: false,
  tag: "div"
};

const Nav = props => {
  const {
    className,
    cssModule,
    horizontal,
    justified,
    vertical,
    portlet,
    pills,
    lines,
    tabs,
    size,
    fill,
    card,
    tag: Tag
  } = props,
        attributes = Nav_objectWithoutProperties(props, ["className", "cssModule", "horizontal", "justified", "vertical", "portlet", "pills", "lines", "tabs", "size", "fill", "card", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("nav", {
    [`nav-${size}`]: size,
    [`justify-content-${horizontal}`]: horizontal,
    "nav-tabs": tabs,
    "nav-pills": pills,
    "nav-justified": justified,
    "nav-lines": lines,
    "nav-vertical": vertical,
    "nav-fill": fill,
    "portlet-nav": portlet,
    "card-nav": card && !pills
  }, className), cssModule);
  return Nav_jsx(Tag, Nav_extends({}, attributes, {
    className: classes
  }));
};

Nav.defaultProps = Nav_defaultProps;
Nav.Item = NavItem;
Nav.Content = components_NavContent;
Nav.Addon = components_NavAddon;
Nav.Icon = components_NavIcon;
/* harmony default export */ var components_Nav = (Nav);
// CONCATENATED MODULE: ./src/modules/components/AccordionCaret.jsx

const AccordionCaret = createBasicComponent("i", "caret accordion-caret", "AccordionCaret");
/* harmony default export */ var components_AccordionCaret = (AccordionCaret);
// CONCATENATED MODULE: ./src/modules/components/Accordion.jsx
var Accordion_jsx = external_react_default.a.createElement;

function Accordion_extends() { Accordion_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Accordion_extends.apply(this, arguments); }

function Accordion_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Accordion_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Accordion_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Accordion_defaultProps = {
  tag: "div"
};

const Accordion = props => {
  const {
    className,
    cssModule,
    flush,
    tag: Tag
  } = props,
        attributes = Accordion_objectWithoutProperties(props, ["className", "cssModule", "flush", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("accordion", {
    "accordion-flush": flush
  }, className), cssModule);
  return Accordion_jsx(Tag, Accordion_extends({}, attributes, {
    className: classes
  }));
};

Accordion.defaultProps = Accordion_defaultProps;
Accordion.Caret = components_AccordionCaret;
/* harmony default export */ var components_Accordion = (Accordion);
// CONCATENATED MODULE: ./src/modules/components/AvatarDisplay.jsx

const AvatarDisplay = createBasicComponent("div", "avatar-display", "AvatarDisplay");
/* harmony default export */ var components_AvatarDisplay = (AvatarDisplay);
// CONCATENATED MODULE: ./src/modules/components/AvatarAddon.jsx
var AvatarAddon_jsx = external_react_default.a.createElement;

function AvatarAddon_extends() { AvatarAddon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AvatarAddon_extends.apply(this, arguments); }

function AvatarAddon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AvatarAddon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AvatarAddon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AvatarAddon_defaultProps = {
  position: "top",
  tag: "div"
};

const AvatarAddon = props => {
  const {
    className,
    cssModule,
    tag: Tag,
    position
  } = props,
        attributes = AvatarAddon_objectWithoutProperties(props, ["className", "cssModule", "tag", "position"]);

  const classes = mapToCssModules(external_classnames_default()("avatar-addon", `avatar-addon-${position}`, className), cssModule);
  return AvatarAddon_jsx(Tag, AvatarAddon_extends({}, attributes, {
    className: classes
  }));
};

AvatarAddon.defaultProps = AvatarAddon_defaultProps;
/* harmony default export */ var components_AvatarAddon = (AvatarAddon);
// CONCATENATED MODULE: ./src/modules/components/AvatarIcon.jsx
var AvatarIcon_jsx = external_react_default.a.createElement;

function AvatarIcon_extends() { AvatarIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AvatarIcon_extends.apply(this, arguments); }

function AvatarIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AvatarIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AvatarIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AvatarIcon_defaultProps = {
  variant: "primary",
  tag: "div"
};

const AvatarIcon = props => {
  const {
    className,
    cssModule,
    variant,
    tag: Tag
  } = props,
        attributes = AvatarIcon_objectWithoutProperties(props, ["className", "cssModule", "variant", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("avatar-icon", `avatar-icon-${variant}`, className), cssModule);
  return AvatarIcon_jsx(Tag, AvatarIcon_extends({}, attributes, {
    className: classes
  }));
};

AvatarIcon.defaultProps = AvatarIcon_defaultProps;
/* harmony default export */ var components_AvatarIcon = (AvatarIcon);
// CONCATENATED MODULE: ./src/modules/components/Badge.jsx
var Badge_jsx = external_react_default.a.createElement;

function Badge_extends() { Badge_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Badge_extends.apply(this, arguments); }

function Badge_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Badge_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Badge_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Badge_defaultProps = {
  variant: "secondary",
  pill: false,
  tag: "span"
};

const Badge = props => {
  let {
    className,
    cssModule,
    innerRef,
    variant,
    shape,
    size,
    pill,
    tag: Tag
  } = props,
      attributes = Badge_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "variant", "shape", "size", "pill", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("badge", `badge-${variant}`, {
    "badge-pill": pill,
    [`badge-${shape}`]: shape,
    [`badge-${size}`]: size
  }, className), cssModule);

  if (attributes.href && Tag === "span") {
    Tag = "a";
  }

  return Badge_jsx(Tag, Badge_extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Badge.defaultProps = Badge_defaultProps;
/* harmony default export */ var components_Badge = (Badge);
// CONCATENATED MODULE: ./src/modules/components/AvatarBadge.jsx
var AvatarBadge_jsx = external_react_default.a.createElement;

function AvatarBadge_extends() { AvatarBadge_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AvatarBadge_extends.apply(this, arguments); }

function AvatarBadge_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AvatarBadge_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AvatarBadge_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const AvatarBadge = props => {
  const {
    className,
    cssModule
  } = props,
        attributes = AvatarBadge_objectWithoutProperties(props, ["className", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()("avatar-badge", className), cssModule);
  return AvatarBadge_jsx(components_Badge, AvatarBadge_extends({
    className: classes
  }, attributes));
};

/* harmony default export */ var components_AvatarBadge = (AvatarBadge);
// CONCATENATED MODULE: ./src/modules/components/Avatar.jsx
var Avatar_jsx = external_react_default.a.createElement;

function Avatar_extends() { Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Avatar_extends.apply(this, arguments); }

function Avatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Avatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Avatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Avatar_defaultProps = {
  tag: "div"
};

const Avatar = props => {
  const {
    className,
    cssModule,
    children,
    innerRef,
    display,
    variant,
    circle,
    size,
    tag: Tag
  } = props,
        attributes = Avatar_objectWithoutProperties(props, ["className", "cssModule", "children", "innerRef", "display", "variant", "circle", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("avatar", `avatar-${variant}`, {
    "avatar-circle": circle,
    [`avatar-${size}`]: size
  }, className), cssModule);

  if (display) {
    return Avatar_jsx(Tag, Avatar_extends({}, attributes, {
      ref: innerRef,
      className: classes
    }), Avatar_jsx(components_AvatarDisplay, {
      tag: Tag
    }, children));
  } else {
    return Avatar_jsx(Tag, Avatar_extends({}, attributes, {
      ref: innerRef,
      className: classes
    }), children);
  }
};

Avatar.defaultProps = Avatar_defaultProps;
Avatar.Display = components_AvatarDisplay;
Avatar.Addon = components_AvatarAddon;
Avatar.Icon = components_AvatarIcon;
Avatar.Badge = components_AvatarBadge;
/* harmony default export */ var components_Avatar = (Avatar);
// CONCATENATED MODULE: ./src/modules/components/AvatarGroup.jsx
var AvatarGroup_jsx = external_react_default.a.createElement;

function AvatarGroup_extends() { AvatarGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AvatarGroup_extends.apply(this, arguments); }

function AvatarGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AvatarGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AvatarGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AvatarGroup_defaultProps = {
  tag: "div"
};

const AvatarGroup = props => {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attributes = AvatarGroup_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("avatar-group", {
    [`avatar-group-${size}`]: size
  }, className), cssModule);
  return AvatarGroup_jsx(Tag, AvatarGroup_extends({}, attributes, {
    className: classes
  }));
};

AvatarGroup.defaultProps = AvatarGroup_defaultProps;
/* harmony default export */ var components_AvatarGroup = (AvatarGroup);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./src/modules/components/Portal.jsx




class Portal_Portal extends external_react_default.a.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  }

  render() {
    if (!canUseDOM) {
      return null;
    } else {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement("div");
        document.body.appendChild(this.defaultNode);
      }

      return /*#__PURE__*/external_react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }

}

/* harmony default export */ var components_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./src/modules/components/AsideHeader.jsx

const AsideHeader = createBasicComponent("div", "aside-header", "AsideHeader");
/* harmony default export */ var components_AsideHeader = (AsideHeader);
// CONCATENATED MODULE: ./src/modules/components/AsideBody.jsx
var AsideBody_jsx = external_react_default.a.createElement;

function AsideBody_extends() { AsideBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AsideBody_extends.apply(this, arguments); }

function AsideBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AsideBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AsideBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AsideBody_defaultProps = {
  tag: "div"
};

const AsideBody = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = AsideBody_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("aside-body", className), cssModule);
  return AsideBody_jsx(Tag, AsideBody_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

AsideBody.defaultProps = AsideBody_defaultProps;
/* harmony default export */ var components_AsideBody = (AsideBody);
// CONCATENATED MODULE: ./src/modules/components/AsideTitle.jsx

const AsideTitle = createBasicComponent("h3", "aside-title", "AsideTitle");
/* harmony default export */ var components_AsideTitle = (AsideTitle);
// CONCATENATED MODULE: ./src/modules/components/AsideAddon.jsx

const AsideAddon = createBasicComponent("div", "aside-addon", "AsideAddon");
/* harmony default export */ var components_AsideAddon = (AsideAddon);
// CONCATENATED MODULE: ./src/modules/components/Aside.jsx
var Aside_jsx = external_react_default.a.createElement;

function Aside_extends() { Aside_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Aside_extends.apply(this, arguments); }

function Aside_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Aside_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Aside_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Aside_defaultProps = {
  desktopMinimized: false,
  mobileMinimized: true,
  tag: "div"
};

class Aside_Aside extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.breakpoint = 1025;
    this.transitionDuration = 200;
    this.state = {
      desktopMinimized: this.props.desktopMinimized,
      mobileMinimized: this.props.mobileMinimized,
      asideHover: false
    };
    this.classes = {
      active: "aside-active",
      desktop: {
        minimized: "aside-desktop-minimized",
        maximized: "aside-desktop-maximized"
      },
      mobile: {
        minimized: "aside-mobile-minimized",
        maximized: "aside-mobile-maximized"
      }
    };
    this.backdropClick = this.backdropClick.bind(this);
    this.toggleMinimizedBodyClass = this.toggleMinimizedBodyClass.bind(this);
  }

  toggleMinimizedBodyClass(viewport, minimized) {
    if (minimized) {
      document.body.classList.add(this.classes[viewport].minimized);
      document.body.classList.remove(this.classes[viewport].maximized);
    } else {
      document.body.classList.remove(this.classes[viewport].minimized);
      document.body.classList.add(this.classes[viewport].maximized);
    }
  }

  backdropClick(e) {
    let newState = this.state;
    newState.mobileMinimized = true;
    this.toggleMinimizedBodyClass("mobile", true);
    this.setState(newState);

    if (this.props.backdropOnClick) {
      this.props.backdropOnClick(e);
    }
  }

  componentDidMount() {
    let newState = this.state;
    document.body.classList.add(this.classes.active);
    newState.asideHover = this.state.desktopMinimized;
    this.toggleMinimizedBodyClass("desktop", this.state.desktopMinimized);
    this.toggleMinimizedBodyClass("mobile", this.state.mobileMinimized);
    this.setState(newState);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let newState = this.state;

      if (window.innerWidth >= this.breakpoint) {
        newState.desktopMinimized = this.props.desktopMinimized;
        this.toggleMinimizedBodyClass("desktop", this.state.desktopMinimized);
        this.setState(newState);

        if (this.props.desktopMinimized) {
          setTimeout(() => {
            newState.asideHover = true;
            this.setState(newState);
          }, this.transitionDuration);
        } else {
          newState.asideHover = false;
          this.setState(newState);
        }
      } else {
        newState.mobileMinimized = this.props.mobileMinimized;
        this.toggleMinimizedBodyClass("mobile", this.state.mobileMinimized);
        this.setState(newState);
      }
    }
  }

  componentWillUnmount() {
    const removedClasses = [this.classes.active, this.classes.desktop.minimized, this.classes.desktop.maximized, this.classes.mobile.minimized, this.classes.mobile.maximized];
    removedClasses.forEach(removedClass => {
      document.body.classList.remove(removedClass);
    });
  }

  render() {
    const _this$props = this.props,
          {
      desktopMinimized,
      mobileMinimized,
      backdropOnClick,
      className,
      cssModule,
      children,
      innerRef,
      tag: Tag
    } = _this$props,
          attributes = Aside_objectWithoutProperties(_this$props, ["desktopMinimized", "mobileMinimized", "backdropOnClick", "className", "cssModule", "children", "innerRef", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("aside", {
      "aside-hover": this.state.asideHover
    }, className), cssModule);
    return Aside_jsx(Tag, Aside_extends({}, attributes, {
      className: classes,
      ref: innerRef
    }), children, !this.state.mobileMinimized ? Aside_jsx(components_Portal, null, Aside_jsx("div", {
      id: "aside-backdrop",
      onClick: this.backdropClick
    })) : null);
  }

}

Aside_Aside.defaultProps = Aside_defaultProps;
Aside_Aside.Header = components_AsideHeader;
Aside_Aside.Body = components_AsideBody;
Aside_Aside.Title = components_AsideTitle;
Aside_Aside.Addon = components_AsideAddon;
/* harmony default export */ var components_Aside = (Aside_Aside);
// CONCATENATED MODULE: ./src/modules/components/BreadcrumbItem.jsx
var BreadcrumbItem_jsx = external_react_default.a.createElement;

function BreadcrumbItem_extends() { BreadcrumbItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BreadcrumbItem_extends.apply(this, arguments); }

function BreadcrumbItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = BreadcrumbItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function BreadcrumbItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BreadcrumbItem_defaultProps = {
  iconTag: "div",
  textTag: "div",
  tag: "li"
};

const BreadcrumbItem = props => {
  let {
    className,
    cssModule,
    children,
    innerRef,
    iconTag: IconTag,
    textTag: TextTag,
    active,
    icon,
    tag: Tag
  } = props,
      attributes = BreadcrumbItem_objectWithoutProperties(props, ["className", "cssModule", "children", "innerRef", "iconTag", "textTag", "active", "icon", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("breadcrumb-item", {
    active
  }, className), cssModule);
  const iconClasses = mapToCssModules(external_classnames_default()("breadcrumb-icon"), cssModule);
  const textClasses = mapToCssModules(external_classnames_default()("breadcrumb-text"), cssModule);

  if (attributes.href) {
    Tag = "a";
  }

  return BreadcrumbItem_jsx(Tag, BreadcrumbItem_extends({}, attributes, {
    ref: innerRef,
    className: classes,
    "aria-current": active ? "page" : undefined
  }), icon ? BreadcrumbItem_jsx(IconTag, {
    className: iconClasses
  }, icon) : false, BreadcrumbItem_jsx(TextTag, {
    className: textClasses
  }, children));
};

BreadcrumbItem.defaultProps = BreadcrumbItem_defaultProps;
/* harmony default export */ var components_BreadcrumbItem = (BreadcrumbItem);
// CONCATENATED MODULE: ./src/modules/components/Breadcrumb.jsx
var Breadcrumb_jsx = external_react_default.a.createElement;

function Breadcrumb_extends() { Breadcrumb_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Breadcrumb_extends.apply(this, arguments); }

function Breadcrumb_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Breadcrumb_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Breadcrumb_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Breadcrumb_defaultProps = {
  "aria-label": "breadcrumb",
  listTag: "ol",
  tag: "nav"
};

const Breadcrumb = props => {
  const {
    "aria-label": label,
    listClassName,
    className,
    cssModule,
    children,
    listTag: ListTag,
    tag: Tag
  } = props,
        attributes = Breadcrumb_objectWithoutProperties(props, ["aria-label", "listClassName", "className", "cssModule", "children", "listTag", "tag"]);

  const containerClasses = mapToCssModules(external_classnames_default()(className), cssModule);
  const listClasses = mapToCssModules(external_classnames_default()("breadcrumb", listClassName), cssModule);
  return Breadcrumb_jsx(Tag, Breadcrumb_extends({}, attributes, {
    className: containerClasses,
    "aria-label": label
  }), Breadcrumb_jsx(ListTag, {
    className: listClasses
  }, children));
};

Breadcrumb.defaultProps = Breadcrumb_defaultProps;
Breadcrumb.Item = components_BreadcrumbItem;
/* harmony default export */ var components_Breadcrumb = (Breadcrumb);
// CONCATENATED MODULE: ./src/modules/components/ButtonMarker.jsx

const ButtonMarker = createBasicComponent("span", "btn-marker", "ButtonMarker");
/* harmony default export */ var components_ButtonMarker = (ButtonMarker);
// CONCATENATED MODULE: ./src/modules/components/ButtonCounter.jsx
var ButtonCounter_jsx = external_react_default.a.createElement;

function ButtonCounter_extends() { ButtonCounter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ButtonCounter_extends.apply(this, arguments); }

function ButtonCounter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ButtonCounter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ButtonCounter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ButtonCounter = props => {
  const {
    className,
    cssModule
  } = props,
        attributes = ButtonCounter_objectWithoutProperties(props, ["className", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()("btn-counter", className), cssModule);
  return ButtonCounter_jsx(components_Badge, ButtonCounter_extends({}, attributes, {
    className: classes
  }));
};

/* harmony default export */ var components_ButtonCounter = (ButtonCounter);
// CONCATENATED MODULE: ./src/modules/components/Button.jsx
var Button_jsx = external_react_default.a.createElement;

function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Button_defaultProps = {
  variant: "primary",
  tag: "button"
};

class Button_Button extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let _this$props = this.props,
        {
      "aria-label": label,
      className,
      cssModule,
      innerRef,
      onClick,
      disabled,
      variant,
      height,
      active,
      circle,
      width,
      block,
      icon,
      pill,
      size,
      tag: Tag
    } = _this$props,
        attributes = Button_objectWithoutProperties(_this$props, ["aria-label", "className", "cssModule", "innerRef", "onClick", "disabled", "variant", "height", "active", "circle", "width", "block", "icon", "pill", "size", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("btn", `btn-${variant}`, {
      "btn-icon": icon,
      "btn-pill": pill,
      "btn-block": block,
      "btn-circle": circle,
      [`btn-${size}`]: size,
      [`btn-${width}`]: width,
      [`btn-${height}`]: height,
      active,
      disabled
    }, className), cssModule);

    if (attributes.href && Tag === "button") {
      Tag = "a";
    }

    return Button_jsx(Tag, Button_extends({
      type: Tag === "button" && attributes.onClick ? "button" : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": label
    }));
  }

}

Button_Button.defaultProps = Button_defaultProps;
Button_Button.Marker = components_ButtonMarker;
Button_Button.Counter = components_ButtonCounter;
/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./src/modules/components/ButtonToggle.jsx
var ButtonToggle_jsx = external_react_default.a.createElement;

function ButtonToggle_extends() { ButtonToggle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ButtonToggle_extends.apply(this, arguments); }

function ButtonToggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ButtonToggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ButtonToggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ButtonToggle_defaultProps = {
  defaultValue: false
};

class ButtonToggle_ButtonToggle extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: props.defaultValue,
      focus: false
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false
    });
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true
    });
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState(({
      toggled
    }) => ({
      toggled: !toggled
    }));
  }

  render() {
    const _this$props = this.props,
          {
      className
    } = _this$props,
          attributes = ButtonToggle_objectWithoutProperties(_this$props, ["className"]);

    const classes = mapToCssModules(external_classnames_default()(className, {
      focus: this.state.focus
    }), this.props.cssModule);
    return ButtonToggle_jsx(components_Button, ButtonToggle_extends({
      active: this.state.toggled,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onClick: this.onClick,
      className: classes
    }, attributes));
  }

}

ButtonToggle_ButtonToggle.defaultProps = ButtonToggle_defaultProps;
/* harmony default export */ var components_ButtonToggle = (ButtonToggle_ButtonToggle);
// CONCATENATED MODULE: ./src/modules/components/ButtonGroup.jsx
var ButtonGroup_jsx = external_react_default.a.createElement;

function ButtonGroup_extends() { ButtonGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ButtonGroup_extends.apply(this, arguments); }

function ButtonGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ButtonGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ButtonGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonGroup_defaultProps = {
  tag: "div"
};

const ButtonGroup = props => {
  const {
    className,
    cssModule,
    vertical,
    size,
    tag: Tag
  } = props,
        attributes = ButtonGroup_objectWithoutProperties(props, ["className", "cssModule", "vertical", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(vertical ? "btn-group-vertical" : "btn-group", {
    [`btn-group-${size}`]: size
  }, className), cssModule);
  return ButtonGroup_jsx(Tag, ButtonGroup_extends({}, attributes, {
    className: classes
  }));
};

ButtonGroup.defaultProps = ButtonGroup_defaultProps;
/* harmony default export */ var components_ButtonGroup = (ButtonGroup);
// CONCATENATED MODULE: ./src/modules/components/ButtonToolbar.jsx

const ButtonToolbar = createBasicComponent("div", "btn-toolbar", "ButtonToolbar");
/* harmony default export */ var components_ButtonToolbar = (ButtonToolbar);
// CONCATENATED MODULE: ./src/modules/components/BlockquoteFooter.jsx

const BlockquoteFooter = createBasicComponent("footer", "blockquote-footer", "BlockquoteFooter");
/* harmony default export */ var components_BlockquoteFooter = (BlockquoteFooter);
// CONCATENATED MODULE: ./src/modules/components/Blockquote.jsx
var Blockquote_jsx = external_react_default.a.createElement;

function Blockquote_extends() { Blockquote_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Blockquote_extends.apply(this, arguments); }

function Blockquote_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Blockquote_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Blockquote_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Blockquote_defaultProps = {
  tag: "blockquote"
};

const Blockquote = props => {
  const {
    className,
    cssModule,
    tag: Tag,
    align
  } = props,
        attributes = Blockquote_objectWithoutProperties(props, ["className", "cssModule", "tag", "align"]);

  const classes = mapToCssModules(external_classnames_default()("blockquote", {
    [`text-${align}`]: align
  }, className), cssModule);
  return Blockquote_jsx(Tag, Blockquote_extends({}, attributes, {
    className: classes
  }));
};

Blockquote.defaultProps = Blockquote_defaultProps;
Blockquote.Footer = components_BlockquoteFooter;
/* harmony default export */ var components_Blockquote = (Blockquote);
// CONCATENATED MODULE: ./src/modules/components/CarouselItem.jsx

const CarouselItem = createBasicComponent("div", "carousel-item", "CarouselItem");
/* harmony default export */ var components_CarouselItem = (CarouselItem);
// CONCATENATED MODULE: ./src/modules/components/DemoWrapper.jsx

const DemoWrapper = createBasicComponent("div", "overflow-auto text-nowrap py-3", "DemoWrapper");
/* harmony default export */ var components_DemoWrapper = (DemoWrapper);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__("pYII");

// CONCATENATED MODULE: ./src/modules/components/DropdownContext.jsx

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
 *  disabled: PropTypes.bool
 * }
 */

const DropdownContext = /*#__PURE__*/external_react_default.a.createContext({});
// CONCATENATED MODULE: ./src/modules/components/DropdownItem.jsx
var DropdownItem_jsx = external_react_default.a.createElement;

function DropdownItem_extends() { DropdownItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownItem_extends.apply(this, arguments); }

function DropdownItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DropdownItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DropdownItem_defaultProps = {
  toggle: true,
  tag: "button"
};

class DropdownItem_DropdownItem extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return "-1";
    }

    return "0";
  }

  render() {
    const tabIndex = this.getTabIndex();
    const role = tabIndex > -1 ? "menuitem" : undefined;

    let _omit = omit(this.props, ["toggle"]),
        {
      className,
      cssModule,
      children,
      disabled,
      active,
      bullet,
      addon,
      icon,
      tag: Tag
    } = _omit,
        props = DropdownItem_objectWithoutProperties(_omit, ["className", "cssModule", "children", "disabled", "active", "bullet", "addon", "icon", "tag"]);

    const classes = mapToCssModules(external_classnames_default()(className, "dropdown-item", {
      disabled,
      active
    }), cssModule);
    const iconClasses = mapToCssModules(external_classnames_default()("dropdown-icon"), cssModule);
    const bulletClasses = mapToCssModules(external_classnames_default()("dropdown-bullet"), cssModule);
    const contentClasses = mapToCssModules(external_classnames_default()("dropdown-content"), cssModule);
    const addonClasses = mapToCssModules(external_classnames_default()("dropdown-addon"), cssModule);

    if (Tag === "button") {
      if (props.href) {
        Tag = "a";
      }
    }

    return DropdownItem_jsx(Tag, DropdownItem_extends({
      type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }), icon ? DropdownItem_jsx("span", {
      className: iconClasses
    }, icon) : null, bullet && !icon ? DropdownItem_jsx("i", {
      className: bulletClasses
    }) : null, DropdownItem_jsx("span", {
      className: contentClasses
    }, children), addon ? DropdownItem_jsx("span", {
      className: addonClasses
    }, addon) : null);
  }

}

DropdownItem_DropdownItem.defaultProps = DropdownItem_defaultProps;
DropdownItem_DropdownItem.contextType = DropdownContext;
/* harmony default export */ var components_DropdownItem = (DropdownItem_DropdownItem);
// CONCATENATED MODULE: ./src/modules/components/DropdownMenu.jsx
var DropdownMenu_jsx = external_react_default.a.createElement;

function DropdownMenu_extends() { DropdownMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownMenu_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DropdownMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DropdownMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DropdownMenu_defaultProps = {
  flip: true,
  tag: "div"
};
const noFlipModifier = {
  flip: {
    enabled: false
  }
};
const directionPositionMap = {
  up: "top",
  left: "left",
  right: "right",
  down: "bottom"
};

class DropdownMenu_DropdownMenu extends external_react_default.a.Component {
  render() {
    const _this$props = this.props,
          {
      positionFixed,
      className,
      cssModule,
      modifiers,
      animated,
      persist,
      right,
      flip,
      wide,
      tag
    } = _this$props,
          attrs = DropdownMenu_objectWithoutProperties(_this$props, ["positionFixed", "className", "cssModule", "modifiers", "animated", "persist", "right", "flip", "wide", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("dropdown-menu", {
      "dropdown-menu-animated": animated,
      "dropdown-menu-right": right,
      "dropdown-menu-wide": wide,
      show: this.context.isOpen
    }, className), cssModule);
    const Tag = tag;

    if (persist || this.context.isOpen) {
      const position1 = directionPositionMap[this.context.direction] || "bottom";
      const position2 = right ? "end" : "start";
      const poperPlacement = `${position1}-${position2}`;
      const poperModifiers = !flip ? _objectSpread(_objectSpread({}, modifiers), noFlipModifier) : modifiers;
      const popperPositionFixed = !!positionFixed;
      return DropdownMenu_jsx(external_react_popper_["Popper"], {
        placement: poperPlacement,
        modifiers: poperModifiers,
        positionFixed: popperPositionFixed
      }, ({
        ref,
        style,
        placement
      }) => DropdownMenu_jsx(Tag, DropdownMenu_extends({
        tabIndex: "-1",
        role: "menu",
        ref: ref,
        style: style
      }, attrs, {
        "aria-hidden": !this.context.isOpen,
        className: classes,
        "x-placement": placement
      })));
    }

    return DropdownMenu_jsx(Tag, DropdownMenu_extends({
      tabIndex: "-1",
      role: "menu"
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "x-placement": attrs.placement
    }));
  }

}

DropdownMenu_DropdownMenu.defaultProps = DropdownMenu_defaultProps;
DropdownMenu_DropdownMenu.contextType = DropdownContext;
/* harmony default export */ var components_DropdownMenu = (DropdownMenu_DropdownMenu);
// CONCATENATED MODULE: ./src/modules/components/DropdownToggle.jsx
var DropdownToggle_jsx = external_react_default.a.createElement;

function DropdownToggle_extends() { DropdownToggle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownToggle_extends.apply(this, arguments); }

function DropdownToggle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownToggle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DropdownToggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const DropdownToggle_defaultProps = {
  "aria-haspopup": true,
  variant: "primary"
};

class DropdownToggle_DropdownToggle extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  }

  render() {
    const _this$props = this.props,
          {
      className,
      cssModule,
      innerRef,
      disabled,
      children,
      onClick,
      variant,
      active,
      caret,
      split,
      tag,
      nav
    } = _this$props,
          attributes = DropdownToggle_objectWithoutProperties(_this$props, ["className", "cssModule", "innerRef", "disabled", "children", "onClick", "variant", "active", "caret", "split", "tag", "nav"]);

    const ariaLabel = attributes["aria-label"] || "Toggle Dropdown";
    const classes = mapToCssModules(external_classnames_default()({
      "dropdown-toggle": caret || split,
      "dropdown-toggle-split": split,
      "nav-link": nav,
      active: active
    }, className), cssModule);
    let Tag;

    if (nav && !tag) {
      Tag = "a";
      attributes.href = "#";
    } else if (!tag) {
      Tag = components_Button;
      attributes.variant = variant;
      attributes.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    return DropdownToggle_jsx(external_react_popper_["Reference"], {
      innerRef: innerRef
    }, ({
      ref
    }) => DropdownToggle_jsx(Tag, DropdownToggle_extends({}, attributes, {
      [typeof Tag === "string" ? "ref" : "innerRef"]: ref
    }, {
      className: classes,
      onClick: this.onClick
    }), typeof children !== "undefined" ? children : DropdownToggle_jsx("span", {
      className: "sr-only"
    }, ariaLabel)));
  }

}

DropdownToggle_DropdownToggle.defaultProps = DropdownToggle_defaultProps;
DropdownToggle_DropdownToggle.contextType = DropdownContext;
/* harmony default export */ var components_DropdownToggle = (DropdownToggle_DropdownToggle);
// CONCATENATED MODULE: ./src/modules/components/DropdownHeader.jsx
var DropdownHeader_jsx = external_react_default.a.createElement;

function DropdownHeader_extends() { DropdownHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownHeader_extends.apply(this, arguments); }

function DropdownHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DropdownHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DropdownHeader_defaultProps = {
  tag: "h6"
};

const DropdownHeader = props => {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attributes = DropdownHeader_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("dropdown-header", {
    [`dropdown-header-${size}`]: size
  }, className), cssModule);
  return DropdownHeader_jsx(Tag, DropdownHeader_extends({
    className: classes
  }, attributes));
};

DropdownHeader.defaultProps = DropdownHeader_defaultProps;
/* harmony default export */ var components_DropdownHeader = (DropdownHeader);
// CONCATENATED MODULE: ./src/modules/components/DropdownDivider.jsx

const DropdownDivider = createBasicComponent("div", "dropdown-divider", "DropdownDivider");
/* harmony default export */ var components_DropdownDivider = (DropdownDivider);
// CONCATENATED MODULE: ./src/modules/components/DropdownSubmenu.jsx

const DropdownSubmenu = createBasicComponent("div", "dropdown-submenu", "DropdownSubmenu");
/* harmony default export */ var components_DropdownSubmenu = (DropdownSubmenu);
// CONCATENATED MODULE: ./src/modules/components/DropdownSubmenuMenu.jsx
var DropdownSubmenuMenu_jsx = external_react_default.a.createElement;

function DropdownSubmenuMenu_extends() { DropdownSubmenuMenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DropdownSubmenuMenu_extends.apply(this, arguments); }

function DropdownSubmenuMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DropdownSubmenuMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DropdownSubmenuMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DropdownSubmenuMenu_defaultProps = {
  direction: "left",
  tag: "div"
};

class DropdownSubmenuMenu_DropdownSubmenuMenu extends external_react_default.a.Component {
  render() {
    const _this$props = this.props,
          {
      className,
      cssModule,
      direction,
      tag: Tag
    } = _this$props,
          attrs = DropdownSubmenuMenu_objectWithoutProperties(_this$props, ["className", "cssModule", "direction", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("dropdown-submenu-menu", {
      [`dropdown-submenu-${direction}`]: direction
    }, className), cssModule);
    return DropdownSubmenuMenu_jsx(Tag, DropdownSubmenuMenu_extends({}, attrs, {
      className: classes
    }));
  }

}

DropdownSubmenuMenu_DropdownSubmenuMenu.defaultProps = DropdownSubmenuMenu_defaultProps;
/* harmony default export */ var components_DropdownSubmenuMenu = (DropdownSubmenuMenu_DropdownSubmenuMenu);
// CONCATENATED MODULE: ./src/modules/components/DropdownRow.jsx

const DropdownRow = createBasicComponent("div", "dropdown-row", "DropdownRow");
/* harmony default export */ var components_DropdownRow = (DropdownRow);
// CONCATENATED MODULE: ./src/modules/components/DropdownCol.jsx

const DropdownCol = createBasicComponent("div", "dropdown-col", "DropdownCol");
/* harmony default export */ var components_DropdownCol = (DropdownCol);
// CONCATENATED MODULE: ./src/modules/components/Dropdown.jsx
var Dropdown_jsx = external_react_default.a.createElement;

function Dropdown_extends() { Dropdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dropdown_extends.apply(this, arguments); }

function Dropdown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dropdown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Dropdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const Dropdown_defaultProps = {
  setActiveFromChild: false,
  direction: "down",
  addonType: false,
  active: false,
  isOpen: false,
  a11y: true,
  nav: false
};
const preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];
const omitKeys = ["defaultOpen"];

class Dropdown_Dropdown extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.containerRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === "down" && this.props.dropup ? "up" : this.props.direction,
      disabled: this.props.disabled
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getContainer() {
    return this.containerRef.current;
  }

  getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector("[aria-expanded]");
    return this._$menuCtrl;
  }

  getMenuItems() {
    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
  }

  addEvents() {
    ["click", "touchstart", "keyup"].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  }

  removeEvents() {
    ["click", "touchstart", "keyup"].forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  }

  handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab)) return;
    const container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && (e.target.getAttribute("role") !== "menuitem" || !this.props.a11y)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (this.getMenuCtrl() === e.target) {
      if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        this.toggle(e);
        setTimeout(() => this.getMenuItems()[0].focus());
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && e.target.getAttribute("role") === "menuitem") {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        const $menuitems = this.getMenuItems();
        let index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        const $menuitems = this.getMenuItems();
        $menuitems[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        const $menuitems = this.getMenuItems();
        const charPressed = String.fromCharCode(e.which).toLowerCase();

        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            $menuitems[i].focus();
            break;
          }
        }
      }
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const _omit = omit(this.props, ["toggle", "disabled", "a11y"]),
          {
      setActiveFromChild,
      addonType,
      className,
      cssModule,
      direction,
      active,
      isOpen,
      group,
      size,
      nav,
      tag
    } = _omit,
          attrs = Dropdown_objectWithoutProperties(_omit, ["setActiveFromChild", "addonType", "className", "cssModule", "direction", "active", "isOpen", "group", "size", "nav", "tag"]);

    const Tag = tag || (nav ? "div" : "div");
    let subItemIsActive = false;

    if (setActiveFromChild) {
      external_react_default.a.Children.map(this.props.children[1].props.children, dropdownItem => {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    const classes = mapToCssModules(external_classnames_default()(className, direction !== "down" && `drop${direction}`, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
      [`input-group-${addonType}`]: addonType,
      "btn-group": group,
      [`btn-group-${size}`]: !!size,
      dropdown: !group && !addonType,
      show: isOpen,
      "nav-item": nav
    }), cssModule);
    return Dropdown_jsx(DropdownContext.Provider, {
      value: this.getContextValue()
    }, Dropdown_jsx(external_react_popper_["Manager"], null, Dropdown_jsx(Tag, Dropdown_extends({}, attrs, {
      [typeof Tag === "string" ? "ref" : "innerRef"]: this.containerRef
    }, {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  }

}

class Dropdown_DropdownUncontrolled extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      if (this.props.onToggle) {
        this.props.onToggle(e, this.state.isOpen);
      }
    });
  }

  render() {
    return Dropdown_jsx(Dropdown_Dropdown, Dropdown_extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  }

}

Dropdown_Dropdown.defaultProps = Dropdown_defaultProps;
Dropdown_Dropdown.Item = components_DropdownItem;
Dropdown_Dropdown.Menu = components_DropdownMenu;
Dropdown_Dropdown.Submenu = components_DropdownSubmenu;
Dropdown_Dropdown.SubmenuMenu = components_DropdownSubmenuMenu;
Dropdown_Dropdown.Toggle = components_DropdownToggle;
Dropdown_Dropdown.Header = components_DropdownHeader;
Dropdown_Dropdown.Divider = components_DropdownDivider;
Dropdown_Dropdown.Row = components_DropdownRow;
Dropdown_Dropdown.Col = components_DropdownCol;
Dropdown_Dropdown.Uncontrolled = Dropdown_DropdownUncontrolled;
/* harmony default export */ var components_Dropdown = (Dropdown_Dropdown);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// CONCATENATED MODULE: ./src/modules/components/Fade.jsx
var Fade_jsx = external_react_default.a.createElement;

function Fade_extends() { Fade_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Fade_extends.apply(this, arguments); }

function Fade_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Fade_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Fade_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Fade_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Fade_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Fade_ownKeys(Object(source), true).forEach(function (key) { Fade_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Fade_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Fade_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Fade_defaultProps = Fade_objectSpread(Fade_objectSpread({}, external_react_transition_group_["Transition"].defaultProps), {}, {
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    cssModule,
    children,
    innerRef
  } = props,
        otherProps = Fade_objectWithoutProperties(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
  const childProps = omit(otherProps, TransitionPropTypeKeys);
  return Fade_jsx(external_react_transition_group_["Transition"], transitionProps, status => {
    const isActive = status === "entered";
    const classes = mapToCssModules(external_classnames_default()(className, baseClass, isActive && baseClassActive), cssModule);
    return Fade_jsx(Tag, Fade_extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var components_Fade = (Fade);
// CONCATENATED MODULE: ./src/modules/components/FloatLabel.jsx
var FloatLabel_jsx = external_react_default.a.createElement;

function FloatLabel_extends() { FloatLabel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FloatLabel_extends.apply(this, arguments); }

function FloatLabel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FloatLabel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FloatLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FloatLabel_defaultProps = {
  tag: "div"
};

const FloatLabel = props => {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attrs = FloatLabel_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("float-label", {
    [`float-label-${size}`]: size
  }, className), cssModule);
  return FloatLabel_jsx(Tag, FloatLabel_extends({}, attrs, {
    className: classes
  }));
};

FloatLabel.defaultProps = FloatLabel_defaultProps;
/* harmony default export */ var components_FloatLabel = (FloatLabel);
// CONCATENATED MODULE: ./src/modules/components/FloatButton.jsx
var FloatButton_jsx = external_react_default.a.createElement;

function FloatButton_extends() { FloatButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FloatButton_extends.apply(this, arguments); }

function FloatButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FloatButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FloatButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FloatButton_defaultProps = {
  align: "right",
  tag: "div"
};

const FloatButton = props => {
  const {
    className,
    cssModule,
    align,
    tag: Tag
  } = props,
        attributes = FloatButton_objectWithoutProperties(props, ["className", "cssModule", "align", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("float-btn", {
    [`float-btn-${align}`]: align
  }, className), cssModule);
  return FloatButton_jsx(Tag, FloatButton_extends({}, attributes, {
    className: classes
  }));
};

FloatButton.defaultProps = FloatButton_defaultProps;
/* harmony default export */ var components_FloatButton = (FloatButton);
// CONCATENATED MODULE: ./src/modules/components/ChatContent.jsx

const ChatContent = createBasicComponent("div", "chat-content", "ChatContent");
/* harmony default export */ var components_ChatContent = (ChatContent);
// CONCATENATED MODULE: ./src/modules/components/ChatItem.jsx
var ChatItem_jsx = external_react_default.a.createElement;

function ChatItem_extends() { ChatItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChatItem_extends.apply(this, arguments); }

function ChatItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ChatItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ChatItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChatItem_defaultProps = {
  align: "left",
  tag: "div"
};

const ChatItem = props => {
  const {
    className,
    cssModule,
    children,
    content,
    align,
    tag: Tag
  } = props,
        attributes = ChatItem_objectWithoutProperties(props, ["className", "cssModule", "children", "content", "align", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(className, "chat-item", `chat-item-${align}`), cssModule);

  if (content) {
    return ChatItem_jsx(Tag, ChatItem_extends({}, attributes, {
      className: classes
    }), ChatItem_jsx(components_ChatContent, null, children));
  } else {
    return ChatItem_jsx(Tag, ChatItem_extends({}, attributes, {
      className: classes
    }), children);
  }
};

ChatItem.defaultProps = ChatItem_defaultProps;
/* harmony default export */ var components_ChatItem = (ChatItem);
// CONCATENATED MODULE: ./src/modules/components/ChatAuthor.jsx

const ChatAuthor = createBasicComponent("span", "chat-author", "ChatAuthor");
/* harmony default export */ var components_ChatAuthor = (ChatAuthor);
// CONCATENATED MODULE: ./src/modules/components/ChatAvatar.jsx
var ChatAvatar_jsx = external_react_default.a.createElement;

function ChatAvatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ChatAvatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ChatAvatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChatAvatar_defaultProps = {
  tag: "div"
};

const ChatAvatar = props => {
  const {
    className,
    cssModule,
    tag: Tag
  } = props,
        attributes = ChatAvatar_objectWithoutProperties(props, ["className", "cssModule", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("chat-avatar", className), cssModule);
  return ChatAvatar_jsx(Tag, {
    className: classes
  }, ChatAvatar_jsx(components_Avatar, attributes));
};

ChatAvatar.defaultProps = ChatAvatar_defaultProps;
/* harmony default export */ var components_ChatAvatar = (ChatAvatar);
// CONCATENATED MODULE: ./src/modules/components/ChatTime.jsx

const ChatTime = createBasicComponent("span", "chat-time", "ChatTime");
/* harmony default export */ var components_ChatTime = (ChatTime);
// CONCATENATED MODULE: ./src/modules/components/ChatBubble.jsx
var ChatBubble_jsx = external_react_default.a.createElement;

function ChatBubble_extends() { ChatBubble_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChatBubble_extends.apply(this, arguments); }

function ChatBubble_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ChatBubble_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ChatBubble_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ChatBubble_defaultProps = {
  tag: "div"
};

const ChatBubble = props => {
  const {
    className,
    cssModule,
    innerRef,
    variant,
    tag: Tag
  } = props,
        attributes = ChatBubble_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "variant", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("chat-bubble", {
    [`chat-bubble-${variant}`]: variant
  }, className), cssModule);
  return ChatBubble_jsx(Tag, ChatBubble_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

ChatBubble.defaultProps = ChatBubble_defaultProps;
/* harmony default export */ var components_ChatBubble = (ChatBubble);
// CONCATENATED MODULE: ./src/modules/components/ChatSection.jsx
var ChatSection_jsx = external_react_default.a.createElement;

function ChatSection_extends() { ChatSection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChatSection_extends.apply(this, arguments); }

function ChatSection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ChatSection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ChatSection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ChatSection_defaultProps = {
  textTag: "span",
  tag: "div"
};

const ChatSection = props => {
  const {
    className,
    cssModule,
    children,
    textTag: TextTag,
    tag: Tag
  } = props,
        attributes = ChatSection_objectWithoutProperties(props, ["className", "cssModule", "children", "textTag", "tag"]);

  const containerClasses = mapToCssModules(external_classnames_default()(className, "chat-section"), cssModule);
  const textClasses = mapToCssModules(external_classnames_default()("chat-section-text"), cssModule);
  return ChatSection_jsx(Tag, ChatSection_extends({}, attributes, {
    className: containerClasses
  }), ChatSection_jsx(TextTag, {
    className: textClasses
  }, children));
};

ChatSection.defaultProps = ChatSection_defaultProps;
/* harmony default export */ var components_ChatSection = (ChatSection);
// CONCATENATED MODULE: ./src/modules/components/ChatImg.jsx

const ChatImg = createBasicComponent("img", "chat-image", "ChatImg");
/* harmony default export */ var components_ChatImg = (ChatImg);
// CONCATENATED MODULE: ./src/modules/components/Chat.jsx
var Chat_jsx = external_react_default.a.createElement;

function Chat_extends() { Chat_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Chat_extends.apply(this, arguments); }

function Chat_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Chat_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Chat_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const Chat_defaultProps = {
  tag: "div"
};

const Chat = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = Chat_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("chat", className), cssModule);
  return Chat_jsx(Tag, Chat_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

Chat.defaultProps = Chat_defaultProps;
Chat.Item = components_ChatItem;
Chat.Content = components_ChatContent;
Chat.Author = components_ChatAuthor;
Chat.Avatar = components_ChatAvatar;
Chat.Time = components_ChatTime;
Chat.Bubble = components_ChatBubble;
Chat.Section = components_ChatSection;
Chat.Img = components_ChatImg;
/* harmony default export */ var components_Chat = (Chat);
// CONCATENATED MODULE: ./src/modules/components/Caret.jsx
var Caret_jsx = external_react_default.a.createElement;

function Caret_extends() { Caret_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Caret_extends.apply(this, arguments); }

function Caret_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Caret_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Caret_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Caret_defaultProps = {
  tag: "i"
};

const Caret = props => {
  const {
    className,
    cssModule,
    direction,
    tag: Tag
  } = props,
        attributes = Caret_objectWithoutProperties(props, ["className", "cssModule", "direction", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("caret", {
    [`caret-${direction}`]: direction
  }, className), cssModule);
  return Caret_jsx(Tag, Caret_extends({}, attributes, {
    className: classes
  }));
};

Caret.defaultProps = Caret_defaultProps;
/* harmony default export */ var components_Caret = (Caret);
// CONCATENATED MODULE: ./src/modules/components/CardBody.jsx
var CardBody_jsx = external_react_default.a.createElement;

function CardBody_extends() { CardBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardBody_extends.apply(this, arguments); }

function CardBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CardBody_defaultProps = {
  tag: "div"
};

const CardBody = props => {
  let {
    className,
    cssModule,
    blockquote,
    innerRef,
    tag: Tag
  } = props,
      attributes = CardBody_objectWithoutProperties(props, ["className", "cssModule", "blockquote", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("card-body", {
    blockquote: blockquote
  }, className), cssModule);

  if (blockquote) {
    Tag = "blockquote";
  }

  return CardBody_jsx(Tag, CardBody_extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.defaultProps = CardBody_defaultProps;
/* harmony default export */ var components_CardBody = (CardBody);
// CONCATENATED MODULE: ./src/modules/components/CardFooter.jsx

const CardFooter = createBasicComponent("div", "card-footer", "CardFooter");
/* harmony default export */ var components_CardFooter = (CardFooter);
// CONCATENATED MODULE: ./src/modules/components/CardHeader.jsx
var CardHeader_jsx = external_react_default.a.createElement;

function CardHeader_extends() { CardHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardHeader_extends.apply(this, arguments); }

function CardHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CardHeader_defaultProps = {
  tag: "div"
};

const CardHeader = props => {
  const {
    className,
    cssModule,
    collapsed,
    innerRef,
    tag: Tag
  } = props,
        attributes = CardHeader_objectWithoutProperties(props, ["className", "cssModule", "collapsed", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("card-header", {
    collapsed
  }, className), cssModule);
  return CardHeader_jsx(Tag, CardHeader_extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardHeader.defaultProps = CardHeader_defaultProps;
/* harmony default export */ var components_CardHeader = (CardHeader);
// CONCATENATED MODULE: ./src/modules/components/CardImg.jsx
var CardImg_jsx = external_react_default.a.createElement;

function CardImg_extends() { CardImg_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardImg_extends.apply(this, arguments); }

function CardImg_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardImg_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardImg_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CardImg_defaultProps = {
  tag: "img"
};

const CardImg = props => {
  const {
    className,
    cssModule,
    filter,
    bottom,
    top,
    tag: Tag
  } = props,
        attributes = CardImg_objectWithoutProperties(props, ["className", "cssModule", "filter", "bottom", "top", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(top ? "card-img-top" : bottom ? "card-img-bottom" : "card-img", {
    "card-img-filter": filter
  }, className), cssModule);
  return CardImg_jsx(Tag, CardImg_extends({}, attributes, {
    className: classes
  }));
};

CardImg.defaultProps = CardImg_defaultProps;
/* harmony default export */ var components_CardImg = (CardImg);
// CONCATENATED MODULE: ./src/modules/components/CardImgOverlay.jsx

const CardImgOverlay = createBasicComponent("div", "card-img-overlay", "CardImgOverlay");
/* harmony default export */ var components_CardImgOverlay = (CardImgOverlay);
// CONCATENATED MODULE: ./src/modules/components/CardLink.jsx
var CardLink_jsx = external_react_default.a.createElement;

function CardLink_extends() { CardLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardLink_extends.apply(this, arguments); }

function CardLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CardLink_defaultProps = {
  tag: "a"
};

const CardLink = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = CardLink_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("card-link", className), cssModule);
  return CardLink_jsx(Tag, CardLink_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

CardLink.defaultProps = CardLink_defaultProps;
/* harmony default export */ var components_CardLink = (CardLink);
// CONCATENATED MODULE: ./src/modules/components/CardTitle.jsx

const CardTitle = createBasicComponent("h3", "card-title", "CardTitle");
/* harmony default export */ var components_CardTitle = (CardTitle);
// CONCATENATED MODULE: ./src/modules/components/CardSubtitle.jsx

const CardSubtitle = createBasicComponent("span", "card-subtitle", "CardSubtitle");
/* harmony default export */ var components_CardSubtitle = (CardSubtitle);
// CONCATENATED MODULE: ./src/modules/components/CardText.jsx

const CardText = createBasicComponent("p", "card-text", "CardText");
/* harmony default export */ var components_CardText = (CardText);
// CONCATENATED MODULE: ./src/modules/components/CardIcon.jsx

const CardIcon = createBasicComponent("div", "card-icon", "CardIcon");
/* harmony default export */ var components_CardIcon = (CardIcon);
// CONCATENATED MODULE: ./src/modules/components/CardAddon.jsx

const CardAddon = createBasicComponent("div", "card-addon", "CardAddon");
/* harmony default export */ var components_CardAddon = (CardAddon);
// CONCATENATED MODULE: ./src/modules/components/Card.jsx
var Card_jsx = external_react_default.a.createElement;

function Card_extends() { Card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Card_extends.apply(this, arguments); }

function Card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const Card_defaultProps = {
  tag: "div"
};

const Card = props => {
  const {
    className,
    cssModule,
    innerRef,
    inverse,
    body,
    tag: Tag
  } = props,
        attributes = Card_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "inverse", "body", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("card", {
    "card-body": body,
    "text-white": inverse
  }, className), cssModule);
  return Card_jsx(Tag, Card_extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.defaultProps = Card_defaultProps;
Card.Body = components_CardBody;
Card.Footer = components_CardFooter;
Card.Header = components_CardHeader;
Card.Img = components_CardImg;
Card.ImgOverlay = components_CardImgOverlay;
Card.Link = components_CardLink;
Card.Title = components_CardTitle;
Card.Subtitle = components_CardSubtitle;
Card.Text = components_CardText;
Card.Icon = components_CardIcon;
Card.Addon = components_CardAddon;
/* harmony default export */ var components_Card = (Card);
// CONCATENATED MODULE: ./src/modules/components/CardGroup.jsx

const CardGroup = createBasicComponent("div", "card-group", "CardGroup");
/* harmony default export */ var components_CardGroup = (CardGroup);
// CONCATENATED MODULE: ./src/modules/components/CardDeck.jsx

const CardDeck = createBasicComponent("div", "card-deck", "CardDeck");
/* harmony default export */ var components_CardDeck = (CardDeck);
// CONCATENATED MODULE: ./src/modules/components/CardColumns.jsx

const CardColumns = createBasicComponent("div", "card-columns", "CardColumns");
/* harmony default export */ var components_CardColumns = (CardColumns);
// CONCATENATED MODULE: ./src/modules/components/CustomFileInput.jsx
var CustomFileInput_jsx = external_react_default.a.createElement;

function CustomFileInput_extends() { CustomFileInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CustomFileInput_extends.apply(this, arguments); }

function CustomFileInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CustomFileInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CustomFileInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





class CustomFileInput_CustomFileInput extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let input = e.target;
    let {
      onChange
    } = this.props;
    let files = this.getSelectedFiles(input);

    if (typeof onChange === "function") {
      onChange(...arguments);
    }

    this.setState({
      files
    });
  }

  getSelectedFiles(input) {
    let {
      multiple
    } = this.props;

    if (multiple && input.files) {
      let files = [].slice.call(input.files);
      return files.map(file => file.name).join(", ");
    }

    if (input.value.indexOf("fakepath") !== -1) {
      let parts = input.value.split("\\");
      return parts[parts.length - 1];
    }

    return input.value;
  }

  render() {
    const _this$props = this.props,
          {
      dataBrowse,
      cssModule,
      className,
      innerRef,
      onChange,
      children,
      invalid,
      htmlFor,
      hidden,
      label,
      size,
      valid,
      type
    } = _this$props,
          attributes = CustomFileInput_objectWithoutProperties(_this$props, ["dataBrowse", "cssModule", "className", "innerRef", "onChange", "children", "invalid", "htmlFor", "hidden", "label", "size", "valid", "type"]);

    const customClass = mapToCssModules(external_classnames_default()(className, "custom-file"), cssModule);
    const validationClassNames = mapToCssModules(external_classnames_default()(invalid && "is-invalid", valid && "is-valid"), cssModule);
    const labelHtmlFor = htmlFor || attributes.id;
    const {
      files
    } = this.state;
    return CustomFileInput_jsx("div", {
      className: customClass,
      hidden: hidden || false
    }, CustomFileInput_jsx("input", CustomFileInput_extends({
      type: "file"
    }, attributes, {
      ref: innerRef,
      "aria-invalid": invalid,
      className: external_classnames_default()(validationClassNames, mapToCssModules("custom-file-input", cssModule)),
      onChange: this.onChange
    })), CustomFileInput_jsx("label", {
      className: mapToCssModules("custom-file-label", cssModule),
      htmlFor: labelHtmlFor,
      "data-browse": dataBrowse
    }, files || label || "Choose file"), children);
  }

}

/* harmony default export */ var components_CustomFileInput = (CustomFileInput_CustomFileInput);
// CONCATENATED MODULE: ./src/modules/components/CustomInput.jsx
var CustomInput_jsx = external_react_default.a.createElement;

function CustomInput_extends() { CustomInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CustomInput_extends.apply(this, arguments); }

function CustomInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CustomInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CustomInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomInput = props => {
  const {
    className,
    cssModule,
    children,
    innerRef,
    htmlFor,
    invalid,
    valid,
    inline,
    label,
    size,
    type
  } = props,
        attributes = CustomInput_objectWithoutProperties(props, ["className", "cssModule", "children", "innerRef", "htmlFor", "invalid", "valid", "inline", "label", "size", "type"]);

  let sizeClass = false;

  if (size) {
    if (type === "checkbox" || type === "radio" || type === "switch") {
      sizeClass = `custom-control-${size}`;
    } else {
      sizeClass = `custom-${type}-${size}`;
    }
  }

  const customClass = mapToCssModules(external_classnames_default()(`custom-${type}`, sizeClass, className), cssModule);
  const validationClassNames = mapToCssModules(external_classnames_default()(invalid && "is-invalid", valid && "is-valid"), cssModule);
  const labelHtmlFor = htmlFor || attributes.id;

  if (type === "select") {
    const {
      type
    } = attributes,
          rest = CustomInput_objectWithoutProperties(attributes, ["type"]);

    return CustomInput_jsx("select", CustomInput_extends({}, rest, {
      type: type,
      ref: innerRef,
      className: external_classnames_default()(validationClassNames, customClass),
      "aria-invalid": invalid
    }), children);
  }

  if (type === "file") {
    return CustomInput_jsx(components_CustomFileInput, props);
  }

  if (type !== "checkbox" && type !== "radio" && type !== "switch") {
    return CustomInput_jsx("input", CustomInput_extends({}, attributes, {
      type: type,
      ref: innerRef,
      "aria-invalid": invalid,
      className: external_classnames_default()(validationClassNames, customClass)
    }));
  }

  const wrapperClasses = external_classnames_default()(customClass, mapToCssModules(external_classnames_default()("custom-control", {
    "custom-control-inline": inline
  }), cssModule));

  const {
    hidden
  } = attributes,
        rest = CustomInput_objectWithoutProperties(attributes, ["hidden"]);

  return CustomInput_jsx("div", {
    className: wrapperClasses,
    hidden: hidden || false
  }, CustomInput_jsx("input", CustomInput_extends({}, rest, {
    type: type === "switch" ? "checkbox" : type,
    ref: innerRef,
    "aria-invalid": invalid,
    className: external_classnames_default()(validationClassNames, mapToCssModules("custom-control-input", cssModule))
  })), CustomInput_jsx("label", {
    className: mapToCssModules("custom-control-label", cssModule),
    htmlFor: labelHtmlFor
  }, label), children);
};

/* harmony default export */ var components_CustomInput = (CustomInput);
// CONCATENATED MODULE: ./src/modules/components/HeaderContainer.jsx
var HeaderContainer_jsx = external_react_default.a.createElement;

function HeaderContainer_extends() { HeaderContainer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeaderContainer_extends.apply(this, arguments); }

function HeaderContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeaderContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeaderContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HeaderContainer_defaultProps = {
  tag: "div"
};

const HeaderContainer = props => {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag
  } = props,
        attributes = HeaderContainer_objectWithoutProperties(props, ["className", "cssModule", "fluid", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("header-container", fluid ? "container-fluid" : "container", className), cssModule);
  return HeaderContainer_jsx(Tag, HeaderContainer_extends({}, attributes, {
    className: classes
  }));
};

HeaderContainer.defaultProps = HeaderContainer_defaultProps;
/* harmony default export */ var components_HeaderContainer = (HeaderContainer);
// CONCATENATED MODULE: ./src/modules/components/HeaderHolder.jsx
var HeaderHolder_jsx = external_react_default.a.createElement;

function HeaderHolder_extends() { HeaderHolder_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeaderHolder_extends.apply(this, arguments); }

function HeaderHolder_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeaderHolder_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeaderHolder_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HeaderHolder_defaultProps = {
  tag: "div"
};

const HeaderHolder = props => {
  const {
    className,
    cssModule,
    desktop,
    mobile,
    tag: Tag
  } = props,
        attributes = HeaderHolder_objectWithoutProperties(props, ["className", "cssModule", "desktop", "mobile", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("header-holder", {
    "header-holder-mobile": mobile,
    "header-holder-desktop": desktop
  }, className), cssModule);
  return HeaderHolder_jsx(Tag, HeaderHolder_extends({}, attributes, {
    className: classes
  }));
};

HeaderHolder.defaultProps = HeaderHolder_defaultProps;
/* harmony default export */ var components_HeaderHolder = (HeaderHolder);
// CONCATENATED MODULE: ./src/modules/components/HeaderWrap.jsx
var HeaderWrap_jsx = external_react_default.a.createElement;

function HeaderWrap_extends() { HeaderWrap_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HeaderWrap_extends.apply(this, arguments); }

function HeaderWrap_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeaderWrap_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeaderWrap_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HeaderWrap_defaultProps = {
  tag: "div"
};

const HeaderWrap = props => {
  const {
    className,
    cssModule,
    justify,
    block,
    tag: Tag
  } = props,
        attributes = HeaderWrap_objectWithoutProperties(props, ["className", "cssModule", "justify", "block", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("header-wrap", {
    "header-wrap-block": block,
    [`justify-content-${justify}`]: justify
  }, className), cssModule);
  return HeaderWrap_jsx(Tag, HeaderWrap_extends({}, attributes, {
    className: classes
  }));
};

HeaderWrap.defaultProps = HeaderWrap_defaultProps;
/* harmony default export */ var components_HeaderWrap = (HeaderWrap);
// CONCATENATED MODULE: ./src/modules/components/HeaderTitle.jsx

const HeaderTitle = createBasicComponent("h4", "header-title", "HeaderTitle");
/* harmony default export */ var components_HeaderTitle = (HeaderTitle);
// CONCATENATED MODULE: ./src/modules/components/HeaderBrand.jsx

const HeaderBrand = createBasicComponent("h3", "header-brand", "HeaderBrand");
/* harmony default export */ var components_HeaderBrand = (HeaderBrand);
// CONCATENATED MODULE: ./src/modules/components/HeaderDivider.jsx

const HeaderDivider = createBasicComponent("i", "header-divider", "HeaderDivider");
/* harmony default export */ var components_HeaderDivider = (HeaderDivider);
// CONCATENATED MODULE: ./src/modules/components/Header.jsx







const Header = createBasicComponent("div", "header", "Header");
Header.Container = components_HeaderContainer;
Header.Holder = components_HeaderHolder;
Header.Wrap = components_HeaderWrap;
Header.Title = components_HeaderTitle;
Header.Brand = components_HeaderBrand;
Header.Divider = components_HeaderDivider;
/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./src/modules/components/Layout.jsx
var Layout_jsx = external_react_default.a.createElement;

function Layout_extends() { Layout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Layout_extends.apply(this, arguments); }

function Layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Layout_defaultProps = {
  tag: "div"
};

const Layout = props => {
  const {
    className,
    cssModule,
    type,
    tag: Tag
  } = props,
        attributes = Layout_objectWithoutProperties(props, ["className", "cssModule", "type", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(type, className), cssModule);
  return Layout_jsx(Tag, Layout_extends({}, attributes, {
    className: classes
  }));
};

Layout.defaultProps = Layout_defaultProps;
/* harmony default export */ var components_Layout = (Layout);
// CONCATENATED MODULE: ./src/modules/components/Footer.jsx

const Footer = createBasicComponent("div", "footer", "Footer");
/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./src/modules/components/PortletHeader.jsx
var PortletHeader_jsx = external_react_default.a.createElement;

function PortletHeader_extends() { PortletHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PortletHeader_extends.apply(this, arguments); }

function PortletHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PortletHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PortletHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PortletHeader_defaultProps = {
  tag: "div"
};

const PortletHeader = props => {
  const {
    className,
    cssModule,
    innerRef,
    bordered,
    tag: Tag
  } = props,
        attributes = PortletHeader_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "bordered", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("portlet-header", {
    "portlet-header-bordered": bordered
  }, className), cssModule);
  return PortletHeader_jsx(Tag, PortletHeader_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

PortletHeader.defaultProps = PortletHeader_defaultProps;
/* harmony default export */ var components_PortletHeader = (PortletHeader);
// CONCATENATED MODULE: ./src/modules/components/PortletFooter.jsx
var PortletFooter_jsx = external_react_default.a.createElement;

function PortletFooter_extends() { PortletFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PortletFooter_extends.apply(this, arguments); }

function PortletFooter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PortletFooter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PortletFooter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PortletFooter_defaultProps = {
  tag: "div"
};

const PortletFooter = props => {
  const {
    className,
    cssModule,
    bordered,
    align,
    tag: Tag
  } = props,
        attributes = PortletFooter_objectWithoutProperties(props, ["className", "cssModule", "bordered", "align", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("portlet-footer", {
    "portlet-footer-bordered": bordered,
    [`text-${align}`]: align
  }, className), cssModule);
  return PortletFooter_jsx(Tag, PortletFooter_extends({}, attributes, {
    className: classes
  }));
};

PortletFooter.defaultProps = PortletFooter_defaultProps;
/* harmony default export */ var components_PortletFooter = (PortletFooter);
// CONCATENATED MODULE: ./src/modules/components/PortletTitle.jsx

const PortletTitle = createBasicComponent("h3", "portlet-title", "PortletTitle");
/* harmony default export */ var components_PortletTitle = (PortletTitle);
// CONCATENATED MODULE: ./src/modules/components/PortletIcon.jsx

const PortletIcon = createBasicComponent("div", "portlet-icon", "PortletIcon");
/* harmony default export */ var components_PortletIcon = (PortletIcon);
// CONCATENATED MODULE: ./src/modules/components/PortletAddon.jsx

const PortletAddon = createBasicComponent("div", "portlet-addon", "PortletAddon");
/* harmony default export */ var components_PortletAddon = (PortletAddon);
// CONCATENATED MODULE: ./src/modules/components/PortletBody.jsx
var PortletBody_jsx = external_react_default.a.createElement;

function PortletBody_extends() { PortletBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PortletBody_extends.apply(this, arguments); }

function PortletBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PortletBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PortletBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PortletBody_defaultProps = {
  tag: "div"
};

const PortletBody = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = PortletBody_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("portlet-body", className), cssModule);
  return PortletBody_jsx(Tag, PortletBody_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

PortletBody.defaultProps = PortletBody_defaultProps;
/* harmony default export */ var components_PortletBody = (PortletBody);
// CONCATENATED MODULE: ./src/modules/components/Portlet.jsx
var Portlet_jsx = external_react_default.a.createElement;

function Portlet_extends() { Portlet_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Portlet_extends.apply(this, arguments); }

function Portlet_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Portlet_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Portlet_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Portlet_defaultProps = {
  tag: "div"
};

const Portlet = props => {
  const {
    className,
    cssModule,
    innerRef,
    bordered,
    variant,
    scroll,
    tag: Tag
  } = props,
        attributes = Portlet_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "bordered", "variant", "scroll", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("portlet", {
    [`portlet-${variant}`]: variant,
    "portlet-bordered": bordered,
    "portlet-scroll": scroll
  }, className), cssModule);
  return Portlet_jsx(Tag, Portlet_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

Portlet.defaultProps = Portlet_defaultProps;
Portlet.Body = components_PortletBody;
Portlet.Header = components_PortletHeader;
Portlet.Footer = components_PortletFooter;
Portlet.Icon = components_PortletIcon;
Portlet.Addon = components_PortletAddon;
Portlet.Title = components_PortletTitle;
/* harmony default export */ var components_Portlet = (Portlet);
// CONCATENATED MODULE: ./src/modules/components/PopperContent.jsx
var PopperContent_jsx = external_react_default.a.createElement;

function PopperContent_extends() { PopperContent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PopperContent_extends.apply(this, arguments); }

function PopperContent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PopperContent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PopperContent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PopperContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PopperContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PopperContent_ownKeys(Object(source), true).forEach(function (key) { PopperContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PopperContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PopperContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function noop() {}

const PopperContent_defaultProps = {
  boundariesElement: "scrollParent",
  placement: "auto",
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: "flip",
  flip: true,
  container: "body",
  modifiers: {},
  onClosed: noop,
  fade: true,
  transition: PopperContent_objectSpread({}, components_Fade.defaultProps)
};

class PopperContent_PopperContent extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.setTargetNode = this.setTargetNode.bind(this);
    this.getTargetNode = this.getTargetNode.bind(this);
    this.getRef = this.getRef.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.state = {
      isOpen: props.isOpen
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  }

  componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  }

  setTargetNode(node) {
    this.targetNode = typeof node === "string" ? getTarget(node) : node;
  }

  getTargetNode() {
    return this.targetNode;
  }

  getContainerNode() {
    return getTarget(this.props.container);
  }

  getRef(ref) {
    this._element = ref;
  }

  onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  }

  renderChildren() {
    const _this$props = this.props,
          {
      cssModule,
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArrow,
      popperClassName: _popperClassName,
      tag,
      container,
      modifiers,
      boundariesElement,
      onClosed,
      fade,
      transition,
      placement
    } = _this$props,
          attrs = PopperContent_objectWithoutProperties(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition", "placement"]);

    const arrowClassName = mapToCssModules(external_classnames_default()("arrow", _arrowClassName), cssModule);
    const popperClassName = mapToCssModules(external_classnames_default()(_popperClassName, placementPrefix ? `${placementPrefix}-auto` : ""), this.props.cssModule);

    const extendedModifiers = PopperContent_objectSpread({
      offset: {
        offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement
      }
    }, modifiers);

    const popperTransition = PopperContent_objectSpread(PopperContent_objectSpread(PopperContent_objectSpread({}, components_Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : "",
      timeout: fade ? transition.timeout : 0
    });

    return PopperContent_jsx(components_Fade, PopperContent_extends({}, popperTransition, attrs, {
      in: isOpen,
      onExited: this.onClosed,
      tag: tag
    }), PopperContent_jsx(external_react_popper_["Popper"], {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement
    }, ({
      ref,
      style,
      placement,
      outOfBoundaries,
      arrowProps,
      scheduleUpdate
    }) => PopperContent_jsx("div", {
      ref: ref,
      style: style,
      className: popperClassName,
      "x-placement": placement,
      "x-out-of-boundaries": outOfBoundaries ? "true" : undefined
    }, typeof children === "function" ? children({
      scheduleUpdate
    }) : children, !hideArrow && PopperContent_jsx("span", {
      ref: arrowProps.ref,
      className: arrowClassName,
      style: arrowProps.style
    }))));
  }

  render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === "inline" ? this.renderChildren() : /*#__PURE__*/external_react_dom_default.a.createPortal(PopperContent_jsx("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  }

}

PopperContent_PopperContent.defaultProps = PopperContent_defaultProps;
/* harmony default export */ var components_PopperContent = (PopperContent_PopperContent);
// CONCATENATED MODULE: ./src/modules/components/TooltipPopoverWrapper.jsx
var TooltipPopoverWrapper_jsx = external_react_default.a.createElement;

function TooltipPopoverWrapper_extends() { TooltipPopoverWrapper_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TooltipPopoverWrapper_extends.apply(this, arguments); }





const TooltipPopoverWrapper_propTypes = {
  children: external_prop_types_default.a.oneOfType([external_prop_types_default.a.node, external_prop_types_default.a.func]),
  placement: external_prop_types_default.a.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  hideArrow: external_prop_types_default.a.bool,
  boundariesElement: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, DOMElement]),
  className: external_prop_types_default.a.string,
  innerClassName: external_prop_types_default.a.string,
  arrowClassName: external_prop_types_default.a.string,
  popperClassName: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  toggle: external_prop_types_default.a.func,
  autohide: external_prop_types_default.a.bool,
  placementPrefix: external_prop_types_default.a.string,
  delay: external_prop_types_default.a.oneOfType([external_prop_types_default.a.shape({
    show: external_prop_types_default.a.number,
    hide: external_prop_types_default.a.number
  }), external_prop_types_default.a.number]),
  modifiers: external_prop_types_default.a.object,
  offset: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),
  innerRef: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string, external_prop_types_default.a.object]),
  trigger: external_prop_types_default.a.string,
  fade: external_prop_types_default.a.bool,
  flip: external_prop_types_default.a.bool
};
const DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
const TooltipPopoverWrapper_defaultProps = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function () {},
  trigger: "click",
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots = []) {
  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(subTreeRoot => isInDOMSubtree(element, subTreeRoot))[0];
}

class TooltipPopoverWrapper_TooltipPopoverWrapper extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this._targets = [];
    this.currentTargetElement = null;
    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.showWithDelay = this.showWithDelay.bind(this);
    this.hideWithDelay = this.hideWithDelay.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onEscKeyDown = this.onEscKeyDown.bind(this);
    this.getRef = this.getRef.bind(this);
    this.state = {
      isOpen: props.isOpen
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  }

  onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  }

  onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
    }
  }

  onEscKeyDown(e) {
    if (e.key === "Escape") {
      this.hide(e);
    }
  }

  getRef(ref) {
    const {
      innerRef
    } = this.props;

    if (innerRef) {
      if (typeof innerRef === "function") {
        innerRef(ref);
      } else if (typeof innerRef === "object") {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  }

  getDelay(key) {
    const {
      delay
    } = this.props;

    if (typeof delay === "object") {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  }

  show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || e.target : null;

      if (e && e.composedPath && typeof e.composedPath === "function") {
        const path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  }

  showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay("show"));
  }

  hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  }

  hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    const triggers = this.props.trigger.split(" ");

    if (triggers.indexOf("legacy") > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf("click") > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  }

  addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(target => {
      target.addEventListener(type, handler, isBubble);
    });
  }

  removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(target => {
      target.removeEventListener(type, handler, isBubble);
    });
  }

  addTargetEvents() {
    if (this.props.trigger) {
      let triggers = this.props.trigger.split(" ");

      if (triggers.indexOf("manual") === -1) {
        if (triggers.indexOf("click") > -1 || triggers.indexOf("legacy") > -1) {
          document.addEventListener("click", this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf("hover") > -1) {
            this.addEventOnTargets("mouseover", this.showWithDelay, true);
            this.addEventOnTargets("mouseout", this.hideWithDelay, true);
          }

          if (triggers.indexOf("focus") > -1) {
            this.addEventOnTargets("focusin", this.show, true);
            this.addEventOnTargets("focusout", this.hide, true);
          }

          this.addEventOnTargets("keydown", this.onEscKeyDown, true);
        }
      }
    }
  }

  removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets("mouseover", this.showWithDelay, true);
      this.removeEventOnTargets("mouseout", this.hideWithDelay, true);
      this.removeEventOnTargets("keydown", this.onEscKeyDown, true);
      this.removeEventOnTargets("focusin", this.show, true);
      this.removeEventOnTargets("focusout", this.hide, true);
    }

    document.removeEventListener("click", this.handleDocumentClick, true);
  }

  updateTarget() {
    const newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    this.updateTarget();
    const {
      className,
      cssModule,
      innerClassName,
      isOpen,
      hideArrow,
      boundariesElement,
      placement,
      placementPrefix,
      arrowClassName,
      popperClassName,
      container,
      modifiers,
      offset,
      fade,
      flip,
      children
    } = this.props;
    const attributes = omit(this.props, Object.keys(TooltipPopoverWrapper_propTypes));
    const popperClasses = mapToCssModules(popperClassName, cssModule);
    const classes = mapToCssModules(innerClassName, cssModule);
    return TooltipPopoverWrapper_jsx(components_PopperContent, {
      className: className,
      target: this.currentTargetElement || this._targets[0],
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, ({
      scheduleUpdate
    }) => TooltipPopoverWrapper_jsx("div", TooltipPopoverWrapper_extends({}, attributes, {
      ref: this.getRef,
      className: classes,
      role: "tooltip",
      onMouseOver: this.onMouseOverTooltipContent,
      onMouseLeave: this.onMouseLeaveTooltipContent,
      onKeyDown: this.onEscKeyDown
    }), typeof children === "function" ? children({
      scheduleUpdate
    }) : children));
  }

}

TooltipPopoverWrapper_TooltipPopoverWrapper.defaultProps = TooltipPopoverWrapper_defaultProps;
/* harmony default export */ var components_TooltipPopoverWrapper = (TooltipPopoverWrapper_TooltipPopoverWrapper);
// CONCATENATED MODULE: ./src/modules/components/Popover.jsx
var Popover_jsx = external_react_default.a.createElement;

function Popover_extends() { Popover_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Popover_extends.apply(this, arguments); }





const Popover_omitKeys = ["defaultOpen"];
const Popover_defaultProps = {
  placementPrefix: "bs-popover",
  placement: "right",
  trigger: "click"
};

function Popover(props) {
  const HeaderTag = "h3";
  const BodyTag = "div";
  const popperClasses = external_classnames_default()("popover", "show", props.popperClassName);
  const containerClasses = external_classnames_default()("popover-inner", props.innerClassName);
  const headerClasses = external_classnames_default()("popover-header");
  const bodyClasses = external_classnames_default()("popover-body");
  return Popover_jsx(components_TooltipPopoverWrapper, Popover_extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: containerClasses
  }), props.title ? Popover_jsx(HeaderTag, {
    className: headerClasses
  }, props.title) : null, Popover_jsx(BodyTag, {
    className: bodyClasses
  }, props.children));
}

class Popover_PopoverUncontrolled extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return Popover_jsx(Popover, Popover_extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, Popover_omitKeys)));
  }

}

Popover.defaultProps = Popover_defaultProps;
Popover.Uncontrolled = Popover_PopoverUncontrolled;
/* harmony default export */ var components_Popover = (Popover);
// CONCATENATED MODULE: ./src/modules/components/Progress.jsx
var Progress_jsx = external_react_default.a.createElement;

function Progress_extends() { Progress_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Progress_extends.apply(this, arguments); }

function Progress_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Progress_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Progress_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Progress_defaultProps = {
  value: 0,
  style: {},
  tag: "div",
  min: 0,
  max: 100
};

const Progress = props => {
  const {
    barAriaValueText,
    barAriaLabelledBy,
    barClassName,
    className,
    cssModule,
    children,
    animated,
    striped,
    variant,
    multi,
    value,
    style,
    size,
    min,
    max,
    bar,
    tag: Tag
  } = props,
        attributes = Progress_objectWithoutProperties(props, ["barAriaValueText", "barAriaLabelledBy", "barClassName", "className", "cssModule", "children", "animated", "striped", "variant", "multi", "value", "style", "size", "min", "max", "bar", "tag"]);

  const percent = toNumber(value) / toNumber(max) * 100;
  const progressClasses = mapToCssModules(external_classnames_default()("progress", size ? `progress-${size}` : false, className), cssModule);
  const progressBarClasses = mapToCssModules(external_classnames_default()("progress-bar", bar ? className || barClassName : barClassName, animated ? "progress-bar-animated" : false, variant ? `bg-${variant}` : false, striped || animated ? "progress-bar-striped" : false), cssModule);
  const ProgressBar = multi ? children : Progress_jsx("div", {
    style: {
      width: `${percent}%`
    },
    className: progressBarClasses,
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuetext": barAriaValueText,
    "aria-labelledby": barAriaLabelledBy,
    children: children
  });

  if (bar) {
    return ProgressBar;
  }

  return Progress_jsx(Tag, Progress_extends({
    style: style
  }, attributes, {
    className: progressClasses,
    children: ProgressBar
  }));
};

Progress.defaultProps = Progress_defaultProps;
/* harmony default export */ var components_Progress = (Progress);
// CONCATENATED MODULE: ./src/modules/components/Marker.jsx
var Marker_jsx = external_react_default.a.createElement;

function Marker_extends() { Marker_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Marker_extends.apply(this, arguments); }

function Marker_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Marker_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Marker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Marker_defaultProps = {
  variant: "secondary",
  type: "dot",
  tag: "i"
};

const Marker = props => {
  let {
    className,
    cssModule,
    variant,
    type,
    size,
    tag: Tag
  } = props,
      attributes = Marker_objectWithoutProperties(props, ["className", "cssModule", "variant", "type", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("marker", `marker-${type}`, `text-${variant}`, {
    [`marker-${size}`]: size
  }, className), cssModule);
  return Marker_jsx(Tag, Marker_extends({}, attributes, {
    className: classes
  }));
};

Marker.defaultProps = Marker_defaultProps;
/* harmony default export */ var components_Marker = (Marker);
// CONCATENATED MODULE: ./src/modules/components/ModalBody.jsx

const ModalBody = createBasicComponent("div", "modal-body", "ModalBody");
/* harmony default export */ var components_ModalBody = (ModalBody);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./src/modules/components/ModalHeader.jsx
var ModalHeader_jsx = external_react_default.a.createElement;

function ModalHeader_extends() { ModalHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ModalHeader_extends.apply(this, arguments); }

function ModalHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ModalHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ModalHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ModalHeader_defaultProps = {
  tag: "h5",
  wrapTag: "div",
  closeAriaLabel: "Close"
};

const ModalHeader = props => {
  let closeButton;

  const {
    closeAriaLabel,
    cssModule,
    className,
    children,
    bordered,
    wrapTag: WrapTag,
    toggle,
    close,
    tag: Tag
  } = props,
        attributes = ModalHeader_objectWithoutProperties(props, ["closeAriaLabel", "cssModule", "className", "children", "bordered", "wrapTag", "toggle", "close", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("modal-header", {
    "modal-header-bordered": bordered
  }, className), cssModule);
  const closeButtonClasses = mapToCssModules(external_classnames_default()("btn", "btn-icon", "btn-label-danger"), cssModule);
  const titleClasses = mapToCssModules(external_classnames_default()("modal-title"), cssModule);

  if (!close && toggle) {
    closeButton = ModalHeader_jsx("button", {
      type: "button",
      onClick: toggle,
      className: closeButtonClasses,
      "aria-label": closeAriaLabel
    }, ModalHeader_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faTimes"]
    }));
  }

  return ModalHeader_jsx(WrapTag, ModalHeader_extends({}, attributes, {
    className: classes
  }), ModalHeader_jsx(Tag, {
    className: titleClasses
  }, children), close || closeButton);
};

ModalHeader.defaultProps = ModalHeader_defaultProps;
/* harmony default export */ var components_ModalHeader = (ModalHeader);
// CONCATENATED MODULE: ./src/modules/components/ModalFooter.jsx
var ModalFooter_jsx = external_react_default.a.createElement;

function ModalFooter_extends() { ModalFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ModalFooter_extends.apply(this, arguments); }

function ModalFooter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ModalFooter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ModalFooter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ModalFooter_defaultProps = {
  tag: "div"
};

const ModalFooter = props => {
  const {
    className,
    cssModule,
    bordered,
    tag: Tag
  } = props,
        attributes = ModalFooter_objectWithoutProperties(props, ["className", "cssModule", "bordered", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(className, "modal-footer", {
    "modal-footer-bordered": bordered
  }), cssModule);
  return ModalFooter_jsx(Tag, ModalFooter_extends({}, attributes, {
    className: classes
  }));
};

ModalFooter.defaultProps = ModalFooter_defaultProps;
/* harmony default export */ var components_ModalFooter = (ModalFooter);
// CONCATENATED MODULE: ./src/modules/components/Modal.jsx
var Modal_jsx = external_react_default.a.createElement;

function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }











function Modal_noop() {}

const FadePropTypes = external_prop_types_default.a.shape(components_Fade.propTypes);
const Modal_propTypes = {
  isOpen: external_prop_types_default.a.bool,
  autoFocus: external_prop_types_default.a.bool,
  centered: external_prop_types_default.a.bool,
  scrollable: external_prop_types_default.a.bool,
  size: external_prop_types_default.a.string,
  toggle: external_prop_types_default.a.func,
  keyboard: external_prop_types_default.a.bool,
  role: external_prop_types_default.a.string,
  labelledBy: external_prop_types_default.a.string,
  backdrop: external_prop_types_default.a.oneOfType([external_prop_types_default.a.bool, external_prop_types_default.a.oneOf(["static"])]),
  onEnter: external_prop_types_default.a.func,
  onExit: external_prop_types_default.a.func,
  onOpened: external_prop_types_default.a.func,
  onClosed: external_prop_types_default.a.func,
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  wrapClassName: external_prop_types_default.a.string,
  modalClassName: external_prop_types_default.a.string,
  backdropClassName: external_prop_types_default.a.string,
  contentClassName: external_prop_types_default.a.string,
  external: external_prop_types_default.a.node,
  fade: external_prop_types_default.a.bool,
  cssModule: external_prop_types_default.a.object,
  zIndex: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.string, external_prop_types_default.a.func]),
  unmountOnClose: external_prop_types_default.a.bool,
  returnFocusAfterClose: external_prop_types_default.a.bool,
  container: targetPropType
};
const propsToOmit = Object.keys(Modal_propTypes);
const Modal_defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  zIndex: 1220,
  fade: true,
  onOpened: Modal_noop,
  onClosed: Modal_noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: "body"
};

class Modal_Modal extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this._element = null;
    this._originalBodyPadding = null;
    this.getFocusableChildren = this.getFocusableChildren.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleBackdropMouseDown = this.handleBackdropMouseDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleStaticBackdropAnimation = this.handleStaticBackdropAnimation.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.manageFocusAfterClose = this.manageFocusAfterClose.bind(this);
    this.clearBackdropAnimationTimeout = this.clearBackdropAnimationTimeout.bind(this);
    this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
  }

  componentDidMount() {
    const {
      isOpen,
      autoFocus,
      onEnter
    } = this.props;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    }

    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  }

  componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    this._isMounted = false;
  }

  onOpened(node, isAppearing) {
    this.props.onOpened()(this.props.modalTransition.onEntered || Modal_noop)(node, isAppearing);
  }

  onClosed(node) {
    const {
      unmountOnClose
    } = this.props; // so all methods get called before it is unmounted

    this.props.onClosed()(this.props.modalTransition.onExited || Modal_noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  }

  setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === "function") {
      this._dialog.parentNode.focus();
    }
  }

  getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(", "));
  }

  getFocusedChild() {
    let currentFocus;
    const focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls


  handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      const backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === "static") {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }

  handleTab(e) {
    if (e.which !== 9) return;
    const focusableChildren = this.getFocusableChildren();
    const totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    const currentFocus = this.getFocusedChild();
    let focusedIndex = 0;

    for (let i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  }

  handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  }

  handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === "static") {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  }

  handleStaticBackdropAnimation() {
    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(() => {
      this.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  }

  init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement("div");

      this._element.setAttribute("tabindex", "-1");

      this._element.style.position = "relative";
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal_Modal.openCount === 0) {
      document.body.className = external_classnames_default()(document.body.className, mapToCssModules("modal-open", this.props.cssModule));
    }

    Modal_Modal.openCount += 1;
  }

  destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  }

  manageFocusAfterClose() {
    if (this._triggeringElement) {
      const {
        returnFocusAfterClose
      } = this.props;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  }

  close() {
    if (Modal_Modal.openCount <= 1) {
      const modalOpenClassName = mapToCssModules("modal-open", this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, " ").trim();
    }

    this.manageFocusAfterClose();
    Modal_Modal.openCount = Math.max(0, Modal_Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);
    const dialogBaseClass = "modal-dialog";
    return Modal_jsx("div", Modal_extends({}, attributes, {
      className: mapToCssModules(external_classnames_default()(dialogBaseClass, this.props.className, {
        [`modal-${this.props.size}`]: this.props.size,
        [`${dialogBaseClass}-centered`]: this.props.centered,
        [`${dialogBaseClass}-scrollable`]: this.props.scrollable
      }), this.props.cssModule),
      role: "document",
      ref: c => {
        this._dialog = c;
      }
    }), Modal_jsx("div", {
      className: mapToCssModules(external_classnames_default()("modal-content", this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  }

  render() {
    const {
      unmountOnClose
    } = this.props;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      const isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? "none" : "block";
      const {
        wrapClassName,
        modalClassName,
        backdropClassName,
        cssModule,
        isOpen,
        backdrop,
        role,
        labelledBy,
        external,
        innerRef
      } = this.props;
      const modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: "block"
        },
        "aria-labelledby": labelledBy,
        role,
        tabIndex: "-1"
      };
      const hasTransition = this.props.fade;

      const modalTransition = Modal_objectSpread(Modal_objectSpread(Modal_objectSpread({}, components_Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : "",
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      const backdropTransition = Modal_objectSpread(Modal_objectSpread(Modal_objectSpread({}, components_Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : "",
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      const Backdrop = backdrop && (hasTransition ? Modal_jsx(components_Fade, Modal_extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(external_classnames_default()("modal-backdrop", backdropClassName), cssModule)
      })) : Modal_jsx("div", {
        className: mapToCssModules(external_classnames_default()("modal-backdrop", "show", backdropClassName), cssModule)
      }));
      return Modal_jsx(components_Portal, {
        node: this._element
      }, Modal_jsx("div", {
        className: mapToCssModules(wrapClassName)
      }, Modal_jsx(components_Fade, Modal_extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(external_classnames_default()("modal", modalClassName, this.state.showStaticBackdropAnimation && "modal-static"), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  }

  clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  }

}

Modal_Modal.defaultProps = Modal_defaultProps;
Modal_Modal.openCount = 0;
Modal_Modal.Body = components_ModalBody;
Modal_Modal.Header = components_ModalHeader;
Modal_Modal.Footer = components_ModalFooter;
/* harmony default export */ var components_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/modules/components/MenuItem.jsx
var MenuItem_jsx = external_react_default.a.createElement;

function MenuItem_extends() { MenuItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuItem_extends.apply(this, arguments); }

function MenuItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MenuItem_defaultProps = {
  tag: "div"
};

const MenuItem = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = MenuItem_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("menu-item", className), cssModule);
  return MenuItem_jsx(Tag, MenuItem_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

MenuItem.defaultProps = MenuItem_defaultProps;
/* harmony default export */ var components_MenuItem = (MenuItem);
// CONCATENATED MODULE: ./src/modules/components/MenuLink.jsx
var MenuLink_jsx = external_react_default.a.createElement;

function MenuLink_extends() { MenuLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuLink_extends.apply(this, arguments); }

function MenuLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MenuLink_defaultProps = {
  tag: "a"
};

const MenuLink = props => {
  let {
    className,
    cssModule,
    innerRef,
    children,
    bullet,
    toggle,
    active,
    addon: Addon,
    caret,
    icon,
    tag: Tag
  } = props,
      attributes = MenuLink_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "children", "bullet", "toggle", "active", "addon", "caret", "icon", "tag"]);

  if (toggle) {
    Tag = "div";
  }

  const classes = mapToCssModules(external_classnames_default()("menu-item-link", {
    "menu-item-toggle": toggle,
    active
  }, className), cssModule);
  return MenuLink_jsx(Tag, MenuLink_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }), icon ? MenuLink_jsx("div", {
    className: "menu-item-icon"
  }, icon) : bullet ? MenuLink_jsx("i", {
    className: "menu-item-bullet"
  }) : null, MenuLink_jsx("span", {
    className: "menu-item-text"
  }, children), Addon ? MenuLink_jsx("div", {
    className: "menu-item-addon"
  }, MenuLink_jsx(Addon, null)) : caret ? MenuLink_jsx("div", {
    className: "menu-item-addon"
  }, MenuLink_jsx(components_Caret, {
    className: "menu-item-caret"
  })) : null);
};

MenuLink.defaultProps = MenuLink_defaultProps;
/* harmony default export */ var components_MenuLink = (MenuLink);
// CONCATENATED MODULE: ./src/modules/components/MenuSection.jsx
var MenuSection_jsx = external_react_default.a.createElement;

function MenuSection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuSection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuSection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const MenuSection_defaultProps = {
  tag: "div"
};

const MenuSection = props => {
  const {
    className,
    cssModule,
    children,
    innerRef,
    tag: Tag
  } = props,
        attributes = MenuSection_objectWithoutProperties(props, ["className", "cssModule", "children", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("menu-section", className), cssModule);
  const iconClasses = mapToCssModules(external_classnames_default()("menu-section-icon"), cssModule);
  const textClasses = mapToCssModules(external_classnames_default()("menu-section-text"), cssModule);
  return MenuSection_jsx(Tag, {
    className: classes
  }, MenuSection_jsx("div", {
    className: iconClasses
  }, MenuSection_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faEllipsisH"]
  })), MenuSection_jsx("h2", {
    className: textClasses
  }, children));
};

MenuSection.defaultProps = MenuSection_defaultProps;
/* harmony default export */ var components_MenuSection = (MenuSection);
// CONCATENATED MODULE: ./src/modules/components/MenuSubmenu.jsx
var MenuSubmenu_jsx = external_react_default.a.createElement;

function MenuSubmenu_extends() { MenuSubmenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuSubmenu_extends.apply(this, arguments); }

function MenuSubmenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MenuSubmenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MenuSubmenu_ownKeys(Object(source), true).forEach(function (key) { MenuSubmenu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MenuSubmenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MenuSubmenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MenuSubmenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuSubmenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuSubmenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MenuSubmenu_defaultProps = {
  height: "auto",
  active: true,
  tag: "div"
};

class MenuSubmenu_MenuSubmenu extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _this$props = this.props,
          {
      className,
      cssModule,
      innerRef,
      height,
      active,
      style,
      tag: Tag
    } = _this$props,
          attributes = MenuSubmenu_objectWithoutProperties(_this$props, ["className", "cssModule", "innerRef", "height", "active", "style", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("menu-submenu", className), cssModule);
    return MenuSubmenu_jsx(Tag, MenuSubmenu_extends({}, attributes, {
      ref: innerRef,
      className: classes,
      style: MenuSubmenu_objectSpread({
        height: active ? typeof height === "string" ? "auto" : height + "px" : "0px"
      }, style)
    }));
  }

}

MenuSubmenu_MenuSubmenu.defaultProps = MenuSubmenu_defaultProps;
/* harmony default export */ var components_MenuSubmenu = (MenuSubmenu_MenuSubmenu);
// CONCATENATED MODULE: ./src/modules/components/Menu.jsx





const Menu = createBasicComponent("div", "menu", "Menu");
Menu.Item = components_MenuItem;
Menu.Link = components_MenuLink;
Menu.Section = components_MenuSection;
Menu.Submenu = components_MenuSubmenu;
/* harmony default export */ var components_Menu = (Menu);
// CONCATENATED MODULE: ./src/modules/components/Tooltip.jsx
var Tooltip_jsx = external_react_default.a.createElement;

function Tooltip_extends() { Tooltip_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tooltip_extends.apply(this, arguments); }





const Tooltip_omitKeys = ["defaultOpen"];
const Tooltip_defaultProps = {
  placement: "top",
  autohide: true,
  placementPrefix: "bs-tooltip",
  trigger: "hover focus"
};

function Tooltip(props) {
  const {
    popperClassName,
    innerClassName
  } = props;
  const popperClasses = external_classnames_default()("tooltip", "show", popperClassName);
  const classes = external_classnames_default()("tooltip-inner", innerClassName);
  return Tooltip_jsx(components_TooltipPopoverWrapper, Tooltip_extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}

class Tooltip_TooltipUncontrolled extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen || false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return Tooltip_jsx(Tooltip, Tooltip_extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, Tooltip_omitKeys)));
  }

}

Tooltip.defaultProps = Tooltip_defaultProps;
Tooltip.Uncontrolled = Tooltip_TooltipUncontrolled;
/* harmony default export */ var components_Tooltip = (Tooltip);
// CONCATENATED MODULE: ./src/modules/components/Table.jsx
var Table_jsx = external_react_default.a.createElement;

function Table_extends() { Table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }

function Table_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Table_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Table_defaultProps = {
  responsiveTag: "div",
  tag: "table"
};

const Table = props => {
  const {
    responsiveTag: ResponsiveTag,
    responsive,
    className,
    cssModule,
    borderless,
    bordered,
    innerRef,
    variant,
    striped,
    hover,
    small,
    dark,
    tag: Tag
  } = props,
        attributes = Table_objectWithoutProperties(props, ["responsiveTag", "responsive", "className", "cssModule", "borderless", "bordered", "innerRef", "variant", "striped", "hover", "small", "dark", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("table", {
    [`table-${variant}`]: variant,
    "table-borderless": borderless,
    "table-bordered": bordered,
    "table-striped": striped,
    "table-hover": hover,
    "table-dark": dark,
    "table-sm": small
  }, className), cssModule);

  const table = Table_jsx(Tag, Table_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    const responsiveClassName = mapToCssModules(responsive === true ? "table-responsive" : `table-responsive-${responsive}`, cssModule);
    return Table_jsx(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.defaultProps = Table_defaultProps;
/* harmony default export */ var components_Table = (Table);
// CONCATENATED MODULE: ./src/modules/components/TimelineItem.jsx
var TimelineItem_jsx = external_react_default.a.createElement;

function TimelineItem_extends() { TimelineItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TimelineItem_extends.apply(this, arguments); }

function TimelineItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TimelineItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TimelineItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const TimelineItem_defaultProps = {
  contentTag: "div",
  timeTag: "div",
  pinTag: "div",
  tag: "div"
};

const TimelineItem = props => {
  let {
    className,
    cssModule,
    children,
    contentTag: ContentTag,
    timeTag: TimeTag,
    pinTag: PinTag,
    time,
    pin,
    tag: Tag
  } = props,
      attributes = TimelineItem_objectWithoutProperties(props, ["className", "cssModule", "children", "contentTag", "timeTag", "pinTag", "time", "pin", "tag"]);

  const containerClasses = mapToCssModules(external_classnames_default()("timeline-item", className), cssModule);
  const contentClasses = mapToCssModules(external_classnames_default()("timeline-content", className), cssModule);
  const timeClasses = mapToCssModules(external_classnames_default()("timeline-time", className), cssModule);
  const pinClasses = mapToCssModules(external_classnames_default()("timeline-pin", className), cssModule);
  return TimelineItem_jsx(Tag, TimelineItem_extends({}, attributes, {
    className: containerClasses
  }), time ? TimelineItem_jsx(TimeTag, {
    className: timeClasses
  }, time) : null, pin ? TimelineItem_jsx(PinTag, {
    className: pinClasses
  }, pin) : null, TimelineItem_jsx(ContentTag, {
    className: contentClasses
  }, children));
};

TimelineItem.defaultProps = TimelineItem_defaultProps;
/* harmony default export */ var components_TimelineItem = (TimelineItem);
// CONCATENATED MODULE: ./src/modules/components/Timeline.jsx
var Timeline_jsx = external_react_default.a.createElement;

function Timeline_extends() { Timeline_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Timeline_extends.apply(this, arguments); }

function Timeline_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Timeline_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Timeline_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Timeline_defaultProps = {
  tag: "div"
};

const Timeline = props => {
  const {
    className,
    cssModule,
    zigzag,
    timed,
    tag: Tag
  } = props,
        attributes = Timeline_objectWithoutProperties(props, ["className", "cssModule", "zigzag", "timed", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("timeline", {
    "timeline-zigzag": zigzag,
    "timeline-timed": timed
  }, className), cssModule);
  return Timeline_jsx(Tag, Timeline_extends({}, attributes, {
    className: classes
  }));
};

Timeline.defaultProps = Timeline_defaultProps;
Timeline.Item = components_TimelineItem;
/* harmony default export */ var components_Timeline = (Timeline);
// CONCATENATED MODULE: ./src/modules/components/RichListAddon.jsx
var RichListAddon_jsx = external_react_default.a.createElement;

function RichListAddon_extends() { RichListAddon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RichListAddon_extends.apply(this, arguments); }

function RichListAddon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = RichListAddon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function RichListAddon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const RichListAddon_defaultProps = {
  addonType: "prepend",
  tag: "div"
};

const RichListAddon = props => {
  const {
    className,
    cssModule,
    addonType,
    tag: Tag
  } = props,
        attributes = RichListAddon_objectWithoutProperties(props, ["className", "cssModule", "addonType", "tag"]);

  const classes = mapToCssModules(external_classnames_default()({
    [`rich-list-${addonType}`]: addonType
  }, className), cssModule);
  return RichListAddon_jsx(Tag, RichListAddon_extends({}, attributes, {
    className: classes
  }));
};

RichListAddon.defaultProps = RichListAddon_defaultProps;
/* harmony default export */ var components_RichListAddon = (RichListAddon);
// CONCATENATED MODULE: ./src/modules/components/RichListContent.jsx

const RichListContent = createBasicComponent("div", "rich-list-content", "RichListContent");
/* harmony default export */ var components_RichListContent = (RichListContent);
// CONCATENATED MODULE: ./src/modules/components/RichListItem.jsx
var RichListItem_jsx = external_react_default.a.createElement;

function RichListItem_extends() { RichListItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RichListItem_extends.apply(this, arguments); }

function RichListItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = RichListItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function RichListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const RichListItem_defaultProps = {
  tag: "div"
};

const RichListItem = props => {
  let {
    className,
    cssModule,
    children,
    disabled,
    content,
    active,
    tag: Tag
  } = props,
      attributes = RichListItem_objectWithoutProperties(props, ["className", "cssModule", "children", "disabled", "content", "active", "tag"]);

  if (attributes.href) {
    Tag = "a";
  }

  const classes = mapToCssModules(external_classnames_default()("rich-list-item", {
    disabled,
    active
  }, className), cssModule);

  if (content) {
    return RichListItem_jsx(Tag, RichListItem_extends({}, attributes, {
      className: classes
    }), RichListItem_jsx(components_RichListContent, null, children));
  } else {
    return RichListItem_jsx(Tag, RichListItem_extends({}, attributes, {
      className: classes
    }), children);
  }
};

RichListItem.defaultProps = RichListItem_defaultProps;
/* harmony default export */ var components_RichListItem = (RichListItem);
// CONCATENATED MODULE: ./src/modules/components/RichListTitle.jsx

const RichListTitle = createBasicComponent("h4", "rich-list-title", "RichListTitle");
/* harmony default export */ var components_RichListTitle = (RichListTitle);
// CONCATENATED MODULE: ./src/modules/components/RichListSubtitle.jsx

const RichListSubtitle = createBasicComponent("span", "rich-list-subtitle", "RichListSubtitle");
/* harmony default export */ var components_RichListSubtitle = (RichListSubtitle);
// CONCATENATED MODULE: ./src/modules/components/RichListParagraph.jsx

const RichListParagraph = createBasicComponent("p", "rich-list-paragraph", "RichListParagraph");
/* harmony default export */ var components_RichListParagraph = (RichListParagraph);
// CONCATENATED MODULE: ./src/modules/components/RichList.jsx
var RichList_jsx = external_react_default.a.createElement;

function RichList_extends() { RichList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RichList_extends.apply(this, arguments); }

function RichList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = RichList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function RichList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const RichList_defaultProps = {
  tag: "div"
};

const RichList = props => {
  const {
    className,
    cssModule,
    bordered,
    wrapper,
    action,
    flush,
    tag: Tag
  } = props,
        attributes = RichList_objectWithoutProperties(props, ["className", "cssModule", "bordered", "wrapper", "action", "flush", "tag"]);

  const classes = mapToCssModules(external_classnames_default()({
    "rich-list": !wrapper,
    "rich-list-flush": flush,
    "rich-list-bordered": bordered,
    "rich-list-action": action
  }, className), cssModule);
  return RichList_jsx(Tag, RichList_extends({}, attributes, {
    className: classes
  }));
};

RichList.defaultProps = RichList_defaultProps;
RichList.Addon = components_RichListAddon;
RichList.Item = components_RichListItem;
RichList.Content = components_RichListContent;
RichList.Title = components_RichListTitle;
RichList.Subtitle = components_RichListSubtitle;
RichList.Paragraph = components_RichListParagraph;
/* harmony default export */ var components_RichList = (RichList);
// CONCATENATED MODULE: ./src/modules/components/ListGroupItem.jsx
var ListGroupItem_jsx = external_react_default.a.createElement;

function ListGroupItem_extends() { ListGroupItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ListGroupItem_extends.apply(this, arguments); }

function ListGroupItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ListGroupItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ListGroupItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ListGroupItem_defaultProps = {
  tag: "li"
};

const handleDisabledOnClick = e => {
  e.preventDefault();
};

const ListGroupItem = props => {
  const {
    className,
    cssModule,
    disabled,
    variant,
    action,
    active,
    tag: Tag
  } = props,
        attributes = ListGroupItem_objectWithoutProperties(props, ["className", "cssModule", "disabled", "variant", "action", "active", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("list-group-item", {
    [`list-group-item-${variant}`]: variant,
    "list-group-item-action": action,
    active,
    disabled
  }, className), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return ListGroupItem_jsx(Tag, ListGroupItem_extends({}, attributes, {
    className: classes
  }));
};

ListGroupItem.defaultProps = ListGroupItem_defaultProps;
/* harmony default export */ var components_ListGroupItem = (ListGroupItem);
// CONCATENATED MODULE: ./src/modules/components/ListGroup.jsx
var ListGroup_jsx = external_react_default.a.createElement;

function ListGroup_extends() { ListGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ListGroup_extends.apply(this, arguments); }

function ListGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ListGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ListGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ListGroup_defaultProps = {
  horizontal: false,
  tag: "ul"
};

const getHorizontalClass = horizontal => {
  if (horizontal === false) {
    return false;
  } else if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }

  return `list-group-horizontal-${horizontal}`;
};

const ListGroup = props => {
  const {
    className,
    cssModule,
    horizontal,
    bordered,
    action,
    flush,
    deck,
    tag: Tag
  } = props,
        attributes = ListGroup_objectWithoutProperties(props, ["className", "cssModule", "horizontal", "bordered", "action", "flush", "deck", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("list-group", flush ? "list-group-flush" : getHorizontalClass(horizontal), bordered && !flush ? "list-group-bordered" : getHorizontalClass(horizontal), {
    "list-group-deck": deck && !flush,
    "list-group-action": action
  }, className), cssModule);
  return ListGroup_jsx(Tag, ListGroup_extends({}, attributes, {
    className: classes
  }));
};

ListGroup.defaultProps = ListGroup_defaultProps;
ListGroup.Item = components_ListGroupItem;
/* harmony default export */ var components_ListGroup = (ListGroup);
// CONCATENATED MODULE: ./src/modules/components/GridNavRow.jsx

const GridNavRow = createBasicComponent("div", "grid-nav-row", "GridNavRow");
/* harmony default export */ var components_GridNavRow = (GridNavRow);
// CONCATENATED MODULE: ./src/modules/components/GridNavItem.jsx
var GridNavItem_jsx = external_react_default.a.createElement;

function GridNavItem_extends() { GridNavItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GridNavItem_extends.apply(this, arguments); }

function GridNavItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GridNavItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function GridNavItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const GridNavItem_defaultProps = {
  contentTag: "div",
  iconTag: "div",
  tag: "div"
};

const GridNavItem = props => {
  let {
    contentTag: ContentTag,
    className,
    cssModule,
    children,
    innerRef,
    disabled,
    iconTag: IconTag,
    active,
    icon,
    tag: Tag
  } = props,
      attributes = GridNavItem_objectWithoutProperties(props, ["contentTag", "className", "cssModule", "children", "innerRef", "disabled", "iconTag", "active", "icon", "tag"]);

  if (attributes.href) {
    Tag = "a";
  }

  const containerClasses = mapToCssModules(external_classnames_default()("grid-nav-item", {
    active,
    disabled
  }, className), cssModule);
  const contentClasses = mapToCssModules(external_classnames_default()("grid-nav-content"), cssModule);
  const iconClasses = mapToCssModules(external_classnames_default()("grid-nav-icon"), cssModule);
  return GridNavItem_jsx(Tag, GridNavItem_extends({}, attributes, {
    ref: innerRef,
    className: containerClasses
  }), icon ? GridNavItem_jsx(IconTag, {
    className: iconClasses
  }, icon) : null, GridNavItem_jsx(ContentTag, {
    className: contentClasses
  }, children));
};

GridNavItem.defaultProps = GridNavItem_defaultProps;
/* harmony default export */ var components_GridNavItem = (GridNavItem);
// CONCATENATED MODULE: ./src/modules/components/GridNavTitle.jsx

const GridNavTitle = createBasicComponent("h4", "grid-nav-title", "GridNavTitle");
/* harmony default export */ var components_GridNavTitle = (GridNavTitle);
// CONCATENATED MODULE: ./src/modules/components/GridNavSubtitle.jsx

const GridNavSubtitle = createBasicComponent("span", "grid-nav-subtitle", "GridNavSubtitle");
/* harmony default export */ var components_GridNavSubtitle = (GridNavSubtitle);
// CONCATENATED MODULE: ./src/modules/components/GridNav.jsx
var GridNav_jsx = external_react_default.a.createElement;

function GridNav_extends() { GridNav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GridNav_extends.apply(this, arguments); }

function GridNav_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GridNav_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function GridNav_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const GridNav_defaultProps = {
  tag: "div"
};

const GridNav = props => {
  const {
    className,
    cssModule,
    innerRef,
    noRounded,
    bordered,
    action,
    flush,
    tag: Tag
  } = props,
        attributes = GridNav_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "noRounded", "bordered", "action", "flush", "tag"]);

  if (attributes.href) {
    Tag = "a";
  }

  const classes = mapToCssModules(external_classnames_default()("grid-nav", {
    "grid-nav-flush": flush,
    "grid-nav-bordered": bordered,
    "grid-nav-action": action,
    "grid-nav-no-rounded": noRounded
  }, className), cssModule);
  return GridNav_jsx(Tag, GridNav_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

GridNav.defaultProps = GridNav_defaultProps;
GridNav.Row = components_GridNavRow;
GridNav.Item = components_GridNavItem;
GridNav.Title = components_GridNavTitle;
GridNav.Subtitle = components_GridNavSubtitle;
/* harmony default export */ var components_GridNav = (GridNav);
// CONCATENATED MODULE: ./src/modules/components/FormFeedback.jsx
var FormFeedback_jsx = external_react_default.a.createElement;

function FormFeedback_extends() { FormFeedback_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormFeedback_extends.apply(this, arguments); }

function FormFeedback_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormFeedback_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormFeedback_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FormFeedback_defaultProps = {
  tag: "div",
  valid: undefined
};

const FormFeedback = props => {
  const {
    className,
    cssModule,
    tooltip,
    valid,
    tag: Tag
  } = props,
        attributes = FormFeedback_objectWithoutProperties(props, ["className", "cssModule", "tooltip", "valid", "tag"]);

  const validMode = tooltip ? "tooltip" : "feedback";
  const classes = mapToCssModules(external_classnames_default()(valid ? `valid-${validMode}` : `invalid-${validMode}`, className), cssModule);
  return FormFeedback_jsx(Tag, FormFeedback_extends({}, attributes, {
    className: classes
  }));
};

FormFeedback.defaultProps = FormFeedback_defaultProps;
/* harmony default export */ var components_FormFeedback = (FormFeedback);
// CONCATENATED MODULE: ./src/modules/components/FormGroup.jsx
var FormGroup_jsx = external_react_default.a.createElement;

function FormGroup_extends() { FormGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormGroup_extends.apply(this, arguments); }

function FormGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FormGroup_defaultProps = {
  tag: "div"
};

const FormGroup = props => {
  const {
    className,
    cssModule,
    disabled,
    inline,
    check,
    row,
    tag: Tag
  } = props,
        attributes = FormGroup_objectWithoutProperties(props, ["className", "cssModule", "disabled", "inline", "check", "row", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(className, row ? "row" : false, check ? "form-check" : "form-group", check && inline ? "form-check-inline" : false, check && disabled ? "disabled" : false), cssModule);

  if (Tag === "fieldset") {
    attributes.disabled = disabled;
  }

  return FormGroup_jsx(Tag, FormGroup_extends({}, attributes, {
    className: classes
  }));
};

FormGroup.defaultProps = FormGroup_defaultProps;
/* harmony default export */ var components_FormGroup = (FormGroup);
// CONCATENATED MODULE: ./src/modules/components/FormText.jsx
var FormText_jsx = external_react_default.a.createElement;

function FormText_extends() { FormText_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FormText_extends.apply(this, arguments); }

function FormText_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormText_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormText_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const FormText_defaultProps = {
  variant: "muted",
  tag: "small"
};

const FormText = props => {
  const {
    className,
    cssModule,
    variant,
    inline,
    tag: Tag
  } = props,
        attributes = FormText_objectWithoutProperties(props, ["className", "cssModule", "variant", "inline", "tag"]);

  const classes = mapToCssModules(external_classnames_default()({
    "form-text": !inline,
    [`text-${variant}`]: variant
  }, className), cssModule);
  return FormText_jsx(Tag, FormText_extends({}, attributes, {
    className: classes
  }));
};

FormText.defaultProps = FormText_defaultProps;
/* harmony default export */ var components_FormText = (FormText);
// CONCATENATED MODULE: ./src/modules/components/Form.jsx
var Form_jsx = external_react_default.a.createElement;

function Form_extends() { Form_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Form_extends.apply(this, arguments); }

function Form_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Form_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Form_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Form_defaultProps = {
  tag: "form"
};

class Form_Form extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.submit = this.submit.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  submit() {
    if (this.ref) {
      this.ref.submit();
    }
  }

  render() {
    const _this$props = this.props,
          {
      className,
      cssModule,
      innerRef,
      inline,
      tag: Tag
    } = _this$props,
          attributes = Form_objectWithoutProperties(_this$props, ["className", "cssModule", "innerRef", "inline", "tag"]);

    const classes = mapToCssModules(external_classnames_default()({
      "form-inline": inline
    }, className), cssModule);
    return Form_jsx(Tag, Form_extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  }

}

Form_Form.defaultProps = Form_defaultProps;
Form_Form.Feedback = components_FormFeedback;
Form_Form.Group = components_FormGroup;
Form_Form.Text = components_FormText;
/* harmony default export */ var components_Form = (Form_Form);
// CONCATENATED MODULE: ./src/modules/components/Input.jsx
var Input_jsx = external_react_default.a.createElement;

function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }

function Input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Input_defaultProps = {
  type: "text"
};

class Input_Input extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  }

  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }

  render() {
    let _this$props = this.props,
        {
      className,
      cssModule,
      plainText,
      innerRef,
      invalid,
      valid,
      addon,
      size,
      type,
      tag
    } = _this$props,
        attributes = Input_objectWithoutProperties(_this$props, ["className", "cssModule", "plainText", "innerRef", "invalid", "valid", "addon", "size", "type", "tag"]);

    const checkInput = ["radio", "checkbox"].indexOf(type) > -1;
    const isNotaNumber = new RegExp("\\D", "g");
    const fileInput = type === "file";
    const textareaInput = type === "textarea";
    const selectInput = type === "select";
    const rangeInput = type === "range";
    let Tag = tag || (selectInput || textareaInput ? type : "input");
    let formControlClass = "form-control";

    if (plainText) {
      formControlClass = `${formControlClass}-plaintext`;
      Tag = tag || "input";
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (rangeInput) {
      formControlClass = `${formControlClass}-range`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = "form-check-input";
      }
    }

    const classes = mapToCssModules(external_classnames_default()(formControlClass, size ? `form-control-${size}` : false, invalid && "is-invalid", valid && "is-valid", className), cssModule);

    if (Tag === "input" || tag && typeof tag === "function") {
      attributes.type = type;
    }

    if (attributes.children && !(plainText || type === "select" || typeof Tag !== "string" || Tag === "select")) {
      warnOnce(`Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`);
      delete attributes.children;
    }

    return Input_jsx(Tag, Input_extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  }

}

Input_Input.defaultProps = Input_defaultProps;
/* harmony default export */ var components_Input = (Input_Input);
// CONCATENATED MODULE: ./src/modules/components/InputGroupText.jsx

const InputGroupText = createBasicComponent("span", "input-group-text", "InputGroupText");
/* harmony default export */ var components_InputGroupText = (InputGroupText);
// CONCATENATED MODULE: ./src/modules/components/InputGroupAddon.jsx
var InputGroupAddon_jsx = external_react_default.a.createElement;

function InputGroupAddon_extends() { InputGroupAddon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InputGroupAddon_extends.apply(this, arguments); }

function InputGroupAddon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = InputGroupAddon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function InputGroupAddon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const InputGroupAddon_defaultProps = {
  tag: "div"
};

const InputGroupAddon = props => {
  const {
    className,
    cssModule,
    children,
    addonType,
    tag: Tag
  } = props,
        attributes = InputGroupAddon_objectWithoutProperties(props, ["className", "cssModule", "children", "addonType", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(`input-group-${addonType}`, className), cssModule); // Convenience to assist with transition

  if (typeof children === "string") {
    return InputGroupAddon_jsx(Tag, InputGroupAddon_extends({}, attributes, {
      className: classes
    }), InputGroupAddon_jsx(components_InputGroupText, {
      children: children
    }));
  }

  return InputGroupAddon_jsx(Tag, InputGroupAddon_extends({}, attributes, {
    className: classes,
    children: children
  }));
};

InputGroupAddon.defaultProps = InputGroupAddon_defaultProps;
/* harmony default export */ var components_InputGroupAddon = (InputGroupAddon);
// CONCATENATED MODULE: ./src/modules/components/InputGroupButtonDropdown.jsx
var InputGroupButtonDropdown_jsx = external_react_default.a.createElement;



const InputGroupButtonDropdown = props => {
  return InputGroupButtonDropdown_jsx(components_Dropdown, props);
};

/* harmony default export */ var components_InputGroupButtonDropdown = (InputGroupButtonDropdown);
// CONCATENATED MODULE: ./src/modules/components/InputGroup.jsx
var InputGroup_jsx = external_react_default.a.createElement;

function InputGroup_extends() { InputGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return InputGroup_extends.apply(this, arguments); }

function InputGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = InputGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function InputGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const InputGroup_defaultProps = {
  tag: "div"
};

const InputGroup = props => {
  const {
    className,
    cssModule,
    size,
    icon,
    tag: Tag
  } = props,
        attributes = InputGroup_objectWithoutProperties(props, ["className", "cssModule", "size", "icon", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(icon ? "input-group-icon" : "input-group", {
    [`input-group-${size}`]: size
  }, className), cssModule);
  return InputGroup_jsx(Tag, InputGroup_extends({}, attributes, {
    className: classes
  }));
};

InputGroup.defaultProps = InputGroup_defaultProps;
InputGroup.Text = components_InputGroupText;
InputGroup.Addon = components_InputGroupAddon;
InputGroup.ButtonDropdown = components_InputGroupButtonDropdown;
/* harmony default export */ var components_InputGroup = (InputGroup);
// CONCATENATED MODULE: ./src/modules/components/Label.jsx
var Label_jsx = external_react_default.a.createElement;

function Label_extends() { Label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Label_extends.apply(this, arguments); }

function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Label_colWidths = ["xs", "sm", "md", "lg", "xl"];
const Label_defaultProps = {
  tag: "label",
  widths: Label_colWidths
};

const Label_getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Label = props => {
  const {
    className,
    cssModule,
    hidden,
    widths,
    tag: Tag,
    check,
    size,
    for: htmlFor
  } = props,
        attributes = Label_objectWithoutProperties(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

  const colClasses = [];
  widths.forEach((colWidth, i) => {
    let columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== "") {
      return;
    }

    const isXs = !i;
    let colClass;

    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      colClass = Label_getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(external_classnames_default()({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      })), cssModule);
    } else {
      colClass = Label_getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  const classes = mapToCssModules(external_classnames_default()(className, hidden ? "sr-only" : false, check ? "form-check-label" : false, size ? `col-form-label-${size}` : false, colClasses, colClasses.length ? "col-form-label" : false), cssModule);
  return Label_jsx(Tag, Label_extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.defaultProps = Label_defaultProps;
/* harmony default export */ var components_Label = (Label);
// CONCATENATED MODULE: ./src/modules/components/PaginationItem.jsx
var PaginationItem_jsx = external_react_default.a.createElement;

function PaginationItem_extends() { PaginationItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PaginationItem_extends.apply(this, arguments); }

function PaginationItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PaginationItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PaginationItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PaginationItem_defaultProps = {
  tag: "li"
};

const PaginationItem = props => {
  const {
    className,
    cssModule,
    disabled,
    active,
    tag: Tag
  } = props,
        attributes = PaginationItem_objectWithoutProperties(props, ["className", "cssModule", "disabled", "active", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("page-item", {
    active,
    disabled
  }, className), cssModule);
  return PaginationItem_jsx(Tag, PaginationItem_extends({}, attributes, {
    className: classes
  }));
};

PaginationItem.defaultProps = PaginationItem_defaultProps;
/* harmony default export */ var components_PaginationItem = (PaginationItem);
// CONCATENATED MODULE: ./src/modules/components/PaginationLink.jsx
var PaginationLink_jsx = external_react_default.a.createElement;

function PaginationLink_extends() { PaginationLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PaginationLink_extends.apply(this, arguments); }

function PaginationLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PaginationLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PaginationLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PaginationLink_defaultProps = {
  tag: "a"
};

const PaginationLink = props => {
  let {
    "aria-label": label,
    className,
    cssModule,
    tag: Tag
  } = props,
      attributes = PaginationLink_objectWithoutProperties(props, ["aria-label", "className", "cssModule", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("page-link", className), cssModule);

  if (!attributes.href && Tag === "a") {
    Tag = "button";
  }

  return PaginationLink_jsx(Tag, PaginationLink_extends({}, attributes, {
    className: classes,
    "aria-label": label
  }));
};

PaginationLink.defaultProps = PaginationLink_defaultProps;
/* harmony default export */ var components_PaginationLink = (PaginationLink);
// CONCATENATED MODULE: ./src/modules/components/Pagination.jsx
var Pagination_jsx = external_react_default.a.createElement;

function Pagination_extends() { Pagination_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pagination_extends.apply(this, arguments); }

function Pagination_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Pagination_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Pagination_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Pagination_defaultProps = {
  "aria-label": "pagination",
  listTag: "ul",
  tag: "nav"
};

const Pagination = props => {
  const {
    "aria-label": label,
    listClassName,
    className,
    cssModule,
    children,
    listTag: ListTag,
    size,
    tag: Tag
  } = props,
        attributes = Pagination_objectWithoutProperties(props, ["aria-label", "listClassName", "className", "cssModule", "children", "listTag", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(className), cssModule);
  const listClasses = mapToCssModules(external_classnames_default()(listClassName, "pagination", {
    [`pagination-${size}`]: size
  }), cssModule);
  return Pagination_jsx(Tag, {
    className: classes,
    "aria-label": label
  }, Pagination_jsx(ListTag, Pagination_extends({}, attributes, {
    className: listClasses
  }), children));
};

Pagination.defaultProps = Pagination_defaultProps;
Pagination.Item = components_PaginationItem;
Pagination.Link = components_PaginationLink;
/* harmony default export */ var components_Pagination = (Pagination);
// CONCATENATED MODULE: ./src/modules/components/TabContext.jsx

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

const TabContext = /*#__PURE__*/external_react_default.a.createContext({});
// CONCATENATED MODULE: ./src/modules/components/TabPane.jsx
var TabPane_jsx = external_react_default.a.createElement;

function TabPane_extends() { TabPane_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TabPane_extends.apply(this, arguments); }

function TabPane_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TabPane_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TabPane_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TabPane_defaultProps = {
  tag: "div"
};
function TabPane(props) {
  const {
    className,
    cssModule,
    tabId,
    tag: Tag
  } = props,
        attributes = TabPane_objectWithoutProperties(props, ["className", "cssModule", "tabId", "tag"]);

  const getClasses = activeTabId => mapToCssModules(external_classnames_default()("tab-pane", {
    active: tabId === activeTabId
  }, className), cssModule);

  return TabPane_jsx(TabContext.Consumer, null, ({
    activeTabId
  }) => TabPane_jsx(Tag, TabPane_extends({}, attributes, {
    className: getClasses(activeTabId)
  })));
}
TabPane.defaultProps = TabPane_defaultProps;
// CONCATENATED MODULE: ./src/modules/components/Tab.jsx
var Tab_jsx = external_react_default.a.createElement;

function Tab_extends() { Tab_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tab_extends.apply(this, arguments); }







const Tab_propTypes = {
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  activeTab: external_prop_types_default.a.any,
  tag: tagPropType
};
const Tab_defaultProps = {
  tag: "div"
};

class Tab_Tab extends external_react_default.a.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag
    } = this.props;
    const attributes = omit(this.props, Object.keys(Tab_propTypes));
    const classes = mapToCssModules(external_classnames_default()("tab-content", className), cssModule);
    return Tab_jsx(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, Tab_jsx(Tag, Tab_extends({}, attributes, {
      className: classes
    })));
  }

}

Tab_Tab.defaultProps = Tab_defaultProps;
Tab_Tab.Pane = TabPane;
/* harmony default export */ var components_Tab = (Tab_Tab);
// CONCATENATED MODULE: ./src/modules/components/AlertLink.jsx
var AlertLink_jsx = external_react_default.a.createElement;

function AlertLink_extends() { AlertLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AlertLink_extends.apply(this, arguments); }

function AlertLink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AlertLink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AlertLink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AlertLink_defaultProps = {
  href: "#",
  tag: "a"
};

const AlertLink = props => {
  const {
    className,
    cssModule,
    innerRef,
    href,
    tag: Tag
  } = props,
        attributes = AlertLink_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "href", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("alert-link", className), cssModule);
  return AlertLink_jsx(Tag, AlertLink_extends({}, attributes, {
    href: href,
    ref: innerRef,
    className: classes
  }));
};

AlertLink.defaultProps = AlertLink_defaultProps;
/* harmony default export */ var components_AlertLink = (AlertLink);
// CONCATENATED MODULE: ./src/modules/components/AlertHeader.jsx

const AlertHeader = createBasicComponent("h4", "alert-header", "AlertHeader");
/* harmony default export */ var components_AlertHeader = (AlertHeader);
// CONCATENATED MODULE: ./src/modules/components/Alert.jsx
var Alert_jsx = external_react_default.a.createElement;

function Alert_extends() { Alert_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Alert_extends.apply(this, arguments); }

function Alert_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Alert_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Alert_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Alert_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Alert_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Alert_ownKeys(Object(source), true).forEach(function (key) { Alert_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Alert_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Alert_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Alert_defaultProps = {
  closeClassName: "btn btn-text-danger btn-icon",
  closeAriaLabel: "Close",
  transition: Alert_objectSpread(Alert_objectSpread({}, components_Fade.defaultProps), {}, {
    unmountOnExit: true
  }),
  variant: "primary",
  isOpen: true,
  fade: false,
  tag: "div"
};

const Alert = props => {
  const {
    closeClassName,
    closeAriaLabel,
    className,
    cssModule,
    transition,
    innerRef,
    children,
    variant,
    isOpen,
    toggle,
    fade,
    icon,
    tag: Tag
  } = props,
        attributes = Alert_objectWithoutProperties(props, ["closeClassName", "closeAriaLabel", "className", "cssModule", "transition", "innerRef", "children", "variant", "isOpen", "toggle", "fade", "icon", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("alert", `alert-${variant}`, {
    "alert-dismissible": toggle
  }, className), cssModule);
  const closeClasses = mapToCssModules(external_classnames_default()(closeClassName), cssModule);
  const iconClasses = mapToCssModules(external_classnames_default()("alert-icon"), cssModule);
  const contentClasses = mapToCssModules(external_classnames_default()("alert-content"), cssModule);

  const alertTransition = Alert_objectSpread(Alert_objectSpread(Alert_objectSpread({}, components_Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : "",
    timeout: fade ? transition.timeout : 0
  });

  return Alert_jsx(components_Fade, Alert_extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), icon ? Alert_jsx("div", {
    className: iconClasses
  }, icon) : null, Alert_jsx("div", {
    className: contentClasses
  }, children), toggle ? Alert_jsx("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, Alert_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faTimes"]
  })) : null);
};

class Alert_AlertUncontrolled extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return Alert_jsx(Alert, Alert_extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  }

}

Alert.defaultProps = Alert_defaultProps;
Alert.Link = components_AlertLink;
Alert.Header = components_AlertHeader;
Alert.Uncontrolled = Alert_AlertUncontrolled;
/* harmony default export */ var components_Alert = (Alert);
// CONCATENATED MODULE: ./src/modules/components/Collapse.jsx
var Collapse_jsx = external_react_default.a.createElement;

function Collapse_extends() { Collapse_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Collapse_extends.apply(this, arguments); }

function Collapse_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Collapse_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Collapse_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Collapse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Collapse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Collapse_ownKeys(Object(source), true).forEach(function (key) { Collapse_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Collapse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Collapse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Collapse_omitKeys = ["toggleEvents", "defaultOpen"];

const Collapse_defaultProps = Collapse_objectSpread(Collapse_objectSpread({}, external_react_transition_group_["Transition"].defaultProps), {}, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: "div",
  timeout: TransitionTimeouts.Collapse
});

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: "collapsing",
  [TransitionStatuses.ENTERED]: "collapse show",
  [TransitionStatuses.EXITING]: "collapsing",
  [TransitionStatuses.EXITED]: "collapse"
};

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || "collapse";
}

function getHeight(node) {
  return node.scrollHeight;
}

class Collapse_Collapse extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null
    };
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  onEntering(node, isAppearing) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onEntering(node, isAppearing);
  }

  onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  }

  onExit(node) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onExit(node);
  }

  onExiting(node) {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  }

  render() {
    const _this$props = this.props,
          {
      tag: Tag,
      isOpen,
      className,
      navbar,
      cssModule,
      children,
      innerRef
    } = _this$props,
          otherProps = Collapse_objectWithoutProperties(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

    const {
      height
    } = this.state;
    const transitionProps = pick(otherProps, TransitionPropTypeKeys);
    const childProps = omit(otherProps, TransitionPropTypeKeys);
    return Collapse_jsx(external_react_transition_group_["Transition"], Collapse_extends({}, transitionProps, {
      in: isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), status => {
      let collapseClass = getTransitionClass(status);
      const classes = mapToCssModules(external_classnames_default()(className, collapseClass, navbar && "navbar-collapse"), cssModule);
      const style = height === null ? null : {
        height
      };
      return Collapse_jsx(Tag, Collapse_extends({}, childProps, {
        style: Collapse_objectSpread(Collapse_objectSpread({}, childProps.style), style),
        className: classes,
        ref: this.props.innerRef
      }), children);
    });
  }

}

class Collapse_UncontrolledCollapse extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.togglers = null;
    this.removeEventListeners = null;
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: props.defaultOpen || false
    };
  }

  componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  }

  componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  }

  toggle(e) {
    this.setState(({
      isOpen
    }) => ({
      isOpen: !isOpen
    }));
    e.preventDefault();
  }

  render() {
    return Collapse_jsx(Collapse_Collapse, Collapse_extends({
      isOpen: this.state.isOpen
    }, omit(this.props, Collapse_omitKeys)));
  }

}

Collapse_UncontrolledCollapse.defaultProps = {
  toggleEvents: defaultToggleEvents
};
Collapse_Collapse.defaultProps = Collapse_defaultProps;
Collapse_Collapse.Uncontrolled = Collapse_UncontrolledCollapse;
/* harmony default export */ var components_Collapse = (Collapse_Collapse);
// CONCATENATED MODULE: ./src/modules/components/SidemenuAddon.jsx

const SidemenuAddon = createBasicComponent("div", "sidemenu-addon", "SidemenuAddon");
/* harmony default export */ var components_SidemenuAddon = (SidemenuAddon);
// CONCATENATED MODULE: ./src/modules/components/SidemenuBody.jsx
var SidemenuBody_jsx = external_react_default.a.createElement;

function SidemenuBody_extends() { SidemenuBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SidemenuBody_extends.apply(this, arguments); }

function SidemenuBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidemenuBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidemenuBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SidemenuBody_defaultProps = {
  tag: "div"
};

const SidemenuBody = props => {
  const {
    className,
    cssModule,
    innerRef,
    tag: Tag
  } = props,
        attributes = SidemenuBody_objectWithoutProperties(props, ["className", "cssModule", "innerRef", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("sidemenu-body", className), cssModule);
  return SidemenuBody_jsx(Tag, SidemenuBody_extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
};

SidemenuBody.defaultProps = SidemenuBody_defaultProps;
/* harmony default export */ var components_SidemenuBody = (SidemenuBody);
// CONCATENATED MODULE: ./src/modules/components/SidemenuHeader.jsx
var SidemenuHeader_jsx = external_react_default.a.createElement;

function SidemenuHeader_extends() { SidemenuHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SidemenuHeader_extends.apply(this, arguments); }

function SidemenuHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SidemenuHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SidemenuHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SidemenuHeader_defaultProps = {
  tag: "div"
};

const SidemenuHeader = props => {
  const {
    className,
    cssModule,
    bordered,
    tag: Tag
  } = props,
        attributes = SidemenuHeader_objectWithoutProperties(props, ["className", "cssModule", "bordered", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("sidemenu-header", {
    "sidemenu-header-bordered": bordered
  }, className), cssModule);
  return SidemenuHeader_jsx(Tag, SidemenuHeader_extends({}, attributes, {
    className: classes
  }));
};

SidemenuHeader.defaultProps = SidemenuHeader_defaultProps;
/* harmony default export */ var components_SidemenuHeader = (SidemenuHeader);
// CONCATENATED MODULE: ./src/modules/components/SidemenuTitle.jsx

const SidemenuTitle = createBasicComponent("h3", "sidemenu-title", "SidemenuTitle");
/* harmony default export */ var components_SidemenuTitle = (SidemenuTitle);
// CONCATENATED MODULE: ./src/modules/components/Sidemenu.jsx
var Sidemenu_jsx = external_react_default.a.createElement;

function Sidemenu_extends() { Sidemenu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sidemenu_extends.apply(this, arguments); }

function Sidemenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Sidemenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Sidemenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Sidemenu_defaultProps = {
  align: "left",
  show: false,
  tag: "div"
};

class Sidemenu_Sidemenu extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
    this.openedClass = "sidemenu-open";
    this.setBodyClass = this.setBodyClass.bind(this);
    this.backdropClick = this.backdropClick.bind(this);
  }

  setBodyClass(show) {
    if (show) {
      document.body.classList.add(this.openedClass);
    } else {
      document.body.classList.remove(this.openedClass);
    }
  }

  backdropClick(e) {
    this.setState({
      show: false
    }, () => {
      this.setBodyClass(false);
    });

    if (this.props.backdropOnClick) {
      this.props.backdropOnClick(e);
    }
  }

  componentDidMount() {
    this.setBodyClass(this.state.show);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({
        show: this.props.show
      }, () => {
        this.setBodyClass(this.state.show);
      });
    }
  }

  componentWillUnmount() {
    this.setBodyClass(false);
  }

  render() {
    const _this$props = this.props,
          {
      backdropOnClick,
      className,
      cssModule,
      innerRef,
      children,
      width,
      align,
      show,
      tag: Tag
    } = _this$props,
          attributes = Sidemenu_objectWithoutProperties(_this$props, ["backdropOnClick", "className", "cssModule", "innerRef", "children", "width", "align", "show", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("sidemenu", {
      [`sidemenu-${align}`]: align,
      [`sidemenu-${width}`]: width,
      active: this.state.show
    }, className), cssModule);
    return Sidemenu_jsx(external_react_default.a.Fragment, null, Sidemenu_jsx(Tag, Sidemenu_extends({}, attributes, {
      ref: innerRef,
      className: classes,
      children: children
    })), this.state.show ? Sidemenu_jsx("div", {
      id: "sidemenu-backdrop",
      onClick: this.backdropClick
    }) : null);
  }

}

Sidemenu_Sidemenu.defaultProps = Sidemenu_defaultProps;
Sidemenu_Sidemenu.Addon = components_SidemenuAddon;
Sidemenu_Sidemenu.Body = components_SidemenuBody;
Sidemenu_Sidemenu.Header = components_SidemenuHeader;
Sidemenu_Sidemenu.Title = components_SidemenuTitle;
/* harmony default export */ var components_Sidemenu = (Sidemenu_Sidemenu);
// CONCATENATED MODULE: ./src/modules/components/Spinner.jsx
var Spinner_jsx = external_react_default.a.createElement;

function Spinner_extends() { Spinner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Spinner_extends.apply(this, arguments); }

function Spinner_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Spinner_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Spinner_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Spinner_defaultProps = {
  children: "Loading...",
  type: "border",
  tag: "span"
};

const Spinner = props => {
  const {
    className,
    cssModule,
    children,
    variant,
    type,
    size,
    tag: Tag
  } = props,
        attributes = Spinner_objectWithoutProperties(props, ["className", "cssModule", "children", "variant", "type", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()(`spinner-${type}`, {
    [`spinner-${type}-${size}`]: size,
    [`text-${variant}`]: variant
  }, className), cssModule);
  const contentClasses = mapToCssModules("sr-only", cssModule);
  return Spinner_jsx(Tag, Spinner_extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && Spinner_jsx("span", {
    className: contentClasses
  }, children));
};

Spinner.defaultProps = Spinner_defaultProps;
/* harmony default export */ var components_Spinner = (Spinner);
// CONCATENATED MODULE: ./src/modules/components/Scrolltop.jsx
var Scrolltop_jsx = external_react_default.a.createElement;

function Scrolltop_extends() { Scrolltop_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Scrolltop_extends.apply(this, arguments); }

function Scrolltop_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Scrolltop_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Scrolltop_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Scrolltop_defaultProps = {
  offset: 200,
  tag: "div"
};

class Scrolltop_Scrolltop extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.activePosition = this.activePosition.bind(this);
  }

  handleClick() {
    window.scrollTo(0, 0);
  }

  activePosition(position) {
    if (position >= this.props.offset) {
      if (!this.state.active) {
        this.setState({
          active: true
        });
      }
    } else {
      if (this.state.active) {
        this.setState({
          active: false
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.activePosition(window.scrollY);
    });
  }

  render() {
    const _this$props = this.props,
          {
      className,
      cssModule,
      innerRef,
      offset,
      active,
      tag: Tag
    } = _this$props,
          attributes = Scrolltop_objectWithoutProperties(_this$props, ["className", "cssModule", "innerRef", "offset", "active", "tag"]);

    const classes = mapToCssModules(external_classnames_default()("scrolltop", {
      active: this.state.active
    }, className), cssModule);
    return Scrolltop_jsx(Tag, Scrolltop_extends({}, attributes, {
      ref: innerRef,
      onClick: this.handleClick,
      className: classes
    }));
  }

}

Scrolltop_Scrolltop.defaultProps = Scrolltop_defaultProps;
/* harmony default export */ var components_Scrolltop = (Scrolltop_Scrolltop);
// CONCATENATED MODULE: ./src/modules/components/Widget1Addon.jsx

const Widget1Addon = createBasicComponent("div", "widget1-addon", "Widget1Addon");
/* harmony default export */ var components_Widget1Addon = (Widget1Addon);
// CONCATENATED MODULE: ./src/modules/components/Widget1Body.jsx
var Widget1Body_jsx = external_react_default.a.createElement;

function Widget1Body_extends() { Widget1Body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget1Body_extends.apply(this, arguments); }

function Widget1Body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget1Body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget1Body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget1Body_defaultProps = {
  tag: "div"
};

const Widget1Display = props => {
  const {
    className,
    cssModule,
    offset,
    tag: Tag
  } = props,
        attributes = Widget1Body_objectWithoutProperties(props, ["className", "cssModule", "offset", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget1-body", {
    "widget1-body-offset": offset
  }, className), cssModule);
  return Widget1Body_jsx(Tag, Widget1Body_extends({}, attributes, {
    className: classes
  }));
};

Widget1Display.defaultProps = Widget1Body_defaultProps;
/* harmony default export */ var Widget1Body = (Widget1Display);
// CONCATENATED MODULE: ./src/modules/components/Widget1Dialog.jsx

const Widget1Dialog = createBasicComponent("div", "widget1-dialog", "Widget1Dialog");
/* harmony default export */ var components_Widget1Dialog = (Widget1Dialog);
// CONCATENATED MODULE: ./src/modules/components/Widget1DialogContent.jsx

const Widget1DialogContent = createBasicComponent("div", "widget1-dialog-content", "Widget1DialogContent");
/* harmony default export */ var components_Widget1DialogContent = (Widget1DialogContent);
// CONCATENATED MODULE: ./src/modules/components/Widget1Display.jsx
var Widget1Display_jsx = external_react_default.a.createElement;

function Widget1Display_extends() { Widget1Display_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget1Display_extends.apply(this, arguments); }

function Widget1Display_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget1Display_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget1Display_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget1Display_defaultProps = {
  tag: "div"
};

function Widget1Display_Widget1Display(props) {
  const {
    className,
    cssModule,
    bottom,
    size,
    top,
    tag: Tag
  } = props,
        attributes = Widget1Display_objectWithoutProperties(props, ["className", "cssModule", "bottom", "size", "top", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget1-display", {
    "widget1-display-top": top,
    "widget1-display-bottom": bottom,
    [`widget1-display-${size}`]: size
  }, className), cssModule);
  return Widget1Display_jsx(Tag, Widget1Display_extends({}, attributes, {
    className: classes
  }));
}

Widget1Display_Widget1Display.defaultProps = Widget1Display_defaultProps;
/* harmony default export */ var components_Widget1Display = (Widget1Display_Widget1Display);
// CONCATENATED MODULE: ./src/modules/components/Widget1Group.jsx

const Widget1Group = createBasicComponent("div", "widget1-group", "Widget1Group");
/* harmony default export */ var components_Widget1Group = (Widget1Group);
// CONCATENATED MODULE: ./src/modules/components/Widget1Offset.jsx

const Widget1Offset = createBasicComponent("div", "widget1-offset", "Widget1Offset");
/* harmony default export */ var components_Widget1Offset = (Widget1Offset);
// CONCATENATED MODULE: ./src/modules/components/Widget1Title.jsx

const Widget1Title = createBasicComponent("h3", "widget1-title", "Widget1Title");
/* harmony default export */ var components_Widget1Title = (Widget1Title);
// CONCATENATED MODULE: ./src/modules/components/Widget1.jsx
var Widget1_jsx = external_react_default.a.createElement;

function Widget1_extends() { Widget1_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget1_extends.apply(this, arguments); }

function Widget1_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget1_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget1_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const Widget1 = props => {
  const {
    className,
    cssModule
  } = props,
        attributes = Widget1_objectWithoutProperties(props, ["className", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()("widget1", className), cssModule);
  return Widget1_jsx(components_Portlet, Widget1_extends({}, attributes, {
    className: classes
  }));
};

Widget1.Addon = components_Widget1Addon;
Widget1.Body = Widget1Body;
Widget1.Dialog = components_Widget1Dialog;
Widget1.DialogContent = components_Widget1DialogContent;
Widget1.Display = components_Widget1Display;
Widget1.Group = components_Widget1Group;
Widget1.Offset = components_Widget1Offset;
Widget1.Title = components_Widget1Title;
/* harmony default export */ var components_Widget1 = (Widget1);
// CONCATENATED MODULE: ./src/modules/components/Widget2.jsx
var Widget2_jsx = external_react_default.a.createElement;

function Widget2_extends() { Widget2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget2_extends.apply(this, arguments); }

function Widget2_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget2_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget2_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Widget2 = props => {
  const {
    className,
    cssModule
  } = props,
        attributes = Widget2_objectWithoutProperties(props, ["className", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()("widget2", className), cssModule);
  return Widget2_jsx(components_Nav, Widget2_extends({}, attributes, {
    className: classes
  }));
};

/* harmony default export */ var components_Widget2 = (Widget2);
// CONCATENATED MODULE: ./src/modules/components/Widget3Display.jsx

const Widget3Display = createBasicComponent("div", "widget3-display", "Widget3Display");
/* harmony default export */ var components_Widget3Display = (Widget3Display);
// CONCATENATED MODULE: ./src/modules/components/Widget3Subtitle.jsx

const Widget3Subtitle = createBasicComponent("sub", "widget3-subtitle", "Widget3Subtitle");
/* harmony default export */ var components_Widget3Subtitle = (Widget3Subtitle);
// CONCATENATED MODULE: ./src/modules/components/Widget3Title.jsx

const Widget3Title = createBasicComponent("h3", "widget3-title", "Widget3Title");
/* harmony default export */ var components_Widget3Title = (Widget3Title);
// CONCATENATED MODULE: ./src/modules/components/Widget3.jsx
var Widget3_jsx = external_react_default.a.createElement;

function Widget3_extends() { Widget3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget3_extends.apply(this, arguments); }

function Widget3_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget3_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget3_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Widget3_defaultProps = {
  tag: "div"
};

const Widget3 = props => {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attributes = Widget3_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget3", {
    [`widget3-${size}`]: size
  }, className), cssModule);
  return Widget3_jsx(Tag, Widget3_extends({}, attributes, {
    className: classes
  }));
};

Widget3.defaultProps = Widget3_defaultProps;
Widget3.Display = components_Widget3Display;
Widget3.Subtitle = components_Widget3Subtitle;
Widget3.Title = components_Widget3Title;
/* harmony default export */ var components_Widget3 = (Widget3);
// CONCATENATED MODULE: ./src/modules/components/Widget4Addon.jsx

const Widget4Addon = createBasicComponent("div", "widget4-addon", "Widget4Addon");
/* harmony default export */ var components_Widget4Addon = (Widget4Addon);
// CONCATENATED MODULE: ./src/modules/components/Widget4Display.jsx

const Widget4Display = createBasicComponent("div", "widget4-display", "Widget4Display");
/* harmony default export */ var components_Widget4Display = (Widget4Display);
// CONCATENATED MODULE: ./src/modules/components/Widget4Group.jsx

const Widget4Group = createBasicComponent("div", "widget4-group", "Widget4Group");
/* harmony default export */ var components_Widget4Group = (Widget4Group);
// CONCATENATED MODULE: ./src/modules/components/Widget4Highlight.jsx

const Widget4Highlight = createBasicComponent("h2", "widget4-hightlight", "Widget4Highlight");
/* harmony default export */ var components_Widget4Highlight = (Widget4Highlight);
// CONCATENATED MODULE: ./src/modules/components/Widget4Subtitle.jsx

const Widget4Subtitle = createBasicComponent("h6", "widget4-subtitle", "Widget4Subtitle");
/* harmony default export */ var components_Widget4Subtitle = (Widget4Subtitle);
// CONCATENATED MODULE: ./src/modules/components/Widget4Title.jsx

const Widget4Title = createBasicComponent("h3", "widget4-title", "Widget4Title");
/* harmony default export */ var components_Widget4Title = (Widget4Title);
// CONCATENATED MODULE: ./src/modules/components/Widget4.jsx







const Widget4 = createBasicComponent("div", "widget4", "Widget4");
Widget4.Addon = components_Widget4Addon;
Widget4.Display = components_Widget4Display;
Widget4.Group = components_Widget4Group;
Widget4.Highlight = components_Widget4Highlight;
Widget4.Subtitle = components_Widget4Subtitle;
Widget4.Title = components_Widget4Title;
/* harmony default export */ var components_Widget4 = (Widget4);
// CONCATENATED MODULE: ./src/modules/components/Widget5Group.jsx

const Widget5Group = createBasicComponent("div", "widget5-group", "Widget5Group");
/* harmony default export */ var components_Widget5Group = (Widget5Group);
// CONCATENATED MODULE: ./src/modules/components/Widget5Info.jsx

const Widget5Info = createBasicComponent("span", "widget5-info", "Widget5Info");
/* harmony default export */ var components_Widget5Info = (Widget5Info);
// CONCATENATED MODULE: ./src/modules/components/Widget5Item.jsx

const Widget5Item = createBasicComponent("div", "widget5-item", "Widget5Item");
/* harmony default export */ var components_Widget5Item = (Widget5Item);
// CONCATENATED MODULE: ./src/modules/components/Widget5Title.jsx

const Widget5Title = createBasicComponent("h4", "widget5-title", "Widget5Title");
/* harmony default export */ var components_Widget5Title = (Widget5Title);
// CONCATENATED MODULE: ./src/modules/components/Widget5Value.jsx

const Widget5Value = createBasicComponent("span", "widget5-value", "Widget5Value");
/* harmony default export */ var components_Widget5Value = (Widget5Value);
// CONCATENATED MODULE: ./src/modules/components/Widget5.jsx






const Widget5 = createBasicComponent("div", "widget5", "Widget5");
Widget5.Group = components_Widget5Group;
Widget5.Info = components_Widget5Info;
Widget5.Item = components_Widget5Item;
Widget5.Title = components_Widget5Title;
Widget5.Value = components_Widget5Value;
/* harmony default export */ var components_Widget5 = (Widget5);
// CONCATENATED MODULE: ./src/modules/components/Widget6Title.jsx

const Widget6Title = createBasicComponent("h5", "widget6-title", "Widget6Title");
/* harmony default export */ var components_Widget6Title = (Widget6Title);
// CONCATENATED MODULE: ./src/modules/components/Widget6Subtitle.jsx

const Widget6Subtitle = createBasicComponent("span", "widget6-subtitle", "Widget6Subtitle");
/* harmony default export */ var components_Widget6Subtitle = (Widget6Subtitle);
// CONCATENATED MODULE: ./src/modules/components/Widget6.jsx



const Widget6 = createBasicComponent("div", "widget6", "Widget6");
Widget6.Title = components_Widget6Title;
Widget6.Subtitle = components_Widget6Subtitle;
/* harmony default export */ var components_Widget6 = (Widget6);
// CONCATENATED MODULE: ./src/modules/components/Widget7Text.jsx

const Widget7Text = createBasicComponent("p", "widget7-text", "Widget7Text");
/* harmony default export */ var components_Widget7Text = (Widget7Text);
// CONCATENATED MODULE: ./src/modules/components/Widget7Time.jsx

const Widget7Time = createBasicComponent("span", "widget7-time", "Widget7Time");
/* harmony default export */ var components_Widget7Time = (Widget7Time);
// CONCATENATED MODULE: ./src/modules/components/Widget7.jsx



const Widget7 = createBasicComponent("div", "widget7", "Widget7");
Widget7.Text = components_Widget7Text;
Widget7.Time = components_Widget7Time;
/* harmony default export */ var components_Widget7 = (Widget7);
// CONCATENATED MODULE: ./src/modules/components/Widget8Addon.jsx

const Widget8Addon = createBasicComponent("div", "widget8-addon", "Widget8Addon");
/* harmony default export */ var components_Widget8Addon = (Widget8Addon);
// CONCATENATED MODULE: ./src/modules/components/Widget8Avatar.jsx
var Widget8Avatar_jsx = external_react_default.a.createElement;

function Widget8Avatar_extends() { Widget8Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget8Avatar_extends.apply(this, arguments); }

function Widget8Avatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget8Avatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget8Avatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Widget8Avatar = props => {
  const {
    className,
    cssModule
  } = props,
        attributes = Widget8Avatar_objectWithoutProperties(props, ["className", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()("widget8-avatar", className), cssModule);
  return Widget8Avatar_jsx(components_Avatar, Widget8Avatar_extends({}, attributes, {
    className: classes
  }));
};

/* harmony default export */ var components_Widget8Avatar = (Widget8Avatar);
// CONCATENATED MODULE: ./src/modules/components/Widget8Content.jsx

const Widget8Content = createBasicComponent("div", "widget8-content", "Widget8Content");
/* harmony default export */ var components_Widget8Content = (Widget8Content);
// CONCATENATED MODULE: ./src/modules/components/Widget8Highlight.jsx
var Widget8Highlight_jsx = external_react_default.a.createElement;

function Widget8Highlight_extends() { Widget8Highlight_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget8Highlight_extends.apply(this, arguments); }

function Widget8Highlight_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget8Highlight_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget8Highlight_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget8Highlight_defaultProps = {
  tag: "div"
};

function Widget8Highlight(props) {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attributes = Widget8Highlight_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget8-highlight", {
    [`widget8-highlight-${size}`]: size
  }, className), cssModule);
  return Widget8Highlight_jsx(Tag, Widget8Highlight_extends({}, attributes, {
    className: classes
  }));
}

Widget8Highlight.defaultProps = Widget8Highlight_defaultProps;
/* harmony default export */ var components_Widget8Highlight = (Widget8Highlight);
// CONCATENATED MODULE: ./src/modules/components/Widget8Subtitle.jsx

const Widget8Subtitle = createBasicComponent("div", "widget8-subtitle", "Widget8Subtitle");
/* harmony default export */ var components_Widget8Subtitle = (Widget8Subtitle);
// CONCATENATED MODULE: ./src/modules/components/Widget8Title.jsx

const Widget8Title = createBasicComponent("div", "widget8-title", "Widget8Title");
/* harmony default export */ var components_Widget8Title = (Widget8Title);
// CONCATENATED MODULE: ./src/modules/components/Widget8.jsx







const Widget8 = createBasicComponent("div", "widget8", "Widget8");
Widget8.Addon = components_Widget8Addon;
Widget8.Avatar = components_Widget8Avatar;
Widget8.Content = components_Widget8Content;
Widget8.Highlight = components_Widget8Highlight;
Widget8.Subtitle = components_Widget8Subtitle;
Widget8.Title = components_Widget8Title;
/* harmony default export */ var components_Widget8 = (Widget8);
// CONCATENATED MODULE: ./src/modules/components/Widget9Degree.jsx

const Widget9Degree = createBasicComponent("sup", "widget9-degree", "Widget9Degree");
/* harmony default export */ var components_Widget9Degree = (Widget9Degree);
// CONCATENATED MODULE: ./src/modules/components/Widget9Display.jsx
var Widget9Display_jsx = external_react_default.a.createElement;

function Widget9Display_extends() { Widget9Display_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget9Display_extends.apply(this, arguments); }

function Widget9Display_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget9Display_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget9Display_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget9Display_defaultProps = {
  tag: "div"
};

const Widget9Display = props => {
  const {
    className,
    cssModule,
    size,
    tag: Tag
  } = props,
        attributes = Widget9Display_objectWithoutProperties(props, ["className", "cssModule", "size", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget9-display", {
    [`widget9-display-${size}`]: size
  }, className), cssModule);
  return Widget9Display_jsx(Tag, Widget9Display_extends({}, attributes, {
    className: classes
  }));
};

Widget9Display.defaultProps = Widget9Display_defaultProps;
/* harmony default export */ var components_Widget9Display = (Widget9Display);
// CONCATENATED MODULE: ./src/modules/components/Widget9Grid.jsx

const Widget9Grid = createBasicComponent("div", "widget9-grid", "Widget9Grid");
/* harmony default export */ var components_Widget9Grid = (Widget9Grid);
// CONCATENATED MODULE: ./src/modules/components/Widget9GridIcon.jsx

const Widget9GridIcon = createBasicComponent("div", "widget9-grid-icon", "Widget9GridIcon");
/* harmony default export */ var components_Widget9GridIcon = (Widget9GridIcon);
// CONCATENATED MODULE: ./src/modules/components/Widget9GridItem.jsx

const Widget9GridItem = createBasicComponent("div", "widget9-grid-item", "Widget9GridItem");
/* harmony default export */ var components_Widget9GridItem = (Widget9GridItem);
// CONCATENATED MODULE: ./src/modules/components/Widget9GridText.jsx

const Widget9GridText = createBasicComponent("span", "widget9-grid-text", "Widget9GridText");
/* harmony default export */ var components_Widget9GridText = (Widget9GridText);
// CONCATENATED MODULE: ./src/modules/components/Widget9Icon.jsx

const Widget9Icon = createBasicComponent("span", "widget9-icon", "Widget9Icon");
/* harmony default export */ var components_Widget9Icon = (Widget9Icon);
// CONCATENATED MODULE: ./src/modules/components/Widget9List.jsx

const Widget9List = createBasicComponent("div", "widget9-list", "Widget9List");
/* harmony default export */ var components_Widget9List = (Widget9List);
// CONCATENATED MODULE: ./src/modules/components/Widget9ListAddon.jsx

const Widget9ListAddon = createBasicComponent("div", "widget9-list-addon", "Widget9ListAddon");
/* harmony default export */ var components_Widget9ListAddon = (Widget9ListAddon);
// CONCATENATED MODULE: ./src/modules/components/Widget9ListItem.jsx

const Widget9ListItem = createBasicComponent("div", "widget9-list-item", "Widget9ListItem");
/* harmony default export */ var components_Widget9ListItem = (Widget9ListItem);
// CONCATENATED MODULE: ./src/modules/components/Widget9ListText.jsx

const Widget9ListText = createBasicComponent("span", "widget9-list-text", "Widget9ListText");
/* harmony default export */ var components_Widget9ListText = (Widget9ListText);
// CONCATENATED MODULE: ./src/modules/components/Widget9Text.jsx

const Widget9Text = createBasicComponent("h3", "widget9-text", "Widget9Text");
/* harmony default export */ var components_Widget9Text = (Widget9Text);
// CONCATENATED MODULE: ./src/modules/components/Widget9.jsx













const Widget9 = createBasicComponent("div", "widget9", "Widget9");
Widget9.Degree = components_Widget9Degree;
Widget9.Display = components_Widget9Display;
Widget9.Grid = components_Widget9Grid;
Widget9.GridIcon = components_Widget9GridIcon;
Widget9.GridItem = components_Widget9GridItem;
Widget9.GridText = components_Widget9GridText;
Widget9.Icon = components_Widget9Icon;
Widget9.List = components_Widget9List;
Widget9.ListAddon = components_Widget9ListAddon;
Widget9.ListItem = components_Widget9ListItem;
Widget9.ListText = components_Widget9ListText;
Widget9.Text = components_Widget9Text;
/* harmony default export */ var components_Widget9 = (Widget9);
// CONCATENATED MODULE: ./src/modules/components/Widget10Addon.jsx

const Widget10Addon = createBasicComponent("div", "widget10-addon", "Widget10Addon");
/* harmony default export */ var components_Widget10Addon = (Widget10Addon);
// CONCATENATED MODULE: ./src/modules/components/Widget10Content.jsx

const Widget10Content = createBasicComponent("div", "widget10-content", "Widget10Content");
/* harmony default export */ var components_Widget10Content = (Widget10Content);
// CONCATENATED MODULE: ./src/modules/components/Widget10Item.jsx

const Widget10Item = createBasicComponent("div", "widget10-item", "Widget10Item");
/* harmony default export */ var components_Widget10Item = (Widget10Item);
// CONCATENATED MODULE: ./src/modules/components/Widget10Subtitle.jsx

const Widget10Subtitle = createBasicComponent("span", "widget10-subtitle", "Widget10Subtitle");
/* harmony default export */ var components_Widget10Subtitle = (Widget10Subtitle);
// CONCATENATED MODULE: ./src/modules/components/Widget10Title.jsx

const Widget10Title = createBasicComponent("h2", "widget10-title", "Widget10Title");
/* harmony default export */ var components_Widget10Title = (Widget10Title);
// CONCATENATED MODULE: ./src/modules/components/Widget10.jsx
var Widget10_jsx = external_react_default.a.createElement;

function Widget10_extends() { Widget10_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget10_extends.apply(this, arguments); }

function Widget10_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget10_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget10_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Widget10_defaultProps = {
  tag: "div"
};

const Widget10 = props => {
  const {
    className,
    cssModule,
    vertical,
    tag: Tag
  } = props,
        attributes = Widget10_objectWithoutProperties(props, ["className", "cssModule", "vertical", "tag"]);

  let verticalClass;

  if (typeof vertical === "string") {
    verticalClass = `widget10-vertical-${vertical}`;
  } else if (typeof vertical === "boolean") {
    verticalClass = "widget10-vertical";
  } else {
    verticalClass = null;
  }

  const classes = mapToCssModules(external_classnames_default()("widget10", verticalClass, className), cssModule);
  return Widget10_jsx(Tag, Widget10_extends({}, attributes, {
    className: classes
  }));
};

Widget10.defaultProps = Widget10_defaultProps;
Widget10.Addon = components_Widget10Addon;
Widget10.Content = components_Widget10Content;
Widget10.Item = components_Widget10Item;
Widget10.Subtitle = components_Widget10Subtitle;
Widget10.Title = components_Widget10Title;
/* harmony default export */ var components_Widget10 = (Widget10);
// CONCATENATED MODULE: ./src/modules/components/Widget11.jsx
var Widget11_jsx = external_react_default.a.createElement;

function Widget11_extends() { Widget11_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget11_extends.apply(this, arguments); }

function Widget11_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget11_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget11_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget11_defaultProps = {
  tag: "div"
};

const Widget11 = props => {
  const {
    className,
    cssModule,
    bottom,
    top,
    tag: Tag
  } = props,
        attributes = Widget11_objectWithoutProperties(props, ["className", "cssModule", "bottom", "top", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget11", {
    "widget11-bottom": bottom,
    "widget11-top": top
  }, className), cssModule);
  return Widget11_jsx(Tag, Widget11_extends({}, attributes, {
    className: classes
  }));
};

Widget11.defaultProps = Widget11_defaultProps;
/* harmony default export */ var components_Widget11 = (Widget11);
// CONCATENATED MODULE: ./src/modules/components/Widget12.jsx
var Widget12_jsx = external_react_default.a.createElement;

function Widget12_extends() { Widget12_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget12_extends.apply(this, arguments); }

function Widget12_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget12_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget12_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Widget12 = props => {
  const {
    className,
    small,
    cssModule
  } = props,
        attributes = Widget12_objectWithoutProperties(props, ["className", "small", "cssModule"]);

  const classes = mapToCssModules(external_classnames_default()(small ? "widget12-sm" : "widget12", className), cssModule);
  return Widget12_jsx(components_Avatar, Widget12_extends({}, attributes, {
    className: classes
  }));
};

/* harmony default export */ var components_Widget12 = (Widget12);
// CONCATENATED MODULE: ./src/modules/components/Widget13Avatar.jsx
var Widget13Avatar_jsx = external_react_default.a.createElement;

function Widget13Avatar_extends() { Widget13Avatar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget13Avatar_extends.apply(this, arguments); }

function Widget13Avatar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget13Avatar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget13Avatar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Widget13Avatar = props => {
  const {
    className,
    cssModule,
    tag
  } = props,
        attributes = Widget13Avatar_objectWithoutProperties(props, ["className", "cssModule", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget13-avatar", className), cssModule);
  return Widget13Avatar_jsx(components_Avatar, Widget13Avatar_extends({}, attributes, {
    tag: "span",
    className: classes
  }));
};

/* harmony default export */ var components_Widget13Avatar = (Widget13Avatar);
// CONCATENATED MODULE: ./src/modules/components/Widget13Text.jsx

const Widget13Text = createBasicComponent("span", "widget13-text", "Widget13Text");
/* harmony default export */ var components_Widget13Text = (Widget13Text);
// CONCATENATED MODULE: ./src/modules/components/Widget13.jsx
var Widget13_jsx = external_react_default.a.createElement;

function Widget13_extends() { Widget13_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget13_extends.apply(this, arguments); }

function Widget13_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget13_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget13_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Widget13 = props => {
  const {
    className,
    cssModule,
    dropdown
  } = props,
        attributes = Widget13_objectWithoutProperties(props, ["className", "cssModule", "dropdown"]);

  const Tag = dropdown ? components_Dropdown.Toggle : components_Button;
  const classes = mapToCssModules(external_classnames_default()("widget13", className), cssModule);
  return Widget13_jsx(Tag, Widget13_extends({}, attributes, {
    className: classes
  }));
};

Widget13.Avatar = components_Widget13Avatar;
Widget13.Text = components_Widget13Text;
/* harmony default export */ var components_Widget13 = (Widget13);
// CONCATENATED MODULE: ./src/modules/components/Widget14.jsx
var Widget14_jsx = external_react_default.a.createElement;

function Widget14_extends() { Widget14_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Widget14_extends.apply(this, arguments); }

function Widget14_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Widget14_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Widget14_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Widget14_defaultProps = {
  tag: "div"
};

const Widget14 = props => {
  const {
    className,
    cssModule,
    children,
    icon,
    tag: Tag
  } = props,
        attributes = Widget14_objectWithoutProperties(props, ["className", "cssModule", "children", "icon", "tag"]);

  const classes = mapToCssModules(external_classnames_default()("widget14", className), cssModule);
  const iconClasses = mapToCssModules(external_classnames_default()("widget14-icon", className), cssModule);
  const textClasses = mapToCssModules(external_classnames_default()("widget14-content", className), cssModule);
  return Widget14_jsx(Tag, Widget14_extends({}, attributes, {
    className: classes
  }), Widget14_jsx("div", {
    className: iconClasses
  }, icon), Widget14_jsx("div", {
    className: textClasses
  }, children));
};

Widget14.defaultProps = Widget14_defaultProps;
/* harmony default export */ var components_Widget14 = (Widget14);
// CONCATENATED MODULE: ./src/modules/components/Widget15.jsx

const Widget15 = createBasicComponent("h1", "widget15", "Widget15");
/* harmony default export */ var components_Widget15 = (Widget15);
// CONCATENATED MODULE: ./src/modules/components/index.jsx







































































/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "kh5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panely_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jwaz");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OFr4");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_layout_withLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tCCL");
/* harmony import */ var components_firebase_firebaseWithAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("qGWM");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Register2Page() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, "Register 2 | Panely")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Container */ "u"], {
    fluid: true
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Row */ "S"], {
    noGutters: true,
    className: "align-items-center justify-content-center h-100"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Col */ "s"], {
    lg: "8",
    xl: "6"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Portlet */ "P"], {
    className: "overflow-hidden"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Row */ "S"], {
    noGutters: true
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Col */ "s"], {
    md: "6"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Portlet */ "P"].Body, {
    className: "d-flex flex-column justify-content-center align-items-start h-100 bg-primary text-white"
  }, __jsx("h2", null, "Welcome back!"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, temporibus, repudiandae. Voluptate tempore, expedita placeat rem labore iste eveniet ratione."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/pages/login/login-2"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "i"], {
    pill: true,
    variant: "outline-light",
    size: "lg",
    width: "widest"
  }, "Login")))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Col */ "s"], {
    md: "6"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Portlet */ "P"].Body, {
    className: "h-100"
  }, __jsx("div", {
    className: "d-flex justify-content-center mb-4"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "i"], {
    pill: true,
    variant: "label-primary"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebook"],
    className: "mr-2"
  }), "Facebook"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "i"], {
    pill: true,
    variant: "label-info",
    className: "mx-2"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGoogle"],
    className: "mr-2"
  }), "Google"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "i"], {
    pill: true,
    variant: "label-danger",
    className: "mx-2"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPinterest"],
    className: "mr-2"
  }), "Pinterest")), __jsx(Register2Form, null)))))))));
}

function Register2Form() {
  // Define Yup schema for form validation
  const schema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(5, "Please enter at least 5 characters").required("Please enter your lastname"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(5, "Please enter at least 5 characters").required("Please enter your lastname"),
    email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email("Your email is not valid").required("Please enter your email"),
    password1: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(6, "Please enter at least 6 characters").required("Please provide your password"),
    password2: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(6, "Please enter at least 6 characters").oneOf([yup__WEBPACK_IMPORTED_MODULE_6__["ref"]("password1")], "Your password not match").required("Please repeat your password"),
    agreement: yup__WEBPACK_IMPORTED_MODULE_6__["boolean"]().oneOf([true], "You must accept the agreement")
  });
  const {
    control,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])({
    // Apply Yup as resolver for react-hook-form
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_4__["yupResolver"])(schema),
    // Define the default values for all input forms
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      agreement: false
    }
  }); // Handle form submit event

  const onSubmit = data => {
    console.log(data);
  };

  return __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"], {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Row */ "S"], null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Col */ "s"], {
    xs: "6"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* FloatLabel */ "z"], {
    size: "lg"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    as: _panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "E"],
    size: "lg",
    type: "text",
    id: "first-name",
    name: "firstName",
    control: control,
    invalid: Boolean(errors.firstName),
    placeholder: "Insert your firstname"
  }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Label */ "G"], {
    for: "first-name"
  }, "First name"), errors.firstName && __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Feedback, {
    children: errors.firstName.message
  })))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Col */ "s"], {
    xs: "6"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* FloatLabel */ "z"], {
    size: "lg"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    as: _panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "E"],
    size: "lg",
    type: "text",
    id: "last-name",
    name: "lastName",
    control: control,
    invalid: Boolean(errors.lastName),
    placeholder: "Insert your lastname"
  }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Label */ "G"], {
    for: "last-name"
  }, "last name"), errors.lastName && __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Feedback, {
    children: errors.lastName.message
  }))))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* FloatLabel */ "z"], {
    size: "lg"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    as: _panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "E"],
    type: "email",
    id: "email",
    name: "email",
    size: "lg",
    control: control,
    invalid: Boolean(errors.email),
    placeholder: "Please insert your email"
  }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Label */ "G"], {
    for: "email"
  }, "Email"), errors.email && __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Feedback, {
    children: errors.email.message
  }))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* FloatLabel */ "z"], {
    size: "lg"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    as: _panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "E"],
    size: "lg",
    type: "password",
    id: "password1",
    name: "password1",
    control: control,
    invalid: Boolean(errors.password1),
    placeholder: "Please provide your password"
  }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Label */ "G"], {
    for: "password1"
  }, "Password"), errors.password1 && __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Feedback, {
    children: errors.password1.message
  }))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, null, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* FloatLabel */ "z"], {
    size: "lg"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    as: _panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "E"],
    size: "lg",
    type: "password",
    id: "password2",
    name: "password2",
    control: control,
    invalid: Boolean(errors.password2),
    placeholder: "Repeat your password"
  }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Label */ "G"], {
    for: "password2"
  }, "Confirm password"), errors.password2 && __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Feedback, {
    children: errors.password2.message
  }))), __jsx("div", {
    className: "d-flex align-items-center justify-content-between mb-4"
  }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Form */ "B"].Group, {
    className: "mb-0"
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    control: control,
    name: "agreement",
    render: ({
      onChange,
      onBlur,
      value,
      name,
      ref
    }) => __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* CustomInput */ "v"], {
      type: "checkbox",
      size: "lg",
      id: "agreement",
      label: "Accept agreement",
      invalid: Boolean(errors.agreement),
      onBlur: onBlur,
      onChange: e => onChange(e.target.checked),
      checked: value,
      innerRef: ref
    })
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#"
  }, "Forgot password?")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "i"], {
    block: true,
    type: "submit",
    variant: "label-primary",
    size: "lg"
  }, "Register"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(components_firebase_firebaseWithAuth__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(components_layout_withLayout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Register2Page, "blank")));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pYII":
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "qGWM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0ci1");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_firebase_firebaseVerifyCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qP+2");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var config_page_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s6m4");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function firebaseWithAuth(AuthComponent) {
  class Authentication extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}; // Get initial properties

      if (AuthComponent.getInitialProps) {
        initialProps = await AuthComponent.getInitialProps(ctx);
      } // Verify cookie


      const result = await Object(components_firebase_firebaseVerifyCookie__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ctx); // Check cookie is valid or not

      if (!result) {
        // Redirect to login page
        if (ctx.res) {
          ctx.res.writeHead(302, {
            Location: config_page_config__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].loginPagePath
          });
          ctx.res.end();
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(config_page_config__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].loginPagePath);
        }

        return _objectSpread(_objectSpread({}, initialProps), {}, {
          firebase: null
        });
      }

      return _objectSpread(_objectSpread({}, initialProps), {}, {
        firebase: result
      });
    }

    componentDidMount() {
      this.props.firebaseChange(this.props.firebase);
    }

    render() {
      return __jsx(AuthComponent, this.props);
    }

  }

  function mapDispatchToProps(dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      firebaseChange: store_actions__WEBPACK_IMPORTED_MODULE_2__[/* firebaseChange */ "d"]
    }, dispatch);
  }

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(Authentication);
}

/* harmony default export */ __webpack_exports__["a"] = (firebaseWithAuth);

/***/ }),

/***/ "qP+2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dN/k");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kG9d");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);




async function firebaseVerifyCookie(ctx) {
  // Get cookies
  const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(ctx); // Get absolute origin url

  const {
    origin
  } = next_absolute_url__WEBPACK_IMPORTED_MODULE_0___default()(ctx.req); // Try to verify firebase token via API

  return await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(origin + "/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: cookies.token
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return false;
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (firebaseVerifyCookie);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s6m4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Page Configuration
 * you can customize general page configuration in the object below
 */
const PAGE = {
  loginPagePath: "/login",
  dashboardPagePath: "/",
  favicon: "/images/favicon.ico",
  layout: {
    enableAside: true,
    minimizedAside: false,
    enableHeader: true,
    enableFooter: true,
    enableScrolltop: true,
    enableFloatButton: true
  }
};
/* harmony default export */ __webpack_exports__["a"] = (PAGE);

/***/ }),

/***/ "tCCL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function withLayout(Page, layout = "default") {
  class LayoutWrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      let initialProps = {}; // Get initial properties

      if (Page.getInitialProps) {
        initialProps = await Page.getInitialProps(ctx);
      }

      return _objectSpread(_objectSpread({}, initialProps), {}, {
        layout
      });
    }

    render() {
      return __jsx(Page, this.props);
    }

  }

  return LayoutWrapper;
}

/* harmony default export */ __webpack_exports__["a"] = (withLayout);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });