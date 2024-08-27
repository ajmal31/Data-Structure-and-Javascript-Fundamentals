function findPalindrom(str){
    
    for(let i=0;i<(str.length/2);i++)
    {
        let temp=str.slice(i,str.length-i)
        if(temp.length>1){
            let rev=temp.split('').reverse().join('')
            if(temp===rev)return temp
        }else {
            break
        }
        
    }
    return "No palidrom exists in this word"
}
let word="abamadampqr"
let k=findPalindrom(word)
console.log(k)