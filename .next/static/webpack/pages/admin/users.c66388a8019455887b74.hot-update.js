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
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
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
    className: "flex",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "ml-64 p-4 w-full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Admin Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        className: "min-w-full bg-white",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              className: "py-2",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              className: "py-2",
              children: "Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: users.map(function (user) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "py-2",
                children: user.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                className: "py-2",
                children: user.role
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, _this)]
            }, user.id, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbkRhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJBZG1pbkRhc2hib2FyZCIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZUVmZmVjdCIsImZldGNoVXNlcnMiLCJmaXJlc3RvcmUiLCJnZXQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJ1c2VyIiwiZW1haWwiLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDcEJDLEtBRG9CO0FBQUEsTUFDYkMsUUFEYTs7QUFHM0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVU7QUFBQSx1UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRWVDLDJEQUFBLENBQXFCLE9BQXJCLEVBQThCQyxHQUE5QixFQUZmOztBQUFBO0FBRVRDLCtCQUZTO0FBR2ZMLHdCQUFRLENBQUNLLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLEdBQUc7QUFBQTtBQUFPQyxzQkFBRSxFQUFFRCxHQUFHLENBQUNDO0FBQWYscUJBQXNCRCxHQUFHLENBQUNFLElBQUosRUFBdEI7QUFBQSxpQkFBNUIsQ0FBRCxDQUFSO0FBSGU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLZkMsdUJBQU8sQ0FBQ0MsSUFBUixDQUFhLHFDQUFiOztBQUxlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZWLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBUUFBLGNBQVU7QUFDWCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU8saUJBQVMsRUFBQyxxQkFBakI7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBQSxvQkFDR0gsS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQU0sSUFBSTtBQUFBLGdDQUNiO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLE1BQWQ7QUFBQSwwQkFBc0JBLElBQUksQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUEsMEJBQXNCRCxJQUFJLENBQUNFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFTRixJQUFJLENBQUNKLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBdkNEOztHQUFNWixjOztLQUFBQSxjO0FBeUNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3VzZXJzLmM2NjM4OGE4MDE5NDU1ODg3Yjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0FkbWluRGFzaGJvYXJkLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcclxuXHJcbmNvbnN0IEFkbWluRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5nZXQoKTtcclxuICAgICAgICBzZXRVc2Vycyh1c2Vyc0NvbGxlY3Rpb24uZG9jcy5tYXAoZG9jID0+ICh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSkpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIG9yIGluc3VmZmljaWVudCBwZXJtaXNzaW9ucycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hVc2VycygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTY0IHAtNCB3LWZ1bGxcIj5cclxuICAgICAgICA8aDE+QWRtaW4gRGFzaGJvYXJkPC9oMT5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTJcIj5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTJcIj5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPnt1c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPnt1c2VyLnJvbGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5EYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=