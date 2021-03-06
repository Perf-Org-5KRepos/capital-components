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
    d: "M64 4C39.695 4 20 23.697 20 48s19.695 44 44 44 44-19.697 44-44S88.305 4 64 4zm0 84c-22.057 0-40-17.944-40-40S41.943 8 64 8s40 17.944 40 40-17.943 40-40 40zm-16 8h32v16H48zm16 28a8 8 0 0 0 8-8H56a8 8 0 0 0 8 8z"
  }), _react.default.createElement("path", {
    d: "M64 76l16-24H48l16 24zm0-7.211L55.475 56h17.051L64 68.789z"
  }));
};

var _default = SvgComponent;
exports.default = _default;