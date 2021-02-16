webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  'use strict';

  var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
  var vary = __webpack_require__(/*! vary */ "./node_modules/vary/index.js");

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),

/***/ "./node_modules/vary/index.js":
/*!************************************!*\
  !*** ./node_modules/vary/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = vary
module.exports.append = append

/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/

/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
 * @public
 */

function append (header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required')
  }

  if (!field) {
    throw new TypeError('field argument is required')
  }

  // get fields array
  var fields = !Array.isArray(field)
    ? parse(String(field))
    : field

  // assert on invalid field names
  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError('field argument contains an invalid header name')
    }
  }

  // existing, unspecified vary
  if (header === '*') {
    return header
  }

  // enumerate current values
  var val = header
  var vals = parse(header.toLowerCase())

  // unspecified vary
  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*'
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase()

    // append value (case-preserving)
    if (vals.indexOf(fld) === -1) {
      vals.push(fld)
      val = val
        ? val + ', ' + fields[i]
        : fields[i]
    }
  }

  return val
}

/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
 * @private
 */

function parse (header) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(header.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(header.substring(start, end))

  return list
}

/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
 * @public
 */

function vary (res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required')
  }

  // get existing header
  var val = res.getHeader('Vary') || ''
  var header = Array.isArray(val)
    ? val.join(', ')
    : String(val)

  // set new header
  if ((val = append(header, field))) {
    res.setHeader('Vary', val)
  }
}


/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "./node_modules/cors/lib/index.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);




var API_URL = "http://www.sgerd.com/api/usuario/";

