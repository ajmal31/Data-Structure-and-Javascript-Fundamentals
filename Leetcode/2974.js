var numberGame = function(nums) {
    
    let arr=[]
    while(nums.length>0){
        
        let alice=nums.indexOf(Math.min(...nums))
        let aliceElem=nums.splice(alice,1)
        
       let bob=nums.indexOf(Math.min(...nums))
       let bobElem=nums.splice(bob,1)
       arr.push(bobElem[0])
       arr.push(aliceElem[0])
       
    }
    return arr
   
};
//approach 2
var numberGame = function (nums) {

    let arr = nums.sort((a, b) => a - b)
   
    for (let i = 0; i < nums.length; i += 2) {
        if (i + 1 < nums.length) {
            let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp

        }

    }
   return arr

};