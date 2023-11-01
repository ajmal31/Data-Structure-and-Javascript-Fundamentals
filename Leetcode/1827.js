
var minOperations = function(arr) {
    
    let result=0
   
     for(let i=0;i<arr.length-1;i++)
     {   
         if(arr[i]>=arr[i+1]){

            let temp=arr[i+1]
            arr[i+1]=arr[i]+1
            let diff=arr[i+1]-temp 
            result=result+diff

         }
         
     }
     return result 
   
};