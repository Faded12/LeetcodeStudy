/*
 * @lc app=leetcode.cn id=2073 lang=javascript
 *
 * [2073] 买票需要的时间
 */
// @lc code=start
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
 var timeRequiredToBuy = function(tickets, k) {
    let num = 0;
    while(tickets[k]>0){
        for(let i = 0;i<tickets.length;i++){
            if(tickets[i]>0) {
                let n = tickets[i]
                tickets[i] = --n
                num++
            }
            if(tickets[k]===0) return num;
        }
    }
};
// @lc code=end

