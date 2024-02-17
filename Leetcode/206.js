var reverseList = function(head) {

    temp=null
    temp2=null

    while(head!==null)
    {
        temp2=head.next
        head.next=temp
        temp=head
        head=temp2
        
    }
    head=temp
    return head
    
};