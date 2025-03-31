function getUser(userId){
    return new Promise((resolve)=>{
        console.log("Fetching User Dta............")
        setTimeout(()=>{
            resolve({userId: userId,
                userName:"Sam"
            })
        },5000)
        

    })
}


function getPosts(userId){
    return new Promise((resolve)=>{
        console.log("fetching user Posts......")
        setTimeout(()=>{
            resolve([{postId:1,content:"post1"},
                {postId:2,content:"post2"}

            ])
        },5000)
    })
}

function getDetails(posts){
    return new Promise((resolve)=>{
        console.log("fetching account detail.......")
        setTimeout(()=>{
            resolve({userName:"kishna123",followers:5000})
        },5000)

    })
}


//post is posts as parameter
getUser(1).then((user)=>{
    console.log("user:",user)

    return getPosts(user.userId)
}).then((post)=>{
    console.log("posts: ",posts)

    return getDetails(posts)
}).then((details)=>{
    console.log("details: ",details)
}).catch((err)=>{
    console.log("error ",err)
})