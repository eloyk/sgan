module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AeSz");


/***/ }),

/***/ "AeSz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qYya");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NuevaEmpresa = ({
  usuarioActual
}) => {
  if (usuarioActual === null) {
    return () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }

  const {
    0: animal,
    1: updateAnimal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: nombreEmpresa,
    1: setNombreEmpresa
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: clasifEmpresa,
    1: setClasifEmpresa
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: tipoEmpresa,
    1: setTipoEmpresa
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: fundador,
    1: setFundador
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: telefono,
    1: setTelefono
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: emailEmpresa,
    1: setEmailEmpresa
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: RNC,
    1: setRNC
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let usuarioIdAlta;
  let emailUsuarioAlta;
  let CLASIFICACION_EMPRESA = ['Empresas industriales', 'Industrias básicas', 'Industrias de extracción', 'Industrias de bienes de capital', 'Industrias intermedias', 'Industria de bienes semiduraderos', 'Industria de bienes no duraderos', 'Las industrias de punta', 'Empresas comerciales'];
  let TIPO_EMPRESA = ['Productos'];
  const {
    doRequest,
    errores
  } = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    url: '/api/empresa',
    method: 'post',
    body: {
      nombreEmpresa,
      clasifEmpresa,
      tipoEmpresa,
      fundador,
      telefono,
      emailEmpresa,
      RNC,
      usuarioIdAlta,
      emailUsuarioAlta
    },
    onSuccess: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/empresa')
  });

  const onSubmit = event => {
    event.preventDefault();
    usuarioIdAlta = usuarioActual.id, emailUsuarioAlta = usuarioActual.email;
    doRequest();
  };

  return __jsx("div", null, __jsx("h1", null, "Crear empresa"), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "nombre de la empresa"), __jsx("input", {
    value: nombreEmpresa,
    onChange: e => setNombreEmpresa(e.target.value),
    className: "form-control"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Clasificacion de la empresa"), __jsx("select", {
    value: clasifEmpresa,
    onChange: e => setClasifEmpresa(e.target.value),
    onBlur: e => setClasifEmpresa(e.target.value),
    className: "custom-select",
    id: "validationCustom04",
    required: true
  }, __jsx("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Selecione la Clasificacion de su empresa"), CLASIFICACION_EMPRESA.map(clEmpresa => __jsx("option", {
    key: clEmpresa,
    value: clEmpresa
  }, clEmpresa)))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Tipo de empresa"), __jsx("select", {
    value: tipoEmpresa,
    onChange: e => setTipoEmpresa(e.target.value),
    onBlur: e => setTipoEmpresa(e.target.value),
    className: "custom-select",
    id: "validationCustom04",
    required: true
  }, __jsx("option", {
    selected: true,
    disabled: true,
    value: ""
  }, "Selecione el tipo de empresa"), TIPO_EMPRESA.map(tipEmpresa => __jsx("option", {
    key: tipEmpresa,
    value: tipEmpresa
  }, tipEmpresa)))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Fundador"), __jsx("input", {
    value: fundador,
    onChange: e => setFundador(e.target.value),
    className: "form-control"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Telefono"), __jsx("input", {
    value: telefono,
    onChange: e => setTelefono(e.target.value),
    className: "form-control"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email de la empresa"), __jsx("input", {
    value: emailEmpresa,
    onChange: e => setEmailEmpresa(e.target.value),
    className: "form-control",
    type: "email",
    id: "inputEmail",
    placeholder: "Correo Electr\xF3nico"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "RNC"), __jsx("input", {
    value: RNC,
    onChange: e => setRNC(e.target.value),
    className: "form-control"
  })), errores, __jsx("button", {
    className: "btn btn-primary"
  }, "Registrar")));
};

NuevaEmpresa.getInitialProps = async (context, client, usuarioActual) => {
  return usuarioActual;
};

/* harmony default export */ __webpack_exports__["default"] = (NuevaEmpresa);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qYya":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = (({
  url,
  method,
  body,
  onSuccess
}) => {
  const {
    0: errores,
    1: setErrores
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const doRequest = async (props = {}) => {
    try {
      setErrores(null);
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a[method](url, _objectSpread(_objectSpread({}, body), props));

      if (onSuccess) {
        onSuccess(response.data);
      } else {
        () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
      }

      return response.data;
    } catch (err) {
      console.log(err.response.data);
      setErrores(__jsx("div", {
        className: "alert alert-danger"
      }, __jsx("h4", null, "Ooops...."), __jsx("ul", {
        className: "my-0"
      }, err.response.data.errores.map(err => __jsx("li", {
        key: err.mensaje
      }, err.mensaje)))));
    }
  };

  return {
    doRequest,
    errores
  };
});

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });