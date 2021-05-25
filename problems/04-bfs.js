// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

const { TreeNode } = require("./01-tree-node");

// queue //first in first out
function bfs(root){
    //if there is no root, return []
    if (!root) return [];

    let queue = [root];
    let finalArr = [];
    while(queue.length) {
        const node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right)queue.push(node.right);
        finalArr.push(node.val)
    }
    return finalArr;
}

module.exports = { bfs };