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
    d: "M54.969 9.03C50.627 4.687 44.627 2 38 2S25.373 4.687 21.031 9.03A23.922 23.922 0 0 0 14 26c0 2.086.268 4.109.768 6.039-.255-.017-.509-.039-.768-.039a11.959 11.959 0 0 0-8.484 3.516A11.959 11.959 0 0 0 2 44c0 3.508 1.344 6.686 3.516 8.984L14 62v-6c3.312 0 6.312-1.344 8.484-3.516a11.975 11.975 0 0 0 3.222-5.873A23.873 23.873 0 0 0 38 50v12l16.969-18.032C59.312 39.37 62 33.017 62 26a23.926 23.926 0 0 0-7.031-16.97zm-1.457 33.567L40 56.956V48h-2a21.827 21.827 0 0 1-12.021-3.578c.004-.141.021-.279.021-.422 0-3.313-1.344-6.313-3.516-8.484a11.985 11.985 0 0 0-5.549-3.139A22.087 22.087 0 0 1 16 26c0-5.875 2.289-11.4 6.445-15.556C26.6 6.289 32.123 4 38 4s11.4 2.289 15.555 6.445A21.853 21.853 0 0 1 60 26c0 6.274-2.303 12.168-6.488 16.597z"
  }), _react.default.createElement("circle", {
    cx: 38,
    cy: 26,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 48,
    cy: 26,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 28,
    cy: 26,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;