var removeTrailingZeros = function(num) {
    let count=1 
    while(true){
        if(num[num.length-count]!=='0')return num
        else{
          num=num.slice(0,num.length-count)
        } 
    }
    
 
 };