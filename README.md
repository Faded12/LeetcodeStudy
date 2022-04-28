
<a href="#144二叉树的前序遍历js">144.二叉树的前序遍历.js</a></br>
<a href="#1419数青蛙js">1419.数青蛙.js</a></br>
<a href="#1两数之和js">1.两数之和.js</a></br>
<a href="#141环形链表js">141.环形链表.js</a></br>
<a href="#1221分割平衡字符串js">1221.分割平衡字符串.js</a></br>
<a href="#19删除链表的倒数第-n-个结点js">19.删除链表的倒数第-n-个结点.js</a></br>
<a href="#1827最少操作使数组递增js">1827.最少操作使数组递增.js</a></br>
<a href="#145二叉树的后序遍历js">145.二叉树的后序遍历.js</a></br>
<a href="#1672最富有客户的资产总量js">1672.最富有客户的资产总量.js</a></br>
<a href="#104二叉树的最大深度js">104.二叉树的最大深度.js</a></br>
<a href="#20有效的括号js">20.有效的括号.js</a></br>
<a href="#237删除链表中的节点js">237.删除链表中的节点.js</a></br>
<a href="#2095删除链表的中间节点js">2095.删除链表的中间节点.js</a></br>
<a href="#344反转字符串js">344.反转字符串.js</a></br>
<a href="#26删除有序数组中的重复项js">26.删除有序数组中的重复项.js</a></br>
<a href="#242有效的字母异位词js">242.有效的字母异位词.js</a></br>
<a href="#46全排列js">46.全排列.js</a></br>
<a href="#70爬楼梯js">70.爬楼梯.js</a></br>
<a href="#509斐波那契数js">509.斐波那契数.js</a></br>
<a href="#71简化路径js">71.简化路径.js</a></br>
<a href="#9回文数js">9.回文数.js</a></br>
<a href="#debouncejs">debounce.js</a></br>
<a href="#83删除排序链表中的重复元素js">83.删除排序链表中的重复元素.js</a></br>
<a href="#constjs">const.js</a></br>
<a href="#deepClonejs">deepClone.js</a></br>
<a href="#94二叉树的中序遍历js">94.二叉树的中序遍历.js</a></br>
<a href="#instanceofjs">instanceof.js</a></br>
<a href="#linkedListjs">linkedList.js</a></br>
<a href="#throttlejs">throttle.js</a></br>
<a href="#stackjs">stack.js</a></br>
## 144.二叉树的前序遍历.js
``` javascript
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = []
    function dfs(root){
        if(!root) return;
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
};
// @lc code=end


```


## 1419.数青蛙.js
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


## 1.两数之和.js
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


## 141.环形链表.js
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


## 1221.分割平衡字符串.js
``` javascript
/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0 ,n = 0
    for(let i = 0;i<s.length;i++){
        s[i]==='R' ? n++ : n--
        if(n===0) res++
    }
    return res
};
// @lc code=end


```


## 19.删除链表的倒数第-n-个结点.js
``` javascript
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

};
// @lc code=end


```


## 1827.最少操作使数组递增.js
``` javascript
/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>=nums[i+1]){
            let n = nums[i] - nums[i+1] + 1
            nums[i+1] = n + nums[i+1]
            res += n
        }
    }
    return res
};
// @lc code=end


```


## 145.二叉树的后序遍历.js
``` javascript
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = []
    function dfs(root){
        if(!root) return;
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
};
// @lc code=end


```


## 1672.最富有客户的资产总量.js
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


## 104.二叉树的最大深度.js
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


## 20.有效的括号.js
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


## 237.删除链表中的节点.js
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


## 2095.删除链表的中间节点.js
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


## 344.反转字符串.js
``` javascript
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1
    while(left<=right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
    return s
};
// @lc code=end


```


## 26.删除有序数组中的重复项.js
``` javascript
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
};
// @lc code=end


```


## 242.有效的字母异位词.js
``` javascript
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
};
// @lc code=end


```


## 46.全排列.js
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


## 70.爬楼梯.js
``` javascript
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = [1,1]
    for(let i = 2;i<=n;i++){
        res[i] = res[i-1] + res[i-2]
    }
    return res[n]
};
// @lc code=end


```


## 509.斐波那契数.js
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


## 71.简化路径.js
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


## 9.回文数.js
``` javascript
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};
// @lc code=end


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


## 83.删除排序链表中的重复元素.js
``` javascript
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let h = head
    while(h && h.next){
        if(h.val === h.next.val){
            h.next = h.next.next
        }else{
            h = h.next
        }
    }
    return head
};
// @lc code=end


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
    if(typeof obj !== 'object' || obj === null) return obj;
    let copy = obj.constructor === Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key])
        }
    }
    return obj
}


// 简洁版本
// 简单版：

const newObj = JSON.parse(JSON.stringify(oldObj));
// 局限性：

// 他无法实现对函数 、RegExp等特殊对象的克隆
// 会抛弃对象的constructor,所有的构造函数会指向Object
// 对象有循环引用,会报错
```


## 94.二叉树的中序遍历.js
``` javascript
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    function dfs(root){
        if(!root) return;
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return res
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

