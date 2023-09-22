var commonChars = function(a) {
    
    let temp=[]
let set=new Set()
let count=0;
    
    
for(let i=0;i<a.length;i++)
{
    let str=a[i]
    for(let j=0;j<str.length;j++)
    {
        if(i==0)
        {
            temp.push(str[j])
        }
        
        else    {
            console.log(temp)
            
            console.log(a[i])
            for(let k=0;k<temp.length;k++)
            {
                
                 if(str[j]===temp[k])
                 {
                   
                 }
                 else
                {
                    count++
                    
                     if(k===temp.length-1)
                     {
                         temp.pop()
                     }else
                     {
                         for(let m=k;m<temp.length;m++)
                         {
                             temp[m]=temp[m+1]
                         }
                         temp.length--
                         
                     }
                 }
                    
                
            }
           
            
        }
     }
}
    
};