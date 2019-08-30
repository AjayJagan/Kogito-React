"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_node_1 = require("./function-node");
const find_closest_ancestor_node_1 = require("./find-closest-ancestor-node");
function findAncestorFunction(node) {
    return find_closest_ancestor_node_1.findClosestAncestorNode(node, function_node_1.isFunctionNode);
}
exports.findAncestorFunction = findAncestorFunction;
