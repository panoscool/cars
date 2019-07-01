import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(1),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(1)
  },
  title: {
    marginLeft: 16,
    marginTop: 16
  },
  text: {
    padding: 16
  }
}));

const DescriptionDetails = props => {
  const classes = useStyles();
  const { bicycleObj } = props;

  return (
    <div className={classes.root}>
      {bicycleObj.description !== "" ? (
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Descritpion
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="body2" className={classes.text}>
            {bicycleObj.description}
          </Typography>
        </Paper>
      ) : null}
    </div>
  );
};

export default DescriptionDetails;
