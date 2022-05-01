function ins(a,b){
    //指针
 let i = a
 while(i){
   if(i===b.prototype) return true
   i=i.__proto__
 }
 return false 
}

console.log(ins([1],Array))
console.log(ins([1],Object))
console.log(ins(122,String))