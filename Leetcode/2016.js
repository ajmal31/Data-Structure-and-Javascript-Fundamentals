
var maximumDifference = function(nums) {

    
    let maxDiff=-1
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]<nums[j])
            {
              
               let diff=nums[j]-nums[i]
              
               if(maxDiff<diff) maxDiff=diff
              
            }
        }
    }
    return maxDiff
    
};