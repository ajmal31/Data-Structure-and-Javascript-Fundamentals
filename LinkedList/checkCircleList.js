var hasCycle = function(head) {

    let slower=head
    let faster=head
 
    while(faster&&faster.next){
        slower=slower.next
        faster=faster.next.next
        if(slower===faster)return true
 
    }
    return false
    
     
 }