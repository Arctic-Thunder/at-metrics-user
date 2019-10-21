import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { logInUser as logInUserAction } from '../actions/userActions'

// Link Redux actions to dialog
const mapDispatchToProps = dispatch =>
({
    logInUser(loginParams) {
      dispatch(logInUserAction(loginParams))
    } 
})

// Link Redux user object to dialog
const mapStateToProps = state => 
({
  user: state.user
})

// Diaglog styling
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
    marginTop: theme.spacing(2),
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

class LoginDialog extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    var currentState = event.target.id === "usernameInput" ? {username: event.target.value} : {password: event.target.value}
    this.setState(currentState)
  }

  handleSubmit(event) {
    event.preventDefault()
    const loginParams = { username: this.state.username, password: this.state.password }
    console.log(`loginParams: ${loginParams.username}, ${loginParams.password}`)
    this.props.logInUser(loginParams)
    this.setState({username: "", password: ""})
  }

  render() {
    const {onClose, open} = this.props
    return (
      <div className={useStyles.container}>
        <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={onClose}>
            Login
          </DialogTitle>
          <DialogContent dividers>
          <TextField
            id="usernameInput"
            label="Username"
            className={useStyles.textField}
            name="email"
            margin="normal"
            variant="outlined"
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
            onChange={this.handleChange}
          />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" className={useStyles.button} onClick={this.handleSubmit}>
              Log In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    ) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)