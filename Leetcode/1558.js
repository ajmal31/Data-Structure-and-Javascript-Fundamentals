var sumOddLengthSubarrays = function(arr) {
    
    let result=0;
    let temp=[]
  for(let i=0;i<arr.length;i++)
      {
          for(let j=i;j<arr.length;j++)
              {
                 temp.push(arr[j])
                  if(temp.length%2!==0)
                      {
                          let sum=temp.reduce((acc,val)=>acc+val,0)
                       
                          result+=sum
                      }
              }
          temp=[]
      }
    return result
    
    
    
};