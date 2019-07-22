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
    d: "M27.5 16c0-.615-.062-1.213-.155-1.802L31 11l-3.106-5.098-4.359 1.424a11.471 11.471 0 0 0-3.569-2.109L19 1h-6l-.966 4.217a11.47 11.47 0 0 0-3.57 2.11L4.105 5.902 1 11l3.655 3.199A11.496 11.496 0 0 0 4.5 16c0 .615.062 1.213.155 1.802L1 21l3.106 5.098 4.358-1.424a11.46 11.46 0 0 0 3.57 2.11L13 31h6l.966-4.217a11.471 11.471 0 0 0 3.569-2.109l4.359 1.424L31 21l-3.655-3.197c.093-.589.155-1.188.155-1.803zm.916 5.397l-1.406 2.308-2.853-.932-1.078-.352-.855.744a9.464 9.464 0 0 1-2.947 1.742l-1.017.375-.242 1.056L17.406 29h-2.812l-.61-2.664-.242-1.056-1.017-.375a9.42 9.42 0 0 1-2.948-1.742l-.856-.743-1.078.353-2.853.932-1.406-2.308 2.388-2.09.83-.727-.172-1.09A9.529 9.529 0 0 1 6.5 16c0-.446.042-.934.13-1.49l.172-1.09-.83-.727-2.388-2.091L4.99 8.294l2.853.933 1.078.353.855-.744a9.43 9.43 0 0 1 2.948-1.742l1.017-.375.242-1.056L14.594 3h2.812l.61 2.664.242 1.056 1.017.375c1.087.4 2.079.986 2.947 1.742l.855.744 1.078-.352 2.854-.933 1.406 2.308-2.388 2.089-.831.727.173 1.091c.088.555.131 1.042.131 1.489s-.043.935-.131 1.49l-.173 1.091.831.727 2.389 2.089z"
  }), _react.default.createElement("path", {
    d: "M16 10c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 18z"
  }));
};

var _default = SvgComponent;
exports.default = _default;