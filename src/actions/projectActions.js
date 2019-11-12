import projectApi from '../api/projectApi';
import {project as type} from './actionTypes';

const getToken = getState => {
  return getState ().user.info.token;
};

// Get all projects
export const getAllProjects = () => {
  return (dispatch, getState) => {
    dispatch (getAllProjectsLoading ());

    projectApi
      .getAllProjects (getToken(getState))
      .then (projects => {
        dispatch (getAllProjectsSuccess (projects));
      })
      .catch (error => {
        dispatch (getAllProjectsFailure (error));
        throw error;
      });
  };
};

export const getAllProjectsLoading = () => {
  return {
    type: type.GET_ALL_PROJECTS_LOADING,
  };
};

export const getAllProjectsFailure = error => {
  return {
    type: type.GET_ALL_PROJECTS_FAILURE,
    payload: {error},
  };
};
export const getAllProjectsSuccess = projects => {
  return {
    type: type.GET_ALL_PROJECTS_SUCCESS,
    payload: {projects},
  };
};

// Get specific project
export const getProject = id => {
  return (dispatch, getState) => {
    dispatch (getProjectLoading ());

    projectApi
      .getProject (getToken (getState), id)
      .then (project => {
        dispatch (getProjectSuccess (project));
      })
      .catch (error => {
        dispatch (getProjectFailure (error));
        throw error;
      });
  };
};

export const getProjectLoading = () => {
  return {
    type: type.GET_PROJECT_LOADING,
  };
};

export const getProjectFailure = error => {
  return {
    type: type.GET_PROJECT_FAILURE,
    payload: {error},
  };
};

export const getProjectSuccess = project => {
  return {
    type: type.GET_PROJECT_SUCCESS,
    payload: {project},
  };
};

// Create new project
export const createProject = (name, description) => {
  return (dispatch, getState) => {
    dispatch (createProjectLoading ());

    projectApi
      .createProject (getToken (getState), name, description)
      .then (project => {
        dispatch (getProjectSuccess (project));
      })
      .catch (error => {
        dispatch (createProjectFailure (error));
        throw error;
      });
  };
};

export const createProjectLoading = () => {
  return {
    type: type.CREATE_PROJECT_LOADING,
  };
};

export const createProjectFailure = error => {
  return {
    type: type.CREATE_PROJECT_FAILURE,
    payload: {error},
  };
};

export const createProjectSuccess = project => {
  return {
    type: type.CREATE_PROJECT_SUCCESS,
    payload: {project},
  };
};

// Delete a project
export const deleteProject = id => {
  return (dispatch, getState) => {
    dispatch (deleteProjectLoading ());

    projectApi
      .deleteProject (getToken (getState), id)
      .then (project => {
        dispatch (deleteProjectSuccess (project));
      })
      .catch (error => {
        dispatch (deleteProjectFailure (error));
        throw error;
      });
  };
};

export const deleteProjectLoading = () => ({
  type: type.DELETE_PROJECT_LOADING,
});

export const deleteProjectFailure = error => ({
  type: type.DELETE_PROJECT_FAILURE,
  payload: {error},
});

export const deleteProjectSuccess = project => ({
  type: type.DELETE_PROJECT_SUCCESS,
  payload: {project},
});
