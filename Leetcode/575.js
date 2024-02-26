var distributeCandies = function(candyType) {
    
    let set=new Set([...candyType])
    let n=candyType.length/2
    if(set.size<n)return set.size
    else return n
};