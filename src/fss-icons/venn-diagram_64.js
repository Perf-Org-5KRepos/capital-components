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
    d: "M42.628 12.377c-3.809 0-7.388 1.039-10.389 3.001-3.001-1.847-6.58-3.001-10.389-3.001C11 12.377 2.227 21.15 2.227 32S11 51.623 21.85 51.623c3.809 0 7.388-1.039 10.389-3.001 3.001 1.847 6.58 3.001 10.389 3.001 10.85 0 19.623-8.773 19.623-19.623s-8.773-19.623-19.623-19.623zm-10.389 7.272c.693.577 1.385 1.27 1.962 1.962h-3.925a15.887 15.887 0 0 1 1.963-1.962zm-4.732 18.123h9.35c-.346.808-.693 1.616-1.154 2.309h-7.157c-.347-.693-.693-1.501-1.039-2.309zm-.693-9.235h10.735c.115.693.231 1.501.346 2.309H26.468c.115-.808.231-1.616.346-2.309zm-.231 4.617h11.428c0 .808-.115 1.616-.346 2.309H26.929c-.23-.693-.346-1.501-.346-2.309zm10.389-6.926h-9.35c.346-.808.693-1.616 1.154-2.309h7.157c.346.693.693 1.501 1.039 2.309zM21.85 48.16c-8.888 0-16.16-7.272-16.16-16.16s7.272-16.16 16.16-16.16c2.655 0 5.194.693 7.388 1.847-3.809 3.578-6.233 8.657-6.233 14.313s2.424 10.735 6.233 14.313a15.91 15.91 0 0 1-7.388 1.847zm10.389-3.809a15.742 15.742 0 0 1-1.962-1.962h3.925a15.818 15.818 0 0 1-1.963 1.962z"
  }));
};

var _default = SvgComponent;
exports.default = _default;