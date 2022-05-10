// //node事件循环
// const fs = require('fs');
// // 首次事件循环执行
// console.log('start');
// setTimeout(() => { // 新的事件循环的起点
//     console.log('setTimeout1'); 
// }, 10);
// /// 将会在新的事件循环中的阶段执行
// fs.readFile('./stack.js', {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err;
//     console.log('read file success');
// });
// setTimeout(() => { // 新的事件循环的起点
//     console.log('setTimeout2'); 
// }, 0);
// /// 该部分将会在首次事件循环中执行
// Promise.resolve().then(()=>{
//     console.log('Promise callback');
// });
// /// 执行 process.nextTick
// process.nextTick(() => {
//     console.log('nextTick callback');
// });
// // 首次事件循环执行
// console.log('end');

// -------

// const fs = require('fs');
// setTimeout(() => { // 新的事件循环的起点
//     console.log('1'); 
//     fs.readFile('./stack.js', {encoding: 'utf-8'}, (err, data) => {
//         if (err) throw err;
//         console.log('read file sync success');
//     });
// }, 0);
// /// 回调将会在新的事件循环之前
// fs.readFile('./stack.js', {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err;
//     console.log('read file success');
// });
// /// 该部分将会在首次事件循环中执行
// Promise.resolve().then(()=>{
//     console.log('poll callback');
// });
// // 首次事件循环执行
// console.log('2');

// ------

const fs = require('fs');
setTimeout(() => {
    console.log("timer1");

    Promise.resolve().then(function () {
        console.log("promise1");
    });
}, 0);

// poll阶段执行
fs.readFile('./stack.js', () => {
    // 在poll阶段里面 如果有setImmediate优先执行，setTimeout处于事件循环顶端 poll下面就是setImmediate
    setTimeout(() => console.log('setTimeout'), 0)
    setImmediate(() => console.log('setImmediate'), 0)
})

process.nextTick(() => {
    console.log("nextTick");
});