var middleNode = function(head) {

    let length=0
    let temp=head
    let item=0
    let curr=head
    while(temp){
         
        length++
        temp=temp.next
    }
    let elem=Math.ceil(length/2)
    if(length%2==0)elem+=1

    while(curr){
      
      item++
      if(item===elem)return curr
      else curr=curr.next
    }
    
};

//aproach two
var middleNode = function(head) {

    let faster=head
    let slower=head

    while(faster&&faster.next)
    {
        faster=faster.next.next
        slower=slower.next
    }
    return slower
    
};