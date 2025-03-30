// setTimeout(printName, 9000);

// function printName() {
//     console.log('Hello, I am a Developer');
// }

// document.querySelector(".btn").addEventListener("click", printName)

//-------------------callback() function-------------------
function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}   

function showResult(result) {
    console.log(result);
}

sum(5, 10, showResult);