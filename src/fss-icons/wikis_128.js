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
    d: "M64 8C33.07 8 8 33.07 8 64s25.07 56 56 56 56-25.07 56-56S94.93 8 64 8zm19.754 72.926L66.828 64l32.526-32.526c2.229 18.62-3.348 36.354-15.6 49.452zM44.246 47.074L61.172 64 28.646 96.526c-2.229-18.62 3.348-36.354 15.6-49.452zm2.82-2.835C58.17 33.867 72.877 28.165 88.728 28.165c2.595 0 5.21.157 7.815.464L64 61.172 47.066 44.239zM64 66.828l16.934 16.934C69.829 94.135 55.125 99.836 39.276 99.836a66.69 66.69 0 0 1-7.819-.465L64 66.828zm34.102-42.034a70.85 70.85 0 0 0-9.374-.629c-16.921 0-32.631 6.118-44.489 17.245L28.695 25.867C37.976 17.27 50.381 12 64 12c13.04 0 24.965 4.836 34.102 12.794zM12 64c0-13.618 5.269-26.024 13.867-35.305l15.531 15.531c-13.177 14.069-19.26 33.881-16.596 53.885C16.839 88.973 12 77.044 12 64zm17.898 39.207c3.121.416 6.263.629 9.378.629h.001c16.916 0 32.626-6.119 44.484-17.246l15.543 15.543C90.024 110.73 77.619 116 64 116c-13.04 0-24.964-4.836-34.102-12.793zm72.235-3.902L86.602 83.773c13.178-14.068 19.261-33.881 16.597-53.885C111.161 39.027 116 50.956 116 64c0 13.618-5.27 26.024-13.867 35.305z"
  }));
};

var _default = SvgComponent;
exports.default = _default;