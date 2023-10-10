"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var choose_data = {
  bg_img: "/assets/img/bg/choose-img-01.jpg",
  experiences_years: "23",
  title: "Why Choose Us",
  sub_title: /*#__PURE__*/_react["default"].createElement("h2", null, "Why Choose Our", /*#__PURE__*/_react["default"].createElement("br", null), "E-Pora Online Learning"),
  des: "Why Choose E-Pora Online Learning? Because we're dedicated to enhancing your learning abilities through top-notch video and audio courses. When you complete your course with us, you'll earn a valuable certificate to showcase your newly acquired skills.",
  choose_list: [{
    title: "Enhancing Your Learning Abilities"
  }, {
    title: "Top-notch Video & Audio Courses"
  }, {
    title: "Complete Your Course, Earn a Certificate"
  }]
};
var bg_img = choose_data.bg_img,
  experiences_years = choose_data.experiences_years,
  title = choose_data.title,
  sub_title = choose_data.sub_title,
  des = choose_data.des,
  choose_list = choose_data.choose_list;
var ChooseArea = function ChooseArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "choose-area pb-90 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-7 col-lg-6 col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-img p-relative mb-30 ml-25"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: bg_img,
    alt: "choose-img"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tpchoose-img-text d-none d-md-block"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", null, experiences_years, "+"), /*#__PURE__*/_react["default"].createElement("p", null, "Years Experiences")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-light fa-check"
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Fully Safe & Secure")))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-5 col-lg-6 col-md-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-content mb-30"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-25"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title mb-25"
  }, title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, sub_title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-list mb-35"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, choose_list.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-light fa-check"
    }), " ", item.title);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "choose-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about",
    className: "tp-btn"
  }, "Explore Courses"))))))));
};
var _default = exports["default"] = ChooseArea;