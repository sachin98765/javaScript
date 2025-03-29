// "use strict";

// function method() {
//   const obj = {
//     a: 20,
//     x: () => {
//       console.log(this)
//     },
//   }
//   obj.x(); // undefined
// }

// method();

/*-----------------*/
// const obj = {
//   a: 20,
//   x: function() {
//    const y = () => {
//      console.log(this);
//    }
//    y()
//   },
// }

// obj.x(); // { a: 20, x: [Function: x] }



/*-------------- call() --------------*/

const student = {
    name: "krishna",
    rollNo: 111,
    printDetails: function(state,country) {
      console.log(this.name,+" " + this.rollNo + " " + state + " " + country);
    }
}
// student.printDetails(); // krishna 111

const student2 = {
    name: "Radha",
    rollNo: 76,
}

// student.printDetails.call(student2, "Barsana","India"); // Radha 76


/*-------------- apply() --------------*/
student.printDetails.apply(student2, ["Barsana"], ["India"]); 

/*-------------- bind() --------------*/

const details=student.printDetails.bind(student2)
details("Barsana","India") // Radha 76 Barsana India
