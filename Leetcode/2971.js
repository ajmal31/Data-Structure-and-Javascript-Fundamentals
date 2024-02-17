var largestPerimeter = function(nums) {

    nums = nums.sort((a, b) => a - b)
    let sum = nums.reduce((acc, elem) => acc + elem, 0)
    
    for (let i = nums.length - 1; i >= 2; i--) {
        sum -= nums[i]
        if (nums[i] < sum) return sum + nums[i]
    }
    return -1
};