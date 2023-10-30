
var numDifferentIntegers = function(word) {



    // the usecase of replace here replace using space if it's letters /\D+/g is regular expression to find letters and trim is used removing whitespace( even after replacing some white space is occur because of we are replaced to whitespace) split is used make an array 
      let arr=word.replace(/\D+/g," ").trim().split(' ')
      //if it is no digit is here split is make an array with single quotes
      if(arr.length===1&&arr[0]=='') return 0
    
    //creating set object to insert array elements conver to number ..set      object only containe unique elements
      let set=new Set()
      arr.forEach((val)=>set.add(BigInt(val)))
      console.log(set)
      return set.size
    
      
    
     
        
    };