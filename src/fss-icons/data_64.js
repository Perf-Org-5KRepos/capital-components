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
    d: "M2 18h4v28H2zm26.121 4.709a9.331 9.331 0 0 0-3.059-3.384C23.754 18.442 22.066 18 20.002 18c-2.068 0-3.756.442-5.063 1.325a9.305 9.305 0 0 0-3.059 3.384c-.731 1.374-1.227 2.881-1.488 4.521A30.392 30.392 0 0 0 10 32c0 1.537.131 3.128.393 4.769.262 1.642.758 3.148 1.488 4.52a9.284 9.284 0 0 0 3.059 3.385c1.306.884 2.994 1.326 5.062 1.326 2.064 0 3.752-.442 5.06-1.327a9.32 9.32 0 0 0 3.059-3.385c.729-1.371 1.225-2.878 1.486-4.52.264-1.64.393-3.231.393-4.768s-.129-3.128-.393-4.771c-.261-1.639-.757-3.146-1.486-4.52zm-3.08 13.292c-.166 1.255-.449 2.352-.848 3.288-.398.936-.941 1.68-1.633 2.23-.687.552-1.541.827-2.558.827-1.049 0-1.912-.275-2.584-.827-.676-.551-1.215-1.295-1.613-2.23-.4-.937-.682-2.033-.846-3.288A30.594 30.594 0 0 1 14.711 32c0-1.41.082-2.737.248-3.981.164-1.243.445-2.339.846-3.289.398-.947.938-1.698 1.613-2.249.672-.552 1.535-.827 2.584-.827 1.017 0 1.871.275 2.558.827.692.551 1.234 1.302 1.633 2.249.398.95.682 2.046.848 3.289A30.14 30.14 0 0 1 25.289 32c0 1.41-.082 2.744-.248 4.001zm36.566-8.772c-.262-1.64-.758-3.146-1.486-4.521a9.331 9.331 0 0 0-3.059-3.384C55.754 18.442 54.066 18 52.002 18c-2.068 0-3.756.442-5.063 1.325a9.305 9.305 0 0 0-3.059 3.384c-.731 1.374-1.227 2.881-1.488 4.521A30.392 30.392 0 0 0 42 32c0 1.537.131 3.128.393 4.769.262 1.642.758 3.148 1.488 4.52a9.284 9.284 0 0 0 3.059 3.385c1.306.884 2.994 1.326 5.062 1.326 2.064 0 3.752-.442 5.06-1.327a9.32 9.32 0 0 0 3.059-3.385c.729-1.371 1.225-2.878 1.486-4.52.264-1.64.393-3.231.393-4.768s-.129-3.128-.393-4.771zm-4.566 8.772c-.166 1.255-.449 2.352-.848 3.288-.398.936-.941 1.68-1.633 2.23-.687.552-1.541.827-2.558.827-1.049 0-1.912-.275-2.584-.827-.676-.551-1.215-1.295-1.613-2.23-.4-.937-.682-2.033-.846-3.288A30.594 30.594 0 0 1 46.711 32c0-1.41.082-2.737.248-3.981.164-1.243.445-2.339.846-3.289.398-.947.938-1.698 1.613-2.249.672-.552 1.535-.827 2.584-.827 1.017 0 1.871.275 2.558.827.692.551 1.234 1.302 1.633 2.249.398.95.682 2.046.848 3.289A30.14 30.14 0 0 1 57.289 32c0 1.41-.082 2.744-.248 4.001zM34 18h4v28h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;