const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


const filterNumeric = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key];
    }
  }
  return JSON.stringify(newObj);
};


const json = filterNumeric(person);


console.log(json); // Should return: { id: 1, age: 25 }