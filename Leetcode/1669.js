var mergeInBetween = function (list1, a, b, list2) {


    let curr = list1
    let count = 0
    let flag = false
    while (curr && curr.next) {

        if (count+1 === a) {
            let temp
            let temp2=curr
            while (true) {
                if (b=== count) {

                    temp=temp2.next
                    break

                } else {
                    temp2 = temp2.next
                    count++

                }

            } 
            curr.next=list2
            while(curr.next)
            {
                curr=curr.next
            }
        
            curr.next=temp
            return list1

        }
        else {
            curr = curr.next
            count++

        }
    }

};