import React, { Fragment, useState, useRef } from "react";
import {
  Grow,
  Paper,
  Popper,
  Button,
  MenuList,
  MenuItem,
  ClickAwayListener
} from "@material-ui/core";

const MenuListComposition = ({
  button,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <Fragment>
      <Button
        ref={anchorRef}
        aria-owns={open ? "menu-list" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="inherit"
      >
        {button}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper id="menu-list">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleClose}>{item1}</MenuItem>
                  <MenuItem onClick={handleClose}>{item2}</MenuItem>
                  <MenuItem onClick={handleClose}>{item3}</MenuItem>
                  <MenuItem onClick={handleClose}>{item4}</MenuItem>
                  <MenuItem onClick={handleClose}>{item5}</MenuItem>
                  <MenuItem onClick={handleClose}>{item6}</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default MenuListComposition;
