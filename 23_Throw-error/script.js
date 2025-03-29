// const customError = new Error("This is a custom error message")
// customError.name = "CustomError"

const err = new Error("Required!!!")
err.name = "Error!!!!!!"

let name = prompt("Enter your name")

try {
  if (name ==="") {
    throw err
  }
  console.log(name)

} catch (e) {
  console.log(e.name)
  console.log(e.message)
}
