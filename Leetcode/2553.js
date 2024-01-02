var separateDigits = function(nums) {

    let result=[] 
    for(let i=0;i<nums.length;i++)
    {
        let str=nums[i].toString()
        for(let j=0;j<str.length;j++)
        {
            result.push(Number(str[j]))
        }
    }
    return result
     
 };
 //approach two
 var separateDigits = function(nums) {

    let str=nums.join("")
    return str.match(/\d/g)
  };