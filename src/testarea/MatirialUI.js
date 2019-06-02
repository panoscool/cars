import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, blue } from "@material-ui/core/colors";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[700],
    "&:hover": {
      backgroundColor: blue[800]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Custom CSS
      </ColorButton>
      <Button variant="contained" color="primary" className={classes.margin}>
        Theme Provider
      </Button>
    </div>
  );
}

export default CustomizedButtons;
