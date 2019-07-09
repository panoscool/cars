import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  picker: {
    minWidth: 120,
    width: "100%"
  },
  dense: {
    marginTop: theme.spacing(1)
  }
}));

export default function MaterialUIPickers(props) {
  const classes = useStyles();

  const { label, value, required, handleChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={clsx(classes.picker, classes.dense)}>
        <KeyboardDatePicker
          required={required}
          fullWidth
          margin="dense"
          inputVariant="outlined"
          id="mui-pickers-date"
          label={label}
          format="dd/MMMM/yyyy"
          value={value}
          onChange={handleChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
