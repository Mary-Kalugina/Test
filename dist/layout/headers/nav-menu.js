"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _menuData = _interopRequireDefault(require("./menu-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NavMenu = function NavMenu() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", null, _menuData["default"].map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id,
      className: "has-dropdown"
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: item.link
    }, item.title), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "submenu"
    }, item.sub_menus.map(function (sub, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: i
      }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
        href: sub.link
      }, sub.title));
    })));
  })));
};
var _default = exports["default"] = NavMenu;