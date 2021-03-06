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
    d: "M115.799 12.201C110.732 7.135 103.732 4 96 4c-7.732 0-14.732 3.135-19.799 8.201l-12 12C59.135 29.268 56 36.268 56 44c0 4.822 1.142 9.438 3.229 13.458l-1.772 1.771C53.437 57.142 48.822 56 44 56c-7.732 0-14.732 3.135-19.799 8.201l-12 12C7.135 81.268 4 88.268 4 96s3.135 14.732 8.201 19.799S24.268 124 32 124c7.732 0 14.732-3.135 19.799-8.201l12-12C68.865 98.732 72 91.732 72 84c0-4.822-1.142-9.438-3.229-13.457l1.771-1.771C74.562 70.858 79.178 72 84 72c7.732 0 14.732-3.135 19.799-8.201l12-12C120.865 46.732 124 39.732 124 32s-3.135-14.732-8.201-19.799zM64 84a19.872 19.872 0 0 1-5.858 14.142l-12 12A19.872 19.872 0 0 1 32 116a19.872 19.872 0 0 1-14.142-5.858C14.081 106.364 12 101.342 12 96s2.081-10.364 5.858-14.142l12-12A19.872 19.872 0 0 1 44 64c2.571 0 5.071.464 7.38 1.306L34.343 82.343l11.313 11.313L62.694 76.62A21.565 21.565 0 0 1 64 84zm46.142-37.858l-12 12A19.872 19.872 0 0 1 84 64c-2.571 0-5.071-.464-7.38-1.306l17.037-17.037-11.314-11.314L65.306 51.38A21.565 21.565 0 0 1 64 44a19.872 19.872 0 0 1 5.858-14.142l12-12A19.872 19.872 0 0 1 96 12a19.872 19.872 0 0 1 14.142 5.858C113.919 21.636 116 26.658 116 32s-2.081 10.364-5.858 14.142z"
  }));
};

var _default = SvgComponent;
exports.default = _default;