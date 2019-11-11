import React, {useEffect} from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core';

import ProjectDetailPage from './ProjectDetailPage';
import AllProjectsPage from './AllProjectsPage';
import {
  setCurrentPage as setCurrentPageAction,
} from '../actions/pageChangeActions';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
}));

export const ProjectsPageWrapper = props => {
  const {isAuthenticated} = props;
  const classes = useStyles ();

  const renderRedirect = () => {
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
  };

  props.changePage (1);

  return (
    <section className="projects">
      {renderRedirect ()}
      <Switch>
        <Route exact path="/projects">
          <AllProjectsPage />
        </Route>
        <Route
          path="/projects/:project_id"
          children={({match}) => (
            <ProjectDetailPage project_id={match.params.project_id} />
          )}
        />
      </Switch>
    </section>
  );
};

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

export default connect (mapStateToProps, mapDispatchToProps) (
  ProjectsPageWrapper
);
