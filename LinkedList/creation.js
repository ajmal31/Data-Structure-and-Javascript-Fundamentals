class Node {

    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    preppend(val) {

        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {

            this.tail.next = newNode
            this.tail = newNode
        }
    }
    preppend(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {

            newNode.next = this.head
            this.head = newNode
        }
    }
    delete(val) {

        let temp = this.head

        while (temp) {
            if (temp.next.val === val) {
                temp.next = temp.next.next
                break
            }
            temp = temp.next
        }

    }
    reverse(){

        let next=null
        let prev=null
        
        while(this.head)
        {
            next=this.head.next
            this.head.next=prev
            prev=this.head
            this.head=next
        }
        this.head=prev
    }
    search(val) {

        let temp = this.head
        let found = false
        while (temp) {
            if (temp.val === val) {
                console.log(`Found ${temp.val}`)
                found = true
                break
            } else temp = temp.next
        }
        if (!found)
            console.log(`${val} Not found `)
    }
    print() {

        let temp = this.head
        while (temp) {
            console.log(temp.val)
            temp = temp.next
        }
    }
}




const obj = new LinkedList()

obj.preppend(10)
obj.preppend(20)
obj.preppend(30)
obj.preppend(40)
obj.preppend(50)
obj.preppend(60)
obj.preppend(70)
obj.print()
obj.delete(40)
console.log("after deletion")
obj.print()
obj.reverse()
console.log("after reverse\n---------------")
obj.print()
