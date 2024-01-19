var isFascinating = function(n) {

    let n1=n*2
    let n2=n*3
    let final=""+n+n1+n2
    let set=new Set(final)
    return final.length===set.size && !set.has('0')
    
    
};