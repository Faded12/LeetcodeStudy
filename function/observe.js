// 触发更新视图
function updateView() {
    console.log('视图更新')
}

const oldArrayFun = Array.prototype;
const newArrayFun = Object.create(oldArrayFun);
['pop','push','shift','unshift','splice'].forEach(item=>{
    newArrayFun[item] = function(){
        updateView();
        oldArrayFun[item].call(this,...arguments)
    }
})


// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听
    observer(value)

    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                // 深度监听
                observer(newValue)
                // 设置新值
                // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
                value = newValue
                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function observer(target){
    if(typeof target !=='object' || target == null){
        return target
    }

    if(target instanceof Array){
        target.__proto__ = newArrayFun
    }

    for(let item in target){
        defineReactive(target,item,target[item])
    }
}

// 准备数据
const data = {
    name: 'name',
    age: 18,
    info: {
        address: 'address' // 需要深度监听
    },
    nums: [1, 2, 3]
}

// 监听数据
observer(data)

