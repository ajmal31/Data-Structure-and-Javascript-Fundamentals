function isPalindrom(n,prev=0){

    if(n<=0)return prev

    let reminder=n%10
    prev=prev*10+reminder
    n=Math.floor(n/10)
    return isPalindrom(n,prev)
}
let n=123
let k=isPalindrom(n)
console.log("prev",k,"og",n)