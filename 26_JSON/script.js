const obj ={
    name: "krishna",
    rollno:387,
    course:"JS",
    fee:"free"
}

//stringify
const myJSON = JSON.stringify(obj);
console.log(myJSON);


// parse()
const myObj = JSON.parse(myJSON);
console.log(myObj);