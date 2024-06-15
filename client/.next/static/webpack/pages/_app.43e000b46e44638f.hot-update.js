"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar!=!antd */ \"__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav() {\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        try {\n            setState(null);\n        } catch (err) {\n            console.log(err);\n        }\n        router.reload();\n        window.location.href = \"/login\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \" nav d-flex justify-content-between\",\n        style: {\n            backgroundColor: \"blue\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"nav-link text-light logo \".concat(current === \"/\" && \"active\"),\n                style: {\n                    marginLeft: \"2rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        src: \"/images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"FullStackProject\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown show p-1 h5 dropdown-bg   \",\n                    style: {\n                        marginRight: \"2rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"dropdown-toggle text-light\",\n                            href: \"#\",\n                            role: \"button\",\n                            id: \"dropdownMenuLink\",\n                            \"data-toggle\": \"dropdown\",\n                            \"aria-haspopup\": \"true\",\n                            \"aria-expanded\": \"false\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"fs-5 text\",\n                                children: state && state.user && state.user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 48,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuLink\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/user/dashboard\",\n                                    className: \"nav-link dropdown-item \",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/user/profile/update\",\n                                    className: \"nav-link dropdown-item \",\n                                    children: \"Profile\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link dropdown-item\",\n                                    onClick: logout,\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 50,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 45,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        className: \"nav-link text-light h5 \".concat(current === \"/login\" && \"active\"),\n                        style: {\n                            fontSize: \"20px\"\n                        },\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 67,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/register\",\n                        className: \"nav-link text-light h5 \".concat(current === \"/register\" && \"active\"),\n                        style: {\n                            marginRight: \"2rem\",\n                            fontSize: \"20px\"\n                        },\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kyano\\\\OneDrive\\\\Bureaublad\\\\Courses\\\\Notes FullStack\\\\Network Project RealTime\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Nav, \"0lQYQBpiFJGZwvMUxY6YqqbgzSY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzJCO0FBQ2Y7QUFDRDtBQUNWO0FBRTlCLFNBQVNPOztJQUVMLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDTk8sS0FBZSxJQUFJRCxXQUFXRyxPQUFPQyxRQUFRLENBQUNDLFFBQVE7SUFDMUQsR0FBRztRQUFDSixLQUFlLElBQUlFLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtLQUFDO0lBRWhELE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR2hCLGlEQUFVQSxDQUFDRyxpREFBV0E7SUFFaEQsTUFBTWMsU0FBUztRQUNYTixPQUFPTyxZQUFZLENBQUNDLFVBQVUsQ0FBQztRQUMvQixJQUFJO1lBQ0FILFNBQVM7UUFDYixFQUNBLE9BQU9JLEtBQUs7WUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtRQUNBTixPQUFPUyxNQUFNO1FBQ2JaLE9BQU9DLFFBQVEsQ0FBQ1ksSUFBSSxHQUFHO0lBRTNCO0lBRUEscUJBRUksOERBQUNDO1FBQUlDLFdBQVU7UUFDWEMsT0FBTztZQUFFQyxpQkFBaUI7UUFBTzs7MEJBQ2pDLDhEQUFDN0Isa0RBQUlBO2dCQUFDeUIsTUFBSztnQkFBSUUsV0FBVyw0QkFBd0QsT0FBNUJuQixZQUFZLE9BQU87Z0JBQVlvQixPQUFPO29CQUFFRSxZQUFZO2dCQUFPOztrQ0FDN0csOERBQUN4QixzRUFBTUE7d0JBQUN5QixLQUFJOzs7Ozs7a0NBQ1osOERBQUNDO3dCQUFLSixPQUFPOzRCQUFFRSxZQUFZO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs7WUFLckNkLFVBQVUscUJBRU47MEJBQ0ksNEVBQUNpQjtvQkFBSU4sV0FBVTtvQkFDaEJDLE9BQU87d0JBQUVNLGFBQWE7b0JBQU87O3NDQUN4Qiw4REFBQ0M7NEJBQUVSLFdBQVU7NEJBQTZCRixNQUFLOzRCQUFJVyxNQUFLOzRCQUFTQyxJQUFHOzRCQUFtQkMsZUFBWTs0QkFBV0MsaUJBQWM7NEJBQU9DLGlCQUFjO3NDQUM3SSw0RUFBQ0M7Z0NBQU9kLFdBQVU7MENBQWFYLFNBQVNBLE1BQU0wQixJQUFJLElBQUkxQixNQUFNMEIsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7OztzQ0FFekUsOERBQUNWOzRCQUFJTixXQUFVOzRCQUFnQmlCLG1CQUFnQjs7OENBRTNDLDhEQUFDNUMsa0RBQUlBO29DQUFDeUIsTUFBSztvQ0FBa0JFLFdBQVU7OENBQTBCOzs7Ozs7OENBSWpFLDhEQUFDM0Isa0RBQUlBO29DQUFDeUIsTUFBSztvQ0FBdUJFLFdBQVU7OENBQTBCOzs7Ozs7OENBSXRFLDhEQUFDUTtvQ0FBRVIsV0FBVTtvQ0FBeUJrQixTQUFTM0I7OENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNbkU7O2tDQUNJLDhEQUFDbEIsa0RBQUlBO3dCQUFDeUIsTUFBSzt3QkFBU0UsV0FBVywwQkFBMkQsT0FBakNuQixZQUFZLFlBQVk7d0JBQVlvQixPQUFPOzRCQUFFa0IsVUFBVTt3QkFBTztrQ0FBRzs7Ozs7O2tDQUsxSCw4REFBQzlDLGtEQUFJQTt3QkFBQ3lCLE1BQUs7d0JBQVlFLFdBQVcsMEJBQThELE9BQXBDbkIsWUFBWSxlQUFlO3dCQUFZb0IsT0FBTzs0QkFBRU0sYUFBYTs0QkFBUVksVUFBVTt3QkFBTztrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7QUFlN0s7R0FoRlN2Qzs7UUFRVUYsa0RBQVNBOzs7S0FSbkJFO0FBa0ZULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBOYXYoKSB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiBuYXYgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsdWVcIiB9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0IGxvZ28gJHtjdXJyZW50ID09PSBcIi9cIiAmJiBcImFjdGl2ZVwifWB9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PkZ1bGxTdGFja1Byb2plY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSAhPT0gbnVsbCA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBzaG93IHAtMSBoNSBkcm9wZG93bi1iZ1xyXG4gICAgICAgICAgICAgICAgICAgICBcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgdGV4dC1saWdodFwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51TGlua1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZnMtNSB0ZXh0XCI+e3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51TGlua1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24taXRlbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvcHJvZmlsZS91cGRhdGVcIiBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi1pdGVtXCIgb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC1saWdodCBoNSAke2N1cnJlbnQgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIn1gfSBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgaDUgJHtjdXJyZW50ID09PSBcIi9yZWdpc3RlclwiICYmIFwiYWN0aXZlXCJ9YH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnJlbVwiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHsgfVxyXG5cclxuXHJcbiAgICAgICAgPC9uYXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIkF2YXRhciIsIk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVsb2FkIiwiaHJlZiIsIm5hdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsInNyYyIsInNwYW4iLCJkaXYiLCJtYXJnaW5SaWdodCIsImEiLCJyb2xlIiwiaWQiLCJkYXRhLXRvZ2dsZSIsImFyaWEtaGFzcG9wdXAiLCJhcmlhLWV4cGFuZGVkIiwic3Ryb25nIiwidXNlciIsIm5hbWUiLCJhcmlhLWxhYmVsbGVkYnkiLCJvbkNsaWNrIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});