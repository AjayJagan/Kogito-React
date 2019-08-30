"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds a closest ancestor that matches a given predicate.
 *
 * Ensures type safety
 */
function findClosestAncestorNode(startingNode, predicate) {
    if (!startingNode.parent) {
        return null;
    }
    if (predicate(startingNode.parent)) {
        return startingNode.parent;
    }
    return findClosestAncestorNode(startingNode.parent, predicate);
}
exports.findClosestAncestorNode = findClosestAncestorNode;
