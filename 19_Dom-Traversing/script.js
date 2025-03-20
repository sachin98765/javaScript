const grandParent=document.querySelector(".grand-parent")

// const child = document.querySelector(".child")
// console.log(child)

const next = document.getElementById("next")

// console.log(grandParent)

/*

    downwards
    upwards
    sideways


*/


//downwards------------

// console.log(grandParent.children[0])

// grandParent.children[0].style.backgroundColor="red"
// grandParent.children[0].style.color="white"



//upwards------------

// console.log(child.parentElement.parentElement)
// console.log(child.closest(".grand-parent"))



//sideways------------

// console.log (child.nextElementSibling)
// console.log (child.previousElementSibling)
console.log (next.previousElementSibling)
