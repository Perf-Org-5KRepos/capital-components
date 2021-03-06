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
    d: "M11.843 13.5h8.313c-.896-1.205-2.423-2-4.157-2s-3.259.795-4.156 2zm-.81 2A3.936 3.936 0 0 0 11 16v1.5h10V16c0-.169-.012-.336-.033-.5h-9.934zM11 21c0 .169.012.336.033.5h9.935A4.13 4.13 0 0 0 21 21v-1.5H11V21zm5 4.5c1.734 0 3.26-.795 4.157-2h-8.313c.896 1.205 2.422 2 4.156 2zM3.23 14.549a3.609 3.609 0 0 0-1.955 4.721 3.609 3.609 0 0 0 3.331 2.23h.014c.468 0 .936-.093 1.375-.275A3.608 3.608 0 0 0 7.95 19.27L11 11.5l-7.77 3.049zm3.797 4.338A2.605 2.605 0 0 1 4.606 20.5a2.615 2.615 0 0 1-1.01-5.02l5.636-2.213-2.205 5.62zm23.698-2.383a3.609 3.609 0 0 0-1.955-1.955L21 11.5l3.049 7.77a3.608 3.608 0 0 0 3.33 2.23h.014a3.616 3.616 0 0 0 2.548-1.057c.347-.347.606-.745.783-1.173a3.597 3.597 0 0 0 .001-2.766zm-.924 2.384a2.616 2.616 0 0 1-1.412 1.414 2.587 2.587 0 0 1-1.009.199 2.615 2.615 0 0 1-2.401-1.595l-2.211-5.637 5.618 2.205a2.59 2.59 0 0 1 1.415 1.414 2.618 2.618 0 0 1 0 2zM13.5 10.5a2 2 0 1 0 .001-3.999A2 2 0 0 0 13.5 10.5zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm5 3a2 2 0 1 0 .001-3.999A2 2 0 0 0 18.5 10.5zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;