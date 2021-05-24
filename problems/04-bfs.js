// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    // Your code here
    if(!root) return [];

    return [root.val, ...bfs(root.left), ...bfs(root.right)]
    
}

module.exports = { bfs };