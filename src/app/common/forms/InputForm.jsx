import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  }
}));

function OutlinedTextFields(props) {
  const classes = useStyles();

  const { name, label, values, placeholder, handleChange } = props;
  return (
    <TextField
      id="outlined-dense"
      margin="dense"
      variant="outlined"
      name={name}
      value={values}
      label={label}
      placeholder={placeholder}
      fullWidth
      onChange={handleChange}
      className={clsx(classes.textField, classes.dense)}
    />
  );
}

export default OutlinedTextFields;
