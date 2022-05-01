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
        let res = target - nums[i]
        if(res in map){
            return [map[res],i]
        }else{
            map[nums[i]] = i
        }
    }
};
// @lc code=end

