var resultArray = function(nums) {
    if(nums.length<2)return nums
    let arr1=[]
    let arr2=[]
    arr1.push(nums[0])
    arr2.push(nums[1])
    for(let i=2;i<nums.length;i++)
    {   
            if(arr1[arr1.length-1]>arr2[arr2.length-1])arr1.push(nums[i])
            else arr2.push(nums[i])

    }
    return [...arr1,...arr2]
    
};