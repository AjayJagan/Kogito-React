"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslint_1 = require("tslint");
const react_hooks_nesting_walker_1 = require("./react-hooks-nesting-walker/react-hooks-nesting-walker");
const options_1 = require("./react-hooks-nesting-walker/options");
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new react_hooks_nesting_walker_1.ReactHooksNestingWalker(sourceFile, this.getOptions()));
    }
}
Rule.metadata = {
    ruleName: 'react-hooks-nesting',
    description: 'Enforces Rules of Hooks',
    descriptionDetails: 'See https://reactjs.org/docs/hooks-rules.html',
    optionsDescription: tslint_1.Utils.dedent `
      An optional object with the property ${options_1.detectHooksFromNonReactNamespaceOptionName}.
      When set to true, violations will be reported for hooks from namespaces other
      than the React namespace (e.g. \`MyHooks.useHook\` will be treated as a hook).
    `,
    options: {
        type: 'object',
        properties: {
            [options_1.detectHooksFromNonReactNamespaceOptionName]: {
                type: 'boolean',
            },
        },
    },
    optionExamples: [
        true,
        [true, { [options_1.detectHooksFromNonReactNamespaceOptionName]: true }],
    ],
    hasFix: false,
    type: 'functionality',
    typescriptOnly: false,
    requiresTypeInfo: false,
};
exports.Rule = Rule;
