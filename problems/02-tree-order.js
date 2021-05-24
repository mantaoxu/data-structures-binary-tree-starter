// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
// self, left, right
function preOrderArray(root) {
    // let arr = [];
    // if(!arr.length) return arr;
    if(!root) {
        return [];
    }
    return [root.value, ...root.left, ...root.right];

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
// left, self, right
function inOrderArray(root) {
    // Your code here
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
//left, right, self
function postOrderArray(root) {
    // Your code here
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
