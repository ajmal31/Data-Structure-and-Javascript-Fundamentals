const parent={
    name:"billionaire",
    printName:function(){
        console.log("Helo ",this.name)
    }

}

const childObject=Object.create(parent)
childObject.name="ajmal"
childObject.printName() 
//it's prototype chaining
// Inside the child object not found the printname so it goes on prototype take from parent ..
//parent refers to this.name ..name property is exist in child object therefore it take from child objects
