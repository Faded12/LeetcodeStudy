/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    while(accounts.length){
        let cur = accounts.pop();
        max = Math.max(cur.reduce((l,n)=>l+n),max)
    }
    return max
};
// @lc code=end

