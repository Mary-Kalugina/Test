"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _categoryData = _interopRequireDefault(require("@/src/data/category-data-2"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CategoryArea = function CategoryArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "category-ractangle-area pb-90 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Top Categories"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Explore 100+ Categories")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _categoryData["default"].map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-3 col-lg-4 col-md-6 col-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-cat-item tp-rec-item mb-35"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-category-icon mb-30"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.icon,
      alt: "category-img"
    })), /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-category-title tp-r-cat-title"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-grid"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("p", null, item.available)));
  })))));
};
var _default = exports["default"] = CategoryArea;