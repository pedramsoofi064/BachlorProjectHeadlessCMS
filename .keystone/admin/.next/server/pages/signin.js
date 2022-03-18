"use strict";
(() => {
var exports = {};
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keystone_next_auth_pages_SigninPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-next/auth/pages/SigninPage */ "@keystone-next/auth/pages/SigninPage");
/* harmony import */ var _keystone_next_auth_pages_SigninPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_auth_pages_SigninPage__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_next_auth_pages_SigninPage__WEBPACK_IMPORTED_MODULE_0__.getSigninPage)({
  "identityField": "email",
  "secretField": "password",
  "mutationName": "authenticateUserWithPassword",
  "successTypename": "UserAuthenticationWithPasswordSuccess",
  "failureTypename": "UserAuthenticationWithPasswordFailure"
}));

/***/ }),

/***/ "@keystone-next/auth/pages/SigninPage":
/*!*******************************************************!*\
  !*** external "@keystone-next/auth/pages/SigninPage" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@keystone-next/auth/pages/SigninPage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2lnbmluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLGlFQUFlQSxtRkFBYSxDQUFDO0FBQUMsbUJBQWdCLE9BQWpCO0FBQXlCLGlCQUFjLFVBQXZDO0FBQWtELGtCQUFlLDhCQUFqRTtBQUFnRyxxQkFBa0IsdUNBQWxIO0FBQTBKLHFCQUFrQjtBQUE1SyxDQUFELENBQTVCOzs7Ozs7Ozs7O0FDRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYXV0aC9wYWdlcy9TaWduaW5QYWdlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2lnbmluUGFnZSB9IGZyb20gJ0BrZXlzdG9uZS1uZXh0L2F1dGgvcGFnZXMvU2lnbmluUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2lnbmluUGFnZSh7XCJpZGVudGl0eUZpZWxkXCI6XCJlbWFpbFwiLFwic2VjcmV0RmllbGRcIjpcInBhc3N3b3JkXCIsXCJtdXRhdGlvbk5hbWVcIjpcImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcIixcInN1Y2Nlc3NUeXBlbmFtZVwiOlwiVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkU3VjY2Vzc1wiLFwiZmFpbHVyZVR5cGVuYW1lXCI6XCJVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlXCJ9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2F1dGgvcGFnZXMvU2lnbmluUGFnZVwiKTsiXSwibmFtZXMiOlsiZ2V0U2lnbmluUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=