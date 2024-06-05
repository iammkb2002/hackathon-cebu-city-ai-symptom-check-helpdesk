self["webpackHotUpdate_N_E"]("pages/admin/users",{

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbkRhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJBZG1pbkRhc2hib2FyZCIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJmaXJlc3RvcmUiLCJnZXQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJ1c2VyIiwiZW1haWwiLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDcEJDLEtBRG9CO0FBQUEsTUFDYkMsUUFEYTs7QUFHM0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVU7QUFBQSx1UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWVDLDJEQUFBLENBQXFCLE9BQXJCLEVBQThCQyxHQUE5QixFQUZmOztBQUFBO0FBRVRDLCtCQUZTO0FBR2ZMLHdCQUFRLENBQUNLLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLEdBQUc7QUFBQTtBQUFPQyxzQkFBRSxFQUFFRCxHQUFHLENBQUNDO0FBQWYscUJBQXNCRCxHQUFHLENBQUNFLElBQUosRUFBdEI7QUFBQSxpQkFBNUIsQ0FBRCxDQUFSO0FBSGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLZkMsdUJBQU8sQ0FBQ0MsSUFBUixDQUFhLHFDQUFiOztBQUxlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZWLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBUUFBLGNBQVU7QUFDWCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFPLG1CQUFTLEVBQUMscUJBQWpCO0FBQUEsa0NBQ0U7QUFBQSxtQ0FDRTtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUEsc0JBQ0dILEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUFNLElBQUk7QUFBQSxrQ0FDYjtBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEsNEJBQXNCQSxJQUFJLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFJLDJCQUFTLEVBQUMsTUFBZDtBQUFBLDRCQUFzQkQsSUFBSSxDQUFDRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsaUJBQVNGLElBQUksQ0FBQ0osRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURhO0FBQUEsYUFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBMUNEOztHQUFNWixjOztLQUFBQSxjO0FBNENOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXJzLjY0ODIwNDY3N2NmMWJlMTMxY2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0FkbWluRGFzaGJvYXJkLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XHJcblxyXG5jb25zdCBBZG1pbkRhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCk7XHJcbiAgICAgICAgc2V0VXNlcnModXNlcnNDb2xsZWN0aW9uLmRvY3MubWFwKGRvYyA9PiAoeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBvciBpbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02NCBwLTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8aDE+QWRtaW4gRGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yXCI+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTJcIj57dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPnt1c2VyLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==