/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {}
    for(let i = 0;i<s.length;i++){
        let val = map[s[i]] || 0
        map[s[i]] = val + 1
    }
    for(let j = 0;j<t.length;j++){
        let val = map[t[j]] || 0
        if(val===0) return t[j];
        map[t[j]] = val - 1
    }
};
// @lc code=end

