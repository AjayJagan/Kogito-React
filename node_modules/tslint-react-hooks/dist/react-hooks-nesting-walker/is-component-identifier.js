"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests if an identifier could be a component's name.
 * @param node
 */
function isComponentIdentifier(node) {
    return isComponentName(node.text);
}
exports.isComponentIdentifier = isComponentIdentifier;
/**
 * Tests if the name could be a component's name.
 *
 * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L49
 *
 * @param name
 */
function isComponentName(name) {
    return !/^[a-z]/.test(name);
}
