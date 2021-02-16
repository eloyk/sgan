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
            debugger;
            _context3.next = 4;
            return fetch("API_URL" + usuarioactual);

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            data = _context3.sent;
            console.log(data);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwibG9naW4iLCJjdXJyZW5Vc2VyIiwiZmV0Y2giLCJ1c3VhcmlvYWN0dWFsIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsbUNBQWhCOztBQUVBLElBQU1DLFFBQVE7QUFBQSw4TEFBRyxpQkFBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1FDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0wsT0FBTyxHQUFHLGlCQUFyQixFQUF3QztBQUM3REUsbUJBQUssRUFBTEEsS0FENkQ7QUFFN0RDLHNCQUFRLEVBQVJBO0FBRjZELGFBQXhDLENBRFI7O0FBQUE7QUFDVEcsb0JBRFM7QUFBQSw2Q0FLUkEsUUFBUSxDQUFDQyxJQUxEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJOLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDs7QUFRQSxJQUFNTyxLQUFLO0FBQUEsK0xBQUcsa0JBQU9OLEtBQVAsRUFBY0MsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNXQyw0Q0FBSyxDQUN6QkMsSUFEb0IsQ0FDZkwsT0FBTyxHQUFHLGVBREssRUFDWTtBQUMvQkUsbUJBQUssRUFBTEEsS0FEK0I7QUFFL0JDLHNCQUFRLEVBQVJBO0FBRitCLGFBRFosQ0FEWDs7QUFBQTtBQUNORyxvQkFETTtBQUFBLDhDQU1MQSxRQUFRLENBQUNDLElBTko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBTEMsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYLEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQyxVQUFVO0FBQUEsK0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZjtBQUZlO0FBQUEsbUJBR1FDLEtBQUssQ0FDMUIsWUFBWUMsYUFEYyxDQUhiOztBQUFBO0FBR1RMLG9CQUhTO0FBQUE7QUFBQSxtQkFNSUEsUUFBUSxDQUFDTSxJQUFULEVBTko7O0FBQUE7QUFNVEwsZ0JBTlM7QUFPZk0sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBUGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTZk0sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQU1DLE9BQWxCOztBQVRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZOLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBYUEsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUFPWiw0Q0FBSyxDQUFDQyxJQUFOLENBQVdMLE9BQU8sR0FBRyxjQUFyQixDQUFQO0FBQ0QsQ0FGRDs7QUFJZTtBQUNiQyxVQUFRLEVBQVJBLFFBRGE7QUFFYk8sT0FBSyxFQUFMQSxLQUZhO0FBR2JDLFlBQVUsRUFBVkEsVUFIYTtBQUliTyxRQUFNLEVBQU5BO0FBSmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMGRmYzk1NmE4MTQwNzVmMjc3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiXHJcblxyXG5jb25zdCBBUElfVVJMID0gXCJodHRwOi8vd3d3LnNnZXJkLmNvbS9hcGkvdXN1YXJpby9cIjtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChBUElfVVJMICsgXCJyZWdpc3Ryb3VzdWFyaW9cIiwge1xyXG4gICAgZW1haWwsXHJcbiAgICBwYXNzd29yZCxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgIC5wb3N0KEFQSV9VUkwgKyBcImluaWNpYXJzZXNpb25cIiwge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIGNvbnN0IGN1cnJlblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4vLyAgICAgLmdldChBUElfVVJMICsgXCJ1c3VhcmlvYWN0dWFsXCIpO1xyXG4vLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4vLyB9O1xyXG5cclxuXHJcbmNvbnN0IGN1cnJlblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcIkFQSV9VUkxcIiArIHVzdWFyaW9hY3R1YWxcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MucG9zdChBUElfVVJMICsgXCJjZXJyYXJzZXNpb25cIik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcmVnaXN0ZXIsXHJcbiAgbG9naW4sXHJcbiAgY3VycmVuVXNlcixcclxuICBsb2dvdXQsXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==