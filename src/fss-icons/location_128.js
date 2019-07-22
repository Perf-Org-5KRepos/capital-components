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
    d: "M97.937 18.06C89.254 9.373 77.254 4 64 4 50.746 4 38.746 9.373 30.062 18.06 21.375 26.746 16 38.746 16 52c0 14.033 5.375 26.74 14.062 35.936L64 124l33.937-36.064C106.625 78.74 112 66.033 112 52c0-13.254-5.375-25.254-14.063-33.94zm-2.913 67.134L64 118.163 32.97 85.188C24.606 76.336 20 64.549 20 52c0-11.751 4.578-22.8 12.892-31.112C41.199 12.577 52.247 8 64 8s22.801 4.577 31.109 12.889C103.422 29.2 108 40.249 108 52c0 12.549-4.606 24.336-12.976 33.194z"
  }), _react.default.createElement("circle", {
    cx: 64,
    cy: 52,
    r: 16
  }));
};

var _default = SvgComponent;
exports.default = _default;