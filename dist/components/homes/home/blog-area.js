"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blogData = _interopRequireDefault(require("@/src/data/blog-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BlogArea = function BlogArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "blog-area pt-110 pb-110 wow fadeInUp",
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65 text-center"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Latest Blogs & News")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _blogData["default"].map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-4 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog mb-60"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__thumb p-relative"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__timg fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "blog-img"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__icon"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rs-angle-right"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__meta mb-10"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, "Education"), " ", /*#__PURE__*/_react["default"].createElement("span", null, "-"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.date)), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-blog__title mb-15"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("p", null, item.des))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "blog-btn text-center"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog",
    className: "tp-btn"
  }, "All Blog")))))));
};
var _default = exports["default"] = BlogArea;