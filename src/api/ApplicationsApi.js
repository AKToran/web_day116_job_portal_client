export const myApplicationsPromise = (email, token) =>{
  return fetch(`http://localhost:3000/applications?email=${email}`,{
    credentials:'include',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json());
}