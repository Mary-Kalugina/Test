"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blogMasonryData = _interopRequireDefault(require("@/src/data/blog-masonry-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BlogMasonryArea = function BlogMasonryArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "blog-area pt-110 pb-115"
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
    className: "row mb-20"
  }, _blogMasonryData["default"].map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-lg-4 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog mb-40 wow fadeInUp",
      "data-wow-duration": ".8s",
      "data-wow-delay": ".4s"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__thumb p-relative"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "fix blog-round"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "blog-img"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__meta-ab"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.category), /*#__PURE__*/_react["default"].createElement("span", null, "-"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.data))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__content blog-box p-relative"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-blog__title mb-15 mt-20"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("p", null, item.des), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rr-clock"
    }), " ", item.post_time))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "blog-btn text-center"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog-grid",
    className: "tp-btn"
  }, "All Blog")))))));
};
var _default = exports["default"] = BlogMasonryArea;