"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// choose_data_3
var choose_data_3 = [{
  id: 1,
  title: "Increasing Your Learning Skills",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Holisticly parallel task diverse architectures after top-line applications. Competently facilitate end.")
}, {
  id: 2,
  title: "High Quality Video & Audio Classes",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Holisticly parallel task diverse architectures after top-line applications. Competently facilitate end.")
}, {
  id: 3,
  title: "Finish Your Course, Get Certificate",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Holisticly parallel task diverse architectures after top-line applications. Competently facilitate end.")
}];

// choose top data 
var choose_top_data = {
  title: "Why You Choose Our E-Pora Online learning",
  des: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " Competently facilitate end-to-end testing procedure before customized applications. Interactively coordinate scalable.")
};
var title = choose_top_data.title,
  des = choose_top_data.des;
var ChooseArea = function ChooseArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "choose-area pb-70 wow fadeInUp",
    "data-wow-duration": ".8s",
    "data-wow-delay": ".3s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-5 col-lg-6 col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-content mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-30"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-bline-stitle mb-15"
  }, "Why Choose Us"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-35"
  }, title), /*#__PURE__*/_react["default"].createElement("p", null, des)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-online-list"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, choose_data_3.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "choose-online-item d-flex"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "choose-online-icon"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-light fa-check"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "choose-online-content"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "choose-online-title mb-10"
    }, item.title), /*#__PURE__*/_react["default"].createElement("p", null, item.des))));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-7 col-lg-6 col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-choose-img tp-big-bg mb-50"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/bg/choose-3-bg-01.png",
    alt: "choose-img"
  })))))));
};
var _default = exports["default"] = ChooseArea;