var findTheArrayConcVal = function(nums) {

    if(nums.length<0)return 0
    if(nums.length===1)return nums[0]
    let concat=0
    while(nums.length>1)
    {
        let num=''+nums.shift()+nums.pop()
        concat+=Number(num)
        
    }
    return nums.length===0 ? concat : concat+nums[0]
  
};