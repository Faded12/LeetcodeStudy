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
function f3(){
    //后进先出/////
}

f1()