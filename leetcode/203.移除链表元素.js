/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = {
        next : head
    }
    let h = dummy
    while(h.next){
        if(h.next.val === val){
            h.next = h.next.next
        }else{
            h = h.next
        }
    }
    return dummy.next
};
// @lc code=end

