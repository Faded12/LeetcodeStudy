//冒泡排序
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j =i;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([21,213,32,1212,312,432312,324,13667,345]))
console.log(bubbleSort([998,484,5686,4562,120,2122,0,12,6]))
/**********/