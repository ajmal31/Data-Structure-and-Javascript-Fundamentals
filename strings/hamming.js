// Que 1 = find hamming distance of words
// word1="helo"
// word2="hrlo"
// if you need to find hamming distance the both words length should be same

function hammingDistance(str1,str2){
    let diff=0
    if(str1.length!==str2.length) return -1
    else {

        for( let i =0;i<str1.length;i++)
        {
            if(str1[i]!==str2[i])diff++
        }
    }
    return diff

}

console.log(hammingDistance("helk","hrlo"))