// import { sum } from "./module1.js"

//console.log(sum(5,4))

document.querySelector(".btn").addEventListener("click", () => {
  //   console.log(sum(5,4))
  import("./module1.js").then((res)=>{
    console.log(res.default(4,9))
  }).catch((err)=>{
    console.log(err)
  })
})
