"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HeroBanner = function HeroBanner() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "banner-area fix p-relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-bg",
    style: {
      backgroundImage: "url(/assets/img/banner/banner-01.jpg)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Acquire Fresh Expertise and Explore Trending Courses"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "hero-title mb-35"
  }, "For Every Student, Every ", /*#__PURE__*/_react["default"].createElement("i", null, "Classroom"), "."), /*#__PURE__*/_react["default"].createElement("p", null, "For every learner, in every corner of the digital classroom, E-Pora Online Learning offers boundless opportunities for growth and discovery. Join us on your educational journey today!"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-banner-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/course-list",
    className: "tp-btn"
  }, "Explore Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-info d-none"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, "235K"), "Worldwide Students"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, "3.5K"), "Free Pro Courses"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, "4.7", /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rr-star "
  })), "Worldwide Review")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "banner-shape d-none d-lg-block"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/banner/banner-shape-01.png",
    alt: "banner-shape",
    className: "b-shape"
  })))))));
};
var _default = exports["default"] = HeroBanner;