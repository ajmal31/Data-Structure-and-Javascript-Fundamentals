
var thirdMax = function(nums) {
     
    let set=new Set() 
    let max=Number.NEGATIVE_INFINITY
    let secMax=Number.NEGATIVE_INFINITY
    let thirdMax=Number.NEGATIVE_INFINITY
    for(let i=0;i<nums.length;i++)
    {
        set.add(nums[i])
    }
   
   
   for(const key of set)
   {
   
       if(key>max){
           thirdMax=secMax
           secMax=max
           max=key
           
       }else if(key>secMax){
           thirdMax=secMax
           secMax=key

       }else if(key>thirdMax){
           thirdMax=key
       }
       
   }
   
   if(set.size<=2) return max
   else return thirdMax
   
    
    
};