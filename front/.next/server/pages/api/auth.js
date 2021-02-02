module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/firebase/firebaseAdmin.jsx":
/*!***************************************************!*\
  !*** ./src/components/firebase/firebaseAdmin.jsx ***!
  \***************************************************/
/*! exports provided: firebaseAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebaseAdmin", function() { return firebase_admin__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var config_firebase_service_account_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/firebase-service-account.json */ "./src/config/firebase-service-account.json");
var config_firebase_service_account_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! config/firebase-service-account.json */ "./src/config/firebase-service-account.json", 1);
/* harmony import */ var config_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/firebase.config */ "./src/config/firebase.config.jsx");


 // Check whether firebase admin has been initialized

if (!firebase_admin__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  // Initialize firebase admin
  firebase_admin__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__["credential"].cert(config_firebase_service_account_json__WEBPACK_IMPORTED_MODULE_1__),
    databaseURL: config_firebase_config__WEBPACK_IMPORTED_MODULE_2__["default"].databaseURL
  });
}



/***/ }),

/***/ "./src/config/firebase-service-account.json":
/*!**************************************************!*\
  !*** ./src/config/firebase-service-account.json ***!
  \**************************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"PROJECT_ID\",\"private_key_id\":\"PRIVATE_KEY_ID\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nPRIVATE_KEY\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-tes1e@PROJECT_ID.iam.gserviceaccount.com\",\"client_id\":\"CLIENT_ID\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tes1e%40PROJECT_ID.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./src/config/firebase.config.jsx":
/*!****************************************!*\
  !*** ./src/config/firebase.config.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Firebase Configuration
 * Get the configuration in your firebase console page
 */
const FIREBASE = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID"
};
/* harmony default export */ __webpack_exports__["default"] = (FIREBASE);

/***/ }),

/***/ "./src/pages/api/auth.jsx":
/*!********************************!*\
  !*** ./src/pages/api/auth.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_firebase_firebaseAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/firebase/firebaseAdmin */ "./src/components/firebase/firebaseAdmin.jsx");


