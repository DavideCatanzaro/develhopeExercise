const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function setStor(obj, name) {
    const userLocalSet = JSON.stringify(obj)
    localStorage.setItem(name, userLocalSet);
  }
  
  function getStor(val) {
    const userLocalGet = JSON.parse(localStorage.getItem(val));
    console.log(userLocalGet);
  }
  
  
  setStor(user, "object1");
  getStor("object2");