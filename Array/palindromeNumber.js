function isPalindrome(number)
{
    let n=number
    let rev=0
    while(n!==0){
        let reminder=n%10
        rev=rev*10+reminder
        n=Math.floor(n/10)
    }
    if(number===rev)console.log("Number is palindrome🥱😎")
    else console.log("number is not palindrome😥😕")
}

let number=123
let result=isPalindrome(number)