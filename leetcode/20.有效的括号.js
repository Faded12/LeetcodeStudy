/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    const obj = {
        '{':'}',
        '[':']',
        '(':')',
    }
    for(let i=0;i<s.length;i++){
        if(s[i] in obj){
            stack.push(s[i])
        }else{
            if(s[i] !== obj[stack.pop()]){
                return false
            }
        }
    }
    return !stack.length
};
// @lc code=end

