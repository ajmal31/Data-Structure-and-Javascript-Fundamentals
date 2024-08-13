

let arr=[1,25,38]

//the third argument is true it's event will handle in capturing phase by default ,
// the 3rd arguments is false therefore event will handle bubbling phase

// Event Delegation

//Event delegation
//Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

document.getElementById("GrandParent").addEventListener('click', () => {
    console.log("Grand Parent clicked");
},true);

document.getElementById("Parent").addEventListener('click', () => {
    console.log("Parent clicked");
},true);

document.getElementById("child").addEventListener('click', () => {
    console.log("Child clicked");
},true);