import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function projectReducer(state = initialState.projects, action) {
    switch(action.type) {
        case types.GET_ALL_PROJECTS:
            return action.projects
        default:
            return state
    }
}