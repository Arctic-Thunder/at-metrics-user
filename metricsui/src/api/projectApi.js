class ProjectApi {
    static getAllProjects() {
        return fetch('/api/projects/', {
            method: 'POST',          
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${'TODO: User Token'}`
            }
          })
          .then(response => { return (
              response.json()
            )})
          .catch(error => { return error })
    }
}

export default ProjectApi