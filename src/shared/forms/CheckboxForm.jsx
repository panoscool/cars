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
  const {
    name,
    label,
    values,
    labelPlacement,
    handleChange,
    optionsType,
    optionsArray
  } = props;

  if (optionsType === "optionsArray") {
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {optionsArray.map(obj => (
              <FormControlLabel
                key={obj.key}
                label={obj.value}
                labelPlacement="end"
                control={
                  <Checkbox
                    name={obj.key}
                    value={obj.value}
                    onChange={handleChange}
                    color="primary"
                  />
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    );
  } else {
    return (
      <FormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        className={classes.formControlLabel}
        control={
          <Checkbox
            defaultChecked={props.defaultChecked}
            name={name}
            value={values}
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
}

export default Checkboxes;
