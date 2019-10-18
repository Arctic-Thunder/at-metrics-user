import userApi from '../api/userApi.js'
import { LOG_IN_USER } from './actionTypes'

export function logInUser(userCreds) {
    return function(dispatch) {
        return userApi.logInUser(userCreds)
            .then(userToken => {
                dispatch(logInSuccess(userToken))
            }).catch(error => {
                throw(error)
            })
    }
}

export function logInSuccess(userToken) {
    return {type: LOG_IN_USER, userToken}
}