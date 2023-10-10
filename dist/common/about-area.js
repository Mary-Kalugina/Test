"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var about_info = {
  students: "235K",
  review: "4.7",
  pro_courses: "3.5K",
  title: 'Explore Thousands of Creative Classes.',
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Explore a vast array of creative courses at E-Pora Online Learning, where opportunities for skill enhancement and inspiration are limitless. Unlock your creative potential today!")
};
var students = about_info.students,
  review = about_info.review,
  pro_courses = about_info.pro_courses,
  title = about_info.title,
  des = about_info.des;
var about_list_data = [{
  name: "Create an E-Pora account"
}, {
  name: "Choose Your Perfect Courses"
}, {
  name: "After Finished Courses, Get Certificate"
}];
var AboutArea = function AboutArea(_ref) {
  var style_about = _ref.style_about;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-about-area pb-70 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-class p-relative pb-50"
  }, style_about ? /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/about/about-sub-bg-01.png",
    alt: "about-img"
  }) : /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/about/about-3-bg-01.png",
    alt: "about-img"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-class-info"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, students), "Worldwide Students"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, review, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-ss-star"
  })), "Worldwide Review"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, pro_courses), "Free Pro Courses"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-class-content mb-50 ml-75"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-35"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "How To Start"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-25"
  }, title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-list mb-65"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, about_list_data.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-light fa-check"
    }), item.name);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-about-btn-3"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about",
    className: "tp-btn"
  }, "Explore Courses"))))))));
};
var _default = exports["default"] = AboutArea;