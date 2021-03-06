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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M12.5 4.5a3.485 3.485 0 0 0-2.99 1.706 2.728 2.728 0 0 0-3.02 0A3.485 3.485 0 0 0 3.5 4.5 3.5 3.5 0 1 0 7 8c0-.063-.015-.121-.018-.184.224-.333.586-.566 1.018-.566.431 0 .794.233 1.018.566C9.015 7.879 9 7.937 9 8a3.5 3.5 0 1 0 3.5-3.5zM4.959 9.359a2.193 2.193 0 0 1-.166.154c-.035.03-.069.06-.106.087a1.815 1.815 0 0 1-.32.194 1.97 1.97 0 0 1-.148.067 1.81 1.81 0 0 1-.22.068c-.042.011-.083.025-.126.033A1.99 1.99 0 0 1 3.5 10c-1.103 0-2-.897-2-2s.897-2 2-2c.128 0 .253.015.375.038.043.008.083.022.125.033.076.02.151.041.223.069.05.02.097.043.145.066a1.932 1.932 0 0 1 .439.292c.053.047.105.093.153.145.023.025.043.052.064.078.194.231.338.503.412.805.038.152.064.31.064.474 0 .509-.197.968-.511 1.322l-.03.037zM12.5 10a1.99 1.99 0 0 1-.373-.038c-.043-.008-.084-.022-.126-.033a2.248 2.248 0 0 1-.22-.068 1.97 1.97 0 0 1-.309-.155 2.164 2.164 0 0 1-.158-.105c-.037-.028-.071-.058-.106-.088a2.017 2.017 0 0 1-.166-.154l-.031-.038A1.982 1.982 0 0 1 10.5 8c0-.164.026-.322.063-.475a1.98 1.98 0 0 1 .412-.804c.022-.026.042-.054.065-.079.048-.051.1-.098.153-.144.039-.034.078-.068.12-.099a1.696 1.696 0 0 1 .319-.193c.048-.023.095-.047.145-.066A2.06 2.06 0 0 1 12 6.071c.042-.011.082-.025.125-.033A2.02 2.02 0 0 1 12.5 6c1.103 0 2 .897 2 2s-.897 2-2 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;