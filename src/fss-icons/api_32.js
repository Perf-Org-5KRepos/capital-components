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
    d: "M14.16 15.715c-.107 0-.179-.03-.215-.09-.037-.06-.055-.16-.055-.3v-2.66c0-.274-.06-.505-.18-.695a1.437 1.437 0 0 0-.475-.465 2.122 2.122 0 0 0-.665-.26 3.565 3.565 0 0 0-.75-.08c-.287 0-.566.027-.84.08a2.157 2.157 0 0 0-.735.28c-.217.134-.395.31-.535.53-.14.22-.22.497-.24.83h1.14c.027-.28.144-.487.35-.62s.47-.2.79-.2c.113 0 .233.009.36.025.126.017.242.05.345.1a.71.71 0 0 1 .26.215c.07.093.105.213.105.36 0 .167-.042.292-.125.375a.761.761 0 0 1-.34.185 2.82 2.82 0 0 1-.495.085 5.947 5.947 0 0 0-.59.085c-.24.027-.479.065-.715.115-.237.05-.45.132-.64.245-.19.114-.344.27-.46.47-.117.2-.175.46-.175.78 0 .253.048.475.145.665.097.19.227.347.39.47.163.124.352.217.565.28.213.063.436.095.67.095.307 0 .625-.05.955-.15.33-.1.608-.26.835-.48.047.234.146.397.3.49a1.1 1.1 0 0 0 .58.14 2.358 2.358 0 0 0 .565-.085c.063-.017.115-.032.155-.045v-.79a.766.766 0 0 1-.16.02h-.12zm-1.41-.981c0 .18-.044.332-.13.455a1.1 1.1 0 0 1-.325.305c-.13.08-.269.137-.415.17a1.818 1.818 0 0 1-.745.02c-.123-.02-.236-.055-.34-.105s-.192-.118-.265-.205a.478.478 0 0 1-.11-.32c0-.146.025-.271.075-.375a.655.655 0 0 1 .205-.25c.086-.063.186-.113.3-.15.113-.037.23-.065.35-.085a8.21 8.21 0 0 1 .76-.105c.253-.023.467-.092.64-.205v.85zm6.92-2.764c-.2-.25-.452-.447-.755-.59a2.475 2.475 0 0 0-1.065-.215c-.333 0-.644.065-.93.195-.287.13-.51.345-.67.645h-.02v-.7h-1.08v7.08h1.14v-2.58h.02c.086.14.195.262.325.365.13.104.271.189.425.255.153.066.313.115.48.145.166.03.333.045.5.045.38 0 .71-.075.99-.225.28-.15.512-.35.695-.6.183-.25.32-.538.41-.865a3.79 3.79 0 0 0 .135-1.01c0-.38-.05-.736-.15-1.07-.1-.334-.25-.625-.45-.875zm-.615 2.59c-.05.217-.134.41-.25.58-.117.17-.265.309-.445.415-.18.106-.4.16-.66.16a1.303 1.303 0 0 1-1.07-.52 1.64 1.64 0 0 1-.285-.575 2.621 2.621 0 0 1-.095-.725c0-.553.122-.997.365-1.33.243-.333.605-.5 1.085-.5.233 0 .44.052.62.155.18.104.33.24.45.41.12.17.21.365.27.585.06.22.09.446.09.68 0 .226-.025.448-.075.665zm2.205-5.225h1.14v1.08h-1.14zm0 1.97h1.14v5.17h-1.14z"
  }), _react.default.createElement("path", {
    d: "M3 3v26h26V3H3zm2 2h22v18H5V5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;