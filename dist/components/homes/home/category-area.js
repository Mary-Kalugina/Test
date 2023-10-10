"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// category_data
var category_data = [{
  id: 1,
  img: "/assets/img/category/category-01.png",
  title: "Design Deve",
  link: "/course-grid"
}, {
  id: 2,
  img: "/assets/img/category/category-02.png",
  title: "Development",
  link: "/course-grid"
}, {
  id: 3,
  img: "/assets/img/category/category-03.png",
  title: "Marketing",
  link: "/course-grid"
}, {
  id: 4,
  img: "/assets/img/category/category-04.png",
  title: "It & Software",
  link: "/course-grid"
}, {
  id: 5,
  img: "/assets/img/category/category-05.png",
  title: "Videography",
  link: "/course-grid"
}, {
  id: 6,
  img: "/assets/img/category/category-06.png",
  title: "Business Sys",
  link: "/course-grid"
}, {
  id: 7,
  img: "/assets/img/category/category-07.png",
  title: "Photography",
  link: "/course-grid"
}, {
  id: 8,
  img: "/assets/img/category/category-08.png",
  title: "Musical Intru",
  link: "/course-grid"
}];
var CategoryArea = function CategoryArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-category-area bg-bottom grey-bg pt-110 pb-80 wow fadeInUp",
    "data-wow-duration": "1.5s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Top Categories")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, category_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-3 col-lg-4 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-cat-item mb-40 d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-category-icon mr-15"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "category-img"
    })), /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-category-title"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: item.link
    }, item.title))));
  })))));
};
var _default = exports["default"] = CategoryArea;