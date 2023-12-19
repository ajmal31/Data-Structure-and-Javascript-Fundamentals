var sortSentence = function(s) {

    let arr=s.split(' ')
    let arr2=new Array(arr.length)
    for(let i=0;i<arr.length;i++)
    {   let elem=arr[i]

        let pos=elem[elem.length-1]-1
        elem=elem.slice(0,elem.length-1)
        arr2[pos]=elem
       
    }
    return arr2.join(' ')
    
};