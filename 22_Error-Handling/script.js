

try{
    console.log(Samm)
    console.log('try block will throw you an error')
    
}catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log('catch block will catch the error')
}

finally{
    console.log('finally block will always run')
}