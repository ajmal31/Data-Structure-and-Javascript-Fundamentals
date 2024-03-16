
let obj={

    name:"ajmal"
}

function a(age,country,ok){
    console.log("Helo ",this.name,"age ",age,"contry ",country," ",ok)
}
//Js bind Method
let k=a.bind(obj,19,"us","okaay")
k()

//what is polyfil 
// * polyfil is a piece of used code that is used to provide modern functionality on older browers
// * let consider if you Browser not supporting Bind Method What would you do ?
// * We are Goind to create our on bind Method 

Function.prototype.mybind=function (...args){
    //args[0] which object are sending to this function
    return ()=>{
        let params=args.slice(1)
        this.call(args[0],...params)
    }
}

let m=a.mybind(obj,19,"india","okaay")
m()