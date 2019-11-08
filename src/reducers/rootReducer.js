import { combineReducers } from 'redux'
import user from './userReducer'
import projects from './projectReducer'

const rootReducer = combineReducers({
    user,
    projects
})

export default rootReducer