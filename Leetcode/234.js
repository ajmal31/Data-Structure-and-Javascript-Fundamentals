var isPalindrome = function(head) {
    
    let arr=[]
    let curr=head
    while(curr)
    {
      arr.push(curr.val)
      curr=curr.next
      
    }
    let rev=[...arr].reverse()
    return rev.join('')===arr.join('')
    
};