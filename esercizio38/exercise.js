const promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
      if (isLogged) {
        const randomNum = Math.random();
        resolve(randomNum);
      } else {
        reject("Impossible to log in");
      }
    });
  };
  
  const promise2 = (num) => {
    return new Promise((resolve, reject) => {
      if (num > 0.5) {
        const person = { name: "John", age: 24 };
        resolve(person);
      } else {
        reject("ERROR");
      }
    });
  };
  
  promise1(true)
    .then((num) => {return promise2(num)})
    .then((person) => console.log(person) )
    .catch((error) => console.log(error));
