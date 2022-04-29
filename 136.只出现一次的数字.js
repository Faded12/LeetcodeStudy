/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = 0
    while(nums.length){
        n = n ^ nums.shift()
    }
    return n
};
// @lc code=end

