var searchRange = function(nums, target) {
    
    let flag=false
    let temp=[]
    for(let i=0;i<nums.length;i++)
        {
              
         if(nums[i]===target)
             {
                 flag=true
                 temp.push(i)
             }
        }
    let final=[]
    if(flag)
    final.push(temp[0],temp[temp.length-1])
    else
        final.push(-1,-1)
    return final
    
};