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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M21.067 6.315c-1.88 0-3.646.513-5.128 1.481-1.481-.912-3.247-1.481-5.128-1.481-5.355 0-9.685 4.33-9.685 9.685s4.33 9.685 9.685 9.685c1.88 0 3.646-.513 5.128-1.481 1.481.912 3.247 1.481 5.128 1.481 5.355 0 9.685-4.33 9.685-9.685s-4.33-9.685-9.685-9.685zm-5.128 3.589c.342.285.684.627.969.969h-1.937c.284-.342.626-.684.968-.969zm-2.336 8.945h4.615c-.171.399-.342.798-.57 1.139h-3.532c-.171-.342-.342-.741-.513-1.139zm-.342-4.558h5.298c.057.342.114.741.171 1.139h-5.64c.057-.399.114-.797.171-1.139zm-.114 2.279h5.64c0 .399-.057.798-.171 1.139h-5.298a3.669 3.669 0 0 1-.171-1.139zm5.128-3.419H13.66c.171-.399.342-.798.57-1.139h3.532c.171.342.342.741.513 1.139zm-7.463 10.825c-4.387 0-7.976-3.589-7.976-7.976s3.589-7.976 7.976-7.976c1.31 0 2.564.342 3.646.912-1.88 1.766-3.077 4.273-3.077 7.065s1.196 5.298 3.077 7.065a7.878 7.878 0 0 1-3.646.91zm5.127-1.88a7.78 7.78 0 0 1-.969-.969h1.937a7.705 7.705 0 0 1-.968.969z"
  }));
};

var _default = SvgComponent;
exports.default = _default;