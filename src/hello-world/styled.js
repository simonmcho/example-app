"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Overlay = exports.Modal = exports.CloseButton = void 0;
var styled_components_1 = require("styled-components");
exports.CloseButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background: #252525;\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 30px;\n  height: 50px;\n  justify-content: center;\n  line-height: 30px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50px;\n"], ["\n  align-items: center;\n  background: #252525;\n  border: none;\n  color: #fff;\n  display: flex;\n  font-size: 30px;\n  height: 50px;\n  justify-content: center;\n  line-height: 30px;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 50px;\n"])));
exports.Modal = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  justify-content: center;\n  left: 50%;\n  padding: 30px;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  z-index: 23;\n"], ["\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  justify-content: center;\n  left: 50%;\n  padding: 30px;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  z-index: 23;\n"])));
exports.Overlay = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: #000;\n  bottom: 0;\n  left: 0;\n  opacity: 0.3;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 22;\n"], ["\n  background: #000;\n  bottom: 0;\n  left: 0;\n  opacity: 0.3;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 22;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
