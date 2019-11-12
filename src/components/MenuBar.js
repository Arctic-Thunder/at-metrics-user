import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOutUser as logOutUserAction} from '../actions/userActions';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@material-ui/core';

import {Equalizer} from '@material-ui/icons';

const useStyles = makeStyles (theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing (2),
  },
  login: {
    textTransform: "none",
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing (3),
  },
  toolbar: theme.mixins.toolbar,
}));

export const MenuBar = props => {
  const classes = useStyles ();

  const handleLogout = event => {
    if (props.isAuthenticated) {
      props.logOutUser ();
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.menuButton}>
          <Equalizer />
        </Typography>
        <Typography align="left" variant="h6" className={classes.title}>
          Arctic Thunder Metrics
        </Typography>
        <Link
          color="inherit"
          underline="none"
          to={`/login`}
          component={RouterLink}
        >
          <Button variant="outlined" color="inherit" onClick={handleLogout} className={classes.login}>
            {' '}{props.isAuthenticated ? 'Logout' : 'Login or Register'}{' '}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

// Link Redux user object to dialog
const mapStateToProps = state => {
  const {user} = state;
  return {
    user: user.info,
    isAuthenticated: user.info.token !== undefined,
  };
};

const mapDispatchToProps = dispatch => ({
  logOutUser () {
    dispatch (logOutUserAction ());
  },
});

export default connect (mapStateToProps, mapDispatchToProps) (MenuBar);
