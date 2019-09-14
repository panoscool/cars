import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green, blue, red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core/styles";
import { openSnackbar, closeSnackbar } from "./redux/snackbarActions";
import { Snackbar, SnackbarContent } from "@material-ui/core";

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
  const { open, message, variant } = useSelector(state => state.notificationReducer);
  const Icon = variantIcon[variant];

  function handleClick() {
    dispatch(openSnackbar("Client updated", "warning"));
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") return;

    dispatch(closeSnackbar());
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
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
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
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
    </div>
  );
}

export default CustomizedSnackbars;
