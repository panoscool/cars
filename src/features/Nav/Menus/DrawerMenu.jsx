import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { IconButton, MenuList, MenuItem } from "@material-ui/core";
import { Home, Edit, Search, Group, Info } from "@material-ui/icons";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import {
  DirectionsCar,
  DirectionsBike,
  LocalShipping,
  DirectionsBoat,
  Terrain,
  Motorcycle
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const icons = {
  car: <DirectionsCar />,
  bike: <Motorcycle />,
  commercial: <LocalShipping />,
  camping: <Terrain />,
  boat: <DirectionsBoat />,
  bicycle: <DirectionsBike />
};

const DrawerMenu = ({ handleDrawerToggle, location: { pathname } }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MenuList>
      <div>
        <MenuItem
          component={Link}
          to="/"
          selected={"/" === pathname}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <Home />
          </IconButton>
          Home
        </MenuItem>
      </div>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <IconButton color="inherit">
              <Search />
            </IconButton>
            Search
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem
              component={Link}
              to="/cars/search"
              selected={"/cars/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.car}</IconButton>
              Cars
            </MenuItem>
            <MenuItem
              component={Link}
              to="/bikes/search"
              selected={"/bikes/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.bike}</IconButton>
              Bikes
            </MenuItem>
            <MenuItem
              component={Link}
              to="/commercial/search"
              selected={"/commercial/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.commercial}</IconButton>
              Commercial
            </MenuItem>
            <MenuItem
              component={Link}
              to="/campers/search"
              selected={"/campers/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.camping}</IconButton>
              Campers
            </MenuItem>
            <MenuItem
              component={Link}
              to="/boats/search"
              selected={"/boats/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.boat}</IconButton>
              Boats
            </MenuItem>
            <MenuItem
              component={Link}
              to="/bicycles/search"
              selected={"/bicycles/search" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.bicycle}</IconButton>
              Bicycles
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>
            <IconButton color="inherit">
              <Edit />
            </IconButton>
            Offer
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem
              component={Link}
              to="/car/create"
              selected={"/car/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.car}</IconButton>Car
            </MenuItem>
            <MenuItem
              component={Link}
              to="/bike/create"
              selected={"/bike/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.bike}</IconButton>Bike
            </MenuItem>
            <MenuItem
              component={Link}
              to="/commercial/create"
              selected={"/commercial/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.commercial}</IconButton>
              Commercial
            </MenuItem>
            <MenuItem
              component={Link}
              to="/camper/create"
              selected={"/camper/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.camping}</IconButton>Camper
            </MenuItem>
            <MenuItem
              component={Link}
              to="/boat/create"
              selected={"/boat/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.boat}</IconButton>Boat
            </MenuItem>
            <MenuItem
              component={Link}
              to="/bicycle/create"
              selected={"/bicycle/create" === pathname}
              onClick={handleDrawerToggle}
            >
              <IconButton color="inherit">{icons.bicycle}</IconButton>
              Bicycle
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
            <IconButton color="inherit">
              <Group />
            </IconButton>
            Dealers
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem
              component={Link}
              to="/dealers-list"
              selected={"/dealers-list" === pathname}
              onClick={handleDrawerToggle}
            >
              Dealers List
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dealers-map"
              selected={"/dealers-map" === pathname}
              onClick={handleDrawerToggle}
            >
              Map of Dealers
            </MenuItem>
            <MenuItem
              component={Link}
              to="/business-catalog"
              selected={"/business-catalog" === pathname}
              onClick={handleDrawerToggle}
            >
              Catalog of Businesses
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>
            <IconButton color="inherit">
              <Info />
            </IconButton>
            Informations
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <MenuItem
              component={Link}
              to="/contact"
              selected={"/contact" === pathname}
              onClick={handleDrawerToggle}
            >
              Contact
            </MenuItem>
            <MenuItem
              component={Link}
              to="/market-guide"
              selected={"/market-guide" === pathname}
              onClick={handleDrawerToggle}
            >
              Market Guide
            </MenuItem>
            <MenuItem
              component={Link}
              to="/users-faq"
              selected={"/users-faq" === pathname}
              onClick={handleDrawerToggle}
            >
              Users F.A.Q.
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dealers-faq"
              selected={"/dealers-faq" === pathname}
              onClick={handleDrawerToggle}
            >
              Dealers F.A.Q.
            </MenuItem>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </MenuList>
  );
};
export default withRouter(DrawerMenu);
