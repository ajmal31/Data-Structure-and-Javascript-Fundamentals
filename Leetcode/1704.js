//approach number 1

var halvesAreAlike = function(s) {
    const vowels=['a','A','e','E','i','I','o','O','u','U']
    s=s.split('')
   
    let mid=s.length/2
    let a=s.slice(0,mid)
    let b=s.slice(mid,s.length)
    let aCount=0
    let bCount=0
    for(let i=0;i<a.length;i++)
    {
        for(let j=0;j<vowels.length;j++)
        {
            
            
            if(a[i]===vowels[j])
            {
               aCount++
            }
            if(b[i]===vowels[j]){
                bCount++
            }
        }
        
    }
   
   return aCount===bCount
   
    



};

//approach number 2

var halvesAreAlike = function(s) {
    const vowels=['a','A','e','E','i','I','o','O','u','U']
    let count=0
   for(let i=0;i<s.length/2;i++)
   {
       if(vowels.includes(s[i]))
       count++ 
   }
   for(let i=s.length/2;i<s.length;i++)
   {
       if(vowels.includes(s[i]))
       count--
   }
   return count===0


};
