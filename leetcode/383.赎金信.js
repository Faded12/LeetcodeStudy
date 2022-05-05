/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {}
    for(let i = 0;i<magazine.length;i++){
        let cur = map[magazine[i]] || 0
        map[magazine[i]] = cur + 1
    }
    for(let j = 0;j<ransomNote.length;j++){
        let cur = map[ransomNote[j]] || 0
        if(cur===0) return false;
        map[ransomNote[j]] = cur - 1
    }
    return true
};
// @lc code=end

