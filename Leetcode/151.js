var reverseWords = function(s) {

    let k=s.split(' ').reverse()
    let res=[]
    for(let i=0;i<k.length;i++)
    {
       if(k[i].length>0)res.push(k[i])
    }
    return res.join(' ')
    
};