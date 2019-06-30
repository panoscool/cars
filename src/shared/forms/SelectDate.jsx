import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
  picker: {
    paddingTop: 8,
    paddingLeft: 10
  }
});

export default function MaterialUIPickers(props) {
  const classes = useStyles();

  const { label, values, required, handleChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.picker}>
        <KeyboardDatePicker
          required={required}
          fullWidth
          margin="dense"
          inputVariant="outlined"
          id="mui-pickers-date"
          label={label}
          format="dd/MMMM/yyyy"
          value={values}
          onChange={handleChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
