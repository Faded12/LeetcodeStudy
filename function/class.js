//class
function mixins(...list){
    return function(target){
        Object.assign(target.prototype,...list)
    }
}

const Foo = {
    foo(){
        console.log('foo...')
    }
}

// @mixins(Foo)
// class MyClass{/************/}

// let obj = new MyClass()
// obj.foo()
//

class People{
    constructor(name){
        this.name = name
    }
    say(){
        console.log(`${this.name}明`)
    }
}

const x = new People('小')

class Student extends People{
    constructor(name,num){
        super(name)
        this.num = num;
    }
}

const b = new Student(222)

console.log(b.name)