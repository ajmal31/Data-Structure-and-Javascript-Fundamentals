

function a(place){

    console.log(this.name)
    console.log(place)
}

let obj={
    name:"ajmal"
}
let obj2={
    name:"something"
}

// a.call(obj2,"Palakkad")
let k=a.bind(obj2,"palakkad")
console.log(k())