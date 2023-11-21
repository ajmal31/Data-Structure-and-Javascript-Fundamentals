
var targetIndices = function(nums, target) {

    nums=nums.sort((a,b)=>a-b)
    result=[]
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===target)result.push(i)
    }
    return result
};