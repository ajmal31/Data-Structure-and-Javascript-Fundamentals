var shuffle = function(nums, n) {
    let final=[]
    for(let i=0;i<nums.length;i++){
        final.push(nums[i],nums[n+i])
        if(final.length===n*2)
            return final
    }
    
};