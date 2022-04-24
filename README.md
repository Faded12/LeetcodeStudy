## 1.两数之和
``` javascript
            /*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0;i<nums.length;i++){
        let res = target - nums[i]
        if(res in map){
            return [map[res],i]
        }else{
            map[nums[i]] = i
        }
    }
};
// @lc code=end


```
## 104.二叉树的最大深度
``` javascript
            /*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) +1
};
// @lc code=end


```
## 141.环形链表
``` javascript
            /*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) return true
    }
    return false
};
// @lc code=end


```
## 237.删除链表中的节点
``` javascript
            /*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};
// @lc code=end


```
## 1419.数青蛙
``` javascript
            /*
 * @lc app=leetcode.cn id=1419 lang=javascript
 *
 * [1419] 数青蛙
 */

// @lc code=start
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {

};
// @lc code=end


```
## 20.有效的括号
``` javascript
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


```
## 1672.最富有客户的资产总量
``` javascript
            /*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    while(accounts.length){
        let cur = accounts.pop();
        max = Math.max(cur.reduce((l,n)=>l+n),max)
    }
    return max
};
// @lc code=end


```
## 71.简化路径
``` javascript
            /*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack =[]
    let paths = path.split('/')
    for(let i=0;i<paths.length;i++){
        const p =paths[i]
        if(p=='..'){
            stack.pop()
        }else if(p && p!=='.'){
            stack.push(p)
        }
    }
    return '/'+stack.join('/')
};
// @lc code=end


```
## 46.全排列
``` javascript
            /*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

};
// @lc code=end


```
## 2095.删除链表的中间节点
``` javascript
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

};
// @lc code=end


```
## 509.斐波那契数
``` javascript
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


```
## instanceof.js
``` javascript
            function ins(a,b){
    //指针
 let i = a
 while(i){
   if(i===b.prototype) return true
   i=i.__proto__
 }
 return false 
}

console.log(ins([1],Array))
console.log(ins([1],Object))
console.log(ins(122,String))
```
## const.js
``` javascript
            var __const = function __const(data, value) {
    window.data = value // 把要定义的data挂载到window下，并赋值value
    Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
        enumerable: false,
        configurable: false,
        get: function () {
            return value
        },
        set: function (data) {
            if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
                throw new TypeError('Assignment to constant variable.')
            } else {
                return value
            }
        }
    })
}
__const('a', 10)
console.log(a)
delete a
console.log(a)
for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能
    if (item === 'a') { // 因为不可枚举，所以不执行
        console.log(window[item])
    }
}
a = 20 // 报错
```
## deepClone.js
``` javascript
            function deepClone(obj) {
    // 如果是 值类型 或 null，则直接return
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 定义结果对象
    let copy = {}
    // 如果对象是数组，则定义结果数组
    if (obj.constructor === Array) {
        copy = []
    }
    // 遍历对象的key
    for (let key in obj) {
        // 如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
}

function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    let copy = {}
    if (obj.constructor === Array) {
        copy = []
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return obj
}

function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    let copy = {}
    if (obj.constructor === Array) {
        copy = []
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
}


// 简洁版本
// 简单版：

const newObj = JSON.parse(JSON.stringify(oldObj));
// 局限性：

// 他无法实现对函数 、RegExp等特殊对象的克隆
// 会抛弃对象的constructor,所有的构造函数会指向Object
// 对象有循环引用,会报错
```
## linkedList.js
``` javascript
            // 链表
const d = {
    val:'d'
}
const c = {
    val:'c',
    next:d
}
const b = {
    val:'b',
    next:c
}
const a = {
    val:'a',
    next:b
}

let arr = []
// function dg(obj){
//     arr.push(obj.val)
//     if(!obj.next)return
//     dg(obj.next)
// }
// dg(a)
function dg2(obj){
    while(obj){
        arr.push(obj.val)
        obj = obj.next
    }
}
dg2(a)
console.log(arr)
```
## debounce.js
``` javascript
            // 防抖
const debounce = (fn, wait) => {
    let timer = 0
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

const debounce = (fn, wait) => {
    let timer = 0
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}
```
## throttle.js
``` javascript
            // 节流
const throttle = (fn,wait)=>{
    let lastTime = 0
    return function(...args){
        let now = +new Date()
        if(now - lastTime >wait){
            lastTime = now
            fn.apply(this,args)
        }
    }
}
```
## stack.js
``` javascript
            // const stack = [];
// stack.push(1);
// stack.push(2);
// const item1 = stack.pop();
// const item2 = stack.pop();

// 调用堆栈
function f1(){
    f2()
}
function f2(){
    f3()
}
function f3(){}

f1()
```
