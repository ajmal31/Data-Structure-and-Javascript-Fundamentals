var majorityElement = function(nums) {
  
    let map=new Map()
    
    for(let i=0;i<nums.length;i++)
        {
            if(map.has(nums[i]))
                {
                    
                    let c=map.get(nums[i])
                  
                    map.set(nums[i],map.get(nums[i])+1)
                }else
                    {
                        map.set(nums[i],1)
                    }
        }
    
         let max=0
        for(const key of map)
            {
               if(max<key[1])
                   {
                       max=key[1]
                       result=key[0]
                   }
            }
   
    return result
    
    
};