function ins(left,right){
  left = left.__proto__
  right = right.prototype
  while(left){
    if(left === right) return true;
    left = left.__proto__
  }
  return false
}

console.log(ins([1],Array))
console.log(ins([1],Object))
console.log(ins(122,String))
console.log(ins({},Function))
console.log(ins(function(){},Function))
console.log(ins([],Function))