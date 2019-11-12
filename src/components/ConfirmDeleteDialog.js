import React from 'react';
import {Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button} from '@material-ui/core';

const ConfirmDeleteDialog = props => {
  const {title, open, description} = props;
  const handleClose = props.onClose;
  const handleContinue = props.onContinue;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog--title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog--description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>Cancel</Button>
        <Button onClick={handleContinue} color="secondary">Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
