class Node{

    constructor(val){
        this.val=val
        this.next=null

    }

}

class SingleList{

    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

    push(val){

        const newNode=new Node(val)

        if(!this.head){
            this.head=newNode
            this.tail=this.head
            this.length++
        }else{
          this.tail.next=newNode
          this.tail=newNode
          this.length++

        }

    }
    print(){

        let temp=this.head
        while(temp)
        {
            console.log("current Node",temp.val)
            temp=temp.next
        }
    }

}
const arr=[1,2,3,4,5,6,7,8,9]
let obj=new SingleList()

for(const val of arr){

    obj.push(val)

}
obj.print()
