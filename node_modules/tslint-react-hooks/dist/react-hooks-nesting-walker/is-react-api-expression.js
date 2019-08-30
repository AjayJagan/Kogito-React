"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
/**
 * Tests whether an `Expression` is an identifier that matches a predicate. Accepts also property
 * access of that identifier from React's top-level API.
 *
 * @example
 * const isForwardRef = isReactApiExpression((identifier) => identifier.text === 'forwardRef');
 * // would match `isForwardRef` or `React.isForwardRef`
 * const matches = isForwardRef(node);
 *
 * @param predicate Predicate that is run on the actual identifier.
 */
exports.isReactApiExpression = (predicate) => (expression) => {
    if (typescript_1.isIdentifier(expression)) {
        return predicate(expression);
    }
    else if (typescript_1.isPropertyAccessExpression(expression)) {
        return (typescript_1.isIdentifier(expression.expression) &&
            expression.expression.text === 'React' &&
            predicate(expression.name));
    }
    return false;
};
