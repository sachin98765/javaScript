// function name(){
//     console.log("function is called");

// }

// name();

//function-expression

//named function
// let myFunction = function name(){
//     console.log("Named function is called");

// }

// myFunction();

//anonymous function
// let anonymousFunc = function () {
//   console.log("Anonymous function is called")
// }

// anonymousFunc()


//Arrow function
// let arrowFunc = () => {
//   console.log("Arrow function is called")
// }
// arrowFunc()


// //Arrow function with parameters
// let arrowFuncWithParam = (name) => {
//   console.log("Arrow function is called with parameter", name)
// }   

//arrowFuncWithParam("Raj")


// //IIIFE - Immediately Invoked Function Expression
// (function(){
//   console.log("IIFE is called")
// })();


//nested function
// function outerFunction(){
//   console.log("Outer function is called")    
//   function innerFunction(){
//     console.log("Inner function is called")  
//   }
//   innerFunction();
// }
// outerFunction()


//swap two numbers

// function swap(a,b){
//     console.log("Before swapping a:",a,"b:",b)
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("After swapping a:",a,"b:",b)
//     }

// swap(10,20)


//vowel count

function vowelCount(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        count++;
      }
    }
    console.log("Vowel count in", str, "is", count)

}

vowelCount("Hello World")
vowelCount("Raj")