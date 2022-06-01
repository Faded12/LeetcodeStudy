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
    return copy
}

/**
 * 深拷贝
 * @param {obect} obj 要拷贝的对象
 * @returns 拷贝后
 */
function deepClone(obj){
    if(typeof(obj)!=='object' || obj==null) return obj;
    let copy = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
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