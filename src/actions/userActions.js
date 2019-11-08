import userApi from '../api/userApi.js'
import { 
    LOG_IN_LOADING,
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
 } from './actionTypes'

export const logInUser = ( username, password ) => {
    return ( dispatch, getState ) => {
        dispatch(logInLoading(true))

        userApi.logInUser( username, password )
            .then(userData => {
                dispatch(logInSuccess(userData))
            }).catch(error => {
                dispatch(logInFailure(true))
                throw(error)
            })
    }
}

export const  logInLoading = () => {
    return {
        type: LOG_IN_LOADING
    }
}

export const logInFailure = ( error ) => {
    return {
        type: LOG_IN_FAILURE,
        payload: { error }
    }
}

export const logInSuccess = ( userData ) => {
    return { type: LOG_IN_SUCCESS, payload: userData }
}