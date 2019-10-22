class ProjectApi {
    static getAllProjects() {
        return fetch('/projects/', {
            method: 'GET',          
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${state.user.token}`
            }
          })
          .then(response => { return (
              response.json()
            )})
          .catch(error => { return error })
    }
}

export default ProjectApi