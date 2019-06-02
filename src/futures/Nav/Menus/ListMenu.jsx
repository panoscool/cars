import React from "react";
import { Hidden, Button } from "@material-ui/core";
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

const MenuItems = () => {
  const classes = useStyles();
  return (
    <Hidden smDown implementation="css">
      <DropDown
        button="Search"
        item1="Cars"
        item2="Bikes"
        item3="Commercial"
        item4="Campers"
        item5="Boats"
        item6="Bikes"
      />
      <DropDown button="Offer" item1="Car" item2="Bike" item3="Commercial" />
      <DropDown
        button="Dealers"
        item1="Cars"
        item2="Bikes"
        item3="Commercial"
      />
      <DropDown
        button="Informations"
        item1="Cars"
        item2="Bikes"
        item3="Commercial"
      />

      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Free Classified
      </ColorButton>
    </Hidden>
  );
};

export default MenuItems;
