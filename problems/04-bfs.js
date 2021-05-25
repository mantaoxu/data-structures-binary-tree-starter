// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

const { TreeNode } = require("./01-tree-node");

// queue //first in first out
function bfs(root){
//if there is no root, return []
if (!this.root) {
    return [];
    }
    //start a new Queue
    const queue = new TreeNode();
    //keep a tally of all values in the tree
    const treeValues = [];
    //add root to queue
    queue.enqueue(this.root);
    //while queue is not empty
    while (queue.val !== 0) {
    //get TreeNode Children
    const nodeChildren = queue.left.val;
    //if node has children, loop and add each to queue
    if (nodeChildren.length !== 0) {
        nodeChildren.forEach(child => queue.enqueue(child));
    }
    //push the first item in the queue to the tree values
    treeValues.push(queue.left.val);
    //remove first node from queue
    queue.dequeue();
    }
    //return values, should be all TreeNodes
    return treeValues;




    
}

module.exports = { bfs };