import userApi from '../api/userApi.js'
import { user as type } from './actionTypes'

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
        type: type.LOG_IN_LOADING
    }
}

export const logInFailure = ( error ) => {
    return {
        type: type.LOG_IN_FAILURE,
        payload: { error }
    }
}

export const logInSuccess = ( userData ) => {
    return {
        type: type.LOG_IN_SUCCESS,
        payload: { userData }
    }
}

export const logOutUser = () => {
    return ( dispatch, getState ) => {
        dispatch(logOutSuccess())
    }
}

export const logOutSuccess = () => {
    return { type: type.LOG_OUT_SUCCESS }
}