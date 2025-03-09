
const btnEle=document.querySelector(".btn")
const bodyEle=document.querySelector("body")
const divEle=document.querySelector(".intro")


// bodyEle.style.backgroundColor ="#E4F8F8FF"

// console.log(btnEle) 

/*
btnEle.style.backgroundColor ="red"
btnEle.style.color ="white"
btnEle.style.fontSize = 20+"px"
btnEle.style.borderRadius =10+"px"
*/

//?classlist
/*
btnEle.classList.add("btn1")
// btnEle.classList.remove("btn1")
*/

/*
  innerHTML
  outerHTML
  textContent
   innerText
*/


//  console.log(divEle.innerHTML)
// console.log(divEle.outerHTML)
// console.log(divEle.innerText)
// console.log(divEle.textContent)

divEle.innerHTML = "<b?>Radha Rani</b?"

//attributes
/*
    getAttribute()
    setAttribute()
    hasAttribute()
    removeAttribute()

*/

// let att=divEle.getAttribute("class")
// console.log(att)    

// divEle.setAttribute("class","intro1")
// divEle.setAttribute("id","intro1")

// let att2=divEle.hasAttribute("class")
// console.log(att2)

divEle.removeAttribute("class")