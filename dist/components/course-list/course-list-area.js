"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _courseListData = _interopRequireDefault(require("@/src/data/course-list-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CourseListArea = function CourseListArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "course-list-area pb-120 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".2s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-60"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Our Courses"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Explore Popular Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row mb-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-4 col-md-12 courser-list-width mb-60"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "country-select"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "course-sidebar__title mb-35"
  }, "Category "), /*#__PURE__*/_react["default"].createElement("select", null, /*#__PURE__*/_react["default"].createElement("option", {
    value: "volvo"
  }, "All Category"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "saab"
  }, "Course Level"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "mercedes"
  }, "Course Price"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "audi"
  }, "Instructor"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "audi2"
  }, "Class Duration"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__widget mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__info c-info-list"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "course-sidebar__title mb-35"
  }, "Course Level"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckDefault"
  }, "All Levels"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "99")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked"
  }, "Beginner"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "63")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked3"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked3"
  }, "Intermediate"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "96")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked4"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked4"
  }, "Expert"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "35")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__widget mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__info c-info-list"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "course-sidebar__title mb-30"
  }, "Course Price"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault5"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckDefault5"
  }, "Free Courses"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "13")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked6"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked6"
  }, "Paid Courses"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "25")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked7"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked7"
  }, "Subscription Only"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "99")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__widget mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__info c-info-list"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "course-sidebar__title mb-35"
  }, "Instructor"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault8"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckDefault8"
  }, "Albert Flores"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "55")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked9"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked9"
  }, "Savannah Nguyen"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "40")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked10"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked10"
  }, "Arlene McCoy"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "26")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked11"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked11"
  }, "Bessie Cooper"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "35")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__widget mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-sidebar__info c-info-list"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "course-sidebar__title mb-35"
  }, "Class Duration"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault12"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckDefault12"
  }, "Less Than 2 hours"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "96")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked13"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked13"
  }, "3-5 hours"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "27")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckChecked14"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckChecked14"
  }, "4-7 hours"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "f-right"
  }, "88")))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-8 col-md-12 course-item-width ml-30"
  }, _courseListData["default"].map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "tpcourse tp-list-course mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row g-0"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-4 course-thumb-width"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "course-thumb"
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-8  course-text-width"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "course-list-content"
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
    }), /*#__PURE__*/_react["default"].createElement("span", null, "35 Classes")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, "291 Students")))), /*#__PURE__*/_react["default"].createElement("div", {
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
    }, "$29.99")))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-pagination text-center"
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
var _default = exports["default"] = CourseListArea;