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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M64 12L4 116h120L64 12zm0 8.004L117.074 112H10.926L64 20.004z"
  }), _react.default.createElement("path", {
    d: "M60 56v8l2 20h4l2-20v-8z"
  }), _react.default.createElement("circle", {
    cx: 64,
    cy: 92,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;