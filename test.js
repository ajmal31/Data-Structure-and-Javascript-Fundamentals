// cd


// function *generator(){

//    for(let i=2;i<100;i++)
//    {
//       let count=0
//        for(let j=2;j<i;j++)
//        {
//           if(i%j==0){
//             count++
//             break
//           }
//        }
//        primeNumbers
//    }

// }

// let k=generator()
// console.log(k.next())


// let obj={
//     name:"ajmal",
//     age:19
// }
// let obj2={
//     name:"john",
//     age:22
// }

// function printName(place){

//     console.log(`Hi my Name is ${this.name}iam From ${place}`)
// }

// printName.call(obj2,"kerala")
// printName.apply(obj2,["kerala"])
// let k=printName.bind(obj2,"kerala")
// k()


// let str="aaccbbaagc"

// let map=new Map()

// for(let i=0;i<str.length;i++)
// {
//     map.set(str[i],map.get(str[i])+1||1)
// }
// console.log(map)


class Node{
    constructor(val)
    {
        this.val=val
        this.next=null
    }

}

class Queue{
    constructor()
    {
        this.start=null
         this.peek=null
    }

    enqueue(val)
    {
        let newNode=new Node(val)
        if(!this.start)
        {
            this.start=newNode
            this.peek=newNode
        }else{

            this.peek.next=newNode
            this.peek=newNode
        }

    }
    dequeue()
    {
        let val=this.start.val
        this.start=this.start.next
        return val
    }
    display()
    {
        let curr=this.start

        while(curr)
        {
            console.log(curr.val)
            curr=curr.next
        }
    }
}

let obj=new Queue()
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)
obj.enqueue(50)
obj.display()
console.log("deleted value",obj.dequeue())

