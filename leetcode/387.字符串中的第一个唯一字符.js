/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    for(let i = 0;i<s.length;i++){
        let cur = map[s[i]] || 0;
        map[s[i]] = cur + 1
    }
    console.log(map)
    for(let j in map){
        if(map[j]===1) return s.indexOf(j)
    }
    return -1
};
// @lc code=end

