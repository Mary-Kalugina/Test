"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _breadcrumb = _interopRequireDefault(require("../bredcrumb/breadcrumb"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ErrorPage = function ErrorPage() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_breadcrumb["default"], {
    title: "",
    subtitle: "404 Error",
    isDbbl: "Pages"
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "error-area pt-120 pb-115"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "error-item text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "error-thumb mb-50"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/bg/erroe-bg.png",
    alt: "error-bg"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "error-content"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "error-title mb-35"
  }, "Oops! The Page You Are Looking ", /*#__PURE__*/_react["default"].createElement("br", null), " For Does Not Exist"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/",
    className: "tp-btn"
  }, "Back To Home"))))))));
};
var _default = exports["default"] = ErrorPage;