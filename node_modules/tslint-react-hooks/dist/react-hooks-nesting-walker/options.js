"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectHooksFromNonReactNamespaceOptionName = 'detect-hooks-from-non-react-namespace';
const defaultRuleOptions = {};
function parseRuleOptions(rawOptionsArray) {
    if (!Array.isArray(rawOptionsArray)) {
        return defaultRuleOptions;
    }
    const rawOptions = rawOptionsArray[0];
    if (!rawOptions) {
        return defaultRuleOptions;
    }
    let parsedOptions = Object.assign({}, defaultRuleOptions);
    const detectHooksFromNonReactNamespaceOption = rawOptions[exports.detectHooksFromNonReactNamespaceOptionName];
    if (typeof detectHooksFromNonReactNamespaceOption === 'boolean') {
        parsedOptions[exports.detectHooksFromNonReactNamespaceOptionName] = detectHooksFromNonReactNamespaceOption;
    }
    return parsedOptions;
}
exports.parseRuleOptions = parseRuleOptions;
