"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// choose data 
var choose_data = {
  title: "Why Choose Us",
  sub_title: "Why You Choose Our E-Pora Online learning",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Dramatically supply transparent deliverables before & you backward comp internal or \"organic\" sources."),
  experiences_years: "23"
};
var title = choose_data.title,
  sub_title = choose_data.sub_title,
  des = choose_data.des,
  experiences_years = choose_data.experiences_years;

// choose list data
var choose_list_data = [{
  list: "Increasing Your Learning Skills"
}, {
  list: "High Quality Video  & Audio Classes"
}, {
  list: "Finish Your Course, Get Certificate"
}];
var ChooseArea = function ChooseArea(_ref) {
  var style_about = _ref.style_about,
    style_2 = _ref.style_2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "choose-area bg-bottom ".concat(style_about ? "pb-120" : "grey-bg", " ").concat(style_2 ? "pt-120 pb-90" : "", " wow fadeInUp"),
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: style_about ? null : "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-5 col-lg-6 col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-content mb-30"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-25"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, title), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, sub_title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-list tp-choose-bg mb-60"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, choose_list_data.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-list-bg"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-light fa-check"
    }), item.list));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "choose-btn"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/about",
    className: "tp-btn"
  }, "More Details")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-7 col-lg-6 col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-img tp-choose-img-2 p-relative mb-30 mr-50 text-end"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/bg/choose-2-img.jpg",
    alt: "choose-img"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tpchoose-img-text tp-chose-shape d-none d-md-block"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", null, experiences_years, "+"), /*#__PURE__*/_react["default"].createElement("p", null, "Years Experiences")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-light fa-check"
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Fully Safe & Secure")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("p", null, "Total Students"), /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/icon/choose-2-shape.png",
    alt: "choose-shape"
  }))))))))));
};
var _default = exports["default"] = ChooseArea;