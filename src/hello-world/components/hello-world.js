"use strict";
exports.__esModule = true;
var react_1 = require("react");
var smart_builder_sdk_1 = require("smart-builder-sdk");
var change_first_name_modal_1 = require("./change-first-name-modal");
var control_panel_1 = require("./control-panel");
var script_1 = require("./script");
var HelloWorld = function (_a) {
    var data = _a.data, dispatch = _a.dispatch, className = _a.className, mode = _a.mode;
    var firstName = data.firstName, lastName = data.lastName;
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var updateFirstName = function (newFirstName) {
        dispatch(function (api) { return api.get('firstName').set(newFirstName); });
        setShowModal(false);
    };
    var isViewMode = mode.type === 'view';
    return (<>
      <div data-testid="hello-world-content" className={className}>
        Hello,{' '}
        <button data-testid="hello-world-first-name-btn" onClick={function () { return setShowModal(true); }}>
          {firstName}
        </button>{' '}
        {lastName}
      </div>
      {/* To test the External Script we are loading momentjs from a CDN(we chose moment just for simplicity), after loading the library the onload method will run. If you see in the example the mode is set to view and we are using condition: isViewMode. To test it in "edit" mode, you can modify mode to edit and condition to true and the alert should show when editing your landing page  */}
      {isViewMode ? (<smart_builder_sdk_1.Script mode="view" dependencies={[]} externalScript={{
                src: 'https://rawgit.com/moment/moment/2.2.1/min/moment.min.js',
                scriptId: 'moment-sample-script',
                onloadMethod: (0, script_1.runOnloadMethod)(),
                condition: isViewMode
            }}/>) : null}
      {/* To test the Inline Script go to view mode and check the console in devtools, you will get the log coming from getInlineScript() */}
      {isViewMode ? <smart_builder_sdk_1.Script mode={mode.type} dependencies={[]} inlineScript={(0, script_1.getInlineScript)()}/> : null}

      {showModal && (<change_first_name_modal_1.ChangeFirstNameModal firstName={firstName} onUpdate={updateFirstName} onClose={function () { return setShowModal(false); }}/>)}
    </>);
};
var textAlignLabel = 'My own text align';
exports["default"] = (0, smart_builder_sdk_1.WithStyles)((0, smart_builder_sdk_1.WithControls)(HelloWorld, [
    'text-align',
    {
        // Or can define your own
        id: 'custom-text-align',
        label: textAlignLabel,
        Button: function (props) { return (<smart_builder_sdk_1.ControlButton label={textAlignLabel} active={false} {...props}>
          An Icon
        </smart_builder_sdk_1.ControlButton>); },
        Panel: control_panel_1.Panel,
        type: 'subtoolbar'
    },
]), 'styles', // The object key where styles are applied from the Schema
'paragraph');
