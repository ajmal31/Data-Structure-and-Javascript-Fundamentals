class Node{

    constructor(val=null){

        this.val=val
        this.next=null
    }
}

class List{

    constructor(){
        
        this.head=null
        this.tail=null
        this.length++
    }

    append(val){

        const newNode=new Node(val)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
            this.length++
        }
        else{
           
            this.tail.next=newNode
            this.tail=newNode
            this.length++
        }
    }
    sort(){

        let swapped
        
        do{

            swapped=false
            let curr=this.head
            while(curr.next&&curr.val<curr.next.val){

                let temp=curr.val
                curr.val=curr.next.val
                curr.next.val=temp
                swapped=true
                curr=curr.next
            }
        }while(swapped)
    }
    traverse(){

        let curr=this.head
        while(curr){
            console.log(`Node value ${curr.val}`)
            curr=curr.next
        }
    }

}


const obj=new List()
obj.append(10)
obj.append(20)
obj.append(30)
obj.append(40)
obj.append(50)
obj.append(60)
obj.traverse()
console.log("sorted")
obj.sort()
obj.traverse()
