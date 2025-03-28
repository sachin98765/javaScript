const btnEle= document.querySelector(".btn")

/*-------- 1st way --------*/
// btnEle.onclick = function(){
//     console.log("Button Clicked")
// }

/*-------- 2nd way --------*/
// btnEle.addEventListener("click", (e) =>{
//     console.log(e.target.className)
// })

btnEle.addEventListener("click", () =>{
    btnEle.classList.add("btn1")
})

/*-------- 3rd way --------*/

// function click1(){
//     console.log("Click 1")
// }
// function click2(){
//     console.log("Click 2")
// }

// btnEle.addEventListener("click", click1)
// btnEle.addEventListener("click", click2)

// btnEle.removeEventListener("click", click1)

// console.log(btnEle)