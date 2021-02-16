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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var user = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].currenUser();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJ1c2VyIiwiYXV0aE1ldGhvZCIsImN1cnJlblVzZXIiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiVFlQRVMiLCJSRUdJU1RFUl9TVUNDRVNTIiwiUkVHSVNURVJfRkFJTCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDhEQUFVLENBQUNDLFVBQVgsRUFBYjtBQUVBLElBQU1DLFlBQVksR0FBR0gsSUFBSSxHQUNyQjtBQUFFSSxZQUFVLEVBQUUsSUFBZDtBQUFvQkosTUFBSSxFQUFKQTtBQUFwQixDQURxQixHQUVyQjtBQUFFSSxZQUFVLEVBQUUsS0FBZDtBQUFxQkosTUFBSSxFQUFFO0FBQTNCLENBRko7O0FBSUMsU0FBU0ssV0FBVCxHQUFtRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJILFlBQXNCO0FBQUEsTUFBUkksTUFBUTtBQUFBLE1BQzFDQyxJQUQwQyxHQUN4QkQsTUFEd0IsQ0FDMUNDLElBRDBDO0FBQUEsTUFDcENDLE9BRG9DLEdBQ3hCRixNQUR3QixDQUNwQ0UsT0FEb0M7O0FBR2xELFVBQVFELElBQVI7QUFDRSxTQUFLRSxtREFBSyxDQUFDQyxnQkFBWDtBQUNFLDZDQUNLTCxLQURMO0FBRUVGLGtCQUFVLEVBQUUsSUFGZDtBQUdFSixZQUFJLEVBQUVTLE9BQU8sQ0FBQ1Q7QUFIaEI7O0FBS0YsU0FBS1UsbURBQUssQ0FBQ0UsYUFBWDtBQUNFLDZDQUNLTixLQURMO0FBRUVGLGtCQUFVLEVBQUU7QUFGZDs7QUFJRixTQUFLTSxtREFBSyxDQUFDRyxhQUFYO0FBQ0UsNkNBQ0tQLEtBREw7QUFFRUYsa0JBQVUsRUFBRSxJQUZkO0FBR0VKLFlBQUksRUFBRVMsT0FBTyxDQUFDVDtBQUhoQjs7QUFLRixTQUFLVSxtREFBSyxDQUFDSSxVQUFYO0FBQ0UsNkNBQ0tSLEtBREw7QUFFRUYsa0JBQVUsRUFBRSxLQUZkO0FBR0VKLFlBQUksRUFBRTtBQUhSOztBQUtGLFNBQUtVLG1EQUFLLENBQUNLLE1BQVg7QUFDRSw2Q0FDS1QsS0FETDtBQUVFRixrQkFBVSxFQUFFLEtBRmQ7QUFHRUosWUFBSSxFQUFFO0FBSFI7O0FBS0Y7QUFDRSxhQUFPTSxLQUFQO0FBL0JKO0FBaUNEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI3M2QzM2Q0NTE4Y2E5OWRjN2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVFlQRVMgZnJvbSBcInN0b3JlL3R5cGVzXCJcclxuaW1wb3J0IGF1dGhNZXRob2QgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiXHJcblxyXG5jb25zdCB1c2VyID0gYXV0aE1ldGhvZC5jdXJyZW5Vc2VyKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB1c2VyXHJcbiAgPyB7IGlzTG9nZ2VkSW46IHRydWUsIHVzZXIgfVxyXG4gIDogeyBpc0xvZ2dlZEluOiBmYWxzZSwgdXNlcjogbnVsbCB9O1xyXG5cclxuIGZ1bmN0aW9uIGF1dGhSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFRZUEVTLlJFR0lTVEVSX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBwYXlsb2FkLnVzZXJcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRVMuUkVHSVNURVJfRkFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRVMuTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IHBheWxvYWQudXNlcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRVMuTE9HSU5fRkFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFUy5MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==