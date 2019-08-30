"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslint_1 = require("tslint");
const typescript_1 = require("typescript");
const is_hook_call_1 = require("./is-hook-call");
const error_messages_1 = require("./error-messages");
const is_binary_conditional_expression_1 = require("./is-binary-conditional-expression");
const is_component_or_hook_identifier_1 = require("./is-component-or-hook-identifier");
const is_react_component_decorator_1 = require("./is-react-component-decorator");
const find_ancestor_function_1 = require("./find-ancestor-function");
const function_node_1 = require("./function-node");
const find_closest_ancestor_node_1 = require("./find-closest-ancestor-node");
const options_1 = require("./options");
class ReactHooksNestingWalker extends tslint_1.RuleWalker {
    constructor() {
        super(...arguments);
        this.functionsWithReturnStatements = new Set();
        this.ruleOptions = options_1.parseRuleOptions(this.getOptions());
    }
    visitCallExpression(node) {
        if (is_hook_call_1.isHookCall(node, this.ruleOptions)) {
            this.visitHookAncestor(node, node.parent);
        }
        super.visitCallExpression(node);
    }
    visitReturnStatement(node) {
        const parentFunction = find_ancestor_function_1.findAncestorFunction(node);
        if (parentFunction) {
            this.functionsWithReturnStatements.add(parentFunction);
        }
        super.visitReturnStatement(node);
    }
    visitHookAncestor(hookNode, ancestor) {
        /**
         * Fail for:
         * * if statements
         * * conditional expressions (binary and ternary)
         * * switch statements
         * * iterations statements
         * * classes
         */
        if (typescript_1.isIfStatement(ancestor) ||
            typescript_1.isSwitchStatement(ancestor) ||
            typescript_1.isConditionalExpression(ancestor) ||
            is_binary_conditional_expression_1.isBinaryConditionalExpression(ancestor) ||
            typescript_1.isSourceFile(ancestor) ||
            typescript_1.isClassDeclaration(ancestor)) {
            this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES[ancestor.kind]);
            return;
        }
        else if (typescript_1.isIterationStatement(ancestor, false)) {
            this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES.iterationStatement);
            return;
        }
        /**
         * Finish visiting ancestors if the following node is encountered:
         * * `FunctionDeclaration`
         * * `VariableDeclaration`
         * * `FunctionExpression`
         *
         * If it not is a hook or a component, fail, as hooks cannot be nested inside arbitrary
         * functions.
         */
        if (typescript_1.isFunctionDeclaration(ancestor)) {
            /**
             * Allow using hooks inside functions that are hooks or components.
             *
             * ```ts
             * function useCustomHook() {
             *   useEffect();
             * }
             *
             * function MyComponent() {
             *   useEffect();
             * }
             * ```
             */
            if (this.functionsWithReturnStatements.has(ancestor)) {
                const closestReturnStatementOrFunctionNode = find_closest_ancestor_node_1.findClosestAncestorNode(hookNode, (node) => typescript_1.isReturnStatement(node) || function_node_1.isFunctionNode(node));
                if (closestReturnStatementOrFunctionNode &&
                    !typescript_1.isReturnStatement(closestReturnStatementOrFunctionNode)) {
                    this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES.hookAfterEarlyReturn);
                }
            }
            if (ancestor.name && is_component_or_hook_identifier_1.isComponentOrHookIdentifier(ancestor.name)) {
                return;
            }
            // Disallow using hooks inside other kinds of functions
            this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES.invalidFunctionDeclaration);
            return;
        }
        else if (typescript_1.isArrowFunction(ancestor) || typescript_1.isFunctionExpression(ancestor)) {
            /**
             * Allow declaring custom hooks and components using arrow functions and function expressions
             *
             * ```ts
             * const useCustomHook = () => {
             *   useEffect();
             * }
             *
             * const MyComponent = function() {
             *   useEffect();
             * }
             *
             * const MyComponent = function MyComponent() {
             *   useEffect();
             * }
             * ```
             */
            /**
             * REFACTOR: Use a shared implementation for all types of functions.
             * The logic below is duplicated for function declarations.
             */
            if (this.functionsWithReturnStatements.has(ancestor)) {
                const closestReturnStatementOrFunctionNode = find_closest_ancestor_node_1.findClosestAncestorNode(hookNode, (node) => typescript_1.isReturnStatement(node) || function_node_1.isFunctionNode(node));
                if (closestReturnStatementOrFunctionNode &&
                    !typescript_1.isReturnStatement(closestReturnStatementOrFunctionNode)) {
                    this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES.hookAfterEarlyReturn);
                }
            }
            /**
             * Detect using hooks inside named function expressions
             */
            if (ancestor.name && is_component_or_hook_identifier_1.isComponentOrHookIdentifier(ancestor.name)) {
                return;
            }
            /**
             * Detect that an unnamed function expression is a component or a hook
             */
            if (typescript_1.isVariableDeclaration(ancestor.parent) &&
                typescript_1.isIdentifier(ancestor.parent.name) &&
                is_component_or_hook_identifier_1.isComponentOrHookIdentifier(ancestor.parent.name)) {
                return;
            }
            /**
             * Allow using hooks when the function is passed to `React.memo` or `React.forwardRef`
             */
            if (typescript_1.isCallExpression(ancestor.parent) &&
                is_react_component_decorator_1.isReactComponentDecorator(ancestor.parent.expression)) {
                return;
            }
            // Disallow using hooks inside other kinds of functions
            this.addFailureAtNode(hookNode, error_messages_1.ERROR_MESSAGES.invalidFunctionExpression);
            return;
        }
        this.visitHookAncestor(hookNode, ancestor.parent);
    }
}
exports.ReactHooksNestingWalker = ReactHooksNestingWalker;
