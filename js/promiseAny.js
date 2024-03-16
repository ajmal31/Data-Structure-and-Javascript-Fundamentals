const promise1=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        return res("promise 1 after 3 sec")
    },1000)
})
const promise2=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        // return res("promise 2 after 1 sec")
        return res("promise 2 after 1 sec")
    },1000)
})
const promise3=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        return res("promise 3 after 2 sec")
    },1000)
})

Promise.any([promise1,promise2,promise3]).then((response)=>{

    console.log("promise any result",response)
}).catch((err)=>{
    console.log(err)
})


console.log(this==globalThis)