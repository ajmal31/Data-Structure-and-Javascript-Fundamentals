//approach one
var applyOperations = function(nums) {

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===nums[i+1]){
           nums[i]=nums[i]*2
           nums[i+1]=0

        }
    }
   let zeros=[]
   let nonZeros=[]
   for(let i=0;i<nums.length;i++)
   {
       if(nums[i]!==0)nonZeros.push(nums[i])
       else zeros.push(nums[i])
   }
   return [...nonZeros,...zeros]
  
    
};
//approach 2
var applyOperations = function(nums) {

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===nums[i+1]){
           nums[i]=nums[i]*2
           nums[i+1]=0

        }
    }
   return nums.sort((a,b)=>!a-!b)
  
    
};