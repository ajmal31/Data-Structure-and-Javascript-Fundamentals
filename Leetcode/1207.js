
var uniqueOccurrences = function (arr) {

    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        
            map.set(arr[i], map.get(arr[i]) + 1||1)

      
    }
    let set=new Set(map.values())
    return set.size===map.size

};