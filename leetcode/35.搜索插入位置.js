/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target<nums[0]) return 0
    for(let i = 0 ; i<nums.length;i++){
        if(nums[i]===target){
            return i
        }else if(nums[i]<target&&(nums[i+1]>target||nums[i+1]==undefined)){
            return i + 1     
        }
    }
};
// @lc code=end

