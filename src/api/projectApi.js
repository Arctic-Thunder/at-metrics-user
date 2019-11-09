class ProjectApi {
    // Gets all projects
    static getAllProjects( token ) {
        return fetch('/projects/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(response => response.json()) 
        .then(data => {
            return (
                data
            )
        })
        .catch(error => { return error })
    }

    // Gets a specific project
    static getProject ( token, id ) {
        console.log(`Fetching: projects/${id}/`)
        return fetch(`/projects/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            return (
                data
            )
        })
        .catch( error => { return error })
    }

    // Creates a new project
    static createProject ( token, name, description ) {
        return fetch('/projects/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then( response => response.json())
        .then(data => {
            return (
                data
            )
        })
        .catch ( error => { return error })
    }
}

export default ProjectApi