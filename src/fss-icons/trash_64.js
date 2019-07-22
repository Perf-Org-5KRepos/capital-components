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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M24 4h16v4H24zm-12 6v10h2v40h36V20h2V10H12zm36 48H16V22h32v36z"
  }), _react.default.createElement("path", {
    d: "M22 28h2v24h-2zm6 0h2v24h-2zm6 0h2v24h-2zm6 0h2v24h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;