var findLeastNumOfUniqueInts = function (arr, k) {

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1)
    }

    let arr2 = [...map.values()]

    let count = 0
    arr2.sort((a, b) => a - b)

    for (let i = 0; i < arr2.length; i++) {
        
        if (arr2[i] <= k) {
            k -= arr2[i]
            arr2[i] = 0
        }
        if (arr2[i] !== 0) count++
    }
    return count

};