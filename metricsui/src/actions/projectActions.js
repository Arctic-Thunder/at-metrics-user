import projectApi from '../api/projectApi'
import {
    GET_ALL_PROJECTS
} from './actionTypes'

export function getAllProjects() {
    return function(dispatch) {
        return projectApi.getAllProjects()
            .then(projects => {
                dispatch(getAllProjectsSuccess(projects))
            }).catch(error => {
                throw(error)
            })
    }
}

export function getAllProjectsSuccess(projects) {
    return {type: GET_ALL_PROJECTS, projects}
}