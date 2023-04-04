function repeatHello(callback){
   let repeat = setInterval(callback, 1000);
   setTimeout(() => clearInterval(repeat), 5000);
    
}

function hello(){
    console.log("HELLO")
}

repeatHello(hello);


