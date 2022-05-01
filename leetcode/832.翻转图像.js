/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let res = []
    for(let i = 0;i<image.length;i++){
        let d = image[i].reverse()
        let e = []
        for(let j = 0;j<d.length;j++){
            e.push(d[j]^1)
        }
        res.push(e)
    }
    return res
};
// @lc code=end

