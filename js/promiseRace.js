const promise1=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        return res("promise 1 after 3 sec")
    },3000)
})
const promise2=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        // return res("promise 2 after 1 sec")
        return rej("fail 2nd promise after 1sec")
    },1000)
})
const promise3=new Promise((res,rej)=>{
    
    setTimeout(()=>{
        return res("promise 3 after 2 sec")
    },2000)
})

Promise.race([promise1,promise2,promise3]).then((response)=>{

    console.log("promise race response",response)

}).catch((err)=>{

    console.log(err)
})