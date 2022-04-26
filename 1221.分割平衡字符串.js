/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0 ,n = 0
    for(let i = 0;i<s.length;i++){
        s[i]==='R' ? n++ : n--
        if(n===0) res++
    }
    return res
};
// @lc code=end

