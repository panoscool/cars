import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Fab } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";

function ScrollDialog({ children }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("body");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Fab
        onClick={handleClickOpen("body")}
        color="primary"
        className="filter-button"
      >
        <FilterList />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">Filters</DialogTitle>
        <DialogContent dividers={scroll === "body"}>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ScrollDialog;
