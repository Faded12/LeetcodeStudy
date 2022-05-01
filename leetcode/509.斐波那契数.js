/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = [0,1]
    let i = 2
    while(i<=n){
        arr[i] = arr[i-1] + arr[i-2]
        ++i
    }
    return arr[n]
};
// @lc code=end

