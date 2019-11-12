import { metric as types } from './actionTypes';

const getToken = getState => {
  return getState ().user.info.token;
};

// Get All Metrics
export const getAllMetrics = () => {
  return (dispatch, getState) => {
    dispatch (getAllMetricsLoading ());

    metricsApi
      .getAllMetrics (getToken (getState))
      .then (metrics => {
        dispatch (getAllMetricsSuccess (metrics));
      })
      .catch (error => {
        dispatch (getAllProjectsFailure (error));
        throw error;
      });
  };
};

export const getAllMetricsLoading = () => ({
  type: types.GET_ALL_METRICS_LOADING,
});

export const getAllMetricsFailure = error => ({
  type: types.GET_ALL_METRICS_FAILURE,
  payload: {error},
});

export const getAllMetricsSuccess = metrics => ({
  type: types.GET_ALL_METRICS_SUCCESS,
  payload: {metrics},
});

// Create Metric
export const createMetric = () => {
    return (dispatch, getState) => {
        dispatch(createMetricLoading())

        metricsApi.createMetric(getToken(getState))
        .then(metric => {
            dispatch(createMetricSuccess(metric))
        })
        .catch ( error => {
            dispatch(createMetricFailure(error))
            throw error
        })
    }
};

export const createMetricLoading = () => ({
  type: types.CREATE_METRIC_LOADING
});

export const createMetricFailure = error => ({
  type: types.CREATE_METRIC_FAILURE,
  payload: { error }
});

export const createMetricSuccess = metric => ({
  type: types.CREATE_METRIC_SUCCESS,
  payload: { metric }
});

// Get Metric
export const getMetric = id => {
    return ( dispatch, getState) => {
        dispatch(getMetricSuccess())

        metricApi.getMetric(getToken(getState), id)
        .then(metric => {
            dispatch(getMetricSuccess(metric))
        })
        .catch(error => {
            dispatch(getMetricFailure(error))
            throw error
        })
    }
};

export const getMetricLoading = () => ({
  type: types.GET_METRIC_LOADING
});

export const getMetricFailure = error => ({
  type: types.GET_METRIC_FAILURE,
  payload: { error }
});

export const getMetricSuccess = metric => ({
  type: types.GET_METRIC_SUCCESS,
  payload: { metric }
});

// Delete Metric
export const deleteMetric = id => {
    return (dispatch, getState) => {
        dispatch(deleteMetricLoading())

        metricApi.deleteMetric(getToken(getState), id)
        .then(metric => {
            dispatch(deleteMetricSuccess(metric))
        })
        .catch(error => {
            dispatch(deleteMetricFailure(error))
            throw error
        })
    }
};

export const deleteMetricLoading = payload => ({
  type: types.DELETE_METRIC_LOADING
});

export const deleteMetricFailure = error => ({
  type: types.DELETE_METRIC_FAILURE,
  payload: { error }
});

export const deleteMetricSuccess = metric => ({
  type: types.DELETE_METRIC_SUCCESS,
  payload: { metric }
});
