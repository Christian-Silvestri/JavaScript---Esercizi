const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di perso2 in "Simon"
person2.firstName = 'Simon';

/* modificando l'oggetto person2 viene modificato anche 
l'oggetto person1 perché gli oggetti vengono copiati 
per riferimento */

console.log(person1);
console.log(person2);