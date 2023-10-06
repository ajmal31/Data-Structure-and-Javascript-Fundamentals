var searchInsert=function(nums,target)
{
    let i=0
    while(i<nums.length)
    {
        if(nums[i]>target)
        break
        i++
    }
    return i
}