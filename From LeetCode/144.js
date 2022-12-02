//Binary Tree Preorder Traversal

//Solved

//Link:- https://leetcode.com/problems/binary-tree-preorder-traversal/

//Given the root of a binary tree, return the preorder traversal of its nodes' values.

//Solution:-

var preorderTraversal = function (root) {
     let ans = [];
     if (root === null) return [];

     let stack = [root];

     while (stack.length) {
          const item = stack.pop();

          ans.push(item.val);

          if (item.right) stack.push(item.right);
          if (item.left) stack.push(item.left);
     }

     return ans;
};