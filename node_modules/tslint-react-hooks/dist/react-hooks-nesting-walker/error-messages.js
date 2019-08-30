"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("typescript");
exports.ERROR_MESSAGES = {
    [typescript_1.SyntaxKind.IfStatement]: 'A hook cannot appear inside an if statement',
    [typescript_1.SyntaxKind.SwitchStatement]: 'A hook cannot appear inside a switch statement',
    [typescript_1.SyntaxKind.BinaryExpression]: 'A hook cannot be used in a conditional expression',
    [typescript_1.SyntaxKind.ConditionalExpression]: 'A hook cannot be used in a conditional expression',
    [typescript_1.SyntaxKind.SourceFile]: 'A hook cannot be used outside of a component or another hook',
    [typescript_1.SyntaxKind.ClassDeclaration]: 'A hook cannot be used in a class component',
    iterationStatement: 'A hook cannot appear inside a loop',
    invalidFunctionDeclaration: 'A hook cannot be used inside of another function',
    invalidFunctionExpression: 'A hook cannot be used inside of another function',
    hookAfterEarlyReturn: 'A hook should not appear after a return statement',
};
