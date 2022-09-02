"use strict";
exports.__esModule = true;
exports.runOnloadMethod = exports.getInlineScript = void 0;
var getInlineScript = function () {
    return "console.log(\"Hello World App is running inline js script in View Mode\")\n  ";
};
exports.getInlineScript = getInlineScript;
var runOnloadMethod = function () {
    return "alert(moment().format('MMMM Do YYYY, h:mm:ss a'))";
};
exports.runOnloadMethod = runOnloadMethod;
