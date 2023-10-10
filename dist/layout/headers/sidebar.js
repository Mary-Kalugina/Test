"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
var _mobileMenus = _interopRequireDefault(require("./mobile-menus"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Sidebar = function Sidebar(_ref) {
  var isActive = _ref.isActive,
    setIsActive = _ref.setIsActive;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tp-sidebar-menu ".concat(isActive ? "sidebar-opened" : "")
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "sidebar-close",
    onClick: function onClick() {
      return setIsActive(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon_close"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "side-logo mb-30"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/logo/logo-black.png",
    alt: "logo"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-menu mean-container"
  }, /*#__PURE__*/_react["default"].createElement(_mobileMenus["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-info"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "mb-15"
  }, "Contact Info"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "side_circle"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "27 Division St, New York"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "tel:123456789"
  }, "+1 800 123 456 78")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:epora@example.com"
  }, "epora@example.com"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "side-social"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-facebook-f"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-linkedin"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-instagram"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body-overlay ".concat(isActive ? "opened" : "", " "),
    onClick: function onClick() {
      return setIsActive(false);
    }
  }));
};
var _default = exports["default"] = Sidebar;