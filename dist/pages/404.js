"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _seo = _interopRequireDefault(require("../common/seo"));
var _error = _interopRequireDefault(require("../components/error"));
var _wrapper = _interopRequireDefault(require("../layout/wrapper-4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Error = function Error() {
  return /*#__PURE__*/_react["default"].createElement(_wrapper["default"], null, /*#__PURE__*/_react["default"].createElement(_seo["default"], {
    pageTitle: "Page Not Found"
  }), /*#__PURE__*/_react["default"].createElement(_error["default"], null));
};
var _default = exports["default"] = Error;