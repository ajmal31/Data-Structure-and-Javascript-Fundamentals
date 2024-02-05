var maximumTripletValue = function(nums) {
    let max=undefined
    let index
    for(let i=0;i<nums.length-1;i++)
    {
        for(let j=i+1;j<nums.length-1;j++)
        {
            for(let k=j+1;k<nums.length;k++)
            {
                let temp=(nums[i]-nums[j])*nums[k]
                if(!max)max=temp
                else if(max<temp)max=temp
            }
            
        }
    }
 
    return max<0 ? 0 :max



};