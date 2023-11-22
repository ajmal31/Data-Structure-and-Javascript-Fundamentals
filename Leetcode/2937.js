
var findMinimumOperations = function(s1, s2, s3) {

    let n1=s1.length;
    let n2=s2.length;
    let n3=s3.length
   let count=0
   //Limit of the Loop minimum Length occured String (s1||s2||s3)
    for(let i=0;i<Math.min(n1,n2,n3);i++)
    {
        //check whether each position Charactor is same if it not break occure
        if(s1[i]!==s2[i]) break
        if(s2[i]!==s3[i]) break
        //if it same take the count
        count++
    }
    //if count ===0 means each string first charactor also diffrent from other strings 
    //so that will be never become equal 
    if(count===0) return -1
    //if it not "0" subsctract the iteration count from each strings length
    // Hear may be you have doubt negative value occur? "never" because of that out iteration limit the minimum length string 
    return (n1-count)+(n2-count)+(n3-count)
      
       
   };