import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import './Error.scss';

function MySnackbarContentWrapper(props) {
  const {
    className, message, onClose, variant, ...other
  } = props;

  return (
    <SnackbarContent
      className="error"
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className="message">
          <ErrorIcon className="icon iconVariant" />
          {message}
        </span>
)}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className="MuiSvgIcon-root" />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default function Error({ message }) {
  const [open, setOpen] = React.useState(true);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper onClose={handleClose} variant="error" message={message} />
      </Snackbar>
    </div>
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
