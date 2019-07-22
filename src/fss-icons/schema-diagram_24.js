"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComponent = function SvgComponent(props) {
  return _react.default.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M1.016 1.016v16.899l5.07 5.07h16.899V1.016H1.016zm20.701 20.701H6.93V17.07H2.283V2.283h19.434v19.434zM11.155 11.155V8.198h1.69v2.957h2.957v1.69h-2.957v7.182h7.182v-7.182H17.07v-1.69h2.957V3.973h-7.182V6.93h-1.69V3.973H3.973v7.182h7.182zm7.605 7.605h-4.647v-4.647h4.647v4.647zM14.112 5.24h4.647v4.647h-4.647V5.24zm-8.872 0h4.647v4.647H5.24V5.24z"
  }));
};

var _default = SvgComponent;
exports.default = _default;