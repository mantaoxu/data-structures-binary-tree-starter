// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
//stack  // last in first out
function dfs(root){
    if(!root) return [];

    let stack = [root];
    let finalArr = [];
    
    while(stack.length) {
        const node = stack.pop();
        if(node.right)stack.push(node.right);
        if(node.left) stack.push(node.left);
        finalArr.push(node.val)
    }
    return finalArr;
}

module.exports = { dfs };