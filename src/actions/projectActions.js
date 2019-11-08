import projectApi from '../api/projectApi'
import { project as type } from './actionTypes'

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

export const getAllProjectsLoading = () => {
    return {
        type: type.GET_ALL_PROJECTS_LOADING
    }
}

export const getAllProjectsFailure = error => {
    return {
        type: type.GET_ALL_PROJECTS_FAILURE,
        payload: { error }
    }
}
export const getAllProjectsSuccess = projects => {
    console.log(`Projects: ${projects}`)
    return {
        type: type.GET_ALL_PROJECTS_SUCCESS,
        payload: { projects }
    }
}