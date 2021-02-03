webpackHotUpdate_N_E("pages/elements/base/dropdown",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/cookie/index.js":
false,

/***/ "./node_modules/next-absolute-url/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/nookies/dist/index.js":
false,

/***/ "./node_modules/nookies/dist/utils.js":
false,

/***/ "./node_modules/set-cookie-parser/lib/set-cookie.js":
false,

/***/ "./src/components/firebase/firebaseVerifyCookie.jsx":
false,

/***/ "./src/components/firebase/firebaseWithAuth.jsx":
false,

/***/ "./src/config/page.config.jsx":
false,

/***/ "./src/pages/elements/base/dropdown.jsx":
/*!**********************************************!*\
  !*** ./src/pages/elements/base/dropdown.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _panely_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @panely/components */ "./src/modules/components/index.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.jsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var components_layout_withLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/layout/withLayout */ "./src/components/layout/withLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "C:\\Users\\Eloy\\Desktop\\sgan\\front\\src\\pages\\elements\\base\\dropdown.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 //import withAuth from "components/firebase/firebaseWithAuth"



var DropdownPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DropdownPage, _React$Component);

  var _super = _createSuper(DropdownPage);

  function DropdownPage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DropdownPage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DropdownPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Set header title
      this.props.pageChangeHeaderTitle("Dropdown"); // Set breadcrumb data

      this.props.breadcrumbChange([{
        text: "Dashboard",
        link: "/"
      }, {
        text: "Elements"
      }, {
        text: "Base"
      }, {
        text: "Dropdown",
        link: "/elements/base/dropdown"
      }]);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, "Dropdown | Panely")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: "12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Portlet"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Portlet"].Header, {
        bordered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Portlet"].Title, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 19
        }
      }, "Dropdown examples")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Portlet"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }
      }, "Basic demo"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, __jsx(DropdownControlled, {
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 23
        }
      }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        className: "d-inline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, "Uncontrolled"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 27
        }
      }, "Something else here"))))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, "Animated dropdown"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        animated: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 23
        }
      }, "Extend ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 32
        }
      }, "Dropdown.Menu"), " with ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 64
        }
      }, "animated"), " to apply animation when dropdown opened"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, "Icons"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faRocket"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faComments"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPaperPlane"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 23
        }
      }, "Use ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 29
        }
      }, "icon"), " property with an icon inside to add an icon before the content"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, "Bullet"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        bullet: true,
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        bullet: true,
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        bullet: true,
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 23
        }
      }, "You can add circle bullet by using ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 60
        }
      }, "bullet"), " property in", " ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 25
        }
      }, "Dropdown.Item")))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }
      }, "Header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, "Normal header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 27
        }
      }, "Header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faRocket"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faComments"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPaperPlane"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        className: "d-inline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 25
        }
      }, "Large header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Header, {
        size: "lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 27
        }
      }, "Header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faRocket"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faComments"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPaperPlane"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 23
        }
      }, "Insert header to a dropdown menu with ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 63
        }
      }, "Dropdown.Header"), ". If you want to make dropdown header larger, you must extend the component with", " ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      }, "size"), " property"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }
      }, "Divider"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 27
        }
      }, "Header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faRocket"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faComments"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Divider, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 27
        }
      }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPaperPlane"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 35
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 23
        }
      }, "Dividing your dropdown items with ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 59
        }
      }, "Dropdown.Divider"), " component"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 21
        }
      }, "Orientation"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        direction: "up",
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 25
        }
      }, "Dropup"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 27
        }
      }, "omething else here"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        direction: "right",
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, "Dropright"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        direction: "left",
        className: "d-inline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, "Dropleft"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 23
        }
      }, "Change dropdown menu orientation by applying ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 70
        }
      }, "direction"), " with", " ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 25
        }
      }, "left|right|down|up"), " to ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 60
        }
      }, "Dropdown"), " components"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 21
        }
      }, "Menu alignment"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 25
        }
      }, "Right"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        right: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        className: "d-inline mr-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }
      }, "Left"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 27
        }
      }, "Something else here"))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 23
        }
      }, "Apply ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 31
        }
      }, "right"), " property to the ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 66
        }
      }, "Dropdown.Menu"), " to change alignment"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 21
        }
      }, "Text"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        className: "p-4 text-muted",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 25
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 27
        }
      }, "Some example text that's free-flowing within the dropdown menu."), __jsx("p", {
        className: "mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 27
        }
      }, "And this is more example text."))), __jsx("p", {
        className: "mt-2 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 23
        }
      }, "You can insert any elements into dropdown menu"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 21
        }
      }, "Submenu"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 27
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 27
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Submenu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 27
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        tag: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 29
        }
      }, "Submenu"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].SubmenuMenu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 29
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 31
        }
      }, "Item 1"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 31
        }
      }, "Item 2"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 31
        }
      }, "Item 3"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Submenu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 27
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        tag: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 29
        }
      }, "Another submenu"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].SubmenuMenu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 29
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 31
        }
      }, "Item 1"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 31
        }
      }, "Item 2"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 31
        }
      }, "Item 3"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Divider, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 31
        }
      }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 31
        }
      }, "Item 4"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 31
        }
      }, "Item 5"))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Divider, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 27
        }
      }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 27
        }
      }, "Something else here"))))), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        row: true,
        className: "mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 19
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        sm: "4",
        lg: "3",
        className: "text-muted text-sm-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 21
        }
      }, "Grid"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "8",
        lg: "9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 21
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Uncontrolled, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 23
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }
      }, "Click me"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 25
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 27
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Col, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 29
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 31
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 31
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 31
        }
      }, "Something else here")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Col, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 29
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faRocket"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 39
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 31
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faComments"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 39
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 31
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPaperPlane"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 39
          }
        }),
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 31
        }
      }, "Something else here")), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Col, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 29
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 31
        }
      }, "Header"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        bullet: true,
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 31
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        bullet: true,
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 31
        }
      }, "Something else here"))))), __jsx("p", {
        className: "mb-0 mt-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 23
        }
      }, "Combine ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 33
        }
      }, "Dropdown.Row"), " and ", __jsx("code", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 63
        }
      }, "Dropdown.Col"), " to make the grid")))))))));
    }
  }]);

  return DropdownPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // Controlled dropdown example


