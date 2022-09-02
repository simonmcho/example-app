"use strict";
exports.__esModule = true;
exports.Panel = void 0;
var react_1 = require("react");
var Panel = function (_a) {
    var dispatch = _a.dispatch;
    return (<div data-testid="custom-text-align-panel">
    Where do you want that text
    <button onClick={function () {
            return dispatch(function (api) {
                api.get('styles').set({ textAlign: 'left' });
            });
        }} data-testid={"button-text-align-left"}>
      Left
    </button>
    <button onClick={function () {
            return dispatch(function (api) {
                api.get('styles').set({ textAlign: 'center' });
            });
        }} data-testid={"button-text-align-center"}>
      Center
    </button>
    <button onClick={function () {
            return dispatch(function (api) {
                api.get('styles').set({ textAlign: 'right' });
            });
        }} data-testid={"button-text-align-right"}>
      Right
    </button>
  </div>);
};
exports.Panel = Panel;