async function authenticatedHandler(req, res) {
  if (req.method === "POST") {
    // Try to verify token with firebase admin
    try {
      const firebaseData = await components_firebase_firebaseAdmin__WEBPACK_IMPORTED_MODULE_0__["firebaseAdmin"].auth().verifyIdToken(req.body.token); // Return firebase data

      res.status(200).json(firebaseData);
    } catch (err) {
      res.status(401).send("Invalid authentication");
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (authenticatedHandler);

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmlyZWJhc2UvZmlyZWJhc2VBZG1pbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9maXJlYmFzZS5jb25maWcuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvYXV0aC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiJdLCJuYW1lcyI6WyJmaXJlYmFzZUFkbWluIiwibGVuZ3RoIiwiY3JlZGVudGlhbCIsImNlcnQiLCJzZXJ2aWNlQWNjb3VudCIsImRhdGFiYXNlVVJMIiwiRklSRUJBU0UiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXV0aGVudGljYXRlZEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmaXJlYmFzZURhdGEiLCJhdXRoIiwidmVyaWZ5SWRUb2tlbiIsImJvZHkiLCJ0b2tlbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUdBOztBQUNBLElBQUksQ0FBQ0EsbURBQUEsQ0FBbUJDLE1BQXhCLEVBQWdDO0FBQzlCO0FBQ0FELDhEQUFBLENBQTRCO0FBQzFCRSxjQUFVLEVBQUVGLHlEQUFBLENBQXlCRyxJQUF6QixDQUE4QkMsaUVBQTlCLENBRGM7QUFFMUJDLGVBQVcsRUFBRUMsOERBQVEsQ0FBQ0Q7QUFGSSxHQUE1QjtBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxRQUFNLEVBQUUsU0FETztBQUVmQyxZQUFVLEVBQUUsNEJBRkc7QUFHZkgsYUFBVyxFQUFFLG1DQUhFO0FBSWZJLFdBQVMsRUFBRSxZQUpJO0FBS2ZDLGVBQWEsRUFBRSx3QkFMQTtBQU1mQyxtQkFBaUIsRUFBRSxXQU5KO0FBT2ZDLE9BQUssRUFBRSxRQVBRO0FBUWZDLGVBQWEsRUFBRTtBQVJBLENBQWpCO0FBV2VQLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7O0FBRUEsZUFBZVEsb0JBQWYsQ0FBb0NDLEdBQXBDLEVBQXlDQyxHQUF6QyxFQUE4QztBQUM1QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNBLFFBQUk7QUFDRixZQUFNQyxZQUFZLEdBQUcsTUFBTWxCLCtFQUFhLENBQUNtQixJQUFkLEdBQXFCQyxhQUFyQixDQUFtQ0wsR0FBRyxDQUFDTSxJQUFKLENBQVNDLEtBQTVDLENBQTNCLENBREUsQ0FHRjs7QUFDQU4sU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJOLFlBQXJCO0FBQ0QsS0FMRCxDQUtFLE9BQU9PLEdBQVAsRUFBWTtBQUNaVCxTQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRyxJQUFoQixDQUFxQix3QkFBckI7QUFDRDtBQUNGO0FBQ0Y7O0FBRWNaLG1GQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLDJDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYXBpL2F1dGguanN4XCIpO1xuIiwiaW1wb3J0ICogYXMgZmlyZWJhc2VBZG1pbiBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIlxuaW1wb3J0IHNlcnZpY2VBY2NvdW50IGZyb20gXCJjb25maWcvZmlyZWJhc2Utc2VydmljZS1hY2NvdW50Lmpzb25cIlxuaW1wb3J0IEZJUkVCQVNFIGZyb20gXCJjb25maWcvZmlyZWJhc2UuY29uZmlnXCJcblxuLy8gQ2hlY2sgd2hldGhlciBmaXJlYmFzZSBhZG1pbiBoYXMgYmVlbiBpbml0aWFsaXplZFxuaWYgKCFmaXJlYmFzZUFkbWluLmFwcHMubGVuZ3RoKSB7XG4gIC8vIEluaXRpYWxpemUgZmlyZWJhc2UgYWRtaW5cbiAgZmlyZWJhc2VBZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBmaXJlYmFzZUFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXG4gICAgZGF0YWJhc2VVUkw6IEZJUkVCQVNFLmRhdGFiYXNlVVJMXG4gIH0pXG59XG5cbmV4cG9ydCB7IGZpcmViYXNlQWRtaW4gfVxuIiwiLypcbiAqIEZpcmViYXNlIENvbmZpZ3VyYXRpb25cbiAqIEdldCB0aGUgY29uZmlndXJhdGlvbiBpbiB5b3VyIGZpcmViYXNlIGNvbnNvbGUgcGFnZVxuICovXG5cbmNvbnN0IEZJUkVCQVNFID0ge1xuICBhcGlLZXk6IFwiQVBJX0tFWVwiLFxuICBhdXRoRG9tYWluOiBcIlBST0pFQ1RfSUQuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vUFJPSkVDVF9JRC5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiUFJPSkVDVF9JRFwiLFxuICBzdG9yYWdlQnVja2V0OiBcIlBST0pFQ1RfSUQuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiU0VOREVSX0lEXCIsXG4gIGFwcElkOiBcIkFQUF9JRFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctTUVBU1VSRU1FTlRfSURcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBGSVJFQkFTRVxuIiwiaW1wb3J0IHsgZmlyZWJhc2VBZG1pbiB9IGZyb20gXCJjb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlQWRtaW5cIlxuXG5hc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVkSGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBUcnkgdG8gdmVyaWZ5IHRva2VuIHdpdGggZmlyZWJhc2UgYWRtaW5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZmlyZWJhc2VEYXRhID0gYXdhaXQgZmlyZWJhc2VBZG1pbi5hdXRoKCkudmVyaWZ5SWRUb2tlbihyZXEuYm9keS50b2tlbilcblxuICAgICAgLy8gUmV0dXJuIGZpcmViYXNlIGRhdGFcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpcmViYXNlRGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoZW50aWNhdGVkSGFuZGxlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==