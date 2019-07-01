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
  },
  extras: {
    paddingRight: 8
  }
}));

const ExtraDetails = props => {
  const classes = useStyles();
  const { checkBoxes, bicycleObj } = props;

  const displayCheckBoxInfos = checkBoxes.filter(obj =>
    Boolean(bicycleObj[obj.key])
  );

  return (
    <div className={classes.root}>
      {displayCheckBoxInfos.length ? (
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Extras
          </Typography>
          <Divider variant="fullWidth" />
          <Typography variant="body2" className={classes.text}>
            {displayCheckBoxInfos.map(obj => (
              <span key={obj.key} className={classes.extras}>
                &#10003; {obj.label}
              </span>
            ))}
          </Typography>
        </Paper>
      ) : null}
    </div>
  );
};

export default ExtraDetails;
