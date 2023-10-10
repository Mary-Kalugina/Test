"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _seo = _interopRequireDefault(require("../common/seo"));
var _home = _interopRequireDefault(require("../components/homes/home"));
var _wrapper = _interopRequireDefault(require("../layout/wrapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var index = function index() {
  return /*#__PURE__*/React.createElement(_wrapper["default"], null, /*#__PURE__*/React.createElement(_seo["default"], {
    pageTitle: 'Epora'
  }), /*#__PURE__*/React.createElement(_home["default"], null));
};
var _default = exports["default"] = index;