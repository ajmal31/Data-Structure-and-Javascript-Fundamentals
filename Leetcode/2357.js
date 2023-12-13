//approach 1
var minimumOperations = function (arr) {
   
    let count=0
    while (true) {
        
        let sum=arr.reduce((acc,curr)=>acc+curr,0)
        if(sum===0)return count
        let min = Number.POSITIVE_INFINITY
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && min > arr[i]) min = arr[i]
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] - min
            if (arr[i] < 0) arr[i] = 0
        }
        count++

    }

};
//Appraoch 2
var minimumOperations = function(nums) {
    

    let set=new Set(nums)
    return set.has(0) ? set.size-1 :set.size
};