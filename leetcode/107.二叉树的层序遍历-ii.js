/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let res = []
    let stack = [root]
    while(stack.length){
        let len = stack.length
        let add = []
        while(len--){
            let cur = stack.pop();
            add.push(cur.val)
            cur.left && stack.unshift(cur.left)
            cur.right && stack.unshift(cur.right)
        }
        res.unshift(add)
    }
    return res
};
// @lc code=end

