//Unique Binary Search Trees

//Solved

//Link:-https://leetcode.com/problems/unique-binary-search-trees/

//Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

//Solution:
var numTrees = function (n, memo = { 0: 1, 1: 1 }) {
     for (let i = 2; i <= n; i++) {
          for (let j = 1; j <= i; j++) {
               memo[i] = (memo[i] || 0) + memo[i - j] * memo[j - 1];
          }
     }
     return memo[n];
};