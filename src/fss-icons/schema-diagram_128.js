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
    d: "M3.976 3.976V96.32l27.703 27.703h92.344V3.976H3.976zm113.122 113.122H36.297V91.703H10.902V10.902h106.196v106.196zM59.383 59.383v-16.16h9.234v16.16h16.16v9.234h-16.16v39.246h39.246V68.617h-16.16v-9.234h16.16V20.136H68.617v16.16h-9.234v-16.16H20.136v39.246h39.247zm41.555 41.555H75.543V75.543h25.395v25.395zM75.543 27.062h25.395v25.395H75.543V27.062zm-48.481 0h25.395v25.395H27.062V27.062z"
  }));
};

var _default = SvgComponent;
exports.default = _default;