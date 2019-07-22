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
    d: "M84.777 24.754c-7.618 0-14.775 2.078-20.777 6.002-6.002-3.694-13.159-6.002-20.777-6.002C21.522 24.754 3.976 42.299 3.976 64s17.545 39.246 39.246 39.246c7.618 0 14.775-2.078 20.777-6.002 6.002 3.694 13.159 6.002 20.777 6.002 21.701 0 39.246-17.545 39.246-39.246s-17.544-39.246-39.245-39.246zM64 39.298a31.5 31.5 0 0 1 3.925 3.925h-7.849A31.424 31.424 0 0 1 64 39.298zm-9.465 36.245h18.7c-.693 1.616-1.385 3.232-2.309 4.617H56.612c-.692-1.385-1.385-3.001-2.077-4.617zM53.15 57.074h21.47c.231 1.385.462 3.001.693 4.617H52.457c.231-1.616.462-3.232.693-4.617zm-.462 9.235h22.855c0 1.616-.231 3.232-.693 4.617H53.38c-.461-1.385-.692-3.001-.692-4.617zm20.777-13.852h-18.7c.693-1.616 1.385-3.232 2.309-4.617h14.313c.693 1.385 1.386 3.001 2.078 4.617zM43.223 96.321c-17.776 0-32.321-14.544-32.321-32.321s14.544-32.321 32.321-32.321c5.31 0 10.389 1.385 14.775 3.694C50.379 42.53 45.531 52.688 45.531 64s4.848 21.47 12.466 28.627c-4.386 2.308-9.465 3.694-14.774 3.694zM64 88.702a31.5 31.5 0 0 1-3.925-3.925h7.849A31.424 31.424 0 0 1 64 88.702z"
  }));
};

var _default = SvgComponent;
exports.default = _default;