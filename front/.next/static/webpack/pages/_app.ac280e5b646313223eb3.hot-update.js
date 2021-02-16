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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlRZUEVTIiwiUkVHSVNURVJfU1VDQ0VTUyIsIlJFR0lTVEVSX0ZBSUwiLCJMT0dJTl9TVUNDRVNTIiwiTE9HSU5fRkFJTCIsIkxPR09VVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxJQUFJLEdBQ3JCO0FBQUVDLFlBQVUsRUFBRSxJQUFkO0FBQW9CRCxNQUFJLEVBQUpBO0FBQXBCLENBRHFCLEdBRXJCO0FBQUVDLFlBQVUsRUFBRSxLQUFkO0FBQXFCRCxNQUFJLEVBQUU7QUFBM0IsQ0FGSjs7QUFJQyxTQUFTRSxXQUFULEdBQW1EO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QkosWUFBc0I7QUFBQSxNQUFSSyxNQUFRO0FBQUEsTUFDMUNDLElBRDBDLEdBQ3hCRCxNQUR3QixDQUMxQ0MsSUFEMEM7QUFBQSxNQUNwQ0MsT0FEb0MsR0FDeEJGLE1BRHdCLENBQ3BDRSxPQURvQzs7QUFHbEQsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLG1EQUFLLENBQUNDLGdCQUFYO0FBQ0UsNkNBQ0tMLEtBREw7QUFFRUYsa0JBQVUsRUFBRSxJQUZkO0FBR0VELFlBQUksRUFBRU0sT0FBTyxDQUFDTjtBQUhoQjs7QUFLRixTQUFLTyxtREFBSyxDQUFDRSxhQUFYO0FBQ0UsNkNBQ0tOLEtBREw7QUFFRUYsa0JBQVUsRUFBRTtBQUZkOztBQUlGLFNBQUtNLG1EQUFLLENBQUNHLGFBQVg7QUFDRSw2Q0FDS1AsS0FETDtBQUVFRixrQkFBVSxFQUFFLElBRmQ7QUFHRUQsWUFBSSxFQUFFTSxPQUFPLENBQUNOO0FBSGhCOztBQUtGLFNBQUtPLG1EQUFLLENBQUNJLFVBQVg7QUFDRSw2Q0FDS1IsS0FETDtBQUVFRixrQkFBVSxFQUFFLEtBRmQ7QUFHRUQsWUFBSSxFQUFFO0FBSFI7O0FBS0YsU0FBS08sbURBQUssQ0FBQ0ssTUFBWDtBQUNFLDZDQUNLVCxLQURMO0FBRUVGLGtCQUFVLEVBQUUsS0FGZDtBQUdFRCxZQUFJLEVBQUU7QUFIUjs7QUFLRjtBQUNFLGFBQU9HLEtBQVA7QUEvQko7QUFpQ0Q7O0FBRWNELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWMyODBlNWI2NDYzMTMyMjNlYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUWVBFUyBmcm9tIFwic3RvcmUvdHlwZXNcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlclxyXG4gID8geyBpc0xvZ2dlZEluOiB0cnVlLCB1c2VyIH1cclxuICA6IHsgaXNMb2dnZWRJbjogZmFsc2UsIHVzZXI6IG51bGwgfTtcclxuXHJcbiBmdW5jdGlvbiBhdXRoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBUWVBFUy5SRUdJU1RFUl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgdXNlcjogcGF5bG9hZC51c2VyXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLlJFR0lTVEVSX0ZBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLkxPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICB1c2VyOiBwYXlsb2FkLnVzZXIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEVTLkxPR0lOX0ZBSUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRVMuTE9HT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=