/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length-1,n = matrix[0].length-1;
    let i = 0;
    while(i<=m && n>=0){
        if(target < matrix[i][n]){
            n--;
        }else if(target > matrix[i][n]){
            i++;
        }else{
            return true;
        }
    }
    return false;
};
// @lc code=end

