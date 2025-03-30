//----------------- promises

// const promise = new Promise((res, rej) =>{
//     const name = 'Sam';
//     if(name === 'Sam'){
//         res('Promise is fulfilled');
//     }else{
//         rej('Promise is rejected');
//     }
// })
// console.log(promise);


//------------- .then() method

function fetchData(){
    return new Promise((resolve, reject) =>{
        console.log('Data fetched.....');
        setTimeout(() => {
            const num = Math.random() > 0.3
            if(num === true){
                const data={
                    id:2,
                    name:"Sam",
                    course: "JS",
                    duration:6
                }
                resolve(data)
            }else{
                reject("fetching failed")
            }

        }, 2000);
    })
}


function handleRes(data){
    console.log('Data fetched successfully',data);
}

function handleRej(error){
    console.error('Data fetching failed',error);
}

fetchData().then(handleRes, handleRej)
