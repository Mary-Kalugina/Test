"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var VideoArea = function VideoArea(_ref) {
  var style_2 = _ref.style_2;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "video-area ".concat(style_2 ? "pb-120" : "pt-90 pb-120", " wow fadeInUp"),
    "data-wow-duration": ".8s",
    "data-wow-delay": ".4s"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-lg-12 col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title mb-65"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tp-sub-title-box mb-15"
  }, "Live Classes"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "tp-section-title mb-20"
  }, "HD Quality Video, Audio ", /*#__PURE__*/_react["default"].createElement("br", null), " & Live Classes")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "video-bg p-relative text-center"
  }, style_2 ? /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/bg/video-bg-2.jpg",
    alt: "video-bg"
  }) : /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/bg/video-bg-01.jpg",
    alt: "video-bg"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "video-text ".concat(style_2 ? "video-run-time" : "")
  }, /*#__PURE__*/_react["default"].createElement("i", null, "Live", /*#__PURE__*/_react["default"].createElement("span", null, "01:30:08"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(style_2 ? "video-shape-area" : "video-shape")
  }, style_2 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
    className: "video-shape",
    src: "/assets/img/about/shape-2-img-2.png",
    alt: "video-shape"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: "video-shape-2 d-none d-md-block",
    src: "/assets/img/about/video-2-shape-2.png",
    alt: "video-shape"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: "video-shape-3 d-none d-md-block",
    src: "/assets/img/about/video-2-shape-1.jpg",
    alt: "video-shape"
  })) : /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/about/shape-2-img-2.png",
    alt: "video-shape"
  }))))))));
};
var _default = exports["default"] = VideoArea;