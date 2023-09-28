//approach 1
var sortArrayByParity = function(nums) {
    
    let final=[]
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]%2===0)
                {
                    final.push(nums[i])
                }
        }
     for(let i=0;i<nums.length;i++)
        {
            if(nums[i]%2!==0)
                {
                    final.push(nums[i])
                }
        }
     
     return final
     
 };

//aproach 2
var sortArrayByParity = function(nums) {
    
    let odd=[]
    let even=[]
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]%2!==0)
                {
                    odd.push(nums[i])
                }else
                    {
                        even.push(nums[i])
                    }
        }
     return even.concat(odd)
     
 };