class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get FirstName() {
    return this.firstName;
  }
  set FirstName(firstName) {
    return this.firstName = firstName;
  }

  get LastName() {
    return this.lastName;
  }
  set LastName(lastName) {
    return this.lastName = lastName;
  }

  get Age() {
    return this.age;
  }
  set Age(age) {
    return this.age = age;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);