function repeatHello(callback){
    setInterval(() => {
        callback();
    }, 1000);
}

function hello(){
    console.log("HELLO")
}

repeatHello(hello);

//usiamo l'arrow function in questo caso perchè il codice è più leggibile e sopratutto perchè l'arrow function ha il return implicito