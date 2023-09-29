var kLengthApart = function(arr, k) {
    
    
    
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===1)
                {
                    for(let j=i;j<arr.length;j++)
                        {
                            if(arr[i]===arr[j]&&i!=j)
                                {
                                    let check=j-i
                                    if(check>=(k+1))
                                        {
                                            i=j
                                            continue
                                        }else return false
                                }
                        }
                }
        }
     return true
 };
 
 //aproach two
 var kLengthApart = function(nums, k) {
    let currentIndex = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - currentIndex <= k) {
                return false;
            } else {
                currentIndex = i;
            }
        }
    }
    
    return true;
};