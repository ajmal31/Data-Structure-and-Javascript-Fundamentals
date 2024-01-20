var missingInteger = function(nums) {

    let set=new Set(nums)
    let sum=nums[0]
    let i=1;
    while(i<nums.length&&nums[i]===nums[i-1]+1)
    {
       sum+=nums[i]
        i++
    }
    while(set.has(sum))sum++
    return sum

    
};