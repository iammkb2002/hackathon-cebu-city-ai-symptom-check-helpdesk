self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/AdminDashboard.js":
/*!**************************************!*\
  !*** ./components/AdminDashboard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Github\\my-app\\components\\AdminDashboard.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// components/AdminDashboard.js





var AdminDashboard = function AdminDashboard() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      users = _useState[0],
      setUsers = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var fetchUsers = /*#__PURE__*/function () {
      var _ref = (0,D_Github_my_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var usersCollection;
        return D_Github_my_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _firebase__WEBPACK_IMPORTED_MODULE_5__.firestore.collection('users').get();

              case 3:
                usersCollection = _context.sent;
                setUsers(usersCollection.docs.map(function (doc) {
                  return _objectSpread({
                    id: doc.id
                  }, doc.data());
                }));
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.warn('Missing or insufficient permissions');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchUsers() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchUsers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-64 p-4 w-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Admin Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          className: "min-w-full bg-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "py-2",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                className: "py-2",
                children: "Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
            children: users.map(function (user) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "py-2",
                  children: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  className: "py-2",
                  children: user.role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, _this)]
              }, user.id, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(AdminDashboard, "JadZszbqna06PpJs9hMo7Hl/LOY=");

_c = AdminDashboard;
/* harmony default export */ __webpack_exports__["default"] = (AdminDashboard);

var _c;

$RefreshReg$(_c, "AdminDashboard");

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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbkRhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiQWRtaW5EYXNoYm9hcmQiLCJ1c2VTdGF0ZSIsInVzZXJzIiwic2V0VXNlcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXJzIiwiZmlyZXN0b3JlIiwiZ2V0IiwidXNlcnNDb2xsZWN0aW9uIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwidXNlciIsImVtYWlsIiwicm9sZSIsIk5hdkJhciIsInVzZVN0b3JlIiwic2V0VXNlciIsImNsZWFyVXNlciIsImF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxRQURhOztBQUczQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVTtBQUFBLHVSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFZUMsMkRBQUEsQ0FBcUIsT0FBckIsRUFBOEJDLEdBQTlCLEVBRmY7O0FBQUE7QUFFVEMsK0JBRlM7QUFHZkwsd0JBQVEsQ0FBQ0ssZUFBZSxDQUFDQyxJQUFoQixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsR0FBRztBQUFBO0FBQU9DLHNCQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFBZixxQkFBc0JELEdBQUcsQ0FBQ0UsSUFBSixFQUF0QjtBQUFBLGlCQUE1QixDQUFELENBQVI7QUFIZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtmQyx1QkFBTyxDQUFDQyxJQUFSLENBQWEscUNB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZ2QixlQUdFO0FBQVEsZUFBTyxxUkFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBb0JLLG1EQUFBLEVBQXBCOztBQUFBO0FBQW9DRCwyQkFBUzs7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQSxvQkFERyxnQkFPSDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBOUJEOztHQUFNSCxNO1VBQ3VDQyxvRDs7O0tBRHZDRCxNO0FBZ0NOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjY0ODIwNDY3N2NmMWJlMTMxY2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0FkbWluRGFzaGJvYXJkLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCk7XHJcbiAgICAgICAgc2V0VXNlcnModXNlcnNDb2xsZWN0aW9uLmRvY3MubWFwKGRvYyA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBvciBpbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02NCBwLTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8aDE+QWRtaW4gRGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yXCI+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTJcIj57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPnt1c2VyLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDtcclxuIiwiLy8gY29tcG9uZW50cy9OYXZCYXIuanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSAnLi4vc3RvcmUvdXNlU3RvcmUnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciwgY2xlYXJVc2VyLCByb2xlIH0gPSB1c2VTdG9yZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsZWFyVXNlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbc2V0VXNlciwgY2xlYXJVc2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5Qcm9maWxlPC9MaW5rPlxyXG4gICAgICAgICAge3JvbGUgPT09ICdhZG1pbicgJiYgPExpbmsgaHJlZj1cIi9hZG1pblwiPkFkbWluPC9MaW5rPn1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4geyBhd2FpdCBhdXRoLnNpZ25PdXQoKTsgY2xlYXJVc2VyKCk7IH19PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlNpZ251cDwvTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=