class Node {

    constructor(val) {

        this.val = val
        this.next = null
    }
}

class CLL {

    constructor() {

        this.head = null
        this.tail = null
    }

    append(val) {

        const newNode = new Node(val)
        if (!this.head) {

            this.head = newNode
            this.tail = newNode
        } else {

            this.tail.next = newNode
            this.tail = newNode
            newNode.next = this.head
        }
    }

    traverse() {

        let curr = this.head
        let count = 0
        while (curr) {
            if (count !== 0 && this.head.val === curr.val) break
            console.log(`Node value ${curr.val}`)
            curr = curr.next
            count++
        }
    }
    usualTraverse() {

        let curr = this.head
        while (curr) {

            console.log(curr.val)
            curr = curr.next
        }
    }


    isCircular() {

        let node = this.head.next
        if (!node) {
              console.log("head only")
        }
        else {
            while (node.next !== null && node.next !== this.head) node = node.next

            if (node.next === this.head) {

                console.log("Found loop in a list remove the loop")
                node.next = null
                console.log("connection removed")
            } else {
                console.log("Not found loop in a list")
            }
        }


    }
}

const obj = new CLL()
obj.append(10)
obj.append(20)
obj.append(30)
obj.traverse()
console.log("Is circular", obj.isCircular())
obj.usualTraverse()