var register = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(API_URL + "registrousuario", {
              email: email,
              password: password
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(API_URL + "iniciarsesion", {
              email: email,
              password: password
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var currenUser = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(API_URL + "usuarioactual", Object(cors__WEBPACK_IMPORTED_MODULE_3__["cors"])());

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function currenUser() {
    return _ref3.apply(this, arguments);
  };
}();

var logout = function logout() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(API_URL + "cerrarsesion");
};

/* harmony default export */ __webpack_exports__["default"] = ({
  register: register,
  login: login,
  currenUser: currenUser,
  logout: logout
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NvcnMvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJjdXJyZW5Vc2VyIiwiZ2V0IiwiY29ycyIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdGQUFlO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQywwQ0FBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN09EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLG1DQUFoQjs7QUFFQSxJQUFNQyxRQUFRO0FBQUEsOExBQUcsaUJBQU9DLEtBQVAsRUFBY0MsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdMLE9BQU8sR0FBRyxpQkFBckIsRUFBd0M7QUFDN0RFLG1CQUFLLEVBQUxBLEtBRDZEO0FBRTdEQyxzQkFBUSxFQUFSQTtBQUY2RCxhQUF4QyxDQURSOztBQUFBO0FBQ1RHLG9CQURTO0FBQUEsNkNBS1JBLFFBQVEsQ0FBQ0MsSUFMRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSTixRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQ7O0FBUUEsSUFBTU8sS0FBSztBQUFBLCtMQUFHLGtCQUFPTixLQUFQLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDV0MsNENBQUssQ0FDekJDLElBRG9CLENBQ2ZMLE9BQU8sR0FBRyxlQURLLEVBQ1k7QUFDL0JFLG1CQUFLLEVBQUxBLEtBRCtCO0FBRS9CQyxzQkFBUSxFQUFSQTtBQUYrQixhQURaLENBRFg7O0FBQUE7QUFDTkcsb0JBRE07QUFBQSw4Q0FNTEEsUUFBUSxDQUFDQyxJQU5KOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUxDLEtBQUs7QUFBQTtBQUFBO0FBQUEsR0FBWDs7QUFTQSxJQUFNQyxVQUFVO0FBQUEsK0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTUwsNENBQUssQ0FDekJNLEdBRG9CLENBQ2hCVixPQUFPLEdBQUcsZUFETSxFQUNXVyxpREFBSSxFQURmLENBRE47O0FBQUE7QUFDWEwsb0JBRFc7QUFBQSw4Q0FHVkEsUUFBUSxDQUFDQyxJQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZFLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBTUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUFPUiw0Q0FBSyxDQUFDQyxJQUFOLENBQVdMLE9BQU8sR0FBRyxjQUFyQixDQUFQO0FBQ0QsQ0FGRDs7QUFJZTtBQUNiQyxVQUFRLEVBQVJBLFFBRGE7QUFFYk8sT0FBSyxFQUFMQSxLQUZhO0FBR2JDLFlBQVUsRUFBVkEsVUFIYTtBQUliRyxRQUFNLEVBQU5BO0FBSmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMWVhN2Y3ODlmZmFlY2I0YjE1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbiAgdmFyIHZhcnkgPSByZXF1aXJlKCd2YXJ5Jyk7XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIG9yaWdpbjogJyonLFxuICAgIG1ldGhvZHM6ICdHRVQsSEVBRCxQVVQsUEFUQ0gsUE9TVCxERUxFVEUnLFxuICAgIHByZWZsaWdodENvbnRpbnVlOiBmYWxzZSxcbiAgICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjA0XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNTdHJpbmcocykge1xuICAgIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgfHwgcyBpbnN0YW5jZW9mIFN0cmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3JpZ2luQWxsb3dlZChvcmlnaW4sIGFsbG93ZWRPcmlnaW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhbGxvd2VkT3JpZ2luKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxvd2VkT3JpZ2luLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpc09yaWdpbkFsbG93ZWQob3JpZ2luLCBhbGxvd2VkT3JpZ2luW2ldKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhhbGxvd2VkT3JpZ2luKSkge1xuICAgICAgcmV0dXJuIG9yaWdpbiA9PT0gYWxsb3dlZE9yaWdpbjtcbiAgICB9IGVsc2UgaWYgKGFsbG93ZWRPcmlnaW4gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiBhbGxvd2VkT3JpZ2luLnRlc3Qob3JpZ2luKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhYWxsb3dlZE9yaWdpbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25maWd1cmVPcmlnaW4ob3B0aW9ucywgcmVxKSB7XG4gICAgdmFyIHJlcXVlc3RPcmlnaW4gPSByZXEuaGVhZGVycy5vcmlnaW4sXG4gICAgICBoZWFkZXJzID0gW10sXG4gICAgICBpc0FsbG93ZWQ7XG5cbiAgICBpZiAoIW9wdGlvbnMub3JpZ2luIHx8IG9wdGlvbnMub3JpZ2luID09PSAnKicpIHtcbiAgICAgIC8vIGFsbG93IGFueSBvcmlnaW5cbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLFxuICAgICAgICB2YWx1ZTogJyonXG4gICAgICB9XSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhvcHRpb25zLm9yaWdpbikpIHtcbiAgICAgIC8vIGZpeGVkIG9yaWdpblxuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsXG4gICAgICAgIHZhbHVlOiBvcHRpb25zLm9yaWdpblxuICAgICAgfV0pO1xuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ1ZhcnknLFxuICAgICAgICB2YWx1ZTogJ09yaWdpbidcbiAgICAgIH1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNBbGxvd2VkID0gaXNPcmlnaW5BbGxvd2VkKHJlcXVlc3RPcmlnaW4sIG9wdGlvbnMub3JpZ2luKTtcbiAgICAgIC8vIHJlZmxlY3Qgb3JpZ2luXG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IGlzQWxsb3dlZCA/IHJlcXVlc3RPcmlnaW4gOiBmYWxzZVxuICAgICAgfV0pO1xuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ1ZhcnknLFxuICAgICAgICB2YWx1ZTogJ09yaWdpbidcbiAgICAgIH1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZU1ldGhvZHMob3B0aW9ucykge1xuICAgIHZhciBtZXRob2RzID0gb3B0aW9ucy5tZXRob2RzO1xuICAgIGlmIChtZXRob2RzLmpvaW4pIHtcbiAgICAgIG1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMuam9pbignLCcpOyAvLyAubWV0aG9kcyBpcyBhbiBhcnJheSwgc28gdHVybiBpdCBpbnRvIGEgc3RyaW5nXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJyxcbiAgICAgIHZhbHVlOiBtZXRob2RzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZUNyZWRlbnRpYWxzKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5jcmVkZW50aWFscyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLFxuICAgICAgICB2YWx1ZTogJ3RydWUnXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZUFsbG93ZWRIZWFkZXJzKG9wdGlvbnMsIHJlcSkge1xuICAgIHZhciBhbGxvd2VkSGVhZGVycyA9IG9wdGlvbnMuYWxsb3dlZEhlYWRlcnMgfHwgb3B0aW9ucy5oZWFkZXJzO1xuICAgIHZhciBoZWFkZXJzID0gW107XG5cbiAgICBpZiAoIWFsbG93ZWRIZWFkZXJzKSB7XG4gICAgICBhbGxvd2VkSGVhZGVycyA9IHJlcS5oZWFkZXJzWydhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LWhlYWRlcnMnXTsgLy8gLmhlYWRlcnMgd2Fzbid0IHNwZWNpZmllZCwgc28gcmVmbGVjdCB0aGUgcmVxdWVzdCBoZWFkZXJzXG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnVmFyeScsXG4gICAgICAgIHZhbHVlOiAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJ1xuICAgICAgfV0pO1xuICAgIH0gZWxzZSBpZiAoYWxsb3dlZEhlYWRlcnMuam9pbikge1xuICAgICAgYWxsb3dlZEhlYWRlcnMgPSBhbGxvd2VkSGVhZGVycy5qb2luKCcsJyk7IC8vIC5oZWFkZXJzIGlzIGFuIGFycmF5LCBzbyB0dXJuIGl0IGludG8gYSBzdHJpbmdcbiAgICB9XG4gICAgaWYgKGFsbG93ZWRIZWFkZXJzICYmIGFsbG93ZWRIZWFkZXJzLmxlbmd0aCkge1xuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICB2YWx1ZTogYWxsb3dlZEhlYWRlcnNcbiAgICAgIH1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZUV4cG9zZWRIZWFkZXJzKG9wdGlvbnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG9wdGlvbnMuZXhwb3NlZEhlYWRlcnM7XG4gICAgaWYgKCFoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMuam9pbikge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuam9pbignLCcpOyAvLyAuaGVhZGVycyBpcyBhbiBhcnJheSwgc28gdHVybiBpdCBpbnRvIGEgc3RyaW5nXG4gICAgfVxuICAgIGlmIChoZWFkZXJzICYmIGhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycycsXG4gICAgICAgIHZhbHVlOiBoZWFkZXJzXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZU1heEFnZShvcHRpb25zKSB7XG4gICAgdmFyIG1heEFnZSA9ICh0eXBlb2Ygb3B0aW9ucy5tYXhBZ2UgPT09ICdudW1iZXInIHx8IG9wdGlvbnMubWF4QWdlKSAmJiBvcHRpb25zLm1heEFnZS50b1N0cmluZygpXG4gICAgaWYgKG1heEFnZSAmJiBtYXhBZ2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1NYXgtQWdlJyxcbiAgICAgICAgdmFsdWU6IG1heEFnZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUhlYWRlcnMoaGVhZGVycywgcmVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBoZWFkZXJzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdmFyIGhlYWRlciA9IGhlYWRlcnNbaV07XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgICAgICBhcHBseUhlYWRlcnMoaGVhZGVyLCByZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGhlYWRlci5rZXkgPT09ICdWYXJ5JyAmJiBoZWFkZXIudmFsdWUpIHtcbiAgICAgICAgICB2YXJ5KHJlcywgaGVhZGVyLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoZWFkZXIudmFsdWUpIHtcbiAgICAgICAgICByZXMuc2V0SGVhZGVyKGhlYWRlci5rZXksIGhlYWRlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3JzKG9wdGlvbnMsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdmFyIGhlYWRlcnMgPSBbXSxcbiAgICAgIG1ldGhvZCA9IHJlcS5tZXRob2QgJiYgcmVxLm1ldGhvZC50b1VwcGVyQ2FzZSAmJiByZXEubWV0aG9kLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAobWV0aG9kID09PSAnT1BUSU9OUycpIHtcbiAgICAgIC8vIHByZWZsaWdodFxuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZU9yaWdpbihvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVDcmVkZW50aWFscyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVNZXRob2RzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZUFsbG93ZWRIZWFkZXJzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZU1heEFnZShvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVFeHBvc2VkSGVhZGVycyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGFwcGx5SGVhZGVycyhoZWFkZXJzLCByZXMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5wcmVmbGlnaHRDb250aW51ZSkge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTYWZhcmkgKGFuZCBwb3RlbnRpYWxseSBvdGhlciBicm93c2VycykgbmVlZCBjb250ZW50LWxlbmd0aCAwLFxuICAgICAgICAvLyAgIGZvciAyMDQgb3IgdGhleSBqdXN0IGhhbmcgd2FpdGluZyBmb3IgYSBib2R5XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5vcHRpb25zU3VjY2Vzc1N0YXR1cztcbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1MZW5ndGgnLCAnMCcpO1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFjdHVhbCByZXNwb25zZVxuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZU9yaWdpbihvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVDcmVkZW50aWFscyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGhlYWRlcnMucHVzaChjb25maWd1cmVFeHBvc2VkSGVhZGVycyhvcHRpb25zLCByZXEpKTtcbiAgICAgIGFwcGx5SGVhZGVycyhoZWFkZXJzLCByZXMpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1pZGRsZXdhcmVXcmFwcGVyKG8pIHtcbiAgICAvLyBpZiBvcHRpb25zIGFyZSBzdGF0aWMgKGVpdGhlciB2aWEgZGVmYXVsdHMgb3IgY3VzdG9tIG9wdGlvbnMgcGFzc2VkIGluKSwgd3JhcCBpbiBhIGZ1bmN0aW9uXG4gICAgdmFyIG9wdGlvbnNDYWxsYmFjayA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zQ2FsbGJhY2sgPSBvO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zQ2FsbGJhY2sgPSBmdW5jdGlvbiAocmVxLCBjYikge1xuICAgICAgICBjYihudWxsLCBvKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvcnNNaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBvcHRpb25zQ2FsbGJhY2socmVxLCBmdW5jdGlvbiAoZXJyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNvcnNPcHRpb25zID0gYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgICAgdmFyIG9yaWdpbkNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICBpZiAoY29yc09wdGlvbnMub3JpZ2luICYmIHR5cGVvZiBjb3JzT3B0aW9ucy5vcmlnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9yaWdpbkNhbGxiYWNrID0gY29yc09wdGlvbnMub3JpZ2luO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29yc09wdGlvbnMub3JpZ2luKSB7XG4gICAgICAgICAgICBvcmlnaW5DYWxsYmFjayA9IGZ1bmN0aW9uIChvcmlnaW4sIGNiKSB7XG4gICAgICAgICAgICAgIGNiKG51bGwsIGNvcnNPcHRpb25zLm9yaWdpbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcmlnaW5DYWxsYmFjaykge1xuICAgICAgICAgICAgb3JpZ2luQ2FsbGJhY2socmVxLmhlYWRlcnMub3JpZ2luLCBmdW5jdGlvbiAoZXJyMiwgb3JpZ2luKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIyIHx8ICFvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICBuZXh0KGVycjIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvcnNPcHRpb25zLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgICAgICAgICBjb3JzKGNvcnNPcHRpb25zLCByZXEsIHJlcywgbmV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gY2FuIHBhc3MgZWl0aGVyIGFuIG9wdGlvbnMgaGFzaCwgYW4gb3B0aW9ucyBkZWxlZ2F0ZSwgb3Igbm90aGluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IG1pZGRsZXdhcmVXcmFwcGVyO1xuXG59KCkpO1xuIiwiLyohXG4gKiB2YXJ5XG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE3IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhcnlcbm1vZHVsZS5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZFxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1uYW1lIGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1uYW1lICAgID0gdG9rZW5cbiAqIHRva2VuICAgICAgICAgPSAxKnRjaGFyXG4gKiB0Y2hhciAgICAgICAgID0gXCIhXCIgLyBcIiNcIiAvIFwiJFwiIC8gXCIlXCIgLyBcIiZcIiAvIFwiJ1wiIC8gXCIqXCJcbiAqICAgICAgICAgICAgICAgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgLyBcIl5cIiAvIFwiX1wiIC8gXCJgXCIgLyBcInxcIiAvIFwiflwiXG4gKiAgICAgICAgICAgICAgIC8gRElHSVQgLyBBTFBIQVxuICogICAgICAgICAgICAgICA7IGFueSBWQ0hBUiwgZXhjZXB0IGRlbGltaXRlcnNcbiAqL1xuXG52YXIgRklFTERfTkFNRV9SRUdFWFAgPSAvXlshIyQlJicqK1xcLS5eX2B8fjAtOUEtWmEtel0rJC9cblxuLyoqXG4gKiBBcHBlbmQgYSBmaWVsZCB0byBhIHZhcnkgaGVhZGVyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGFwcGVuZCAoaGVhZGVyLCBmaWVsZCkge1xuICBpZiAodHlwZW9mIGhlYWRlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdoZWFkZXIgYXJndW1lbnQgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKCFmaWVsZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZpZWxkIGFyZ3VtZW50IGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIC8vIGdldCBmaWVsZHMgYXJyYXlcbiAgdmFyIGZpZWxkcyA9ICFBcnJheS5pc0FycmF5KGZpZWxkKVxuICAgID8gcGFyc2UoU3RyaW5nKGZpZWxkKSlcbiAgICA6IGZpZWxkXG5cbiAgLy8gYXNzZXJ0IG9uIGludmFsaWQgZmllbGQgbmFtZXNcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICBpZiAoIUZJRUxEX05BTUVfUkVHRVhQLnRlc3QoZmllbGRzW2pdKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZmllbGQgYXJndW1lbnQgY29udGFpbnMgYW4gaW52YWxpZCBoZWFkZXIgbmFtZScpXG4gICAgfVxuICB9XG5cbiAgLy8gZXhpc3RpbmcsIHVuc3BlY2lmaWVkIHZhcnlcbiAgaWYgKGhlYWRlciA9PT0gJyonKSB7XG4gICAgcmV0dXJuIGhlYWRlclxuICB9XG5cbiAgLy8gZW51bWVyYXRlIGN1cnJlbnQgdmFsdWVzXG4gIHZhciB2YWwgPSBoZWFkZXJcbiAgdmFyIHZhbHMgPSBwYXJzZShoZWFkZXIudG9Mb3dlckNhc2UoKSlcblxuICAvLyB1bnNwZWNpZmllZCB2YXJ5XG4gIGlmIChmaWVsZHMuaW5kZXhPZignKicpICE9PSAtMSB8fCB2YWxzLmluZGV4T2YoJyonKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJyonXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmbGQgPSBmaWVsZHNbaV0udG9Mb3dlckNhc2UoKVxuXG4gICAgLy8gYXBwZW5kIHZhbHVlIChjYXNlLXByZXNlcnZpbmcpXG4gICAgaWYgKHZhbHMuaW5kZXhPZihmbGQpID09PSAtMSkge1xuICAgICAgdmFscy5wdXNoKGZsZClcbiAgICAgIHZhbCA9IHZhbFxuICAgICAgICA/IHZhbCArICcsICcgKyBmaWVsZHNbaV1cbiAgICAgICAgOiBmaWVsZHNbaV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogUGFyc2UgYSB2YXJ5IGhlYWRlciBpbnRvIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSAoaGVhZGVyKSB7XG4gIHZhciBlbmQgPSAwXG4gIHZhciBsaXN0ID0gW11cbiAgdmFyIHN0YXJ0ID0gMFxuXG4gIC8vIGdhdGhlciB0b2tlbnNcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhlYWRlci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHN3aXRjaCAoaGVhZGVyLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMHgyMDogLyogICAqL1xuICAgICAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgICAgIHN0YXJ0ID0gZW5kID0gaSArIDFcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAweDJjOiAvKiAsICovXG4gICAgICAgIGxpc3QucHVzaChoZWFkZXIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKVxuICAgICAgICBzdGFydCA9IGVuZCA9IGkgKyAxXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbmQgPSBpICsgMVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpbmFsIHRva2VuXG4gIGxpc3QucHVzaChoZWFkZXIuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKVxuXG4gIHJldHVybiBsaXN0XG59XG5cbi8qKlxuICogTWFyayB0aGF0IGEgcmVxdWVzdCBpcyB2YXJpZWQgb24gYSBoZWFkZXIgZmllbGQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlc1xuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGZpZWxkXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdmFyeSAocmVzLCBmaWVsZCkge1xuICBpZiAoIXJlcyB8fCAhcmVzLmdldEhlYWRlciB8fCAhcmVzLnNldEhlYWRlcikge1xuICAgIC8vIHF1YWNrIHF1YWNrXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVzIGFyZ3VtZW50IGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIC8vIGdldCBleGlzdGluZyBoZWFkZXJcbiAgdmFyIHZhbCA9IHJlcy5nZXRIZWFkZXIoJ1ZhcnknKSB8fCAnJ1xuICB2YXIgaGVhZGVyID0gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgPyB2YWwuam9pbignLCAnKVxuICAgIDogU3RyaW5nKHZhbClcblxuICAvLyBzZXQgbmV3IGhlYWRlclxuICBpZiAoKHZhbCA9IGFwcGVuZChoZWFkZXIsIGZpZWxkKSkpIHtcbiAgICByZXMuc2V0SGVhZGVyKCdWYXJ5JywgdmFsKVxuICB9XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7Y29yc30gZnJvbSBcImNvcnNcIlxyXG5cclxuY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL3d3dy5zZ2VyZC5jb20vYXBpL3VzdWFyaW8vXCI7XHJcblxyXG5jb25zdCByZWdpc3RlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoQVBJX1VSTCArIFwicmVnaXN0cm91c3VhcmlvXCIsIHtcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXHJcbiAgICAucG9zdChBUElfVVJMICsgXCJpbmljaWFyc2VzaW9uXCIsIHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBjdXJyZW5Vc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoQVBJX1VSTCArIFwidXN1YXJpb2FjdHVhbFwiLCBjb3JzKCkpO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyBcImNlcnJhcnNlc2lvblwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICByZWdpc3RlcixcclxuICBsb2dpbixcclxuICBjdXJyZW5Vc2VyLFxyXG4gIGxvZ291dCxcclxufTsiXSwic291cmNlUm9vdCI6IiJ9