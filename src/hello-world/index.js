"use strict";
exports.__esModule = true;
exports.Component = void 0;
var react_1 = require("react");
var ub_shared_1 = require("ub-shared");
var hello_world_1 = require("./components/hello-world");
var migrations_1 = require("./migrations");
var schema = ub_shared_1.Schema.object({
    firstName: ub_shared_1.Schema.string().noControls(),
    lastName: ub_shared_1.Schema.string().groupControls({
        icon: <span>LN</span>,
        label: 'Last Name'
    }),
    styles: ub_shared_1.Schema.newStyle({
        textAlign: {
            layoutSpecific: true
        }
    })
});
exports.Component = (0, ub_shared_1.component)({
    componentTypeId: 'helloWorld',
    displayName: 'HelloWorld',
    tags: ['newControls', 'swappable'],
    schema: schema,
    Component: hello_world_1["default"],
    version: migrations_1.migrations.length,
    migrations: migrations_1.migrations
});
