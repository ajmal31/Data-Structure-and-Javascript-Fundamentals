const maximum69Number=n=>{
    let str=n.toString().split('')
    for(let i=0;i<str.length;i++){
       if(str[i]==='6'){
          str[i]='9'
          return Number(str.join(''))
       } 
    }
     return n
 }