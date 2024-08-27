
function findTheFirstNonRepeatedCharactor(str){

    let map=new Map()
    for(let key of str){
        map.set(key,map.get(key) +1 || 1)
    }
    for(let key of map ){
       if(key[1]===1)return key[0]
    }
    return "no unique letter in this word"
    
}
let k=findTheFirstNonRepeatedCharactor("swiss")
console.log(k)