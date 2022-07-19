/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0;i<nums.length;i++){
        let cur = target - nums[i]
        if(cur in map){
            return [i,map[cur]]
        }else{
            map[nums[i]] = i
        }
    }
};
// @lc code=end

