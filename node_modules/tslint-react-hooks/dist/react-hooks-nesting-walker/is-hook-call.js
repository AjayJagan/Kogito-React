"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
const is_hook_identifier_1 = require("./is-hook-identifier");
const options_1 = require("./options");
/**
 * Tests if a `CallExpression` calls a React Hook
 * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js#L26
 */
function isHookCall({ expression }, ruleOptions) {
    if (typescript_1.isIdentifier(expression) && is_hook_identifier_1.isHookIdentifier(expression)) {
        return true;
    }
    else if (typescript_1.isPropertyAccessExpression(expression) &&
        is_hook_identifier_1.isHookIdentifier(expression.name)) {
        if (ruleOptions[options_1.detectHooksFromNonReactNamespaceOptionName]) {
            return true;
        }
        /**
         * The expression from which the property is accessed.
         *
         * @example for `React.useState`, this would be the `React` identifier
         */
        const sourceExpression = expression.expression;
        return isReactIdentifier(sourceExpression);
    }
    return false;
}
exports.isHookCall = isHookCall;
const isReactIdentifier = (expression) => typescript_1.isIdentifier(expression) && expression.text === 'React';
