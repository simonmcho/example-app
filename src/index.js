"use strict";
exports.__esModule = true;
var ub_shared_1 = require("ub-shared");
var hello_world_1 = require("./hello-world");
console.log('submodules test');
/**
 * Feel free to register whatever you need to export.
 * IMPORTANT: Registration ordering is important.
 */
(0, ub_shared_1.registerComponent)(hello_world_1.Component);
