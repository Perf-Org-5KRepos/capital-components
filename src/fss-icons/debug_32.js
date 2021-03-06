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
    d: "M31 15h-2.051C28.462 8.621 23.379 3.538 17 3.051V1h-2v2.051C8.621 3.538 3.538 8.621 3.051 15H1v2h2.051C3.538 23.379 8.621 28.462 15 28.949V31h2v-2.051c6.379-.487 11.462-5.57 11.949-11.949H31v-2zm-4.051 0h-3.018A7.995 7.995 0 0 0 17 8.069V5.051c5.268.477 9.472 4.681 9.949 9.949zm-4.029 2A7.004 7.004 0 0 1 17 22.92V19h-2v3.92A7.004 7.004 0 0 1 9.08 17H13v-2H9.08A7.004 7.004 0 0 1 15 9.08V13h2V9.08A7.004 7.004 0 0 1 22.92 15H19v2h3.92zM15 5.051v3.018A7.995 7.995 0 0 0 8.069 15H5.051C5.528 9.732 9.732 5.528 15 5.051zM5.051 17h3.018A7.995 7.995 0 0 0 15 23.931v3.018C9.732 26.472 5.528 22.268 5.051 17zM17 26.949v-3.018A7.995 7.995 0 0 0 23.931 17h3.018c-.477 5.268-4.681 9.472-9.949 9.949z"
  }));
};

var _default = SvgComponent;
exports.default = _default;