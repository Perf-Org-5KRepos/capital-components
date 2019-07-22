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
    d: "M49.989 33.976v-12.01H3.952v84.067h120.095V33.976H49.989zm68.054 66.053H9.957V45.986h108.086v54.043zM31.975 90.021H25.97V55.994h6.005v34.027zm42.033 0h-6.005V55.994h6.005v34.027zm-24.019 0c6.605 0 12.01-4.203 12.01-17.214 0-12.81-5.604-17.014-12.01-17.014s-12.01 4.203-12.01 17.014c0 13.211 5.405 17.214 12.01 17.214zm0-28.623c5.404 0 5.404 8.006 5.404 11.409 0 3.603 0 11.809-5.404 11.809s-5.404-8.006-5.404-11.809c0-3.403 0-11.409 5.404-11.409zm42.033 28.623c6.605 0 12.01-4.203 12.01-17.214 0-12.81-5.604-16.813-12.01-16.813-6.405 0-12.01 4.203-12.01 16.813.001 13.01 5.605 17.214 12.01 17.214zm0-28.623c5.404 0 5.404 8.006 5.404 11.409 0 3.603 0 11.609-5.404 11.609s-5.404-8.006-5.404-11.609c.2-3.403 0-11.409 5.404-11.409z"
  }));
};

var _default = SvgComponent;
exports.default = _default;