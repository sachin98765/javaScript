// function sayName(){
//     var name="Raj"
//     function disName(){
//         console.log(name)
//     }
//     disName()
// }

// sayName()

/*----------------------------------*/
function sayName() {
  var name = "Raj"
  function disName() {
    console.log(name)
  }
  name="Rajesh"
  return disName
}

const name = sayName()
name()
