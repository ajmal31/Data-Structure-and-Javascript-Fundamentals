var findLucky = function(arr) {
    
    let sort=arr.sort((a,b)=>b-a)
    let map=new Map()
    for(let i=0;i<sort.length;i++)
        {
            if(map.has(sort[i]))
                {
                    map.set(sort[i],map.get(sort[i])+1)
                }else
                    {
                        map.set(sort[i],1)
                    }
        }
 for(const key of map)
     {
         if(key[0]===key[1])
             {
                 return key[1]
             }
     }
    return -1
};