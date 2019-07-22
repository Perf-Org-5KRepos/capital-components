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
    d: "M36 2H12v60h40V18L36 2zm14 58H14V4h20v16h16v40z"
  }), _react.default.createElement("path", {
    d: "M20 26h24v2H20zm0 4h24v2H20zm0 4h12v2H20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;