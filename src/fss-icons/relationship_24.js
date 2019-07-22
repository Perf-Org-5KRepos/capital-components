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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M21 8h-6l-3 4-3-4H3a1 1 0 0 0-1 1v7l2 2v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V12l3 4 3-4v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4l2-2V9a1 1 0 0 0-1-1z"
  }), _react.default.createElement("circle", {
    cx: 7,
    cy: 4,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 17,
    cy: 4,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;