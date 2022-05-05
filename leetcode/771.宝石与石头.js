/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let num = 0;
    for(let i = 0;i<stones.length;i++){
        for(let j =0;j<jewels.length;j++){
            if(stones[i] === jewels[j]) num++
        }
    }
    return num
};
// @lc code=end

