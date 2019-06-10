import React from "react";
import { Link } from "react-router-dom";
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
        <MenuItem component={Link} to="/cars/search">
          <IconButton color="inherit">{icons.car}</IconButton>
          Cars
        </MenuItem>
        <MenuItem component={Link} to="/bikes/search">
          <IconButton color="inherit">{icons.bike}</IconButton>
          Bikes
        </MenuItem>
        <MenuItem component={Link} to="/commercial/search">
          <IconButton color="inherit">{icons.commercial}</IconButton>
          Commercial
        </MenuItem>
        <MenuItem component={Link} to="/campers/search">
          <IconButton color="inherit">{icons.camping}</IconButton>
          Campers
        </MenuItem>
        <MenuItem component={Link} to="/boats/search">
          <IconButton color="inherit">{icons.boat}</IconButton>
          Boats
        </MenuItem>
        <MenuItem component={Link} to="/bicycles/search">
          <IconButton color="inherit">{icons.bicycle}</IconButton>
          Bicycles
        </MenuItem>
      </DropDown>
      <DropDown button="Offer">
        <MenuItem component={Link} to="/car/create">
          <IconButton color="inherit">{icons.car}</IconButton>Car
        </MenuItem>
        <MenuItem component={Link} to="/bike/create">
          <IconButton color="inherit">{icons.bike}</IconButton>Bike
        </MenuItem>
        <MenuItem component={Link} to="/commercial/create">
          <IconButton color="inherit">{icons.commercial}</IconButton>Commercial
        </MenuItem>
        <MenuItem component={Link} to="/camper/create">
          <IconButton color="inherit">{icons.camping}</IconButton>Camper
        </MenuItem>
        <MenuItem component={Link} to="/boat/create">
          <IconButton color="inherit">{icons.boat}</IconButton>Boat
        </MenuItem>
        <MenuItem component={Link} to="/bicycle/create">
          <IconButton color="inherit">{icons.bicycle}</IconButton>
          Bicycle
        </MenuItem>
      </DropDown>
      <DropDown button="Dealers">
        <MenuItem component={Link} to="/dealers-list">
          Dealers List
        </MenuItem>
        <MenuItem component={Link} to="/dealers-map">
          Map of Dealers
        </MenuItem>
        <MenuItem component={Link} to="/business-catalog">
          Catalog of Businesses
        </MenuItem>
      </DropDown>
      <DropDown button="Informations">
        <MenuItem component={Link} to="/contact">
          Contact
        </MenuItem>
        <MenuItem component={Link} to="/market-guide">
          Market Guide
        </MenuItem>
        <MenuItem component={Link} to="/users-faq">
          Users F.A.Q.
        </MenuItem>
        <MenuItem component={Link} to="/dealers-faq">
          Dealers F.A.Q.
        </MenuItem>
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
