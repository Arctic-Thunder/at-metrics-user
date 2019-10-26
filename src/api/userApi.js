class UserApi {
    static logInUser(loginParams) {
<<<<<<< HEAD:metricsui/src/api/userApi.js
        const {username, password} = loginParams;
        console.log(`API: ${username} | ${password}`);
        return fetch('login/', {
=======
        const {username, password} = loginParams
        return fetch('/login/', {
>>>>>>> 2e2ecf698f33a3b3302f80516213af839b681c37:src/api/userApi.js
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
<<<<<<< HEAD:metricsui/src/api/userApi.js
          .then(response => {
              console.log(response);
              return (
              { username: username, token: response.json().token }
              )
=======
          .then(response => response.json()) 
          .then(data => {
            return (
              {username: username, token: data.token}
            )
>>>>>>> 2e2ecf698f33a3b3302f80516213af839b681c37:src/api/userApi.js
          })
          .catch(error => { return error })
    }
}

export default UserApi