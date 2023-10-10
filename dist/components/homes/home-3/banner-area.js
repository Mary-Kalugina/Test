"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BannerArea = function BannerArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "banner-area fix p-relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-bg banner-bg-rainbow",
    style: {
      backgroundImage: "url(/assets/img/banner/banner-bg-2.jpg)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-content hero-content-black"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "hero-title-black mb-45"
  }, "Online Learning Designed For ", /*#__PURE__*/_react["default"].createElement("br", null), "Real Life"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/course-list",
    className: "tp-btn"
  }, "All Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-shape d-none d-md-block"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/banner/banner-img-1.png",
    alt: "banner-shape",
    className: "b-shape-3"
  }))))))));
};
var _default = exports["default"] = BannerArea;