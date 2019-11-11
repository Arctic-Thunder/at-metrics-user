import React, {Component} from 'react';

import {
  TextField,
  Divider,
  Typography,
  makeStyles,
  withStyles,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing (1),
    marginRight: theme.spacing (1),
  },
}));

const RegisterTextField = props => {
  const {name, label, type, classes, handleChange, ...other} = props;
  return (
    <TextField
      id={`${name}Input`}
      label={label}
      name={name}
      type={type}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={handleChange}
    />
  );
};

class Register extends React.Component {
  constructor () {
    super ();

    this.state = {
      email: '',
      username: '',
      password: '',
      verifyPassword: false,
    };

    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (event) {
    switch (event.target.name) {
      case 'usrName':
        this.setState ({username: event.target.value});
        break;

      case 'email':
        this.setState ({email: event.target.value});
        break;

      case 'password':
        this.setState ({password: event.target.value});
        break;

      case 'verifyPassword':
        this.setState ({
          verifyPassword: event.target.value === this.state.password,
        });
        break;

      default:
        console.log (`Error: ${event.target.name}`);
        break;
    }
  }

  render () {
    return (
      <div>
        <Typography variant="h5" align="left">Set Up Your Account</Typography>
        <Divider />
        <RegisterTextField
          name="usrName"
          label="Organization/User Name"
          classes={useStyles.textField}
          handleChange={this.handleChange}
        />
        <RegisterTextField
          name="email"
          label="Email"
          classes={useStyles.textField}
          handleChange={this.handleChange}
        />
        <RegisterTextField
          name="password"
          label="Password"
          type="password"
          classes={useStyles.textField}
          handleChange={this.handleChange}
        />
        <RegisterTextField
          name="verifyPassword"
          label="Verify"
          type="password"
          classes={useStyles.textField}
          handleChange={this.handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          disabled={!this.state.verifyPassword}
        >
          Register
        </Button>
      </div>
    );
  }
}

export default Register;
