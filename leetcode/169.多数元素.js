/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    let count = 0;
    nums.forEach(i=>{
        if(count ===0){
            res = i;
            count++;
        }else if(res===i){
            count++;
        }else{
            count--;
        }
    })
    return res;
};
// @lc code=end

