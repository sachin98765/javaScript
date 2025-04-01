function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data ={
                userName: "Sam",
                userId: 47,
                course:"javaScript"
            }
            resolve(data)
        },2000)

    })
}

async function getUserData() {

    try{
        console.log("Console fetching Data......")
        const data = await fetchData()
        console.log("Fetched data :",data)

    }catch(err){
        console.log(err)

    }

   
    
}
getUserData()