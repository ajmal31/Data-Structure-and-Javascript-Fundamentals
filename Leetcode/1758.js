
var minOperations = function(s) {
    const length = s.length;
   let count1 = 0;
   let count2 = 0;

   for (let i = 0; i < length; i++) {
       if (i%2===0) {
          
          if(s[i]!=='0')count1++
          if(s[i]!=="1") count2++
          
       } else {
          
          if(s[i]!=='1')count1++
          if(s[i]!=='0')count2++
       }
   }

   return Math.min(count1, count2);

};

//Approach two

var minOperations = function (s) {
   let count = 0
   let count2=0

   for (let i = 0; i < s.length; i++) {

           if (i % 2 === 0 && s[i] !== "0") count++
           if (i % 2 !== 0 && s[i] !== "1") count++

           if (i % 2 === 0 && s[i] !== "1") count2++
           if (i % 2 !== 0 && s[i] !== "0") count2++

       
   }
   return Math.min(count,count2)



};