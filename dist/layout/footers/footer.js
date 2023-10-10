"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var footer_data = [{
  id: 1,
  title: "About",
  cls: "col-xl-2",
  footer_col: "footer-col-1",
  links: [{
    name: "About Us",
    link: "/about"
  }, {
    name: "Blog",
    link: "/blog"
  }, {
    name: "Careers",
    link: "/careers"
  }, {
    name: "Jobs",
    link: "/"
  }, {
    name: "In Press",
    link: "/"
  }]
}, {
  id: 2,
  title: "Quick Links",
  cls: "col-xl-3",
  footer_col: "footer-col-2",
  links: [{
    name: "Refund Policy",
    link: "/policy"
  }, {
    name: "Documentation",
    link: "/documentation"
  }, {
    name: "Chat online",
    link: "/chat-online"
  }, {
    name: "Order Cancel",
    link: "/order-cancel"
  }, {
    name: "Privacy Policy",
    link: "/privacy-policy"
  }]
}, {
  id: 3,
  title: "Support",
  footer_col: "footer-col-3",
  cls: "col-xl-3",
  links: [{
    name: "Contact us",
    link: "/contact"
  }, {
    name: "Online Chat",
    link: "/online-chat"
  }, {
    name: "Whatsapp",
    link: "/whatsapp"
  }, {
    name: "Telegram",
    link: "/telegram"
  }, {
    name: "Ticketing",
    link: "/ticketing"
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
var copyright = {
  logo: "/assets/img/logo/logo.png",
  copyright_text: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Copyright \xA9 Uxaction ", new Date().getFullYear(), ", All Rights Reserved")
};
var logo = copyright.logo,
  copyright_text = copyright.copyright_text;
var Footer = function Footer() {
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
  }, footer_data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: "".concat(item.cls, " col-md-4")
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
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xl-4 col-lg-6 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-widget footer-col-4  mb-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-widget__text mb-35"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "footer-widget__title"
  }, "Support")), /*#__PURE__*/_react["default"].createElement("p", null, "Be the first one to know about discounts, offers and events. Unsubscribe whenever you like."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-widget__f-newsletter mb-40"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "icon_mail_alt"
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    placeholder: "Enter your email"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "footer-widget__submit tp-border-btn2"
  }, "Subscribe Now"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-widget__social d-flex align-items-center"
  }, social_links.map(function (link, i) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: link.link,
      target: link.target,
      key: i
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: link.icon
    }));
  }))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright pt-60 pb-30"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright__logo mb-30"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    alt: "logo"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "f-copyright__text text-md-end mb-30"
  }, /*#__PURE__*/_react["default"].createElement("span", null, copyright_text)))))))));
};
var _default = exports["default"] = Footer;