var DropdownControlled = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DropdownControlled, _React$Component2);

  var _super2 = _createSuper(DropdownControlled);

  function DropdownControlled() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DropdownControlled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DropdownControlled, [{
    key: "render",
    value: function render() {
      return __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 7
        }
      }), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Toggle, {
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 9
        }
      }, "Controlled"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Menu, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 9
        }
      }, __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 11
        }
      }, "Action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 11
        }
      }, "Another action"), __jsx(_panely_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"].Item, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 11
        }
      }, "Something else here")));
    }
  }]);

  return DropdownControlled;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function mapDispathToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])({
    pageChangeHeaderTitle: store_actions__WEBPACK_IMPORTED_MODULE_11__["pageChangeHeaderTitle"],
    breadcrumbChange: store_actions__WEBPACK_IMPORTED_MODULE_11__["breadcrumbChange"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(null, mapDispathToProps)(Object(components_layout_withLayout__WEBPACK_IMPORTED_MODULE_15__["default"])(DropdownPage)));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VsZW1lbnRzL2Jhc2UvZHJvcGRvd24uanN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duUGFnZSIsInByb3BzIiwicGFnZUNoYW5nZUhlYWRlclRpdGxlIiwiYnJlYWRjcnVtYkNoYW5nZSIsInRleHQiLCJsaW5rIiwiU29saWRJY29uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJEcm9wZG93bkNvbnRyb2xsZWQiLCJpc09wZW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwidG9nZ2xlIiwibWFwRGlzcGF0aFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJ3aXRoTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCO0FBQ0EsV0FBS0MsS0FBTCxDQUFXQyxxQkFBWCxDQUFpQyxVQUFqQyxFQUZrQixDQUdsQjs7QUFDQSxXQUFLRCxLQUFMLENBQVdFLGdCQUFYLENBQTRCLENBQzFCO0FBQUVDLFlBQUksRUFBRSxXQUFSO0FBQXFCQyxZQUFJLEVBQUU7QUFBM0IsT0FEMEIsRUFFMUI7QUFBRUQsWUFBSSxFQUFFO0FBQVIsT0FGMEIsRUFHMUI7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FIMEIsRUFJMUI7QUFBRUEsWUFBSSxFQUFFLFVBQVI7QUFBb0JDLFlBQUksRUFBRTtBQUExQixPQUowQixDQUE1QjtBQU1EOzs7NkJBRVE7QUFDUCxhQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFB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LElBQVY7QUFBZSxZQUFJLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixFQUdFLE1BQUMsMkRBQUQsQ0FBVSxJQUFWO0FBQWUsWUFBSSxFQUFDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSEYsQ0FGRixDQURGO0FBVUQ7Ozs7RUFwQjhCTSw0Q0FBSyxDQUFDQyxTOztBQXVCdkMsU0FBU00saUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDO0FBQ25DLFNBQU9DLGlFQUFrQixDQUFDO0FBQUVkLHlCQUFxQixFQUFyQkEsb0VBQUY7QUFBeUJDLG9CQUFnQixFQUFoQkEsK0RBQWdCQTtBQUF6QyxHQUFELEVBQThDWSxRQUE5QyxDQUF6QjtBQUNEOztBQUVjRSwySEFBTyxDQUFDLElBQUQsRUFBT0gsaUJBQVAsQ0FBUCxDQUFpQ0ksNkVBQVUsQ0FBQ2xCLFlBQUQsQ0FBM0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbGVtZW50cy9iYXNlL2Ryb3Bkb3duLmNhYjc2YTk3YjhmMjkzNDU1NGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBSb3csXG4gIENvbCxcbiAgRm9ybSxcbiAgTGFiZWwsXG4gIElucHV0LFxuICBCdXR0b24sXG4gIFBvcnRsZXQsXG4gIERyb3Bkb3duLFxuICBDb250YWluZXIsXG59IGZyb20gXCJAcGFuZWx5L2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiXG5pbXBvcnQgeyBwYWdlQ2hhbmdlSGVhZGVyVGl0bGUsIGJyZWFkY3J1bWJDaGFuZ2UgfSBmcm9tIFwic3RvcmUvYWN0aW9uc1wiXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgKiBhcyBTb2xpZEljb24gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXG5pbXBvcnQgd2l0aExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvd2l0aExheW91dFwiXG4vL2ltcG9ydCB3aXRoQXV0aCBmcm9tIFwiY29tcG9uZW50cy9maXJlYmFzZS9maXJlYmFzZVdpdGhBdXRoXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5jbGFzcyBEcm9wZG93blBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTZXQgaGVhZGVyIHRpdGxlXG4gICAgdGhpcy5wcm9wcy5wYWdlQ2hhbmdlSGVhZGVyVGl0bGUoXCJEcm9wZG93blwiKVxuICAgIC8vIFNldCBicmVhZGNydW1iIGRhdGFcbiAgICB0aGlzLnByb3BzLmJyZWFkY3J1bWJDaGFuZ2UoW1xuICAgICAgeyB0ZXh0OiBcIkRhc2hib2FyZFwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIkVsZW1lbnRzXCIgfSxcbiAgICAgIHsgdGV4dDogXCJCYXNlXCIgfSxcbiAgICAgIHsgdGV4dDogXCJEcm9wZG93blwiLCBsaW5rOiBcIi9lbGVtZW50cy9iYXNlL2Ryb3Bkb3duXCIgfVxuICAgIF0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRyb3Bkb3duIHwgUGFuZWx5PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgey8qIEJFR0lOIFBvcnRsZXQgKi99XG4gICAgICAgICAgICAgIDxQb3J0bGV0PlxuICAgICAgICAgICAgICAgIDxQb3J0bGV0LkhlYWRlciBib3JkZXJlZD5cbiAgICAgICAgICAgICAgICAgIDxQb3J0bGV0LlRpdGxlPkRyb3Bkb3duIGV4YW1wbGVzPC9Qb3J0bGV0LlRpdGxlPlxuICAgICAgICAgICAgICAgIDwvUG9ydGxldC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPFBvcnRsZXQuQm9keT5cbiAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgcm93PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc209XCI0XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXNtLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQmFzaWMgZGVtb1xuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkNvbnRyb2xsZWQgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5VbmNvbnRyb2xsZWQgY2xhc3NOYW1lPVwiZC1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgY2FyZXQ+VW5jb250cm9sbGVkPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgcm93PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc209XCI0XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXNtLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQW5pbWF0ZWQgZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjhcIiBsZz1cIjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgY2FyZXQ+Q2xpY2sgbWU8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGFuaW1hdGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHRlbmQgPGNvZGU+RHJvcGRvd24uTWVudTwvY29kZT4gd2l0aCA8Y29kZT5hbmltYXRlZDwvY29kZT4gdG8gYXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbiB3aGVuIGRyb3Bkb3duIG9wZW5lZFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICB7LyogRU5EIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHNtPVwiNFwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1zbS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEljb25zXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI4XCIgbGc9XCI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGNhcmV0PkNsaWNrIG1lPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYVJvY2tldH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYUNvbW1lbnRzfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFQYXBlclBsYW5lfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlIDxjb2RlPmljb248L2NvZGU+IHByb3BlcnR5IHdpdGggYW4gaWNvbiBpbnNpZGUgdG8gYWRkIGFuIGljb24gYmVmb3JlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICB7LyogRU5EIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHNtPVwiNFwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1zbS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEJ1bGxldFxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5DbGljayBtZTwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGJ1bGxldCBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGJ1bGxldCBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gYnVsbGV0IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVORCBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gYWRkIGNpcmNsZSBidWxsZXQgYnkgdXNpbmcgPGNvZGU+YnVsbGV0PC9jb2RlPiBwcm9wZXJ0eSBpbntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPkRyb3Bkb3duLkl0ZW08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgcm93PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc209XCI0XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXNtLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI4XCIgbGc9XCI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5VbmNvbnRyb2xsZWQgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5Ob3JtYWwgaGVhZGVyPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkhlYWRlcj5IZWFkZXI8L0Ryb3Bkb3duLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYVJvY2tldH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYUNvbW1lbnRzfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFQYXBlclBsYW5lfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkIGNsYXNzTmFtZT1cImQtaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGNhcmV0PkxhcmdlIGhlYWRlcjwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5IZWFkZXIgc2l6ZT1cImxnXCI+SGVhZGVyPC9Ecm9wZG93bi5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFSb2NrZXR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFDb21tZW50c30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhUGFwZXJQbGFuZX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVORCBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluc2VydCBoZWFkZXIgdG8gYSBkcm9wZG93biBtZW51IHdpdGggPGNvZGU+RHJvcGRvd24uSGVhZGVyPC9jb2RlPi4gSWYgeW91XG4gICAgICAgICAgICAgICAgICAgICAgICB3YW50IHRvIG1ha2UgZHJvcGRvd24gaGVhZGVyIGxhcmdlciwgeW91IG11c3QgZXh0ZW5kIHRoZSBjb21wb25lbnQgd2l0aHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnNpemU8L2NvZGU+IHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgcm93PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc209XCI0XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXNtLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGl2aWRlclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5DbGljayBtZTwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5IZWFkZXI+SGVhZGVyPC9Ecm9wZG93bi5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFSb2NrZXR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFDb21tZW50c30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhUGFwZXJQbGFuZX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVORCBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkaW5nIHlvdXIgZHJvcGRvd24gaXRlbXMgd2l0aCA8Y29kZT5Ecm9wZG93bi5EaXZpZGVyPC9jb2RlPiBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgey8qIEVORCBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCByb3c+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBzbT1cIjRcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtc20tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBPcmllbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkIGRpcmVjdGlvbj1cInVwXCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5Ecm9wdXA8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5vbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVORCBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlVuY29udHJvbGxlZCBkaXJlY3Rpb249XCJyaWdodFwiIGNsYXNzTmFtZT1cImQtaW5saW5lIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgY2FyZXQ+RHJvcHJpZ2h0PC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkIGRpcmVjdGlvbj1cImxlZnRcIiBjbGFzc05hbWU9XCJkLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5Ecm9wbGVmdDwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEVORCBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZSBkcm9wZG93biBtZW51IG9yaWVudGF0aW9uIGJ5IGFwcGx5aW5nIDxjb2RlPmRpcmVjdGlvbjwvY29kZT4gd2l0aHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPmxlZnR8cmlnaHR8ZG93bnx1cDwvY29kZT4gdG8gPGNvZGU+RHJvcGRvd248L2NvZGU+IGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgey8qIEVORCBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCByb3c+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBzbT1cIjRcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtc20tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNZW51IGFsaWdubWVudFxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkIGNsYXNzTmFtZT1cImQtaW5saW5lIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgY2FyZXQ+UmlnaHQ8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5VbmNvbnRyb2xsZWQgY2xhc3NOYW1lPVwiZC1pbmxpbmUgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5MZWZ0PC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwbHkgPGNvZGU+cmlnaHQ8L2NvZGU+IHByb3BlcnR5IHRvIHRoZSA8Y29kZT5Ecm9wZG93bi5NZW51PC9jb2RlPiB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlIGFsaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICB7LyogRU5EIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHNtPVwiNFwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1zbS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRleHRcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjhcIiBsZz1cIjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogQkVHSU4gRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgY2FyZXQ+Q2xpY2sgbWU8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGNsYXNzTmFtZT1cInAtNCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgZXhhbXBsZSB0ZXh0IHRoYXQncyBmcmVlLWZsb3dpbmcgd2l0aGluIHRoZSBkcm9wZG93biBtZW51LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPkFuZCB0aGlzIGlzIG1vcmUgZXhhbXBsZSB0ZXh0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgbWItMFwiPllvdSBjYW4gaW5zZXJ0IGFueSBlbGVtZW50cyBpbnRvIGRyb3Bkb3duIG1lbnU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgey8qIEVORCBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCByb3c+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBzbT1cIjRcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtc20tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTdWJtZW51XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCI4XCIgbGc9XCI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5VbmNvbnRyb2xsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIGNhcmV0PkNsaWNrIG1lPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biBTdWJtZW51ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uU3VibWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSB0YWc9XCJidXR0b25cIj5TdWJtZW51PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5TdWJtZW51TWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+SXRlbSAxPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5JdGVtIDI8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkl0ZW0gMzwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlN1Ym1lbnVNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlN1Ym1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRHJvcGRvd24gU3VibWVudSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIERyb3Bkb3duIFN1Ym1lbnUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5TdWJtZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIHRhZz1cImJ1dHRvblwiPkFub3RoZXIgc3VibWVudTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uU3VibWVudU1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkl0ZW0gMTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+SXRlbSAyPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5JdGVtIDM8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uRGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5JdGVtIDQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiPkl0ZW0gNTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlN1Ym1lbnVNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlN1Ym1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRHJvcGRvd24gU3VibWVudSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRHJvcGRvd24gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgey8qIEVORCBGb3JtIEdyb3VwICovfVxuICAgICAgICAgICAgICAgICAgey8qIEJFR0lOIEZvcm0gR3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCByb3cgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc209XCI0XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXNtLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3JpZFxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiOFwiIGxnPVwiOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBCRUdJTiBEcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVW5jb250cm9sbGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5DbGljayBtZTwvRHJvcGRvd24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFSb2NrZXR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtTb2xpZEljb24uZmFDb21tZW50c30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxGb250QXdlc29tZUljb24gaWNvbj17U29saWRJY29uLmZhUGFwZXJQbGFuZX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSGVhZGVyPkhlYWRlcjwvRHJvcGRvd24uSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gYnVsbGV0IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBidWxsZXQgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlVuY29udHJvbGxlZD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRU5EIERyb3Bkb3duICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tYmluZSA8Y29kZT5Ecm9wZG93bi5Sb3c8L2NvZGU+IGFuZCA8Y29kZT5Ecm9wZG93bi5Db2w8L2NvZGU+IHRvIG1ha2UgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHsvKiBFTkQgRm9ybSBHcm91cCAqL31cbiAgICAgICAgICAgICAgICA8L1BvcnRsZXQuQm9keT5cbiAgICAgICAgICAgICAgPC9Qb3J0bGV0PlxuICAgICAgICAgICAgICB7LyogRU5EIFBvcnRsZXQgKi99XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG4vLyBDb250cm9sbGVkIGRyb3Bkb3duIGV4YW1wbGVcbmNsYXNzIERyb3Bkb3duQ29udHJvbGxlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIERlZmF1bHQgc3RhdGVzXG4gIHN0YXRlID0geyBpc09wZW46IGZhbHNlIH1cblxuICAvLyBIYW5kbGUgZHJvcGRvd24gdG9nZ2xlIGV2ZW50XG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4gfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IHRvZ2dsZT17dGhpcy50b2dnbGV9IHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSBjYXJldD5Db250cm9sbGVkPC9Ecm9wZG93bi5Ub2dnbGU+XG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgcGFnZUNoYW5nZUhlYWRlclRpdGxlLCBicmVhZGNydW1iQ2hhbmdlIH0sIGRpc3BhdGNoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGhUb1Byb3BzKSh3aXRoTGF5b3V0KERyb3Bkb3duUGFnZSkpXG4iXSwic291cmNlUm9vdCI6IiJ9