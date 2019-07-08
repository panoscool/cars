import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(1, 3)
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));

function Checkboxes(props) {
  const classes = useStyles();
  const { name, label, value, checked, labelPlacement, handleChange } = props;

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      className={classes.formControlLabel}
      control={
        <Checkbox
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          color="primary"
          inputProps={{
            "aria-label": "primary checkbox"
          }}
        />
      }
    />
  );
}

export default Checkboxes;
