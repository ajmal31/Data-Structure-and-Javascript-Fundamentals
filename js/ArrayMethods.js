let arr = [21, 22, 32, 42, 25, 26, 27, 82, 29, 21]

const firstName = "Muhammed"
const secondName = "Ajmal"

const firstNameArr = Array.from(firstName)
const secondNameArr = Array.from(secondName)

console.log(firstNameArr)
console.log(secondNameArr)
const fullName = firstNameArr.concat(secondNameArr)
console.log(fullName.join(''))


//Is Array
let isArray = Array.isArray(arr)
console.log(`is Array :- ${isArray}`)

console.log(Array.of('foo', 2, 'bar', true));


// Find specified Index value
console.log(arr.at(7))

//Array become iterable key value pairs
let k = fullName.entries()

for (const [key, value] of k) {

    console.log(`Key ${key} Value ${value}`)
}

let result = arr.every((elem) => elem < 20)
console.log("under 20 every", result)

let result2 = arr.some((elem) => elem < 20)
console.log("under 20 some", result2)

//Fill
arr.fill(100, 5, 8)
console.log(arr)

//Find 
function findHundred(value, index, array){
    return value === 100
}

const found=arr.find(findHundred)
console.log("found",found)

const foundIndex=arr.findIndex(findHundred)
console.log("found Index",foundIndex)

const foundLast=arr.findLast(findHundred)
console.log("found Last",foundLast)

const foundLastIndex=arr.findLastIndex(findHundred)
console.log("found Last index ",foundLastIndex)

let matrix=[1,[2,[3,[4,[5,[6,[7]]]]]]]
console.log(matrix.flat(6))

console.log("before flat map",arr)
console.log(`flatMap ${arr.flatMap((elem)=>elem===100?[1000,1000,1000]:10)}`)

console.log(arr.indexOf(100))

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(""));
// Expected output: "Fire,Air,Water"
console.log(arr.lastIndexOf(100))

console.log(arr.map((val)=>val*2))

function total(acc,val){
    console.log(val)
    return acc+val
}

let sum1=arr.reduce(total,0)
console.log("reduc",sum1)
let sum2=arr.reduceRight(total,0)
console.log("reduce right",sum2)

