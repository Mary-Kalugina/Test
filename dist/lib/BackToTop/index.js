"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _scrollToTop = _interopRequireDefault(require("../../../hooks/scroll-to-top"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BackToTop = function BackToTop() {
  var _useScrollToTop = (0, _scrollToTop["default"])(),
    stick = _useScrollToTop.stick,
    onClickHandler = _useScrollToTop.onClickHandler;
  (0, _react.useEffect)(function () {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = "".concat(pathLength, " ").concat(pathLength);
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function updateProgress() {
      var scroll = window.scrollY;
      var docHeight = document.body.offsetHeight;
      var winHeight = window.innerHeight;
      var height = docHeight - winHeight;
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-wrap ".concat(stick && "active-progress"),
    role: "button",
    onClick: onClickHandler,
    onKeyUp: function onKeyUp(e) {
      return e;
    },
    tabIndex: -1
  }, /*#__PURE__*/React.createElement("svg", {
    className: "progress-circle svg-content",
    width: "100%",
    height: "100%",
    viewBox: "-1 -1 102 102"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
  })));
};
var _default = exports["default"] = BackToTop;