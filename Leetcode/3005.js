var maxFrequencyElements = function(nums) {

    let map=new Map()
    for(let i=0;i<nums.length;i++)
    {
        map.set(nums[i],map.get(nums[i])+1|| 1)
    }
    let max=Math.max(...map.values())

    let totalFrequencies=0
    for(const key of map){
        if(key[1]===max) {
            totalFrequencies+=key[1]
        }
    }
    return totalFrequencies
    
    
};