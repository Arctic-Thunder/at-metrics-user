import React, {Component} from 'react';
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

// import fetch from 'isomorphic-fetch'

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
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class LoginDialog extends Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch('https://arcticthunder.azurewebsites.net/api/login/', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        username: 'thally',
        password: 'Audio1919'
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    .then(res => console.log(res))
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({ user: data })
    //   console.log(data)
    // })
    // .catch(console.log)
  }

  render() {
    const {onClose, open} = this.props
    return (
      <div>
        <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={onClose}>
            Login
          </DialogTitle>
          <DialogContent dividers>
          <TextField
            id="outlined-username-input"
            label="Username"
            className={useStyles.textField}
            name="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={useStyles.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" className={useStyles.button}>
              Log In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    ) 
  }
}

export default LoginDialog