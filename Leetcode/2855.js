var minimumRightShifts = function(nums) {
     
    let count=0
    if(isSorted(nums))return count

    while(count!==nums.length)
    {
       nums.unshift(nums.pop())
       count++
       let k=isSorted(nums)
       if(k)return count
    }
   return -1
   function isSorted(arr)
   {
       for(let i=0;i<arr.length;i++)
       {
           if(arr[i]>arr[i+1])return false
       }
       return true
   }
   
};