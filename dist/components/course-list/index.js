"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _featureArea = _interopRequireDefault(require("@/src/common/feature-area"));
var _suitableArea = _interopRequireDefault(require("@/src/common/suitable-area"));
var _react = _interopRequireDefault(require("react"));
var _breadcrumb = _interopRequireDefault(require("../bredcrumb/breadcrumb"));
var _counterArea = _interopRequireDefault(require("../homes/home-3/counter-area"));
var _courseListArea = _interopRequireDefault(require("./course-list-area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CourseList = function CourseList() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_breadcrumb["default"], {
    title: "Course List",
    subtitle: "Course List",
    isDbbl: "Course"
  }), /*#__PURE__*/_react["default"].createElement(_featureArea["default"], {
    style_about: true
  }), /*#__PURE__*/_react["default"].createElement(_courseListArea["default"], null), /*#__PURE__*/_react["default"].createElement(_suitableArea["default"], {
    style_2: true
  }), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], null));
};
var _default = exports["default"] = CourseList;