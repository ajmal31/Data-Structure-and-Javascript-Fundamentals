var findMaxK = function(nums) {

    let set=new Set()
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]>0)set.add(nums[i])
    }
     let max=-1
    for(let i=0;i<nums.length;i++)
    {  
           if(nums[i]<0)  
           if(set.has(Math.abs(nums[i]))){

               if(max<Math.abs(nums[i]))max=Math.abs(nums[i])

           }       
    }
    return max 
    
};