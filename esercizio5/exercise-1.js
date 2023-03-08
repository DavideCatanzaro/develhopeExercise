const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
console.log(person1);
person1["firstName"] = "Simon";
const person2 = person1;
console.log(person2);

// se avessimo cambiato l'ogetto firstName lasciando il codice come da consegna sarebbe cambiato anche il nome di person1 poichè venivano stampati entrambi dopo il cambio dell'oggetto