// 快速排序
function quickSort(arr){
    if(arr.length<=1) return arr;
    let midIndex = Math.floor(arr.length/2)
    let mid = arr.splice(midIndex,1)[0]
    let left = [];
    let right = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<mid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),mid,...quickSort(right)]
}

console.log(quickSort([8686,48568,848,21,3485,1330,158]))