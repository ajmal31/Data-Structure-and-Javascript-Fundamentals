let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16]
let sum = 0

function primeSum(arr) {

    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                count++
                break
            }
        }
        if (count === 0 && arr[i] !== 1) {
            sum += arr[i]
        }
    }
    return sum
}
let k = primeSum(arr)
console.log("result", k)