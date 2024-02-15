var singleNumber = function(nums) {

    let obj={}
    for(let key of nums){
  
        if(obj[key]!==undefined) delete obj[key]
        else {
            obj[key]=key
        }
    }
  
    return Object.values(obj)
      
  };

  //next approach
  var singleNumber = function(nums) {

    let map=new Map()
    let res=[]
    for(let i=0;i<nums.length;i++)
    {
        map.set(nums[i],map.get(nums[i])+1||1)
    }
    for(const key of map){
        if(res.length===2)return res
        if(key[1]===1)res.push(key[0])
    }
    return res
     
 };