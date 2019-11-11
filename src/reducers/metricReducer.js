import {metric as types} from '../actions/actionTypes';
import initialState from './initialState';

const removeMetric = (arr, target) => {
    const index = arr.findIndex (metric => metric.equals (target));
    return arr.splice (index, 1);
  };

export default function projectReducer (state = initialState.projects, action) {
    switch (action.type) {
      // Get all metrics
      case types.GET_ALL_METRICS_LOADING:
        return Object.assign ({}, state, {loading: true});
      case types.GET_ALL_METRICS_FAILURE:
        return Object.assign ({}, state, {
          loading: false,
          error: action.payload.error,
        });
      case types.GET_ALL_METRICS_SUCCESS:
        return Object.assign ({}, state, {
          loading: false,
          error: null,
          data: action.payload.metric,
        });
      // Get specific metric
      case types.GET_METRIC_LOADING:
        return Object.assign ({}, state, {loading: true});
      case types.GET_METRIC_FAILURE:
        return Object.assign ({}, state, {
          loading: false,
          error: action.payload.error,
        });
      case types.GET_METRIC_SUCCESS:
        return Object.assign ({}, state, {
          loading: false,
          error: null,
          data: [...state.data, action.payload.metric],
        });
      // Create new metric
      case types.CREATE_METRIC_LOADING:
        return Object.assign ({}, state, {loading: true});
      case types.CREATE_METRIC_FAILURE:
        return Object.assign ({}, state, {
          loading: false,
          error: action.payload.error,
        });
      case types.CREATE_METRIC_SUCCESS:
        return Object.assign ({}, state, {
          loading: false,
          error: null,
          data: [...state.data, action.payload.metric],
        });
      // Delete metric
      case types.DELETE_METRIC_LOADING:
        return Object.assign ({}, state, {loading: true});
      case types.DELETE_METRIC_FAILURE:
        return Object.assign ({}, state, {
          loading: false,
          error: action.payload.error,
        });
      case types.DELETE_METRIC_SUCCESS:
        return Object.assign ({}, state, {
          loading: false,
          error: null,
          data: removeMetric ([...state], action.payload.metric),
        });
      default:
        return state;
    }
  }