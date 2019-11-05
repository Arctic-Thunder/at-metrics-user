import React, {Component} from 'react';
import {
    Grid,
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
                <Grid
                    direction="column"
                >
                    <Grid
                        item
                        xs
                    >
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
                    </Grid>
                    <Grid
                        item
                        xs
                    >
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
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Login