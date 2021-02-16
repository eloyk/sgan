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


var initialState = user ? {
  isLoggedIn: true,
  user: user
} : {
  isLoggedIn: false,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/reducers/index.jsx":
/*!**************************************!*\
  !*** ./src/store/reducers/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _breadcrumbReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbReducer */ "./src/store/reducers/breadcrumbReducer.jsx");
/* harmony import */ var _sidemenuReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenuReducer */ "./src/store/reducers/sidemenuReducer.jsx");
/* harmony import */ var _firebaseReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebaseReducer */ "./src/store/reducers/firebaseReducer.jsx");
/* harmony import */ var _asideReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asideReducer */ "./src/store/reducers/asideReducer.jsx");
/* harmony import */ var _pageReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageReducer */ "./src/store/reducers/pageReducer.jsx");
/* harmony import */ var _messageReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messageReducer */ "./src/store/reducers/messageReducer.jsx");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authReducer */ "./src/store/reducers/authReducer.jsx");







 // Concatenate all reducers

var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  sidemenu: _sidemenuReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  breadcrumb: _breadcrumbReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  firebase: _firebaseReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  aside: _asideReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  page: _pageReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  message: _messageReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJUWVBFUyIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJSRUdJU1RFUl9GQUlMIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJMT0dPVVQiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsInNpZGVtZW51Iiwic2lkZW1lbnVSZWR1Y2VyIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJSZWR1Y2VyIiwiZmlyZWJhc2UiLCJmaXJlYmFzZVJlZHVjZXIiLCJhc2lkZSIsImFzaWRlUmVkdWNlciIsInBhZ2UiLCJwYWdlUmVkdWNlciIsIm1lc3NhZ2UiLCJtZXNzYWdlUmVkdWNlciIsImF1dGgiLCJhdXRoUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxJQUFJLEdBQ3JCO0FBQUVDLFlBQVUsRUFBRSxJQUFkO0FBQW9CRCxNQUFJLEVBQUpBO0FBQXBCLENBRHFCLEdBRXJCO0FBQUVDLFlBQVUsRUFBRSxLQUFkO0FBQXFCRCxNQUFJLEVBQUU7QUFBM0IsQ0FGSjtBQUllLDJFQUF3QztBQUFBLE1BQTlCRSxLQUE4Qix1RUFBdEJILFlBQXNCO0FBQUEsTUFBUkksTUFBUTtBQUFBLE1BQzdDQyxJQUQ2QyxHQUMzQkQsTUFEMkIsQ0FDN0NDLElBRDZDO0FBQUEsTUFDdkNDLE9BRHVDLEdBQzNCRixNQUQyQixDQUN2Q0UsT0FEdUM7O0FBR3JELFVBQVFELElBQVI7QUFDRSxTQUFLRSxtREFBSyxDQUFDQyxnQkFBWDtBQUNFLDZDQUNLTCxLQURMO0FBRUVELGtCQUFVLEVBQUUsSUFGZDtBQUdFRCxZQUFJLEVBQUVLLE9BQU8sQ0FBQ0w7QUFIaEI7O0FBS0YsU0FBS00sbURBQUssQ0FBQ0UsYUFBWDtBQUNFLDZDQUNLTixLQURMO0FBRUVELGtCQUFVLEVBQUU7QUFGZDs7QUFJRixTQUFLSyxtREFBSyxDQUFDRyxhQUFYO0FBQ0UsNkNBQ0tQLEtBREw7QUFFRUQsa0JBQVUsRUFBRSxJQUZkO0FBR0VELFlBQUksRUFBRUssT0FBTyxDQUFDTDtBQUhoQjs7QUFLRixTQUFLTSxtREFBSyxDQUFDSSxVQUFYO0FBQ0UsNkNBQ0tSLEtBREw7QUFFRUQsa0JBQVUsRUFBRSxLQUZkO0FBR0VELFlBQUksRUFBRTtBQUhSOztBQUtGLFNBQUtNLG1EQUFLLENBQUNLLE1BQVg7QUFDRSw2Q0FDS1QsS0FETDtBQUVFRCxrQkFBVSxFQUFFLEtBRmQ7QUFHRUQsWUFBSSxFQUFFO0FBSFI7O0FBS0Y7QUFDRSxhQUFPRSxLQUFQO0FBL0JKO0FBaUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNVSxRQUFRLEdBQUdDLDZEQUFlLENBQUM7QUFDL0JDLFVBQVEsRUFBRUMsd0RBRHFCO0FBRS9CQyxZQUFVLEVBQUVDLDBEQUZtQjtBQUcvQkMsVUFBUSxFQUFFQyx3REFIcUI7QUFJL0JDLE9BQUssRUFBRUMscURBSndCO0FBSy9CQyxNQUFJLEVBQUVDLG9EQUx5QjtBQU0vQkMsU0FBTyxFQUFFQyx1REFOc0I7QUFPL0JDLE1BQUksRUFBRUMsb0RBQVdBO0FBUGMsQ0FBRCxDQUFoQztBQVVlZix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgwM2IwNDI5OTBkNGNkZmFkNzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVFlQRVMgZnJvbSBcInN0b3JlL3R5cGVzXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZXJcclxuICA/IHsgaXNMb2dnZWRJbjogdHJ1ZSwgdXNlciB9XHJcbiAgOiB7IGlzTG9nZ2VkSW46IGZhbHNlLCB1c2VyOiBudWxsIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG5cclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgVFlQRVMuUkVHSVNURVJfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IHBheWxvYWQudXNlclxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFUy5SRUdJU1RFUl9GQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFUy5MT0dJTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgdXNlcjogcGF5bG9hZC51c2VyLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFUy5MT0dJTl9GQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLkxPR09VVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXG5pbXBvcnQgYnJlYWRjcnVtYlJlZHVjZXIgZnJvbSBcIi4vYnJlYWRjcnVtYlJlZHVjZXJcIlxuaW1wb3J0IHNpZGVtZW51UmVkdWNlciBmcm9tIFwiLi9zaWRlbWVudVJlZHVjZXJcIlxuaW1wb3J0IGZpcmViYXNlUmVkdWNlciBmcm9tIFwiLi9maXJlYmFzZVJlZHVjZXJcIlxuaW1wb3J0IGFzaWRlUmVkdWNlciBmcm9tIFwiLi9hc2lkZVJlZHVjZXJcIlxuaW1wb3J0IHBhZ2VSZWR1Y2VyIGZyb20gXCIuL3BhZ2VSZWR1Y2VyXCJcbmltcG9ydCBtZXNzYWdlUmVkdWNlciBmcm9tIFwiLi9tZXNzYWdlUmVkdWNlclwiXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFJlZHVjZXJcIlxuXG4vLyBDb25jYXRlbmF0ZSBhbGwgcmVkdWNlcnNcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgc2lkZW1lbnU6IHNpZGVtZW51UmVkdWNlcixcbiAgYnJlYWRjcnVtYjogYnJlYWRjcnVtYlJlZHVjZXIsXG4gIGZpcmViYXNlOiBmaXJlYmFzZVJlZHVjZXIsXG4gIGFzaWRlOiBhc2lkZVJlZHVjZXIsXG4gIHBhZ2U6IHBhZ2VSZWR1Y2VyLFxuICBtZXNzYWdlOiBtZXNzYWdlUmVkdWNlcixcbiAgYXV0aDogYXV0aFJlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzXG4iXSwic291cmNlUm9vdCI6IiJ9