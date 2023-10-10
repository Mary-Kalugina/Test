"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// shape_img data
var shape_img = [{
  id: 1,
  shape: "/assets/img/about/about-shape-03.png",
  cls: "tp-aline-one"
}, {
  id: 2,
  shape: "/assets/img/about/about-shape-04.png",
  cls: "tp-aline-two"
}, {
  id: 3,
  shape: "/assets/img/about/about-shape-05.png",
  cls: "tp-aline-three"
}];

// about info
var about_info = {
  img_1: "/assets/img/about/about-img.png",
  img_2: "/assets/img/about/about-shape-01.png",
  img_3: "/assets/img/about/about-shape-02.png",
  about_title: "About Our Courses",
  sub_title: "Explore Thousands of Creative Classes.",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Efficiently provide clear outputs well in advance of internal or \"organic\" sources. Skillfully harness external resources transparently."),
  about_btn: "Read More"
};
var img_1 = about_info.img_1,
  img_2 = about_info.img_2,
  img_3 = about_info.img_3,
  about_title = about_info.about_title,
  sub_title = about_info.sub_title,
  des = about_info.des,
  about_btn = about_info.about_btn;
var AboutArea = function AboutArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-about-area pt-120 pb-90 wow fadeInUp",
    "data-wow-duration": "1.5s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-7 col-xl-6 col-lg-6 col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-img p-relative pb-30 ml-10"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: img_1,
    alt: "about-img"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-line-shape d-none d-md-block"
  }, shape_img.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      key: item.id,
      src: item.shape,
      alt: "about-shape",
      className: item.cls
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-shape  d-none d-xl-block"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: img_2,
    alt: "about-shape",
    className: "a-shape-one"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: img_3,
    alt: "about-shape",
    className: "a-shape-two"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-5 col-xl-6 col-lg-6 col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-content pb-30 ml-80"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-55"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title mb-20"
  }, about_title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-15"
  }, sub_title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "about-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about",
    className: "tp-btn"
  }, about_btn))))))));
};
var _default = exports["default"] = AboutArea;