class Node {

    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singleLinkedlist {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    //appending
    push(val) {

        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {

            this.tail.next = newNode
            this.tail = newNode

        }
        this.length++
    }
    //Delete unshift
    unshift(val) {

        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {

            newNode.next = this.head
            this.head = newNode
        }
    }
    insertAfter(val, target) {

        let curr = this.head
        while (curr) {
            if (curr.val === target) {
                const temp = curr.next
                let newNode = new Node(val)
                curr.next = newNode
                newNode.next = temp
                break
            } else curr = curr.next
        }
    }
    insertBefore(val, target) {

        let curr = this.head
        while (curr) {

            if (curr.next.val === target) {

                let temp = curr.next
                let newNode = new Node(val)
                curr.next = newNode
                newNode.next = temp
                break
            } else curr = curr.next

        }
    }
    // Delete specific element
    delete(val) {

        if (val === this.head.val) this.head = this.head.next
        else {
            let temp = this.head
            while (temp) {
                if (temp.next.val === val) {
                    temp.next = temp.next.next
                    break
                } else {
                    temp = temp.next
                }

            }
        }
    }
    // reverse() {

    //     let temp2 = null
    //     let temp = null

    //     while (this.head !== null) {
    //         temp2 = this.head.next
    //         this.head.next = temp
    //         temp = this.head
    //         this.head = temp2
    //     }
    //     this.head = temp


    // }
    
    //printing all values
    print() {

        let temp = this.head
        while (true) {
            console.log("nodes", temp.val)
            if (!temp.next) break
            temp = temp.next
        }

    }
    reverse(){

        let temp1=null
        let temp2=null
        while(this.head!==null)
        {
            temp1=this.head.next
            this.head.next=temp2
            temp2=this.head
            this.head=temp1
        }
        this.head=temp2


    }
}

const list = new singleLinkedlist()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// list.push(50)
// list.unshift(40)
// list.unshift(30)
// list.unshift(20)
// list.unshift(10)
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)
list.print()
list.reverse()
console.log("after reversing")
list.print()


