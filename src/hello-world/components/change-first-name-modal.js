"use strict";
exports.__esModule = true;
exports.ChangeFirstNameModal = void 0;
var react_1 = require("react");
var styled_1 = require("../styled");
var ChangeFirstNameModal = function (_a) {
    var firstName = _a.firstName, onUpdate = _a.onUpdate, onClose = _a.onClose;
    var _b = (0, react_1.useState)(firstName), localFirstName = _b[0], setLocalFirstName = _b[1];
    return (<>
      <styled_1.Modal>
        <styled_1.CloseButton onClick={onClose}>x</styled_1.CloseButton>
        <label>
          <strong>First Name:</strong>
          <br />
          <input type="text" data-testid="hello-world-first-name-input" value={localFirstName} onChange={function (_a) {
        var value = _a.currentTarget.value;
        return setLocalFirstName(value);
    }}/>
        </label>
        <br />
        <button data-testid="hello-world-save-btn" onClick={function () { return onUpdate(localFirstName); }}>
          Save
        </button>
      </styled_1.Modal>
      <styled_1.Overlay />
    </>);
};
exports.ChangeFirstNameModal = ChangeFirstNameModal;
