import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu,
  Home,
  Info,
  Work,
  Pages,
  ArrowForward
} from "@material-ui/icons";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: `theme.spacing(y) * 3`
  }
});

class Navbar extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;

    const topMenu = (
      <Hidden smDown implementation="css">
        <Button component={Link} to="/">
          menu1
        </Button>
        <Button component={Link} to="/about">
          menu2
        </Button>
        <Button component={Link} to="/projects">
          menu3
        </Button>
        <Button component={Link} to="/work-together">
          menu4
        </Button>
        <Button component={Link} to="/auth">
          menu5
        </Button>
        <Button component={Link} to="/logout">
          menu6
        </Button>
      </Hidden>
    );

    const drawer = (
      <Fragment>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem
            component={Link}
            to="/"
            selected={"/"}
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
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
            onClick={this.handleDrawerToggle}
          >
            <IconButton color="inherit">
              <ArrowForward />
            </IconButton>
            menu6
          </MenuItem>
        </MenuList>
      </Fragment>
    );

    return (
      <Fragment>
        <CssBaseline />

        <div className={classes.root}>
          <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.grow}
                noWrap
              >
                <Link
                  to="/"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  logo
                </Link>
              </Typography>
              {topMenu}
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Navbar);
