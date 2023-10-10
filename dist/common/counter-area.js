"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _count = _interopRequireDefault(require("./count"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// counter data 
var counter_data = [{
  id: 1,
  icon: "fi fi-rr-user",
  count_number: 276,
  thousand: "K",
  title: "Worldwide Students"
}, {
  id: 2,
  icon: "fi fi-rr-document",
  count_number: 23,
  thousand: "",
  title: "Years Experience"
}, {
  id: 3,
  icon: "fi fi-rr-apps",
  count_number: 735,
  thousand: "",
  title: "Professional Courses"
}, {
  id: 4,
  icon: "fi fi-rr-star",
  count_number: 407,
  thousand: "K",
  title: "Beautiful Review"
}];
var CounterArea = function CounterArea(_ref) {
  var style_counter = _ref.style_counter;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-counter-area bg-bottom  ".concat(style_counter ? "pb-60" : "grey-bg pt-120 pb-60", "  wow fadeInUp"),
    "data-wow-duration": "1s",
    "data-wow-delay": ".4s",
    style: {
      backgroundImage: style_counter ? null : "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, counter_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-3 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "counter-item mb-60 text-center"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "counter-item__icon mb-25"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "counter-item__content"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "counter-item__title"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "counter"
    }, /*#__PURE__*/_react["default"].createElement(_count["default"], {
      add_style: true,
      number: item.count_number,
      text: item.thousand
    }))), /*#__PURE__*/_react["default"].createElement("p", null, item.title))));
  })))));
};
var _default = exports["default"] = CounterArea;