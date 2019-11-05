import React, {Component} from 'react';
import {
    Typography,
    Divider,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(1),
    },
    menu: {
      width: 300,
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

class Login extends React.Component {
    
    render() {
        return (
            <div>
              <Typography variant='h5' align='left'>Login</Typography>
              <Divider />
              <TextField
                  id="usernameInput"
                  label="Username"
                  className={useStyles.textField}
                  name="email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
              />
            </div>
        )
    }
}

export default Login