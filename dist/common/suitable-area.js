"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// suitable_data
var suitable_data = [{
  id: 1,
  title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Do you want to ", /*#__PURE__*/_react["default"].createElement("span", null, "Learn"), " here?"),
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Dramatically supply transpa deliverables before & you."),
  img: "/assets/img/bg/suit-bg-01.png"
}, {
  id: 2,
  title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Do you want to ", /*#__PURE__*/_react["default"].createElement("span", null, "Learn"), " here?"),
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Dramatically supply transpa deliverables before & you."),
  img: "/assets/img/bg/suit-bg-02.png"
}];
var SuitableArea = function SuitableArea(_ref) {
  var style_2 = _ref.style_2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "suitable-area  ".concat(style_2 ? "bg-bottom grey-bg pt-115" : "", " pb-90 wow fadeInUp"),
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: style_2 ? "url(/assets/img/bg/shape-bg-1.png)" : null
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-60"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title mb-25"
  }, "Join With Us"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "Which One is Suitable For You?")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, suitable_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-suit mb-30 p-relative ".concat(style_2 ? "white-bg" : "")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-suit__content"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "tp-suit__title"
    }, item.title), /*#__PURE__*/_react["default"].createElement("p", null, item.des), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-suit__btn pt-5"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/contact",
      className: "tp-border-btn"
    }, "Join Now"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tp-suit__tech"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item.img,
      alt: "suitable-img"
    }))));
  })))));
};
var _default = exports["default"] = SuitableArea;