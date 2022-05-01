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