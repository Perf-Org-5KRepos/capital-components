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
    d: "M35.998 111.999h40v12h-40zm-9.699-36.301c8.199 8.199 18.949 12.299 29.699 12.299 10.128 0 20.254-3.643 28.25-10.92l.035.035 2.828-2.828-.035-.035c15.002-16.481 14.545-42.023-1.379-57.949C77.496 8.101 66.746 4.001 55.996 4.001c-10.127 0-20.252 3.642-28.248 10.92l-.035-.035-2.828 2.828.036.035C9.918 34.231 10.375 59.774 26.299 75.698zM55.996 8.001c10.152 0 19.695 3.951 26.873 11.127 14.341 14.344 14.799 37.392 1.376 52.29L30.579 17.752c6.987-6.302 15.937-9.751 25.417-9.751zm25.421 66.245c-6.987 6.302-15.937 9.751-25.419 9.751-10.152 0-19.695-3.951-26.871-11.127-14.342-14.342-14.799-37.39-1.376-52.29l53.666 53.666z"
  }), _react.default.createElement("path", {
    d: "M97.01 4.987l-5.656 5.656c9.443 9.442 14.645 21.998 14.645 35.355s-5.201 25.913-14.646 35.355c-9.439 9.443-21.995 14.645-35.354 14.645s-25.915-5.201-35.354-14.645l-5.658 5.656C25.938 97.964 40.504 103.997 56 103.997s30.062-6.033 41.012-16.988C107.967 76.057 114 61.491 114 45.997s-6.035-30.058-16.99-41.01z"
  }));
};

var _default = SvgComponent;
exports.default = _default;