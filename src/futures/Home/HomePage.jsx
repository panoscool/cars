import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Search, Edit } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(8)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <Button variant="contained" color="primary" className={classes.button}>
        <Search className={classes.leftIcon} />
        Search
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        <Edit className={classes.leftIcon} />
        Offer
      </Button>
    </div>
  );
};

export default HomePage;
