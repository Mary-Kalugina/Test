"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _brandArea = _interopRequireDefault(require("@/src/common/brand-area"));
var _suitableArea = _interopRequireDefault(require("@/src/common/suitable-area"));
var _react = _interopRequireDefault(require("react"));
var _videoArea = _interopRequireDefault(require("../../../common/video-area"));
var _aboutArea = _interopRequireDefault(require("../../../common/about-area"));
var _bannerArea = _interopRequireDefault(require("./banner-area"));
var _blogArea = _interopRequireDefault(require("./blog-area"));
var _categoryArea = _interopRequireDefault(require("./category-area"));
var _chooseArea = _interopRequireDefault(require("./choose-area"));
var _counterArea = _interopRequireDefault(require("./counter-area"));
var _featureArea = _interopRequireDefault(require("../../../common/feature-area"));
var _ourCourse = _interopRequireDefault(require("./our-course"));
var _testimonialArea = _interopRequireDefault(require("../../../common/testimonial-area-2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HomeThree = function HomeThree() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_bannerArea["default"], null), /*#__PURE__*/_react["default"].createElement(_featureArea["default"], null), /*#__PURE__*/_react["default"].createElement(_aboutArea["default"], null), /*#__PURE__*/_react["default"].createElement(_suitableArea["default"], null), /*#__PURE__*/_react["default"].createElement(_videoArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_categoryArea["default"], null), /*#__PURE__*/_react["default"].createElement(_ourCourse["default"], null), /*#__PURE__*/_react["default"].createElement(_chooseArea["default"], null), /*#__PURE__*/_react["default"].createElement(_testimonialArea["default"], null), /*#__PURE__*/_react["default"].createElement(_brandArea["default"], {
    style_3: true
  }), /*#__PURE__*/_react["default"].createElement(_blogArea["default"], null), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], {
    style_3: true
  }));
};
var _default = exports["default"] = HomeThree;