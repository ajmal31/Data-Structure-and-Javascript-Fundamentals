var firstMissingPositive = function(nums) {

    let max=Math.max(...nums)
    let set=new Set([...nums])
    for(let i=1;i<=max;i++)
    {
      if(!set.has(i))return i

      if(i===max)max+=1
    }
    return 1
    
};