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