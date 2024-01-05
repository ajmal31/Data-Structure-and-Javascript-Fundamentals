var vowelStrings = function (words, left, right) {

    let vowels = {a:true,e:true,i:true,o:true,u:true}
    let count = 0
    for (let i = left; i <= right; i++) {
 
            let str = words[i]
            if(vowels[str[0]]&&vowels[str[str.length-1]])count++
           

    }
    return count

};