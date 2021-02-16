webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NvcnMvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJjdXJyZW5Vc2VyIiwiZ2V0IiwiY29ycyIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsZUFBZSxtQkFBTyxDQUFDLGdGQUFlO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQywwQ0FBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjExZWE3Zjc4OWZmYWVjYjRiMTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuICB2YXIgdmFyeSA9IHJlcXVpcmUoJ3ZhcnknKTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgb3JpZ2luOiAnKicsXG4gICAgbWV0aG9kczogJ0dFVCxIRUFELFBVVCxQQVRDSCxQT1NULERFTEVURScsXG4gICAgcHJlZmxpZ2h0Q29udGludWU6IGZhbHNlLFxuICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDRcbiAgfTtcblxuICBmdW5jdGlvbiBpc1N0cmluZyhzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJyB8fCBzIGluc3RhbmNlb2YgU3RyaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPcmlnaW5BbGxvd2VkKG9yaWdpbiwgYWxsb3dlZE9yaWdpbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFsbG93ZWRPcmlnaW4pKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbG93ZWRPcmlnaW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGlzT3JpZ2luQWxsb3dlZChvcmlnaW4sIGFsbG93ZWRPcmlnaW5baV0pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGFsbG93ZWRPcmlnaW4pKSB7XG4gICAgICByZXR1cm4gb3JpZ2luID09PSBhbGxvd2VkT3JpZ2luO1xuICAgIH0gZWxzZSBpZiAoYWxsb3dlZE9yaWdpbiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIGFsbG93ZWRPcmlnaW4udGVzdChvcmlnaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gISFhbGxvd2VkT3JpZ2luO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZU9yaWdpbihvcHRpb25zLCByZXEpIHtcbiAgICB2YXIgcmVxdWVzdE9yaWdpbiA9IHJlcS5oZWFkZXJzLm9yaWdpbixcbiAgICAgIGhlYWRlcnMgPSBbXSxcbiAgICAgIGlzQWxsb3dlZDtcblxuICAgIGlmICghb3B0aW9ucy5vcmlnaW4gfHwgb3B0aW9ucy5vcmlnaW4gPT09ICcqJykge1xuICAgICAgLy8gYWxsb3cgYW55IG9yaWdpblxuICAgICAgaGVhZGVycy5wdXNoKFt7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsXG4gICAgICAgIHZhbHVlOiAnKidcbiAgICAgIH1dKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKG9wdGlvbnMub3JpZ2luKSkge1xuICAgICAgLy8gZml4ZWQgb3JpZ2luXG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyxcbiAgICAgICAgdmFsdWU6IG9wdGlvbnMub3JpZ2luXG4gICAgICB9XSk7XG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnVmFyeScsXG4gICAgICAgIHZhbHVlOiAnT3JpZ2luJ1xuICAgICAgfV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0FsbG93ZWQgPSBpc09yaWdpbkFsbG93ZWQocmVxdWVzdE9yaWdpbiwgb3B0aW9ucy5vcmlnaW4pO1xuICAgICAgLy8gcmVmbGVjdCBvcmlnaW5cbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLFxuICAgICAgICB2YWx1ZTogaXNBbGxvd2VkID8gcmVxdWVzdE9yaWdpbiA6IGZhbHNlXG4gICAgICB9XSk7XG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnVmFyeScsXG4gICAgICAgIHZhbHVlOiAnT3JpZ2luJ1xuICAgICAgfV0pO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlTWV0aG9kcyhvcHRpb25zKSB7XG4gICAgdmFyIG1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHM7XG4gICAgaWYgKG1ldGhvZHMuam9pbikge1xuICAgICAgbWV0aG9kcyA9IG9wdGlvbnMubWV0aG9kcy5qb2luKCcsJyk7IC8vIC5tZXRob2RzIGlzIGFuIGFycmF5LCBzbyB0dXJuIGl0IGludG8gYSBzdHJpbmdcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLFxuICAgICAgdmFsdWU6IG1ldGhvZHNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlQ3JlZGVudGlhbHMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmNyZWRlbnRpYWxzID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsXG4gICAgICAgIHZhbHVlOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlQWxsb3dlZEhlYWRlcnMob3B0aW9ucywgcmVxKSB7XG4gICAgdmFyIGFsbG93ZWRIZWFkZXJzID0gb3B0aW9ucy5hbGxvd2VkSGVhZGVycyB8fCBvcHRpb25zLmhlYWRlcnM7XG4gICAgdmFyIGhlYWRlcnMgPSBbXTtcblxuICAgIGlmICghYWxsb3dlZEhlYWRlcnMpIHtcbiAgICAgIGFsbG93ZWRIZWFkZXJzID0gcmVxLmhlYWRlcnNbJ2FjY2Vzcy1jb250cm9sLXJlcXVlc3QtaGVhZGVycyddOyAvLyAuaGVhZGVycyB3YXNuJ3Qgc3BlY2lmaWVkLCBzbyByZWZsZWN0IHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAgICAgIGhlYWRlcnMucHVzaChbe1xuICAgICAgICBrZXk6ICdWYXJ5JyxcbiAgICAgICAgdmFsdWU6ICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LUhlYWRlcnMnXG4gICAgICB9XSk7XG4gICAgfSBlbHNlIGlmIChhbGxvd2VkSGVhZGVycy5qb2luKSB7XG4gICAgICBhbGxvd2VkSGVhZGVycyA9IGFsbG93ZWRIZWFkZXJzLmpvaW4oJywnKTsgLy8gLmhlYWRlcnMgaXMgYW4gYXJyYXksIHNvIHR1cm4gaXQgaW50byBhIHN0cmluZ1xuICAgIH1cbiAgICBpZiAoYWxsb3dlZEhlYWRlcnMgJiYgYWxsb3dlZEhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICBoZWFkZXJzLnB1c2goW3tcbiAgICAgICAga2V5OiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgIHZhbHVlOiBhbGxvd2VkSGVhZGVyc1xuICAgICAgfV0pO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlRXhwb3NlZEhlYWRlcnMob3B0aW9ucykge1xuICAgIHZhciBoZWFkZXJzID0gb3B0aW9ucy5leHBvc2VkSGVhZGVycztcbiAgICBpZiAoIWhlYWRlcnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycy5qb2luKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5qb2luKCcsJyk7IC8vIC5oZWFkZXJzIGlzIGFuIGFycmF5LCBzbyB0dXJuIGl0IGludG8gYSBzdHJpbmdcbiAgICB9XG4gICAgaWYgKGhlYWRlcnMgJiYgaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzJyxcbiAgICAgICAgdmFsdWU6IGhlYWRlcnNcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlndXJlTWF4QWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgbWF4QWdlID0gKHR5cGVvZiBvcHRpb25zLm1heEFnZSA9PT0gJ251bWJlcicgfHwgb3B0aW9ucy5tYXhBZ2UpICYmIG9wdGlvbnMubWF4QWdlLnRvU3RyaW5nKClcbiAgICBpZiAobWF4QWdlICYmIG1heEFnZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogJ0FjY2Vzcy1Db250cm9sLU1heC1BZ2UnLFxuICAgICAgICB2YWx1ZTogbWF4QWdlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5SGVhZGVycyhoZWFkZXJzLCByZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGhlYWRlcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB2YXIgaGVhZGVyID0gaGVhZGVyc1tpXTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgICAgIGFwcGx5SGVhZGVycyhoZWFkZXIsIHJlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGVhZGVyLmtleSA9PT0gJ1ZhcnknICYmIGhlYWRlci52YWx1ZSkge1xuICAgICAgICAgIHZhcnkocmVzLCBoZWFkZXIudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGhlYWRlci52YWx1ZSkge1xuICAgICAgICAgIHJlcy5zZXRIZWFkZXIoaGVhZGVyLmtleSwgaGVhZGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcnMob3B0aW9ucywgcmVxLCByZXMsIG5leHQpIHtcbiAgICB2YXIgaGVhZGVycyA9IFtdLFxuICAgICAgbWV0aG9kID0gcmVxLm1ldGhvZCAmJiByZXEubWV0aG9kLnRvVXBwZXJDYXNlICYmIHJlcS5tZXRob2QudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChtZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgICAgLy8gcHJlZmxpZ2h0XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlT3JpZ2luKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZUNyZWRlbnRpYWxzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZU1ldGhvZHMob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlQWxsb3dlZEhlYWRlcnMob3B0aW9ucywgcmVxKSk7XG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlTWF4QWdlKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZUV4cG9zZWRIZWFkZXJzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgYXBwbHlIZWFkZXJzKGhlYWRlcnMsIHJlcyk7XG5cbiAgICAgIGlmIChvcHRpb25zLnByZWZsaWdodENvbnRpbnVlKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNhZmFyaSAoYW5kIHBvdGVudGlhbGx5IG90aGVyIGJyb3dzZXJzKSBuZWVkIGNvbnRlbnQtbGVuZ3RoIDAsXG4gICAgICAgIC8vICAgZm9yIDIwNCBvciB0aGV5IGp1c3QgaGFuZyB3YWl0aW5nIGZvciBhIGJvZHlcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSBvcHRpb25zLm9wdGlvbnNTdWNjZXNzU3RhdHVzO1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LUxlbmd0aCcsICcwJyk7XG4gICAgICAgIHJlcy5lbmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWN0dWFsIHJlc3BvbnNlXG4gICAgICBoZWFkZXJzLnB1c2goY29uZmlndXJlT3JpZ2luKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZUNyZWRlbnRpYWxzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgaGVhZGVycy5wdXNoKGNvbmZpZ3VyZUV4cG9zZWRIZWFkZXJzKG9wdGlvbnMsIHJlcSkpO1xuICAgICAgYXBwbHlIZWFkZXJzKGhlYWRlcnMsIHJlcyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWlkZGxld2FyZVdyYXBwZXIobykge1xuICAgIC8vIGlmIG9wdGlvbnMgYXJlIHN0YXRpYyAoZWl0aGVyIHZpYSBkZWZhdWx0cyBvciBjdXN0b20gb3B0aW9ucyBwYXNzZWQgaW4pLCB3cmFwIGluIGEgZnVuY3Rpb25cbiAgICB2YXIgb3B0aW9uc0NhbGxiYWNrID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnNDYWxsYmFjayA9IG87XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNDYWxsYmFjayA9IGZ1bmN0aW9uIChyZXEsIGNiKSB7XG4gICAgICAgIGNiKG51bGwsIG8pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY29yc01pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIG9wdGlvbnNDYWxsYmFjayhyZXEsIGZ1bmN0aW9uIChlcnIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY29yc09wdGlvbnMgPSBhc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgICB2YXIgb3JpZ2luQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIGlmIChjb3JzT3B0aW9ucy5vcmlnaW4gJiYgdHlwZW9mIGNvcnNPcHRpb25zLm9yaWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb3JpZ2luQ2FsbGJhY2sgPSBjb3JzT3B0aW9ucy5vcmlnaW47XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3JzT3B0aW9ucy5vcmlnaW4pIHtcbiAgICAgICAgICAgIG9yaWdpbkNhbGxiYWNrID0gZnVuY3Rpb24gKG9yaWdpbiwgY2IpIHtcbiAgICAgICAgICAgICAgY2IobnVsbCwgY29yc09wdGlvbnMub3JpZ2luKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9yaWdpbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICBvcmlnaW5DYWxsYmFjayhyZXEuaGVhZGVycy5vcmlnaW4sIGZ1bmN0aW9uIChlcnIyLCBvcmlnaW4pIHtcbiAgICAgICAgICAgICAgaWYgKGVycjIgfHwgIW9yaWdpbikge1xuICAgICAgICAgICAgICAgIG5leHQoZXJyMik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29yc09wdGlvbnMub3JpZ2luID0gb3JpZ2luO1xuICAgICAgICAgICAgICAgIGNvcnMoY29yc09wdGlvbnMsIHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvLyBjYW4gcGFzcyBlaXRoZXIgYW4gb3B0aW9ucyBoYXNoLCBhbiBvcHRpb25zIGRlbGVnYXRlLCBvciBub3RoaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gbWlkZGxld2FyZVdyYXBwZXI7XG5cbn0oKSk7XG4iLCIvKiFcbiAqIHZhcnlcbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTcgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdmFyeVxubW9kdWxlLmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLW5hbWUgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLW5hbWUgICAgPSB0b2tlblxuICogdG9rZW4gICAgICAgICA9IDEqdGNoYXJcbiAqIHRjaGFyICAgICAgICAgPSBcIiFcIiAvIFwiI1wiIC8gXCIkXCIgLyBcIiVcIiAvIFwiJlwiIC8gXCInXCIgLyBcIipcIlxuICogICAgICAgICAgICAgICAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiAvIFwiXlwiIC8gXCJfXCIgLyBcImBcIiAvIFwifFwiIC8gXCJ+XCJcbiAqICAgICAgICAgICAgICAgLyBESUdJVCAvIEFMUEhBXG4gKiAgICAgICAgICAgICAgIDsgYW55IFZDSEFSLCBleGNlcHQgZGVsaW1pdGVyc1xuICovXG5cbnZhciBGSUVMRF9OQU1FX1JFR0VYUCA9IC9eWyEjJCUmJyorXFwtLl5fYHx+MC05QS1aYS16XSskL1xuXG4vKipcbiAqIEFwcGVuZCBhIGZpZWxkIHRvIGEgdmFyeSBoZWFkZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlclxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kIChoZWFkZXIsIGZpZWxkKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2hlYWRlciBhcmd1bWVudCBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBpZiAoIWZpZWxkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZmllbGQgYXJndW1lbnQgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgLy8gZ2V0IGZpZWxkcyBhcnJheVxuICB2YXIgZmllbGRzID0gIUFycmF5LmlzQXJyYXkoZmllbGQpXG4gICAgPyBwYXJzZShTdHJpbmcoZmllbGQpKVxuICAgIDogZmllbGRcblxuICAvLyBhc3NlcnQgb24gaW52YWxpZCBmaWVsZCBuYW1lc1xuICBmb3IgKHZhciBqID0gMDsgaiA8IGZpZWxkcy5sZW5ndGg7IGorKykge1xuICAgIGlmICghRklFTERfTkFNRV9SRUdFWFAudGVzdChmaWVsZHNbal0pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmaWVsZCBhcmd1bWVudCBjb250YWlucyBhbiBpbnZhbGlkIGhlYWRlciBuYW1lJylcbiAgICB9XG4gIH1cblxuICAvLyBleGlzdGluZywgdW5zcGVjaWZpZWQgdmFyeVxuICBpZiAoaGVhZGVyID09PSAnKicpIHtcbiAgICByZXR1cm4gaGVhZGVyXG4gIH1cblxuICAvLyBlbnVtZXJhdGUgY3VycmVudCB2YWx1ZXNcbiAgdmFyIHZhbCA9IGhlYWRlclxuICB2YXIgdmFscyA9IHBhcnNlKGhlYWRlci50b0xvd2VyQ2FzZSgpKVxuXG4gIC8vIHVuc3BlY2lmaWVkIHZhcnlcbiAgaWYgKGZpZWxkcy5pbmRleE9mKCcqJykgIT09IC0xIHx8IHZhbHMuaW5kZXhPZignKicpICE9PSAtMSkge1xuICAgIHJldHVybiAnKidcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZsZCA9IGZpZWxkc1tpXS50b0xvd2VyQ2FzZSgpXG5cbiAgICAvLyBhcHBlbmQgdmFsdWUgKGNhc2UtcHJlc2VydmluZylcbiAgICBpZiAodmFscy5pbmRleE9mKGZsZCkgPT09IC0xKSB7XG4gICAgICB2YWxzLnB1c2goZmxkKVxuICAgICAgdmFsID0gdmFsXG4gICAgICAgID8gdmFsICsgJywgJyArIGZpZWxkc1tpXVxuICAgICAgICA6IGZpZWxkc1tpXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHZhcnkgaGVhZGVyIGludG8gYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlIChoZWFkZXIpIHtcbiAgdmFyIGVuZCA9IDBcbiAgdmFyIGxpc3QgPSBbXVxuICB2YXIgc3RhcnQgPSAwXG5cbiAgLy8gZ2F0aGVyIHRva2Vuc1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gaGVhZGVyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc3dpdGNoIChoZWFkZXIuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAweDIwOiAvKiAgICovXG4gICAgICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICAgICAgc3RhcnQgPSBlbmQgPSBpICsgMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDB4MmM6IC8qICwgKi9cbiAgICAgICAgbGlzdC5wdXNoKGhlYWRlci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpXG4gICAgICAgIHN0YXJ0ID0gZW5kID0gaSArIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVuZCA9IGkgKyAxXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gZmluYWwgdG9rZW5cbiAgbGlzdC5wdXNoKGhlYWRlci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpXG5cbiAgcmV0dXJuIGxpc3Rcbn1cblxuLyoqXG4gKiBNYXJrIHRoYXQgYSByZXF1ZXN0IGlzIHZhcmllZCBvbiBhIGhlYWRlciBmaWVsZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVzXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZmllbGRcbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB2YXJ5IChyZXMsIGZpZWxkKSB7XG4gIGlmICghcmVzIHx8ICFyZXMuZ2V0SGVhZGVyIHx8ICFyZXMuc2V0SGVhZGVyKSB7XG4gICAgLy8gcXVhY2sgcXVhY2tcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZXMgYXJndW1lbnQgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgLy8gZ2V0IGV4aXN0aW5nIGhlYWRlclxuICB2YXIgdmFsID0gcmVzLmdldEhlYWRlcignVmFyeScpIHx8ICcnXG4gIHZhciBoZWFkZXIgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgICA/IHZhbC5qb2luKCcsICcpXG4gICAgOiBTdHJpbmcodmFsKVxuXG4gIC8vIHNldCBuZXcgaGVhZGVyXG4gIGlmICgodmFsID0gYXBwZW5kKGhlYWRlciwgZmllbGQpKSkge1xuICAgIHJlcy5zZXRIZWFkZXIoJ1ZhcnknLCB2YWwpXG4gIH1cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtjb3JzfSBmcm9tIFwiY29yc1wiXHJcblxyXG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vd3d3LnNnZXJkLmNvbS9hcGkvdXN1YXJpby9cIjtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMICsgXCJyZWdpc3Ryb3VzdWFyaW9cIiwge1xyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgIC5wb3N0KEFQSV9VUkwgKyBcImluaWNpYXJzZXNpb25cIiwge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4gICAgLmdldChBUElfVVJMICsgXCJ1c3VhcmlvYWN0dWFsXCIsIGNvcnMoKSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoQVBJX1VSTCArIFwiY2VycmFyc2VzaW9uXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlZ2lzdGVyLFxyXG4gIGxvZ2luLFxyXG4gIGN1cnJlblVzZXIsXHJcbiAgbG9nb3V0LFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=