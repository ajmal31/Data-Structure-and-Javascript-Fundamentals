var areaOfMaxDiagonal = function (dimensions) {

    let maxSquare;
    let lengthValue
    let widthValue
    let arr = dimensions.flat(dimensions.length)

    for (let i = 0; i < arr.length; i += 2) {
        let len = arr[i]
        let wid = arr[i + 1]
        //find the squareRoot of these values
        let squareRoot = Math.sqrt(len * len + wid * wid)
        //find the maximum value of sqaure if founded new maxSqaure assing to lengthValue to len 
        //andwidthValue to wid

        if (!maxSquare)
        {
            maxSquare = squareRoot
            lengthValue = len
            widthValue = wid

        } else if (maxSquare && maxSquare < squareRoot)
        {

            maxSquare = squareRoot
            lengthValue = len
            widthValue = wid
            //if it'same check current length and exist length give priority to maximum length 
        } else if (maxSquare === squareRoot)
        {

            if (lengthValue < len)
            {
                lengthValue = len
                widthValue = wid

            }
        }
    }

    return lengthValue * widthValue

};