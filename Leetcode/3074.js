var minimumBoxes = function (apple, capacity) {

    let totalApples = apple.reduce((acc, items) => acc + items, 0)
    capacity = capacity.sort((a, b) => b - a)
    let count = 0
    let currSum = 0
    for (const key of capacity) {
        currSum += key
        count++
        if (currSum >= totalApples) return count
    }



};