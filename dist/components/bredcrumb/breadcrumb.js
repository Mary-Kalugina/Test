"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Breadcrumb = function Breadcrumb(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    _ref$isDbbl = _ref.isDbbl,
    isDbbl = _ref$isDbbl === void 0 ? "" : _ref$isDbbl;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay",
    style: {
      backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "breadcrumb__content p-relative z-index-1"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "breadcrumb__title mb-20"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "breadcrumb__list"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, "Home")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "dvdr"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-regular fa-angle-right"
  })), isDbbl && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sub-page-black"
  }, isDbbl), /*#__PURE__*/_react["default"].createElement("span", {
    className: "dvdr"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-regular fa-angle-right"
  }))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sub-page-black"
  }, subtitle)))))));
};
var _default = exports["default"] = Breadcrumb;