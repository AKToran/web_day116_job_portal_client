  export const myJobsPromise = (email) =>{
    return fetch(`http://localhost:3000/jobs?email=${email}`).then(res=>res.json());
  }