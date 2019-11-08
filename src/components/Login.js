import React, {Component} from 'react';
import {
    Typography,
    Divider,
    TextField,
    Button,
    LinearProgress,
    Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { logInUser as logInUserAction } from '../actions/userActions'

// Link Redux actions to dialog
const mapDispatchToProps = dispatch =>
({
    logInUser(loginParams) {
      dispatch(logInUserAction(loginParams))
    } 
});

// Link Redux user object to dialog
const mapStateToProps = state => 
({
  user: state.user
});

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
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loading: false,
            success: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'usernameInput':
                this.setState({username: event.target.value})
            break

            case 'passwordInput':
                this.setState({password: event.target.value})
            break

            default:
                console.log('Received bad entry: ' + event.target.id)
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({loading: true})
        const loginParams = { username: this.state.username, password: this.state.password };
        this.props.logInUser(loginParams);
        this.setState({username: "", password: ""});
    }

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
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Login</Button>
                <Fade
                    in={this.state.loading && this.props.user.token === ''}
                    style={{
                        transitionDelay: this.state.loading && this.props.user.token === '' ? '800ms' : '0ms',
                    }}
                    unmountOnExit
                >
                    <LinearProgress />
                </Fade>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)