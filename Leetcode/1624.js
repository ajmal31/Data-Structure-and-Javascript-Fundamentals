var maxLengthBetweenEqualCharacters = function(s) {
    
    let arr=[]
    let count;
    for(let i=0;i<s.length;i++)
        {
           
            for(let j=i+1;j<s.length;j++)
                {
                    if(s[i]===s[j])
                        {
                            
                            let res=(j-i)-1
                            if(count===undefined) count=res
                            else{
                                if(count<res) count=res
                            }
                            
                        }
                }
        }
    if(count===undefined) return -1
    else return count
    
};