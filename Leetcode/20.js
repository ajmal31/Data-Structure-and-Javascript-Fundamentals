var isValid = function (s) {
    let stack = []
    for (let key of s) {

        if (key === "(" || key === "[" || key === "{") stack.push(key)
        else {
            if (!stack.length ||

                key === ")" && stack[stack.length - 1] !== "(" ||
                key === "]" && stack[stack.length - 1] !== "[" ||
                key === "}" && stack[stack.length - 1] !== "{"
            ) return false
            else stack.pop()
        }


    }
    return stack.length===0 ? true : false
};