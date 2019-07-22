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
    d: "M21.432 2.568A5.339 5.339 0 0 0 17.646 1c-1.478 0-2.816.6-3.784 1.568l-2.294 2.294A5.34 5.34 0 0 0 10 8.647c0 .567.106 1.109.263 1.629A5.29 5.29 0 0 0 8.646 10c-1.478 0-2.816.6-3.784 1.568l-2.294 2.294A5.34 5.34 0 0 0 1 17.647c0 1.478.561 2.855 1.529 3.824C3.498 22.439 4.875 23 6.353 23c1.478 0 2.816-.6 3.784-1.568l2.294-2.294A5.334 5.334 0 0 0 14 15.354c0-.567-.112-1.103-.275-1.616a5.65 5.65 0 0 0 1.629.262c1.478 0 2.816-.6 3.784-1.568l2.294-2.294A5.337 5.337 0 0 0 23 6.354c0-1.479-.6-2.818-1.568-3.786zM11.018 17.724l-2.294 2.295A3.338 3.338 0 0 1 6.353 21c-.931 0-1.81-.344-2.409-.943-.6-.6-.944-1.479-.944-2.41 0-.895.349-1.737.982-2.37l2.295-2.294A3.325 3.325 0 0 1 8.646 12c.55 0 1.073.146 1.546.394l-2.899 2.899 1.414 1.414 2.899-2.899c.248.473.394.995.394 1.546 0 .895-.349 1.736-.982 2.37zm9-9l-2.295 2.294a3.33 3.33 0 0 1-2.369.982 3.585 3.585 0 0 1-1.57-.37l2.923-2.923-1.414-1.414-2.923 2.923A3.577 3.577 0 0 1 12 8.647c0-.895.349-1.737.982-2.37l2.294-2.294A3.33 3.33 0 0 1 17.646 3c.896 0 1.738.349 2.372.982.633.633.982 1.476.982 2.372 0 .895-.349 1.736-.982 2.37z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;