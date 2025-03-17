const divEle=document.querySelector(".container")

// console.log(divEle)

const paraEle = document.createElement("p")
paraEle.textContent="This is a new paragraph"

// paraEle.style.fontSize=70 + "px"
paraEle.classList.add("para")

// divEle.appendChild(paraEle)


/*  
append()
prepend()
before()
after()
*/


// divEle.append("Shiva",paraEle)
// divEle.prepend("Shiva",paraEle)
// divEle.before(paraEle)
divEle.after(paraEle)
// paraEle.remove()
// divEle.remove()