/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0;
    let max = nums[0]
    while(nums.length){
        // 如果这里用shift会超时，pop不会，理解是因shift的时间复杂度是O(n)
        let cur = nums.pop()
        prev = Math.max(cur,cur+prev)
        max = Math.max(prev,max)
    }
    return max
};
// @lc code=end

