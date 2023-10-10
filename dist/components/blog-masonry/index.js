"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _breadcrumb = _interopRequireDefault(require("../bredcrumb/breadcrumb"));
var _counterArea = _interopRequireDefault(require("../homes/home-3/counter-area"));
var _blogMasonryArea = _interopRequireDefault(require("./blog-masonry-area"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BlogMasonry = function BlogMasonry() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_breadcrumb["default"], {
    title: "Blog",
    subtitle: "Blog Masonry",
    isDbbl: "Blog"
  }), /*#__PURE__*/_react["default"].createElement(_blogMasonryArea["default"], null), /*#__PURE__*/_react["default"].createElement(_counterArea["default"], null));
};
var _default = exports["default"] = BlogMasonry;