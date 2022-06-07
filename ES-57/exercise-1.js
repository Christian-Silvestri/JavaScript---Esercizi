const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) { 
  return new Promise((resolve) => {
    const person = persons.find(person => person.id === id);
    if (person) {
      resolve(person);
    } else {
      reject(new Error('Person not found'));
    }
  }); 
  
}


console.log(fetchPersonById(2));