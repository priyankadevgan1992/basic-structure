/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// eslint-disable-next-line react/display-name
const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function Toast({
  isSnackBar,
  message,
  show,
  severity,
  vertical = 'top',
  horizontal = 'center',
  duration,
  onClose
}) {
  const SnackBarComponent = isSnackBar ? Snackbar : Fragment;

  return show ? (
    <SnackBarComponent
      anchorOrigin={{ vertical, horizontal }}
      open={show}
      autoHideDuration={duration || 6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </SnackBarComponent>
  ) : null;
}

export default Toast;
