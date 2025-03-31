//API- Application Programming Interface

let respone= fetch("https://jsonplaceholder.typicode.com/todos/1")
// respone.then(res => console.log(res) )
respone
.then(res => res.json() )
.then(d=> console.log(d))

