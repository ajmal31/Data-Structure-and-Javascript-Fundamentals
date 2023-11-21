
var countWords = function (words1, words2) {

    let map1 = new Map()
    let map2 = new Map()
    //seting Each element of the word1 to map1 with exact occured counts
    for (let i = 0; i < words1.length; i++) {
        map1.set(words1[i], map1.get(words1[i]) + 1 || 1)
    }
    //seting Each element of the word2 to map2 with exact occured counts
    for (let i = 0; i < words2.length; i++) {
        map2.set(words2[i], map2.get(words2[i]) + 1 || 1)
    }

    //Take a variable initilize 0
    let count = 0;
    //Iterrating the Map1 if it is the element occur once check whether element exist
    //in map2 with same occurence (1) if it true increment the count
    for (const key of map1) {
        if (key[1] === 1) {
            if (map2.get(key[0]) === 1) count++
        }
    }
    //after iterating Return the count (Result)
    return count
};