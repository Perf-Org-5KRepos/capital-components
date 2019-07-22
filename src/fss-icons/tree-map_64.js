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
    d: "M38.139 15.994H8.127V30h30.012V15.994zm-3.001 11.004h-24.01v-8.003h24.01v8.003zm21.008 3.001H41.14V15.994h15.006v14.005zM26.134 48.006h30.012V33H26.134v15.006zm3.002-12.004h24.01v9.004h-24.01v-9.004zm-6.003 12.004H8.127V33h15.006v15.006zM2.125 9.991v44.018h60.024V9.991H2.125zm57.022 41.017H5.126V12.992h54.021v38.016z"
  }));
};

var _default = SvgComponent;
exports.default = _default;