"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _categoryData = _interopRequireDefault(require("@/src/data/category-data-3"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CategoryArea = function CategoryArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-70"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "Top Categories"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Explore Company Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _categoryData["default"].map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xxl-3 col-lg-4 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-cat-item mb-40 d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-category-icon tp-cat-color mr-15"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "cat-design ".concat(item.color)
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.icon,
      alt: "category-img"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-cat-content"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-category-title tp-title-small"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-grid"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("p", null, item.available))));
  })))));
};
var _default = exports["default"] = CategoryArea;