
//Constructor function are used create same properties multiple object
// the function name always should be capital


function Person(name,place,age){

    this.name=name
    this.place=place
    this.age=age
}

const obj1=new Person("ajmal","mannarkkad",20)
const obj2=new Person("joenDoe","us",28)
console.log(obj1,obj2)
