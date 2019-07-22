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
    d: "M23.687 27h16.627c-1.793-2.411-4.846-4-8.313-4s-6.522 1.589-8.314 4zm-1.622 4A7.873 7.873 0 0 0 22 32v3h20v-3c0-.338-.023-.672-.065-1h-19.87zM22 42c0 .338.023.672.065 1h19.869c.043-.328.066-.662.066-1v-3H22v3zm10 9c3.468 0 6.52-1.589 8.313-4H23.687c1.792 2.411 4.845 4 8.313 4zM6.461 29.099A7.227 7.227 0 0 0 2 35.773a7.213 7.213 0 0 0 .551 2.767A7.223 7.223 0 0 0 9.212 43h.03c.936 0 1.871-.186 2.751-.551a7.196 7.196 0 0 0 3.91-3.909L22 23 6.461 29.099zm7.594 8.676a5.217 5.217 0 0 1-2.829 2.826A5.18 5.18 0 0 1 9.212 41c-.682 0-1.35-.134-1.982-.395A5.235 5.235 0 0 1 4 35.771a5.228 5.228 0 0 1 1.53-3.693 5.173 5.173 0 0 1 1.661-1.117l11.272-4.425-4.408 11.239zm47.394-4.767a7.23 7.23 0 0 0-1.565-2.344 7.232 7.232 0 0 0-2.345-1.566L42 23l6.098 15.54A7.222 7.222 0 0 0 54.759 43h.03a7.215 7.215 0 0 0 6.661-4.46 7.209 7.209 0 0 0-.001-5.532zm-1.848 4.767a5.186 5.186 0 0 1-1.132 1.696 5.26 5.26 0 0 1-1.692 1.132 5.235 5.235 0 0 1-6.817-2.793l-4.423-11.274 11.236 4.409a5.23 5.23 0 0 1 2.828 2.827c.266.642.4 1.313.399 2.003 0 .687-.133 1.36-.399 2zM27 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6c1.103 0 2 .896 2 2s-.897 2-2 2-2-.896-2-2 .897-2 2-2zm10 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6c1.103 0 2 .896 2 2s-.897 2-2 2-2-.896-2-2 .897-2 2-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;