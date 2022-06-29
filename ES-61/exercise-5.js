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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const personId = persons.find((person) => person.id === id)
          if (personId) {
             return resolve(personId) 
          } 
          return reject(`The person with id number ${id} does not exist`)
      }, 1000);
  })
}

function fetchJobById(id)  {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const jobId = jobs.find((job) => job.id === id)
          if (jobId) {
             return resolve(jobId.jobTitle) 
          } 
          return reject(`The job with id number ${id} does not exist`)
      }, 500);
  })
}

Promise.any([
  fetchPersonById(3), 
  fetchJobById((1))
]).then((id) => console.log(id)).catch((err) => console.error(err));

