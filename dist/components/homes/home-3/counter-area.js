"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _count = _interopRequireDefault(require("@/src/common/count"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// counter_data
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
var CounterArea = function CounterArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-counter-area theme-bg pt-90 wow fadeInUp",
    "data-wow-duration": ".6s",
    "data-wow-delay": ".2s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "counter-b-border"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, counter_data.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-3 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "counter-item mb-70"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "counter-item__content counter-white-text"
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: "counter-item__title counter-left-title"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "counter"
    }, /*#__PURE__*/_react["default"].createElement(_count["default"], {
      add_style: true,
      number: item.count_number,
      text: item.thousand,
      style_3: true
    }))), /*#__PURE__*/_react["default"].createElement("p", null, item.title))));
  }))))));
};
var _default = exports["default"] = CounterArea;