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

    append(val) {

        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
        } else {

            this.tail.next = newNode
            this.tail = newNode
            this.length++
        }
    }
    preppend(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
        } else {

            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }
    delete(val) {

        let temp = this.head

        while (temp) {
            if (temp.next.val === val) {
                temp.next = temp.next.next
                this.length--
                break
            }
            temp = temp.next
        }

    }
    reverse() {

        let next = null
        let prev = null

        while (this.head) {
            next = this.head.next
            this.head.next = prev
            prev = this.head
            this.head = next
        }
        this.head = prev
    }
    sort() {
       
        for (let i = 0; i < this.length; i++) {
            let temp = this.head
            for (let j = 0; j < this.length; j++) {
                if (temp.next&&temp.val > temp.next.val) { 
                    let temp2 = temp.val
                    temp.val=temp.next.val
                    temp.next.val=temp2
                }
                temp=temp.next
            }
        }
        console.log("sorted { bubble } ")

    }
    bubbleSort(head){

        let curr=null
        let next=null
        let swapped=null
        do{
            curr=head
            swapped=false

            while(curr&&curr.next){

                next=curr.next
                if(curr.val>next.val)
                {
                    let temp=curr.val
                    curr.val=next.val
                    next.val=temp
                    swapped=true
                }
                curr=curr.next
            }
        }while(swapped)
            console.log("bubble sort")
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
    //Remove duplicates from sorted list
    removeDuplicates(){

        let curr=this.head

        while(curr){

            let temp=curr
            if(temp.val===temp.next.val){

                temp.next=temp.next.next
            }
            curr=curr.next
        }
    }

    //Merge Two sorted List
    mergeTwoSortedLists(list2){

        this.tail.next=list2.head

        this.tail=list2.tail

    }

    isPalindrome(){

        let arr=[]
        let curr=this.head
        while(curr){

            arr.push(curr.val)
            curr=curr.next
        }

        let str=arr.join("")
        let num=Number(str)
        let temp=num
        let reversNum=0
        while(temp>0){

            let lastNum=temp%10
            reversNum=reversNum*10+lastNum
            temp=Math.floor(temp/10)
        }
        return num===reversNum
    }
}




const obj = new LinkedList()
const obj2=new LinkedList()

// obj.append(20)
// obj.append(30)
// obj.append(40)
// obj.append(20)
// obj.append(40)
// obj.append(30)
// obj.append(10)
// obj.delete(40)
// console.log("after deletion")
//obj.print()
//obj.reverse()
//console.log("after reverse\n---------------")
//obj.print()
// obj.bubbleSort(obj.head)
// console.log("after sorting")
// obj.print()
// obj.removeDuplicates()
// console.log("after removing duplicates")
// obj.print()
// obj2.append(2)
// obj2.append(3)
// obj2.append(4)
// obj2.append(2)
// obj2.append(4)
// obj2.append(3)
// obj2.append(1)

// obj2.bubbleSort(obj2.head)
// console.log("after sorting")
// obj2.print()

// obj.mergeTwoSortedLists(obj2)
// obj.bubbleSort(obj.head)
// obj.print()
obj.append(1)
obj.append(2)
obj.append(3)

let k=obj.isPalindrome()
console.log("Is palindrome",k)
