import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import CheckboxForm from "../../../../shared/forms/CheckboxForm";
import SelectForm from "../../../../shared/forms/SelectForm";
import InputForm from "../../../../shared/forms/InputForm";
import {
  offer,
  condition,
  color,
  modified
} from "../../../../data/SharedAttributes";
import {
  manufacturers,
  brakeType,
  category,
  gears
} from "../../../../data/bicycle/bicycle";

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: "auto"
  },
  paper: {
    width: "100%",
    padding: theme.spacing(3, 2)
  }
}));

const SideFilters = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {offer.map(obj => (
          <CheckboxForm
            name={obj.key}
            value={obj.key}
            label={obj.value}
            labelPlacement="end"
            // handleChange={handleChange}
          />
        ))}
      </Paper>
    </div>
  );
};

export default SideFilters;
