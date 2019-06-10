import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import ListMenu from "../Menus/ListMenu";
import DrawerMenu from "../Menus/DrawerMenu";

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
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none"
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

    return (
      <Fragment>
        <CssBaseline />

        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open-drawer"
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
              <ListMenu />
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
              <DrawerMenu handleDrawerToggle={this.handleDrawerToggle} />
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
