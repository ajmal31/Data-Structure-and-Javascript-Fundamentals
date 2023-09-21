var subtractProductAndSum = function(n) {
    

    let mult=1;
    let sum=0;
    while(n>0)
        {
             let num=n%10;
                 mult*=num
                 sum+=num
                 n=Math.floor(n/10)
        }
    
    return mult-sum
   
    
    
};