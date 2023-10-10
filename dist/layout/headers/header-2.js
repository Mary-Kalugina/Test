"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _useSticky2 = _interopRequireDefault(require("../../../hooks/use-sticky"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireWildcard(require("react"));
var _navMenu = _interopRequireDefault(require("./nav-menu"));
var _sidebar = _interopRequireDefault(require("./sidebar"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// category_data
var category_data = [{
  title: "Bangla Medium"
}, {
  title: "English Medium"
}, {
  title: "Video Edition"
}, {
  title: "Logo Design"
}, {
  title: "Francy Medium"
}];
var HeaderTwo = function HeaderTwo() {
  var _useSticky = (0, _useSticky2["default"])(),
    sticky = _useSticky.sticky;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("header", {
    className: "header_white_area d-none d-xl-block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header__area pt-40 pb-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-7 col-xl-6 col-lg-6 col-md-5 col-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo-area d-flex align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/logo/logo-black.png",
    alt: "logo"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-cat-menu ml-40"
  }, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, " Categorie ", /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "arrow_carrot-down"
  }))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "sub-menu"
  }, category_data.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: "/course-grid"
    }, item.title));
  })))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-5 col-lg-6 col-md-7"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-right header-right-box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-search-box"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "Email",
    placeholder: "What you want to learn?"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "header-search-btn"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rs-search mr-5"
  }), " Search Now")))))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-menu-area ".concat(sticky ? "header-sticky" : ""),
    id: "header-sticky"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-9 col-xl-9 col-lg-6 text-start"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "main-menu main-menu-white"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    id: "mobile-menu"
  }, /*#__PURE__*/_react["default"].createElement(_navMenu["default"], null)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xxl-3 col-xl-3 col-lg-6 d-flex align-items-center justify-content-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-meta-green"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/sign-in"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rr-user"
  }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/cart"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rr-shopping-bag"
  }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "tp-menu-toggle d-xl-none"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon_ul"
  })))))))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "header-mob-sticky",
    className: "mobile-header-area mob-white-sticky d-xl-none ".concat(sticky ? "header-sticky" : "")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 col-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/logo/logo-black.png",
    alt: "logo"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 col-7 d-flex align-items-center justify-content-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-meta-green text-end"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/sign-in"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rr-user"
  }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/cart"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fi fi-rr-shopping-bag"
  }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    onClick: function onClick() {
      return setIsActive(true);
    },
    className: "tp-menu-toggle d-xl-none"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon_ul"
  }))))))))), /*#__PURE__*/_react["default"].createElement(_sidebar["default"], {
    isActive: isActive,
    setIsActive: setIsActive
  }));
};
var _default = exports["default"] = HeaderTwo;