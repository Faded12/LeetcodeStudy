function quickSort(arr){
    if(arr.length===1)return arr[0];
    let left = [];
    let right = [];
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    console.log(left)
    return quickSort(left).concat(quickSort(right))
}

console.log(quickSort([8686,48568,848,21,3485,1330,158]))