"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
//testimonial_data_2 
var testimonial_data_2 = [{
  id: 1,
  name: "Wade Warren",
  img: "/assets/img/icon/test-avata--1.png",
  title: "UX/UI Designer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}, {
  id: 2,
  name: "Guy Hawkins",
  img: "/assets/img/icon/test-avata--2.png",
  title: "Software Engineer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}, {
  id: 3,
  name: "Courtney Henry",
  img: "/assets/img/icon/test-avata--2.png",
  title: "Sr. UX/UI Designer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}];

//   testimonial setting
var setting = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
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
var TestimonialAreaTwo = function TestimonialAreaTwo(_ref) {
  var style_about = _ref.style_about;
  var sliderRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "testimonial-white-area pb-90 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-6 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-35"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Testimonial"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "4700+ Happy Students"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-6 col-md-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-section-arrow d-flex justify-content-md-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _sliderRef$current;
      return sliderRef === null || sliderRef === void 0 || (_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.slickPrev();
    },
    className: "slick-prev slick-arrow"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "arrow_carrot-left"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _sliderRef$current2;
      return sliderRef === null || sliderRef === void 0 || (_sliderRef$current2 = sliderRef.current) === null || _sliderRef$current2 === void 0 ? void 0 : _sliderRef$current2.slickNext();
    },
    className: "slick-next slick-arrow"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "arrow_carrot-right"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "testimonial--active tp-slide-space"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({}, setting, {
    ref: sliderRef
  }), testimonial_data_2.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "tp-test-s-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__ava d-flex align-items-center mb-15"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "testi-avatar"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__avainfo ml-20"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-testi__title mt-5"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#"
    }, item.name)), /*#__PURE__*/_react["default"].createElement("i", null, item.title))), /*#__PURE__*/_react["default"].createElement("p", null, item.des), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__rating mb-5"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rs-star"
    }))))));
  }))))));
};
var _default = exports["default"] = TestimonialAreaTwo;