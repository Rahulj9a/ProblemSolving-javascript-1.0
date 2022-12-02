// Binary Tree Inorder Traversal

//Solved

//link:- https://leetcode.com/problems/binary-tree-inorder-traversal/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

//Solution:-

var inorderTraversal = function (root, ans = []) { 
    
    if (root === null) return []
    
    if (root.left) inorderTraversal(root.left, ans)
    
    ans.push(val)

    if (root.right) inorderTraversal(root.right, ans)
    
    return []

};
