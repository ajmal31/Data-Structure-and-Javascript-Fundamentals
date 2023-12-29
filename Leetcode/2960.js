var countTestedDevices = function(arr) {

    let testedDevices=0
    let decrease=false
    let count=0
    for(let i=0;i<arr.length;i++)
    {
        if(decrease)
        {
            if(arr[i]-count>0){
                testedDevices++
                count++
            }                
        }else{
            if(arr[i]>0)
            {
                testedDevices++
                count++
                decrease=true
            }
        }
    }
    return testedDevices
    
};