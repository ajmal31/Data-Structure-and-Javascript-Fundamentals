var triangleType = function(nums) {

    let a="equilateral"
    let b="isosceles"
    let c="scalene"
    let set=new Set([...nums])
    if(set.size===1)return a
    if(nums[0]+nums[1]>nums[2]&&nums[1]+nums[2]>nums[0]&&nums[0]+nums[2]>nums[1])
    {
        if(set.size===2)return b
        else return c
    }
    return "none"
    
};
