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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M6.572 18.925A10.467 10.467 0 0 0 13.997 22c2.531 0 5.055-.922 7.054-2.74l.018.018.707-.707-.018-.019c3.748-4.119 3.645-10.497-.336-14.477A10.469 10.469 0 0 0 13.997 1c-2.531 0-5.055.922-7.054 2.74l-.018-.018-.707.707.018.019c-3.748 4.119-3.645 10.496.336 14.477zM13.997 3c2.271 0 4.405.885 6.011 2.489 3.194 3.195 3.3 8.316.335 11.649L8.357 5.152A8.437 8.437 0 0 1 13.997 3zm5.639 14.848A8.434 8.434 0 0 1 13.997 20a8.451 8.451 0 0 1-6.011-2.489c-3.194-3.194-3.3-8.315-.335-11.649l11.985 11.986z"
  }), _react.default.createElement("path", {
    d: "M24.25 1.247l-1.414 1.414c2.361 2.36 3.661 5.499 3.661 8.839s-1.3 6.479-3.661 8.839c-2.361 2.36-5.5 3.661-8.839 3.661s-6.478-1.301-8.839-3.661l-1.414 1.414C6.481 24.492 10.123 26 13.997 26s7.516-1.508 10.253-4.247c2.738-2.738 4.247-6.38 4.247-10.253S26.988 3.985 24.25 1.247zM8.997 28h10v3h-10z"
  }));
};

var _default = SvgComponent;
exports.default = _default;