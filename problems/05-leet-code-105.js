// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;
  /**located the root value */
  let rootVal = preorder[0]; // always the first number as the root;
  let root = new TreeNode(rootVal);  //create a node base on the rootVal / using the value;

  let midIdx = inorder.indexOf(rootVal);  //find the index of rootVal in inorder array, called this middle point(midIdx)
  //**split the inorder array*//////
  let leftInorder = inorder.slice(0, midIdx);    //everything found in the left, should go to the left sub-tree;
  let rightInorder = inorder.slice(midIdx + 1); //everything found in the right, should go to the right sub-tree;

  // check if inorder array's value if also part of the preorder array value//
  let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

    /**build a recursive call */
  let leftTree = buildTree(leftPreorder, leftInorder);
  let rightTree = buildTree(rightPreorder, rightInorder);

  /**build a sub-tree */
  root.left = leftTree;
  root.right = rightTree;
  
  return root;

}
