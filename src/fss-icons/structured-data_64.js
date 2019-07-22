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
    d: "M55.223 43.897V20.118c3.925-1.039 6.926-4.617 6.926-8.888 0-5.079-4.155-9.234-9.234-9.234-4.271 0-7.849 2.886-8.888 6.926h-23.78c-1.039-3.925-4.617-6.926-8.888-6.926-5.079 0-9.234 4.155-9.234 9.234 0 4.271 3.001 7.849 6.926 8.888v23.663c-3.925 1.039-6.926 4.617-6.926 8.888 0 5.079 4.155 9.234 9.234 9.234 4.733 0 8.542-3.578 9.119-8.08H43.68c.577 4.502 4.502 8.08 9.119 8.08 5.079 0 9.234-4.155 9.234-9.234.116-4.155-2.886-7.733-6.81-8.772zm-36.245 3.694l7.965-7.965a8.945 8.945 0 0 0 5.194 1.616 8.942 8.942 0 0 0 5.194-1.616l7.965 7.965a8.163 8.163 0 0 0-1.27 2.886H20.247c-.23-1.039-.692-1.963-1.269-2.886zm-2.424-28.742l7.965 7.965a8.945 8.945 0 0 0-1.616 5.194c0 1.962.577 3.694 1.616 5.194l-7.965 7.965c-1.154-.808-2.539-1.385-4.04-1.501V20.349c1.5-.115 2.885-.692 4.04-1.5zm28.742-2.424l-7.965 7.965a8.945 8.945 0 0 0-5.194-1.616 8.942 8.942 0 0 0-5.194 1.616l-7.965-7.965c.808-1.154 1.385-2.539 1.501-4.04H43.68a9.628 9.628 0 0 0 1.616 4.04zm2.424 28.742l-7.965-7.965a8.945 8.945 0 0 0 1.616-5.194 8.942 8.942 0 0 0-1.616-5.194l7.965-7.965c1.154.808 2.539 1.385 4.04 1.501v23.202a9.603 9.603 0 0 0-4.04 1.615zm5.194-39.708c3.001 0 5.772 2.77 5.772 5.772s-2.77 5.772-5.772 5.772c-3.001 0-5.772-2.77-5.772-5.772s2.771-5.772 5.772-5.772zM5.588 11.23c0-3.001 2.77-5.772 5.772-5.772s5.772 2.77 5.772 5.772-2.77 5.772-5.772 5.772-5.772-2.771-5.772-5.772zm5.771 47.327c-3.001 0-5.772-2.77-5.772-5.772 0-3.001 2.77-5.772 5.772-5.772s5.772 2.77 5.772 5.772c0 3.001-2.771 5.772-5.772 5.772zm41.555 0c-3.001 0-5.772-2.77-5.772-5.772 0-3.001 2.77-5.772 5.772-5.772 3.001 0 5.772 2.77 5.772 5.772 0 3.001-2.771 5.772-5.772 5.772z"
  }));
};

var _default = SvgComponent;
exports.default = _default;