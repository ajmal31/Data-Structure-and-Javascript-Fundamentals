var getMaximumGenerated = function(n) {
    if(n===0) return n
   let nums=new Array(n)
   nums[0]=0;
   nums[1]=1
   for(let i=1;i<nums.length;i++)
   {
       if( 2<= 2 * i <= n &&  2 * i + 1 <= n)
       {
           nums[2 * i] = nums[i]
           nums[2 * i + 1] = nums[i] + nums[i + 1]
       }
   }
   return Math.max(...nums)
   
 


   
};