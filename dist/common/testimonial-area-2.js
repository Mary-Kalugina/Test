"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// testimonial_data_3
var testimonial_data_3 = [{
  id: 1,
  name: "Wade Warren",
  name_about: "Darrell Steward",
  img: "/assets/img/icon/test-avata--1.png",
  img_about: "/assets/img/icon/test-avata--1.png",
  title: "President of Sales",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}, {
  id: 2,
  name: "Guy Hawkins",
  name_about: "Ralph Edwards",
  img: "/assets/img/icon/testi-avata3-01.png",
  img_about: "/assets/img/icon/testi-ava-sub-1.png",
  title: "Marketing Coordinator",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}, {
  id: 3,
  name: "Courtney Henry",
  name_about: "Courtney Henry",
  img: "/assets/img/icon/test-avata--2.png",
  img_about: "/assets/img/icon/testi-ava-sub-2.png",
  title: "UX/UI Designer",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Phosfluorescently aggregate bleeding-edge channels rather than global mindshare. Monotonectally enable enterprise wide strategic theme areas for worldwide initiatives.")
}];

// testimonial setting 
var setting = {
  infinite: true,
  autoplay: true,
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
var TestimonialAreaThree = function TestimonialAreaThree(_ref) {
  var style_about = _ref.style_about;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "testimonial-area bg-bottom ".concat(style_about ? "pt-120" : "pt-115", " pb-90  wow fadeInUp"),
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title text-center mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(style_about ? "tp-sub-title-box" : "tp-bline-stitle", " mb-15")
  }, "Testimonial"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "What Our Happy Users Says")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "testimonial-active-box tp-slide-space-white"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], setting, testimonial_data_3.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "tp-test-s-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi tp-testi-round p-relative"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__ava testi-ava-border d-flex align-items-center mb-20 pb-20"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: style_about ? item === null || item === void 0 ? void 0 : item.img_about : item.img,
      alt: "testi-avatar"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__avainfo ml-20"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "tp-testi__title tp-title-meta mt-5"
    }, style_about ? item === null || item === void 0 ? void 0 : item.name_about : item.name), /*#__PURE__*/_react["default"].createElement("i", null, item.title))), /*#__PURE__*/_react["default"].createElement("p", null, item.des), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-testi__rating mb-5"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-ss-star"
    }), /*#__PURE__*/_react["default"].createElement("i", {
      className: "fi fi-rs-star"
    }), /*#__PURE__*/_react["default"].createElement("span", null, "4.5")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "testi-quote"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-solid fa-quote-right"
    }))));
  }))))));
};
var _default = exports["default"] = TestimonialAreaThree;