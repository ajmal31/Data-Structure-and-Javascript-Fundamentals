var unequalTriplets = function(arr) {
    
    let count=0
     for(let i=0;i<arr.length;i++)
     {
         for(let j=i+1;j<arr.length;j++)
         {
             if(arr[i]!==arr[j]){
                 for(let k=j+1;k<arr.length;k++)
                 {
                     if(arr[i]!==arr[j]&&arr[i]!==arr[k]&&arr[j]!==arr[k])count++
                 }
             }
         }
     }
     return count
 };