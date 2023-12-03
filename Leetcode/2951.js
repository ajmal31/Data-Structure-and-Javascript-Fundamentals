var findPeaks = function (arr) {

    let result = []
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) result.push(i)
    }
    return result

};