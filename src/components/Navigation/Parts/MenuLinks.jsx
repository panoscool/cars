import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Hidden,
  Button,
  MenuItem,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { WbSunny } from "@material-ui/icons";
import green from "@material-ui/core/colors/green";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../store/actions/themeActions";
import LanguageSwitcher from "./LanguageSwitcher";
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
  const dispatch = useDispatch();
  const { type } = useSelector(state => state.themeReducer);

  const toggleThemeMode = () => {
    dispatch(setTheme(type === "light" ? "dark" : "light"));
  };

  return (
    <Fragment>
      <Hidden smDown implementation="css">
        <Button color="inherit" component={Link} to="/bicycle/search">
          Search
        </Button>

        <DropDown button="Informations">
          {subNav.map(nav => (
            <MenuItem key={nav.to} component={Link} to={nav.to}>
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
      {/* <LanguageSwitcher /> */}
      <Tooltip title="Toggle light/dark theme">
        <IconButton aria-label="toggle" onClick={toggleThemeMode}>
          <WbSunny color="inherit" />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

export default MenuLinks;
