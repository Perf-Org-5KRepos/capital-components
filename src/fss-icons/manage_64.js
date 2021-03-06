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
    d: "M55 32c0-1.229-.124-2.427-.311-3.604L62 22l-6.211-10.195-8.719 2.848a22.964 22.964 0 0 0-7.138-4.219L38 2H26l-1.933 8.434a22.95 22.95 0 0 0-7.14 4.22l-8.718-2.85L2 22l7.31 6.397C9.124 29.574 9 30.771 9 32s.124 2.427.31 3.604L2 42l6.212 10.195 8.716-2.849a22.968 22.968 0 0 0 7.14 4.22L26 62h12l1.933-8.434a22.945 22.945 0 0 0 7.138-4.219l8.718 2.849L62 42l-7.311-6.395C54.876 34.428 55 33.229 55 32zm4.416 10.397l-4.512 7.406-7.213-2.356-1.078-.353-.855.744a20.887 20.887 0 0 1-6.516 3.851l-1.017.375-.242 1.056L36.406 60h-8.812l-1.577-6.88-.242-1.056-1.017-.375a20.888 20.888 0 0 1-6.518-3.852l-.855-.744-1.078.353-7.211 2.356-4.512-7.406 6.043-5.288.83-.727-.172-1.09C11.093 34.075 11 32.998 11 32c0-.998.093-2.074.285-3.291l.172-1.09-.83-.727-6.043-5.29 4.511-7.406 7.212 2.357 1.078.353.855-.745a20.926 20.926 0 0 1 6.518-3.852l1.017-.375.242-1.056L27.594 4h8.812l1.577 6.88.242 1.056 1.017.375a20.887 20.887 0 0 1 6.516 3.851l.855.744 1.078-.352 7.213-2.356 4.511 7.406-6.043 5.287-.832.728.173 1.091C52.906 29.923 53 31 53 32c0 1.001-.094 2.078-.286 3.292l-.173 1.091.832.727 6.043 5.287z"
  }), _react.default.createElement("path", {
    d: "M32 20c-6.629 0-12 5.369-12 12s5.371 12 12 12c6.631 0 12-5.369 12-12s-5.369-12-12-12zm0 16c-2.207 0-4-1.791-4-4s1.793-4 4-4 4 1.791 4 4-1.793 4-4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;