var maxOperations = function(nums) {

    let sum=nums[0]+nums[1]
    let count=0
    while(true){
        if(nums.length<2)return count
        let elem1=nums.shift()
        let elem2=nums.shift()
        if(count==0)count++
        else{
          if(elem1+elem2!==sum)return count
          count++
        }

    }
    
};
//second approach

var maxOperations = function(nums) {

    let sum=nums[0]+nums[1]
    let count=1
    for(let i=2;i<nums.length;i+=2)
    {
        if(nums[i]+nums[i+1]!==sum)return count
        count++
       
    }
    return count
    
};