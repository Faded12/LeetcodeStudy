//getType 获取对象类型
function getType(obj) {
    let type = typeof obj;
    if (type !== "object") { // 先进行typeof判断，如果是 基础数据类型，直接返回
        return type;
    }
    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); // 注意正则中间有个空格
}
getType([]) // "Array" typeof []是object，因此toString返回
getType('123') // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null) // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined) // "undefined" typeof 直接返回
getType() // "undefined" typeof 直接返回
getType(function () {}) // "function" typeof能判断，因此首字母小写
getType(/123/g) //"RegExp" toString返回