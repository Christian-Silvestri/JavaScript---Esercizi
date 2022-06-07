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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}


Promise.all([
  fetchPersonById(1),
  fetchPersonById(2),
  fetchPersonById(3)
]).then(data => { 
  console.log(JSON.parse(data[0]));
  console.log(JSON.parse(data[1]));
  console.log(JSON.parse(data[2]));
}
).catch(err => {
  console.log(err);
}
);











