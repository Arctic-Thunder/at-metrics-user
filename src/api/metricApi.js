class MetricApi {
    //Get all metrics for project
    static getAllMetrics (token, id) {
        return fetch (`${process.env.API_URL}/projects/${id}/metrics`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        })
          .then (response => response.json ())
          .then (data => {
            return data;
          })
          .catch (error => {
            return error;
          });
      }

      // Get specific metric
      static getMetric (token, pid, mid) {
        return fetch (`${process.env.API_URL}/projects/${pid}/metrics/${mid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        })
          .then (response => response.json ())
          .then (data => {
            return data;
          })
          .catch (error => {
            return error;
          });
      }

      // Delete specific metric
      static deleteMetric (token, pid, mid) {
        return fetch (`${process.env.API_URL}/projects/${pid}/metrics/${mid}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        })
          .then (response => response.json ())
          .then (data => {
            return data;
          })
          .catch (error => {
            return error;
          });
      }
}

export default MetricApi;