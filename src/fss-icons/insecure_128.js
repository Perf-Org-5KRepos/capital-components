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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M77.171 61.171L64 74.343 50.829 61.171l-5.658 5.658L58.343 80 45.171 93.171l5.658 5.658L64 85.657l13.171 13.172 5.658-5.658L69.657 80l13.172-13.171z"
  }), _react.default.createElement("path", {
    d: "M64 36a43.777 43.777 0 0 0-24 7.132V36c0-13.234 10.767-24 24-24 6.617 0 12.617 2.691 16.962 7.038l5.665-5.665C80.837 7.582 72.837 4 64 4 46.326 4 32 18.326 32 36v13.822C24.566 57.702 20 68.316 20 80c0 24.295 19.705 44 44 44 24.303 0 44-19.705 44-44S88.303 36 64 36zm0 84c-22.09 0-40-17.91-40-40s17.91-40 40-40 40 17.91 40 40-17.91 40-40 40z"
  }));
};

var _default = SvgComponent;
exports.default = _default;