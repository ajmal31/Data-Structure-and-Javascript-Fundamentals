
var removeElement = function(nums, val) {
    
   
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            if(right!==left)
                {
                     nums[left] = nums[right];
                     left++;
                }else
                    {
                        left++
                    }
           
        }
    }
  
    return left;
    
};