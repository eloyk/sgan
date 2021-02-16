webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/reducers/authReducer.jsx":
/*!********************************************!*\
  !*** ./src/store/reducers/authReducer.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var store_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/types */ "./src/store/types.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var user = JSON.parse(localStorage.getItem("user"));
var initialState = user ? {
  isLoggedIn: true,
  user: user
} : {
  isLoggedIn: false,
  user: null
};

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case store_types__WEBPACK_IMPORTED_MODULE_1__["default"].REGISTER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: payload.user
      });

    case store_types__WEBPACK_IMPORTED_MODULE_1__["default"].REGISTER_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false
      });

    case store_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: payload.user
      });

    case store_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_FAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
      });

    case store_types__WEBPACK_IMPORTED_MODULE_1__["default"].LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsImlzTG9nZ2VkSW4iLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJUWVBFUyIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJMT0dPVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWI7QUFFQSxJQUFNQyxZQUFZLEdBQUdMLElBQUksR0FDckI7QUFBRU0sWUFBVSxFQUFFLElBQWQ7QUFBb0JOLE1BQUksRUFBSkE7QUFBcEIsQ0FEcUIsR0FFckI7QUFBRU0sWUFBVSxFQUFFLEtBQWQ7QUFBcUJOLE1BQUksRUFBRTtBQUEzQixDQUZKOztBQUlDLFNBQVNPLFdBQVQsR0FBbUQ7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCSCxZQUFzQjtBQUFBLE1BQVJJLE1BQVE7QUFBQSxNQUMxQ0MsSUFEMEMsR0FDeEJELE1BRHdCLENBQzFDQyxJQUQwQztBQUFBLE1BQ3BDQyxPQURvQyxHQUN4QkYsTUFEd0IsQ0FDcENFLE9BRG9DOztBQUdsRCxVQUFRRCxJQUFSO0FBQ0UsU0FBS0UsbURBQUssQ0FBQ0MsZ0JBQVg7QUFDRSw2Q0FDS0wsS0FETDtBQUVFRixrQkFBVSxFQUFFLElBRmQ7QUFHRU4sWUFBSSxFQUFFVyxPQUFPLENBQUNYO0FBSGhCOztBQUtGLFNBQUtZLG1EQUFLLENBQUNFLGFBQVg7QUFDRSw2Q0FDS04sS0FETDtBQUVFRixrQkFBVSxFQUFFO0FBRmQ7O0FBSUYsU0FBS00sbURBQUssQ0FBQ0csYUFBWDtBQUNFLDZDQUNLUCxLQURMO0FBRUVGLGtCQUFVLEVBQUUsSUFGZDtBQUdFTixZQUFJLEVBQUVXLE9BQU8sQ0FBQ1g7QUFIaEI7O0FBS0YsU0FBS1ksbURBQUssQ0FBQ0ksVUFBWDtBQUNFLDZDQUNLUixLQURMO0FBRUVGLGtCQUFVLEVBQUUsS0FGZDtBQUdFTixZQUFJLEVBQUU7QUFIUjs7QUFLRixTQUFLWSxtREFBSyxDQUFDSyxNQUFYO0FBQ0UsNkNBQ0tULEtBREw7QUFFRUYsa0JBQVUsRUFBRSxLQUZkO0FBR0VOLFlBQUksRUFBRTtBQUhSOztBQUtGO0FBQ0UsYUFBT1EsS0FBUDtBQS9CSjtBQWlDRDs7QUFFY0QsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jOTcwZWI0MmFlYTQ5ZTU1ODBmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRZUEVTIGZyb20gXCJzdG9yZS90eXBlc1wiXHJcblxyXG5jb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlclxyXG4gID8geyBpc0xvZ2dlZEluOiB0cnVlLCB1c2VyIH1cclxuICA6IHsgaXNMb2dnZWRJbjogZmFsc2UsIHVzZXI6IG51bGwgfTtcclxuXHJcbiBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBUWVBFUy5SRUdJU1RFUl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgdXNlcjogcGF5bG9hZC51c2VyXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLlJFR0lTVEVSX0ZBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLkxPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBwYXlsb2FkLnVzZXIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLkxPR0lOX0ZBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRVMuTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=