"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isHookIdentifier(node) {
    return isHookName(node.text);
}
exports.isHookIdentifier = isHookIdentifier;
/**
 * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L17
 * @param name
 */
function isHookName(name) {
    return /^use[A-Z0-9].*$/.test(name);
}
