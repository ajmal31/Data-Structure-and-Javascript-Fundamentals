var sumOfUnique = function(arr) {

    let map=new Map()
    for(let i=0;i<arr.length;i++)
    {
        if(map.has(arr[i]))
        {
            map.set(arr[i],map.get(arr[i])+1)
        }else
        map.set(arr[i],1)
    }
  
    let sum=0
    for(const key of map)
    {
        if(key[1]===1)
        {
            sum+=key[0]
        }
    }
    return sum
    
};