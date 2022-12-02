//Unique Binary Search Trees II

//Solved

//Link:- https://leetcode.com/problems/unique-binary-search-trees-ii/

//Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

//Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
     if (n === 0) return [];

     let generate = (start, end) => {
          let result = [];
          if (start > end) return [null];
          for (let i = start; i <= end; i++) {
               const leftTree = generate(start, i - 1);
               const rightTree = generate(i + 1, end);

               for (let leftNode of leftTree) {
                    for (let rightNode of rightTree) {
                         let node = new TreeNode(i);
                         node.left = leftNode;
                         node.right = rightNode;

                         result.push(node);
                    }
               }
          }
          return result;
     };
     return generate(1, n);
};
