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
var testimonial_data = [{
  id: 1,
  name: "Courtney Henry",
  img: "assets/img/icon/test-ava-01.png",
  title: "Sr. UX/UI Designer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "As an aspiring UX/UI Designer, E-Pora Online Learning has been invaluable. The courses are clear, engaging, and have prepared me for a successful career.")
}, {
  id: 2,
  name: "Devon Lane",
  img: "assets/img/icon/test-ava-02.png",
  title: "Software Engineer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "E-Pora Online Learning has equipped me with the essential skills and knowledge I need to excel in my career as a Software Engineer.")
}, {
  id: 3,
  name: "Jenny Wilson",
  img: "assets/img/icon/test-ava-03.png",
  title: "Content Writer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Thanks to E-Pora Online Learning, my writing skills have skyrocketed, and I've gained valuable insights into content strategy and SEO, setting me up for success as a Content Writer.")
}, {
  id: 4,
  name: "Jenny Wilson",
  img: "assets/img/icon/test-ava-03.png",
  title: "Content Writer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Dramatically supply transparent deliverab before & you backward comp internal or \"organic\" sources.")
}];

// slider setting
var setting = {
  infinite: true,
  slidesToShow: 3,
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
var TestimonialArea = function TestimonialArea() {
  var sliderRef = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "testimonial-area bg-bottom pt-110 pb-90 wow fadeInUp",
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-8 col-md-8 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "Students' feedback"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-4 col-md-4 col-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-section-arrow d-flex justify-content-md-end mb-40"
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
    className: "testimonial-active tp-slide-space"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({}, setting, {
    ref: sliderRef
  }), testimonial_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "tp-test-slide-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi p-relative mt-65"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__avatar"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "testi-avatar"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__rating pb-5"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "d-flex align-items-center justify-content-end mr-5 mb-25"
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
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__avainfo"
    }, /*#__PURE__*/_react["default"].createElement("p", null, item.des), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-testi__title"
    }, item.name), /*#__PURE__*/_react["default"].createElement("i", null, item.title))));
  }))))));
};
var _default = exports["default"] = TestimonialArea;