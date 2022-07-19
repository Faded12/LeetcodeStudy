/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const len = nums.length;
    const dp = [0, nums[0]];
    for(let i = 2; i<=len;i++){
        dp[i] = dp[i-1]+ Math.max(dp[i-2],dp[i-1])
    }
    console.log(dp)
    return dp[len]
};
// @lc code=end