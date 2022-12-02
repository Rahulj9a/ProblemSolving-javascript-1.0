//N-ary Tree Preorder Traversal

//Solved

//link:- https://leetcode.com/problems/n-ary-tree-preorder-traversal/

//Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

//Solution:

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

var preorder = function (root) {
     let ans = [];
     if (root === null) return [];

     let stack = [root];

     while (stack.length) {
          let item = stack.pop();

          ans.push(item.val);

          if (item.children)
               while (item.children.length) {
                    stack.push(item.children.pop());
               }
     }
     return ans;
};