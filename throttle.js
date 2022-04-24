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