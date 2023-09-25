var sortString = function(s) {
    s = s.split("").sort(); 
    let map = new Map(); 
     for(let i =0; i< s.length; i++){
         if(map.has(s[i]) === false){
            map.set(s[i],1)
          }
         else{
             map.set(s[i], map.get(s[i])+1) 
         }
     }    
     let str ="";
     let dir = 1;
     while(map.size>0){
        let tempStr =""; 
        map.forEach((value, key, map) => { 
               if(dir ===1){
                   tempStr= tempStr+ key;
               } 
                else{ 
                   tempStr= key+ tempStr;
               }
               value = value-1;
                if(value === 0){
                     map.delete(key)
                }
                else{
                     map.set(key,value);
                }
        })
         dir= dir*-1;
         str = str + tempStr; 
      }
     
     return str; 
 };