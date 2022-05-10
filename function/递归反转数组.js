//递归反转
function r(arr){
    var str = []
    function dg(i){
        if(!i.length) return;
        str.push(i.pop())
        return dg(i)
    }
    dg(arr)
    return str
}

let arr = ['你好','我的','再加']
console.log(r(arr).join(','))

console.log(setImmediate)
console.log(setTimeout)