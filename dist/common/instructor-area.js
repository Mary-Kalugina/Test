"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireWildcard(require("react"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// instructor_info
var instructor_info = [{
  id: 1,
  img: "/assets/img/bg/instructor-bg-01.jpg",
  name: "Devon Lane",
  title: "Instructor"
}, {
  id: 2,
  img: "/assets/img/bg/instructor-bg-02.jpg",
  name: "Jane Cooper",
  title: "Instructor"
}, {
  id: 3,
  img: "/assets/img/bg/instructor-bg-03.jpg",
  name: "Courtney Henry",
  title: "Instructor"
}, {
  id: 4,
  img: "/assets/img/bg/instructor-bg-04.jpg",
  name: "Devon Lane",
  title: "Instructor"
}];

// social_links
var social_links = [{
  link: "http://facebook.com",
  target: "_blank",
  icon: "fab fa-facebook-f",
  name: "Facebook"
}, {
  link: "http://twitter.com",
  target: "_blank",
  icon: "fab fa-twitter",
  name: "Twitter"
}, {
  link: "https://www.instagram.com/",
  target: "_blank",
  icon: "fab fa-instagram",
  name: "Instagram"
}, {
  link: "https://www.youtube.com/",
  target: "_blank",
  icon: "fab fa-youtube",
  name: "Youtube"
}];

// setting
var setting = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
var InstructorArea = function InstructorArea(_ref) {
  var style_2 = _ref.style_2;
  var sliderRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "instructor-area pt-110 pb-110 wow fadeInUp",
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, style_2 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-35 text-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Instructor"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Our Expert Instructor"))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-8 col-md-7 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Our Expert Instructor"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-4 col-md-5 col-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-instruc-arrow d-flex justify-content-md-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return sliderRef.current.slickPrev();
    },
    className: "slick-prev slick-arrow"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "arrow_carrot-left"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return sliderRef.current.slickNext();
    },
    className: "slick-next slick-arrow"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "arrow_carrot-right"
  })))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "intruc-active mb-15 tp-slide-space"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({}, setting, {
    ref: sliderRef
  }), instructor_info.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "tp-instruc-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-instructor text-center p-relative mb-30"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-instructor__thumb mb-25"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "instructor-profile"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-instructor__content"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-instructor__title mb-20"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/instructor-profile"
    }, item.name)), /*#__PURE__*/_react["default"].createElement("span", null, item.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-instructor__social"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, social_links.map(function (link, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: i
      }, /*#__PURE__*/_react["default"].createElement("a", {
        target: link.target,
        href: link.link
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: link.icon
      })));
    }))))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "instructor-btn text-center"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "tp-btn",
    href: "/instructor"
  }, "All Instructor")))))));
};
var _default = exports["default"] = InstructorArea;