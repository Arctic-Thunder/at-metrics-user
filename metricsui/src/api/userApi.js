class UserApi {
    static logInUser(username, password) {
        return fetch('/api/login/', {
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => { return (
              {username: username, password: password, token: response.json().token}
            )})
          .catch(error => { return error })
    }
}

export default UserApi