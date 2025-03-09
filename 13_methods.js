let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//?map

//methos 1
// function double(nums) {
//   return nums * 2
// }
// let doubleNums = nums.map(double)
// console.log(doubleNums)

// method 2
// let doubleNums = nums.map( (nums) => {
//   return nums * 3
// })
// console.log(doubleNums)

//? filter

// let number = nums.filter((nums) => {
//         return nums>5
//     })
//     console.log(number)

//? reduce()
// let sum=nums.reduce((accumulator, currentValue) => {
//     accumulator= accumulator + currentValue
//     return accumulator
// }, 0)
//  console.log(sum)

//chaining
//  let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  let sum2=nums2.filter((five)=>{
//     return five>=2
// }).reduce((accumulator, currentValue) => {
//     return accumulator + currentValue

//  },0)
//  console.log(sum2)

//more examples
let employees = [
  { id: 1, name: "kishan", department: "IT", salary: 50000, year: 2020 },
  { id: 2, name: "raj", department: "IT", salary: 60000, year: 2020 },
  { id: 3, name: "kumar", department: "HR", salary: 70000, year: 2020 },
  { id: 4, name: "raju", department: "HR", salary: 8000, year: 2020 },
  { id: 5, name: "kiran", department: "IT", salary: 9000, year: 2020 },
  { id: 6, name: "kumar", department: "IT", salary: 100000, year: 2020 },
]

//map
let salary = employees.map((employee) => {
  return employee.salary
})

console.log(salary)

//filter
//this to whole data
// let salaries=employees.filter((employee) => {
//   return employee.salary > 50000
// })
// console.log(salaries)

//particular one data
let salaries = employees
  .filter((employee) => {
    return employee.salary > 50000
  })
  .map((name) => {
    return name.name
  })

console.log(salaries)


//reduce
let totalSalary = employees.reduce((accumulator, employee) => {
  return accumulator + employee.salary
}, 0)
console.log(totalSalary)