try{
    throw new Error('This is an error')

}catch(e){
    console.log( e.name)
    console.log(e.message)
}