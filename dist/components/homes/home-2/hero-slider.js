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
var slider_data = [{
  id: 1,
  bg_img: "/assets/img/slider/slider-bg-01.jpg",
  slider_text: "Learn New Skills & Popular Courses",
  title: "For Every Student, Every Classroom.",
  total_courses: "3.5k",
  courses_text: "Free Pro Courses",
  students: "235k",
  st_text: "Worldwide Students",
  review: "4.7",
  review_text: "Worldwide Review"
}, {
  id: 2,
  bg_img: "/assets/img/slider/slider-bg-02.jpg",
  slider_text: "",
  title: "For Every Student, Every Classroom.",
  total_courses: "3.5k",
  courses_text: "Free Pro Courses",
  students: "235k",
  st_text: "Worldwide Students",
  review: "4.7",
  review_text: "Worldwide Review"
}];

// slider setting
var setting = {
  autoplay: false,
  autoplaySpeed: 4000,
  dots: false,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      dots: false,
      arrows: false
    }
  }]
};
var HeroSlider = function HeroSlider() {
  var sliderRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "slider-area"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-active slider-arrow "
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({}, setting, {
    ref: sliderRef
  }), slider_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        var _sliderRef$current;
        return sliderRef === null || sliderRef === void 0 || (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.slickNext();
      },
      className: "slick-prev slick-arrow"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-angle-left"
    })), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        var _sliderRef$current2;
        return sliderRef === null || sliderRef === void 0 || (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.slickPrev();
      },
      className: "slick-next slick-arrow"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-angle-right"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-item slider-bg-height d-flex align-items-center p-relative",
      style: {
        backgroundImage: "url(".concat(item.bg_img, ")")
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-7 col-lg-7 col-12"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-content"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "slider-text mb-15"
    }, item.slider_text), /*#__PURE__*/_react["default"].createElement("h2", {
      className: "slider-title mb-65"
    }, item.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-btn"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      className: "tp-btn mr-5",
      href: "/course-list"
    }, "Explore Courses"), " ", " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
      className: "tp-s-border-btn",
      href: "/course-list"
    }, "Watch Videos")))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-xl-5 col-lg-5 d-none d-lg-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "slider-info-list"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, item.total_courses), " ", item.courses_text), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, item.students), item.st_text), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", null, item.review, " ", /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    })), item.review_text))))))));
  })))));
};
var _default = exports["default"] = HeroSlider;