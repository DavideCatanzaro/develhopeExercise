class Person {
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    if(typeof(age)==="number"){
      this.age = age;
    }else{
      this.age = Number(age);
    }
  }
 get firstName(){
  return this.firstName;
 }
 set firstName(nombre){
  this.firstName = nombre;      //mi da errore nell'uguale ma non so come rimediare
 }
 get lastName(){
  return this.lastName;
 }
 set lastName(surname){
  this.lastName = surname;
 }
 get age(){
  return this.age;
 }
 set age(older){
  this.age = older;
 }
 get fullName(){
  return nombre + " " + surname;
 }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);