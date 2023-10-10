"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _reactCountup = _interopRequireDefault(require("react-countup"));
var _reactIntersectionObserver = require("react-intersection-observer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Count = function Count(_ref) {
  var number = _ref.number,
    text = _ref.text,
    add_style = _ref.add_style,
    style_3 = _ref.style_3,
    profile_counter = _ref.profile_counter;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    focus = _useState2[0],
    setFocus = _useState2[1];
  var visibleChangeHandler = function visibleChangeHandler(isVisible) {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactCountup["default"], {
    start: focus ? 0 : null,
    end: number,
    duration: 1
  }, function (_ref2) {
    var countUpRef = _ref2.countUpRef;
    return /*#__PURE__*/React.createElement("div", {
      className: "d-flex ".concat(add_style ? 'align-items-center' : '', " ").concat(style_3 ? "" : "justify-content-center")
    }, /*#__PURE__*/React.createElement("span", {
      ref: countUpRef
    }), /*#__PURE__*/React.createElement(_reactIntersectionObserver.InView, {
      as: "span",
      onChange: function onChange(inView) {
        return visibleChangeHandler(inView);
      }
    }, text));
  }));
};
var _default = exports["default"] = Count;