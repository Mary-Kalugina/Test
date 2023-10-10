"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _seo = _interopRequireDefault(require("../common/seo"));
var _index = _interopRequireDefault(require("../components/course-details/index"));
var _wrapper = _interopRequireDefault(require("../layout/wrapper-4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var index = function index() {
  return /*#__PURE__*/_react["default"].createElement(_wrapper["default"], null, /*#__PURE__*/_react["default"].createElement(_seo["default"], {
    pageTitle: "Course Details"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], null));
};
var _default = exports["default"] = index;