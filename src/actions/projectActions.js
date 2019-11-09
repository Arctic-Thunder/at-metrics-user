import projectApi from '../api/projectApi'
import { project as type } from './actionTypes'

// Get all projects
export const getAllProjects = () => {
    return ( dispatch, getState ) => {
        dispatch(getAllProjectsLoading())
        
        projectApi.getAllProjects( getState().user.info.token )
            .then(projects => {
                dispatch(getAllProjectsSuccess( projects ))
            }).catch(error => {
                dispatch(getAllProjectsFailure( error ))
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
    return {
        type: type.GET_ALL_PROJECTS_SUCCESS,
        payload: { projects }
    }
}

// Get specific project
export const getProject = (id) => {
    return ( dispatch, getState ) => {
        dispatch(getProjectLoading())

        projectApi.getProject( getState().user.info.token, id )
            .then(project => {
                dispatch(getProjectSuccess( project ))
            }).catch( error => {
                dispatch(getProjectFailure( error ))
                throw(error)
            })
    }
}

export const getProjectLoading = () => {
    return {
        type: type.GET_PROJECT_LOADING
    }
}

export const getProjectFailure = error => {
    return {
        type: type.GET_PROJECT_FAILURE,
        payload: { error }
    }
}

export const getProjectSuccess = project => {
    return {
        type: type.GET_PROJECT_SUCCESS,
        payload: { project }
    }
}