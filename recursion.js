// function recursive(){
//     console.log("Hello, World!");
//     recursive();
// }

// recursive();

//lets example of recursion
// function Coding(num) {
//   if (num === 0) {
//     console.log("Coding has been done!")
//     return
//   } else {
//     console.log("I am coding")
//     Coding(num - 1)
//   }
// }

// Coding(5)


//factorial
function factorial(num) {
    if (num === 1) {
        return 1
    }
  let fact = num*factorial(num-1)
  return fact}
console.log(factorial(5))