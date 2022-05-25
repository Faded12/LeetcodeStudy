//冒泡排序
function bubbleSort(arr){
    let temp;
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([21,213,32,1212,312,432312,324,13667,345]))
console.log(bubbleSort([998,484,5686,4562,120,2122,0,12,6]))
/**********/