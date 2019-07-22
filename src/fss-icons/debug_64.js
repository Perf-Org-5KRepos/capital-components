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
    d: "M62 30h-4.084C56.944 17.239 46.762 7.056 34 6.084V2h-4v4.084C17.238 7.056 7.056 17.239 6.084 30H2v4h4.084C7.056 46.761 17.238 56.944 30 57.916V62h4v-4.084C46.762 56.944 56.944 46.761 57.916 34H62v-4zm-8.095 0h-6.043C46.957 22.768 41.233 17.043 34 16.138v-6.044C44.537 11.05 52.95 19.463 53.905 30zm-8.065 4c-.881 6.118-5.722 10.959-11.84 11.84V38h-4v7.84c-6.118-.881-10.959-5.722-11.84-11.84H26v-4h-7.84c.881-6.118 5.722-10.959 11.84-11.84V26h4v-7.84c6.118.881 10.959 5.722 11.84 11.84H38v4h7.84zM30 10.095v6.044c-7.233.904-12.957 6.629-13.862 13.861h-6.044C11.05 19.463 19.463 11.05 30 10.095zM10.095 34h6.044c.904 7.232 6.628 12.957 13.861 13.862v6.043C19.463 52.95 11.05 44.537 10.095 34zM34 53.905v-6.043c7.233-.905 12.957-6.63 13.862-13.862h6.043C52.95 44.537 44.537 52.95 34 53.905z"
  }));
};

var _default = SvgComponent;
exports.default = _default;