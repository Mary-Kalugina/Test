"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _aboutArea = _interopRequireDefault(require("./about-area"));
var _categoryArea = _interopRequireDefault(require("./category-area"));
var _chooseArea = _interopRequireDefault(require("./choose-area"));
var _counterArea = _interopRequireDefault(require("../../../common/counter-area"));
var _courseArea = _interopRequireDefault(require("./course-area"));
var _featureArea = _interopRequireDefault(require("./feature-area"));
var _heroBanner = _interopRequireDefault(require("./hero-banner"));
var _instructorArea = _interopRequireDefault(require("../../../common/instructor-area"));
var _suitableArea = _interopRequireDefault(require("../../../common/suitable-area"));
var _testimonialArea = _interopRequireDefault(require("./testimonial-area"));
var _blogArea = _interopRequireDefault(require("./blog-area"));
var _brandArea = _interopRequireDefault(require("../../../common/brand-area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Home = function Home() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_heroBanner["default"], null), /*#__PURE__*/_react["default"].createElement(_featureArea["default"], null), /*#__PURE__*/_react["default"].createElement(_aboutArea["default"], null), /*#__PURE__*/_react["default"].createElement(_categoryArea["default"], null), /*#__PURE__*/_react["default"].createElement(_courseArea["default"], null), /*#__PURE__*/_react["default"].createElement(_chooseArea["default"], null), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], null), /*#__PURE__*/_react["default"].createElement(_instructorArea["default"], null), /*#__PURE__*/_react["default"].createElement(_suitableArea["default"], null), /*#__PURE__*/_react["default"].createElement(_testimonialArea["default"], null), /*#__PURE__*/_react["default"].createElement(_blogArea["default"], null), /*#__PURE__*/_react["default"].createElement(_brandArea["default"], {
    style_1: true
  }));
};
var _default = exports["default"] = Home;