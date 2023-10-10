"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ourCourseData = _interopRequireDefault(require("@/src/data/our-course-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OurCourse = function OurCourse() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "course-area pt-115 pb-100 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title text-center mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "Our Courses"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Explore Popular Courses")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-course-nav-tabs"
  }, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "nav d-flex justify-content-center mb-50",
    id: "nav-tab",
    role: "tablist"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab active",
    id: "nav-all-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-all",
    type: "button",
    role: "tab",
    "aria-controls": "nav-all-tab",
    "aria-selected": "true",
    tabIndex: "-1"
  }, "All"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab",
    id: "nav-design-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-design",
    type: "button",
    role: "tab",
    "aria-controls": "nav-design-tab",
    "aria-selected": "false",
    tabIndex: "-1"
  }, "Design"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab",
    id: "nav-develop-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-develop",
    type: "button",
    role: "tab",
    "aria-controls": "nav-develop",
    "aria-selected": "false",
    tabIndex: "-1"
  }, "Devlopment"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab",
    id: "nav-contact-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-contact",
    type: "button",
    role: "tab",
    "aria-controls": "nav-contact",
    "aria-selected": "false",
    tabIndex: "-1"
  }, "Content Writing"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab",
    id: "nav-search-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-search ",
    type: "button",
    role: "tab",
    "aria-controls": "nav-search",
    "aria-selected": "false",
    tabIndex: "-1"
  }, "Search Engine"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "tp-course-tab",
    id: "nav-marketing-tab",
    "data-bs-toggle": "tab",
    "data-bs-target": "#nav-marketing",
    type: "button",
    role: "tab",
    "aria-controls": "nav-marketing",
    "aria-selected": "false",
    tabIndex: "-1"
  }, "Marketing"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-content",
    id: "nav-tabContent"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade show active",
    id: "nav-all",
    role: "tabpanel",
    "aria-labelledby": "nav-all-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(0, 6).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade",
    id: "nav-design",
    role: "tabpanel",
    "aria-labelledby": "nav-design-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(6, 12).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade",
    id: "nav-develop",
    role: "tabpanel",
    "aria-labelledby": "nav-develop-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(12, 18).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade",
    id: "nav-contact",
    role: "tabpanel",
    "aria-labelledby": "nav-contact-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(18, 24).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade",
    id: "nav-search",
    role: "tabpanel",
    "aria-labelledby": "nav-search-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(24, 30).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-pane fade",
    id: "nav-marketing",
    role: "tabpanel",
    "aria-labelledby": "nav-marketing-tab"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, _ourCourseData["default"].slice(30, 36).map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-4 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse mb-40"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__thumb p-relative w-img fix"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-details"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: item.title
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
      alt: item.title
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
      href: "course-details"
    }, item.title))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__meta tpcourse__meta-gap pb-15 mb-15"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-01.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.cls_text)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/assets/img/icon/c-meta-02.png",
      alt: "meta-icon"
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.st_text)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpcourse__rating-icon"
    }, /*#__PURE__*/_react["default"].createElement("span", null, item.start_text), /*#__PURE__*/_react["default"].createElement("i", {
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
    }, "$", item.course_price))))));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "course-btn mt-20"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "tp-btn",
    href: "/course-list"
  }, "Browse All Courses")))))));
};
var _default = exports["default"] = OurCourse;