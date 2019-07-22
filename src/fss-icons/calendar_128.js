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
    d: "M67.57 71.529a36.655 36.655 0 0 1-4.539 3.393 90.249 90.249 0 0 0-4.746 3.262c-3.16 2.156-5.652 4.688-7.48 7.598C48.977 88.693 48.039 92.104 48 96h31.934v-6.861H57.152c.312-1.029.887-2 1.742-2.92.836-.922 1.832-1.803 2.961-2.658a62.451 62.451 0 0 1 3.711-2.553c1.34-.851 2.676-1.746 4.016-2.685a49.954 49.954 0 0 0 3.875-3.033 24.383 24.383 0 0 0 3.332-3.523 16.35 16.35 0 0 0 2.344-4.201c.578-1.523.867-3.232.867-5.111 0-1.521-.246-3.127-.731-4.807-.492-1.682-1.332-3.232-2.512-4.678-1.176-1.43-2.726-2.621-4.641-3.561-1.91-.939-4.301-1.41-7.148-1.41-2.625 0-4.938.463-6.914 1.379a14.734 14.734 0 0 0-5.047 3.795c-1.379 1.617-2.414 3.529-3.102 5.75-.692 2.217-1.039 4.633-1.039 7.225h7.613c.051-1.652.215-3.199.5-4.641.297-1.43.738-2.674 1.34-3.727a6.701 6.701 0 0 1 2.406-2.488c1-.598 2.254-.912 3.773-.912 1.648 0 2.98.283 4.008.844 1.024.562 1.828 1.26 2.406 2.086a7.288 7.288 0 0 1 1.172 2.691c.195.965.297 1.873.297 2.719-.043 1.834-.508 3.465-1.406 4.875-.885 1.411-2.018 2.723-3.405 3.934z"
  }), _react.default.createElement("path", {
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }));
};

var _default = SvgComponent;
exports.default = _default;