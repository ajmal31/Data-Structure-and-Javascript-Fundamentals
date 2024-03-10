var intersection = function(nums1, nums2) {

    let set=new Set([...nums1])
    let result=[]
    for(const key of nums2){

        if(set.has(key)){

            result.push(key)
            set.delete(key)
        }
    }
    return result
    
    
};