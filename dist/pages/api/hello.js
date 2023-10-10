"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
var _courseData = _interopRequireDefault(require("@/src/data/course-data"));
var _ourCourseData = _interopRequireDefault(require("@/src/data/our-course-data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function handler(req, res) {
  var slug = req.query.slug;
  var responseData;
  if (slug === 'home') {
    responseData = _courseData["default"];
  } else if (slug === 'details') {
    responseData = _ourCourseData["default"];
  } else {
    res.status(404).json({
      error: 'Not Found'
    });
    return;
  }
  res.status(200).json(responseData);
}