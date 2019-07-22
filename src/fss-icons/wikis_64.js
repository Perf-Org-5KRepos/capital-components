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
    d: "M32 4C16.535 4 4 16.535 4 32s12.535 28 28 28 28-12.535 28-28S47.465 4 32 4zm9.877 36.463L33.414 32l16.263-16.263c1.114 9.311-1.674 18.177-7.8 24.726zM22.123 23.537L30.586 32 14.323 48.263c-1.114-9.31 1.674-18.177 7.8-24.726zm1.41-1.418c5.552-5.186 12.905-8.036 20.83-8.036 1.291 0 2.591.102 3.887.254L32 30.586l-8.467-8.467zM32 33.414l8.467 8.467c-5.553 5.187-12.905 8.037-20.828 8.037-1.292 0-2.592-.102-3.889-.254L32 33.414zm17.051-21.018a35.54 35.54 0 0 0-4.688-.313c-8.46 0-16.315 3.059-22.244 8.622l-7.771-7.771C18.988 8.635 25.191 6 32 6c6.519 0 12.482 2.418 17.051 6.396zM6 32c0-6.809 2.635-13.012 6.934-17.652l7.776 7.776c-6.591 7.037-9.636 16.938-8.3 26.942C8.424 44.496 6 38.527 6 32zm8.949 19.604c1.561.208 3.132.314 4.689.314 8.458 0 16.312-3.06 22.242-8.623l7.771 7.771C45.012 55.365 38.809 58 32 58c-6.52 0-12.482-2.418-17.051-6.396zm36.117-1.952l-7.776-7.776c6.591-7.037 9.636-16.938 8.3-26.942C55.576 19.504 58 25.473 58 32c0 6.809-2.635 13.012-6.934 17.652z"
  }));
};

var _default = SvgComponent;
exports.default = _default;