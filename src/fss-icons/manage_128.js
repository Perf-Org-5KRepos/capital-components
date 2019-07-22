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
    d: "M110 64c0-2.459-.248-4.854-.621-7.209L124 44l-12.422-20.391-17.438 5.695a45.915 45.915 0 0 0-14.275-8.438L76 4H52l-3.865 16.867a45.902 45.902 0 0 0-14.279 8.439L16.42 23.607 4 44l14.619 12.795C18.248 59.148 18 61.543 18 64c0 2.459.248 4.854.619 7.207L4 84l12.424 20.391 17.432-5.697a45.902 45.902 0 0 0 14.279 8.439L52 124h24l3.865-16.867a45.877 45.877 0 0 0 14.275-8.438l17.436 5.697L124 84l-14.621-12.789c.373-2.356.621-4.752.621-7.211zm8.832 20.794l-9.024 14.812-14.425-4.713-2.156-.705-1.711 1.489a41.781 41.781 0 0 1-13.032 7.702l-2.033.749-.484 2.111L72.813 120H55.187l-3.153-13.761-.484-2.111-2.033-.748a41.802 41.802 0 0 1-13.036-7.704l-1.711-1.489-2.156.705-14.421 4.713-9.026-14.811 12.086-10.576 1.661-1.454-.344-2.18C22.186 68.15 22 65.997 22 64c0-1.995.186-4.148.57-6.582l.344-2.18-1.661-1.453L9.167 43.207l9.021-14.813 14.424 4.715 2.156.705 1.711-1.489a41.814 41.814 0 0 1 13.036-7.704l2.033-.748.484-2.111L55.187 8h17.626l3.153 13.761.484 2.111 2.033.748a41.781 41.781 0 0 1 13.032 7.702l1.711 1.488 2.156-.704 14.427-4.712 9.023 14.811-12.087 10.575-1.663 1.455.346 2.182C105.813 59.846 106 62 106 64c0 2.002-.187 4.156-.572 6.585l-.346 2.182 1.663 1.455 12.087 10.572z"
  }), _react.default.createElement("path", {
    d: "M64 40c-13.258 0-24 10.738-24 24s10.742 24 24 24c13.262 0 24-10.738 24-24S77.262 40 64 40zm0 32c-4.414 0-8-3.582-8-8s3.586-8 8-8 8 3.582 8 8-3.586 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;