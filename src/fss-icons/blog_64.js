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
    d: "M30 26h-4l2-8h-4l-2 8v8h8zm12 0h-4l2-8h-4l-2 8v8h8z"
  }), _react.default.createElement("path", {
    d: "M6 6v40l12 12h40V6H6zm50 50H20V44H8V8h48v48z"
  }));
};

var _default = SvgComponent;
exports.default = _default;