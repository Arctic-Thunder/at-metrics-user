import {currentPage as type} from './actionTypes';

// Get all projects
export const setCurrentPage = index => {
  return {
    type: type.PAGE_CHANGED,
    payload: {index},
  };
};
