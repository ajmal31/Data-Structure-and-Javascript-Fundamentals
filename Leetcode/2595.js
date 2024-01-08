var evenOddBit = function(n) {

    let binary=n.toString(2)
    let even=0;
    let odd=0
    binary=binary.split('').reverse().join('')
    for(let i=0;i<binary.length;i++)
    {
        if(i%2===0)
        {
           even+=Number(binary[i])
        }else odd+=Number(binary[i])
    }
    return [even,odd]
};