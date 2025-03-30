/*

menu
groceries
cook 
meal
tables
serve

*/

menubar(function () {
  groceries(function () {
    cook(function () {
      tables(function () {
        serve()
      })
    })
  })
})


//callback hell is when you have a lot of nested callbacks
// it is hard to read and maintain
// it is hard to debug
// it is hard to test
// it is hard to handle errors
//

/*  callback hell handle */
// 1. using comments
//2.promises
//3. async/await
