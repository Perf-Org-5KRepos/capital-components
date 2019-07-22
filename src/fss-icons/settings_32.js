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
    d: "M30.366 5.876l-4.245 4.246c-.586.585-1.353.878-2.121.878s-1.535-.293-2.121-.879a3 3 0 0 1-.001-4.243l4.245-4.245A8 8 0 0 0 15 9c0 .914.161 1.789.443 2.606L2.025 25.025a3.5 3.5 0 1 0 4.95 4.95l13.418-13.418A7.98 7.98 0 0 0 23 17a8 8 0 0 0 7.366-11.124zM23 15a5.968 5.968 0 0 1-1.954-.334l-1.183-.409-.885.885L5.56 28.56c-.283.284-.66.44-1.06.44s-.777-.156-1.061-.44A1.49 1.49 0 0 1 3 27.5c0-.401.156-.777.439-1.061l13.418-13.418.885-.884-.408-1.182A5.982 5.982 0 0 1 17 9a6.009 6.009 0 0 1 4.81-5.881l-1.347 1.346a5.007 5.007 0 0 0 .001 7.07A4.969 4.969 0 0 0 24 13c1.335 0 2.591-.52 3.535-1.465l1.347-1.347A6.011 6.011 0 0 1 23 15z"
  }), _react.default.createElement("circle", {
    cx: 4.5,
    cy: 27.5,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;