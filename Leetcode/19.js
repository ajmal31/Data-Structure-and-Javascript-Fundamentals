var removeNthFromEnd = function (head, n) {
    let arr=[]

    let curr=head
    while(curr)
    {
        arr.push(curr.val)
        curr=curr.next
    }
    let deleteIndex=(arr.length-n)
    arr.splice(deleteIndex,1)

    class Node{
        constructor(val){
            this.val=val
            this.next=null
        }
    }

    class List{
        constructor()
        {
            this.head=null
            this.tail=null
        }

        insert(val){
            let newNode=new Node(val)

            if(!this.head){
             this.head=newNode
             this.tail=newNode

            }
            else{

              this.tail.next=newNode
              this.tail=newNode

            }
        }
        display(){
            let curr=this.head

            while(curr){
                console.log(curr.val)
                curr=curr.next
            }
        }
    }

    const list=new List()

    for(let i=0;i<arr.length;i++)
    {
        list.insert(arr[i])
    }
    return list.head

    

};