import React from "react";
import { Hidden, Button, MenuItem, IconButton } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  DirectionsCar,
  DirectionsBike,
  LocalShipping,
  DirectionsBoat,
  Terrain,
  Motorcycle
} from "@material-ui/icons";
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

const icons = {
  car: <DirectionsCar />,
  bike: <Motorcycle />,
  commercial: <LocalShipping />,
  camping: <Terrain />,
  boat: <DirectionsBoat />,
  bicycle: <DirectionsBike />
};

const MenuItems = () => {
  const classes = useStyles();
  return (
    <Hidden smDown implementation="css">
      <DropDown button="Search">
        <MenuItem>
          <IconButton color="inherit">{icons.car}</IconButton>
          Cars
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.bike}</IconButton>
          Bikes
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.commercial}</IconButton>
          Commercial
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.camping}</IconButton>
          Campers
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.boat}</IconButton>
          Boats
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.bicycle}</IconButton>
          Bicycles
        </MenuItem>
      </DropDown>
      <DropDown button="Offer">
        <MenuItem>
          <IconButton color="inherit">{icons.car}</IconButton>Car
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.bike}</IconButton>Bike
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.commercial}</IconButton>Commercial
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.camping}</IconButton>Camper
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.boat}</IconButton>Boat
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">{icons.bicycle}</IconButton>
          Bicycle
        </MenuItem>
      </DropDown>
      <DropDown button="Dealers">
        <MenuItem>Dealers List</MenuItem>
        <MenuItem>Map of Dealers</MenuItem>
        <MenuItem>Catalog of Businesses</MenuItem>
      </DropDown>
      <DropDown button="Informations">
        <MenuItem>Contact</MenuItem>
        <MenuItem>Market Guide</MenuItem>
        <MenuItem>Users F.A.Q.</MenuItem>
        <MenuItem>Dealers F.A.Q.</MenuItem>
      </DropDown>

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
