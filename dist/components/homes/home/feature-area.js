"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var feature_content = [{
  id: 1,
  icon: "fi fi-rr-paper-plane",
  title: "Online Courses",
  des: "Engage interactively to offer access to world-class materials as unique catalysts for transforming my coordinates."
}, {
  id: 2,
  icon: "fi fi-rr-user",
  title: "Expert Trainer",
  des: "Access high-quality online courses led by experienced trainers. Gain interactive insights and transform your expertise."
}, {
  id: 3,
  icon: "fi fi-rr-document",
  title: "Get Certificate",
  des: "Obtain a certification to authenticate your acquired skills. Elevate your professional profile with credentials."
}, {
  id: 4,
  icon: "fi fi-rr-calendar",
  title: "Life Time Access",
  des: "Enjoy unrestricted access to a wealth of educational resources for a lifetime. Dive into continuous self-improvement."
}];
var FeatureArea = function FeatureArea() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-1.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-60"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title mb-20"
  }, "What We Offer"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title"
  }, "For Your Future Learning.")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-feature-cn"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, feature_content.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "col-xl-3 col-lg-6 col-md-6"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea mb-30 wow fadeInUp",
      "data-wow-duration": ".8s",
      "data-wow-delay": ".6s"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea__icon mb-25"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "tpfea__text"
    }, /*#__PURE__*/_react["default"].createElement("h5", {
      className: "tpfea__title mb-20"
    }, item.title), /*#__PURE__*/_react["default"].createElement("p", null, item.des))));
  }))))));
};
var _default = exports["default"] = FeatureArea;