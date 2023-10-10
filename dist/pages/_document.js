"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Document;
var _document = require("next/document");
function Document() {
  return /*#__PURE__*/React.createElement(_document.Html, {
    lang: "en"
  }, /*#__PURE__*/React.createElement(_document.Head, null), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement(_document.Main, null), /*#__PURE__*/React.createElement(_document.NextScript, null)));
}