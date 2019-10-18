class UserApi {
    static logInUser(loginParams) {
        const {username, password} = loginParams;
        console.log(`API: ${username} | ${password}`);
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
          .then(response => {
              console.log(response);
              return (
              { username: username, token: response.json().token }
              )
          })
          .catch(error => { return error })
    }
}

export default UserApi