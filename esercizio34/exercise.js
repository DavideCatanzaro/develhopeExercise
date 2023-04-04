function printAsyncName(callback, name){
    setTimeout(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        console.log(name)
    }, 2000);
}
function hello(){
    console.log("HELLO")
}

printAsyncName(hello,"Davide")