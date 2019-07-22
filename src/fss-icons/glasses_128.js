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
    d: "M124 61h-4.339C117.754 49.65 107.88 41 96 41a23.888 23.888 0 0 0-14.451 4.844l-.213-.18C76.545 41.367 70.389 39 64 39a25.898 25.898 0 0 0-17.293 6.627l-.257.217A23.885 23.885 0 0 0 32 41c-11.88 0-21.754 8.65-23.661 20H4v8h4.339C10.246 80.35 20.12 89 32 89c13.242 0 24-10.746 24-24 0-6.372-2.491-12.16-6.545-16.457C53.493 44.971 58.65 43 64 43c5.332 0 10.471 1.959 14.543 5.545C74.49 52.842 72 58.629 72 65c0 13.254 10.758 24 24 24 11.88 0 21.754-8.65 23.661-20H124v-8zM32 81c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zm64 0c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;