
var maximizeSum = function(nums, k) {

    const num=Math.max(...nums)
    result=num
    max=num+1
    for(let i=0;i<k-1;i++)
    {
        
        result=result+max
        
        max=max+1
    }
   return result
    
};