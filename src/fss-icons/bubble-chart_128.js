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
    d: "M124.088 64.122c0 3.648-2.79 6.438-6.438 6.438s-6.438-2.79-6.438-6.438c0-3.648 2.79-6.438 6.438-6.438s6.438 2.79 6.438 6.438zm-17.168 21.46c-8.369 0-15.022 6.653-15.022 15.022s6.653 15.022 15.022 15.022 15.022-6.653 15.022-15.022-6.652-15.022-15.022-15.022zM63.785 97.6c-1.717 15.022-14.378 26.611-29.83 26.611-16.524 0-30.044-13.52-30.044-30.044 0-8.584 3.648-16.31 9.228-21.675-3.004-6.438-4.936-13.734-4.936-21.246 0-25.967 21.246-47.212 47.212-47.212s47.212 21.246 47.212 47.212c.001 23.177-16.738 42.491-38.842 46.354zM96.19 51.246c0-22.533-18.241-40.774-40.774-40.774S14.642 28.713 14.642 51.246c0 6.223 1.502 12.018 3.863 17.168 4.507-2.79 9.872-4.292 15.451-4.292 15.666 0 28.327 11.803 29.83 27.04C82.241 87.299 96.19 70.775 96.19 51.246z"
  }));
};

var _default = SvgComponent;
exports.default = _default;