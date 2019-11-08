import { user as type } from '../actions/actionTypes'
import initialState from './initialState'

export const userReducer = (state = initialState.user, action) => {
    switch(action.type) {
        case type.LOG_IN_LOADING:
            return Object.assign({}, state, { loading: true })
        case type.LOG_IN_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload.error })
        case type.LOG_IN_SUCCESS:
            return Object.assign({}, state, { loading: false, error: null, info: action.payload.userData })
        case type.LOG_OUT_SUCCESS:
            return Object.assign({}, state, initialState.user )
        default:
            return state
    }
}

export default userReducer