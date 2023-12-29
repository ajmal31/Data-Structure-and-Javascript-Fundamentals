var getCommon = function(nums1, nums2) {

    let set=new Set(nums1)
    for(const key of nums2)
    {
        if(set.has(key))return key
    }
    return -1
    
};