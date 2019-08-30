"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_component_identifier_1 = require("./is-component-identifier");
const is_hook_identifier_1 = require("./is-hook-identifier");
function isComponentOrHookIdentifier(node) {
    return is_component_identifier_1.isComponentIdentifier(node) || is_hook_identifier_1.isHookIdentifier(node);
}
exports.isComponentOrHookIdentifier = isComponentOrHookIdentifier;
