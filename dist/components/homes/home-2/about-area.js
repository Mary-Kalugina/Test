"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// about  data
var about_two_bg = {
  img_1: "/assets/img/about/about-2-img.png",
  img_2: "/assets/img/about/about-2-shape.png",
  img_3: "/assets/img/about/shape-2-img.png",
  title: "Explore Thousands of Creative Classes.",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Explore a vast array of creative courses at E-Pora Online Learning, where opportunities for skill enhancement and inspiration are limitless. Unlock your creative potential today!")
};
var img_1 = about_two_bg.img_1,
  img_2 = about_two_bg.img_2,
  img_3 = about_two_bg.img_3,
  title = about_two_bg.title,
  des = about_two_bg.des;

// about circle data
var about_circle = [{
  id: 1,
  icon: "fi fi-rr-paper-plane",
  text: "Online Courses"
}, {
  id: 2,
  icon: "fi fi-rr-user",
  text: "Expert Trainer"
}, {
  id: 3,
  icon: "fi fi-rr-document",
  text: "Get Certificate"
}, {
  id: 4,
  icon: "fi fi-rr-calendar",
  text: "Life Time Access"
}];
var AboutArea = function AboutArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "about--area pt-120 pb-60 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-7 col-lg-6 col-md-12 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-ab-circle-img p-relative mb-60"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: img_1,
    alt: "about-img"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ab-circle-shape"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: img_2,
    alt: "about-shape",
    className: "ab-circle-one"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: img_3,
    alt: "about-shape",
    className: "ab-circle-two"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-5 col-lg-6 col-md-12 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-abcircle-content ml-65 mb-60"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-35"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "About us"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "about-circle-list mb-40"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, about_circle.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    }), item.text);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-ab-circle-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about",
    className: "tp-btn"
  }, "Read More"))))))));
};
var _default = exports["default"] = AboutArea;