var minRemoveToMakeValid = function(s) {
    
    let stack=[]
    let str=s.split('')

    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="(")stack.push(i)
        else{

            if(str[i]===")")
            {
                if(stack.length)stack.pop()
                else str[i]=''
            }
        }
    }
    for(let index of stack)
    {
        str[index]=""
    }
    return str.join('')

    
};