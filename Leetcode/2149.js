var rearrangeArray = function(nums) {
    let neg=[]
    let pos=[]
    let result=[]
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]<0)neg.push(nums[i])
        else pos.push(nums[i])
    }
    for(let i=0;i<pos.length;i++)
    {
       result.push(pos[i],neg[i])
    }
    return result
};