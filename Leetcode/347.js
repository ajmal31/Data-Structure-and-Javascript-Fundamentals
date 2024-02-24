var topKFrequent = function(nums, k) {

    let map=new Map()
    let result=[]
    for(const key of nums)
    {
        map.set(key,map.get(key)+1||1)
    }

    let arr=[...map.values()]
    arr.sort((a,b)=>b-a)
    arr=arr.slice(0,k)
    
    for(const key of map){

        if(arr.includes(key[1]))result.push(key[0])
    }
    return result
    
 
    
};