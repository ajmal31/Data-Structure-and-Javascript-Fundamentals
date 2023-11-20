
var sumCounts = function (nums) {

    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let arr = nums.slice(i, j + 1)
            let set = new Set(arr)
            let square = set.size * set.size
            sum += square
        }
    }
    return sum

};