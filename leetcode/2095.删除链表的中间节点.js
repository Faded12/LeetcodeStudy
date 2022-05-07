/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let dummy = {
        next:head
    }
    let slow = dummy;
    let fast = dummy;
    while(fast){
        fast = fast.next.next;
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};
// @lc code=end

