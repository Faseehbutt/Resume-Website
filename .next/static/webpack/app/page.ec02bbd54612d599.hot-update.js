"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/typingeffect.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/typingeffect.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/TypingEffect.tsx\n\nvar _s = $RefreshSig$();\n\nconst TypingEffect = (param)=>{\n    let { texts, typingSpeed = 50, deletingSpeed = 30, pauseTime = 1500 } = param;\n    _s();\n    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [charIndex, setCharIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const currentText = texts[textIndex];\n        if (!isDeleting && charIndex < currentText.length) {\n            // Typing in\n            setTimeout(()=>{\n                setDisplayText(currentText.slice(0, charIndex + 1));\n                setCharIndex(charIndex + 1);\n            }, typingSpeed);\n        } else if (isDeleting && charIndex > 0) {\n            // Deleting out\n            setTimeout(()=>{\n                setDisplayText(currentText.slice(0, charIndex - 1));\n                setCharIndex(charIndex - 1);\n            }, deletingSpeed);\n        } else if (charIndex === currentText.length) {\n            // Text fully typed, start deleting after a pause\n            setTimeout(()=>setIsDeleting(true), pauseTime);\n        } else if (isDeleting && charIndex === 0) {\n            // Text fully deleted, move to next text\n            setIsDeleting(false);\n            setTextIndex((textIndex + 1) % texts.length);\n        }\n    }, [\n        charIndex,\n        isDeleting,\n        texts,\n        textIndex,\n        typingSpeed,\n        deletingSpeed,\n        pauseTime\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: displayText\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\faseeh butt\\\\Desktop\\\\my resume\\\\my-resume\\\\src\\\\app\\\\components\\\\typingeffect.tsx\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, undefined);\n};\n_s(TypingEffect, \"NgRCSItipbQGLoI8xc4PXiThxsw=\");\n_c = TypingEffect;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypingEffect);\nvar _c;\n$RefreshReg$(_c, \"TypingEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90eXBpbmdlZmZlY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw4QkFBOEI7OztBQUNxQjtBQVNuRCxNQUFNRyxlQUE0QztRQUFDLEVBQ2pEQyxLQUFLLEVBQ0xDLGNBQWMsRUFBRSxFQUNoQkMsZ0JBQWdCLEVBQUUsRUFDbEJDLFlBQVksSUFBSSxFQUNqQjs7SUFDQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsY0FBY1osS0FBSyxDQUFDUSxVQUFVO1FBRXBDLElBQUksQ0FBQ0YsY0FBY0ksWUFBWUUsWUFBWUMsTUFBTSxFQUFFO1lBQ2pELFlBQVk7WUFDWkMsV0FBVztnQkFDVFQsZUFBZU8sWUFBWUcsS0FBSyxDQUFDLEdBQUdMLFlBQVk7Z0JBQ2hEQyxhQUFhRCxZQUFZO1lBQzNCLEdBQUdUO1FBQ0wsT0FBTyxJQUFJSyxjQUFjSSxZQUFZLEdBQUc7WUFDdEMsZUFBZTtZQUNmSSxXQUFXO2dCQUNUVCxlQUFlTyxZQUFZRyxLQUFLLENBQUMsR0FBR0wsWUFBWTtnQkFDaERDLGFBQWFELFlBQVk7WUFDM0IsR0FBR1I7UUFDTCxPQUFPLElBQUlRLGNBQWNFLFlBQVlDLE1BQU0sRUFBRTtZQUMzQyxpREFBaUQ7WUFDakRDLFdBQVcsSUFBTVAsY0FBYyxPQUFPSjtRQUN4QyxPQUFPLElBQUlHLGNBQWNJLGNBQWMsR0FBRztZQUN4Qyx3Q0FBd0M7WUFDeENILGNBQWM7WUFDZEUsYUFBYSxDQUFDRCxZQUFZLEtBQUtSLE1BQU1hLE1BQU07UUFDN0M7SUFDRixHQUFHO1FBQUNIO1FBQVdKO1FBQVlOO1FBQU9RO1FBQVdQO1FBQWFDO1FBQWVDO0tBQVU7SUFFbkYscUJBQU8sOERBQUNhO2tCQUFNWjs7Ozs7O0FBQ2hCO0dBckNNTDtLQUFBQTtBQXVDTixpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy90eXBpbmdlZmZlY3QudHN4PzBhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9UeXBpbmdFZmZlY3QudHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBUeXBpbmdFZmZlY3RQcm9wcyA9IHtcclxuICB0ZXh0czogc3RyaW5nW107ICAgIC8vIEFycmF5IG9mIHRleHRzIHRvIHR5cGVcclxuICB0eXBpbmdTcGVlZD86IG51bWJlcjsgLy8gU3BlZWQgb2YgdHlwaW5nIGluIG1zIChvcHRpb25hbClcclxuICBkZWxldGluZ1NwZWVkPzogbnVtYmVyOyAvLyBTcGVlZCBvZiBkZWxldGluZyBpbiBtcyAob3B0aW9uYWwpXHJcbiAgcGF1c2VUaW1lPzogbnVtYmVyOyAgIC8vIFBhdXNlIGJldHdlZW4gdGV4dHMgaW4gbXMgKG9wdGlvbmFsKVxyXG59O1xyXG5cclxuY29uc3QgVHlwaW5nRWZmZWN0OiBSZWFjdC5GQzxUeXBpbmdFZmZlY3RQcm9wcz4gPSAoe1xyXG4gIHRleHRzLFxyXG4gIHR5cGluZ1NwZWVkID0gNTAsXHJcbiAgZGVsZXRpbmdTcGVlZCA9IDMwLFxyXG4gIHBhdXNlVGltZSA9IDE1MDAsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZGlzcGxheVRleHQsIHNldERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RleHRJbmRleCwgc2V0VGV4dEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjaGFySW5kZXgsIHNldENoYXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gdGV4dHNbdGV4dEluZGV4XTtcclxuXHJcbiAgICBpZiAoIWlzRGVsZXRpbmcgJiYgY2hhckluZGV4IDwgY3VycmVudFRleHQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIFR5cGluZyBpblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXREaXNwbGF5VGV4dChjdXJyZW50VGV4dC5zbGljZSgwLCBjaGFySW5kZXggKyAxKSk7XHJcbiAgICAgICAgc2V0Q2hhckluZGV4KGNoYXJJbmRleCArIDEpO1xyXG4gICAgICB9LCB0eXBpbmdTcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKGlzRGVsZXRpbmcgJiYgY2hhckluZGV4ID4gMCkge1xyXG4gICAgICAvLyBEZWxldGluZyBvdXRcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RGlzcGxheVRleHQoY3VycmVudFRleHQuc2xpY2UoMCwgY2hhckluZGV4IC0gMSkpO1xyXG4gICAgICAgIHNldENoYXJJbmRleChjaGFySW5kZXggLSAxKTtcclxuICAgICAgfSwgZGVsZXRpbmdTcGVlZCk7XHJcbiAgICB9IGVsc2UgaWYgKGNoYXJJbmRleCA9PT0gY3VycmVudFRleHQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIFRleHQgZnVsbHkgdHlwZWQsIHN0YXJ0IGRlbGV0aW5nIGFmdGVyIGEgcGF1c2VcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0RlbGV0aW5nKHRydWUpLCBwYXVzZVRpbWUpO1xyXG4gICAgfSBlbHNlIGlmIChpc0RlbGV0aW5nICYmIGNoYXJJbmRleCA9PT0gMCkge1xyXG4gICAgICAvLyBUZXh0IGZ1bGx5IGRlbGV0ZWQsIG1vdmUgdG8gbmV4dCB0ZXh0XHJcbiAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRUZXh0SW5kZXgoKHRleHRJbmRleCArIDEpICUgdGV4dHMubGVuZ3RoKTtcclxuICAgIH1cclxuICB9LCBbY2hhckluZGV4LCBpc0RlbGV0aW5nLCB0ZXh0cywgdGV4dEluZGV4LCB0eXBpbmdTcGVlZCwgZGVsZXRpbmdTcGVlZCwgcGF1c2VUaW1lXSk7XHJcblxyXG4gIHJldHVybiA8c3Bhbj57ZGlzcGxheVRleHR9PC9zcGFuPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGluZ0VmZmVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUeXBpbmdFZmZlY3QiLCJ0ZXh0cyIsInR5cGluZ1NwZWVkIiwiZGVsZXRpbmdTcGVlZCIsInBhdXNlVGltZSIsImRpc3BsYXlUZXh0Iiwic2V0RGlzcGxheVRleHQiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsInRleHRJbmRleCIsInNldFRleHRJbmRleCIsImNoYXJJbmRleCIsInNldENoYXJJbmRleCIsImN1cnJlbnRUZXh0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInNsaWNlIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/typingeffect.tsx\n"));

/***/ })

});