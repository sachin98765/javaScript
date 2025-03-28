const outerEle=document.querySelector(".outer")
const btnEle=document.querySelector(".btn")
const googleEle=document.getElementById("google")

// outerEle.addEventListener("click",()=>{
//     console.log("Button clicked outer div")
// },false)


// btnEle.addEventListener("click",(e)=>{
//     console.log("Button clicked button")

//     e.stopPropagation()
// },false)


// googleEle.addEventListener("click",()=>{
//     console.log("Button clicked google link")
// }, false)


//preventDefault()

googleEle.addEventListener("click",(e)=>{
    console.log("Button clicked google link")
    e.preventDefault()
}, false)

