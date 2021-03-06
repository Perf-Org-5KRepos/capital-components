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
    d: "M68.164 38.337h21.69c1.074 8.375 8.375 15.033 16.966 15.033 9.449 0 17.18-7.731 17.18-17.18s-7.731-17.18-17.18-17.18c-7.946 0-14.603 5.584-16.536 12.885h-22.12C66.016 16.217 52.487 3.976 36.165 3.976c-17.825 0-32.213 14.389-32.213 32.213 0 16.966 13.315 30.925 30.066 31.998v22.12c-7.302 1.933-12.885 8.59-12.885 16.536 0 9.449 7.731 17.18 17.18 17.18s17.18-7.731 17.18-17.18c0-8.805-6.657-15.892-15.033-16.966v-21.69c6.013-.859 11.597-3.221 16.107-7.087l25.556 25.556c-1.933 2.792-3.007 6.013-3.007 9.664 0 9.449 7.731 17.18 17.18 17.18s17.18-7.731 17.18-17.18-7.731-17.18-17.18-17.18c-3.651 0-6.872 1.074-9.664 3.007L61.077 56.591c4.08-4.939 6.657-11.382 7.087-18.254zm-57.769-2.148c0-14.174 11.597-25.771 25.771-25.771s25.771 11.597 25.771 25.771S50.339 61.96 36.165 61.96s-25.77-11.597-25.77-25.771z"
  }));
};

var _default = SvgComponent;
exports.default = _default;