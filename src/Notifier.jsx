import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import CloseIcon from "@material-ui/icons/Close";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { amber, green, blue, red } from "@material-ui/core/colors";
import { closeSnackbar } from "./store/actions/notificationActions";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: red[700]
  },
  info: {
    backgroundColor: blue[600]
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function CustomizedSnackbars({ className }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, message, variant } = useSelector(
    state => state.notificationReducer
  );
  const Icon = variant && variantIcon[variant];

  function handleClose(event, reason) {
    if (reason === "clickaway") return;

    dispatch(closeSnackbar());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="notifier-snackbar"
        message={
          <span id="notifier-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
}

export default CustomizedSnackbars;
