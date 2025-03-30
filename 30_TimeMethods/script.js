//-----------------setTimeout() Method-------------

// const btnEle=document.querySelector('.btn');
// const stopBtn=document.querySelector('.btn1');

// let  timeoutId;

// btnEle.addEventListener('click',()=>{
//    timeoutId= setTimeout( () =>{
//         console.log('You Clicked oN the Button');
//     },2000);

//     console.log('Hello');

// })

// stopBtn.addEventListener('click',()=>{
//     clearTimeout(timeoutId);
//     console.log('Stop timeOut');
    
// })

//-----------------setInterval() Method-------------

const btnEle=document.querySelector('.btn');
const stopBtn=document.querySelector('.btn1');
const paraEle=document.querySelector('.para');

let  timeoutId;

btnEle.addEventListener('click',()=>{
    timeoutId= setInterval( () =>{
          paraEle.innerHTML+=`<p>This is a Para</p>`;
     },2000);
})

stopBtn.addEventListener('click',()=>{
    clearTimeout(timeoutId);
    // console.log('Stop timeOut');
})