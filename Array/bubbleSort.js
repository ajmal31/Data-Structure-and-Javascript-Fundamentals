let arr = [500, 7, 8734, 546, 845, 34, 234, 132, 12]

const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr

}

console.log("before sorting",arr)
let result=bubbleSort(arr)
console.log("after sorting",result)
