import { combineReducers } from 'redux'
import user from './userReducer'
import projects from './projectReducer'
import currentPage from './pageChangeReducer'

const rootReducer = combineReducers({
    user,
    projects,
    currentPage,
})

export default rootReducer