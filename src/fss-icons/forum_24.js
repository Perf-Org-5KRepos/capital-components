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
    d: "M20.363 3.578C18.735 1.985 16.485 1 14 1s-4.735.985-6.363 2.578C6.008 5.17 5 7.57 5 10c0 .372.031.73.077 1.082a4.925 4.925 0 0 0-2.639 1.324C1.55 13.274 1 14.584 1 15.909c0 1.403.55 2.565 1.438 3.485L6 23v-2.4c1.356 0 2.492-.537 3.38-1.406.369-.361.662-.77.899-1.208C11.414 18.597 12.671 19 14 19v4l6.363-6.611C21.992 14.703 23 12.572 23 10c0-2.43-1.008-4.83-2.637-6.422zm-1.441 11.424L16 18.038V17h-2a7.283 7.283 0 0 1-3.218-.746c.009-.116.036-.224.036-.345 0-1.325-.55-2.635-1.438-3.503a4.93 4.93 0 0 0-2.284-1.249A7.598 7.598 0 0 1 7 10c0-1.852.78-3.765 2.035-4.992C10.359 3.713 12.122 3 14 3s3.641.713 4.965 2.008C20.22 6.235 21 8.148 21 10c0 1.892-.698 3.574-2.078 5.002z"
  }));
};

var _default = SvgComponent;
exports.default = _default;