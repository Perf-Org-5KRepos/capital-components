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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M14.525 3.381l-.026-.035a8.028 8.028 0 0 0-1.844-1.844l-.035-.026A7.963 7.963 0 0 0 8 0a8 8 0 0 0-8 8 7.956 7.956 0 0 0 1.502 4.655 8.048 8.048 0 0 0 1.88 1.871A7.957 7.957 0 0 0 8 16a8 8 0 0 0 8-8c0-1.722-.55-3.314-1.475-4.619zm-1.798 1.346A7.957 7.957 0 0 1 10.728 10L8.727 8l3.965-3.965c.022.228.035.459.035.692zm-9.454 6.546c0-2.021.759-3.864 1.999-5.273l2.001 2-3.965 3.965a7.205 7.205 0 0 1-.035-.692zm4.727-4L5.999 5.272a7.959 7.959 0 0 1 5.273-1.999c.234 0 .464.013.692.035L8 7.273zm0 1.454l2.001 2.001a7.959 7.959 0 0 1-5.273 1.999c-.234 0-.464-.013-.692-.035L8 8.727zm3.636-6.522c-.122-.006-.241-.023-.364-.023-2.325 0-4.44.88-6.047 2.316L3.54 2.813A6.808 6.808 0 0 1 8 1.143a6.79 6.79 0 0 1 3.636 1.062zM2.813 3.54l1.685 1.685a9.046 9.046 0 0 0-2.316 6.047c0 .124.017.243.023.365A6.792 6.792 0 0 1 1.143 8c0-1.706.635-3.259 1.67-4.46zm1.551 10.255c.122.006.24.023.364.023 2.325 0 4.44-.88 6.047-2.316l1.685 1.685a6.807 6.807 0 0 1-4.459 1.67 6.792 6.792 0 0 1-3.637-1.062zm8.823-1.335l-1.685-1.685a9.046 9.046 0 0 0 2.316-6.047c0-.124-.017-.243-.023-.365A6.792 6.792 0 0 1 14.857 8a6.808 6.808 0 0 1-1.67 4.46z"
  }));
};

var _default = SvgComponent;
exports.default = _default;