"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _breadcrumb = _interopRequireDefault(require("../bredcrumb/breadcrumb"));
var _counterArea = _interopRequireDefault(require("../homes/home-3/counter-area"));
var _courseArea = _interopRequireDefault(require("./course-area"));
var _courseDetailsArea = _interopRequireDefault(require("./course-details-area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CourseDetails = function CourseDetails() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_breadcrumb["default"], {
    title: "Course Details",
    subtitle: "Course Details",
    isDbbl: "Course"
  }), /*#__PURE__*/_react["default"].createElement(_courseDetailsArea["default"], null), /*#__PURE__*/_react["default"].createElement(_courseArea["default"], null), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], null));
};
var _default = exports["default"] = CourseDetails;