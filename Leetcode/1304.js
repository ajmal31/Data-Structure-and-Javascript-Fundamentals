var sumZero = function(n) {
    
    
    let arr = [];
     let len = n;
     
     if( n%2 != 0) {
         arr.push(0);
         len = n-1;
     }
     
     for(let i = 1; i<len; i=i+2) {
        arr.push(i);
        arr.push(-i);       
     }
     
     return arr  
     
 };