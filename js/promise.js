// const p1=new Promise((resolve,reject)=>reject("promise1"))
// const p2=new Promise((resolve,reject)=>resolve("promise2"))
// const p3=new Promise((resolve,reject)=>resolve("Promise3"))



//     Promise.all([p1,p2,p3]).then((response)=>{
//         console.log("promise all")
//         console.log(response)
//     }).catch((err)=>{
//         console.log("errrrrrrrrrrrr")
//         console.log(err)
//     })

//     Promise.allSettled([p1,p2,p2]).then((response)=>{
//         console.log("promise all settled")
//         console.log(response)
//     }).catch((err)=>{
//         console.log("errrrrrr in settled")
//         console.log(err)
//     })

//     Promise.race([p1,p2,p2]).then((response)=>{
//         console.log("promis race")
//         console.log(response)
//     }).catch((err)=>{
//         console.log("error in race")
//         console.log("err",err)
//     })

//     Promise.any([p1,p2,p3]).then((response)=>{
//         console.log("rpmose any")
//         console.log("repsonse",response)
//     }).catch((err)=>{
//         console.log("erro in any",err)
//     })
    // function Person(name,age,gender){
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    //   }
      
      
    //   var person1 = new Person("Vivek", 76, "male");
    //   console.log(person1);

 var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    { 
         return scope; 
    }
    return f;
}
console.log(check()())