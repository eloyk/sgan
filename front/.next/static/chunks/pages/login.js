_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/login"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CEloy%5CDesktop%5Csgan%5Cfront%5Csrc%5Cpages%5Clogin.jsx!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CEloy%5CDesktop%5Csgan%5Cfront%5Csrc%5Cpages%5Clogin.jsx ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/login",
      function () {
        return __webpack_require__(/*! ./src/pages/login.jsx */ "./src/pages/login.jsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import {
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   Button,
//   Portlet,
//   Spinner,
//   Container,
//   CustomInput,
//   FloatLabel,
//   Widget12
// } from "@panely/components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useForm, Controller } from "react-hook-form"
// import { firebaseClient } from "components/firebase/firebaseClient"
// import { yupResolver } from "@hookform/resolvers"
// import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
// import * as yup from "yup"
// import verifyCookie from "components/firebase/firebaseVerifyCookie"
// import withLayout from "components/layout/withLayout"
// import swalContent from "sweetalert2-react-content"
// import Router from "next/router"
// import Swal from "@panely/sweetalert2"
// import Link from "next/link"
// import Head from "next/head"
// import PAGE from "config/page.config"
// // Use SweetAlert React Content library
// const ReactSwal = swalContent(Swal)
// // Set SweetAlert options
// const swal = ReactSwal.mixin({
//   customClass: {
//     confirmButton: "btn btn-label-success btn-wide mx-1",
//     cancelButton: "btn btn-label-danger btn-wide mx-1"
//   },
//   buttonsStyling: false
// })
// function LoginPage() {
//   return (
//     <React.Fragment>
//       <Head>
//         <title>Login | Panely</title>
//       </Head>
//       <Container fluid>
//         <Row noGutters className="align-items-center justify-content-center h-100">
//           <Col sm="8" md="6" lg="4">
//             {/* BEGIN Portlet */}
//             <Portlet>
//               <Portlet.Body>
//                 <div className="text-center mt-2 mb-4">
//                   {/* BEGIN Widget */}
//                   <Widget12 display circle variant="label-primary" className="mb-4">
//                     <FontAwesomeIcon icon={SolidIcon.faUserAlt} />
//                   </Widget12>
//                   {/* END Widget */}
//                 </div>
//                 <LoginForm />
//               </Portlet.Body>
//             </Portlet>
//             {/* END Portlet */}
//           </Col>
//         </Row>
//       </Container>
//     </React.Fragment>
//   )
// }
// function LoginForm() {
//   // Loading state
//   const [loading, setLoading] = React.useState(false)
//   // Define Yup schema for form validation
//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Your email is not valid")
//       .required("Please enter your email"),
//     password: yup
//       .string()
//       .min(6, "Please enter at least 6 characters")
//       .required("Please provide your password")
//   })
//   const { control, handleSubmit, errors } = useForm({
//     // Apply Yup as resolver for react-hook-form
//     resolver: yupResolver(schema),
//     // Define the default values for all input forms
//     defaultValues: {
//       email: "",
//       password: ""
//     }
//   })
//   // Handle form submit event
//   const onSubmit = async ({ email, password }) => {
//     // Show loading indicator
//     setLoading(true)
//     // Trying to login with email and password with firebase
//     await firebaseClient
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         // Redirect to dashboard page
//         Router.push(Router.query.redirect || PAGE.dashboardPagePath)
//       })
//       .catch(err => {
//         // Show the error message if authentication is failed
//         swal.fire({ text: err.message, icon: "error" })
//       })
//     // Hide loading indicator
//     setLoading(false)
//   }
//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       {/* BEGIN Form Group */}
//       <Form.Group>
//         <FloatLabel size="lg">
//           <Controller
//             as={Input}
//             type="email"
//             id="email"
//             name="email"
//             size="lg"
//             control={control}
//             invalid={Boolean(errors.email)}
//             placeholder="Please insert your email"
//           />
//           <Label for="email">Email</Label>
//           {errors.email && <Form.Feedback children={errors.email.message} />}
//         </FloatLabel>
//       </Form.Group>
//       {/* END Form Group */}
//       {/* BEGIN Form Group */}
//       <Form.Group>
//         <FloatLabel size="lg">
//           <Controller
//             as={Input}
//             type="password"
//             id="password"
//             name="password"
//             size="lg"
//             control={control}
//             invalid={Boolean(errors.password)}
//             placeholder="Please insert your password"
//           />
//           <Label for="password">Password</Label>
//           {errors.password && <Form.Feedback children={errors.password.message} />}
//         </FloatLabel>
//       </Form.Group>
//       {/* END Form Group */}
//       <div className="d-flex align-items-center justify-content-between">
//         <span>
//           Don't have an account ? <Link href="/register">Sign Up</Link>
//         </span>
//         <Button type="submit" variant="label-primary" size="lg" width="widest" disabled={loading}>
//           {loading ? <Spinner className="mr-2" /> : null} Login
//         </Button>
//       </div>
//     </Form>
//   )
// }
// LoginPage.getInitialProps = async ctx => {
//   const result = await verifyCookie(ctx)
//   // Redirect to dashboard page if the user has logged in
//   if (result) {
//     if (ctx.res) {
//       ctx.res.writeHead(302, { Location: ctx.query.redirect || PAGE.dashboardPagePath })
//       ctx.res.end()
//     } else {
//       Router.push(Router.query.redirect || PAGE.dashboardPagePath)
//     }
//   }
//   return { firebase: null }
// }
// export default withLayout(LoginPage, "blank")

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=C%3A%5CUsers%5CEloy%5CDesktop%5Csgan%5Cfront%5Csrc%5Cpages%5Clogin.jsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9EQUE4RDtBQUNyRjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9sb2dpblwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEVsb3lcXFxcRGVza3RvcFxcXFxzZ2FuXFxcXGZyb250XFxcXHNyY1xcXFxwYWdlc1xcXFxsb2dpbi5qc3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vIGltcG9ydCB7XG4vLyAgIFJvdyxcbi8vICAgQ29sLFxuLy8gICBGb3JtLFxuLy8gICBMYWJlbCxcbi8vICAgSW5wdXQsXG4vLyAgIEJ1dHRvbixcbi8vICAgUG9ydGxldCxcbi8vICAgU3Bpbm5lcixcbi8vICAgQ29udGFpbmVyLFxuLy8gICBDdXN0b21JbnB1dCxcbi8vICAgRmxvYXRMYWJlbCxcbi8vICAgV2lkZ2V0MTJcbi8vIH0gZnJvbSBcIkBwYW5lbHkvY29tcG9uZW50c1wiXG4vLyBpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCJcbi8vIGltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCJcbi8vIGltcG9ydCB7IGZpcmViYXNlQ2xpZW50IH0gZnJvbSBcImNvbXBvbmVudHMvZmlyZWJhc2UvZmlyZWJhc2VDbGllbnRcIlxuLy8gaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVyc1wiXG4vLyBpbXBvcnQgKiBhcyBTb2xpZEljb24gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXG4vLyBpbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXG4vLyBpbXBvcnQgdmVyaWZ5Q29va2llIGZyb20gXCJjb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlVmVyaWZ5Q29va2llXCJcbi8vIGltcG9ydCB3aXRoTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC93aXRoTGF5b3V0XCJcbi8vIGltcG9ydCBzd2FsQ29udGVudCBmcm9tIFwic3dlZXRhbGVydDItcmVhY3QtY29udGVudFwiXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG4vLyBpbXBvcnQgU3dhbCBmcm9tIFwiQHBhbmVseS9zd2VldGFsZXJ0MlwiXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuLy8gaW1wb3J0IFBBR0UgZnJvbSBcImNvbmZpZy9wYWdlLmNvbmZpZ1wiXG5cbi8vIC8vIFVzZSBTd2VldEFsZXJ0IFJlYWN0IENvbnRlbnQgbGlicmFyeVxuLy8gY29uc3QgUmVhY3RTd2FsID0gc3dhbENvbnRlbnQoU3dhbClcblxuLy8gLy8gU2V0IFN3ZWV0QWxlcnQgb3B0aW9uc1xuLy8gY29uc3Qgc3dhbCA9IFJlYWN0U3dhbC5taXhpbih7XG4vLyAgIGN1c3RvbUNsYXNzOiB7XG4vLyAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxhYmVsLXN1Y2Nlc3MgYnRuLXdpZGUgbXgtMVwiLFxuLy8gICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWxhYmVsLWRhbmdlciBidG4td2lkZSBteC0xXCJcbi8vICAgfSxcbi8vICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPFJlYWN0LkZyYWdtZW50PlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5Mb2dpbiB8IFBhbmVseTwvdGl0bGU+XG4vLyAgICAgICA8L0hlYWQ+XG4vLyAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuLy8gICAgICAgICA8Um93IG5vR3V0dGVycyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBoLTEwMFwiPlxuLy8gICAgICAgICAgIDxDb2wgc209XCI4XCIgbWQ9XCI2XCIgbGc9XCI0XCI+XG4vLyAgICAgICAgICAgICB7LyogQkVHSU4gUG9ydGxldCAqL31cbi8vICAgICAgICAgICAgIDxQb3J0bGV0PlxuLy8gICAgICAgICAgICAgICA8UG9ydGxldC5Cb2R5PlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMiBtYi00XCI+XG4vLyAgICAgICAgICAgICAgICAgICB7LyogQkVHSU4gV2lkZ2V0ICovfVxuLy8gICAgICAgICAgICAgICAgICAgPFdpZGdldDEyIGRpc3BsYXkgY2lyY2xlIHZhcmlhbnQ9XCJsYWJlbC1wcmltYXJ5XCIgY2xhc3NOYW1lPVwibWItNFwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1NvbGlkSWNvbi5mYVVzZXJBbHR9IC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L1dpZGdldDEyPlxuLy8gICAgICAgICAgICAgICAgICAgey8qIEVORCBXaWRnZXQgKi99XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxuLy8gICAgICAgICAgICAgICA8L1BvcnRsZXQuQm9keT5cbi8vICAgICAgICAgICAgIDwvUG9ydGxldD5cbi8vICAgICAgICAgICAgIHsvKiBFTkQgUG9ydGxldCAqL31cbi8vICAgICAgICAgICA8L0NvbD5cbi8vICAgICAgICAgPC9Sb3c+XG4vLyAgICAgICA8L0NvbnRhaW5lcj5cbi8vICAgICA8L1JlYWN0LkZyYWdtZW50PlxuLy8gICApXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIExvZ2luRm9ybSgpIHtcbi8vICAgLy8gTG9hZGluZyBzdGF0ZVxuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuLy8gICAvLyBEZWZpbmUgWXVwIHNjaGVtYSBmb3IgZm9ybSB2YWxpZGF0aW9uXG4vLyAgIGNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4vLyAgICAgZW1haWw6IHl1cFxuLy8gICAgICAgLnN0cmluZygpXG4vLyAgICAgICAuZW1haWwoXCJZb3VyIGVtYWlsIGlzIG5vdCB2YWxpZFwiKVxuLy8gICAgICAgLnJlcXVpcmVkKFwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIiksXG4vLyAgICAgcGFzc3dvcmQ6IHl1cFxuLy8gICAgICAgLnN0cmluZygpXG4vLyAgICAgICAubWluKDYsIFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiKVxuLy8gICAgICAgLnJlcXVpcmVkKFwiUGxlYXNlIHByb3ZpZGUgeW91ciBwYXNzd29yZFwiKVxuLy8gICB9KVxuXG4vLyAgIGNvbnN0IHsgY29udHJvbCwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oe1xuLy8gICAgIC8vIEFwcGx5IFl1cCBhcyByZXNvbHZlciBmb3IgcmVhY3QtaG9vay1mb3JtXG4vLyAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSksXG4vLyAgICAgLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIGlucHV0IGZvcm1zXG4vLyAgICAgZGVmYXVsdFZhbHVlczoge1xuLy8gICAgICAgZW1haWw6IFwiXCIsXG4vLyAgICAgICBwYXNzd29yZDogXCJcIlxuLy8gICAgIH1cbi8vICAgfSlcblxuLy8gICAvLyBIYW5kbGUgZm9ybSBzdWJtaXQgZXZlbnRcbi8vICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuLy8gICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3Jcbi8vICAgICBzZXRMb2FkaW5nKHRydWUpXG5cbi8vICAgICAvLyBUcnlpbmcgdG8gbG9naW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQgd2l0aCBmaXJlYmFzZVxuLy8gICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50XG4vLyAgICAgICAuYXV0aCgpXG4vLyAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuLy8gICAgICAgLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICAvLyBSZWRpcmVjdCB0byBkYXNoYm9hcmQgcGFnZVxuLy8gICAgICAgICBSb3V0ZXIucHVzaChSb3V0ZXIucXVlcnkucmVkaXJlY3QgfHwgUEFHRS5kYXNoYm9hcmRQYWdlUGF0aClcbi8vICAgICAgIH0pXG4vLyAgICAgICAuY2F0Y2goZXJyID0+IHtcbi8vICAgICAgICAgLy8gU2hvdyB0aGUgZXJyb3IgbWVzc2FnZSBpZiBhdXRoZW50aWNhdGlvbiBpcyBmYWlsZWRcbi8vICAgICAgICAgc3dhbC5maXJlKHsgdGV4dDogZXJyLm1lc3NhZ2UsIGljb246IFwiZXJyb3JcIiB9KVxuLy8gICAgICAgfSlcblxuLy8gICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0b3Jcbi8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4vLyAgICAgICB7LyogQkVHSU4gRm9ybSBHcm91cCAqL31cbi8vICAgICAgIDxGb3JtLkdyb3VwPlxuLy8gICAgICAgICA8RmxvYXRMYWJlbCBzaXplPVwibGdcIj5cbi8vICAgICAgICAgICA8Q29udHJvbGxlclxuLy8gICAgICAgICAgICAgYXM9e0lucHV0fVxuLy8gICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuLy8gICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4vLyAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuLy8gICAgICAgICAgICAgaW52YWxpZD17Qm9vbGVhbihlcnJvcnMuZW1haWwpfVxuLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5zZXJ0IHlvdXIgZW1haWxcIlxuLy8gICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L0xhYmVsPlxuLy8gICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPEZvcm0uRmVlZGJhY2sgY2hpbGRyZW49e2Vycm9ycy5lbWFpbC5tZXNzYWdlfSAvPn1cbi8vICAgICAgICAgPC9GbG9hdExhYmVsPlxuLy8gICAgICAgPC9Gb3JtLkdyb3VwPlxuLy8gICAgICAgey8qIEVORCBGb3JtIEdyb3VwICovfVxuLy8gICAgICAgey8qIEJFR0lOIEZvcm0gR3JvdXAgKi99XG4vLyAgICAgICA8Rm9ybS5Hcm91cD5cbi8vICAgICAgICAgPEZsb2F0TGFiZWwgc2l6ZT1cImxnXCI+XG4vLyAgICAgICAgICAgPENvbnRyb2xsZXJcbi8vICAgICAgICAgICAgIGFzPXtJbnB1dH1cbi8vICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICBzaXplPVwibGdcIlxuLy8gICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbi8vICAgICAgICAgICAgIGludmFsaWQ9e0Jvb2xlYW4oZXJyb3JzLnBhc3N3b3JkKX1cbi8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGluc2VydCB5b3VyIHBhc3N3b3JkXCJcbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDxMYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9MYWJlbD5cbi8vICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxGb3JtLkZlZWRiYWNrIGNoaWxkcmVuPXtlcnJvcnMucGFzc3dvcmQubWVzc2FnZX0gLz59XG4vLyAgICAgICAgIDwvRmxvYXRMYWJlbD5cbi8vICAgICAgIDwvRm9ybS5Hcm91cD5cbi8vICAgICAgIHsvKiBFTkQgRm9ybSBHcm91cCAqL31cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuLy8gICAgICAgICA8c3Bhbj5cbi8vICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQgPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+U2lnbiBVcDwvTGluaz5cbi8vICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwibGFiZWwtcHJpbWFyeVwiIHNpemU9XCJsZ1wiIHdpZHRoPVwid2lkZXN0XCIgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuLy8gICAgICAgICAgIHtsb2FkaW5nID8gPFNwaW5uZXIgY2xhc3NOYW1lPVwibXItMlwiIC8+IDogbnVsbH0gTG9naW5cbi8vICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0Zvcm0+XG4vLyAgIClcbi8vIH1cblxuLy8gTG9naW5QYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4vLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZlcmlmeUNvb2tpZShjdHgpXG5cbi8vICAgLy8gUmVkaXJlY3QgdG8gZGFzaGJvYXJkIHBhZ2UgaWYgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpblxuLy8gICBpZiAocmVzdWx0KSB7XG4vLyAgICAgaWYgKGN0eC5yZXMpIHtcbi8vICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogY3R4LnF1ZXJ5LnJlZGlyZWN0IHx8IFBBR0UuZGFzaGJvYXJkUGFnZVBhdGggfSlcbi8vICAgICAgIGN0eC5yZXMuZW5kKClcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgUm91dGVyLnB1c2goUm91dGVyLnF1ZXJ5LnJlZGlyZWN0IHx8IFBBR0UuZGFzaGJvYXJkUGFnZVBhdGgpXG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHsgZmlyZWJhc2U6IG51bGwgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0KExvZ2luUGFnZSwgXCJibGFua1wiKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==