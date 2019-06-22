/* eslint-disable no-nested-ternary */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Link,
  ListItem,
  ListItemText,
  Breadcrumbs,
  Divider,
  Typography
} from "@material-ui/core";
import { Home, ArrowRight, ExpandLess, ExpandMore } from "@material-ui/icons";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

const breadcrumbNameMap = {
  "/classifieds/create": "Offer",
  "/car/create": "Car",
  "/bike/create": "Bike",
  "/commercial/create": "Commercial",
  "/camper/create": "Camper",
  "/boat/create": "Boat",
  "/bicycle/create": "Bicycle"
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 360
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
});

const LinkRouter = props => <Link {...props} component={RouterLink} />;

class RouterBreadcrumbs extends React.Component {
  state = {
    open: true
  };

  render() {
    const { classes } = this.props;

    return (
      <MemoryRouter initialEntries={["/classifieds/create"]} initialIndex={0}>
        <div className={classes.root}>
          <Route>
            {({ location }) => {
              const pathnames = location.pathname.split("/").filter(x => x);

              return (
                <Breadcrumbs
                  separator={<ArrowRight fontSize="small" />}
                  aria-label="Breadcrumb"
                >
                  <LinkRouter color="inherit" to="/">
                    <Home className={classes.icon} />
                    Home
                  </LinkRouter>
                  {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return last ? (
                      <Typography color="textPrimary" key={to}>
                        {breadcrumbNameMap[to]}
                      </Typography>
                    ) : (
                      <LinkRouter color="inherit" to={to} key={to}>
                        {breadcrumbNameMap[to]}
                      </LinkRouter>
                    );
                  })}
                </Breadcrumbs>
              );
            }}
          </Route>
        </div>
        <Divider variant="fullWidth" />
      </MemoryRouter>
    );
  }
}

RouterBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RouterBreadcrumbs);
