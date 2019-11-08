import * as types from '../actions/actionTypes'
import initialState from './initialState'

export const userReducer = (state = initialState.user, action) => {
    switch(action.type) {
        case types.LOG_IN_LOADING:
            return Object.assign({}, state, { loading: true })
        case types.LOG_IN_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload.error })
        case types.LOG_IN_SUCCESS:
            return Object.assign({}, state, { loading: false, error: null, info: action.payload })
        default:
            return state
    }
}

export default userReducer