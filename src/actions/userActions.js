import userApi from '../api/userApi.js'
import { LOG_IN_USER } from './actionTypes'

export function logInUser(userCreds) {
    return function(dispatch) {
        return userApi.logInUser(userCreds)
            .then(user => {
                dispatch(logInSuccess(user))
            }).catch(error => {
                throw(error)
            })
    }
}

export function logInSuccess(user) {
    return {type: LOG_IN_USER, user}
}