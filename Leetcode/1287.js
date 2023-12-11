var findSpecialInteger = function (arr) {

    let limit = Math.ceil(arr.length / 4)
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {

        map.set(arr[i], map.get(arr[i]) + 1 || 1)
    }
    let max=0
    let count=0
    for (const key of map) {
        if (key[1] >= limit) {
           
                if (count <= limit) {
                    count = limit
                    max = key[0]
                }
            
        }
    }
    return max


};