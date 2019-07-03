import React, { Fragment, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Fab } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";

function ScrollDialog({ children, onFormSubmit }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Fab
        onClick={handleClickOpen("paper")}
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
        <DialogTitle id="scroll-dialog-title">Filters</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>{children}</DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onFormSubmit}
          >
            Show (1000)
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
export default ScrollDialog;
