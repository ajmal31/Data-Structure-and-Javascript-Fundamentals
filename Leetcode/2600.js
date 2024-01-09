var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {

    if(k===numOnes)return k
    else if(k<numOnes)return k
    else if((numOnes+numZeros)>=k)return numOnes
    else if(numOnes+numZeros<k){
        let diff=k-(numOnes+numZeros)
        return numOnes-diff
    }

    
};