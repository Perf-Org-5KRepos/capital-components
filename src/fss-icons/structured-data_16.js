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
    d: "M14.127 11.129V4.802c1.044-.276 1.843-1.228 1.843-2.365A2.465 2.465 0 0 0 13.513-.02a2.436 2.436 0 0 0-2.365 1.843H4.822C4.545.779 3.593-.019 2.457-.019A2.464 2.464 0 0 0 0 2.437c0 1.136.798 2.088 1.843 2.365v6.296C.798 11.374 0 12.326 0 13.463a2.465 2.465 0 0 0 2.457 2.457c1.259 0 2.273-.952 2.426-2.15h6.173c.154 1.198 1.198 2.15 2.426 2.15a2.465 2.465 0 0 0 2.457-2.457c.031-1.106-.768-2.058-1.812-2.334zm-9.643.982l2.119-2.119c.399.276.86.43 1.382.43s.983-.154 1.382-.43l2.119 2.119a2.17 2.17 0 0 0-.338.768H4.822a2.478 2.478 0 0 0-.338-.768zm-.645-7.647l2.119 2.119c-.276.399-.43.86-.43 1.382s.154.983.43 1.382l-2.119 2.119a2.171 2.171 0 0 0-1.075-.399V4.864a2.182 2.182 0 0 0 1.075-.4zm7.647-.645L9.367 5.938c-.399-.276-.86-.43-1.382-.43s-.983.154-1.382.43L4.484 3.819c.215-.307.369-.676.399-1.075h6.173c.061.4.215.768.43 1.075zm.645 7.647l-2.119-2.119c.276-.399.43-.86.43-1.382s-.154-.983-.43-1.382l2.119-2.119c.307.215.676.369 1.075.399v6.173c-.4.062-.768.215-1.075.43zM13.513.902c.798 0 1.536.737 1.536 1.536s-.737 1.536-1.536 1.536c-.798 0-1.536-.737-1.536-1.536S12.714.902 13.513.902zM.921 2.437c0-.798.737-1.536 1.536-1.536s1.536.737 1.536 1.536-.738 1.536-1.536 1.536S.921 3.236.921 2.437zm1.536 12.592c-.798 0-1.536-.737-1.536-1.536 0-.798.737-1.536 1.536-1.536s1.536.737 1.536 1.536c-.001.799-.738 1.536-1.536 1.536zm11.056 0c-.798 0-1.536-.737-1.536-1.536 0-.798.737-1.536 1.536-1.536.798 0 1.536.737 1.536 1.536-.001.799-.738 1.536-1.536 1.536z"
  }));
};

var _default = SvgComponent;
exports.default = _default;