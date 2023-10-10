"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// footer_three_content
var footer_three_content = [{
  id: 1,
  title: "About",
  cls: "col-xl-2",
  footer_col: "footer-3-col-1",
  links: [{
    name: "About Us",
    link: "/about"
  }, {
    name: "Blog",
    link: "/blog"
  }, {
    name: "Careers",
    link: "/"
  }, {
    name: "Jobs",
    link: "/about"
  }, {
    name: "In Press",
    link: "/"
  }]
}, {
  id: 2,
  title: "Quick Links",
  cls: "col-xl-3",
  footer_col: "footer-3-col-2",
  links: [{
    name: "Refund Policy",
    link: "/about"
  }, {
    name: "Documentation",
    link: "/about"
  }, {
    name: "Chat online",
    link: "/contact"
  }, {
    name: "Order Cancel",
    link: "/about"
  }, {
    name: "Privacy Policy",
    link: "/"
  }]
}, {
  id: 3,
  title: "Support",
  cls: "col-xl-3",
  footer_col: "footer-3-col-3",
  links: [{
    name: "Contact us",
    link: "/contact"
  }, {
    name: "Online Chat",
    link: "/contact"
  }, {
    name: "Whatsapp",
    link: "/contact"
  }, {
    name: "Telegram",
    link: "/about"
  }, {
    name: "Ticketing",
    link: "/"
  }]
}, {
  id: 4,
  title: "FAQ",
  cls: "col-xl-2",
  footer_col: "footer-3-col-4",
  links: [{
    name: "Account",
    link: "/contact"
  }, {
    name: "Deliveries",
    link: "/contact"
  }, {
    name: "Orders",
    link: "/contact"
  }, {
    name: "Payments",
    link: "/about"
  }, {
    name: "Return",
    link: "/"
  }]
}, {
  id: 5,
  title: "Products",
  cls: "col-xl-2",
  footer_col: "footer-3-col-5",
  links: [{
    name: "Overview",
    link: "/contact"
  }, {
    name: "Business Account",
    link: "/contact"
  }, {
    name: "Credit Card",
    link: "/contact"
  }, {
    name: "Integrations",
    link: "/about"
  }, {
    name: "Rewards",
    link: "/"
  }]
}];

// social_links
var social_links = [{
  link: "http://facebook.com",
  target: "_blank",
  icon: "fab fa-facebook-f",
  name: "Facebook"
}, {
  link: "https://www.youtube.com/",
  target: "_blank",
  icon: "fab fa-youtube",
  name: "Youtube"
}, {
  link: "https://www.basketball.com/",
  target: "_blank",
  icon: "fa-light fa-basketball",
  name: "Instagram"
}, {
  link: "http://whatsapp.com",
  target: "_blank",
  icon: "fa-brands fa-whatsapp",
  name: "Twitter"
}];
var FooterThree = function FooterThree() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-bg theme-bg bg-bottom",
    style: {
      backgroundImage: "url(/assets/img/bg/shape-bg-02.png)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-border pt-115 pb-70"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, footer_three_content.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "".concat(item.cls, " col-md-4  col-6")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "footer-widget ".concat(item.footer_col, " mb-50")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "footer-widget__text mb-35"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "footer-widget__title"
    }, item.title)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "footer-widget__link"
    }, /*#__PURE__*/_react["default"].createElement("ul", null, item.links.map(function (link, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: i
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#"
      }, link.name));
    })))));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright pt-60 pb-40"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row text-center text-lg-start"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-3 col-lg-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright__logo mb-30"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "home-3"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/img/logo/logo.png",
    alt: "logo"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-6 col-lg-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright__text text-center mb-30"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Uxaction\xA9 ", new Date().getFullYear(), " , All Rights Reserved"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-3 col-lg-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright__social-area mb-20 text-lg-end"
  }, social_links.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: i,
      href: item.link,
      target: item.target
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: item.icon
    }));
  }), /*#__PURE__*/_react["default"].createElement("br", null)))))))));
};
var _default = exports["default"] = FooterThree;