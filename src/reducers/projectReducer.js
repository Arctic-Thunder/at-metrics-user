import { project as types } from '../actions/actionTypes'
import initialState from './initialState'

function projectCompare(a, b) {
    return a.id > b.id
}

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
            return Object.assign({}, state, { loading: false, error: null, data: [...state.data, action.payload.project] })

        // Create New Project
        case types.CREATE_PROJECT_LOADING:
            return Object.assign({}, state, { loading: true})
        case types.CREATE_PROJECT_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload.error })
        case types.CREATE_PROJECT_SUCCESS:
            return Object.assign({}, state, { loading: false, error: null, data: [...state.data, action.payload.project]})
        default:
            return state
    }
}