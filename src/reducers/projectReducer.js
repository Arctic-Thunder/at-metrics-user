import { project as types } from '../actions/actionTypes'
import initialState from './initialState'

export default function projectReducer(state = initialState.projects, action) {
    switch(action.type) {
        // Get all projects
        case types.GET_ALL_PROJECTS_LOADING:
            return Object.assign({}, state, { loading: true })
        case types.GET_ALL_PROJECTS_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload.error })
        case types.GET_ALL_PROJECTS_SUCCESS:
                return Object.assign({}, state, { loading: false, error: null, data: action.payload.projects })

        // Get specific project
        case types.GET_PROJECT_LOADING:
            return Object.assign({}, state, { loading: true })
        case types.GET_PROJECT_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload.error })
        case types.GET_PROJECT_SUCCESS:
            return Object.assign({}, state, { loading: false, error: null, data: [action.payload.project]})
        default:
            return state
    }
}