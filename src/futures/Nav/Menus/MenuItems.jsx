import React, { useState } from "react";
import { Hidden, Button, Menu, MenuItem } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[900]),
    margin: {
      margin: theme.spacing(1)
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

const MenuItems = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Hidden smDown implementation="css">
      <Button
        aria-owns={anchorEl ? "search" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Search
      </Button>
      <Menu
        id="search"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Cars</MenuItem>
        <MenuItem onClick={handleClose}>Bikes</MenuItem>
        <MenuItem onClick={handleClose}>Cimmercial</MenuItem>
      </Menu>
      <Button
        aria-owns={anchorEl ? "offer" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Offer
      </Button>
      <Menu
        id="offer"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Car</MenuItem>
        <MenuItem onClick={handleClose}>Bike</MenuItem>
        <MenuItem onClick={handleClose}>Cimmercial</MenuItem>
      </Menu>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Dealers
      </Button>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Informations
      </Button>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.root}>
          Free Classified
        </Button>
      </ThemeProvider>
    </Hidden>
  );
};

export default MenuItems;
