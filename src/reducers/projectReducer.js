import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function projectReducer(state = initialState.projects, action) {
    switch(action.type) {
        case types.GET_ALL_PROJECTS:
            return Object.assign({}, state, { projects: action.payload.projects })
        default:
            return state
    }
}