"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ourCourseData = _interopRequireDefault(require("@/src/data/our-course-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CourseArea = function CourseArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "course-area pb-120"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title text-center mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Our Courses"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Explore Popular Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row mb-20"
  }, _ourCourseData["default"].slice(0, 9).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40 wow fadeInUp",
      "data-wow-duration": ".8s",
      "data-wow-delay": ".2s"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "course-thumb"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__tag"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rr-heart"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__img-icon"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.icon,
      alt: "course-avata"
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__content-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__category mb-10"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "tpcourse__price-list d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      className: item.ct_color,
      href: "/course-details"
    }, item.course_title)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      className: item.cn_color,
      href: "/course-details"
    }, item.course_name)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__ava-title mb-15"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tpcourse__title tp-cours-title-color"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), " ", /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), " ", /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "4.7"), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rs-star"
    }), /*#__PURE__*/_react["default"].createElement("p", null, "(125)")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__pricing"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "price-title"
    }, "$29.99"))))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-pagination"
  }, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "far fa-angle-left"
  }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "current"
  }, "1")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, "2")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, "3")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/blog"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "far fa-angle-right"
  })))))))));
};
var _default = exports["default"] = CourseArea;