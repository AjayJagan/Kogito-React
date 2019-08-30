"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
const binaryConditionalOperators = [
    typescript_1.SyntaxKind.AmpersandAmpersandToken,
    typescript_1.SyntaxKind.BarBarToken,
];
function isBinaryConditionalExpression(node) {
    if (!typescript_1.isBinaryExpression(node)) {
        return false;
    }
    return binaryConditionalOperators.includes(node.operatorToken.kind);
}
exports.isBinaryConditionalExpression = isBinaryConditionalExpression;
