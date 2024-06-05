self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Github\\my-app\\components\\NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();

// components/NavBar.js





var NavBar = function NavBar() {
  _s();

  var _useStore = (0,_store_useStore__WEBPACK_IMPORTED_MODULE_6__.default)(),
      user = _useStore.user,
      setUser = _useStore.setUser,
      clearUser = _useStore.clearUser,
      role = _useStore.role;

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        clearUser();
      }
    });
  }, [setUser, clearUser]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/",
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/profile",
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this), role === 'admin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/admin",
        children: "Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 32
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: /*#__PURE__*/(0,D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _firebase__WEBPACK_IMPORTED_MODULE_5__.auth.signOut();

                case 2:
                  clearUser();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })),
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/login",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/signup",
        children: "Signup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "H9yLEEZfgiXj5x3TQnrfEtz5gcA=", false, function () {
  return [_store_useStore__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RvcmUiLCJ1c2VyIiwic2V0VXNlciIsImNsZWFyVXNlciIsInJvbGUiLCJ1c2VFZmZlY3QiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ3dCQyx3REFBUSxFQURoQztBQUFBLE1BQ1hDLElBRFcsYUFDWEEsSUFEVztBQUFBLE1BQ0xDLE9BREssYUFDTEEsT0FESztBQUFBLE1BQ0lDLFNBREosYUFDSUEsU0FESjtBQUFBLE1BQ2VDLElBRGYsYUFDZUEsSUFEZjs7QUFHbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxrRUFBQSxDQUF3QixVQUFDTCxJQUFELEVBQVU7QUFDaEMsVUFBSUEsSUFBSixFQUFVO0FBQ1JDLGVBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLGlCQUFTO0FBQ1Y7QUFDRixLQU5EO0FBT0QsR0FSUSxFQVFOLENBQUNELE9BQUQsRUFBVUMsU0FBVixDQVJNLENBQVQ7QUFVQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHRixJQUFJLGdCQUNIO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdHLElBQUksS0FBSyxPQUFULGlCQUFvQiw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRnZCLGVBR0U7QUFBUSxlQUFPLHFSQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFvQkUsbURBQUEsRUFBcEI7O0FBQUE7QUFBb0NILDJCQUFTOztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFGLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBLG9CQURHLGdCQU9IO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E5QkQ7O0dBQU1KLE07VUFDdUNDLG9EOzs7S0FEdkNELE07QUFnQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY4MDFjYjE5NjQzOTZiNzYzZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTmF2QmFyLmpzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IHVzZVN0b3JlIGZyb20gJy4uL3N0b3JlL3VzZVN0b3JlJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXIsIHNldFVzZXIsIGNsZWFyVXNlciwgcm9sZSB9ID0gdXNlU3RvcmUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbGVhclVzZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3NldFVzZXIsIGNsZWFyVXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICB7dXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cclxuICAgICAgICAgIHtyb2xlID09PSAnYWRtaW4nICYmIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5BZG1pbjwvTGluaz59XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHsgYXdhaXQgYXV0aC5zaWduT3V0KCk7IGNsZWFyVXNlcigpOyB9fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWdudXA8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9