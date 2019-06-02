import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IconButton, MenuList, MenuItem } from "@material-ui/core";
import { Home, Info, Work, Pages, ArrowForward } from "@material-ui/icons";

const DrawerMenu = ({ handleDrawerToggle }) => {
  return (
    <Fragment>
      <MenuList>
        <MenuItem
          component={Link}
          to="/"
          selected={"/"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <Home />
          </IconButton>
          menu1
        </MenuItem>
        <MenuItem
          component={Link}
          to="/about"
          selected={"/about"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <Info />
          </IconButton>
          menu2
        </MenuItem>
        <MenuItem
          component={Link}
          to="/projects"
          selected={"/projects"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <Pages />
          </IconButton>
          menu3
        </MenuItem>
        <MenuItem
          component={Link}
          to="/work-together"
          selected={"/work-together"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <Work />
          </IconButton>
          menu4
        </MenuItem>
        <MenuItem
          component={Link}
          to="/auth"
          selected={"/auth"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <ArrowForward />
          </IconButton>
          menu5
        </MenuItem>
        <MenuItem
          component={Link}
          to="/logout"
          selected={"/logout"}
          onClick={handleDrawerToggle}
        >
          <IconButton color="inherit">
            <ArrowForward />
          </IconButton>
          menu6
        </MenuItem>
      </MenuList>
    </Fragment>
  );
};
export default DrawerMenu;
