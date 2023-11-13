
var getLucky = function (s, k) {

    let ascci = ''
    for (let i = 0; i < s.length; i++) {
        let code = (s[i].charCodeAt(0)) - 96
        ascci += code
    }

    let result = 0
    for (let i = 0; i < ascci.length; i++) {
        result += Number(ascci[i])
    }

    let m = k
    let count = 1
    let temp = 0
    while (count < m) {
        let str = result.toString().split('')

        if (str.length === 1) return Number(str)

        for (let j = 0; j < str.length; j++) {
            temp += Number(str[j])
        }
        result = temp
        temp = 0
        count++
    }
    return Number(result)

};