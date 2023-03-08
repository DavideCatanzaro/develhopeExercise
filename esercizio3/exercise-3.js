const sum =  (a, b) => a + b;


const subtract = (a, b) => a - b;


const multiply = (a, b) => a * b;


const divide =  (a, b) =>  a / b;

let firstsum = sum(2,4);
let secondsum = sum(5,2);
let product = multiply(firstsum, secondsum);
let sub = subtract(product,2)
let division = divide(sub,5);

console.log(firstsum)
console.log(secondsum)
console.log(product)
console.log(sub)
console.log(division)