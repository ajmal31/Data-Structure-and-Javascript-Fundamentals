
var largestOddNumber = function(num) {

 
    let count;
    
    while(num.length>=0)
    {
       count=0
       if(Number(num[num.length-1])%2!==0){
          
           return num
       }else {
           
            count++
            let range=num.length-count
             num=num.slice(0,range)
             if(!num) return ''
       }   
    }
    return ""
   
   
    
};