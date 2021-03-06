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
    d: "M34.231 19.168h10.845c.537 4.188 4.188 7.516 8.483 7.516 4.725 0 8.59-3.866 8.59-8.59s-3.866-8.59-8.59-8.59c-3.973 0-7.302 2.792-8.268 6.443h-11.06c-1.074-7.838-7.839-13.959-16-13.959A16.085 16.085 0 0 0 2.124 18.095c0 8.483 6.657 15.462 15.033 15.999v11.06c-3.651.966-6.443 4.295-6.443 8.268 0 4.725 3.866 8.59 8.59 8.59s8.59-3.866 8.59-8.59c0-4.402-3.329-7.946-7.516-8.483V34.094c3.007-.43 5.798-1.611 8.053-3.543L41.21 43.328a8.325 8.325 0 0 0-1.503 4.832c0 4.725 3.866 8.59 8.59 8.59s8.59-3.866 8.59-8.59-3.866-8.59-8.59-8.59a8.325 8.325 0 0 0-4.832 1.503L30.687 28.295c2.04-2.469 3.329-5.691 3.544-9.127zM5.346 18.095c0-7.087 5.798-12.885 12.885-12.885s12.885 5.798 12.885 12.885S25.318 30.98 18.231 30.98 5.346 25.182 5.346 18.095z"
  }));
};

var _default = SvgComponent;
exports.default = _default;