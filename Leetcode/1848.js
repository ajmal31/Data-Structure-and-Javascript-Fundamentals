
var getMinDistance = function(nums, target, start) {

    let min=undefined
     for(let i=0;i<nums.length;i++)
     {
         if(nums[i]===target)
         {
            let check=Math.abs(i-start)
            if(min===undefined) min=check
            else {
                if(check<min){
                    min=check
                }
            }
         }
     }
     return min
     
 };