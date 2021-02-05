webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/config/menu.config.jsx":
/*!************************************!*\
  !*** ./src/config/menu.config.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _panely_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @panely/components */ "./src/modules/components/index.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Eloy\\Desktop\\sgan\\front\\src\\config\\menu.config.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*
 * Menu Configuration
 * the object below is representation of the side navigation menu
 * there are some property you can use to customize your menu
 */

var MENU = [{
  title: "Dashboard",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDesktop"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    });
  },
  addon: function addon() {
    return __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      variant: "success",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }
    }, "new");
  },
  link: "/"
}, {
  title: "Elements",
  section: true
}, {
  title: "Base",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPalette"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Accordion",
    bullet: true,
    link: "/elements/base/accordion"
  }, {
    title: "Alert",
    bullet: true,
    link: "/elements/base/alert"
  }, {
    title: "Badge",
    bullet: true,
    link: "/elements/base/badge"
  }, {
    title: "Button",
    bullet: true,
    link: "/elements/base/button"
  }, {
    title: "Button Group",
    bullet: true,
    link: "/elements/base/button-group"
  }, {
    title: "Card",
    bullet: true,
    link: "/elements/base/card"
  }, {
    title: "Dropdown",
    bullet: true,
    link: "/elements/base/dropdown"
  }, {
    title: "Grid Navigation",
    bullet: true,
    link: "/elements/base/grid-nav"
  }, {
    title: "List Group",
    bullet: true,
    link: "/elements/base/list-group"
  }, {
    title: "Marker",
    bullet: true,
    link: "/elements/base/marker"
  }, {
    title: "Modal",
    bullet: true,
    link: "/elements/base/modal"
  }, {
    title: "Navigation",
    bullet: true,
    link: "/elements/base/nav"
  }, {
    title: "Pagination",
    bullet: true,
    link: "/elements/base/pagination"
  }, {
    title: "Popover",
    bullet: true,
    link: "/elements/base/popover"
  }, {
    title: "Progress",
    bullet: true,
    link: "/elements/base/progress"
  }, {
    title: "Spinner",
    bullet: true,
    link: "/elements/base/spinner"
  }, {
    title: "Tab",
    bullet: true,
    link: "/elements/base/tab"
  }, {
    title: "Table",
    bullet: true,
    link: "/elements/base/table"
  }, {
    title: "Tooltip",
    bullet: true,
    link: "/elements/base/tooltip"
  }, {
    title: "Typoghrapy",
    bullet: true,
    link: "/elements/base/type"
  }]
}, {
  title: "Advanced",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAdjust"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Avatar",
    bullet: true,
    link: "/elements/advanced/avatar"
  }, {
    title: "Carousel",
    bullet: true,
    link: "/elements/advanced/carousel"
  }, {
    title: "Chat",
    bullet: true,
    link: "/elements/advanced/chat"
  }, {
    title: "Rich List",
    bullet: true,
    link: "/elements/advanced/rich-list"
  }, {
    title: "Sortable",
    bullet: true,
    link: "/elements/advanced/sortable"
  }, {
    title: "Sweet Alert",
    bullet: true,
    link: "/elements/advanced/sweet-alert"
  }, {
    title: "Timeline",
    bullet: true,
    link: "/elements/advanced/timeline"
  }]
}, {
  title: "Icons",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faIcons"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Feather",
    bullet: true,
    link: "/icons/feather"
  }, {
    title: "Font Awesome",
    bullet: true,
    link: "/icons/fontawesome"
  }]
}, {
  title: "Productos",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBox"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Lista de Productos",
    bullet: true,
    link: "/productos/lista-productos"
  }]
}, {
  title: "Portlet",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWindowRestore"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Base",
    bullet: true,
    link: "/portlet/base"
  }, {
    title: "Tab",
    bullet: true,
    link: "/portlet/tab"
  }]
}, {
  title: "Widgets",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShapes"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "General",
    bullet: true,
    link: "/widgets/general"
  }, {
    title: "Chart",
    bullet: true,
    link: "/widgets/chart"
  }]
}, {
  title: "Data",
  section: true
}, {
  title: "Chart",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartPie"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    });
  },
  link: "/chart/apex-chart"
}, {
  title: "Form",
  section: true
}, {
  title: "Base",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDice"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    });
  },
  link: "/form/base"
}, {
  title: "Custom",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFillDrip"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    });
  },
  link: "/form/custom"
}, {
  title: "Editor",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilRuler"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Basic",
    bullet: true,
    link: "/editor/basic"
  }, {
    title: "Bubble",
    bullet: true,
    link: "/editor/bubble"
  }, {
    title: "Complex",
    bullet: true,
    link: "/editor/complex"
  }]
}, {
  title: "Layout",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerCombined"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    });
  },
  link: "/form/layout"
}, {
  title: "Validation",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }
    });
  },
  link: "/form/validation"
}, {
  title: "Pages",
  section: true
}, {
  title: "Login",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUnlockAlt"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Login 1",
    bullet: true,
    link: "/pages/login/login-1"
  }, {
    title: "Login 2",
    bullet: true,
    link: "/pages/login/login-2"
  }]
}, {
  title: "Register",
  icon: function icon() {
    return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserPlus"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }
    });
  },
  child: [{
    title: "Register 1",
    bullet: true,
    link: "/pages/register/register-1"
  }, {
    title: "Register 2",
    bullet: true,
    link: "/pages/register/register-2"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (MENU);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZy9tZW51LmNvbmZpZy5qc3giXSwibmFtZXMiOlsiTUVOVSIsInRpdGxlIiwiaWNvbiIsIlNvbGlkSWNvbiIsImFkZG9uIiwibGluayIsInNlY3Rpb24iLCJjaGlsZCIsImJ1bGxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQUU7QUFBQSxXQUFNLE1BQUMsOEVBQUQ7QUFBaUIsVUFBSSxFQUFFQywyRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQUEsR0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFBQSxXQUFNLE1BQUMsd0RBQUQ7QUFBTyxhQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU47QUFBQSxHQUhUO0FBSUVDLE1BQUksRUFBRTtBQUpSLENBRFcsRUFPWDtBQUNFSixPQUFLLEVBQUUsVUFEVDtBQUVFSyxTQUFPLEVBQUU7QUFGWCxDQVBXLEVBV1g7QUFDRUwsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFO0FBQUEsV0FBTSxNQUFDLDhFQUFEO0FBQWlCLFVBQUksRUFBRUMsMkVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBRlI7QUFHRUksT0FBSyxFQUFFLENBQ0w7QUFDRU4sU0FBSyxFQUFFLFdBRFQ7QUFFRU8sVUFBTSxFQUFFLElBRlY7QUFHRUgsUUFBSSxFQUFFO0FBSFIsR0FESyxFQU1MO0FBQ0VKLFNBQUssRUFBRSxPQURUO0FBRUVPLFVBQU0sRUFBRSxJQUZWO0FBR0VILFFBQUksRUFBRTtBQUhSLEdBTkssRUFXTDtBQUNFSixTQUFLLEVBQUUsT0FEVDtB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QTFRVyxFQStRWDtBQUNFSixPQUFLLEVBQUUsT0FEVDtBQUVFSyxTQUFPLEVBQUU7QUFGWCxDQS9RVyxFQW1SWDtBQUNFTCxPQUFLLEVBQUUsT0FEVDtBQUVFQyxNQUFJLEVBQUU7QUFBQSxXQUFNLE1BQUMsOEVBQUQ7QUFBaUIsVUFBSSxFQUFFQyw2RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQUEsR0FGUjtBQUdFSSxPQUFLLEVBQUUsQ0FDTDtBQUNFTixTQUFLLEVBQUUsU0FEVDtBQUVFTyxVQUFNLEVBQUUsSUFGVjtBQUdFSCxRQUFJLEVBQUU7QUFIUixHQURLLEVBTUw7QUFDRUosU0FBSyxFQUFFLFNBRFQ7QUFFRU8sVUFBTSxFQUFFLElBRlY7QUFHRUgsUUFBSSxFQUFFO0FBSFIsR0FOSztBQUhULENBblJXLEVBbVNYO0FBQ0VKLE9BQUssRUFBRSxVQURUO0FBRUVDLE1BQUksRUFBRTtBQUFBLFdBQU0sTUFBQyw4RUFBRDtBQUFpQixVQUFJLEVBQUVDLDRFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFBQSxHQUZSO0FBR0VJLE9BQUssRUFBRSxDQUNMO0FBQ0VOLFNBQUssRUFBRSxZQURUO0FBRUVPLFVBQU0sRUFBRSxJQUZWO0FBR0VILFFBQUksRUFBRTtBQUhSLEdBREssRUFNTDtBQUNFSixTQUFLLEVBQUUsWUFEVDtBQUVFTyxVQUFNLEVBQUUsSUFGVjtBQUdFSCxRQUFJLEVBQUU7QUFIUixHQU5LO0FBSFQsQ0FuU1csQ0FBYjtBQXFUZUwsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZGM4MmI0NWFkZDM1NzU5MWE0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAcGFuZWx5L2NvbXBvbmVudHNcIlxuaW1wb3J0ICogYXMgU29saWRJY29uIGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIlxuXG4vKlxuICogTWVudSBDb25maWd1cmF0aW9uXG4gKiB0aGUgb2JqZWN0IGJlbG93IGlzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzaWRlIG5hdmlnYXRpb24gbWVudVxuICogdGhlcmUgYXJlIHNvbWUgcHJvcGVydHkgeW91IGNhbiB1c2UgdG8gY3VzdG9taXplIHlvdXIgbWVudVxuICovXG5cbmNvbnN0IE1FTlUgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICBpY29uOiAoKSA9PiA8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYURlc2t0b3B9IC8+LFxuICAgIGFkZG9uOiAoKSA9PiA8QmFkZ2UgdmFyaWFudD1cInN1Y2Nlc3NcIj5uZXc8L0JhZGdlPixcbiAgICBsaW5rOiBcIi9cIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRWxlbWVudHNcIixcbiAgICBzZWN0aW9uOiB0cnVlXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYXNlXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFQYWxldHRlfSAvPixcbiAgICBjaGlsZDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBY2NvcmRpb25cIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL2FjY29yZGlvblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvYWxlcnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQmFkZ2VcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL2JhZGdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkJ1dHRvblwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvYnV0dG9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkJ1dHRvbiBHcm91cFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvYnV0dG9uLWdyb3VwXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNhcmRcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL2NhcmRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRHJvcGRvd25cIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL2Ryb3Bkb3duXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdyaWQgTmF2aWdhdGlvblwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvZ3JpZC1uYXZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTGlzdCBHcm91cFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvbGlzdC1ncm91cFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJNYXJrZXJcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL21hcmtlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJNb2RhbFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvbW9kYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTmF2aWdhdGlvblwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvbmF2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBhZ2luYXRpb25cIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL3BhZ2luYXRpb25cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUG9wb3ZlclwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvcG9wb3ZlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJQcm9ncmVzc1wiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvcHJvZ3Jlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3Bpbm5lclwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2Uvc3Bpbm5lclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUYWJcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL3RhYlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUYWJsZVwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvdGFibGVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVG9vbHRpcFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2Jhc2UvdG9vbHRpcFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJUeXBvZ2hyYXB5XCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvZWxlbWVudHMvYmFzZS90eXBlXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBZHZhbmNlZFwiLFxuICAgIGljb246ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhQWRqdXN0fSAvPixcbiAgICBjaGlsZDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJBdmF0YXJcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9hZHZhbmNlZC9hdmF0YXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ2Fyb3VzZWxcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9hZHZhbmNlZC9jYXJvdXNlbFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDaGF0XCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvZWxlbWVudHMvYWR2YW5jZWQvY2hhdFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJSaWNoIExpc3RcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9hZHZhbmNlZC9yaWNoLWxpc3RcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU29ydGFibGVcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lbGVtZW50cy9hZHZhbmNlZC9zb3J0YWJsZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJTd2VldCBBbGVydFwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2VsZW1lbnRzL2FkdmFuY2VkL3N3ZWV0LWFsZXJ0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRpbWVsaW5lXCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvZWxlbWVudHMvYWR2YW5jZWQvdGltZWxpbmVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkljb25zXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFJY29uc30gLz4sXG4gICAgY2hpbGQ6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVhdGhlclwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL2ljb25zL2ZlYXRoZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRm9udCBBd2Vzb21lXCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvaWNvbnMvZm9udGF3ZXNvbWVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2R1Y3Rvc1wiLFxuICAgIGljb246ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhQm94fSAvPixcbiAgICBjaGlsZDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJMaXN0YSBkZSBQcm9kdWN0b3NcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9wcm9kdWN0b3MvbGlzdGEtcHJvZHVjdG9zXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQb3J0bGV0XCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFXaW5kb3dSZXN0b3JlfSAvPixcbiAgICBjaGlsZDogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJCYXNlXCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvcG9ydGxldC9iYXNlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRhYlwiLFxuICAgICAgICBidWxsZXQ6IHRydWUsXG4gICAgICAgIGxpbms6IFwiL3BvcnRsZXQvdGFiXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJXaWRnZXRzXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFTaGFwZXN9IC8+LFxuICAgIGNoaWxkOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkdlbmVyYWxcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi93aWRnZXRzL2dlbmVyYWxcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ2hhcnRcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi93aWRnZXRzL2NoYXJ0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEYXRhXCIsXG4gICAgc2VjdGlvbjogdHJ1ZVxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2hhcnRcIixcbiAgICBpY29uOiAoKSA9PiA8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYUNoYXJ0UGllfSAvPixcbiAgICBsaW5rOiBcIi9jaGFydC9hcGV4LWNoYXJ0XCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZvcm1cIixcbiAgICBzZWN0aW9uOiB0cnVlXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYXNlXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFEaWNlfSAvPixcbiAgICBsaW5rOiBcIi9mb3JtL2Jhc2VcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ3VzdG9tXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFGaWxsRHJpcH0gLz4sXG4gICAgbGluazogXCIvZm9ybS9jdXN0b21cIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRWRpdG9yXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFQZW5jaWxSdWxlcn0gLz4sXG4gICAgY2hpbGQ6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQmFzaWNcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9lZGl0b3IvYmFzaWNcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQnViYmxlXCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvZWRpdG9yL2J1YmJsZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDb21wbGV4XCIsXG4gICAgICAgIGJ1bGxldDogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvZWRpdG9yL2NvbXBsZXhcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxheW91dFwiLFxuICAgIGljb246ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhUnVsZXJDb21iaW5lZH0gLz4sXG4gICAgbGluazogXCIvZm9ybS9sYXlvdXRcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFsaWRhdGlvblwiLFxuICAgIGljb246ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhQ2hlY2t9IC8+LFxuICAgIGxpbms6IFwiL2Zvcm0vdmFsaWRhdGlvblwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQYWdlc1wiLFxuICAgIHNlY3Rpb246IHRydWVcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvZ2luXCIsXG4gICAgaWNvbjogKCkgPT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFVbmxvY2tBbHR9IC8+LFxuICAgIGNoaWxkOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkxvZ2luIDFcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy9sb2dpbi9sb2dpbi0xXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkxvZ2luIDJcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy9sb2dpbi9sb2dpbi0yXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJSZWdpc3RlclwiLFxuICAgIGljb246ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhVXNlclBsdXN9IC8+LFxuICAgIGNoaWxkOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlJlZ2lzdGVyIDFcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci0xXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlJlZ2lzdGVyIDJcIixcbiAgICAgICAgYnVsbGV0OiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci0yXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgTUVOVVxuIl0sInNvdXJjZVJvb3QiOiIifQ==