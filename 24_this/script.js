"use strict"

// console.log(this); // Window

//strict mode, non strict mode

// this substitution

// function checkThis() {
//   console.log(this); // Window
// }

// window.checkThis();

const obj = {
  a: 10,
  b: function() {
    console.log(this);
  }
}

obj.b(); // obj
