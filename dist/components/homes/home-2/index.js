"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _brandArea = _interopRequireDefault(require("@/src/common/brand-area"));
var _counterArea = _interopRequireDefault(require("@/src/common/counter-area"));
var _instructorArea = _interopRequireDefault(require("@/src/common/instructor-area"));
var _suitableArea = _interopRequireDefault(require("@/src/common/suitable-area"));
var _react = _interopRequireDefault(require("react"));
var _aboutArea = _interopRequireDefault(require("./about-area"));
var _blogArea = _interopRequireDefault(require("./blog-area"));
var _categoryArea = _interopRequireDefault(require("./category-area"));
var _chooseArea = _interopRequireDefault(require("../../../common/choose-area"));
var _courseArea = _interopRequireDefault(require("./course-area"));
var _heroSlider = _interopRequireDefault(require("./hero-slider"));
var _testimonialArea = _interopRequireDefault(require("./testimonial-area-2"));
var _videoArea = _interopRequireDefault(require("../../../common/video-area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HomeTwo = function HomeTwo() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_heroSlider["default"], null), /*#__PURE__*/_react["default"].createElement(_brandArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_aboutArea["default"], null), /*#__PURE__*/_react["default"].createElement(_categoryArea["default"], null), /*#__PURE__*/_react["default"].createElement(_courseArea["default"], null), /*#__PURE__*/_react["default"].createElement(_videoArea["default"], null), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], {
    style_counter: true
  }), /*#__PURE__*/_react["default"].createElement(_chooseArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_instructorArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_testimonialArea["default"], null), /*#__PURE__*/_react["default"].createElement(_suitableArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_blogArea["default"], null));
};
var _default = exports["default"] = HomeTwo;