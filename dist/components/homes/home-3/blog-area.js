"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blogData = _interopRequireDefault(require("@/src/data/blog-data-3"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BlogArea = function BlogArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "blog-area pt-115 pb-110 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title text-center mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "Latest Blogs"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Latest Blogs & News")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _blogData["default"].map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog tp-blog-parent mb-60"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__thumb"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "fix blog-round"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "blog-img"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__content blog-edu p-relative"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-blog__meta-list mb-10"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-calendar"
    }), item.date)), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-sr-apps"
    }), "Education"))), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-blog__title mb-15"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/blog-details"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-sr-user"
    }), item.name)))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "blog-btn text-center"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog-masonry",
    className: "tp-btn"
  }, "All Blog")))))));
};
var _default = exports["default"] = BlogArea;