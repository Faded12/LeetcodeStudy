/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>=nums[i+1]){
            let n = nums[i] - nums[i+1] + 1
            nums[i+1] = n + nums[i+1]
            res += n
        }
    }
    return res
};
// @lc code=end

