"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _courseData = _interopRequireDefault(require("@/src/data/course-data-2"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CourseArea = function CourseArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "course-wrap-area bg-bottom grey-bg pt-115 pb-60 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-8 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Our Courses"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Explore Popular Courses"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-4 col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-course-btn mb-40 d-flex justify-content-md-end"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "tp-btn",
    href: "#"
  }, "Browse All Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _courseData["default"].map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-lg-6 col-md-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse tp-wrap-course mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-4 tpcourse-thumb-w"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "course-thumb"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-8 tpcourse-thumb-text"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-wrap-course__content ml-5"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-wrap-course__heading"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-wrap-course__title mb-20"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tp-course-line pb-20 mb-25"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-03.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.start_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__category c-price-list d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "tpcourse__course-price c-price-pac"
    }, "$", item.course_price), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "tpcourse__price-list d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, item.course_title)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, item.course_name)))))))));
  })))));
};
var _default = exports["default"] = CourseArea;