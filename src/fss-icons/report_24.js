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
    d: "M13 14h4v1h-4zm0-2h4v1h-4zm0 4h4v1h-4z"
  }), _react.default.createElement("path", {
    d: "M2 1v22h20V1H2zm18 20h-3v-1h-4v1h-2V6H7v15H4V4h16v17z"
  }), _react.default.createElement("path", {
    d: "M13 18h4v1h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;