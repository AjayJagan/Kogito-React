"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
const matchers = [typescript_1.isFunctionDeclaration, typescript_1.isFunctionExpression, typescript_1.isArrowFunction];
function isFunctionNode(node) {
    return matchers.some(matcher => matcher(node));
}
exports.isFunctionNode = isFunctionNode;
