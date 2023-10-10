"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reviewData = _interopRequireDefault(require("@/src/data/review-data"));
var _link = _interopRequireDefault(require("next/link"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CourseDetailsArea = function CourseDetailsArea() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVideoOpen = _useState2[0],
    setIsVideoOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "c-details-area pt-120 pb-50 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".2s"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-8 col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-details-wrapper mr-25"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-details-thumb p-relative mb-40"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/course/c-details-bg-01.jpg",
    alt: "details-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-details-ava d-md-flex align-items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/course/c-details-ava-01.png",
    alt: "avata"
  }), /*#__PURE__*/React.createElement("span", null, "By ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Emilia Jonas")))), /*#__PURE__*/React.createElement("div", {
    className: "course-details-content mb-45"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tpcourse__category mb-15"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tpcourse__price-list d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "c-color-green",
    href: "#"
  }, "Design")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "c-color-yellow",
    href: "#"
  }, "Development")))), /*#__PURE__*/React.createElement("div", {
    className: "tpcourse__ava-title mb-25"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "c-details-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Master Web Design in Adobe XD: Complete UI/UX Masterclass"))), /*#__PURE__*/React.createElement("div", {
    className: "tpcourse__meta course-details-list"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "rating-gold d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("p", null, "4.7"), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rs-star"
  }), /*#__PURE__*/React.createElement("span", null, "(125)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/icon/c-meta-01.png",
    alt: "meta-icon"
  }), " ", /*#__PURE__*/React.createElement("span", null, "35 Classes")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/icon/c-meta-02.png",
    alt: "meta-icon"
  }), " ", /*#__PURE__*/React.createElement("span", null, "291 Students"))))), /*#__PURE__*/React.createElement("div", {
    className: "c-details-about mb-40"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "tp-c-details-title mb-20"
  }, "About This Course"), /*#__PURE__*/React.createElement("p", null, "This course is a comprehensive and professional learning experience designed for those aspiring to become experts in web design and user interface (UI/UX) using Adobe XD. This course is tailored for both beginners and more experienced designers, providing a thorough coverage of all aspects of creating outstanding web projects."), /*#__PURE__*/React.createElement("p", null, "Throughout this masterclass, you will immerse yourself in the world of modern web design and not only learn the fundamentals of Adobe XD but also advanced techniques and strategies employed by professionals in UI/UX design. Through hands-on lessons and projects, you will discover how to craft effective and creative user interfaces that meet the needs of today's users and enhance their interaction with web applications. Regardless of your experience level, this course equips you with all the tools and knowledge necessary to become a master of web design using Adobe XD.")), /*#__PURE__*/React.createElement("div", {
    className: "cor-details-instructor mb-40"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "tp-c-details-title mb-40"
  }, "Instructor"), /*#__PURE__*/React.createElement("div", {
    className: "course-instructor-details d-flex f-wrap align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "course-avata mr-30 mb-20"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/course/c-details-ava-thumb-01.jpg",
    alt: "avata-thumb"
  })), /*#__PURE__*/React.createElement("div", {
    className: "course-avatar-details mb-20"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "c-avata-title mb-10"
  }, "Hossain Mahmud"), /*#__PURE__*/React.createElement("p", null, "Award Winning Chemical & User Interface Design Training"), /*#__PURE__*/React.createElement("div", {
    className: "c-details-list mb-5"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
    className: "rating-gold d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("p", null, "4.7"), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-ss-star"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rs-star"
  }), /*#__PURE__*/React.createElement("span", null, "(125)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/icon/c-details-01.png",
    alt: "meta-icon"
  }), /*#__PURE__*/React.createElement("span", null, "35 Classes")))), /*#__PURE__*/React.createElement("div", {
    className: "c-details-stu"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/icon/c-details-02.png",
    alt: "meta-icon"
  }), " ", /*#__PURE__*/React.createElement("span", null, "2,35,687 Students")))))), /*#__PURE__*/React.createElement("p", null, "\"As the course instructor, I'm delighted to witness the impressive growth of my students in this course. It's fulfilling to see them apply UI/UX principles effectively in Adobe XD, transforming creative ideas into user-focused web designs. Their dedication and the quality of their projects are truly commendable. This course equips them with valuable skills and empowers them to excel in the dynamic field of web design. I'm excited to witness their ongoing success in the design community.\"")), /*#__PURE__*/React.createElement("div", {
    className: "c-details-review pb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-review-title-wrapper"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "c-review-title mb-40"
  }, "Review")), /*#__PURE__*/React.createElement("div", {
    className: "course-reviewer-item-wrapper"
  }, _reviewData["default"].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "course-reviewer-item d-flex mb-25"
    }, /*#__PURE__*/React.createElement("div", {
      className: "course-review-ava"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img,
      alt: "details-avata"
    })), /*#__PURE__*/React.createElement("div", {
      className: "course-review-content p-relative"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "course-ava-title mb-15"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "tpcourse__rating-icon d-flex align-items-center mb-10"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fi fi-rs-star"
    })), /*#__PURE__*/React.createElement("p", null, item.review_text), /*#__PURE__*/React.createElement("div", {
      className: "c-reviewer-time"
    }, /*#__PURE__*/React.createElement("span", null, item.review_time))));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-4 col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-details-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-video-thumb p-relative mb-25"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/img/bg/c-details-video-bg.jpg",
    alt: "video-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-video-icon"
  }, /*#__PURE__*/React.createElement("a", {
    className: "popup-video",
    onClick: function onClick() {
      return setIsVideoOpen(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-sr-play"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "course-details-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-video-price"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pricing-video text-center mb-15"
  }, "$29.99"), /*#__PURE__*/React.createElement("div", {
    className: "cd-pricing-btn text-center mb-30"
  }, /*#__PURE__*/React.createElement(_link["default"], {
    className: "tp-vp-btn",
    href: "/course-details"
  }, "Add To Cart"), /*#__PURE__*/React.createElement(_link["default"], {
    className: "tp-vp-btn-green",
    href: "/course-details"
  }, "Enroll Now"))), /*#__PURE__*/React.createElement("div", {
    className: "cd-information mb-35"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-light fa-calendars"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Lesson"), " ", /*#__PURE__*/React.createElement("span", null, "36")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rr-chart-pie-alt"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Quizess"), " ", /*#__PURE__*/React.createElement("span", null, "6")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rr-user"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Students"), " ", /*#__PURE__*/React.createElement("span", null, "105")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-light fa-clock-desk"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Duration"), " ", /*#__PURE__*/React.createElement("span", null, "16 Hours")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-sr-stats"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Skill Level"), " ", /*#__PURE__*/React.createElement("span", null, "Beginner")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rr-comments"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Language"), " ", /*#__PURE__*/React.createElement("span", null, "English")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fi fi-rs-diploma"
  }), " ", /*#__PURE__*/React.createElement("label", null, "Certificate"), " ", /*#__PURE__*/React.createElement("span", null, "Yes")))), /*#__PURE__*/React.createElement("div", {
    className: "c-details-social"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "cd-social-title mb-25"
  }, "Share Now:"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-facebook-f"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-twitter"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube"
  }))))))))));
};
var _default = exports["default"] = CourseDetailsArea;