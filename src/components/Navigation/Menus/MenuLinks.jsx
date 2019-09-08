import React from "react";
import { Link } from "react-router-dom";
import { Hidden, Button, MenuItem } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import DropDown from "./DropDown";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const subNav = [
  { to: "/contact", label: "Contact" },
  { to: "/market-guide", label: "Market Guide" },
  { to: "/users-faq", label: "Users F.A.Q." }
];

const MenuLinks = () => {
  const classes = useStyles();
  return (
    <Hidden smDown implementation="css">
      <Button color="inherit" component={Link} to="/bicycle/search">
        Search
      </Button>

      <DropDown button="Informations">
        {subNav.map(nav => (
          <MenuItem component={Link} to={nav.to}>
            {nav.label}
          </MenuItem>
        ))}
      </DropDown>

      <ColorButton
        variant="contained"
        color="primary"
        component={Link}
        to="/bicycle/create"
        className={classes.margin}
      >
        Free Classified
      </ColorButton>
    </Hidden>
  );
};

export default MenuLinks;
