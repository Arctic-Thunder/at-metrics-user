import User from '../models'

class UserApi {
    static logInUser( username, password ) {
        return fetch('login/', {
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
                User(data.username, "", data.token)
            )
        })
        .catch(error => { return error })
    }
}

export default UserApi