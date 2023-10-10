"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
require("@/src/styles/index.scss");
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
function App(_ref) {
  var Component = _ref.Component,
    pageProps = _ref.pageProps;
  return /*#__PURE__*/React.createElement(Component, pageProps);
}