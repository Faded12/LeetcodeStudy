/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let arr = []
    const dfs = (root)=>{
        if(!root) return
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }
    dfs(root1)
    dfs(root2)
    return arr.sort((a,b)=>a-b)
};
// @lc code=end

