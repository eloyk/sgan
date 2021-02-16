webpackHotUpdate_N_E("pages/index",{

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
}(); // const currenUser = async () => {
//   const response = await axios
//     .get(API_URL + "usuarioactual");
//   return response.data;
// };


var currenUser = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch(API_URL + "usuarioactual");

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();

          case 6:
            data = _context3.sent;
            console.log(data);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.message);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJjdXJyZW5Vc2VyIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxtQ0FBaEI7O0FBRUEsSUFBTUMsUUFBUTtBQUFBLDhMQUFHLGlCQUFPQyxLQUFQLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXTCxPQUFPLEdBQUcsaUJBQXJCLEVBQXdDO0FBQzdERSxtQkFBSyxFQUFMQSxLQUQ2RDtBQUU3REMsc0JBQVEsRUFBUkE7QUFGNkQsYUFBeEMsQ0FEUjs7QUFBQTtBQUNURyxvQkFEUztBQUFBLDZDQUtSQSxRQUFRLENBQUNDLElBTEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQVFBLElBQU1PLEtBQUs7QUFBQSwrTEFBRyxrQkFBT04sS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1dDLDRDQUFLLENBQ3pCQyxJQURvQixDQUNmTCxPQUFPLEdBQUcsZUFESyxFQUNZO0FBQy9CRSxtQkFBSyxFQUFMQSxLQUQrQjtBQUUvQkMsc0JBQVEsRUFBUkE7QUFGK0IsYUFEWixDQURYOztBQUFBO0FBQ05HLG9CQURNO0FBQUEsOENBTUxBLFFBQVEsQ0FBQ0MsSUFOSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMQyxLQUFLO0FBQUE7QUFBQTtBQUFBLEdBQVgsQyxDQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1DLFVBQVU7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVFDLEtBQUssQ0FDMUJWLE9BQU8sR0FBRyxlQURnQixDQUZiOztBQUFBO0FBRVRNLG9CQUZTO0FBQUE7QUFBQSxtQkFLSUEsUUFBUSxDQUFDSyxJQUFULEVBTEo7O0FBQUE7QUFLVEosZ0JBTFM7QUFNZkssbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBTmU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRZkssbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQU1DLE9BQWxCOztBQVJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBWUEsSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUFPWCw0Q0FBSyxDQUFDQyxJQUFOLENBQVdMLE9BQU8sR0FBRyxjQUFyQixDQUFQO0FBQ0QsQ0FGRDs7QUFJZTtBQUNiQyxVQUFRLEVBQVJBLFFBRGE7QUFFYk8sT0FBSyxFQUFMQSxLQUZhO0FBR2JDLFlBQVUsRUFBVkEsVUFIYTtBQUliTSxRQUFNLEVBQU5BO0FBSmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YjE5YTM2YWFmNmY3ZjAwNjQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiXHJcblxyXG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vd3d3LnNnZXJkLmNvbS9hcGkvdXN1YXJpby9cIjtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMICsgXCJyZWdpc3Ryb3VzdWFyaW9cIiwge1xyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgIC5wb3N0KEFQSV9VUkwgKyBcImluaWNpYXJzZXNpb25cIiwge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIGNvbnN0IGN1cnJlblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4vLyAgICAgLmdldChBUElfVVJMICsgXCJ1c3VhcmlvYWN0dWFsXCIpO1xyXG4vLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9O1xyXG5cclxuXHJcbmNvbnN0IGN1cnJlblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIEFQSV9VUkwgKyBcInVzdWFyaW9hY3R1YWxcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KEFQSV9VUkwgKyBcImNlcnJhcnNlc2lvblwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICByZWdpc3RlcixcclxuICBsb2dpbixcclxuICBjdXJyZW5Vc2VyLFxyXG4gIGxvZ291dCxcclxufTsiXSwic291cmNlUm9vdCI6IiJ9