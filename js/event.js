

let arr=[1,25,38]

//the third argument is true it's event will handle in capturing phase by default ,
// the 3rd arguments is false therefore event will handle bubbling phase


document.getElementById("GrandParent").addEventListener('click', () => {
    console.log("Grand Parent clicked");
},true);

document.getElementById("Parent").addEventListener('click', () => {
    console.log("Parent clicked");
},true);

document.getElementById("child").addEventListener('click', () => {
    console.log("Child clicked");
},true);