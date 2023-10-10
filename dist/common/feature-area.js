"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// feature_data_3
var feature_data_3 = [{
  icon: "fi fi-rr-paper-plane",
  title: "Online Courses"
}, {
  icon: "fi fi-rr-user",
  title: "Expert Trainer"
}, {
  icon: "fi fi-rr-document",
  title: "Get Certificate"
}, {
  icon: "fi fi-rr-calendar",
  title: "Life Time Access"
}];
var FeatureArea = function FeatureArea(_ref) {
  var style_about = _ref.style_about;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "feature-area pt-115 pb-90 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, style_about ? "" : /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-70"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "What We Offer"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "For Your Future Learning.")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-feature-cn"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, feature_data_3.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "col-xl-3 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea tp-feature-item text-center mb-30 wow fadeInUp",
      "data-wow-duration": ".8s",
      "data-wow-delay": "1s"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea__icon mb-25"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea__text"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "tpfea__title mb-5"
    }, item.title))));
  }))))));
};
var _default = exports["default"] = FeatureArea;