import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton, Fab } from "@material-ui/core";
import { FilterList, Close } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

function ScrollDialog({ children }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Fab
        onClick={handleOpen("paper")}
        color="primary"
        className="filter-button"
      >
        <FilterList />
      </Fab>
      <Dialog
        // fullScreen
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">
          Filters
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>{children}</DialogContent>
      </Dialog>
    </Fragment>
  );
}
export default ScrollDialog;
