function numberPromise(number){
    return new Promise((resolve,reject)=>{
        if(number > 10){
            resolve(number);
        }else{
            reject("error")
        }
    })
}

numberPromise(14)
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err))