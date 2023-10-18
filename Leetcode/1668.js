var maxRepeating = function(arr1, arr2) {
    let count=0
    let word=arr2
    while(arr1.includes(word))
    {
        count++
        word=arr2+word
    }
    return count
 };