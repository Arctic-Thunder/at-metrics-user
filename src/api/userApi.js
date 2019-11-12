class UserApi {
    static logInUser( username, password ) {
        return fetch(`${process.env.API_HOST}/login/`, {
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
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
}

export default UserApi