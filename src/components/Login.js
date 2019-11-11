import React, {useState} from 'react';
import {
  Typography,
  Divider,
  TextField,
  Button,
  LinearProgress,
  Fade,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logInUser as logInUserAction} from '../actions/userActions';

const useStyles = makeStyles (theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing (1),
    marginRight: theme.spacing (1),
  },
  dense: {
    marginTop: theme.spacing (1),
  },
  menu: {
    width: 300,
  },
  button: {
    margin: theme.spacing (1),
  },
  input: {
    display: 'none',
  },
}));

const Login = props => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  const handleChange = event => {
    switch (event.target.id) {
      case 'usernameInput':
        setUsername (event.target.value);
        break;

      case 'passwordInput':
        setPassword (event.target.value);
        break;

      default:
        console.log ('Received bad entry: ' + event.target.id);
    }
  };

  const handleSubmit = event => {
    event.preventDefault ();
    props.logInUser (username, password);
    setUsername ('');
    setPassword ('');
  };

  const renderRedirect = () => {
    if (props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
  };

  return (
    <div>
      {renderRedirect ()}
      <Typography variant="h5" align="left">Login</Typography>
      <Divider />
      <TextField
        id="usernameInput"
        label="Username"
        className={useStyles.textField}
        name="email"
        margin="normal"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleChange}
      />
      <TextField
        id="passwordInput"
        label="Password"
        className={useStyles.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        fullWidth
        value={password}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
      <Fade
        in={props.loading}
        style={{
          transitionDelay: props.loading ? '800ms' : '0ms',
        }}
        unmountOnExit
      >
        <LinearProgress />
      </Fade>
    </div>
  );
};

// Link Redux actions to dialog
const mapDispatchToProps = dispatch => ({
  logInUser (username, password) {
    dispatch (logInUserAction (username, password));
  },
});

// Link Redux user object to dialog
const mapStateToProps = state => {
  const {user} = state;
  return {
    user: user.info,
    loading: user.loading,
    error: user.error,
    isAuthenticated: user.info.token !== undefined,
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Login);
