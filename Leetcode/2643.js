var rowAndMaximumOnes = function (mat) {

    let map = new Map()

    for (let i = 0; i < mat.length; i++) {
        let arr = mat[i]
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 1) {

                map.set(i, map.get(i) + 1||1)
            }

        }
    }
    let maxCount
    let index
    for(const key of map){
    
        if(!maxCount){
            maxCount=key[1]
            index=key[0]
        }else if (maxCount<key[1]){
            maxCount=key[1]
            index=key[0]
        }
    }
    return !maxCount&&!index ? [0,0]:[index,maxCount]

};