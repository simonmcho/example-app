"use strict";
exports.__esModule = true;
exports.migrations = exports.v1 = void 0;
// Migrations are meant to migrate the existing data from the previous version of your component to the new one in case changes to the schema are causing breaking changes. Without this, pages that had installed your app previously would crash once it gets updated.
exports.v1 = {
    from: 0,
    to: 1,
    run: function (entity) {
        entity.data.styles = { textAlign: "left" };
        return entity;
    }
};
exports.migrations = [exports.v1];
