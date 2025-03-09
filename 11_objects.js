let myDetails = {
  name: "Raj",
  age: 25,
  address: {
    city: "Hyderabad",
    state: "TS",
  },
  nationality: "Indian",
}


// Accessing object properties
console.log(myDetails.name); 
// console.log(myDetails.age);
console.log(myDetails["age"]);
console.log(myDetails.address.city);
console.log(myDetails["address"]["state"]);


for (let key in myDetails) {
  console.log(key,"|", myDetails[key]);
}