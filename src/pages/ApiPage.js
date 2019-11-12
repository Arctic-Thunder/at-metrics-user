import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  setCurrentPage as setCurrentPageAction,
} from '../actions/pageChangeActions';
import {Container} from '@material-ui/core';

import APIPanel from '../components/APIPanel';

export function ApiPage (props) {
  const apidata = [
    {name: '/api/new_user/', description: 'POST: Create User'},
    {name: '/api/login/', description: 'POST: Login User'},
    {
      name: '/api/projects/{{project_id}}/',
      description: 'GET: Get Project ; DEL: Delete Project',
    },

    {
      name: '/api/projects/{{project_id}}/metrics',
      description: 'GET: Get All Metrics For Project ; POST: Add New Metric To Project',
    },
    {
      name: '/api/projects/{{project_id}}/metrics/{{metric_id}}/',
      description: 'GET: Get Metric ; DEL: Delete Metric',
    },
  ];

  const renderRedirect = () => {
    if (!props.isAuthenticated) {
      console.log ('Redirect Loaded');
      return <Redirect to="/login" />;
    }
  };

  props.changePage (2);

  return (
    <Container className="api">
      {renderRedirect ()}
      {apidata.map ((data, index) => (
        <APIPanel name={data.name} description={data.description} key={index} />
      ))}
    </Container>
  );
}

const mapStateToProps = state => {
  const {user} = state;
  return {
    isAuthenticated: user.info.token !== undefined,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: index => dispatch (setCurrentPageAction (index)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (ApiPage);
