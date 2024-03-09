var swapPairs = function(head) {
    if(!head||!head.next)return head
    let curr=head
    while(curr&&curr.next){
      
        [curr.val,curr.next.val]=[curr.next.val,curr.val]
        curr=curr.next.next
    }
    return head


};