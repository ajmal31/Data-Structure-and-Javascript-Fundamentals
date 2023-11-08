var maxProductDifference = function(nums) {

    let arr=nums.sort((a,b)=>a-b)
    return (arr[nums.length-1]*arr[nums.length-2])-(arr[0]*arr[1])
    
};

