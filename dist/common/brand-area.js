"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
var _brandsData = _interopRequireDefault(require("../data/brands-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// slider setting
var setting = {
  dots: false,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
var BrandArea = function BrandArea(_ref) {
  var style_2 = _ref.style_2,
    style_3 = _ref.style_3,
    style_1 = _ref.style_1,
    style_about = _ref.style_about;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "brand-area ".concat(style_1 ? "pb-110" : "", " ").concat(style_2 ? "pt-110" : "", "  ").concat(style_3 ? "pt-110 " : "", " ").concat(style_about ? "pb-115" : "", " wow fadeInUp"),
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, style_about ? "" : /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65 text-center"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Our Key Supporters")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand-area tp-brand-active"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], setting, _brandsData["default"].map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "brand-item"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "brand-logo"
    })));
  }))))))));
};
var _default = exports["default"] = BrandArea;